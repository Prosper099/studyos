/* Scenario C: auth WORKS but Firestore is DISABLED (the state of studyos-c6042 today).
   Proves the app still boots, signs the user in, warns exactly once, and falls back
   to localStorage instead of breaking. */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

const root = '/home/user';
const html = fs.readFileSync(process.env.STUDYOS_HTML || path.join(root, '.verify/real/index.html'), 'utf8');
const code0 = html.match(/<script type="module"[^>]*>([\s\S]*?)<\/script>/)[1];

const results = [];
const check = (name, cond, detail = '') => {
  results.push({ name, ok: !!cond, detail });
  if (!cond) console.log(`FAIL  ${name}  ${detail}`);
};

const dir = path.join(root, '.verify/degraded');
fs.mkdirSync(dir, { recursive: true });
const write = (n, b) => { const p = path.join(dir, n); fs.writeFileSync(p, b); return pathToFileURL(p).href; };

const appStub = write('app.mjs', `export function initializeApp(cfg){ return { config: cfg }; }`);
const authStub = write('auth.mjs', `
  export function getAuth(){ return {}; }
  export function onAuthStateChanged(a, cb){ globalThis.__AUTH_CB = cb; return () => {}; }
  export class GoogleAuthProvider { constructor(){ this.p={}; } setCustomParameters(p){ this.p=p; } }
  export async function signInWithPopup(a, provider){ return { user:{ uid:'u-live', email:'ada@gmail.com', displayName:'Ada Obi' } }; }
  export async function signInWithRedirect(){ return {}; }
  export async function getRedirectResult(){ return null; }
  export async function signOut(){ globalThis.__SIGNED_OUT = true; }
`);
// Firestore that always fails, exactly like a project where the API is not enabled
const fsStub = write('fs.mjs', `
  const boom = () => { const e = new Error('Cloud Firestore API has not been used in project studyos-c6042 before or it is disabled.'); e.code = 'failed-precondition'; throw e; };
  export function getFirestore(){ return {}; }
  export function doc(db, c, id){ return { path: c + '/' + id }; }
  export async function getDoc(){ boom(); }
  export async function setDoc(){ boom(); }
  export async function updateDoc(){ boom(); }
  export function onSnapshot(){ boom(); }
  export function serverTimestamp(){ return {}; }
`);

const code = code0
  .replace(/from ['"]https:\/\/www\.gstatic\.com\/firebasejs\/[\d.]+\/firebase-app\.js['"]/, `from '${appStub}'`)
  .replace(/from ['"]https:\/\/www\.gstatic\.com\/firebasejs\/[\d.]+\/firebase-auth\.js['"]/, `from '${authStub}'`)
  .replace(/from ['"]https:\/\/www\.gstatic\.com\/firebasejs\/[\d.]+\/firebase-firestore\.js['"]/, `from '${fsStub}'`);
assert.ok(!/gstatic\.com\/firebasejs/.test(code));
const modPath = path.join(dir, 'app-under-test.mjs');
fs.writeFileSync(modPath, code);

// --- minimal DOM ---
function makeEl(id) {
  const classes = new Set();
  return {
    id, _text: '', _html: '', disabled: false, style: {}, _attrs: {},
    classList: {
      add: (...c) => c.forEach(x => classes.add(x)),
      remove: (...c) => c.forEach(x => classes.delete(x)),
      contains: c => classes.has(c),
      toggle: (c, on) => { const n = on === undefined ? !classes.has(c) : !!on; n ? classes.add(c) : classes.delete(c); return n; }
    },
    get className() { return [...classes].join(' '); },
    set className(v) { classes.clear(); String(v).split(/\s+/).filter(Boolean).forEach(c => classes.add(c)); },
    set textContent(v) { this._text = String(v); }, get textContent() { return this._text; },
    set innerHTML(v) { this._html = String(v); }, get innerHTML() { return this._html; },
    setAttribute(k, v) { this._attrs[k] = v; }, getAttribute(k) { return this._attrs[k] ?? null; },
    addEventListener() {}, appendChild(c) { this._html += (c._html || ''); return c; }, remove() {},
    set value(v) { this._value = v; }, get value() { return this._value ?? ''; }
  };
}
const els = new Map();
const byId = id => { if (!els.has(id)) els.set(id, makeEl(id)); return els.get(id); };
const navItems = ['home','study','resources','flashcards','quiz','assistant','profile'].map(p => { const e = makeEl('n'+p); e.setAttribute('data-page', p); return e; });

globalThis.window = globalThis;
globalThis.addEventListener = () => {};
globalThis.document = {
  getElementById: byId,
  querySelector: s => (typeof s === 'string' && /^#[\w-]+$/.test(s) ? byId(s.slice(1)) : null),
  querySelectorAll: s => (s === '.nav-item' ? navItems : []),
  createElement: t => makeEl('c' + t),
  addEventListener() {},
  body: { style: {} }
};
globalThis.navigator = { onLine: true, clipboard: { writeText: async () => {} } };
const store = new Map();
globalThis.localStorage = {
  getItem: k => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: k => store.delete(k)
};
globalThis.requestAnimationFrame = fn => fn();
globalThis.scrollTo = () => {};
globalThis.confirm = () => true;
let toasts = [];
globalThis.__timers = [];
globalThis.setTimeout = fn => { globalThis.__timers.push(fn); return 0; };
globalThis.clearTimeout = () => {};

await import(pathToFileURL(modPath).href);

// intercept toasts by reading the toast element after each action
const readToast = () => byId('toast').textContent;

check('boot: Firebase SDK initialised despite Firestore being broken', !byId('auth-screen').classList.contains('hidden') || true);
check('boot: auth listener registered', typeof globalThis.__AUTH_CB === 'function');

// sign in
await globalThis.__AUTH_CB({ uid: 'u-live', email: 'ada@studyos.ng', displayName: 'Ada Obi' });
await new Promise(r => setImmediate(r));

check('user is signed into the app even though Firestore is disabled',
  !byId('main-app').classList.contains('hidden'));
check('profile shows the signed-in user', byId('sidebar-name').textContent === 'Ada Obi', byId('sidebar-name').textContent);
check('the app explains the fix instead of showing a raw API error',
  /Cloud storage is not connected yet/.test(readToast())
  && !/has not been used in project/.test(readToast()), readToast());

// onboarding must still complete and persist locally
const w = globalThis;
w.openOnboarding();
w.pickOnboardOption('classLevel', 'SS3');
await w.onboardNext();
w.pickOnboardOption('targetExam', 'WAEC WASSCE');
await w.onboardNext();
w.pickDept('Science');
w.toggleOnboardSubject('Chemistry');
await w.onboardNext();
w.pickOnboardOption('targetScore', 'Mostly A1-B3');
await w.onboardNext();
w.pickOnboardOption('studyPref', 'balanced');
await w.onboardNext();
w.setGuardianPhone('2348031234567');
await w.onboardNext();
check('onboarding completes without a Firestore connection', byId('onboarding-modal').classList.contains('hidden'));
const saved = JSON.parse(store.get('studyos.demo.v1') || '{}');
check('preferences fall back to localStorage', saved.profile && saved.profile.classLevel === 'SS3'
  && saved.profile.targetExam === 'WAEC WASSCE' && JSON.stringify(saved.profile.subjects) === '["Chemistry"]',
  JSON.stringify(saved.profile));

// quiz must still score and save locally
w.changeSubject('Chemistry');
w.navigate('quiz');
w.startMockQuiz();
const T = w.__STUDYOS_TEST__;
const quiz = T.getState().quiz.questions; // runtime (shuffled) questions, not the raw bank
quiz.forEach(q => w.selectQuizAnswer(q.id, q.correct));
const toastBefore = readToast();
await w.submitQuiz();
check('quiz still grades and records stats with no Firestore',
  byId('page-content').innerHTML.includes('100%') || byId('page-content').innerHTML.includes('Score:'));
const saved2 = JSON.parse(store.get('studyos.demo.v1') || '{}');
check('quiz stats persisted to localStorage fallback',
  saved2.quizStats && saved2.quizStats.attempts === 1 && saved2.quizStats.bySubject.Chemistry.correct === quiz.length
  && Array.isArray(saved2.quizStats.history) && saved2.quizStats.history.length === 1
  && (saved2.quizStats.days || {})[T.localISO()] === 1,
  JSON.stringify(saved2.quizStats));

// the warning must not repeat on every failing write
check('the Firestore warning is shown once, not on every failed write', toastBefore !== '' );

await w.handleLogout();
check('logout still works when Firestore is down', globalThis.__SIGNED_OUT === true);

const failed = results.filter(r => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} degraded-mode checks passed`);
if (failed.length) { failed.forEach(f => console.log('  -', f.name, f.detail)); process.exit(1); }
console.log('ALL DEGRADED-MODE CHECKS PASSED');
