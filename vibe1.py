# vibe1.py — level-appropriate experience + name & department in onboarding. RUN ONCE.
path = 'index.html'
s = open(path, encoding='utf-8').read()

def rep(old, new, n=1):
    global s
    assert s.count(old) == n, ('COUNT', old[:70], s.count(old))
    s = s.replace(old, new)

# ---------- C: JSS lesson copy sweep ----------
rep('is free marks in every BECE and JAMB oral paper.', 'is free marks in every BECE oral paper.')
rep('This single error appears in almost every weak script in WAEC history.', 'This single error appears in almost every weak BECE script.')
rep('BECE and Post-UTME papers usually phrase the task', 'BECE papers usually phrase the task')

# ---------- E2: examsForLevel level-aware ----------
rep("""function examsForLevel(classLevel) {
  return String(classLevel || '').startsWith('JSS') ? EXAM_OPTIONS.JSS.slice() : EXAM_OPTIONS.SS.slice();
}""",
"""function examsForLevel(classLevel) {
  const c = String(classLevel || '');
  if (c.startsWith('JSS')) return EXAM_OPTIONS.JSS.slice();
  if (c === 'SS3') return EXAM_OPTIONS.SS.slice();
  return EXAM_OPTIONS.SS.filter(e => ['WAEC WASSCE', 'NECO', 'General'].includes(e.id));
}

/** SS streams: core subjects plus the electives of the chosen department. */
const DEPARTMENTS = {
  Science: ['Physics', 'Chemistry', 'Biology'],
  Arts: ['Government', 'Literature in English', 'History'],
  Commercial: ['Economics', 'Commerce', 'Financial Accounting']
};""")

# ---------- E1: selectableSubjects dept-aware ----------
rep("""function selectableSubjects() {
  return subjectsForLevel(state.onboard.classLevel);
}""",
"""function selectableSubjects() {
  const lvl = String(state.onboard.classLevel || '');
  if (!lvl.startsWith('SS')) return subjectsForLevel(state.onboard.classLevel);
  const core = ['Mathematics', 'English Language'];
  return state.onboard.dept ? core.concat(DEPARTMENTS[state.onboard.dept] || []) : subjectsForLevel(lvl);
}""")

# ---------- E3: icons for new subjects ----------
rep("'Biology': '🧬'\n  }",
    "'Biology': '🧬',\n    'Government': '🏛️', 'Literature in English': '📖', 'History': '🏺',\n    'Economics': '📈', 'Commerce': '🛒', 'Financial Accounting': '🧾'\n  }")

# ---------- E4: onboard state gains name + dept ----------
rep("""  state.onboard = {
    step: 1,
    classLevel: state.profile.classLevel || '',""",
"""  state.onboard = {
    step: 1,
    name: state.profile.name || '',
    dept: state.profile.dept || '',
    classLevel: state.profile.classLevel || '',""")

# ---------- E5a: step 1 name input ----------
rep("""  if (o.step === 1) {
    $('#step-1').innerHTML = OPTIONS.classes.map(c => `""",
"""  if (o.step === 1) {
    $('#step-1').innerHTML = `
      <label class="mb-1 block text-[11px] font-bold uppercase tracking-wide text-slate-400" for="onboard-name">What should we call you?</label>
      <input id="onboard-name" type="text" maxlength="40" value="${escapeHtml(o.name || '')}" placeholder="Your name — e.g. Ada"
        oninput="state.onboard.name = this.value"
        class="mb-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />` +
      OPTIONS.classes.map(c => `""")

# ---------- E5b: step 3 department picker ----------
rep("""  } else if (o.step === 3) {
    $('#step-3').innerHTML = selectableSubjects().map(s => {""",
"""  } else if (o.step === 3) {
    const isSS = String(o.classLevel).startsWith('SS');
    const deptBar = isSS ? `
      <div class="mb-2 grid grid-cols-3 gap-2">
        ${Object.keys(DEPARTMENTS).map(dp => `
          <button type="button" onclick="pickDept('${dp}')"
            class="rounded-xl border px-2 py-2.5 text-xs font-bold transition-all ${o.dept === dp ? 'border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}">${{ 'Science': '🔬 Science', 'Arts': '🎭 Arts', 'Commercial': '💼 Commercial' }[dp]}</button>`).join('')}
      </div>
      <p class="mb-3 text-[11px] text-slate-500">Pick your department — Maths &amp; English stay core for everybody.</p>` : '';
    $('#step-3').innerHTML = deptBar + selectableSubjects().map(s => {""")

# ---------- E6: pickDept + validation + finish saves ----------
rep("""function pickOnboardOption(key, value) {""",
"""function pickDept(d) {
  const o = state.onboard;
  o.dept = o.dept === d ? '' : d;
  const keep = selectableSubjects();
  o.subjects = o.subjects.filter(x => keep.includes(x));
  renderOnboardStep();
}
function pickOnboardOption(key, value) {""")

rep("""  const invalid =
    (o.step === 1 && !o.classLevel) || (o.step === 2 && !o.targetExam) ||
    (o.step === 3 && o.subjects.length === 0) || (o.step === 4 && !o.targetScore) ||""",
"""  const invalid =
    (o.step === 1 && !o.classLevel) || (o.step === 2 && !o.targetExam) ||
    (o.step === 3 && (String(o.classLevel).startsWith('SS') ? !o.dept : false)) ||
    (o.step === 3 && o.subjects.length === 0) || (o.step === 4 && !o.targetScore) ||""")

rep("""  state.profile.classLevel = o.classLevel;
  state.profile.targetExam = o.targetExam;""",
"""  if ((o.name || '').trim()) state.profile.name = o.name.trim();
  state.profile.dept = o.dept || '';
  state.profile.classLevel = o.classLevel;
  state.profile.targetExam = o.targetExam;""")

# ---------- E7: dashboard exam fallback level-aware ----------
rep("const exam = state.profile.targetExam || 'JAMB UTME';",
    "const exam = state.profile.targetExam || (String(cls).startsWith('JSS') ? 'BECE' : 'WAEC WASSCE');")

# ---------- E8: Buddy level-aware ----------
rep("""    else chips.push('JAMB exam strategy');""",
"""    else chips.push(examStrategyChip());""")
rep("'Redox reactions', 'WAEC exam tips']", "'Redox reactions', examTipsChip()]")
rep("chips: ['Next topic in my subject', 'Give me a study plan', 'JAMB exam strategy']",
    "chips: ['Next topic in my subject', 'Give me a study plan', examStrategyChip()]")
rep("**reported speech** or **JAMB exam strategy**. You can also ask me to *solve* an equation step by step.`),",
    "**reported speech** or **${examStrategyChip()}**. You can also ask me to *solve* an equation step by step.`),")
rep("chips: ['Explain the mole concept', 'Solve 2x + y = 11 and x - y = 1', 'JAMB exam strategy', 'Build me a study plan']",
    "chips: ['Explain the mole concept', 'Solve 2x + y = 11 and x - y = 1', examStrategyChip(), 'Build me a study plan']")
rep("• **Exam technique** for JAMB UTME and WAEC WASSCE.\\n", "• **Exam technique** for ${buddyExamLine()}.\\n")
rep("'You are Buddy, a friendly Nigerian secondary-school tutor preparing a student for JAMB UTME and WAEC WASSCE.',",
    "`You are Buddy, a friendly Nigerian secondary-school tutor preparing a ${state.profile.classLevel || 'secondary'} student for ${buddyExamLine()}.`,")

# helper fns right after DEPARTMENTS
rep("""  Commercial: ['Economics', 'Commerce', 'Financial Accounting']
};""",
"""  Commercial: ['Economics', 'Commerce', 'Financial Accounting']
};

function examStrategyChip() {
  return String(state.profile.classLevel || '').startsWith('JSS') ? 'BECE exam strategy' : 'JAMB exam strategy';
}
function examTipsChip() {
  return String(state.profile.classLevel || '').startsWith('JSS') ? 'BECE exam tips' : 'WAEC exam tips';
}
function buddyExamLine() {
  const c = String(state.profile.classLevel || '');
  if (c.startsWith('JSS')) return 'the BECE (Junior WAEC)';
  if (c === 'SS1' || c === 'SS2') return 'WAEC WASSCE and NECO';
  return 'JAMB UTME and WAEC WASSCE';
}""")

# ---------- E9: BECE strategy article ----------
rep("""  {
    subject: 'Study skills', title: 'Building a Study Plan & Keeping Your Streak',""",
"""  {
    subject: 'Study skills', title: 'BECE Exam Strategy',
    keywords: ['bece', 'junior waec', 'exam strategy', 'how to pass bece', 'jss3', 'junior school certificate'],
    body: `
<h4>How the BECE works</h4>
<ul><li>The Junior WAEC, sat at the end of JSS 3 — objectives plus theory papers in your subjects.</li>
<li>It covers JSS 1 to 3 work, so <b>steady revision beats last-minute cramming</b>.</li></ul>
<h4>Winning habits</h4>
<ul><li>Practise past BECE objectives against a timer — speed is half the marks.</li>
<li>In theory, answer in full sentences; show every step in Maths and Basic Science.</li>
<li>Label every diagram in Basic Science and Basic Technology — unlabeled diagrams lose marks.</li>
<li>English paper: comprehension answers live IN the passage — underline as you read.</li></ul>`
  },
  {
    subject: 'Study skills', title: 'Building a Study Plan & Keeping Your Streak',""")

# ---------- E10: resources level-aware ----------
rep("""function renderResources(el) {
  const subject = state.selectedSubject;
  const links = CURRICULUM[subject].resources;""",
"""function juniorLink(r) {
  const fix = t => String(t)
    .replace('WAEC Chemistry — redox reactions & oxidation numbers', 'BECE Basic Science — redox & oxidation numbers')
    .replace('Myschool — Chemistry past questions', 'Myschool — Basic Science past questions')
    .replace('JAMB Use of English — lexis & structure masterclass', 'BECE English — lexis & structure masterclass')
    .replace('JAMB Mathematics — full topic-by-topic revision', 'BECE Mathematics — full topic-by-topic revision')
    .replace('Myschool — JAMB/WAEC Maths past questions', 'Myschool — BECE Maths past questions')
    .replace(/JAMB\\/WAEC/g, 'BECE').replace(/UTME and WASSCE/g, 'BECE').replace(/WASSCE and UTME/g, 'BECE')
    .replace(/JAMB/g, 'BECE').replace(/WAEC/g, 'BECE').replace(/UTME/g, 'BECE').replace(/WASSCE/g, 'BECE')
    .replace(/jamb\\+/g, 'bece+').replace(/waec\\+/g, 'bece+');
  return { cat: r.cat, title: fix(r.title), url: fix(r.url), note: fix(r.note) };
}
function renderResources(el) {
  const subject = state.selectedSubject;
  const links = (CURRICULUM[subject].resources || []).map(r =>
    String(state.profile.classLevel || '').startsWith('JSS') ? juniorLink(r) : r);""")

open(path, 'w', encoding='utf-8').write(s)
print('vibe patch applied')
