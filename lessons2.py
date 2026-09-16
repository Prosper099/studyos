#!/usr/bin/env python3
"""lessons2: deepen the next three shallowest lessons (Accounting, Economics, Literature)."""
P = '/home/user/index.html'
s = open(P, encoding='utf-8').read()

def deepen(title, old_len, new_content):
    global s
    t = "title: '%s'," % title
    i = s.index(t)
    a = s.index('content: `', i) + len('content: `')
    b = s.index('`,', a)
    assert (b - a) == old_len, (title, b - a, old_len)
    s = s[:a] + '\n' + new_content.rstrip('\n') + '\n          ' + s[b:]

ACCOUNTING = """
            <h3>1. What accounting is</h3>
            <p>Accounting is the process of <b>recording, classifying, summarising and interpreting</b> the financial transactions of a business, so that people can make decisions from the results. It is often called the <b>language of business</b> because it tells you, in numbers, whether a business is healthy.</p>
            <ul>
              <li><b>Recording:</b> writing every transaction in the books, in naira and kobo.</li>
              <li><b>Classifying:</b> grouping similar transactions (all sales together, all rent together).</li>
              <li><b>Summarising:</b> preparing the final accounts and the statement of financial position.</li>
              <li><b>Interpreting:</b> explaining what the figures mean for decisions.</li>
            </ul>
            <p><b>Users of accounting information:</b> the owner (is my business growing?), managers, investors, creditors/suppliers (will they pay?), banks (should we lend?), government (taxes), and employees (job security). WAEC loves asking you to list them.</p>

            <h3>2. Key terms you must own</h3>
            <ul>
              <li><b>Asset:</b> anything the business owns or is owed — cash, stock, vehicles, debtors, buildings.</li>
              <li><b>Liability:</b> what the business owes outsiders — creditors, bank loan, unpaid bills.</li>
              <li><b>Capital (owner's equity):</b> what the owner invested; the business owes it back to the owner.</li>
              <li><b>Drawings:</b> goods or cash the owner takes for personal use — it <b>reduces</b> capital.</li>
              <li><b>Revenue/expense:</b> income from trading vs the costs of running the business.</li>
              <li><b>Transaction:</b> an exchange that can be measured in money — a chat with a customer is not one.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> "capital" is a liability of the business <b>to the owner</b> — that is why it sits on the liability side of the equation. This single idea unlocks the whole topic.</div>

            <h3>3. The accounting equation</h3>
            <div class="formula">Assets = Capital + Liabilities • also: Capital = Assets − Liabilities</div>
            <p>Every transaction has a <b>dual effect</b> (the dual aspect concept), so the equation always balances. Learn the six basic movements by heart:</p>
            <ul>
              <li>Owner starts business with ₦100,000 cash → cash (asset) up, capital up.</li>
              <li>Buy goods for ₦20,000 cash → stock up, cash down (asset swaps, total unchanged).</li>
              <li>Buy goods on credit ₦10,000 → stock up, liability (creditor) up.</li>
              <li>Pay creditor ₦5,000 → cash down, liability down.</li>
              <li>Owner takes ₦2,000 cash as drawings → cash down, capital down.</li>
              <li>Business earns profit → capital increases (profit belongs to the owner).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Ada starts with ₦50,000 cash; buys a shelf ₦10,000 cash; buys stock ₦15,000 on credit. Show the equation.<br>
            Cash = 50,000 − 10,000 = 40,000; Shelf = 10,000; Stock = 15,000 → Assets = 65,000.<br>
            Capital = 50,000; Liabilities (creditor) = 15,000 → 65,000 = 50,000 + 15,000 ✓ balanced.</div>

            <h3>4. Worked practice (exam style)</h3>
            <div class="worked"><b>Q1.</b> A business has assets ₦240,000 and liabilities ₦90,000. Find capital.<br>
            Capital = 240,000 − 90,000 = <b>₦150,000</b>.</div>
            <div class="worked"><b>Q2.</b> Capital ₦80,000, liabilities ₦35,000. Find total assets.<br>
            Assets = 80,000 + 35,000 = <b>₦115,000</b>.</div>
            <div class="worked"><b>Q3.</b> Which transaction leaves total assets <b>unchanged</b>? Buying a machine by cheque.<br>
            Machine (asset) rises, bank (asset) falls by the same amount — a swap inside assets.</div>

            <h3>5. Accounting in Nigeria</h3>
            <p>Professional accountants in Nigeria qualify through <b>ICAN</b> (Institute of Chartered Accountants of Nigeria) or CITN, and businesses must keep proper records under the Companies and Allied Matters Act (CAMA). Bookkeeping is the recording stage; accounting adds the analysis. Careers: auditor, tax adviser, accountant, bank officer.</p>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Treating capital as an asset — it is owed <b>to</b> the owner, so it is a liability of the business.</li>
              <li>Adding drawings to capital instead of subtracting them.</li>
              <li>Counting the owner's personal car or house as a business asset (business entity concept).</li>
              <li>Forgetting that buying on credit raises <b>both</b> an asset and a liability.</li>
              <li>Writing the equation as Assets = Capital − Liabilities.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> in any equation question, write A = C + L first, circle the unknown, then substitute. Ten seconds, no errors.</div>
"""

ECONOMICS = """
            <h3>1. What economics is</h3>
            <p>Economics is the social science that studies how people and society allocate <b>scarce resources</b> which have alternative uses, to satisfy human wants that are <b>unlimited</b>. The classic definition (Robbins) calls it "the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses."</p>
            <p>Three pillars hold the subject up: <b>scarcity</b> (resources are limited), <b>choice</b> (we must pick), and <b>opportunity cost</b> (every choice sacrifices the next-best alternative). If resources were unlimited, economics would not exist.</p>

            <h3>2. Scarcity, choice and the scale of preference</h3>
            <p><b>Scarcity</b> applies to everything: time, money, land, teachers, petrol. Even a rich student faces scarce exam time. Because we cannot have everything, we make <b>choice</b>, and to choose rationally we list wants in order of urgency — that list is the <b>scale of preference</b>.</p>
            <div class="worked"><b>Worked example:</b> With ₦5,000, Bisi lists: textbook, transport fare, snack, hair ribbon. She buys the textbook and fare. The scale of preference shows why: the most urgent wants come first, and the first unsatisfied item (the snack) is the <b>opportunity cost</b> of her choices.</div>
            <ul>
              <li>It helps individuals and governments allocate limited money rationally.</li>
              <li>It makes the opportunity cost of each decision visible.</li>
              <li>It is the basis of budgeting — a national budget is a government's scale of preference.</li>
            </ul>

            <h3>3. Opportunity cost — the most examined idea</h3>
            <p><b>Opportunity cost</b> is the value of the <b>next-best alternative forgone</b> when a choice is made. It is measured in real alternatives, not in money, and it is <b>not</b> the sum of all forgone options — only the single next-best one.</p>
            <div class="worked"><b>Worked example (JAMB style):</b> After school you can (a) read Economics, (b) watch a film, or (c) sleep. You choose reading; your favourite of the rest is the film. Opportunity cost = <b>the film</b>, not "film + sleep".</div>
            <div class="worked"><b>Worked example:</b> A government has land worth ₦200m and can build a school or a market. It builds the school. Opportunity cost = the <b>market</b> (the forgone alternative), stated as the real thing, not ₦200m.</div>
            <p><b>Money price vs opportunity cost:</b> the price of a book is ₦3,000 (money price); the opportunity cost is what else ₦3,000 would have bought you (a week of lunch, say).</p>

            <h3>4. Economics as a science; its divisions</h3>
            <p>Economics is called a <b>social science</b>: like science it observes, forms hypotheses and tests theories, but its "laboratory" is society, so its laws are tendencies, not certainties (the "ceteris paribus" assumption — other things being equal — keeps theories testable).</p>
            <ul>
              <li><b>Microeconomics:</b> individual units — a consumer, a firm, a market, price determination.</li>
              <li><b>Macroeconomics:</b> the whole economy — national income, inflation, unemployment, budgets.</li>
              <li><b>Positive vs normative:</b> "what is" (testable statements) vs "what ought to be" (value judgments).</li>
            </ul>

            <h3>5. Why study economics?</h3>
            <ul>
              <li>It trains rational choice — students, families and governments allocate scarce money daily.</li>
              <li>It explains prices, wages, taxes, inflation and exchange rates that affect real life.</li>
              <li>It prepares citizens to judge government policies and budgets.</li>
              <li>Careers: banking, accounting, journalism, civil service, teaching, analysis.</li>
            </ul>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Defining opportunity cost as "all alternatives forgone" — it is only the <b>next-best</b> one.</li>
              <li>Saying scarcity means "not existing" — scarce things exist but are limited relative to wants.</li>
              <li>Calling economics a pure science; its laws hold only <b>ceteris paribus</b>.</li>
              <li>Confusing micro with macro: a single firm's pricing is micro; national inflation is macro.</li>
              <li>Writing the scale of preference as a shopping list of everything — it must be <b>ranked</b> by urgency.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> any definition question on economics scores full marks when it contains three words: <b>scarce, choice, alternative uses</b>. Build the sentence around them.</div>
"""

LITERATURE = """
            <h3>1. The three genres at a glance</h3>
            <p>Every work of literature belongs to one of three families: <b>prose</b> (ordinary written language, not metred), <b>poetry</b> (heightened language with rhythm, sound and imagery), and <b>drama</b> (a story written to be performed by actors on a stage). Exams test whether you know each genre's <b>devices</b> and can identify them in unseen passages.</p>

            <h3>2. Prose: the novel, the novella, the short story</h3>
            <p>Prose fiction comes in three sizes: the <b>novel</b> (long, many characters and sub-plots — Things Fall Apart), the <b>novella</b> (middle length — Animal Farm), and the <b>short story</b> (one main incident, few characters). Its elements are the examiner's checklist:</p>
            <ul>
              <li><b>Plot:</b> the arrangement of events — exposition, rising action, climax, resolution.</li>
              <li><b>Setting:</b> time and place; in Things Fall Apart, Umuofia before and during colonial contact.</li>
              <li><b>Characterisation:</b> how the writer reveals people — by action, speech, description; <b>flat</b> vs <b>round</b> characters, <b>protagonist</b> vs <b>antagonist</b>.</li>
              <li><b>Point of view:</b> who tells it — first person ("I"), third-person omniscient (all-seeing), or limited.</li>
              <li><b>Theme:</b> the central idea (e.g. change, pride, colonial clash in Things Fall Apart).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "The story is told by an all-knowing narrator who enters several characters' minds." Identify the point of view.<br>
            <b>Third-person omniscient</b> — the narrator is not a character and sees into many minds.</div>

            <h3>3. Poetry: types and tools</h3>
            <p>Poetry concentrates meaning through <b>sound</b> and <b>image</b>. Know the common types: the <b>sonnet</b> (14 lines), the <b>ballad</b> (narrative song-like poem), the <b>ode</b> (praise poem), the <b>elegy</b> (mourns the dead), <b>free verse</b> (no fixed rhyme or metre).</p>
            <ul>
              <li><b>Rhyme & rhythm:</b> end rhyme, internal rhyme; metre is the beat of the line.</li>
              <li><b>Imagery:</b> language that appeals to the senses — "the rusty crunch of the husk".</li>
              <li><b>Simile & metaphor:</b> comparison with "like/as" vs direct identification.</li>
              <li><b>Personification:</b> giving human traits to non-human things.</li>
              <li><b>Sound devices:</b> alliteration (repeated consonants), assonance (repeated vowels), onomatopoeia (words that sound like their meaning).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "The wind whispered through the corn." Name the device.<br>
            <b>Personification</b> (wind given the human act of whispering) — plus <b>onomatopoeia/alliteration</b> in the soft "w" sound if asked about sound.</div>

            <h3>4. Drama: written to be seen</h3>
            <p>A play tells its story through <b>dialogue</b> and <b>action</b>, organised into <b>acts</b> and <b>scenes</b>, with <b>stage directions</b> telling actors how to move or speak. Its main types: <b>tragedy</b> (the fall of a great person through a tragic flaw — Okonkwo's story reads like one), <b>comedy</b> (ends happily, often in marriage or reconciliation), and <b>tragicomedy</b> (blends both moods).</p>
            <ul>
              <li><b>Dramatis personae:</b> the list of characters.</li>
              <li><b>Soliloquy:</b> a character speaking thoughts aloud, alone on stage.</li>
              <li><b>Aside:</b> a quick remark to the audience that other characters "do not hear".</li>
              <li><b>Catharsis:</b> the purging of pity and fear at the end of a tragedy.</li>
            </ul>

            <h3>5. How exams attack the genres</h3>
            <ul>
              <li><b>Prose:</b> "discuss the role of setting" — tie every point to named incidents, not summary.</li>
              <li><b>Poetry:</b> "identify two devices and their effect" — name the device, quote the line, state the effect on the reader.</li>
              <li><b>Drama:</b> "is this play a tragedy?" — judge by structure and ending, quoting the climax.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> never retell the story. Examiners award marks for <b>devices + quotation + effect</b>. One quoted phrase per point is enough.</div>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling the <b>narrator</b> the author — the author writes; the narrator tells.</li>
              <li>Confusing <b>theme</b> (idea) with <b>plot</b> (events).</li>
              <li>Calling any sad poem an elegy — an elegy specifically mourns a dead person.</li>
              <li>Saying a soliloquy is heard by other characters — it is spoken alone.</li>
              <li>Labeling first-person narration "third person" because the narrator names himself.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> memorise one Nigerian anchor text per genre (Things Fall Apart for prose, a prescribed poem for poetry, a prescribed play for drama). Any device question becomes easier when you test it on a text you know cold.</div>
"""

deepen('Introduction to Accounting & the Accounting Equation', 2606, ACCOUNTING)
deepen('What Economics Is: Scarcity, Choice & Opportunity Cost', 2955, ECONOMICS)
deepen('The Three Genres: Prose, Poetry & Drama', 2979, LITERATURE)

open(P, 'w', encoding='utf-8').write(s)
print('lessons2 applied OK')
