"""Deep-expand JSS Basic Science lessons (batch 6b)."""
import textwrap

CUR = '/home/user/index.html'
s = open(CUR).read()

def deep(title, extra):
    global s
    t = s.index("title: '%s'," % title)
    c = s.index('content: `', t)
    k = s.index('cards:', c)
    std = s.find('\n          `,', c)
    block = textwrap.indent(textwrap.dedent(extra).strip('\n'), '            ')
    if std != -1 and std < k:
        s = s[:std] + '\n' + block + '\n' + s[std:]
    else:
        cl = s.rfind('`', c, k)
        assert cl > c
        s = s[:cl] + '\n' + block + '\n            ' + s[cl:]

deep('Living Things & Health', """

    <h3>Deep dive: MR NIGER D, explained properly</h3>
    <ul>
      <li><b>Movement</b> — animals move their whole bodies; plants move parts (roots grow toward water, shoots toward light).</li>
      <li><b>Respiration</b> — breaking down food to release <b>energy</b> in every living cell (not the same as breathing, which is just gas exchange).</li>
      <li><b>Nutrition</b> — plants make their own food (photosynthesis); animals depend on plants or other animals.</li>
      <li><b>Irritability</b> — responding to changes (you pull your hand from a hot pot; the sensitive-plant folds when touched).</li>
      <li><b>Growth</b> — a permanent increase in size and mass; a balloon inflating is NOT growth because it is reversible and not built from food.</li>
      <li><b>Excretion</b> — removing <b>chemical waste made inside cells</b> (urine, sweat, CO₂). Removing undigested faeces is <b>egestion</b>, not excretion — examiners love this distinction.</li>
      <li><b>Reproduction</b> — producing new ones, so life continues.</li>
      <li><b>Death</b> — the lifespan ends; non-living things do not die because they never lived.</li>
    </ul>
    <h3>Health habits that actually matter</h3>
    <p><b>Personal hygiene</b>: bathe daily, brush twice, wash hands before eating and after the toilet, keep nails short. <b>Community hygiene</b>: clean water, covered refuse bins, proper toilets, no stagnant water around the house (that is where mosquitoes breed). <b>Balanced diet</b>: one of each class every day — carbohydrates (energy), proteins (growth), fats, vitamins, minerals, fibre and water.</p>
    <h3>Common diseases and their prevention</h3>
    <ul>
      <li><b>Malaria</b> — female Anopheles mosquito → sleep under treated nets, drain puddles.</li>
      <li><b>Cholera & typhoid</b> — contaminated food/water → boil or treat water, wash foods, wash hands.</li>
      <li><b>Ringworm & scabies</b> — shared towels/clothes → personal items stay personal.</li>
    </ul>
    <h3>Exam watch</h3>
    <ul>
      <li>Respiration happens in <b>every living cell</b>, day and night — breathing is only the delivery system.</li>
      <li>Excretion ≠ egestion (see above).</li>
      <li>Viruses are the odd ones out: they show living characteristics <b>only inside a living cell</b>.</li>
    </ul>
""")

deep('Energy: Forms & Sources', """

    <h3>Deep dive: the eight forms with everyday examples</h3>
    <ul>
      <li><b>Light</b> — sun, lamp, firefly.</li>
      <li><b>Heat (thermal)</b> — sun, fire, a hot iron.</li>
      <li><b>Sound</b> — voice, drum, generator noise.</li>
      <li><b>Chemical</b> — stored in food, fuel, batteries, matches.</li>
      <li><b>Electrical</b> — wires, sockets, appliances.</li>
      <li><b>Kinetic</b> — anything moving: a running boy, a fan blade.</li>
      <li><b>Potential</b> — stored by position: water in an overhead tank, a stretched catapult.</li>
      <li><b>Nuclear</b> — stored in the centre of atoms (power stations, the sun).</li>
    </ul>
    <h3>Transformations you can trace at home</h3>
    <p><b>Generator</b>: chemical (petrol) → kinetic (engine) → electrical → light (bulb). <b>Solar panel</b>: light → electrical. <b>Battery torch</b>: chemical → electrical → light (+ a little heat). <b>Eating and climbing</b>: chemical (food) → kinetic + potential. <b>Mic</b>: sound → electrical; the loudspeaker reverses it.</p>
    <div class="formula">Law of conservation of energy: energy cannot be created or destroyed — it only changes form. The unit is the joule (J).</div>
    <h3>Renewable vs non-renewable</h3>
    <p><b>Renewable</b> sources replace themselves: sun, wind, flowing water, biomass, waves. <b>Non-renewable</b> sources run out: coal, petroleum (petrol, kerosene, diesel), natural gas, nuclear fuel. Nigeria runs mostly on petroleum and gas, with growing solar use — which is why fuel price and sunshine both matter to your household.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Energy is never "used up" — it <b>degrades</b> into wasted heat; total energy is conserved.</li>
      <li>Food and fuel store <b>chemical</b> energy — the most common wrong answer is "heat energy".</li>
      <li>Solar is renewable; petroleum is not, even though both come "from the sun" originally.</li>
    </ul>
""")

deep('Introduction to Science: Measurement & Laboratory Safety', """

    <h3>Deep dive: fundamental quantities, units and instruments</h3>
    <table class="mb-3 w-full border-collapse text-left text-xs">
      <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">Quantity</th><th class="border border-slate-200 p-1.5">SI unit</th><th class="border border-slate-200 p-1.5">Instrument</th></tr></thead>
      <tbody>
        <tr><td class="border border-slate-200 p-1.5">Length</td><td class="border border-slate-200 p-1.5">metre (m)</td><td class="border border-slate-200 p-1.5">metre rule, tape, vernier calipers</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Mass</td><td class="border border-slate-200 p-1.5">kilogram (kg)</td><td class="border border-slate-200 p-1.5">beam/electronic balance</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Time</td><td class="border border-slate-200 p-1.5">second (s)</td><td class="border border-slate-200 p-1.5">stopwatch, clock</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Temperature</td><td class="border border-slate-200 p-1.5">kelvin (K)</td><td class="border border-slate-200 p-1.5">thermometer</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Electric current</td><td class="border border-slate-200 p-1.5">ampere (A)</td><td class="border border-slate-200 p-1.5">ammeter</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Volume (liquid)</td><td class="border border-slate-200 p-1.5">cubic metre (m³)</td><td class="border border-slate-200 p-1.5">measuring cylinder, burette, pipette</td></tr>
      </tbody>
    </table>
    <p>Derived quantities are built from these: area = m², volume = m³, speed = m/s, density = kg/m³.</p>
    <h3>Measuring liquids correctly</h3>
    <p>Read the <b>meniscus</b> — the curved surface of the liquid — at <b>eye level</b> from the bottom of the curve. Looking from above or below gives a <b>parallax error</b>, the most common lab mistake.</p>
    <h3>Laboratory safety rules</h3>
    <ul>
      <li>No eating, drinking or running in the lab; follow the teacher's instructions exactly.</li>
      <li>Never taste or directly smell chemicals — waft the vapour toward you with your hand.</li>
      <li>Report spills and breakages at once; know where the fire extinguisher and first-aid box are.</li>
      <li>Point the mouths of heated test tubes away from people.</li>
    </ul>
    <h3>Exam watch</h3>
    <ul>
      <li><b>Mass vs weight</b>: mass (kg) is the amount of matter and never changes; weight (N) is gravity's pull and changes with location.</li>
      <li>The SI unit of temperature is the <b>kelvin</b>, not the degree Celsius (°C = K − 273).</li>
      <li>A metre rule reads to 0.1 cm; vernier calipers read to 0.01 cm — quote the precision.</li>
    </ul>
""")

deep('Matter, Its Properties & Changes', """

    <h3>Deep dive: the particle theory</h3>
    <p>All matter is made of <b>tiny particles</b> in constant motion. Evidence: <b>diffusion</b> (perfume spreads across a room; a drop of ink colours still water), <b>Brownian motion</b> (smoke particles jiggle under a microscope because invisible air particles bombard them), and <b>evaporation</b>. Particle arrangement explains the states: <b>solids</b> — packed, fixed positions, definite shape and volume; <b>liquids</b> — close but sliding, definite volume, shape of the container; <b>gases</b> — far apart, fast, filling any container.</p>
    <h3>State changes</h3>
    <div class="formula">solid →(melting)→ liquid →(evaporation/boiling)→ gas; reversed: condensation, freezing; solid →(sublimation)→ gas (camphor, iodine)</div>
    <p><b>Evaporation</b> happens at any temperature, from the surface only, slowly; <b>boiling</b> happens at one fixed temperature throughout the liquid, fast, with bubbles.</p>
    <h3>Physical vs chemical changes</h3>
    <ul>
      <li><b>Physical</b> — no new substance, usually reversible: melting ice, dissolving salt, tearing paper, boiling water.</li>
      <li><b>Chemical</b> — new substances form, usually irreversible: burning wood, rusting iron, souring milk, digesting food, a candle burning.</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>Classify: (a) melting candle wax (b) the candle wick burning (c) dissolving sugar in tea.</b> (a) physical — cooling re-solidifies it; (b) chemical — produces CO₂, water vapour and soot; (c) physical — evaporate the tea and the sugar returns.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>A burning candle shows BOTH changes: melting wax (physical) and burning wick (chemical).</li>
      <li>Dissolving is physical, not chemical — the classic trap.</li>
      <li>Sublimation skips the liquid state entirely: camphor "disappears" into vapour.</li>
    </ul>
""")

deep('Acids, Bases & Salts in Everyday Life', """

    <h3>Deep dive: the chemicals in your kitchen</h3>
    <ul>
      <li><b>Everyday acids</b>: citrus fruits (citric acid), vinegar (ethanoic acid), sour milk (lactic acid), stomach juice (hydrochloric acid), carbonated drinks (carbonic acid). Acids taste <b>sour</b> and turn blue litmus <b>red</b>.</li>
      <li><b>Everyday bases</b>: soap, ash, lime (calcium oxide/hydroxide), baking soda (mild), toothpaste. Bases feel <b>soapy</b>, taste bitter, and turn red litmus <b>blue</b>. Soluble bases are called <b>alkalis</b>.</li>
      <li><b>Salts</b>: table salt (sodium chloride), Epsom salt (bath salts), baking soda in cooking, gunpowder salts in fertilisers.</li>
    </ul>
    <h3>The pH scale, simply</h3>
    <p>0–14: below 7 acidic, 7 neutral (pure water), above 7 basic. The lower the number, the stronger the acid; the higher, the stronger the base. Universal indicator shows a rainbow of colours across the scale — red/orange for acids, green for neutral, blue/purple for bases.</p>
    <h3>Neutralisation in daily life</h3>
    <ul>
      <li><b>Indigestion</b>: an antacid (a mild base) neutralises excess stomach acid.</li>
      <li><b>Acidic farm soil</b>: farmers add lime (a base) to neutralise it before planting.</li>
      <li><b>Bee sting (acidic)</b> → soothe with a mild base like baking soda solution; <b>wasp sting (basic)</b> → use a weak acid like vinegar.</li>
      <li>Acid rain over cities is neutralised in lakes by limestone beds.</li>
    </ul>
    <h3>Exam watch</h3>
    <ul>
      <li>Litmus: <b>acid → red</b>, <b>base → blue</b> (remember "blue to red = acid").</li>
      <li>Never taste laboratory chemicals — "sour" applies to safe food acids only.</li>
      <li>All alkalis are bases, but not all bases are alkalis (only the soluble ones are).</li>
    </ul>
""")

deep('Energy: Forms, Transformation & Simple Machines', """

    <h3>Deep dive: work, and what machines really do</h3>
    <div class="formula">Work = Force × distance moved in the force's direction (joules) &nbsp;·&nbsp; MA = Load ÷ Effort &nbsp;·&nbsp; VR = effort distance ÷ load distance &nbsp;·&nbsp; Efficiency = MA/VR × 100%</div>
    <p>A machine never reduces the <b>work</b> — it makes work <b>easier</b>: less effort over a longer distance, or a force in a more convenient direction. Friction keeps efficiency below 100%.</p>
    <h3>The simple machines, with local examples</h3>
    <ul>
      <li><b>Lever</b> — class 1: fulcrum in the middle (scissors, crowbar, see-saw); class 2: load in the middle (wheelbarrow, bottle opener, nutcracker); class 3: effort in the middle (broom, forearm, fishing rod).</li>
      <li><b>Pulley</b> — a single fixed pulley changes direction (flagpole, well rope); a block-and-tackle multiplies force.</li>
      <li><b>Inclined plane</b> — ramps for wheelbarrows, stairs, ladders.</li>
      <li><b>Wheel and axle</b> — steering wheel, door knob, screwdriver handle.</li>
      <li><b>Gears &amp; belts</b> — bicycle gears, generator fan belts.</li>
      <li><b>Screw</b> — an inclined plane wrapped around a cylinder (bolts, jar lids).</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>A boy pushes a wheelbarrow, applying 200 N over 5 m. Find the work done. If the load is 600 N, what is the MA?</b> Work = 200 × 5 = <b>1,000 J</b>. MA = 600 ÷ 200 = <b>3</b> — the wheelbarrow triples his force, but his hands travel three times farther than the load.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>No movement in the force's direction = no work done, however hard you push.</li>
      <li>Identify lever class by what sits in the <b>middle</b>.</li>
      <li>Oiling raises efficiency by reducing friction — it does not change the VR.</li>
    </ul>
""")

deep('Reproduction, Growth & Drug Abuse', """

    <h3>Deep dive: two ways to reproduce</h3>
    <p><b>Asexual</b> reproduction needs one parent; offspring are identical copies: bacteria splitting, yeast budding, cassava from stem cuttings, yam from tubers. <b>Sexual</b> reproduction fuses two sex cells (gametes) — sperm and ovum in humans — so offspring are a <b>mix</b> of both parents. That variety is why siblings resemble but never copy each other.</p>
    <h3>Adolescence: growth and development</h3>
    <p><b>Growth</b> = increase in size/mass (measurable); <b>development</b> = increasing skill and maturity (not directly measurable). In <b>puberty</b>, boys: voice deepens, facial hair, shoulders broaden, sperm production starts. Girls: breasts develop, hips widen, menstruation begins. Mood swings are normal — the body is changing faster than the brain expects.</p>
    <h3>Drug abuse: facts, not fear</h3>
    <ul>
      <li><b>Drug abuse</b> = taking drugs without medical need, or misusing prescribed ones. Commonly abused in Nigeria: alcohol, tobacco, cannabis (Indian hemp), tramadol and codeine syrups, and sometimes sedatives.</li>
      <li><b>Effects</b>: addiction, liver and lung damage, mental illness, exam failure, crime, broken families; injected drugs risk HIV.</li>
      <li><b>Prevention</b>: say no and mean it, choose friends carefully, talk to a trusted adult, stay busy with sport/skills; <b>NDLEA</b> fights trafficking, <b>NAFDAC</b> regulates food and drugs.</li>
    </ul>
    <h3>Exam watch</h3>
    <ul>
      <li>Taking medicine exactly as prescribed is NOT drug abuse.</li>
      <li>Asexual offspring are genetically <b>identical</b>; sexual offspring are <b>varied</b> — this contrast is examinable every year.</li>
      <li>Menstruation is a sign of a healthy body, not an illness — and pregnancy is possible from the first cycle.</li>
    </ul>
""")

deep('Light, Sound & Basic Electricity', """

    <h3>Deep dive: light travels straight — and that explains shadows</h3>
    <p>Light travels in <b>straight lines</b> (proved by pinhole cameras and sharp shadows) and needs <b>no medium</b> — sunlight crosses empty space. <b>Reflection</b>: the angle of incidence equals the angle of reflection (plane mirrors). <b>Refraction</b>: light bends when it enters a different medium — that is why a pencil looks bent in a glass of water and a pool looks shallower than it is. <b>Eclipses</b>: a solar eclipse when the moon blocks the sun; a lunar eclipse when the earth's shadow covers the moon.</p>
    <h3>Sound needs something to travel through</h3>
    <p>Sound is a <b>vibration</b> carried by a medium (solid, liquid or gas) — it <b>cannot</b> travel through a vacuum (no sound in space). Sound travels fastest in solids, slowest in gases. An <b>echo</b> is sound reflecting off a distant surface; bats and ultrasound scanners use reflected sound.</p>
    <h3>Basic electricity</h3>
    <p>A simple circuit needs a <b>source</b> (cell/battery), <b>conducting wires</b>, a <b>load</b> (bulb) and a <b>switch</b> — and the path must be <b>complete</b>. <b>Conductors</b> let current flow (metals: copper, aluminium, iron; also carbon and impure water); <b>insulators</b> block it (rubber, plastic, dry wood, glass) — which is why wires are coated in plastic. In <b>series</b>, components share one path (one bulb dies, all go out — old Christmas lights); in <b>parallel</b>, each bulb has its own path (homes are wired this way).</p>
    <h3>Worked thinking</h3>
    <p><b>Why does the bulb light only when the switch is closed?</b> Closing the switch completes the path, so electrons can flow continuously from the cell through the bulb and back. An open switch leaves a gap — no flow, no light.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Light: no medium needed. Sound: medium essential. Opposite behaviours, favourite question.</li>
      <li>Pure water is a poor conductor; it is the dissolved salts that conduct — never handle sockets with wet hands.</li>
      <li>Never fuse or repair a live appliance; switch off at the source first.</li>
    </ul>
""")

open(CUR, 'w', encoding='utf-8').write(s)
print('JSS Basic Science batch 6b written: 8 topics')
