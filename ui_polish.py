# ui_polish.py — clock icon for focus timer, 50 new secret badges (+freeze rewards),
# dedicated Badges page, impact badge-unlock animation, juicier flashcard celebration,
# jargon sweep. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

def rep(old, new, label):
    global s
    n = s.count(old)
    assert n == 1, (label, n)
    s = s.replace(old, new)
    print('ok:', label)

# ---------- 1. jargon sweep: login bullets + footer ----------
rep('''      <ul class="mt-5 space-y-1.5 text-[11px] text-slate-500">
        <li class="flex gap-2"><span class="text-indigo-500">✓</span> Nothing is stored on our side — your data stays in your own private cloud account.</li>
        <li class="flex gap-2"><span class="text-indigo-500">✓</span> You can delete your account any time from the Google dashboard.</li>
      </ul>''', '', 'login jargon bullets removed')

rep('StudyOS · Google Sign-In + Secure Cloud Sync', 'StudyOS · Your study companion', 'login footer simplified')

# ---------- 2. focus timer icon -> clock ----------
CLOCK_L = '<svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2"/></svg>'
CLOCK_S = '<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2"/></svg>'
CLOCK_M = '<svg class="h-5 w-5 text-violet-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2"/></svg>'

rep('<div class="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-4xl">🎯</div>',
    '<div class="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-violet-600">' + CLOCK_L + '</div>',
    'focus modal icon -> clock')

rep('shadow-card">\n          🎯 <span id="focus-pill-time">25:00</span>',
    'shadow-card">\n          ' + CLOCK_S + ' <span id="focus-pill-time">25:00</span>',
    'focus pill icon -> clock')

rep('ring-violet-100 transition hover:bg-violet-100">🎯</button>',
    'ring-violet-100 transition hover:bg-violet-100">' + CLOCK_M + '</button>',
    'focus header button icon -> clock')

rep("icon.textContent = '🎯'; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-violet-50 text-6xl ring-pulse';",
    "icon.textContent = '⏰'; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-violet-50 text-6xl ring-pulse';",
    'focus celebration icon -> clock')

# ---------- 3. sidebar: Badges nav item ----------
rep('''        <button type="button" onclick="navigate('profile')" data-page="profile"''',
    '''        <button type="button" onclick="navigate('badges')" data-page="badges"
          class="nav-item flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-colors hover:bg-slate-800 hover:text-white">
          <span>🏅</span><span>Badges</span></button>
        <button type="button" onclick="navigate('profile')" data-page="profile"''',
    'sidebar badges item')

# ---------- 4. page titles + router ----------
rep("  profile: ['Profile & Sync', 'Your details and cloud sync']\n};",
    "  profile: ['My Profile', 'Your progress and achievements'],\n  badges: ['Badges', 'Your trophy collection']\n};",
    'PAGE_TITLES badges + profile rename')

rep("    case 'profile': renderProfile(main); break;",
    "    case 'profile': renderProfile(main); break;\n    case 'badges': renderBadges(main); break;",
    'renderPage badges route')

# ---------- 5. CSS: rays + badge pop + flashcard green shake ----------
rep('  .ring-pulse { animation: ringPulse 1.1s ease-out 2; border-radius: 9999px; }',
    '''  .ring-pulse { animation: ringPulse 1.1s ease-out 2; border-radius: 9999px; }
  #celebration-icon { position: relative; isolation: isolate; }
  #celebration-icon.badge-glow { animation: badgeGlowPop .8s cubic-bezier(.2, 1.6, .4, 1) both; }
  #celebration-icon.badge-glow::before { content: ''; position: absolute; inset: -20px; z-index: -1; border-radius: 9999px; background: repeating-conic-gradient(rgba(251, 191, 36, .5) 0deg 13deg, rgba(251, 191, 36, 0) 13deg 26deg); animation: raysSpin 8s linear infinite; }
  @keyframes raysSpin { to { transform: rotate(360deg); } }
  @keyframes badgeGlowPop { 0% { transform: scale(0) rotate(-180deg); } 60% { transform: scale(1.3) rotate(10deg); } 100% { transform: scale(1) rotate(0deg); } }
  @keyframes flashGot { 0%, 100% { transform: translateX(0); } 10% { transform: translateX(-14px); } 25% { transform: translateX(14px); filter: drop-shadow(0 0 22px rgba(16, 185, 129, 1)); } 40% { transform: translateX(-11px); } 55% { transform: translateX(11px); filter: drop-shadow(0 0 22px rgba(16, 185, 129, 1)); } 70% { transform: translateX(-7px); } 85% { transform: translateX(7px); filter: drop-shadow(0 0 16px rgba(16, 185, 129, .9)); } }
  .flash-got { animation: flashGot .62s ease; }''',
    'celebration rays + flashcard green shake CSS')

# ---------- 6. freezes: cap up + secret badges bank freezes ----------
rep('const MAX_FREEZES = 2;         // bank at most 2',
    'const MAX_FREEZES = 10;        // bank at most 10',
    'MAX_FREEZES 10')

rep('bank a ❄️ streak freeze — up to two at once.',
    'bank a ❄️ streak freeze — up to ten at once.',
    'freeze copy update')

rep('''    if (!state.badges.includes(b.id) && b.test(state)) {
      state.badges.push(b.id);
      queueCelebration({ type: 'badge', badge: b });
    }''',
    '''    if (!state.badges.includes(b.id) && b.test(state)) {
      state.badges.push(b.id);
      if (b.secret && state.streakFreezes < MAX_FREEZES) state.streakFreezes++;
      queueCelebration({ type: 'badge', badge: b });
    }''',
    'secret badge banks a freeze')

# ---------- 7. badge celebration: impactful ----------
rep('''  } else if (c.type === 'badge') {
    icon.textContent = c.badge.icon; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50 text-6xl ring-pulse';
    kick.textContent = 'Badge unlocked';
    kick.className = 'text-[11px] font-black uppercase tracking-widest text-indigo-500';
    title.textContent = c.badge.name;
    sub.textContent = c.badge.desc;
  }''',
    '''  } else if (c.type === 'badge') {
    const sec = !!c.badge.secret;
    icon.textContent = c.badge.icon; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full ' + (sec ? 'bg-amber-100' : 'bg-indigo-50') + ' text-6xl badge-glow';
    kick.textContent = sec ? 'Secret badge unlocked!' : 'Badge unlocked';
    kick.className = 'text-[11px] font-black uppercase tracking-widest ' + (sec ? 'text-amber-500' : 'text-indigo-500');
    title.textContent = c.badge.name;
    sub.textContent = (c.badge.reveal || c.badge.desc) + (sec ? ' ❄️ +1 streak freeze banked!' : '');
  }''',
    'badge celebration impactful')

# ---------- 8. reveal text on the 9 existing secret badges ----------
REVEALS = [
    ('two-weeks', 'Keep a 14-day study streak.'),
    ('sharpshooter', 'Score 100% on five quizzes.'),
    ('half-century', 'Complete 50 quizzes.'),
    ('centurion', 'Complete 100 quizzes.'),
    ('card-legend', 'Review 500 flashcards.'),
    ('all-rounder', 'Take quizzes in three different subjects.'),
    ('weekend-warrior', 'Study on a Saturday or Sunday.'),
    ('buddy-friend', 'Chat with Buddy 10 times.'),
    ('focus-15', 'Complete 15 focus sessions.'),
]
for bid, rev in REVEALS:
    old_n = s
    s2 = re.sub(r"(\{ id: '" + bid + r"',[^\n]*?),\s*secret: true",
                lambda m: m.group(1) + ", reveal: '" + rev + "', secret: true", s, count=1)
    assert s2 != old_n, ('reveal insert failed', bid)
    s = s2
print('ok: 9 existing secrets got reveal text')

# ---------- 9. 50 NEW secret badges ----------
NEW50 = [
    ("streak-5", "🌿", "Green Flame", "Keep a 5-day study streak.", "(s.streak || 0) >= 5"),
    ("streak-10", "💎", "Diamond Days", "Keep a 10-day study streak.", "(s.streak || 0) >= 10"),
    ("streak-21", "🧠", "Habit Hero", "Keep a 21-day streak — a habit is born.", "(s.streak || 0) >= 21"),
    ("streak-45", "🛡️", "Shield of Consistency", "Keep a 45-day study streak.", "(s.streak || 0) >= 45"),
    ("streak-60", "🌋", "Magma Mind", "Keep a 60-day study streak.", "(s.streak || 0) >= 60"),
    ("streak-90", "🏔️", "Summit Soul", "Keep a 90-day study streak.", "(s.streak || 0) >= 90"),
    ("streak-180", "🌠", "Half-Year Hero", "Keep a 180-day study streak.", "(s.streak || 0) >= 180"),
    ("streak-250", "🐉", "Dragon Discipline", "Keep a 250-day study streak.", "(s.streak || 0) >= 250"),
    ("quiz-20", "📚", "Bookworm", "Complete 20 quizzes.", "(s.tasks.quizzes || 0) >= 20"),
    ("quiz-30", "🧗", "Quiz Climber", "Complete 30 quizzes.", "(s.tasks.quizzes || 0) >= 30"),
    ("quiz-40", "🎢", "Momentum", "Complete 40 quizzes.", "(s.tasks.quizzes || 0) >= 40"),
    ("quiz-75", "🏹", "Steady Aim", "Complete 75 quizzes.", "(s.tasks.quizzes || 0) >= 75"),
    ("quiz-150", "🌟", "Star Pupil", "Complete 150 quizzes.", "(s.tasks.quizzes || 0) >= 150"),
    ("quiz-200", "🦁", "Lion Learner", "Complete 200 quizzes.", "(s.tasks.quizzes || 0) >= 200"),
    ("quiz-300", "🐘", "Giant Memory", "Complete 300 quizzes.", "(s.tasks.quizzes || 0) >= 300"),
    ("perfect-3", "🥇", "Gold Standard", "Score 100% on three quizzes.", "(s.tasks.perfects || 0) >= 3"),
    ("perfect-10", "💠", "Flawless Ten", "Score 100% on ten quizzes.", "(s.tasks.perfects || 0) >= 10"),
    ("perfect-20", "🎆", "Firework Mind", "Score 100% on twenty quizzes.", "(s.tasks.perfects || 0) >= 20"),
    ("perfect-35", "🏆", "Trophy Case", "Score 100% on thirty-five quizzes.", "(s.tasks.perfects || 0) >= 35"),
    ("card-200", "🌊", "Wave Rider", "Review 200 flashcards.", "(s.tasks.cards || 0) >= 200"),
    ("card-300", "🐬", "Dolphin Mind", "Review 300 flashcards.", "(s.tasks.cards || 0) >= 300"),
    ("card-750", "🦑", "Ink Scholar", "Review 750 flashcards.", "(s.tasks.cards || 0) >= 750"),
    ("card-1000", "🐋", "Whale Memory", "Review 1,000 flashcards.", "(s.tasks.cards || 0) >= 1000"),
    ("card-1500", "🌪️", "Card Cyclone", "Review 1,500 flashcards.", "(s.tasks.cards || 0) >= 1500"),
    ("session-20", "🪴", "Steady Grower", "Finish 20 flashcard sessions.", "(s.tasks.sessions || 0) >= 20"),
    ("session-30", "🎠", "Deck Dynamo", "Finish 30 flashcard sessions.", "(s.tasks.sessions || 0) >= 30"),
    ("session-50", "🎰", "Half-Hundred Decks", "Finish 50 flashcard sessions.", "(s.tasks.sessions || 0) >= 50"),
    ("focus-10", "🧭", "True North", "Complete 10 focus sessions.", "(s.tasks.focusSessions || 0) >= 10"),
    ("focus-25", "🪜", "Quarter Climb", "Complete 25 focus sessions.", "(s.tasks.focusSessions || 0) >= 25"),
    ("focus-50", "🕹️", "Focus Titan", "Complete 50 focus sessions.", "(s.tasks.focusSessions || 0) >= 50"),
    ("focusmin-120", "🎧", "Deep Listener", "Bank 120 focused minutes.", "(s.tasks.focusMinutes || 0) >= 120"),
    ("focusmin-300", "🌤️", "Five-Hour Flame", "Bank 300 focused minutes.", "(s.tasks.focusMinutes || 0) >= 300"),
    ("focusmin-600", "🔋", "Fully Charged", "Bank 600 focused minutes.", "(s.tasks.focusMinutes || 0) >= 600"),
    ("past-3", "🗞️", "Paper Tiger", "Finish 3 past-question drills.", "(s.tasks.pastDrills || 0) >= 3"),
    ("past-5", "🖋️", "Ink Master", "Finish 5 past-question drills.", "(s.tasks.pastDrills || 0) >= 5"),
    ("past-10", "📰", "Press Baron", "Finish 10 past-question drills.", "(s.tasks.pastDrills || 0) >= 10"),
    ("past-20", "🏛️", "The Examiner", "Finish 20 past-question drills.", "(s.tasks.pastDrills || 0) >= 20"),
    ("timed-3", "⏱️", "Clockwork", "100% on three timed 15+ quizzes.", "(s.tasks.timedAces || 0) >= 3"),
    ("timed-5", "⌛", "Hourglass Hero", "100% on five timed 15+ quizzes.", "(s.tasks.timedAces || 0) >= 5"),
    ("timed-10", "🥁", "Drumroll Ace", "100% on ten timed 15+ quizzes.", "(s.tasks.timedAces || 0) >= 10"),
    ("buddy-25", "💬", "Chatterbox", "Chat with Buddy 25 times.", "(s.tasks.buddyChats || 0) >= 25"),
    ("buddy-50", "🦜", "Parley Parrot", "Chat with Buddy 50 times.", "(s.tasks.buddyChats || 0) >= 50"),
    ("buddy-100", "🧞", "Genie Friend", "Chat with Buddy 100 times.", "(s.tasks.buddyChats || 0) >= 100"),
    ("tasks-100", "💪", "Hundred Club", "Complete 100 tasks of any kind.", "(s.tasks.tasksTotal || 0) >= 100"),
    ("tasks-250", "🦾", "Iron Student", "Complete 250 tasks of any kind.", "(s.tasks.tasksTotal || 0) >= 250"),
    ("subj-5", "🖐️", "High-Five Scholar", "Take quizzes in five different subjects.", "Object.keys(s.quizStats && s.quizStats.bySubject || {}).length >= 5"),
    ("subj-7", "🌈", "Rainbow Scholar", "Take quizzes in all seven subjects.", "Object.keys(s.quizStats && s.quizStats.bySubject || {}).length >= 7"),
    ("shift-worker", "🌗", "Night & Day", "Study both before 6 am and after 9 pm.", "!!s.tasks.nightOwl && !!s.tasks.earlyBird"),
    ("ice-vault", "❄️", "Ice Vault", "Bank two streak freezes at once.", "(s.streakFreezes || 0) >= 2"),
    ("collector", "🧿", "Badge Magnet", "Discover 15 badges in total.", "(s.badges || []).length >= 15"),
]
assert len(NEW50) == 50, len(NEW50)
ids = [b[0] for b in NEW50]
assert len(set(ids)) == 50
for i in ids:
    assert ("id: '" + i + "'") not in s, ('dup id', i)

lines = []
for bid, icon, name, reveal, test in NEW50:
    lines.append("  { id: '" + bid + "', icon: '" + icon + "', name: '" + name + "', reveal: '" + reveal + "', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => " + test + " }")
new_block = ",\n".join(lines)

anchor = "secret: true, test: s => (s.tasks.focusSessions || 0) >= 15 }\n];"
assert s.count(anchor) == 1
s = s.replace(anchor, "secret: true, test: s => (s.tasks.focusSessions || 0) >= 15 },\n" + new_block + "\n];")
open(path, 'w', encoding='utf-8').write(s)
print('ok: 50 new secret badges inserted')
