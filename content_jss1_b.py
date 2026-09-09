"""JSS1 content — Basic Science & Basic Technology: new lessons + quizzes + cards."""
import re

CUR = '/home/user/index.html'
s = open(CUR).read()


def subj_span(subject):
    si = s.index("  '%s': {" % subject)
    m = re.search(r"\n  '(?:Mathematics|Physics|Chemistry|English Language|Biology|Basic Science|Basic Technology)': \{", s[si + 10:])
    return si, (si + 10 + m.start() if m else s.index("\n};", si))


def insert_jss1_lessons(subject, lessons_text):
    global s
    first_title = lessons_text.split("title: '")[1].split("'")[0]
    if first_title in s:
        return
    si, ei = subj_span(subject)
    anchor = s.index("      JSS1: [", si) + len("      JSS1: [")
    s = s[:anchor] + "\n" + lessons_text + s[anchor:]


def set_quiz(subject, title, quiz_text):
    global s
    si, ei = subj_span(subject)
    t = s.index("          title: '%s'," % title, si)
    assert t < ei, title
    te = s.index("\n        }", t)
    seg = s[t:te]
    assert "          quiz: []," in seg, "quiz slot missing: " + title
    s = s[:t] + seg.replace("          quiz: [],", "          quiz: [\n" + quiz_text + "\n          ],", 1) + s[te:]


def add_cards(subject, title, cards_text):
    global s
    si, ei = subj_span(subject)
    t = s.index("          title: '%s'," % title, si)
    assert t < ei, title
    te = s.index("\n        }", t)
    seg = s[t:te]
    if "          cards: []," in seg:
        s = s[:t] + seg.replace("          cards: [],", "          cards: [\n" + cards_text + "\n          ],", 1) + s[te:]
    else:
        ca = s.index("          cards: [", t)
        close = s.index("\n          ],", ca)
        s = s[:close] + ",\n" + cards_text + s[close:]


# ======================================================= BASIC SCIENCE LESSONS
SCI_LESSONS = r"""        {
          title: 'Living Things & Health',
          tags: ['Characteristics of life', 'Hygiene', 'Disease prevention'],
          summary: 'What separates living from non-living things, and the everyday habits — hygiene, diet, nets — that keep a JSS student healthy.',
          content: `
            <h3>1. The characteristics of living things</h3>
            <div class="formula">M R N I G E R D — Movement, Respiration, Nutrition, Irritability, Growth, Excretion, Reproduction, Death.<br>
            If it does all of these, it is alive.</div>
            <table>
              <tr><th>Characteristic</th><th>Meaning</th></tr>
              <tr><td>Movement</td><td>Animals move whole body; plants move parts (shoots to light)</td></tr>
              <tr><td>Respiration</td><td>Releasing energy from food — every living cell, day and night</td></tr>
              <tr><td>Nutrition</td><td>Taking in food; plants make their own by photosynthesis</td></tr>
              <tr><td>Irritability</td><td>Responding to changes: eye closes at bright light</td></tr>
              <tr><td>Growth</td><td>Permanent increase in size</td></tr>
              <tr><td>Excretion</td><td>Removing waste made inside the body (urine, CO₂)</td></tr>
              <tr><td>Reproduction</td><td>Producing new individuals of the same kind</td></tr>
            </table>
            <p>A stone, a table and a cloud do <b>none</b> of these — they are non-living. A car "moves" and "breathes" fuel but cannot grow, respond or reproduce by itself.</p>
            <h3>2. Personal hygiene that actually prevents disease</h3>
            <ul>
              <li>Wash hands with soap before eating and after the toilet — it breaks the faecal–oral route of cholera and typhoid.</li>
              <li>Brush teeth morning and night; sugar left on teeth feeds decay bacteria.</li>
              <li>Bathe daily, keep nails short, and wear clean clothes to prevent skin infections.</li>
            </ul>
            <h3>3. Malaria — Nigeria's biggest killer of school days</h3>
            <p>Malaria spreads through the bite of an infected <b>female Anopheles mosquito</b>. Prevention: sleep under an <b>insecticide-treated net</b>, clear stagnant water and bush around the house, and use window screens.</p>
            <h3>4. A balanced diet</h3>
            <p>Every day your body needs carbohydrates (energy), proteins (growth and repair), fats and oils (stored energy), vitamins and minerals (regulation), roughage (digestion) and water. Eat from <b>all groups</b> — beans and egusi soup with vegetables covers several at once.</p>
            <div class="worked"><b>Worked practice:</b> Classify: (a) a mango tree, (b) a motorcycle, (c) a mushroom.<br>
            (a) Living — it grows, respires and reproduces. (b) Non-living — it cannot grow or reproduce by itself. (c) Living — fungi respire, grow and reproduce.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying plants do not respire because they photosynthesise — they do <b>both</b>.</li>
              <li>Calling sweating excretion of "water only" — sweat also carries salts and urea.</li>
              <li>Thinking malaria comes from dirty food; it comes from mosquito bites.</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
        {
          title: 'Energy: Forms & Sources',
          tags: ['Forms of energy', 'Conversions', 'Renewable sources'],
          summary: 'The forms energy takes, how it changes from one form to another, and which sources Nigeria — and the planet — can rely on.',
          content: `
            <h3>1. What energy is</h3>
            <p>Energy is the <b>ability to do work</b>. Its SI unit is the <b>joule (J)</b>. It never disappears — it only changes form.</p>
            <h3>2. The forms you must know</h3>
            <table>
              <tr><th>Form</th><th>Where you meet it</th></tr>
              <tr><td>Kinetic</td><td>Anything moving — a running pupil, a thrown ball</td></tr>
              <tr><td>Potential (stored)</td><td>A raised load, a stretched catapult, a charged battery</td></tr>
              <tr><td>Chemical</td><td>Food, fuel, batteries</td></tr>
              <tr><td>Heat (thermal)</td><td>Fire, the sun, a hot stove</td></tr>
              <tr><td>Light</td><td>The sun, lamps, fireflies</td></tr>
              <tr><td>Sound</td><td>Drums, talking, speakers</td></tr>
              <tr><td>Electrical</td><td>Wires, lightning, generators</td></tr>
            </table>
            <h3>3. Energy conversions in daily life</h3>
            <ul>
              <li>Battery: chemical → electrical. Bulb: electrical → light (+ heat).</li>
              <li>Eating: chemical energy in food → kinetic energy when you run.</li>
              <li>Drum: kinetic (hitting) → sound.</li>
              <li>Solar panel: light → electrical.</li>
            </ul>
            <h3>4. Sources: renewable vs non-renewable</h3>
            <table>
              <tr><th>Renewable (returns)</th><th>Non-renewable (runs out)</th></tr>
              <tr><td>Sunlight, wind, water (hydro), biomass</td><td>Crude oil, coal, natural gas</td></tr>
            </table>
            <p>The sun is the original source of nearly all energy on Earth — it drives wind, rain and the food chain, and ancient sunlight became fossil fuels.</p>
            <div class="worked"><b>Worked example:</b> Trace the energy in a gas cooker: chemical energy in the gas → heat and light when it burns → heat cooks the food.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Confusing energy with force — energy is measured in joules, force in newtons.</li>
              <li>Saying a battery "makes" electricity; it converts stored chemical energy.</li>
              <li>Calling electricity a <b>source</b>; it is a <b>carrier</b> made from sources.</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
"""

# ===================================================== BASIC TECHNOLOGY LESSONS
TEC_LESSONS = r"""        {
          title: 'Technology in Everyday Life',
          tags: ['What technology is', 'History', 'Benefits & costs'],
          summary: 'Technology defined, from clay pots to smartphones — how it changes food, health, communication and work, and what it costs.',
          content: `
            <h3>1. A definition that scores marks</h3>
            <p><b>Technology</b> is the application of scientific knowledge, tools and skills to solve human problems and make work easier. <b>Science</b> discovers how the world works; technology <b>uses</b> that knowledge.</p>
            <h3>2. Technology through time</h3>
            <table>
              <tr><th>Era</th><th>Examples</th></tr>
              <tr><td>Ancient</td><td>Clay pots, local blacksmith knives, mortar and pestle, canoes, calabash</td></tr>
              <tr><td>Middle</td><td>Bicycles, radio, kerosene stoves, hand pumps</td></tr>
              <tr><td>Modern</td><td>Smartphones, refrigerators, solar panels, tractors, computers, drones</td></tr>
            </table>
            <h3>3. Technology at home, on the farm, in hospital</h3>
            <ul>
              <li><b>Home:</b> refrigerator preserves food; gas cooker heats fast; blender saves labour.</li>
              <li><b>Farm:</b> tractor ploughs in hours what a hoe takes weeks to do; irrigation waters crops in the dry season.</li>
              <li><b>Health:</b> vaccines, microscopes for testing, X-ray machines, treated nets.</li>
              <li><b>Communication:</b> mobile phone and internet carry voice and text across the world in seconds.</li>
            </ul>
            <h3>4. The other side of the coin</h3>
            <ul>
              <li>Pollution from factories, generators and vehicles.</li>
              <li>Some machines replace human jobs.</li>
              <li>Over-dependence: when the network fails, we feel helpless.</li>
            </ul>
            <div class="worked"><b>Worked practice:</b> Give one ancient and one modern technology for (a) storing food, (b) sending a message.<br>
            (a) Clay pot / drying rack → refrigerator. (b) Drum beats and town crier → mobile phone.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Limiting "technology" to computers and phones — a pot, a broom and a wheelbarrow are technology too.</li>
              <li>Confusing science (knowledge) with technology (application).</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
        {
          title: 'Common Tools & Their Uses',
          tags: ['Hand tools', 'Tool care', 'Safety'],
          summary: 'The tools every workshop bench starts with, what each one does, and how to use and store them safely.',
          content: `
            <div class="diagram">
              <div class="diagram-title">Match the tool to the job</div>
              <svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple silhouettes of a hammer, screwdriver, spanner, plier and hacksaw with their uses">
                <rect x="6" y="6" width="368" height="178" rx="12" fill="#fffbeb"/>
                <g stroke="#92400e" stroke-width="3" fill="none" stroke-linecap="round">
                  <line x1="40" y1="40" x2="40" y2="78"/><rect x="28" y="26" width="24" height="14" rx="3" fill="#f59e0b" stroke="#92400e"/>
                  <line x1="120" y1="30" x2="120" y2="70"/><line x1="114" y1="70" x2="126" y2="70"/><line x1="120" y1="70" x2="120" y2="80"/>
                  <circle cx="200" cy="36" r="10"/><line x1="200" y1="46" x2="200" y2="80"/>
                  <path d="M270 30 L282 50 M292 30 L280 50 M276 40 L286 78 M284 40 L274 78"/>
                  <path d="M330 30 L360 30 M330 30 L330 70 M360 30 L360 70 M330 40 L360 40 M330 52 L360 52 M330 64 L360 64"/>
                </g>
                <g font-size="9" fill="#78350f" text-anchor="middle">
                  <text x="40" y="98">hammer</text><text x="120" y="98">screwdriver</text><text x="200" y="98">spanner</text><text x="280" y="98">plier</text><text x="345" y="98">hacksaw</text>
                  <text x="40" y="112">drives nails</text><text x="120" y="112">turns screws</text><text x="200" y="112">nuts &amp; bolts</text><text x="280" y="112">grips &amp; cuts</text><text x="345" y="112">cuts metal</text>
                </g>
                <text x="190" y="140" text-anchor="middle" font-size="10" fill="#92400e">Also know: file (smooths), try square (checks 90°), tape rule (measures), chisel (carves wood).</text>
                <text x="190" y="164" text-anchor="middle" font-size="10" fill="#92400e">Care: clean after use, oil metal parts, return tools to their rack — a loose hammer head is a flying missile.</text>
              </svg>
            </div>
            <h3>1. The core kit and its jobs</h3>
            <table>
              <tr><th>Tool</th><th>Use</th></tr>
              <tr><td>Claw hammer</td><td>Drives nails in; the claw pulls them out</td></tr>
              <tr><td>Screwdriver</td><td>Turns screws (flat or Phillips head to match)</td></tr>
              <tr><td>Spanner</td><td>Tightens and loosens nuts and bolts</td></tr>
              <tr><td>Plier</td><td>Grips, bends and cuts wires</td></tr>
              <tr><td>Hacksaw</td><td>Cuts metal pipes and rods</td></tr>
              <tr><td>File</td><td>Smooths and shapes rough edges</td></tr>
              <tr><td>Try square</td><td>Checks and marks right angles (90°)</td></tr>
              <tr><td>Tape rule</td><td>Measures lengths, even round curves</td></tr>
              <tr><td>Chisel + mallet</td><td>Carves and pares wood</td></tr>
            </table>
            <h3>2. Using and carrying tools safely</h3>
            <ul>
              <li>Cut or chisel <b>away</b> from your body; clamp the work, never hold it in your hand.</li>
              <li>Carry sharp tools point-down at your side.</li>
              <li>Use the right tool: a screwdriver is not a chisel and a spanner is not a hammer.</li>
            </ul>
            <h3>3. Tool care</h3>
            <p>Clean after use, wipe metal with an oily rag against rust, keep cutting edges protected, and store every tool on its rack so nothing gets lost — or lost on the floor where someone steps on it.</p>
            <h3>Common mistakes</h3>
            <ul>
              <li>Using a screwdriver as a chisel — the tip snaps and flies.</li>
              <li>Choosing a spanner that is too big; it rounds off the nut.</li>
              <li>Leaving tools on the floor or on top of a machine.</li>
            </ul>`,
          cards: [],
          quiz: [],
        },
"""

insert_jss1_lessons('Basic Science', SCI_LESSONS)
insert_jss1_lessons('Basic Technology', TEC_LESSONS)

# ====================================================== BASIC SCIENCE QUIZZES
set_quiz('Basic Science', 'Introduction to Science: Measurement & Laboratory Safety', """            { q: 'Which instrument measures the volume of a liquid?', options: ['Measuring cylinder', 'Metre rule', 'Stopwatch', 'Beam balance'], correct: 0,
              exp: 'A measuring cylinder is graduated in cm³ for liquids; length, time and mass need other tools.' },
            { q: 'The SI unit of mass is the:', options: ['kilogram', 'metre', 'second', 'newton'], correct: 0,
              exp: 'Mass is measured in kilograms; weight (a force) is measured in newtons.' },
            { q: '1 metre equals:', options: ['100 cm', '10 cm', '1,000 cm', '10,000 mm'], correct: 0,
              exp: 'centi means ÷100, so 1 m = 100 cm = 1,000 mm.' },
            { q: 'Which instrument reads to 0.01 mm?', options: ['Micrometer screw gauge', 'Metre rule', 'Measuring tape', 'Vernier caliper'], correct: 0,
              exp: 'The micrometer is the finest common tool; the vernier reads 0.1 mm and the rule 1 mm.' },
            { q: 'When reading a measuring cylinder you should:', options: ['read the bottom of the meniscus at eye level', 'read the top of the liquid from above', 'tilt the cylinder', 'read from below'], correct: 0,
              exp: 'Eye level avoids parallax error, and water curves up the sides so the bottom of the curve is the true level.' },
            { q: 'A micrometer reads 0.03 cm when closed. A wire reads 4.62 cm. True length?', options: ['4.59 cm', '4.65 cm', '4.62 cm', '0.03 cm'], correct: 0,
              exp: 'Subtract the zero error: 4.62 − 0.03 = 4.59 cm.' },
            { q: 'The FIRST thing to do after an acid spill in the lab is:', options: ['report to the teacher', 'taste it', 'pour water secretly', 'leave the lab silently'], correct: 0,
              exp: 'Report every accident immediately; the teacher knows the correct neutralising procedure.' },
            { q: 'When diluting a concentrated acid you must:', options: ['add acid to water slowly', 'add water to acid', 'mix both at once', 'boil it first'], correct: 0,
              exp: 'Water on acid can boil and splatter; acid into water disperses the heat safely.' },
            { q: 'A stopwatch is used to measure:', options: ['time', 'temperature', 'length', 'mass'], correct: 0,
              exp: 'Time, in seconds; take several readings and average to reduce reaction-time error.' },
            { q: '2.5 kg equals:', options: ['2,500 g', '25 g', '250 g', '25,000 g'], correct: 0,
              exp: 'kilo means ×1,000: 2.5 × 1,000 = 2,500 g.' }""")

set_quiz('Basic Science', 'Matter, Its Properties & Changes', """            { q: 'The three common states of matter are:', options: ['solid, liquid, gas', 'hot, cold, warm', 'heavy, light, medium', 'ice, water, steam only'], correct: 0,
              exp: 'Ice/water/steam are just one substance (water) showing the three states.' },
            { q: 'Which state has a fixed shape AND a fixed volume?', options: ['Solid', 'Liquid', 'Gas', 'Vapour'], correct: 0,
              exp: 'Solid particles vibrate in fixed positions; liquids keep volume but take the container\\'s shape; gases fill everything.' },
            { q: 'Ice turning to water is called:', options: ['melting', 'freezing', 'evaporation', 'condensation'], correct: 0,
              exp: 'Solid → liquid on heating is melting; the reverse is freezing.' },
            { q: 'Water vapour changing to liquid water is:', options: ['condensation', 'evaporation', 'sublimation', 'melting'], correct: 0,
              exp: 'Gas → liquid on cooling; it is why a cold bottle "sweats" in a warm room.' },
            { q: 'A drop of ink spreading through still water proves that particles:', options: ['are in constant motion with spaces between them', 'are heavy', 'cannot move', 'are visible'], correct: 0,
              exp: 'Diffusion happens because particles move and there are spaces to move into.' },
            { q: 'Density is calculated as:', options: ['mass ÷ volume', 'mass × volume', 'volume ÷ mass', 'weight + volume'], correct: 0,
              exp: 'Density = mass/volume (g/cm³ or kg/m³). A block of 240 g and 80 cm³ has density 3 g/cm³.' },
            { q: 'Which is a CHEMICAL change?', options: ['Burning wood', 'Melting ice', 'Dissolving salt', 'Tearing paper'], correct: 0,
              exp: 'Burning makes new substances (ash, smoke); the others can be reversed physically.' },
            { q: 'Dissolving sugar in tea is a:', options: ['physical change', 'chemical change', 'new substance', 'permanent change'], correct: 0,
              exp: 'Evaporate the water and the sugar returns — no new substance formed.' },
            { q: 'Camphor turning straight into gas is:', options: ['sublimation', 'evaporation', 'condensation', 'freezing'], correct: 0,
              exp: 'Solid → gas without becoming liquid; iodine and dry ice do it too.' },
            { q: 'A balloon expands as you blow because:', options: ['matter occupies space and gas fills its container', 'the rubber grows', 'air has no mass', 'balloons are elastic only'], correct: 0,
              exp: 'The blown air is matter: it has mass and takes up space, pushing the balloon out.' }""")

set_quiz('Basic Science', 'Living Things & Health', """            { q: 'The letters in "MR NIGER D" stand for the:', options: ['characteristics of living things', 'parts of a plant', 'steps of an experiment', 'food groups'], correct: 0,
              exp: 'Movement, Respiration, Nutrition, Irritability, Growth, Excretion, Reproduction, Death.' },
            { q: 'Which gas do we take in when breathing?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], correct: 0,
              exp: 'We inhale oxygen for respiration and exhale carbon dioxide.' },
            { q: 'Green plants make their own food by:', options: ['photosynthesis', 'respiration only', 'eating soil', 'drinking only'], correct: 0,
              exp: 'Using light, CO₂ and water they build glucose and release oxygen.' },
            { q: 'Which habit breaks the spread of cholera and typhoid?', options: ['Washing hands with soap before eating', 'Sharing cups', 'Skipping baths', 'Keeping nails long'], correct: 0,
              exp: 'Handwashing breaks the faecal–oral route these diseases use.' },
            { q: 'Excretion means:', options: ['removing waste made inside the body', 'eating food', 'breathing only', 'growing taller'], correct: 0,
              exp: 'Urine from kidneys, CO₂ from lungs, sweat from skin — all are excretion.' },
            { q: 'Which is NON-living?', options: ['A stone', 'A goat', 'A mango tree', 'A mushroom'], correct: 0,
              exp: 'A stone shows none of the MR NIGER D characteristics.' },
            { q: 'We brush teeth mainly to:', options: ['remove food that decay bacteria feed on', 'whiten the enamel forever', 'sharpen teeth', 'stop hunger'], correct: 0,
              exp: 'Left-over sugar feeds bacteria whose acids attack the tooth.' },
            { q: 'Malaria is spread by:', options: ['bites of infected female Anopheles mosquitoes', 'dirty water', 'shaking hands', 'cold breeze'], correct: 0,
              exp: 'Hence treated nets and clearing stagnant water are the key preventions.' },
            { q: 'A balanced diet must contain:', options: ['all food groups in the right proportion', 'only carbohydrates', 'only proteins', 'only vitamins'], correct: 0,
              exp: 'Carbohydrates, proteins, fats, vitamins, minerals, roughage and water — every day.' },
            { q: 'Sleeping under an insecticide-treated net prevents:', options: ['malaria', 'polio', 'measles', 'scurvy'], correct: 0,
              exp: 'It stops the mosquito bites that transmit malaria; vaccines cover polio and measles.' }""")

set_quiz('Basic Science', 'Energy: Forms & Sources', """            { q: 'The SI unit of energy is the:', options: ['joule', 'newton', 'watt', 'ampere'], correct: 0,
              exp: 'Energy is measured in joules; force in newtons; power in watts.' },
            { q: 'The energy of a moving object is:', options: ['kinetic energy', 'potential energy', 'chemical energy', 'nuclear energy'], correct: 0,
              exp: 'Kinetic = movement energy; stored energy is potential.' },
            { q: 'A stretched catapult stores:', options: ['potential energy', 'sound energy', 'light energy', 'no energy'], correct: 0,
              exp: 'Stored (potential) energy becomes kinetic when released.' },
            { q: 'The original source of nearly all Earth\\'s energy is:', options: ['the sun', 'the moon', 'the ocean', 'volcanoes'], correct: 0,
              exp: 'Sun drives wind, rain and the food chain; fossil fuels are ancient stored sunlight.' },
            { q: 'A battery converts:', options: ['chemical energy to electrical', 'light to sound', 'kinetic to light', 'heat to chemical'], correct: 0,
              exp: 'It does not create energy — it converts stored chemical energy.' },
            { q: 'Which is a RENEWABLE source?', options: ['Solar energy', 'Crude oil', 'Coal', 'Natural gas'], correct: 0,
              exp: 'Sunlight returns daily; fossil fuels took millions of years to form and run out.' },
            { q: 'The food we eat stores:', options: ['chemical energy', 'light energy', 'sound energy', 'electrical energy'], correct: 0,
              exp: 'Respiration releases that chemical energy for movement, growth and warmth.' },
            { q: 'Hitting a drum converts:', options: ['kinetic energy to sound', 'sound to light', 'chemical to nuclear', 'light to heat'], correct: 0,
              exp: 'The moving hand (kinetic) makes the skin vibrate and produce sound.' },
            { q: 'A solar panel converts:', options: ['light to electrical energy', 'heat to sound', 'wind to light', 'chemical to wind'], correct: 0,
              exp: 'Photovoltaic cells turn sunlight directly into electricity.' },
            { q: 'Why must we conserve energy?', options: ['Fossil sources are limited and costly', 'energy is useless', 'the sun is dying', 'joules expire'], correct: 0,
              exp: 'Non-renewable fuels run out and pollute, so wasting them wastes money and the future.' }""")

# ================================================== BASIC TECHNOLOGY QUIZZES
set_quiz('Basic Technology', 'Technical Drawing: Instruments, Lines & Lettering', """            { q: 'Which instrument draws horizontal lines?', options: ['T-square', 'Compass', 'Protractor', 'Dividers'], correct: 0,
              exp: 'The T-square slides on the board edge for horizontals and supports set squares.' },
            { q: 'A 45° set square is used for:', options: ['45° and 90° lines', 'circles', 'measuring mass', 'lettering'], correct: 0,
              exp: 'With the T-square it gives 45° and vertical (90°) lines.' },
            { q: 'A continuous THICK line represents:', options: ['visible outlines', 'hidden edges', 'centre lines', 'dimensions'], correct: 0,
              exp: 'What you can see is drawn thick; hidden detail is dashed; centres are chain lines.' },
            { q: 'Hidden edges are drawn with:', options: ['short dashed lines', 'continuous thick lines', 'chain lines', 'dotted circles'], correct: 0,
              exp: 'Dashed = hidden; mixing this up loses easy marks.' },
            { q: 'A long-short-long (chain) line shows:', options: ['a centre line or axis', 'a visible edge', 'a cutting mistake', 'a dimension'], correct: 0,
              exp: 'Chain lines mark centres and axes of symmetry.' },
            { q: 'Circles and arcs are drawn with a:', options: ['compass', 'T-square', 'protractor', 'scale rule'], correct: 0,
              exp: 'The compass swings arcs; dividers only transfer distances.' },
            { q: 'Scale 1:50 means:', options: ['1 cm on paper = 50 cm in real life', '50 cm on paper = 1 cm real', '1 m = 50 m', 'the drawing is 50× bigger'], correct: 0,
              exp: 'A reducing scale: every paper centimetre stands for fifty real ones.' },
            { q: 'Lettering on a drawing must be:', options: ['single-stroke and consistent', 'cursive and decorative', 'tiny and faint', 'in any style'], correct: 0,
              exp: 'Upright or inclined single-stroke capitals of even height — never handwriting curls.' },
            { q: 'The title block is placed at the:', options: ['bottom right corner', 'top left corner', 'centre', 'back of the sheet'], correct: 0,
              exp: 'It records the title, scale, date, draughtsman and projection used.' },
            { q: 'Dividers are used to:', options: ['step off and transfer equal distances', 'draw circles', 'measure angles', 'erase lines'], correct: 0,
              exp: 'They carry a distance from the rule to the drawing without marking the rule.' }""")

set_quiz('Basic Technology', 'Safety in the Workshop', """            { q: 'Which PPE protects the eyes from flying chips?', options: ['Safety goggles', 'Boots', 'Overalls', 'Ear defenders'], correct: 0,
              exp: 'Goggles stop chips, dust and splashes; each PPE item guards one hazard.' },
            { q: 'Gloves near a rotating drill or lathe are:', options: ['never worn — they can be caught', 'always worn', 'worn only on Mondays', 'worn if loose'], correct: 0,
              exp: 'Rotating parts can grab loose gloves and pull the hand in.' },
            { q: 'The first aid for a burn is:', options: ['cool under running water', 'apply butter', 'apply oil', 'cover with sand'], correct: 0,
              exp: 'At least ten minutes of running water; butter and oil trap the heat.' },
            { q: 'When chiselling, you cut:', options: ['away from your body', 'towards your chest', 'while holding the work in your hand', 'with eyes closed'], correct: 0,
              exp: 'Always away, and with the work clamped in a bench vice.' },
            { q: 'Every accident, however small, must be reported to:', options: ['the teacher', 'nobody', 'a friend', 'social media'], correct: 0,
              exp: 'The teacher treats it and prevents the same accident happening to others.' },
            { q: 'After use, tools should be:', options: ['cleaned and returned to their rack', 'left on the floor', 'hidden', 'thrown outside'], correct: 0,
              exp: 'Tools on the floor get stepped on and damaged; the rack keeps them safe and findable.' },
            { q: 'If someone gets an electric shock, FIRST:', options: ['switch off the supply', 'pull them with bare hands', 'pour water', 'shout only'], correct: 0,
              exp: 'Touching a live person passes the shock to you; isolate the supply first.' },
            { q: 'Horseplay causes accidents because:', options: ['it distracts and pushes people into danger', 'it is fun', 'machines like it', 'it saves time'], correct: 0,
              exp: 'Most workshop accidents trace back to distraction and rushing.' },
            { q: 'Loose clothing near machines is dangerous because it:', options: ['can be caught by moving parts', 'looks untidy only', 'keeps you warm', 'is fashionable'], correct: 0,
              exp: 'Like gloves, loose sleeves and ties can be pulled into rotating parts.' },
            { q: 'First aid for a small cut is:', options: ['wash, apply pressure, dress with a clean bandage', 'apply soil', 'ignore it always', 'pour kerosene'], correct: 0,
              exp: 'Clean it, stop the bleeding with pressure, and cover it cleanly.' }""")

set_quiz('Basic Technology', 'Technology in Everyday Life', """            { q: 'Technology is best defined as:', options: ['applying knowledge and tools to solve problems', 'only computers', 'magic', 'only machines with engines'], correct: 0,
              exp: 'Science discovers; technology applies. A pot and a phone are both technology.' },
            { q: 'Which is an ANCIENT technology?', options: ['Clay pot', 'Smartphone', 'Drone', 'Laptop'], correct: 0,
              exp: 'Clay pots, canoes and blacksmith knives served early societies.' },
            { q: 'Which technology preserves food at home?', options: ['Refrigerator', 'Radio', 'Television', 'Electric bell'], correct: 0,
              exp: 'Cold slows the microbes that spoil food.' },
            { q: 'On the farm, a tractor\\'s main advantage is:', options: ['it does in hours what hoes take weeks to do', 'it sings', 'it needs no fuel', 'it replaces rain'], correct: 0,
              exp: 'Speed and scale — one tractor ploughs many hectares in a day.' },
            { q: 'Which is a communication technology?', options: ['Mobile phone', 'Wheelbarrow', 'Hoe', 'Frying pan'], correct: 0,
              exp: 'Phones and the internet carry voice and text across the world in seconds.' },
            { q: 'To see tiny living things we use a:', options: ['microscope', 'telescope', 'stethoscope', 'periscope'], correct: 0,
              exp: 'Micro = small; a telescope looks far, a microscope looks tiny.' },
            { q: 'A gas cooker is an example of technology for:', options: ['cooking', 'transport', 'writing', 'printing'], correct: 0,
              exp: 'It converts the chemical energy of gas to heat, faster than firewood.' },
            { q: 'Which is a NEGATIVE effect of some technology?', options: ['Pollution from generators and factories', 'Faster communication', 'Better hospitals', 'Cleaner water'], correct: 0,
              exp: 'Every technology is weighed: benefit against cost.' },
            { q: 'People who design and build technology are:', options: ['engineers and technologists', 'poets', 'auditors', 'pilots only'], correct: 0,
              exp: 'Engineering turns science into working tools and systems.' },
            { q: 'A wheelbarrow is technology because it:', options: ['applies the wheel and lever to move loads easily', 'is made of metal', 'is expensive', 'has an engine'], correct: 0,
              exp: 'Simple machines count: wheel, axle and lever make one person do two people\\'s work.' }""")

set_quiz('Basic Technology', 'Common Tools & Their Uses', """            { q: 'A hammer is used to:', options: ['drive nails', 'cut metal', 'measure angles', 'smooth wood'], correct: 0,
              exp: 'The face drives nails; the claw of a claw hammer pulls them out.' },
            { q: 'Screws are turned with a:', options: ['screwdriver', 'hammer', 'file', 'try square'], correct: 0,
              exp: 'Match the tip (flat or Phillips) to the screw head.' },
            { q: 'Nuts and bolts are tightened with a:', options: ['spanner', 'chisel', 'tape rule', 'mallet'], correct: 0,
              exp: 'A correctly sized spanner grips the flats without rounding the nut.' },
            { q: 'Wires are gripped and cut with a:', options: ['plier', 'file', 'try square', 'compass'], correct: 0,
              exp: 'Pliers grip, bend and cut; never use them as a spanner.' },
            { q: 'A try square checks:', options: ['right angles (90°)', 'circles', 'weight', 'temperature'], correct: 0,
              exp: 'It tests and marks squareness on wood and metal edges.' },
            { q: 'Metal pipes are cut with a:', options: ['hacksaw', 'wood saw', 'knife', 'chisel'], correct: 0,
              exp: 'The hacksaw\\'s fine hard teeth cut metal; a wood saw would clog.' },
            { q: 'Rough edges are smoothed with a:', options: ['file', 'hammer', 'spanner', 'divider'], correct: 0,
              exp: 'Files shave small amounts to shape and smooth.' },
            { q: 'Long and curved distances are measured with a:', options: ['tape rule', 'try square', 'plier', 'mallet'], correct: 0,
              exp: 'The flexible tape follows curves that a ruler cannot.' },
            { q: 'Wood is carved with a chisel and a:', options: ['mallet', 'spanner', 'tape rule', 'plier'], correct: 0,
              exp: 'The mallet strikes the chisel; a hammer would damage its handle.' },
            { q: 'Sharp tools should be carried:', options: ['point down, away from the body', 'over the shoulder', 'in the mouth', 'swinging at speed'], correct: 0,
              exp: 'Point down at your side, so a stumble cannot drive the point into anyone.' }""")

# ====================================================== BASIC SCIENCE CARDS
add_cards('Basic Science', 'Introduction to Science: Measurement & Laboratory Safety', """            { q: 'Name the SI units of length, mass and time.', a: 'Metre (m), kilogram (kg) and second (s) — with instruments like the metre rule, beam balance and stopwatch respectively.' },
            { q: 'What is parallax error and how do you avoid it?', a: 'It is the wrong reading caused by viewing a scale from an angle; avoid it by reading at eye level, and for water read the bottom of the meniscus.' },
            { q: 'State four laboratory safety rules.', a: 'Never taste or directly smell chemicals; wear goggles and a lab coat; point heated test tubes away from people; add acid to water, never water to acid; report all breakages.' }""")

add_cards('Basic Science', 'Matter, Its Properties & Changes', """            { q: 'How do particles differ in the three states of matter?', a: 'Solids: particles locked in place, only vibrating. Liquids: particles close but sliding past each other. Gases: particles far apart, moving fast in all directions.' },
            { q: 'Physical vs chemical change — the test?', a: 'Ask whether a NEW substance forms. Melting ice and dissolving salt are physical (reversible); burning and rusting are chemical (new substances).' },
            { q: 'What is diffusion and what does it prove?', a: 'The spreading of particles from where there are many to where there are few — ink in water, perfume across a room. It proves particles move and have spaces between them.' },
            { q: 'Density formula and its use?', a: 'Density = mass ÷ volume. A block of 240 g and 80 cm³ gives 3 g/cm³; anything denser than water (1 g/cm³) sinks in it.' }""")

add_cards('Basic Science', 'Living Things & Health', """            { q: 'Recite MR NIGER D.', a: 'Movement, Respiration, Nutrition, Irritability, Growth, Excretion, Reproduction, Death — the eight characteristics that define living things.' },
            { q: 'How is malaria prevented at home?', a: 'Sleep under an insecticide-treated net, clear stagnant water and bush where mosquitoes breed, and use window screens.' },
            { q: 'What makes a diet "balanced"?', a: 'All food groups in the right proportion daily: carbohydrates, proteins, fats and oils, vitamins, minerals, roughage and water.' },
            { q: 'Why is a car not alive even though it moves and uses fuel?', a: 'It cannot grow, respond by itself, excrete or reproduce — it fails most of MR NIGER D.' }""")

add_cards('Basic Science', 'Energy: Forms & Sources', """            { q: 'Define energy and give its unit.', a: 'Energy is the ability to do work, measured in joules (J). It changes form but is never destroyed.' },
            { q: 'Give three energy conversions from daily life.', a: 'Battery: chemical → electrical; eating then running: chemical → kinetic; drum: kinetic → sound; solar panel: light → electrical.' },
            { q: 'Renewable vs non-renewable sources?', a: 'Renewable return or never run out (sun, wind, water, biomass); non-renewable took millions of years and run out (crude oil, coal, natural gas).' },
            { q: 'Why is the sun called the main source of energy?', a: 'It drives wind and the water cycle, powers photosynthesis (food), and ancient stored sunlight became fossil fuels.' }""")

# ================================================== BASIC TECHNOLOGY CARDS
add_cards('Basic Technology', 'Technical Drawing: Instruments, Lines & Lettering', """            { q: 'Which line type shows hidden edges, and which shows centre lines?', a: 'Hidden edges are short dashed lines; centre lines are long-short-long chain lines; visible outlines are continuous thick.' },
            { q: 'What does scale 1:50 mean, and is it reducing or enlarging?', a: '1 cm on paper stands for 50 cm in real life — a reducing scale, used to fit big objects on a sheet.' },
            { q: 'What belongs in the title block?', a: 'The drawing\\'s title, the draughtsman\\'s name, the date, the scale used and the projection method — placed bottom right.' },
            { q: 'Difference between a compass and dividers?', a: 'A compass draws circles and arcs; dividers only step off and transfer equal distances without drawing.' }""")

add_cards('Basic Technology', 'Safety in the Workshop', """            { q: 'List three causes of workshop accidents.', a: 'Wrong or damaged tools, loose clothing or rings near machines, tools left on the floor, horseplay, and poor lighting or clutter.' },
            { q: 'Correct first aid for burns and for electric shock?', a: 'Burns: cool under running water for ten minutes, never butter. Shock: switch off the supply FIRST, then help the person.' },
            { q: 'Why clamp work instead of holding it?', a: 'A bench vice holds the work firmly so both hands stay clear of the cutting tool — holding it yourself risks the blade slipping into your palm.' }""")

add_cards('Basic Technology', 'Technology in Everyday Life', """            { q: 'Define technology in one sentence.', a: 'The application of scientific knowledge, tools and skills to solve human problems and make work easier.' },
            { q: 'One ancient and one modern technology for storing food?', a: 'Ancient: clay pots, drying racks and smoking. Modern: the refrigerator, which slows spoilage microbes with cold.' },
            { q: 'Two negative effects of technology?', a: 'Pollution from factories, generators and vehicles; and machines replacing some human jobs, plus over-dependence when systems fail.' }""")

add_cards('Basic Technology', 'Common Tools & Their Uses', """            { q: 'Match: spanner, plier, hacksaw, file, try square.', a: 'Spanner turns nuts and bolts; plier grips and cuts wires; hacksaw cuts metal; file smooths edges; try square checks and marks 90°.' },
            { q: 'How should sharp tools be carried?', a: 'Point down at your side, edge away from the body — never over the shoulder or swinging.' },
            { q: 'Three rules of tool care?', a: 'Clean after use, oil metal parts against rust, and return every tool to its rack so nothing is lost or stepped on.' },
            { q: 'Why must a screwdriver never be used as a chisel?', a: 'Its tip is hardened to turn screws; struck like a chisel it can snap and fly into an eye.' }""")

open(CUR, 'w').write(s)
print("JSS1 science+tech content injected; bytes:", len(s))
