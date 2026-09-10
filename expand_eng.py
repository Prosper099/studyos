"""Deep-expand SS English Language lessons (batch 5)."""
import textwrap

CUR = '/home/user/index.html'
s = open(CUR).read()

def deep(title, extra):
    global s
    t = s.index("title: '%s'," % title)
    c = s.index('content: `', t)
    close = s.index('\n          `,', c)
    block = textwrap.indent(textwrap.dedent(extra).strip('\n'), '            ')
    s = s[:close] + '\n' + block + '\n' + s[close:]

deep('Tenses & Subject–Verb Concord', """

    <h3>Deep dive: the concord rules examiners test</h3>
    <table class="mb-3 w-full border-collapse text-left text-xs">
      <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">Situation</th><th class="border border-slate-200 p-1.5">Verb</th><th class="border border-slate-200 p-1.5">Example</th></tr></thead>
      <tbody>
        <tr><td class="border border-slate-200 p-1.5">Neither…nor / Either…or</td><td class="border border-slate-200 p-1.5">agrees with the NEARER subject</td><td class="border border-slate-200 p-1.5">Neither the boys nor the teacher <b>was</b> present</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Collective acting as one</td><td class="border border-slate-200 p-1.5">singular</td><td class="border border-slate-200 p-1.5">The jury <b>has</b> reached its verdict</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Money, distance, time as a unit</td><td class="border border-slate-200 p-1.5">singular</td><td class="border border-slate-200 p-1.5">Ten thousand naira <b>is</b> a lot</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Everyone, each, nobody</td><td class="border border-slate-200 p-1.5">singular</td><td class="border border-slate-200 p-1.5">Each of the students <b>has</b> a book</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Nouns that look plural</td><td class="border border-slate-200 p-1.5">singular</td><td class="border border-slate-200 p-1.5">The news <b>is</b> surprising; Mathematics <b>is</b> fun</td></tr>
      </tbody>
    </table>
    <p>The trap is distance: in "The box of chocolates <b>is</b> on the table", the subject is <b>box</b>, not chocolates. Find the true subject first, then agree the verb to it — ignore everything between them.</p>
    <h3>Worked example</h3>
    <p><b>Choose: The principal, together with the teachers, (is/are) attending the meeting.</b> "Together with" does not create a compound subject — the subject is still <b>the principal</b>, so: <b>is</b>. (Only "and" compounds subjects: "The principal and the teachers are…".)</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Intervening phrases ("of the students", "along with…") never change the verb.</li>
      <li>"A number of people <b>are</b>…" but "The number of people <b>is</b>…".</li>
      <li>In questions the subject hides after the verb — reorder first: "Where <b>is</b> the list of names?"</li>
    </ul>
""")

deep('Idioms & Figurative Language', """

    <h3>Deep dive: the WAEC idiom bank</h3>
    <table class="mb-3 w-full border-collapse text-left text-xs">
      <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">Idiom</th><th class="border border-slate-200 p-1.5">Meaning</th></tr></thead>
      <tbody>
        <tr><td class="border border-slate-200 p-1.5">bite off more than you can chew</td><td class="border border-slate-200 p-1.5">take on more than you can handle</td></tr>
        <tr><td class="border border-slate-200 p-1.5">let the cat out of the bag</td><td class="border border-slate-200 p-1.5">reveal a secret carelessly</td></tr>
        <tr><td class="border border-slate-200 p-1.5">once in a blue moon</td><td class="border border-slate-200 p-1.5">very rarely</td></tr>
        <tr><td class="border border-slate-200 p-1.5">pull someone's leg</td><td class="border border-slate-200 p-1.5">tease or joke with them</td></tr>
        <tr><td class="border border-slate-200 p-1.5">spill the beans</td><td class="border border-slate-200 p-1.5">disclose hidden information</td></tr>
        <tr><td class="border border-slate-200 p-1.5">a blessing in disguise</td><td class="border border-slate-200 p-1.5">something bad that turns out good</td></tr>
        <tr><td class="border border-slate-200 p-1.5">burn the midnight oil</td><td class="border border-slate-200 p-1.5">study or work late into the night</td></tr>
      </tbody>
    </table>
    <h3>Answering "nearest in meaning" like a pro</h3>
    <ol>
      <li>Read the <b>whole sentence</b> — idioms mean what the context makes them mean ("pull my leg" at a comedy show ≠ an injury).</li>
      <li>Predict the meaning in your own words <b>before</b> looking at the options.</li>
      <li>Eliminate the literal, word-by-word reading — it is almost always the trap option.</li>
    </ol>
    <h3>Figurative devices, side by side</h3>
    <p><b>Simile</b> compares with like/as ("brave as a lion"); <b>metaphor</b> compares directly ("he is a lion"); <b>personification</b> gives human traits to things ("the wind whispered"); <b>hyperbole</b> exaggerates ("I've told you a million times"); <b>irony</b> means the opposite ("What lovely weather!" in a downpour); <b>euphemism</b> softens ("passed away" for died); <b>oxymoron</b> joins opposites ("deafening silence").</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Confusing irony (opposite meaning) with sarcasm (mockery meant to hurt).</li>
      <li>Choosing an option that fits the idiom's words but not the sentence's context.</li>
      <li>Proverbs are cultural wisdom ("Haste makes waste"); idioms are fixed expressions — different questions.</li>
    </ul>
""")

deep('Punctuation & Capitalisation', """

    <h3>Deep dive: the marks that carry meaning</h3>
    <ul>
      <li><b>Comma</b> — separates list items, joins clauses with a conjunction, and sets off extra information: "My brother, who lives in Enugu, is a doctor." (The commas say he is my only brother.)</li>
      <li><b>Semicolon</b> — joins two complete, related sentences without a conjunction: "The rain stopped; the match resumed."</li>
      <li><b>Colon</b> — introduces a list, explanation or quotation: "Buy three things: rice, oil and salt."</li>
      <li><b>Apostrophe</b> — possession (the boy<b>'s</b> bag; the boys<b>'</b> bags) and contractions (it<b>'s</b> = it is). <b>Its</b> (no apostrophe) = belonging to it.</li>
      <li><b>Quotation marks</b> — enclose exact words; punctuation of the quote sits <b>inside</b> the closing mark: "Come here," she called.</li>
    </ul>
    <h3>Capitalisation: the checklist</h3>
    <p>Start of a sentence; <b>P</b>roper nouns (Ada, Lagos, River Niger); days, months, festivals (Eid, Christmas); titles before names (President Tinubu, Dr Okonkwo — but "the president spoke"); the pronoun <b>I</b>; acronyms (NECO, WAEC, UNESCO); and the first word of quoted speech.</p>
    <h3>Worked example</h3>
    <p><b>Punctuate: my sister asked where is chinedu going</b> → "My sister asked, 'Where is Chinedu going?'" — capital M, comma before the quote, question mark inside the quotes, capitals for the name and the quoted question.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>The <b>comma splice</b>: joining two sentences with only a comma — use a full stop, semicolon or conjunction.</li>
      <li>Plural ≠ possessive: "the 1990<b>s</b>" needs no apostrophe; "the 1990<b>'s</b> fashion" is possessive.</li>
      <li>In reported (indirect) speech the quotation marks disappear — don't punctuate twice.</li>
    </ul>
""")

deep('Comprehension & Summary Writing', """

    <h3>Deep dive: a strategy, not luck</h3>
    <ol>
      <li><b>Read the questions first</b> — you now know what to hunt for.</li>
      <li>Skim the passage for structure (who, where, what, argument vs story).</li>
      <li>Hunt each answer with <b>keywords from the question</b>; the answer is always <b>in the passage</b>, never in your opinion.</li>
      <li>For "what does word X mean as used in the passage" — replace X with each option <b>in the sentence</b>; the one that keeps the meaning intact wins.</li>
    </ol>
    <h3>Summary rules (WAEC is strict)</h3>
    <ul>
      <li><b>Use your own words</b> — lifted sentences score zero even when correct.</li>
      <li><b>Obey the word limit exactly</b>; "in one sentence" means one sentence, full stop.</li>
      <li>No examples, no figures, no illustrations unless the question asks for them.</li>
      <li>No opinions, no "I think", no new information.</li>
      <li>One idea per point; make every point a complete sentence.</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>Passage sentence:</b> "The rapid growth of cities, driven largely by rural-urban migration, has placed enormous pressure on housing, water and transport infrastructure." <b>Summarise in your own words:</b> "Fast city growth, mainly caused by people moving from villages, has strained basic services." — same idea, fewer words, fresh wording.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Copying the passage verbatim — the fastest route to zero on a summary question.</li>
      <li>Answering from background knowledge instead of the text.</li>
      <li>Ignoring instruction words: "state" needs no explanation; "explain" and "describe" do.</li>
    </ul>
""")

deep('Synonyms, Antonyms & Word Formation', """

    <h3>Deep dive: build words like a chemist</h3>
    <table class="mb-3 w-full border-collapse text-left text-xs">
      <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">Affix</th><th class="border border-slate-200 p-1.5">Effect</th><th class="border border-slate-200 p-1.5">Example</th></tr></thead>
      <tbody>
        <tr><td class="border border-slate-200 p-1.5">un-, dis-, in-, im-, il-, ir-</td><td class="border border-slate-200 p-1.5">negative prefix</td><td class="border border-slate-200 p-1.5">happy → unhappy; honest → dishonest; legal → illegal</td></tr>
        <tr><td class="border border-slate-200 p-1.5">-ment, -tion, -ance, -ity</td><td class="border border-slate-200 p-1.5">verb/adjective → noun</td><td class="border border-slate-200 p-1.5">develop → development; educate → education</td></tr>
        <tr><td class="border border-slate-200 p-1.5">-ful, -less, -ous, -able</td><td class="border border-slate-200 p-1.5">noun → adjective</td><td class="border border-slate-200 p-1.5">beauty → beautiful / joy → joyless</td></tr>
        <tr><td class="border border-slate-200 p-1.5">-ly</td><td class="border border-slate-200 p-1.5">adjective → adverb</td><td class="border border-slate-200 p-1.5">quick → quickly</td></tr>
        <tr><td class="border border-slate-200 p-1.5">re-, mis-, pre-, over-</td><td class="border border-slate-200 p-1.5">again / wrongly / before / too much</td><td class="border border-slate-200 p-1.5">rewrite, misunderstand, preview, overeat</td></tr>
      </tbody>
    </table>
    <h3>The high-yield WAEC word bank</h3>
    <p>erudite = scholarly · candid = frank · penury = poverty · verbose = wordy · loquacious = talkative · ephemeral = fleeting · ubiquitous = everywhere · belligerent = aggressive · frugal = thrifty · obsolete = out of date. Learn them in <b>pairs with their opposites</b>: abundant ↔ scarce, ancient ↔ modern, humble ↔ arrogant.</p>
    <h3>Worked example</h3>
    <p><b>"Her <i>frugal</i> habits saved the family during the hard times." Nearest in meaning?</b> Context says habits that <b>save</b> → thrifty/economical — not "stingy", which carries a mean-spirited tone the sentence does not have. Tone is part of meaning.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>The opposite of a word is NOT automatically un- + word ("raise" ↔ "lower", not "unraise").</li>
      <li>Antonym questions ask what is opposite <b>in the given sentence</b> — check the context before choosing.</li>
      <li>Spelling: -ful has one L (beautiful); the suffix -ly doubles nothing (final → finally keeps both Ls of "final").</li>
    </ul>
""")

deep('Essay & Letter Writing', """

    <h3>Deep dive: the three formats, exactly</h3>
    <p><b>Formal letter</b> (to a principal, commissioner, editor): <b>two addresses</b> — yours top right, theirs left below it; date; <b>Dear Sir/Madam</b>; a bold <b>heading/title</b> in capitals; body in short focused paragraphs; <b>Yours faithfully</b>; then signature and <b>full name</b>. Tone: polite, no contractions, no slang.</p>
    <p><b>Informal letter</b> (friend, sibling): <b>one address</b> (yours) top right; date; <b>Dear Chidi,</b>; warm opening ("How is everyone at home?"); free, friendly tone with contractions allowed; close with <b>Yours sincerely</b> and your <b>first name</b> only.</p>
    <p><b>Speech/debate/article:</b> greet the audience ("Mr Chairman, Panel of Judges, ladies and gentlemen"); introduce yourself and your stance; three argued points with examples; a memorable closing line.</p>
    <h3>The essay skeleton that always works</h3>
    <ol>
      <li><b>Introduction</b> — hook + your thesis in 2–3 sentences.</li>
      <li><b>Three body paragraphs</b> — one idea each: point → explain → example → link back.</li>
      <li><b>Conclusion</b> — restate and finish strong; never introduce new material here.</li>
    </ol>
    <h3>Worked outline</h3>
    <p><b>"Write a letter to your principal requesting two improvements in the school."</b> Addresses + date → Dear Sir/Madam → heading: REQUEST FOR IMPROVEMENT OF SCHOOL FACILITIES → para 1: purpose → para 2: improvement one (new library books) with reasons → para 3: improvement two (repair of the science lab) → para 4: polite closing expectation → Yours faithfully, signature, full name.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Wrong format = capped marks no matter how good the English is — format is scored.</li>
      <li>"Yours faithfully" (formal) vs "Yours sincerely" (informal) — never swap them.</li>
      <li>Essays need <b>paragraphing</b>; one giant block of text loses structure marks.</li>
    </ul>
""")

deep('Direct & Indirect (Reported) Speech', """

    <h3>Deep dive: the backshift table</h3>
    <table class="mb-3 w-full border-collapse text-left text-xs">
      <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">Direct</th><th class="border border-slate-200 p-1.5">Reported</th></tr></thead>
      <tbody>
        <tr><td class="border border-slate-200 p-1.5">present simple ("I <b>am</b> busy")</td><td class="border border-slate-200 p-1.5">past simple (he <b>was</b> busy)</td></tr>
        <tr><td class="border border-slate-200 p-1.5">past simple ("I <b>worked</b>")</td><td class="border border-slate-200 p-1.5">past perfect (he <b>had worked</b>)</td></tr>
        <tr><td class="border border-slate-200 p-1.5">will / can / may</td><td class="border border-slate-200 p-1.5">would / could / might</td></tr>
        <tr><td class="border border-slate-200 p-1.5">today / tomorrow / yesterday</td><td class="border border-slate-200 p-1.5">that day / the next day / the previous day</td></tr>
        <tr><td class="border border-slate-200 p-1.5">here / this / these</td><td class="border border-slate-200 p-1.5">there / that / those</td></tr>
      </tbody>
    </table>
    <h3>Questions and commands</h3>
    <p><b>Yes/no questions</b> report with <b>asked if/whether</b> and statement word order: "Are you coming?" → He asked <b>if I was coming</b> (never "was I"). <b>Wh- questions</b> keep the question word: "Where does she live?" → He asked <b>where she lived</b>. <b>Commands</b> become infinitives: "Close the door," she said → She told me <b>to close</b> the door; "Don't run" → She warned me <b>not to run</b>.</p>
    <h3>Worked example, step by step</h3>
    <p><b>"I am travelling to Kano tomorrow," said Bola.</b></p>
    <ol>
      <li>Reporting verb in the past (said) → backshift: am → was.</li>
      <li>Pronoun: I → she (Bola). Time word: tomorrow → the next day.</li>
      <li>Result: <b>Bola said that she was travelling to Kano the next day.</b></li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Keeping question word order in reported questions — the number one reported-speech error.</li>
      <li>Universal truths do NOT backshift: "The teacher said the earth <b>is</b> round."</li>
      <li>Forgetting the pronoun and time-place changes while doing the tense change.</li>
    </ul>
""")

deep('Phrasal Verbs, Prepositions & Register', """

    <h3>Deep dive: the phrasal-verb bank</h3>
    <table class="mb-3 w-full border-collapse text-left text-xs">
      <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">Phrasal verb</th><th class="border border-slate-200 p-1.5">Meaning</th></tr></thead>
      <tbody>
        <tr><td class="border border-slate-200 p-1.5">look after</td><td class="border border-slate-200 p-1.5">take care of</td></tr>
        <tr><td class="border border-slate-200 p-1.5">call off</td><td class="border border-slate-200 p-1.5">cancel</td></tr>
        <tr><td class="border border-slate-200 p-1.5">put off</td><td class="border border-slate-200 p-1.5">postpone</td></tr>
        <tr><td class="border border-slate-200 p-1.5">turn up</td><td class="border border-slate-200 p-1.5">arrive, appear</td></tr>
        <tr><td class="border border-slate-200 p-1.5">run into</td><td class="border border-slate-200 p-1.5">meet by chance</td></tr>
        <tr><td class="border border-slate-200 p-1.5">carry out</td><td class="border border-slate-200 p-1.5">perform, conduct</td></tr>
        <tr><td class="border border-slate-200 p-1.5">break down</td><td class="border border-slate-200 p-1.5">stop working (machine); lose control (emotion)</td></tr>
        <tr><td class="border border-slate-200 p-1.5">give up</td><td class="border border-slate-200 p-1.5">stop trying; quit a habit</td></tr>
      </tbody>
    </table>
    <p>The particle changes everything: <b>look for</b> = search, <b>look after</b> = care for, <b>look into</b> = investigate, <b>look down on</b> = despise.</p>
    <h3>Fixed prepositions — memorise as pairs</h3>
    <p>good <b>at</b> · interested <b>in</b> · depend <b>on</b> · accuse <b>of</b> · congratulate <b>on</b> · apologise <b>for</b> · prefer <b>to</b> · married <b>to</b> · divided <b>into</b> · prevented <b>from</b>.</p>
    <h3>Register: matching words to occasion</h3>
    <p>Formal: commence, purchase, reside, vehicle, inform. Informal: start, buy, live, car, tell. A formal letter must not say "kindly buy", and a friendly note should not say "I wish to purchase" — <b>register is the dress code of words</b>.</p>
    <h3>Worked example</h3>
    <p><b>Choose: The match was called (off/on/up/out) because of rain.</b> Called <b>off</b> = cancelled. ("Called up" = telephoned; "called on" = visited.)</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Prepositions after verbs are fixed — "agree <b>with</b> a person" but "agree <b>to</b> a plan".</li>
      <li>Prefer takes <b>to</b>, never than: "I prefer rice to beans."</li>
      <li>Splitting phrasal verbs wrongly: "pick <b>it</b> up", never "pick up <b>it</b>".</li>
    </ul>
""")

deep('Literary Appreciation: Prose, Drama & Poetry', """

    <h3>Deep dive: what to analyse in each genre</h3>
    <ul>
      <li><b>Prose</b> — plot (exposition → rising action → climax → resolution), characters (protagonist, antagonist, round vs flat), setting, <b>theme</b> (the central idea, e.g. corruption, love, conflict of cultures), and point of view (first-person "I", third-person limited or omniscient).</li>
      <li><b>Drama</b> — acts and scenes; dialogue drives everything; a <b>soliloquy</b> is a character thinking aloud alone (Hamlet's "To be or not to be"); an <b>aside</b> is a remark the audience hears but other characters do not; tragedy ends in disaster for a flawed hero, comedy ends happily.</li>
      <li><b>Poetry</b> — stanzas (the verse "paragraphs"), <b>rhyme scheme</b> (labelled abab…), rhythm/metre, and imagery (visual, auditory, tactile). Tone = the poet's attitude; mood = the feeling created in you.</li>
    </ul>
    <h3>Answering context questions: PEEL</h3>
    <p><b>P</b>oint (answer the question directly) → <b>E</b>vidence (quote or reference the text) → <b>E</b>xplanation (what it shows and why it matters) → <b>L</b>ink (back to the question or theme). Every mark scheme rewards this shape.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Retelling the story instead of analysing — summary is not appreciation.</li>
      <li>Confusing <b>theme</b> (the big idea) with <b>plot</b> (the events).</li>
      <li>Naming a device without quoting the line that proves it.</li>
    </ul>
""")

open(CUR, 'w', encoding='utf-8').write(s)
print('English batch 5 written: 9 topics')
