#!/usr/bin/env python3
"""Insert History SS2 + SS3 (3 topics each) into index.html CURRICULUM. RUN ONCE."""
import sys

P = 'index.html'
s = open(P, encoding='utf-8').read()

assert "title: 'The Trans-Saharan & Atlantic Slave Trades'" not in s, 'already applied — do not re-run'

T1 = """      SS2: [
        {
          title: 'The Trans-Saharan & Atlantic Slave Trades',
          tags: ['Slave trade', 'Abolition', 'Middle Passage'],
          summary: 'How both slave trades worked, who profited, what they cost Africa, and why Britain finally abolished the traffic.',
          content: `
            <h3>1. Two trades, one tragedy</h3>
            <p>Before and alongside the Atlantic trade ran the <b>Trans-Saharan trade</b>: caravans carried gold, salt — and enslaved people — across the desert to North Africa and the Middle East, a traffic older than 1000 years. From the 15th century the <b>Atlantic (triangular) trade</b> shipped millions of Africans to the Americas to work sugar, tobacco and cotton plantations.</p>
            <p><b>The triangular pattern:</b> European manufactured goods (guns, cloth, brass) to West Africa; enslaved Africans across the Atlantic (the <b>Middle Passage</b>); American raw materials (sugar, cotton, tobacco) back to Europe.</p>

            <h3>2. Why the trade grew</h3>
            <ul>
              <li>European demand for cheap plantation labour in the Americas.</li>
              <li>Firearms created a vicious cycle: states raided neighbours for captives to buy more guns.</li>
              <li>Existing African institutions of domestic slavery were distorted into a commercial export.</li>
              <li>Some African middlemen and rulers (coastal merchants, some kings) profited and facilitated capture.</li>
            </ul>

            <h3>3. Effects on Africa</h3>
            <ul>
              <li><b>Depopulation</b> of the most able-bodied; villages abandoned.</li>
              <li>Chronic warfare and insecurity; states that resisted raids (or profited) rose and fell by the gun.</li>
              <li>Stunted economic development — human labour exported instead of goods produced.</li>
              <li>Seeds of racial prejudice used later to justify colonial conquest.</li>
            </ul>

            <h3>4. Abolition</h3>
            <p>Britain abolished the <b>slave trade</b> in 1807 and <b>slavery</b> in its empire in 1833; other powers followed over decades. Drivers of abolition:</p>
            <ul>
              <li><b>Humanitarian:</b> Quakers and evangelicals (Wilberforce, Clarkson); the horrors of the Middle Passage publicised.</li>
              <li><b>Economic:</b> Adam Smith argued free labour was cheaper; the sugar economy declined.</li>
              <li><b>Slave resistance:</b> revolts like Haiti (1791) made the system risky and expensive.</li>
              <li>Britain then patrolled the Atlantic (West Africa Squadron) and pushed treaties on Nigerian states — with Lagos bombarded in 1851 partly over the trade.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> An exam asks "explain two economic effects of the Atlantic slave trade on West Africa". Strong answer: (1) depopulation of productive youths cut farm and craft output; (2) the gun-slave cycle diverted trade from legitimate goods (later palm oil) and entrenched warfare. Name a region (e.g., the Niger Delta city-states grew rich on the trade and later resisted its end).</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Confusing abolition of the TRADE (1807) with abolition of SLAVERY (1833) in the British Empire.</li>
              <li>Presenting Africans only as victims or only as collaborators — the truth was mixed and coercive.</li>
              <li>Calling the Trans-Saharan trade identical to the Atlantic one — routes, buyers and periods differ.</li>
              <li>Attributing abolition to humanitarian motives alone; economics and resistance mattered.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> for "reasons for abolition" questions, organise as humanitarian, economic, and resistance — one named example in each bucket (Wilberforce; Adam Smith; Haiti 1791) beats a rambling list.</div>
          `,
          cards: [
            { q: 'What was the triangular trade?', a: 'European goods to Africa, enslaved Africans to the Americas, American raw materials back to Europe.' },
            { q: 'What was the Middle Passage?', a: 'The horrific Atlantic crossing in which millions of enslaved Africans were shipped to the Americas.' },
            { q: 'Which goods did Europeans bring to West Africa?', a: 'Manufactured items: firearms, cloth, brass, iron and alcohol, exchanged for captives.' },
            { q: 'Why did plantation owners want African labour?', a: 'Sugar, tobacco and cotton plantations in the Americas needed vast cheap labour after indigenous populations collapsed.' },
            { q: 'Explain the gun-slave cycle.', a: 'States raided neighbours for captives to sell for firearms, and needed more guns to raid further — a vicious circle.' },
            { q: 'Three effects of the slave trade on Africa?', a: 'Depopulation of the able-bodied, chronic warfare and insecurity, and stunted economic development.' },
            { q: 'When did Britain abolish the slave trade?', a: 'In 1807; slavery itself was abolished across the British Empire in 1833.' },
            { q: 'Name two humanitarian abolitionists.', a: 'William Wilberforce in Parliament and Thomas Clarkson the organiser, backed by Quakers and evangelicals.' },
            { q: 'Adam Smith role in abolition?', a: 'He argued that free labour was more productive and cheaper than slave labour, feeding the economic case.' },
            { q: 'Which slave revolt frightened the Americas?', a: 'The Haitian Revolution of 1791, which ended slavery there and showed planters the system was unsafe.' },
            { q: 'What was the West Africa Squadron?', a: 'A British naval patrol created after 1807 to intercept slave ships crossing the Atlantic.' },
            { q: 'Why was Lagos bombarded in 1851?', a: 'Britain attacked partly to suppress the slave trade there and install a friendly ruler, prelude to annexation.' },
            { q: 'How did the Trans-Saharan trade differ?', a: 'It crossed the desert to North Africa and the Middle East, was far older, and carried gold, salt and captives.' },
            { q: 'Did any African states resist the trade?', a: 'Yes — some refused raids or were devastated by them; coastal city-states that profited also later resisted abolition.' },
            { q: 'What replaced the slave trade economically?', a: 'Legitimate commerce: palm oil and palm kernel exports that fed European soap and margarine factories.' },
          ],
          quiz: [
            { q: 'The triangular trade linked…', options: ['Africa, Asia and America', 'Europe, Africa and the Americas', 'Europe, Asia and Africa', 'Sahara, Nile and Cape'], correct: 1, exp: 'Manufactured goods to Africa, captives to the Americas, raw materials back to Europe.' },
            { q: 'The Atlantic crossing of enslaved people is called…', options: ['the Long March', 'the Middle Passage', 'the Triangular Route', 'the Caravan Road'], correct: 1, exp: 'The Middle Passage was the central leg carrying enslaved Africans across the Atlantic.' },
            { q: 'Britain abolished the slave trade in…', options: ['1707', '1807', '1833', '1861'], correct: 1, exp: 'The trade ended in 1807; slavery in the British Empire followed in 1833 — do not mix the dates.' },
            { q: 'Slavery in the British Empire ended in…', options: ['1807', '1815', '1833', '1851'], correct: 2, exp: 'The Slavery Abolition Act of 1833 freed slaves across British territories.' },
            { q: 'Which is an ECONOMIC reason for abolition?', options: ['Wilberforce\\'s speeches', 'Adam Smith\\'s free-labour argument', 'Quaker petitions', 'the Zong massacre'], correct: 1, exp: 'Smith argued free labour beat slave labour on cost — the economic wing of the campaign.' },
            { q: 'The 1791 slave revolution occurred in…', options: ['Cuba', 'Brazil', 'Haiti', 'Jamaica'], correct: 2, exp: 'Haiti\\'s revolution ended slavery there and made slave societies across the Americas nervous.' },
            { q: 'The gun-slave cycle means…', options: ['guns banned slavery', 'captives bought guns used to capture more', 'guns ended wars', 'slaves owned guns'], correct: 1, exp: 'Firearms bought with captives enabled further raids — the cycle fed itself.' },
            { q: 'Britain bombarded Lagos in…', options: ['1807', '1833', '1851', '1861'], correct: 2, exp: 'In 1851, over the slave trade and succession disputes; annexation followed in 1861.' },
            { q: 'The West Africa Squadron was created to…', options: ['conquer Nigeria', 'suppress the Atlantic slave trade', 'collect taxes', 'map the Niger'], correct: 1, exp: 'A naval patrol intercepting slave ships after the 1807 abolition of the trade.' },
            { q: 'Legitimate commerce after abolition centred on…', options: ['gold dust', 'palm oil', 'ivory only', 'cowries'], correct: 1, exp: 'Palm oil for European industry became the main lawful export that replaced captives.' },
          ]
        },
        {
          title: 'Legitimate Commerce & European Penetration',
          tags: ['Palm oil trade', 'Explorers', 'Missionaries', 'Lagos 1861'],
          summary: 'From palm oil to protectorates: how trade, missions, exploration and the Royal Niger Company pulled Britain into the conquest of Nigeria.',
          content: `
            <h3>1. Legitimate commerce</h3>
            <p>After 1807 the Bights of Benin and Biafra shifted to <b>palm oil and palm kernel</b> exports — the raw material of Europe's soap, candles and margarine industries. Delta city-states like Bonny and Opobo grew rich; middlemen controlled the river trade and blocked European access inland.</p>

            <h3>2. Explorers and missionaries</h3>
            <ul>
              <li><b>Explorers:</b> Mungo Park (died 1806 mapping the Niger), the Lander brothers proved the Niger emptied into the Atlantic (1830), Hugh Clapperton, and Baikie's quinine-protected voyage (1854) made the interior survivable for Europeans.</li>
              <li><b>Missionaries:</b> CMS and others followed trade — schools, churches, and a class of Western-educated Africans; Samuel Ajayi Crowther, a recaptive, became the first African Anglican bishop (1864).</li>
              <li><b>Quinine</b> (against malaria) turned the "White Man's Grave" into a place Europeans could settle — quiet but decisive.</li>
            </ul>

            <h3>3. The footholds: Lagos and the charter company</h3>
            <ul>
              <li><b>1861:</b> Britain annexed Lagos — anti-slave-trade pressure, succession dispute, and a base for commerce. Lagos Colony became the beachhead.</li>
              <li><b>1886:</b> the <b>Royal Niger Company</b> (George Goldie) received a royal charter to administer the Niger territories — trade under a company flag, ruling by treaty and gunboat.</li>
              <li><b>1884–85 Berlin Conference:</b> European powers set the rules of "effective occupation" that turned chartered trade into formal claims.</li>
            </ul>

            <h3>4. Conquest and resistance</h3>
            <ul>
              <li><b>North:</b> the Sokoto Caliphate fell to Lugard's campaigns 1900–1903 (Kano, Sokoto).</li>
              <li><b>South-east:</b> the Anglo-Aro War (1901–02) broke the Aro trade network; Delta city-states resisted earlier.</li>
              <li><b>South-west:</b> Ibadan-Ilọrin and Ekitiparapo wars exhausted Yoruba states; Benin was sacked in 1897 after the consul's ambush.</li>
            </ul>
            <p>By 1903 virtually the whole territory was under British control — a patchwork of colony (Lagos), protectorates (Southern and Northern) and chartered lands.</p>
            <div class="worked"><b>Worked example:</b> "Why did Britain move from trade to territory?" Build the chain: oil trade profits → middlemen blocked inland access → explorers + quinine made the interior feasible → Berlin rules demanded effective occupation → the Royal Niger Company conquered cheaply → protectorates formalised. Each arrow earns a mark.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Treating 1861 (annexation of Lagos) and 1914 (amalgamation) as the same event.</li>
              <li>Forgetting quinine — without it European settlement inland stayed impossible.</li>
              <li>Describing resistance as absent — Aro, Sokoto, Benin and others fought back.</li>
              <li>Calling the Royal Niger Company a government agency — it was a private chartered company.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> "factors of European penetration" answers win when grouped: economic (oil trade), intellectual (explorers), religious (missions), medical (quinine), political (Berlin). Five labelled factors, each with a name.</div>
          `,
          cards: [
            { q: 'What was legitimate commerce?', a: 'The lawful trade that replaced slaves after 1807, centred on palm oil and palm kernel exports.' },
            { q: 'Why did Europe want palm oil?', a: 'It fed the soap, candle and margarine industries of industrialising Britain and Europe.' },
            { q: 'Who proved the Niger flows to the Atlantic?', a: 'The Lander brothers in 1830, ending decades of speculation about where the great river emptied.' },
            { q: 'Mungo Park is remembered for…', a: 'His Niger voyages of 1795-96 and 1805-06; he died on the second expedition near Bussa.' },
            { q: 'Why was quinine decisive?', a: 'It protected Europeans against malaria, turning the deadly interior into a place they could travel and settle.' },
            { q: 'Who was Samuel Ajayi Crowther?', a: 'A recaptive Yoruba who became the first African Anglican bishop in 1864 and translated the Bible into Yoruba.' },
            { q: 'When and why was Lagos annexed?', a: 'In 1861, driven by anti-slave-trade pressure, a succession dispute, and the need for a commercial base.' },
            { q: 'What was the Royal Niger Company?', a: 'A private company chartered in 1886 under George Goldie to trade and administer the Niger territories.' },
            { q: 'What did the Berlin Conference decide?', a: 'Rules for partition, including effective occupation, that turned chartered trade into formal colonies.' },
            { q: 'When did the Sokoto Caliphate fall?', a: 'Between 1900 and 1903, after Lugard\\'s campaigns captured Kano and Sokoto.' },
            { q: 'What was the Anglo-Aro War?', a: 'The 1901-02 British campaign that broke Arochukwu\\'s trade and oracle network in the south-east.' },
            { q: 'Why was Benin sacked in 1897?', a: 'After a British delegation was ambushed, a punitive expedition burned the city and looted the bronzes.' },
            { q: 'Who led the Ekitiparapo War?', a: 'Ekiti and Ibadan-era Yoruba states against Ibadan dominance; the war exhausted the region before colonial rule.' },
            { q: 'Three arms of European penetration?', a: 'Trade, missions and administration — merchants opened routes, missions taught, officials annexed.' },
            { q: 'By what year was Nigeria under British control?', a: 'By 1903, after the northern campaigns, as colony, protectorates and chartered territories.' },
          ],
          quiz: [
            { q: 'Legitimate commerce mainly meant exporting…', options: ['slaves', 'palm oil', 'gold bars', 'cowries'], correct: 1, exp: 'Palm oil and kernel replaced captives as the main export after 1807.' },
            { q: 'The Lander brothers (1830) proved…', options: ['the Niger ends in the Sahara', 'the Niger empties into the Atlantic', 'Niger links to the Nile', 'Benue is longer'], correct: 1, exp: 'Their voyage settled the long debate: the Niger flows south into the Atlantic delta.' },
            { q: 'Quinine mattered because it…', options: ['cured smallpox', 'protected against malaria', 'boosted farm output', 'treated sleeping sickness'], correct: 1, exp: 'Malaria protection made inland travel and settlement feasible for Europeans.' },
            { q: 'Britain annexed Lagos in…', options: ['1851', '1861', '1886', '1914'], correct: 1, exp: '1851 was the bombardment; 1861 was formal annexation of the colony.' },
            { q: 'The Royal Niger Company was chartered in…', options: ['1861', '1875', '1886', '1900'], correct: 2, exp: 'Goldie\\'s company received its royal charter in 1886 to trade and administer the Niger lands.' },
            { q: 'The Berlin Conference of 1884-85 introduced…', options: ['free education', 'effective occupation rules', 'the gold standard', 'the UN charter'], correct: 1, exp: 'Claims required real control on the ground, accelerating the scramble.' },
            { q: 'Sokoto fell to British forces by…', options: ['1897', '1900', '1903', '1914'], correct: 2, exp: 'Kano and Sokoto fell in 1903, completing the conquest of the caliphate.' },
            { q: 'The Benin bronzes were looted in…', options: ['1851', '1861', '1897', '1902'], correct: 2, exp: 'The 1897 punitive expedition sacked Benin City and carried off the famous bronzes.' },
            { q: 'The Anglo-Aro War took place in…', options: ['1897-98', '1901-02', '1905-06', '1910-11'], correct: 1, exp: 'The 1901-02 campaign destroyed the Aro network that had dominated south-east trade.' },
            { q: 'First African Anglican bishop (1864) was…', options: ['Henry Townsend', 'Samuel Ajayi Crowther', 'James Johnson', 'Edward Blyden'], correct: 1, exp: 'Crowther, a recaptive, became bishop of the Niger territories in 1864.' },
          ]
        },
        {
          title: 'Colonial Nigeria: Amalgamation & Indirect Rule',
          tags: ['Amalgamation 1914', 'Indirect rule', 'Colonial economy'],
          summary: 'Lugard\\'s 1914 amalgamation, how indirect rule worked in North and South, the colonial economy, and what the era left behind.',
          content: `
            <h3>1. Amalgamation, 1914</h3>
            <p>On <b>1 January 1914</b> Governor-General <b>Frederick Lugard</b> merged the Northern and Southern Protectorates (with Lagos Colony) into one Nigeria. Motives:</p>
            <ul>
              <li><b>Economic:</b> the poorer, landlocked North ran a deficit; the richer South's customs surplus could cover it.</li>
              <li><b>Administrative:</b> one railway, one currency, one civil service instead of three administrations.</li>
              <li><b>Strategic:</b> simpler imperial control and border defence.</li>
            </ul>
            <p>Lady Flora Shaw (Lugard's wife) is credited with coining the name <b>"Nigeria"</b>.</p>

            <h3>2. Indirect rule</h3>
            <p><b>Indirect rule</b> governed through existing traditional institutions — emirs, obas, warrant chiefs — under British Residents. Rationale: cheap administration, few British officers, and using structures people already obeyed (perfected in Sokoto).</p>
            <ul>
              <li><b>North:</b> worked relatively well — centralised emirates with tax systems and courts fit the model.</li>
              <li><b>South-west:</b> mixed — obas existed but constitutional checks (e.g., Oyo's Oyomesi) clashed with British orders.</li>
              <li><b>South-east:</b> failed — acephalous (leaderless) Igbo societies had no chiefs to rule through; invented <b>warrant chiefs</b> provoked resentment (Aba Women's War, 1929).</li>
            </ul>

            <h3>3. The colonial economy</h3>
            <ul>
              <li><b>Cash crops</b> for export: groundnut and cotton (North), cocoa (West), palm produce (East).</li>
              <li><b>Mining:</b> tin on the Jos Plateau from 1904.</li>
              <li><b>Railways</b> (Lagos–Kano) built north-south to carry exports to ports, not to unite the country.</li>
              <li><b>Taxation:</b> direct tax raised revenue and pushed men into wage labour.</li>
              <li>Marketing boards (from 1940s) bought export crops cheaply — surplus funding colonial development.</li>
            </ul>

            <h3>4. Impact and legacy</h3>
            <p>Colonial rule drew Nigeria's borders, created a common currency and civil service, spread Western education and Christianity (unevenly), and built export infrastructure. It also entrenched regionalism, neglected balanced development, and left the North-South education gap that shaped post-independence politics.</p>
            <div class="worked"><b>Worked example:</b> "Why did indirect rule fail in Eastern Nigeria?" Answer in three moves: (1) Igbo societies were acephalous — village assemblies, no single chief; (2) Britain imposed warrant chiefs with no traditional legitimacy; (3) their corruption and taxation triggered the Aba Women's War of 1929. Contrast with Sokoto, where the system fit existing emirate structures.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying amalgamation united Nigerians — it united administrations, for British convenience.</li>
              <li>Calling warrant chiefs traditional rulers — they were colonial inventions.</li>
              <li>Dating the Aba Women's War wrongly (1929) or blaming it on the war years.</li>
              <li>Ignoring the economic motive for 1914 — the North's deficit was central.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> indirect-rule questions score on the regional contrast: centralised North (worked), checked monarchies in the West (mixed), acephalous East (failed). One paragraph per region with a named example each.</div>
          `,
          cards: [
            { q: 'When was Nigeria amalgamated?', a: 'On 1 January 1914, when Lugard merged the Northern and Southern Protectorates with Lagos Colony.' },
            { q: 'Who amalgamated Nigeria?', a: 'Governor-General Frederick Lugard, the first Governor-General of the unified colony and protectorate.' },
            { q: 'Who coined the name Nigeria?', a: 'Lady Flora Shaw, Lugard\\'s wife, in an 1897 Times article proposing the name for the Niger territories.' },
            { q: 'Two motives for amalgamation?', a: 'Economic: cover the poorer North\\'s deficit with southern surplus. Administrative: one railway, currency and service.' },
            { q: 'Define indirect rule.', a: 'British governance through existing traditional rulers and institutions under the supervision of Residents.' },
            { q: 'Why did indirect rule suit the North?', a: 'The Sokoto emirates were centralised, with taxes, courts and chains of command that fit British supervision.' },
            { q: 'What were warrant chiefs?', a: 'Chiefs invented by the British in acephalous Igbo areas; lacking legitimacy, they bred resentment.' },
            { q: 'What was the Aba Women\\'s War of 1929?', a: 'A mass revolt of women in the East against warrant-chief corruption and taxation that killed dozens.' },
            { q: 'Three colonial cash crops?', a: 'Groundnut and cotton in the North, cocoa in the West, and palm produce in the East, all for export.' },
            { q: 'Tin mining began where and when?', a: 'On the Jos Plateau from 1904, drawing labour and railways to the middle belt.' },
            { q: 'Why were railways built north-south?', a: 'To carry export crops and minerals to the coast, not to integrate regions with each other.' },
            { q: 'Two purposes of colonial taxation?', a: 'Raising revenue for administration and pushing men into wage labour to earn the tax money.' },
            { q: 'What did marketing boards do?', a: 'They bought export crops at controlled low prices, banking surpluses for colonial development.' },
            { q: 'Two legacies of colonial rule?', a: 'Common borders, currency and civil service, plus entrenched regionalism and uneven development.' },
            { q: 'What does acephalous mean?', a: 'Leaderless — societies like the Igbo village republics that had no single central chief to rule.' },
          ],
          quiz: [
            { q: 'Nigeria was amalgamated in…', options: ['1900', '1906', '1914', '1929'], correct: 2, exp: 'Lugard merged the protectorates on 1 January 1914.' },
            { q: 'The name Nigeria is credited to…', options: ['Lugard', 'Flora Shaw', 'Mary Slessor', 'Crowther'], correct: 1, exp: 'Lady Flora Shaw proposed the name in an 1897 newspaper article.' },
            { q: 'The main economic motive for amalgamation was…', options: ['tin mining profits', 'covering the North\\'s deficit with southern surplus', 'oil revenue', 'slave trade profits'], correct: 1, exp: 'The landlocked North ran at a loss; southern customs surpluses balanced the books.' },
            { q: 'Indirect rule means governing through…', options: ['British district officers only', 'traditional rulers and institutions', 'elected councils', 'chartered companies'], correct: 1, exp: 'Existing chiefs and emirs administered under British Residents — cheap and familiar to subjects.' },
            { q: 'Indirect rule worked best in…', options: ['Eastern Nigeria', 'Northern Nigeria', 'Lagos Colony', 'the Niger Delta'], correct: 1, exp: 'Centralised emirates with tax and court systems matched the model almost perfectly.' },
            { q: 'It failed in the East mainly because…', options: ['no taxes existed', 'Igbo societies were acephalous', 'emirs resisted', 'railways bypassed it'], correct: 1, exp: 'Village republics had no chiefs to rule through, so invented warrant chiefs lacked legitimacy.' },
            { q: 'The Aba Women\\'s War occurred in…', options: ['1914', '1919', '1929', '1939'], correct: 2, exp: 'In 1929, against warrant-chief corruption and taxation in the Eastern provinces.' },
            { q: 'Tin mining on the Jos Plateau began around…', options: ['1861', '1885', '1904', '1914'], correct: 2, exp: 'From 1904, tin became a major colonial export and pulled the railway to the plateau.' },
            { q: 'Colonial railways ran mainly…', options: ['east-west', 'north-south to the coast', 'around Lake Chad', 'within cities'], correct: 1, exp: 'Lines linked the interior to ports for exports rather than uniting regions laterally.' },
            { q: 'Marketing boards helped Britain by…', options: ['importing cheap food', 'buying cash crops below world prices', 'minting coins', 'recruiting soldiers'], correct: 1, exp: 'Controlled low producer prices banked surpluses that funded colonial development.' },
          ]
        }
      ],
      SS3: [
        {
          title: 'Nationalism & the Road to Independence',
          tags: ['NNDP', 'NYM', 'Constitutions', 'Independence 1960'],
          summary: 'From early agitators to the NCNC, AG and NPC, and the constitutional march — Richards, Macpherson, Lyttleton — to October 1960.',
          content: `
            <h3>1. Roots of nationalism</h3>
            <ul>
              <li><b>Early agitators:</b> John Payne Jackson (Lagos Weekly Record), Kitoyi Ajasa, Herbert Macaulay — press campaigns against colonial abuses.</li>
              <li><b>Influences:</b> Western education, Pan-Africanism (Garvey, Du Bois), the 1914 Nigerian Council, and the example of India.</li>
              <li><b>Grievances:</b> racial discrimination, exclusion from senior posts, taxation without representation.</li>
            </ul>

            <h3>2. The first parties</h3>
            <ul>
              <li><b>NNDP (1923):</b> Herbert Macaulay's Nigerian National Democratic Party — first party, won Lagos seats under the Clifford Constitution's elective principle.</li>
              <li><b>NYM (1934):</b> Nigerian Youth Movement — broader, nationalist, produced Azikiwe and Awolowo before internal splits.</li>
              <li><b>Post-1945 regional parties:</b> <b>NCNC</b> (Azikiwe, 1944, East-leaning), <b>Action Group</b> (Awolowo, 1951, West), <b>NPC</b> (Ahmadu Bello/Sardauna, North).</li>
            </ul>

            <h3>3. The constitutional march</h3>
            <ul>
              <li><b>Clifford (1922):</b> elective principle — first elected seats (Lagos/Calabar).</li>
              <li><b>Richards (1946):</b> regionalism; introduced but was resisted for lack of consultation.</li>
              <li><b>Macpherson (1951):</b> wider Nigerian participation; broke down over federal-vs-unitary conflict.</li>
              <li><b>Lyttleton (1954):</b> true federalism — regions gained real powers; the shape of modern Nigeria.</li>
              <li><b>1957/58 conferences + 1960 Independence Constitution:</b> self-government then full sovereignty on <b>1 October 1960</b>, with Abubakar Tafawa Balewa as Prime Minister and Nnamdi Azikiwe as Governor-General (President from 1963).</li>
            </ul>

            <h3>4. Why nationalism grew after 1945</h3>
            <p>Returning soldiers with new horizons, the 1945 general strike, education expansion, international anti-colonial pressure (UN, Atlantic Charter ideals), and the parties' mass mobilisation — including the 1949 Enugu Colliery shootings that inflamed the East.</p>
            <div class="worked"><b>Worked example:</b> "Distinguish the Richards from the Lyttleton constitution." Richards (1946) created regions but kept power central and was imposed without consultation; Lyttleton (1954) devolved real legislative and financial powers to three regions, creating genuine federalism after the 1953 riots showed unity-by-fiat had failed. Two constitutions, two philosophies.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Confusing NNDP (1923, Macaulay) with NCNC (1944, Azikiwe).</li>
              <li>Calling 1960 a republic — Nigeria became a republic in 1963.</li>
              <li>Attributing federalism to Richards — Lyttleton made it real.</li>
              <li>Forgetting the AG was founded in 1951 (not 1950 or 1954).</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> constitutional questions love chronology: 1922 Clifford (elections), 1946 Richards (regions), 1951 Macpherson (participation), 1954 Lyttleton (federalism), 1960 independence, 1963 republic. Memorise the one-word tag per constitution.</div>
          `,
          cards: [
            { q: 'Who founded the NNDP and when?', a: 'Herbert Macaulay in 1923 — the first political party in Nigeria, winning the first elective seats.' },
            { q: 'What was the NYM?', a: 'The Nigerian Youth Movement of 1934, a nationalist body that produced Azikiwe and Awolowo before splitting.' },
            { q: 'Who founded the NCNC and when?', a: 'Nnamdi Azikiwe in 1944, the National Council of Nigeria and the Cameroons, dominant in the East.' },
            { q: 'Who founded the Action Group?', a: 'Obafemi Awolowo in 1951, drawing on the Egbe Omo Oduduwa cultural movement in the West.' },
            { q: 'Who led the NPC?', a: 'Ahmadu Bello, the Sardauna of Sokoto, with Tafawa Balewa as its parliamentary leader in the North.' },
            { q: 'What did the Clifford Constitution introduce?', a: 'The elective principle of 1922 — the first elected legislative seats, for Lagos and Calabar.' },
            { q: 'Main criticism of the Richards Constitution?', a: 'It was imposed without consulting Nigerians, though it introduced the regional structure of 1946.' },
            { q: 'Why did the Macpherson Constitution break down?', a: 'Conflict between regional and central powers, sharpened by the 1953 Kano riots, showed it could not hold.' },
            { q: 'What did the Lyttleton Constitution create?', a: 'Genuine federalism in 1954, devolving legislative and financial powers to the three regions.' },
            { q: 'Nigeria\\'s independence date?', a: '1 October 1960, with Balewa as Prime Minister and Azikiwe as Governor-General.' },
            { q: 'When did Nigeria become a republic?', a: 'In 1963, when Azikiwe became the first President under the republican constitution.' },
            { q: 'Two factors that boosted nationalism after 1945?', a: 'Returning soldiers and the 1945 general strike, plus education growth and anti-colonial world opinion.' },
            { q: 'What happened at Enugu in 1949?', a: 'Police shot striking colliery workers (the Iva Valley massacre), inflaming nationalist anger in the East.' },
            { q: 'John Payne Jackson\\'s contribution?', a: 'His Lagos Weekly Record newspaper campaigned fiercely against colonial policies from the 1890s.' },
            { q: 'First Prime Minister of Nigeria?', a: 'Abubakar Tafawa Balewa of the NPC, heading the coalition government at independence.' },
          ],
          quiz: [
            { q: 'The first political party in Nigeria was the…', options: ['NCNC', 'NNDP', 'NYM', 'NPC'], correct: 1, exp: 'Macaulay\\'s NNDP of 1923 contested and won the first elective seats in Lagos.' },
            { q: 'The elective principle came with the…', options: ['Richards', 'Clifford', 'Lyttleton', 'Macpherson'], correct: 1, exp: 'The 1922 Clifford Constitution introduced elected seats for Lagos and Calabar.' },
            { q: 'The NCNC was founded in 1944 by…', options: ['Awolowo', 'Azikiwe', 'Macaulay', 'Balewa'], correct: 1, exp: 'Nnamdi Azikiwe founded the NCNC, which became strongest in Eastern Nigeria.' },
            { q: 'The Action Group was founded by Awolowo in…', options: ['1944', '1951', '1954', '1957'], correct: 1, exp: 'Founded in 1951 out of the Egbe Omo Oduduwa movement to contest the Western region.' },
            { q: 'True federalism was introduced by the…', options: ['Richards', 'Macpherson', 'Lyttleton', 'Independence'], correct: 2, exp: 'The 1954 Lyttleton Constitution devolved real powers to the regions — real federalism.' },
            { q: 'The Richards Constitution (1946) was criticised mainly for…', options: ['creating regions', 'lack of consultation', 'abolishing chiefs', 'raising taxes'], correct: 1, exp: 'It was imposed without consulting Nigerians, though its regional idea survived.' },
            { q: 'Nigeria became independent on…', options: ['1 October 1957', '1 October 1960', '1 October 1963', '15 January 1966'], correct: 1, exp: 'Full independence came on 1 October 1960; the republic followed in 1963.' },
            { q: 'First Prime Minister at independence was…', options: ['Azikiwe', 'Balewa', 'Awolowo', 'Ahmadu Bello'], correct: 1, exp: 'Tafawa Balewa (NPC) led the coalition government as Prime Minister.' },
            { q: 'Nigeria became a republic in…', options: ['1960', '1963', '1966', '1970'], correct: 1, exp: 'The 1963 republican constitution made Azikiwe the first President.' },
            { q: 'The 1949 Enugu Colliery shooting…', options: ['ended strikes', 'inflamed Eastern nationalism', 'started the civil war', 'brought self-government'], correct: 1, exp: 'The Iva Valley killings of striking miners became a rallying point against colonial rule.' },
          ]
        },
        {
          title: 'The First Republic, Coups & the Civil War',
          tags: ['First Republic', '1966 coups', 'Civil War 1967-70'],
          summary: 'Census crisis to coups, secession, and the thirty-month civil war — causes, course, and what the reunion left behind.',
          content: `
            <h3>1. Cracks in the First Republic (1960–66)</h3>
            <ul>
              <li><b>Coalition politics:</b> NPC-NCDP government with NCNC; regional premiers (Bello, Akintola, Okpara) often out-powered the centre.</li>
              <li><b>1962/63 census crisis:</b> inflated figures fought over because population drove seats and revenue.</li>
              <li><b>1964 federal election:</b> boycotts, violence and a stalemate resolved under pressure.</li>
              <li><b>1965 Western crisis:</b> the "Wild West" election rigged for Akintola sparked arson and murder; federal paralysis followed.</li>
              <li>Regionalism plus winner-takes-all politics made trust between elites collapse.</li>
            </ul>

            <h3>2. The coups of 1966</h3>
            <ul>
              <li><b>15 January 1966:</b> young officers (led mostly by majors of Igbo extraction, under Nzeogwu) killed Balewa, Bello and Akintola; Aguiyi-Ironsi took power, ending the First Republic.</li>
              <li><b>May 1966:</b> Ironsi's Decree 34 (unitary system) inflamed northern fears.</li>
              <li><b>29 July 1966 counter-coup:</b> northern officers killed Ironsi; <b>Yakubu Gowon</b> emerged as head of state; pogroms against Igbos followed in the North.</li>
            </ul>

            <h3>3. Road to war</h3>
            <p>Mass exodus of Easterners homewards; Ojukwu (Eastern military governor) refused to recognise Gowon. The <b>Aburi Accord</b> (Ghana, January 1967) nearly settled things but collapsed over its interpretation. On <b>26 May 1967</b> the East voted to secede as the <b>Republic of Biafra</b>; on <b>6 July 1967</b> the civil war began when federal troops moved on the East.</p>

            <h3>4. The war and its end</h3>
            <p>Thirty months, a federal blockade (starvation as a weapon), the Mid-West invasion and Benin massacres, and an estimated one to three million deaths, mostly from hunger. Biafra surrendered in January 1970 ("no victor, no vanquished"); Gowon's <b>3Rs</b>: Reconciliation, Reconstruction, Rehabilitation. Biafra had been recognised by only a few states (Tanzania, Gabon, Cote d'Ivoire, Zambia).</p>
            <div class="worked"><b>Worked example:</b> "State three causes of the civil war." Strong answer: (1) the 1966 coups and counter-coup shattered trust between regions; (2) pogroms made co-existence feel unsafe to Easterners; (3) the collapse of Aburi removed the last peaceful formula — secession followed within months.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Mixing the January coup (Ironsi took power) with the July counter-coup (Gowon).</li>
              <li>Dating secession wrongly — May 1967 declaration, July 1967 fighting began, January 1970 end.</li>
              <li>Calling Aburi the cause of war — its COLLAPSE was the trigger; the accord itself was conciliatory.</li>
              <li>Blaming one ethnic group; examine structures (federalism, census, elections) as well as events.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> build a clean timeline card: Jan 1966 coup → Jul 1966 counter-coup → Jan 1967 Aburi → May 1967 Biafra → Jul 1967 war → Jan 1970 surrender → 3Rs. Every essay on the era hangs on these seven pegs.</div>
          `,
          cards: [
            { q: 'Two crises of the First Republic?', a: 'The 1962-63 census dispute over inflated population figures, and the rigged 1965 Western election crisis.' },
            { q: 'Why did the census matter so much?', a: 'Population figures decided parliamentary seats and revenue allocation, so regions fought over counts.' },
            { q: 'What happened on 15 January 1966?', a: 'The first military coup: Balewa, Bello and Akintola were killed and Aguiyi-Ironsi took power.' },
            { q: 'Who led the January 1966 coup operation in the North?', a: 'Chukwuma Kaduna Nzeogwu commanded the Kaduna wing of the coup that ended the First Republic.' },
            { q: 'What was Decree 34?', a: 'Ironsi\\'s May 1966 decree abolishing the federal structure for a unitary system, deepening northern fears.' },
            { q: 'What happened on 29 July 1966?', a: 'The counter-coup: Ironsi was killed and Yakubu Gowon emerged as head of state.' },
            { q: 'Who was Ojukwu?', a: 'Lieutenant Colonel Odumegwu Ojukwu, military governor of the East and later head of state of Biafra.' },
            { q: 'What was the Aburi Accord?', a: 'The January 1967 Ghana talks that nearly kept Nigeria together but collapsed over interpretation.' },
            { q: 'When did Biafra declare independence?', a: 'In late May 1967; federal military action began on 6 July 1967, starting the civil war.' },
            { q: 'How long did the civil war last?', a: 'Thirty months, from July 1967 to January 1970, ending with Biafra\\'s surrender.' },
            { q: 'Main cause of most civil-war deaths?', a: 'Starvation from the federal blockade of Biafra, not battle alone — perhaps a million or more died of hunger.' },
            { q: 'Name two states that recognised Biafra.', a: 'Tanzania, Gabon, Cote d\\'Ivoire and Zambia recognised Biafra; major powers backed Nigeria.' },
            { q: 'What were the 3Rs?', a: 'Gowon\\'s post-war policy: Reconciliation, Reconstruction and Rehabilitation of the former Biafran areas.' },
            { q: 'What slogan closed the war?', a: 'No victor, no vanquished — the official tone of reconciliation at the 1970 surrender.' },
            { q: 'One structural lesson of the era?', a: 'Winner-takes-all federalism plus census-driven revenue made politics existential — a flaw later constitutions tried to fix.' },
          ],
          quiz: [
            { q: 'The 1965 Western crisis followed…', options: ['the census', 'a rigged election', 'Decree 34', 'Aburi'], correct: 1, exp: 'The Wild West election of 1965, rigged for Akintola, unleashed violence and paralysis.' },
            { q: 'The first coup of January 1966 brought to power…', options: ['Gowon', 'Ironsi', 'Ojukwu', 'Balewa'], correct: 1, exp: 'Aguiyi-Ironsi headed the military government after the January coup.' },
            { q: 'Decree 34 (1966) made Nigeria…', options: ['federal', 'unitary', 'a republic', 'a confederation'], correct: 1, exp: 'Ironsi abolished the federal structure — the unitary decree that alarmed the North.' },
            { q: 'The counter-coup of July 1966 installed…', options: ['Ironsi', 'Gowon', 'Ojukwu', 'Murtala as head of state'], correct: 1, exp: 'Yakubu Gowon emerged head of state after the northern-led counter-coup.' },
            { q: 'The Aburi Accord was signed in…', options: ['Nigeria', 'Ghana', 'Ethiopia', 'Britain'], correct: 1, exp: 'Talks in Aburi, Ghana, in January 1967; the accord later collapsed over interpretation.' },
            { q: 'Biafra declared secession in…', options: ['May 1967', 'July 1967', 'January 1966', 'January 1970'], correct: 0, exp: 'The declaration came in late May 1967; fighting began in July 1967.' },
            { q: 'The civil war ended in…', options: ['1967', '1968', '1970', '1975'], correct: 2, exp: 'Biafra surrendered in January 1970 after thirty months of war.' },
            { q: 'Most civil-war deaths resulted from…', options: ['air raids', 'starvation under blockade', 'naval battles', 'disease in Lagos'], correct: 1, exp: 'The blockade made hunger the deadliest weapon of the war.' },
            { q: 'Which country recognised Biafra?', options: ['Britain', 'USSR', 'Tanzania', 'USA'], correct: 2, exp: 'Tanzania, Gabon, Cote d\\'Ivoire and Zambia recognised Biafra; the great powers backed Lagos.' },
            { q: 'The 3Rs stood for…', options: ['Rule, Reform, Return', 'Reconciliation, Reconstruction, Rehabilitation', 'Rebuild, Reprice, Resettle', 'Revenue, Rights, Regions'], correct: 1, exp: 'Gowon\\'s post-war policy of reconciliation, reconstruction and rehabilitation.' },
          ]
        },
        {
          title: 'Nigeria Since 1970: Reconstruction to the Fourth Republic',
          tags: ['Oil boom', 'Second Republic', 'Fourth Republic'],
          summary: 'Post-war reconstruction and the oil boom, the Second Republic and its fall, the long military interlude, and the Fourth Republic from 1999.',
          content: `
            <h3>1. Reconstruction and the oil boom (1970–75)</h3>
            <p>The <b>3Rs</b> guided recovery: a reintegrated East, rebuilt roads and schools, and the <b>indigenisation decrees (1972, 1977)</b> transferring foreign-owned businesses to Nigerian owners. Then oil struck: revenues exploded after the 1973 price rise, funding the <b>Third National Development Plan</b>, the 1976 state-creation exercise (19 states), the 1976 local-government reform, the move of the capital to <b>Abuja</b>, and the 1975 Murtala/Obasanjo purge and reform programme. Gowon was overthrown bloodlessly in <b>July 1975</b> by Murtala Mohammed, assassinated in the <b>February 1976</b> failed coup; <b>Olusegun Obasanjo</b> completed the transition.</p>

            <h3>2. The Second Republic (1979–1983)</h3>
            <ul>
              <li><b>1979 Constitution:</b> American-style presidential system; Shehu Shagari (NPN) president.</li>
              <li>Parties: NPN, UPN (Awolowo), NPP (Azikiwe), PRP (Aminu Kano), GNPP.</li>
              <li>Achievements: mass housing, green revolution rhetoric, free primary education in the West.</li>
              <li>Failures: oil-price collapse, import addiction, corruption, and the rigged-looking 1983 elections.</li>
              <li><b>31 December 1983:</b> Buhari's coup ended the republic.</li>
            </ul>

            <h3>3. The long military interlude (1984–1999)</h3>
            <p>Buhari (War Against Indiscipline) fell to <b>Babangida</b> (1985): Structural Adjustment Programme (1986), state creations (30 states by 1991), the annulled <b>12 June 1993</b> election, and a resignation (1993). The brief Shonekan interim fell to <b>Abacha</b> (1993–98): centralised rule, the Ogoni crisis and Abiola's death in detention (1998). <b>Abdulsalami Abubakar</b> ran the short transition to 1999.</p>

            <h3>4. The Fourth Republic (1999–)</h3>
            <ul>
              <li><b>1999:</b> Obasanjo (PDP) elected; civilian rule restored on 29 May 1999.</li>
              <li><b>2007:</b> first civilian-to-civilian handover (Obasanjo → Yar'Adua); Jonathan completed the term.</li>
              <li><b>2015:</b> first opposition victory — Buhari (APC) defeated an incumbent president.</li>
              <li>Landmarks: debt relief (2005–06), NCC telecoms boom, banking consolidation (2004–05); challenges: corruption, insecurity, and power transitions tested each term.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "Why did the Second Republic collapse?" Three-part answer: (1) falling oil revenue exposed import-dependent budgets; (2) corruption and contract inflation eroded trust; (3) the contested 1983 elections removed the regime's legitimacy — giving the military its excuse. Economy, ethics, elections.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Confusing 1979 (Second Republic) with 1999 (Fourth Republic) constitutions.</li>
              <li>Saying oil caused everything — the boom funded both development AND dependence.</li>
              <li>Mixing Murtala's 1975 coup with Buhari's 1983 coup.</li>
              <li>Forgetting 2015 as the first opposition transfer of power — a milestone for African democracy.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> era questions reward the handover chain: Gowon→Murtala→Obasanjo→Shagari→Buhari→Babangida→(Shonekan)→Abacha→Abubakar→Obasanjo. Learn it as one line and every "who succeeded whom" question is free marks.</div>
          `,
          cards: [
            { q: 'What were the indigenisation decrees?', a: 'The 1972 and 1977 laws transferring ownership of foreign-dominated businesses to Nigerian citizens.' },
            { q: 'Why did oil revenue matter after 1973?', a: 'The 1973 price rise exploded national revenue, funding development plans, states and infrastructure.' },
            { q: 'How many states did the 1976 exercise create?', a: 'Nineteen states, alongside landmark local-government reforms that year.' },
            { q: 'Why was Abuja chosen as capital?', a: 'A central, neutral site to replace congested Lagos and symbolise national unity; the move began in 1991.' },
            { q: 'Who overthrew Gowon in 1975?', a: 'Murtala Mohammed in a bloodless coup that launched a famous reform and purge programme.' },
            { q: 'What happened in February 1976?', a: 'A failed coup assassinated Murtala Mohammed; Olusegun Obasanjo completed the transition to civilian rule.' },
            { q: 'What system did the 1979 Constitution create?', a: 'An American-style presidential system, replacing the parliamentary model of the First Republic.' },
            { q: 'Who was the Second Republic president?', a: 'Shehu Shagari of the NPN, elected in 1979 and overthrown on 31 December 1983.' },
            { q: 'Two Second Republic failures?', a: 'Oil-price collapse wrecking import-dependent budgets, and corruption discrediting the 1983 elections.' },
            { q: 'What was the SAP of 1986?', a: 'Babangida\\'s Structural Adjustment Programme: currency devaluation, privatisation and subsidy withdrawal.' },
            { q: 'Whose election was annulled in 1993?', a: 'MKO Abiola won the 12 June 1993 presidential election, which the Babangida regime annulled.' },
            { q: 'What happened to Abacha in 1998?', a: 'He died suddenly in June 1998; Abdulsalami Abubakar took over and ran the short transition.' },
            { q: 'When did the Fourth Republic begin?', a: 'On 29 May 1999, when elected president Olusegun Obasanjo was sworn in under the 1999 Constitution.' },
            { q: 'Why was 2007 historic?', a: 'The first civilian-to-civilian handover: Obasanjo transferred power to Yar\\'Adua peacefully.' },
            { q: 'Why was 2015 historic?', a: 'The first time an incumbent president lost and handed over to the opposition — Buhari\\'s APC won.' },
          ],
          quiz: [
            { q: 'Indigenisation decrees were issued in…', options: ['1966 and 1970', '1972 and 1977', '1979 and 1983', '1999 and 2003'], correct: 1, exp: 'The 1972 and 1977 decrees shifted business ownership to Nigerians.' },
            { q: 'The 1976 reforms created how many states?', options: ['12', '19', '21', '30'], correct: 1, exp: 'Nineteen states were created in 1976 alongside the landmark local-government reform.' },
            { q: 'Murtala Mohammed was assassinated in…', options: ['1975', '1976', '1979', '1983'], correct: 1, exp: 'The failed coup of February 1976 killed him; Obasanjo succeeded him.' },
            { q: 'The 1979 Constitution introduced…', options: ['parliamentary rule', 'a presidential system', 'indirect rule', 'a unitary state'], correct: 1, exp: 'It copied the American presidential model for the Second Republic.' },
            { q: 'The Second Republic fell in…', options: ['1979', '1983', '1985', '1993'], correct: 1, exp: 'Buhari\\'s coup on 31 December 1983 ended the Shagari government.' },
            { q: 'SAP (1986) was introduced by…', options: ['Buhari', 'Babangida', 'Abacha', 'Shonekan'], correct: 1, exp: 'Babangida\\'s Structural Adjustment Programme reshaped the economy from 1986.' },
            { q: 'The 12 June 1993 election was won by…', options: ['Shagari', 'Abiola', 'Obasanjo', 'Babangida'], correct: 1, exp: 'MKO Abiola won the freest election yet held — then it was annulled.' },
            { q: 'Abacha died in…', options: ['1993', '1996', '1998', '1999'], correct: 2, exp: 'June 1998; Abubakar took over and delivered the 1999 transition.' },
            { q: 'The Fourth Republic began on…', options: ['1 October 1960', '29 May 1999', '12 June 1993', '1 January 1914'], correct: 1, exp: 'Obasanjo was sworn in on 29 May 1999, starting the longest civilian run since independence.' },
            { q: 'The 2015 election was historic because…', options: ['it was annulled', 'an incumbent lost to the opposition', 'women voted first', 'the military returned'], correct: 1, exp: 'Jonathan conceded to Buhari — the first opposition transfer of power in Nigerian history.' },
          ]
        }
      ]"""

i = s.index("  'History': {")
j = s.index('    resources: [', i)
k = s.rindex('      ]', i, j)
tail = s[k+7:]
if tail.startswith(','):
    tail = tail[1:]
s = s[:k] + '      ],\n' + T1.strip('\n') + '\n' + tail

open(P, 'w', encoding='utf-8').write(s)
print('history ss2+ss3 inserted')
