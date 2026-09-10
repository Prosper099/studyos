"""Deep-expand SS Physics lessons: textbook dives, worked examples, traps, diagrams."""
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

deep('Measurement, Units & Vectors', """

    <h3>Deep dive: dimensions, instruments and errors</h3>
    <p>Every physical quantity has a <b>dimension</b> built from mass (M), length (L) and time (T). Speed is LT\u207b\u00b9, force is MLT\u207b\u00b2, energy is ML\u00b2T\u207b\u00b2. Dimensional analysis lets you check an equation before you ever plug in numbers: if the two sides do not have the same dimensions, the equation <i>cannot</i> be right. For example, checking s = ut + \u00bd at\u00b2: ut is (LT\u207b\u00b9)(T) = L, and at\u00b2 is (LT\u207b\u00b2)(T\u00b2) = L \u2014 both terms are lengths, so the equation passes the test.</p>
    <p>Know your instruments and their precision: a metre rule reads to 0.1 cm; vernier calipers to 0.01 cm (0.0001 m); the micrometer screw gauge to 0.01 mm \u2014 the micrometer is the most precise of the three and is used for wire diameters and sheet thickness. Always check and correct the <b>zero error</b> before measuring, and always avoid parallax by reading straight on, not from a slant.</p>
    <div class="formula">percentage error = (error in measurement \u00f7 measured value) \u00d7 100</div>
    <h3>Worked example, step by step</h3>
    <p><b>Convert 72 km/h to m/s, and find the percentage error if a ruler graduated in cm records a true length of 2.50 m as 2.51 m.</b></p>
    <ol>
      <li>72 km/h = 72 \u00d7 1000 m \u00f7 3600 s = 20 m/s. (Divide km/h by 3.6 \u2014 a shortcut worth memorising.)</li>
      <li>Error = 2.51 \u2212 2.50 = 0.01 m.</li>
      <li>Percentage error = (0.01 \u00f7 2.50) \u00d7 100 = 0.4%.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Using km/h inside v = u + at without converting to m/s first.</li>
      <li>Quoting micrometer precision as 0.1 cm \u2014 it is 0.01 mm, a hundred times finer.</li>
      <li>Adding vectors like ordinary numbers; perpendicular vectors must be combined with Pythagoras.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Fuel at the station is sold in litres (volume), your NEPA bill comes from a meter reading kilowatt-hours (energy), and the okada speedometer reads km/h while physics wants m/s. Spotting the unit tells you the quantity \u2014 that habit alone saves marks every exam.</p>
""")

deep('Motion & Newton\u2019s Laws', """

    <h3>Deep dive: reading motion from graphs</h3>
    <p>The three equations of motion (v = u + at; s = ut + \u00bd at\u00b2; v\u00b2 = u\u00b2 + 2as) only apply when acceleration is <b>uniform</b> \u2014 examiners love hiding non-uniform cases where you must use the graph instead. On a velocity\u2013time graph, the <b>gradient</b> is the acceleration and the <b>area under the line</b> is the distance travelled. A flat line means constant velocity (zero acceleration); a straight sloping line means uniform acceleration; a curve means changing acceleration.</p>
    <p>Free fall is simply uniform acceleration with u = 0 and a = g \u2248 9.8 (take 10) m/s\u00b2, so the distance fallen is h = \u00bd gt\u00b2 \u2014 a mango dropped from rest falls 5 m in the first second, 20 m in two seconds. Notice the distances grow as 1 : 4 : 9 \u2026 that pattern is \u00bd gt\u00b2 doing its work.</p>
    <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="40" y1="120" x2="300" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="40" y1="120" x2="40" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
      <polygon points="140,120 240,40 240,120" fill="#c7d2fe" opacity="0.6"/>
      <line x1="40" y1="120" x2="240" y2="40" stroke="#4f46e5" stroke-width="2.5"/>
      <text x="250" y="35" font-size="11" fill="#4f46e5">v (m/s)</text>
      <text x="270" y="135" font-size="11" fill="#64748b">t (s)</text>
      <text x="120" y="100" font-size="11" fill="#4338ca">area = distance</text>
      <text x="60" y="60" font-size="11" fill="#64748b">slope = acceleration</text>
    </svg></div>
    <h3>Worked example, step by step</h3>
    <p><b>A car travelling at 54 km/h sees a block on the Third Mainland Bridge and brakes with a deceleration of 5 m/s\u00b2. How far does it travel before stopping?</b></p>
    <ol>
      <li>Convert: u = 54 \u00f7 3.6 = 15 m/s; v = 0; a = \u22125 m/s\u00b2.</li>
      <li>Choose v\u00b2 = u\u00b2 + 2as (time is not given).</li>
      <li>0 = 15\u00b2 + 2(\u22125)s \u2192 10s = 225 \u2192 s = 22.5 m.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Forgetting the minus sign on deceleration and getting a negative distance.</li>
      <li>Believing a force is needed to <i>keep</i> a body moving \u2014 by Newton's first law, force is only needed to <i>change</i> motion.</li>
      <li>Reading "area under the graph" off a distance\u2013time graph \u2014 the area trick only works on velocity\u2013time graphs.</li>
    </ul>
""")

deep('Work, Energy & Power', """

    <h3>Deep dive: energy bills, efficiency and P = Fv</h3>
    <p>Your prepaid meter charges you in <b>kilowatt-hours (kWh)</b> \u2014 the energy a 1 kW appliance uses in one hour. Since 1 kW = 1000 J/s and 1 h = 3600 s, one kWh = 3.6 \u00d7 10\u2076 J. To cost any appliance: energy (kWh) = power (kW) \u00d7 time (h), then multiply by the tariff per unit.</p>
    <p>No machine is perfect: <b>efficiency = (useful energy out \u00f7 energy in) \u00d7 100</b>, and it can never exceed 100% because friction and heat always steal a share. A generator that turns 5000 J of fuel energy into 1500 J of electricity is 30% efficient \u2014 the rest left as heat and noise, which is exactly why generators feel hot.</p>
    <div class="formula">P = W/t = Fv (power equals force times velocity when the force drives the motion)</div>
    <h3>Worked example, step by step</h3>
    <p><b>A 1.5 kW pressing iron runs for 3 hours. If your DISCO charges \u20a6100 per kWh, what is the cost?</b></p>
    <ol>
      <li>Energy = 1.5 kW \u00d7 3 h = 4.5 kWh.</li>
      <li>Cost = 4.5 \u00d7 \u20a6100 = \u20a6450.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Saying a carrier "does work" holding a load still on his head \u2014 no distance moved along the force means zero work, however tiring it feels.</li>
      <li>Mixing up the watt (power) with the joule (energy) in calculations.</li>
      <li>Using P = Fv with speed in km/h \u2014 it must be m/s.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Compare the monthly "units" on your meter with the sum of your appliances' power \u00d7 hours: a 100 W bulb left on for 10 h daily burns 1 kWh per day \u2014 30 units a month just for one bulb. Physics literally pays your light bill.</p>
""")

deep('Equilibrium of Forces & Moments', """

    <h3>Deep dive: couples, balance and stability</h3>
    <p>Two equal, opposite, parallel forces that do not share a line of action form a <b>couple</b> \u2014 it turns a body without translating it. Turning a steering wheel or a tap uses a couple; its moment is force \u00d7 distance between the forces. Equilibrium needs <i>both</i> conditions: forces balance (no sliding) and moments balance (no turning).</p>
    <p>Stability explains why a loaded trailer topples more easily when the cargo is stacked high: the higher the centre of gravity and the narrower the base, the easier a tilt moves the vertical line from the C.G. outside the base \u2014 and once that line leaves the base, the body <i>must</i> topple. Racing cars and Danfo buses that "carry load for roof" teach this law the hard way.</p>
    <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="20" y1="80" x2="300" y2="80" stroke="#475569" stroke-width="4"/>
      <polygon points="160,80 145,120 175,120" fill="#94a3b8"/>
      <line x1="60" y1="80" x2="60" y2="30" stroke="#4f46e5" stroke-width="2"/>
      <text x="40" y="24" font-size="11" fill="#4f46e5">20 N, 2 m</text>
      <line x1="260" y1="80" x2="260" y2="40" stroke="#059669" stroke-width="2"/>
      <text x="240" y="34" font-size="11" fill="#059669">10 N, 4 m</text>
      <text x="130" y="140" font-size="11" fill="#64748b">pivot</text>
      <text x="60" y="70" font-size="10" fill="#475569">20\u00d72 = 40 N m</text>
      <text x="215" y="70" font-size="10" fill="#475569">10\u00d74 = 40 N m</text>
    </svg></div>
    <h3>Worked example, step by step</h3>
    <p><b>A uniform metre rule balances at the 50 cm mark. A 20 N weight hangs at 10 cm. Where must 10 N hang to balance it?</b></p>
    <ol>
      <li>Distance of 20 N from pivot = 50 \u2212 10 = 40 cm; anticlockwise moment = 20 \u00d7 40 = 800 N cm.</li>
      <li>Let the 10 N hang at distance d on the other side: 10d = 800 \u2192 d = 80 cm \u2014 impossible, the rule is only 50 cm long on that side! So the 10 N can never balance the 20 N at 10 cm on a metre rule \u2014 a lovely "think first" twist examiners use.</li>
      <li>Sensible variant: with 10 N at the 100 cm end (d = 50), it gives 500 N cm &lt; 800, so the rule tips toward the 20 N side.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Measuring distances from the <i>end</i> of the rule instead of from the pivot.</li>
      <li>Forgetting the weight of a <i>non-uniform</i> rule acting at its own centre of gravity.</li>
      <li>Applying the principle of moments to a body that is accelerating \u2014 it only holds in equilibrium.</li>
    </ul>
""")

deep('Centripetal Force & Circular Motion', """

    <h3>Deep dive: why the force points inward</h3>
    <p>Velocity is a vector, so even at constant <i>speed</i> a body on a circle is always changing velocity \u2014 the direction rotates. That change is an acceleration aimed at the centre, a = v\u00b2/r, and Newton's second law demands a centre-seeking force F = mv\u00b2/r. There is no mysterious outward "centrifugal force" pushing the passenger sideways in a turning car: the passenger's body simply tries to go straight (first law) while the car turns inward around it.</p>
    <p>Useful companions: angular velocity \u03c9 = 2\u03c0/T (radians per second) and v = \u03c9r. Engineers <b>bank</b> curved roads \u2014 tilt the outer edge up \u2014 so that part of the normal reaction supplies the centripetal force, reducing reliance on friction on rainy days.</p>
    <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="160" cy="75" r="55" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="215" cy="75" r="6" fill="#4f46e5"/>
      <line x1="215" y1="75" x2="215" y2="25" stroke="#059669" stroke-width="2.5"/>
      <text x="222" y="30" font-size="11" fill="#059669">v (tangent)</text>
      <line x1="215" y1="75" x2="165" y2="75" stroke="#dc2626" stroke-width="2.5"/>
      <text x="150" y="95" font-size="11" fill="#dc2626">F = mv\u00b2/r (inward)</text>
    </svg></div>
    <h3>Worked example, step by step</h3>
    <p><b>A 0.5 kg stone is whirled in a horizontal circle of radius 1 m at 2 m/s. Find the tension in the string.</b></p>
    <ol>
      <li>F = mv\u00b2/r = 0.5 \u00d7 2\u00b2 \u00f7 1 = 2 N.</li>
      <li>Double the speed to 4 m/s: F = 0.5 \u00d7 16 = 8 N \u2014 four times bigger, because force scales with v\u00b2. This is why speeding around a bend quadruples the grip your tyres must supply.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Drawing "centrifugal force" on the body as if it were real.</li>
      <li>Substituting diameter where the formula wants radius.</li>
      <li>Saying the satellite needs fuel to keep orbiting \u2014 gravity supplies the centripetal force for free.</li>
    </ul>
""")

deep('Heat Energy & Thermal Expansion', """

    <h3>Deep dive: two capacities, one big difference</h3>
    <p><b>Specific heat capacity</b> c tells you the energy to raise 1 kg of a substance by 1 K: Q = mc\u0394\u03b8. Water's c = 4200 J/kgK is enormous \u2014 which is why a pot of soup stays hot long after the rice cools, and why coastal Lagos has milder evenings than the desert. <b>Specific latent heat</b> L is the energy to change state with <i>no</i> temperature change: Q = mL. During melting or boiling the thermometer stands still while energy quietly breaks bonds \u2014 the single most-tested fact in this topic.</p>
    <p>Expansion follows the same particle story: hotter particles vibrate wider and need more room. That is why transmission cables sag more at noon, railway rails need expansion gaps, and a tight bottle cap opens after running hot water over it \u2014 the metal lid expands more than the glass.</p>
    <h3>Worked example, step by step</h3>
    <p><b>Heat 0.5 kg of water from 30 \u00b0C to boiling (100 \u00b0C), then boil half of it away. (c = 4200, L = 2.26 \u00d7 10\u2076 J/kg)</b></p>
    <ol>
      <li>Heating: Q\u2081 = mc\u0394\u03b8 = 0.5 \u00d7 4200 \u00d7 70 = 147,000 J.</li>
      <li>Boiling away 0.25 kg: Q\u2082 = mL = 0.25 \u00d7 2.26 \u00d7 10\u2076 = 565,000 J.</li>
      <li>Total = 712,000 J \u2014 notice that boiling a little water needs about four times more energy than heating it: latent heat dominates.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Using Q = mc\u0394\u03b8 during a change of state, where \u0394\u03b8 is zero.</li>
      <li>Confusing c (J/kgK) with L (J/kg) and swapping the formulas.</li>
      <li>Saying the temperature rises "a little" while boiling \u2014 it does not rise at all until all liquid is gone.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Harmattan mornings feel cold because dry air is a poor conductor and your skin loses heat fast to wind (forced convection); the suya spot fans its coals to feed convection currents; and black pots absorb radiant heat faster than shiny ones \u2014 every kitchen is a heat-transfer laboratory.</p>
""")

deep('Current Electricity & Ohm\u2019s Law', """

    <h3>Deep dive: resistance, household wiring and safety</h3>
    <p>Resistance grows with length, shrinks with thickness, and rises with temperature in metals: R = \u03c1L/A, where \u03c1 is the resistivity of the material. This is why long extension wires warm up and why thick cables carry cooker currents. Your house is wired in <b>parallel</b> so that every appliance gets the full 230 V and one faulty bulb cannot kill the rest \u2014 and every socket's fuse is sized just above the appliance's normal current, so a fault melts the fuse before the wiring melts.</p>
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
    <p><b>A 3 \u03a9 and a 6 \u03a9 resistor are connected in parallel across a 12 V battery. Find the total current drawn.</b></p>
    <ol>
      <li>1/R = 1/3 + 1/6 = 3/6 \u2192 R = 2 \u03a9 (parallel always ends up smaller than the smallest branch).</li>
      <li>I = V/R = 12 \u00f7 2 = 6 A.</li>
      <li>Check: branch currents 4 A + 2 A = 6 A \u2713.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Connecting the ammeter in parallel \u2014 its near-zero resistance makes a short circuit.</li>
      <li>Ignoring internal resistance r when the question says "a cell of e.m.f. 12 V and internal resistance 1 \u03a9" \u2014 then I = E/(R + r).</li>
      <li>Quoting energy in watts; energy is joules (or kWh), power is watts.</li>
    </ul>
""")

deep('Gravitational Field & Weightlessness', """

    <h3>Deep dive: fields, orbits and Nigeria in space</h3>
    <p>A gravitational field is a region where a mass feels a force; its strength g = F/m is "newtons per kilogram" \u2014 on Earth about 9.8 N/kg, on the Moon 1.6. The value of g is not the same everywhere on Earth: it is slightly smaller on mountains (farther from the centre) and at the equator (the spinning Earth bulges). Weight W = mg therefore changes with location, while mass never does.</p>
    <p>An orbit is continuous free fall: the satellite falls toward Earth, but its tangential speed carries it forward fast enough that the surface curves away at the same rate. Nigeria's own satellites \u2014 NigComSat-1 and the NigeriaSat constellation \u2014 obey exactly this bookkeeping, as does the International Space Station where astronauts float not because gravity is absent (it is still about 90% as strong up there!) but because everything falls together.</p>
    <h3>Worked example, step by step</h3>
    <p><b>An astronaut of mass 60 kg stands on the Moon (g = 1.6 m/s\u00b2). Compare his weight there with his weight on Earth (g = 10 m/s\u00b2).</b></p>
    <ol>
      <li>On Earth: W = 60 \u00d7 10 = 600 N.</li>
      <li>On the Moon: W = 60 \u00d7 1.6 = 96 N \u2014 about one-sixth.</li>
      <li>His mass is 60 kg in both places; only the pull changes.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Answering "zero gravity" for orbiting astronauts \u2014 the correct reason is free fall.</li>
      <li>Saying doubling the distance halves the force \u2014 the inverse-square law quarters it.</li>
      <li>Using kilograms as the unit of weight in W = mg answers.</li>
    </ul>
""")

deep('Simple Harmonic Motion & Waves', """

    <h3>Deep dive: the pendulum clock and the wave checklist</h3>
    <p>SHM is motion where the acceleration is proportional to the displacement and directed toward the fixed point: a \u221d \u2212x. The simple pendulum is the classic example, with period T = 2\u03c0\u221a(L/g). Two facts examiners recycle endlessly: the period does <i>not</i> depend on the mass of the bob nor on the amplitude (for small swings) \u2014 only on length and g. That is why pendulum clocks kept time through history, and why a loaded and an unloaded swing take the same time.</p>
    <p>Waves carry <b>energy</b> without carrying matter. The checklist of wave behaviour \u2014 reflection, refraction, diffraction and interference \u2014 proves light and sound are waves; polarisation additionally proves light is <i>transverse</i>. The electromagnetic spectrum in order of increasing frequency: radio, microwave, infrared, visible, ultraviolet, X-rays, gamma rays \u2014 all travel at 3 \u00d7 10\u2078 m/s in vacuum.</p>
    <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 75 Q 40 15, 70 75 T 130 75 T 190 75 T 250 75 T 310 75" fill="none" stroke="#4f46e5" stroke-width="2.5"/>
      <line x1="10" y1="75" x2="310" y2="75" stroke="#94a3b8" stroke-dasharray="4 4"/>
      <line x1="70" y1="75" x2="70" y2="45" stroke="#dc2626" stroke-width="1.5"/>
      <text x="76" y="50" font-size="10" fill="#dc2626">amplitude</text>
      <line x1="70" y1="125" x2="190" y2="125" stroke="#059669" stroke-width="1.5"/>
      <text x="100" y="140" font-size="10" fill="#059669">one wavelength \u03bb</text>
      <text x="230" y="40" font-size="10" fill="#64748b">crest</text>
      <text x="150" y="105" font-size="10" fill="#64748b">trough</text>
    </svg></div>
    <h3>Worked example, step by step</h3>
    <p><b>A pendulum of length 1 m swings where g = 10 m/s\u00b2. Find its period. (\u03c0\u00b2 \u2248 10)</b></p>
    <ol>
      <li>T = 2\u03c0\u221a(L/g) = 2\u03c0\u221a(0.1).</li>
      <li>T\u00b2 = 4\u03c0\u00b2 (0.1) = 4 \u00d7 10 \u00d7 0.1 = 4 \u2192 T = 2 s. Squaring first is the clean trick.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Expecting a heavier bob to swing slower \u2014 mass is irrelevant.</li>
      <li>Feeding L in centimetres into T = 2\u03c0\u221a(L/g); convert to metres.</li>
      <li>Confusing period (seconds per swing) with frequency (swings per second) \u2014 they are reciprocals.</li>
    </ul>
""")

deep('Atomic Structure, Radioactivity & Nuclear Energy', """

    <h3>Deep dive: balancing decays and running half-lives</h3>
    <p>Nuclear equations must balance in <b>mass number</b> (top) and <b>atomic number</b> (bottom). Alpha emission sheds a helium nucleus: mass \u22124, charge \u22122. Beta emission turns a neutron into a proton plus an ejected electron: mass unchanged, charge +1. Example: \u00b2\u00b3\u2078U \u2192 \u00b2\u00b3\u2074Th + \u2074\u2082He balances 238 = 234 + 4 and 92 = 90 + 2.</p>
    <p>Half-life chains are multiplication, not subtraction: after n half-lives, fraction left = (1/2)\u207f. Nigeria runs this science at the Nigeria Research Reactor-1 (NIRR-1) in Zaria, used for isotope production and training \u2014 radioactive isotopes also date archaeological finds (carbon-14), trace disease in medicine, and kill cancer cells in radiotherapy.</p>
    <h3>Worked example, step by step</h3>
    <p><b>A sample's activity falls from 800 counts/min to 100 counts/min in 6 hours. Find the half-life.</b></p>
    <ol>
      <li>800 \u2192 400 \u2192 200 \u2192 100: three halvings.</li>
      <li>3 half-lives = 6 h \u2192 half-life = 2 h.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Thinking two half-lives remove all activity \u2014 the sample halves forever, never reaching zero on paper.</li>
      <li>Writing beta decay as losing a proton \u2014 the proton number <i>increases</i>.</li>
      <li>Confusing fission (splitting, reactors) with fusion (joining, the Sun).</li>
    </ul>
""")

deep('Projectile Motion', """

    <h3>Deep dive: the three formulae, derived once</h3>
    <p>Split the launch speed u into u\u2093 = u cos \u03b8 (never changes) and u\u1d67 = u sin \u03b8 (fights gravity). Time of flight T = 2u sin \u03b8/g (up and back down). Maximum height H = u\u00b2 sin\u00b2\u03b8/2g (vertical speed zero at the top). Range R = u\u00b2 sin 2\u03b8/g, largest at 45\u00b0 because sin 2\u03b8 peaks there. Complementary angles (30\u00b0 and 60\u00b0) give the <i>same</i> range \u2014 a favourite multiple-choice sting.</p>
    <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 130 Q 160 -40, 300 130" fill="none" stroke="#4f46e5" stroke-width="2.5"/>
      <line x1="20" y1="130" x2="80" y2="60" stroke="#059669" stroke-width="2"/>
      <text x="86" y="60" font-size="10" fill="#059669">u at \u03b8</text>
      <line x1="160" y1="45" x2="160" y2="130" stroke="#94a3b8" stroke-dasharray="4 4"/>
      <text x="166" y="90" font-size="10" fill="#64748b">H (v\u1d67 = 0 at top)</text>
      <line x1="20" y1="138" x2="300" y2="138" stroke="#dc2626" stroke-width="1.5"/>
      <text x="140" y="150" font-size="10" fill="#dc2626">range R</text>
    </svg></div>
    <h3>Worked example, step by step</h3>
    <p><b>A ball is kicked at 20 m/s at 30\u00b0 above the ground (g = 10 m/s\u00b2). Find the time of flight and maximum height.</b></p>
    <ol>
      <li>u sin \u03b8 = 20 \u00d7 0.5 = 10 m/s.</li>
      <li>T = 2 \u00d7 10 \u00f7 10 = 2 s.</li>
      <li>H = 10\u00b2 \u00f7 (2 \u00d7 10) = 100 \u00f7 20 = 5 m.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Using u instead of u sin \u03b8 in the vertical formulae.</li>
      <li>Believing velocity is zero at the top \u2014 only the <i>vertical</i> component is; the ball still moves sideways.</li>
      <li>Forgetting the horizontal velocity stays constant, so the ball at the top is not "at rest".</li>
    </ul>
    <h3>See it around you</h3>
    <p>A free-kick over the wall, water arcing from a broken pipe, a mango thrown across the compound \u2014 every arc is the same parabola. Goalkeepers who "read" the parabola are doing projectile physics at full sprint.</p>
""")

open(CUR, 'w').write(s)
print('physics lessons deepened; chars:', len(s))
