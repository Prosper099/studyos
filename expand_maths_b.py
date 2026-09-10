"""Deep-expand SS Mathematics lessons (batch 4, part B): worked examples, traps, methods."""
import textwrap

CUR = '/home/user/index.html'
s = open(CUR).read()

def deep(title, extra):
    global s
    t = s.index("title: '%s'," % title)
    c = s.index('content: `', t)
    close = s.index('\n          `,', c)
    block = textwrap.indent(textwrap.dedent(extra).strip('\n'), '            ')
    s = s[:close] + '\n' + block + '\n' + s[close:]

deep('Coordinate Geometry', """

    <h3>Deep dive: three formulas, every question</h3>
    <div class="formula">Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2) &nbsp;·&nbsp; Distance = √[(x₂−x₁)² + (y₂−y₁)²] &nbsp;·&nbsp; Gradient m = (y₂−y₁)/(x₂−x₁)</div>
    <p>Parallel lines share gradients (m₁ = m₂); perpendicular lines have gradients whose product is −1 (m₁ × m₂ = −1, i.e. flip and negate: m → −1/m). The equation of a line is y = mx + c, or through a known point: <b>y − y₁ = m(x − x₁)</b>.</p>
    <h3>Worked examples</h3>
    <ol>
      <li><b>Midpoint and distance of A(2, 3), B(6, 7):</b> midpoint = (4, 5); distance = √(4² + 4²) = √32 = <b>4√2</b> ≈ 5.66.</li>
      <li><b>Gradient of the line through (1, 2) and (4, 11):</b> m = (11 − 2)/(4 − 1) = 9/3 = <b>3</b>. Equation: y − 2 = 3(x − 1) → y = 3x − 1.</li>
      <li><b>Line perpendicular to y = 2x + 5 through (0, 4):</b> m = −½ → y = −½x + 4.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>In the gradient formula, pair the coordinates in the <b>same order</b> — mixing (x₂−x₁) with (y₁−y₂) flips the sign.</li>
      <li>Perpendicular gradient of 2 is <b>−½</b>, not −2.</li>
      <li>A vertical line has undefined gradient; a horizontal line has gradient 0 — they are perpendicular to each other.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Every GPS coordinate, plot allocation on a survey plan, and the graph of your phone bill against usage is coordinate geometry — the (x, y) pair is the universal address.</p>
""")

deep('Variation: Direct, Inverse, Joint & Partial', """

    <h3>Worked example: partial variation, the full method</h3>
    <p><b>y is partly constant and partly varies directly as x. When x = 2, y = 11; when x = 5, y = 20. Find y when x = 8.</b></p>
    <ol>
      <li>"Partly constant, partly direct" means <b>y = a + bx</b>.</li>
      <li>Two simultaneous equations: 11 = a + 2b and 20 = a + 5b.</li>
      <li>Subtract: 9 = 3b → b = 3; substitute: a = 11 − 6 = 5.</li>
      <li>So y = 5 + 3x; when x = 8: y = 5 + 24 = <b>29</b>.</li>
    </ol>
    <p>The same skeleton solves every variation story: <b>translate the words into y = k(...)</b>, use the given data to pin down the constant(s), then evaluate. Direct: y = kx; inverse: y = k/x; joint: y = kxz; partial: y = a + bx.</p>
""")

deep('Calculus: Differentiation & Integration', """

    <h3>Deep dive: the two engine rules</h3>
    <div class="formula">d/dx (xⁿ) = nxⁿ⁻¹ &nbsp;&nbsp;·&nbsp;&nbsp; ∫ xⁿ dx = xⁿ⁺¹/(n+1) + c (n ≠ −1)</div>
    <p>Differentiation gives the <b>gradient</b> of a curve at any point; integration reverses it and gives <b>area</b>. Both work term by term; a constant differentiates to 0 and integrates to cx.</p>
    <h3>Worked examples, step by step</h3>
    <ol>
      <li><b>Differentiate y = 3x³ − 2x² + 5x − 7:</b> dy/dx = <b>9x² − 4x + 5</b>. At x = 1 the gradient is 9 − 4 + 5 = 10.</li>
      <li><b>Max/min of y = x² − 4x + 3:</b> dy/dx = 2x − 4 = 0 → x = 2; y = 4 − 8 + 3 = <b>−1</b>. Second derivative = 2 &gt; 0, so (2, −1) is a <b>minimum</b>.</li>
      <li><b>∫ (6x² − 4x) dx</b> = 2x³ − 2x² + c.</li>
      <li><b>Definite: ∫₀² 2x dx</b> = [x²]₀² = 4 − 0 = <b>4</b> — the area under the line y = 2x from 0 to 2.</li>
    </ol>
    <h3>Applications WAEC loves</h3>
    <p>Maximum area of a fenced enclosure, minimum cost of a box, velocity from a distance–time relation (v = ds/dt) and acceleration (a = dv/dt): s = t² + 3t → v = 2t + 3 → a = 2. Set dy/dx = 0 for stationary points; the sign of d²y/dx² classifies them (+ minimum, − maximum).</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Omitting the <b>+ c</b> on indefinite integrals — it is a mark, every time.</li>
      <li>Confusing minimum with maximum: check the second derivative or sketch.</li>
      <li>Definite integrals: substitute the <b>upper limit first</b>, then subtract the lower — order matters when signs mix.</li>
    </ul>
""")

deep('Probability & Statistics', """

    <h3>Deep dive: counting the chances</h3>
    <div class="formula">P(event) = favourable outcomes ÷ total outcomes &nbsp;·&nbsp; P(not A) = 1 − P(A)</div>
    <p><b>Mutually exclusive</b> events (cannot both happen) add: P(A or B) = P(A) + P(B). <b>Independent</b> events (one doesn't affect the other) multiply: P(A and B) = P(A) × P(B). <b>Without replacement</b> changes the denominator after each pick — tree diagrams keep this honest.</p>
    <h3>Worked examples</h3>
    <ol>
      <li><b>Fair die: P(even)</b> = 3/6 = <b>½</b>; <b>P(greater than 4)</b> = 2/6 = ⅓; both cannot overlap? 5 is odd, so P(even or &gt;4) = ½ + ⅓ = 5/6.</li>
      <li><b>Two dice, sum of 7:</b> outcomes (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) → 6/36 = <b>1/6</b>.</li>
      <li><b>Bag: 3 red, 2 blue. Two drawn without replacement, P(both red)</b> = 3/5 × 2/4 = 6/20 = <b>3/10</b>.</li>
      <li><b>Data 2, 3, 3, 5, 7:</b> mean = 20/5 = <b>4</b>; median (middle when ordered) = <b>3</b>; mode (most frequent) = <b>3</b>; range = 7 − 2 = 5.</li>
    </ol>
    <p>For grouped/frequency data: mean = Σfx ÷ Σf — multiply each value by its frequency first.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li><b>With</b> vs <b>without</b> replacement: the second fraction changes only in the second case.</li>
      <li>Median requires the data <b>sorted first</b>; with an even count it is the average of the two middle values.</li>
      <li>Probabilities never exceed 1 or fall below 0 — an answer like 7/5 means the counting went wrong.</li>
    </ul>
""")

deep('Mensuration & Solid Geometry', """

    <h3>Deep dive: the formulas that must be automatic</h3>
    <div class="formula">Circle: C = 2πr, A = πr² &nbsp;·&nbsp; Sector (angle θ): arc = θ/360 × 2πr, area = θ/360 × πr²<br/>Cylinder: V = πr²h, total surface = 2πr(r + h) &nbsp;·&nbsp; Cone: V = ⅓πr²h, curved surface = πrl<br/>Sphere: V = 4/3 πr³, A = 4πr²</div>
    <p>The cone's ⅓ and its <b>slant height l = √(r² + h²)</b> are where marks are won and lost. A frustum (a cone with its tip cut off, like a bucket or a funnel) = big cone minus small cone.</p>
    <h3>Worked examples</h3>
    <ol>
      <li><b>Cylinder r = 7 cm, h = 10 cm (π = 22/7):</b> V = (22/7) × 49 × 10 = <b>1540 cm³</b>.</li>
      <li><b>Sector of a circle, r = 7 cm, θ = 60°:</b> area = 60/360 × (22/7) × 49 = (1/6)(154) = <b>25.67 cm²</b>.</li>
      <li><b>Cone r = 3, h = 4:</b> l = √(9+16) = 5; curved surface = π × 3 × 5 = <b>15π</b>; V = ⅓ π × 9 × 4 = <b>12π</b>.</li>
    </ol>
    <h3>Similar solids</h3>
    <p>If the linear scale factor is k, then <b>areas scale by k²</b> and <b>volumes by k³</b>: a model car at 1/10 scale has 1/100 of the paint area and 1/1000 of the metal volume.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Using height h where slant height l belongs in the cone's curved surface.</li>
      <li>Forgetting the ⅓ in cone and pyramid volumes — a cone is exactly one-third of its cylinder.</li>
      <li>"Total surface area" includes <b>every</b> face — the closed tin, not the open bucket, unless the question says so.</li>
    </ul>
    <h3>See it around you</h3>
    <p>A 1000-litre poly tank is a cylinder (V = πr²h tells you its height), a funnel is a cone, paint estimates for a room are total surface area minus doors and windows.</p>
""")

deep('Matrices & Determinants', """

    <h3>Deep dive: operations, determinant, inverse</h3>
    <p>Matrices add only when the <b>orders match</b>; they multiply when the <b>inner orders agree</b> (2×3 times 3×2 gives 2×2), row into column. Multiplication is <b>not commutative</b>: AB ≠ BA in general.</p>
    <p>For a 2×2 matrix A = [[a, b], [c, d]]: <b>determinant |A| = ad − bc</b>. If |A| = 0 the matrix is <b>singular</b> — no inverse exists. Otherwise:</p>
    <div class="formula">A⁻¹ = 1/(ad − bc) × [[d, −b], [−c, a]] — swap a and d, negate b and c</div>
    <h3>Worked example, step by step</h3>
    <p><b>Solve 2x + 3y = 8 and x − y = 1 by the matrix method.</b></p>
    <ol>
      <li>Matrix form: [[2, 3], [1, −1]] [x, y]ᵀ = [8, 1]ᵀ.</li>
      <li>|A| = (2)(−1) − (3)(1) = −5 (non-singular ✓).</li>
      <li>A⁻¹ = (1/−5)[[−1, −3], [−1, 2]] = [[1/5, 3/5], [1/5, −2/5]].</li>
      <li>[x, y]ᵀ = A⁻¹[8, 1]ᵀ → x = 8/5 + 3/5 = <b>11/5</b>, y = 8/5 − 2/5 = <b>6/5</b>.</li>
      <li>Check: 2(11/5) + 3(6/5) = 40/5 = 8 ✓ and 11/5 − 6/5 = 1 ✓.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>AB and BA are different matrices — order is everything.</li>
      <li>A singular matrix (det = 0) has no inverse; spotting that early earns the mark for "explain why".</li>
      <li>In the inverse formula, it is <b>−b and −c</b> that change sign, not the whole matrix.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Matrix multiplication powers the graphics in games and phone screens (rotation and scaling are matrices), and every simultaneous-equation balance sheet in business is a matrix in disguise.</p>
""")

open(CUR, 'w', encoding='utf-8').write(s)
print('Maths batch 4B written: 6 topics')
