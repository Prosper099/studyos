"""Part 2: rewrite renderFlashcards (got-it / next-time + animations) and renderQuiz (topic list)."""
CUR = '/home/user/index.html'
s = open(CUR).read()


def rep(old, new, n=1):
    global s
    assert s.count(old) == n, "count(%d) != %d for: %s" % (s.count(old), n, old[:80])
    s = s.replace(old, new, n)


# ---------------------------------------------------------- flashcards rewrite
a = s.index("function renderFlashcards(el) {")
b = s.index("/* ==================================================================\n   PAGE: PRACTICE QUIZ")
NEW_FLASH = r"""function currentFlashDeck() {
  const f = state.flash;
  if (f.phase === 'retry') return f.retryDeck;
  return cardsFor(state.selectedSubject, state.profile.classLevel || 'SS3', f.topicFilter);
}

function confettiBurst() {
  const layer = $('#confetti-layer');
  if (!layer) return;
  const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#0ea5e9', '#ec4899'];
  for (let i = 0; i < 16; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti-bit';
    bit.style.left = (6 + Math.random() * 88) + '%';
    bit.style.background = colors[i % colors.length];
    bit.style.animationDelay = (Math.random() * 0.25) + 's';
    layer.appendChild(bit);
    setTimeout(() => bit.remove(), 1400);
  }
}

function renderFlashcards(el) {
  const subject = state.selectedSubject;
  const level = state.profile.classLevel || 'SS3';
  const f = state.flash;
  const c = subjectColor(subject);
  const allCards = cardsFor(subject, level, 'All');
  const topicsWithCards = (CURRICULUM[subject].topics[level] || []).filter(t => (t.cards || []).length);

  if (f.phase === 'done') {
    const total = f.got + f.later.length;
    const pct = total ? Math.round((f.got / total) * 100) : 0;
    el.innerHTML = `
      ${pageHeader('Flashcards', `Session complete for ${subject} · ${level}.`)}
      ${subjectSelector('flashcards')}
      <div class="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card pop-in">
        <div class="bounce-big text-6xl">${pct >= 80 ? '🏆' : pct >= 50 ? '🎉' : '💪'}</div>
        <h3 class="mt-4 text-xl font-bold text-slate-900">${pct >= 80 ? 'Outstanding recall!' : pct >= 50 ? 'Solid work — keep drilling!' : 'Every rep makes the next one easier.'}</h3>
        <p class="mt-2 text-sm text-slate-500">You knew <b class="text-emerald-600">${f.got}</b> and parked <b class="text-amber-600">${f.later.length}</b> for next time out of ${total} cards.</p>
        <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div class="h-full rounded-full ${pct >= 50 ? 'bg-emerald-500' : 'bg-amber-500'} transition-all duration-700" style="width:${pct}%"></div>
        </div>
        <div class="mt-6 flex flex-wrap justify-center gap-2">
          <button type="button" onclick="restartFlash()" class="rounded-xl ${c.solid} px-4 py-2.5 text-xs font-bold text-white transition hover:opacity-90">↻ Run the deck again</button>
          <button type="button" onclick="setFlashFilter('All'); " class="rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">Whole ${level} deck</button>
          <button type="button" onclick="navigate('quiz')" class="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800">Take a topic quiz →</button>
        </div>
      </div>`;
    return;
  }

  if (!allCards.length) {
    el.innerHTML = `
      ${pageHeader('Flashcards', 'Active recall — read the question, answer out loud, then flip.')}
      ${subjectSelector('flashcards')}
      <div class="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card">
        <div class="text-4xl">🎴</div>
        <p class="mt-3 text-sm font-bold text-slate-600">Cards for ${subject} · ${level} are being written.</p>
        <p class="mt-1 text-xs text-slate-400">They land topic by topic — check back soon.</p>
      </div>`;
    return;
  }

  const deck = currentFlashDeck();
  const idx = Math.min(f.idx, deck.length - 1);
  f.idx = idx;
  const card = deck[idx];

  el.innerHTML = `
    ${pageHeader('Flashcards', `Active recall for ${subject} · ${level} — answer out loud, flip, then judge yourself honestly.`)}
    ${subjectSelector('flashcards')}
    <div class="mx-auto max-w-2xl">
      <div class="mb-3 flex flex-wrap items-center gap-1.5">
        <button type="button" onclick="setFlashFilter('All')"
          class="rounded-full px-3 py-1.5 text-[11px] font-bold transition ${f.topicFilter === 'All' || f.topicFilter === '' ? `${c.solid} text-white` : 'bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50'}">All topics (${allCards.length})</button>
        ${topicsWithCards.map(t => `
          <button type="button" onclick="setFlashFilter('${t.title.replace(/'/g, "\\'")}')"
            class="rounded-full px-3 py-1.5 text-[11px] font-bold transition ${f.topicFilter === t.title ? `${c.solid} text-white` : 'bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50'}">${t.title.length > 30 ? t.title.slice(0, 29) + '…' : t.title} (${t.cards.length})</button>`).join('')}
      </div>

      <div class="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
        <span>${f.phase === 'retry' ? '🔁 Revising your “next time” pile' : card.topic}</span>
        <span class="flex items-center gap-3">
          <span class="text-emerald-600">✅ ${f.got}</span>
          <span class="text-amber-600">🔁 ${f.later.length}</span>
          <span>Card ${idx + 1}/${deck.length}</span>
        </span>
      </div>
      <div class="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div class="h-full rounded-full ${c.solid} transition-all duration-500" style="width:${((idx + 1) / deck.length) * 100}%"></div>
      </div>

      <div class="relative">
        <div id="confetti-layer" class="confetti-layer"></div>
        <div id="flashcard" class="flashcard ${state.flash.flipped ? 'flipped' : ''} h-96 w-full cursor-pointer select-none" onclick="flipFlashcard()">
          <div class="flashcard-inner">
            <div class="flashcard-face flashcard-front rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span class="self-start rounded-full ${c.bg} ${c.text} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">${card.topic}</span>
              <div class="flex flex-1 items-center justify-center px-2 text-center">
                <p class="text-lg font-bold leading-relaxed text-slate-900">${card.q}</p>
              </div>
              <p class="text-center text-[11px] font-semibold text-slate-400">Say your answer out loud, then tap to reveal</p>
            </div>
            <div class="flashcard-face flashcard-back flex flex-col rounded-2xl ${c.solid} p-6 text-white shadow-card">
              <span class="self-start rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">Answer</span>
              <div class="flex flex-1 items-center justify-center overflow-y-auto px-2 text-center">
                <p class="text-sm font-semibold leading-relaxed md:text-[15px]">${card.a}</p>
              </div>
              <p class="text-center text-[11px] font-semibold text-white/70">Did you know it before flipping? Judge yourself below</p>
            </div>
          </div>
        </div>
      </div>

      ${state.flash.flipped ? `
      <div class="mt-5 grid grid-cols-2 gap-3 pop-in">
        <button type="button" onclick="markLater()"
          class="rounded-2xl border-2 border-amber-300 bg-amber-50 px-4 py-3.5 text-sm font-bold text-amber-700 transition hover:bg-amber-100">🔁 Get it next time</button>
        <button type="button" onclick="markGot()"
          class="rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3.5 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100">✅ Got it!</button>
      </div>` : `
      <div class="mt-5 flex items-center justify-between gap-3">
        <button type="button" onclick="prevFlashcard()" ${idx === 0 ? 'disabled' : ''}
          class="rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 disabled:opacity-40">← Previous</button>
        <p class="text-[11px] font-semibold text-slate-400">Flip the card to mark <span class="text-emerald-600">Got it</span> or <span class="text-amber-600">Next time</span></p>
        <button type="button" onclick="nextFlashcard()" ${idx === deck.length - 1 ? 'disabled' : ''}
          class="rounded-xl ${c.solid} px-4 py-2.5 text-xs font-bold text-white transition hover:opacity-90 disabled:opacity-40">Next →</button>
      </div>`}
    </div>`;
}

function flipFlashcard() {
  state.flash.flipped = !state.flash.flipped;
  const card = $('#flashcard');
  if (card) card.classList.toggle('flipped', state.flash.flipped);
}
function nextFlashcard() {
  const total = currentFlashDeck().length;
  if (state.flash.idx < total - 1) { state.flash.idx++; state.flash.flipped = false; renderPage(); }
}
function prevFlashcard() {
  if (state.flash.idx > 0) { state.flash.idx--; state.flash.flipped = false; renderPage(); }
}
function gotoFlashcard(i) { state.flash.idx = i; state.flash.flipped = false; renderPage(); }
function setFlashFilter(title) {
  state.flash = { idx: 0, flipped: false, topicFilter: title, got: 0, later: [], phase: 'main', retryDeck: [] };
  renderPage();
}
function restartFlash() {
  const filter = state.flash.topicFilter;
  state.flash = { idx: 0, flipped: false, topicFilter: filter, got: 0, later: [], phase: 'main', retryDeck: [] };
  renderPage();
}
function markGot() {
  state.flash.got++;
  const card = $('#flashcard');
  if (card) card.classList.add('flash-fly');
  confettiBurst();
  setTimeout(advanceFlash, 430);
}
function markLater() {
  const deck = currentFlashDeck();
  state.flash.later.push(deck[state.flash.idx]);
  const card = $('#flashcard');
  if (card) card.classList.add('flash-shake');
  setTimeout(advanceFlash, 430);
}
function advanceFlash() {
  const f = state.flash;
  const deck = currentFlashDeck();
  f.flipped = false;
  if (f.idx < deck.length - 1) {
    f.idx++;
  } else if (f.phase === 'main' && f.later.length) {
    f.phase = 'retry'; f.retryDeck = f.later.slice(); f.later = []; f.idx = 0;
  } else if (f.phase === 'retry' && f.later.length) {
    f.retryDeck = f.later.slice(); f.later = []; f.idx = 0;
  } else {
    f.phase = 'done';
  }
  renderPage();
}

"""
s = s[:a] + NEW_FLASH + s[b:]

# ------------------------------------------------------------- quiz page: list mode + header
old_head = """function renderQuiz(el) {
  const subject = state.selectedSubject;
  const quiz = quizFor(subject);
  const c = subjectColor(subject);
  const answered = Object.keys(state.quiz.answers).length;

  el.innerHTML = `
    ${pageHeader('Practice Quiz', 'Answer every question — explanations are shown for each one once you submit.')}
    ${subjectSelector('quiz')}

    <div class="mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
      <div class="flex items-center gap-2">
        <span class="text-lg">${CURRICULUM[subject].icon}</span>
        <div>
          <div class="text-sm font-bold text-slate-900">${subject} · ${quiz.length} questions</div>
          <div class="text-[11px] text-slate-500">${state.quiz.submitted ? 'Submitted — review your answers below' : `${answered} of ${quiz.length} answered`}</div>
        </div>
      </div>"""
new_head = """function renderQuiz(el) {
  const subject = state.selectedSubject;
  const level = state.profile.classLevel || 'SS3';
  const c = subjectColor(subject);
  const qz = state.quiz;

  if (qz.mode === 'list') {
    const topics = levelTopics(subject, level);
    el.innerHTML = `
      ${pageHeader('Practice Quiz', `One 10-question quiz per ${level} topic — drilled on exactly what the lesson taught.`)}
      ${subjectSelector('quiz')}
      <div class="grid gap-3 md:grid-cols-2">
        ${topics.map(t => `
          <article class="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
            <div class="mb-1 flex items-center gap-2">
              <span class="text-lg">${CURRICULUM[subject].icon}</span>
              <h3 class="flex-1 text-sm font-bold text-slate-900">${t.title}</h3>
              <span class="rounded-full ${c.bg} ${c.text} px-2 py-0.5 text-[10px] font-bold">${t.level}</span>
            </div>
            <p class="mb-4 flex-1 text-xs leading-relaxed text-slate-500">${t.summary}</p>
            ${(t.quiz || []).length ? `
              <button type="button" onclick="startTopicQuiz('${subject.replace(/'/g, "\\\\'")}', '${t.title.replace(/'/g, "\\\\'")}')"
                class="self-start rounded-xl ${c.solid} px-4 py-2 text-xs font-bold text-white transition hover:opacity-90">📝 Start 10-question quiz</button>` : `
              <span class="self-start rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-400">✍️ Quiz being written</span>`}
          </article>`).join('')}
        ${level.startsWith('SS') && quizFor(subject).length ? `
          <article class="flex flex-col rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 shadow-card animate-fadeUp md:col-span-2">
            <h3 class="text-sm font-bold text-indigo-900">🎓 Mixed exam practice</h3>
            <p class="mb-4 mt-1 flex-1 text-xs leading-relaxed text-indigo-700">${quizFor(subject).length} exam-style questions mixing every ${subject} topic — the closest thing to a JAMB/WASSCE drill.</p>
            <button type="button" onclick="startMockQuiz()" class="self-start rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-500">Start mixed quiz</button>
          </article>` : ''}
      </div>`;
    return;
  }

  const quiz = qz.mode === 'mock' ? quizFor(subject) : topicQuiz(subject, qz.level, qz.topicIdx);
  const quizTitle = qz.mode === 'mock' ? `Mixed exam practice` : qz.topicTitle;
  if (!quiz.length) {
    el.innerHTML = `
      ${pageHeader('Practice Quiz', quizTitle)}
      ${subjectSelector('quiz')}
      <div class="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-card">
        <div class="text-4xl">✍️</div>
        <p class="mt-3 text-sm font-bold text-slate-600">The 10-question quiz for this topic is being written.</p>
        <button type="button" onclick="backToQuizList()" class="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800">← Back to quiz list</button>
      </div>`;
    return;
  }
  const answered = Object.keys(state.quiz.answers).length;

  el.innerHTML = `
    ${pageHeader('Practice Quiz', `${quizTitle} · ${level}`)}
    ${subjectSelector('quiz')}
    <div class="mb-4">
      <button type="button" onclick="backToQuizList()" class="rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">← All ${level} quizzes</button>
    </div>

    <div class="mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
      <div class="flex items-center gap-2">
        <span class="text-lg">${CURRICULUM[subject].icon}</span>
        <div>
          <div class="text-sm font-bold text-slate-900">${subject} · ${quiz.length} questions</div>
          <div class="text-[11px] text-slate-500">${state.quiz.submitted ? 'Submitted — review your answers below' : `${answered} of ${quiz.length} answered`}</div>
        </div>
      </div>"""
rep(old_head, new_head)

# bottom retake label mentions topic
rep("""        <button type="button" onclick="retakeQuiz()" class="rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white shadow-card transition hover:bg-slate-800">↻ Retake ${subject} Quiz</button>""",
    """        <button type="button" onclick="retakeQuiz()" class="rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white shadow-card transition hover:bg-slate-800">↻ Retake this quiz</button>""")

# ------------------------------------------------------------ exports + test hook
rep("""  flipFlashcard, nextFlashcard, prevFlashcard, gotoFlashcard,
  selectQuizAnswer, submitQuiz, retakeQuiz,""",
    """  flipFlashcard, nextFlashcard, prevFlashcard, gotoFlashcard,
  markGot, markLater, setFlashFilter, restartFlash,
  startTopicQuiz, startMockQuiz, backToQuizList, openTopicCards,
  selectQuizAnswer, submitQuiz, retakeQuiz,""")

rep("""  subjectsForLevel, selectableSubjects, subjectIsAvailable, hydrateFromDoc,
  examsForLevel, renderOnboardStep,""",
    """  subjectsForLevel, selectableSubjects, subjectIsAvailable, hydrateFromDoc,
  examsForLevel, renderOnboardStep, levelTopics, topicQuiz, cardsFor,""")

open(CUR, 'w').write(s)
print("restructure part 2 done, bytes:", len(s))
