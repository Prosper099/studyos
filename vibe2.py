# vibe2.py — make every JSS-reachable surface BECE-flavoured. RUN ONCE.
path = 'index.html'
s = open(path, encoding='utf-8').read()

def rep(old, new, n=1):
    global s
    assert s.count(old) == n, ('COUNT', old[:70], s.count(old))
    s = s.replace(old, new)

# G1: junior shelf
rep("""function juniorLink(r) {""",
"""const JUNIOR_COMMON = [
  { cat: 'Past questions', title: 'Myschool — BECE past questions', url: 'https://myschool.ng/classroom', note: 'Year-by-year junior school past questions with answers.' },
  { cat: 'Official body', title: 'WAEC Nigeria — BECE home', url: 'https://www.waecnigeria.org/', note: 'The body that runs the BECE: syllabus, timetables and results.' },
  { cat: 'Official body', title: 'NERDC — national curriculum', url: 'https://nerdc.org.ng/', note: 'The official K-12 curriculum: what every JSS class should cover.' },
  { cat: 'Textbook', title: 'Internet Archive — free books', url: 'https://archive.org/', note: 'Free digital library: junior secondary textbooks and revision guides.' }
];
function juniorLink(r) {""")
rep("const shelf = (SHELF[subject] || []).concat(SHELF._common);",
    "const shelf = (SHELF[subject] || []).concat(String(state.profile.classLevel || '').startsWith('JSS') ? JUNIOR_COMMON : SHELF._common);")

# G2: past-question card gated for JSS
rep("""${pastFor(subject).length ? `
          <article class="flex flex-col rounded-2xl border border-amber-200 bg-amber-50/60 p-5 shadow-card animate-fadeUp md:col-span-2">
            <h3 class="text-sm font-bold text-amber-900">📜 Real WAEC/JAMB past questions</h3>""",
"""${String(state.profile.classLevel || '').startsWith('JSS') ? `
          <article class="flex flex-col rounded-2xl border border-amber-200 bg-amber-50/60 p-5 shadow-card animate-fadeUp md:col-span-2">
            <h3 class="text-sm font-bold text-amber-900">📜 Real past-question drill</h3>
            <p class="mb-4 mt-1 flex-1 text-xs leading-relaxed text-amber-700"><strong>The real-paper drill unlocks from SS1</strong> — it drills actual WAEC, NECO and JAMB questions, and that is not your fight yet. Your BECE gym is right here: topic quizzes and flashcards with the same timer and instant marking.</p>
          </article>` : pastFor(subject).length ? `
          <article class="flex flex-col rounded-2xl border border-amber-200 bg-amber-50/60 p-5 shadow-card animate-fadeUp md:col-span-2">
            <h3 class="text-sm font-bold text-amber-900">📜 Real WAEC/JAMB past questions</h3>""")
# (nested ternary closes with the original single brace — no change needed)

# G3: CBT pool skips senior past questions for JSS class
rep("""    (pastFor(sub) || []).forEach((q, i) => pool.push({ ...q, id: `cbt-${sub.slice(0, 3).toLowerCase()}-p${i}`, subject: sub, topic: 'Past questions' }));""",
"""    if (!String(p.classLevel || '').startsWith('JSS')) (pastFor(sub) || []).forEach((q, i) => pool.push({ ...q, id: `cbt-${sub.slice(0, 3).toLowerCase()}-p${i}`, subject: sub, topic: 'Past questions' }));""")

# G4: topic-quiz top-up skips senior past questions for JSS
rep("if (pool.length < count) pool = pool.concat(shuffled(quizFor(subject).concat(pastFor(subject))));",
    "if (pool.length < count) pool = pool.concat(shuffled(quizFor(subject).concat(String(state.profile.classLevel || '').startsWith('JSS') ? [] : pastFor(subject))));")

# G5: Buddy never serves senior strategy articles to JSS
rep("  const scored = BUDDY_KB.map(entry => {",
"""  const isJSS = String(state.profile.classLevel || '').startsWith('JSS');
  const scored = BUDDY_KB.filter(e => !isJSS || !/JAMB|WAEC/.test(e.title)).map(entry => {""")

# G6: guard startPastQuiz
rep("""function startPastQuiz() {""",
"""function startPastQuiz() {
  if (String(state.profile.classLevel || '').startsWith('JSS')) { toast('The real-paper drill opens from SS1 — topic quizzes are your gym for now!'); return; }""")

open(path, 'w', encoding='utf-8').write(s)
print('vibe2 applied')
