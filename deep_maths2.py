# deep_maths2.py — Deep-lesson batch 6: Mathematics JSS2 + JSS3 (finishes JSS Maths). RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT_J2 = '''
            <h3>1. Directed numbers — numbers with a direction</h3>
            <p><b>Directed numbers</b> are positive and negative numbers together. They describe opposite directions: profit (+) and loss (-), above (+) and below (-) zero, deposit (+) and withdrawal (-), North (+) and South (-). The <b>sign</b> tells the direction; the size (magnitude) tells how much.</p>
            <ul>
              <li>+5 and -5 have the SAME size but OPPOSITE directions; they are 10 apart on the number line.</li>
              <li>On the number line, numbers INCREASE to the right: -1 &gt; -2 &gt; -3, however strange that feels at first.</li>
              <li>The distance of a number from zero (ignoring sign) is its <b>absolute value</b>: |-7| = 7.</li>
            </ul>

            <h3>2. Adding and subtracting directed numbers</h3>
            <ul>
              <li><b>Same signs:</b> add the sizes, keep the sign: (+3) + (+5) = +8; (-3) + (-5) = -8.</li>
              <li><b>Different signs:</b> subtract the smaller size from the bigger; take the sign of the bigger: (+9) + (-4) = +5; (-9) + (+4) = -5.</li>
              <li><b>Subtracting</b> = adding the opposite: (+7) - (+3) = +4; (+7) - (-3) = (+7) + (+3) = +10; (-7) - (-3) = (-7) + (+3) = -4.</li>
            </ul>
            <svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A number line from minus eight to plus eight showing the calculation minus three plus five: a jump of five steps to the right starting at minus three and landing at plus two">
              <path d="M20 70 L440 70" stroke="#334155" stroke-width="2.5"/>
              <path d="M432 64 L440 70 L432 76" fill="#334155"/>
              <path d="M28 64 L20 70 L28 76" fill="#334155"/>
              <g stroke="#334155" stroke-width="2">
                <path d="M45 65 L45 75"/><path d="M70 65 L70 75"/><path d="M95 65 L95 75"/><path d="M120 65 L120 75"/><path d="M145 65 L145 75"/><path d="M170 65 L170 75"/><path d="M195 65 L195 75"/><path d="M220 65 L220 75"/><path d="M245 65 L245 75"/><path d="M270 65 L270 75"/><path d="M295 65 L295 75"/><path d="M320 65 L320 75"/><path d="M345 65 L345 75"/><path d="M370 65 L370 75"/><path d="M395 65 L395 75"/><path d="M420 65 L420 75"/>
              </g>
              <g font-size="10" fill="#334155" text-anchor="middle" font-weight="700">
                <text x="70" y="94">-6</text><text x="120" y="94">-4</text><text x="170" y="94">-2</text><text x="220" y="94">0</text><text x="270" y="94">2</text><text x="320" y="94">4</text><text x="370" y="94">6</text><text x="420" y="94">8</text>
              </g>
              <circle cx="145" cy="70" r="6" fill="#d97706"/>
              <text x="145" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">start at -3</text>
              <path d="M145 46 C190 18 250 18 292 44" stroke="#059669" stroke-width="2.5" fill="none"/>
              <path d="M286 36 L295 46 L282 48" fill="#059669"/>
              <text x="220" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">+5 (five steps right)</text>
              <circle cx="295" cy="70" r="6" fill="#059669"/>
              <text x="295" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">land on +2</text>
            </svg>
            <div class="worked"><b>Money model:</b> think of positives as naira you HAVE and negatives as naira you OWE. You owe ₦3,000 (-3,000) and earn ₦5,000: pay the debt first, and ₦2,000 remains → (-3,000) + (+5,000) = +2,000. The number line and the purse always agree.</div>

            <h3>3. Multiplying and dividing directed numbers</h3>
            <ul>
              <li><b>Same signs → positive:</b> (+4) x (+3) = +12; (-4) x (-3) = +12; (-12) ÷ (-3) = +4.</li>
              <li><b>Different signs → negative:</b> (-4) x (+3) = -12; (+4) x (-3) = -12; (-12) ÷ (+3) = -4.</li>
              <li>Memory hook: 'friends of friends are friends; enemies of enemies are friends; friends of enemies are enemies'.</li>
            </ul>
            <div class="formula">TRAP: (-3)^2 = +9 but -3^2 = -9! The square in -3^2 applies only to the 3 (order of operations), while (-3)^2 squares the whole negative number. Exams adore this trap.</div>

            <h3>4. Order of operations with directed numbers (BODMAS)</h3>
            <p><b>B</b>rackets → <b>O</b>f (powers/roots) → <b>D</b>ivision/<b>M</b>ultiplication → <b>A</b>ddition/<b>S</b>ubtraction, left to right. Signs make discipline essential.</p>
            <div class="worked"><b>Worked example:</b> -2 + 3 x (-4) - (-6).<br>Multiply first: 3 x (-4) = -12. Then: -2 + (-12) - (-6) = -2 - 12 + 6 = -8.</div>
            <div class="worked"><b>Worked example:</b> (-2 + 3) x (-4) - (-6) = (+1) x (-4) + 6 = -4 + 6 = +2. Brackets change everything — compare with the previous answer (-8).</div>

            <h3>5. Simple equations — the balance method, revisited</h3>
            <ul>
              <li>x + 8 = 3 → x = 3 - 8 = -5 (directed numbers make the answer possible!).</li>
              <li>x - 5 = -9 → x = -9 + 5 = -4.</li>
              <li>-3x = 21 → x = -7. And -x = 6 → x = -6.</li>
              <li>x/(-4) = 3 → x = -12.</li>
            </ul>

            <h3>6. Variables on both sides</h3>
            <p>Collect the x-terms on ONE side and the numbers on the other. Move a term across the = by doing the opposite operation to both sides.</p>
            <div class="worked"><b>Worked example:</b> 5x - 3 = 2x + 9.<br>Subtract 2x: 3x - 3 = 9. Add 3: 3x = 12. Divide: x = 4. Check: 5(4) - 3 = 17 = 2(4) + 9.</div>
            <div class="worked"><b>Worked example with negatives:</b> 7 - 2x = 3x - 8.<br>Add 2x: 7 = 5x - 8. Add 8: 15 = 5x. x = 3. Check: 7 - 6 = 1 and 9 - 8 = 1.</div>

            <h3>7. Equations with brackets</h3>
            <div class="worked"><b>Worked example:</b> 3(x - 4) = 2(x + 1).<br>Open: 3x - 12 = 2x + 2. Subtract 2x: x - 12 = 2. Add 12: x = 14.</div>
            <div class="formula">TIP: open ALL brackets first, then collect like terms. Trying to move bracketed chunks across the = sign is the classic error.</div>

            <h3>8. Equations with fractions</h3>
            <p>Multiply EVERY term by the LCM of the denominators to clear the fractions.</p>
            <div class="worked"><b>Worked example:</b> x/3 + 2 = x/2 - 1. LCM of 3 and 2 is 6. Multiply all: 2x + 12 = 3x - 6. Then 12 + 6 = 3x - 2x → x = 18. Check: 18/3 + 2 = 8 and 18/2 - 1 = 8.</div>
            <div class="worked"><b>Worked example:</b> (2x + 1)/5 = 3. Multiply by 5: 2x + 1 = 15 → 2x = 14 → x = 7.</div>

            <h3>9. Word problems into equations</h3>
            <div class="worked"><b>Worked example (number puzzle):</b> 'I think of a number, multiply it by 4, subtract 7, and get 21.' 4x - 7 = 21 → 4x = 28 → x = 7.</div>
            <div class="worked"><b>Worked example (ages):</b> In 5 years, Kemi will be three times as old as she was 3 years ago. Let now = x: x + 5 = 3(x - 3) → x + 5 = 3x - 9 → 14 = 2x → x = 7. Kemi is 7 (check: 12 = 3 x 4).</div>
            <div class="worked"><b>Worked example (temperature):</b> A freezer falls 3 degC every hour from 8 degC. After how many hours is it -16 degC? 8 - 3h = -16 → -3h = -24 → h = 8 hours.</div>

            <h3>10. A first look at inequalities</h3>
            <p>An <b>inequality</b> uses &lt;, &gt;, &lt;= or &gt;= instead of =. Solve it exactly like an equation — with ONE golden rule: <b>multiplying or dividing by a NEGATIVE number flips the sign</b>.</p>
            <ul>
              <li>x + 3 &gt; 7 → x &gt; 4 (every number above 4 works — infinitely many solutions).</li>
              <li>-2x &lt; 10 → divide by -2 and FLIP: x &gt; -5.</li>
              <li>Solutions are drawn on a number line with an open circle and an arrow: x &gt; 4 shades everything right of 4.</li>
            </ul>
            <div class="formula">EXAM LINE: the flip rule is asked every single session somewhere in the country. If you divide or multiply by a negative and did not flip, the mark is gone.</div>

            <h3>11. Changing the subject of a formula</h3>
            <p>Treat the letter you want as 'x' and push everything else across using inverse operations.</p>
            <div class="worked"><b>Worked examples:</b><br>v = u + at, make t the subject: v - u = at → t = (v - u)/a.<br>P = 2(l + b), make l the subject: P/2 = l + b → l = P/2 - b.<br>A = 1/2 bh, make h the subject: 2A = bh → h = 2A/b.</div>

            <h3>12. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> (-7) + (+11) = ? <i>Ans: +4.</i></li>
              <li><b>Q2.</b> (-6) - (-14) = ? <i>Ans: +8.</i></li>
              <li><b>Q3.</b> (-5) x (-8) = ? <i>Ans: +40.</i></li>
              <li><b>Q4.</b> (-36) ÷ (+9) = ? <i>Ans: -4.</i></li>
              <li><b>Q5.</b> Evaluate -4 + 2 x (-5) - (-3). <i>Ans: -4 - 10 + 3 = -11.</i></li>
              <li><b>Q6.</b> Solve 4x + 7 = -13. <i>Ans: 4x = -20, x = -5.</i></li>
              <li><b>Q7.</b> Solve 6x - 5 = 2x + 11. <i>Ans: 4x = 16, x = 4.</i></li>
              <li><b>Q8.</b> Solve 2(x + 3) = 3(x - 2). <i>Ans: 2x + 6 = 3x - 6 → x = 12.</i></li>
              <li><b>Q9.</b> Solve x/4 - 3 = x/6. <i>Ans: x 12: 3x - 36 = 2x → x = 36.</i></li>
              <li><b>Q10.</b> Solve -3x &gt;= 12. <i>Ans: x &lt;= -4 (sign flips).</i></li>
              <li><b>Q11.</b> Make u the subject of v^2 = u^2 + 2as (u positive). <i>Ans: u = √(v^2 - 2as) — or at JSS level: make a the subject: a = (v^2 - u^2)/(2s).</i></li>
              <li><b>Q12.</b> I think of a number, add 9, then divide by 4 to get -2. Find it. <i>Ans: (x + 9)/4 = -2 → x + 9 = -8 → x = -17.</i></li>
            </ul>
            <div class="formula">SUMMARY: Directed numbers carry signs that record direction; same-sign pairs add, mixed-sign pairs subtract toward the bigger, and products/quotients are positive for like signs, negative otherwise — with BODMAS keeping order. The balance method solves simple equations, equations with variables on both sides, brackets and fractions, and translates word problems into symbols. Inequalities behave like equations except that multiplying or dividing by a negative flips the sign, and formulas can be rearranged by treating the desired letter as the unknown.</div>

'''

CONTENT_J3 = '''
            <h3>1. The language of the market</h3>
            <ul>
              <li><b>Cost price (CP)</b> — all the money a trader spends to bring goods to the shop (price + transport + storage).</li>
              <li><b>Selling price (SP)</b> — the price the customer actually pays.</li>
              <li><b>Marked price</b> — the label price before any discount.</li>
              <li><b>Profit</b> = SP - CP when SP &gt; CP. <b>Loss</b> = CP - SP when SP &lt; CP.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a trader buys a carton of noodles for ₦8,500, pays ₦500 transport, and sells it for ₦10,200. CP = 8,500 + 500 = ₦9,000. Profit = 10,200 - 9,000 = ₦1,200.</div>

            <h3>2. Profit and loss percentage</h3>
            <ul>
              <li><b>Profit %</b> = (profit ÷ CP) x 100%. <b>Loss %</b> = (loss ÷ CP) x 100%. ALWAYS on cost price.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> CP ₦4,000, SP ₦4,800 → profit ₦800 → profit % = 800/4,000 x 100% = 20%.<br>CP ₦5,000 sold at 15% loss → loss = 750 → SP = ₦4,250.</div>
            <div class="worked"><b>Reverse example:</b> a phone is sold for ₦63,000 at 5% profit. CP = SP ÷ 1.05 = ₦60,000. (Because SP = 105% of CP.)</div>

            <h3>3. Discounts — the art of the market</h3>
            <p>A <b>discount</b> is a reduction from the marked price, usually a percentage. Sale price = marked price - discount. Successive discounts apply ONE AFTER THE OTHER on the NEW price.</p>
            <div class="worked"><b>Worked example:</b> a shirt marked ₦8,000 gets 10% discount: discount = ₦800, sale price = ₦7,200.</div>
            <div class="worked"><b>Worked example (successive):</b> the same shirt gets '10% then 5%' in a promo: after 10% → ₦7,200; then 5% of 7,200 = ₦360 → final ₦6,840. NOT 15% off ₦8,000 (which would be ₦6,800) — percentages chain on the current price.</div>
            <div class="formula">TRAP: '10% + 5% discount' in real life usually means SUCCESSIVE discounts, not 15% at once. Read carefully and compute step by step.</div>

            <h3>4. Commission, rate and taxes in one line</h3>
            <ul>
              <li><b>Commission</b> — payment as a percentage of sales: an agent selling land worth ₦2,000,000 at 3% commission earns ₦60,000.</li>
              <li><b>VAT</b> — value added tax of 7.5% added to many bills in Nigeria: a ₦20,000 service carries ₦1,500 VAT → total ₦21,500.</li>
            </ul>

            <h3>5. Simple interest</h3>
            <p><b>I = (P x R x T) ÷ 100</b> with P = principal, R = rate % per year, T = time in YEARS. Amount A = P + I.</p>
            <div class="worked"><b>Worked example:</b> ₦120,000 at 8% per year for 3 years: I = (120,000 x 8 x 3)/100 = ₦28,800; amount = ₦148,800.</div>
            <div class="worked"><b>Worked example (months):</b> ₦45,000 at 6% for 18 months: T = 1.5 years → I = (45,000 x 6 x 1.5)/100 = ₦4,050.</div>
            <div class="worked"><b>Reverse example:</b> an investment earned ₦9,000 interest in 2 years at 5%. Find P: 9,000 = (P x 5 x 2)/100 → 9,000 = P/10 → P = ₦90,000.</div>

            <h3>6. Compound interest — a first look</h3>
            <p><b>Compound interest</b> adds each year's interest to the principal, so interest itself earns interest. Amount after n years: <b>A = P(1 + R/100)^n</b>.</p>
            <div class="worked"><b>Worked example:</b> ₦10,000 at 10% compounded for 2 years.<br>Year 1: 10,000 + 1,000 = 11,000. Year 2: 11,000 + 1,100 = 12,100.<br>Formula check: 10,000 x (1.1)^2 = 10,000 x 1.21 = ₦12,100. Compound pays ₦2,100 where simple would pay ₦2,000.</div>

            <h3>7. Hire purchase and instalments</h3>
            <p><b>Hire purchase (HP)</b> = deposit + monthly instalments; it usually costs MORE than the cash price.</p>
            <div class="worked"><b>Worked example:</b> a bicycle's cash price is ₦60,000. HP: deposit ₦15,000 + 10 monthly instalments of ₦5,500 = 15,000 + 55,000 = ₦70,000. The HP buyer pays ₦10,000 extra for the privilege of paying slowly.</div>

            <h3>8. Shares and dividends (a glimpse)</h3>
            <ul>
              <li>Companies split ownership into <b>shares</b>; a <b>dividend</b> is the profit shared per share.</li>
              <li>2,000 shares paying ₦1.50 dividend each return ₦3,000 a year.</li>
            </ul>

            <h3>9. Rates and utility bills</h3>
            <div class="worked"><b>Worked example (electricity):</b> a home uses 120 units (kWh) in a month at ₦60 per unit, plus a fixed charge of ₦850 and 7.5% VAT on the energy cost. Energy = 120 x 60 = ₦7,200; VAT = ₦540; bill = 7,200 + 540 + 850 = ₦8,590. This is exactly how NEPA/disco bills are built.</div>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> CP ₦7,500, SP ₦9,000. Profit %? <i>Ans: 1,500/7,500 x 100% = 20%.</i></li>
              <li><b>Q2.</b> Goods bought for ₦12,000 sold at 8% loss. SP? <i>Ans: 12,000 - 960 = ₦11,040.</i></li>
              <li><b>Q3.</b> An item marked ₦5,600 gets 12 1/2% discount. Sale price? <i>Ans: discount ₦700 → ₦4,900.</i></li>
              <li><b>Q4.</b> A salesman earns 4% on ₦850,000 of sales. Commission? <i>Ans: ₦34,000.</i></li>
              <li><b>Q5.</b> Simple interest on ₦75,000 at 4% for 2 1/2 years. <i>Ans: (75,000 x 4 x 2.5)/100 = ₦7,500.</i></li>
              <li><b>Q6.</b> At what rate will ₦50,000 earn ₦6,000 in 3 years (simple)? <i>Ans: 6,000 = (50,000 x R x 3)/100 → R = 4%.</i></li>
              <li><b>Q7.</b> Amount of ₦20,000 at 5% compound for 2 years. <i>Ans: 20,000 x 1.05^2 = ₦22,050.</i></li>
              <li><b>Q8.</b> HP: deposit ₦8,000 + 12 instalments of ₦2,500; cash price ₦35,000. Extra paid on HP? <i>Ans: 8,000 + 30,000 = 38,000; extra = ₦3,000.</i></li>
              <li><b>Q9.</b> A trader makes 25% profit by selling at ₦250 per item. CP per item? <i>Ans: 250 ÷ 1.25 = ₦200.</i></li>
              <li><b>Q10.</b> 90 units of electricity at ₦55/unit, fixed charge ₦700, no VAT. Bill? <i>Ans: 4,950 + 700 = ₦5,650.</i></li>
            </ul>
            <div class="formula">SUMMARY: Business mathematics turns the market into arithmetic: cost, selling and marked prices define profit, loss and discount; profit and loss percentages are always measured on cost. Commission, VAT and rates apply percentages to sales and bills, simple interest follows I = PRT/100 while compound interest lets interest earn interest, and hire purchase shows the hidden price of paying slowly — the complete survival kit for BECE business maths and for the market itself.</div>

'''

LESSONS = [
    ('Simple Equations & Directed Numbers', CONTENT_J2),
    ('Business Mathematics: Profit, Loss, Discount & Interest', CONTENT_J3),
]

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
