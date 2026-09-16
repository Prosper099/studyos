export default {

    color: 'cyan', icon: '📈', blurb: 'Scarcity, markets, systems and the Nigerian economy — UTME&apos;s favourite social science.',
    topics: {
      SS1: [
        {
          title: 'What Economics Is: Scarcity, Choice & Opportunity Cost',
          tags: ['Scarcity', 'Opportunity cost', 'Scale of preference', 'Micro vs macro'],
          summary: 'The economic problem in one breath: unlimited wants, limited resources — and the tools (choice, opportunity cost, scale of preference) we use to cope.',
          content: `

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
          `,
          quiz: [
            { q: 'Economics is the study of', options: ['unlimited resources', 'allocating scarce resources among unlimited wants', 'money only', 'government only'], correct: 1, exp: 'Scarcity against unlimited wants is the core.' },
            { q: 'Robbins defined economics as ends against', options: ['free gifts', 'scarce means with alternative uses', 'unlimited means', 'wants only'], correct: 1, exp: 'Scarce means with alternative uses.' },
            { q: 'Microeconomics studies', options: ['the whole economy', 'individual units like firms and markets', 'inflation only', 'national income'], correct: 1, exp: 'Micro = individual units and markets.' },
            { q: 'Which is a macro topic?', options: ['Price of one firm', 'National unemployment', 'A consumer&apos;s choice', 'One market&apos;s supply'], correct: 1, exp: 'Aggregates belong to macro.' },
            { q: 'The root of the economic problem is', options: ['greed', 'scarcity', 'money', 'taxes'], correct: 1, exp: 'Limited resources vs unlimited wants.' },
            { q: 'A scale of preference is', options: ['a shopping list unranked', 'wants ranked by priority', 'a budget law', 'a bank statement'], correct: 1, exp: 'Ranking wants forces rational choice.' },
            { q: 'Opportunity cost is', options: ['all alternatives forgone', 'the next best alternative forgone', 'the money price', 'the cheapest option'], correct: 1, exp: 'Only the next best counts.' },
            { q: 'You choose textbook over data and snack; opportunity cost is', options: ['data + snack', 'the data bundle', 'the snack', 'nothing'], correct: 1, exp: 'The next best alone — the data bundle.' },
            { q: 'The reward for capital is', options: ['rent', 'interest', 'wages', 'profit'], correct: 1, exp: 'Capital earns interest.' },
            { q: 'The reward for entrepreneurship is', options: ['rent', 'profit', 'wages', 'interest'], correct: 1, exp: 'Risk-bearing earns profit.' }
          ],
          cards: [
            { q: 'Define economics.', a: 'The social science of allocating scarce resources among unlimited wants.' },
            { q: 'Give Robbins&apos; definition.', a: 'The science of human behaviour as a relationship between ends and scarce means with alternative uses.' },
            { q: 'What is microeconomics?', a: 'The study of individual units — households, firms, markets and prices.' },
            { q: 'What is macroeconomics?', a: 'The study of the whole economy — GDP, inflation, unemployment, policy.' },
            { q: 'What is scarcity?', a: 'Resources are limited relative to human wants.' },
            { q: 'What is choice?', a: 'Selecting among alternatives because scarcity rules out having all.' },
            { q: 'What is a scale of preference?', a: 'A ranked list of wants from most to least pressing.' },
            { q: 'Define opportunity cost.', a: 'The value of the next best alternative forgone.' },
            { q: 'Why is opportunity cost one alternative?', a: 'Because cost is what you would have done instead — the single next-best option.' },
            { q: 'Name the four factors of production.', a: 'Land, labour, capital and entrepreneurship.' },
            { q: 'Reward for land?', a: 'Rent.' },
            { q: 'Reward for labour?', a: 'Wages and salaries.' },
            { q: 'Reward for capital?', a: 'Interest.' },
            { q: 'Reward for entrepreneurship?', a: 'Profit.' },
            { q: 'Why does economics exist at all?', a: 'Because scarcity forces choice, and choice entails cost.' }
          ],
        },
        {
          title: 'Economic Systems: Capitalism, Socialism & the Mixed Economy',
          tags: ['Capitalism', 'Socialism', 'Mixed economy', 'Price mechanism'],
          summary: 'The three ways societies answer what, how and for whom to produce — and why Nigeria runs a mixed economy.',
          content: `

            <h3>1. What an economic system is</h3>
            <p>Every society must answer three questions: <b>what</b> to produce, <b>how</b> to produce it, and <b>for whom</b>. The way a country organises its resources to answer those questions is its <b>economic system</b>. The three classic types are capitalism, socialism and the mixed economy.</p>

            <h3>2. Capitalism (the market economy)</h3>
            <p>In capitalism the means of production are owned by <b>private individuals</b>, and decisions are coordinated by the <b>price mechanism</b> — Adam Smith's "invisible hand" — not by government orders.</p>
            <ul>
              <li><b>Features:</b> private ownership, profit motive, competition, consumer sovereignty ("the consumer is king"), freedom of enterprise and choice, and prices set by demand and supply.</li>
              <li><b>Merits:</b> efficiency and innovation (competition punishes waste), wide variety of goods, and resources flow to what people actually buy.</li>
              <li><b>Demerits:</b> inequality of income and wealth, neglect of unprofitable but vital services (rural roads, vaccines), unemployment, boom-and-bust cycles, and possible exploitation of workers.</li>
            </ul>

            <h3>3. Socialism (the planned economy)</h3>
            <p>In socialism the state owns the major means of production and a <b>central planning authority</b> decides what, how and for whom — prices are administrative, not market-driven.</p>
            <ul>
              <li><b>Features:</b> public ownership, central plan, production for use rather than profit, fixed prices, and an aim of equal distribution.</li>
              <li><b>Merits:</b> less inequality, basic services provided for all, no wasteful duplication, and greater job security.</li>
              <li><b>Demerits:</b> bureaucracy and slow decisions, shortages and surpluses (planners cannot read millions of wants like prices do), little incentive to innovate, and restricted consumer choice.</li>
            </ul>

            <h3>4. The mixed economy — Nigeria's system</h3>
            <p>A mixed economy blends both: private enterprise runs most production while government supplies what the market under-provides — defence, roads, education, health — and regulates against abuse. Nigeria, like most countries, is mixed: private banks and markets exist alongside public schools, NNPC participation and price regulations.</p>
            <ul>
              <li><b>Why mixed?</b> It keeps the efficiency of markets but lets the state correct market failures, provide public goods and protect the vulnerable.</li>
              <li><b>Government's tools:</b> taxation, subsidies, legislation (minimum wage, NAFDAC), and direct provision of services.</li>
            </ul>

            <h3>5. The price mechanism at work</h3>
            <div class="worked"><b>Worked example:</b> A fuel shortage raises transport costs; food prices rise. What is the market doing?<br>
            The higher price <b>rations</b> the scarce food (buyers economise) and <b>signals</b> farmers to supply more (higher profit). One price change performs both jobs — that is the invisible hand coordinating millions of strangers.</div>
            <div class="worked"><b>Worked example (JAMB style):</b> In which system does "consumer sovereignty" operate fully? <b>Capitalism</b> — producers only profit by obeying consumer spending votes.</div>

            <h3>6. Quick comparison</h3>
            <ul>
              <li><b>Ownership:</b> private (capitalism) vs state (socialism) vs both (mixed).</li>
              <li><b>Coordinator:</b> prices vs plan vs prices + policy.</li>
              <li><b>Motive:</b> profit vs social welfare vs both.</li>
              <li><b>Typical weakness:</b> inequality vs shortages vs balancing-act complexity.</li>
            </ul>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying a mixed economy has <b>no</b> government role — government regulates and provides public goods.</li>
              <li>Confusing the invisible hand with a government agency — it is the un-planned result of price signals.</li>
              <li>Claiming socialism eliminates scarcity — scarcity exists under every system.</li>
              <li>Calling Nigeria fully capitalist; its price controls and state enterprises make it mixed.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> for any "which system" question, ask who owns the factories and who sets the prices. Two answers, full marks.</div>
          `,
          quiz: [
            { q: 'The three economic questions are what, how and', options: ['when', 'for whom', 'where', 'why'], correct: 1, exp: 'What, how and for whom to produce.' },
            { q: 'Capitalism is based on', options: ['state ownership', 'private ownership and the price mechanism', 'central planning', 'tradition'], correct: 1, exp: 'Private resources guided by prices.' },
            { q: 'The invisible hand was described by', options: ['Marx', 'Adam Smith', 'Keynes', 'Robbins'], correct: 1, exp: 'Adam Smith&apos;s market metaphor.' },
            { q: 'A merit of capitalism is', options: ['equal incomes', 'efficiency and innovation', 'no unemployment', 'free everything'], correct: 1, exp: 'Competition drives efficiency.' },
            { q: 'A demerit of capitalism is', options: ['inequality and neglect of public goods', 'too much equality', 'no choice', 'shortages by plan'], correct: 0, exp: 'Markets can leave the poor and public goods behind.' },
            { q: 'Socialism answers the three questions through', options: ['prices', 'central planning', 'custom', 'lottery'], correct: 1, exp: 'The state plans production.' },
            { q: 'A demerit of socialism is', options: ['weak incentives and bureaucracy', 'excess competition', 'high inequality', 'too many choices'], correct: 0, exp: 'Planning can stall on red tape.' },
            { q: 'Nigeria&apos;s economy is best described as', options: ['pure capitalist', 'pure socialist', 'mixed', 'traditional'], correct: 2, exp: 'Private enterprise plus state activity.' },
            { q: 'NNPC and private banks coexisting shows', options: ['capitalism only', 'socialism only', 'a mixed economy', 'no system'], correct: 2, exp: 'State and private sectors side by side.' },
            { q: 'Government regulates markets mainly to', options: ['kill profit', 'correct market failure', 'own everything', 'please nobody'], correct: 1, exp: 'Regulation fixes what markets miss.' }
          ],
          cards: [
            { q: 'Name the three economic questions.', a: 'What to produce, how to produce, and for whom to produce.' },
            { q: 'What is capitalism?', a: 'An economic system of private ownership guided by the price mechanism.' },
            { q: 'What is the price mechanism?', a: 'Prices and profits signalling what and how much to produce — the invisible hand.' },
            { q: 'Who coined the invisible hand?', a: 'Adam Smith.' },
            { q: 'Give two merits of capitalism.', a: 'Efficiency, innovation, consumer choice, competition.' },
            { q: 'Give two demerits of capitalism.', a: 'Inequality, neglect of public goods, booms and slumps.' },
            { q: 'What is socialism?', a: 'A system where the state owns major resources and plans the economy.' },
            { q: 'Give two merits of socialism.', a: 'Reduced inequality, provision of essentials, stable employment.' },
            { q: 'Give two demerits of socialism.', a: 'Bureaucracy, shortages, weak incentives, limited choice.' },
            { q: 'What is a mixed economy?', a: 'A system combining private enterprise and government activity.' },
            { q: 'What system does Nigeria run?', a: 'A mixed economy.' },
            { q: 'Give one Nigerian state enterprise.', a: 'NNPC (or NNPCL), Federal Medical Centres, public schools.' },
            { q: 'Why does government regulate markets?', a: 'To correct market failure — public goods, externalities, exploitation.' },
            { q: 'Do pure systems exist today?', a: 'No — real economies all lie on a spectrum; all are mixed.' },
            { q: 'Which system answers questions by tradition?', a: 'Traditional economy — custom decides, not price or plan.' }
          ],
        },
      ],
      SS2: [
        {
          title: 'Demand, Supply & Price Determination',
          tags: ['Demand', 'Supply', 'Equilibrium', 'Elasticity'],
          summary: 'How the forces of demand and supply meet to fix prices, how curves shift, and what elasticity tells a seller about revenue.',
          content: `
            <h3>1. Demand: want backed by money</h3>
            <p><b>Demand</b> is the quantity of a commodity consumers are willing and able to buy at various prices over a period. Mere desire is not demand — you must have <b>purchasing power</b>. The <b>law of demand</b>: the higher the price, the lower the quantity demanded (other things equal), so the demand curve slopes <b>downwards</b> from left to right.</p>
            <p><b>Determinants of demand</b> (shifters): income (normal vs inferior goods), prices of substitutes (Bournvita vs Milo) and complements (petrol and cars), tastes and fashion, population, expectations of future prices, season and festivals.</p>
            <ul>
              <li><b>Movement along the curve</b> is caused ONLY by a change in the price of the good itself — extension (price falls) or contraction (price rises).</li>
              <li><b>A shift of the whole curve</b> is caused by any other determinant — increase shifts right, decrease shifts left.</li>
            </ul>

            <h3>2. Supply: willingness plus ability to sell</h3>
            <p><b>Supply</b> is the quantity producers are willing and able to offer at various prices. The <b>law of supply</b>: the higher the price, the higher the quantity supplied, so the supply curve slopes <b>upwards</b>. Determinants: cost of production (inputs, wages), technology, taxes and subsidies, weather (farm produce), number of sellers, and expectations.</p>

            <h3>3. Equilibrium: where the curves meet</h3>
            <p><b>Equilibrium price</b> is where quantity demanded equals quantity supplied — the market-clearing price. Above it, supply exceeds demand (<b>excess supply</b>) and sellers cut prices; below it, demand exceeds supply (<b>excess demand</b>) and buyers bid prices up. Equilibrium is where both forces rest.</p>
            <div class="worked"><b>Worked example:</b> Given Qd = 100 − 2P and Qs = 20 + 3P. At equilibrium Qd = Qs, so 100 − 2P = 20 + 3P, hence 80 = 5P and <b>P = 16</b>. Substitute back: Qd = 100 − 32 = <b>68 units</b>. Now check P = 20: Qd = 60, Qs = 80 — excess supply of 20 units, which pushes the price back down toward 16.</div>

            <h3>4. Elasticity in one page</h3>
            <p><b>Price elasticity of demand (PED)</b> = percentage change in quantity demanded divided by percentage change in price. PED greater than 1 is <b>elastic</b> (quantity responds strongly); less than 1 is <b>inelastic</b>; exactly 1 is unitary.</p>
            <ul>
              <li><b>Determinants:</b> number of close substitutes, necessity vs luxury, proportion of income spent, time period, habit/addiction.</li>
              <li><b>Revenue link:</b> if demand is elastic, cutting price raises total revenue; if inelastic, raising price raises total revenue. That is why petrol (few substitutes) stays dear.</li>
              <li><b>PES</b> applies the same idea to supply; time is its biggest determinant (short run vs long run).</li>
            </ul>

            <h3>5. Price control</h3>
            <ul>
              <li><b>Maximum price</b> (set below equilibrium): protects consumers but breeds shortage, queues, rationing and black markets.</li>
              <li><b>Minimum price</b> (set above equilibrium): protects producers or workers (minimum wage, farm produce floors) but creates surplus and possible waste.</li>
            </ul>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying income shifts the curve "along" — income shifts it; only own price moves along it.</li>
              <li>Confusing excess supply with a "surplus of money".</li>
              <li>Claiming elastic goods should be priced high — sellers raise prices on inelastic goods.</li>
              <li>Forgetting "other things equal" (ceteris paribus) in every law statement.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> WAEC loves paired tasks — "state the law, then draw the curve". Always label axes (Price vertical, Quantity horizontal) and mark the equilibrium point; an unlabelled diagram earns zero.</div>
          `,
          cards: [
            { q: 'Define demand.', a: 'The quantity of a good consumers are willing and able to buy at various prices over a given period.' },
            { q: 'Why is desire alone not demand?', a: 'Demand requires purchasing power; desire without money or willingness to pay is not demand.' },
            { q: 'State the law of demand.', a: 'The higher the price, the lower the quantity demanded, other things being equal — so the curve slopes downwards.' },
            { q: 'What causes a movement along the demand curve?', a: 'Only a change in the price of the good itself — extension when price falls, contraction when price rises.' },
            { q: 'What shifts the demand curve right?', a: 'Any non-price determinant rising: income for normal goods, more substitutes priced up, favourable fashion, bigger population.' },
            { q: 'Name two substitutes and two complements.', a: 'Substitutes: Milo and Bournvita. Complements: petrol and cars, or bread and butter — used together.' },
            { q: 'Define supply.', a: 'The quantity of a good producers are willing and able to offer for sale at various prices over a period.' },
            { q: 'State the law of supply.', a: 'The higher the price, the higher the quantity supplied, other things equal — the curve slopes upwards.' },
            { q: 'Give three determinants of supply.', a: 'Cost of production, technology, taxes and subsidies, weather for farm produce, number of sellers, expectations.' },
            { q: 'What is equilibrium price?', a: 'The price at which quantity demanded equals quantity supplied — the market-clearing price with no tendency to change.' },
            { q: 'What happens above equilibrium price?', a: 'Excess supply (surplus) appears; sellers lower prices until the market clears at equilibrium.' },
            { q: 'What happens below equilibrium price?', a: 'Excess demand (shortage) appears; buyers bid the price up until quantity demanded equals quantity supplied.' },
            { q: 'Formula for price elasticity of demand?', a: 'PED = percentage change in quantity demanded divided by percentage change in price.' },
            { q: 'PED greater than 1 means what?', a: 'Demand is elastic: quantity responds more than proportionately to price changes, as with goods having many substitutes.' },
            { q: 'Effect of a maximum price below equilibrium?', a: 'Shortage, queues, rationing and black markets appear because quantity demanded exceeds quantity supplied.' },
          ],
          quiz: [
            { q: 'Demand is best defined as…', options: ['the desire for a good', 'quantity willing and able to be bought at various prices', 'the money in a consumer pocket', 'the price paid for a good'], correct: 1, exp: 'Demand needs both willingness and ability to pay across a range of prices, not mere desire.' },
            { q: 'The demand curve slopes downward because…', options: ['supply falls as price rises', 'consumers buy less at higher prices, other things equal', 'income always falls', 'producers dislike high prices'], correct: 1, exp: 'That is the law of demand: price and quantity demanded move in opposite directions, ceteris paribus.' },
            { q: 'A rise in consumer income (normal good) causes…', options: ['movement along the demand curve', 'a rightward shift of the demand curve', 'a leftward shift of the supply curve', 'no change at all'], correct: 1, exp: 'Income is a shifter, not a price change: the whole demand curve moves right for a normal good.' },
            { q: 'Given Qd = 100 - 2P and Qs = 20 + 3P, equilibrium price is…', options: ['10', '14', '16', '20'], correct: 2, exp: 'Set Qd = Qs: 100 - 2P = 20 + 3P gives 80 = 5P, so P = 16 and Q = 68 units.' },
            { q: 'At P = 20 with Qd = 100 - 2P and Qs = 20 + 3P there is…', options: ['excess demand of 20', 'excess supply of 20', 'equilibrium', 'shortage of 20'], correct: 1, exp: 'Qd = 60 while Qs = 80: sellers have 20 unsold units — excess supply pushes price back down.' },
            { q: 'PED = 2.5 means demand is…', options: ['inelastic', 'unitary', 'elastic', 'perfectly inelastic'], correct: 2, exp: 'Any PED above 1 is elastic: quantity responds more than proportionately to a price change.' },
            { q: 'A seller of an inelastic good should, to raise revenue,…', options: ['cut price', 'raise price', 'keep price constant', 'stop selling'], correct: 1, exp: 'With inelastic demand, quantity falls less than price rises, so total revenue increases with a higher price.' },
            { q: 'Which makes demand MORE elastic?', options: ['fewer substitutes', 'the good is a necessity', 'more close substitutes', 'heavy addiction to it'], correct: 2, exp: 'More close substitutes give consumers easy escape routes, so quantity responds strongly to price.' },
            { q: 'A maximum price set below equilibrium leads to…', options: ['surplus and waste', 'shortage and black markets', 'higher quality goods', 'excess supply'], correct: 1, exp: 'Quantity demanded exceeds quantity supplied: queues, rationing and illegal black markets follow.' },
            { q: 'Minimum wage legislation is an example of…', options: ['maximum price', 'minimum price', 'rationing', 'subsidy'], correct: 1, exp: 'A wage floor set above equilibrium is a minimum (floor) price protecting sellers of labour.' },
          ]
        },
        {
          title: 'Market Structures: Perfect & Imperfect Markets',
          tags: ['Perfect competition', 'Monopoly', 'Oligopoly', 'Monopolistic competition'],
          summary: 'From many price-taking sellers to one price-making monopolist — how each market structure sets price and output, and why it matters.',
          content: `
            <h3>1. The spectrum of markets</h3>
            <p>Markets are classified by the number of sellers, the nature of the product, and how much control each firm has over price. At one extreme sits <b>perfect competition</b>; at the other, <b>monopoly</b>. Between them are <b>monopolistic competition</b> and <b>oligopoly</b> — together the "imperfect" markets.</p>

            <h3>2. Perfect competition</h3>
            <ul>
              <li>Many buyers and sellers; each is tiny relative to the market.</li>
              <li><b>Homogeneous product</b> — every unit identical (garri of the same grade).</li>
              <li>Free entry and exit; perfect information; no transport costs.</li>
              <li>The firm is a <b>price taker</b>: the market fixes the price, and the firm's demand curve is perfectly elastic (horizontal).</li>
            </ul>
            <p>No single farmer selling tomatoes at Mile 12 market can raise his price above the going rate — buyers simply walk to the next stall.</p>

            <h3>3. Monopoly</h3>
            <ul>
              <li>One seller, no close substitutes; the firm <b>is</b> the industry.</li>
              <li>Barriers to entry: legal (patents, licences), natural (huge fixed cost — water, rail), or control of a key input.</li>
              <li>The firm is a <b>price maker</b> facing a downward-sloping demand curve; to sell more it must lower price.</li>
              <li>Can practise <b>price discrimination</b> — charging different prices for the same good (student tariffs, peak/off-peak power).</li>
            </ul>

            <h3>4. Monopolistic competition</h3>
            <p>Many sellers of <b>differentiated</b> products — similar but not identical (soap brands, barbers, restaurants). Differentiation (branding, packaging, location) gives each firm slight price-making power. Heavy <b>advertising</b> and selling costs are typical.</p>

            <h3>5. Oligopoly</h3>
            <p>A few large sellers dominate (cement, telecoms, banks). The hallmark is <b>interdependence</b>: each firm must anticipate the reaction of rivals, which makes price wars risky and prices tend to be <b>rigid</b> (the kinked demand curve explains why firms avoid changing prices). Firms may collude (cartels) or compete through advertising.</p>
            <div class="worked"><b>Worked example:</b> A city has one electricity distributor — monopoly (legal barrier, price maker). A market with 200 garri sellers of identical grade — perfect competition (price takers). Three banks holding 80% of deposits — oligopoly (interdependence, rigid prices). A street of 40 barbers with different styles and brands — monopolistic competition (differentiation).</div>

            <h3>6. Why structure matters</h3>
            <p>Perfect competition drives price down to the lowest sustainable cost, but it is an ideal type rarely seen fully. Monopoly earns supernormal profit and can restrict output, which is why Nigeria has the <b>Federal Competition and Consumer Protection Commission</b> to police abuse. Real markets sit along the spectrum.</p>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling any large firm a monopoly — it must be the ONLY seller with no close substitutes.</li>
              <li>Saying monopolists charge "the highest possible price" — they maximise profit, which is not the same.</li>
              <li>Confusing product differentiation (monopolistic competition) with product homogeneity (perfect competition).</li>
              <li>Forgetting interdependence as the defining feature of oligopoly.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> WAEC table questions ask you to "distinguish perfect competition from monopoly" — memorise four contrasts: number of sellers, nature of product, control over price, entry conditions. Four clean rows, full marks.</div>
          `,
          cards: [
            { q: 'What defines a market structure?', a: 'The number of sellers, nature of the product, and the degree of control each firm has over price.' },
            { q: 'Two key features of perfect competition?', a: 'Many buyers and sellers of a homogeneous product, with free entry and exit, so each firm is a price taker.' },
            { q: 'Why is the perfect competitor a price taker?', a: 'Each firm is too small to influence the market price; it can sell all it wants only at the going price.' },
            { q: 'Shape of the perfect competitor demand curve?', a: 'Perfectly elastic — a horizontal line at the market price, since any higher price loses all customers.' },
            { q: 'Define monopoly.', a: 'A market with a single seller of a product that has no close substitutes; the firm is the industry and a price maker.' },
            { q: 'Give three barriers to entry.', a: 'Legal barriers like patents and licences, natural barriers like huge fixed costs, and control of essential inputs.' },
            { q: 'What is price discrimination?', a: 'Charging different prices to different consumers for the same product, as with student fares or peak-hour tariffs.' },
            { q: 'Define monopolistic competition.', a: 'Many sellers of differentiated but similar products, with heavy advertising and slight control over price.' },
            { q: 'What is product differentiation?', a: 'Making a product appear distinct through branding, packaging, quality or service so buyers see close but imperfect substitutes.' },
            { q: 'Define oligopoly.', a: 'A market dominated by a few large interdependent sellers, such as cement, banking or telecoms in Nigeria.' },
            { q: 'Why are oligopoly prices rigid?', a: 'Firms fear the reaction of rivals; the kinked demand curve shows price cuts trigger wars while price hikes lose customers.' },
            { q: 'What is a cartel?', a: 'An open collusion among oligopolists to fix prices or output and share the market like a joint monopoly.' },
            { q: 'Which Nigerian agency polices monopoly abuse?', a: 'The Federal Competition and Consumer Protection Commission protects consumers against abuse of market power.' },
            { q: 'Why is perfect competition called an ideal type?', a: 'Its conditions — perfect information, zero transport costs, many tiny sellers — are never fully met in reality.' },
            { q: 'Monopolist price goal in one line?', a: 'Profit maximisation, not the highest possible price; charging too high would sacrifice too many sales.' },
          ],
          quiz: [
            { q: 'A price-taking firm belongs to…', options: ['monopoly', 'oligopoly', 'perfect competition', 'monopsony'], correct: 2, exp: 'Only perfect competitors take the market price as given; all others have some price-making power.' },
            { q: 'The product under perfect competition is…', options: ['differentiated', 'homogeneous', 'unique', 'branded'], correct: 1, exp: 'Every unit is identical, so buyers are indifferent between sellers and no firm can charge more.' },
            { q: 'One seller with no close substitutes describes…', options: ['oligopoly', 'monopolistic competition', 'monopoly', 'duopoly'], correct: 2, exp: 'A single seller whose product has no close substitute is a monopoly and a price maker.' },
            { q: 'Patents and licences are…', options: ['demand shifters', 'barriers to entry', 'forms of subsidy', 'price controls'], correct: 1, exp: 'Legal barriers like patents and licences block new firms and protect monopoly positions.' },
            { q: 'Price discrimination means…', options: ['selling inferior goods', 'charging different prices for the same product', 'refusing some buyers', 'exporting cheaply'], correct: 1, exp: 'The same product sold at different prices to different buyers, like peak and off-peak electricity tariffs.' },
            { q: 'Differentiated products and many sellers define…', options: ['perfect competition', 'monopolistic competition', 'pure monopoly', 'oligopoly'], correct: 1, exp: 'Many sellers of similar-but-different products, backed by advertising, is monopolistic competition.' },
            { q: 'The defining feature of oligopoly is…', options: ['homogeneous product', 'free entry', 'interdependence of firms', 'perfect information'], correct: 2, exp: 'A few large firms must anticipate each others reactions, which makes behaviour and prices strategic.' },
            { q: 'The kinked demand curve explains…', options: ['price rigidity in oligopoly', 'monopoly profit', 'perfect elasticity', 'minimum wage effects'], correct: 0, exp: 'Rivals match price cuts but ignore price rises, so firms keep prices stable — the kink explains rigidity.' },
            { q: 'An open agreement among oligopolists to fix prices is a…', options: ['merger', 'cartel', 'trust split', 'conglomerate'], correct: 1, exp: 'A cartel is overt collusion to act like a joint monopoly by fixing prices, output or market shares.' },
            { q: 'Which body checks monopoly abuse in Nigeria?', options: ['CBN', 'INEC', 'FCCPC', 'NAFDAC'], correct: 2, exp: 'The Federal Competition and Consumer Protection Commission enforces competition and consumer rights.' },
          ]
        },
        {
          title: 'Money, Inflation & Financial Institutions',
          tags: ['Money', 'Inflation', 'CBN', 'Commercial banks'],
          summary: 'What money is and does, why prices rise, and how the CBN and other financial institutions keep the economy supplied with it.',
          content: `
            <h3>1. What money is</h3>
            <p><b>Money</b> is anything generally accepted as payment for goods and services and in settling debts. History moved from barter (and its problem of <b>double coincidence of wants</b>) through commodity money (cowries, manillas in Nigeria) to metallic coins, paper notes, and today's bank money and electronic transfers.</p>

            <h3>2. Functions of money</h3>
            <ul>
              <li><b>Primary:</b> medium of exchange; measure of value (unit of account).</li>
              <li><b>Secondary:</b> store of value; standard for deferred payment (contracts paid later).</li>
            </ul>
            <p>Qualities of good money: general acceptability, durability, portability, divisibility, scarcity and stability of value.</p>

            <h3>3. Inflation</h3>
            <p><b>Inflation</b> is a persistent rise in the general price level — measured by the Consumer Price Index — not a rise in the price of one item.</p>
            <ul>
              <li><b>Demand-pull:</b> too much money chasing too few goods.</li>
              <li><b>Cost-push:</b> rising costs of inputs (fuel, wages) lift prices.</li>
              <li><b>Hyperinflation:</b> prices spiral so fast money loses meaning.</li>
            </ul>
            <p><b>Effects:</b> creditors, savers and fixed-income earners lose; debtors and traders may gain; exports become uncompetitive. <b>Control:</b> higher interest rates, open market sales, higher reserve requirements, reduced government spending, and boosting production.</p>

            <h3>4. The Central Bank of Nigeria</h3>
            <ul>
              <li>Sole issuer of legal tender; banker to the federal government and to commercial banks.</li>
              <li>Lender of last resort; manager of foreign reserves and the exchange rate.</li>
              <li>Conductor of <b>monetary policy</b> to control money supply and inflation.</li>
            </ul>

            <h3>5. Other financial institutions</h3>
            <ul>
              <li><b>Commercial banks</b> — accept deposits, lend, create credit (the money multiplier).</li>
              <li><b>Development banks</b> (e.g., Bank of Industry) — long-term project finance.</li>
              <li><b>Development finance:</b> mortgage banks, microfinance banks, insurance companies, capital market (NSE) intermediaries.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Which function is being used when a shop displays "Garri — N800 per paint rubber"? Money as a measure of value. When you save N5,000 for December? Store of value. When you sign a loan to repay in six months? Standard for deferred payment. When you hand over cash for the garri? Medium of exchange.</div>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling a rise in the price of one good "inflation" — it must be the general price level.</li>
              <li>Confusing monetary policy (CBN) with fiscal policy (government budget).</li>
              <li>Listing "store of wealth" as the only secondary function — deferred payment matters for contracts.</li>
              <li>Saying CBN lends to the public — it banks with banks and the government, not individuals.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> for any "effects of inflation" question, split victims (savers, creditors, fixed earners) from gainers (debtors, speculators), then add the external effect on exports. Structured lists beat paragraphs.</div>
          `,
          cards: [
            { q: 'Define money.', a: 'Anything generally accepted as payment for goods and services and in the settlement of debts.' },
            { q: 'What problem of barter does money solve?', a: 'The double coincidence of wants — with money, sellers no longer need buyers who hold exactly what they want.' },
            { q: 'Two primary functions of money?', a: 'Medium of exchange and measure of value (unit of account) — the roles that make markets work.' },
            { q: 'Two secondary functions of money?', a: 'Store of value and standard for deferred payment, used for savings and future contracts.' },
            { q: 'Four qualities of good money?', a: 'General acceptability, durability, portability, divisibility — plus scarcity and stable value.' },
            { q: 'Define inflation.', a: 'A persistent rise in the general price level of goods and services, usually measured by the Consumer Price Index.' },
            { q: 'What is demand-pull inflation?', a: 'Inflation caused by too much money chasing too few goods — excess aggregate demand pulls prices up.' },
            { q: 'What is cost-push inflation?', a: 'Inflation caused by rising production costs such as fuel, wages or imported inputs pushing prices up.' },
            { q: 'Who loses most from inflation?', a: 'Creditors, savers and fixed-income earners, whose money buys less while debtors repay in cheaper money.' },
            { q: 'Two ways the CBN controls money supply?', a: 'Raising interest rates or reserve requirements, and selling securities in open market operations.' },
            { q: 'Two functions of the Central Bank of Nigeria?', a: 'Sole issuer of legal tender and banker to government and commercial banks, plus lender of last resort.' },
            { q: 'Who is the lender of last resort?', a: 'The central bank, which lends to commercial banks in distress when no one else will.' },
            { q: 'Two functions of commercial banks?', a: 'Accepting deposits and granting loans, while creating credit through the money multiplier process.' },
            { q: 'Role of development banks?', a: 'They provide long-term finance for projects and industry, such as the Bank of Industry in Nigeria.' },
            { q: 'Difference between monetary and fiscal policy?', a: 'Monetary policy is CBN control of money supply and rates; fiscal policy is government spending and taxation.' },
          ],
          quiz: [
            { q: 'Money solves which barter problem?', options: ['scarcity', 'double coincidence of wants', 'division of labour', 'taxation'], correct: 1, exp: 'Barter needs each party to hold what the other wants; money removes that double coincidence problem.' },
            { q: 'A price tag on a shop item shows money as…', options: ['medium of exchange', 'measure of value', 'store of value', 'deferred payment'], correct: 1, exp: 'Expressing worth in a common unit is the measure of value (unit of account) function.' },
            { q: 'Saving for December uses money as…', options: ['store of value', 'medium of exchange', 'unit of account', 'legal tender only'], correct: 0, exp: 'Holding purchasing power over time is the store of value function of money.' },
            { q: 'A persistent rise in the general price level is…', options: ['deflation', 'inflation', 'devaluation', 'recession'], correct: 1, exp: 'Inflation is the sustained rise of the general price level, not of one single item.' },
            { q: 'Too much money chasing too few goods is…', options: ['cost-push inflation', 'demand-pull inflation', 'deflation', 'stagflation'], correct: 1, exp: 'Excess aggregate demand pulling prices upward is demand-pull inflation.' },
            { q: 'Who benefits from inflation?', options: ['savers', 'creditors', 'debtors', 'pensioners on fixed pay'], correct: 2, exp: 'Debtors repay loans in money that buys less than when they borrowed, so inflation favours them.' },
            { q: 'Which is a CBN monetary tool?', options: ['income tax', 'open market operations', 'customs duty', 'minimum wage'], correct: 1, exp: 'Buying and selling securities to shrink or expand money supply is an open market operation by the CBN.' },
            { q: 'The lender of last resort is…', options: ['commercial banks', 'the central bank', 'microfinance banks', 'the finance minister'], correct: 1, exp: 'The central bank lends to banks in distress when no other lender will step in.' },
            { q: 'Commercial banks create money through…', options: ['printing notes', 'the credit multiplier', 'issuing coins', 'selling forex'], correct: 1, exp: 'Only the CBN prints legal tender; commercial banks create deposit money via lending and the multiplier.' },
            { q: 'Long-term industrial finance comes mainly from…', options: ['commercial banks', 'development banks', 'microfinance banks', 'cooperatives'], correct: 1, exp: 'Development banks like the Bank of Industry specialise in long-term project and industrial finance.' },
          ]
        }
      ],
      SS3: [
        {
          title: 'National Income & Its Measurement',
          tags: ['GDP', 'GNP', 'Circular flow', 'Per capita income'],
          summary: 'GDP, GNP and per capita income, the three ways of measuring national income, and the uses and limits of the numbers.',
          content: `
            <h3>1. The key concepts</h3>
            <ul>
              <li><b>GDP (Gross Domestic Product):</b> the money value of all final goods and services produced <b>within a country</b> in a year.</li>
              <li><b>GNP (Gross National Product):</b> GDP plus net income from abroad — output of citizens at home and overseas.</li>
              <li><b>NNP:</b> GNP minus depreciation (capital consumption) — what remains after replacing worn-out capital.</li>
              <li><b>Per capita income:</b> national income divided by population — the average, and the basis of international comparison.</li>
              <li><b>Real vs nominal:</b> real national income strips out price changes (inflation); nominal does not.</li>
            </ul>

            <h3>2. The circular flow of income</h3>
            <p>In a simple two-sector economy, households supply factors of production to firms and receive income (wages, rent, interest, profit); firms produce goods that flow back to households as spending. What one sector spends becomes the other's income — production, income and expenditure are three views of the same flow.</p>

            <h3>3. Three methods of measurement</h3>
            <ul>
              <li><b>Output (product) method:</b> sum the value added at each stage of production to avoid <b>double counting</b> (count the bread, not the flour inside it).</li>
              <li><b>Income method:</b> sum wages, rent, interest and profit earned by factors of production.</li>
              <li><b>Expenditure method:</b> sum consumption + investment + government spending + net exports (X − M).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> GDP = N400bn, net factor income from abroad = N40bn, depreciation = N60bn, population = 200m. GNP = 400 + 40 = <b>N440bn</b>. NNP = 440 − 60 = <b>N380bn</b>. Per capita income = 380bn / 200m = <b>N1,900</b> per person per year.</div>

            <h3>4. Uses of national income figures</h3>
            <ul>
              <li>Measuring growth and comparing living standards between countries.</li>
              <li>Guiding government planning and budgeting; showing sector contributions.</li>
              <li>Basis for international aid decisions and investment ratings.</li>
            </ul>

            <h3>5. Limitations</h3>
            <ul>
              <li>Excludes subsistence output, housewives' work and the informal sector — huge in Nigeria.</li>
              <li>Ignores income distribution: two countries with equal per capita income can differ wildly in equality.</li>
              <li>Poor statistics and double counting problems; ignores non-monetary welfare (leisure, environment).</li>
            </ul>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Confusing GDP (within borders) with GNP (by citizens, home and abroad).</li>
              <li>Adding intermediate goods to final goods — that is double counting.</li>
              <li>Dividing GDP instead of national income by population for per capita income.</li>
              <li>Comparing nominal figures across years without deflating for inflation.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> calculation questions here are free marks: memorise GNP = GDP + net income from abroad; NNP = GNP − depreciation; per capita = national income / population. Write the formula first, then substitute.</div>
          `,
          cards: [
            { q: 'Define GDP.', a: 'The money value of all final goods and services produced within a country in a given year.' },
            { q: 'Define GNP.', a: 'GDP plus net factor income from abroad — the output of a country owned by its citizens at home and overseas.' },
            { q: 'Difference between GDP and GNP?', a: 'GDP counts output within borders regardless of ownership; GNP counts output owned by citizens wherever produced.' },
            { q: 'What is NNP?', a: 'Net National Product: GNP minus depreciation, the allowance for worn-out capital equipment.' },
            { q: 'Formula for per capita income?', a: 'National income divided by total population — the average income per person per year.' },
            { q: 'Real versus nominal national income?', a: 'Real income is adjusted for price changes (inflation); nominal income is measured at current prices.' },
            { q: 'What does the circular flow show?', a: 'That production generates income which generates expenditure — three views of one continuous flow.' },
            { q: 'Three methods of measuring national income?', a: 'The output (product) method, the income method, and the expenditure method.' },
            { q: 'What is double counting?', a: 'Counting intermediate goods as well as final goods, which inflates national income; use value added to avoid it.' },
            { q: 'Expenditure method formula?', a: 'Consumption plus investment plus government expenditure plus net exports (exports minus imports).' },
            { q: 'Two uses of national income figures?', a: 'Measuring economic growth and comparing living standards between countries, and guiding planning and budgets.' },
            { q: 'Why does per capita income hide inequality?', a: 'It is an average: a few very rich people can lift it while most citizens remain poor.' },
            { q: 'Two Nigerian measurement problems?', a: 'Large subsistence and informal sectors go unrecorded, and statistical data are often incomplete or outdated.' },
            { q: 'Given GDP N400bn and net income from abroad N40bn, GNP is?', a: 'GNP = 400 + 40 = N440 billion, because GNP adds net factor income from abroad to GDP.' },
            { q: 'GNP N440bn, depreciation N60bn — NNP is?', a: 'NNP = 440 - 60 = N380 billion after subtracting capital consumption (depreciation).' },
          ],
          quiz: [
            { q: 'GDP measures output produced…', options: ['by citizens anywhere', 'within the country', 'in one month', 'excluding services'], correct: 1, exp: 'GDP counts everything produced inside the borders in a year, whoever owns the firms.' },
            { q: 'GNP equals GDP plus…', options: ['depreciation', 'net income from abroad', 'imports', 'population'], correct: 1, exp: 'GNP = GDP + net factor income from abroad: what citizens earn overseas minus what foreigners earn here.' },
            { q: 'NNP is GNP minus…', options: ['taxes', 'imports', 'depreciation', 'subsidies'], correct: 2, exp: 'Net National Product deducts depreciation (capital consumption) from GNP.' },
            { q: 'Per capita income is…', options: ['GDP times population', 'national income divided by population', 'total wages paid', 'income of the richest citizen'], correct: 1, exp: 'It is national income divided by the population — the average income per person.' },
            { q: 'GDP N400bn, net income from abroad N40bn, depreciation N60bn — NNP is…', options: ['N380bn', 'N440bn', 'N500bn', 'N300bn'], correct: 0, exp: 'GNP = 440bn, then NNP = 440 - 60 = N380 billion.' },
            { q: 'Which method sums wages, rent, interest and profit?', options: ['output', 'expenditure', 'income', 'circular'], correct: 2, exp: 'The income method adds up all factor incomes earned in producing the national output.' },
            { q: 'Counting flour and the bread made from it is…', options: ['value added', 'double counting', 'net exports', 'deflation'], correct: 1, exp: 'Intermediate goods counted alongside final goods inflate the total — that is double counting.' },
            { q: 'The expenditure method sums consumption, investment, government spending and…', options: ['savings', 'net exports', 'taxes', 'depreciation'], correct: 1, exp: 'C + I + G + (X - M): net exports complete the expenditure identity.' },
            { q: 'A major limitation of national income figures is that they…', options: ['exclude subsistence output', 'overstate inflation', 'ignore population', 'exclude exports'], correct: 0, exp: 'Subsistence farming, informal work and unpaid home labour are left out, understating true output.' },
            { q: 'Real national income differs from nominal because it…', options: ['includes imports', 'adjusts for price changes', 'uses dollars', 'adds depreciation'], correct: 1, exp: 'Real figures are deflated for inflation so year-to-year comparisons reflect real output changes.' },
          ]
        },
        {
          title: 'Public Finance, Taxation & Fiscal Policy',
          tags: ['Taxation', 'Budget', 'Fiscal policy', 'Public debt'],
          summary: 'How government raises and spends money: taxes and their canons, budgets and deficits, national debt, and fiscal policy tools.',
          content: `
            <h3>1. What public finance covers</h3>
            <p><b>Public finance</b> is the study of government revenue and expenditure and their effects on the economy. Nigeria's revenue sources: <b>taxes</b> (the largest in most countries), oil royalties and rents, licences, fees, fines, earnings of public enterprises, and borrowing (loans and bonds).</p>

            <h3>2. Taxation</h3>
            <ul>
              <li><b>Direct taxes</b> fall on income and wealth: personal income tax (PAYE), company tax, capital gains, petroleum profits tax.</li>
              <li><b>Indirect taxes</b> fall on goods and services: VAT, customs and excise duties — borne by the final consumer.</li>
              <li><b>Progressive:</b> rate rises with income (Nigeria's PAYE). <b>Regressive:</b> same money burden hits the poor harder (VAT). <b>Proportional:</b> flat rate for all.</li>
            </ul>
            <p><b>Adam Smith's canons:</b> equity (pay according to ability), certainty (clear rules and amounts), convenience (collected when the taxpayer can pay), and economy (cheap to collect). <b>Incidence</b> = who finally bears a tax — for indirect taxes, elastic supply shifts the burden to consumers.</p>
            <div class="worked"><b>Worked example:</b> A progressive tax charges 10% on the first N100,000 and 20% above it. On income of N250,000: tax = (10% x 100,000) + (20% x 150,000) = 10,000 + 30,000 = <b>N40,000</b>. Effective rate = 40,000/250,000 = 16% — lower than the top marginal rate, which is why marginal and average rates differ.</div>

            <h3>3. Government expenditure and the budget</h3>
            <ul>
              <li><b>Recurrent expenditure:</b> day-to-day running (salaries, fuel, utilities). <b>Capital expenditure:</b> projects and assets (roads, hospitals).</li>
              <li><b>Balanced budget:</b> revenue = expenditure. <b>Surplus:</b> revenue > expenditure (used to fight inflation). <b>Deficit:</b> expenditure > revenue (used to fight recession, financed by borrowing).</li>
            </ul>

            <h3>4. Public debt</h3>
            <p><b>Domestic (internal) debt</b> is owed to lenders within the country (Nigerian banks, bondholders); <b>external debt</b> is owed to foreign lenders (World Bank, China, Eurobonds). Borrowing is justified for productive investment, but heavy debt service crowds out development spending.</p>

            <h3>5. Fiscal policy</h3>
            <p><b>Fiscal policy</b> is the use of government spending and taxation to steer the economy: raise taxes and cut spending to cool inflation; cut taxes and spend more to lift employment. Instruments: taxation, public expenditure, and the choice of budget stance. It is run by the <b>federal government</b> (contrast: monetary policy by the CBN).</p>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling VAT progressive — it is regressive relative to income.</li>
              <li>Confusing fiscal policy (government) with monetary policy (central bank).</li>
              <li>Saying a deficit budget is always bad — it is a deliberate anti-recession tool.</li>
              <li>Mixing marginal tax rate (rate on the next naira) with average/effective rate.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> taxation essays score on structure: definition, canons, types with Nigerian examples, then incidence. One named example per point (PAYE, VAT, petroleum profits tax) lifts you above generic answers.</div>
          `,
          cards: [
            { q: 'Define public finance.', a: 'The study of how government raises revenue, spends it, and the effects of both on the economy.' },
            { q: 'Four sources of government revenue?', a: 'Taxes, oil royalties and rents, licences, fees and fines, earnings of public enterprises, and borrowing.' },
            { q: 'Direct versus indirect taxes?', a: 'Direct taxes hit income and wealth (PAYE, company tax); indirect taxes hit goods and services (VAT, customs duty).' },
            { q: 'Give two examples of direct tax in Nigeria.', a: 'Personal income tax (PAYE) on salaries and companies income tax, plus petroleum profits tax on oil firms.' },
            { q: 'Give two examples of indirect tax.', a: 'Value Added Tax on goods and services, and customs duties on imported goods.' },
            { q: 'What is a progressive tax?', a: 'A tax whose rate rises as income rises, like the PAYE bands, taking a larger share from the rich.' },
            { q: 'Why is VAT called regressive?', a: 'It charges the same rate on goods, so the poor pay a larger proportion of their income than the rich.' },
            { q: 'State two canons of taxation.', a: 'Equity (according to ability) and certainty (clear rules), plus convenience and economy of collection.' },
            { q: 'What is incidence of taxation?', a: 'Who finally bears the burden of a tax; for indirect taxes on elastic supply, the consumer bears most of it.' },
            { q: 'Recurrent versus capital expenditure?', a: 'Recurrent covers daily running costs like salaries; capital covers assets and projects like roads and hospitals.' },
            { q: 'What is a deficit budget?', a: 'A budget where planned expenditure exceeds planned revenue, financed by borrowing, often used against recession.' },
            { q: 'Which budget stance fights inflation?', a: 'A surplus budget — higher revenue than spending withdraws money and cools excess demand.' },
            { q: 'Internal versus external debt?', a: 'Internal debt is owed to lenders inside the country; external debt is owed to foreign lenders and institutions.' },
            { q: 'Define fiscal policy.', a: 'Using government taxation and spending to influence aggregate demand, employment, prices and growth.' },
            { q: 'Who runs fiscal policy in Nigeria?', a: 'The federal government through the budget; the CBN runs monetary policy separately.' },
          ],
          quiz: [
            { q: 'The largest source of government revenue in most countries is…', options: ['fines', 'taxes', 'foreign aid', 'printing money'], correct: 1, exp: 'Taxation is the mainstay of public revenue in nearly every country, Nigeria included.' },
            { q: 'PAYE is an example of…', options: ['indirect tax', 'direct tax', 'regressive tax', 'import duty'], correct: 1, exp: 'Pay-As-You-Earn is levied directly on personal income — a direct, progressive tax.' },
            { q: 'VAT is classified as…', options: ['progressive', 'indirect and regressive', 'direct and progressive', 'capital tax'], correct: 1, exp: 'VAT is charged on goods and services (indirect) and takes a larger income share from the poor (regressive).' },
            { q: 'Adam Smith canons include all EXCEPT…', options: ['equity', 'certainty', 'convenience', 'secrecy'], correct: 3, exp: 'The canons are equity, certainty, convenience and economy — secrecy is not one of them.' },
            { q: 'Progressive tax on N250,000 at 10% on the first N100,000 and 20% above gives…', options: ['N25,000', 'N40,000', 'N50,000', 'N20,000'], correct: 1, exp: '10,000 on the first 100,000 plus 30,000 on the remaining 150,000 = N40,000 total tax.' },
            { q: 'Roads and hospitals fall under…', options: ['recurrent expenditure', 'capital expenditure', 'debt service', 'transfer payments'], correct: 1, exp: 'Long-lived assets and projects are capital expenditure; salaries and utilities are recurrent.' },
            { q: 'A budget where revenue exceeds expenditure is a…', options: ['deficit budget', 'balanced budget', 'surplus budget', 'supplementary budget'], correct: 2, exp: 'Revenue above spending is a surplus budget, useful for withdrawing money and fighting inflation.' },
            { q: 'Debt owed to the World Bank is…', options: ['internal debt', 'external debt', 'floating debt', 'recurrent debt'], correct: 1, exp: 'Loans from foreign lenders and institutions are external debt, usually serviced in foreign currency.' },
            { q: 'Fiscal policy tools are…', options: ['interest rates and reserve requirements', 'taxation and government spending', 'open market operations', 'exchange rate pegs'], correct: 1, exp: 'Fiscal policy works through the budget — taxes and spending — while rates and reserve rules are monetary.' },
            { q: 'To fight a recession, government should…', options: ['raise taxes and cut spending', 'cut taxes and raise spending', 'print counterfeit-free money', 'ban imports totally'], correct: 1, exp: 'A deficit stance — lower taxes, higher spending — lifts aggregate demand and employment.' },
          ]
        },
        {
          title: 'International Trade & Balance of Payments',
          tags: ['Comparative advantage', 'Balance of payments', 'Exchange rate', 'ECOWAS'],
          summary: 'Why nations trade, how comparative advantage guides specialisation, and how the balance of payments and exchange rates are managed.',
          content: `
            <h3>1. Why nations trade</h3>
            <p>No country has everything: differences in climate, minerals, skills and technology make trade beneficial. Nigeria exports crude oil, cocoa and sesame, and imports machinery, refined fuel and wheat. Trade widens choice, spreads technology and lets countries earn foreign exchange.</p>

            <h3>2. Absolute and comparative advantage</h3>
            <p><b>Absolute advantage</b> (Adam Smith): a country produces a good with fewer resources than another. <b>Comparative advantage</b> (David Ricardo): even without any absolute advantage, a country should specialise in the good where its <b>opportunity cost is lowest</b> — trade then benefits both sides.</p>
            <div class="worked"><b>Worked example:</b> In one day Country A makes 100 bags of garri or 50 shirts; Country B makes 40 garri or 40 shirts. A is absolutely better at both. But A's opportunity cost of 1 shirt = 2 bags of garri, while B's = 1 bag. B has the lower opportunity cost in shirts, A in garri — so B specialises in shirts, A in garri, and both gain from trade.</div>

            <h3>3. Terms of trade</h3>
            <p><b>Terms of trade</b> = (index of export prices / index of import prices) x 100. Above 100 is <b>favourable</b> (exports buy more imports). Countries relying on one primary export — like Nigeria's oil — suffer when world prices swing.</p>

            <h3>4. Balance of payments</h3>
            <ul>
              <li><b>Current account:</b> visible trade (goods), invisible trade (services, transport), income and transfers.</li>
              <li><b>Capital account:</b> loans, investments and reserves movements.</li>
              <li>A <b>deficit</b> (more payments out than in) is corrected by: devaluation, import controls, export promotion, borrowing, or attracting investment.</li>
            </ul>

            <h3>5. Exchange rates</h3>
            <ul>
              <li><b>Floating:</b> the market sets the rate by demand and supply of the currency.</li>
              <li><b>Fixed:</b> the central bank pegs and defends the rate using reserves.</li>
              <li><b>Devaluation</b> (deliberate cut in a fixed rate) makes exports cheaper abroad; <b>appreciation</b> does the opposite.</li>
            </ul>

            <h3>6. Protectionism and trade cooperation</h3>
            <p><b>Protection</b> shields home industries: tariffs (duties), quotas, embargoes, and import licences. Arguments: infant industries, jobs, strategic goods, anti-dumping. Cost: higher prices and possible retaliation. Cooperation: <b>ECOWAS</b> works toward a free-trade West Africa, and the <b>AfCFTA</b> aims to link the whole continent.</p>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Confusing absolute with comparative advantage — comparative is about opportunity cost, not productivity.</li>
              <li>Calling any trade gap a "debt" — a balance of payments deficit is a flow problem, not a loan.</li>
              <li>Saying devaluation always helps — it hurts when exports cannot expand (Nigeria's oil is priced globally).</li>
              <li>Forgetting invisible trade (shipping, insurance, fees) in the current account.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> comparative advantage questions are won with a clean opportunity-cost table: two countries, two goods, compute what each gives up per unit, then state who specialises where and why both gain.</div>
          `,
          cards: [
            { q: 'Two reasons nations trade?', a: 'Differences in natural resources, climate, skills and technology make specialisation and exchange beneficial.' },
            { q: 'Define absolute advantage.', a: 'Producing a good using fewer resources than another country, as described by Adam Smith.' },
            { q: 'Define comparative advantage.', a: 'Producing a good at a lower opportunity cost than another country — the basis Ricardo gave for mutually beneficial trade.' },
            { q: 'If A gives up 2 garri per shirt and B gives up 1, who makes shirts?', a: 'Country B, because its opportunity cost in shirts is lower — one bag of garri per shirt against two.' },
            { q: 'Formula for terms of trade?', a: 'Index of export prices divided by index of import prices, multiplied by 100; above 100 is favourable.' },
            { q: 'Why are terms of trade risky for Nigeria?', a: 'Heavy dependence on one primary export, crude oil, means world price swings swing the whole economy.' },
            { q: 'What is in the current account?', a: 'Visible trade in goods, invisible trade in services, plus income flows and transfers such as remittances.' },
            { q: 'Name two invisible trade items.', a: 'Shipping and insurance services, tourism, and fees and commissions earned across borders.' },
            { q: 'What is a balance of payments deficit?', a: 'When total payments to other countries exceed total receipts over a period, pressuring reserves and currency.' },
            { q: 'Three ways to correct a deficit?', a: 'Devaluation, import controls, export promotion, borrowing, or attracting foreign investment.' },
            { q: 'Floating versus fixed exchange rate?', a: 'Floating rates are set by market demand and supply; fixed rates are pegged and defended by the central bank.' },
            { q: 'What does devaluation do to exports?', a: 'It makes exports cheaper in foreign currency, so export volumes can rise if supply can respond.' },
            { q: 'Two instruments of protection?', a: 'Tariffs (import duties) and quotas (quantity limits); embargoes and import licences are others.' },
            { q: 'The infant industry argument says…', a: 'New industries need temporary protection from established foreign rivals until they can compete.' },
            { q: 'What are ECOWAS and AfCFTA?', a: 'ECOWAS integrates West African trade; the AfCFTA aims to create a single continental free-trade area for Africa.' },
          ],
          quiz: [
            { q: 'Comparative advantage is based on…', options: ['absolute productivity', 'lowest opportunity cost', 'largest population', 'military strength'], correct: 1, exp: 'Ricardo showed trade pays when each country specialises where its opportunity cost is lowest.' },
            { q: 'A gives up 2 garri per shirt, B gives up 1. B should specialise in…', options: ['garri', 'shirts', 'both goods', 'neither good'], correct: 1, exp: 'B sacrifices less garri per shirt, so its opportunity cost in shirts is lower — specialise there.' },
            { q: 'Terms of trade are calculated from…', options: ['export and import price indices', 'GDP and population', 'tax and subsidy rates', 'wage and profit shares'], correct: 0, exp: 'Terms of trade = (export price index / import price index) x 100.' },
            { q: 'Shipping and insurance earnings belong to…', options: ['capital account', 'invisible trade in the current account', 'external debt', 'protection'], correct: 1, exp: 'Services like shipping, insurance and tourism are invisible trade inside the current account.' },
            { q: 'A balance of payments deficit means…', options: ['exports exceed imports', 'payments out exceed receipts', 'the country has no debt', 'the currency is floating'], correct: 1, exp: 'More money leaving than entering over the period is a deficit, straining reserves.' },
            { q: 'Which can correct a balance of payments deficit?', options: ['devaluation', 'higher imports', 'currency appreciation', 'cutting exports'], correct: 0, exp: 'Devaluation makes exports cheaper and imports dearer, helping to close the gap.' },
            { q: 'A market-determined exchange rate is called…', options: ['fixed', 'floating', 'pegged', 'devalued'], correct: 1, exp: 'Floating rates move with demand and supply in the foreign exchange market.' },
            { q: 'A deliberate cut in a fixed exchange rate is…', options: ['revaluation', 'devaluation', 'inflation', 'appreciation'], correct: 1, exp: 'Devaluation is an official downward adjustment of a fixed or managed currency rate.' },
            { q: 'Tariffs and quotas are instruments of…', options: ['fiscal federalism', 'protection', 'monetary policy', 'nationalisation'], correct: 1, exp: 'Both restrict imports to shield domestic producers — classic protectionist tools.' },
            { q: 'The infant industry argument justifies…', options: ['free trade always', 'temporary protection of new industries', 'export bans', 'currency pegs'], correct: 1, exp: 'Young industries get temporary shelter from foreign competition until they mature.' },
          ]
        }
      ]

    },
    resources: [
      { cat: 'Structured course', title: 'Khan Academy — Economics', url: 'https://www.khanacademy.org/economics-finance-domain', note: 'Micro and macro fundamentals with practice.' },
      { cat: 'Past questions', title: 'Myschool — Economics past questions', url: 'https://myschool.ng/classroom', note: 'Past WASSCE/UTME economics objectives and theory.' },
      { cat: 'Reference', title: 'Wikipedia — Opportunity cost', url: 'https://en.wikipedia.org/wiki/Opportunity_cost', note: 'The next-best-alternative idea, fully explained.' },
      { cat: 'Video lesson', title: 'WAEC Economics revision videos', url: 'https://www.youtube.com/results?search_query=waec+economics+revision+nigeria', note: 'Demand, supply and systems in plain English.' }
    ]
  
};
