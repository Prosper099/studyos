"""Deep-lesson campaign batch 3: JSS2 Basic Science (Acids, Energy & Machines, Human Body)."""
import re
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()

ACIDS = """
            <h3>1. Acids in everyday life</h3>
            <p>An <b>acid</b> is a substance with a <b>sour taste</b> that turns <b>blue litmus red</b>. You meet acids every day without entering a laboratory: <b>citric acid</b> in oranges, lemons and limes; <b>ethanoic (acetic) acid</b> in vinegar; <b>hydrochloric acid</b> in your stomach, which helps digest food and kills germs swallowed with it; <b>carbonic acid</b> in fizzy drinks; and <b>lactic acid</b> in sour milk (nono).</p>
            <ul>
              <li>Acids taste sour — but NEVER taste an unknown substance; laboratory acids can burn the mouth.</li>
              <li>Strong acids are <b>corrosive</b>: they eat away metals, cloth and even skin.</li>
              <li>Acids react with many metals (zinc, magnesium) to release <b>hydrogen gas</b>, which 'pops' with a lighted splint.</li>
            </ul>

            <h3>2. Bases in everyday life</h3>
            <p>A <b>base</b> feels <b>soapy/slippery</b>, tastes <b>bitter</b> and turns <b>red litmus blue</b>. Everyday bases include <b>soap</b> and detergent, <b>wood ash</b> (used for traditional cleaning and soap-making), <b>slaked lime</b> (used on farms and for whitewash), <b>baking soda</b> (sodium hydrogen carbonate, used in cooking) and <b>milk of magnesia</b> (the indigestion medicine). Bases that dissolve in water are called <b>alkalis</b>.</p>
            <div class="worked"><b>Why soap feels slippery:</b> the alkali in soap reacts slightly with the oils on your skin, making a slippery layer — that same power is why strong alkalis, like strong acids, are corrosive and must be handled carefully.</div>

            <h3>3. Indicators: how we test acids and bases</h3>
            <ul>
              <li><b>Litmus paper</b> — blue turns RED in acid; red turns BLUE in base; neither changes in a neutral substance.</li>
              <li><b>Methyl orange</b> — red in acid, yellow in base.</li>
              <li><b>Phenolphthalein</b> — colourless in acid, PINK in base.</li>
              <li><b>Natural indicators</b> — hibiscus (zobo) petal extract and red cabbage juice turn reddish in acids and greenish/blue in bases; turmeric turns red-brown in bases.</li>
            </ul>
            <div class="formula">MEMORY CODE: acids turn Blue litmus Red — 'A for Acid, B for Blue to Red'.</div>

            <h3>4. The pH scale</h3>
            <p>The <b>pH scale</b> measures how acidic or alkaline a substance is, from <b>0 to 14</b>:</p>
            <svg viewBox="0 0 460 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The pH scale from 0 to 14 with acid, neutral and alkaline regions">
              <g font-size="11" font-weight="700" fill="#0f172a">
                <rect x="20" y="20" width="28" height="34" fill="#dc2626"/><rect x="48" y="20" width="28" height="34" fill="#ea580c"/>
                <rect x="76" y="20" width="28" height="34" fill="#f97316"/><rect x="104" y="20" width="28" height="34" fill="#f59e0b"/>
                <rect x="132" y="20" width="28" height="34" fill="#facc15"/><rect x="160" y="20" width="28" height="34" fill="#a3e635"/>
                <rect x="188" y="20" width="28" height="34" fill="#4ade80"/><rect x="216" y="20" width="28" height="34" fill="#22c55e"/>
                <rect x="244" y="20" width="28" height="34" fill="#2dd4bf"/><rect x="272" y="20" width="28" height="34" fill="#38bdf8"/>
                <rect x="300" y="20" width="28" height="34" fill="#3b82f6"/><rect x="328" y="20" width="28" height="34" fill="#6366f1"/>
                <rect x="356" y="20" width="28" height="34" fill="#7c3aed"/><rect x="384" y="20" width="28" height="34" fill="#a21caf"/>
              </g>
              <text x="118" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">ACIDIC (0-6)</text>
              <text x="230" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">7 = NEUTRAL</text>
              <text x="342" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#6d28d9">ALKALINE (8-14)</text>
              <text x="230" y="98" text-anchor="middle" font-size="12" fill="#475569">battery acid ~0 · lemon ~2 · water = 7 · soap ~10 · bleach ~13</text>
            </svg>
            <ul>
              <li><b>pH below 7</b> = acidic — the lower the number, the stronger the acid (battery acid is about pH 0-1, lemon juice about pH 2).</li>
              <li><b>pH exactly 7</b> = neutral — pure water and salt solution.</li>
              <li><b>pH above 7</b> = alkaline — soap about 10, bleach about 13.</li>
            </ul>

            <h3>5. Neutralisation</h3>
            <p>When an acid and a base react, they cancel each other out. The reaction is called <b>neutralisation</b>:</p>
            <div class="formula">ACID + BASE -> SALT + WATER   (e.g. hydrochloric acid + sodium hydroxide -> sodium chloride + water)</div>
            <p>Everyday neutralisation in action:</p>
            <ul>
              <li><b>Indigestion:</b> the stomach makes too much acid; milk of magnesia (a base) neutralises the excess and the pain eases.</li>
              <li><b>Acidic soil:</b> farmers add <b>lime</b> (a base) to neutralise it so crops grow well.</li>
              <li><b>Acid spills on skin or benches</b> are treated with a mild base; alkali spills with a mild acid such as vinegar — carefully.</li>
            </ul>

            <h3>6. Salts and their uses</h3>
            <p>A <b>salt</b> is the solid formed when an acid reacts with a base. Salts are everywhere in Nigerian life:</p>
            <ul>
              <li><b>Common salt (sodium chloride)</b> — seasoning food, preserving fish and meat (stockfish and dried meat last longer because germs cannot thrive in heavy salt), and in making soap and chemicals.</li>
              <li><b>Baking soda (sodium hydrogen carbonate)</b> — makes cakes and puff-puff rise; also a mild antacid.</li>
              <li><b>Washing soda</b> — softens hard water and helps cleaning.</li>
              <li><b>Epsom salt</b> — bath salts for sore muscles; a mild laxative.</li>
              <li><b>Saltpetre (potassium nitrate) and ammonium salts</b> — fertilisers that feed crops with nitrogen.</li>
              <li><b>Gypsum (calcium sulphate)</b> — used in making cement and in plastering broken limbs ('casts').</li>
            </ul>

            <h3>7. Useful acids around us</h3>
            <ul>
              <li><b>Sulphuric acid</b> — the 'king of chemicals': car batteries, making fertilisers, detergents and paints.</li>
              <li><b>Hydrochloric acid</b> — cleaning (pickling) metals before galvanising; in your stomach for digestion.</li>
              <li><b>Citric acid</b> — flavours and preserves food and drinks; cleans kettles.</li>
              <li><b>Ethanoic acid (vinegar)</b> — cooking, salad dressing, preserving and cleaning.</li>
            </ul>

            <h3>8. Acid rain</h3>
            <p>Factories, generators and vehicles release <b>sulphur dioxide</b> and <b>nitrogen oxides</b>. These gases dissolve in rainwater and make it weakly acidic — <b>acid rain</b>. Its damage: it corrodes metal roofs and painted surfaces, eats limestone/marble statues, makes lakes too acidic for fish, and harms crops and soil. The cure is cleaner fuels, filters (scrubbers) on factory chimneys and vehicle exhaust treatment.</p>

            <h3>9. Soil pH and farming</h3>
            <p>Most crops grow best in soil that is close to neutral (pH 6-7). Heavy rain can wash soils towards acidity, and some fertilisers add to it. Farmers test soil with indicator papers and add <b>lime</b> to raise an acidic soil or manure/compost to improve it. This is neutralisation feeding a whole nation's farms.</p>

            <h3>10. Tooth decay — acid at work in your mouth</h3>
            <p>Bacteria on teeth feed on leftover sugar and produce <b>acid</b>, which slowly dissolves the hard enamel — that is a cavity. Prevention: brush twice daily with <b>fluoride toothpaste</b> (fluoride strengthens enamel), rinse after eating, limit sweets and fizzy drinks, and visit a dental clinic for checks.</p>
            <div class="formula">EXAM LINE: tooth decay is a neutralisation story in reverse — acid attacks, and the mildly basic toothpaste helps neutralise it.</div>

            <h3>11. Safety with acids and bases</h3>
            <ul>
              <li>Strong acids and alkalis are <b>corrosive</b> — they burn skin and eyes; wear gloves and goggles in practicals.</li>
              <li><b>Diluting acid:</b> ALWAYS add the acid slowly to water (never water to concentrated acid — it can spit and splash). 'Add Acid to water — AA.'</li>
              <li>Label every container; keep acids away from bases and from metals.</li>
              <li>If a chemical touches skin, wash with plenty of running water and report it.</li>
            </ul>

            <h3>12. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Name the acid in (a) oranges, (b) vinegar, (c) the stomach. <i>Ans: (a) citric, (b) ethanoic/acetic, (c) hydrochloric acid.</i></li>
              <li><b>Q2.</b> What colour does blue litmus turn in lemon juice, and why? <i>Ans: red — lemon juice contains citric acid, and acids turn blue litmus red.</i></li>
              <li><b>Q3.</b> Give the pH of (a) pure water, (b) a strong acid, (c) soap solution. <i>Ans: (a) 7, (b) about 0-1, (c) about 10.</i></li>
              <li><b>Q4.</b> Write the word equation for neutralisation and one everyday example. <i>Ans: acid + base -> salt + water; e.g. milk of magnesia neutralising excess stomach acid.</i></li>
              <li><b>Q5.</b> Which two gases cause acid rain, and give two effects. <i>Ans: sulphur dioxide and nitrogen oxides; corrodes roofs and statues, acidifies lakes and harms crops (also damages soil).</i></li>
              <li><b>Q6.</b> Why should acid be added to water — and not water to acid — when diluting? <i>Ans: adding water to concentrated acid releases so much heat suddenly that the mixture can spit and splash acid out; adding acid slowly to water spreads the heat safely.</i></li>
            </ul>
            <div class="formula">SUMMARY: Acids (sour, blue-to-red litmus, pH under 7) and bases (bitter, slippery, red-to-blue litmus, pH over 7) meet everywhere — fruits, soap, soil, stomach and industry. Indicators and the pH scale identify them; neutralisation turns them into useful salts and water, and safe handling protects us from their corrosive power.</div>
"""

MACHINES = """
            <h3>1. Work, effort and load</h3>
            <p><b>Work</b> is done when a force moves something in its own direction: work = force x distance, measured in <b>joules (J)</b>. When you use any machine, you apply an <b>effort</b> (the force you put in) to overcome a <b>load</b> (the weight or resistance being moved). Lifting a 200 N drum straight onto a truck needs 200 N of force — most people cannot; a machine lets a smaller effort do the job.</p>
            <div class="worked"><b>The golden trade-off:</b> machines make work EASIER, never less. A smaller effort must act over a LONGER distance. The ramp is longer than the truck is high — that is the price of the reduced effort.</div>

            <h3>2. Energy transformations all around you</h3>
            <ul>
              <li><b>Electric generator:</b> kinetic (spinning turbine) -> electrical.</li>
              <li><b>Electric motor/fan:</b> electrical -> kinetic.</li>
              <li><b>Solar panel:</b> light -> electrical.</li>
              <li><b>Photosynthesis:</b> light -> chemical (food).</li>
              <li><b>Loudspeaker:</b> electrical -> sound. <b>Microphone:</b> sound -> electrical.</li>
              <li><b>Electric bulb:</b> electrical -> light (+ heat — the waste).</li>
              <li><b>Battery torch:</b> chemical -> electrical -> light (+ heat).</li>
              <li><b>Clapping, braking a bicycle:</b> kinetic -> sound/heat.</li>
            </ul>
            <p>The <b>law of conservation of energy</b> rules every one of these: energy is never created or destroyed, only transformed — and every machine 'loses' some input energy as heat through friction.</p>
            <div class="formula">EFFICIENCY = (useful energy output / total energy input) x 100%. Example: a machine takes 200 J and gives 150 J of useful work — efficiency = 150/200 x 100 = 75%.</div>

            <h3>3. What is a machine?</h3>
            <p>A <b>machine</b> is any device that makes work easier by <b>reducing the effort needed</b>, <b>changing the direction</b> of the effort, or <b>increasing speed or distance</b>. Machines do NOT reduce the total work — friction always wastes a little, so work input is slightly MORE than useful work output.</p>
            <ul>
              <li><b>Mechanical advantage (MA)</b> = load / effort — how many times the machine multiplies your force.</li>
              <li><b>Velocity ratio (VR)</b> = distance moved by effort / distance moved by load.</li>
              <li><b>Efficiency</b> = MA/VR x 100% — friction is why it is always below 100%.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a pulley system lifts a 120 N load with a 40 N effort: MA = 120/40 = 3 — the machine triples your force. If its VR is 4, efficiency = 3/4 x 100 = 75%.</div>

            <h3>4. Levers — the first machine</h3>
            <p>A <b>lever</b> is a stiff bar turning about a fixed point called the <b>fulcrum (pivot)</b>. Levers come in three classes, named by what sits in the middle:</p>
            <svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The three classes of lever showing fulcrum, load and effort positions">
              <g font-size="12" font-weight="700" fill="#0f172a">
                <line x1="20" y1="40" x2="440" y2="40" stroke="#334155" stroke-width="6"/>
                <path d="M230 60 l-14 -18 h28 z" fill="#6366f1"/>
                <text x="230" y="80" text-anchor="middle">fulcrum</text>
                <text x="80" y="30" fill="#dc2626">LOAD</text><text x="380" y="30" fill="#059669">EFFORT</text>
                <text x="230" y="102" text-anchor="middle" fill="#4f46e5">1st class — fulcrum in middle (scissors, crowbar, see-saw)</text>
                <line x1="20" y1="130" x2="440" y2="130" stroke="#334155" stroke-width="6"/>
                <path d="M60 150 l-14 -18 h28 z" fill="#6366f1"/>
                <text x="60" y="170" text-anchor="middle">fulcrum</text>
                <text x="210" y="120" fill="#dc2626">LOAD</text><text x="400" y="120" fill="#059669">EFFORT</text>
                <text x="230" y="192" text-anchor="middle" fill="#4f46e5">2nd class — load in middle (wheelbarrow, nutcracker, bottle opener)</text>
              </g>
            </svg>
            <ul>
              <li><b>First class — fulcrum in the middle:</b> scissors, crowbar, see-saw, claw hammer pulling nails, pliers. The body's neck nodding is a first-class lever.</li>
              <li><b>Second class — load in the middle:</b> wheelbarrow, nutcracker, bottle opener. These always multiply force (MA greater than 1).</li>
              <li><b>Third class — effort in the middle:</b> tweezers, broom, fishing rod, stapler — and your forearm (elbow = fulcrum, biceps = effort, hand = load). Third-class levers sacrifice force to gain speed and distance.</li>
            </ul>

            <h3>5. Pulleys</h3>
            <ul>
              <li><b>Single fixed pulley</b> — attached overhead (a well pulley, flagpole). It changes the DIRECTION of effort: pull DOWN to lift UP. VR = 1; it does not multiply force but makes lifting far more convenient.</li>
              <li><b>Movable pulley</b> — travels with the load; the rope shares the load between two sections, so the effort is about HALF the load (VR = 2).</li>
              <li><b>Block and tackle</b> — fixed and movable pulleys combined; the more rope sections supporting the load, the greater the MA. Cranes and engine hoists use them.</li>
            </ul>

            <h3>6. Wheel and axle</h3>
            <p>A big wheel fixed to a small axle turns together. Effort on the wheel rim gives a bigger turning force on the axle: <b>steering wheels, door knobs, a windlass for drawing well water, screwdrivers (thick handle = wheel), tap handles</b>. VR = radius of wheel / radius of axle — the bigger the handle, the easier the turning.</p>

            <h3>7. The inclined plane</h3>
            <p>A sloping surface — a <b>ramp</b> — lets a load be raised with less effort over a longer distance. Loading drums into a truck on a plank, staircases, wheelchair ramps and winding roads up a hill are all inclined planes. VR = length of slope / vertical height, so a longer, gentler slope needs less effort.</p>
            <div class="worked"><b>Worked example:</b> a 3 m plank lifts a drum 1 m high: VR = 3/1 = 3 — in theory only one-third of the weight is needed as effort (friction takes a little more).</div>

            <h3>8. Screws and wedges</h3>
            <ul>
              <li><b>Screw</b> — an inclined plane wrapped round a cylinder. Each turn drives it in a small distance with great gripping force: wood screws, bolts and nuts, bottle tops, the car jack.</li>
              <li><b>Wedge</b> — a moving inclined plane (two back to back) that splits or holds: knives, axes, chisels, needles, nails, pins, teeth cutting food. A sharp wedge (small angle) needs less effort — which is why we sharpen tools.</li>
            </ul>

            <h3>9. Friction in machines — the enemy and the friend</h3>
            <p>Friction wastes energy as heat, wears parts down and reduces efficiency. Machines fight it with <b>lubrication</b> (oil and grease form a slippery film), <b>ball/roller bearings</b> (rolling friction is far less than sliding) and <b>smooth surfaces</b>. Yet friction is also useful — brakes stop bicycles by friction, belts grip pulleys, and we could not walk without it.</p>

            <h3>10. Mechanisms around us</h3>
            <ul>
              <li><b>Bicycle</b> — levers (pedals, brakes), wheel and axle, chain and sprocket (transfers pedal effort to the rear wheel; bigger rear sprocket = easier climbing, smaller = more speed), ball bearings in the hubs.</li>
              <li><b>Sewing machine</b> — the treadle is a lever; the belt transfers rotation; the needle shows reciprocating (up-and-down) motion.</li>
              <li><b>Cassava grater, hand pump, maize sheller</b> — simple machines powering Nigerian farms and homes.</li>
            </ul>

            <h3>11. Maintenance: making machines last</h3>
            <ul>
              <li>Clean machines after use — dust and grit grind parts away.</li>
              <li>Oil and grease moving parts regularly (lubrication).</li>
              <li>Tighten loose bolts and replace worn parts early — cheap prevention beats expensive breakdown.</li>
              <li>Protect metal from rust: paint, oil or store dry.</li>
              <li>Use each machine only for its proper purpose.</li>
            </ul>

            <h3>12. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define a machine. <i>Ans: a device that makes work easier by reducing the effort, changing its direction, or increasing speed/distance — it never reduces the total work.</i></li>
              <li><b>Q2.</b> Give the energy conversions in (a) a microphone, (b) a solar panel, (c) an electric fan. <i>Ans: (a) sound -> electrical, (b) light -> electrical, (c) electrical -> kinetic.</i></li>
              <li><b>Q3.</b> A load of 150 N is lifted with an effort of 50 N. Find the MA. <i>Ans: MA = load/effort = 150/50 = 3.</i></li>
              <li><b>Q4.</b> Classify: (a) wheelbarrow, (b) scissors, (c) tweezers. <i>Ans: (a) second class, (b) first class, (c) third class.</i></li>
              <li><b>Q5.</b> Why is a long gentle ramp easier than a short steep one? <i>Ans: the longer slope has a greater VR (length/height), so the effort needed is smaller — at the cost of pushing a longer distance.</i></li>
              <li><b>Q6.</b> Name two ways machines reduce friction. <i>Ans: lubrication with oil/grease and ball bearings (also polishing surfaces).</i></li>
            </ul>
            <div class="formula">SUMMARY: Energy only changes form, and machines only redirect effort — levers, pulleys, wheel-and-axle, inclined planes, screws and wedges trade force for distance so small efforts move big loads. MA and VR measure that trade; friction and good maintenance decide how much of our effort becomes useful work.</div>
"""

BODY = """
            <h3>1. The body as a team of systems</h3>
            <p>Your body is built of <b>cells</b> grouped into <b>tissues</b>, tissues into <b>organs</b>, and organs working together into <b>systems</b>. Each system has its own job, yet none works alone: the digestive system supplies fuel, the circulatory system delivers it, the respiratory system provides oxygen, the nervous system directs everything, and the rest support, protect, clean and reproduce. Health means keeping every system in good working order.</p>

            <h3>2. The skeletal system</h3>
            <ul>
              <li><b>Support and shape</b> — the 206 bones of the adult skeleton are the body's frame.</li>
              <li><b>Protection</b> — the skull shields the brain; the rib cage guards the heart and lungs; the backbone (vertebral column) protects the spinal cord.</li>
              <li><b>Movement</b> — bones are levers that muscles pull on at joints.</li>
              <li><b>Blood production</b> — marrow inside certain bones makes red blood cells.</li>
              <li><b>Mineral store</b> — bones hold calcium and phosphorus.</li>
            </ul>
            <p><b>Joints</b> are where bones meet: <b>hinge joints</b> (elbow, knee) swing in one plane like a door; <b>ball-and-socket joints</b> (shoulder, hip) rotate widely; the skull's joints are fixed. Good posture — sitting and standing straight — protects the spine, and calcium-rich foods (milk, fish with bones, green vegetables) plus sunlight keep bones hard.</p>

            <h3>3. Muscles and movement</h3>
            <p>Muscles move the body by <b>contracting</b> (shortening) and pulling on bones — they can pull but never push, so they work in <b>opposing pairs</b>. Bend your arm: the <b>biceps</b> contracts while the <b>triceps</b> relaxes; straighten it and they swap roles. Exercise strengthens muscles and the heart; disuse makes them weak and soft.</p>

            <h3>4. The digestive system</h3>
            <svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The path of food through the human digestive system">
              <g font-size="12" font-weight="700" fill="#0f172a">
                <path d="M60 30 q40 0 40 30 l0 40 q0 20 -20 30 q40 10 40 40 l0 40" fill="none" stroke="#f97316" stroke-width="10" stroke-linecap="round"/>
                <text x="115" y="35">mouth (teeth chew, saliva starts starch digestion)</text>
                <text x="115" y="80">oesophagus — waves (peristalsis) push food down</text>
                <text x="115" y="120">stomach — acid and enzymes digest protein</text>
                <text x="115" y="160">small intestine — digestion finishes; nutrients absorbed</text>
                <text x="115" y="195">large intestine — water absorbed; waste leaves via rectum</text>
                <circle cx="60" cy="30" r="9" fill="#fb923c"/><circle cx="98" cy="72" r="8" fill="#fb923c"/>
                <circle cx="72" cy="112" r="11" fill="#fb923c"/><circle cx="88" cy="152" r="9" fill="#fb923c"/>
                <circle cx="60" cy="190" r="8" fill="#fb923c"/>
              </g>
            </svg>
            <p><b>Digestion</b> breaks large, insoluble food into small, soluble nutrients that can enter the blood:</p>
            <ul>
              <li><b>Mouth</b> — teeth chew; saliva moistens and begins starch digestion.</li>
              <li><b>Stomach</b> — churns food with acid and enzymes; protein digestion begins; the acid also kills germs.</li>
              <li><b>Small intestine</b> — digestion finishes with juices from the liver (bile, which helps fats), the pancreas and the intestine wall; finger-like <b>villi</b> absorb the nutrients into the blood.</li>
              <li><b>Large intestine</b> — absorbs water and mineral salts; remaining waste (faeces) is stored in the rectum and removed through the anus (<b>egestion</b>).</li>
            </ul>
            <p><b>Care:</b> wash hands before eating, chew slowly, eat balanced meals at regular times, drink clean water, and include fruit, vegetables and roughage to prevent constipation.</p>

            <h3>5. The circulatory system</h3>
            <p>The <b>heart</b> is a muscular pump, about the size of your fist, beating roughly 70-80 times a minute at rest. It pushes <b>blood</b> through tubes:</p>
            <ul>
              <li><b>Arteries</b> — thick, strong tubes carrying blood AWAY from the heart (mostly oxygen-rich); they pulse.</li>
              <li><b>Veins</b> — carry blood BACK to the heart (mostly oxygen-poor); they have valves to stop backflow.</li>
              <li><b>Capillaries</b> — hair-thin vessels where the real business happens: food and oxygen pass into cells and wastes pass out.</li>
            </ul>
            <p><b>Blood</b> itself is a team: <b>red cells</b> carry oxygen (their haemoglobin needs iron — a reason to eat greens, liver and beans); <b>white cells</b> fight germs; <b>platelets</b> clot blood to stop bleeding; <b>plasma</b> (the liquid) carries everything, including digested food and wastes.</p>
            <div class="worked"><b>Feel it:</b> press gently on your wrist — that pulse is an artery throbbing with each heartbeat. Count for 30 seconds and double it: a resting rate of about 60-100 beats per minute is normal for students.</div>

            <h3>6. The respiratory system</h3>
            <p>Air enters through the <b>nose</b> (hairs and mucus filter dust; the air is warmed and moistened), passes the windpipe (<b>trachea</b>) and branches into the two <b>lungs</b>. Deep inside, millions of tiny air sacs (<b>alveoli</b>) swap gases with the blood: <b>oxygen in, carbon dioxide out</b>. You breathe about 15-20 times a minute without thinking — the brain never sleeps on this job.</p>
            <p><b>Care and dangers:</b> smoking damages the air passages and causes coughs, bronchitis and lung cancer; carbon monoxide from fumes and generators is deadly in closed rooms (NEVER run a generator indoors); keep rooms ventilated and avoid heavy smoke.</p>

            <h3>7. The nervous system — the body's control room</h3>
            <ul>
              <li><b>Brain</b> — thinks, remembers, feels and commands; its parts include the cerebrum (intelligence and voluntary action), cerebellum (balance and coordination) and medulla (automatic jobs like heartbeat and breathing).</li>
              <li><b>Spinal cord</b> — the cable between brain and body; it also handles fast <b>reflexes</b> (jerking a hand from a hot pot before pain is even felt).</li>
              <li><b>Nerves</b> — wires carrying messages to and from every part.</li>
              <li><b>Sense organs</b> — eyes (sight), ears (hearing and balance), nose (smell), tongue (taste), skin (touch, heat, pain) — they report the world to the brain.</li>
            </ul>
            <p><b>Care:</b> sleep enough (the brain files memories during sleep), protect the head when cycling or playing contact sports, and keep away from drugs and alcohol, which damage nerve cells and cloud judgement.</p>

            <h3>8. The excretory system — keeping the body clean inside</h3>
            <ul>
              <li><b>Kidneys</b> — filter the blood, removing urea and excess water and salts as <b>urine</b>.</li>
              <li><b>Skin</b> — sweats out water, salts and a little urea; sweating also cools the body.</li>
              <li><b>Lungs</b> — breathe out carbon dioxide and water vapour.</li>
              <li><b>Liver</b> — breaks down worn-out red blood cells and handles many wastes.</li>
            </ul>
            <p>Drinking enough clean water daily helps the kidneys flush wastes; holding urine too long invites infection. Excretion (removing wastes MADE in the body) is different from egestion (removing undigested food).</p>

            <h3>9. The reproductive system (basics)</h3>
            <p>Reproduction continues the human race. The <b>testes</b> (male) produce <b>sperms</b> and the male hormone; the <b>ovaries</b> (female) produce <b>eggs (ova)</b> and female hormones. At <b>puberty</b> the body matures: girls begin menstruation and develop breasts; boys' voices deepen and muscles grow. Fertilisation (sperm joining egg) begins a new life, which develops in the <b>uterus</b> until birth. Personal hygiene matters especially at this stage — bathe daily and wear clean clothes.</p>

            <h3>10. Keeping every system healthy</h3>
            <ul>
              <li><b>Eat a balanced diet</b> — six food classes plus fibre; iron-rich foods for blood, calcium for bones.</li>
              <li><b>Exercise daily</b> — strengthens muscles, heart and lungs; keeps weight healthy.</li>
              <li><b>Sleep and rest</b> — the body repairs itself; students need about 8-10 hours.</li>
              <li><b>Hygiene</b> — bathe, brush teeth twice daily, wash hands, keep nails short.</li>
              <li><b>Avoid poison helpers</b> — tobacco, alcohol and drugs damage the liver, brain, heart and lungs and cause addiction.</li>
              <li><b>Check-ups and immunisation</b> — clinics catch problems early; vaccines train the body to defeat germs.</li>
            </ul>

            <h3>11. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> State four functions of the skeleton. <i>Ans: support, protection, movement (with muscles), blood-cell production and mineral storage (any four).</i></li>
              <li><b>Q2.</b> Which blood vessels carry blood away from the heart, and which part of blood fights germs? <i>Ans: arteries; white blood cells.</i></li>
              <li><b>Q3.</b> Where are digested nutrients absorbed, and by what structures? <i>Ans: in the small intestine, through the villi.</i></li>
              <li><b>Q4.</b> Name the gas taken in and the gas given out at the alveoli. <i>Ans: oxygen in; carbon dioxide out.</i></li>
              <li><b>Q5.</b> Which organ filters blood to form urine? Name one other excretory organ. <i>Ans: the kidney; also skin (sweat), lungs (CO2) or liver.</i></li>
              <li><b>Q6.</b> Why do biceps and triceps work in pairs? <i>Ans: muscles can only pull (contract), never push — so one bends the arm while the other straightens it.</i></li>
            </ul>
            <div class="formula">SUMMARY: The skeleton supports and protects, muscles move the levers, digestion fuels the body, circulation delivers, respiration supplies oxygen, the nervous system commands, excretion cleans, and reproduction continues life — one team. Balanced food, exercise, rest, hygiene and staying drug-free keep the whole team winning.</div>
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

replace_content('Acids, Bases & Salts in Everyday Life', ACIDS)
replace_content('Energy: Forms, Transformation & Simple Machines', MACHINES)
replace_content('Human Body Systems', BODY)

open(PATH, 'w', encoding='utf-8').write(s)
print('deep batch 3 written:', len(ACIDS), '+', len(MACHINES), '+', len(BODY), 'chars')
