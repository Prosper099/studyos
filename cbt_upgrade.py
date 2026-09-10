"""CBT upgrade: subject-sync nav fix, quiz setup (count+timer), focus sessions, new badges."""
import sys

PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()
n = 0

def rep(old, new, cnt=1):
    global s, n
    assert s.count(old) >= 1, 'ANCHOR MISSING: ' + old[:80]
    s = s.replace(old, new, cnt)
    n += 1

# ---------- 1. state: quizSetup, focus, extended tasks ----------
rep("""  tasks: { quizzes: 0, perfects: 0, cards: 0, sessions: 0, tasksTotal: 0 },
  quizStats: { attempts: 0, correct: 0, total: 0, bestPercent: 0, bySubject: {} },
  quiz: { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' },""",
"""  tasks: { quizzes: 0, perfects: 0, cards: 0, sessions: 0, tasksTotal: 0,
           focusSessions: 0, focusMinutes: 0, pastDrills: 0, timedAces: 0, nightOwl: false, earlyBird: false },
  quizStats: { attempts: 0, correct: 0, total: 0, bestPercent: 0, bySubject: {} },
  quizSetup: { count: 10, minutes: 0 },
  focus: { active: false, endsAt: 0, minutes: 0 },
  quiz: { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' },""")

# ---------- 2. navigate(): keep the subject the user is actually studying ----------
rep("""function navigate(page) {
  state.page = PAGE_TITLES[page] ? page : 'home';
  closeDrawer();
  renderPage();
}""",
"""function navigate(page) {
  state.page = PAGE_TITLES[page] ? page : 'home';
  if (state.page === 'quiz' || state.page === 'flashcards') {
    // Follow the student, not a stale default: sync to the subject being studied,
    // and fall back to a subject that actually has content for this class level.
    if (activeTopic) state.selectedSubject = activeTopic.subject;
    const lvl = state.profile.classLevel || 'SS3';
    if (!topicsFor(state.selectedSubject, lvl).length) {
      const alt = subjectsForLevel(lvl).find(sub => topicsFor(sub, lvl).length);
      if (alt) state.selectedSubject = alt;
    }
  }
  closeDrawer();
  renderPage();
}""")

# ---------- 3. quiz engine: shuffled / buildQuiz / timer helpers + starters ----------
rep("""function startTopicQuiz(subject, title) {
  const level = state.profile.classLevel || 'SS3';
  const ti = (CURRICULUM[subject].topics[level] || []).findIndex(t => t.title === title);
  state.selectedSubject = subject;
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'topic', level, topicIdx: ti, topicTitle: title };
  state.page = 'quiz';
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function startMockQuiz() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'mock', level: '', topicIdx: 0, topicTitle: '' };
  state.page = 'quiz';
  renderPage();
}""",
"""function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Build the question set for a quiz, honouring the student's count setting.
 *  count = 0 means "everything available". Topic quizzes top up from the mixed
 *  bank and past papers when the student asks for more questions than the topic has. */
function buildQuiz(subject, mode, level, topicIdx) {
  const count = state.quizSetup.count > 0 ? state.quizSetup.count : Infinity;
  let pool = [];
  if (mode === 'topic') {
    pool = topicQuiz(subject, level, topicIdx);
    if (pool.length < count) pool = pool.concat(shuffled(quizFor(subject).concat(pastFor(subject))));
  } else if (mode === 'mock') {
    pool = shuffled(quizFor(subject));
  } else {
    pool = shuffled(pastFor(subject));
  }
  const uniq = [];
  const seen = new Set();
  for (const q of pool) {
    if (!seen.has(q.id)) { seen.add(q.id); uniq.push(q); }
  }
  return uniq.slice(0, Math.min(count === Infinity ? uniq.length : count, uniq.length));
}

function quizDeadline() {
  const minutes = state.quizSetup.minutes || 0;
  return minutes > 0 ? Date.now() + minutes * 60000 : 0;
}

function fmtCountdown(ms) {
  if (ms < 0) ms = 0;
  const total = Math.round(ms / 1000);
  const m = Math.floor(total / 60), sec = total % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

let quizTimerInt = null;
function stopQuizTimer() { if (quizTimerInt) { clearInterval(quizTimerInt); quizTimerInt = null; } }
function startQuizTimer() {
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
}

function setQuizCount(n) {
  state.quizSetup.count = Math.max(0, Math.min(100, Number(n) || 0));
  persistProgress();
  renderPage();
}
function setQuizTimer(m) {
  state.quizSetup.minutes = Math.max(0, Math.min(180, Number(m) || 0));
  persistProgress();
  renderPage();
}

function startTopicQuiz(subject, title) {
  const level = state.profile.classLevel || 'SS3';
  const ti = (CURRICULUM[subject].topics[level] || []).findIndex(t => t.title === title);
  state.selectedSubject = subject;
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'topic', level, topicIdx: ti, topicTitle: title,
    questions: buildQuiz(subject, 'topic', level, ti), deadline: quizDeadline() };
  state.page = 'quiz';
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function startMockQuiz() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'mock', level: '', topicIdx: 0, topicTitle: '',
    questions: buildQuiz(state.selectedSubject, 'mock'), deadline: quizDeadline() };
  state.page = 'quiz';
  renderPage();
}""")

rep("""function startPastQuiz() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'past', level: '', topicIdx: 0, topicTitle: '' };
  state.page = 'quiz';
  renderPage();
}""",
"""function startPastQuiz() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'past', level: '', topicIdx: 0, topicTitle: '',
    questions: buildQuiz(state.selectedSubject, 'past'), deadline: quizDeadline() };
  state.page = 'quiz';
  renderPage();
}""")

rep("""function retakeQuiz() {
  state.quiz = { ...state.quiz, answers: {}, submitted: false, score: 0, result: null };
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}""",
"""function retakeQuiz() {
  const qz = state.quiz;
  state.quiz = { ...qz, answers: {}, submitted: false, score: 0, result: null,
    questions: buildQuiz(state.selectedSubject, qz.mode === 'topic' ? 'topic' : qz.mode === 'past' ? 'past' : 'mock', qz.level, qz.topicIdx),
    deadline: quizDeadline() };
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}""")

# ---------- 4. renderQuiz + submitQuiz use the built question set ----------
rep("  const quiz = qz.mode === 'mock' ? quizFor(subject) : qz.mode === 'past' ? pastFor(subject) : topicQuiz(subject, qz.level, qz.topicIdx);",
    "  const quiz = (qz.questions && qz.questions.length) ? qz.questions : (qz.mode === 'mock' ? quizFor(subject) : qz.mode === 'past' ? pastFor(subject) : topicQuiz(subject, qz.level, qz.topicIdx));")
rep("""  const quiz = state.quiz.mode === 'mock' ? quizFor(subject)
    : state.quiz.mode === 'past' ? pastFor(subject)
    : topicQuiz(subject, state.quiz.level, state.quiz.topicIdx);
  const unanswered = quiz.filter(q => state.quiz.answers[q.id] === undefined).length;
  if (unanswered && !confirm(`You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`)) return;""",
"""  const quiz = (state.quiz.questions && state.quiz.questions.length) ? state.quiz.questions
    : state.quiz.mode === 'mock' ? quizFor(subject)
    : state.quiz.mode === 'past' ? pastFor(subject)
    : topicQuiz(subject, state.quiz.level, state.quiz.topicIdx);
  const unanswered = quiz.filter(q => state.quiz.answers[q.id] === undefined).length;
  if (unanswered && !auto && !confirm(`You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`)) return;""")
rep("async function submitQuiz() {", "async function submitQuiz(auto) {")
rep("""  const result = gradeQuiz(quiz, state.quiz.answers);
  state.quiz.submitted = true;""",
"""  const result = gradeQuiz(quiz, state.quiz.answers);
  if (state.quiz.mode === 'past') state.tasks.pastDrills = (state.tasks.pastDrills || 0) + 1;
  if (state.quiz.deadline && quiz.length >= 15 && result.percent === 100) state.tasks.timedAces = (state.tasks.timedAces || 0) + 1;
  state.quiz.submitted = true;""")

# ---------- 5. timer chip in the quiz header ----------
rep("""          <div class="text-[11px] text-slate-500">${state.quiz.submitted ? 'Submitted — review your answers below' : `${answered} of ${quiz.length} answered`}</div>""",
"""          <div class="flex items-center gap-2 text-[11px] text-slate-500">
            ${state.quiz.submitted ? '<span>Submitted — review your answers below</span>' : `<span>${answered} of ${quiz.length} answered</span>`}
            ${qz.deadline && !state.quiz.submitted ? `<span id="quiz-timer" class="rounded-full bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 ring-1 ring-inset ring-indigo-100">⏱ ${fmtCountdown(qz.deadline - Date.now())}</span>` : ''}
          </div>""")

# ---------- 6. renderPage: timer lifecycle ----------
rep("""function renderPage() {
  $$('.nav-item').forEach(el => {""",
"""function renderPage() {
  if (state.page !== 'quiz') stopQuizTimer();
  $$('.nav-item').forEach(el => {""")
rep("    case 'quiz': renderQuiz(main); break;",
    "    case 'quiz': renderQuiz(main); if (state.quiz.mode !== 'list' && state.quiz.deadline && !state.quiz.submitted) startQuizTimer(); else stopQuizTimer(); break;")

# ---------- 7. quiz list: setup UI + dynamic labels ----------
rep("""  if (qz.mode === 'list') {
    const topics = levelTopics(subject, level);
    el.innerHTML = `
      ${pageHeader('Practice Exam', `One 10-question quiz per ${level} topic — drilled on exactly what the lesson taught.`)}
      ${subjectSelector('quiz')}
      <div class="grid gap-3 md:grid-cols-2">""",
"""  if (qz.mode === 'list') {
    const topics = levelTopics(subject, level);
    const qLabel = state.quizSetup.count > 0 ? `${state.quizSetup.count}-question` : 'full';
    el.innerHTML = `
      ${pageHeader('Practice Exam', 'Your personal CBT centre — pick the subject, the number of questions and the timer, then drill.')}
      ${subjectSelector('quiz')}
      <section class="mb-4 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-5 shadow-card animate-fadeUp">
        <div class="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div>
            <h3 class="text-[11px] font-black uppercase tracking-wide text-violet-700">Questions per quiz</h3>
            <div class="mt-1.5 flex flex-wrap gap-1.5">
              ${[5, 10, 15, 20, 30].map(num => `<button type="button" onclick="setQuizCount(${num})" class="rounded-full px-3 py-1.5 text-[11px] font-bold transition ${state.quizSetup.count === num ? 'bg-violet-600 text-white' : 'bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50'}">${num}</button>`).join('')}
              <button type="button" onclick="setQuizCount(0)" class="rounded-full px-3 py-1.5 text-[11px] font-bold transition ${state.quizSetup.count === 0 ? 'bg-violet-600 text-white' : 'bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50'}">All</button>
            </div>
          </div>
          <div>
            <h3 class="text-[11px] font-black uppercase tracking-wide text-indigo-700">Timer</h3>
            <div class="mt-1.5 flex flex-wrap gap-1.5">
              ${[10, 20, 30, 45, 60].map(min => `<button type="button" onclick="setQuizTimer(${min})" class="rounded-full px-3 py-1.5 text-[11px] font-bold transition ${state.quizSetup.minutes === min ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50'}">${min} min</button>`).join('')}
              <button type="button" onclick="setQuizTimer(0)" class="rounded-full px-3 py-1.5 text-[11px] font-bold transition ${state.quizSetup.minutes === 0 ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50'}">No timer</button>
            </div>
          </div>
        </div>
        <p class="mt-3 text-[11px] leading-relaxed text-slate-500">${state.quizSetup.minutes > 0 ? `Papers auto-submit when the ${state.quizSetup.minutes}-minute timer hits zero — exactly like a real CBT centre. ` : 'Add a timer to train under real exam pressure. '}Your settings apply to topic quizzes, mixed practice and past papers, and longer quizzes mix in extra questions automatically.</p>
      </section>
      <div class="grid gap-3 md:grid-cols-2">""")
rep("""                class="self-start rounded-xl ${c.solid} px-4 py-2 text-xs font-bold text-white transition hover:opacity-90">📝 Start 10-question quiz</button>` : `""",
    """                class="self-start rounded-xl ${c.solid} px-4 py-2 text-xs font-bold text-white transition hover:opacity-90">📝 Start ${qLabel} quiz</button>` : `""")

# ---------- 8. recordTask: focus kind + time-of-day flags ----------
rep("""function recordTask(kind, result) {
  const t = state.tasks;
  if (kind === 'quiz') { t.quizzes++; if (result && result.percent === 100) t.perfects++; }
  if (kind === 'card') t.cards++;
  if (kind === 'session') t.sessions++;
  t.tasksTotal++;""",
"""function recordTask(kind, result) {
  const t = state.tasks;
  if (kind === 'quiz') { t.quizzes++; if (result && result.percent === 100) t.perfects++; }
  if (kind === 'card') t.cards++;
  if (kind === 'session') t.sessions++;
  if (kind === 'focus') {
    t.focusSessions = (t.focusSessions || 0) + 1;
    t.focusMinutes = (t.focusMinutes || 0) + ((result && result.minutes) || 0);
  }
  const hr = new Date().getHours();
  if (hr >= 21 || hr < 4) t.nightOwl = true;
  if (hr >= 4 && hr < 6) t.earlyBird = true;
  t.tasksTotal++;""")

# ---------- 9. new badges ----------
rep("""  { id: 'streak-3',     icon: '🌱', name: 'Warming Up',      desc: 'Reach a 3-day study streak',                  test: s => (s.streak || 0) >= 3 },""",
"""  { id: 'focus-first',  icon: '🎯', name: 'Focused',         desc: 'Complete your first focus session',           test: s => (s.tasks.focusSessions || 0) >= 1 },
  { id: 'focus-5',      icon: '🧘', name: 'Deep Focus',      desc: 'Complete 5 focus sessions',                   test: s => (s.tasks.focusSessions || 0) >= 5 },
  { id: 'focus-60',     icon: '⏳', name: 'Time Bender',     desc: 'Bank 60 focused minutes',                     test: s => (s.tasks.focusMinutes || 0) >= 60 },
  { id: 'past-pro',     icon: '📜', name: 'Past Paper Pro',  desc: 'Finish a real past-question drill',           test: s => (s.tasks.pastDrills || 0) >= 1 },
  { id: 'timed-ace',    icon: '🏅', name: 'Timed Ace',       desc: '100% on a timed quiz of 15+ questions',       test: s => (s.tasks.timedAces || 0) >= 1 },
  { id: 'night-owl',    icon: '🦉', name: 'Night Owl',       desc: 'Study after 9 pm',                            test: s => !!s.tasks.nightOwl },
  { id: 'early-bird',   icon: '🌅', name: 'Early Bird',      desc: 'Study before 6 am',                           test: s => !!s.tasks.earlyBird },
  { id: 'streak-3',     icon: '🌱', name: 'Warming Up',      desc: 'Reach a 3-day study streak',                  test: s => (s.streak || 0) >= 3 },""")

# ---------- 10. focus celebration case ----------
rep("""  } else if (c.type === 'freeze') {""",
"""  } else if (c.type === 'focus') {
    icon.textContent = '🎯'; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-violet-50 text-6xl ring-pulse';
    kick.textContent = 'Focus session complete';
    kick.className = 'text-[11px] font-black uppercase tracking-widest text-violet-500';
    title.textContent = `${c.minutes || state.focus.minutes} minutes of deep work`;
    sub.textContent = 'Real concentration just levelled up your brain. Finish more sessions to grow the Focused badge family!';
  } else if (c.type === 'freeze') {""")

# ---------- 11. focus engine (inserted before the celebration overlay block) ----------
rep("""/* ---------------- Celebration overlay (streak / freeze / badge) ---------------- */""",
"""/* ---------------- Focus sessions (Pomodoro-style deep work) ---------------- */
let focusInt = null;
function openFocusModal() {
  const m = document.getElementById('focus-modal');
  if (m) { m.classList.remove('hidden'); m.classList.add('flex'); }
}
function closeFocusModal() {
  const m = document.getElementById('focus-modal');
  if (m) { m.classList.add('hidden'); m.classList.remove('flex'); }
}
function updateFocusPill() {
  const pill = document.getElementById('focus-pill');
  if (!pill) return;
  const f = state.focus;
  if (!f.active) { pill.classList.add('hidden'); return; }
  pill.classList.remove('hidden');
  const label = document.getElementById('focus-pill-time');
  if (label) label.textContent = fmtCountdown(f.endsAt - Date.now());
}
function startFocus(minutes) {
  const min = Math.max(1, Math.min(180, parseInt(minutes, 10) || 25));
  state.focus = { active: true, endsAt: Date.now() + min * 60000, minutes: min };
  closeFocusModal();
  updateFocusPill();
  if (focusInt) clearInterval(focusInt);
  focusInt = setInterval(focusTick, 1000);
}
function focusTick() {
  const f = state.focus;
  if (!f.active) { if (focusInt) { clearInterval(focusInt); focusInt = null; } return; }
  const left = f.endsAt - Date.now();
  if (left <= 0) {
    if (focusInt) { clearInterval(focusInt); focusInt = null; }
    const doneMinutes = f.minutes;
    f.active = false;
    updateFocusPill();
    recordTask('focus', { minutes: doneMinutes });
    queueCelebration({ type: 'focus', minutes: doneMinutes });
    return;
  }
  updateFocusPill();
}
function stopFocus() {
  state.focus.active = false;
  if (focusInt) { clearInterval(focusInt); focusInt = null; }
  updateFocusPill();
}

/* ---------------- Celebration overlay (streak / freeze / badge) ---------------- */""")

# ---------- 12. persistence ----------
rep("""    await updateDoc(userRef(), {
      streak: state.streak, lastActiveDate: state.lastActiveDate,
      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,
      updatedAt: serverTimestamp()
    });""",
"""    await updateDoc(userRef(), {
      streak: state.streak, lastActiveDate: state.lastActiveDate,
      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,
      quizSetup: state.quizSetup,
      updatedAt: serverTimestamp()
    });""")
rep("""      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,
      settings: state.settings
    }));""",
"""      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,
      quizSetup: state.quizSetup, settings: state.settings
    }));""")
rep("""  state.tasks = {
    quizzes: Number(t.quizzes) || 0, perfects: Number(t.perfects) || 0,
    cards: Number(t.cards) || 0, sessions: Number(t.sessions) || 0,
    tasksTotal: Number(t.tasksTotal) || 0
  };""",
"""  state.tasks = {
    quizzes: Number(t.quizzes) || 0, perfects: Number(t.perfects) || 0,
    cards: Number(t.cards) || 0, sessions: Number(t.sessions) || 0,
    tasksTotal: Number(t.tasksTotal) || 0,
    focusSessions: Number(t.focusSessions) || 0, focusMinutes: Number(t.focusMinutes) || 0,
    pastDrills: Number(t.pastDrills) || 0, timedAces: Number(t.timedAces) || 0,
    nightOwl: !!t.nightOwl, earlyBird: !!t.earlyBird
  };
  const qs = (data.quizSetup && typeof data.quizSetup === 'object') ? data.quizSetup : {};
  state.quizSetup = {
    count: Number.isFinite(Number(qs.count)) ? Number(qs.count) : 10,
    minutes: Number(qs.minutes) || 0
  };""")

# ---------- 13. header: focus button + pill ----------
rep("""        <button id="avatar-btn" type="button" onclick="navigate('profile')" aria-label="Open profile\"""",
"""        <span id="focus-pill" class="hidden shrink-0 inline-flex items-center gap-1.5 rounded-full bg-violet-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-card">
          🎯 <span id="focus-pill-time">25:00</span>
          <button type="button" onclick="stopFocus()" class="ml-0.5 rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide transition hover:bg-white/30">Stop</button>
        </span>
        <button id="focus-btn" type="button" onclick="openFocusModal()" aria-label="Start a focus session" title="Focus timer"
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50 text-base ring-1 ring-inset ring-violet-100 transition hover:bg-violet-100">🎯</button>
        <button id="avatar-btn" type="button" onclick="navigate('profile')" aria-label="Open profile\"""")

# ---------- 14. focus modal ----------
rep("""<div id="celebration" onclick="dismissCelebration()" class="fixed inset-0 z-[70] hidden cursor-pointer items-center justify-center bg-slate-900/75 p-4">""",
"""<div id="focus-modal" class="fixed inset-0 z-[65] hidden items-center justify-center bg-slate-900/60 p-4" onclick="if (event.target === this) closeFocusModal()">
  <div class="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-pop pop-in">
    <div class="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-4xl">🎯</div>
    <h3 class="text-lg font-black text-slate-900">Focus session</h3>
    <p class="mt-1 text-xs leading-relaxed text-slate-500">Pick a length, put the distractions away, and study. Finish a session to earn the <b>Focused</b> badge family and keep your streak alive.</p>
    <div class="mt-4 grid grid-cols-4 gap-2">
      <button type="button" onclick="startFocus(15)" class="rounded-xl bg-violet-50 px-2 py-2.5 text-xs font-bold text-violet-700 ring-1 ring-inset ring-violet-100 transition hover:bg-violet-100">15 min</button>
      <button type="button" onclick="startFocus(25)" class="rounded-xl bg-violet-600 px-2 py-2.5 text-xs font-bold text-white transition hover:bg-violet-500">25 min</button>
      <button type="button" onclick="startFocus(45)" class="rounded-xl bg-violet-50 px-2 py-2.5 text-xs font-bold text-violet-700 ring-1 ring-inset ring-violet-100 transition hover:bg-violet-100">45 min</button>
      <button type="button" onclick="startFocus(60)" class="rounded-xl bg-violet-50 px-2 py-2.5 text-xs font-bold text-violet-700 ring-1 ring-inset ring-violet-100 transition hover:bg-violet-100">60 min</button>
    </div>
    <div class="mt-3 flex items-center gap-2">
      <input id="focus-custom" type="number" min="1" max="180" placeholder="Custom minutes"
        class="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 outline-none transition focus:border-violet-400" />
      <button type="button" onclick="startFocus(document.getElementById('focus-custom').value)"
        class="shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800">Start</button>
    </div>
    <button type="button" onclick="closeFocusModal()" class="mt-3 text-[11px] font-bold text-slate-400 transition hover:text-slate-600">Maybe later</button>
  </div>
</div>

<div id="celebration" onclick="dismissCelebration()" class="fixed inset-0 z-[70] hidden cursor-pointer items-center justify-center bg-slate-900/75 p-4">""")

# ---------- 15. exports ----------
rep("  startTopicQuiz, startMockQuiz, startPastQuiz, backToQuizList, openTopicCards,",
    "  startTopicQuiz, startMockQuiz, startPastQuiz, backToQuizList, openTopicCards,\n  setQuizCount, setQuizTimer, openFocusModal, closeFocusModal, startFocus, stopFocus, updateFocusPill,")
rep("  topicsFor, quizFor, pastFor, PASTQ, flashFor, mdToHtml, escapeHtml, fmtQuad,",
    "  topicsFor, quizFor, pastFor, PASTQ, buildQuiz, shuffled, flashFor, mdToHtml, escapeHtml, fmtQuad,")

open(PATH, 'w', encoding='utf-8').write(s)
print(f'CBT upgrade applied: {n} replacements')
