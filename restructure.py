"""Rebuild flashcards + quizzes as per-topic, level-aware, animated."""
import re

CUR = '/home/user/index.html'
s = open(CUR).read()


def rep(old, new, n=1):
    global s
    assert s.count(old) == n, "count(%d) != %d for: %s" % (s.count(old), n, old[:80])
    s = s.replace(old, new, n)


# R1 state init
rep("""  quiz: { answers: {}, submitted: false, score: 0 },
  flash: { idx: 0, flipped: false },""",
    """  quiz: { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' },
  flash: { idx: 0, flipped: false, topicFilter: '', got: 0, later: [], phase: 'main', retryDeck: [] },""")

# R3 changeSubject + navigate resets (two identical pairs)
rep("""  state.flash = { idx: 0, flipped: false };
  state.quiz = { answers: {}, submitted: false, score: 0, result: null };""",
    """  state.flash = { idx: 0, flipped: false, topicFilter: '', got: 0, later: [], phase: 'main', retryDeck: [] };
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' };""",
    1)

# R2 accessors
rep("""function quizFor(subject) {
  const s = CURRICULUM[subject] || CURRICULUM['Mathematics'];
  return s.quiz.map((q, i) => ({ ...q, id: `${subject.slice(0, 3).toLowerCase()}-${i}` }));
}

function flashFor(subject) {
  const s = CURRICULUM[subject] || CURRICULUM['Mathematics'];
  return s.flashcards;
}""",
    """function levelTopics(subject, level) {
  const s = CURRICULUM[subject];
  if (!s) return [];
  return (s.topics[level] || []).map((t, i) => ({ ...t, _idx: i }));
}

/** The 10-question quiz attached to a single topic. */
function topicQuiz(subject, level, ti) {
  const s = CURRICULUM[subject];
  const t = s && (s.topics[level] || [])[ti];
  if (!t || !t.quiz || !t.quiz.length) return [];
  return t.quiz.map((q, i) => ({ ...q, id: `${subject.slice(0, 3).toLowerCase()}-${level}-${ti}-${i}` }));
}

/** Flashcards for a subject + level, optionally filtered to one topic. */
function cardsFor(subject, level, topicTitle) {
  const s = CURRICULUM[subject];
  if (!s) return [];
  const out = [];
  (s.topics[level] || []).forEach(t => {
    (t.cards || []).forEach(cd => {
      if (!topicTitle || topicTitle === 'All' || topicTitle === t.title) out.push({ ...cd, topic: t.title });
    });
  });
  return out;
}

/** Mixed subject-wide exam practice (the revision bank). */
function quizFor(subject) {
  const s = CURRICULUM[subject] || CURRICULUM['Mathematics'];
  return (s.mock || []).map((q, i) => ({ ...q, id: `mock-${subject.slice(0, 3).toLowerCase()}-${i}` }));
}

function flashFor(subject) {
  const s = CURRICULUM[subject] || CURRICULUM['Mathematics'];
  const out = [];
  Object.values(s.topics).forEach(arr => arr.forEach(t => (t.cards || []).forEach(cd => out.push({ ...cd, topic: t.title }))));
  return out;
}

function startTopicQuiz(subject, title) {
  const level = state.profile.classLevel || 'SS3';
  const ti = (CURRICULUM[subject].topics[level] || []).findIndex(t => t.title === title);
  state.selectedSubject = subject;
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'topic', level, topicIdx: ti, topicTitle: title };
  state.page = 'quiz';
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function startMockQuiz() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'mock', level: '', topicIdx: 0, topicTitle: '' };
  state.page = 'quiz';
  renderPage();
}
function backToQuizList() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' };
  renderPage();
}
function openTopicCards(subject, title) {
  state.selectedSubject = subject;
  state.flash = { idx: 0, flipped: false, topicFilter: title, got: 0, later: [], phase: 'main', retryDeck: [] };
  state.page = 'flashcards';
  renderPage();
}""")

# R4 retake keeps mode
rep("""function retakeQuiz() {
  state.quiz = { answers: {}, submitted: false, score: 0, result: null };""",
    """function retakeQuiz() {
  state.quiz = { ...state.quiz, answers: {}, submitted: false, score: 0, result: null };""")

# R5 submitQuiz quiz source
rep("""async function submitQuiz() {
  const subject = state.selectedSubject;
  const quiz = quizFor(subject);""",
    """async function submitQuiz() {
  const subject = state.selectedSubject;
  const quiz = state.quiz.mode === 'mock' ? quizFor(subject)
    : topicQuiz(subject, state.quiz.level, state.quiz.topicIdx);""")

# R7 study page: all six levels + per-topic quiz/cards buttons
rep("      ${['SS3', 'SS2', 'SS1'].map(level => {",
    "      ${['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3'].map(level => {")

old_btn = """                  <button type="button" onclick="openTopic('${subject.replace(/'/g, "\\\\'")}', '${t.title.replace(/'/g, "\\\\'")}')"
                    class="mt-3 self-start rounded-lg ${subjectColor(subject).solid} px-3 py-1.5 text-[11px] font-bold text-white transition hover:opacity-90">Read lesson →</button>"""
new_btn = """                  <div class="mt-3 flex flex-wrap gap-2">
                    <button type="button" onclick="openTopic('${subject.replace(/'/g, "\\\\'")}', '${t.title.replace(/'/g, "\\\\'")}')"
                      class="self-start rounded-lg ${subjectColor(subject).solid} px-3 py-1.5 text-[11px] font-bold text-white transition hover:opacity-90">Read lesson →</button>
                    <button type="button" onclick="openTopicCards('${subject.replace(/'/g, "\\\\'")}', '${t.title.replace(/'/g, "\\\\'")}')"
                      class="self-start rounded-lg bg-white px-3 py-1.5 text-[11px] font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">🎴 Cards${(t.cards || []).length ? ` (${t.cards.length})` : ''}</button>
                    ${(t.quiz || []).length ? `<button type="button" onclick="startTopicQuiz('${subject.replace(/'/g, "\\\\'")}', '${t.title.replace(/'/g, "\\\\'")}')"
                      class="self-start rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-slate-800">📝 Quiz (${t.quiz.length})</button>` : ''}
                  </div>"""
rep(old_btn, new_btn)

# R8 dashboard counts
rep("""    { page: 'flashcards', icon: '🎴', title: 'Flashcards', desc: `${flashFor(state.selectedSubject).length} cards for quick recall drills.` },
    { page: 'quiz', icon: '📝', title: 'Practice Quiz', desc: `${quizFor(state.selectedSubject).length} questions with full explanations.` },""",
    """    { page: 'flashcards', icon: '🎴', title: 'Flashcards', desc: `${cardsFor(state.selectedSubject, cls).length} recall cards drawn from your ${cls} lessons.` },
    { page: 'quiz', icon: '📝', title: 'Practice Quiz', desc: `${levelTopics(state.selectedSubject, cls).filter(t => (t.quiz || []).length).length} topic quizzes · 10 questions each.` },""")

# R9 CSS animations
rep("  [hidden] { display: none !important; }",
    """  [hidden] { display: none !important; }

  /* Flashcard verdict animations */
  @keyframes flyRight { 60% { opacity: 1; } 100% { transform: translateX(120%) rotate(7deg); opacity: 0; } }
  @keyframes shakeX { 10%, 90% { transform: translateX(-2px); } 20%, 80% { transform: translateX(4px); } 30%, 50%, 70% { transform: translateX(-7px); } 40%, 60% { transform: translateX(7px); } }
  @keyframes popIn { 0% { transform: scale(.5); opacity: 0; } 70% { transform: scale(1.07); } 100% { transform: scale(1); opacity: 1; } }
  @keyframes confettiFall { 0% { transform: translateY(-16px) rotate(0deg); opacity: 1; } 100% { transform: translateY(170px) rotate(560deg); opacity: 0; } }
  @keyframes bounceBig { 0% { transform: scale(0); } 55% { transform: scale(1.25); } 100% { transform: scale(1); } }
  .flash-fly { animation: flyRight .45s ease-in forwards; }
  .flash-shake { animation: shakeX .5s ease; }
  .pop-in { animation: popIn .5s cubic-bezier(.2, 1.4, .4, 1); }
  .bounce-big { animation: bounceBig .6s cubic-bezier(.2, 1.4, .4, 1); }
  .confetti-layer { pointer-events: none; position: absolute; inset: 0; overflow: hidden; }
  .confetti-bit { position: absolute; top: 0; width: 8px; height: 12px; border-radius: 2px; animation: confettiFall 1.05s ease-in forwards; }""")

open(CUR, 'w').write(s)
print("restructure part 1 done, bytes:", len(s))
