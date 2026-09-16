# exam_cbt.py — real CBT exam hall: setup wizard (quick start / custom), multi-subject papers,
# navigator with review marks, 5-min warning + auto-submit, results with analysis & plan. RUN ONCE.
path = 'index.html'
s = open(path, encoding='utf-8').read()

def rep(old, new, label, count=1):
    global s
    n = s.count(old)
    assert n == count, (label, n)
    s = s.replace(old, new)
    print('ok:', label)

# ---------- 1. state ----------
rep("  quizSetup: { count: 10, minutes: 0 },",
    "  quizSetup: { count: 10, minutes: 0 },\n  examPrefs: { classLevel: '', examType: '', subjects: [], count: 20, counts: {}, minutes: 60, lastWeak: '' },\n  examCustomOpen: false,",
    'state examPrefs')

# ---------- 2. CBT engine (insert before quizFor) ----------
CBT_ENGINE = '''/** Effective CBT preferences: saved prefs topped up from the student's profile. */
function effectiveExamPrefs() {
  const p = state.examPrefs || {};
  const classLevel = p.classLevel || state.profile.classLevel || 'SS3';
  const availSubs = subjectsForLevel(classLevel);
  let subjects = (p.subjects || []).filter(x => availSubs.includes(x));
  if (!subjects.length) subjects = (state.profile.subjects || []).filter(x => availSubs.includes(x)).slice(0, 4);
  if (!subjects.length) subjects = availSubs.slice(0, 4);
  const exams = examsForLevel(classLevel).map(e => e.id);
  let examType = exams.includes(p.examType) ? p.examType : (exams.includes(state.profile.targetExam) ? state.profile.targetExam : (exams[0] || 'General'));
  if (p.examType === 'Custom Practice') examType = 'Custom Practice';
  return {
    classLevel, examType, subjects,
    count: Math.max(5, Math.min(40, Number(p.count) || 20)),
    counts: p.counts || {},
    minutes: (p.minutes === 0 ? 0 : Math.max(5, Math.min(240, Number(p.minutes) || 60)))
  };
}
function setExamClass(level) {
  const p = state.examPrefs;
  p.classLevel = level;
  const avail = subjectsForLevel(level);
  p.subjects = (p.subjects || []).filter(x => avail.includes(x));
  const exams = examsForLevel(level).map(e => e.id);
  if (p.examType && p.examType !== 'Custom Practice' && !exams.includes(p.examType)) p.examType = '';
  persistProgress(); renderPage();
}
function setExamType(t) { state.examPrefs.examType = t; persistProgress(); renderPage(); }
function toggleExamSubject(sub) {
  const p = state.examPrefs;
  p.subjects = p.subjects || [];
  const i = p.subjects.indexOf(sub);
  if (i >= 0) p.subjects.splice(i, 1); else p.subjects.push(sub);
  persistProgress(); renderPage();
}
function setExamCount(sub, n) {
  const p = state.examPrefs;
  p.counts = p.counts || {};
  p.counts[sub] = Math.max(5, Math.min(40, Number(n) || 20));
  persistProgress(); renderPage();
}
function setExamDefaultCount(n) { state.examPrefs.count = Math.max(5, Math.min(40, Number(n) || 20)); persistProgress(); renderPage(); }
function setExamMinutes(m) { state.examPrefs.minutes = Math.max(0, Math.min(240, Number(m) || 0)); persistProgress(); renderPage(); }
function toggleCustomExam() { state.examCustomOpen = !state.examCustomOpen; renderPage(); }

function cbtSetupHtml() {
  const p = effectiveExamPrefs();
  const saved = state.examPrefs || {};
  const totalQ = p.subjects.reduce((a, sub) => a + Math.max(5, Math.min(40, (p.counts || {})[sub] || p.count)), 0);
  const summary = `${p.classLevel} · ${p.examType} · ${p.subjects.length} subject${p.subjects.length === 1 ? '' : 's'} · ${totalQ} questions · ${p.minutes > 0 ? p.minutes + ' min' : 'no timer'}`;
  if (!state.examCustomOpen) {
    return `
    <section class="mb-5 rounded-2xl border border-slate-900/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-5 text-white shadow-card animate-fadeUp">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div class="text-[11px] font-black uppercase tracking-widest text-indigo-300">🖥️ STUDYOS EXAM — CBT hall</div>
          <h3 class="mt-1 text-lg font-bold">Sit a full exam, exactly like the real centre</h3>
          <p class="mt-1 text-xs text-slate-300">Current paper: <b class="text-white">${summary}</b></p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button type="button" onclick="startCbtExam()" class="rounded-xl bg-indigo-600 px-5 py-3 text-xs font-black text-white transition hover:bg-indigo-500">⚡ Quick Start</button>
          <button type="button" onclick="toggleCustomExam()" class="rounded-xl bg-white/10 px-5 py-3 text-xs font-black text-white transition hover:bg-white/20">⚙️ Custom Exam</button>
        </div>
      </div>
      <p class="mt-3 text-[10px] text-slate-400">Quick Start uses your saved preferences — one click, paper on screen. Custom lets you configure class, exam type, subjects, questions per subject and the timer.</p>
    </section>`;
  }
  const classes = ['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3'];
  const examIds = examsForLevel(p.classLevel).map(e => e.id).concat(['Custom Practice']);
  return `
  <section class="mb-5 rounded-2xl border border-indigo-200 bg-white p-5 shadow-card animate-fadeUp">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-sm font-black text-slate-900">⚙️ Configure your exam</h3>
      <button type="button" onclick="toggleCustomExam()" class="text-[11px] font-bold text-slate-400 transition hover:text-slate-600">Close ✕</button>
    </div>
    <div class="space-y-4">
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">1 · Select class</div>
        <div class="mt-1.5 flex flex-wrap gap-1.5">${classes.map(cl => `<button type="button" onclick="setExamClass('${cl}')" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${p.classLevel === cl ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${cl}</button>`).join('')}</div>
      </div>
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">2 · Select exam type</div>
        <div class="mt-1.5 flex flex-wrap gap-1.5">${examIds.map(ex => `<button type="button" onclick="setExamType('${ex}')" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${p.examType === ex ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${ex}</button>`).join('')}</div>
      </div>
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">3 · Select subjects</div>
        <div class="mt-1.5 flex flex-wrap gap-1.5">${subjectsForLevel(p.classLevel).map(sub => { const on = p.subjects.includes(sub); return `<button type="button" onclick="toggleExamSubject('${sub}')" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${on ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${on ? '☑' : '☐'} ${sub}</button>`; }).join('')}</div>
      </div>
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">4 · Questions per subject</div>
        <div class="mt-1.5 grid gap-2 sm:grid-cols-2">${p.subjects.map(sub => { const n = (p.counts || {})[sub] || p.count; return `
          <div class="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
            <span class="text-xs font-bold text-slate-700">${sub}</span>
            <span class="flex items-center gap-2">
              <button type="button" onclick="setExamCount('${sub}', ${n - 5})" class="h-6 w-6 rounded-lg bg-white text-xs font-black text-slate-600 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-100">−</button>
              <span class="w-7 text-center text-xs font-black text-indigo-700">${n}</span>
              <button type="button" onclick="setExamCount('${sub}', ${n + 5})" class="h-6 w-6 rounded-lg bg-white text-xs font-black text-slate-600 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-100">+</button>
            </span>
          </div>`; }).join('') || '<p class="text-[11px] text-slate-400">Pick at least one subject above.</p>'}</div>
      </div>
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">5 · Set timer</div>
        <div class="mt-1.5 flex flex-wrap items-center gap-1.5">
          ${[15, 30, 45, 60, 90, 120].map(mn => `<button type="button" onclick="setExamMinutes(${mn})" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${p.minutes === mn ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${mn} min</button>`).join('')}
          <button type="button" onclick="setExamMinutes(0)" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${p.minutes === 0 ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">No timer</button>
          <label class="ml-1 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">⚙ Custom:
            <input type="number" min="5" max="240" value="${p.minutes || 60}" onchange="setExamMinutes(this.value)"
              class="w-16 rounded-lg border border-slate-200 px-2 py-1 text-[11px] font-bold text-slate-700" /> min
          </label>
        </div>
      </div>
      <div class="flex items-center justify-between border-t border-slate-100 pt-4">
        <p class="text-[11px] font-semibold text-slate-500">${summary}</p>
        <button type="button" onclick="startCbtExam()" ${p.subjects.length ? '' : 'disabled'} class="rounded-xl bg-slate-900 px-6 py-3 text-xs font-black text-white transition hover:bg-slate-800 disabled:opacity-40">🖥️ Start Exam →</button>
      </div>
    </div>
  </section>`;
}

/** Build and launch a multi-subject CBT paper from the effective preferences. */
function startCbtExam() {
  const p = effectiveExamPrefs();
  const questions = [];
  let seq = 0;
  for (const sub of p.subjects) {
    const want = Math.max(5, Math.min(40, (p.counts || {})[sub] || p.count));
    const pool = [];
    (CURRICULUM[sub].topics[p.classLevel] || []).forEach((t, ti) => {
      (t.quiz || []).forEach((q, qi) => pool.push({ ...q, id: `cbt-${sub.slice(0, 3).toLowerCase()}-t${ti}q${qi}`, subject: sub, topic: t.title }));
    });
    (quizFor(sub) || []).forEach((q, i) => pool.push({ ...q, id: `cbt-${sub.slice(0, 3).toLowerCase()}-m${i}`, subject: sub, topic: 'Mixed practice' }));
    (pastFor(sub) || []).forEach((q, i) => pool.push({ ...q, id: `cbt-${sub.slice(0, 3).toLowerCase()}-p${i}`, subject: sub, topic: 'Past questions' }));
    const pick = shuffled(pool).slice(0, want);
    pick.forEach(q => questions.push(q));
    seq += pick.length;
  }
  if (!questions.length) { toast('No questions available for this selection yet.'); return; }
  state.quiz = {
    mode: 'cbt', answers: {}, reviewed: {}, submitted: false, score: 0, result: null,
    level: p.classLevel, topicIdx: 0, topicTitle: '',
    questions: shuffled(questions), examIdx: 0,
    deadline: p.minutes > 0 ? Date.now() + p.minutes * 60000 : 0,
    startedAt: Date.now(), timeUp: false,
    meta: { classLevel: p.classLevel, examType: p.examType, subjects: p.subjects.slice(), minutes: p.minutes }
  };
  state.page = 'quiz';
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMarkReview(qid) {
  const qz = state.quiz;
  if (!qz || qz.submitted) return;
  qz.reviewed = qz.reviewed || {};
  qz.reviewed[qid] = !qz.reviewed[qid];
  renderPage();
}
function reviewMistakesScroll() {
  const el = document.getElementById('cbt-review');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function planFromExam() {
  const r = state.quiz.result;
  if (r && r.bySubject) {
    let weak = null, weakPct = Infinity;
    for (const [sub, b] of Object.entries(r.bySubject)) {
      const pct = b.total ? (b.correct / b.total) * 100 : 0;
      if (pct < weakPct) { weakPct = pct; weak = sub; }
    }
    if (weak) state.examPrefs.lastWeak = weak;
  }
  persistProgress();
  state.page = 'home';
  renderPage();
  toast('Study plan updated — your weakest subject comes first 💪');
}

function fmtExamTime(ms) {
  const total = Math.max(0, Math.round((ms || 0) / 1000));
  const m = Math.floor(total / 60), sec = total % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

'''
anchor = "/** Mixed subject-wide exam practice (the revision bank). */"
# insert before examJump block comment
anchor2 = "/* Exam-mode navigation — past questions run like the real CBT hall. */"
assert s.count(anchor2) == 1
s = s.replace(anchor2, CBT_ENGINE + anchor2)
print('ok: CBT engine inserted')

# ---------- 3. timer tick refactor (5-min warning, clamped 00:00, auto-submit) ----------
rep('''function startQuizTimer() {
  stopQuizTimer();
  quizTimerInt = setInterval(() => {
    const qz = state.quiz;
    const chip = document.getElementById('quiz-timer');
    if (!qz.deadline || qz.submitted || state.page !== 'quiz' || !chip) { stopQuizTimer(); return; }
    const left = qz.deadline - Date.now();
    chip.textContent = (left <= 60000 ? '⚠️ ' : '⏱ ') + fmtCountdown(left);
    chip.classList.toggle('bg-rose-50', left <= 60000);
    chip.classList.toggle('text-rose-700', left <= 60000);
    chip.classList.toggle('ring-rose-200', left <= 60000);
    chip.classList.toggle('animate-pulse', left <= 60000);
    if (left <= 0) { stopQuizTimer(); submitQuiz(true); }
  }, 1000);
}''',
'''function startQuizTimer() {
  stopQuizTimer();
  quizTimerInt = setInterval(quizTimerTick, 1000);
}
/* One clock beat: amber for the final 5 minutes, red + pulse for the final minute,
   a clean 00:00 (never negative) and an automatic submission at zero. */
function quizTimerTick() {
  const qz = state.quiz;
  if (!qz || !qz.deadline || qz.submitted || state.page !== 'quiz') { stopQuizTimer(); return; }
  const left = qz.deadline - Date.now();
  const chip = document.getElementById('quiz-timer');
  if (chip) {
    chip.textContent = (left <= 60000 ? '⚠️ ' : '⏱ ') + fmtCountdown(Math.max(0, left));
    const crit = left <= 60000, warn = left <= 300000;
    chip.classList.toggle('bg-rose-50', crit);
    chip.classList.toggle('text-rose-700', crit);
    chip.classList.toggle('ring-rose-200', crit);
    chip.classList.toggle('animate-pulse', crit);
    chip.classList.toggle('bg-amber-50', warn && !crit);
    chip.classList.toggle('text-amber-700', warn && !crit);
    chip.classList.toggle('ring-amber-200', warn && !crit);
  }
  if (left <= 0) { stopQuizTimer(); qz.timeUp = true; submitQuiz(true); }
}''',
    'timer tick refactor')

# ---------- 4. submitQuiz: cbt analytics ----------
rep('''  const result = gradeQuiz(quiz, state.quiz.answers);
  if (state.quiz.mode === 'past') state.tasks.pastDrills = (state.tasks.pastDrills || 0) + 1;
  if (state.quiz.deadline && quiz.length >= 15 && result.percent === 100) state.tasks.timedAces = (state.tasks.timedAces || 0) + 1;
  state.quiz.submitted = true;
  state.quiz.result = result;
  state.quizStats = mergeQuizStats(state.quizStats, subject, result);''',
    '''  const result = gradeQuiz(quiz, state.quiz.answers);
  if (state.quiz.mode === 'past') state.tasks.pastDrills = (state.tasks.pastDrills || 0) + 1;
  if (state.quiz.deadline && quiz.length >= 15 && result.percent === 100) state.tasks.timedAces = (state.tasks.timedAces || 0) + 1;
  if (state.quiz.mode === 'cbt') {
    const bySubject = {}, wrongTopics = {};
    let unanswered = 0;
    quiz.forEach(q => {
      const sub = q.subject || subject;
      const b = bySubject[sub] || (bySubject[sub] = { correct: 0, total: 0 });
      b.total++;
      const chosen = state.quiz.answers[q.id];
      if (chosen === undefined) unanswered++;
      if (chosen === q.correct) b.correct++;
      else {
        const tp = q.topic || 'General';
        const wt = wrongTopics[sub] || (wrongTopics[sub] = {});
        wt[tp] = (wt[tp] || 0) + 1;
      }
    });
    result.bySubject = bySubject;
    result.wrongTopics = wrongTopics;
    result.unanswered = unanswered;
    result.timeMs = Date.now() - (state.quiz.startedAt || Date.now());
    result.timeUp = !!state.quiz.timeUp;
  }
  state.quiz.submitted = true;
  state.quiz.result = result;
  if (state.quiz.mode === 'cbt') {
    const qs = state.quizStats;
    qs.attempts = (qs.attempts || 0) + 1;
    qs.correct = (qs.correct || 0) + result.correct;
    qs.total = (qs.total || 0) + result.total;
    qs.bestPercent = Math.max(qs.bestPercent || 0, result.percent);
    qs.bySubject = { ...(qs.bySubject || {}) };
    for (const [sub, b] of Object.entries(result.bySubject)) {
      const s0 = qs.bySubject[sub] || { attempts: 0, correct: 0, total: 0, bestPercent: 0 };
      qs.bySubject[sub] = {
        attempts: s0.attempts + 1, correct: s0.correct + b.correct, total: s0.total + b.total,
        bestPercent: Math.max(s0.bestPercent, b.total ? Math.round((b.correct / b.total) * 100) : 0)
      };
    }
  } else {
    state.quizStats = mergeQuizStats(state.quizStats, subject, result);
  }''',
    'submitQuiz cbt analytics')

# ---------- 5. retakeQuiz handles cbt ----------
rep('''function retakeQuiz() {
  const qz = state.quiz;''',
    '''function retakeQuiz() {
  const qz = state.quiz;
  if (qz.mode === 'cbt') { startCbtExam(); return; }''',
    'retake cbt')

# ---------- 6. list mode: setup section ----------
rep('''    el.innerHTML = `
      ${pageHeader('Practice Exam', 'Your personal CBT centre — pick the subject, the number of questions and the timer, then drill.')}
      ${subjectSelector('quiz')}''',
    '''    el.innerHTML = `
      ${pageHeader('Practice Exam', 'Your personal CBT centre — quick-start a full exam or configure everything yourself.')}
      ${cbtSetupHtml()}
      ${subjectSelector('quiz')}''',
    'cbt setup in list mode')

# ---------- 7. cbt hall + results branches ----------
CBT_BRANCH = '''  if (qz.mode === 'cbt' && !qz.submitted) {
    const qi = Math.min(Math.max(qz.examIdx || 0, 0), quiz.length - 1);
    const q = quiz[qi];
    const chosen = state.quiz.answers[q.id];
    const marked = !!(qz.reviewed || {})[q.id];
    el.innerHTML = `
      <div class="mb-4 rounded-2xl bg-slate-900 p-4 text-white shadow-card animate-fadeUp">
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div class="text-sm font-black tracking-widest">STUDYOS EXAM</div>
          <div class="text-[11px] font-bold text-slate-300">${(qz.meta || {}).examType || 'Practice'} · ${(qz.meta || {}).classLevel || level}</div>
          <div class="ml-auto flex items-center gap-3">
            <span class="text-xs font-bold text-slate-200">Question ${qi + 1} / ${quiz.length}</span>
            ${qz.deadline ? `<span id="quiz-timer" class="rounded-full bg-white/10 px-2.5 py-1 font-mono text-xs font-bold text-white ring-1 ring-inset ring-white/20">⏱ ${fmtCountdown(Math.max(0, qz.deadline - Date.now()))}</span>` : '<span class="rounded-full bg-white/10 px-2.5 py-1 text-xs font-bold text-slate-200">No time limit</span>'}
          </div>
        </div>
      </div>

      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
        <div class="mb-3 flex items-start gap-3">
          <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[11px] font-bold text-white">${qi + 1}</span>
          <h3 class="flex-1 text-sm font-bold leading-relaxed text-slate-900">${q.q}${q.src ? `<span class="ml-2 inline-block rounded bg-amber-100 px-1.5 py-0.5 align-middle text-[9px] font-bold text-amber-700">${q.src}</span>` : ''}${q.subject ? `<span class="ml-2 inline-block rounded bg-indigo-50 px-1.5 py-0.5 align-middle text-[9px] font-bold text-indigo-600">${q.subject}</span>` : ''}</h3>
        </div>
        <div class="grid gap-2">
          ${q.options.map((opt, oi) => {
            const picked = chosen === oi;
            return `
            <button type="button" onclick="selectQuizAnswer('${q.id}', ${oi})"
              class="flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-xs font-semibold text-slate-700 transition-all ${picked ? 'border-indigo-400 bg-indigo-50 ring-1 ring-inset ring-indigo-300' : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50'}">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${picked ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'} text-[10px] font-bold">${String.fromCharCode(65 + oi)}</span>
              <span class="flex-1">${opt}</span>
            </button>`;
          }).join('')}
        </div>
        <label class="mt-4 flex cursor-pointer items-center gap-2 text-xs font-bold ${marked ? 'text-amber-600' : 'text-slate-500'}">
          <input type="checkbox" class="h-4 w-4 accent-amber-500" ${marked ? 'checked' : ''} onchange="toggleMarkReview('${q.id}')" />
          🔖 Mark for review — come back to this question before submitting
        </label>
      </section>

      <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onclick="examPrev()" ${qi === 0 ? 'disabled' : ''}
          class="rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 disabled:opacity-40">← Previous</button>
        <button type="button" onclick="submitExam()" class="rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-black text-white shadow-card transition hover:bg-emerald-500">Submit Exam ✓</button>
        ${qi === quiz.length - 1
          ? '<span class="w-24"></span>'
          : `<button type="button" onclick="examNext()" class="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-card transition hover:bg-slate-800">Next →</button>`}
      </div>

      <div class="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
        <div class="mb-2 flex flex-wrap items-center gap-3">
          <div class="text-[10px] font-black uppercase tracking-widest text-slate-400">Question Navigator</div>
          <div class="flex flex-wrap gap-2 text-[9px] font-bold text-slate-400">
            <span class="flex items-center gap-1"><span class="h-2.5 w-2.5 rounded bg-slate-900"></span> current</span>
            <span class="flex items-center gap-1"><span class="h-2.5 w-2.5 rounded bg-indigo-600"></span> answered</span>
            <span class="flex items-center gap-1"><span class="h-2.5 w-2.5 rounded bg-slate-200"></span> unanswered</span>
            <span class="flex items-center gap-1"><span class="h-2.5 w-2.5 rounded bg-amber-400"></span> marked</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5">
          ${quiz.map((qq, i) => {
            const isCur = i === qi, isAns = state.quiz.answers[qq.id] !== undefined, isMark = !!(state.quiz.reviewed || {})[qq.id];
            const cls = isCur ? 'bg-slate-900 text-white ring-2 ring-indigo-300' : isMark ? 'bg-amber-400 text-slate-900' : isAns ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200';
            return `<button type="button" onclick="examJump(${i})" title="Go to question ${i + 1}${isMark ? ' (marked for review)' : isAns ? ' (answered)' : ''}"
              class="h-8 w-8 rounded-lg text-[11px] font-bold transition ${cls}">${i + 1}</button>`;
          }).join('')}
        </div>
      </div>`;
    return;
  }

  if (qz.mode === 'cbt' && qz.submitted) {
    const r = qz.result;
    const wrong = r.total - r.correct - (r.unanswered || 0);
    const subs = Object.entries(r.bySubject || {}).map(([sub, b]) => ({ sub, pct: b.total ? Math.round((b.correct / b.total) * 100) : 0, b }));
    subs.sort((a, b) => b.pct - a.pct);
    const strongest = subs[0], weakest = subs[subs.length - 1];
    let weakTopic = '';
    if (weakest && r.wrongTopics && r.wrongTopics[weakest.sub]) {
      weakTopic = Object.entries(r.wrongTopics[weakest.sub]).sort((a, b) => b[1] - a[1])[0][0];
    }
    const mistakes = quiz.filter(q => state.quiz.answers[q.id] !== q.correct);
    el.innerHTML = `
      ${r.timeUp ? `
      <div class="mb-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-center animate-fadeUp">
        <div class="text-lg font-black text-rose-700">⏰ Time's up!</div>
        <p class="mt-1 text-xs font-semibold text-rose-600">Your exam has been submitted automatically — exactly like a real CBT centre.</p>
      </div>` : ''}
      <div class="mb-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
        <div class="text-[11px] font-black uppercase tracking-widest text-indigo-500">🎯 Exam Results</div>
        <div class="mt-2 flex flex-wrap items-center gap-6">
          <div class="text-4xl font-black ${r.percent >= 60 ? 'text-emerald-600' : 'text-amber-600'}">${r.percent}%</div>
          <div class="grid grid-cols-2 gap-x-8 gap-y-1 text-xs font-bold text-slate-600 sm:grid-cols-4">
            <span>✅ Correct: <b class="text-emerald-600">${r.correct}</b></span>
            <span>❌ Wrong: <b class="text-rose-600">${wrong}</b></span>
            <span>➖ Unanswered: <b class="text-slate-500">${r.unanswered || 0}</b></span>
            <span>⏱ Time: <b class="text-indigo-600">${fmtExamTime(r.timeMs)}</b></span>
          </div>
        </div>
        <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div class="h-full rounded-full ${r.percent >= 60 ? 'bg-emerald-500' : 'bg-amber-500'} transition-all duration-700" style="width:${r.percent}%"></div>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-3 text-sm font-bold text-slate-900">📊 Subject Performance</h3>
          <div class="space-y-2.5">
            ${subs.map(x => `
              <div>
                <div class="mb-1 flex justify-between text-[11px] font-bold"><span class="text-slate-600">${x.sub}</span><span class="${x.pct >= 60 ? 'text-emerald-600' : 'text-amber-600'}">${x.pct}% (${x.b.correct}/${x.b.total})</span></div>
                <div class="h-1.5 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full ${x.pct >= 60 ? 'bg-emerald-500' : 'bg-amber-500'}" style="width:${x.pct}%"></div></div>
              </div>`).join('')}
          </div>
        </section>
        <section class="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 shadow-card">
          <h3 class="mb-2 text-sm font-bold text-indigo-900">🧠 StudyOS Analysis</h3>
          <ul class="space-y-1.5 text-xs font-semibold text-indigo-900">
            <li>💪 Your strongest area: <b>${strongest ? strongest.sub : '—'}${strongest ? ' (' + strongest.pct + '%)' : ''}</b></li>
            <li>🎯 Needs attention: <b>${weakest ? weakest.sub : '—'}${weakTopic ? ' — ' + weakTopic : ''}</b></li>
            <li>${r.unanswered ? `⚠️ ${r.unanswered} question${r.unanswered > 1 ? 's' : ''} left blank — practise pacing with the timer.` : '✅ You attempted every question — great pacing.'}</li>
          </ul>
          <div class="mt-4 flex flex-wrap gap-2">
            <button type="button" onclick="reviewMistakesScroll()" class="rounded-xl bg-white px-4 py-2 text-xs font-bold text-indigo-700 ring-1 ring-inset ring-indigo-200 transition hover:bg-indigo-100">Review Mistakes →</button>
            <button type="button" onclick="planFromExam()" class="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-700">Generate Study Plan →</button>
            <button type="button" onclick="retakeQuiz()" class="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800">↻ Retake</button>
          </div>
        </section>
      </div>

      <div id="cbt-review" class="mt-6 space-y-4">
        <h3 class="text-sm font-bold text-slate-900">📝 Review your mistakes (${mistakes.length})</h3>
        ${mistakes.length ? mistakes.map((q, i) => {
          const chosen = state.quiz.answers[q.id];
          return `
          <section class="rounded-2xl border border-rose-200 bg-white p-5 shadow-card">
            <div class="mb-2 flex items-start gap-2">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-[10px] font-bold text-white">${i + 1}</span>
              <h4 class="flex-1 text-xs font-bold leading-relaxed text-slate-900">${q.q}${q.subject ? `<span class="ml-2 rounded bg-indigo-50 px-1.5 py-0.5 text-[9px] font-bold text-indigo-600">${q.subject}</span>` : ''}${q.src ? `<span class="ml-1 rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">${q.src}</span>` : ''}</h4>
            </div>
            <p class="text-[11px] font-semibold ${chosen === undefined ? 'text-slate-400' : 'text-rose-600'}">Your answer: ${chosen === undefined ? '— (left blank)' : q.options[chosen]}</p>
            <p class="text-[11px] font-semibold text-emerald-700">Correct: ${q.options[q.correct]}</p>
            <p class="mt-2 rounded-xl bg-slate-50 p-3 text-[11px] leading-relaxed text-slate-600">${q.exp}</p>
          </section>`;
        }).join('') : '<p class="rounded-2xl bg-emerald-50 p-4 text-xs font-bold text-emerald-700">A perfect paper — nothing to review. 🎉</p>'}
      </div>
      <div class="mt-6 flex justify-center">
        <button type="button" onclick="backToQuizList()" class="rounded-xl bg-white px-6 py-2.5 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">← Back to exam setup</button>
      </div>`;
    return;
  }

'''
anchor3 = "  if (qz.mode === 'past' && !state.quiz.submitted) {"
assert s.count(anchor3) == 1
s = s.replace(anchor3, CBT_BRANCH + anchor3)
print('ok: cbt hall + results branches')

# ---------- 8. plan engine honours lastWeak ----------
rep('''  const topics = topicsFor(focus, lvl);''',
    '''  if (state.examPrefs && state.examPrefs.lastWeak && subs.includes(state.examPrefs.lastWeak)) focus = state.examPrefs.lastWeak;
  const topics = topicsFor(focus, lvl);''',
    'mission follows exam weakness')

# ---------- 9. persistence ----------
rep('''      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,
      quizSetup: state.quizSetup,
      updatedAt: serverTimestamp()''',
    '''      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,
      quizSetup: state.quizSetup, examPrefs: state.examPrefs,
      updatedAt: serverTimestamp()''',
    'persistStreak examPrefs')
rep("      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,\n      quizSetup: state.quizSetup, settings: state.settings",
    "      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,\n      quizSetup: state.quizSetup, examPrefs: state.examPrefs, settings: state.settings",
    'saveLocal examPrefs')
rep('''  const qs = (data.quizSetup && typeof data.quizSetup === 'object') ? data.quizSetup : {};''',
    '''  const qs = (data.quizSetup && typeof data.quizSetup === 'object') ? data.quizSetup : {};
  const ep = (data.examPrefs && typeof data.examPrefs === 'object') ? data.examPrefs : {};
  state.examPrefs = {
    classLevel: ep.classLevel || '', examType: ep.examType || '',
    subjects: Array.isArray(ep.subjects) ? ep.subjects : [],
    count: Number(ep.count) || 20, counts: (ep.counts && typeof ep.counts === 'object') ? ep.counts : {},
    minutes: ep.minutes === 0 ? 0 : (Number(ep.minutes) || 60), lastWeak: ep.lastWeak || ''
  };''',
    'hydrate examPrefs')

# ---------- 10. exports ----------
rep("  onboardBack, onboardNext, markLessonDone, openSetup, closeSetup, copyRules,",
    "  onboardBack, onboardNext, markLessonDone, openSetup, closeSetup, copyRules,\n  startCbtExam, toggleCustomExam, setExamClass, setExamType, toggleExamSubject, setExamCount, setExamDefaultCount,\n  setExamMinutes, toggleMarkReview, reviewMistakesScroll, planFromExam, quizTimerTick,",
    'window exports cbt')

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
