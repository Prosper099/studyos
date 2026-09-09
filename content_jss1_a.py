"""JSS1 content — Mathematics & English Language: new lessons + per-topic quizzes + cards."""
import re

CUR = '/home/user/index.html'
s = open(CUR).read()


def subj_span(subject):
    si = s.index("  '%s': {" % subject)
    m = re.search(r"\n  '(?:Mathematics|Physics|Chemistry|English Language|Biology|Basic Science|Basic Technology)': \{", s[si + 10:])
    return si, (si + 10 + m.start() if m else s.index("\n};", si))


def insert_jss1_lessons(subject, lessons_text):
    global s
    first_title = lessons_text.split("title: '")[1].split("'")[0]
    if first_title in s:
        return
    si, ei = subj_span(subject)
    anchor = s.index("      JSS1: [", si) + len("      JSS1: [")
    s = s[:anchor] + "\n" + lessons_text + s[anchor:]


def set_quiz(subject, title, quiz_text):
    global s
    si, ei = subj_span(subject)
    t = s.index("          title: '%s'," % title, si)
    assert t < ei, title
    te = s.index("\n        }", t)
    seg = s[t:te]
    assert "          quiz: []," in seg, "quiz slot missing: " + title
    s = s[:t] + seg.replace("          quiz: [],", "          quiz: [\n" + quiz_text + "\n          ],", 1) + s[te:]


def add_cards(subject, title, cards_text):
    global s
    si, ei = subj_span(subject)
    t = s.index("          title: '%s'," % title, si)
    assert t < ei, title
    te = s.index("\n        }", t)
    seg = s[t:te]
    if "          cards: []," in seg:
        s = s[:t] + seg.replace("          cards: [],", "          cards: [\n" + cards_text + "\n          ],", 1) + s[te:]
    else:
        ca = s.index("          cards: [", t)
        close = s.index("\n          ],", ca)
        s = s[:close] + ",\n" + cards_text + s[close:]


# ================================================================ MATH LESSONS
MATH_LESSONS = r"""        {
          title: 'Whole Numbers, Place Value & Estimation',
          tags: ['Place value', 'Rounding', 'LCM & HCF'],
          summary: 'Reading, writing and rounding large numbers, estimating answers, and the LCM/HCF tools every JSS paper loves.',
          content: `
            <h3>1. Place value of large numbers</h3>
            <p>Every digit's value depends on its <b>position</b>. In 4,732,015 the 7 is in the <b>hundred-thousands</b> column, so its value is 700,000 — not 7.</p>
            <table>
              <tr><th>Millions</th><th>Hundred-thousands</th><th>Ten-thousands</th><th>Thousands</th><th>Hundreds</th><th>Tens</th><th>Ones</th></tr>
              <tr><td>4</td><td>7</td><td>3</td><td>2</td><td>0</td><td>1</td><td>5</td></tr>
            </table>
            <p><b>Writing in words:</b> 4,732,015 = "four million, seven hundred and thirty-two thousand, and fifteen". Group in threes from the right, then read each group with its name (million, thousand).</p>
            <h3>2. Rounding</h3>
            <ul>
              <li>Look at the digit <b>right of</b> the place you are rounding to.</li>
              <li>5 or more → round up; 4 or less → stay.</li>
              <li>6,749 to the nearest 100: look at the tens digit (4) → <b>6,700</b>.</li>
            </ul>
            <h3>3. Estimation</h3>
            <p>Round first, then calculate: 48 × 21 ≈ 50 × 20 = <b>1,000</b>. Estimation checks that a calculator answer is sensible.</p>
            <h3>4. LCM and HCF</h3>
            <div class="formula">LCM = smallest common multiple · HCF = largest common factor<br>12 = 2² × 3, 18 = 2 × 3² → HCF = 2 × 3 = 6, LCM = 2² × 3² = 36</div>
            <h3>5. Standard (scientific) form</h3>
            <p>Write a number as A × 10ⁿ where 1 ≤ A &lt; 10. So 3,600,000 = <b>3.6 × 10⁶</b>.</p>
            <div class="worked"><b>Worked example:</b> A trader sells 198 baskets at ₦1,012 each. Estimate the takings.<br>
            198 ≈ 200 and ₦1,012 ≈ ₦1,000, so ≈ 200 × 1,000 = <b>₦200,000</b>.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Reading 407 as "four hundred and seventy" — the zero means <b>no tens</b>: "four hundred and seven".</li>
              <li>Rounding twice (6,749 → 6,750 → 6,800). Round once, from the original number.</li>
              <li>Mixing up LCM and HCF: LCM is never smaller than the bigger number; HCF is never bigger than the smaller.</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
        {
          title: 'Fractions & Decimals',
          tags: ['Equivalent fractions', 'Operations', 'Conversions'],
          summary: 'Adding, subtracting, multiplying and comparing fractions and decimals, and switching between fractions, decimals and percentages.',
          content: `
            <h3>1. Equivalent fractions and simplifying</h3>
            <p>Multiply or divide top and bottom by the <b>same number</b>: 6/8 = 3/4. A fraction is in lowest terms when top and bottom share no common factor except 1.</p>
            <h3>2. Adding and subtracting</h3>
            <div class="formula">Different denominators? Find the LCM first.<br>3/4 + 1/6 → LCM 12 → 9/12 + 2/12 = 11/12</div>
            <h3>3. Multiplying and dividing</h3>
            <ul>
              <li>Multiply straight across: 2/3 × 3/5 = 6/15 = 2/5.</li>
              <li>Divide by flipping the second fraction: 3/4 ÷ 2 = 3/4 × 1/2 = <b>3/8</b>.</li>
              <li>"of" means multiply: 2/5 of ₦2,500 = (2,500 ÷ 5) × 2 = <b>₦1,000</b>.</li>
            </ul>
            <h3>4. Decimals</h3>
            <ul>
              <li>Multiply: count total decimal places. 1.25 × 0.4 → 125 × 4 = 500, three places → <b>0.500 = 0.5</b>.</li>
              <li>Compare by lining up decimal points: 0.4 &lt; 0.5 &lt; 0.6, i.e. 0.4 &lt; 1/2 &lt; 3/5.</li>
            </ul>
            <h3>5. Fraction ↔ decimal ↔ percentage</h3>
            <table>
              <tr><th>Fraction</th><th>Decimal</th><th>Percentage</th></tr>
              <tr><td>1/4</td><td>0.25</td><td>25%</td></tr>
              <tr><td>3/4</td><td>0.75</td><td>75%</td></tr>
              <tr><td>7/8</td><td>0.875</td><td>87.5%</td></tr>
              <tr><td>3/20</td><td>0.15</td><td>15%</td></tr>
            </table>
            <div class="worked"><b>Worked example:</b> A pupil sleeps 9 hours a day. What fraction of the day is that?<br>
            9/24, divide top and bottom by 3 → <b>3/8</b> (and 3/8 = 0.375 = 37.5%).</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Adding tops and bottoms: 1/2 + 1/3 is <b>not</b> 2/5.</li>
              <li>Forgetting to simplify the final answer.</li>
              <li>Miscounting decimal places after multiplying.</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
        {
          title: 'Introduction to Algebra: Letters & Simple Equations',
          tags: ['Variables', 'Like terms', 'Simple equations'],
          summary: 'Why letters stand for numbers, how to collect like terms, and solving one-step equations — the gateway into algebra.',
          content: `
            <h3>1. Why letters?</h3>
            <p>A letter like <i>x</i> is a <b>variable</b> — a placeholder for a number we don't know yet. "Some number plus 7 gives 12" becomes <b>x + 7 = 12</b>, which we can solve.</p>
            <h3>2. Like terms</h3>
            <p>Terms are like terms when they carry the <b>same letter part</b>. 3a and 4a are like; 3a and 3b are not.</p>
            <div class="formula">3a + 4a − 2a = (3 + 4 − 2)a = 5a<br>2a + 3b − a + 5b = a + 8b</div>
            <h3>3. From words to symbols</h3>
            <table>
              <tr><th>Words</th><th>Algebra</th></tr>
              <tr><td>Twice a number n</td><td>2n</td></tr>
              <tr><td>5 more than twice n</td><td>2n + 5</td></tr>
              <tr><td>Tunde's age in 6 years (he is a now)</td><td>a + 6</td></tr>
              <tr><td>Half of a number, decreased by 1</td><td>n/2 − 1</td></tr>
            </table>
            <h3>4. Solving one-step equations</h3>
            <ul>
              <li><b>Undo</b> what is done to the letter, doing the same to both sides.</li>
              <li>y + 7 = 12 → y = 12 − 7 = <b>5</b>.</li>
              <li>3m = 21 → m = 21 ÷ 3 = <b>7</b>.</li>
              <li>x − 4 = 9 → x = 9 + 4 = <b>13</b>.</li>
            </ul>
            <h3>5. Algebra in shapes</h3>
            <div class="worked"><b>Worked example:</b> A rectangle has length (x + 3) cm and width x cm. Find its perimeter.<br>
            P = 2(length + width) = 2(x + 3 + x) = 2(2x + 3) = <b>4x + 6 cm</b>. If x = 5, P = 26 cm.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Writing 2 + x as 2x — 2x means 2 <b>times</b> x.</li>
              <li>Collecting unlike terms: 3a + 2b stays 3a + 2b.</li>
              <li>Forgetting to do the same thing to <b>both sides</b> of an equation.</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
        {
          title: 'Angles & Plane Figures',
          tags: ['Types of angles', 'Angle facts', 'Perimeter & area'],
          summary: 'Naming and measuring angles, the angle facts for triangles and straight lines, and perimeter and area of basic figures.',
          content: `
            <div class="diagram">
              <div class="diagram-title">The four families of angles</div>
              <svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Acute, right, obtuse and reflex angles drawn from a common vertex">
                <rect x="6" y="6" width="368" height="148" rx="12" fill="#fdf4ff"/>
                <g stroke="#0f172a" stroke-width="2.5">
                  <line x1="40" y1="120" x2="86" y2="50"/><line x1="40" y1="120" x2="96" y2="120"/>
                  <line x1="150" y1="120" x2="150" y2="52"/><line x1="150" y1="120" x2="206" y2="120"/>
                  <line x1="260" y1="120" x2="238" y2="54"/><line x1="260" y1="120" x2="316" y2="120"/>
                </g>
                <rect x="150" y="106" width="14" height="14" fill="none" stroke="#7e22ce" stroke-width="2"/>
                <path d="M62 120 A22 22 0 0 0 53 102" fill="none" stroke="#7e22ce" stroke-width="2"/>
                <path d="M282 120 A22 22 0 0 0 253 100" fill="none" stroke="#7e22ce" stroke-width="2"/>
                <text x="66" y="140" text-anchor="middle" font-size="10" fill="#7e22ce">acute &lt; 90°</text>
                <text x="176" y="140" text-anchor="middle" font-size="10" fill="#7e22ce">right = 90°</text>
                <text x="288" y="140" text-anchor="middle" font-size="10" fill="#7e22ce">obtuse 90°–180°</text>
                <text x="344" y="60" font-size="10" fill="#7e22ce">reflex &gt; 180°</text>
                <text x="190" y="26" text-anchor="middle" font-size="11" fill="#581c87">straight line = 180° · full turn = 360°</text>
              </svg>
            </div>
            <h3>1. Angle facts to memorise</h3>
            <ul>
              <li>Angles on a <b>straight line</b> add to 180°.</li>
              <li>Angles at a <b>point</b> (full turn) add to 360°.</li>
              <li><b>Vertically opposite</b> angles are equal.</li>
              <li>Angles in a <b>triangle</b> add to 180°; in a <b>quadrilateral</b>, 360°.</li>
              <li>Complementary pair = 90°; supplementary pair = 180°.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Two angles on a straight line are x and 2x. Find x.<br>
            x + 2x = 180° → 3x = 180° → x = <b>60°</b> (the other is 120°).</div>
            <h3>2. Perimeter and area basics</h3>
            <table>
              <tr><th>Figure</th><th>Perimeter</th><th>Area</th></tr>
              <tr><td>Square (side s)</td><td>4s</td><td>s²</td></tr>
              <tr><td>Rectangle (l × w)</td><td>2(l + w)</td><td>l × w</td></tr>
              <tr><td>Triangle</td><td>sum of 3 sides</td><td>½ × base × height</td></tr>
            </table>
            <div class="worked"><b>Worked example:</b> Each angle of an equilateral triangle = 180° ÷ 3 = <b>60°</b>.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Confusing complement (makes 90°) with supplement (makes 180°).</li>
              <li>Using the slant side instead of the <b>height</b> in the triangle area formula.</li>
              <li>Forgetting that "vertically opposite" needs two crossing straight lines.</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
"""

# ============================================================ ENGLISH LESSONS
ENG_LESSONS = r"""        {
          title: 'Sentence Structure & Composition',
          tags: ['Subject & predicate', 'Complete sentences', 'Punctuation'],
          summary: 'What every complete sentence must have, how to join ideas, and the capitalisation and punctuation marks that earn easy marks.',
          content: `
            <h3>1. The two halves of a sentence</h3>
            <p>Every complete sentence has a <b>subject</b> (who or what it is about) and a <b>predicate</b> (what is said about the subject, containing the verb).</p>
            <div class="worked"><b>Worked example:</b> "The pupils cleaned the classroom."<br>
            Subject = <b>The pupils</b>; predicate = <b>cleaned the classroom</b> (verb = cleaned).</div>
            <h3>2. Complete sentence or fragment?</h3>
            <table>
              <tr><th>Fragment ✗</th><th>Why</th><th>Fixed ✓</th></tr>
              <tr><td>Running fast.</td><td>No subject</td><td>He is running fast.</td></tr>
              <tr><td>Under the tree.</td><td>No subject or verb</td><td>We sat under the tree.</td></tr>
              <tr><td>Because he came.</td><td>Depends on another clause</td><td>He slept because he came.</td></tr>
            </table>
            <h3>3. Capitalisation rules</h3>
            <ul>
              <li>First word of every sentence; the pronoun <b>I</b>.</li>
              <li>Names of people, places, days, months: Adaeze, Kano, Monday, January.</li>
              <li>Titles before names: <b>Doctor</b> Bello, <b>Principal</b> Okoye.</li>
            </ul>
            <h3>4. End punctuation</h3>
            <p>Full stop for statements, <b>question mark</b> for questions ("Where are you going<b>?</b>"), exclamation mark for strong feeling ("What a goal<b>!</b>").</p>
            <h3>5. Joining ideas and possession</h3>
            <ul>
              <li>Conjunctions join: "Kunle is short <b>but</b> strong." "Bola cooked <b>and</b> washed up."</li>
              <li>Apostrophe + s shows possession: <b>Tunde's</b> bag, <b>the girl's</b> shoe.</li>
              <li>Agreement: <b>Each</b> of the boys <b>has</b> a book (each is singular).</li>
            </ul>
            <h3>Common mistakes</h3>
            <ul>
              <li>Writing "myself went to school" — use <b>I</b> as the subject.</li>
              <li>Missing capital on proper nouns and on the first word.</li>
              <li>Using a comma where a full stop belongs (comma splice).</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
        {
          title: 'Oral English: Vowels, Consonants & Stress',
          tags: ['Vowel sounds', 'Stress', 'Intonation'],
          summary: 'The sound contrasts JSS Oral English tests: ship/sheep, silent letters, syllable stress and the tune of questions.',
          content: `
            <h3>1. The vowel contrasts examiners love</h3>
            <table>
              <tr><th>Short</th><th>Long</th><th>Minimal pair</th></tr>
              <tr><td>/ɪ/ as in ship</td><td>/iː/ as in sheep</td><td>ship / sheep, sit / seat</td></tr>
              <tr><td>/ʊ/ as in full</td><td>/uː/ as in fool</td><td>full / fool, pull / pool</td></tr>
              <tr><td>/ɒ/ as in pot</td><td>/ɔ/ as in port</td><td>pot / port</td></tr>
              <tr><td>/æ/ as in cat</td><td>/ɑː/ as in cart</td><td>cat / cart</td></tr>
            </table>
            <h3>2. Silent letters</h3>
            <p><b>k</b> in knife and knee, <b>w</b> in write and wrong, <b>b</b> in comb and climb, <b>h</b> in hour and honest.</p>
            <h3>3. Syllables and stress</h3>
            <ul>
              <li>beau-ti-ful = 3 syllables; wa-ter = 2.</li>
              <li>Stress the loud syllable: <b>TEA</b>cher, be<b>GIN</b>, <b>WA</b>ter.</li>
              <li>Many two-syllable nouns stress the first (<b>RE</b>cord), verbs the second (re<b>CORD</b>).</li>
            </ul>
            <h3>4. Consonant clusters and endings</h3>
            <ul>
              <li>chair begins /tʃ/; jam begins /dʒ/; think begins /θ/; this begins /ð/.</li>
              <li>Plural/s endings: /s/ in cats, /z/ in bags, /ɪz/ in box<b>es</b> and bush<b>es</b>.</li>
            </ul>
            <h3>5. Intonation</h3>
            <p>Yes/no questions <b>rise</b>: "You are coming ↗?" Wh- questions and statements <b>fall</b>: "Where are you going ↘."</p>
            <div class="worked"><b>Worked practice:</b> Which word rhymes with "bath"? path (✓), both (✗), beat (✗), bat (✗).</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Pronouncing the k in knife or the w in write.</li>
              <li>Saying "aks" for "ask" — mind the cluster order.</li>
              <li>Giving every word equal stress; English is a stress-timed language.</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
        {
          title: 'Comprehension & Summary Basics',
          tags: ['Main idea', 'Context clues', 'Skim & scan'],
          summary: 'The beginner toolkit for understanding passages: reading the questions first, finding the main idea, and using context clues.',
          content: `
            <h3>1. The golden order</h3>
            <ol>
              <li>Read the <b>questions</b> first — they tell you what to hunt for.</li>
              <li>Read the passage once for the general sense.</li>
              <li>Read again, underlining answers and the <b>main idea</b> of each paragraph.</li>
            </ol>
            <h3>2. Main idea vs detail</h3>
            <p>The main idea is the point the whole passage supports. Details (names, dates, examples) serve it. A good <b>title</b> states the main idea and covers the <b>whole</b> passage, not one paragraph.</p>
            <h3>3. Context clues</h3>
            <div class="worked"><b>Worked example:</b> "The man was <b>frugal</b>; he saved every kobo and never bought anything he did not need."<br>
            The rest of the sentence explains the word: frugal ≈ <b>saving / not wasteful</b>.</div>
            <h3>4. Skimming and scanning</h3>
            <table>
              <tr><th>Skimming</th><th>Scanning</th></tr>
              <tr><td>Quick read for the gist</td><td>Quick search for one fact (a name, date, number)</td></tr>
              <tr><td>"What is this passage about?"</td><td>"In what year did…?"</td></tr>
            </table>
            <h3>5. Inference and opinion</h3>
            <ul>
              <li><b>Inference</b>: a conclusion drawn from clues, not stated outright. "She opened her umbrella" → it was raining.</li>
              <li><b>Fact</b> can be proved ("Lagos is a big city"); an <b>opinion</b> is a belief ("Lagos is the best city").</li>
            </ul>
            <h3>Common mistakes</h3>
            <ul>
              <li>Copying whole sentences into a summary — use your <b>own words</b>.</li>
              <li>Choosing a title that covers only one paragraph.</li>
              <li>Answering from general knowledge instead of the passage.</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
"""

insert_jss1_lessons('Mathematics', MATH_LESSONS)
insert_jss1_lessons('English Language', ENG_LESSONS)

# ================================================================= MATH QUIZZES
set_quiz('Mathematics', 'Whole Numbers, Place Value & Estimation', """            { q: 'What is the value of the digit 7 in 4,732,015?', options: ['700,000', '70,000', '7,000', '7,000,000'], correct: 0,
              exp: 'The 7 sits in the hundred-thousands column, so its value is 7 × 100,000 = 700,000.' },
            { q: 'Write 45,308 in words.', options: ['Forty-five thousand, three hundred and eight', 'Forty-five thousand and thirty-eight', 'Four million, five hundred and thirty-eight', 'Forty-five hundred and eight'], correct: 0,
              exp: 'Group in threes: 45 (thousand) and 308 → "forty-five thousand, three hundred and eight".' },
            { q: 'Round 6,749 to the nearest hundred.', options: ['6,700', '6,750', '6,800', '6,740'], correct: 0,
              exp: 'Look at the tens digit (4). It is less than 5, so the hundreds stay: 6,700.' },
            { q: 'The best estimate of 48 × 21 is:', options: ['1,000', '800', '1,200', '960'], correct: 0,
              exp: '48 ≈ 50 and 21 ≈ 20, so 50 × 20 = 1,000.' },
            { q: 'What is the successor of the greatest 5-digit number?', options: ['100,000', '99,999', '10,000', '99,998'], correct: 0,
              exp: 'The greatest 5-digit number is 99,999; the next whole number is 100,000.' },
            { q: '3,600,000 in standard form is:', options: ['3.6 × 10⁶', '3.6 × 10⁵', '36 × 10⁵', '3.6 × 10⁷'], correct: 0,
              exp: 'Move the point 6 places: 3.6 × 10⁶. The front number must lie between 1 and 10.' },
            { q: 'The LCM of 12 and 18 is:', options: ['36', '6', '72', '18'], correct: 0,
              exp: '12 = 2² × 3 and 18 = 2 × 3²; LCM = 2² × 3² = 36.' },
            { q: 'The HCF of 24 and 36 is:', options: ['12', '6', '8', '72'], correct: 0,
              exp: 'Common factors of 24 and 36 go up to 12 (24 = 12 × 2, 36 = 12 × 3).' },
            { q: 'A trader sells 198 baskets at ₦1,012 each. The best estimate of her takings is:', options: ['₦200,000', '₦100,000', '₦20,000', '₦2,000,000'], correct: 0,
              exp: '198 ≈ 200 and ₦1,012 ≈ ₦1,000 → 200 × 1,000 = ₦200,000.' },
            { q: 'Which number is read "four hundred and seven"?', options: ['407', '470', '4,007', '704'], correct: 0,
              exp: '407 has 4 hundreds, no tens and 7 ones — the zero must be spoken as an empty tens column.' }""")

set_quiz('Mathematics', 'Fractions & Decimals', """            { q: '3/4 + 1/6 = ?', options: ['11/12', '4/10', '5/12', '2/3'], correct: 0,
              exp: 'LCM of 4 and 6 is 12: 9/12 + 2/12 = 11/12. Never add tops and bottoms.' },
            { q: '0.75 as a fraction in lowest terms is:', options: ['3/4', '75/10', '7/5', '15/20'], correct: 0,
              exp: '0.75 = 75/100; divide top and bottom by 25 to get 3/4.' },
            { q: '2/5 of ₦2,500 = ?', options: ['₦1,000', '₦500', '₦1,250', '₦2,000'], correct: 0,
              exp: '"of" means multiply: (2,500 ÷ 5) × 2 = 500 × 2 = ₦1,000.' },
            { q: 'In ascending order: 1/2, 0.4, 3/5 is:', options: ['0.4, 1/2, 3/5', '1/2, 0.4, 3/5', '3/5, 1/2, 0.4', '0.4, 3/5, 1/2'], correct: 0,
              exp: 'As decimals: 0.4, 0.5, 0.6 — so 0.4 &lt; 1/2 &lt; 3/5.' },
            { q: '1.25 × 0.4 = ?', options: ['0.5', '5.0', '0.05', '50'], correct: 0,
              exp: '125 × 4 = 500; three decimal places in total → 0.500 = 0.5.' },
            { q: '3/4 ÷ 2 = ?', options: ['3/8', '3/2', '8/3', '6/4'], correct: 0,
              exp: 'Dividing by 2 is multiplying by 1/2: 3/4 × 1/2 = 3/8.' },
            { q: '7/8 as a decimal is:', options: ['0.875', '0.78', '0.75', '0.87'], correct: 0,
              exp: '7 ÷ 8 = 0.875. Know the eighths: 1/8 = 0.125.' },
            { q: '15% as a fraction in lowest terms is:', options: ['3/20', '15/10', '1/15', '3/10'], correct: 0,
              exp: '15% = 15/100 = 3/20 after dividing by 5.' },
            { q: 'Which is the greatest: 2/3, 3/5, 5/8, 7/10?', options: ['7/10', '2/3', '3/5', '5/8'], correct: 0,
              exp: 'As decimals: 0.667, 0.6, 0.625, 0.7 — so 7/10 is greatest (2/3 is a close second).' },
            { q: 'A pupil sleeps 9 hours a day. The fraction of the day is:', options: ['3/8', '9/12', '1/3', '3/4'], correct: 0,
              exp: '9/24 of the day; divide top and bottom by 3 to get 3/8 (37.5%).' }""")

set_quiz('Mathematics', 'Introduction to Algebra: Letters & Simple Equations', """            { q: 'Simplify 3a + 4a − 2a.', options: ['5a', '9a', '5a²', 'a'], correct: 0,
              exp: '(3 + 4 − 2)a = 5a. The letter part never changes when collecting like terms.' },
            { q: 'If x = 4, then 2x + 3 = ?', options: ['11', '10', '14', '9'], correct: 0,
              exp: '2 × 4 = 8, then 8 + 3 = 11.' },
            { q: 'Solve y + 7 = 12.', options: ['5', '19', '7', '−5'], correct: 0,
              exp: 'Subtract 7 from both sides: y = 12 − 7 = 5.' },
            { q: '"5 more than twice a number n" is written:', options: ['2n + 5', '2(n + 5)', 'n² + 5', '5n + 2'], correct: 0,
              exp: 'Twice n is 2n; five more adds 5 → 2n + 5.' },
            { q: 'Solve 3m = 21.', options: ['7', '18', '24', '63'], correct: 0,
              exp: 'Divide both sides by 3: m = 21 ÷ 3 = 7.' },
            { q: '5x − x = ?', options: ['4x', '5', '5x²', 'x'], correct: 0,
              exp: 'x is 1x, so 5x − 1x = 4x.' },
            { q: 'Tunde is a years old. In 6 years he will be:', options: ['a + 6', '6a', 'a − 6', 'a ÷ 6'], correct: 0,
              exp: 'Six years older means adding 6: a + 6.' },
            { q: 'Solve x − 4 = 9.', options: ['13', '5', '−13', '36'], correct: 0,
              exp: 'Add 4 to both sides: x = 9 + 4 = 13.' },
            { q: 'Simplify 2a + 3b − a + 5b.', options: ['a + 8b', '9ab', '3a + 8b', 'a + 2b'], correct: 0,
              exp: 'a-terms: 2a − a = a; b-terms: 3b + 5b = 8b → a + 8b.' },
            { q: 'A rectangle has length (x + 3) and width x. Its perimeter is:', options: ['4x + 6', '2x + 3', 'x² + 3x', '4x + 3'], correct: 0,
              exp: 'P = 2(length + width) = 2(x + 3 + x) = 4x + 6.' }""")

set_quiz('Mathematics', 'Angles & Plane Figures', """            { q: 'Angles on a straight line add up to:', options: ['180°', '90°', '360°', '270°'], correct: 0,
              exp: 'A straight line is half a turn: 180°.' },
            { q: 'The sum of the angles of a triangle is:', options: ['180°', '90°', '360°', '45°'], correct: 0,
              exp: 'Every triangle, whatever its shape, has angles summing to 180°.' },
            { q: 'The complement of 35° is:', options: ['55°', '145°', '65°', '35°'], correct: 0,
              exp: 'Complementary pairs make 90°: 90 − 35 = 55°.' },
            { q: 'The supplement of 105° is:', options: ['75°', '85°', '15°', '255°'], correct: 0,
              exp: 'Supplementary pairs make 180°: 180 − 105 = 75°.' },
            { q: 'The angles of a quadrilateral add up to:', options: ['360°', '180°', '90°', '540°'], correct: 0,
              exp: 'A quadrilateral splits into two triangles: 2 × 180° = 360°.' },
            { q: 'An angle between 90° and 180° is called:', options: ['obtuse', 'acute', 'reflex', 'right'], correct: 0,
              exp: 'Acute &lt; 90°, right = 90°, obtuse is between 90° and 180°, reflex &gt; 180°.' },
            { q: 'Vertically opposite angles are always:', options: ['equal', 'supplementary', 'complementary', '90°'], correct: 0,
              exp: 'When two straight lines cross, the opposite pair are equal.' },
            { q: 'Each angle of an equilateral triangle is:', options: ['60°', '90°', '45°', '180°'], correct: 0,
              exp: '180° shared equally by three angles: 180 ÷ 3 = 60°.' },
            { q: 'The perimeter of a square of side 7 cm is:', options: ['28 cm', '49 cm', '14 cm', '21 cm'], correct: 0,
              exp: 'P = 4s = 4 × 7 = 28 cm. (49 cm² would be the area.)' },
            { q: 'The area of a rectangle 8 cm by 5 cm is:', options: ['40 cm²', '26 cm²', '13 cm²', '80 cm²'], correct: 0,
              exp: 'A = length × width = 8 × 5 = 40 cm².' }""")

set_quiz('Mathematics', 'Ratio, Proportion & Percentages', """            { q: 'Share ₦1,500 between Ada and Bola in the ratio 2:3. Ada gets:', options: ['₦600', '₦900', '₦750', '₦500'], correct: 0,
              exp: '2 + 3 = 5 parts; one part = 1,500 ÷ 5 = 300; Ada gets 2 × 300 = ₦600.' },
            { q: '45% of 240 = ?', options: ['108', '96', '120', '45'], correct: 0,
              exp: '10% is 24, so 40% is 96 and 5% is 12 → 96 + 12 = 108.' },
            { q: 'Express the ratio 30:45 in its lowest terms.', options: ['2:3', '3:2', '5:6', '6:9'], correct: 0,
              exp: 'Divide both by the HCF 15: 30 ÷ 15 = 2 and 45 ÷ 15 = 3.' },
            { q: 'If 5 exercise books cost ₦750, then 8 cost:', options: ['₦1,200', '₦1,000', '₦1,500', '₦960'], correct: 0,
              exp: 'One book = 750 ÷ 5 = ₦150; eight books = 150 × 8 = ₦1,200.' },
            { q: '0.35 as a percentage is:', options: ['35%', '3.5%', '0.35%', '350%'], correct: 0,
              exp: 'Multiply by 100: 0.35 × 100 = 35%.' },
            { q: 'A pupil scores 24 out of 30. The percentage is:', options: ['80%', '24%', '75%', '90%'], correct: 0,
              exp: '24/30 = 4/5 = 0.8 = 80%.' },
            { q: 'Increase ₦800 by 25%.', options: ['₦1,000', '₦900', '₦200', '₦1,200'], correct: 0,
              exp: '25% of 800 is 200; 800 + 200 = ₦1,000.' },
            { q: 'The ratio of 20 minutes to 1 hour is:', options: ['1:3', '20:1', '3:1', '1:2'], correct: 0,
              exp: 'Same units first: 1 hour = 60 minutes, so 20:60 = 1:3.' },
            { q: '12 is what percentage of 48?', options: ['25%', '12%', '48%', '50%'], correct: 0,
              exp: '12/48 = 1/4 = 25%.' },
            { q: 'Divide 72 in the ratio 5:3. The bigger share is:', options: ['45', '27', '40', '36'], correct: 0,
              exp: '5 + 3 = 8 parts; one part = 9; bigger share = 5 × 9 = 45.' }""")

# ================================================================ MATH CARDS
add_cards('Mathematics', 'Whole Numbers, Place Value & Estimation', """            { q: 'How do you read 4,732,015 in words?', a: 'Group in threes from the right, then read each group with its name: "four million, seven hundred and thirty-two thousand, and fifteen".' },
            { q: 'State the rule for rounding to a given place.', a: 'Look at the digit just to the right: 5 or more rounds up, 4 or less leaves the digit unchanged — and round once, straight from the original number.' },
            { q: 'How would you estimate 48 × 21, and why bother?', a: 'Round each factor first (50 × 20 = 1,000). The estimate tells you instantly whether a long multiplication or calculator answer is sensible.' },
            { q: 'Difference between LCM and HCF?', a: 'LCM is the smallest number both divide into (never smaller than the bigger number); HCF is the largest number that divides both (never bigger than the smaller). For 12 and 18: LCM 36, HCF 6.' },
            { q: 'What is standard form?', a: 'Writing a number as A × 10ⁿ with 1 ≤ A &lt; 10. Example: 3,600,000 = 3.6 × 10⁶.' }""")

add_cards('Mathematics', 'Fractions & Decimals', """            { q: 'How do you add fractions with different denominators?', a: 'Find the LCM of the denominators, rewrite each fraction over it, then add the tops only: 3/4 + 1/6 = 9/12 + 2/12 = 11/12.' },
            { q: 'What does "of" mean in fraction language?', a: 'Multiply: 2/5 of ₦2,500 means (₦2,500 ÷ 5) × 2 = ₦1,000.' },
            { q: 'Quick method for multiplying decimals?', a: 'Multiply as whole numbers, then count the total decimal places in the factors: 1.25 × 0.4 → 125 × 4 = 500 with 3 places → 0.5.' },
            { q: 'Convert 7/8 to a decimal and percentage.', a: '7 ÷ 8 = 0.875, which is 87.5%. Remember 1/8 = 0.125 and count up in eighths.' },
            { q: 'How do you compare 1/2, 0.4 and 3/5 quickly?', a: 'Put all in the same form — as decimals: 0.5, 0.4, 0.6 — then order them: 0.4 &lt; 1/2 &lt; 3/5.' }""")

add_cards('Mathematics', 'Introduction to Algebra: Letters & Simple Equations', """            { q: 'What is a variable?', a: 'A letter standing for an unknown or changeable number, so "some number plus 7 gives 12" can be written x + 7 = 12 and solved.' },
            { q: 'Rule for collecting like terms?', a: 'Only terms with the same letter part combine, and only their numbers add or subtract: 3a + 4a − 2a = 5a, while 2a + 3b stays as it is.' },
            { q: 'Translate "5 more than twice n".', a: '2n + 5. Twice n is 2n, then add 5. Note 2(n + 5) would mean "twice the sum of n and 5" — different!' },
            { q: 'How do you solve a one-step equation?', a: 'Undo the operation on both sides equally: y + 7 = 12 → y = 5; 3m = 21 → m = 7; x − 4 = 9 → x = 13.' },
            { q: 'Perimeter of a rectangle with length (x+3) and width x?', a: 'P = 2(l + w) = 2(2x + 3) = 4x + 6. Algebra lets the answer stay general for any x.' }""")

add_cards('Mathematics', 'Angles & Plane Figures', """            { q: 'Name the angle families by size.', a: 'Acute &lt; 90°, right = 90°, obtuse between 90° and 180°, reflex &gt; 180°; a straight line is 180° and a full turn 360°.' },
            { q: 'State the four angle facts used most in exams.', a: 'Straight line = 180°; angles at a point = 360°; vertically opposite angles equal; triangle angles = 180° (quadrilateral = 360°).' },
            { q: 'Complement vs supplement?', a: 'Complementary pairs total 90° (complement of 35° is 55°); supplementary pairs total 180° (supplement of 105° is 75°).' },
            { q: 'Perimeter and area of square and rectangle?', a: 'Square: P = 4s, A = s². Rectangle: P = 2(l + w), A = l × w. Triangle area = ½ × base × height, using the vertical height, not a slant side.' },
            { q: 'Each angle of an equilateral triangle?', a: '180° ÷ 3 = 60°, because all three angles are equal.' }""")

add_cards('Mathematics', 'Ratio, Proportion & Percentages', """            { q: 'How do you share ₦1,500 in the ratio 2:3?', a: 'Add the parts (2 + 3 = 5), find one part (₦1,500 ÷ 5 = ₦300), then multiply: ₦600 and ₦900.' },
            { q: 'Fast way to find 45% of 240?', a: '10% is 24; so 40% = 96 and 5% = 12; total 108. Building from 10% and 5% beats long multiplication.' },
            { q: 'Turn 0.35, 24/30 and a 25% increase into their partners.', a: '0.35 = 35%; 24/30 = 80%; increasing ₦800 by 25% adds ₦200 to give ₦1,000.' },
            { q: 'Why is the ratio of 20 minutes to 1 hour equal to 1:3?', a: 'Ratios need the same units: 1 hour = 60 minutes, so 20:60, which divides down to 1:3.' }""")

# ============================================================= ENGLISH QUIZZES
set_quiz('English Language', 'Parts of Speech', """            { q: '"Quickly" belongs to which class of words?', options: ['Adverb', 'Adjective', 'Verb', 'Noun'], correct: 0,
              exp: 'It tells how an action is done, and many adverbs end in -ly.' },
            { q: 'Which of these is a pronoun?', options: ['she', 'Lagos', 'run', 'blue'], correct: 0,
              exp: 'Pronouns stand in for nouns: she, he, it, they, we, you, I.' },
            { q: 'In "The tall man walked", "tall" is:', options: ['an adjective', 'a verb', 'an adverb', 'a noun'], correct: 0,
              exp: 'It describes the noun "man", so it is an adjective.' },
            { q: 'The verb in "Amaka sings beautifully" is:', options: ['sings', 'Amaka', 'beautifully', 'none'], correct: 0,
              exp: 'The verb is the action word; "beautifully" is the adverb describing it.' },
            { q: '"and, but, or" are:', options: ['conjunctions', 'prepositions', 'interjections', 'pronouns'], correct: 0,
              exp: 'Conjunctions join words, phrases or clauses.' },
            { q: '"on, in, at, under" are:', options: ['prepositions', 'conjunctions', 'adverbs', 'verbs'], correct: 0,
              exp: 'Prepositions show position or time relation: on the table, in June, at school.' },
            { q: '"Wow!" is an:', options: ['interjection', 'adjective', 'article', 'adverb'], correct: 0,
              exp: 'Interjections express sudden feeling and usually carry an exclamation mark.' },
            { q: 'The plural of "child" is:', options: ['children', 'childs', 'childes', 'childrens'], correct: 0,
              exp: 'An irregular noun: child → children, like foot → feet and mouse → mice.' },
            { q: 'Which is a proper noun?', options: ['Nigeria', 'city', 'river', 'school'], correct: 0,
              exp: 'Proper nouns name particular people or places and always begin with a capital letter.' },
            { q: 'An adverb can modify:', options: ['a verb, adjective or another adverb', 'only nouns', 'only pronouns', 'only conjunctions'], correct: 0,
              exp: 'She sings well (verb), very tall (adjective), quite quickly (adverb).' }""")

set_quiz('English Language', 'Sentence Structure & Composition', """            { q: 'Every complete sentence must have:', options: ['a subject and a verb', 'an adjective', 'a conjunction', 'ten words'], correct: 0,
              exp: 'The subject names who/what; the predicate (with the verb) says something about it.' },
            { q: 'Which is a complete sentence?', options: ['The bell rang.', 'Running fast.', 'Under the tree.', 'Because he came.'], correct: 0,
              exp: 'The others are fragments: no subject, no verb, or a dependent clause left hanging.' },
            { q: '"Where are you going" ends with:', options: ['a question mark', 'a full stop', 'an exclamation mark', 'a comma'], correct: 0,
              exp: 'Direct questions take a question mark.' },
            { q: 'Which word is always capitalised?', options: ['I', 'boy', 'market', 'quickly'], correct: 0,
              exp: 'The pronoun I, the first word of a sentence, and proper nouns always take capitals.' },
            { q: 'The subject of "The pupils cleaned the classroom" is:', options: ['The pupils', 'cleaned', 'the classroom', 'pupils cleaned'], correct: 0,
              exp: 'The sentence is about the pupils; "cleaned the classroom" is the predicate.' },
            { q: 'The predicate of a sentence is:', options: ['what is said about the subject', 'always the first word', 'the person speaking', 'the punctuation'], correct: 0,
              exp: 'It contains the verb and completes the thought about the subject.' },
            { q: '"Kunle is short but strong." The joining word is:', options: ['but', 'is', 'short', 'strong'], correct: 0,
              exp: '"but" is a conjunction linking two contrasting ideas.' },
            { q: 'Choose the correct agreement:', options: ['Each of the boys has a book.', 'Each of the boys have a book.', 'Each of the boys are having a book.', 'Each of the boys were having a book.'], correct: 0,
              exp: '"Each" is singular, so it takes the singular verb "has".' },
            { q: 'A statement ends with:', options: ['a full stop', 'a question mark', 'an exclamation mark', 'a semicolon'], correct: 0,
              exp: 'Statements take full stops; questions take ? and strong feelings take !' },
            { q: 'The apostrophe in "Tunde\\'s bag" shows:', options: ['possession', 'a question', 'a plural', 'an exclamation'], correct: 0,
              exp: "'s marks ownership: the bag belongs to Tunde." }""")

set_quiz('English Language', 'Oral English: Vowels, Consonants & Stress', """            { q: 'How many vowel letters does English have?', options: ['5', '4', '6', '21'], correct: 0,
              exp: 'a, e, i, o, u — though they make many more vowel sounds.' },
            { q: 'Which word has the same vowel sound as "ship"?', options: ['sit', 'sheep', 'seat', 'shape'], correct: 0,
              exp: 'ship and sit share the short /ɪ/; sheep and seat use the long /iː/.' },
            { q: 'Which word rhymes with "bath"?', options: ['path', 'both', 'beat', 'bat'], correct: 0,
              exp: 'bath and path end with the same vowel + consonant sound.' },
            { q: 'How many syllables in "beautiful"?', options: ['3', '2', '4', '1'], correct: 0,
              exp: 'beau-ti-ful — three beats.' },
            { q: 'The stress in "teacher" falls on:', options: ['the first syllable', 'the second syllable', 'both equally', 'the last letter'], correct: 0,
              exp: 'TEA-cher: most two-syllable nouns stress the first syllable.' },
            { q: '"chair" begins with which sound?', options: ['/tʃ/', '/dʒ/', '/k/', '/ʃ/'], correct: 0,
              exp: 'The "ch" in chair is /tʃ/, as against /dʒ/ in jam and /ʃ/ in share.' },
            { q: '"full" and "fool" differ in:', options: ['vowel length', 'first consonant', 'number of syllables', 'stress'], correct: 0,
              exp: 'full has short /ʊ/; fool has long /uː/.' },
            { q: 'Which word has a silent letter?', options: ['knife', 'kettle', 'melon', 'ladder'], correct: 0,
              exp: 'The k in knife (and knee, know) is silent.' },
            { q: 'The ending of "boxes" is pronounced:', options: ['/ɪz/', '/s/', '/z/', '/es/'], correct: 0,
              exp: 'After s, z, sh, ch and j sounds, the plural ending sounds /ɪz/: boxes, bushes, bridges.' },
            { q: 'Yes/No questions normally use which tune?', options: ['rising', 'falling', 'flat', 'falling then rising'], correct: 0,
              exp: '"You are coming?" rises; wh- questions like "Where are you going?" fall.' }""")

set_quiz('English Language', 'Comprehension & Summary Basics', """            { q: 'Before reading a passage, you should first read:', options: ['the questions', 'the last paragraph', 'a dictionary', 'another passage'], correct: 0,
              exp: 'The questions tell you exactly what to look for during your reading.' },
            { q: 'The "main idea" of a passage is:', options: ['the central point the whole passage supports', 'the first word', 'any name mentioned', 'the longest sentence'], correct: 0,
              exp: 'Every paragraph should connect back to it.' },
            { q: 'Context clues help you to:', options: ['guess the meaning of an unknown word', 'skip the passage', 'change the question', 'count paragraphs'], correct: 0,
              exp: 'The words around a new word explain it: "frugal; he saved every kobo" tells you frugal means saving.' },
            { q: 'Skimming means:', options: ['reading quickly for the gist', 'reading every word slowly', 'searching for one date', 'memorising the passage'], correct: 0,
              exp: 'Skim for the general idea; scan when hunting a particular fact.' },
            { q: 'Scanning is used to:', options: ['find a specific fact fast', 'enjoy a story', 'learn new grammar', 'write a summary'], correct: 0,
              exp: 'Your eyes jump straight to the name, number or date the question wants.' },
            { q: 'In "The children were tired, so they rested", "they" refers to:', options: ['the children', 'the teachers', 'the parents', 'the games'], correct: 0,
              exp: 'A pronoun points back to its antecedent — here, the children.' },
            { q: 'The best title for a passage:', options: ['covers the whole passage', 'uses the hardest words', 'covers one example', 'is always one word'], correct: 0,
              exp: 'A title that fits only one paragraph is too narrow.' },
            { q: 'An inference is:', options: ['a conclusion drawn from clues', 'a word copied from the text', 'the title', 'a spelling rule'], correct: 0,
              exp: '"She opened her umbrella" lets you infer rain, though rain is never stated.' },
            { q: 'A summary must be written in:', options: ['your own words', 'the writer\\'s exact words', 'question form', 'poetry'], correct: 0,
              exp: 'Copied sentences score nothing; paraphrase the points briefly.' },
            { q: 'Which is an opinion?', options: ['Lagos is the best city.', 'Lagos is a big city.', 'Nigeria has 36 states.', 'Water boils at 100 °C at sea level.'], correct: 0,
              exp: 'Opinions are beliefs that can be argued; facts can be checked and proved.' }""")

# ============================================================= ENGLISH CARDS
add_cards('English Language', 'Parts of Speech', """            { q: 'List the eight parts of speech with one example each.', a: 'Noun (Lagos), pronoun (she), verb (run), adjective (tall), adverb (quickly), conjunction (but), preposition (on), interjection (wow).' },
            { q: 'How do you spot an adverb?', a: 'It tells how, when or where an action happens and often ends in -ly: sings beautifully, came yesterday. Adverbs can also modify adjectives: very tall.' },
            { q: 'What makes a proper noun special?', a: 'It names a particular person, place or thing (Adaeze, Kano, Monday) and always begins with a capital letter.' },
            { q: 'Give three irregular plurals.', a: 'child → children, foot → feet, mouse → mice (also man → men, tooth → teeth). They do not take -s.' }""")

add_cards('English Language', 'Sentence Structure & Composition', """            { q: 'What two parts must every complete sentence have?', a: 'A subject (who or what it is about) and a predicate containing the verb (what is said about the subject): "The pupils | cleaned the classroom."' },
            { q: 'Why is "Running fast." not a sentence?', a: 'It has no subject — it is a fragment. Fix it: "He is running fast." The same goes for "Under the tree." and hanging "because" clauses.' },
            { q: 'When do you use a capital letter?', a: 'First word of a sentence, the pronoun I, names of people/places/days/months, and titles before names: Doctor Bello, Principal Okoye.' },
            { q: 'What does an apostrophe + s show?', a: 'Possession — Tunde\\'s bag means the bag belongs to Tunde. Do not confuse with a plural: two bags, no apostrophe.' },
            { q: 'Which conjunction joins contrasting ideas?', a: '"but" — "Kunle is short but strong." "and" adds ideas; "or" offers a choice.' }""")

add_cards('English Language', 'Oral English: Vowels, Consonants & Stress', """            { q: 'Contrast ship/sheep and full/fool.', a: 'ship and full use the short vowels /ɪ/ and /ʊ/; sheep and fool use the long /iː/ and /uː/. Length changes the word completely.' },
            { q: 'Name three words with silent letters.', a: 'knife (silent k), write (silent w), comb (silent b) — also hour (silent h) and climb (silent b).' },
            { q: 'How many syllables in "beautiful", and where is the stress in "teacher"?', a: 'beau-ti-ful has 3 syllables; TEA-cher stresses the first syllable, like most two-syllable nouns.' },
            { q: 'What tune do Yes/No questions use?', a: 'A rising tune ("You are coming ↗?"), while statements and wh- questions fall ("Where are you going ↘?").' },
            { q: 'How is the plural ending pronounced in "boxes"?', a: '/ɪz/, because the word ends in an s-sound. Compare cats /s/ and bags /z/.' }""")

add_cards('English Language', 'Comprehension & Summary Basics', """            { q: 'What should you read first in a comprehension test?', a: 'The questions — they tell you what to hunt for before you ever read the passage.' },
            { q: 'Skimming vs scanning?', a: 'Skim = quick read for the gist ("what is this about?"). Scan = quick search for one fact such as a name, date or number.' },
            { q: 'What is a context clue?', a: 'The surrounding words that explain an unknown word: "he was frugal; he saved every kobo" shows frugal means saving.' },
            { q: 'Fact vs opinion — give one of each.', a: 'Fact: "Lagos is a big city" (provable). Opinion: "Lagos is the best city" (a belief people can argue about).' },
            { q: 'What makes an inference different from a detail?', a: 'A detail is stated; an inference is concluded from clues — "She opened her umbrella" implies rain without saying it.' }""")

open(CUR, 'w').write(s)
print("JSS1 maths+english content injected; bytes:", len(s))
