# arts1.py — splice Arts subjects (Government, Literature in English, History) SS1 into CURRICULUM. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

def topic(title, tags, summary, content, quiz, cards):
    q = ',\n            '.join(
        "{ q: %r, options: %r, correct: %d, exp: %r }" % (x[0], x[1], x[2], x[3]) for x in quiz)
    c = ',\n            '.join("{ q: %r, a: %r }" % (x[0], x[1]) for x in cards)
    assert '`' not in content and '${' not in content
    return ("""        {
          title: '%s',
          tags: %r,
          summary: '%s',
          content: `%s`,
          quiz: [
            %s
          ],
          cards: [
            %s
          ],
        },""" % (title, tags, summary, content, q, c)).replace("\\'", "'")

GOV = [
topic('Meaning, Nature & Scope of Government', ['State & nation', 'Sovereignty', 'Legitimacy'],
 'What government means, the ideas behind the state, and how far the reach of government extends.',
 '''
            <h3>1. What government is</h3>
            <p><b>Government</b> is the machinery established by the state to organise, manage and direct its affairs — the people and institutions that make, enforce and interpret laws. In a second sense it is the <b>process</b> of governing, and the <b>academic discipline</b> (Political Science) that studies power and how it is used.</p>
            <ul>
              <li><b>State:</b> a politically organised territory with a permanent population, a defined boundary, a government and the capacity to enter relations with other states.</li>
              <li><b>Nation:</b> a community of people with shared history, language and culture — a state can contain several nations, and Nigeria is one.</li>
              <li><b>Sovereignty:</b> the supreme power of the state to make and enforce laws without external control.</li>
              <li><b>Legitimacy:</b> the popular belief that a government has the right to rule — power accepted as proper, not merely obeyed out of fear.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A military junta controls Lagos, collects taxes and is obeyed out of fear, but no other country recognises it and citizens reject it. State? Yes, arguably. Sovereign? It exercises power. Legitimate? No — obedience without acceptance is power without legitimacy.</div>

            <h3>2. Why government exists</h3>
            <ul>
              <li>Maintain order and security; protect life and property.</li>
              <li>Provide public goods roads, water, defence that individuals cannot supply alone.</li>
              <li>Protect rights and settle disputes through courts.</li>
              <li>Promote welfare and economic stability.</li>
            </ul>
            <div class="formula">Watch out — TRAP: the STATE is permanent (it never dies); the GOVERNMENT is temporary (it changes at elections or coups). Criticising the government is not criticising the state.</div>

            <h3>3. Scope of government</h3>
            <p>The scope of government is the range of matters it involves itself in. <b>Laissez-faire</b> (minimalist) views limit it to defence, police and courts; <b>welfare</b> views extend it to health, education, housing and the economy. Nigeria practises a wide welfare-leaning scope — free-ish education schemes, NHIS, subsidies.</p>
            <ul>
              <li>Core organs studied: legislature (makes laws), executive (implements), judiciary (interprets).</li>
              <li>Related fields it touches: economics, history, sociology, law — which is why Government is called the meeting point of the social sciences.</li>
            </ul>

            <h3>4. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define sovereignty. <i>Ans: the supreme power of the state to make and enforce laws without external control.</i></li>
              <li><b>Q2.</b> One difference between state and nation. <i>Ans: state is a political territory; nation is a cultural community of people.</i></li>
              <li><b>Q3.</b> What is legitimacy? <i>Ans: popular acceptance of a government&apos;s right to rule.</i></li>
            </ul>
            <div class="formula">SUMMARY: government is the machinery, process and study of ruling; it rests on the ideas of state, nation, sovereignty and legitimacy; it exists to keep order, provide public goods, protect rights and promote welfare; and its scope ranges from minimal night-watchman duties to full welfare involvement, operating through the legislature, executive and judiciary.</div>
''',
 [('Which of these best defines government as a machinery?', ['The supreme power of the state', 'The agency or machinery established by the state to manage its affairs', 'A cultural community of people', 'The study of economics'], 1, 'Government is the machinery the state sets up to make, enforce and interpret laws.'),
  ('A state differs from a nation because a state', ['shares one language', 'is a politically organised territory with government', 'has no boundary', 'is always small'], 1, 'The state is the political organisation; the nation is the cultural community.'),
  ('Sovereignty means', ['obedience through fear', 'supreme power of the state without external control', 'popular election', 'foreign recognition only'], 1, 'Sovereignty is the state&apos;s supreme, uncontrollable authority.'),
  ('A government obeyed but not accepted by its people lacks', ['sovereignty', 'legitimacy', 'a constitution', 'a civil service'], 1, 'Legitimacy is the acceptance of the right to rule.'),
  ('Which is NOT a basic reason government exists?', ['Maintain order', 'Provide public goods', 'Guarantee private profit for rulers', 'Protect rights'], 2, 'Government exists for public, not rulers&apos; private, ends.'),
  ('The laissez-faire view says government should', ['run all businesses', 'limit itself to defence, police and courts', 'control education only', 'own all land'], 1, 'Minimalists want the state as night-watchman only.'),
  ('Roads and streetlights are examples of', ['private goods', 'public goods', 'luxury goods', 'inferior goods'], 1, 'They are supplied collectively because individuals cannot supply them alone.'),
  ('The study of government overlaps with', ['biology', 'political science and the social sciences', 'chemistry', 'geometry'], 1, 'Government is the meeting point of the social sciences.'),
  ('Which organ of government interprets the laws?', ['Legislature', 'Executive', 'Judiciary', 'Press'], 2, 'Courts interpret; legislature makes; executive implements.'),
  ('A government can change while the state remains because', ['the state is temporary', 'the state is permanent while government is temporary', 'both are temporary', 'the state elects itself'], 1, 'States endure; governments come and go.')],
 [('Define government.', 'The machinery, process and academic study of ruling — the agency the state establishes to make, enforce and interpret laws.'),
  ('What is a state?', 'A politically organised territory with permanent population, defined boundary, government and capacity for international relations.'),
  ('What is a nation?', 'A community of people bound by shared history, language and culture.'),
  ('Define sovereignty.', 'The supreme power of the state to make and enforce laws without external control.'),
  ('Define legitimacy.', 'The popular belief that a government has the rightful authority to rule.'),
  ('Give two reasons government exists.', 'To maintain order and security, and to provide public goods such as roads and defence.'),
  ('What are public goods?', 'Goods like roads, streetlights and defence that individuals cannot supply alone, so the state provides them.'),
  ('What is the laissez-faire view of government?', 'The minimalist view limiting government to defence, police and courts.'),
  ('What is the welfare view of government?', 'The view that government should extend into health, education, housing and the economy.'),
  ('Name the three arms of government.', 'The legislature, the executive and the judiciary.'),
  ('Which arm makes laws?', 'The legislature.'),
  ('Which arm implements laws?', 'The executive.'),
  ('Which arm interprets laws?', 'The judiciary.'),
  ('Why is Government called a social science hub?', 'Because it borrows from and connects economics, history, sociology and law.'),
  ('Distinguish state from government.', 'The state is the permanent political community; the government is the temporary agency that rules it.')]),

topic('The Arms of Government & Separation of Powers', ['Legislature', 'Executive', 'Judiciary', 'Checks & balances'],
 'The three arms, what each does, and how separation of powers with checks and balances keeps power from becoming tyranny.',
 '''
            <h3>1. The three arms</h3>
            <table>
              <tr><th>Arm</th><th>Core function</th><th>Nigerian example</th></tr>
              <tr><td>Legislature</td><td>makes laws, approves budgets</td><td>National Assembly — Senate &amp; House of Reps</td></tr>
              <tr><td>Executive</td><td>implements laws, runs administration</td><td>President, ministers, civil service</td></tr>
              <tr><td>Judiciary</td><td>interprets laws, settles disputes</td><td>Supreme Court down to magistrate courts</td></tr>
            </table>

            <h3>2. Separation of powers</h3>
            <p>The doctrine, associated with <b>Baron de Montesquieu</b> (The Spirit of the Laws, 1748), says the three functions should be vested in separate bodies so that no single person or institution holds all power — the classic shield against tyranny.</p>
            <ul>
              <li><b>Strict separation:</b> the USA model — personnel of one arm do not sit in another.</li>
              <li><b>Partial separation (fusion):</b> the British/Westminster model — ministers are also legislators.</li>
              <li>Nigeria blends both: presidential structure with separate personnel, but strong checks between arms.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> The National Assembly passes a bill (legislative act); the President may veto it (executive check); Congress can override with two-thirds votes (legislative counter-check); if the law violates the constitution, the Supreme Court voids it (judicial check). One law, three arms, zero dictatorship.</div>

            <h3>3. Checks and balances in Nigeria</h3>
            <ul>
              <li>Executive checks legislature: presidential assent/veto; power to initiate budgets.</li>
              <li>Legislature checks executive: confirms ministers, controls purse, impeaches, investigates.</li>
              <li>Judiciary checks both: judicial review strikes down unconstitutional acts.</li>
              <li>Executive checks judiciary: appoints judges on recommendation; legislature confirms and can remove on address.</li>
            </ul>
            <div class="formula">Watch out — TRAP: separation of powers does NOT mean the arms never interact — it means no arm monopolises all power; checks and balances ARE the system working, not a sign of crisis.</div>

            <h3>4. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Who popularised separation of powers? <i>Ans: Montesquieu.</i></li>
              <li><b>Q2.</b> Which arm approves the budget? <i>Ans: the legislature.</i></li>
              <li><b>Q3.</b> Judicial review means what? <i>Ans: courts can void acts that violate the constitution.</i></li>
            </ul>
            <div class="formula">SUMMARY: the legislature makes laws, the executive implements them and the judiciary interprets them; Montesquieu&apos;s separation of powers keeps the three in separate hands to prevent tyranny; Nigeria practises a presidential version where checks and balances — vetoes, purse control, impeachment, confirmation and judicial review — let each arm limit the others so that power checks power.</div>
''',
 [('Who is associated with the doctrine of separation of powers?', ['Locke', 'Montesquieu', 'Hobbes', 'Marx'], 1, 'Montesquieu argued for it in The Spirit of the Laws (1748).'),
  ('The legislature&apos;s core function is to', ['interpret laws', 'make laws and approve budgets', 'arrest offenders', 'run ministries'], 1, 'Law-making and the purse belong to the legislature.'),
  ('Which arm implements laws?', ['Judiciary', 'Executive', 'Legislature', 'Electoral commission'], 1, 'The executive administers and enforces.'),
  ('In Nigeria the legislature is the', ['Supreme Court', 'National Assembly', 'Cabinet', 'Police'], 1, 'Senate plus House of Representatives.'),
  ('Judicial review allows courts to', ['make laws', 'void unconstitutional acts', 'appoint ministers', 'control the budget'], 1, 'Courts strike down acts that breach the constitution.'),
  ('The Westminster model features', ['strict separation', 'fusion of executive and legislature', 'no judiciary', 'military rule'], 1, 'Ministers sit in parliament — a partial separation.'),
  ('Impeachment is a check by the', ['executive on judiciary', 'legislature on executive', 'judiciary on legislature', 'press on army'], 1, 'The legislature can remove the executive.'),
  ('Presidential veto is a check by the', ['executive on legislature', 'judiciary on executive', 'legislature on itself', 'states on federal'], 0, 'The president may refuse assent to a bill.'),
  ('Which country practises strict separation of powers?', ['Britain', 'USA', 'Nigeria&apos;s First Republic', 'France only'], 1, 'The US keeps personnel of the arms separate.'),
  ('Checks and balances exist mainly to', ['slow government down', 'prevent concentration and abuse of power', 'please foreign donors', 'create conflict'], 1, 'Power checking power is the anti-tyranny design.')],
 [('Name the three arms of government.', 'Legislature, executive and judiciary.'),
  ('What does the legislature do?', 'Makes laws and approves budgets.'),
  ('What does the executive do?', 'Implements and enforces laws, runs the administration.'),
  ('What does the judiciary do?', 'Interprets laws and settles disputes.'),
  ('Who wrote The Spirit of the Laws?', 'Baron de Montesquieu (1748).'),
  ('What is separation of powers?', 'Vesting the three functions of government in separate bodies so no one holds all power.'),
  ('What is the US model of separation?', 'Strict separation — personnel of one arm do not sit in another.'),
  ('What is the Westminster model?', 'Partial separation with fusion of executive and legislature.'),
  ('What is judicial review?', 'The power of courts to void acts that violate the constitution.'),
  ('Give one legislative check on the executive.', 'Control of the purse, confirmation of appointments, or impeachment.'),
  ('Give one executive check on the legislature.', 'Presidential assent or veto of bills.'),
  ('What is impeachment?', 'The legislature&apos;s power to remove a senior executive officer for gross misconduct.'),
  ('Which model does Nigeria practise?', 'A presidential system with separate personnel and strong checks and balances.'),
  ('Why separate powers at all?', 'To prevent tyranny by stopping one body from holding all power.'),
  ('Do checks and balances mean crisis?', 'No — they are the system working as designed so power checks power.')]),

topic('Early Nigerian Civilisations: Nok, Ife, Benin & Kanem-Borno', ['Nok terracotta', 'Ife bronze heads', 'Benin kingdom', 'Kanem-Borno'],
 'The ancient civilisations on Nigerian soil — their arts, economies and governments — and why they matter to history.',
 '''
            <h3>1. Nok culture (c. 500 BC – c. 200 AD)</h3>
            <ul>
              <li>Discovered in 1928 at Nok village (Kaduna area) when tin mining unearthed terracotta figures.</li>
              <li>Famous for <b>terracotta sculptures</b> with triangular pierced eyes — among the oldest figurative art in Africa.</li>
              <li>Early iron smelting: Nok people were among West Africa&apos;s first iron workers.</li>
              <li>Economy: farming (millet, yam), hunting and trade.</li>
            </ul>

            <h3>2. Ife civilisation (c. 800–1600 AD)</h3>
            <ul>
              <li>Yoruba city regarded as the spiritual cradle — the Oduduwa tradition.</li>
              <li>World-famous <b>naturalistic bronze and terracotta heads</b>; the realism shocked Europe into doubting African origin (a prejudice long since destroyed).</li>
              <li>Ruled by the <b>Ooni</b>; a wealthy town of farming and craft guilds.</li>
            </ul>

            <h3>3. Benin Kingdom (c. 1200–1897 AD)</h3>
            <ul>
              <li>Edo state ruled by the <b>Oba</b>; capital Benin City with its famous moats and walls.</li>
              <li><b>Brass casting guilds</b> produced plaques recording court history — art as archive.</li>
              <li>Traded pepper, cloth and later slaves with Europeans; fell to the British punitive expedition of 1897, when the famous bronzes were looted.</li>
            </ul>

            <h3>4. Kanem-Borno (c. 9th–19th century)</h3>
            <ul>
              <li>Islamic empire around Lake Chad; the <b>Sayfawa dynasty</b> ruled for centuries.</li>
              <li>Grew rich on <b>trans-Saharan trade</b> — salt, horses, slaves, kola; Mai Idris Alooma (16th c.) modernised the army and built pilgrim hostels.</li>
              <li>Its cavalry and walled cities made it the dominant power of the north-east.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Arrange by earliest peak: Nok (before 200 AD) → Ife (800–1600) → Benin (1200–1897) → Kanem-Borno&apos;s golden age under Idris Alooma (1500s). Note overlaps: Ife and Benin and Kanem-Borno were contemporaries — Nigerian history is a braid, not a queue.</div>
            <div class="formula">Watch out — TRAP: Nok art is TERRACOTTA (clay); Ife and Benin are famous for BRONZE/BRASS metalwork. Exams love swapping these.</div>

            <h3>5. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Nok is famous for what art? <i>Ans: terracotta sculptures.</i></li>
              <li><b>Q2.</b> Who rules Benin? <i>Ans: the Oba.</i></li>
              <li><b>Q3.</b> Kanem-Borno&apos;s wealth came from which trade? <i>Ans: trans-Saharan trade.</i></li>
            </ul>
            <div class="formula">SUMMARY: Nigeria&apos;s soil holds ancient civilisations — Nok with terracotta art and early iron (c. 500 BC–200 AD), Ife with naturalistic bronze heads and the Oduduwa tradition, Benin with the Oba, great walls and brass plaques until 1897, and Kanem-Borno, the Islamic Lake Chad empire enriched by trans-Saharan trade under the Sayfawa dynasty and Mai Idris Alooma.</div>
''',
 [('Nok culture is famous for', ['bronze plaques', 'terracotta sculptures', 'ivory masks only', 'textiles'], 1, 'Nok figures are fired clay with triangular pierced eyes.'),
  ('Nok site lies in present-day', ['Kaduna area', 'Benin City', 'Kano', 'Lagos'], 0, 'Tin mining at Nok village revealed the culture.'),
  ('Ife civilisation is associated with which people?', ['Edo', 'Yoruba', 'Kanuri', 'Igbo'], 1, 'Ife is the Yoruba spiritual cradle.'),
  ('Ife art is celebrated for', ['abstract cubes', 'naturalistic bronze heads', 'wooden stools', 'wall paintings'], 1, 'The realism of Ife heads is world-famous.'),
  ('The ruler of Benin Kingdom is the', ['Ooni', 'Oba', 'Mai', 'Emir'], 1, 'The Oba of Benin.'),
  ('Benin plaques served as', ['currency', 'court history records in brass', 'cooking ware', 'roof tiles'], 1, 'The guilds cast history into brass plaques.'),
  ('Benin fell to the British in', ['1861', '1897', '1900', '1914'], 1, 'The 1897 punitive expedition looted the bronzes.'),
  ('Kanem-Borno centred on', ['Lake Chad', 'Niger Delta', 'Jos Plateau', 'Cross River'], 0, 'The empire grew around Lake Chad.'),
  ('Kanem-Borno&apos;s wealth came mainly from', ['trans-Saharan trade', 'oil', 'cocoa', 'tin mining'], 0, 'Salt, horses and kola crossed the Sahara.'),
  ('Mai Idris Alooma is remembered for', ['founding Nok', 'modernising army and pilgrimage hostels', 'building Lagos', 'ending slavery'], 1, 'The 16th-century Mai reformed army and trade.')],
 [('What art is Nok famous for?', 'Terracotta sculptures with triangular pierced eyes.'),
  ('When did Nok flourish?', 'Roughly 500 BC to 200 AD.'),
  ('What metal technology did Nok pioneer?', 'Early iron smelting in West Africa.'),
  ('Which people founded Ife civilisation?', 'The Yoruba; tradition credits Oduduwa.'),
  ('What is special about Ife heads?', 'Their naturalistic realism in bronze and terracotta.'),
  ('Who is the traditional ruler of Ife?', 'The Ooni.'),
  ('Who rules Benin Kingdom?', 'The Oba.'),
  ('What are the Benin bronzes?', 'Brass plaques and heads cast by guilds to record court history.'),
  ('What happened to Benin in 1897?', 'A British punitive expedition captured the city and looted the bronzes.'),
  ('Where was Kanem-Borno located?', 'Around Lake Chad in the north-east.'),
  ('Which dynasty ruled Kanem-Borno?', 'The Sayfawa dynasty.'),
  ('Name Kanem-Borno&apos;s famous 16th-century ruler.', 'Mai Idris Alooma.'),
  ('What trade made Kanem-Borno rich?', 'Trans-Saharan trade in salt, horses, slaves and kola.'),
  ('Which civilisation is oldest here?', 'Nok (from about 500 BC).'),
  ('Why do these civilisations matter?', 'They prove sophisticated art, politics and economies on Nigerian soil long before colonialism.')]),
]

LIT = [
topic('The Three Genres: Prose, Poetry & Drama', ['Prose', 'Poetry', 'Drama', 'Plot & character'],
 'The three literary genres and their building blocks — the foundation every Literature question stands on.',
 '''
            <h3>1. Prose</h3>
            <p>Prose is ordinary written language without metrical pattern — novels and short stories. Its elements:</p>
            <ul>
              <li><b>Plot:</b> the arranged sequence of events; <b>chronology</b> is mere order, plot adds cause and effect.</li>
              <li><b>Character:</b> flat (one trait) vs round (complex); static vs dynamic (changes).</li>
              <li><b>Setting:</b> time and place; can shape mood and theme.</li>
              <li><b>Theme:</b> the central idea; <b>point of view:</b> first person, third-person limited or omniscient.</li>
              <li><b>Novel vs novella vs short story:</b> length and scope.</li>
            </ul>

            <h3>2. Poetry</h3>
            <ul>
              <li>Language compressed into rhythm and imagery; lines and stanzas instead of sentences and paragraphs.</li>
              <li><b>Sound devices:</b> rhyme, rhythm, alliteration, assonance, onomatopoeia.</li>
              <li><b>Sense devices:</b> imagery, metaphor, simile, personification.</li>
              <li>Types: sonnet (14 lines), ballad (narrative song), ode, elegy (mourns), haiku.</li>
            </ul>

            <h3>3. Drama</h3>
            <ul>
              <li>A story written to be <b>performed</b>; told through dialogue and action, not narration.</li>
              <li><b>Acts and scenes;</b> stage directions; <b>dramatis personae</b> (cast list).</li>
              <li>Tragedy (hero&apos;s fall), comedy (ends in joy/union), tragicomedy, farce.</li>
              <li>Devices: soliloquy (alone on stage, thinking aloud), monologue, aside (to audience, others &apos;don&apos;t hear&apos;).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Classify: (a) a 300-page story of a village teacher — prose novel; (b) 14 lines rhymed abab mourning a dead friend — elegiac sonnet (poetry); (c) a script where a king debates aloud alone on stage — drama using soliloquy, likely tragedy.</div>
            <div class="formula">Watch out — TRAP: theme is the IDEA (e.g. &apos;betrayal destroys&apos;); plot is the EVENTS. &apos;What happened&apos; is plot; &apos;what it means&apos; is theme.</div>

            <h3>4. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> A character who changes through the story is? <i>Ans: dynamic/round.</i></li>
              <li><b>Q2.</b> 14-line poem? <i>Ans: sonnet.</i></li>
              <li><b>Q3.</b> Speech heard by audience but not by other characters? <i>Ans: aside.</i></li>
            </ul>
            <div class="formula">SUMMARY: literature divides into prose (novels and stories built from plot, character, setting, theme and point of view), poetry (compressed language with sound and sense devices, in forms like sonnet, ballad, ode and elegy) and drama (stories performed through dialogue, in acts and scenes, using tragedy, comedy and devices like soliloquy and aside).</div>
''',
 [('Prose is best described as', ['metrical language', 'ordinary written language without metre', 'sung verse', 'stage directions'], 1, 'Prose is non-metrical ordinary language.'),
  ('The arranged sequence of events with cause and effect is the', ['theme', 'plot', 'setting', 'tone'], 1, 'Plot is causally arranged events.'),
  ('A complex, changing character is', ['flat', 'static', 'round/dynamic', 'stock'], 2, 'Round characters are complex; dynamic ones change.'),
  ('Time and place of a story form its', ['plot', 'setting', 'climax', 'denouement'], 1, 'Setting is time plus place.'),
  ('A 14-line poem is a', ['ballad', 'sonnet', 'haiku', 'ode'], 1, 'Sonnets run 14 lines.'),
  ('A poem mourning the dead is an', ['ode', 'elegy', 'epic', 'epigram'], 1, 'Elegies mourn.'),
  ('Drama is meant to be', ['read silently only', 'performed', 'sung always', 'written in stanzas'], 1, 'Drama lives on stage.'),
  ('A speech by a character alone on stage is a', ['duologue', 'soliloquy', 'chorus', 'aside'], 1, 'Soliloquy is thinking aloud alone.'),
  ('A play that ends in joy and union is a', ['tragedy', 'comedy', 'farce', 'melodrama'], 1, 'Comedy ends happily.'),
  ('The central idea of a work is its', ['climax', 'theme', 'stanza', 'act'], 1, 'Theme is the governing idea.')],
 [('What is prose?', 'Ordinary written language without metrical pattern — novels and short stories.'),
  ('Define plot.', 'The causally arranged sequence of events in a narrative.'),
  ('Flat vs round character?', 'Flat has one trait; round is complex and developed.'),
  ('Static vs dynamic character?', 'Static stays the same; dynamic changes through the story.'),
  ('What is setting?', 'The time and place of a story.'),
  ('What is theme?', 'The central idea or message of a work.'),
  ('Name three poetry sound devices.', 'Rhyme, rhythm, alliteration (also assonance, onomatopoeia).'),
  ('What is a sonnet?', 'A 14-line poem.'),
  ('What is an elegy?', 'A poem of mourning, usually for the dead.'),
  ('What is a ballad?', 'A narrative poem in song-like form.'),
  ('What is drama?', 'A story written to be performed through dialogue and action.'),
  ('What is a soliloquy?', 'A speech by a character alone on stage, thinking aloud.'),
  ('What is an aside?', 'A remark to the audience that other characters do not hear.'),
  ('Tragedy vs comedy?', 'Tragedy ends in the hero&apos;s fall; comedy ends in joy and union.'),
  ('What is point of view?', 'The narrative voice — first person, third-person limited or omniscient.')]),

topic('Literary & Figurative Devices', ['Metaphor', 'Simile', 'Personification', 'Irony'],
 'The toolbox of figures of speech and literary devices, with instant-recognition examples for objective questions.',
 '''
            <h3>1. Figures of comparison</h3>
            <ul>
              <li><b>Simile:</b> comparison using like/as — &apos;brave as a lion&apos;.</li>
              <li><b>Metaphor:</b> direct identification — &apos;the classroom was a zoo&apos;.</li>
              <li><b>Personification:</b> giving human traits to non-humans — &apos;the wind whispered&apos;.</li>
              <li><b>Hyperbole:</b> deliberate exaggeration — &apos;I have told you a million times&apos;.</li>
            </ul>

            <h3>2. Sound and repetition</h3>
            <ul>
              <li><b>Alliteration:</b> repeated initial consonants — &apos;slippery snake slid&apos;.</li>
              <li><b>Assonance:</b> repeated vowel sounds — &apos;the rain in Spain&apos;.</li>
              <li><b>Onomatopoeia:</b> words that imitate sounds — buzz, crash, splatter.</li>
              <li><b>Repetition/anaphora:</b> repeated openings for emphasis.</li>
            </ul>

            <h3>3. Meaning devices</h3>
            <ul>
              <li><b>Irony:</b> saying the opposite of what is meant, or outcomes opposite to expectations.</li>
              <li><b>Sarcasm:</b> sharp, mocking irony.</li>
              <li><b>Paradox:</b> a statement that seems self-contradictory yet true — &apos;the child is father of the man&apos;.</li>
              <li><b>Oxymoron:</b> two contradictory words joined — &apos;cruel kindness&apos;.</li>
              <li><b>Symbol &amp; symbolism:</b> an object standing for an idea — a flag for nationhood.</li>
              <li><b>Allusion:</b> a passing reference to a known person, place or text.</li>
              <li><b>Euphemism:</b> a mild substitute — &apos;passed away&apos; for died.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Identify: &apos;The moon smiled at the sleeping village.&apos; The moon (non-human) smiles (human act) — personification. &apos;He is a walking dictionary&apos; — metaphor. &apos;Busy as a bee&apos; — simile. Three devices, three different mechanics.</div>
            <div class="formula">Watch out — TRAP: simile COMPARES with like/as; metaphor IDENTIFIES without them. &apos;She is like a rose&apos; (simile) vs &apos;she is a rose&apos; (metaphor).</div>

            <h3>4. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> &apos;The sea roared&apos; is? <i>Ans: personification.</i></li>
              <li><b>Q2.</b> &apos;Deafening silence&apos; is? <i>Ans: oxymoron.</i></li>
              <li><b>Q3.</b> &apos;Passed away&apos; for died is? <i>Ans: euphemism.</i></li>
            </ul>
            <div class="formula">SUMMARY: comparison devices (simile with like/as, metaphor by identification, personification, hyperbole), sound devices (alliteration, assonance, onomatopoeia, repetition) and meaning devices (irony, sarcasm, paradox, oxymoron, symbol, allusion, euphemism) are the examiner&apos;s favourites — recognise each by its mechanic, not by vibe.</div>
''',
 [('Comparison using like or as is a', ['metaphor', 'simile', 'paradox', 'allusion'], 1, 'Similes use like/as.'),
  ('&apos;The classroom was a zoo&apos; is a', ['simile', 'metaphor', 'euphemism', 'irony'], 1, 'Direct identification without like/as.'),
  ('&apos;The wind whispered&apos; is', ['hyperbole', 'personification', 'oxymoron', 'simile'], 1, 'Human trait given to the wind.'),
  ('Deliberate exaggeration is', ['irony', 'hyperbole', 'allusion', 'assonance'], 1, 'Hyperbole overstates for effect.'),
  ('Repeated initial consonants make', ['assonance', 'alliteration', 'onomatopoeia', 'metaphor'], 1, 'Alliteration repeats first consonants.'),
  ('Words imitating sounds are', ['onomatopoeia', 'oxymoron', 'paradox', 'symbol'], 0, 'Buzz, crash, splatter.'),
  ('Saying the opposite of what is meant is', ['irony', 'simile', 'euphemism', 'anaphora'], 0, 'Irony means the opposite.'),
  ('&apos;Cruel kindness&apos; is an', ['oxymoron', 'allusion', 'elegy', 'aside'], 0, 'Contradictory words joined.'),
  ('A mild word replacing a harsh one is', ['euphemism', 'hyperbole', 'metaphor', 'farce'], 0, 'Passed away for died.'),
  ('A passing reference to a famous story is an', ['allusion', 'oxymoron', 'epigram', 'ode'], 0, 'Allusion nods at known material.')],
 [('What is a simile?', 'A comparison using like or as — brave as a lion.'),
  ('What is a metaphor?', 'Direct identification without like/as — he is a lion.'),
  ('What is personification?', 'Giving human qualities to non-human things — the wind whispered.'),
  ('What is hyperbole?', 'Deliberate exaggeration — I waited a thousand years.'),
  ('What is alliteration?', 'Repetition of initial consonant sounds.'),
  ('What is assonance?', 'Repetition of vowel sounds within words.'),
  ('What is onomatopoeia?', 'Words that imitate the sounds they name — buzz, crash.'),
  ('What is irony?', 'Saying or ending opposite to what is meant or expected.'),
  ('What is sarcasm?', 'Sharp, mocking irony aimed at ridiculing.'),
  ('What is a paradox?', 'A seemingly self-contradictory statement that is true — the child is father of the man.'),
  ('What is an oxymoron?', 'Two contradictory terms joined — deafening silence.'),
  ('What is a symbol?', 'An object standing for a larger idea — a flag for nationhood.'),
  ('What is allusion?', 'A brief reference to a known person, place, event or text.'),
  ('What is euphemism?', 'A mild expression replacing a harsh one — passed away for died.'),
  ('Simile vs metaphor in one line?', 'Simile compares with like/as; metaphor identifies without them.')]),
]

HIST = [
topic('History as a Discipline & Sources of History', ['Primary sources', 'Secondary sources', 'Oral tradition', 'Archaeology'],
 'What history is, why it matters, and the raw materials — sources — historians build the past from.',
 '''
            <h3>1. What history is</h3>
            <p><b>History</b> is the systematic study of the human past, based on evidence, organised as a narrative of causes and consequences. It is not gossip about the dead; it is an argument from sources about what happened, why, and with what results.</p>
            <ul>
              <li>Gives identity and citizenship; preserves culture.</li>
              <li>Teaches judgment by example — &apos;history teaches&apos;.</li>
              <li>Informs planning: a nation that knows its past plans its future better.</li>
            </ul>

            <h3>2. Sources of history</h3>
            <table>
              <tr><th>Type</th><th>Meaning</th><th>Examples</th></tr>
              <tr><td>Primary</td><td>first-hand, from the period</td><td>diaries, treaties, coins, pottery, eyewitness accounts</td></tr>
              <tr><td>Secondary</td><td>written later, using primary sources</td><td>textbooks, biographies, articles</td></tr>
              <tr><td>Oral tradition</td><td>spoken memory passed down</td><td>praise poems, folk tales, king lists, eyewitness recall</td></tr>
              <tr><td>Archaeology</td><td>material remains dug up</td><td>Nok terracotta, Benin walls, potsherds, tools</td></tr>
            </table>
            <ul>
              <li><b>Linguistics</b> (word borrowing and migration) and <b>anthropology</b> (culture studies) assist too.</li>
              <li>Each source type has bias: oral memory shrinks and inflates; documents flatter their authors; archaeology is silent without interpreters.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A 1914 letter by a Lagos trader describing amalgamation is a PRIMARY source (first-hand, of the period). A 2020 textbook chapter on amalgamation is SECONDARY. A griot&apos;s praise poem of a king is ORAL TRADITION — primary-ish but filtered by memory.</div>
            <div class="formula">Watch out — TRAP: primary/secondary is about WHEN and HOW the source was made, not its age alone. An old book can still be secondary if it interprets rather than witnesses.</div>

            <h3>3. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define history. <i>Ans: the evidence-based study of the human past.</i></li>
              <li><b>Q2.</b> An eyewitness diary is which source? <i>Ans: primary.</i></li>
              <li><b>Q3.</b> Spoken memory passed down? <i>Ans: oral tradition.</i></li>
            </ul>
            <div class="formula">SUMMARY: history is the evidence-based study of the human past that builds identity, judgment and planning sense; it is assembled from primary sources (first-hand), secondary sources (later interpretations), oral tradition and archaeology, with linguistics and anthropology as assistants; and every source carries bias, so historians cross-examine them like witnesses.</div>
''',
 [('History is best defined as', ['stories about kings', 'the evidence-based study of the human past', 'the study of maps', 'memorising dates'], 1, 'History argues from evidence about the past.'),
  ('A diary written during an event is a', ['secondary source', 'primary source', 'myth', 'legend'], 1, 'First-hand from the period.'),
  ('A modern textbook interpreting old events is', ['primary', 'secondary', 'oral', 'archaeological'], 1, 'It interprets rather than witnesses.'),
  ('Praise poems and folk tales belong to', ['archaeology', 'oral tradition', 'linguistics', 'cartography'], 1, 'Spoken memory passed down.'),
  ('Studying material remains like potsherds is', ['oral tradition', 'archaeology', 'anthropology', 'economics'], 1, 'Archaeology digs the past.'),
  ('Nok terracotta is an example of which source?', ['written', 'archaeological', 'oral', 'audio'], 1, 'Material remains unearthed.'),
  ('A weakness of oral tradition is', ['it never changes', 'memory can shrink or inflate events', 'it is always written', 'it needs no interpreter'], 1, 'Spoken memory distorts over generations.'),
  ('Linguistics helps history by', ['dating rocks', 'tracing word borrowing and migrations', 'counting stars', 'drawing maps'], 1, 'Language movement records people movement.'),
  ('Why study history?', ['to repeat mistakes', 'for identity, judgment and planning', 'only for exams', 'to hate neighbours'], 1, 'Identity, lessons and better planning.'),
  ('Cross-checking sources is called', ['forgery', 'cross-examination of evidence', 'myth-making', 'censorship'], 1, 'Historians test sources against each other.')],
 [('Define history.', 'The systematic, evidence-based study of the human past.'),
  ('Give two uses of history.', 'It builds identity and citizenship, and teaches judgment for planning.'),
  ('What is a primary source?', 'A first-hand record from the period studied — diaries, treaties, coins.'),
  ('What is a secondary source?', 'A later account built from primary sources — textbooks, biographies.'),
  ('What is oral tradition?', 'Spoken memory passed across generations — praise poems, folk tales, king lists.'),
  ('What is archaeology?', 'The study of material remains excavated from the ground.'),
  ('Give one archaeological source in Nigeria.', 'Nok terracotta figures or the Benin walls.'),
  ('Name a strength of written sources.', 'They fix detail exactly as recorded at the time.'),
  ('Name a weakness of oral tradition.', 'Memory can shrink, inflate or reshape events over time.'),
  ('How does linguistics assist history?', 'Word borrowing and language spread trace migrations and contact.'),
  ('How does anthropology assist history?', 'By studying cultures and customs that preserve the past.'),
  ('Is an old book always primary?', 'No — primary/secondary depends on witnessing vs interpreting, not age.'),
  ('What is bias in a source?', 'The slant from the maker&apos;s interest, flattery or limited view.'),
  ('Why cross-examine sources?', 'Because each carries bias; agreement between independent sources builds reliability.'),
  ('History is an argument from what?', 'From evidence — sources tested against each other.')]),

topic('Pre-Colonial Nigerian Societies: Igbo, Yoruba & Hausa-Fulani Administration', ['Age grades', 'Oyo Mesi', 'Emirate system', 'Checks on power'],
 'How pre-colonial Nigerian societies governed themselves — village democracy, checks on kings, and the emirate system.',
 '''
            <h3>1. Igbo: decentralised village democracy</h3>
            <ul>
              <li>Most Igbo communities had <b>no centralised kingship</b> — authority was dispersed (&apos;acephalous&apos; or republican).</li>
              <li>Institutions: <b>village assembly</b> of adults; <b>council of elders;</b> <b>age grades</b> (year-sets doing communal work and policing); <b>title societies</b> (ozo); <b>oracle</b> (e.g. Arochukwu&apos;s Ibini Ukpabi) as spiritual court.</li>
              <li>Decisions by consensus — a democracy of the village square.</li>
            </ul>

            <h3>2. Yoruba: constitutional monarchy with checks</h3>
            <ul>
              <li>The <b>Alaafin of Oyo</b> ruled with checks: the <b>Oyo Mesi</b> (council of seven kingmakers) and the <b>Ogboni</b> (earth cult/judicial brotherhood).</li>
              <li>The <b>Bashorun</b> led the Oyo Mesi; if the Alaafin turned tyrant, the custom was to send him an empty calabash (or parrot&apos;s eggs) — a command to commit suicide.</li>
              <li>The <b>Ogboni</b> checked both king and council; the <b>Are Ona Kakanfo</b> led the army.</li>
            </ul>

            <h3>3. Hausa-Fulani: the emirate system</h3>
            <ul>
              <li>After the <b>1804 jihad of Usman dan Fodio</b>, the Sokoto Caliphate united emirates under the <b>Sultan (Amir al-Mu&apos;minin)</b>.</li>
              <li>Each emirate: an <b>Emir</b> advised by officials (Waziri, Galadima, Madawaki...), Islamic law (Sharia) and courts (alkali), taxes (zakat, jizya), and the <b>emirate system</b> the British later kept for indirect rule.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Compare checks on power: Oyo — the Oyo Mesi could depose a tyrant Alaafin; Igbo — the village assembly and age grades dispersed power entirely; Sokoto — Islamic law bound the Emir, and the Sultan could depose errant emirs. Three different constitutions, one shared allergy to tyranny.</div>
            <div class="formula">Watch out — TRAP: &apos;acephalous&apos; does NOT mean chaotic — Igbo society had rich institutions; it means power was spread, not headless in practice.</div>

            <h3>4. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> The Oyo kingmakers&apos; council? <i>Ans: the Oyo Mesi.</i></li>
              <li><b>Q2.</b> Who led the 1804 jihad? <i>Ans: Usman dan Fodio.</i></li>
              <li><b>Q3.</b> Igbo authority was mostly? <i>Ans: decentralised/village-based.</i></li>
            </ul>
            <div class="formula">SUMMARY: pre-colonial Nigeria governed itself in three classic styles — the Igbo village democracy with assemblies, age grades, titles and oracles; the Yoruba constitutional monarchy where the Oyo Mesi and Ogboni checked the Alaafin, even to the empty calabash; and the Hausa-Fulani emirate system of the Sokoto Caliphate, Islamic law and advised emirs — each a working constitution before colonialism arrived.</div>
''',
 [('Pre-colonial Igbo society is described as', ['highly centralised', 'acephalous/decentralised', 'military dictatorship', 'a colony'], 1, 'Authority was dispersed among institutions.'),
  ('Igbo communal decisions were often taken by', ['the emir', 'the village assembly', 'the Alaafin', 'the sultan'], 1, 'Consensus in the village square.'),
  ('Age grades were', ['school classes', 'year-sets performing communal duties', 'tax offices', 'royal titles'], 1, 'Age sets did work and policing.'),
  ('The Arochukwu oracle was called', ['Ogboni', 'Ibini Ukpabi', 'Oyo Mesi', 'Zamakowa'], 1, 'A spiritual court of appeal.'),
  ('The Alaafin ruled which kingdom?', ['Benin', 'Oyo', 'Kanem', 'Kano'], 1, 'The Oyo empire.'),
  ('The Oyo Mesi were', ['seven kingmakers checking the Alaafin', 'army slaves', 'traders', 'priests of Sango only'], 0, 'The council of kingmakers.'),
  ('Who led the Oyo Mesi?', ['Bashorun', 'Galadima', 'Waziri', 'Oba'], 0, 'The Bashorun headed the council.'),
  ('The Ogboni served as', ['a check on king and council', 'a market union', 'a cavalry', 'a tax farm'], 0, 'A judicial brotherhood balancing power.'),
  ('The 1804 jihad was led by', ['Mai Idris Alooma', 'Usman dan Fodio', 'Queen Amina', 'Jaja'], 1, 'Founder of the Sokoto Caliphate.'),
  ('The head of the Sokoto Caliphate was the', ['Emir of Kano', 'Sultan', 'Alaafin', 'Obi'], 1, 'The Sultan at Sokoto.'),
  ('Islamic judges in the emirates were called', ['alkali', 'waziri', 'balogun', 'ozo'], 0, 'Alkali courts applied Sharia.'),
  ('The British kept which system for indirect rule?', ['village assembly', 'emirate system', 'oracle cult', 'age grades'], 1, 'The emirates made indirect rule easy in the north.')],
 [('What does acephalous mean for Igbo society?', 'Power was decentralised — no single central king; institutions shared authority.'),
  ('Name two Igbo institutions.', 'Village assembly, council of elders, age grades, title societies, oracle.'),
  ('What were age grades?', 'Sets of people born in the same period who did communal work and policing.'),
  ('What was the Ibini Ukpabi?', 'The Arochukwu oracle — a spiritual court of appeal.'),
  ('Who was the Alaafin?', 'The king of the Oyo empire.'),
  ('Who were the Oyo Mesi?', 'The council of seven kingmakers who checked the Alaafin.'),
  ('How was a tyrant Alaafin removed?', 'The Oyo Mesi sent an empty calabash — a command to die.'),
  ('What was the Ogboni?', 'A powerful brotherhood that checked both king and council.'),
  ('Who founded the Sokoto Caliphate?', 'Usman dan Fodio after the 1804 jihad.'),
  ('Who headed the Sokoto Caliphate?', 'The Sultan (Amir al-Mu&apos;minin) at Sokoto.'),
  ('What is an emirate?', 'A province of the caliphate ruled by an Emir under the Sultan.'),
  ('Name two emirate officials.', 'Waziri, Galadima, Madawaki, Dogari.'),
  ('What law ran the emirate courts?', 'Islamic law (Sharia) via alkali courts.'),
  ('Which system did the British reuse?', 'The emirate system, for indirect rule in the north.'),
  ('Common thread across the three systems?', 'Built-in checks against tyranny — assemblies, councils or Sharia.')]),
]

def subj(name, color, icon, blurb, topics, resources):
    r = ',\n      '.join("{ cat: %r, title: %r, url: %r, note: %r }" % tuple(x) for x in resources)
    block = """  '%s': {
    color: '%s', icon: '%s', blurb: '%s',
    topics: {
      SS1: [
%s
      ],
    },
    resources: [
      %s
    ]
  },
""" % (name, color, icon, blurb, '\n'.join(topics), r)
    return block

blocks = ''
blocks += subj('Government', 'violet', '🏛️', 'Power, constitutions, arms of government and Nigerian politics — WAEC/UTME staple.', GOV, [
 ('Past questions', 'Myschool — Government past questions', 'https://myschool.ng/classroom', 'Objective and theory questions from past WASSCE/UTME papers.'),
 ('Reference', 'Wikipedia — Separation of powers', 'https://en.wikipedia.org/wiki/Separation_of_powers', 'Montesquieu and the three arms.'),
 ('Video lesson', 'WAEC Government revision videos', 'https://www.youtube.com/results?search_query=waec+government+nigeria+revision', 'Arms of government and political concepts.'),
 ('Reference', 'Wikipedia — Nigeria politics', 'https://en.wikipedia.org/wiki/Politics_of_Nigeria', 'How the Nigerian system actually runs.')])
blocks += subj('Literature in English', 'fuchsia', '📖', 'Prose, poetry, drama and the devices examiners love to ask about.', LIT, [
 ('Past questions', 'Myschool — Literature past questions', 'https://myschool.ng/classroom', 'Past WASSCE/UTME literature objectives and essays.'),
 ('Reference', 'Wikipedia — Literary genre', 'https://en.wikipedia.org/wiki/Literary_genre', 'Prose, poetry and drama at a glance.'),
 ('Reference', 'Wikipedia — Figure of speech', 'https://en.wikipedia.org/wiki/Figure_of_speech', 'Every device with examples.'),
 ('Video lesson', 'WAEC Literature revision videos', 'https://www.youtube.com/results?search_query=waec+literature+in+english+revision', 'Set texts and device spotting.')])
blocks += subj('History', 'orange', '🏺', 'Nigerian civilisations, pre-colonial states and the story of how we got here.', HIST, [
 ('Past questions', 'Myschool — History past questions', 'https://myschool.ng/classroom', 'Past WASSCE/UTME history questions.'),
 ('Reference', 'Wikipedia — Nok culture', 'https://en.wikipedia.org/wiki/Nok_culture', 'Terracotta art and early iron.'),
 ('Reference', 'Wikipedia — Oyo Empire', 'https://en.wikipedia.org/wiki/Oyo_Empire', 'Constitutional monarchy and checks.'),
 ('Reference', 'Wikipedia — Sokoto Caliphate', 'https://en.wikipedia.org/wiki/Sokoto_Caliphate', 'The 1804 jihad and the emirate system.')])

anchor = "const LEVEL_CATALOGUE = {"
i = s.rindex('};', 0, s.index(anchor))
# find the subject-block end: the last "  },\n" before LEVEL_CATALOGUE
ins = s.rindex('  },', 0, i) + len('  },')
s = s[:ins] + '\n' + blocks + s[ins:]

s = s.replace("SS1:  ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology']",
              "SS1:  ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology', 'Government', 'Literature in English', 'History']")

s = s.replace("  'Biology': { bg: 'bg-lime-50', text: 'text-lime-700', ring: 'ring-lime-200', solid: 'bg-lime-600' }\n};",
  "  'Biology': { bg: 'bg-lime-50', text: 'text-lime-700', ring: 'ring-lime-200', solid: 'bg-lime-600' },\n"
  "  'Government': { bg: 'bg-violet-50', text: 'text-violet-700', ring: 'ring-violet-200', solid: 'bg-violet-600' },\n"
  "  'Literature in English': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', ring: 'ring-fuchsia-200', solid: 'bg-fuchsia-600' },\n"
  "  'History': { bg: 'bg-orange-50', text: 'text-orange-700', ring: 'ring-orange-200', solid: 'bg-orange-600' },\n"
  "  'Economics': { bg: 'bg-cyan-50', text: 'text-cyan-700', ring: 'ring-cyan-200', solid: 'bg-cyan-600' },\n"
  "  'Commerce': { bg: 'bg-blue-50', text: 'text-blue-700', ring: 'ring-blue-200', solid: 'bg-blue-600' },\n"
  "  'Financial Accounting': { bg: 'bg-green-50', text: 'text-green-700', ring: 'ring-green-200', solid: 'bg-green-600' }\n};")

open(path, 'w', encoding='utf-8').write(s)
import re as _re
for t in ['Meaning, Nature & Scope of Government', 'The Three Genres: Prose, Poetry & Drama', 'Pre-Colonial Nigerian Societies: Igbo, Yoruba & Hausa-Fulani Administration']:
    k = s.find("title: '" + t + "'")
    print(t, '->', 'OK' if k > 0 else 'MISSING')
print('catalogue SS1 now:', _re.search(r"SS1:\s*\[(.*?)\]", s[s.index('LEVEL_CATALOGUE'):]).group(1)[:160])
