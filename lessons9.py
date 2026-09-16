#!/usr/bin/env python3
"""lessons9: extend the five 3.5-4k lessons to full textbook depth with deep-dive sections."""
P = '/home/user/index.html'
s = open(P, encoding='utf-8').read()

def extend(title, add):
    global s
    i = s.index("title: '%s'," % title)
    a = s.index('content: `', i)
    b = s.index('`,', a)
    s = s[:b] + add + s[b:]

QUAD = """
            <h3>Deep dive: graphical solution</h3>
            <p>Plot y = ax^2 + bx + c with a small table of values; the <b>roots are where the curve crosses y = 0</b> (the x-axis). A curve that touches once has equal roots; one that never touches has no real roots — the picture of the discriminant.</p>
            <div class="worked"><b>Worked example:</b> Solve x^2 − 4x − 5 = 0 graphically. Table: x = −2..6 gives y = 7, 0, −5, −8, −9, −8, −5, 0, 7. The curve crosses at x = −1 and x = 5 → roots <b>−1 and 5</b>.</div>
            <p>Graphs also solve <b>mixed equations</b>: to solve x^2 = 2x + 3, draw y = x^2 and y = 2x + 3 and read the intersections.</p>

            <h3>Deep dive: identities built from sum and product</h3>
            <ul>
              <li>α^2 + β^2 = (α + β)^2 − 2αβ.</li>
              <li>(α − β)^2 = (α + β)^2 − 4αβ.</li>
              <li>1/α + 1/β = (α + β)/(αβ) and α/β + β/α = ((α + β)^2 − 2αβ)/(αβ).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> If α, β are roots of x^2 − 5x + 4 = 0, find α^2 + β^2. Sum = 5, product = 4 → 25 − 8 = <b>17</b> — without solving the equation at all.</div>

            <h3>Deep dive: one linear + one quadratic (substitution)</h3>
            <div class="worked"><b>Worked example:</b> y = x + 1 and x^2 + y^2 = 13. Substitute: x^2 + (x+1)^2 = 13 → 2x^2 + 2x − 12 = 0 → x^2 + x − 6 = 0 → (x + 3)(x − 2) = 0 → x = 2, y = 3 or x = −3, y = −2. Points: <b>(2, 3) and (−3, −2)</b>.</div>

            <h3>Deep dive: word problems that bite</h3>
            <div class="worked"><b>Worked example (ages):</b> In 3 years, Kofi's age squared will equal 9 times his age then. Let age then be x: x^2 = 9x → x(x − 9) = 0 → x = 9 (not 0) → now he is <b>6</b>.</div>
            <div class="tip"><b>Exam tip:</b> after solving any word quadratic, run the "story check": does the root make sense (positive, whole, in range)? Writing one line of check rescues silly-mark losses.</div>
"""

COORD = """
            <h3>Deep dive: area of a triangle from coordinates</h3>
            <div class="formula">Area = (1/2) | x1(y2 − y3) + x2(y3 − y1) + x3(y1 − y2) |  (take the absolute value)</div>
            <div class="worked"><b>Worked example:</b> A(1, 1), B(4, 1), C(1, 5): Area = (1/2)|1(1−5) + 4(5−1) + 1(1−1)| = (1/2)|−4 + 16 + 0| = <b>6 square units</b>. (Check: right triangle, legs 3 and 4 → (1/2)(3)(4) = 6 ✓.)</div>
            <p>If the area comes out <b>zero</b>, the three points are <b>collinear</b> — that is the examiner's favourite disguise of a collinearity question.</p>

            <h3>Deep dive: dividing a segment in a ratio</h3>
            <p>A point P dividing AB in the ratio m : n (from A) has coordinates ((n·x1 + m·x2)/(m + n), (n·y1 + m·y2)/(m + n)). The midpoint is just m : n = 1 : 1.</p>
            <div class="worked"><b>Worked example:</b> P divides A(2, 3) and B(8, 9) in ratio 2 : 1. P = ((1×2 + 2×8)/3, (1×3 + 2×9)/3) = (18/3, 21/3) = <b>(6, 7)</b>.</div>

            <h3>Deep dive: combining the tools (exam medley)</h3>
            <div class="worked"><b>Q1.</b> Line L1: 3y = 6x − 9 and L2 through (0, 2) perpendicular to L1. m1 = 2 → m2 = −1/2 → L2: <b>y = −x/2 + 2</b>.</div>
            <div class="worked"><b>Q2.</b> Show (0, 0), (4, 0), (0, 3) form a right triangle: gradients of the two legs are 0 (horizontal) and undefined (vertical) → perpendicular; or use area formula → 6 = (1/2)(4)(3) ✓.</div>
            <div class="worked"><b>Q3.</b> Find the point on the x-axis equidistant from (2, 3) and (5, 1): let P(k, 0); (k−2)^2 + 9 = (k−5)^2 + 1 → −4k + 13 = −10k + 26 → 6k = 13 → k = <b>13/6</b>.</div>
            <div class="tip"><b>Exam tip:</b> "equidistant" always means set the two distance-squares equal and let the squares cancel into a linear equation — never take square roots.</div>
"""

PROB = """
            <h3>Deep dive: grouped data and cumulative frequency</h3>
            <ul>
              <li><b>Mean of grouped data:</b> use class <b>midpoints</b> x: mean = Σ(f·x)/Σf.</li>
              <li><b>Cumulative frequency:</b> running totals; the median is the value at the (n/2)th position, read from the table or the ogive (cumulative frequency curve).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Marks 10, 20, 30 with frequencies 2, 3, 5. Midpoints are the marks themselves: mean = (20 + 60 + 150)/10 = <b>23</b>. Cumulative: 2, 5, 10; n/2 = 5 → the 5th value lies in the 20 class → median = <b>20</b>.</div>

            <h3>Deep dive: two dice — the 36-cell grid</h3>
            <p>Half of all probability questions are two dice in costume. Memorise the grid facts: 36 equally likely outcomes; sum 7 appears <b>6</b> ways (1/6); sum 6 and 8 appear 5 ways each; doubles appear 6 ways (1/6).</p>
            <div class="worked"><b>Worked example:</b> P(sum ≥ 10) = (3 + 2 + 1)/36 = 6/36 = <b>1/6</b> (sums 10, 11, 12 give 3, 2, 1 ways).</div>
            <div class="worked"><b>Worked example (tree thinking):</b> A box has 2 red, 3 blue. Draw one, replace it, draw again. P(same colour) = P(RR) + P(BB) = (2/5)(2/5) + (3/5)(3/5) = 4/25 + 9/25 = <b>13/25</b>. With replacement = independent; add the mutually exclusive "same" paths.</div>

            <h3>Deep dive: reading charts back to numbers</h3>
            <div class="worked"><b>Worked example:</b> A pie chart of 90 students shows Mathematics at 120 degrees. How many chose Maths? 120/360 × 90 = <b>30</b>. The reverse direction is tested just as often as the forward one.</div>
            <div class="tip"><b>Exam tip:</b> when a question says "two are chosen", immediately write whether it is <b>with</b> or <b>without replacement</b> — that single word decides the second fraction.</div>
"""

MENS = """
            <h3>Deep dive: pyramids and the (1/3) family</h3>
            <p>Every "pointy" solid carries the one-third: cone = (1/3)πr^2h and pyramid = (1/3) × base area × height — each exactly one third of the prism or cylinder that encloses it.</p>
            <div class="worked"><b>Worked example:</b> Square-based pyramid, base 6 cm, height 10 cm: V = (1/3)(36)(10) = <b>120 cm^3</b>.</div>

            <h3>Deep dive: the three classic scenarios, fully worked</h3>
            <div class="worked"><b>Water rise:</b> A tank 20 cm by 15 cm holds water; a stone raises the level by 4 cm. Stone volume = 20 × 15 × 4 = <b>1200 cm^3</b> — displaced water equals the object.</div>
            <div class="worked"><b>Shaded region:</b> A circle of radius 7 cm inside a square of side 14 cm. Shaded = 196 − (22/7 × 49) = 196 − 154 = <b>42 cm^2</b>.</div>
            <div class="worked"><b>Sector becomes cone:</b> A 180-degree sector of radius 10 cm is rolled into a cone. Arc = (180/360)(2π × 10) = 10π = base circumference = 2πr → r = 5 cm. Slant = 10 → height = √(100 − 25) = √75 ≈ 8.66 cm. Volume = (1/3)π(25)(8.66) ≈ <b>226.7 cm^3</b>.</div>

            <h3>Deep dive: unit discipline</h3>
            <ul>
              <li>1 m^3 = 1,000,000 cm^3; 1 litre = 1000 cm^3 — tank capacity questions live here.</li>
              <li>Convert <b>before</b> multiplying, never after.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A tank 2 m by 1 m by 0.5 m holds 2 × 1 × 0.5 = 1 m^3 = <b>1000 litres</b>.</div>
            <div class="tip"><b>Exam tip:</b> if the answer line feels wrong (a cup holding 4000 litres), your units slipped — the smell test catches it before the examiner does.</div>
"""

MATRICES = """
            <h3>Deep dive: Cramer's rule — determinants doing the solving</h3>
            <p>For ax + by = e and cx + dy = f: x = det[e b; f d] ÷ det M and y = det[a e; c f] ÷ det M — replace the column you are solving for with the answers column.</p>
            <div class="worked"><b>Worked example:</b> 3x + y = 7; 2x + 4y = 18. det M = 10. x = det[7 1; 18 4]/10 = (28 − 18)/10 = <b>1</b>; y = det[3 7; 2 18]/10 = (54 − 14)/10 = <b>4</b> — matching the inverse method.</div>

            <h3>Deep dive: determinant and matrix facts that score</h3>
            <ul>
              <li>det(AB) = det A × det B.</li>
              <li>det(kM) for 2 × 2 = k^2 det M (the scalar hits both rows).</li>
              <li>M × M⁻^1 = M⁻^1 × M = I, and (M⁻^1)⁻^1 = M.</li>
              <li>A singular matrix (det = 0) has <b>no inverse</b> — say so and stop, that is the answer.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> det A = 3, det B = 5 → det(AB) = <b>15</b>; det(2A) = 4 × 3 = <b>12</b>.</div>

            <h3>Deep dive: word problems as matrix equations</h3>
            <div class="worked"><b>Worked example:</b> Two books and one pen cost ₦2,500; one book and three pens cost ₦3,000. 2b + p = 2500; b + 3p = 3000. M = [2 1; 1 3], det = 5. b = det[2500 1; 3000 3]/5 = (7500 − 3000)/5 = <b>900</b>; p = det[2 2500; 1 3000]/5 = (6000 − 2500)/5 = <b>700</b>. Book ₦900, pen ₦700.</div>
            <div class="tip"><b>Exam tip:</b> translate the story straight into the two equations, then choose Cramer or inverse — both are two minutes; the marks are in the setup.</div>
"""

extend('Quadratic Equations', QUAD)
extend('Coordinate Geometry', COORD)
extend('Probability & Statistics', PROB)
extend('Mensuration & Solid Geometry', MENS)
extend('Matrices & Determinants', MATRICES)

open(P, 'w', encoding='utf-8').write(s)
print('lessons9 applied OK')
