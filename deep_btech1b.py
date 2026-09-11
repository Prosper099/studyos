# deep_btech1b.py — Basic Tech JSS1 deep lesson 2/4: Common Tools & Their Uses. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
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
            <div class=\"formula\">TRAP: a rule measures, a try square does NOT measure length — it checks squareness. "Which tool checks that two edges meet at 90°?" → try square.</div>

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
            <div class=\"worked\"><b>Worked example (exam style):</b> "Name the tool for cutting metal rods." → hacksaw. "For cutting curves in thin wood?" → coping saw. "For smoothing a metal edge after cutting?" → file. Three classic one-mark answers.</div>

            <h3>5. Driving, tightening and holding tools</h3>
            <ul>
              <li><b>Hammers:</b> ball-pein (engineers' hammer, metalwork), claw hammer (drives AND pulls nails in woodwork), mallet (wooden — strikes chisels without bruising them).</li>
              <li><b>Screwdrivers:</b> flat/flat-blade for slotted screws; Phillips/star for cross-headed screws; size must fit the slot or it chews it.</li>
              <li><b>Spanners:</b> open-jaw, box and adjustable — turn nuts and bolts; the adjustable one fits many sizes but grips less firmly.</li>
              <li><b>Holding:</b> bench vice (grips metal work), woodworking vice, G-clamp (clamps work to a bench), hand vice for tiny pieces.</li>
            </ul>
            <svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Toolbox map: five labelled groups of tools: measuring (rule, try square), marking (scriber, punch), cutting (saw, chisel, file), driving (hammer, screwdriver, spanner), holding (vice, clamp)\">\n              <rect x=\"10\" y=\"10\" width=\"84\" height=\"60\" rx=\"9\" fill=\"#4f46e5\"/><text x=\"52\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"800\" fill=\"#fff\">MEASURE</text><text x=\"52\" y=\"45\" text-anchor=\"middle\" font-size=\"8\" fill=\"#e0e7ff\">rule, tape,</text><text x=\"52\" y=\"57\" text-anchor=\"middle\" font-size=\"8\" fill=\"#e0e7ff\">try square</text>\n              <rect x=\"102\" y=\"10\" width=\"84\" height=\"60\" rx=\"9\" fill=\"#0ea5e9\"/><text x=\"144\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"800\" fill=\"#fff\">MARK</text><text x=\"144\" y=\"45\" text-anchor=\"middle\" font-size=\"8\" fill=\"#e0f2fe\">pencil, scriber,</text><text x=\"144\" y=\"57\" text-anchor=\"middle\" font-size=\"8\" fill=\"#e0f2fe\">dividers, punch</text>\n              <rect x=\"194\" y=\"10\" width=\"84\" height=\"60\" rx=\"9\" fill=\"#10b981\"/><text x=\"236\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"800\" fill=\"#fff\">CUT</text><text x=\"236\" y=\"45\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d1fae5\">saws, chisels,</text><text x=\"236\" y=\"57\" text-anchor=\"middle\" font-size=\"8\" fill=\"#d1fae5\">files, snips</text>\n              <rect x=\"286\" y=\"10\" width=\"84\" height=\"60\" rx=\"9\" fill=\"#f59e0b\"/><text x=\"328\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"800\" fill=\"#78350f\">DRIVE</text><text x=\"328\" y=\"45\" text-anchor=\"middle\" font-size=\"8\" fill=\"#78350f\">hammers, screw-</text><text x=\"328\" y=\"57\" text-anchor=\"middle\" font-size=\"8\" fill=\"#78350f\">drivers, spanners</text>\n              <rect x=\"378\" y=\"10\" width=\"72\" height=\"60\" rx=\"9\" fill=\"#f43f5e\"/><text x=\"414\" y=\"30\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"800\" fill=\"#fff\">HOLD</text><text x=\"414\" y=\"45\" text-anchor=\"middle\" font-size=\"8\" fill=\"#ffe4e6\">vice,</text><text x=\"414\" y=\"57\" text-anchor=\"middle\" font-size=\"8\" fill=\"#ffe4e6\">G-clamp</text>\n              <text x=\"230\" y=\"95\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#0f172a\">Every job follows the chain: measure → mark → cut → drive/fix → check.</text>\n              <text x=\"230\" y=\"115\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">A workshop task always runs in this order — memorise the chain.</text>\n            </svg>

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
            <div class=\"formula\">TRAP: "State three ways of maintaining a hacksaw." → clean it, oil the blade lightly, hang it or store it so teeth touch nothing, and release blade tension if the frame allows. Maintenance answers always want: clean, oil, store, sharpen/repair.</div>

            <h3>8. Safety with hand tools (quick but examinable)</h3>
            <ul>
              <li>Cut <b>away</b> from your body; chisel and knife edges travel when they slip.</li>
              <li>Carry pointed tools with the point <b>down</b> and forward, never up at face level.</li>
              <li>Clamp small work — the hand that holds the piece should not be near the cutting edge.</li>
              <li>Keep handles tight and heads sound; discard mushroomed chisel heads and cracked hammer faces.</li>
              <li>Return tools to their rack after use — a chisel left on a bench edge falls on toes.</li>
            </ul>

            <h3>9. Try these (with answers)</h3>
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
            </ul>
            <div class=\"formula\">SUMMARY: tools are grouped by job — measuring (rule, tape, calipers, try square), marking (pencil, scriber, dividers, centre punch), cutting (saws, chisels, files, snips), driving and tightening (ball-pein and claw hammers, mallet, screwdrivers, spanners), holding (vices and G-clamps) and finishing (files, rasps, sandpaper, planes); every workshop job follows the chain measure → mark → cut → fix → finish; and a craftsman is known by care — clean, oil, store, sharpen, repair and never misuse — because the right tool, used rightly and kept well, is the whole of safe, neat work.</div>

'''

title = 'Common Tools & Their Uses'
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
