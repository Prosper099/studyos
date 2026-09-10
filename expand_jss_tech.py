"""Deep-expand JSS Basic Technology lessons (batch 6c-tech)."""
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

deep('Technology in Everyday Life', """

    <h3>Deep dive: technology is applied knowledge</h3>
    <p><b>Technology</b> is the application of scientific knowledge and skills to solve human problems and make work easier. Every tool — from a broom to a bulldozer — is technology. <b>Technological development</b> is the steady improvement of these tools: hand fan → electric fan; broom → vacuum cleaner; well and bucket → tap and pumping machine; town crier → radio; letter → phone → internet; canoe → engine boat; bicycle → motorcycle → car.</p>
    <h3>Technology around a Nigerian home</h3>
    <ul>
      <li><b>At home</b>: gas cooker, refrigerator, blender, generator/inverter, phone chargers — each replaces slower manual work.</li>
      <li><b>Communication</b>: radio and TV for news; phones for calls, WhatsApp and mobile money.</li>
      <li><b>Transport</b>: okada, keke, bus, train, ferry — moving people and goods faster.</li>
      <li><b>Farming</b>: cutlass and hoe → tractors, irrigation pumps, cassava graters and garri machines.</li>
    </ul>
    <h3>Advantages and disadvantages — both are examinable</h3>
    <p><b>Advantages</b>: faster work, better communication, improved health care, comfort, longer life expectancy. <b>Disadvantages</b>: pollution (generator fumes, plastic waste), job loss where machines replace people, cybercrime, screen addiction, and weapons of war.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Technology is the <b>application</b> of science — science discovers, technology applies.</li>
      <li>Give at least one advantage AND one disadvantage when asked about "effects" — one-sided answers lose marks.</li>
      <li>Local examples score: mention specific tools you actually use at home.</li>
    </ul>
""")

deep('Common Tools & Their Uses', """

    <h3>Deep dive: tools by family</h3>
    <ul>
      <li><b>Cutting tools</b>: saw (wood across or along the grain), chisel (paring wood), plane (smoothing surfaces), knife, axe, file (smoothing metal).</li>
      <li><b>Driving tools</b>: hammer (nails), mallet (wooden-headed — for chisels, never steel-on-steel), screwdriver (turning screws — flat and star/Phillips heads).</li>
      <li><b>Measuring &amp; marking tools</b>: steel rule and tape measure (length), try square (right angles and squareness), scriber (marking metal), punch and centre-punch (starting holes), divider (transferring distances).</li>
      <li><b>Holding tools</b>: bench vice (fixed to the bench), G-clamp and hand screw (grip work while sawing or gluing).</li>
      <li><b>Boring tools</b>: hand drill and bits for making holes.</li>
    </ul>
    <h3>Matching tool to task — the classic exam game</h3>
    <p>Straight cut in wood → <b>saw</b>; smooth a rough board → <b>plane</b>; check a corner is exactly 90° → <b>try square</b>; hold wood while gluing → <b>G-clamp</b>; mark a line on metal → <b>scriber</b> (a pencil won't show on steel).</p>
    <h3>Care and maintenance</h3>
    <ul>
      <li>Clean tools after use; wipe metal parts with a lightly oiled cloth to stop <b>rust</b>.</li>
      <li>Keep cutting edges sharp — a blunt tool needs more force and slips more (more dangerous, not less).</li>
      <li>Store tools in a box or on a rack: edges protected, handles dry.</li>
      <li>Never use a tool for the wrong job (screwdriver as chisel, spanner as hammer) — it ruins both tool and work.</li>
    </ul>
    <h3>Exam watch</h3>
    <ul>
      <li>Mallet vs hammer: wooden mallet for chisels and assembling joints; steel hammer for nails.</li>
      <li>A try square checks squareness; a steel rule measures length — different jobs.</li>
      <li>Say <b>why</b> a tool suits the task; one-word answers lose the explanation mark.</li>
    </ul>
""")

deep('Technical Drawing: Instruments, Lines & Lettering', """

    <h3>Deep dive: drawing is the language of engineers</h3>
    <p>A technical drawing communicates shape, size and assembly exactly — no words needed, anywhere in the world. The essential kit:</p>
    <ul>
      <li><b>Drawing board &amp; T-square</b> — the board gives a flat surface; the T-square draws all <b>horizontal</b> lines.</li>
      <li><b>Set squares</b> — 45° and 30°/60°; resting on the T-square they give verticals and angled lines.</li>
      <li><b>Compass</b> — circles and arcs; <b>divider</b> — stepping off equal distances.</li>
      <li><b>Protractor</b> — measuring and setting angles.</li>
      <li><b>Pencils</b> — H (hard, for light construction lines), HB (general), 2B (dark final outlines).</li>
    </ul>
    <h3>Standard line types and what they mean</h3>
    <ul>
      <li><b>Thick continuous</b> — visible outlines and edges.</li>
      <li><b>Thin continuous</b> — construction and dimension lines.</li>
      <li><b>Short dashes</b> — <b>hidden</b> edges (features you cannot see from that side).</li>
      <li><b>Chain line (long-short-long)</b> — centre lines and axes of symmetry.</li>
    </ul>
    <h3>Lettering and the title block</h3>
    <p>Lettering is <b>single-stroke, upright (or 60° inclined), uppercase</b>, evenly spaced — free-hand wobble has no place on a drawing. Every drawing carries a <b>title block</b> (bottom corner): title of the drawing, scale used, date, draughtsman's name and class. Scale (e.g. 1:50) tells the reader how the drawing size relates to the real object.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Hidden edges use <b>dashed</b> lines; centre lines use the <b>chain</b> line — mixing them is the commonest fault.</li>
      <li>Keep construction lines light (H pencil); only final outlines go dark.</li>
      <li>A drawing without a title block is incomplete — it is marked.</li>
    </ul>
""")

deep('Safety in the Workshop', """

    <h3>Deep dive: accidents have causes, so they have cures</h3>
    <p>Workshop accidents are rarely "bad luck" — they follow <b>carelessness</b> (rushing, playing), <b>faulty tools</b> (blunt, cracked handles), <b>unsafe conditions</b> (oily floors, poor light, blocked exits), <b>no protective clothing</b>, and <b>ignorance</b> of the right method.</p>
    <h3>Personal protective equipment (PPE)</h3>
    <ul>
      <li><b>Overalls/apron</b> — protects skin and clothing; no loose sleeves near machines.</li>
      <li><b>Safety boots</b> — crushed toes are the classic workshop injury.</li>
      <li><b>Goggles</b> — for chiselling, grinding, soldering.</li>
      <li><b>Gloves</b> — for hot, sharp or rough materials (but NEVER near rotating machines — they can be pulled in).</li>
      <li><b>Face mask</b> — for dust and fumes.</li>
    </ul>
    <h3>Standing rules</h3>
    <ul>
      <li>Keep floors clean and dry; wipe spills at once; keep walkways clear.</li>
      <li>Carry sharp tools point-down; pass handles first, never blades.</li>
      <li>No running or playing in the workshop; concentrate on the job.</li>
      <li>Report every accident, however small, to the teacher/supervisor.</li>
    </ul>
    <h3>First aid and fire basics</h3>
    <p>The <b>first-aid box</b> must be stocked and known to everyone: treat cuts (clean, press, bandage), burns (cool running water — no ointment), and get help for anything serious. For fire: know the exits and extinguisher location; never use water on electrical or petrol fires (use a CO₂/dry-powder extinguisher or sand).</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Give <b>causes AND preventions</b> when asked about accidents — they are usually paired marks.</li>
      <li>Gloves near rotating machines are a trap: protection must match the hazard.</li>
      <li>"Report small injuries" counts as a safety practice — infection prevention.</li>
    </ul>
""")

deep('Geometrical Construction & Plane Figures', """

    <h3>Deep dive: constructions with ruler and compasses only</h3>
    <p>Classical constructions use a <b>pair of compasses</b> and an unmarked <b>straightedge</b> — no protractor, no measuring. The two foundation skills are bisecting a line and bisecting an angle:</p>
    <ul>
      <li><b>Bisect a line AB</b>: compass opened more than half of AB, draw arcs above and below from A, then the same from B; the line through the two crossings cuts AB exactly in half <b>at 90°</b>.</li>
      <li><b>Bisect an angle</b>: arc from the vertex to cut both arms; equal arcs from those two points; join the vertex to the crossing — the angle is halved.</li>
      <li>Everything else builds on these: perpendiculars, 60°, 45° and 30° angles, and triangles from given sides.</li>
    </ul>
    <h3>Plane figures you must know cold</h3>
    <ul>
      <li><b>Triangles</b> by sides: equilateral (3 equal, angles 60° each), isosceles (2 equal), scalene (none). By angles: acute, right-angled, obtuse. Angles always sum to <b>180°</b>.</li>
      <li><b>Quadrilaterals</b>: square, rectangle, parallelogram, rhombus, trapezium, kite — angles sum to <b>360°</b>.</li>
      <li><b>Circle parts</b>: radius, diameter (2 × radius), circumference, chord, sector, segment.</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>Construct triangle PQR with PQ = 6 cm, QR = 5 cm, PR = 4 cm.</b> Draw PQ = 6 cm; compass 5 cm from Q; compass 4 cm from P; the arcs cross at R; join RQ and RP. Check the angles add to 180°.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>Leave construction arcs visible — they are part of the marking.</li>
      <li>A sharp pencil and a tight compass pivot make the difference between a pass and a blob.</li>
      <li>"Construct" means ruler-and-compasses; "draw/measure" allows the protractor — read the verb.</li>
    </ul>
""")

deep('Building Materials & Simple Structures', """

    <h3>Deep dive: the materials and their properties</h3>
    <ul>
      <li><b>Concrete</b> = cement + sand + granite (gravel) + water. The classic mix ratio is <b>1 : 2 : 4</b> (cement : sand : granite) for general work; more cement = stronger and dearer.</li>
      <li><b>Blocks/bricks</b> — sand-cement blocks or burnt clay bricks form the walls.</li>
      <li><b>Wood</b> — doors, frames, roofing members; must be seasoned (dried) to stop warping.</li>
      <li><b>Steel/iron</b> — rods inside concrete make <b>reinforced concrete</b>: concrete resists squeezing (compression), steel resists pulling (tension) — together they carry big loads.</li>
      <li><b>Roofing sheets</b> (aluminium/zinc), <b>glass</b> (windows), <b>paint</b> (protection and finish).</li>
    </ul>
    <p>Choose materials by <b>properties</b>: strength, durability (weather resistance), workability, cost and appearance. A roof must shed water; a floor must resist wear; a door frame must not rot.</p>
    <h3>How a simple building goes up</h3>
    <ol>
      <li><b>Foundation</b> — trenches dug and filled with concrete; it spreads the building's weight into the ground.</li>
      <li><b>Walls</b> — blocks laid in courses with mortar, checked plumb and level.</li>
      <li><b>Roof</b> — wooden or steel frame, then sheets; it keeps out sun and rain.</li>
      <li><b>Finishing</b> — plastering, wiring, plumbing, painting.</li>
    </ol>
    <h3>Simple structures everywhere</h3>
    <p>A <b>structure</b> holds loads: bridges, masts, tanks, even a bird's nest. Members carry loads as <b>compression</b> (squashed — columns), <b>tension</b> (pulled — cables), or <b>bending</b> (beams). The triangle is the strongest frame shape — that is why bridges and roof trusses are full of triangles.</p>
    <h3>Exam watch</h3>
    <ul>
      <li>The 1:2:4 ratio order is cement : sand : granite — mixing the order loses the mark.</li>
      <li>Concrete alone is strong in <b>compression</b>; it needs steel for <b>tension</b>.</li>
      <li>Triangles make frames rigid; rectangles flop into parallelograms unless braced.</li>
    </ul>
""")

open(CUR, 'w', encoding='utf-8').write(s)
print('JSS Basic Tech batch 6c-tech written: 6 topics')
