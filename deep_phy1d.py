# deep_phy1d.py — Physics SS1 deep: Equilibrium of Forces & Moments. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
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
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balanced beam on a pivot: 30 N at 0.4 m on the left balances 20 N at 0.6 m on the right, clockwise moment equals anticlockwise moment">\n              <rect x="8" y="8" width="444" height="174" rx="10" fill="#ecfdf5" stroke="#065f46" stroke-width="2"/>\n              <line x1="60" y1="90" x2="400" y2="90" stroke="#0f172a" stroke-width="5"/>\n              <path d="M230 90 l-16 30 h32 z" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>\n              <rect x="104" y="62" width="26" height="26" fill="#dc2626"/><text x="106" y="56" font-size="10" font-weight="800" fill="#b91c1c">30 N</text>\n              <rect x="322" y="66" width="22" height="22" fill="#2563eb"/><text x="322" y="60" font-size="10" font-weight="800" fill="#1d4ed8">20 N</text>\n              <line x1="117" y1="98" x2="117" y2="120" stroke="#065f46" stroke-dasharray="4 3"/><line x1="230" y1="98" x2="230" y2="120" stroke="#065f46" stroke-dasharray="4 3"/><line x1="333" y1="98" x2="333" y2="120" stroke="#065f46" stroke-dasharray="4 3"/>\n              <line x1="117" y1="118" x2="230" y2="118" stroke="#065f46" stroke-width="1.5"/><text x="140" y="132" font-size="9.5" font-weight="700" fill="#065f46">0.4 m</text>\n              <line x1="230" y1="118" x2="333" y2="118" stroke="#065f46" stroke-width="1.5"/><text x="262" y="132" font-size="9.5" font-weight="700" fill="#065f46">0.6 m</text>\n              <g font-size="9.5" font-weight="700" fill="#065f46">\n                <text x="60" y="152">Anticlockwise: 30 × 0.4 = 12 N·m</text>\n                <text x="60" y="168">Clockwise: 20 × 0.6 = 12 N·m — balanced.</text>\n                <text x="290" y="152">Small force far from the pivot</text>\n                <text x="290" y="168">beats big force near it.</text>\n              </g>\n            </svg></div>
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
            <div class="formula">TRAP: the unit of moment (N·m) looks like the unit of work (the joule) but they are DIFFERENT quantities — moment is a turning effect, work is energy. Never write &apos;J&apos; for a moment.</div>

            <h3>5. Levers and simple machines: moments at work</h3>
            <ul>
              <li>A lever is a moment machine: effort × effort-arm = load × load-arm when balanced. The mechanical advantage = load ÷ effort = effort-arm ÷ load-arm.</li>
              <li>A crowbar with effort-arm 1.2 m and load-arm 0.1 m multiplies your force 12 times — moments are why a child can move a boulder with the right bar.</li>
              <li>The same principle runs the beam balance (equal arms), the wheelbarrow (load between pivot and effort) and the bottle opener.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a wheelbarrow: load 300 N sits 0.4 m from the wheel (pivot); hands lift 1.2 m from the wheel. Effort × 1.2 = 300 × 0.4 → effort = 100 N. The wheelbarrow triples your strength.</div>

            <h3>6. Three or more forces: triangles and polygons of forces</h3>
            <ul>
              <li>When three forces hold a point in equilibrium, their arrows drawn tip-to-tail form a CLOSED triangle; more forces close into a polygon. If the shape does not close, the leftover side is the resultant.</li>
              <li>Classic case: a picture hung by two cords — the tensions and the weight close into a triangle.</li>
              <li>Lami&apos;s theorem handles three forces at a point: each force is proportional to the sine of the angle between the other two.</li>
            </ul>

            <h3>7. Try these (with answers)</h3>
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
            </ul>
            <div class="formula">SUMMARY: equilibrium demands that forces cancel (zero resultant) AND that moments cancel (no turning); a moment is force × perpendicular distance in N·m, clockwise against anticlockwise under the principle of moments; the centre of gravity is where the weight acts, found on laminae by crossing plumb lines; stability grows as the CG drops and the base widens, explaining low-slung buses and racing cars; levers, wheelbarrows and balances are all moment machines with MA = effort-arm ÷ load-arm; and three balanced forces always close into a triangle — geometry policing physics.</div>

'''

title = 'Equilibrium of Forces & Moments'
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
