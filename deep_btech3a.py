# deep_btech3a.py — Basic Tech JSS3 deep lesson: Machines, Mechanisms & Maintenance. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
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
            <div class=\"formula\">TRAP: a screw is a wrapped inclined plane and a wedge is a moving double inclined plane — examiners ask exactly that pairing.</div>

            <h3>2. Levers and their three classes</h3>
            <ul>
              <li>Every lever has three points: the <b>fulcrum</b> (F, pivot), the <b>load</b> (L, what you move) and the <b>effort</b> (E, what you apply). The class is decided by which one sits in the MIDDLE.</li>
              <li><b>First class — F in the middle:</b> crowbar, see-saw, scissors, pliers, claw hammer pulling a nail.</li>
              <li><b>Second class — L in the middle:</b> wheelbarrow, bottle opener, nutcracker. Always multiplies force (MA greater than 1).</li>
              <li><b>Third class — E in the middle:</b> forearm lifting a spoon, tweezers, broom, fishing rod. Multiplies speed and reach instead of force.</li>
            </ul>
            <div class=\"diagram\"><svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Three lever classes drawn as beams on pivots showing the order of fulcrum, load and effort in each class\">\n              <rect x=\"8\" y=\"8\" width=\"444\" height=\"174\" rx=\"10\" fill=\"#fdf4ff\" stroke=\"#86198f\" stroke-width=\"2\"/>\n              <g font-size=\"10\" font-weight=\"800\" fill=\"#86198f\">\n                <text x=\"24\" y=\"34\">FIRST CLASS — fulcrum in the middle (crowbar, see-saw)</text>\n                <text x=\"24\" y=\"94\">SECOND CLASS — load in the middle (wheelbarrow)</text>\n                <text x=\"24\" y=\"154\">THIRD CLASS — effort in the middle (forearm, broom)</text>\n              </g>\n              <line x1=\"40\" y1=\"52\" x2=\"250\" y2=\"52\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n              <path d=\"M145 52 l-12 18 h24 z\" fill=\"#f59e0b\" stroke=\"#92400e\"/>\n              <rect x=\"44\" y=\"40\" width=\"16\" height=\"12\" fill=\"#dc2626\"/><text x=\"46\" y=\"36\" font-size=\"9\" fill=\"#b91c1c\" font-weight=\"700\">L</text>\n              <path d=\"M238 52 l0 -14 m-5 0 h10\" stroke=\"#16a34a\" stroke-width=\"3\"/><text x=\"232\" y=\"32\" font-size=\"9\" fill=\"#15803d\" font-weight=\"700\">E</text>\n              <text x=\"138\" y=\"82\" font-size=\"9\" fill=\"#92400e\" font-weight=\"700\">F</text>\n              <line x1=\"40\" y1=\"112\" x2=\"250\" y2=\"112\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n              <path d=\"M52 112 l-12 18 h24 z\" fill=\"#f59e0b\" stroke=\"#92400e\"/>\n              <rect x=\"140\" y=\"100\" width=\"16\" height=\"12\" fill=\"#dc2626\"/><text x=\"142\" y=\"96\" font-size=\"9\" fill=\"#b91c1c\" font-weight=\"700\">L</text>\n              <path d=\"M238 112 l0 -14 m-5 0 h10\" stroke=\"#16a34a\" stroke-width=\"3\"/><text x=\"232\" y=\"92\" font-size=\"9\" fill=\"#15803d\" font-weight=\"700\">E</text>\n              <text x=\"46\" y=\"142\" font-size=\"9\" fill=\"#92400e\" font-weight=\"700\">F</text>\n              <line x1=\"40\" y1=\"172\" x2=\"250\" y2=\"172\" stroke=\"#0f172a\" stroke-width=\"4\"/>\n              <path d=\"M52 172 l-12 14 h24 z\" fill=\"#f59e0b\" stroke=\"#92400e\"/>\n              <rect x=\"140\" y=\"160\" width=\"16\" height=\"12\" fill=\"#dc2626\"/><text x=\"142\" y=\"156\" font-size=\"9\" fill=\"#b91c1c\" font-weight=\"700\">L</text>\n              <path d=\"M96 172 l0 -14 m-5 0 h10\" stroke=\"#16a34a\" stroke-width=\"3\"/><text x=\"90\" y=\"152\" font-size=\"9\" fill=\"#15803d\" font-weight=\"700\">E</text>\n              <text x=\"46\" y=\"186\" font-size=\"9\" fill=\"#92400e\" font-weight=\"700\">F</text>\n              <g font-size=\"9.5\" fill=\"#6b21a8\">\n                <text x=\"276\" y=\"60\">Remember with FLE:</text>\n                <text x=\"276\" y=\"76\">1-2-3 the middle is</text>\n                <text x=\"276\" y=\"92\">F, then L, then E.</text>\n                <text x=\"276\" y=\"116\">Second class always</text>\n                <text x=\"276\" y=\"132\">multiplies force;</text>\n                <text x=\"276\" y=\"148\">third class trades force</text>\n                <text x=\"276\" y=\"164\">for speed and reach.</text>\n              </g>\n            </svg></div>

            <h3>3. The three numbers: MA, VR and efficiency</h3>
            <ul>
              <li><b>Mechanical advantage (MA) = Load ÷ Effort.</b> It counts how many times the machine multiplies your push. Lift 200 N with 50 N of effort and MA = 4.</li>
              <li><b>Velocity ratio (VR) = distance moved by effort ÷ distance moved by load</b> — a geometry fact of the machine, fixed by its design (lever arms, pulley count, slope length).</li>
              <li><b>Efficiency = (MA ÷ VR) × 100.</b> Real machines always lose some effort to friction and to lifting their own parts, so MA is always below VR and efficiency is always below 100%.</li>
            </ul>
            <div class=\"worked\"><b>Worked example:</b> a lever has VR 5. A worker applies 60 N and lifts 240 N. MA = 240 ÷ 60 = 4. Efficiency = (4 ÷ 5) × 100 = 80%. The missing 20% went to friction — every real machine pays that tax.</div>
            <div class=\"formula\">TRAP: efficiency above 100% means you swapped MA and VR or misread the numbers — no machine beats 100%, not even in exam dreams.</div>

            <h3>4. Pulleys and gear trains: passing the motion on</h3>
            <ul>
              <li><b>Fixed pulley:</b> VR = 1; it only changes direction — pulling down feels easier than lifting up because your weight helps.</li>
              <li><b>Movable pulley:</b> VR = 2; the load hangs from two rope segments, so each carries half the weight.</li>
              <li><b>Block and tackle:</b> several pulleys together; VR equals the number of rope segments supporting the load.</li>
              <li><b>Gears:</b> the driver turns the driven. Gear ratio = teeth on driven ÷ teeth on driver. A 12-tooth driver on a 36-tooth driven gives ratio 3 — the driven turns 3 times slower but with 3 times the turning force.</li>
              <li><b>Belts and chains:</b> belts can slip (quiet, cheap — fans, generators); chains and sprockets never slip (bicycles, bikes&apos; rear wheel).</li>
            </ul>
            <div class=\"worked\"><b>Worked example:</b> a bicycle chainring has 48 teeth, the rear sprocket 16. Ratio = 48 ÷ 16 = 3, so one pedal turn spins the rear wheel 3 times — that is why hard gears cover more ground per pedal stroke.</div>

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

            <h3>7. Try these (with answers)</h3>
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
            <div class=\"formula\">SUMMARY: every machine resolves into six simple machines — lever, pulley, wheel and axle, inclined plane, wedge and screw; levers are classed by their middle point (F, L or E) with the second class multiplying force and the third multiplying speed; their power is measured by MA = Load ÷ Effort, VR = effort distance ÷ load distance, and efficiency = (MA ÷ VR) × 100, forever below 100% because of friction; motion is passed on through pulley blocks, gear trains, belts and chains; and the whole machine kingdom is kept alive by lubrication against friction and by preventive maintenance against breakdown — clean, oil, tighten, protect from rust, and service before it fails.</div>

'''

title = 'Machines, Mechanisms & Maintenance'
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
