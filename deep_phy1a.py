# deep_phy1a.py — Physics SS1 deep: Measurement, Units & Vectors. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. Physical quantities: the alphabet of physics</h3>
            <p>Physics measures everything. A <b>physical quantity</b> is anything that can be measured and expressed as a number with a unit — and every quantity is either <b>fundamental</b> (defined on its own) or <b>derived</b> (built from the fundamental ones).</p>
            <table>
              <tr><th>Fundamental quantity</th><th>SI unit</th><th>Symbol</th></tr>
              <tr><td>Length</td><td>metre</td><td>m</td></tr>
              <tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>
              <tr><td>Time</td><td>second</td><td>s</td></tr>
              <tr><td>Electric current</td><td>ampere</td><td>A</td></tr>
              <tr><td>Temperature</td><td>kelvin</td><td>K</td></tr>
              <tr><td>Amount of substance</td><td>mole</td><td>mol</td></tr>
              <tr><td>Luminous intensity</td><td>candela</td><td>cd</td></tr>
            </table>
            <ul>
              <li><b>Derived quantities:</b> area (m^2), volume (m^3), density (kg/m^3), speed (m/s), acceleration (m/s^2), force (newton, N), pressure (pascal, Pa), energy (joule, J), power (watt, W).</li>
              <li>Every derived unit is a little story: force = mass × acceleration, so 1 N = 1 kg·m/s^2.</li>
            </ul>

            <h3>2. Prefixes, conversions and the 3.6 rule</h3>
            <ul>
              <li>Prefixes scale units by powers of ten: milli (m) = 1/1000, centi (c) = 1/100, kilo (k) = 1000, mega (M) = 1,000,000.</li>
              <li>1 km = 1000 m; 1 m = 100 cm = 1000 mm; 1 hour = 3600 s; 1 m^3 = 1000 litres.</li>
              <li><b>The 3.6 rule:</b> to change km/h to m/s, divide by 3.6; to change m/s to km/h, multiply by 3.6. (Because 1 km/h = 1000 m ÷ 3600 s.)</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a danfo bus moves at 72 km/h. In m/s: 72 ÷ 3.6 = 20 m/s. A sprinter at 10 m/s is doing 10 × 3.6 = 36 km/h. The 3.6 rule saves exam minutes.</div>

            <h3>3. Instruments and what they measure</h3>
            <table>
              <tr><th>Instrument</th><th>Quantity</th><th>Note</th></tr>
              <tr><td>Metre rule / tape</td><td>length</td><td>reads to 0.1 cm</td></tr>
              <tr><td>Vernier calipers</td><td>small lengths, diameters</td><td>reads to 0.01 cm</td></tr>
              <tr><td>Micrometer screw gauge</td><td>tiny thicknesses</td><td>reads to 0.01 mm — the most precise of the three</td></tr>
              <tr><td>Beam / electronic balance</td><td>mass</td><td>mass, NOT weight</td></tr>
              <tr><td>Spring balance</td><td>force / weight</td><td>reads in newtons</td></tr>
              <tr><td>Stopwatch</td><td>time</td><td>reaction error is the classic limitation</td></tr>
            </table>
            <div class="formula">TRAP: a balance measures MASS (kg); a spring balance measures WEIGHT (N). "Instrument for measuring weight?" → spring balance, not beam balance.</div>

            <h3>4. Dimensions: the fingerprint of a quantity</h3>
            <ul>
              <li>Dimensions write a quantity in terms of the fundamental trio [L] length, [M] mass, [T] time: speed = [L][T]^-1; acceleration = [L][T]^-2; force = [M][L][T]^-2; work = [M][L]^2[T]^-2.</li>
              <li><b>Checking equations:</b> both sides of a correct equation must carry the same dimensions. If they do not, the equation is certainly wrong; if they do, it is at least possible.</li>
              <li>Constants with dimensions (like g) count; pure numbers (like 1/2) do not.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> test s = ut + 1/2 at^2. [ut] = ([L][T]^-1)([T]) = [L]; [at^2] = ([L][T]^-2)([T]^2) = [L]; left side [L]. All terms are lengths — dimensionally sound.</div>

            <h3>5. Scalars and vectors</h3>
            <ul>
              <li><b>Scalars</b> have magnitude only: mass, distance, speed, time, energy, temperature, density. They add by ordinary arithmetic.</li>
              <li><b>Vectors</b> have magnitude AND direction: displacement, velocity, acceleration, force, momentum, weight. They add by geometry, not by plain sums.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two perpendicular vectors 3 N east and 4 N north added tip-to-tail, with the 5 N resultant closing the right-angled triangle">\n              <rect x="8" y="8" width="444" height="174" rx="10" fill="#eef2ff" stroke="#3730a3" stroke-width="2"/>\n              <line x1="60" y1="150" x2="240" y2="150" stroke="#0f172a" stroke-width="3"/><path d="M240 150 l-10 -5 v10 z" fill="#0f172a"/>\n              <line x1="240" y1="150" x2="240" y2="40" stroke="#0f172a" stroke-width="3"/><path d="M240 40 l-5 10 h10 z" fill="#0f172a"/>\n              <line x1="60" y1="150" x2="240" y2="40" stroke="#dc2626" stroke-width="3" stroke-dasharray="7 5"/><path d="M240 40 l-11 3 6 9 z" fill="#dc2626"/>\n              <text x="130" y="168" font-size="11" font-weight="800" fill="#0f172a">P = 3 N (east)</text>\n              <text x="252" y="100" font-size="11" font-weight="800" fill="#0f172a">Q = 4 N (north)</text>\n              <text x="90" y="90" font-size="11" font-weight="800" fill="#b91c1c">R = 5 N</text>\n              <g font-size="10" fill="#3730a3" font-weight="700">\n                <text x="280" y="60">Tip-to-tail: draw P, then Q</text>\n                <text x="280" y="76">from P&apos;s tip. The resultant R</text>\n                <text x="280" y="92">closes the triangle.</text>\n                <text x="280" y="116">At 90°: R = square root of</text>\n                <text x="280" y="132">(3^2 + 4^2) = 5 N, at</text>\n                <text x="280" y="148">tan⁻¹(4/3) ≈ 53.1° to P.</text>\n              </g>\n            </svg></div>

            <h3>6. Adding vectors and the right-angle shortcut</h3>
            <ul>
              <li><b>Same direction:</b> add (3 N + 4 N = 7 N). <b>Opposite:</b> subtract (4 N − 3 N = 1 N, towards the bigger).</li>
              <li><b>At 90°:</b> Pythagoras — R = √(P^2 + Q^2). The 3-4-5 triangle is the exam favourite.</li>
              <li><b>Direction:</b> the angle θ between R and P satisfies tan θ = Q ÷ P.</li>
              <li><b>Components:</b> a vector V at angle θ to the horizontal has horizontal part V cos θ and vertical part V sin θ. A ladder force of 50 N at 30° pushes 50 cos 30° ≈ 43.3 N sideways and 50 sin 30° = 25 N upwards.</li>
            </ul>
            <div class="formula">TRAP: two forces of 3 N and 4 N can give ANY resultant between 1 N and 7 N depending on the angle — never answer &apos;7 N&apos; unless they point the same way, and &apos;5 N&apos; only at right angles.</div>

            <h3>7. Accuracy, errors and honesty in measurement</h3>
            <ul>
              <li><b>Systematic errors:</b> the instrument is biased (zero error, worn rule) — they shift every reading the same way; calibrate to cure.</li>
              <li><b>Random errors:</b> readings scatter (parallax, vibrations, reaction time) — repeat and average to tame.</li>
              <li>Parallax: read scales with the eye directly above the mark. Zero error: check the needle rests on zero before trusting it.</li>
            </ul>

            <h3>8. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Give the seven fundamental quantities with units. <i>Ans: length m, mass kg, time s, current A, temperature K, amount mol, luminous intensity cd.</i></li>
              <li><b>Q2.</b> Is density fundamental or derived? Its unit? <i>Ans: derived; kg/m^3.</i></li>
              <li><b>Q3.</b> Convert 108 km/h to m/s. <i>Ans: 30 m/s.</i></li>
              <li><b>Q4.</b> Instrument that reads to 0.01 mm? <i>Ans: micrometer screw gauge.</i></li>
              <li><b>Q5.</b> Dimensions of force? <i>Ans: [M][L][T]^-2.</i></li>
              <li><b>Q6.</b> Which is a vector: speed, energy, momentum, density? <i>Ans: momentum.</i></li>
              <li><b>Q7.</b> Resultant of 3 N and 4 N at right angles? <i>Ans: 5 N.</i></li>
              <li><b>Q8.</b> Maximum and minimum resultant of 3 N and 4 N? <i>Ans: 7 N and 1 N.</i></li>
              <li><b>Q9.</b> Horizontal component of 100 N at 60° to the ground? <i>Ans: 100 cos 60° = 50 N.</i></li>
              <li><b>Q10.</b> Error type cured by averaging repeats? <i>Ans: random error.</i></li>
              <li><b>Q11.</b> A spring balance measures which quantity? <i>Ans: weight (force), in newtons.</i></li>
              <li><b>Q12.</b> Check F = ma dimensionally. <i>Ans: [M][L][T]^-2 on both sides — sound.</i></li>
            </ul>
            <div class="formula">SUMMARY: measurement begins with the seven fundamental quantities and their SI units, builds derived units like the newton and joule from them, and scales them with prefixes; conversions obey powers of ten with the 3.6 rule between km/h and m/s; dimensions ([M], [L], [T]) fingerprint every quantity and police every equation; scalars add arithmetically while vectors add geometrically — tip-to-tail, with the right-angle shortcut R = √(P^2 + Q^2) and components V cos θ / V sin θ; and honest measurement respects errors: systematic bias is calibrated away, random scatter is averaged away.</div>

'''

title = 'Measurement, Units & Vectors'
assert '`' not in CONTENT and '${' not in CONTENT
pat = re.compile(r"\n(\s*)title: '" + re.escape(title) + "',")
hits = list(pat.finditer(s))
assert len(hits) == 1, (title, len(hits))
k = hits[0].end()
ci = s.index('content: `', k) + 10
ce = s.index('`', ci)
s = s[:ci] + CONTENT + s[ce:]
print(title, '->', len(CONTENT), 'chars | svg:', '<svg' in CONTENT)

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
