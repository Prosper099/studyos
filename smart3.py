#!/usr/bin/env python3
"""smart3: shuffle answer options on every quiz build + local-date activity keys + 1-point chart."""
import re, sys

P = '/home/user/index.html'
s = open(P, encoding='utf-8').read()

def rep(old, new, n=1):
    global s
    c = s.count(old)
    assert c == n, f'anchor found {c}x (want {n}): {old[:70]!r}'
    s = s.replace(old, new)

# 1) shuffleOptions helper next to shuffled()
rep("""function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}""",
"""function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
/** Return a copy of the question with its options shuffled and the correct index remapped.
 *  The bank is authored with the right answer first — never show that pattern to students. */
function shuffleOptions(q) {
  const order = shuffled(q.options.map((_, i) => i));
  return { ...q, options: order.map(i => q.options[i]), correct: order.indexOf(q.correct) };
}""")

# 2) buildQuiz shuffles options on everything it returns
rep("  return uniq.slice(0, Math.min(count === Infinity ? uniq.length : count, uniq.length));",
    "  return uniq.slice(0, Math.min(count === Infinity ? uniq.length : count, uniq.length)).map(shuffleOptions);")

# 3) CBT exam assembly shuffles options too
rep("    pick.forEach(q => questions.push(q));",
    "    pick.forEach(q => questions.push(shuffleOptions(q)));")

# 4) submitQuiz fallback bank also shuffled
rep("""  const quiz = (state.quiz.questions && state.quiz.questions.length) ? state.quiz.questions
    : state.quiz.mode === 'mock' ? quizFor(subject)
    : state.quiz.mode === 'past' ? pastFor(subject)
    : topicQuiz(subject, state.quiz.level, state.quiz.topicIdx);""",
"""  const quiz = (state.quiz.questions && state.quiz.questions.length) ? state.quiz.questions
    : (state.quiz.mode === 'mock' ? quizFor(subject)
      : state.quiz.mode === 'past' ? pastFor(subject)
        : topicQuiz(subject, state.quiz.level, state.quiz.topicIdx)).map(shuffleOptions);""")

# 5) local-date helper + pushHistory uses it (heatmap is local-date based)
rep("""function pushHistory(result, subject, mode) {
  const qs = state.quizStats;
  qs.history = Array.isArray(qs.history) ? qs.history : [];
  qs.history.push({ d: todayISO(), p: result.percent, s: subject, m: mode || 'quiz', c: result.correct, t: result.total });
  if (qs.history.length > 60) qs.history = qs.history.slice(-60);
  qs.days = qs.days || {};
  const d0 = todayISO();""",
"""function localISO(dt) {
  const x = dt || new Date();
  return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
}
function pushHistory(result, subject, mode) {
  const qs = state.quizStats;
  qs.history = Array.isArray(qs.history) ? qs.history : [];
  qs.history.push({ d: localISO(), p: result.percent, s: subject, m: mode || 'quiz', c: result.correct, t: result.total });
  if (qs.history.length > 60) qs.history = qs.history.slice(-60);
  qs.days = qs.days || {};
  const d0 = localISO();""")

# 6) heatmap reuses localISO
rep("  const iso = x => x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');",
    "  const iso = x => localISO(x);")

# 7) recordTask: quizzes already bump the day via pushHistory — avoid double counting
rep("  { const qs = state.quizStats; qs.days = qs.days || {}; qs.days[d] = (qs.days[d] || 0) + 1; }",
    "  if (kind !== 'quiz') { const qs = state.quizStats; qs.days = qs.days || {}; const dl = localISO(); qs.days[dl] = (qs.days[dl] || 0) + 1; }")

# 8) chart renders a single first data point instead of staying blank
rep("  if (pts.length < 2) return '<p class=\"rounded-xl bg-slate-50 px-3 py-4 text-center text-xs font-semibold text-slate-400\">Take a couple of quizzes and your score graph starts growing here. 📈</p>';",
"""  if (pts.length === 0) return '<p class="rounded-xl bg-slate-50 px-3 py-4 text-center text-xs font-semibold text-slate-400">Take a couple of quizzes and your score graph starts growing here. 📈</p>';
  if (pts.length === 1) {
    const q0 = pts[0], y0 = (154 - (q0.p / 100) * 128).toFixed(1);
    return `<svg viewBox="0 0 560 180" class="w-full" role="img" aria-label="Quiz score trend">
      <line x1="26" y1="154" x2="534" y2="154" stroke="#cbd5e1" stroke-width="1.4"/>
      <line x1="26" y1="${y0}" x2="534" y2="${y0}" stroke="#e2e8f0" stroke-dasharray="4 4"/>
      <circle cx="280" cy="${y0}" r="5.5" fill="${q0.p >= 70 ? '#059669' : q0.p >= 40 ? '#d97706' : '#e11d48'}"/>
      <text x="280" y="22" font-size="11" fill="#64748b" font-weight="800" text-anchor="middle">${q0.p}% on ${escapeHtml(q0.s)} — first data point recorded. One more quiz draws your trend line.</text>
    </svg>`;
  }""")

# 9) expose new helpers to the test hook
rep("  markGot, markLater, pushHistory,",
    "  markGot, markLater, pushHistory, progressChartSvg, activityHeatSvg, shuffleOptions, localISO,")

open(P, 'w', encoding='utf-8').write(s)
print('smart3 applied OK')
