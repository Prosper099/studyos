# Flashcard "Got it" upgrade: right-swipe with clockwise tilt, scale-down, fade-out,
# green success-border flash, confetti visible above the card, new card slides in.
# Plus a live progress counter on Today's Mission.
path = 'index.html'
s = open(path).read()

def rep(old, new, label, count=1):
    global s
    n = s.count(old)
    assert n == count, (label, n)
    s = s.replace(old, new)
    print('ok:', label)

# ---- 1. replace the shake-style flashGot with the real swipe -----------------
rep("""  @keyframes flashGot { 0%, 100% { transform: translateX(0); } 10% { transform: translateX(-14px); } 25% { transform: translateX(14px); filter: drop-shadow(0 0 22px rgba(16, 185, 129, 1)); } 40% { transform: translateX(-11px); } 55% { transform: translateX(11px); filter: drop-shadow(0 0 22px rgba(16, 185, 129, 1)); } 70% { transform: translateX(-7px); } 85% { transform: translateX(7px); filter: drop-shadow(0 0 16px rgba(16, 185, 129, .9)); } }
  .flash-got { animation: flashGot .62s ease; }""",
    """  @keyframes gotSwipe {
    0% { transform: translateX(0) rotate(0deg) scale(1); opacity: 1; }
    14% { transform: translateX(-14px) rotate(-3deg) scale(1.03); opacity: 1; filter: drop-shadow(0 0 24px rgba(16, 185, 129, .95)); }
    100% { transform: translateX(130%) rotate(10deg) scale(.68); opacity: 0; filter: drop-shadow(0 0 8px rgba(16, 185, 129, .4)); }
  }
  @keyframes gotBorder { 0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } 12% { box-shadow: 0 0 0 6px rgba(16, 185, 129, .9), 0 0 34px rgba(16, 185, 129, .5); } 45% { box-shadow: 0 0 0 3px rgba(16, 185, 129, .45), 0 0 18px rgba(16, 185, 129, .25); } 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }
  @keyframes cardIn { 0% { transform: translateX(30px) scale(.96); opacity: 0; } 100% { transform: translateX(0) scale(1); opacity: 1; } }
  .card-in { animation: cardIn .38s cubic-bezier(.2, .9, .3, 1); }
  .flash-got { animation: gotSwipe .58s cubic-bezier(.45, .05, .6, .95) forwards; }
  .flash-got .flashcard-face { animation: gotBorder .58s ease; }""",
    'got-it swipe + border flash + card-in CSS')

# ---- 2. confetti must sit ABOVE the card, not behind it ----------------------
rep("""  .confetti-layer { pointer-events: none; position: absolute; inset: 0; overflow: hidden; }""",
    """  .confetti-layer { pointer-events: none; position: absolute; inset: 0; overflow: hidden; z-index: 40; }""",
    'confetti z-index')

# ---- 3. new card slides in ----------------------------------------------------
rep("""<div id="flashcard" class="flashcard ${state.flash.flipped ? 'flipped' : ''} h-96 w-full cursor-pointer select-none" onclick="flipFlashcard()">""",
    """<div id="flashcard" class="flashcard card-in ${state.flash.flipped ? 'flipped' : ''} h-96 w-full cursor-pointer select-none" onclick="flipFlashcard()">""",
    'card-in on flashcard')

# ---- 4. mission: live progress counter + completion state ---------------------
rep("""  const doneQuiz = d.quizzes > 0;""",
    """  const doneQuiz = d.quizzes > 0;
  const doneCount = [doneRead, doneCards, doneQuiz].filter(Boolean).length;""",
    'mission doneCount')
rep("""    <section class="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
      <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 class="text-sm font-bold text-slate-900">🎯 Today's mission</h3>""",
    """    <section class="mt-5 rounded-2xl border ${doneCount === 3 ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-slate-200'} bg-white p-5 shadow-card animate-fadeUp">
      <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 class="text-sm font-bold text-slate-900">🎯 Today's mission${doneCount === 3
          ? ' <span class="ml-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-700">🏆 COMPLETE 3/3</span>'
          : ` <span class="ml-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black text-slate-400">${doneCount}/3 done</span>`}</h3>""",
    'mission counter chip')

open(path, 'w').write(s)
print('written OK')
