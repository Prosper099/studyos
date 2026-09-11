# deep_maths1c.py — Deep-lesson batch 5c: Mathematics JSS1 (topic 5 of 5). RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT_E = '''
            <h3>1. What a ratio means</h3>
            <p>A <b>ratio</b> compares two or more quantities of the SAME kind by showing how many times one contains the other. It is written with a colon: if a class has 12 boys and 18 girls, the ratio of boys to girls is 12 : 18, which simplifies (dividing by 6) to <b>2 : 3</b> — 'for every 2 boys there are 3 girls'.</p>
            <ul>
              <li>Order matters: boys : girls = 2 : 3, but girls : boys = 3 : 2. Always compare in the order the question asks.</li>
              <li>A ratio has NO units once simplified — it is just a comparison of sizes.</li>
              <li>Simplifying a ratio works exactly like simplifying a fraction: divide every part by the HCF. 20 : 35 : 15 → ÷5 → 4 : 7 : 3.</li>
              <li>Ratios containing decimals or fractions are cleaned by multiplying every part by the same number: 1/2 : 1/3 → x6 → 3 : 2; 0.5 : 2 → x2 → 1 : 4.</li>
            </ul>
            <div class="formula">TRAP: a ratio compares PART to PART. The fraction compares PART to WHOLE. In a 2 : 3 boys-to-girls class, boys are 2/5 (not 2/3) of the whole class. Mixing these up is the classic ratio mistake.</div>

            <h3>2. Same units first!</h3>
            <p>Before writing a ratio, convert all quantities to the SAME unit.</p>
            <ul>
              <li>40 minutes to 2 hours → 40 min : 120 min → 1 : 3.</li>
              <li>50 kobo to ₦2 → 50k : 200k → 1 : 4.</li>
              <li>250 g to 1 kg → 250 : 1000 → 1 : 4.</li>
            </ul>

            <h3>3. Sharing a quantity in a given ratio</h3>
            <p>To share a quantity in a ratio: (1) ADD the ratio parts to find the total number of equal shares; (2) divide the quantity by that total to find ONE share; (3) multiply each ratio part by the share.</p>
            <div class="worked"><b>Worked example:</b> share ₦20,000 between Ada and Bola in the ratio 2 : 3.<br>Total shares = 2 + 3 = 5. One share = 20,000 ÷ 5 = ₦4,000.<br>Ada = 2 x 4,000 = ₦8,000. Bola = 3 x 4,000 = ₦12,000.<br><b>Check:</b> 8,000 + 12,000 = 20,000 and 8,000 : 12,000 = 2 : 3.</div>
            <svg viewBox="0 0 460 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bar model of 20,000 naira divided into five equal blocks of 4,000 each: two indigo blocks labelled Ada 8,000 and three green blocks labelled Bola 12,000, showing the ratio 2 to 3">
              <g stroke="#334155" stroke-width="1.5">
                <rect x="20" y="30" width="80" height="40" fill="#6366f1"/>
                <rect x="100" y="30" width="80" height="40" fill="#6366f1"/>
                <rect x="180" y="30" width="80" height="40" fill="#10b981"/>
                <rect x="260" y="30" width="80" height="40" fill="#10b981"/>
                <rect x="340" y="30" width="80" height="40" fill="#10b981"/>
              </g>
              <g font-size="11" fill="#ffffff" text-anchor="middle" font-weight="700">
                <text x="60" y="54">4k</text><text x="140" y="54">4k</text><text x="220" y="54">4k</text><text x="300" y="54">4k</text><text x="380" y="54">4k</text>
              </g>
              <text x="100" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#3730a3">Ada: 2 shares = 8,000</text>
              <text x="300" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#047857">Bola: 3 shares = 12,000</text>
              <text x="230" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Total 20,000 in the ratio 2 : 3 (five equal shares of 4,000)</text>
            </svg>
            <div class="worked"><b>Worked example (three-way share):</b> ₦54,000 is shared among three children in the ratio 1 : 2 : 3.<br>Shares = 6; one share = 9,000. The children get ₦9,000, ₦18,000 and ₦27,000.</div>
            <div class="worked"><b>Worked example (finding the total):</b> in a ratio share of 3 : 5, the smaller part is ₦12,000. One share (3 parts' worth is 12,000? no — the smaller PART is 3 shares) → 3 shares = 12,000, so 1 share = 4,000; total = 8 shares = ₦32,000.</div>

            <h3>4. Ratios in real life</h3>
            <ul>
              <li><b>Maps and scale:</b> a scale of 1 : 50,000 means 1 cm on the map stands for 50,000 cm (500 m) on the ground. 4 cm on the map = 2 km in real life.</li>
              <li><b>Recipes and mixes:</b> mortar mix of cement : sand = 1 : 3; a drink concentrate mixed 1 : 4 with water.</li>
              <li><b>Screens:</b> a 16 : 9 screen ratio describes shape, not size.</li>
              <li><b>Sport:</b> a team's wins : losses = 7 : 2 summarises a season at a glance.</li>
            </ul>

            <h3>5. Proportion and direct proportion</h3>
            <p>A <b>proportion</b> says two ratios are EQUAL: 2 : 3 = 4 : 6 (or 2/3 = 4/6). Two quantities are in <b>direct proportion</b> when multiplying one by a number multiplies the other by the SAME number — doubling the pens doubles the cost.</p>
            <div class="worked"><b>Worked example:</b> 5 books cost ₦3,500. What do 8 books cost?<br>Unitary step: 1 book = 3,500 ÷ 5 = ₦700. Then 8 books = 8 x 700 = ₦5,600.</div>
            <div class="worked"><b>Worked example (ratio box):</b> a car uses 9 litres of fuel for 108 km. How far on 15 litres? 1 litre → 108 ÷ 9 = 12 km; 15 litres → 15 x 12 = 180 km.</div>

            <h3>6. Inverse proportion</h3>
            <p>Two quantities are in <b>inverse proportion</b> when multiplying one DIVIDES the other by the same number: more workers → fewer days; faster speed → less time.</p>
            <div class="worked"><b>Worked example:</b> 6 labourers weed a farm in 8 days. How long will 4 labourers take (same rate)?<br>Total work = 6 x 8 = 48 'labourer-days'. With 4 labourers: 48 ÷ 4 = 12 days. Fewer workers, MORE days — the product stays 48.</div>
            <div class="formula">EXAM CODE: direct proportion → divide then multiply (unitary method). Inverse proportion → MULTIPLY the two given values first (the constant product), then divide. Identify the type BEFORE calculating: 'more means more' = direct; 'more means less' = inverse.</div>

            <h3>7. Percentage — 'out of one hundred'</h3>
            <p><b>Per cent</b> means 'out of 100'; the sign is %. So 45% = 45/100 = 0.45. Percentages are simply fractions (and decimals) wearing a uniform that makes comparisons easy.</p>
            <ul>
              <li><b>Fraction to %:</b> multiply by 100: 3/5 = 3/5 x 100% = 60%. 1/8 = 12.5%.</li>
              <li><b>Decimal to %:</b> multiply by 100: 0.72 = 72%; 0.05 = 5%.</li>
              <li><b>% to fraction:</b> 35% = 35/100 = 7/20. <b>% to decimal:</b> 8% = 0.08; 125% = 1.25.</li>
              <li>Memorise: 10% = 1/10, 25% = 1/4, 50% = 1/2, 75% = 3/4, 20% = 1/5, 12 1/2% = 1/8.</li>
              <li><b>One quantity as a % of another:</b> write as a fraction then x100: 15 as a % of 60 = 15/60 x 100% = 25%.</li>
            </ul>

            <h3>8. Percentage of a quantity</h3>
            <div class="worked"><b>Worked examples:</b><br>30% of ₦5,000 = 30/100 x 5,000 = ₦1,500 (quick way: 10% = 500, so 30% = 3 x 500).<br>45% of 240 pupils = 0.45 x 240 = 108 pupils.<br>7 1/2% of 80 kg = 7.5/100 x 80 = 6 kg.</div>
            <div class="worked"><b>Exam-style:</b> in a class of 40, 60% are girls. Number of boys = 40% of 40 = 16.</div>

            <h3>9. Percentage increase and decrease</h3>
            <ul>
              <li><b>Increase:</b> new = original + (percent of original). A ₦800 fare increased by 25% rises by 200 to ₦1,000. Shortcut: multiply by 1.25.</li>
              <li><b>Decrease:</b> a ₦2,400 shirt discounted by 15% falls by 360 to ₦2,040. Shortcut: multiply by 0.85.</li>
              <li><b>Percentage change</b> = (change ÷ original) x 100%: from 80 to 100 is a rise of 20 → 20/80 x 100% = 25% increase.</li>
            </ul>
            <div class="worked"><b>TRAP worked example:</b> a price rises 50% then falls 50%. Start at ₦100 → rise to ₦150 → fall by 50% OF 150 (= 75) → ₦75. You did NOT return to ₦100! Successive percentages act on the CURRENT value, not the original.</div>

            <h3>10. Profit and loss percentage</h3>
            <ul>
              <li><b>Cost price (CP)</b> — what the trader paid. <b>Selling price (SP)</b> — what the customer paid.</li>
              <li><b>Profit</b> = SP - CP (when SP &gt; CP). <b>Loss</b> = CP - SP (when SP &lt; CP).</li>
              <li><b>Profit %</b> = (profit ÷ CP) x 100%. <b>Loss %</b> = (loss ÷ CP) x 100%. Percentages of profit and loss are ALWAYS on the COST price.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a trader buys a phone for ₦40,000 and sells it for ₦46,000. Profit = ₦6,000. Profit % = 6,000/40,000 x 100% = 15%.<br>Another trader buys a bag for ₦25,000 and sells at a 10% loss: loss = 2,500, SP = ₦22,500.</div>

            <h3>11. Simple interest — percentage in the bank</h3>
            <p><b>Simple interest</b> I = (P x R x T) ÷ 100, where P = principal (money saved or borrowed), R = rate per year (%), T = time in years.</p>
            <div class="worked"><b>Worked example:</b> ₦50,000 is saved at 6% per year simple interest for 3 years. I = (50,000 x 6 x 3) ÷ 100 = ₦9,000. Total amount = P + I = ₦59,000.</div>
            <div class="formula">TIP: if T is given in months, change to years first (18 months = 1.5 years). Forgetting this is the standard interest mistake.</div>

            <h3>12. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Simplify 24 : 36. <i>Ans: 2 : 3.</i></li>
              <li><b>Q2.</b> Express 45 minutes to 2 hours as a ratio. <i>Ans: 45 : 120 = 3 : 8.</i></li>
              <li><b>Q3.</b> Share 60 books between two classes in the ratio 2 : 3. <i>Ans: 24 and 36.</i></li>
              <li><b>Q4.</b> ₦45,000 is shared in the ratio 1 : 2 : 6. The largest share is? <i>Ans: one share = 5,000; largest = ₦30,000.</i></li>
              <li><b>Q5.</b> If 6 pens cost ₦540, what do 10 pens cost? <i>Ans: 1 pen ₦90 → ₦900.</i></li>
              <li><b>Q6.</b> 8 machines finish a job in 9 hours. How long will 6 machines take? <i>Ans: 8 x 9 = 72; 72 ÷ 6 = 12 hours.</i></li>
              <li><b>Q7.</b> Change 7/8 to a percentage. <i>Ans: 87.5%.</i></li>
              <li><b>Q8.</b> What is 35% of ₦8,000? <i>Ans: ₦2,800.</i></li>
              <li><b>Q9.</b> Express 18 as a percentage of 72. <i>Ans: 25%.</i></li>
              <li><b>Q10.</b> A ₦1,200 dress is sold at 10% discount. Sale price? <i>Ans: 1,200 - 120 = ₦1,080.</i></li>
              <li><b>Q11.</b> A bag bought for ₦16,000 is sold for ₦20,000. Profit %? <i>Ans: 4,000/16,000 x 100% = 25%.</i></li>
              <li><b>Q12.</b> Find the simple interest on ₦24,000 at 5% per year for 2 1/2 years. <i>Ans: (24,000 x 5 x 2.5) ÷ 100 = ₦3,000.</i></li>
            </ul>
            <div class="formula">SUMMARY: A ratio compares like quantities part-to-part and simplifies like a fraction; sharing in a ratio means dividing into equal shares. Proportion links equal ratios — direct proportion grows together (unitary method), inverse proportion trades one quantity against the other. Percentages express anything 'out of 100' and convert freely with fractions and decimals; they measure change, discount, profit, loss and interest — the arithmetic of the market, the bank and the exam hall alike.</div>

'''

LESSONS = [('Ratio, Proportion & Percentages', CONTENT_E)]

for title, content in LESSONS:
    assert '`' not in content and '${' not in content, title
    pat = re.compile(r"\n(\s*)title: '" + re.escape(title) + r"',")
    hits = list(pat.finditer(s))
    assert len(hits) == 1, (title, len(hits))
    k = hits[0].end()
    ci = s.index('content: `', k) + 10
    ce = s.index('`', ci)
    s = s[:ci] + content + s[ce:]
    print(title, '->', len(content), 'chars | svg:', '<svg' in content)

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
