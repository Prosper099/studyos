# Two fixes: (1) questions-per-subject must reflect the real question bank size;
# (2) a working way back out of an open quiz (visible Exit + browser Back).
path = 'index.html'
s = open(path).read()

def rep(old, new, label, count=1):
    global s
    n = s.count(old)
    assert n == count, (label, n)
    s = s.replace(old, new)
    print('ok:', label)

# ---- 1. bank-size helpers ------------------------------------------------
rep("""/** Effective CBT preferences: saved prefs topped up from the student's profile. */""",
    """/** How many questions the bank actually holds for one subject at one class level. */
function examPoolSize(sub, classLevel) {
  const s = CURRICULUM[sub];
  if (!s) return 0;
  let n = (quizFor(sub) || []).length + (pastFor(sub) || []).length;
  ((s.topics || {})[classLevel] || []).forEach(t => { n += (t.quiz || []).length; });
  return n;
}
/** The real per-subject paper size: wanted count, capped by the bank. */
function examSubjectCount(sub, p) {
  const avail = examPoolSize(sub, p.classLevel);
  return Math.min(Math.max(5, (p.counts || {})[sub] || p.count), Math.max(avail, 1));
}
/** Effective CBT preferences: saved prefs topped up from the student's profile. */""",
    'examPoolSize helpers')

# ---- 2. setExamCount caps at the bank -------------------------------------
rep("""function setExamCount(sub, n) {
  const p = state.examPrefs;
  p.counts = p.counts || {};
  p.counts[sub] = Math.max(5, Math.min(40, Number(n) || 20));
  persistProgress(); renderPage();
}""",
    """function setExamCount(sub, n) {
  const p = state.examPrefs;
  p.counts = p.counts || {};
  const avail = examPoolSize(sub, effectiveExamPrefs().classLevel);
  p.counts[sub] = Math.min(Math.max(5, Number(n) || 20), Math.max(avail, 1));
  persistProgress(); renderPage();
}""",
    'setExamCount caps at bank')

# ---- 3. Quick Start summary uses real counts ------------------------------
rep("""  const totalQ = p.subjects.reduce((a, sub) => a + Math.max(5, Math.min(40, (p.counts || {})[sub] || p.count)), 0);""",
    """  const totalQ = p.subjects.reduce((a, sub) => a + examSubjectCount(sub, p), 0);""",
    'summary real total')

# ---- 4. step 4 UI: show bank size, clamp display, disable at limits --------
rep("""${p.subjects.map(sub => { const n = (p.counts || {})[sub] || p.count; return `""",
    """${p.subjects.map(sub => { const avail = examPoolSize(sub, p.classLevel); const max = Math.max(5, avail); const n = Math.min((p.counts || {})[sub] || p.count, max); return `""",
    'step4 bank vars')
rep("""            <span class="text-xs font-bold text-slate-700">${sub}</span>
            <span class="flex items-center gap-2">""",
    """            <span class="text-xs font-bold text-slate-700">${sub} <span class="text-[9px] font-bold text-slate-400">(${avail} in bank)</span></span>
            <span class="flex items-center gap-2">""",
    'step4 bank label')
rep("""onclick="setExamCount('${sub}', ${n - 5})" class=""",
    """onclick="setExamCount('${sub}', ${n - 5})" ${n <= 5 ? 'disabled' : ''} class=""",
    'step4 minus disable')
rep("""onclick="setExamCount('${sub}', ${n + 5})" class=""",
    """onclick="setExamCount('${sub}', ${n + 5})" ${n >= max ? 'disabled' : ''} class=""",
    'step4 plus disable')
rep("""h-6 w-6 rounded-lg bg-white text-xs font-black text-slate-600 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-100\">""",
    """h-6 w-6 rounded-lg bg-white text-xs font-black text-slate-600 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-100 disabled:opacity-30\">""",
    'step4 disabled style', count=2)

# ---- 5. Exit button in the CBT hall header ---------------------------------
rep("""        <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div class="text-sm font-black tracking-widest">STUDYOS EXAM</div>""",
    """        <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <button type="button" onclick="exitCbtExam()" class="rounded-lg bg-white/10 px-2.5 py-1 text-[10px] font-bold text-slate-200 transition hover:bg-white/20" title="Leave the exam">✕ Exit</button>
          <div class="text-sm font-black tracking-widest">STUDYOS EXAM</div>""",
    'exam hall exit button')

# ---- 6. exitCbtExam + browser Back support ----------------------------------
rep("""function backToQuizList() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' };
  renderPage();
}""",
    """function exitCbtExam() {
  const qz = state.quiz;
  if (qz && qz.mode === 'cbt' && !qz.submitted && !confirm('Leave this exam? Your progress on this paper will be lost.')) return;
  stopQuizTimer();
  backToQuizList();
}
/* Phone/browser Back button: leave the open quiz first, then the page — it used to do nothing. */
function armBackGuard() {
  try { if (window.history && window.history.pushState) window.history.pushState({ studyosQuiz: 1 }, ''); } catch (e) { /* no history API */ }
}
if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('popstate', () => {
    const qz = state.quiz;
    if (state.page === 'quiz' && qz && qz.mode !== 'list' && !qz.submitted) { stopQuizTimer(); backToQuizList(); return; }
    if (state.page !== 'home') { state.page = 'home'; closeDrawer(); renderPage(); }
  });
}
function backToQuizList() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' };
  renderPage();
}""",
    'exitCbtExam + popstate')

# ---- 7. arm the guard in every quiz starter ---------------------------------
rep("""    questions: buildQuiz(state.selectedSubject, 'past'), deadline: quizDeadline(), examIdx: 0 };
  state.page = 'quiz';
  renderPage();""",
    """    questions: buildQuiz(state.selectedSubject, 'past'), deadline: quizDeadline(), examIdx: 0 };
  state.page = 'quiz';
  armBackGuard();
  renderPage();""",
    'guard startPastQuiz')
rep("""  state.page = 'quiz';
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMarkReview(qid) {""",
    """  state.page = 'quiz';
  armBackGuard();
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMarkReview(qid) {""",
    'guard startCbtExam')
rep("""    questions: buildQuiz(subject, 'topic', level, ti), deadline: quizDeadline() };
  state.page = 'quiz';
  renderPage();""",
    """    questions: buildQuiz(subject, 'topic', level, ti), deadline: quizDeadline() };
  state.page = 'quiz';
  armBackGuard();
  renderPage();""",
    'guard startTopicQuiz')
rep("""    questions: buildQuiz(state.selectedSubject, 'mock'), deadline: quizDeadline() };
  state.page = 'quiz';
  renderPage();""",
    """    questions: buildQuiz(state.selectedSubject, 'mock'), deadline: quizDeadline() };
  state.page = 'quiz';
  armBackGuard();
  renderPage();""",
    'guard startMockQuiz')

# ---- 8. window export -------------------------------------------------------
rep("""  startCbtExam, toggleCustomExam, setExamClass, setExamType, toggleExamSubject, setExamCount, setExamDefaultCount,""",
    """  startCbtExam, toggleCustomExam, setExamClass, setExamType, toggleExamSubject, setExamCount, setExamDefaultCount, exitCbtExam,""",
    'window export exitCbtExam')

open(path, 'w').write(s)
print('written OK')
