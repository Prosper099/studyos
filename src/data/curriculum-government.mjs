export default {

    color: 'violet', icon: '🏛️', blurb: 'Power, constitutions, arms of government and Nigerian politics — WAEC/UTME staple.',
    topics: {
      SS1: [
        {
          title: 'Meaning, Nature & Scope of Government',
          tags: ['State & nation', 'Sovereignty', 'Legitimacy'],
          summary: 'What government means, the ideas behind the state, and how far the reach of government extends.',
          content: `

            <h3>1. Two senses of "government"</h3>
            <p>In the <b>narrow sense</b>, government is the machinery — the people and institutions (executive, legislature, judiciary, civil service) that make and enforce binding rules in a state. In the <b>broad sense</b>, it is the whole <b>process</b> of governing: how power is won, used, checked and lost, and how values (who gets what, when and how) are authoritatively allocated.</p>
            <ul>
              <li>Government is also the art and science of keeping order and providing collective services.</li>
              <li>It is a <b>political association</b>: a community organised for collective decision-making within a territory.</li>
            </ul>

            <h3>2. Key concepts: power, authority, legitimacy, sovereignty</h3>
            <ul>
              <li><b>Power:</b> the ability to make others comply, even against their will.</li>
              <li><b>Authority:</b> power accepted as <b>rightful</b> — people obey the police officer, not just because he can force, but because the office is recognised.</li>
              <li><b>Legitimacy:</b> the popular belief that a government has the right to rule; it turns power into authority. Sources: elections, tradition, law, performance.</li>
              <li><b>Sovereignty:</b> the state's supreme power within its borders, owing no obedience outside (internally supreme, externally independent).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A robber with a gun has power but not authority. Explain.<br>
            Compliance comes from fear alone; no recognised right to command exists, so the power is illegitimate — the essence of the power/authority distinction.</div>

            <h3>3. Why government exists</h3>
            <ul>
              <li><b>Order & security:</b> without a referee, life is "nasty, brutish and short" (Hobbes' state of nature).</li>
              <li><b>Public goods:</b> roads, defence, streetlights — things the market under-provides.</li>
              <li><b>Rights & justice:</b> protecting life and property, settling disputes by courts, not fists.</li>
              <li><b>Welfare:</b> health, education, safety nets.</li>
              <li><b>Social contract:</b> Locke and Rousseau — people consent to be governed so their rights are protected; a government that breaks the contract loses legitimacy.</li>
            </ul>

            <h3>4. The scope of government as a subject</h3>
            <ul>
              <li><b>Political theory:</b> ideas of justice, rights, democracy, ideologies (liberalism, socialism, fascism).</li>
              <li><b>Institutions:</b> constitutions, legislatures, executives, judiciaries, local government, civil service.</li>
              <li><b>Political behaviour:</b> parties, elections, pressure groups, public opinion, political culture.</li>
              <li><b>Political economy:</b> how governments tax, spend and manage resources.</li>
              <li><b>Administration:</b> how policies become services on the ground.</li>
              <li><b>International relations:</b> diplomacy, war, organisations (UN, AU, ECOWAS).</li>
            </ul>

            <h3>5. Government and its neighbours</h3>
            <p>Government borrows eyes from other disciplines: <b>history</b> supplies the record of institutions, <b>economics</b> explains budgets and policy trade-offs, <b>sociology</b> explains groups and class, <b>philosophy</b> asks what makes rule right, and <b>law</b> provides the rules government enforces. That borrowing is why it is called a <b>social science</b> — it studies human behaviour with evidence, yet its laws are tendencies, not certainties.</p>

            <h3>6. The Nigerian angle</h3>
            <ul>
              <li>Nigeria practices a <b>federal presidential</b> system under a written constitution that is supreme — every arm and level derives power from it.</li>
              <li>Legitimacy questions (electoral credibility, performance) are live Nigerian debates — examiners love "discuss legitimacy".</li>
            </ul>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Using power and authority interchangeably.</li>
              <li>Confusing sovereignty (state's supremacy) with legitimacy (rightfulness in people's eyes).</li>
              <li>Limiting government to "the president and ministers" — the broad sense includes process and behaviour.</li>
              <li>Saying legitimacy comes only from elections; tradition, law and performance also confer it.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> any definition essay earns structure from four hooks: <b>machinery, process, concepts (power/authority/legitimacy/sovereignty), purposes</b>. One paragraph each.</div>
          `,
          quiz: [
            { q: 'Which of these best defines government as a machinery?', options: ['The supreme power of the state', 'The agency or machinery established by the state to manage its affairs', 'A cultural community of people', 'The study of economics'], correct: 1, exp: 'Government is the machinery the state sets up to make, enforce and interpret laws.' },
            { q: 'A state differs from a nation because a state', options: ['shares one language', 'is a politically organised territory with government', 'has no boundary', 'is always small'], correct: 1, exp: 'The state is the political organisation; the nation is the cultural community.' },
            { q: 'Sovereignty means', options: ['obedience through fear', 'supreme power of the state without external control', 'popular election', 'foreign recognition only'], correct: 1, exp: 'Sovereignty is the state&apos;s supreme, uncontrollable authority.' },
            { q: 'A government obeyed but not accepted by its people lacks', options: ['sovereignty', 'legitimacy', 'a constitution', 'a civil service'], correct: 1, exp: 'Legitimacy is the acceptance of the right to rule.' },
            { q: 'Which is NOT a basic reason government exists?', options: ['Maintain order', 'Provide public goods', 'Guarantee private profit for rulers', 'Protect rights'], correct: 2, exp: 'Government exists for public, not rulers&apos; private, ends.' },
            { q: 'The laissez-faire view says government should', options: ['run all businesses', 'limit itself to defence, police and courts', 'control education only', 'own all land'], correct: 1, exp: 'Minimalists want the state as night-watchman only.' },
            { q: 'Roads and streetlights are examples of', options: ['private goods', 'public goods', 'luxury goods', 'inferior goods'], correct: 1, exp: 'They are supplied collectively because individuals cannot supply them alone.' },
            { q: 'The study of government overlaps with', options: ['biology', 'political science and the social sciences', 'chemistry', 'geometry'], correct: 1, exp: 'Government is the meeting point of the social sciences.' },
            { q: 'Which organ of government interprets the laws?', options: ['Legislature', 'Executive', 'Judiciary', 'Press'], correct: 2, exp: 'Courts interpret; legislature makes; executive implements.' },
            { q: 'A government can change while the state remains because', options: ['the state is temporary', 'the state is permanent while government is temporary', 'both are temporary', 'the state elects itself'], correct: 1, exp: 'States endure; governments come and go.' }
          ],
          cards: [
            { q: 'Define government.', a: 'The machinery, process and academic study of ruling — the agency the state establishes to make, enforce and interpret laws.' },
            { q: 'What is a state?', a: 'A politically organised territory with permanent population, defined boundary, government and capacity for international relations.' },
            { q: 'What is a nation?', a: 'A community of people bound by shared history, language and culture.' },
            { q: 'Define sovereignty.', a: 'The supreme power of the state to make and enforce laws without external control.' },
            { q: 'Define legitimacy.', a: 'The popular belief that a government has the rightful authority to rule.' },
            { q: 'Give two reasons government exists.', a: 'To maintain order and security, and to provide public goods such as roads and defence.' },
            { q: 'What are public goods?', a: 'Goods like roads, streetlights and defence that individuals cannot supply alone, so the state provides them.' },
            { q: 'What is the laissez-faire view of government?', a: 'The minimalist view limiting government to defence, police and courts.' },
            { q: 'What is the welfare view of government?', a: 'The view that government should extend into health, education, housing and the economy.' },
            { q: 'Name the three arms of government.', a: 'The legislature, the executive and the judiciary.' },
            { q: 'Which arm makes laws?', a: 'The legislature.' },
            { q: 'Which arm implements laws?', a: 'The executive.' },
            { q: 'Which arm interprets laws?', a: 'The judiciary.' },
            { q: 'Why is Government called a social science hub?', a: 'Because it borrows from and connects economics, history, sociology and law.' },
            { q: 'Distinguish state from government.', a: 'The state is the permanent political community; the government is the temporary agency that rules it.' }
          ],
        },
        {
          title: 'The Arms of Government & Separation of Powers',
          tags: ['Legislature', 'Executive', 'Judiciary', 'Checks & balances'],
          summary: 'The three arms, what each does, and how separation of powers with checks and balances keeps power from becoming tyranny.',
          content: `

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
          `,
          quiz: [
            { q: 'Who is associated with the doctrine of separation of powers?', options: ['Locke', 'Montesquieu', 'Hobbes', 'Marx'], correct: 1, exp: 'Montesquieu argued for it in The Spirit of the Laws (1748).' },
            { q: 'The legislature&apos;s core function is to', options: ['interpret laws', 'make laws and approve budgets', 'arrest offenders', 'run ministries'], correct: 1, exp: 'Law-making and the purse belong to the legislature.' },
            { q: 'Which arm implements laws?', options: ['Judiciary', 'Executive', 'Legislature', 'Electoral commission'], correct: 1, exp: 'The executive administers and enforces.' },
            { q: 'In Nigeria the legislature is the', options: ['Supreme Court', 'National Assembly', 'Cabinet', 'Police'], correct: 1, exp: 'Senate plus House of Representatives.' },
            { q: 'Judicial review allows courts to', options: ['make laws', 'void unconstitutional acts', 'appoint ministers', 'control the budget'], correct: 1, exp: 'Courts strike down acts that breach the constitution.' },
            { q: 'The Westminster model features', options: ['strict separation', 'fusion of executive and legislature', 'no judiciary', 'military rule'], correct: 1, exp: 'Ministers sit in parliament — a partial separation.' },
            { q: 'Impeachment is a check by the', options: ['executive on judiciary', 'legislature on executive', 'judiciary on legislature', 'press on army'], correct: 1, exp: 'The legislature can remove the executive.' },
            { q: 'Presidential veto is a check by the', options: ['executive on legislature', 'judiciary on executive', 'legislature on itself', 'states on federal'], correct: 0, exp: 'The president may refuse assent to a bill.' },
            { q: 'Which country practises strict separation of powers?', options: ['Britain', 'USA', 'Nigeria&apos;s First Republic', 'France only'], correct: 1, exp: 'The US keeps personnel of the arms separate.' },
            { q: 'Checks and balances exist mainly to', options: ['slow government down', 'prevent concentration and abuse of power', 'please foreign donors', 'create conflict'], correct: 1, exp: 'Power checking power is the anti-tyranny design.' }
          ],
          cards: [
            { q: 'Name the three arms of government.', a: 'Legislature, executive and judiciary.' },
            { q: 'What does the legislature do?', a: 'Makes laws and approves budgets.' },
            { q: 'What does the executive do?', a: 'Implements and enforces laws, runs the administration.' },
            { q: 'What does the judiciary do?', a: 'Interprets laws and settles disputes.' },
            { q: 'Who wrote The Spirit of the Laws?', a: 'Baron de Montesquieu (1748).' },
            { q: 'What is separation of powers?', a: 'Vesting the three functions of government in separate bodies so no one holds all power.' },
            { q: 'What is the US model of separation?', a: 'Strict separation — personnel of one arm do not sit in another.' },
            { q: 'What is the Westminster model?', a: 'Partial separation with fusion of executive and legislature.' },
            { q: 'What is judicial review?', a: 'The power of courts to void acts that violate the constitution.' },
            { q: 'Give one legislative check on the executive.', a: 'Control of the purse, confirmation of appointments, or impeachment.' },
            { q: 'Give one executive check on the legislature.', a: 'Presidential assent or veto of bills.' },
            { q: 'What is impeachment?', a: 'The legislature&apos;s power to remove a senior executive officer for gross misconduct.' },
            { q: 'Which model does Nigeria practise?', a: 'A presidential system with separate personnel and strong checks and balances.' },
            { q: 'Why separate powers at all?', a: 'To prevent tyranny by stopping one body from holding all power.' },
            { q: 'Do checks and balances mean crisis?', a: 'No — they are the system working as designed so power checks power.' }
          ],
        },
        {
          title: 'Early Nigerian Civilisations: Nok, Ife, Benin & Kanem-Borno',
          tags: ['Nok terracotta', 'Ife bronze heads', 'Benin kingdom', 'Kanem-Borno'],
          summary: 'The ancient civilisations on Nigerian soil — their arts, economies and governments — and why they matter to history.',
          content: `

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
          `,
          quiz: [
            { q: 'Nok culture is famous for', options: ['bronze plaques', 'terracotta sculptures', 'ivory masks only', 'textiles'], correct: 1, exp: 'Nok figures are fired clay with triangular pierced eyes.' },
            { q: 'Nok site lies in present-day', options: ['Kaduna area', 'Benin City', 'Kano', 'Lagos'], correct: 0, exp: 'Tin mining at Nok village revealed the culture.' },
            { q: 'Ife civilisation is associated with which people?', options: ['Edo', 'Yoruba', 'Kanuri', 'Igbo'], correct: 1, exp: 'Ife is the Yoruba spiritual cradle.' },
            { q: 'Ife art is celebrated for', options: ['abstract cubes', 'naturalistic bronze heads', 'wooden stools', 'wall paintings'], correct: 1, exp: 'The realism of Ife heads is world-famous.' },
            { q: 'The ruler of Benin Kingdom is the', options: ['Ooni', 'Oba', 'Mai', 'Emir'], correct: 1, exp: 'The Oba of Benin — the divine king of the Edo people.' },
            { q: 'Benin plaques served as', options: ['currency', 'court history records in brass', 'cooking ware', 'roof tiles'], correct: 1, exp: 'The guilds cast history into brass plaques.' },
            { q: 'Benin fell to the British in', options: ['1861', '1897', '1900', '1914'], correct: 1, exp: 'The 1897 punitive expedition looted the bronzes.' },
            { q: 'Kanem-Borno centred on', options: ['Lake Chad', 'Niger Delta', 'Jos Plateau', 'Cross River'], correct: 0, exp: 'The empire grew around Lake Chad.' },
            { q: 'Kanem-Borno&apos;s wealth came mainly from', options: ['trans-Saharan trade', 'oil', 'cocoa', 'tin mining'], correct: 0, exp: 'Salt, horses and kola crossed the Sahara.' },
            { q: 'Mai Idris Alooma is remembered for', options: ['founding Nok', 'modernising army and pilgrimage hostels', 'building Lagos', 'ending slavery'], correct: 1, exp: 'The 16th-century Mai reformed army and trade.' }
          ],
          cards: [
            { q: 'What art is Nok famous for?', a: 'Terracotta sculptures with triangular pierced eyes.' },
            { q: 'When did Nok flourish?', a: 'Roughly 500 BC to 200 AD.' },
            { q: 'What metal technology did Nok pioneer?', a: 'Early iron smelting in West Africa.' },
            { q: 'Which people founded Ife civilisation?', a: 'The Yoruba; tradition credits Oduduwa.' },
            { q: 'What is special about Ife heads?', a: 'Their naturalistic realism in bronze and terracotta.' },
            { q: 'Who is the traditional ruler of Ife?', a: 'The Ooni.' },
            { q: 'Who rules Benin Kingdom?', a: 'The Oba.' },
            { q: 'What are the Benin bronzes?', a: 'Brass plaques and heads cast by guilds to record court history.' },
            { q: 'What happened to Benin in 1897?', a: 'A British punitive expedition captured the city and looted the bronzes.' },
            { q: 'Where was Kanem-Borno located?', a: 'Around Lake Chad in the north-east.' },
            { q: 'Which dynasty ruled Kanem-Borno?', a: 'The Sayfawa dynasty.' },
            { q: 'Name Kanem-Borno&apos;s famous 16th-century ruler.', a: 'Mai Idris Alooma.' },
            { q: 'What trade made Kanem-Borno rich?', a: 'Trans-Saharan trade in salt, horses, slaves and kola.' },
            { q: 'Which civilisation is oldest here?', a: 'Nok (from about 500 BC).' },
            { q: 'Why do these civilisations matter?', a: 'They prove sophisticated art, politics and economies on Nigerian soil long before colonialism.' }
          ],
        },
      ],
      SS2: [
        {
          title: 'Constitutions & Constitutionalism',
          tags: ['Constitution', 'Rule of law', 'Constitutionalism'],
          summary: 'Written vs unwritten, rigid vs flexible, and why constitutionalism and the rule of law keep power on a leash.',
          content: `
            <h3>1. What a constitution is</h3>
            <p>A <b>constitution</b> is the body of fundamental rules that establishes the organs of government, allocates and limits their powers, and defines the rights of citizens. It may be a single document (<b>written/codified</b> — Nigeria 1999, USA) or scattered across statutes, conventions and cases (<b>unwritten/uncodified</b> — Britain).</p>
            <ul>
              <li><b>Rigid:</b> harder to amend than ordinary law (special majorities, referenda) — Nigeria's needs two-thirds of both houses of the National Assembly plus two-thirds of State Houses.</li>
              <li><b>Flexible:</b> amended like ordinary law — Britain.</li>
              <li><b>Federal:</b> power shared between centre and units, each sovereign in its lane — Nigeria, USA.</li>
              <li><b>Unitary:</b> all power sits at the centre; local units are its agents — Ghana, France.</li>
            </ul>

            <h3>2. Supremacy and the Nigerian case</h3>
            <p>The 1999 Constitution is <b>supreme</b>: any law inconsistent with it is void to the extent of inconsistency. It is written, rigid and federal, with a presidential system and a bill of fundamental rights (Chapter IV). Supremacy is what lets a citizen sue the government and win.</p>

            <h3>3. Constitutionalism & the rule of law</h3>
            <p><b>Constitutionalism</b> is the practice of governing within constitutional limits — a constitution can exist without constitutionalism (dictators write constitutions too). A.V. Dicey's three pillars of the <b>rule of law</b>:</p>
            <ul>
              <li><b>Supremacy of law:</b> no one is above the law; no arbitrary punishment.</li>
              <li><b>Equality before the law:</b> officials and citizens answer to the same courts.</li>
              <li><b>Fundamental rights:</b> rights live in ordinary law and are enforced by courts.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A governor orders a journalist jailed for criticising him, without trial. Which pillars collapse? All three — arbitrary punishment (no supremacy), official above courts (no equality), rights ignored. That is rule by decree, not rule of law.</div>

            <h3>4. Safeguards that make constitutionalism real</h3>
            <ul>
              <li>Separation of powers with checks and balances.</li>
              <li>An independent judiciary with judicial review.</li>
              <li>Entrenched rights and a free press.</li>
              <li>Regular free elections and an informed citizenry.</li>
            </ul>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Equating "having a constitution" with constitutionalism.</li>
              <li>Calling Britain's constitution "non-existent" — it is uncodified, not absent.</li>
              <li>Saying rigidity means "unamendable" — it means specially protected.</li>
              <li>Confusing federal supremacy of the constitution with supremacy of the federal government.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> any "rule of law" essay scores by pairing each Dicey pillar with one Nigerian enforcement example (a citizen's suit that succeeded, an act voided for inconsistency).</div>
          `,
          cards: [
            { q: 'Define a constitution.', a: 'The body of fundamental rules establishing the organs of government, allocating and limiting powers, and defining citizens rights.' },
            { q: 'Written vs unwritten constitution — one example each.', a: 'Written: Nigeria 1999, USA. Unwritten (uncodified): Britain.' },
            { q: 'What makes a constitution rigid?', a: 'Amendment requires a special, harder procedure than ordinary law.' },
            { q: 'Is the 1999 Nigerian constitution rigid or flexible?', a: 'Rigid, written and federal.' },
            { q: 'State the doctrine of constitutional supremacy.', a: 'The constitution is the highest law; inconsistent laws are void.' },
            { q: 'What is constitutionalism?', a: 'Government conducted within constitutional limits, with power checked and rights respected.' },
            { q: 'Give Diceys three pillars of the rule of law.', a: 'Supremacy of law, equality before the law, protection of fundamental rights by courts.' },
            { q: 'Can a country have a constitution without constitutionalism?', a: 'Yes — dictators promulgate constitutions they ignore; the practice matters more than the paper.' },
            { q: 'How is the 1999 constitution amended?', a: 'Two-thirds of both National Assembly houses plus ratification by two-thirds of State Houses.' },
            { q: 'Federal vs unitary constitution in one line.', a: 'Federal shares power between centre and units; unitary concentrates it at the centre.' },
            { q: 'Name two safeguards of constitutionalism.', a: 'Independent judiciary with judicial review; separation of powers with checks; free press; regular elections.' },
            { q: 'What does equality before the law mean?', a: 'Officials and ordinary citizens answer to the same law and courts.' },
            { q: 'Where are Nigerian fundamental rights housed?', a: 'Chapter IV of the 1999 constitution.' },
            { q: 'Why is supremacy of law a check on tyranny?', a: 'It bans arbitrary arrest and punishment — every state act needs legal authority.' },
            { q: 'One reason rule of law weakens in practice.', a: 'When the executive ignores court orders or delays appointments, turning rights into paper promises.' }
          ],
          quiz: [
            { q: 'A constitution scattered across statutes, cases and conventions is…', options: ['written', 'unwritten', 'rigid', 'federal'], correct: 1, exp: 'Britain-style uncodified. Nigeria, the USA and Germany have single written documents.' },
            { q: 'The 1999 Nigerian constitution is best described as…', options: ['written, rigid and federal', 'unwritten and flexible', 'written and unitary', 'unwritten and federal'], correct: 0, exp: 'A single codified document, federal in structure, and rigid: amendment needs special majorities.' },
            { q: 'Diceys first pillar of the rule of law is…', options: ['supremacy of the law', 'supremacy of parliament', 'supremacy of the executive', 'supremacy of custom'], correct: 0, exp: 'The supremacy of the law. The other pillars are equality before the law and judicial protection of rights.' },
            { q: 'A rigid constitution is one that…', options: ['cannot be amended', 'is amended by a special procedure', 'is always written', 'has no bill of rights'], correct: 1, exp: 'Requires a special, harder procedure to amend. Rigid does not mean impossible to change.' },
            { q: 'Constitutionalism means…', options: ['having any constitution', 'governing within constitutional limits', 'ruling by decree', 'amending the constitution often'], correct: 1, exp: 'Government actually operating within constitutional limits. A constitution on paper alone is not enough.' },
            { q: 'In Nigeria, a law inconsistent with the constitution is…', options: ['void to the extent of inconsistency', 'valid until repealed', 'binding on states only', 'subject to a referendum'], correct: 0, exp: 'Void, to the extent of the inconsistency, under the supremacy clause in section 1.' },
            { q: 'Equality before the law implies…', options: ['the rich pay more tax', 'officials and citizens face the same courts', 'everyone earns the same', 'only citizens can sue'], correct: 1, exp: 'Officials and ordinary citizens answer to the same law and the same courts.' },
            { q: 'Which country has an uncodified constitution?', options: ['Nigeria', 'United States', 'Britain', 'Germany'], correct: 2, exp: 'Britain. Its rules live in statutes, conventions and judgments rather than one document.' },
            { q: 'A unitary constitution concentrates power…', options: ['at the centre', 'in the states', 'in local councils', 'in the judiciary'], correct: 0, exp: 'At the centre, as in France; power is not shared with autonomous states.' },
            { q: 'Which is NOT a safeguard of constitutionalism?', options: ['independent judiciary', 'free press', 'rule by decree', 'regular elections'], correct: 2, exp: 'Rule by decree is its opposite. Separation of powers, the rule of law and free elections are the safeguards.' }
          ]
        },
        {
          title: 'Electoral Systems, Franchise & INEC',
          tags: ['Elections', 'Franchise', 'INEC'],
          summary: 'How votes become seats: electoral systems, the fight for the franchise, and the body that runs Nigeria\'s polls.',
          content: `
            <h3>1. Why elections matter</h3>
            <p>Elections are the machinery of <b>popular sovereignty</b> — the peaceful transfer of power and the moment legitimacy is renewed. They let citizens choose representatives, judge records, and participate. For elections to confer legitimacy they must be <b>free, fair, periodic and credible</b>.</p>

            <h3>2. Electoral systems — how votes become seats</h3>
            <ul>
              <li><b>Simple majority / first-past-the-post (FPTP):</b> the highest vote wins the seat — simple and stable, but can waste votes and exclude minorities. Used for most Nigerian legislative seats.</li>
              <li><b>Proportional representation (PR):</b> seats follow each party's vote share — fairer to small parties, but can fragment the legislature. Party lists, common in Europe.</li>
              <li><b>Second ballot:</b> if no one crosses a threshold, the top two face a runoff — France's presidential model.</li>
              <li><b>Nigeria's presidential twist:</b> a presidential candidate must win the most votes <b>and</b> at least 25% of votes in two-thirds of the states — federal spread over mere plurality.</li>
            </ul>

            <h3>3. Franchise — who may vote</h3>
            <p>The <b>franchise</b> is the right to vote. History moved it from property and tax limits, through literacy limits, to <b>universal adult suffrage</b> (all qualified adults, typically 18+). Nigeria practices universal adult suffrage. Debates continue over youth inclusion and diaspora voting.</p>

            <h3>4. INEC — the referee</h3>
            <p>The <b>Independent National Electoral Commission</b> registers voters and parties, conducts and supervises elections, announces results, and educates citizens. Its <b>independence</b> (appointment security, funding, freedom from instruction) is the single biggest determinant of credibility. State elections run through SIECs.</p>
            <ul>
              <li><b>Reforms to know:</b> BVAS/IVR voter accreditation, electronic result transmission debates, party primary supervision.</li>
              <li><b>Malpractices that destroy credibility:</b> ballot snatching, result manipulation, voter suppression, money politics.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "Elections legitimise only when losers accept the result." Discuss.<br>
            Acceptance follows credibility: neutral referee (INEC independence), transparent counting, and justice that punishes malpractice. Where any link fails, legitimacy leaks.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Confusing FPTP with PR outcomes — FPTP rewards concentration, PR rewards spread.</li>
              <li>Forgetting the 25% two-thirds spread rule for Nigerian presidents.</li>
              <li>Saying INEC "appoints" winners — it declares results; courts adjudicate disputes.</li>
              <li>Treating franchise as automatic for everyone — age, registration and legal capacity conditions apply.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> for "electoral system" questions, always give one merit and one demerit per system — examiners allocate marks symmetrically.</div>
          `,
          cards: [
            { q: 'What is the franchise?', a: 'The legal right to vote in elections.' },
            { q: 'Define universal adult suffrage.', a: 'All qualified adult citizens (typically 18+) may vote, regardless of property, sex or literacy.' },
            { q: 'How does first-past-the-post work?', a: 'The candidate with the most votes wins the seat, no majority required.' },
            { q: 'One merit and one demerit of FPTP.', a: 'Merit: simple, tends to produce stable single-party governments. Demerit: wastes votes and under-represents minorities.' },
            { q: 'How does proportional representation allocate seats?', a: 'In proportion to each partys share of the votes.' },
            { q: 'What is a second ballot?', a: 'A runoff between top candidates when no one meets the threshold in the first round.' },
            { q: 'State the Nigerian presidential spread requirement.', a: 'Highest votes plus at least 25% of votes cast in two-thirds of the states.' },
            { q: 'What does INEC stand for and do?', a: 'Independent National Electoral Commission — registers voters and parties, conducts elections, declares results, voter education.' },
            { q: 'Who runs state-level elections in Nigeria?', a: 'State Independent Electoral Commissions (SIECs).' },
            { q: 'Why must INEC be independent?', a: 'A referee controlled by incumbents cannot produce credible results; credibility is the source of legitimacy.' },
            { q: 'Name three electoral malpractices.', a: 'Ballot snatching, result manipulation, voter suppression, money politics.' },
            { q: 'What is voter registration for?', a: 'To establish who is qualified to vote and prevent impersonation and multiple voting.' },
            { q: 'Who adjudicates election disputes in Nigeria?', a: 'Election tribunals and courts, not INEC.' },
            { q: 'One argument for lowering the voting age.', a: 'Those taxed and affected by laws deserve representation; it widens participation.' },
            { q: 'What makes an election credible?', a: 'Neutral administration, transparent counting, free campaigning, and consequences for malpractice.' }
          ],
          quiz: [
            { q: 'The right to vote is called the…', options: ['franchise', 'mandate', 'referendum', 'recall'], correct: 0, exp: 'Franchise. It has widened from property-holding men to nearly all adult citizens.' },
            { q: 'First-past-the-post awards the seat to…', options: ['the candidate with the most votes', 'any candidate above 50%', 'the party list', 'the youngest candidate'], correct: 0, exp: 'The candidate with the most votes. No absolute majority is required.' },
            { q: 'Seats shared by vote share describe…', options: ['proportional representation', 'first-past-the-post', 'second ballot', 'indirect election'], correct: 0, exp: 'Proportional representation: seats follow each partys share of the votes.' },
            { q: 'A Nigerian president-elect must secure 25% of votes in…', options: ['two-thirds of the states', 'half of the states', 'all states', 'the FCT only'], correct: 0, exp: 'The winner needs the highest votes plus at least 25% in two-thirds of the states, so winners are never purely regional figures.' },
            { q: 'Universal adult suffrage means…', options: ['only taxpayers vote', 'all qualified adults vote', 'only the educated vote', 'only men vote'], correct: 1, exp: 'Every qualified adult votes, whatever their property, sex or literacy.' },
            { q: 'INEC does NOT…', options: ['register political parties', 'conduct elections', 'adjudicate election petitions', 'educate voters'], correct: 2, exp: 'Try election petitions. Tribunals and courts hear petitions; INEC runs the polls.' },
            { q: 'State local government elections are run by…', options: ['INEC', 'SIECs', 'the Senate', 'the police'], correct: 1, exp: 'State Independent Electoral Commissions (SIECs). INEC handles federal and state polls.' },
            { q: 'A runoff between top two candidates is a…', options: ['second ballot', 'by-election', 'recall', 'plebiscite'], correct: 0, exp: 'Second ballot, used when no candidate meets the winning threshold in round one.' },
            { q: 'Which is an electoral malpractice?', options: ['voter education', 'ballot snatching', 'party primaries', 'result collation'], correct: 1, exp: 'Ballot snatching destroys credibility; the others are lawful parts of the process.' },
            { q: 'Election legitimacy depends most on…', options: ['turnout alone', 'credibility of the process', 'the margin of victory', 'international observers only'], correct: 1, exp: 'The credibility of the whole process, so losers accept results and obey the winners.' }
          ]
        },
        {
          title: 'Political Ideologies',
          tags: ['Liberalism', 'Socialism', 'Capitalism', 'Fascism'],
          summary: 'The great -isms: liberalism, conservatism, socialism, capitalism, fascism and the welfare state — and where Nigeria sits.',
          content: `
            <h3>1. What an ideology is</h3>
            <p>A political <b>ideology</b> is a coherent set of beliefs about how society should be organised — who should own what, how much government may do, and what freedom and equality mean in practice. Ideologies are lenses: they simplify, persuade and guide policy.</p>

            <h3>2. The family tree</h3>
            <ul>
              <li><b>Liberalism:</b> individual liberty, consent of the governed, constitutional limits, rule of law, and markets with open competition. Classical liberals fear state power; modern liberals accept state action to enable real freedom (education, health).</li>
              <li><b>Conservatism:</b> tradition, order and gradual change; sceptical of radical blueprints; values institutions that grew over time (family, religion, custom).</li>
              <li><b>Socialism:</b> public or collective ownership of the major means of production, planning, and a priority on equality of outcome over unfettered markets.</li>
              <li><b>Capitalism:</b> private ownership, profit motive, competition and price signals — efficiency first, with inequality as its shadow.</li>
              <li><b>Fascism:</b> ultranationalism, one-party totalitarian rule, leader principle, suppression of dissent, and the state above the individual — the antithesis of liberalism.</li>
              <li><b>Welfare state:</b> the mixed-economy compromise — markets produce, but the state guarantees a floor: education, health, pensions, safety nets.</li>
            </ul>

            <h3>3. Where Nigeria sits</h3>
            <p>Nigeria's constitution entrenches a <b>mixed economy</b> with welfare-state language (government shall direct its policy toward securing the maximum welfare of all citizens). In practice policy has swung: indigenisation and state enterprises in the oil-boom years, privatisation and market reforms later — a pendulum between socialist and capitalist tools inside a liberal-democratic frame.</p>

            <h3>4. Comparing them fast</h3>
            <ul>
              <li><b>Freedom vs equality:</b> liberalism prizes liberty; socialism prizes equality; fascism prizes the nation; conservatism prizes order.</li>
              <li><b>Ownership:</b> capitalism private; socialism public; welfare state both.</li>
              <li><b>Change:</b> radicals (some socialists, fascists) vs gradualists (conservatives, liberals).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "Free university tuition for all, paid by taxes." Which ideology smiles? Socialism/welfare state (equality and public provision). Which frowns? Classical liberalism/capitalism (state expansion, taxpayer burden).</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Fusing liberalism with capitalism — one is political (liberty, rights), the other economic (markets).</li>
              <li>Calling every government spending "socialism" — the welfare state is a compromise, not a system change.</li>
              <li>Describing fascism as merely "strong government" — it is totalitarian and anti-pluralist.</li>
              <li>Saying conservatism opposes all change — it opposes <b>sudden, untested</b> change.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> one-word cores — liberalism: <b>liberty</b>; conservatism: <b>tradition</b>; socialism: <b>equality</b>; capitalism: <b>market</b>; fascism: <b>nation</b>; welfare state: <b>safety net</b>.</div>
          `,
          cards: [
            { q: 'What is a political ideology?', a: 'A coherent set of beliefs about how society should be organised, guiding policy and power.' },
            { q: 'Core value of liberalism?', a: 'Individual liberty with constitutional limits on power.' },
            { q: 'Core value of conservatism?', a: 'Tradition, order and gradual change.' },
            { q: 'Core value of socialism?', a: 'Public ownership and equality.' },
            { q: 'Core engine of capitalism?', a: 'Private ownership, profit motive and competitive markets.' },
            { q: 'What defines fascism?', a: 'Ultranationalism, one-party totalitarian rule and the state above the individual.' },
            { q: 'What is a welfare state?', a: 'A mixed economy where the state guarantees a social floor: health, education, safety nets.' },
            { q: 'Classical vs modern liberalism?', a: 'Classical fears all state expansion; modern accepts state action that enables real freedom.' },
            { q: 'Which ideology prizes equality of outcome?', a: 'Socialism.' },
            { q: 'Nigerias constitutional economic stance?', a: 'Mixed economy with welfare-state objectives.' },
            { q: 'One demerit of capitalism?', a: 'Inequality of income and wealth; neglect of unprofitable essentials.' },
            { q: 'One demerit of socialism?', a: 'Bureaucracy, shortages and weak innovation incentives.' },
            { q: 'Why is fascism anti-liberal?', a: 'It rejects individual rights, pluralism and limits on state power.' },
            { q: 'Does conservatism reject all change?', a: 'No — it rejects sudden untested change, preferring gradual reform.' },
            { q: 'Give one Nigerian policy swing between ideologies.', a: 'State enterprises and indigenisation in the 1970s vs privatisation and deregulation from the 1980s onward.' }
          ],
          quiz: [
            { q: 'Individual liberty and limited government define…', options: ['liberalism', 'fascism', 'socialism', 'absolutism'], correct: 0, exp: 'Liberalism: individual rights, consent of the governed and constitutional limits on power.' },
            { q: 'Public ownership of the means of production defines…', options: ['capitalism', 'socialism', 'liberalism', 'feudalism'], correct: 1, exp: 'Socialism. It places economic equality above profit.' },
            { q: 'Tradition and gradual change mark…', options: ['conservatism', 'fascism', 'anarchism', 'radicalism'], correct: 0, exp: 'Conservatism. Burke argued for tested institutions and cautious reform.' },
            { q: 'Ultranationalist one-party totalitarianism is…', options: ['fascism', 'liberalism', 'welfarism', 'conservatism'], correct: 0, exp: 'Fascism, as in Italy under Mussolini. It rejects both liberal democracy and socialism.' },
            { q: 'A mixed economy with a social floor describes the…', options: ['welfare state', 'pure capitalism', 'feudal system', 'command economy only'], correct: 0, exp: 'Welfare state: markets plus guaranteed health, education and social security.' },
            { q: 'Profit motive and competition drive…', options: ['capitalism', 'socialism', 'communalism', 'mercantilism'], correct: 0, exp: 'Capitalism. Its defenders point to growth; critics point to inequality.' },
            { q: 'Modern liberals accept state action to…', options: ['enable real freedom (health, education)', 'abolish elections', 'nationalise everything', 'ban opposition'], correct: 0, exp: 'Make freedom real, through health, education and social support, unlike classical liberals.' },
            { q: 'Which pairing is WRONG?', options: ['liberalism — liberty', 'socialism — equality', 'fascism — pluralism', 'conservatism — tradition'], correct: 2, exp: 'Fascism is anti-pluralist. Pairing it with pluralism is false.' },
            { q: 'Nigerias 1970s indigenisation reflected which tilt?', options: ['state-control/socialist tilt', 'pure laissez-faire', 'fascist corporatism', 'anarchism'], correct: 0, exp: 'State control of the economy, the socialist-leaning direction of that era.' },
            { q: 'A key liberal institution is…', options: ['constitutional limits on power', 'one-party rule', 'state religion', 'press censorship'], correct: 0, exp: 'Constitutional limits on power. The other options belong to rival ideologies.' }
          ]
        }
      ],
      SS3: [
        {
          title: 'Military Rule in Nigeria',
          tags: ['Coups', 'Decrees', 'Federalism'],
          summary: 'Why soldiers entered politics, what military rule did to Nigerian federalism, and how the exits happened.',
          content: `
            <h3>1. How the barracks entered politics</h3>
            <p>Nigeria's first coup (15 January 1966) ended the First Republic's civilian experiment; a counter-coup and the crisis that followed slid the country into civil war (1967–70). From 1966 to 1979, and again 1983 to 1999, soldiers ruled. Examiners ask <b>why</b>: corrupted politics and rigged censuses/elections, regional polarisation, a young politicised officer corps, and economic grievances (the 1966 cocoa crisis, later oil boons and busts).</p>

            <h3>2. How military government worked</h3>
            <ul>
              <li><b>Rule by decree and edict:</b> laws issued by the executive without a legislature — decree supremacy ousted court jurisdiction in several eras.</li>
              <li><b>Fused executive and legislature:</b> the same officers made and executed law — separation of powers suspended.</li>
              <li><b>Hierarchy and centralisation:</b> orders flowed top-down like a chain of command.</li>
              <li><b>Suspended constitutions:</b> parts of the constitution were kept, modified by decrees.</li>
            </ul>

            <h3>3. What military rule did to Nigerian federalism</h3>
            <ul>
              <li><b>State creation:</b> from 4 regions to 12 (1967), then 19, 21, 30, 36 + FCT — multiplied the units, shrank their power.</li>
              <li><b>Fiscal centralisation:</b> oil revenue and the federation account made states depend on Abuja — the "feeding-bottle" federalism critics describe.</li>
              <li><b>Uniform institutions:</b> national parties, unified police, central banks of the federation — a military habit of one-size command.</li>
              <li><b>Weakened regions:</b> the strong regional governments of the First Republic never returned.</li>
            </ul>

            <h3>4. The exits and their lessons</h3>
            <p>Transitions came by programme and pressure: 1979 (Murtala/Obasanjo to Shagari), 1993 annulment crisis, and 1999 (Abacha's death, Abubakar's handover to Obasanjo). Lessons examiners reward: military rule professionalised the bureaucracy in parts but stunted political parties, civics and the culture of accountability; legitimacy problems followed every decree regime.</p>
            <div class="worked"><b>Worked example:</b> "Military rule centralised Nigerian federalism." Discuss with three evidences.<br>
            State creation from above; the federation account and oil-dependence; decree supremacy over courts and regions. Conclude: units multiplied while autonomy shrank.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Dating the first coup to 1967 (it is January 1966; the war begins 1967).</li>
              <li>Saying the military "amended" the constitution — decrees overrode it.</li>
              <li>Forgetting the 1993 annulment as a distinct crisis between two military eras.</li>
              <li>Claiming states grew stronger under the military — the opposite happened.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> memorise the state-creation ladder (4→12→19→21→30→36+FCT) with the year and head of state for each — one table answers many questions.</div>
          `,
          cards: [
            { q: 'When was Nigerias first military coup?', a: '15 January 1966.' },
            { q: 'What ended the First Republic?', a: 'The January 1966 coup and the crises that followed.' },
            { q: 'When was the civil war?', a: '1967 to 1970.' },
            { q: 'How did military regimes make law?', a: 'By decree (federal) and edict (state), without legislatures.' },
            { q: 'What happened to separation of powers under the military?', a: 'Suspended — executive and legislative powers fused in the same officers.' },
            { q: 'How many regions did Nigeria start with?', a: 'Four (later a fifth, Mid-Western, in 1963).' },
            { q: 'Who created 12 states in 1967?', a: 'Gowons military government.' },
            { q: 'How many states plus FCT does Nigeria have today?', a: '36 states plus the FCT.' },
            { q: 'What is the federation account?', a: 'The central pool of revenues (chiefly oil) shared among federal, state and local governments.' },
            { q: 'Why is military federalism called feeding-bottle federalism?', a: 'States depend on central allocations instead of their own revenue capacity.' },
            { q: 'What was the 1993 crisis?', a: 'The annulment of the 12 June presidential election, deepening military rule crisis.' },
            { q: 'Who handed over in 1979 and 1999?', a: 'Obasanjo (military) to Shagari in 1979; Abubakar to Obasanjo (civilian) in 1999.' },
            { q: 'One way military rule weakened parties.', a: 'Parties were banned for long stretches, stunting civic organisation and accountability culture.' },
            { q: 'Did decree supremacy strengthen courts?', a: 'No — several decrees ousted court jurisdiction, weakening judicial review.' },
            { q: 'Give one reason coups happened.', a: 'Corrupted elections, regional polarisation, politicised officer corps, economic grievances.' }
          ],
          quiz: [
            { q: 'Nigerias first coup occurred in…', options: ['January 1966', '1967', '1975', '1983'], correct: 0, exp: 'January 1966. A counter-coup followed in July the same year.' },
            { q: 'Military laws at the federal level were called…', options: ['decrees', 'acts', 'edicts', 'bills'], correct: 0, exp: 'Decrees. States issued edicts, and both ousted the courts from reviewing them.' },
            { q: 'The 12-state structure was created in…', options: ['1967', '1976', '1987', '1991'], correct: 0, exp: '1967 by Gowon, on the eve of the civil war, to weaken regional strongholds.' },
            { q: 'Military rule made Nigerian federalism more…', options: ['centralised', 'decentralised', 'confederal', 'unchanged'], correct: 0, exp: 'More centralised: decrees, state creation and central control of revenue all tightened the centre.' },
            { q: 'The civil war lasted…', options: ['1967-1970', '1966-1969', '1970-1973', '1960-1963'], correct: 0, exp: 'From 1967 to 1970, ending with reunion and the 3Rs policy.' },
            { q: 'The annulled presidential election was in…', options: ['1993', '1979', '1983', '1999'], correct: 0, exp: '1993: the 12 June election, annulled by the Babangida regime.' },
            { q: 'Who created the most states in a single exercise after 1967?', options: ['Babangida (to 21 then 30)', 'Gowon (to 12)', 'Abacha (to 36)', 'Obasanjo'], correct: 0, exp: 'Babangida: 21 states in 1987 and 30 in 1991. Abacha added six more in 1996.' },
            { q: 'Feeding-bottle federalism refers to…', options: ['state dependence on central allocations', 'strong regions', 'private funding of states', 'tax competition'], correct: 0, exp: 'States depending on central allocations the way babies depend on bottles.' },
            { q: 'Under military rule, separation of powers was…', options: ['suspended', 'strengthened', 'entrenched', 'judicially enforced'], correct: 0, exp: 'Effectively suspended: the same officers made and executed the law, and checks were ousted.' },
            { q: 'The 1999 transition handed power to…', options: ['civilian Obasanjo', 'civilian Shagari', 'military Buhari', 'military Babangida'], correct: 0, exp: 'The elected Obasanjo, when Abubakar handed over under the 1999 Constitution.' }
          ]
        },
        {
          title: 'Nigerian Foreign Policy',
          tags: ['Foreign policy', 'Africa centre-piece', 'Non-alignment'],
          summary: 'The principles guiding Nigeria abroad: Africa as centre-piece, non-alignment, regional integration and anti-apartheid.',
          content: `
            <h3>1. What foreign policy is</h3>
            <p><b>Foreign policy</b> is the strategy a state uses to protect its interests and project its values abroad — through diplomacy, trade, alliances and institutions. Its <b>determinants</b> include history, size and population, resources (oil), ideology, leadership and the international environment.</p>

            <h3>2. Nigeria's guiding principles</h3>
            <ul>
              <li><b>Africa as centre-piece:</b> the constant since 1960 — support for liberation, regional integration, and African solutions to African problems.</li>
              <li><b>Non-alignment:</b> refusing permanent attachment to either Cold War bloc; judging issues on merit.</li>
              <li><b>Regional integration:</b> driving ECOWAS (1975) and later ECOMOG interventions.</li>
              <li><b>Good neighbourliness & peaceful settlement of disputes:</b> border diplomacy (e.g. Bakassi, settled at the World Court and implemented).</li>
              <li><b>Anti-apartheid & black advancement:</b> funding liberation movements, front-line states, and championing majority rule in southern Africa.</li>
              <li><b>International cooperation:</b> active membership of the UN, AU (OAU), Commonwealth and OPEC.</li>
            </ul>

            <h3>3. High points and tests</h3>
            <ul>
              <li><b>ECOWAS founding (Lagos, 1975):</b> Nigeria as architect and paymaster of West African integration.</li>
              <li><b>ECOMOG (1990s):</b> Nigerian-led interventions in Liberia and Sierra Leone — regional security as public good, at Nigerian cost.</li>
              <li><b>Anti-apartheid:</b> Nigeria boycotted Commonwealth games over apartheid, chaired anti-apartheid committees — moral leadership.</li>
              <li><b>Bakassi:</b> accepting an adverse World Court ruling and implementing it — rule of law over force.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "Africa as centre-piece has cost Nigeria more than it returned." Discuss.<br>
            Costs: ECOMOG bills, liberation funding, concessions in diplomacy. Returns: regional influence, ECOWAS leadership, soft power and diplomatic capital. Balance the ledger in both directions for full marks.</div>

            <h3>4. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying non-alignment means isolation — it means independence of judgement, plus active engagement.</li>
              <li>Dating ECOWAS to 1960 or 1999 — it is 1975, Treaty of Lagos.</li>
              <li>Confusing OAU (1963) with AU (2002).</li>
              <li>Calling Bakassi a war — it was a legal settlement implemented diplomatically.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> any foreign-policy essay opens with "Africa as centre-piece" and closes with one cost and one gain — the frame alone carries half the marks.</div>
          `,
          cards: [
            { q: 'Define foreign policy.', a: 'A states strategy for protecting interests and projecting values abroad.' },
            { q: 'Nigerias number-one foreign policy principle since 1960?', a: 'Africa as the centre-piece.' },
            { q: 'What is non-alignment?', a: 'Not permanently joining any power bloc; judging issues on merit.' },
            { q: 'When and where was ECOWAS founded?', a: '1975, by the Treaty of Lagos.' },
            { q: 'Name two ECOMOG interventions.', a: 'Liberia and Sierra Leone.' },
            { q: 'How did Nigeria oppose apartheid?', a: 'Funding liberation movements, chairing anti-apartheid bodies, Commonwealth boycotts.' },
            { q: 'What was the Bakassi case?', a: 'A Nigeria-Cameroon border dispute settled by the World Court; Nigeria implemented the ruling.' },
            { q: 'Give two determinants of foreign policy.', a: 'History, size and population, resources, ideology, leadership, international environment.' },
            { q: 'OAU became the AU in which year?', a: '2002 (OAU founded 1963).' },
            { q: 'Why is Nigeria called a regional hegemon?', a: 'Size, population, oil wealth and willingness to pay for regional public goods.' },
            { q: 'One cost of Africa centre-piece policy.', a: 'ECOMOG expenses and liberation funding borne largely by Nigeria.' },
            { q: 'One gain of the same policy.', a: 'Diplomatic influence, soft power and leadership of West Africa.' },
            { q: 'Which court settled Bakassi?', a: 'The International Court of Justice (World Court).' },
            { q: 'Good neighbourliness example from Nigerian practice.', a: 'Peaceful border settlements and mediation in neighbouring crises.' },
            { q: 'Does non-alignment mean isolation?', a: 'No — active engagement without permanent bloc attachment.' }
          ],
          quiz: [
            { q: 'Nigerias foreign policy centre-piece is…', options: ['Africa', 'Europe', 'Asia', 'the Americas'], correct: 0, exp: 'Africa. Every administration since Azikiwe has treated Africa as the core.' },
            { q: 'ECOWAS was established in…', options: ['1975', '1960', '1963', '1999'], correct: 0, exp: '1975, by the Treaty of Lagos, to integrate West African economies.' },
            { q: 'ECOMOG intervened in…', options: ['Liberia and Sierra Leone', 'Kenya and Uganda', 'Ghana and Togo', 'Sudan and Chad'], correct: 0, exp: 'Liberia and Sierra Leone, for peacekeeping during their civil wars.' },
            { q: 'Non-alignment means…', options: ['no permanent bloc attachment', 'no foreign trade', 'no embassies', 'neutrality in all disputes'], correct: 0, exp: 'Nigeria keeps independence from permanent blocs. It is not isolation; ties with all powers continue.' },
            { q: 'The Bakassi dispute was with…', options: ['Cameroon', 'Benin', 'Chad', 'Niger'], correct: 0, exp: 'Cameroon. The ICJ awarded it to Cameroon in 2002 and Nigeria implemented the ruling.' },
            { q: 'Nigeria opposed which southern African system?', options: ['apartheid', 'federalism', 'monarchy', 'colonialism in Ghana'], correct: 0, exp: 'Apartheid. Nigeria funded liberation movements and led anti-apartheid action.' },
            { q: 'OAU was founded in…', options: ['1963', '1975', '2002', '1960'], correct: 0, exp: '1963 at Addis Ababa; Nigeria was a founding member.' },
            { q: 'The AU replaced the OAU in…', options: ['2002', '1999', '1988', '2010'], correct: 0, exp: '2002, with broader powers including intervention in grave circumstances.' },
            { q: 'A determinant of foreign policy is…', options: ['national resources', 'state of origin', 'religion of ministers', 'local government count'], correct: 0, exp: 'Size, resources, history, geography and leadership all shape foreign policy.' },
            { q: 'Implementing the Bakassi ruling showed commitment to…', options: ['peaceful settlement of disputes', 'military expansion', 'isolationism', 'annexation'], correct: 0, exp: 'Peaceful settlement of disputes, a core principle of the foreign policy.' }
          ]
        },
        {
          title: 'International Organisations',
          tags: ['UN', 'AU', 'ECOWAS', 'OPEC'],
          summary: 'The clubs Nigeria belongs to: UN, AU, ECOWAS, OPEC and the Commonwealth — purposes, organs and Nigerian roles.',
          content: `
            <h3>1. Why states join organisations</h3>
            <p><b>International organisations</b> let states pool strength: security, markets, development finance, and a voice bigger than any one capital. Nigeria has used them to amplify influence far beyond its size.</p>

            <h3>2. The United Nations</h3>
            <ul>
              <li><b>Founded:</b> 1945, after the Second World War; Nigeria joined in <b>1960</b>.</li>
              <li><b>Purposes:</b> peace and security, development, human rights, international law.</li>
              <li><b>Principal organs:</b> General Assembly (all members), Security Council (15 members, 5 permanent with veto), Secretariat, International Court of Justice, Economic and Social Council, Trusteeship Council (dormant).</li>
              <li><b>Nigeria's role:</b> peacekeeping troops worldwide; campaigning for Security Council reform and African permanent seats.</li>
            </ul>

            <h3>3. The African Union</h3>
            <p>From the OAU (1963 — decolonisation and non-interference) to the AU (2002 — integration, governance, and the right to intervene in grave crises). Organs: Assembly of heads of state, Executive Council, Commission, Pan-African Parliament, Peace and Security Council. Nigeria: founding member, major budget contributor, mediation and peace-support operations.</p>

            <h3>4. ECOWAS — Nigeria's home turf</h3>
            <ul>
              <li><b>1975 Treaty of Lagos;</b> 15 West African members; headquarters in Abuja.</li>
              <li><b>Aims:</b> economic integration — free trade, customs union, free movement of persons, common currency ambition; plus security cooperation.</li>
              <li><b>Institutions:</b> Authority of Heads of State, Council of Ministers, Commission, Community Court of Justice, ECOWAS Parliament.</li>
              <li><b>Reality check:</b> coups and sanctions cycles test the community; Nigeria remains its anchor economy.</li>
            </ul>

            <h3>5. OPEC and the Commonwealth</h3>
            <ul>
              <li><b>OPEC (joined 1971):</b> coordinates oil policy among producers — Nigeria's revenue diplomacy lives here.</li>
              <li><b>Commonwealth:</b> the family of mostly ex-British states; Nigeria used it against apartheid and for technical cooperation; suspended and re-admitted around the 1995 crisis.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Compare the OAU's non-interference with the AU's intervention right.<br>
            OAU: sovereignty first — borders and regimes shielded. AU: "non-indifference" — the Peace and Security Council may intervene in war crimes and unconstitutional changes. Same continent, evolved philosophy.</div>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying the UN General Assembly enforces decisions — enforcement power sits with the Security Council.</li>
              <li>Placing ECOWAS headquarters in Lagos — it is Abuja.</li>
              <li>Dating Nigeria's UN entry to 1963 — it is 1960.</li>
              <li>Confusing OPEC (oil producers) with OAU/AU (African union).</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> one purpose + one organ + one Nigerian contribution per organisation — nine bullets that answer any "discuss" on this topic.</div>
          `,
          cards: [
            { q: 'When did Nigeria join the UN?', a: '1960.' },
            { q: 'Which UN organ can enforce decisions?', a: 'The Security Council.' },
            { q: 'How many permanent Security Council members hold vetoes?', a: 'Five.' },
            { q: 'Where is the International Court of Justice?', a: 'The Hague (principal judicial organ of the UN).' },
            { q: 'OAU and AU founding years?', a: 'OAU 1963; AU 2002.' },
            { q: 'Key philosophical shift from OAU to AU?', a: 'From non-interference to non-indifference (right to intervene in grave crises).' },
            { q: 'ECOWAS treaty and year?', a: 'Treaty of Lagos, 1975.' },
            { q: 'Where is ECOWAS headquarters?', a: 'Abuja.' },
            { q: 'How many ECOWAS members?', a: 'Fifteen (at founding design; membership has fluctuated with withdrawals).' },
            { q: 'Name two ECOWAS integration goals.', a: 'Free trade and customs union; free movement of persons; common currency ambition.' },
            { q: 'When did Nigeria join OPEC?', a: '1971.' },
            { q: 'What does OPEC coordinate?', a: 'Oil production and price policy among member producers.' },
            { q: 'The Commonwealth is mainly composed of…', a: 'Mostly former British territories.' },
            { q: 'One Nigerian contribution to the UN.', a: 'Peacekeeping troops across several missions; advocacy for Security Council reform.' },
            { q: 'Which ECOWAS organ is supreme?', a: 'The Authority of Heads of State and Government.' }
          ],
          quiz: [
            { q: 'Nigeria joined the UN in…', options: ['1960', '1963', '1975', '1945'], correct: 0, exp: '1960, at independence, and has served twice on the Security Council.' },
            { q: 'Enforcement of UN decisions rests with…', options: ['the Security Council', 'the General Assembly', 'the Secretariat', 'ECOSOC'], correct: 0, exp: 'The Security Council. The General Assembly mainly debates and recommends.' },
            { q: 'The AU was established in…', options: ['2002', '1963', '1975', '1999'], correct: 0, exp: '2002 in Durban, replacing the OAU founded in 1963.' },
            { q: 'ECOWAS headquarters is in…', options: ['Abuja', 'Lagos', 'Accra', 'Dakar'], correct: 0, exp: 'Abuja, Nigeria, reflecting its founding and funding role.' },
            { q: 'The OAU prized which principle?', options: ['non-interference', 'intervention', 'supranational tax', 'open borders only'], correct: 0, exp: 'Non-interference. The AU moved to non-indifference for grave circumstances.' },
            { q: 'Nigeria joined OPEC in…', options: ['1971', '1960', '1986', '1995'], correct: 0, exp: '1971, as oil came to dominate its exports and budget.' },
            { q: 'Veto power in the UN belongs to…', options: ['five permanent Security Council members', 'all members', 'the Secretary-General', 'regional blocs'], correct: 0, exp: 'The five permanent members of the Security Council: any one can block a substantive resolution.' },
            { q: 'The AU may intervene in a member state for…', options: ['war crimes and unconstitutional change', 'trade disputes', 'football riots', 'currency weakness'], correct: 0, exp: 'War crimes, genocide and crimes against humanity, among other grave circumstances.' },
            { q: 'ECOWAS was created by the…', options: ['Treaty of Lagos', 'Treaty of Abuja', 'Lome Treaty', 'Accra Accord'], correct: 0, exp: 'The 1975 Treaty of Lagos, signed by 15 West African states.' },
            { q: 'The Commonwealth groups mostly…', options: ['ex-British territories', 'oil producers', 'African states only', 'island states'], correct: 0, exp: 'Former territories of the British Empire, now an association of equals.' }
          ]
        }
      ],


    },
    resources: [
      { cat: 'Past questions', title: 'Myschool — Government past questions', url: 'https://myschool.ng/classroom', note: 'Objective and theory questions from past WASSCE/UTME papers.' },
      { cat: 'Reference', title: 'Wikipedia — Separation of powers', url: 'https://en.wikipedia.org/wiki/Separation_of_powers', note: 'Montesquieu and the three arms.' },
      { cat: 'Video lesson', title: 'WAEC Government revision videos', url: 'https://www.youtube.com/results?search_query=waec+government+nigeria+revision', note: 'Arms of government and political concepts.' },
      { cat: 'Reference', title: 'Wikipedia — Nigeria politics', url: 'https://en.wikipedia.org/wiki/Politics_of_Nigeria', note: 'How the Nigerian system actually runs.' }
    ]
  
};
