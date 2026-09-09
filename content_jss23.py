"""Author 10-question quizzes + flashcards for every JSS2 & JSS3 topic (12 topics).

Splice rules (post-normalization canonical format):
  - empty quiz:  "          quiz: [],"  -> replaced with full array
  - empty cards: "          cards: []," -> replaced with full array
  - non-empty cards: append before the cards array's "\\n          ],"
Topic located by (subject block, title) to disambiguate duplicate titles
('Light, Sound & Basic Electricity' exists in both BS JSS3 and BT JSS3).
"""
import re

CUR = '/home/user/index.html'
s = open(CUR).read()

def esc(t):
    return t.replace('\\', '\\\\').replace("'", "\\'")

def fill(subject, title, quiz=None, cards=None):
    global s
    a = s.index("  '%s': {" % subject)
    nxt = [s.index("  '%s': {" % o, a + 5) for o in
           ['Mathematics', 'Basic Science', 'English Language', 'Basic Technology', 'Physics', 'Chemistry', 'Biology']
           if s.find("  '%s': {" % o, a + 5) > 0]
    b = min(nxt) if nxt else s.index('const LEVEL_CATALOGUE')
    blk = s[a:b]
    t = blk.index("          title: '%s'," % esc(title))
    te = blk.index("\n        }", t)
    seg = blk[t:te]
    if quiz:
        assert seg.count("          quiz: []") == 1, 'quiz slot: ' + title
        lines = []
        for (q, opts, c, exp) in quiz:
            assert len(opts) == 4 and 0 <= c <= 3
            o = ', '.join("'%s'" % esc(x) for x in opts)
            lines.append("            { q: '%s', options: [%s], correct: %d,\n              exp: '%s' }" % (esc(q), o, c, esc(exp)))
        seg = seg.replace("          quiz: []", "          quiz: [\n" + ",\n".join(lines) + "\n          ],")
    if cards:
        lines = ["            { q: '%s', a: '%s' }" % (esc(q), esc(a)) for (q, a) in cards]
        if "          cards: []," in seg:
            assert seg.count("          cards: [],") == 1
            seg = seg.replace("          cards: [],", "          cards: [\n" + ",\n".join(lines) + "\n          ],")
        else:
            ca = seg.index("          cards: [")
            close = seg.index("\n          ],", ca)
            seg = seg[:close] + ",\n" + ",\n".join(lines) + seg[close:]
    s = s[:a] + blk[:t] + seg + blk[te:] + s[b:]

# ---------------- Mathematics JSS2: Simple Equations & Directed Numbers ----------------
fill('Mathematics', 'Simple Equations & Directed Numbers', quiz=[
 ('Evaluate: -7 + 12', ['5', '-5', '19', '-19'], 0,
  'Different signs, so subtract the smaller from the larger and keep the sign of the larger: 12 - 7 = 5, positive.'),
 ('Evaluate: -6 - (-4)', ['-10', '-2', '2', '10'], 1,
  'Subtracting a negative is the same as adding: -6 - (-4) = -6 + 4 = -2.'),
 ('Evaluate: -3 x (-5)', ['-15', '15', '-8', '8'], 1,
  'A negative multiplied by a negative gives a positive, so the answer is 15.'),
 ('Evaluate: -20 / 4', ['-5', '5', '-16', '16'], 0,
  'A negative divided by a positive gives a negative: -20 / 4 = -5.'),
 ('Using BODMAS, evaluate 3 + 4 x 2.', ['14', '11', '10', '24'], 1,
  'Multiplication comes before addition: 4 x 2 = 8, then 3 + 8 = 11.'),
 ('Evaluate 12 - (3 + 5) / 2.', ['8', '10', '4', '2.5'], 0,
  'Brackets first: 3 + 5 = 8. Then division: 8 / 2 = 4. Finally 12 - 4 = 8.'),
 ('Solve: x + 9 = 15', ['6', '24', '-6', '9'], 0,
  'Subtract 9 from both sides to keep the equation balanced: x = 15 - 9 = 6.'),
 ('Solve: 3y = 21', ['7', '18', '63', '3'], 0,
  'Divide both sides by 3: y = 21 / 3 = 7.'),
 ('Solve: 2x - 5 = 11', ['8', '3', '13', '-8'], 0,
  'Undo the subtraction first: 2x = 16. Then undo the multiplication: x = 8.'),
 ('Solve: x/4 = 3', ['12', '7', '0.75', '4'], 0,
  'Multiply both sides by 4: x = 3 x 4 = 12.'),
], cards=[
 ('What are directed numbers?',
  'Numbers that carry a sign - positive (+) or negative (-). On a number line, values increase to the right and decrease to the left, so -3 is smaller than -1 and much smaller than 2.'),
 ('What does BODMAS stand for, and why does it matter?',
  'Brackets, Orders (powers and roots), Division and Multiplication, then Addition and Subtraction, working left to right. It fixes the order of operations so everybody gets the same answer.'),
 ('State the sign rules for multiplication and division.',
  'Same signs give a positive result (+ x + = +, - x - = +); different signs give a negative result (+ x - = -, - x + = -). Division follows exactly the same rules.'),
 ('What does it mean to "balance" an equation?',
  'Whatever you do to one side you must do to the other. Balancing keeps the two sides equal while you isolate the unknown letter.'),
 ('How do you solve a two-step equation such as 2x - 5 = 11?',
  'Undo the operations in reverse order: first add 5 to both sides (2x = 16), then divide both sides by 2 (x = 8). Undo addition/subtraction before multiplication/division.'),
])

# ---------------- Mathematics JSS3: Business Mathematics ----------------
fill('Mathematics', 'Business Mathematics: Profit, Loss, Discount & Interest', quiz=[
 ('A trader buys a bag of rice for N800 and sells it for N1,000. What is her percentage profit?', ['20%', '25%', '80%', '125%'], 1,
  'Profit = N200. Percentage profit is always on the cost price: 200/800 x 100 = 25%.'),
 ('A phone case costs N500 to make. At 10% profit, what is the selling price?', ['N450', 'N505', 'N550', 'N600'], 2,
  '10% of N500 = N50, so selling price = 500 + 50 = N550.'),
 ('A pair of shoes bought for N600 is sold for N450. What is the percentage loss?', ['15%', '20%', '25%', '33%'], 2,
  'Loss = N150, and percentage loss is on the cost price: 150/600 x 100 = 25%.'),
 ('A shirt marked N2,000 is sold at 15% discount. How much does the buyer pay?', ['N300', 'N1,700', 'N1,850', 'N1,300'], 1,
  'Discount = 15% of 2,000 = N300. Amount paid = 2,000 - 300 = N1,700.'),
 ('A salesgirl earns 5% commission on N40,000 worth of sales. How much is her commission?', ['N2,000', 'N5,000', 'N8,000', 'N400'], 0,
  'Commission = 5/100 x 40,000 = N2,000.'),
 ('Find the simple interest on N5,000 at 4% per annum for 3 years.', ['N600', 'N200', 'N1,200', 'N400'], 0,
  'I = Prt/100 = (5,000 x 4 x 3)/100 = N600.'),
 ('In the formula I = Prt/100, what does t stand for?', ['the total amount', 'time in years', 'the principal', 'the rate per annum'], 1,
  'P is the principal, r the rate per year, and t the time in years - all three must use matching units.'),
 ('What total amount is due after investing N2,000 at 5% per annum simple interest for 2 years?', ['N2,100', 'N2,200', 'N2,050', 'N4,000'], 1,
  'Interest = (2,000 x 5 x 2)/100 = N200. Amount = principal + interest = N2,200.'),
 ('Why is compound interest greater than simple interest over the same period?',
  ['It always uses a higher rate', 'Interest is added to the principal, so future interest earns interest', 'It is calculated monthly', 'It ignores the principal'], 1,
  'In compound interest each period\'s interest joins the principal, so the next period earns interest on interest - the amount grows faster.'),
 ('Find the compound interest on N1,000 at 10% per annum for 2 years.', ['N100', 'N200', 'N210', 'N221'], 2,
  'Year 1: 1,000 becomes 1,100. Year 2: 10% of 1,100 = 110, giving 1,210. C.I. = 1,210 - 1,000 = N210 (simple interest would be N200).'),
], cards=[
 ('How is percentage profit calculated?',
  'Profit / cost price x 100. The base is always the cost price, never the selling price - and percentage loss works exactly the same way.'),
 ('How do you quickly find a sale price after a discount?',
  'Multiply the marked price by (100 - discount%)/100. A 15% discount, for example, means paying 85% of the marked price.'),
 ('State the simple interest formula and what each letter means.',
  'I = Prt/100, where P = principal (the money borrowed or saved), r = rate of interest per year, t = time in years. Total amount = P + I.'),
 ('What is the difference between simple and compound interest?',
  'Simple interest is charged on the original principal only, every year. Compound interest is charged on the principal plus all interest added so far, so it grows faster - "interest on interest".'),
 ('What is commission?',
  'A percentage of the value of sales paid to the person who made the sale. For example, 5% commission on N40,000 of sales is N2,000.'),
])

# ---------------- English Language JSS2: Verb Tenses Made Simple ----------------
fill('English Language', 'Verb Tenses Made Simple', quiz=[
 ('Which sentence is in the simple present tense?',
  ['She reads every night.', 'She is reading now.', 'She has read three books.', 'She read it yesterday.'], 0,
  'The simple present describes habits and general truths - "every night" is the classic signal word.'),
 ('"Look! The baby ___ towards the gate." Choose the correct form.', ['crawls', 'is crawling', 'has crawled', 'crawled'], 1,
  '"Look!" shows the action is happening right now, which needs the present continuous: is crawling.'),
 ('Complete: "I ___ in Lagos since 2019."', ['live', 'lived', 'have lived', 'am living'], 2,
  '"Since" links a past starting point to the present - the job of the present perfect: have lived.'),
 ('Which sentence is correct?',
  ['I have seen him yesterday.', 'I saw him yesterday.', 'I have see him yesterday.', 'I am seeing him yesterday.'], 1,
  'The present perfect never goes with a definite past time like "yesterday" - use the simple past: I saw him yesterday.'),
 ('Complete: "While we ___, the lights ___ off."',
  ['ate / were going', 'were eating / went', 'eat / go', 'had eaten / had gone'], 1,
  'A longer action in progress (past continuous: were eating) is interrupted by a shorter one (simple past: went).'),
 ('"By the time the doctor arrived, the patient ___."', ['died', 'has died', 'had died', 'dies'], 2,
  'Of two past actions, the earlier one takes the past perfect: the patient had died before the doctor arrived.'),
 ('Which word signals the present perfect tense?', ['yesterday', 'at the moment', 'already', 'last week'], 2,
  'already, yet, just, since, for, ever and never all signal the present perfect.'),
 ('Choose the correct sentence.',
  ['I am knowing the answer.', 'She is wanting a drink.', 'He goes to school early.', 'He go to school early.'], 2,
  'know and want are state verbs - no continuous forms - and the third person singular takes -s: he goes.'),
 ('Complete: "She ___ her aunt last Sunday."', ['visits', 'visited', 'has visited', 'is visiting'], 1,
  '"Last Sunday" is a finished past time, so the simple past is required: visited.'),
 ('Complete correctly: "He said that he ___ tired."', ['is', 'was', 'has been', 'will be'], 1,
  'When the main verb is past (said), the subordinate verb normally shifts to a past form too - sequence of tenses.'),
], cards=[
 ('What are the signal words for the present perfect?',
  'already, yet, just, since, for, ever, never. They show a past action with present relevance: "She has read three books (so far)."'),
 ('When do you use the past continuous?',
  'For an action in progress in the past, often interrupted by a shorter action: "While we were eating, the lights went off." Signal words: while, when.'),
 ('Why is "I have seen him yesterday" wrong?',
  'The present perfect cannot be used with a definite past time. With "yesterday" you must use the simple past: "I saw him yesterday."'),
 ('Which verbs are not normally used in continuous forms?',
  'State verbs such as know, want, like and believe. Say "I know" and "she wants", never "I am knowing" or "she is wanting".'),
 ('What is sequence of tenses?',
  'When the main verb is in the past, the subordinate verb normally shifts to a past form too: "He said that he was tired", not "He said that he is tired".'),
])

# ---------------- English Language JSS3: Summary Writing & precis ----------------
fill('English Language', 'Summary Writing & précis', quiz=[
 ('What is the single biggest loss of marks in summary questions?',
  ['writing too briefly', 'lifting whole sentences from the passage', 'using simple vocabulary', 'writing in your own words'], 1,
  'Examiners are instructed to ignore copied material - a lifted sentence scores zero even if it contains the right point.'),
 ('According to the five-step method, what should you do first?',
  ['Read the passage twice', 'Underline the topic sentences', 'Read the question and note the exact instruction', 'Draft the answer'], 2,
  'The instruction fixes how many sentences or words you must write, so read it before you touch the passage.'),
 ('Which of these should be LEFT OUT of a summary?',
  ['the main point of each paragraph', 'examples and illustrations', 'stated causes and results', 'technical terms with no simpler equivalent'], 1,
  'Examples support a point but are not the point. Repetition, quotations, statistics and your own opinion are left out too.'),
 ('A summary answer should be written...',
  ['in the writer\'s exact words', 'in your own words', 'as a list of quotations', 'starting with "In this passage the writer says..."'], 1,
  'Express the points in your own words; keep only technical terms that have no simpler equivalent, and never waste words on introductions.'),
 ('Which sentence best shortens "Because the rainfall was extremely heavy over a very long period, the river eventually overflowed its banks."?',
  ['"Prolonged heavy rain caused the river to flood."', '"The rainfall was extremely heavy over a very long period."',
   '"It is important to note that the river overflowed."', '"The river eventually overflowed its banks because of rain that lasted a long time."'], 0,
  'One adjective ("prolonged") replaces a whole clause, and the strong verb "caused...flood" replaces the weak original phrasing.'),
 ('Which technique shortens a clause?',
  ['adding more examples', 'replacing a weak verb + noun with a strong verb ("made a decision" -> "decided")', 'repeating the main idea', 'quoting the passage'], 1,
  'Strong verbs, single adjectives in place of clauses, and dropping fillers such as "it is important to note that" all compress sentences.'),
 ('In a "give a word or phrase that means the same as..." question, your answer must...',
  ['be a synonym you supply yourself', 'come exactly from the passage and fit grammatically', 'be a full sentence', 'be the opposite in meaning'], 1,
  'Lift the exact word(s) from the passage, add or change nothing, and check the part of speech fits the slot.'),
 ('After drafting, what does "count and check" involve?',
  ['counting the words in the passage', 'matching the sentence or word limit exactly, then checking tense, spelling and punctuation',
   'counting the paragraphs', 'checking the writer\'s name'], 1,
  'Going over the limit costs marks, so count precisely - then proofread tense, spelling and punctuation.'),
 ('Why should you read the passage twice?',
  ['to memorise it', 'the first time for general sense, the second to mark the key ideas', 'to count its words', 'to find spelling mistakes'], 1,
  'The first reading gives the general sense; the second is for underlining topic sentences and any stated reason, cause or result.'),
 ('Which of these wastes words in a summary?',
  ['"In this passage the writer says..."', 'using your own vocabulary', 'keeping a technical term with no simpler equivalent', 'underlining topic sentences while reading'], 0,
  'Introductions and conclusions report the task, not the passage - go straight to the points.'),
], cards=[
 ('What three things does a summary question really test?',
  'Reading accurately, selecting the important points, and expressing them in your own words within a strict limit. It never tests your own knowledge of the topic.'),
 ('Outline the five-step summary method.',
  '1) Read the question and note the exact instruction; 2) read the passage twice, marking key ideas; 3) draft in your own words; 4) count sentences or words exactly; 5) check tense, spelling and punctuation.'),
 ('Name four things to leave out of a summary.',
  'Examples and illustrations; repetition; quotations and statistics (unless figures are asked for); and your own opinion. Introductions like "In this passage the writer says..." are wasted words too.'),
 ('How do you turn a long clause into a short one?',
  'Use a strong verb instead of a weak verb + noun ("made a decision" -> "decided"), replace a clause with a single adjective ("rain that lasted a long time" -> "prolonged rain"), and drop fillers such as "it is important to note that".'),
 ('How do you answer "give a word or phrase that means the same as..."?',
  'Lift the exact word(s) from the passage - do not add or change anything - and check the part of speech: a noun answer for a noun slot.'),
])

# ---------------- Basic Science JSS2: Acids, Bases & Salts ----------------
fill('Basic Science', 'Acids, Bases & Salts in Everyday Life', quiz=[
 ('Which acid is found in oranges and lemons?', ['hydrochloric acid', 'citric acid', 'sulphuric acid', 'lactic acid'], 1,
  'Citrus fruits contain citric acid - it gives oranges and lemons their sour taste.'),
 ('The acid in vinegar is...', ['ethanoic (acetic) acid', 'citric acid', 'nitric acid', 'carbonic acid'], 0,
  'Vinegar is a dilute solution of ethanoic acid, also called acetic acid.'),
 ('Bases feel...', ['sticky and sweet', 'soapy and slippery', 'rough and dry', 'cold and wet'], 1,
  'A soapy, slippery feel is a classic sign of a base - that is why soap, which is mildly alkaline, feels slippery.'),
 ('What does an acid do to blue litmus paper?', ['turns it red', 'turns it green', 'no change', 'bleaches it white'], 0,
  'Acids turn blue litmus red; bases turn red litmus blue. Litmus is the simplest indicator.'),
 ('A solution has pH 12. It is...', ['strongly acidic', 'weakly acidic', 'neutral', 'strongly basic'], 3,
  'The pH scale runs 0-14: below 7 acidic, exactly 7 neutral, above 7 basic. pH 12 is strongly basic.'),
 ('Neutralisation is the reaction between...', ['an acid and a metal only', 'an acid and a base', 'two acids', 'a base and water'], 1,
  'An acid and a base react to form a salt and water, cancelling each other\'s properties.'),
 ('Bee stings are acidic. Which substance is a sensible home treatment?', ['vinegar', 'baking soda (a mild base)', 'lemon juice', 'table salt'], 1,
  'A mild base such as baking soda neutralises the acidic venom and eases the pain.'),
 ('Antacid tablets relieve indigestion by...', ['adding more acid to the stomach', 'neutralising excess stomach acid', 'coating the tongue', 'killing bacteria'], 1,
  'The stomach contains hydrochloric acid; an antacid is a mild base that neutralises the excess.'),
 ('Which of these is a base?', ['vinegar', 'wood ash', 'orange juice', 'sour milk'], 1,
  'Wood ash contains basic compounds - it has long been used for making soap and for treating acidic soil.'),
 ('What colour change does litmus show in a neutral solution?', ['blue to red', 'red to blue', 'no change', 'it dissolves'], 2,
  'A neutral solution such as pure water changes neither red nor blue litmus.'),
], cards=[
 ('Give two acids you meet at home and where they are found.',
  'Citric acid in oranges and lemons, and ethanoic (acetic) acid in vinegar. Others include lactic acid in sour milk and carbonic acid in fizzy drinks.'),
 ('What is universal indicator, and how is it different from litmus?',
  'Litmus only says acid (red) or base (blue). Universal indicator shows a different colour for every pH value, so it tells you HOW acidic or basic a solution is, not just which it is.'),
 ('What is neutralisation? Give two everyday uses.',
  'The reaction of an acid with a base to form a salt and water. Everyday uses: antacid tablets neutralise excess stomach acid, and baking soda neutralises acidic bee stings.'),
 ('Describe the pH scale.',
  'A 0-14 scale showing how acidic or basic a solution is: below 7 acidic, exactly 7 neutral, above 7 basic. The lower the number, the stronger the acid; the higher, the stronger the base.'),
])

# ---------------- Basic Science JSS2: Energy, Transformation & Simple Machines ----------------
fill('Basic Science', 'Energy: Forms, Transformation & Simple Machines', quiz=[
 ('Energy stored in a body because of its height or position is...', ['kinetic energy', 'potential energy', 'heat energy', 'chemical energy'], 1,
  'A raised object stores potential energy; as it falls, that energy changes into kinetic energy.'),
 ('The SI unit of energy is the...', ['newton', 'watt', 'joule', 'metre'], 2,
  'Energy and work are both measured in joules (J).'),
 ('The law of conservation of energy says that energy...',
  ['can be destroyed by friction', 'can only be transformed, never created or destroyed', 'is created by machines', 'disappears when used'], 1,
  'Energy changes form but the total amount stays the same - though friction often spreads some of it out as heat.'),
 ('In a battery-powered torch the energy transformation is...',
  ['light -> chemical -> electrical', 'chemical -> electrical -> light (and heat)', 'electrical -> chemical -> light', 'heat -> light -> chemical'], 1,
  'The battery stores chemical energy, which becomes electrical energy in the circuit, then light (plus wasted heat) in the bulb.'),
 ('Which of these is a renewable source of energy?', ['coal', 'petrol', 'solar', 'natural gas'], 2,
  'Solar, wind and hydro sources renew themselves; coal, petrol and gas are fossil fuels that cannot be replaced once burnt.'),
 ('A single fixed pulley is mainly used to...', ['multiply force', 'change the direction of the effort', 'reduce the work done', 'store energy'], 1,
  'A fixed pulley lets you pull DOWN to lift a load UP - it changes direction, not the size of the force.'),
 ('The three important parts of a lever are...',
  ['effort, load and fulcrum', 'wheel, axle and rope', 'piston, valve and cylinder', 'blade, handle and screw'], 0,
  'A lever turns about a fulcrum; the effort you apply moves the load.'),
 ('A ramp (inclined plane) makes lifting easier by...',
  ['reducing the work needed', 'reducing the force needed over a longer distance', 'removing friction', 'adding energy'], 1,
  'The longer slope trades distance for force - the total work done is not reduced.'),
 ('Which statement about machines is correct?',
  ['Machines reduce the amount of work done', 'Machines create energy', 'Machines make work easier but do not reduce the work done', 'Machines destroy friction'], 2,
  'Machines change the size or direction of forces; friction means they can never reduce the total work - only make it feel easier.'),
 ('The energy of a moving body is called...', ['potential energy', 'kinetic energy', 'chemical energy', 'nuclear energy'], 1,
  'Anything in motion has kinetic energy - the faster it moves, the more it has.'),
], cards=[
 ('Give the energy transformation in a battery-powered torch.',
  'Chemical energy (stored in the battery) -> electrical energy (in the circuit) -> light energy and some wasted heat (in the bulb).'),
 ('Name three renewable and three non-renewable energy sources.',
  'Renewable: solar, wind and hydroelectric - they renew themselves. Non-renewable: coal, petroleum and natural gas - fossil fuels that took millions of years to form.'),
 ('Why can a machine never reduce the work done?',
  'A machine trades a smaller force for a longer distance, and friction wastes some energy as heat, so the work output is never greater than the work put in. Machines make work EASIER, not less.'),
])

# ---------------- Basic Science JSS3: Reproduction, Growth & Drug Abuse ----------------
fill('Basic Science', 'Reproduction, Growth & Drug Abuse', quiz=[
 ('The stage of development when the body becomes capable of reproduction is...', ['infancy', 'puberty', 'menopause', 'old age'], 1,
  'Puberty brings the physical changes - deepening voice in boys, breast development and the start of menstruation in girls.'),
 ('Menstruation is...', ['the release of an egg only', 'the monthly shedding of the lining of the uterus', 'the fusion of gametes', 'a disease'], 1,
  'About every 28 days, if the egg is not fertilised, the blood-rich lining of the uterus breaks down and is shed.'),
 ('Fertilisation normally takes place in the...', ['uterus', 'oviduct (fallopian tube)', 'ovary', 'vagina'], 1,
  'The sperm meets and fuses with the egg in the oviduct; the fertilised egg then travels down to the uterus.'),
 ('The unborn baby (foetus) develops inside the...', ['ovary', 'oviduct', 'uterus (womb)', 'placenta'], 2,
  'The embryo implants in the wall of the uterus, where it grows into a foetus until birth.'),
 ('The job of the placenta is to...',
  ['protect the baby from knocks', 'exchange nutrients, oxygen and waste between mother and foetus', 'produce eggs', 'start labour'], 1,
  'The placenta passes food and oxygen from the mother\'s blood to the foetus and carries waste back - the two blood supplies never mix directly.'),
 ('Which STI is caused by a virus?', ['gonorrhoea', 'syphilis', 'HIV/AIDS', 'chlamydia'], 2,
  'HIV is a virus; gonorrhoea, syphilis and chlamydia are caused by bacteria.'),
 ('The most reliable way for young people to avoid STIs is...',
  ['sharing towels', 'abstinence from sexual contact', 'taking antibiotics weekly', 'washing after contact'], 1,
  'Abstinence removes the route of transmission completely; being faithful to one uninfected partner also greatly reduces the risk.'),
 ('Drug abuse means...',
  ['taking medicine exactly as prescribed', 'using drugs illegally, in wrong doses, or for non-medical reasons', 'refusing medication', 'using vitamins daily'], 1,
  'Any use of a drug outside medical guidance - wrong dose, wrong purpose, or illegal substances - counts as abuse.'),
 ('Which of these is an effect of drug abuse?',
  ['improved memory', 'addiction, organ damage and poor judgement', 'stronger bones', 'better concentration'], 1,
  'Drug abuse damages the brain, liver and other organs, causes addiction, and destroys judgement, schoolwork and relationships.'),
 ('The safe rule about medicines is...',
  ['share your prescription with friends', 'take only prescribed drugs, at the right dose, for the right time', 'double the dose if you feel very ill', 'stop antibiotics as soon as you feel better'], 1,
  'Medicines work only as prescribed - the correct drug, dose and duration - and prescriptions are never shared.'),
], cards=[
 ('What changes happen at puberty?',
  'The body matures for reproduction: boys\' voices deepen and shoulders broaden; girls\' breasts develop and menstruation begins. Both grow quickly, develop body hair and skin changes.'),
 ('Trace the journey from fertilisation to birth.',
  'A sperm fertilises the egg in the oviduct -> the embryo implants in the uterus wall -> it develops into a foetus, nourished through the placenta -> birth after about nine months.'),
 ('What is the role of the placenta?',
  'It exchanges materials between mother and foetus: nutrients and oxygen pass in, wastes pass out. The two blood supplies do not mix directly.'),
 ('Why is drug abuse especially dangerous to a student?',
  'It causes addiction, damages organs such as the brain and liver, destroys concentration and judgement, and leads to poor school performance and risky behaviour.'),
])

# ---------------- Basic Science JSS3: Light, Sound & Basic Electricity ----------------
fill('Basic Science', 'Light, Sound & Basic Electricity', quiz=[
 ('Light travels in...', ['curved paths', 'straight lines', 'circles', 'only through air'], 1,
  'Rectilinear propagation - light travels in straight lines, which is why shadows have sharp edges.'),
 ('The bouncing back of light from a smooth surface such as a mirror is called...', ['refraction', 'reflection', 'dispersion', 'absorption'], 1,
  'Reflection lets mirrors form images; smooth, shiny surfaces reflect best.'),
 ('A pencil in a glass of water looks bent because of...', ['reflection', 'refraction', 'echo', 'vibration'], 1,
  'Light changes speed - and so bends - when it crosses from water into air: refraction.'),
 ('All sounds are produced by...', ['heat', 'vibrations', 'electricity', 'light'], 1,
  'A vibrating object - a string, a drum skin, vocal cords - sets the surrounding air vibrating too.'),
 ('Sound cannot travel through...', ['water', 'steel', 'a vacuum', 'air'], 2,
  'Sound needs particles to vibrate; a vacuum has none, so unlike light, sound cannot cross it.'),
 ('Sound travels fastest in...', ['solids', 'liquids', 'gases', 'a vacuum'], 0,
  'Particles in a solid are packed closest together, so vibrations are passed on quickest.'),
 ('An echo is...', ['a refracted sound', 'a reflected sound', 'a louder original sound', 'a steady vibration'], 1,
  'Sound reflecting off a hard, distant surface returns to the listener as an echo.'),
 ('Which of these is a good conductor of electricity?', ['rubber', 'copper', 'dry wood', 'plastic'], 1,
  'Metals such as copper conduct well; rubber and plastic are insulators used to coat wires for safety.'),
 ('A simple electric circuit must contain...',
  ['a cell, wires, a bulb and a closed path', 'only a bulb', 'only wires', 'a magnet and a coil'], 0,
  'Current flows only when there is a complete (closed) path from the cell, through the components and back again.'),
 ('Why are electrical wires coated with plastic?',
  ['to make them heavier', 'plastic is an insulator and prevents shocks', 'to increase the current', 'to make them conduct better'], 1,
  'Plastic is an insulator - it keeps the current inside the wire and protects anyone who touches it.'),
], cards=[
 ('What is the difference between reflection and refraction?',
  'Reflection is light bouncing off a surface (a mirror image). Refraction is light bending as it passes from one medium into another (a pencil looking bent in water).'),
 ('Distinguish conductors from insulators, with two examples of each.',
  'Conductors let electricity flow easily - copper, aluminium and other metals. Insulators resist the flow - rubber, plastic, dry wood. Wires combine both: a copper core in a plastic coat.'),
 ('What makes an electric circuit "complete"?',
  'An unbroken conducting path from one terminal of the cell, through the components (bulb, switch) and back to the other terminal. An open switch breaks the path and the bulb goes out.'),
])

# ---------------- Basic Technology JSS2: Geometrical Construction ----------------
fill('Basic Technology', 'Geometrical Construction & Plane Figures', quiz=[
 ('The two tools used for accurate geometrical construction are...',
  ['a protractor and a calculator', 'a pair of compasses and a ruler (straight edge)', 'a set square and a tape measure', 'a ruler and a calculator'], 1,
  'Construction means compasses and straight edge only - measuring angles with a protractor does not count as construction.'),
 ('To bisect a line, arcs are drawn from both endpoints with the radius set to...',
  ['exactly half the line', 'any length at all', 'more than half the line', 'the full length of the line'], 2,
  'A radius greater than half the line guarantees the two arcs cross above and below the line.'),
 ('Which angle is constructed by drawing an arc, then stepping the same radius along it?', ['45°', '60°', '30°', '15°'], 1,
  'Keeping the compass radius fixed marks off an equilateral-triangle angle of 60° - the base of most constructions.'),
 ('Bisecting a 60° angle gives...', ['45°', '30°', '20°', '90°'], 1,
  'Bisection halves the angle: 60° / 2 = 30°.'),
 ('The sum of the angles of a triangle is...', ['90°', '180°', '270°', '360°'], 1,
  'The three interior angles of ANY triangle add up to 180°.'),
 ('The sum of the interior angles of a quadrilateral is...', ['180°', '270°', '360°', '540°'], 2,
  'A quadrilateral splits into two triangles: 2 x 180° = 360°.'),
 ('Each exterior angle of a regular pentagon is...', ['72°', '108°', '60°', '90°'], 0,
  'Exterior angles of any regular polygon sum to 360°, so each of a pentagon\'s five is 360° / 5 = 72°.'),
 ('A chord that passes through the centre of a circle is called the...', ['radius', 'diameter', 'tangent', 'arc'], 1,
  'The diameter is the longest chord - exactly twice the radius.'),
 ('A triangle constructed from the lengths of its three sides uses the...',
  ['SSS method', 'angle-bisector method', 'protractor method', 'trial-and-error method'], 0,
  'With all three sides known (SSS), compass arcs drawn from each end of the base locate the third vertex.'),
 ('Two angles that add up to 90° are...', ['supplementary', 'complementary', 'vertically opposite', 'corresponding'], 1,
  'Complementary angles sum to 90°; supplementary angles sum to 180°.'),
], cards=[
 ('How do you bisect an angle with compasses?',
  'Draw an arc from the vertex cutting both arms. From those two points draw equal arcs that cross inside the angle. Join the vertex to the crossing point - that line bisects the angle.'),
 ('Which standard angles are easy to construct, and how do the others follow?',
  '60° and 90° are the base constructions. Bisecting them gives 30° and 45°; bisecting again gives 15°. And 120° = 180° - 60°.'),
 ('What are the angle sums of polygons?',
  'Triangle: 180°. Quadrilateral: 360°. Any n-sided polygon: (n - 2) x 180°. The exterior angles of any regular polygon always sum to 360°.'),
 ('Name the main parts of a circle.',
  'Radius (centre to edge), diameter (twice the radius, through the centre), chord (any line joining two points on the circle), circumference (the perimeter) and arc (a part of the circumference).'),
])

# ---------------- Basic Technology JSS2: Building Materials & Simple Structures ----------------
fill('Basic Technology', 'Building Materials & Simple Structures', quiz=[
 ('Which of these is a hardwood?', ['pine', 'iroko', 'spruce', 'fir'], 1,
  'Iroko is a tropical hardwood - dense and durable; pine, spruce and fir are softwoods.'),
 ('Concrete is a mixture of...',
  ['cement, sand, gravel and water', 'clay and straw', 'lime and wood ash', 'tar and stone'], 0,
  'Cement binds sand (fine aggregate) and gravel (coarse aggregate) with water into strong concrete.'),
 ('In a loaded beam, the top is mainly in ___ and the bottom in ___.',
  ['tension / compression', 'compression / tension', 'shear / torsion', 'compression / compression'], 1,
  'A loaded beam sags slightly: the top shortens (compression) while the bottom stretches (tension).'),
 ('The shape that makes structures rigid is the...', ['square', 'circle', 'triangle', 'rectangle'], 2,
  'A triangle cannot change shape without changing a side length - so roof trusses and bridges are built from triangles.'),
 ('Coating steel with zinc to stop rusting is called...', ['painting', 'greasing', 'galvanising', 'alloying'], 2,
  'Galvanising covers steel with zinc, which corrodes first and shields the iron beneath.'),
 ('Bricks are made from...', ['melted metal', 'fired (baked) clay', 'concrete only', 'compressed sand and glue'], 1,
  'Clay is moulded and fired in a kiln until hard - that is what a brick is.'),
 ('Glass and ceramics are described as brittle because they...',
  ['bend easily', 'shatter rather than bend', 'melt at low temperatures', 'conduct electricity'], 1,
  'Brittle materials break suddenly with hardly any bending - handle them with care in the workshop.'),
 ('Steel bars are placed inside concrete beams because...',
  ['concrete is weak in compression', 'steel carries the tension that concrete cannot', 'it makes the beam lighter', 'it looks better'], 1,
  'Concrete is strong in compression but weak in tension; embedded steel carries the tensile forces - that is reinforced concrete.'),
 ('A good roofing material should be...',
  ['heavy, porous and brittle', 'waterproof, durable and light', 'transparent and soft', 'absorbent and heavy'], 1,
  'A roof must shed water, last for years in sun and rain, and not overload the walls.'),
 ('Which property makes aluminium good for window frames?',
  ['it rusts quickly', 'it resists corrosion and is light', 'it is magnetic', 'it is very heavy'], 1,
  'Aluminium forms a protective oxide layer so it does not rust, and its lightness makes it easy to fit.'),
], cards=[
 ('What are the ingredients of concrete, and what does each do?',
  'Cement (the binder), sand and gravel (the aggregates giving bulk and strength), and water (starts the chemical setting). The mixture hardens into strong, durable concrete.'),
 ('Name three ways to protect metals from corrosion.',
  'Painting or greasing (a barrier against air and moisture), galvanising (a zinc coating), and alloying or choosing corrosion-resistant metals such as aluminium and stainless steel.'),
 ('Explain compression and tension in structures, with examples.',
  'Compression squeezes a member (a column carrying a roof); tension stretches it (a cable in a suspension bridge). In a loaded beam the top is compressed and the bottom is in tension.'),
])

# ---------------- Basic Technology JSS2: Human Body Systems ----------------
fill('Basic Technology', 'Human Body Systems', quiz=[
 ('Which system transports oxygen, nutrients and hormones round the body?', ['digestive', 'circulatory', 'nervous', 'skeletal'], 1,
  'The heart, blood vessels and blood form the body\'s transport system.'),
 ('Gas exchange - oxygen in, carbon dioxide out - happens in the...', ['stomach', 'alveoli of the lungs', 'kidneys', 'liver'], 1,
  'The tiny air sacs (alveoli) are wrapped in capillaries, where the gases swap in and out of the blood.'),
 ('The correct order of the food channel is...',
  ['mouth -> stomach -> oesophagus -> small intestine', 'mouth -> oesophagus -> stomach -> small intestine -> large intestine',
   'stomach -> mouth -> intestine', 'oesophagus -> mouth -> stomach'], 1,
  'Food is swallowed down the oesophagus into the stomach, then passes through the small and large intestines.'),
 ('Which system coordinates the body and responds to stimuli?', ['endocrine', 'excretory', 'nervous', 'muscular'], 2,
  'The brain, spinal cord and nerves carry messages to and from every part of the body.'),
 ('The kidneys belong to which system?', ['excretory', 'digestive', 'respiratory', 'circulatory'], 0,
  'The excretory system - kidneys, ureters and bladder - removes metabolic waste such as urea from the blood.'),
 ('Bile is produced by the...', ['stomach', 'liver', 'gall bladder', 'pancreas'], 1,
  'The liver makes bile - stored in the gall bladder - to help digest fats. The liver is a digestive-system organ.'),
 ('Chemical control of the body through hormones is the job of the...', ['endocrine system', 'skeletal system', 'muscular system', 'excretory system'], 0,
  'Glands such as the pituitary, thyroid and pancreas release hormones into the blood.'),
 ('How do the digestive and circulatory systems cooperate?',
  ['The stomach pumps blood', 'Digested food passes from the villi into the blood capillaries', 'Blood digests food directly', 'The heart produces enzymes'], 1,
  'The thin-walled villi of the small intestine are rich in capillaries, so absorbed food is carried to every cell.'),
 ('The functions of the skeleton include...',
  ['digestion and absorption', 'support, protection and movement', 'breathing only', 'hormone production'], 1,
  'Bones support the body, protect organs (skull -> brain, ribs -> heart and lungs) and work with muscles for movement.'),
 ('Which habit protects the digestive system?', ['smoking', 'washing hands and drinking safe water', 'skipping meals', 'drinking alcohol'], 1,
  'Germs enter with dirty hands and unsafe water - hygiene prevents infections such as diarrhoea and typhoid.'),
], cards=[
 ('Arrange the levels of organisation of the body, simplest first.',
  'Cell -> tissue -> organ -> system -> organism. Cells group into tissues, tissues form organs, organs cooperate as systems, and systems make the whole organism.'),
 ('Name the nine body systems with one function each.',
  'Digestive (breaks down food), circulatory (transport), respiratory (gas exchange), nervous (control and coordination), excretory (waste removal), skeletal (support/protection), muscular (movement), endocrine (hormones), reproductive (offspring).'),
 ('Give an example of two systems working together.',
  'During exercise the respiratory system takes in extra oxygen while the circulatory system pumps faster to deliver it to muscles - and carries away the extra carbon dioxide.'),
 ('How do you keep your body systems healthy?',
  'Eat a balanced diet (carbohydrates, proteins, fats, vitamins, minerals, fibre and water), exercise regularly, avoid tobacco, alcohol and drugs, wash your hands and drink safe water.'),
])

# ---------------- Basic Technology JSS3: Light, Sound & Basic Electricity ----------------
fill('Basic Technology', 'Light, Sound & Basic Electricity', quiz=[
 ('Shadows are formed because...',
  ['light bends around objects', 'light travels in straight lines and cannot pass through opaque objects', 'light is absorbed by air', 'sound blocks light'], 1,
  'An opaque object blocks the straight rays, leaving a dark region - the shadow - behind it.'),
 ('Which surface gives the clearest reflection?', ['rough wood', 'a plane mirror', 'white paper', 'cloth'], 1,
  'Smooth, polished surfaces reflect light in an orderly way; rough surfaces scatter it in all directions.'),
 ('Splitting white light into colours with a prism is an example of...', ['reflection', 'refraction (dispersion)', 'absorption', 'echo'], 1,
  'Each colour refracts by a slightly different amount, so a prism spreads white light into a spectrum.'),
 ('The number of vibrations per second of a sound source determines its...', ['loudness', 'pitch', 'speed', 'echo'], 1,
  'Faster vibrations (higher frequency) give a higher pitch; bigger vibrations give a louder sound.'),
 ('Bats and dolphins locate objects using reflected sound. This is called...', ['dispersion', 'echo location', 'amplification', 'insulation'], 1,
  'They emit high-pitched sounds and listen for the echoes bouncing back from objects - echo location.'),
 ('Which list contains ONLY insulators?', ['copper, aluminium', 'rubber, dry wood, plastic', 'iron, steel', 'silver, gold'], 1,
  'Rubber, dry wood and plastic all resist the flow of electricity; every metal in the other lists conducts.'),
 ('In a simple circuit, the component that supplies the energy is the...', ['bulb', 'switch', 'cell', 'wire'], 2,
  'The cell converts stored chemical energy into electrical energy that pushes the current round the circuit.'),
 ('When the switch in a circuit is open...',
  ['the bulb shines brighter', 'current stops and the bulb goes out', 'the wires melt', 'the cell recharges'], 1,
  'An open switch breaks the conducting path, so no current can flow.'),
 ('Light differs from sound because light...',
  ['needs a medium', 'can travel through a vacuum', 'travels slower than sound', 'cannot be reflected'], 1,
  'Light is not a vibration of particles, so it crosses empty space - that is how sunlight reaches the Earth.'),
 ('A periscope uses two mirrors to...',
  ['bend light round corners by reflection', 'magnify sound', 'store electricity', 'refract sound'], 0,
  'Each mirror reflects the light through 90°, letting you see over or around obstacles.'),
], cards=[
 ('Give three everyday effects of refraction.',
  'A pencil looking bent in water, swimming pools appearing shallower than they really are, and lenses (spectacles, magnifying glasses) focusing light.'),
 ('Why are metals used for wire cores while plastic covers them?',
  'Metal - usually copper - conducts the current with little resistance. The plastic covering is an insulator that keeps the current in the wire and prevents electric shocks.'),
 ('What conditions produce a clear echo?',
  'A loud sound, a hard flat reflecting surface some distance away, and no soft materials to absorb the sound - soft furnishings and carpets kill echoes.'),
])

open(CUR, 'w').write(s)
print('done; chars:', len(s))
