"""JSS quiz upgrade B: English Language (6 topics) + Basic Technology (7 topics), 10 -> 15 Qs."""
import re
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()
def esc(t): return t.replace("\\", "\\\\").replace("'", "\\'")

def Q(q, o, c, e):
    return "{ q: '%s', options: ['%s', '%s', '%s', '%s'], correct: %d, exp: '%s' }," % (
        esc(q), esc(o[0]), esc(o[1]), esc(o[2]), esc(o[3]), c, esc(e))

QUIZ = {
 'Sentence Structure & Composition': [
  ("Identify the subject of the sentence: 'The naughty boys broke the window.'", ['The naughty boys', 'broke', 'the window', 'naughty'], 0, 'The subject is who or what the sentence is about — ' + "'The naughty boys'; 'broke the window' is the predicate."),
  ("What type of sentence is 'Close the door!'?", ['Imperative (command)', 'Declarative (statement)', 'Interrogative (question)', 'Exclamatory'], 0, 'It gives a command or makes a request, so it is imperative — even though the subject ' + "'you' is understood, not written."),
  ("Choose the best conjunction: 'She was tired ___ she kept working.'", ['but', 'so', 'because', 'or'], 0, "'but' joins contrasting ideas — she was tired, YET she kept working."),
  ("Which of these is a complete sentence?", ['The dog ran fast.', 'Running fast.', 'Because it was late.', 'The tall man in black.'], 0, 'A complete sentence needs a subject and a verb expressing a full thought: ' + "'The dog ran fast.' The others are fragments."),
  ("What end punctuation does 'What a lovely dress' need?", ['An exclamation mark', 'A question mark', 'A comma', 'No punctuation'], 0, 'It expresses strong feeling (admiration), so it ends with an exclamation mark: ' + "'What a lovely dress!' It is not a question."),
 ],
 'Oral English: Vowels, Consonants & Stress': [
  ("Which pair of words differs by a long and a short vowel?", ['sheep / ship', 'pat / bat', 'fan / van', 'cot / cut'], 0, "'sheep' has the long /i:/ and 'ship' the short /I/ — the other pairs differ by consonant sounds."),
  ("Which word contains a silent letter?", ['island', 'ideal', 'issue', 'item'], 0, 'In "island" the s is silent (it sounds like "eye-land"); in the other three every letter is pronounced.'),
  ("In 'PHOtograph' and 'phoTOGraphy', what changes?", ['The position of the word stress', 'The number of letters', 'The spelling of the vowels', 'Nothing changes'], 0, "Adding the suffix moves the stress: PHO-to-graph but pho-TO-gra-phy — wrong stress can make a word unrecognisable."),
  ("The word 'think' begins with which sound?", ['/θ/ (voiceless th)', '/t/', '/f/', '/ð/ (voiced th)'], 0, "'think' starts with the voiceless /θ/ of 'thin' — /ð/ is the voiced sound in 'this' and 'that'."),
  ("What intonation do yes/no questions usually take?", ['A rising tone', 'A falling tone', 'A flat tone', 'No tone'], 0, "'Are you ready?' rises at the end; wh-questions and statements usually fall."),
 ],
 'Comprehension & Summary Basics': [
  ("What does 'scanning' a passage mean?", ['Searching quickly for a specific detail', 'Reading every word slowly', 'Reading only the title', 'Copying the passage'], 0, 'Scanning hunts for one specific piece of information — a name, date or figure — while skimming gives the general idea.'),
  ("When writing a summary, should you copy sentences from the passage?", ['No — use your own words', 'Yes, copying is safest', 'Only long sentences', 'Only the first sentence'], 0, "Copying whole sentences loses marks; the examiner tests whether you understood and can restate the ideas briefly."),
  ("To guess the meaning of a new word in a passage, you should use...", ['context clues around the word', 'a guess based on its first letter', 'its meaning in another language', 'the number of letters it has'], 0, 'The surrounding sentence — examples, contrasts and the general sense — reveals what the word must mean.'),
  ("A question asks what a word means 'as used in the passage'. What does this demand?", ['The meaning that fits that context', 'Every dictionary meaning', 'The opposite meaning', 'The spelling'], 0, "Many words have several meanings; you must choose the one that works in THAT sentence — test it by substituting it back."),
  ("Name two things to leave out of a summary.", ['Examples and repetition', 'Main ideas', 'The topic', 'Key conclusions'], 0, "Summaries keep the main points only — examples, illustrations, statistics used as evidence and repetitions are cut."),
 ],
 'Parts of Speech': [
  ("In 'The tired teacher slept', what part of speech is 'tired'?", ['An adjective', 'A verb', 'An adverb', 'A noun'], 0, "'tired' describes the noun 'teacher', so it is an adjective — don't be fooled: it looks like a past verb here but functions as a describing word."),
  ("What part of speech is 'carefully' in 'She wrote carefully'?", ['An adverb', 'An adjective', 'A preposition', 'A conjunction'], 0, "'carefully' tells HOW she wrote — adverbs modify verbs, and many end in -ly."),
  ("Which part of speech is 'and' in 'bread and butter'?", ['A conjunction', 'A preposition', 'An interjection', 'An adverb'], 0, "'and' joins words of equal rank, so it is a conjunction — other examples: but, or, because."),
  ("In 'Wow! We won the match!', the word 'Wow!' is a(n)...", ['interjection', 'exclamation mark', 'adjective', 'adverb'], 0, "An interjection expresses sudden feeling and stands apart from the sentence — 'Wow!', 'Oh!', 'Alas!'"),
  ("Identify the pronoun in 'Ada lost her pen.'", ['her', 'Ada', 'lost', 'pen'], 0, "'her' stands in place of a noun (Ada's), so it is a pronoun — 'Ada' itself is a proper noun."),
 ],
 'Verb Tenses Made Simple': [
  ("Choose the correct form: 'Look! The bus ___.'", ['is coming', 'comes', 'came', 'will come'], 0, "'Look!' signals an action happening NOW, so the present continuous 'is coming' is correct."),
  ("Give the past tense of 'buy' and 'teach'.", ['bought and taught', 'buyed and teached', 'bought and teachted', 'bought and taught-ed'], 0, "Both are irregular verbs: buy-bought-bought, teach-taught-taught — they do not take -ed."),
  ("Complete: 'I ___ here since 2019.'", ['have lived', 'lived', 'live', 'was living'], 0, "'since' links the past to the present, which requires the present perfect: 'I have lived here since 2019.'"),
  ("Complete: 'While we ___ home, it ___ to rain.'", ['were walking; started', 'walked; was starting', 'are walking; starts', 'walk; started'], 0, "The longer background action takes the past continuous ('were walking') and the interrupting action the simple past ('started')."),
  ("What is the simple present of 'go' with the subject 'she'?", ['goes', 'go', 'going', 'gone'], 0, "Third-person singular subjects (he, she, it) add -s/-es in the simple present: 'She goes to school every day.'"),
 ],
 'Summary Writing & précis': [
  ("How does a précis differ from an ordinary summary?", ['It keeps the original structure and proportion in a fixed shorter length', 'It adds new examples', 'It is always longer', 'It is written in verse'], 0, "A précis condenses the passage to a set fraction of its length while keeping the order and balance of the original ideas."),
  ("In what person should a précis normally be written?", ['Third person', 'First person', 'Second person', 'Any person, mixed freely'], 0, "You report the writer's ideas from the outside ('the writer argues...') — no 'I think' and no mixing of viewpoints."),
  ("If told to 'summarise in three sentences', how should you present four points?", ['Select the three MAIN points, one per sentence', 'Cram four points into three sentences', 'Write four sentences anyway', 'Write one long sentence'], 0, "Follow the instruction exactly: choose the three most important points and give each one clear, grammatical sentence."),
  ("Which two items should be removed when condensing a passage?", ['Examples and repetitions', 'Main claims', 'Key conclusions', 'The central theme'], 0, "Examples, illustrations, statistics-as-evidence and repeated statements are dropped; claims, conclusions and the theme stay."),
  ("Why must you count your words in a summary answer?", ['Exceeding the stated length is penalised', 'It makes the summary prettier', 'Longer summaries always score more', 'It is not important'], 0, "Examiners mark within limits — a summary over the required words loses marks even when the content is right."),
 ],
 'Technology in Everyday Life': [
  ("Technology is best defined as...", ['the application of scientific knowledge and tools to solve problems', 'the study of living things', 'only computers and phones', 'the building of roads'], 0, "Technology applies science, skills and tools to meet human needs — from a matchet to a satellite."),
  ("A local hand loom for weaving aso-oke is an example of...", ['indigenous technology', 'developed technology', 'information technology', 'space technology'], 0, "Indigenous (local) technology uses traditional tools and methods developed within the community."),
  ("What is the FIRST step of the design/technological process?", ['Identify the need or problem', 'Make the product', 'Test the product', 'Advertise it'], 0, "Every design starts by identifying a need or problem, then gathering information, planning, making, testing and improving."),
  ("Name two disadvantages of technology.", ['Pollution and unemployment', 'Faster work and comfort', 'Better medicine and travel', 'Cheaper food and clothing'], 0, "Factories and vehicles pollute, machines replace some jobs, and misuse brings accidents — every advance has a cost to manage."),
  ("Give two ways technology has improved agriculture.", ['Tractors and improved seeds', 'Hand hoes only', 'Storing grain in pots', 'Waiting for rain alone'], 0, "Tractors plough faster, improved seeds and fertilisers raise yields, and irrigation supplies water in the dry season."),
 ],
 'Common Tools & Their Uses': [
  ("Which tool holds work firmly on the bench while you saw or file it?", ['Bench vice', 'Hammer', 'Chisel', 'Spanner'], 0, "A bench vice clamps the work to the bench, leaving both hands free and preventing slips."),
  ("Which saw is used for cutting metal?", ['Hacksaw', 'Cross-cut saw', 'Rip saw', 'Tenon saw'], 0, "The hacksaw has a fine, hard blade for metal; the others are wood saws."),
  ("What does a try square check?", ['Whether corners and edges are at right angles', 'The length of a board', 'The weight of a tool', 'The sharpness of a blade'], 0, "The try square tests squareness (90 deg) and marks straight lines across a workpiece."),
  ("State two ways of caring for hand tools.", ['Cleaning, oiling and storing them properly', 'Leaving them outside', 'Using them for any job', 'Throwing them in a pile'], 0, "Clean tools after use, oil metal parts against rust, and store them safely — cared-for tools last for years."),
  ("Which screwdriver fits a star-shaped screw head?", ['Phillips screwdriver', 'Flat-head screwdriver', 'Try square', 'File'], 0, "The Phillips (star/cross-head) screwdriver matches star-headed screws; the flat-head matches single-slot screws."),
 ],
 'Technical Drawing: Instruments, Lines & Lettering': [
  ("Which instrument is used to draw horizontal lines?", ['T-square', 'Divider', 'Compass', 'Protractor'], 0, "The T-square slides along the left edge of the board to draw horizontal lines and to support set squares."),
  ("In technical drawing, hidden details are shown with...", ['short dashed lines', 'thick continuous lines', 'zigzag lines', 'dotted circles'], 0, "Line convention: thick continuous = visible outlines; short dashes = hidden edges; long-short-long dashes = centre lines."),
  ("Which set square has 30 deg and 60 deg angles?", ['The 30/60 set square', 'The 45 set square', 'The T-square', 'The protractor'], 0, "Set squares come as 45-45-90 and 30-60-90; combining them gives 15 deg and 75 deg lines too."),
  ("Name two items of information found in a title block.", ['The drawing title and the scale', 'The cost of the paper', 'The colour of the board', 'The weather'], 0, "The title block carries the title, draughtsman's name, date, scale, drawing number and projection symbol."),
  ("What does the pencil grade HB mean?", ['Medium hardness — between H and B', 'Very hard and light', 'Very soft and black', 'Used only for colouring'], 0, "H pencils are hard (light construction lines), B are soft (dark outlines), and HB sits in the middle for general work."),
 ],
 'Safety in the Workshop': [
  ("Which PPE protects the eyes and the feet?", ['Safety goggles and safety boots', 'Apron and gloves', 'Nose mask and cap', 'Ear muffs and apron'], 0, "Goggles shield the eyes from flying chips; strong boots protect feet from falling tools and materials."),
  ("Which extinguisher should be used on an electrical fire?", ['CO2 or dry powder — never water', 'Water hose', 'Foam only', 'Sand only'], 0, "Water conducts electricity and can electrocute you; CO2 or dry-powder extinguishers put out electrical fires safely."),
  ("Why is loose clothing forbidden near rotating machines?", ['It can be caught and pulled into moving parts', 'It looks untidy', 'It gets too hot', 'It hides tools'], 0, "Loose sleeves, ties or jewellery can be grabbed by rotating parts and drag the wearer in — wear fitted clothes and tie back long hair."),
  ("State two common causes of workshop accidents.", ['Carelessness and faulty tools', 'Wearing PPE', 'Good housekeeping', 'Following instructions'], 0, "Most accidents come from carelessness, horseplay, damaged tools, cluttered floors and rushing — all preventable."),
  ("What does 'good housekeeping' mean in the workshop?", ['Keeping the workplace clean, dry and organised', 'Painting the walls yearly', 'Buying new machines', 'Locking the workshop'], 0, "Sweeping sawdust, wiping oil spills and returning tools prevents slips, trips and tool damage — most accidents are housekeeping failures."),
 ],
 'Geometrical Construction & Plane Figures': [
  ("Which two instruments are needed to bisect an angle?", ['A pair of compasses and a ruler', 'A protractor and scissors', 'A T-square only', 'A divider and a hammer'], 0, "Arcs struck with the compasses locate points equidistant from both arms; the ruler joins them to the vertex."),
  ("Bisecting a 90 deg angle produces two angles of...", ['45 deg', '30 deg', '60 deg', '22.5 deg'], 0, "Bisection halves the angle: 90/2 = 45 deg — bisect again for 22.5 deg."),
  ("When constructing a regular hexagon in a circle, the compass is set to...", ['the radius of the circle', 'twice the radius', 'half the radius', 'any random width'], 0, "Stepping the radius round the circumference gives six equal arcs — the hexagon splits into six equilateral triangles."),
  ("Constructing a triangle from its three given side lengths is called...", ['SSS construction', 'SAS construction', 'AAA construction', 'RHS construction'], 0, "Side-Side-Side: arcs struck with the two shorter lengths from the base ends meet at the third vertex."),
  ("What is the diameter of a circle of radius 4.5 cm?", ['9 cm', '4.5 cm', '13.5 cm', '2.25 cm'], 0, "Diameter = 2 x radius = 2 x 4.5 = 9 cm — the diameter is always twice the radius."),
 ],
 'Building Materials & Simple Structures': [
  ("Which ingredients make concrete?", ['Cement, sand, gravel and water', 'Mud and straw only', 'Cement and water only', 'Sand and stones dry'], 0, "Cement binds, sand and gravel (aggregate) give bulk and strength, and water activates the cement's setting reaction."),
  ("Why are iron rods placed inside concrete?", ['To add tensile strength (reinforcement)', 'To make it heavier', 'To change its colour', 'To make it set slower'], 0, "Concrete is strong in compression but weak when stretched; the steel rods carry tension — that is reinforced concrete."),
  ("What is the function of a lintel?", ['To carry the wall load over a door or window opening', 'To hold the roof tiles', 'To drain rainwater', 'To decorate the wall'], 0, "Without a lintel the masonry above an opening would collapse into the gap."),
  ("Name two traditional Nigerian building materials.", ['Mud/adobe and thatch', 'Zinc and cement', 'Glass and steel', 'Plastic and foam'], 0, "Mud walls, thatch roofs, laterite and bamboo are local materials — cheap and cool, though less durable than modern ones."),
  ("Why is freshly cast concrete kept wet (cured) for several days?", ['So the cement hydrates fully and gains strength', 'To cool the building', 'To wash away the cement', 'To make it dry faster'], 0, "Cement hardens by reacting with water (hydration); drying too fast leaves it weak and cracked."),
 ],
 'Machines, Mechanisms & Maintenance': [
  ("The needle of a sewing machine shows which type of motion?", ['Reciprocating (up and down)', 'Rotary', 'Circular only', 'Random'], 0, "Reciprocating motion moves to and fro along a line; the pedal crank converts your foot's rocking into the wheel's rotation."),
  ("A small gear drives a larger gear. What happens to speed and turning force?", ['Speed decreases and turning force increases', 'Both increase', 'Speed increases and force decreases', 'Nothing changes'], 0, "The driven gear turns more slowly than the driver but with greater force — the trade-off behind gearboxes and bicycle gearing."),
  ("Name the three main types of maintenance.", ['Routine, preventive and breakdown', 'Daily, weekly, monthly', 'Painting, washing, oiling', 'Fast, slow, medium'], 0, "Routine/corrective fixes faults as they appear; preventive services machines on schedule before failure; breakdown repair happens after failure — the costliest."),
  ("Why must moving parts of machines be lubricated?", ['To reduce friction, wear and heat', 'To make them heavier', 'To change their colour', 'To slow them always'], 0, "Oil and grease form a slippery film so parts slide or roll smoothly — less friction means less wasted energy and longer life."),
  ("Name two machine fasteners.", ['Bolts and nuts; screws', 'Levers and pulleys', 'Belts and chains', 'Gears and cams'], 0, "Fasteners (bolts and nuts, screws, rivets, pins) hold machine parts together — levers, pulleys, belts and gears are mechanisms, not fasteners."),
 ],
}

ins = 0
for title, qs in QUIZ.items():
    assert len(qs) == 5, title
    m = re.findall(r"\n(\s*)title: '" + re.escape(title) + r"',", s)
    assert len(m) == 1, ('anchor', title, len(m))
    ind = m[0]
    pos = s.index("\n" + ind + "title: '" + title + "',")
    j = s.index('quiz: [', pos)
    k = s.index('\n', j) + 1
    body = ''.join(ind + '  ' + Q(*q) + '\n' for q in qs)
    s = s[:k] + body + s[k:]
    ins += len(qs)

open(PATH, 'w', encoding='utf-8').write(s)
print('JSS quiz B: inserted', ins, 'questions (English + Basic Tech)')
