# loop_upgrade.py — activity-based streaks + 6-step onboarding + daily mission loop. RUN ONCE.
path = 'index.html'
s = open(path, encoding='utf-8').read()

def rep(old, new, label, count=1):
    global s
    n = s.count(old)
    assert n == count, (label, n)
    s = s.replace(old, new)
    print('ok:', label)

# ---------- state defaults ----------
rep("onboard: { step: 1, classLevel: '', targetExam: '', subjects: [] },",
    "onboard: { step: 1, classLevel: '', targetExam: '', subjects: [], targetScore: '', studyPref: '' },",
    'state.onboard gains targetScore/studyPref')
rep("streakFreezes: 0,\n  badges: [],",
    "streakFreezes: 0,\n  badges: [],\n  daily: null,",
    'state.daily added')
rep("    name: '', email: '', classLevel: '', targetExam: '',\n    subjects: [], onboarded: false\n  },",
    "    name: '', email: '', classLevel: '', targetExam: '', targetScore: '', studyPref: '',\n    subjects: [], onboarded: false\n  },",
    'profile defaults gain targetScore/studyPref')
rep("      name: 'Demo Student', email: 'demo@studyos.local', classLevel: '', targetExam: '',\n      subjects: [], onboarded: false\n    };",
    "      name: 'Demo Student', email: 'demo@studyos.local', classLevel: '', targetExam: '', targetScore: '', studyPref: '',\n      subjects: [], onboarded: false\n    };",
    'demo profile gains fields')

# ---------- onboarding modal HTML: 6 bars + 6 step panes ----------
rep('''      <div class="mb-3 flex gap-1.5">
        <div id="op-1" class="h-1.5 flex-1 rounded-full bg-indigo-500 transition-colors"></div>
        <div id="op-2" class="h-1.5 flex-1 rounded-full bg-slate-200 transition-colors"></div>
        <div id="op-3" class="h-1.5 flex-1 rounded-full bg-slate-200 transition-colors"></div>
      </div>''',
    '''      <div class="mb-3 flex gap-1.5">
        <div id="op-1" class="h-1.5 flex-1 rounded-full bg-indigo-500 transition-colors"></div>
        <div id="op-2" class="h-1.5 flex-1 rounded-full bg-slate-200 transition-colors"></div>
        <div id="op-3" class="h-1.5 flex-1 rounded-full bg-slate-200 transition-colors"></div>
        <div id="op-4" class="h-1.5 flex-1 rounded-full bg-slate-200 transition-colors"></div>
        <div id="op-5" class="h-1.5 flex-1 rounded-full bg-slate-200 transition-colors"></div>
        <div id="op-6" class="h-1.5 flex-1 rounded-full bg-slate-200 transition-colors"></div>
      </div>''',
    '6 progress bars')
rep('''      <div id="step-1" class="grid grid-cols-2 gap-2 sm:grid-cols-3"></div>
      <div id="step-2" class="hidden space-y-2"></div>
      <div id="step-3" class="hidden grid grid-cols-1 gap-2 sm:grid-cols-2"></div>''',
    '''      <div id="step-1" class="grid grid-cols-2 gap-2 sm:grid-cols-3"></div>
      <div id="step-2" class="hidden space-y-2"></div>
      <div id="step-3" class="hidden grid grid-cols-1 gap-2 sm:grid-cols-2"></div>
      <div id="step-4" class="hidden grid grid-cols-1 gap-2 sm:grid-cols-3"></div>
      <div id="step-5" class="hidden grid grid-cols-1 gap-2"></div>
      <div id="step-6" class="hidden"></div>''',
    '6 step panes')

# ---------- openOnboarding ----------
rep('''  state.onboard = {
    step: 1,
    classLevel: state.profile.classLevel || '',
    targetExam: state.profile.targetExam || '',
    subjects: (state.profile.subjects || []).slice()
  };''',
    '''  state.onboard = {
    step: 1,
    classLevel: state.profile.classLevel || '',
    targetExam: state.profile.targetExam || '',
    subjects: (state.profile.subjects || []).slice(),
    targetScore: state.profile.targetScore || '',
    studyPref: state.profile.studyPref || ''
  };''',
    'openOnboarding carries new fields')

# ---------- renderOnboardStep rewrite ----------
OLD_RENDER = s[s.index('function renderOnboardStep()'):s.index('function pickOnboardOption(')]
NEW_RENDER = '''function renderOnboardStep() {
  const o = state.onboard;
  [1, 2, 3, 4, 5, 6].forEach(i => {
    const bar = document.getElementById(`op-${i}`);
    if (bar) bar.className = `h-1.5 flex-1 rounded-full transition-colors ${i <= o.step ? 'bg-indigo-500' : 'bg-slate-200'}`;
    show($(`#step-${i}`), i === o.step);
  });
  setText('onboard-kicker', `Step ${o.step} of 6`);
  setText('onboard-title', [
    'What class are you in?', 'Which exam are you targeting?', 'Pick your subjects',
    'What score are you aiming for?', 'How do you like to study?', 'Your study plan is ready!'
  ][o.step - 1]);
  setText('onboard-sub', [
    'We tailor lessons and past-question practice to your level.',
    'Buddy and the quizzes adapt to the syllabus you are sitting.',
    'Choose at least one. You can change these later in Profile.',
    'A clear target keeps every session purposeful.',
    'StudyOS sizes your daily plan to match your style.',
    'Built from your class, exam, subjects and target. It updates daily from your results.'
  ][o.step - 1]);
  show($('#onboard-error'), false);
  show($('#onboard-back'), o.step > 1);
  $('#onboard-next').textContent = o.step === 5 ? 'Generate my study plan ✨' : o.step === 6 ? 'Save & start studying →' : 'Continue';

  if (o.step === 1) {
    $('#step-1').innerHTML = OPTIONS.classes.map(c => `
      <button type="button" onclick="pickOnboardOption('classLevel','${c}')"
        class="rounded-xl border px-3 py-4 text-sm font-bold transition-all ${o.classLevel === c ? 'border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}">${c}</button>`).join('');
    o.subjects = o.subjects.filter(x => subjectsForLevel(o.classLevel).includes(x));
    if (!examsForLevel(o.classLevel).some(e => e.id === o.targetExam)) o.targetExam = '';
  } else if (o.step === 2) {
    $('#step-2').innerHTML = examsForLevel(o.classLevel).map(e => `
      <button type="button" onclick="pickOnboardOption('targetExam','${e.id}')"
        class="flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${o.targetExam === e.id ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-100' : 'border-slate-200 bg-white hover:border-slate-300'}">
        <div>
          <div class="text-sm font-bold ${o.targetExam === e.id ? 'text-indigo-700' : 'text-slate-900'}">${e.id}</div>
          <div class="text-[11px] text-slate-500">${e.desc}</div>
        </div>
        <span class="text-sm ${o.targetExam === e.id ? 'text-indigo-600' : 'text-slate-300'}">${o.targetExam === e.id ? '●' : '○'}</span>
      </button>`).join('');
    if (o.targetExam && !(SCORE_TIERS[o.targetExam] || []).includes(o.targetScore)) o.targetScore = '';
  } else if (o.step === 3) {
    $('#step-3').innerHTML = selectableSubjects().map(su => {
      const on = o.subjects.includes(su);
      return `
        <button type="button" onclick="toggleOnboardSubject('${su}')"
          class="flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all ${on ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-100' : 'border-slate-200 bg-white hover:border-slate-300'}">
          <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${on ? 'bg-indigo-600' : 'bg-slate-100'} text-sm">${OPTIONS.icons[su]}</span>
          <span class="flex-1 text-xs font-bold ${on ? 'text-indigo-700' : 'text-slate-700'}">${su}</span>
          <span class="text-sm ${on ? 'text-indigo-600' : 'text-slate-300'}">${on ? '✓' : '○'}</span>
        </button>`;
    }).join('');
  } else if (o.step === 4) {
    $('#step-4').innerHTML = (SCORE_TIERS[o.targetExam] || SCORE_TIERS.General).map(t => `
      <button type="button" onclick="pickOnboardOption('targetScore','${t}')"
        class="rounded-xl border px-3 py-4 text-sm font-bold transition-all ${o.targetScore === t ? 'border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}">${t}</button>`).join('');
  } else if (o.step === 5) {
    $('#step-5').innerHTML = STUDY_PREFS.map(p => `
      <button type="button" onclick="pickOnboardOption('studyPref','${p.id}')"
        class="flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all ${o.studyPref === p.id ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-100' : 'border-slate-200 bg-white hover:border-slate-300'}">
        <div>
          <div class="text-sm font-bold ${o.studyPref === p.id ? 'text-indigo-700' : 'text-slate-900'}">${p.icon} ${p.label}</div>
          <div class="text-[11px] text-slate-500">${p.desc}</div>
        </div>
        <span class="text-sm ${o.studyPref === p.id ? 'text-indigo-600' : 'text-slate-300'}">${o.studyPref === p.id ? '●' : '○'}</span>
      </button>`).join('');
  } else {
    $('#step-6').innerHTML = planPreviewHtml();
  }
}

'''
assert s.count('function renderOnboardStep()') == 1
s = s.replace(OLD_RENDER, NEW_RENDER)
print('ok: renderOnboardStep rewritten for 6 steps')

# ---------- onboardNext rewrite ----------
OLD_NEXT = s[s.index('async function onboardNext()'):s.index('/* ==================================================================\n   SETUP MODAL')]
NEW_NEXT = '''async function onboardNext() {
  const o = state.onboard;
  const err = $('#onboard-error');
  const invalid =
    (o.step === 1 && !o.classLevel) || (o.step === 2 && !o.targetExam) ||
    (o.step === 3 && o.subjects.length === 0) || (o.step === 4 && !o.targetScore) ||
    (o.step === 5 && !o.studyPref);
  if (invalid) {
    err.textContent = o.step === 3 ? 'Select at least one subject to continue.' : 'Please make a selection to continue.';
    show(err, true);
    return;
  }
  if (o.step < 6) { o.step++; renderOnboardStep(); return; }

  const btn = $('#onboard-next');
  btn.disabled = true;
  btn.textContent = 'Saving…';
  state.profile.classLevel = o.classLevel;
  state.profile.targetExam = o.targetExam;
  state.profile.subjects = o.subjects.slice();
  state.profile.targetScore = o.targetScore;
  state.profile.studyPref = o.studyPref;
  state.profile.onboarded = true;
  if (!state.profile.subjects.includes(state.selectedSubject)) {
    state.selectedSubject = state.profile.subjects[0];
  }
  try {
    await saveProfile();
  } finally {
    btn.disabled = false;
    btn.textContent = 'Save & start studying →';
    $('#onboarding-modal').classList.remove('flex');
    show($('#onboarding-modal'), false);
    updateChrome();
    state.page = 'home';
    renderPage();
    toast('Study plan ready — today’s mission is waiting! 🎯');
  }
}

'''
assert s.count('async function onboardNext()') == 1
s = s.replace(OLD_NEXT, NEW_NEXT)
print('ok: onboardNext rewritten for 6 steps')

# ---------- recordTask: activity-based streak + lesson kind + daily + 7-day freeze ----------
OLD_RT = s[s.index('function recordTask('):s.index('/* ---------------- Focus sessions')]
NEW_RT = '''function recordTask(kind, result) {
  const t = state.tasks;
  if (kind === 'quiz') { t.quizzes++; if (result && result.percent === 100) t.perfects++; }
  if (kind === 'card') t.cards++;
  if (kind === 'session') t.sessions++;
  if (kind === 'lesson') { t.lessons = (t.lessons || 0) + 1; }
  if (kind === 'focus') {
    t.focusSessions = (t.focusSessions || 0) + 1;
    t.focusMinutes = (t.focusMinutes || 0) + ((result && result.minutes) || 0);
  }
  const hr = new Date().getHours();
  if (hr >= 21 || hr < 4) t.nightOwl = true;
  if (hr >= 4 && hr < 6) t.earlyBird = true;
  const day = new Date().getDay();
  if (day === 0 || day === 6) t.weekendStudy = true;
  t.tasksTotal++;

  // Today's-mission bookkeeping (resets each new day)
  const d = todayISO();
  if (!state.daily || state.daily.date !== d) state.daily = { date: d, lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '' };
  if (kind === 'lesson') { state.daily.lessons++; if (result && result.title) state.daily.readTopic = result.title; }
  if (kind === 'card') state.daily.cards++;
  if (kind === 'quiz') state.daily.quizzes++;
  if (kind === 'focus' || kind === 'session') state.daily.focus++;

  // Streaks are ACTIVITY-based: a study action (lesson / quiz / flashcards / focus) advances the day.
  const rolled = applyStreak(state.streak, state.lastActiveDate, d, state.streakFreezes);
  if (rolled.changed) {
    state.streak = rolled.streak;
    state.streakFreezes = rolled.freezes;
    state.lastActiveDate = d;
    queueCelebration({ type: rolled.event === 'extend' ? 'streak' : rolled.event });
    if ((rolled.event === 'extend') && state.streak % 7 === 0 && state.streakFreezes < MAX_FREEZES) {
      state.streakFreezes++;
      queueCelebration({ type: 'freeze' });
    }
  }
  checkBadges();
  persistProgress();
}

'''
assert s.count('function recordTask(') == 1
s = s.replace(OLD_RT, NEW_RT)
print('ok: recordTask activity-based streak + daily + lesson kind')

# ---------- freeze rules copy ----------
rep('const MAX_FREEZES = 10;        // bank at most 10',
    'const MAX_FREEZES = 3;         // bank at most 3',
    'MAX_FREEZES 3')
rep("sub.textContent = `Every ${FREEZE_EVERY_TASKS} completed tasks bank a freeze (max ${MAX_FREEZES}). It will shield your streak if you miss a day.`;",
    "sub.textContent = 'A 7-day streak milestone banked this freeze (max 3). It shields one missed day — a freeze never grows the streak by itself.';",
    'freeze celebration copy')
rep('''            ❄️ <b>Freeze progress:</b> ${state.tasks.tasksTotal % FREEZE_EVERY_TASKS}/${FREEZE_EVERY_TASKS} tasks toward your next freeze.
            Quizzes and flashcard sessions count — a banked freeze shields your streak if you miss a day.''',
    '''            ❄️ <b>Freeze rules:</b> every 7-day streak milestone banks a freeze (max 3) — secret badges bank one too.
            A freeze shields one missed day and never grows the streak by itself.''',
    'profile freeze copy')
rep('<p>Every five completed tasks (quizzes or flashcard sessions) bank a ❄️ streak freeze — up to ten at once. Miss a day with a freeze in the bank and the freeze is spent to keep your streak alive; miss a day with none and the streak restarts at Day 1. Weekly (7), monthly (30) and yearly (365) streaks unlock badges, alongside task badges like First Steps, Perfectionist and Card Shark.</p>',
    '<p>A day counts for your 🔥 streak when you complete at least one study activity: finish a lesson, a quiz, some flashcards or a focus session. Every 7-day streak milestone banks a ❄️ streak freeze (secret badges bank one too) — up to three at once. Miss a day with a freeze in the bank and the freeze is spent to keep your streak alive; miss a day with none and the streak restarts at Day 1. A freeze never increases the streak by itself. Weekly (7), monthly (30) and yearly (365) streaks unlock badges, alongside task badges like First Steps, Perfectionist and Card Shark.</p>',
    'streak rules lesson copy')

# ---------- login no longer rolls the streak ----------
rep('''  const rolled = applyStreak(state.streak, state.lastActiveDate, todayISO(), state.streakFreezes);
  if (rolled.changed) {
    state.streak = rolled.streak;
    state.streakFreezes = rolled.freezes;
    state.lastActiveDate = todayISO();
    setTimeout(() => {
      queueCelebration({ type: rolled.event === 'extend' ? 'streak' : rolled.event });
      checkBadges();
      updateChrome();
    }, 700);
  }
  saveLocal();''',
    '''  // Streaks are activity-based: login never extends or resets them; recordTask evaluates.
  saveLocal();''',
    'demo login roll removed')
rep('''  const rolled = applyStreak(state.streak, state.lastActiveDate, todayISO(), state.streakFreezes);
  if (rolled.changed) {
    state.streak = rolled.streak;
    state.streakFreezes = rolled.freezes;
    state.lastActiveDate = todayISO();
    setTimeout(() => {
      queueCelebration({ type: rolled.event === 'extend' ? 'streak' : rolled.event });
      checkBadges();
      updateChrome();
    }, 700);
  } else if (!state.lastActiveDate) {
    state.lastActiveDate = todayISO();
  }''',
    '''  // Streaks are activity-based: login never extends or resets them; recordTask evaluates.''',
    'firebase login roll removed')

# ---------- lesson-complete button in topic view ----------
rep('''      <div class="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">''',
    '''      <div class="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
        <button type="button" onclick="markLessonDone('${subject.replace(/'/g, "\\\\\\\\'")}','${title.replace(/'/g, "\\\\\\\\'")}')"
          class="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-700">✅ Mark lesson complete</button>''',
    'mark-lesson-complete button')

# ---------- hero copy + streak card ----------
rep('''            <p class="mt-2 max-w-lg text-sm text-slate-300">
              Your lessons, flashcards, quizzes and <b class="text-white">Buddy</b> are all synced.
              Keep the streak alive — even ten focused minutes counts.
            </p>''',
    '''            <p class="mt-2 max-w-lg text-sm text-slate-300">
              <b class="text-white">🔥 ${state.streak}-day streak.</b> Keep it going! Complete one study
              activity today — a lesson, quiz, flashcards or a focus session keeps the flame alive.
            </p>''',
    'hero streak copy')

# ---------- mission section after hero ----------
rep('''              <div class="text-2xl">🏆</div>
              <div class="mt-1 text-xl font-bold">${state.quizStats.bestPercent || 0}%</div>
              <div class="text-[11px] text-slate-300">best score</div>
            </div>
          </div>
        </div>
      </section>''',
    '''              <div class="text-2xl">🏆</div>
              <div class="mt-1 text-xl font-bold">${state.quizStats.bestPercent || 0}%</div>
              <div class="text-[11px] text-slate-300">best score</div>
            </div>
          </div>
        </div>
      </section>

      ${missionSection()}''',
    'mission section on dashboard')

# ---------- new engine functions (tiers, prefs, plan, mission, markLessonDone) ----------
NEW_FUNCS = '''/* ==================================================================
   STUDY PLAN ENGINE (onboarding step 6 + daily mission loop)
   ================================================================== */
const SCORE_TIERS = {
  'JAMB UTME': ['200+', '250+', '300+'],
  'WAEC WASSCE': ['All credits (7s-9s)', 'Mostly A1-B3', 'Straight A1s'],
  'NECO': ['All credits', 'Mostly A1-B3', 'Straight A1s'],
  'Post-UTME': ['60%+', '75%+', '90%+'],
  'BECE': ['Credits in all subjects', 'Distinctions in most', 'Top of the class'],
  'General': ['Pass every subject', 'Top 10 of the class', 'Best in class']
};
const STUDY_PREFS = [
  { id: 'quick', icon: '⚡', label: 'Quick sessions', desc: 'About 15 min a day — short, sharp and daily.' },
  { id: 'balanced', icon: '⚖️', label: 'Balanced', desc: 'About 25 min a day — a steady, sustainable rhythm.' },
  { id: 'deep', icon: '🧠', label: 'Deep study', desc: 'About 45 min a day — serious exam preparation.' }
];

function buildStudyPlan() {
  const lvl = state.profile.classLevel || 'SS3';
  const subs = (state.profile.subjects || []).length ? state.profile.subjects : subjectsForLevel(lvl);
  const bs = (state.quizStats && state.quizStats.bySubject) || {};
  let focus = subs[0] || 'Mathematics', focusPct = null, anyStats = false;
  for (const sub of subs) {
    const st = bs[sub];
    if (st && st.total) {
      anyStats = true;
      const pct = Math.round((st.correct / st.total) * 100);
      if (focusPct === null || pct < focusPct) { focusPct = pct; focus = sub; }
    }
  }
  const topics = topicsFor(focus, lvl);
  const dayIdx = Math.floor(Date.now() / 86400000) % Math.max(1, topics.length);
  const focusTopic = topics.length ? topics[dayIdx].title : '';
  const pref = state.profile.studyPref || 'balanced';
  const minutes = pref === 'quick' ? 15 : pref === 'deep' ? 45 : 25;
  const quizCount = pref === 'quick' ? 5 : pref === 'deep' ? 15 : 10;
  return { focus, focusPct, anyStats, focusTopic, minutes, quizCount, pref };
}

function planPreviewHtml() {
  const o = state.onboard;
  const p = buildStudyPlan();
  return `
    <div class="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 text-left">
      <div class="text-[11px] font-black uppercase tracking-widest text-indigo-500">🎯 Your study plan</div>
      <div class="mt-1 text-lg font-black text-slate-900">${o.targetExam}${o.targetScore ? ' · ' + o.targetScore : ''}</div>
      <div class="mt-1 text-xs font-semibold text-slate-600">${o.subjects.length} subject${o.subjects.length === 1 ? '' : 's'} · ${p.minutes} min/day · ${p.anyStats ? p.focus + ' needs the most attention' : 'week one diagnoses your strengths'}</div>
      <div class="mt-3 rounded-xl bg-white p-3 shadow-card">
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">Today's mission</div>
        <ul class="mt-2 space-y-1.5 text-xs font-semibold text-slate-700">
          <li>📖 ${p.focus}: ${p.focusTopic || 'first topic'} — ${Math.max(5, Math.round(p.minutes * 0.4))} min</li>
          <li>🧠 Flashcards — ${Math.max(5, Math.round(p.minutes * 0.2))} min</li>
          <li>📝 Quiz — ${p.quizCount} questions</li>
        </ul>
      </div>
      <p class="mt-2 text-[10px] leading-relaxed text-slate-500">Your plan refreshes daily from your results — weak topics come first. Completing missions keeps your 🔥 streak alive.</p>
    </div>`;
}

function missionSection() {
  const p = buildStudyPlan();
  const d = (state.daily && state.daily.date === todayISO()) ? state.daily : { lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '' };
  const doneRead = !!p.focusTopic && d.readTopic === p.focusTopic;
  const doneCards = d.cards >= 10;
  const doneQuiz = d.quizzes > 0;
  const esc = (x) => String(x).replace(/'/g, "\\\\\\\\'");
  const chip = done => done
    ? '<span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-700">✓ DONE</span>'
    : '<span class="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black text-slate-400">PENDING</span>';
  return `
    <section class="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
      <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 class="text-sm font-bold text-slate-900">🎯 Today's mission</h3>
        <span class="text-[11px] font-semibold text-slate-400">${p.minutes} min · ${p.anyStats ? 'focus: ' + p.focus : 'diagnostic week'}</span>
      </div>
      <div class="grid gap-2 md:grid-cols-3">
        <div class="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
          <div class="min-w-0 text-xs font-semibold text-slate-700"> ${p.focus}: <span class="block truncate text-[11px] text-slate-500">${p.focusTopic || 'first topic'} — ${Math.max(5, Math.round(p.minutes * 0.4))} min</span></div>
          <div class="flex shrink-0 items-center gap-1.5">${chip(doneRead)}<button type="button" onclick="openTopic('${esc(p.focus)}','${esc(p.focusTopic)}')" class="rounded-lg bg-indigo-600 px-2.5 py-1 text-[10px] font-black text-white transition hover:bg-indigo-700">GO</button></div>
        </div>
        <div class="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
          <div class="min-w-0 text-xs font-semibold text-slate-700">🧠 Flashcards <span class="block text-[11px] text-slate-500">${Math.max(5, Math.round(p.minutes * 0.2))} min of active recall</span></div>
          <div class="flex shrink-0 items-center gap-1.5">${chip(doneCards)}<button type="button" onclick="changeSubject('${esc(p.focus)}'); navigate('flashcards')" class="rounded-lg bg-indigo-600 px-2.5 py-1 text-[10px] font-black text-white transition hover:bg-indigo-700">GO</button></div>
        </div>
        <div class="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
          <div class="min-w-0 text-xs font-semibold text-slate-700">📝 Quiz <span class="block text-[11px] text-slate-500">${p.quizCount} questions in ${p.focus}</span></div>
          <div class="flex shrink-0 items-center gap-1.5">${chip(doneQuiz)}<button type="button" onclick="changeSubject('${esc(p.focus)}'); navigate('quiz')" class="rounded-lg bg-indigo-600 px-2.5 py-1 text-[10px] font-black text-white transition hover:bg-indigo-700">GO</button></div>
        </div>
      </div>
      <p class="mt-3 text-[10px] leading-relaxed text-slate-400">Personalize → study → test → analyze → recommend: tomorrow's mission is built from today's results.</p>
    </section>`;
}

function markLessonDone(subject, title) {
  recordTask('lesson', { subject, title });
  updateChrome();
  renderPage();
  toast('Lesson complete — study activity counted! ✅');
}

/* ==================================================================
   PAGE: BADGE COLLECTION
   ================================================================== */'''
anchor = '''/* ==================================================================
   PAGE: BADGE COLLECTION
   ================================================================== */'''
assert s.count(anchor) == 1
s = s.replace(anchor, NEW_FUNCS)
print('ok: plan engine + mission + markLessonDone added')

# ---------- persistence of new profile fields ----------
rep("      classLevel: state.profile.classLevel || '',\n      targetExam: state.profile.targetExam || '',\n      subjects: state.profile.subjects || [],\n      onboarded: !!state.profile.onboarded,\n      streak: state.streak || 0,",
    "      classLevel: state.profile.classLevel || '',\n      targetExam: state.profile.targetExam || '',\n      targetScore: state.profile.targetScore || '',\n      studyPref: state.profile.studyPref || '',\n      subjects: state.profile.subjects || [],\n      onboarded: !!state.profile.onboarded,\n      streak: state.streak || 0,",
    'saveProfile payload new fields')
rep("      classLevel: state.profile.classLevel || '',\n      targetExam: state.profile.targetExam || '',\n      subjects: state.profile.subjects || [],\n      onboarded: !!state.profile.onboarded,\n      streak: state.streak,",
    "      classLevel: state.profile.classLevel || '',\n      targetExam: state.profile.targetExam || '',\n      targetScore: state.profile.targetScore || '',\n      studyPref: state.profile.studyPref || '',\n      subjects: state.profile.subjects || [],\n      onboarded: !!state.profile.onboarded,\n      streak: state.streak,",
    'onAuth setDoc new fields')
rep("    subjects: Array.isArray(data.subjects) && data.subjects.length ? data.subjects : [],\n    onboarded: !!data.onboarded\n  };",
    "    subjects: Array.isArray(data.subjects) && data.subjects.length ? data.subjects : [],\n    onboarded: !!data.onboarded,\n    targetScore: data.targetScore || '',\n    studyPref: data.studyPref || ''\n  };",
    'hydrate new fields')

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
