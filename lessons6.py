#!/usr/bin/env python3
"""lessons6: deepen Separation Techniques & States of Matter, Coordinate Geometry, Matrices & Determinants."""
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

SEPARATION = """
            <h3>1. The three states and the kinetic theory</h3>
            <p>Matter exists as <b>solid</b> (particles tightly packed, vibrating in fixed positions — definite shape and volume), <b>liquid</b> (particles close but sliding — definite volume, no fixed shape) and <b>gas</b> (particles far apart, moving fast — no fixed shape or volume). The <b>kinetic theory</b> says all particles move, and heat makes them move faster.</p>
            <ul>
              <li><b>Melting/boiling points</b> are fixed for pure substances — a sharp melting point is a test of purity.</li>
              <li><b>Evaporation vs boiling:</b> evaporation happens at any temperature from the surface; boiling happens at one temperature throughout the liquid.</li>
              <li><b>Sublimation:</b> solid → gas directly (ammonium chloride, iodine, dry ice).</li>
              <li><b>Diffusion:</b> particles spreading from high to low concentration (smell across a room); <b>Brownian motion</b> is the jerky movement of tiny visible particles hit by invisible ones.</li>
            </ul>

            <h3>2. Mixtures vs compounds — why we separate</h3>
            <p>In a <b>compound</b> elements are chemically joined in fixed ratios and need chemical methods to split. In a <b>mixture</b> substances are merely together — each keeps its properties — so <b>physical</b> methods separate them. All the techniques below exploit a difference in one physical property.</p>

            <h3>3. The techniques, by the property they exploit</h3>
            <ul>
              <li><b>Particle size — filtration:</b> an insoluble solid from a liquid (sand from water). The solid left on paper is the <b>residue</b>; the liquid through is the <b>filtrate</b>.</li>
              <li><b>Solubility — evaporation & crystallisation:</b> a soluble solid from solution. <b>Evaporation to dryness</b> for salts like NaCl; <b>crystallisation</b> when the solid has water of crystallisation or decomposes on strong heat (e.g. copper(II) tetraoxosulphate(VI) crystals).</li>
              <li><b>Boiling point (liquid from solution) — simple distillation:</b> boil, condense the vapour in the <b>condenser</b>, collect pure solvent (distilled water from tap water).</li>
              <li><b>Boiling points (liquid from liquid) — fractional distillation:</b> a <b>fractionating column</b> (glass beads) gives repeated evaporation-condensation so close-boiling liquids separate — ethanol from water, crude oil into fractions, air into oxygen and nitrogen.</li>
              <li><b>Sublimation:</b> heat a mix of ammonium chloride and sand — the NH4Cl sublimes, leaves sand, and reforms as crystals on the cool surface.</li>
              <li><b>Differential movement — chromatography:</b> a drop of mixture on paper; solvent climbs; components travel different distances. Used for dyes, inks, drugs in urine, forensics.</li>
              <li><b>Density/immiscibility — separating funnel:</b> two immiscible liquids (oil and water); the denser sinks and is run off. <b>Decantation</b> is the rough version.</li>
              <li><b>Magnetism:</b> iron filings from sand. <b>Winnowing/hand-picking:</b> farm-level separations.</li>
            </ul>

            <h3>4. Chromatography numbers (Rf values)</h3>
            <div class="formula">Rf = distance moved by spot ÷ distance moved by solvent front</div>
            <div class="worked"><b>Worked example:</b> A dye spot moves 6 cm while the solvent front moves 10 cm. Rf = 6/10 = <b>0.6</b>. Rf is always between 0 and 1, and matching an unknown's Rf with a standard's identifies it.</div>

            <h3>5. Choosing a method — exam drill</h3>
            <ul>
              <li>Sand + water → filtration. Salt + water (want salt) → evaporation; (want pure water) → simple distillation.</li>
              <li>Ethanol + water → fractional distillation. Oil + water → separating funnel.</li>
              <li>NH4Cl + NaCl → sublimation. Coloured inks → chromatography.</li>
              <li>Iron + sulphur powder → magnetism (also proves it is a mixture: iron still magnetic).</li>
            </ul>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying evaporation to dryness gives good crystals — it drives off water of crystallisation and can decompose the salt.</li>
              <li>Using simple distillation for two liquids — without a fractionating column they co-distil.</li>
              <li>Defining Rf as solvent over spot — it is <b>spot over solvent</b>.</li>
              <li>Calling diffusion the same as Brownian motion — diffusion is net spreading; Brownian motion is the visible jiggling.</li>
              <li>Forgetting the thermometer bulb sits at the still-head in distillation, reading the vapour that is condensing.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> name the differing property first (size, solubility, boiling point, magnetism, movement on paper) — the technique then chooses itself.</div>
"""

COORDGEO = """
            <h3>1. The Cartesian plane</h3>
            <p>Every point in the plane has an ordered pair (x, y): x measured along the horizontal axis, y along the vertical. The four <b>quadrants</b> run anticlockwise from top-right (+,+) through (−,+) and (−,−) to (+,−). Nearly every WAEC coordinate question uses four tools: midpoint, distance, gradient and the line equation.</p>

            <h3>2. Midpoint</h3>
            <div class="formula">Midpoint of A(x1, y1) and B(x2, y2) = ((x1 + x2)/2, (y1 + y2)/2)</div>
            <div class="worked"><b>Worked example:</b> Midpoint of P(2, 5) and Q(6, −1): ((2+6)/2, (5+(−1))/2) = <b>(4, 2)</b>.</div>

            <h3>3. Distance between two points</h3>
            <p>The distance formula is Pythagoras in disguise: the horizontal gap and vertical gap are the two shorter sides.</p>
            <div class="formula">AB = √((x2 − x1)^2 + (y2 − y1)^2)</div>
            <div class="worked"><b>Worked example:</b> Distance between (1, 2) and (4, 6): gaps 3 and 4 → √(9 + 16) = √25 = <b>5</b>. Spot the 3-4-5 triangle and skip the arithmetic.</div>

            <h3>4. Gradient; parallel and perpendicular lines</h3>
            <div class="formula">m = (y2 − y1) ÷ (x2 − x1) • in y = mx + c, m is the gradient, c the y-intercept</div>
            <ul>
              <li><b>Parallel lines:</b> equal gradients.</li>
              <li><b>Perpendicular lines:</b> m1 × m2 = −1.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Gradient of the line through (2, 3) and (5, 12): (12−3)/(5−2) = 9/3 = <b>3</b>.</div>
            <div class="worked"><b>Worked example:</b> A line perpendicular to y = 2x + 1 has gradient <b>−1/2</b> (because 2 × −1/2 = −1).</div>

            <h3>5. Equation of a straight line</h3>
            <ul>
              <li><b>From gradient and a point:</b> y − y1 = m(x − x1).</li>
              <li><b>From two points:</b> find m first, then use one point.</li>
              <li><b>Intercepts:</b> x-intercept from y = 0; y-intercept from x = 0. Intercept form: x/a + y/b = 1.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Line through (0, 4) with gradient −2: y = −2x + 4. x-intercept: 0 = −2x + 4 → x = 2 → <b>(2, 0)</b>.</div>
            <div class="worked"><b>Worked example:</b> Line through (1, 1) and (3, 7): m = 3; y − 1 = 3(x − 1) → <b>y = 3x − 2</b>.</div>

            <h3>6. Examiner's favourites</h3>
            <ul>
              <li>"Find k so that (1, 2), (3, 4), (k, 8) are collinear" — equal gradients between pairs: (4−2)/(3−1) = 1; (8−4)/(k−3) = 1 → k − 3 = 4 → <b>k = 7</b>.</li>
              <li>"Show the triangle is right-angled" — two gradients multiply to −1.</li>
              <li>"Line parallel to 2y = 6x − 5 through (0, 1)" — m = 3 → y = 3x + 1.</li>
            </ul>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Subtracting coordinates in different orders for x and y — keep (second − first) for both.</li>
              <li>Reading the gradient of 2y = 6x − 5 as 6 — divide through first: m = 3.</li>
              <li>Using m1 × m2 = 1 for perpendicular instead of −1.</li>
              <li>Swapping x and y in the ordered pair.</li>
              <li>Forgetting a horizontal line has gradient 0 and a vertical line has <b>no</b> gradient.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> rewrite every given line into y = mx + c on the first line of your answer. Half of coordinate errors die right there.</div>
"""

MATRICES = """
            <h3>1. What a matrix is</h3>
            <p>A <b>matrix</b> is a rectangular array of numbers in rows and columns. Its <b>order</b> is rows × columns — a 2 × 3 matrix has 2 rows and 3 columns. Types you must name: <b>row</b> matrix, <b>column</b> matrix, <b>square</b> matrix, <b>zero</b> matrix, <b>identity</b> matrix I (1s on the diagonal, 0s elsewhere), and <b>equal</b> matrices (same order, same entries).</p>

            <h3>2. Addition, subtraction and scalar multiplication</h3>
            <p>Add or subtract only matrices of the <b>same order</b>, entry by entry. Scalar multiplication multiplies every entry by the number.</p>
            <div class="worked"><b>Worked example:</b> [1 2; 3 4] + [5 0; −1 2] = <b>[6 2; 2 6]</b>. And 3 × [1 2; 0 1] = <b>[3 6; 0 3]</b>.</div>

            <h3>3. Matrix multiplication — row times column</h3>
            <p>AB exists only when the <b>columns of A = rows of B</b>. Each entry of AB = (row of A) dotted with (column of B). Multiplication is <b>not commutative</b>: AB ≠ BA in general.</p>
            <div class="worked"><b>Worked example:</b> A = [1 2; 3 4], B = [2 0; 1 1].<br>
            AB: row1·col1 = 1×2 + 2×1 = 4; row1·col2 = 1×0 + 2×1 = 2; row2·col1 = 3×2 + 4×1 = 10; row2·col2 = 3×0 + 4×1 = 4 → AB = <b>[4 2; 10 4]</b>.<br>
            BA = [2 4; 4 6] — different! Non-commutativity shown.</div>

            <h3>4. Determinant of a 2 × 2</h3>
            <div class="formula">If M = [a b; c d], then det(M) = ad − bc</div>
            <div class="worked"><b>Worked example:</b> det [3 1; 2 4] = 3×4 − 1×2 = <b>10</b>. If det = 0 the matrix is <b>singular</b> (no inverse) — the simultaneous equations it represents have no unique solution.</div>

            <h3>5. The inverse of a 2 × 2</h3>
            <div class="formula">M⁻^1 = 1/(ad − bc) × [d −b; −c a]  (swap a and d, change signs of b and c)</div>
            <div class="worked"><b>Worked example:</b> Inverse of [3 1; 2 4]: det = 10 → (1/10)[4 −1; −2 3] = <b>[0.4 −0.1; −0.2 0.3]</b>. Check: M × M⁻^1 = I.</div>

            <h3>6. Solving simultaneous equations with matrices</h3>
            <p>Write ax + by = e and cx + dy = f as [a b; c d][x; y] = [e; f], i.e. MX = K. Then X = M⁻^1K.</p>
            <div class="worked"><b>Worked example:</b> 3x + y = 7 and 2x + 4y = 18.<br>
            M = [3 1; 2 4], det = 10, M⁻^1 = (1/10)[4 −1; −2 3].<br>
            [x; y] = (1/10)[4×7 − 1×18; −2×7 + 3×18] = (1/10)[10; 40] = <b>[1; 4]</b> → x = 1, y = 4. Check in eqn 1: 3 + 4 = 7 ✓.</div>

            <h3>7. The transpose</h3>
            <p>The <b>transpose</b> M^T turns rows into columns: [1 2; 3 4]ᵀ = [1 3; 2 4]. Useful facts: (AB)^T = B^T A (order flips!) and a matrix equal to its transpose is <b>symmetric</b>.</p>

            <h3>8. Common mistakes that cost marks</h3>
            <ul>
              <li>Adding matrices of different orders, or multiplying when inner dimensions mismatch.</li>
              <li>Assuming AB = BA.</li>
              <li>Determinant as ad + bc instead of ad − bc.</li>
              <li>In the inverse, forgetting to swap a and d <b>and</b> flip signs of b and c — and forgetting the 1/det factor.</li>
              <li>Multiplying M⁻^1K in the wrong order (it must be M⁻^1 × K, not K × M⁻^1).</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> for any inverse, do it in one chant: "swap the diagonal, negate the off-diagonal, divide by det." Say it every time; the inverse is free marks.</div>
"""

deepen('Separation Techniques & States of Matter', 3280, SEPARATION)
deepen('Coordinate Geometry', 3496, COORDGEO)
deepen('Matrices & Determinants', 3518, MATRICES)

open(P, 'w', encoding='utf-8').write(s)
print('lessons6 applied OK')
