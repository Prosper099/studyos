# deep_phy1b.py — Physics SS1 deep: Motion & Newton's Laws. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
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
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity-time graph: straight rising line, slope labelled acceleration, area under line shaded and labelled distance">\n              <rect x="8" y="8" width="444" height="174" rx="10" fill="#f0fdf4" stroke="#166534" stroke-width="2"/>\n              <line x1="60" y1="160" x2="400" y2="160" stroke="#0f172a" stroke-width="2"/>\n              <line x1="60" y1="160" x2="60" y2="30" stroke="#0f172a" stroke-width="2"/>\n              <line x1="60" y1="160" x2="360" y2="50" stroke="#16a34a" stroke-width="3"/>\n              <path d="M60 160 L360 50 L360 160 Z" fill="#86efac" opacity="0.5"/>\n              <text x="150" y="90" font-size="10" font-weight="800" fill="#15803d">slope = acceleration</text>\n              <text x="200" y="140" font-size="10" font-weight="800" fill="#166534">area = distance</text>\n              <text x="370" y="168" font-size="9" fill="#0f172a">time →</text>\n              <text x="40" y="26" font-size="9" fill="#0f172a">v ↑</text>\n              <g font-size="9.5" fill="#14532a" font-weight="700">\n                <text x="280" y="30">Read the graph like a story:</text>\n                <text x="280" y="46">steep slope = hard acceleration;</text>\n                <text x="280" y="62">big area = long distance.</text>\n                <text x="280" y="86">Flat line = zero acceleration</text>\n                <text x="280" y="102">(constant velocity cruising).</text>\n              </g>\n            </svg></div>

            <h3>4. Newton&apos;s three laws — the rules of the road</h3>
            <ul>
              <li><b>First law (inertia):</b> a body keeps doing what it is doing unless a force interferes. Sudden braking throws passengers FORWARD — their bodies keep the old motion. Dust stays on a carpet until the vacuum cleaner acts.</li>
              <li><b>Second law (F = ma):</b> acceleration follows force and bows to mass. Double the force, double the acceleration; double the mass, halve the acceleration.</li>
              <li><b>Third law (action–reaction):</b> every action has an equal and opposite reaction on a DIFFERENT body. Swimming pushes water back; the water pushes you forward. A released balloon flies as the air escapes.</li>
            </ul>
            <div class="formula">TRAP: action and reaction never cancel each other — they act on different bodies. &apos;They cancel so nothing should move&apos; is the oldest wrong sentence in mechanics.</div>

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

            <h3>7. Try these (with answers)</h3>
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
            </ul>
            <div class="formula">SUMMARY: motion is classified as linear, circular, oscillatory or random; speed and velocity differ by direction, and acceleration is velocity&apos;s rate of change; the trio v = u + at, s = ut + 1/2 at^2, v^2 = u^2 + 2as rules uniformly accelerated motion; graphs tell the truth — slope of velocity–time is acceleration and its area is distance; Newton&apos;s three laws govern everything from braking lurches to balloon flight, with F = ma as the working equation; and gravity gives free fall g ≈ 10 m/s^2 with v = gt and s = 1/2 gt^2, while weight W = mg remains a force, never a mass.</div>

'''

title = 'Motion & Newton’s Laws'
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
