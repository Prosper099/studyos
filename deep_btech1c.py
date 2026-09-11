# deep_btech1c.py — Basic Tech JSS1 deep lesson 3/4: Technical Drawing. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
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
            <div class=\"formula\">TRAP: horizontal lines come from the T-square; vertical lines come from a set square resting ON the T-square. "Which instrument draws horizontal lines?" → T-square, not set square.</div>

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
            <div class=\"diagram\"><svg viewBox=\"0 0 460 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Line specimen chart: outline thick solid, hidden dashed, centre chain, dimension with arrows, hatching at 45 degrees, each labelled\">\n              <rect x=\"8\" y=\"8\" width=\"444\" height=\"174\" rx=\"10\" fill=\"#f8fafc\" stroke=\"#0f172a\" stroke-width=\"3\"/>\n              <line x1=\"30\" y1=\"40\" x2=\"200\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"4\"/><text x=\"215\" y=\"44\" font-size=\"10\" fill=\"#0f172a\" font-weight=\"700\">OUTLINE — visible edges</text>\n              <line x1=\"30\" y1=\"70\" x2=\"200\" y2=\"70\" stroke=\"#334155\" stroke-width=\"2.5\" stroke-dasharray=\"8 5\"/><text x=\"215\" y=\"74\" font-size=\"10\" fill=\"#0f172a\" font-weight=\"700\">HIDDEN — unseen edges</text>\n              <line x1=\"30\" y1=\"100\" x2=\"200\" y2=\"100\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"14 4 3 4\"/><text x=\"215\" y=\"104\" font-size=\"10\" fill=\"#0f172a\" font-weight=\"700\">CENTRE — axes &amp; symmetry</text>\n              <line x1=\"30\" y1=\"130\" x2=\"200\" y2=\"130\" stroke=\"#334155\" stroke-width=\"1.2\"/><path d=\"M30 130 l8 -4 v8 z M200 130 l-8 -4 v8 z\" fill=\"#334155\"/><text x=\"215\" y=\"134\" font-size=\"10\" fill=\"#0f172a\" font-weight=\"700\">DIMENSION — carries the size</text>\n              <g stroke=\"#64748b\" stroke-width=\"1.2\"><line x1=\"30\" y1=\"168\" x2=\"52\" y2=\"148\"/><line x1=\"44\" y1=\"168\" x2=\"66\" y2=\"148\"/><line x1=\"58\" y1=\"168\" x2=\"80\" y2=\"148\"/><line x1=\"72\" y1=\"168\" x2=\"94\" y2=\"148\"/><line x1=\"86\" y1=\"168\" x2=\"108\" y2=\"148\"/><line x1=\"100\" y1=\"168\" x2=\"122\" y2=\"148\"/></g><text x=\"215\" y=\"162\" font-size=\"10\" fill=\"#0f172a\" font-weight=\"700\">HATCHING — cut surfaces at 45°</text>\n            </svg></div>

            <h3>5. Lettering: the handwriting of engineers</h3>
            <ul>
              <li>Technical lettering is <b>single-stroke Gothic</b> — each letter is drawn in one even weight of line, upright or sloped at about 75°.</li>
              <li>Letters must be <b>uniform in height and spacing</b>; guide lines are drawn lightly first and erased after.</li>
              <li>Common heights: 3.5 mm to 5 mm for notes; bigger for titles. Capitals are preferred for labels.</li>
              <li>Why it matters: a drawing is a legal-ish document — a misread 3 as an 8 can change a size by millimetres and ruin a part.</li>
              <li>Practise rule: draw letters with single confident strokes; never &apos;paint&apos; them in with repeated rubbing.</li>
            </ul>
            <div class=\"worked\"><b>Worked example (exam style):</b> "State two qualities of good lettering." → uniform height, uniform spacing, clean single strokes, consistent slope. Any two score.</div>

            <h3>6. Sheet layout: borders and the title block</h3>
            <ul>
              <li>Every sheet gets a <b>border line</b> leaving a margin (about 10 mm; wider on the binding edge).</li>
              <li>The <b>title block</b> sits at the bottom-right corner and carries: drawing title, designer&apos;s name, sheet number, scale, date, and sometimes the institution or company.</li>
              <li><b>Scale</b> states the ratio of drawing to reality: 1:1 full size, 1:2 reduced, 2:1 enlarged. A 600 mm desk drawn 1:10 becomes 60 mm on paper.</li>
            </ul>
            <div class=\"formula\">TRAP: scale 1:50 means 1 unit on paper = 50 units in real life — the SMALLER number belongs to the paper. Reading it backwards makes buildings fit in shoeboxes.</div>

            <h3>7. Keeping drawings clean and accurate</h3>
            <ul>
              <li>Work from the centre outwards and from top to left-to-right so your hand never drags over fresh lines.</li>
              <li>Construction lines stay LIGHT (2H/H); only final outlines get darkened (HB).</li>
              <li>One clean erasure beats five smudged corrections; shield the rest of the sheet while erasing.</li>
              <li>Check twice: every circle has its centre line, every hidden edge its dashes, every size its dimension.</li>
            </ul>

            <h3>8. Try these (with answers)</h3>
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
            </ul>
            <div class=\"formula\">SUMMARY: technical drawing is the exact, standardised language of engineers; its toolkit is the board, T-square, set squares, compass, dividers, protractor, scale, French curves and graded pencils; its grammar is the line types — outline, hidden, centre, dimension, extension, leader, hatching, border; its handwriting is single-stroke lettering on guide lines; and every sheet is framed by a border and signed off in a bottom-right title block carrying title, name, scale, date and sheet number.</div>

'''

title = 'Technical Drawing: Instruments, Lines & Lettering'
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
