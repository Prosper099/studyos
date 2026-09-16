#!/usr/bin/env python3
"""lessons3: deepen Economic Systems, History as a Discipline, Source Documents & Books of Original Entry."""
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

SYSTEMS = """
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
"""

HISTORY = """
            <h3>1. What history is</h3>
            <p>History is the study of the <b>human past</b>, reconstructed from evidence. It is not a list of dates: it is an argument about what happened, why, and what it means. History is both a <b>science</b> (it gathers, tests and weighs evidence systematically) and an <b>art</b> (it narrates and interprets).</p>
            <ul>
              <li><b>Chronology:</b> arranging events in time order — the skeleton of history.</li>
              <li><b>Historiography:</b> the study of how history has been written, and by whom.</li>
              <li><b>The historian's job:</b> collect sources, test their reliability, and build a reasoned account.</li>
            </ul>

            <h3>2. Why study history?</h3>
            <ul>
              <li><b>Identity:</b> a people without history is like a person with amnesia — Nigerian history binds over 250 groups into one story.</li>
              <li><b>Lessons:</b> past successes and failures (e.g. the Amalgamation of 1914, the Civil War) inform present choices.</li>
              <li><b>Citizenship:</b> understanding how institutions grew makes better citizens.</li>
              <li><b>Careers:</b> teaching, museums, archives, journalism, law, diplomacy.</li>
            </ul>

            <h3>3. Sources of history: primary and secondary</h3>
            <p><b>Primary sources</b> come from the period studied: eyewitness accounts, original documents, artefacts, buildings, coins, and living oral testimony. <b>Secondary sources</b> are later accounts built from primary material — textbooks like this one, articles, documentaries.</p>
            <ul>
              <li><b>Written sources:</b> letters, treaties, court records, newspapers, travellers' accounts, Quranic and church records.</li>
              <li><b>Oral sources (oral tradition):</b> stories, genealogies, praise poetry and legends handed down by word of mouth — the backbone of pre-colonial Nigerian history.</li>
              <li><b>Archaeological sources:</b> pots, tools, terracotta, walls and burial sites dug from the ground.</li>
              <li><b>Linguistic & genetic evidence:</b> language families and DNA that trace migrations.</li>
            </ul>

            <h3>4. Oral tradition — Nigeria's library of memory</h3>
            <p>Types include <b>myths</b> (sacred origin stories), <b>legends</b> (heroic tales set in a real past), <b>genealogies</b>, <b>praise poems</b> and <b>proverbs</b>. Professional keepers — griots, palace historians, age-grade custodians — preserved them.</p>
            <ul>
              <li><b>Strengths:</b> reach centuries before writing; carry values and emotions documents miss; abundant in Africa.</li>
              <li><b>Weaknesses:</b> memory fades and changes; tellers flatter their patrons; dates are fuzzy.</li>
              <li><b>The fix:</b> cross-check oral accounts against archaeology, linguistics and written records — historians never rely on one source.</li>
            </ul>

            <h3>5. Nigerian evidence in action</h3>
            <ul>
              <li><b>Nok terracotta</b> (archaeology) proves a sophisticated sculpting culture on the Jos Plateau by about 500 BC.</li>
              <li><b>Benin bronze plaques and the Iya crater walls</b> date the power and scale of the Benin Kingdom.</li>
              <li><b>Kanem-Borno court chronicles and Arabic correspondence</b> (written) give king-lists and trade diplomacy across the Sahara.</li>
              <li><b>Ife bronze heads</b> show casting skill that amazed the world when unearthed in 1938.</li>
            </ul>

            <h3>6. Problems of sources</h3>
            <ul>
              <li><b>Bias:</b> colonial records see Nigeria through European eyes; court praise-songs exaggerate kings.</li>
              <li><b>Gaps:</b> many regions left no writing; silence is not absence of history.</li>
              <li><b>Forgery & decay:</b> documents fade, get lost, or are faked.</li>
              <li><b>Dating:</b> without written dates, historians use radiocarbon dating and stratigraphy.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> "discuss the problems of oral tradition" scores by pairing each weakness with its remedy (cross-checking, recording multiple versions, testing against physical evidence).</div>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling oral tradition "mere gossip" — it is a valid source when tested like any other.</li>
              <li>Treating a textbook as a primary source — it is secondary.</li>
              <li>Saying Nigeria has no history before Europeans — writing existed in the North, and archaeology and orality cover the rest.</li>
              <li>Confusing myth with verified fact; myths reveal beliefs, not always events.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> memorise the source triad — <b>oral, written, physical</b> — plus one Nigerian example each (praise poetry, Kanem chronicles, Nok terracotta). Every sources question maps onto it.</div>
"""

SOURCES = """
            <h3>1. The accounting trail</h3>
            <p>Every figure in final accounts travels a fixed route: <b>source document → book of original entry → ledger → trial balance → final accounts</b>. Exams reward students who can name the document and the first book for any transaction.</p>

            <h3>2. Source documents — the evidence</h3>
            <ul>
              <li><b>Invoice:</b> sent by the seller, listing goods, quantities and prices; states credit terms.</li>
              <li><b>Receipt:</b> acknowledges payment — issued when money is <b>received</b>, not when goods are ordered.</li>
              <li><b>Credit note:</b> issued by the seller to <b>reduce</b> what the buyer owes (returned or damaged goods, overcharge).</li>
              <li><b>Debit note:</b> issued by the buyer (or seller) to <b>increase</b> an amount owed — e.g. an undercharge corrected.</li>
              <li><b>Voucher:</b> internal evidence for a payment, attached to the receipt before money goes out.</li>
              <li><b>Petty cash voucher:</b> evidence for each small petty payment.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Ada returns ₦4,000 of cracked plates to her supplier. Which document arrives?<br>
            The supplier sends a <b>credit note</b> for ₦4,000 — it reduces Ada's debt. (Ada does not write it herself.)</div>

            <h3>3. Books of original entry (books of prime entry)</h3>
            <ul>
              <li><b>Cash book:</b> all cash and bank receipts and payments. Triple-column versions add <b>discount</b> columns (memorandum only — discounts are not posted from the cash book's discount columns as cash).</li>
              <li><b>Petty cash book:</b> small payments (stamps, transport, tea), usually run on the <b>imprest system</b>.</li>
              <li><b>Sales day book:</b> <b>credit</b> sales only. <b>Purchases day book:</b> credit purchases only.</li>
              <li><b>Returns inwards book:</b> goods customers brought back. <b>Returns outwards book:</b> goods we returned to suppliers.</li>
              <li><b>The journal:</b> anything that fits nowhere else — opening entries, corrections, purchase of fixed assets on credit.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> "cash sales" go to the <b>cash book</b>, not the sales day book — the day books are for <b>credit</b> transactions. This single confusion costs thousands of marks yearly.</div>

            <h3>4. The imprest system, worked</h3>
            <p>The petty cashier starts each period with a fixed <b>imprest</b> (float). At period end the head cashier refunds exactly what was spent, restoring the float.</p>
            <div class="worked"><b>Worked example:</b> Float ₦20,000; the month's payments total ₦13,500. How much is refunded and what cash remains?<br>
            Cash in hand = 20,000 − 13,500 = 6,500. Refund = <b>₦13,500</b>, restoring the float to 20,000. Merits: control (every kobo is vouched), and the main cashier keeps one check on small spending.</div>

            <h3>5. Which book for which transaction? Drill</h3>
            <ul>
              <li>Bought motor van on credit from Toyota → <b>journal</b> (asset on credit, not stock).</li>
              <li>Sold goods on credit to Musa → <b>sales day book</b>.</li>
              <li>Musa returned part of them → <b>returns inwards book</b>.</li>
              <li>Paid shop rent by cheque → <b>cash book (bank column)</b>.</li>
              <li>Bought stamps for the office → <b>petty cash book</b>.</li>
              <li>Corrected an error of principle → <b>journal</b>.</li>
            </ul>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Entering cash sales in the sales day book.</li>
              <li>Issuing a receipt for a credit sale — the invoice is the document until money moves.</li>
              <li>Confusing credit note (debt <b>down</b>) with debit note (debt <b>up</b>).</li>
              <li>Refunding the float instead of the amount spent under imprest.</li>
              <li>Treating the discount columns of the cash book as cash received or paid.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> ask two questions — did <b>cash</b> move? (cash/petty book) — if not, was it <b>stock on credit</b>? (day books/returns) — otherwise <b>journal</b>. Three seconds, always right.</div>
"""

deepen('Economic Systems: Capitalism, Socialism & the Mixed Economy', 2669, SYSTEMS)
deepen('History as a Discipline & Sources of History', 2914, HISTORY)
deepen('Source Documents & Books of Original Entry', 2982, SOURCES)

open(P, 'w', encoding='utf-8').write(s)
print('lessons3 applied OK')
