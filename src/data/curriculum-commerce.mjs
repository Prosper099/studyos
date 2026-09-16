export default {

    color: 'blue', icon: '🛒', blurb: 'Trade, aids to trade and business organisation — the commercial student&apos;s backbone.',
    topics: {
      SS1: [
        {
          title: 'Commerce: Meaning, Scope & Production',
          tags: ['Trade', 'Aids to trade', 'Production types', 'Chain of distribution'],
          summary: 'What commerce covers, how it links producer to consumer, and the production it serves.',
          content: `

            <h3>1. Where commerce sits in the economy</h3>
            <p><b>Production</b> creates goods and services; <b>consumption</b> uses them; <b>commerce</b> is the bridge — the part of production concerned with the <b>exchange and distribution</b> of goods from producer to consumer. Without commerce, yam harvests rot in the village while cities go hungry.</p>
            <div class="formula">Business studies = Industry (production) + Commerce (trade + aids to trade)</div>

            <h3>2. The two wings of commerce</h3>
            <ul>
              <li><b>Trade:</b> buying and selling. <b>Home trade</b> (wholesale and retail within the country) and <b>foreign trade</b> (imports, exports, and <b>entrepôt</b> — re-export, buying from one country to sell to another without home use).</li>
              <li><b>Aids to trade (auxiliaries):</b> the services that let trade happen smoothly.</li>
            </ul>
            <ul>
              <li><b>Transport:</b> moves goods across space — creates <b>place utility</b>.</li>
              <li><b>Warehousing:</b> stores goods across time — creates <b>time utility</b>, steadies prices.</li>
              <li><b>Banking:</b> holds money, lends capital, enables payments.</li>
              <li><b>Insurance:</b> spreads risk (fire, theft, damage) so traders can sleep.</li>
              <li><b>Advertising:</b> informs and persuades buyers; builds brands.</li>
              <li><b>Communication:</b> orders, enquiries and market news travel fast.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Which auxiliary removes each obstacle? Distance → transport; time → warehousing; risk → insurance; capital → banking; ignorance of the product → advertising.</div>

            <h3>3. Wholesale and retail — the chain</h3>
            <ul>
              <li><b>Wholesaler:</b> buys in bulk from producers, breaks bulk, finances retailers (by giving credit), warehouses and bears risk.</li>
              <li><b>Retailer:</b> sells in small quantities to the final consumer, offers choice and convenience, feeds consumer tastes back up the chain.</li>
              <li><b>Chain stores/supermarkets & e-commerce</b> shorten or re-route the chain — but someone still performs every auxiliary function.</li>
            </ul>

            <h3>4. Production: meaning and types</h3>
            <p><b>Production</b> is the creation of <b>utility</b> (satisfaction) — it is not finished until the good reaches the consumer, which is why commerce counts as production. Three types:</p>
            <ul>
              <li><b>Primary (extractive):</b> taking from nature — farming, fishing, mining, quarrying, forestry. Nigeria: crude oil, tin, cocoa.</li>
              <li><b>Secondary (manufacturing & construction):</b> turning raw materials into finished or semi-finished goods — flour milling, textiles, cement, building.</li>
              <li><b>Tertiary (services):</b> the intangible — teaching, banking, transport, medicine, trade itself.</li>
            </ul>
            <div class="worked"><b>Worked example (classification):</b> A fisherman (primary) sells to a cannery (secondary) whose tins ride a truck (tertiary) to a wholesaler (commerce) to a retailer (commerce). Point at each stage's type.</div>

            <h3>5. Specialisation and interdependence</h3>
            <p>No one produces everything; we specialise (by person, firm and region) and exchange the surplus — that exchange is commerce's reason for existing. Specialisation gains skill, speed and scale, but makes everyone <b>interdependent</b>, so commerce's job (moving goods reliably) becomes the economy's lifeline.</p>

            <h3>6. Examiner's favourites</h3>
            <ul>
              <li>"Commerce is production." Discuss — argue that production is incomplete until goods reach the consumer; commerce adds time and place utility.</li>
              <li>Match each auxiliary to the obstacle it removes (the worked table above).</li>
              <li>Classify industries as primary/secondary/tertiary — mixed examples (a bakery with its own delivery van) test judgement.</li>
            </ul>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling commerce the same as trade — trade is one wing; auxiliaries are the other.</li>
              <li>Classifying banking as secondary — services are tertiary.</li>
              <li>Saying entrepôt trade means importing for home use — it is re-export.</li>
              <li>Thinking production ends at the factory gate.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> draw the chain producer → wholesaler → retailer → consumer once, hang an auxiliary under each arrow, and every commerce question becomes "which box is this?"</div>
          `,
          quiz: [
            { q: 'Commerce is concerned with', options: ['production only', 'exchange of goods and services and removing its hindrances', 'farming only', 'taxation'], correct: 1, exp: 'Exchange plus hindrance removal.' },
            { q: 'Buying and selling within the country is', options: ['foreign trade', 'home trade', 'entrepot', 'barter'], correct: 1, exp: 'Trade within one country is home or internal trade.' },
            { q: 'Import, export and entrepot make up', options: ['home trade', 'foreign trade', 'retail', 'wholesale'], correct: 1, exp: 'Foreign trade&apos;s three forms.' },
            { q: 'Which aid removes the place hindrance?', options: ['Insurance', 'Transport', 'Advertising', 'Banking'], correct: 1, exp: 'Transport removes the place hindrance — goods must travel.' },
            { q: 'Warehousing removes which hindrance?', options: ['Time', 'Risk', 'Capital', 'Information'], correct: 0, exp: 'Goods wait safely for demand.' },
            { q: 'Insurance removes', options: ['risk', 'place', 'time', 'contact'], correct: 0, exp: 'It spreads fire, theft and loss risks.' },
            { q: 'Banking and finance remove the hindrance of', options: ['capital', 'place', 'time', 'weight'], correct: 0, exp: 'Banking fixes the capital hindrance — money to trade with.' },
            { q: 'Production that mines or fishes is', options: ['manufacturing', 'extractive', 'constructive', 'tertiary'], correct: 1, exp: 'Extractive draws from nature.' },
            { q: 'The chain of distribution runs producer → wholesaler →', options: ['factory', 'retailer → consumer', 'bank', 'exporter'], correct: 1, exp: 'Wholesaler, retailer, consumer.' },
            { q: 'Teaching and banking are which production type?', options: ['Extractive', 'Constructive', 'Tertiary/services', 'Manufacturing'], correct: 2, exp: 'Services are tertiary production.' }
          ],
          cards: [
            { q: 'Define commerce.', a: 'The business activity of exchanging goods and services and removing the hindrances to exchange.' },
            { q: 'Commerce equals trade plus what?', a: 'Aids to trade (auxiliaries).' },
            { q: 'Name four aids to trade.', a: 'Transport, warehousing, banking/finance, insurance, advertising, communication.' },
            { q: 'What is home trade?', a: 'Buying and selling within one country.' },
            { q: 'What is foreign trade?', a: 'Trade across borders — import, export and entrepot.' },
            { q: 'What is entrepot trade?', a: 'Importing goods to re-export them.' },
            { q: 'Which hindrance does transport remove?', a: 'Place.' },
            { q: 'Which hindrance does warehousing remove?', a: 'Time.' },
            { q: 'Which hindrance does insurance remove?', a: 'Risk.' },
            { q: 'Which hindrance does banking remove?', a: 'Capital/finance.' },
            { q: 'Which hindrance does advertising remove?', a: 'Information/awareness.' },
            { q: 'What is production?', a: 'The creation of goods and services — utility.' },
            { q: 'Name the four production types.', a: 'Extractive, manufacturing, constructive and tertiary/services.' },
            { q: 'Give the chain of distribution.', a: 'Producer to wholesaler to retailer to consumer.' },
            { q: 'Is a teacher a producer?', a: 'Yes — services are tertiary production.' }
          ],
        },
        {
          title: 'Units of Business Organisation',
          tags: ['Sole proprietorship', 'Partnership', 'Cooperative', 'Limited companies'],
          summary: 'From one-person shops to public companies — the forms a business can take, with their pros, cons and key terms.',
          content: `

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
          `,
          quiz: [
            { q: 'A one-owner business with unlimited liability is a', options: ['partnership', 'sole proprietorship', 'cooperative', 'public company'], correct: 1, exp: 'A sole proprietorship has one owner who bears all the risk.' },
            { q: 'Unlimited liability means', options: ['loss is capped', 'personal assets can pay business debts', 'no debts ever', 'the state pays'], correct: 1, exp: 'No wall between personal and business wealth.' },
            { q: 'A partnership usually has how many persons?', options: ['1–5', '2–20', '50–100', '2–500'], correct: 1, exp: 'General rule 2 to 20.' },
            { q: 'The document governing a partnership is the', options: ['articles', 'deed', 'prospectus', 'charter'], correct: 1, exp: 'The partnership deed.' },
            { q: 'A partner who invests but takes no part is', options: ['active', 'sleeping/dormant', 'general', 'managing'], correct: 1, exp: 'The sleeping partner.' },
            { q: 'Cooperatives vote by', options: ['one share one vote', 'one member one vote', 'wealth', 'age'], correct: 1, exp: 'Cooperatives practise one member, one vote.' },
            { q: 'A limited company is a', options: ['natural person', 'separate legal person', 'partnership', 'charity'], correct: 1, exp: 'It sues and is sued in its own name.' },
            { q: 'Perpetual succession means', options: ['the company never makes losses', 'death of a member does not end it', 'directors rule forever', 'shares never change hands'], correct: 1, exp: 'The company outlives its members.' },
            { q: 'A private company&apos;s membership is capped at', options: ['2', '50', '100', 'no cap'], correct: 1, exp: 'Fifty, excluding employees.' },
            { q: 'Which may invite the public to buy shares?', options: ['Private company', 'Public company', 'Sole trader', 'Partnership'], correct: 1, exp: 'Only public companies list to the public.' }
          ],
          cards: [
            { q: 'What is a sole proprietorship?', a: 'A business owned by one person with unlimited liability.' },
            { q: 'Give two merits of sole proprietorship.', a: 'Easy to start, quick decisions, all profits to the owner.' },
            { q: 'Give two demerits of sole proprietorship.', a: 'Limited capital, unlimited liability, no continuity at death.' },
            { q: 'What is a partnership?', a: 'A business of 2 to 20 persons governed by a deed.' },
            { q: 'What is a partnership deed?', a: 'The written agreement regulating the partnership.' },
            { q: 'What is a sleeping partner?', a: 'One who contributes capital but takes no active part.' },
            { q: 'What is a cooperative society?', a: 'A voluntary association of common economic need, one member one vote.' },
            { q: 'How is cooperative surplus shared?', a: 'As patronage dividends based on use.' },
            { q: 'Name three features of a limited company.', a: 'Separate legal personality, limited liability, perpetual succession.' },
            { q: 'Private vs public company membership?', a: 'Private: 2 to 50, no public shares; public: 2 upward, may list publicly.' },
            { q: 'What is the Memorandum of Association?', a: 'The document defining the company&apos;s external relations and powers.' },
            { q: 'What are Articles of Association?', a: 'The internal rules of the company.' },
            { q: 'Define limited liability.', a: 'Loss is capped at the amount invested in the company.' },
            { q: 'Define perpetual succession.', a: 'The company continues despite changes in membership or death.' },
            { q: 'Which form raises the most capital?', a: 'The public limited company, via the stock exchange.' }
          ],
        },
      ],
      SS2: [
        {
          title: 'Wholesale & Retail Trade: Channels of Distribution',
          tags: ['Wholesale', 'Retail', 'Distribution'],
          summary: 'How goods travel from factory to consumer — the chain of distribution and the work wholesalers and retailers really do.',
          content: `
            <h3>1. The chain of distribution</h3>
            <p>Goods travel from <b>producer → wholesaler → retailer → consumer</b>. This chain exists because producers make in bulk at one place while consumers buy in small quantities at many places. Sometimes the chain shortens: producer → retailer (large supermarkets buying direct) or producer → consumer (factory outlets, online stores).</p>

            <h3>2. Functions of the wholesaler</h3>
            <ul>
              <li><b>Buying in bulk</b> from producers and <b>breaking bulk</b> for retailers.</li>
              <li><b>Warehousing/storage</b> — steadies supply and prices across seasons.</li>
              <li><b>Financing:</b> pays producers promptly, often gives retailers credit.</li>
              <li><b>Risk bearing:</b> owns goods while price, damage or spoilage risks exist.</li>
              <li><b>Transport, market information</b> to producers, and grading/packing.</li>
            </ul>

            <h3>3. Types of wholesaler</h3>
            <ul>
              <li><b>Merchant wholesalers</b> — take title to goods (general vs specialist).</li>
              <li><b>Agents/brokers</b> — do not own goods; earn commission.</li>
              <li><b>Cash-and-carry</b> — no credit, no delivery; low prices.</li>
            </ul>

            <h3>4. The retailer and why he survives</h3>
            <ul>
              <li>Sells in <b>small quantities</b> at convenient places and hours.</li>
              <li><b>Personal service,</b> credit to known customers, home delivery.</li>
              <li>Wide <b>variety</b> from many wholesalers in one shop.</li>
              <li>Advises customers; passes feedback up the chain.</li>
            </ul>
            <p>Large-scale retailing grows alongside: <b>supermarkets, departmental stores, chain stores, mail order and e-commerce</b>. Yet the corner shop survives on convenience and credit.</p>
            <div class="worked"><b>Worked example:</b> "Why does the wholesaler survive despite claims that he adds cost?" Answer: name four services — breaking bulk, storage that smooths seasonal supply, finance to both ends, and risk bearing — then argue that each saves the producer or retailer more than the wholesaler's margin costs.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Confusing agents (no ownership) with merchant wholesalers (own the goods).</li>
              <li>Saying retailers only "sell" — their services are examinable functions.</li>
              <li>Forgetting that e-commerce shortens the chain but still uses logistics wholesalers.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> chain-of-distribution questions love a labelled diagram: draw producer → wholesaler → retailer → consumer and put one function under each arrow. Diagrams earn even when words fail.</div>
          `,
          cards: [
            { q: 'State the full chain of distribution.', a: 'Producer to wholesaler to retailer to consumer — each link adjusts bulk, place and time.' },
            { q: 'What is breaking bulk?', a: 'The wholesaler buys in large lots from producers and sells in smaller lots suited to retailers.' },
            { q: 'Two ways wholesalers finance the chain?', a: 'They pay producers promptly and often allow retailers to pay later on credit.' },
            { q: 'How does the wholesaler bear risk?', a: 'He owns the goods while they face price falls, damage, theft or spoilage in storage.' },
            { q: 'Difference between merchant wholesalers and agents?', a: 'Merchant wholesalers take ownership of goods; agents only arrange sales and earn commission.' },
            { q: 'What is a cash-and-carry wholesaler?', a: 'A wholesaler offering low prices because buyers pay cash and carry goods away themselves.' },
            { q: 'Why can wholesalers steady prices?', a: 'Storage lets them release goods evenly across seasons instead of flooding the market at harvest.' },
            { q: 'Three services retailers give consumers?', a: 'Small-quantity sales at convenient places and hours, personal service, credit to regulars and home delivery.' },
            { q: 'Why do retailers stock variety?', a: 'They gather goods from many wholesalers so a shopper finds everything in one call.' },
            { q: 'Name four large-scale retail forms.', a: 'Supermarkets, departmental stores, chain stores, mail order and modern e-commerce platforms.' },
            { q: 'How does e-commerce change the chain?', a: 'It often removes the retailer link (producer to consumer) but still depends on warehousing and delivery wholesalers.' },
            { q: 'Why does the corner shop survive?', a: 'Convenience of location and hours, personal service and credit keep loyal customers despite big stores.' },
            { q: 'What market information flows up the chain?', a: 'Retailers and wholesalers report tastes, complaints and demand changes back to producers.' },
            { q: 'Who grades and packs goods in the chain?', a: 'Wholesalers often sort, grade and re-pack goods into retailer-ready lots.' },
            { q: 'When does the chain shorten to two links?', a: 'When producers sell direct to consumers through outlets or online stores, or direct to big retailers.' },
          ],
          quiz: [
            { q: 'The middleman who breaks bulk is the…', options: ['producer', 'wholesaler', 'consumer', 'transporter'], correct: 1, exp: 'Breaking bulk — buying large, selling small — is the wholesaler\'s core function.' },
            { q: 'Agents differ from merchant wholesalers because agents…', options: ['own the goods', 'earn commission without owning goods', 'give credit', 'store goods'], correct: 1, exp: 'Agents arrange sales for commission; merchants take title to the goods.' },
            { q: 'Cash-and-carry wholesalers charge lower prices because…', options: ['they give long credit', 'buyers pay cash and collect goods', 'they deliver free', 'they are charities'], correct: 1, exp: 'Removing credit and delivery cuts their costs, so prices fall.' },
            { q: 'Storage by wholesalers mainly helps to…', options: ['raise taxes', 'smooth seasonal supply and prices', 'increase spoilage', 'remove retailers'], correct: 1, exp: 'Releasing stocks steadily across seasons steadies both supply and price.' },
            { q: 'Which is a retailer service?', options: ['bulk export', 'credit to known customers', 'ore mining', 'share trading'], correct: 1, exp: 'Retailers serve with convenience, variety, advice and often small credit.' },
            { q: 'A store selling many product lines in departments is a…', options: ['chain store', 'departmental store', 'kiosk', 'cash-and-carry'], correct: 1, exp: 'Departmental stores organise wide ranges under one roof in separate departments.' },
            { q: 'Producer selling direct online illustrates…', options: ['a longer chain', 'a shortened chain', 'agent trading', 'barter'], correct: 1, exp: 'E-commerce can cut the retailer link: producer straight to consumer.' },
            { q: 'Who bears risk of spoilage while goods are stored?', options: ['the consumer', 'the wholesaler owning the stock', 'the transporter', 'the government'], correct: 1, exp: 'Ownership carries risk — price, damage and spoilage sit with the wholesaler.' },
            { q: 'Retailers gather market information that flows…', options: ['nowhere', 'up the chain to producers', 'only sideways', 'to consumers only'], correct: 1, exp: 'Tastes and complaints travel upward, guiding production decisions.' },
            { q: 'The corner shop survives mainly through…', options: ['cheapest prices', 'convenience and personal credit', 'bulk sales', 'advertising'], correct: 1, exp: 'Convenience, service and credit outweigh the big stores on price alone.' },
          ]
        },
        {
          title: 'Insurance: Principles & Practice',
          tags: ['Insurance', 'Premium', 'Indemnity'],
          summary: 'Risk, premium and policy — the principles that make insurance work and the main classes of cover in Nigeria.',
          content: `
            <h3>1. Why insurance exists</h3>
            <p><b>Risk</b> is uncertainty about loss. Insurance spreads the losses of the few across the premiums of the many — <b>cooperative risk pooling</b>. The <b>premium</b> is the price of cover; the <b>policy</b> is the contract; the <b>insured</b> is protected and the <b>insurer</b> (NAICOM-licensed companies in Nigeria) promises to pay.</p>

            <h3>2. The principles of insurance</h3>
            <ul>
              <li><b>Utmost good faith (uberrima fides):</b> both sides must disclose all material facts.</li>
              <li><b>Insurable interest:</b> you must stand to lose financially if the event occurs.</li>
              <li><b>Indemnity:</b> compensation restores you to your former position — no profit from a loss.</li>
              <li><b>Subrogation:</b> after paying, the insurer steps into your rights against third parties.</li>
              <li><b>Contribution:</b> several insurers share one loss in proportion.</li>
              <li><b>Proximate cause:</b> the dominant cause decides whether the loss is covered.</li>
            </ul>
            <p>Note: life and personal accident insurance are NOT contracts of indemnity — a human life cannot be "restored", so agreed sums are paid.</p>

            <h3>3. Classes of insurance</h3>
            <ul>
              <li><b>Life</b> (whole life, endowment, term) — savings plus protection.</li>
              <li><b>Fire and burglary;</b> <b>marine</b> (ship, cargo, freight); <b>motor</b> (third-party is compulsory in Nigeria).</li>
              <li><b>Liability, fidelity guarantee, and crop insurance</b> for farmers.</li>
            </ul>

            <h3>4. The insurer's business</h3>
            <p>Premiums form a <b>fund</b> invested until claims arise; <b>actuaries</b> price risk; <b>reinsurance</b> spreads huge risks among insurers; <b>NAICOM</b> regulates the industry in Nigeria.</p>
            <div class="worked"><b>Worked example:</b> A shop insured for N2m burns goods worth N800,000. Indemnity means the payout is N800,000 (the actual loss), not N2m — insurance restores, never enriches. If a neighbour's wiring caused the fire, subrogation lets the insurer recover from the neighbour after paying.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling life insurance a contract of indemnity — it pays agreed sums.</li>
              <li>Confusing subrogation (after payment) with contribution (between insurers).</li>
              <li>Thinking "insured value" is always paid — indemnity pays the actual loss.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> memorise the six principles as U-I-I-S-C-P (Utmost faith, Insurable interest, Indemnity, Subrogation, Contribution, Proximate cause) and carry one example each — principles questions are free marks.</div>
          `,
          cards: [
            { q: 'Define insurance in one line.', a: 'The spreading of the losses of the few across the premiums of the many — cooperative risk pooling.' },
            { q: 'What is a premium?', a: 'The price paid by the insured for the cover promised in the policy.' },
            { q: 'Utmost good faith requires what?', a: 'Both parties to disclose every material fact honestly before and during the contract.' },
            { q: 'What is insurable interest?', a: 'A financial stake in the subject matter — you must lose money if the insured event occurs.' },
            { q: 'State the principle of indemnity.', a: 'Compensation restores the insured to the former position; no profiting from a loss.' },
            { q: 'What is subrogation?', a: 'After paying a claim, the insurer steps into the insured\'s rights against third parties at fault.' },
            { q: 'Contribution applies when…', a: 'Several insurers cover the same risk; they share the loss in proportion to their cover.' },
            { q: 'Proximate cause decides…', a: 'Whether the dominant cause of a loss is a peril the policy covers.' },
            { q: 'Why is life insurance not indemnity?', a: 'A human life cannot be valued or restored, so the agreed sum is paid on the event.' },
            { q: 'Which motor cover is compulsory in Nigeria?', a: 'Third-party motor insurance, covering injury or damage your vehicle causes to others.' },
            { q: 'Name three other classes of insurance.', a: 'Fire, burglary, marine, liability, fidelity guarantee and crop insurance, among others.' },
            { q: 'Who regulates insurance in Nigeria?', a: 'The National Insurance Commission, NAICOM.' },
            { q: 'What is reinsurance?', a: 'Insurers passing on parts of huge risks to other insurers to spread exposure.' },
            { q: 'Who prices risk scientifically for insurers?', a: 'Actuaries, using probability and mortality or loss statistics.' },
            { q: 'A shop insured for N2m loses N800,000 to fire. Payout?', a: 'N800,000 — indemnity pays the actual loss, never the full sum insured as profit.' },
          ],
          quiz: [
            { q: 'The price of insurance cover is the…', options: ['policy', 'premium', 'dividend', 'deductible'], correct: 1, exp: 'Premiums from the many fund the losses of the few.' },
            { q: 'Disclosure of all material facts is…', options: ['indemnity', 'utmost good faith', 'subrogation', 'contribution'], correct: 1, exp: 'Uberrima fides — honesty on both sides is the foundation.' },
            { q: 'You must financially lose if the event occurs — that is…', options: ['proximate cause', 'insurable interest', 'reinsurance', 'endorsement'], correct: 1, exp: 'Without insurable interest there is no valid contract.' },
            { q: 'Insurance that restores but never enriches follows…', options: ['indemnity', 'contribution', 'estoppel', 'arbitration'], correct: 0, exp: 'Indemnity pays the actual loss, returning you to the former position.' },
            { q: 'After paying, the insurer sues the careless neighbour via…', options: ['contribution', 'subrogation', 'good faith', 'proximity'], correct: 1, exp: 'Subrogation transfers your rights against third parties to the insurer.' },
            { q: 'Two insurers sharing one loss illustrates…', options: ['contribution', 'subrogation', 'indemnity', 'surrender'], correct: 0, exp: 'Contribution divides a loss among co-insurers in proportion.' },
            { q: 'Which is NOT a contract of indemnity?', options: ['fire', 'marine', 'life', 'motor'], correct: 2, exp: 'Life pays agreed sums because life cannot be restored or precisely valued.' },
            { q: 'Compulsory motor cover in Nigeria is…', options: ['comprehensive', 'third-party', 'fire', 'marine'], correct: 1, exp: 'Third-party cover protects other road users and is required by law.' },
            { q: 'The Nigerian insurance regulator is…', options: ['CBN', 'NAICOM', 'SEC', 'NDIC'], correct: 1, exp: 'The National Insurance Commission licences and supervises insurers.' },
            { q: 'Insurers spreading huge risks among themselves is…', options: ['underwriting', 'reinsurance', 'subrogation', 'pooling'], correct: 1, exp: 'Reinsurance is insurance for insurers.' },
          ]
        },
        {
          title: 'Transport & Communication in Commerce',
          tags: ['Transport', 'Communication', 'Trade aids'],
          summary: 'The arteries of trade — modes of transport with their merits, and the communication services that let commerce move at speed.',
          content: `
            <h3>1. Why transport matters</h3>
            <p>Production is useless until goods reach consumers. Transport adds <b>place utility</b>, widens markets, stabilises prices by moving goods from surplus to scarce areas, and makes large-scale production possible.</p>

            <h3>2. Modes of transport compared</h3>
            <ul>
              <li><b>Road:</b> door-to-door, flexible, fast for short hauls; but accidents, congestion and higher cost per tonne-km over long distances.</li>
              <li><b>Rail:</b> cheap for heavy bulk over long distances; but fixed routes and terminal delays.</li>
              <li><b>Water:</b> cheapest for very heavy, bulky cargo and foreign trade; slow.</li>
              <li><b>Air:</b> fastest, ideal for perishables and emergencies; most expensive.</li>
              <li><b>Pipeline:</b> continuous, safe flow of liquids and gas (Niger Delta crude lines).</li>
            </ul>

            <h3>3. Choosing a mode</h3>
            <p>Traders weigh <b>cost, speed, safety, distance, nature of goods</b> (perishable? heavy? valuable?) and <b>reliability</b>. Flowers to Europe: air. Cement inland: rail or road. Crude oil: pipeline.</p>

            <h3>4. Communication services</h3>
            <ul>
              <li><b>Postal and courier;</b> <b>telephone/mobile;</b> <b>radio, TV, newspapers</b> for mass messages.</li>
              <li><b>Internet services:</b> email, e-banking, e-commerce — the fastest-growing channel.</li>
              <li><b>Satellite and fibre</b> backbone connect Nigeria to world markets.</li>
            </ul>
            <p>Communication removes uncertainty: prices, orders and payments travel instantly, letting trade happen across continents in minutes.</p>
            <div class="worked"><b>Worked example:</b> "Recommend transport for fresh fish from Lagos to Abuja." Answer: air or refrigerated road — speed and preservation beat cost because spoilage destroys value; mention that rail (if refrigerated) could balance cost and speed. Always pair mode with the nature of the goods.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Claiming road is cheapest for heavy long-distance bulk — rail and water beat it.</li>
              <li>Forgetting pipeline as a mode.</li>
              <li>Treating communication as decoration — questions ask how it aids trade; answer with price information and order speed.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> "advantages and disadvantages" transport questions score by MODE TABLE in your head: cost, speed, capacity, flexibility, safety — one row per mode. Compare, then conclude with the goods in the question.</div>
          `,
          cards: [
            { q: 'What utility does transport add?', a: 'Place utility — goods become useful where consumers are, widening markets.' },
            { q: 'Two economic roles of transport?', a: 'It widens markets and steadies prices by moving goods from surplus to scarce areas.' },
            { q: 'Main advantage of road transport?', a: 'Door-to-door service and flexibility, fastest for short-distance hauls.' },
            { q: 'Main disadvantage of road transport?', a: 'Accidents, congestion and higher cost per tonne-kilometre over long distances.' },
            { q: 'Best mode for heavy bulk over long land distances?', a: 'Rail — cheap per tonne over long hauls, though routes are fixed.' },
            { q: 'Cheapest mode for very heavy cargo in foreign trade?', a: 'Water transport — ships carry huge bulk at the lowest cost, though slowly.' },
            { q: 'When is air transport the right choice?', a: 'For perishables, valuables and emergencies where speed outweighs high cost.' },
            { q: 'What moves through pipelines?', a: 'Liquids and gases such as crude oil and natural gas, continuously and safely.' },
            { q: 'Four factors in choosing a mode?', a: 'Cost, speed, safety, distance, nature of goods and reliability of the service.' },
            { q: 'Fresh flowers to Europe travel by…', a: 'Air, because perishing destroys value faster than freight costs accumulate.' },
            { q: 'Three traditional communication services?', a: 'Postal and courier services, telephone, and mass media like radio, TV and newspapers.' },
            { q: 'How does the internet aid commerce?', a: 'Email, e-banking and e-commerce move orders, payments and prices instantly across borders.' },
            { q: 'How does communication steady trade?', a: 'It removes uncertainty — prices, orders and confirmations travel in minutes, not weeks.' },
            { q: 'Crude oil from the Niger Delta moves mainly by…', a: 'Pipeline, the continuous low-risk carrier for liquids over land.' },
            { q: 'Why can transport enable large-scale production?', a: 'Producers can sell to distant markets, so factories can grow beyond local demand.' },
          ],
          quiz: [
            { q: 'Transport adds which utility?', options: ['time', 'place', 'form', 'possession'], correct: 1, exp: 'Goods gain usefulness by reaching the places consumers are.' },
            { q: 'Door-to-door flexibility is the hallmark of…', options: ['rail', 'road', 'pipeline', 'shipping'], correct: 1, exp: 'Road transport reaches exactly where rail lines and ports cannot.' },
            { q: 'Cheapest for heavy bulk in overseas trade is…', options: ['air', 'road', 'water', 'rail'], correct: 2, exp: 'Ships move enormous tonnage at the lowest cost per unit.' },
            { q: 'Perishable and urgent cargo goes by…', options: ['air', 'pipeline', 'water', 'cart'], correct: 0, exp: 'Speed preserves value that freight costs would otherwise destroy.' },
            { q: 'Liquids and gas move continuously via…', options: ['couriers', 'pipelines', 'railways', 'ferries'], correct: 1, exp: 'Pipelines flow crude and gas safely around the clock.' },
            { q: 'Rail\'s key disadvantage is…', options: ['slow loading only', 'fixed routes and terminals', 'no bulk capacity', 'door-to-door'], correct: 1, exp: 'Trains serve stations, not doorsteps; road completes the last mile.' },
            { q: 'Communication aids trade mainly by…', options: ['raising taxes', 'removing uncertainty with fast information', 'building roads', 'minting money'], correct: 1, exp: 'Instant prices, orders and payments let distant trade happen safely.' },
            { q: 'E-banking and e-commerce ride on…', options: ['the postal service', 'internet services', 'radio', 'couriers'], correct: 1, exp: 'Internet channels are the fastest-growing commerce infrastructure.' },
            { q: 'Moving goods from surplus to scarce areas helps…', options: ['raise all prices', 'stabilise prices', 'close markets', 'spoil goods'], correct: 1, exp: 'Supply follows scarcity, smoothing prices across regions.' },
            { q: 'Large-scale production depends on transport because…', options: ['factories need roofs', 'distant markets absorb large output', 'drivers need jobs', 'ports collect tax'], correct: 1, exp: 'Wide markets let producers scale beyond local demand.' },
          ]
        }
      ],
      SS3: [
        {
          title: 'The Capital Market: Securities & the Stock Exchange',
          tags: ['Stock exchange', 'Shares', 'Debentures'],
          summary: 'Where long-term money is raised and traded — securities, the Nigerian Exchange, and how the market feeds industry.',
          content: `
            <h3>1. What the capital market is</h3>
            <p>The <b>capital market</b> is where medium- and long-term funds are raised and traded: companies and governments issue <b>securities</b> (shares, debentures, bonds) to savers. The <b>primary market</b> issues new securities; the <b>secondary market</b> (the stock exchange) trades existing ones, giving investors an exit and prices a public home.</p>

            <h3>2. The securities</h3>
            <ul>
              <li><b>Ordinary shares (equity):</b> ownership, voting rights, dividends vary with profit, last in liquidation — highest risk, highest potential.</li>
              <li><b>Preference shares:</b> fixed dividend, priority over ordinary shares, usually no vote.</li>
              <li><b>Debentures:</b> loan certificates; holders are creditors paid fixed interest, often secured on assets.</li>
              <li><b>Government bonds/development stocks:</b> long-term borrowing by governments.</li>
            </ul>

            <h3>3. The Nigerian Exchange and its people</h3>
            <ul>
              <li>The <b>Nigerian Exchange Group (NGX)</b> runs the market; <b>SEC</b> regulates it.</li>
              <li><b>Issuing houses</b> bring new issues; <b>stockbrokers</b> trade for clients; <b>registrars</b> manage shareholder records.</li>
              <li><b>Depository and electronic settlement</b> now replace paper certificates.</li>
            </ul>

            <h3>4. Why the market matters (and its risks)</h3>
            <p>It channels savings into investment, lets governments fund projects, and provides <b>liquidity</b> and price discovery. Risks: price volatility, insider abuse and fraud — which is exactly what regulation targets. A <b>bull market</b> rises; a <b>bear market</b> falls.</p>
            <div class="worked"><b>Worked example:</b> Distinguish ordinary shares from debentures: (1) owner vs creditor; (2) dividend depends on profit vs interest is a fixed charge; (3) voting rights vs none; (4) paid last vs paid before shareholders in liquidation. Four clean contrasts — a classic full-mark answer.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling debenture holders owners — they are creditors.</li>
              <li>Confusing primary (new issues) with secondary (trading) markets.</li>
              <li>Thinking dividends are fixed for ordinary shares.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> securities questions are table questions. Memorise owner/creditor, return type, voting, and liquidation order for ordinary, preference and debentures — then any variant is copy-paste from memory.</div>
          `,
          cards: [
            { q: 'What is the capital market?', a: 'The market where medium- and long-term funds are raised and traded through securities like shares and bonds.' },
            { q: 'Primary versus secondary market?', a: 'Primary issues new securities; secondary trades existing ones on the stock exchange.' },
            { q: 'What do ordinary shares confer?', a: 'Ownership with voting rights and dividends that vary with profit; holders are paid last in liquidation.' },
            { q: 'Preference shares carry what?', a: 'A fixed dividend and priority over ordinary shares, usually without voting rights.' },
            { q: 'A debenture holder is a…', a: 'Creditor of the company, entitled to fixed interest, often secured on company assets.' },
            { q: 'Government long-term borrowing instruments are…', a: 'Bonds or development stocks issued to fund projects over many years.' },
            { q: 'Who regulates the Nigerian capital market?', a: 'The Securities and Exchange Commission, SEC.' },
            { q: 'The Nigerian market is run by…', a: 'The Nigerian Exchange Group, NGX, succeeding the old Lagos Stock Exchange.' },
            { q: 'What do stockbrokers do?', a: 'They buy and sell securities on the exchange for clients as licensed dealers.' },
            { q: 'Role of issuing houses?', a: 'They arrange and bring new share or bond issues to the primary market.' },
            { q: 'Why does the secondary market matter?', a: 'It gives investors liquidity and an exit, and sets public prices for securities.' },
            { q: 'Order of payment in liquidation?', a: 'Creditors including debenture holders first, then preference shareholders, ordinary shareholders last.' },
            { q: 'Bull versus bear market?', a: 'A bull market is rising and optimistic; a bear market is falling and pessimistic.' },
            { q: 'Two risks of the stock market?', a: 'Price volatility and abuses like insider trading or fraud, which regulation targets.' },
            { q: 'How does the market feed industry?', a: 'It channels the money of savers into company investment for expansion and projects.' },
          ],
          quiz: [
            { q: 'New securities are sold in the…', options: ['secondary market', 'primary market', 'money market', 'forex market'], correct: 1, exp: 'Primary = new issues; secondary = trading existing securities.' },
            { q: 'Owners of a company hold…', options: ['debentures', 'ordinary shares', 'bonds', 'treasury bills'], correct: 1, exp: 'Equity confers ownership; debentures and bonds are loans.' },
            { q: 'Fixed dividend with priority describes…', options: ['ordinary shares', 'preference shares', 'debentures', 'warrants'], correct: 1, exp: 'Preference shares rank above ordinary for dividends.' },
            { q: 'A debenture holder is…', options: ['an owner', 'a creditor', 'a regulator', 'a broker'], correct: 1, exp: 'Debentures are loan certificates paying fixed interest.' },
            { q: 'The Nigerian capital market regulator is…', options: ['CBN', 'SEC', 'NAICOM', 'NDIC'], correct: 1, exp: 'The Securities and Exchange Commission supervises the market.' },
            { q: 'Liquidity for investors is provided by the…', options: ['primary market', 'secondary market', 'issuing house', 'registrar'], correct: 1, exp: 'The exchange lets investors sell holdings at public prices.' },
            { q: 'In liquidation, ordinary shareholders are paid…', options: ['first', 'after creditors and preference holders', 'before debenture holders', 'always in full'], correct: 1, exp: 'Equity bears the residual risk — paid last, if anything remains.' },
            { q: 'A rising, optimistic market is a…', options: ['bear market', 'bull market', 'stagnant market', 'primary market'], correct: 1, exp: 'Bull = rising; bear = falling.' },
            { q: 'Licensed dealers trading for clients are…', options: ['registrars', 'stockbrokers', 'actuaries', 'auditors'], correct: 1, exp: 'Stockbrokers execute client orders on the exchange.' },
            { q: 'Ordinary share dividends…', options: ['are fixed by law', 'vary with profit', 'must be paid yearly', 'equal interest'], correct: 1, exp: 'Equity returns depend on profits and board decisions.' },
          ]
        },
        {
          title: 'Consumer Protection & Business Regulation in Nigeria',
          tags: ['NAFDAC', 'SON', 'FCCPC', 'Consumer rights'],
          summary: 'The agencies that keep markets honest — standards, food and drug safety, competition — and the rights every consumer holds.',
          content: `
            <h3>1. Why regulate business?</h3>
            <p>Markets fail when sellers exploit information gaps: fake drugs, adulterated food, short-weight scales, deceptive ads. Regulation protects <b>consumers</b>, keeps <b>competition fair</b>, and preserves <b>public health and safety</b> — while honest traders gain a level field.</p>

            <h3>2. The key agencies</h3>
            <ul>
              <li><b>SON</b> — Standards Organisation of Nigeria: sets and enforces product standards (the MANCOD regime), fights substandard goods.</li>
              <li><b>NAFDAC</b> — regulates food, drugs, cosmetics, chemicals and packaged water; registers products and raids fakes.</li>
              <li><b>FCCPC</b> — Federal Competition and Consumer Protection Commission: protects consumer rights and polices anti-competitive conduct.</li>
              <li><b>Others:</b> CBN (banks), NCC (telecoms), NAFDAC/SON raids often joint with police.</li>
            </ul>

            <h3>3. Consumer rights</h3>
            <ul>
              <li><b>Right to safety;</b> <b>right to information;</b> <b>right to choose;</b> <b>right to be heard.</b></li>
              <li><b>Right to redress</b> — refunds, repairs, compensation.</li>
              <li><b>Right to consumer education.</b></li>
            </ul>

            <h3>4. Consumer responsibilities</h3>
            <p>Read labels and expiry dates, demand receipts, report fakes, use goods as intended, and buy from legitimate outlets — rights work best with alert citizens.</p>
            <div class="worked"><b>Worked example:</b> "A student buys a sealed juice that smells foul." Apply the framework: violated rights — safety and information; agencies — NAFDAC (product safety) and FCCPC (complaint/redress); action — keep the receipt, report with batch number, seek refund. One scenario, three marks buckets.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Swapping SON and NAFDAC roles — standards vs food/drug safety.</li>
              <li>Forgetting FCCPC absorbed consumer protection from the old CPC.</li>
              <li>Listing rights without responsibilities in "discuss" questions.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> agency questions are won by ONE named function each: SON = standards; NAFDAC = food/drug registration and safety; FCCPC = competition and consumer redress. Add one real example (packaged water registration) and move on.</div>
          `,
          cards: [
            { q: 'Why regulate business?', a: 'To protect consumers from information gaps and fakes, keep competition fair, and safeguard public health.' },
            { q: 'What does SON do?', a: 'The Standards Organisation of Nigeria sets and enforces product standards and fights substandard goods.' },
            { q: 'What does NAFDAC regulate?', a: 'Food, drugs, cosmetics, chemicals and packaged water — registration, safety checks and anti-fake raids.' },
            { q: 'FCCPC stands for and does what?', a: 'Federal Competition and Consumer Protection Commission — consumer rights and fair competition enforcement.' },
            { q: 'Name four consumer rights.', a: 'Safety, information, choice, being heard, redress and consumer education.' },
            { q: 'Right to redress means…', a: 'Consumers can obtain refunds, repairs or compensation for faulty goods and poor service.' },
            { q: 'Three consumer responsibilities?', a: 'Read labels and expiry dates, demand receipts, report fakes and use goods as intended.' },
            { q: 'Which agency registers packaged water?', a: 'NAFDAC, whose registration number appears on compliant packs.' },
            { q: 'What is MANCOD?', a: 'SON\'s mandatory conformity certification scheme for regulated products entering the market.' },
            { q: 'Which body polices anti-competitive conduct?', a: 'The FCCPC, which also inherited consumer protection duties from the old CPC.' },
            { q: 'A foul sealed juice violates which rights?', a: 'The rights to safety and to information about what one consumes.' },
            { q: 'Where does a consumer seek redress nationally?', a: 'The FCCPC, plus sector regulators like NCC for telecoms or CBN for banking.' },
            { q: 'Why do honest traders support regulation?', a: 'It levels the field — fakes and cheats no longer undercut quality with dangerous goods.' },
            { q: 'Which agency oversees banks on consumer matters?', a: 'The Central Bank of Nigeria, CBN, for banking services and complaints.' },
            { q: 'Joint raids against fakes often involve…', a: 'NAFDAC or SON with the police, seizing and destroying counterfeit goods.' },
          ],
          quiz: [
            { q: 'Product standards in Nigeria are set by…', options: ['NAFDAC', 'SON', 'FIRS', 'NCC'], correct: 1, exp: 'The Standards Organisation of Nigeria owns standards and conformity.' },
            { q: 'Packaged water and drug safety belong to…', options: ['SON', 'NAFDAC', 'FCCPC', 'CBN'], correct: 1, exp: 'NAFDAC registers and polices food, drugs and related products.' },
            { q: 'Consumer redress and competition fall to…', options: ['FCCPC', 'SON', 'NAFDAC', 'NDLEA'], correct: 0, exp: 'The FCCPC enforces consumer rights and fair competition.' },
            { q: 'Which is a consumer RIGHT?', options: ['right to profit', 'right to safety', 'right to advertise', 'right to import'], correct: 1, exp: 'Safety, information, choice, being heard, redress and education are the core rights.' },
            { q: 'Right to redress includes…', options: ['free goods always', 'refunds, repairs or compensation', 'tax holidays', 'voting in companies'], correct: 1, exp: 'Faulty goods and poor service carry enforceable remedies.' },
            { q: 'A consumer responsibility is…', options: ['ignoring labels', 'reading expiry dates', 'buying from roadside fakes', 'discarding receipts'], correct: 1, exp: 'Alert habits make rights enforceable.' },
            { q: 'The old CPC\'s consumer role now sits with…', options: ['SON', 'FCCPC', 'NAFDAC', 'SEC'], correct: 1, exp: 'The FCCPC absorbed consumer protection when it was created.' },
            { q: 'Banking consumer complaints go to…', options: ['NCC', 'CBN', 'SON', 'FIRS'], correct: 1, exp: 'The CBN supervises banks and their customer practices.' },
            { q: 'Telecoms consumer issues belong to…', options: ['NCC', 'NAFDAC', 'CBN', 'SON'], correct: 0, exp: 'The Nigerian Communications Commission regulates telecom services.' },
            { q: 'Regulation helps honest traders by…', options: ['raising their taxes', 'levelling the competitive field', 'banning imports', 'fixing profits'], correct: 1, exp: 'Removing fakes stops dangerous goods undercutting quality sellers.' },
          ]
        },
        {
          title: 'International Trade: Documents, Procedures & Institutions',
          tags: ['Export', 'Import', 'Trade documents'],
          summary: 'The paperwork and players of cross-border trade — invoices, bills of lading, bills of exchange — plus the institutions that set the rules.',
          content: `
            <h3>1. Why documents matter</h3>
            <p>Goods cross borders long before payment settles; documents are the <b>evidence and control</b> of each step — what was shipped, who owns it, who pays whom. Banks, customs and insurers all trade in paper as much as goods.</p>

            <h3>2. The key documents</h3>
            <ul>
              <li><b>Commercial invoice:</b> the seller's bill stating goods, price and terms.</li>
              <li><b>Bill of lading:</b> the ship's receipt AND document of title — possession of it controls the cargo.</li>
              <li><b>Airway bill:</b> receipt for air cargo (not a document of title).</li>
              <li><b>Insurance policy/certificate:</b> evidence of cover for the voyage.</li>
              <li><b>Certificate of origin:</b> proves where goods were made (affects tariffs and quotas).</li>
              <li><b>Bill of exchange:</b> a written order to pay a sum at a date — the payment engine of trade.</li>
            </ul>

            <h3>3. Procedure in one sweep</h3>
            <p>Exporter obtains <b>export licence</b> where required → goods shipped and documents issued → exporter presents documents to bank (often under a <b>letter of credit</b>, where the importer's bank promises payment) → importer's bank releases documents against payment → customs clears goods with duty where due → goods delivered.</p>

            <h3>4. The institutions</h3>
            <ul>
              <li><b>WTO</b> — global trade rules and dispute settlement.</li>
              <li><b>IMF and World Bank</b> — balance-of-payments support and development finance.</li>
              <li><b>ECOWAS and AfCFTA</b> — regional integration and tariff reduction.</li>
              <li><b>Nigeria Customs Service</b> — duties, anti-smuggling, trade facilitation at the border.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "Why is the bill of lading so powerful?" Answer in three: (1) receipt — the carrier acknowledges the cargo; (2) evidence of the carriage contract; (3) document of title — whoever holds it (or its endorsed copy) controls the goods, so banks use it as security under letters of credit.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling the airway bill a document of title — it is not.</li>
              <li>Confusing letter of credit (bank promise) with bill of exchange (order to pay).</li>
              <li>Forgetting certificate of origin in tariff questions.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> documents questions love pairing: match each document to its ONE-line job. Drill the six pairs until instant — then the "procedure" question is just the documents in order.</div>
          `,
          cards: [
            { q: 'What does the commercial invoice state?', a: 'The seller\'s bill: goods supplied, prices and the trade terms agreed.' },
            { q: 'The bill of lading is what three things?', a: 'A receipt for cargo, evidence of the carriage contract, and a document of title to the goods.' },
            { q: 'Why is the bill of lading powerful?', a: 'Holding it controls the cargo, so banks accept it as security under letters of credit.' },
            { q: 'Is an airway bill a document of title?', a: 'No — it is a receipt for air cargo but does not confer title like a bill of lading.' },
            { q: 'What proves where goods were made?', a: 'The certificate of origin, which affects tariffs, quotas and trade agreements.' },
            { q: 'Define a bill of exchange.', a: 'A written order requiring the addressee to pay a stated sum at a stated time — trade\'s payment engine.' },
            { q: 'What is a letter of credit?', a: 'The importer\'s bank promise to pay the exporter on presentation of agreed documents.' },
            { q: 'Who clears goods and collects duty at the border?', a: 'The Nigeria Customs Service, which also fights smuggling and eases legitimate trade.' },
            { q: 'The WTO does what?', a: 'Sets global trade rules and settles disputes between member countries.' },
            { q: 'IMF and World Bank roles differ how?', a: 'The IMF supports balance of payments; the World Bank finances development projects.' },
            { q: 'ECOWAS and AfCFTA aim at what?', a: 'Regional integration — reducing tariffs and opening larger markets for members.' },
            { q: 'First step for a regulated export?', a: 'Obtaining the required export licence and completing export documentation.' },
            { q: 'Under a letter of credit, who promises payment?', a: 'The importer\'s bank, provided the exporter presents the agreed documents.' },
            { q: 'Documents pass to the importer when…', a: 'His bank releases them against payment or acceptance, per the agreed terms.' },
            { q: 'Why do insurers need voyage documents?', a: 'The policy and shipping papers evidence the risk and any claim on lost cargo.' },
          ],
          quiz: [
            { q: 'The ship\'s receipt and document of title is the…', options: ['invoice', 'bill of lading', 'airway bill', 'manifest'], correct: 1, exp: 'The bill of lading controls the cargo and doubles as receipt and contract evidence.' },
            { q: 'Which document is NOT a document of title?', options: ['bill of lading', 'airway bill', 'none — both are', 'delivery order'], correct: 1, exp: 'Airway bills are receipts only; title stays with the shipper\'s instructions.' },
            { q: 'Proof of where goods were made is the…', options: ['invoice', 'certificate of origin', 'policy', 'waybill'], correct: 1, exp: 'Origin certificates drive tariff and quota treatment.' },
            { q: 'A written order to pay a sum at a date is a…', options: ['letter of credit', 'bill of exchange', 'receipt', 'voucher'], correct: 1, exp: 'Bills of exchange are the classic payment instrument of trade.' },
            { q: 'The importer\'s bank promise to pay on documents is a…', options: ['bill of exchange', 'letter of credit', 'debenture', 'endorsement'], correct: 1, exp: 'Letters of credit shift payment risk onto the importer\'s bank.' },
            { q: 'Customs duties at the border are collected by…', options: ['FIRS', 'Nigeria Customs Service', 'CBN', 'SON'], correct: 1, exp: 'Customs administers duties and border control of goods.' },
            { q: 'Global trade rules and disputes belong to…', options: ['IMF', 'WTO', 'UN', 'OPEC'], correct: 1, exp: 'The World Trade Organization sets and enforces multilateral rules.' },
            { q: 'Balance-of-payments support comes from…', options: ['World Bank', 'IMF', 'WTO', 'ECOWAS'], correct: 1, exp: 'The IMF lends for external payment stability; the World Bank funds projects.' },
            { q: 'Reducing tariffs across Africa is the work of…', options: ['AfCFTA', 'NATO', 'OPEC', 'COMMONWEALTH'], correct: 0, exp: 'The African Continental Free Trade Area integrates the continent\'s markets.' },
            { q: 'Banks release shipping documents to the importer…', options: ['before payment always', 'against payment or acceptance', 'only after delivery', 'never'], correct: 1, exp: 'Documents move when payment or acceptance is made, per the credit terms.' },
          ]
        }
      ]

    },
    resources: [
      { cat: 'Past questions', title: 'Myschool — Commerce past questions', url: 'https://myschool.ng/classroom', note: 'Past WASSCE/UTME commerce questions.' },
      { cat: 'Reference', title: 'Wikipedia — Commerce', url: 'https://en.wikipedia.org/wiki/Commerce', note: 'Trade and its auxiliaries.' },
      { cat: 'Reference', title: 'Wikipedia — Chain of distribution', url: 'https://en.wikipedia.org/wiki/Distribution_(business)', note: 'Producer to consumer, and who sits between.' },
      { cat: 'Video lesson', title: 'WAEC Commerce revision videos', url: 'https://www.youtube.com/results?search_query=waec+commerce+revision', note: 'Units of business and trade explained.' }
    ]
  
};
