# deep_eng1d.py — English JSS1 deep lesson 4/4: Parts of Speech. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. The eight word families</h3>
            <p>Every English word belongs to one of eight <b>parts of speech</b> (word families) according to the JOB it does in a sentence: <b>noun</b> (names), <b>pronoun</b> (stands in for nouns), <b>verb</b> (action or state), <b>adjective</b> (describes nouns), <b>adverb</b> (describes verbs, adjectives or other adverbs), <b>preposition</b> (links a noun to the rest of the sentence), <b>conjunction</b> (joins ideas) and <b>interjection</b> (bursts of feeling). Learn the jobs, not long lists — then any word can be sorted in seconds.</p>
            <table>
              <tr><th>Family</th><th>Job</th><th>Examples</th></tr>
              <tr><td>Noun</td><td>names person, place, thing, idea</td><td>teacher, Lagos, book, honesty</td></tr>
              <tr><td>Pronoun</td><td>replaces a noun</td><td>he, she, it, they, someone, this</td></tr>
              <tr><td>Verb</td><td>action or state</td><td>run, eat, is, seem, have</td></tr>
              <tr><td>Adjective</td><td>describes a noun</td><td>tall, three, beautiful, my</td></tr>
              <tr><td>Adverb</td><td>describes verb/adjective/adverb</td><td>quickly, very, yesterday, here</td></tr>
              <tr><td>Preposition</td><td>shows position/time/relation</td><td>in, on, at, under, before, with</td></tr>
              <tr><td>Conjunction</td><td>joins words/clauses</td><td>and, but, or, because, although</td></tr>
              <tr><td>Interjection</td><td>shows sudden feeling</td><td>Wow! Alas! Hurrah! Ouch!</td></tr>
            </table>

            <h3>2. Nouns: common, proper, abstract, collective</h3>
            <ul>
              <li><b>Common</b> = general names (boy, city, river); <b>proper</b> = special names, always capitalised (Emeka, Enugu, River Niger).</li>
              <li><b>Abstract</b> = names of ideas and feelings you cannot touch (honesty, joy, courage, education).</li>
              <li><b>Collective</b> = names of groups (team, class, choir, herd, fleet). A collective noun usually takes a SINGULAR verb: "The team <b>is</b> winning."</li>
              <li>Countable nouns take a/an and plurals (a book, two books); uncountable nouns do not (water, rice, information — never "an information" or "two rices").</li>
            </ul>
            <div class=\"formula\">TRAP: "advice" is uncountable — "a piece of advice", never "an advice". Same family: information, luggage, furniture, homework, news (yes, NEWS is singular!).</div>

            <h3>3. Pronouns and their jobs</h3>
            <ul>
              <li><b>Personal:</b> I, you, he, she, it, we, they (subject) vs me, him, her, us, them (object): "Give <b>him</b> the book", not "Give he the book".</li>
              <li><b>Possessive:</b> my/mine, your/yours, his, her/hers, our/ours, their/theirs: "This is <b>my</b> pen; the blue one is <b>mine</b>." (mine/yours stand alone; my/your must hold a noun.)</li>
              <li><b>Reflexive:</b> myself, yourself, himself, themselves: "She taught <b>herself</b> to type." Never "theirselves".</li>
              <li><b>Relative:</b> who (people), which (things/animals), that (either): "The boy <b>who</b> called…; the bag <b>which</b> fell…".</li>
            </ul>

            <h3>4. Verbs: action, state and helpers</h3>
            <ul>
              <li><b>Action verbs</b> show doing (run, build, sing); <b>state verbs</b> show being or seeming (is, am, are, seem, belong, know).</li>
              <li><b>Auxiliary (helping) verbs</b> team up with main verbs: is/are + -ing (She is reading), have/has + -ed (They have finished), can/may/must/should + base form (You must go).</li>
              <li>The verb is the engine of the sentence — find it first when analysing: "The tall boy in the blue shirt <b>runs</b> home." Everything else orbits the verb.</li>
            </ul>

            <h3>5. Adjectives and the comparison ladder</h3>
            <ul>
              <td></td>
              <li><b>Positive:</b> big — "Kano is a big city." <b>Comparative:</b> bigger — "Kano is bigger than Jos." <b>Superlative:</b> biggest — "Kano is the biggest of the three."</li>
              <li>Short adjectives add -er/-est (tall/taller/tallest); long ones use more/most (beautiful/more beautiful/most beautiful).</li>
              <li>Irregular ladder: good → better → best; bad → worse → worst; far → farther → farthest; little → less → least.</li>
              <li>Watch the "the" trap: "the bigger OF THE TWO" — with TWO things use the comparative + of the two: "He is the taller of the two brothers."</li>
            </ul>

            <h3>6. Adverbs: the how, when, where and how-much words</h3>
            <ul>
              <li><b>Manner (how):</b> quickly, carefully, well, fast: "She sings <b>beautifully</b>." (Many end in -ly, but not all: fast, well, hard.)</li>
              <li><b>Time (when):</b> yesterday, now, soon; <b>place (where):</b> here, there, everywhere; <b>degree (how much):</b> very, too, quite: "It is <b>very</b> hot."</li>
              <li>Adverbs of manner usually come AFTER the verb: "He drove carefully", not "He drove carefullyly".</li>
              <li>Good is an adjective; <b>well</b> is its adverb: "He is a good player" / "He plays well."</li>
            </ul>

            <h3>7. Prepositions: little words with fixed habits</h3>
            <ul>
              <li>Position: in the box, on the table, under the bridge, between the shops, behind the wall.</li>
              <li>Time: <b>at</b> a time (at 5 o'clock), <b>on</b> a day (on Monday), <b>in</b> a longer period (in December, in 2024, in the morning).</li>
              <li>Fixed pairs you must memorise: fond <b>of</b>, good <b>at</b>, interested <b>in</b>, married <b>to</b>, angry <b>with</b> a person / <b>about</b> a thing, agree <b>with</b> a person / <b>to</b> a plan.</li>
              <li>A preposition always drags a noun or pronoun after it (its object): "under <b>the bridge</b>" — that whole chunk is a prepositional phrase.</li>
            </ul>

            <h3>8. Conjunctions and interjections</h3>
            <ul>
              <li><b>Coordinating:</b> and, but, or, so, yet — join equals: "I wanted to go, <b>but</b> it rained."</li>
              <li><b>Subordinating:</b> because, although, if, when, after, before — one clause leans on the other: "We left <b>before</b> the bell rang."</li>
              <li><b>Interjections</b> carry feeling, not grammar: "Wow! That was a goal!" They stand outside the sentence structure — that is why they take ! and a capital.</li>
            </ul>

            <h3>9. One word, many families: context is the judge</h3>
            <p>The same spelling can work in different families depending on its job in THAT sentence. "Water" is a noun in "Drink some <b>water</b>" but a verb in "<b>Water</b> the plants". "Fast" is an adjective in "a <b>fast</b> car" but an adverb in "He runs <b>fast</b>". Exams love this: always name the part of speech the word does in the printed sentence, not the family you remember.</p>
            <div class=\"worked\"><b>Worked example:</b> "The <b>cover</b> of the book is torn." (noun) vs "They <b>cover</b> the pot." (verb). Test: can you put "the/a" before it? Yes → noun here. Does it change with tense (covers, covered)? Yes → verb there.</div>
            <svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Chart showing the word WATER used as noun, verb and adjective in three example sentences, proving that context decides the family\">\n              <rect x=\"20\" y=\"20\" width=\"120\" height=\"44\" rx=\"9\" fill=\"#4f46e5\"/><text x=\"80\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\">NOUN</text><text x=\"80\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#e0e7ff">"Drink some water."</text>\n              <rect x=\"170\" y=\"20\" width=\"120\" height=\"44\" rx=\"9\" fill=\"#10b981\"/><text x=\"230\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\">VERB</text><text x="230" y="52" text-anchor="middle" font-size="9" fill="#d1fae5">"Water the plants."</text>\n              <rect x=\"320\" y=\"20\" width=\"120\" height=\"44\" rx=\"6\" fill=\"#f59e0b\"/><text x=\"380\" y=\"38\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#78350f\">ADJECTIVE</text><text x=\"380\" y=\"52\" text-anchor=\"middle\" font-size=\"9\" fill=\"#78350f\">"a water bottle"</text>\n              <text x=\"230\" y=\"100\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#0f172a">Same spelling, three jobs — the sentence decides.</text>\n              <text x=\"230\" y=\"122\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">Test with: the/a? tense changes? describes what?</text>\n            </svg>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Name the part of speech of "quickly" in "She ran quickly." <i>Ans: adverb (manner).</i></li>
              <li><b>Q2.</b> "Honesty is the best policy." Part of speech of "honesty"? <i>Ans: noun (abstract).</i></li>
              <li><b>Q3.</b> Which word is the verb in "The children seem happy."? <i>Ans: seem (state verb).</i></li>
              <li><b>Q4.</b> Comparative of "good"? <i>Ans: better.</i></li>
              <li><b>Q5.</b> Fill: "She is good ___ mathematics." <i>Ans: at.</i></li>
              <li><b>Q6.</b> "The <b>team</b> is winning" — what kind of noun is team? <i>Ans: collective.</i></li>
              <li><b>Q7.</b> Choose: "Neither the boys nor the teacher ___ (was/were) here." <i>Ans: was (nearer subject 'teacher' is singular).</i></li>
              <li><b>Q8.</b> Part of speech of "water" in "Water the plants." <i>Ans: verb.</i></li>
              <li><b>Q9.</b> Find the prepositional phrase: "The cat slept under the bridge." <i>Ans: under the bridge.</i></li>
              <th></th>
              <li><b>Q10.</b> Rewrite with the correct pronoun: "Give (he) the book." <i>Ans: Give him the book.</i></li>
            </ul>
            <div class=\"formula\">SUMMARY: the eight parts of speech are job titles, not spellings — nouns name, pronouns replace, verbs drive, adjectives describe nouns, adverbs describe verbs and adjectives, prepositions link, conjunctions join and interjections explode; within the families, know the classic traps (uncountable nouns like advice and news, collective nouns with singular verbs, the good/better/best ladder, fixed preposition pairs like fond of and good at, and good vs well); and remember that context is the final judge — the same spelling can be a noun in one sentence and a verb in the next, so always classify the job the word does in the printed sentence.</div>

'''

title = 'Parts of Speech'
assert '`' not in CONTENT and '${' not in CONTENT
pat = re.compile(r"\n(\s*)title: '" + re.escape(title) + "',")
hits = list(pat.finditer(s))
assert len(hits) == 1, (title, len(hits))
k = hits[0].end()
ci = s.index('content: `', k) + 10
ce = s.index('`', ci)
s = s[:ci] + CONTENT + s[ce:]
print(title, '->', len(CONTENT), 'chars | svg:', '<svg' in CONTENT)

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
