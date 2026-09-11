"""Deep-lesson campaign batch 1: two JSS1 Basic Science topics to textbook depth."""
import re
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()

LIVING = """
            <h3>1. Living and non-living things</h3>
            <p>Everything in the world is either a <b>living thing</b> or a <b>non-living thing</b>. You, a goat, a mango tree and bacteria are alive. A stone, a chair, water and a motor car are not. The difference is not movement or noise — a car moves and a river 'travels', yet neither is alive. Living things carry out <b>all</b> the life processes listed below; non-living things carry out none of them by themselves.</p>
            <div class="worked"><b>Think about it:</b> A flame 'eats' fuel, 'grows' when fed and 'dies' when starved — yet fire is not alive because it is not made of cells, cannot reproduce and has no organised body.</div>

            <h3>2. Characteristics of living things — MR NIGER D</h3>
            <p>Students remember the seven characteristics with the code <b>MR NIGER D</b>: <b>M</b>ovement, <b>R</b>espiration, <b>N</b>utrition, <b>I</b>rritability (sensitivity), <b>G</b>rowth, <b>E</b>xcretion, <b>R</b>eproduction — and, in time, <b>D</b>eath.</p>
            <ul>
              <li><b>Movement</b> — animals move their whole bodies from place to place (locomotion); plants move parts only, such as roots growing towards water or shoots bending towards light.</li>
              <li><b>Respiration</b> — breaking down food inside cells to release <b>energy</b>. Every living thing respires day and night; it is not the same as breathing, which is only the exchange of gases.</li>
              <li><b>Nutrition</b> — taking in and using food. Green plants make their own food by <b>photosynthesis</b>; animals feed on plants or other animals.</li>
              <li><b>Irritability (sensitivity)</b> — responding to changes (stimuli) such as heat, light, touch and sound. You pull your hand from a hot pot; the sensitive plant (Mimosa) folds its leaves when touched.</li>
              <li><b>Growth</b> — a permanent increase in size and mass. A child grows into an adult; a seedling becomes a tree. Growth in animals stops at maturity, while many plants keep growing.</li>
              <li><b>Excretion</b> — removing waste products made inside the body (urine, sweat, carbon dioxide). Waste that stays inside poisons the body — this is different from egestion (removing undigested food).</li>
              <li><b>Reproduction</b> — producing new individuals so life does not end with the parent. It may be <b>sexual</b> (two parents) or <b>asexual</b> (one parent).</li>
              <li><b>Death</b> — all living things have a limited life span.</li>
            </ul>
            <div class="formula">EXAM CODE: M-R-N-I-G-E-R-D → Movement, Respiration, Nutrition, Irritability, Growth, Excretion, Reproduction, Death.</div>

            <h3>3. Differences between plants and animals</h3>
            <ul>
              <li><b>Feeding:</b> plants manufacture their own food (photosynthesis, using chlorophyll); animals depend on ready-made food.</li>
              <li><b>Movement:</b> plants are fixed in one place and move parts only; animals move the whole body from place to place.</li>
              <li><b>Growth:</b> plant growth is often continuous and spread through the body; animal growth is definite and stops at maturity.</li>
              <li><b>Response:</b> plants respond slowly; animals respond quickly through a nervous system.</li>
              <li><b>Cell structure:</b> plant cells have a cellulose cell wall and large vacuoles; animal cells do not.</li>
            </ul>

            <h3>4. The cell — the unit of life</h3>
            <p>All living things are built of <b>cells</b>. Some organisms, like <b>Amoeba</b>, <b>Euglena</b> and bacteria, are a <b>single cell</b> that performs every life process on its own. Plants and animals are made of millions of cells that share the work — this is called <b>division of labour</b>.</p>
            <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple diagrams of an animal cell and a plant cell">
              <circle cx="100" cy="100" r="70" fill="#eef2ff" stroke="#6366f1" stroke-width="3"/>
              <circle cx="100" cy="100" r="22" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2"/>
              <circle cx="60" cy="70" r="7" fill="#f59e0b"/><circle cx="140" cy="75" r="7" fill="#f59e0b"/>
              <circle cx="70" cy="140" r="6" fill="#f59e0b"/>
              <text x="100" y="188" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Animal cell</text>
              <text x="100" y="105" text-anchor="middle" font-size="10" fill="#3730a3">nucleus</text>
              <rect x="250" y="30" width="150" height="130" rx="14" fill="#ecfdf5" stroke="#059669" stroke-width="4"/>
              <circle cx="325" cy="95" r="22" fill="#a7f3d0" stroke="#047857" stroke-width="2"/>
              <circle cx="280" cy="60" r="7" fill="#16a34a"/><circle cx="370" cy="60" r="7" fill="#16a34a"/>
              <circle cx="280" cy="130" r="7" fill="#16a34a"/>
              <text x="325" y="188" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Plant cell (cell wall outside)</text>
              <text x="325" y="100" text-anchor="middle" font-size="10" fill="#065f46">nucleus</text>
            </svg>
            <ul>
              <li><b>Cell membrane</b> — the living skin of the cell; it controls what enters and leaves.</li>
              <li><b>Cytoplasm</b> — the jelly-like substance where most cell activities happen.</li>
              <li><b>Nucleus</b> — the control centre; it directs all cell activities and carries heredity material.</li>
              <li><b>Cell wall</b> (plants only) — a firm cellulose coat that gives shape and support.</li>
              <li><b>Chloroplast</b> (plants only) — the green kitchen where photosynthesis happens.</li>
              <li><b>Vacuole</b> — a sac of cell sap; large and permanent in plants, small or absent in animals.</li>
            </ul>
            <div class="worked"><b>Levels of organisation:</b> cells join to form <b>tissues</b> (e.g. muscle tissue) → tissues form <b>organs</b> (e.g. the heart) → organs work together as <b>systems</b> (e.g. the circulatory system) → systems make the whole <b>organism</b>.</div>

            <h3>5. Nutrition: the balanced diet</h3>
            <p><b>Nutrition</b> is the taking in and use of food. A <b>balanced diet</b> contains all six food classes in the right amounts for a person's age and work. Eating one class alone never works — the body needs all of them together.</p>
            <ul>
              <li><b>Carbohydrates</b> (rice, yam, garri, maize) — the main <b>energy</b> foods.</li>
              <li><b>Proteins</b> (beans, fish, eggs, meat, groundnut) — <b>growth and repair</b> of tissues.</li>
              <li><b>Fats and oils</b> (palm oil, butter, groundnut oil) — concentrated energy, warmth and protection of organs.</li>
              <li><b>Vitamins</b> (fruits and vegetables) — protect against disease and help the body use other foods.</li>
              <li><b>Mineral salts</b> (vegetables, liver, fish bones) — build bones and teeth (calcium), carry oxygen in blood (iron) and regulate the body.</li>
              <li><b>Water</b> — carries substances, regulates temperature and makes up most of the body.</li>
              <li><b>Roughage (fibre)</b> — adds bulk to food so waste moves easily and prevents constipation.</li>
            </ul>
            <p><b>Deficiency diseases</b> appear when a class is missing for a long time:</p>
            <ul>
              <li>Protein → <b>kwashiorkor</b> (swollen belly, poor growth in children); severe lack of all food → <b>marasmus</b> (extreme thinness).</li>
              <li>Vitamin A → <b>night blindness</b>; Vitamin B1 → <b>beriberi</b>; Vitamin C → <b>scurvy</b> (bleeding gums); Vitamin D → <b>rickets</b> (soft, bent bones).</li>
              <li>Iron → <b>anaemia</b> (weakness, pale blood); Iodine → <b>goitre</b> (swollen neck).</li>
            </ul>
            <div class="worked"><b>Worked example (meal planning):</b> A plate of rice (carbohydrate) + beans and fish (protein) + vegetables and fruit (vitamins and minerals) + a glass of water is balanced. Rice and stew alone, every day, lacks enough protein, vitamins and fibre.</div>

            <h3>6. Health, disease and their prevention</h3>
            <p><b>Health</b> is complete well-being of body and mind — not merely the absence of disease. A <b>disease</b> is any condition that disturbs the normal working of the body. Causes include <b>germs</b> (bacteria, viruses, parasites), <b>deficient diet</b>, <b>inherited defects</b> and <b>unhealthy habits</b>.</p>
            <ul>
              <li><b>Malaria</b> — spread by the bite of the <b>female Anopheles mosquito</b>; prevented with insecticide-treated nets, clearing stagnant water and screening windows.</li>
              <li><b>Cholera</b> — from food or water contaminated with faeces; prevented by boiling or treating drinking water, washing hands and covering food.</li>
              <li><b>Tuberculosis</b> — a coughing sickness of the lungs spread in air; prevented by ventilation, BCG immunisation and completing treatment.</li>
              <li><b>Measles, polio</b> — viral diseases largely prevented by <b>immunisation</b> (vaccines train the body to fight germs).</li>
              <li><b>Ringworm, scabies</b> — from sharing towels, combs and clothes; prevented by personal hygiene.</li>
            </ul>
            <p><b>Personal hygiene habits:</b> bathe at least twice daily; brush teeth morning and night; wash hands with soap before eating and after the toilet; wear clean clothes; keep nails short; cover food and water; sleep under a treated net.</p>
            <p><b>Community hygiene:</b> keep gutters and drains clear, dispose of refuse in bins (not on vacant plots), provide pipe-borne or treated water, and build proper latrines/toilets away from water sources.</p>

            <h3>7. Rest, sleep and exercise</h3>
            <ul>
              <li><b>Sleep</b> repairs the body and brain; children and teenagers need about 8-10 hours nightly. Lack of sleep causes tiredness, poor memory and weak resistance to disease.</li>
              <li><b>Rest</b> relaxes tired muscles after work — not all rest is sleep; sitting quietly after football also rests the body.</li>
              <li><b>Exercise</b> strengthens the heart and muscles, improves blood circulation and keeps weight healthy. Daily play, walking and sport count — but exercise must not be so hard that it injures.</li>
              <li><b>Posture</b> — sitting and standing straight protects the spine; heavy loads should be shared by both arms or carried on the head with care.</li>
            </ul>

            <h3>8. First aid</h3>
            <p><b>First aid</b> is the immediate help given to a sick or injured person before professional treatment arrives. Its aims are to <b>preserve life</b>, <b>prevent the condition worsening</b> and <b>promote recovery</b>.</p>
            <ul>
              <li><b>Cuts:</b> wash around the wound, press gently with a clean cloth to stop bleeding, cover with a clean dressing; see a nurse for deep cuts (tetanus injection may be needed).</li>
              <li><b>Burns/scalds:</b> pour cool (not icy) running water over the area for several minutes; cover loosely with clean cloth; never apply toothpaste or engine oil.</li>
              <li><b>Fainting:</b> lay the person flat with legs raised, loosen tight clothing, let fresh air circulate.</li>
              <li><b>Fracture (suspected broken bone):</b> do not move the limb — support it and get help.</li>
              <li>Always <b>report</b> accidents to an adult and record what happened.</li>
            </ul>
            <div class="worked"><b>First aid box contents:</b> cotton wool, bandages and gauze, antiseptic, iodine, adhesive plasters, scissors, safety pins, disposable gloves — and a list of emergency numbers.</div>

            <h3>9. Growth and development</h3>
            <p><b>Growth</b> is a permanent increase in size, height and mass — it can be measured. <b>Development</b> is the improvement of skills and abilities: a baby learns to sit, crawl, walk and talk. Both proceed together from birth through childhood and adolescence to adulthood.</p>
            <div class="formula">EXAM TRAP: growth is measurable (cm, kg); development is about ability. A question may ask you to distinguish them — do not use them as one word.</div>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> List the seven characteristics of living things. <i>Ans: movement, respiration, nutrition, irritability, growth, excretion, reproduction (MR NIGER D).</i></li>
              <li><b>Q2.</b> Why is a motor car not a living thing although it moves? <i>Ans: it does not grow, reproduce, respire in cells, excrete or respond like living things — it shows none of the life processes on its own.</i></li>
              <li><b>Q3.</b> Name the food class needed for (a) energy, (b) growth and repair, (c) preventing constipation. <i>Ans: (a) carbohydrates, (b) proteins, (c) roughage/fibre.</i></li>
              <li><b>Q4.</b> State the deficiency disease caused by lack of (a) vitamin C, (b) iron, (c) protein in children. <i>Ans: (a) scurvy, (b) anaemia, (c) kwashiorkor.</i></li>
              <li><b>Q5.</b> Give three ways of preventing malaria. <i>Ans: insecticide-treated nets; clearing stagnant water where mosquitoes breed; window screens (also: treated clothing, indoor spraying).</i></li>
              <li><b>Q6.</b> What is first aid, and what should you do first for a burn? <i>Ans: immediate help before professional care; pour cool running water over the burn for several minutes and cover it loosely.</i></li>
            </ul>
            <div class="formula">SUMMARY: Living things alone show ALL of MR NIGER D. They are built of cells organised into tissues, organs and systems. A balanced diet of six classes plus fibre keeps the body healthy; deficiency, germs and poor hygiene cause disease; hygiene, immunisation, rest, exercise and first-aid knowledge protect health.</div>
"""

MATTER = """
            <h3>1. What is matter?</h3>
            <p><b>Matter</b> is anything that has <b>mass</b> and <b>occupies space</b> (has volume). Your body, your desk, the water you drink and even the air you breathe are matter. Light, heat and sound are <b>not</b> matter — they have no mass and take up no space; they are forms of energy.</p>
            <ul>
              <li><b>Mass</b> is the amount of matter in a body, measured in kilograms (kg) with a beam balance. Mass is the same everywhere.</li>
              <li><b>Weight</b> is the pull of gravity on that mass, measured in newtons (N) with a spring balance. Weight changes from place to place (less on a mountain, far less on the Moon).</li>
              <li><b>Volume</b> is the space a body occupies — solids by measurement, liquids with a measuring cylinder, irregular solids by water displacement.</li>
            </ul>
            <div class="worked"><b>Displacement activity:</b> Put 50 cm3 of water in a measuring cylinder, drop in a stone, and read the new level (say 68 cm3). The stone's volume is 68 - 50 = <b>18 cm3</b>.</div>

            <h3>2. The three states of matter and the particle theory</h3>
            <p>All matter is made of tiny <b>particles</b> (atoms and molecules) that are always moving. The state of a substance depends on how closely its particles are packed and how fast they move.</p>
            <svg viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Particle arrangement in solids, liquids and gases">
              <rect x="10" y="20" width="130" height="90" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
              <g fill="#4f46e5"><circle cx="35" cy="45" r="8"/><circle cx="75" cy="45" r="8"/><circle cx="115" cy="45" r="8"/><circle cx="35" cy="85" r="8"/><circle cx="75" cy="85" r="8"/><circle cx="115" cy="85" r="8"/></g>
              <text x="75" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Solid: tight, regular</text>
              <rect x="160" y="20" width="130" height="90" fill="#ecfeff" stroke="#0891b2" stroke-width="2"/>
              <g fill="#0891b2"><circle cx="185" cy="80" r="8"/><circle cx="215" cy="90" r="8"/><circle cx="245" cy="78" r="8"/><circle cx="200" cy="55" r="8"/><circle cx="240" cy="50" r="8"/><circle cx="270" cy="70" r="8"/></g>
              <text x="225" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Liquid: close, loose</text>
              <rect x="310" y="20" width="130" height="90" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
              <g fill="#dc2626"><circle cx="335" cy="40" r="8"/><circle cx="410" cy="55" r="8"/><circle cx="360" cy="95" r="8"/><circle cx="330" cy="90" r="8"/><circle cx="415" cy="100" r="8"/></g>
              <text x="375" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Gas: far apart, fast</text>
            </svg>
            <ul>
              <li><b>Solids</b> — particles packed tightly in a fixed pattern, only vibrating. A solid keeps its shape and volume, and cannot be compressed.</li>
              <li><b>Liquids</b> — particles close but free to slide over one another. A liquid keeps its volume but takes the <b>shape of its container</b>, flows, and is almost impossible to compress.</li>
              <li><b>Gases</b> — particles far apart, moving rapidly in all directions. A gas has no fixed shape or volume: it <b>fills any container</b> completely and is easily <b>compressed</b> (e.g. air in a tyre or gas cylinder).</li>
            </ul>
            <div class="formula">EXAM LINE: solids keep shape AND volume; liquids keep volume but not shape; gases keep neither — and only gases compress easily.</div>

            <h3>3. Properties of matter</h3>
            <p><b>Physical properties</b> can be observed or measured without changing the substance into something new:</p>
            <ul>
              <li><b>State, colour, odour and taste</b> — how matter appears to the senses (never taste unknown substances!).</li>
              <li><b>Melting point and boiling point</b> — the fixed temperatures at which a pure solid melts and a pure liquid boils; impurities change them.</li>
              <li><b>Density</b> — mass per unit volume; it decides whether things float or sink.</li>
              <li><b>Solubility</b> — whether a substance dissolves in a solvent such as water.</li>
              <li><b>Conductivity</b> — whether it carries heat or electricity (metals do; wood and plastic do not).</li>
              <li><b>Malleability and ductility</b> — being hammered into sheets (aluminium) and drawn into wires (copper).</li>
            </ul>
            <p><b>Chemical properties</b> describe how a substance changes into new substances: iron <b>rusts</b> in damp air, paper <b>burns</b>, milk <b>sours</b>, food <b>digests</b>.</p>

            <h3>4. Changes of state</h3>
            <p>Heating a substance gives its particles more energy; cooling removes energy. Matter therefore changes state at particular temperatures:</p>
            <ul>
              <li><b>Melting</b> — solid → liquid at the <b>melting point</b> (ice melts at 0 degC).</li>
              <li><b>Evaporation</b> — liquid → vapour at any temperature, from the surface only.</li>
              <li><b>Boiling</b> — liquid → vapour rapidly throughout the liquid at the fixed <b>boiling point</b> (pure water boils at 100 degC at normal pressure).</li>
              <li><b>Condensation</b> — vapour → liquid when cooled (dew on grass; droplets on a cold drink bottle).</li>
              <li><b>Freezing (solidification)</b> — liquid → solid at the freezing point (water freezes at 0 degC).</li>
              <li><b>Sublimation</b> — solid → vapour directly on heating, without melting: <b>camphor (eka), iodine, ammonium chloride</b>. The reverse (vapour → solid) is also called sublimation/deposition.</li>
            </ul>
            <div class="worked"><b>Key point:</b> during melting or boiling the temperature stays CONSTANT even though heating continues — the heat is used to break the bonds between particles, not to raise temperature.</div>

            <h3>5. Evaporation, boiling and cooling</h3>
            <ul>
              <li><b>Evaporation</b> happens at ALL temperatures, only at the surface, quietly. The fastest (most energetic) particles escape first, so the remaining liquid COOLS — this is why <b>sweating cools the body</b> and why a wet cloth on the forehead reduces fever.</li>
              <li>Evaporation is faster when it is hot, windy, dry, or the liquid is spread out (a puddle dries faster than the same water in a cup).</li>
              <li><b>Boiling</b> happens at one fixed temperature, throughout the liquid, with bubbles. Adding salt or impurities RAISES the boiling point; lowering pressure (high mountain) LOWERS it — a pressure cooker raises pressure so food cooks above 100 degC.</li>
            </ul>

            <h3>6. Evidence that matter is made of particles</h3>
            <ul>
              <li><b>Diffusion</b> — particles spread from where they are many to where they are few. The smell of frying onions travels through the house; a drop of ink colours a whole cup of still water; perfume spreads across a room.</li>
              <li><b>Brownian motion</b> — smoke particles in air (or pollen in water) jiggle in zigzags because invisible, fast-moving particles keep bumping into them — direct evidence that matter is made of moving particles.</li>
              <li>Diffusion is fastest in gases, slower in liquids, and extremely slow in solids — the particles of gases move fastest and are freest.</li>
            </ul>

            <h3>7. Physical and chemical changes</h3>
            <ul>
              <li><b>Physical change</b> — NO new substance is formed, and the change is usually reversible: melting ice, dissolving salt in water, tearing paper, a bulb glowing.</li>
              <li><b>Chemical change</b> — a NEW substance is formed, and the change is usually irreversible: burning wood or a candle wick, rusting of iron, souring of milk, cooking food, digesting a meal.</li>
            </ul>
            <div class="formula">TEST: ask 'can I get the original substance back by simple means?' Ice → water → ice (physical). Paper → ash (chemical — ash cannot become paper again).</div>

            <h3>8. Elements, mixtures and compounds</h3>
            <ul>
              <li><b>Mixture</b> — two or more substances physically combined in ANY proportion; each keeps its own properties and can be separated physically (sand and salt; air; a bowl of rice and beans).</li>
              <li><b>Compound</b> — two or more elements CHEMICALLY combined in a FIXED proportion, with entirely new properties, separable only by chemical means: water (H2O), common salt (NaCl), carbon(IV) oxide (CO2).</li>
              <li><b>Element</b> — a substance that cannot be split into simpler substances by chemical means: iron, gold, oxygen, hydrogen.</li>
            </ul>
            <div class="worked"><b>Compare:</b> sodium (a reactive metal) + chlorine (a poisonous gas) combine to form common salt — safe to eat. The compound's properties are nothing like its elements' — that is the mark of a chemical combination.</div>

            <h3>9. Simple separation methods</h3>
            <ul>
              <li><b>Filtration</b> — separates an insoluble solid from a liquid (sand from water) using filter paper; the solid left is the <b>residue</b>, the liquid passing through is the <b>filtrate</b>.</li>
              <li><b>Evaporation</b> — recovers a dissolved solid (salt from salt solution) by driving off the water.</li>
              <li><b>Decantation</b> — carefully pouring off a liquid from a settled solid (mud water after standing).</li>
              <li><b>Sieving</b> — separates solids of different sizes (stones from sand).</li>
              <li><b>Magnetic separation</b> — a magnet lifts iron filings from a mixture.</li>
              <li><b>Separating funnel</b> — separates immiscible liquids such as oil and water (oil floats on top).</li>
              <li><b>Winnowing</b> — wind blows away lighter chaff from heavier grain.</li>
            </ul>

            <h3>10. Density: floating and sinking</h3>
            <div class="formula">Density = mass / volume   (units: g/cm3 or kg/m3)</div>
            <p>A body floats in a fluid if it is LESS dense than the fluid and sinks if it is MORE dense. That is why a steel ship floats (its hollow shape makes its overall density less than water) while a steel nail sinks. Water has a density of 1 g/cm3.</p>
            <div class="worked"><b>Worked example:</b> A stone has mass 60 g and volume 24 cm3. Density = 60/24 = <b>2.5 g/cm3</b> — more than water's 1 g/cm3, so the stone sinks.</div>

            <h3>11. Expansion and contraction</h3>
            <p>Matter expands when heated (particles vibrate or move farther apart) and contracts when cooled. Gases expand most, liquids less, solids least. Everyday results: expansion gaps in bridges and railway lines; overhead wires hung slack so winter contraction cannot snap them; a tight metal lid loosened under hot water; thick glass cracking when hot water is poured in suddenly (uneven expansion).</p>

            <h3>12. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define matter and give two examples of things that are NOT matter. <i>Ans: anything with mass that occupies space; light, heat, sound and shadows are not matter.</i></li>
              <li><b>Q2.</b> Why can gases be compressed but solids cannot? <i>Ans: gas particles are far apart with room to be pushed closer; solid particles are already tightly packed.</i></li>
              <li><b>Q3.</b> Name the changes: (a) solid to liquid, (b) liquid to vapour throughout the liquid, (c) solid straight to vapour. <i>Ans: (a) melting, (b) boiling, (c) sublimation.</i></li>
              <li><b>Q4.</b> Give two pieces of evidence that matter is made of tiny moving particles. <i>Ans: diffusion (smells spreading, ink colouring water) and Brownian motion (smoke/pollen jiggling).</i></li>
              <li><b>Q5.</b> Classify: burning of kerosene, melting of butter, rusting of a nail, dissolving sugar. <i>Ans: chemical, physical, chemical, physical.</i></li>
              <li><b>Q6.</b> A metal block has mass 540 g and volume 200 cm3. Find its density and say whether it floats on water. <i>Ans: 540/200 = 2.7 g/cm3; more dense than water (1 g/cm3), so it sinks.</i></li>
            </ul>
            <div class="formula">SUMMARY: Matter has mass and volume and exists as solid, liquid or gas depending on its particles' spacing and motion. It shows physical and chemical properties, changes state at fixed temperatures, may be an element, mixture or compound, and can be separated or measured using density and simple laboratory methods.</div>
"""

def replace_content(title, new_content):
    global s
    m = re.findall(r"\n(\s*)title: '" + re.escape(title) + r"',", s)
    assert len(m) == 1, ('anchor', title, len(m))
    i = s.index("\n" + m[0] + "title: '" + title + "',")
    j = s.index('content: `', i)
    k = j + len('content: `')
    end = s.index('`', k)
    assert 'title:' not in s[k:end] or s[k:end].count('title:') == 0, 'content span looks wrong'
    s = s[:k] + new_content + s[end:]

replace_content('Living Things & Health', LIVING)
replace_content('Matter, Its Properties & Changes', MATTER)

open(PATH, 'w', encoding='utf-8').write(s)
print('deep lessons written:', len(LIVING), '+', len(MATTER), 'chars')
