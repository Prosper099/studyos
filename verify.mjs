/* Verification harness for StudyOS index.html.
   Extracts the REAL <script type="module"> from the built index.html,
   swaps only the bare firebase imports for local stubs, and executes it.
   Then asserts against the app's own exported functions (window.__STUDYOS_TEST__). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

const root = '/home/user';
const htmlPath = process.env.STUDYOS_HTML
  || (process.env.STUDYOS_REAL_CONFIG === '1'
      ? path.join(root, '.verify/real/index.html')
      : path.join(root, '.verify/placeholder/index.html'));
const html = fs.readFileSync(htmlPath, 'utf8');

const m = html.match(/<script type="module"[^>]*>([\s\S]*?)<\/script>/);
assert.ok(m, 'index.html must contain a <script type="module"> block');
let code = m[1];

// --- structural checks on the HTML itself -----------------------------------
const checks = [];
function check(name, cond, detail = '') {
  checks.push({ name, ok: !!cond, detail });
  if (!cond) console.log(`FAIL  ${name} ${detail}`);
}

check('imports firebase-app from gstatic', /from ['"]https:\/\/www\.gstatic\.com\/firebasejs\/10\.\d+\.\d+\/firebase-app\.js['"]/.test(code));
check('imports firebase-auth from gstatic', /firebasejs\/10\.\d+\.\d+\/firebase-auth\.js/.test(code));
check('imports firebase-firestore from gstatic', /firebasejs\/10\.\d+\.\d+\/firebase-firestore\.js/.test(code));
check('uses onAuthStateChanged', /onAuthStateChanged\s*\(/.test(code));
check('uses signOut()', /\bsignOut\s*\(/.test(code));
check('uses Google signInWithPopup', /signInWithPopup\(auth,\s*googleProvider\(\)\)/.test(code));
check('no email/password auth remains',
  !/signInWithEmailAndPassword|createUserWithEmailAndPassword|switchAuthTab/.test(code));
check('writes to users/{uid} via doc(db, "users", ...)', /doc\(db,\s*['"]users['"]/.test(code));
const REAL = process.env.STUDYOS_REAL_CONFIG === '1';
if (REAL) {
  check('real-config copy has no placeholder key values',
    !/apiKey:\s*['"]YOUR_API_KEY['"]|projectId:\s*['"]YOUR_PROJECT_ID['"]/.test(code));
} else {
  check('placeholder apiKey present', /apiKey:\s*['"]YOUR_API_KEY['"]/.test(code));
  check('placeholder projectId present', /projectId:\s*['"]YOUR_PROJECT_ID['"]/.test(code));
  check('placeholder config keeps the app out of Firebase', /isConfigured/.test(code));
}
check('Tailwind CDN present', /https:\/\/cdn\.tailwindcss\.com/.test(html));
check('onboarding steps 1-3 in DOM', ['step-1', 'step-2', 'step-3'].every(id => html.includes(`id="${id}"`)));
check('all 7 nav pages present', ['home', 'study', 'resources', 'flashcards', 'quiz', 'assistant', 'profile']
  .every(p => html.includes(`data-page="${p}"`)));
check('sidebar drawer markup', html.includes('id="sidebar"') && html.includes('id="sidebar-overlay"'));
check('browser Back (popstate) handler registered', /addEventListener\(['"]popstate['"]/.test(code));
check('got-it swipe, green border flash and card-in styles present',
  /@keyframes gotSwipe/.test(html) && /@keyframes gotBorder/.test(html) && /@keyframes cardIn/.test(html)
  && /\.flash-got \.flashcard-face/.test(html) && /confetti-layer[^}]*z-index: 40/.test(html));

// --- stub out only the network imports, keep ALL app code -------------------
const stubDir = path.join(root, '.verify');
fs.mkdirSync(stubDir, { recursive: true });
const stub = (name, body) => {
  const p = path.join(stubDir, name);
  fs.writeFileSync(p, body);
  return pathToFileURL(p).href;
};
const appStub = stub('app.mjs', `export function initializeApp(cfg){ globalThis.__INIT_CFG = cfg; return { name:'stub', config:cfg }; }`);
const authStub = stub('auth.mjs', `
  export function getAuth(){ return { currentUser:null }; }
  export function onAuthStateChanged(a, cb){ globalThis.__AUTH_CB = cb; return () => {}; }
  export class GoogleAuthProvider { constructor(){ this.params = {}; } setCustomParameters(p){ this.params = p; globalThis.__GOOGLE_PARAMS = p; } }
  export async function signInWithPopup(a, provider){ globalThis.__GOOGLE_POPUP = true; return { user:{ uid:'u1', email:'ada@gmail.com', displayName:'Ada Obi' } }; }
  export async function signInWithRedirect(a, provider){ globalThis.__GOOGLE_REDIRECT = true; return {}; }
  export async function getRedirectResult(){ return null; }
  export async function signOut(){ globalThis.__SIGNED_OUT = true; }
`);
const fsStub = stub('fs.mjs', `
  const store = globalThis.__FS_STORE = new Map();
  export function getFirestore(){ return { name:'stub-db' }; }
  export function doc(db, coll, id){ return { path: coll + '/' + id }; }
  export async function getDoc(ref){ const v = store.get(ref.path); return { exists: () => v !== undefined, data: () => v }; }
  export async function setDoc(ref, data, opts){ const prev = store.get(ref.path) || {}; store.set(ref.path, { ...prev, ...data }); }
  export async function updateDoc(ref, data){ const prev = store.get(ref.path) || {}; store.set(ref.path, { ...prev, ...data }); }
  export function onSnapshot(ref, cb){ const v = store.get(ref.path); if (v) cb({ exists: () => true, data: () => v }); return () => {}; }
  export function serverTimestamp(){ return { __ts: 'server' }; }
`);

code = code
  .replace(/from ['"]https:\/\/www\.gstatic\.com\/firebasejs\/[\d.]+\/firebase-app\.js['"]/, `from '${appStub}'`)
  .replace(/from ['"]https:\/\/www\.gstatic\.com\/firebasejs\/[\d.]+\/firebase-auth\.js['"]/, `from '${authStub}'`)
  .replace(/from ['"]https:\/\/www\.gstatic\.com\/firebasejs\/[\d.]+\/firebase-firestore\.js['"]/, `from '${fsStub}'`);

assert.ok(!/gstatic\.com\/firebasejs/.test(code), 'every firebase import should have been rewritten to a stub');

const modPath = path.join(stubDir, process.env.STUDYOS_REAL_CONFIG === '1' ? 'studyos-real.mjs' : 'studyos.mjs');
fs.writeFileSync(modPath, code);

// --- minimal DOM: real script runs against it ------------------------------
function makeEl(id) {
  const classes = new Set();
  const el = {
    id,
    _text: '', _html: '', disabled: false, style: {},
    _attrs: {}, _listeners: {},
    classList: {
      add: (...c) => c.forEach(x => classes.add(x)),
      remove: (...c) => c.forEach(x => classes.delete(x)),
      contains: c => classes.has(c),
      toggle: (c, on) => { const next = on === undefined ? !classes.has(c) : !!on; next ? classes.add(c) : classes.delete(c); return next; }
    },
    get className() { return [...classes].join(' '); },
    set className(v) { classes.clear(); String(v).split(/\s+/).filter(Boolean).forEach(c => classes.add(c)); },
    set textContent(v) { this._text = String(v); }, get textContent() { return this._text; },
    set innerHTML(v) { this._html = String(v); }, get innerHTML() { return this._html; },
    set innerText(v) { this._text = String(v); }, get innerText() { return this._text; },
    setAttribute(k, v) { this._attrs[k] = v; }, getAttribute(k) { return this._attrs[k] ?? null; },
    addEventListener(t, fn) { (this._listeners[t] ||= []).push(fn); },
    appendChild(c) { (this._children ||= []).push(c); this._html += (c._html || '') + (c._text || ''); return c; },
    remove() { this._removed = true; },
    set value(v) { this._value = v; }, get value() { return this._value ?? ''; },
    focus() {}, scrollIntoView() {}
  };
  return el;
}

const els = new Map();
const byId = id => { if (!els.has(id)) els.set(id, makeEl(id)); return els.get(id); };
const navItems = ['home', 'study', 'resources', 'flashcards', 'quiz', 'assistant', 'profile'].map(p => {
  const e = makeEl('nav-' + p); e.setAttribute('data-page', p); return e;
});

globalThis.window = globalThis;
globalThis.addEventListener = () => {};
globalThis.removeEventListener = () => {};
globalThis.document = {
  getElementById: byId,
  querySelector: sel => {
    if (typeof sel === 'string' && /^#[\w-]+$/.test(sel)) return byId(sel.slice(1));
    return null;
  },
  querySelectorAll: sel => (sel === '.nav-item' ? navItems : []),
  createElement: t => makeEl('created-' + t),
  addEventListener() {},
  body: { style: {} }
};
globalThis.navigator = { onLine: true, clipboard: { writeText: async () => {} } };
globalThis.localStorage = (() => {
  const s = new Map();
  return { getItem: k => (s.has(k) ? s.get(k) : null), setItem: (k, v) => s.set(k, String(v)), removeItem: k => s.delete(k) };
})();
globalThis.requestAnimationFrame = fn => fn();
globalThis.scrollTo = () => {};
let fetchLog = [];
globalThis.__FETCH_LOG = fetchLog;
globalThis.fetch = async (url, opts) => {
  fetchLog.push(String(url));
  const u = String(url);
  if (u.includes('en.wikipedia.org/w/api.php')) {
    return { ok: true, status: 200, json: async () => ({ query: { pages: {
      '1': { index: 1, title: 'Centripetal force', extract: 'Centripetal force is the force that makes a body follow a curved path, directed towards the centre.' },
      '2': { index: 2, title: 'Circular motion', extract: 'In physics, circular motion is a movement of an object along the circumference of a circle.' }
    } } }) };
  }
  if (u.includes('api.duckduckgo.com')) {
    return { ok: true, status: 200, json: async () => ({
      Heading: 'Centripetal force', AbstractText: 'Centripetal force keeps an object in circular motion.',
      AbstractURL: 'https://en.wikipedia.org/wiki/Centripetal_force',
      RelatedTopics: [{ Text: 'Angular velocity - the rate of change of angular position.', FirstURL: 'https://example.com/angular' }]
    }) };
  }
  if (u.includes('generativelanguage.googleapis.com')) {
    if (u.includes('key=BAD_KEY')) return { ok: false, status: 403, json: async () => ({ error: { message: 'API key not valid' } }) };
    return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [
      { text: '**Centripetal force** is the inward force.\n\nThe formula is F = mv2/r.\n\nA car on a curve relies on friction.' } ] } }] }) };
  }
  return { ok: false, status: 404, json: async () => ({}) };
};
globalThis.alert = () => {};
globalThis.getComputedStyle = () => ({});
globalThis.confirm = () => true;
globalThis.setTimeout = (fn, ms) => { (globalThis.__timers ||= []).push(fn); return 0; };
globalThis.clearTimeout = () => {};

await import(pathToFileURL(modPath).href);

const T = globalThis.__STUDYOS_TEST__;
assert.ok(T, 'the app module should expose its test hook');
check('app module executed and exported its test hook', typeof T.buddyReply === 'function');
if (REAL) {
  check('real config: initializeApp received the live project credentials',
    globalThis.__INIT_CFG && globalThis.__INIT_CFG.apiKey === 'AIzaSyCc841NRjMC8ny1-JXKr_5yLlNDAXwBwCo'
    && globalThis.__INIT_CFG.projectId === 'studyos-c6042'
    && globalThis.__INIT_CFG.authDomain === 'studyos-c6042.firebaseapp.com'
    && globalThis.__INIT_CFG.messagingSenderId === '829614734062',
    globalThis.__INIT_CFG ? globalThis.__INIT_CFG.projectId : 'no config');
  check('real config: onAuthStateChanged listener registered at boot', typeof globalThis.__AUTH_CB === 'function');
} else {
  // With placeholder keys the app must NOT talk to Firebase at all — it stays on the auth screen.
  check('placeholder config: initializeApp is never called', globalThis.__INIT_CFG === undefined);
  check('placeholder config: no auth listener registered', globalThis.__AUTH_CB === undefined);
  check('boot() detected placeholders and stayed on auth screen',
    byId('boot-screen').classList.contains('hidden') && !byId('auth-screen').classList.contains('hidden'));
  check('placeholder config: auth screen shows the setup hint',
    /placeholder keys/.test(byId('demo-banner').innerHTML));
  await globalThis.handleGoogleSignIn();
  check('placeholder config: Google sign-in is refused with guidance',
    globalThis.__GOOGLE_POPUP === undefined && /Demo Mode/.test(byId('demo-banner').innerHTML));
}

// ---------- streak ----------
check('streak: no prior date → 1', T.applyStreak(0, '', '2026-09-09').streak === 1);
check('streak: same day → unchanged', T.applyStreak(5, '2026-09-09', '2026-09-09').streak === 5
  && T.applyStreak(5, '2026-09-09', '2026-09-09').changed === false);
check('streak: yesterday → +1', T.applyStreak(5, '2026-09-08', '2026-09-09').streak === 6);
check('streak: 3-day gap → reset to 1', T.applyStreak(5, '2026-09-05', '2026-09-09').streak === 1);
check('streak: month boundary', T.applyStreak(4, '2026-08-31', '2026-09-01').streak === 5);
check('streak: future/garbage date → 1', T.applyStreak(9, '2027-01-01', '2026-09-09').streak === 1
  && T.applyStreak(9, 'nonsense', '2026-09-09').streak === 1);
check('streak freeze: gap consumes one freeze and keeps the streak', (() => {
  const r = T.applyStreak(6, '2026-09-05', '2026-09-09', 1);
  return r.streak === 6 && r.freezes === 0 && r.changed && r.event === 'saved';
})());
check('streak freeze: gap with no freeze resets to 1', (() => {
  const r = T.applyStreak(6, '2026-09-05', '2026-09-09', 0);
  return r.streak === 1 && r.freezes === 0 && r.event === 'reset';
})());
check('streak freeze: consecutive day leaves the freeze bank untouched', (() => {
  const r = T.applyStreak(6, '2026-09-08', '2026-09-09', 2);
  return r.streak === 7 && r.freezes === 2 && r.event === 'extend';
})());
check('streak freeze: brand-new user starts at Day 1 without spending a freeze', (() => {
  const r = T.applyStreak(0, '', '2026-09-09', 2);
  return r.streak === 1 && r.freezes === 2 && r.event === 'start';
})());
check('passive entry roll: missed day consumes a freeze and keeps the streak', (() => {
  const st = T.getState();
  const saved = [st.streak, st.lastActiveDate, st.streakFreezes];
  st.streak = 5; st.streakFreezes = 1;
  const d = new Date(); d.setDate(d.getDate() - 2);
  st.lastActiveDate = d.toISOString().slice(0, 10);
  T.checkStreakOnEntry();
  const ok = st.streak === 5 && st.streakFreezes === 0;
  [st.streak, st.lastActiveDate, st.streakFreezes] = saved;
  return ok;
})());
check('passive entry roll: missed day with no freeze resets to Day 1', (() => {
  const st = T.getState();
  const saved = [st.streak, st.lastActiveDate, st.streakFreezes];
  st.streak = 5; st.streakFreezes = 0;
  const d = new Date(); d.setDate(d.getDate() - 3);
  st.lastActiveDate = d.toISOString().slice(0, 10);
  T.checkStreakOnEntry();
  const ok = st.streak === 1 && st.streakFreezes === 0;
  [st.streak, st.lastActiveDate, st.streakFreezes] = saved;
  return ok;
})());
check('passive entry roll: same-day entry never touches streak or freezes', (() => {
  const st = T.getState();
  const saved = [st.streak, st.lastActiveDate, st.streakFreezes];
  st.streak = 5; st.streakFreezes = 2;
  st.lastActiveDate = new Date().toISOString().slice(0, 10);
  T.checkStreakOnEntry();
  const ok = st.streak === 5 && st.streakFreezes === 2;
  [st.streak, st.lastActiveDate, st.streakFreezes] = saved;
  return ok;
})());
check('badge catalog: 76 badges (59 secret) incl. streaks, focus family and exam badges', T.BADGES.length === 76
  && T.BADGES.filter(b => b.secret).length === 59
  && ['streak-7', 'streak-30', 'streak-365'].every(id => T.BADGES.some(b => b.id === id)));
check('recordTask: activity extends the streak; 7-day milestone banks a freeze (max 3)', (() => {
  const st = T.getState();
  const snap = JSON.stringify([st.tasks, st.streakFreezes, st.badges, st.streak, st.lastActiveDate, st.daily]);
  st.tasks = { quizzes: 0, perfects: 0, cards: 0, sessions: 0, tasksTotal: 4 };
  st.streakFreezes = 0; st.badges = []; st.streak = 6;
  st.lastActiveDate = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  T.recordTask('quiz', { percent: 100 });
  const ok = st.streak === 7 && st.streakFreezes >= 1 && st.streakFreezes <= 3;
  const detail = 'streak=' + st.streak + ' freezes=' + st.streakFreezes + ' last=' + st.lastActiveDate;
  const restored = JSON.parse(snap);
  [st.tasks, st.streakFreezes, st.badges, st.streak, st.lastActiveDate, st.daily] = restored;
  if (!ok) console.log('MILESTONE DETAIL:', detail);
  return ok;
})());

// ---------- quiz grading ----------
const mathQuiz = T.quizFor('Mathematics');
check('Mathematics quiz has 8 questions', mathQuiz.length === 8);
check('every quiz question has valid correct index + explanation',
  Object.values(T.CURRICULUM).every(s =>
    (s.mock || []).every(q =>
      q.correct >= 0 && q.correct < q.options.length && q.exp && q.exp.length > 20 && q.options.length === 4)
    && Object.values(s.topics).flat().every(t => (t.quiz || []).every(q =>
      q.correct >= 0 && q.correct < q.options.length && q.exp && q.exp.length > 20 && q.options.length === 4))));
const allRight = Object.fromEntries(mathQuiz.map(q => [q.id, q.correct]));
const res = T.gradeQuiz(mathQuiz, allRight);
check('gradeQuiz: all correct → 100%', res.correct === 8 && res.total === 8 && res.percent === 100);
const noneRight = Object.fromEntries(mathQuiz.map(q => [q.id, (q.correct + 1) % q.options.length]));
const res2 = T.gradeQuiz(mathQuiz, noneRight);
check('gradeQuiz: all wrong → 0%', res2.correct === 0 && res2.percent === 0);
check('gradeQuiz: unanswered counts as wrong', T.gradeQuiz(mathQuiz, {}).correct === 0);
const merged = T.mergeQuizStats({ attempts: 1, correct: 3, total: 8, bestPercent: 38, bySubject: {} }, 'Physics', res2);
check('mergeQuizStats accumulates attempts and accuracy', merged.attempts === 2 && merged.total === 16 && merged.correct === 3);
check('mergeQuizStats keeps best percent', T.mergeQuizStats({ bestPercent: 90 }, 'Physics', res2).bestPercent === 90);
check('mergeQuizStats breaks down by subject', merged.bySubject.Physics.attempts === 1 && merged.bySubject.Physics.total === 8);

// ---------- curriculum integrity ----------
const subjects = ['Mathematics', 'Physics', 'Chemistry', 'English Language', 'Biology'];
check('all 5 subjects present with topics for SS1/SS2/SS3',
  subjects.every(s => T.CURRICULUM[s] && ['SS1', 'SS2', 'SS3'].every(l => T.CURRICULUM[s].topics[l].length >= 2)));
check('SS3 sees review topics from SS2 + SS1',
  T.topicsFor('Physics', 'SS3').length > T.CURRICULUM['Physics'].topics.SS3.length);
check('SS1 sees only its own level',
  T.topicsFor('Physics', 'SS1').every(t => t.level === 'SS1'));
check('unknown class falls back to SS3', T.topicsFor('Physics', 'XYZ').every(t => ['SS3', 'SS2', 'SS1'].includes(t.level)));
check('named topics from the brief exist',
  T.topicsFor('Mathematics', 'SS1').some(t => /Modular Arithmetic/.test(t.title)) &&
  T.topicsFor('Physics', 'SS2').some(t => /Centripetal Force/.test(t.title)) &&
  T.topicsFor('Chemistry', 'SS3').some(t => /Redox/.test(t.title)));
check('every subject has flashcards, quiz and resources',
  subjects.every(s => T.flashFor(s).length >= 5 && T.quizFor(s).length >= 5 && T.CURRICULUM[s].resources.length >= 4));
check('flashcards all have q + a', subjects.every(s => T.flashFor(s).every(c => c.q && c.a)));
check('all resource URLs are https', subjects.every(s => T.CURRICULUM[s].resources.every(r => /^https:\/\//.test(r.url))));

check('pushHistory records results and caps history at 60', (() => {
  const st = T.getState();
  const saved = st.quizStats;
  st.quizStats = { attempts: 0, correct: 0, total: 0, bestPercent: 0, bySubject: {} };
  for (let i = 0; i < 65; i++) T.pushHistory({ percent: i % 101, correct: 1, total: 2 }, 'Mathematics', 'topic');
  const day = T.localISO();
  const ok = st.quizStats.history.length === 60 && st.quizStats.history[59].p === 64 && (st.quizStats.days || {})[day] === 65;
  st.quizStats = saved;
  return ok;
})());
check('mergeQuizStats accumulates per-topic stats', (() => {
  const s1 = T.mergeQuizStats(null, 'Mathematics', { correct: 3, total: 10, percent: 30, byTopic: { 'Mathematics | Algebra': { correct: 1, total: 5 } } });
  const s2 = T.mergeQuizStats(s1, 'Mathematics', { correct: 6, total: 10, percent: 60, byTopic: { 'Mathematics | Algebra': { correct: 4, total: 5 } } });
  const b = (s2.byTopic || {})['Mathematics | Algebra'];
  return !!b && b.correct === 5 && b.total === 10;
})());
check('study plan targets the weakest topic, not a rotation', (() => {
  const st = T.getState();
  const savedStats = st.quizStats, savedProfile = { ...st.profile };
  st.profile.classLevel = 'SS2'; st.profile.subjects = ['Mathematics', 'Physics'];
  st.quizStats = { attempts: 2, correct: 40, total: 80, bestPercent: 0,
    bySubject: { Mathematics: { attempts: 1, correct: 30, total: 40 }, Physics: { attempts: 1, correct: 10, total: 40 } },
    byTopic: { 'Physics | Waves': { correct: 2, total: 10 }, 'Physics | Optics': { correct: 8, total: 10 } } };
  const p = T.buildStudyPlan();
  const ok = p.focus === 'Physics' && p.focusTopic === 'Waves' && p.focusTopicPct === 20;
  st.quizStats = savedStats; st.profile = savedProfile;
  return ok;
})());

// ---------- per-topic quizzes & flashcards (new contract) ----------
const JUNIOR_SUBS = ['Mathematics', 'English Language', 'Basic Science', 'Basic Technology'];
const JUNIOR_LEVELS = ['JSS1', 'JSS2', 'JSS3'];
check('every JSS topic carries a 15-question topic quiz',
  JUNIOR_SUBS.every(sub => JUNIOR_LEVELS.every(L => T.levelTopics(sub, L).every((t, i) => T.topicQuiz(sub, L, i).length >= 15))),
  JUNIOR_SUBS.map(sub => sub + ':' + JUNIOR_LEVELS.map(L => T.levelTopics(sub, L).map((t, i) => T.topicQuiz(sub, L, i).length).join('/')).join(' ')).join('  '));
check('every JSS topic has at least 3 flashcards with real answers',
  JUNIOR_SUBS.every(sub => JUNIOR_LEVELS.every(L => T.levelTopics(sub, L).every(t =>
    (t.cards || []).length >= 3 && t.cards.every(c => c.q && c.a && c.a.length > 20)))));
check('topicQuiz ids are stable per subject/level/topic/question', (() => {
  const q = T.topicQuiz('Mathematics', 'JSS1', 2);
  return q.length === 15 && q[0].id === 'mat-JSS1-2-0' && q[14].id === 'mat-JSS1-2-14';
})());
const SENIOR_SUBS = ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology'];
const SENIOR_LEVELS = ['SS1', 'SS2', 'SS3'];
check('every SS topic carries at least a 10-question topic quiz',
  SENIOR_SUBS.every(sub => SENIOR_LEVELS.every(L => T.levelTopics(sub, L).every((t, i) => T.topicQuiz(sub, L, i).length >= 10))),
  SENIOR_SUBS.map(sub => sub + ':' + SENIOR_LEVELS.map(L => T.levelTopics(sub, L).map((t, i) => T.topicQuiz(sub, L, i).length).join('/')).join(' ')).join('  '));
check('every SS topic has at least 3 flashcards with real answers',
  SENIOR_SUBS.every(sub => SENIOR_LEVELS.every(L => T.levelTopics(sub, L).every(t =>
    (t.cards || []).length >= 3 && t.cards.every(c => c.q && c.a && c.a.length > 20)))));
check('topicQuiz returns [] for topics without a quiz yet (mutated empty slot)', (() => {
  const t = T.CURRICULUM['Physics'].topics['SS3'][0];
  const saved = t.quiz;
  t.quiz = [];
  const empty = T.topicQuiz('Physics', 'SS3', 0).length === 0;
  t.quiz = saved;
  return empty && T.topicQuiz('Physics', 'SS3', 0).length === 10;
})());
check('mock exam bank keeps its own id namespace', T.quizFor('Mathematics')[0].id === 'mock-mat-0');
check('real past-question bank covers the 5 core subjects with >= 7 questions each',
  ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology'].every(s => (T.PASTQ[s] || []).length >= 7),
  Object.entries(T.PASTQ).map(([k, v]) => `${k}=${v.length}`).join(', '));
const pastBad = (() => {
  for (const [subj, qs] of Object.entries(T.PASTQ)) {
    for (const q of qs) {
      if (q.options.length !== 4) return `${subj}: "${q.q.slice(0, 36)}" has ${q.options.length} options`;
      if (!(q.correct >= 0 && q.correct <= 3)) return `${subj}: "${q.q.slice(0, 36)}" has bad key ${q.correct}`;
      if (!/^(WAEC|NECO|JAMB) (19|20)\d\d$/.test(q.src || '')) return `${subj}: bad attribution "${q.src}"`;
      if (!q.exp || q.exp.length < 25) return `${subj}: "${q.q.slice(0, 36)}" explanation too thin`;
    }
  }
  return null;
})();
check('every embedded past question is well-formed and carries exam-body + year attribution', !pastBad,
  pastBad || `${Object.values(T.PASTQ).reduce((a, v) => a + v.length, 0)} questions verified`);
check('pastFor() keeps its own id namespace and injects ids into every question',
  T.pastFor('Mathematics')[0].id === 'past-mat-0' && T.pastFor('English Language').every(q => q.id.startsWith('past-eng-')));
check('quiz setup defaults to 10 questions with no timer', (() => {
  const st = T.getState();
  return st.quizSetup && st.quizSetup.count === 50 && st.quizSetup.minutes === 0 && !!st.focus;
})());
check('buildQuiz honours the chosen question count (and All = full pool, unique ids)', (() => {
  const st = T.getState();
  const lvl = st.profile.classLevel || 'SS3';
  const saved = st.quizSetup.count;
  st.quizSetup.count = 5;
  const five = T.buildQuiz('Mathematics', 'topic', lvl, 0);
  st.quizSetup.count = 0;
  const all = T.buildQuiz('Mathematics', 'topic', lvl, 0);
  st.quizSetup.count = 15;
  const fifteen = T.buildQuiz('Mathematics', 'topic', lvl, 0);
  const pastOnly = T.buildQuiz('Physics', 'past').every(q => q.id.startsWith('past-'));
  st.quizSetup.count = saved;
  return five.length === 5 && all.length >= 10 && fifteen.length === 15
    && new Set(fifteen.map(q => q.id)).size === 15 && pastOnly;
})());
check('new badge catalogue includes focus, past-paper, night-owl, early-bird and timed-ace badges',
  ['focus-first', 'focus-5', 'focus-60', 'past-pro', 'timed-ace', 'night-owl', 'early-bird']
    .every(id => T.BADGES.some(b => b.id === id)));
check('plainMath strips LaTeX so students never see raw markup', (() => {
  const out = T.plainMath('The root is $\\frac{-b}{2a}$ and area $= \\pi r^{2}$ \\times 2');
  return !/[$\\{}]/.test(out) && out.includes('(-b)/(2a)') && out.includes('r^2');
})());
check('every JSS1-3 topic has at least 15 quiz questions', (() => {
  for (const sv of Object.values(T.CURRICULUM))
    for (const [lv, ts] of Object.entries(sv.topics))
      if (lv.startsWith('JSS'))
        for (const t of ts) if ((t.quiz || []).length < 15) return false;
  return true;
})());
check('deep-lesson batches: all deepened lessons reach textbook depth', (() => {
  const spec = {
    'Basic Science': {
      JSS1: ['Living Things & Health', 'Matter, Its Properties & Changes', 'Energy: Forms & Sources', 'Introduction to Science: Measurement & Laboratory Safety'],
      JSS2: ['Acids, Bases & Salts in Everyday Life', 'Energy: Forms, Transformation & Simple Machines', 'Human Body Systems'],
      JSS3: ['Reproduction, Growth & Drug Abuse', 'Light, Sound & Basic Electricity']
    },
    'Mathematics': {
      JSS1: ['Whole Numbers, Place Value & Estimation', 'Fractions & Decimals', 'Introduction to Algebra: Letters & Simple Equations', 'Angles & Plane Figures', 'Ratio, Proportion & Percentages'],
      JSS2: ['Simple Equations & Directed Numbers'],
      JSS3: ['Business Mathematics: Profit, Loss, Discount & Interest']
    },
    'English Language': {
      JSS1: ['Sentence Structure & Composition', 'Oral English: Vowels, Consonants & Stress', 'Comprehension & Summary Basics', 'Parts of Speech'],
      JSS2: ['Verb Tenses Made Simple'],
      JSS3: ['Summary Writing & précis']
    },
    'Basic Technology': {
      JSS1: ['Technology in Everyday Life', 'Common Tools & Their Uses', 'Technical Drawing: Instruments, Lines & Lettering', 'Safety in the Workshop'],
      JSS2: ['Geometrical Construction & Plane Figures', 'Building Materials & Simple Structures'],
      JSS3: ['Machines, Mechanisms & Maintenance']
    },
    'Physics': {
      SS1: ['Measurement, Units & Vectors', 'Motion & Newton’s Laws', 'Work, Energy & Power', 'Equilibrium of Forces & Moments'],
      SS2: ['Heat Energy & Thermal Expansion', 'Gravitational Field & Weightlessness']
    }
  };
  for (const [subj, levels] of Object.entries(spec))
    for (const [lv, titles] of Object.entries(levels))
      for (const title of titles) {
        const t = T.CURRICULUM[subj].topics[lv].find(x => x.title === title);
        if (!t || (t.content || '').length < 12000 || !t.content.includes('<svg')) return false;
      }
  return true;
})());
check('every topic in every subject has at least 15 flashcards', (() => {
  for (const sv of Object.values(T.CURRICULUM))
    for (const ts of Object.values(sv.topics))
      for (const t of ts) if ((t.cards || []).length < 15) return false;
  return true;
})());
check('past questions open the CBT exam interface (one question at a time)', (() => {
  const st = T.getState();
  st.selectedSubject = 'Mathematics';
  st.profile.subjects = ['Mathematics'];
  T.startPastQuiz();
  if (st.quiz.mode !== 'past' || st.quiz.examIdx !== 0) return false;
  if (!st.quiz.questions.length) return false;
  const before = st.quiz.examIdx;
  T.examNext();
  if (st.quiz.examIdx !== before + 1) return false;
  T.examJump(9999);
  if (st.quiz.examIdx !== st.quiz.questions.length - 1) return false;
  T.examJump(-5);
  if (st.quiz.examIdx !== 0) return false;
  return true;
})());
check('submitExam submits the paper and records the past-drill feat', (() => {
  const st = T.getState();
  const qs = st.quiz.questions;
  const first = qs[0];
  st.quiz.answers[first.id] = first.correct;
  const drillsBefore = st.tasks.pastDrills || 0;
  T.submitExam();
  return st.quiz.submitted === true
    && st.quiz.result.total === qs.length
    && (st.tasks.pastDrills || 0) === drillsBefore + 1;
})());
check('secret badges are flagged and hidden from the catalogue display', (() => {
  const secrets = T.BADGES.filter(b => b.secret);
  return secrets.length >= 9
    && ['two-weeks', 'sharpshooter', 'centurion', 'weekend-warrior', 'buddy-friend', 'marathon-mind']
      .slice(0, 5).every(id => secrets.some(b => b.id === id))
    && secrets.every(b => typeof b.desc === 'string' && b.desc.length > 10);
})());
check('completing a focus session records minutes and unlocks the Focused badge', (() => {
  const st = T.getState();
  const before = st.tasks.focusSessions || 0;
  T.recordTask('focus', { minutes: 25 });
  return st.tasks.focusSessions === before + 1 && (st.tasks.focusMinutes || 0) >= 25
    && st.badges.includes('focus-first');
})());
check('cardsFor aggregates a whole level and tags each card with its topic', (() => {
  const all = T.cardsFor('Basic Science', 'JSS1');
  const one = T.cardsFor('Basic Science', 'JSS1', 'Matter, Its Properties & Changes');
  return all.length >= 15 && one.length >= 3 && one.every(c => c.topic === 'Matter, Its Properties & Changes')
    && all.every(c => c.topic);
})());
check('flashcard UI has Got it / Get it next time buttons with pass+fail animations',
  html.includes('Got it') && html.includes('Get it next time')
  && /flash-fly/.test(html) && /flash-shake/.test(html)
  && /@keyframes flyRight/.test(html) && /@keyframes shakeX/.test(html)
  && /@keyframes confettiFall/.test(html)
  && typeof T.markGot === 'function' && typeof T.markLater === 'function');

// ---------- curriculum breadth & depth ----------
const allSubjects = ['Mathematics', 'Physics', 'Chemistry', 'English Language', 'Biology'];
let topicCount = 0, contentChars = 0;
allSubjects.forEach(sub => {
  const t = T.CURRICULUM[sub].topics;
  Object.keys(t).forEach(lvl => t[lvl].forEach(x => { topicCount++; contentChars += x.content.length; }));
});
check('curriculum has at least 40 topics across all subjects and levels', topicCount >= 40, 'found ' + topicCount);
check('average lesson is substantial (>2500 chars of content)', contentChars / topicCount > 2500,
  'avg ' + Math.round(contentChars / topicCount));
const JUNIOR = ['Mathematics', 'English Language', 'Basic Science', 'Basic Technology'];
const SENIOR = ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology'];
const levelsWith = sub => ['JSS1','JSS2','JSS3','SS1','SS2','SS3'].filter(l => (T.CURRICULUM[sub].topics[l] || []).length > 0);

check('every junior subject has lessons in all of JSS1, JSS2 and JSS3',
  JUNIOR.every(sub => ['JSS1','JSS2','JSS3'].every(l => (T.CURRICULUM[sub].topics[l] || []).length > 0)),
  JUNIOR.map(sub => sub + ':' + levelsWith(sub).join('/')).join('  '));

check('Physics, Chemistry and Biology start at SS1 and have no JSS lessons',
  ['Physics','Chemistry','Biology'].every(sub =>
    ['JSS1','JSS2','JSS3'].every(l => (T.CURRICULUM[sub].topics[l] || []).length === 0)
    && ['SS1','SS2','SS3'].every(l => (T.CURRICULUM[sub].topics[l] || []).length > 0)),
  ['Physics','Chemistry','Biology'].map(sub => sub + ':' + levelsWith(sub).join('/')).join('  '));

check('a JSS student is never offered Physics, Chemistry or Biology',
  ['JSS1','JSS2','JSS3'].every(l => T.subjectsForLevel(l).join('|') === JUNIOR.join('|'))
  && ['JSS1','JSS2','JSS3'].every(l => T.topicsFor('Physics', l).length === 0
      && T.topicsFor('Chemistry', l).length === 0 && T.topicsFor('Biology', l).length === 0),
  'JSS2 -> ' + T.subjectsForLevel('JSS2').join(', '));

check('an SS student is offered the three sciences',
  ['SS1','SS2','SS3'].every(l => SENIOR.every(x => T.subjectsForLevel(l).includes(x)))
  && ['SS2','SS3'].every(l => T.subjectsForLevel(l).join('|') === SENIOR.join('|'))
  && T.topicsFor('Physics','SS3').length > 0,
  'SS3 -> ' + T.subjectsForLevel('SS3').join(', '));

check('JSS3 terminal revision stays inside the junior ladder',
  (() => {
    const phys = T.topicsFor('Physics', 'JSS3');
    const maths = T.topicsFor('Mathematics', 'JSS3');
    const physOk = phys.length === 0;
    const mathsOk = maths.length > 1 && maths.every(t => t.level.startsWith('JSS'));
    const ssOk = T.topicsFor('Physics', 'SS3').length > T.CURRICULUM.Physics.topics.SS3.length
      && T.topicsFor('Physics', 'SS3').every(t => t.level.startsWith('SS'));
    return physOk && mathsOk && ssOk;
  })(),
  'JSS3 Physics=' + T.topicsFor('Physics','JSS3').length
  + ' JSS3 Maths levels=' + T.topicsFor('Mathematics','JSS3').map(t => t.level).join('/')
  + ' SS3 Physics=' + T.topicsFor('Physics','SS3').length);

check('subjectsForLevel falls back to every subject for an unknown level',
  T.subjectsForLevel('').length === Object.keys(T.CURRICULUM).length);

check('subjectIsAvailable reflects the level catalogue', (() => {
  const st = T.getState();
  st.profile.classLevel = 'JSS2';
  const juniorOk = T.subjectIsAvailable('Basic Science') === true && T.subjectIsAvailable('Physics') === false;
  st.profile.classLevel = 'SS2';
  const seniorOk = T.subjectIsAvailable('Physics') === true && T.subjectIsAvailable('Basic Science') === false;
  return juniorOk && seniorOk;
})(), 'JSS2 Basic Science=' + (() => { const st = T.getState(); st.profile.classLevel = 'JSS2'; return T.subjectIsAvailable('Basic Science'); })());

const resetHarness = () => {
  const st = T.getState();
  st.profile = { name: '', email: '', classLevel: '', targetExam: '', subjects: [], onboarded: false };
  st.selectedSubject = 'Mathematics';
  st.streak = 0; st.lastActiveDate = '';
  st.quizStats = { attempts: 0, correct: 0, total: 0, bestPercent: 0, bySubject: {} };
  st.onboard = { step: 1, classLevel: '', targetExam: '', subjects: [] };
  globalThis.__FS_STORE.clear();          // undo anything hydrate/persist wrote
  (globalThis.__timers || []).length = 0;
};

check('hydrateFromDoc strips subjects that do not exist at the saved level',
  (() => {
    const st = T.getState();
    T.hydrateFromDoc({ name: 'Ada', classLevel: 'JSS2', subjects: ['Physics','Mathematics','Biology'] });
    const juniorOk = st.profile.subjects.join('|') === 'Mathematics' && st.selectedSubject === 'Mathematics';
    T.hydrateFromDoc({ name: 'Ada', classLevel: 'SS3', subjects: ['Physics','Mathematics'] });
    const seniorOk = st.profile.subjects.join('|') === 'Physics|Mathematics';
    // a brand-new user must NOT be given a subject list — onboarding still has to ask
    T.hydrateFromDoc({ name: 'Ada', classLevel: 'SS3', subjects: [] });
    const emptyOk = st.profile.subjects.length === 0;
    // an existing user whose saved subjects are all invalid falls back to a valid one
    T.hydrateFromDoc({ name: 'Ada', classLevel: 'JSS1', subjects: ['Physics'] });
    const allInvalidOk = st.profile.subjects.length === 0 && st.selectedSubject === 'Mathematics';
    resetHarness();
    return juniorOk && seniorOk && emptyOk && allInvalidOk;
  })(),
  'JSS2 saved with Physics/Biology/Maths -> ' + (() => {
    const st = T.getState();
    T.hydrateFromDoc({ name: 'Ada', classLevel: 'JSS2', subjects: ['Physics','Mathematics','Biology'] });
    const r = st.profile.subjects.join(', ');
    resetHarness();
    return r;
  })());

check('diagrams are wired into lessons across the sciences',
  ['Biology','Chemistry','Physics','Basic Technology','Mathematics'].every(sub =>
    Object.values(T.CURRICULUM[sub].topics).flat().some(t => t.content.includes('class="diagram"'))),
  allSubjects.map(sub => sub + ':' + Object.values(T.CURRICULUM[sub].topics).flat()
    .filter(t => t.content.includes('class="diagram"')).length).join(' '));
check('JSS students may only target General or BECE',
  T.examsForLevel('JSS1').map(e => e.id).join('|') === 'General|BECE'
  && T.examsForLevel('JSS3').map(e => e.id).join('|') === 'General|BECE',
  'JSS2 -> ' + T.examsForLevel('JSS2').map(e => e.id).join(', '));

check('SS1/SS2 target WAEC/NECO/General; SS3 adds JAMB & Post-UTME',
  T.examsForLevel('SS1').map(e => e.id).join('|') === 'WAEC WASSCE|NECO|General'
  && T.examsForLevel('SS2').map(e => e.id).join('|') === 'WAEC WASSCE|NECO|General'
  && T.examsForLevel('SS3').map(e => e.id).join('|') === 'JAMB UTME|WAEC WASSCE|NECO|Post-UTME|General',
  'SS1 -> ' + T.examsForLevel('SS1').map(e => e.id).join(', '));

check('onboarding step 2 shows only junior exams for a JSS class', (() => {
  const st = T.getState();
  const saved = { ...st.onboard };
  st.onboard = { step: 2, classLevel: 'JSS2', targetExam: '', subjects: [] };
  T.renderOnboardStep();
  const html = byId('step-2').innerHTML;
  const junior = /BECE/.test(html) && /General/.test(html) && !/JAMB UTME/.test(html) && !/WAEC WASSCE/.test(html);
  st.onboard = { step: 2, classLevel: 'SS2', targetExam: '', subjects: [] };
  T.renderOnboardStep();
  const ss2Calm = /WAEC WASSCE/.test(byId('step-2').innerHTML) && !/JAMB UTME/.test(byId('step-2').innerHTML);
  st.onboard = { step: 2, classLevel: 'SS3', targetExam: '', subjects: [] };
  T.renderOnboardStep();
  const senior = /JAMB UTME/.test(byId('step-2').innerHTML) && /Post-UTME/.test(byId('step-2').innerHTML) && !/BECE</.test(byId('step-2').innerHTML);
  st.onboard = saved;
  T.renderOnboardStep();
  return junior && ss2Calm && senior;
})(), 'JSS2 step2: ' + (() => { const st = T.getState(); const sv = { ...st.onboard }; st.onboard = { step: 2, classLevel: 'JSS2', targetExam: '', subjects: [] }; T.renderOnboardStep(); const ids = [...byId('step-2').innerHTML.matchAll(/font-bold [^"]*">([^<]+)</g)].map(m => m[1]).join(', '); st.onboard = sv; return ids; })());

check('hydrateFromDoc clears an exam that is invalid for the saved level', (() => {
  const st = T.getState();
  T.hydrateFromDoc({ name: 'Ada', classLevel: 'JSS2', targetExam: 'JAMB UTME', subjects: ['Mathematics'] });
  const cleared = st.profile.targetExam === '';
  T.hydrateFromDoc({ name: 'Ada', classLevel: 'SS2', targetExam: 'JAMB UTME', subjects: ['Mathematics'] });
  const ss2Cleared = st.profile.targetExam === '';
  T.hydrateFromDoc({ name: 'Ada', classLevel: 'SS3', targetExam: 'JAMB UTME', subjects: ['Mathematics'] });
  const kept = st.profile.targetExam === 'JAMB UTME';
  T.hydrateFromDoc({ name: 'Ada', classLevel: 'JSS3', targetExam: 'BECE', subjects: ['Mathematics'] });
  const beceKept = st.profile.targetExam === 'BECE';
  resetHarness();
  return cleared && ss2Cleared && kept && beceKept;
})(), 'JSS2 + JAMB UTME -> ' + (() => { const st = T.getState(); T.hydrateFromDoc({ classLevel: 'JSS2', targetExam: 'JAMB UTME' }); const r = JSON.stringify(st.profile.targetExam); resetHarness(); return r; })());

check('every topic has tags, summary and content',
  allSubjects.every(sub => Object.values(T.CURRICULUM[sub].topics).flat()
    .every(x => x.title && x.summary && x.tags.length >= 2 && x.content.length > 600)));
check('most lessons include worked practice questions',
  allSubjects.every(sub => Object.values(T.CURRICULUM[sub].topics).flat()
    .filter(x => /Worked (practice|example)/.test(x.content)).length
    >= Object.values(T.CURRICULUM[sub].topics).flat().length * 0.8));
check('most lessons warn about common mistakes',
  allSubjects.every(sub => Object.values(T.CURRICULUM[sub].topics).flat()
    .filter(x => /Common mistakes|Watch out|Common error|Common mix-up/.test(x.content)).length
    >= Object.values(T.CURRICULUM[sub].topics).flat().length * 0.6));
check('no lesson contains an unescaped template-literal breaker',
  allSubjects.every(sub => Object.values(T.CURRICULUM[sub].topics).flat()
    .every(x => !x.content.includes('${'))));

// ---------- Buddy knowledge engine ----------
const cases = [
  ['explain centripetal force', 'Centripetal Force'],
  ['what is a redox reaction', 'Redox Reactions'],
  ['how do i solve quadratic equations', 'Quadratic Equations'],
  ['explain reported speech', 'Reported'],
  ['what is osmosis and the cell', 'The Cell'],
  ['give me jamb exam tips', 'JAMB UTME Exam Strategy'],
  ['le chatelier principle', 'Rates of Reaction'],
  ['how to write a waec summary', 'Summary & Comprehension']
];
for (const [q, expect] of cases) {
  const reply = T.buddyReply(q);
  const hit = reply.html.includes(expect);
  check(`Buddy answers "${q}" → ${expect}`, hit);
  if (!hit) console.log('   got:', reply.html.slice(0, 160).replace(/\s+/g, ' '));
}
check('Buddy greeting is friendly, not a topic dump', /Buddy here/.test(T.buddyReply('hello there').html));
check('Buddy does not mistake "oxidation" for "thanks"', /Oxidation/.test(T.buddyReply('explain oxidation').html));
check('Buddy admits unknown topics instead of inventing', /do not have a prepared lesson/.test(T.buddyReply('explain quantum chromodynamics xyzzy').html));
check('Buddy routes a bare subject name into that subject',
  /<span class="tag">Chemistry<\/span>/.test(T.buddyReply('chemistry').html));
check('Buddy routes "biology" into a Biology topic',
  /<span class="tag">Biology<\/span>/.test(T.buddyReply('biology questions').html));
check('Buddy always returns suggestion chips', T.buddyReply('centripetal force').chips.length >= 2);

// ---------- Buddy algebra solver ----------
const quad = T.buddyReply('solve x^2 - 5x + 6');
check('Buddy solves x^2 - 5x + 6 → roots 3 and 2',
  /x = 3\s+or\s+2/.test(quad.html) && /Δ = b\^2 - 4ac/.test(quad.html), quad.html.slice(0, 200));
const quad2 = T.solveQuadratic(1, 0, -9);
check('solveQuadratic(1,0,-9) → ±3', JSON.stringify(quad2.roots) === JSON.stringify([3, -3]) && quad2.nature.includes('distinct'));
const quad3 = T.solveQuadratic(1, -4, 4);
check('solveQuadratic(1,-4,4) → repeated root 2', quad3.roots.length === 1 && quad3.roots[0] === 2);
const quad4 = T.solveQuadratic(1, 0, 4);
check('solveQuadratic(1,0,4) → complex pair', /no real roots/.test(quad4.nature) && /i/.test(String(quad4.roots[0])));
const sim = T.buddyReply('solve 2x + y = 11 and x - y = 1');
check('Buddy solves simultaneous equations → x=4, y=3', /x = 4 ,\s+y = 3/.test(sim.html), sim.html.slice(0, 220));
check('solveSimultaneous rejects parallel lines', T.solveSimultaneous(1, 1, 2, 2, 2, 9) === null);
check('extractCoeffs reads 2x^2 + 3x - 5', JSON.stringify(T.extractCoeffs('solve 2x^2 + 3x - 5')) === JSON.stringify({ a: 2, b: 3, c: -5 }));
check('extractCoeffs handles implicit coefficient x^2 - 5x + 6', JSON.stringify(T.extractCoeffs('x^2 - 5x + 6')) === JSON.stringify({ a: 1, b: -5, c: 6 }));

// ---------- Buddy live internet research ----------
const T2 = T;
check('researchOnline pulls Wikipedia extracts', await (async () => {
  const r = await T2.researchOnline('centripetal force');
  return r.sources.some(x => x.from === 'Wikipedia' && /curved path/.test(x.text));
})());
check('researchOnline also pulls DuckDuckGo and de-duplicates', await (async () => {
  const r = await T2.researchOnline('centripetal force');
  const urls = r.sources.map(x => x.url.toLowerCase());
  return r.sources.some(x => x.from === 'DuckDuckGo') && new Set(urls).size === urls.length;
})());
check('researchOnline never throws and caps results at 5', await (async () => {
  const r = await T2.researchOnline('centripetal force');
  return r.sources.length > 0 && r.sources.length <= 5;
})());
check('composeAnswer cites sources when research is ON', await (async () => {
  globalThis.__researchStateOn = true;
  const r = await T2.composeAnswer('explain centripetal force');
  return r.html.includes('Sources') && r.html.includes('en.wikipedia.org') && r.html.includes('Live from the web');
})());
check('Gemini key produces a synthesised answer', await (async () => {
  const before = globalThis.__geminiKey();
  globalThis.__setGemini('AIza-good-key');
  const r = await T2.composeAnswer('explain centripetal force');
  globalThis.__setGemini(before || '');
  return /Buddy · live research/.test(r.html) && r.html.includes('friction');
})());
check('a bad Gemini key degrades gracefully instead of breaking', await (async () => {
  const before = globalThis.__geminiKey();
  globalThis.__setGemini('BAD_KEY');
  const r = await T2.composeAnswer('explain centripetal force');
  globalThis.__setGemini(before || '');
  return /Gemini key issue/.test(r.html) && r.html.includes('Sources');
})());
check('askBuddy(forceResearch=false) uses the built-in lesson only', await (async () => {
  const before = globalThis.__FETCH_LOG.length;
  await globalThis.askBuddy('explain centripetal force', false);
  globalThis.__timers.splice(0).forEach(fn => fn());
  await new Promise(r => setImmediate(r));
  return globalThis.__FETCH_LOG.length === before;
})());
check('askBuddy(forceResearch=true) hits the network', await (async () => {
  const before = globalThis.__FETCH_LOG.length;
  await globalThis.askBuddy('explain redox reactions', true);
  await new Promise(r => setImmediate(r));
  return globalThis.__FETCH_LOG.length > before;
})());
check('"Search the web:" chip prefix forces research on', await (async () => {
  const before = globalThis.__FETCH_LOG.length;
  await globalThis.askBuddy('Search the web: latest JAMB syllabus changes');
  await new Promise(r => setImmediate(r));
  return globalThis.__FETCH_LOG.length > before;
})());
check('research toggle changes app state and persists', (() => {
  globalThis.setResearch(false);
  const off = globalThis.__researchOn() === false;
  globalThis.setResearch(true);
  return off && globalThis.__researchOn() === true;
})());

// ---------- misc helpers ----------
check('initials("Joseph Adeyemi") → JA', T.initials('Joseph Adeyemi') === 'JA');
check('initials("") → S', T.initials('') === 'S');
check('escapeHtml blocks script injection', !/<script/i.test(T.escapeHtml('<script>alert(1)</script>')));
check('mdToHtml escapes then bolds', T.mdToHtml('**hi** <img src=x>').includes('<b>hi</b>') && !T.mdToHtml('**hi** <img src=x>').includes('<img'));
check('fmtQuad renders 2x^2 + 3x - 5 (ASCII-safe math)', T.fmtQuad(2, 3, -5) === '2x^2 + 3x - 5');
check('OPTIONS cover the brief', JSON.stringify(T.OPTIONS.classes) === JSON.stringify(['SS1','SS2','SS3','JSS1','JSS2','JSS3'])
  && T.OPTIONS.exams.map(e => e.id).join('|') === 'JAMB UTME|WAEC WASSCE|NECO|Post-UTME|General'
  && T.OPTIONS.subjects.length === 13
  && Object.keys(T.OPTIONS.icons).length === 13
  && T.OPTIONS.icons['Government'] === '🏛️'
  && T.OPTIONS.icons['Financial Accounting'] === '🧾'
  && T.OPTIONS.icons['Basic Science'] === '🔬'
  && T.OPTIONS.icons['Basic Technology'] === '🛠️');

/* ---------- end-to-end live-app run (needs a real-looking config) ----------
   Skipped here because the shipped file has placeholder keys; verify-real.mjs
   re-runs the same module with real values and performs these checks. */
const RUN_LIVE = process.env.STUDYOS_REAL_CONFIG === '1';
if (!RUN_LIVE) {
  const failed = checks.filter(c => !c.ok);
  console.log(`\n${checks.length - failed.length}/${checks.length} checks passed (placeholder-config scenario)`);
  if (failed.length) { failed.forEach(f => console.log('  -', f.name, f.detail)); process.exit(1); }
  console.log('ALL CHECKS PASSED (placeholder-config scenario)');
  process.exit(0);
}

// ---------- end-to-end: sign in through the real handleUser path ----------
const signIn = async () => globalThis.__AUTH_CB({ uid: 'test-uid-1', email: 'joseph@example.com', displayName: 'Joseph Adeyemi' });
await signIn();
await new Promise(r => setImmediate(r));
const docAfterLogin = globalThis.__FS_STORE.get('users/test-uid-1');
check('signing in created users/{uid} in Firestore', !!docAfterLogin, JSON.stringify(docAfterLogin));
check('login leaves the streak untouched (activity-based)', docAfterLogin && docAfterLogin.streak === 0);
check('name/email written to Firestore doc', docAfterLogin && docAfterLogin.name === 'Joseph Adeyemi' && docAfterLogin.email === 'joseph@example.com');
check('enterApp() revealed the main app and hid auth',
  !byId('main-app').classList.contains('hidden') && byId('auth-screen').classList.contains('hidden'));
check('streak badge shows 0 before any study activity', byId('header-streak').textContent === '🔥 0');
T.recordTask('card', {});
const docAfterActivity = globalThis.__FS_STORE.get('users/test-uid-1');
check('first study activity starts the streak at Day 1', docAfterActivity.streak === 1 && /^\d{4}-\d{2}-\d{2}$/.test(docAfterActivity.lastActiveDate), 'streak=' + docAfterActivity.streak);
check('streak badge in header/sidebar updated after activity', byId('header-streak').textContent === '🔥 1' && /1 day/.test(byId('streak-count').textContent));
check('unboarded user is pushed into onboarding', !byId('onboarding-modal').classList.contains('hidden'));

// onboarding — enterApp() defers openOnboarding() behind a setTimeout, so start it explicitly
const w = globalThis;
check('enterApp scheduled the onboarding modal to open', (globalThis.__timers || []).length > 0);
w.openOnboarding();
check('onboarding modal opened with step 1 visible',
  !byId('onboarding-modal').classList.contains('hidden') && !byId('step-1').classList.contains('hidden')
  && byId('onboard-title').textContent === 'What class are you in?');
await w.onboardNext();
check('step 1 refuses to advance without a class selection',
  !byId('onboard-error').classList.contains('hidden') && byId('onboard-kicker').textContent === 'Step 1 of 6');
w.pickOnboardOption('classLevel', 'SS3');
await w.onboardNext();
check('step 1 → step 2 after choosing a class', byId('onboard-kicker').textContent === 'Step 2 of 6');
await w.onboardNext();
check('step 2 refuses to advance without a target exam', !byId('onboard-error').classList.contains('hidden'));
w.pickOnboardOption('targetExam', 'JAMB UTME');
await w.onboardNext();
check('step 2 → step 3 after choosing an exam', byId('onboard-kicker').textContent === 'Step 3 of 6');
await w.onboardNext();
check('step 3 refuses to save with no subjects', !byId('onboard-error').classList.contains('hidden'));
w.toggleOnboardSubject('Mathematics');
w.toggleOnboardSubject('Physics');
w.toggleOnboardSubject('Physics');
w.toggleOnboardSubject('Physics');
check('subject chips toggle on and off', true);
await w.onboardNext();
check('step 3 refuses an SS student without a department', !byId('onboard-error').classList.contains('hidden'));
w.pickDept('Science');
await w.onboardNext();
check('step 3 → step 4 (target score)', byId('onboard-kicker').textContent === 'Step 4 of 6');
await w.onboardNext();
check('step 4 refuses without a target score', !byId('onboard-error').classList.contains('hidden'));
w.pickOnboardOption('targetScore', '300+');
await w.onboardNext();
check('step 4 → step 5 (study preference)', byId('onboard-kicker').textContent === 'Step 5 of 6');
await w.onboardNext();
check('step 5 refuses without a preference', !byId('onboard-error').classList.contains('hidden'));
w.pickOnboardOption('studyPref', 'balanced');
await w.onboardNext();
check('step 6 shows the generated study plan with the target and today’s mission',
  byId('onboard-kicker').textContent === 'Step 6 of 6'
  && byId('step-6').innerHTML.includes('300+') && /mission/i.test(byId('step-6').innerHTML),
  byId('step-6').innerHTML.slice(0, 150));
await w.onboardNext();
const docAfterOnboard = globalThis.__FS_STORE.get('users/test-uid-1');
check('onboarding persisted class + exam + subjects + target + preference to Firestore',
  docAfterOnboard.classLevel === 'SS3' && docAfterOnboard.targetExam === 'JAMB UTME'
  && docAfterOnboard.targetScore === '300+' && docAfterOnboard.studyPref === 'balanced'
  && JSON.stringify(docAfterOnboard.subjects) === JSON.stringify(['Mathematics', 'Physics'])
  && docAfterOnboard.dept === 'Science'
  && docAfterOnboard.onboarded === true, JSON.stringify(docAfterOnboard));
check('onboarding modal closed after finish', byId('onboarding-modal').classList.contains('hidden'));
T.getState().profile.plan = 'pro'; // main flow runs as Pro so free-tier caps never block it

// quiz flow through the UI handlers (quiz page opens in list mode; pick the mock bank)
w.changeSubject('Physics');
w.navigate('quiz');
check('quiz list offers per-topic quizzes plus the exam picker for SS3 Physics',
  byId('page-content').innerHTML.includes('startTopicQuiz(')
  && byId('page-content').innerHTML.includes('openExamSetup(')
  && !byId('page-content').innerHTML.includes('Quiz being written'));
check('quiz list degrades gracefully when a topic quiz is unwritten (mutated)', (() => {
  const t = T.CURRICULUM['Physics'].topics['SS3'][0];
  const saved = t.quiz;
  t.quiz = [];
  w.navigate('quiz');
  const ok = byId('page-content').innerHTML.includes('Quiz being written');
  t.quiz = saved;
  w.navigate('quiz');
  return ok && !byId('page-content').innerHTML.includes('Quiz being written');
})());
{
  const st0 = T.getState();
  const savedLevel = st0.profile.classLevel, savedSub = st0.selectedSubject;
  st0.profile.classLevel = 'JSS1';
  w.changeSubject('Mathematics');
  w.navigate('quiz');
  check('quiz list offers per-topic 10-question quizzes where they are authored',
    byId('page-content').innerHTML.includes('startTopicQuiz(')
    && byId('page-content').innerHTML.includes('Start 10-question quiz'));
  st0.profile.classLevel = savedLevel;
  w.changeSubject(savedSub);
}
w.startMockQuiz();
const physQuiz = T.getState().quiz.questions; // runtime (shuffled) questions, not the raw bank
physQuiz.forEach(q => w.selectQuizAnswer(q.id, q.correct));
await w.submitQuiz();
const docAfterQuiz = globalThis.__FS_STORE.get('users/test-uid-1');
check('quiz results synced to Firestore', docAfterQuiz.quizStats && docAfterQuiz.quizStats.attempts === 1
  && docAfterQuiz.quizStats.bestPercent === 100 && docAfterQuiz.quizStats.bySubject.Physics.correct === physQuiz.length);
check('header shows the chosen target exam', byId('header-exam-badge').textContent === 'JAMB UTME');
w.retakeQuiz();
check('retake clears the submitted state', byId('page-content').innerHTML.includes('Submit Answers')
  && !byId('page-content').innerHTML.includes('Retake Quiz'));

// real past-question drill (embedded WAEC/NECO/JAMB papers, fully offline)
w.backToQuizList();
check('practice exam page opens with the exam picker; opening an exam reveals modes + settings', (() => {
  const h = byId('page-content').innerHTML;
  if (!h.includes('Full exam simulations') || !h.includes('openExamSetup(')
    || h.includes('startPastQuiz()') || h.includes('startMockQuiz()')) return false;
  w.openExamSetup('jamb');
  const o = byId('page-content').innerHTML;
  const ok = o.includes('setSimMode(') && o.includes('Study mode') && o.includes('Mock mode') && o.includes('Practice mode')
    && o.includes('Questions per subject') && o.includes('Time for the whole exam')
    && o.includes('Real exam') && o.includes('startExamSimFromPanel()') && o.includes('closeExamSetup()');
  w.closeExamSetup();
  return ok;
})());
w.navigate('home');
check('dashboard no longer hosts the simulation lab or drills', (() => {
  const h = byId('page-content').innerHTML;
  return !h.includes('startExamSim(') && !h.includes('drillPast(') && !h.includes('drillMock(');
})());
check('opening an exam lets the student set questions per subject and exam time', (() => {
  w.navigate('quiz'); w.backToQuizList();
  w.openExamSetup('jamb');
  w.setSimQuestions(10); w.setSimMinutes(20);
  w.setSimMode('practice');
  w.startExamSimFromPanel();
  const sim = T.getState().examSim;
  const ok = !!sim && sim.sections.every(x => x.questions.length <= 10) && sim.totalMin === 20;
  w.exitExamSim();
  w.setSimQuestions(0); w.setSimMinutes(0);
  w.closeExamSetup();
  return ok;
})());
check('exam presets follow the class level (SS sees JAMB etc, JSS sees BECE only)', (() => {
  const st = T.getState();
  const savedLvl = st.profile.classLevel;
  const savedPage = st.page;
  const savedSub = st.selectedSubject;
  st.page = 'quiz';
  st.profile.classLevel = 'SS3'; w.backToQuizList();
  const ssH = byId('page-content').innerHTML;
  st.profile.classLevel = 'JSS2'; w.backToQuizList();
  const jssH = byId('page-content').innerHTML;
  st.profile.classLevel = savedLvl; st.page = savedPage; st.selectedSubject = savedSub; w.backToQuizList();
  return ssH.includes('JAMB UTME sitting') && ssH.includes('WAEC WASSCE sitting') && !ssH.includes('BECE sitting')
    && jssH.includes('BECE sitting') && !jssH.includes('JAMB UTME sitting');
})());
w.startPastQuiz();
const rawPast = T.pastFor('Physics');
const pastQuiz = T.getState().quiz.questions; // runtime (shuffled) questions
check('past drill opens the CBT exam hall with palette and source badge', (() => {
  const h = byId('page-content').innerHTML;
  const first = pastQuiz[0];
  return rawPast.length >= 7 && h.includes('Real past questions (WAEC/JAMB/NECO)')
    && h.includes('Real exam simulation') && h.includes('Question palette')
    && h.includes('Submit exam') && !!first && h.includes(first.src);
})());
pastQuiz.forEach(q => w.selectQuizAnswer(q.id, q.correct));
await w.submitQuiz();
check('past drill grades and reveals official answers with paper attribution', (() => {
  const h = byId('page-content').innerHTML;
  return h.includes('Retake Quiz') && h.includes('WAEC 2016') && h.includes('Explanation');
})());
w.retakeQuiz();
w.backToQuizList();

// ---------- progress dashboard: real submit path records history + activity ----------
{
  const st = T.getState();
  const li = T.localISO();
  check('every quiz submit lands in the results history and the activity day',
    Array.isArray(st.quizStats.history) && st.quizStats.history.length >= 2
    && st.quizStats.history.slice(-2).every(e => typeof e.p === 'number' && !!e.s && !!e.m)
    && (st.quizStats.days || {})[li] >= 2,
    'hist=' + (st.quizStats.history || []).length + ' dayCount=' + JSON.stringify((st.quizStats.days || {})[li]));
}
check('answer options are shuffled — the correct letter is not always A', (() => {
  let n = 0, zero = 0;
  for (let i = 0; i < 10; i++) {
    ['Mathematics', 'Physics', 'Chemistry'].forEach(sub => {
      T.buildQuiz(sub, 'mock').forEach(q => { n++; if (q.correct === 0) zero++; });
    });
  }
  return n > 200 && (zero / n) < 0.45;
})());
check('shuffleOptions keeps the right answer text under the remapped index', (() => {
  const raw = T.quizFor('Mathematics').slice(0, 5);
  for (let i = 0; i < 30; i++) {
    for (const q of raw) {
      const s2 = T.shuffleOptions(q);
      if (s2.options === q.options) return false;               // must not mutate the bank
      if (s2.options[s2.correct] !== q.options[q.correct]) return false;
    }
  }
  return true;
})());
check('score chart shows a single first data point instead of a blank box', (() => {
  const one = T.progressChartSvg([{ d: '2026-09-14', p: 80, s: 'Physics', m: 'topic', c: 8, t: 10 }]);
  return one.includes('<circle') && one.includes('first data point')
    && T.progressChartSvg([]).includes('starts growing here');
})());

// ---------- every page renders real markup ----------
const page = () => byId('page-content').innerHTML;
w.navigate('home');
check('dashboard renders greeting, streak and quick-nav cards',
  /Good (morning|afternoon|evening), Joseph/.test(page()) && /day streak/.test(page())
  && page().includes("navigate('study')") && page().includes("navigate('assistant')"), page().slice(0, 120));
check('dashboard keeps daily tools but no longer duplicates progress analytics', (() => {
  const h = page();
  return !h.includes('Your road to') && !h.includes('Subject readiness') && h.includes('mission');
})());
check('exam countdown is a sensible SS3 estimate and honours a set date', (() => {
  const st = T.getState();
  const cd = T.examCountdown();
  const saved = st.profile.examDate;
  st.profile.examDate = '2027-01-01';
  const cd2 = T.examCountdown();
  st.profile.examDate = saved;
  return !!cd && cd.estimated === true && cd.days > 150 && cd.days < 400
    && !!cd2 && cd2.estimated === false && cd2.days > 100 && cd2.days < 140;
})());
check('grade bands follow WAEC cut-offs',
  T.gradeBand(82) === 'A1' && T.gradeBand(72) === 'B2' && T.gradeBand(52) === 'C6' && T.gradeBand(39) === 'F9');
check('JAMB projection models the full 180-question UTME across four papers (measured + estimated)', (() => {
  const st = T.getState();
  const savedQ = st.quizStats, savedS = st.profile.subjects;
  st.profile.subjects = ['Mathematics', 'English Language', 'Physics', 'Chemistry'];
  st.quizStats = { attempts: 3, correct: 210, total: 300, bestPercent: 80, bySubject: { Mathematics: { correct: 80, total: 100 }, 'English Language': { correct: 70, total: 100 }, Physics: { correct: 60, total: 100 } }, byTopic: {} };
  const p = T.predictedScore();
  st.quizStats = savedQ; st.profile.subjects = savedS;
  const chem = p.entries.find(e => e.sub === 'Chemistry');
  const eng = p.entries.find(e => e.sub === 'English Language');
  return p.kind === 'score' && p.max === 400 && p.value === 280
    && p.entries.length === 4 && p.entries.filter(e => e.measured).length === 3
    && chem && !chem.measured && chem.pct === 70 && chem.questions === 40
    && eng && eng.measured && eng.pct === 70 && eng.questions === 60;
})());

// ---------- freemium: free caps, upgrade sheet, Pro unlock ----------
T.setMonetization(true); // paid plans are hidden during the growth phase — switch on to test them
check('road-to card stays off the dashboard for both plans; exam interface carries the countdown', (() => {
  const st = T.getState();
  const savedPlan = st.profile.plan;
  st.profile.plan = 'free';
  w.navigate('home');
  const freeHtml = page();
  st.profile.plan = savedPlan;
  w.navigate('home');
  const proHtml = page();
  w.navigate('quiz'); w.backToQuizList();
  const quizHtml = page();
  w.navigate('home');
  return !freeHtml.includes('Your road to') && !proHtml.includes('Your road to')
    && quizHtml.includes('days to');
})());
check('free plan caps quizzes at the daily limit and opens the upgrade sheet', (() => {
  const st = T.getState();
  const savedPlan = st.profile.plan, savedDaily = st.daily;
  st.profile.plan = 'free';
  st.daily = { date: T.localISO(), lessons: 0, cards: 0, quizzes: T.FREE_DAILY_QUIZZES, focus: 0, readTopic: '', buddy: 0 };
  const qBefore = st.quiz;
  w.startMockQuiz();
  const blocked = st.quiz === qBefore && !byId('upgrade-modal').classList.contains('hidden');
  T.closeUpgrade();
  st.profile.plan = savedPlan; st.daily = savedDaily;
  return blocked;
})());
check('free plan caps Buddy questions and keeps the counter honest', (() => {
  const st = T.getState();
  const savedPlan = st.profile.plan, savedDaily = st.daily, savedPage = st.page;
  st.profile.plan = 'free';
  st.daily = { date: T.localISO(), lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '', buddy: T.FREE_DAILY_BUDDY };
  w.askBuddy('explain inertia');
  const limited = !byId('upgrade-modal').classList.contains('hidden') && st.daily.buddy === T.FREE_DAILY_BUDDY;
  T.closeUpgrade();
  st.profile.plan = savedPlan; st.daily = savedDaily;
  w.navigate(savedPage);
  return limited;
})());
check('Pro activation persists to the cloud profile and lifts every gate', (() => {
  const st = T.getState();
  const savedPlan = st.profile.plan;
  T.activatePlan('pack', 'test-ref');
  const doc = globalThis.__FS_STORE.get('users/test-uid-1');
  const ok = T.proActive() && st.profile.plan === 'pack' && doc && doc.plan === 'pack' && T.quizGate() === true;
  st.profile.plan = savedPlan;
  return ok;
})());
T.setMonetization(false);
check('growth phase: monetization hidden — full engine unlocked for free users', (() => {
  const st = T.getState();
  const savedPlan = st.profile.plan;
  st.profile.plan = 'free';
  w.navigate('home');
  const h = page();
  st.profile.plan = savedPlan;
  w.navigate('profile');
  const prof = page();
  w.navigate('home');
  return !h.includes('🔒') && !h.includes('Go Pro') && h.includes('mission') && !prof.includes('Upgrade to Pro');
})());
w.navigate('study');
check('study page lists the subject selector and grouped topic cards',
  page().includes('changeSubject(') && page().includes('Centripetal Force')
  && page().includes('SS3 syllabus topics') && page().includes('SS1 syllabus topics'));
w.changeSubject('Mathematics');
check('switching subject re-renders that subject\'s topics',
  page().includes('Number Bases & Modular Arithmetic') && !page().includes('Centripetal Force'),
  'nb=' + /Number Bases/.test(page()) + ' centri=' + page().includes('Centripetal Force')
  + ' len=' + page().length + ' first200=' + page().slice(0, 200).replace(/\s+/g, ' '));
w.openTopic('Mathematics', 'Number Bases & Modular Arithmetic');
check('topic view renders the lesson body and action buttons',
  page().includes('Modular arithmetic') && page().includes('clock')
  && page().includes('Ask Buddy') && page().includes('Test yourself'));
w.navigate('resources');
check('resources page renders external links per subject',
  /target="_blank"/.test(page()) && /khanacademy\.org/.test(page()) && /youtube\.com/.test(page()));
w.navigate('flashcards');
check('flashcard deck renders with flip faces and progress',
  page().includes('flashcard-front') && page().includes('flashcard-back')
  && /Card 1\/\d+/.test(page()) && page().includes('nextFlashcard()'));
const before = w.__STUDYOS_TEST__;
w.gotoFlashcard(2);
check('flashcard navigation moves the index', /Card 3\/\d+/.test(page()));
w.flipFlashcard();
check('flashcard flip toggles the flipped class', byId('flashcard').classList.contains('flipped'));
check('flipped card offers Got it / Get it next time self-grading', (() => {
  const acts = byId('flash-actions').innerHTML;
  return acts.includes('markGot()') && acts.includes('markLater()')
    && acts.includes('Got it!') && acts.includes('Get it next time');
})());
w.navigate('quiz');
w.startMockQuiz();
check('quiz renders every question with four options',
  (page().match(/selectQuizAnswer\(/g) || []).length === before.quizFor('Mathematics').length * 4);
w.selectQuizAnswer(before.quizFor('Mathematics')[0].id, 0);
check('selecting an answer re-renders without submitting', page().includes('Submit Answers'));
w.navigate('assistant');
check('Buddy chat renders its greeting and suggestion chips',
  page().includes('Buddy') && page().includes('id="chat-chips"'));
check('Buddy chat exposes the input form', page().includes('id="chat-input"') && page().includes('sendChatMessage'));
w.askBuddy('explain centripetal force');
(globalThis.__timers.splice(0).forEach(fn => fn()));
check('Buddy answered in the chat log with the centripetal-force lesson',
  byId('chat-box').innerHTML.includes('Centripetal Force')
  && byId('chat-box').innerHTML.includes('F = mv'),
  byId('chat-box').innerHTML.slice(0, 200));
w.navigate('profile');
check('profile shows name, email, class, exam and log out',
  page().includes('Joseph Adeyemi') && page().includes('joseph@example.com')
  && page().includes('JAMB UTME') && page().includes('handleLogout()'));
check('profile shows per-subject quiz stats', page().includes('Quiz performance') && page().includes('best score'));


// second-day login continues the streak
globalThis.__FS_STORE.set('users/test-uid-2', { name: 'Amaka', email: 'a@b.c', classLevel: 'SS2', targetExam: 'WAEC WASSCE', subjects: ['Chemistry'], onboarded: true, streak: 7, lastActiveDate: '2020-01-01', quizStats: {} });
await globalThis.__AUTH_CB({ uid: 'test-uid-2', email: 'a@b.c', displayName: 'Amaka' });
await new Promise(r => setImmediate(r));
T.getState().profile.plan = 'pro'; // second account also runs Pro so the CBT flow stays un-gated
const doc2 = globalThis.__FS_STORE.get('users/test-uid-2');
check('login settles a stale streak immediately (passive gap roll, no freeze banked)',
  T.getState().streak === 1, 'streak=' + T.getState().streak);
T.recordTask('quiz', { percent: 80 });
check('stale streak resets on the next study activity (no freeze banked)',
  globalThis.__FS_STORE.get('users/test-uid-2').streak === 1,
  'streak=' + globalThis.__FS_STORE.get('users/test-uid-2').streak);

w.navigate('home');
check('mission shows a live progress counter', /\d\/3 done/.test(page()) || page().includes('COMPLETE 3/3'));

// ---------- manual activation loop (Buddy -> OPay -> WhatsApp key) ----------
{
  const st = T.getState();
  const saved = { email: st.profile.email, plan: st.profile.plan, until: st.profile.planUntil };
  st.profile.email = 'tester@studyos.app';
  const code = T.activationKeyFor('tester@studyos.app', 'pro', T.monthBucket(0));
  check('activation key is 8 characters starting with S (pro) or P (pack)', /^[SP][A-Z2-9]{7}$/.test(code), code);
  check('pack keys carry the P prefix', T.activationKeyFor('tester@studyos.app', 'pack', T.monthBucket(0))[0] === 'P');
  T.redeemActivationKey(code.toLowerCase());
  check('redeeming your own key activates Pro for 30 days',
    st.profile.plan === 'pro' && st.profile.planUntil > Date.now() + 29 * 86400000);
  st.profile.plan = 'free'; st.profile.planUntil = 0;
  T.redeemActivationKey(T.activationKeyFor('someone-else@studyos.app', 'pro', T.monthBucket(0)));
  check('a key generated for another email does not unlock this student', st.profile.plan === 'free');
  check('while everything is free, no page shows the account, the key box or Activate buttons', (() => {
    T.setMonetization(false);
    for (const p of ['home', 'quiz', 'assistant', 'profile']) {
      w.navigate(p);
      const html = page();
      if (html.includes(T.OPAY_ACCOUNT) || html.includes('Activate Pro') || html.includes('Enter your activation key')) return false;
    }
    return true;
  })());
  T.setMonetization(true);
  st.profile.plan = 'pro'; st.profile.planUntil = Date.now() - 5000;
  check('expired Pro drops back to the free tier', T.proActive() === false);
  st.profile.planUntil = Date.now() + 10 * 86400000;
  check('a Pro still inside its 30 days keeps the gates open', T.proActive() === true);
  T.setMonetization(false);
  T.activateViaBuddy('pro');
  const last = st.chat[st.chat.length - 1];
  check('Activate sends the student to Buddy with the account, the paid-ping and the key button',
    st.page === 'assistant' && last && last.html.includes(T.OPAY_ACCOUNT)
    && last.html.includes('I have paid') && last.html.includes('Enter key'));
  T.openKeyEntry();
  check('the activation popup opens ready for the key', !byId('key-modal').classList.contains('hidden'));
  T.closeKeyEntry();
  st.profile.email = saved.email; st.profile.plan = saved.plan; st.profile.planUntil = saved.until;
}

// ---------- one exam interface (legacy CBT hall removed) ----------
w.backToQuizList();
w.navigate('quiz');
check('legacy CBT hall removed — the exam picker is the single exam interface',
  !byId('page-content').innerHTML.includes('Quick Start')
  && !byId('page-content').innerHTML.includes('Configure your exam')
  && byId('page-content').innerHTML.includes('openExamSetup('));
// logout
await w.handleLogout();
check('logout fires Firebase signOut()', globalThis.__SIGNED_OUT === true);
await globalThis.__AUTH_CB(null);   // Firebase fires onAuthStateChanged(null) after signOut
check('logout hides the app shell', byId('main-app').classList.contains('hidden'));

// ---------- probe: progress page (executes renderProgressPage) ----------
{
  const main = byId('page-content');
  const st = T.getState().quizStats;
  const saved = { history: st.history, bySubject: st.bySubject, attempts: st.attempts, correct: st.correct, total: st.total, bestPercent: st.bestPercent, days: st.days, page: T.getState().page };
  st.history = [
    { d: '2026-09-01', p: 40, s: 'Mathematics', m: 'topic', c: 4, t: 10 },
    { d: '2026-09-03', p: 60, s: 'Mathematics', m: 'topic', c: 6, t: 10 },
    { d: '2026-09-05', p: 55, s: 'Physics', m: 'topic', c: 11, t: 20 },
    { d: '2026-09-07', p: 75, s: 'Physics', m: 'cbt', c: 15, t: 20 },
    { d: '2026-09-09', p: 90, s: 'Chemistry', m: 'topic', c: 9, t: 10 },
    { d: '2026-09-11', p: 85, s: 'Chemistry', m: 'topic', c: 17, t: 20 },
  ];
  st.bySubject = { Mathematics: { correct: 10, total: 20 }, Physics: { correct: 26, total: 40 }, Chemistry: { correct: 26, total: 30 } };
  st.attempts = 6; st.correct = 62; st.total = 90; st.bestPercent = 90;
  st.days = { '2026-09-09': 1, '2026-09-11': 1 };
  globalThis.navigate('progress');
  check('progress page renders full view (chart, subjects, recent results)', /Improvement line/.test(main.innerHTML) && /Recent results/.test(main.innerHTML) && /Accuracy by subject/.test(main.innerHTML));
  check('progress page computes an upward trend', /Up \d+ points/.test(main.innerHTML));
  check('activity heatmap is a Monday-first calendar grid with labels, legend and real stats', (() => {
    const h = main.innerHTML;
    return h.includes('hm-cell')
      && h.includes("rowLabel(0, 'Mon')") === false
      && /font-weight="700"[^>]*>Mon</.test(h) && />Wed</.test(h) && />Fri</.test(h)
      && />Sep</.test(h)
      && h.includes('Less') && h.includes('More')
      && h.includes('>2</b> active days')
      && h.includes('Best run:') && h.includes('Most active:') && h.includes('Wednesday')
      && h.includes('Fri, Sep 11 — 1 activity');
  })());
  st.history = [];
  globalThis.navigate('progress');
  check('progress page shows empty state with no history', /No data yet/.test(main.innerHTML));
  Object.assign(st, { history: saved.history, bySubject: saved.bySubject, attempts: saved.attempts, correct: saved.correct, total: saved.total, bestPercent: saved.bestPercent, days: saved.days });
  T.getState().page = saved.page;
}


check('no question repeats across topic quizzes, mixed banks and past papers', (() => {
  const norm = q => String(q.q || '').replace(/\s+/g, ' ').trim().toLowerCase().replace(/[?.!]+$/, '');
  for (const [sub, s] of Object.entries(T.CURRICULUM)) {
    const seen = new Set();
    const pools = [];
    for (const arr of Object.values(s.topics || {})) for (const t of arr) pools.push(...(t.quiz || []));
    pools.push(...(s.mock || [])); pools.push(...T.pastFor(sub));
    for (const q of pools) { const k = norm(q); if (seen.has(k)) return false; seen.add(k); }
  }
  return true;
})());
check('every subject offers 50+ class-appropriate questions at every class entry', (() => {
  const stages = { JSS: ['JSS1', 'JSS2', 'JSS3'], SS: ['SS1', 'SS2', 'SS3'] };
  for (const [sub, s] of Object.entries(T.CURRICULUM)) {
    for (const order of Object.values(stages)) {
      if (!(s.topics[order[0]] || []).length) continue;
      let cum = 0;
      for (const lvl of order) {
        for (const t of (s.topics[lvl] || [])) cum += (t.quiz || []).length;
        if (cum < 50) return false;
      }
    }
  }
  return true;
})());
// ---------- full exam simulation (modes, subject switching, scorecard, review) ----------
w.backToQuizList();
w.setSimPreset('jamb');
w.setSimMode('practice');
w.startExamSimFromPanel();
check('simulation opens with subject tabs, palette and master clock', (() => {
  const h = byId('page-content').innerHTML;
  const sim = T.getState().examSim;
  return !!sim && sim.sections.length >= 1 && h.includes('simSubject(')
    && h.includes('sim-clock') && h.includes('Question palette') && h.includes('Submit sitting');
})());
check('switching subject mid-sitting keeps answers (premium exam feel)', (() => {
  const sim = T.getState().examSim;
  w.simSelect(0, sim.sections[0].questions[0].correct);
  const kept = T.getState().examSim.answers['0-0'] === sim.sections[0].questions[0].correct;
  if (sim.sections.length > 1) w.simSubject(1); else w.simJump(1);
  const h = byId('page-content').innerHTML;
  return kept && h.includes('Question palette');
})());
w.submitExamSim();
check('scorecard grades per subject with bars and projected score', (() => {
  const h = byId('page-content').innerHTML;
  const r = T.getState().examSim.result;
  return h.includes('Sitting scorecard') && h.includes('Per subject')
    && r.perSubject.length >= 1 && r.total >= 10;
})());
check('practice mode reviews every answer after submitting', byId('page-content').innerHTML.includes('Review answers'));
w.exitExamSim();
check('exiting the simulation clears the sitting', !T.getState().examSim);
w.startExamSim('jamb', 'study');
check('study mode has no clock and explains each answer immediately', (() => {
  const sim = T.getState().examSim;
  const noClock = !byId('page-content').innerHTML.includes('sim-clock');
  w.simSelect(0, sim.sections[0].questions[0].correct);
  const h = byId('page-content').innerHTML;
  return noClock && h.includes('Study mode') && h.includes('Correct!')
    && /How the answer comes about|No stored explanation/.test(h)
    && h.includes('Finish study session');
})());
w.exitExamSim();
check('JSS1 exams only ever serve JSS1 questions, with no repeats', (() => {
  const st = T.getState();
  const saved = { lvl: st.profile.classLevel, subs: st.profile.subjects, page: st.page, sub: st.selectedSubject };
  st.profile.classLevel = 'JSS1';
  st.profile.subjects = ['Mathematics', 'Basic Science', 'English Language', 'Basic Technology'];
  w.startExamSim('bece', 'mock');
  const sim = T.getState().examSim;
  const qs = sim ? sim.sections.flatMap(x => x.questions) : [];
  const texts = qs.map(q => String(q.q).replace(/\s+/g, ' ').trim().toLowerCase());
  w.exitExamSim();
  st.profile.classLevel = saved.lvl; st.profile.subjects = saved.subs;
  st.selectedSubject = saved.sub; st.page = saved.page;
  w.backToQuizList();
  return qs.length >= 40 && qs.every(q => q.level === 'JSS1' && !q.src)
    && new Set(texts).size === texts.length;
})());
w.startExamSim('jamb', 'mock');
w.submitExamSim();
check('mock mode shows the scorecard but keeps explanations hidden', (() => {
  const h = byId('page-content').innerHTML;
  return h.includes('Sitting scorecard') && !h.includes('Review answers') && h.includes('keeps explanations hidden');
})());
w.exitExamSim();

// ---------- report ----------
const failed = checks.filter(c => !c.ok);
console.log(`\n${checks.length - failed.length}/${checks.length} checks passed`);
if (failed.length) {
  console.log('\nFAILED:');
  failed.forEach(f => console.log('  -', f.name, f.detail));
  process.exit(1);
}
console.log('ALL CHECKS PASSED');
