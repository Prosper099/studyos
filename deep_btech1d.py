# deep_btech1d.py — Basic Tech JSS1 deep lesson 4/4: Safety in the Workshop. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
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
              <tr><td>Moving machine parts</td><td>gears, belts, chucks, blades</td><td>catchs loose cloth, hair, fingers</td></tr>
              <tr><td>Sharp edges &amp; flying chips</td><td>cutting tools, grinding</td><td>cuts and eye injuries</td></tr>
              <tr><td>Electricity</td><td>frayed cords, wet hands, open sockets</td><td>shock and burns</td></tr>
              <tr><td>Fire</td><td>fuel, paint, gas, sparks</td><td>burns and destruction</td></tr>
              <tr><td>Dust and fumes</td><td>sawdust, paint spray, welding</td><td>lung and eye damage over time</td></tr>
              <tr><td>Noise</td><td>grinders, hammers, machines</td><td>gradual hearing loss</td></tr>
              <tr><td>Falling objects</td><td>poorly stacked stock, loose hammer heads</td><td>crushes feet and heads</td></tr>
            </table>
            <div class=\"formula\">TRAP: a hazard is the THING (a spinning blade); a risk is the CHANCE it hurts you (high if unguarded, low if guarded). Exams love asking the difference.</div>

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
            <div class=\"diagram\"><svg viewBox=\"0 0 460 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"A workshop worker wearing labelled protective equipment: helmet, goggles, mask, overalls, gloves, boots\">\n              <rect x=\"8\" y=\"8\" width=\"444\" height=\"194\" rx=\"10\" fill=\"#f0fdf4\" stroke=\"#166534\" stroke-width=\"2\"/>\n              <circle cx=\"230\" cy=\"52\" r=\"20\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"2\"/>\n              <path d=\"M208 46 a22 22 0 0 1 44 0 l0 -8 a22 14 0 0 0 -44 0 z\" fill=\"#f59e0b\" stroke=\"#92400e\" stroke-width=\"2\"/>\n              <rect x=\"214\" y=\"46\" width=\"32\" height=\"8\" rx=\"4\" fill=\"#38bdf8\" stroke=\"#075985\" stroke-width=\"1.5\"/>\n              <rect x=\"222\" y=\"60\" width=\"16\" height=\"8\" rx=\"3\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n              <rect x=\"206\" y=\"74\" width=\"48\" height=\"66\" rx=\"10\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n              <rect x=\"192\" y=\"78\" width=\"12\" height=\"48\" rx=\"6\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n              <rect x=\"256\" y=\"78\" width=\"12\" height=\"48\" rx=\"6\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n              <rect x=\"190\" y=\"124\" width=\"16\" height=\"12\" rx=\"4\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"1.5\"/>\n              <rect x=\"254\" y=\"124\" width=\"16\" height=\"12\" rx=\"4\" fill=\"#fbbf24\" stroke=\"#92400e\" stroke-width=\"1.5\"/>\n              <rect x=\"212\" y=\"140\" width=\"14\" height=\"40\" rx=\"5\" fill=\"#1e293b\"/>\n              <rect x=\"234\" y=\"140\" width=\"14\" height=\"40\" rx=\"5\" fill=\"#1e293b\"/>\n              <rect x=\"208\" y=\"178\" width=\"22\" height=\"10\" rx=\"3\" fill=\"#78350f\"/>\n              <rect x=\"232\" y=\"178\" width=\"22\" height=\"10\" rx=\"3\" fill=\"#78350f\"/>\n              <g font-size=\"9.5\" fill=\"#14532a\" font-weight=\"700\">\n                <line x1=\"252\" y1=\"34\" x2=\"320\" y2=\"30\" stroke=\"#166534\"/><text x=\"324\" y=\"33\">helmet — falling objects</text>\n                <line x1=\"248\" y1=\"50\" x2=\"320\" y2=\"52\" stroke=\"#166534\"/><text x=\"324\" y=\"55\">goggles — flying chips</text>\n                <line x1=\"240\" y1=\"64\" x2=\"320\" y2=\"74\" stroke=\"#166534\"/><text x=\"324\" y=\"77\">mask — dust &amp; fumes</text>\n                <line x1=\"254\" y1=\"100\" x2=\"320\" y2=\"100\" stroke=\"#166534\"/><text x=\"324\" y=\"103\">overalls — no loose cloth</text>\n                <line x1=\"270\" y1=\"130\" x2=\"320\" y2=\"126\" stroke=\"#166534\"/><text x=\"324\" y=\"129\">gloves — rough &amp; hot work</text>\n                <line x1=\"256\" y1=\"182\" x2=\"320\" y2=\"170\" stroke=\"#166534\"/><text x=\"324\" y=\"173\">boots — falling tools</text>\n                <text x=\"24\" y=\"40\">Dress like this and the</text>\n                <text x=\"24\" y=\"54\">workshop loses most of</text>\n                <text x=\"24\" y=\"68\">its ways to hurt you.</text>\n              </g>\n            </svg></div>

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
            <div class=\"worked\"><b>Worked example:</b> "Give three safety precautions when using a bench grinder." → wear goggles, stand to the side, check the guard is fitted, let it reach full speed before grinding, never force the work, switch off and wait for the wheel to stop before leaving.</div>

            <h3>6. Fire safety: the triangle and the extinguishers</h3>
            <ul>
              <li>Fire needs three things at once: <b>fuel + heat + oxygen</b> — the fire triangle. Remove any one and the fire dies; every extinguisher works by removing one side of the triangle.</li>
              <li><b>Water:</b> cools ordinary fires (wood, paper) — but NEVER on oil or electrical fires.</li>
              <li><b>Foam:</b> blankets liquid fuel fires.</li>
              <li><b>Dry powder:</b> versatile; good for liquids, gases and electrical fires.</li>
              <li><b>CO2:</b> displaces oxygen; the choice for electrical and fuel fires, leaves no mess.</li>
              <li>Prevention beats fighting: store fuels away from sparks, no open flames near paint and thinners, keep exits clear, know where the extinguisher and sand bucket live.</li>
            </ul>
            <div class=\"formula\">TRAP: water on an oil fire spreads burning oil; water on live electricity conducts the shock to YOU. If electricity or oil is involved, water is the wrong answer.</div>

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
            <div class=\"formula\">SUMMARY: workshop safety is habit, not luck — know the hazards (slips, moving parts, sharp edges, electricity, fire, dust, noise, falling objects); wear the right PPE (goggles, overalls, boots, gloves with care, helmet, ear and lung protection); obey the do/do-not rules; respect machine guards and electricity; remember the fire triangle (fuel + heat + oxygen) and match extinguishers to fire types — water never on oil or live electricity; and treat every injury with first aid and reporting. A craftsman&apos;s first skill is coming home with all ten fingers.</div>

'''

title = 'Safety in the Workshop'
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
