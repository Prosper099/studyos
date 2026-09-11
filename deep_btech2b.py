# deep_btech2b.py — Basic Tech JSS2 deep lesson 2/2: Building Materials & Simple Structures. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
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
            <div class=\"formula\">TRAP: cement and concrete are NOT the same thing. Cement is the powder binder; concrete is the finished stone-like mix of cement + sand + aggregate + water. Calling concrete &apos;cement&apos; is the classic exam trap.</div>

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
            <div class=\"diagram\"><svg viewBox=\"0 0 460 220\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cut-away house showing labelled parts: foundation below ground, wall, lintel above window, beam, columns, floor, roof\">\n              <rect x=\"8\" y=\"8\" width=\"444\" height=\"204\" rx=\"10\" fill=\"#fff7ed\" stroke=\"#9a3412\" stroke-width=\"2\"/>\n              <rect x=\"60\" y=\"170\" width=\"340\" height=\"14\" fill=\"#a8a29e\"/>\n              <rect x=\"80\" y=\"184\" width=\"300\" height=\"20\" fill=\"#57534e\"/>\n              <rect x=\"100\" y=\"70\" width=\"12\" height=\"100\" fill=\"#b45309\"/>\n              <rect x=\"348\" y=\"70\" width=\"12\" height=\"100\" fill=\"#b45309\"/>\n              <rect x=\"100\" y=\"60\" width=\"260\" height=\"12\" fill=\"#7c2d12\"/>\n              <path d=\"M90 62 L230 18 L370 62 Z\" fill=\"#dc2626\" opacity=\"0.85\"/>\n              <rect x=\"150\" y=\"110\" width=\"52\" height=\"60\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/>\n              <rect x=\"146\" y=\"100\" width=\"60\" height=\"10\" fill=\"#16a34a\"/>\n              <rect x=\"250\" y=\"120\" width=\"44\" height=\"50\" fill=\"#bae6fd\" stroke=\"#075985\" stroke-width=\"2\"/>\n              <g font-size=\"9.5\" font-weight=\"700\" fill=\"#7c2d12\">\n                <line x1=\"230\" y1=\"196\" x2=\"230\" y2=\"206\" stroke=\"#9a3412\"/><text x=\"236\" y=\"209\">foundation — carries everything to the ground</text>\n                <line x1=\"106\" y1=\"140\" x2=\"40\" y2=\"140\" stroke=\"#9a3412\"/><text x=\"14\" y=\"132\" >wall</text>\n                <line x1=\"176\" y1=\"105\" x2=\"176\" y2=\"88\" stroke=\"#9a3412\"/><text x=\"150\" y=\"84\">lintel</text>\n                <line x1=\"300\" y1=\"66\" x2=\"300\" y2=\"52\" stroke=\"#9a3412\"/><text x=\"282\" y=\"48\">beam</text>\n                <line x1=\"230\" y1=\"40\" x2=\"230\" y2=\"30\" stroke=\"#9a3412\"/><text x=\"214\" y=\"26\">roof</text>\n                <line x1=\"272\" y1=\"145\" x2=\"320\" y2=\"145\" stroke=\"#9a3412\"/><text x=\"300\" y=\"138\">window</text>\n                <line x1=\"176\" y1=\"140\" x2=\"230\" y2=\"150\" stroke=\"#9a3412\"/><text x=\"214\" y=\"158\">door</text>\n              </g>\n            </svg></div>

            <h3>6. Simple structures: who carries what</h3>
            <ul>
              <li><b>Foundation:</b> the buried feet of the building; spreads the whole weight into the ground so the soil is never overloaded.</li>
              <li><b>Columns:</b> vertical members that carry loads from above down to the foundation.</li>
              <li><b>Beams:</b> horizontal members that span openings and carry floors/roofs; they bend, so steel sits where the bending stretches them.</li>
              <li><b>Lintel:</b> a small beam over a door or window that carries the wall above the opening.</li>
              <li><b>Walls:</b> enclose, divide and (in some buildings) carry loads; <b>floor</b> gives the working surface; <b>roof</b> shields from rain and sun.</li>
              <li>Load path, top to bottom: roof → beams/walls → columns → foundation → ground. Every kilogram of rain on the roof ends up in the soil.</li>
            </ul>
            <div class=\"worked\"><b>Worked example (exam style):</b> "Why is a lintel placed above a window?" → window and door openings are empty — they cannot carry the wall above them; the lintel bridges the opening and passes the load to the wall at the sides.</div>

            <h3>7. Choosing materials the Nigerian way</h3>
            <ul>
              <li><b>Climate:</b> heavy rain wants good roof pitch and rust protection; hot sun wants ventilation and shade.</li>
              <li><b>Cost and availability:</b> laterite, sand and stone are local almost everywhere; imported finishes are where budgets die.</li>
              <li><b>Maintenance:</b> the cheapest material today can be the most expensive in five years if it rots, rusts or cracks.</li>
              <li><b>Skill:</b> a material is only as good as the hands that place it — workmanship is half the structure.</li>
            </ul>

            <h3>8. Try these (with answers)</h3>
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
            </ul>
            <div class=\"formula\">SUMMARY: building materials are chosen by matching properties (strength, durability, workability, cost, availability) to the job: sand, stone, cement, clay, timber, steel and water form the core list; mortar glues while concrete carries, mixed at ratios like 1:2:4 and cured moist; blocks and bricks must be uniform, hard and stable; timber must be seasoned and metals chosen ferrous or non-ferrous with rust protection; and simple structures hand the load down a clear path — roof to beams and walls, to columns, to foundation, to ground — with lintels bridging every door and window on the way.</div>

'''

title = 'Building Materials & Simple Structures'
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
