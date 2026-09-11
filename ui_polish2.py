# ui_polish2.py — profile jargon cleanup, dedicated Badges page, flashcard juice. RUN ONCE.
path = 'index.html'
s = open(path, encoding='utf-8').read()

def rep(old, new, label):
    global s
    n = s.count(old)
    assert n == 1, (label, n)
    s = s.replace(old, new)
    print('ok:', label)

# ---------- profile: jargon rows ----------
rep('''    ['User ID (uid)', state.uid || '—'],
    ['Data location', state.mode === 'demo' ? 'Browser localStorage (demo mode)' : 'Your private cloud account']
  ];''',
    '''    ['Freezes banked', '❄️ ' + state.streakFreezes]
  ];''',
    'profile rows: uid/cloud jargon removed')

rep("${pageHeader('Profile & Sync Settings', 'Everything below is stored in your <code class=\"rounded bg-slate-100 px-1 py-0.5 font-mono text-[11px]\">users/{uid}</code> document.')}",
    "${pageHeader('My Profile', 'Your study home — progress, stats and trophies.')}",
    'profile header de-jargoned')

# ---------- profile: badges grid -> button to the Badges page ----------
rep('''          <div class="mt-3 grid grid-cols-2 gap-2">
            ${BADGES.filter(b => !b.secret || state.badges.includes(b.id)).map(b => {
              const got = state.badges.includes(b.id);
              return `
              <div class="rounded-xl border p-3 text-left transition ${got ? 'border-indigo-200 bg-indigo-50/60' : 'border-slate-100 bg-slate-50 opacity-60'}">
                <div class="text-xl ${got ? '' : 'grayscale'}">${b.icon}</div>
                <div class="mt-1 text-[11px] font-black ${got ? 'text-indigo-700' : 'text-slate-600'}">${b.name}</div>
                <div class="text-[10px] leading-snug text-slate-500">${b.desc}</div>
                ${got ? '<div class="mt-1 text-[9px] font-black uppercase tracking-wide text-emerald-600">✓ Earned</div>' : ''}
              </div>`;
            }).join('')}
          </div>
          <p class="mt-3 rounded-xl bg-slate-900 px-3 py-2 text-[11px] font-semibold leading-relaxed text-slate-300">🔒 <b>Secret badges</b> are hidden somewhere in StudyOS. Nobody will tell you how to find them — keep studying, stay curious, and they will find <i>you</i>.</p>''',
    '''          <button type="button" onclick="navigate('badges')" class="mt-3 w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-700">🏅 Open my badge collection →</button>''',
    'profile badges -> collection button')

# ---------- profile: sync status -> saved progress ----------
rep('''          <h3 class="mb-3 text-sm font-bold text-slate-900">☁️ Sync status</h3>
          <p class="text-xs leading-relaxed text-slate-500">
            ${state.mode === 'demo'
              ? 'You are in <b>demo mode</b>: data is saved in this browser only. Connect cloud sync to follow you across devices.'
              : 'Your preferences, streak and quiz results sync to the cloud on every change, so they follow you to any device.'}
          </p>''',
    '''          <h3 class="mb-3 text-sm font-bold text-slate-900">💾 Saved progress</h3>
          <p class="text-xs leading-relaxed text-slate-500">
            ${state.mode === 'demo'
              ? 'You are in <b>demo mode</b>: progress is saved in this browser only.'
              : 'Everything you do is saved automatically, so you can pick up right where you left off on any device.'}
          </p>''',
    'sync section de-jargoned')

# ---------- dedicated Badges page ----------
RENDER_BADGES = '''/* ==================================================================
   PAGE: BADGE COLLECTION
   ================================================================== */
function renderBadges(el) {
  const earned = state.badges;
  const secretsLeft = BADGES.filter(b => b.secret && !earned.includes(b.id)).length;
  el.innerHTML = `
    ${pageHeader('Badge Collection', 'Every trophy you have earned — plus the secrets still waiting for you.')}
    <div class="grid grid-cols-3 gap-3">
      <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-card">
        <div class="text-2xl font-black text-indigo-600">${earned.length}<span class="text-sm font-bold text-slate-400">/${BADGES.length}</span></div>
        <div class="text-[10px] font-bold text-slate-500">badges found</div>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-card">
        <div class="text-2xl font-black text-sky-600">❄️ ${state.streakFreezes}</div>
        <div class="text-[10px] font-bold text-slate-500">freezes banked</div>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-card">
        <div class="text-2xl font-black text-amber-600">🔒 ${secretsLeft}</div>
        <div class="text-[10px] font-bold text-slate-500">secrets still hidden</div>
      </div>
    </div>
    <p class="mt-4 rounded-2xl bg-slate-900 px-4 py-3 text-[11px] font-semibold leading-relaxed text-slate-300">🏅 Every <b>secret badge</b> you discover banks a ❄️ streak freeze automatically. Nobody will tell you how to find them — keep studying, stay curious, and they will find <i>you</i>.</p>
    <div class="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
      ${BADGES.map(b => {
        const got = earned.includes(b.id);
        if (!got && b.secret) return `
          <div class="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-4 text-center">
            <div class="text-3xl opacity-40 grayscale">🔒</div>
            <div class="mt-1 text-[12px] font-black tracking-widest text-slate-400">? ? ?</div>
            <div class="mt-0.5 text-[10px] leading-snug text-slate-400">A secret badge. Keep exploring…</div>
          </div>`;
        return `
          <div class="rounded-2xl border p-4 text-center shadow-card ${got ? 'border-indigo-200 bg-indigo-50/70' : 'border-slate-200 bg-white opacity-70'}">
            <div class="text-3xl ${got ? '' : 'grayscale'}">${b.icon}</div>
            <div class="mt-1 text-[12px] font-black ${got ? 'text-indigo-700' : 'text-slate-600'}">${b.name}</div>
            <div class="mt-0.5 text-[10px] leading-snug text-slate-500">${got ? (b.reveal || b.desc) : b.desc}</div>
            ${got ? `<div class="mt-1.5 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-black uppercase tracking-wide text-emerald-700">✓ Earned${b.secret ? ' · ❄️ freeze' : ''}</div>` : ''}
          </div>`;
      }).join('')}
    </div>`;
}

/* ==================================================================
   NAVIGATION & SHELL
   ================================================================== */'''

anchor = '''/* ==================================================================
   NAVIGATION & SHELL
   ================================================================== */'''
assert s.count(anchor) == 1
s = s.replace(anchor, RENDER_BADGES)
print('ok: renderBadges page added')

# ---------- flashcard got-it juice ----------
rep('''function markGot() {
  state.flash.got++;
  state.tasks.cards++;
  const card = $('#flashcard');
  if (card) card.classList.add('flash-fly');
  confettiBurst();
  setTimeout(advanceFlash, 430);
}''',
    '''function markGot() {
  state.flash.got++;
  state.tasks.cards++;
  const card = $('#flashcard');
  if (card) card.classList.add('flash-got');
  confettiBurst();
  setTimeout(advanceFlash, 620);
}''',
    'markGot green shake + longer beat')

rep('''  const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#0ea5e9', '#ec4899'];
  for (let i = 0; i < 16; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti-bit';
    bit.style.left = (6 + Math.random() * 88) + '%';
    bit.style.background = colors[i % colors.length];
    bit.style.animationDelay = (Math.random() * 0.25) + 's';
    layer.appendChild(bit);
    setTimeout(() => bit.remove(), 1400);
  }''',
    '''  const colors = ['#22c55e', '#4ade80', '#facc15', '#f472b6', '#38bdf8', '#a78bfa', '#fb923c', '#f87171'];
  for (let i = 0; i < 34; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti-bit';
    bit.style.left = (4 + Math.random() * 92) + '%';
    bit.style.background = colors[i % colors.length];
    bit.style.width = (9 + Math.random() * 6) + 'px';
    bit.style.height = (13 + Math.random() * 8) + 'px';
    bit.style.animationDelay = (Math.random() * 0.3) + 's';
    bit.style.animationDuration = (1.0 + Math.random() * 0.8) + 's';
    layer.appendChild(bit);
    setTimeout(() => bit.remove(), 2100);
  }''',
    'flashcard confetti bigger and brighter')

rep('''  const colors = ['#f97316', '#6366f1', '#10b981', '#f59e0b', '#ec4899', '#38bdf8'];
  for (let i = 0; i < 26; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti-bit';
    bit.style.left = (4 + Math.random() * 92) + '%';
    bit.style.background = colors[i % colors.length];
    bit.style.animationDelay = (Math.random() * 0.35) + 's';
    bit.style.animationDuration = (0.8 + Math.random() * 0.7) + 's';
    layer.appendChild(bit);
  }''',
    '''  const colors = ['#f97316', '#6366f1', '#10b981', '#f59e0b', '#ec4899', '#38bdf8', '#facc15', '#4ade80'];
  for (let i = 0; i < 44; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti-bit';
    bit.style.left = (3 + Math.random() * 94) + '%';
    bit.style.background = colors[i % colors.length];
    bit.style.width = (9 + Math.random() * 6) + 'px';
    bit.style.height = (13 + Math.random() * 8) + 'px';
    bit.style.animationDelay = (Math.random() * 0.35) + 's';
    bit.style.animationDuration = (0.9 + Math.random() * 0.8) + 's';
    layer.appendChild(bit);
  }''',
    'celebration confetti boosted')

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
