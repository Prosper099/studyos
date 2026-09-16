#!/usr/bin/env python3
"""topics-gov-ss2: add Government SS2 topics (Constitutions, Electoral Systems, Ideologies)."""
P = '/home/user/index.html'
s = open(P, encoding='utf-8').read()

SS2 = """
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
            { q: 'A constitution scattered across statutes, cases and conventions is…', options: ['written', 'unwritten', 'rigid', 'federal'], correct: 1 },
            { q: 'The 1999 Nigerian constitution is best described as…', options: ['written, rigid and federal', 'unwritten and flexible', 'written and unitary', 'unwritten and federal'], correct: 0 },
            { q: 'Diceys first pillar of the rule of law is…', options: ['supremacy of the law', 'supremacy of parliament', 'supremacy of the executive', 'supremacy of custom'], correct: 0 },
            { q: 'A rigid constitution is one that…', options: ['cannot be amended', 'is amended by a special procedure', 'is always written', 'has no bill of rights'], correct: 1 },
            { q: 'Constitutionalism means…', options: ['having any constitution', 'governing within constitutional limits', 'ruling by decree', 'amending the constitution often'], correct: 1 },
            { q: 'In Nigeria, a law inconsistent with the constitution is…', options: ['void to the extent of inconsistency', 'valid until repealed', 'binding on states only', 'subject to a referendum'], correct: 0 },
            { q: 'Equality before the law implies…', options: ['the rich pay more tax', 'officials and citizens face the same courts', 'everyone earns the same', 'only citizens can sue'], correct: 1 },
            { q: 'Which country has an uncodified constitution?', options: ['Nigeria', 'United States', 'Britain', 'Germany'], correct: 2 },
            { q: 'A unitary constitution concentrates power…', options: ['at the centre', 'in the states', 'in local councils', 'in the judiciary'], correct: 0 },
            { q: 'Which is NOT a safeguard of constitutionalism?', options: ['independent judiciary', 'free press', 'rule by decree', 'regular elections'], correct: 2 }
          ]
        },
        {
          title: 'Electoral Systems, Franchise & INEC',
          tags: ['Elections', 'Franchise', 'INEC'],
          summary: 'How votes become seats: electoral systems, the fight for the franchise, and the body that runs Nigeria\\'s polls.',
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
            { q: 'The right to vote is called the…', options: ['franchise', 'mandate', 'referendum', 'recall'], correct: 0 },
            { q: 'First-past-the-post awards the seat to…', options: ['the candidate with the most votes', 'any candidate above 50%', 'the party list', 'the youngest candidate'], correct: 0 },
            { q: 'Seats shared by vote share describe…', options: ['proportional representation', 'first-past-the-post', 'second ballot', 'indirect election'], correct: 0 },
            { q: 'A Nigerian president-elect must secure 25% of votes in…', options: ['two-thirds of the states', 'half of the states', 'all states', 'the FCT only'], correct: 0 },
            { q: 'Universal adult suffrage means…', options: ['only taxpayers vote', 'all qualified adults vote', 'only the educated vote', 'only men vote'], correct: 1 },
            { q: 'INEC does NOT…', options: ['register political parties', 'conduct elections', 'adjudicate election petitions', 'educate voters'], correct: 2 },
            { q: 'State local government elections are run by…', options: ['INEC', 'SIECs', 'the Senate', 'the police'], correct: 1 },
            { q: 'A runoff between top two candidates is a…', options: ['second ballot', 'by-election', 'recall', 'plebiscite'], correct: 0 },
            { q: 'Which is an electoral malpractice?', options: ['voter education', 'ballot snatching', 'party primaries', 'result collation'], correct: 1 },
            { q: 'Election legitimacy depends most on…', options: ['turnout alone', 'credibility of the process', 'the margin of victory', 'international observers only'], correct: 1 }
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
            { q: 'Individual liberty and limited government define…', options: ['liberalism', 'fascism', 'socialism', 'absolutism'], correct: 0 },
            { q: 'Public ownership of the means of production defines…', options: ['capitalism', 'socialism', 'liberalism', 'feudalism'], correct: 1 },
            { q: 'Tradition and gradual change mark…', options: ['conservatism', 'fascism', 'anarchism', 'radicalism'], correct: 0 },
            { q: 'Ultranationalist one-party totalitarianism is…', options: ['fascism', 'liberalism', 'welfarism', 'conservatism'], correct: 0 },
            { q: 'A mixed economy with a social floor describes the…', options: ['welfare state', 'pure capitalism', 'feudal system', 'command economy only'], correct: 0 },
            { q: 'Profit motive and competition drive…', options: ['capitalism', 'socialism', 'communalism', 'mercantilism'], correct: 0 },
            { q: 'Modern liberals accept state action to…', options: ['enable real freedom (health, education)', 'abolish elections', 'nationalise everything', 'ban opposition'], correct: 0 },
            { q: 'Which pairing is WRONG?', options: ['liberalism — liberty', 'socialism — equality', 'fascism — pluralism', 'conservatism — tradition'], correct: 2 },
            { q: 'Nigerias 1970s indigenisation reflected which tilt?', options: ['state-control/socialist tilt', 'pure laissez-faire', 'fascist corporatism', 'anarchism'], correct: 0 },
            { q: 'A key liberal institution is…', options: ['constitutional limits on power', 'one-party rule', 'state religion', 'press censorship'], correct: 0 }
          ]
        }
      ],
"""

i = s.index("  'Government': {")
j = s.index('    resources: [', i)
k = s.rindex('      ]', i, j)
assert s[k:k+7] == '      ]'
tail = s[k+7:]
if tail.startswith(','): tail = tail[1:]
s = s[:k] + '      ],\n' + SS2.strip('\n') + '\n' + tail
open(P, 'w', encoding='utf-8').write(s)
print('gov ss2 inserted')
