# deep_btech2a.py — Basic Tech JSS2 deep lesson 1/2: Geometrical Construction & Plane Figures. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
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
            <div class=\"formula\">TRAP: bisection means TWO EQUAL halves — if your two result angles do not match on the protractor, the compass radius changed mid-work. Keep one radius until the step says change it.</div>

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
            <div class=\"formula\">Interior angle sum of any polygon = (n − 2) × 180°, where n = number of sides. Triangle: 180°; quadrilateral: 360°; hexagon: 720°. Each interior angle of a REGULAR polygon = (n − 2) × 180° ÷ n.</div>

            <h3>6. Constructing triangles from given data</h3>
            <ul>
              <li><b>SSS (three sides):</b> draw the base with the rule; compass set to the second side from one end, third side from the other end; the arcs&apos; crossing is the top vertex.</li>
              <li><b>SAS (two sides + included angle):</b> draw one side; set the given angle at its end with protractor/compass; mark the second side&apos;s length along the new ray; join.</li>
              <li><b>ASA (two angles + included side):</b> draw the side; set both angles at its two ends; the rays cross at the third vertex.</li>
              <li>A triangle is rigid: once three correct facts are fixed, the shape cannot change — which is why bridges are full of triangles.</li>
            </ul>
            <div class=\"diagram\"><svg viewBox=\"0 0 460 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"SSS triangle construction: base AB drawn solid, two dashed compass arcs from A and B crossing at C, triangle completed\">\n              <rect x=\"8\" y=\"8\" width=\"444\" height=\"184\" rx=\"10\" fill=\"#eff6ff\" stroke=\"#1e40af\" stroke-width=\"2\"/>\n              <line x1=\"90\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n              <path d=\"M90 150 m118 -96 a118 118 0 0 1 30 40\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/>\n              <path d=\"M300 150 m-96 -112 a130 130 0 0 0 -44 26\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/>\n              <line x1=\"90\" y1=\"150\" x2=\"205\" y2=\"52\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n              <line x1=\"300\" y1=\"150\" x2=\"205\" y2=\"52\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n              <circle cx=\"90\" cy=\"150\" r=\"3.5\" fill=\"#b91c1c\"/><circle cx=\"300\" cy=\"150\" r=\"3.5\" fill=\"#b91c1c\"/><circle cx=\"205\" cy=\"52\" r=\"3.5\" fill=\"#b91c1c\"/>\n              <text x=\"82\" y=\"166\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">A</text>\n              <text x=\"306\" y=\"166\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">B</text>\n              <text x=\"199\" y=\"42\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">C</text>\n              <text x=\"330\" y=\"60\" font-size=\"10\" fill=\"#1e40af\" font-weight=\"700\">Step 1: draw base AB.</text>\n              <text x=\"330\" y=\"78\" font-size=\"10\" fill=\"#1e40af\" font-weight=\"700\">Step 2: arc radius b from A,</text>\n              <text x=\"330\" y=\"94\" font-size=\"10\" fill=\"#1e40af\" font-weight=\"700\">arc radius a from B.</text>\n              <text x=\"330\" y=\"110\" font-size=\"10\" fill=\"#1e40af\" font-weight=\"700\">Step 3: arcs cross at C —</text>\n              <text x=\"330\" y=\"126\" font-size=\"10\" fill=\"#1e40af\" font-weight=\"700\">join AC and BC. Done.</text>\n              <text x=\"330\" y=\"150\" font-size=\"9.5\" fill=\"#475569\">Same steps, same perfect</text>\n              <text x=\"330\" y=\"164\" font-size=\"9.5\" fill=\"#475569\">triangle, every single time.</text>\n            </svg></div>

            <h3>7. Circles and their parts</h3>
            <ul>
              <li><b>Radius</b> (centre to edge), <b>diameter</b> (through centre, = 2r), <b>chord</b> (any line joining two points on the circle), <b>arc</b> (a piece of the edge), <b>sector</b> (slice between two radii), <b>segment</b> (region between chord and arc), <b>tangent</b> (line touching at exactly one point, perpendicular to the radius at that point).</li>
              <li><b>Finding a circle&apos;s centre:</b> draw any two chords, construct each one&apos;s perpendicular bisector; the bisectors cross at the centre.</li>
              <li>Circumference = πd = 2πr; area = πr². Take π as 22/7 or 3.14 as the question directs.</li>
            </ul>
            <div class=\"worked\"><b>Worked example:</b> a circular plate has radius 7 cm. Circumference = 2 × 22/7 × 7 = 44 cm; area = 22/7 × 7 × 7 = 154 cm². The 7s cancel cleanly — examiners LOVE radius 7 with 22/7.</div>

            <h3>8. Perimeter and area of the common plane figures</h3>
            <table>
              <tr><th>Figure</th><th>Perimeter</th><th>Area</th></tr>
              <tr><td>Rectangle</td><td>2(l + b)</td><td>l × b</td></tr>
              <tr><td>Square</td><td>4s</td><td>s²</td></tr>
              <tr><td>Triangle</td><td>a + b + c</td><td>½ × base × height</td></tr>
              <tr><td>Parallelogram</td><td>2(a + b)</td><td>base × vertical height</td></tr>
              <tr><td>Trapezium</td><td>sum of sides</td><td>½(a + b) × h, a,b = parallel sides</td></tr>
              <tr><td>Circle</td><td>2πr</td><td>πr²</td></tr>
            </table>
            <div class=\"formula\">TRAP: parallelogram and triangle areas use the VERTICAL height, not the slant side. The slant is for perimeter; the straight-down height is for area.</div>

            <h3>9. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Instrument pair for bisecting a line? <i>Ans: compass and straight edge (rule).</i></li>
              <li><b>Q2.</b> Angle sum of a quadrilateral? <i>Ans: 360°.</i></li>
              <li><b>Q3.</b> Each interior angle of a regular hexagon? <i>Ans: 720° ÷ 6 = 120°.</i></li>
              <li><b>Q4.</b> Construct 30° without a protractor. <i>Ans: construct 60° then bisect it.</i></li>
              <li><b>Q5.</b> Triangle with sides 5, 5, 8? <i>Ans: isosceles.</i></li>
              <li><b>Q6.</b> Which data set fixes a triangle rigidly, SSS or AAA? <i>Ans: SSS (AAA only fixes shape, not size).</i></li>
              <li><b>Q7.</b> Line touching a circle at one point? <i>Ans: tangent.</i></li>
              <li><b>Q8.</b> How to find a circle&apos;s centre with compass? <i>Ans: perpendicular bisectors of two chords; they meet at the centre.</i></li>
              <li><b>Q9.</b> Area of triangle base 10 cm height 6 cm? <i>Ans: 30 cm².</i></li>
              <li><b>Q10.</b> Trapezium parallel sides 8 and 12, height 5: area? <i>Ans: ½(8 + 12) × 5 = 50 square units.</i></li>
              <li><b>Q11.</b> Circumference of circle diameter 14 cm (π = 22/7)? <i>Ans: 44 cm.</i></li>
              <li><b>Q12.</b> Why are triangles used in bridges and roofs? <i>Ans: a triangle is rigid — it cannot change shape without changing a side.</i></li>
            </ul>
            <div class=\"formula\">SUMMARY: geometrical construction turns compass-and-rule recipes into perfect shapes: bisect lines and angles, erect perpendiculars, build 30/45/60/90°, divide lines equally, and construct triangles from SSS, SAS or ASA; plane figures are catalogued by sides and angles with interior-angle sum (n − 2) × 180°; circles are named by radius, diameter, chord, arc, sector, segment and tangent, with the centre found where two chord bisectors meet; and perimeter/area formulas (rectangle, square, triangle, parallelogram, trapezium, circle) finish the toolkit — always with vertical height for area, never the slant.</div>

'''

title = 'Geometrical Construction & Plane Figures'
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
