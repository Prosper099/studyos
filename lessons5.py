#!/usr/bin/env python3
"""lessons5: deepen Sentence Types, Early Nigerian Civilisations, Arms of Government."""
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

SENTENCES = """
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
"""

CIVILISATIONS = """
            <h3>1. Four lights of early Nigeria</h3>
            <p>Long before 1900, the Nigerian space produced civilisations whose art and trade still astonish the world: <b>Nok</b> (terracotta pioneers), <b>Ife</b> (the naturalistic bronzes), <b>Benin</b> (the walled city of guilds) and <b>Kanem-Borno</b> (the Saharan trade empire). Exams ask what each is famous for, its evidence, and its dates.</p>

            <h3>2. Nok — the earliest sculptors</h3>
            <ul>
              <li><b>Where/when:</b> Jos Plateau (Kaduna/Plateau axis); flourished roughly <b>500 BC to 200 AD</b>.</li>
              <li><b>Discovery:</b> tin miners kept unearthing figures; archaeologist <b>Bernard Fagg</b> named and dated the culture (1940s).</li>
              <li><b>Art style:</b> baked <b>terracotta</b> heads and figures with the signature <b>triangular, pierced eyes</b> and elaborate hair — stylised, not naturalistic.</li>
              <li><b>Why it matters:</b> oldest known figurative sculpture tradition in sub-Saharan Africa; among the earliest <b>iron smelting</b> in the region — proof of advanced technology.</li>
            </ul>

            <h3>3. Ife — the astonishing naturalism</h3>
            <ul>
              <li><b>Where/when:</b> Ile-Ife (Osun State); peak about <b>1100–1500 AD</b>.</li>
              <li><b>Discovery:</b> 1938, during house digging — bronze and terracotta heads so lifelike that Europeans falsely claimed outsiders made them.</li>
              <li><b>Style:</b> serene, <b>naturalistic</b> faces in brass/bronze (lost-wax casting) and terracotta; some show facial striations (tribal marks).</li>
              <li><b>Role:</b> spiritual heart of the Yoruba world — the <b>Oni of Ife</b> and Ife's crown-giving gave neighbouring kingdoms (including Oyo and Benin) legitimacy.</li>
            </ul>

            <h3>4. Benin — the walled city of guilds</h3>
            <ul>
              <li><b>People/rulers:</b> Edo; the <b>Oba</b>; great expansion under <b>Oba Ewuare</b> (15th century).</li>
              <li><b>The city:</b> massive walls and moats — among the largest earthworks in the world — organised wards and craft <b>guilds</b> (brass-casters, carvers, weavers) serving the palace.</li>
              <li><b>Art:</b> commemorative <b>brass heads</b> of Obas, and hundreds of <b>plaques</b> recording court life, wars and ceremony — a metal archive.</li>
              <li><b>Trade & fall:</b> 15th-century contact with the <b>Portuguese</b> (pepper, cloth, later the slave trade); the 1897 British punitive expedition looted the bronzes now scattered in world museums — a restitution debate that still runs today.</li>
            </ul>

            <h3>5. Kanem-Borno — the Saharan gateway</h3>
            <ul>
              <li><b>Where/when:</b> Lake Chad basin; Kanem rose by about the <b>9th century</b>, shifting to Borno by the 14th; the <b>Sayfawa (Sefuwa) dynasty</b> ruled for centuries.</li>
              <li><b>Ruler/council:</b> the <b>Mai</b>, checked by powerful councillors (the kencheshu).</li>
              <li><b>Islam & trade:</b> rulers Muslim by about the 11th century; wealth from <b>trans-Saharan trade</b> — salt and cloth in, slaves, hides and horses out; horses and cavalry built its army.</li>
              <li><b>Evidence:</b> the royal chronicle (<b>girgam</b>), Arabic correspondence and travellers' accounts (e.g. Ibn Battuta's era) — among the few written records of pre-colonial Nigeria.</li>
            </ul>

            <h3>6. What the four teach historians</h3>
            <ul>
              <li>Art is evidence: style, metal and motifs date societies and map their contacts.</li>
              <li>Technology: Nok iron, Ife/Benin lost-wax casting, Borno irrigation and cavalry — sophistication without Europe.</li>
              <li>Trade tied Nigeria to the Mediterranean and the Islamic world centuries before the Atlantic trade.</li>
            </ul>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Giving Nok <b>bronze</b> — Nok is <b>terracotta</b>; bronze belongs to Ife and Benin.</li>
              <li>Swapping styles: Ife = naturalistic; Nok = stylised triangular eyes.</li>
              <li>Placing the Benin punitive expedition in 1897 — correct; but the Ife heads' discovery is <b>1938</b>, Nok naming to the <b>1940s</b>.</li>
              <li>Saying Kanem-Borno lacked written records — the girgam exists.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> four hooks — Nok: <b>terracotta eyes</b>; Ife: <b>natural faces</b>; Benin: <b>walls & plaques</b>; Borno: <b>horses & salt</b>. Any question opens from its hook.</div>
"""

ARMS = """
            <h3>1. Why power is divided</h3>
            <p>The <b>separation of powers</b> splits government into three arms — <b>legislature</b> (makes laws), <b>executive</b> (implements laws) and <b>judiciary</b> (interprets laws) — so that no single person or group holds all power. The idea is associated with <b>Montesquieu</b> (18th century); each arm also <b>checks</b> the others ("checks and balances").</p>

            <h3>2. The legislature</h3>
            <ul>
              <li><b>Functions:</b> make and amend laws, approve the budget ("power of the purse"), confirm appointments, oversight of the executive, and representing constituencies.</li>
              <li><b>Structures:</b> <b>unicameral</b> (one chamber) vs <b>bicameral</b> (two). Nigeria's National Assembly is bicameral: <b>Senate</b> (3 senators per state + 1 for the FCT = 109) and the <b>House of Representatives</b> (population-based seats).</li>
              <li><b>Law-making in brief:</b> bill → readings and committee → passage by both chambers → <b>presidential assent</b> (or override of a veto by two-thirds of both houses).</li>
            </ul>

            <h3>3. The executive</h3>
            <ul>
              <li><b>Functions:</b> implement and enforce laws, prepare the budget, conduct foreign policy, command the armed forces, appoint ministers and judges (subject to checks).</li>
              <li><b>Two layers:</b> the <b>political executive</b> (President, governors, ministers — they set policy and face elections) and the <b>civil service</b> (permanent, neutral officials who administer).</li>
              <li>In Nigeria's <b>presidential</b> system the President is both head of state and head of government, elected separately from the legislature.</li>
            </ul>

            <h3>4. The judiciary</h3>
            <ul>
              <li><b>Functions:</b> interpret laws, settle disputes, punish offenders, protect rights, and review the actions of the other arms (<b>judicial review</b>).</li>
              <li><b>Nigeria's ladder (simplified):</b> magistrate/district courts → High Courts → National Industrial Court / Sharia and Customary Courts of Appeal → Court of Appeal → <b>Supreme Court</b> (final).</li>
              <li><b>Independence safeguards:</b> security of tenure (removal only for misconduct via address), salaries charged to the Consolidated Revenue Fund, and contempt power to enforce judgments.</li>
            </ul>

            <h3>5. Checks and balances in action</h3>
            <ul>
              <li><b>Executive on legislature:</b> the President may <b>veto</b> a bill; may summon sessions.</li>
              <li><b>Legislature on executive:</b> confirms ministers and judges, controls funds, investigates, and can <b>impeach</b> the President or remove governors.</li>
              <li><b>Judiciary on both:</b> voids laws and acts that breach the Constitution (judicial review).</li>
              <li><b>Executive on judiciary:</b> appoints judges (with Senate confirmation).</li>
              <li><b>Legislature on judiciary:</b> confirms appointments; can address for removal.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> The National Assembly passes a bill; the President refuses to sign; two-thirds of both houses vote again. What happens?<br>
            The veto is <b>overridden</b> — the bill becomes law without assent. A classic checks-and-balances exam scenario.</div>
            <div class="worked"><b>Worked example:</b> A state passes a law banning peaceful protests. Which arm can cancel it, and how?<br>
            The <b>judiciary</b>, via judicial review, declaring it unconstitutional for violating the fundamental right to assemble.</div>

            <h3>6. Separation vs fusion</h3>
            <p>In a <b>parliamentary</b> system (Britain; Nigeria's First Republic) the executive is drawn from the legislature — a <b>fusion</b> of powers with collective responsibility. In a <b>presidential</b> system (USA; Nigeria since 1979) the arms are separate and independently elected. Nigeria today is presidential.</p>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying the executive <b>makes</b> laws — it implements; the legislature makes (the executive may issue regulations under laws).</li>
              <li>Thinking separation means the arms never touch — checks and balances require them to touch.</li>
              <li>Calling the Senate population-based; it is the House that follows population.</li>
              <li>Forgetting that judges are appointed, not elected.</li>
              <li>Confusing impeachment (legislature removing the executive) with judicial removal.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> memorise one check per direction (veto, purse, review, confirm, impeach). Any "explain checks and balances" question becomes five bullets.</div>
"""

deepen('Sentence Types, Clauses & Phrases', 3164, SENTENCES)
deepen('Early Nigerian Civilisations: Nok, Ife, Benin & Kanem-Borno', 3182, CIVILISATIONS)
deepen('The Arms of Government & Separation of Powers', 3222, ARMS)

open(P, 'w', encoding='utf-8').write(s)
print('lessons5 applied OK')
