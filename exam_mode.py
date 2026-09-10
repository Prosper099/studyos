"""Past questions open in a real CBT exam interface: one question at a time,
palette, prev/next, exam submit — JAMB style."""
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()
n = 0

def rep(old, new, cnt=1):
    global s, n
    assert s.count(old) >= 1, 'ANCHOR MISSING: ' + old[:80]
    s = s.replace(old, new, cnt)
    n += 1

# 1. past drills start in exam mode at question 1
rep("""function startPastQuiz() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'past', level: '', topicIdx: 0, topicTitle: '',
    questions: buildQuiz(state.selectedSubject, 'past'), deadline: quizDeadline() };""",
"""function startPastQuiz() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'past', level: '', topicIdx: 0, topicTitle: '',
    questions: buildQuiz(state.selectedSubject, 'past'), deadline: quizDeadline(), examIdx: 0 };""")

# 2. exam navigation helpers
rep("""function quizFor(subject) {""",
"""/* Exam-mode navigation — past questions run like the real CBT hall. */
function examJump(i) {
  const qz = state.quiz;
  if (!qz || qz.submitted) return;
  const total = (qz.questions || []).length || 1;
  qz.examIdx = Math.min(Math.max(Number(i) || 0, 0), total - 1);
  renderPage();
}
function examPrev() { examJump((state.quiz.examIdx || 0) - 1); }
function examNext() { examJump((state.quiz.examIdx || 0) + 1); }
function submitExam() {
  const qz = state.quiz;
  if (!qz || qz.submitted) return;
  const total = (qz.questions || []).length;
  const answered = Object.keys(qz.answers).length;
  if (answered < total && !confirm(`You have answered ${answered} of ${total} questions. Unanswered questions score zero. Submit your exam now?`)) return;
  submitQuiz();
}

function quizFor(subject) {""")

# 3. renderer branch: past + not submitted -> one-at-a-time exam view
rep("""  const answered = Object.keys(state.quiz.answers).length;

  el.innerHTML = `
    ${pageHeader('Practice Exam', `${quizTitle} · ${level}`)}""",
"""  const answered = Object.keys(state.quiz.answers).length;

  if (qz.mode === 'past' && !state.quiz.submitted) {
    const qi = Math.min(Math.max(qz.examIdx || 0, 0), quiz.length - 1);
    const q = quiz[qi];
    const chosen = state.quiz.answers[q.id];
    el.innerHTML = `
      ${pageHeader('Practice Exam', `${quizTitle} · ${level}`)}
      ${subjectSelector('quiz')}
      <div class="mb-4">
        <button type="button" onclick="backToQuizList()" class="rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">← All ${level} quizzes</button>
      </div>

      <div class="mb-3 flex flex-wrap items-center gap-3 rounded-2xl border border-amber-200 bg-white p-4 shadow-card">
        <div class="flex items-center gap-2">
          <span class="text-lg">${CURRICULUM[subject].icon}</span>
          <div>
            <div class="text-sm font-bold text-slate-900">${subject} · Real exam simulation</div>
            <div class="flex items-center gap-2 text-[11px] text-slate-500">
              <span>${answered} of ${quiz.length} answered</span>
              ${qz.deadline ? `<span id="quiz-timer" class="rounded-full bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 ring-1 ring-inset ring-indigo-100">⏱ ${fmtCountdown(qz.deadline - Date.now())}</span>` : '<span class="rounded-full bg-slate-100 px-2 py-0.5 font-bold text-slate-600">No time limit</span>'}
            </div>
          </div>
        </div>
        <button type="button" onclick="submitExam()" class="ml-auto rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-amber-400">Submit exam</button>
      </div>

      <p class="mb-4 rounded-xl bg-indigo-50 px-3 py-2 text-[11px] font-semibold leading-relaxed text-indigo-700">🎯 <b>Exam mode — just like the real CBT hall:</b> one question at a time, jump around with the palette below, and submit when done. Every question keeps its exam-body and year tag. Unanswered questions score zero.</p>

      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
        <div class="mb-3 flex items-start gap-3">
          <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[11px] font-bold text-white">${qi + 1}</span>
          <h3 class="flex-1 text-sm font-bold leading-relaxed text-slate-900">${q.q}${q.src ? `<span class="ml-2 inline-block rounded bg-amber-100 px-1.5 py-0.5 align-middle text-[9px] font-bold text-amber-700">${q.src}</span>` : ''}</h3>
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
      </section>

      <div class="mt-4 flex items-center justify-between gap-3">
        <button type="button" onclick="examPrev()" ${qi === 0 ? 'disabled' : ''}
          class="rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 disabled:opacity-40">← Previous</button>
        ${qi === quiz.length - 1
          ? `<button type="button" onclick="submitExam()" class="rounded-xl ${c.solid} px-6 py-2.5 text-xs font-bold text-white shadow-card transition hover:opacity-90">Submit exam ✓</button>`
          : `<button type="button" onclick="examNext()" class="rounded-xl ${c.solid} px-6 py-2.5 text-xs font-bold text-white shadow-card transition hover:opacity-90">Next question →</button>`}
      </div>

      <div class="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
        <div class="mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400">Question palette</div>
        <div class="flex flex-wrap gap-1.5">
          ${quiz.map((qq, i) => `<button type="button" onclick="examJump(${i})" title="Go to question ${i + 1}"
            class="h-8 w-8 rounded-lg text-[11px] font-bold transition ${i === qi ? 'bg-slate-900 text-white ring-2 ring-indigo-300' : state.quiz.answers[qq.id] !== undefined ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${i + 1}</button>`).join('')}
        </div>
      </div>`;
    return;
  }

  el.innerHTML = `
    ${pageHeader('Practice Exam', `${quizTitle} · ${level}`)}""")

# 4. expose handlers + test hooks
rep("  selectQuizAnswer, submitQuiz, retakeQuiz,",
    "  selectQuizAnswer, submitQuiz, retakeQuiz, examJump, examPrev, examNext, submitExam,")
rep("""  gradeQuiz, mergeQuizStats, initials,""",
    """  gradeQuiz, mergeQuizStats, initials, startPastQuiz, examJump, examPrev, examNext, submitExam,""")

open(PATH, 'w', encoding='utf-8').write(s)
print(f'Exam interface applied: {n} replacements')
