#!/usr/bin/env python3
"""lessons4: deepen Literary & Figurative Devices, Pre-Colonial Nigerian Societies, Units of Business Organisation."""
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

DEVICES = """
            <h3>1. Why writers use devices</h3>
            <p>A literary device is a tool that makes language do more than inform — it paints, persuades and stings. Exams ask you to (a) <b>name</b> the device, (b) <b>quote</b> it, and (c) state its <b>effect</b>. This lesson gives you the full toolbox for prose and poetry.</p>

            <h3>2. Figures of speech (meaning devices)</h3>
            <ul>
              <li><b>Simile:</b> comparison using like/as — "her smile was like morning light on the lagoon".</li>
              <li><b>Metaphor:</b> direct identification — "the classroom was a zoo".</li>
              <li><b>Personification:</b> human traits on non-humans — "the wind screamed through the market".</li>
              <li><b>Hyperbole:</b> deliberate exaggeration — "I have told you a thousand times".</li>
              <li><b>Euphemism:</b> a soft phrase for a hard fact — "he passed on" for died.</li>
              <li><b>Irony:</b> saying the opposite of what is meant, or events turning opposite to expectation.</li>
              <li><b>Paradox:</b> a statement that seems self-contradictory yet true — "the child is father of the man".</li>
              <li><b>Oxymoron:</b> two contradictory words joined — "bitter sweet", "deafening silence".</li>
              <li><b>Metonymy:</b> naming a thing by something associated — "the crown" for the king.</li>
              <li><b>Synecdoche:</b> part for whole — "twenty hands" for twenty workers.</li>
              <li><b>Apostrophe:</b> addressing the absent or abstract — "O death, where is thy sting?"</li>
              <li><b>Litotes (understatement):</b> affirming by denying the opposite — "not a small achievement" for a great one.</li>
            </ul>

            <h3>3. Sound devices</h3>
            <ul>
              <li><b>Alliteration:</b> repeated initial consonants — "sweet swallows swept the sky".</li>
              <li><b>Assonance:</b> repeated vowel sounds — "the rain in Spain stays mainly".</li>
              <li><b>Consonance:</b> repeated consonants anywhere — "a stroke of luck".</li>
              <li><b>Onomatopoeia:</b> words that imitate sounds — buzz, crack, gurgle, "kpim-kpam" of the drum.</li>
              <li><b>Rhyme:</b> end rhyme (line endings) vs internal rhyme (within a line).</li>
              <li><b>Rhythm/metre:</b> the patterned beat of stressed and unstressed syllables.</li>
              <li><b>Refrain:</b> a line repeated at intervals — common in songs and ballads.</li>
            </ul>

            <h3>4. Imagery and thought devices</h3>
            <ul>
              <li><b>Imagery:</b> language that wakes the senses — visual, auditory, tactile, olfactory, gustatory, kinaesthetic.</li>
              <li><b>Symbolism:</b> an object carrying extra meaning — a harmattan haze symbolising confusion or doom.</li>
              <li><b>Allegory:</b> a whole story standing for another idea (Animal Farm = the betrayed revolution).</li>
              <li><b>Satire:</b> mocking vice to correct it; <b>sarcasm</b> is its sharp, personal edge.</li>
              <li><b>Allusion:</b> a brief reference to a known person, place or story.</li>
            </ul>

            <h3>5. Worked analysis (exam style)</h3>
            <div class="worked"><b>Line:</b> "The drums talked all night in the village square."<br>
            Device: <b>personification</b> (drums given speech) plus <b>auditory imagery</b>. Effect: the festival feels alive and the poet's joy is heard, not described.</div>
            <div class="worked"><b>Line:</b> "He is a tiger on the pitch, yet a lamb in the classroom."<br>
            Two <b>metaphors</b> in contrast. Effect: one compact image shows the double character — aggression in sport, gentleness at school.</div>
            <div class="tip"><b>Exam tip:</b> effect answers must touch the <b>reader</b> or the <b>emphasis</b>: "makes the reader feel…", "stresses…", "condemns…". A device named with no effect earns half marks.</div>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling every comparison a simile — without like/as it is a metaphor.</li>
              <li>Confusing paradox with oxymoron: paradox is a <b>sentence</b>-level contradiction; oxymoron is a <b>two-word</b> one.</li>
              <li>Confusing metonymy (association) with synecdoche (part-whole).</li>
              <li>Calling rhyme "rhythm".</li>
              <li>Labelling any exaggeration hyperbole when the context is irony.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> drill the pairs that confuse: simile/metaphor, paradox/oxymoron, metonymy/synecdoche, irony/paradox. Ten minutes of pairs beats one hour of definitions.</div>
"""

PRECOLONIAL = """
            <h3>1. Two families of societies</h3>
            <p>Before 1900, the area called Nigeria held many political systems. Historians group them into <b>centralised (state) societies</b> with kings and courts — Yoruba kingdoms, Benin, Kanem-Borno, the Hausa states and later the Sokoto Caliphate — and <b>decentralised (stateless) societies</b> like the Igbo, Tiv and Ijaw, where villages governed themselves without a king.</p>

            <h3>2. The Igbo: village democracy</h3>
            <p>Most Igbo communities were <b>acephalous</b> ("headless") — no king ruled the village. Authority was shared:</p>
            <ul>
              <li><b>Council of elders:</b> the oldest men arbitrated disputes; age meant wisdom.</li>
              <li><b>Age grades:</b> groups born within the same years — they kept order, did communal work and enforced decisions.</li>
              <li><b>Title societies (Ozo):</b> wealthy, respected men who advised and judged.</li>
              <li><b>Oracles:</b> the Arochukwu oracle (Ibini Ukpabi) settled cases beyond village reach and backed Aro trade and influence.</li>
              <li><b>Women's power:</b> the <b>umuada</b> (daughters of the lineage) and market women checked male authority — the 1929 Women's War grew from these networks.</li>
            </ul>
            <p>Because power was diffuse, colonial officers later invented "warrant chiefs" — a misunderstanding of Igbo government that caused lasting tension.</p>

            <h3>3. The Yoruba: kings with chains of checks</h3>
            <p>Old Oyo was a constitutional monarchy — the <b>Alafin</b> was mighty but not absolute:</p>
            <ul>
              <li><b>Oyomesi:</b> seven kingmakers led by the <b>Bashorun</b>; they could reject a tyrant by sending him an empty calabash (or parrot's eggs) — the signal to die.</li>
              <li><b>Ogboni cult:</b> a powerful earth society that judged capital cases and checked both king and council.</li>
              <li><b>Army commanders (Are Ona Kakanfo):</b> liable for defeat — another restraint.</li>
              <li><b>Ife:</b> the spiritual source of kingship; new Alafins and many Yoruba kings received their crown's legitimacy from Ife.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "No king ruled absolutely in pre-colonial Yorubaland." Discuss.<br>
            Cite the Oyomesi's rejection power, Ogboni's judicial role and ritual checks — power was balanced long before modern constitutions.</div>

            <h3>4. The Hausa-Fulani: emirs under the Caliphate</h3>
            <p>The <b>Hausa states</b> (Kano, Katsina, Zazzau…) ran a <b>sarauta</b> system — office held by titled elites with councils. In 1804 <b>Usman dan Fodio's jihad</b> replaced them with the <b>Sokoto Caliphate</b>: emirs ruled provinces but owed allegiance to the <b>Caliph at Sokoto</b>.</p>
            <ul>
              <li><b>Checks:</b> Islamic law (Sharia) bound the emir; the Caliph could depose unjust emirs; qadis (judges) ran courts.</li>
              <li><b>Taxation:</b> regular taxes (e.g. jizya/kharaj forms, cattle tax) fed administration — the most bureaucratised system in the region.</li>
              <li><b>Why it mattered:</b> the British kept this machinery as "indirect rule" — which is why indirect rule worked in the North and failed in the East.</li>
            </ul>

            <h3>5. Benin and Kanem-Borno in brief</h3>
            <ul>
              <li><b>Benin:</b> the <b>Oba</b> ruled with palace chiefs (Iyase, town chiefs); guilds of brass-casters and carvers served the court; the walls of Benin city marked one of Africa's great urban states.</li>
              <li><b>Kanem-Borno:</b> the <b>Mai</b> ruled with a council (the <b>kenchesu</b>); Saharan trade in salt, horses and kola built its wealth; court chronicles preserve its king-lists.</li>
            </ul>

            <h3>6. What they shared</h3>
            <ul>
              <li>Power was <b>checked</b> everywhere — councils, cults, law or oracles; absolutism is a colonial myth.</li>
              <li>Religion and politics fused: oaths, oracles and Sharia gave authority moral force.</li>
              <li><b>Communalism:</b> land was held in trust for ancestors and the unborn; work was mutual (communal farming).</li>
            </ul>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling Igbo society "chaotic" — it was ordered without a king (acephalous, not anarchic).</li>
              <li>Saying the Alafin was absolute — the empty calabash says otherwise.</li>
              <li>Dating the Caliphate before the jihad (it begins 1804, not with the Hausa states).</li>
              <li>Confusing Ife's spiritual seniority with political control over Oyo.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> one-word hooks per society: Igbo = <b>diffused</b>, Yoruba = <b>checked kingship</b>, Hausa-Fulani = <b>Sharia bureaucracy</b>, Benin = <b>guilds & walls</b>, Borno = <b>Saharan trade</b>. Build every essay from its hook.</div>
"""

BUSINESS = """
            <h3>1. The ladder of business units</h3>
            <p>A "unit of business organisation" is simply the legal form a business takes. The ladder climbs from the <b>sole trader</b> through <b>partnership</b> and <b>cooperative</b> to the <b>joint-stock company</b> and <b>public enterprise</b>. Each rung trades simplicity for capital and risk-sharing.</p>

            <h3>2. The sole trader (one-man business)</h3>
            <ul>
              <li><b>Features:</b> one owner, no legal separation between owner and business, <b>unlimited liability</b>, few formalities.</li>
              <li><b>Merits:</b> quick decisions, all profit to the owner, personal customer touch, easy to start.</li>
              <li><b>Demerits:</b> unlimited liability (personal house and car can pay business debts), limited capital, no continuity if the owner dies, the owner carries every skill gap.</li>
              <li><b>Capital:</b> personal savings, friends and family, microfinance, trade credit.</li>
            </ul>

            <h3>3. Partnership (2–20 owners)</h3>
            <ul>
              <li><b>Partnership deed:</b> the written agreement — profit ratios, salaries, interest on capital, duties.</li>
              <li><b>Types of partner:</b> <b>active/general</b> (invest and run, unlimited liability), <b>limited</b> (capital only, liability capped — must not manage), <b>dormant/sleeping</b> (invests, stays unseen).</li>
              <li><b>Merits:</b> more capital and skills than one man; work shared.</li>
              <li><b>Demerits:</b> general partners still face unlimited liability; quarrels; the acts of one partner bind all; ends on a partner's death unless agreed otherwise.</li>
            </ul>

            <h3>4. Cooperative societies</h3>
            <ul>
              <li><b>Idea:</b> members pool resources for mutual benefit — one member, one vote, regardless of shares.</li>
              <li><b>Types:</b> consumers' (bulk buying), producers' (joint tools/processing), credit/thrift (savings and loans), multipurpose.</li>
              <li><b>Merits:</b> cheap credit, democratic control, service motive over profit motive.</li>
            </ul>

            <h3>5. Joint-stock companies</h3>
            <ul>
              <li><b>Legal personality:</b> the company is a person in law — it sues, owns property and contracts in its own name.</li>
              <li><b>Limited liability:</b> shareholders lose only what they invested.</li>
              <li><b>Perpetual succession:</b> death of shareholders does not kill the company.</li>
              <li><b>Common seal:</b> its official signature.</li>
              <li><b>Private (Ltd):</b> 2–50 members, cannot invite the public to buy shares, transfers restricted.</li>
              <li><b>Public (Plc):</b> minimum members from 2 upward with no maximum, may offer shares to the public on the stock exchange, greater disclosure rules.</li>
              <li><b>Constitution:</b> <b>Memorandum of Association</b> (what the company may do — its outer charter) and <b>Articles of Association</b> (internal rules).</li>
              <li><b>Capital:</b> <b>shares</b> (ownership units; ordinary shares carry voting and variable dividends) vs <b>debentures</b> (loan certificates paying fixed interest; holders are creditors, not owners).</li>
            </ul>
            <div class="worked"><b>Worked example (JAMB style):</b> Which document defines a company's relationship with outsiders and limits its powers? The <b>Memorandum of Association</b> — articles govern internal management.</div>

            <h3>6. Public enterprises</h3>
            <p>Government owns and runs businesses (e.g. water corporations, NNPC) where services are vital, natural monopolies exist, or huge capital is needed. Drawbacks: bureaucracy, politics in appointments, and weaker profit discipline — the mirror image of why private firms usually run shops better.</p>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying a sole trader has limited liability — it is the opposite.</li>
              <li>Calling debenture holders owners — they are <b>creditors</b>.</li>
              <li>Saying a private company can advertise shares to the public.</li>
              <li>Thinking cooperatives vote by shares — it is one member, one vote.</li>
              <li>Confusing dissolution of partnership with winding-up of a company.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> for any "which form" question, weigh three numbers: capital needed, risk tolerated, control desired. Small + risky-enough + full control = sole trader; big capital + low personal risk = Plc.</div>
"""

deepen('Literary & Figurative Devices', 3008, DEVICES)
deepen('Pre-Colonial Nigerian Societies: Igbo, Yoruba & Hausa-Fulani Administration', 3022, PRECOLONIAL)
deepen('Units of Business Organisation', 3143, BUSINESS)

open(P, 'w', encoding='utf-8').write(s)
print('lessons4 applied OK')
