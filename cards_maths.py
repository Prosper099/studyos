"""Flashcards batch 2: Mathematics (SS + JSS) to 15 cards per topic."""
import re
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()
def esc(t): return t.replace("\\", "\\\\").replace("'", "\\'")

CARDS = {
 'Number Bases & Modular Arithmetic': (11, [
  ("Convert 1101(base 2) to base 10.", "1x8 + 1x4 + 0x2 + 1x1 = 13 — read the place values 8, 4, 2, 1 from left to right."),
  ("Convert 25(base 10) to base 2.", "Divide by 2 repeatedly, keeping remainders: 25 = 11001(base 2). Check: 16 + 8 + 1 = 25."),
  ("Work out 1101(base 2) + 1011(base 2).", "Add column by column, carrying whenever a column totals 2: 1101 + 1011 = 11000(base 2) (= 24 in base 10)."),
  ("Convert 345(base 6) to base 10.", "3x36 + 4x6 + 5x1 = 108 + 24 + 5 = 137."),
  ("What does 100(base 7) mean in base 10?", "1x7^2 = 49 — the place values in base 7 are powers of 7 (1, 7, 49, 343, ...)."),
  ("Evaluate 9 mod 7 and 15 mod 4.", "9 mod 7 = 2 (9 = 1x7 + 2); 15 mod 4 = 3 — modular arithmetic keeps only the remainder."),
  ("If today is Wednesday, what day will it be in 50 days?", "50 mod 7 = 1, so one day on from Wednesday — Thursday. The days of the week work in mod 7."),
  ("Name three real-life uses of modular arithmetic.", "Clock arithmetic (12-hour and 24-hour time), days of the week and calendars, check digits on ID cards/ISBNs, and computer cryptography."),
  ("Convert 0.11(base 2) to a fraction in base 10.", "0.11(base 2) = 1/2 + 1/4 = 3/4 — after the point the place values are 1/2, 1/4, 1/8, ..."),
  ("Multiply 11(base 2) by 101(base 2).", "11 x 101 = 1111(base 2) (= 3 x 5 = 15 in base 10 — a good check on your binary working)."),
  ("Why can the digit 7 never appear in a base-7 number?", "Digits in base b run from 0 to b - 1; base 7 uses only 0-6, so any '7' would carry over into the next place value (7(base 10) = 10(base 7)).")
 ]),
 'Indices, Logarithms & Surds': (12, [
  ("State the three basic laws of indices.", "a^m x a^n = a^(m+n); a^m / a^n = a^(m-n); (a^m)^n = a^(mn) — same base throughout."),
  ("What do zero and negative indices mean?", "a^0 = 1 for any non-zero a, and a^-n = 1/a^n — e.g. 2^-3 = 1/8."),
  ("Express 27^(2/3) without indices.", "27^(2/3) = (cube root of 27)^2 = 3^2 = 9 — the denominator is the root, the numerator the power."),
  ("Solve 2^x = 32.", "32 = 2^5, so x = 5 — express both sides with the same base and equate the indices."),
  ("What does log_a x = n mean?", "It means a^n = x — a logarithm is simply an index in disguise. E.g. log_2 8 = 3 because 2^3 = 8."),
  ("State the three laws of logarithms.", "log(mn) = log m + log n; log(m/n) = log m - log n; log m^n = n log m."),
  ("Evaluate log_10 1000, log 1 and log_5 5.", "log_10 1000 = 3; log 1 = 0 (a^0 = 1); log_5 5 = 1 — these three values are worth memorising."),
  ("Simplify sqrt 50 + sqrt 8.", "sqrt 50 = 5 sqrt 2 and sqrt 8 = 2 sqrt 2, so the sum is 7 sqrt 2 — break each surd into a square factor times a remainder."),
  ("Rationalise the denominator of 6/sqrt 3.", "Multiply top and bottom by sqrt 3: 6 sqrt 3 / 3 = 2 sqrt 3 — a denominator must never contain a surd."),
  ("Expand (5 + sqrt 2)(5 - sqrt 2).", "Difference of two squares: 25 - 2 = 23 — the surd terms cancel, which is why conjugate pairs are so useful."),
  ("Solve log_2 (x + 3) = 4.", "x + 3 = 2^4 = 16, so x = 13 — convert the logarithm back to index form first."),
  ("Simplify (8 x 10^5) / (2 x 10^2) in standard form.", "8/2 = 4 and 10^5/10^2 = 10^3, giving 4 x 10^3 — divide the numbers and subtract the indices.")
 ]),
 'Algebraic Expressions & Simple Equations': (12, [
  ("Expand 3(2x - 5).", "Multiply each term inside the bracket: 6x - 15."),
  ("Expand (x + 3)(x + 4).", "FOIL: x^2 + 4x + 3x + 12 = x^2 + 7x + 12 — every term in the first bracket multiplies every term in the second."),
  ("Factorise x^2 + 5x + 6.", "(x + 2)(x + 3) — find two numbers that multiply to give 6 and add to give 5."),
  ("Factorise completely: 2x^2 - 18.", "First take out the common factor 2: 2(x^2 - 9); then difference of two squares: 2(x + 3)(x - 3)."),
  ("Solve 3x - 7 = 8.", "3x = 15, so x = 5 — add 7 to both sides, then divide by 3."),
  ("Solve 5x + 3 = 2x + 18.", "3x = 15 (subtract 2x and 3), so x = 5 — collect x terms on one side and numbers on the other."),
  ("Solve the simultaneous equations x + y = 10 and x - y = 4.", "Adding: 2x = 14, x = 7; then y = 3 — elimination works best when a variable's coefficients match."),
  ("Make t the subject of v = u + at.", "v - u = at, so t = (v - u)/a — isolate the required letter step by step, doing the same to both sides."),
  ("The sum of two consecutive integers is 41. Find them.", "Let them be n and n + 1: 2n + 1 = 41, n = 20 — the numbers are 20 and 21."),
  ("Simplify (6a^2b)/(3ab) x 2b.", "(6/3) a^(2-1) b^(1-1) x 2b = 2a x 2b = 4ab — simplify numbers and subtract indices of like letters."),
  ("What is the difference between an expression, an equation and an identity?", "An expression has no equals sign (3x + 2); an equation is true for particular values (2x + 1 = 7); an identity is true for all values, written with == (2(x + 1) == 2x + 2)."),
  ("If a = 3 and b = -2, evaluate a^2 - 2ab + b^2.", "9 - 2(3)(-2) + 4 = 9 + 12 + 4 = 25 — substitute carefully, keeping brackets around negative numbers.")
 ]),
 'Sets, Venn Diagrams & Logic': (12, [
  ("What do n(A), ξ, A' and the empty set mean?", "n(A) is the number of elements in A; ξ (xi) is the universal set containing all elements under discussion; A' is the complement — everything in ξ not in A; the empty set { } contains no elements."),
  ("Define union and intersection of two sets.", "A ∪ B is everything in A or B or both (join them); A ∩ B is only what the two sets share (where the Venn circles overlap)."),
  ("State the two-set Venn diagram formula.", "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) — the overlap is counted twice by n(A) + n(B), so subtract it once."),
  ("30 students play football, 25 play tennis and 8 play both. How many play at least one game?", "n(F ∪ T) = 30 + 25 - 8 = 47 students."),
  ("In a class of 50, 32 offer Biology, 28 offer Chemistry and everyone offers at least one. How many offer both?", "n(B ∩ C) = 32 + 28 - 50 = 10 — when n(A ∪ B) is the whole class, the overlap is the excess over the total."),
  ("Write the three-set inclusion-exclusion formula.", "n(A∪B∪C) = n(A) + n(B) + n(C) - n(A∩B) - n(A∩C) - n(B∩C) + n(A∩B∩C)."),
  ("What are disjoint (mutually exclusive) sets?", "Sets with no element in common — their Venn circles do not overlap and n(A ∩ B) = 0, so n(A ∪ B) = n(A) + n(B)."),
  ("How many subsets does a set with 4 elements have?", "2^4 = 16, including the empty set and the set itself — a set with n elements has 2^n subsets."),
  ("If ξ = {integers from 1 to 20}, A = {even numbers}, what are n(A) and n(A')?", "n(A) = 10 (2, 4, ..., 20) and n(A') = 10 — the complement holds the odds; n(A) + n(A') = n(ξ) always."),
  ("How do you shade (A ∩ B)' on a Venn diagram?", "First find A ∩ B (the overlap) and shade everything EXCEPT it — the complement of an intersection is 'not both'."),
  ("Give an example of a subset relationship.", "If A = {2, 4} and B = {2, 4, 6, 8}, then A is a subset of B (A ⊂ B) — every element of A is also in B."),
  ("What is the logical negation of 'All students passed'?", "'Some students did not pass' — to disprove an 'all' statement you need just one counter-example.")
 ]),
 'Quadratic Equations': (12, [
  ("Write the general form of a quadratic equation.", "ax^2 + bx + c = 0 with a not equal to zero — its graph is a parabola and it has at most two roots."),
  ("Solve x^2 + 5x + 6 = 0 by factorisation.", "(x + 2)(x + 3) = 0, so x = -2 or x = -3 — each bracket is set to zero."),
  ("State the quadratic formula.", "x = (-b +/- sqrt(b^2 - 4ac)) / (2a) — use it when factorisation is hard, and substitute a, b, c with their signs."),
  ("Solve x^2 - 5x + 6 = 0 by completing the square.", "(x - 5/2)^2 - 25/4 + 6 = 0, so (x - 2.5)^2 = 0.25, x - 2.5 = +/-0.5, giving x = 3 or x = 2."),
  ("What does the discriminant b^2 - 4ac tell you?", "If positive: two distinct real roots; if zero: two equal roots (the curve touches the x-axis); if negative: no real roots (the curve misses the x-axis)."),
  ("Find the sum and product of the roots of 2x^2 - 7x + 3 = 0.", "Sum = -b/a = 7/2; product = c/a = 3/2 — true for any quadratic ax^2 + bx + c = 0."),
  ("Form the quadratic equation whose roots are 3 and -5.", "Sum = -2, product = -15, so x^2 - (sum)x + product = 0 gives x^2 + 2x - 15 = 0."),
  ("For what values of k does x^2 + kx + 9 = 0 have equal roots?", "b^2 - 4ac = 0: k^2 = 36, so k = +6 or -6."),
  ("The length of a rectangle is 3 m more than its width and its area is 40 m2. Find the width.", "w(w + 3) = 40 gives w^2 + 3w - 40 = 0, so (w + 8)(w - 5) = 0; w = 5 m (rejecting the negative root)."),
  ("Solve simultaneously y = x + 1 and y = x^2 - 5.", "Substitute: x + 1 = x^2 - 5, so x^2 - x - 6 = 0, (x - 3)(x + 2) = 0; the points are (3, 4) and (-2, -1)."),
  ("A ball is thrown upwards and its height is h = 20t - 5t^2 metres. When is it 15 m high?", "15 = 20t - 5t^2 gives t^2 - 4t + 3 = 0, so t = 1 s (on the way up) and t = 3 s (on the way down)."),
  ("Where does the parabola y = x^2 - 4x + 3 cut the x-axis and the y-axis?", "x-axis: x^2 - 4x + 3 = 0 gives x = 1 and x = 3; y-axis: set x = 0, giving y = 3 (the constant c).")
 ]),
 'Sequences & Series (A.P. and G.P.)': (12, [
  ("What is an arithmetic progression? Give an example.", "A sequence with a constant common difference d between consecutive terms — e.g. 3, 7, 11, 15, ... where d = 4."),
  ("Write the nth term of an A.P.", "U_n = a + (n - 1)d, where a is the first term — the (n - 1) appears because the first term itself adds no d."),
  ("Find the 10th term of 5, 9, 13, 17, ...", "a = 5, d = 4: U_10 = 5 + 9 x 4 = 41."),
  ("Write the sum of the first n terms of an A.P.", "S_n = (n/2)[2a + (n - 1)d] or S_n = (n/2)(first term + last term)."),
  ("Find the sum of the first 20 natural numbers.", "S = (20/2)(1 + 20) = 10 x 21 = 210 — the classic n(n + 1)/2 result."),
  ("What is a geometric progression? Give an example.", "A sequence where each term is multiplied by a constant common ratio r — e.g. 2, 6, 18, 54, ... where r = 3."),
  ("Write the nth term of a G.P.", "U_n = a r^(n-1) — e.g. the 6th term of 3, 6, 12, ... is 3 x 2^5 = 96."),
  ("Write the sum of n terms and the sum to infinity of a G.P.", "S_n = a(1 - r^n)/(1 - r) for r between -1 and 1 in practice; the sum to infinity S = a/(1 - r) exists only when |r| < 1."),
  ("Find the sum to infinity of 8 + 4 + 2 + 1 + ...", "a = 8, r = 1/2: S = 8 / (1 - 1/2) = 16 — the terms get closer and closer to filling 16 without reaching it."),
  ("A man saves ₦500 in January and increases his saving by ₦100 each month. How much does he save in December, and in total for the year?", "December is the 12th term: 500 + 11(100) = ₦1,600. Total S_12 = (12/2)(500 + 1600) = 6 x 2100 = ₦12,600."),
  ("The 3rd term of an A.P. is 14 and the 7th term is 34. Find a and d.", "a + 6d = 34 and a + 2d = 14; subtracting: 4d = 20, d = 5, then a = 4."),
  ("Insert two arithmetic means between 6 and 18.", "6, _, _, 18 is an A.P. with 3 gaps: d = (18 - 6)/3 = 4, giving 6, 10, 14, 18.")
 ]),
 'Trigonometry & Angle of Elevation': (12, [
  ("State the SOH CAH TOA ratios for a right-angled triangle.", "sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent — label the sides relative to the angle you are using."),
  ("Give the exact values of sin 30, cos 60 and tan 45.", "sin 30 = 1/2, cos 60 = 1/2, tan 45 = 1 — the 30-60-90 and 45-45-90 triangles are the source of these standard values."),
  ("State Pythagoras' theorem.", "In a right-angled triangle, the square on the hypotenuse equals the sum of the squares on the other two sides: c^2 = a^2 + b^2 — e.g. 3-4-5."),
  ("What is the angle of elevation, and how does it differ from the angle of depression?", "Elevation: looking UP from the horizontal to an object; depression: looking DOWN from the horizontal. Both are measured from the horizontal line, and for two observers they are equal (alternate angles)."),
  ("A tower is seen at an angle of elevation of 30 deg from a point 60 m away. Find its height.", "h = 60 tan 30 = 60/ sqrt 3 = about 34.6 m — opposite = adjacent x tan."),
  ("State the fundamental identity linking sine and cosine.", "sin^2 θ + cos^2 θ = 1 — it follows directly from Pythagoras' theorem on the unit circle; also tan θ = sin θ / cos θ."),
  ("State the sine rule and when to use it.", "a/sin A = b/sin B = c/sin C — use it for non-right-angled triangles given two angles and a side, or two sides and a non-included angle."),
  ("State the cosine rule.", "a^2 = b^2 + c^2 - 2bc cos A — use it when you know two sides and the included angle, or all three sides (rearranged to find an angle)."),
  ("A ladder 10 m long rests against a wall at 60 deg to the ground. How high up the wall does it reach?", "h = 10 sin 60 = 10 x (sqrt 3 / 2) = about 8.66 m."),
  ("What is a bearing, and how is it written?", "A direction measured in degrees clockwise from North, written with three figures — due East is 090 deg, South 180 deg, and N30 degE is the same as 030 deg."),
  ("Sketch features: what is the period and range of y = sin x?", "It repeats every 360 deg (period 360 deg) and oscillates between -1 and +1, passing through zero at 0, 180 and 360 deg."),
  ("From the top of a 20 m building the angle of depression of a car is 45 deg. How far is the car from the base?", "The angle of elevation from the car is also 45 deg, so distance = 20 / tan 45 = 20 m — depression and elevation angles are equal (alternate angles).")
 ]),
 'Coordinate Geometry': (12, [
  ("How are coordinates written, and what is the origin?", "As an ordered pair (x, y) — x across, y up — measured from the origin (0, 0) where the axes cross; the four quadrants are numbered anticlockwise from top-right."),
  ("Find the midpoint of (2, 3) and (8, 7).", "Midpoint = ((x1 + x2)/2, (y1 + y2)/2) = (5, 5) — the average of each coordinate."),
  ("Find the distance between (1, 2) and (4, 6).", "sqrt((4 - 1)^2 + (6 - 2)^2) = sqrt(9 + 16) = 5 — Pythagoras on the coordinate grid."),
  ("Write the gradient formula and find the gradient through (1, 3) and (5, 11).", "m = (y2 - y1)/(x2 - x1) = (11 - 3)/(5 - 1) = 2 — 'rise over run'."),
  ("Write the gradient-intercept form of a straight line and identify m and c in y = 3x - 4.", "y = mx + c, where m is the gradient (3) and c the y-intercept (-4) — the point where the line crosses the y-axis."),
  ("What are the gradient conditions for parallel and perpendicular lines?", "Parallel lines have equal gradients (m1 = m2); perpendicular lines have m1 x m2 = -1 (e.g. 2 and -1/2)."),
  ("Find the equation of the line through (1, 2) with gradient 3.", "y - 2 = 3(x - 1), so y = 3x - 1 — use y - y1 = m(x - x1) and simplify."),
  ("Find the gradient of 2y + 4x = 10.", "Rearrange: y = -2x + 5, so m = -2 — always make y the subject first."),
  ("What are the x- and y-intercepts of 3x + 2y = 12?", "x-intercept: set y = 0, x = 4 (point (4, 0)); y-intercept: set x = 0, y = 6 (point (0, 6))."),
  ("Find the equation of the line through (2, 1) and (6, 9).", "Gradient = 8/4 = 2; y - 1 = 2(x - 2) gives y = 2x - 3."),
  ("When are three points collinear?", "When they lie on one straight line — the gradient between each pair is equal, e.g. (0, 1), (1, 3), (2, 5) all give gradient 2."),
  ("How do you shade the region y > 2x + 1 on a graph?", "Draw y = 2x + 1 as a DASHED line (points on it are not included; use solid for >=), then test (0, 0): 0 > 1 is false, so shade the side NOT containing the origin.")
 ]),
 'Variation: Direct, Inverse, Joint & Partial': (12, [
  ("What is direct variation? Write its equation.", "y varies directly as x when y = kx (k is the constant of variation) — doubling x doubles y; the graph is a straight line through the origin."),
  ("If y varies directly as x and y = 12 when x = 4, find y when x = 7.", "k = 12/4 = 3, so y = 3x and y = 21 when x = 7."),
  ("What is inverse variation? Give a real example.", "y = k/x — y falls as x rises; e.g. for a fixed journey, time taken varies inversely as speed."),
  ("If y varies inversely as x and y = 6 when x = 5, find y when x = 15.", "k = 6 x 5 = 30, so y = 30/15 = 2 — tripling x divides y by 3."),
  ("What is joint variation? Write an example equation.", "One quantity depends on two or more others at once, e.g. y varies jointly as x and z: y = kxz (or y = kx/z for mixed variation)."),
  ("Write the equation for partial variation.", "y = a + bx — part of y is constant (a) and part varies with x; e.g. a taxi fare = fixed charge + rate per km."),
  ("If y varies as the square of x and y = 36 when x = 3, find y when x = 5.", "k = 36/9 = 4, so y = 4x^2 and y = 4 x 25 = 100."),
  ("The cost of a school trip varies partly as a fixed cost and partly with the number of students. It costs ₦4,400 for 20 students and ₦5,600 for 35. Find the formula.", "Let C = a + bn: 4400 = a + 20b and 5600 = a + 35b; subtracting gives 15b = 1200, b = 80, a = 2800, so C = 2800 + 80n."),
  ("If y varies directly as x and inversely as z, write the equation and find y when x = 6, z = 3, given y = 8 when x = 2, z = 4.", "y = kx/z; k = 8 x 4/2 = 16, so y = 16 x 6/3 = 32."),
  ("A car travels a fixed distance. If the speed doubles, what happens to the time?", "It halves — time varies inversely as speed (t = distance/speed), so doubling speed multiplies time by 1/2."),
  ("What shape is the graph of inverse variation?", "A curve (a rectangular hyperbola) in the first quadrant that gets closer to both axes without touching them — not a straight line."),
  ("The mass of a wire varies directly as its length. A 15 m wire has mass 6 kg. Find the mass of 25 m.", "k = 6/15 = 0.4 kg/m, so mass = 0.4 x 25 = 10 kg.")
 ]),
 'Calculus: Differentiation & Integration': (11, [
  ("What does dy/dx represent geometrically?", "The gradient of the curve (slope of the tangent) at any point — and physically, a rate of change, such as velocity when y is distance and x is time."),
  ("Differentiate y = 4x^3 - 5x^2 + 2x - 7.", "dy/dx = 12x^2 - 10x + 2 — multiply each term's coefficient by its power, then reduce the power by 1; constants vanish."),
  ("State the rule for differentiating x^n and give two special cases.", "d/dx (x^n) = n x^(n-1); special cases: d/dx (constant) = 0 and d/dx (x) = 1."),
  ("Find the gradient of y = x^2 + 3x at the point where x = 2.", "dy/dx = 2x + 3, so at x = 2 the gradient is 7."),
  ("How do you find stationary points, and how do you classify them?", "Set dy/dx = 0 and solve for x. The second derivative decides: d2y/dx2 > 0 means a minimum, < 0 a maximum."),
  ("Find the turning point of y = x^2 - 6x + 5 and say whether it is a maximum or minimum.", "dy/dx = 2x - 6 = 0 gives x = 3, y = -4; d2y/dx2 = 2 > 0, so (3, -4) is a minimum point."),
  ("State the rule for integrating x^n.", "Integral x^n dx = x^(n+1)/(n+1) + c for n not equal to -1 — integration is the reverse of differentiation; always add the constant c."),
  ("Evaluate the integral of (6x^2 + 4x - 3) dx.", "2x^3 + 2x^2 - 3x + c."),
  ("Evaluate the definite integral of 2x dx between x = 1 and x = 3.", "[x^2] from 1 to 3 = 9 - 1 = 8 — no constant is needed for a definite integral, and it equals the area under y = 2x between those limits."),
  ("A particle moves so that s = t^3 - 3t (metres). Find its velocity and acceleration at t = 2 s.", "v = ds/dt = 3t^2 - 3, so v = 9 m/s at t = 2; a = dv/dt = 6t, so a = 12 m/s2."),
  ("A farmer has 40 m of fencing for a rectangular pen against a straight wall (no fencing needed on the wall). Show the maximum area is 200 m2.", "Let the width be x: length = 40 - 2x, A = x(40 - 2x) = 40x - 2x^2; dA/dx = 40 - 4x = 0 gives x = 10, A = 10 x 20 = 200 m2 (a maximum since d2A/dx2 = -4 < 0).")
 ]),
 'Probability & Statistics': (12, [
  ("Define probability and state its range.", "P(event) = number of favourable outcomes / total number of equally likely outcomes; it always lies between 0 (impossible) and 1 (certain)."),
  ("State the complement rule.", "P(not A) = 1 - P(A) — e.g. if P(rain) = 0.35, then P(no rain) = 0.65."),
  ("A fair die is thrown. Find P(even number) and P(prime number).", "Even: 2, 4, 6 so P = 3/6 = 1/2. Prime: 2, 3, 5 so P = 3/6 = 1/2 (note 2 is both even and prime — 1 is not prime)."),
  ("State the addition law for mutually exclusive events.", "If A and B cannot both happen, P(A or B) = P(A) + P(B) — e.g. rolling a 2 or a 5: 1/6 + 1/6 = 1/3."),
  ("State the multiplication law for independent events.", "If A and B do not affect each other, P(A and B) = P(A) x P(B) — e.g. two heads on two coins: 1/2 x 1/2 = 1/4."),
  ("A bag has 4 red and 6 blue balls. Two are drawn without replacement. Find P(both red).", "4/10 x 3/9 = 12/90 = 2/15 — after the first red ball the bag holds 3 reds and 9 balls in total."),
  ("Find the mean, median and mode of 3, 7, 3, 9, 8.", "Mean = 30/5 = 6; ordered 3, 3, 7, 8, 9 so median = 7; mode = 3 (occurs most)."),
  ("How do you find the mean from a frequency table?", "Mean = Σ(fx)/Σf — multiply each value by its frequency, add, and divide by the total frequency."),
  ("In a pie chart, a class of 15 out of 60 students is represented. What is its sector angle?", "15/60 x 360 = 90 deg — angles are (frequency/total) x 360."),
  ("What is the difference between experimental and theoretical probability?", "Theoretical is calculated from reasoning (P(head) = 1/2); experimental is found by actually performing trials (heads/total tosses) — it approaches the theoretical value as trials increase."),
  ("State the range of a data set and find it for 4, 9, 2, 11, 7.", "Range = highest - lowest = 11 - 2 = 9 — a quick measure of spread."),
  ("When is a tree diagram the best tool?", "For multi-stage experiments (two coins, two draws) — multiply along the branches for 'and', add between branch ends for 'or'.")
 ]),
 'Mensuration & Solid Geometry': (12, [
  ("Give the area formulas for a rectangle, triangle, trapezium and circle.", "Rectangle lw; triangle (1/2)bh; trapezium (1/2)(a + b)h; circle πr^2 (circumference 2πr)."),
  ("Find the area and perimeter of a sector of radius 7 cm, angle 90 deg (π = 22/7).", "Area = 90/360 x (22/7) x 49 = 38.5 cm2; arc = 90/360 x 2 x (22/7) x 7 = 11 cm, so perimeter = 11 + 7 + 7 = 25 cm."),
  ("Give the volume and total surface area of a cylinder.", "V = πr^2 h; curved surface = 2πrh; total surface (closed) = 2πr(r + h)."),
  ("A cylinder has radius 7 cm and height 10 cm. Find its volume (π = 22/7).", "V = (22/7) x 49 x 10 = 1540 cm3."),
  ("Give the volume and curved surface area of a cone.", "V = (1/3)πr^2 h; curved surface = πrl, where the slant height l satisfies l^2 = r^2 + h^2 (Pythagoras)."),
  ("A cone has radius 3 cm and height 4 cm. Find its slant height and curved surface area (π = 3.14).", "l = sqrt(9 + 16) = 5 cm; curved surface = 3.14 x 3 x 5 = 47.1 cm2."),
  ("Give the volume and surface area of a sphere.", "V = (4/3)πr^3; surface area = 4πr^2 — a hemisphere halves each and adds a circular base where needed."),
  ("Give the volume of a pyramid and a prism.", "Pyramid: (1/3) x base area x vertical height; prism: area of the uniform cross-section x length."),
  ("State Euler's formula for polyhedra.", "F + V - E = 2 (faces + vertices - edges): a cube gives 6 + 8 - 12 = 2."),
  ("Convert: (a) 3500 cm3 to litres, (b) 2.5 m3 to cm3.", "(a) 3.5 litres (1000 cm3 = 1 litre); (b) 2,500,000 cm3 (1 m3 = 10^6 cm3 — the length conversion 100 cm cubes)."),
  ("What is a net of a solid?", "A 2-D pattern that folds up to make the 3-D solid — a cube's net is six squares joined edge to edge; nets are the easiest way to compute total surface area."),
  ("A water tank is a cuboid 2 m by 1.5 m by 1 m. How many litres does it hold when full?", "Volume = 2 x 1.5 x 1 = 3 m3 = 3,000 litres (1 m3 = 1000 litres).")
 ]),
 'Matrices & Determinants': (12, [
  ("What is the order of a matrix, and what is the order of a 2 x 3 matrix?", "Order = rows x columns; a 2 x 3 matrix has 2 rows and 3 columns (6 elements)."),
  ("When can two matrices be added, and how?", "Only when they have the same order — add corresponding elements."),
  ("What is the condition for multiplying matrix A by matrix B?", "The number of columns of A must equal the number of rows of B; an (m x n) times (n x p) gives an (m x p) matrix."),
  ("Multiply [1 2; 3 4] by [2 0; 1 3].", "Row-by-column: [1(2)+2(1), 1(0)+2(3); 3(2)+4(1), 3(0)+4(3)] = [4 6; 10 12]."),
  ("Is matrix multiplication commutative?", "In general AB is NOT equal to BA — order matters (and sometimes one product does not even exist)."),
  ("Evaluate the determinant of [3 5; 2 4].", "ad - bc = 3(4) - 5(2) = 2."),
  ("What is a singular matrix?", "A matrix whose determinant is zero — it has no inverse, and the simultaneous equations it represents have no unique solution."),
  ("Write the identity matrix of order 2 and state its property.", "I = [1 0; 0 1]; any matrix times I is unchanged, just like multiplying by 1."),
  ("Find the inverse of [2 1; 5 3].", "Determinant = 6 - 5 = 1, so A^-1 = [3 -1; -5 2] — swap the leading diagonal, negate the other diagonal, divide by the determinant."),
  ("Solve x + y = 7 and 2x - y = 5 using matrices.", "A = [1 1; 2 -1], det = -3; the solution (x, y) = A^-1 b gives x = 4, y = 3."),
  ("What is the transpose of a matrix?", "Rows become columns: the transpose of [1 2 3; 4 5 6] is [1 4; 2 5; 3 6]."),
  ("Solve for x and y: [x + y; x - y] = [9; 3].", "Adding the rows: 2x = 12, x = 6; then y = 3 — equal matrices have equal corresponding elements.")
 ]),
 'Whole Numbers, Place Value & Estimation': (10, [
  ("In 4,738, what is the place value of 7, and what is its value?", "7 is in the hundreds place, so its value is 700 — place values run units, tens, hundreds, thousands from the right."),
  ("Write 2,405,032 in words.", "Two million, four hundred and five thousand and thirty-two."),
  ("Round 4,738 to the nearest (a) ten, (b) hundred, (c) thousand.", "(a) 4,740; (b) 4,700; (c) 5,000 — look at the digit just after the required place: 5 or more rounds up."),
  ("Estimate 48 x 21 by rounding each number to 1 significant figure.", "50 x 20 = 1,000 (the exact answer is 1,008) — estimation checks whether a calculator answer is sensible."),
  ("Convert XXVII and XLIX from Roman numerals.", "XXVII = 10 + 10 + 5 + 2 = 27; XLIX = (50 - 10) + (10 - 1) = 49 — a smaller letter before a larger one subtracts."),
  ("List the first five multiples of 7 and the factors of 24.", "Multiples: 7, 14, 21, 28, 35. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24."),
  ("Find the HCF and LCM of 12 and 18.", "HCF = 6 (largest number dividing both); LCM = 36 (smallest number both divide into); check: HCF x LCM = 12 x 18."),
  ("What are prime numbers? Express 60 as a product of primes.", "A prime has exactly two factors, 1 and itself. 60 = 2 x 2 x 3 x 5 = 2^2 x 3 x 5."),
  ("State the order of operations (BODMAS) and evaluate 3 + 4 x 2^2.", "Brackets, Orders (powers), Division, Multiplication, Addition, Subtraction: 3 + 4 x 4 = 3 + 16 = 19 — powers and multiplication come before addition."),
  ("State the tests for divisibility by 2, 3, 5 and 9.", "By 2: last digit even; by 3: digit-sum divisible by 3; by 5: ends in 0 or 5; by 9: digit-sum divisible by 9 — e.g. 4,518: digit-sum 18, so divisible by 3 and 9.")
 ]),
 'Fractions & Decimals': (10, [
  ("Name the three types of fractions with an example of each.", "Proper: top smaller than bottom (3/5); improper: top larger (7/4); mixed number: a whole plus a fraction (1 3/4)."),
  ("Write three fractions equivalent to 2/3.", "4/6, 6/9, 8/12 — multiply top and bottom by the same number; divide both by a common factor to simplify."),
  ("Reduce 48/60 to its lowest terms.", "Divide both by the HCF 12: 48/60 = 4/5."),
  ("Work out 2/3 + 1/4.", "LCM of 3 and 4 is 12: 8/12 + 3/12 = 11/12 — never add the denominators; make them equal first."),
  ("Work out 3/5 x 2/7 and 3/4 / 2/5.", "Multiply tops and bottoms: 6/35. Division: invert the second and multiply: 3/4 x 5/2 = 15/8."),
  ("Convert 3/8 to a decimal and 0.45 to a fraction.", "3 / 8 = 0.375; 0.45 = 45/100 = 9/20 — decimals come from division by 10, 100, 1000."),
  ("Convert 0.625 to a percentage and 35% to a fraction.", "0.625 x 100 = 62.5%; 35% = 35/100 = 7/20."),
  ("Find 2/5 of ₦2,500.", "2500 / 5 = 500, x 2 = ₦1,000 — divide by the bottom, multiply by the top ('of' means multiply)."),
  ("Arrange in ascending order: 3/4, 5/8, 2/3.", "Convert to 24ths: 18/24, 15/24, 16/24, so the order is 5/8, 2/3, 3/4."),
  ("A rope 5 1/2 m long is cut into pieces 1/4 m long. How many pieces?", "5 1/2 / (1/4) = 11/2 x 4 = 22 pieces.")
 ]),
 'Introduction to Algebra: Letters & Simple Equations': (10, [
  ("Why do we use letters in algebra?", "Letters stand for numbers we do not know yet (variables) or any number in a rule — they let us write general formulas and solve for unknowns."),
  ("What does 3x mean, and why is x3 not used?", "3x means 3 multiplied by x — the multiplication sign is left out in algebra to avoid confusion with the letter x; the number always comes first."),
  ("Evaluate 4a + 3b when a = 5 and b = 2.", "4(5) + 3(2) = 20 + 6 = 26 — substitute carefully and keep the implied multiplications."),
  ("Simplify 7x + 5y - 3x + 2y.", "Collect like terms: (7x - 3x) + (5y + 2y) = 4x + 7y — only terms with the same letter and power combine."),
  ("Translate into algebra: 'five more than twice a number n'.", "2n + 5 — 'twice' means multiply by 2, 'more than' means add."),
  ("Solve x + 9 = 15.", "Subtract 9 from both sides: x = 6 — whatever you do to one side you must do to the other."),
  ("Solve 5y = 35.", "Divide both sides by 5: y = 7."),
  ("Remove the brackets and simplify: 4(2x - 3) + 3x.", "8x - 12 + 3x = 11x - 12."),
  ("Ada is x years old. Write her age in 6 years and her age 4 years ago.", "In 6 years: x + 6; 4 years ago: x - 4 — word clues like 'in' add and 'ago' subtract."),
  ("Write a formula for the perimeter P of a rectangle of length l and width w, then find P when l = 8 and w = 5.", "P = 2(l + w) = 2(8 + 5) = 26 — formulas are substitution practice in disguise.")
 ]),
 'Angles & Plane Figures': (10, [
  ("Name the types of angles: less than 90, exactly 90, between 90 and 180, exactly 180, and between 180 and 360.", "Acute, right angle, obtuse, straight angle, and reflex respectively."),
  ("What do angles on a straight line and angles at a point add up to?", "Angles on a straight line sum to 180 deg; angles at a point sum to 360 deg."),
  ("What can you say about vertically opposite angles?", "They are equal — when two lines cross, the angles opposite each other at the vertex match."),
  ("What is the sum of angles in a triangle, and name the three triangle types by sides.", "180 deg. Equilateral (all sides equal, angles 60 each), isosceles (two equal sides and equal base angles), scalene (no equal sides)."),
  ("Find the missing angle of a triangle with angles 65 deg and 45 deg.", "180 - (65 + 45) = 70 deg."),
  ("State the interior and exterior angle facts for polygons.", "Interior angles sum to (n - 2) x 180 deg; exterior angles always sum to 360 deg — each exterior angle of a regular n-gon is 360/n."),
  ("Each exterior angle of a regular polygon is 40 deg. How many sides has it?", "360/40 = 9 sides (a nonagon) — and each interior angle is 180 - 40 = 140 deg."),
  ("When a transversal cuts parallel lines, name the three angle pairs.", "Alternate angles (Z-shape, equal), corresponding angles (F-shape, equal), and co-interior/interior angles on the same side (C-shape, sum to 180 deg)."),
  ("Give the properties that distinguish a square from a rhombus.", "Both have four equal sides, but a square has four right angles (and equal diagonals); a rhombus does not necessarily have right angles — every square is a rhombus, not vice versa."),
  ("Find the area of a triangle with base 12 cm and height 7 cm, and the perimeter of a square of side 5 cm.", "Area = (1/2) x 12 x 7 = 42 cm2; perimeter = 4 x 5 = 20 cm.")
 ]),
 'Ratio, Proportion & Percentages': (11, [
  ("Share ₦4,500 between Ada and Bola in the ratio 2 : 3.", "Total parts = 5; one part = ₦900; Ada = 2 x 900 = ₦1,800, Bola = 3 x 900 = ₦2,700."),
  ("Write two ratios equivalent to 4 : 6 and reduce it to its simplest form.", "8 : 12 and 2 : 3 are equivalent; simplest form is 2 : 3 (divide by the HCF 2) — order matters in a ratio."),
  ("If 5 notebooks cost ₦750, how much do 8 cost?", "Unitary method: one costs ₦150, so 8 cost ₦1,200."),
  ("Express 3/5 and 0.24 as percentages.", "3/5 = 60%; 0.24 = 24% — multiply fractions/decimals by 100 to get per cent ('per hundred')."),
  ("Find 15% of ₦6,000.", "15/100 x 6000 = ₦900."),
  ("In a class of 40, 30 passed. What percentage passed?", "30/40 x 100 = 75% — 'what percentage of' means divide then multiply by 100."),
  ("A price rises from ₦800 to ₦1,000. Find the percentage increase.", "Increase = ₦200; % increase = 200/800 x 100 = 25% — always divide by the ORIGINAL value."),
  ("A trader buys a bag for ₦5,000 and sells it for ₦6,000. Find the profit and the profit percentage.", "Profit = ₦1,000; profit % = 1000/5000 x 100 = 20% (profit is always measured on cost price)."),
  ("A shirt marked ₦2,400 is sold at 25% discount. Find the selling price.", "Discount = 25% of 2400 = ₦600; selling price = ₦1,800."),
  ("An article costing ₦1,600 attracts 7.5% VAT. Find the total price.", "VAT = 7.5/100 x 1600 = ₦120; total = ₦1,720."),
  ("A map scale is 1 : 50,000. Two towns are 4 cm apart on the map. Find the real distance.", "Real = 4 x 50,000 = 200,000 cm = 2 km (100,000 cm = 1 km).")
 ]),
 'Simple Equations & Directed Numbers': (10, [
  ("What are directed numbers?", "Positive and negative numbers shown on a number line — negatives lie to the left of zero, and every negative has an opposite positive of equal size."),
  ("Evaluate (a) -3 + 7, (b) -4 - 5, (c) -6 + 10.", "(a) 4; (b) -9 (move further left); (c) 4 — for unlike signs, subtract the smaller magnitude and keep the sign of the larger."),
  ("Evaluate (a) 5 - (-2), (b) (-3) x (-4), (c) 12 / (-3).", "(a) 7 — subtracting a negative adds; (b) 12 — like signs give a positive; (c) -4 — unlike signs give a negative."),
  ("State the rule of signs for multiplication and division.", "Same signs -> positive result (+ x + = +, - x - = +); different signs -> negative result (+ x - = -, - x + = -)."),
  ("The temperature at 6 a.m. was -4 degC and rose 9 degrees by noon. Find the noon temperature.", "-4 + 9 = 5 degC — moving right on the number line."),
  ("Solve 2x + 3 = 11.", "2x = 8, so x = 4 — undo the addition first, then the multiplication (reverse BODMAS)."),
  ("Solve 3(x - 2) = 12.", "x - 2 = 4, so x = 6 — divide both sides by 3 first, then add 2 (or expand: 3x - 6 = 12)."),
  ("Solve 5x - 3 = 2x + 9.", "3x = 12, so x = 4 — subtract 2x from both sides, then add 3."),
  ("Solve x/2 + 4 = 9.", "x/2 = 5, so x = 10 — subtract 4, then multiply by 2."),
  ("Check whether x = 3 satisfies 4x + 1 = 13.", "4(3) + 1 = 13 — the two sides are equal, so x = 3 is correct; always substitute your answer back to check.")
 ]),
 'Business Mathematics: Profit, Loss, Discount & Interest': (10, [
  ("Write the formulas for profit and loss.", "Profit = selling price - cost price (when SP > CP); loss = cost price - selling price (when CP > SP)."),
  ("A trader buys a chair for ₦8,000 and sells it for ₦10,000. Find the profit percentage.", "Profit = ₦2,000; profit % = 2000/8000 x 100 = 25% — profit and loss percentages are always on the COST price."),
  ("An article costing ₦5,000 is sold at a 10% loss. Find the selling price.", "Loss = ₦500, so SP = 5000 - 500 = ₦4,500 (or SP = 90% of CP)."),
  ("A shirt marked ₦3,000 has a 20% discount. Find the amount paid.", "Discount = ₦600; price paid = ₦2,400 — discount is a percentage of the MARKED price."),
  ("State the simple interest formula and find the interest on ₦20,000 for 3 years at 5% per annum.", "I = PRT/100 = (20000 x 5 x 3)/100 = ₦3,000 — P principal, R rate %, T time in years."),
  ("Find the total amount (principal + interest) on ₦15,000 for 2 years at 10% simple interest.", "I = ₦3,000, so A = ₦18,000."),
  ("₦10,000 is invested at 10% per annum compound interest for 2 years. Find the amount.", "A = P(1 + r)^2 = 10000 x 1.1 x 1.1 = ₦12,100 — compound interest earns interest on previous interest, so it beats simple interest (₦12,000)."),
  ("A television can be bought for ₦90,000 cash or on hire purchase: ₦30,000 deposit plus 12 monthly instalments of ₦6,000. How much more does hire purchase cost?", "HP total = 30,000 + 72,000 = ₦102,000, which is ₦12,000 more than cash — hire purchase is convenient but more expensive."),
  ("A salesgirl earns 5% commission on ₦120,000 of sales. How much does she earn?", "5/100 x 120,000 = ₦6,000 — commission is a percentage reward on sales value."),
  ("A bill for ₦25,000 is settled within the discount period at 4% cash discount. Find the amount paid.", "Discount = ₦1,000; amount paid = ₦24,000 — prompt payment earns the discount off the bill total.")
 ])
}

ins = 0
for title, (need, pairs) in CARDS.items():
    assert len(pairs) >= need, title
    m = re.findall(r"\n(\s*)title: '" + re.escape(title) + r"',", s)
    assert len(m) == 1, ('anchor', title, len(m))
    ind = m[0]
    pos = s.index("\n" + ind + "title: '" + title + "',")
    j = s.index('cards: [', pos)
    k = s.index('\n', j) + 1
    body = ''.join((ind + "  { q: '%s', a: '%s' },\n" % (esc(q), esc(a))) for q, a in pairs[:need])
    s = s[:k] + body + s[k:]
    ins += need

open(PATH, 'w', encoding='utf-8').write(s)
print('Mathematics: inserted', ins, 'cards')
