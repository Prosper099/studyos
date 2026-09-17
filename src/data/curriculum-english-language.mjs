export default {

    color: 'rose', icon: '📝', blurb: 'Lexis, structure, comprehension, summary and the essay — where JAMB marks are won or lost.',
    topics: {
      SS1: [
        {
          title: 'Tenses & Subject–Verb Concord',
          tags: ['Concord', '12 tenses', 'Agreement'],
          summary: 'Matching verbs to subjects — the most tested structure topic in JAMB.',
          content: `
            <h3>The core rule</h3>
            <p>A singular subject takes a singular verb; a plural subject takes a plural verb. The trap is a long phrase between the subject and the verb.</p>
            <div class="worked"><b>Correct:</b> "The list of absentees <b>is</b> on the table." (subject = <i>list</i>, singular)<br>
            <b>Correct:</b> "The boys, as well as their teacher, <b>were</b> present." (main subject = <i>boys</i>)</div>
            <h3>Tricky concord cases</h3>
            <ul>
              <li><b>Either/or, neither/nor</b> — the verb agrees with the <b>nearer</b> subject: "Neither the boys nor the teacher <b>was</b> there."</li>
              <li><b>Each, every, everyone, nobody</b> — always singular: "Every one of the students <b>has</b> a book."</li>
              <li><b>Collective nouns</b> — singular when acting as one unit ("The team <b>is</b> winning"), plural when acting individually ("The team <b>are</b> arguing").</li>
              <li><b>Two nouns joined by "and" as one idea</b> — singular: "Bread and butter <b>is</b> my breakfast."</li>
              <li><b>A number of</b> = plural; <b>the number of</b> = singular.</li>
            </ul>
            <h3>Tense sequence</h3>
            <div class="formula">Present simple (habit) • present continuous (now) • present perfect (past → now, "has lived")<br>
            Past simple (finished past time) • past perfect (earlier past, "had left")</div>
            <div class="tip"><b>Exam tip:</b> If a sentence contains a definite past time word (yesterday, last year, in 2010) the verb must be <b>past simple</b>, never present perfect.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> "Neither the manager nor the clerks ___ present." (was / were)<br>
            <b>were</b> — with neither…nor the verb agrees with the nearer subject, "clerks".</div>
            <div class="worked"><b>Q2.</b> "I ___ (live) in Lagos since 2019."<br>
            <b>have lived</b> — "since" links the past to the present.</div>
            <div class="worked"><b>Q3.</b> "She ___ (visit) her aunt last Sunday."<br>
            <b>visited</b> — a definite past time takes the past simple, never the present perfect.</div>
            <div class="worked"><b>Q4.</b> "The team ___ (be) celebrating their victory."<br>
            <b>are</b> — the members are acting individually, so the collective noun takes a plural verb.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Using a continuous form with a state verb: "I am knowing" and "she is wanting" are wrong.</li>
              <li>Letting a phrase between the subject and the verb decide the agreement. Ignore it and find the real subject.</li>
              <li>Forgetting the third-person -s in the present simple.</li>
              <li>Writing "more better" or "most tallest" — never double a comparison.</li>
            </ul>
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

          `,
          cards: [
            { q: 'What is the rule of concord (subject-verb agreement)?', a: 'The verb must agree with its subject in number and person: a singular subject takes a singular verb (\'The boy runs\'), a plural subject takes a plural verb (\'The boys run\').' },
            { q: 'Choose the correct verb: \'The list of absentees (is/are) on the board.\'', a: '\'is\' — the subject is \'list\' (singular), not \'absentees\'; words in between do not change the subject.' },
            { q: 'Complete: \'Neither the teacher nor the students (was/were) present.\'', a: '\'were\' — with neither...nor, the verb agrees with the nearer subject (\'the students\').' },
            { q: 'Complete: \'Each of the boys (has/have) a textbook.\'', a: '\'has\' — \'each\', \'every\', \'everyone\' and \'nobody\' are singular, even when followed by a plural noun.' },
            { q: 'When do we use the present continuous tense? Give an example.', a: 'For actions happening now or around now: \'She is reading.\' Compare the simple present for habits: \'She reads every day.\'' },
            { q: 'What is the difference between \'I have eaten\' and \'I ate\'?', a: '\'I have eaten\' (present perfect) links the past to the present — no finished time is stated; \'I ate\' (simple past) refers to a finished time (\'I ate yesterday\').' },
            { q: 'Complete with the correct form: \'By the time we arrived, the film (start) already.\'', a: '\'had started\' — the past perfect is used for the earlier of two past actions.' },
            { q: 'Which collective nouns usually take singular verbs in formal writing?', a: 'Words like \'committee\', \'team\', \'family\', \'government\' take a singular verb when acting as one unit: \'The committee has decided.\'' },
            { q: 'Choose the correct sentence: (a) The news are good. (b) The news is good.', a: '(b) — \'news\' looks plural but is an uncountable singular noun, like \'mathematics\', \'politics\' and \'information\'.' },
            { q: 'Complete: \'The teacher, together with his students, (is/are) going to the museum.\'', a: '\'is\' — phrases like \'together with\', \'along with\', \'as well as\' do not make the subject plural.' },
            { q: 'Rewrite in the future tense: \'They complete the project next week.\'', a: '\'They will complete the project next week\' — or \'They are going to complete...\' for a planned intention.' },
            { q: 'Correct the error: \'He don\'t like beans.\'', a: '\'He doesn\'t like beans\' — third person singular (he, she, it) takes \'does/doesn\'t\' in the simple present.' },
            { q: '“Neither the boys nor the teacher ___ present.”', a: 'was — with neither/nor the verb agrees with the NEARER subject (teacher).' },
            { q: 'State the core rule of subject-verb concord.', a: 'A singular subject takes a singular verb and a plural subject takes a plural verb: the boy runs, the boys run. Find the true subject first - ignore phrases in between.' },
            { q: 'How do either/or and neither/nor affect the verb?', a: 'The verb agrees with the nearer subject: "Either the boys or the teacher IS to blame" but "Either the teacher or the boys ARE to blame". Neither is always singular on its own.' }
          ],
          quiz: [
            { q: 'Choose the correct verb: "Each of the boys ___ a prize."', options: ['has', 'have', 'having', 'were given'], correct: 0,
              exp: '"Each" is singular, so it takes a singular verb: each of the boys HAS a prize.' },
            { q: 'Choose the correct verb: "The team ___ playing well today."', options: ['is', 'are', 'were', 'have been'], correct: 0,
              exp: 'A collective noun acting as one unit takes a singular verb: the team IS playing well.' },
            { q: 'Choose the correct verb: "Bread and butter ___ my favourite breakfast."', options: ['is', 'are', 'were', 'have been'], correct: 0,
              exp: 'Bread and butter is treated as one idea (a single dish), so the verb is singular: IS.' },
            { q: 'Choose the correct verb: "Neither of the answers ___ correct."', options: ['is', 'are', 'were', 'have been'], correct: 0,
              exp: '"Neither" is always singular: neither of the answers IS correct.' },
            { q: 'Choose the correct verb: "Ten kilometres ___ a long distance to walk."', options: ['is', 'are', 'were', 'have been'], correct: 0,
              exp: 'Distances, sums of money and periods of time act as single units, so they take singular verbs.' },
            { q: 'Choose the correct verb: "Everyone ___ present at the meeting."', options: ['was', 'were', 'have been', 'are'], correct: 0,
              exp: 'Everyone, somebody, nobody and anybody are singular pronouns: everyone WAS present.' },
            { q: 'Complete: "He asked me where I ___."', options: ['lived', 'live', 'am living', 'will live'], correct: 0,
              exp: 'Sequence of tenses: after the past verb "asked", the subordinate verb shifts back - lived, not live.' },
            { q: 'Choose the correct verb: "The principal, together with the teachers, ___ attending."', options: ['is', 'are', 'were', 'have been'], correct: 0,
              exp: 'Phrases like "together with" and "as well as" do not change the subject - the principal IS attending.' },
            { q: 'Choose the correct verb: "Mathematics ___ an interesting subject."', options: ['is', 'are', 'were', 'have been'], correct: 0,
              exp: 'Names of subjects, games and disciplines ending in -s are singular: Mathematics IS interesting.' },
            { q: 'Choose the correct verb: "Either the boys or the teacher ___ to blame."', options: ['is', 'are', 'were', 'have been'], correct: 0,
              exp: 'With either/or and neither/nor, the verb agrees with the NEARER subject - the teacher, so IS.' }
          ],
        },
        {
          title: 'Idioms & Figurative Language',
          tags: ['Simile', 'Metaphor', 'Personification'],
          summary: 'Common idioms in the JAMB lexis section and how to spot figures of speech.',
          content: `
            <h3>Figures of speech</h3>
            <ul><li><b>Simile</b> — comparison using "like" or "as": "as brave as a lion".</li>
            <li><b>Metaphor</b> — direct comparison without "like": "Life is a journey."</li>
            <li><b>Personification</b> — giving human qualities to things: "The wind whispered."</li>
            <li><b>Hyperbole</b> — deliberate exaggeration: "I've told you a thousand times."</li>
            <li><b>Irony</b> — saying the opposite of what is meant.</li>
            <li><b>Euphemism</b> — a mild phrase for a harsh one: "passed away".</li>
            <li><b>Oxymoron</b> — contradictory terms together: "deafening silence".</li></ul>
            <h3>Idioms that appear often in JAMB</h3>
            <table><tr><th>Idiom</th><th>Meaning</th></tr>
            <tr><td>to beat about the bush</td><td>to avoid the main point</td></tr>
            <tr><td>to let the cat out of the bag</td><td>to reveal a secret</td></tr>
            <tr><td>to be in hot water</td><td>to be in trouble</td></tr>
            <tr><td>a blessing in disguise</td><td>something good that seemed bad</td></tr>
            <tr><td>to turn a deaf ear</td><td>to ignore deliberately</td></tr>
            <tr><td>once in a blue moon</td><td>very rarely</td></tr></table>
            <div class="tip"><b>Exam tip:</b> For idiom questions, choose the option that keeps the <b>whole sentence</b> meaningful — never match a single word.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> "After failing twice, Musa decided to <u>throw in the towel</u>." What does this mean?<br>
            To <b>give up</b>. The image comes from boxing, where a towel is thrown into the ring to stop a fight.</div>
            <div class="worked"><b>Q2.</b> Identify the figure of speech: "The classroom was a zoo."<br>
            A <b>metaphor</b> — the classroom is directly compared with a zoo, without "like" or "as".</div>
            <div class="worked"><b>Q3.</b> "He is as busy as a bee." Rewrite this as a metaphor.<br>
            "He <b>is</b> a bee, moving from task to task without rest."</div>
            <div class="worked"><b>Q4.</b> "The news was a bitter pill to swallow." What figure of speech is this, and what does it mean?<br>
            A <b>metaphor</b>; the news was unpleasant but had to be accepted.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Matching a single word in the idiom rather than the meaning of the <b>whole phrase</b>.</li>
              <li>Confusing a simile with a metaphor — the presence of "like" or "as" makes it a simile.</li>
              <li>Confusing <b>irony</b> (meaning the opposite) with <b>sarcasm</b> (mockery intended to hurt).</li>
            </ul>
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
              <li>Read the <b>whole sentence</b> — idioms mean what the context makes them mean ("pull my leg" at a comedy show != an injury).</li>
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

          `,
          cards: [
            { q: 'What is an idiom? Give an example.', a: 'An idiom is a phrase whose meaning cannot be understood from the individual words: \'kick the bucket\' means to die; \'break the ice\' means to start a conversation.' },
            { q: 'What is a simile? Give an example.', a: 'A simile compares two things using \'like\' or \'as\': \'He is as brave as a lion.\'' },
            { q: 'What is a metaphor? Give an example.', a: 'A metaphor compares by saying one thing IS another (no \'like\' or \'as\'): \'Time is a thief.\'' },
            { q: 'What is personification? Give an example.', a: 'Giving human qualities to non-human things: \'The wind whispered through the trees.\'' },
            { q: 'What is hyperbole? Give an example.', a: 'Deliberate exaggeration for emphasis: \'I\'ve told you a million times.\'' },
            { q: 'What is a euphemism? Give an example.', a: 'A mild expression replacing a harsh one: \'He passed away\' instead of \'He died\'; \'between jobs\' instead of \'unemployed\'.' },
            { q: 'Explain the meaning of these idioms: (a) spill the beans, (b) once in a blue moon, (c) bite off more than you can chew.', a: '(a) Reveal a secret; (b) very rarely; (c) take on more than you can manage.' },
            { q: 'What is irony? Give an example.', a: 'Saying or experiencing the opposite of what is expected: a fire station burns down; saying \'What lovely weather!\' during a storm.' },
            { q: 'What is onomatopoeia? Give three example words.', a: 'Words that imitate sounds: \'buzz\', \'bang\', \'hiss\', \'cock-a-doodle-doo\'.' },
            { q: 'What is alliteration? Give an example.', a: 'Repetition of the same initial consonant sound: \'Peter Piper picked a peck of pickled peppers.\'' },
            { q: 'Interpret the proverb: \'A stitch in time saves nine.\'', a: 'Dealing with a problem early (one stitch now) prevents it from growing into a much bigger problem (nine stitches later) — act before trouble multiplies.' },
            { q: 'Meaning of “to let the cat out of the bag”?', a: 'To reveal a secret, usually by accident.' },
            { q: 'Difference between simile and metaphor?', a: 'A simile compares using "like"/"as"; a metaphor compares directly without them.' },
            { q: 'Define personification, hyperbole and euphemism.', a: 'Personification gives human qualities to non-human things ("the wind howled"). Hyperbole is deliberate exaggeration ("a million times"). A euphemism softens a harsh idea ("passed away" for "died").' },
            { q: 'Give five JAMB-favourite idioms and their meanings.', a: '"Let the cat out of the bag" - reveal a secret. "A stitch in time saves nine" - act early. "Once in a blue moon" - very rarely. "Break the ice" - ease tension. "Bite off more than you can chew" - take on too much.' }
          ],
          quiz: [
            { q: 'What does "a stitch in time saves nine" mean?', options: ['Dealing with a problem early prevents bigger trouble later', 'Sewing is a useful skill', 'Nine stitches are better than one', 'Time heals all wounds'], correct: 0,
              exp: 'One timely stitch prevents nine later - fix problems early before they grow.' },
            { q: '"He bit off more than he could chew" means he...', options: ['took on more than he could handle', 'ate too quickly', 'spoke rudely', 'wasted his food'], correct: 0,
              exp: 'The idiom describes someone who accepts a task too big for them.' },
            { q: 'A simile compares two things...', options: ['using "like" or "as"', 'by saying one thing IS another', 'by giving them human qualities', 'by exaggerating'], correct: 0,
              exp: 'Similes use like or as: "brave as a lion". A metaphor states the comparison directly.' },
            { q: 'A metaphor compares two things by...', options: ['saying one thing is another', 'using like or as', 'repeating consonants', 'exaggerating greatly'], correct: 0,
              exp: '"He is a lion in battle" - no like or as; the comparison is stated directly. That is a metaphor.' },
            { q: '"The wind howled through the night" is an example of...', options: ['personification', 'simile', 'hyperbole', 'euphemism'], correct: 0,
              exp: 'Howling is a human/animal action given to the wind - that is personification.' },
            { q: 'An extravagant exaggeration such as "I have told you a million times" is...', options: ['hyperbole', 'metaphor', 'irony', 'simile'], correct: 0,
              exp: 'Hyperbole deliberately overstates for effect - nobody literally said it a million times.' },
            { q: '"Break the ice" means to...', options: ['start a conversation and ease tension', 'damage something frozen', 'end a friendship', 'cool a drink'], correct: 0,
              exp: 'The idiom means to do or say something that relaxes an awkward social situation.' },
            { q: '"Once in a blue moon" means...', options: ['very rarely', 'every month', 'at night', 'suddenly'], correct: 0,
              exp: 'A blue moon is extremely rare - so the idiom means something that hardly ever happens.' },
            { q: 'A mild expression used in place of a harsh one (e.g. "passed away" for "died") is...', options: ['a euphemism', 'a hyperbole', 'a paradox', 'a proverb'], correct: 0,
              exp: 'Euphemisms soften unpleasant truths: "passed away", "let go", "between jobs".' },
            { q: '"He is a lion in battle" is an example of...', options: ['metaphor', 'simile', 'personification', 'onomatopoeia'], correct: 0,
              exp: 'The soldier IS called a lion - a direct comparison without like or as, so a metaphor.' }
          ],
        },
        {
          title: 'Punctuation & Capitalisation',
          tags: ['Commas', 'Apostrophes', 'Speech marks', 'Semi-colons'],
          summary: 'The mechanical accuracy marks that are the easiest in the whole English paper.',
          content: `
            <h3>1. The comma</h3>
            <ul>
              <li>To separate items in a list: "I bought rice, beans, oil and salt."</li>
              <li>After an introductory word or phrase: "However, we disagreed."</li>
              <li>Before a conjunction joining two independent clauses: "She was tired, so she slept."</li>
              <li>To enclose a non-essential clause: "Musa, who plays football, is my friend."</li>
            </ul>
            <h3>2. The apostrophe</h3>
            <table>
              <tr><th>Use</th><th>Example</th></tr>
              <tr><td>Possession (singular)</td><td>the boy's book</td></tr>
              <tr><td>Possession (plural ending in s)</td><td>the boys' books</td></tr>
              <tr><td>Contractions</td><td>don't, it's (= it is)</td></tr>
            </table>
            <div class="warn"><b>The classic error:</b> <b>its</b> is possessive ("the dog wagged its tail"); <b>it's</b> means "it is". Also, ordinary plurals never take an apostrophe — "banana's for sale" is wrong.</div>
            <h3>3. Speech marks</h3>
            <p>Use them for the exact words spoken, and keep the punctuation <b>inside</b>: She said, "I am coming."</p>
            <h3>4. Semi-colon and colon</h3>
            <p>A <b>semi-colon</b> joins two closely related independent clauses without a conjunction: "The rain stopped; the match resumed."<br>
            A <b>colon</b> introduces a list or an explanation: "Bring three things: a pen, a ruler and a calculator."</p>
            <h3>5. Capital letters</h3>
            <ul>
              <li>The first word of a sentence and the pronoun <b>I</b>.</li>
              <li>Proper nouns: names, places, days, months, languages — <b>Lagos</b>, <b>Monday</b>, <b>Yoruba</b>.</li>
              <li>Titles of people: <b>President</b> Buhari, <b>Doctor</b> Ade.</li>
              <li>The first word of direct speech: He said, "<b>Wait</b> for me."</li>
            </ul>
            <div class="worked"><b>Worked example — correct this sentence:</b><br>
            "its a beautiful day said mrs ade, lets go to lagos"<br>
            <b>Corrected:</b> "It's a beautiful day," said Mrs Ade, "let's go to Lagos."</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Correct this: "the dog wagged it's tail when mrs ade arrived"<br>
            "<b>The</b> dog wagged <b>its</b> tail when <b>Mrs</b> Ade arrived." — "its" is possessive; "it's" means "it is".</div>
            <div class="worked"><b>Q2.</b> Punctuate: he said i will come tomorrow<br>
            He said, "<b>I</b> will come <b>tomorrow</b>."</div>
            <div class="worked"><b>Q3.</b> Insert the apostrophe: the students books were stolen<br>
            "The <b>students'</b> books were stolen" — a plural noun ending in s takes the apostrophe after the s.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Using an apostrophe to form an ordinary plural: "banana's for sale" is wrong.</li>
              <li>Putting the punctuation of direct speech outside the quotation marks.</li>
              <li>Capitalising common nouns such as "school" or "church" when they are not part of a proper name.</li>
              <li>Joining two independent clauses with a comma instead of a semi-colon or a conjunction — the comma splice.</li>
            </ul>
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
              <li>Plural != possessive: "the 1990<b>s</b>" needs no apostrophe; "the 1990<b>'s</b> fashion" is possessive.</li>
              <li>In reported (indirect) speech the quotation marks disappear — don't punctuate twice.</li>
            </ul>

          `,
          cards: [
            { q: 'When do you use a full stop, a question mark and an exclamation mark?', a: 'Full stop ends a statement; question mark ends a question; exclamation mark shows strong feeling or a command shouted: \'What a goal!\'' },
            { q: 'Give three uses of the comma.', a: 'Separating items in a list (\'rice, beans and yam\'), after an introduction (\'However, we stayed.\'), and to join two complete sentences with a conjunction (\'She sang, and he danced\').' },
            { q: 'What is the difference between a colon and a semicolon?', a: 'A colon introduces a list or explanation (\'Bring: a pen, a biro and a ruler.\'); a semicolon joins two closely related complete sentences without a conjunction (\'Rain fell; the match was cancelled.\').' },
            { q: 'When do you use an apostrophe for possession, and where does it go with plurals?', a: 'Singular: the boy\'s bag (apostrophe + s). Plural ending in s: the boys\' bags (apostrophe after the s). Plural not ending in s: the children\'s toys.' },
            { q: 'Explain the difference between \'its\' and \'it\'s\'.', a: '\'Its\' shows possession (\'The dog wagged its tail\'); \'it\'s\' is short for \'it is\' or \'it has\' (\'It\'s raining\'). Test: if \'it is\' fits, use it\'s.' },
            { q: 'List five kinds of words that must begin with capital letters.', a: 'The first word of a sentence, proper nouns (names of people, places: Ada, Lagos), days and months (Monday, June), titles of books and people (Mr Okonkwo), the pronoun \'I\', and names of languages and nationalities.' },
            { q: 'Punctuate correctly: come here she said', a: '\'Come here,\' she said. — opening capital, comma inside the quotation marks, and a full stop at the end.' },
            { q: 'When is a hyphen used? Give two examples.', a: 'To join parts of compound words: \'mother-in-law\', \'well-known\', \'twenty-one\'.' },
            { q: 'What is a run-on sentence, and how can it be fixed?', a: 'Two sentences joined with no punctuation (\'I came I saw\'). Fix it with a full stop, a semicolon, or a comma plus conjunction (\'I came, and I saw.\').' },
            { q: 'How do you punctuate the date and addresses in a formal letter?', a: 'Date: day month year with a comma pattern like \'10th September, 2026.\' The writer\'s address ends each line with a comma (open punctuation) or none — but be consistent, and the letter ends with a comma after \'Yours faithfully\'.' },
            { q: 'Punctuate: my uncle lives in abuja nigeria', a: 'My uncle lives in Abuja, Nigeria. — capital for the sentence start and each proper noun, comma between city and country, full stop at the end.' },
            { q: 'When are quotation marks (inverted commas) used?', a: 'To enclose the exact words spoken or written by someone: \'I will come tomorrow,\' she promised. Also for titles of short works like poems and articles.' },
            { q: 'State the rules for using apostrophes.', a: 'Two jobs only: (1) contractions - the apostrophe replaces missing letters (don’t, it’s); (2) possession - boy’s bag (one boy), boys’ bags (many boys). Possessive pronouns (its, theirs, yours) never take apostrophes.' },
            { q: 'When do you use a colon, and when a semi-colon?', a: 'A colon introduces a list, quotation or explanation after a complete sentence. A semi-colon joins two independent clauses that are closely linked - a stronger pause than a comma, weaker than a full stop.' },
            { q: 'What are the main capitalisation rules?', a: 'Capitalise the first word of a sentence, names of people and places, days and months, titles before names (Mr, Dr), the pronoun I, and important words in book titles.' }
          ],
          quiz: [
            { q: 'In "the boys’ bags", the apostrophe shows...', options: ['plural possession', 'a contraction', 'a singular possession', 'an abbreviation'], correct: 0,
              exp: 'The bags belong to many boys, so the apostrophe comes after the plural s: boys’.' },
            { q: 'In the contraction "don’t", the apostrophe...', options: ['replaces the missing letters "o"', 'shows possession', 'marks a plural', 'ends the sentence'], correct: 0,
              exp: 'Don’t = do not; the apostrophe stands where letters were dropped. Same in can’t, it’s, I’m.' },
            { q: 'Which sentence uses commas correctly?', options: ['I bought rice, beans, yam and oil.', 'I bought, rice beans yam, and oil.', 'I bought rice beans, yam and, oil.', 'I, bought rice beans yam and oil.'], correct: 0,
              exp: 'Commas separate the items in a list - never stick a comma between an adjective-less pair or before the first item.' },
            { q: 'In direct speech, where does the full stop usually go?', options: ['inside the quotation marks', 'outside the quotation marks', 'before the speech marks', 'it is omitted'], correct: 0,
              exp: 'In the convention used in Nigerian exams the full stop sits inside the closing quotation mark: "I am coming."' },
            { q: 'A colon is used to...', options: ['introduce a list or explanation', 'join two verbs', 'end a question', 'show possession'], correct: 0,
              exp: 'The colon announces what follows: "Bring three things: a pen, a ruler and a calculator."' },
            { q: 'A semi-colon is used to...', options: ['join two closely related independent clauses', 'introduce direct speech', 'show possession', 'separate adjectives'], correct: 0,
              exp: 'The semi-colon links two full sentences that belong together: "The rain stopped; the match resumed."' },
            { q: 'Which sentence is correctly capitalised?', options: ['Mr Ade lives in Lagos.', 'mr Ade lives in lagos.', 'Mr ade Lives In Lagos.', 'Mr Ade Lives in lagos.'], correct: 0,
              exp: 'Capital letters for titles (Mr), names (Ade) and places (Lagos) - but not for every word.' },
            { q: 'Choose the correct sentence.', options: ['The dog wagged its tail.', 'The dog wagged it’s tail.', 'The dog wagged its’ tail.', 'The dog wagged its tails tail.'], correct: 0,
              exp: 'Its (no apostrophe) is possessive; it’s means "it is". Possessive pronouns never take apostrophes.' },
            { q: 'Which mark ends a direct question?', options: ['a question mark', 'a full stop', 'an exclamation mark', 'a semi-colon'], correct: 0,
              exp: 'Direct questions end with a question mark: "Where are you going?"' },
            { q: 'A comma is needed before "but" when it...', options: ['joins two independent clauses', 'joins two nouns only', 'starts a list', 'ends a sentence'], correct: 0,
              exp: 'When but links two complete sentences, put a comma before it: "I was tired, but I finished the work."' }
          ],
        }
      ],
      SS2: [
        {
          title: 'Comprehension & Summary Writing',
          tags: ['Inference', 'Topic sentence', 'WAEC summary rules'],
          summary: 'How to answer comprehension questions and score full marks in WAEC summary.',
          content: `
            <h3>Comprehension strategy</h3>
            <ol><li>Read the <b>questions first</b> so you know what to look for.</li>
            <li>Skim the passage for the main idea, then scan for detail questions.</li>
            <li>For "the writer's attitude" questions, look at adjectives and adverbs — they carry the tone.</li>
            <li>Quote only where the question asks you to; otherwise answer in your own words in <b>complete sentences</b>.</li></ol>
            <h3>WAEC summary rules</h3>
            <ul><li>Answer in <b>complete grammatical sentences</b> unless told otherwise.</li>
            <li><b>No lifting</b> — do not copy whole sentences from the passage; that attracts zero marks.</li>
            <li>Respect the <b>word limit</b>; extra words are penalised.</li>
            <li>Give <b>distinct</b> points — repeating an idea does not earn a second mark.</li>
            <li>No introductions ("In this passage…") and no examples or illustrations.</li></ul>
            <div class="worked"><b>Model transformation:</b><br>
            Passage: "Many young people waste valuable hours each day on social media, which reduces the time available for serious study."<br>
            Summary point: "Excessive use of social media reduces young people's study time."</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Passage: "Although the farmers toiled from dawn to dusk, the rains refused to fall and the harvest was poor."<br>
            <i>Question:</i> In one sentence, why was the harvest poor?<br>
            <b>Answer:</b> The harvest was poor because the rains did not fall, despite the farmers' hard work.</div>
            <div class="worked"><b>Q2.</b> Passage: "The government's new policy, which many experts have condemned, is likely to worsen the situation."<br>
            <i>Question:</i> What is the writer's attitude to the policy?<br>
            <b>Answer:</b> The writer is critical and doubtful, as shown by the words "condemned" and "worsen".</div>
            <div class="worked"><b>Q3.</b> Compress this into one summary point: "A large number of students spend many hours every single day playing games on their mobile phones, and this means they have very little time left for reading."<br>
            <b>Answer:</b> Excessive phone gaming leaves students little time to read.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li><b>Lifting</b> a whole sentence from the passage — this scores zero in WAEC summary.</li>
              <li>Answering in fragments when complete sentences are required.</li>
              <li>Giving the same point twice in different words and expecting two marks.</li>
              <li>Answering the question you expected rather than the one asked.</li>
            </ul>
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

          `,
          cards: [
            { q: 'What is the difference between skimming and scanning?', a: 'Skimming is reading quickly for the general idea; scanning is searching for a specific detail (a name, date or figure) — use both before answering comprehension questions.' },
            { q: 'How do you find the main idea of a passage?', a: 'Look at the title, the topic sentence of each paragraph (often the first sentence) and any repeated words — the main idea is what the whole passage is mostly about.' },
            { q: 'What is an inference question?', a: 'One whose answer is not stated directly — you must \'read between the lines\' and draw a conclusion from clues in the passage.' },
            { q: 'How do you answer a \'what does the word X mean as used in the passage?\' question?', a: 'Give the meaning that fits the context, not just any dictionary meaning — test your answer by replacing the word in the sentence.' },
            { q: 'What does a reference question ask? Give an example.', a: 'What a pronoun or phrase points back to: \'The boy dropped the cup and it broke\' — \'it\' refers to the cup.' },
            { q: 'State four rules of good summary writing.', a: 'Use your own words; keep only the main points (drop examples, illustrations and repetition); stick to the required number of sentences; and write in correct grammar without adding new ideas.' },
            { q: 'What must you never do when writing a summary?', a: 'Never copy whole sentences from the passage, never add your own opinion or outside information, and never exceed the number of sentences or words required.' },
            { q: 'How do you identify the writer\'s purpose in a passage?', a: 'Ask: is the writer informing (giving facts), persuading (arguing a view), entertaining (telling a story) or describing? The purpose shapes the tone and word choice.' },
            { q: 'How should you answer True/False comprehension questions?', a: 'Judge strictly by the passage — not by general knowledge; if the passage does not say it, it is not \'true according to the passage\'.' },
            { q: 'What is a topic sentence?', a: 'The sentence that states the main idea of a paragraph; the other sentences give supporting details, examples or evidence.' },
            { q: 'Why should comprehension answers be written in full sentences?', a: 'Examiners award marks for complete, grammatical answers that repeat the question\'s key words — one-word answers often lose marks even when correct.' },
            { q: 'What does the writer\'s tone mean? Give examples of tone words.', a: 'Tone is the writer\'s attitude shown through word choice: serious, humorous, critical, admiring, angry or sympathetic.' },
            { q: 'Three rules for a WAEC summary answer.', a: 'Complete sentences, no lifting from the passage, and respect the word limit.' },
            { q: 'Describe a reliable strategy for comprehension questions.', a: 'Read the questions first, then the passage twice - once for sense, once to underline evidence. Answer in full sentences, quote only when asked, and make every answer traceable to the passage.' },
            { q: 'How do you find the main idea of a paragraph?', a: 'Look for the topic sentence - usually the first - which states the point that the other sentences explain, illustrate or prove. Summarise that sentence in your own words.' }
          ],
          quiz: [
            { q: 'In a comprehension passage, the best answer to a question must be...', options: ['supported by evidence in the passage', 'based on your own opinion', 'the longest option', 'always the first option'], correct: 0,
              exp: 'Comprehension tests what the WRITER said - every answer must be traceable to the passage.' },
            { q: 'What should you do before reading a comprehension passage?', options: ['read the questions first', 'read the last line only', 'check the length', 'memorise the title'], correct: 0,
              exp: 'Reading the questions first tells you what to look for, so the first read is already targeted.' },
            { q: 'Which of these should be left OUT of a summary?', options: ['examples and illustrations', 'the main points', 'stated reasons', 'results mentioned by the writer'], correct: 0,
              exp: 'Examples only support the points; a summary carries the points themselves.' },
            { q: 'A summary answer should be written...', options: ['in your own words', 'by copying the best sentences', 'in note form always', 'using the writer’s exact paragraphs'], correct: 0,
              exp: 'Lifted sentences score zero even when correct - restate the ideas in your own words.' },
            { q: 'When a question says "according to the passage", the answer must...', options: ['come only from the passage', 'come from general knowledge', 'be your opinion', 'be quoted from another book'], correct: 0,
              exp: 'The phrase locks the answer to the passage - outside knowledge earns nothing.' },
            { q: 'If the question asks for three sentences, you must write...', options: ['exactly three complete sentences', 'as many as you like', 'three words', 'three paragraphs'], correct: 0,
              exp: 'Examiners count: extra sentences are ignored or penalised, and fragments lose marks. Give exactly what is asked.' },
            { q: 'How should summary points be presented?', options: ['as complete sentences with correct punctuation', 'as single keywords', 'as a numbered shopping list', 'in note form with symbols'], correct: 0,
              exp: 'Each point must stand as a grammatical sentence - fragments like "poverty. lack of schools." lose expression marks.' },
            { q: 'To find the main idea of a paragraph, look at...', options: ['the topic sentence', 'the longest sentence', 'the last word', 'any example given'], correct: 0,
              exp: 'The topic sentence - usually first - states the point that the rest of the paragraph supports.' },
            { q: 'For a "what does the word X mean as used in the passage?" question, the meaning must...', options: ['fit the context of the passage', 'be the first dictionary meaning', 'be a synonym of the title', 'rhyme with the word'], correct: 0,
              exp: 'Words change meaning with context - choose the sense that fits how the writer used it there.' },
            { q: 'What must never appear in a summary answer?', options: ['your own opinion', 'the writer’s main points', 'your own vocabulary', 'complete sentences'], correct: 0,
              exp: 'A summary reports the passage, not you - opinions, introductions and conclusions all waste words and marks.' }
          ],
        },
        {
          title: 'Synonyms, Antonyms & Word Formation',
          tags: ['Nearest in meaning', 'Opposite in meaning', 'Prefixes'],
          summary: 'Building a lexis vocabulary and reading the stem carefully.',
          content: `
            <h3>Read the stem!</h3>
            <p>The single biggest cause of lost marks is answering "nearest in meaning" when the question asked for the <b>opposite</b>. Underline the instruction before you choose.</p>
            <h3>Word formation (prefixes &amp; suffixes)</h3>
            <table><tr><th>Affix</th><th>Meaning</th><th>Example</th></tr>
            <tr><td>un-, in-, im-, il-, ir-, dis-, non-</td><td>not</td><td>unhappy, illegal, irregular</td></tr>
            <tr><td>pre-</td><td>before</td><td>preview</td></tr>
            <tr><td>post-</td><td>after</td><td>postpone</td></tr>
            <tr><td>-tion, -ment, -ness</td><td>noun maker</td><td>education, movement, kindness</td></tr>
            <tr><td>-ful, -less</td><td>with / without</td><td>careful, careless</td></tr></table>
            <h3>Context clues</h3>
            <p>If you do not know a word, look at what surrounds it — contrast words (but, however, although) signal an opposite, and "that is" or a comma signals a definition.</p>
            <div class="tip"><b>Exam tip:</b> Learn antonym <b>pairs</b> together (abundant/scarce, humble/arrogant, expand/contract). Revision is twice as efficient.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Nearest in meaning: "The evidence was <u>conclusive</u>."<br>
            <b>Decisive</b> (options such as "confusing" or "weak" are wrong).</div>
            <div class="worked"><b>Q2.</b> Opposite in meaning: "Her remarks were <u>deliberate</u>."<br>
            <b>Accidental</b>.</div>
            <div class="worked"><b>Q3.</b> Form a noun from "decide" and use it in a sentence.<br>
            <b>Decision</b> — "The committee's decision surprised everyone."</div>
            <div class="worked"><b>Q4.</b> Choose the correct prefix: "The witness gave a ___ account of the accident." (in- / il- / im-)<br>
            <b>Inaccurate</b>.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Answering "nearest in meaning" when the question asks for the <b>opposite</b>. Underline the instruction first.</li>
              <li>Choosing a word that fits the sentence loosely but not the underlined word exactly.</li>
              <li>Confusing the wrong prefix — it is "illegal", "irregular" and "impossible", not "inlegal" or "unpossible".</li>
            </ul>
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

          `,
          cards: [
            { q: 'What is a synonym? Give three pairs.', a: 'A word with the same or nearly the same meaning as another: big/large, begin/commence, happy/joyful.' },
            { q: 'What is an antonym? Give three pairs.', a: 'A word opposite in meaning: ancient/modern, expand/contract, victory/defeat.' },
            { q: 'In \'nearest in meaning\' questions, what is the golden rule?', a: 'Test each option by substituting it into the original sentence — the best synonym must keep the sentence\'s meaning unchanged.' },
            { q: 'Add a prefix to make the opposite: (a) happy, (b) agree, (c) place, (d) behave.', a: '(a) unhappy; (b) disagree; (c) displace; (d) misbehave — common negative prefixes: un-, dis-, in-/im-, mis-, non-.' },
            { q: 'What does the suffix \'-ful\' mean? Give two examples.', a: '\'Full of\': beautiful (full of beauty), careful (full of care). Its opposite is \'-less\': careless (without care).' },
            { q: 'Form the noun from each verb: decide, inform, agree, govern.', a: 'Decision, information, agreement, government — word formation changes a word\'s class while keeping its core meaning.' },
            { q: 'Give the word family of \'active\'.', a: 'act (verb), active (adjective), actively (adverb), activity (noun), inactivity (negative noun) — knowing families helps in cloze and summary questions.' },
            { q: 'Distinguish between homophones with an example set.', a: 'Homophones sound the same but differ in spelling and meaning: \'their/there/they\'re\', \'peace/piece\', \'write/right\'.' },
            { q: 'Choose the correct word: \'The new law will (affect/effect) all students.\'', a: '\'affect\' — affect is usually the verb (to influence); effect is usually the noun (the result): \'The law will have an effect.\'' },
            { q: 'What are collocations? Give two examples.', a: 'Words that naturally go together: \'make a mistake\' (not \'do a mistake\'), \'heavy rain\' (not \'strong rain\') — collocations mark natural, native-like English.' },
            { q: 'Form the adjective: nation, comfort, depend, fame.', a: 'National, comfortable, dependable (dependent), famous.' },
            { q: 'Find the odd one out: joyful, cheerful, elated, miserable.', a: '\'Miserable\' — the other three are synonyms meaning very happy; miserable is the antonym.' },
            { q: 'Why must you read the stem of a lexical question carefully?', a: 'The same options can serve a "nearest in meaning" (synonym) or "opposite in meaning" (antonym) question. Misreading the stem turns a sure mark into a sure zero.' },
            { q: 'List common prefixes and what they mean.', a: 'un-/dis-/in-: not (unhappy, dislike, inactive). re-: again (rewrite). pre-: before (preview). mis-: wrongly (misjudge). anti-: against (antisocial).' },
            { q: 'How do you use context clues?', a: 'Look at the words and sentences around the unknown word - examples, contrasts ("but", "however") and cause-effect links usually reveal whether it is positive or negative and roughly what it means.' }
          ],
          quiz: [
            { q: '"Choose the word NEAREST in meaning" asks for...', options: ['a synonym', 'an antonym', 'a homophone', 'a prefix'], correct: 0,
              exp: 'Nearest in meaning = synonym. Always check the stem - "opposite in meaning" flips the task.' },
            { q: 'Choose the word nearest in meaning to "abundant".', options: ['plentiful', 'scarce', 'costly', 'heavy'], correct: 0,
              exp: 'Abundant means existing in large quantity - plentiful.' },
            { q: 'Choose the word OPPOSITE in meaning to "ancient".', options: ['modern', 'old', 'ruined', 'antique'], correct: 0,
              exp: 'Ancient means very old, so its opposite is modern.' },
            { q: 'The prefix "un-" means...', options: ['not', 'again', 'before', 'together'], correct: 0,
              exp: 'Un- negates: unhappy = not happy, unsafe = not safe.' },
            { q: 'The suffix "-tion" usually forms...', options: ['a noun', 'a verb', 'an adverb', 'a preposition'], correct: 0,
              exp: 'Educate becomes education, act becomes action - "-tion" turns verbs into nouns.' },
            { q: 'Choose the word opposite in meaning to "transparent".', options: ['opaque', 'clear', 'glassy', 'bright'], correct: 0,
              exp: 'Transparent lets light through; opaque blocks it completely.' },
            { q: 'Choose the word nearest in meaning to "reluctant".', options: ['unwilling', 'eager', 'careless', 'angry'], correct: 0,
              exp: 'Reluctant means hesitant or unwilling to do something.' },
            { q: 'The suffix "-ful" means...', options: ['full of', 'without', 'against', 'before'], correct: 0,
              exp: 'Beautiful = full of beauty; careful = full of care. (Its opposite partner is -less: careless.)' },
            { q: 'If you do not know a word in a passage, you should...', options: ['use the surrounding words to guess its sense', 'skip every question using it', 'choose the longest option', 'assume it is negative'], correct: 0,
              exp: 'Context clues - the words and sentences around a gap - usually reveal the meaning.' },
            { q: 'Choose the word opposite in meaning to "expand".', options: ['contract', 'grow', 'widen', 'inflate'], correct: 0,
              exp: 'Expand means to grow bigger; contract means to shrink smaller.' }
          ],
        },
        {
          title: 'Essay & Letter Writing',
          tags: ['Formal letter', 'Article', 'Argumentative'],
          summary: 'The exact formats examiners expect for each composition type.',
          content: `
            <h3>Formal letter</h3>
            <ul><li>Writer's address (top right) and date.</li><li>Receiver's designation and address (left).</li>
            <li>Salutation: "Dear Sir/Madam,"</li><li>Title in capital letters, underlined or bold.</li>
            <li>Body: introduction → purpose → conclusion/request.</li><li>Close: "Yours faithfully," + full name.</li></ul>
            <h3>Informal letter</h3>
            <ul><li>One address (top right), date, "Dear John,", conversational tone, "Yours sincerely," + first name only.</li></ul>
            <h3>Article / speech / debate</h3>
            <ul><li>Title (article), or "Mr Chairman, Panel of Judges…" (debate).</li>
            <li>Clear stand in the introduction, three or four developed points, a strong conclusion.</li></ul>
            <div class="tip"><b>Exam tip:</b> Content, organisation, expression and mechanical accuracy are marked separately. Perfect format earns organisation marks even when your ideas are simple.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Write the opening of a formal letter to your principal requesting permission to be absent.<br>
            <i>The Principal,</i><br><i>Government College, Ikeja,</i><br><i>Lagos.</i><br><i>Dear Sir,</i><br><i><b>REQUEST FOR PERMISSION TO BE ABSENT FROM SCHOOL</b></i><br>
            "I write to request permission to be absent from school from 12 to 14 March, as I must travel with my family…"</div>
            <div class="worked"><b>Q2.</b> Give three body paragraphs for the essay: "The advantages of reading."<br>
            (1) It builds vocabulary and improves expression. (2) It broadens knowledge of the world and other cultures. (3) It sharpens the imagination and reduces stress — each point explained with an example.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Omitting the second address and date in a formal letter, or signing "Yours faithfully" in an informal one.</li>
              <li>Writing an argumentative essay with no clear stand in the introduction.</li>
              <li>Using one long paragraph instead of developing separate points.</li>
              <li>Ignoring the word limit — both extremes lose marks.</li>
            </ul>
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

          `,
          cards: [
            { q: 'Name the four main types of essay.', a: 'Narrative (telling a story), descriptive (painting a picture in words), expository (explaining and informing), and argumentative/persuasive (arguing a position).' },
            { q: 'What are the three essential parts of every essay?', a: 'Introduction (introduce the topic), body (develop your points in paragraphs — one main idea per paragraph), and conclusion (sum up and give a final thought).' },
            { q: 'List the features of a formal letter.', a: 'Writer\'s address and date; receiver\'s designation and address; formal salutation \'Dear Sir/Madam\'; a heading/title for the subject; formal tone; closing \'Yours faithfully\' with signature and full name.' },
            { q: 'How does an informal letter differ from a formal letter?', a: 'One address (the writer\'s) and date; a friendly salutation (\'Dear Ada\'); casual, warm language; no title needed; it closes \'Yours sincerely\' (or \'Your friend\') with the first name only.' },
            { q: 'What is the correct salutation and closing for a letter to a principal you do not know?', a: 'Salutation: \'Dear Sir/Madam\' (or \'The Principal\' as designation); closing: \'Yours faithfully,\' followed by signature and full name.' },
            { q: 'Why is planning (an outline) important before writing an essay?', a: 'An outline organises your points, keeps paragraphs focused, ensures you answer the actual question, and prevents repetition and running out of time.' },
            { q: 'In an argumentative essay, why should you mention the other side\'s view?', a: 'Refuting the opposing view shows balance and strengthens your argument — \'Some people say X, however...\' makes your position more convincing.' },
            { q: 'What is paragraph unity?', a: 'Every sentence in a paragraph must support that paragraph\'s single main idea; a new idea means a new paragraph.' },
            { q: 'How is an essay marked in WAEC/NECO? Name the four criteria.', a: 'Content (relevant ideas), Organisation (structure and flow), Expression (vocabulary, grammar, sentence variety), and Mechanical Accuracy (spelling, punctuation, capitalisation).' },
            { q: 'Give two useful opening phrases for a formal letter of complaint.', a: '\'I am writing to express my dissatisfaction with...\' and \'I wish to draw your attention to...\' — state the purpose in the first paragraph.' },
            { q: 'What should the title/heading of a formal letter look like?', a: 'A short subject line in capital letters or underlined, e.g. \'COMPLAINT ABOUT POOR WATER SUPPLY\' — placed after the salutation.' },
            { q: 'Name three common essay errors that cost marks.', a: 'Not answering the question asked; one giant paragraph with no structure; careless tense shifts and agreement errors — proofread before you finish.' },
            { q: 'How does a formal letter close?', a: '"Yours faithfully," followed by your full name (surname included).' },
            { q: 'Describe the full layout of a formal letter.', a: 'Writer’s address (top right) and date; recipient’s designation and address (left); salutation "Dear Sir/Madam,"; a heading in capitals or underlined; the body in paragraphs; closing "Yours faithfully," with signature and full name.' },
            { q: 'How do you open and close an article, speech or debate?', a: 'Open by addressing the audience ("Mr Chairman, ladies and gentlemen") and stating your position. Close by summing up and persuading - "I hope I have convinced you..." - then thank the audience.' }
          ],
          quiz: [
            { q: 'A formal letter should close with...', options: ['"Yours faithfully,"', '"Yours sincerely,"', '"Your friend,"', '"With love,"'], correct: 0,
              exp: 'Formal letters to a titled unknown (Dear Sir/Madam) close "Yours faithfully". "Yours sincerely" fits when you named the person.' },
            { q: 'An informal letter closes with...', options: ['"Yours sincerely," or a warm sign-off', '"Yours faithfully,"', '"Respectfully,"', '"Dear Sir,"'], correct: 0,
              exp: 'Informal letters to friends and family end warmly - "Yours sincerely", "Your friend", etc.' },
            { q: 'Which features MUST a formal letter have?', options: ['Writer’s address, date, recipient’s designation and address, salutation, heading, closing', 'Only a greeting and signature', 'A poem in the middle', 'The writer’s address only'], correct: 0,
              exp: 'Missing any required feature costs format marks: two addresses, date, Dear Sir/Madam, a heading, and Yours faithfully.' },
            { q: 'An informal letter is written to...', options: ['a friend or family member', 'a government official', 'a company manager', 'a newspaper editor'], correct: 0,
              exp: 'Informal means personal - friends, parents, siblings - so the tone may be relaxed and friendly.' },
            { q: 'How should an article or debate speech begin?', options: ['by greeting the audience (e.g. "Mr Chairman, ladies and gentlemen")', 'with the writer’s address', 'with "Dear Sir"', 'with the date only'], correct: 0,
              exp: 'Articles, speeches and debates address their audience first - that greeting is part of the required format.' },
            { q: 'The tone of a formal letter should be...', options: ['polite and businesslike, without slang or contractions', 'full of jokes and slang', 'emotional and dramatic', 'poetic'], correct: 0,
              exp: 'Formal writing avoids contractions (don’t), slang and over-familiarity - clear, polite and to the point.' },
            { q: 'Which is a good closing line for a debate speech?', options: ['"I hope I have been able to convince you, and not confuse you."', '"Yours faithfully."', '"Write back soon."', '"Your friend in need."'], correct: 0,
              exp: 'Debates end by thanking and persuading the audience - not with letter closings.' },
            { q: 'What comes first in a formal letter?', options: ['the writer’s address and the date', 'the recipient’s address', 'the heading', 'the salutation'], correct: 0,
              exp: 'Order: your address top right, date under it, then the recipient’s designation and address, salutation, heading, body.' },
            { q: 'The salutation of an informal letter could be...', options: ['"Dear Musa,"', '"Dear Sir/Madam,"', '"The Manager,"', '"To whom it may concern,"'], correct: 0,
              exp: 'Informal salutations use the person’s name - Dear Musa, Dear Mum. "Dear Sir/Madam" belongs to formal letters.' },
            { q: 'A speech for an occasion should mainly...', options: ['suit its audience and purpose, using rhetorical devices', 'list facts without order', 'copy a letter format', 'avoid any audience address'], correct: 0,
              exp: 'Speeches live or die by audience awareness: questions, repetition and tripling keep listeners engaged.' }
          ],
        },
        {
          title: 'Sentence Types, Clauses & Phrases',
          tags: ['Simple/complex', 'Subordination', 'Relative clauses'],
          summary: 'How sentences are built, and how to upgrade a simple sentence into a complex one.',
          content: `

            <h3>1. Why this topic wins marks</h3>
            <p>WAEC and NECO grammar sections repeatedly ask you to <b>identify</b> clauses and phrases, <b>classify</b> sentences, and <b>combine or rewrite</b> them. All of it rests on one skill: spotting the subject–verb units inside a sentence.</p>

            <h3>2. Sentence types by structure</h3>
            <ul>
              <li><b>Simple:</b> one independent clause (one subject–verb unit making a complete thought) — "Ada passed her exam."</li>
              <li><b>Compound:</b> two independent clauses joined by a coordinating conjunction (for, and, nor, but, or, yet, so — <b>FANBOYS</b>) or a semicolon — "Ada passed, and her mother celebrated."</li>
              <li><b>Complex:</b> one independent clause + at least one subordinate (dependent) clause — "Because Ada studied, she passed."</li>
              <li><b>Compound-complex:</b> two independent + one or more subordinate — "Because Ada studied, she passed, and her mother celebrated."</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Classify: "The rain fell, yet the pupils walked to school."<br>
            Two complete thoughts ("the rain fell" / "the pupils walked") joined by <b>yet</b> (a coordinator) → <b>compound</b>.</div>
            <div class="worked"><b>Worked example:</b> Classify: "The pupils who walked arrived wet."<br>
            "who walked" cannot stand alone (subordinate), attached to "the pupils arrived wet" → <b>complex</b>.</div>

            <h3>3. Sentence types by function</h3>
            <ul>
              <li><b>Declarative (statement):</b> gives information — ends with a full stop.</li>
              <li><b>Interrogative (question):</b> asks — "Did you revise?"</li>
              <li><b>Imperative (command/request):</b> the subject "you" is hidden — "Revise now."</li>
              <li><b>Exclamatory (strong feeling):</b> "What a result!"</li>
            </ul>

            <h3>4. Clauses: the subject–verb units</h3>
            <p>A <b>clause</b> contains a subject and a finite verb. <b>Independent (main)</b> clauses stand alone; <b>subordinate</b> clauses depend on a main clause. Subordinate clauses do three jobs:</p>
            <ul>
              <li><b>Noun clause:</b> acts as a noun (subject/object) — "That she passed <b>is true</b>"; test: replace with "it" — "It is true." Begins with that, whether, if, what.</li>
              <li><b>Adjectival (relative) clause:</b> describes a noun — "The book <b>which you lent me</b> is torn." Begins with who, whom, whose, which, that.</li>
              <li><b>Adverbial clause:</b> modifies the verb — time (when, before), reason (because), condition (if, unless), concession (although), purpose (so that) — "She smiled <b>because she passed</b>."</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Name the clause type: "I know <b>that he practises daily</b>." Object of "know" → <b>noun clause</b>.</div>

            <h3>5. Phrases: no subject–verb unit</h3>
            <p>A <b>phrase</b> is a group of words working together <b>without</b> a finite verb of its own:</p>
            <ul>
              <li><b>Noun phrase:</b> "the tall candidate" (head noun + modifiers).</li>
              <li><b>Verb phrase:</b> "has been practising".</li>
              <li><b>Adjectival phrase:</b> "full of errors".</li>
              <li><b>Adverbial phrase:</b> "very carefully", "in the morning".</li>
              <li><b>Prepositional phrase:</b> preposition + object — "on the desk", "after school".</li>
              <li><b>Infinitive phrase:</b> "to pass WAEC"; <b>gerund phrase:</b> "reading novels" (an -ing form used as a noun).</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> clause vs phrase question? Hunt the finite verb inside the underlined words. Verb present → clause; absent → phrase. "in the morning" has no verb → phrase.</div>

            <h3>6. Combining and rewriting (the mark magnet)</h3>
            <div class="worked"><b>Q:</b> Combine into a complex sentence: "The bell rang. The students left."<br>
            <b>When the bell rang, the students left.</b> (adverbial clause of time)</div>
            <div class="worked"><b>Q:</b> Rewrite as a simple sentence: "Because he was tired, he slept."<br>
            <b>Being tired, he slept.</b> (phrase replaces clause)</div>
            <div class="worked"><b>Q:</b> Begin: "The man is my uncle." Add a relative clause.<br>
            "The man <b>who repaired our gate</b> is my uncle."</div>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling a sentence compound because it is long — count <b>clauses</b>, not words.</li>
              <li>Treating "because he was tired" as a sentence — a subordinate clause alone is a fragment.</li>
              <li>Confusing a relative pronoun (which/who introducing a clause) with a conjunction.</li>
              <li>Calling "to pass" a clause — infinitives are phrases (no subject).</li>
              <li>Missing the hidden "you" in imperatives when asked for the subject.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> underline every finite verb first; each verb = one clause. Two verbs joined by FANBOYS = compound; one verb downgraded by because/who/when = complex. Mechanical, never wrong.</div>
          `,
          cards: [
            { q: 'Name the four sentence types by function with an example of each.', a: 'Declarative/statement (\'She sings.\'), interrogative/question (\'Does she sing?\'), imperative/command (\'Sing!\'), exclamatory (\'What a song!\').' },
            { q: 'What is the difference between a simple and a compound sentence?', a: 'A simple sentence has one independent clause (\'The bell rang.\'); a compound sentence joins two independent clauses with a conjunction: \'The bell rang, and the pupils rushed out.\'' },
            { q: 'What is a complex sentence? Give an example.', a: 'One independent clause plus at least one dependent (subordinate) clause: \'Because the rain stopped, we played outside.\' The dependent clause cannot stand alone.' },
            { q: 'What is a clause, and how does it differ from a phrase?', a: 'A clause has a subject and a verb (\'when he came\'); a phrase is a group of related words without both (\'in the morning\', \'the tall boy\').' },
            { q: 'Identify the clause type: \'I know that he is honest.\'', a: '\'that he is honest\' is a noun clause — it acts as the object of \'know\' (answers \'know what?\').' },
            { q: 'Identify the clause type: \'The boy who won the race is my cousin.\'', a: '\'who won the race\' is an adjective (relative) clause — it describes \'the boy\', introduced by the relative pronoun \'who\'.' },
            { q: 'Identify the clause type: \'She left before the film ended.\'', a: '\'before the film ended\' is an adverb clause — it tells WHEN she left, introduced by the subordinating conjunction \'before\'.' },
            { q: 'Name the seven coordinating conjunctions.', a: 'FANBOYS: For, And, Nor, But, Or, Yet, So — they join equal grammatical parts.' },
            { q: 'List four subordinating conjunctions.', a: 'because, although, if, when (also since, unless, while, before, after) — they introduce dependent clauses.' },
            { q: 'Convert to a complex sentence: \'He was tired. He finished the work.\'', a: '\'Although he was tired, he finished the work.\' — the subordinating conjunction turns one clause into a dependent clause.' },
            { q: 'What is a sentence fragment? Give an example and a fix.', a: 'An incomplete sentence lacking a subject, verb or complete thought: \'Because he was tired.\' Fix: attach it to a main clause — \'He left early because he was tired.\'' },
            { q: 'Identify the phrase type: \'The girl in the blue dress is my sister.\'', a: '\'in the blue dress\' is a prepositional phrase acting as an adjective — it identifies which girl.' },
            { q: 'What is the difference between a phrase and a clause?', a: 'A clause has a subject and a verb ("she sang"); a phrase is a meaningful group of words without that pair ("in the morning", "the tall man"). Every clause contains a phrase-like structure, never the reverse.' },
            { q: 'Name the four sentence types with examples.', a: 'Simple - one independent clause: "Birds sing." Compound - two independent clauses joined by a coordinator: "Birds sing, and dogs bark." Complex - independent + dependent: "When dawn broke, birds sang." Compound-complex - both structures combined.' },
            { q: 'How do subordinating conjunctions differ from coordinating ones?', a: 'Coordinators (FANBOYS) join EQUAL clauses. Subordinators (because, although, if, when, since) introduce a DEPENDENT clause that leans on the main clause for its meaning.' }
          ],
          quiz: [
            { q: 'A clause must contain...', options: ['a subject and a verb', 'only a verb', 'a conjunction', 'a preposition'], correct: 0,
              exp: 'A clause is any group of words with a subject doing a verb: "she laughed" is a clause.' },
            { q: 'A phrase differs from a clause because a phrase has...', options: ['no subject-verb pair', 'two subjects', 'no words', 'a subordinating conjunction'], correct: 0,
              exp: '"In the morning" and "the tall man" are phrases - groups of words without a subject-verb pair.' },
            { q: 'A simple sentence contains...', options: ['one independent clause', 'two independent clauses', 'one independent and one dependent clause', 'no verb'], correct: 0,
              exp: 'One subject-verb unit, however long: "The tired farmer slept" is a simple sentence.' },
            { q: 'A compound sentence contains...', options: ['two or more independent clauses joined by a coordinator', 'one dependent clause only', 'no conjunction', 'only phrases'], correct: 0,
              exp: 'Two full sentences joined by and, but, or, so: "The rain stopped, and the match resumed."' },
            { q: 'A complex sentence contains...', options: ['one independent clause and at least one dependent clause', 'only dependent clauses', 'two independent clauses and a coordinator', 'no subject'], correct: 0,
              exp: 'The dependent clause cannot stand alone: "Although it rained, we played football."' },
            { q: 'A sentence with both compound and complex structure is called...', options: ['compound-complex', 'simple', 'compound only', 'complex only'], correct: 0,
              exp: 'Two independent clauses plus at least one dependent clause makes it compound-complex.' },
            { q: 'Which of these is a subordinating conjunction?', options: ['because', 'and', 'but', 'so'], correct: 0,
              exp: 'Because, although, since, if and when start dependent clauses. And, but, so are coordinators (FANBOYS).' },
            { q: 'A relative clause usually begins with...', options: ['who, which or that', 'and, but or so', 'in, on or at', 'yes or no'], correct: 0,
              exp: 'Relative clauses describe a noun: "the boy WHO won", "the book THAT I read".' },
            { q: '"Although it rained, we played." is a...', options: ['complex sentence', 'simple sentence', 'compound sentence', 'phrase'], correct: 0,
              exp: '"Although it rained" is dependent; "we played" is independent - one of each makes it complex.' },
            { q: 'The coordinating conjunctions are remembered by...', options: ['FANBOYS (for, and, nor, but, or, yet, so)', 'SOH CAH TOA', 'BODMAS', 'MR NIGER D'], correct: 0,
              exp: 'FANBOYS: For, And, Nor, But, Or, Yet, So - the seven words that join equal clauses.' }
          ],
        }
      ],
      SS3: [
        {
          title: 'Direct & Indirect (Reported) Speech',
          tags: ['Tense backshift', 'Pronoun shift', 'Time shift'],
          summary: 'The systematic changes required when reporting what someone said.',
          content: `
            <h3>Tense backshift</h3>
            <table><tr><th>Direct</th><th>Reported</th></tr>
            <tr><td>present simple</td><td>past simple</td></tr>
            <tr><td>present continuous</td><td>past continuous</td></tr>
            <tr><td>past simple</td><td>past perfect</td></tr>
            <tr><td>will / can / may</td><td>would / could / might</td></tr></table>
            <h3>Time &amp; place shifts</h3>
            <div class="formula">today → that day • tomorrow → the next/following day • yesterday → the previous day<br>
            here → there • this → that • these → those</div>
            <h3>Pronouns &amp; question forms</h3>
            <p>Pronouns change according to the speaker and the listener. Reported questions use <b>statement word order</b> and no question mark.</p>
            <div class="worked"><b>Worked example:</b> "I am coming here tomorrow," he said → He said (that) <b>he was going there the next day</b>.<br>
            "Where do you live?" → He asked me <b>where I lived</b>.</div>
            <div class="warn"><b>Watch out:</b> If the reporting verb is in the present tense ("He says…") there is <b>no</b> backshift.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> "I have finished my work," she said.<br>
            She said (that) she <b>had finished her</b> work.</div>
            <div class="worked"><b>Q2.</b> "Please close the door," the teacher said to us.<br>
            The teacher <b>told us to close</b> the door. (A request becomes an infinitive, not "that we should close".)</div>
            <div class="worked"><b>Q3.</b> "Do not touch that," she said to me.<br>
            She <b>warned me not to touch</b> that.</div>
            <div class="worked"><b>Q4.</b> He says, "I am tired."<br>
            He says he <b>is</b> tired — with a present reporting verb there is <b>no</b> backshift.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Keeping question word order in a reported question. "He asked where <b>did I</b> live" is wrong; write "where <b>I lived</b>".</li>
              <li>Forgetting to shift pronouns and time expressions.</li>
              <li>Backshifting when the reporting verb is in the present tense.</li>
              <li>Leaving a question mark at the end of a reported question.</li>
            </ul>
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

          `,
          cards: [
            { q: 'What is the difference between direct and indirect speech?', a: 'Direct speech repeats the exact words in quotation marks (\'I am tired,\' he said); indirect speech reports the meaning without quotes (He said that he was tired).' },
            { q: 'What happens to the verb tense when reporting a statement made in the past?', a: 'It shifts one step back: present -> past (\'I am\' -> he was), past -> past perfect (\'I ate\' -> he had eaten), will -> would, can -> could, must -> had to.' },
            { q: 'Convert: \'I am waiting for you,\' she said.', a: 'She said that she was waiting for me — the pronouns change as well as the tense.' },
            { q: 'Convert to reported speech: \'We visited Kano last week,\' they said.', a: 'They said that they had visited Kano the week before — the past tense shifts to past perfect and \'last week\' becomes \'the week before\'.' },
            { q: 'How do you report a yes/no question?', a: 'Use asked + whether/if, statement word order, and no question mark: \'Are you ready?\' -> He asked whether I was ready.' },
            { q: 'How do you report a wh-question?', a: 'Keep the question word but use statement order: \'Where do you live?\' -> She asked where I lived (NOT \'where did I live\').' },
            { q: 'How do you report commands and requests?', a: 'Use told/ordered/requested + object + to-infinitive: \'Shut the door,\' he said -> He told me to shut the door. Negatives: \'Don\'t run\' -> He told us not to run.' },
            { q: 'How do you report an exclamation?', a: 'Use \'exclaimed\' with the feeling named: \'What a beautiful dress!\' -> She exclaimed with admiration that the dress was beautiful.' },
            { q: 'What is the difference between \'said\' and \'told\'?', a: '\'Told\' needs a person object (He told ME...); \'said\' does not (He said that...). Never \'He said me\'.' },
            { q: 'Which reporting verbs suit advice, warning and promise?', a: 'advised (\'You should rest\' -> He advised me to rest), warned (\'Don\'t touch it\' -> She warned us not to touch it), promised (\'I will help\' -> He promised to help).' },
            { q: 'Does the tense change when reporting a universal truth?', a: 'No — general truths stay in the present: \'Water boils at 100 degC,\' the teacher said -> The teacher said that water boils at 100 degC.' },
            { q: 'Convert: \'I bought this book yesterday,\' Ada said.', a: 'Ada said that she had bought that book the day before.' },
            { q: 'Change: “I am coming here tomorrow,” he said.', a: 'He said he was going there the next day (backshift + place/time shift).' },
            { q: 'State the rules for tense backshift in reported speech.', a: 'Present simple to past simple; present continuous to past continuous; past simple and present perfect to past perfect; will to would; can to could; may to might; must to had to. Universal truths keep their tense.' },
            { q: 'How do time and place words change in reported speech?', a: 'now to then, today to that day, yesterday to the day before, tomorrow to the next day, here to there, this to that, these to those, ago to before.' }
          ],
          quiz: [
            { q: 'Report: "I am tired," he said. He said that he ___ tired.', options: ['was', 'is', 'has been', 'will be'], correct: 0,
              exp: 'Present simple shifts back to past simple in reported speech: am becomes was.' },
            { q: 'In reported speech, tenses generally...', options: ['shift one step back into the past', 'stay exactly the same', 'move forward', 'become continuous'], correct: 0,
              exp: 'Present becomes past, past becomes past perfect, will becomes would - the backshift rule.' },
            { q: 'In reported speech, "tomorrow" becomes...', options: ['the next day / the following day', 'yesterday', 'today', 'last day'], correct: 0,
              exp: 'Time words shift with the change of viewpoint: tomorrow becomes the next day or the following day.' },
            { q: 'In reported speech, "here" becomes...', options: ['there', 'everywhere', 'nowhere', 'somewhere else entirely'], correct: 0,
              exp: 'Place words shift too: here becomes there, this becomes that.' },
            { q: 'Report: "Where are you going?" She asked me where I ___.', options: ['was going', 'am going', 'went going', 'going'], correct: 0,
              exp: 'Reported questions use statement order - subject before verb - and no question mark: where I was going.' },
            { q: 'Report: "Sit down," the teacher said. The teacher told me ___ down.', options: ['to sit', 'sit', 'that I sit', 'sitting'], correct: 0,
              exp: 'Commands become infinitives: told/ordered/commanded someone TO do something.' },
            { q: 'In reported speech, "this" usually becomes...', options: ['that', 'these', 'those ones always', 'it is'], correct: 0,
              exp: 'Near-pointing words move away: this becomes that, these becomes those.' },
            { q: 'Pronoun changes in reported speech depend on...', options: ['who is speaking to whom', 'the length of the sentence', 'the tense only', 'the punctuation'], correct: 0,
              exp: 'I may become he, she, we or they depending on who reported whose words - logic, not rules, decides.' },
            { q: 'Which reported speech keeps its original tense?', options: ['a universal truth such as "the sun rises in the east"', 'a personal plan', 'a command', 'a question about yesterday'], correct: 0,
              exp: 'Permanent truths do not backshift: he said the sun RISES in the east remains correct.' },
            { q: 'A reported yes/no question is introduced by...', options: ['if or whether', 'that only', 'what', 'which'], correct: 0,
              exp: '"Are you coming?" becomes He asked IF (or WHETHER) I was coming.' }
          ],
        },
        {
          title: 'Phrasal Verbs, Prepositions & Register',
          tags: ['Fixed prepositions', 'Idiomatic verbs', 'Formality'],
          summary: 'The small words that decide right and wrong in the structure paper.',
          content: `
            <h3>Common phrasal verbs</h3>
            <table><tr><th>Verb</th><th>Meaning</th></tr>
            <tr><td>put up with</td><td>tolerate</td></tr>
            <tr><td>look after</td><td>take care of</td></tr>
            <tr><td>call off</td><td>cancel</td></tr>
            <tr><td>break down</td><td>stop working</td></tr>
            <tr><td>come across</td><td>find by chance</td></tr>
            <tr><td>make up for</td><td>compensate</td></tr></table>
            <h3>Fixed prepositions (learn these as pairs)</h3>
            <ul><li>accused <b>of</b>, capable <b>of</b>, fond <b>of</b>, afraid <b>of</b></li>
            <li>good <b>at</b>, arrive <b>at</b> (a place), arrive <b>in</b> (a country/city)</li>
            <li>married <b>to</b>, similar <b>to</b>, different <b>from</b>, prevent <b>from</b></li>
            <li>depend <b>on</b>, rely <b>on</b>, congratulate <b>on</b></li></ul>
            <div class="tip"><b>Exam tip:</b> Register questions ask you to match a situation to the appropriate level of formality — choose the most natural spoken option for informal settings and the most polite for formal ones.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> "The match was ___ because of rain." (called off / called on)<br>
            <b>called off</b> — meaning cancelled.</div>
            <div class="worked"><b>Q2.</b> "She was charged ___ theft." (of / with)<br>
            <b>with</b>. Compare "accused <b>of</b>" and "convicted <b>of</b>".</div>
            <div class="worked"><b>Q3.</b> Choose the most appropriate response to "How do you do?" at a formal introduction.<br>
            "<b>How do you do?</b>" — it is a greeting, not a question about health.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Translating a phrasal verb word by word. "Put up with" has nothing to do with putting anything up.</li>
              <li>Using "arrive <b>to</b>" — it is "arrive <b>at</b> a place" and "arrive <b>in</b> a city or country".</li>
              <li>Using slang or contractions in a formal letter.</li>
            </ul>
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

          `,
          cards: [
            { q: 'What is a phrasal verb? Give two examples.', a: 'A verb combined with a particle (adverb or preposition) to create a new meaning: \'give up\' = quit, \'look after\' = take care of.' },
            { q: 'Give the meaning of: (a) put off, (b) break down, (c) run into, (d) turn down.', a: '(a) postpone; (b) stop working (a machine); (c) meet by chance; (d) reject.' },
            { q: 'What is the difference between \'look for\' and \'look after\'?', a: '\'Look for\' means to search (\'I\'m looking for my pen\'); \'look after\' means to take care of (\'She looks after her brother\') — the particle changes everything.' },
            { q: 'Choose the correct preposition: \'The meeting is (in/on/at) Monday (in/on/at) 9 a.m.\'', a: '\'on Monday\' (days take \'on\') and \'at 9 a.m.\' (clock times take \'at\'); months and years take \'in\' (in June, in 2026).' },
            { q: 'Give the correct preposition for: afraid, interested, good, congratulate, married.', a: 'afraid OF, interested IN, good AT, congratulate ON, married TO — these fixed pairings must be memorised.' },
            { q: 'What is register?', a: 'The level of formality of language suited to a situation: formal (\'The ceremony will commence at noon\'), neutral (\'The event starts at twelve\'), informal (\'It kicks off at twelve\').' },
            { q: 'Give a formal and an informal word for: begin, buy, apologise, sufficient.', a: 'begin/commence; buy/purchase; apologise/apologise formally vs \'say sorry\'; enough/sufficient — formal words suit essays and official letters.' },
            { q: 'Why is \'The car broke down on the expressway\' better understood than \'The car died\'?', a: '\'Broke down\' is the conventional phrasal verb for a vehicle ceasing to work; precise register and idiom prevent misunderstanding.' },
            { q: 'Correct the preposition: \'He is suffering from headache since Monday.\'', a: '\'He has been suffering from a headache since Monday\' — \'since\' needs the present perfect continuous, and \'headache\' takes the article \'a\'.' },
            { q: 'Complete with a phrasal verb: \'The thieves (escaped with) the money\' -> use \'made ... with\'.', a: '\'The thieves made off with the money\' — \'make off with\' means to steal and escape with something.' },
            { q: 'Choose the right register: \'Kindly (a) drop or (b) submit your scripts.\' — which for an exam notice?', a: '(b) submit — official notices use formal register; \'drop\' is casual spoken English.' },
            { q: 'What does \'call off\' mean? Use it in a sentence.', a: 'To cancel: \'The school called off the match because of rain.\'' },
            { q: '“She was accused ___ theft.”', a: 'of — accused of, capable of, fond of, afraid of.' },
            { q: 'What is a phrasal verb? Give four examples.', a: 'A verb plus a particle (adverb or preposition) whose combined meaning differs from the verb alone: look after (take care of), put off (postpone), give up (quit), run out of (exhaust a supply).' },
            { q: 'List fixed preposition pairs to memorise.', a: 'accused OF, afraid OF, belong TO, congratulated ON, depend ON, interested IN, good AT, married TO, apologise FOR, prevent FROM. They follow no logic - learn them as pairs.' }
          ],
          quiz: [
            { q: '"Look after" means to...', options: ['take care of', 'search for', 'ignore', 'look backwards'], correct: 0,
              exp: 'Look after = take care of: "She looks after her younger brother."' },
            { q: '"Put off" means to...', options: ['postpone', 'switch off', 'extinguish', 'wear'], correct: 0,
              exp: 'Put off = delay or postpone: "The match was put off until Saturday."' },
            { q: '"Give up" means to...', options: ['stop doing something', 'hand in homework', 'shout loudly', 'give a gift'], correct: 0,
              exp: 'Give up = quit or stop trying: "He gave up smoking last year."' },
            { q: 'Complete: "She was congratulated ___ her success."', options: ['on', 'for', 'with', 'at'], correct: 0,
              exp: 'Congratulate takes ON: congratulated on her success - fixed pairs must be memorised.' },
            { q: 'Complete: "He is afraid ___ dogs."', options: ['of', 'from', 'with', 'by'], correct: 0,
              exp: 'Afraid OF - a fixed prepositional pair.' },
            { q: 'Complete: "Success depends ___ hard work."', options: ['on', 'in', 'at', 'from'], correct: 0,
              exp: 'Depend ON (or upon) - one of the pairs JAMB loves to test.' },
            { q: '"Run out of" means to...', options: ['use up a supply completely', 'jog outside', 'escape from', 'hide something'], correct: 0,
              exp: 'We ran out of sugar = there is no sugar left.' },
            { q: 'Which word is the more FORMAL choice?', options: ['purchase', 'buy', 'grab', 'get hold of'], correct: 0,
              exp: 'Register is the level of formality: purchase (formal) vs buy (neutral) vs grab (informal).' },
            { q: 'Complete: "This bag belongs ___ me."', options: ['to', 'for', 'with', 'at'], correct: 0,
              exp: 'Belong TO - a fixed pair, like listen to and agree with.' },
            { q: '"Carry out" means to...', options: ['perform or conduct', 'transport outside', 'lift up', 'remove'], correct: 0,
              exp: 'Carry out an experiment, a plan, an order = perform it.' }
          ],
        },
        {
          title: 'Literary Appreciation: Prose, Drama & Poetry',
          tags: ['Themes', 'Dramatic devices', 'Poetic forms'],
          summary: 'The terms and the analytical method needed for the literature-in-English questions.',
          content: `
            <h3>1. Prose</h3>
            <ul>
              <li><b>Plot</b> — the sequence of events; <b>setting</b> — time and place.</li>
              <li><b>Characterisation</b> — how the writer reveals personality, through action, speech or description.</li>
              <li><b>Point of view</b> — first person ("I"), third person limited, or third person omniscient (the narrator knows everything).</li>
              <li><b>Theme</b> — the central idea, for example betrayal, colonial conflict or the clash between tradition and change.</li>
            </ul>
            <h3>2. Drama</h3>
            <ul>
              <li><b>Tragedy</b> — ends in the downfall of the protagonist, often through a <b>tragic flaw</b> (hamartia).</li>
              <li><b>Comedy</b> — ends happily, usually in marriage or reconciliation.</li>
              <li><b>Dramatic irony</b> — the audience knows what a character does not.</li>
              <li><b>Soliloquy</b> — a character speaks their thoughts aloud, alone on stage.</li>
              <li><b>Aside</b> — a remark heard by the audience but not by the other characters.</li>
              <li><b>Flashback</b> — an earlier scene inserted into the present action.</li>
            </ul>
            <h3>3. Poetry</h3>
            <table>
              <tr><th>Device</th><th>What it does</th></tr>
              <tr><td>Rhyme scheme</td><td>Patterns sound, e.g. ABAB</td></tr>
              <tr><td>Rhythm / metre</td><td>Patterns stress, e.g. iambic pentameter</td></tr>
              <tr><td>Alliteration</td><td>Repeats consonant sounds: "silent sea"</td></tr>
              <tr><td>Assonance</td><td>Repeats vowel sounds</td></tr>
              <tr><td>Onomatopoeia</td><td>The word sounds like the thing: "buzz", "crash"</td></tr>
              <tr><td>Enjambment</td><td>The sense runs on past the end of a line</td></tr>
              <tr><td>Symbolism</td><td>An object stands for an idea</td></tr>
            </table>
            <h3>4. How to answer a literature question</h3>
            <ol>
              <li>Answer the <b>question asked</b>, not the one you prepared.</li>
              <li>Make a clear point, then support it with a <b>reference or short quotation</b> from the text.</li>
              <li>Explain the <b>effect</b> — why the writer chose that word, image or device.</li>
              <li>Link back to the theme in your conclusion.</li>
            </ol>
            <div class="worked"><b>Model paragraph:</b><br>
            "The writer presents Okonkwo as a man ruled by fear of weakness. His beating of his wife during the Week of Peace shows that his need to appear strong overrides even religious law, and the punishment that follows foreshadows his eventual downfall. Through this, the writer suggests that pride which refuses to bend will eventually break."</div>
            <div class="tip"><b>Exam tip:</b> never retell the story. Examiners reward <b>analysis</b> — comment on how the writer achieves an effect, and quote to prove it.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> "The audience knows that the drink is poisoned, but the hero does not." Which device is this?<br>
            <b>Dramatic irony</b>.</div>
            <div class="worked"><b>Q2.</b> Identify the devices: "The wind howled and the leaves danced."<br>
            <b>Personification</b> twice — howling and dancing are human actions given to the wind and leaves.</div>
            <div class="worked"><b>Q3.</b> What is Okonkwo's tragic flaw, and how does it lead to his downfall?<br>
            His <b>fear of appearing weak</b>, which drives him to violence even when restraint would serve him better, and finally to his act of defiance and suicide.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Retelling the plot instead of analysing <b>how</b> the writer achieves an effect.</li>
              <li>Quoting at length without explaining the quotation.</li>
              <li>Confusing the <b>narrator</b> with the <b>author</b>.</li>
              <li>Calling every sad ending a tragedy — a tragedy requires the downfall of a protagonist through a flaw.</li>
            </ul>
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

          `,
          cards: [
            { q: 'Name the three genres of literature with an example form of each.', a: 'Prose (novels, short stories — e.g. Things Fall Apart), drama (plays — e.g. The Lion and the Jewel), and poetry (poems — e.g. \'The Piano and Drums\').' },
            { q: 'Name the five main elements of prose fiction.', a: 'Plot (the sequence of events), character, setting (time and place), theme (the central idea), and point of view (who tells the story).' },
            { q: 'Who are the protagonist and antagonist?', a: 'The protagonist is the main character the story centres on; the antagonist opposes the protagonist — the source of the story\'s central conflict.' },
            { q: 'What is the difference between tragedy and comedy in drama?', a: 'Tragedy ends in disaster for the hero, often through a fatal flaw (e.g. pride); comedy ends happily, often in marriage or reconciliation, and mocks human weaknesses with humour.' },
            { q: 'What is a stanza, and what is a rhyme scheme?', a: 'A stanza is a group of lines in a poem (like a paragraph); the rhyme scheme is the pattern of end rhymes, written with letters — ABAB means lines 1 and 3 rhyme, and 2 and 4 rhyme.' },
            { q: 'Identify the device: \'The angry sky roared.\'', a: 'Personification — the sky is given human qualities (anger, roaring). If it were \'the sky roared like a lion\', it would be a simile.' },
            { q: 'What is the difference between theme and moral?', a: 'The theme is the central idea or subject explored (e.g. betrayal); the moral is the lesson the writer wants the reader to learn (e.g. \'pride comes before a fall\').' },
            { q: 'Distinguish between flat and round characters.', a: 'Flat characters are simple and unchanging (a cruel stepmother); round characters are complex and develop through the story — they change as events affect them.' },
            { q: 'Name three types of conflict in literature.', a: 'Man against man (rivalry), man against nature (a storm, an animal), man against himself (inner doubt or fear), and man against society (rebellion against custom).' },
            { q: 'What are flashback and foreshadowing?', a: 'Flashback interrupts the story to show earlier events; foreshadowing drops hints about what will happen later, building suspense.' },
            { q: 'What is dramatic irony?', a: 'When the audience knows something a character does not — we watch a character walk into a trap we can see coming; it creates tension or humour.' },
            { q: 'How should you answer an appreciation question on a poetic device?', a: 'Identify the device, quote the exact line, then explain its EFFECT — what picture, feeling or idea it creates (\'The simile compares X to Y, suggesting...\').' },
            { q: 'Compare prose, drama and poetry.', a: 'Prose: sentences and paragraphs (novels, short stories). Drama: dialogue and stage directions, written for performance. Poetry: lines and stanzas with rhythm, sound devices and concentrated imagery.' },
            { q: 'Define plot, theme, setting, protagonist and antagonist.', a: 'Plot: the sequence of events. Theme: the central idea or message. Setting: time and place. Protagonist: the main character. Antagonist: whoever or whatever opposes the protagonist.' },
            { q: 'How should you answer a literature question?', a: 'Use Point-Evidence-Explanation: make a clear claim, support it with a quotation or precise reference, then explain how the evidence proves the point. Always answer the exact question asked.' }
          ],
          quiz: [
            { q: 'Prose is writing that...', options: ['uses ordinary sentences and paragraphs, like novels and short stories', 'must rhyme', 'is only performed on stage', 'has no characters'], correct: 0,
              exp: 'Prose = novels, novellas and short stories - flowing sentences and paragraphs, not verse.' },
            { q: 'Drama is mainly distinguished by...', options: ['dialogue and stage directions, written to be performed', 'rhyming couplets', 'a single narrator only', 'having no plot'], correct: 0,
              exp: 'Plays live in dialogue and action: characters speak directly, and stage directions guide performance.' },
            { q: 'Poetry is characterised by...', options: ['rhythm, imagery and stanzas', 'paragraphs of prose', 'stage directions', 'only dialogue'], correct: 0,
              exp: 'Poems compress meaning into lines and stanzas, using rhythm, sound patterns and imagery.' },
            { q: 'The main character of a story is the...', options: ['protagonist', 'antagonist', 'narrator only', 'chorus'], correct: 0,
              exp: 'The protagonist drives the action; the antagonist opposes them.' },
            { q: 'The character who opposes the hero is the...', options: ['antagonist', 'protagonist', 'foil always', 'narrator'], correct: 0,
              exp: 'The antagonist works against the protagonist - a person, a society, or even nature.' },
            { q: 'The setting of a story is...', options: ['its time and place', 'its moral lesson', 'its title', 'its climax'], correct: 0,
              exp: 'Setting = where and when the action happens; it shapes mood and what characters can do.' },
            { q: 'The central idea or message of a work is its...', options: ['theme', 'plot', 'setting', 'diction'], correct: 0,
              exp: 'Theme is the big idea - love, betrayal, justice - that the story explores.' },
            { q: 'The sequence of events in a story is the...', options: ['plot', 'theme', 'tone', 'imagery'], correct: 0,
              exp: 'Plot is the organised chain of events: exposition, rising action, climax, resolution.' },
            { q: 'A tragedy typically ends in...', options: ['the downfall or death of the main character', 'a wedding', 'a lucky escape', 'a joke'], correct: 0,
              exp: 'Tragedy traces a great character’s fall, often through a fatal flaw; comedy ends happily, often in marriage.' },
            { q: 'A strong literature answer should...', options: ['make a point, give evidence from the text, and explain it', 'retell the whole story', 'give only your feelings', 'copy the question'], correct: 0,
              exp: 'Point - Evidence - Explanation: state your claim, quote or cite the text, then show how it proves your claim.' }
          ],
        }
      ],
      JSS1: [
        {
          title: 'Sentence Structure & Composition',
          tags: ['Subject & predicate', 'Complete sentences', 'Punctuation'],
          summary: 'What every complete sentence must have, how to join ideas, and the capitalisation and punctuation marks that earn easy marks.',
          content: `
            <h3>1. The two halves of every sentence</h3>
            <p>Every complete sentence in English has two parts: the <b>subject</b> (who or what the sentence is about) and the <b>predicate</b> (what is said about the subject — it always contains the verb). If either half is missing, you do not have a sentence; you have a fragment, and examiners deduct marks for fragments.</p>
            <div class="worked"><b>Worked example:</b> "The pupils cleaned the classroom."<br>
            Subject = <b>The pupils</b>; predicate = <b>cleaned the classroom</b> (verb = cleaned).<br>
            "My younger brother" = fragment (no verb). "Is sleeping on the mat" = fragment (no subject). Joined: "My younger brother is sleeping on the mat." = complete sentence.</div>
            <ul>
              <li>The subject can be one word (<b>Birds</b> fly) or a whole phrase (<b>The tall boy in the blue shirt</b> walks home).</li>
              <li>The predicate always carries a <b>verb</b>; without a verb there is no action or state, so nothing is being said.</li>
              <li>Commands hide their subject: "Close the door." really means "(You) close the door." — the subject <i>you</i> is understood.</li>
            </ul>

            <h3>2. Complete sentence or fragment? The two-question test</h3>
            <p>Before you call a group of words a sentence, ask: (1) <b>Who or what is it about?</b> (2) <b>What is happening or being said?</b> Both questions must have answers inside the words themselves.</p>
            <table>
              <tr><th>Fragment ✗</th><th>What is missing</th><th>Fixed ✓</th></tr>
              <tr><td>Running fast.</td><td>No subject</td><td>He is running fast.</td></tr>
              <tr><td>Under the tree.</td><td>No subject or verb</td><td>We sat under the tree.</td></tr>
              <tr><td>The big red ball.</td><td>No verb</td><td>The big red ball bounced away.</td></tr>
              <tr><td>Because it rained.</td><td>It is a half-idea (dependent clause)</td><td>We stayed inside because it rained.</td></tr>
            </table>
            <div class="formula">Watch out — TRAP: a group of words beginning with <i>because, although, when, if, after</i> can never stand alone as a sentence. It must lean on a main clause: "When the bell rang" ✗ → "When the bell rang, the students rushed out" ✓.</div>

            <h3>3. Four kinds of sentences (by purpose)</h3>
            <ul>
              <li><b>Statement (declarative)</b> — gives information; ends with a full stop: "Lagos is a busy city."</li>
              <li><b>Question (interrogative)</b> — asks something; ends with a question mark: "Where is your book?"</li>
              <li><b>Command (imperative)</b> — tells someone to do something; ends with a full stop (or !): "Stand up."</li>
              <li><b>Exclamation (exclamatory)</b> — shows strong feeling; ends with !: "What a beautiful morning!"</li>
            </ul>
            <p>Exams love to ask you to <b>rewrite</b> a sentence as another type: "You are late." (statement) → "Are you late?" (question) → "Don't be late!" (command/exclamation). Notice how the verb moves or changes each time.</p>

            <h3>4. Simple, compound and complex sentences</h3>
            <ul>
              <li><b>Simple</b> — one subject + one predicate: "Adaeze reads every night."</li>
              <li><b>Compound</b> — two complete sentences joined by a comma + conjunction (and, but, or, so, yet): "Adaeze reads every night, <b>and</b> she tops her class."</li>
              <li><b>Complex</b> — a main clause plus a dependent clause beginning with because, when, although, if, after, before: "Although the light went off, Adaeze finished her essay by candlelight."</li>
            </ul>
            <div class="worked"><b>Worked example (joining):</b> "It was raining." + "We played football." Joined with <i>but</i>: "It was raining, but we played football." Joined with <i>although</i>: "Although it was raining, we played football." Same two ideas, two different structures — and both are exam-correct.</div>

            <h3>5. Capital letters: the six rules that earn free marks</h3>
            <ul>
              <li>First word of every sentence: "<b>T</b>he bell has rung."</li>
              <li>The pronoun <b>I</b>, wherever it appears: "Musa and <b>I</b> went home."</li>
              <li>Names of people, places, schools, days, months: <b>A</b>mina, <b>K</b>ano, <b>M</b>onday, <b>J</b>anuary. (Seasons like <i>rainy season</i> are NOT capitalised.)</li>
              <li>Titles used with names: <b>M</b>rs Okon, <b>D</b>octor Bello — but not alone: "my teacher".</li>
              <li>Names of languages, nationalities and religions: <b>E</b>nglish, <b>Y</b>oruba, <b>N</b>igerian, <b>I</b>slam, <b>C</b>hristianity.</li>
              <li>First word of a direct quotation and of every line of most poems: She said, "<b>C</b>ome here."</li>
            </ul>

            <h3>6. Punctuation that carries meaning</h3>
            <ul>
              <li><b>Full stop (.)</b> ends statements and commands. <b>Question mark (?)</b> ends questions. <b>Exclamation mark (!)</b> ends strong feeling — use it once, not !!!</li>
              <li><b>Comma (,)</b> marks a small pause: after openers ("After the match, we ate rice."), between items in a list ("pens, pencils and rulers") and before and/but/so when they join two complete sentences.</li>
              <li><b>Apostrophe (')</b> shows ownership (Tunde's bag) or missing letters (don't = do not; can't = cannot).</li>
              <li><b>Quotation marks (" ")</b> wrap the exact words someone said: The teacher said, "Open your books."</li>
            </ul>
            <div class="formula">Watch out — TRAP: the comma before <i>and</i> only appears when <i>and</i> joins TWO COMPLETE sentences. "I bought bread and milk" needs no comma; "I bought bread, and my brother bought milk" needs one.</div>

            <h3>7. From sentences to composition: the paragraph recipe</h3>
            <p>A good paragraph is one idea wearing three coats: a <b>topic sentence</b> (states the idea), <b>supporting sentences</b> (explain, give examples, tell a small story) and a <b>closing sentence</b> (wraps the idea up). In JSS1 compositions (your school, your best friend, how I spent my last holiday), write 6–10 sentences per paragraph and let each paragraph own ONE idea.</p>
            <div class="worked"><b>Model paragraph:</b> "My favourite subject is Basic Science. <i>(topic)</i> I love it because we do experiments with real things like magnets, plants and springs. Last week we tested which materials conduct electricity, and my group's bulb lit up first. <i>(support)</i> Basic Science makes me feel like a real inventor, so I always sit at the front in that class. <i>(closing)</i>"</div>
            <div class="diagram"><svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of a paragraph: one topic sentence at the top, three supporting sentences in the middle, one closing sentence at the bottom, connected by arrows">
              <rect x="130" y="8" width="200" height="30" rx="8" fill="#4f46e5"/>
              <text x="230" y="27" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">1. Topic sentence (the idea)</text>
              <path d="M230 38 L230 52" stroke="#334155" stroke-width="2" marker-end="url(#arrE)"/>
              <defs><marker id="arrE" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#334155" stroke-width="1.5"/></marker></defs>
              <rect x="60" y="56" width="100" height="26" rx="7" fill="#10b981"/><text x="110" y="73" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">support 1</text>
              <rect x="180" y="56" width="100" height="26" rx="7" fill="#10b981"/><text x="230" y="73" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">support 2</text>
              <rect x="300" y="56" width="100" height="26" rx="7" fill="#10b981"/><text x="350" y="73" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">support 3</text>
              <path d="M230 82 L230 98" stroke="#334155" stroke-width="2" marker-end="url(#arrE)"/>
              <rect x="130" y="102" width="200" height="30" rx="8" fill="#f59e0b"/>
              <text x="230" y="121" text-anchor="middle" font-size="11" font-weight="700" fill="#78350f">Closing sentence (wrap it up)</text>
            </svg></div>

            <h3>8. Exam traps to dodge</h3>
            <ul>
              <li>Run-on sentences: "We ate rice we slept." → put a full stop, comma + conjunction, or semicolon between complete thoughts.</li>
              <li>Double subjects: "My brother <b>he</b> is tall." — choose one subject only.</li>
              <li>Missing capitals for days, months and names — the number one way students lose "free" marks.</li>
              <li>Using <i>!</i> everywhere in a formal letter. Formal writing stays calm: full stops only.</li>
            </ul>

            <h3>9. Agreement: the subject and verb must match</h3>
            <p>A sentence is only complete when its verb agrees with its subject in number: one subject takes a singular verb, plural subjects take plural verbs. In the present tense, a singular third-person subject (he, she, it, Tunde, the teacher) makes the verb wear -s: "She <b>walks</b>", "They <b>walk</b>".</p>
            <ul>
              <li>"The <b>boys play</b> football." / "The <b>boy plays</b> football." — count the subject, not the nearest word.</li>
              <li>Tricky middlemen: "The box <b>of oranges is</b> heavy." The subject is <i>box</i> (singular), not oranges.</li>
              <li>"Each", "every", "everyone" are singular: "Everyone <b>is</b> here." "Each of the boys <b>has</b> a book."</li>
              <li>Two subjects joined by <i>and</i> are plural: "Musa and Bola <b>are</b> friends." Joined by <i>or/nor</i>, the verb agrees with the nearer subject: "Musa or his brothers <b>are</b> coming."</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "One of the girls ___ (is/are) singing." The subject is <b>One</b>, not girls — so: "One of the girls <b>is</b> singing." Exams set this exact trap every single year.</div>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Underline the predicate: "The hungry dog chased the cat." <i>Ans: chased the cat.</i></li>
              <li><b>Q2.</b> Fix the fragment: "After the match." <i>Ans: After the match, we drank zobo. (add a main clause)</i></li>
              <li><b>Q3.</b> Join with <i>so</i>: "The road was flooded. We used the bridge." <i>Ans: The road was flooded, so we used the bridge.</i></li>
              <li><b>Q4.</b> Which type is "What a noisy market!"? <i>Ans: exclamatory.</i></li>
              <li><b>Q5.</b> Add capitals correctly: "on monday, mrs ade and i visited ilorin." <i>Ans: On Monday, Mrs Ade and I visited Ilorin.</i></li>
              <li><b>Q6.</b> Punctuate: "she asked where is my pen" <i>Ans: She asked, "Where is my pen?"</i></li>
              <li><b>Q7.</b> Simple or compound? "Kunle sings and Kunle dances." <i>Ans: compound (two complete clauses joined by and).</i></li>
              <li><b>Q8.</b> Write a topic sentence about "My school compound". <i>Ans: any clear one-idea sentence, e.g. "My school compound is wide and always clean."</i></li>
              <li><b>Q9.</b> Choose the correct verb: "The basket of mangoes (is/are) on the table." <i>Ans: is (subject = basket).</i></li>
              <li><b>Q10.</b> Rewrite as a complex sentence using <i>because</i>: "The rain fell. The match stopped." <i>Ans: The match stopped because the rain fell.</i></li>
              <li><b>Q11.</b> Correct the capitals: "we speak english and hausa at home." <i>Ans: We speak English and Hausa at home.</i></li>
              <li><b>Q12.</b> Add punctuation: "What a terrible traffic jam" <i>Ans: What a terrible traffic jam!</i></li>
            </ul>
            <div class="formula">SUMMARY: a complete sentence marries a subject to a predicate; fragments fail the two-question test; sentences state, ask, command or exclaim, and each type wears its own end punctuation; simple, compound and complex structures let you vary your writing; capital letters and commas are free marks with fixed rules; and every paragraph is one idea built from a topic sentence, supporting sentences and a close — master these and composition stops being a gamble.</div>

`,
          cards: [
            { q: 'What is a sentence?', a: 'A group of words that expresses a complete thought, containing at least a subject and a verb, and beginning with a capital letter and ending with a full stop.' },
            { q: 'Identify the subject and predicate in: \'The little girl sang a song.\'', a: 'Subject: \'The little girl\' (who the sentence is about); predicate: \'sang a song\' (what is said about the subject).' },
            { q: 'Name the four kinds of sentences by use.', a: 'Statements, questions, commands and exclamations — each with its own end punctuation.' },
            { q: 'Join into one sentence with \'but\': \'Musa studied hard. He failed the test.\'', a: '\'Musa studied hard, but he failed the test.\' — \'but\' joins opposite ideas; \'and\' joins similar ones; \'because\' shows reason.' },
            { q: 'Why must every sentence have a verb? Spot the error: \'The tall man in the black coat.\'', a: 'A verb shows the action or state — this is a fragment (no verb). Fix: \'The tall man wore a black coat.\'' },
            { q: 'Expand this sentence with an adjective and an adverb: \'The dog barked.\'', a: '\'The fierce dog barked loudly.\' — adjectives describe nouns, adverbs describe verbs, making writing vivid.' },
            { q: 'What is a paragraph, and what makes a good one?', a: 'A group of sentences about ONE idea, marked by an indent or a line space; a good paragraph has a topic sentence, supporting sentences and a clear ending.' },
            { q: 'Name four linking words that order a composition.', a: 'First, next, then, after that, finally (also: however, therefore, meanwhile) — they guide the reader through your ideas.' },
            { q: 'Plan a composition: \'My Best Friend\'. What points would you include?', a: 'Who the friend is and how we met; physical description; character and qualities; things we do together; why I value the friendship — one point per paragraph.' },
            { q: 'State three rules for good composition writing.', a: 'Answer the exact question asked; organise into an introduction, body and conclusion; use correct punctuation, capitalisation and tenses — and always leave time to proofread.' },
            { q: 'What two parts must every complete sentence have?', a: 'A subject (who or what it is about) and a predicate containing the verb (what is said about the subject): "The pupils | cleaned the classroom."' },
            { q: 'Why is "Running fast." not a sentence?', a: 'It has no subject — it is a fragment. Fix it: "He is running fast." The same goes for "Under the tree." and hanging "because" clauses.' },
            { q: 'When do you use a capital letter?', a: 'First word of a sentence, the pronoun I, names of people/places/days/months, and titles before names: Doctor Bello, Principal Okoye.' },
            { q: 'What does an apostrophe + s show?', a: 'Possession — Tunde\'s bag means the bag belongs to Tunde. Do not confuse with a plural: two bags, no apostrophe.' },
            { q: 'Which conjunction joins contrasting ideas?', a: '"but" — "Kunle is short but strong." "and" adds ideas; "or" offers a choice.' }
          ],
          quiz: [
            { q: 'Identify the subject of the sentence: \'The naughty boys broke the window.\'', options: ['The naughty boys', 'broke', 'the window', 'naughty'], correct: 0, exp: 'The subject is who or what the sentence is about — \'The naughty boys\'; \'broke the window\' is the predicate.' },
            { q: 'What type of sentence is \'Close the door!\'?', options: ['Imperative (command)', 'Declarative (statement)', 'Interrogative (question)', 'Exclamatory'], correct: 0, exp: 'It gives a command or makes a request, so it is imperative — even though the subject \'you\' is understood, not written.' },
            { q: 'Choose the best conjunction: \'She was tired ___ she kept working.\'', options: ['but', 'so', 'because', 'or'], correct: 0, exp: '\'but\' joins contrasting ideas — she was tired, YET she kept working.' },
            { q: 'Which of these is a complete sentence?', options: ['The dog ran fast.', 'Running fast.', 'Because it was late.', 'The tall man in black.'], correct: 0, exp: 'A complete sentence needs a subject and a verb expressing a full thought: \'The dog ran fast.\' The others are fragments.' },
            { q: 'What end punctuation does \'What a lovely dress\' need?', options: ['An exclamation mark', 'A question mark', 'A comma', 'No punctuation'], correct: 0, exp: 'It expresses strong feeling (admiration), so it ends with an exclamation mark: \'What a lovely dress!\' It is not a question.' },
            { q: 'Every complete sentence must have:', options: ['a subject and a verb', 'an adjective', 'a conjunction', 'ten words'], correct: 0,
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
            { q: 'The apostrophe in "Tunde\'s bag" shows:', options: ['possession', 'a question', 'a plural', 'an exclamation'], correct: 0,
              exp: "'s marks ownership: the bag belongs to Tunde." }
          ]
        },
        {
          title: 'Oral English: Vowels, Consonants & Stress',
          tags: ['Vowel sounds', 'Stress', 'Intonation'],
          summary: 'The sound contrasts JSS Oral English tests: ship/sheep, silent letters, syllable stress and the tune of questions.',
          content: `
            <h3>1. Letters are not sounds</h3>
            <p>English has 26 letters but about 44 sounds. The letter <b>a</b> sounds different in "cat", "car", "cake" and "call" — four sounds from one letter! Oral English exams test whether you can hear and produce the <b>sounds</b>, not the spellings. The five vowel <i>letters</i> are a, e, i, o, u; the other 21 letters are consonant <i>letters</i>. But vowel <i>sounds</i> are about 20 when you count diphthongs.</p>
            <ul>
              <li><b>Vowel sounds</b> are made with an open mouth — air flows freely: /i:/ as in "see", /æ/ as in "cat", /ɔ:/ as in "door".</li>
              <li><b>Consonant sounds</b> are made by blocking or narrowing the air somewhere: lips (/p/, /b/), teeth and tongue (/t/, /d/), throat (/k/, /g/).</li>
              <li>A <b>diphthong</b> is two vowel sounds gliding together: /eɪ/ in "cake", /ɔɪ/ in "boy", /aʊ/ in "mouth".</li>
            </ul>

            <h3>2. The vowel sound map (with Nigerian-friendly examples)</h3>
            <table>
              <tr><th>Sound</th><th>Example words</th><th>Do NOT say</th></tr>
              <tr><td>/i:/ (long e)</td><td>see, seat, he</td><td>"sit" for "seat"</td></tr>
              <tr><td>/ɪ/ (short i)</td><td>sit, chip, him</td><td>stretching it to "seat"</td></tr>
              <tr><td>/e/</td><td>bed, egg, ten</td><td>"bad" for "bed"</td></tr>
              <tr><td>/æ/</td><td>cat, bag, mat</td><td>"cut" for "cat"</td></tr>
              <tr><td>/ɑ:/</td><td>car, fast, ask</td><td>"aks" or a short a</td></tr>
              <tr><td>/ɔ:/</td><td>door, saw, ball</td><td>"dor" with a flat o</td></tr>
              <tr><td>/ʊ/</td><td>book, put, good</td><td>"boo-k" with long oo</td></tr>
              <tr><td>/u:/</td><td>food, shoe, blue</td><td>shortening to "good"</td></tr>
              <tr><td>/ʌ/</td><td>cup, blood, sun</td><td>"cop" for "cup"</td></tr>
              <tr><td>/ɜ:/</td><td>bird, nurse, work</td><td>"bared" for "bird"</td></tr>
            </table>
            <div class="formula">Watch out — TRAP: minimal pairs are exam favourites — seat/sit, pool/pull, cap/cup, cot/caught. If two words differ only in one vowel sound, that pair can appear in a "choose the word with a different vowel sound" question.</div>

            <h3>3. Consonant confusions to cure</h3>
            <ul>
              <li><b>Voiced vs voiceless pairs:</b> put your fingers on your throat. /b/ buzzes, /p/ does not; /d/ buzzes, /t/ does not; /g/ vs /k/, /v/ vs /f/, /z/ vs /s/. "Vest" and "best" must not sound the same.</li>
              <li><b>sh /s/ and ch /tʃ/:</b> "ship" is not "sip"; "church" is not "tus". The lips push forward for sh and ch.</li>
              <li><b>Final consonants matter:</b> "ten" vs "tend", "cap" vs "cup" — swallowing the last sound loses marks and changes meaning.</li>
              <li><b>No added vowels:</b> "ask" is /ɑ:sk/ (two sounds after the a), not "as-ke"; "desk" is not "des-ke". English does not pay rent for extra vowels.</li>
            </ul>

            <h3>4. Word stress: the music of English</h3>
            <p>Every word of more than one syllable has one syllable that is <b>stressed</b> — said louder, longer and higher: TA-ble, be-GIN, com-PU-ter. Stress can even change a word's class: <b>RE</b>cord (noun, the thing) vs re<b>CORD</b> (verb, the action); <b>PRE</b>sent (gift) vs pre<b>SENT</b> (to show).</p>
            <ul>
              <li>Two-syllable <b>nouns and adjectives</b> usually stress the FIRST syllable: TA-ble, HAP-py, CLI-mate, DOC-tor.</li>
              <li>Two-syllable <b>verbs</b> often stress the SECOND: be-GIN, de-CIDE, ex-PLAIN, for-GET.</li>
              <li>Words ending in -tion, -sion, -ic stress the syllable BEFORE the ending: in-for-MA-tion, de-CI-sion, sci-EN-ti-fic.</li>
              <li>Words ending in -ity and -ography stress two syllables before: u-NI-ver-si-ty, ge-OG-ra-phy.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stress diagram: bars showing syllable height for the words teacher, begin and information, with the stressed syllable as the tallest bar">
              <text x="20" y="20" font-size="11" font-weight="800" fill="#0f172a">TEA-cher</text>
              <rect x="20" y="30" width="26" height="70" rx="5" fill="#4f46e5"/><rect x="52" y="62" width="26" height="38" rx="5" fill="#c7d2fe"/>
              <text x="20" y="118" font-size="9" font-weight="700" fill="#475569">stress 1st</text>
              <text x="150" y="20" font-size="11" font-weight="800" fill="#0f172a">be-GIN</text>
              <rect x="150" y="62" width="26" height="38" rx="5" fill="#c7d2fe"/><rect x="182" y="30" width="26" height="70" rx="5" fill="#4f46e5"/>
              <text x="150" y="118" font-size="9" font-weight="700" fill="#475569">stress 2nd (verb)</text>
              <text x="290" y="20" font-size="11" font-weight="800" fill="#0f172a">in-for-MA-tion</text>
              <rect x="290" y="66" width="24" height="34" rx="5" fill="#c7d2fe"/><rect x="320" y="66" width="24" height="34" rx="5" fill="#c7d2fe"/><rect x="350" y="30" width="24" height="70" rx="5" fill="#4f46e5"/><rect x="380" y="70" width="24" height="30" rx="5" fill="#c7d2fe"/>
              <text x="290" y="118" font-size="9" font-weight="700" fill="#475569">-tion: stress before it</text>
            </svg></div>

            <h3>5. Sentence stress and intonation</h3>
            <ul>
              <li>In a sentence we stress the <b>content words</b> (nouns, main verbs, adjectives, adverbs) and glide over the small words (is, the, of, to): "The BOYS are PLAYing BALL in the YARD."</li>
              <li><b>Falling tune</b> (voice goes down at the end): statements ("I live in JOS.") and WH-questions ("WHERE is your bag?").</li>
              <li><b>Rising tune</b> (voice goes up): yes/no questions ("Are you COMing?") — this is the number one oral English test item.</li>
              <li><b>Question tags</b> flip: "You are a student, aren't you?" (falling = expecting yes as a fact; rising = a real question).</li>
            </ul>
            <div class="worked"><b>Worked example (exam style):</b> "Choose the correct stress pattern of COMfortable." Syllables: com-for-ta-ble (4). Stress falls on the FIRST: /KOM-f-t-bl/. Clap the word as you say it; the loudest clap is the stress.</div>

            <h3>6. Classic Nigerian oral English traps</h3>
            <ul>
              <li>"ask" = /ɑ:sk/, never "aks"; "breakfast" = /BREK-fəst/, not "break-fast" with a long a.</li>
              <li>"cover" vs "cover"? Watch pairs like "cloTH" (fabric) vs "CLOthes" (what you wear) — different words, different sounds.</li>
              <li>"world" is one syllable (/wɜ:ld/) — do not say "wor-ld". "Girl", "whirl" behave the same.</li>
              <li>"probably" = PRO-ba-bly (3 claps), not "pro-ba-bi-li-ty" (5).</li>
              <li>Stress shift changes meaning: "a CONtest" (the event) vs "to conTEST" (to challenge); "a SUspect" vs "to susPECT".</li>
            </ul>

            <h3>7. Rhymes and same-sound hunting</h3>
            <p>Exams ask: "Which word rhymes with <i>through</i>?" (blue, not though). Rhyme means the <b>final vowel + consonant sound</b> matches, whatever the spelling: "through" /u:/ rhymes with "blue" /u:/; "great" rhymes with "late", not with "great-ly anything". Train your ear with sound families: /i:/ (see, sea, he, key), /eɪ/ (day, weigh, they, eight), /ɔ:/ (saw, door, floor, more).</p>

            <h3>8. Consonant clusters: no rented vowels allowed</h3>
            <p>A <b>cluster</b> is two or three consonants pronounced in one breath with no vowel between them: <b>str</b>eet, <b>spl</b>ash, <b>tw</b>in, <b>dr</b>um at the start; de<b>sks</b>, hel<b>ps</b>, a<b>cts</b> at the end. The classic exam error is inserting a vowel: "s-treet" becomes "sitreet", "asked" becomes "ask-ed-uh".</p>
            <ul>
              <li>Practise starts slowly, then fast: s-p → sp, s-p-l → spl, s-t-r → str; "spring" = one smooth spring, not "sip-iring".</li>
              <li>-ed endings: after k/p/s/sh/ch sounds, -ed says /t/ (walked = /wɔ:kt/, "walkt"); after b/g/v/m/n/l and vowels it says /d/ (played = /pleɪd/); only after t or d does it say /ɪd/ (wanted = /won-tɪd/). Three rules, endless exam questions.</li>
              <li>-s endings: after hissing sounds (s, z, sh, ch, j) it says /ɪz/ (buses = /bʌs-z/); after voiceless sounds /s/ (caps); after voiced sounds /z/ (bags = /bagz/).</li>
            </ul>
            <div class="formula">MEMORY HOOK: "T after the quiet, D after the hummers, ID only after T and D." Whisper the last sound of the verb: if you can whisper it (k, p, s, sh, ch), the -ed whispers /t/; if you can hum it (b, g, v, m, n, l), the -ed hums /d/.</div>
            <div class="worked"><b>Worked example:</b> "She visited her aunt and watched a film." Pronounced: /vɪz-ɪt-ɪd/ (visited: t+d → /ɪd/) but /wɒtʃt/ (watched: ch → /t/). One sentence, two different -ed sounds — exactly what oral exams ask.</div>

            <h3>9. The schwa /ə/: the laziest sound in English</h3>
            <p>Unstressed syllables shrink to a tiny neutral sound called the <b>schwa</b> /ə/: <b>tea</b>cher = TEE-chə; b<b>a</b>nana = bə-NA-nə; <b>a</b>bout = ə-BOUT. You cannot hear the schwa in spelling — you must hear it in rhythm. If you pronounce every syllable of "vegetable" fully (ve-ge-TA-ble with four strong claps), you sound robotic; natives say VEJ-tə-bl (three claps).</p>
            <ul>
              <li>The schwa is why stress matters: stressed syllables stay full, unstressed ones melt to /ə/.</li>
              <li>Exam pairs: "photograph" (FO-tə-graf) vs "photography" (fə-TO-grə-fi) — the stress walks, and the schwa follows it.</li>
              <li>Weak forms of small words: "to" becomes /tə/ ("going tə school"), "and" becomes /ən/ ("fish ən chips") in natural speech.</li>
            </ul>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Which word has a different vowel sound: seat, sheep, ship, bead? <i>Ans: ship (/ɪ/ against /i:/).</i></li>
              <li><b>Q2.</b> Stress pattern of "begin"? <i>Ans: be-GIN.</i></li>
              <li><b>Q3.</b> "Information" is stressed on which syllable? <i>Ans: the third (in-for-MA-tion).</i></li>
              <li><b>Q4.</b> Which tune for "Can you swim?" <i>Ans: rising (yes/no question).</i></li>
              <li><b>Q5.</b> Which word rhymes with "boy"? <i>Ans: joy (same /ɔɪ/ diphthong).</i></li>
              <li><b>Q6.</b> Choose: "The PREsent" or "the preSENT" for a gift? <i>Ans: PREsent (noun = first-syllable stress).</i></li>
              <li><b>Q7.</b> How many syllables in "comfortable"? <i>Ans: four (com-for-ta-ble).</i></li>
              <li><b>Q8.</b> Which pair is voiced/voiceless: b/p or m/n? <i>Ans: b/p.</i></li>
              <li><b>Q9.</b> Say correctly: "world". <i>Ans: one syllable, /wɜ:ld/.</i></li>
              <li><b>Q10.</b> Which word does not share a vowel sound: cup, blood, sun, boot? <i>Ans: boot (/u:/ against /ʌ/).</i></li>
              <li><b>Q11.</b> Pronounce the -ed in "worked". <i>Ans: /t/ — "workt" (k is voiceless).</i></li>
              <li><b>Q12.</b> Pronounce the -s in "watches". <i>Ans: /ɪz/ — "watch-iz" (after a hissing ch).</i></li>
              <li><b>Q13.</b> Which syllable carries the schwa in "banana"? <i>Ans: the 1st and 3rd (bə-NA-nə).</i></li>
              <li><b>Q14.</b> Rising or falling: "Who told you that?" <i>Ans: falling (WH-question).</i></li>
            </ul>
            <div class="formula">SUMMARY: letters are not sounds — English squeezes about 44 sounds out of 26 letters; vowel sounds (including gliding diphthongs) and voiced/voiceless consonant pairs are the raw material of oral exams; word stress follows friendly rules (nouns first, verbs second, -tion before the ending) and can switch a word's meaning; sentences stress their content words and fall for statements and WH-questions but rise for yes/no questions; and curing classic traps like "aks", "wor-ld" and five-clap "probably" is free marks in every BECE oral paper.</div>

`,
          cards: [
            { q: 'Roughly how many vowel and consonant sounds does English have?', a: 'About 20 vowel sounds (including diphthongs) and 24 consonant sounds — far more sounds than the 26 letters of the alphabet, which is why spelling and sound differ.' },
            { q: 'What is the difference between long and short vowels? Give a pair.', a: 'Long vowels are held longer: /i:/ in \'sheep\' vs the short /I/ in \'ship\'; also /u:/ \'pool\' vs /U/ \'pull\' — confusing them changes the word.' },
            { q: 'Give two pairs of consonant sounds Nigerians often mix up.', a: '/p/ and /b/ (\'pat\' vs \'bat\'), /f/ and /p/ (\'fan\' vs \'pan\'), and /θ/ (think) pronounced as /t/ or /f/ — practise the pairs to hear the difference.' },
            { q: 'What is a diphthong? Give two examples.', a: 'A glide between two vowel sounds in one syllable: /ei/ in \'face\', /ou/ in \'goat\', /ai/ in \'price\', /au/ in \'mouth\'.' },
            { q: 'What is word stress, and why does it matter?', a: 'Word stress is the emphasis on one syllable of a word: \'PHOtograph\', \'phoTOGraphy\'. Wrong stress can make a word unrecognisable to listeners.' },
            { q: 'How does stress distinguish these noun/verb pairs: PREsent vs preSENT?', a: 'The noun is stressed on the first syllable (\'a PREsent\', \'a REcord\'); the verb on the second (\'to preSENT\', \'to reCORD\') — stress changes the word class.' },
            { q: 'How is the -ed ending pronounced in \'walked\' and \'played\'?', a: '\'walked\' ends with a /t/ sound (after the voiceless /k/) and \'played\' ends with a /d/ sound (after a voiced sound) — the -ed ending takes /t/ after voiceless sounds and /d/ after voiced ones.' },
            { q: 'What is sentence stress?', a: 'Emphasising the important words (nouns, main verbs) in a sentence while weak forms glide over small words: \'The BOY ate the RICE.\'' },
            { q: 'What is intonation?', a: 'The rise and fall of the voice in speech — falling tone for statements and wh-questions (\'Where are you going?\'), rising tone for yes/no questions (\'Are you ready?\').' },
            { q: 'What is a minimal pair? Give an example.', a: 'Two words differing by only one sound: \'ship/sheep\', \'full/fool\', \'cot/caught\' — minimal-pair drills sharpen pronunciation.' },
            { q: 'Contrast ship/sheep and full/fool.', a: 'ship and full use the short vowels /ɪ/ and /ʊ/; sheep and fool use the long /iː/ and /uː/. Length changes the word completely.' },
            { q: 'Name three words with silent letters.', a: 'knife (silent k), write (silent w), comb (silent b) — also hour (silent h) and climb (silent b).' },
            { q: 'How many syllables in "beautiful", and where is the stress in "teacher"?', a: 'beau-ti-ful has 3 syllables; TEA-cher stresses the first syllable, like most two-syllable nouns.' },
            { q: 'What tune do Yes/No questions use?', a: 'A rising tune ("You are coming ↗?"), while statements and wh- questions fall ("Where are you going ↘?").' },
            { q: 'How is the plural ending pronounced in "boxes"?', a: '/ɪz/, because the word ends in an s-sound. Compare cats /s/ and bags /z/.' }
          ],
          quiz: [
            { q: 'Which pair of words differs by a long and a short vowel?', options: ['sheep / ship', 'pat / bat', 'fan / van', 'cot / cut'], correct: 0, exp: '\'sheep\' has the long /i:/ and \'ship\' the short /I/ — the other pairs differ by consonant sounds.' },
            { q: 'Which word contains a silent letter?', options: ['island', 'ideal', 'issue', 'item'], correct: 0, exp: 'In "island" the s is silent (it sounds like "eye-land"); in the other three every letter is pronounced.' },
            { q: 'In \'PHOtograph\' and \'phoTOGraphy\', what changes?', options: ['The position of the word stress', 'The number of letters', 'The spelling of the vowels', 'Nothing changes'], correct: 0, exp: 'Adding the suffix moves the stress: PHO-to-graph but pho-TO-gra-phy — wrong stress can make a word unrecognisable.' },
            { q: 'The word \'think\' begins with which sound?', options: ['/θ/ (voiceless th)', '/t/', '/f/', '/ð/ (voiced th)'], correct: 0, exp: '\'think\' starts with the voiceless /θ/ of \'thin\' — /ð/ is the voiced sound in \'this\' and \'that\'.' },
            { q: 'What intonation do yes/no questions usually take?', options: ['A rising tone', 'A falling tone', 'A flat tone', 'No tone'], correct: 0, exp: '\'Are you ready?\' rises at the end; wh-questions and statements usually fall.' },
            { q: 'How many vowel letters does English have?', options: ['5', '4', '6', '21'], correct: 0,
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
              exp: '"You are coming?" rises; wh- questions like "Where are you going?" fall.' }
          ]
        },
        {
          title: 'Comprehension & Summary Basics',
          tags: ['Main idea', 'Context clues', 'Skim & scan'],
          summary: 'The beginner toolkit for understanding passages: reading the questions first, finding the main idea, and using context clues.',
          content: `
            <h3>1. What a comprehension passage really is</h3>
            <p>A comprehension passage is a short text followed by questions that test three skills at once: <b>reading</b> (did you actually take in what was written?), <b>understanding</b> (can you explain it, not just repeat it?) and <b>expression</b> (can you write your answer in correct sentences?). The passage is never "too hard" — every answer is either inside the text or one small step of thought away from it. Your job is to find it, prove it and write it neatly.</p>
            <ul>
              <li>Most questions can be answered <b>in your own words</b> — this earns more marks than copying the passage word for word.</li>
              <li>Some questions lift a phrase on purpose ("the writer says the market was 'a sea of noise' — what does this mean?") — here you must <b>explain</b> the borrowed words.</li>
              <li>Always answer in <b>complete sentences</b>; a one-word answer loses the expression mark even when it is right.</li>
            </ul>

            <h3>2. The three-pass method (read smart, not long)</h3>
            <div class="diagram"><svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart of the three-pass comprehension method: first read the questions, then skim the passage for the gist, then hunt for answers line by line">
              <rect x="12" y="45" width="130" height="60" rx="10" fill="#4f46e5"/>
              <text x="77" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">PASS 1 (2 min)</text>
              <text x="77" y="86" text-anchor="middle" font-size="9" fill="#e0e7ff">Read the QUESTIONS first</text>
              <path d="M142 75 L166 75" stroke="#334155" stroke-width="2" marker-end="url(#arrC)"/>
              <defs><marker id="arrC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#334155" stroke-width="1.5"/></marker></defs>
              <rect x="166" y="45" width="130" height="60" rx="10" fill="#10b981"/>
              <text x="231" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">PASS 2 (3 min)</text>
              <text x="231" y="86" text-anchor="middle" font-size="9" fill="#d1fae5">Skim the passage for gist</text>
              <path d="M296 75 L320 75" stroke="#334155" stroke-width="2" marker-end="url(#arrC)"/>
              <rect x="320" y="45" width="130" height="60" rx="10" fill="#f59e0b"/>
              <text x="385" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#78350f">PASS 3</text>
              <text x="385" y="86" text-anchor="middle" font-size="9" fill="#78350f">Hunt answers line by line</text>
              <text x="231" y="132" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">Questions first = you read with a purpose, not on autopilot.</text>
            </svg></div>
            <ul>
              <li><b>Pass 1:</b> read the questions before the passage. Underline keywords (names, numbers, "why", "how"). Now your brain hunts while it reads.</li>
              <li><b>Pass 2:</b> read the passage once, fast, for the story: who, where, what happened, how it ended. Do not stop at hard words — the meaning usually arrives later in the sentence.</li>
              <li><b>Pass 3:</b> go question by question; locate the line that carries the answer; underline it lightly; then write your answer in your own words.</li>
            </ul>

            <h3>3. In your own words: the mark multiplier</h3>
            <p>"In your own words" means say the same idea with different grammar and vocabulary. Technique: read the sentence, look away, and explain it as if telling a friend. Then check you kept the <b>key facts</b> (names, numbers, causes).</p>
            <div class="worked"><b>Worked example:</b> Passage: "The hunters trekked for three days through the forest before they finally sighted the rogue elephant near the river." Question: In your own words, say how the hunters found the elephant.<br>
            Model answer: "The hunters walked through the forest for three days and at last saw the elephant close to a river." (trekked → walked; sighted → saw; near → close to. Same facts, new clothes.)</div>
            <div class="formula">Watch out — TRAP: copying the whole sentence gets zero "own words" credit even when correct. Change at least the verb and the structure; keep proper nouns and figures exactly as they are.</div>

            <h3>4. Guessing word meanings from context</h3>
            <p>Exams always ask "What does the word X mean as used in the passage?" Use the clues around it:</p>
            <ul>
              <li><b>Explanation clue:</b> "The man was <i>frugal</i>, spending money only on what he truly needed." → frugal = careful with money.</li>
              <li><b>Contrast clue (but, unlike, however):</b> "Ada was <i>timid</i>, but her sister faced the crowd boldly." → timid = shy, not bold.</li>
              <li><b>Example clue:</b> "They ate <i>delicacies</i> such as pounded yam, fried plantain and peppered snails." → delicacies = special tasty foods.</li>
              <li><b>Same-word family clue:</b> if "inherit" appears, "inheritance" elsewhere can confirm the meaning of receiving from someone.</li>
            </ul>

            <h3>5. Main idea vs detail; the title test</h3>
            <p>The <b>main idea</b> is the one point every paragraph serves; <b>details</b> are the examples and numbers that hold it up. A fast test: pretend you must give the passage a title — a title names the main idea. "Kunle's New Bicycle" is a detail-level title if the passage is really about "How Kunle Learnt Responsibility". Questions like "Which of these best summarises the passage?" are title questions in disguise.</p>

            <h3>6. Inference: reading between the lines</h3>
            <p>Some answers are not written; they are <b>implied</b>. You combine what the text says with what anybody knows.</p>
            <div class="worked"><b>Worked example:</b> "Bola opened her umbrella before stepping out." What can you infer? → It was raining (or about to rain). The passage never says "rain", yet the umbrella gives it away. Inference = text clue + common sense, nothing more. Never infer beyond the evidence.</div>

            <h3>7. Summary writing: keep the bones, drop the feathers</h3>
            <p>A summary is the passage squeezed to its <b>main points</b>, in your own words, in connected sentences. Keep: the who, the main events, the outcome. Drop: examples, repetitions, descriptions, direct speech, numbers that only decorate.</p>
            <ul>
              <li>Step 1: read and number the main idea of each paragraph in the margin (one short line each).</li>
              <li>Step 2: join those lines with linkers (then, however, because, finally) into smooth sentences.</li>
              <li>Step 3: check the length the question asks (e.g. "not more than 60 words") and count honestly.</li>
            </ul>
            <div class="worked"><b>Worked example (compression):</b> Original (42 words): "The teacher, who had been very angry with the class because of the noise they made the previous day, walked into the classroom, looked at everyone silently for a long moment, and then, to everybody's surprise, smiled." Summary (16 words): "The teacher, angry about the previous day's noise, surprised the class by smiling." Same story, one third of the words.</div>

            <h3>8. Classic comprehension traps</h3>
            <ul>
              <li>Answering the question you <b>expected</b>, not the one printed. Re-read the question after writing the answer.</li>
              <li>Using "he/she/it/they" in your answer without naming who — the examiner's paper has no passage in front of it; write "the teacher", not "he".</li>
              <li>Giving TWO answers to a one-answer question ("it was raining and also windy") — if one is wrong, the mark dies.</li>
              <li>Spending 15 minutes on question (a) and rushing (f). Budget: roughly one minute per mark.</li>
            </ul>

            <h3>9. The six question forms and their attack plans</h3>
            <ul>
              <li><b>"What does X mean as used in the passage?"</b> → give a meaning that fits THAT sentence; test your answer by swapping it back in.</li>
              <li><b>"In your own words…"</b> → new verbs + new structure, same facts; never copy more than two words in a row from the passage.</li>
              <li><b>"Why / Give a reason…"</b> → begin with "Because" in your head (write "…because…" in the sentence); the cause is usually one line above or below the clue.</li>
              <li><b>"True or false…"</b> → quote the line that proves your verdict in your rough work; if you cannot point at the line, you are guessing.</li>
              <li><b>"Suggest a title / main idea…"</b> → the title must cover EVERY paragraph, not just your favourite one.</li>
              <li><b>"Summarise in not more than N words…"</b> → one main point per paragraph, join with linkers, then COUNT; an over-long summary is penalised even when perfect.</li>
            </ul>
            <div class="worked"><b>Time plan for a 6-question passage (25 marks, 30 minutes):</b> questions first (2 min), skim (3 min), hunt + write (20 min), re-read your answers against the questions (5 min). The last five minutes rescue at least two marks every single exam.</div>

            <h3>10. Try these (with answers)</h3>
            <p><b>Mini passage:</b> "When the rains failed for the second year, the farmers of Udene village stopped planting maize and began to grow millet, which needs far less water. At first the children laughed at the strange grain, but after the first harvest every compound cooked millet porridge with pride, and no family went hungry that dry season."</p>
            <ul>
              <li><b>Q1.</b> Why did the farmers change from maize to millet? <i>Ans: because the rains had failed two years in a row and millet needs much less water.</i></li>
              <li><b>Q2.</b> What does "the rains failed" mean? <i>Ans: little or no rain fell (drought).</i></li>
              <li><b>Q3.</b> In your own words, say how the children first felt about millet. <i>Ans: they thought it was funny/strange and mocked it.</i></li>
              <li><b>Q4.</b> What can you infer about the harvest? <i>Ans: it was good/successful, since every family ate and none went hungry.</i></li>
              <li><b>Q5.</b> Give a suitable title. <i>Ans: e.g. "How Udene Village Beat the Drought" or "From Maize to Millet".</i></li>
              <li><b>Q6.</b> Summarise the passage in not more than 25 words. <i>Ans: e.g. "After two dry years, Udene farmers switched from maize to millet; the successful harvest ended hunger and won everyone over." (23 words)</i></li>
              <li><b>Q7.</b> Which word in the passage means "household/family home"? <i>Ans: compound.</i></li>
              <li><b>Q8.</b> True or false: the children liked millet immediately. <i>Ans: false — they laughed at it at first.</i></li>
              <li><b>Q9.</b> "…began to grow millet, which needs far less water." What does this tell you about maize? <i>Ans: maize needs more water than millet.</i></li>
              <li><b>Q10.</b> Rewrite in your own words: "no family went hungry that dry season." <i>Ans: every household had enough food throughout the period without rain.</i></li>
            </ul>
            <div class="formula">SUMMARY: comprehension rewards method, not luck — read the questions first, skim for gist, then hunt line by line; answer in complete sentences and in your own words while keeping names and numbers exact; use explanation, contrast and example clues to crack difficult vocabulary; separate the main idea (the title test) from supporting details; infer only one step beyond the evidence; and summarise by keeping each paragraph's single main point, joining the points with linkers, and counting words honestly.</div>

`,
          cards: [
            { q: 'Should you read the questions or the passage first? Why?', a: 'A good strategy: skim the passage quickly, read the questions so you know what to hunt for, then re-read the passage carefully — this saves time and focuses your search.' },
            { q: 'How do you answer a question whose answer is stated directly in the passage?', a: 'Locate the exact sentence (scan for key words from the question), then restate the answer in your own words as a complete sentence.' },
            { q: 'How can you guess the meaning of a new word in a passage?', a: 'Use context clues: look at the rest of the sentence, examples given, contrast words like \'but\' or \'however\', and the word\'s general sense — then check your guess fits the sentence.' },
            { q: 'Why must summary answers use your own words?', a: 'Copying whole sentences from the passage loses marks; the examiner is testing whether you understood and can restate the idea briefly and accurately.' },
            { q: 'In a summary, what kind of content should you leave out?', a: 'Examples, illustrations, comparisons, repetition, names/dates used as evidence, and any personal opinion — keep only the main points.' },
            { q: 'How do you find the main idea of a passage quickly?', a: 'Check the title, the first and last paragraphs, and the topic sentence of each paragraph — then ask: \'What is this mostly about?\'' },
            { q: 'How should you answer a True/False question safely?', a: 'Rely only on the passage; if it does not state the fact, do not use outside knowledge — write True/False exactly as the question demands, sometimes with your reason.' },
            { q: 'What makes a good title for a passage?', a: 'A short phrase naming the central subject — not too broad (\'Life\') and not too narrow (\'One Farmer\'s Goat\'); it should cover the whole passage.' },
            { q: 'How should you use the instruction \'Answer in one sentence\'?', a: 'Combine the required points into ONE grammatically correct sentence — two correct points in one sentence score; one point per sentence when told \'one sentence per point\'.' },
            { q: 'Why is punctuation and capitalisation important in comprehension answers?', a: 'They are marked under mechanical accuracy: begin with a capital, end with a full stop, and punctuate correctly — careless mechanics cost easy marks.' },
            { q: 'What should you read first in a comprehension test?', a: 'The questions — they tell you what to hunt for before you ever read the passage.' },
            { q: 'Skimming vs scanning?', a: 'Skim = quick read for the gist ("what is this about?"). Scan = quick search for one fact such as a name, date or number.' },
            { q: 'What is a context clue?', a: 'The surrounding words that explain an unknown word: "he was frugal; he saved every kobo" shows frugal means saving.' },
            { q: 'Fact vs opinion — give one of each.', a: 'Fact: "Lagos is a big city" (provable). Opinion: "Lagos is the best city" (a belief people can argue about).' },
            { q: 'What makes an inference different from a detail?', a: 'A detail is stated; an inference is concluded from clues — "She opened her umbrella" implies rain without saying it.' }
          ],
          quiz: [
            { q: 'What does \'scanning\' a passage mean?', options: ['Searching quickly for a specific detail', 'Reading every word slowly', 'Reading only the title', 'Copying the passage'], correct: 0, exp: 'Scanning hunts for one specific piece of information — a name, date or figure — while skimming gives the general idea.' },
            { q: 'When writing a summary, should you copy sentences from the passage?', options: ['No — use your own words', 'Yes, copying is safest', 'Only long sentences', 'Only the first sentence'], correct: 0, exp: 'Copying whole sentences loses marks; the examiner tests whether you understood and can restate the ideas briefly.' },
            { q: 'To guess the meaning of a new word in a passage, you should use...', options: ['context clues around the word', 'a guess based on its first letter', 'its meaning in another language', 'the number of letters it has'], correct: 0, exp: 'The surrounding sentence — examples, contrasts and the general sense — reveals what the word must mean.' },
            { q: 'A question asks what a word means \'as used in the passage\'. What does this demand?', options: ['The meaning that fits that context', 'Every dictionary meaning', 'The opposite meaning', 'The spelling'], correct: 0, exp: 'Many words have several meanings; you must choose the one that works in THAT sentence — test it by substituting it back.' },
            { q: 'Name two things to leave out of a summary.', options: ['Examples and repetition', 'Main ideas', 'The topic', 'Key conclusions'], correct: 0, exp: 'Summaries keep the main points only — examples, illustrations, statistics used as evidence and repetitions are cut.' },
            { q: 'Before reading a passage, you should first read:', options: ['the questions', 'the last paragraph', 'a dictionary', 'another passage'], correct: 0,
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
            { q: 'A summary must be written in:', options: ['your own words', 'the writer\'s exact words', 'question form', 'poetry'], correct: 0,
              exp: 'Copied sentences score nothing; paraphrase the points briefly.' },
            { q: 'Which is an opinion?', options: ['Lagos is the best city.', 'Lagos is a big city.', 'Nigeria has 36 states.', 'Water boils at 100 °C at sea level.'], correct: 0,
              exp: 'Opinions are beliefs that can be argued; facts can be checked and proved.' }
          ]
        },
        {
          title: 'Parts of Speech',
          tags: ['Nouns', 'Verbs', 'Adjectives & adverbs', 'Prepositions'],
          summary: 'The eight word classes, how to spot each one, and the errors students make most often.',
          content: `
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
            <div class="formula">Watch out — TRAP: "advice" is uncountable — "a piece of advice", never "an advice". Same family: information, luggage, furniture, homework, news (yes, NEWS is singular!).</div>

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
            <div class="worked"><b>Worked example:</b> "The <b>cover</b> of the book is torn." (noun) vs "They <b>cover</b> the pot." (verb). Test: can you put "the/a" before it? Yes → noun here. Does it change with tense (covers, covered)? Yes → verb there.</div>
            <div class="diagram"><svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart showing the word WATER used as noun, verb and adjective in three example sentences, proving that context decides the family">
              <rect x="20" y="20" width="120" height="44" rx="9" fill="#4f46e5"/><text x="80" y="38" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">NOUN</text><text x="80" y="52" text-anchor="middle" font-size="9" fill="#e0e7ff">"Drink some water."</text>
              <rect x="170" y="20" width="120" height="44" rx="9" fill="#10b981"/><text x="230" y="38" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">VERB</text><text x="230" y="52" text-anchor="middle" font-size="9" fill="#d1fae5">"Water the plants."</text>
              <rect x="320" y="20" width="120" height="44" rx="6" fill="#f59e0b"/><text x="380" y="38" text-anchor="middle" font-size="10" font-weight="800" fill="#78350f">ADJECTIVE</text><text x="380" y="52" text-anchor="middle" font-size="9" fill="#78350f">"a water bottle"</text>
              <text x="230" y="100" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">Same spelling, three jobs — the sentence decides.</text>
              <text x="230" y="122" text-anchor="middle" font-size="9" fill="#475569">Test with: the/a? tense changes? describes what?</text>
            </svg></div>

            <h3>10. A four-step analysis method for any sentence</h3>
            <p>When an exam says "underline the nouns / name the parts of speech of the underlined words", work in a fixed order so nothing escapes:</p>
            <ul>
              <li><b>Step 1 — find the verb</b> (the engine): what is happening or being? "The tall boy <b>runs</b> home."</li>
              <li><b>Step 2 — find the subject noun or pronoun</b> (who does it): "<b>boy</b>".</li>
              <li><b>Step 3 — find the describers:</b> adjectives hug the nouns (<b>tall</b> boy); adverbs hug the verbs (runs <b>quickly</b>).</li>
              <li><b>Step 4 — sweep the little words:</b> prepositions (home → "home" is an adverb of place here, but "to his home" would be prepositional), conjunctions joining ideas, and any exclamation.</li>
            </ul>
            <div class="worked"><b>Full worked analysis:</b> "Wow! The clever girl answered all the questions correctly." → Wow = interjection; girl = noun; clever = adjective; answered = verb; questions = noun; all/the = adjectives (limiting); correctly = adverb of manner. Seven words, seven families spotted in under a minute with the four steps.</div>

            <h3>11. Try these (with answers)</h3>
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
              <li><b>Q11.</b> Underline the conjunction: "We played although it rained." <i>Ans: although.</i></li>
              <li><b>Q12.</b> Part of speech of "very" in "very hot"? <i>Ans: adverb of degree.</i></li>
              <li><b>Q13.</b> Superlative of "bad"? <i>Ans: worst.</i></li>
              <li><b>Q14.</b> "News ___ (is/are) spreading fast." <i>Ans: is (news is singular).</i></li>
            </ul>
            <div class="formula">SUMMARY: the eight parts of speech are job titles, not spellings — nouns name, pronouns replace, verbs drive, adjectives describe nouns, adverbs describe verbs and adjectives, prepositions link, conjunctions join and interjections explode; within the families, know the classic traps (uncountable nouns like advice and news, collective nouns with singular verbs, the good/better/best ladder, fixed preposition pairs like fond of and good at, and good vs well); and remember that context is the final judge — the same spelling can be a noun in one sentence and a verb in the next, so always classify the job the word does in the printed sentence.</div>

`,
          cards: [
            { q: 'Name the eight parts of speech.', a: 'Noun, pronoun, verb, adjective, adverb, preposition, conjunction and interjection.' },
            { q: 'What is a noun? Name four types.', a: 'A noun names a person, place, thing or idea. Types: common (boy, city), proper (Ada, Kano — capitalised), abstract (love, courage), collective (team, flock), and countable/uncountable (chair/water).' },
            { q: 'What is a pronoun? Give five examples.', a: 'A word used in place of a noun to avoid repetition: he, she, it, they, we (personal); this, those (demonstrative); who, which (relative).' },
            { q: 'What is a verb? Distinguish action and linking verbs.', a: 'A verb expresses action or state. Action verbs show doing (\'She ran\'); linking verbs connect the subject to a description — be, seem, become (\'She is happy\'). Helping (auxiliary) verbs assist: is, have, will.' },
            { q: 'What is an adjective? Give an example in a sentence.', a: 'An adjective describes or modifies a noun: \'The TALL boy won.\' — it answers \'which one?\' or \'what kind?\'' },
            { q: 'What is an adverb? Give an example.', a: 'An adverb modifies a verb, adjective or another adverb, telling how, when, where or how much: \'She sang SWEETLY\', \'He arrived YESTERDAY\'.' },
            { q: 'What is a preposition? Give five examples.', a: 'A word showing the relationship (often position or time) between a noun/pronoun and other words: in, on, under, beside, after.' },
            { q: 'What is a conjunction? Give four examples.', a: 'A word that joins words, phrases or sentences: and, but, or, because.' },
            { q: 'What is an interjection? Give three examples.', a: 'A word or short phrase expressing sudden feeling, usually followed by an exclamation mark: \'Wow!\', \'Oh!\', \'Alas!\'' },
            { q: 'Identify the parts of speech in: \'The old man walked slowly into the market.\'', a: 'The (article/adjective), old (adjective), man (noun), walked (verb), slowly (adverb), into (preposition), the (article), market (noun).' },
            { q: 'Choose the correct word: \'She is a (quick/quickly) runner.\' and \'He runs (quick/quickly).\'', a: '\'quick\' (adjective describing the noun \'runner\'); \'quickly\' (adverb describing the verb \'runs\') — adjectives modify nouns, adverbs modify verbs.' },
            { q: 'List the eight parts of speech with one example each.', a: 'Noun (Lagos), pronoun (she), verb (run), adjective (tall), adverb (quickly), conjunction (but), preposition (on), interjection (wow).' },
            { q: 'How do you spot an adverb?', a: 'It tells how, when or where an action happens and often ends in -ly: sings beautifully, came yesterday. Adverbs can also modify adjectives: very tall.' },
            { q: 'What makes a proper noun special?', a: 'It names a particular person, place or thing (Adaeze, Kano, Monday) and always begins with a capital letter.' },
            { q: 'Give three irregular plurals.', a: 'child → children, foot → feet, mouse → mice (also man → men, tooth → teeth). They do not take -s.' }
          ],
          quiz: [
            { q: 'In \'The tired teacher slept\', what part of speech is \'tired\'?', options: ['An adjective', 'A verb', 'An adverb', 'A noun'], correct: 0, exp: '\'tired\' describes the noun \'teacher\', so it is an adjective — don\'t be fooled: it looks like a past verb here but functions as a describing word.' },
            { q: 'What part of speech is \'carefully\' in \'She wrote carefully\'?', options: ['An adverb', 'An adjective', 'A preposition', 'A conjunction'], correct: 0, exp: '\'carefully\' tells HOW she wrote — adverbs modify verbs, and many end in -ly.' },
            { q: 'Which part of speech is \'and\' in \'bread and butter\'?', options: ['A conjunction', 'A preposition', 'An interjection', 'An adverb'], correct: 0, exp: '\'and\' joins words of equal rank, so it is a conjunction — other examples: but, or, because.' },
            { q: 'In \'Wow! We won the match!\', the word \'Wow!\' is a(n)...', options: ['interjection', 'exclamation mark', 'adjective', 'adverb'], correct: 0, exp: 'An interjection expresses sudden feeling and stands apart from the sentence — \'Wow!\', \'Oh!\', \'Alas!\'' },
            { q: 'Identify the pronoun in \'Ada lost her pen.\'', options: ['her', 'Ada', 'lost', 'pen'], correct: 0, exp: '\'her\' stands in place of a noun (Ada\'s), so it is a pronoun — \'Ada\' itself is a proper noun.' },
            { q: '"Quickly" belongs to which class of words?', options: ['Adverb', 'Adjective', 'Verb', 'Noun'], correct: 0,
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
              exp: 'She sings well (verb), very tall (adjective), quite quickly (adverb).' }
          ],
        }
      ],
      JSS2: [
        {
          title: 'Verb Tenses Made Simple',
          tags: ['Simple & continuous', 'Perfect tenses', 'Sequence of tenses'],
          summary: 'When to use each tense, and the signal words that tell you which one the question needs.',
          content: `
            <h3>1. What a tense actually is: time + aspect</h3>
            <p>A verb tense tells you TWO things: <b>when</b> the action happens (past, present, future) and <b>how</b> it happens (simple = plain fact; continuous = in progress; perfect = finished with a link to now). Three times × three aspects give the nine tenses exams test. Master the pattern and you stop memorising and start <i>seeing</i>.</p>
            <div class="diagram"><svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of tenses: past on the left, present in the middle, future on the right, with simple, continuous and perfect examples placed on the line">
              <path d="M20 75 L440 75" stroke="#334155" stroke-width="2.5"/>
              <path d="M432 69 L440 75 L432 81" fill="#334155"/>
              <circle cx="90" cy="75" r="6" fill="#f59e0b"/><text x="90" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#b45309">PAST</text><text x="90" y="100" text-anchor="middle" font-size="9" fill="#475569">She wrote</text><text x="90" y="112" text-anchor="middle" font-size="9" fill="#475569">was writing / had written</text>
              <circle cx="230" cy="75" r="6" fill="#10b981"/><text x="230" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#047857">PRESENT</text><text x="230" y="100" text-anchor="middle" font-size="9" fill="#475569">She writes</text><text x="230" y="112" text-anchor="middle" font-size="9" fill="#475569">is writing / has written</text>
              <circle cx="370" cy="75" r="6" fill="#4f46e5"/><text x="370" y="55" text-anchor="middle" font-size="10" font-weight="800" fill="#4338ca">FUTURE</text><text x="370" y="100" text-anchor="middle" font-size="9" fill="#475569">She will write</text><text x="370" y="112" text-anchor="middle" font-size="9" fill="#475569">will be writing / will have written</text>
            </svg></div>
            <ul>
              <li><b>Simple</b> = the bare fact or habit: "She <b>writes</b> every night."</li>
              <li><b>Continuous</b> = be + -ing, action in progress: "She <b>is writing</b> now."</li>
              <li><b>Perfect</b> = have + past participle, action finished but connected: "She <b>has written</b> three essays (so far)."</li>
            </ul>

            <h3>2. Simple present: habits, facts and the -s rule</h3>
            <ul>
              <li>Use for habits and general truths: "The sun <b>rises</b> in the east." "Musa <b>plays</b> football every Saturday."</li>
              <li>Third person singular (he/she/it) adds -s: walk → walks; but verbs ending in -ch, -sh, -ss, -x, -o add -es: watch → watches, go → goes; consonant + y → -ies: study → studies.</li>
              <li>Questions and negatives borrow <b>do/does</b>: "Does she cook?" "She <b>does not (doesn't)</b> cook." When does appears, the main verb loses its -s: "Does she cook<b>s</b>?" ✗.</li>
              <li>Signal words: every day/week, always, usually, often, sometimes, rarely, never.</li>
            </ul>

            <h3>3. Present continuous: what is happening NOW</h3>
            <ul>
              <li>am/is/are + verb-ing: "I <b>am reading</b>." "They <b>are arguing</b> about football."</li>
              <li>-ing spelling: run → run<b>ning</b> (double the consonant after a short vowel), make → mak<b>ing</b> (drop silent e), sit → sitting, lie → lying, die → dying.</li>
              <li>State verbs normally refuse continuous: know, like, love, believe, belong, want → "I <b>know</b> him", never "I am knowing him" (the classic exam trap).</li>
              <li>Signal words: now, at the moment, look!, listen!, these days.</li>
            </ul>

            <h3>4. Simple past and the irregular army</h3>
            <ul>
              <li>Regular verbs add -ed: play → played, watch → watched. Pronunciation: /t/ after voiceless (walked), /d/ after voiced (played), /ɪd/ after t/d (wanted).</li>
              <li>Irregulars must be memorised — the BECE favourites: go–went–gone, eat–ate–eaten, write–wrote–written, see–saw–seen, take–took–taken, come–came–come, buy–bought–bought, teach–taught–taught, catch–caught–caught, think–thought–thought, give–gave–given, break–broke–broken, speak–spoke–spoken, begin–began–begun, drink–drank–drunk.</li>
              <li>Negatives/questions use <b>did</b> + base form: "She <b>did not go</b>", never "did not went".</li>
              <li>Signal words: yesterday, last week, ago, in 2020, when I was young.</li>
            </ul>
            <div class="formula">Watch out — TRAP: after <i>did/didn't</i> the verb ALWAYS returns to base form: "Did you eat?" not "Did you ate?" This single error appears in almost every weak BECE script.</div>

            <h3>5. Past continuous: the background music of a story</h3>
            <ul>
              <li>was/were + -ing: "I <b>was sleeping</b> when the light went off." It paints the longer background action.</li>
              <li><b>When</b> usually introduces the short interrupting action (simple past); <b>while</b> introduces the long one: "While I <b>was reading</b>, the phone rang." / "I was reading when the phone <b>rang</b>."</li>
              <li>Two long actions together: "While Mama was cooking, Papa was reading the news." (was/were on both sides).</li>
            </ul>

            <h3>6. Present perfect: the bridge from past to now</h3>
            <ul>
              <li>have/has + past participle: "She <b>has finished</b> her homework (so she is free now)."</li>
              <li>Use with: <b>just</b> (a moment ago), <b>already</b>, <b>yet</b> (questions/negatives), <b>ever/never</b>, <b>since</b> + point in time (since 2020, since Monday), <b>for</b> + length of time (for two years).</li>
              <li>THE trap: present perfect NEVER takes a finished-time word: "I have seen him <b>yesterday</b>" ✗ → "I <b>saw</b> him yesterday." If yesterday/last/ago appears, use simple past.</li>
              <li>"He has gone to school" (he is there now) vs "He has been to school" (he went and returned) — exams ask the difference.</li>
            </ul>

            <h3>7. Past perfect: the earlier of two pasts</h3>
            <ul>
              <li>had + past participle: "When I arrived, the bus <b>had left</b>." Two past events; the FIRST one gets had.</li>
              <li>Classic frame: "By the time + simple past, … had + pp": "By the time the teacher came, the boys <b>had disappeared</b>."</li>
              <li>If only ONE past event is mentioned, simple past is enough — do not sprinkle <i>had</i> everywhere like seasoning.</li>
            </ul>

            <h3>8. Future forms: will, going to and arrangements</h3>
            <ul>
              <li><b>will</b> for decisions, promises, predictions: "I <b>will help</b> you." "It <b>will rain</b> tonight."</li>
              <li><b>going to</b> for plans and visible evidence: "She <b>is going to study</b> medicine." "Look at those clouds — it <b>is going to</b> rain."</li>
              <li>Present continuous for fixed arrangements: "We <b>are travelling</b> to Abuja on Friday (tickets bought)."</li>
              <li>Future perfect for "finished by then": "By 6 p.m. I <b>will have finished</b> the assignment." Signal: by then, by tomorrow, by the time.</li>
            </ul>

            <h3>9. Signal-word cheat table</h3>
            <table>
              <tr><th>Signal words</th><th>Usual tense</th></tr>
              <tr><td>every day, always, often</td><td>simple present</td></tr>
              <tr><td>now, look!, at the moment</td><td>present continuous</td></tr>
              <tr><td>yesterday, ago, last week</td><td>simple past</td></tr>
              <tr><td>while, when (interrupted action)</td><td>past continuous + simple past</td></tr>
              <tr><td>since, for, just, already, yet, ever</td><td>present perfect</td></tr>
              <tr><td>by the time, before (two pasts)</td><td>past perfect for the earlier</td></tr>
              <tr><td>tomorrow, next week, soon</td><td>will / going to</td></tr>
              <tr><td>by tomorrow, by 6 p.m.</td><td>future perfect</td></tr>
            </table>

            <h3>10. Tense consistency: don't time-travel mid-sentence</h3>
            <p>A story written in the past stays in the past; a report in the present stays in the present. Shifting for no reason is called <b>tense shift</b> and it is a standard error-correction item: "He <b>opened</b> the door and <b>sees</b> a snake" ✗ → "He <b>opened</b> the door and <b>saw</b> a snake" ✓.</p>
            <ul>
              <li>Join equal actions in the same tense: "She <b>washed</b> the plates and <b>swept</b> the floor."</li>
              <li>General truths inside a past story may stay present: "The teacher <b>taught</b> us that the earth <b>moves</b> round the sun." (The fact is still true now.)</li>
              <li>In reported speech the tense steps back: "I <b>am</b> tired" → She said she <b>was</b> tired; "I <b>have finished</b>" → she said she <b>had finished</b>.</li>
              <li>Check every "and", "but", "when" join: the two verbs on either side should agree in time unless meaning demands otherwise.</li>
            </ul>
            <div class="worked"><b>Worked example (error hunt):</b> "Yesterday I <b>go</b> to the market and <b>buy</b> fish." Two errors: yesterday forces simple past → "Yesterday I <b>went</b> to the market and <b>bought</b> fish." Underline the signal word first; it is the referee.</div>

            <h3>11. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> "She ___ (write) a letter now." <i>Ans: is writing.</i></li>
              <li><b>Q2.</b> "They ___ (go) to Enugu last holiday." <i>Ans: went.</i></li>
              <li><b>Q3.</b> "I ___ (know) him since 2019." <i>Ans: have known (not have been knowing).</i></li>
              <li><b>Q4.</b> "While she ___ (cook), the pot fell." <i>Ans: was cooking.</i></li>
              <li><b>Q5.</b> "By the time we reached the station, the train ___ (leave)." <i>Ans: had left.</i></li>
              <li><b>Q6.</b> "Look at the sky! It ___ (go) to rain." <i>Ans: is going to.</i></li>
              <li><b>Q7.</b> Correct the error: "Did you ate the rice?" <i>Ans: Did you eat the rice?</i></li>
              <li><b>Q8.</b> Correct: "I have seen him yesterday." <i>Ans: I saw him yesterday.</i></li>
              <li><b>Q9.</b> "She ___ (teach) us since JSS1." <i>Ans: has taught.</i></li>
              <li><b>Q10.</b> "By next year, he ___ (finish) JSS3." <i>Ans: will have finished.</i></li>
              <li><b>Q11.</b> Negative of "Musa plays chess": <i>Ans: Musa does not play chess.</i></li>
              <li><b>Q12.</b> "The boys ___ (argue) when the principal entered." <i>Ans: were arguing.</i></li>
              <li><b>Q13.</b> Correct the shift: "He opens the box and found a ring." <i>Ans: He opened the box and found a ring.</i></li>
              <li><b>Q14.</b> "Musa ___ (not/like) yam." (habit) <i>Ans: does not like.</i></li>
              <li><b>Q15.</b> Change to reported speech: "I am happy," she said. <i>Ans: She said (that) she was happy.</i></li>
              <li><b>Q16.</b> "We ___ (live) here for ten years." (still living here) <i>Ans: have lived.</i></li>
              <li><b>Q17.</b> Which is correct: "She has just left a minute ago" or "She left a minute ago"? <i>Ans: She left a minute ago — ago forces simple past.</i></li>
            </ul>
            <div class="formula">SUMMARY: tense is time (past/present/future) × aspect (simple/continuous/perfect); simple present for habits with the -s rule and do/does support, present continuous for now with state verbs refusing -ing, simple past with its irregular army and did + base form, past continuous as story background with when/while, present perfect as the past-to-now bridge with since/for/just/yet and its no-yesterday law, past perfect for the earlier of two pasts, and will / going to / future perfect for tomorrow's promises, plans and deadlines — read the signal word first and the tense chooses itself.</div>

`,
          cards: [
            { q: 'When do we use the simple present tense? Give an example.', a: 'For habits, routines and general truths: \'She goes to school every day.\' \'Water boils at 100 degC.\'' },
            { q: 'When do we use the present continuous? Give an example.', a: 'For actions happening now or these days: \'I am reading a book.\' \'He is staying with us this week.\'' },
            { q: 'How is the simple past formed? Give regular and irregular examples.', a: 'Regular verbs add -ed (\'walked\', \'played\'); irregular verbs change form: go-went, eat-ate, see-saw, write-wrote, buy-bought.' },
            { q: 'When do we use the past continuous? Give an example.', a: 'For an action in progress at a past moment, often interrupted: \'We were eating when the light went off.\'' },
            { q: 'What is the present perfect and when is it used?', a: 'have/has + past participle: for past actions with present results or unfinished time: \'I have finished my homework.\' \'She has lived here since 2020.\'' },
            { q: 'Give three ways of expressing the future with an example each.', a: '\'will\' for decisions/predictions (\'I will help you\'); \'going to\' for plans (\'We are going to travel\'); present continuous for fixed arrangements (\'I am leaving tomorrow\').' },
            { q: 'What are tense signal words? Match: always, now, yesterday, since, tomorrow.', a: 'always -> simple present; now -> present continuous; yesterday -> simple past; since -> present perfect; tomorrow -> future.' },
            { q: 'Correct: \'Yesterday I go to the market.\'', a: '\'Yesterday I went to the market\' — \'yesterday\' forces the simple past of \'go\'.' },
            { q: 'Complete: \'While she (cook), the phone (ring).\'', a: '\'While she was cooking, the phone rang.\' — past continuous for the longer background action, simple past for the interrupting one.' },
            { q: 'Why must tenses stay consistent in a story?', a: 'Shifting tenses confuses the reader: a narrative told in the past should continue in the past (\'He woke up and washed...\'), except for direct speech or universal truths.' },
            { q: 'What are the signal words for the present perfect?', a: 'already, yet, just, since, for, ever, never. They show a past action with present relevance: "She has read three books (so far)."' },
            { q: 'When do you use the past continuous?', a: 'For an action in progress in the past, often interrupted by a shorter action: "While we were eating, the lights went off." Signal words: while, when.' },
            { q: 'Why is "I have seen him yesterday" wrong?', a: 'The present perfect cannot be used with a definite past time. With "yesterday" you must use the simple past: "I saw him yesterday."' },
            { q: 'Which verbs are not normally used in continuous forms?', a: 'State verbs such as know, want, like and believe. Say "I know" and "she wants", never "I am knowing" or "she is wanting".' },
            { q: 'What is sequence of tenses?', a: 'When the main verb is in the past, the subordinate verb normally shifts to a past form too: "He said that he was tired", not "He said that he is tired".' }
          ],
          quiz: [
            { q: 'Choose the correct form: \'Look! The bus ___.\'', options: ['is coming', 'comes', 'came', 'will come'], correct: 0, exp: '\'Look!\' signals an action happening NOW, so the present continuous \'is coming\' is correct.' },
            { q: 'Give the past tense of \'buy\' and \'teach\'.', options: ['bought and taught', 'buyed and teached', 'bought and teachted', 'bought and taught-ed'], correct: 0, exp: 'Both are irregular verbs: buy-bought-bought, teach-taught-taught — they do not take -ed.' },
            { q: 'Complete: \'I ___ here since 2019.\'', options: ['have lived', 'lived', 'live', 'was living'], correct: 0, exp: '\'since\' links the past to the present, which requires the present perfect: \'I have lived here since 2019.\'' },
            { q: 'Complete: \'While we ___ home, it ___ to rain.\'', options: ['were walking; started', 'walked; was starting', 'are walking; starts', 'walk; started'], correct: 0, exp: 'The longer background action takes the past continuous (\'were walking\') and the interrupting action the simple past (\'started\').' },
            { q: 'What is the simple present of \'go\' with the subject \'she\'?', options: ['goes', 'go', 'going', 'gone'], correct: 0, exp: 'Third-person singular subjects (he, she, it) add -s/-es in the simple present: \'She goes to school every day.\'' },
            { q: 'Which sentence is in the simple present tense?', options: ['She reads every night.', 'She is reading now.', 'She has read three books.', 'She read it yesterday.'], correct: 0,
              exp: 'The simple present describes habits and general truths - "every night" is the classic signal word.' },
            { q: '"Look! The baby ___ towards the gate." Choose the correct form.', options: ['crawls', 'is crawling', 'has crawled', 'crawled'], correct: 1,
              exp: '"Look!" shows the action is happening right now, which needs the present continuous: is crawling.' },
            { q: 'Complete: "I ___ in Lagos since 2019."', options: ['live', 'lived', 'have lived', 'am living'], correct: 2,
              exp: '"Since" links a past starting point to the present - the job of the present perfect: have lived.' },
            { q: 'Which sentence is correct?', options: ['I have seen him yesterday.', 'I saw him yesterday.', 'I have see him yesterday.', 'I am seeing him yesterday.'], correct: 1,
              exp: 'The present perfect never goes with a definite past time like "yesterday" - use the simple past: I saw him yesterday.' },
            { q: 'Complete: "While we ___, the lights ___ off."', options: ['ate / were going', 'were eating / went', 'eat / go', 'had eaten / had gone'], correct: 1,
              exp: 'A longer action in progress (past continuous: were eating) is interrupted by a shorter one (simple past: went).' },
            { q: '"By the time the doctor arrived, the patient ___."', options: ['died', 'has died', 'had died', 'dies'], correct: 2,
              exp: 'Of two past actions, the earlier one takes the past perfect: the patient had died before the doctor arrived.' },
            { q: 'Which word signals the present perfect tense?', options: ['yesterday', 'at the moment', 'already', 'last week'], correct: 2,
              exp: 'already, yet, just, since, for, ever and never all signal the present perfect.' },
            { q: 'Which sentence is in the present perfect tense?', options: ['The children have gone to school.', 'The children went to school.', 'The children had gone to school.', 'The children are going to school.'], correct: 0,
              exp: 'have + past participle (gone) is the present perfect; went is simple past and had gone is past perfect.' },
            { q: 'Complete: "She ___ her aunt last Sunday."', options: ['visits', 'visited', 'has visited', 'is visiting'], correct: 1,
              exp: '"Last Sunday" is a finished past time, so the simple past is required: visited.' },
            { q: 'Complete correctly: "He said that he ___ tired."', options: ['is', 'was', 'has been', 'will be'], correct: 1,
              exp: 'When the main verb is past (said), the subordinate verb normally shifts to a past form too - sequence of tenses.' }
          ],
        }
      ],
      JSS3: [
        {
          title: 'Summary Writing & précis',
          tags: ['Summary', 'Precis', 'Keyword discipline'],
          summary: 'How to read a passage, strip it to its essentials, and write the exact number of sentences or words the examiner asked for.',
          content: `
            <h3>1. Summary vs précis vs paraphrase — know your task</h3>
            <p>A <b>summary</b> retells the main points of a passage briefly; a <b>précis</b> does the same job but under a strict word limit and usually in one flowing paragraph; a <b>paraphrase</b> goes the opposite way — it restates the same ideas in different words at about the SAME length. BECE papers usually phrase the task as "Summarise in your own words in not more than N words", and the marking scheme deducts for both <b>copying</b> and <b>over-length</b>. So this lesson is about precision, not beauty.</p>
            <ul>
              <li>Summary/Précis: compress the main points and
use your own words, obey the word limit.</li>
              <li>Paraphrase: same length, new words —(vocabulary-swap questions).</li>
              <li>Both are graded on <b>content</b> first, then on <b>grammar and spelling</b> — a content-perfect summary with terrible sentences still bleeds marks.</li>
            </ul>

            <h3>2. The bones-and-feathers model of a text</h3>
            <p>Every passage has <b>bones</b> (main points: who did what, and the result)
and <b>feathers</b> (illustrations, repetition, description, quoted speech, decorative numbers).
Summary = keep the bones, remove the feathers, then re-cover with your own sentences.
What to remove: examples and lists, repetition of the same idea, long description of clothes and colors,
direct speech ("..." ), decorative adverbs, and figures that exist merely for color.</p>
            <ul>
              <li><b>Keep:</b> subject + main action + result; cause-and-effect links
(because, so, therefore); the final outcome.</li>
              <li><b>Remove:</b> illustrative examples, dialogue, repetition,
description, and numbers that do not change the main point.</li>
              <li><b>Change:</b> vocabulary and sentence structure; merge two sentences that carry one idea.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compression funnel: a long passage goes in at the top, feathers are removed in the middle, and a short summary comes out at the bottom">
              <rect x="120" y="6" width="220" height="30" rx="8" fill="#4f46e5"/>
              <text x="230" y="25" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Full passage (many words)</text>
              <path d="M230 36 L230 50" stroke="#334155" stroke-width="2" marker-end="url(#arrS)"/>
              <defs><marker id="arrS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#334155" stroke-width="1.5"/></marker></defs>
              <rect x="150" y="52" width="160" height="30" rx="8" fill="#f59e0b"/>
              <text x="230" y="71" text-anchor="middle" font-size="10" font-weight="800" fill="#78350f">Strip the feathers</text>
              <path d="M230 82 L230 96" stroke="#334155" stroke-width="2" marker-end="url(#arrS)"/>
              <rect x="180" y="98" width="100" height="30" rx="8" fill="#10b981"/>
              <text x="230" y="117" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Précis</text>
              <text x="230" y="142" text-anchor="middle" font-size="9" fill="#475569">Same story, fewer words, your own words.</text>
            </svg></div>

            <h3>3. Five-step exam method</h3>
            <ul>
              <li><b>Step 1 — Read twice:</b> first for the gist, second time with a pencil,
marking the main point of each paragraph in the margin (one short line per paragraph).</li>
              <li><b>Step 2 — Draft the bones:</b> write your margin notes as a list;
this draft is for you, not for the examiner.</li>
              <li><b>Step 3 — Join into prose:</b> connect the bones with linking words
(then, however, because, therefore, finally) into smooth sentences; aa summary must read as prose, not as a shopping list.</li>
              <li><b>Step 4 — Translate to your own words:</b> replace passage vocabulary
where possible; keep proper nouns, technical names, and figures that are themselves the point.</li>
              <li><b>Step 5 — Count and trim:</b> count honestly (every word including "a" and "the");
if over the limit, remove decorative phrases first, never the main points.</li>
            </ul>

            <h3>4. The linking-word toolbox</h3>
            <table>
              <tr><th>Purpose</th><th>Linking words</th></tr>
              <tr><td>Add</td><td>and, also, moreover, in addition</td></tr>
              <tr><td>Contrast</td><td>but, however, yet, on the other hand</td></tr>
              <tr><td>Result</td><td>so, therefore, as a result, consequently</td></tr>
              <tr><td>Reason</td><td>because, since, as</td></tr>
              <tr><td>Sequence</td><td>first, then, next, finally, later</td></tr>
            </table>
            <div class="worked"><b>Applied worked example:</b>
Margin notes: "Farmers switched crops. Rain failed. Harvest was good.Hunger ended."
Prose version: "Because the rain had failed, the farmers switched crops;
the successful harvest ended hunger." — three bones, one sentence,
two linking words.This is compression.</div>

            <h3>5. Direct speech to indirect speech in a summary</h3>
            <p>A passage often contains people's words in quotation marks.
Your summary must fold them into indirect speech:
"He said, 'I will pay tomorrow'" becomes "He promised to pay the next day."
Pronouns shift (I → he/she, my → his/her), tenses shift one step back,
and time/place words move (now → then, today → that day, tomorrow → the next day, here → there).</p>
            <ul>
              <li>"I <b>am</b> tired" → she said she <b>was</b> tired.</li>
              <li>"I <b>have finished</b> my work" → he said he <b>had finished</b> his work.</li>
              <li>"Come here <b>now</b>" → she told him to go there <b>then</b>.</li>
            </ul>

            <h3>6. How words are counted (and how exams trick you)</h3>
            <ul>
              <li>Every word counts, including "a" and "the" —
"the boy ran" = 3 words.</li>
              <li>Hyphenated compounds count as one: "part-time" = 1;
"mother-in-law" = 1.</li>
              <li>Contractions count as one: "don't", "can't" = 1 each — a friendly gift from English.</li>
              <li>Numbers written as figures count as one: "2024" = 1;
"two thousand" = 2.</li>
              <li>"Not more than 60 words" means 60 is allowed;
"about 60" means 55–65 is safe.</li>
            </ul>

            <h3>7. The penalty list — where marks quietly die</h3>
            <ul>
              <li><b>Copying:</b> lifting whole sentences; even correct copying loses
the "own words" points.</li>
              <li><b>Overlength:</b> 80 words against a 60 limit can lose a full third of the marks.</li>
              <li><b>List form:</b> writing "1. Farmers… 2. Harvest…" — a summary is prose.</li>
              <li><b>First person:</b> "I think the writer…" — summarize the passage,
not your opinion; no "I" unless the question asks for it.</li>
              <li><b>New facts:</b> adding your own knowledge that is not in the passage —
inference yes, invention no.</li>
              <li><b>Spelling and grammar:</b> deducted at the end even when content is perfect.</li>
            </ul>

            <h3>8. Full model compression, from long to limit</h3>
            <div class="worked"><b>Original (88 words):</b> "Last term, the principal called a meeting of the whole school.
He praised the students who had worked hard during the term, and he also thanked the teachers
who had guided those students with great patience and kindness.After that, he announced that
the school would organize a cultural day next month, and he promised that every class
would perform an item at the event, which all the students received with loud joy and celebration."</div>
            <div class="worked"><b>Précis (45 words):</b> "At last term's meeting, the principal praised the hard-working students,
thanked the patient teachers, and announced a cultural day next month,
at which every class would perform; the announcement delighted all the students."
(Count: At-1 the-2 last-3 term's-4 meeting-5 the-6 principal-7 praised-8 the-9 hard-working-10 students-11 thanked-12 the-13 patient-14 teachers-15 and-16 announced-17 a-18 cultural-19 day-20 next-21 month-22 at-23 which-24 every-25 class-26 would-27 perform-28 the-29 announcement-30 delighted-31 all-32 the-33 students-34 = about 34–45 depending on hyphenation — safely within a 50-word limit.)</div>

            <h3>9. Timing and layout on the answer sheet</h3>
            <ul>
              <li>Time plan for a 20-mark summary (about 35 minutes): read + mark (7), bone draft (6), prose in own words (15), count + trim + tidy (7).</li>
              <li>Write the summary as ONE paragraph unless the question says otherwise; indent once at the start; no bullet numbers.</li>
              <li>Leave a clear line between the summary and any other sub-question; examiners award what they can read.</li>
              <li>Write your word count at the end in brackets, e.g. (58 words) — it shows control and stops the marker counting against you.</li>
            </ul>
            <div class="worked"><b>Final checklist before you hand in:</b> every paragraph's bone present? own words used? linkers joining ideas? no copied sentence? no first person? within the limit with the count written? spelling swept? Tick all seven and walk out like a scholar. 🎓</div>

            <h3>10. Try these (with answers)</h3>
            <p><b>Practice passage:</b> "When Ada first entered the boarding school, she cried every night
because she missed her mother.However, the matron, a strict-looking woman with a kind face,
soon became her refuge
The woman taught her to sew, taught her to weave, and taught her to budget her small allowance.Before the session ended, Ada had saved enough money to buy her mother a gift,
and she returned home proud and happy."</p>
            <ul>
              <li><b>Q1.</b> List the three bones of the passage. <i>Ans: Ada missed home at first;
the matron taught her skills (sewing, weaving, budgeting);
she returned proud with a gift for her mother.</i></li>
              <li><b>Q2.</b> Which feathers should be removed? <i>Ans: "strict-looking woman with a kind face",
"taught her to sew, taught her to weave…" (repetition → "taught her skills"),
"proud and happy" (one is enough).</i></li>
              <li><b>Q3.</b> Write a summary of no more than 40 words. <i>Ans (model): "Although Ada missed her mother when she first entered the boarding school,
the kind matron taught her skills and budgeting;
Ada eventually saved enough to buy her mother a gift and returned home proud." (about 38 words).</i></li>
              <li><b>Q4.</b> Why is "the matron, a strict-looking woman with a kind face" removed?
<i>Ans: description is feathers; the bone is simply "the matron".</i></li>
              <li><b>Q5.</b> Which linking words does the model summary use?
<i>Ans: Although (contrast), and (addition), eventually (sequence).</i></li>
              <li><b>Q6.</b> True or false: a summary may add facts that are not in the passage.
<i>Ans: false — inference is allowed, invention is not.</i></li>
              <li><b>Q7.</b> How many words is "She didn't buy the part-time uniform"?
<i>Ans: 6 (She, didn't, buy, the, part-time, uniform).</i></li>
              <li><b>Q8.</b> Paraphrase, not summarize: "she cried every night".
<i>Ans: e.g. "she wept each night" / "she went to sleep in tears every night".</i></li>
            </ul>
            <div class="formula">SUMMARY: A summary or précis keeps the bones of a passage — who did what and the result — and removes the feathers: examples, repetition, description, quoted speech, and decorative numbers; the method is to read twice while marking one main point per paragraph, draft the bones, join them with linking words (then, however, because, finally), convert to your own words while keeping proper nouns and key figures, then honestly count and trim; fold direct speech into indirect speech with the usual pronoun and tense shifts; count hyphenated words and contractions as one; and avoid the penalty list — copying, overlength, list form, first person, invented facts, careless grammar — because a précis is graded first on faithful compression, then on the quality of your English.</div>

`,
          cards: [
            { q: 'What is a précis?', a: 'A clear, short restatement of a passage\'s main points in your own words, keeping the original\'s meaning and order but dropping everything non-essential.' },
            { q: 'State four golden rules of précis writing.', a: 'Use your own words; keep only main ideas; stay within the required length; and add nothing new — no opinions, no outside facts.' },
            { q: 'What kinds of material should be cut when writing a précis?', a: 'Examples and illustrations, statistics used as evidence, repetitions, comparisons and descriptive details, names and quotations — unless the instruction says to keep them.' },
            { q: 'How do you handle a passage that gives three examples after each point?', a: 'State the point once and drop the examples — the précis reports the claim, not the evidence.' },
            { q: 'Should a précis be written in the first person?', a: 'No — keep the writer\'s perspective in third person and avoid \'I think\'; you are reporting the passage, not reacting to it.' },
            { q: 'What is the recommended working method for a précis question?', a: 'Read the passage fully; underline the topic sentence of each paragraph; draft one sentence per required point; count your words; then rewrite neatly within the limit.' },
            { q: 'If asked to \'summarise in three sentences\', how many points may you give?', a: 'Exactly three main points, one per sentence — four points in three sentences means one point is lost or two are crammed together (and penalised).' },
            { q: 'Why is grammatical accuracy part of précis marks?', a: 'The summary is marked on expression and mechanical accuracy: fragments, run-ons and agreement errors cost marks even when the content is right.' },
            { q: 'Turn this into one précis sentence: \'Many students fail because they do not plan. They start reading only the night before the exam. They sleep late and come tired.\'', a: 'Poor planning — especially last-minute, late-night reading — causes many students to fail. (One idea, own words, no examples.)' },
            { q: 'What is the difference between a summary and a précis?', a: 'In school practice they overlap; strictly, a précis keeps the original\'s structure and proportion in a fixed fraction of its length, while a summary may condense more freely — both demand the main points in your own words.' },
            { q: 'What three things does a summary question really test?', a: 'Reading accurately, selecting the important points, and expressing them in your own words within a strict limit. It never tests your own knowledge of the topic.' },
            { q: 'Outline the five-step summary method.', a: '1) Read the question and note the exact instruction; 2) read the passage twice, marking key ideas; 3) draft in your own words; 4) count sentences or words exactly; 5) check tense, spelling and punctuation.' },
            { q: 'Name four things to leave out of a summary.', a: 'Examples and illustrations; repetition; quotations and statistics (unless figures are asked for); and your own opinion. Introductions like "In this passage the writer says..." are wasted words too.' },
            { q: 'How do you turn a long clause into a short one?', a: 'Use a strong verb instead of a weak verb + noun ("made a decision" -> "decided"), replace a clause with a single adjective ("rain that lasted a long time" -> "prolonged rain"), and drop fillers such as "it is important to note that".' },
            { q: 'How do you answer "give a word or phrase that means the same as..."?', a: 'Lift the exact word(s) from the passage - do not add or change anything - and check the part of speech: a noun answer for a noun slot.' }
          ],
          quiz: [
            { q: 'How does a précis differ from an ordinary summary?', options: ['It keeps the original structure and proportion in a fixed shorter length', 'It adds new examples', 'It is always longer', 'It is written in verse'], correct: 0, exp: 'A précis condenses the passage to a set fraction of its length while keeping the order and balance of the original ideas.' },
            { q: 'In what person should a précis normally be written?', options: ['Third person', 'First person', 'Second person', 'Any person, mixed freely'], correct: 0, exp: 'You report the writer\'s ideas from the outside (\'the writer argues...\') — no \'I think\' and no mixing of viewpoints.' },
            { q: 'If told to \'summarise in three sentences\', how should you present four points?', options: ['Select the three MAIN points, one per sentence', 'Cram four points into three sentences', 'Write four sentences anyway', 'Write one long sentence'], correct: 0, exp: 'Follow the instruction exactly: choose the three most important points and give each one clear, grammatical sentence.' },
            { q: 'Which two items should be removed when condensing a passage?', options: ['Examples and repetitions', 'Main claims', 'Key conclusions', 'The central theme'], correct: 0, exp: 'Examples, illustrations, statistics-as-evidence and repeated statements are dropped; claims, conclusions and the theme stay.' },
            { q: 'Why must you count your words in a summary answer?', options: ['Exceeding the stated length is penalised', 'It makes the summary prettier', 'Longer summaries always score more', 'It is not important'], correct: 0, exp: 'Examiners mark within limits — a summary over the required words loses marks even when the content is right.' },
            { q: 'What is the single biggest loss of marks in summary questions?', options: ['writing too briefly', 'lifting whole sentences from the passage', 'using simple vocabulary', 'writing in your own words'], correct: 1,
              exp: 'Examiners are instructed to ignore copied material - a lifted sentence scores zero even if it contains the right point.' },
            { q: 'According to the five-step method, what should you do first?', options: ['Read the passage twice', 'Underline the topic sentences', 'Read the question and note the exact instruction', 'Draft the answer'], correct: 2,
              exp: 'The instruction fixes how many sentences or words you must write, so read it before you touch the passage.' },
            { q: 'A summary of a passage must always...', options: ['keep only the main points in fewer words', 'add fresh examples of its own', 'copy the best sentences word for word', 'be longer than the passage'], correct: 0,
              exp: 'A summary shrinks the passage to its main ideas: nothing is added, nothing is copied whole, and it is always shorter.' },
            { q: 'When the rubric says "summarise in about 100 words", your answer should be...', options: ['close to 100 words - not 200', 'as long as the passage itself', 'written in note form only', 'exactly 10 words long'], correct: 0,
              exp: 'The word limit is a strict guide: stay close to it, because extra words waste exam time and rarely earn marks.' },
            { q: 'Which sentence best shortens "Because the rainfall was extremely heavy over a very long period, the river eventually overflowed its banks."?', options: ['"Prolonged heavy rain caused the river to flood."', '"The rainfall was extremely heavy over a very long period."', '"It is important to note that the river overflowed."', '"The river eventually overflowed its banks because of rain that lasted a long time."'], correct: 0,
              exp: 'One adjective ("prolonged") replaces a whole clause, and the strong verb "caused...flood" replaces the weak original phrasing.' },
            { q: 'Which technique shortens a clause?', options: ['adding more examples', 'replacing a weak verb + noun with a strong verb ("made a decision" -> "decided")', 'repeating the main idea', 'quoting the passage'], correct: 1,
              exp: 'Strong verbs, single adjectives in place of clauses, and dropping fillers such as "it is important to note that" all compress sentences.' },
            { q: 'In a "give a word or phrase that means the same as..." question, your answer must...', options: ['be a synonym you supply yourself', 'come exactly from the passage and fit grammatically', 'be a full sentence', 'be the opposite in meaning'], correct: 1,
              exp: 'Lift the exact word(s) from the passage, add or change nothing, and check the part of speech fits the slot.' },
            { q: 'After drafting, what does "count and check" involve?', options: ['counting the words in the passage', 'matching the sentence or word limit exactly, then checking tense, spelling and punctuation', 'counting the paragraphs', 'checking the writer\'s name'], correct: 1,
              exp: 'Going over the limit costs marks, so count precisely - then proofread tense, spelling and punctuation.' },
            { q: 'Why should you read the passage twice?', options: ['to memorise it', 'the first time for general sense, the second to mark the key ideas', 'to count its words', 'to find spelling mistakes'], correct: 1,
              exp: 'The first reading gives the general sense; the second is for underlining topic sentences and any stated reason, cause or result.' },
            { q: 'Which of these wastes words in a summary?', options: ['"In this passage the writer says..."', 'using your own vocabulary', 'keeping a technical term with no simpler equivalent', 'underlining topic sentences while reading'], correct: 0,
              exp: 'Introductions and conclusions report the task, not the passage - go straight to the points.' }
          ],
        }
      ],
    },
    mock: [
      { q: 'Choose the option nearest in meaning to the underlined word: "The chairman’s speech was very CONCISE."',
        options: ['lengthy', 'brief', 'confusing', 'emotional'], correct: 1,
        exp: 'Concise means short and to the point, so "brief" is nearest in meaning. Always check whether the stem asks for nearest or opposite.' },
      { q: 'Fill the gap: Neither the players nor the coach ______ satisfied with the result.',
        options: ['were', 'was', 'are', 'have been'], correct: 1,
        exp: 'With neither…nor, the verb agrees with the nearer subject — "the coach" is singular, so "was".' },
      { q: 'Change to reported speech: "Where do you live?" she asked me.',
        options: ['She asked me where did I live', 'She asked me where I lived', 'She asked me where do I live', 'She asked me where I live'], correct: 1,
        exp: 'Reported questions use statement word order (subject before verb) and backshift the tense: "where I lived".' },
      { q: 'The figure of speech in "The wind whispered through the trees" is:',
        options: ['simile', 'metaphor', 'personification', 'hyperbole'], correct: 2,
        exp: 'Whispering is a human action given to the wind — that is personification.' },
      { q: 'Choose the correct option: Every one of the students ______ a textbook.',
        options: ['have', 'has', 'are having', 'were given'], correct: 1,
        exp: '"Every one" is singular, so the verb is "has", regardless of the plural noun that follows.' },
      { q: 'Which is the correct formal letter closing?', options: ['Yours sincerely,', 'Yours faithfully,', 'Best regards,', 'Yours,'], correct: 1,
        exp: 'A formal letter that begins "Dear Sir/Madam" closes with "Yours faithfully," followed by the writer\'s full name.' },
      { q: 'Fill the gap: He was accused ______ stealing the money.', options: ['for', 'with', 'of', 'on'], correct: 2,
        exp: 'The fixed preposition is "accused of". Compare: charged with, convicted of, suspected of.' },
      { q: 'Choose the opposite in meaning: The new policy will EXPAND the school.',
        options: ['enlarge', 'reduce', 'extend', 'improve'], correct: 1,
        exp: 'Expand means to make bigger, so the opposite is "reduce".' }
    ],
    resources: [
      { cat: 'Video lesson', title: 'JAMB Use of English — lexis & structure masterclass', url: 'https://www.youtube.com/results?search_query=jamb+use+of+english+lexis+and+structure', note: 'Concord, phrasal verbs and register explained with examples.' },
      { cat: 'Structured course', title: 'Khan Academy — Grammar', url: 'https://www.khanacademy.org/humanities/grammar', note: 'Free units on parts of speech, punctuation and syntax.' },
      { cat: 'Past questions', title: 'Myschool — English Language past questions', url: 'https://myschool.ng/classroom', note: 'Comprehension, summary and lexis past questions with answers.' },
      { cat: 'Dictionary', title: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/', note: 'Check meaning, register and example sentences.' },
      { cat: 'Reference', title: 'Wikipedia — Figure of speech', url: 'https://en.wikipedia.org/wiki/Figure_of_speech', note: 'Definitions and examples of every literary device.' }
    ]
  
};
