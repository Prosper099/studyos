#!/usr/bin/env python3
"""smart6: growth phase — hide monetization behind a flag; everything unlocked for all users."""
P = '/home/user/index.html'
s = open(P, encoding='utf-8').read()

def rep(old, new, n=1):
    global s
    c = s.count(old)
    assert c == n, f'anchor found {c}x (want {n}): {old[:70]!r}'
    s = s.replace(old, new)

# 1) the switch
rep("const PRO_MONTHLY_NGN = 2000, PRO_PACK_NGN = 5000;",
"""const PRO_MONTHLY_NGN = 2000, PRO_PACK_NGN = 5000;
let monetizationOn = false; // GROWTH PHASE: every feature is free for everyone. Flip to true when paid plans launch.
function setMonetization(on) { monetizationOn = !!on; renderPage(); }""")

# 2) proActive respects the switch
rep("function proActive() { return state.profile.plan === 'pro' || state.profile.plan === 'pack'; }",
    "function proActive() { return !monetizationOn || state.profile.plan === 'pro' || state.profile.plan === 'pack'; }")

# 3) profile family section: parent report always; plan widgets only when monetization is on
rep("""            ${proActive() ? `<span class="rounded-full bg-amber-50 px-3 py-1.5 text-[11px] font-black text-amber-700">⭐ ${state.profile.plan === 'pack' ? 'JAMB Premium Pack active' : 'Pro active'}</span>` : `<button type="button" onclick="openUpgrade('plan')" class="rounded-xl bg-slate-900 px-4 py-2 text-[11px] font-black text-white transition hover:bg-slate-800">⭐ Upgrade to Pro — ₦${PRO_MONTHLY_NGN.toLocaleString()}/mo</button>`}
          </div>
          ${proActive() ? '' : `<p class="mt-2 text-[10px] text-slate-400">Free today: ${Math.max(0, FREE_DAILY_QUIZZES - dailyQuizzesUsed())} quiz${FREE_DAILY_QUIZZES - dailyQuizzesUsed() === 1 ? '' : 'zes'} left · ${Math.max(0, FREE_DAILY_BUDDY - dailyBuddyUsed())} Buddy questions left.</p>`}""",
"""            ${monetizationOn ? (proActive() ? `<span class="rounded-full bg-amber-50 px-3 py-1.5 text-[11px] font-black text-amber-700">⭐ ${state.profile.plan === 'pack' ? 'JAMB Premium Pack active' : 'Pro active'}</span>` : `<button type="button" onclick="openUpgrade('plan')" class="rounded-xl bg-slate-900 px-4 py-2 text-[11px] font-black text-white transition hover:bg-slate-800">⭐ Upgrade to Pro — ₦${PRO_MONTHLY_NGN.toLocaleString()}/mo</button>`) : ''}
          </div>
          ${monetizationOn && !proActive() ? `<p class="mt-2 text-[10px] text-slate-400">Free today: ${Math.max(0, FREE_DAILY_QUIZZES - dailyQuizzesUsed())} quiz${FREE_DAILY_QUIZZES - dailyQuizzesUsed() === 1 ? '' : 'zes'} left · ${Math.max(0, FREE_DAILY_BUDDY - dailyBuddyUsed())} Buddy questions left.</p>` : ''}""")

# 4) hide the Paystack owner field while monetization is off
rep("""          <div class="mt-3 border-t border-slate-100 pt-3">
            <label class="block text-[11px] font-bold text-slate-700" for="paystack-key">Owner only: Paystack public key (turns on Pro card payments)</label>
            <div class="mt-1 flex gap-2">
              <input type="password" id="paystack-key" value="${escapeHtml(state.settings.paystackKey || '')}" placeholder="pk_live_…"
                class="flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
              <button type="button" onclick="savePaystackKey(document.getElementById('paystack-key').value)" class="rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-slate-700">Save</button>
            </div>
          </div>""",
"""          ${monetizationOn ? `
          <div class="mt-3 border-t border-slate-100 pt-3">
            <label class="block text-[11px] font-bold text-slate-700" for="paystack-key">Owner only: Paystack public key (turns on Pro card payments)</label>
            <div class="mt-1 flex gap-2">
              <input type="password" id="paystack-key" value="${escapeHtml(state.settings.paystackKey || '')}" placeholder="pk_live_…"
                class="flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
              <button type="button" onclick="savePaystackKey(document.getElementById('paystack-key').value)" class="rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-slate-700">Save</button>
            </div>
          </div>` : ''}""")

# 5) test hook
rep("  proActive, quizGate, buddyGate, activatePlan, buildParentReport, FREE_DAILY_QUIZZES, FREE_DAILY_BUDDY, closeUpgrade,",
    "  proActive, quizGate, buddyGate, activatePlan, buildParentReport, FREE_DAILY_QUIZZES, FREE_DAILY_BUDDY, closeUpgrade, setMonetization,")

open(P, 'w', encoding='utf-8').write(s)
print('smart6 applied OK')
