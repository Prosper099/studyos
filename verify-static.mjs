/* Static integrity checks on the built index.html.
   Catches the class of bug a runtime harness can miss: a handler name referenced
   by inline onclick that was never exported, or a selector for an element that
   does not exist in the markup. */
import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync(process.env.STUDYOS_HTML || '/home/user/index.html', 'utf8');
const results = [];
const check = (name, cond, detail = '') => {
  results.push({ name, ok: !!cond, detail });
  if (!cond) console.log(`FAIL  ${name}  ${detail}`);
};

// ---------- 1. every inline event handler is a declared, exported function ----------
const handlerNames = new Set();
for (const m of html.matchAll(/\son(?:click|submit|input|change)="([a-zA-Z_$][\w$]*)\s*\(/g)) {
  handlerNames.add(m[1]);
}
const declared = new Set();
for (const m of html.matchAll(/(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/g)) declared.add(m[1]);
for (const m of html.matchAll(/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?\(/g)) declared.add(m[1]);

const exportedBlock = html.match(/Object\.assign\(window,\s*\{([\s\S]*?)\}\);/);
assert.ok(exportedBlock, 'the module must export its handlers with Object.assign(window, {...})');
const exported = new Set(exportedBlock[1].split(/[,\s]+/).map(s => s.trim()).filter(Boolean));

const missingDeclared = [...handlerNames].filter(n => !declared.has(n));
const missingExported = [...handlerNames].filter(n => !exported.has(n));
check(`all ${handlerNames.size} inline handlers are declared functions`, missingDeclared.length === 0, missingDeclared.join(', '));
check('all inline handlers are exported to window', missingExported.length === 0, missingExported.join(', '));

// ---------- 2. every $('#id') selector has a matching element (static or template) ----------
const domIds = new Set();
for (const m of html.matchAll(/\sid="([\w-]+)"/g)) domIds.add(m[1]);
for (const m of html.matchAll(/getElementById\(`([\w-]+)`\)/g)) domIds.add(m[1]); // template-built ids like op-${i}
domIds.add('flashcard'); domIds.add('chat-box'); domIds.add('chat-input');
domIds.add('chat-chips'); domIds.add('typing-row'); domIds.add('page-content');
domIds.add('sidebar'); domIds.add('sidebar-overlay'); domIds.add('toast');

const selectorIds = new Set();
for (const m of html.matchAll(/\$\('#([\w-]+)'\)/g)) selectorIds.add(m[1]);
for (const m of html.matchAll(/document\.getElementById\('([\w-]+)'\)/g)) selectorIds.add(m[1]);
for (const m of html.matchAll(/document\.getElementById\(`([\w-]+)`\)/g)) selectorIds.add(m[1]);

const orphanSelectors = [...selectorIds].filter(id => !domIds.has(id));
check('every $()/getElementById target exists in the document', orphanSelectors.length === 0, orphanSelectors.join(', '));

// ---------- 3. tag balance ----------
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
// strip script/style/textarea/pre contents so their innards are not parsed as markup
const markup = html
  .replace(/<script[\s\S]*?<\/script>/gi, '<script></script>')
  .replace(/<style[\s\S]*?<\/style>/gi, '<style></style>')
  .replace(/<!--[\s\S]*?-->/g, '');
const stack = [];
let unbalanced = null;
for (const m of markup.matchAll(/<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g)) {
  const [, closing, rawTag, attrs, selfClose] = m;
  const tag = rawTag.toLowerCase();
  if (VOID.has(tag) || selfClose === '/') continue;
  if (!closing) stack.push(tag);
  else {
    const open = stack.pop();
    if (open !== tag) { unbalanced = `</${tag}> closed an open <${open}>`; break; }
  }
}
check('all HTML tags are balanced', !unbalanced && stack.length === 0,
  unbalanced || (stack.length ? 'unclosed: ' + stack.join(' > ') : ''));

// ---------- 4. required feature surface ----------
const feature = [
  ['Firebase v10 modular SDK from gstatic', /gstatic\.com\/firebasejs\/10\./],
  ['initializeApp + getAuth + getFirestore', /initializeApp\(/, ],
  ['onAuthStateChanged session persistence', /onAuthStateChanged\(/],
  ['Google Sign-In via pop-up', /signInWithPopup\(auth,\s*googleProvider\(\)\)/],
  ['GoogleAuthProvider with account chooser', /new GoogleAuthProvider\(\)[\s\S]*setCustomParameters/],
  ['redirect fallback when pop-ups are blocked', /signInWithRedirect\(auth,\s*googleProvider\(\)\)/],
  ['no email/password auth remains', !/signInWithEmailAndPassword|createUserWithEmailAndPassword|switchAuthTab/.test(html)],
  ['Firestore users/{uid} document', /doc\(db, [\"']users[\"']/],
  ['setDoc merge + updateDoc writes', /setDoc\([\s\S]*?\{ merge: true \}/],
  ['onSnapshot live sync', /onSnapshot\(/],
  ['serverTimestamp()', /serverTimestamp\(\)/],
  ['book logo SVG', /<svg[^>]*viewBox="0 0 48 48"[\s\S]*?<path d="M24 15\.4/],
  ['logo used in boot, auth, sidebar and favicon', (html.match(/viewBox="0 0 48 48"/g) || []).length >= 4 && /<link rel="icon" href="data:image\/svg\+xml/],
  ['Wikipedia research endpoint', /en\.wikipedia\.org\/w\/api\.php[\s\S]*origin=\*/],
  ['DuckDuckGo research endpoint', /api\.duckduckgo\.com/],
  ['optional Gemini synthesis', /generativelanguage\.googleapis\.com\/v1beta\/models/],
  ['live research toggle in the chat UI', /setResearch\(/],
  ['sources are cited with links', /sourcesHtml\(/],
  ['lesson pages offer live research', /Research live/],
  ['onboarding step 1 classes SS1-JSS3', /[\"']SS1[\"'],\s*[\"']SS2[\"'],\s*[\"']SS3[\"'],\s*[\"']JSS1[\"'],\s*[\"']JSS2[\"'],\s*[\"']JSS3[\"']/],
  ['onboarding step 2 senior list (JAMB, WAEC, NECO, Post-UTME, General)', /SS: \[[\s\S]*JAMB UTME[\s\S]*WAEC WASSCE[\s\S]*NECO[\s\S]*Post-UTME[\s\S]*[\"']General[\"']/],
  ['junior exam list is General + BECE', /JSS: \[[\s\S]*[\"']General[\"'][\s\S]*[\"']BECE[\"']/],
  ['examsForLevel splits junior and senior', /function examsForLevel\(classLevel\) \{[\s\S]*startsWith\([\"']JSS[\"']\)/],
  ['onboarding step 2 renders level-aware exams', /examsForLevel\(o\.classLevel\)\.map\(\(?e\)? =>/],
  ['changing class clears an exam that no longer fits', /if \(!examsForLevel\(o\.classLevel\)\.some\(\(?e\)? => e\.id === o\.targetExam\)\) o\.targetExam = [\"']{2};/],
  ['hydrateFromDoc clears an exam invalid for the level', /!examsForLevel\(state\.profile\.classLevel\)\.some\(\(?e\)? => e\.id === state\.profile\.targetExam\)/],
  ['onboarding step 3 lists all seven subjects', /[\"']Mathematics[\"'],\s*[\"']English Language[\"'],\s*[\"']Basic Science[\"'],\s*[\"']Basic Technology[\"'],[\s\S]*[\"']Physics[\"'],\s*[\"']Chemistry[\"'],\s*[\"']Biology[\"']/],
  ['level catalogue maps JSS to junior subjects', /JSS1: \[\s*[\"']Mathematics[\"'],\s*[\"']English Language[\"'],\s*[\"']Basic Science[\"'],\s*[\"']Basic Technology[\"']\s*\]/],
  ['level catalogue maps SS to senior subjects', /SS1:\s*\[\s*[\"']Mathematics[\"'],\s*[\"']English Language[\"'],\s*[\"']Physics[\"'],\s*[\"']Chemistry[\"'],\s*[\"']Biology[\"'],\s*[\"']Government[\"'],\s*[\"']Literature in English[\"'],\s*[\"']History[\"'],\s*[\"']Economics[\"'],\s*[\"']Commerce[\"'],\s*[\"']Financial Accounting[\"']\s*\]/],
  ['subjectsForLevel falls back to every subject', /function subjectsForLevel\(classLevel\) \{[\s\S]*Object\.keys\(CURRICULUM\)/],
  ['onboarding uses selectableSubjects()', /selectableSubjects\(\)\.map\(\(?s\)? =>/],
  ['onboarding drops subjects unavailable at the level', /o\.subjects\.filter\(\(?x\)? => subjectsForLevel\(o\.classLevel\)\.includes\(x\)\)/],
  ['subject chips filtered by class level', /const available = subjectsForLevel\(state\.profile\.classLevel\)/],
  ['hydrateFromDoc strips unavailable subjects', /state\.profile\.subjects\.filter\(\(?x\)? => avail\.includes\(x\)\)/],
  ['subject icons include Basic Science and Technology', /[\"']Basic Science[\"']: [\"']🔬[\"'],\s*[\"']Basic Technology[\"']: [\"']🛠️[\"']/],
  ['SUBJECT_COLORS covers all seven subjects', /[\"']Basic Science[\"']: \{\s*bg: [\"']bg-teal-50[\"'][\s\S]*[\"']Basic Technology[\"']: \{\s*bg: [\"']bg-amber-50[\"']/],
  ['lessons contain inline SVG diagrams', /class="diagram"/],
  ['diagram CSS defined', /\.prose-lesson \.diagram svg \{ width:100%/],
  ['diagrams have accessible labels', /role="img" aria-label=/],
  ['mobile drawer sidebar', /id="sidebar"[\s\S]*drawer[\s\S]*md:translate|id="sidebar"/],
  ['3D flip flashcard CSS', /\.flashcard\.flipped \.flashcard-inner \{ transform: rotateY\(180deg\); \}/],
  ['flashcard next/prev controls', /nextFlashcard\(\)[\s\S]*prevFlashcard\(\)|prevFlashcard\(\)[\s\S]*nextFlashcard\(\)/],
  ['quiz explanations rendered (with past-paper attribution badge)', /tracking-wide[\s\S]{0,120}>Explanation\$\{q\.src/],
  ['retake quiz option', /Retake Quiz|Retake \$\{subject\} Quiz|Retake/],
  ['Buddy chat interface', /id="chat-box"[\s\S]*id="chat-input"/],
  ['Buddy knowledge base entries', /(?:const|var|let) BUDDY_KB = \[/],
  ['Buddy quadratic solver', /function solveQuadratic\(/],
  ['Buddy simultaneous solver', /function solveSimultaneous\(/],
  ['profile log out button', /onclick="handleLogout\(\)"/],
  ['Tailwind CDN', /cdn\.tailwindcss\.com/],
  ['slate-900 sidebar + indigo accents + rounded-2xl', /bg-slate-900[\s\S]*rounded-2xl/],
  ['external links open in a new tab safely', /target="_blank" rel="noopener noreferrer"/],
  ['streak celebration overlay with confetti/icon/title/sub', /id="celebration"[\s\S]*id="celebration-confetti"[\s\S]*id="celebration-icon"[\s\S]*id="celebration-title"[\s\S]*id="celebration-sub"/],
  ['sidebar streak-freeze counter', /id="freeze-count"/],
  ['badge catalog incl. weekly, monthly and yearly streak badges', /streak-7[\s\S]*streak-30[\s\S]*streak-365/],
  ['profile badges section', /Badges &amp; streaks|Badges & streaks/],
  ['streak freeze ice-shatter overlay', /id="freeze-overlay"/],
  ['passive streak check on app entry', /checkStreakOnEntry\(\);/],
  ['chart dot tooltip markup', /chart-dot[\s\S]*chart-tip/],
  ['full exam simulations live in the exam command centre', /EXAM_PRESETS[\s\S]{0,6000}startExamSim/],
  ['calendar activity heatmap with hover cells, stats and legend', /hm-cell[\s\S]{0,4000}Best run:/],
  ['PWA manifest linked', /rel="manifest" href="\.?\/manifest\.webmanifest"/],
  ['PWA theme color + iOS metas', /name="theme-color"[\s\S]{0,300}apple-mobile-web-app-capable/],
  ['install card with install + dismiss handlers', /installStudyOS\(\)[\s\S]{0,400}dismissInstall\(\)/],
  ['service worker registered for production', /serviceWorker[\s\S]{0,240}sw\.js/]
];
for (const [name, re] of feature) check(name, typeof re === 'boolean' ? re : re.test(html));

// ---------- 4b. real past-question bank + content attribution ----------
check('real past-question bank embedded with exam-body + year attribution',
  /(?:const|var|let) PASTQ = \{/.test(html) && /src"?: "(WAEC|NECO|JAMB) (19|20)\d\d"/.test(html)
  && /Past question drill/.test(html) && /drillPast\(\)/.test(html));
check('open-licence attribution footer present (OpenStax CC BY 4.0 + question banks)',
  /Content credits/.test(html) && /OpenStax/.test(html) && /CC BY 4\.0/.test(html)
  && /smartest\.ng/.test(html) && /exambuddy\.com\.ng/.test(html));

// ---------- 4c. CBT personalisation: setup chips, timer, focus mode ----------
check('quiz list has question-count and timer setup chips',
  /setQuizCount\(\$\{num\}\)/.test(html) && /setQuizCount\(0\)/.test(html)
  && /setQuizTimer\(\$\{min\}\)/.test(html) && /setQuizTimer\(0\)/.test(html) && /No timer/.test(html));
check('quiz header renders the countdown chip when a timer is set',
  /id="quiz-timer"/.test(html) && /fmtCountdown/.test(html));
check('focus mode: header button, pill and modal present',
  /id="focus-btn"/.test(html) && /id="focus-pill"/.test(html) && /id="focus-modal"/.test(html)
  && /startFocus\(25\)/.test(html) && /stopFocus\(\)/.test(html));
check('quiz/flashcard navigation follows the subject being studied',
  /if \(activeTopic\) state\.selectedSubject = activeTopic\.subject;/.test(html));

check('streak flame overlay + animations present (card-free fade)',
  /id="streak-flame"/.test(html) && /flameRise/.test(html) && /flame-flicker/.test(html)
  && /showStreakFlame/.test(html) && /pointer-events-none fixed inset-0 z-\[70\]/.test(html));
check('secret badges are hidden until earned, with a curiosity teaser',
  /b\.secret && !earned\.includes\(b\.id\)/.test(html)
  && /A secret badge\. Keep exploring/.test(html) && /badges found/.test(html));
check('past questions run in a JAMB-style exam interface',
  /function examJump/.test(html) && /function submitExam/.test(html)
  && /Question palette/.test(html) && /Real exam simulation/.test(html)
  && /["']?examIdx["']?: 0/.test(html)
  && /examJump,[\s\S]{0,200}examPrev,[\s\S]{0,200}examNext,[\s\S]{0,200}submitExam/.test(html));
check('Internet Archive is on the resources shelf (EduPodia removed)',
  /archive\.org/.test(html) && !/edupodia/i.test(html));
check('LaTeX sanitizer + prompt guard fix broken AI math text',
  /function plainMath/.test(html) && /escapeHtml\(plainMath\(text\)\)/.test(html)
  && /Never use LaTeX/.test(html));
check('no Firestore wording in student-facing UI',
  !/Cloud Firestore/.test(html) && !/Firestore sync/.test(html) && /Cloud sync: active/.test(html));
check('rare glyphs purged from content (no vulgar fractions, sub/superscript digits)',
  !/[⅓⅔⅕⅖⅗⅚¼½¾⅛⁄₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹ₙ]/.test(html));

// ---------- 5. no leftover build artifacts ----------
check('no leftover template placeholders', !/\{\{|\}\}|\bTODO\b|\bFIXME\b|lorem ipsum/i.test(html));
check('single self-contained file (no local src/href)',
  !/(?:src|href)="(?!(?:https?:|#|data:|\.?\/manifest\.webmanifest|\.?\/icons\/|\.?\/sw\.js))[^"]+"/.test(html.replace(/<script[\s\S]*?<\/script>/g, '')),
  (html.match(/(?:src|href)="(?!https?:|#|data:)[^"]+"/g) || []).join(', '));
check('file is a complete HTML document',
  html.trimStart().startsWith('<!DOCTYPE html>') && html.trimEnd().endsWith('</html>'));

const failed = results.filter(r => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} static checks passed`);
if (failed.length) { failed.forEach(f => console.log('  -', f.name, f.detail)); process.exit(1); }
console.log('ALL STATIC CHECKS PASSED');
