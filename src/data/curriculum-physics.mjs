export default {

    color: 'sky', icon: '⚛️', blurb: 'Mechanics, waves, electricity and atomic physics with SI units done properly.',
    topics: {
      SS1: [
        {
          title: 'Measurement, Units & Vectors',
          tags: ['SI units', 'Scalars vs vectors', 'Resultant'],
          summary: 'SI base units, dimensional analysis and resolving vectors.',
          content: `
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
              <li>Prefixes scale units by powers of ten: milli (m) = 1/1000, centi (c) = 1/100, kilo (k) = 1000, mega (M) = 1,000,000 — and giga (G) = 10^9, the prefix your phone storage speaks in gigabytes.</li>
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
            <div class="formula">Watch out — TRAP: a balance measures MASS (kg); a spring balance measures WEIGHT (N). "Instrument for measuring weight?" → spring balance, not beam balance.</div>

            <h3>4. Dimensions: the fingerprint of a quantity</h3>
            <ul>
              <li>Dimensions write a quantity in terms of the fundamental trio [L] length, [M] mass, [T] time: speed = [L][T]^-1; acceleration = [L][T]^-2; force = [M][L][T]^-2; work = [M][L]^2[T]^-2.</li>
              <li><b>Checking equations:</b> both sides of a correct equation must carry the same dimensions. If they do not, the equation is certainly wrong; if they do, it is at least possible.</li>
              <li>Constants with dimensions (like g) count; pure numbers (like 1/2) do not.</li>
              <li><b>Why units matter:</b> NASA lost the Mars Climate Orbiter (1999, over 100 million dollars) because one team wrote thrust in pound-seconds while the other read newton-seconds. A dimension check would have caught it — never skip the units line.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> test s = ut + 1/2 at^2. [ut] = ([L][T]^-1)([T]) = [L]; [at^2] = ([L][T]^-2)([T]^2) = [L]; left side [L]. All terms are lengths — dimensionally sound.</div>

            <h3>5. Scalars and vectors</h3>
            <ul>
              <li><b>Scalars</b> have magnitude only: mass, distance, speed, time, energy, temperature, density. They add by ordinary arithmetic.</li>
              <li><b>Vectors</b> have magnitude AND direction: displacement, velocity, acceleration, force, momentum, weight. They add by geometry, not by plain sums.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two perpendicular vectors 3 N east and 4 N north added tip-to-tail, with the 5 N resultant closing the right-angled triangle">
              <rect x="8" y="8" width="444" height="174" rx="10" fill="#eef2ff" stroke="#3730a3" stroke-width="2"/>
              <line x1="60" y1="150" x2="240" y2="150" stroke="#0f172a" stroke-width="3"/><path d="M240 150 l-10 -5 v10 z" fill="#0f172a"/>
              <line x1="240" y1="150" x2="240" y2="40" stroke="#0f172a" stroke-width="3"/><path d="M240 40 l-5 10 h10 z" fill="#0f172a"/>
              <line x1="60" y1="150" x2="240" y2="40" stroke="#dc2626" stroke-width="3" stroke-dasharray="7 5"/><path d="M240 40 l-11 3 6 9 z" fill="#dc2626"/>
              <text x="130" y="168" font-size="11" font-weight="800" fill="#0f172a">P = 3 N (east)</text>
              <text x="252" y="100" font-size="11" font-weight="800" fill="#0f172a">Q = 4 N (north)</text>
              <text x="90" y="90" font-size="11" font-weight="800" fill="#b91c1c">R = 5 N</text>
              <g font-size="10" fill="#3730a3" font-weight="700">
                <text x="280" y="60">Tip-to-tail: draw P, then Q</text>
                <text x="280" y="76">from P&apos;s tip. The resultant R</text>
                <text x="280" y="92">closes the triangle.</text>
                <text x="280" y="116">At 90°: R = square root of</text>
                <text x="280" y="132">(3^2 + 4^2) = 5 N, at</text>
                <text x="280" y="148">angle with tan = 4/3, about 53.1° to P.</text>
              </g>
            </svg></div>

            <h3>6. Adding vectors and the right-angle shortcut</h3>
            <ul>
              <li><b>Same direction:</b> add (3 N + 4 N = 7 N). <b>Opposite:</b> subtract (4 N − 3 N = 1 N, towards the bigger).</li>
              <li><b>At 90°:</b> Pythagoras — R = √(P^2 + Q^2). The 3-4-5 triangle is the exam favourite.</li>
              <li><b>Direction:</b> the angle θ between R and P satisfies tan θ = Q ÷ P.</li>
              <li><b>Components:</b> a vector V at angle θ to the horizontal has horizontal part V cos θ and vertical part V sin θ. A ladder force of 50 N at 30° pushes 50 cos 30° ≈ 43.3 N sideways and 50 sin 30° = 25 N upwards.</li>
            </ul>
            <div class="formula">Watch out — TRAP: two forces of 3 N and 4 N can give ANY resultant between 1 N and 7 N depending on the angle — never answer &apos;7 N&apos; unless they point the same way, and &apos;5 N&apos; only at right angles.</div>

            <h3>7. Accuracy, errors and honesty in measurement</h3>
            <ul>
              <li><b>Systematic errors:</b> the instrument is biased (zero error, worn rule) — they shift every reading the same way; calibrate to cure.</li>
              <li><b>Random errors:</b> readings scatter (parallax, vibrations, reaction time) — repeat and average to tame.</li>
              <li>Parallax: read scales with the eye directly above the mark. Zero error: check the needle rests on zero before trusting it.</li>
              <li><b>Reading vernier calipers:</b> main scale gives the mm, vernier scale gives the extra hundredths; read the vernier line that EXACTLY aligns with a main-scale line. A caliper showing 3.4 cm main + 0.06 vernier reads 3.46 cm.</li>
              <li><b>Reading a micrometer:</b> sleeve scale in mm plus thimble scale in hundredths of a mm; 5.5 mm on the sleeve + 0.23 on the thimble = 5.73 mm. Practice both until they are two-second reads.</li>
            </ul>

            <h3>8. Estimation, significant figures and defending against nonsense</h3>
            <ul>
              <li><b>Estimation</b> is rounding to friendly numbers BEFORE calculating, to know roughly what the answer should be. If the exact calculation lands far from the estimate, something is wrong.</li>
              <li><b>Order of magnitude</b> is the power of ten nearest to a quantity: a school bag is of order 1 kg; a danfo bus about 1000 kg (10^3); the Earth about 10^24 kg.</li>
              <li><b>Significant figures</b> communicate honesty: 9.8 m/s^2 has two, 9.81 has three; quoting seven figures from a two-figure instrument is pretending.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> estimate the seconds in a school year: 365 days ≈ 4 × 10^2; × 24 h ≈ 10^4; × 3600 s ≈ 3.6 × 10^4 → about 3 × 10^7 s (31.5 million). Physicists call 10^7 seconds a year — and now so can you.</div>

            <h3>9. Components in action: the lawn-mower problem</h3>
            <ul>
              <li>A gardener pushes a mower with 200 N along the handle, which leans 30° below the horizontal. Only the horizontal component moves the mower forward: 200 cos 30° ≈ 200 × 0.866 = 173 N. The vertical component (200 sin 30° = 100 N) merely presses the mower into the ground.</li>
              <li>The same idea explains why pulling a cart with an upward-angled rope feels easier than pushing horizontally: part of your pull lifts as well as drags.</li>
            </ul>

            <h3>10. Try these (with answers)</h3>
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
              <li><b>Q13.</b> What destroyed the Mars Climate Orbiter? <i>Ans: a unit mismatch — pound-seconds vs newton-seconds.</i></li>
              <li><b>Q14.</b> Order of magnitude of the seconds in a year? <i>Ans: about 10^7 s — 31.5 million, to be exact.</i></li>
              <li><b>Q15.</b> Horizontal component of 200 N at 30°? <i>Ans: about 173 N.</i></li>
            </ul>
            <div class="formula">SUMMARY: measurement begins with the seven fundamental quantities and their SI units, builds derived units like the newton and joule from them, and scales them with prefixes; conversions obey powers of ten with the 3.6 rule between km/h and m/s; dimensions ([M], [L], [T]) fingerprint every quantity and police every equation; scalars add arithmetically while vectors add geometrically — tip-to-tail, with the right-angle shortcut R = √(P^2 + Q^2) and components V cos θ / V sin θ; and honest measurement respects errors: systematic bias is calibrated away, random scatter is averaged away.</div>

`,
          cards: [
            { q: 'Name the SI units of length, mass, time, electric current and temperature.', a: 'Metre (m), kilogram (kg), second (s), ampere (A) and kelvin (K) — candela for luminous intensity and mole for amount of substance complete the seven base units.' },
            { q: 'Which instrument measures to the greatest accuracy: metre rule, vernier caliper or micrometer screw gauge?', a: 'The micrometer screw gauge (0.01 mm), then the vernier caliper (0.1 mm), then the metre rule (1 mm). Use the micrometer for wire diameters and the vernier for internal/external dimensions.' },
            { q: 'How do you read a vernier caliper?', a: 'Read the main scale just before the vernier zero, then find the vernier division that aligns exactly with a main-scale line; total = main-scale reading + (aligned division x 0.01 cm).' },
            { q: 'Distinguish between mass and weight.', a: 'Mass is the quantity of matter (kg, measured with a beam balance, constant everywhere); weight is the force of gravity on that mass (newtons, W = mg, measured with a spring balance, varies with location).' },
            { q: 'What is the difference between scalar and vector quantities? Give two examples of each.', a: 'Scalars have magnitude only (mass, time, distance, speed); vectors have magnitude and direction (force, velocity, displacement, acceleration).' },
            { q: 'How do you find the resultant of two perpendicular vectors of 3 N and 4 N?', a: 'By Pythagoras: R = sqrt(3^2 + 4^2) = 5 N, at an angle tan-1(4/3) = about 53 deg to the 3 N force.' },
            { q: 'What does it mean to resolve a vector into components?', a: 'Splitting a vector into two perpendicular parts: a vector F at angle θ has a horizontal component F cos θ and a vertical component F sin θ.' },
            { q: 'Give the SI (derived) units of velocity, force, density and energy.', a: 'Velocity: m/s; force: newton (kg m/s2); density: kg/m3; energy: joule (kg m2/s2).' },
            { q: 'What is parallax error and how is it avoided?', a: 'Error from reading a scale with the eye off to one side; avoid it by placing the eye directly above the mark being read (mirrored scales help confirm this).' },
            { q: 'How would you measure the period of a pendulum accurately?', a: 'Time 20 or more complete oscillations with a stopwatch and divide by the number of oscillations — this spreads the reaction-time error over many swings.' },
            { q: 'What is zero error, and how is it corrected?', a: 'An instrument reading other than zero when it should read zero; correct every reading by subtracting (positive zero error) or adding (negative zero error) the error.' },
            { q: 'Convert: (a) 2.5 km to metres, (b) 350 g to kg, (c) 45 minutes to seconds.', a: '(a) 2500 m; (b) 0.35 kg; (c) 2700 s — kilo means x 1000, and 1 minute = 60 s.' },
            { q: 'List the seven SI base quantities and their units.', a: 'Length (metre), mass (kilogram), time (second), electric current (ampere), temperature (kelvin), luminous intensity (candela) and amount of substance (mole).' },
            { q: 'Distinguish scalars from vectors, with examples.', a: 'Scalars have magnitude only - mass, time, speed, distance, energy, temperature. Vectors have magnitude AND direction - velocity, displacement, force, acceleration, momentum.' },
            { q: 'How do you find the resultant of two perpendicular vectors?', a: 'Use Pythagoras: R = √(P^2 + Q^2). For 3 N and 4 N at right angles, R = √(9 + 16) = 5 N, acting at an angle tan⁻^1(Q/P) from the first.' }
          ],
          quiz: [
            { q: 'What is the SI unit of length?', options: ['metre', 'centimetre', 'kilogram', 'newton'], correct: 0,
              exp: 'The metre (m) is the SI base unit of length; centimetres and kilometres are derived from it.' },
            { q: 'How many SI base quantities are there?', options: ['7', '5', '6', '10'], correct: 0,
              exp: 'Seven: length, mass, time, electric current, temperature, luminous intensity and amount of substance.' },
            { q: 'Which of these is a vector quantity?', options: ['velocity', 'speed', 'distance', 'mass'], correct: 0,
              exp: 'Velocity has both magnitude and direction; speed, distance and mass have magnitude only.' },
            { q: 'A scalar quantity has...', options: ['magnitude only', 'direction only', 'magnitude and direction', 'units of newtons'], correct: 0,
              exp: 'Scalars (mass, time, temperature, energy) need only a size and a unit.' },
            { q: 'What is the SI unit of time?', options: ['second', 'minute', 'hour', 'day'], correct: 0,
              exp: 'The second (s) is the base unit - minutes and hours are multiples of it.' },
            { q: 'Two perpendicular forces of 3 N and 4 N act on a body. Their resultant is...', options: ['5 N', '7 N', '1 N', '12 N'], correct: 0,
              exp: 'Perpendicular vectors add by Pythagoras: √(3^2 + 4^2) = √25 = 5 N.' },
            { q: 'Which instrument measures the density of a liquid directly?', options: ['hydrometer', 'thermometer', 'barometer', 'ammeter'], correct: 0,
              exp: 'A hydrometer floats at a depth that depends on the liquid’s density - the scale reads it off.' },
            { q: 'What is the SI unit of mass?', options: ['kilogram', 'newton', 'gram', 'joule'], correct: 0,
              exp: 'The kilogram (kg) is the base unit of mass. Weight, being a force, is measured in newtons.' },
            { q: 'Displacement differs from distance because displacement is...', options: ['a straight-line vector from start to finish', 'the whole path travelled', 'always larger', 'a scalar'], correct: 0,
              exp: 'Distance counts every step of the path; displacement is only the straight arrow from start to end, with direction.' },
            { q: 'Vectors are represented by arrows because the arrow shows...', options: ['magnitude by length and direction by the arrowhead', 'magnitude only', 'speed only', 'nothing physical'], correct: 0,
              exp: 'A longer arrow means a bigger vector; the head points the way - both pieces of information in one symbol.' }
          ],
        },
        {
          title: 'Motion & Newton’s Laws',
          tags: ['Equations of motion', 'Inertia', 'F = ma'],
          summary: 'The four equations of uniformly accelerated motion and the three laws of motion.',
          content: `
            <h3>1. Motion: what moves, and how we describe it</h3>
            <p><b>Physics is the study of matter and motion</b> — how things move, and why they move that way. A body is in <b>motion</b> when its position changes with time relative to an observer, and motion comes in four classic flavours.</p>
            <table>
              <tr><th>Type</th><th>Path</th><th>Everyday example</th></tr>
              <tr><td>Linear (translational)</td><td>straight-line path, equal or changing speed</td><td>car on a straight road, conveyance belt</td></tr>
              <tr><td>Circular</td><td>constant turning about a centre</td><td>roundabout, fan blade, wheel</td></tr>
              <tr><td>Oscillatory</td><td>repeats to and fro about a point</td><td>pendulum, piston, swing</td></tr>
              <tr><td>Random</td><td>no fixed pattern</td><td>brownian motion of gas molecules</td></tr>
            </table>
            <ul>
              <li><b>Speed</b> = distance ÷ time (m/s); a scalar — it does not care about direction.</li>
              <li><b>Velocity</b> = displacement ÷ time — speed with a direction attached.</li>
              <li><b>Acceleration</b> = change in velocity ÷ time (m/s^2).</li>
              <li><b>Average speed</b> = TOTAL distance ÷ TOTAL time — never the average of the two speeds. Ride 60 m at 10 m/s (6 s) and 60 m at 20 m/s (3 s): average = 120 ÷ 9 ≈ 13.3 m/s, not 15.</li>
            </ul>

            <h3>2. The three equations of uniformly accelerated motion</h3>
            <ul>
              <li><b>v = u + at</b> — final velocity from initial velocity u, acceleration a, time t.</li>
              <li><b>s = ut + 1/2 at^2</b> — distance covered while accelerating.</li>
              <li><b>v^2 = u^2 + 2as</b> — the time-free equation.</li>
              <li>They only work when a is CONSTANT; agree on signs: the direction of motion is positive.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a bike starts from rest (u = 0) and accelerates at 2 m/s^2 for 5 s. Then v = 0 + 2 × 5 = 10 m/s; s = 0 + 1/2 × 2 × 25 = 25 m; and v^2 = 0 + 2 × 2 × 25 confirms 100 = 100. All three equations sing the same song.</div>

            <h3>3. Graphs: pictures that tell the truth</h3>
            <ul>
              <li><b>Distance–time graph:</b> slope = speed. A straight line means constant speed; a curve means changing speed.</li>
              <li><b>Velocity–time graph:</b> slope = acceleration; <b>area under the graph = distance travelled</b>. This area fact is a WAEC favourite.</li>
              <li>A horizontal velocity–time line means zero acceleration — cruise control for cars.</li>
              <li>When the line curves, the same rules hold locally: the slope at a point is the acceleration at that instant, and the area under the curve is still the distance — count the grid squares if you must.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity-time graph: straight rising line, slope labelled acceleration, area under line shaded and labelled distance">
              <rect x="8" y="8" width="444" height="174" rx="10" fill="#f0fdf4" stroke="#166534" stroke-width="2"/>
              <line x1="60" y1="160" x2="400" y2="160" stroke="#0f172a" stroke-width="2"/>
              <line x1="60" y1="160" x2="60" y2="30" stroke="#0f172a" stroke-width="2"/>
              <line x1="60" y1="160" x2="360" y2="50" stroke="#16a34a" stroke-width="3"/>
              <path d="M60 160 L360 50 L360 160 Z" fill="#86efac" opacity="0.5"/>
              <text x="150" y="90" font-size="10" font-weight="800" fill="#15803d">slope = acceleration</text>
              <text x="200" y="140" font-size="10" font-weight="800" fill="#166534">area = distance</text>
              <text x="370" y="168" font-size="9" fill="#0f172a">time →</text>
              <text x="40" y="26" font-size="9" fill="#0f172a">v ↑</text>
              <g font-size="9.5" fill="#14532a" font-weight="700">
                <text x="280" y="30">Read the graph like a story:</text>
                <text x="280" y="46">steep slope = hard acceleration;</text>
                <text x="280" y="62">big area = long distance.</text>
                <text x="280" y="86">Flat line = zero acceleration</text>
                <text x="280" y="102">(constant velocity cruising).</text>
              </g>
            </svg></div>

            <h3>4. Newton&apos;s three laws — the rules of the road</h3>
            <ul>
              <li><b>First law (inertia):</b> a body keeps doing what it is doing unless a force interferes. Sudden braking throws passengers FORWARD — their bodies keep the old motion. Dust stays on a carpet until the vacuum cleaner acts.</li>
              <li><b>Second law (F = ma):</b> acceleration follows force and bows to mass. Double the force, double the acceleration; double the mass, halve the acceleration.</li>
              <li><b>Third law (action–reaction):</b> every action has an equal and opposite reaction on a DIFFERENT body. Swimming pushes water back; the water pushes you forward. A released balloon flies as the air escapes.</li>
            </ul>
            <div class="formula">Watch out — TRAP: action and reaction never cancel each other — they act on different bodies. &apos;They cancel so nothing should move&apos; is the oldest wrong sentence in mechanics.</div>

            <h3>5. Motion under gravity: free fall</h3>
            <ul>
              <li>Near the ground, falling bodies accelerate at <b>g ≈ 10 m/s^2</b> (exactly about 9.8); take u = 0 for a dropped object.</li>
              <li>Then v = gt, s = 1/2 gt^2, v^2 = 2gs. After 1 s: v = 10 m/s, s = 5 m; after 2 s: v = 20 m/s, s = 20 m; after 3 s: s = 45 m.</li>
              <li>All masses fall together in a vacuum — the feather and hammer test on the Moon proved it.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a mango falls from a tree for 2 s. v = gt = 10 × 2 = 20 m/s; height = 1/2 gt^2 = 1/2 × 10 × 4 = 20 m. Two seconds of free fall means a 20-metre tree — nature&apos;s own physics problem.</div>

            <h3>6. Force, mass and weight — do not mix them</h3>
            <ul>
              <li><b>Mass</b> (kg) is the amount of matter; it never changes with location.</li>
              <li><b>Weight</b> W = mg (N) is the Earth&apos;s pull on that mass; it changes on the Moon.</li>
              <li>A 60 kg student weighs W = 60 × 10 = 600 N on Earth but only about 100 N on the Moon — same student, different pull.</li>
            </ul>

            <h3>7. Braking: deceleration on real roads</h3>
            <ul>
              <li><b>Deceleration</b> is simply negative acceleration — the velocity shrinks. Use the same equations with a minus sign.</li>
              <li><b>Stopping distance</b> from v^2 = u^2 + 2as with v = 0 gives s = u^2 ÷ (2a). Stopping distance grows with the SQUARE of speed: double the speed, four times the stopping distance — the real reason speed limits exist.</li>
              <li>Total stopping distance = <b>thinking distance</b> (reaction time × speed) + <b>braking distance</b>. Tired or phone-distracted drivers grow the thinking part.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a car at 30 m/s brakes at 5 m/s^2. Braking distance = 30^2 ÷ (2 × 5) = 900 ÷ 10 = 90 m. With a 1 s reaction time the thinking distance adds 30 m — 120 m total, longer than a football pitch. Speed kills by arithmetic.</div>

            <h3>8. Relative velocity: how fast does the other car SEEM?</h3>
            <ul>
              <li>Velocity is always measured relative to something. The velocity of A relative to B is found by vector subtraction; on a straight road: same direction → subtract; opposite directions → add.</li>
              <li>A car at 30 m/s overtaking a lorry at 20 m/s closes at only 10 m/s — overtaking takes longer than drivers feel.</li>
              <li>Two danfos heading towards each other at 20 and 25 m/s approach at 45 m/s — the gap dies fast.</li>
            </ul>

            <h3>9. Oscillations: period, frequency and the pendulum secret</h3>
            <ul>
              <li>Oscillatory motion repeats about a centre: pendulums, swings, the balance wheel of a clock.</li>
              <li><b>Period (T)</b> = time for ONE complete to-and-fro, in seconds. <b>Frequency (f)</b> = oscillations per second, in hertz. They are reciprocals: f = 1 ÷ T.</li>
              <li><b>Amplitude</b> = the greatest distance from the centre; one full cycle covers the swing out and back.</li>
              <li>The pendulum secret: its period depends on LENGTH and on g, NOT on the mass of the bob nor on small changes of amplitude. A heavy bob and a light bob swing in step — which is why pendulum clocks keep honest time.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a pendulum makes 20 oscillations in 40 s. T = 40 ÷ 20 = 2 s; f = 1 ÷ 2 = 0.5 Hz. Swap the brass bob for a wooden one and nothing changes — the length owns the clock.</div>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> A car covers 120 m in 6 s at constant speed. Speed? <i>Ans: 20 m/s.</i></li>
              <li><b>Q2.</b> Difference between speed and velocity? <i>Ans: velocity carries direction; speed does not.</i></li>
              <li><b>Q3.</b> Unit of acceleration? <i>Ans: m/s^2.</i></li>
              <li><b>Q4.</b> v when u = 4 m/s, a = 2 m/s^2, t = 3 s? <i>Ans: v = 4 + 6 = 10 m/s.</i></li>
              <li><b>Q5.</b> s when u = 0, a = 4 m/s^2, t = 5 s? <i>Ans: s = 1/2 × 4 × 25 = 50 m.</i></li>
              <li><b>Q6.</b> What does the slope of a velocity–time graph give? <i>Ans: acceleration.</i></li>
              <li><b>Q7.</b> What does the area under a velocity–time graph give? <i>Ans: distance travelled.</i></li>
              <li><b>Q8.</b> Passengers lurch forward during braking — which law? <i>Ans: Newton&apos;s first law (inertia).</i></li>
              <li><b>Q9.</b> Force to accelerate 10 kg at 3 m/s^2? <i>Ans: F = ma = 30 N.</i></li>
              <li><b>Q10.</b> Why don&apos;t action–reaction forces cancel? <i>Ans: they act on different bodies.</i></li>
              <li><b>Q11.</b> Distance fallen in the first 3 s of free fall (g = 10)? <i>Ans: 45 m.</i></li>
              <li><b>Q12.</b> Weight of a 50 kg body (g = 10)? <i>Ans: 500 N.</i></li>
              <li><b>Q13.</b> Braking distance for 20 m/s at 4 m/s^2? <i>Ans: 400 ÷ 8 = 50 m.</i></li>
              <li><b>Q14.</b> Why does double speed mean four times the stopping distance? <i>Ans: s = u^2 ÷ (2a) — distance grows with the square of speed.</i></li>
              <li><b>Q15.</b> Relative speed of cars at 30 and 20 m/s in the same direction? <i>Ans: 10 m/s.</i></li>
              <li><b>Q16.</b> A pendulum has period 0.5 s. Frequency? <i>Ans: f = 1 ÷ 0.5 = 2 Hz.</i></li>
              <li><b>Q17.</b> Two things a pendulum period does NOT depend on? <i>Ans: mass of the bob and (small) amplitude.</i></li>
              <li><b>Q18.</b> Why is the average of 10 and 20 m/s NOT the average speed over equal distances? <i>Ans: more TIME is spent at the slower speed; use total distance ÷ total time.</i></li>
            </ul>
            <div class="formula">SUMMARY: motion is classified as linear, circular, oscillatory or random; speed and velocity differ by direction, and acceleration is velocity&apos;s rate of change; the trio v = u + at, s = ut + 1/2 at^2, v^2 = u^2 + 2as rules uniformly accelerated motion; graphs tell the truth — slope of velocity–time is acceleration and its area is distance; Newton&apos;s three laws govern everything from braking lurches to balloon flight, with F = ma as the working equation; and gravity gives free fall g ≈ 10 m/s^2 with v = gt and s = 1/2 gt^2, while weight W = mg remains a force, never a mass.</div>

`,
          cards: [
            { q: 'Distinguish between speed, velocity and acceleration.', a: 'Speed is distance per time (scalar); velocity is displacement per time (vector — speed in a stated direction); acceleration is the rate of change of velocity (m/s2).' },
            { q: 'A cyclist moving at 6 m/s accelerates at 1.5 m/s2 for 4 s. Find the final velocity.', a: 'v = u + at = 6 + (1.5 x 4) = 12 m/s.' },
            { q: 'State Newton\'s first law of motion.', a: 'A body remains at rest or in uniform motion in a straight line unless acted on by an unbalanced external force — the property of resistance to change is inertia.' },
            { q: 'State Newton\'s second law and its formula.', a: 'The rate of change of momentum of a body is proportional to the applied force and occurs in the force\'s direction; for constant mass, F = ma.' },
            { q: 'State Newton\'s third law with an example.', a: 'To every action there is an equal and opposite reaction — e.g. a gun recoils backwards when a bullet is fired forward, and rockets push exhaust down to move up.' },
            { q: 'Define momentum and give its unit.', a: 'Momentum is mass x velocity (p = mv), a vector measured in kg m/s — a heavy fast-moving body has large momentum and is hard to stop.' },
            { q: 'What is impulse?', a: 'Impulse is force x time of action (F t) and equals the change in momentum; padded mats and catching with relaxed hands increase contact time and reduce the force.' },
            { q: 'State the principle of conservation of momentum.', a: 'In a collision between two bodies with no external forces, the total momentum before equals the total momentum after — used for collisions and recoil problems.' },
            { q: 'A car accelerates uniformly from rest to 20 m/s in 8 s. Find its acceleration and distance covered.', a: 'a = (v - u)/t = 20/8 = 2.5 m/s2; s = ut + (1/2)at2 = 0 + 0.5 x 2.5 x 64 = 80 m (or s = average velocity x t = 10 x 8).' },
            { q: 'On a velocity-time graph, what do the gradient and the area under the line represent?', a: 'The gradient gives the acceleration (negative gradient = deceleration); the area under the graph gives the distance travelled.' },
            { q: 'Give two advantages and two disadvantages of friction.', a: 'Advantages: walking and gripping, braking, writing. Disadvantages: wear and tear of parts, wasted energy as heat — reduced by lubrication, ball bearings and streamlining.' },
            { q: 'What is terminal velocity?', a: 'The steady maximum speed a falling body reaches when air resistance grows to balance its weight, so acceleration becomes zero — a parachutist descends at terminal velocity.' },
            { q: 'State Newton’s second law.', a: 'F = ma — force equals mass times acceleration (the rate of change of momentum).' },
            { q: 'State the three equations of uniformly accelerated motion.', a: 'v = u + at; s = ut + 1/2 at^2; v^2 = u^2 + 2as - where u is initial velocity, v final, a acceleration, t time and s distance.' },
            { q: 'State Newton’s three laws of motion.', a: 'First: a body stays at rest or in uniform motion unless a net force acts (inertia). Second: F = ma. Third: to every action there is an equal and opposite reaction on a different body.' }
          ],
          quiz: [
            { q: 'The equation v = u + at applies to...', options: ['uniformly accelerated motion in a straight line', 'circular motion only', 'motion at constant speed only', 'projectiles horizontally'], correct: 0,
              exp: 'The three motion equations all assume constant (uniform) acceleration along a straight line.' },
            { q: 'Newton’s first law is also called the law of...', options: ['inertia', 'gravity', 'momentum', 'energy'], correct: 0,
              exp: 'A body keeps its state of rest or uniform motion unless a net force acts - that stubbornness is inertia.' },
            { q: 'Newton’s second law is written as...', options: ['F = ma', 'F = mv', 'F = m/a', 'F = a/m'], correct: 0,
              exp: 'Force equals mass times acceleration - the bigger the mass or the acceleration, the bigger the force needed.' },
            { q: 'Newton’s third law states that action and reaction are...', options: ['equal and opposite, on different bodies', 'equal and in the same direction', 'unequal but opposite', 'equal and on the same body'], correct: 0,
              exp: 'Every action has an equal, opposite reaction acting on a DIFFERENT object - that is why they never cancel.' },
            { q: 'What is the SI unit of force?', options: ['newton', 'joule', 'watt', 'pascal'], correct: 0,
              exp: 'One newton (N) is the force that gives a 1 kg mass an acceleration of 1 m/s^2.' },
            { q: 'Deceleration (retardation) is simply...', options: ['negative acceleration', 'zero acceleration', 'constant velocity', 'negative velocity'], correct: 0,
              exp: 'Slowing down is acceleration pointing opposite to the motion - negative acceleration.' },
            { q: 'The area under a velocity-time graph represents...', options: ['distance travelled', 'acceleration', 'speed', 'force'], correct: 0,
              exp: 'Velocity x time = distance, so the area under the graph is the distance covered.' },
            { q: 'The gradient (slope) of a velocity-time graph gives...', options: ['acceleration', 'distance', 'speed only', 'displacement'], correct: 0,
              exp: 'Change in velocity divided by time is acceleration - exactly what the slope measures.' },
            { q: 'A body at rest remains at rest until...', options: ['an unbalanced external force acts on it', 'gravity is removed', 'it is heated', 'its mass doubles'], correct: 0,
              exp: 'That is inertia - the first law. Only a net (unbalanced) force changes the state of motion.' },
            { q: 'A car starts from rest and accelerates at 2 m/s^2 for 5 s. Its final velocity is...', options: ['10 m/s', '2.5 m/s', '7 m/s', '25 m/s'], correct: 0,
              exp: 'v = u + at = 0 + (2 x 5) = 10 m/s.' }
          ],
        },
        {
          title: 'Work, Energy & Power',
          tags: ['Kinetic energy', 'P.E.', 'Conservation'],
          summary: 'Work done, the energy conservation principle and efficiency.',
          content: `
            <h3>1. Work: force that actually moves something</h3>
            <p>In physics, <b>work</b> is done ONLY when a force moves its point of application through a distance: <b>W = F × d</b>, measured in <b>joules (J)</b> — one joule is one newton moving something one metre. Hold a heavy bag still for an hour and you have done ZERO work on it, however tired your arm gets; push a wall all day and the wall lets you do nothing. Sweat is not work — displacement is work.</p>
            <ul>
              <li>Force must have a component ALONG the motion. Pull a cart with a rope angled upward: only the horizontal part of your pull does work on the cart.</li>
              <li>Carrying a load across a flat floor does no work ON THE LOAD — the lifting force is vertical, the motion horizontal, they are at 90°.</li>
              <li>Work against friction turns into heat — rubbing palms together is work becoming warmth.</li>
            </ul>
            <div class="formula">Watch out — TRAP: &apos;work = force × distance&apos; only counts the distance moved IN THE DIRECTION of the force. Perpendicular force, zero work — the classic exam ambush.</div>

            <h3>2. Energy: the ability to do work</h3>
            <ul>
              <li><b>Energy</b> is the capacity to do work, also in joules. It never appears from nowhere and never disappears — it only changes form.</li>
              <li><b>Kinetic energy (KE)</b> — energy of motion: KE = 1/2 mv^2. Double the speed and KE quadruples: the real arithmetic behind crash severity.</li>
              <li><b>Potential energy (PE)</b> — stored energy of position: gravitational PE = mgh; a raised tank, a stretched rubber band, a compressed spring.</li>
              <li>Other forms: chemical (food, fuel, batteries), heat, light, sound, electrical, nuclear.</li>
              <li>Quick conversion instinct: food is chemical energy your body turns into KE and heat; a charged phone battery is chemical waiting to become light and sound; the sun delivers nuclear-fusion energy as light, which plants file away as chemical and panels turn into electrical.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a 0.5 kg ball flies at 10 m/s. KE = 1/2 × 0.5 × 100 = 25 J. Lift it 4 m: PE = mgh = 0.5 × 10 × 4 = 20 J. Same ball, same joules currency, two different accounts.</div>

            <h3>3. Conservation of energy: nature&apos;s unbreakable bank</h3>
            <ul>
              <li><b>Energy cannot be created or destroyed, only transformed.</b> A falling mango trades PE for KE as it drops; at the ground the KE becomes heat, sound and a dent.</li>
              <li>A pendulum swaps KE and PE twice per swing; a little leaks to air resistance each cycle, which is why it eventually stops.</li>
              <li>The generator chain (Nigeria&apos;s favourite): chemical (fuel) → heat (combustion) → kinetic (piston and crank) → electrical (alternator) → light, sound, heat in your room. Every step leaks some heat — the tax of reality.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Falling ball energy bars: at the top full potential energy, halfway half and half, at the bottom full kinetic energy, total height always equal">
              <rect x="8" y="8" width="444" height="174" rx="10" fill="#fefce8" stroke="#854d0e" stroke-width="2"/>
              <g font-size="9.5" font-weight="800" fill="#854d0e">
                <text x="60" y="30">TOP</text>
                <rect x="50" y="36" width="34" height="110" fill="#f59e0b"/><text x="46" y="160">PE full</text>
                <text x="170" y="30">MIDDLE</text>
                <rect x="165" y="36" width="34" height="55" fill="#f59e0b"/><rect x="165" y="91" width="34" height="55" fill="#16a34a"/><text x="158" y="160">PE = KE</text>
                <text x="290" y="30">GROUND</text>
                <rect x="285" y="36" width="34" height="110" fill="#16a34a"/><text x="278" y="160">KE full</text>
                <text x="352" y="60">Total height never</text>
                <text x="352" y="76">changes — energy only</text>
                <text x="352" y="92">swaps accounts:</text>
                <text x="352" y="112">PE = mgh (amber)</text>
                <text x="352" y="130">KE = 1/2 mv^2 (green)</text>
                <text x="352" y="150">mgh(top) = 1/2 mv^2(bottom)</text>
              </g>
            </svg></div>
            <div class="worked"><b>Worked example:</b> a 2 kg stone drops from 10 m (g = 10). PE at top = 2 × 10 × 10 = 200 J. Ignoring air, speed at ground: 1/2 mv^2 = 200 → v^2 = 200 → v ≈ 14.1 m/s. The bank paid out everything.</div>

            <h3>4. Power: how FAST the work flows</h3>
            <ul>
              <li><b>Power = work ÷ time</b>, in <b>watts (W)</b> — one watt is one joule per second. Two students climb the same stairs and do the same work; the faster one develops more power.</li>
              <li>Also <b>P = F × v</b> for a constant force moving at speed v — the engine formula.</li>
              <li><b>The kilowatt-hour (kWh)</b> is a unit of ENERGY, not power: 1 kWh = 1000 W × 3600 s = 3.6 × 10^6 J. Your prepaid meter sells joules in kWh wrappers.</li>
            </ul>
            <div class="formula">Watch out — TRAP: kWh is ENERGY. &apos;Which unit measures electrical energy billed by PHCN?&apos; → kilowatt-hour, never kilowatt.</div>
            <div class="worked"><b>Worked example:</b> a 60 kg student runs up 20 steps of 0.25 m each in 5 s. h = 5 m; work = mgh = 60 × 10 × 5 = 3000 J; power = 3000 ÷ 5 = 600 W — about as powerful as six bright old bulbs.</div>

            <h3>5. Efficiency: the tax every machine pays</h3>
            <ul>
              <li><b>Efficiency = (useful energy or work out ÷ total energy in) × 100.</b> Friction, heat and sound steal the rest, so efficiency is always below 100%.</li>
              <li>A generator giving 3000 J of electricity from 10,000 J of fuel is 30% efficient; an LED lamp beats an incandescent bulb because more of its watts become light instead of heat. Efficiency is the quiet difference between a hot bulb and a bright one.</li>
              <li>Reducing the tax: lubrication, smooth bearings, tight belts — maintenance is efficiency work. Every naira spent on oil is a naira stolen back from friction.</li>
            </ul>

            <h3>6. Energy sources: what Nigeria and the world run on</h3>
            <ul>
              <li><b>Non-renewable sources</b> — crude oil, natural gas, coal, uranium — took millions of years to form and do not refill within a human lifetime; burning them also loads the air with CO2.</li>
              <li><b>Renewable sources</b> — solar, wind, hydro, biomass, tidal — refill as fast as we use them. Nigeria&apos;s sun alone is an ocean of untapped kilowatts; a 300 W solar panel getting 5 good hours a day harvests 1.5 kWh daily.</li>
              <li><b>Hydro</b> already powers much of the national grid (Kainji, Jebba, Shiroro); dams store the sun&apos;s work indirectly — evaporation, rain, height, then PE → KE → electrical.</li>
              <li>The sensible grid of the future mixes sources: sun by day, wind when it blows, hydro as the steady backbone, batteries to bridge the gaps.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a home runs a 900 W load for 6 hours from a generator burning fuel worth 10,000 J of energy per second. Electrical energy out = 900 × 6 × 3600 = 1.94 × 10^7 J; fuel energy in = 10,000 × 6 × 3600 = 2.16 × 10^8 J; efficiency ≈ 9%. Small generators are brutal — another reason solar keeps winning arguments.</div>

            <h3>7. Power in real life: humans, horses and engines</h3>
            <ul>
              <li>A fit human can sustain about 100 W of useful work — one bright old bulb. Sprinting spikes to over 1000 W for seconds.</li>
              <li><b>Horsepower (hp)</b> survives as an engine unit: 1 hp ≈ 746 W. A 15 hp generator ≈ 11,000 W — enough for a whole compound of careful neighbours.</li>
              <li>Comparing machines is comparing power: the machine that does the same work faster is the more powerful one, even if both waste the same share.</li>
            </ul>

            <h3>8. Home electricity: the naira mathematics of energy</h3>
            <ul>
              <li>Appliances carry power labels; the bill counts ENERGY = power × time in kWh. A 1000 W pressing iron used 2 h burns 2 kWh; a 100 W bulb left on 20 h also burns 2 kWh — the iron is not the villain, the hours are.</li>
              <li><b>Cost = kWh × tariff.</b> At ₦100 per kWh, that 2 kWh pressing session costs ₦200. Monthly, five such sessions weekly ≈ ₦4,000 — physics is domestic economics.</li>
              <li>Standby loads (TVs, decoders, chargers) sip watts around the clock; 10 W of standby × 24 h × 30 days = 7.2 kWh ≈ ₦720 monthly for doing nothing. Unplugging idle chargers is literally profitable.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a student&apos;s room: 2 × 60 W bulbs + 1 × 80 W fan run 5 h daily. Daily energy = (120 + 80) × 5 = 1000 Wh = 1 kWh. At ₦100/kWh that room costs ₦100/day, ₦3,000/month. Swap the bulbs for 10 W LEDs and the bill falls to about ₦1,800 — efficiency is money.</div>

            <h3>9. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Work done by a 20 N force moving a box 4 m along the force? <i>Ans: 80 J.</i></li>
              <li><b>Q2.</b> Work done carrying a bag horizontally across a room? <i>Ans: zero on the bag — force is vertical, motion horizontal.</i></li>
              <li><b>Q3.</b> KE of 2 kg at 3 m/s? <i>Ans: 9 J.</i></li>
              <li><b>Q4.</b> PE of 5 kg raised 2 m (g = 10)? <i>Ans: 100 J.</i></li>
              <li><b>Q5.</b> Energy changes in a falling ball? <i>Ans: PE → KE (then heat and sound on landing).</i></li>
              <li><b>Q6.</b> Energy chain of a generator? <i>Ans: chemical → heat → kinetic → electrical.</i></li>
              <li><b>Q7.</b> Power of a machine doing 600 J in 2 s? <i>Ans: 300 W.</i></li>
              <li><b>Q8.</b> P = Fv: force 500 N at 12 m/s? <i>Ans: 6000 W = 6 kW.</i></li>
              <li><b>Q9.</b> 1 kWh in joules? <i>Ans: 3.6 × 10^6 J.</i></li>
              <li><b>Q10.</b> Why is efficiency always below 100%? <i>Ans: friction, heat and sound losses.</i></li>
              <li><b>Q11.</b> A 100 W bulb runs 10 h. Energy in kWh? <i>Ans: 1 kWh.</i></li>
              <li><b>Q12.</b> Why does doubling speed quadruple KE? <i>Ans: KE depends on v^2.</i></li>
              <li><b>Q13.</b> Give two renewable energy sources. <i>Ans: solar, wind, hydro, biomass, tidal.</i></li>
              <li><b>Q14.</b> A 300 W panel in 5 h of sun harvests how much energy? <i>Ans: 1.5 kWh.</i></li>
              <li><b>Q15.</b> 1 horsepower in watts? <i>Ans: about 746 W.</i></li>
              <li><b>Q16.</b> Sustainable human power output is roughly? <i>Ans: about 100 W.</i></li>
              <li><b>Q17.</b> Energy used by a 1500 W kettle in 2 h? <i>Ans: 3 kWh.</i></li>
              <li><b>Q18.</b> Cost of 3 kWh at ₦100/kWh? <i>Ans: ₦300.</i></li>
              <li><b>Q19.</b> Why is standby power called a thief? <i>Ans: small watts × 24 h × 30 days still becomes real kWh and real naira.</i></li>
            </ul>
            <div class="formula">SUMMARY: work W = F × d happens only when force displaces along its own line, and it is measured in joules like all energy; kinetic energy 1/2 mv^2 and potential energy mgh are the two mechanical accounts that conservation of energy freely transfers between each other while the total stays fixed; power = work ÷ time = F × v rates that transfer in watts, with the kilowatt-hour as the billing unit of energy (3.6 × 10^6 J); and efficiency = useful out ÷ total in × 100 records the tax that friction and heat collect from every real machine — always below 100%.</div>

`,
          cards: [
            { q: 'Define work and give its formula and unit.', a: 'Work is done when a force moves its point of application in the direction of the force: W = F x d, measured in joules (1 J = 1 N m).' },
            { q: 'Why is no work done when a man pushes a wall that does not move, or carries a load horizontally?', a: 'In the first case there is no displacement; in the second the force (upwards) is perpendicular to the motion (horizontal), so F x d in the direction of motion is zero.' },
            { q: 'Write the formulas for kinetic and potential energy.', a: 'Kinetic energy KE = (1/2)mv2; gravitational potential energy PE = mgh, both in joules.' },
            { q: 'How much work is done in lifting a 10 kg bag through 2 m? (g = 10 m/s2)', a: 'W = force x distance = mg x h = 100 x 2 = 200 J — the work done is stored as gravitational potential energy.' },
            { q: 'Define power and calculate the power of a motor that does 6000 J of work in 20 s.', a: 'Power is the rate of doing work: P = W/t, in watts. P = 6000/20 = 300 W. (For steady motion, P = Fv also.)' },
            { q: 'How is efficiency defined, and why is it always less than 100%?', a: 'Efficiency = (useful energy output / total energy input) x 100%; some input energy is always lost to friction and heat, so no machine converts all input to useful output.' },
            { q: 'A 2 kg body falls from 10 m. Find its kinetic energy just before hitting the ground (g = 10 m/s2).', a: 'By conservation of energy, KE = PE lost = mgh = 2 x 10 x 10 = 200 J (its speed would be v = sqrt(2gh) = about 14.1 m/s).' },
            { q: 'Define mechanical advantage, velocity ratio and their relation to efficiency.', a: 'MA = load / effort; VR = distance moved by effort / distance moved by load; efficiency = MA/VR x 100%.' },
            { q: 'Give the velocity ratio of: a single fixed pulley, a wheel and axle, and an inclined plane.', a: 'Single fixed pulley: VR = 1 (it only changes direction); wheel and axle: VR = radius of wheel / radius of axle; inclined plane: VR = 1/sin θ = length/height.' },
            { q: 'Describe the energy transformations in a torch and in a hydroelectric dam.', a: 'Torch: chemical energy (battery) -> electrical -> light + heat. Dam: potential energy of stored water -> kinetic -> electrical energy in the generator.' },
            { q: 'What energy changes occur in a swinging pendulum?', a: 'At the highest points, energy is all potential; at the lowest point, all kinetic — energy continuously converts between PE and KE (a little is lost to air resistance, so swings decay).' },
            { q: 'Why do machines such as levers and pulleys make work \'easier\' without doing less work?', a: 'They reduce the effort force needed by increasing the distance over which the effort acts (VR > 1); work input remains at least equal to work output because of friction losses.' },
            { q: 'K.E. and P.E. formulas?', a: 'K.E. = 1/2mv^2 and P.E. = mgh.' },
            { q: 'Give the formulas for work and power, with their units.', a: 'Work W = F x d (joules), where d is measured along the force. Power P = W/t (watts) - the rate of doing work, one joule per second.' },
            { q: 'State the principle of conservation of energy.', a: 'Energy cannot be created or destroyed, only transformed from one form to another. A falling ball trades potential energy for kinetic energy, but the total stays constant.' }
          ],
          quiz: [
            { q: 'Work is done when...', options: ['a force moves its point of application in the force’s direction', 'a force is applied without movement', 'energy disappears', 'a body is merely held still'], correct: 0,
              exp: 'W = F x d, and d must be along the force. Pushing a wall that never moves does no work.' },
            { q: 'What is the SI unit of work?', options: ['joule', 'newton', 'watt', 'pascal'], correct: 0,
              exp: 'One joule is the work done when 1 N moves through 1 m. Energy shares the same unit.' },
            { q: 'Power is defined as...', options: ['work done per unit time', 'force times distance', 'energy times time', 'mass times acceleration'], correct: 0,
              exp: 'P = W/t. Its unit is the watt: one joule per second.' },
            { q: 'The potential energy of a raised body is given by...', options: ['mgh', '1/2 mv^2', 'mv', 'Fd/t'], correct: 0,
              exp: 'P.E. = mass x gravity x height - energy stored by position above the ground.' },
            { q: 'The kinetic energy of a moving body is...', options: ['1/2 mv^2', 'mgh', 'mv', 'm/v'], correct: 0,
              exp: 'K.E. = half mass times velocity squared - it grows with the square of speed.' },
            { q: 'The principle of conservation of energy says energy...', options: ['can change form but cannot be created or destroyed', 'is always lost as heat', 'grows with use', 'exists only in machines'], correct: 0,
              exp: 'The total energy of a closed system is constant - it merely transforms from one form to another.' },
            { q: 'A machine does 200 J of work in 4 s. Its power is...', options: ['50 W', '800 W', '204 W', '196 W'], correct: 0,
              exp: 'P = W/t = 200/4 = 50 W.' },
            { q: 'Energy and work are both measured in...', options: ['joules', 'watts', 'newtons', 'kilograms'], correct: 0,
              exp: 'The joule is the unit of both - power (joules per second) is measured in watts.' },
            { q: 'How much work is done lifting a 10 kg mass through 2 m? (g = 10 m/s^2)', options: ['200 J', '20 J', '5 J', '120 J'], correct: 0,
              exp: 'W = mgh = 10 x 10 x 2 = 200 J - the work equals the potential energy gained.' },
            { q: 'A falling body converts its potential energy mainly into...', options: ['kinetic energy', 'chemical energy', 'sound only', 'more potential energy'], correct: 0,
              exp: 'As height drops, P.E. falls and K.E. rises - the classic conservation-of-energy exchange.' }
          ],
        },
        {
          title: 'Equilibrium of Forces & Moments',
          tags: ['Principle of moments', 'Centre of gravity', 'Levers'],
          summary: 'The conditions for a body to be in equilibrium and how the principle of moments solves beam problems.',
          content: `
            <h3>1. When forces balance: equilibrium</h3>
            <p>A body is in <b>equilibrium</b> when nothing about its motion changes — it stays still (or keeps cruising at constant velocity) because all the pushes and pulls on it cancel out. The <b>resultant</b> of all forces is zero, and the body neither accelerates nor starts turning.</p>
            <ul>
              <li><b>Resultant:</b> the single force that does what all the forces together do.</li>
              <li><b>Equilibrant:</b> the single force that balances the resultant — same size, opposite direction.</li>
              <li>Two conditions for full equilibrium: (1) forces balance in every direction (no acceleration); (2) moments balance about any point (no turning).</li>
              <li>Examples everywhere: a book on a desk (weight down = normal push up), a hanging sign, a lorry parked on level ground.</li>
            </ul>

            <h3>2. Moments: the turning effect of a force</h3>
            <ul>
              <li><b>Moment of a force = force × perpendicular distance from the pivot</b>, in newton-metres (N·m). Push a door near the hinge and you need much more force than at the handle — same door, different distance, different moment.</li>
              <li>Moments turn either <b>clockwise</b> or <b>anticlockwise</b>; in equilibrium the two directions must cancel.</li>
              <li><b>Principle of moments:</b> for a body in equilibrium, sum of clockwise moments about any point = sum of anticlockwise moments about that same point.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balanced beam on a pivot: 30 N at 0.4 m on the left balances 20 N at 0.6 m on the right, clockwise moment equals anticlockwise moment">
              <rect x="8" y="8" width="444" height="174" rx="10" fill="#ecfdf5" stroke="#065f46" stroke-width="2"/>
              <line x1="60" y1="90" x2="400" y2="90" stroke="#0f172a" stroke-width="5"/>
              <path d="M230 90 l-16 30 h32 z" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
              <rect x="104" y="62" width="26" height="26" fill="#dc2626"/><text x="106" y="56" font-size="10" font-weight="800" fill="#b91c1c">30 N</text>
              <rect x="322" y="66" width="22" height="22" fill="#2563eb"/><text x="322" y="60" font-size="10" font-weight="800" fill="#1d4ed8">20 N</text>
              <line x1="117" y1="98" x2="117" y2="120" stroke="#065f46" stroke-dasharray="4 3"/><line x1="230" y1="98" x2="230" y2="120" stroke="#065f46" stroke-dasharray="4 3"/><line x1="333" y1="98" x2="333" y2="120" stroke="#065f46" stroke-dasharray="4 3"/>
              <line x1="117" y1="118" x2="230" y2="118" stroke="#065f46" stroke-width="1.5"/><text x="140" y="132" font-size="9.5" font-weight="700" fill="#065f46">0.4 m</text>
              <line x1="230" y1="118" x2="333" y2="118" stroke="#065f46" stroke-width="1.5"/><text x="262" y="132" font-size="9.5" font-weight="700" fill="#065f46">0.6 m</text>
              <g font-size="9.5" font-weight="700" fill="#065f46">
                <text x="60" y="152">Anticlockwise: 30 × 0.4 = 12 N·m</text>
                <text x="60" y="168">Clockwise: 20 × 0.6 = 12 N·m — balanced.</text>
                <text x="290" y="152">Small force far from the pivot</text>
                <text x="290" y="168">beats big force near it.</text>
              </g>
            </svg></div>
            <div class="worked"><b>Worked example:</b> a see-saw: 30 N child sits 0.4 m left of the pivot. Where must a 20 N child sit on the right? 30 × 0.4 = 20 × d → d = 12 ÷ 20 = 0.6 m. The lighter child wins by sitting farther out — the whole secret of levers.</div>

            <h3>3. Centre of gravity: where the weight acts</h3>
            <ul>
              <li>The <b>centre of gravity (CG)</b> is the point where the whole weight of a body seems to act. For a uniform rule it is the middle; for a broom it is nearer the heavy head.</li>
              <li><b>Finding the CG of an irregular card:</b> hang it from three different holes, draw a plumb line from each; the three lines cross at the CG. Balance the card on a pencil tip at that point and it stays level.</li>
              <li>A body supported directly under its CG balances; support it elsewhere and it turns until the CG hangs below the support.</li>
            </ul>

            <h3>4. Stability: why some things refuse to fall</h3>
            <ul>
              <li><b>Stable equilibrium:</b> tilted slightly, the body returns (CG rises when tilted) — a cone on its base, a standing bottle.</li>
              <li><b>Unstable equilibrium:</b> tilted slightly, it falls further (CG falls when tilted) — a cone on its tip, a pencil on its point.</li>
              <li><b>Neutral equilibrium:</b> tilted, it simply stays put (CG neither rises nor falls) — a ball on a flat floor, a wheel rolling.</li>
              <li>Two design rules for stability: keep the CG LOW and the base WIDE. That is why buses carry luggage low, racing cars are built flat, and a loaded kebu survives corners that an empty one tips in.</li>
            </ul>
            <div class="formula">Watch out — TRAP: the unit of moment (N·m) looks like the unit of work (the joule) but they are DIFFERENT quantities — moment is a turning effect, work is energy. Never write &apos;J&apos; for a moment.</div>

            <h3>5. Levers and simple machines: moments at work</h3>
            <ul>
              <li>A lever is a moment machine: effort × effort-arm = load × load-arm when balanced. The mechanical advantage = load ÷ effort = effort-arm ÷ load-arm.</li>
              <li>A crowbar with effort-arm 1.2 m and load-arm 0.1 m multiplies your force 12 times — moments are why a child can move a boulder with the right bar.</li>
              <li>The same principle runs the beam balance (equal arms), the wheelbarrow (load between pivot and effort) and the bottle opener.</li>
              <li><b>Spanner wisdom:</b> a tight nut that defeats a short spanner yields to a longer one — same hand force, bigger distance, bigger moment. Mechanics carry long bars for exactly this theorem.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a wheelbarrow: load 300 N sits 0.4 m from the wheel (pivot); hands lift 1.2 m from the wheel. Effort × 1.2 = 300 × 0.4 → effort = 100 N. The wheelbarrow triples your strength.</div>
            <div class="worked"><b>Worked example (support forces):</b> a uniform 2 m plank weighing 100 N rests on two stools at its ends; each stool carries 50 N. Now a 60 N bag sits 0.5 m from the LEFT stool. Moments about the left end: right stool force × 2 = 100 × 1 + 60 × 0.5 → R = 65 N; left = 160 − 65 = 95 N. The nearer support always shoulders more.</div>

            <h3>6. Three or more forces: triangles and polygons of forces</h3>
            <ul>
              <li>When three forces hold a point in equilibrium, their arrows drawn tip-to-tail form a CLOSED triangle; more forces close into a polygon. If the shape does not close, the leftover side is the resultant.</li>
              <li>Classic case: a picture hung by two cords — the tensions and the weight close into a triangle.</li>
              <li>Lami&apos;s theorem handles three forces at a point: each force is proportional to the sine of the angle between the other two.</li>
            </ul>

            <h3>7. Couples: two forces that only turn</h3>
            <ul>
              <li>A <b>couple</b> is a pair of equal, opposite, parallel forces acting along different lines — together they produce pure turning with no push in any direction.</li>
              <li><b>Moment of a couple = one force × distance between the two lines.</b> Turning a steering wheel, twisting a tap, screwing a bottle cap: both hands apply a couple.</li>
              <li>Hands 0.3 m apart each pushing 10 N on a wheel give a couple moment of 10 × 0.3 = 3 N·m of pure rotation.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a mechanic applies a couple of 25 N at each end of a 0.4 m wheel spanner grip. Moment = 25 × 0.4 = 10 N·m — the nut feels exactly that turning effect, whichever way the spanner points.</div>

            <h3>8. Balances and the faulty-balance trick</h3>
            <ul>
              <li>A beam balance compares moments: equal arms mean equal masses balance. The rider and the adjustment nuts exist to zero the beam before use.</li>
              <li><b>Faulty balance problem:</b> if the arms differ, true mass = the geometric mean of the two apparent masses (weigh left, weigh right). Exams love the simpler case: arms 0.4 m and 0.5 m with a 100 g standard in the long arm balancing goods in the short: goods = 100 × 0.5 ÷ 0.4 = 125 g.</li>
              <li>This is the principle of moments wearing a market uniform — a trader&apos;s scale is a lever, and a bent scale is a lie.</li>
            </ul>

            <h3>9. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define the moment of a force. <i>Ans: force × perpendicular distance from the pivot.</i></li>
              <li><b>Q2.</b> Unit of moment? <i>Ans: newton-metre (N·m).</i></li>
              <li><b>Q3.</b> State the principle of moments. <i>Ans: clockwise moments = anticlockwise moments about the same point in equilibrium.</i></li>
              <li><b>Q4.</b> 40 N at 0.5 m from a pivot: moment? <i>Ans: 20 N·m.</i></li>
              <li><b>Q5.</b> A 60 N load 0.3 m left balances effort E 0.9 m right. E? <i>Ans: E = 18 ÷ 0.9 = 20 N.</i></li>
              <li><b>Q6.</b> Where is the CG of a uniform metre rule? <i>Ans: at the 50 cm mark.</i></li>
              <li><b>Q7.</b> How to find the CG of an irregular lamina? <i>Ans: hang from three points, draw plumb lines; they cross at the CG.</i></li>
              <li><b>Q8.</b> Name the three kinds of equilibrium. <i>Ans: stable, unstable, neutral.</i></li>
              <li><b>Q9.</b> Two ways to increase stability? <i>Ans: lower the CG, widen the base.</i></li>
              <li><b>Q10.</b> Why does a door handle sit far from the hinge? <i>Ans: bigger distance means bigger moment for the same force — easier to turn.</i></li>
              <li><b>Q11.</b> MA of a lever with effort-arm 1.2 m, load-arm 0.1 m? <i>Ans: 12.</i></li>
              <li><b>Q12.</b> Three forces in equilibrium drawn tip-to-tail form what? <i>Ans: a closed triangle.</i></li>
              <li><b>Q13.</b> What is a couple? <i>Ans: two equal, opposite, parallel forces producing pure turning.</i></li>
              <li><b>Q14.</b> Moment of a couple of 10 N with lines 0.3 m apart? <i>Ans: 3 N·m.</i></li>
              <li><b>Q15.</b> Faulty balance: arms 0.4 m and 0.5 m, 100 g on the long arm balances goods on the short. Goods? <i>Ans: 125 g.</i></li>
              <li><b>Q16.</b> Why does a standing bottle right itself when tilted slightly? <i>Ans: stable equilibrium — its CG rises when tilted and falls back over the base.</i></li>
              <li><b>Q17.</b> Why does a longer spanner loosen tight nuts more easily? <i>Ans: same force at a greater distance gives a greater moment.</i></li>
              <li><b>Q18.</b> Uniform 100 N plank on two end stools; 60 N bag 0.5 m from the left of the 2 m plank. Left stool force? <i>Ans: 95 N.</i></li>
            </ul>
            <div class="formula">SUMMARY: equilibrium demands that forces cancel (zero resultant) AND that moments cancel (no turning); a moment is force × perpendicular distance in N·m, clockwise against anticlockwise under the principle of moments; the centre of gravity is where the weight acts, found on laminae by crossing plumb lines; stability grows as the CG drops and the base widens, explaining low-slung buses and racing cars; levers, wheelbarrows and balances are all moment machines with MA = effort-arm ÷ load-arm; and three balanced forces always close into a triangle — geometry policing physics.</div>

`,
          cards: [
            { q: 'State the principle of moments.', a: 'For a body in rotational equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments about that point.' },
            { q: 'Define the moment of a force and give its unit.', a: 'Moment = force x perpendicular distance from the pivot (turning effect), measured in newton metres (N m).' },
            { q: 'State the two conditions for a body to be in equilibrium.', a: 'The vector sum of all forces on it must be zero (no translation) and the sum of moments about any point must be zero (no rotation).' },
            { q: 'A uniform metre rule balances with a 2 N weight at the 20 cm mark and a 3 N weight at the 80 cm mark. Where is the pivot?', a: 'Taking moments about the pivot: 2 x d1 = 3 x d2 with d1 + d2 = 60 cm, so d1 = 36 cm — the pivot is at the 56 cm mark.' },
            { q: 'What is the centre of gravity of a body?', a: 'The point through which the weight of the body acts whatever its orientation — for a uniform regular body it is at the geometric centre.' },
            { q: 'State two ways to increase the stability of an object.', a: 'Lower its centre of gravity and increase the area of its base — this is why racing cars are low with wide tyres and why a cone is stable.' },
            { q: 'Distinguish between stable, unstable and neutral equilibrium.', a: 'Stable: a small displacement raises the C.G. and the body returns (a cone on its base). Unstable: the C.G. falls and it topples (a cone on its tip). Neutral: the C.G. stays level and it stays put (a ball on a flat surface).' },
            { q: 'What is a couple? Give an example.', a: 'Two equal, opposite and parallel forces whose lines of action differ — they produce pure rotation with no translation, e.g. turning a tap, a steering wheel or loosening a nut with two fingers; moment of a couple = one force x distance between them.' },
            { q: 'How do you locate the centre of gravity of an irregular lamina?', a: 'Suspend it freely from a point, hang a plumb line and mark the vertical; repeat from another point — the C.G. is where the lines cross.' },
            { q: 'A uniform beam 4 m long weighing 200 N rests on two supports at its ends. A 100 N load sits 1 m from the left support. Find the reaction at the right support.', a: 'Moments about the left end: R2 x 4 = 200 x 2 + 100 x 1 = 500, so R2 = 125 N (and R1 = 175 N).' },
            { q: 'Name the three classes of lever with one example each.', a: 'First class: pivot between load and effort — scissors, crowbar. Second class: load between — wheelbarrow, nutcracker. Third class: effort between — tweezers, the human forearm.' },
            { q: 'Why is it easier to open a door by pushing at the handle than near the hinge?', a: 'Moment = force x distance from the pivot; the handle is farthest from the hinge, so the same force gives a larger turning effect — less effort is needed.' },
            { q: 'State the two conditions for equilibrium.', a: 'First: the resultant force in every direction is zero (the body does not slide). Second: the resultant moment about any point is zero (the body does not turn).' },
            { q: 'Define the moment of a force and state the principle of moments.', a: 'Moment = force x perpendicular distance from the pivot, in N m. The principle of moments: for a body in equilibrium, total clockwise moments = total anticlockwise moments.' },
            { q: 'Explain centre of gravity and its link to stability.', a: 'The centre of gravity is the point where the whole weight appears to act. A body is stable when a vertical line from its C.G. falls inside its base - low C.G. plus wide base means maximum stability.' }
          ],
          quiz: [
            { q: 'A body is in equilibrium when...', options: ['the resultant force AND the resultant moment are both zero', 'only the resultant force is zero', 'only the resultant moment is zero', 'it is at rest only'], correct: 0,
              exp: 'Both conditions are needed: no net force (no sliding) and no net moment (no turning).' },
            { q: 'The moment of a force equals...', options: ['force x perpendicular distance from the pivot', 'force x mass', 'force / distance', 'force + distance'], correct: 0,
              exp: 'Moment = F x d, where d is the PERPENDICULAR distance from the pivot to the line of the force.' },
            { q: 'What is the unit of a moment?', options: ['N m', 'N/m', 'J/s', 'kg m'], correct: 0,
              exp: 'Newton-metre. (Same dimensions as a joule, but a moment is a turning effect, not energy.)' },
            { q: 'The principle of moments states that in equilibrium...', options: ['total clockwise moments equal total anticlockwise moments', 'all moments are zero individually', 'clockwise moments are larger', 'moments always cancel gravity'], correct: 0,
              exp: 'For a balanced body, the turning effects in each direction must be equal and opposite.' },
            { q: 'The centre of gravity of a body is the point where...', options: ['its whole weight appears to act', 'its mass disappears', 'it can never balance', 'friction acts'], correct: 0,
              exp: 'Every particle’s weight combines as if concentrated at that single point.' },
            { q: 'Stability is increased by...', options: ['lowering the centre of gravity and widening the base', 'raising the centre of gravity', 'narrowing the base', 'reducing the mass only'], correct: 0,
              exp: 'Racing cars are low and wide for exactly this reason - a low C.G. on a wide base is hard to topple.' },
            { q: 'A cone balanced on its tip is in...', options: ['unstable equilibrium', 'stable equilibrium', 'neutral equilibrium', 'dynamic equilibrium'], correct: 0,
              exp: 'The slightest tilt lowers its centre of gravity further, so it topples - unstable equilibrium.' },
            { q: 'A 20 N weight 2 m from a pivot balances a 10 N weight placed...', options: ['4 m from the pivot on the other side', '2 m from the pivot', '1 m from the pivot', '20 m from the pivot'], correct: 0,
              exp: 'Clockwise = anticlockwise: 20 x 2 = 10 x d, so d = 4 m.' },
            { q: 'A ball resting on smooth level ground is in...', options: ['neutral equilibrium', 'stable equilibrium', 'unstable equilibrium', 'unstable motion'], correct: 0,
              exp: 'Roll it and its centre of gravity stays at the same height - neither returns nor falls away: neutral.' },
            { q: 'Why does a see-saw balance when equal children sit equal distances from the middle?', options: ['Their clockwise and anticlockwise moments are equal', 'Their masses cancel gravity', 'The plank has no weight', 'Friction holds them'], correct: 0,
              exp: 'Equal force x equal distance on each side gives equal moments in opposite directions - equilibrium.' }
          ],
        }
      ],
      SS2: [
        {
          title: 'Centripetal Force & Circular Motion',
          tags: ['Centripetal acceleration', 'Banked roads', 'ω'],
          summary: 'The inward force that keeps a body moving in a circle.',
          content: `
            <h3>Why a force is needed</h3>
            <p>A body moving in a circle is constantly changing <b>direction</b>, so its velocity is changing, so it is accelerating. The acceleration points towards the centre and is called <b>centripetal acceleration</b>. The force that produces it is the <b>centripetal force</b>.</p>
            <div class="formula">a = v^2/r = ω^2r<br>F = mv^2/r = mω^2r<br>v = ωr,  ω = 2π/T = 2πf</div>
            <h3>Where the centripetal force comes from</h3>
            <ul><li><b>Satellite / planet:</b> gravitational attraction.</li>
            <li><b>Car on a flat curve:</b> friction between tyres and road.</li>
            <li><b>Stone on a string:</b> tension in the string.</li>
            <li><b>Electron round a nucleus:</b> electrostatic attraction.</li></ul>
            <div class="worked"><b>Worked example:</b> A 0.5 kg stone on a 2 m string moves at 4 m/s. F = mv^2/r = 0.5 × 16 / 2 = <b>4 N</b>. If the string breaks the stone flies off <b>tangentially</b> — not radially.</div>
            <div class="tip"><b>Exam tip:</b> "Centrifugal force" is not a real force in an inertial frame; it is the reaction/inertia effect felt by the passenger. In JAMB, the correct answer is always centripetal.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> A 1200 kg car rounds a curve of radius 50 m at 15 m/s. Find the centripetal force and name what provides it.<br>
            F = mv^2/r = 1200 × 225 / 50 = <b>5400 N</b>, supplied by <b>friction</b> between the tyres and the road. On a wet road friction falls, so the same corner must be taken more slowly.</div>
            <div class="worked"><b>Q2.</b> A satellite orbits 7000 km from the Earth's centre with a period of 96 minutes. Find its speed.<br>
            Circumference = 2πr = 2 × 22/7 × 7×10^6 = 4.4 × 10^7 m, and T = 5760 s.<br>
            v = 4.4×10^7 / 5760 ~= <b>7640 m/s</b>.</div>
            <div class="worked"><b>Q3.</b> A 0.2 kg mass on a 0.5 m string breaks at 40 N of tension. What is the greatest speed in a horizontal circle?<br>
            v^2 = Fr/m = 40 × 0.5 / 0.2 = 100, so v = <b>10 m/s</b>.</div>
            <div class="worked"><b>Q4.</b> Why are racing circuits and railway tracks banked?<br>
            Banking lets a component of the normal reaction supply part of the centripetal force, so less friction is needed and higher speeds are safe.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying the body flies <b>outwards</b> when the string breaks. It moves in a straight line <b>tangential</b> to the circle.</li>
              <li>Mixing centimetres with m/s. Convert everything to SI units first.</li>
              <li>Treating centripetal force as a new "kind" of force — it is simply the <b>net inward force</b>, whatever supplies it.</li>
              <li>Forgetting ω = 2π/T when the question gives a period rather than a speed.</li>
            </ul>
            <h3>Deep dive: couples, balance and stability</h3>
            <p>Two equal, opposite, parallel forces that do not share a line of action form a <b>couple</b> — it turns a body without translating it. Turning a steering wheel or a tap uses a couple; its moment is force × distance between the forces. Equilibrium needs <i>both</i> conditions: forces balance (no sliding) and moments balance (no turning).</p>
            <p>Stability explains why a loaded trailer topples more easily when the cargo is stacked high: the higher the centre of gravity and the narrower the base, the easier a tilt moves the vertical line from the C.G. outside the base — and once that line leaves the base, the body <i>must</i> topple. Racing cars and Danfo buses that "carry load for roof" teach this law the hard way.</p>
            <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <line x1="20" y1="80" x2="300" y2="80" stroke="#475569" stroke-width="4"/>
              <polygon points="160,80 145,120 175,120" fill="#94a3b8"/>
              <line x1="60" y1="80" x2="60" y2="30" stroke="#4f46e5" stroke-width="2"/>
              <text x="40" y="24" font-size="11" fill="#4f46e5">20 N, 2 m</text>
              <line x1="260" y1="80" x2="260" y2="40" stroke="#059669" stroke-width="2"/>
              <text x="240" y="34" font-size="11" fill="#059669">10 N, 4 m</text>
              <text x="130" y="140" font-size="11" fill="#64748b">pivot</text>
              <text x="60" y="70" font-size="10" fill="#475569">20×2 = 40 N m</text>
              <text x="215" y="70" font-size="10" fill="#475569">10×4 = 40 N m</text>
            </svg></div>
            <h3>Worked example, step by step</h3>
            <p><b>A uniform metre rule balances at the 50 cm mark. A 20 N weight hangs at 10 cm. Where must 10 N hang to balance it?</b></p>
            <ol>
              <li>Distance of 20 N from pivot = 50 - 10 = 40 cm; anticlockwise moment = 20 × 40 = 800 N cm.</li>
              <li>Let the 10 N hang at distance d on the other side: 10d = 800 → d = 80 cm — impossible, the rule is only 50 cm long on that side! So the 10 N can never balance the 20 N at 10 cm on a metre rule — a lovely "think first" twist examiners use.</li>
              <li>Sensible variant: with 10 N at the 100 cm end (d = 50), it gives 500 N cm &lt; 800, so the rule tips toward the 20 N side.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Measuring distances from the <i>end</i> of the rule instead of from the pivot.</li>
              <li>Forgetting the weight of a <i>non-uniform</i> rule acting at its own centre of gravity.</li>
              <li>Applying the principle of moments to a body that is accelerating — it only holds in equilibrium.</li>
            </ul>

            <h3>Deep dive: why the force points inward</h3>
            <p>Velocity is a vector, so even at constant <i>speed</i> a body on a circle is always changing velocity — the direction rotates. That change is an acceleration aimed at the centre, a = v^2/r, and Newton's second law demands a centre-seeking force F = mv^2/r. There is no mysterious outward "centrifugal force" pushing the passenger sideways in a turning car: the passenger's body simply tries to go straight (first law) while the car turns inward around it.</p>
            <p>Useful companions: angular velocity ω = 2π/T (radians per second) and v = ωr. Engineers <b>bank</b> curved roads — tilt the outer edge up — so that part of the normal reaction supplies the centripetal force, reducing reliance on friction on rainy days.</p>
            <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="160" cy="75" r="55" fill="none" stroke="#94a3b8" stroke-width="2"/>
              <circle cx="215" cy="75" r="6" fill="#4f46e5"/>
              <line x1="215" y1="75" x2="215" y2="25" stroke="#059669" stroke-width="2.5"/>
              <text x="222" y="30" font-size="11" fill="#059669">v (tangent)</text>
              <line x1="215" y1="75" x2="165" y2="75" stroke="#dc2626" stroke-width="2.5"/>
              <text x="150" y="95" font-size="11" fill="#dc2626">F = mv^2/r (inward)</text>
            </svg></div>
            <h3>Worked example, step by step</h3>
            <p><b>A 0.5 kg stone is whirled in a horizontal circle of radius 1 m at 2 m/s. Find the tension in the string.</b></p>
            <ol>
              <li>F = mv^2/r = 0.5 × 2^2 ÷ 1 = 2 N.</li>
              <li>Double the speed to 4 m/s: F = 0.5 × 16 = 8 N — four times bigger, because force scales with v^2. This is why speeding around a bend quadruples the grip your tyres must supply.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Drawing "centrifugal force" on the body as if it were real.</li>
              <li>Substituting diameter where the formula wants radius.</li>
              <li>Saying the satellite needs fuel to keep orbiting — gravity supplies the centripetal force for free.</li>
            </ul>

          `,
          cards: [
            { q: 'What is centripetal force? Write its formula.', a: 'The inward force that keeps a body moving in a circle: F = mv2/r (also F = m ω2 r), directed towards the centre of the circular path.' },
            { q: 'Why is a body in uniform circular motion said to be accelerating even at constant speed?', a: 'Because velocity includes direction, and the direction changes continuously — the acceleration (v2/r) always points towards the centre.' },
            { q: 'Name the source of centripetal force in each case: (a) a stone whirled on a string, (b) a car rounding a bend, (c) a planet orbiting the Sun.', a: '(a) Tension in the string; (b) friction between tyres and road; (c) gravitational attraction.' },
            { q: 'Define angular velocity and relate it to linear velocity.', a: 'Angular velocity ω is the angle swept per second (rad/s); the linear speed v = r ω, so points farther from the centre move faster.' },
            { q: 'What happens if the string of a whirling stone suddenly breaks?', a: 'The centripetal force vanishes, so the stone flies off tangentially at the point of release — along the direction it was moving at that instant.' },
            { q: 'Why are roads banked at curves?', a: 'Banking tilts the road so part of the normal reaction supplies the centripetal force, reducing reliance on friction and allowing higher safe speeds without skidding.' },
            { q: 'Why do satellites stay in orbit without engines?', a: 'Gravity supplies exactly the centripetal force needed for their curved path — they are in continuous free fall around the Earth, so no fuel is needed to maintain orbit.' },
            { q: 'A 0.5 kg stone is whirled in a horizontal circle of radius 2 m at 4 m/s. Find the tension in the string.', a: 'T = mv2/r = 0.5 x 16 / 2 = 4 N (this tension is the centripetal force).' },
            { q: 'Why does a centrifuge separate components of blood, and a spin-dryer remove water from clothes?', a: 'Denser particles need more centripetal force than the liquid can supply, so they move outward and settle at the bottom (red cells under plasma); in a dryer, water escapes through drum holes because nothing supplies it with centripetal force to keep circling.' },
            { q: 'Relate period, frequency and speed for circular motion.', a: 'Period T is the time for one revolution, frequency f = 1/T, and speed v = 2πr/T = 2πrf.' },
            { q: 'Why do passengers feel pushed outward when a bus turns sharply?', a: 'Inertia — their bodies tend to continue in a straight line while the bus curves; the \'outward push\' is not a real force but the effect of their own inertia (often called centrifugal effect).' },
            { q: 'If the speed of a car round a bend doubles, how much more friction (centripetal force) is needed?', a: 'Four times as much — F = mv2/r, so force is proportional to the square of the speed; this is why even small speed increases cause skidding on curves.' },
            { q: 'Formula for centripetal force?', a: 'F = mv^2/r = mω^2r, always directed towards the centre of the circle.' },
            { q: 'What is centripetal force? Give three sources of it.', a: 'The inward force that keeps a body moving in a circle. Sources: tension (stone on a string), friction (car rounding a bend), gravity (satellite orbiting Earth), and the normal reaction (roller-coaster loop).' },
            { q: 'Why does circular motion need a force even at constant speed?', a: 'Velocity includes direction, and in a circle the direction changes every instant. A changing velocity means acceleration, and by Newton’s second law acceleration requires a net force - pointing to the centre.' }
          ],
          quiz: [
            { q: 'In uniform circular motion, the centripetal force acts...', options: ['towards the centre of the circle', 'away from the centre', 'along the direction of motion', 'straight upwards'], correct: 0,
              exp: 'Centripetal means "centre-seeking" - it constantly pulls the body inwards, bending its path into a circle.' },
            { q: 'The formula for centripetal force is...', options: ['mv^2/r', 'mr/v^2', 'mvr', 'v^2r/m'], correct: 0,
              exp: 'F = mv^2/r - bigger mass or speed demands more force; a wider circle needs less.' },
            { q: 'For a car turning on a flat road, the centripetal force is provided by...', options: ['friction between tyres and road', 'gravity', 'the engine', 'air resistance'], correct: 0,
              exp: 'Tyre-road friction supplies the inward pull - which is why oily or icy roads make skidding likely.' },
            { q: 'For a satellite orbiting the Earth, the centripetal force is...', options: ['gravity', 'friction', 'engine thrust', 'magnetism'], correct: 0,
              exp: 'The Earth’s gravitational pull is the invisible string that keeps the satellite curving round.' },
            { q: 'For a stone whirled on a string, the centripetal force is the...', options: ['tension in the string', 'weight of the stone', 'friction of air', 'stone’s inertia'], correct: 0,
              exp: 'The string pulls the stone inwards; that tension is the centripetal force.' },
            { q: 'If the string snaps while a stone is being whirled, the stone flies off...', options: ['tangentially to the circle', 'towards the centre', 'straight up', 'backwards along the radius'], correct: 0,
              exp: 'With no inward force left, the stone continues in a straight line along the tangent - Newton’s first law.' },
            { q: 'If the speed of a body in circular motion is doubled, the centripetal force needed becomes...', options: ['four times larger', 'twice as large', 'half as large', 'unchanged'], correct: 0,
              exp: 'F = mv^2/r depends on the SQUARE of speed: 2^2 = 4 times the force.' },
            { q: 'Increasing the radius of the circle (speed constant) makes the required centripetal force...', options: ['smaller', 'larger', 'unchanged', 'zero'], correct: 0,
              exp: 'The radius sits in the denominator: F = mv^2/r, so a wider curve needs less inward force.' },
            { q: 'Centripetal force is measured in...', options: ['newtons', 'joules', 'watts', 'pascals'], correct: 0,
              exp: 'It is a force, so its unit is the newton (kg m/s^2).' },
            { q: 'The centripetal acceleration of a body moving at speed v in a circle of radius r is...', options: ['v^2/r', 'mv^2/r', 'v/r^2', 'vr'], correct: 0,
              exp: 'a = v^2/r, directed towards the centre. Multiply by m to get the force F = mv^2/r.' }
          ],
        },
        {
          title: 'Heat Energy & Thermal Expansion',
          tags: ['Specific heat capacity', 'Latent heat', 'Linear expansion'],
          summary: 'Specific heat capacity, latent heat and the three modes of heat transfer.',
          content: `
            <h3>1. Heat and temperature: not the same thing</h3>
            <p><b>Heat</b> is energy in transit — it flows from a hot body to a cold one and is measured in <b>joules</b>. <b>Temperature</b> is how hot or cold a body is — a measure of the average kick of its molecules — measured in degrees Celsius or kelvin. A cup of boiling water and a swimming pool of warm water: the pool holds more heat, the cup has the higher temperature. That sentence alone answers a shocking number of exam questions.</p>
            <ul>
              <li>Thermometers use a thermometric property that changes with temperature: mercury or alcohol expanding, resistance changing, a thermocouple voltage.</li>
              <li>Scales: water freezes at 0 °C / 273 K and boils at 100 °C / 373 K. <b>K = °C + 273.</b></li>
              <li>Body temperature ≈ 37 °C = 310 K; room temperature ≈ 27 °C = 300 K — examiners adore 27 °C and 300 K. Absolute zero, 0 K (−273 °C), is the coldest possible: molecular motion at its minimum.</li>
            </ul>
            <div class="formula">Watch out — TRAP: heat is ENERGY (joules); temperature is a READING (°C or K). &apos;The heat of the water is 60 °C&apos; is wrong English in physics — the temperature is 60 °C.</div>

            <h3>2. Thermal expansion: things grow when heated</h3>
            <ul>
              <li><b>Solids:</b> the ball-and-ring experiment — a heated ball stops passing through its ring until it cools. Railway lines get expansion gaps; bridges sit on rollers; overhead cables are hung slack so winter contraction cannot snap them.</li>
              <li><b>Bimetallic strip:</b> brass expands more than iron, so a bonded strip bends when heated — the heart of thermostats and fire alarms.</li>
              <li><b>Liquids:</b> expand more than solids — which is exactly how thermometer bulbs work. Heat a full flask and it first dips (glass expands first) then rises (liquid catches up) — a classic trick question.</li>
              <li><b>Gases:</b> expand most of all — a balloon on a warmed flask inflates; a soft ball firms up in hot sun.</li>
              <li><b>Water&apos;s anomaly:</b> between 0 °C and 4 °C water CONTRACTS on heating; at 4 °C it is densest. That is why lakes freeze top-down and fish survive below the ice.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ball and ring experiment: cold ball passes through the ring, heated ball is too big and rests on top of the ring">
              <rect x="8" y="8" width="444" height="174" rx="10" fill="#fff1f2" stroke="#9f1239" stroke-width="2"/>
              <circle cx="110" cy="80" r="34" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
              <line x1="110" y1="114" x2="110" y2="160" stroke="#334155" stroke-width="4"/>
              <ellipse cx="200" cy="90" rx="14" ry="40" fill="none" stroke="#9f1239" stroke-width="5"/>
              <path d="M150 80 h20 m-6 -6 l6 6 -6 6" stroke="#16a34a" stroke-width="3" fill="none"/>
              <text x="70" y="30" font-size="10" font-weight="800" fill="#9f1239">COLD: passes through</text>
              <circle cx="330" cy="52" r="44" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
              <line x1="330" y1="96" x2="330" y2="160" stroke="#92400e" stroke-width="4"/>
              <ellipse cx="330" cy="118" rx="14" ry="40" fill="none" stroke="#9f1239" stroke-width="5"/>
              <text x="270" y="170" font-size="10" font-weight="800" fill="#9f1239">HEATED: too big — it rests on the ring</text>
              <g font-size="9.5" fill="#881337" font-weight="700">
                <text x="24" y="176">Heat makes particles vibrate wider — the solid takes more room.</text>
              </g>
            </svg></div>

            <h3>3. Heat transfer: conduction, convection, radiation</h3>
            <table>
              <tr><th>Mode</th><th>How</th><th>Everyday proof</th></tr>
              <tr><td>Conduction</td><td>vibrating particles hand energy along; needs matter</td><td>metal spoon in soup gets hot; metals conduct best, air worst</td></tr>
              <tr><td>Convection</td><td>heated fluid rises, cold sinks — currents</td><td>boiling pot swirls; sea breeze by day, land breeze by night</td></tr>
              <tr><td>Radiation</td><td>infrared waves; needs NO medium; crosses a vacuum</td><td>sun&apos;s heat reaches Earth; dull black surfaces absorb, shiny ones reflect</td></tr>
            </table>
            <ul>
              <li><b>Insulators exploit trapped air or vacuum:</b> wool, foam, the vacuum flask&apos;s silvered double wall (vacuum kills conduction and convection; silvering kills radiation).</li>
              <li><b>Conductors exploited:</b> cooking pots (copper/aluminium bottoms), heat sinks on electronics, soldering irons with copper bits.</li>
              <li>White clothes in the sun, black radiators in the room — surface colour and texture decide radiation behaviour.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> why does a metal bench feel colder than a wooden one at the same temperature? Both are equally warm — but metal conducts heat out of your skin fast while wood does not. Feeling cold is feeling your own heat leaving — comfort is conductivity, honestly said.</div>

            <h3>4. Heat quantities: c and L</h3>
            <ul>
              <li><b>Specific heat capacity c:</b> energy to raise 1 kg by 1 K (J/kg·K). Water&apos;s is huge (4200) — which is why coasts stay mild and engines are water-cooled.</li>
              <li><b>Q = m c Δθ.</b> Heat 2 kg of water from 30 °C to 80 °C: Q = 2 × 4200 × 50 = 420,000 J.</li>
              <li><b>Specific latent heat L:</b> energy to change 1 kg&apos;s state at constant temperature. <b>Q = m L.</b> Melting ice L ≈ 336,000 J/kg; boiling water L ≈ 2,260,000 J/kg — boiling away a kettle takes far more energy than heating it up.</li>
              <li><b>Evaporation vs boiling:</b> evaporation happens at any temperature, from the surface, slowly; boiling happens at one temperature, throughout, with bubbles. Evaporation cools — sweating, water in clay pots, dogs panting.</li>
            </ul>
            <div class="formula">Watch out — TRAP: during melting or boiling the temperature STAYS FLAT while energy pours in — the energy goes into breaking bonds (latent), not raising temperature. A flat section on a heating graph is a change of state.</div>

            <h3>5. Gas behaviour preview: pressure, volume, temperature</h3>
            <ul>
              <li>Heat a sealed gas and its pressure rises (molecules kick harder); let it expand and it cools. The gas laws (Boyle, Charles, pressure) tie P, V and T together — full treatment lives with the chemists&apos; gas laws, but know the shapes: at constant temperature, doubling pressure halves volume.</li>
              <li>Aerosol cans carry &apos;do not burn&apos; warnings because heat drives the pressure up until metal surrenders. The same physics is why a parked car&apos;s tyres read higher pressure after a long drive.</li>
            </ul>

            <h3>6. Expansion at work: tricks craftsmen use</h3>
            <ul>
              <li><b>Wheel rims:</b> a metal tyre is made slightly smaller than the wheel, heated to expand, slipped on, then cooled to grip like a vice — contraction doing the clamping.</li>
              <li><b>Rivets:</b> put in hot, and as they cool they pull two plates together tighter than any bolt.</li>
              <li><b>Tight jar lids:</b> hot water on the lid expands the metal more than the glass — the stubborn jar surrenders.</li>
              <li><b>Cracked glass:</b> pouring boiling water into a thick tumbler cracks it because the inside expands before the outside knows — glass is a poor conductor. Pyrex survives by conducting better and expanding less.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> two rivers of air: by day the land heats faster than the sea; warm air over the land rises and cool sea air flows in — sea breeze. At night the land cools faster and the wind reverses — land breeze. Fishermen sail out at dawn on the land breeze and home in the afternoon on the sea breeze; convection has been funding that economy for centuries.</div>

            <h3>7. Thermometers compared</h3>
            <ul>
              <li><b>Clinical thermometer:</b> narrow range (35–43 °C) with a constriction that stops the mercury falling before you read it — you shake it down between patients.</li>
              <li><b>Laboratory thermometer:</b> wider range (−10 to 110 °C), no constriction, read while still in the substance.</li>
              <li><b>Six&apos;s thermometer:</b> records the day&apos;s maximum and minimum using alcohol, mercury and two bulbs.</li>
              <li>Mercury suits high temperatures (boils at 357 °C); alcohol suits very cold climates (freezes at −115 °C) — choose the liquid to match the weather.</li>
            </ul>

            <h3>8. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Distinguish heat from temperature. <i>Ans: heat is energy in joules; temperature is the hotness reading in °C or K.</i></li>
              <li><b>Q2.</b> Convert 37 °C to kelvin. <i>Ans: 310 K.</i></li>
              <li><b>Q3.</b> Why do railway lines have gaps? <i>Ans: room for thermal expansion in hot weather.</i></li>
              <li><b>Q4.</b> Device that uses a bimetallic strip? <i>Ans: thermostat (or fire alarm).</i></li>
              <li><b>Q5.</b> At what temperature is water densest? <i>Ans: 4 °C.</i></li>
              <li><b>Q6.</b> Which state expands most on heating? <i>Ans: gases.</i></li>
              <li><b>Q7.</b> How does the Sun&apos;s heat reach us? <i>Ans: radiation — conduction and convection need a medium.</i></li>
              <li><b>Q8.</b> Why does a vacuum flask keep tea hot? <i>Ans: vacuum stops conduction/convection; silvered walls stop radiation.</i></li>
              <li><b>Q9.</b> Q to heat 0.5 kg of water by 10 K (c = 4200)? <i>Ans: 21,000 J.</i></li>
              <li><b>Q10.</b> Energy to melt 2 kg of ice (L = 336,000)? <i>Ans: 672,000 J.</i></li>
              <li><b>Q11.</b> Two differences between evaporation and boiling. <i>Ans: surface vs throughout; any temperature vs fixed; slow vs rapid.</i></li>
              <li><b>Q12.</b> Why does sweating cool you? <i>Ans: the fastest molecules escape as vapour, taking latent heat from the skin.</i></li>
              <li><b>Q13.</b> Why does a metal bench feel colder than wood at the same temperature? <i>Ans: metal conducts heat away from your skin faster.</i></li>
              <li><b>Q14.</b> Why does hot water crack a thick tumbler? <i>Ans: glass conducts poorly — the inside expands before the outside, and the strain splits it.</i></li>
              <li><b>Q15.</b> How is a hot metal tyre fitted to a wheel? <i>Ans: heat to expand, fit, cool to contract and grip.</i></li>
              <li><b>Q16.</b> What causes a sea breeze? <i>Ans: convection — land heats faster by day, warm air rises, cool sea air flows in.</i></li>
              <li><b>Q17.</b> Why does a clinical thermometer have a constriction? <i>Ans: to stop the mercury falling before it is read.</i></li>
            </ul>
            <div class="formula">SUMMARY: heat is energy in transit (joules) while temperature is the reading (K = °C + 273); heating expands solids, liquids and gases most in that order, explaining rail gaps, slack cables, thermostats and the ball-and-ring trick, with water anomalously densest at 4 °C; heat travels by conduction through matter, convection through fluid currents and radiation across vacuum; heat quantities obey Q = mcΔθ for temperature change and Q = mL for state change, where temperature stands still; and evaporation&apos; surface escape is nature&apos;s refrigerator — the physics of sweat, clay pots and panting dogs.</div>

`,
          cards: [
            { q: 'Distinguish between heat and temperature.', a: 'Heat is energy transferred because of a temperature difference (measured in joules); temperature is the degree of hotness of a body (measured in kelvin or degrees Celsius with a thermometer).' },
            { q: 'Describe conduction, convection and radiation with one example each.', a: 'Conduction: heat through a material by particle collisions (a metal spoon in hot soup). Convection: heat by movement of the heated fluid itself (boiling water, sea breeze). Radiation: heat as infrared waves needing no medium (heat from the Sun, from a fire).' },
            { q: 'Why are saucepan bases made of metal but handles of wood or plastic?', a: 'Metal is a good conductor, so the base spreads heat to the food; wood and plastic are poor conductors (insulators), so the handle stays cool enough to hold.' },
            { q: 'State the linear expansivity and give the expansion formula.', a: 'Linear expansivity α is the increase in length per unit original length per kelvin rise in temperature: ΔL = α L θ; area expansivity is 2α and cubic expansivity 3α.' },
            { q: 'Give three everyday consequences or applications of thermal expansion.', a: 'Expansion gaps left in bridges and railway lines; overhead electric wires hung slack so contraction in cold weather cannot snap them; a bimetallic strip (brass + iron) bending to operate thermostats; loosening a tight metal lid with hot water.' },
            { q: 'Define specific heat capacity and give the heat formula.', a: 'Specific heat capacity c is the heat needed to raise 1 kg of a substance by 1 K: Q = mcθ (joules). Water\'s high value (4200 J/kgK) makes it an excellent coolant.' },
            { q: 'Define specific latent heat of fusion and of vaporisation.', a: 'Latent heat is heat absorbed or released during a change of state at constant temperature: fusion — solid to liquid (ice melting); vaporisation — liquid to vapour, Q = mL.' },
            { q: 'Why does temperature stay constant while ice melts or water boils?', a: 'The heat supplied is used to break the bonds between particles (change of state) rather than to increase their kinetic energy — so the thermometer reading stays steady until the change is complete.' },
            { q: 'State three differences between evaporation and boiling.', a: 'Evaporation occurs at any temperature, only at the surface, and slowly/quietly; boiling occurs at a fixed boiling point, throughout the liquid, with bubbles and turbulence.' },
            { q: 'How does pressure affect boiling point? Give an application.', a: 'Higher pressure raises the boiling point and lower pressure lowers it — a pressure cooker raises pressure so food cooks faster above 100 degC, while water boils below 100 degC on a high mountain.' },
            { q: 'Which surfaces are the best absorbers and emitters of heat radiation?', a: 'Dull black surfaces absorb and emit radiation best; shiny silvery surfaces are the worst (they reflect radiation) — which is why vacuum flasks have silvered walls and why people wear light clothes in hot climates.' },
            { q: 'Calculate the heat needed to warm 2 kg of water from 30 degC to 80 degC (c = 4200 J/kgK).', a: 'Q = mcθ = 2 x 4200 x 50 = 420,000 J = 420 kJ.' },
            { q: 'What happens to temperature during a change of state?', a: 'It stays constant — energy goes in as latent heat (Q = mL).' },
            { q: 'Name the three methods of heat transfer, with an example of each.', a: 'Conduction - a metal spoon heating in soup (solids). Convection - hot water rising in a kettle (fluids). Radiation - heat from the Sun or a fire crossing empty space (no medium needed).' },
            { q: 'Explain how a vacuum flask reduces heat loss.', a: 'The vacuum between the double walls stops conduction and convection; silvered inner surfaces reflect radiation back; the insulating stopper blocks escaping vapour and conduction through the neck - all three transfer routes attacked at once.' }
          ],
          quiz: [
            { q: 'Heat transfer by conduction occurs mainly in...', options: ['solids', 'liquids only', 'gases only', 'a vacuum'], correct: 0,
              exp: 'In solids, vibrating particles and free electrons pass the energy along - metals conduct best.' },
            { q: 'Convection transfers heat through...', options: ['liquids and gases by the movement of the fluid itself', 'solids only', 'empty space', 'radiation waves'], correct: 0,
              exp: 'Warmed fluid expands, becomes lighter and rises while cooler fluid sinks - a convection current.' },
            { q: 'Radiation is unique because it...', options: ['needs no material medium', 'works only in solids', 'needs convection first', 'slows in a vacuum'], correct: 0,
              exp: 'Infrared radiation crosses empty space - that is how the Sun’s heat reaches the Earth.' },
            { q: 'A vacuum flask keeps drinks hot because it minimises...', options: ['conduction, convection and radiation all together', 'conduction only', 'evaporation only', 'radiation only'], correct: 0,
              exp: 'The vacuum stops conduction and convection, the silvered walls reflect radiation, and the stopper blocks escaping vapour.' },
            { q: 'When most solids are heated, they...', options: ['expand', 'contract', 'stay exactly the same', 'evaporate'], correct: 0,
              exp: 'Particles vibrate more vigorously and need more room - the solid expands in every direction.' },
            { q: 'Gaps are left between railway rails to...', options: ['allow for expansion on hot days', 'save metal', 'let water drain', 'reduce noise'], correct: 0,
              exp: 'Without gaps, expanding rails would buckle in the heat - the gaps absorb the growth.' },
            { q: 'Water behaves unusually because it expands when...', options: ['cooled below 4°C and frozen', 'heated from 20 to 30°C', 'boiled into steam only', 'mixed with salt'], correct: 0,
              exp: 'Below 4°C water expands as it cools, so ice floats - which is why lakes freeze from the top down and fish survive.' },
            { q: 'In solids, heat is conducted by...', options: ['particle vibrations and free electrons', 'bulk movement of the material', 'electromagnetic waves only', 'convection currents'], correct: 0,
              exp: 'Particles pass vibrations along, and in metals the free electrons carry energy rapidly - which is why metals feel cold and heat fast.' },
            { q: 'Dark, dull surfaces are the best...', options: ['absorbers and emitters of heat radiation', 'reflectors of radiation', 'insulators against conduction', 'conductors of electricity'], correct: 0,
              exp: 'Black, matt surfaces absorb and radiate heat best; shiny, light surfaces reflect it - which is why desert robes are often white.' },
            { q: 'A bimetallic strip bends when heated because the two metals...', options: ['expand by different amounts', 'melt at once', 'contract equally', 'change colour'], correct: 0,
              exp: 'The faster-expanding metal forces the strip to curve - the principle behind thermostats and fire alarms.' }
          ],
        },
        {
          title: 'Current Electricity & Ohm’s Law',
          tags: ['V = IR', 'Series & parallel', 'Power'],
          summary: 'Ohm’s law, resistor combinations and electrical power.',
          content: `
            <div class="formula">V = IR<br>Series: R = R1 + R2 + …  (same current)<br>Parallel: 1/R = 1/R1 + 1/R2 + …  (same p.d.)<br>Power P = VI = I^2R = V^2/R</div>
            <p><b>Ohm’s law:</b> the current through a conductor is directly proportional to the p.d. across it, provided the temperature and other physical conditions remain constant.</p>
            <div class="worked"><b>Worked example:</b> 6 Ω and 3 Ω in parallel → R = (6×3)/(6+3) = <b>2 Ω</b>. With a 12 V supply, I = 12/2 = 6 A.</div>
            <div class="tip"><b>Exam tip:</b> Energy consumed by an appliance = P × t, measured in kWh for billing questions. 1 kWh = 3.6 × 10^6 J.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in parallel across 12 V. Find the total resistance, the total current, and the current in the 3 Ω resistor.<br>
            1/R = 1/2 + 1/3 + 1/6 = 1, so R = <b>1 Ω</b>. Total I = 12/1 = <b>12 A</b>.<br>
            Current in the 3 Ω = 12/3 = <b>4 A</b> (each parallel branch has the full 12 V).</div>
            <div class="worked"><b>Q2.</b> A 60 W bulb is used for 5 hours a day for 30 days. At ₦50 per kWh, find the cost.<br>
            Energy = 0.06 kW × 150 h = 9 kWh, so cost = 9 × 50 = <b>₦450</b>.</div>
            <div class="worked"><b>Q3.</b> A cell of e.m.f. 6 V and internal resistance 1 Ω drives 2 A through a circuit. Find the external resistance and the terminal voltage.<br>
            R + r = 6/2 = 3 Ω, so R = <b>2 Ω</b>; terminal voltage = IR = 2 × 2 = <b>4 V</b>.</div>
            <div class="diagram">
              <div class="diagram-title">A simple series circuit and the V = IR triangle</div>
              <svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Series circuit with a cell, switch, resistor and ammeter, plus the V over IR formula triangle">
                <rect x="6" y="6" width="368" height="178" rx="14" fill="#f0f9ff"/>
                <rect x="40" y="34" width="200" height="120" rx="10" fill="none" stroke="#0f172a" stroke-width="3"/>
                <line x1="72" y1="34" x2="72" y2="16" stroke="#0f172a" stroke-width="3"/>
                <line x1="60" y1="16" x2="84" y2="16" stroke="#0f172a" stroke-width="3"/>
                <line x1="66" y1="8" x2="78" y2="8" stroke="#0f172a" stroke-width="5"/>
                <text x="94" y="20" font-size="10" fill="#0f172a">cell</text>
                <line x1="128" y1="34" x2="150" y2="20" stroke="#0f172a" stroke-width="3"/>
                <circle cx="126" cy="34" r="3" fill="#0f172a"/><circle cx="152" cy="34" r="3" fill="#0f172a"/>
                <text x="152" y="20" font-size="10" fill="#0f172a">switch</text>
                <rect x="184" y="26" width="40" height="16" fill="#fed7aa" stroke="#c2410c" stroke-width="2.5"/>
                <text x="204" y="18" text-anchor="middle" font-size="10" fill="#9a3412">resistor R</text>
                <circle cx="140" cy="154" r="14" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
                <text x="140" y="158" text-anchor="middle" font-size="11" fill="#0f172a">A</text>
                <text x="140" y="180" text-anchor="middle" font-size="10" fill="#0f172a">ammeter (in series)</text>
                <g fill="#dc2626">
                  <circle cx="40" cy="94" r="4"/><circle cx="40" cy="70" r="4"/><circle cx="40" cy="118" r="4"/>
                </g>
                <path d="M40 130 L40 142" stroke="#dc2626" stroke-width="2.5"/>
                <path d="M34 136 L40 146 L46 136" fill="#dc2626"/>
                <text x="18" y="94" font-size="10" fill="#991b1b" transform="rotate(-90 18 94)">current</text>
                <path d="M282 44 L348 44 L315 112 Z" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5"/>
                <line x1="294" y1="76" x2="336" y2="76" stroke="#0369a1" stroke-width="2"/>
                <text x="315" y="70" text-anchor="middle" font-size="14" fill="#0c4a6e" font-weight="bold">V</text>
                <text x="304" y="98" text-anchor="middle" font-size="13" fill="#0c4a6e" font-weight="bold">I</text>
                <text x="328" y="98" text-anchor="middle" font-size="13" fill="#0c4a6e" font-weight="bold">R</text>
                <text x="315" y="136" text-anchor="middle" font-size="10" fill="#075985">cover the one you want</text>
                <text x="315" y="156" text-anchor="middle" font-size="10" fill="#075985">V = I × R</text>
              </svg>
              <div class="diagram-note">An <b>ammeter</b> is always connected in series and has very low resistance. A <b>voltmeter</b> is connected in parallel across the component and has very high resistance.</div>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Adding parallel resistances as though they were in series.</li>
              <li>Forgetting that in a <b>series</b> circuit the current is the same everywhere, while in <b>parallel</b> the potential difference is the same.</li>
              <li>Ignoring internal resistance when the question gives an e.m.f. rather than a terminal voltage.</li>
              <li>Using watts where kilowatts are needed in a billing question.</li>
            </ul>
            <h3>Deep dive: resistance, household wiring and safety</h3>
            <p>Resistance grows with length, shrinks with thickness, and rises with temperature in metals: R = ρL/A, where ρ is the resistivity of the material. This is why long extension wires warm up and why thick cables carry cooker currents. Your house is wired in <b>parallel</b> so that every appliance gets the full 230 V and one faulty bulb cannot kill the rest — and every socket's fuse is sized just above the appliance's normal current, so a fault melts the fuse before the wiring melts.</p>
            <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="40" y="30" width="240" height="90" fill="none" stroke="#475569" stroke-width="2.5"/>
              <line x1="40" y1="75" x2="40" y2="60" stroke="#475569" stroke-width="5"/>
              <line x1="40" y1="80" x2="40" y2="95" stroke="#475569" stroke-width="2.5"/>
              <text x="14" y="80" font-size="11" fill="#475569">cell</text>
              <rect x="130" y="22" width="60" height="16" fill="#e2e8f0" stroke="#475569"/>
              <text x="140" y="16" font-size="11" fill="#475569">R</text>
              <circle cx="240" cy="30" r="12" fill="none" stroke="#4f46e5" stroke-width="2"/>
              <text x="236" y="34" font-size="10" fill="#4f46e5">A</text>
              <circle cx="160" cy="140" r="12" fill="none" stroke="#059669" stroke-width="2"/>
              <text x="156" y="144" font-size="10" fill="#059669">V</text>
              <line x1="148" y1="128" x2="148" y2="120" stroke="#059669" stroke-width="2"/>
              <line x1="172" y1="128" x2="172" y2="120" stroke="#059669" stroke-width="2"/>
              <text x="60" y="140" font-size="10" fill="#64748b">V in parallel across R; A in series</text>
            </svg></div>
            <h3>Worked example, step by step</h3>
            <p><b>A 3 Ω and a 6 Ω resistor are connected in parallel across a 12 V battery. Find the total current drawn.</b></p>
            <ol>
              <li>1/R = 1/3 + 1/6 = 3/6 → R = 2 Ω (parallel always ends up smaller than the smallest branch).</li>
              <li>I = V/R = 12 ÷ 2 = 6 A.</li>
              <li>Check: branch currents 4 A + 2 A = 6 A ✓.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Connecting the ammeter in parallel — its near-zero resistance makes a short circuit.</li>
              <li>Ignoring internal resistance r when the question says "a cell of e.m.f. 12 V and internal resistance 1 Ω" — then I = E/(R + r).</li>
              <li>Quoting energy in watts; energy is joules (or kWh), power is watts.</li>
            </ul>

          `,
          cards: [
            { q: 'Define electric current and state how it is measured.', a: 'Current is the rate of flow of charge: I = Q/t, in amperes; an ammeter is connected in series with the component whose current is measured.' },
            { q: 'State Ohm\'s law.', a: 'At constant temperature, the current through a metallic conductor is directly proportional to the potential difference across it: V = IR.' },
            { q: 'How should a voltmeter be connected, and why is it different from an ammeter?', a: 'In parallel across the component; a voltmeter has very high resistance so it draws negligible current, while an ammeter has very low resistance so it does not reduce the current it measures.' },
            { q: 'State three factors that affect the resistance of a wire.', a: 'Length (longer = more resistance), cross-sectional area (thicker = less resistance) and material/temperature — R = ρL/A, and heating increases resistance in metals.' },
            { q: 'Give the formulas for resistors in series and in parallel.', a: 'Series: R = R1 + R2 + R3 (same current through each). Parallel: 1/R = 1/R1 + 1/R2 (same p.d. across each) — parallel resistance is always smaller than the smallest branch.' },
            { q: 'A 12 V battery drives 0.5 A through a resistor. Find the resistance and the power dissipated.', a: 'R = V/I = 12/0.5 = 24 ohms; P = VI = 12 x 0.5 = 6 W (energy converted at 6 joules per second).' },
            { q: 'Write the formulas for electrical energy and power.', a: 'E = VIt = I2Rt = V2t/R (joules); P = VI = I2R = V2/R (watts). One kilowatt-hour (kWh) = 3.6 x 106 J — the unit on electricity bills.' },
            { q: 'A 100 W bulb runs 5 hours daily. If a unit (kWh) costs ₦70, find the weekly cost.', a: 'Energy/day = 0.1 kW x 5 h = 0.5 kWh; per week 3.5 kWh; cost = 3.5 x 70 = ₦245.' },
            { q: 'What are the hazards of damaged wiring, and name three safety devices.', a: 'Short circuits, overloads and electric shocks from live casing. Safety: fuses (thin wire melts on excess current), circuit breakers, earthing of metal casings, and proper insulation.' },
            { q: 'Why are household appliances connected in parallel rather than in series?', a: 'Each appliance then receives the full mains voltage and can be switched independently; if one fails the others keep working — in series one break kills the whole circuit and voltages divide.' },
            { q: 'How does a fuse protect an appliance, and what wire is it made of?', a: 'It is connected in the live wire and is made of a high-resistance, low-melting-point alloy; when current exceeds the rating it heats and melts, breaking the circuit before cables overheat or fire starts.' },
            { q: 'Explain why a bird on a single high-voltage wire is not electrocuted.', a: 'Its body is at the same potential as the wire, so there is no potential difference across it and current does not flow through it — danger arises only when a path to earth or another wire exists.' },
            { q: 'Resistors 6 Ω and 3 Ω in parallel?', a: 'R = (6×3)/(6+3) = 2 Ω. Same p.d. across each branch.' },
            { q: 'State Ohm’s law and define resistance.', a: 'At constant temperature, the current through a conductor is directly proportional to the voltage across it: V = IR. Resistance (ohms) measures how strongly the material opposes the current.' },
            { q: 'State the rules for resistors in series and in parallel.', a: 'Series: resistances add - R = R1 + R2. Parallel: reciprocals add - 1/R = 1/R1 + 1/R2 (for two: R = R1R2/(R1 + R2)). Parallel always gives less than the smallest resistor.' }
          ],
          quiz: [
            { q: 'Ohm’s law states that...', options: ['V = IR', 'V = I/R', 'I = VR', 'R = VI'], correct: 0,
              exp: 'Voltage equals current times resistance, provided the temperature stays constant.' },
            { q: 'The unit of electrical resistance is the...', options: ['ohm', 'ampere', 'volt', 'watt'], correct: 0,
              exp: 'Resistance is measured in ohms (Ω); one ohm gives one ampere per volt.' },
            { q: 'An ammeter is connected in a circuit...', options: ['in series', 'in parallel', 'either way', 'outside the circuit'], correct: 0,
              exp: 'It must carry the full current being measured, so it sits in line - in series - with very low resistance.' },
            { q: 'A voltmeter is connected...', options: ['in parallel across the component', 'in series', 'in place of the cell', 'with the switch'], correct: 0,
              exp: 'It compares the energy between two points, so it bridges the component - in parallel - with very high resistance.' },
            { q: 'For resistors in series, the total resistance is...', options: ['R1 + R2 + R3...', 'the sum of reciprocals', 'the largest resistor only', 'the product of all'], correct: 0,
              exp: 'Series resistances simply add - the current faces each resistor one after another.' },
            { q: 'Three 2 Ω resistors connected in series give a total of...', options: ['6 Ω', '2/3 Ω', '8 Ω', '1.5 Ω'], correct: 0,
              exp: 'Series resistances simply add: 2 + 2 + 2 = 6 Ω in total.' },
            { q: 'The SI unit of electric current is the...', options: ['ampere', 'volt', 'coulomb', 'joule'], correct: 0,
              exp: 'Current is the flow of charge per second, measured in amperes (A).' },
            { q: 'A 12 V battery drives current through a 4 Ω resistor. The current is...', options: ['3 A', '48 A', '8 A', '0.33 A'], correct: 0,
              exp: 'I = V/R = 12/4 = 3 A.' },
            { q: 'Electrical energy consumed is calculated with...', options: ['E = VIt', 'E = V/I', 'E = I/V', 'E = VRI'], correct: 0,
              exp: 'Energy = voltage x current x time (joules); VIt with t in seconds. Power P = VI follows from it.' },
            { q: 'Good conductors of electricity have...', options: ['very low resistance', 'very high resistance', 'no electrons', 'insulating coatings'], correct: 0,
              exp: 'Copper and aluminium offer little opposition to current, which is why wires are made from them.' }
          ],
        },
        {
          title: 'Gravitational Field & Weightlessness',
          tags: ['Newton’s law of gravitation', 'g', 'Satellites', 'Escape velocity'],
          summary: 'Universal gravitation, why g varies over the Earth, and what keeps satellites in orbit.',
          content: `
            <h3>1. What a gravitational field is</h3>
            <p>Every mass drapes a <b>gravitational field</b> around itself — a region in which another mass feels a pull. Earth&apos;s field pulls everything towards the planet&apos;s centre; that pull on a body is its <b>weight</b>, W = mg. Field strength g is simply the force per kilogram: on Earth&apos;s surface about 10 N/kg (precisely 9.8), so each kilogram you carry is being hauled down with 10 newtons.</p>
            <ul>
              <li>Field lines point towards the centre of the mass producing the field; near Earth&apos;s surface they are practically parallel — a uniform field.</li>
              <li>g is not the same everywhere: about 9.78 at the equator, 9.83 at the poles (Earth bulges at the equator, so you stand farther from its centre there), and it shrinks as you climb mountains.</li>
              <li>Newton&apos;s law of universal gravitation says every pair of masses attracts: F = G m1 m2 ÷ d^2. You and this phone attract each other right now — the force is just laughably tiny.</li>
            </ul>
            <div class="formula">Watch out — TRAP: g&apos;s unit can be written N/kg or m/s^2 — they are the SAME quantity viewed as field strength or as free-fall acceleration. Exams accept both and love the equivalence.</div>

            <h3>2. Mass and weight, the sequel</h3>
            <table>
              <tr><th>Mass</th><th>Weight</th></tr>
              <tr><td>amount of matter</td><td>gravitational pull on that matter</td></tr>
              <tr><td>scalar, in kg</td><td>vector (downwards), in N</td></tr>
              <tr><td>same everywhere in the universe</td><td>changes with the local g</td></tr>
              <tr><td>measured with a balance</td><td>measured with a spring balance</td></tr>
            </table>
            <div class="worked"><b>Worked example:</b> a 60 kg student: Earth weight = 60 × 10 = 600 N; Moon (g ≈ 1.6) weight = 60 × 1.6 = 96 N; deep space far from masses ≈ 0 N. The mass is 60 kg in all three places — only the local field changes the pull.</div>

            <h3>3. g and distance: climbing out of the well</h3>
            <ul>
              <li>Because F = G M m ÷ d^2, doubling your distance from Earth&apos;s centre quarters the field strength. At one Earth-radius up (about 6400 km), g falls to a quarter of its surface value.</li>
              <li>At the altitude of the International Space Station (about 400 km), g is still around 8.7 N/kg — nearly 90% of surface gravity! The station and its crew are very much inside Earth&apos;s field.</li>
              <li>That fact demolishes the most famous myth in space physics: astronauts do NOT float because gravity disappears up there. Gravity is very much present — it is what keeps the station in orbit in the first place.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Earth with radial gravitational field lines pointing inward and a small orbiting station falling around it, labelled free fall not no gravity">
              <rect x="8" y="8" width="444" height="184" rx="10" fill="#eff6ff" stroke="#1e40af" stroke-width="2"/>
              <circle cx="150" cy="105" r="62" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>
              <path d="M120 85 q20 -14 44 -4 q18 8 12 26 q-24 10 -44 2 q-18 -8 -12 -24z" fill="#22c55e" opacity="0.8"/>
              <g stroke="#1e40af" stroke-width="2">
                <line x1="150" y1="18" x2="150" y2="36"/><path d="M150 36 l-4 -8 h8 z" fill="#1e40af"/>
                <line x1="150" y1="192" x2="150" y2="174"/><path d="M150 174 l-4 8 h8 z" fill="#1e40af"/>
                <line x1="58" y1="105" x2="76" y2="105"/><path d="M76 105 l-8 -4 v8 z" fill="#1e40af"/>
                <line x1="242" y1="105" x2="224" y2="105"/><path d="M224 105 l8 -4 v8 z" fill="#1e40af"/>
                <line x1="85" y1="40" x2="98" y2="53"/><path d="M98 53 l-9 -1 3 -8 z" fill="#1e40af"/>
                <line x1="215" y1="170" x2="202" y2="157"/><path d="M202 157 l9 1 -3 8 z" fill="#1e40af"/>
                <line x1="85" y1="170" x2="98" y2="157"/><path d="M98 157 l-9 1 3 8 z" fill="#1e40af"/>
                <line x1="215" y1="40" x2="202" y2="53"/><path d="M202 53 l9 -1 -3 8 z" fill="#1e40af"/>
              </g>
              <rect x="330" y="60" width="44" height="26" rx="6" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
              <line x1="322" y1="73" x2="330" y2="73" stroke="#334155" stroke-width="3"/><line x1="374" y1="73" x2="382" y2="73" stroke="#334155" stroke-width="3"/>
              <path d="M300 96 q52 40 108 24" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>
              <g font-size="10" font-weight="800" fill="#1e3a8a">
                <text x="300" y="130">The station falls TOWARDS</text>
                <text x="300" y="146">Earth but moves sideways so</text>
                <text x="300" y="162">fast it keeps missing it.</text>
                <text x="300" y="182">Free fall ≠ no gravity.</text>
              </g>
              <text x="60" y="30" font-size="10" font-weight="800" fill="#1e3a8a">Field lines always point inward.</text>
            </svg></div>

            <h3>4. Weightlessness: the truth about floating astronauts</h3>
            <ul>
              <li><b>Orbit is falling.</b> A spacecraft in orbit is a projectile: gravity pulls it in while its sideways speed carries it forward, so it falls around Earth forever. Everything inside falls together at the same rate — so nothing presses on anything, and the crew float.</li>
              <li>The same feeling exists on Earth for a moment: the lurch of a fast lift starting to descend, the airtime of a jump, the dip of a rollercoaster crest — brief weightlessness.</li>
              <li><b>Apparent weight</b> is the support force you feel. In free fall the support force is zero, so apparent weight is zero even though gravity still pulls — your true weight mg has not gone anywhere.</li>
              <li>Vomit comets (parabolic flights) and drop towers sell exactly this: 20–30 seconds of engineered free fall. Even a kicked football is briefly weightless in the air — every projectile is.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a lift accelerates downward at 10 m/s^2 (= g). A 50 kg person inside: the floor need not push at all — both fall together; a bathroom scale under them reads zero. Accelerate the lift downward at only 5 m/s^2 and the scale reads m(g − a) = 50 × 5 = 250 N — half weight, which is why descending lifts feel light.</div>

            <h3>5. Weight in moving lifts: feeling heavier and lighter</h3>
            <ul>
              <li>Lift accelerating UP at a: apparent weight = m(g + a) — you feel heavier at the start of an ascent.</li>
              <li>Lift accelerating DOWN at a: apparent weight = m(g − a) — lighter at the start of a descent.</li>
              <li>Constant speed (any direction): apparent weight = mg — no drama, acceleration is what you feel, not velocity.</li>
            </ul>
            <div class="formula">Watch out — TRAP: velocity is never what your stomach feels — acceleration is. A lift cruising upward at 5 m/s feels exactly like standing still.</div>

            <h3>6. The field idea generalises</h3>
            <ul>
              <li>Gravitational fields join electric and magnetic fields in physics&apos; grand pattern: an object changes the space around it, and other objects respond without being touched — &apos;action at a distance&apos; made respectable.</li>
              <li>Field strength maps: where lines crowd, the field is strong. Near a point mass they spread out and weaken with the square of distance — the inverse-square law shared with light and sound intensity.</li>
            </ul>

            <h3>7. Satellites: falling usefully</h3>
            <ul>
              <li>Throw a stone harder and it lands farther; throw it fast enough (about 8 km/s near the surface) and it falls around the Earth — that is an orbit, and every satellite is exactly that stone.</li>
              <li><b>Low Earth orbit (LEO):</b> a few hundred km up, about 90 minutes per lap — imaging satellites and the ISS.</li>
              <li><b>Geostationary orbit:</b> about 36,000 km up, one lap per 24 h, so the satellite hangs over the same spot — perfect for TV and communication dishes that never need to move. Nigerian TV dishes point at one fixed sky position for exactly this reason.</li>
              <li>Higher orbit means slower motion and longer period: the Moon takes a month at 384,000 km.</li>
              <li>Satellites eventually die by drag: at LEO the thin air still steals a little speed each lap, so orbits decay and dead satellites burn on re-entry.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> why can a geostationary satellite not sit over any altitude it likes? Its period must equal Earth&apos;s 24 h spin; gravity&apos;s strength fixes how fast that height orbits — only one radius (about 36,000 km) makes the two clocks agree.</div>

            <h3>8. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define gravitational field strength. <i>Ans: force per unit mass, N/kg (equal to free-fall acceleration).</i></li>
              <li><b>Q2.</b> Weight of 5 kg on Earth (g = 10)? <i>Ans: 50 N.</i></li>
              <li><b>Q3.</b> Why is g smaller at the equator than at the poles? <i>Ans: the equator is farther from Earth&apos;s centre (equatorial bulge).</i></li>
              <li><b>Q4.</b> State Newton&apos;s law of universal gravitation. <i>Ans: F = G m1 m2 ÷ d^2 — attraction proportional to masses, inverse-square in distance.</i></li>
              <li><b>Q5.</b> Mass 40 kg on the Moon (g = 1.6): weight and mass there? <i>Ans: 64 N; mass still 40 kg.</i></li>
              <li><b>Q6.</b> Distance from Earth&apos;s centre doubled: field strength becomes? <i>Ans: one quarter.</i></li>
              <li><b>Q7.</b> Is there gravity at the ISS altitude? <i>Ans: yes — about 90% of surface g.</i></li>
              <li><b>Q8.</b> Then why do astronauts float? <i>Ans: they and the station are in continuous free fall around Earth.</i></li>
              <li><b>Q9.</b> Apparent weight in a lift accelerating up at 2 m/s^2 for 60 kg (g = 10)? <i>Ans: 60 × 12 = 720 N.</i></li>
              <li><b>Q10.</b> Apparent weight in free fall? <i>Ans: zero — support force vanishes.</i></li>
              <li><b>Q11.</b> Direction of Earth&apos;s field lines? <i>Ans: radially inward, towards the centre.</i></li>
              <li><b>Q12.</b> Which do you feel in a lift, velocity or acceleration? <i>Ans: acceleration.</i></li>
              <li><b>Q13.</b> Instrument that measures weight? <i>Ans: spring balance.</i></li>
              <li><b>Q14.</b> Orbit where a satellite stays over one spot? <i>Ans: geostationary (about 36,000 km).</i></li>
              <li><b>Q15.</b> Why do LEO orbits decay? <i>Ans: thin air drag steals speed each lap.</i></li>
              <li><b>Q16.</b> Period of the Moon&apos;s orbit, roughly? <i>Ans: one month (about 27–29 days).</i></li>
            </ul>
            <div class="formula">SUMMARY: a gravitational field is a region where mass feels a pull, its strength g ≈ 10 N/kg on Earth&apos;s surface, varying with latitude and altitude and obeying the inverse-square law F = G m1 m2 ÷ d^2; weight W = mg is the field&apos;s pull and changes place to place while mass never changes; orbiting bodies float not because gravity vanishes — it barely weakens at their altitude — but because orbit is perpetual free fall, and apparent weight is simply the support force, which vanishes in free fall and swells to m(g + a) or shrinks to m(g − a) in accelerating lifts. Gravity never switches off; falling is just a way of moving, and floating is just falling together, gracefully, with tremendous speed.</div>

`,
          cards: [
            { q: 'What is a gravitational field?', a: 'A region of space around a mass in which another mass experiences a force of attraction — the Earth\'s field pulls objects towards its centre with strength g = about 9.8 N/kg.' },
            { q: 'State Newton\'s law of universal gravitation.', a: 'Every two masses attract each other with a force proportional to the product of their masses and inversely proportional to the square of the distance between them: F = G m1 m2 / r2.' },
            { q: 'Why does weight change from place to place while mass does not?', a: 'Weight W = mg depends on g, which varies with location (Earth\'s poles vs equator, altitude, other planets — g on the Moon is about 1/6 of Earth\'s); mass is the amount of matter and never changes.' },
            { q: 'What does a \'gravitational field strength of 10 N/kg\' mean?', a: 'Every kilogram of mass experiences a downward force of 10 N there — so a 50 kg person weighs 500 N.' },
            { q: 'Why do astronauts feel weightless in orbit?', a: 'They and their craft are in continuous free fall around the Earth — everything accelerates together at the same rate, so no support force is felt, even though gravity is still acting.' },
            { q: 'State two factors that make g slightly different at different places on Earth.', a: 'Distance from the Earth\'s centre (g is greater at the poles, smaller at the equator and at high altitude) and the Earth\'s rotation (centrifugal effect reduces apparent g at the equator); local rock density also matters.' },
            { q: 'What is escape velocity?', a: 'The minimum speed needed for an object to break free of a planet\'s gravitational pull without further propulsion — about 11.2 km/s from the Earth.' },
            { q: 'Why do all objects fall with the same acceleration in a vacuum?', a: 'Gravity gives every mass the same acceleration g because the greater force on a larger mass is exactly offset by its greater inertia — in vacuum (no air resistance) a feather and a stone land together.' },
            { q: 'How does gravity keep the Moon in orbit?', a: 'The Moon\'s forward motion would carry it off in a straight line, but the Earth\'s gravitational pull continually bends its path into a closed orbit — gravity provides the centripetal force.' },
            { q: 'What causes ocean tides?', a: 'Mainly the Moon\'s gravitational pull (and the Sun\'s), which raises bulges of water on the sides of the Earth facing and opposite the Moon — most places get two high and two low tides daily.' },
            { q: 'State the value of the universal gravitational constant G and what \'inverse square\' implies.', a: 'G = 6.67 x 10^-11 N m2/kg2; if the distance between two masses doubles, the gravitational force falls to one quarter (1/2^2) of its former value.' },
            { q: 'Why is launching a satellite eastward from near the equator advantageous?', a: 'It starts with the Earth\'s maximum rotational speed (about 460 m/s at the equator) in the direction of launch, saving fuel, and equatorial orbits can match the Earth\'s spin for geostationary satellites.' },
            { q: 'State Newton’s law of universal gravitation.', a: 'Every two masses attract each other with a force F = Gm1m2/r^2 - proportional to the product of the masses and inversely proportional to the square of the distance between them.' },
            { q: 'Distinguish mass from weight.', a: 'Mass (kg) is the quantity of matter and never changes. Weight (N) is the gravitational pull on that mass, W = mg, so it changes from planet to planet - you weigh a sixth as much on the Moon.' },
            { q: 'Why do orbiting astronauts experience weightlessness?', a: 'They are not beyond gravity - they are falling freely around the Earth together with their spacecraft. With everything accelerating at the same rate, no support force presses on them, so they feel weightless.' }
          ],
          quiz: [
            { q: 'Newton’s law of universal gravitation says the force between two masses is...', options: ['directly proportional to the product of the masses and inversely proportional to the square of their separation', 'directly proportional to the distance between them', 'independent of the masses', 'inversely proportional to the masses'], correct: 0,
              exp: 'F = Gm1m2/r^2 - bigger masses attract more strongly, and doubling the distance quarters the force.' },
            { q: 'Weight is calculated as...', options: ['mg', 'm/g', 'g/m', 'm + g'], correct: 0,
              exp: 'W = mass x gravitational field strength. On Earth g ~= 9.8 (about 10) N/kg.' },
            { q: 'The value of g on the Earth’s surface is approximately...', options: ['9.8 m/s^2', '98 m/s^2', '1.6 m/s^2', '3.7 m/s^2'], correct: 0,
              exp: 'About 9.8 m/s^2 (often rounded to 10 in exams). The Moon’s g is only about 1.6 m/s^2.' },
            { q: 'Mass is measured in kilograms; weight is measured in...', options: ['newtons', 'kilograms', 'joules', 'pascals'], correct: 0,
              exp: 'Weight is a force (W = mg), so it takes the unit of force - the newton.' },
            { q: 'If the distance between two masses is doubled, the gravitational force becomes...', options: ['one-quarter', 'half', 'double', 'four times'], correct: 0,
              exp: 'The inverse-square law: 2^2 = 4, so the force drops to 1/4.' },
            { q: 'A satellite stays in orbit because...', options: ['gravity supplies the centripetal force it needs', 'there is no gravity in space', 'its engines push continuously', 'air lifts it'], correct: 0,
              exp: 'The satellite is forever falling towards Earth while its sideways speed carries it past - gravity bends its path into an orbit.' },
            { q: 'Escape velocity is...', options: ['the minimum speed needed to break free of a planet’s gravity', 'the speed of any satellite', 'the orbital speed at all heights', 'the landing speed of rockets'], correct: 0,
              exp: 'About 11.2 km/s from the Earth’s surface - fast enough that gravity can never pull the craft back.' },
            { q: 'Astronauts in orbit feel weightless because...', options: ['they and their craft are in continuous free fall together', 'there is no gravity in orbit', 'their mass becomes zero', 'air pressure cancels gravity'], correct: 0,
              exp: 'Gravity is still strong up there! Everything falls at the same rate, so nothing presses on anything - the sensation of weight disappears.' },
            { q: 'Which statement is correct?', options: ['Mass is constant everywhere; weight changes with gravity', 'Weight is constant everywhere; mass changes', 'Both are constant everywhere', 'Both change with location only'], correct: 0,
              exp: 'Mass is the amount of matter - fixed. Weight = mg depends on g, so you weigh less on the Moon while your mass is unchanged.' },
            { q: 'An astronaut on the Moon weighs less than on Earth because...', options: ['the Moon’s gravitational field is weaker', 'his mass decreased', 'the Moon has no gravity', 'his volume shrank'], correct: 0,
              exp: 'The Moon’s g is about one-sixth of Earth’s, so W = mg falls to a sixth - the mass never changed.' }
          ],
        }
      ],
      SS3: [
        {
          title: 'Simple Harmonic Motion & Waves',
          tags: ['Period', 'Frequency', 'v = fλ'],
          summary: 'Oscillations, the wave equation and the properties of waves.',
          content: `
            <div class="formula">T = 1/f<br>v = fλ<br>Simple pendulum: T = 2π√(L/g)<br>Mass–spring: T = 2π√(m/k)</div>
            <h3>Wave properties</h3>
            <ul><li><b>Reflection</b> — bouncing back at a boundary (echoes, mirrors).</li>
            <li><b>Refraction</b> — bending due to a change of speed (a straw looks bent in water).</li>
            <li><b>Diffraction</b> — spreading round an obstacle or through a gap.</li>
            <li><b>Interference</b> — superposition giving maxima and minima.</li></ul>
            <p><b>Transverse</b> waves (light, water ripples) vibrate perpendicular to the direction of travel; <b>longitudinal</b> waves (sound) vibrate parallel to it.</p>
            <div class="worked"><b>Worked example:</b> A wave of frequency 500 Hz has wavelength 0.68 m → v = 500 × 0.68 = <b>340 m/s</b> (the speed of sound in air).</div>
            <div class="tip"><b>Exam tip:</b> The period of a simple pendulum depends only on its length and g — never on the mass of the bob.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> A simple pendulum 1 m long swings where g = 9.8 m/s^2. Find its period.<br>
            T = 2π√(L/g) = 2 × 3.142 × √(1/9.8) = 2 × 3.142 × 0.3194 ~= <b>2.01 s</b>.</div>
            <div class="worked"><b>Q2.</b> A sound wave of frequency 256 Hz has a wavelength of 1.3 m. Find its speed.<br>
            v = fλ = 256 × 1.3 = <b>332.8 m/s</b>.</div>
            <div class="worked"><b>Q3.</b> A man fires a gun 340 m from a cliff. How long before he hears the echo (v = 340 m/s)?<br>
            The sound travels 680 m, so t = 680/340 = <b>2 s</b>.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Confusing <b>frequency</b> (cycles per second) with <b>period</b> (seconds per cycle) — they are reciprocals.</li>
              <li>Thinking sound travels through a vacuum. Light does; sound does not.</li>
              <li>Confusing pitch (frequency) with loudness (amplitude).</li>
              <li>Saying the period of a pendulum depends on the mass of the bob — it does not.</li>
            </ul>
            <h3>Deep dive: the pendulum clock and the wave checklist</h3>
            <p>SHM is motion where the acceleration is proportional to the displacement and directed toward the fixed point: a ∝ -x. The simple pendulum is the classic example, with period T = 2π√(L/g). Two facts examiners recycle endlessly: the period does <i>not</i> depend on the mass of the bob nor on the amplitude (for small swings) — only on length and g. That is why pendulum clocks kept time through history, and why a loaded and an unloaded swing take the same time.</p>
            <p>Waves carry <b>energy</b> without carrying matter. The checklist of wave behaviour — reflection, refraction, diffraction and interference — proves light and sound are waves; polarisation additionally proves light is <i>transverse</i>. The electromagnetic spectrum in order of increasing frequency: radio, microwave, infrared, visible, ultraviolet, X-rays, gamma rays — all travel at 3 × 10^8 m/s in vacuum.</p>
            <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M10 75 Q 40 15, 70 75 T 130 75 T 190 75 T 250 75 T 310 75" fill="none" stroke="#4f46e5" stroke-width="2.5"/>
              <line x1="10" y1="75" x2="310" y2="75" stroke="#94a3b8" stroke-dasharray="4 4"/>
              <line x1="70" y1="75" x2="70" y2="45" stroke="#dc2626" stroke-width="1.5"/>
              <text x="76" y="50" font-size="10" fill="#dc2626">amplitude</text>
              <line x1="70" y1="125" x2="190" y2="125" stroke="#059669" stroke-width="1.5"/>
              <text x="100" y="140" font-size="10" fill="#059669">one wavelength λ</text>
              <text x="230" y="40" font-size="10" fill="#64748b">crest</text>
              <text x="150" y="105" font-size="10" fill="#64748b">trough</text>
            </svg></div>
            <h3>Worked example, step by step</h3>
            <p><b>A pendulum of length 1 m swings where g = 10 m/s^2. Find its period. (π^2 ~= 10)</b></p>
            <ol>
              <li>T = 2π√(L/g) = 2π√(0.1).</li>
              <li>T^2 = 4π^2 (0.1) = 4 × 10 × 0.1 = 4 → T = 2 s. Squaring first is the clean trick.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Expecting a heavier bob to swing slower — mass is irrelevant.</li>
              <li>Feeding L in centimetres into T = 2π√(L/g); convert to metres.</li>
              <li>Confusing period (seconds per swing) with frequency (swings per second) — they are reciprocals.</li>
            </ul>

          `,
          cards: [
            { q: 'Define simple harmonic motion (S.H.M.).', a: 'Motion in which the acceleration of a body is directly proportional to its displacement from a fixed point and is always directed towards that point: a = -ω2x.' },
            { q: 'Give three examples of bodies in simple harmonic motion.', a: 'A simple pendulum (small swings), a mass oscillating on a helical spring, and the balance wheel of a watch.' },
            { q: 'State the period formula of a simple pendulum and what it depends on.', a: 'T = 2π sqrt(L/g) — it depends only on the length L and gravity g, not on the mass of the bob or the amplitude (for small swings).' },
            { q: 'Define amplitude, period and frequency, and relate frequency to period.', a: 'Amplitude is the maximum displacement from the rest position; period T is the time for one complete oscillation; frequency f is oscillations per second (Hz), with f = 1/T.' },
            { q: 'A pendulum makes 20 oscillations in 40 s. Find its period and frequency.', a: 'T = 40/20 = 2 s; f = 1/T = 0.5 Hz.' },
            { q: 'What energy changes occur during simple harmonic motion?', a: 'Energy alternates between potential (maximum at the extremes) and kinetic (maximum at the centre); with no friction the total mechanical energy stays constant.' },
            { q: 'Distinguish between transverse and longitudinal waves with examples.', a: 'Transverse: vibrations perpendicular to wave travel — light, water ripples, waves on a string. Longitudinal: vibrations parallel to travel, with compressions and rarefactions — sound.' },
            { q: 'Write the wave equation and define its terms.', a: 'v = f λ, where v is wave speed (m/s), f frequency (Hz) and λ wavelength (m) — the distance between successive crests (or compressions).' },
            { q: 'Name four wave behaviours and give an example of each.', a: 'Reflection (echo; mirror images), refraction (a stick appearing bent in water), diffraction (waves spreading through a gap), interference (ripples crossing on a pond).' },
            { q: 'Why can sound not travel through a vacuum?', a: 'Sound is a mechanical wave that needs particles to transmit the vibrations — in a vacuum there are no particles, so a ringing bell in a jar becomes silent as the air is pumped out.' },
            { q: 'A ship\'s sonar pulse returns from the sea bed after 0.4 s. If sound travels at 1500 m/s in water, how deep is the sea?', a: 'The pulse travels down and back, so depth = (v x t)/2 = (1500 x 0.4)/2 = 300 m.' },
            { q: 'State two uses of ultrasound.', a: 'Medical scanning of an unborn baby (safe, non-invasive imaging) and detecting flaws or measuring thickness in metals; it is also used in cleaning and by bats for echolocation.' },
            { q: 'The wave equation?', a: 'v = fλ (speed = frequency × wavelength).' },
            { q: 'Distinguish transverse and longitudinal waves, with examples.', a: 'Transverse: vibrations at right angles to travel - light, ripples on water, waves on a rope. Longitudinal: vibrations along the direction of travel - sound in air, compressions in a spring.' },
            { q: 'Define amplitude, frequency, wavelength and period.', a: 'Amplitude: maximum displacement from rest (energy carried). Frequency: vibrations per second (Hz). Wavelength λ: distance between identical points on successive waves. Period: time for one vibration, T = 1/f.' }
          ],
          quiz: [
            { q: 'The wave equation connecting speed, frequency and wavelength is...', options: ['v = fλ', 'v = f/λ', 'f = vλ', 'λ = vf'], correct: 0,
              exp: 'Speed = frequency x wavelength. If 50 waves of 2 m pass each second, the wave travels 100 m/s.' },
            { q: 'In a transverse wave, the vibrations are...', options: ['perpendicular to the direction of travel', 'parallel to the direction of travel', 'circular', 'random'], correct: 0,
              exp: 'Light and ripples on water are transverse - the disturbance crosses the path of travel.' },
            { q: 'Sound waves in air are...', options: ['longitudinal', 'transverse', 'electromagnetic', 'stationary only'], correct: 0,
              exp: 'Air vibrates back and forth along the direction the sound travels - compressions and rarefactions.' },
            { q: 'The SI unit of frequency is the...', options: ['hertz', 'metre', 'second', 'newton'], correct: 0,
              exp: 'One hertz (Hz) is one complete vibration per second.' },
            { q: 'The amplitude of a wave is its...', options: ['maximum displacement from the rest position', 'distance between crests', 'number of vibrations per second', 'speed'], correct: 0,
              exp: 'Bigger amplitude means more energy - a louder sound or a brighter light.' },
            { q: 'The period T of a wave is related to frequency by...', options: ['T = 1/f', 'T = f', 'T = f^2', 'T = 2f'], correct: 0,
              exp: 'Period is the time for one full vibration - the reciprocal of frequency.' },
            { q: 'Which pair shows simple harmonic motion?', options: ['a pendulum and a mass on a spring', 'a car braking', 'a stone falling freely', 'water boiling'], correct: 0,
              exp: 'Both swing to and fro about a fixed point with a restoring force - the classic SHM systems.' },
            { q: 'A wave has frequency 50 Hz and wavelength 2 m. Its speed is...', options: ['100 m/s', '25 m/s', '52 m/s', '48 m/s'], correct: 0,
              exp: 'v = fλ = 50 x 2 = 100 m/s.' },
            { q: 'Light is ___ while sound is ___.', options: ['transverse; longitudinal', 'longitudinal; transverse', 'transverse; transverse', 'longitudinal; longitudinal'], correct: 0,
              exp: 'Light (an electromagnetic wave) is transverse; sound in air is longitudinal.' },
            { q: 'The wavelength is the distance between...', options: ['two successive crests (or any two identical points)', 'a crest and the rest position', 'the top and bottom of a wave', 'two successive amplitudes'], correct: 0,
              exp: 'One full wave pattern - crest to crest or trough to trough - is one wavelength, λ.' }
          ],
        },
        {
          title: 'Atomic Structure, Radioactivity & Nuclear Energy',
          tags: ['Half-life', 'Alpha/beta/gamma', 'E = mc^2'],
          summary: 'Nuclear particles, decay equations and half-life calculations.',
          content: `

            <h3>1. The atom's architecture</h3>
            <p>An atom has a tiny, dense <b>nucleus</b> (protons: positive; neutrons: neutral) orbited by <b>electrons</b> (negative). The <b>atomic number Z</b> counts protons (it defines the element); the <b>mass number A</b> counts protons + neutrons. In a neutral atom, electrons = protons.</p>
            <div class="formula">Nuclide notation: ^A_Z X • neutrons = A − Z</div>
            <div class="worked"><b>Worked example:</b> For ^23_11 Na: protons = 11, electrons = 11, neutrons = 23 − 11 = <b>12</b>.</div>
            <p><b>Isotopes</b> are atoms of the same element (same Z) with different neutron numbers (different A) — e.g. ^35 Cl and ^37 Cl; ^12 C and ^14 C. Isotopes share chemistry but differ in mass, and some are radioactive.</p>

            <h3>2. Radioactivity — unstable nuclei letting go</h3>
            <p>Nuclei with unbalanced proton/neutron numbers decay spontaneously, emitting three kinds of radiation:</p>
            <ul>
              <li><b>Alpha (α):</b> a helium nucleus (^4_2 He) — charge +2, heavy, stopped by paper, deflected toward the negative plate, most ionising.</li>
              <li><b>Beta (β):</b> a fast electron — charge −1, light, stopped by thin aluminium, deflected strongly (opposite way to α), moderately ionising. It forms when a <b>neutron turns into a proton</b>, so Z increases by 1.</li>
              <li><b>Gamma (γ):</b> electromagnetic radiation — no charge, no mass, reduced only by thick lead/concrete, not deflected, weakly ionising. A and Z stay unchanged.</li>
            </ul>

            <h3>3. Decay equations, balanced like accounts</h3>
            <p>Top numbers (A) and bottom numbers (Z) must balance on both sides.</p>
            <div class="worked"><b>Alpha decay:</b> ^238_92 U → ^234_90 Th + ^4_2 He. (A: 238 = 234 + 4; Z: 92 = 90 + 2.)</div>
            <div class="worked"><b>Beta decay:</b> ^14_6 C → ^14_7 N + ^0_-1 e. (A unchanged; Z rises 6 → 7.)</div>
            <div class="tip"><b>Exam tip:</b> if the question shows A unchanged and Z + 1, the emitted particle is beta; if A − 4 and Z − 2, it is alpha; if nothing changes, gamma.</div>

            <h3>4. Half-life — the clock of decay</h3>
            <p>The <b>half-life</b> is the time for half of a sample's atoms (or half its activity) to decay. After n half-lives, the fraction remaining is (1/2)^n.</p>
            <div class="worked"><b>Worked example:</b> A sample's activity falls from 800 counts/s to 100 counts/s in 15 days. Find the half-life.<br>
            800 → 400 → 200 → 100: three halvings in 15 days → half-life = <b>5 days</b>.</div>
            <div class="worked"><b>Worked example:</b> Half-life 8 h; start with 64 g. After 24 h (3 half-lives): 64 → 32 → 16 → <b>8 g</b> remain.</div>

            <h3>5. Detection and measurement</h3>
            <ul>
              <li><b>Geiger-Müller tube:</b> radiation ionises the gas → clicks/counts.</li>
              <li><b>Cloud chamber:</b> visible tracks (thick short α, thin wispy β).</li>
              <li><b>Film badges:</b> personal dosimeters for workers.</li>
            </ul>

            <h3>6. Nuclear energy: fission and fusion</h3>
            <ul>
              <li><b>Fission:</b> a heavy nucleus (U-235) splits after absorbing a neutron, releasing energy and more neutrons → <b>chain reaction</b>; controlled in reactors, uncontrolled in bombs.</li>
              <li><b>Fusion:</b> light nuclei (hydrogen) join under extreme heat — the Sun's engine; vastly energetic, hard to control on Earth.</li>
              <li><b>Where the energy comes from:</b> the products weigh slightly less; the lost mass becomes energy via <b>E = mc^2</b>.</li>
            </ul>

            <h3>7. Uses and dangers</h3>
            <ul>
              <li><b>Uses:</b> power stations; medicine (radiotherapy for cancer, tracers like iodine-131); carbon-14 <b>dating</b> of ancient wood and bones; industrial thickness gauges; sterilisation.</li>
              <li><b>Dangers:</b> ionising radiation damages cells (cancer, burns, genetic harm); waste stays dangerous for millennia — hence shielding, distance, and time limits.</li>
            </ul>

            <h3>8. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying beta decay leaves Z unchanged — Z <b>increases by 1</b>.</li>
              <li>Thinking gamma changes the element — it only sheds energy.</li>
              <li>Halving the wrong thing: half-life halves the <b>remaining</b> amount each time, not the original.</li>
              <li>Calling isotopes atoms with different protons — it is the <b>neutrons</b> that differ.</li>
              <li>Confusing fission (split) with fusion (join).</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> memorise the radiation table by one word each — α: <b>paper</b>; β: <b>aluminium</b>; γ: <b>lead</b>. Penetration questions answer themselves.</div>
          `,
          cards: [
            { q: 'What is radioactivity?', a: 'The spontaneous disintegration (decay) of unstable atomic nuclei, emitting radiation and forming new elements — it is a nuclear, not chemical, process and is unaffected by temperature or pressure.' },
            { q: 'Name the three types of radiation and describe each.', a: 'Alpha: helium nuclei (2 protons + 2 neutrons), heavy, +2 charge, stopped by paper. Beta: fast electrons, -1 charge, stopped by a few mm of aluminium. Gamma: high-energy electromagnetic waves, no charge, greatly reduced only by thick lead or concrete.' },
            { q: 'Which radiation is the most ionising and which the most penetrating?', a: 'Alpha is the most ionising (heavy and doubly charged) but least penetrating; gamma is the least ionising but most penetrating.' },
            { q: 'How do alpha and beta decay change the nucleus?', a: 'Alpha decay: mass number falls by 4 and atomic number by 2. Beta decay: a neutron becomes a proton — mass number unchanged, atomic number rises by 1.' },
            { q: 'Define half-life with an example.', a: 'Half-life is the time for half the atoms in a sample to decay (or its activity to halve). E.g. if a source of half-life 8 days has activity 800 counts/s, after 16 days it is 200 counts/s (two half-lives).' },
            { q: 'State four uses of radioactive isotopes.', a: 'Carbon-14 dating of fossils and artefacts; cobalt-60 gamma rays to treat cancer and sterilise equipment; radioactive tracers to detect pipe leaks and study fertilizer uptake; gauges to measure the thickness of paper or metal sheets; nuclear power generation.' },
            { q: 'State three hazards of radiation and two safety precautions.', a: 'Hazards: radiation sickness, cancer and genetic mutations from damaged cells. Precautions: handle sources with tongs/forceps, store in lead containers, minimise exposure time, and use shielding and badges to monitor dose.' },
            { q: 'What is nuclear fission?', a: 'The splitting of a heavy nucleus (uranium-235) after absorbing a slow neutron into two lighter nuclei plus neutrons and vast energy; the released neutrons can split more nuclei — a chain reaction — controlled by rods in a reactor or uncontrolled in a bomb.' },
            { q: 'What is nuclear fusion, and where does it occur naturally?', a: 'The joining of light nuclei (hydrogen) into a heavier one (helium) with an even greater release of energy — it powers the Sun and stars and requires millions of degrees.' },
            { q: 'What does E = mc2 tell us about nuclear reactions?', a: 'Mass can be converted into energy: the small mass lost (mass defect) in fission or fusion appears as enormous energy, since c2 = (3 x 10^8)^2 is a huge factor.' },
            { q: 'Name two detectors of radiation and how one of them works.', a: 'The Geiger-Muller (G-M) tube and the cloud chamber (also photographic film). In a G-M tube, radiation ionises the gas; the ions are accelerated to the central wire, producing pulses of current that are counted as clicks.' },
            { q: 'Which radiation is stopped by a sheet of paper?', a: 'Alpha particles (^42He nuclei) — the least penetrating.' },
            { q: 'Compare alpha, beta and gamma radiation.', a: 'Alpha: helium nucleus, +2 charge, most ionising, stopped by paper. Beta: fast electron, -1 charge, medium penetration, stopped by a few mm of aluminium. Gamma: electromagnetic wave, no charge, least ionising, most penetrating - needs thick lead or concrete.' },
            { q: 'Define half-life.', a: 'The time taken for half of the radioactive atoms in a sample to decay (equivalently, for the activity to halve). Each isotope has its own fixed half-life, from fractions of a second to billions of years.' },
            { q: 'Distinguish nuclear fission from fusion.', a: 'Fission splits a heavy nucleus (uranium) into lighter ones - used in reactors and atomic bombs. Fusion joins light nuclei (hydrogen) into heavier ones - the process powering the Sun and the hydrogen bomb.' }
          ],
          quiz: [
            { q: 'An alpha particle is...', options: ['a helium nucleus with a +2 charge', 'a fast electron', 'an electromagnetic wave', 'a neutron'], correct: 0,
              exp: 'Two protons plus two neutrons - a helium nucleus - carrying charge +2.' },
            { q: 'A beta particle is...', options: ['a fast-moving electron', 'a helium nucleus', 'a photon', 'a proton'], correct: 0,
              exp: 'Beta decay ejects an electron from the nucleus at high speed; charge -1.' },
            { q: 'Gamma rays are...', options: ['electromagnetic waves with no charge', 'helium nuclei', 'electrons', 'protons'], correct: 0,
              exp: 'Pure energy - very short-wavelength electromagnetic radiation, massless and uncharged.' },
            { q: 'Which radiation is the most penetrating?', options: ['gamma', 'alpha', 'beta', 'all equal'], correct: 0,
              exp: 'Gamma passes through paper, aluminium and needs thick lead or concrete to stop it.' },
            { q: 'Which radiation is the most ionising?', options: ['alpha', 'gamma', 'beta', 'all equal'], correct: 0,
              exp: 'Big, slow and doubly charged, alpha particles knock electrons off atoms most aggressively - but are stopped by paper.' },
            { q: 'Half-life is the time taken for...', options: ['half of the radioactive atoms in a sample to decay', 'all atoms to decay', 'the sample to warm up', 'half the mass to evaporate'], correct: 0,
              exp: 'After one half-life half the atoms remain; after two, a quarter; and so on.' },
            { q: 'Isotopes of an element have...', options: ['the same number of protons but different numbers of neutrons', 'the same number of neutrons but different protons', 'different numbers of both', 'equal protons and neutrons always'], correct: 0,
              exp: 'Same element (same proton number), different mass numbers - like carbon-12 and carbon-14.' },
            { q: 'Nuclear fission is...', options: ['the splitting of a heavy nucleus into lighter ones', 'the joining of light nuclei', 'the emission of light', 'the melting of uranium'], correct: 0,
              exp: 'A heavy nucleus (uranium-235) splits after absorbing a neutron, releasing energy and more neutrons.' },
            { q: 'Nuclear fusion is the process that...', options: ['powers the Sun by joining light nuclei', 'splits uranium atoms', 'burns coal', 'charges batteries'], correct: 0,
              exp: 'Hydrogen nuclei fuse into helium at tremendous temperature, releasing vast energy - the Sun’s engine.' },
            { q: 'A nuclear reactor produces energy through...', options: ['controlled fission of uranium', 'uncontrolled fusion', 'burning of radium', 'gamma-ray batteries'], correct: 0,
              exp: 'Control rods absorb surplus neutrons so the fission chain reaction proceeds steadily, not explosively.' }
          ],
        },
        {
          title: 'Projectile Motion',
          tags: ['Horizontal range', 'Time of flight', 'Maximum height'],
          summary: 'Treating horizontal and vertical motion independently.',
          content: `
            <p>A projectile has <b>constant horizontal velocity</b> (no horizontal force, ignoring air resistance) and <b>vertical acceleration</b> due to gravity. Solve the two directions separately.</p>
            <div class="formula">Time of flight T = 2u·sinθ / g<br>
            Maximum height H = u^2sin^2θ / 2g<br>
            Horizontal range R = u^2·sin2θ / g</div>
            <p>The range is maximum when θ = 45°, because sin2θ is then sin90° = 1.</p>
            <div class="worked"><b>Worked example:</b> A ball is thrown at 20 m/s at 30° (g = 10 m/s^2). T = 2(20)(0.5)/10 = <b>2 s</b>; R = 400 × sin60°/10 = 400 × 0.866/10 ~= <b>34.6 m</b>.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> A ball is projected horizontally at 15 m/s from a 45 m tower (g = 10 m/s^2). Find the time of flight and the horizontal range.<br>
            Vertical: 45 = 1/2(10)t^2 → t^2 = 9 → t = <b>3 s</b>. Horizontal: R = 15 × 3 = <b>45 m</b>.</div>
            <div class="worked"><b>Q2.</b> A stone is thrown at 40 m/s at 60° (g = 10 m/s^2). Find the maximum height.<br>
            H = u^2sin^2θ/2g = 1600 × 0.75 / 20 = <b>60 m</b>.</div>
            <div class="worked"><b>Q3.</b> At what two angles does a projectile have the same range?<br>
            Angles that add to <b>90°</b>, such as 30° and 60°, because sin 2θ is the same for both.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Treating the horizontal motion as accelerated — with no air resistance it is <b>uniform</b>.</li>
              <li>Using g in the horizontal calculation.</li>
              <li>Assuming the range is greatest at 60°. It is greatest at <b>45°</b>.</li>
              <li>Confusing time of flight with time to reach maximum height — the latter is half the former.</li>
            </ul>
            <h3>Deep dive: the three formulae, derived once</h3>
            <p>Split the launch speed u into uₓ = u cos θ (never changes) and uᵧ = u sin θ (fights gravity). Time of flight T = 2u sin θ/g (up and back down). Maximum height H = u^2 sin^2θ/2g (vertical speed zero at the top). Range R = u^2 sin 2θ/g, largest at 45° because sin 2θ peaks there. Complementary angles (30° and 60°) give the <i>same</i> range — a favourite multiple-choice sting.</p>
            <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20 130 Q 160 -40, 300 130" fill="none" stroke="#4f46e5" stroke-width="2.5"/>
              <line x1="20" y1="130" x2="80" y2="60" stroke="#059669" stroke-width="2"/>
              <text x="86" y="60" font-size="10" fill="#059669">u at θ</text>
              <line x1="160" y1="45" x2="160" y2="130" stroke="#94a3b8" stroke-dasharray="4 4"/>
              <text x="166" y="90" font-size="10" fill="#64748b">H (vᵧ = 0 at top)</text>
              <line x1="20" y1="138" x2="300" y2="138" stroke="#dc2626" stroke-width="1.5"/>
              <text x="140" y="150" font-size="10" fill="#dc2626">range R</text>
            </svg></div>
            <h3>Worked example, step by step</h3>
            <p><b>A ball is kicked at 20 m/s at 30° above the ground (g = 10 m/s^2). Find the time of flight and maximum height.</b></p>
            <ol>
              <li>u sin θ = 20 × 0.5 = 10 m/s.</li>
              <li>T = 2 × 10 ÷ 10 = 2 s.</li>
              <li>H = 10^2 ÷ (2 × 10) = 100 ÷ 20 = 5 m.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Using u instead of u sin θ in the vertical formulae.</li>
              <li>Believing velocity is zero at the top — only the <i>vertical</i> component is; the ball still moves sideways.</li>
              <li>Forgetting the horizontal velocity stays constant, so the ball at the top is not "at rest".</li>
            </ul>
            <h3>See it around you</h3>
            <p>A free-kick over the wall, water arcing from a broken pipe, a mango thrown across the compound — every arc is the same parabola. Goalkeepers who "read" the parabola are doing projectile physics at full sprint.</p>

          `,
          cards: [
            { q: 'Define a projectile and give two examples.', a: 'A body given an initial velocity and then allowed to move under gravity alone — a kicked football, a bullet from a gun (ignoring air resistance), a stone thrown into the air.' },
            { q: 'At what point of its flight is a projectile\'s vertical velocity zero?', a: 'At the maximum height — the vertical velocity decreases to zero at the top, then grows again downwards under gravity.' },
            { q: 'State the key principle relating the horizontal and vertical motions of a projectile.', a: 'They are independent of each other — the horizontal velocity never changes, while the vertical velocity changes by g each second; they share only the time of flight.' },
            { q: 'Write the formula for the time of flight of a projectile launched at angle θ with speed u.', a: 'T = 2u sin θ / g — the time to rise to maximum height is half of this: u sin θ / g.' },
            { q: 'Write the formula for maximum height reached.', a: 'H = u2 sin2 θ / (2g) — the vertical velocity is zero at the highest point.' },
            { q: 'Write the formula for range, and the angle giving maximum range.', a: 'R = u2 sin 2θ / g; since sin 2θ is greatest (= 1) at 2θ = 90 deg, the maximum range is achieved at θ = 45 deg.' },
            { q: 'A ball is thrown at 20 m/s at 30 deg to the horizontal (g = 10 m/s2). Find its time of flight and maximum height.', a: 'T = 2(20)(sin 30)/10 = 2 s; H = (20^2 x sin^2 30)/(2 x 10) = 400 x 0.25 / 20 = 5 m.' },
            { q: 'What is the velocity of a projectile at its maximum height?', a: 'Purely horizontal and equal to u cos θ — the vertical component has fallen to zero, which is why the projectile moves slowly near the top.' },
            { q: 'Why do complementary angles (e.g. 30 deg and 60 deg) give the same range?', a: 'Because sin 2θ is the same for both: sin 60 = sin 120 — but the 60 deg shot flies higher and stays longer in the air.' },
            { q: 'A stone is projected horizontally from a cliff 45 m high at 10 m/s. How long does it take to reach the ground (g = 10 m/s2)?', a: 'Vertical motion decides the time: h = (1/2)gt2, so 45 = 5t2, t = 3 s (independent of the horizontal speed). It lands 10 x 3 = 30 m from the cliff base.' },
            { q: 'State two effects of air resistance on a real projectile.', a: 'It reduces the range and maximum height and makes the path asymmetric (the descent steeper than the ascent) — so the best real launching angle is slightly less than 45 deg.' },
            { q: 'Give two practical applications of projectile motion.', a: 'Athletics (long jump and javelin take-off angles near 45 deg maximise distance) and ballistics/military aiming; also kicking a football for loft and distance.' },
            { q: 'At what launch angle is range maximum?', a: '45°, because R = u^2sin2θ/g and sin90° = 1.' },
            { q: 'Why is the path of a projectile a parabola?', a: 'Horizontally it moves at constant speed (no force); vertically it accelerates uniformly under gravity. Combining steady horizontal motion with constant downward acceleration traces a parabolic curve.' },
            { q: 'What happens at the maximum height of a projectile?', a: 'The vertical velocity is momentarily zero while the horizontal velocity stays unchanged, so the projectile still moves sideways. From there the vertical speed grows downwards and the projectile falls.' }
          ],
          quiz: [
            { q: 'After launch, a projectile moves under the action of...', options: ['gravity alone (ignoring air resistance)', 'its engine', 'the throwing force continuously', 'friction only'], correct: 0,
              exp: 'Once released, the only force is its weight - that is what makes the path curve.' },
            { q: 'During flight, the horizontal velocity of a projectile...', options: ['remains constant', 'increases steadily', 'decreases steadily', 'becomes zero'], correct: 0,
              exp: 'No horizontal force acts (air resistance ignored), so by Newton’s first law the horizontal speed never changes.' },
            { q: 'The vertical motion of a projectile has...', options: ['constant acceleration g downwards', 'constant velocity', 'zero acceleration', 'increasing acceleration'], correct: 0,
              exp: 'Gravity pulls down with a steady g ~= 9.8 m/s^2 throughout the flight - up or down.' },
            { q: 'A projectile achieves its maximum range when launched at...', options: ['45°', '30°', '60°', '90°'], correct: 0,
              exp: 'At 45° the balance of airtime and horizontal speed is optimal - range = u^2/g at that angle.' },
            { q: 'At the highest point of its path, a projectile’s vertical velocity is...', options: ['zero', 'maximum', 'equal to u', 'g'], correct: 0,
              exp: 'Rising stops and falling begins - at that instant the vertical component is zero (the horizontal component is unchanged).' },
            { q: 'The path of a projectile is a...', options: ['parabola', 'straight line', 'circle', 'hyperbola'], correct: 0,
              exp: 'Constant horizontal speed combined with uniformly accelerated vertical motion traces a parabola.' },
            { q: 'The time of flight of a projectile depends on...', options: ['the vertical component of the launch velocity', 'the horizontal component only', 'the mass of the projectile', 'its colour'], correct: 0,
              exp: 'Gravity acts vertically, so only u sin θ decides how long the projectile stays airborne.' },
            { q: 'The horizontal and vertical motions of a projectile are...', options: ['independent of each other', 'always equal', 'opposite', 'linked by friction'], correct: 0,
              exp: 'Each direction follows its own rules - the key idea that makes projectile problems solvable.' },
            { q: 'A ball rolled off a table horizontally starts its flight with a vertical velocity of...', options: ['zero', 'u', 'g', '9.8 m/s'], correct: 0,
              exp: 'The launch is purely horizontal, so the vertical component starts at 0 and grows as gravity pulls.' },
            { q: 'The range R of a projectile launched at speed u and angle θ is...', options: ['u^2 sin 2θ / g', 'u sin θ / g', 'u^2 cos θ / g', '2u sin θ / g'], correct: 0,
              exp: 'R = u^2 sin 2θ / g - and since sin 2θ peaks at θ = 45°, that is the maximum-range angle.' }
          ],
        }
      ],
    },
    mock: [
      { q: 'A 0.5 kg stone tied to a 2 m string moves at 4 m/s. The centripetal force is:',
        options: ['2 N', '4 N', '8 N', '16 N'], correct: 1,
        exp: 'F = mv^2/r = 0.5 × 16 ÷ 2 = 4 N. Note the square on the velocity — doubling the speed quadruples the force.' },
      { q: 'Which of these is a vector quantity?', options: ['Speed', 'Mass', 'Velocity', 'Temperature'], correct: 2,
        exp: 'Velocity has both magnitude and direction. Speed, mass and temperature are scalars.' },
      { q: 'A body is dropped from 20 m (g = 10 m/s^2). Its speed on hitting the ground is:',
        options: ['10 m/s', '15 m/s', '20 m/s', '40 m/s'], correct: 2,
        exp: 'Using v^2 = u^2 + 2as with u = 0: v = √(2 × 10 × 20) = √400 = 20 m/s.' },
      { q: 'Two resistors of 6 Ω and 3 Ω are connected in parallel. The total resistance is:',
        options: ['9 Ω', '2 Ω', '18 Ω', '4.5 Ω'], correct: 1,
        exp: 'R = (6 × 3)/(6 + 3) = 18/9 = 2 Ω. Parallel resistance is always less than the smallest resistor.' },
      { q: 'A radioactive sample has a half-life of 5 years. After 15 years, what fraction remains?',
        options: ['1/2', '1/4', '1/8', '1/16'], correct: 2,
        exp: '15 ÷ 5 = 3 half-lives. Fraction remaining = (1/2)^3 = 1/8.' },
      { q: 'A wave has frequency 500 Hz and wavelength 0.68 m. Its speed is:',
        options: ['340 m/s', '170 m/s', '680 m/s', '74 m/s'], correct: 0,
        exp: 'v = fλ = 500 × 0.68 = 340 m/s — the speed of sound in air.' },
      { q: 'The period of a simple pendulum depends on:', options: ['The mass of the bob', 'Its length and g', 'The amplitude only', 'Its colour'], correct: 1,
        exp: 'T = 2π√(L/g). Mass does not appear, so a heavier bob swings with the same period.' },
      { q: 'Which law states that every action has an equal and opposite reaction?',
        options: ['Newton’s first law', 'Newton’s second law', 'Newton’s third law', 'Hooke’s law'], correct: 2,
        exp: 'Newton’s third law. First law = inertia; second law = F = ma.' }
    ],
    resources: [
      { cat: 'Video lesson', title: 'WAEC Physics — centripetal force & circular motion', url: 'https://www.youtube.com/results?search_query=centripetal+force+waec+physics+nigeria', note: 'Banked roads, satellites and string problems worked out.' },
      { cat: 'Structured course', title: 'Khan Academy — High school physics', url: 'https://www.khanacademy.org/science/physics', note: 'Mechanics, circuits and waves with practice questions.' },
      { cat: 'Past questions', title: 'Myschool — Physics past questions & answers', url: 'https://myschool.ng/classroom', note: 'Filter by year and topic for targeted practice.' },
      { cat: 'Reference', title: 'Wikipedia — Centripetal force', url: 'https://en.wikipedia.org/wiki/Centripetal_force', note: 'Derivations and worked circular-motion examples.' },
      { cat: 'Simulation', title: 'PhET Interactive Simulations (Physics)', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=physics', note: 'Free browser simulations for circuits, motion and waves.' }
    ]
  
};
