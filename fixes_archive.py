"""Fix broken characters (LaTeX from AI + rare Unicode glyphs), strip Firestore
wording from student-facing UI, swap EduPodia shelf entry for archive.org."""
import re

PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()
n = 0

def rep(old, new, cnt=1):
    global s, n
    assert s.count(old) >= 1, 'ANCHOR MISSING: ' + old[:80]
    s = s.replace(old, new, cnt)
    n += 1

# ---------- 1. LaTeX sanitizer for Buddy answers (fixes "$\frac{..}$" showing raw) ----------
rep("""function mdToHtml(text) {
  let html = escapeHtml(text);""",
"""/* Gemini sometimes answers with raw LaTeX ($\\frac{1}{2}$, ^{2}, \\times…), which shows
   up as broken "fra$"-style junk on screen. Translate the common bits to plain text. */
function plainMath(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/\\frac\\s*\\{([^{}]*)\\}\\s*\\{([^{}]*)\\}/g, '($1)/($2)')
    .replace(/\\sqrt\\s*\\{([^{}]*)\\}/g, 'sqrt($1)')
    .replace(/\\sqrt\\s*([A-Za-z0-9])/g, 'sqrt($1)')
    .replace(/([_^])\\s*\\{([^{}]*)\\}/g, '$1$2')
    .replace(/\\times/g, '×').replace(/\\div/g, '÷').replace(/\\pm/g, '+/-')
    .replace(/\\cdot/g, '·').replace(/\\le(?:q)?/g, '<=').replace(/\\ge(?:q)?/g, '>=')
    .replace(/\\ne(?:q)?/g, '!=').replace(/\\approx/g, '~=')
    .replace(/\\pi/g, 'π').replace(/\\theta/g, 'θ').replace(/\\infty/g, 'infinity')
    .replace(/\\left|\\right/g, '')
    .replace(/\\\\[a-zA-Z]+/g, '')
    .replace(/\\\\\\(|\\\\\\)|\\\\\\[|\\\\\\]/g, '')
    .replace(/\\$/g, '');
}

function mdToHtml(text) {
  let html = escapeHtml(plainMath(text));""")

# ---------- 2. Gemini prompt: forbid LaTeX outright ----------
rep("""    'For genuine study questions, use this structure: a one-sentence definition, the key formula or rule, one worked example with numbers, and one common exam trap.',""",
"""    'For genuine study questions, use this structure: a one-sentence definition, the key formula or rule, one worked example with numbers, and one common exam trap.',
    'Never use LaTeX or code markup: no dollar signs, no backslash commands, no curly braces around powers. Write plain readable text like x^2, 3/4, sqrt(x), pi, × and ÷, and write naira amounts as N500.',""")

# ---------- 3. rare Unicode glyphs in content -> ASCII-safe equivalents ----------
SUP = str.maketrans('⁰¹²³⁴⁵⁶⁷⁸⁹', '0123456789')
SUB = str.maketrans('₀₁₂₃₄₅₆₇₈₉', '0123456789')
before = s
# superscript⁄subscript fractions first (³⁄₄ -> 3/4)
s = re.sub(r'([⁰¹²³⁴⁵⁶⁷⁸⁹])⁄([₀₁₂₃₄₅₆₇₈₉])',
           lambda m: m.group(1).translate(SUP) + '/' + m.group(2).translate(SUB), s)
# digit followed by subscript run -> "(base N)"  (1101₂ -> 1101(base 2))
s = re.sub(r'(?<=\d)([₀₁₂₃₄₅₆₇₈₉]+)', lambda m: '(base ' + m.group(1).translate(SUB) + ')', s)
# letter followed by subscript run -> plain digits  (H₂O -> H2O, x₁ -> x1)
s = re.sub(r'(?<=[A-Za-z])([₀₁₂₃₄₅₆₇₈₉]+)', lambda m: m.group(1).translate(SUB), s)
# leftovers
s = re.sub(r'([₀₁₂₃₄₅₆₇₈₉])', lambda m: m.group(1).translate(SUB), s)
s = re.sub(r'([⁰¹²³⁴⁵⁶⁷⁸⁹]+)', lambda m: '^' + m.group(1).translate(SUP), s)
for a, b in [('ₙ', '_n'), ('¼', '1/4'), ('½', '1/2'), ('¾', '3/4'), ('⅓', '1/3'),
             ('⅔', '2/3'), ('⅕', '1/5'), ('⅖', '2/5'), ('⅗', '3/5'), ('⅚', '5/6'),
             ('⅛', '1/8'), ('⁄', '/'), ('−', '-'), ('≤', '<='), ('≥', '>='),
             ('≠', '!='), ('≈', '~='), ('∑', 'Σ')]:
    s = s.replace(a, b)
print('glyph sweep: changed', sum(1 for x, y in zip(before, s) if x != y), 'chars approx')

# ---------- 4. Firestore/Firebase wording -> neutral cloud language ----------
rep('Nothing is stored on our side — data lives in your own Firebase project.',
    'Nothing is stored on our side — your data stays in your own private cloud account.')
rep('StudyOS · Google Sign-In + Cloud Firestore',
    'StudyOS · Google Sign-In + Secure Cloud Sync')
rep('>Firestore sync: active</p>', '>Cloud sync: active</p>')
rep("'Firestore sync: active');", "'Cloud sync: active');")
rep("'Your details and Firestore sync'", "'Your details and cloud sync'")
rep('Firestore is not enabled on this project yet. Create a database in the Firebase console, then reopen the app. Until then your progress is saved in this browser only.',
    'Cloud storage is not connected yet. Your progress is saved in this browser only and will sync as soon as it is connected.')
rep('Firestore blocked the write — publish the security rules from the ⚙️ setup guide. Progress is saved in this browser for now.',
    'The cloud rejected the save. Progress is kept safely in this browser for now.')
rep('Cannot reach Firestore right now (offline?). Progress is saved in this browser and will sync when you reconnect.',
    'Cannot reach the cloud right now (offline?). Progress is saved in this browser and will sync when you reconnect.')
rep('Firestore is unavailable — progress is saved in this browser only.',
    'Cloud sync is unavailable — progress is saved in this browser only.')
rep('Check what is stored in your Firestore document.',
    'Check what is stored in your cloud profile.')
rep('Stored in your Firestore document.', 'Stored privately in your own account.')
rep("'Cloud Firestore → users/' + (state.uid || '{uid}')", "'Your private cloud account'")
rep('Add your Firebase config to sync across devices.',
    'Connect cloud sync to follow you across devices.')
rep('Your preferences, streak and quiz results write to Cloud Firestore on every change, so they follow you to any device.',
    'Your preferences, streak and quiz results sync to the cloud on every change, so they follow you to any device.')
rep("""          <button type="button" onclick="openSetup()" class="mt-3 text-xs font-bold text-indigo-600 hover:underline">⚙️ Firebase setup instructions</button>\n""", '')
rep('Firebase is not connected yet — add your project keys, or explore in <b>Demo Mode</b> below.',
    'Cloud sync is not connected yet — connect your project, or explore in <b>Demo Mode</b> below.')
rep('   3. Cloud Firestore document: users/{uid}', '   3. Cloud document: users/{uid}')

# ---------- 5. archive.org replaces EduPodia on the shelf ----------
rep("""    { cat: 'Textbook', title: 'EduPodia — lesson notes & schemes of work', url: 'https://edupodia.com/', note: 'NERDC-aligned JSS1–SS3 lesson notes and schemes of work, term by term (editable Word downloads).' }""",
"""    { cat: 'Textbook', title: 'Internet Archive — free books & past questions', url: 'https://archive.org/', note: 'Free digital library: full scanned textbooks, revision guides and past question papers you can read or borrow online.' }""")

# ---------- 6. expose plainMath for the test suite ----------
rep('scoreKb, buddyReply, solveQuadratic, solveSimultaneous, extractCoeffs,',
    'scoreKb, buddyReply, plainMath, solveQuadratic, solveSimultaneous, extractCoeffs,')

open(PATH, 'w', encoding='utf-8').write(s)
print(f'Fixes applied: {n} anchored replacements + glyph sweep')
left = [l for l in s.split('\n') if 'Firestore' in l]
print('remaining Firestore mentions (should be setup-guide/comments/console only):', len(left))
for l in left: print('   ', l.strip()[:100])
