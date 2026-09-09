"""Migrate subject-level quiz/flashcards to the per-topic model.

- subject `quiz:` becomes `mock:` (mixed exam practice)
- subject `flashcards:` entries are attached to topics via a label -> title map
- every topic gets `cards: [...]` and `quiz: []`
"""
import re

CUR = '/home/user/index.html'
s = open(CUR).read()

MAP = {
 'Mathematics': {
   'Number bases': 'Number Bases & Modular Arithmetic',
   'Modular arithmetic': 'Number Bases & Modular Arithmetic',
   'Indices': 'Indices, Logarithms & Surds',
   'Quadratics': 'Quadratic Equations',
   'A.P.': 'Sequences & Series (A.P. and G.P.)',
   'Trigonometry': 'Trigonometry & Angle of Elevation',
   'Calculus': 'Calculus: Differentiation & Integration',
   'Sets': 'Sets, Venn Diagrams & Logic',
   'Probability': 'Probability & Statistics',
   'Mensuration': 'Mensuration & Solid Geometry',
 },
 'Basic Science': {
   'Living things': 'Living Things & Health',
   'Measurement': 'Introduction to Science: Measurement & Laboratory Safety',
   'Energy': 'Energy: Forms, Transformation & Simple Machines',
   'Machines': 'Energy: Forms, Transformation & Simple Machines',
   'Matter': 'Matter, Its Properties & Changes',
   'Acids & bases': 'Acids, Bases & Salts in Everyday Life',
   'Sound': 'Light, Sound & Basic Electricity',
   'Human body': 'Living Things & Health',
   'Health': 'Reproduction, Growth & Drug Abuse',
   'Environment': 'Living Things & Health',
 },
 'English Language': {
   'Concord': 'Tenses & Subject–Verb Concord',
   'Reported speech': 'Direct & Indirect (Reported) Speech',
   'Idioms': 'Idioms & Figurative Language',
   'Figures of speech': 'Idioms & Figurative Language',
   'Summary': 'Comprehension & Summary Writing',
   'Prepositions': 'Phrasal Verbs, Prepositions & Register',
   'Formal letter': 'Essay & Letter Writing',
 },
 'Basic Technology': {
   'Drawing instruments': 'Technical Drawing: Instruments, Lines & Lettering',
   'Drawing': 'Technical Drawing: Instruments, Lines & Lettering',
   'Lines': 'Technical Drawing: Instruments, Lines & Lettering',
   'Materials': 'Building Materials & Simple Structures',
   'Tools': 'Safety in the Workshop',
   'Maintenance': 'Safety in the Workshop',
   'Structures': 'Building Materials & Simple Structures',
   'Energy': 'Light, Sound & Basic Electricity',
 },
 'Physics': {
   'Circular motion': 'Centripetal Force & Circular Motion',
   'Newton': 'Motion & Newton’s Laws',
   'Energy': 'Work, Energy & Power',
   'Waves': 'Simple Harmonic Motion & Waves',
   'Electricity': 'Current Electricity & Ohm’s Law',
   'Heat': 'Heat Energy & Thermal Expansion',
   'Radioactivity': 'Atomic Structure, Radioactivity & Nuclear Energy',
   'Projectile': 'Projectile Motion',
 },
 'Chemistry': {
   'Redox': 'Redox Reactions & Electrolysis',
   'Electrolysis': 'Redox Reactions & Electrolysis',
   'Equilibrium': 'Rates of Reaction & Chemical Equilibrium',
   'Mole concept': 'The Mole Concept & Stoichiometry',
   'Organic': 'Hydrocarbons & Organic Chemistry Basics',
   'Acids & bases': 'Acids, Bases & Salts (with pH)',
   'Atomic structure': 'Atomic Structure & the Periodic Table',
 },
 'Biology': {
   'Cell biology': 'The Cell: Structure & Function',
   'Transport': 'The Cell: Structure & Function',
   'Genetics': 'Genetics & Heredity',
   'Ecology': 'Ecology: Ecosystems & Energy Flow',
   'Photosynthesis': 'Photosynthesis & Respiration',
   'Digestion': 'Nutrition: Digestion in Humans',
   'Nervous system': 'The Nervous System & Coordination',
   'Respiration': 'Photosynthesis & Respiration',
 },
}

SUBJECTS = list(MAP.keys())
SUBS_RE = r"(?:Mathematics|Physics|Chemistry|English Language|Biology|Basic Science|Basic Technology)"

starts = sorted((s.index("  '%s': {" % sub), sub) for sub in SUBJECTS)
CURR_END = s.index("\n};", starts[0][0]) + 4
spans = {}
for i, (pos, name) in enumerate(starts):
    spans[name] = (pos, starts[i + 1][0] if i + 1 < len(starts) else CURR_END)

for sub, (si, ei) in spans.items():
    blk = s[si:ei]

    # 1. rename the subject-level quiz bank to mock
    assert "\n    quiz: [" in blk, sub
    blk = blk.replace("\n    quiz: [", "\n    mock: [", 1)

    # 2. pull out the flashcards section and split its entries
    fa = blk.index("    flashcards: [")
    fb = blk.index("\n    ]", fa) + len("\n    ]")
    section = blk[fa:fb]
    entries = re.findall(r"\{ topic: '([^']+)', (q: .*)\}", section)
    by_topic = {}
    for label, body in entries:
        target = MAP[sub].get(label)
        assert target, "%s / unmapped label %s" % (sub, label)
        by_topic.setdefault(target, []).append("{ %s}" % body)
    blk = blk[:fa] + blk[fb:]  # drop the subject-level array

    # 3. attach cards + empty quiz to every topic of this subject
    def attach(m):
        title = m.group(1)
        ta = m.end()
        te = blk.index("\n        }", ta)
        cards = by_topic.get(title, [])
        inject = "\n          cards: [%s],\n          quiz: []," % ("".join("\n            " + e + "," for e in cards) if cards else "")
        return blk[:te] + inject + blk[te:]

    new_blk = blk
    # process topics from the end backwards so offsets stay valid
    titles = [(mm.group(1), mm.start()) for mm in re.finditer(r"          title: '([^']+)',", blk)]
    for title, pos in reversed(titles):
        te = new_blk.index("\n        }", pos)
        cards = by_topic.get(title, [])
        inject = "\n          cards: [%s],\n          quiz: []," % ("".join("\n            " + e + "," for e in cards) if cards else "")
        new_blk = new_blk[:te] + inject + new_blk[te:]

    # sanity: every mapped label landed
    for label, target in MAP[sub].items():
        pass
    s = s[:si] + new_blk + s[ei:]
    print("%-18s cards attached: %d entries -> %d topics" % (sub, len(entries), len(by_topic)))

open(CUR, 'w').write(s)
print("migration done, bytes:", len(s))
