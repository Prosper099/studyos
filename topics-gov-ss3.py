#!/usr/bin/env python3
"""topics-gov-ss3: add Government SS3 topics (Military Rule, Foreign Policy, International Organisations)."""
P = '/home/user/index.html'
s = open(P, encoding='utf-8').read()

SS3 = """
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
            { q: 'Nigerias first coup occurred in…', options: ['January 1966', '1967', '1975', '1983'], correct: 0 },
            { q: 'Military laws at the federal level were called…', options: ['decrees', 'acts', 'edicts', 'bills'], correct: 0 },
            { q: 'The 12-state structure was created in…', options: ['1967', '1976', '1987', '1991'], correct: 0 },
            { q: 'Military rule made Nigerian federalism more…', options: ['centralised', 'decentralised', 'confederal', 'unchanged'], correct: 0 },
            { q: 'The civil war lasted…', options: ['1967-1970', '1966-1969', '1970-1973', '1960-1963'], correct: 0 },
            { q: 'The annulled presidential election was in…', options: ['1993', '1979', '1983', '1999'], correct: 0 },
            { q: 'Who created the most states in a single exercise after 1967?', options: ['Babangida (to 21 then 30)', 'Gowon (to 12)', 'Abacha (to 36)', 'Obasanjo'], correct: 0 },
            { q: 'Feeding-bottle federalism refers to…', options: ['state dependence on central allocations', 'strong regions', 'private funding of states', 'tax competition'], correct: 0 },
            { q: 'Under military rule, separation of powers was…', options: ['suspended', 'strengthened', 'entrenched', 'judicially enforced'], correct: 0 },
            { q: 'The 1999 transition handed power to…', options: ['civilian Obasanjo', 'civilian Shagari', 'military Buhari', 'military Babangida'], correct: 0 }
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
            { q: 'Nigerias foreign policy centre-piece is…', options: ['Africa', 'Europe', 'Asia', 'the Americas'], correct: 0 },
            { q: 'ECOWAS was established in…', options: ['1975', '1960', '1963', '1999'], correct: 0 },
            { q: 'ECOMOG intervened in…', options: ['Liberia and Sierra Leone', 'Kenya and Uganda', 'Ghana and Togo', 'Sudan and Chad'], correct: 0 },
            { q: 'Non-alignment means…', options: ['no permanent bloc attachment', 'no foreign trade', 'no embassies', 'neutrality in all disputes'], correct: 0 },
            { q: 'The Bakassi dispute was with…', options: ['Cameroon', 'Benin', 'Chad', 'Niger'], correct: 0 },
            { q: 'Nigeria opposed which southern African system?', options: ['apartheid', 'federalism', 'monarchy', 'colonialism in Ghana'], correct: 0 },
            { q: 'OAU was founded in…', options: ['1963', '1975', '2002', '1960'], correct: 0 },
            { q: 'The AU replaced the OAU in…', options: ['2002', '1999', '1988', '2010'], correct: 0 },
            { q: 'A determinant of foreign policy is…', options: ['national resources', 'state of origin', 'religion of ministers', 'local government count'], correct: 0 },
            { q: 'Implementing the Bakassi ruling showed commitment to…', options: ['peaceful settlement of disputes', 'military expansion', 'isolationism', 'annexation'], correct: 0 }
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
            { q: 'Nigeria joined the UN in…', options: ['1960', '1963', '1975', '1945'], correct: 0 },
            { q: 'Enforcement of UN decisions rests with…', options: ['the Security Council', 'the General Assembly', 'the Secretariat', 'ECOSOC'], correct: 0 },
            { q: 'The AU was established in…', options: ['2002', '1963', '1975', '1999'], correct: 0 },
            { q: 'ECOWAS headquarters is in…', options: ['Abuja', 'Lagos', 'Accra', 'Dakar'], correct: 0 },
            { q: 'The OAU prized which principle?', options: ['non-interference', 'intervention', 'supranational tax', 'open borders only'], correct: 0 },
            { q: 'Nigeria joined OPEC in…', options: ['1971', '1960', '1986', '1995'], correct: 0 },
            { q: 'Veto power in the UN belongs to…', options: ['five permanent Security Council members', 'all members', 'the Secretary-General', 'regional blocs'], correct: 0 },
            { q: 'The AU may intervene in a member state for…', options: ['war crimes and unconstitutional change', 'trade disputes', 'football riots', 'currency weakness'], correct: 0 },
            { q: 'ECOWAS was created by the…', options: ['Treaty of Lagos', 'Treaty of Abuja', 'Lome Treaty', 'Accra Accord'], correct: 0 },
            { q: 'The Commonwealth groups mostly…', options: ['ex-British territories', 'oil producers', 'African states only', 'island states'], correct: 0 }
          ]
        }
      ],
"""

i = s.index("  'Government': {")
j = s.index('    resources: [', i)
k = s.rindex('      ]', i, j)
tail = s[k+7:]
if tail.startswith(','): tail = tail[1:]
s = s[:k] + '      ],\n' + SS3.strip('\n') + '\n' + tail
open(P, 'w', encoding='utf-8').write(s)
print('gov ss3 inserted')
