#!/usr/bin/env python3
"""smart4: exam command centre on the dashboard (countdown, readiness, predicted score) + positioning line."""
P = '/home/user/index.html'
s = open(P, encoding='utf-8').read()

def rep(old, new, n=1):
    global s
    c = s.count(old)
    assert c == n, f'anchor found {c}x (want {n}): {old[:70]!r}'
    s = s.replace(old, new)

# 1) positioning line (auth screen) — one-system framing, still friendly, mentions BECE
rep('Your intelligent study companion for JAMB UTME, WAEC WASSCE, NECO &amp; Post-UTME.',
    'One system for passing JAMB UTME, WAEC WASSCE, NECO, Post-UTME &amp; BECE — lessons, past questions, quizzes and your AI tutor.')

# 2) command-centre engine before missionSection()
rep("function missionSection() {",
"""/* ---------------- Exam command centre (dashboard) ---------------- */
const EXAM_MONTH = { 'JAMB UTME': 3, 'WAEC WASSCE': 4, 'NECO': 5, 'Post-UTME': 7, 'BECE': 4 };
function examSitYear(classLevel) {
  const c = String(classLevel || 'SS3');
  const n = parseInt(c.slice(3), 10) || 3;
  return new Date().getFullYear() + 1 + Math.max(0, 3 - n);
}
function examDateEstimate(exam, classLevel) {
  const m = EXAM_MONTH[exam] === undefined ? 4 : EXAM_MONTH[exam];
  return new Date(examSitYear(classLevel), m, 15);
}
function examCountdown() {
  const exam = state.profile.targetExam || '';
  if (!exam || exam === 'General' || !EXAM_MONTH[exam]) return null;
  const set = state.profile.examDate;
  const target = set ? new Date(set + 'T00:00:00') : examDateEstimate(exam, state.profile.classLevel);
  const days = Math.max(0, Math.ceil((target - new Date()) / 86400000));
  return { days, estimated: !set, date: localISO(target) };
}
function subjectReadiness() {
  const bs = (state.quizStats || {}).bySubject || {};
  return (state.profile.subjects || []).map(sub => {
    const b = bs[sub];
    return { sub, acc: b && b.total ? Math.round((b.correct / b.total) * 100) : null };
  });
}
function gradeBand(p) {
  return p >= 75 ? 'A1' : p >= 70 ? 'B2' : p >= 65 ? 'B3' : p >= 60 ? 'C4' : p >= 55 ? 'C5' : p >= 50 ? 'C6' : p >= 45 ? 'D7' : p >= 40 ? 'E8' : 'F9';
}
function targetNumber() {
  const t = state.profile.targetScore || '';
  const exam = state.profile.targetExam || '';
  if (exam === 'JAMB UTME') { const m = t.match(/(\\d+)\\+/); return m ? +m[1] : 250; }
  if (exam === 'Post-UTME') { const m = t.match(/(\\d+)%/); return m ? +m[1] : 75; }
  return 0;
}
/** Honest projection: per-subject accuracy, counted over the exam subjects.
 *  Subjects with no quiz data count as 0 for score exams — labelled as such. */
function predictedScore() {
  const exam = state.profile.targetExam || '';
  const r = subjectReadiness();
  if (exam === 'JAMB UTME') {
    const subs = r.slice(0, 4);
    return { kind: 'score', max: 400, value: subs.reduce((a, x) => a + (x.acc || 0), 0),
             missing: subs.filter(x => x.acc === null).map(x => x.sub) };
  }
  if (exam === 'Post-UTME') {
    const subs = r.slice(0, 4);
    return { kind: 'percent', max: 100, value: subs.reduce((a, x) => a + (x.acc || 0), 0) / Math.max(1, Math.min(4, subs.length)),
             missing: subs.filter(x => x.acc === null).map(x => x.sub) };
  }
  if (exam === 'WAEC WASSCE' || exam === 'NECO' || exam === 'BECE') {
    return { kind: 'grades', graded: r.filter(x => x.acc !== null).map(x => ({ sub: x.sub, grade: gradeBand(x.acc) })),
             missing: r.filter(x => x.acc === null).map(x => x.sub) };
  }
  return { kind: 'none' };
}
function examCommandCenter() {
  const exam = state.profile.targetExam || '';
  if (!exam) return '';
  const cd = examCountdown();
  const plan = buildStudyPlan();
  const weak = weakestTopicInfo();
  const rd = subjectReadiness();
  const rows = rd.filter(x => x.acc !== null).slice(0, 4);
  const pred = predictedScore();
  const bar = (x) => `
      <div class="flex items-center gap-2">
        <span class="w-24 truncate text-[11px] font-bold text-slate-600">${x.sub}</span>
        <div class="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
          <div class="h-full rounded-full ${x.acc >= 70 ? 'bg-emerald-500' : x.acc >= 50 ? 'bg-amber-500' : 'bg-rose-500'}" style="width:${x.acc}%"></div>
        </div>
        <span class="w-9 text-right text-[11px] font-black text-slate-700">${x.acc}%</span>
      </div>`;
  const predHtml = pred.kind === 'score' ? `
        <div class="text-2xl font-black text-slate-900">${pred.value}<span class="text-sm font-bold text-slate-400">/${pred.max}</span></div>
        <div class="mt-0.5 text-[11px] font-semibold text-slate-500">target ${targetNumber()}+ · if you sat ${exam} today</div>
        ${pred.missing.length ? `<div class="mt-1 text-[10px] text-slate-400">no quiz data yet: ${pred.missing.join(', ')} (counted as 0)</div>` : ''}`
    : pred.kind === 'percent' ? `
        <div class="text-2xl font-black text-slate-900">${Math.round(pred.value)}<span class="text-sm font-bold text-slate-400">%</span></div>
        <div class="mt-0.5 text-[11px] font-semibold text-slate-500">target ${targetNumber()}%+ · current average</div>
        ${pred.missing.length ? `<div class="mt-1 text-[10px] text-slate-400">no quiz data yet: ${pred.missing.join(', ')}</div>` : ''}`
    : pred.kind === 'grades' ? `
        <div class="flex flex-wrap gap-1.5">${pred.graded.map(g => `<span class="rounded-full ${g.grade <= 'C6' && g.grade >= 'A1' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'} px-2 py-0.5 text-[10px] font-black">${g.sub.split(' ')[0]}: ${g.grade}</span>`).join('') || '<span class="text-[11px] text-slate-400">No quiz data yet.</span>'}</div>
        <div class="mt-1 text-[11px] font-semibold text-slate-500">predicted grades at current accuracy</div>
        ${pred.missing.length ? `<div class="mt-1 text-[10px] text-slate-400">not yet quizzed: ${pred.missing.join(', ')}</div>` : ''}`
    : `
        <div class="text-2xl font-black text-slate-900">${state.quizStats.total ? Math.round((state.quizStats.correct / state.quizStats.total) * 100) + '%' : '—'}</div>
        <div class="mt-0.5 text-[11px] font-semibold text-slate-500">overall accuracy</div>`;
  return `
    <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
      <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 class="text-sm font-bold text-slate-900">🧭 Your road to ${exam}</h3>
        ${cd ? `<span class="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-black text-indigo-700">⏳ ${cd.days} day${cd.days === 1 ? '' : 's'} to go${cd.estimated ? ' · est.' : ''}</span>` : ''}
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        <div>
          <div class="mb-2 text-[11px] font-black uppercase tracking-wide text-slate-400">Subject readiness</div>
          ${rows.length ? `<div class="space-y-2">${rows.map(bar).join('')}</div>` : '<p class="text-[11px] text-slate-400">Take a quiz in each subject and your readiness bars appear here.</p>'}
        </div>
        <div>
          <div class="mb-2 text-[11px] font-black uppercase tracking-wide text-slate-400">Today’s session</div>
          <div class="text-sm font-bold text-slate-800">${plan.minutes} min · ${plan.quizCount} quiz${plan.quizCount === 1 ? '' : 'zes'}</div>
          <div class="mt-1 text-[11px] leading-relaxed text-slate-500">Focus: <b>${plan.focus}${plan.focusTopic ? ' → ' + plan.focusTopic : ''}</b></div>
          <div class="mt-2 text-[11px] leading-relaxed text-slate-500">${weak.weakTop ? `Biggest gap: <b class="text-rose-600">${weak.weakSub} → ${weak.weakTop} (${weak.topPct}%)</b>` : weak.weakSub ? `Biggest gap: <b class="text-rose-600">${weak.weakSub} (${weak.weakPct}%)</b>` : 'Take a few quizzes and your weakest topic shows up here.'}</div>
        </div>
        <div>
          <div class="mb-2 text-[11px] font-black uppercase tracking-wide text-slate-400">Projection</div>
          ${predHtml}
        </div>
      </div>
      ${cd ? `<div class="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-400">
        <span>${cd.estimated ? 'Exam date estimated —' : 'Exam date:'}</span>
        <input type="date" value="${state.profile.examDate || ''}" onchange="setExamDate(this.value)"
          class="rounded-lg border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-600" />
        <span>set your real date for an exact countdown</span>
      </div>` : ''}
    </section>`;
}
function setExamDate(v) {
  state.profile.examDate = v || '';
  saveProfile({ examDate: v || '' });
  renderPage();
}
function missionSection() {""")

# 3) render the command centre right after the hero
rep("      ${missionSection()}",
    "      ${examCommandCenter()}\n\n      ${missionSection()}")

# 4) persist + hydrate the new field
rep("      dept: state.profile.dept || '',",
    "      dept: state.profile.dept || '',\n      examDate: state.profile.examDate || '',")
rep("    dept: data.dept || ''",
    "    dept: data.dept || '',\n    examDate: data.examDate || ''")

# 5) expose onclick handler + test hooks
rep("  setQuizCount, setQuizTimer, openFocusModal, closeFocusModal, focusModalBackdrop, startFocus, stopFocus, updateFocusPill,",
    "  setQuizCount, setQuizTimer, openFocusModal, closeFocusModal, focusModalBackdrop, startFocus, stopFocus, updateFocusPill, setExamDate,")
rep("  markGot, markLater, pushHistory, progressChartSvg, activityHeatSvg, shuffleOptions, localISO,",
    "  markGot, markLater, pushHistory, progressChartSvg, activityHeatSvg, shuffleOptions, localISO,\n  examCountdown, subjectReadiness, gradeBand, predictedScore, targetNumber, examCommandCenter, examDateEstimate,")

open(P, 'w', encoding='utf-8').write(s)
print('smart4 applied OK')
