# deep_phy1c.py — Physics SS1 deep: Work, Energy & Power. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. Work: force that actually moves something</h3>
            <p>In physics, <b>work</b> is done ONLY when a force moves its point of application through a distance: <b>W = F × d</b>, measured in <b>joules (J)</b> — one joule is one newton moving something one metre. Hold a heavy bag still for an hour and you have done ZERO work on it, however tired your arm gets; push a wall all day and the wall lets you do nothing. Sweat is not work — displacement is work.</p>
            <ul>
              <li>Force must have a component ALONG the motion. Pull a cart with a rope angled upward: only the horizontal part of your pull does work on the cart.</li>
              <li>Carrying a load across a flat floor does no work ON THE LOAD — the lifting force is vertical, the motion horizontal, they are at 90°.</li>
              <li>Work against friction turns into heat — rubbing palms together is work becoming warmth.</li>
            </ul>
            <div class="formula">TRAP: &apos;work = force × distance&apos; only counts the distance moved IN THE DIRECTION of the force. Perpendicular force, zero work — the classic exam ambush.</div>

            <h3>2. Energy: the ability to do work</h3>
            <ul>
              <li><b>Energy</b> is the capacity to do work, also in joules. It never appears from nowhere and never disappears — it only changes form.</li>
              <li><b>Kinetic energy (KE)</b> — energy of motion: KE = 1/2 mv^2. Double the speed and KE quadruples: the real arithmetic behind crash severity.</li>
              <li><b>Potential energy (PE)</b> — stored energy of position: gravitational PE = mgh; a raised tank, a stretched rubber band, a compressed spring.</li>
              <li>Other forms: chemical (food, fuel, batteries), heat, light, sound, electrical, nuclear.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a 0.5 kg ball flies at 10 m/s. KE = 1/2 × 0.5 × 100 = 25 J. Lift it 4 m: PE = mgh = 0.5 × 10 × 4 = 20 J. Same ball, same joules currency, two different accounts.</div>

            <h3>3. Conservation of energy: nature&apos;s unbreakable bank</h3>
            <ul>
              <li><b>Energy cannot be created or destroyed, only transformed.</b> A falling mango trades PE for KE as it drops; at the ground the KE becomes heat, sound and a dent.</li>
              <li>A pendulum swaps KE and PE twice per swing; a little leaks to air resistance each cycle, which is why it eventually stops.</li>
              <li>The generator chain (Nigeria&apos;s favourite): chemical (fuel) → heat (combustion) → kinetic (piston and crank) → electrical (alternator) → light, sound, heat in your room. Every step leaks some heat — the tax of reality.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Falling ball energy bars: at the top full potential energy, halfway half and half, at the bottom full kinetic energy, total height always equal">\n              <rect x="8" y="8" width="444" height="174" rx="10" fill="#fefce8" stroke="#854d0e" stroke-width="2"/>\n              <g font-size="9.5" font-weight="800" fill="#854d0e">\n                <text x="60" y="30">TOP</text>\n                <rect x="50" y="36" width="34" height="110" fill="#f59e0b"/><text x="46" y="160">PE full</text>\n                <text x="170" y="30">MIDDLE</text>\n                <rect x="165" y="36" width="34" height="55" fill="#f59e0b"/><rect x="165" y="91" width="34" height="55" fill="#16a34a"/><text x="158" y="160">PE = KE</text>\n                <text x="290" y="30">GROUND</text>\n                <rect x="285" y="36" width="34" height="110" fill="#16a34a"/><text x="278" y="160">KE full</text>\n                <text x="352" y="60">Total height never</text>\n                <text x="352" y="76">changes — energy only</text>\n                <text x="352" y="92">swaps accounts:</text>\n                <text x="352" y="112">PE = mgh (amber)</text>\n                <text x="352" y="130">KE = 1/2 mv^2 (green)</text>\n                <text x="352" y="150">mgh(top) = 1/2 mv^2(bottom)</text>\n              </g>\n            </svg></div>
            <div class="worked"><b>Worked example:</b> a 2 kg stone drops from 10 m (g = 10). PE at top = 2 × 10 × 10 = 200 J. Ignoring air, speed at ground: 1/2 mv^2 = 200 → v^2 = 200 → v ≈ 14.1 m/s. The bank paid out everything.</div>

            <h3>4. Power: how FAST the work flows</h3>
            <ul>
              <li><b>Power = work ÷ time</b>, in <b>watts (W)</b> — one watt is one joule per second. Two students climb the same stairs and do the same work; the faster one develops more power.</li>
              <li>Also <b>P = F × v</b> for a constant force moving at speed v — the engine formula.</li>
              <li><b>The kilowatt-hour (kWh)</b> is a unit of ENERGY, not power: 1 kWh = 1000 W × 3600 s = 3.6 × 10^6 J. Your prepaid meter sells joules in kWh wrappers.</li>
            </ul>
            <div class="formula">TRAP: kWh is ENERGY. &apos;Which unit measures electrical energy billed by PHCN?&apos; → kilowatt-hour, never kilowatt.</div>
            <div class="worked"><b>Worked example:</b> a 60 kg student runs up 20 steps of 0.25 m each in 5 s. h = 5 m; work = mgh = 60 × 10 × 5 = 3000 J; power = 3000 ÷ 5 = 600 W — about as powerful as six bright old bulbs.</div>

            <h3>5. Efficiency: the tax every machine pays</h3>
            <ul>
              <li><b>Efficiency = (useful energy or work out ÷ total energy in) × 100.</b> Friction, heat and sound steal the rest, so efficiency is always below 100%.</li>
              <li>A generator giving 3000 J of electricity from 10,000 J of fuel is 30% efficient; an LED lamp beats an incandescent bulb because more of its watts become light instead of heat.</li>
              <li>Reducing the tax: lubrication, smooth bearings, tight belts — maintenance is efficiency work.</li>
            </ul>

            <h3>6. Try these (with answers)</h3>
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
            </ul>
            <div class="formula">SUMMARY: work W = F × d happens only when force displaces along its own line, and it is measured in joules like all energy; kinetic energy 1/2 mv^2 and potential energy mgh are the two mechanical accounts that conservation of energy freely transfers between each other while the total stays fixed; power = work ÷ time = F × v rates that transfer in watts, with the kilowatt-hour as the billing unit of energy (3.6 × 10^6 J); and efficiency = useful out ÷ total in × 100 records the tax that friction and heat collect from every real machine — always below 100%.</div>

'''

title = 'Work, Energy & Power'
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
