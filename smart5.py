#!/usr/bin/env python3
"""smart5: freemium model — Pro/Pack plans, daily free caps, Paystack checkout, founder code, parent report."""
P = '/home/user/index.html'
s = open(P, encoding='utf-8').read()

def rep(old, new, n=1):
    global s
    c = s.count(old)
    assert c == n, f'anchor found {c}x (want {n}): {old[:70]!r}'
    s = s.replace(old, new)

# 1) profile + settings defaults
rep("    name: '', email: '', classLevel: '', targetExam: '', targetScore: '', studyPref: '',",
    "    name: '', email: '', classLevel: '', targetExam: '', targetScore: '', studyPref: '', plan: 'free', planRef: '', planSince: '',")
rep("  settings: { research: true, geminiApiKey: '', geminiModel: 'gemini-2.5-flash' }",
    "  settings: { research: true, geminiApiKey: '', geminiModel: 'gemini-2.5-flash', paystackKey: '' }")

# 2) Pro engine (plans, gates, paystack, parent report, lock teaser)
rep("/* ---------------- Exam command centre (dashboard) ---------------- */",
"""/* ---------------- Pro plans, freemium gates & Paystack ---------------- */
const PRO_MONTHLY_NGN = 2000, PRO_PACK_NGN = 5000;
const FREE_DAILY_QUIZZES = 3, FREE_DAILY_BUDDY = 20;
const PRO_UNLOCK_CODE = 'STUDYOS-PRO-2026'; // founder stop-gap — change before launch
function proActive() { return state.profile.plan === 'pro' || state.profile.plan === 'pack'; }
function dailyQuizzesUsed() { return (state.daily && state.daily.quizzes) || 0; }
function dailyBuddyUsed() { return (state.daily && state.daily.buddy) || 0; }
function quizGate() {
  if (proActive() || dailyQuizzesUsed() < FREE_DAILY_QUIZZES) return true;
  openUpgrade('quiz');
  return false;
}
function buddyGate() { return proActive() || dailyBuddyUsed() < FREE_DAILY_BUDDY; }
const UPGRADE_REASONS = {
  quiz: `You have used today's ${FREE_DAILY_QUIZZES} free quizzes. Pro students practise without limits — and every quiz feeds your projected score.`,
  buddy: `You have used today's ${FREE_DAILY_BUDDY} free Buddy questions. Pro students ask without limits.`,
  plan: 'The countdown, daily plan and projections are part of StudyOS Pro.'
};
function openUpgrade(reason) {
  const m = document.getElementById('upgrade-modal');
  const r = document.getElementById('upgrade-reason');
  if (r) r.textContent = UPGRADE_REASONS[reason] || 'Unlock the full exam engine.';
  if (m) { m.classList.remove('hidden'); m.classList.add('flex'); }
}
function closeUpgrade() {
  const m = document.getElementById('upgrade-modal');
  if (m) { m.classList.add('hidden'); m.classList.remove('flex'); }
}
function upgradeBackdrop(event) { if (event && event.target === event.currentTarget) closeUpgrade(); }
function loadPaystack(cb) {
  if (window.PaystackPop) { cb(); return; }
  const sc = document.createElement('script');
  sc.src = 'https://js.paystack.co/v1/inline.js';
  sc.onload = () => cb();
  sc.onerror = () => toast('Could not reach Paystack — check your connection and try again.');
  document.head.appendChild(sc);
}
function choosePlan(plan) {
  const key = (state.settings.paystackKey || '').trim();
  if (!key) { toast('Card payment is not connected on this install yet — use a founder code or WhatsApp the founder.'); return; }
  const amount = plan === 'pack' ? PRO_PACK_NGN : PRO_MONTHLY_NGN;
  loadPaystack(() => {
    const handler = window.PaystackPop.setup({
      key,
      email: state.profile.email || 'student@studyos.app',
      amount: amount * 100,
      currency: 'NGN',
      ref: 'studyos-' + Date.now(),
      callback: resp => activatePlan(plan, (resp && resp.reference) || 'paystack'),
      onClose: () => {}
    });
    handler.openIframe();
  });
}
function activatePlan(plan, ref) {
  state.profile.plan = plan;
  state.profile.planRef = ref || '';
  state.profile.planSince = localISO();
  saveProfile({});
  closeUpgrade();
  renderPage();
  toast(plan === 'pack' ? 'JAMB Premium Pack active — go and smash it! 🎯' : 'Welcome to StudyOS Pro! ⭐');
}
function founderUnlock() {
  const inp = document.getElementById('founder-code');
  const v = ((inp && inp.value) || '').trim();
  if (v === PRO_UNLOCK_CODE) activatePlan('pro', 'founder');
  else toast('That code is not right — check with the founder.');
}
function whatsappUpgrade() {
  window.open('https://wa.me/?text=' + encodeURIComponent('Hello Prosper! I want to upgrade to StudyOS Pro. My account: ' + (state.profile.email || '')), '_blank');
}
function savePaystackKey(v) {
  state.settings.paystackKey = (v || '').trim();
  saveProfile({});
  toast(state.settings.paystackKey ? 'Paystack key saved — card payments are live.' : 'Paystack key removed.');
}
function buildParentReport() {
  const st = state.quizStats || {};
  const acc = st.total ? Math.round((st.correct / st.total) * 100) : 0;
  const now = new Date();
  const week = Object.keys(st.days || {}).filter(d => {
    const diff = (now - new Date(d + 'T00:00:00')) / 86400000;
    return diff >= 0 && diff < 7;
  }).length;
  const weak = weakestTopicInfo();
  return [
    'StudyOS weekly report for ' + (state.profile.name || 'Student') + ' (' + (state.profile.classLevel || '') + ')',
    'Active study days this week: ' + week,
    'Questions answered so far: ' + (st.total || 0) + ' at ' + acc + '% accuracy',
    'Quizzes taken: ' + (st.attempts || 0) + ' · best score ' + (st.bestPercent || 0) + '%',
    weak.weakSub ? 'Current focus area: ' + weak.weakSub + (weak.weakTop ? ' — ' + weak.weakTop : '') + ' (' + (weak.topPct || weak.weakPct) + '%)' : 'Current focus area: building across subjects',
    'Streak: ' + (state.streak || 0) + ' day(s). A little encouragement goes a long way! — StudyOS'
  ].join('\\n');
}
function shareParentReport() {
  window.open('https://wa.me/?text=' + encodeURIComponent(buildParentReport()), '_blank');
}
function lockTeaser(label) {
  return `<div class="rounded-xl border border-dashed border-amber-200 bg-amber-50/60 p-3">
    <div class="text-[11px] font-bold text-amber-700">🔒 ${label} — Pro</div>
    <button type="button" onclick="openUpgrade('plan')" class="mt-2 rounded-lg bg-amber-500 px-3 py-1.5 text-[11px] font-black text-white transition hover:bg-amber-600">Unlock · ₦${PRO_MONTHLY_NGN.toLocaleString()}/mo</button>
  </div>`;
}
/* ---------------- Exam command centre (dashboard) ---------------- */""")

# 3) gates on every quiz start
rep("function startPastQuiz() {\n  if (String(state.profile.classLevel || '').startsWith('JSS'))",
    "function startPastQuiz() {\n  if (!quizGate()) return;\n  if (String(state.profile.classLevel || '').startsWith('JSS'))")
rep("function startTopicQuiz(subject, title) {\n  const level = state.profile.classLevel || 'SS3';",
    "function startTopicQuiz(subject, title) {\n  if (!quizGate()) return;\n  const level = state.profile.classLevel || 'SS3';")
rep("function startMockQuiz() {\n  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'mock'",
    "function startMockQuiz() {\n  if (!quizGate()) return;\n  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'mock'")
rep("function startCbtExam() {\n  const p = effectiveExamPrefs();",
    "function startCbtExam() {\n  if (!quizGate()) return;\n  const p = effectiveExamPrefs();")

# 4) Buddy gate + daily buddy counter
rep("""  if (state.page !== 'assistant') navigate('assistant');
  pushChat('me', escapeHtml(question));
  renderChips([]);""",
"""  if (!buddyGate()) {
    if (state.page !== 'assistant') navigate('assistant');
    pushChat('buddy', `You have used today's ${FREE_DAILY_BUDDY} free Buddy questions — Pro students ask without limit. Upgrade and keep me by your side. ⭐`);
    openUpgrade('buddy');
    return;
  }
  if (!state.daily || state.daily.date !== localISO()) state.daily = { date: localISO(), lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '', buddy: 0 };
  state.daily.buddy = (state.daily.buddy || 0) + 1;
  if (state.page !== 'assistant') navigate('assistant');
  pushChat('me', escapeHtml(question));
  renderChips([]);""")
rep("if (!state.daily || state.daily.date !== d) state.daily = { date: d, lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '' };",
    "if (!state.daily || state.daily.date !== d) state.daily = { date: d, lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '', buddy: 0 };")

# 5) command centre: Pro-only countdown / plan / projection; free keeps readiness bars
rep("  const cd = examCountdown();\n  const plan = buildStudyPlan();",
    "  const cd = examCountdown();\n  const pro = proActive();\n  const plan = buildStudyPlan();")
rep("        ${cd ? `<span class=\"rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-black text-indigo-700\">⏳ ${cd.days} day${cd.days === 1 ? '' : 's'} to go${cd.estimated ? ' · est.' : ''}</span>` : ''}",
    "        ${pro ? (cd ? `<span class=\"rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-black text-indigo-700\">⏳ ${cd.days} day${cd.days === 1 ? '' : 's'} to go${cd.estimated ? ' · est.' : ''}</span>` : '') : `<button type=\"button\" onclick=\"openUpgrade('plan')\" class=\"rounded-full bg-amber-50 px-3 py-1 text-[11px] font-black text-amber-700 transition hover:bg-amber-100\">⭐ Go Pro</button>`}")
rep("""          <div class="mb-2 text-[11px] font-black uppercase tracking-wide text-slate-400">Today’s session</div>
          <div class="text-sm font-bold text-slate-800">${plan.minutes} min · ${plan.quizCount} quiz${plan.quizCount === 1 ? '' : 'zes'}</div>
          <div class="mt-1 text-[11px] leading-relaxed text-slate-500">Focus: <b>${plan.focus}${plan.focusTopic ? ' → ' + plan.focusTopic : ''}</b></div>
          <div class="mt-2 text-[11px] leading-relaxed text-slate-500">${weak.weakTop ? `Biggest gap: <b class="text-rose-600">${weak.weakSub} → ${weak.weakTop} (${weak.topPct}%)</b>` : weak.weakSub ? `Biggest gap: <b class="text-rose-600">${weak.weakSub} (${weak.weakPct}%)</b>` : 'Take a few quizzes and your weakest topic shows up here.'}</div>""",
"""          <div class="mb-2 text-[11px] font-black uppercase tracking-wide text-slate-400">Today’s session</div>
          ${pro ? `
          <div class="text-sm font-bold text-slate-800">${plan.minutes} min · ${plan.quizCount} quiz${plan.quizCount === 1 ? '' : 'zes'}</div>
          <div class="mt-1 text-[11px] leading-relaxed text-slate-500">Focus: <b>${plan.focus}${plan.focusTopic ? ' → ' + plan.focusTopic : ''}</b></div>
          <div class="mt-2 text-[11px] leading-relaxed text-slate-500">${weak.weakTop ? `Biggest gap: <b class="text-rose-600">${weak.weakSub} → ${weak.weakTop} (${weak.topPct}%)</b>` : weak.weakSub ? `Biggest gap: <b class="text-rose-600">${weak.weakSub} (${weak.weakPct}%)</b>` : 'Take a few quizzes and your weakest topic shows up here.'}</div>` : lockTeaser('Personal daily plan & weakest-topic radar')}""")
rep("          <div class=\"mb-2 text-[11px] font-black uppercase tracking-wide text-slate-400\">Projection</div>\n          ${predHtml}",
    "          <div class=\"mb-2 text-[11px] font-black uppercase tracking-wide text-slate-400\">Projection</div>\n          ${pro ? predHtml : lockTeaser('Projected score & predicted grades')}")
rep("      ${cd ? `<div class=\"mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-400\">",
    "      ${pro && cd ? `<div class=\"mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-400\">")

# 6) upgrade sheet markup
rep("<!-- STREAK / BADGE CELEBRATION OVERLAY                             -->",
"""<!-- UPGRADE / PRO SHEET                                              -->
<!-- ============================================================ -->
<div id="upgrade-modal" class="fixed inset-0 z-[66] hidden items-center justify-center bg-slate-900/60 p-4" onclick="upgradeBackdrop(event)">
  <div class="w-full max-w-md rounded-3xl bg-white p-6 shadow-pop pop-in">
    <div class="flex items-start justify-between">
      <div>
        <h3 class="text-lg font-black text-slate-900">⭐ StudyOS Pro</h3>
        <p id="upgrade-reason" class="mt-1 text-xs leading-relaxed text-slate-500">Unlock the full exam engine.</p>
      </div>
      <button type="button" onclick="closeUpgrade()" class="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-500 transition hover:bg-slate-200">✕</button>
    </div>
    <div class="mt-4 grid grid-cols-2 gap-3">
      <div class="rounded-2xl border-2 border-indigo-500 bg-indigo-50/50 p-4">
        <div class="text-[11px] font-black uppercase tracking-wide text-indigo-600">Pro · monthly</div>
        <div class="mt-1 text-xl font-black text-slate-900">₦2,000<span class="text-xs font-bold text-slate-400">/mo</span></div>
        <ul class="mt-2 space-y-1 text-[10px] font-semibold text-slate-600">
          <li>✔ Unlimited quizzes &amp; Buddy</li>
          <li>✔ Exam countdown &amp; daily plan</li>
          <li>✔ Projected score &amp; grades</li>
          <li>✔ Weakest-topic radar</li>
        </ul>
        <button type="button" onclick="choosePlan('pro')" class="mt-3 w-full rounded-xl bg-indigo-600 px-3 py-2 text-[11px] font-black text-white transition hover:bg-indigo-500">Go Pro</button>
      </div>
      <div class="rounded-2xl border border-slate-200 p-4">
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">JAMB Pack · once</div>
        <div class="mt-1 text-xl font-black text-slate-900">₦5,000</div>
        <ul class="mt-2 space-y-1 text-[10px] font-semibold text-slate-600">
          <li>✔ Everything in Pro</li>
          <li>✔ Till your UTME ends</li>
          <li>✔ Full CBT exam prep</li>
        </ul>
        <button type="button" onclick="choosePlan('pack')" class="mt-3 w-full rounded-xl bg-slate-900 px-3 py-2 text-[11px] font-black text-white transition hover:bg-slate-800">Get the Pack</button>
      </div>
    </div>
    <div class="mt-4 rounded-xl bg-slate-50 p-3">
      <div class="text-[10px] font-bold text-slate-500">Have a founder code?</div>
      <div class="mt-1 flex gap-2">
        <input type="text" id="founder-code" placeholder="Code" class="flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] outline-none focus:border-indigo-400" />
        <button type="button" onclick="founderUnlock()" class="rounded-lg bg-slate-700 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-slate-600">Unlock</button>
      </div>
      <p class="mt-2 text-[10px] leading-relaxed text-slate-400">Payments run securely on Paystack. Questions? <button type="button" onclick="whatsappUpgrade()" class="font-bold text-emerald-600 hover:underline">WhatsApp the founder</button>.</p>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- STREAK / BADGE CELEBRATION OVERLAY                             -->""")

# 7) profile: family & plan section
rep("""        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-1 text-sm font-bold text-slate-900">📈 Your progress</h3>""",
"""        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-1 text-sm font-bold text-slate-900">👨‍👩‍ Family &amp; plan</h3>
          <p class="mb-3 text-[11px] text-slate-400">Send a parent a plain-English summary of your week — you choose what to share. And when you are ready for the full engine, go Pro.</p>
          <div class="flex flex-wrap items-center gap-2">
            <button type="button" onclick="shareParentReport()" class="rounded-xl bg-emerald-600 px-4 py-2 text-[11px] font-black text-white transition hover:bg-emerald-500">📤 Send parent my report</button>
            ${proActive() ? `<span class="rounded-full bg-amber-50 px-3 py-1.5 text-[11px] font-black text-amber-700">⭐ ${state.profile.plan === 'pack' ? 'JAMB Premium Pack active' : 'Pro active'}</span>` : `<button type="button" onclick="openUpgrade('plan')" class="rounded-xl bg-slate-900 px-4 py-2 text-[11px] font-black text-white transition hover:bg-slate-800">⭐ Upgrade to Pro — ₦${PRO_MONTHLY_NGN.toLocaleString()}/mo</button>`}
          </div>
          ${proActive() ? '' : `<p class="mt-2 text-[10px] text-slate-400">Free today: ${Math.max(0, FREE_DAILY_QUIZZES - dailyQuizzesUsed())} quiz${FREE_DAILY_QUIZZES - dailyQuizzesUsed() === 1 ? '' : 'zes'} left · ${Math.max(0, FREE_DAILY_BUDDY - dailyBuddyUsed())} Buddy questions left.</p>`}
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-1 text-sm font-bold text-slate-900">📈 Your progress</h3>""")

# 8) owner payments key in Buddy settings
rep("<span class=\"text-[10px] text-slate-400\">If a model is ever retired or busy, Buddy auto-switches to the next one.</span>",
"""<span class="text-[10px] text-slate-400">If a model is ever retired or busy, Buddy auto-switches to the next one.</span>
          <div class="mt-3 border-t border-slate-100 pt-3">
            <label class="block text-[11px] font-bold text-slate-700" for="paystack-key">Owner only: Paystack public key (turns on Pro card payments)</label>
            <div class="mt-1 flex gap-2">
              <input type="password" id="paystack-key" value="${escapeHtml(state.settings.paystackKey || '')}" placeholder="pk_live_…"
                class="flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
              <button type="button" onclick="savePaystackKey(document.getElementById('paystack-key').value)" class="rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-slate-700">Save</button>
            </div>
          </div>""")

# 9) persistence: plan fields + paystack key
rep("      examDate: state.profile.examDate || '',",
    "      examDate: state.profile.examDate || '',\n      plan: state.profile.plan || 'free',\n      planRef: state.profile.planRef || '',\n      planSince: state.profile.planSince || '',")
rep("    examDate: data.examDate || ''",
    "    examDate: data.examDate || '',\n    plan: data.plan || 'free',\n    planRef: data.planRef || '',\n    planSince: data.planSince || ''")
rep("""      settings: {
        research: !!state.settings.research,
        geminiModel: state.settings.geminiModel || 'gemini-2.5-flash',
        geminiApiKey: state.settings.geminiApiKey || ''
      },""",
"""      settings: {
        research: !!state.settings.research,
        geminiModel: state.settings.geminiModel || 'gemini-2.5-flash',
        geminiApiKey: state.settings.geminiApiKey || '',
        paystackKey: state.settings.paystackKey || ''
      },""", 2)
rep("      geminiApiKey: data.settings.geminiApiKey || ''",
    "      geminiApiKey: data.settings.geminiApiKey || '',\n      paystackKey: data.settings.paystackKey || ''")
rep("        geminiApiKey: saved.settings.geminiApiKey || ''",
    "        geminiApiKey: saved.settings.geminiApiKey || '',\n        paystackKey: saved.settings.paystackKey || ''")

# 10) exports + test hooks
rep("  sendChatMessage, askBuddy, clearChat, setResearch, saveGeminiKey, toggleGeminiPanel,",
    "  sendChatMessage, askBuddy, clearChat, setResearch, saveGeminiKey, toggleGeminiPanel,\n  openUpgrade, closeUpgrade, upgradeBackdrop, choosePlan, founderUnlock, whatsappUpgrade, savePaystackKey, shareParentReport,")
rep("  examCountdown, subjectReadiness, gradeBand, predictedScore, targetNumber, examCommandCenter, examDateEstimate,",
    "  examCountdown, subjectReadiness, gradeBand, predictedScore, targetNumber, examCommandCenter, examDateEstimate,\n  proActive, quizGate, buddyGate, activatePlan, buildParentReport, FREE_DAILY_QUIZZES, FREE_DAILY_BUDDY,")

open(P, 'w', encoding='utf-8').write(s)
print('smart5 applied OK')
