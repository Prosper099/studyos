# deep_maths1b.py — Deep-lesson batch 5b: Mathematics JSS1 (topics 3-4). RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT_C = '''
            <h3>1. Why letters? The great idea of algebra</h3>
            <p>Arithmetic uses known numbers: 5 + 7 = 12. But life keeps asking questions with an UNKNOWN: 'Some number of boys joined the 12 already in class; now there are 20. How many joined?' <b>Algebra</b> solves problems like this by letting a letter (usually <b>x</b>, <b>y</b>, <b>a</b>, <b>n</b>) stand for the unknown number. The letter is called a <b>variable</b>.</p>
            <ul>
              <li>'A number added to 12 gives 20' becomes x + 12 = 20.</li>
              <li>3 x means 3 TIMES x (we leave out the multiplication sign: 3x = 3 x x... careful, 3 x n is written 3n).</li>
              <li>x/4 or x over 4 means x divided by 4.</li>
              <li>x^2 means x multiplied by itself (x squared).</li>
            </ul>
            <div class="worked"><b>Think about it:</b> a letter is just a sealed envelope containing a number. Everything we do in algebra is reasoned so that, whatever number is inside the envelope, the statement stays true.</div>

            <h3>2. Expressions, terms and coefficients</h3>
            <ul>
              <li>An <b>algebraic expression</b> is a combination of terms: 3x + 2y - 5 has three TERMS (3x, +2y, -5), separated by + or - signs.</li>
              <li>The <b>coefficient</b> is the number multiplying the letter: in 3x the coefficient is 3; in -5y it is -5; in x it is 1 (understood).</li>
              <li>A <b>constant</b> is a term with no letter: the -5 above.</li>
              <li><b>Like terms</b> have exactly the same letter part: 3x and 7x are like; 3x and 3y are NOT like; 2x and 2x^2 are NOT like.</li>
            </ul>

            <h3>3. Substitution — putting numbers into letters</h3>
            <p>To <b>substitute</b>, replace each letter with its given value and then calculate, respecting the order of operations (multiply and divide before add and subtract).</p>
            <div class="worked"><b>Worked example:</b> if a = 4 and b = 3, find (i) 2a + b, (ii) a^2 - 2b, (iii) 3(a + b).<br>(i) 2(4) + 3 = 8 + 3 = 11.<br>(ii) 4^2 - 2(3) = 16 - 6 = 10.<br>(iii) 3(4 + 3) = 3(7) = 21.</div>
            <div class="formula">TRAP: negative values need brackets when substituting. If x = -2 then x^2 = (-2)^2 = +4, NOT -4. Squaring a negative gives a positive.</div>

            <h3>4. Simplifying — collecting like terms</h3>
            <ul>
              <li>Add or subtract ONLY like terms: 3x + 5x = 8x; 7y - 2y = 5y; 3x + 2y stays as it is.</li>
              <li>Keep the sign attached to each term: 5a - 2a + 7a = 10a.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> simplify 4x + 3y - 2x + 6 - y.<br>Group: (4x - 2x) + (3y - y) + 6 = 2x + 2y + 6.</div>

            <h3>5. Multiplying terms and opening brackets</h3>
            <ul>
              <li><b>Multiplying terms:</b> multiply the numbers, join the letters: 2a x 3b = 6ab; 4x x 2x = 8x^2; -3y x 2y = -6y^2.</li>
              <li><b>Opening (expanding) brackets:</b> multiply EVERY term inside by what is outside: 3(x + 4) = 3x + 12; 2(3a - 5) = 6a - 10; -2(x - 3) = -2x + 6 (watch the signs!).</li>
            </ul>

            <h3>6. Translating words into algebra</h3>
            <ul>
              <li>'5 more than a number' → x + 5. '5 less than a number' → x - 5.</li>
              <li>'Twice a number' → 2x. 'Half of a number' → x/2.</li>
              <li>'The square of a number, increased by 7' → x^2 + 7.</li>
              <li>'A number multiplied by 4, then 3 subtracted, gives 17' → 4x - 3 = 17 (that is an EQUATION — it has an = sign).</li>
            </ul>
            <div class="formula">TRAP: '5 less than x' is x - 5, NOT 5 - x. 'Less than' reverses the order.</div>

            <h3>7. Solving simple equations — the balance idea</h3>
            <p>An equation is a <b>balance scale</b>: the = sign is the pivot. Whatever you do to ONE side, you must do to the OTHER, and the balance stays level. The goal is to get x ALONE on one side.</p>
            <ul>
              <li>x + 5 = 12 → subtract 5 from both sides → x = 7.</li>
              <li>x - 7 = 4 → add 7 to both sides → x = 11.</li>
              <li>3x = 21 → divide both sides by 3 → x = 7.</li>
              <li>x/4 = 5 → multiply both sides by 4 → x = 20.</li>
            </ul>
            <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A balance scale: on the left pan two x-boxes plus three small blocks, on the right pan eleven blocks; removing three blocks from each side keeps the scale level and leaves two x-boxes equal to eight blocks, so x is four">
              <path d="M230 30 L230 130" stroke="#334155" stroke-width="4"/>
              <path d="M190 135 L270 135 L260 150 L200 150 Z" fill="#64748b"/>
              <path d="M80 40 L380 40" stroke="#334155" stroke-width="4"/>
              <circle cx="230" cy="32" r="7" fill="#d97706"/>
              <path d="M80 40 L60 78 M80 40 L100 78" stroke="#64748b" stroke-width="2"/>
              <path d="M380 40 L360 78 M380 40 L400 78" stroke="#64748b" stroke-width="2"/>
              <path d="M50 80 Q80 96 110 80 L104 80 L56 80 Z" fill="#94a3b8"/>
              <rect x="52" y="78" width="56" height="6" rx="3" fill="#64748b"/>
              <path d="M350 80 Q380 96 410 80 L404 80 L356 80 Z" fill="#94a3b8"/>
              <rect x="352" y="78" width="56" height="6" rx="3" fill="#64748b"/>
              <rect x="56" y="52" width="22" height="24" rx="4" fill="#6366f1"/>
              <text x="67" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">x</text>
              <rect x="82" y="52" width="22" height="24" rx="4" fill="#6366f1"/>
              <text x="93" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">x</text>
              <g fill="#f59e0b"><rect x="106" y="66" width="8" height="10"/><rect x="116" y="66" width="8" height="10"/><rect x="126" y="66" width="8" height="10"/></g>
              <g fill="#f59e0b"><rect x="352" y="66" width="8" height="10"/><rect x="362" y="66" width="8" height="10"/><rect x="372" y="66" width="8" height="10"/><rect x="382" y="66" width="8" height="10"/><rect x="392" y="66" width="8" height="10"/><rect x="352" y="54" width="8" height="10"/><rect x="362" y="54" width="8" height="10"/><rect x="372" y="54" width="8" height="10"/><rect x="382" y="54" width="8" height="10"/><rect x="392" y="54" width="8" height="10"/><rect x="367" y="42" width="8" height="10"/></g>
              <text x="80" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">2x + 3</text>
              <text x="380" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">11</text>
              <text x="230" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="#047857">Take 3 from BOTH sides: 2x = 8, so x = 4</text>
            </svg>

            <h3>8. Two-step equations</h3>
            <p>Undo the operations in REVERSE order: first remove the added/subtracted number, then undo the multiplication/division.</p>
            <div class="worked"><b>Worked example:</b> solve 2x + 3 = 11.<br>Step 1: subtract 3 from both sides → 2x = 8.<br>Step 2: divide both sides by 2 → x = 4.<br><b>Check:</b> 2(4) + 3 = 11. Correct!</div>
            <div class="worked"><b>Worked example:</b> solve 3x - 5 = 16.<br>Add 5: 3x = 21. Divide by 3: x = 7. Check: 3(7) - 5 = 16.</div>
            <ul>
              <li>Equations with x on both sides: 5x + 2 = 3x + 10 → subtract 3x from both sides → 2x + 2 = 10 → 2x = 8 → x = 4.</li>
              <li>With brackets: 2(x + 3) = 14 → open: 2x + 6 = 14 → 2x = 8 → x = 4.</li>
            </ul>
            <div class="formula">EXAM CODE: ALWAYS check your answer by putting it back into the original equation. It costs ten seconds and catches almost every mistake.</div>

            <h3>9. Equations from word problems</h3>
            <div class="worked"><b>Worked example (ages):</b> Ada is 3 years older than Bola. Together their ages are 21. How old is Bola?<br>Let Bola's age = x. Ada's age = x + 3. Equation: x + (x + 3) = 21 → 2x + 3 = 21 → 2x = 18 → x = 9. Bola is 9, Ada is 12. Check: 9 + 12 = 21.</div>
            <div class="worked"><b>Worked example (money):</b> Tunde buys 4 identical notebooks and gets ₦200 change from ₦1,000. Cost of one notebook?<br>Amount spent = 1,000 - 200 = 800. Equation: 4x = 800 → x = ₦200.</div>
            <ul>
              <li>Step 1: choose the letter for the UNKNOWN the question asks about.</li>
              <li>Step 2: translate every other quantity using that letter.</li>
              <li>Step 3: write the equation, solve it, and answer IN A FULL SENTENCE with units.</li>
            </ul>

            <h3>10. Formulae and function machines</h3>
            <p>A <b>formula</b> is a ready-made equation for a rule. Perimeter of a rectangle: P = 2(l + b). If l = 7 cm and b = 4 cm then P = 2(7 + 4) = 22 cm. A <b>function machine</b> chains operations on an input: 'multiply by 3, then add 1' turns input x into output 3x + 1. Feeding in 5 gives 16.</p>
            <div class="formula">EXAM LINE: 'construct a formula' questions want you to turn a word rule into symbols: 'take a number, double it, subtract 5' → y = 2x - 5.</div>

            <h3>11. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Simplify 7a + 3b - 2a + b. <i>Ans: 5a + 4b.</i></li>
              <li><b>Q2.</b> If x = 5, find 3x^2 - 4. <i>Ans: 3(25) - 4 = 71.</i></li>
              <li><b>Q3.</b> Expand 4(2y - 3). <i>Ans: 8y - 12.</i></li>
              <li><b>Q4.</b> Multiply 3p x 4p. <i>Ans: 12p^2.</i></li>
              <li><b>Q5.</b> Write '6 less than twice a number' in symbols. <i>Ans: 2x - 6.</i></li>
              <li><b>Q6.</b> Solve x + 9 = 15. <i>Ans: x = 6.</i></li>
              <li><b>Q7.</b> Solve 5x = 45. <i>Ans: x = 9.</i></li>
              <li><b>Q8.</b> Solve 3x - 7 = 20. <i>Ans: 3x = 27, x = 9.</i></li>
              <li><b>Q9.</b> Solve 4x + 5 = 2x + 17. <i>Ans: 2x = 12, x = 6.</i></li>
              <li><b>Q10.</b> A number tripled and increased by 4 gives 25. Find it. <i>Ans: 3x + 4 = 25 → 3x = 21 → x = 7.</i></li>
              <li><b>Q11.</b> The perimeter of a square is 36 cm. Find its side using P = 4s. <i>Ans: s = 9 cm.</i></li>
              <li><b>Q12.</b> A machine multiplies by 2 then adds 3. The output is 17. What was the input? <i>Ans: 2x + 3 = 17 → x = 7.</i></li>
            </ul>
            <div class="formula">SUMMARY: Algebra replaces unknown numbers with letters so we can reason about them. We substitute values, collect like terms, expand brackets and translate word statements into symbols. An equation is a balance: doing the same to both sides keeps it true, and reversing operations step by step isolates the unknown — a method that solves age problems, money problems and formula questions alike. Always check by substitution.</div>

'''

CONTENT_D = '''
            <h3>1. What is an angle?</h3>
            <p>An <b>angle</b> is the amount of TURN between two lines (rays) that meet at a point. The lines are the <b>arms</b>; the meeting point is the <b>vertex</b>. Angles are measured in <b>degrees (deg)</b> — one full turn is 360 deg.</p>
            <ul>
              <li>Think of a door opening on its hinges: the wider the door opens, the bigger the angle. The LENGTH of the arms does not matter — only the amount of turn.</li>
              <li>Angles are named with three letters (angle ABC, vertex letter in the middle) or one letter at the vertex (angle B), or a small letter like x inside the opening.</li>
            </ul>

            <h3>2. Measuring and drawing angles with a protractor</h3>
            <ul>
              <li>Place the protractor's centre exactly on the VERTEX, with its baseline along one arm.</li>
              <li>Read from the ZERO that lies on that arm — protractors have two scales (inner and outer); choosing the wrong one gives 180 - angle instead of the angle.</li>
              <li>Acute angles read less than 90, obtuse between 90 and 180 — use this as a sanity check on your reading.</li>
              <li>To DRAW an angle: draw one arm, centre the protractor on the vertex, mark the required degree, remove the protractor and join vertex to mark.</li>
            </ul>

            <h3>3. Types of angles</h3>
            <ul>
              <li><b>Acute</b> — between 0 deg and 90 deg.</li>
              <li><b>Right angle</b> — exactly 90 deg (the corner of a book; marked with a little square).</li>
              <li><b>Obtuse</b> — between 90 deg and 180 deg.</li>
              <li><b>Straight angle</b> — exactly 180 deg (a straight line).</li>
              <li><b>Reflex</b> — between 180 deg and 360 deg.</li>
            </ul>
            <div class="formula">EXAM CODE: remember the ladder — acute &lt; right (90) &lt; obtuse &lt; straight (180) &lt; reflex &lt; full turn (360). Questions love 'classify 135 deg'.</div>

            <h3>4. Angles on a line and at a point</h3>
            <ul>
              <li><b>Angles on a straight line add up to 180 deg.</b> If one angle on a line is 115 deg, its neighbour is 180 - 115 = 65 deg.</li>
              <li><b>Angles at a point add up to 360 deg.</b> Three angles at a point measure 100 deg and 140 deg; the third is 360 - 240 = 120 deg.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> on a straight line, angles x, 2x and 3x sit side by side. x + 2x + 3x = 180 → 6x = 180 → x = 30. The angles are 30 deg, 60 deg and 90 deg.</div>

            <h3>5. Complementary and supplementary angles</h3>
            <ul>
              <li><b>Complementary</b> angles add up to 90 deg: the complement of 35 deg is 55 deg.</li>
              <li><b>Supplementary</b> angles add up to 180 deg: the supplement of 105 deg is 75 deg.</li>
              <li>Memory hook: C comes before S, and 90 comes before 180.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> an angle is 20 deg more than its complement. Find it. Let the angle = x; its complement = 90 - x. Equation: x = (90 - x) + 20 → 2x = 110 → x = 55. (Its complement is 35; indeed 55 = 35 + 20.)</div>

            <h3>6. Vertically opposite angles</h3>
            <p>When two straight lines CROSS, they make four angles. The angles OPPOSITE each other (facing across the vertex) are <b>vertically opposite angles</b>, and they are <b>EQUAL</b>.</p>
            <div class="worked"><b>Worked example:</b> two lines cross; one angle is 70 deg. Then the angle vertically opposite it is 70 deg, and the two angles on the straight line beside it are each 180 - 70 = 110 deg. All four angles: 70, 110, 70, 110.</div>

            <h3>7. Triangles — the 180 deg rule</h3>
            <ul>
              <li><b>The angles of any triangle add up to 180 deg.</b> Tear off the three corners of a paper triangle and they fit together on a straight line.</li>
              <li><b>By sides:</b> equilateral (3 equal sides, all angles 60 deg), isosceles (2 equal sides and 2 equal base angles), scalene (no equal sides).</li>
              <li><b>By angles:</b> acute-angled (all acute), right-angled (one 90 deg), obtuse-angled (one obtuse).</li>
            </ul>
            <svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A triangle with its three angles labelled a, b and c, next to the same three angles placed together on a straight line at one point, showing that a plus b plus c equals a straight angle of 180 degrees">
              <path d="M60 120 L140 30 L200 120 Z" fill="#eef2ff" stroke="#6366f1" stroke-width="2.5"/>
              <text x="82" y="110" font-size="12" font-weight="700" fill="#3730a3">a</text>
              <text x="138" y="52" font-size="12" font-weight="700" fill="#3730a3">b</text>
              <text x="176" y="110" font-size="12" font-weight="700" fill="#3730a3">c</text>
              <path d="M230 120 L430 120" stroke="#334155" stroke-width="2.5"/>
              <path d="M230 120 L300 40" stroke="#059669" stroke-width="2"/>
              <path d="M300 40 L360 120" stroke="#d97706" stroke-width="0"/>
              <path d="M230 120 L300 40 L360 120 Z" fill="#ecfdf5" stroke="#059669" stroke-width="0"/>
              <path d="M258 88 A40 40 0 0 1 292 80 L230 120 Z" fill="#a7f3d0"/>
              <path d="M300 40 L360 120 L420 60" stroke="none"/>
              <path d="M360 120 L300 40" stroke="#d97706" stroke-width="2"/>
              <path d="M420 55 L360 120" stroke="#6366f1" stroke-width="2"/>
              <text x="270" y="105" font-size="12" font-weight="700" fill="#047857">a</text>
              <text x="315" y="90" font-size="12" font-weight="700" fill="#b45309">b</text>
              <text x="372" y="105" font-size="12" font-weight="700" fill="#3730a3">c</text>
              <text x="330" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">a + b + c = 180 deg (straight line)</text>
            </svg>
            <div class="worked"><b>Worked example:</b> a triangle has angles 55 deg and 65 deg. Third angle = 180 - (55 + 65) = 180 - 120 = 60 deg.</div>
            <div class="worked"><b>Worked example (isosceles):</b> the two equal base angles of an isosceles triangle are 70 deg each. The vertex angle = 180 - 140 = 40 deg.</div>

            <h3>8. Quadrilaterals — the 360 deg rule</h3>
            <ul>
              <li><b>The angles of any quadrilateral add up to 360 deg</b> (a diagonal splits it into two triangles: 180 + 180).</li>
              <li><b>Square</b> — 4 equal sides, 4 right angles. <b>Rectangle</b> — opposite sides equal, 4 right angles.</li>
              <li><b>Parallelogram</b> — opposite sides parallel and equal; opposite angles equal.</li>
              <li><b>Rhombus</b> — 4 equal sides, opposite angles equal. <b>Trapezium</b> — exactly one pair of parallel sides. <b>Kite</b> — two pairs of adjacent equal sides.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> three angles of a quadrilateral are 95 deg, 110 deg and 80 deg. Fourth = 360 - 285 = 75 deg.</div>

            <h3>9. Other polygons and the angle-sum rule</h3>
            <p>A <b>polygon</b> is a closed figure with straight sides: pentagon (5), hexagon (6), octagon (8)... The angle sum of an n-sided polygon is <b>(n - 2) x 180 deg</b>, because it splits into (n - 2) triangles from one vertex.</p>
            <ul>
              <li>Pentagon: (5 - 2) x 180 = 540 deg. Hexagon: 720 deg. Octagon: 1,080 deg.</li>
              <li>Each angle of a REGULAR pentagon: 540 ÷ 5 = 108 deg.</li>
            </ul>
            <div class="formula">EXAM LINE: the formula (n - 2) x 180 answers every 'angle sum' and 'each angle of a regular polygon' question. Memorise it cold.</div>

            <h3>10. Perimeter — distance around</h3>
            <ul>
              <li><b>Perimeter</b> = total distance around a figure (add all sides).</li>
              <li>Square: P = 4s. Rectangle: P = 2(l + b). Triangle: add the three sides.</li>
              <li>Circle: <b>circumference</b> C = 2πr (or πd), taking π as 22/7 or 3.142.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a rectangular farm is 120 m by 80 m. P = 2(120 + 80) = 400 m. Fencing it with wire at ₦250 per metre costs 400 x 250 = ₦100,000.</div>

            <h3>11. Area — surface covered</h3>
            <ul>
              <li><b>Area</b> measures the surface a figure covers, in square units (cm2, m2).</li>
              <li>Square: A = s x s = s^2. Rectangle: A = l x b.</li>
              <li>Triangle: A = 1/2 x base x height (the height is measured PERPENDICULAR to the base).</li>
              <li>Circle: A = πr^2.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a triangle has base 10 cm and height 6 cm. A = 1/2 x 10 x 6 = 30 cm2.<br>A room 5 m by 4 m has area 20 m2; carpet at ₦3,000 per m2 costs ₦60,000.</div>
            <div class="formula">TRAP: perimeter and area use DIFFERENT units — cm (or m) versus cm2 (or m2). Writing 'area = 24 cm' loses a mark even when 24 is right.</div>

            <h3>12. Line symmetry</h3>
            <p>A figure has <b>line symmetry</b> if a line (mirror line) can fold it onto itself exactly. A square has 4 lines of symmetry; a rectangle 2; an isosceles triangle 1; an equilateral triangle 3; a circle — infinitely many.</p>

            <h3>13. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Classify 160 deg. <i>Ans: obtuse.</i></li>
              <li><b>Q2.</b> Find the complement of 62 deg and the supplement of 62 deg. <i>Ans: 28 deg and 118 deg.</i></li>
              <li><b>Q3.</b> Two angles on a straight line are x and x + 40. Find x. <i>Ans: 2x + 40 = 180 → x = 70.</i></li>
              <li><b>Q4.</b> Two lines cross and one angle is 108 deg. Give the other three. <i>Ans: 72 deg, 108 deg, 72 deg.</i></li>
              <li><b>Q5.</b> A triangle has angles 2x, 3x and 5x. Find x and the largest angle. <i>Ans: 10x = 180 → x = 18; largest = 90 deg.</i></li>
              <li><b>Q6.</b> The vertex angle of an isosceles triangle is 44 deg. Find each base angle. <i>Ans: (180 - 44) ÷ 2 = 68 deg.</i></li>
              <li><b>Q7.</b> Three angles of a quadrilateral are equal; the fourth is 90 deg. Find each equal angle. <i>Ans: 3x = 270 → x = 90 deg (it is a rectangle-type case).</i></li>
              <li><b>Q8.</b> Find the angle sum of a hexagon and one angle of a regular hexagon. <i>Ans: 720 deg; 120 deg.</i></li>
              <li><b>Q9.</b> A square has perimeter 48 cm. Find its side and area. <i>Ans: s = 12 cm; A = 144 cm2.</i></li>
              <li><b>Q10.</b> Find the circumference of a circle of radius 7 cm (π = 22/7). <i>Ans: 2 x 22/7 x 7 = 44 cm.</i></li>
              <li><b>Q11.</b> Find the area of a triangle with base 12 cm and height 9 cm. <i>Ans: 54 cm2.</i></li>
              <li><b>Q12.</b> How many lines of symmetry has a rectangle? <i>Ans: 2.</i></li>
            </ul>
            <div class="formula">SUMMARY: An angle is a turn measured in degrees; acute, right, obtuse, straight and reflex classify it. Angles on a line sum to 180 deg, at a point to 360 deg, and vertically opposite angles are equal. Triangles sum to 180 deg and quadrilaterals to 360 deg, generalising to (n - 2) x 180 for any polygon. Perimeter measures the boundary, area the surface (square units), and symmetry folds figures onto themselves — the tool kit for every JSS geometry question.</div>

'''

LESSONS = [
    ('Introduction to Algebra: Letters & Simple Equations', CONTENT_C),
    ('Angles & Plane Figures', CONTENT_D),
]

for title, content in LESSONS:
    assert '`' not in content and '${' not in content, title
    pat = re.compile(r"\n(\s*)title: '" + re.escape(title) + r"',")
    hits = list(pat.finditer(s))
    assert len(hits) == 1, (title, len(hits))
    k = hits[0].end()
    ci = s.index('content: `', k) + 10
    ce = s.index('`', ci)
    s = s[:ci] + content + s[ce:]
    print(title, '->', len(content), 'chars | svg:', '<svg' in content)

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
