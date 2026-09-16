#!/usr/bin/env python3
"""lessons8: final batch — Commerce intro, Probability & Statistics, Quadratics, Mensuration."""
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

COMMERCE = """
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
"""

PROBSTAT = """
            <h3>1. Summarising data: mean, median, mode</h3>
            <ul>
              <li><b>Mean:</b> total ÷ number of values.</li>
              <li><b>Median:</b> the middle value when sorted (average of the two middles if even count).</li>
              <li><b>Mode:</b> the most frequent value.</li>
              <li><b>Range:</b> largest − smallest.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Data: 3, 7, 7, 9, 4. Sorted: 3, 4, 7, 7, 9. Mean = 30/5 = 6; median = 7; mode = 7; range = 6.</div>
            <div class="worked"><b>Worked example (frequency table):</b> Scores 1, 2, 3 with frequencies 2, 5, 3. Mean = (1×2 + 2×5 + 3×3)/(2+5+3) = (2 + 10 + 9)/10 = <b>2.1</b>. Median = average of 5th and 6th values = (2+3)/2 = 2.5.</div>

            <h3>2. Pie charts — the angle arithmetic</h3>
            <div class="formula">Sector angle = (frequency ÷ total) × 360</div>
            <div class="worked"><b>Worked example:</b> A family spends ₦12,000 of a ₦48,000 budget on food. Food angle = 12,000/48,000 × 360 = <b>90 degrees</b>.</div>

            <h3>3. Probability basics</h3>
            <p>Probability measures how likely an event is, on a scale from <b>0 (impossible) to 1 (certain)</b>. For equally likely outcomes:</p>
            <div class="formula">P(event) = number of favourable outcomes ÷ total outcomes</div>
            <div class="worked"><b>Worked example:</b> A fair die: P(even) = 3/6 = <b>1/2</b>; P(greater than 4) = 2/6 = 1/3.</div>
            <div class="worked"><b>Worked example:</b> A bag has 3 red and 5 blue balls. P(red) = <b>3/8</b>.</div>

            <h3>4. The three rules that carry every exam</h3>
            <ul>
              <li><b>Complement:</b> P(not A) = 1 − P(A). "At least one" questions love this.</li>
              <li><b>Addition (mutually exclusive):</b> P(A or B) = P(A) + P(B) when both cannot happen together.</li>
              <li><b>Multiplication (independent):</b> P(A and B) = P(A) × P(B) when one result does not affect the other.</li>
            </ul>
            <div class="worked"><b>Worked example (complement):</b> P(rain) = 0.35 → P(no rain) = <b>0.65</b>.</div>
            <div class="worked"><b>Worked example (addition):</b> Die: P(2 or 5) = 1/6 + 1/6 = <b>1/3</b>.</div>
            <div class="worked"><b>Worked example (multiplication):</b> Two fair coins: P(two heads) = 1/2 × 1/2 = <b>1/4</b>. Sample space {HH, HT, TH, TT} confirms it.</div>
            <div class="worked"><b>Worked example (without replacement — dependent!):</b> From 3 red + 5 blue, two reds in a row without replacement: 3/8 × 2/7 = <b>6/56 = 3/28</b>. The second draw's odds change — multiplication still works, but with updated numbers.</div>

            <h3>5. Examiner's favourites</h3>
            <ul>
              <li>"Probability that the sum of two dice is 7" — list the 6 favourable pairs out of 36 → 1/6.</li>
              <li>"At least one head in two throws" — 1 − P(no heads) = 1 − 1/4 = 3/4.</li>
              <li>Pie-chart angles both ways (angle → frequency and frequency → angle).</li>
            </ul>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Writing a probability above 1 or below 0 — instant mark loss.</li>
              <li>Adding probabilities of events that can happen together (double counting).</li>
              <li>Using 1/2 × 1/2 for draws <b>without replacement</b> — the second fraction must shrink.</li>
              <li>Forgetting to sort data before finding the median.</li>
              <li>Using the wrong total in a frequency table (sum of frequencies, not of values).</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> see "at least" → complement. See "or" between exclusive events → add. See "and/together/successive independent" → multiply. Three keywords, three rules.</div>
"""

QUADRATICS = """
            <h3>1. What a quadratic is</h3>
            <p>A quadratic equation has the form <b>ax^2 + bx + c = 0</b> with a ≠ 0 — the highest power of x is 2, so there are (at most) <b>two roots</b>. Four solution methods: factorisation, completing the square, the formula, and graphs. Exams also test the <b>sum/product of roots</b> and the <b>discriminant</b>.</p>

            <h3>2. Factorisation</h3>
            <p>Find two numbers that <b>multiply to ac and add to b</b>, split the middle term, then factor by grouping; set each bracket to zero.</p>
            <div class="worked"><b>Worked example:</b> x^2 − 5x + 6 = 0. Numbers: −2 and −3 (multiply to 6, add to −5). (x − 2)(x − 3) = 0 → x = 2 or x = <b>3</b>.</div>
            <div class="worked"><b>Worked example:</b> 2x^2 + 5x − 3 = 0. ac = −6; numbers 6 and −1. 2x^2 + 6x − x − 3 = 2x(x + 3) − 1(x + 3) = (2x − 1)(x + 3) = 0 → x = 1/2 or x = <b>−3</b>.</div>

            <h3>3. Completing the square</h3>
            <p>Rewrite as (x + b/2a)^2 minus a constant, then take square roots.</p>
            <div class="worked"><b>Worked example:</b> x^2 + 6x − 7 = 0 → (x + 3)^2 − 9 − 7 = 0 → (x + 3)^2 = 16 → x + 3 = ±4 → x = 1 or x = <b>−7</b>.</div>

            <h3>4. The formula — the universal hammer</h3>
            <div class="formula">x = (−b ± √(b^2 − 4ac)) ÷ 2a</div>
            <div class="worked"><b>Worked example:</b> 3x^2 − 4x − 2 = 0 → x = (4 ± √(16 + 24))/6 = (4 ± √40)/6 ≈ (4 ± 6.32)/6 → x ≈ <b>1.72 or −0.39</b> (2 d.p.).</div>

            <h3>5. Sum and product of roots</h3>
            <div class="formula">α + β = −b/a • αβ = c/a</div>
            <ul>
              <li><b>Form an equation from roots:</b> x^2 − (sum)x + (product) = 0.</li>
              <li><b>Evaluate expressions</b> like 1/α + 1/β = (α + β)/(αβ) without solving.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Roots 2 and −5: sum −3, product −10 → equation x^2 + 3x − 10 = 0.</div>
            <div class="worked"><b>Worked example:</b> For 2x^2 − 7x + 3 = 0, find 1/α + 1/β. Sum = 7/2, product = 3/2 → (7/2)/(3/2) = <b>7/3</b>.</div>

            <h3>6. The discriminant — nature of roots</h3>
            <div class="formula">D = b^2 − 4ac • D &gt; 0: two distinct real roots • D = 0: equal roots • D &lt; 0: no real roots</div>
            <div class="worked"><b>Worked example:</b> Find k so that x^2 + kx + 9 = 0 has equal roots. D = k^2 − 36 = 0 → k = <b>±6</b>.</div>

            <h3>7. Word problems that hide quadratics</h3>
            <div class="worked"><b>Worked example:</b> A number exceeds its square root's square by… (too tame) — try this: "The product of two consecutive positive integers is 56." n(n + 1) = 56 → n^2 + n − 56 = 0 → (n + 8)(n − 7) = 0 → n = 7 (reject −8). The numbers: <b>7 and 8</b>. Always reject roots the story forbids.</div>

            <h3>8. Common mistakes that cost marks</h3>
            <ul>
              <li>Dropping the ± when taking square roots — losing one root costs half the marks.</li>
              <li>Sign slips in −b and in the sum/product formulas.</li>
              <li>Using D &gt; 0 for "equal roots" — equal means D = 0.</li>
              <li>Accepting negative or fractional answers that the word problem forbids.</li>
              <li>Dividing by x to "simplify" x^2 = 3x — you kill the root x = 0. Factor instead.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> try factorisation for 60 seconds; if the numbers do not jump out, switch to the formula without guilt. Marks care about answers, not methods.</div>
"""

MENSURATION = """
            <h3>1. Plane figures — the core areas</h3>
            <ul>
              <li><b>Rectangle:</b> A = l × b; perimeter = 2(l + b).</li>
              <li><b>Triangle:</b> A = (1/2) × base × height.</li>
              <li><b>Parallelogram:</b> A = base × perpendicular height (not the slant side!).</li>
              <li><b>Trapezium:</b> A = (1/2)(a + b)h, a and b the parallel sides.</li>
              <li><b>Circle:</b> A = πr^2; circumference = 2πr = πd.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Trapezium with parallel sides 8 cm and 12 cm, height 5 cm: A = (1/2)(20)(5) = <b>50 cm^2</b>.</div>

            <h3>2. Circle sectors and arcs</h3>
            <div class="formula">Arc length = (θ/360) × 2πr • Sector area = (θ/360) × πr^2</div>
            <div class="worked"><b>Worked example:</b> A sector of 90 degrees in a circle of radius 7 cm (π = 22/7): arc = (90/360) × 2 × 22/7 × 7 = <b>11 cm</b>; area = (90/360) × 22/7 × 49 = <b>38.5 cm^2</b>.</div>

            <h3>3. Solids: volumes first</h3>
            <ul>
              <li><b>Cube (edge e):</b> V = e^3; surface = 6e^2.</li>
              <li><b>Cuboid:</b> V = l × b × h; surface = 2(lb + bh + lh).</li>
              <li><b>Cylinder (radius r, height h):</b> V = πr^2h; curved surface = 2πrh; total = 2πrh + 2πr^2.</li>
              <li><b>Cone (radius r, height h, slant l):</b> V = (1/3)πr^2h; curved surface = πrl.</li>
              <li><b>Sphere:</b> V = (4/3)πr^3; surface = 4πr^2.</li>
              <li><b>Prism:</b> V = cross-section area × length.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Cylinder r = 7 cm, h = 10 cm (π = 22/7): V = 22/7 × 49 × 10 = <b>1540 cm^3</b>.</div>
            <div class="worked"><b>Worked example:</b> Cone r = 3 cm, h = 4 cm: slant l = √(9 + 16) = 5 cm; V = (1/3) × π × 9 × 4 = 12π ≈ <b>37.7 cm^3</b>; curved surface = π × 3 × 5 = 15π ≈ 47.1 cm^2.</div>

            <h3>4. Examiner's favourites</h3>
            <ul>
              <li><b>Melting/recasting:</b> volume is conserved — melt a sphere into a cylinder: set volumes equal, solve for the unknown height.</li>
              <li><b>Water in a tank:</b> rise in level = volume added ÷ base area.</li>
              <li><b>Shaded regions:</b> subtract the smaller area from the bigger (circle inside a square, sector minus triangle).</li>
              <li><b>Cone from a sector:</b> a sector of radius l rolled into a cone has slant l and base radius r where arc length = 2πr.</li>
            </ul>
            <div class="worked"><b>Worked example (recast):</b> A sphere of radius 3 cm is melted into a cylinder of radius 3 cm. Height? (4/3)π(27) = π(9)h → 36 = 9h → h = <b>4 cm</b>.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Using diameter where the formula wants radius (or vice versa).</li>
              <li>Using slant height for a cone's <b>volume</b> — volume needs the perpendicular height; curved surface needs the slant.</li>
              <li>Parallelogram area with the slant side instead of the perpendicular height.</li>
              <li>Forgetting the (1/3) in cone and pyramid volumes.</li>
              <li>Ignoring the stated value of π (22/7 vs 3.14) and losing the "exact" mark.</li>
              <li>Mixing units — cm with m — before multiplying.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> before computing, write r = … and h = … on the answer line. Most mensuration marks die in the first ten seconds of misread data, not in the arithmetic.</div>
"""

deepen('Commerce: Meaning, Scope & Production', 3804, COMMERCE)
deepen('Probability & Statistics', 3906, PROBSTAT)
deepen('Quadratic Equations', 3922, QUADRATICS)
deepen('Mensuration & Solid Geometry', 3968, MENSURATION)

open(P, 'w', encoding='utf-8').write(s)
print('lessons8 applied OK — all 96 lessons deep')
