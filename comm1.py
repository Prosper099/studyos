# comm1.py — splice Commercial subjects (Economics, Commerce, Financial Accounting) SS1. RUN ONCE.
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

ECO = [
topic('What Economics Is: Scarcity, Choice & Opportunity Cost', ['Scarcity', 'Opportunity cost', 'Scale of preference', 'Micro vs macro'],
 'The economic problem in one breath: unlimited wants, limited resources — and the tools (choice, opportunity cost, scale of preference) we use to cope.',
 '''
            <h3>1. Definition and branches</h3>
            <p><b>Economics</b> is the social science that studies how people and societies allocate <b>scarce</b> resources among competing <b>unlimited</b> wants. Robbins&apos; classic definition: &apos;the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses.&apos;</p>
            <ul>
              <li><b>Microeconomics:</b> individual units — households, firms, markets, prices.</li>
              <li><b>Macroeconomics:</b> the whole economy — GDP, inflation, unemployment, fiscal and monetary policy.</li>
            </ul>

            <h3>2. The economic problem</h3>
            <ul>
              <li><b>Scarcity:</b> resources are limited relative to wants — the root of all economics.</li>
              <li><b>Choice:</b> because we cannot have all, we must pick — choice is scarcity&apos;s child.</li>
              <li><b>Scale of preference:</b> a ranked list of wants, most pressing first; it forces us to satisfy the top wants and see what is sacrificed.</li>
              <li><b>Opportunity cost:</b> the value of the <b>next best alternative forgone</b> — the real price of any choice.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> With N2,000 you rank: (1) textbook, (2) data bundle, (3) snack. You buy the textbook. Opportunity cost = the data bundle (next best), NOT data + snack. Opportunity cost is always ONE alternative — the next best.</div>
            <div class="formula">Watch out — TRAP: opportunity cost is the NEXT BEST alternative only — never the sum of all alternatives, and never measured in money alone.</div>

            <h3>3. Factors of production and reward</h3>
            <table>
              <tr><th>Factor</th><th>Reward</th></tr>
              <tr><td>Land (natural resources)</td><td>Rent</td></tr>
              <tr><td>Labour (human effort)</td><td>Wages/salaries</td></tr>
              <tr><td>Capital (man-made tools)</td><td>Interest</td></tr>
              <tr><td>Entrepreneurship (organisation &amp; risk)</td><td>Profit</td></tr>
            </table>

            <h3>4. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> The study of the whole economy is? <i>Ans: macroeconomics.</i></li>
              <li><b>Q2.</b> Reward for capital? <i>Ans: interest.</i></li>
              <li><b>Q3.</b> Scarcity means? <i>Ans: limited resources vs unlimited wants.</i></li>
            </ul>
            <div class="formula">SUMMARY: economics studies scarcity — unlimited wants against limited resources — through choice guided by a scale of preference, paying opportunity cost defined as the next-best alternative forgone; it splits into micro (firms, markets, prices) and macro (GDP, inflation, policy); and production combines land, labour, capital and entrepreneurship, rewarded with rent, wages, interest and profit.</div>
''',
 [('Economics is the study of', ['unlimited resources', 'allocating scarce resources among unlimited wants', 'money only', 'government only'], 1, 'Scarcity against unlimited wants is the core.'),
  ('Robbins defined economics as ends against', ['free gifts', 'scarce means with alternative uses', 'unlimited means', 'wants only'], 1, 'Scarce means with alternative uses.'),
  ('Microeconomics studies', ['the whole economy', 'individual units like firms and markets', 'inflation only', 'national income'], 1, 'Micro = individual units and markets.'),
  ('Which is a macro topic?', ['Price of one firm', 'National unemployment', 'A consumer&apos;s choice', 'One market&apos;s supply'], 1, 'Aggregates belong to macro.'),
  ('The root of the economic problem is', ['greed', 'scarcity', 'money', 'taxes'], 1, 'Limited resources vs unlimited wants.'),
  ('A scale of preference is', ['a shopping list unranked', 'wants ranked by priority', 'a budget law', 'a bank statement'], 1, 'Ranking wants forces rational choice.'),
  ('Opportunity cost is', ['all alternatives forgone', 'the next best alternative forgone', 'the money price', 'the cheapest option'], 1, 'Only the next best counts.'),
  ('You choose textbook over data and snack; opportunity cost is', ['data + snack', 'the data bundle', 'the snack', 'nothing'], 1, 'The next best alone — the data bundle.'),
  ('The reward for capital is', ['rent', 'interest', 'wages', 'profit'], 1, 'Capital earns interest.'),
  ('The reward for entrepreneurship is', ['rent', 'profit', 'wages', 'interest'], 1, 'Risk-bearing earns profit.')],
 [('Define economics.', 'The social science of allocating scarce resources among unlimited wants.'),
  ('Give Robbins&apos; definition.', 'The science of human behaviour as a relationship between ends and scarce means with alternative uses.'),
  ('What is microeconomics?', 'The study of individual units — households, firms, markets and prices.'),
  ('What is macroeconomics?', 'The study of the whole economy — GDP, inflation, unemployment, policy.'),
  ('What is scarcity?', 'Resources are limited relative to human wants.'),
  ('What is choice?', 'Selecting among alternatives because scarcity rules out having all.'),
  ('What is a scale of preference?', 'A ranked list of wants from most to least pressing.'),
  ('Define opportunity cost.', 'The value of the next best alternative forgone.'),
  ('Why is opportunity cost one alternative?', 'Because cost is what you would have done instead — the single next-best option.'),
  ('Name the four factors of production.', 'Land, labour, capital and entrepreneurship.'),
  ('Reward for land?', 'Rent.'),
  ('Reward for labour?', 'Wages and salaries.'),
  ('Reward for capital?', 'Interest.'),
  ('Reward for entrepreneurship?', 'Profit.'),
  ('Why does economics exist at all?', 'Because scarcity forces choice, and choice entails cost.')]),

topic('Economic Systems: Capitalism, Socialism & the Mixed Economy', ['Capitalism', 'Socialism', 'Mixed economy', 'Price mechanism'],
 'The three ways societies answer what, how and for whom to produce — and why Nigeria runs a mixed economy.',
 '''
            <h3>1. The three questions</h3>
            <p>Every society must answer: <b>what</b> to produce, <b>how</b> to produce, and <b>for whom</b> to produce. Economic systems are the different machinery for answering them.</p>

            <h3>2. Capitalism (market economy)</h3>
            <ul>
              <li>Private ownership of resources; decisions guided by the <b>price mechanism</b> (&apos;invisible hand&apos;, Adam Smith).</li>
              <li>Merits: efficiency, innovation, consumer choice, competition.</li>
              <li>Demerits: inequality, neglect of public goods, booms and slumps, possible exploitation.</li>
            </ul>

            <h3>3. Socialism (planned economy)</h3>
            <ul>
              <li>State ownership of major resources; central planning answers the three questions.</li>
              <li>Merits: reduced inequality, provision of essentials, stability of employment.</li>
              <li>Demerits: bureaucracy, shortages/surpluses, weak incentives, limited choice.</li>
            </ul>

            <h3>4. Mixed economy — Nigeria&apos;s system</h3>
            <ul>
              <li>Private enterprise and state activity coexist: private shops and banks beside NNPC, CBN regulation, subsidies, public schools.</li>
              <li>Government corrects market failure: regulation, taxation, public goods, safety nets.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Classify: (a) a Lagos trader setting prices by demand — capitalist mechanism; (b) federal budget fixing how much goes to health — planning element; (c) Nigeria overall — mixed economy, because both answer parts of the three questions.</div>
            <div class="formula">Watch out — TRAP: no pure capitalism or pure socialism exists today — every real economy is mixed; the systems are ideal ends of one spectrum.</div>

            <h3>5. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> The invisible hand is whose idea? <i>Ans: Adam Smith.</i></li>
              <li><b>Q2.</b> Which system relies on central planning? <i>Ans: socialism.</i></li>
              <li><b>Q3.</b> Nigeria&apos;s system? <i>Ans: mixed economy.</i></li>
            </ul>
            <div class="formula">SUMMARY: every society answers what, how and for whom to produce; capitalism leaves the answers to private owners and the price mechanism with efficiency and innovation but inequality; socialism hands them to the state with equity but bureaucracy and weak incentives; and Nigeria, like nearly every real economy, runs a mixed system where markets and government each answer part.</div>
''',
 [('The three economic questions are what, how and', ['when', 'for whom', 'where', 'why'], 1, 'What, how and for whom to produce.'),
  ('Capitalism is based on', ['state ownership', 'private ownership and the price mechanism', 'central planning', 'tradition'], 1, 'Private resources guided by prices.'),
  ('The invisible hand was described by', ['Marx', 'Adam Smith', 'Keynes', 'Robbins'], 1, 'Adam Smith&apos;s market metaphor.'),
  ('A merit of capitalism is', ['equal incomes', 'efficiency and innovation', 'no unemployment', 'free everything'], 1, 'Competition drives efficiency.'),
  ('A demerit of capitalism is', ['inequality and neglect of public goods', 'too much equality', 'no choice', 'shortages by plan'], 0, 'Markets can leave the poor and public goods behind.'),
  ('Socialism answers the three questions through', ['prices', 'central planning', 'custom', 'lottery'], 1, 'The state plans production.'),
  ('A demerit of socialism is', ['weak incentives and bureaucracy', 'excess competition', 'high inequality', 'too many choices'], 0, 'Planning can stall on red tape.'),
  ('Nigeria&apos;s economy is best described as', ['pure capitalist', 'pure socialist', 'mixed', 'traditional'], 2, 'Private enterprise plus state activity.'),
  ('NNPC and private banks coexisting shows', ['capitalism only', 'socialism only', 'a mixed economy', 'no system'], 2, 'State and private sectors side by side.'),
  ('Government regulates markets mainly to', ['kill profit', 'correct market failure', 'own everything', 'please nobody'], 1, 'Regulation fixes what markets miss.')],
 [('Name the three economic questions.', 'What to produce, how to produce, and for whom to produce.'),
  ('What is capitalism?', 'An economic system of private ownership guided by the price mechanism.'),
  ('What is the price mechanism?', 'Prices and profits signalling what and how much to produce — the invisible hand.'),
  ('Who coined the invisible hand?', 'Adam Smith.'),
  ('Give two merits of capitalism.', 'Efficiency, innovation, consumer choice, competition.'),
  ('Give two demerits of capitalism.', 'Inequality, neglect of public goods, booms and slumps.'),
  ('What is socialism?', 'A system where the state owns major resources and plans the economy.'),
  ('Give two merits of socialism.', 'Reduced inequality, provision of essentials, stable employment.'),
  ('Give two demerits of socialism.', 'Bureaucracy, shortages, weak incentives, limited choice.'),
  ('What is a mixed economy?', 'A system combining private enterprise and government activity.'),
  ('What system does Nigeria run?', 'A mixed economy.'),
  ('Give one Nigerian state enterprise.', 'NNPC (or NNPCL), Federal Medical Centres, public schools.'),
  ('Why does government regulate markets?', 'To correct market failure — public goods, externalities, exploitation.'),
  ('Do pure systems exist today?', 'No — real economies all lie on a spectrum; all are mixed.'),
  ('Which system answers questions by tradition?', 'Traditional economy — custom decides, not price or plan.')]),
]

COM = [
topic('Commerce: Meaning, Scope & Production', ['Trade', 'Aids to trade', 'Production types', 'Chain of distribution'],
 'What commerce covers, how it links producer to consumer, and the production it serves.',
 '''
            <h3>1. What commerce is</h3>
            <p><b>Commerce</b> is the branch of business activity concerned with the <b>exchange of goods and services</b> and with removing the hindrances that exchange faces — from producer to final consumer.</p>
            <ul>
              <li><b>Trade:</b> buying and selling — home (internal) and foreign (import/export/entrepot).</li>
              <li><b>Aids to trade (auxiliaries):</b> transport (place hindrance), warehousing (time hindrance), banking &amp; finance (capital hindrance), insurance (risk hindrance), advertising (information hindrance), communication (contact hindrance).</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Commerce structure: trade at the centre with aids to trade surrounding it">\n              <rect x="8" y="8" width="444" height="134" rx="10" fill="#eff6ff" stroke="#1e40af" stroke-width="2"/>\n              <rect x="180" y="52" width="100" height="46" rx="10" fill="#2563eb"/><text x="230" y="80" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">TRADE</text>\n              <g font-size="9.5" font-weight="700" fill="#1e3a8a">\n                <rect x="24" y="20" width="86" height="26" rx="8" fill="#dbeafe"/><text x="67" y="37" text-anchor="middle">Transport</text>\n                <rect x="120" y="20" width="86" height="26" rx="8" fill="#dbeafe"/><text x="163" y="37" text-anchor="middle">Warehousing</text>\n                <rect x="216" y="20" width="86" height="26" rx="8" fill="#dbeafe"/><text x="259" y="37" text-anchor="middle">Banking</text>\n                <rect x="312" y="20" width="86" height="26" rx="8" fill="#dbeafe"/><text x="355" y="37" text-anchor="middle">Insurance</text>\n                <rect x="70" y="106" width="96" height="26" rx="8" fill="#dbeafe"/><text x="118" y="123" text-anchor="middle">Advertising</text>\n                <rect x="288" y="106" width="96" height="26" rx="8" fill="#dbeafe"/><text x="336" y="123" text-anchor="middle">Communication</text>\n              </g>\n            </svg></div>

            <h3>2. Production and its types</h3>
            <ul>
              <li><b>Production:</b> creation of goods and services (utility). Extractive (mining, fishing), manufacturing (processing), constructive (building), tertiary/services (teaching, banking).</li>
              <li><b>Chain of distribution:</b> producer → wholesaler → retailer → consumer.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Match aid to hindrance: transport removes PLACE (goods must move); warehousing removes TIME (goods wait for demand); insurance removes RISK (fire, theft); banking removes CAPITAL (money to trade); advertising removes INFORMATION (nobody knows the product).</div>
            <div class="formula">Watch out — TRAP: commerce ≠ trade. Trade is ONE branch; commerce = trade + aids to trade.</div>

            <h3>3. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Buying and selling across borders is? <i>Ans: foreign trade.</i></li>
              <li><b>Q2.</b> Which aid removes risk? <i>Ans: insurance.</i></li>
              <li><b>Q3.</b> Producer → ? → retailer → consumer. <i>Ans: wholesaler.</i></li>
            </ul>
            <div class="formula">SUMMARY: commerce is exchange plus the removal of exchange&apos;s hindrances: trade (home and foreign) sits at the centre, ringed by aids to trade — transport, warehousing, banking, insurance, advertising and communication — each killing one hindrance of place, time, capital, risk or information; it serves production (extractive, manufacturing, constructive, services) and moves goods down the chain producer–wholesaler–retailer–consumer.</div>
''',
 [('Commerce is concerned with', ['production only', 'exchange of goods and services and removing its hindrances', 'farming only', 'taxation'], 1, 'Exchange plus hindrance removal.'),
  ('Buying and selling within the country is', ['foreign trade', 'home trade', 'entrepot', 'barter'], 1, 'Internal/home trade.'),
  ('Import, export and entrepot make up', ['home trade', 'foreign trade', 'retail', 'wholesale'], 1, 'Foreign trade&apos;s three forms.'),
  ('Which aid removes the place hindrance?', ['Insurance', 'Transport', 'Advertising', 'Banking'], 1, 'Goods must travel.'),
  ('Warehousing removes which hindrance?', ['Time', 'Risk', 'Capital', 'Information'], 0, 'Goods wait safely for demand.'),
  ('Insurance removes', ['risk', 'place', 'time', 'contact'], 0, 'It spreads fire, theft and loss risks.'),
  ('Banking and finance remove the hindrance of', ['capital', 'place', 'time', 'weight'], 0, 'Money to trade with.'),
  ('Production that mines or fishes is', ['manufacturing', 'extractive', 'constructive', 'tertiary'], 1, 'Extractive draws from nature.'),
  ('The chain of distribution runs producer → wholesaler →', ['factory', 'retailer → consumer', 'bank', 'exporter'], 1, 'Wholesaler, retailer, consumer.'),
  ('Teaching and banking are which production type?', ['Extractive', 'Constructive', 'Tertiary/services', 'Manufacturing'], 2, 'Services are tertiary production.')],
 [('Define commerce.', 'The business activity of exchanging goods and services and removing the hindrances to exchange.'),
  ('Commerce equals trade plus what?', 'Aids to trade (auxiliaries).'),
  ('Name four aids to trade.', 'Transport, warehousing, banking/finance, insurance, advertising, communication.'),
  ('What is home trade?', 'Buying and selling within one country.'),
  ('What is foreign trade?', 'Trade across borders — import, export and entrepot.'),
  ('What is entrepot trade?', 'Importing goods to re-export them.'),
  ('Which hindrance does transport remove?', 'Place.'),
  ('Which hindrance does warehousing remove?', 'Time.'),
  ('Which hindrance does insurance remove?', 'Risk.'),
  ('Which hindrance does banking remove?', 'Capital/finance.'),
  ('Which hindrance does advertising remove?', 'Information/awareness.'),
  ('What is production?', 'The creation of goods and services — utility.'),
  ('Name the four production types.', 'Extractive, manufacturing, constructive and tertiary/services.'),
  ('Give the chain of distribution.', 'Producer to wholesaler to retailer to consumer.'),
  ('Is a teacher a producer?', 'Yes — services are tertiary production.')]),

topic('Units of Business Organisation', ['Sole proprietorship', 'Partnership', 'Cooperative', 'Limited companies'],
 'From one-person shops to public companies — the forms a business can take, with their pros, cons and key terms.',
 '''
            <h3>1. Sole proprietorship</h3>
            <ul>
              <li>One owner; <b>unlimited liability</b>; no separate legal personality; easy to start; profits all yours; decisions fast.</li>
              <li>Weaknesses: limited capital, bears all risk, continuity ends with the owner.</li>
            </ul>

            <h3>2. Partnership</h3>
            <ul>
              <li>2–20 persons (general rule; professions may exceed); governed by a <b>partnership deed</b>; most partners have unlimited liability.</li>
              <li>Types of partner: active, sleeping/dormant, limited (in limited partnerships).</li>
              <li>More capital and brains than sole trade; but disagreements and unlimited liability bite.</li>
            </ul>

            <h3>3. Cooperative society</h3>
            <ul>
              <li>Voluntary association of persons with common economic needs; open membership; democratic control — <b>one member, one vote</b>; surplus shared as patronage dividends.</li>
            </ul>

            <h3>4. Limited liability companies</h3>
            <ul>
              <li><b>Separate legal personality;</b> <b>limited liability</b>; <b>perpetual succession</b> (death of a member doesn&apos;t kill it).</li>
              <li>Private (min 2, max 50; cannot invite the public to buy shares) vs Public (min 2, no max; may list shares on the stock exchange).</li>
              <li>Documents: <b>Memorandum of Association</b> (external relations) and <b>Articles of Association</b> (internal rules).</li>
              <li>Public companies raise big capital but face heavy regulation and slower decisions.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Mama Nkechi&apos; buka = sole proprietorship (one owner, unlimited liability). Nkechi + two sisters with a deed = partnership. Their village savings group with one-member-one-vote = cooperative. If they incorporate &apos;Nkechi Foods Ltd&apos; = private limited company — limited liability, separate legal person.</div>
            <div class="formula">Watch out — TRAP: unlimited liability means the owner&apos;s PERSONAL assets can pay business debts; limited liability caps loss at the amount invested.</div>

            <h3>5. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> One-member-one-vote belongs to? <i>Ans: cooperatives.</i></li>
              <li><b>Q2.</b> Which can sell shares to the public? <i>Ans: public limited company.</i></li>
              <li><b>Q3.</b> Death of a shareholder doesn&apos;t end the company because of? <i>Ans: perpetual succession.</i></li>
            </ul>
            <div class="formula">SUMMARY: businesses organise as sole proprietorships (one owner, unlimited liability, fast but small), partnerships (2–20, deed, shared brains and unlimited liability), cooperatives (one member one vote, patronage refunds) or limited companies (separate legal personality, limited liability, perpetual succession; private capped at 50 and closed to the public, public open to the stock exchange) — each trading freedom against capital and risk.</div>
''',
 [('A one-owner business with unlimited liability is a', ['partnership', 'sole proprietorship', 'cooperative', 'public company'], 1, 'One owner, all risk.'),
  ('Unlimited liability means', ['loss is capped', 'personal assets can pay business debts', 'no debts ever', 'the state pays'], 1, 'No wall between personal and business wealth.'),
  ('A partnership usually has how many persons?', ['1–5', '2–20', '50–100', '2–500'], 1, 'General rule 2 to 20.'),
  ('The document governing a partnership is the', ['articles', 'deed', 'prospectus', 'charter'], 1, 'The partnership deed.'),
  ('A partner who invests but takes no part is', ['active', 'sleeping/dormant', 'general', 'managing'], 1, 'The sleeping partner.'),
  ('Cooperatives vote by', ['one share one vote', 'one member one vote', 'wealth', 'age'], 1, 'Democratic control.'),
  ('A limited company is a', ['natural person', 'separate legal person', 'partnership', 'charity'], 1, 'It sues and is sued in its own name.'),
  ('Perpetual succession means', ['the company never makes losses', 'death of a member does not end it', 'directors rule forever', 'shares never change hands'], 1, 'The company outlives its members.'),
  ('A private company&apos;s membership is capped at', ['2', '50', '100', 'no cap'], 1, 'Fifty, excluding employees.'),
  ('Which may invite the public to buy shares?', ['Private company', 'Public company', 'Sole trader', 'Partnership'], 1, 'Only public companies list to the public.')],
 [('What is a sole proprietorship?', 'A business owned by one person with unlimited liability.'),
  ('Give two merits of sole proprietorship.', 'Easy to start, quick decisions, all profits to the owner.'),
  ('Give two demerits of sole proprietorship.', 'Limited capital, unlimited liability, no continuity at death.'),
  ('What is a partnership?', 'A business of 2 to 20 persons governed by a deed.'),
  ('What is a partnership deed?', 'The written agreement regulating the partnership.'),
  ('What is a sleeping partner?', 'One who contributes capital but takes no active part.'),
  ('What is a cooperative society?', 'A voluntary association of common economic need, one member one vote.'),
  ('How is cooperative surplus shared?', 'As patronage dividends based on use.'),
  ('Name three features of a limited company.', 'Separate legal personality, limited liability, perpetual succession.'),
  ('Private vs public company membership?', 'Private: 2 to 50, no public shares; public: 2 upward, may list publicly.'),
  ('What is the Memorandum of Association?', 'The document defining the company&apos;s external relations and powers.'),
  ('What are Articles of Association?', 'The internal rules of the company.'),
  ('Define limited liability.', 'Loss is capped at the amount invested in the company.'),
  ('Define perpetual succession.', 'The company continues despite changes in membership or death.'),
  ('Which form raises the most capital?', 'The public limited company, via the stock exchange.')]),
]

ACC = [
topic('Introduction to Accounting & the Accounting Equation', ['Double entry', 'Assets = Capital + Liabilities', 'Users of accounts'],
 'What accounting does, who uses it, the double-entry idea and the equation everything balances on.',
 '''
            <h3>1. What accounting is and who uses it</h3>
            <p><b>Accounting</b> is the systematic recording, classification, summarising and interpretation of financial transactions to help decision-making.</p>
            <ul>
              <li><b>Users:</b> owners/managers (performance), investors (should we buy?), creditors (can they pay?), government (tax), employees (job security), the public.</li>
              <li>Bookkeeping is the recording part; accounting adds interpretation.</li>
            </ul>

            <h3>2. Key terms</h3>
            <ul>
              <li><b>Asset:</b> what the business owns (cash, stock, vehicles, premises).</li>
              <li><b>Liability:</b> what it owes outsiders (creditors, loans).</li>
              <li><b>Capital:</b> the owner&apos;s stake — what the business owes the owner.</li>
              <li><b>Debtor:</b> owes us; <b>creditor:</b> we owe.</li>
            </ul>

            <h3>3. The accounting equation and double entry</h3>
            <div class="formula">Assets = Capital + Liabilities</div>
            <p>Every transaction has a <b>dual aspect</b> — it touches at least two accounts so the equation stays balanced; this is the <b>double entry</b> system (every debit has an equal credit).</p>
            <div class="worked"><b>Worked example:</b> Start with N100,000 cash capital: Assets (cash 100k) = Capital 100k + Liabilities 0. Now buy N20,000 of goods ON CREDIT: stock +20k (asset) and creditor +20k (liability); cash does not move. New position: Assets (cash 100k + stock 20k = 120k) = Capital 100k + Liabilities 20k. The scale still balances — that is double entry doing its job.</div>
            <div class="formula">Watch out — TRAP: buying on CREDIT does not touch cash. Students always reduce cash when no cash moved.</div>

            <h3>4. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> A debtor is someone who? <i>Ans: owes the business money.</i></li>
              <li><b>Q2.</b> The owner&apos;s stake is called? <i>Ans: capital.</i></li>
              <li><b>Q3.</b> Assets 500k, liabilities 200k → capital? <i>Ans: 300k.</i></li>
            </ul>
            <div class="formula">SUMMARY: accounting records, classifies, summarises and interprets money transactions for owners, investors, creditors, government and employees; it speaks in assets (owned), liabilities (owed) and capital (owner&apos;s stake), bound forever by Assets = Capital + Liabilities, with every transaction entering twice — double entry keeping the equation balanced like a scale.</div>
''',
 [('Accounting is best described as', ['counting money', 'recording, summarising and interpreting financial transactions', 'auditing only', 'tax calculation'], 1, 'Recording plus interpretation for decisions.'),
  ('Which user checks whether to buy shares?', ['Government', 'Investors', 'Employees', 'Customers'], 1, 'Investors use accounts to value the business.'),
  ('Bookkeeping differs from accounting because bookkeeping', ['interprets', 'only records transactions', 'audits', 'taxes'], 1, 'Accounting adds analysis to recording.'),
  ('An asset is', ['what the business owes', 'what the business owns', 'the owner&apos;s salary', 'a loss'], 1, 'Cash, stock, vehicles, premises.'),
  ('A liability is', ['what the business owns', 'what it owes outsiders', 'profit', 'capital'], 1, 'Debts to outsiders.'),
  ('The owner&apos;s stake is', ['liability', 'capital', 'debtor', 'expense'], 1, 'Capital is owed to the owner.'),
  ('A debtor', ['owes the business', 'is owed by the business', 'sells goods', 'audits'], 0, 'Debtors owe us money.'),
  ('The accounting equation is', ['Assets = Capital − Liabilities', 'Assets = Capital + Liabilities', 'Capital = Assets + Liabilities', 'Assets + Capital = Liabilities'], 1, 'Assets equal capital plus liabilities.'),
  ('Assets 500k, liabilities 200k; capital is', ['700k', '300k', '200k', '500k'], 1, 'Capital = 500k − 200k = 300k.'),
  ('Double entry means', ['writing twice for safety', 'every debit has an equal credit', 'two accountants', 'two books'], 1, 'The dual aspect of each transaction.')],
 [('Define accounting.', 'The systematic recording, classification, summarising and interpretation of financial transactions.'),
  ('Name three users of accounts.', 'Owners/managers, investors, creditors, government, employees.'),
  ('What is bookkeeping?', 'The recording stage of accounting.'),
  ('What is an asset?', 'Anything the business owns — cash, stock, vehicles, premises.'),
  ('What is a liability?', 'What the business owes outsiders.'),
  ('What is capital?', 'The owner&apos;s stake in the business.'),
  ('Who is a debtor?', 'A person who owes the business money.'),
  ('Who is a creditor?', 'A person the business owes.'),
  ('State the accounting equation.', 'Assets = Capital + Liabilities.'),
  ('Capital 80k, liabilities 20k → assets?', '100k.'),
  ('What is double entry?', 'Recording each transaction in two accounts so debits equal credits.'),
  ('Why does the equation always balance?', 'Because every transaction has a dual aspect entered twice.'),
  ('Buying goods on credit affects which items?', 'Adds stock (asset) and a creditor (liability); cash untouched.'),
  ('Assets 1m, capital 600k → liabilities?', '400k.'),
  ('Accounting helps decisions how?', 'By turning raw transactions into interpreted performance information.')]),

topic('Source Documents & Books of Original Entry', ['Invoice & receipt', 'Credit note', 'Journals', 'Cash book'],
 'The paper trail of a business — every document from invoice to voucher, and the books where transactions first land.',
 '''
            <h3>1. Source documents</h3>
            <table>
              <tr><th>Document</th><th>Purpose</th></tr>
              <tr><td>Invoice</td><td>seller&apos;s bill listing goods, prices and terms</td></tr>
              <tr><td>Receipt</td><td>proof of payment</td></tr>
              <tr><td>Credit note</td><td>corrects overcharges or accepts returned goods</td></tr>
              <tr><td>Debit note</td><td>corrects undercharges</td></tr>
              <tr><td>Voucher</td><td>supports a payment/expense</td></tr>
              <tr><td>Petty cash voucher</td><td>supports small payments</td></tr>
            </table>

            <h3>2. Books of original entry (subsidiary books)</h3>
            <ul>
              <li><b>Sales day book:</b> credit sales. <b>Purchases day book:</b> credit purchases.</li>
              <li><b>Sales returns book</b> (returns inwards) and <b>purchases returns book</b> (returns outwards).</li>
              <li><b>Cash book:</b> cash and bank transactions; may add discount, cash and bank columns (three-column).</li>
              <li><b>Petty cash book:</b> small payments, often on the <b>imprest system</b> — a fixed float restored each period.</li>
              <li><b>The journal:</b> transactions that fit nowhere else (opening entries, corrections, asset purchases on credit).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Where does each first land? Sold goods on credit → sales day book. Bought a machine on credit → journal (not a resale good). Paid N500 for tea → petty cash book. Customer paid by cheque → cash book (bank column). Returned damaged goods we bought → purchases returns book.</div>
            <div class="formula">Watch out — TRAP: CASH sales never touch the sales day book — only CREDIT sales do; cash sales go straight to the cash book.</div>

            <h3>3. From books to ledger (preview)</h3>
            <p>Entries are later <b>posted</b> to ledger accounts, and the trial balance tests the arithmetic. That is next topic&apos;s territory — for now know the flow: source document → book of original entry → ledger → trial balance → final accounts.</p>

            <h3>4. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Proof of payment? <i>Ans: receipt.</i></li>
              <li><b>Q2.</b> Credit sales are first recorded in? <i>Ans: sales day book.</i></li>
              <li><b>Q3.</b> The imprest system applies to? <i>Ans: petty cash.</i></li>
            </ul>
            <div class="formula">SUMMARY: every entry begins life as a source document — invoice, receipt, credit/debit note, voucher — then lands in its book of original entry: sales and purchases day books for credit trade, returns books for goods sent back or returned, the cash book for money and bank, the petty cash book on imprest for small sums, and the journal for odd jobs; from there the flow runs on to ledger, trial balance and final accounts.</div>
''',
 [('The seller&apos;s bill listing goods and prices is the', ['receipt', 'invoice', 'voucher', 'cheque'], 1, 'The invoice starts the paper trail.'),
  ('Proof of payment is the', ['invoice', 'receipt', 'debit note', 'journal'], 1, 'Receipts acknowledge payment.'),
  ('Returned goods from a customer are corrected with a', ['debit note', 'credit note', 'voucher', 'invoice'], 1, 'Credit notes fix overcharges and returns.'),
  ('A debit note corrects', ['overcharges', 'undercharges', 'payments', 'wages'], 1, 'We billed too little — debit note.'),
  ('Credit sales are first recorded in the', ['cash book', 'sales day book', 'petty cash book', 'journal'], 1, 'Day books hold credit trade.'),
  ('Cash sales are recorded in the', ['sales day book', 'cash book', 'purchases book', 'journal'], 1, 'Money goes straight to the cash book.'),
  ('Bought a machine on credit: first book is the', ['purchases day book', 'journal', 'cash book', 'sales book'], 1, 'Assets on credit bypass the purchases day book.'),
  ('Small office payments live in the', ['cash book', 'petty cash book', 'sales book', 'journal'], 1, 'Petty cash handles small sums.'),
  ('The imprest system means', ['unlimited cash', 'a fixed float restored each period', 'no records', 'monthly audits'], 1, 'The float is topped back to a fixed sum.'),
  ('The correct flow is document → original entry →', ['trial balance → ledger', 'ledger → trial balance → final accounts', 'final accounts → ledger', 'cash book → invoice'], 1, 'Ledger, trial balance, final accounts.')],
 [('What is an invoice?', 'The seller&apos;s bill listing goods, prices and terms of sale.'),
  ('What is a receipt?', 'Written proof that payment was made.'),
  ('What is a credit note used for?', 'Correcting overcharges or accepting returned goods.'),
  ('What is a debit note used for?', 'Correcting undercharges.'),
  ('What is a voucher?', 'A document supporting a payment or expense.'),
  ('What does the sales day book record?', 'Credit sales only.'),
  ('What does the purchases day book record?', 'Credit purchases only.'),
  ('Where do cash sales go?', 'Straight into the cash book.'),
  ('What is a three-column cash book?', 'A cash book with cash, bank and discount columns.'),
  ('What is the petty cash book?', 'The book for small payments, often on imprest.'),
  ('Explain the imprest system.', 'A fixed float is given and restored to the same amount each period.'),
  ('What is the journal for?', 'Transactions fitting no other book — openings, corrections, credit asset purchases.'),
  ('Why do bought machines on credit go to the journal?', 'They are not stock for resale, so not the purchases day book.'),
  ('What is posting?', 'Transferring entries from original books to ledger accounts.'),
  ('Give the accounting flow.', 'Source document to original entry to ledger to trial balance to final accounts.')]),
]

def subj(name, color, icon, blurb, topics, resources):
    r = ',\n      '.join("{ cat: %r, title: %r, url: %r, note: %r }" % tuple(x) for x in resources)
    return ("""  '%s': {
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
""" % (name, color, icon, blurb, '\n'.join(topics), r))

blocks = ''
blocks += subj('Economics', 'cyan', '📈', 'Scarcity, markets, systems and the Nigerian economy — UTME&apos;s favourite social science.', ECO, [
 ('Structured course', 'Khan Academy — Economics', 'https://www.khanacademy.org/economics-finance-domain', 'Micro and macro fundamentals with practice.'),
 ('Past questions', 'Myschool — Economics past questions', 'https://myschool.ng/classroom', 'Past WASSCE/UTME economics objectives and theory.'),
 ('Reference', 'Wikipedia — Opportunity cost', 'https://en.wikipedia.org/wiki/Opportunity_cost', 'The next-best-alternative idea, fully explained.'),
 ('Video lesson', 'WAEC Economics revision videos', 'https://www.youtube.com/results?search_query=waec+economics+revision+nigeria', 'Demand, supply and systems in plain English.')])
blocks += subj('Commerce', 'blue', '🛒', 'Trade, aids to trade and business organisation — the commercial student&apos;s backbone.', COM, [
 ('Past questions', 'Myschool — Commerce past questions', 'https://myschool.ng/classroom', 'Past WASSCE/UTME commerce questions.'),
 ('Reference', 'Wikipedia — Commerce', 'https://en.wikipedia.org/wiki/Commerce', 'Trade and its auxiliaries.'),
 ('Reference', 'Wikipedia — Chain of distribution', 'https://en.wikipedia.org/wiki/Distribution_(business)', 'Producer to consumer, and who sits between.'),
 ('Video lesson', 'WAEC Commerce revision videos', 'https://www.youtube.com/results?search_query=waec+commerce+revision', 'Units of business and trade explained.')])
blocks += subj('Financial Accounting', 'green', '🧾', 'Double entry, books of account and final accounts — the skill that pays bills.', ACC, [
 ('Past questions', 'Myschool — Financial Accounting past questions', 'https://myschool.ng/classroom', 'Past WASSCE/UTME accounting objectives and problems.'),
 ('Reference', 'Wikipedia — Double-entry bookkeeping', 'https://en.wikipedia.org/wiki/Double-entry_bookkeeping', 'Why every debit has a credit.'),
 ('Structured course', 'Khan Academy — Accounting', 'https://www.khanacademy.org/college-careers-more/finance-capital-markets', 'The accounting equation and statements, gently.'),
 ('Video lesson', 'WAEC Financial Accounting revision', 'https://www.youtube.com/results?search_query=waec+financial+accounting+revision', 'Journals, ledgers and trial balances.')])

anchor = "const LEVEL_CATALOGUE = {"
i = s.rindex('};', 0, s.index(anchor))
ins = s.rindex('  },', 0, i) + len('  },')
s = s[:ins] + '\n' + blocks + s[ins:]

s = s.replace("SS1:  ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology', 'Government', 'Literature in English', 'History']",
              "SS1:  ['Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology', 'Government', 'Literature in English', 'History', 'Economics', 'Commerce', 'Financial Accounting']")

open(path, 'w', encoding='utf-8').write(s)
for t in ['What Economics Is: Scarcity, Choice & Opportunity Cost', 'Commerce: Meaning, Scope & Production', 'Source Documents & Books of Original Entry']:
    print(t, '->', 'OK' if s.find("title: '" + t + "'") > 0 else 'MISSING')
