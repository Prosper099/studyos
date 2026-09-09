"""Author 10-question quizzes + flashcards for SS English Language (10) and SS Physics (11)."""
import re

CUR = '/home/user/index.html'
s = open(CUR).read()
SUBJECTS = ['Mathematics', 'Basic Science', 'English Language', 'Basic Technology', 'Physics', 'Chemistry', 'Biology']

def esc(t):
    return t.replace('\\', '\\\\').replace("'", "\\'")

def fill(subject, title, quiz=None, cards=None):
    global s
    a = s.index("  '%s': {" % subject)
    nxt = [s.index("  '%s': {" % o, a + 5) for o in SUBJECTS if s.find("  '%s': {" % o, a + 5) > 0]
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

# ================== ENGLISH SS1 ==================
fill('English Language', 'Tenses & Subject\u2013Verb Concord', quiz=[
 ('Choose the correct verb: "Each of the boys ___ a prize."', ['has', 'have', 'having', 'were given'], 0,
  '"Each" is singular, so it takes a singular verb: each of the boys HAS a prize.'),
 ('Choose the correct verb: "The team ___ playing well today."', ['is', 'are', 'were', 'have been'], 0,
  'A collective noun acting as one unit takes a singular verb: the team IS playing well.'),
 ('Choose the correct verb: "Bread and butter ___ my favourite breakfast."', ['is', 'are', 'were', 'have been'], 0,
  'Bread and butter is treated as one idea (a single dish), so the verb is singular: IS.'),
 ('Choose the correct verb: "Neither of the answers ___ correct."', ['is', 'are', 'were', 'have been'], 0,
  '"Neither" is always singular: neither of the answers IS correct.'),
 ('Choose the correct verb: "Ten kilometres ___ a long distance to walk."', ['is', 'are', 'were', 'have been'], 0,
  'Distances, sums of money and periods of time act as single units, so they take singular verbs.'),
 ('Choose the correct verb: "Everyone ___ present at the meeting."', ['was', 'were', 'have been', 'are'], 0,
  'Everyone, somebody, nobody and anybody are singular pronouns: everyone WAS present.'),
 ('Complete: "He asked me where I ___."', ['lived', 'live', 'am living', 'will live'], 0,
  'Sequence of tenses: after the past verb "asked", the subordinate verb shifts back - lived, not live.'),
 ('Choose the correct verb: "The principal, together with the teachers, ___ attending."', ['is', 'are', 'were', 'have been'], 0,
  'Phrases like "together with" and "as well as" do not change the subject - the principal IS attending.'),
 ('Choose the correct verb: "Mathematics ___ an interesting subject."', ['is', 'are', 'were', 'have been'], 0,
  'Names of subjects, games and disciplines ending in -s are singular: Mathematics IS interesting.'),
 ('Choose the correct verb: "Either the boys or the teacher ___ to blame."', ['is', 'are', 'were', 'have been'], 0,
  'With either/or and neither/nor, the verb agrees with the NEARER subject - the teacher, so IS.'),
], cards=[
 ('State the core rule of subject-verb concord.',
  'A singular subject takes a singular verb and a plural subject takes a plural verb: the boy runs, the boys run. Find the true subject first - ignore phrases in between.'),
 ('How do either/or and neither/nor affect the verb?',
  'The verb agrees with the nearer subject: "Either the boys or the teacher IS to blame" but "Either the teacher or the boys ARE to blame". Neither is always singular on its own.'),
])

fill('English Language', 'Idioms & Figurative Language', quiz=[
 ('What does "a stitch in time saves nine" mean?',
  ['Dealing with a problem early prevents bigger trouble later', 'Sewing is a useful skill', 'Nine stitches are better than one', 'Time heals all wounds'], 0,
  'One timely stitch prevents nine later - fix problems early before they grow.'),
 ('"He bit off more than he could chew" means he...', ['took on more than he could handle', 'ate too quickly', 'spoke rudely', 'wasted his food'], 0,
  'The idiom describes someone who accepts a task too big for them.'),
 ('A simile compares two things...', ['using "like" or "as"', 'by saying one thing IS another', 'by giving them human qualities', 'by exaggerating'], 0,
  'Similes use like or as: "brave as a lion". A metaphor states the comparison directly.'),
 ('A metaphor compares two things by...', ['saying one thing is another', 'using like or as', 'repeating consonants', 'exaggerating greatly'], 0,
  '"He is a lion in battle" - no like or as; the comparison is stated directly. That is a metaphor.'),
 ('"The wind howled through the night" is an example of...', ['personification', 'simile', 'hyperbole', 'euphemism'], 0,
  'Howling is a human/animal action given to the wind - that is personification.'),
 ('An extravagant exaggeration such as "I have told you a million times" is...', ['hyperbole', 'metaphor', 'irony', 'simile'], 0,
  'Hyperbole deliberately overstates for effect - nobody literally said it a million times.'),
 ('"Break the ice" means to...', ['start a conversation and ease tension', 'damage something frozen', 'end a friendship', 'cool a drink'], 0,
  'The idiom means to do or say something that relaxes an awkward social situation.'),
 ('"Once in a blue moon" means...', ['very rarely', 'every month', 'at night', 'suddenly'], 0,
  'A blue moon is extremely rare - so the idiom means something that hardly ever happens.'),
 ('A mild expression used in place of a harsh one (e.g. "passed away" for "died") is...', ['a euphemism', 'a hyperbole', 'a paradox', 'a proverb'], 0,
  'Euphemisms soften unpleasant truths: "passed away", "let go", "between jobs".'),
 ('"He is a lion in battle" is an example of...', ['metaphor', 'simile', 'personification', 'onomatopoeia'], 0,
  'The soldier IS called a lion - a direct comparison without like or as, so a metaphor.'),
], cards=[
 ('Define personification, hyperbole and euphemism.',
  'Personification gives human qualities to non-human things ("the wind howled"). Hyperbole is deliberate exaggeration ("a million times"). A euphemism softens a harsh idea ("passed away" for "died").'),
 ('Give five JAMB-favourite idioms and their meanings.',
  '"Let the cat out of the bag" - reveal a secret. "A stitch in time saves nine" - act early. "Once in a blue moon" - very rarely. "Break the ice" - ease tension. "Bite off more than you can chew" - take on too much.'),
])

fill('English Language', 'Punctuation & Capitalisation', quiz=[
 ('In "the boys\u2019 bags", the apostrophe shows...', ['plural possession', 'a contraction', 'a singular possession', 'an abbreviation'], 0,
  'The bags belong to many boys, so the apostrophe comes after the plural s: boys\u2019.'),
 ('In the contraction "don\u2019t", the apostrophe...', ['replaces the missing letters "o"', 'shows possession', 'marks a plural', 'ends the sentence'], 0,
  'Don\u2019t = do not; the apostrophe stands where letters were dropped. Same in can\u2019t, it\u2019s, I\u2019m.'),
 ('Which sentence uses commas correctly?', ['I bought rice, beans, yam and oil.', 'I bought, rice beans yam, and oil.', 'I bought rice beans, yam and, oil.', 'I, bought rice beans yam and oil.'], 0,
  'Commas separate the items in a list - never stick a comma between an adjective-less pair or before the first item.'),
 ('In direct speech, where does the full stop usually go?', ['inside the quotation marks', 'outside the quotation marks', 'before the speech marks', 'it is omitted'], 0,
  'In the convention used in Nigerian exams the full stop sits inside the closing quotation mark: "I am coming."'),
 ('A colon is used to...', ['introduce a list or explanation', 'join two verbs', 'end a question', 'show possession'], 0,
  'The colon announces what follows: "Bring three things: a pen, a ruler and a calculator."'),
 ('A semi-colon is used to...', ['join two closely related independent clauses', 'introduce direct speech', 'show possession', 'separate adjectives'], 0,
  'The semi-colon links two full sentences that belong together: "The rain stopped; the match resumed."'),
 ('Which sentence is correctly capitalised?', ['Mr Ade lives in Lagos.', 'mr Ade lives in lagos.', 'Mr ade Lives In Lagos.', 'Mr Ade Lives in lagos.'], 0,
  'Capital letters for titles (Mr), names (Ade) and places (Lagos) - but not for every word.'),
 ('Choose the correct sentence.', ['The dog wagged its tail.', 'The dog wagged it\u2019s tail.', 'The dog wagged its\u2019 tail.', 'The dog wagged its tails tail.'], 0,
  'Its (no apostrophe) is possessive; it\u2019s means "it is". Possessive pronouns never take apostrophes.'),
 ('Which mark ends a direct question?', ['a question mark', 'a full stop', 'an exclamation mark', 'a semi-colon'], 0,
  'Direct questions end with a question mark: "Where are you going?"'),
 ('A comma is needed before "but" when it...', ['joins two independent clauses', 'joins two nouns only', 'starts a list', 'ends a sentence'], 0,
  'When but links two complete sentences, put a comma before it: "I was tired, but I finished the work."'),
], cards=[
 ('State the rules for using apostrophes.',
  'Two jobs only: (1) contractions - the apostrophe replaces missing letters (don\u2019t, it\u2019s); (2) possession - boy\u2019s bag (one boy), boys\u2019 bags (many boys). Possessive pronouns (its, theirs, yours) never take apostrophes.'),
 ('When do you use a colon, and when a semi-colon?',
  'A colon introduces a list, quotation or explanation after a complete sentence. A semi-colon joins two independent clauses that are closely linked - a stronger pause than a comma, weaker than a full stop.'),
 ('What are the main capitalisation rules?',
  'Capitalise the first word of a sentence, names of people and places, days and months, titles before names (Mr, Dr), the pronoun I, and important words in book titles.'),
])

# ================== ENGLISH SS2 ==================
fill('English Language', 'Comprehension & Summary Writing', quiz=[
 ('In a comprehension passage, the best answer to a question must be...', ['supported by evidence in the passage', 'based on your own opinion', 'the longest option', 'always the first option'], 0,
  'Comprehension tests what the WRITER said - every answer must be traceable to the passage.'),
 ('What should you do before reading a comprehension passage?', ['read the questions first', 'read the last line only', 'check the length', 'memorise the title'], 0,
  'Reading the questions first tells you what to look for, so the first read is already targeted.'),
 ('Which of these should be left OUT of a summary?', ['examples and illustrations', 'the main points', 'stated reasons', 'results mentioned by the writer'], 0,
  'Examples only support the points; a summary carries the points themselves.'),
 ('A summary answer should be written...', ['in your own words', 'by copying the best sentences', 'in note form always', 'using the writer\u2019s exact paragraphs'], 0,
  'Lifted sentences score zero even when correct - restate the ideas in your own words.'),
 ('When a question says "according to the passage", the answer must...', ['come only from the passage', 'come from general knowledge', 'be your opinion', 'be quoted from another book'], 0,
  'The phrase locks the answer to the passage - outside knowledge earns nothing.'),
 ('If the question asks for three sentences, you must write...', ['exactly three complete sentences', 'as many as you like', 'three words', 'three paragraphs'], 0,
  'Examiners count: extra sentences are ignored or penalised, and fragments lose marks. Give exactly what is asked.'),
 ('How should summary points be presented?', ['as complete sentences with correct punctuation', 'as single keywords', 'as a numbered shopping list', 'in note form with symbols'], 0,
  'Each point must stand as a grammatical sentence - fragments like "poverty. lack of schools." lose expression marks.'),
 ('To find the main idea of a paragraph, look at...', ['the topic sentence', 'the longest sentence', 'the last word', 'any example given'], 0,
  'The topic sentence - usually first - states the point that the rest of the paragraph supports.'),
 ('For a "what does the word X mean as used in the passage?" question, the meaning must...', ['fit the context of the passage', 'be the first dictionary meaning', 'be a synonym of the title', 'rhyme with the word'], 0,
  'Words change meaning with context - choose the sense that fits how the writer used it there.'),
 ('What must never appear in a summary answer?', ['your own opinion', 'the writer\u2019s main points', 'your own vocabulary', 'complete sentences'], 0,
  'A summary reports the passage, not you - opinions, introductions and conclusions all waste words and marks.'),
], cards=[
 ('Describe a reliable strategy for comprehension questions.',
  'Read the questions first, then the passage twice - once for sense, once to underline evidence. Answer in full sentences, quote only when asked, and make every answer traceable to the passage.'),
 ('How do you find the main idea of a paragraph?',
  'Look for the topic sentence - usually the first - which states the point that the other sentences explain, illustrate or prove. Summarise that sentence in your own words.'),
])

fill('English Language', 'Synonyms, Antonyms & Word Formation', quiz=[
 ('"Choose the word NEAREST in meaning" asks for...', ['a synonym', 'an antonym', 'a homophone', 'a prefix'], 0,
  'Nearest in meaning = synonym. Always check the stem - "opposite in meaning" flips the task.'),
 ('Choose the word nearest in meaning to "abundant".', ['plentiful', 'scarce', 'costly', 'heavy'], 0,
  'Abundant means existing in large quantity - plentiful.'),
 ('Choose the word OPPOSITE in meaning to "ancient".', ['modern', 'old', 'ruined', 'antique'], 0,
  'Ancient means very old, so its opposite is modern.'),
 ('The prefix "un-" means...', ['not', 'again', 'before', 'together'], 0,
  'Un- negates: unhappy = not happy, unsafe = not safe.'),
 ('The suffix "-tion" usually forms...', ['a noun', 'a verb', 'an adverb', 'a preposition'], 0,
  'Educate becomes education, act becomes action - "-tion" turns verbs into nouns.'),
 ('Choose the word opposite in meaning to "transparent".', ['opaque', 'clear', 'glassy', 'bright'], 0,
  'Transparent lets light through; opaque blocks it completely.'),
 ('Choose the word nearest in meaning to "reluctant".', ['unwilling', 'eager', 'careless', 'angry'], 0,
  'Reluctant means hesitant or unwilling to do something.'),
 ('The suffix "-ful" means...', ['full of', 'without', 'against', 'before'], 0,
  'Beautiful = full of beauty; careful = full of care. (Its opposite partner is -less: careless.)'),
 ('If you do not know a word in a passage, you should...', ['use the surrounding words to guess its sense', 'skip every question using it', 'choose the longest option', 'assume it is negative'], 0,
  'Context clues - the words and sentences around a gap - usually reveal the meaning.'),
 ('Choose the word opposite in meaning to "expand".', ['contract', 'grow', 'widen', 'inflate'], 0,
  'Expand means to grow bigger; contract means to shrink smaller.'),
], cards=[
 ('Why must you read the stem of a lexical question carefully?',
  'The same options can serve a "nearest in meaning" (synonym) or "opposite in meaning" (antonym) question. Misreading the stem turns a sure mark into a sure zero.'),
 ('List common prefixes and what they mean.',
  'un-/dis-/in-: not (unhappy, dislike, inactive). re-: again (rewrite). pre-: before (preview). mis-: wrongly (misjudge). anti-: against (antisocial).'),
 ('How do you use context clues?',
  'Look at the words and sentences around the unknown word - examples, contrasts ("but", "however") and cause-effect links usually reveal whether it is positive or negative and roughly what it means.'),
])

fill('English Language', 'Essay & Letter Writing', quiz=[
 ('A formal letter should close with...', ['"Yours faithfully,"', '"Yours sincerely,"', '"Your friend,"', '"With love,"'], 0,
  'Formal letters to a titled unknown (Dear Sir/Madam) close "Yours faithfully". "Yours sincerely" fits when you named the person.'),
 ('An informal letter closes with...', ['"Yours sincerely," or a warm sign-off', '"Yours faithfully,"', '"Respectfully,"', '"Dear Sir,"'], 0,
  'Informal letters to friends and family end warmly - "Yours sincerely", "Your friend", etc.'),
 ('Which features MUST a formal letter have?',
  ['Writer\u2019s address, date, recipient\u2019s designation and address, salutation, heading, closing', 'Only a greeting and signature', 'A poem in the middle', 'The writer\u2019s address only'], 0,
  'Missing any required feature costs format marks: two addresses, date, Dear Sir/Madam, a heading, and Yours faithfully.'),
 ('An informal letter is written to...', ['a friend or family member', 'a government official', 'a company manager', 'a newspaper editor'], 0,
  'Informal means personal - friends, parents, siblings - so the tone may be relaxed and friendly.'),
 ('How should an article or debate speech begin?', ['by greeting the audience (e.g. "Mr Chairman, ladies and gentlemen")', 'with the writer\u2019s address', 'with "Dear Sir"', 'with the date only'], 0,
  'Articles, speeches and debates address their audience first - that greeting is part of the required format.'),
 ('The tone of a formal letter should be...', ['polite and businesslike, without slang or contractions', 'full of jokes and slang', 'emotional and dramatic', 'poetic'], 0,
  'Formal writing avoids contractions (don\u2019t), slang and over-familiarity - clear, polite and to the point.'),
 ('Which is a good closing line for a debate speech?', ['"I hope I have been able to convince you, and not confuse you."', '"Yours faithfully."', '"Write back soon."', '"Your friend in need."'], 0,
  'Debates end by thanking and persuading the audience - not with letter closings.'),
 ('What comes first in a formal letter?', ['the writer\u2019s address and the date', 'the recipient\u2019s address', 'the heading', 'the salutation'], 0,
  'Order: your address top right, date under it, then the recipient\u2019s designation and address, salutation, heading, body.'),
 ('The salutation of an informal letter could be...', ['"Dear Musa,"', '"Dear Sir/Madam,"', '"The Manager,"', '"To whom it may concern,"'], 0,
  'Informal salutations use the person\u2019s name - Dear Musa, Dear Mum. "Dear Sir/Madam" belongs to formal letters.'),
 ('A speech for an occasion should mainly...', ['suit its audience and purpose, using rhetorical devices', 'list facts without order', 'copy a letter format', 'avoid any audience address'], 0,
  'Speeches live or die by audience awareness: questions, repetition and tripling keep listeners engaged.'),
], cards=[
 ('Describe the full layout of a formal letter.',
  'Writer\u2019s address (top right) and date; recipient\u2019s designation and address (left); salutation "Dear Sir/Madam,"; a heading in capitals or underlined; the body in paragraphs; closing "Yours faithfully," with signature and full name.'),
 ('How do you open and close an article, speech or debate?',
  'Open by addressing the audience ("Mr Chairman, ladies and gentlemen") and stating your position. Close by summing up and persuading - "I hope I have convinced you..." - then thank the audience.'),
])

fill('English Language', 'Sentence Types, Clauses & Phrases', quiz=[
 ('A clause must contain...', ['a subject and a verb', 'only a verb', 'a conjunction', 'a preposition'], 0,
  'A clause is any group of words with a subject doing a verb: "she laughed" is a clause.'),
 ('A phrase differs from a clause because a phrase has...', ['no subject-verb pair', 'two subjects', 'no words', 'a subordinating conjunction'], 0,
  '"In the morning" and "the tall man" are phrases - groups of words without a subject-verb pair.'),
 ('A simple sentence contains...', ['one independent clause', 'two independent clauses', 'one independent and one dependent clause', 'no verb'], 0,
  'One subject-verb unit, however long: "The tired farmer slept" is a simple sentence.'),
 ('A compound sentence contains...', ['two or more independent clauses joined by a coordinator', 'one dependent clause only', 'no conjunction', 'only phrases'], 0,
  'Two full sentences joined by and, but, or, so: "The rain stopped, and the match resumed."'),
 ('A complex sentence contains...', ['one independent clause and at least one dependent clause', 'only dependent clauses', 'two independent clauses and a coordinator', 'no subject'], 0,
  'The dependent clause cannot stand alone: "Although it rained, we played football."'),
 ('A sentence with both compound and complex structure is called...', ['compound-complex', 'simple', 'compound only', 'complex only'], 0,
  'Two independent clauses plus at least one dependent clause makes it compound-complex.'),
 ('Which of these is a subordinating conjunction?', ['because', 'and', 'but', 'so'], 0,
  'Because, although, since, if and when start dependent clauses. And, but, so are coordinators (FANBOYS).'),
 ('A relative clause usually begins with...', ['who, which or that', 'and, but or so', 'in, on or at', 'yes or no'], 0,
  'Relative clauses describe a noun: "the boy WHO won", "the book THAT I read".'),
 ('"Although it rained, we played." is a...', ['complex sentence', 'simple sentence', 'compound sentence', 'phrase'], 0,
  '"Although it rained" is dependent; "we played" is independent - one of each makes it complex.'),
 ('The coordinating conjunctions are remembered by...', ['FANBOYS (for, and, nor, but, or, yet, so)', 'SOH CAH TOA', 'BODMAS', 'MR NIGER D'], 0,
  'FANBOYS: For, And, Nor, But, Or, Yet, So - the seven words that join equal clauses.'),
], cards=[
 ('What is the difference between a phrase and a clause?',
  'A clause has a subject and a verb ("she sang"); a phrase is a meaningful group of words without that pair ("in the morning", "the tall man"). Every clause contains a phrase-like structure, never the reverse.'),
 ('Name the four sentence types with examples.',
  'Simple - one independent clause: "Birds sing." Compound - two independent clauses joined by a coordinator: "Birds sing, and dogs bark." Complex - independent + dependent: "When dawn broke, birds sang." Compound-complex - both structures combined.'),
 ('How do subordinating conjunctions differ from coordinating ones?',
  'Coordinators (FANBOYS) join EQUAL clauses. Subordinators (because, although, if, when, since) introduce a DEPENDENT clause that leans on the main clause for its meaning.'),
])

# ================== ENGLISH SS3 ==================
fill('English Language', 'Direct & Indirect (Reported) Speech', quiz=[
 ('Report: "I am tired," he said. He said that he ___ tired.', ['was', 'is', 'has been', 'will be'], 0,
  'Present simple shifts back to past simple in reported speech: am becomes was.'),
 ('In reported speech, tenses generally...', ['shift one step back into the past', 'stay exactly the same', 'move forward', 'become continuous'], 0,
  'Present becomes past, past becomes past perfect, will becomes would - the backshift rule.'),
 ('In reported speech, "tomorrow" becomes...', ['the next day / the following day', 'yesterday', 'today', 'last day'], 0,
  'Time words shift with the change of viewpoint: tomorrow becomes the next day or the following day.'),
 ('In reported speech, "here" becomes...', ['there', 'everywhere', 'nowhere', 'somewhere else entirely'], 0,
  'Place words shift too: here becomes there, this becomes that.'),
 ('Report: "Where are you going?" She asked me where I ___.', ['was going', 'am going', 'went going', 'going'], 0,
  'Reported questions use statement order - subject before verb - and no question mark: where I was going.'),
 ('Report: "Sit down," the teacher said. The teacher told me ___ down.', ['to sit', 'sit', 'that I sit', 'sitting'], 0,
  'Commands become infinitives: told/ordered/commanded someone TO do something.'),
 ('In reported speech, "this" usually becomes...', ['that', 'these', 'those ones always', 'it is'], 0,
  'Near-pointing words move away: this becomes that, these becomes those.'),
 ('Pronoun changes in reported speech depend on...', ['who is speaking to whom', 'the length of the sentence', 'the tense only', 'the punctuation'], 0,
  'I may become he, she, we or they depending on who reported whose words - logic, not rules, decides.'),
 ('Which reported speech keeps its original tense?', ['a universal truth such as "the sun rises in the east"', 'a personal plan', 'a command', 'a question about yesterday'], 0,
  'Permanent truths do not backshift: he said the sun RISES in the east remains correct.'),
 ('A reported yes/no question is introduced by...', ['if or whether', 'that only', 'what', 'which'], 0,
  '"Are you coming?" becomes He asked IF (or WHETHER) I was coming.'),
], cards=[
 ('State the rules for tense backshift in reported speech.',
  'Present simple to past simple; present continuous to past continuous; past simple and present perfect to past perfect; will to would; can to could; may to might; must to had to. Universal truths keep their tense.'),
 ('How do time and place words change in reported speech?',
  'now to then, today to that day, yesterday to the day before, tomorrow to the next day, here to there, this to that, these to those, ago to before.'),
])

fill('English Language', 'Phrasal Verbs, Prepositions & Register', quiz=[
 ('"Look after" means to...', ['take care of', 'search for', 'ignore', 'look backwards'], 0,
  'Look after = take care of: "She looks after her younger brother."'),
 ('"Put off" means to...', ['postpone', 'switch off', 'extinguish', 'wear'], 0,
  'Put off = delay or postpone: "The match was put off until Saturday."'),
 ('"Give up" means to...', ['stop doing something', 'hand in homework', 'shout loudly', 'give a gift'], 0,
  'Give up = quit or stop trying: "He gave up smoking last year."'),
 ('Complete: "She was congratulated ___ her success."', ['on', 'for', 'with', 'at'], 0,
  'Congratulate takes ON: congratulated on her success - fixed pairs must be memorised.'),
 ('Complete: "He is afraid ___ dogs."', ['of', 'from', 'with', 'by'], 0,
  'Afraid OF - a fixed prepositional pair.'),
 ('Complete: "Success depends ___ hard work."', ['on', 'in', 'at', 'from'], 0,
  'Depend ON (or upon) - one of the pairs JAMB loves to test.'),
 ('"Run out of" means to...', ['use up a supply completely', 'jog outside', 'escape from', 'hide something'], 0,
  'We ran out of sugar = there is no sugar left.'),
 ('Which word is the more FORMAL choice?', ['purchase', 'buy', 'grab', 'get hold of'], 0,
  'Register is the level of formality: purchase (formal) vs buy (neutral) vs grab (informal).'),
 ('Complete: "This bag belongs ___ me."', ['to', 'for', 'with', 'at'], 0,
  'Belong TO - a fixed pair, like listen to and agree with.'),
 ('"Carry out" means to...', ['perform or conduct', 'transport outside', 'lift up', 'remove'], 0,
  'Carry out an experiment, a plan, an order = perform it.'),
], cards=[
 ('What is a phrasal verb? Give four examples.',
  'A verb plus a particle (adverb or preposition) whose combined meaning differs from the verb alone: look after (take care of), put off (postpone), give up (quit), run out of (exhaust a supply).'),
 ('List fixed preposition pairs to memorise.',
  'accused OF, afraid OF, belong TO, congratulated ON, depend ON, interested IN, good AT, married TO, apologise FOR, prevent FROM. They follow no logic - learn them as pairs.'),
])

fill('English Language', 'Literary Appreciation: Prose, Drama & Poetry', quiz=[
 ('Prose is writing that...', ['uses ordinary sentences and paragraphs, like novels and short stories', 'must rhyme', 'is only performed on stage', 'has no characters'], 0,
  'Prose = novels, novellas and short stories - flowing sentences and paragraphs, not verse.'),
 ('Drama is mainly distinguished by...', ['dialogue and stage directions, written to be performed', 'rhyming couplets', 'a single narrator only', 'having no plot'], 0,
  'Plays live in dialogue and action: characters speak directly, and stage directions guide performance.'),
 ('Poetry is characterised by...', ['rhythm, imagery and stanzas', 'paragraphs of prose', 'stage directions', 'only dialogue'], 0,
  'Poems compress meaning into lines and stanzas, using rhythm, sound patterns and imagery.'),
 ('The main character of a story is the...', ['protagonist', 'antagonist', 'narrator only', 'chorus'], 0,
  'The protagonist drives the action; the antagonist opposes them.'),
 ('The character who opposes the hero is the...', ['antagonist', 'protagonist', 'foil always', 'narrator'], 0,
  'The antagonist works against the protagonist - a person, a society, or even nature.'),
 ('The setting of a story is...', ['its time and place', 'its moral lesson', 'its title', 'its climax'], 0,
  'Setting = where and when the action happens; it shapes mood and what characters can do.'),
 ('The central idea or message of a work is its...', ['theme', 'plot', 'setting', 'diction'], 0,
  'Theme is the big idea - love, betrayal, justice - that the story explores.'),
 ('The sequence of events in a story is the...', ['plot', 'theme', 'tone', 'imagery'], 0,
  'Plot is the organised chain of events: exposition, rising action, climax, resolution.'),
 ('A tragedy typically ends in...', ['the downfall or death of the main character', 'a wedding', 'a lucky escape', 'a joke'], 0,
  'Tragedy traces a great character\u2019s fall, often through a fatal flaw; comedy ends happily, often in marriage.'),
 ('A strong literature answer should...', ['make a point, give evidence from the text, and explain it', 'retell the whole story', 'give only your feelings', 'copy the question'], 0,
  'Point - Evidence - Explanation: state your claim, quote or cite the text, then show how it proves your claim.'),
], cards=[
 ('Compare prose, drama and poetry.',
  'Prose: sentences and paragraphs (novels, short stories). Drama: dialogue and stage directions, written for performance. Poetry: lines and stanzas with rhythm, sound devices and concentrated imagery.'),
 ('Define plot, theme, setting, protagonist and antagonist.',
  'Plot: the sequence of events. Theme: the central idea or message. Setting: time and place. Protagonist: the main character. Antagonist: whoever or whatever opposes the protagonist.'),
 ('How should you answer a literature question?',
  'Use Point-Evidence-Explanation: make a clear claim, support it with a quotation or precise reference, then explain how the evidence proves the point. Always answer the exact question asked.'),
])

# ================== PHYSICS SS1 ==================
fill('Physics', 'Measurement, Units & Vectors', quiz=[
 ('What is the SI unit of length?', ['metre', 'centimetre', 'kilogram', 'newton'], 0,
  'The metre (m) is the SI base unit of length; centimetres and kilometres are derived from it.'),
 ('How many SI base quantities are there?', ['7', '5', '6', '10'], 0,
  'Seven: length, mass, time, electric current, temperature, luminous intensity and amount of substance.'),
 ('Which of these is a vector quantity?', ['velocity', 'speed', 'distance', 'mass'], 0,
  'Velocity has both magnitude and direction; speed, distance and mass have magnitude only.'),
 ('A scalar quantity has...', ['magnitude only', 'direction only', 'magnitude and direction', 'units of newtons'], 0,
  'Scalars (mass, time, temperature, energy) need only a size and a unit.'),
 ('What is the SI unit of time?', ['second', 'minute', 'hour', 'day'], 0,
  'The second (s) is the base unit - minutes and hours are multiples of it.'),
 ('Two perpendicular forces of 3 N and 4 N act on a body. Their resultant is...', ['5 N', '7 N', '1 N', '12 N'], 0,
  'Perpendicular vectors add by Pythagoras: \u221a(3\u00b2 + 4\u00b2) = \u221a25 = 5 N.'),
 ('Which instrument measures the density of a liquid directly?', ['hydrometer', 'thermometer', 'barometer', 'ammeter'], 0,
  'A hydrometer floats at a depth that depends on the liquid\u2019s density - the scale reads it off.'),
 ('What is the SI unit of mass?', ['kilogram', 'newton', 'gram', 'joule'], 0,
  'The kilogram (kg) is the base unit of mass. Weight, being a force, is measured in newtons.'),
 ('Displacement differs from distance because displacement is...', ['a straight-line vector from start to finish', 'the whole path travelled', 'always larger', 'a scalar'], 0,
  'Distance counts every step of the path; displacement is only the straight arrow from start to end, with direction.'),
 ('Vectors are represented by arrows because the arrow shows...', ['magnitude by length and direction by the arrowhead', 'magnitude only', 'speed only', 'nothing physical'], 0,
  'A longer arrow means a bigger vector; the head points the way - both pieces of information in one symbol.'),
], cards=[
 ('List the seven SI base quantities and their units.',
  'Length (metre), mass (kilogram), time (second), electric current (ampere), temperature (kelvin), luminous intensity (candela) and amount of substance (mole).'),
 ('Distinguish scalars from vectors, with examples.',
  'Scalars have magnitude only - mass, time, speed, distance, energy, temperature. Vectors have magnitude AND direction - velocity, displacement, force, acceleration, momentum.'),
 ('How do you find the resultant of two perpendicular vectors?',
  'Use Pythagoras: R = \u221a(P\u00b2 + Q\u00b2). For 3 N and 4 N at right angles, R = \u221a(9 + 16) = 5 N, acting at an angle tan\u207b\u00b9(Q/P) from the first.'),
])

fill('Physics', 'Motion & Newton\u2019s Laws', quiz=[
 ('The equation v = u + at applies to...', ['uniformly accelerated motion in a straight line', 'circular motion only', 'motion at constant speed only', 'projectiles horizontally'], 0,
  'The three motion equations all assume constant (uniform) acceleration along a straight line.'),
 ('Newton\u2019s first law is also called the law of...', ['inertia', 'gravity', 'momentum', 'energy'], 0,
  'A body keeps its state of rest or uniform motion unless a net force acts - that stubbornness is inertia.'),
 ('Newton\u2019s second law is written as...', ['F = ma', 'F = mv', 'F = m/a', 'F = a/m'], 0,
  'Force equals mass times acceleration - the bigger the mass or the acceleration, the bigger the force needed.'),
 ('Newton\u2019s third law states that action and reaction are...', ['equal and opposite, on different bodies', 'equal and in the same direction', 'unequal but opposite', 'equal and on the same body'], 0,
  'Every action has an equal, opposite reaction acting on a DIFFERENT object - that is why they never cancel.'),
 ('What is the SI unit of force?', ['newton', 'joule', 'watt', 'pascal'], 0,
  'One newton (N) is the force that gives a 1 kg mass an acceleration of 1 m/s\u00b2.'),
 ('Deceleration (retardation) is simply...', ['negative acceleration', 'zero acceleration', 'constant velocity', 'negative velocity'], 0,
  'Slowing down is acceleration pointing opposite to the motion - negative acceleration.'),
 ('The area under a velocity-time graph represents...', ['distance travelled', 'acceleration', 'speed', 'force'], 0,
  'Velocity x time = distance, so the area under the graph is the distance covered.'),
 ('The gradient (slope) of a velocity-time graph gives...', ['acceleration', 'distance', 'speed only', 'displacement'], 0,
  'Change in velocity divided by time is acceleration - exactly what the slope measures.'),
 ('A body at rest remains at rest until...', ['an unbalanced external force acts on it', 'gravity is removed', 'it is heated', 'its mass doubles'], 0,
  'That is inertia - the first law. Only a net (unbalanced) force changes the state of motion.'),
 ('A car starts from rest and accelerates at 2 m/s\u00b2 for 5 s. Its final velocity is...', ['10 m/s', '2.5 m/s', '7 m/s', '25 m/s'], 0,
  'v = u + at = 0 + (2 x 5) = 10 m/s.'),
], cards=[
 ('State the three equations of uniformly accelerated motion.',
  'v = u + at; s = ut + \u00bd at\u00b2; v\u00b2 = u\u00b2 + 2as - where u is initial velocity, v final, a acceleration, t time and s distance.'),
 ('State Newton\u2019s three laws of motion.',
  'First: a body stays at rest or in uniform motion unless a net force acts (inertia). Second: F = ma. Third: to every action there is an equal and opposite reaction on a different body.'),
])

fill('Physics', 'Work, Energy & Power', quiz=[
 ('Work is done when...', ['a force moves its point of application in the force\u2019s direction', 'a force is applied without movement', 'energy disappears', 'a body is merely held still'], 0,
  'W = F x d, and d must be along the force. Pushing a wall that never moves does no work.'),
 ('What is the SI unit of work?', ['joule', 'newton', 'watt', 'pascal'], 0,
  'One joule is the work done when 1 N moves through 1 m. Energy shares the same unit.'),
 ('Power is defined as...', ['work done per unit time', 'force times distance', 'energy times time', 'mass times acceleration'], 0,
  'P = W/t. Its unit is the watt: one joule per second.'),
 ('The potential energy of a raised body is given by...', ['mgh', '\u00bd mv\u00b2', 'mv', 'Fd/t'], 0,
  'P.E. = mass x gravity x height - energy stored by position above the ground.'),
 ('The kinetic energy of a moving body is...', ['\u00bd mv\u00b2', 'mgh', 'mv', 'm/v'], 0,
  'K.E. = half mass times velocity squared - it grows with the square of speed.'),
 ('The principle of conservation of energy says energy...', ['can change form but cannot be created or destroyed', 'is always lost as heat', 'grows with use', 'exists only in machines'], 0,
  'The total energy of a closed system is constant - it merely transforms from one form to another.'),
 ('A machine does 200 J of work in 4 s. Its power is...', ['50 W', '800 W', '204 W', '196 W'], 0,
  'P = W/t = 200/4 = 50 W.'),
 ('Energy and work are both measured in...', ['joules', 'watts', 'newtons', 'kilograms'], 0,
  'The joule is the unit of both - power (joules per second) is measured in watts.'),
 ('How much work is done lifting a 10 kg mass through 2 m? (g = 10 m/s\u00b2)', ['200 J', '20 J', '5 J', '120 J'], 0,
  'W = mgh = 10 x 10 x 2 = 200 J - the work equals the potential energy gained.'),
 ('A falling body converts its potential energy mainly into...', ['kinetic energy', 'chemical energy', 'sound only', 'more potential energy'], 0,
  'As height drops, P.E. falls and K.E. rises - the classic conservation-of-energy exchange.'),
], cards=[
 ('Give the formulas for work and power, with their units.',
  'Work W = F x d (joules), where d is measured along the force. Power P = W/t (watts) - the rate of doing work, one joule per second.'),
 ('State the principle of conservation of energy.',
  'Energy cannot be created or destroyed, only transformed from one form to another. A falling ball trades potential energy for kinetic energy, but the total stays constant.'),
])

fill('Physics', 'Equilibrium of Forces & Moments', quiz=[
 ('A body is in equilibrium when...', ['the resultant force AND the resultant moment are both zero', 'only the resultant force is zero', 'only the resultant moment is zero', 'it is at rest only'], 0,
  'Both conditions are needed: no net force (no sliding) and no net moment (no turning).'),
 ('The moment of a force equals...', ['force x perpendicular distance from the pivot', 'force x mass', 'force / distance', 'force + distance'], 0,
  'Moment = F x d, where d is the PERPENDICULAR distance from the pivot to the line of the force.'),
 ('What is the unit of a moment?', ['N m', 'N/m', 'J/s', 'kg m'], 0,
  'Newton-metre. (Same dimensions as a joule, but a moment is a turning effect, not energy.)'),
 ('The principle of moments states that in equilibrium...', ['total clockwise moments equal total anticlockwise moments', 'all moments are zero individually', 'clockwise moments are larger', 'moments always cancel gravity'], 0,
  'For a balanced body, the turning effects in each direction must be equal and opposite.'),
 ('The centre of gravity of a body is the point where...', ['its whole weight appears to act', 'its mass disappears', 'it can never balance', 'friction acts'], 0,
  'Every particle\u2019s weight combines as if concentrated at that single point.'),
 ('Stability is increased by...', ['lowering the centre of gravity and widening the base', 'raising the centre of gravity', 'narrowing the base', 'reducing the mass only'], 0,
  'Racing cars are low and wide for exactly this reason - a low C.G. on a wide base is hard to topple.'),
 ('A cone balanced on its tip is in...', ['unstable equilibrium', 'stable equilibrium', 'neutral equilibrium', 'dynamic equilibrium'], 0,
  'The slightest tilt lowers its centre of gravity further, so it topples - unstable equilibrium.'),
 ('A 20 N weight 2 m from a pivot balances a 10 N weight placed...', ['4 m from the pivot on the other side', '2 m from the pivot', '1 m from the pivot', '20 m from the pivot'], 0,
  'Clockwise = anticlockwise: 20 x 2 = 10 x d, so d = 4 m.'),
 ('A ball resting on smooth level ground is in...', ['neutral equilibrium', 'stable equilibrium', 'unstable equilibrium', 'unstable motion'], 0,
  'Roll it and its centre of gravity stays at the same height - neither returns nor falls away: neutral.'),
 ('Why does a see-saw balance when equal children sit equal distances from the middle?', ['Their clockwise and anticlockwise moments are equal', 'Their masses cancel gravity', 'The plank has no weight', 'Friction holds them'], 0,
  'Equal force x equal distance on each side gives equal moments in opposite directions - equilibrium.'),
], cards=[
 ('State the two conditions for equilibrium.',
  'First: the resultant force in every direction is zero (the body does not slide). Second: the resultant moment about any point is zero (the body does not turn).'),
 ('Define the moment of a force and state the principle of moments.',
  'Moment = force x perpendicular distance from the pivot, in N m. The principle of moments: for a body in equilibrium, total clockwise moments = total anticlockwise moments.'),
 ('Explain centre of gravity and its link to stability.',
  'The centre of gravity is the point where the whole weight appears to act. A body is stable when a vertical line from its C.G. falls inside its base - low C.G. plus wide base means maximum stability.'),
])

# ================== PHYSICS SS2 ==================
fill('Physics', 'Centripetal Force & Circular Motion', quiz=[
 ('In uniform circular motion, the centripetal force acts...', ['towards the centre of the circle', 'away from the centre', 'along the direction of motion', 'straight upwards'], 0,
  'Centripetal means "centre-seeking" - it constantly pulls the body inwards, bending its path into a circle.'),
 ('The formula for centripetal force is...', ['mv\u00b2/r', 'mr/v\u00b2', 'mvr', 'v\u00b2r/m'], 0,
  'F = mv\u00b2/r - bigger mass or speed demands more force; a wider circle needs less.'),
 ('For a car turning on a flat road, the centripetal force is provided by...', ['friction between tyres and road', 'gravity', 'the engine', 'air resistance'], 0,
  'Tyre-road friction supplies the inward pull - which is why oily or icy roads make skidding likely.'),
 ('For a satellite orbiting the Earth, the centripetal force is...', ['gravity', 'friction', 'engine thrust', 'magnetism'], 0,
  'The Earth\u2019s gravitational pull is the invisible string that keeps the satellite curving round.'),
 ('For a stone whirled on a string, the centripetal force is the...', ['tension in the string', 'weight of the stone', 'friction of air', 'stone\u2019s inertia'], 0,
  'The string pulls the stone inwards; that tension is the centripetal force.'),
 ('If the string snaps while a stone is being whirled, the stone flies off...', ['tangentially to the circle', 'towards the centre', 'straight up', 'backwards along the radius'], 0,
  'With no inward force left, the stone continues in a straight line along the tangent - Newton\u2019s first law.'),
 ('If the speed of a body in circular motion is doubled, the centripetal force needed becomes...', ['four times larger', 'twice as large', 'half as large', 'unchanged'], 0,
  'F = mv\u00b2/r depends on the SQUARE of speed: 2\u00b2 = 4 times the force.'),
 ('Increasing the radius of the circle (speed constant) makes the required centripetal force...', ['smaller', 'larger', 'unchanged', 'zero'], 0,
  'The radius sits in the denominator: F = mv\u00b2/r, so a wider curve needs less inward force.'),
 ('Centripetal force is measured in...', ['newtons', 'joules', 'watts', 'pascals'], 0,
  'It is a force, so its unit is the newton (kg m/s\u00b2).'),
 ('The centripetal acceleration of a body moving at speed v in a circle of radius r is...', ['v\u00b2/r', 'mv\u00b2/r', 'v/r\u00b2', 'vr'], 0,
  'a = v\u00b2/r, directed towards the centre. Multiply by m to get the force F = mv\u00b2/r.'),
], cards=[
 ('What is centripetal force? Give three sources of it.',
  'The inward force that keeps a body moving in a circle. Sources: tension (stone on a string), friction (car rounding a bend), gravity (satellite orbiting Earth), and the normal reaction (roller-coaster loop).'),
 ('Why does circular motion need a force even at constant speed?',
  'Velocity includes direction, and in a circle the direction changes every instant. A changing velocity means acceleration, and by Newton\u2019s second law acceleration requires a net force - pointing to the centre.'),
])

fill('Physics', 'Heat Energy & Thermal Expansion', quiz=[
 ('Heat transfer by conduction occurs mainly in...', ['solids', 'liquids only', 'gases only', 'a vacuum'], 0,
  'In solids, vibrating particles and free electrons pass the energy along - metals conduct best.'),
 ('Convection transfers heat through...', ['liquids and gases by the movement of the fluid itself', 'solids only', 'empty space', 'radiation waves'], 0,
  'Warmed fluid expands, becomes lighter and rises while cooler fluid sinks - a convection current.'),
 ('Radiation is unique because it...', ['needs no material medium', 'works only in solids', 'needs convection first', 'slows in a vacuum'], 0,
  'Infrared radiation crosses empty space - that is how the Sun\u2019s heat reaches the Earth.'),
 ('A vacuum flask keeps drinks hot because it minimises...', ['conduction, convection and radiation all together', 'conduction only', 'evaporation only', 'radiation only'], 0,
  'The vacuum stops conduction and convection, the silvered walls reflect radiation, and the stopper blocks escaping vapour.'),
 ('When most solids are heated, they...', ['expand', 'contract', 'stay exactly the same', 'evaporate'], 0,
  'Particles vibrate more vigorously and need more room - the solid expands in every direction.'),
 ('Gaps are left between railway rails to...', ['allow for expansion on hot days', 'save metal', 'let water drain', 'reduce noise'], 0,
  'Without gaps, expanding rails would buckle in the heat - the gaps absorb the growth.'),
 ('Water behaves unusually because it expands when...', ['cooled below 4\u00b0C and frozen', 'heated from 20 to 30\u00b0C', 'boiled into steam only', 'mixed with salt'], 0,
  'Below 4\u00b0C water expands as it cools, so ice floats - which is why lakes freeze from the top down and fish survive.'),
 ('In solids, heat is conducted by...', ['particle vibrations and free electrons', 'bulk movement of the material', 'electromagnetic waves only', 'convection currents'], 0,
  'Particles pass vibrations along, and in metals the free electrons carry energy rapidly - which is why metals feel cold and heat fast.'),
 ('Dark, dull surfaces are the best...', ['absorbers and emitters of heat radiation', 'reflectors of radiation', 'insulators against conduction', 'conductors of electricity'], 0,
  'Black, matt surfaces absorb and radiate heat best; shiny, light surfaces reflect it - which is why desert robes are often white.'),
 ('A bimetallic strip bends when heated because the two metals...', ['expand by different amounts', 'melt at once', 'contract equally', 'change colour'], 0,
  'The faster-expanding metal forces the strip to curve - the principle behind thermostats and fire alarms.'),
], cards=[
 ('Name the three methods of heat transfer, with an example of each.',
  'Conduction - a metal spoon heating in soup (solids). Convection - hot water rising in a kettle (fluids). Radiation - heat from the Sun or a fire crossing empty space (no medium needed).'),
 ('Explain how a vacuum flask reduces heat loss.',
  'The vacuum between the double walls stops conduction and convection; silvered inner surfaces reflect radiation back; the insulating stopper blocks escaping vapour and conduction through the neck - all three transfer routes attacked at once.'),
])

fill('Physics', 'Current Electricity & Ohm\u2019s Law', quiz=[
 ('Ohm\u2019s law states that...', ['V = IR', 'V = I/R', 'I = VR', 'R = VI'], 0,
  'Voltage equals current times resistance, provided the temperature stays constant.'),
 ('The unit of electrical resistance is the...', ['ohm', 'ampere', 'volt', 'watt'], 0,
  'Resistance is measured in ohms (\u03a9); one ohm gives one ampere per volt.'),
 ('An ammeter is connected in a circuit...', ['in series', 'in parallel', 'either way', 'outside the circuit'], 0,
  'It must carry the full current being measured, so it sits in line - in series - with very low resistance.'),
 ('A voltmeter is connected...', ['in parallel across the component', 'in series', 'in place of the cell', 'with the switch'], 0,
  'It compares the energy between two points, so it bridges the component - in parallel - with very high resistance.'),
 ('For resistors in series, the total resistance is...', ['R\u2081 + R\u2082 + R\u2083...', 'the sum of reciprocals', 'the largest resistor only', 'the product of all'], 0,
  'Series resistances simply add - the current faces each resistor one after another.'),
 ('Three 2 \u03a9 resistors connected in series give a total of...', ['6 \u03a9', '2/3 \u03a9', '8 \u03a9', '1.5 \u03a9'], 0,
  '2 + 2 + 2 = 6 \u03a9.'),
 ('The SI unit of electric current is the...', ['ampere', 'volt', 'coulomb', 'joule'], 0,
  'Current is the flow of charge per second, measured in amperes (A).'),
 ('A 12 V battery drives current through a 4 \u03a9 resistor. The current is...', ['3 A', '48 A', '8 A', '0.33 A'], 0,
  'I = V/R = 12/4 = 3 A.'),
 ('Electrical energy consumed is calculated with...', ['E = VIt', 'E = V/I', 'E = I/V', 'E = VRI'], 0,
  'Energy = voltage x current x time (joules); VIt with t in seconds. Power P = VI follows from it.'),
 ('Good conductors of electricity have...', ['very low resistance', 'very high resistance', 'no electrons', 'insulating coatings'], 0,
  'Copper and aluminium offer little opposition to current, which is why wires are made from them.'),
], cards=[
 ('State Ohm\u2019s law and define resistance.',
  'At constant temperature, the current through a conductor is directly proportional to the voltage across it: V = IR. Resistance (ohms) measures how strongly the material opposes the current.'),
 ('State the rules for resistors in series and in parallel.',
  'Series: resistances add - R = R\u2081 + R\u2082. Parallel: reciprocals add - 1/R = 1/R\u2081 + 1/R\u2082 (for two: R = R\u2081R\u2082/(R\u2081 + R\u2082)). Parallel always gives less than the smallest resistor.'),
])

fill('Physics', 'Gravitational Field & Weightlessness', quiz=[
 ('Newton\u2019s law of universal gravitation says the force between two masses is...', ['directly proportional to the product of the masses and inversely proportional to the square of their separation', 'directly proportional to the distance between them', 'independent of the masses', 'inversely proportional to the masses'], 0,
  'F = Gm\u2081m\u2082/r\u00b2 - bigger masses attract more strongly, and doubling the distance quarters the force.'),
 ('Weight is calculated as...', ['mg', 'm/g', 'g/m', 'm + g'], 0,
  'W = mass x gravitational field strength. On Earth g \u2248 9.8 (about 10) N/kg.'),
 ('The value of g on the Earth\u2019s surface is approximately...', ['9.8 m/s\u00b2', '98 m/s\u00b2', '1.6 m/s\u00b2', '3.7 m/s\u00b2'], 0,
  'About 9.8 m/s\u00b2 (often rounded to 10 in exams). The Moon\u2019s g is only about 1.6 m/s\u00b2.'),
 ('Mass is measured in kilograms; weight is measured in...', ['newtons', 'kilograms', 'joules', 'pascals'], 0,
  'Weight is a force (W = mg), so it takes the unit of force - the newton.'),
 ('If the distance between two masses is doubled, the gravitational force becomes...', ['one-quarter', 'half', 'double', 'four times'], 0,
  'The inverse-square law: 2\u00b2 = 4, so the force drops to 1/4.'),
 ('A satellite stays in orbit because...', ['gravity supplies the centripetal force it needs', 'there is no gravity in space', 'its engines push continuously', 'air lifts it'], 0,
  'The satellite is forever falling towards Earth while its sideways speed carries it past - gravity bends its path into an orbit.'),
 ('Escape velocity is...', ['the minimum speed needed to break free of a planet\u2019s gravity', 'the speed of any satellite', 'the orbital speed at all heights', 'the landing speed of rockets'], 0,
  'About 11.2 km/s from the Earth\u2019s surface - fast enough that gravity can never pull the craft back.'),
 ('Astronauts in orbit feel weightless because...', ['they and their craft are in continuous free fall together', 'there is no gravity in orbit', 'their mass becomes zero', 'air pressure cancels gravity'], 0,
  'Gravity is still strong up there! Everything falls at the same rate, so nothing presses on anything - the sensation of weight disappears.'),
 ('Which statement is correct?', ['Mass is constant everywhere; weight changes with gravity', 'Weight is constant everywhere; mass changes', 'Both are constant everywhere', 'Both change with location only'], 0,
  'Mass is the amount of matter - fixed. Weight = mg depends on g, so you weigh less on the Moon while your mass is unchanged.'),
 ('An astronaut on the Moon weighs less than on Earth because...', ['the Moon\u2019s gravitational field is weaker', 'his mass decreased', 'the Moon has no gravity', 'his volume shrank'], 0,
  'The Moon\u2019s g is about one-sixth of Earth\u2019s, so W = mg falls to a sixth - the mass never changed.'),
], cards=[
 ('State Newton\u2019s law of universal gravitation.',
  'Every two masses attract each other with a force F = Gm\u2081m\u2082/r\u00b2 - proportional to the product of the masses and inversely proportional to the square of the distance between them.'),
 ('Distinguish mass from weight.',
  'Mass (kg) is the quantity of matter and never changes. Weight (N) is the gravitational pull on that mass, W = mg, so it changes from planet to planet - you weigh a sixth as much on the Moon.'),
 ('Why do orbiting astronauts experience weightlessness?',
  'They are not beyond gravity - they are falling freely around the Earth together with their spacecraft. With everything accelerating at the same rate, no support force presses on them, so they feel weightless.'),
])

# ================== PHYSICS SS3 ==================
fill('Physics', 'Simple Harmonic Motion & Waves', quiz=[
 ('The wave equation connecting speed, frequency and wavelength is...', ['v = f\u03bb', 'v = f/\u03bb', 'f = v\u03bb', '\u03bb = vf'], 0,
  'Speed = frequency x wavelength. If 50 waves of 2 m pass each second, the wave travels 100 m/s.'),
 ('In a transverse wave, the vibrations are...', ['perpendicular to the direction of travel', 'parallel to the direction of travel', 'circular', 'random'], 0,
  'Light and ripples on water are transverse - the disturbance crosses the path of travel.'),
 ('Sound waves in air are...', ['longitudinal', 'transverse', 'electromagnetic', 'stationary only'], 0,
  'Air vibrates back and forth along the direction the sound travels - compressions and rarefactions.'),
 ('The SI unit of frequency is the...', ['hertz', 'metre', 'second', 'newton'], 0,
  'One hertz (Hz) is one complete vibration per second.'),
 ('The amplitude of a wave is its...', ['maximum displacement from the rest position', 'distance between crests', 'number of vibrations per second', 'speed'], 0,
  'Bigger amplitude means more energy - a louder sound or a brighter light.'),
 ('The period T of a wave is related to frequency by...', ['T = 1/f', 'T = f', 'T = f\u00b2', 'T = 2f'], 0,
  'Period is the time for one full vibration - the reciprocal of frequency.'),
 ('Which pair shows simple harmonic motion?', ['a pendulum and a mass on a spring', 'a car braking', 'a stone falling freely', 'water boiling'], 0,
  'Both swing to and fro about a fixed point with a restoring force - the classic SHM systems.'),
 ('A wave has frequency 50 Hz and wavelength 2 m. Its speed is...', ['100 m/s', '25 m/s', '52 m/s', '48 m/s'], 0,
  'v = f\u03bb = 50 x 2 = 100 m/s.'),
 ('Light is ___ while sound is ___.', ['transverse; longitudinal', 'longitudinal; transverse', 'transverse; transverse', 'longitudinal; longitudinal'], 0,
  'Light (an electromagnetic wave) is transverse; sound in air is longitudinal.'),
 ('The wavelength is the distance between...', ['two successive crests (or any two identical points)', 'a crest and the rest position', 'the top and bottom of a wave', 'two successive amplitudes'], 0,
  'One full wave pattern - crest to crest or trough to trough - is one wavelength, \u03bb.'),
], cards=[
 ('Distinguish transverse and longitudinal waves, with examples.',
  'Transverse: vibrations at right angles to travel - light, ripples on water, waves on a rope. Longitudinal: vibrations along the direction of travel - sound in air, compressions in a spring.'),
 ('Define amplitude, frequency, wavelength and period.',
  'Amplitude: maximum displacement from rest (energy carried). Frequency: vibrations per second (Hz). Wavelength \u03bb: distance between identical points on successive waves. Period: time for one vibration, T = 1/f.'),
])

fill('Physics', 'Atomic Structure, Radioactivity & Nuclear Energy', quiz=[
 ('An alpha particle is...', ['a helium nucleus with a +2 charge', 'a fast electron', 'an electromagnetic wave', 'a neutron'], 0,
  'Two protons plus two neutrons - a helium nucleus - carrying charge +2.'),
 ('A beta particle is...', ['a fast-moving electron', 'a helium nucleus', 'a photon', 'a proton'], 0,
  'Beta decay ejects an electron from the nucleus at high speed; charge -1.'),
 ('Gamma rays are...', ['electromagnetic waves with no charge', 'helium nuclei', 'electrons', 'protons'], 0,
  'Pure energy - very short-wavelength electromagnetic radiation, massless and uncharged.'),
 ('Which radiation is the most penetrating?', ['gamma', 'alpha', 'beta', 'all equal'], 0,
  'Gamma passes through paper, aluminium and needs thick lead or concrete to stop it.'),
 ('Which radiation is the most ionising?', ['alpha', 'gamma', 'beta', 'all equal'], 0,
  'Big, slow and doubly charged, alpha particles knock electrons off atoms most aggressively - but are stopped by paper.'),
 ('Half-life is the time taken for...', ['half of the radioactive atoms in a sample to decay', 'all atoms to decay', 'the sample to warm up', 'half the mass to evaporate'], 0,
  'After one half-life half the atoms remain; after two, a quarter; and so on.'),
 ('Isotopes of an element have...', ['the same number of protons but different numbers of neutrons', 'the same number of neutrons but different protons', 'different numbers of both', 'equal protons and neutrons always'], 0,
  'Same element (same proton number), different mass numbers - like carbon-12 and carbon-14.'),
 ('Nuclear fission is...', ['the splitting of a heavy nucleus into lighter ones', 'the joining of light nuclei', 'the emission of light', 'the melting of uranium'], 0,
  'A heavy nucleus (uranium-235) splits after absorbing a neutron, releasing energy and more neutrons.'),
 ('Nuclear fusion is the process that...', ['powers the Sun by joining light nuclei', 'splits uranium atoms', 'burns coal', 'charges batteries'], 0,
  'Hydrogen nuclei fuse into helium at tremendous temperature, releasing vast energy - the Sun\u2019s engine.'),
 ('A nuclear reactor produces energy through...', ['controlled fission of uranium', 'uncontrolled fusion', 'burning of radium', 'gamma-ray batteries'], 0,
  'Control rods absorb surplus neutrons so the fission chain reaction proceeds steadily, not explosively.'),
], cards=[
 ('Compare alpha, beta and gamma radiation.',
  'Alpha: helium nucleus, +2 charge, most ionising, stopped by paper. Beta: fast electron, -1 charge, medium penetration, stopped by a few mm of aluminium. Gamma: electromagnetic wave, no charge, least ionising, most penetrating - needs thick lead or concrete.'),
 ('Define half-life.',
  'The time taken for half of the radioactive atoms in a sample to decay (equivalently, for the activity to halve). Each isotope has its own fixed half-life, from fractions of a second to billions of years.'),
 ('Distinguish nuclear fission from fusion.',
  'Fission splits a heavy nucleus (uranium) into lighter ones - used in reactors and atomic bombs. Fusion joins light nuclei (hydrogen) into heavier ones - the process powering the Sun and the hydrogen bomb.'),
])

fill('Physics', 'Projectile Motion', quiz=[
 ('After launch, a projectile moves under the action of...', ['gravity alone (ignoring air resistance)', 'its engine', 'the throwing force continuously', 'friction only'], 0,
  'Once released, the only force is its weight - that is what makes the path curve.'),
 ('During flight, the horizontal velocity of a projectile...', ['remains constant', 'increases steadily', 'decreases steadily', 'becomes zero'], 0,
  'No horizontal force acts (air resistance ignored), so by Newton\u2019s first law the horizontal speed never changes.'),
 ('The vertical motion of a projectile has...', ['constant acceleration g downwards', 'constant velocity', 'zero acceleration', 'increasing acceleration'], 0,
  'Gravity pulls down with a steady g \u2248 9.8 m/s\u00b2 throughout the flight - up or down.'),
 ('A projectile achieves its maximum range when launched at...', ['45\u00b0', '30\u00b0', '60\u00b0', '90\u00b0'], 0,
  'At 45\u00b0 the balance of airtime and horizontal speed is optimal - range = u\u00b2/g at that angle.'),
 ('At the highest point of its path, a projectile\u2019s vertical velocity is...', ['zero', 'maximum', 'equal to u', 'g'], 0,
  'Rising stops and falling begins - at that instant the vertical component is zero (the horizontal component is unchanged).'),
 ('The path of a projectile is a...', ['parabola', 'straight line', 'circle', 'hyperbola'], 0,
  'Constant horizontal speed combined with uniformly accelerated vertical motion traces a parabola.'),
 ('The time of flight of a projectile depends on...', ['the vertical component of the launch velocity', 'the horizontal component only', 'the mass of the projectile', 'its colour'], 0,
  'Gravity acts vertically, so only u sin \u03b8 decides how long the projectile stays airborne.'),
 ('The horizontal and vertical motions of a projectile are...', ['independent of each other', 'always equal', 'opposite', 'linked by friction'], 0,
  'Each direction follows its own rules - the key idea that makes projectile problems solvable.'),
 ('A ball rolled off a table horizontally starts its flight with a vertical velocity of...', ['zero', 'u', 'g', '9.8 m/s'], 0,
  'The launch is purely horizontal, so the vertical component starts at 0 and grows as gravity pulls.'),
 ('The range R of a projectile launched at speed u and angle \u03b8 is...', ['u\u00b2 sin 2\u03b8 / g', 'u sin \u03b8 / g', 'u\u00b2 cos \u03b8 / g', '2u sin \u03b8 / g'], 0,
  'R = u\u00b2 sin 2\u03b8 / g - and since sin 2\u03b8 peaks at \u03b8 = 45\u00b0, that is the maximum-range angle.'),
], cards=[
 ('Why is the path of a projectile a parabola?',
  'Horizontally it moves at constant speed (no force); vertically it accelerates uniformly under gravity. Combining steady horizontal motion with constant downward acceleration traces a parabolic curve.'),
 ('What happens at the maximum height of a projectile?',
  'The vertical velocity is momentarily zero while the horizontal velocity stays unchanged, so the projectile still moves sideways. From there the vertical speed grows downwards and the projectile falls.'),
])

open(CUR, 'w').write(s)
print('eng+phys done; chars:', len(s))
