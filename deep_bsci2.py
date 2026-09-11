"""Deep-lesson campaign batch 2: JSS1 Basic Science — Energy + Measurement & Lab Safety."""
import re
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()

ENERGY = """
            <h3>1. What is energy?</h3>
            <p><b>Energy</b> is the ability or capacity to do <b>work</b>. Anything that moves, heats, glows, sounds or changes needs energy to do so. A boy who kicks a ball uses energy; the moving ball can then do work by knocking down a tin. The SI unit of energy is the <b>joule (J)</b> — the same unit as work, because energy and work are two faces of the same thing.</p>
            <div class="worked"><b>Think about it:</b> food is called 'fuel for the body' because, like petrol in an engine, it stores energy that is released to power everything you do — even breathing and thinking while you sleep.</div>

            <h3>2. Forms of energy</h3>
            <ul>
              <li><b>Kinetic energy</b> — the energy of motion: a running boy, a moving car, flowing water, wind.</li>
              <li><b>Potential energy</b> — stored energy due to position or condition: water held behind a dam, a stretched catapult, a stone raised above the ground.</li>
              <li><b>Heat (thermal) energy</b> — energy that flows from hot to cold bodies: fire, the Sun, a hot iron.</li>
              <li><b>Light energy</b> — energy that travels in waves and lets us see: sunlight, lamps, flames.</li>
              <li><b>Sound energy</b> — energy produced by vibrating bodies: drums, voices, bells.</li>
              <li><b>Chemical energy</b> — energy stored in foods, fuels and batteries, released when they burn, digest or react.</li>
              <li><b>Electrical energy</b> — energy of moving charges in a circuit: mains supply, batteries, lightning.</li>
              <li><b>Nuclear (atomic) energy</b> — the vast energy locked in the centres (nuclei) of atoms, released in nuclear power stations and in the Sun.</li>
            </ul>
            <div class="formula">EXAM CODE: 'K-P-H-L-S-C-E-N' — Kinetic, Potential, Heat, Light, Sound, Chemical, Electrical, Nuclear. Expect 'name six forms of energy' questions.</div>

            <h3>3. The law of conservation of energy</h3>
            <p><b>Energy cannot be created or destroyed; it can only be changed (transformed) from one form to another.</b> The total amount of energy always stays the same. When a bulb is lit, electrical energy does not disappear — it becomes light AND heat. No device turns 100% of its energy into the form we want; the 'lost' part usually ends up as heat.</p>
            <div class="worked"><b>Transformation chains to memorise:</b><br>
            Torch: chemical (battery) → electrical → light (+ heat).<br>
            Candle: chemical (wax) → heat + light.<br>
            Battery-powered fan: chemical → electrical → kinetic.<br>
            Electric generator: kinetic (turbine) → electrical.<br>
            Photosynthesis: light → chemical (food).<br>
            Clapping hands: kinetic → sound (+ heat).</div>

            <h3>4. The Sun — the ultimate source</h3>
            <p>Almost all energy on Earth can be traced back to the <b>Sun</b>. Plants trap sunlight by photosynthesis and store it as chemical energy in food. Animals (including us) get that energy by eating plants or plant-eaters. Fossil fuels (coal, petroleum, gas) are the buried, changed remains of ancient plants and animals — so even petrol is stored sunshine! Wind and the water cycle are driven by the Sun's uneven heating of the Earth.</p>

            <h3>5. Renewable and non-renewable sources</h3>
            <ul>
              <li><b>Renewable sources</b> can be used again and again without running out: <b>sunlight (solar)</b>, <b>wind</b>, <b>flowing/falling water (hydro)</b>, and <b>biomass</b> when replanted.</li>
              <li><b>Non-renewable sources</b> exist in fixed amounts and will be used up: <b>coal, petroleum (crude oil) and natural gas</b> — the fossil fuels. Nigeria's economy depends heavily on petroleum, yet it formed over millions of years and cannot be replaced in our lifetime.</li>
            </ul>

            <h3>6. How fossil fuels formed — and their problems</h3>
            <p>Millions of years ago, dead plants and tiny sea organisms were buried under layers of mud. Heat and pressure deep underground slowly changed them into <b>coal, petroleum and natural gas</b>. Burning them releases the stored energy quickly — but also smoke, gases and carbon dioxide that pollute the air and drive climate change, and supplies are limited.</p>

            <h3>7. Solar energy</h3>
            <ul>
              <li>Nigeria enjoys strong sunshine all year — solar energy is one of our biggest natural gifts.</li>
              <li><b>Solar panels (photovoltaic cells)</b> convert sunlight directly into electricity — used for street lights, phone charging, water pumping, calculators and home power systems.</li>
              <li>Other uses: drying crops, fish and clothes; solar water heaters; daylight for studying (free light!).</li>
              <li>Advantages: clean, silent, endless. Limitation: no sunshine at night or in heavy rain, so batteries store the energy for later.</li>
            </ul>

            <h3>8. Hydroelectric power — Nigeria's dams</h3>
            <p>In a hydroelectric dam, water stored at a height has <b>potential energy</b>. Released water gains <b>kinetic energy</b> as it falls and spins huge <b>turbines</b>, which turn <b>generators</b> that produce electricity. Nigeria's major hydro stations include <b>Kainji</b>, <b>Jebba</b> and <b>Shiroro</b> on the Niger river system. Hydro power is clean and renewable, but dams are expensive to build and can flood farmland and settlements.</p>
            <svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy flow diagram from the sun to electricity">
              <circle cx="45" cy="40" r="22" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
              <text x="45" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Sun</text>
              <path d="M70 40 L130 40" stroke="#64748b" stroke-width="3" marker-end="none"/>
              <rect x="135" y="20" width="90" height="42" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
              <text x="180" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Plants (food)</text>
              <path d="M225 41 L285 41" stroke="#64748b" stroke-width="3"/>
              <rect x="290" y="20" width="120" height="42" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
              <text x="350" y="46" text-anchor="middle" font-size="12" font-weight="700" fill="#3730a3">People & animals</text>
              <path d="M180 62 L180 100" stroke="#64748b" stroke-width="3"/>
              <rect x="120" y="102" width="130" height="42" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
              <text x="185" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="#713f12">Fossil fuels (buried)</text>
              <path d="M250 123 L310 123" stroke="#64748b" stroke-width="3"/>
              <rect x="315" y="102" width="105" height="42" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
              <text x="367" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="#7f1d1d">Electricity/heat</text>
              <text x="230" y="178" text-anchor="middle" font-size="12" fill="#475569">Even petrol is stored sunshine — energy only changes form.</text>
            </svg>

            <h3>9. Biomass: firewood and its problems</h3>
            <p>Most Nigerian homes still cook with <b>firewood and charcoal</b> (biomass energy). Burning wood releases the sunlight the tree stored. The problems: cutting trees faster than they grow causes <b>deforestation</b> and desert spread; smoke from open fires causes coughs and eye problems, especially for women and children. Better ways: plant a tree for every one cut, use improved (smoke-reducing) stoves, and where possible use kerosene or gas carefully.</p>

            <h3>10. Conservation of energy in daily life</h3>
            <p>'Energy conservation' in this sense means <b>using energy wisely so less is wasted</b>:</p>
            <ul>
              <li>Switch off lights, fans and TVs when leaving a room.</li>
              <li>Use energy-saving (LED) bulbs — same light, far less electricity.</li>
              <li>Cover pots while cooking — food cooks faster with less fuel.</li>
              <li>Dry clothes in the sun instead of using electricity.</li>
              <li>Keep refrigerator doors closed and fridges away from hot walls.</li>
              <li>Walk or cycle short distances — your legs are the cheapest engine.</li>
            </ul>
            <div class="formula">EXAM TIP: 'Conservation of energy' has TWO meanings — (1) energy cannot be created or destroyed (the law), and (2) using energy wisely to avoid waste. Read the question carefully and answer the one being asked.</div>

            <h3>11. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define energy and give its SI unit. <i>Ans: the capacity to do work; the joule (J).</i></li>
              <li><b>Q2.</b> State the law of conservation of energy. <i>Ans: energy cannot be created or destroyed, only transformed from one form to another.</i></li>
              <li><b>Q3.</b> Give the energy changes in (a) a battery-powered fan, (b) a candle, (c) a hydroelectric dam. <i>Ans: (a) chemical → electrical → kinetic; (b) chemical → heat + light; (c) potential → kinetic → electrical.</i></li>
              <li><b>Q4.</b> Classify: sunlight, coal, wind, petroleum, falling water. <i>Ans: renewable — sunlight, wind, falling water; non-renewable — coal, petroleum.</i></li>
              <li><b>Q5.</b> Name two Nigerian hydroelectric stations. <i>Ans: Kainji and Jebba (also Shiroro).</i></li>
              <li><b>Q6.</b> Give three ways of conserving energy at home. <i>Ans: switching off unused appliances, using LED bulbs, covering pots while cooking (also: sun-drying clothes, walking short distances).</i></li>
            </ul>
            <div class="formula">SUMMARY: Energy is the capacity to do work and exists in many forms, all traceable to the Sun. It is never lost, only transformed. Sources are renewable (solar, hydro, wind, biomass) or non-renewable (fossil fuels), and wise use — conservation — stretches every source further.</div>
"""

MEASURE = """
            <h3>1. What is science?</h3>
            <p><b>Science</b> is the careful study of the natural world through <b>observation</b> and <b>experiment</b>, so that facts — not guesses — explain how things work. Its three main branches are <b>biology</b> (living things), <b>chemistry</b> (substances and their changes) and <b>physics</b> (energy, motion and matter). Basic Science joins all three to prepare you for the senior subjects.</p>
            <div class="worked"><b>The scientist's method:</b> observe a problem → guess a possible explanation (hypothesis) → test it by experiment → record measurements → draw a conclusion. Every discovery you read about followed steps like these.</div>

            <h3>2. What is measurement?</h3>
            <p><b>Measurement</b> is comparing a quantity with an accepted standard called a <b>unit</b>. Every measurement has two parts: a <b>number</b> and a <b>unit</b> — '5' means nothing until you say 5 <b>metres</b>, 5 <b>kilograms</b> or 5 <b>minutes</b>. Scientists worldwide use the <b>SI system</b> (Systeme International) so results can be shared and compared.</p>

            <h3>3. Base quantities and their SI units</h3>
            <ul>
              <li><b>Length</b> — metre (m); smaller: centimetre (cm = 1/100 m), millimetre (mm = 1/1000 m); larger: kilometre (km = 1000 m).</li>
              <li><b>Mass</b> — kilogram (kg); smaller: gram (g = 1/1000 kg); 1 tonne = 1000 kg.</li>
              <li><b>Time</b> — second (s); 60 s = 1 minute, 60 minutes = 1 hour, so 1 h = 3600 s.</li>
              <li><b>Temperature</b> — kelvin (K); everyday scale: degrees Celsius (degC).</li>
              <li><b>Electric current</b> — ampere (A).</li>
            </ul>
            <div class="formula">CONVERSION DRILL: 1 km = 1000 m · 1 m = 100 cm = 1000 mm · 1 kg = 1000 g · 1 tonne = 1000 kg · 1 h = 3600 s.</div>

            <h3>4. Measuring length accurately</h3>
            <ul>
              <li><b>Metre rule</b> — measures to 1 mm; place it along the object with the zero exactly at the start.</li>
              <li><b>Measuring tape</b> — for longer lengths and curves (waist, fields, cloth).</li>
              <li><b>Vernier caliper</b> — measures small lengths, diameters and tube interiors accurately to <b>0.01 cm (0.1 mm)</b>.</li>
              <li><b>Micrometer screw gauge</b> — the most accurate of the school instruments, reading to <b>0.01 mm</b>; used for wire diameters and thin sheets.</li>
            </ul>
            <p><b>Parallax error</b> happens when the eye is off to one side while reading a scale, making the reading too high or too low. Prevention: always place the eye <b>directly above</b> the mark being read. Rules also suffer from <b>zero error</b> (a worn end) — start from the 10 cm mark and subtract, or check the zero first.</p>
            <div class="worked"><b>Worked example:</b> A wire measured with a micrometer reads 1.24 mm. The same wire on a metre rule would read 'about 1 mm' — the micrometer's extra digits are why scientists choose the right instrument for the size being measured.</div>

            <h3>5. Mass and weight — not the same thing</h3>
            <ul>
              <li><b>Mass</b> is the quantity of matter in a body, measured in <b>kilograms</b> with a <b>beam balance</b> (or electronic balance). Mass is the SAME everywhere — you have the same mass on Earth and on the Moon.</li>
              <li><b>Weight</b> is the pull of gravity on that mass, measured in <b>newtons</b> with a <b>spring balance</b>. Weight CHANGES with location: about 1/6 on the Moon, slightly less on a high mountain.</li>
            </ul>
            <div class="formula">WEIGHT = mass x gravity (W = mg). A 10 kg bag weighs about 10 x 10 = 100 N on Earth — but its mass stays 10 kg anywhere.</div>

            <h3>6. Measuring volume</h3>
            <ul>
              <li><b>Liquids:</b> use a <b>measuring cylinder</b> (or burette/pipette for greater accuracy). Read the bottom of the curved surface — the <b>meniscus</b> — with your eye level with it.</li>
              <li><b>Regular solids:</b> calculate from measurements: a cube's volume = length x width x height.</li>
              <li><b>Irregular solids (a stone):</b> the <b>displacement method</b> — note the water level, lower the stone in, and the rise in level equals the stone's volume.</li>
            </ul>
            <svg viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reading a measuring cylinder at the meniscus and the displacement method">
              <rect x="60" y="20" width="60" height="120" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
              <path d="M62 90 Q90 100 118 90 L118 138 Q90 138 62 138 Z" fill="#bfdbfe"/>
              <path d="M62 90 Q90 100 118 90" fill="none" stroke="#1d4ed8" stroke-width="2"/>
              <line x1="125" y1="95" x2="180" y2="95" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
              <text x="185" y="99" font-size="12" font-weight="700" fill="#7f1d1d">read the meniscus bottom</text>
              <text x="90" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Measuring cylinder</text>
              <rect x="290" y="30" width="70" height="100" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
              <rect x="300" y="90" width="50" height="38" fill="#bfdbfe"/>
              <rect x="312" y="108" width="26" height="18" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
              <text x="325" y="121" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">stone</text>
              <text x="325" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Displacement: rise = volume</text>
            </svg>

            <h3>7. Measuring time and temperature</h3>
            <ul>
              <li><b>Time:</b> stopwatches measure short intervals accurately (to 0.01 s on digital ones); clocks and watches measure everyday time. To time a pendulum, count 20 oscillations and divide — this spreads your reaction-time error over many swings.</li>
              <li><b>Temperature:</b> a <b>thermometer</b> measures hotness. The common laboratory (mercury or alcohol) thermometer uses a liquid that expands evenly with heat. Normal human body temperature is about <b>37 degC</b>; water freezes at 0 degC and boils at 100 degC. A <b>clinical thermometer</b> has a constriction that keeps the reading after removal from the body.</li>
            </ul>

            <h3>8. Derived quantities</h3>
            <p><b>Derived quantities</b> are built from the base quantities:</p>
            <ul>
              <li><b>Area</b> = length x width — square metres (m2).</li>
              <li><b>Volume</b> = length x width x height — cubic metres (m3); 1 litre = 1000 cm3.</li>
              <li><b>Density</b> = mass / volume — kg/m3 or g/cm3.</li>
              <li><b>Speed</b> = distance / time — metres per second (m/s).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A classroom 8 m long and 6 m wide has area 8 x 6 = 48 m2. A block of mass 500 g and volume 250 cm3 has density 500/250 = 2 g/cm3.</div>

            <h3>9. Laboratory rules</h3>
            <ul>
              <li>Enter only with the teacher's permission; no running, pushing or playing.</li>
              <li>Never taste, smell directly, or touch chemicals — waft fumes towards you gently if asked to smell.</li>
              <li>Read labels before using any bottle; replace stoppers and lids immediately.</li>
              <li>Point test tubes away from yourself and others when heating; heat gently and keep the tube moving.</li>
              <li>Report all spills, breakages, burns and injuries to the teacher at once.</li>
              <li>Wash your hands after every practical; keep your bench tidy.</li>
            </ul>

            <h3>10. Safety equipment and first aid in the laboratory</h3>
            <ul>
              <li><b>Protective gear:</b> safety goggles, laboratory coat/apron, closed shoes, gloves when handling rough or hot materials.</li>
              <li><b>Safety fittings:</b> fire extinguisher, sand bucket, gas taps that shut off quickly, ventilation, a working <b>first aid box</b> (cotton wool, bandages, antiseptic, iodine, plasters, scissors, gloves).</li>
              <li><b>Chemical on skin:</b> flush with plenty of running water immediately, then report.</li>
              <li><b>Clothing on fire:</b> stop, drop and roll; smother with a fire blanket — never run.</li>
              <li><b>Broken glass:</b> do not pick up with bare hands; use a brush and dustpan and dispose of it safely.</li>
            </ul>

            <h3>11. Estimation and accuracy</h3>
            <p><b>Estimation</b> is a careful approximate guess made before measuring — it tells you whether your measured answer is sensible. <b>Accuracy</b> means your measurement is close to the true value; improve it by choosing the right instrument, avoiding parallax, checking for zero error, and repeating readings and averaging them.</p>
            <div class="formula">EXAM TRAP: mass vs weight — mass (kg, beam balance, constant) and weight (N, spring balance, changes with gravity) are asked every year. Do not swap them.</div>

            <h3>12. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define measurement. <i>Ans: comparing a quantity with a standard unit; the result is a number plus a unit.</i></li>
              <li><b>Q2.</b> Give the SI units of length, mass, time, temperature and electric current. <i>Ans: metre, kilogram, second, kelvin, ampere.</i></li>
              <li><b>Q3.</b> Which instrument measures (a) the diameter of a wire, (b) the internal diameter of a tube, (c) a field's length? <i>Ans: (a) micrometer screw gauge, (b) vernier caliper, (c) measuring tape.</i></li>
              <li><b>Q4.</b> What is parallax error and how is it avoided? <i>Ans: a wrong reading from viewing a scale at an angle; keep the eye directly above the mark.</i></li>
              <li><b>Q5.</b> Convert: (a) 3.2 kg to grams, (b) 2 h to seconds, (c) 1500 m to km. <i>Ans: (a) 3200 g, (b) 7200 s, (c) 1.5 km.</i></li>
              <li><b>Q6.</b> A stone raises water in a cylinder from 40 cm3 to 58 cm3. What is its volume? <i>Ans: 58 - 40 = 18 cm3 (displacement method).</i></li>
              <li><b>Q7.</b> State three laboratory safety rules. <i>Ans: any three from: no tasting chemicals; report accidents at once; point heated test tubes away; no running; read labels before use.</i></li>
            </ul>
            <div class="formula">SUMMARY: Science builds knowledge by observation and experiment, and measurement gives it numbers with SI units. The right instrument for each quantity, careful technique (no parallax, correct meniscus reading, zero checks) and laboratory safety keep results — and scientists — accurate and safe.</div>
"""

def replace_content(title, new_content):
    global s
    m = re.findall(r"\n(\s*)title: '" + re.escape(title) + r"',", s)
    assert len(m) == 1, ('anchor', title, len(m))
    i = s.index("\n" + m[0] + "title: '" + title + "',")
    j = s.index('content: `', i)
    k = j + len('content: `')
    end = s.index('`', k)
    s = s[:k] + new_content + s[end:]

replace_content('Energy: Forms & Sources', ENERGY)
replace_content('Introduction to Science: Measurement & Laboratory Safety', MEASURE)

open(PATH, 'w', encoding='utf-8').write(s)
print('deep batch 2 written:', len(ENERGY), '+', len(MEASURE), 'chars')
