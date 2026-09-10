"""Deep-expand SS Mathematics lessons (batch 4, part A): worked examples, traps, methods."""
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

deep('Number Bases & Modular Arithmetic', """

    <h3>Deep dive: converting and calculating in any base</h3>
    <p><b>Denary → base n:</b> divide repeatedly by n, collecting remainders, then read them <b>bottom-up</b>. <b>Base n → denary:</b> expand in powers of n. Example: 11001₂ = 16 + 8 + 0 + 0 + 1 = <b>25₁₀</b>; and 25₁₀ in base 2: 25 = 12 r1, 12 = 6 r0, 6 = 3 r0, 3 = 1 r1, 1 = 0 r1 → reading remainders bottom-up: <b>11001₂</b>.</p>
    <p><b>Arithmetic in base n</b> works exactly like denary arithmetic except you carry whenever a column reaches <b>n</b> (not 10). Adding 1101₂ + 1011₂: units 1+1 = 10₂ (write 0, carry 1), next 0+1+1 = 10₂ (write 0, carry 1), next 1+0+1 = 10₂ (write 0, carry 1), last 1+1+1 = 11₂ → answer <b>11000₂</b> = 24₁₀. Check: 13 + 11 = 24 ✓ — always sanity-check in denary.</p>
    <h3>Modular arithmetic — clock mathematics</h3>
    <p>a ≡ b (mod n) means a and b leave the same remainder on division by n: 17 ≡ 5 (mod 12), like a clock hand returning to 5 after 17 hours. To reduce: divide and keep the remainder. <b>43 mod 7</b>: 43 = 6×7 + 1 → <b>1</b>. Weekdays are mod 7, clocks are mod 12, and computer checksums (ISBN, bank codes) are modular arithmetic protecting your data.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>A digit must be <b>smaller than the base</b> — there is no "2" in base 2, no "8" in base 8.</li>
      <li>Reading remainders <b>top-down</b> instead of bottom-up flips the answer completely.</li>
      <li>In mod n, answers run 0 to n−1; "7 mod 7" is 0, not 7.</li>
    </ul>
""")

deep('Indices, Logarithms & Surds', """

    <h3>Deep dive: the five index laws</h3>
    <div class="formula">aᵐ × aⁿ = aᵐ⁺ⁿ &nbsp;·&nbsp; aᵐ ÷ aⁿ = aᵐ⁻ⁿ &nbsp;·&nbsp; (aᵐ)ⁿ = aᵐⁿ &nbsp;·&nbsp; a⁰ = 1 &nbsp;·&nbsp; a⁻ⁿ = 1/aⁿ</div>
    <p>Fractional indices mean roots: a^(1/n) = ⁿ√a and a^(m/n) = (ⁿ√a)ᵐ — so 27^(2/3) = (³√27)² = 3² = <b>9</b>. Logarithms ask the opposite question of indices: log_a x = n means aⁿ = x. The three laws mirror the index laws: <b>log(xy) = log x + log y</b>, <b>log(x/y) = log x − log y</b>, <b>log(xⁿ) = n log x</b>.</p>
    <h3>Worked examples</h3>
    <ol>
      <li><b>Evaluate log₁₀ 8 given log₁₀ 2 = 0.3010.</b> log 8 = log 2³ = 3 × 0.3010 = <b>0.9030</b>.</li>
      <li><b>Solve 2ˣ = 32.</b> 32 = 2⁵, so x = <b>5</b>. For 3^(x+1) = 81: 3^(x+1) = 3⁴ → x + 1 = 4 → x = 3.</li>
      <li><b>Simplify √50 + √18.</b> √50 = 5√2, √18 = 3√2, sum = <b>8√2</b>.</li>
      <li><b>Rationalise 1/(√3 − √2).</b> Multiply by (√3 + √2)/(√3 + √2): (√3 + √2)/(3 − 2) = <b>√3 + √2</b>.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li><b>log(a + b) ≠ log a + log b</b> — the product law applies to multiplication only. This single error sinks more WAEC questions than any other.</li>
      <li>a⁰ = 1 for any non-zero a; x⁻² is 1/x², not −x².</li>
      <li>√(a + b) ≠ √a + √b — check with a = 9, b = 16: √25 = 5 but 3 + 4 = 7.</li>
    </ul>
""")

deep('Algebraic Expressions & Simple Equations', """

    <h3>Deep dive: expansion and the four factorisations</h3>
    <p>Expansion is the distributive law: a(b + c) = ab + ac, and (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6 — every term in the first bracket multiplies every term in the second. Factorisation reverses it, in four patterns you must recognise on sight:</p>
    <ol>
      <li><b>Common factor</b>: 6x² + 9x = 3x(2x + 3).</li>
      <li><b>Difference of two squares</b>: x² − 25 = (x + 5)(x − 5).</li>
      <li><b>Simple trinomial</b>: x² + 7x + 12 = (x + 3)(x + 4) — find two numbers that <b>multiply to 12</b> and <b>add to 7</b>.</li>
      <li><b>Grouping</b>: ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y).</li>
    </ol>
    <h3>Worked example, step by step</h3>
    <p><b>Solve (2x − 1)/3 + (x + 2)/4 = 1.</b></p>
    <ol>
      <li>Clear denominators with the LCM 12: 4(2x − 1) + 3(x + 2) = 12.</li>
      <li>Expand: 8x − 4 + 3x + 6 = 12 → 11x + 2 = 12.</li>
      <li>11x = 10 → x = 10/11. <b>Check</b> by substituting back — always.</li>
    </ol>
    <p><b>Word problem:</b> 3 bags of rice and 2 bags of beans cost ₦46,000; 2 bags of rice and 3 bags of beans cost ₦44,000. Let r and b be the prices: 3r + 2b = 46000 and 2r + 3b = 44000. Eliminating r (×2 and ×3): 5b = 40000 → b = ₦8,000, r = ₦10,000. Every simultaneous-equation story follows this template: define letters, translate sentences, eliminate.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>−(a − b) = −a + b — the minus sign hits <b>every</b> term inside.</li>
      <li>(x + 3)² = x² + 6x + 9, NOT x² + 9 — the middle term is the classic casualty.</li>
      <li>Dividing both sides by something containing x can destroy a solution; factorise instead.</li>
    </ul>
""")

deep('Sets, Venn Diagrams & Logic', """

    <h3>Deep dive: the counting formula and how to use it</h3>
    <div class="formula">n(A ∪ B) = n(A) + n(B) − n(A ∩ B) &nbsp;&nbsp;·&nbsp;&nbsp; n(A′) = n(U) − n(A)</div>
    <p>The intersection is subtracted because it was counted twice. For three sets: n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C). In every WAEC Venn problem, <b>fill the innermost region first</b> and work outwards — the diagram then does the arithmetic for you.</p>
    <h3>Worked example, step by step</h3>
    <p><b>In a class of 40, 25 offer Mathematics, 20 offer English, and 8 offer both. How many offer neither?</b></p>
    <ol>
      <li>n(M ∪ E) = 25 + 20 − 8 = 37.</li>
      <li>Neither = 40 − 37 = <b>3</b>.</li>
      <li>Diagram check: Maths only = 25 − 8 = 17; English only = 20 − 8 = 12; both = 8; neither = 3. Total = 17 + 12 + 8 + 3 = 40 ✓.</li>
    </ol>
    <h3>Logic in one breath</h3>
    <p>A <b>statement</b> is either true or false. <b>p ∧ q</b> (AND) is true only when both are; <b>p ∨ q</b> (OR — in maths, <b>inclusive</b>: "or both") is false only when both are false; <b>~p</b> (NOT) flips the truth value; <b>p → q</b> (if p then q) is false only when p is true and q is false.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>"25 offer Maths" <b>includes</b> those who also offer English — don't treat it as "Maths only".</li>
      <li>Mathematical OR is inclusive; everyday "either...or" often isn't.</li>
      <li>The empty set ∅ has no elements but is a subset of every set — n(∅) = 0.</li>
    </ul>
""")

deep('Quadratic Equations', """

    <h3>Deep dive: three solution methods, one discriminant</h3>
    <p><b>1. Factorisation</b> — fastest when the roots are tidy: x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 or 3. <b>2. Completing the square</b> — x² + 6x + 5 = (x + 3)² − 4, so (x + 3)² = 4 → x = −1 or −5; this form also hands you the <b>vertex</b> of the parabola. <b>3. The formula</b> — works always:</p>
    <div class="formula">x = (−b ± √(b² − 4ac)) ÷ 2a &nbsp;&nbsp; for ax² + bx + c = 0</div>
    <h3>Worked example, step by step</h3>
    <p><b>Solve 2x² + 3x − 5 = 0.</b> a = 2, b = 3, c = −5. Discriminant: b² − 4ac = 9 + 40 = 49 (a perfect square — it would have factorised as (2x + 5)(x − 1)). x = (−3 ± 7)/4 → x = <b>1</b> or x = <b>−5/2</b>.</p>
    <p><b>Nature of roots from the discriminant:</b> b² − 4ac &gt; 0 → two distinct real roots; = 0 → one repeated root (the graph kisses the x-axis); &lt; 0 → no real roots (the parabola floats above or below the axis).</p>
    <p><b>Forming an equation from roots</b> α and β: x² − (α + β)x + αβ = 0. Roots 3 and −4 → x² − (−1)x + (−12) = x² + x − 12 = 0.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Sign errors with negative b or c inside the formula — write a, b, c down explicitly first.</li>
      <li>Forgetting the ± : √ gives two roots, one on each side of the axis of symmetry.</li>
      <li>x² = 9 has roots +3 <b>and</b> −3; answering only 3 loses half the marks.</li>
    </ul>
""")

deep('Sequences & Series (A.P. and G.P.)', """

    <h3>Deep dive: the four formulas that solve everything</h3>
    <div class="formula">A.P.: Uₙ = a + (n−1)d &nbsp;·&nbsp; Sₙ = n/2 [2a + (n−1)d] = n/2 (a + l)<br/>G.P.: Uₙ = arⁿ⁻¹ &nbsp;·&nbsp; Sₙ = a(rⁿ − 1)/(r − 1) &nbsp;·&nbsp; S∞ = a/(1 − r), only when |r| &lt; 1</div>
    <p>In an A.P. each term <b>adds</b> a constant difference d; in a G.P. each term <b>multiplies</b> by a constant ratio r. Find d by subtracting neighbours; find r by dividing.</p>
    <h3>Worked examples</h3>
    <ol>
      <li><b>A.P. 2, 5, 8, …: find the 12th term and the sum of the first 12 terms.</b> a = 2, d = 3. U₁₂ = 2 + 11×3 = 35. S₁₂ = 12/2 (2 + 35) = 6 × 37 = <b>222</b>.</li>
      <li><b>G.P. 3, 6, 12, …: find the 6th term.</b> a = 3, r = 2. U₆ = 3 × 2⁵ = <b>96</b>. (No S∞ here — r = 2 grows without limit.)</li>
      <li><b>Sum to infinity of 8 + 4 + 2 + …</b> a = 8, r = ½. S∞ = 8/(1 − ½) = <b>16</b>.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>S∞ exists <b>only</b> when |r| &lt; 1; a G.P. with r = 2 has no sum to infinity.</li>
      <li>Uₙ uses (n−1), not n — the first term is already the a.</li>
      <li>The arithmetic mean of a and b is (a+b)/2; the geometric mean is √(ab) — different questions, different answers.</li>
    </ul>
    <h3>See it around you</h3>
    <p>A ₦500 monthly increment is an A.P.; a savings plan doubling every week is a G.P.; instalment plans and population growth are the two sequences you will meet for life.</p>
""")

deep('Trigonometry & Angle of Elevation', """

    <h3>Deep dive: SOH CAH TOA and the special angles</h3>
    <div class="formula">sin θ = Opp/Hyp &nbsp;·&nbsp; cos θ = Adj/Hyp &nbsp;·&nbsp; tan θ = Opp/Adj</div>
    <table class="mb-3 w-full border-collapse text-left text-xs">
      <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">θ</th><th class="border border-slate-200 p-1.5">sin</th><th class="border border-slate-200 p-1.5">cos</th><th class="border border-slate-200 p-1.5">tan</th></tr></thead>
      <tbody>
        <tr><td class="border border-slate-200 p-1.5">30°</td><td class="border border-slate-200 p-1.5">0.5000</td><td class="border border-slate-200 p-1.5">0.8660</td><td class="border border-slate-200 p-1.5">0.5774</td></tr>
        <tr><td class="border border-slate-200 p-1.5">45°</td><td class="border border-slate-200 p-1.5">0.7071</td><td class="border border-slate-200 p-1.5">0.7071</td><td class="border border-slate-200 p-1.5">1.0000</td></tr>
        <tr><td class="border border-slate-200 p-1.5">60°</td><td class="border border-slate-200 p-1.5">0.8660</td><td class="border border-slate-200 p-1.5">0.5000</td><td class="border border-slate-200 p-1.5">1.7321</td></tr>
      </tbody>
    </table>
    <p><b>Angle of elevation</b>: measured <b>up from the horizontal</b> to the line of sight; <b>depression</b> is the mirror image, measured down — and the two are equal as alternate angles. Every elevation problem is a right-angled triangle: draw it, label the given side and angle, pick the ratio that uses them.</p>
    <h3>Worked example, step by step</h3>
    <p><b>From a point 50 m from a tower's foot, the angle of elevation of the top is 30°. Find the height.</b></p>
    <ol>
      <li>tan 30° = h/50 (opposite over adjacent).</li>
      <li>h = 50 × 0.5774 ≈ <b>28.9 m</b>.</li>
      <li>If asked for the distance to the top as well: cos 30° = 50/d → d = 50/0.866 ≈ 57.7 m.</li>
    </ol>
    <h3>Bearings in one line</h3>
    <p>Three-figure bearings are measured <b>clockwise from North</b>: East is 090°, South 180°, West 270°. "N30°E" converts to 030°. Draw north first, always.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Calculator in the wrong mode — set <b>DEG</b>, not RAD, for WAEC trigonometry.</li>
      <li>Measuring elevation from the ground line at the wrong corner — it is always from the horizontal at the observer's eye.</li>
      <li>Confusing sin with cos: opposite goes with sin, adjacent with cos ("SOH CAH").</li>
    </ul>
""")

open(CUR, 'w', encoding='utf-8').write(s)
print('Maths batch 4A written: 7 topics')
