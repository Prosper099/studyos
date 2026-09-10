"""Streak flame animation + secret badges + EduPodia shelf swap."""
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()
n = 0

def rep(old, new, cnt=1):
    global s, n
    assert s.count(old) >= 1, 'ANCHOR MISSING: ' + old[:80]
    s = s.replace(old, new, cnt)
    n += 1

# ---------- 1. CSS: flame rise / flicker / glow ----------
rep("""  .celeb-pop { animation: celebPop .55s cubic-bezier(.2, 1.4, .4, 1) both; }""",
"""  @keyframes flameRise {
    0%   { transform: translateY(70px) scale(.55); opacity: 0; }
    14%  { transform: translateY(0) scale(1); opacity: 1; }
    42%  { transform: translateY(-14px) scale(1.06); opacity: 1; }
    72%  { transform: translateY(-52px) scale(1.02); opacity: .8; }
    100% { transform: translateY(-140px) scale(.88); opacity: 0; }
  }
  @keyframes flameFlicker {
    0%, 100% { transform: rotate(-3deg) scaleY(1); }
    25% { transform: rotate(2deg) scaleY(1.07); }
    50% { transform: rotate(-2deg) scaleY(.95); }
    75% { transform: rotate(3deg) scaleY(1.05); }
  }
  @keyframes flameGlow {
    0%, 100% { filter: drop-shadow(0 0 18px rgba(249, 115, 22, .55)); }
    50% { filter: drop-shadow(0 0 38px rgba(251, 146, 60, .85)); }
  }
  .streak-flame-anim { animation: flameRise 3.6s ease-in-out both; }
  .flame-flicker { animation: flameFlicker .7s ease-in-out infinite, flameGlow 1.4s ease-in-out infinite; display: inline-block; transform-origin: 50% 90%; }
  .celeb-pop { animation: celebPop .55s cubic-bezier(.2, 1.4, .4, 1) both; }""")

# ---------- 2. overlay HTML (non-blocking, no card) ----------
rep("""<div id="celebration" onclick="dismissCelebration()" class="fixed inset-0 z-[70] hidden cursor-pointer items-center justify-center bg-slate-900/75 p-4">""",
"""<div id="streak-flame" class="pointer-events-none fixed inset-0 z-[70] hidden items-center justify-center p-4">
  <div id="streak-flame-inner" class="flex flex-col items-center">
    <div id="streak-flame-icon" class="text-[7rem] leading-none">🔥</div>
    <div id="streak-flame-title" class="mt-3 rounded-full bg-slate-900/85 px-4 py-1.5 text-sm font-black text-white shadow-pop">Day 1 streak!</div>
    <div id="streak-flame-sub" class="mt-2 max-w-[17rem] text-center text-[11px] font-semibold text-slate-900/80 drop-shadow-sm">Keep the flame alive!</div>
  </div>
</div>

<div id="celebration" onclick="dismissCelebration()" class="fixed inset-0 z-[70] hidden cursor-pointer items-center justify-center bg-slate-900/75 p-4">""")

# ---------- 3. JS: streak branch -> flame; others keep the card ----------
rep("""  if (c.type === 'streak' || c.type === 'start') {
    icon.textContent = '🔥'; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-orange-50 text-6xl ring-pulse';
    kick.textContent = c.type === 'start' ? 'Your journey begins' : 'Streak extended';
    kick.className = 'text-[11px] font-black uppercase tracking-widest text-orange-500';
    title.textContent = `Day ${state.streak} streak!`;
    sub.textContent = c.type === 'start'
      ? 'Day 1 in the books. Come back tomorrow and the flame grows!'
      : 'You showed up today — consistency is a superpower. Keep the flame alive!';
    icon.classList.add('flame-anim');
  } else if (c.type === 'saved') {""",
"""  if (c.type === 'streak' || c.type === 'start') {
    showStreakFlame(c.type);
    return;
  } else if (c.type === 'saved') {""")

rep("""function dismissCelebration() {""",
"""/* Streak moments get their own treat: a friendly flame that rises and fades — no card, no blocking. */
let flameTimer = null;
function showStreakFlame(type) {
  const wrap = $('#streak-flame'), inner = $('#streak-flame-inner'),
        icon = $('#streak-flame-icon'), title = $('#streak-flame-title'), sub = $('#streak-flame-sub');
  title.textContent = type === 'start' ? 'Day 1 — your journey begins!' : `Day ${state.streak} streak!`;
  sub.textContent = type === 'start'
    ? 'Come back tomorrow and watch the flame grow.'
    : 'You showed up today — consistency is a superpower.';
  inner.classList.remove('streak-flame-anim');
  void inner.offsetWidth;
  inner.classList.add('streak-flame-anim');
  icon.classList.add('flame-flicker');
  wrap.classList.remove('hidden'); wrap.classList.add('flex');
  clearTimeout(flameTimer);
  flameTimer = setTimeout(() => {
    wrap.classList.add('hidden'); wrap.classList.remove('flex');
    celebBusy = false;
    nextCelebration();
  }, 3800);
}

function dismissCelebration() {""")

# ---------- 4. secret badges ----------
rep("""  { id: 'streak-365',   icon: '👑', name: 'Year Legend',     desc: '365-day streak — an entire year. Unreal.',    test: s => (s.streak || 0) >= 365 }
];""",
"""  { id: 'streak-365',   icon: '👑', name: 'Year Legend',     desc: '365-day streak — an entire year. Unreal.',    test: s => (s.streak || 0) >= 365 },
  { id: 'two-weeks',    icon: '⚡', name: 'Fortnight Force', desc: 'A secret badge. Keep your streak alive to discover it.', secret: true, test: s => (s.streak || 0) >= 14 },
  { id: 'sharpshooter', icon: '🎖️', name: 'Sharpshooter',   desc: 'A secret badge. Aim for perfection to discover it.',     secret: true, test: s => (s.tasks.perfects || 0) >= 5 },
  { id: 'half-century', icon: '🚀', name: 'Half Century',   desc: 'A secret badge. Keep taking quizzes to discover it.',    secret: true, test: s => (s.tasks.quizzes || 0) >= 50 },
  { id: 'centurion',    icon: '🏛️', name: 'Centurion',      desc: 'A secret badge. Only the most dedicated find this one.', secret: true, test: s => (s.tasks.quizzes || 0) >= 100 },
  { id: 'card-legend',  icon: '🎇', name: 'Card Legend',    desc: 'A secret badge. The flashcards hold its secret.',        secret: true, test: s => (s.tasks.cards || 0) >= 500 },
  { id: 'all-rounder',  icon: '🌍', name: 'All-Rounder',    desc: 'A secret badge. Variety is the clue.',                   secret: true, test: s => Object.keys(s.quizStats && s.quizStats.bySubject || {}).length >= 3 },
  { id: 'weekend-warrior', icon: '📅', name: 'Weekend Warrior', desc: 'A secret badge. Some heroes study when others rest.', secret: true, test: s => !!s.tasks.weekendStudy },
  { id: 'buddy-friend', icon: '🤖', name: 'Study Buddy',    desc: 'A secret badge. Somebody in the app knows the way.',     secret: true, test: s => (s.tasks.buddyChats || 0) >= 10 },
  { id: 'focus-15',     icon: '🕰️', name: 'Marathon Mind',  desc: 'A secret badge. Deep work unlocks it.',                  secret: true, test: s => (s.tasks.focusSessions || 0) >= 15 }
];""")

# ---------- 5. counters: weekend study + buddy chats ----------
rep("""  const hr = new Date().getHours();
  if (hr >= 21 || hr < 4) t.nightOwl = true;
  if (hr >= 4 && hr < 6) t.earlyBird = true;
  t.tasksTotal++;""",
"""  const hr = new Date().getHours();
  if (hr >= 21 || hr < 4) t.nightOwl = true;
  if (hr >= 4 && hr < 6) t.earlyBird = true;
  const day = new Date().getDay();
  if (day === 0 || day === 6) t.weekendStudy = true;
  t.tasksTotal++;""")

rep("""function sendChatMessage(ev) {
  if (ev) ev.preventDefault();
  const input = $('#chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;""",
"""function sendChatMessage(ev) {
  if (ev) ev.preventDefault();
  const input = $('#chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  state.tasks.buddyChats = (state.tasks.buddyChats || 0) + 1;
  checkBadges();""")

# ---------- 6. persistence + hydration for the new counters ----------
rep("""    focusSessions: Number(t.focusSessions) || 0, focusMinutes: Number(t.focusMinutes) || 0,
    pastDrills: Number(t.pastDrills) || 0, timedAces: Number(t.timedAces) || 0,
    nightOwl: !!t.nightOwl, earlyBird: !!t.earlyBird
  };""",
"""    focusSessions: Number(t.focusSessions) || 0, focusMinutes: Number(t.focusMinutes) || 0,
    pastDrills: Number(t.pastDrills) || 0, timedAces: Number(t.timedAces) || 0,
    nightOwl: !!t.nightOwl, earlyBird: !!t.earlyBird,
    weekendStudy: !!t.weekendStudy, buddyChats: Number(t.buddyChats) || 0
  };""")

# ---------- 7. profile: hidden badges stay hidden; teaser line ----------
rep("""<div class="rounded-xl bg-indigo-50 p-3"><div class="text-xl font-black text-indigo-600">${state.badges.length}/${BADGES.length}</div><div class="text-[10px] font-bold text-indigo-500">badges earned</div></div>""",
"""<div class="rounded-xl bg-indigo-50 p-3"><div class="text-xl font-black text-indigo-600">${state.badges.length}</div><div class="text-[10px] font-bold text-indigo-500">badges found</div></div>""")
rep("""            ${BADGES.map(b => {
              const got = state.badges.includes(b.id);""",
"""            ${BADGES.filter(b => !b.secret || state.badges.includes(b.id)).map(b => {
              const got = state.badges.includes(b.id);""")
rep("""              </div>`;
            }).join('')}
          </div>
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-3 text-sm font-bold text-slate-900">☁️ Sync status</h3>""",
"""              </div>`;
            }).join('')}
          </div>
          <p class="mt-3 rounded-xl bg-slate-900 px-3 py-2 text-[11px] font-semibold leading-relaxed text-slate-300">🔒 <b>Secret badges</b> are hidden somewhere in StudyOS. Nobody will tell you how to find them — keep studying, stay curious, and they will find <i>you</i>.</p>
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-3 text-sm font-bold text-slate-900">☁️ Sync status</h3>""")

# ---------- 8. EduPodia replaces ClassNotes on the shelf ----------
rep("""    { cat: 'Textbook', title: 'ClassNotes.ng — class notes by level', url: 'https://classnotes.ng/', note: 'Free first-term lessons for every JSS/SS subject (by Afrilearn); full terms via subscription.' }""",
"""    { cat: 'Textbook', title: 'EduPodia — lesson notes & schemes of work', url: 'https://edupodia.com/', note: 'NERDC-aligned JSS1–SS3 lesson notes and schemes of work, term by term (editable Word downloads).' }""")

open(PATH, 'w', encoding='utf-8').write(s)
print(f'Streak flame + secret badges applied: {n} replacements')
