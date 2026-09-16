export default {

    color: 'amber', icon: '🛠️', blurb: 'Technical drawing, construction, tools, materials and machines — the JSS technology course.',
    topics: {
      JSS1: [
        {
          title: 'Technology in Everyday Life',
          tags: ['What technology is', 'History', 'Benefits & costs'],
          summary: 'Technology defined, from clay pots to smartphones — how it changes food, health, communication and work, and what it costs.',
          content: `
            <h3>1. What is technology?</h3>
            <p><b>Technology</b> is the application of knowledge, tools and skills to solve human problems and make work easier. <b>Basic Technology</b> is the foundation subject that introduces you to how things are made, how tools and machines work, how materials behave, and how to work safely and neatly with your hands. Everything around you — your chair, your phone, the road, the light bulb — is technology.</p>
            <ul>
              <li>Technology is NOT only computers and phones: a broom, a calabash, a bicycle and a bridge are all technology.</li>
              <li>Technology answers the question: "How can we do this <b>easier, faster, better or safer</b>?"</li>
              <li>Science discovers <i>why</i> things happen; technology uses that knowledge to <i>make</i> useful things. Science says water boils at 100°C; technology builds the kettle.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Carrying water on your head from a stream = old technology. Boring a borehole with a hand pump = improved technology. Piping treated water into the house = advanced technology. Same problem (we need water), three levels of technology — each one reduces human effort.</div>

            <h3>2. Simple vs advanced technology around you</h3>
            <table>
              <tr><th>Task</th><th>Simple technology</th><th>Advanced technology</th></tr>
              <tr><td>Grinding pepper</td><td>grinding stone</td><td>blender</td></tr>
              <tr><td>Sweeping</td><td>broom (broom made from palm fronds)</td><td>vacuum cleaner</td></tr>
              <tr><td>Clearing a farm</td><td>cutlass and hoe</td><td>tractor</td></tr>
              <tr><td>Sending a message</td><td>drum beats, town crier</td><td>mobile phone, internet</td></tr>
              <tr><td>Lighting the house</td><td>candle, lantern, torch</td><td>electric bulb, solar light</td></tr>
              <tr><td>Preserving food</td><td>drying/smoking</td><td>refrigerator</td></tr>
            </table>
            <p>Simple technology is not "bad" technology — it is cheap, easy to repair and often needs no electricity. Exams accept both, but you must be able to <b>compare</b> them: speed, effort, cost, energy source and skill required.</p>

            <h3>3. A short history: the four ages of technology</h3>
            <ul>
              <li><b>Stone Age:</b> tools of stone, wood and bone; hunting and gathering; fire discovered.</li>
              <li><b>Metal Age:</b> smelting gave bronze and iron — hoes, cutlasses, spears; farming expanded.</li>
              <li><b>Machine Age (Industrial Revolution):</b> steam engines, factories, railways; machines replaced muscle.</li>
              <li><b>Information Age:</b> computers, phones and the internet; machines now handle <i>information</i>, not just force.</li>
            </ul>
            <div class="formula">MEMORY HOOK: Stone → Metal → Machine → Information. "Some Men Make Iron" doesn't fit? Use the story: first we shaped <b>stones</b>, then we smelted <b>metals</b>, then we built <b>machines</b>, now we share <b>information</b>.</div>

            <h3>4. Benefits of technology in daily life</h3>
            <ul>
              <li><b>Home:</b> cooking (gas cooker), preservation (fridge), cleaning (iron, blender), comfort (fan).</li>
              <li><b>School:</b> printing, computers, projectors, the bell or PA system, even the desk you sit on.</li>
              <li><b>Health:</b> vaccines, X-ray machines, microscopes, ambulances — people live longer.</li>
              <li><b>Transport:</b> bicycles, buses, trains, aeroplanes — distance shrank.</li>
              <li><b>Communication:</b> from town crier to smartphone — information now travels instantly.</li>
              <li><b>Work and wealth:</b> machines multiply human effort; one tractor farms what a hundred hoes would.</li>
            </ul>

            <h3>5. The other side: negative effects of technology</h3>
            <ul>
              <li><b>Pollution:</b> factory smoke, vehicle exhaust, plastic and electronic waste.</li>
              <li><b>Unemployment:</b> machines replace some workers (a combine harvester replaces many farmhands).</li>
              <li><b>Health issues:</b> too much screen time, noise pollution, poor posture.</li>
              <li><b>Loss of skills and culture:</b> people forget hand crafts; some traditions fade.</li>
              <li><b>Crime and danger:</b> weapons become deadlier; fraud travels by phone too.</li>
            </ul>
            <p>Exam answers on "effects of technology" score best when you give <b>both sides with an example each</b> — never write only the good or only the bad.</p>

            <h3>6. Technology as a system: input → process → output</h3>
            <p>Every technological system takes <b>inputs</b> (materials, energy, people, information), applies a <b>process</b> (the work done) and produces an <b>output</b> (product or service), sometimes with <b>feedback</b> to improve.</p>
            <div class="diagram"><svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Input process output diagram: flour and heat enter as inputs, baking is the process, bread is the output, with a feedback arrow from output back to process">
              <rect x="20" y="50" width="110" height="50" rx="10" fill="#4f46e5"/><text x="75" y="72" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">INPUT</text><text x="75" y="88" text-anchor="middle" font-size="9" fill="#e0e7ff">flour, heat, hands</text>
              <path d="M130 75 L170 75" stroke="#334155" stroke-width="2" marker-end="url(#arrT)"/>
              <defs><marker id="arrT" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#334155" stroke-width="1.5"/></marker></defs>
              <rect x="172" y="50" width="110" height="50" rx="10" fill="#f59e0b"/><text x="227" y="72" text-anchor="middle" font-size="10" font-weight="800" fill="#78350f">PROCESS</text><text x="227" y="88" text-anchor="middle" font-size="9" fill="#78350f">mixing + baking</text>
              <path d="M282 75 L322 75" stroke="#334155" stroke-width="2" marker-end="url(#arrT)"/>
              <rect x="324" y="50" width="110" height="50" rx="10" fill="#10b981"/><text x="379" y="72" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">OUTPUT</text><text x="379" y="88" text-anchor="middle" font-size="9" fill="#d1fae5">bread</text>
              <path d="M379 100 C379 128 227 128 227 102" stroke="#64748b" stroke-width="1.8" fill="none" stroke-dasharray="4 3" marker-end="url(#arrT)"/>
              <text x="300" y="134" text-anchor="middle" font-size="9" fill="#475569">feedback: too pale? bake longer next time</text>
            </svg></div>
            <div class="worked"><b>More examples:</b> Tailoring: input = cloth, thread, skill; process = measuring, cutting, sewing; output = shirt. Phone call: input = your voice + electricity; process = network transmission; output = sound at the other end. Any exam question "describe a technological system" = list these three boxes for any activity you choose.</div>

            <h3>7. Careers born by technology</h3>
            <ul>
              <li><b>Craft and trade:</b> carpenter, welder, tailor, mechanic, bricklayer, electrician.</li>
              <li><b>Professional:</b> engineer (civil, mechanical, electrical), architect, technologist, draughtsman.</li>
              <li><b>Modern:</b> computer programmer, web designer, phone repairer, solar installer.</li>
            </ul>
            <p>Basic Technology is the seed of all these careers — it teaches the language of tools, materials, drawing and safety that every one of them speaks.</p>

            <h3>8. Technology and the Nigerian home — quick inventory</h3>
            <ul>
              <li>Energy converters: gas cooker (chemical → heat), iron (electrical → heat), fan (electrical → motion), bulb (electrical → light).</li>
              <li>Communication: radio, television, mobile phone.</li>
              <li>Work-savers: blender, grinder, washing board → washing machine, borehole pump.</li>
              <li>Exam favourite: "state the energy change in a pressing iron" — electrical energy to heat energy. Memorise the common conversions.</li>
            </ul>

            <h3>9. Energy conversions you must know cold</h3>
            <table>
              <tr><th>Device</th><th>Input energy</th><th>Output energy</th></tr>
              <tr><td>Pressing iron</td><td>electrical</td><td>heat</td></tr>
              <tr><td>Electric fan</td><td>electrical</td><td>motion (kinetic)</td></tr>
              <tr><td>Electric bulb</td><td>electrical</td><td>light (+ some heat)</td></tr>
              <tr><td>Gas cooker</td><td>chemical</td><td>heat</td></tr>
              <tr><td>Battery (in use)</td><td>chemical</td><td>electrical</td></tr>
              <tr><td>Solar panel</td><td>light (solar)</td><td>electrical</td></tr>
              <tr><td>Microphone</td><td>sound</td><td>electrical</td></tr>
              <tr><td>Loudspeaker</td><td>electrical</td><td>sound</td></tr>
            </table>
            <div class="worked"><b>How exams phrase it:</b> "Which of the following converts electrical energy to heat energy?" — scan for iron, kettle, toaster, heater. "Which converts chemical to electrical?" — cell/battery. Two seconds per question if this table lives in your head. And remember that most devices waste some energy as heat — a bulb's main job is light, but it "leaks" heat; examiners call that the unwanted output.</div>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define technology. <i>Ans: the application of knowledge, tools and skills to solve human problems and make work easier.</i></li>
              <li><b>Q2.</b> Give one simple and one advanced technology for grinding. <i>Ans: grinding stone; blender.</i></li>
              <li><b>Q3.</b> Name the four ages of technology in order. <i>Ans: stone, metal, machine, information.</i></li>
              <li><b>Q4.</b> State two benefits of technology in health. <i>Ans: any two — vaccines, X-ray, microscope, ambulance.</i></li>
              <li><b>Q5.</b> State two negative effects of technology. <i>Ans: any two — pollution, unemployment, e-waste, screen-time health issues.</i></li>
              <li><b>Q6.</b> In the bread system, what is the process? <i>Ans: mixing and baking (the work done on the inputs).</i></li>
              <li><b>Q7.</b> What energy change occurs in an electric fan? <i>Ans: electrical energy → kinetic (motion) energy.</i></li>
              <li><b>Q8.</b> Name two careers in technology. <i>Ans: any two — electrician, engineer, architect, carpenter, programmer.</i></li>
              <li><b>Q9.</b> Why is simple technology still useful in Nigeria? <i>Ans: cheap, easy to repair, often needs no electricity/fuel.</i></li>
              <li><b>Q10.</b> Which age introduced the steam engine and factories? <i>Ans: the machine age (Industrial Revolution).</i></li>
              <li><b>Q11.</b> Energy change in a solar panel? <i>Ans: light energy to electrical energy.</i></li>
              <li><b>Q12.</b> Energy change in a microphone? <i>Ans: sound energy to electrical energy.</i></li>
            </ul>
            <div class="formula">SUMMARY: technology is applied knowledge aimed at making work easier — from grinding stones to smartphones; it developed through the stone, metal, machine and information ages; its benefits touch home, school, health, transport and communication while its costs include pollution, unemployment and lost skills; every technological system can be described as input → process → output with feedback; energy-conversion examples (iron: electrical to heat; fan: electrical to motion) are exam gold; and the subject seeds careers from carpentry to engineering — understand these and "technology in everyday life" becomes free marks.</div>

`,
          cards: [
            { q: 'Define technology.', a: 'Technology is the application of scientific knowledge, skills and tools to solve human problems and make life easier — from a simple matchet to a computer.' },
            { q: 'Give four examples of technology used in the Nigerian home.', a: 'Blenders and gas cookers, refrigerators, mobile phones, televisions, generators and solar lamps.' },
            { q: 'What is the difference between developed and underdeveloped technology?', a: 'Developed technology uses advanced machines and power (tractors, computers); underdeveloped (indigenous) technology relies on simple hand tools and human effort (hoe, local loom) — both solve problems at different scales.' },
            { q: 'State three advantages of technology.', a: 'Work is done faster and with less effort; communication and transport are quicker; medicine and food production improve, raising the quality of life.' },
            { q: 'State three disadvantages or dangers of technology.', a: 'Pollution from factories and vehicles; machines replacing some jobs (unemployment); accidents and health problems from misuse; and over-dependence (e.g. phone addiction).' },
            { q: 'Name three examples of indigenous Nigerian technology.', a: 'The local loom for weaving (aso-oke, akwete), blacksmithing of hoes and knives, pottery firing, and palm-oil processing with local presses.' },
            { q: 'List the steps of the technological/design process.', a: 'Identify the need or problem, gather information, plan/design, make/construct the solution, test and evaluate it, then improve it.' },
            { q: 'How has technology improved communication? Give three examples.', a: 'Mobile phones and the internet give instant calls, messaging and email; radio and television broadcast information; satellites link the whole world in real time.' },
            { q: 'How does technology improve agriculture? Give three examples.', a: 'Tractors plough far faster than hoes; improved seeds and fertilisers raise yields; irrigation supplies water in the dry season, and machines process harvests quickly.' },
            { q: 'Name three careers that depend on technology.', a: 'Engineering (mechanical, electrical, civil), information technology (programming, networking), medical technology (scanning, laboratory equipment), and architecture.' },
            { q: 'Why is safety important when using technology?', a: 'Machines, electricity and chemicals can injure or kill if misused — instructions, guards, protective clothing and correct handling prevent accidents.' },
            { q: 'How can technology help Nigeria develop? Give two examples.', a: 'Better technology raises production and creates wealth (mechanised farming, factories) and improves services (online banking, e-learning, telemedicine) — driving economic growth.' },
            { q: 'Define technology in one sentence.', a: 'The application of scientific knowledge, tools and skills to solve human problems and make work easier.' },
            { q: 'One ancient and one modern technology for storing food?', a: 'Ancient: clay pots, drying racks and smoking. Modern: the refrigerator, which slows spoilage microbes with cold.' },
            { q: 'Two negative effects of technology?', a: 'Pollution from factories, generators and vehicles; and machines replacing some human jobs, plus over-dependence when systems fail.' }
          ],
          quiz: [
            { q: 'Technology is best defined as...', options: ['the application of scientific knowledge and tools to solve problems', 'the study of living things', 'only computers and phones', 'the building of roads'], correct: 0, exp: 'Technology applies science, skills and tools to meet human needs — from a matchet to a satellite.' },
            { q: 'A local hand loom for weaving aso-oke is an example of...', options: ['indigenous technology', 'developed technology', 'information technology', 'space technology'], correct: 0, exp: 'Indigenous (local) technology uses traditional tools and methods developed within the community.' },
            { q: 'What is the FIRST step of the design/technological process?', options: ['Identify the need or problem', 'Make the product', 'Test the product', 'Advertise it'], correct: 0, exp: 'Every design starts by identifying a need or problem, then gathering information, planning, making, testing and improving.' },
            { q: 'Name two disadvantages of technology.', options: ['Pollution and unemployment', 'Faster work and comfort', 'Better medicine and travel', 'Cheaper food and clothing'], correct: 0, exp: 'Factories and vehicles pollute, machines replace some jobs, and misuse brings accidents — every advance has a cost to manage.' },
            { q: 'Give two ways technology has improved agriculture.', options: ['Tractors and improved seeds', 'Hand hoes only', 'Storing grain in pots', 'Waiting for rain alone'], correct: 0, exp: 'Tractors plough faster, improved seeds and fertilisers raise yields, and irrigation supplies water in the dry season.' },
            { q: 'Technology is best defined as:', options: ['applying knowledge and tools to solve problems', 'only computers', 'magic', 'only machines with engines'], correct: 0,
              exp: 'Science discovers; technology applies. A pot and a phone are both technology.' },
            { q: 'Which is an ANCIENT technology?', options: ['Clay pot', 'Smartphone', 'Drone', 'Laptop'], correct: 0,
              exp: 'Clay pots, canoes and blacksmith knives served early societies.' },
            { q: 'Which technology preserves food at home?', options: ['Refrigerator', 'Radio', 'Television', 'Electric bell'], correct: 0,
              exp: 'Cold slows the microbes that spoil food.' },
            { q: 'On the farm, a tractor\'s main advantage is:', options: ['it does in hours what hoes take weeks to do', 'it sings', 'it needs no fuel', 'it replaces rain'], correct: 0,
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
              exp: 'Simple machines count: wheel, axle and lever make one person do two people\'s work.' }
          ]
        },
        {
          title: 'Common Tools & Their Uses',
          tags: ['Hand tools', 'Tool care', 'Safety'],
          summary: 'The tools every workshop bench starts with, what each one does, and how to use and store them safely.',
          content: `
            <h3>1. What is a tool, and why the right one matters</h3>
            <p>A <b>tool</b> is any instrument held and worked by hand (or by hand with a machine) to do a job: cutting, measuring, marking, driving, holding or finishing. The first law of the workshop is: <b>the right tool for the right job</b>. Using a screwdriver as a chisel ruins the screwdriver, ruins the work, and may ruin your eye. Exams test three things about tools: <b>naming</b> them, <b>stating their uses</b>, and <b>describing their care</b>.</p>
            <ul>
              <li>Hand tools are grouped by job: measuring, marking, cutting, driving/holding, and finishing.</li>
              <li>A good worker can name every tool in the box and say exactly what each one does — that is half of Basic Technology itself.</li>
              <li>Before using any tool, check that it is <b>sharp, tight and uncracked</b>; a loose hammer head is a flying missile.</li>
            </ul>

            <h3>2. Measuring tools — the eyes of the workshop</h3>
            <table>
              <tr><th>Tool</th><th>Measures</th><th>Note</th></tr>
              <tr><td>Steel rule / ruler</td><td>length in mm and cm</td><td>read at eye level, avoid worn ends</td></tr>
              <tr><td>Tape rule</td><td>longer lengths</td><td>wood, metal or cloth tapes for rooms and fields</td></tr>
              <tr><td>Calipers (outside/inside)</td><td>thickness, diameters</td><td>used with a rule to read them</td></tr>
              <tr><td>Try square</td><td>right angles (90°)</td><td>tests whether an edge is square</td></tr>
              <tr><td>Straight edge</td><td>flatness/straightness</td><td>a true ruler without graduations</td></tr>
            </table>
            <div class="formula">Watch out — TRAP: a rule measures, a try square does NOT measure length — it checks squareness. "Which tool checks that two edges meet at 90°?" → try square.</div>

            <h3>3. Marking and setting-out tools</h3>
            <ul>
              <li><b>Pencil / carpenter's pencil:</b> first lines on wood; the flat pencil marks broad faces.</li>
              <li><b>Scriber:</b> the "pencil of metal work" — scratches lines on metal surfaces.</li>
              <li><b>Dividers:</b> two pointed legs; steps off equal distances and transfers measurements, like a compass without the pencil.</li>
              <li><b>Centre punch:</b> makes a small dent to guide the drill bit so it does not wander.</li>
              <li><b>Chalk line / marking gauge:</b> long straight layout lines; the gauge scribes a line parallel to an edge.</li>
            </ul>

            <h3>4. Cutting tools</h3>
            <ul>
              <li><b>Saws:</b> crosscut saw (across the grain), rip saw (along the grain), hacksaw (metal — thin teeth in a frame), coping saw (curves).</li>
              <li><b>Chisels:</b> wood chisel (bevel edge) pares wood; flat/cold chisel cuts sheet metal and bolts.</li>
              <li><b>Files:</b> smooth and shape after cutting; named by cut: rough (bastard), smooth, second-cut.</li>
              <li><b>Snips / shears:</b> cut sheet metal like scissors; tin snips for thin gauge.</li>
              <li><b>Pliers and cutters:</b> combination pliers grip and cut wire; side cutters snip.</li>
            </ul>
            <div class="worked"><b>Worked example (exam style):</b> "Name the tool for cutting metal rods." → hacksaw. "For cutting curves in thin wood?" → coping saw. "For smoothing a metal edge after cutting?" → file. Three classic one-mark answers.</div>

            <h3>5. Driving, tightening and holding tools</h3>
            <ul>
              <li><b>Hammers:</b> ball-pein (engineers' hammer, metalwork), claw hammer (drives AND pulls nails in woodwork), mallet (wooden — strikes chisels without bruising them).</li>
              <li><b>Screwdrivers:</b> flat/flat-blade for slotted screws; Phillips/star for cross-headed screws; size must fit the slot or it chews it.</li>
              <li><b>Spanners:</b> open-jaw, box and adjustable — turn nuts and bolts; the adjustable one fits many sizes but grips less firmly.</li>
              <li><b>Holding:</b> bench vice (grips metal work), woodworking vice, G-clamp (clamps work to a bench), hand vice for tiny pieces.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Toolbox map: five labelled groups of tools: measuring (rule, try square), marking (scriber, punch), cutting (saw, chisel, file), driving (hammer, screwdriver, spanner), holding (vice, clamp)">
              <rect x="10" y="10" width="84" height="60" rx="9" fill="#4f46e5"/><text x="52" y="30" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">MEASURE</text><text x="52" y="45" text-anchor="middle" font-size="8" fill="#e0e7ff">rule, tape,</text><text x="52" y="57" text-anchor="middle" font-size="8" fill="#e0e7ff">try square</text>
              <rect x="102" y="10" width="84" height="60" rx="9" fill="#0ea5e9"/><text x="144" y="30" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">MARK</text><text x="144" y="45" text-anchor="middle" font-size="8" fill="#e0f2fe">pencil, scriber,</text><text x="144" y="57" text-anchor="middle" font-size="8" fill="#e0f2fe">dividers, punch</text>
              <rect x="194" y="10" width="84" height="60" rx="9" fill="#10b981"/><text x="236" y="30" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">CUT</text><text x="236" y="45" text-anchor="middle" font-size="8" fill="#d1fae5">saws, chisels,</text><text x="236" y="57" text-anchor="middle" font-size="8" fill="#d1fae5">files, snips</text>
              <rect x="286" y="10" width="84" height="60" rx="9" fill="#f59e0b"/><text x="328" y="30" text-anchor="middle" font-size="9" font-weight="800" fill="#78350f">DRIVE</text><text x="328" y="45" text-anchor="middle" font-size="8" fill="#78350f">hammers, screw-</text><text x="328" y="57" text-anchor="middle" font-size="8" fill="#78350f">drivers, spanners</text>
              <rect x="378" y="10" width="72" height="60" rx="9" fill="#f43f5e"/><text x="414" y="30" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">HOLD</text><text x="414" y="45" text-anchor="middle" font-size="8" fill="#ffe4e6">vice,</text><text x="414" y="57" text-anchor="middle" font-size="8" fill="#ffe4e6">G-clamp</text>
              <text x="230" y="95" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">Every job follows the chain: measure → mark → cut → drive/fix → check.</text>
              <text x="230" y="115" text-anchor="middle" font-size="9" fill="#475569">A workshop task always runs in this order — memorise the chain.</text>
            </svg></div>

            <h3>6. Finishing tools and why surfaces matter</h3>
            <ul>
              <li><b>Files and rasps:</b> rasps (wood, coarse teeth) remove fast; files (metal) refine.</li>
              <li><b>Sandpaper / glass paper:</b> grades from coarse (60) to fine (220); always finish along the grain on wood.</li>
              <li><b>Scrapers and planes:</b> the plane shaves wood to true a surface; the jack plane roughs, the smoothing plane finishes.</li>
              <li><b>Polish, paint, varnish:</b> protect and beautify — surface protection is part of finishing too.</li>
            </ul>

            <h3>7. Tool care: the six habits of a craftsman</h3>
            <ul>
              <li><b>Clean</b> after use — dust and moisture start rust.</li>
              <li><b>Oil</b> metal faces lightly (especially saw blades, chisels, calipers) before storage.</li>
              <li><b>Store properly:</b> hang tools or rack them; cutting edges never knock against each other.</li>
              <li><b>Sharpen</b> cutting tools when dull — a dull chisel slips and bites hands.</li>
              <li><b>Repair</b> loose handles immediately; a hammer head must never wobble.</li>
              <li><b>Never misuse:</b> screwdriver ≠ chisel; spanner ≠ hammer; rule ≠ scraper.</li>
            </ul>
            <div class="formula">Watch out — TRAP: "State three ways of maintaining a hacksaw." → clean it, oil the blade lightly, hang it or store it so teeth touch nothing, and release blade tension if the frame allows. Maintenance answers always want: clean, oil, store, sharpen/repair.</div>

            <h3>8. Safety with hand tools (quick but examinable)</h3>
            <ul>
              <li>Cut <b>away</b> from your body; chisel and knife edges travel when they slip.</li>
              <li>Carry pointed tools with the point <b>down</b> and forward, never up at face level.</li>
              <li>Clamp small work — the hand that holds the piece should not be near the cutting edge.</li>
              <li>Keep handles tight and heads sound; discard mushroomed chisel heads and cracked hammer faces.</li>
              <li>Return tools to their rack after use — a chisel left on a bench edge falls on toes.</li>
            </ul>

            <h3>9. Reading a steel rule like a professional</h3>
            <ul>
              <li>Start from the 1 cm mark, not the worn end, and subtract — carpenters and machinists both do this.</li>
              <li>Read with the eye directly above the line (no slant), or your reading drifts — this error is called parallax.</li>
              <li>Metric workshop language is millimetres: "35" means 35 mm; 10 mm = 1 cm, 1000 mm = 1 m.</li>
              <li>To measure a diameter (a ball, a pipe), calipers take the size and the rule reads the calipers — the rule alone cannot hug a curve.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A steel rule reads from a damaged zero. You start at 10 mm and the far end lines up with 67 mm. True length = 67 − 10 = 57 mm. Subtracting the starting mark is the fix for every worn rule.</div>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Which tool checks squareness? <i>Ans: try square.</i></li>
              <li><b>Q2.</b> Tool for cutting metal rods? <i>Ans: hacksaw.</i></li>
              <li><b>Q3.</b> The engineer's hammer is the ___ hammer. <i>Ans: ball-pein.</i></li>
              <li><b>Q4.</b> Which hammer pulls out nails? <i>Ans: claw hammer.</i></li>
              <li><b>Q5.</b> Tool that guides a drill bit? <i>Ans: centre punch.</i></li>
              <li><b>Q6.</b> Which screwdriver for a cross-headed screw? <i>Ans: Phillips (star) screwdriver.</i></li>
              <li><b>Q7.</b> State two ways of caring for a chisel. <i>Ans: any two — clean after use, oil lightly, sharpen when dull, store safely.</i></li>
              <li><b>Q8.</b> What does a G-clamp do? <i>Ans: holds work firmly to the bench.</i></li>
              <li><b>Q9.</b> Order the workshop chain. <i>Ans: measure → mark → cut → drive/fix → check/finish.</i></li>
              <li><b>Q10.</b> Why is a dull chisel dangerous? <i>Ans: it needs more force and can slip, cutting the hand.</i></li>
              <li><b>Q11.</b> Which file cuts fastest, bastard or smooth? <i>Ans: bastard (coarse cut).</i></li>
              <li><b>Q12.</b> Give one misuse of a screwdriver. <i>Ans: using it as a chisel or punch.</i></li>
              <li><b>Q13.</b> A rule starts at 10 mm and the end reads 45 mm. Length? <i>Ans: 35 mm.</i></li>
              <li><b>Q14.</b> Which plane roughs out a wood surface quickly? <i>Ans: jack plane.</i></li>
            </ul>
            <div class="formula">SUMMARY: tools are grouped by job — measuring (rule, tape, calipers, try square), marking (pencil, scriber, dividers, centre punch), cutting (saws, chisels, files, snips), driving and tightening (ball-pein and claw hammers, mallet, screwdrivers, spanners), holding (vices and G-clamps) and finishing (files, rasps, sandpaper, planes); every workshop job follows the chain measure → mark → cut → fix → finish; and a craftsman is known by care — clean, oil, store, sharpen, repair and never misuse — because the right tool, used rightly and kept well, is the whole of safe, neat work.</div>

`,
          cards: [
            { q: 'Classify hand tools into five groups with one example each.', a: 'Cutting (saw, chisel, knife), driving (hammer, screwdriver), measuring (tape, rule, try square), holding (bench vice, pliers, G-clamp) and boring (hand drill).' },
            { q: 'What is a try square used for?', a: 'Testing and marking right angles (squareness) on wood and metal, and marking straight lines across a workpiece.' },
            { q: 'Name two types of screwdriver and their matching screws.', a: 'The flat-head (single slot) and the Phillips (star/cross-head) screwdriver — each must match its screw head to avoid damaging it.' },
            { q: 'Which saw cuts metal, and which cuts wood across the grain?', a: 'A hacksaw cuts metal; a cross-cut saw cuts wood across the grain (a rip saw cuts along the grain; a tenon saw, with its stiff back, cuts precise joints).' },
            { q: 'What is a bench vice used for?', a: 'Holding work firmly on the workbench while it is cut, filed or hammered, so both hands are free and the work cannot slip.' },
            { q: 'Name three measuring tools and what each measures.', a: 'Steel rule (short straight lengths), tape measure (long lengths and curves), calipers (internal/external diameters), try square (squareness), protractor (angles).' },
            { q: 'State four ways of caring for hand tools.', a: 'Clean them after use, oil metal parts to prevent rust, store them in a toolbox or on a rack (not on the floor), and repair or replace damaged handles immediately.' },
            { q: 'State three safety rules when using hand tools.', a: 'Use each tool only for its proper purpose, keep cutting edges sharp (dull tools slip), carry sharp tools pointing downwards, and never use tools with broken handles.' },
            { q: 'What is the difference between a spanner and a wrench?', a: 'Both turn nuts and bolts; a spanner is made to fit standard nut sizes (ring or open-jaw), while an adjustable wrench (monkey wrench) can be set to many sizes.' },
            { q: 'Which tool would you use to: (a) draw out a nail, (b) drill a small hole, (c) smooth rough wood?', a: '(a) Claw hammer or pincers; (b) hand drill or power drill; (c) a plane, then sandpaper.' },
            { q: 'Why should you choose the right tool for each job?', a: 'The right tool works faster and more accurately, keeps you safe, and avoids damaging the tool and the workpiece — using a screwdriver as a chisel ruins both.' },
            { q: 'Match: spanner, plier, hacksaw, file, try square.', a: 'Spanner turns nuts and bolts; plier grips and cuts wires; hacksaw cuts metal; file smooths edges; try square checks and marks 90°.' },
            { q: 'How should sharp tools be carried?', a: 'Point down at your side, edge away from the body — never over the shoulder or swinging.' },
            { q: 'Three rules of tool care?', a: 'Clean after use, oil metal parts against rust, and return every tool to its rack so nothing is lost or stepped on.' },
            { q: 'Why must a screwdriver never be used as a chisel?', a: 'Its tip is hardened to turn screws; struck like a chisel it can snap and fly into an eye.' }
          ],
          quiz: [
            { q: 'Which tool holds work firmly on the bench while you saw or file it?', options: ['Bench vice', 'Hammer', 'Chisel', 'Spanner'], correct: 0, exp: 'A bench vice clamps the work to the bench, leaving both hands free and preventing slips.' },
            { q: 'Which saw is used for cutting metal?', options: ['Hacksaw', 'Cross-cut saw', 'Rip saw', 'Tenon saw'], correct: 0, exp: 'The hacksaw has a fine, hard blade for metal; the others are wood saws.' },
            { q: 'What does a try square check?', options: ['Whether corners and edges are at right angles', 'The length of a board', 'The weight of a tool', 'The sharpness of a blade'], correct: 0, exp: 'The try square tests squareness (90 deg) and marks straight lines across a workpiece.' },
            { q: 'State two ways of caring for hand tools.', options: ['Cleaning, oiling and storing them properly', 'Leaving them outside', 'Using them for any job', 'Throwing them in a pile'], correct: 0, exp: 'Clean tools after use, oil metal parts against rust, and store them safely — cared-for tools last for years.' },
            { q: 'Which screwdriver fits a star-shaped screw head?', options: ['Phillips screwdriver', 'Flat-head screwdriver', 'Try square', 'File'], correct: 0, exp: 'The Phillips (star/cross-head) screwdriver matches star-headed screws; the flat-head matches single-slot screws.' },
            { q: 'A hammer is used to:', options: ['drive nails', 'cut metal', 'measure angles', 'smooth wood'], correct: 0,
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
              exp: 'The hacksaw\'s fine hard teeth cut metal; a wood saw would clog.' },
            { q: 'Rough edges are smoothed with a:', options: ['file', 'hammer', 'spanner', 'divider'], correct: 0,
              exp: 'Files shave small amounts to shape and smooth.' },
            { q: 'Long and curved distances are measured with a:', options: ['tape rule', 'try square', 'plier', 'mallet'], correct: 0,
              exp: 'The flexible tape follows curves that a ruler cannot.' },
            { q: 'Wood is carved with a chisel and a:', options: ['mallet', 'spanner', 'tape rule', 'plier'], correct: 0,
              exp: 'The mallet strikes the chisel; a hammer would damage its handle.' },
            { q: 'Sharp tools should be carried:', options: ['point down, away from the body', 'over the shoulder', 'in the mouth', 'swinging at speed'], correct: 0,
              exp: 'Point down at your side, so a stumble cannot drive the point into anyone.' }
          ]
        },
        {
          title: 'Technical Drawing: Instruments, Lines & Lettering',
          tags: ['Drawing instruments', 'Line conventions', 'Title block'],
          summary: 'The tools of the drawing board, the standard line types, and how to lay out a sheet properly.',
          content: `
            <h3>1. Technical drawing: the engineer&apos;s language</h3>
            <p><b>Technical drawing</b> is the neat, accurate drawing engineers, architects and craftsmen use to describe objects so exactly that a stranger can build the object from the drawing alone. That is why it is called the <b>universal language of engineers</b> — a drawing made in Lagos can be read in Tokyo without a single spoken word. Unlike artistic drawing (which expresses feelings and allows personal style), technical drawing obeys strict rules: true proportions, standard lines, standard lettering and standard sheet layouts.</p>
            <ul>
              <li>Artistic drawing = expression; technical drawing = <b>exact information</b>.</li>
              <li>Every line on a technical drawing means something specific — that is the grammar of the language.</li>
              <li>Exams test three blocks here: <b>instruments and their uses</b>, <b>types of lines</b>, and <b>lettering/sheet layout</b>.</li>
            </ul>

            <h3>2. The instruments and exactly what each one does</h3>
            <table>
              <tr><th>Instrument</th><th>Use</th></tr>
              <tr><td>Drawing board</td><td>smooth flat surface; paper is taped to it</td></tr>
              <tr><td>T-square</td><td>draws horizontal lines; guides the set squares</td></tr>
              <tr><td>Set squares (45° and 30°/60°)</td><td>draw vertical and inclined lines at exact angles</td></tr>
              <tr><td>Compass</td><td>draws circles and arcs; steps off equal distances</td></tr>
              <tr><td>Dividers</td><td>transfers and divides distances (no pencil leg)</td></tr>
              <tr><td>Protractor</td><td>measures and sets angles in degrees</td></tr>
              <tr><td>Scale rule</td><td>measures and draws to reduced/enlarged ratios</td></tr>
              <tr><td>French curves</td><td>draws smooth non-circular curves</td></tr>
              <tr><td>Pencils (H, HB)</td><td>H (hard) for light construction lines; HB for finishing outlines</td></tr>
              <tr><td>Drawing paper + tape/clips</td><td>the sheet itself, held flat at the corners</td></tr>
            </table>
            <div class="formula">Watch out — TRAP: horizontal lines come from the T-square; vertical lines come from a set square resting ON the T-square. "Which instrument draws horizontal lines?" → T-square, not set square.</div>

            <h3>3. Caring for drawing instruments</h3>
            <ul>
              <li>Keep the T-square and set squares flat — never bend them or hang them on nails.</li>
              <li>Do not cut or score paper on the board with a blade against the T-square&apos;s working edge.</li>
              <li>Keep the compass joint firm but smooth; a wobbling compass draws drunken circles.</li>
              <li>Sharpen pencils to a chisel or conical point and keep them away from the clean sheet.</li>
              <li>Clean instruments after use and return them to the box or case — lost dividers are a rite of passage nobody wants.</li>
            </ul>

            <h3>4. Types of lines and what each one says</h3>
            <table>
              <tr><th>Line</th><th>Look</th><th>Meaning</th></tr>
              <tr><td>Outline (object line)</td><td>thick continuous</td><td>the visible edges of the object</td></tr>
              <tr><td>Hidden line</td><td>short dashes, medium</td><td>edges you cannot see from this view</td></tr>
              <tr><td>Centre line</td><td>long-short-long chain, thin</td><td>axes of circles and symmetry</td></tr>
              <tr><td>Dimension line</td><td>thin, arrows at ends</td><td>carries the measurement number</td></tr>
              <tr><td>Extension (projection) line</td><td>thin, sticks out from the object</td><td>shows what the dimension line measures</td></tr>
              <tr><td>Leader line</td><td>thin, slanted with arrow + note</td><td>points a note at a feature</td></tr>
              <tr><td>Hatching</td><td>thin 45° parallel lines</td><td>cut surfaces in sections</td></tr>
              <tr><td>Border line</td><td>thick continuous frame</td><td>frames the working area of the sheet</td></tr>
            </table>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line specimen chart: outline thick solid, hidden dashed, centre chain, dimension with arrows, hatching at 45 degrees, each labelled">
              <rect x="8" y="8" width="444" height="174" rx="10" fill="#f8fafc" stroke="#0f172a" stroke-width="3"/>
              <line x1="30" y1="40" x2="200" y2="40" stroke="#0f172a" stroke-width="4"/><text x="215" y="44" font-size="10" fill="#0f172a" font-weight="700">OUTLINE — visible edges</text>
              <line x1="30" y1="70" x2="200" y2="70" stroke="#334155" stroke-width="2.5" stroke-dasharray="8 5"/><text x="215" y="74" font-size="10" fill="#0f172a" font-weight="700">HIDDEN — unseen edges</text>
              <line x1="30" y1="100" x2="200" y2="100" stroke="#334155" stroke-width="1.5" stroke-dasharray="14 4 3 4"/><text x="215" y="104" font-size="10" fill="#0f172a" font-weight="700">CENTRE — axes &amp; symmetry</text>
              <line x1="30" y1="130" x2="200" y2="130" stroke="#334155" stroke-width="1.2"/><path d="M30 130 l8 -4 v8 z M200 130 l-8 -4 v8 z" fill="#334155"/><text x="215" y="134" font-size="10" fill="#0f172a" font-weight="700">DIMENSION — carries the size</text>
              <g stroke="#64748b" stroke-width="1.2"><line x1="30" y1="168" x2="52" y2="148"/><line x1="44" y1="168" x2="66" y2="148"/><line x1="58" y1="168" x2="80" y2="148"/><line x1="72" y1="168" x2="94" y2="148"/><line x1="86" y1="168" x2="108" y2="148"/><line x1="100" y1="168" x2="122" y2="148"/></g><text x="215" y="162" font-size="10" fill="#0f172a" font-weight="700">HATCHING — cut surfaces at 45°</text>
            </svg></div>

            <h3>5. Lettering: the handwriting of engineers</h3>
            <ul>
              <li>Technical lettering is <b>single-stroke Gothic</b> — each letter is drawn in one even weight of line, upright or sloped at about 75°.</li>
              <li>Letters must be <b>uniform in height and spacing</b>; guide lines are drawn lightly first and erased after.</li>
              <li>Common heights: 3.5 mm to 5 mm for notes; bigger for titles. Capitals are preferred for labels.</li>
              <li>Why it matters: a drawing is a legal-ish document — a misread 3 as an 8 can change a size by millimetres and ruin a part.</li>
              <li>Practise rule: draw letters with single confident strokes; never &apos;paint&apos; them in with repeated rubbing.</li>
              <li>Space check: the gaps between words should be about the width of one letter; crowded words read like one long word.</li>
            </ul>
            <div class="worked"><b>Worked example (exam style):</b> "State two qualities of good lettering." → uniform height, uniform spacing, clean single strokes, consistent slope. Any two score.</div>

            <h3>6. Sheet layout: borders and the title block</h3>
            <ul>
              <li>Every sheet gets a <b>border line</b> leaving a margin (about 10 mm; wider on the binding edge).</li>
              <li>The <b>title block</b> sits at the bottom-right corner and carries: drawing title, designer&apos;s name, sheet number, scale, date, and sometimes the institution or company.</li>
              <li><b>Scale</b> states the ratio of drawing to reality: 1:1 full size, 1:2 reduced, 2:1 enlarged. A 600 mm desk drawn 1:10 becomes 60 mm on paper.</li>
            </ul>
            <div class="formula">Watch out — TRAP: scale 1:50 means 1 unit on paper = 50 units in real life — the SMALLER number belongs to the paper. Reading it backwards makes buildings fit in shoeboxes.</div>

            <h3>7. Keeping drawings clean and accurate</h3>
            <ul>
              <li>Work from the centre outwards and from top to left-to-right so your hand never drags over fresh lines.</li>
              <li>Construction lines stay LIGHT (2H/H); only final outlines get darkened (HB).</li>
              <li>One clean erasure beats five smudged corrections; shield the rest of the sheet while erasing.</li>
              <li>Check twice: every circle has its centre line, every hidden edge its dashes, every size its dimension.</li>
            </ul>

            <h3>8. Three constructions you can do right now</h3>
            <ul>
              <li><b>Parallel horizontal lines:</b> slide the T-square up the board&apos;s left edge, lock it, and draw along its top edge at each height. Every line is parallel to the last — the board&apos;s edge is the reference.</li>
              <li><b>Vertical and 45° lines:</b> rest a set square on the T-square&apos;s blade; draw along the set square&apos;s vertical edge for 90°, or along the hypotenuse of the 45° square for 45°. Sliding the set square along a locked T-square gives evenly spaced verticals.</li>
              <li><b>A circle with centre lines:</b> mark the centre, draw a light horizontal and vertical centre line through it (chain thin), set the compass radius, place the needle exactly on the centre, and sweep once with a slight forward lean. Darken only the circle.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "Draw two horizontal lines 20 mm apart and join them with a vertical." → lock T-square, draw line 1; slide up 20 mm using the scale on the square or rule; draw line 2; rest the 45°/60° square&apos;s vertical edge on the T-square and connect. Three instruments, one neat rectangle. Notice the order again: light construction first, check the size, then darken the final lines — neatness is not decoration, it is information.</div>

            <h3>9. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Why is technical drawing called the universal language of engineers? <i>Ans: any trained person anywhere can read the same drawing without spoken words.</i></li>
              <li><b>Q2.</b> Instrument for horizontal lines? <i>Ans: T-square.</i></li>
              <li><b>Q3.</b> Instrument for vertical and inclined lines? <i>Ans: set squares.</i></li>
              <li><b>Q4.</b> Which pencil for construction lines? <i>Ans: H (hard), e.g. 2H.</i></li>
              <li><b>Q5.</b> Line that shows unseen edges? <i>Ans: hidden line (short dashes).</i></li>
              <li><b>Q6.</b> Line that marks the axis of a circle? <i>Ans: centre line.</i></li>
              <li><b>Q7.</b> Where is the title block placed? <i>Ans: bottom-right corner of the sheet.</i></li>
              <li><b>Q8.</b> Name three things in a title block. <i>Ans: any three — title, name, scale, date, sheet number.</i></li>
              <li><b>Q9.</b> Scale 1:5 means? <i>Ans: 1 unit on paper represents 5 units on the real object.</i></li>
              <li><b>Q10.</b> State two qualities of good lettering. <i>Ans: uniform height and spacing; single-stroke; consistent slope.</i></li>
              <li><b>Q11.</b> Instrument that measures angles? <i>Ans: protractor.</i></li>
              <li><b>Q12.</b> Two ways to care for set squares. <i>Ans: keep flat, do not cut against them, wipe clean, store safely.</i></li>
              <li><b>Q13.</b> Which line is drawn first, construction or outline? <i>Ans: light construction lines first; outlines darkened last.</i></li>
              <li><b>Q14.</b> A 900 mm board drawn at 1:20 is how long on paper? <i>Ans: 45 mm.</i></li>
            </ul>
            <div class="formula">SUMMARY: technical drawing is the exact, standardised language of engineers; its toolkit is the board, T-square, set squares, compass, dividers, protractor, scale, French curves and graded pencils; its grammar is the line types — outline, hidden, centre, dimension, extension, leader, hatching, border; its handwriting is single-stroke lettering on guide lines; and every sheet is framed by a border and signed off in a bottom-right title block carrying title, name, scale, date and sheet number.</div>

`,
          cards: [
            { q: 'Name five drawing instruments and one use of each.', a: 'T-square (horizontal lines), set squares (vertical and inclined lines), compass (circles and arcs), divider (transferring measurements), protractor (angles), and pencils for lines.' },
            { q: 'What is the T-square used for, and how is it held?', a: 'Drawing horizontal lines and supporting set squares — its head slides along the left edge of the board; always draw from left to right along the top edge of the blade.' },
            { q: 'State the angles of the two set squares and two angles they can produce together.', a: '45-45-90 and 30-60-90 set squares; used alone they give 30, 45, 60 and 90 deg lines, and combined they give 15 and 75 deg lines.' },
            { q: 'Describe the line types used in technical drawing: visible edges, hidden details, and centre lines.', a: 'Visible outlines: continuous THICK lines; hidden details: short dashes; centre lines: alternating long and short dashes; dimension lines: thin continuous lines with arrowheads.' },
            { q: 'What is lettering in technical drawing, and what makes it good?', a: 'The printing of notes, titles and dimensions in single-stroke, uniform CAPITAL letters along guidelines — even height, spacing and slope make drawings easy to read.' },
            { q: 'What information goes in the title block?', a: 'The drawing title, the draughtsman\'s name, the date, the scale used, the drawing number, and the projection symbol — usually in the bottom right corner.' },
            { q: 'What do pencil grades H, HB and B mean?', a: 'H pencils are hard (light, sharp lines for construction), B are soft (dark lines for outlines), and HB is between them — the higher the number, the harder or blacker.' },
            { q: 'What is drawing scale, and give an example.', a: 'Scale is the ratio of the drawing size to the real size: 1:1 (full size), 1:50 (reduction — 1 cm represents 50 cm) or 2:1 (enlargement).' },
            { q: 'What is a pair of dividers used for?', a: 'Stepping off equal distances and transferring measurements — not for drawing lines.' },
            { q: 'What is the difference between first and third angle projection?', a: 'In first angle the object is between the observer and the plane (views are placed opposite); in third angle the plane is between (views are placed on the same side).' },
            { q: 'What line type shows a hidden detail?', a: 'A short-dashed (hidden) line. Continuous thick lines show visible outlines.' },
            { q: 'Which line type shows hidden edges, and which shows centre lines?', a: 'Hidden edges are short dashed lines; centre lines are long-short-long chain lines; visible outlines are continuous thick.' },
            { q: 'What does scale 1:50 mean, and is it reducing or enlarging?', a: '1 cm on paper stands for 50 cm in real life — a reducing scale, used to fit big objects on a sheet.' },
            { q: 'What belongs in the title block?', a: 'The drawing\'s title, the draughtsman\'s name, the date, the scale used and the projection method — placed bottom right.' },
            { q: 'Difference between a compass and dividers?', a: 'A compass draws circles and arcs; dividers only step off and transfer equal distances without drawing.' }
          ],
          quiz: [
            { q: 'Which instrument is used to draw horizontal lines?', options: ['T-square', 'Divider', 'Compass', 'Protractor'], correct: 0, exp: 'The T-square slides along the left edge of the board to draw horizontal lines and to support set squares.' },
            { q: 'In technical drawing, hidden details are shown with...', options: ['short dashed lines', 'thick continuous lines', 'zigzag lines', 'dotted circles'], correct: 0, exp: 'Line convention: thick continuous = visible outlines; short dashes = hidden edges; long-short-long dashes = centre lines.' },
            { q: 'Which set square has 30 deg and 60 deg angles?', options: ['The 30/60 set square', 'The 45 set square', 'The T-square', 'The protractor'], correct: 0, exp: 'Set squares come as 45-45-90 and 30-60-90; combining them gives 15 deg and 75 deg lines too.' },
            { q: 'Name two items of information found in a title block.', options: ['The drawing title and the scale', 'The cost of the paper', 'The colour of the board', 'The weather'], correct: 0, exp: 'The title block carries the title, draughtsman\'s name, date, scale, drawing number and projection symbol.' },
            { q: 'What does the pencil grade HB mean?', options: ['Medium hardness — between H and B', 'Very hard and light', 'Very soft and black', 'Used only for colouring'], correct: 0, exp: 'H pencils are hard (light construction lines), B are soft (dark outlines), and HB sits in the middle for general work.' },
            { q: 'Which instrument draws horizontal lines?', options: ['T-square', 'Compass', 'Protractor', 'Dividers'], correct: 0,
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
              exp: 'They carry a distance from the rule to the drawing without marking the rule.' }
          ]
        },
        {
          title: 'Safety in the Workshop',
          tags: ['Personal safety', 'Tool safety', 'First aid'],
          summary: 'The rules that prevent accidents, and what to do when one happens.',
          content: `
            <h3>1. What safety means and why it is non-negotiable</h3>
            <p><b>Safety</b> in the workshop is the set of habits, rules and protections that prevent accidents, injuries and damage while we work. An <b>accident</b> is an unplanned event that causes harm — and the hard truth of workshops is that almost every accident is traceable to a broken rule: a floor left wet, a guard removed, a tool used wrongly, a machine left running. Safety is therefore not a subject you pass; it is a habit you practise every single time you enter the workshop.</p>
            <ul>
              <li>A safe workshop is a productive workshop: one injured hand stops a whole week of work.</li>
              <li>The law and your school both require it — but the real reason is people: machines can be replaced, fingers cannot.</li>
              <li>Exam language: <b>hazard</b> = anything that can cause harm; <b>risk</b> = the chance that the harm actually happens.</li>
            </ul>

            <h3>2. Common workshop hazards, one by one</h3>
            <table>
              <tr><th>Hazard</th><th>Where it lives</th><th>What it does</th></tr>
              <tr><td>Slippery floors</td><td>oil, water, grease spills</td><td>falls onto machines and edges</td></tr>
              <tr><td>Moving machine parts</td><td>gears, belts, chucks, blades</td><td>catches loose cloth, hair, fingers</td></tr>
              <tr><td>Sharp edges &amp; flying chips</td><td>cutting tools, grinding</td><td>cuts and eye injuries</td></tr>
              <tr><td>Electricity</td><td>frayed cords, wet hands, open sockets</td><td>shock and burns</td></tr>
              <tr><td>Fire</td><td>fuel, paint, gas, sparks</td><td>burns and destruction</td></tr>
              <tr><td>Dust and fumes</td><td>sawdust, paint spray, welding</td><td>lung and eye damage over time</td></tr>
              <tr><td>Noise</td><td>grinders, hammers, machines</td><td>gradual hearing loss</td></tr>
              <tr><td>Falling objects</td><td>poorly stacked stock, loose hammer heads</td><td>crushes feet and heads</td></tr>
            </table>
            <div class="formula">Watch out — TRAP: a hazard is the THING (a spinning blade); a risk is the CHANCE it hurts you (high if unguarded, low if guarded). Exams love asking the difference.</div>

            <h3>3. Personal Protective Equipment (PPE) — your personal armour</h3>
            <ul>
              <li><b>Safety goggles:</b> eyes vs flying chips, dust and sparks — the most-used PPE in any workshop.</li>
              <li><b>Overalls/apron:</b> keeps loose clothing in; cotton overalls resist sparks better than flappy sleeves.</li>
              <li><b>Boots (steel-toe where heavy):</b> feet vs falling tools and sharp offcuts.</li>
              <li><b>Gloves:</b> for handling rough or hot material — but NEVER near rotating machine parts that can grab them.</li>
              <li><b>Helmet/hard hat:</b> heads vs falling objects on sites.</li>
              <li><b>Ear muffs/plugs:</b> ears vs continuous loud noise.</li>
              <li><b>Nose mask/respirator:</b> lungs vs dust and fumes.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A workshop worker wearing labelled protective equipment: helmet, goggles, mask, overalls, gloves, boots">
              <rect x="8" y="8" width="444" height="194" rx="10" fill="#f0fdf4" stroke="#166534" stroke-width="2"/>
              <circle cx="230" cy="52" r="20" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
              <path d="M208 46 a22 22 0 0 1 44 0 l0 -8 a22 14 0 0 0 -44 0 z" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
              <rect x="214" y="46" width="32" height="8" rx="4" fill="#38bdf8" stroke="#075985" stroke-width="1.5"/>
              <rect x="222" y="60" width="16" height="8" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
              <rect x="206" y="74" width="48" height="66" rx="10" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
              <rect x="192" y="78" width="12" height="48" rx="6" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
              <rect x="256" y="78" width="12" height="48" rx="6" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
              <rect x="190" y="124" width="16" height="12" rx="4" fill="#fbbf24" stroke="#92400e" stroke-width="1.5"/>
              <rect x="254" y="124" width="16" height="12" rx="4" fill="#fbbf24" stroke="#92400e" stroke-width="1.5"/>
              <rect x="212" y="140" width="14" height="40" rx="5" fill="#1e293b"/>
              <rect x="234" y="140" width="14" height="40" rx="5" fill="#1e293b"/>
              <rect x="208" y="178" width="22" height="10" rx="3" fill="#78350f"/>
              <rect x="232" y="178" width="22" height="10" rx="3" fill="#78350f"/>
              <g font-size="9.5" fill="#14532a" font-weight="700">
                <line x1="252" y1="34" x2="320" y2="30" stroke="#166534"/><text x="324" y="33">helmet — falling objects</text>
                <line x1="248" y1="50" x2="320" y2="52" stroke="#166534"/><text x="324" y="55">goggles — flying chips</text>
                <line x1="240" y1="64" x2="320" y2="74" stroke="#166534"/><text x="324" y="77">mask — dust &amp; fumes</text>
                <line x1="254" y1="100" x2="320" y2="100" stroke="#166534"/><text x="324" y="103">overalls — no loose cloth</text>
                <line x1="270" y1="130" x2="320" y2="126" stroke="#166534"/><text x="324" y="129">gloves — rough &amp; hot work</text>
                <line x1="256" y1="182" x2="320" y2="170" stroke="#166534"/><text x="324" y="173">boots — falling tools</text>
                <text x="24" y="40">Dress like this and the</text>
                <text x="24" y="54">workshop loses most of</text>
                <text x="24" y="68">its ways to hurt you.</text>
              </g>
            </svg></div>

            <h3>4. The general rules — do and do-not</h3>
            <table>
              <tr><th>DO</th><th>DO NOT</th></tr>
              <tr><td>wear the right PPE before starting</td><td>run, push or play inside the workshop</td></tr>
              <tr><td>keep floors dry and walkways clear</td><td>leave oil, water or tools on the floor</td></tr>
              <tr><td>use each tool only for its job</td><td>use a screwdriver as a chisel, a spanner as a hammer</td></tr>
              <tr><td>clamp small work before cutting</td><td>hold tiny pieces by hand near a blade</td></tr>
              <tr><td>switch off and wait for stillness before adjusting</td><td>touch a machine that is still spinning</td></tr>
              <tr><td>report faults, sparks and frayed cords at once</td><td>attempt repairs you are not trained for</td></tr>
              <tr><td>return tools to their rack after use</td><td>leave tools on machine beds or bench edges</td></tr>
            </table>

            <h3>5. Machine and electrical safety</h3>
            <ul>
              <li>Guards stay ON: a guard removed &apos;just for one cut&apos; is how fingers meet blades.</li>
              <li>No loose sleeves, no dangling jewellery, tie long hair back — rotating parts grab loose things first.</li>
              <li>One person per machine; others stand clear of the operating zone.</li>
              <li>Electrical: dry hands only; pull plugs by the plug, not the cord; never use a machine with a frayed cord; earthing exists so that fault current goes into the ground, not through you.</li>
              <li>If someone is in contact with live electricity, do NOT touch them — switch off at the source or push them free with dry wood.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "Give three safety precautions when using a bench grinder." → wear goggles, stand to the side, check the guard is fitted, let it reach full speed before grinding, never force the work, switch off and wait for the wheel to stop before leaving.</div>

            <h3>6. Fire safety: the triangle and the extinguishers</h3>
            <ul>
              <li>Fire needs three things at once: <b>fuel + heat + oxygen</b> — the fire triangle. Remove any one and the fire dies; every extinguisher works by removing one side of the triangle.</li>
              <li><b>Water:</b> cools ordinary fires (wood, paper) — but NEVER on oil or electrical fires.</li>
              <li><b>Foam:</b> blankets liquid fuel fires.</li>
              <li><b>Dry powder:</b> versatile; good for liquids, gases and electrical fires.</li>
              <li><b>CO2:</b> displaces oxygen; the choice for electrical and fuel fires, leaves no mess.</li>
              <li>Prevention beats fighting: store fuels away from sparks, no open flames near paint and thinners, keep exits clear, know where the extinguisher and sand bucket live.</li>
            </ul>
            <div class="formula">Watch out — TRAP: water on an oil fire spreads burning oil; water on live electricity conducts the shock to YOU. If electricity or oil is involved, water is the wrong answer.</div>

            <h3>7. First aid basics every student should know</h3>
            <ul>
              <li>The <b>first aid box</b> holds: sterile gauze and bandages, cotton wool, antiseptic solution, adhesive plasters, scissors, burns ointment and a pair of gloves.</li>
              <li><b>Cut:</b> wash/antiseptic, press clean gauze to stop bleeding, bandage; deep or dirty cuts go to the nurse.</li>
              <li><b>Burn:</b> cool with clean running water for several minutes; do not burst blisters; cover loosely; no toothpaste, no oil — those are home myths that infect burns.</li>
              <li><b>Electric shock:</b> isolate the power first; then check breathing and get help.</li>
              <li><b>Eye particle:</b> do not rub; rinse with clean water; stubborn particles see the nurse.</li>
              <li>Always report every injury, however small — &apos;it is nothing&apos; wounds are how infections start.</li>
            </ul>

            <h3>8. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define a hazard and a risk. <i>Ans: hazard = something that can cause harm; risk = the chance that it does.</i></li>
              <li><b>Q2.</b> PPE for the eyes? <i>Ans: safety goggles.</i></li>
              <li><b>Q3.</b> When must gloves NOT be worn? <i>Ans: near rotating machine parts that can grab them.</i></li>
              <li><b>Q4.</b> Name the three sides of the fire triangle. <i>Ans: fuel, heat, oxygen.</i></li>
              <li><b>Q5.</b> Best extinguisher for an electrical fire? <i>Ans: CO2 (or dry powder) — never water.</i></li>
              <li><b>Q6.</b> First action for a person touching live wire? <i>Ans: switch off/isolate the supply; do not touch them directly.</i></li>
              <li><b>Q7.</b> Three contents of a first aid box. <i>Ans: bandages, antiseptic, cotton wool, plasters, scissors, gloves.</i></li>
              <li><b>Q8.</b> Why tie hair and avoid loose sleeves at machines? <i>Ans: rotating parts catch loose things and pull the person in.</i></li>
              <li><b>Q9.</b> Two reasons for keeping floors dry. <i>Ans: prevent slips/falls; prevent electrical accidents.</i></li>
              <li><b>Q10.</b> Correct first treatment of a burn? <i>Ans: cool with running water, cover loosely, no oils or paste.</i></li>
              <li><b>Q11.</b> Why report small injuries? <i>Ans: infection and worsening are prevented; records keep the workshop safer.</i></li>
              <li><b>Q12.</b> State the order for leaving a machine safely. <i>Ans: switch off, wait for full stop, clean up, return tools.</i></li>
            </ul>
            <div class="formula">SUMMARY: workshop safety is habit, not luck — know the hazards (slips, moving parts, sharp edges, electricity, fire, dust, noise, falling objects); wear the right PPE (goggles, overalls, boots, gloves with care, helmet, ear and lung protection); obey the do/do-not rules; respect machine guards and electricity; remember the fire triangle (fuel + heat + oxygen) and match extinguishers to fire types — water never on oil or live electricity; and treat every injury with first aid and reporting. A craftsman&apos;s first skill is coming home with all ten fingers.</div>

`,
          cards: [
            { q: 'What is workshop safety?', a: 'All the rules, habits and equipment that prevent accidents and injuries while working — safety is everybody\'s responsibility, every time.' },
            { q: 'Name four items of personal protective equipment (PPE).', a: 'Safety goggles (eyes), apron/overalls (body), safety boots (feet), gloves (hands), and a nose mask where there is dust or fumes.' },
            { q: 'State four causes of workshop accidents.', a: 'Carelessness and horseplay, using faulty or wrong tools, slippery or cluttered floors, loose clothing near machines, and tiredness or rushing.' },
            { q: 'State four workshop safety rules.', a: 'No running or playing; keep tools in their places after use; report damaged tools and spills at once; do not operate machines you have not been trained on; keep aisles clear.' },
            { q: 'What is first aid? Name four contents of a first aid box.', a: 'First aid is immediate help given before medical care arrives: bandages, cotton wool, antiseptic solution, iodine, scissors, plasters and gloves.' },
            { q: 'What should you do if a workshop accident happens?', a: 'Stay calm, stop work nearby, give first aid only if trained, report to the teacher/supervisor immediately, and record the accident — never move a seriously injured person unnecessarily.' },
            { q: 'Name two classes of fire and the correct extinguisher for an electrical fire.', a: 'Fires are classed by fuel: solids (wood, paper — water), flammable liquids (petrol — foam or dry powder), and electrical fires — use a CO2 or dry-powder extinguisher, NEVER water.' },
            { q: 'Why must machines have guards, and clothing be fitted?', a: 'Guards cover moving parts (belts, blades) so hands cannot be caught; loose sleeves, ties or jewellery can be pulled into rotating parts — wear fitted clothes and tie back long hair.' },
            { q: 'What is good housekeeping in the workshop, and why does it matter?', a: 'Keeping the workplace clean, dry and organised: sawdust and oil cause slips, clutter causes trips, and stored tools prevent damage — most accidents are housekeeping failures.' },
            { q: 'Give three electrical safety rules for the workshop.', a: 'Do not touch equipment with wet hands, check cables for damage before use, switch off and unplug machines before adjusting them, and never overload sockets.' },
            { q: 'Name the tool used to check whether a surface is level.', a: 'A spirit level. A try square checks for squareness instead.' },
            { q: 'Why should hand tools be oiled before storage?', a: 'Oil forms a protective film that keeps out moisture, so the metal does not rust.' },
            { q: 'List three causes of workshop accidents.', a: 'Wrong or damaged tools, loose clothing or rings near machines, tools left on the floor, horseplay, and poor lighting or clutter.' },
            { q: 'Correct first aid for burns and for electric shock?', a: 'Burns: cool under running water for ten minutes, never butter. Shock: switch off the supply FIRST, then help the person.' },
            { q: 'Why clamp work instead of holding it?', a: 'A bench vice holds the work firmly so both hands stay clear of the cutting tool — holding it yourself risks the blade slipping into your palm.' }
          ],
          quiz: [
            { q: 'Which PPE protects the eyes and the feet?', options: ['Safety goggles and safety boots', 'Apron and gloves', 'Nose mask and cap', 'Ear muffs and apron'], correct: 0, exp: 'Goggles shield the eyes from flying chips; strong boots protect feet from falling tools and materials.' },
            { q: 'Which extinguisher should be used on an electrical fire?', options: ['CO2 or dry powder — never water', 'Water hose', 'Foam only', 'Sand only'], correct: 0, exp: 'Water conducts electricity and can electrocute you; CO2 or dry-powder extinguishers put out electrical fires safely.' },
            { q: 'Why is loose clothing forbidden near rotating machines?', options: ['It can be caught and pulled into moving parts', 'It looks untidy', 'It gets too hot', 'It hides tools'], correct: 0, exp: 'Loose sleeves, ties or jewellery can be grabbed by rotating parts and drag the wearer in — wear fitted clothes and tie back long hair.' },
            { q: 'State two common causes of workshop accidents.', options: ['Carelessness and faulty tools', 'Wearing PPE', 'Good housekeeping', 'Following instructions'], correct: 0, exp: 'Most accidents come from carelessness, horseplay, damaged tools, cluttered floors and rushing — all preventable.' },
            { q: 'What does \'good housekeeping\' mean in the workshop?', options: ['Keeping the workplace clean, dry and organised', 'Painting the walls yearly', 'Buying new machines', 'Locking the workshop'], correct: 0, exp: 'Sweeping sawdust, wiping oil spills and returning tools prevents slips, trips and tool damage — most accidents are housekeeping failures.' },
            { q: 'Which PPE protects the eyes from flying chips?', options: ['Safety goggles', 'Boots', 'Overalls', 'Ear defenders'], correct: 0,
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
              exp: 'Clean it, stop the bleeding with pressure, and cover it cleanly.' }
          ],
        }
      ],
      JSS2: [
        {
          title: 'Geometrical Construction & Plane Figures',
          tags: ['Bisection', 'Angles', 'Triangles & polygons'],
          summary: 'Constructing angles, bisectors, triangles and regular polygons with compass and straight edge only.',
          content: `
            <h3>1. What geometrical construction is</h3>
            <p><b>Geometrical construction</b> is drawing exact shapes using only the classic instruments — compass, straight edge (rule), set squares and protractor — following proven steps instead of guessing by eye. A construction is a recipe: same steps, same perfect result, every time. In Basic Technology it matters because every designed object begins as geometry: a bracket is a triangle, a plate is a circle with holes, a gasket is a polygon.</p>
            <ul>
              <li>Construction lines are drawn <b>light</b> (hard pencil); final answers are darkened at the end.</li>
              <li>The compass point must stay exactly on its mark; a wandering point ruins the whole figure.</li>
              <li>Accuracy is graded: a bisector that misses by 2 mm is wrong, even if it &apos;looks fine&apos;.</li>
            </ul>

            <h3>2. Bisecting a line (cutting it into two equal halves)</h3>
            <ul>
              <li>Draw line AB. Open the compass to more than half of AB.</li>
              <li>With the point on A, draw arcs above and below the line; with the point on B and the SAME radius, draw arcs crossing the first pair at P and Q.</li>
              <li>Draw line PQ. It cuts AB at its midpoint M at 90° — PQ is the <b>perpendicular bisector</b>.</li>
              <li>Check: AM must equal MB. Measuring is part of the method, not an afterthought.</li>
            </ul>

            <h3>3. Perpendiculars and standard angles</h3>
            <ul>
              <li><b>Perpendicular at a point on a line:</b> from point P on the line, mark equal distances each side (X and Y); from X and Y with a larger equal radius, arc above; join the crossing to P.</li>
              <li><b>Perpendicular from a point above a line:</b> from P arc across the line at two points; from those two points small arcs below; join to P.</li>
              <li><b>60°:</b> draw an arc from vertex O crossing one arm at C; same radius from C cuts the arc at D; ray OD makes 60°.</li>
              <li><b>30°:</b> bisect the 60°. <b>90°:</b> add 60° + 30°, or use the perpendicular method. <b>45°:</b> bisect the 90°.</li>
              <li><b>Bisecting any angle:</b> arc from the vertex crosses both arms; from those crossings equal arcs inside; ray from vertex through the crossing splits the angle in half.</li>
            </ul>
            <div class="formula">Watch out — TRAP: bisection means TWO EQUAL halves — if your two result angles do not match on the protractor, the compass radius changed mid-work. Keep one radius until the step says change it.</div>

            <h3>4. Dividing a line into equal parts</h3>
            <ul>
              <li>To split AB into, say, 5 equal parts: draw a light ray from A at any easy angle; step off 5 equal compass marks on it; join the last mark to B; draw lines parallel to that join through each mark (use two set squares sliding against each other).</li>
              <li>The parallels cut AB into 5 exact equal parts — no ruler guessing.</li>
              <li>This trick also transfers ratios: it is how scales and dividers earned their keep before calculators.</li>
            </ul>

            <h3>5. Plane figures: the family album</h3>
            <table>
              <tr><th>Figure</th><th>Definition</th></tr>
              <tr><td>Equilateral triangle</td><td>3 equal sides, all angles 60°</td></tr>
              <tr><td>Isosceles triangle</td><td>2 equal sides and 2 equal base angles</td></tr>
              <tr><td>Right-angled triangle</td><td>one 90° angle; hypotenuse is the longest side</td></tr>
              <tr><td>Square</td><td>4 equal sides, 4 right angles</td></tr>
              <tr><td>Rectangle</td><td>opposite sides equal, 4 right angles</td></tr>
              <tr><td>Parallelogram</td><td>opposite sides parallel and equal</td></tr>
              <tr><td>Rhombus</td><td>4 equal sides, angles not 90°</td></tr>
              <tr><td>Trapezium</td><td>exactly one pair of parallel sides</td></tr>
              <tr><td>Regular polygon</td><td>all sides and all angles equal (pentagon, hexagon...)</td></tr>
            </table>
            <div class="formula">Interior angle sum of any polygon = (n − 2) × 180°, where n = number of sides. Triangle: 180°; quadrilateral: 360°; hexagon: 720°. Each interior angle of a REGULAR polygon = (n − 2) × 180° ÷ n.</div>

            <h3>6. Constructing triangles from given data</h3>
            <ul>
              <li><b>SSS (three sides):</b> draw the base with the rule; compass set to the second side from one end, third side from the other end; the arcs&apos; crossing is the top vertex.</li>
              <li><b>SAS (two sides + included angle):</b> draw one side; set the given angle at its end with protractor/compass; mark the second side&apos;s length along the new ray; join.</li>
              <li><b>ASA (two angles + included side):</b> draw the side; set both angles at its two ends; the rays cross at the third vertex.</li>
              <li>A triangle is rigid: once three correct facts are fixed, the shape cannot change — which is why bridges are full of triangles.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SSS triangle construction: base AB drawn solid, two dashed compass arcs from A and B crossing at C, triangle completed">
              <rect x="8" y="8" width="444" height="184" rx="10" fill="#eff6ff" stroke="#1e40af" stroke-width="2"/>
              <line x1="90" y1="150" x2="300" y2="150" stroke="#0f172a" stroke-width="3"/>
              <path d="M90 150 m118 -96 a118 118 0 0 1 30 40" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6 4"/>
              <path d="M300 150 m-96 -112 a130 130 0 0 0 -44 26" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6 4"/>
              <line x1="90" y1="150" x2="205" y2="52" stroke="#0f172a" stroke-width="3"/>
              <line x1="300" y1="150" x2="205" y2="52" stroke="#0f172a" stroke-width="3"/>
              <circle cx="90" cy="150" r="3.5" fill="#b91c1c"/><circle cx="300" cy="150" r="3.5" fill="#b91c1c"/><circle cx="205" cy="52" r="3.5" fill="#b91c1c"/>
              <text x="82" y="166" font-size="11" font-weight="800" fill="#0f172a">A</text>
              <text x="306" y="166" font-size="11" font-weight="800" fill="#0f172a">B</text>
              <text x="199" y="42" font-size="11" font-weight="800" fill="#0f172a">C</text>
              <text x="330" y="60" font-size="10" fill="#1e40af" font-weight="700">Step 1: draw base AB.</text>
              <text x="330" y="78" font-size="10" fill="#1e40af" font-weight="700">Step 2: arc radius b from A,</text>
              <text x="330" y="94" font-size="10" fill="#1e40af" font-weight="700">arc radius a from B.</text>
              <text x="330" y="110" font-size="10" fill="#1e40af" font-weight="700">Step 3: arcs cross at C —</text>
              <text x="330" y="126" font-size="10" fill="#1e40af" font-weight="700">join AC and BC. Done.</text>
              <text x="330" y="150" font-size="9.5" fill="#475569">Same steps, same perfect</text>
              <text x="330" y="164" font-size="9.5" fill="#475569">triangle, every single time.</text>
            </svg></div>

            <h3>7. Circles and their parts</h3>
            <ul>
              <li><b>Radius</b> (centre to edge), <b>diameter</b> (through centre, = 2r), <b>chord</b> (any line joining two points on the circle), <b>arc</b> (a piece of the edge), <b>sector</b> (slice between two radii), <b>segment</b> (region between chord and arc), <b>tangent</b> (line touching at exactly one point, perpendicular to the radius at that point).</li>
              <li><b>Finding a circle&apos;s centre:</b> draw any two chords, construct each one&apos;s perpendicular bisector; the bisectors cross at the centre.</li>
              <li>Circumference = πd = 2πr; area = πr^2. Take π as 22/7 or 3.14 as the question directs.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a circular plate has radius 7 cm. Circumference = 2 × 22/7 × 7 = 44 cm; area = 22/7 × 7 × 7 = 154 cm^2. The 7s cancel cleanly — examiners LOVE radius 7 with 22/7.</div>

            <h3>8. Perimeter and area of the common plane figures</h3>
            <table>
              <tr><th>Figure</th><th>Perimeter</th><th>Area</th></tr>
              <tr><td>Rectangle</td><td>2(l + b)</td><td>l × b</td></tr>
              <tr><td>Square</td><td>4s</td><td>s^2</td></tr>
              <tr><td>Triangle</td><td>a + b + c</td><td>1/2 × base × height</td></tr>
              <tr><td>Parallelogram</td><td>2(a + b)</td><td>base × vertical height</td></tr>
              <tr><td>Trapezium</td><td>sum of sides</td><td>1/2(a + b) × h, a,b = parallel sides</td></tr>
              <tr><td>Circle</td><td>2πr</td><td>πr^2</td></tr>
            </table>
            <div class="formula">Watch out — TRAP: parallelogram and triangle areas use the VERTICAL height, not the slant side. The slant is for perimeter; the straight-down height is for area.</div>

            <h3>9. The hexagon trick every JSS student should own</h3>
            <ul>
              <li>A regular hexagon has a beautiful secret: its side equals the radius of its circumscribed circle.</li>
              <li>Construction: draw a circle of radius r; keep the SAME compass opening; starting anywhere on the circle, step the point round the edge six times — the six marks are exactly the hexagon&apos;s corners; join them with the straight edge.</li>
              <li>Why it works: each step cuts off a 60° arc (six of them make 360°), and a 60° central angle with two radii gives an equilateral triangle, so chord = radius.</li>
              <li>Nuts and bolts use hexagons for this reason — the shape tiles, grips spanners, and is trivially laid out with one compass setting.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "Construct a regular hexagon of side 4 cm." → circle of radius 4 cm, same 4 cm opening stepped six times round, join the marks. No protractor touched.</div>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Instrument pair for bisecting a line? <i>Ans: compass and straight edge (rule).</i></li>
              <li><b>Q2.</b> Angle sum of a quadrilateral? <i>Ans: 360°.</i></li>
              <li><b>Q3.</b> Each interior angle of a regular hexagon? <i>Ans: 720° ÷ 6 = 120°.</i></li>
              <li><b>Q4.</b> Construct 30° without a protractor. <i>Ans: construct 60° then bisect it.</i></li>
              <li><b>Q5.</b> Triangle with sides 5, 5, 8? <i>Ans: isosceles.</i></li>
              <li><b>Q6.</b> Which data set fixes a triangle rigidly, SSS or AAA? <i>Ans: SSS (AAA only fixes shape, not size).</i></li>
              <li><b>Q7.</b> Line touching a circle at one point? <i>Ans: tangent.</i></li>
              <li><b>Q8.</b> How to find a circle&apos;s centre with compass? <i>Ans: perpendicular bisectors of two chords; they meet at the centre.</i></li>
              <li><b>Q9.</b> Area of triangle base 10 cm height 6 cm? <i>Ans: 30 cm^2.</i></li>
              <li><b>Q10.</b> Trapezium parallel sides 8 and 12, height 5: area? <i>Ans: 1/2(8 + 12) × 5 = 50 square units.</i></li>
              <li><b>Q11.</b> Circumference of circle diameter 14 cm (π = 22/7)? <i>Ans: 44 cm.</i></li>
              <li><b>Q12.</b> Why are triangles used in bridges and roofs? <i>Ans: a triangle is rigid — it cannot change shape without changing a side.</i></li>
              <li><b>Q13.</b> Side of a hexagon inscribed in a circle of radius 5 cm? <i>Ans: 5 cm — side equals radius.</i></li>
            </ul>
            <div class="formula">SUMMARY: geometrical construction turns compass-and-rule recipes into perfect shapes: bisect lines and angles, erect perpendiculars, build 30/45/60/90°, divide lines equally, and construct triangles from SSS, SAS or ASA; plane figures are catalogued by sides and angles with interior-angle sum (n − 2) × 180°; circles are named by radius, diameter, chord, arc, sector, segment and tangent, with the centre found where two chord bisectors meet; and perimeter/area formulas (rectangle, square, triangle, parallelogram, trapezium, circle) finish the toolkit — always with vertical height for area, never the slant.</div>

`,
          cards: [
            { q: 'How do you bisect a line segment with compasses?', a: 'With the compass opened more than half the line, draw arcs above and below from each end; join the two arc crossings — the line cuts the segment into two equal halves at 90 deg.' },
            { q: 'How do you bisect an angle?', a: 'From the vertex, strike an arc cutting both arms; from those two points, strike equal arcs that cross inside the angle; join the vertex to the crossing point.' },
            { q: 'How is a 60 deg angle constructed?', a: 'Draw a base line; from a point on it, draw an arc; keeping the same radius, step the arc across itself from the crossing point; join the vertex to that mark — an equilateral-triangle angle.' },
            { q: 'How do you construct a 90 deg angle, then 45 and 30 deg?', a: 'Construct the perpendicular (90 deg) by arcs from points on the line; bisect the 90 deg angle for 45 deg; bisect the 60 deg angle for 30 deg — bisection halves any constructed angle.' },
            { q: 'How do you construct a triangle given its three sides (SSS)?', a: 'Draw the base to scale; with the compass set to each of the other sides, strike arcs from the base ends; the arcs cross at the third vertex — join to complete the triangle.' },
            { q: 'Construct a regular hexagon in a circle. Why does it work?', a: 'With the compass set to the circle\'s radius, step six arcs round the circumference and join them — each side equals the radius, since a hexagon splits into six equilateral triangles.' },
            { q: 'How do you divide a line into equal parts (say five)?', a: 'Draw a sloping ray from one end; mark five equal compass steps along it; join the last mark to the line\'s end, then draw parallels through the other marks — they cut the line into five equal parts.' },
            { q: 'How do you construct an equilateral triangle of side 6 cm?', a: 'Draw a 6 cm base; with the compass at 6 cm, strike arcs from both ends; the crossing point is the third vertex — all sides and angles (60 deg) are equal.' },
            { q: 'How do you draw a line parallel to a given line through a point?', a: 'Use a set square and T-square: align the square\'s edge with the line, hold the T-square against the square, slide the square until its edge meets the point, then draw — or copy an angle (corresponding angles).' },
            { q: 'What is the relationship between the radius and diameter of a circle, and its circumference formula?', a: 'Diameter = 2 x radius; circumference = 2πr (= πd); area = πr^2.' },
            { q: 'Why must pencils be sharp and compasses tight for good constructions?', a: 'Blunt pencils make thick, uncertain lines and tight compasses keep the radius exact — construction accuracy depends on fine lines and fixed radii.' },
            { q: 'How do you bisect an angle with compasses?', a: 'Draw an arc from the vertex cutting both arms. From those two points draw equal arcs that cross inside the angle. Join the vertex to the crossing point - that line bisects the angle.' },
            { q: 'Which standard angles are easy to construct, and how do the others follow?', a: '60° and 90° are the base constructions. Bisecting them gives 30° and 45°; bisecting again gives 15°. And 120° = 180° - 60°.' },
            { q: 'What are the angle sums of polygons?', a: 'Triangle: 180°. Quadrilateral: 360°. Any n-sided polygon: (n - 2) x 180°. The exterior angles of any regular polygon always sum to 360°.' },
            { q: 'Name the main parts of a circle.', a: 'Radius (centre to edge), diameter (twice the radius, through the centre), chord (any line joining two points on the circle), circumference (the perimeter) and arc (a part of the circumference).' }
          ],
          quiz: [
            { q: 'Which two instruments are needed to bisect an angle?', options: ['A pair of compasses and a ruler', 'A protractor and scissors', 'A T-square only', 'A divider and a hammer'], correct: 0, exp: 'Arcs struck with the compasses locate points equidistant from both arms; the ruler joins them to the vertex.' },
            { q: 'Bisecting a 90 deg angle produces two angles of...', options: ['45 deg', '30 deg', '60 deg', '22.5 deg'], correct: 0, exp: 'Bisection halves the angle: 90/2 = 45 deg — bisect again for 22.5 deg.' },
            { q: 'When constructing a regular hexagon in a circle, the compass is set to...', options: ['the radius of the circle', 'twice the radius', 'half the radius', 'any random width'], correct: 0, exp: 'Stepping the radius round the circumference gives six equal arcs — the hexagon splits into six equilateral triangles.' },
            { q: 'Constructing a triangle from its three given side lengths is called...', options: ['SSS construction', 'SAS construction', 'AAA construction', 'RHS construction'], correct: 0, exp: 'Side-Side-Side: arcs struck with the two shorter lengths from the base ends meet at the third vertex.' },
            { q: 'What is the diameter of a circle of radius 4.5 cm?', options: ['9 cm', '4.5 cm', '13.5 cm', '2.25 cm'], correct: 0, exp: 'Diameter = 2 x radius = 2 x 4.5 = 9 cm — the diameter is always twice the radius.' },
            { q: 'The two tools used for accurate geometrical construction are...', options: ['a protractor and a calculator', 'a pair of compasses and a ruler (straight edge)', 'a set square and a tape measure', 'a ruler and a calculator'], correct: 1,
              exp: 'Construction means compasses and straight edge only - measuring angles with a protractor does not count as construction.' },
            { q: 'To bisect a line, arcs are drawn from both endpoints with the radius set to...', options: ['exactly half the line', 'any length at all', 'more than half the line', 'the full length of the line'], correct: 2,
              exp: 'A radius greater than half the line guarantees the two arcs cross above and below the line.' },
            { q: 'Which angle is constructed by drawing an arc, then stepping the same radius along it?', options: ['45°', '60°', '30°', '15°'], correct: 1,
              exp: 'Keeping the compass radius fixed marks off an equilateral-triangle angle of 60° - the base of most constructions.' },
            { q: 'Bisecting a 60° angle gives...', options: ['45°', '30°', '20°', '90°'], correct: 1,
              exp: 'Bisection halves the angle: 60° / 2 = 30°.' },
            { q: 'The sum of the angles of a triangle is...', options: ['90°', '180°', '270°', '360°'], correct: 1,
              exp: 'The three interior angles of ANY triangle add up to 180°.' },
            { q: 'The sum of the interior angles of a quadrilateral is...', options: ['180°', '270°', '360°', '540°'], correct: 2,
              exp: 'A quadrilateral splits into two triangles: 2 x 180° = 360°.' },
            { q: 'Each exterior angle of a regular pentagon is...', options: ['72°', '108°', '60°', '90°'], correct: 0,
              exp: 'Exterior angles of any regular polygon sum to 360°, so each of a pentagon\'s five is 360° / 5 = 72°.' },
            { q: 'A chord that passes through the centre of a circle is called the...', options: ['radius', 'diameter', 'tangent', 'arc'], correct: 1,
              exp: 'The diameter is the longest chord - exactly twice the radius.' },
            { q: 'A triangle constructed from the lengths of its three sides uses the...', options: ['SSS method', 'angle-bisector method', 'protractor method', 'trial-and-error method'], correct: 0,
              exp: 'With all three sides known (SSS), compass arcs drawn from each end of the base locate the third vertex.' },
            { q: 'Two angles that add up to 90° are...', options: ['supplementary', 'complementary', 'vertically opposite', 'corresponding'], correct: 1,
              exp: 'Complementary angles sum to 90°; supplementary angles sum to 180°.' }
          ],
        },
        {
          title: 'Building Materials & Simple Structures',
          tags: ['Wood & metals', 'Frames', 'Forces in structures'],
          summary: 'The materials used in construction, and why triangles make structures rigid.',
          content: `
            <h3>1. What makes a material a BUILDING material</h3>
            <p>A <b>building material</b> is any material used to construct buildings and other structures — from the mud walls of traditional homes to the reinforced concrete of bridges. Engineers judge materials by their <b>properties</b>: strength (can it carry load?), durability (does it last in sun and rain?), hardness, workability (how easy is it to shape?), weight, cost and availability. The best material for a job is the one whose properties match the job at a price the project can afford — that balancing act is called <b>material selection</b>.</p>
            <ul>
              <li>Natural materials come from nature almost ready: sand, stone, clay, timber, water.</li>
              <li>Manufactured (processed) materials are made by man: cement, bricks, steel, glass, aluminium, plastics.</li>
              <li>Local matters: a material that travels 1,000 km costs more than one dug from the next village — Nigerian builders have always been smart about this.</li>
            </ul>

            <h3>2. The big seven, one by one</h3>
            <table>
              <tr><th>Material</th><th>Key facts</th><th>Typical uses</th></tr>
              <tr><td>Sand</td><td>clean sharp sand, free of dirt and organic matter</td><td>mortar, concrete, block moulding</td></tr>
              <tr><td>Stones/aggregates</td><td>granite and gravel give concrete its backbone</td><td>concrete, foundations, road base</td></tr>
              <tr><td>Cement</td><td>grey powder; binder that sets hard with water; keep dry in bags off the floor</td><td>mortar, concrete, plaster</td></tr>
              <tr><td>Clay</td><td>mouldable when wet, hard when burnt</td><td>bricks, tiles, pots</td></tr>
              <tr><td>Timber</td><td>light, strong for its weight, workable; must be seasoned (dried)</td><td>roofing, doors, formwork, furniture</td></tr>
              <tr><td>Steel</td><td>very strong in tension; does not crack like concrete does</td><td>reinforcement bars, roofing sheets, gates</td></tr>
              <tr><td>Water</td><td>clean, free of oil and dirt — dirty water ruins concrete</td><td>mixing mortar and concrete, curing</td></tr>
            </table>
            <div class="formula">Watch out — TRAP: cement and concrete are NOT the same thing. Cement is the powder binder; concrete is the finished stone-like mix of cement + sand + aggregate + water. Calling concrete &apos;cement&apos; is the classic exam trap.</div>

            <h3>3. Mortar, concrete and the magic ratio</h3>
            <ul>
              <li><b>Mortar</b> = cement + sand + water; it is the glue that bonds bricks and blocks together and plasters walls.</li>
              <li><b>Concrete</b> = cement + sand + granite (aggregate) + water; it is a structural material that can carry loads.</li>
              <li>A common general-purpose mix ratio is <b>1:2:4</b> — one part cement, two parts sand, four parts granite, measured in the same head pan or bucket, never by guesswork.</li>
              <li><b>Curing</b>: fresh concrete must be kept moist (sprinkled or covered) for several days while it gains strength; concrete that dries too fast cracks and stays weak.</li>
              <li>Concrete is strong in <b>compression</b> (squeezing) but weak in <b>tension</b> (stretching) — which is exactly why steel bars are buried inside it.</li>
            </ul>

            <h3>4. Bricks and blocks: the walls of Nigeria</h3>
            <ul>
              <li><b>Sandcrete blocks</b> (cement + sand, machine or hand moulded) are the commonest wall unit in Nigerian towns; <b>burnt clay bricks</b> dominate in many rural and northern builds.</li>
              <li>Qualities of a good brick/block: uniform shape and size, well burnt or well cured, hard (no crumbling), makes a ringing sound when struck, does not absorb too much water, no cracks.</li>
              <li>Simple site tests: drop a good block flat from hand height — it should not shatter; scratch its surface — no deep powdering; soak one — it should not swell like bread.</li>
            </ul>

            <h3>5. Timber and metals: choosing the right one</h3>
            <ul>
              <li><b>Timber</b> must be seasoned (dried) or it warps, shrinks and invites termites; hardwoods (iroko, mahogany) for structure and floors, softwoods for lighter work.</li>
              <li>Timber defects to reject: knots in the wrong place, cracks (checks and shakes), warping, rot and insect holes.</li>
              <li><b>Ferrous metals</b> contain iron (steel, cast iron) — strong but rust-prone; <b>non-ferrous</b> (aluminium, copper, zinc) resist rust and are lighter — aluminium for roofing and windows, copper for wiring.</li>
              <li>Protecting steel: paint, galvanising (zinc coating) or grease keep water and oxygen off the metal — rust needs both.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cut-away house showing labelled parts: foundation below ground, wall, lintel above window, beam, columns, floor, roof">
              <rect x="8" y="8" width="444" height="204" rx="10" fill="#fff7ed" stroke="#9a3412" stroke-width="2"/>
              <rect x="60" y="170" width="340" height="14" fill="#a8a29e"/>
              <rect x="80" y="184" width="300" height="20" fill="#57534e"/>
              <rect x="100" y="70" width="12" height="100" fill="#b45309"/>
              <rect x="348" y="70" width="12" height="100" fill="#b45309"/>
              <rect x="100" y="60" width="260" height="12" fill="#7c2d12"/>
              <path d="M90 62 L230 18 L370 62 Z" fill="#dc2626" opacity="0.85"/>
              <rect x="150" y="110" width="52" height="60" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
              <rect x="146" y="100" width="60" height="10" fill="#16a34a"/>
              <rect x="250" y="120" width="44" height="50" fill="#bae6fd" stroke="#075985" stroke-width="2"/>
              <g font-size="9.5" font-weight="700" fill="#7c2d12">
                <line x1="230" y1="196" x2="230" y2="206" stroke="#9a3412"/><text x="236" y="209">foundation — carries everything to the ground</text>
                <line x1="106" y1="140" x2="40" y2="140" stroke="#9a3412"/><text x="14" y="132" >wall</text>
                <line x1="176" y1="105" x2="176" y2="88" stroke="#9a3412"/><text x="150" y="84">lintel</text>
                <line x1="300" y1="66" x2="300" y2="52" stroke="#9a3412"/><text x="282" y="48">beam</text>
                <line x1="230" y1="40" x2="230" y2="30" stroke="#9a3412"/><text x="214" y="26">roof</text>
                <line x1="272" y1="145" x2="320" y2="145" stroke="#9a3412"/><text x="300" y="138">window</text>
                <line x1="176" y1="140" x2="230" y2="150" stroke="#9a3412"/><text x="214" y="158">door</text>
              </g>
            </svg></div>

            <h3>6. Simple structures: who carries what</h3>
            <ul>
              <li><b>Foundation:</b> the buried feet of the building; spreads the whole weight into the ground so the soil is never overloaded.</li>
              <li><b>Columns:</b> vertical members that carry loads from above down to the foundation.</li>
              <li><b>Beams:</b> horizontal members that span openings and carry floors/roofs; they bend, so steel sits where the bending stretches them.</li>
              <li><b>Lintel:</b> a small beam over a door or window that carries the wall above the opening.</li>
              <li><b>Walls:</b> enclose, divide and (in some buildings) carry loads; <b>floor</b> gives the working surface; <b>roof</b> shields from rain and sun.</li>
              <li>Load path, top to bottom: roof → beams/walls → columns → foundation → ground. Every kilogram of rain on the roof ends up in the soil.</li>
            </ul>
            <div class="worked"><b>Worked example (exam style):</b> "Why is a lintel placed above a window?" → window and door openings are empty — they cannot carry the wall above them; the lintel bridges the opening and passes the load to the wall at the sides.</div>

            <h3>7. Choosing materials the Nigerian way</h3>
            <ul>
              <li><b>Climate:</b> heavy rain wants good roof pitch and rust protection; hot sun wants ventilation and shade.</li>
              <li><b>Cost and availability:</b> laterite, sand and stone are local almost everywhere; imported finishes are where budgets die.</li>
              <li><b>Maintenance:</b> the cheapest material today can be the most expensive in five years if it rots, rusts or cracks.</li>
              <li><b>Skill:</b> a material is only as good as the hands that place it — workmanship is half the structure.</li>
            </ul>

            <h3>8. Glass, plastics and the supporting cast</h3>
            <ul>
              <li><b>Glass:</b> hard, transparent, brittle; lets light in while keeping weather out — windows, louvres, bulbs. Handle with gloves and carry panes on edge, never flat.</li>
              <li><b>Plastics (PVC, HDPE):</b> light, rust-proof, mouldable — pipes, conduits, water tanks, ceiling sheets. Their weakness is heat and sunlight ageing.</li>
              <li><b>Asbestos and lead:</b> once popular, now avoided — health hazards matter in material selection too; a material that sickens its users is a bad material however strong.</li>
              <li><b>Roofing sheets:</b> aluminium or galvanised steel; the zinc coat is the rust shield, and scratches on that coat are where rust begins.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "Suggest a material for a water tank and give one reason." → plastic (HDPE): rust-proof, light and mouldable; or galvanised steel: strong and water-tight. Reason must match the material&apos;s real property.</div>

            <h3>9. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Difference between mortar and concrete. <i>Ans: mortar = cement + sand + water (glue); concrete adds granite aggregate (structural).</i></li>
              <li><b>Q2.</b> What does the ratio 1:2:4 mean? <i>Ans: 1 part cement, 2 parts sand, 4 parts granite.</i></li>
              <li><b>Q3.</b> Why cure concrete? <i>Ans: keeping it moist lets it gain full strength and prevents cracking.</i></li>
              <li><b>Q4.</b> Concrete is strong in ___ but weak in ___. <i>Ans: compression; tension.</i></li>
              <li><b>Q5.</b> Why put steel bars in concrete? <i>Ans: steel resists the tension (stretching) that concrete cannot.</i></li>
              <li><b>Q6.</b> Three qualities of a good brick. <i>Ans: uniform shape, hard/well burnt, rings when struck, low water absorption, no cracks.</i></li>
              <li><b>Q7.</b> Why season timber? <i>Ans: drying prevents warping, shrinking, rot and termite attack.</i></li>
              <li><b>Q8.</b> Ferrous vs non-ferrous metals. <i>Ans: ferrous contain iron (rust-prone); non-ferrous do not (rust-resistant).</i></li>
              <li><b>Q9.</b> Member over a door opening? <i>Ans: lintel.</i></li>
              <li><b>Q10.</b> Function of a foundation. <i>Ans: spreads the building&apos;s load safely into the ground.</i></li>
              <li><b>Q11.</b> Two ways to stop steel rusting. <i>Ans: paint, galvanise, grease — anything that keeps out water and oxygen.</i></li>
              <li><b>Q12.</b> Give the load path of a building. <i>Ans: roof → beams/walls → columns → foundation → ground.</i></li>
              <li><b>Q13.</b> One reason plastic suits water tanks. <i>Ans: it does not rust (and is light/mouldable).</i></li>
            </ul>
            <div class="formula">SUMMARY: building materials are chosen by matching properties (strength, durability, workability, cost, availability) to the job: sand, stone, cement, clay, timber, steel and water form the core list; mortar glues while concrete carries, mixed at ratios like 1:2:4 and cured moist; blocks and bricks must be uniform, hard and stable; timber must be seasoned and metals chosen ferrous or non-ferrous with rust protection; and simple structures hand the load down a clear path — roof to beams and walls, to columns, to foundation, to ground — with lintels bridging every door and window on the way.</div>

`,
          cards: [
            { q: 'Name six common building materials.', a: 'Sand, granite/gravel, cement, blocks or bricks, iron rods (reinforcement), timber, zinc roofing sheets, water, nails and paint.' },
            { q: 'What is concrete, and what role does each ingredient play?', a: 'A mix of cement (binder), sand and gravel (aggregate, for strength and bulk) and water (activates the cement). Iron rods inside it (reinforced concrete) add tensile strength.' },
            { q: 'What is the function of a building\'s foundation?', a: 'It spreads the building\'s load safely onto the ground, prevents uneven settlement and rising damp — a weak foundation cracks the whole structure.' },
            { q: 'Name three roofing materials and one advantage of each.', a: 'Zinc/aluminium sheets (light, quick to fix, cheap), clay tiles (durable, cool, attractive), and asbestos-free fibre sheets or thatch (cheap, local — thatch is cool but flammable).' },
            { q: 'State four properties of good building materials.', a: 'Strength (carries load without failing), durability (lasts against weather and wear), workability (can be shaped), and reasonable cost; also resistance to fire and water where needed.' },
            { q: 'What is a lintel, and where is it placed?', a: 'A beam of concrete or steel placed across the top of a door or window opening to carry the wall load above it.' },
            { q: 'Name three traditional/local building materials in Nigeria.', a: 'Mud/adobe (moulded earth walls), thatch (palm-frond roofs), laterite, bamboo and raffia palm — cheap and cool, though less durable than modern materials.' },
            { q: 'Why do builders cure concrete by wetting it for days after casting?', a: 'Cement hardens by a chemical reaction with water (hydration); keeping the fresh concrete wet lets it cure fully, so it reaches its proper strength without cracking.' },
            { q: 'Name four fasteners used in construction and carpentry.', a: 'Nails, wood screws, bolts and nuts, and rivets — each chosen for the material and the strength needed.' },
            { q: 'State three ways of maintaining a building.', a: 'Paint woodwork and metal to keep out water, repair leaking roofs and cracked walls quickly, keep gutters and drains clear, and check electrical wiring — regular care prevents costly damage.' },
            { q: 'Give one advantage of wood over metal in construction.', a: 'It is easy to work with using hand tools, is a good insulator, and is generally cheaper.' },
            { q: 'Why is a triangle used in roof trusses?', a: 'It is the only rigid polygon — it cannot change shape without changing the length of a side.' },
            { q: 'What are the ingredients of concrete, and what does each do?', a: 'Cement (the binder), sand and gravel (the aggregates giving bulk and strength), and water (starts the chemical setting). The mixture hardens into strong, durable concrete.' },
            { q: 'Name three ways to protect metals from corrosion.', a: 'Painting or greasing (a barrier against air and moisture), galvanising (a zinc coating), and alloying or choosing corrosion-resistant metals such as aluminium and stainless steel.' },
            { q: 'Explain compression and tension in structures, with examples.', a: 'Compression squeezes a member (a column carrying a roof); tension stretches it (a cable in a suspension bridge). In a loaded beam the top is compressed and the bottom is in tension.' }
          ],
          quiz: [
            { q: 'Which ingredients make concrete?', options: ['Cement, sand, gravel and water', 'Mud and straw only', 'Cement and water only', 'Sand and stones dry'], correct: 0, exp: 'Cement binds, sand and gravel (aggregate) give bulk and strength, and water activates the cement\'s setting reaction.' },
            { q: 'Why are iron rods placed inside concrete?', options: ['To add tensile strength (reinforcement)', 'To make it heavier', 'To change its colour', 'To make it set slower'], correct: 0, exp: 'Concrete is strong in compression but weak when stretched; the steel rods carry tension — that is reinforced concrete.' },
            { q: 'What is the function of a lintel?', options: ['To carry the wall load over a door or window opening', 'To hold the roof tiles', 'To drain rainwater', 'To decorate the wall'], correct: 0, exp: 'Without a lintel the masonry above an opening would collapse into the gap.' },
            { q: 'Name two traditional Nigerian building materials.', options: ['Mud/adobe and thatch', 'Zinc and cement', 'Glass and steel', 'Plastic and foam'], correct: 0, exp: 'Mud walls, thatch roofs, laterite and bamboo are local materials — cheap and cool, though less durable than modern ones.' },
            { q: 'Why is freshly cast concrete kept wet (cured) for several days?', options: ['So the cement hydrates fully and gains strength', 'To cool the building', 'To wash away the cement', 'To make it dry faster'], correct: 0, exp: 'Cement hardens by reacting with water (hydration); drying too fast leaves it weak and cracked.' },
            { q: 'Which of these is a hardwood?', options: ['pine', 'iroko', 'spruce', 'fir'], correct: 1,
              exp: 'Iroko is a tropical hardwood - dense and durable; pine, spruce and fir are softwoods.' },
            { q: 'Concrete is a mixture of...', options: ['cement, sand, gravel and water', 'clay and straw', 'lime and wood ash', 'tar and stone'], correct: 0,
              exp: 'Cement binds sand (fine aggregate) and gravel (coarse aggregate) with water into strong concrete.' },
            { q: 'In a loaded beam, the top is mainly in ___ and the bottom in ___.', options: ['tension / compression', 'compression / tension', 'shear / torsion', 'compression / compression'], correct: 1,
              exp: 'A loaded beam sags slightly: the top shortens (compression) while the bottom stretches (tension).' },
            { q: 'The shape that makes structures rigid is the...', options: ['square', 'circle', 'triangle', 'rectangle'], correct: 2,
              exp: 'A triangle cannot change shape without changing a side length - so roof trusses and bridges are built from triangles.' },
            { q: 'Coating steel with zinc to stop rusting is called...', options: ['painting', 'greasing', 'galvanising', 'alloying'], correct: 2,
              exp: 'Galvanising covers steel with zinc, which corrodes first and shields the iron beneath.' },
            { q: 'Bricks are made from...', options: ['melted metal', 'fired (baked) clay', 'concrete only', 'compressed sand and glue'], correct: 1,
              exp: 'Clay is moulded and fired in a kiln until hard - that is what a brick is.' },
            { q: 'Glass and ceramics are described as brittle because they...', options: ['bend easily', 'shatter rather than bend', 'melt at low temperatures', 'conduct electricity'], correct: 1,
              exp: 'Brittle materials break suddenly with hardly any bending - handle them with care in the workshop.' },
            { q: 'Steel bars are placed inside concrete beams because...', options: ['concrete is weak in compression', 'steel carries the tension that concrete cannot', 'it makes the beam lighter', 'it looks better'], correct: 1,
              exp: 'Concrete is strong in compression but weak in tension; embedded steel carries the tensile forces - that is reinforced concrete.' },
            { q: 'A good roofing material should be...', options: ['heavy, porous and brittle', 'waterproof, durable and light', 'transparent and soft', 'absorbent and heavy'], correct: 1,
              exp: 'A roof must shed water, last for years in sun and rain, and not overload the walls.' },
            { q: 'Which property makes aluminium good for window frames?', options: ['it rusts quickly', 'it resists corrosion and is light', 'it is magnetic', 'it is very heavy'], correct: 1,
              exp: 'Aluminium forms a protective oxide layer so it does not rust, and its lightness makes it easy to fit.' }
          ],
        },
      ],
      JSS3: [
        {
          title: 'Machines, Mechanisms & Maintenance',
          tags: ['Simple machines', 'Mechanical advantage', 'Maintenance'],
          summary: 'How levers, pulleys, gears and belts make work easier, how mechanisms turn one motion into another, and why maintaining machines saves money and lives.',
          content: `
            <h3>1. What a machine is, and the six simple ones</h3>
            <p>A <b>machine</b> is any device that makes work easier by transferring or multiplying force — every complex machine, from a bicycle to a bulldozer, is only the six <b>simple machines</b> dressed up in metal.</p>
            <table>
              <tr><th>Simple machine</th><th>Everyday example</th><th>How it helps</th></tr>
              <tr><td>Lever</td><td>crowbar, see-saw, bottle opener, wheelbarrow</td><td>a rigid bar turning about a fulcrum multiplies force</td></tr>
              <tr><td>Pulley</td><td>water well, flag pole, crane hook</td><td>changes the direction of force; in blocks, multiplies it</td></tr>
              <tr><td>Wheel and axle</td><td>steering wheel, bicycle pedals, door knob</td><td>a big wheel turning a small axle multiplies turning force</td></tr>
              <tr><td>Inclined plane</td><td>ramp, loading slope, staircase</td><td>raising a load gradually needs less force than lifting straight up</td></tr>
              <tr><td>Wedge</td><td>axe, knife, chisel, nail tip</td><td>a moving double inclined plane splits and cuts</td></tr>
              <tr><td>Screw</td><td>jar lid, bolt, screw jack, drill bit</td><td>an inclined plane wrapped round a cylinder; huge force over tiny distance</td></tr>
            </table>
            <div class="formula">Watch out — TRAP: a screw is a wrapped inclined plane and a wedge is a moving double inclined plane — examiners ask exactly that pairing.</div>

            <h3>2. Levers and their three classes</h3>
            <ul>
              <li>Every lever has three points: the <b>fulcrum</b> (F, pivot), the <b>load</b> (L, what you move) and the <b>effort</b> (E, what you apply). The class is decided by which one sits in the MIDDLE.</li>
              <li><b>First class — F in the middle:</b> crowbar, see-saw, scissors, pliers, claw hammer pulling a nail.</li>
              <li><b>Second class — L in the middle:</b> wheelbarrow, bottle opener, nutcracker. Always multiplies force (MA greater than 1).</li>
              <li><b>Third class — E in the middle:</b> forearm lifting a spoon, tweezers, broom, fishing rod. Multiplies speed and reach instead of force.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three lever classes drawn as beams on pivots showing the order of fulcrum, load and effort in each class">
              <rect x="8" y="8" width="444" height="174" rx="10" fill="#fdf4ff" stroke="#86198f" stroke-width="2"/>
              <g font-size="10" font-weight="800" fill="#86198f">
                <text x="24" y="34">FIRST CLASS — fulcrum in the middle (crowbar, see-saw)</text>
                <text x="24" y="94">SECOND CLASS — load in the middle (wheelbarrow)</text>
                <text x="24" y="154">THIRD CLASS — effort in the middle (forearm, broom)</text>
              </g>
              <line x1="40" y1="52" x2="250" y2="52" stroke="#0f172a" stroke-width="4"/>
              <path d="M145 52 l-12 18 h24 z" fill="#f59e0b" stroke="#92400e"/>
              <rect x="44" y="40" width="16" height="12" fill="#dc2626"/><text x="46" y="36" font-size="9" fill="#b91c1c" font-weight="700">L</text>
              <path d="M238 52 l0 -14 m-5 0 h10" stroke="#16a34a" stroke-width="3"/><text x="232" y="32" font-size="9" fill="#15803d" font-weight="700">E</text>
              <text x="138" y="82" font-size="9" fill="#92400e" font-weight="700">F</text>
              <line x1="40" y1="112" x2="250" y2="112" stroke="#0f172a" stroke-width="4"/>
              <path d="M52 112 l-12 18 h24 z" fill="#f59e0b" stroke="#92400e"/>
              <rect x="140" y="100" width="16" height="12" fill="#dc2626"/><text x="142" y="96" font-size="9" fill="#b91c1c" font-weight="700">L</text>
              <path d="M238 112 l0 -14 m-5 0 h10" stroke="#16a34a" stroke-width="3"/><text x="232" y="92" font-size="9" fill="#15803d" font-weight="700">E</text>
              <text x="46" y="142" font-size="9" fill="#92400e" font-weight="700">F</text>
              <line x1="40" y1="172" x2="250" y2="172" stroke="#0f172a" stroke-width="4"/>
              <path d="M52 172 l-12 14 h24 z" fill="#f59e0b" stroke="#92400e"/>
              <rect x="140" y="160" width="16" height="12" fill="#dc2626"/><text x="142" y="156" font-size="9" fill="#b91c1c" font-weight="700">L</text>
              <path d="M96 172 l0 -14 m-5 0 h10" stroke="#16a34a" stroke-width="3"/><text x="90" y="152" font-size="9" fill="#15803d" font-weight="700">E</text>
              <text x="46" y="186" font-size="9" fill="#92400e" font-weight="700">F</text>
              <g font-size="9.5" fill="#6b21a8">
                <text x="276" y="60">Remember with FLE:</text>
                <text x="276" y="76">1-2-3 the middle is</text>
                <text x="276" y="92">F, then L, then E.</text>
                <text x="276" y="116">Second class always</text>
                <text x="276" y="132">multiplies force;</text>
                <text x="276" y="148">third class trades force</text>
                <text x="276" y="164">for speed and reach.</text>
              </g>
            </svg></div>

            <h3>3. The three numbers: MA, VR and efficiency</h3>
            <ul>
              <li><b>Mechanical advantage (MA) = Load ÷ Effort.</b> It counts how many times the machine multiplies your push. Lift 200 N with 50 N of effort and MA = 4.</li>
              <li><b>Velocity ratio (VR) = distance moved by effort ÷ distance moved by load</b> — a geometry fact of the machine, fixed by its design (lever arms, pulley count, slope length).</li>
              <li><b>Efficiency = (MA ÷ VR) × 100.</b> Real machines always lose some effort to friction and to lifting their own parts, so MA is always below VR and efficiency is always below 100%.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a lever has VR 5. A worker applies 60 N and lifts 240 N. MA = 240 ÷ 60 = 4. Efficiency = (4 ÷ 5) × 100 = 80%. The missing 20% went to friction — every real machine pays that tax.</div>
            <div class="formula">Watch out — TRAP: efficiency above 100% means you swapped MA and VR or misread the numbers — no machine beats 100%, not even in exam dreams.</div>

            <h3>4. Pulleys and gear trains: passing the motion on</h3>
            <ul>
              <li><b>Fixed pulley:</b> VR = 1; it only changes direction — pulling down feels easier than lifting up because your weight helps.</li>
              <li><b>Movable pulley:</b> VR = 2; the load hangs from two rope segments, so each carries half the weight.</li>
              <li><b>Block and tackle:</b> several pulleys together; VR equals the number of rope segments supporting the load.</li>
              <li><b>Gears:</b> the driver turns the driven. Gear ratio = teeth on driven ÷ teeth on driver. A 12-tooth driver on a 36-tooth driven gives ratio 3 — the driven turns 3 times slower but with 3 times the turning force.</li>
              <li><b>Belts and chains:</b> belts can slip (quiet, cheap — fans, generators); chains and sprockets never slip (the rear wheel of a bicycle).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a bicycle chainring has 48 teeth, the rear sprocket 16. Ratio = 48 ÷ 16 = 3, so one pedal turn spins the rear wheel 3 times — that is why hard gears cover more ground per pedal stroke.</div>

            <h3>5. Friction and lubrication: the enemy that is also a friend</h3>
            <ul>
              <li><b>Friction</b> opposes sliding between surfaces. Enemy: it wears parts, heats machines and wastes effort. Friend: it lets brakes stop wheels, lets your feet grip the floor, lets belts drive pulleys without slipping.</li>
              <li><b>Lubrication</b> slips a film of oil or grease between surfaces so they glide instead of grind — less wear, less heat, less noise, longer life.</li>
              <li>Common lubricants: engine oil (moving parts), grease (joints and bearings), graphite (locks and small mechanisms), even wax on a zip or a drawer runner.</li>
            </ul>

            <h3>6. Maintenance: keeping machines alive</h3>
            <ul>
              <li><b>Preventive maintenance:</b> servicing on a schedule BEFORE anything breaks — oil changes, tightening, cleaning, sharpening, lubricating.</li>
              <li><b>Corrective (breakdown) maintenance:</b> repairing AFTER failure — always costlier and always at the worst moment.</li>
              <li><b>Bicycle routine:</b> wash and dry, oil the chain, check tyre pressure, tighten nuts and bolts, test brakes, keep it under cover.</li>
              <li><b>Generator routine:</b> check oil level, clean the air filter, use fresh fuel, run it briefly every week in storage, keep it dry and dust-free.</li>
              <li><b>Rust control:</b> clean and dry metal, then paint, oil or grease it — rust needs water and oxygen, so a coating starves it of both.</li>
              <li>The craftsman&apos;s rule: a machine is not owned when you buy it; it is owned when you maintain it.</li>
            </ul>

            <h3>7. The inclined plane in numbers</h3>
            <ul>
              <li>VR of an inclined plane = length of the slope ÷ height it raises the load. A 3 m ramp lifting 1 m has VR 3 — you push 3 times the distance with about a third of the force.</li>
              <li>That is why loading a drum into a truck through a plank feels easier than lifting it straight up: the work is the same, the force is friendlier.</li>
              <li>Wedges and screws inherit this: the longer and thinner the slope, the bigger the multiplication.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a ramp 5 m long raises a load 1 m. VR = 5 ÷ 1 = 5. If 80 N of effort moves the 300 N load, MA = 300 ÷ 80 = 3.75 and efficiency = (3.75 ÷ 5) × 100 = 75% — the slope&apos;s friction took the rest.</div>

            <h3>8. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> List the six simple machines. <i>Ans: lever, pulley, wheel and axle, inclined plane, wedge, screw.</i></li>
              <li><b>Q2.</b> A screw is which simple machine wrapped round a cylinder? <i>Ans: the inclined plane.</i></li>
              <li><b>Q3.</b> Class of lever with the load in the middle? <i>Ans: second class (wheelbarrow, bottle opener).</i></li>
              <li><b>Q4.</b> Give two third-class levers. <i>Ans: forearm, tweezers, broom, fishing rod.</i></li>
              <li><b>Q5.</b> MA formula? <i>Ans: Load ÷ Effort.</i></li>
              <li><b>Q6.</b> Efficiency formula? <i>Ans: (MA ÷ VR) × 100.</i></li>
              <li><b>Q7.</b> Why is efficiency always below 100%? <i>Ans: friction and the weight of machine parts waste some effort.</i></li>
              <li><b>Q8.</b> VR of a single fixed pulley? <i>Ans: 1 — it only changes direction.</i></li>
              <li><b>Q9.</b> Gear ratio when a 12-tooth driver turns a 36-tooth driven? <i>Ans: 3.</i></li>
              <li><b>Q10.</b> Why choose a chain over a belt? <i>Ans: it cannot slip.</i></li>
              <li><b>Q11.</b> Two purposes of lubrication. <i>Ans: reduce wear and heat (and noise); lengthen life.</i></li>
              <li><b>Q12.</b> Maintenance done before breakdown is called? <i>Ans: preventive maintenance.</i></li>
              <li><b>Q13.</b> Two ways to prevent rust. <i>Ans: paint, oil, grease, keep dry — coat the metal against water and oxygen.</i></li>
              <li><b>Q14.</b> Effort 50 N lifts 200 N: MA? <i>Ans: 4.</i></li>
            </ul>
            <div class="formula">SUMMARY: every machine resolves into six simple machines — lever, pulley, wheel and axle, inclined plane, wedge and screw; levers are classed by their middle point (F, L or E) with the second class multiplying force and the third multiplying speed; their power is measured by MA = Load ÷ Effort, VR = effort distance ÷ load distance, and efficiency = (MA ÷ VR) × 100, forever below 100% because of friction; motion is passed on through pulley blocks, gear trains, belts and chains; and the whole machine kingdom is kept alive by lubrication against friction and by preventive maintenance against breakdown — clean, oil, tighten, protect from rust, and service before it fails.</div>

`,
          cards: [
            { q: 'Define a machine.', a: 'A device that makes work easier by changing the size or direction of the effort force — it never reduces the total work done, because friction wastes some energy.' },
            { q: 'Name four types of motion with an example each.', a: 'Rotary/rotational (a fan blade), reciprocating (a sewing machine needle), linear (a sliding door), and oscillating (a pendulum or windscreen wiper).' },
            { q: 'What is a mechanism? Give three examples.', a: 'A combination of machine parts that transmits or controls motion: gears, belt and pulley drives, chain and sprockets, linkages, cams and cranks.' },
            { q: 'How do gears work, and what are the driver and driven gears?', a: 'Interlocking teeth pass rotary motion from one gear to another; the gear supplying the motion is the driver, the one receiving it is the driven — a small driver turning a large driven gear reduces speed but increases turning force.' },
            { q: 'Explain the chain and sprocket system on a bicycle.', a: 'Pedal cranks turn the front sprocket; the chain transfers the motion to the rear sprocket on the wheel — changing sprocket sizes changes how far one pedal turn drives the bike.' },
            { q: 'What is the purpose of bearings in machines?', a: 'Bearings (ball or roller) replace sliding friction with rolling friction at rotating joints, so shafts spin smoothly with less wear, heat and energy loss.' },
            { q: 'Name the three main types of maintenance.', a: 'Routine/corrective maintenance (cleaning, oiling, fixing faults as they appear), preventive/scheduled maintenance (planned servicing before failure), and breakdown maintenance (repair after failure — the most costly).' },
            { q: 'Why is lubrication important in machines?', a: 'Oil and grease reduce friction between moving parts, so machines waste less energy, run cooler, wear out slowly and last longer.' },
            { q: 'Identify the mechanisms in a bicycle (four of them).', a: 'Wheel and axle (wheels), chain and sprocket (drive), levers (brakes and pedals), screw (bolts and seat adjustment), and bearings in the hubs.' },
            { q: 'Name four machine fasteners.', a: 'Bolts and nuts, screws, rivets, and keys/pins — fasteners hold machine parts together and allow dismantling for repair.' },
            { q: 'State three consequences of poor maintenance.', a: 'Machines break down often and cost more to repair, accidents rise as parts wear (brakes, guards), fuel and energy are wasted, and the machine\'s life is shortened.' },
            { q: 'Give two examples of machines in a Nigerian home and the mechanisms they use.', a: 'A blender (electric motor with gears/blades rotating at speed) and a sewing machine (foot pedal lever, belt drive, reciprocating needle mechanism).' },
            { q: 'State the formulae for MA, VR and efficiency.', a: 'MA = Load ÷ Effort; VR = distance moved by effort ÷ distance moved by load; Efficiency = (MA ÷ VR) × 100%. Friction keeps efficiency below 100%.' },
            { q: 'How do you identify the class of a lever?', a: 'Look at what is in the middle: fulcrum in the middle = class 1 (scissors); load in the middle = class 2 (wheelbarrow); effort in the middle = class 3 (broom, forearm).' },
            { q: 'Preventive vs corrective maintenance — which is cheaper and why?', a: 'Preventive maintenance (cleaning, oiling, planned part replacement before failure) is cheaper because corrective maintenance waits for breakdown, which causes more damage, downtime and cost.' }
          ],
          quiz: [
            { q: 'The needle of a sewing machine shows which type of motion?', options: ['Reciprocating (up and down)', 'Rotary', 'Circular only', 'Random'], correct: 0, exp: 'Reciprocating motion moves to and fro along a line; the pedal crank converts your foot\'s rocking into the wheel\'s rotation.' },
            { q: 'A small gear drives a larger gear. What happens to speed and turning force?', options: ['Speed decreases and turning force increases', 'Both increase', 'Speed increases and force decreases', 'Nothing changes'], correct: 0, exp: 'The driven gear turns more slowly than the driver but with greater force — the trade-off behind gearboxes and bicycle gearing.' },
            { q: 'Name the three main types of maintenance.', options: ['Routine, preventive and breakdown', 'Daily, weekly, monthly', 'Painting, washing, oiling', 'Fast, slow, medium'], correct: 0, exp: 'Routine/corrective fixes faults as they appear; preventive services machines on schedule before failure; breakdown repair happens after failure — the costliest.' },
            { q: 'Why must moving parts of machines be lubricated?', options: ['To reduce friction, wear and heat', 'To make them heavier', 'To change their colour', 'To slow them always'], correct: 0, exp: 'Oil and grease form a slippery film so parts slide or roll smoothly — less friction means less wasted energy and longer life.' },
            { q: 'Name two machine fasteners.', options: ['Bolts and nuts; screws', 'Levers and pulleys', 'Belts and chains', 'Gears and cams'], correct: 0, exp: 'Fasteners (bolts and nuts, screws, rivets, pins) hold machine parts together — levers, pulleys, belts and gears are mechanisms, not fasteners.' },
            { q: 'Mechanical advantage is defined as', options: ['effort ÷ load', 'load ÷ effort', 'load × effort', 'VR × efficiency'], correct: 1, exp: 'MA = Load ÷ Effort — how many times the machine multiplies your force.' },
            { q: 'A machine has MA = 4 and VR = 5. Its efficiency is', options: ['20%', '80%', '125%', '9%'], correct: 1, exp: 'Efficiency = MA/VR × 100 = 4/5 × 100 = 80%.' },
            { q: 'Which simple machine is a bottle opener?', options: ['class 1 lever', 'class 2 lever', 'class 3 lever', 'pulley'], correct: 1, exp: 'The load (cap) is between the fulcrum (edge on the cap rim) and the effort (your hand) — load in the middle = class 2.' },
            { q: 'The velocity ratio of a single fixed pulley is', options: ['0', '1', '2', 'depends on the load'], correct: 1, exp: 'Effort moves the same distance as the load, so VR = 1; it only changes the direction of the force.' },
            { q: 'A crank and slider mechanism converts', options: ['rotation into reciprocating motion', 'rotation into electrical energy', 'linear motion into rotation only', 'heat into motion'], correct: 0, exp: 'It turns rotation into back-and-forth (reciprocating) motion — or the reverse, as in an engine where pistons turn the crankshaft.' },
            { q: 'Servicing a generator monthly is an example of', options: ['corrective maintenance', 'preventive maintenance', 'breakdown maintenance', 'design improvement'], correct: 1, exp: 'Planned care before failure = preventive maintenance.' },
            { q: 'Efficiency of a real machine is always', options: ['100%', 'above 100%', 'below 100%', 'equal to its VR'], correct: 2, exp: 'Friction wastes some effort as heat, so MA < VR and efficiency < 100%.' },
            { q: 'On a bicycle, a belt or chain connects the pedal sprocket to the rear wheel sprocket in order to', options: ['increase friction', 'transmit motion between separated shafts', 'reduce the velocity ratio to zero', 'store energy'], correct: 1, exp: 'Belt and chain drives carry rotation between shafts that are some distance apart.' },
            { q: 'Which is a class 3 lever?', options: ['wheelbarrow', 'scissors', 'broom while sweeping', 'crowbar'], correct: 2, exp: 'While sweeping, your top hand (effort) is between the fulcrum (other hand) and the load (brush end).' },
            { q: 'Why are moving belts and gears fitted with guards?', options: ['to look neat', 'to reduce noise', 'to prevent contact injuries', 'to increase VR'], correct: 2, exp: 'Guards stop clothing, hair and hands from being caught in moving parts — the most common workshop injury cause.' }
          ]
        }
      ],
    },
    mock: [
      { q: 'Which instrument is used to draw circles and arcs?',
        options: ['Set square', 'Compass', 'Try square', 'Protractor'], correct: 1,
        exp: 'A compass draws circles and arcs. A protractor measures angles and a try square checks squareness.' },
      { q: 'In a technical drawing, a hidden edge is shown with:',
        options: ['A continuous thick line', 'A short-dashed line', 'A chain line', 'A wavy line'], correct: 1,
        exp: 'Short-dashed lines show hidden detail. Chain (long-short-long) lines mark centre lines and axes.' },
      { q: 'The scale 1:50 on a drawing means:',
        options: ['The drawing is 50 times larger', '1 unit on the drawing represents 50 units in real life', 'The drawing is to full size', '50 units on the drawing equal 1 unit in real life'], correct: 1,
        exp: 'A reducing scale: every 1 cm on paper stands for 50 cm on the ground.' },
      { q: 'Which of these is a ferrous metal?',
        options: ['Copper', 'Aluminium', 'Mild steel', 'Brass'], correct: 2,
        exp: 'Ferrous metals contain iron, so they are magnetic and will rust. Copper, aluminium and brass are non-ferrous.' },
      { q: 'A roof truss is built from triangles because a triangle:',
        options: ['Is the cheapest shape', 'Cannot change shape without altering a side', 'Looks attractive', 'Uses the least wood'], correct: 1,
        exp: 'A triangle is rigid. A rectangle would collapse into a parallelogram unless braced.' },
      { q: 'Which tool is used to check that a surface is perfectly horizontal?',
        options: ['Spirit level', 'Try square', 'Divider', 'Punch'], correct: 0,
        exp: 'A spirit level uses a bubble in a liquid vial. A try square checks 90° squareness instead.' },
      { q: 'Which of these is a renewable source of energy?',
        options: ['Coal', 'Petroleum', 'Solar', 'Natural gas'], correct: 2,
        exp: 'Solar energy is replenished naturally. Coal, petroleum and natural gas take millions of years to form.' },
      { q: 'The best way to prevent a hand tool from rusting in storage is to:',
        options: ['Leave it outdoors', 'Wipe it with oil', 'Wash it with water', 'Store it in damp cloth'], correct: 1,
        exp: 'Oil excludes moisture and oxygen, which are both needed for rusting.' }
    ],
    resources: [
      { cat: 'Video lesson', title: 'Basic Technology — technical drawing for JSS students', url: 'https://www.youtube.com/results?search_query=basic+technology+technical+drawing+jss+nigeria', note: 'Drawing instruments, line types and first/third angle projection.' },
      { cat: 'Structured course', title: 'Khan Academy — Geometry', url: 'https://www.khanacademy.org/math/geometry', note: 'Free practice on constructions, angles, triangles and solids.' },
      { cat: 'Past questions', title: 'Myschool — BECE Basic Technology past questions', url: 'https://myschool.ng/classroom', note: 'Junior WAEC (BECE) past questions with answers.' },
      { cat: 'Reference', title: 'Wikipedia — Technical drawing', url: 'https://en.wikipedia.org/wiki/Technical_drawing', note: 'Projection methods, line conventions and standards.' },
      { cat: 'Reference', title: 'Wikipedia — Simple machine', url: 'https://en.wikipedia.org/wiki/Simple_machine', note: 'Levers, pulleys, inclined planes and mechanical advantage.' },
      { cat: 'Reference', title: 'Wikipedia — Woodworking', url: 'https://en.wikipedia.org/wiki/Woodworking', note: 'Tools, joints and safe workshop practice.' }
    ]
  
};
