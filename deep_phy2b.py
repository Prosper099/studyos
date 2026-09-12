# deep_phy2b.py — Physics SS2 deep: Gravitational Field & Weightlessness. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. What a gravitational field is</h3>
            <p>Every mass drapes a <b>gravitational field</b> around itself — a region in which another mass feels a pull. Earth&apos;s field pulls everything towards the planet&apos;s centre; that pull on a body is its <b>weight</b>, W = mg. Field strength g is simply the force per kilogram: on Earth&apos;s surface about 10 N/kg (precisely 9.8), so each kilogram you carry is being hauled down with 10 newtons.</p>
            <ul>
              <li>Field lines point towards the centre of the mass producing the field; near Earth&apos;s surface they are practically parallel — a uniform field.</li>
              <li>g is not the same everywhere: about 9.78 at the equator, 9.83 at the poles (Earth bulges at the equator, so you stand farther from its centre there), and it shrinks as you climb mountains.</li>
              <li>Newton&apos;s law of universal gravitation says every pair of masses attracts: F = G m1 m2 ÷ d^2. You and this phone attract each other right now — the force is just laughably tiny.</li>
            </ul>
            <div class="formula">TRAP: g&apos;s unit can be written N/kg or m/s^2 — they are the SAME quantity viewed as field strength or as free-fall acceleration. Exams accept both and love the equivalence.</div>

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
              <li>That fact demolishes the most famous myth in space physics: astronauts do NOT float because gravity disappears up there.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Earth with radial gravitational field lines pointing inward and a small orbiting station falling around it, labelled free fall not no gravity">\n              <rect x="8" y="8" width="444" height="184" rx="10" fill="#eff6ff" stroke="#1e40af" stroke-width="2"/>\n              <circle cx="150" cy="105" r="62" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>\n              <path d="M120 85 q20 -14 44 -4 q18 8 12 26 q-24 10 -44 2 q-18 -8 -12 -24z" fill="#22c55e" opacity="0.8"/>\n              <g stroke="#1e40af" stroke-width="2">\n                <line x1="150" y1="18" x2="150" y2="36"/><path d="M150 36 l-4 -8 h8 z" fill="#1e40af"/>\n                <line x1="150" y1="192" x2="150" y2="174"/><path d="M150 174 l-4 8 h8 z" fill="#1e40af"/>\n                <line x1="58" y1="105" x2="76" y2="105"/><path d="M76 105 l-8 -4 v8 z" fill="#1e40af"/>\n                <line x1="242" y1="105" x2="224" y2="105"/><path d="M224 105 l8 -4 v8 z" fill="#1e40af"/>\n                <line x1="85" y1="40" x2="98" y2="53"/><path d="M98 53 l-9 -1 3 -8 z" fill="#1e40af"/>\n                <line x1="215" y1="170" x2="202" y2="157"/><path d="M202 157 l9 1 -3 8 z" fill="#1e40af"/>\n                <line x1="85" y1="170" x2="98" y2="157"/><path d="M98 157 l-9 1 3 8 z" fill="#1e40af"/>\n                <line x1="215" y1="40" x2="202" y2="53"/><path d="M202 53 l9 -1 -3 8 z" fill="#1e40af"/>\n              </g>\n              <rect x="330" y="60" width="44" height="26" rx="6" fill="#94a3b8" stroke="#334155" stroke-width="2"/>\n              <line x1="322" y1="73" x2="330" y2="73" stroke="#334155" stroke-width="3"/><line x1="374" y1="73" x2="382" y2="73" stroke="#334155" stroke-width="3"/>\n              <path d="M300 96 q52 40 108 24" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/>\n              <g font-size="10" font-weight="800" fill="#1e3a8a">\n                <text x="300" y="130">The station falls TOWARDS</text>\n                <text x="300" y="146">Earth but moves sideways so</text>\n                <text x="300" y="162">fast it keeps missing it.</text>\n                <text x="300" y="182">Free fall ≠ no gravity.</text>\n              </g>\n              <text x="60" y="30" font-size="10" font-weight="800" fill="#1e3a8a">Field lines always point inward.</text>\n            </svg></div>

            <h3>4. Weightlessness: the truth about floating astronauts</h3>
            <ul>
              <li><b>Orbit is falling.</b> A spacecraft in orbit is a projectile: gravity pulls it in while its sideways speed carries it forward, so it falls around Earth forever. Everything inside falls together at the same rate — so nothing presses on anything, and the crew float.</li>
              <li>The same feeling exists on Earth for a moment: the lurch of a fast lift starting to descend, the airtime of a jump, the dip of a rollercoaster crest — brief weightlessness.</li>
              <li><b>Apparent weight</b> is the support force you feel. In free fall the support force is zero, so apparent weight is zero even though gravity still pulls — your true weight mg has not gone anywhere.</li>
              <li>Vomit comets (parabolic flights) and drop towers sell exactly this: 20–30 seconds of engineered free fall.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a lift accelerates downward at 10 m/s^2 (= g). A 50 kg person inside: the floor need not push at all — both fall together; a bathroom scale under them reads zero. Accelerate the lift downward at only 5 m/s^2 and the scale reads m(g − a) = 50 × 5 = 250 N — half weight, which is why descending lifts feel light.</div>

            <h3>5. Weight in moving lifts: feeling heavier and lighter</h3>
            <ul>
              <li>Lift accelerating UP at a: apparent weight = m(g + a) — you feel heavier at the start of an ascent.</li>
              <li>Lift accelerating DOWN at a: apparent weight = m(g − a) — lighter at the start of a descent.</li>
              <li>Constant speed (any direction): apparent weight = mg — no drama, acceleration is what you feel, not velocity.</li>
            </ul>
            <div class="formula">TRAP: velocity is never what your stomach feels — acceleration is. A lift cruising upward at 5 m/s feels exactly like standing still.</div>

            <h3>6. The field idea generalises</h3>
            <ul>
              <li>Gravitational fields join electric and magnetic fields in physics&apos; grand pattern: an object changes the space around it, and other objects respond without being touched — &apos;action at a distance&apos; made respectable.</li>
              <li>Field strength maps: where lines crowd, the field is strong. Near a point mass they spread out and weaken with the square of distance — the inverse-square law shared with light and sound intensity.</li>
            </ul>

            <h3>7. Try these (with answers)</h3>
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
            </ul>
            <div class="formula">SUMMARY: a gravitational field is a region where mass feels a pull, its strength g ≈ 10 N/kg on Earth&apos;s surface, varying with latitude and altitude and obeying the inverse-square law F = G m1 m2 ÷ d^2; weight W = mg is the field&apos;s pull and changes place to place while mass never changes; orbiting bodies float not because gravity vanishes — it barely weakens at their altitude — but because orbit is perpetual free fall, and apparent weight is simply the support force, which vanishes in free fall and swells to m(g + a) or shrinks to m(g − a) in accelerating lifts. Gravity never switches off; falling is just a way of moving.</div>

'''

title = 'Gravitational Field & Weightlessness'
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
