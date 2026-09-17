
/* ==================================================================
   StudyOS — single-file app
   1. Firebase (v10 modular SDK, ES modules from gstatic CDN)
   2. Google Sign-In (signInWithPopup) + onAuthStateChanged persistence
   3. Cloud document: users/{uid}
   ================================================================== */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
  getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,
  signInWithRedirect, getRedirectResult, signOut
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

import { CURRICULUM } from './data/curriculum.mjs';
import { PASTQ } from './data/pastq.mjs';
import { escapeHtml, localISO } from './modules/utils.mjs';
import { chartSvgCore, progressChartSvg, showChartTip, hideChartTip, activityHeatSvg } from './modules/charts.mjs';
import './styles.css';

/* ------------------------------------------------------------------
   🔑 FIREBASE CONFIG — test fixture
   To point the app at a different project, replace the values below
   (Firebase Console → Project settings → General → Your apps → Web app).
   Reminder: Google sign-in must be enabled, and the Firestore
   security rules from the in-app ⚙️ setup guide must be published.
   ------------------------------------------------------------------ */
const firebaseConfig = {
  apiKey: 'AIzaSyCc841NRjMC8ny1-JXKr_5yLlNDAXwBwCo',
  authDomain: 'studyos-c6042.firebaseapp.com',
  projectId: 'studyos-c6042',
  storageBucket: 'studyos-c6042.firebasestorage.app',
  messagingSenderId: '829614734062',
  appId: '1:829614734062:web:9a5d80b9996163d12ed1ff',
  measurementId: 'G-XP925JQC2G'
};

const PLACEHOLDER = /^YOUR_/;
const isConfigured = !Object.values(firebaseConfig).some(v => typeof v === 'string' && PLACEHOLDER.test(v));

let app = null, auth = null, db = null, userUnsub = null;

/* ==================================================================
   APP STATE
   ================================================================== */
const STORAGE_KEY = 'studyos.demo.v1';

const state = {
  mode: 'firebase',          // 'firebase' | 'demo'
  uid: null,
  page: 'home',
  authTab: 'login',
  installAvailable: false,
  installed: false,
  onboard: { step: 1, classLevel: '', targetExam: '', subjects: [], targetScore: '', studyPref: '' },
  selectedSubject: 'Mathematics',
  profile: {
    name: '', email: '', classLevel: '', targetExam: '', targetScore: '', studyPref: '', plan: 'free', planRef: '', planSince: '',
    subjects: [], onboarded: false
  },
  streak: 0,
  lastActiveDate: '',
  streakFreezes: 0,
  badges: [],
  daily: null,
  tasks: { quizzes: 0, perfects: 0, cards: 0, sessions: 0, tasksTotal: 0,
           focusSessions: 0, focusMinutes: 0, pastDrills: 0, timedAces: 0, nightOwl: false, earlyBird: false },
  quizStats: { attempts: 0, correct: 0, total: 0, bestPercent: 0, bySubject: {} },
  quizSetup: { count: 50, minutes: 0 },
  examPrefs: { classLevel: '', examType: '', subjects: [], count: 20, counts: {}, minutes: 60, lastWeak: '' },
  examCustomOpen: false,
  focus: { active: false, endsAt: 0, minutes: 0 },
  quiz: { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' },
  flash: { idx: 0, flipped: false, topicFilter: '', got: 0, later: [], phase: 'main', retryDeck: [] },
  chat: [],
  settings: { research: true, geminiApiKey: '', geminiModel: 'gemini-2.5-flash', paystackKey: '' }
};

/* Live Gemini models (free tier). Buddy tries the chosen one first, then falls
   back down this list if Google has retired it — so a key never "just stops working". */
const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-3.1-flash-lite', 'gemini-3-flash-preview'];

const EXAM_OPTIONS = {
  SS: [
    { id: 'JAMB UTME', desc: '180 mins · 4 subjects · CBT' },
    { id: 'WAEC WASSCE', desc: 'Theory + objectives · SSCE certificate' },
    { id: 'NECO', desc: 'SSCE alternative · June/July series' },
    { id: 'Post-UTME', desc: 'University screening after JAMB' },
    { id: 'General', desc: 'School & termly exams · continuous assessment' }
  ],
  JSS: [
    { id: 'General', desc: 'School & termly exams · continuous assessment' },
    { id: 'BECE', desc: 'Junior WAEC · sat at the end of JSS 3' }
  ]
};

const OPTIONS = {
  classes: ['SS1', 'SS2', 'SS3', 'JSS1', 'JSS2', 'JSS3'],
  exams: EXAM_OPTIONS.SS,
  subjects: ['Mathematics', 'English Language', 'Basic Science', 'Basic Technology',
             'Physics', 'Chemistry', 'Biology', 'Government', 'Literature in English',
             'History', 'Economics', 'Commerce', 'Financial Accounting'],
  icons: {
    'Mathematics': '🧮', 'English Language': '📝',
    'Basic Science': '🔬', 'Basic Technology': '🛠️',
    'Physics': '⚛️', 'Chemistry': '⚗️', 'Biology': '🧬',
    'Government': '🏛️', 'Literature in English': '📖', 'History': '🏺',
    'Economics': '📈', 'Commerce': '🛒', 'Financial Accounting': '🧾'
  }
};

/** Exams a student at a given class level may realistically target. */
function examsForLevel(classLevel) {
  const c = String(classLevel || '');
  if (c.startsWith('JSS')) return EXAM_OPTIONS.JSS.slice();
  if (c === 'SS3') return EXAM_OPTIONS.SS.slice();
  return EXAM_OPTIONS.SS.filter(e => ['WAEC WASSCE', 'NECO', 'General'].includes(e.id));
}

/** SS streams: core subjects plus the electives of the chosen department. */
const DEPT_LABELS = { Science: '🔬 Science', Arts: '🎭 Arts', Commercial: '💼 Commercial' };
const DEPARTMENTS = {
  Science: ['Physics', 'Chemistry', 'Biology'],
  Arts: ['Government', 'Literature in English', 'History'],
  Commercial: ['Economics', 'Commerce', 'Financial Accounting']
};

function weakestTopicInfo() {
  const lvl = state.profile.classLevel || 'SS3';
  const subs = (state.profile.subjects || []).length ? state.profile.subjects : subjectsForLevel(lvl);
  const bs = (state.quizStats && state.quizStats.bySubject) || {};
  let weakSub = null, weakPct = null, strongSub = null, strongPct = null;
  for (const sub of subs) {
    const b = bs[sub];
    if (!b || !b.total) continue;
    const p = Math.round((b.correct / b.total) * 100);
    if (weakPct === null || p < weakPct) { weakPct = p; weakSub = sub; }
    if (strongPct === null || p > strongPct) { strongPct = p; strongSub = sub; }
  }
  const bt = (state.quizStats && state.quizStats.byTopic) || {};
  let weakTop = null, topPct = null;
  for (const [key, b] of Object.entries(bt)) {
    if (!b.total || b.total < 3) continue;
    if (weakSub && !key.startsWith(weakSub + ' | ')) continue;
    const p = Math.round((b.correct / b.total) * 100);
    if (topPct === null || p < topPct) { topPct = p; weakTop = key.split(' | ')[1]; }
  }
  return { weakSub, weakPct, strongSub, strongPct, weakTop, topPct };
}
function smartCoachReply() {
  const w = weakestTopicInfo();
  if (!w.weakSub) {
    return {
      html: mdToHtml("No stats on you yet — and that is fine, diagnostic week is how I learn your strengths. 🕵️\n\nTake **two or three topic quizzes** in any of your subjects and I will start coaching you personally: weakest topic first, strongest topic for confidence."),
      chips: ['Next topic in my subject', 'Give me a study plan', examTipsChip()]
    };
  }
  const lines = [`Your growth edge right now is **${w.weakSub} at ${w.weakPct}%**.`];
  if (w.weakTop) lines.push(`Inside it, **${w.weakTop} (${w.topPct}%)** is the one topic that moves your score fastest — start there.`);
  else lines.push('A couple more quizzes will tell me exactly which topic to send you to first.');
  if (w.strongSub && w.strongSub !== w.weakSub) lines.push(`Warm up with **${w.strongSub} (${w.strongPct}%)** when you want a confidence win.`);
  lines.push('');
  lines.push(String(state.profile.classLevel || '').startsWith('JSS')
    ? 'Steady small wins now are exactly how BECE champions are made. 🔥'
    : 'Weak-topic-first is how the big exams are actually won. 🔥');
  return {
    html: mdToHtml(lines.join('\n')),
    chips: ['Explain ' + (w.weakTop || w.weakSub), 'Give me a study plan', examTipsChip()]
  };
}
function progressReportReply() {
  const qs = state.quizStats || {};
  if (!qs.attempts) {
    return {
      html: mdToHtml("Your report card is empty for now — your first quiz writes line one. 📊\n\nTry a topic quiz in any subject and ask me again."),
      chips: ['Next topic in my subject', 'Give me a study plan']
    };
  }
  const w = weakestTopicInfo();
  const acc = qs.total ? Math.round((qs.correct / qs.total) * 100) : 0;
  const lines = [
    `**${state.profile.name ? state.profile.name.split(' ')[0] + ', here' : 'Here'} is your report:**`,
    '',
    `• Quizzes taken: **${qs.attempts}** · overall accuracy **${acc}%** · best score **${qs.bestPercent || 0}%**`,
    `• Strongest: **${w.strongSub || '—'}${w.strongPct != null ? ' (' + w.strongPct + '%)' : ''}** · growth edge: **${w.weakSub || '—'}${w.weakPct != null ? ' (' + w.weakPct + '%)' : ''}**`,
    `• Streak: **${state.streak} day${state.streak === 1 ? '' : 's'}** 🔥`,
    ''
  ];
  lines.push(String(state.profile.classLevel || '').startsWith('JSS')
    ? 'Honest coach note: consistency is beating intensity for you — keep the daily mission green and the BECE takes care of itself.'
    : 'Honest coach note: attack the growth edge twice this week and watch that percentage climb.');
  return { html: mdToHtml(lines.join('\n')), chips: ['What should I study?', 'Give me a study plan', examStrategyChip()] };
}
function examStrategyChip() {
  return String(state.profile.classLevel || '').startsWith('JSS') ? 'BECE exam strategy' : 'JAMB exam strategy';
}
function examTipsChip() {
  return String(state.profile.classLevel || '').startsWith('JSS') ? 'BECE exam tips' : 'WAEC exam tips';
}
function buddyExamLine() {
  const c = String(state.profile.classLevel || '');
  if (c.startsWith('JSS')) return 'the BECE (Junior WAEC)';
  if (c === 'SS1' || c === 'SS2') return 'WAEC WASSCE and NECO';
  return 'JAMB UTME and WAEC WASSCE';
}

/* ==================================================================
   CURRICULUM DATABASE (subject → class level → topics)
   ================================================================== */
/* CURRICULUM moved to src/data/curriculum.mjs */

/* Class levels share a subject’s topic pool; SS3 (and Post-UTME/JAMB) also see SS1+SS2 review topics. */
const LEVEL_CATALOGUE = {
  JSS1: ['Mathematics', 'English Language', 'Basic Science', 'Basic Technology'],
  JSS2: ['Mathematics', 'English Language', 'Basic Science', 'Basic Technology'],
  JSS3: ['Mathematics', 'English Language', 'Basic Science', 'Basic Technology'],
  SS1:  ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology', 'Government', 'Literature in English', 'History', 'Economics', 'Commerce', 'Financial Accounting'],
  SS2:  ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology'],
  SS3:  ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology']
};

/** Subjects that actually exist for a class level (falls back to every subject). */
function subjectsForLevel(classLevel) {
  const list = LEVEL_CATALOGUE[classLevel];
  if (list) return list.slice();
  return Object.keys(CURRICULUM);
}

/** Subjects a student may choose in onboarding, given the class they picked. */
function selectableSubjects() {
  const lvl = String(state.onboard.classLevel || '');
  if (!lvl.startsWith('SS')) return subjectsForLevel(state.onboard.classLevel);
  const core = ['Mathematics', 'English Language'];
  return state.onboard.dept ? core.concat(DEPARTMENTS[state.onboard.dept] || []) : subjectsForLevel(lvl);
}

/** True when the chosen subject is valid for the student's class level. */
function subjectIsAvailable(subject) {
  return subjectsForLevel(state.profile.classLevel).includes(subject);
}

function topicsFor(subject, classLevel) {
  const s = CURRICULUM[subject] || CURRICULUM['Mathematics'];
  const lvl = OPTIONS.classes.includes(classLevel) ? classLevel : 'SS3';
  const own = (s.topics[lvl] || []);
  const isTerminal = (lvl === 'SS3' || lvl === 'JSS3');
  if (!isTerminal) {
    return own.map(t => ({ ...t, level: lvl }));
  }
  // Exam candidates revise everything, but only within their own section:
  // a JSS3 (BECE) student reviews JSS1-JSS2, never the senior science syllabus.
  const ladder = lvl === 'JSS3' ? ['JSS2', 'JSS1'] : ['SS2', 'SS1'];
  const review = ladder.flatMap(l => (s.topics[l] || []).map(t => ({ ...t, level: l })));
  return [...own.map(t => ({ ...t, level: lvl })), ...review];
}

/* ==================================================================
   BUDDY — BUILT-IN ACADEMIC KNOWLEDGE ENGINE
   Pattern-matched topic corpus + real algebra solvers.
   ================================================================== */
const BUDDY_KB = [
  // ---------------- MATHEMATICS ----------------
  {
    subject: 'Mathematics', title: 'Quadratic Equations',
    keywords: ['quadratic', 'discriminant', 'completing the square', 'b2 - 4ac', 'b2-4ac', 'roots of the equation', 'sum of roots', 'product of roots'],
    body: `
<h4>The standard form</h4>
<p>A quadratic equation is written <b>ax^2 + bx + c = 0</b> where a != 0. The highest power of x is 2, so it has at most two roots.</p>
<h4>Method 1 — The quadratic formula</h4>
<div class="box">x = ( -b ± √(b^2 - 4ac) ) / 2a</div>
<h4>Method 2 — Factorisation</h4>
<p>For x^2 + bx + c, find two numbers whose <b>product is c</b> and <b>sum is b</b>. Example: x^2 + 7x + 12 → 3 and 4 → (x + 3)(x + 4).</p>
<h4>The discriminant Δ = b^2 - 4ac</h4>
<ul><li>Δ &gt; 0 → two distinct real roots</li><li>Δ = 0 → two equal real roots</li><li>Δ &lt; 0 → no real roots</li></ul>
<h4>Sum and product of roots</h4>
<div class="box">α + β = -b/a     αβ = c/a</div>
<h4>Worked example</h4>
<p>Solve 2x^2 - 5x - 3 = 0. Here a = 2, b = -5, c = -3, so Δ = 25 + 24 = 49 and √Δ = 7.<br>
x = (5 ± 7)/4 → <b>x = 3</b> or <b>x = -1/2</b>.<br>Check: α + β = 2.5 = 5/2 = -b/a ✓</p>
<h4>JAMB trap</h4>
<p>"Find k if the roots are real and equal" always means set <b>b^2 - 4ac = 0</b> and solve. "Real and distinct" means &gt; 0.</p>`
  },
  {
    subject: 'Mathematics', title: 'Simultaneous Equations',
    keywords: ['simultaneous', 'elimination method', 'substitution method', 'two equations'],
    body: `
<h4>What they are</h4>
<p>Two equations with two unknowns. You need both equations to pin down a single pair of values.</p>
<h4>Method 1 — Elimination</h4>
<p>Make the coefficient of one variable equal in both equations, then add or subtract to remove it.</p>
<div class="box">2x + y = 11<br>x - y = 1<br>———— (add) ————<br>3x = 12 → x = 4<br>substitute: 4 - y = 1 → y = 3</div>
<h4>Method 2 — Substitution</h4>
<p>Make one variable the subject of one equation and substitute into the other.</p>
<div class="box">From x - y = 1 → x = y + 1<br>2(y + 1) + y = 11 → 3y = 9 → y = 3, x = 4</div>
<h4>Checking</h4>
<p>Substitute your answers into <b>both</b> original equations. It takes ten seconds and catches sign errors that cost full marks.</p>
<h4>Tip</h4>
<p>If both equations have the same gradient they are parallel and have <b>no</b> solution. If they are identical lines there are infinitely many.</p>`
  },
  {
    subject: 'Mathematics', title: 'Indices & Logarithms',
    keywords: ['indices', 'index', 'logarithm', 'log base', 'change of base', 'laws of indices', 'antilog'],
    body: `
<h4>Laws of indices</h4>
<div class="box">aᵐ × aⁿ = aᵐ⁺ⁿ<br>aᵐ ÷ aⁿ = aᵐ⁻ⁿ<br>(aᵐ)ⁿ = aᵐⁿ<br>a^0 = 1,  a⁻ⁿ = 1/aⁿ,  a^(1/n) = ⁿ√a</div>
<h4>Logs are the inverse of indices</h4>
<p>If aˣ = N, then log<sub>a</sub>N = x.</p>
<div class="box">log(ab) = log a + log b<br>log(a/b) = log a - log b<br>log aⁿ = n log a<br>change of base: log_a b = log b / log a</div>
<h4>Worked example</h4>
<p>Solve 2ˣ = 32. Write 32 as 2^5, so x = <b>5</b>.<br>
Solve log3(x - 2) = 2 → x - 2 = 3^2 = 9 → x = <b>11</b>.</p>
<h4>Exam tip</h4>
<p>Any log to an awkward base becomes a base-10 division with the change-of-base formula — that is how the WAEC log table question works.</p>`
  },
  {
    subject: 'Mathematics', title: 'Trigonometry',
    keywords: ['trigonometry', 'sine', 'cosine', 'tangent', 'soh cah toa', 'angle of elevation', 'angle of depression', 'bearing', 'sine rule', 'cosine rule'],
    body: `
<h4>Right-angled triangles — SOH CAH TOA</h4>
<div class="box">sin θ = opposite / hypotenuse<br>cos θ = adjacent / hypotenuse<br>tan θ = opposite / adjacent</div>
<h4>Non-right-angled triangles</h4>
<div class="box">Sine rule: a/sin A = b/sin B = c/sin C<br>Cosine rule: a^2 = b^2 + c^2 - 2bc cos A</div>
<h4>Elevation & depression</h4>
<p>Draw a right-angled triangle. The horizontal distance is the adjacent side and the height is the opposite side, so you will usually use <b>tan</b>.</p>
<div class="box">Height = distance × tan(angle of elevation)</div>
<p>Example: from 50 m away the angle of elevation of a tower is 30°. Height = 50 × 0.5774 ~= <b>28.9 m</b>.</p>
<h4>Bearings</h4>
<p>Measured <b>clockwise from North</b> and written with three figures (065°, not 65°). Always sketch North first.</p>
<h4>Useful values</h4>
<div class="box">sin 30° = 0.5,  cos 30° = 0.866,  tan 30° = 0.577<br>sin 45° = 0.707, cos 45° = 0.707, tan 45° = 1<br>sin 60° = 0.866, cos 60° = 0.5,   tan 60° = 1.732</div>`
  },
  {
    subject: 'Mathematics', title: 'Calculus — Differentiation & Integration',
    keywords: ['calculus', 'differentiation', 'differentiate', 'derivative', 'integration', 'integrate', 'turning point', 'maximum', 'minimum', 'gradient of a curve', 'area under the curve'],
    body: `
<h4>Differentiation gives the gradient</h4>
<div class="box">d/dx (a xⁿ) = a·n·xⁿ⁻^1<br>d/dx (constant) = 0</div>
<p>Example: y = 3x^3 - 4x^2 + 7x - 2 → dy/dx = <b>9x^2 - 8x + 7</b>.</p>
<h4>Finding turning points</h4>
<p>Set dy/dx = 0 and solve for x. Then use the second derivative: d^2y/dx^2 &gt; 0 → <b>minimum</b>; d^2y/dx^2 &lt; 0 → <b>maximum</b>.</p>
<div class="box">y = x^2 - 6x + 5<br>dy/dx = 2x - 6 = 0 → x = 3<br>d^2y/dx^2 = 2 &gt; 0 → minimum at (3, -4)</div>
<h4>Integration gives area</h4>
<div class="box">∫ a xⁿ dx = a xⁿ⁺^1/(n+1) + C<br>Area from x = a to x = b = ∫ₐᵇ y dx</div>
<p>Example: ∫0^2 3x^2 dx = [x^3]0^2 = 8 - 0 = <b>8 square units</b>.</p>
<h4>Exam language</h4>
<p>"Rate of change" → differentiate. "Area enclosed" → integrate. "Gradient of the tangent at x = 2" → differentiate then substitute.</p>`
  },
  {
    subject: 'Mathematics', title: 'Probability & Statistics',
    keywords: ['probability', 'mean', 'median', 'mode', 'standard deviation', 'variance', 'statistics', 'dice', 'mutually exclusive'],
    body: `
<h4>Probability rules</h4>
<div class="box">P(A or B) = P(A) + P(B) - P(A and B)<br>P(A and B) = P(A) × P(B)  [independent]<br>P(not A) = 1 - P(A),   0 <= P(A) <= 1</div>
<p><b>Mutually exclusive</b> events cannot happen together (so you just add). <b>Independent</b> events do not affect each other (so you multiply).</p>
<h4>Worked example</h4>
<p>A fair die is thrown. P(even or prime): even = {2,4,6}, prime = {2,3,5}, overlap = {2}.<br>
3/6 + 3/6 - 1/6 = <b>5/6</b>.</p>
<h4>Averages</h4>
<div class="box">Mean x̄ = Σfx / Σf<br>Variance = Σf(x - x̄)^2 / Σf<br>Standard deviation = √variance</div>
<p><b>Median</b> = middle value when ordered. <b>Mode</b> = most frequent value.</p>
<h4>WAEC tip</h4>
<p>For grouped data, always draw the full frequency table with fx and fx^2 columns — method marks are awarded for the table even if a sum slips.</p>`
  },
  {
    subject: 'Mathematics', title: 'Sets & Venn Diagrams',
    keywords: ['sets', 'venn', 'union', 'intersection', 'complement', 'universal set'],
    body: `
<h4>Notation</h4>
<ul><li><b>A ∪ B</b> — union: everything in A or B or both</li>
<li><b>A ∩ B</b> — intersection: only what is in both</li>
<li><b>A′</b> — complement: everything in ξ not in A</li>
<li><b>n(A)</b> — number of elements in A</li></ul>
<h4>The formula that solves most problems</h4>
<div class="box">n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</div>
<h4>Worked example</h4>
<p>In a class of 40, 25 offer Maths, 20 offer Physics, 10 offer both. How many offer neither?<br>
n(M ∪ P) = 25 + 20 - 10 = 35 → neither = 40 - 35 = <b>5</b>.</p>
<h4>Three sets</h4>
<p>Start from the innermost overlap (all three) and work outwards — fill the diagram before subtracting anything.</p>`
  },
  {
    subject: 'Mathematics', title: 'Sequences & Series',
    keywords: ['arithmetic progression', 'geometric progression', 'a.p.', 'g.p.', 'common difference', 'common ratio', 'sequence', 'series', 'sum to infinity'],
    body: `
<h4>Arithmetic Progression</h4>
<div class="box">T_n = a + (n - 1)d<br>S_n = n/2 [2a + (n - 1)d] = n/2 (a + l)</div>
<h4>Geometric Progression</h4>
<div class="box">T_n = a rⁿ⁻^1<br>S_n = a(1 - rⁿ)/(1 - r),  r != 1<br>S∞ = a/(1 - r),  |r| &lt; 1</div>
<h4>Worked examples</h4>
<p><b>A.P.:</b> sum of the first 20 multiples of 3 → a = 3, d = 3, n = 20 → S20 = 10[6 + 57] = <b>630</b>.<br>
<b>G.P.:</b> 8 + 4 + 2 + … → a = 8, r = 1/2 → S∞ = 8/(1 - 1/2) = <b>16</b>.</p>
<h4>Watch out</h4>
<p>"Insert 3 arithmetic means between 4 and 24" gives <b>5 terms</b> in total, so d = (24 - 4)/4 = 5.</p>`
  },

  // ---------------- PHYSICS ----------------
  {
    subject: 'Physics', title: 'Centripetal Force & Circular Motion',
    keywords: ['centripetal', 'centrifugal', 'circular motion', 'angular velocity', 'radius of the circle', 'banked'],
    body: `
<h4>Why a force is needed</h4>
<p>A body moving in a circle is always changing <b>direction</b>, so its velocity changes, so it accelerates. The acceleration points towards the centre: <b>centripetal acceleration</b>. The force producing it is the <b>centripetal force</b>.</p>
<div class="box">a = v^2/r = ω^2r<br>F = mv^2/r = mω^2r<br>v = ωr,   ω = 2π/T = 2πf</div>
<h4>Where the force comes from</h4>
<ul><li><b>Satellite or planet:</b> gravitational attraction</li>
<li><b>Car on a flat curve:</b> friction between tyre and road</li>
<li><b>Stone on a string:</b> tension in the string</li>
<li><b>Electron round a nucleus:</b> electrostatic attraction</li></ul>
<h4>Worked example</h4>
<p>A 0.5 kg stone on a 2 m string moves at 4 m/s.<br>F = mv^2/r = 0.5 × 16 / 2 = <b>4 N</b>.<br>If the string breaks, the stone flies off <b>tangentially</b> — never radially outwards.</p>
<h4>Exam trap</h4>
<p>"Centrifugal force" is not a real force in an inertial frame; it is the inertia felt by the passenger. The correct JAMB answer is always <b>centripetal</b>.</p>`
  },
  {
    subject: 'Physics', title: 'Newton’s Laws of Motion',
    keywords: ['newton', 'law of motion', 'inertia', 'f = ma', 'momentum', 'impulse', 'action and reaction'],
    body: `
<h4>The three laws</h4>
<ol><li><b>First law (inertia):</b> a body remains at rest or in uniform motion in a straight line unless acted on by an external resultant force.</li>
<li><b>Second law:</b> the rate of change of momentum is proportional to the applied force and in its direction → <b>F = ma</b>.</li>
<li><b>Third law:</b> to every action there is an equal and opposite reaction.</li></ol>
<h4>Equations of uniformly accelerated motion</h4>
<div class="box">v = u + at<br>s = ut + 1/2at^2<br>v^2 = u^2 + 2as<br>s = 1/2(u + v)t</div>
<h4>Worked example</h4>
<p>A car starts from rest and accelerates at 2 m/s^2 for 10 s.<br>v = 0 + 2(10) = <b>20 m/s</b>; s = 1/2(2)(100) = <b>100 m</b>.</p>
<h4>Momentum & impulse</h4>
<div class="box">p = mv  (kg m/s)<br>Impulse = F t = change in momentum</div>
<p>Take g ~= 9.8 m/s^2 unless the question tells you to use 10 m/s^2.</p>`
  },
  {
    subject: 'Physics', title: 'Work, Energy & Power',
    keywords: ['work done', 'kinetic energy', 'potential energy', 'conservation of energy', 'power', 'efficiency', 'joule'],
    body: `
<div class="box">Work W = F d cos θ   (joule)<br>K.E. = 1/2mv^2     P.E. = mgh<br>Power P = W/t = F v   (watt)<br>Efficiency = (useful output / total input) × 100%</div>
<h4>Conservation of energy</h4>
<p>Energy cannot be created or destroyed, only converted. A falling body converts P.E. into K.E.:</p>
<div class="box">mgh = 1/2mv^2  →  v = √(2gh)</div>
<h4>Worked example</h4>
<p>A 2 kg mass is dropped from 20 m (g = 10 m/s^2).<br>v = √(2 × 10 × 20) = √400 = <b>20 m/s</b>.</p>
<h4>Common mix-up</h4>
<p>Work is done only when the force has a component <b>along</b> the displacement. Carrying a bag horizontally does no work against gravity.</p>`
  },
  {
    subject: 'Physics', title: 'Current Electricity & Circuits',
    keywords: ['ohm', 'resistance', 'resistor', 'current', 'voltage', 'potential difference', 'series', 'parallel', 'electrical power', 'circuit'],
    body: `
<div class="box">V = I R<br>Series: R = R1 + R2 + …   (same current)<br>Parallel: 1/R = 1/R1 + 1/R2 + …  (same p.d.)<br>P = V I = I^2R = V^2/R<br>Energy = P t  (1 kWh = 3.6 × 10^6 J)</div>
<h4>Ohm's law</h4>
<p>The current through a metallic conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain constant.</p>
<h4>Worked example</h4>
<p>6 Ω and 3 Ω in parallel → R = (6 × 3)/(6 + 3) = <b>2 Ω</b>. With a 12 V supply, I = 12/2 = <b>6 A</b>.</p>
<h4>Memory aid</h4>
<p>Series adds resistances (longer wire = more resistance). Parallel reduces them (extra paths for the current) and the total is always <b>less than the smallest</b> resistor.</p>`
  },
  {
    subject: 'Physics', title: 'Waves & Simple Harmonic Motion',
    keywords: ['wave', 'wavelength', 'frequency', 'period', 'amplitude', 'simple harmonic', 'pendulum', 'transverse', 'longitudinal', 'diffraction', 'refraction', 'interference'],
    body: `
<div class="box">T = 1/f<br>v = f λ<br>Pendulum: T = 2π√(L/g)<br>Mass–spring: T = 2π√(m/k)</div>
<h4>Wave properties</h4>
<ul><li><b>Reflection</b> — bouncing back at a boundary (echo, mirror)</li>
<li><b>Refraction</b> — bending because speed changes (a straw looks bent in water)</li>
<li><b>Diffraction</b> — spreading round an obstacle or through a gap</li>
<li><b>Interference</b> — superposition producing maxima and minima</li></ul>
<p><b>Transverse</b> waves (light, ripples) vibrate perpendicular to travel; <b>longitudinal</b> waves (sound) vibrate parallel to it.</p>
<h4>Worked example</h4>
<p>f = 500 Hz, λ = 0.68 m → v = fλ = <b>340 m/s</b> (the speed of sound in air).</p>
<h4>Exam fact</h4>
<p>The period of a simple pendulum depends only on its length and g — <b>not</b> on the mass of the bob.</p>`
  },
  {
    subject: 'Physics', title: 'Radioactivity & Nuclear Physics',
    keywords: ['radioactivity', 'radioactive', 'half-life', 'alpha', 'beta', 'gamma', 'nuclear', 'isotope', 'decay'],
    body: `
<h4>The three radiations</h4>
<ul><li><b>Alpha (α):</b> helium nucleus ^42He, heavily ionising, stopped by paper</li>
<li><b>Beta (β):</b> fast electron, stopped by a few mm of aluminium</li>
<li><b>Gamma (γ):</b> electromagnetic wave, very penetrating, reduced only by thick lead</li></ul>
<h4>Half-life</h4>
<p>The time for half the radioactive nuclei in a sample to decay. After n half-lives the fraction left is (1/2)ⁿ.</p>
<div class="box">N = N0 (1/2)^(t / T1/2)</div>
<h4>Worked example</h4>
<p>A sample falls from 800 to 100 counts with a half-life of 5 years. 800 → 400 → 200 → 100 is 3 half-lives → <b>15 years</b>.</p>
<h4>Balancing decay equations</h4>
<p>Both the mass number (top) and the atomic number (bottom) must balance. Alpha emission reduces the mass number by 4 and the atomic number by 2; beta emission leaves the mass number unchanged and raises the atomic number by 1.</p>`
  },
  {
    subject: 'Physics', title: 'Projectile Motion',
    keywords: ['projectile', 'time of flight', 'horizontal range', 'maximum height', 'launched'],
    body: `
<h4>The key idea</h4>
<p>Treat the two directions separately: horizontal velocity is <b>constant</b> (ignoring air resistance) while the vertical motion has acceleration g downwards.</p>
<div class="box">Time of flight  T = 2u sin θ / g<br>Maximum height  H = u^2 sin^2θ / 2g<br>Horizontal range R = u^2 sin 2θ / g</div>
<p>Range is greatest at <b>θ = 45°</b> because sin 2θ = sin 90° = 1.</p>
<h4>Worked example</h4>
<p>u = 20 m/s, θ = 30°, g = 10 m/s^2.<br>T = 2(20)(0.5)/10 = <b>2 s</b><br>R = 400 × sin 60° / 10 = 400 × 0.866 / 10 ~= <b>34.6 m</b></p>`
  },

  // ---------------- CHEMISTRY ----------------
  {
    subject: 'Chemistry', title: 'Redox Reactions & Oxidation Numbers',
    keywords: ['redox', 'oxidation', 'reduction', 'oxidising agent', 'reducing agent', 'oxidation number', 'oxidation state', 'oil rig', 'electron transfer'],
    body: `
<h4>The definitions</h4>
<ul><li><b>Oxidation</b> = loss of electrons = increase in oxidation number = gain of oxygen / loss of hydrogen</li>
<li><b>Reduction</b> = gain of electrons = decrease in oxidation number = loss of oxygen / gain of hydrogen</li></ul>
<p>Mnemonic: <b>OIL RIG</b> — Oxidation Is Loss, Reduction Is Gain (of electrons).</p>
<h4>Oxidation number rules</h4>
<ul><li>Free element = 0 (O2, Na, Cl2)</li><li>Oxygen = -2 (peroxides -1)</li>
<li>Hydrogen = +1 (metal hydrides -1)</li><li>Group 1 = +1, Group 2 = +2, F = -1</li>
<li>Sum in a neutral compound = 0; in an ion = the ion's charge</li></ul>
<h4>Worked example</h4>
<p>In KMnO4: K = +1 and four O = -8, so Mn = <b>+7</b>.<br>
In MnSO4, Mn = +2. So MnO4⁻ → Mn^2⁺ is a <b>reduction</b> (oxidation number falls by 5).</p>
<h4>Identifying agents</h4>
<p>The substance that is <b>oxidised</b> is the <b>reducing agent</b>; the substance that is <b>reduced</b> is the <b>oxidising agent</b>.</p>
<h4>Classic example</h4>
<div class="box">Zn + Cu^2⁺ → Zn^2⁺ + Cu<br>Zn: 0 → +2 (oxidised, reducing agent)<br>Cu^2⁺: +2 → 0 (reduced, oxidising agent)</div>`
  },
  {
    subject: 'Chemistry', title: 'Electrolysis',
    keywords: ['electrolysis', 'electrolyte', 'electrode', 'cathode', 'anode', 'faraday', 'electroplating', 'electrolytic cell'],
    body: `
<h4>Definitions</h4>
<p><b>Electrolysis</b> is the decomposition of an electrolyte by the passage of an electric current through it. An <b>electrolyte</b> conducts electricity and is decomposed by it.</p>
<h4>What goes where</h4>
<ul><li><b>Cations</b> (positive) → <b>cathode</b> (negative) → gain electrons → <b>reduction</b></li>
<li><b>Anions</b> (negative) → <b>anode</b> (positive) → lose electrons → <b>oxidation</b></li></ul>
<h4>Faraday's first law</h4>
<div class="box">m = Z I t  (mass deposited ∝ quantity of electricity)</div>
<h4>Typical results</h4>
<ul><li>Dilute H2SO4 with inert electrodes: <b>hydrogen</b> at the cathode, <b>oxygen</b> at the anode</li>
<li>Concentrated NaCl (brine): hydrogen at the cathode, <b>chlorine</b> at the anode</li>
<li>CuSO4 with copper electrodes: copper deposits at the cathode, the anode dissolves (used for purification)</li></ul>
<h4>Uses</h4>
<p>Electroplating, purification of copper, extraction of aluminium (Hall–Héroult process), electrotyping and anodising.</p>`
  },
  {
    subject: 'Chemistry', title: 'Rates of Reaction & Equilibrium',
    keywords: ['rate of reaction', 'equilibrium', 'le chatelier', 'catalyst', 'activation energy', 'reversible', 'haber'],
    body: `
<h4>Collision theory</h4>
<p>Particles must collide with energy >= the <b>activation energy</b>. Anything that increases the number or the energy of collisions increases the rate.</p>
<h4>Factors</h4>
<ul><li><b>Temperature ↑</b> — more particles exceed the activation energy</li>
<li><b>Concentration / pressure ↑</b> — more collisions per second</li>
<li><b>Surface area ↑</b> — powder a solid to expose more particles</li>
<li><b>Catalyst</b> — an alternative pathway with lower activation energy; it is not consumed</li></ul>
<h4>Le Chatelier's principle</h4>
<p>If a system at equilibrium is disturbed, the position of equilibrium shifts to <b>counteract</b> the change.</p>
<h4>Haber process</h4>
<div class="box">N2 + 3H2 ⇌ 2NH3    ΔH = -92 kJ/mol (exothermic)</div>
<p>Higher <b>pressure</b> favours the side with fewer moles (2 mol NH3 vs 4 mol reactants) → more ammonia.<br>
Higher <b>temperature</b> favours the endothermic reverse reaction → less ammonia, so a compromise of about 450 °C with an iron catalyst is used.</p>
<h4>Exam trap</h4>
<p>A catalyst speeds up both directions equally — it changes how <b>fast</b> equilibrium is reached, not the <b>yield</b>.</p>`
  },
  {
    subject: 'Chemistry', title: 'Acids, Bases & Salts',
    keywords: ['acid', 'base', 'alkali', 'ph', 'neutralisation', 'indicator', 'titration', 'salt preparation', 'litmus'],
    body: `
<h4>Definitions</h4>
<ul><li><b>Acid</b> — ionises in water to give H⁺ (H3O⁺) as the only positive ion</li>
<li><b>Base</b> — accepts a proton / gives OH⁻; a soluble base is an <b>alkali</b></li>
<li><b>Salt</b> — formed when the H⁺ of an acid is replaced by a metal or ammonium ion</li></ul>
<h4>Reactions</h4>
<div class="box">Acid + base → salt + water<br>Acid + metal → salt + hydrogen<br>Acid + carbonate → salt + water + CO2</div>
<h4>The pH scale</h4>
<ul><li>0–6 acidic · 7 neutral · 8–14 basic</li></ul>
<h4>Indicators</h4>
<ul><li><b>Litmus:</b> red in acid, blue in base</li>
<li><b>Methyl orange:</b> red in acid, yellow in base</li>
<li><b>Phenolphthalein:</b> colourless in acid, pink in base</li></ul>
<h4>Preparing a soluble salt</h4>
<p>Acid + soluble base → <b>titration</b>, then evaporate and crystallise.<br>
Acid + insoluble base or metal → add excess solid, filter, evaporate and crystallise.</p>`
  },
  {
    subject: 'Chemistry', title: 'The Mole Concept & Stoichiometry',
    keywords: ['mole', 'molar mass', 'avogadro', 'stoichiometry', 'molarity', 'molar volume', 'concentration'],
    body: `
<div class="box">moles = mass / molar mass<br>particles = moles × 6.02 × 10^23<br>gas volume at s.t.p. = moles × 22.4 dm^3<br>concentration = moles / volume in dm^3</div>
<h4>Worked example 1</h4>
<p>Moles in 10 g of CaCO3 (Ca = 40, C = 12, O = 16): molar mass = 100 g/mol → 10/100 = <b>0.1 mol</b>.</p>
<h4>Worked example 2 (titration)</h4>
<p>25.0 cm^3 of 0.1 M NaOH is neutralised by 20.0 cm^3 of HCl.<br>
Moles of NaOH = 0.1 × 0.025 = 0.0025 mol → moles of HCl = 0.0025 (1:1 ratio)<br>
[HCl] = 0.0025 / 0.020 = <b>0.125 mol/dm^3</b>.</p>
<h4>The classic slip</h4>
<p>Always convert cm^3 to dm^3 (divide by 1000) before using molarity — most lost marks in WAEC quantitative questions come from this.</p>`
  },
  {
    subject: 'Chemistry', title: 'Organic Chemistry — Hydrocarbons',
    keywords: ['organic', 'hydrocarbon', 'alkane', 'alkene', 'alkyne', 'homologous', 'functional group', 'cracking', 'esterification', 'isomer'],
    body: `
<h4>Homologous series</h4>
<p>A family with the same general formula, differing by CH2, with similar chemical properties and gradually changing physical properties.</p>
<div class="box">Alkanes   C_nH2_n₊2   CH4 methane<br>Alkenes   C_nH2_n     C2H4 ethene<br>Alkynes   C_nH2_n₋2   C2H2 ethyne<br>Alkanols  C_nH2_n₊1OH CH3OH methanol<br>Alkanoic acids C_nH2_n₊1COOH  HCOOH methanoic acid</div>
<h4>Test for unsaturation</h4>
<p><b>Bromine water</b> is decolourised by an alkene (addition across the C=C bond) but not by an alkane. Cold dilute KMnO4 (Baeyer's reagent) also decolourises.</p>
<h4>Isomerism</h4>
<p>Same molecular formula, different structural formula. Butane (C4H10) has two isomers: n-butane and 2-methylpropane.</p>
<h4>Cracking</h4>
<p>Breaking long-chain hydrocarbons into shorter, more useful ones using heat and a catalyst such as alumina — this is how extra petrol is obtained from heavy fractions.</p>
<h4>Combustion</h4>
<div class="box">C2H4 + 3O2 → 2CO2 + 2H2O</div>`
  },

  // ---------------- BIOLOGY ----------------
  {
    subject: 'Biology', title: 'Genetics & Heredity',
    keywords: ['genetics', 'heredity', 'gene', 'allele', 'dominant', 'recessive', 'punnett', 'monohybrid', 'dihybrid', 'blood group', 'genotype', 'phenotype', 'mendel'],
    body: `
<h4>Key terms</h4>
<ul><li><b>Gene</b> — the unit of inheritance on a chromosome</li>
<li><b>Allele</b> — alternative forms of a gene (T and t)</li>
<li><b>Genotype</b> — genetic make-up (Tt); <b>phenotype</b> — what you observe (tall)</li>
<li><b>Dominant</b> masks <b>recessive</b> in a heterozygote</li></ul>
<h4>Mendel's first law</h4>
<p>Paired alleles segregate during gamete formation, so each gamete carries only one allele of each pair.</p>
<h4>Worked example — Tt × Tt</h4>
<div class="box">Gametes: T, t  ×  T, t<br>Offspring: TT, Tt, Tt, tt<br>Genotype ratio 1 : 2 : 1<br>Phenotype ratio 3 tall : 1 short</div>
<h4>Sex determination</h4>
<p>The <b>father</b> determines the sex: X-bearing sperm → girl (XX), Y-bearing sperm → boy (XY). Probability is 1 in 2.</p>
<h4>Blood groups</h4>
<p>Iᴬ and Iᴮ are <b>co-dominant</b>, and both are dominant over i (group O). Iᴬi × Iᴮi can produce children of all four blood groups.</p>
<h4>WAEC method marks</h4>
<p>Write the parents' genotypes, then the gametes, then the Punnett square. Each stage earns marks.</p>`
  },
  {
    subject: 'Biology', title: 'The Cell',
    keywords: ['cell', 'organelle', 'mitochondria', 'nucleus', 'ribosome', 'chloroplast', 'vacuole', 'osmosis', 'diffusion', 'active transport', 'cell wall'],
    body: `
<h4>Organelles and their jobs</h4>
<ul><li><b>Nucleus</b> — controls the cell; contains DNA</li>
<li><b>Mitochondrion</b> — aerobic respiration (the powerhouse)</li>
<li><b>Ribosome</b> — protein synthesis</li>
<li><b>Chloroplast</b> — photosynthesis (plants only)</li>
<li><b>Vacuole</b> — storage; keeps plant cells turgid</li>
<li><b>Cell membrane</b> — selectively permeable boundary</li></ul>
<h4>Plant vs animal</h4>
<p>Plant cells have a <b>cellulose cell wall</b>, <b>chloroplasts</b> and a <b>large permanent vacuole</b>; animal cells have centrioles instead.</p>
<h4>Movement across the membrane</h4>
<ul><li><b>Diffusion</b> — high to low concentration, no energy</li>
<li><b>Osmosis</b> — diffusion of water through a selectively permeable membrane</li>
<li><b>Active transport</b> — against the gradient, needs ATP</li></ul>
<h4>Classic exam example</h4>
<p>A red blood cell in pure water swells and bursts (haemolysis) because water enters by osmosis and there is no wall to resist the pressure. In a concentrated solution it shrinks (crenation).</p>`
  },
  {
    subject: 'Biology', title: 'Photosynthesis & Respiration',
    keywords: ['photosynthesis', 'respiration', 'aerobic', 'anaerobic', 'atp', 'chlorophyll', 'lactic acid', 'fermentation'],
    body: `
<h4>Photosynthesis</h4>
<div class="box">6CO2 + 6H2O --light/chlorophyll--&gt; C6H12O6 + 6O2</div>
<ul><li><b>Light stage</b> (grana): photolysis of water releases O2 and produces ATP and NADPH</li>
<li><b>Dark stage</b> (stroma): CO2 is fixed into glucose using that ATP and NADPH</li></ul>
<p><b>Limiting factors:</b> light intensity, CO2 concentration, temperature.</p>
<h4>Respiration</h4>
<div class="box">C6H12O6 + 6O2 → 6CO2 + 6H2O + energy (ATP)</div>
<ul><li><b>Aerobic</b> — with oxygen, large energy yield (about 38 ATP)</li>
<li><b>Anaerobic in animals</b> — glucose → lactic acid + 2 ATP</li>
<li><b>Anaerobic in yeast</b> — glucose → ethanol + CO2 + 2 ATP</li></ul>
<h4>Oxygen debt</h4>
<p>After hard exercise, extra oxygen is needed to clear accumulated lactic acid — that is why breathing stays fast after you stop running.</p>`
  },
  {
    subject: 'Biology', title: 'Ecology & Energy Flow',
    keywords: ['ecology', 'ecosystem', 'food chain', 'food web', 'trophic', 'producer', 'consumer', 'decomposer', 'carbon cycle', 'nitrogen cycle', 'habitat', 'niche', 'population'],
    body: `
<h4>Terms</h4>
<ul><li><b>Habitat</b> — where an organism lives; <b>niche</b> — its role there</li>
<li><b>Population</b> — all members of one species in an area</li>
<li><b>Community</b> — all populations together</li>
<li><b>Ecosystem</b> — community plus the non-living environment</li></ul>
<h4>Feeding relationships</h4>
<div class="box">producers → primary consumers → secondary consumers → tertiary consumers</div>
<p>Only about <b>10%</b> of the energy passes to the next trophic level; the rest is lost as heat, in waste and in respiration. That is why food chains are short and top predators are few.</p>
<h4>Cycles</h4>
<ul><li><b>Carbon:</b> photosynthesis removes CO2; respiration, combustion and decomposition return it</li>
<li><b>Nitrogen:</b> nitrogen-fixing bacteria (Rhizobium in root nodules) make N2 usable; nitrifying, putrefying and denitrifying bacteria complete the cycle</li>
<li><b>Water:</b> evaporation, transpiration, condensation, precipitation</li></ul>`
  },
  {
    subject: 'Biology', title: 'Digestion & the Alimentary Canal',
    keywords: ['digestion', 'enzyme', 'alimentary', 'stomach', 'ileum', 'villi', 'bile', 'pepsin', 'amylase', 'absorption'],
    body: `
<h4>Where digestion happens</h4>
<ul><li><b>Mouth</b> — salivary amylase: starch → maltose</li>
<li><b>Stomach</b> — pepsin (acidic): protein → polypeptides</li>
<li><b>Duodenum</b> — pancreatic amylase, trypsin, lipase</li>
<li><b>Ileum</b> — maltase, sucrase, lactase, peptidase: final breakdown to glucose and amino acids</li></ul>
<h4>Absorption in the ileum</h4>
<p>The ileum is long, folded, lined with <b>villi</b> and microvilli, thin-walled and richly supplied with blood — all to maximise surface area and maintain a diffusion gradient.</p>
<h4>Bile</h4>
<p>Made in the liver, stored in the gall bladder. It <b>emulsifies</b> fats into tiny droplets and provides an alkaline medium. It contains <b>no enzyme</b>.</p>
<h4>Enzyme properties</h4>
<p>Specific to one substrate, work at an optimum pH and temperature, denatured by high heat, and not used up in the reaction.</p>`
  },
  {
    subject: 'Biology', title: 'The Nervous System',
    keywords: ['nervous', 'neuron', 'neurone', 'reflex', 'brain', 'cerebrum', 'cerebellum', 'medulla', 'synapse', 'spinal cord'],
    body: `
<h4>The neurone</h4>
<ul><li><b>Dendrites</b> carry impulses towards the cell body</li>
<li><b>Axon</b> carries impulses away from it</li>
<li><b>Myelin sheath</b> insulates the axon and speeds up conduction</li>
<li><b>Synapse</b> — the gap between neurones, crossed by chemical transmitters</li></ul>
<h4>The reflex arc</h4>
<div class="box">receptor → sensory neurone → relay neurone (spinal cord) → motor neurone → effector</div>
<p>A reflex is rapid, automatic and involuntary — you withdraw your hand <b>before</b> you feel the pain.</p>
<h4>The brain</h4>
<ul><li><b>Cerebrum</b> — intelligence, memory, voluntary action</li>
<li><b>Cerebellum</b> — balance and muscle coordination</li>
<li><b>Medulla oblongata</b> — heartbeat, breathing, swallowing</li></ul>`
  },

  // ---------------- ENGLISH ----------------
  {
    subject: 'English Language', title: 'Subject–Verb Concord',
    keywords: ['concord', 'agreement', 'subject verb', 'singular or plural', 'neither nor', 'either or', 'collective noun', 'every one'],
    body: `
<h4>The rule</h4>
<p>A singular subject takes a singular verb and a plural subject takes a plural verb. The trap is a long phrase between the subject and the verb.</p>
<h4>Tricky cases</h4>
<ul><li><b>Either/or, neither/nor</b> — agree with the <b>nearer</b> subject: "Neither the boys nor the teacher <b>was</b> there."</li>
<li><b>Each, every, everyone, nobody</b> — always singular: "Every one of the students <b>has</b> a book."</li>
<li><b>Collective nouns</b> — singular as one unit ("The team <b>is</b> winning"), plural when individuals act ("The team <b>are</b> arguing").</li>
<li><b>And</b> joining one idea — singular: "Bread and butter <b>is</b> my breakfast."</li>
<li><b>A number of</b> = plural; <b>the number of</b> = singular.</li></ul>
<h4>Practice</h4>
<div class="box">The list of absentees ___ on the table.  (is — subject = list)<br>Neither the players nor the coach ___ satisfied.  (was — nearer subject)<br>Every one of the boys ___ a pen.  (has)</div>`
  },
  {
    subject: 'English Language', title: 'Reported (Indirect) Speech',
    keywords: ['reported speech', 'indirect speech', 'direct speech', 'backshift', 'he said that'],
    body: `
<h4>Tense backshift</h4>
<div class="box">present simple → past simple<br>present continuous → past continuous<br>past simple → past perfect<br>will / can / may → would / could / might</div>
<h4>Time and place shifts</h4>
<div class="box">today → that day       tomorrow → the next day<br>yesterday → the previous day<br>here → there   this → that   these → those</div>
<h4>Questions</h4>
<p>Reported questions use <b>statement word order</b> and no question mark: "Where do you live?" → He asked me <b>where I lived</b>.</p>
<h4>Worked example</h4>
<div class="box">"I am coming here tomorrow," he said.<br>→ He said (that) he was going there the next day.</div>
<h4>Exception</h4>
<p>If the reporting verb is present tense ("He says…") there is <b>no</b> backshift.</p>`
  },
  {
    subject: 'English Language', title: 'Figures of Speech & Idioms',
    keywords: ['figure of speech', 'simile', 'metaphor', 'personification', 'hyperbole', 'irony', 'idiom', 'euphemism', 'oxymoron', 'proverb'],
    body: `
<h4>Figures of speech</h4>
<ul><li><b>Simile</b> — comparison using "like" or "as": as brave as a lion</li>
<li><b>Metaphor</b> — direct comparison: life is a journey</li>
<li><b>Personification</b> — human qualities given to things: the wind whispered</li>
<li><b>Hyperbole</b> — exaggeration: I've told you a thousand times</li>
<li><b>Irony</b> — saying the opposite of what is meant</li>
<li><b>Euphemism</b> — mild wording: "passed away"</li>
<li><b>Oxymoron</b> — contradictory terms: deafening silence</li></ul>
<h4>Idioms that keep appearing in JAMB</h4>
<ul><li><b>beat about the bush</b> — avoid the main point</li>
<li><b>let the cat out of the bag</b> — reveal a secret</li>
<li><b>in hot water</b> — in trouble</li>
<li><b>a blessing in disguise</b> — something good that seemed bad</li>
<li><b>turn a deaf ear</b> — ignore deliberately</li>
<li><b>once in a blue moon</b> — very rarely</li></ul>
<h4>How to answer</h4>
<p>Pick the option that keeps the <b>whole sentence</b> meaningful. Never match a single word.</p>`
  },
  {
    subject: 'English Language', title: 'Summary & Comprehension Technique',
    keywords: ['summary', 'comprehension', 'passage', 'summarise', 'summarize', 'waec summary', 'infer'],
    body: `
<h4>Comprehension strategy</h4>
<ol><li>Read the <b>questions first</b> so you know what to hunt for.</li>
<li>Skim for the main idea, then scan for details.</li>
<li>For "the writer's attitude", study the adjectives and adverbs — they carry the tone.</li>
<li>Answer in complete sentences and in your own words.</li></ol>
<h4>WAEC summary rules</h4>
<ul><li>Complete grammatical sentences (unless told otherwise)</li>
<li><b>No lifting</b> — copying a sentence from the passage scores zero</li>
<li>Respect the word limit; extra words are penalised</li>
<li>Give distinct points; repetition earns nothing</li>
<li>No introduction ("In this passage…") and no examples</li></ul>
<h4>Model transformation</h4>
<div class="box">Passage: "Many young people waste valuable hours each day on social media, which reduces the time available for serious study."<br>
Summary point: "Excessive use of social media reduces young people's study time."</div>`
  },
  {
    subject: 'English Language', title: 'Prepositions & Phrasal Verbs',
    keywords: ['preposition', 'phrasal verb', 'accused of', 'collocation', 'dependent preposition'],
    body: `
<h4>Phrasal verbs</h4>
<ul><li><b>put up with</b> — tolerate</li><li><b>look after</b> — take care of</li>
<li><b>call off</b> — cancel</li><li><b>break down</b> — stop working</li>
<li><b>come across</b> — find by chance</li><li><b>make up for</b> — compensate</li></ul>
<h4>Fixed prepositions</h4>
<ul><li>accused <b>of</b>, capable <b>of</b>, fond <b>of</b>, afraid <b>of</b>, suspected <b>of</b></li>
<li>good <b>at</b>, arrive <b>at</b> a place, arrive <b>in</b> a city or country</li>
<li>married <b>to</b>, similar <b>to</b>, different <b>from</b>, prevent <b>from</b></li>
<li>depend <b>on</b>, rely <b>on</b>, congratulate <b>on</b>, insist <b>on</b></li></ul>
<h4>How to remember</h4>
<p>Learn them in pairs with an example sentence — "She was accused <b>of</b> theft" sticks far better than the word "of" on its own.</p>`
  },

  // ---------------- STUDY SKILLS ----------------
  {
    subject: 'Study skills', title: 'JAMB UTME Exam Strategy',
    keywords: ['jamb', 'utme', 'exam strategy', 'how to pass jamb', 'cbt', '180 minutes'],
    body: `
<h4>How JAMB UTME works</h4>
<ul><li>Computer-based (CBT), 180 minutes for 180 questions → <b>about 1 minute per question</b>.</li>
<li>English Language is compulsory; your other three subjects depend on your course.</li>
<li>No negative marking in UTME — <b>never leave a question blank</b>.</li></ul>
<h4>A timing plan</h4>
<ol><li>First pass: answer every question you are sure of (about 70 minutes).</li>
<li>Second pass: work through the ones you can reason out (about 60 minutes).</li>
<li>Final pass: guess the rest — an educated guess beats a blank (about 20 minutes, keep 10 in reserve for review).</li></ol>
<h4>Reading the options</h4>
<ul><li>Eliminate two wrong options first — your odds double immediately.</li>
<li>Watch for "except", "not", "always" and "never" in the stem.</li>
<li>If two options are opposites, the answer is usually one of them.</li></ul>`
  },
  {
    subject: 'Study skills', title: 'WAEC WASSCE Exam Strategy',
    keywords: ['waec', 'wassce', 'theory', 'paper 2', 'objective paper', 'practical', 'how to pass waec'],
    body: `
<h4>The papers</h4>
<ul><li><b>Paper 1</b> — objective (multiple choice).</li>
<li><b>Paper 2</b> — theory/essay. Answers are marked with <b>method marks</b>, so show your working.</li>
<li><b>Paper 3</b> — practical (sciences).</li></ul>
<h4>Theory technique</h4>
<ul><li>Answer the questions you know best <b>first</b> — order does not matter.</li>
<li>Number your answers exactly as numbered in the paper.</li>
<li>Show every step in calculations; the final answer alone rarely earns full marks.</li>
<li>In Biology and Chemistry, use correct <b>technical terms</b> — vague wording loses marks.</li>
<li>Draw large, labelled diagrams where relevant and rule your lines.</li></ul>
<h4>Time</h4>
<p>Divide the paper time by the number of questions you must answer, and stop when your time for a question is up — even mid-answer. Attempting everything scores more than perfecting three questions.</p>`
  },
  {
    subject: 'Study skills', title: 'BECE Exam Strategy',
    keywords: ['bece', 'junior waec', 'exam strategy', 'how to pass bece', 'jss3', 'junior school certificate'],
    body: `
<h4>How the BECE works</h4>
<ul><li>The Junior WAEC, sat at the end of JSS 3 — objectives plus theory papers in your subjects.</li>
<li>It covers JSS 1 to 3 work, so <b>steady revision beats last-minute cramming</b>.</li></ul>
<h4>Winning habits</h4>
<ul><li>Practise past BECE objectives against a timer — speed is half the marks.</li>
<li>In theory, answer in full sentences; show every step in Maths and Basic Science.</li>
<li>Label every diagram in Basic Science and Basic Technology — unlabeled diagrams lose marks.</li>
<li>English paper: comprehension answers live IN the passage — underline as you read.</li></ul>`
  },
  {
    subject: 'Study skills', title: 'Building a Study Plan & Keeping Your Streak',
    keywords: ['study plan', 'timetable', 'revision plan', 'how to study', 'study tips', 'streak', 'schedule', 'motivation', 'motivated', 'procrastinate', 'focus'],
    body: `
<h4>A realistic weekly plan</h4>
<ul><li><b>Blocks, not marathons:</b> 45 minutes on, 10 minutes off. Four focused blocks beat three hours of drifting.</li>
<li><b>One subject per block,</b> rotating through your subjects across the week.</li>
<li><b>Past questions weekly</b> — under timed conditions, then mark and read every explanation, including the ones you got right.</li>
<li><b>Active recall over re-reading:</b> close the book and write what you remember. Flashcards exist for exactly this.</li></ul>
<h4>The streak</h4>
<p>StudyOS counts a day when you study anything at all. Ten focused minutes keeps the streak alive on a busy day — the habit matters more than the length.</p>
<h4>Streak freezes</h4>
<p>A day counts for your 🔥 streak when you complete at least one study activity: finish a lesson, a quiz, some flashcards or a focus session. Every 7-day streak milestone banks a ❄️ streak freeze (secret badges bank one too) — up to three at once. Miss a day with a freeze in the bank and the freeze is spent to keep your streak alive; miss a day with none and the streak restarts at Day 1. A freeze never increases the streak by itself. Weekly (7), monthly (30) and yearly (365) streaks unlock badges, alongside task badges like First Steps, Perfectionist and Card Shark.</p>
<h4>Beating procrastination</h4>
<ul><li>Start with the smallest possible task ("read one topic") — starting is the hard part.</li>
<li>Put the phone in another room; notification breaks cost 15–20 minutes of focus.</li>
<li>Study the hardest subject first, while your attention is fresh.</li></ul>`
  }
];

/* ---------- Buddy helper: text → HTML ---------- */
/* Gemini sometimes answers with raw LaTeX ($\frac{1}{2}$, ^{2}, \times…), which shows
   up as broken "fra$"-style junk on screen. Translate the common bits to plain text. */
function plainMath(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '($1)/($2)')
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, 'sqrt($1)')
    .replace(/\\sqrt\s*([A-Za-z0-9])/g, 'sqrt($1)')
    .replace(/([_^])\s*\{([^{}]*)\}/g, '$1$2')
    .replace(/\\times/g, '×').replace(/\\div/g, '÷').replace(/\\pm/g, '+/-')
    .replace(/\\cdot/g, '·').replace(/\\le(?:q)?/g, '<=').replace(/\\ge(?:q)?/g, '>=')
    .replace(/\\ne(?:q)?/g, '!=').replace(/\\approx/g, '~=')
    .replace(/\\pi/g, 'π').replace(/\\theta/g, 'θ').replace(/\\infty/g, 'infinity')
    .replace(/\\left|\\right/g, '')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/\\\(|\\\)|\\\[|\\\]/g, '')
    .replace(/\$/g, '');
}

function mdToHtml(text) {
  let html = escapeHtml(plainMath(text));
  html = html.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  html = html.replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<i>$2</i>');
  html = html.replace(/`([^`]+)`/g, '<span class="box" style="display:inline">$1</span>');
  html = html.split(/\n{2,}/).map(b => `<p>${b.replace(/\n/g, '<br>')}</p>`).join('');
  return html;
}

/* ---------- Knowledge lookup ---------- */
function normalise(q) {
  return String(q || '').toLowerCase()
    .replace(/[^a-z0-9\s+*/=.,\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function scoreKb(qRaw) {
  const q = normalise(qRaw);
  if (!q) return [];
  const words = q.split(' ').filter(w => w.length > 2);
  const isJSS = String(state.profile.classLevel || '').startsWith('JSS');
  const scored = BUDDY_KB.filter(e => !isJSS || !/JAMB|WAEC/.test(e.title)).map(entry => {
    let score = 0;
    entry.keywords.forEach(kw => {
      const k = kw.toLowerCase();
      if (k.includes(' ') || k.length > 6) {
        if (q.includes(k)) score += 3;
      } else if (words.some(w => w === k || w.startsWith(k))) {
        score += 1.5;
      }
    });
    const titleWords = entry.title.toLowerCase().split(/[^a-z]+/).filter(w => w.length > 3);
    titleWords.forEach(tw => { if (q.includes(tw)) score += 1; });
    return { entry, score };
  }).filter(r => r.score > 0);
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

function findRelated(topic) {
  const seen = new Set();
  return BUDDY_KB.filter(e => {
    if (e.subject !== topic.subject || e.title === topic.title) return false;
    if (seen.has(e.title)) return false;
    seen.add(e.title);
    return true;
  }).slice(0, 3);
}

/* ---------- Real algebra solvers ---------- */
function extractCoeffs(text, form) {
  // "solve x^2 - 5x + 6" style: read a, b, c for the requested form
  const t = normalise(text).replace(/\^2/g, '2').replace(/x2/g, 'x2');
  let a = 1, b = 0, c = 0;
  const terms = t.match(/[-+]?\s*\d*\.?\d*\s*x\s*2|[-+]?\s*\d*\.?\d*\s*x|[-+]?\s*\d+\.?\d*/g);
  if (!terms) return null;
  terms.forEach(raw => {
    const term = raw.replace(/\s+/g, '');
    const sign = term.startsWith('-') ? -1 : 1;
    const body = term.replace(/^[+-]/, '');
    if (/x2$/.test(body)) {
      const num = body.replace(/x2$/, '');
      a = sign * (num === '' ? 1 : parseFloat(num));
    } else if (/x$/.test(body)) {
      const num = body.replace(/x$/, '');
      b = sign * (num === '' ? 1 : parseFloat(num));
    } else if (body !== '') {
      c = sign * parseFloat(body);
    }
  });
  if (form === 'quadratic' && a === 0) return null;
  return { a, b, c };
}

function solveQuadratic(a, b, c) {
  const disc = b * b - 4 * a * c;
  const round = n => Math.abs(n) < 1e-9 ? 0 : Math.round(n * 10000) / 10000;
  if (disc > 0) {
    const r1 = (-b + Math.sqrt(disc)) / (2 * a);
    const r2 = (-b - Math.sqrt(disc)) / (2 * a);
    return { disc, nature: 'two distinct real roots', roots: [round(r1), round(r2)] };
  }
  if (disc === 0) {
    const r = -b / (2 * a);
    return { disc, nature: 'two equal (repeated) real roots', roots: [round(r)] };
  }
  const re = round(-b / (2 * a));
  const im = round(Math.sqrt(-disc) / (2 * a));
  return { disc, nature: 'no real roots (a complex conjugate pair)', roots: [`${re} + ${im}i`, `${re} - ${im}i`] };
}

function solveSimultaneous(a1, b1, c1, a2, b2, c2) {
  const det = a1 * b2 - a2 * b1;
  if (det === 0) return null;
  const round = n => Math.round(n * 10000) / 10000;
  return { x: round((c1 * b2 - c2 * b1) / det), y: round((a1 * c2 - a2 * c1) / det), det };
}

/* ---------- Buddy response builder ---------- */
function buddyReply(rawInput) {
  const input = String(rawInput || '').trim();
  const q = normalise(input);
  const raw = input.toLowerCase();

  if (!q) {
    return {
      html: mdToHtml("Type a topic and I will break it down — for example **centripetal force**, **quadratic equations** or **redox reactions**."),
      chips: ['Centripetal force', 'Quadratic equations', 'Redox reactions', 'Reported speech']
    };
  }

  // Small talk / meta
  if (/^(hi|hello|hey|good (morning|afternoon|evening)|howdy|sup)\b/.test(raw)) {
    return {
      html: mdToHtml(`Hello${state.profile.name ? ' **' + state.profile.name.split(' ')[0] + '**' : ''}! 👋 Buddy here.\n\nI can explain any topic across **all your subjects — junior and senior**, solve a quadratic or a pair of simultaneous equations step by step, coach you from your own quiz stats, or help you plan your revision.\n\nWhat are we working on today?`),
      chips: ['Explain centripetal force', 'Solve x^2 - 5x + 6', 'Redox reactions', examTipsChip()]
    };
  }
  if (/\b(what should i (study|do|revise)|where (do|should) i start|my weak|weakest|recommend|coach me)\b/.test(raw)) return smartCoachReply();
  if (/\bhow am i doing|my progress|my report|my stats|progress report\b/.test(raw)) return progressReportReply();
  if (/\b(thanks?|thank you|well done|good job|appreciate)\b/.test(raw)) {
    return {
      html: mdToHtml("You're very welcome! 🎯 Consistency beats intensity — keep the streak alive and the grades will follow.\n\nAnything else you want to go over?"),
      chips: ['Next topic in my subject', 'Give me a study plan', examStrategyChip()]
    };
  }
  if (/^(help|what can you do|who are you|menu|commands)\b/.test(q)) {
    const subjects = Object.keys(CURRICULUM).join(', ');
    return {
      html: mdToHtml(`**Buddy can help you with:**\n\n• **Explanations** across ${subjects} — definitions, formulas, worked examples and the traps examiners set.\n• **Algebra** — ask me to *solve x^2 - 5x + 6* or *solve 2x + y = 11 and x - y = 1* and I will show every step.\n• **Exam technique** for ${buddyExamLine()}.\n• **Revision planning** and how to keep your study streak.\n\nTap a suggestion or type your own question.`),
      chips: ['Explain the mole concept', 'Solve 2x + y = 11 and x - y = 1', examStrategyChip(), 'Build me a study plan']
    };
  }

  // Algebra solver: quadratic
  if (/(solve|roots?|find x|factor)/.test(q) && /x\s*(\^2|2)/.test(q)) {
    const co = extractCoeffs(input, 'quadratic');
    if (co) {
      const r = solveQuadratic(co.a, co.b, co.c);
      const disc = Math.round(r.disc * 10000) / 10000;
      const roots = r.roots.join('  or  ');
      return {
        html: `<span class="tag">Buddy · worked solution</span>
          <h4>Solving ${fmtQuad(co.a, co.b, co.c)} = 0</h4>
          <p>Here a = ${co.a}, b = ${co.b === 0 ? 0 : co.b}, c = ${co.c}.</p>
          <h4>Step 1 — the discriminant</h4>
          <div class="box">Δ = b^2 - 4ac = (${co.b})^2 - 4(${co.a})(${co.c}) = ${disc}</div>
          <p>Since Δ ${disc > 0 ? '&gt; 0' : (disc === 0 ? '= 0' : '&lt; 0')}, the equation has <b>${r.nature}</b>.</p>
          <h4>Step 2 — apply the formula</h4>
          <div class="box">x = ( -b ± √Δ ) / 2a = ( ${-co.b} ± √${disc} ) / ${2 * co.a}</div>
          <h4>Step 3 — the roots</h4>
          <div class="box">x = ${roots}</div>
          <h4>Step 4 — check</h4>
          <p>Sum of roots = -b/a = ${round4(-co.b / co.a)}; product = c/a = ${round4(co.c / co.a)}. Both agree with your roots, so the answer is verified. ✓</p>`,
        chips: ['Explain the discriminant', 'Another quadratic', 'Completing the square']
      };
    }
  }

  // Algebra solver: simultaneous equations
  const sim = input.match(/(-?\d*)\s*x\s*([+-])\s*(\d*)\s*y\s*=\s*(-?\d+)[^\d]*(-?\d*)\s*x\s*([+-])\s*(\d*)\s*y\s*=\s*(-?\d+)/);
  if (sim) {
    const num = s => s === '' || s === '+' || s === '-' ? 1 : parseInt(s, 10);
    const a1 = num(sim[1]), b1 = num(sim[3]) * (sim[2] === '-' ? -1 : 1), c1 = parseInt(sim[4], 10);
    const a2 = num(sim[5]), b2 = num(sim[7]) * (sim[6] === '-' ? -1 : 1), c2 = parseInt(sim[8], 10);
    const sol = solveSimultaneous(a1, b1, c1, a2, b2, c2);
    if (sol) {
      return {
        html: `<span class="tag">Buddy · worked solution</span>
          <h4>Solving by elimination</h4>
          <div class="box">${a1}x ${b1 < 0 ? '-' : '+'} ${Math.abs(b1)}y = ${c1}   …(1)<br>${a2}x ${b2 < 0 ? '-' : '+'} ${Math.abs(b2)}y = ${c2}   …(2)</div>
          <h4>Step 1 — the determinant</h4>
          <div class="box">Δ = a1b2 - a2b1 = (${a1})(${b2}) - (${a2})(${b1}) = ${sol.det}</div>
          <p>Δ != 0, so the lines intersect at exactly one point.</p>
          <h4>Step 2 — solve</h4>
          <div class="box">x = ${sol.x} ,  y = ${sol.y}</div>
          <h4>Step 3 — verify in equation (1)</h4>
          <p>${a1}(${sol.x}) ${b1 < 0 ? '-' : '+'} ${Math.abs(b1)}(${sol.y}) = ${round4(a1 * sol.x + b1 * sol.y)} = ${c1} ✓</p>`,
        chips: ['Substitution method', 'Quadratic equations', 'More practice']
      };
    }
  }

  // Knowledge base match
  const hits = scoreKb(input);
  if (hits.length) {
    const top = hits[0].entry;
    const others = hits.slice(1, 3).filter(h => h.score >= hits[0].score * 0.5);
    const related = findRelated(top);
    const chips = [...related.slice(0, 2).map(e => `Explain ${e.title.toLowerCase()}`)];
    if (CURRICULUM[top.subject]) chips.push(`Practice quiz: ${top.subject}`);
    else chips.push(examStrategyChip());

    let extra = '';
    if (others.length) {
      extra = `<h4>You might also mean</h4><ul>${others.map(o => `<li>${o.entry.title} (${o.entry.subject})</li>`).join('')}</ul>`;
    }
    if (related.length) {
      extra += `<h4>Next in ${top.subject}</h4><ul>${related.slice(0, 3).map(r => `<li>${r.title}</li>`).join('')}</ul>`;
    }
    return {
      html: `<span class="tag">${top.subject}</span><h4>${top.title}</h4>${top.body}${extra}
        <p><i>Ask a follow-up, or open the Practice Exam for ${top.subject} to test yourself right away.</i></p>`,
      chips
    };
  }

  // Subject fallback: give a menu for that subject
  const subjectHit = Object.keys(CURRICULUM).find(s => q.includes(s.toLowerCase()) || q.includes(s.toLowerCase().split(' ')[0]));
  if (subjectHit) {
    const list = BUDDY_KB.filter(e => e.subject === subjectHit).map(e => e.title);
    return {
      html: `<span class="tag">${subjectHit}</span><h4>Here is what I can explain in ${subjectHit}</h4>
        <ul>${list.map(t => `<li>${t}</li>`).join('')}</ul>
        <p>Pick one and I will give you the definition, the formula, a worked example and the trap examiners set.</p>`,
      chips: list.slice(0, 3).map(t => `Explain ${t.toLowerCase()}`)
    };
  }

  // Nothing matched — be honest and helpful
  const suggestions = BUDDY_KB.slice(0, 3).map(e => e.title);
  return {
    html: mdToHtml(`I do not have a prepared lesson on that yet — I would rather say so than guess. 🤔\n\nTry asking about one of my strong topics: **centripetal force**, **redox reactions**, **quadratic equations**, **genetics**, **reported speech** or **${examStrategyChip()}**. You can also ask me to *solve* an equation step by step.`),
    chips: suggestions.map(t => `Explain ${t.toLowerCase()}`)
  };
}


/* ==================================================================
   BUDDY ONLINE RESEARCH — live internet access
   1. Wikipedia (search + intro extract) — no API key, CORS enabled
   2. DuckDuckGo Instant Answers — abstract + related topics, no key
   3. Optional Gemini API key — Buddy synthesises an exam-focused answer
      from the retrieved sources instead of quoting them.
   ================================================================== */
const RESEARCH = {
  wikipedia: async (query) => {
    const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*'
      + '&prop=extracts&exintro=1&explaintext=1&exchars=1400&redirects=1'
      + '&generator=search&gsrsearch=' + encodeURIComponent(query) + '&gsrlimit=2';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Wikipedia responded ' + res.status);
    const json = await res.json();
    const pages = (json.query && json.query.pages) || {};
    return Object.values(pages)
      .filter(pg => pg.extract && pg.title)
      .sort((a, b) => (a.index || 99) - (b.index || 99))
      .slice(0, 2)
      .map(pg => ({
        title: pg.title,
        text: pg.extract.trim(),
        url: 'https://en.wikipedia.org/wiki/' + encodeURIComponent(pg.title.replace(/ /g, '_'))
      }));
  },
  duckduckgo: async (query) => {
    const url = 'https://api.duckduckgo.com/?q=' + encodeURIComponent(query)
      + '&format=json&no_html=1&skip_disambig=1&t=studyos';
    const res = await fetch(url);
    if (!res.ok) throw new Error('DuckDuckGo responded ' + res.status);
    const json = await res.json();
    const related = (json.RelatedTopics || [])
      .filter(t => t && t.Text && t.FirstURL)
      .slice(0, 4)
      .map(t => ({ title: t.Text.split(' - ')[0].slice(0, 90), text: t.Text, url: t.FirstURL }));
    if (json.AbstractText) {
      return [{ title: json.Heading || query, text: json.AbstractText, url: json.AbstractURL || '' }].concat(related);
    }
    return related;
  },
  // Textbook-style wikis: same MediaWiki API as Wikipedia, CORS-open with origin=*
  wikibooks: async (query) => {
    const url = 'https://en.wikibooks.org/w/api.php?action=query&format=json&origin=*'
      + '&prop=extracts&exintro=1&explaintext=1&exchars=900&redirects=1'
      + '&generator=search&gsrsearch=' + encodeURIComponent(query) + '&gsrlimit=1';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Wikibooks responded ' + res.status);
    const json = await res.json();
    return Object.values((json.query && json.query.pages) || {})
      .filter(pg => pg.extract && pg.title)
      .map(pg => ({ title: pg.title, text: pg.extract.trim(),
        url: 'https://en.wikibooks.org/wiki/' + encodeURIComponent(pg.title.replace(/ /g, '_')) }));
  },
  wikiversity: async (query) => {
    const url = 'https://en.wikiversity.org/w/api.php?action=query&format=json&origin=*'
      + '&prop=extracts&exintro=1&explaintext=1&exchars=900&redirects=1'
      + '&generator=search&gsrsearch=' + encodeURIComponent(query) + '&gsrlimit=1';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Wikiversity responded ' + res.status);
    const json = await res.json();
    return Object.values((json.query && json.query.pages) || {})
      .filter(pg => pg.extract && pg.title)
      .map(pg => ({ title: pg.title, text: pg.extract.trim(),
        url: 'https://en.wikiversity.org/wiki/' + encodeURIComponent(pg.title.replace(/ /g, '_')) }));
  }
};

/** Fetch live sources for a question. Never throws — returns what it could get. */
async function researchOnline(question) {
  const out = { sources: [], errors: [] };
  const q = String(question || '').trim();
  if (!q) return out;
  const jobs = [
    RESEARCH.wikipedia(q).then(r => { out.sources.push(...r.map(s => ({ ...s, from: 'Wikipedia' }))); })
      .catch(e => out.errors.push('Wikipedia: ' + (e.message || e))),
    RESEARCH.duckduckgo(q).then(r => { out.sources.push(...r.map(s => ({ ...s, from: 'DuckDuckGo' }))); })
      .catch(e => out.errors.push('DuckDuckGo: ' + (e.message || e))),
    RESEARCH.wikibooks(q).then(r => { out.sources.push(...r.map(s => ({ ...s, from: 'Wikibooks' }))); })
      .catch(e => out.errors.push('Wikibooks: ' + (e.message || e))),
    RESEARCH.wikiversity(q).then(r => { out.sources.push(...r.map(s => ({ ...s, from: 'Wikiversity' }))); })
      .catch(e => out.errors.push('Wikiversity: ' + (e.message || e)))
  ];
  await Promise.all(jobs);
  // de-duplicate by URL
  const seen = new Set();
  out.sources = out.sources.filter(s => {
    const key = (s.url || s.title).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 5);
  return out;
}

/** Optional Gemini synthesis. Only runs if the student supplied a key. */
async function geminiCall(model, key, body) {
  const res = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + encodeURIComponent(key),
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const json = await res.json().catch(() => null);
  if (!res.ok) {
    const err = new Error((json && json.error && json.error.message) || ('Gemini responded ' + res.status));
    err.status = res.status;
    throw err;
  }
  const text = json.candidates && json.candidates[0] && json.candidates[0].content
    && json.candidates[0].content.parts && json.candidates[0].content.parts.map(p => p.text || '').join('\n');
  return text && text.trim() ? text.trim() : null;
}

function geminiModelChain() {
  const chosen = (state.settings.geminiModel || GEMINI_MODELS[0]).trim() || GEMINI_MODELS[0];
  return [chosen, ...GEMINI_MODELS.filter(m => m !== chosen)];
}

function geminiRetryable(err) {
  const m = String((err && err.message) || '').toLowerCase();
  // retired model, or Google throttling ("high demand", quota, overload) → try next model
  return err.status === 404 || err.status === 429 || err.status === 503
    || /not found|deprecated|retired|no longer|unsupported|has been shut|high demand|resource exhausted|try again|overloaded|unavailable|capacity/i.test(m);
}

async function geminiAnswer(question, context) {
  const key = (state.settings.geminiApiKey || '').trim();
  if (!key) return null;
  const prompt = [
    `You are Buddy, a friendly Nigerian secondary-school tutor preparing a ${state.profile.classLevel || 'secondary'} student for ${buddyExamLine()}.`,
    'If the student is greeting you, making small talk or asking plain arithmetic, answer naturally and briefly like a friendly person — never use the definition/formula/example structure for those.',
    'For genuine study questions, use this structure: a one-sentence definition, the key formula or rule, one worked example with numbers, and one common exam trap.',
    'Never use LaTeX or code markup: no dollar signs, no backslash commands, no curly braces around powers. Write plain readable text like x^2, 3/4, sqrt(x), pi, × and ÷, and write naira amounts as N500.',
    'If the retrieved context below is irrelevant or empty, answer from your own knowledge and say so.',
    '',
    'STUDENT QUESTION: ' + question,
    '',
    'RETRIEVED CONTEXT (cite it where useful):',
    context || '(none)'
  ].join('\n');
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.4, maxOutputTokens: 900 }
  };
  let lastErr = null;
  for (const model of geminiModelChain()) {
    try {
      const text = await geminiCall(model, key, body);
      if (model !== state.settings.geminiModel) {  // remember the model that actually works
        state.settings.geminiModel = model;
        saveSettings();
      }
      return text;
    } catch (err) {
      lastErr = err;
      if (!geminiRetryable(err)) return { error: err.message };  // bad key, quota, etc. — don't retry
    }
  }
  return { error: (lastErr && lastErr.message) || 'Gemini unavailable' };
}

function setGeminiModel(value) {
  state.settings.geminiModel = value;
  saveSettings();
  toast('Buddy will use ' + value);
}

async function testGemini() {
  const input = document.getElementById('gemini-key');
  const key = ((input && input.value) || state.settings.geminiApiKey || '').trim();
  if (!key) { toast('Paste your Gemini API key first 🙂'); return; }
  toast('Testing your Gemini key…');
  let lastErr = null;
  for (const model of geminiModelChain()) {
    try {
      await geminiCall(model, key, {
        contents: [{ role: 'user', parts: [{ text: 'Reply with the single word: ready' }] }],
        generationConfig: { maxOutputTokens: 10 }
      });
      state.settings.geminiApiKey = key;
      state.settings.geminiModel = model;
      saveSettings();
      renderPage();
      toast('✅ Gemini connected! Buddy will use ' + model);
      return;
    } catch (err) {
      lastErr = err;
      if (!geminiRetryable(err)) break;
    }
  }
  toast('❌ ' + ((lastErr && lastErr.message) || 'Gemini could not be reached'));
}

function sourcesHtml(sources) {
  if (!sources || !sources.length) return '';
  return `<h4>🌐 Sources</h4><ul>${sources.map(s =>
    `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer" class="font-semibold text-indigo-600 underline decoration-indigo-300 hover:decoration-indigo-600">${escapeHtml(s.title)}</a>
     <span class="text-slate-400">· ${escapeHtml(s.from || '')}</span></li>`).join('')}</ul>`;
}

function researchHtml(sources) {
  if (!sources || !sources.length) return '';
  return `<h4>🔎 Live from the web</h4>${sources.slice(0, 2).map(s =>
    `<div class="box"><b>${escapeHtml(s.title)}</b><br>${escapeHtml(s.text.slice(0, 700))}${s.text.length > 700 ? '…' : ''}</div>`).join('')}`;
}

/* Safe four-operator calculator: digits and + - * / ( ) only, parsed by hand (never eval). */
function safeMath(input) {
  const s = String(input || '').replace(/\s+/g, '').replace(/×/g, '*').replace(/÷/g, '/').replace(/-/g, '-');
  if (!/^[\d+\-*/().]+$/.test(s) || !/\d/.test(s) || !/[+\-*/]/.test(s)) return null;
  try {
    let i = 0;
    const expr = () => { let v = term(); while (s[i] === '+' || s[i] === '-') { const op = s[i++]; const r = term(); v = op === '+' ? v + r : v - r; } return v; };
    const term = () => { let v = factor(); while (s[i] === '*' || s[i] === '/') { const op = s[i++]; const r = factor(); v = op === '*' ? v * r : v / r; } return v; };
    const factor = () => {
      if (s[i] === '-') { i++; return -factor(); }
      if (s[i] === '+') { i++; return factor(); }
      if (s[i] === '(') { i++; const v = expr(); if (s[i] !== ')') throw new Error('bad'); i++; return v; }
      const m = /^\d+\.?\d*|^\.\d+/.exec(s.slice(i));
      if (!m) throw new Error('bad');
      i += m[0].length;
      return parseFloat(m[0]);
    };
    const v = expr();
    if (i !== s.length || !isFinite(v)) return null;
    return { expr: s, value: v };
  } catch (e) { return null; }
}

const SMALLTALK_RE = /^(hi|hello|hey|howdy|sup|good\s+(morning|afternoon|evening)|thanks?|thank you|well done|good job|appreciate|how are you|what'?s up|whats up|good night|bye|love you)\b/;

/** Build the full Buddy answer: local knowledge + optional live research. */
async function composeAnswer(question) {
  const local = buddyReply(question);
  const chips = new Set(local.chips || []);
  const raw = String(question || '').trim().toLowerCase();

  // Small talk and plain arithmetic get a human reply — no web research, no Gemini.
  const arith = safeMath(raw);
  if (SMALLTALK_RE.test(raw) || arith) {
    if (arith) {
      const nice = Math.round(arith.value * 10000) / 10000;
      return {
        html: `<span class="tag">Buddy · quick maths</span><h4>${escapeHtml(arith.expr)} = <b>${nice}</b></h4>
          <p>Want the working, or something harder? I solve quadratics like <i>x^2 - 5x + 6 = 0</i> and simultaneous equations step by step.</p>`,
        chips: ['Solve x^2 - 5x + 6', 'Solve 2x + y = 11 and x - y = 1', 'Explain BODMAS']
      };
    }
    return { html: local.html, chips: [...chips].slice(0, 4) };
  }

  if (!state.settings.research) {
    return { html: local.html, chips: [...chips].slice(0, 4) };
  }

  const research = await researchOnline(question);
  const context = research.sources
    .map(s => `[${s.from}] ${s.title}: ${s.text.slice(0, 1200)}`).join('\n\n');

  let head = local.html;
  let geminiNote = '';

  if ((state.settings.geminiApiKey || '').trim()) {
    const answer = await geminiAnswer(question, context);
    if (answer && !answer.error) {
      head = `<span class="tag">Buddy · live research</span>${mdToHtml(answer)}`;
    } else if (answer && answer.error) {
      geminiNote = `<div class="box" style="border-left-color:#f59e0b">Gemini key issue: ${escapeHtml(answer.error)} — showing the built-in answer and raw sources instead.</div>`;
    }
  }

  const body = research.sources.length
    ? `${geminiNote}${head}${researchHtml(research.sources)}${sourcesHtml(research.sources)}`
    : `${geminiNote}${head}<div class="box" style="border-left-color:#f59e0b">I could not reach the internet for this one${research.errors.length ? ' (' + escapeHtml(research.errors[0]) + ')' : ''} — here is my built-in lesson instead.</div>`;

  chips.add('Search the web: ' + question.slice(0, 40));
  return { html: body, chips: [...chips].slice(0, 4) };
}

function round4(n) { return Math.round(n * 10000) / 10000; }
function fmtQuad(a, b, c) {
  const aPart = a === 1 ? 'x^2' : (a === -1 ? '-x^2' : `${a}x^2`);
  const bPart = b === 0 ? '' : (b > 0 ? ` + ${b === 1 ? '' : b}x` : ` - ${Math.abs(b) === 1 ? '' : Math.abs(b)}x`);
  const cPart = c === 0 ? '' : (c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`);
  return `${aPart}${bPart}${cPart}`;
}

/* ==================================================================
   PURE HELPERS (no DOM) — also the unit-testable core
   ================================================================== */
function computeStreak(lastActiveDate, todayStr) {
  const last = String(lastActiveDate || '').trim();
  if (!last) return 2; // 2 = brand-new streak (no history yet)
  if (last === todayStr) return 0; // unchanged: already counted today
  const a = new Date(last + 'T00:00:00');
  const b = new Date(todayStr + 'T00:00:00');
  if (isNaN(a.getTime()) || isNaN(b.getTime()) || b < a) return 1;
  const days = Math.round((b - a) / 86400000);
  return days === 1 ? -1 : 1; // -1 = signal to continue the streak
}

/* Duolingo-style: a missed day consumes a streak freeze if one is banked,
   otherwise the streak resets. `event` tells the UI which animation to play.
     same   — already counted today, nothing changes
     start  — brand-new streak (day 1)
     extend — consecutive day, streak grows
     saved  — a gap, but a freeze was consumed: streak survives
     reset  — a gap with no freeze: streak restarts at 1                    */
function applyStreak(streak, lastActiveDate, todayStr, freezes = 0) {
  const s = Number(streak) || 0, f = Number(freezes) || 0;
  const signal = computeStreak(lastActiveDate, todayStr);
  if (signal === 0) return { streak: s, freezes: f, changed: false, event: 'same' };
  if (signal === -1) return { streak: s + 1, freezes: f, changed: true, event: 'extend' };
  if (signal === 2) return { streak: 1, freezes: f, changed: true, event: 'start' };
  if (f > 0) return { streak: s, freezes: f - 1, changed: true, event: 'saved' };
  return { streak: 1, freezes: f, changed: true, event: 'reset' };
}

/* ---------------- Streak freezes, tasks & badges ---------------- */
const FREEZE_EVERY_TASKS = 5;  // earn 1 freeze per 5 completed tasks
const MAX_FREEZES = 3;         // bank at most 3

const BADGES = [
  { id: 'first-steps',  icon: '🎯', name: 'First Steps',     desc: 'Complete your first quiz',                    test: s => (s.tasks.quizzes || 0) >= 1 },
  { id: 'quiz-machine', icon: '📝', name: 'Quiz Machine',    desc: 'Complete 10 quizzes',                         test: s => (s.tasks.quizzes || 0) >= 10 },
  { id: 'exam-ready',   icon: '🎓', name: 'Exam Ready',      desc: 'Complete 25 quizzes',                         test: s => (s.tasks.quizzes || 0) >= 25 },
  { id: 'perfectionist',icon: '💯', name: 'Perfectionist',   desc: 'Score 100% on any quiz',                      test: s => (s.tasks.perfects || 0) >= 1 },
  { id: 'card-shark',   icon: '🎴', name: 'Card Shark',      desc: 'Review 100 flashcards',                       test: s => (s.tasks.cards || 0) >= 100 },
  { id: 'deck-master',  icon: '🃏', name: 'Deck Master',     desc: 'Finish 10 flashcard sessions',                test: s => (s.tasks.sessions || 0) >= 10 },
  { id: 'focus-first',  icon: '🎯', name: 'Focused',         desc: 'Complete your first focus session',           test: s => (s.tasks.focusSessions || 0) >= 1 },
  { id: 'focus-5',      icon: '🧘', name: 'Deep Focus',      desc: 'Complete 5 focus sessions',                   test: s => (s.tasks.focusSessions || 0) >= 5 },
  { id: 'focus-60',     icon: '⏳', name: 'Time Bender',     desc: 'Bank 60 focused minutes',                     test: s => (s.tasks.focusMinutes || 0) >= 60 },
  { id: 'past-pro',     icon: '📜', name: 'Past Paper Pro',  desc: 'Finish a real past-question drill',           test: s => (s.tasks.pastDrills || 0) >= 1 },
  { id: 'timed-ace',    icon: '🏅', name: 'Timed Ace',       desc: '100% on a timed quiz of 15+ questions',       test: s => (s.tasks.timedAces || 0) >= 1 },
  { id: 'night-owl',    icon: '🦉', name: 'Night Owl',       desc: 'Study after 9 pm',                            test: s => !!s.tasks.nightOwl },
  { id: 'early-bird',   icon: '🌅', name: 'Early Bird',      desc: 'Study before 6 am',                           test: s => !!s.tasks.earlyBird },
  { id: 'streak-3',     icon: '🌱', name: 'Warming Up',      desc: 'Reach a 3-day study streak',                  test: s => (s.streak || 0) >= 3 },
  { id: 'streak-7',     icon: '🔥', name: 'Week Warrior',    desc: '7-day streak — a full week of study!',        test: s => (s.streak || 0) >= 7 },
  { id: 'streak-30',    icon: '🌙', name: 'Monthly Master',  desc: '30-day streak — a whole month!',              test: s => (s.streak || 0) >= 30 },
  { id: 'streak-365',   icon: '👑', name: 'Year Legend',     desc: '365-day streak — an entire year. Unreal.',    test: s => (s.streak || 0) >= 365 },
  { id: 'two-weeks',    icon: '⚡', name: 'Fortnight Force', desc: 'A secret badge. Keep your streak alive to discover it.', reveal: 'Keep a 14-day study streak.', secret: true, test: s => (s.streak || 0) >= 14 },
  { id: 'sharpshooter', icon: '🎖️', name: 'Sharpshooter',   desc: 'A secret badge. Aim for perfection to discover it.', reveal: 'Score 100% on five quizzes.', secret: true, test: s => (s.tasks.perfects || 0) >= 5 },
  { id: 'half-century', icon: '🚀', name: 'Half Century',   desc: 'A secret badge. Keep taking quizzes to discover it.', reveal: 'Complete 50 quizzes.', secret: true, test: s => (s.tasks.quizzes || 0) >= 50 },
  { id: 'centurion',    icon: '🏛️', name: 'Centurion',      desc: 'A secret badge. Only the most dedicated find this one.', reveal: 'Complete 100 quizzes.', secret: true, test: s => (s.tasks.quizzes || 0) >= 100 },
  { id: 'card-legend',  icon: '🎇', name: 'Card Legend',    desc: 'A secret badge. The flashcards hold its secret.', reveal: 'Review 500 flashcards.', secret: true, test: s => (s.tasks.cards || 0) >= 500 },
  { id: 'all-rounder',  icon: '🌍', name: 'All-Rounder',    desc: 'A secret badge. Variety is the clue.', reveal: 'Take quizzes in three different subjects.', secret: true, test: s => Object.keys(s.quizStats && s.quizStats.bySubject || {}).length >= 3 },
  { id: 'weekend-warrior', icon: '📅', name: 'Weekend Warrior', desc: 'A secret badge. Some heroes study when others rest.', reveal: 'Study on a Saturday or Sunday.', secret: true, test: s => !!s.tasks.weekendStudy },
  { id: 'buddy-friend', icon: '🤖', name: 'Study Buddy',    desc: 'A secret badge. Somebody in the app knows the way.', reveal: 'Chat with Buddy 10 times.', secret: true, test: s => (s.tasks.buddyChats || 0) >= 10 },
  { id: 'focus-15',     icon: '🕰️', name: 'Marathon Mind',  desc: 'A secret badge. Deep work unlocks it.', reveal: 'Complete 15 focus sessions.', secret: true, test: s => (s.tasks.focusSessions || 0) >= 15 },
  { id: 'streak-5', icon: '🌿', name: 'Green Flame', reveal: 'Keep a 5-day study streak.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.streak || 0) >= 5 },
  { id: 'streak-10', icon: '💎', name: 'Diamond Days', reveal: 'Keep a 10-day study streak.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.streak || 0) >= 10 },
  { id: 'streak-21', icon: '🧠', name: 'Habit Hero', reveal: 'Keep a 21-day streak — a habit is born.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.streak || 0) >= 21 },
  { id: 'streak-45', icon: '🛡️', name: 'Shield of Consistency', reveal: 'Keep a 45-day study streak.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.streak || 0) >= 45 },
  { id: 'streak-60', icon: '🌋', name: 'Magma Mind', reveal: 'Keep a 60-day study streak.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.streak || 0) >= 60 },
  { id: 'streak-90', icon: '🏔️', name: 'Summit Soul', reveal: 'Keep a 90-day study streak.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.streak || 0) >= 90 },
  { id: 'streak-180', icon: '🌠', name: 'Half-Year Hero', reveal: 'Keep a 180-day study streak.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.streak || 0) >= 180 },
  { id: 'streak-250', icon: '🐉', name: 'Dragon Discipline', reveal: 'Keep a 250-day study streak.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.streak || 0) >= 250 },
  { id: 'quiz-20', icon: '📚', name: 'Bookworm', reveal: 'Complete 20 quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.quizzes || 0) >= 20 },
  { id: 'quiz-30', icon: '🧗', name: 'Quiz Climber', reveal: 'Complete 30 quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.quizzes || 0) >= 30 },
  { id: 'quiz-40', icon: '🎢', name: 'Momentum', reveal: 'Complete 40 quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.quizzes || 0) >= 40 },
  { id: 'quiz-75', icon: '🏹', name: 'Steady Aim', reveal: 'Complete 75 quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.quizzes || 0) >= 75 },
  { id: 'quiz-150', icon: '🌟', name: 'Star Pupil', reveal: 'Complete 150 quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.quizzes || 0) >= 150 },
  { id: 'quiz-200', icon: '🦁', name: 'Lion Learner', reveal: 'Complete 200 quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.quizzes || 0) >= 200 },
  { id: 'quiz-300', icon: '🐘', name: 'Giant Memory', reveal: 'Complete 300 quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.quizzes || 0) >= 300 },
  { id: 'perfect-3', icon: '🥇', name: 'Gold Standard', reveal: 'Score 100% on three quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.perfects || 0) >= 3 },
  { id: 'perfect-10', icon: '💠', name: 'Flawless Ten', reveal: 'Score 100% on ten quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.perfects || 0) >= 10 },
  { id: 'perfect-20', icon: '🎆', name: 'Firework Mind', reveal: 'Score 100% on twenty quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.perfects || 0) >= 20 },
  { id: 'perfect-35', icon: '🏆', name: 'Trophy Case', reveal: 'Score 100% on thirty-five quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.perfects || 0) >= 35 },
  { id: 'card-200', icon: '🌊', name: 'Wave Rider', reveal: 'Review 200 flashcards.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.cards || 0) >= 200 },
  { id: 'card-300', icon: '🐬', name: 'Dolphin Mind', reveal: 'Review 300 flashcards.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.cards || 0) >= 300 },
  { id: 'card-750', icon: '🦑', name: 'Ink Scholar', reveal: 'Review 750 flashcards.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.cards || 0) >= 750 },
  { id: 'card-1000', icon: '🐋', name: 'Whale Memory', reveal: 'Review 1,000 flashcards.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.cards || 0) >= 1000 },
  { id: 'card-1500', icon: '🌪️', name: 'Card Cyclone', reveal: 'Review 1,500 flashcards.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.cards || 0) >= 1500 },
  { id: 'session-20', icon: '🪴', name: 'Steady Grower', reveal: 'Finish 20 flashcard sessions.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.sessions || 0) >= 20 },
  { id: 'session-30', icon: '🎠', name: 'Deck Dynamo', reveal: 'Finish 30 flashcard sessions.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.sessions || 0) >= 30 },
  { id: 'session-50', icon: '🎰', name: 'Half-Hundred Decks', reveal: 'Finish 50 flashcard sessions.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.sessions || 0) >= 50 },
  { id: 'focus-10', icon: '🧭', name: 'True North', reveal: 'Complete 10 focus sessions.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.focusSessions || 0) >= 10 },
  { id: 'focus-25', icon: '🪜', name: 'Quarter Climb', reveal: 'Complete 25 focus sessions.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.focusSessions || 0) >= 25 },
  { id: 'focus-50', icon: '🕹️', name: 'Focus Titan', reveal: 'Complete 50 focus sessions.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.focusSessions || 0) >= 50 },
  { id: 'focusmin-120', icon: '🎧', name: 'Deep Listener', reveal: 'Bank 120 focused minutes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.focusMinutes || 0) >= 120 },
  { id: 'focusmin-300', icon: '🌤️', name: 'Five-Hour Flame', reveal: 'Bank 300 focused minutes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.focusMinutes || 0) >= 300 },
  { id: 'focusmin-600', icon: '🔋', name: 'Fully Charged', reveal: 'Bank 600 focused minutes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.focusMinutes || 0) >= 600 },
  { id: 'past-3', icon: '🗞️', name: 'Paper Tiger', reveal: 'Finish 3 past-question drills.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.pastDrills || 0) >= 3 },
  { id: 'past-5', icon: '🖋️', name: 'Ink Master', reveal: 'Finish 5 past-question drills.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.pastDrills || 0) >= 5 },
  { id: 'past-10', icon: '📰', name: 'Press Baron', reveal: 'Finish 10 past-question drills.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.pastDrills || 0) >= 10 },
  { id: 'past-20', icon: '🏛️', name: 'The Examiner', reveal: 'Finish 20 past-question drills.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.pastDrills || 0) >= 20 },
  { id: 'timed-3', icon: '⏱️', name: 'Clockwork', reveal: '100% on three timed 15+ quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.timedAces || 0) >= 3 },
  { id: 'timed-5', icon: '⌛', name: 'Hourglass Hero', reveal: '100% on five timed 15+ quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.timedAces || 0) >= 5 },
  { id: 'timed-10', icon: '🥁', name: 'Drumroll Ace', reveal: '100% on ten timed 15+ quizzes.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.timedAces || 0) >= 10 },
  { id: 'buddy-25', icon: '💬', name: 'Chatterbox', reveal: 'Chat with Buddy 25 times.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.buddyChats || 0) >= 25 },
  { id: 'buddy-50', icon: '🦜', name: 'Parley Parrot', reveal: 'Chat with Buddy 50 times.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.buddyChats || 0) >= 50 },
  { id: 'buddy-100', icon: '🧞', name: 'Genie Friend', reveal: 'Chat with Buddy 100 times.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.buddyChats || 0) >= 100 },
  { id: 'tasks-100', icon: '💪', name: 'Hundred Club', reveal: 'Complete 100 tasks of any kind.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.tasksTotal || 0) >= 100 },
  { id: 'tasks-250', icon: '🦾', name: 'Iron Student', reveal: 'Complete 250 tasks of any kind.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.tasks.tasksTotal || 0) >= 250 },
  { id: 'subj-5', icon: '🖐️', name: 'High-Five Scholar', reveal: 'Take quizzes in five different subjects.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => Object.keys(s.quizStats && s.quizStats.bySubject || {}).length >= 5 },
  { id: 'subj-7', icon: '🌈', name: 'Rainbow Scholar', reveal: 'Take quizzes in all seven subjects.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => Object.keys(s.quizStats && s.quizStats.bySubject || {}).length >= 7 },
  { id: 'shift-worker', icon: '🌗', name: 'Night & Day', reveal: 'Study both before 6 am and after 9 pm.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => !!s.tasks.nightOwl && !!s.tasks.earlyBird },
  { id: 'ice-vault', icon: '❄️', name: 'Ice Vault', reveal: 'Bank two streak freezes at once.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.streakFreezes || 0) >= 2 },
  { id: 'collector', icon: '🧿', name: 'Badge Magnet', reveal: 'Discover 15 badges in total.', desc: 'A secret badge. Nobody knows how to find this one... yet.', secret: true, test: s => (s.badges || []).length >= 15 }
];

function checkBadges() {
  for (const b of BADGES) {
    if (!state.badges.includes(b.id) && b.test(state)) {
      state.badges.push(b.id);
      if (b.secret && state.streakFreezes < MAX_FREEZES) state.streakFreezes++;
      queueCelebration({ type: 'badge', badge: b });
    }
  }
}

/* Count a completed task; every FREEZE_EVERY_TASKS tasks banks a freeze. */
const MODE_LABELS = { cbt: 'Practice exam', topic: 'Topic quiz', mock: 'Mock', past: 'Past drill' };
function pushHistory(result, subject, mode) {
  const qs = state.quizStats;
  qs.history = Array.isArray(qs.history) ? qs.history : [];
  qs.history.push({ d: localISO(), p: result.percent, s: subject, m: mode || 'quiz', c: result.correct, t: result.total });
  if (qs.history.length > 60) qs.history = qs.history.slice(-60);
  qs.days = qs.days || {};
  const d0 = localISO();
  qs.days[d0] = (qs.days[d0] || 0) + 1;
  const keys = Object.keys(qs.days);
  if (keys.length > 200) { keys.sort(); for (const k of keys.slice(0, keys.length - 200)) delete qs.days[k]; }
}
/* charts moved to src/modules/charts.mjs */function recordTask(kind, result) {
  const t = state.tasks;
  if (kind === 'quiz') { t.quizzes++; if (result && result.percent === 100) t.perfects++; }
  if (kind === 'card') t.cards++;
  if (kind === 'session') t.sessions++;
  if (kind === 'lesson') { t.lessons = (t.lessons || 0) + 1; }
  if (kind === 'focus') {
    t.focusSessions = (t.focusSessions || 0) + 1;
    t.focusMinutes = (t.focusMinutes || 0) + ((result && result.minutes) || 0);
  }
  const hr = new Date().getHours();
  if (hr >= 21 || hr < 4) t.nightOwl = true;
  if (hr >= 4 && hr < 6) t.earlyBird = true;
  const day = new Date().getDay();
  if (day === 0 || day === 6) t.weekendStudy = true;
  t.tasksTotal++;

  // Today's-mission bookkeeping (resets each new day)
  const d = todayISO();
  if (kind !== 'quiz') { const qs = state.quizStats; qs.days = qs.days || {}; const dl = localISO(); qs.days[dl] = (qs.days[dl] || 0) + 1; }
  if (!state.daily || state.daily.date !== d) state.daily = { date: d, lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '', buddy: 0 };
  if (kind === 'lesson') { state.daily.lessons++; if (result && result.title) state.daily.readTopic = result.title; }
  if (kind === 'card') state.daily.cards++;
  if (kind === 'quiz') state.daily.quizzes++;
  if (kind === 'focus' || kind === 'session') state.daily.focus++;

  // Streaks are ACTIVITY-based: a study action (lesson / quiz / flashcards / focus) advances the day.
  const rolled = applyStreak(state.streak, state.lastActiveDate, d, state.streakFreezes);
  if (rolled.changed) {
    state.streak = rolled.streak;
    state.streakFreezes = rolled.freezes;
    state.lastActiveDate = d;
    queueCelebration({ type: rolled.event === 'extend' ? 'streak' : rolled.event });
    if ((rolled.event === 'extend') && state.streak % 7 === 0 && state.streakFreezes < MAX_FREEZES) {
      state.streakFreezes++;
      queueCelebration({ type: 'freeze' });
    }
    updateChrome();
  }
  checkBadges();
  persistProgress();
}

/* ---------------- Focus sessions (Pomodoro-style deep work) ---------------- */
let focusInt = null;
function openFocusModal() {
  const m = document.getElementById('focus-modal');
  if (m) { m.classList.remove('hidden'); m.classList.add('flex'); }
}
function closeFocusModal() {
  const m = document.getElementById('focus-modal');
  if (m) { m.classList.add('hidden'); m.classList.remove('flex'); }
}
function focusModalBackdrop(event) {
  if (event && event.target === event.currentTarget) closeFocusModal();
}
function updateFocusPill() {
  const pill = document.getElementById('focus-pill');
  if (!pill) return;
  const f = state.focus;
  if (!f.active) { pill.classList.add('hidden'); return; }
  pill.classList.remove('hidden');
  const label = document.getElementById('focus-pill-time');
  if (label) label.textContent = fmtCountdown(f.endsAt - Date.now());
}
function startFocus(minutes) {
  const min = Math.max(1, Math.min(180, parseInt(minutes, 10) || 25));
  state.focus = { active: true, endsAt: Date.now() + min * 60000, minutes: min };
  closeFocusModal();
  updateFocusPill();
  if (focusInt) clearInterval(focusInt);
  focusInt = setInterval(focusTick, 1000);
}
function focusTick() {
  const f = state.focus;
  if (!f.active) { if (focusInt) { clearInterval(focusInt); focusInt = null; } return; }
  const left = f.endsAt - Date.now();
  if (left <= 0) {
    if (focusInt) { clearInterval(focusInt); focusInt = null; }
    const doneMinutes = f.minutes;
    f.active = false;
    updateFocusPill();
    recordTask('focus', { minutes: doneMinutes });
    queueCelebration({ type: 'focus', minutes: doneMinutes });
    return;
  }
  updateFocusPill();
}
function stopFocus() {
  state.focus.active = false;
  if (focusInt) { clearInterval(focusInt); focusInt = null; }
  updateFocusPill();
}

/* ---------------- Celebration overlay (streak / freeze / badge) ---------------- */
const celebQueue = [];
let celebBusy = false, celebTimer = null;

function queueCelebration(c) { celebQueue.push(c); if (!celebBusy) nextCelebration(); }

function nextCelebration() {
  const c = celebQueue.shift();
  if (!c) { celebBusy = false; return; }
  celebBusy = true;
  const m = $('#celebration');
  const icon = $('#celebration-icon'), kick = $('#celebration-kicker'),
        title = $('#celebration-title'), sub = $('#celebration-sub');
  if (c.type === 'streak' || c.type === 'start') {
    showStreakFlame(c.type);
    return;
  } else if (c.type === 'saved') {
    showFreezeIce();
    return;
  } else if (c.type === 'reset') {
    icon.textContent = '💔'; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-rose-50 text-6xl';
    kick.textContent = 'Fresh start';
    kick.className = 'text-[11px] font-black uppercase tracking-widest text-rose-500';
    title.textContent = 'Streak restarted at Day 1';
    sub.textContent = 'A missed day (and no freeze banked) resets the count. Complete tasks to earn ❄️ freezes — today is Day 1. You’ve got this!';
  } else if (c.type === 'focus') {
    icon.textContent = '⏰'; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-violet-50 text-6xl ring-pulse';
    kick.textContent = 'Focus session complete';
    kick.className = 'text-[11px] font-black uppercase tracking-widest text-violet-500';
    title.textContent = `${c.minutes || state.focus.minutes} minutes of deep work`;
    sub.textContent = 'Real concentration just levelled up your brain. Finish more sessions to grow the Focused badge family!';
  } else if (c.type === 'freeze') {
    icon.textContent = '❄️'; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-sky-50 text-6xl ring-pulse';
    kick.textContent = 'Reward earned';
    kick.className = 'text-[11px] font-black uppercase tracking-widest text-sky-500';
    title.textContent = 'Streak freeze earned!';
    sub.textContent = 'A 7-day streak milestone banked this freeze (max 3). It shields one missed day — a freeze never grows the streak by itself.';
  } else if (c.type === 'badge') {
    const sec = !!c.badge.secret;
    icon.textContent = c.badge.icon; icon.className = 'mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full ' + (sec ? 'bg-amber-100' : 'bg-indigo-50') + ' text-6xl badge-glow';
    kick.textContent = sec ? 'Secret badge unlocked!' : 'Badge unlocked';
    kick.className = 'text-[11px] font-black uppercase tracking-widest ' + (sec ? 'text-amber-500' : 'text-indigo-500');
    title.textContent = c.badge.name;
    sub.textContent = (c.badge.reveal || c.badge.desc) + (sec ? ' ❄️ +1 streak freeze banked!' : '');
  }
  // restart the card pop + confetti
  const card = $('#celebration-card');
  card.classList.remove('celeb-pop'); void card.offsetWidth; card.classList.add('celeb-pop');
  burstConfettiInto($('#celebration-confetti'));
  m.classList.remove('hidden'); m.classList.add('flex');
  clearTimeout(celebTimer);
  celebTimer = setTimeout(dismissCelebration, 3400);
}

/* Streak moments get their own treat: a friendly flame that rises and fades — no card, no blocking. */
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

let freezeTimer = null;
function showFreezeIce() {
  const wrap = $('#freeze-overlay');
  const flame = $('#freeze-flame'), ice = $('#freeze-ice'), crack = $('#freeze-crack');
  $('#freeze-title').textContent = `Freeze used — ${state.streak}-day streak lives`;
  $('#freeze-sub').textContent = `You missed a day, but ice shielded your flame. ${state.streakFreezes} freeze${state.streakFreezes === 1 ? '' : 's'} left in the bank.`;
  if (flame) { flame.classList.remove('freeze-flame-anim'); void flame.offsetWidth; flame.classList.add('freeze-flame-anim'); }
  if (ice) { ice.classList.remove('freeze-ice-anim'); void ice.offsetWidth; ice.classList.add('freeze-ice-anim'); }
  if (crack) { crack.classList.remove('freeze-crack-anim'); void crack.offsetWidth; crack.classList.add('freeze-crack-anim'); }
  for (let i = 1; i <= 6; i++) {
    const sh = $('#freeze-shard-' + i);
    if (!sh) continue;
    sh.classList.remove('freeze-shard-anim'); void sh.offsetWidth; sh.classList.add('freeze-shard-anim');
  }
  wrap.classList.remove('hidden'); wrap.classList.add('flex');
  clearTimeout(freezeTimer);
  freezeTimer = setTimeout(() => {
    wrap.classList.add('hidden'); wrap.classList.remove('flex');
    celebBusy = false;
    nextCelebration();
  }, 3800);
}

function dismissFreezeIce() {
  clearTimeout(freezeTimer);
  const wrap = $('#freeze-overlay');
  wrap.classList.add('hidden'); wrap.classList.remove('flex');
  celebBusy = false;
  setTimeout(nextCelebration, 250);
}

function dismissCelebration() {
  clearTimeout(celebTimer);
  const m = $('#celebration');
  m.classList.add('hidden'); m.classList.remove('flex');
  setTimeout(nextCelebration, 250);
}

function burstConfettiInto(layer) {
  if (!layer) return;
  layer.innerHTML = '';
  const colors = ['#f97316', '#6366f1', '#10b981', '#f59e0b', '#ec4899', '#38bdf8', '#facc15', '#4ade80'];
  for (let i = 0; i < 44; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti-bit';
    bit.style.left = (3 + Math.random() * 94) + '%';
    bit.style.background = colors[i % colors.length];
    bit.style.width = (4 + Math.random() * 3.5) + 'px';
    bit.style.height = (6 + Math.random() * 5) + 'px';
    bit.style.animationDelay = (Math.random() * 0.35) + 's';
    bit.style.animationDuration = (0.9 + Math.random() * 0.8) + 's';
    layer.appendChild(bit);
  }
}

function gradeQuiz(quiz, answers) {
  const total = quiz.length;
  let correct = 0;
  const perQuestion = quiz.map((q, i) => {
    const chosen = answers[q.id !== undefined ? q.id : i];
    const isCorrect = chosen === q.correct;
    if (isCorrect) correct++;
    return { idx: i, chosen, correct: q.correct, isCorrect };
  });
  return {
    correct, total,
    percent: total ? Math.round((correct / total) * 100) : 0,
    perQuestion
  };
}

function mergeQuizStats(prev, subject, result) {
  const stats = {
    attempts: 0, correct: 0, total: 0, bestPercent: 0, bySubject: {},
    ...(prev || {})
  };
  stats.bySubject = { ...(stats.bySubject || {}) };
  stats.byTopic = { ...(stats.byTopic || {}) };
  for (const [key, b] of Object.entries(result.byTopic || {})) {
    const t0 = stats.byTopic[key] || { correct: 0, total: 0 };
    stats.byTopic[key] = { correct: t0.correct + b.correct, total: t0.total + b.total };
  }
  stats.attempts = (stats.attempts || 0) + 1;
  stats.correct = (stats.correct || 0) + result.correct;
  stats.total = (stats.total || 0) + result.total;
  stats.bestPercent = Math.max(stats.bestPercent || 0, result.percent);
  const s = stats.bySubject[subject] || { attempts: 0, correct: 0, total: 0, bestPercent: 0 };
  stats.bySubject[subject] = {
    attempts: s.attempts + 1,
    correct: s.correct + result.correct,
    total: s.total + result.total,
    bestPercent: Math.max(s.bestPercent || 0, result.percent)
  };
  return stats;
}

function initials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'S';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function todayISO() { return new Date().toISOString().slice(0, 10); }

function levelTopics(subject, level) {
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

/* ==================================================================
   REAL PAST QUESTIONS — actual questions lifted from published WAEC,
   NECO and JAMB papers (1988–2025), compiled from the public
   question banks of SmarTest (smartest.ng) and ExamBuddy
   (exambuddy.com.ng) and embedded here so they work fully offline.
   Each keeps its exam-body + year attribution, the official correct
   answer, and a worked explanation revealed after submission.
   ================================================================== */
/* PASTQ moved to src/data/pastq.mjs */

/** The past-paper drill bank for a subject (offline, attributed). */
function pastFor(subject) {
  return (PASTQ[subject] || []).map((q, i) => ({ ...q, id: `past-${subject.slice(0, 3).toLowerCase()}-${i}` }));
}

/** Class levels in school order; students are quizzed from the floor of their
 *  stage up to their own class — a JSS1 student never meets SS content and an
 *  SS2 student never meets SS3-only topics. */
const LEVEL_ORDER = ['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3'];
function levelsUpTo(classLevel) {
  const lvl = LEVEL_ORDER.includes(classLevel) ? classLevel : 'SS3';
  const stage = lvl.startsWith('JSS') ? ['JSS1', 'JSS2', 'JSS3'] : ['SS1', 'SS2', 'SS3'];
  return stage.filter(l => LEVEL_ORDER.indexOf(l) <= LEVEL_ORDER.indexOf(lvl));
}

/** Every topic-quiz question from the stage floor up to the student's class. */
function topicBankFor(subject, classLevel) {
  const s = CURRICULUM[subject] || CURRICULUM['Mathematics'];
  const out = [];
  for (const lvl of levelsUpTo(classLevel)) {
    (s.topics[lvl] || []).forEach((t, ti) => (t.quiz || []).forEach((q, qi) => {
      out.push({ ...q, id: `${subject.slice(0, 3).toLowerCase()}-${lvl}-${ti}-${qi}`, level: lvl, topic: t.title });
    }));
  }
  return out;
}

/** The class-appropriate mixed bank: JSS mixes JSS topics; SS uses the exam mock bank. */
function mixedFor(subject) {
  const lvl = state.profile.classLevel || 'SS3';
  return String(lvl).startsWith('JSS') ? topicBankFor(subject, lvl) : quizFor(subject);
}

function startPastQuiz() {
  if (!quizGate()) return;
  if (String(state.profile.classLevel || '').startsWith('JSS')) { toast('The real-paper drill opens from SS1 — topic quizzes are your gym for now!'); return; }
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'past', level: '', topicIdx: 0, topicTitle: '',
    questions: buildQuiz(state.selectedSubject, 'past'), deadline: quizDeadline(), examIdx: 0 };
  state.page = 'quiz';
  armBackGuard();
  renderPage();
}

/** Mixed subject-wide exam practice (the revision bank). */
/** How many questions the bank actually holds for one subject at one class level. */
function examPoolSize(sub, classLevel) {
  const s = CURRICULUM[sub];
  if (!s) return 0;
  let n = (quizFor(sub) || []).length + (pastFor(sub) || []).length;
  ((s.topics || {})[classLevel] || []).forEach(t => { n += (t.quiz || []).length; });
  return n;
}
/** The real per-subject paper size: wanted count, capped by the bank. */
function examSubjectCount(sub, p) {
  const avail = examPoolSize(sub, p.classLevel);
  return Math.min(Math.max(5, (p.counts || {})[sub] || p.count), Math.max(avail, 1));
}
/** Effective CBT preferences: saved prefs topped up from the student's profile. */
function effectiveExamPrefs() {
  const p = state.examPrefs || {};
  const classLevel = p.classLevel || state.profile.classLevel || 'SS3';
  const availSubs = subjectsForLevel(classLevel);
  let subjects = (p.subjects || []).filter(x => availSubs.includes(x));
  if (!subjects.length) subjects = (state.profile.subjects || []).filter(x => availSubs.includes(x)).slice(0, 4);
  if (!subjects.length) subjects = availSubs.slice(0, 4);
  const exams = examsForLevel(classLevel).map(e => e.id);
  let examType = exams.includes(p.examType) ? p.examType : (exams.includes(state.profile.targetExam) ? state.profile.targetExam : (exams[0] || 'General'));
  if (p.examType === 'Custom Practice') examType = 'Custom Practice';
  return {
    classLevel, examType, subjects,
    count: Math.max(5, Math.min(40, Number(p.count) || 20)),
    counts: p.counts || {},
    minutes: (p.minutes === 0 ? 0 : Math.max(5, Math.min(240, Number(p.minutes) || 60)))
  };
}
function setExamClass(level) {
  const p = state.examPrefs;
  p.classLevel = level;
  const avail = subjectsForLevel(level);
  p.subjects = (p.subjects || []).filter(x => avail.includes(x));
  const exams = examsForLevel(level).map(e => e.id);
  if (p.examType && p.examType !== 'Custom Practice' && !exams.includes(p.examType)) p.examType = '';
  persistProgress(); renderPage();
}
function setExamType(t) { state.examPrefs.examType = t; persistProgress(); renderPage(); }
function toggleExamSubject(sub) {
  const p = state.examPrefs;
  p.subjects = p.subjects || [];
  const i = p.subjects.indexOf(sub);
  if (i >= 0) p.subjects.splice(i, 1); else p.subjects.push(sub);
  persistProgress(); renderPage();
}
function setExamCount(sub, n) {
  const p = state.examPrefs;
  p.counts = p.counts || {};
  const avail = examPoolSize(sub, effectiveExamPrefs().classLevel);
  p.counts[sub] = Math.min(Math.max(5, Number(n) || 20), Math.max(avail, 1));
  persistProgress(); renderPage();
}
function setExamDefaultCount(n) { state.examPrefs.count = Math.max(5, Math.min(40, Number(n) || 20)); persistProgress(); renderPage(); }
function setExamMinutes(m) { state.examPrefs.minutes = Math.max(0, Math.min(240, Number(m) || 0)); persistProgress(); renderPage(); }
function toggleCustomExam() { state.examCustomOpen = !state.examCustomOpen; renderPage(); }

function cbtSetupHtml() {
  const p = effectiveExamPrefs();
  const saved = state.examPrefs || {};
  const totalQ = p.subjects.reduce((a, sub) => a + examSubjectCount(sub, p), 0);
  const summary = `${p.classLevel} · ${p.examType} · ${p.subjects.length} subject${p.subjects.length === 1 ? '' : 's'} · ${totalQ} questions · ${p.minutes > 0 ? p.minutes + ' min' : 'no timer'}`;
  if (!state.examCustomOpen) {
    return `
    <section class="mb-5 rounded-2xl border border-slate-900/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-5 text-white shadow-card animate-fadeUp">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div class="text-[11px] font-black uppercase tracking-widest text-indigo-300">🖥️ STUDYOS EXAM — CBT hall</div>
          <h3 class="mt-1 text-lg font-bold">Sit a full exam, exactly like the real centre</h3>
          <p class="mt-1 text-xs text-slate-300">Current paper: <b class="text-white">${summary}</b></p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button type="button" onclick="startCbtExam()" class="rounded-xl bg-indigo-600 px-5 py-3 text-xs font-black text-white transition hover:bg-indigo-500">⚡ Quick Start</button>
          <button type="button" onclick="toggleCustomExam()" class="rounded-xl bg-white/10 px-5 py-3 text-xs font-black text-white transition hover:bg-white/20">⚙️ Custom Exam</button>
        </div>
      </div>
      <p class="mt-3 text-[10px] text-slate-400">Quick Start uses your saved preferences — one click, paper on screen. Custom lets you configure class, exam type, subjects, questions per subject and the timer.</p>
    </section>`;
  }
  const classes = ['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3'];
  const examIds = examsForLevel(p.classLevel).map(e => e.id).concat(['Custom Practice']);
  return `
  <section class="mb-5 rounded-2xl border border-indigo-200 bg-white p-5 shadow-card animate-fadeUp">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-sm font-black text-slate-900">⚙️ Configure your exam</h3>
      <button type="button" onclick="toggleCustomExam()" class="text-[11px] font-bold text-slate-400 transition hover:text-slate-600">Close ✕</button>
    </div>
    <div class="space-y-4">
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">1 · Select class</div>
        <div class="mt-1.5 flex flex-wrap gap-1.5">${classes.map(cl => `<button type="button" onclick="setExamClass('${cl}')" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${p.classLevel === cl ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${cl}</button>`).join('')}</div>
      </div>
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">2 · Select exam type</div>
        <div class="mt-1.5 flex flex-wrap gap-1.5">${examIds.map(ex => `<button type="button" onclick="setExamType('${ex}')" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${p.examType === ex ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${ex}</button>`).join('')}</div>
      </div>
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">3 · Select subjects</div>
        <div class="mt-1.5 flex flex-wrap gap-1.5">${subjectsForLevel(p.classLevel).map(sub => { const on = p.subjects.includes(sub); return `<button type="button" onclick="toggleExamSubject('${sub}')" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${on ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${on ? '☑' : '☐'} ${sub}</button>`; }).join('')}</div>
      </div>
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">4 · Questions per subject</div>
        <div class="mt-1.5 grid gap-2 sm:grid-cols-2">${p.subjects.map(sub => { const avail = examPoolSize(sub, p.classLevel); const max = Math.max(5, avail); const n = Math.min((p.counts || {})[sub] || p.count, max); return `
          <div class="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
            <span class="text-xs font-bold text-slate-700">${sub} <span class="text-[9px] font-bold text-slate-400">(${avail} in bank)</span></span>
            <span class="flex items-center gap-2">
              <button type="button" onclick="setExamCount('${sub}', ${n - 5})" ${n <= 5 ? 'disabled' : ''} class="h-6 w-6 rounded-lg bg-white text-xs font-black text-slate-600 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-100 disabled:opacity-30">−</button>
              <span class="w-7 text-center text-xs font-black text-indigo-700">${n}</span>
              <button type="button" onclick="setExamCount('${sub}', ${n + 5})" ${n >= max ? 'disabled' : ''} class="h-6 w-6 rounded-lg bg-white text-xs font-black text-slate-600 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-100 disabled:opacity-30">+</button>
            </span>
          </div>`; }).join('') || '<p class="text-[11px] text-slate-400">Pick at least one subject above.</p>'}</div>
      </div>
      <div>
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">5 · Set timer</div>
        <div class="mt-1.5 flex flex-wrap items-center gap-1.5">
          ${[15, 30, 45, 60, 90, 120].map(mn => `<button type="button" onclick="setExamMinutes(${mn})" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${p.minutes === mn ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${mn} min</button>`).join('')}
          <button type="button" onclick="setExamMinutes(0)" class="rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${p.minutes === 0 ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">No timer</button>
          <label class="ml-1 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">⚙ Custom:
            <input type="number" min="5" max="240" value="${p.minutes || 60}" onchange="setExamMinutes(this.value)"
              class="w-16 rounded-lg border border-slate-200 px-2 py-1 text-[11px] font-bold text-slate-700" /> min
          </label>
        </div>
      </div>
      <div class="flex items-center justify-between border-t border-slate-100 pt-4">
        <p class="text-[11px] font-semibold text-slate-500">${summary}</p>
        <button type="button" onclick="startCbtExam()" ${p.subjects.length ? '' : 'disabled'} class="rounded-xl bg-slate-900 px-6 py-3 text-xs font-black text-white transition hover:bg-slate-800 disabled:opacity-40">🖥️ Start Exam →</button>
      </div>
    </div>
  </section>`;
}

/** Build and launch a multi-subject CBT paper from the effective preferences. */
function startCbtExam() {
  if (!quizGate()) return;
  const p = effectiveExamPrefs();
  const questions = [];
  let seq = 0;
  for (const sub of p.subjects) {
    const want = Math.max(5, Math.min(40, (p.counts || {})[sub] || p.count));
    const pool = [];
    (CURRICULUM[sub].topics[p.classLevel] || []).forEach((t, ti) => {
      (t.quiz || []).forEach((q, qi) => pool.push({ ...q, id: `cbt-${sub.slice(0, 3).toLowerCase()}-t${ti}q${qi}`, subject: sub, topic: t.title }));
    });
    (quizFor(sub) || []).forEach((q, i) => pool.push({ ...q, id: `cbt-${sub.slice(0, 3).toLowerCase()}-m${i}`, subject: sub, topic: 'Mixed practice' }));
    if (!String(p.classLevel || '').startsWith('JSS')) (pastFor(sub) || []).forEach((q, i) => pool.push({ ...q, id: `cbt-${sub.slice(0, 3).toLowerCase()}-p${i}`, subject: sub, topic: 'Past questions' }));
    const pick = shuffled(pool).slice(0, want);
    pick.forEach(q => questions.push(shuffleOptions(q)));
    seq += pick.length;
  }
  if (!questions.length) { toast('No questions available for this selection yet.'); return; }
  state.quiz = {
    mode: 'cbt', answers: {}, reviewed: {}, submitted: false, score: 0, result: null,
    level: p.classLevel, topicIdx: 0, topicTitle: '',
    questions: shuffled(questions), examIdx: 0,
    deadline: p.minutes > 0 ? Date.now() + p.minutes * 60000 : 0,
    startedAt: Date.now(), timeUp: false,
    meta: { classLevel: p.classLevel, examType: p.examType, subjects: p.subjects.slice(), minutes: p.minutes }
  };
  state.page = 'quiz';
  armBackGuard();
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMarkReview(qid) {
  const qz = state.quiz;
  if (!qz || qz.submitted) return;
  qz.reviewed = qz.reviewed || {};
  qz.reviewed[qid] = !qz.reviewed[qid];
  renderPage();
}
function reviewMistakesScroll() {
  const el = document.getElementById('cbt-review');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function planFromExam() {
  const r = state.quiz.result;
  if (r && r.bySubject) {
    let weak = null, weakPct = Infinity;
    for (const [sub, b] of Object.entries(r.bySubject)) {
      const pct = b.total ? (b.correct / b.total) * 100 : 0;
      if (pct < weakPct) { weakPct = pct; weak = sub; }
    }
    if (weak) state.examPrefs.lastWeak = weak;
  }
  persistProgress();
  state.page = 'home';
  renderPage();
  toast('Study plan updated — your weakest subject comes first 💪');
}

function fmtExamTime(ms) {
  const total = Math.max(0, Math.round((ms || 0) / 1000));
  const m = Math.floor(total / 60), sec = total % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

/* Exam-mode navigation — past questions run like the real CBT hall. */
function examJump(i) {
  const qz = state.quiz;
  if (!qz || qz.submitted) return;
  const total = (qz.questions || []).length || 1;
  qz.examIdx = Math.min(Math.max(Number(i) || 0, 0), total - 1);
  renderPage();
}
function examPrev() { examJump((state.quiz.examIdx || 0) - 1); }
function examNext() { examJump((state.quiz.examIdx || 0) + 1); }
function submitExam() {
  const qz = state.quiz;
  if (!qz || qz.submitted) return;
  const total = (qz.questions || []).length;
  const answered = Object.keys(qz.answers).length;
  if (answered < total && !confirm(`You have answered ${answered} of ${total} questions. Unanswered questions score zero. Submit your exam now?`)) return;
  submitQuiz();
}

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

function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
/** Return a copy of the question with its options shuffled and the correct index remapped.
 *  The bank is authored with the right answer first — never show that pattern to students. */
function shuffleOptions(q) {
  const order = shuffled(q.options.map((_, i) => i));
  return { ...q, options: order.map(i => q.options[i]), correct: order.indexOf(q.correct) };
}

/** Build the question set for a quiz, honouring the student's count setting.
 *  count = 0 means "everything available". Topic quizzes top up from the mixed
 *  bank and past papers when the student asks for more questions than the topic has. */
function buildQuiz(subject, mode, level, topicIdx) {
  const count = state.quizSetup.count > 0 ? state.quizSetup.count : Infinity;
  let pool = [];
  const cls = state.profile.classLevel || 'SS3';
  const isJss = String(cls).startsWith('JSS');
  if (mode === 'topic') {
    pool = topicQuiz(subject, level, topicIdx);
    if (pool.length < count) pool = pool.concat(shuffled(topicBankFor(subject, cls).concat(isJss ? [] : quizFor(subject).concat(pastFor(subject)))));
  } else if (mode === 'mock') {
    pool = shuffled(mixedFor(subject));
  } else {
    pool = shuffled(pastFor(subject));
  }
  const uniq = [];
  const seen = new Set();
  const seenText = new Set();
  for (const q of pool) {
    const text = String(q.q || '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (!seen.has(q.id) && !seenText.has(text)) { seen.add(q.id); seenText.add(text); uniq.push(q); }
  }
  return uniq.slice(0, Math.min(count === Infinity ? uniq.length : count, uniq.length)).map(shuffleOptions);
}

function quizDeadline() {
  const minutes = state.quizSetup.minutes || 0;
  return minutes > 0 ? Date.now() + minutes * 60000 : 0;
}

function fmtCountdown(ms) {
  if (ms < 0) ms = 0;
  const total = Math.round(ms / 1000);
  const m = Math.floor(total / 60), sec = total % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

let quizTimerInt = null;
function stopQuizTimer() { if (quizTimerInt) { clearInterval(quizTimerInt); quizTimerInt = null; } }
function startQuizTimer() {
  stopQuizTimer();
  quizTimerInt = setInterval(quizTimerTick, 1000);
}
/* One clock beat: amber for the final 5 minutes, red + pulse for the final minute,
   a clean 00:00 (never negative) and an automatic submission at zero. */
function quizTimerTick() {
  const qz = state.quiz;
  if (!qz || !qz.deadline || qz.submitted || state.page !== 'quiz') { stopQuizTimer(); return; }
  const left = qz.deadline - Date.now();
  const chip = document.getElementById('quiz-timer');
  if (chip) {
    chip.textContent = (left <= 60000 ? '⚠️ ' : '⏱ ') + fmtCountdown(Math.max(0, left));
    const crit = left <= 60000, warn = left <= 300000;
    chip.classList.toggle('bg-rose-50', crit);
    chip.classList.toggle('text-rose-700', crit);
    chip.classList.toggle('ring-rose-200', crit);
    chip.classList.toggle('animate-pulse', crit);
    chip.classList.toggle('bg-amber-50', warn && !crit);
    chip.classList.toggle('text-amber-700', warn && !crit);
    chip.classList.toggle('ring-amber-200', warn && !crit);
  }
  if (left <= 0) { stopQuizTimer(); qz.timeUp = true; submitQuiz(true); }
}

function setQuizCount(n) {
  state.quizSetup.count = Math.max(0, Math.min(100, Number(n) || 0));
  persistProgress();
  renderPage();
}
function setQuizTimer(m) {
  state.quizSetup.minutes = Math.max(0, Math.min(180, Number(m) || 0));
  persistProgress();
  renderPage();
}

function startTopicQuiz(subject, title) {
  if (!quizGate()) return;
  const level = state.profile.classLevel || 'SS3';
  const ti = (CURRICULUM[subject].topics[level] || []).findIndex(t => t.title === title);
  state.selectedSubject = subject;
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'topic', level, topicIdx: ti, topicTitle: title,
    questions: buildQuiz(subject, 'topic', level, ti), deadline: quizDeadline() };
  state.page = 'quiz';
  armBackGuard();
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function startMockQuiz() {
  if (!quizGate()) return;
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'mock', level: '', topicIdx: 0, topicTitle: '',
    questions: buildQuiz(state.selectedSubject, 'mock'), deadline: quizDeadline() };
  state.page = 'quiz';
  armBackGuard();
  renderPage();
}
function exitCbtExam() {
  const qz = state.quiz;
  if (qz && qz.mode === 'cbt' && !qz.submitted && !confirm('Leave this exam? Your progress on this paper will be lost.')) return;
  stopQuizTimer();
  backToQuizList();
}
/* Phone/browser Back button: leave the open quiz first, then the page — it used to do nothing. */
function armBackGuard() {
  try { if (window.history && window.history.pushState) window.history.pushState({ studyosQuiz: 1 }, ''); } catch (e) { /* no history API */ }
}
if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('popstate', () => {
    const qz = state.quiz;
    if (state.page === 'quiz' && qz && qz.mode !== 'list' && !qz.submitted) { stopQuizTimer(); backToQuizList(); return; }
    if (state.page !== 'home') { state.page = 'home'; closeDrawer(); renderPage(); }
  });
}
function backToQuizList() {
  if (simTimerId) { clearInterval(simTimerId); simTimerId = null; }
  state.examSim = null;
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' };
  renderPage();
}
function openTopicCards(subject, title) {
  state.selectedSubject = subject;
  state.flash = { idx: 0, flipped: false, topicFilter: title, got: 0, later: [], phase: 'main', retryDeck: [] };
  state.page = 'flashcards';
  renderPage();
}

/* ==================================================================
   SMALL DOM UTILITIES
   ================================================================== */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function show(el, on = true) { if (el) el.classList.toggle('hidden', !on); }
function setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }

function toast(msg, ms = 2600) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('opacity-0', 'translate-y-2');
  t.classList.add('opacity-100');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    t.classList.add('opacity-0', 'translate-y-2');
    t.classList.remove('opacity-100');
  }, ms);
}

/** Show a message on the auth screen's amber banner (if it is in the DOM). */
function authNotice(html) {
  const banner = $('#demo-banner');
  if (!banner) return;
  banner.innerHTML = html;
  show(banner, true);
}

/** Put the sign-in screen back to its idle state. */
function resetAuthScreen() {
  show($('#auth-error'), false);
  setAuthBusy(false);
  signingIn = false;
}

/* Firestore problems repeat on every retry — warn once, then stay quiet and keep
   the app fully usable in a degraded "browser-only" state. */
let firestoreWarned = false;

/** Turn a raw Firestore error into something a student can act on. */
function firestoreMessage(err) {
  const text = String((err && (err.message || err.code)) || err || '');
  if (/has not been used in project|PERMISSION_DENIED_NOT_FOUND|apis\/firestore/i.test(text)) {
    return 'Cloud storage is not connected yet. Your progress is saved in this browser only and will sync as soon as it is connected.';
  }
  if (/permission|denied|unauthenticated|Missing or insufficient/i.test(text)) {
    return 'The cloud rejected the save. Progress is kept safely in this browser for now.';
  }
  if (/unavailable|network|offline|Failed to get document/i.test(text)) {
    return 'Cannot reach the cloud right now (offline?). Progress is saved in this browser and will sync when you reconnect.';
  }
  return 'Cloud sync is unavailable — progress is saved in this browser only.';
}

function warnFirestoreOnce(err) {
  if (firestoreWarned) return;
  firestoreWarned = true;
  console.warn('[StudyOS] Firestore unavailable:', (err && (err.message || err.code)) || err);
  toast(firestoreMessage(err), 6000);
}

const SUBJECT_COLORS = {
  'Mathematics': { bg: 'bg-indigo-50', text: 'text-indigo-700', ring: 'ring-indigo-200', solid: 'bg-indigo-600' },
  'Basic Science': { bg: 'bg-teal-50', text: 'text-teal-700', ring: 'ring-teal-200', solid: 'bg-teal-600' },
  'English Language': { bg: 'bg-rose-50', text: 'text-rose-700', ring: 'ring-rose-200', solid: 'bg-rose-600' },
  'Basic Technology': { bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-200', solid: 'bg-amber-600' },
  'Physics': { bg: 'bg-sky-50', text: 'text-sky-700', ring: 'ring-sky-200', solid: 'bg-sky-600' },
  'Chemistry': { bg: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-emerald-200', solid: 'bg-emerald-600' },
  'Biology': { bg: 'bg-lime-50', text: 'text-lime-700', ring: 'ring-lime-200', solid: 'bg-lime-600' },
  'Government': { bg: 'bg-violet-50', text: 'text-violet-700', ring: 'ring-violet-200', solid: 'bg-violet-600' },
  'Literature in English': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', ring: 'ring-fuchsia-200', solid: 'bg-fuchsia-600' },
  'History': { bg: 'bg-orange-50', text: 'text-orange-700', ring: 'ring-orange-200', solid: 'bg-orange-600' },
  'Economics': { bg: 'bg-cyan-50', text: 'text-cyan-700', ring: 'ring-cyan-200', solid: 'bg-cyan-600' },
  'Commerce': { bg: 'bg-blue-50', text: 'text-blue-700', ring: 'ring-blue-200', solid: 'bg-blue-600' },
  'Financial Accounting': { bg: 'bg-green-50', text: 'text-green-700', ring: 'ring-green-200', solid: 'bg-green-600' }
};
function subjectColor(s) { return SUBJECT_COLORS[s] || SUBJECT_COLORS['Mathematics']; }

function subjectSelector(activePage) {
  const available = subjectsForLevel(state.profile.classLevel);
  const chosen = (state.profile.subjects || []).filter(x => available.includes(x));
  const subjects = chosen.length ? chosen : available;
  if (!subjects.includes(state.selectedSubject)) state.selectedSubject = subjects[0];
  return `
    <div class="mb-5 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      ${subjects.map(s => {
        const c = subjectColor(s);
        const active = s === state.selectedSubject;
        return `<button type="button" onclick="changeSubject('${s.replace(/'/g, "\'")}')"
          class="shrink-0 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${active ? `${c.solid} text-white shadow-sm` : 'bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:ring-slate-300'}">
          ${CURRICULUM[s] ? CURRICULUM[s].icon : '📘'} ${s}</button>`;
      }).join('')}
    </div>`;
}

function pageHeader(title, subtitle) {
  return `<div class="mb-5 animate-fadeUp"><h2 class="text-xl font-bold text-slate-900 md:text-2xl">${title}</h2>
    <p class="mt-1 text-xs text-slate-500 md:text-sm">${subtitle}</p></div>`;
}

/* ==================================================================
   PAGE: DASHBOARD
   ================================================================== */
function renderHome(el) {
  const name = state.profile.name || 'Student';
  const first = name.split(' ')[0];
  const cls = state.profile.classLevel || 'SS3';  // topicsFor returns [] for a level a subject does not cover
  const exam = state.profile.targetExam || (String(cls).startsWith('JSS') ? 'BECE' : 'WAEC WASSCE');
  const accuracy = state.quizStats.total ? Math.round((state.quizStats.correct / state.quizStats.total) * 100) : 0;
  const topics = topicsFor(state.selectedSubject, cls);
  const greeting = (() => { const h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; })();

  const cards = [
    { page: 'study', icon: '📖', title: 'Study Materials', desc: `${topics.length} structured lessons ready for ${cls}.` },
    { page: 'flashcards', icon: '🎴', title: 'Flashcards', desc: `${cardsFor(state.selectedSubject, cls).length} recall cards drawn from your ${cls} lessons.` },
    { page: 'quiz', icon: '📝', title: 'Practice Exam', desc: `${levelTopics(state.selectedSubject, cls).filter(t => (t.quiz || []).length).length} topic quizzes · 10 questions each.` },
    { page: 'resources', icon: '🌐', title: 'Web Resources', desc: 'Videos, past questions and reference sites.' },
    { page: 'assistant', icon: '🤖', title: 'Buddy AI Tutor', desc: 'Ask anything and get a worked explanation.' },
    { page: 'profile', icon: '👤', title: 'Profile & Sync', desc: 'Check what is stored in your cloud profile.' }
  ];

  el.innerHTML = `
    <div class="space-y-6">
      <section class="overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 text-white shadow-card animate-fadeUp">
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div class="min-w-0">
            <div class="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-indigo-200">
              🎯 ${cls} · targeting ${exam}
            </div>
            <h1 class="text-2xl font-bold md:text-3xl">${greeting}, ${escapeHtml(first)}! 👋</h1>
            <p class="mt-2 max-w-lg text-sm text-slate-300">
              <b class="text-white">🔥 ${state.streak}-day streak.</b> Keep it going! Complete one study
              activity today — a lesson, quiz, flashcards or a focus session keeps the flame alive.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <button type="button" onclick="navigate('study')" class="rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-500">Start Reading →</button>
              <button type="button" onclick="navigate('quiz')" class="rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/20">Take a Quiz</button>
            </div>
          </div>
          <div class="grid shrink-0 grid-cols-2 gap-3 md:w-[19rem]">
            <div class="rounded-2xl bg-white/10 p-4">
              <div class="text-2xl">🔥</div>
              <div class="mt-1 text-xl font-bold">${state.streak}</div>
              <div class="text-[11px] text-slate-300">day streak</div>
            </div>
            <div class="rounded-2xl bg-white/10 p-4">
              <div class="text-2xl">📝</div>
              <div class="mt-1 text-xl font-bold">${state.quizStats.attempts || 0}</div>
              <div class="text-[11px] text-slate-300">quizzes taken</div>
            </div>
            <div class="rounded-2xl bg-white/10 p-4">
              <div class="text-2xl">🎯</div>
              <div class="mt-1 text-xl font-bold">${accuracy}%</div>
              <div class="text-[11px] text-slate-300">overall accuracy</div>
            </div>
            <div class="rounded-2xl bg-white/10 p-4">
              <div class="text-2xl">🏆</div>
              <div class="mt-1 text-xl font-bold">${state.quizStats.bestPercent || 0}%</div>
              <div class="text-[11px] text-slate-300">best score</div>
            </div>
          </div>
        </div>
      </section>


      ${missionSection()}

      ${installCardHtml()}

      <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        ${cards.map(c => `
          <button type="button" onclick="navigate('${c.page}')"
            class="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-card transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-pop">
            <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl transition group-hover:bg-indigo-50">${c.icon}</div>
            <h3 class="text-sm font-bold text-slate-900">${c.title}</h3>
            <p class="mt-1 text-xs leading-relaxed text-slate-500">${c.desc}</p>
            <span class="mt-3 inline-block text-xs font-bold text-indigo-600 opacity-0 transition group-hover:opacity-100">Open →</span>
          </button>`).join('')}
      </section>

      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
        <div class="mb-4 flex items-center justify-between gap-3">
          <h3 class="text-sm font-bold text-slate-900">📌 Next up in ${state.selectedSubject}</h3>
          <button type="button" onclick="navigate('study')" class="text-xs font-bold text-indigo-600 hover:underline">See all</button>
        </div>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          ${topics.slice(0, 3).map(t => `
            <button type="button" onclick="openTopic('${state.selectedSubject.replace(/'/g, "\'")}', '${t.title.replace(/'/g, "\'")}')"
              class="rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50/40">
              <span class="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">${t.level}</span>
              <h4 class="mt-2 text-xs font-bold text-slate-900">${t.title}</h4>
              <p class="mt-1 line-clamp-2 text-[11px] text-slate-500">${t.summary}</p>
            </button>`).join('')}
        </div>
      </section>
    </div>`;
}

/* ==================================================================
   PAGE: STUDY MATERIALS
   ================================================================== */
function renderStudy(el) {
  const subject = state.selectedSubject;
  const topics = topicsFor(subject, state.profile.classLevel);
  const meta = CURRICULUM[subject];
  el.innerHTML = `
    ${pageHeader('Study Materials', `${meta.icon} ${meta.blurb}`)}
    ${subjectSelector('study')}
    <div class="space-y-4">
      ${['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3'].map(level => {
        const group = topics.filter(t => t.level === level);
        if (!group.length) return '';
        return `
          <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
            <div class="mb-4 flex items-center gap-2">
              <span class="rounded-full ${subjectColor(subject).bg} ${subjectColor(subject).text} px-2.5 py-1 text-[11px] font-bold">${level}</span>
              <h3 class="text-sm font-bold text-slate-900">${level} syllabus topics</h3>
              <span class="ml-auto text-[11px] text-slate-400">${group.length} topic${group.length > 1 ? 's' : ''}</span>
            </div>
            <div class="grid gap-3 md:grid-cols-2">
              ${group.map(t => `
                <article class="flex flex-col rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:shadow-card">
                  <div class="mb-2 flex flex-wrap gap-1.5">
                    ${t.tags.map(tag => `<span class="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">${tag}</span>`).join('')}
                  </div>
                  <h4 class="text-sm font-bold text-slate-900">${t.title}</h4>
                  <p class="mt-1 flex-1 text-xs leading-relaxed text-slate-500">${t.summary}</p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <button type="button" onclick="openTopic('${subject.replace(/'/g, "\'")}', '${t.title.replace(/'/g, "\'")}')"
                      class="self-start rounded-lg ${subjectColor(subject).solid} px-3 py-1.5 text-[11px] font-bold text-white transition hover:opacity-90">Read lesson →</button>
                    <button type="button" onclick="openTopicCards('${subject.replace(/'/g, "\'")}', '${t.title.replace(/'/g, "\'")}')"
                      class="self-start rounded-lg bg-white px-3 py-1.5 text-[11px] font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">🎴 Cards${(t.cards || []).length ? ` (${t.cards.length})` : ''}</button>
                    ${(t.quiz || []).length ? `<button type="button" onclick="startTopicQuiz('${subject.replace(/'/g, "\'")}', '${t.title.replace(/'/g, "\'")}')"
                      class="self-start rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-slate-800">📝 Quiz (${t.quiz.length})</button>` : ''}
                  </div>
                </article>`).join('')}
            </div>
          </section>`;
      }).join('')}
    </div>`;
}

function renderTopic(el, subject, title) {
  const topic = topicsFor(subject, state.profile.classLevel).find(t => t.title === title)
    || topicsFor(subject, 'SS3').find(t => t.title === title);
  if (!topic) { renderStudy(el); return; }
  const c = subjectColor(subject);
  el.innerHTML = `
    <button type="button" onclick="navigate('study')" class="mb-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-bold text-slate-600 ring-1 ring-inset ring-slate-200 transition hover:text-indigo-600">← Back to ${subject}</button>
    <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card md:p-7 animate-fadeUp">
      <div class="mb-4 flex flex-wrap items-center gap-2">
        <span class="rounded-full ${c.bg} ${c.text} px-2.5 py-1 text-[11px] font-bold">${subject} · ${topic.level}</span>
        ${topic.tags.map(t => `<span class="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">${t}</span>`).join('')}
      </div>
      <h2 class="text-xl font-bold text-slate-900 md:text-2xl">${topic.title}</h2>
      <p class="mt-1 mb-5 text-xs text-slate-500">${topic.summary}</p>
      <div class="prose-lesson">${topic.content}</div>
      <div class="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
        <button type="button" onclick="markLessonDone('${subject.replace(/'/g, "\\\'")}','${title.replace(/'/g, "\\\'")}')"
          class="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-700">✅ Mark lesson complete</button>
        <button type="button" onclick="changeSubject('${subject.replace(/'/g, "\'")}'); navigate('flashcards')"
          class="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800">🎴 Revise with flashcards</button>
        <button type="button" onclick="changeSubject('${subject.replace(/'/g, "\'")}'); navigate('quiz')"
          class="rounded-xl ${c.solid} px-4 py-2.5 text-xs font-bold text-white transition hover:opacity-90">📝 Test yourself</button>
        <button type="button" onclick="askBuddy('Explain ${topic.title.toLowerCase()}', false)"
          class="rounded-xl bg-indigo-50 px-4 py-2.5 text-xs font-bold text-indigo-700 transition hover:bg-indigo-100">🤖 Ask Buddy</button>
        <button type="button" onclick="askBuddy('Give me a detailed, exam-focused explanation of ${topic.title.toLowerCase()} for ${state.profile.targetExam || 'JAMB UTME'}', true)"
          class="rounded-xl bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100">🌐 Research live &amp; cite sources</button>
      </div>
    </article>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==================================================================
   PAGE: WEB RESOURCES
   ================================================================== */
const SHELF = {
  _common: [
    { cat: 'Past questions', title: 'Myschool — JAMB / WAEC / NECO past questions', url: 'https://myschool.ng/classroom', note: 'Year-by-year past questions with answers, organised by subject and topic.' },
    { cat: 'Past questions', title: 'Awajis JAMB CBT — FREE CBT past-question practice', url: 'https://jambcbt.awajis.com/', note: 'Free timed CBT-style practice that mimics the real JAMB exam hall — no subscription needed.' },
    { cat: 'Official body', title: 'JAMB official site', url: 'https://www.jamb.gov.ng/', note: 'Syllabus, brochures and exam announcements straight from the source.' },
    { cat: 'Official body', title: 'WAEC Nigeria', url: 'https://www.waecnigeria.org/', note: 'WASSCE syllabus, timetables and candidate resources.' },
    { cat: 'Official body', title: 'JAMB e-Syllabus (iBASS)', url: 'https://ibass.jamb.gov.ng/e-syllabus', note: 'The official UTME syllabus per subject — exactly what JAMB will test, topic by topic.' },
    { cat: 'Official body', title: 'NERDC — national curriculum', url: 'https://nerdc.org.ng/', note: 'Nigeria\u2019s official K-12 curriculum: the syllabus every textbook and exam follows.' },
    { cat: 'Textbook', title: 'Internet Archive — free books & past questions', url: 'https://archive.org/', note: 'Free digital library: full scanned textbooks, revision guides and past question papers you can read or borrow online.' }
  ],
  'Mathematics': [
    { cat: 'Textbook', title: 'OpenStax — College Algebra (free textbook)', url: 'https://openstax.org/details/books/college-algebra-2e', note: 'A full peer-reviewed algebra textbook, free to read online.' },
    { cat: 'Textbook', title: 'Wikibooks — Mathematics bookshelf', url: 'https://en.wikibooks.org/wiki/Wikibooks:Mathematics_bookshelf', note: 'Open textbooks from arithmetic through calculus.' },
    { cat: 'Structured course', title: 'CK-12 — Mathematics', url: 'https://www.ck12.org/math/', note: 'Free interactive textbooks with worked examples and practice.' }
  ],
  'English Language': [
    { cat: 'Textbook', title: 'Wikibooks — English bookshelf', url: 'https://en.wikibooks.org/wiki/Wikibooks:English_bookshelf', note: 'Open grammar, composition and literature study guides.' },
    { cat: 'Structured course', title: 'British Council — LearnEnglish', url: 'https://learnenglish.britishcouncil.org/', note: 'Grammar and vocabulary lessons with exercises.' },
    { cat: 'Reference', title: 'Purdue OWL — writing & grammar', url: 'https://owl.purdue.edu/', note: 'The classic reference for punctuation, essays and citation.' }
  ],
  'Basic Science': [
    { cat: 'Textbook', title: 'Wikibooks — Science bookshelf', url: 'https://en.wikibooks.org/wiki/Wikibooks:Science_bookshelf', note: 'Open science textbooks across all the basics.' },
    { cat: 'Simulation', title: 'PhET — interactive science sims', url: 'https://phet.colorado.edu/en/simulations/browse', note: 'University of Colorado simulations — see energy, circuits and waves move.' },
    { cat: 'Structured course', title: 'CK-12 — Science', url: 'https://www.ck12.org/science/', note: 'Free interactive science textbooks with practice.' }
  ],
  'Basic Technology': [
    { cat: 'Textbook', title: 'Wikibooks — Engineering bookshelf', url: 'https://en.wikibooks.org/wiki/Wikibooks:Engineering_bookshelf', note: 'Open texts on tools, materials, drawing and simple machines.' },
    { cat: 'Simulation', title: 'PhET — physics & tech sims', url: 'https://phet.colorado.edu/en/simulations/browse', note: 'Hands-on simulations for machines, electricity and materials.' }
  ],
  'Physics': [
    { cat: 'Textbook', title: 'OpenStax — University Physics Vol 1', url: 'https://openstax.org/details/books/university-physics-volume-1', note: 'Peer-reviewed full physics textbook — mechanics, waves, thermodynamics.' },
    { cat: 'Structured course', title: 'The Physics Classroom', url: 'https://www.physicsclassroom.com/', note: 'Plain-English lessons with animations and check-your-understanding quizzes.' },
    { cat: 'Textbook', title: 'Wikibooks — Physics shelf', url: 'https://en.wikibooks.org/wiki/Wikibooks:Science_bookshelf#Physics', note: 'Open physics textbooks from basics to advanced.' }
  ],
  'Chemistry': [
    { cat: 'Textbook', title: 'OpenStax — Chemistry 2e', url: 'https://openstax.org/details/books/chemistry-2e', note: 'Full peer-reviewed chemistry textbook, free online.' },
    { cat: 'Textbook', title: 'Wikibooks — Chemistry shelf', url: 'https://en.wikibooks.org/wiki/Wikibooks:Science_bookshelf#Chemistry', note: 'Open chemistry texts: general, organic and practical.' },
    { cat: 'Simulation', title: 'PhET — chemistry sims', url: 'https://phet.colorado.edu/en/simulations/browse?filters=chemistry', note: 'Build molecules, balance equations and watch reactions.' }
  ],
  'Biology': [
    { cat: 'Textbook', title: 'OpenStax — Biology 2e', url: 'https://openstax.org/details/books/biology-2e', note: 'Full peer-reviewed biology textbook with diagrams.' },
    { cat: 'Structured course', title: 'CK-12 — Biology', url: 'https://www.ck12.org/biology/', note: 'Interactive biology textbook with practice and simulations.' },
    { cat: 'Textbook', title: 'Wikibooks — Biology shelf', url: 'https://en.wikibooks.org/wiki/Wikibooks:Science_bookshelf#Biology', note: 'Open biology texts from cells to ecology.' }
  ]
};

const JUNIOR_COMMON = [
  { cat: 'Past questions', title: 'Myschool — BECE past questions', url: 'https://myschool.ng/classroom', note: 'Year-by-year junior school past questions with answers.' },
  { cat: 'Official body', title: 'WAEC Nigeria — BECE home', url: 'https://www.waecnigeria.org/', note: 'The body that runs the BECE: syllabus, timetables and results.' },
  { cat: 'Official body', title: 'NERDC — national curriculum', url: 'https://nerdc.org.ng/', note: 'The official K-12 curriculum: what every JSS class should cover.' },
  { cat: 'Textbook', title: 'Internet Archive — free books', url: 'https://archive.org/', note: 'Free digital library: junior secondary textbooks and revision guides.' }
];
function juniorLink(r) {
  const fix = t => String(t)
    .replace('WAEC Chemistry — redox reactions & oxidation numbers', 'BECE Basic Science — redox & oxidation numbers')
    .replace('Myschool — Chemistry past questions', 'Myschool — Basic Science past questions')
    .replace('JAMB Use of English — lexis & structure masterclass', 'BECE English — lexis & structure masterclass')
    .replace('JAMB Mathematics — full topic-by-topic revision', 'BECE Mathematics — full topic-by-topic revision')
    .replace('Myschool — JAMB/WAEC Maths past questions', 'Myschool — BECE Maths past questions')
    .replace(/JAMB\/WAEC/g, 'BECE').replace(/UTME and WASSCE/g, 'BECE').replace(/WASSCE and UTME/g, 'BECE')
    .replace(/JAMB/g, 'BECE').replace(/WAEC/g, 'BECE').replace(/UTME/g, 'BECE').replace(/WASSCE/g, 'BECE')
    .replace(/jamb\+/g, 'bece+').replace(/waec\+/g, 'bece+');
  return { cat: r.cat, title: fix(r.title), url: fix(r.url), note: fix(r.note) };
}
function renderResources(el) {
  const subject = state.selectedSubject;
  const links = (CURRICULUM[subject].resources || []).map(r =>
    String(state.profile.classLevel || '').startsWith('JSS') ? juniorLink(r) : r);
  const iconFor = cat => ({ 'Video lesson': '▶️', 'Structured course': '🎓', 'Past questions': '🗂️', 'Reference': '📚', 'Dictionary': '🔤', 'Formula sheet': '🧾', 'Simulation': '🧪', 'Diagrams': '🧫', 'Textbook': '📖', 'Official body': '🏛️' }[cat] || '🔗');
  const shelf = (SHELF[subject] || []).concat(String(state.profile.classLevel || '').startsWith('JSS') ? JUNIOR_COMMON : SHELF._common);
  el.innerHTML = `
    ${pageHeader('Web Resources', 'Curated, subject-mapped links — open them in a new tab and revise along.')}
    ${subjectSelector('resources')}
    <div class="grid gap-4 md:grid-cols-2">
      ${links.map(r => `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer"
          class="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-pop">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg transition group-hover:bg-indigo-50">${iconFor(r.cat)}</div>
          <div class="min-w-0">
            <span class="text-[10px] font-bold uppercase tracking-wide text-indigo-600">${r.cat}</span>
            <h3 class="mt-0.5 text-sm font-bold text-slate-900 group-hover:text-indigo-700">${r.title}</h3>
            <p class="mt-1 text-xs leading-relaxed text-slate-500">${r.note}</p>
            <span class="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 group-hover:text-indigo-600">Open link ↗</span>
          </div>
        </a>`).join('')}
    </div>
    <h3 class="mb-3 mt-7 text-sm font-bold text-slate-900">📚 Textbook shelf & past questions</h3>
    <p class="mb-4 -mt-1 text-xs text-slate-500">Free open textbooks and official past-question portals for ${escapeHtml(subject)} — no stones left unturned.</p>
    <div class="grid gap-4 md:grid-cols-2">
      ${shelf.map(r => `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer"
          class="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-pop">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg transition group-hover:bg-emerald-100">${iconFor(r.cat)}</div>
          <div class="min-w-0">
            <span class="text-[10px] font-bold uppercase tracking-wide text-emerald-600">${r.cat}</span>
            <h3 class="mt-0.5 text-sm font-bold text-slate-900 group-hover:text-emerald-700">${r.title}</h3>
            <p class="mt-1 text-xs leading-relaxed text-slate-500">${r.note}</p>
            <span class="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 group-hover:text-emerald-600">Open link ↗</span>
          </div>
        </a>`).join('')}
    </div>
    <div class="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
      <b>Study tip:</b> read the lesson first, then the open textbook for depth, then past-question portals for timed practice. Buddy can summarise any topic while you are offline.
    </div>
    <p class="mt-4 text-[11px] leading-relaxed text-slate-400">
      <b>Content credits.</b> Some StudyOS lesson notes adapt, condense and re-sequence openly-licensed material from
      <b>OpenStax</b> (openstax.org, CC BY 4.0), <b>CK-12</b> and the <b>Wikimedia</b> projects (Wikipedia, Wikibooks, Wikiversity).
      Past questions are reproduced from published WAEC, NECO and JAMB papers via the public question banks of
      SmarTest (smartest.ng) and ExamBuddy (exambuddy.com.ng), with each question attributed to its exam body and year.
      All adaptations remain under their original licences; full credit goes to the original authors and publishers.
    </p>`;
}

/* ==================================================================
   PAGE: FLASHCARDS
   ================================================================== */
function currentFlashDeck() {
  const f = state.flash;
  if (f.phase === 'retry') return f.retryDeck;
  return cardsFor(state.selectedSubject, state.profile.classLevel || 'SS3', f.topicFilter);
}

function confettiBurst() {
  const layer = $('#confetti-layer');
  if (!layer) return;
  const colors = ['#22c55e', '#4ade80', '#facc15', '#f472b6', '#38bdf8', '#a78bfa', '#fb923c', '#f87171'];
  for (let i = 0; i < 34; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti-bit';
    bit.style.left = (4 + Math.random() * 92) + '%';
    bit.style.background = colors[i % colors.length];
    bit.style.width = (4 + Math.random() * 3.5) + 'px';
    bit.style.height = (6 + Math.random() * 5) + 'px';
    bit.style.animationDelay = (Math.random() * 0.3) + 's';
    bit.style.animationDuration = (1.0 + Math.random() * 0.8) + 's';
    layer.appendChild(bit);
    setTimeout(() => bit.remove(), 2100);
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
          <button type="button" onclick="setFlashFilter('${t.title.replace(/'/g, "\'")}')"
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
        <div id="flashcard" class="flashcard card-in ${state.flash.flipped ? 'flipped' : ''} h-96 w-full cursor-pointer select-none" onclick="flipFlashcard()">
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

      <div id="flash-actions">${flashActionsHtml()}</div>
    </div>`;
}

/* Action row under the card: self-grading buttons once flipped, prev/next otherwise.
   Kept as a helper so flipFlashcard() can swap it in place without killing the 3-D flip animation. */
function flashActionsHtml() {
  const f = state.flash;
  const c = subjectColor(state.selectedSubject);
  const deck = currentFlashDeck();
  const idx = Math.min(f.idx, deck.length - 1);
  return f.flipped ? `
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
      </div>`;
}

function flipFlashcard() {
  state.flash.flipped = !state.flash.flipped;
  const card = $('#flashcard');
  if (card) card.classList.toggle('flipped', state.flash.flipped);
  const acts = $('#flash-actions');
  if (acts) acts.innerHTML = flashActionsHtml();
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
  state.tasks.cards++;
  const card = $('#flashcard');
  if (card) card.classList.add('flash-got');
  confettiBurst();
  setTimeout(advanceFlash, 620);
}
function markLater() {
  const deck = currentFlashDeck();
  state.flash.later.push(deck[state.flash.idx]);
  state.tasks.cards++;
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
    recordTask('session');
  }
  renderPage();
}

/* ==================================================================
   PAGE: PRACTICE QUIZ
   ================================================================== */
function renderQuiz(el) {
  if (state.examSim) { renderExamSimPage(el); return; }
  const subject = state.selectedSubject;
  const level = state.profile.classLevel || 'SS3';
  const c = subjectColor(subject);
  const qz = state.quiz;

  if (qz.mode === 'list') {
    const topics = levelTopics(subject, level);
    const qLabel = state.quizSetup.count > 0 ? `${state.quizSetup.count}-question` : 'full';
    el.innerHTML = `
      ${pageHeader('Practice Exam', 'Your personal CBT centre — sit full exam simulations or drill topic by topic.')}
      ${examSimSetupPanel()}
      ${subjectSelector('quiz')}
      <section class="mb-4 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-5 shadow-card animate-fadeUp">
        <div class="flex flex-wrap items-end gap-x-8 gap-y-4">
          <label class="block">
            <h3 class="text-[11px] font-black uppercase tracking-wide text-violet-700">Questions per quiz</h3>
            <select onchange="setQuizCount(Number(this.value))" class="mt-1.5 block w-48 rounded-xl border border-violet-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">
              ${[10, 25, 50].map(num => `<option value="${num}" ${state.quizSetup.count === num ? 'selected' : ''}>${num} questions</option>`).join('')}
              <option value="0" ${state.quizSetup.count === 0 ? 'selected' : ''}>All questions</option>
            </select>
          </label>
          <label class="block">
            <h3 class="text-[11px] font-black uppercase tracking-wide text-indigo-700">Timer</h3>
            <select onchange="setQuizTimer(Number(this.value))" class="mt-1.5 block w-48 rounded-xl border border-indigo-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm">
              ${[10, 20, 30, 45, 60].map(min => `<option value="${min}" ${state.quizSetup.minutes === min ? 'selected' : ''}>${min} minutes</option>`).join('')}
              <option value="0" ${state.quizSetup.minutes === 0 ? 'selected' : ''}>No timer</option>
            </select>
          </label>
        </div>
        <p class="mt-3 text-[11px] leading-relaxed text-slate-500">${state.quizSetup.minutes > 0 ? `Papers auto-submit when the ${state.quizSetup.minutes}-minute timer hits zero — exactly like a real CBT centre. ` : 'Add a timer to train under real exam pressure. '}Your settings apply to topic quizzes, mixed practice and past papers, and longer quizzes mix in extra questions automatically.</p>
      </section>
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
              <button type="button" onclick="startTopicQuiz('${subject.replace(/'/g, "\'")}', '${t.title.replace(/'/g, "\'")}')"
                class="self-start rounded-xl ${c.solid} px-4 py-2 text-xs font-bold text-white transition hover:opacity-90">📝 Start ${qLabel} quiz</button>` : `
              <span class="self-start rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-400">✍️ Quiz being written</span>`}
          </article>`).join('')}
      </div>`;
    return;
  }

  const quiz = (qz.questions && qz.questions.length) ? qz.questions : (qz.mode === 'mock' ? mixedFor(subject) : qz.mode === 'past' ? pastFor(subject) : topicQuiz(subject, qz.level, qz.topicIdx));
  const quizTitle = qz.mode === 'mock' ? `Mixed exam practice` : qz.mode === 'past' ? `Real past questions (WAEC/JAMB/NECO)` : qz.topicTitle;
  if (!quiz.length) {
    el.innerHTML = `
      ${pageHeader('Practice Exam', quizTitle)}
      ${subjectSelector('quiz')}
      <div class="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-card">
        <div class="text-4xl">✍️</div>
        <p class="mt-3 text-sm font-bold text-slate-600">The 10-question quiz for this topic is being written.</p>
        <button type="button" onclick="backToQuizList()" class="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800">← Back to quiz list</button>
      </div>`;
    return;
  }
  const answered = Object.keys(state.quiz.answers).length;

  if (qz.mode === 'cbt' && !qz.submitted) {
    const qi = Math.min(Math.max(qz.examIdx || 0, 0), quiz.length - 1);
    const q = quiz[qi];
    const chosen = state.quiz.answers[q.id];
    const marked = !!(qz.reviewed || {})[q.id];
    el.innerHTML = `
      <div class="mb-4 rounded-2xl bg-slate-900 p-4 text-white shadow-card animate-fadeUp">
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <button type="button" onclick="exitCbtExam()" class="rounded-lg bg-white/10 px-2.5 py-1 text-[10px] font-bold text-slate-200 transition hover:bg-white/20" title="Leave the exam">✕ Exit</button>
          <div class="text-sm font-black tracking-widest">STUDYOS EXAM</div>
          <div class="text-[11px] font-bold text-slate-300">${(qz.meta || {}).examType || 'Practice'} · ${(qz.meta || {}).classLevel || level}</div>
          <div class="ml-auto flex items-center gap-3">
            <span class="text-xs font-bold text-slate-200">Question ${qi + 1} / ${quiz.length}</span>
            ${qz.deadline ? `<span id="quiz-timer" class="rounded-full bg-white/10 px-2.5 py-1 font-mono text-xs font-bold text-white ring-1 ring-inset ring-white/20">⏱ ${fmtCountdown(Math.max(0, qz.deadline - Date.now()))}</span>` : '<span class="rounded-full bg-white/10 px-2.5 py-1 text-xs font-bold text-slate-200">No time limit</span>'}
          </div>
        </div>
      </div>

      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
        <div class="mb-3 flex items-start gap-3">
          <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[11px] font-bold text-white">${qi + 1}</span>
          <h3 class="flex-1 text-sm font-bold leading-relaxed text-slate-900">${q.q}${q.src ? `<span class="ml-2 inline-block rounded bg-amber-100 px-1.5 py-0.5 align-middle text-[9px] font-bold text-amber-700">${q.src}</span>` : ''}${q.subject ? `<span class="ml-2 inline-block rounded bg-indigo-50 px-1.5 py-0.5 align-middle text-[9px] font-bold text-indigo-600">${q.subject}</span>` : ''}</h3>
        </div>
        <div class="grid grid-cols-1 gap-2">
          ${q.options.map((opt, oi) => {
            const picked = chosen === oi;
            return `
            <button type="button" onclick="selectQuizAnswer('${q.id}', ${oi})"
              class="flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-xs font-semibold text-slate-700 transition-all ${picked ? 'border-indigo-400 bg-indigo-50 ring-1 ring-inset ring-indigo-300' : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50'}">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${picked ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'} text-[10px] font-bold">${String.fromCharCode(65 + oi)}</span>
              <span class="flex-1">${opt}</span>
            </button>`;
          }).join('')}
        </div>
        <label class="mt-4 flex cursor-pointer items-center gap-2 text-xs font-bold ${marked ? 'text-amber-600' : 'text-slate-500'}">
          <input type="checkbox" class="h-4 w-4 accent-amber-500" ${marked ? 'checked' : ''} onchange="toggleMarkReview('${q.id}')" />
          🔖 Mark for review — come back to this question before submitting
        </label>
      </section>

      <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onclick="examPrev()" ${qi === 0 ? 'disabled' : ''}
          class="rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 disabled:opacity-40">← Previous</button>
        <button type="button" onclick="submitExam()" class="rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-black text-white shadow-card transition hover:bg-emerald-500">Submit Exam ✓</button>
        ${qi === quiz.length - 1
          ? '<span class="w-24"></span>'
          : `<button type="button" onclick="examNext()" class="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-card transition hover:bg-slate-800">Next →</button>`}
      </div>

      <div class="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
        <div class="mb-2 flex flex-wrap items-center gap-3">
          <div class="text-[10px] font-black uppercase tracking-widest text-slate-400">Question Navigator</div>
          <div class="flex flex-wrap gap-2 text-[9px] font-bold text-slate-400">
            <span class="flex items-center gap-1"><span class="h-2.5 w-2.5 rounded bg-slate-900"></span> current</span>
            <span class="flex items-center gap-1"><span class="h-2.5 w-2.5 rounded bg-indigo-600"></span> answered</span>
            <span class="flex items-center gap-1"><span class="h-2.5 w-2.5 rounded bg-slate-200"></span> unanswered</span>
            <span class="flex items-center gap-1"><span class="h-2.5 w-2.5 rounded bg-amber-400"></span> marked</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5">
          ${quiz.map((qq, i) => {
            const isCur = i === qi, isAns = state.quiz.answers[qq.id] !== undefined, isMark = !!(state.quiz.reviewed || {})[qq.id];
            const cls = isCur ? 'bg-slate-900 text-white ring-2 ring-indigo-300' : isMark ? 'bg-amber-400 text-slate-900' : isAns ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200';
            return `<button type="button" onclick="examJump(${i})" title="Go to question ${i + 1}${isMark ? ' (marked for review)' : isAns ? ' (answered)' : ''}"
              class="h-8 w-8 rounded-lg text-[11px] font-bold transition ${cls}">${i + 1}</button>`;
          }).join('')}
        </div>
      </div>`;
    return;
  }

  if (qz.mode === 'cbt' && qz.submitted) {
    const r = qz.result;
    const wrong = r.total - r.correct - (r.unanswered || 0);
    const subs = Object.entries(r.bySubject || {}).map(([sub, b]) => ({ sub, pct: b.total ? Math.round((b.correct / b.total) * 100) : 0, b }));
    subs.sort((a, b) => b.pct - a.pct);
    const strongest = subs[0], weakest = subs[subs.length - 1];
    let weakTopic = '';
    if (weakest && r.wrongTopics && r.wrongTopics[weakest.sub]) {
      weakTopic = Object.entries(r.wrongTopics[weakest.sub]).sort((a, b) => b[1] - a[1])[0][0];
    }
    const mistakes = quiz.filter(q => state.quiz.answers[q.id] !== q.correct);
    el.innerHTML = `
      ${r.timeUp ? `
      <div class="mb-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-center animate-fadeUp">
        <div class="text-lg font-black text-rose-700">⏰ Time's up!</div>
        <p class="mt-1 text-xs font-semibold text-rose-600">Your exam has been submitted automatically — exactly like a real CBT centre.</p>
      </div>` : ''}
      <div class="mb-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
        <div class="text-[11px] font-black uppercase tracking-widest text-indigo-500">🎯 Exam Results</div>
        <div class="mt-2 flex flex-wrap items-center gap-6">
          <div class="text-4xl font-black ${r.percent >= 60 ? 'text-emerald-600' : 'text-amber-600'}">${r.percent}%</div>
          <div class="grid grid-cols-2 gap-x-8 gap-y-1 text-xs font-bold text-slate-600 sm:grid-cols-4">
            <span>✅ Correct: <b class="text-emerald-600">${r.correct}</b></span>
            <span>❌ Wrong: <b class="text-rose-600">${wrong}</b></span>
            <span>➖ Unanswered: <b class="text-slate-500">${r.unanswered || 0}</b></span>
            <span>⏱ Time: <b class="text-indigo-600">${fmtExamTime(r.timeMs)}</b></span>
          </div>
        </div>
        <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div class="h-full rounded-full ${r.percent >= 60 ? 'bg-emerald-500' : 'bg-amber-500'} transition-all duration-700" style="width:${r.percent}%"></div>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-3 text-sm font-bold text-slate-900">📊 Subject Performance</h3>
          <div class="space-y-2.5">
            ${subs.map(x => `
              <div>
                <div class="mb-1 flex justify-between text-[11px] font-bold"><span class="text-slate-600">${x.sub}</span><span class="${x.pct >= 60 ? 'text-emerald-600' : 'text-amber-600'}">${x.pct}% (${x.b.correct}/${x.b.total})</span></div>
                <div class="h-1.5 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full ${x.pct >= 60 ? 'bg-emerald-500' : 'bg-amber-500'}" style="width:${x.pct}%"></div></div>
              </div>`).join('')}
          </div>
        </section>
        <section class="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 shadow-card">
          <h3 class="mb-2 text-sm font-bold text-indigo-900">🧠 StudyOS Analysis</h3>
          <ul class="space-y-1.5 text-xs font-semibold text-indigo-900">
            <li>💪 Your strongest area: <b>${strongest ? strongest.sub : '—'}${strongest ? ' (' + strongest.pct + '%)' : ''}</b></li>
            <li>${weakest && weakest.pct === 100
              ? '💯 Flawless across every subject — nothing to fix!'
              : strongest && weakest && strongest.pct === weakest.pct
                ? '🎯 Even scores across subjects — keep every topic warm.'
                : `🎯 Needs attention: <b>${weakest ? weakest.sub : '—'}${weakTopic ? ' — ' + weakTopic : ''}</b>`}</li>
            <li>${r.unanswered ? `⚠️ ${r.unanswered} question${r.unanswered > 1 ? 's' : ''} left blank — practise pacing with the timer.` : '✅ You attempted every question — great pacing.'}</li>
          </ul>
          <div class="mt-4 flex flex-wrap gap-2">
            <button type="button" onclick="reviewMistakesScroll()" class="rounded-xl bg-white px-4 py-2 text-xs font-bold text-indigo-700 ring-1 ring-inset ring-indigo-200 transition hover:bg-indigo-100">Review Mistakes →</button>
            <button type="button" onclick="planFromExam()" class="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-700">Generate Study Plan →</button>
            <button type="button" onclick="retakeQuiz()" class="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800">↻ Retake</button>
          </div>
        </section>
      </div>

      <div id="cbt-review" class="mt-6 space-y-4">
        <h3 class="text-sm font-bold text-slate-900">📝 Review your mistakes (${mistakes.length})</h3>
        ${mistakes.length ? mistakes.map((q, i) => {
          const chosen = state.quiz.answers[q.id];
          return `
          <section class="rounded-2xl border border-rose-200 bg-white p-5 shadow-card">
            <div class="mb-2 flex items-start gap-2">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-[10px] font-bold text-white">${i + 1}</span>
              <h4 class="flex-1 text-xs font-bold leading-relaxed text-slate-900">${q.q}${q.subject ? `<span class="ml-2 rounded bg-indigo-50 px-1.5 py-0.5 text-[9px] font-bold text-indigo-600">${q.subject}</span>` : ''}${q.src ? `<span class="ml-1 rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">${q.src}</span>` : ''}</h4>
            </div>
            <p class="text-[11px] font-semibold ${chosen === undefined ? 'text-slate-400' : 'text-rose-600'}">Your answer: ${chosen === undefined ? '— (left blank)' : q.options[chosen]}</p>
            <p class="text-[11px] font-semibold text-emerald-700">Correct: ${q.options[q.correct]}</p>
            <p class="mt-2 rounded-xl bg-slate-50 p-3 text-[11px] leading-relaxed text-slate-600">${q.exp}</p>
          </section>`;
        }).join('') : '<p class="rounded-2xl bg-emerald-50 p-4 text-xs font-bold text-emerald-700">A perfect paper — nothing to review. 🎉</p>'}
      </div>
      <div class="mt-6 flex justify-center">
        <button type="button" onclick="backToQuizList()" class="rounded-xl bg-white px-6 py-2.5 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">← Back to exam setup</button>
      </div>`;
    return;
  }

  if (qz.mode === 'past' && !state.quiz.submitted) {
    const qi = Math.min(Math.max(qz.examIdx || 0, 0), quiz.length - 1);
    const q = quiz[qi];
    const chosen = state.quiz.answers[q.id];
    el.innerHTML = `
      ${pageHeader('Practice Exam', `${quizTitle} · ${level}`)}
      ${subjectSelector('quiz')}
      <div class="mb-4">
        <button type="button" onclick="backToQuizList()" class="rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">← All ${level} quizzes</button>
      </div>

      <div class="mb-3 flex flex-wrap items-center gap-3 rounded-2xl border border-amber-200 bg-white p-4 shadow-card">
        <div class="flex items-center gap-2">
          <span class="text-lg">${CURRICULUM[subject].icon}</span>
          <div>
            <div class="text-sm font-bold text-slate-900">${subject} · Real exam simulation</div>
            <div class="flex items-center gap-2 text-[11px] text-slate-500">
              <span>${answered} of ${quiz.length} answered</span>
              ${qz.deadline ? `<span id="quiz-timer" class="rounded-full bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 ring-1 ring-inset ring-indigo-100">⏱ ${fmtCountdown(qz.deadline - Date.now())}</span>` : '<span class="rounded-full bg-slate-100 px-2 py-0.5 font-bold text-slate-600">No time limit</span>'}
            </div>
          </div>
        </div>
        <button type="button" onclick="submitExam()" class="ml-auto rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-amber-400">Submit exam</button>
      </div>

      <p class="mb-4 rounded-xl bg-indigo-50 px-3 py-2 text-[11px] font-semibold leading-relaxed text-indigo-700">🎯 <b>Exam mode — just like the real CBT hall:</b> one question at a time, jump around with the palette below, and submit when done. Every question keeps its exam-body and year tag. Unanswered questions score zero.</p>

      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card animate-fadeUp">
        <div class="mb-3 flex items-start gap-3">
          <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[11px] font-bold text-white">${qi + 1}</span>
          <h3 class="flex-1 text-sm font-bold leading-relaxed text-slate-900">${q.q}${q.src ? `<span class="ml-2 inline-block rounded bg-amber-100 px-1.5 py-0.5 align-middle text-[9px] font-bold text-amber-700">${q.src}</span>` : ''}</h3>
        </div>
        <div class="grid grid-cols-1 gap-2">
          ${q.options.map((opt, oi) => {
            const picked = chosen === oi;
            return `
            <button type="button" onclick="selectQuizAnswer('${q.id}', ${oi})"
              class="flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-xs font-semibold text-slate-700 transition-all ${picked ? 'border-indigo-400 bg-indigo-50 ring-1 ring-inset ring-indigo-300' : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50'}">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${picked ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'} text-[10px] font-bold">${String.fromCharCode(65 + oi)}</span>
              <span class="flex-1">${opt}</span>
            </button>`;
          }).join('')}
        </div>
      </section>

      <div class="mt-4 flex items-center justify-between gap-3">
        <button type="button" onclick="examPrev()" ${qi === 0 ? 'disabled' : ''}
          class="rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 disabled:opacity-40">← Previous</button>
        ${qi === quiz.length - 1
          ? `<button type="button" onclick="submitExam()" class="rounded-xl ${c.solid} px-6 py-2.5 text-xs font-bold text-white shadow-card transition hover:opacity-90">Submit exam ✓</button>`
          : `<button type="button" onclick="examNext()" class="rounded-xl ${c.solid} px-6 py-2.5 text-xs font-bold text-white shadow-card transition hover:opacity-90">Next question →</button>`}
      </div>

      <div class="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
        <div class="mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400">Question palette</div>
        <div class="flex flex-wrap gap-1.5">
          ${quiz.map((qq, i) => `<button type="button" onclick="examJump(${i})" title="Go to question ${i + 1}"
            class="h-8 w-8 rounded-lg text-[11px] font-bold transition ${i === qi ? 'bg-slate-900 text-white ring-2 ring-indigo-300' : state.quiz.answers[qq.id] !== undefined ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">${i + 1}</button>`).join('')}
        </div>
      </div>`;
    return;
  }

  el.innerHTML = `
    ${pageHeader('Practice Exam', `${quizTitle} · ${level}`)}
    ${subjectSelector('quiz')}
    <div class="mb-4">
      <button type="button" onclick="backToQuizList()" class="rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">← All ${level} quizzes</button>
    </div>

    <div class="mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
      <div class="flex items-center gap-2">
        <span class="text-lg">${CURRICULUM[subject].icon}</span>
        <div>
          <div class="text-sm font-bold text-slate-900">${subject} · ${quiz.length} questions</div>
          <div class="flex items-center gap-2 text-[11px] text-slate-500">
            ${state.quiz.submitted ? '<span>Submitted — review your answers below</span>' : `<span>${answered} of ${quiz.length} answered</span>`}
            ${qz.deadline && !state.quiz.submitted ? `<span id="quiz-timer" class="rounded-full bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 ring-1 ring-inset ring-indigo-100">⏱ ${fmtCountdown(qz.deadline - Date.now())}</span>` : ''}
          </div>
        </div>
      </div>
      <div class="ml-auto flex items-center gap-2">
        ${state.quiz.submitted ? `
          <span class="rounded-xl ${state.quiz.result.percent >= 60 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'} px-3 py-1.5 text-xs font-bold">
            Score: ${state.quiz.result.correct}/${state.quiz.result.total} (${state.quiz.result.percent}%)
          </span>
          <button type="button" onclick="retakeQuiz()" class="rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-slate-800">↻ Retake Quiz</button>`
        : `
          <button type="button" onclick="submitQuiz()" ${answered === 0 ? 'disabled' : ''}
            class="rounded-xl ${c.solid} px-4 py-2 text-xs font-bold text-white transition hover:opacity-90 disabled:opacity-40">Submit Answers</button>`}
      </div>
    </div>

    ${state.quiz.submitted ? `
      <div class="mb-5 rounded-2xl border ${state.quiz.result.percent >= 60 ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'} p-5 animate-fadeUp">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-lg font-bold ${state.quiz.result.percent >= 60 ? 'text-emerald-800' : 'text-amber-800'}">
              ${state.quiz.result.percent >= 80 ? 'Excellent work! 🎉' : state.quiz.result.percent >= 60 ? 'Good job — keep going! 💪' : 'Not there yet — read the explanations. 📖'}
            </h3>
            <p class="mt-1 text-xs ${state.quiz.result.percent >= 60 ? 'text-emerald-700' : 'text-amber-700'}">
              You scored ${state.quiz.result.correct} out of ${state.quiz.result.total} (${state.quiz.result.percent}%).
              Your best score in any subject is ${state.quizStats.bestPercent}%.
            </p>
          </div>
          <div class="flex gap-2">
            <button type="button" onclick="retakeQuiz()" class="rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">↻ Retake</button>
            <button type="button" onclick="navigate('study')" class="rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-slate-800">Revise topics</button>
          </div>
        </div>
        <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/70">
          <div class="h-full rounded-full ${state.quiz.result.percent >= 60 ? 'bg-emerald-500' : 'bg-amber-500'} transition-all duration-700" style="width:${state.quiz.result.percent}%"></div>
        </div>
      </div>` : ''}

    <div class="space-y-4">
      ${quiz.map((q, qi) => {
        const chosen = state.quiz.answers[q.id];
        const sub = state.quiz.submitted;
        const isCorrect = sub && chosen === q.correct;
        const isWrong = sub && chosen !== undefined && chosen !== q.correct;
        return `
        <section class="rounded-2xl border ${isCorrect ? 'border-emerald-300 bg-emerald-50/40' : isWrong ? 'border-rose-300 bg-rose-50/40' : 'border-slate-200 bg-white'} p-5 shadow-card transition-colors animate-fadeUp">
          <div class="mb-3 flex items-start gap-3">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${sub ? (isCorrect ? 'bg-emerald-500' : isWrong ? 'bg-rose-500' : 'bg-slate-400') : 'bg-slate-900'} text-[11px] font-bold text-white">${sub ? (isCorrect ? '✓' : isWrong ? '✕' : '–') : qi + 1}</span>
            <h3 class="flex-1 text-sm font-bold leading-relaxed text-slate-900">${q.q}${q.src ? `<span class="ml-2 inline-block rounded bg-amber-100 px-1.5 py-0.5 align-middle text-[9px] font-bold text-amber-700">${q.src}</span>` : ''}</h3>
          </div>
          <div class="grid grid-cols-1 gap-2">
            ${q.options.map((opt, oi) => {
              const picked = chosen === oi;
              const correctOne = sub && oi === q.correct;
              const wrongPick = sub && picked && oi !== q.correct;
              let cls = 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50';
              if (sub && correctOne) cls = 'border-emerald-400 bg-emerald-50 ring-1 ring-inset ring-emerald-300';
              else if (wrongPick) cls = 'border-rose-400 bg-rose-50 ring-1 ring-inset ring-rose-300';
              else if (picked) cls = 'border-indigo-400 bg-indigo-50 ring-1 ring-inset ring-indigo-300';
              return `
                <button type="button" onclick="selectQuizAnswer('${q.id}', ${oi})" ${sub ? 'disabled' : ''}
                  class="flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-xs font-semibold text-slate-700 transition-all ${cls} ${sub ? 'cursor-default' : ''}">
                  <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${correctOne ? 'bg-emerald-500 text-white' : wrongPick ? 'bg-rose-500 text-white' : picked ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'} text-[10px] font-bold">${String.fromCharCode(65 + oi)}</span>
                  <span class="flex-1">${opt}</span>
                  ${correctOne ? '<span class="text-[11px] font-bold text-emerald-600">Correct</span>' : ''}
                  ${wrongPick ? '<span class="text-[11px] font-bold text-rose-600">Your answer</span>' : ''}
                </button>`;
            }).join('')}
          </div>
          ${sub ? `
            <div class="mt-3 rounded-xl ${isCorrect ? 'bg-emerald-100/70 text-emerald-900' : 'bg-slate-100 text-slate-700'} p-3.5">
              <div class="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide ${isCorrect ? 'text-emerald-700' : 'text-indigo-600'}">Explanation${q.src ? `<span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] text-amber-700">${q.src}</span>` : ''}</div>
              <p class="text-xs leading-relaxed">${q.exp}</p>
            </div>` : ''}
        </section>`;
      }).join('')}
    </div>

    ${!state.quiz.submitted ? `
      <div class="mt-6 flex justify-center">
        <button type="button" onclick="submitQuiz()" ${answered === 0 ? 'disabled' : ''}
          class="rounded-xl ${c.solid} px-8 py-3 text-sm font-bold text-white shadow-card transition hover:opacity-90 disabled:opacity-40">Submit ${answered ? `${answered} answer${answered > 1 ? 's' : ''}` : 'Answers'}</button>
      </div>` : `
      <div class="mt-6 flex justify-center">
        <button type="button" onclick="retakeQuiz()" class="rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white shadow-card transition hover:bg-slate-800">↻ Retake this quiz</button>
      </div>`}`;
}

function selectQuizAnswer(qid, oi) {
  if (state.quiz.submitted) return;
  state.quiz.answers[qid] = oi;
  renderPage();
}

async function submitQuiz(auto) {
  const subject = state.selectedSubject;
  const quiz = (state.quiz.questions && state.quiz.questions.length) ? state.quiz.questions
    : (state.quiz.mode === 'mock' ? quizFor(subject)
      : state.quiz.mode === 'past' ? pastFor(subject)
        : topicQuiz(subject, state.quiz.level, state.quiz.topicIdx)).map(shuffleOptions);
  const unanswered = quiz.filter(q => state.quiz.answers[q.id] === undefined).length;
  if (unanswered && !auto && !confirm(`You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`)) return;

  const result = gradeQuiz(quiz, state.quiz.answers);
  if (state.quiz.mode === 'past') state.tasks.pastDrills = (state.tasks.pastDrills || 0) + 1;
  if (state.quiz.deadline && quiz.length >= 15 && result.percent === 100) state.tasks.timedAces = (state.tasks.timedAces || 0) + 1;
  if (state.quiz.mode === 'cbt') {
    const bySubject = {}, wrongTopics = {};
    let unanswered = 0;
    quiz.forEach(q => {
      const sub = q.subject || subject;
      const b = bySubject[sub] || (bySubject[sub] = { correct: 0, total: 0 });
      b.total++;
      const chosen = state.quiz.answers[q.id];
      if (chosen === undefined) unanswered++;
      if (chosen === q.correct) b.correct++;
      else {
        const tp = q.topic || 'General';
        const wt = wrongTopics[sub] || (wrongTopics[sub] = {});
        wt[tp] = (wt[tp] || 0) + 1;
      }
    });
    result.bySubject = bySubject;
    result.wrongTopics = wrongTopics;
    result.unanswered = unanswered;
    result.timeMs = Date.now() - (state.quiz.startedAt || Date.now());
    result.timeUp = !!state.quiz.timeUp;
  }
  {
    const byTopic = {};
    quiz.forEach(q => {
      const sub = q.subject || subject;
      const tp = q.topic || (state.quiz.mode === 'topic' ? state.quiz.topicTitle : '') || 'Mixed practice';
      const key = sub + ' | ' + tp;
      const b = byTopic[key] || (byTopic[key] = { correct: 0, total: 0 });
      b.total++;
      if (state.quiz.answers[q.id] === q.correct) b.correct++;
    });
    result.byTopic = byTopic;
  }
  state.quiz.submitted = true;
  state.quiz.result = result;
  if (state.quiz.mode === 'cbt') {
    const qs = state.quizStats;
    qs.attempts = (qs.attempts || 0) + 1;
    qs.correct = (qs.correct || 0) + result.correct;
    qs.total = (qs.total || 0) + result.total;
    qs.bestPercent = Math.max(qs.bestPercent || 0, result.percent);
    qs.bySubject = { ...(qs.bySubject || {}) };
    qs.byTopic = { ...(qs.byTopic || {}) };
    for (const [key, b] of Object.entries(result.byTopic || {})) {
      const t0 = qs.byTopic[key] || { correct: 0, total: 0 };
      qs.byTopic[key] = { correct: t0.correct + b.correct, total: t0.total + b.total };
    }
    for (const [sub, b] of Object.entries(result.bySubject)) {
      const s0 = qs.bySubject[sub] || { attempts: 0, correct: 0, total: 0, bestPercent: 0 };
      qs.bySubject[sub] = {
        attempts: s0.attempts + 1, correct: s0.correct + b.correct, total: s0.total + b.total,
        bestPercent: Math.max(s0.bestPercent, b.total ? Math.round((b.correct / b.total) * 100) : 0)
      };
    }
    pushHistory(result, subject, 'cbt');
  } else {
    state.quizStats = mergeQuizStats(state.quizStats, subject, result);
    pushHistory(result, subject, state.quiz.mode || 'quiz');
  }
  renderPage();
  toast(`Score: ${result.correct}/${result.total} (${result.percent}%)`);
  await persistQuizStats();
  recordTask('quiz', result);
}

function retakeQuiz() {
  const qz = state.quiz;
  if (qz.mode === 'cbt') { startCbtExam(); return; }
  state.quiz = { ...qz, answers: {}, submitted: false, score: 0, result: null,
    questions: buildQuiz(state.selectedSubject, qz.mode === 'topic' ? 'topic' : qz.mode === 'past' ? 'past' : 'mock', qz.level, qz.topicIdx),
    deadline: quizDeadline() };
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==================================================================
   PAGE: BUDDY AI TUTOR
   ================================================================== */
function renderAssistant(el) {
  el.innerHTML = `
    ${pageHeader('Buddy AI Tutor', 'Your built-in academic assistant. Ask for a definition, a formula, a worked example or exam strategy.')}
    <div class="mx-auto flex h-[calc(100vh-16rem)] min-h-[26rem] max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div class="flex items-center gap-3 border-b border-slate-200 bg-slate-900 px-4 py-3">
        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-base">🤖</div>
        <div class="min-w-0 flex-1">
          <div class="text-sm font-bold text-white">Buddy</div>
          <div class="flex items-center gap-1.5 text-[11px] text-emerald-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Online · ${BUDDY_KB.length} lessons in memory</div>
        </div>
        <button type="button" onclick="toggleGeminiPanel()" title="Buddy settings"
          class="rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] font-bold text-slate-200 transition hover:bg-white/20">⚙️</button>
        <button type="button" onclick="clearChat()" class="rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] font-bold text-slate-200 transition hover:bg-white/20">Clear</button>
      </div>

      <div class="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2">
        <button type="button" onclick="setResearch(${state.settings.research ? 'false' : 'true'})"
          class="flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-bold transition ${state.settings.research ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'}">
          <span class="h-2 w-2 rounded-full ${state.settings.research ? 'bg-emerald-500' : 'bg-slate-400'}"></span>
          🌐 Live internet research: ${state.settings.research ? 'ON' : 'OFF'}
        </button>
        <span class="text-[11px] text-slate-400">${state.settings.geminiApiKey ? '✨ Gemini synthesis active' : 'Sources: Wikipedia + DuckDuckGo'}</span>
        <div id="gemini-panel" class="hidden w-full rounded-xl border border-indigo-100 bg-white p-3">
          <label class="block text-[11px] font-bold text-slate-700" for="gemini-key">Optional: Gemini API key (Buddy writes its own answers from the sources)</label>
          <p class="mt-0.5 text-[10px] text-slate-500">Get a free key at aistudio.google.com. Without it Buddy quotes Wikipedia &amp; DuckDuckGo directly and still cites every source. Stored privately in your own account.</p>
          <div class="mt-2 flex gap-2">
            <input type="password" id="gemini-key" value="${escapeHtml(state.settings.geminiApiKey || '')}" placeholder="AIza…"
              class="flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
            <button type="button" onclick="saveGeminiKey()" class="rounded-lg bg-indigo-600 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-indigo-700">Save</button>
          </div>
          <div class="mt-2 flex flex-wrap items-center gap-2">
            <label class="text-[10px] font-bold text-slate-500" for="gemini-model">Model</label>
            <select id="gemini-model" onchange="setGeminiModel(this.value)"
              class="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[11px] font-semibold text-slate-700 outline-none focus:border-indigo-400">
              ${GEMINI_MODELS.map(m => `<option value="${m}" ${(state.settings.geminiModel || GEMINI_MODELS[0]) === m ? 'selected' : ''}>${m}</option>`).join('')}
            </select>
            <button type="button" onclick="testGemini()" class="rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-emerald-700">🔌 Test key</button>
            <span class="text-[10px] text-slate-400">If a model is ever retired or busy, Buddy auto-switches to the next one.</span>
          ${monetizationOn ? `
          <div class="mt-3 border-t border-slate-100 pt-3">
            <label class="block text-[11px] font-bold text-slate-700" for="paystack-key">Owner only: Paystack public key (turns on Pro card payments)</label>
            <div class="mt-1 flex gap-2">
              <input type="password" id="paystack-key" value="${escapeHtml(state.settings.paystackKey || '')}" placeholder="pk_live_…"
                class="flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
              <button type="button" onclick="savePaystackKey(document.getElementById('paystack-key').value)" class="rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-slate-700">Save</button>
            </div>
            <label class="mt-3 block text-[11px] font-bold text-slate-700">Owner only: activation key generator (student pays to the OPay account, then you send this)</label>
            <div class="mt-1 flex flex-wrap gap-2">
              <input type="email" id="keygen-email" placeholder="student's email" class="flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] outline-none focus:border-emerald-400" />
              <select id="keygen-plan" class="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[11px] font-semibold text-slate-700">
                <option value="pro">Pro · 30 days</option>
                <option value="pack">JAMB Pack · 180 days</option>
              </select>
              <button type="button" onclick="makeActivationKey()" class="rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-emerald-500">Generate key</button>
            </div>
            <div id="keygen-out" class="mt-1"></div>
          </div>` : ''}
          </div>
        </div>
      </div>

      <div id="chat-box" class="nice-scroll flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4"></div>

      <div class="border-t border-slate-200 bg-white p-3">
        <div id="chat-chips" class="mb-2 flex gap-2 overflow-x-auto pb-1 no-scrollbar"></div>
        <form onsubmit="sendChatMessage(event)" class="flex items-end gap-2">
          <textarea id="chat-input" rows="1" placeholder="Ask Buddy anything about your subjects…"
            class="nice-scroll max-h-28 flex-1 resize-none rounded-xl border border-slate-200 p-2.5 text-xs outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            oninput="this.style.height='auto'; this.style.height=Math.min(this.scrollHeight,112)+'px'"></textarea>
          <button type="submit" class="shrink-0 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-700">Send</button>
        </form>
      </div>
    </div>`;

  const box = $('#chat-box');
  if (!state.chat.length) {
    pushChat('buddy', mdToHtml(`Hi${state.profile.name ? ' **' + state.profile.name.split(' ')[0] + '**' : ''}! I'm **Buddy** 🤖\n\nI know the core syllabus for **${(state.profile.subjects && state.profile.subjects.length ? state.profile.subjects : Object.keys(CURRICULUM)).join(', ')}** — definitions, formulas, worked examples and the traps examiners love. I can **solve equations step by step**, and with **live research** turned on I also pull current information from **Wikipedia and DuckDuckGo** and cite every source, so my answers never go stale.\n\nWhat would you like to learn today?`), ['Centripetal force', 'Quadratic equations', 'Redox reactions', 'JAMB exam strategy']);
  } else {
    state.chat.forEach(m => appendBubble(box, m.role, m.html));
    renderChips(state.chat.length ? state.chat[state.chat.length - 1].chips : []);
    scrollChat();
  }
}

function appendBubble(box, role, html) {
  const wrap = document.createElement('div');
  wrap.className = `flex ${role === 'me' ? 'justify-end' : 'justify-start'} animate-fadeUp`;
  wrap.innerHTML = `
    <div class="bubble max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm md:max-w-[75%] ${role === 'me' ? 'bubble-out bg-indigo-600 text-white' : 'bubble-in bg-white text-slate-700 ring-1 ring-inset ring-slate-200'}">${html}</div>`;
  box.appendChild(wrap);
}

function pushChat(role, html, chips) {
  state.chat.push({ role, html, chips: chips || [] });
  const box = $('#chat-box');
  if (box) appendBubble(box, role, html);
  if (chips) renderChips(chips);
  scrollChat();
}

function renderChips(chips) {
  const bar = $('#chat-chips');
  if (!bar) return;
  bar.innerHTML = (chips || []).map(c => `
    <button type="button" onclick="askBuddy('${c.replace(/'/g, "\'")}')"
      class="shrink-0 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[11px] font-bold text-indigo-700 transition hover:bg-indigo-100">${c}</button>`).join('');
}

function scrollChat() {
  const box = $('#chat-box');
  if (box) box.scrollTop = box.scrollHeight;
}

function showTyping(label) {
  const box = $('#chat-box');
  if (!box) return null;
  const wrap = document.createElement('div');
  wrap.id = 'typing-row';
  wrap.className = 'flex justify-start animate-fadeUp';
  wrap.innerHTML = `<div class="flex items-center gap-2.5 rounded-2xl bubble-in bg-white px-4 py-3 ring-1 ring-inset ring-slate-200">
      <span class="typing flex items-center gap-1"><span></span><span></span><span></span></span>
      <span class="text-[11px] font-semibold text-slate-400">${escapeHtml(label || 'Buddy is thinking…')}</span>
    </div>`;
  box.appendChild(wrap);
  scrollChat();
  return wrap;
}

function sendChatMessage(ev) {
  if (ev) ev.preventDefault();
  const input = $('#chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  state.tasks.buddyChats = (state.tasks.buddyChats || 0) + 1;
  checkBadges();
  input.value = '';
  input.style.height = 'auto';
  askBuddy(text);
}

let buddySeq = 0;

async function askBuddy(text, forceResearch) {
  if (!text || !String(text).trim()) return;
  const question = String(text).trim();

  // A "Search the web: …" chip turns research on for that one question.
  let researched = state.settings.research;
  let ask = question;
  const webPrefix = /^search the web:\s*/i;
  if (webPrefix.test(question)) { ask = question.replace(webPrefix, ''); researched = true; }
  if (forceResearch) researched = true;
  if (forceResearch === false) researched = false;
  const usedResearch = researched;

  if (!buddyGate()) {
    if (state.page !== 'assistant') navigate('assistant');
    pushChat('buddy', `You have used today's ${FREE_DAILY_BUDDY} free Buddy questions — Pro students ask without limit. Upgrade and keep me by your side. ⭐`);
    openUpgrade('buddy');
    return;
  }
  if (!state.daily || state.daily.date !== localISO()) state.daily = { date: localISO(), lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '', buddy: 0 };
  state.daily.buddy = (state.daily.buddy || 0) + 1;
  if (state.page !== 'assistant') navigate('assistant');
  pushChat('me', escapeHtml(question));
  renderChips([]);

  const seq = ++buddySeq;
  showTyping(usedResearch ? 'Researching online…' : null);

  try {
    const savedMode = state.settings.research;
    state.settings.research = usedResearch;
    const reply = await composeAnswer(ask);
    state.settings.research = savedMode;
    const t = document.getElementById('typing-row');
    if (t) t.remove();
    if (seq !== buddySeq) return; // a newer question superseded this one
    pushChat('buddy', reply.html, reply.chips);
  } catch (err) {
    const t = document.getElementById('typing-row');
    if (t) t.remove();
    console.warn('[StudyOS] Buddy research failed:', err);
    const reply = buddyReply(ask);
    pushChat('buddy', reply.html + '<div class="box" style="border-left-color:#f59e0b">Live research failed, so this is my built-in lesson.</div>', reply.chips);
  }
}

function setResearch(on) {
  state.settings.research = !!on;
  renderPage();
  saveSettings();
  toast(state.settings.research ? 'Live research ON — Buddy will search the web' : 'Live research OFF — built-in lessons only');
}

function saveGeminiKey() {
  const input = document.getElementById('gemini-key');
  if (!input) return;
  state.settings.geminiApiKey = input.value.trim();
  saveSettings();
  toast(state.settings.geminiApiKey ? 'Gemini key saved — Buddy will now write its own answers' : 'Gemini key cleared — Buddy will quote sources directly');
  renderPage();
}

async function saveSettings() {
  saveLocal();
  if (state.mode !== 'firebase' || !db || !state.uid) return;
  try {
    await updateDoc(userRef(), {
      settings: {
        research: !!state.settings.research,
        geminiModel: state.settings.geminiModel || 'gemini-2.5-flash',
        geminiApiKey: state.settings.geminiApiKey || '',
        paystackKey: state.settings.paystackKey || ''
      },
      updatedAt: serverTimestamp()
    });
  } catch (err) {
    warnFirestoreOnce(err);
  }
}

function clearChat() {
  state.chat = [];
  renderPage();
}

function toggleGeminiPanel() {
  const panel = document.getElementById('gemini-panel');
  if (panel) panel.classList.toggle('hidden');
}

/* ==================================================================
   PAGE: PROFILE & SYNC
   ================================================================== */
function renderProfile(el) {
  const s = state.quizStats;
  const accuracy = s.total ? Math.round((s.correct / s.total) * 100) : 0;
  const rows = [
    ['Full name', state.profile.name || '—'],
    ['Email', state.profile.email || '—'],
    ['Class level', state.profile.classLevel || '—'],
    ['Target exam', state.profile.targetExam || '—'],
    ['Subjects', (state.profile.subjects || []).join(', ') || '—'],
    ['Freezes banked', '❄️ ' + state.streakFreezes]
  ];
  const bySubject = Object.entries(s.bySubject || {});

  el.innerHTML = `
    ${pageHeader('My Profile', 'Your study home — progress, stats and trophies.')}
    <div class="grid gap-5 lg:grid-cols-3">
      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card lg:col-span-2">
        <div class="mb-5 flex items-center gap-4">
          <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white">${initials(state.profile.name)}</div>
          <div class="min-w-0">
            <h3 class="truncate text-lg font-bold text-slate-900">${escapeHtml(state.profile.name || 'Student')}</h3>
            <p class="truncate text-xs text-slate-500">${escapeHtml(state.profile.email || '')}</p>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <span class="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700">${state.profile.classLevel || '—'}</span>
              <span class="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">${state.profile.targetExam || '—'}</span>
              <span class="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-bold text-orange-600">🔥 ${state.streak}-day streak</span>
            </div>
          </div>
        </div>
        <dl class="divide-y divide-slate-100">
          ${rows.map(([k, v]) => `
            <div class="flex flex-col gap-1 py-2.5 sm:flex-row sm:items-center sm:justify-between">
              <dt class="text-xs font-semibold text-slate-500">${k}</dt>
              <dd class="break-all text-xs font-bold text-slate-800 sm:max-w-[60%] sm:text-right">${escapeHtml(String(v))}</dd>
            </div>`).join('')}
        </dl>
        <div class="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
          <button type="button" onclick="reopenOnboarding()" class="rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200">✏️ Edit preferences</button>
          <button type="button" onclick="handleLogout()" class="rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-rose-700">Log Out</button>
        </div>
      </section>

      <div class="space-y-5">
        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-4 text-sm font-bold text-slate-900">📊 Quiz performance</h3>
          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-xl bg-slate-50 p-3"><div class="text-xl font-bold text-slate-900">${s.attempts || 0}</div><div class="text-[11px] text-slate-500">attempts</div></div>
            <div class="rounded-xl bg-slate-50 p-3"><div class="text-xl font-bold text-slate-900">${accuracy}%</div><div class="text-[11px] text-slate-500">accuracy</div></div>
            <div class="rounded-xl bg-slate-50 p-3"><div class="text-xl font-bold text-slate-900">${s.correct || 0}/${s.total || 0}</div><div class="text-[11px] text-slate-500">questions right</div></div>
            <div class="rounded-xl bg-slate-50 p-3"><div class="text-xl font-bold text-slate-900">${s.bestPercent || 0}%</div><div class="text-[11px] text-slate-500">best score</div></div>
          </div>
          ${bySubject.length ? `
            <div class="mt-4 space-y-2">
              ${bySubject.map(([subj, st]) => {
                const pct = st.total ? Math.round((st.correct / st.total) * 100) : 0;
                return `<div>
                  <div class="mb-1 flex justify-between text-[11px] font-bold"><span class="text-slate-600">${subj}</span><span class="text-slate-400">${pct}%</span></div>
                  <div class="h-1.5 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full ${subjectColor(subj).solid}" style="width:${pct}%"></div></div>
                </div>`;
              }).join('')}
            </div>` : '<p class="mt-4 text-xs text-slate-400">Take a quiz to see subject-level stats here.</p>'}
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-1 text-sm font-bold text-slate-900">👨‍👩‍ Family &amp; plan</h3>
          <p class="mb-3 text-[11px] text-slate-400">When you are ready for the full engine, go Pro.</p>
          <div class="flex flex-wrap items-center gap-2">
            ${monetizationOn ? (proActive() ? `<span class="rounded-full bg-amber-50 px-3 py-1.5 text-[11px] font-black text-amber-700">⭐ ${state.profile.plan === 'pack' ? 'JAMB Premium Pack active' : 'Pro active'}</span>` : `<button type="button" onclick="openUpgrade('plan')" class="rounded-xl bg-slate-900 px-4 py-2 text-[11px] font-black text-white transition hover:bg-slate-800">⭐ Activate Pro — ₦${PRO_MONTHLY_NGN.toLocaleString()}/mo</button>`) : ''}
          </div>
          ${monetizationOn && !proActive() ? `<p class="mt-2 text-[10px] text-slate-400">Free today: ${Math.max(0, FREE_DAILY_QUIZZES - dailyQuizzesUsed())} quiz${FREE_DAILY_QUIZZES - dailyQuizzesUsed() === 1 ? '' : 'zes'} left · ${Math.max(0, FREE_DAILY_BUDDY - dailyBuddyUsed())} Buddy questions left.</p>` : ''}
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-1 text-sm font-bold text-slate-900">📈 Your progress</h3>
          <p class="mb-3 text-[11px] text-slate-400">Every quiz draws a dot on this line — watch it climb.</p>
          ${progressChartSvg(s.history)}
          <h4 class="mb-2 mt-4 text-[11px] font-black uppercase tracking-wide text-slate-400">Activity — last 12 weeks</h4>
          ${activityHeatSvg(s.days)}
          <button type="button" onclick="navigate('progress')" class="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-500">📈 Open my full progress page →</button>
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-3 text-sm font-bold text-slate-900">🏅 Badges & streaks</h3>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="rounded-xl bg-orange-50 p-3"><div class="text-xl font-black text-orange-600">🔥 ${state.streak}</div><div class="text-[10px] font-bold text-orange-500">day streak</div></div>
            <div class="rounded-xl bg-sky-50 p-3"><div class="text-xl font-black text-sky-600">❄️ ${state.streakFreezes}</div><div class="text-[10px] font-bold text-sky-500">freezes banked</div></div>
            <div class="rounded-xl bg-indigo-50 p-3"><div class="text-xl font-black text-indigo-600">${state.badges.length}</div><div class="text-[10px] font-bold text-indigo-500">badges found</div></div>
          </div>
          <p class="mt-2 rounded-xl bg-slate-50 px-3 py-2 text-[11px] leading-relaxed text-slate-500">
            ❄️ <b>Freeze rules:</b> every 7-day streak milestone banks a freeze (max 3) — secret badges bank one too.
            A freeze shields one missed day and never grows the streak by itself.
          </p>
          <button type="button" onclick="navigate('badges')" class="mt-3 w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-700">🏅 Open my badge collection →</button>
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-3 text-sm font-bold text-slate-900">💾 Saved progress</h3>
          <p class="text-xs leading-relaxed text-slate-500">
            ${state.mode === 'demo'
              ? 'You are in <b>demo mode</b>: progress is saved in this browser only.'
              : 'Everything you do is saved automatically, so you can pick up right where you left off on any device.'}
          </p>
          <div class="mt-3 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
            <span class="h-2 w-2 rounded-full ${navigator.onLine ? 'bg-emerald-500' : 'bg-rose-500'}"></span>
            <span class="text-[11px] font-bold text-slate-600">${navigator.onLine ? 'Connected' : 'Offline — changes queue until you reconnect'}</span>
          </div>
        </section>
      </div>
    </div>`;
}

/* ==================================================================
   STUDY PLAN ENGINE (onboarding step 6 + daily mission loop)
   ================================================================== */
const SCORE_TIERS = {
  'JAMB UTME': ['200+', '250+', '300+'],
  'WAEC WASSCE': ['All credits (7s-9s)', 'Mostly A1-B3', 'Straight A1s'],
  'NECO': ['All credits', 'Mostly A1-B3', 'Straight A1s'],
  'Post-UTME': ['60%+', '75%+', '90%+'],
  'BECE': ['Credits in all subjects', 'Distinctions in most', 'Top of the class'],
  'General': ['Pass every subject', 'Top 10 of the class', 'Best in class']
};
const STUDY_PREFS = [
  { id: 'quick', icon: '⚡', label: 'Quick sessions', desc: 'About 15 min a day — short, sharp and daily.' },
  { id: 'balanced', icon: '⚖️', label: 'Balanced', desc: 'About 25 min a day — a steady, sustainable rhythm.' },
  { id: 'deep', icon: '🧠', label: 'Deep study', desc: 'About 45 min a day — serious exam preparation.' }
];

function buildStudyPlan() {
  const lvl = state.profile.classLevel || 'SS3';
  const subs = (state.profile.subjects || []).length ? state.profile.subjects : subjectsForLevel(lvl);
  const bs = (state.quizStats && state.quizStats.bySubject) || {};
  let focus = subs[0] || 'Mathematics', focusPct = null, anyStats = false;
  for (const sub of subs) {
    const st = bs[sub];
    if (st && st.total) {
      anyStats = true;
      const pct = Math.round((st.correct / st.total) * 100);
      if (focusPct === null || pct < focusPct) { focusPct = pct; focus = sub; }
    }
  }
  if (state.examPrefs && state.examPrefs.lastWeak && subs.includes(state.examPrefs.lastWeak)) focus = state.examPrefs.lastWeak;
  const topics = topicsFor(focus, lvl);
  const bt = (state.quizStats && state.quizStats.byTopic) || {};
  let focusTopic = '', focusTopicPct = null;
  for (const [key, b] of Object.entries(bt)) {
    if (!key.startsWith(focus + ' | ') || !b.total || b.total < 3) continue;
    const pct = Math.round((b.correct / b.total) * 100);
    if (focusTopicPct === null || pct < focusTopicPct) { focusTopicPct = pct; focusTopic = key.slice(focus.length + 3); }
  }
  if (!focusTopic && topics.length) {
    const dayIdx = Math.floor(Date.now() / 86400000) % Math.max(1, topics.length);
    focusTopic = topics[dayIdx].title;
  }
  const pref = state.profile.studyPref || 'balanced';
  const minutes = pref === 'quick' ? 15 : pref === 'deep' ? 45 : 25;
  const quizCount = pref === 'quick' ? 5 : pref === 'deep' ? 15 : 10;
  return { focus, focusPct, anyStats, focusTopic, focusTopicPct, minutes, quizCount, pref };
}

function planPreviewHtml() {
  const o = state.onboard;
  const p = buildStudyPlan();
  return `
    <div class="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 text-left">
      <div class="text-[11px] font-black uppercase tracking-widest text-indigo-500">🎯 Your study plan</div>
      <div class="mt-1 text-lg font-black text-slate-900">${o.targetExam}${o.targetScore ? ' · ' + o.targetScore : ''}</div>
      <div class="mt-1 text-xs font-semibold text-slate-600">${o.subjects.length} subject${o.subjects.length === 1 ? '' : 's'} · ${p.minutes} min/day · ${p.anyStats ? p.focus + ' needs the most attention' : 'week one diagnoses your strengths'}</div>
      <div class="mt-3 rounded-xl bg-white p-3 shadow-card">
        <div class="text-[11px] font-black uppercase tracking-wide text-slate-500">Today's mission</div>
        <ul class="mt-2 space-y-1.5 text-xs font-semibold text-slate-700">
          <li>📖 ${p.focus}: ${p.focusTopic || 'first topic'} — ${Math.max(5, Math.round(p.minutes * 0.4))} min</li>
          <li>🧠 Flashcards — ${Math.max(5, Math.round(p.minutes * 0.2))} min</li>
          <li>📝 Quiz — ${p.quizCount} questions</li>
        </ul>
      </div>
      <p class="mt-2 text-[10px] leading-relaxed text-slate-500">Your plan refreshes daily from your results — weak topics come first. Completing missions keeps your 🔥 streak alive.</p>
    </div>`;
}

/* ---------------- Pro plans, freemium gates & Paystack ---------------- */
const PRO_MONTHLY_NGN = 2000, PRO_PACK_NGN = 5000;
let monetizationOn = false; // GROWTH PHASE: every feature is free for everyone. Flip to true when paid plans launch.
function setMonetization(on) { monetizationOn = !!on; renderPage(); }
const FREE_DAILY_QUIZZES = 3, FREE_DAILY_BUDDY = 20;
const PRO_UNLOCK_CODE = 'STUDYOS-PRO-2026'; // founder stop-gap — change before launch

// ---------- manual activation loop: Buddy shows the OPay account, founder sends a key ----------
const OPAY_ACCOUNT = '0000000000';   // TODO(prosper): put your real OPay account number here
const OPAY_NAME = 'Prosper';         // TODO(prosper): your OPay account name
const FOUNDER_WA = '2340000000000';  // TODO(prosper): your WhatsApp number, international format e.g. 2348031234567
const ACTIVATION_SECRET = 's0-act-7f3e91b4c2d8a5'; // change only if keys ever leak
function _actHash(str) { let h = 2166136261 >>> 0; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; }
function monthBucket(offset) { const d = new Date(); d.setMonth(d.getMonth() + (offset || 0)); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0'); }
function activationKeyFor(email, plan, bucket) {
  const base = [ACTIVATION_SECRET, String(email || '').toLowerCase().trim(), plan === 'pack' ? 'pack' : 'pro', bucket || monthBucket(0)].join('|');
  const alpha = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let a = _actHash(base), b = _actHash(base + '#r2');
  let code = '';
  for (let i = 0; i < 4; i++) { code += alpha[a % 32]; a = Math.floor(a / 32); }
  for (let i = 0; i < 3; i++) { code += alpha[b % 32]; b = Math.floor(b / 32); }
  return (plan === 'pack' ? 'P' : 'S') + code;
}
function redeemActivationKey(raw) {
  const code = String(raw || '').trim().toUpperCase().replace(/[\s-]/g, '');
  if (!/^[SP][A-Z2-9]{7}$/.test(code)) { toast('That key does not look right — it is 8 characters, like S12AB3CD.'); return; }
  const plan = code[0] === 'P' ? 'pack' : 'pro';
  const email = (state.profile.email || '').toLowerCase().trim();
  const ok = [monthBucket(0), monthBucket(-1)].some(b => activationKeyFor(email, plan, b) === code);
  if (!ok) { toast('This key is not for this account or it has expired — ping Prosper on WhatsApp.'); return; }
  activatePlan(plan, 'key:' + code);
}
function activateViaBuddy(plan) {
  const want = plan === 'pack' ? 'pack' : 'pro';
  closeUpgrade();
  if (state.page !== 'assistant') navigate('assistant');
  const amt = want === 'pack' ? PRO_PACK_NGN : PRO_MONTHLY_NGN;
  const what = want === 'pack' ? 'the JAMB Premium Pack (covers you till your UTME ends)' : 'StudyOS Pro (30 days)';
  pushChat('buddy', `<p>Let's get you activated! 🚀</p>
    <p class="mt-2"><b>1.</b> Transfer <b>₦${amt.toLocaleString()}</b> to this OPay account:</p>
    <p class="mt-1 inline-block rounded-xl bg-amber-50 px-3 py-2 text-sm font-black text-amber-800">${OPAY_ACCOUNT} — ${OPAY_NAME}</p>
    <p class="mt-2"><b>2.</b> Tap <b>I have paid</b> — it pings Prosper on WhatsApp with your email so he can confirm the payment.</p>
    <p class="mt-1"><b>3.</b> He replies with your <b>activation key</b>. Come back here, tap <b>Enter key</b>, paste it — and ${what} is yours! ⭐</p>
    <div class="mt-3 flex flex-wrap gap-2">
      <button type="button" onclick="pingFounderPaid('${want}')" class="rounded-xl bg-emerald-600 px-4 py-2 text-[11px] font-black text-white transition hover:bg-emerald-500">💸 I have paid — ping Prosper</button>
      <button type="button" onclick="openKeyEntry()" class="rounded-xl bg-indigo-600 px-4 py-2 text-[11px] font-black text-white transition hover:bg-indigo-500">🔑 Enter key</button>
      <button type="button" onclick="copyOpayAccount()" class="rounded-xl bg-slate-100 px-4 py-2 text-[11px] font-black text-slate-600 transition hover:bg-slate-200">📋 Copy account</button>
    </div>`, []);
}
function pingFounderPaid(plan) {
  const amt = plan === 'pack' ? PRO_PACK_NGN : PRO_MONTHLY_NGN;
  const what = plan === 'pack' ? 'JAMB Pack' : 'Pro (30 days)';
  const text = `Hi Prosper! I paid N${amt} to the OPay account for StudyOS ${what}. My email: ${state.profile.email || 'not set'}. Please send my activation key. 🙏`;
  window.open('https://wa.me/' + FOUNDER_WA + '?text=' + encodeURIComponent(text), '_blank');
}
function copyOpayAccount() {
  try { navigator.clipboard.writeText(OPAY_ACCOUNT); toast('Account number copied — ' + OPAY_ACCOUNT); }
  catch { toast('Account number: ' + OPAY_ACCOUNT); }
}
function openKeyEntry() {
  closeUpgrade();
  const m = document.getElementById('key-modal');
  if (m) { m.classList.remove('hidden'); m.classList.add('flex'); const i = document.getElementById('activation-key'); if (i) i.value = ''; }
}
function closeKeyEntry() { const m = document.getElementById('key-modal'); if (m) { m.classList.add('hidden'); m.classList.remove('flex'); } }
function keyBackdrop(event) { if (event && event.target === event.currentTarget) closeKeyEntry(); }
function makeActivationKey() {
  const email = ((document.getElementById('keygen-email') || {}).value || '').trim();
  const plan = ((document.getElementById('keygen-plan') || {}).value) || 'pro';
  if (!email) { toast('Type the student email first.'); return; }
  const code = activationKeyFor(email, plan, monthBucket(0));
  const out = document.getElementById('keygen-out');
  if (out) out.innerHTML = `<div class="mt-1 flex flex-wrap items-center gap-2"><span class="rounded-lg bg-emerald-50 px-2 py-1 font-mono text-xs font-black tracking-widest text-emerald-700">${code}</span><button type="button" onclick="sendKeyOnWhatsApp('${email.replace(/'/g, '')}', '${code}')" class="rounded-lg bg-emerald-600 px-2.5 py-1.5 text-[10px] font-bold text-white transition hover:bg-emerald-500">Send on WhatsApp</button></div><p class="mt-1 text-[10px] text-slate-400">The key works while it is still ${monthBucket(0)} (or ${monthBucket(-1)} as grace). Pro runs 30 days from the moment they redeem; the Pack runs 180 days.</p>`;
}
function sendKeyOnWhatsApp(email, code) {
  const text = `Hi! Your StudyOS activation key is ${code}. Open StudyOS, tap Activate → Enter key, and paste it. Enjoy ${String(code)[0] === 'P' ? 'the JAMB Pack' : 'Pro'}! 🎉`;
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
}
function proActive() { return !monetizationOn || ((state.profile.plan === 'pro' || state.profile.plan === 'pack') && (!state.profile.planUntil || state.profile.planUntil > Date.now())); }
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
  const days = ref === 'founder' ? 3650 : (plan === 'pack' ? 180 : 30);
  state.profile.planUntil = Date.now() + days * 86400000;
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
function computeStudyToDos() {
  const s = state.quizStats || {};
  const weak = weakestTopicInfo();
  const todos = [];
  if (weak.weakSub) todos.push(`Do 2 fresh quizzes in ${weak.weakSub} — your lowest-scoring subject (${weak.weakPct}%)`);
  if (weak.weakTop) todos.push(`Re-read the lesson: ${weak.weakTop} (${weak.topPct}% last time)`);
  todos.push('One 15-minute flashcard session on your weakest subject');
  todos.push(state.streak > 0 ? `Protect your ${state.streak}-day streak — study something today` : 'Start a new streak — one quiz today sets Day 1');
  return todos.slice(0, 4);
}
function lockTeaser(label) {
  return `<div class="rounded-xl border border-dashed border-amber-200 bg-amber-50/60 p-3">
    <div class="text-[11px] font-bold text-amber-700">🔒 ${label} — Pro</div>
    <button type="button" onclick="openUpgrade('plan')" class="mt-2 rounded-lg bg-amber-500 px-3 py-1.5 text-[11px] font-black text-white transition hover:bg-amber-600">Unlock · ₦${PRO_MONTHLY_NGN.toLocaleString()}/mo</button>
  </div>`;
}
/* ---------------- Exam command centre (dashboard) ---------------- */
const EXAM_MONTH = { 'JAMB UTME': 3, 'WAEC WASSCE': 4, 'NECO': 5, 'Post-UTME': 7, 'BECE': 4 };
function examSitYear(classLevel) {
  const c = String(classLevel || 'SS3');
  const n = parseInt(c.slice(3), 10) || 3;
  return new Date().getFullYear() + 1 + Math.max(0, 3 - n);
}
function examDateEstimate(exam, classLevel) {
  const m = EXAM_MONTH[exam] === undefined ? 4 : EXAM_MONTH[exam];
  return new Date(examSitYear(classLevel), m, 15);
}
function examCountdown() {
  const exam = state.profile.targetExam || '';
  if (!exam || exam === 'General' || !EXAM_MONTH[exam]) return null;
  const set = state.profile.examDate;
  const target = set ? new Date(set + 'T00:00:00') : examDateEstimate(exam, state.profile.classLevel);
  const days = Math.max(0, Math.ceil((target - new Date()) / 86400000));
  return { days, estimated: !set, date: localISO(target) };
}
function subjectReadiness() {
  const bs = (state.quizStats || {}).bySubject || {};
  return (state.profile.subjects || []).map(sub => {
    const b = bs[sub];
    return { sub, acc: b && b.total ? Math.round((b.correct / b.total) * 100) : null };
  });
}
function gradeBand(p) {
  return p >= 75 ? 'A1' : p >= 70 ? 'B2' : p >= 65 ? 'B3' : p >= 60 ? 'C4' : p >= 55 ? 'C5' : p >= 50 ? 'C6' : p >= 45 ? 'D7' : p >= 40 ? 'E8' : 'F9';
}
function targetNumber() {
  const t = state.profile.targetScore || '';
  const exam = state.profile.targetExam || '';
  if (exam === 'JAMB UTME') { const m = t.match(/(\d+)\+/); return m ? +m[1] : 250; }
  if (exam === 'Post-UTME') { const m = t.match(/(\d+)%/); return m ? +m[1] : 75; }
  return 0;
}
/** Honest projection: per-subject accuracy, counted over the exam subjects.
 *  Subjects with no quiz data count as 0 for score exams — labelled as such. */
function predictedScore() {
  const exam = state.profile.targetExam || '';
  const st = state.quizStats || { total: 0, correct: 0, bySubject: {} };
  const overall = st.total ? Math.round((st.correct / st.total) * 100) : null;
  const bySub = st.bySubject || {};
  if (exam === 'JAMB UTME' || exam === 'Post-UTME') {
    // Model the real sitting: Use of English (60 questions) plus three papers
    // (40 questions each) = 180 questions; each paper is scaled to 100 points,
    // 400 total. Papers with quiz history are MEASURED; the rest are ESTIMATED
    // from overall accuracy (or a neutral 50%) instead of being counted as zero.
    const chosen = (state.profile.subjects && state.profile.subjects.length ? state.profile.subjects : ['Mathematics']);
    const list = ['English Language', ...chosen.filter(x => x !== 'English Language')].slice(0, 4);
    const entries = list.map(sub => {
      const blk = bySub[sub];
      const measured = !!(blk && blk.total > 0);
      const pct = measured ? Math.round((blk.correct / blk.total) * 100) : (overall !== null ? overall : 50);
      return { sub, measured, pct, questions: sub === 'English Language' ? 60 : 40, points: pct };
    });
    const total = entries.reduce((sum, e) => sum + e.points, 0);
    const missing = entries.filter(e => !e.measured).map(e => e.sub);
    if (exam === 'JAMB UTME') return { kind: 'score', max: 400, value: total, entries, missing, overall };
    return { kind: 'percent', max: 100, value: entries.length ? total / entries.length : 0, entries, missing, overall };
  }
  const r = subjectReadiness();
  if (exam === 'WAEC WASSCE' || exam === 'NECO' || exam === 'BECE') {
    return { kind: 'grades', graded: r.filter(x => x.acc !== null).map(x => ({ sub: x.sub, grade: gradeBand(x.acc) })),
             missing: r.filter(x => x.acc === null).map(x => x.sub) };
  }
  return { kind: 'none' };
}
/* ==================== Exam simulation engine ====================
   Full timed sittings that live in the Exam Command Centre: real exam
   shapes (JAMB 180 questions / 2 hours etc.), subject tabs so students
   switch subjects mid-sitting exactly like the real CBT hall, a single
   master clock and a per-subject scorecard at the end. */
const EXAM_PRESETS = [
  { key: 'jamb',   name: 'JAMB UTME sitting',    exam: 'JAMB UTME',    levels: ['SS'],  maxSubjects: 4, perSubject: (sub) => (sub === 'English' ? 60 : 40), mins: 120, label: 'Use of English 60 + 40 per subject · up to 4 subjects · 2-hour clock (real UTME shape)' },
  { key: 'waec',   name: 'WAEC WASSCE sitting',  exam: 'WAEC WASSCE',  levels: ['SS'],  maxSubjects: 6, perSubject: () => 50, minsPerSubject: 60, label: '50 objective questions per subject · 1 hour per paper' },
  { key: 'neco',   name: 'NECO SSCE sitting',    exam: 'NECO SSCE',    levels: ['SS'],  maxSubjects: 6, perSubject: () => 50, minsPerSubject: 60, label: '50 objective questions per subject · 1 hour per paper' },
  { key: 'nabteb', name: 'NABTEB sitting',       exam: 'NABTEB',       levels: ['SS'],  maxSubjects: 6, perSubject: () => 50, minsPerSubject: 60, label: '50 objective questions per subject · 1 hour per paper' },
  { key: 'bece',   name: 'BECE sitting',         exam: 'BECE',         levels: ['JSS'], maxSubjects: 5, perSubject: () => 50, minsPerSubject: 45, label: '50 objective questions per subject · 45 minutes per paper' },
];
/* How the student sits the paper:
   study    — no timer, answer + explanation after every question
   mock     — full timer, exam conditions, nothing revealed until the scorecard
   practice — full timer, complete answer review after submitting */
const SIM_MODES = {
  study:    { name: 'Study mode',    icon: '📚', blurb: 'No timer. Answer one question and the right answer pops up with a full explanation — learn as you go.' },
  mock:     { name: 'Mock mode',     icon: '⏱', blurb: 'Full timer, real exam conditions. No answers or explanations while you sit — just your scorecard at the end.' },
  practice: { name: 'Practice mode', icon: '🎯', blurb: 'Timed sitting, then a complete review afterwards: every question with your answer, the correct one and why.' },
};
let simTimerId = null;

function simClockFmt(ms) {
  const t = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), sec = t % 60;
  return (h ? String(h).padStart(2, '0') + ':' : '') + String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
}

/** Mixed paper for one subject: real past questions first, topped up from the mock bank. */
/** Exam paper for one subject: a JSS student's paper is built ONLY from JSS
 *  topic banks up to their class (no senior content, ever). Senior papers mix
 *  real WAEC/NECO/JAMB past questions first, then the mock bank, then the
 *  student's SS topic banks — every question text is deduplicated. */
function simQuestionsFor(subject, n) {
  const lvl = state.profile.classLevel || 'SS3';
  const isJss = String(lvl).startsWith('JSS');
  const pool = isJss
    ? shuffled(topicBankFor(subject, lvl))
    : shuffled(pastFor(subject)).concat(shuffled(quizFor(subject)), shuffled(topicBankFor(subject, lvl)));
  const seen = new Set(); const out = [];
  for (const q of pool) {
    const key = String(q.q || '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(shuffleOptions(q));
    if (out.length >= n) break;
  }
  return out;
}

function startExamSim(key, mode, opts) {
  if (!quizGate()) return;
  const preset = EXAM_PRESETS.find(p => p.key === key);
  if (!preset) return;
  const m = SIM_MODES[mode] ? mode : 'practice';
  const perSubjectFn = opts && opts.perSubject ? () => opts.perSubject : preset.perSubject;
  const chosen = (state.profile.subjects && state.profile.subjects.length ? state.profile.subjects : Object.keys(CURRICULUM));
  const sections = chosen.slice(0, preset.maxSubjects)
    .map(sub => ({ subject: sub, questions: simQuestionsFor(sub, perSubjectFn(sub)) }))
    .filter(x => x.questions.length);
  if (!sections.length) { toast('Your subjects have no question bank yet — pick subjects in your profile first.'); return; }
  const totalMin = opts && opts.minutes ? opts.minutes : (preset.mins || sections.length * preset.minsPerSubject);
  if (simTimerId) { clearInterval(simTimerId); simTimerId = null; }
  state.examSim = {
    presetKey: preset.key, exam: preset.exam, sections, subjectIdx: 0, qIdx: 0,
    answers: {}, mode: m, deadline: m === 'study' ? null : Date.now() + totalMin * 60000, totalMin,
    submitted: false, result: null,
  };
  if (m === 'study') { state.page = 'quiz'; armBackGuard(); renderPage(); return; }
  simTimerId = setInterval(() => {
    const sim = state.examSim;
    if (!sim || sim.submitted) { clearInterval(simTimerId); simTimerId = null; return; }
    const left = sim.deadline - Date.now();
    const el = document.getElementById('sim-clock');
    if (el) {
      el.textContent = simClockFmt(left);
      if (left <= 300000) el.className = el.className.includes('text-rose-600') ? el.className : el.className + ' text-rose-600';
    }
    if (left <= 0) { toast('\u23f0 Time is up — your sitting has been submitted.'); submitExamSim(true); }
  }, 1000);
  state.page = 'quiz';
  armBackGuard();
  renderPage();
}

function simSelect(qi, optIdx) {
  const sim = state.examSim;
  if (!sim || sim.submitted) return;
  if (sim.mode === 'study' && sim.answers[sim.subjectIdx + '-' + qi] !== undefined) return;
  sim.answers[sim.subjectIdx + '-' + qi] = optIdx;
  renderPage();
}
function simSubject(i) {
  const sim = state.examSim;
  if (!sim || sim.submitted) return;
  sim.subjectIdx = Math.max(0, Math.min(i, sim.sections.length - 1));
  sim.qIdx = 0;
  renderPage();
}
function simJump(i) { const sim = state.examSim; if (!sim || sim.submitted) return; sim.qIdx = i; renderPage(); }
function simPrev() {
  const sim = state.examSim; if (!sim || sim.submitted) return;
  if (sim.qIdx > 0) sim.qIdx -= 1;
  else if (sim.subjectIdx > 0) { sim.subjectIdx -= 1; sim.qIdx = sim.sections[sim.subjectIdx].questions.length - 1; }
  renderPage();
}
function simNext() {
  const sim = state.examSim; if (!sim || sim.submitted) return;
  const sec = sim.sections[sim.subjectIdx];
  if (sim.qIdx < sec.questions.length - 1) sim.qIdx += 1;
  else if (sim.subjectIdx < sim.sections.length - 1) { sim.subjectIdx += 1; sim.qIdx = 0; }
  renderPage();
}

function submitExamSim(auto = false) {
  const sim = state.examSim;
  if (!sim || sim.submitted) return;
  if (simTimerId) { clearInterval(simTimerId); simTimerId = null; }
  const perSubject = sim.sections.map((sec, si) => {
    let correct = 0;
    sec.questions.forEach((q, qi) => { if (sim.answers[si + '-' + qi] === q.correct) correct += 1; });
    const pct = sec.questions.length ? Math.round((correct / sec.questions.length) * 100) : 0;
    state.quizStats = mergeQuizStats(state.quizStats, sec.subject, {
      attempts: 0, correct, total: sec.questions.length, percent: pct,
      bySubject: { [sec.subject]: { correct, total: sec.questions.length } }, byTopic: {},
    });
    return { subject: sec.subject, total: sec.questions.length, correct, pct };
  });
  const total = perSubject.reduce((a, r) => a + r.total, 0);
  const correct = perSubject.reduce((a, r) => a + r.correct, 0);
  const overall = total ? Math.round((correct / total) * 100) : 0;
  let score = null;
  if (/JAMB/i.test(sim.exam)) score = perSubject.reduce((a, r) => a + Math.round(r.pct * (400 / (perSubject.length * 100))), 0);
  sim.submitted = true;
  sim.result = { perSubject, total, correct, overall, score, auto: !!auto };
  checkBadges();
  recordTask('quiz', { total, correct, percent: overall });
  persistProgress();
  renderPage();
  toast('Sitting submitted — scorecard is ready.');
}

function confirmSubmitExamSim() { if (confirm('Submit this sitting now?')) submitExamSim(); }

function exitExamSim() {
  if (simTimerId) { clearInterval(simTimerId); simTimerId = null; }
  state.examSim = null;
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' };
  state.page = 'quiz';
  renderPage();
}

/** Exams available for the student's class level (JSS sees BECE; SS sees JAMB/WAEC/NECO/NABTEB). */
function simPresetsForLevel() {
  const lvl = String(state.profile.classLevel || 'SS3');
  return EXAM_PRESETS.filter(p => p.levels.some(l => lvl.startsWith(l)));
}

/** The pre-exam interface at the top of the Practice Exam page.
 *  First you see the exams for your class; opening one reveals its
 *  modes, questions-per-subject and exam time — then you sit it. */
function examSimSetupPanel() {
  const avail = simPresetsForLevel();
  if (!state.simSetup || !avail.some(p => p.key === state.simSetup.preset)) {
    state.simSetup = { open: '', preset: avail.length ? avail[0].key : '', mode: (state.simSetup && SIM_MODES[state.simSetup.mode]) ? state.simSetup.mode : 'practice' };
  }
  state.simSetup.customQ = state.simSetup.customQ || 0;
  state.simSetup.customMin = state.simSetup.customMin || 0;
  const sel = state.simSetup;
  const open = avail.find(p => p.key === sel.open);
  const cd = examCountdown();
  if (!open) {
    return `
    <section class="mb-4 rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-5 shadow-card animate-fadeUp">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <h3 class="text-sm font-bold text-indigo-900">🧪 Full exam simulations</h3>
        ${cd ? `<span class="rounded-full bg-indigo-100 px-3 py-1 text-[10px] font-black text-indigo-700">⏳ ${cd.days} day${cd.days === 1 ? '' : 's'} to ${escapeHtml(state.profile.targetExam || 'your exam')}</span>` : ''}
      </div>
      <p class="mt-1 text-[11px] leading-relaxed text-indigo-700">Open an exam to set it up your way — pick a mode, then sit a full paper across your subjects with subject tabs and one master clock, exactly like the exam hall.</p>
      <div class="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        ${avail.map(p => `
        <button type="button" onclick="openExamSetup('${p.key}')" class="group rounded-xl border border-indigo-200 bg-white/70 p-3 text-left transition hover:border-indigo-400 hover:shadow-md">
          <span class="block text-xs font-black text-slate-900 group-hover:text-indigo-700">${p.name} <span class="float-right text-indigo-400">→</span></span>
          <span class="mt-0.5 block text-[10px] leading-snug text-slate-500">${p.label}</span>
        </button>`).join('')}
      </div>
      <p class="mt-2 text-[10px] font-semibold text-slate-400">${String(state.profile.classLevel || '').startsWith('JSS') ? 'Exams shown follow your class (Junior Secondary). Senior exams like JAMB and WAEC appear automatically when you move up to SS1.' : 'Your saved subjects become the sitting papers — edit them any time in your profile.'}</p>
    </section>`;
  }
  const chosenCount = Math.min(open.maxSubjects, (state.profile.subjects && state.profile.subjects.length ? state.profile.subjects : Object.keys(CURRICULUM)).length);
  const realMin = open.mins || chosenCount * (open.minsPerSubject || 60);
  return `
    <section class="mb-4 rounded-2xl border-2 border-indigo-300 bg-white p-5 shadow-card animate-fadeUp">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <button type="button" onclick="closeExamSetup()" class="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[10px] font-black text-slate-600 transition hover:bg-slate-200">← All exams</button>
          <h3 class="text-sm font-black text-indigo-900">${open.name}</h3>
        </div>
        ${cd ? `<span class="rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-black text-indigo-700">⏳ ${cd.days} days to go</span>` : ''}
      </div>
      <p class="mt-2 rounded-xl bg-indigo-50 px-3 py-2 text-[11px] font-semibold text-indigo-700">Real ${open.exam}: ${open.label}. Real WAEC/NECO/JAMB past questions are mixed into every paper.</p>
      <h4 class="mt-4 text-[11px] font-black uppercase tracking-wide text-indigo-700">How do you want to sit it?</h4>
      <div class="mt-1.5 grid gap-2 sm:grid-cols-3">
        ${Object.entries(SIM_MODES).map(([k, m]) => `
        <button type="button" onclick="setSimMode('${k}')" class="rounded-xl border p-3 text-left transition ${sel.mode === k ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200' : 'border-slate-200 bg-white hover:border-indigo-300'}">
          <span class="block text-xs font-black text-slate-900">${m.icon} ${m.name}${sel.mode === k ? ' ✅' : ''}</span>
          <span class="mt-0.5 block text-[10px] leading-snug text-slate-500">${m.blurb}</span>
        </button>`).join('')}
      </div>
      <div class="mt-4 grid gap-4 sm:grid-cols-2">
        <label class="block">
          <span class="block text-[10px] font-black uppercase tracking-wide text-slate-400">Questions per subject</span>
          <select onchange="setSimQuestions(Number(this.value))" class="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 shadow-sm">
            <option value="0" ${sel.customQ === 0 ? 'selected' : ''}>Real exam (${open.key === 'jamb' ? 'English 60 + 40 each' : open.perSubject('X') + ' per subject'})</option>
            ${[10, 20, 30, 40, 50].map(n => `<option value="${n}" ${sel.customQ === n ? 'selected' : ''}>${n} questions</option>`).join('')}
          </select>
        </label>
        <label class="block">
          <span class="block text-[10px] font-black uppercase tracking-wide text-slate-400">Time for the whole exam</span>
          <select onchange="setSimMinutes(Number(this.value))" class="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 shadow-sm">
            <option value="0" ${sel.customMin === 0 ? 'selected' : ''}>Real exam (${realMin >= 60 ? Math.floor(realMin / 60) + 'h' + (realMin % 60 ? ' ' + (realMin % 60) + 'm' : '') : realMin + ' min'})</option>
            ${[20, 30, 45, 60, 90, 120].map(n => `<option value="${n}" ${sel.customMin === n ? 'selected' : ''}>${n} minutes</option>`).join('')}
          </select>
        </label>
      </div>
      <button type="button" onclick="startExamSimFromPanel()" class="mt-5 w-full rounded-xl bg-indigo-600 px-6 py-3 text-xs font-black text-white transition hover:bg-indigo-500 sm:w-auto">🚀 Start ${open.name} · ${SIM_MODES[sel.mode].name}${sel.customQ ? ' · ' + sel.customQ + ' questions per subject' : ''}${sel.customMin ? ' · ' + sel.customMin + ' min' : ''}</button>
      <p class="mt-2 text-[10px] font-semibold text-slate-400">${String(state.profile.classLevel || '').startsWith('JSS') ? 'Only questions from your class level go into this paper — nothing senior, ever.' : 'Papers are built from your saved subjects plus real past questions.'}</p>
    </section>`;
}

function openExamSetup(key) {
  state.simSetup = { ...(state.simSetup || {}), open: key, preset: key };
  renderPage();
}
function closeExamSetup() {
  state.simSetup = { ...(state.simSetup || {}), open: '' };
  renderPage();
}
function setSimPreset(key) {
  state.simSetup = { ...(state.simSetup || {}), preset: key };
  renderPage();
}
function setSimMode(mode) {
  if (!SIM_MODES[mode]) return;
  state.simSetup = { ...(state.simSetup || {}), mode };
  renderPage();
}
function setSimQuestions(n) {
  state.simSetup = { ...(state.simSetup || {}), customQ: Math.max(0, Math.min(50, Number(n) || 0)) };
  renderPage();
}
function setSimMinutes(n) {
  state.simSetup = { ...(state.simSetup || {}), customMin: Math.max(0, Math.min(180, Number(n) || 0)) };
  renderPage();
}
function startExamSimFromPanel() {
  const sel = state.simSetup || {};
  startExamSim(sel.preset, sel.mode, { perSubject: sel.customQ || null, minutes: sel.customMin || null });
}

/** The sitting screen: subject tabs + question + palette + master clock. */
function renderExamSimPage(el) {
  const sim = state.examSim;
  const modeInfo = SIM_MODES[sim.mode] || SIM_MODES.practice;
  if (sim.submitted) {
    const r = sim.result;
    const weakest = r.perSubject.slice().sort((a, b) => a.pct - b.pct)[0];
    el.innerHTML = `
      <div class="mx-auto max-w-3xl animate-fadeUp">
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <p class="text-[10px] font-black uppercase tracking-wider text-indigo-500">Exam simulation · ${sim.exam} · ${modeInfo.name}${r.auto ? ' · auto-submitted (time up)' : ''}</p>
          <h2 class="mt-1 text-xl font-black text-slate-900">Sitting scorecard</h2>
          <div class="mt-4 flex flex-wrap items-end gap-6">
            <div>
              <p class="text-3xl font-black text-slate-900">${r.correct}<span class="text-lg font-bold text-slate-400">/${r.total}</span></p>
              <p class="text-[11px] font-semibold text-slate-500">overall · ${r.overall}%</p>
            </div>
            ${r.score != null ? `<div>
              <p class="text-3xl font-black text-indigo-700">${r.score}<span class="text-lg font-bold text-indigo-300">/400</span></p>
              <p class="text-[11px] font-semibold text-slate-500">projected JAMB score</p>
            </div>` : ''}
          </div>
          <div class="mt-5 space-y-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-400">Per subject</p>
            ${r.perSubject.map(x => `
            <div class="flex items-center gap-3">
              <span class="w-28 truncate text-[11px] font-bold text-slate-600">${x.subject}</span>
              <div class="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div class="h-full rounded-full ${x.pct >= 70 ? 'bg-emerald-500' : x.pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'}" style="width:${x.pct}%"></div>
              </div>
              <span class="w-20 text-right text-[11px] font-black text-slate-700">${x.correct}/${x.total} · ${x.pct}%</span>
            </div>`).join('')}
          </div>
          ${weakest ? `<p class="mt-4 rounded-xl bg-amber-50 p-3 text-[11px] font-semibold text-amber-800">🔧 Fix first: <strong>${weakest.subject}</strong> (${weakest.pct}%). Run its weak-topic session, then sit this paper again — improvement between sittings is what examiners reward.</p>` : ''}
          ${sim.mode !== 'mock' ? `
          <div class="mt-4">
            <p class="mb-2 text-[11px] font-black uppercase tracking-wider text-slate-400">Review answers</p>
            <div class="space-y-2">
              ${sim.sections.map((sec, si) => `
              <details class="rounded-xl border border-slate-200 bg-white">
                <summary class="cursor-pointer px-4 py-2.5 text-xs font-bold text-slate-700">📖 ${sec.subject} — ${r.perSubject[si].correct}/${sec.questions.length} correct</summary>
                <div class="space-y-3 border-t border-slate-100 p-4">
                  ${sec.questions.map((q, qi) => {
                    const ch = sim.answers[si + '-' + qi];
                    const ok = ch === q.correct;
                    return `
                    <div>
                      <p class="text-[11px] font-bold leading-relaxed text-slate-800">${qi + 1}. ${q.q}</p>
                      <p class="text-[11px] font-semibold ${ok ? 'text-emerald-700' : 'text-rose-600'}">Your answer: ${ch === undefined ? '— left blank' : q.options[ch]} ${ok ? '✓' : '✗'}</p>
                      ${!ok ? `<p class="text-[11px] font-semibold text-emerald-700">Correct: ${q.options[q.correct]}</p>` : ''}
                      ${q.e ? `<p class="text-[11px] leading-relaxed text-slate-500"><b>How it comes about:</b> ${q.e}</p>` : ''}
                    </div>`;
                  }).join('')}
                </div>
              </details>`).join('')}
            </div>
          </div>` : `<p class="mt-4 rounded-xl bg-slate-50 p-3 text-[11px] font-semibold text-slate-500">⏱ Mock mode keeps explanations hidden — sit it in <b>practice mode</b> to review every answer and why it is right.</p>`}
          <div class="mt-5 flex flex-wrap gap-2">
            <button type="button" onclick="startExamSim('${sim.presetKey}')" class="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-500">🔁 Sit it again</button>
            <button type="button" onclick="exitExamSim()" class="rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-200">Back to drills</button>
          </div>
        </article>
      </div>`;
    return;
  }
  const sec = sim.sections[sim.subjectIdx];
  const q = sec.questions[sim.qIdx];
  const chosen = sim.answers[sim.subjectIdx + '-' + sim.qIdx];
  const left = sim.deadline ? sim.deadline - Date.now() : 0;
  const answeredIn = (si) => sim.sections[si].questions.filter((_, qi) => sim.answers[si + '-' + qi] !== undefined).length;
  const totalAnswered = sim.sections.reduce((a, _, si) => a + answeredIn(si), 0);
  const totalQ = sim.sections.reduce((a, x) => a + x.questions.length, 0);
  el.innerHTML = `
    <div class="mx-auto max-w-5xl animate-fadeUp">
      <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p class="text-[10px] font-black uppercase tracking-wider text-indigo-500">Exam simulation in progress · ${sim.exam} · ${modeInfo.name}</p>
          <p class="text-[11px] font-semibold text-slate-500">${totalAnswered}/${totalQ} answered · switch papers any time, just like the real hall</p>
        </div>
        ${sim.deadline ? `<div class="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2">
          <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Time left</span>
          <span id="sim-clock" class="font-mono text-lg font-black text-white${left <= 300000 ? ' text-rose-400' : ''}">${simClockFmt(left)}</span>
        </div>` : `<span class="rounded-xl bg-emerald-50 px-4 py-2 text-[11px] font-black text-emerald-700">📚 Study mode · no timer — every answer explained right away</span>`}
      </div>
      <div class="mb-3 flex gap-2 overflow-x-auto pb-1">
        ${sim.sections.map((x, si) => `
        <button type="button" onclick="simSubject(${si})"
          class="flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-left transition ${si === sim.subjectIdx ? 'border-indigo-500 bg-indigo-600 text-white shadow-md' : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300'}">
          <span class="text-xs font-black">${x.subject}</span>
          <span class="rounded-full ${si === sim.subjectIdx ? 'bg-indigo-500' : 'bg-slate-100'} px-2 py-0.5 text-[9px] font-black">${answeredIn(si)}/${x.questions.length}</span>
        </button>`).join('')}
      </div>
      <div class="grid gap-4 lg:grid-cols-[1fr_240px]">
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div class="mb-3 flex items-center gap-2">
            <span class="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-black text-indigo-700">${sec.subject} · Q${sim.qIdx + 1} of ${sec.questions.length}</span>
            ${q.src ? `<span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">${q.src}</span>` : ''}
          </div>
          <h3 class="mb-4 text-sm font-bold leading-relaxed text-slate-900">${q.q}</h3>
          <div class="space-y-2">
            ${q.options.map((opt, oi) => {
              const reveal = sim.mode === 'study' && chosen !== undefined;
              const isCorrect = reveal && oi === q.correct;
              const isWrong = reveal && oi === chosen && chosen !== q.correct;
              const frame = isCorrect ? 'border-emerald-400 bg-emerald-50' : isWrong ? 'border-rose-400 bg-rose-50' : chosen === oi ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500' : 'border-slate-200 bg-white hover:border-indigo-300';
              const letter = isCorrect ? 'bg-emerald-600 text-white' : isWrong ? 'bg-rose-500 text-white' : chosen === oi ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600';
              return `
            <button type="button" ${reveal ? 'disabled' : `onclick="simSelect(${sim.qIdx}, ${oi})"`}
              class="flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${frame}">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${letter} text-[10px] font-black">${isCorrect ? '✓' : isWrong ? '✗' : ('ABCD'[oi] || oi + 1)}</span>
              <span class="text-xs font-semibold leading-relaxed text-slate-700">${opt}</span>
            </button>`; }).join('')}
          </div>
          ${sim.mode === 'study' && chosen !== undefined ? `
          <div class="mt-3 rounded-xl border ${chosen === q.correct ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'} p-3">
            <p class="text-[11px] font-black ${chosen === q.correct ? 'text-emerald-700' : 'text-rose-700'}">${chosen === q.correct ? '✅ Correct!' : `❌ Not quite — the right answer is ${'ABCD'[q.correct] || q.correct}: ${q.options[q.correct]}`}</p>
            ${q.e ? `<p class="mt-1 text-[11px] leading-relaxed text-slate-600"><b>How the answer comes about:</b> ${q.e}</p>` : '<p class="mt-1 text-[11px] text-slate-500">No stored explanation for this question.</p>'}
            <button type="button" onclick="simNext()" class="mt-2 rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-black text-white transition hover:bg-slate-700">Next question →</button>
          </div>` : ''}
          <div class="mt-4 flex items-center justify-between">
            <button type="button" onclick="simPrev()" class="rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-200">← Previous</button>
            <button type="button" onclick="simNext()" class="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-500">Next →</button>
          </div>
        </article>
        <aside class="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
          <p class="mb-2 text-[10px] font-black uppercase tracking-wider text-slate-400">Question palette · ${sec.subject}</p>
          <div class="grid grid-cols-6 gap-1.5 lg:grid-cols-5">
            ${sec.questions.map((_, qi) => {
              const done = sim.answers[sim.subjectIdx + '-' + qi] !== undefined;
              return `<button type="button" onclick="simJump(${qi})" class="h-8 rounded-lg text-[10px] font-black transition ${qi === sim.qIdx ? 'bg-indigo-600 text-white ring-2 ring-indigo-300' : done ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}">${qi + 1}</button>`;
            }).join('')}
          </div>
          <p class="mt-3 text-[10px] leading-snug text-slate-400">Green = answered. The clock never stops — manage your time across papers like a real candidate.</p>
          <button type="button" onclick="confirmSubmitExamSim()" class="mt-3 w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-500">${sim.mode === 'study' ? '🏁 Finish study session' : '✅ Submit sitting'}</button>
        </aside>
      </div>
    </div>`;
}

function examCommandCenter() {
  const exam = state.profile.targetExam || '';
  if (!exam) return '';
  const cd = examCountdown();
  const pro = proActive();
  const plan = buildStudyPlan();
  const weak = weakestTopicInfo();
  const rd = subjectReadiness();
  const rows = rd.filter(x => x.acc !== null).slice(0, 4);
  const pred = predictedScore();
  const bar = (x) => `
      <div class="flex items-center gap-3">
        <span class="w-28 truncate text-xs font-bold text-slate-600">${x.sub}</span>
        <div class="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-200/70">
          <div class="h-full rounded-full ${x.acc >= 70 ? 'bg-emerald-500' : x.acc >= 50 ? 'bg-amber-500' : 'bg-rose-500'}" style="width:${x.acc}%"></div>
        </div>
        <span class="w-10 text-right text-xs font-black text-slate-700">${x.acc}%</span>
      </div>`;
  const entryCard = (e) => `
          <div class="rounded-xl bg-white/5 p-3.5">
            <div class="flex items-center justify-between gap-2">
              <span class="truncate text-xs font-black text-white">${e.sub}</span>
              <span class="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-black tracking-wide ${e.measured ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">${e.measured ? 'MEASURED' : 'ESTIMATED'}</span>
            </div>
            <div class="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div class="h-full rounded-full ${e.pct >= 70 ? 'bg-emerald-400' : e.pct >= 50 ? 'bg-amber-400' : 'bg-rose-400'}" style="width:${e.pct}%"></div>
            </div>
            <div class="mt-1.5 flex items-center justify-between text-[10px] font-bold text-slate-400">
              <span>${e.questions} questions</span>
              <span>${e.points}/100 pts</span>
            </div>
          </div>`;
  const predHtml = pred.kind === 'score' ? `
        <div class="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
          <div>
            <div class="text-4xl font-black tracking-tight text-white">${pred.value}<span class="text-lg font-bold text-slate-500">/${pred.max}</span></div>
            <div class="mt-1 text-[11px] font-semibold text-slate-400">projected score if you sat the full UTME today · target ${targetNumber()}+</div>
          </div>
          <p class="max-w-[280px] text-[10px] leading-relaxed text-slate-400">Modelled on the real exam: 180 questions — Use of English (60) plus three papers (40 each) — with every paper scaled to 100 points.</p>
        </div>
        <div class="mt-5 grid gap-3 sm:grid-cols-2">${pred.entries.map(entryCard).join('')}</div>
        ${pred.missing.length ? `<p class="mt-4 text-[10px] leading-relaxed text-slate-400">Papers without quiz history are estimated from your overall accuracy (${pred.overall != null ? pred.overall + '%' : 'a neutral 50%'}) until you sit them. Take those quizzes and the projection turns measured.</p>` : ''}`
    : pred.kind === 'percent' ? `
        <div class="text-4xl font-black tracking-tight text-white">${Math.round(pred.value)}<span class="text-lg font-bold text-slate-500">%</span></div>
        <div class="mt-1 text-[11px] font-semibold text-slate-400">projected average if you sat ${exam} today · target ${targetNumber()}%+</div>
        <div class="mt-5 grid gap-3 sm:grid-cols-2">${(pred.entries || []).map(entryCard).join('')}</div>
        ${pred.missing.length ? `<p class="mt-4 text-[10px] leading-relaxed text-slate-400">Papers without quiz history are estimated from your overall accuracy until you sit them.</p>` : ''}`
    : pred.kind === 'grades' ? `
        <div class="flex flex-wrap gap-2">${pred.graded.map(g => `<span class="rounded-full ${g.grade <= 'C6' && g.grade >= 'A1' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'} px-2.5 py-1 text-[10px] font-black">${g.sub.split(' ')[0]}: ${g.grade}</span>`).join('') || '<span class="text-[11px] text-slate-400">No quiz data yet.</span>'}</div>
        <div class="mt-2 text-[11px] font-semibold text-slate-400">predicted grades at current accuracy</div>
        ${pred.missing.length ? `<div class="mt-2 text-[10px] text-slate-400">not yet quizzed: ${pred.missing.join(', ')}</div>` : ''}`
    : `
        <div class="text-4xl font-black tracking-tight text-white">${state.quizStats.total ? Math.round((state.quizStats.correct / state.quizStats.total) * 100) + '%' : '—'}</div>
        <div class="mt-1 text-[11px] font-semibold text-slate-400">overall accuracy</div>`;
  return `
    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-card animate-fadeUp">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h3 class="text-base font-black text-slate-900">🧭 Your road to ${exam}</h3>
        ${pro ? (cd ? `<span class="rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-black text-indigo-700">⏳ ${cd.days} day${cd.days === 1 ? '' : 's'} to go${cd.estimated ? ' · est.' : ''}</span>` : '') : `<button type="button" onclick="openUpgrade('plan')" class="rounded-full bg-amber-50 px-4 py-1.5 text-xs font-black text-amber-700 transition hover:bg-amber-100">⭐ Go Pro</button>`}
      </div>
      <div class="grid gap-5 lg:grid-cols-5">
        <div class="rounded-xl border border-slate-100 bg-slate-50/70 p-5 lg:col-span-2">
          <div class="mb-3 text-[11px] font-black uppercase tracking-wide text-slate-400">Today’s session</div>
          ${pro ? `
          <div class="text-2xl font-black text-slate-900">${plan.minutes} min <span class="text-sm font-bold text-slate-400">·</span> ${plan.quizCount} quiz${plan.quizCount === 1 ? '' : 'zes'}</div>
          <div class="mt-3 space-y-2 text-xs leading-relaxed text-slate-500">
            <p>Focus: <b class="text-slate-700">${plan.focus}${plan.focusTopic ? ' → ' + plan.focusTopic : ''}</b></p>
            <p>${weak.weakTop ? `Biggest gap: <b class="text-rose-600">${weak.weakSub} → ${weak.weakTop} (${weak.topPct}%)</b>` : weak.weakSub ? `Biggest gap: <b class="text-rose-600">${weak.weakSub} (${weak.weakPct}%)</b>` : 'Take a few quizzes and your weakest topic shows up here.'}</p>
          </div>` : `<div class="rounded-xl bg-white p-4">${lockTeaser('Personal daily plan & weakest-topic radar')}</div>`}
        </div>
        <div class="rounded-xl border border-slate-100 bg-slate-50/70 p-5 lg:col-span-3">
          <div class="mb-3 text-[11px] font-black uppercase tracking-wide text-slate-400">Subject readiness</div>
          ${rows.length ? `<div class="space-y-3.5">${rows.map(bar).join('')}</div>` : '<p class="text-xs text-slate-400">Take a quiz in each subject and your readiness bars appear here.</p>'}
        </div>
      </div>
      <div class="mt-5 rounded-2xl bg-slate-900 p-6">
        <div class="mb-4 text-[11px] font-black uppercase tracking-wide text-slate-400">Projection</div>
        ${pro ? predHtml : `<div class="rounded-xl bg-white p-4">${lockTeaser('Projected score & predicted grades')}</div>`}
      </div>
      ${pro && cd ? `<div class="mt-5 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
        <span>${cd.estimated ? 'Exam date estimated —' : 'Exam date:'}</span>
        <input type="date" value="${state.profile.examDate || ''}" onchange="setExamDate(this.value)"
          class="rounded-lg border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-600" />
        <span>set your real date for an exact countdown</span>
      </div>` : ''}
    </section>`;
}
function setExamDate(v) {
  state.profile.examDate = v || '';
  saveProfile({ examDate: v || '' });
  renderPage();
}
function missionSection() {
  const p = buildStudyPlan();
  const d = (state.daily && state.daily.date === todayISO()) ? state.daily : { lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '' };
  const doneRead = !!p.focusTopic && d.readTopic === p.focusTopic;
  const doneCards = d.cards >= 10;
  const doneQuiz = d.quizzes > 0;
  const doneCount = [doneRead, doneCards, doneQuiz].filter(Boolean).length;
  const esc = (x) => String(x).replace(/'/g, "\\\'");
  const chip = done => done
    ? '<span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-700">✓ DONE</span>'
    : '<span class="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black text-slate-400">PENDING</span>';
  return `
    <section class="mt-5 rounded-2xl border ${doneCount === 3 ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-slate-200'} bg-white p-5 shadow-card animate-fadeUp">
      <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 class="text-sm font-bold text-slate-900">🎯 Today's mission${doneCount === 3
          ? ' <span class="ml-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-700">🏆 COMPLETE 3/3</span>'
          : ` <span class="ml-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black text-slate-400">${doneCount}/3 done</span>`}</h3>
        <span class="text-[11px] font-semibold text-slate-400">${p.minutes} min · ${p.anyStats ? 'coach: ' + p.focus + (p.focusPct != null ? ' (' + p.focusPct + '%)' : '') + (p.focusTopicPct != null ? ' → ' + p.focusTopic + ' ' + p.focusTopicPct + '%' : '') : 'diagnostic week'}</span>
      </div>
      <div class="grid grid-cols-1 gap-2 md:grid-cols-3">
        <div class="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
          <div class="min-w-0 text-xs font-semibold text-slate-700"> ${p.focus}: <span class="block truncate text-[11px] text-slate-500">${p.focusTopic || 'first topic'} — ${Math.max(5, Math.round(p.minutes * 0.4))} min</span></div>
          <div class="flex shrink-0 items-center gap-1.5">${chip(doneRead)}<button type="button" onclick="openTopic('${esc(p.focus)}','${esc(p.focusTopic)}')" class="rounded-lg bg-indigo-600 px-2.5 py-1 text-[10px] font-black text-white transition hover:bg-indigo-700">GO</button></div>
        </div>
        <div class="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
          <div class="min-w-0 text-xs font-semibold text-slate-700">🧠 Flashcards <span class="block text-[11px] text-slate-500">${Math.max(5, Math.round(p.minutes * 0.2))} min of active recall</span></div>
          <div class="flex shrink-0 items-center gap-1.5">${chip(doneCards)}<button type="button" onclick="changeSubject('${esc(p.focus)}'); navigate('flashcards')" class="rounded-lg bg-indigo-600 px-2.5 py-1 text-[10px] font-black text-white transition hover:bg-indigo-700">GO</button></div>
        </div>
        <div class="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
          <div class="min-w-0 text-xs font-semibold text-slate-700">📝 Quiz <span class="block text-[11px] text-slate-500">${p.quizCount} questions in ${p.focus}</span></div>
          <div class="flex shrink-0 items-center gap-1.5">${chip(doneQuiz)}<button type="button" onclick="changeSubject('${esc(p.focus)}'); navigate('quiz')" class="rounded-lg bg-indigo-600 px-2.5 py-1 text-[10px] font-black text-white transition hover:bg-indigo-700">GO</button></div>
        </div>
      </div>
      <p class="mt-3 text-[10px] leading-relaxed text-slate-400">Personalize → study → test → analyze → recommend: tomorrow's mission is built from today's results.</p>
    </section>`;
}

function markLessonDone(subject, title) {
  recordTask('lesson', { subject, title });
  updateChrome();
  renderPage();
  toast('Lesson complete — study activity counted! ✅');
}

/* ==================================================================
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

function renderProgressPage(el) {
  const s = state.quizStats;
  const accuracy = s.total ? Math.round((s.correct / s.total) * 100) : 0;
  const hist = s.history || [];
  const last5 = hist.slice(-5);
  const before5 = hist.slice(-10, -5);
  const avg = arr => arr.length ? Math.round(arr.reduce((a, q) => a + q.p, 0) / arr.length) : null;
  const recentAvg = avg(last5);
  const earlierAvg = avg(before5);
  const delta = (recentAvg !== null && earlierAvg !== null) ? recentAvg - earlierAvg : null;
  const deltaText = delta === null ? 'Take more quizzes to unlock your trend.' :
    delta > 0 ? `📈 Up ${delta} points — you are improving!` :
    delta < 0 ? `📉 Down ${Math.abs(delta)} points this stretch — a tough run is normal. Revise your weakest topic and bounce back.` :
    '➡️ Holding steady — push one weak topic to break out.';
  const bySubject = Object.entries(s.bySubject || {});
  const empty = !hist.length;

  el.innerHTML = `
    ${pageHeader('My Progress', 'Your improvement, activity and every recent result — all in one place.')}
    ${empty ? `
      <section class="rounded-2xl border-2 border-dashed border-slate-200 bg-white p-8 text-center shadow-card">
        <div class="text-4xl">📈</div>
        <h3 class="mt-3 text-base font-bold text-slate-900">No data yet — go take a quiz!</h3>
        <p class="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-slate-500">Every quiz you finish draws a dot on your improvement line. Take one now and come back here to watch it climb.</p>
        <button type="button" onclick="navigate('quiz')" class="mt-4 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-700">📝 Take my first quiz →</button>
      </section>` : `
    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-card">
        <div class="text-2xl font-black text-indigo-600">${s.attempts || 0}</div>
        <div class="text-[10px] font-bold text-slate-500">quizzes taken</div>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-card">
        <div class="text-2xl font-black text-emerald-600">${accuracy}%</div>
        <div class="text-[10px] font-bold text-slate-500">overall accuracy</div>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-card">
        <div class="text-2xl font-black text-amber-600">${s.bestPercent || 0}%</div>
        <div class="text-[10px] font-bold text-slate-500">best score ever</div>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-card">
        <div class="text-2xl font-black ${delta !== null && delta >= 0 ? 'text-emerald-600' : 'text-rose-500'}">${delta === null ? '—' : (delta > 0 ? '+' + delta : delta)}</div>
        <div class="text-[10px] font-bold text-slate-500">trend vs last 5</div>
      </div>
    </div>
    <p class="mt-3 rounded-2xl bg-slate-900 px-4 py-3 text-[11px] font-semibold leading-relaxed text-slate-300">${deltaText}</p>

    <section class="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 class="mb-1 text-sm font-bold text-slate-900">📈 Improvement line</h3>
      <p class="mb-3 text-[11px] text-slate-400">Every quiz draws a dot — the last ${(hist.length > 60 ? 60 : hist.length)} results. Watch the line climb.</p>
      ${progressChartSvg(s.history)}
    </section>

    ${bySubject.length ? `
    <section class="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 class="mb-4 text-sm font-bold text-slate-900">🎯 Accuracy by subject</h3>
      <div class="space-y-2">
        ${bySubject.map(([subj, st]) => {
          const pct = st.total ? Math.round((st.correct / st.total) * 100) : 0;
          return `<div>
            <div class="mb-1 flex justify-between text-[11px] font-bold"><span class="text-slate-600">${subj}</span><span class="text-slate-400">${pct}%</span></div>
            <div class="h-1.5 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full ${subjectColor(subj).solid}" style="width:${pct}%"></div></div>
          </div>`;
        }).join('')}
      </div>
    </section>` : ''}

    <section class="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 class="mb-3 text-sm font-bold text-slate-900">🔥 Activity — last 12 weeks</h3>
      ${activityHeatSvg(s.days)}
    </section>

    <section class="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <h3 class="mb-3 text-sm font-bold text-slate-900">🧾 Recent results</h3>
      <div class="space-y-1.5">
        ${hist.slice(-12).reverse().map(q => `
          <div class="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-600">
            <span class="truncate">${q.d} · ${escapeHtml(q.s)} · ${MODE_LABELS[q.m] || 'Quiz'}</span>
            <span class="shrink-0 rounded-full px-2 py-0.5 font-black ${q.p >= 70 ? 'bg-emerald-100 text-emerald-700' : q.p >= 40 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}">${q.p}%</span>
          </div>`).join('')}
      </div>
    </section>`}
  `;
}


/* ==================================================================
   NAVIGATION & SHELL
   ================================================================== */
const PAGE_TITLES = {
  home: ['Dashboard', 'Your study command centre'],
  study: ['Study Materials', 'Structured lessons by subject and class level'],
  resources: ['Web Resources', 'Videos, courses, past questions and references'],
  flashcards: ['Flashcards', 'Active-recall drills'],
  quiz: ['Practice Exam', 'Timed-style practice with explanations'],
  assistant: ['Buddy AI Tutor', 'Your built-in academic assistant'],
  profile: ['My Profile', 'Your progress and achievements'],
  progress: ['My Progress', 'Watch your improvement climb'],
  badges: ['Badges', 'Your trophy collection']
};

let activeTopic = null;

function navigate(page) {
  state.page = PAGE_TITLES[page] ? page : 'home';
  if (state.page === 'quiz' || state.page === 'flashcards') {
    // Follow the student, not a stale default: sync to the subject being studied,
    // and fall back to a subject that actually has content for this class level.
    if (activeTopic) state.selectedSubject = activeTopic.subject;
    const lvl = state.profile.classLevel || 'SS3';
    if (!topicsFor(state.selectedSubject, lvl).length) {
      const alt = subjectsForLevel(lvl).find(sub => topicsFor(sub, lvl).length);
      if (alt) state.selectedSubject = alt;
    }
  }
  closeDrawer();
  renderPage();
}

function renderPage() {
  if (state.page !== 'quiz') stopQuizTimer();
  $$('.nav-item').forEach(el => {
    const isCurrent = el.getAttribute('data-page') === state.page;
    el.classList.toggle('bg-slate-800', isCurrent);
    el.classList.toggle('text-white', isCurrent);
    el.classList.toggle('text-slate-300', !isCurrent);
  });

  const titles = PAGE_TITLES[state.page] || PAGE_TITLES.home;
  setText('header-title', titles[0]);
  setText('header-sub', titles[1]);

  const main = $('#page-content');
  if (!main) return;
  switch (state.page) {
    case 'study':
      if (activeTopic) renderTopic(main, activeTopic.subject, activeTopic.title);
      else renderStudy(main);
      break;
    case 'resources': renderResources(main); break;
    case 'flashcards': renderFlashcards(main); break;
    case 'quiz': renderQuiz(main); if (state.quiz.mode !== 'list' && state.quiz.deadline && !state.quiz.submitted) startQuizTimer(); else stopQuizTimer(); break;
    case 'assistant': renderAssistant(main); break;
    case 'profile': renderProfile(main); break;
    case 'progress': renderProgressPage(main); break;
    case 'badges': renderBadges(main); break;
    default: renderHome(main);
  }
}

function openTopic(subject, title) {
  activeTopic = { subject, title };
  state.selectedSubject = subject;
  state.page = 'study';
  closeDrawer();
  renderPage();
}

function changeSubject(subject) {
  if (state.selectedSubject === subject) return;
  state.selectedSubject = subject;
  activeTopic = null;
  state.flash = { idx: 0, flipped: false, topicFilter: '', got: 0, later: [], phase: 'main', retryDeck: [] };
  state.quiz = { answers: {}, submitted: false, score: 0, result: null, mode: 'list', level: '', topicIdx: 0, topicTitle: '' };
  renderPage();
}

function toggleDrawer() {
  const sb = $('#sidebar'), ov = $('#sidebar-overlay');
  const open = sb.classList.toggle('open');
  ov.classList.toggle('hidden', !open);
  requestAnimationFrame(() => ov.classList.toggle('opacity-0', !open));
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeDrawer() {
  const sb = $('#sidebar'), ov = $('#sidebar-overlay');
  if (!sb || !ov) return;
  sb.classList.remove('open');
  ov.classList.add('opacity-0');
  setTimeout(() => { if (!sb.classList.contains('open')) ov.classList.add('hidden'); }, 250);
  document.body.style.overflow = '';
}

function updateChrome() {
  const name = state.profile.name || 'Student';
  const ini = initials(name);
  setText('sidebar-name', name);
  setText('sidebar-class', `${state.profile.classLevel || '—'} · ${state.profile.targetExam || '—'}`);
  setText('sidebar-avatar', ini);
  setText('avatar-btn', ini);
  setText('streak-count', `${state.streak} day${state.streak === 1 ? '' : 's'}`);
  setText('freeze-count', `${state.streakFreezes} / ${MAX_FREEZES}`);
  setText('header-streak', `🔥 ${state.streak}`);
  const badge = $('#header-exam-badge');
  if (badge) badge.textContent = state.profile.targetExam || 'Set a target exam';
  setText('sync-mode-label', state.mode === 'demo' ? 'Demo mode · browser storage' : 'Cloud sync: active');
  const mode = $('#sync-mode-label');
  if (mode) mode.classList.toggle('text-amber-500', state.mode === 'demo');
}

/* ==================================================================
   FIRESTORE PERSISTENCE
   ================================================================== */
function userRef() { return state.uid ? doc(db, 'users', state.uid) : null; }

async function saveProfile(patch) {
  Object.assign(state.profile, patch || {});
  if (state.mode !== 'firebase' || !db || !state.uid) return saveLocal();
  try {
    await setDoc(userRef(), {
      name: state.profile.name || '',
      email: state.profile.email || '',
      classLevel: state.profile.classLevel || '',
      targetExam: state.profile.targetExam || '',
      targetScore: state.profile.targetScore || '',
      studyPref: state.profile.studyPref || '',
      subjects: state.profile.subjects || [],
      onboarded: !!state.profile.onboarded,
      dept: state.profile.dept || '',
      examDate: state.profile.examDate || '',
      plan: state.profile.plan || 'free',
      planRef: state.profile.planRef || '',
      planSince: state.profile.planSince || '',
      streak: state.streak || 0,
      lastActiveDate: state.lastActiveDate || '',
      streakFreezes: state.streakFreezes || 0,
      badges: state.badges || [],
      tasks: state.tasks || {},
      quizStats: state.quizStats || {},
      settings: {
        research: !!state.settings.research,
        geminiModel: state.settings.geminiModel || 'gemini-2.5-flash',
        geminiApiKey: state.settings.geminiApiKey || '',
        paystackKey: state.settings.paystackKey || ''
      },
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (err) {
    warnFirestoreOnce(err);
    saveLocal();
  }
}

async function persistQuizStats() {
  if (state.mode !== 'firebase' || !db || !state.uid) return saveLocal();
  try {
    await updateDoc(userRef(), { quizStats: state.quizStats, updatedAt: serverTimestamp() });
  } catch (err) {
    warnFirestoreOnce(err);
    saveLocal();
  }
}

async function persistStreak() {
  if (state.mode !== 'firebase' || !db || !state.uid) return saveLocal();
  try {
    await updateDoc(userRef(), {
      streak: state.streak, lastActiveDate: state.lastActiveDate,
      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,
      quizSetup: state.quizSetup, examPrefs: state.examPrefs,
      updatedAt: serverTimestamp()
    });
    saveLocal(); // keep the local cache in step so stale values can never revive
  } catch (err) {
    warnFirestoreOnce(err);
    saveLocal();
  }
}
function persistProgress() { return persistStreak(); }

function loadLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}
function saveLocal() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      uid: state.uid, profile: state.profile, streak: state.streak,
      lastActiveDate: state.lastActiveDate, quizStats: state.quizStats,
      streakFreezes: state.streakFreezes, badges: state.badges, tasks: state.tasks,
      quizSetup: state.quizSetup, examPrefs: state.examPrefs, settings: state.settings
    }));
  } catch (e) { /* storage unavailable */ }
}

/* Apply a freshly-loaded Firestore doc (or demo snapshot) into state */
function hydrateFromDoc(data) {
  if (!data) return;
  state.profile = {
    name: data.name || state.profile.name || '',
    email: data.email || state.profile.email || '',
    classLevel: data.classLevel || '',
    targetExam: data.targetExam || '',
    subjects: Array.isArray(data.subjects) && data.subjects.length ? data.subjects : [],
    onboarded: !!data.onboarded,
    targetScore: data.targetScore || '',
    studyPref: data.studyPref || '',
    dept: data.dept || '',
    examDate: data.examDate || '',
    plan: data.plan || 'free',
    planRef: data.planRef || '',
    planSince: data.planSince || ''
  };
  // A saved exam that does not exist for the class (e.g. JAMB UTME for a JSS1 student) resets.
  if (state.profile.classLevel && state.profile.targetExam &&
      !examsForLevel(state.profile.classLevel).some(e => e.id === state.profile.targetExam)) {
    state.profile.targetExam = '';
  }
  state.streak = Number(data.streak) || 0;
  state.lastActiveDate = data.lastActiveDate || '';
  state.streakFreezes = Math.min(Number(data.streakFreezes) || 0, MAX_FREEZES);
  state.badges = Array.isArray(data.badges)
    ? data.badges.filter(id => BADGES.some(b => b.id === id)) : [];
  const t = (data.tasks && typeof data.tasks === 'object') ? data.tasks : {};
  state.tasks = {
    quizzes: Number(t.quizzes) || 0, perfects: Number(t.perfects) || 0,
    cards: Number(t.cards) || 0, sessions: Number(t.sessions) || 0,
    tasksTotal: Number(t.tasksTotal) || 0,
    focusSessions: Number(t.focusSessions) || 0, focusMinutes: Number(t.focusMinutes) || 0,
    pastDrills: Number(t.pastDrills) || 0, timedAces: Number(t.timedAces) || 0,
    nightOwl: !!t.nightOwl, earlyBird: !!t.earlyBird,
    weekendStudy: !!t.weekendStudy, buddyChats: Number(t.buddyChats) || 0
  };
  const qs = (data.quizSetup && typeof data.quizSetup === 'object') ? data.quizSetup : {};
  const ep = (data.examPrefs && typeof data.examPrefs === 'object') ? data.examPrefs : {};
  state.examPrefs = {
    classLevel: ep.classLevel || '', examType: ep.examType || '',
    subjects: Array.isArray(ep.subjects) ? ep.subjects : [],
    count: Number(ep.count) || 20, counts: (ep.counts && typeof ep.counts === 'object') ? ep.counts : {},
    minutes: ep.minutes === 0 ? 0 : (Number(ep.minutes) || 60), lastWeak: ep.lastWeak || ''
  };
  state.quizSetup = {
    count: Number.isFinite(Number(qs.count)) ? Number(qs.count) : 10,
    minutes: Number(qs.minutes) || 0
  };
  state.quizStats = data.quizStats && typeof data.quizStats === 'object'
    ? { attempts: 0, correct: 0, total: 0, bestPercent: 0, bySubject: {}, ...data.quizStats }
    : { attempts: 0, correct: 0, total: 0, bestPercent: 0, bySubject: {} };
  if (data.settings && typeof data.settings === 'object') {
    state.settings = {
      research: data.settings.research !== false,
      geminiModel: data.settings.geminiModel || 'gemini-2.5-flash',
      geminiApiKey: data.settings.geminiApiKey || '',
      paystackKey: data.settings.paystackKey || ''
    };
  }
  // Drop subjects that do not exist at this class level (e.g. Physics for a JSS2 student).
  // Never invent a subject list for a brand-new user — onboarding still has to ask.
  const avail = subjectsForLevel(state.profile.classLevel);
  state.profile.subjects = state.profile.subjects.filter(x => avail.includes(x));
  if (state.profile.subjects.length) {
    if (!state.profile.subjects.includes(state.selectedSubject)) {
      state.selectedSubject = state.profile.subjects[0];
    }
  } else if (!avail.includes(state.selectedSubject)) {
    state.selectedSubject = avail[0];
  }
}

/* ==================================================================
   AUTH
   ================================================================== */
function authErrorText(err) {
  const code = (err && err.code) || '';
  const map = {
    'auth/popup-closed-by-user': 'Sign-in was cancelled. Tap the Google button to try again.',
    'auth/popup-blocked': 'Your browser blocked the sign-in pop-up. Allow pop-ups for this page, then try again.',
    'auth/cancelled-popup-request': 'Another sign-in window is already open.',
    'auth/unauthorized-domain': 'This domain is not authorised. Add it under Authentication → Settings → Authorised domains.',
    'auth/operation-not-allowed': 'Google sign-in is not enabled. Turn it on under Authentication → Sign-in method → Google.',
    'auth/configuration-not-found': 'Enable Google sign-in under Authentication → Sign-in method → Google.',
    'auth/account-exists-with-different-credential': 'That Google account is already linked to a different sign-in method.',
    'auth/network-request-failed': 'Network error — check your connection and try again.',
    'auth/too-many-requests': 'Too many attempts. Wait a moment and try again.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/invalid-credential': 'Google could not verify that sign-in. Please try again.'
  };
  return map[code] || (err && err.message) || 'Something went wrong. Please try again.';
}

/* ==================================================================
   GOOGLE SIGN-IN (the only sign-in method)
   ================================================================== */
const googleProvider = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  return provider;
};

let signingIn = false;

function setAuthBusy(on, label) {
  const btn = $('#auth-btn');
  const lbl = $('#auth-btn-label');
  if (btn) btn.disabled = on;
  if (lbl) lbl.textContent = on ? (label || 'Opening Google…') : 'Continue with Google';
}

async function handleGoogleSignIn() {
  if (signingIn) return;
  if (!isConfigured || !auth) {
    if (!isConfigured) {
      authNotice('Cloud sync is not connected yet — connect your project, or explore in <b>Demo Mode</b> below.');
      openSetup();
    } else {
      authNotice('Sign-in could not start just now. Please check your connection and try again, or explore in <b>Demo Mode</b> below.');
    }
    return;
  }
  signingIn = true;
  setAuthBusy(true);
  show($('#auth-error'), false);
  try {
    await signInWithPopup(auth, googleProvider());
    // onAuthStateChanged takes it from here.
  } catch (err) {
    // Pop-ups fail on some mobile browsers — fall back to a full-page redirect.
    const code = (err && err.code) || '';
    if (/popup|redirect/i.test(code)) {
      try {
        await signInWithRedirect(auth, googleProvider());
        return; // page navigates away
      } catch (e2) {
        showAuthError(e2);
      }
    } else {
      showAuthError(err);
    }
  } finally {
    signingIn = false;
    setAuthBusy(false);
  }
}

function showAuthError(err) {
  const box = $('#auth-error');
  if (!box) return;
  box.textContent = authErrorText(err);
  show(box, true);
}

function startDemoMode() {
  state.mode = 'demo';
  const saved = loadLocal();
  if (saved && saved.profile) {
    hydrateFromDoc(saved);
    if (saved.settings) {
      state.settings = {
        research: saved.settings.research !== false,
        geminiModel: saved.settings.geminiModel || 'gemini-2.5-flash',
        geminiApiKey: saved.settings.geminiApiKey || '',
        paystackKey: saved.settings.paystackKey || ''
      };
    }
    state.uid = saved.uid || 'demo-local-user';
  } else {
    state.uid = 'demo-local-user';
    state.profile = {
      name: 'Demo Student', email: 'demo@studyos.local', classLevel: '', targetExam: '', targetScore: '', studyPref: '',
      subjects: [], onboarded: false
    };
  }
  // Streaks are activity-based: login never extends or resets them; recordTask evaluates.
  saveLocal();
  enterApp();
  toast('Demo mode — data stays in this browser only');
}

async function handleLogout() {
  try {
    if (userUnsub) { userUnsub(); userUnsub = null; }
    if (state.mode === 'firebase' && auth) {
      await signOut(auth);
      // onAuthStateChanged(null) hides the app shell.
    } else {
      show($('#main-app'), false);
      $('#main-app').classList.remove('flex');
      show($('#auth-screen'), true);
      resetAuthScreen();
      toast('Logged out');
    }
  } catch (err) {
    toast('Could not log out cleanly.');
  }
}

/* ==================================================================
   ONBOARDING
   ================================================================== */
function openOnboarding() {
  state.onboard = {
    step: 1,
    name: state.profile.name || '',
    dept: state.profile.dept || '',
    classLevel: state.profile.classLevel || '',
    targetExam: state.profile.targetExam || '',
    subjects: (state.profile.subjects || []).slice(),
    targetScore: state.profile.targetScore || '',
    studyPref: state.profile.studyPref || ''
  };
  show($('#onboarding-modal'), true);
  $('#onboarding-modal').classList.add('flex');
  renderOnboardStep();
}
function reopenOnboarding() { openOnboarding(); }

function renderOnboardStep() {
  const o = state.onboard;
  [1, 2, 3, 4, 5, 6].forEach(i => {
    const bar = document.getElementById(`op-${i}`);
    if (bar) bar.className = `h-1.5 flex-1 rounded-full transition-colors ${i <= o.step ? 'bg-indigo-500' : 'bg-slate-200'}`;
    show($(`#step-${i}`), i === o.step);
  });
  setText('onboard-kicker', `Step ${o.step} of 6`);
  setText('onboard-title', [
    'What class are you in?', 'Which exam are you targeting?', 'Pick your subjects',
    'What score are you aiming for?', 'How do you like to study?', 'Your study plan is ready!'
  ][o.step - 1]);
  setText('onboard-sub', [
    'We tailor lessons and past-question practice to your level.',
    'Buddy and the quizzes adapt to the syllabus you are sitting.',
    'Choose at least one. You can change these later in Profile.',
    'A clear target keeps every session purposeful.',
    'StudyOS sizes your daily plan to match your style.',
    'Built from your class, exam, subjects and target. It updates daily from your results.'
  ][o.step - 1]);
  show($('#onboard-error'), false);
  show($('#onboard-back'), o.step > 1);
  $('#onboard-next').textContent = o.step === 5 ? 'Generate my study plan ✨' : o.step === 6 ? 'Save & start studying →' : 'Continue';

  if (o.step === 1) {
    $('#step-1').innerHTML = `
      <label class="mb-1 block text-[11px] font-bold uppercase tracking-wide text-slate-400" for="onboard-name">What should we call you?</label>
      <input id="onboard-name" type="text" maxlength="40" value="${escapeHtml(o.name || '')}" placeholder="Your name — e.g. Ada"
        oninput="state.onboard.name = this.value"
        class="mb-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />` +
      OPTIONS.classes.map(c => `
      <button type="button" onclick="pickOnboardOption('classLevel','${c}')"
        class="rounded-xl border px-3 py-4 text-sm font-bold transition-all ${o.classLevel === c ? 'border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}">${c}</button>`).join('');
    o.subjects = o.subjects.filter(x => subjectsForLevel(o.classLevel).includes(x));
    if (!examsForLevel(o.classLevel).some(e => e.id === o.targetExam)) o.targetExam = '';
  } else if (o.step === 2) {
    $('#step-2').innerHTML = examsForLevel(o.classLevel).map(e => `
      <button type="button" onclick="pickOnboardOption('targetExam','${e.id}')"
        class="flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${o.targetExam === e.id ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-100' : 'border-slate-200 bg-white hover:border-slate-300'}">
        <div>
          <div class="text-sm font-bold ${o.targetExam === e.id ? 'text-indigo-700' : 'text-slate-900'}">${e.id}</div>
          <div class="text-[11px] text-slate-500">${e.desc}</div>
        </div>
        <span class="text-sm ${o.targetExam === e.id ? 'text-indigo-600' : 'text-slate-300'}">${o.targetExam === e.id ? '●' : '○'}</span>
      </button>`).join('');
    if (o.targetExam && !(SCORE_TIERS[o.targetExam] || []).includes(o.targetScore)) o.targetScore = '';
  } else if (o.step === 3) {
    const isSS = String(o.classLevel).startsWith('SS');
    const deptBar = isSS ? `
      <div class="mb-2 grid grid-cols-3 gap-2">
        ${Object.keys(DEPARTMENTS).map(dp => `
          <button type="button" onclick="pickDept('${dp}')"
            class="rounded-xl border px-2 py-2.5 text-xs font-bold transition-all ${o.dept === dp ? 'border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}">${DEPT_LABELS[dp]}</button>`).join('')}
      </div>
      <p class="mb-3 text-[11px] text-slate-500">Pick your department — Maths &amp; English stay core for everybody.</p>` : '';
    $('#step-3').innerHTML = deptBar + selectableSubjects().map(s => {
      const on = o.subjects.includes(s);
      return `
        <button type="button" onclick="toggleOnboardSubject('${s}')"
          class="flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all ${on ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-100' : 'border-slate-200 bg-white hover:border-slate-300'}">
          <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${on ? 'bg-indigo-600' : 'bg-slate-100'} text-sm">${OPTIONS.icons[s]}</span>
          <span class="flex-1 text-xs font-bold ${on ? 'text-indigo-700' : 'text-slate-700'}">${s}</span>
          <span class="text-sm ${on ? 'text-indigo-600' : 'text-slate-300'}">${on ? '✓' : '○'}</span>
        </button>`;
    }).join('');
  } else if (o.step === 4) {
    $('#step-4').innerHTML = (SCORE_TIERS[o.targetExam] || SCORE_TIERS.General).map(t => `
      <button type="button" onclick="pickOnboardOption('targetScore','${t}')"
        class="rounded-xl border px-3 py-4 text-sm font-bold transition-all ${o.targetScore === t ? 'border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}">${t}</button>`).join('');
  } else if (o.step === 5) {
    $('#step-5').innerHTML = STUDY_PREFS.map(p => `
      <button type="button" onclick="pickOnboardOption('studyPref','${p.id}')"
        class="flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all ${o.studyPref === p.id ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-100' : 'border-slate-200 bg-white hover:border-slate-300'}">
        <div>
          <div class="text-sm font-bold ${o.studyPref === p.id ? 'text-indigo-700' : 'text-slate-900'}">${p.icon} ${p.label}</div>
          <div class="text-[11px] text-slate-500">${p.desc}</div>
        </div>
        <span class="text-sm ${o.studyPref === p.id ? 'text-indigo-600' : 'text-slate-300'}">${o.studyPref === p.id ? '●' : '○'}</span>
      </button>`).join('');
  } else {
    $('#step-6').innerHTML = planPreviewHtml();
  }
}

function pickDept(d) {
  const o = state.onboard;
  o.dept = o.dept === d ? '' : d;
  const keep = selectableSubjects();
  o.subjects = o.subjects.filter(x => keep.includes(x));
  renderOnboardStep();
}
function pickOnboardOption(key, value) {
  state.onboard[key] = value;
  renderOnboardStep();
}
function toggleOnboardSubject(subject) {
  const list = state.onboard.subjects;
  const i = list.indexOf(subject);
  if (i >= 0) list.splice(i, 1); else list.push(subject);
  renderOnboardStep();
}
function onboardBack() {
  if (state.onboard.step > 1) { state.onboard.step--; renderOnboardStep(); }
}
async function onboardNext() {
  const o = state.onboard;
  const err = $('#onboard-error');
  const invalid =
    (o.step === 1 && !o.classLevel) || (o.step === 2 && !o.targetExam) ||
    (o.step === 3 && (String(o.classLevel).startsWith('SS') ? !o.dept : false)) ||
    (o.step === 3 && o.subjects.length === 0) || (o.step === 4 && !o.targetScore) ||
    (o.step === 5 && !o.studyPref);
  if (invalid) {
    err.textContent = o.step === 3 ? 'Select at least one subject to continue.' : 'Please make a selection to continue.';
    show(err, true);
    return;
  }
  if (o.step < 6) { o.step++; renderOnboardStep(); return; }

  const btn = $('#onboard-next');
  btn.disabled = true;
  btn.textContent = 'Saving…';
  if ((o.name || '').trim()) state.profile.name = o.name.trim();
  state.profile.dept = o.dept || '';
  state.profile.classLevel = o.classLevel;
  state.profile.targetExam = o.targetExam;
  state.profile.subjects = o.subjects.slice();
  state.profile.targetScore = o.targetScore;
  state.profile.studyPref = o.studyPref;
  state.profile.onboarded = true;
  if (!state.profile.subjects.includes(state.selectedSubject)) {
    state.selectedSubject = state.profile.subjects[0];
  }
  try {
    await saveProfile();
  } finally {
    btn.disabled = false;
    btn.textContent = 'Save & start studying →';
    $('#onboarding-modal').classList.remove('flex');
    show($('#onboarding-modal'), false);
    updateChrome();
    state.page = 'home';
    renderPage();
    toast('Study plan ready — today’s mission is waiting! 🎯');
  }
}

/* ==================================================================
   SETUP MODAL
   ================================================================== */
function openSetup() {
  const m = $('#setup-modal');
  show(m, true); m.classList.add('flex');
}
function closeSetup() {
  const m = $('#setup-modal');
  m.classList.remove('flex'); show(m, false);
}
async function copyRules() {
  const text = $('#rules-block').innerText;
  try {
    await navigator.clipboard.writeText(text);
    toast('Security rules copied to clipboard');
  } catch (e) {
    toast('Select the text and copy manually');
  }
}

/* ==================================================================
   ENTER / LEAVE APP
   ================================================================== */
/* Passive gap check: if the user returns after missing day(s), settle the streak now —
   a banked freeze shields it (with the ice animation), otherwise it resets. Activity
   still extends the streak; merely opening the app never does. */
function checkStreakOnEntry() {
  const d = todayISO();
  if (computeStreak(state.lastActiveDate, d) !== 1) return; // only gaps are settled here
  const rolled = applyStreak(state.streak, state.lastActiveDate, d, state.streakFreezes);
  if (!rolled.changed) return;
  state.streak = rolled.streak;
  state.streakFreezes = rolled.freezes;
  state.lastActiveDate = d;
  queueCelebration({ type: rolled.event });
  updateChrome();
  persistProgress();
}

function enterApp() {
  show($('#boot-screen'), false);
  show($('#auth-screen'), false);
  $('#main-app').classList.remove('hidden');
  $('#main-app').classList.add('flex');
  checkStreakOnEntry();
  updateChrome();
  activeTopic = null;
  renderPage();
  if (!state.profile.onboarded || !state.profile.classLevel || !state.profile.targetExam || !state.profile.subjects.length) {
    setTimeout(openOnboarding, 350);
  }
}

function leaveApp() {
  $('#main-app').classList.add('hidden');
  $('#main-app').classList.remove('flex');
  show($('#auth-screen'), true);
  resetAuthScreen();
}

/* ==================================================================
   BOOT
   ================================================================== */
function initFirebase() {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    return true;
  } catch (err) {
    console.warn('[StudyOS] Firebase init failed:', err);
    return false;
  }
}

async function handleUser(user) {
  if (!user) {
    state.uid = null;
    if (userUnsub) { userUnsub(); userUnsub = null; }
    leaveApp();
    show($('#boot-screen'), false);
    return;
  }

  state.uid = user.uid;
  state.mode = 'firebase';

  let data = null;
  const ref = doc(db, 'users', user.uid);
  try {
    const snap = await getDoc(ref);
    data = snap.exists() ? snap.data() : null;
  } catch (err) {
    warnFirestoreOnce(err);
  }

  hydrateFromDoc(data || {});
  state.profile.name = state.profile.name || user.displayName || (user.email ? user.email.split('@')[0] : 'Student');
  state.profile.email = user.email || state.profile.email || '';

  // Streak bookkeeping (Duolingo method: freeze shields a missed day, else reset)
  // Streaks are activity-based: login never extends or resets them; recordTask evaluates.

  try {
    await setDoc(ref, {
      name: state.profile.name,
      email: state.profile.email,
      classLevel: state.profile.classLevel || '',
      targetExam: state.profile.targetExam || '',
      targetScore: state.profile.targetScore || '',
      studyPref: state.profile.studyPref || '',
      subjects: state.profile.subjects || [],
      onboarded: !!state.profile.onboarded,
      streak: state.streak,
      lastActiveDate: state.lastActiveDate,
      streakFreezes: state.streakFreezes,
      badges: state.badges,
      tasks: state.tasks,
      quizStats: state.quizStats,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (err) {
    warnFirestoreOnce(err);
  }

  // Live sync from other tabs/devices
  try {
    userUnsub = onSnapshot(ref, snap => {
      if (!snap.exists()) return;
      const d = snap.data();
      hydrateFromDoc(d);
      updateChrome();
      if (state.page === 'profile') renderPage();
    }, err => warnFirestoreOnce(err));
  } catch (err) {
    warnFirestoreOnce(err);
  }

  enterApp();
}

function boot() {
  const ok = isConfigured && initFirebase();

  if (!ok) {
    authNotice(isConfigured
      ? 'Firebase could not start (check the browser console). You can still explore in <b>Demo Mode</b>.'
      : 'Firebase config still holds placeholder keys, so real sign-in is off. Explore in <b>Demo Mode</b>, or open the setup guide to add your own.');
    toast(isConfigured ? 'Firebase failed to start — Demo Mode available' : 'Add your Firebase keys to enable sign-in', 4200);
    show($('#boot-screen'), false);
    show($('#auth-screen'), true);
    resetAuthScreen();
    return;
  }

  show($('#auth-screen'), false);
  onAuthStateChanged(auth, user => {
    handleUser(user).catch(err => {
      console.error('[StudyOS] session error:', err);
      show($('#boot-screen'), false);
      show($('#auth-screen'), true);
    });
  }, err => {
    console.error('[StudyOS] auth error:', err);
    authNotice(escapeHtml(authErrorText(err)));
    show($('#boot-screen'), false);
    show($('#auth-screen'), true);
  });
}

/* Online/offline badge */
window.addEventListener('online', () => setText('header-status', 'Online'));
window.addEventListener('offline', () => setText('header-status', 'Offline'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeDrawer(); closeSetup(); } });

/* Chart dot tooltips: hover on desktop, tap on mobile */
document.addEventListener('mouseover', e => { const d = e.target && e.target.closest ? e.target.closest('.chart-dot') : null; if (d) showChartTip(d); });
document.addEventListener('mouseout', e => { const d = e.target && e.target.closest ? e.target.closest('.chart-dot') : null; if (d) hideChartTip(); });
document.addEventListener('click', e => {
  const d = e.target && e.target.closest ? e.target.closest('.chart-dot') : null;
  if (d) showChartTip(d); else hideChartTip();
}, true);

/* Expose handlers used by inline onclick attributes */

/* ==================================================================
   PWA — install prompt + service worker
   ================================================================== */
function installCardHtml() {
  if (!state.installAvailable || state.installed || localStorage.getItem('studyos.installDismissed') === '1') return '';
  return `
    <section class="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-xl">📲</div>
        <div class="min-w-0 flex-1">
          <h3 class="text-sm font-bold text-slate-900">Install StudyOS on this device</h3>
          <p class="text-[11px] leading-relaxed text-slate-600">One tap — it lives like an app on the home screen, opens full-screen and keeps working offline.</p>
        </div>
        <button type="button" onclick="installStudyOS()" class="shrink-0 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-500">Install</button>
        <button type="button" onclick="dismissInstall()" aria-label="Dismiss install prompt" class="shrink-0 rounded-xl bg-white px-3 py-2.5 text-xs font-black text-slate-400 transition hover:bg-slate-100">✕</button>
      </div>
    </section>`;
}
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  state.installAvailable = true;
  if (state.page === 'home' && typeof renderPage === 'function') renderPage();
});
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  state.installAvailable = false;
  state.installed = true;
  toast('StudyOS installed — see you on the home screen! 🎉');
  if (state.page === 'home' && typeof renderPage === 'function') renderPage();
});
function installStudyOS() {
  if (!deferredInstallPrompt) { toast('Use your browser menu → "Add to Home Screen"'); return; }
  deferredInstallPrompt.prompt();
  deferredInstallPrompt = null;
  state.installAvailable = false;
  renderPage();
}
function dismissInstall() {
  localStorage.setItem('studyos.installDismissed', '1');
  state.installAvailable = false;
  renderPage();
}
if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && (import.meta.env ? import.meta.env.PROD : false)) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => { /* offline shell is a bonus, never fatal */ });
  });
}

Object.assign(window, {
  navigate, changeSubject, openTopic, toggleDrawer, closeDrawer,
  handleGoogleSignIn, handleLogout, startDemoMode,
  openOnboarding, reopenOnboarding, pickOnboardOption, pickDept, toggleOnboardSubject,
  onboardBack, onboardNext, markLessonDone, openSetup, closeSetup, copyRules,
  startCbtExam, toggleCustomExam, setExamClass, setExamType, toggleExamSubject, setExamCount, setExamDefaultCount, exitCbtExam,
  setExamMinutes, toggleMarkReview, reviewMistakesScroll, planFromExam, quizTimerTick,
  flipFlashcard, nextFlashcard, prevFlashcard, gotoFlashcard,
  markGot, markLater, setFlashFilter, restartFlash, dismissCelebration,
  startTopicQuiz, startMockQuiz, startPastQuiz, backToQuizList, openTopicCards,
  startExamSim, simSelect, simSubject, simJump, simPrev, simNext, submitExamSim, confirmSubmitExamSim, exitExamSim,
  setSimPreset, setSimMode, setSimQuestions, setSimMinutes, startExamSimFromPanel, openExamSetup, closeExamSetup, EXAM_PRESETS, SIM_MODES,
  setQuizCount, setQuizTimer, openFocusModal, closeFocusModal, focusModalBackdrop, startFocus, stopFocus, updateFocusPill, setExamDate,
  selectQuizAnswer, submitQuiz, retakeQuiz, examJump, examPrev, examNext, submitExam,
  sendChatMessage, askBuddy, clearChat, setResearch, saveGeminiKey, toggleGeminiPanel,
  openUpgrade, closeUpgrade, upgradeBackdrop, choosePlan, founderUnlock, whatsappUpgrade, savePaystackKey,
  activateViaBuddy, pingFounderPaid, copyOpayAccount, openKeyEntry, closeKeyEntry, keyBackdrop, redeemActivationKey,
  makeActivationKey, sendKeyOnWhatsApp, activationKeyFor, monthBucket, proActive, OPAY_ACCOUNT,
  dismissFreezeIce, installStudyOS, dismissInstall,
  setGeminiModel, testGemini,
});

/* Test hook (used by the automated checks) */
window.__STUDYOS_TEST__ = {
  computeStreak, applyStreak, BADGES, FREEZE_EVERY_TASKS, MAX_FREEZES,
  checkBadges, recordTask, persistProgress, checkStreakOnEntry, computeStudyToDos,
  gradeQuiz, mergeQuizStats, initials, startPastQuiz, examJump, examPrev, examNext, submitExam,
  scoreKb, buddyReply, plainMath, solveQuadratic, solveSimultaneous, extractCoeffs,
  topicsFor, quizFor, pastFor, PASTQ, buildQuiz, shuffled, flashFor, mdToHtml, escapeHtml, fmtQuad,
  researchOnline, composeAnswer, RESEARCH,
  CURRICULUM, BUDDY_KB, OPTIONS, LEVEL_CATALOGUE, EXAM_OPTIONS,
  subjectsForLevel, selectableSubjects, subjectIsAvailable, hydrateFromDoc,
  examsForLevel, renderOnboardStep, levelTopics, topicQuiz, cardsFor, buildStudyPlan,
  markGot, markLater, pushHistory, progressChartSvg, activityHeatSvg, shuffleOptions, localISO,
  examCountdown, subjectReadiness, gradeBand, predictedScore, targetNumber, examCommandCenter, examDateEstimate,
  proActive, quizGate, buddyGate, activatePlan, FREE_DAILY_QUIZZES, FREE_DAILY_BUDDY, closeUpgrade, setMonetization,
  activateViaBuddy, pingFounderPaid, copyOpayAccount, openKeyEntry, closeKeyEntry, keyBackdrop,
  redeemActivationKey, makeActivationKey, sendKeyOnWhatsApp, activationKeyFor, monthBucket, proActive, OPAY_ACCOUNT,
  getState: () => state
};

/* Small hooks the verification harness uses to drive settings deterministically. */
window.__setGemini = key => { state.settings.geminiApiKey = key; };
window.__researchOn = () => state.settings.research;
window.__geminiKey = () => state.settings.geminiApiKey;

boot();

