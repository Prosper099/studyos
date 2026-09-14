# smart1.py — per-topic intelligence + Smart Coach Buddy. RUN ONCE.
path = 'index.html'
s = open(path, encoding='utf-8').read()

def rep(old, new, n=1):
    global s
    assert s.count(old) == n, ('COUNT', old[:70], s.count(old))
    s = s.replace(old, new)

# 1: build byTopic on every submitted quiz
rep("""  state.quiz.submitted = true;
  state.quiz.result = result;""",
"""  {
    const byTopic = {};
    quiz.forEach(q => {
      const sub = q.subject || subject;
      const tp = q.topic || (state.quiz.mode === 'topic' ? state.quiz.topicTitle : '') || 'Mixed practice';
      const key = sub + ' | ' + tp;
      const b = byTopic[key] || (byTopic[key] = { correct: 0, total: 0 });
      b.total++;
      if (state.quiz.answers[q.id] === q.correct) b.correct++;
    });
    result.byTopic = byTopic;
  }
  state.quiz.submitted = true;
  state.quiz.result = result;""")

# 2: persist byTopic in the CBT merge
rep("""    qs.bySubject = { ...(qs.bySubject || {}) };
    for (const [sub, b] of Object.entries(result.bySubject)) {""",
"""    qs.bySubject = { ...(qs.bySubject || {}) };
    qs.byTopic = { ...(qs.byTopic || {}) };
    for (const [key, b] of Object.entries(result.byTopic || {})) {
      const t0 = qs.byTopic[key] || { correct: 0, total: 0 };
      qs.byTopic[key] = { correct: t0.correct + b.correct, total: t0.total + b.total };
    }
    for (const [sub, b] of Object.entries(result.bySubject)) {""")

# 3: persist byTopic in mergeQuizStats (topic/mock/past path)
rep("""  stats.bySubject = { ...(stats.bySubject || {}) };""",
"""  stats.bySubject = { ...(stats.bySubject || {}) };
  stats.byTopic = { ...(stats.byTopic || {}) };
  for (const [key, b] of Object.entries(result.byTopic || {})) {
    const t0 = stats.byTopic[key] || { correct: 0, total: 0 };
    stats.byTopic[key] = { correct: t0.correct + b.correct, total: t0.total + b.total };
  }""")

# 4: buildStudyPlan picks the actual weakest topic
rep("""  if (state.examPrefs && state.examPrefs.lastWeak && subs.includes(state.examPrefs.lastWeak)) focus = state.examPrefs.lastWeak;
  const topics = topicsFor(focus, lvl);
  const dayIdx = Math.floor(Date.now() / 86400000) % Math.max(1, topics.length);
  const focusTopic = topics.length ? topics[dayIdx].title : '';""",
"""  if (state.examPrefs && state.examPrefs.lastWeak && subs.includes(state.examPrefs.lastWeak)) focus = state.examPrefs.lastWeak;
  const topics = topicsFor(focus, lvl);
  const bt = (state.quizStats && state.quizStats.byTopic) || {};
  let focusTopic = '', focusTopicPct = null;
  for (const [key, b] of Object.entries(bt)) {
    if (!key.startsWith(focus + ' | ') || !b.total || b.total < 3) continue;
    const pct = Math.round((b.correct / b.total) * 100);
    if (focusTopicPct === null || pct < focusTopicPct) { focusTopicPct = pct; focusTopic = key.slice(focus.length + 3); }
  }
  if (!focusTopic && topics.length) {
    const dayIdx = Math.floor(Date.now() / 86400000) % Math.max(1, topics.length);
    focusTopic = topics[dayIdx].title;
  }""")
rep("  return { focus, focusPct, anyStats, focusTopic, minutes, quizCount, pref };",
    "  return { focus, focusPct, anyStats, focusTopic, focusTopicPct, minutes, quizCount, pref };")

# 5: mission header shows the coach line
rep("<span class=\"text-[11px] font-semibold text-slate-400\">${p.minutes} min · ${p.anyStats ? 'focus: ' + p.focus : 'diagnostic week'}</span>",
    "<span class=\"text-[11px] font-semibold text-slate-400\">${p.minutes} min · ${p.anyStats ? 'coach: ' + p.focus + (p.focusPct != null ? ' (' + p.focusPct + '%)' : '') + (p.focusTopicPct != null ? ' → ' + p.focusTopic + ' ' + p.focusTopicPct + '%' : '') : 'diagnostic week'}</span>")

# 6: Buddy intents
rep("""  if (/\\b(thanks?|thank you|well done|good job|appreciate)\\b/.test(raw)) {""",
"""  if (/\\b(what should i (study|do|revise)|where (do|should) i start|my weak|weakest|recommend|coach me)\\b/.test(raw)) return smartCoachReply();
  if (/\\bhow am i doing|my progress|my report|my stats|progress report\\b/.test(raw)) return progressReportReply();
  if (/\\b(thanks?|thank you|well done|good job|appreciate)\\b/.test(raw)) {""")

# 7: coach functions next to the other buddy helpers
rep("""function examStrategyChip() {""",
"""function weakestTopicInfo() {
  const lvl = state.profile.classLevel || 'SS3';
  const subs = (state.profile.subjects || []).length ? state.profile.subjects : subjectsForLevel(lvl);
  const bs = (state.quizStats && state.quizStats.bySubject) || {};
  let weakSub = null, weakPct = null, strongSub = null, strongPct = null;
  for (const sub of subs) {
    const b = bs[sub];
    if (!b || !b.total) continue;
    const p = Math.round((b.correct / b.total) * 100);
    if (weakPct === null || p < weakPct) { weakPct = p; weakSub = sub; }
    if (strongPct === null || p > strongPct) { strongPct = p; strongSub = sub; }
  }
  const bt = (state.quizStats && state.quizStats.byTopic) || {};
  let weakTop = null, topPct = null;
  for (const [key, b] of Object.entries(bt)) {
    if (!b.total || b.total < 3) continue;
    if (weakSub && !key.startsWith(weakSub + ' | ')) continue;
    const p = Math.round((b.correct / b.total) * 100);
    if (topPct === null || p < topPct) { topPct = p; weakTop = key.split(' | ')[1]; }
  }
  return { weakSub, weakPct, strongSub, strongPct, weakTop, topPct };
}
function smartCoachReply() {
  const w = weakestTopicInfo();
  if (!w.weakSub) {
    return {
      html: mdToHtml("No stats on you yet — and that is fine, diagnostic week is how I learn your strengths. 🕵️\\n\\nTake **two or three topic quizzes** in any of your subjects and I will start coaching you personally: weakest topic first, strongest topic for confidence."),
      chips: ['Next topic in my subject', 'Give me a study plan', examTipsChip()]
    };
  }
  const lines = [`Your growth edge right now is **${w.weakSub} at ${w.weakPct}%**.`];
  if (w.weakTop) lines.push(`Inside it, **${w.weakTop} (${w.topPct}%)** is the one topic that moves your score fastest — start there.`);
  else lines.push('A couple more quizzes will tell me exactly which topic to send you to first.');
  if (w.strongSub && w.strongSub !== w.weakSub) lines.push(`Warm up with **${w.strongSub} (${w.strongPct}%)** when you want a confidence win.`);
  lines.push('');
  lines.push(String(state.profile.classLevel || '').startsWith('JSS')
    ? 'Steady small wins now are exactly how BECE champions are made. 🔥'
    : 'Weak-topic-first is how the big exams are actually won. 🔥');
  return {
    html: mdToHtml(lines.join('\\n')),
    chips: ['Explain ' + (w.weakTop || w.weakSub), 'Give me a study plan', examTipsChip()]
  };
}
function progressReportReply() {
  const qs = state.quizStats || {};
  if (!qs.attempts) {
    return {
      html: mdToHtml("Your report card is empty for now — your first quiz writes line one. 📊\\n\\nTry a topic quiz in any subject and ask me again."),
      chips: ['Next topic in my subject', 'Give me a study plan']
    };
  }
  const w = weakestTopicInfo();
  const acc = qs.total ? Math.round((qs.correct / qs.total) * 100) : 0;
  const lines = [
    `**${state.profile.name ? state.profile.name.split(' ')[0] + ', here' : 'Here'} is your report:**`,
    '',
    `• Quizzes taken: **${qs.attempts}** · overall accuracy **${acc}%** · best score **${qs.bestPercent || 0}%**`,
    `• Strongest: **${w.strongSub || '—'}${w.strongPct != null ? ' (' + w.strongPct + '%)' : ''}** · growth edge: **${w.weakSub || '—'}${w.weakPct != null ? ' (' + w.weakPct + '%)' : ''}**`,
    `• Streak: **${state.streak} day${state.streak === 1 ? '' : 's'}** 🔥`,
    ''
  ];
  lines.push(String(state.profile.classLevel || '').startsWith('JSS')
    ? 'Honest coach note: consistency is beating intensity for you — keep the daily mission green and the BECE takes care of itself.'
    : 'Honest coach note: attack the growth edge twice this week and watch that percentage climb.');
  return { html: mdToHtml(lines.join('\\n')), chips: ['What should I study?', 'Give me a study plan', examStrategyChip()] };
}
function examStrategyChip() {""")

# 8: Buddy greeting lists all subjects honestly
rep("I can explain any topic in **Mathematics, English, Basic Science and Basic Technology**, or **Physics, Chemistry and Biology** for senior students, solve a quadratic or a pair of simultaneous equations step by step, or help you plan your revision.",
    "I can explain any topic across **all your subjects — junior and senior**, solve a quadratic or a pair of simultaneous equations step by step, coach you from your own quiz stats, or help you plan your revision.")

open(path, 'w', encoding='utf-8').write(s)
print('smart1 applied')
