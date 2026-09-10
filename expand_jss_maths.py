"""Deep-expand JSS Mathematics lessons (batch 6a)."""
import textwrap

CUR = '/home/user/index.html'
s = open(CUR).read()

def deep(title, extra):
    global s
    t = s.index("title: '%s'," % title)
    c = s.index('content: `', t)
    k = s.index('cards:', c)
    std = s.find('\n          `,', c)
    block = textwrap.indent(textwrap.dedent(extra).strip('\n'), '            ')
    if std != -1 and std < k:
        s = s[:std] + '\n' + block + '\n' + s[std:]
    else:
        cl = s.rfind('`', c, k)          # inline-closing variant: insert before the backtick
        assert cl > c
        s = s[:cl] + '\n' + block + '\n            ' + s[cl:]

deep('Whole Numbers, Place Value & Estimation', """

    <h3>Deep dive: place value does the heavy lifting</h3>
    <p>Every digit's worth depends on its <b>position</b>: in 4,738 the 4 means 4 thousands, the 7 means 7 hundreds, the 3 means 3 tens and the 8 means 8 units. Writing the number in a place-value chart before any calculation prevents the classic "misaligned column" errors in addition and subtraction.</p>
    <h3>Rounding: the one rule</h3>
    <p>Look at the digit <b>immediately right</b> of the place you are rounding to: <b>5 or more → round up; less than 5 → leave it</b>. Round 4,738 to the nearest hundred: the digit right of the 7 is 3 (&lt; 5), so 4,738 ≈ <b>4,700</b>. To the nearest ten: digit 8 ≥ 5, so 4,738 ≈ <b>4,740</b>.</p>
    <h3>Estimating before you calculate</h3>
    <p>Round each number first, then compute: 48 × 21 ≈ 50 × 20 = <b>1,000</b>. The true answer (1,008) must be near your estimate — if your final answer is 10,008 or 100.8, the estimate instantly tells you something went wrong. Always estimate first; it is the cheapest error-checker in mathematics.</p>
    <h3>Worked example</h3>
    <p><b>A shop sold ₦2,847 on Monday and ₦3,196 on Tuesday. Estimate the total, then find it exactly.</b> Estimate: 3,000 + 3,000 = 6,000. Exact: 2,847 + 3,196 = 6,043 — close to the estimate ✓.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>0 is a placeholder, not "nothing to write": three hundred and five = 305, not 35.</li>
      <li>"Nearest hundred" of 4,950 is 5,000 — the 5 rounds up, then everything right becomes 0.</li>
      <li>Read the question: "round" ≠ "truncate" (truncate just chops digits off).</li>
    </ul>
""")

deep('Fractions & Decimals', """

    <h3>Deep dive: fractions, decimals and percents are one family</h3>
    <div class="formula">½ = 0.5 = 50% &nbsp;·&nbsp; ¼ = 0.25 = 25% &nbsp;·&nbsp; ⅕ = 0.2 = 20% &nbsp;·&nbsp; ⅛ = 0.125 = 12.5%</div>
    <p>A <b>proper</b> fraction has top &lt; bottom (³⁄₄); an <b>improper</b> fraction has top ≥ bottom (⁷⁄₄); a <b>mixed number</b> mixes a whole with a fraction (1¾). Convert mixed → improper: multiply the whole by the denominator and add the top: 1¾ = (1×4 + 3)/4 = 7/4.</p>
    <h3>The four operations, cleanly</h3>
    <ul>
      <li><b>Add/subtract</b>: same denominator first (LCM). ²⁄₃ + ¾ = ⁸⁄₁₂ + ⁹⁄₁₂ = <b>17/12 = 1 5/12</b>.</li>
      <li><b>Multiply</b>: tops × tops, bottoms × bottoms. ²⁄₃ × ¾ = ⁶⁄₁₂ = ½.</li>
      <li><b>Divide</b>: flip the second fraction and multiply. ²⁄₃ ÷ ¾ = ²⁄₃ × ⁴⁄₃ = 8/9.</li>
      <li><b>Fraction → decimal</b>: divide top by bottom (¾ = 3 ÷ 4 = 0.75). <b>Decimal → fraction</b>: use the place value (0.75 = 75/100 = ¾).</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>Share ₦900 so Ada gets ⅖ and Bola gets the rest.</b> Ada: ⅖ × 900 = (900 × 2)/5 = <b>₦360</b>. Bola: 900 − 360 = <b>₦540</b> (which is ⅗ of 900 ✓).</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Never add the denominators: ½ + ¼ ≠ ²⁄₆ — find the common denominator (¾).</li>
      <li>"Of" means multiply: ½ of 80 = ½ × 80 = 40.</li>
      <li>Always cancel to lowest terms — ⁶⁄₁₂ and ½ are the same number, but examiners ask for lowest terms.</li>
    </ul>
""")

deep('Introduction to Algebra: Letters & Simple Equations', """

    <h3>Deep dive: letters are just unknown numbers</h3>
    <p>In algebra a letter (called a <b>variable</b>) stands for a number we don't know yet. 3a means 3 × a; the × is dropped. a + a = 2a, and 3a + 2a = <b>5a</b> — but 3a + 2b stays as it is, because a and b are <b>unlike terms</b>. Only like terms (same letter, same power) can be added.</p>
    <h3>Substitution</h3>
    <p>Replace each letter with its number, then follow BODMAS. If a = 4 and b = 3, then 2a + 5b = (2×4) + (5×3) = 8 + 15 = <b>23</b>. With a minus: 3a − 2b = 12 − 6 = 6.</p>
    <h3>Solving by balancing</h3>
    <p>An equation is a balance: whatever you do to one side you must do to the other. Solve x + 7 = 15 → subtract 7 from both sides → x = <b>8</b>. Solve 3x = 21 → divide both sides by 3 → x = <b>7</b>. Always <b>check</b> by substituting your answer back into the original equation.</p>
    <h3>Worked example</h3>
    <p><b>Musa is x years old. His father is 3 times his age, and their ages add to 48. Find x.</b> x + 3x = 48 → 4x = 48 → x = 12. Musa is 12, his father 36. Check: 12 + 36 = 48 ✓.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>3a + a = 4a (the lone a counts as 1a).</li>
      <li>a × a = a², but a + a = 2a — adding is not multiplying.</li>
      <li>Write the units/answer in words at the end — "x = 12 years" scores the full mark.</li>
    </ul>
""")

deep('Angles & Plane Figures', """

    <h3>Deep dive: the angle facts that unlock every geometry question</h3>
    <ul>
      <li><b>Acute</b> &lt; 90° · <b>right</b> = 90° · <b>obtuse</b> 90–180° · <b>straight</b> = 180° · <b>reflex</b> 180–360°.</li>
      <li>Angles on a straight line sum to <b>180°</b>; angles at a point sum to <b>360°</b>.</li>
      <li>Angles of a triangle sum to <b>180°</b>; angles of a quadrilateral sum to <b>360°</b>.</li>
      <li>Triangles by sides: <b>equilateral</b> (3 equal, all angles 60°), <b>isosceles</b> (2 equal sides, 2 equal base angles), <b>scalene</b> (no equals).</li>
    </ul>
    <h3>Worked examples</h3>
    <ol>
      <li><b>A triangle has angles 65° and 50°. Find the third.</b> 180 − 65 − 50 = <b>65°</b> — and because two angles are equal, the triangle is isosceles.</li>
      <li><b>Two angles on a straight line are x and 3x. Find x.</b> x + 3x = 180 → 4x = 180 → x = <b>45°</b>.</li>
      <li><b>A quadrilateral has angles 90°, 90° and 70°. Find the fourth.</b> 360 − 250 = <b>110°</b>.</li>
    </ol>
    <h3>Exam watch</h3>
    <ul>
      <li>An exterior angle of a triangle equals the sum of the two opposite interior angles — a fast shortcut.</li>
      <li>Reflex angles are the ones most students forget exist (&gt; 180°).</li>
      <li>Show every step: the method marks are worth more than the final number.</li>
    </ul>
""")

deep('Ratio, Proportion & Percentages', """

    <h3>Deep dive: sharing in a ratio</h3>
    <p>A ratio compares quantities: "2 : 3" means every 5 parts, 2 belong to one side and 3 to the other. To share, <b>add the parts, divide, then multiply</b>:</p>
    <h3>Worked example</h3>
    <p><b>Share ₦6,000 between Chidi and Amaka in the ratio 2 : 3.</b></p>
    <ol>
      <li>Total parts = 2 + 3 = 5.</li>
      <li>One part = 6,000 ÷ 5 = ₦1,200.</li>
      <li>Chidi = 2 × 1,200 = <b>₦2,400</b>; Amaka = 3 × 1,200 = <b>₦3,600</b>. Check: 2,400 + 3,600 = 6,000 ✓.</li>
    </ol>
    <h3>Percentages: of, and change</h3>
    <div class="formula">percentage of a quantity = (percent ÷ 100) × quantity &nbsp;·&nbsp; % change = (change ÷ original) × 100</div>
    <p><b>35% of 240</b> = 0.35 × 240 = <b>84</b>. <b>A phone's price rises from ₦800 to ₦1,000. Find the percentage increase.</b> Change = 200; % increase = (200 ÷ 800) × 100 = <b>25%</b> — note the division is by the <b>original</b> 800, not the new 1,000.</p>
    <h3>Unitary method (proportion)</h3>
    <p>If 4 exercise books cost ₦600, then 1 book = ₦150, so 7 books = <b>₦1,050</b>. Find the value of ONE first — that single habit solves almost every proportion question.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Ratio order matters: sharing 2 : 3 is different from 3 : 2 — match names to numbers carefully.</li>
      <li>Percent means "per hundred": 40% = 40/100 = 0.4.</li>
      <li>A 20% increase followed by a 20% decrease does NOT return the original price — percentages act on different bases.</li>
    </ul>
""")

deep('Simple Equations & Directed Numbers', """

    <h3>Deep dive: directed numbers on the number line</h3>
    <p>Negative numbers are movements to the <b>left</b> of zero: 3 + (−5) means start at 3 and move 5 left → <b>−2</b>. Subtracting a negative moves <b>right</b>: 3 − (−5) = 3 + 5 = <b>8</b>. The sign rules for multiplication and division:</p>
    <div class="formula">same signs → positive (+ × + = +, − × − = +) &nbsp;·&nbsp; different signs → negative (+ × − = −)</div>
    <h3>Two-step equations</h3>
    <p>Undo the operations in reverse order (additions/subtractions first, then multiplication/division):</p>
    <ol>
      <li><b>2x + 3 = 11</b> → subtract 3: 2x = 8 → divide by 2: x = <b>4</b>.</li>
      <li><b>5y − 7 = 18</b> → add 7: 5y = 25 → y = <b>5</b>.</li>
      <li><b>x/4 + 2 = 5</b> → subtract 2: x/4 = 3 → multiply by 4: x = <b>12</b>.</li>
    </ol>
    <p>Always substitute your answer back: 2(4) + 3 = 11 ✓.</p>
    <h3>Worked word problem</h3>
    <p><b>Three times a number, minus 4, gives 14. Find the number.</b> 3n − 4 = 14 → 3n = 18 → n = <b>6</b>. Translating the sentence into an equation is the whole skill: "three times a number" = 3n; "minus 4" = − 4; "gives" = equals.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>−7 − 3 = −10 (moving further left), but −7 + 3 = −4.</li>
      <li>−6 ÷ −2 = +3 — same signs give positive.</li>
      <li>In word problems, define the letter first ("let n = the number") — it earns a mark and keeps you organised.</li>
    </ul>
""")

deep('Business Mathematics: Profit, Loss, Discount & Interest', """

    <h3>Deep dive: the four formulas of everyday money</h3>
    <div class="formula">Profit = Selling Price − Cost Price &nbsp;·&nbsp; Loss = Cost Price − Selling Price<br>% Profit = (Profit ÷ Cost Price) × 100 &nbsp;·&nbsp; Simple Interest I = (P × R × T) ÷ 100</div>
    <p>Percentages of profit and loss are always calculated on the <b>cost price</b> — that is the rule examiners test most.</p>
    <h3>Worked examples</h3>
    <ol>
      <li><b>A trader buys a bag of rice for ₦24,000 and sells it for ₦27,600. Find the percentage profit.</b> Profit = 3,600. % Profit = (3,600 ÷ 24,000) × 100 = <b>15%</b>.</li>
      <li><b>A shirt marked ₦5,000 is sold at a 20% discount. Find the selling price.</b> Discount = 0.20 × 5,000 = 1,000. Selling price = <b>₦4,000</b>.</li>
      <li><b>₦12,000 is saved at 5% simple interest for 3 years. Find the interest and the total.</b> I = (12,000 × 5 × 3)/100 = <b>₦1,800</b>. Total = ₦13,800.</li>
    </ol>
    <h3>Hire purchase, in one breath</h3>
    <p>Hire purchase = deposit + monthly instalments. It always costs <b>more</b> than the cash price — the difference is the interest. Compare "total HP cost" against "cash price" before deciding; that comparison is a favourite WAEC/NECO question.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>% profit is on <b>cost</b> price, never on selling price.</li>
      <li>Simple interest ≠ compound interest: simple stays on the original principal only.</li>
      <li>Read whether the question wants the interest, the total amount, or the selling price — answering the wrong quantity loses the whole mark.</li>
    </ul>
""")

open(CUR, 'w', encoding='utf-8').write(s)
print('JSS Maths batch 6a written: 7 topics')
