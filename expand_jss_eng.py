"""Deep-expand JSS English Language lessons (batch 6c-eng)."""
import textwrap

CUR = '/home/user/index.html'
s = open(CUR).read()

def deep(title, extra):
    global s
    t = s.index("title: '%s'," % title)
    c = s.index('content: `', t)
    k = s.index('cards:', c)
    std = s.find('\n          `,', c)
    block = textwrap.indent(textwrap.dedent(extra).strip('\n'), '            ')
    if std != -1 and std < k:
        s = s[:std] + '\n' + block + '\n' + s[std:]
    else:
        cl = s.rfind('`', c, k)
        assert cl > c
        s = s[:cl] + '\n' + block + '\n            ' + s[cl:]

deep('Sentence Structure & Composition', """

    <h3>Deep dive: the anatomy of a sentence</h3>
    <p>Every complete sentence has a <b>subject</b> (who/what the sentence is about) and a <b>predicate</b> (what is said about it): "The girl (subject) | read her book quietly (predicate)." By purpose, sentences do four jobs: <b>statements</b> (.), <b>questions</b> (?), <b>commands</b> (.), and <b>exclamations</b> (!).</p>
    <p>The two classic broken sentences to avoid: a <b>fragment</b> (missing subject or verb — "Because I was tired.") and a <b>run-on</b> (two sentences glued with no punctuation — "I was tired I slept"). Fix fragments by completing them; fix run-ons with a full stop, a comma + conjunction, or a semicolon.</p>
    <h3>The paragraph: one idea, properly dressed</h3>
    <ol>
      <li><b>Topic sentence</b> — states the paragraph's one idea.</li>
      <li><b>Supporting sentences</b> — explain, give examples, add detail.</li>
      <li><b>Closing sentence</b> — wraps up or links to the next paragraph.</li>
    </ol>
    <p>Plan before you write: jot 3–5 points, order them, then draft. After writing, <b>revise</b> — check spelling, punctuation and whether every sentence earns its place.</p>
    <h3>Worked example</h3>
    <p><b>Turn this into a proper sentence: "running quickly to the market because she was late."</b> It is a fragment — no subject. Fix: "<b>Ada was</b> running quickly to the market because she was late."</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Every composition is marked on content, organisation, expression AND mechanical accuracy — punctuation and spelling are real marks.</li>
      <li>One idea per paragraph; new idea = new paragraph.</li>
      <li>Read your work once as the examiner would — most errors announce themselves.</li>
    </ul>
""")

deep('Oral English: Vowels, Consonants & Stress', """

    <h3>Deep dive: sounds that change meaning</h3>
    <p>English has 44 sounds but only 26 letters — so spelling cannot be trusted for pronunciation. <b>Vowels</b> come in short/long pairs where the difference is meaning: sh<b>i</b>p vs sh<b>ee</b>p, f<b>u</b>ll vs f<b>oo</b>l, c<b>o</b>t vs c<b>au</b>ght, b<b>i</b>t vs b<b>ea</b>t. Say each pair aloud several times; the mouth shape differs.</p>
    <p><b>Consonant</b> traps to drill: /p/ vs /f/ (<b>p</b>an vs <b>f</b>an), /θ/ in <b>th</b>ink and bro<b>th</b>er (not "tink" or "broda" in formal speech), and the /v/ in <b>v</b>ery (not "wery").</p>
    <h3>Stress: the heartbeat of the word</h3>
    <p>Every word of two or more syllables has one syllable said with more force: <b>TA</b>-ble, win-<b>DOW</b>, e-<b>DU</b>-ca-tion. Stress can move with the word family: <b>PHO</b>-to-graph → pho-<b>TOG</b>-ra-phy → pho-to-<b>GRAPH</b>-ic. Getting the stressed syllable right is more important for being understood than any single sound.</p>
    <h3>Sentence stress and intonation</h3>
    <p>In a sentence, content words (nouns, main verbs) carry the stress; small words (a, the, of) shrink. The voice <b>rises</b> at the end of yes/no questions ("Are you coming? ↗") and <b>falls</b> on statements and wh-questions ("Where is he? ↘").</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Oral English questions ask which word has the <b>same vowel/consonant sound</b> as a given word — sound it out, don't look at the spelling ("food" and "boot" rhyme; "blood" does not).</li>
      <li>Stress questions: count syllables and find the loud one — "banana" is ba-<b>NA</b>-na.</li>
      <li>Silent letters are real: listen — the k is silent in <b>k</b>nife, the b in com<b>b</b>.</li>
    </ul>
""")

deep('Comprehension & Summary Basics', """

    <h3>Deep dive: how to attack a passage</h3>
    <ol>
      <li><b>Read the questions first</b> — you will know what to look for.</li>
      <li>Read the passage once fully for the gist, then again while hunting answers.</li>
      <li>Every answer is <b>in the passage</b> — underline or number the line that proves it.</li>
      <li>Answer in full, complete sentences unless told otherwise.</li>
    </ol>
    <h3>The 5W1H map</h3>
    <p>Most comprehension questions ask <b>Who, What, Where, When, Why</b> or <b>How</b>. When stuck, ask the passage each in turn — one of them always fits.</p>
    <h3>Guessing a difficult word</h3>
    <p>Don't panic at an unfamiliar word — use its <b>neighbours</b>: "The man was <i>frugal</i>; he mended his shoes twice rather than buy new ones." The context (mending instead of buying) tells you frugal means <b>careful with money</b>. The sentence around an unknown word is your dictionary.</p>
    <h3>Summary basics</h3>
    <ul>
      <li>Answer <b>in your own words</b> — copying the passage scores zero.</li>
      <li>Follow the instruction exactly: "in one sentence" means one sentence.</li>
      <li>No examples or lists unless asked; no personal opinions.</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>Passage: "Rain fell without stopping for three days, and the river, which had been calm all summer, rose until it covered the road."</b> Question: Why could people not use the road? Answer: <b>Because the river overflowed and flooded it after days of heavy rain.</b> — short, complete, from the passage.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Read the instruction words: "state" needs no explanation; "explain" and "why" do.</li>
      <li>Quote only when the question says "in the writer's words".</li>
      <li>Never leave a question blank — a sensible attempt from the passage can earn marks.</li>
    </ul>
""")

deep('Parts of Speech', """

    <h3>Deep dive: the eight teams every word plays for</h3>
    <ul>
      <li><b>Noun</b> — name of a person, place, thing or idea: Ada, Lagos, table, honesty. Types: common/proper, countable/uncountable, abstract.</li>
      <li><b>Pronoun</b> — stands in for a noun: he, she, it, they, somebody.</li>
      <li><b>Verb</b> — action or state: run, eat, is, seem. Verbs carry the tense.</li>
      <li><b>Adjective</b> — describes a <b>noun</b>: a <i>tall</i> boy, <i>red</i> bus.</li>
      <li><b>Adverb</b> — describes a <b>verb</b>, adjective or another adverb: she sang <i>beautifully</i>, <i>very</i> tall.</li>
      <li><b>Preposition</b> — shows position/time relations: on, under, before, between.</li>
      <li><b>Conjunction</b> — joins words or sentences: and, but, because, although.</li>
      <li><b>Interjection</b> — sudden feeling: Wow! Oh! Alas!</li>
    </ul>
    <h3>The identification trick</h3>
    <p>Ask what job the word does <b>in that sentence</b>: names a thing = noun; shows action = verb; describes a noun = adjective; describes an action = adverb. The same word can switch teams: "Water is life" (noun) vs "Water the plants" (verb).</p>
    <h3>Worked example</h3>
    <p><b>"The little girl ran quickly across the busy road."</b> The (article/adjective) · little (adjective) · girl (noun) · ran (verb) · quickly (adverb) · across (preposition) · the (article) · busy (adjective) · road (noun).</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Adjectives never describe verbs: "she sang beautiful" is wrong — "she sang <b>beautifully</b>".</li>
      <li>Most adverbs of manner = adjective + ly (quick → quickly), but "fast" and "hard" stay the same.</li>
      <li>Label by <b>function in the sentence</b>, not by the word alone.</li>
    </ul>
""")

deep('Verb Tenses Made Simple', """

    <h3>Deep dive: the six tenses JSS must master</h3>
    <table class="mb-3 w-full border-collapse text-left text-xs">
      <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">Tense</th><th class="border border-slate-200 p-1.5">Example</th><th class="border border-slate-200 p-1.5">Signal words</th></tr></thead>
      <tbody>
        <tr><td class="border border-slate-200 p-1.5">Present simple</td><td class="border border-slate-200 p-1.5">She <b>walks</b> to school</td><td class="border border-slate-200 p-1.5">every day, always, usually</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Present continuous</td><td class="border border-slate-200 p-1.5">She <b>is walking</b> now</td><td class="border border-slate-200 p-1.5">now, at the moment</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Past simple</td><td class="border border-slate-200 p-1.5">She <b>walked</b> yesterday</td><td class="border border-slate-200 p-1.5">yesterday, last week, ago</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Past continuous</td><td class="border border-slate-200 p-1.5">She <b>was walking</b> when it rained</td><td class="border border-slate-200 p-1.5">while, when</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Future simple</td><td class="border border-slate-200 p-1.5">She <b>will walk</b> tomorrow</td><td class="border border-slate-200 p-1.5">tomorrow, next week</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Present perfect</td><td class="border border-slate-200 p-1.5">She <b>has walked</b> 5 km today</td><td class="border border-slate-200 p-1.5">already, yet, since, ever</td></tr>
      </tbody>
    </table>
    <p><b>Regular</b> verbs add -ed (walk → walked); <b>irregular</b> verbs must be memorised: go → went, eat → ate, see → saw, come → came, buy → bought, take → took.</p>
    <h3>Worked examples</h3>
    <ol>
      <li><b>He ___ (go) to the market yesterday.</b> "Yesterday" → past simple → <b>went</b>.</li>
      <li><b>Look! The baby ___ (crawl).</b> "Look!" = happening now → present continuous → <b>is crawling</b>.</li>
      <li><b>We ___ (finish) our homework already.</b> "Already" → present perfect → <b>have finished</b>.</li>
    </ol>
    <h3>Exam watch</h3>
    <ul>
      <li>Third person singular present takes -s: he/she/it <b>walks</b>.</li>
      <li>After <b>did</b>, the verb returns to base form: "Did she <b>go</b>?" not "Did she went?".</li>
      <li>The signal word usually decides the tense — find it first.</li>
    </ul>
""")

deep('Summary Writing & précis', """

    <h3>Deep dive: précis = compression without loss</h3>
    <p>A précis keeps <b>only the main ideas</b> of a passage, in <b>your own words</b>, within a strict word limit. Method: (1) read the passage twice; (2) underline the main point of each paragraph — ignore examples, stories, figures and repetitions; (3) restate those points as connected sentences; (4) count your words and trim adjectives, never ideas.</p>
    <h3>The strict rules</h3>
    <ul>
      <li>Never copy sentences from the passage — restating in fresh words is the whole skill.</li>
      <li>Never add opinions, greetings or explanations of your own.</li>
      <li>Keep the passage's <b>order of ideas</b> and its mood (a serious passage stays serious).</li>
      <li>Write in the <b>third person</b> and usually the past tense when reporting what the writer said.</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>Original (42 words):</b> "Many students believe that success in examinations comes mainly from luck. However, teachers insist that consistent daily study, asking questions in class and doing assignments on time are the true secret to excellent results, because luck alone rarely repeats itself." <b>Précis (17 words):</b> "Teachers argue that consistent study habits, not luck, produce examination success, since luck rarely repeats."</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Word limits are checked — 30 words means 30, not 45.</li>
      <li>One main idea per sentence of your précis; join them smoothly.</li>
      <li>Titles like "Summary of the passage" waste words unless asked for.</li>
    </ul>
""")

open(CUR, 'w', encoding='utf-8').write(s)
print('JSS English batch 6c-eng written: 6 topics')
