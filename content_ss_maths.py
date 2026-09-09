"""Author 10-question quizzes + flashcards for all SS Mathematics topics (13)."""
import re

CUR = '/home/user/index.html'
s = open(CUR).read()
SUBJECTS = ['Mathematics', 'Basic Science', 'English Language', 'Basic Technology', 'Physics', 'Chemistry', 'Biology']

def esc(t):
    return t.replace('\\', '\\\\').replace("'", "\\'")

def fill(subject, title, quiz=None, cards=None):
    global s
    a = s.index("  '%s': {" % subject)
    nxt = [s.index("  '%s': {" % o, a + 5) for o in SUBJECTS if s.find("  '%s': {" % o, a + 5) > 0]
    b = min(nxt) if nxt else s.index('const LEVEL_CATALOGUE')
    blk = s[a:b]
    t = blk.index("          title: '%s'," % esc(title))
    te = blk.index("\n        }", t)
    seg = blk[t:te]
    if quiz:
        assert seg.count("          quiz: []") == 1, 'quiz slot: ' + title
        lines = []
        for (q, opts, c, exp) in quiz:
            assert len(opts) == 4 and 0 <= c <= 3
            o = ', '.join("'%s'" % esc(x) for x in opts)
            lines.append("            { q: '%s', options: [%s], correct: %d,\n              exp: '%s' }" % (esc(q), o, c, esc(exp)))
        seg = seg.replace("          quiz: []", "          quiz: [\n" + ",\n".join(lines) + "\n          ],")
    if cards:
        lines = ["            { q: '%s', a: '%s' }" % (esc(q), esc(a)) for (q, a) in cards]
        if "          cards: []," in seg:
            assert seg.count("          cards: [],") == 1
            seg = seg.replace("          cards: [],", "          cards: [\n" + ",\n".join(lines) + "\n          ],")
        else:
            ca = seg.index("          cards: [")
            close = seg.index("\n          ],", ca)
            seg = seg[:close] + ",\n" + ",\n".join(lines) + seg[close:]
    s = s[:a] + blk[:t] + seg + blk[te:] + s[b:]

# ================= SS1 =================
fill('Mathematics', 'Number Bases & Modular Arithmetic', quiz=[
 ('Convert 1101\u2082 to base 10.', ['11', '13', '15', '12'], 1,
  '1x8 + 1x4 + 0x2 + 1x1 = 8 + 4 + 0 + 1 = 13.'),
 ('Convert 25 in base 10 to base 2.', ['11001\u2082', '10110\u2082', '11010\u2082', '10011\u2082'], 0,
  '25 = 16 + 8 + 1 = 1x16 + 1x8 + 0x4 + 0x2 + 1x1 = 11001 in base 2.'),
 ('Express 45 in base 10 in base 5.', ['140\u2085', '130\u2085', '401\u2085', '90\u2085'], 0,
  '45 = 1x25 + 4x5 + 0x1, so the base-5 form is 140.'),
 ('Calculate 38 mod 7.', ['3', '4', '5', '6'], 0,
  '38 = 5 x 7 + 3, so the remainder - 38 mod 7 - is 3.'),
 ('Add 1011\u2082 + 1101\u2082.', ['11000\u2082', '10100\u2082', '11100\u2082', '10000\u2082'], 0,
  '11 + 13 = 24 in base 10, and 24 = 11000 in base 2. Carrying works exactly as in base 10.'),
 ('If 32 in base x equals 17 in base 10, find x.', ['5', '6', '4', '3'], 0,
  '3x + 2 = 17, so 3x = 15 and x = 5. Check: 32 in base 5 = 3x5 + 2 = 17.'),
 ('What remainder does 2\u00b9\u2070 leave when divided by 3?', ['1', '0', '2', '3'], 0,
  '2\u00b9\u2070 = 1024, and 1024 = 341 x 3 + 1, so the remainder is 1.'),
 ('Which digits are used in base 8 (octal)?', ['0 to 7', '0 to 8', '1 to 8', '0 to 9'], 0,
  'A base-n system uses digits from 0 to n-1, so base 8 uses 0,1,2,3,4,5,6,7.'),
 ('Convert 0.11\u2082 to a fraction in base 10.', ['3/4', '1/2', '1/4', '2/3'], 0,
  '0.11\u2082 = 1/2 + 1/4 = 3/4. After the point the place values are halves, quarters, eighths...'),
 ('The time is 9 o\u2019clock. What time will it be 100 hours later, using a 12-hour clock?', ['1 o\u2019clock', '3 o\u2019clock', '5 o\u2019clock', '11 o\u2019clock'], 0,
  '100 mod 12 = 4, so the hand advances 4 hours: 9 + 4 = 13, which is 1 o\u2019clock.'),
], cards=[
 ('Why is base 2 (binary) so important?',
  'Computers and digital devices switch on and off - two states - so every number, letter and picture is stored as strings of 0s and 1s. Binary is the language of machines.'),
 ('What does a = b (mod n) mean?',
  'It means a and b leave the same remainder when divided by n. For example 17 = 5 (mod 12) because both leave remainder 5 when divided by 12.'),
])

fill('Mathematics', 'Indices, Logarithms & Surds', quiz=[
 ('Simplify x\u2075 x x\u00b3.', ['x\u2078', 'x\u00b9\u2075', 'x\u00b2', '2x\u2078'], 0,
  'When multiplying powers with the same base, add the indices: 5 + 3 = 8.'),
 ('Evaluate 8^(\u2154).', ['4', '16', '64', '2'], 0,
  'The denominator 3 means cube root, the numerator 2 means square: cube root of 8 is 2, and 2\u00b2 = 4.'),
 ('Evaluate log\u2081\u2080 1000.', ['3', '30', '100', '10'], 0,
  '10\u00b3 = 1000, so the log of 1000 to base 10 is 3.'),
 ('If log\u2082 x = 5, find x.', ['32', '25', '10', '7'], 0,
  'log\u2082 x = 5 means x = 2\u2075 = 32.'),
 ('log a + log b equals...', ['log(ab)', 'log(a + b)', 'log a x log b', 'log(a - b)'], 0,
  'The addition law of logarithms: adding logs multiplies their arguments, log a + log b = log(ab).'),
 ('Simplify \u221a50.', ['5\u221a2', '25\u221a2', '2\u221a5', '10\u221a5'], 0,
  '\u221a50 = \u221a(25 x 2) = \u221a25 x \u221a2 = 5\u221a2.'),
 ('Rationalise the denominator of 6/\u221a3.', ['2\u221a3', '3\u221a2', '6\u221a3', '2\u221a6'], 0,
  'Multiply top and bottom by \u221a3: 6\u221a3 / 3 = 2\u221a3.'),
 ('For any non-zero x, x\u2070 equals...', ['1', '0', 'x', 'undefined'], 0,
  'The zero-index law: any non-zero number raised to the power 0 equals 1.'),
 ('Given log\u2081\u2080 2 = 0.3010, find log\u2081\u2080 8.', ['0.9030', '2.4080', '0.3030', '1.2040'], 0,
  '8 = 2\u00b3, so log 8 = 3 log 2 = 3 x 0.3010 = 0.9030.'),
 ('Expand (\u221a5 + \u221a2)(\u221a5 - \u221a2).', ['3', '7', '\u221a3', '10'], 0,
  'Difference of two squares: (\u221a5)\u00b2 - (\u221a2)\u00b2 = 5 - 2 = 3.'),
], cards=[
 ('State three laws of indices.',
  'a\u1d50 x a\u207f = a\u1d50\u207a\u207f (add when multiplying); a\u1d50 / a\u207f = a\u1d50\u207b\u207f (subtract when dividing); (a\u1d50)\u207f = a\u1d50\u207f (multiply the powers). Also a\u207f\u207f = a\u207f\u207f\u1d57 and a\u2070 = 1.'),
 ('What is a surd, and how do you simplify one?',
  'A surd is a root that cannot be written exactly without the root sign, such as \u221a2. Simplify by taking out square factors: \u221a50 = \u221a(25x2) = 5\u221a2.'),
])

fill('Mathematics', 'Algebraic Expressions & Simple Equations', quiz=[
 ('Factorise x\u00b2 + 7x + 12.', ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x - 3)(x - 4)'], 0,
  'Find two numbers that multiply to 12 and add to 7: those are 3 and 4.'),
 ('Factorise 2x\u00b2 - 8 completely.', ['2(x + 2)(x - 2)', '(2x + 4)(x - 2)', '2(x - 4)\u00b2', '(2x - 2)(x + 4)'], 0,
  'Take out the common factor 2 first: 2(x\u00b2 - 4), then difference of two squares: 2(x + 2)(x - 2).'),
 ('Solve simultaneously: x + y = 10 and x - y = 4.', ['x = 7, y = 3', 'x = 3, y = 7', 'x = 6, y = 4', 'x = 8, y = 2'], 0,
  'Adding the equations cancels y: 2x = 14, x = 7; then y = 10 - 7 = 3.'),
 ('Factorise ax + ay + bx + by.', ['(a + b)(x + y)', '(a + x)(b + y)', 'ab + xy', '(a + y)(b + x)'], 0,
  'Group in pairs: a(x + y) + b(x + y), then take out the common bracket: (a + b)(x + y).'),
 ('Solve simultaneously: 3x - 2y = 7 and x + y = 4.', ['x = 3, y = 1', 'x = 1, y = 3', 'x = 2, y = 2', 'x = 4, y = 0'], 0,
  'From the second equation y = 4 - x. Substitute: 3x - 2(4 - x) = 7 gives 5x = 15, so x = 3 and y = 1.'),
 ('Factorise x\u00b2 - 9.', ['(x - 3)(x + 3)', '(x - 9)(x + 1)', '(x - 3)\u00b2', 'x(x - 9)'], 0,
  'This is a difference of two squares: x\u00b2 - 3\u00b2 = (x - 3)(x + 3).'),
 ('If (x + 2)(x - 5) = 0, what are the values of x?', ['-2 and 5', '2 and -5', '2 and 5', '-2 and -5'], 0,
  'A product is zero only when one factor is zero: x + 2 = 0 or x - 5 = 0, so x = -2 or x = 5.'),
 ('Expand (2x + 3)(x - 4).', ['2x\u00b2 - 5x - 12', '2x\u00b2 + 5x - 12', '2x\u00b2 - 5x + 12', '2x\u00b2 - 11x - 12'], 0,
  'Multiply every term: 2x\u00b2 - 8x + 3x - 12 = 2x\u00b2 - 5x - 12.'),
 ('Solve x\u00b2 - 5x + 6 = 0.', ['2 and 3', '-2 and -3', '1 and 6', '-1 and 6'], 0,
  '(x - 2)(x - 3) = 0, so x = 2 or x = 3. Check: both numbers multiply to 6 and add to 5.'),
 ('In the elimination method, what is the aim?',
  ['Make the coefficients of one variable equal, then add or subtract to remove it', 'Multiply both equations together', 'Divide one equation by the other', 'Square both equations'], 0,
  'Elimination removes one letter by adding or subtracting the equations, leaving a one-variable equation to solve.'),
], cards=[
 ('How do you factorise a quadratic of the form x\u00b2 + bx + c?',
  'Find two numbers whose product is c and whose sum is b, then write (x + first)(x + second). Example: x\u00b2 + 7x + 12 = (x + 3)(x + 4).'),
 ('What is the difference of two squares?',
  'a\u00b2 - b\u00b2 = (a - b)(a + b). Any expression that is one square minus another splits this way: x\u00b2 - 9 = (x - 3)(x + 3).'),
 ('Describe two methods for solving simultaneous equations.',
  'Substitution: make one letter the subject and substitute it into the other equation. Elimination: match coefficients of one letter, then add or subtract the equations to remove it.'),
])

fill('Mathematics', 'Sets, Venn Diagrams & Logic', quiz=[
 ('The formula for n(A \u222a B) is...', ['n(A) + n(B) - n(A \u2229 B)', 'n(A) + n(B) + n(A \u2229 B)', 'n(A) x n(B)', 'n(A) - n(B)'], 0,
  'Adding n(A) and n(B) counts the overlap twice, so the inclusion-exclusion formula subtracts n(A \u2229 B) once.'),
 ('If n(A) = 12, n(B) = 9 and n(A \u2229 B) = 4, find n(A \u222a B).', ['17', '21', '25', '8'], 0,
  'n(A \u222a B) = 12 + 9 - 4 = 17.'),
 ('In a class of 40, 25 play football, 20 play basketball and every pupil plays at least one game. How many play both?', ['5', '15', '10', '45'], 0,
  'n(F \u2229 B) = 25 + 20 - 40 = 5.'),
 ('A \u2229 B represents...', ['elements in both A and B', 'elements in A or B or both', 'elements in A only', 'elements in neither A nor B'], 0,
  'The intersection A \u2229 B is the overlap - everything common to both sets.'),
 ("A' (the complement of A) contains...", ['everything in the universal set that is not in A', 'everything in A', 'only the empty set', 'A and its overlap'], 0,
  "A' collects every element of \u03be that falls outside A, so n(A) + n(A') = n(\u03be)."),
 ('In a Venn diagram, the overlapping region of two circles represents...', ['the intersection', 'the union', 'the complement', 'the universal set'], 0,
  'Where the circles overlap sits everything that belongs to both sets: A \u2229 B.'),
 ('Of 30 pupils, 18 like yam, 15 like garri and 8 like both. How many like neither?', ['5', '7', '13', '3'], 0,
  'n(Y \u222a G) = 18 + 15 - 8 = 25, so 30 - 25 = 5 pupils like neither.'),
 ('The symbol \u03be stands for...', ['the universal set', 'the empty set', 'a subset', 'the complement'], 0,
  '\u03be is the universal set - everything under discussion, from which all other sets are drawn.'),
 ('If n(\u03be) = 50 and n(A) = 20, then n(A\u2032) is...', ['30', '70', '20', '1000'], 0,
  "The complement fills up the universal set: n(A') = 50 - 20 = 30."),
 ('A \u2282 B means...', ['every element of A is also in B', 'A and B are equal', 'A has more elements than B', 'A and B share no elements'], 0,
  'A \u2282 B says A is a subset of B: everything in A is inside B, though B may hold more.'),
], cards=[
 ('Define union, intersection and complement.',
  'Union A \u222a B: everything in A or B or both. Intersection A \u2229 B: only what is in both. Complement A\u2032: everything in the universal set \u03be that is NOT in A.'),
 ('Why do you subtract n(A \u2229 B) in the counting formula?',
  'When you add n(A) + n(B), pupils in the overlap are counted twice - once in each set - so n(A \u222a B) = n(A) + n(B) - n(A \u2229 B) removes the double count.'),
])

# ================= SS2 =================
fill('Mathematics', 'Quadratic Equations', quiz=[
 ('Solve x\u00b2 - 5x + 6 = 0.', ['2 and 3', '-2 and -3', '1 and 6', '-1 and -6'], 0,
  '(x - 2)(x - 3) = 0, so x = 2 or 3.'),
 ('Find the discriminant of 2x\u00b2 + 3x - 5 = 0.', ['49', '31', '-31', '19'], 0,
  '\u0394 = b\u00b2 - 4ac = 9 - 4(2)(-5) = 9 + 40 = 49.'),
 ('If the discriminant of a quadratic is negative, the equation has...', ['no real roots', 'two equal roots', 'two distinct real roots', 'one root only'], 0,
  '\u0394 \u2039 0 means the square root in the formula is impossible, so there are no real roots - the graph never touches the x-axis.'),
 ('The sum of the roots of x\u00b2 - 5x + 6 = 0 is...', ['5', '6', '-5', '1'], 0,
  'Sum of roots = -b/a = 5/1 = 5. (Check: 2 + 3 = 5.)'),
 ('The product of the roots of x\u00b2 - 5x + 6 = 0 is...', ['6', '5', '-6', '30'], 0,
  'Product of roots = c/a = 6/1 = 6. (Check: 2 x 3 = 6.)'),
 ('Solve x\u00b2 + 4x + 1 = 0 by the formula.', ['-2 \u00b1 \u221a3', '2 \u00b1 \u221a3', '-4 \u00b1 \u221a3', '-2 \u00b1 \u221a5'], 0,
  'x = (-4 \u00b1 \u221a(16-4))/2 = (-4 \u00b1 \u221a12)/2 = -2 \u00b1 \u221a3.'),
 ('Factorise x\u00b2 + 7x + 10.', ['(x + 2)(x + 5)', '(x + 1)(x + 10)', '(x - 2)(x - 5)', '(x + 2)(x - 5)'], 0,
  'Two numbers multiplying to 10 and adding to 7: that is 2 and 5.'),
 ('The sum of the roots of a quadratic is 3 and the product is 2. The equation is...', ['x\u00b2 - 3x + 2 = 0', 'x\u00b2 + 3x + 2 = 0', 'x\u00b2 - 3x - 2 = 0', 'x\u00b2 - 2x + 3 = 0'], 0,
  'The equation is x\u00b2 - (sum)x + (product) = 0, giving x\u00b2 - 3x + 2 = 0.'),
 ('Write x\u00b2 + 6x in completed-square form.', ['(x + 3)\u00b2 - 9', '(x + 3)\u00b2 + 9', '(x - 3)\u00b2 - 9', '(x + 6)\u00b2 - 36'], 0,
  'Halve 6 to get 3: (x + 3)\u00b2 = x\u00b2 + 6x + 9, so subtract 9 to restore x\u00b2 + 6x.'),
 ('A quadratic equation can have at most how many real roots?', ['2', '1', '3', '4'], 0,
  'The highest power is 2, so there are at most two real roots - two equal roots when \u0394 = 0.'),
], cards=[
 ('Name the three ways to solve a quadratic equation.',
  'Factorisation, completing the square, and the quadratic formula x = (-b \u00b1 \u221a(b\u00b2 - 4ac)) / 2a. Use factorising when it is quick; the formula always works.'),
 ('State the sum and product of roots relationships.',
  'For ax\u00b2 + bx + c = 0 with roots \u03b1 and \u03b2: \u03b1 + \u03b2 = -b/a and \u03b1\u03b2 = c/a. Handy for building an equation from its roots: x\u00b2 - (sum)x + (product) = 0.'),
])

fill('Mathematics', 'Sequences & Series (A.P. and G.P.)', quiz=[
 ('Find the 10th term of the A.P. 3, 7, 11, ...', ['39', '43', '40', '36'], 0,
  'a = 3, d = 4. U\u2081\u2080 = a + 9d = 3 + 36 = 39.'),
 ('Find the sum of the first 10 terms of an A.P. with a = 2 and d = 3.', ['155', '150', '145', '160'], 0,
  'S\u2081\u2080 = (10/2)(2x2 + 9x3) = 5(4 + 27) = 5 x 31 = 155.'),
 ('What is the common ratio of the G.P. 2, 6, 18, ...?', ['3', '4', '2', '12'], 0,
  'r = 6/2 = 18/6 = 3. In a G.P. each term is multiplied by the same ratio.'),
 ('Find the 5th term of a G.P. with first term 3 and common ratio 2.', ['48', '96', '24', '32'], 0,
  'U\u2085 = ar\u2074 = 3 x 2\u2074 = 3 x 16 = 48.'),
 ('Find the sum to infinity of the G.P. 8, 4, 2, ...', ['16', '12', '4', '24'], 0,
  'a = 8, r = \u00bd. S\u221e = a/(1 - r) = 8/\u00bd = 16.'),
 ('In an A.P., the 3rd term is 10 and the 7th term is 22. Find the common difference.', ['3', '4', '2', '6'], 0,
  'Four steps separate the terms: 4d = 22 - 10 = 12, so d = 3.'),
 ('Which formula uses the LAST term of an A.P.?', ['S\u2099 = (n/2)(a + l)', 'S\u2099 = (n/2)(2a + (n-1)d)', 'S\u221e = a/(1 - r)', 'U\u2099 = ar\u207f\u207b\u00b9'], 0,
  'When the last term l is known, S\u2099 = (n/2)(a + l) is the quickest form - it is how Gauss summed 1 to 100.'),
 ('The sum of the first n terms of a G.P. (r greater than 1) is...', ['a(r\u207f - 1)/(r - 1)', 'a(1 - r\u207f)/(1 - r) only when r \u203a 1', '(n/2)(a + l)', 'a + nd'], 0,
  'For r \u203a 1 the sum grows: S\u2099 = a(r\u207f - 1)/(r - 1). The mirror form a(1 - r\u207f)/(1 - r) suits r \u2039 1.'),
 ('Which of these sequences is a G.P.?', ['2, 4, 8, 16', '2, 4, 6, 8', '1, 4, 9, 16', '10, 8, 6, 4'], 0,
  '2, 4, 8, 16 has a constant ratio of 2. The others add or square - not a constant ratio.'),
 ('A G.P. has a sum to infinity only when...', ['|r| is less than 1', 'r is greater than 1', 'r equals 1', 'a is negative'], 0,
  'Only when |r| \u2039 1 do the terms shrink towards zero and the sum settle at a/(1 - r).'),
], cards=[
 ('Give the nth term and sum formulas for a G.P.',
  'nth term: U\u2099 = ar\u207f\u207b\u00b9. Sum of n terms: S\u2099 = a(r\u207f - 1)/(r - 1) for r \u203e 1. Sum to infinity (|r| \u2039 1): S\u221e = a/(1 - r).'),
 ('When does a series have a sum to infinity?',
  'Only a G.P. whose common ratio satisfies |r| \u2039 1, because the terms die away and the running total settles at S\u221e = a/(1 - r). An A.P. has no sum to infinity.'),
])

fill('Mathematics', 'Trigonometry & Angle of Elevation', quiz=[
 ('sin 30\u00b0 equals...', ['1/2', '\u221a3/2', '1', '\u221a3'], 0,
  'From the standard ratios: sin 30\u00b0 = 1/2. Worth memorising with sin 45\u00b0 = \u221a2/2 and sin 60\u00b0 = \u221a3/2.'),
 ('tan 45\u00b0 equals...', ['1', '0', '\u221a3', '1/2'], 0,
  'At 45\u00b0 opposite and adjacent are equal, so tan 45\u00b0 = 1.'),
 ('cos 60\u00b0 equals...', ['1/2', '\u221a3/2', '1', '\u221a2/2'], 0,
  'cos 60\u00b0 = 1/2 - the cosine ratios run backwards to the sine ratios of 30\u00b0 and 60\u00b0.'),
 ('A 10 m ladder leans at 60\u00b0 to horizontal ground. How high up the wall does it reach? (sin 60\u00b0 = 0.866)', ['8.7 m', '5.0 m', '5.8 m', '10 m'], 0,
  'Height = 10 sin 60\u00b0 = 10 x 0.866 = 8.66 m, about 8.7 m.'),
 ('The sine rule is used when...', ['the triangle is not right-angled', 'the triangle is right-angled only', 'the triangle is equilateral only', 'angles are unknown but sides equal'], 0,
  'SOH CAH TOA needs a right angle; for any other triangle you use the sine or cosine rule.'),
 ('The cosine rule states a\u00b2 = ...', ['b\u00b2 + c\u00b2 - 2bc cos A', 'b\u00b2 + c\u00b2 + 2bc cos A', 'b\u00b2 - c\u00b2 - 2bc cos A', '2bc cos A - b\u00b2 - c\u00b2'], 0,
  'a\u00b2 = b\u00b2 + c\u00b2 - 2bc cos A - like Pythagoras with a correction term for the angle A.'),
 ('An angle of elevation is measured...', ['upwards from the horizontal', 'downwards from the horizontal', 'from the vertical', 'clockwise from north'], 0,
  'Stand at the observer: look straight ahead (horizontal), then tilt up to the object. That tilt is the angle of elevation.'),
 ('In a right-angled triangle, the side opposite the right angle is the...', ['hypotenuse', 'adjacent', 'opposite', 'perpendicular'], 0,
  'The hypotenuse is always the longest side, directly opposite the right angle.'),
 ('If sin \u03b8 = 3/5, what is cos \u03b8?', ['4/5', '3/4', '5/4', '5/3'], 0,
  'The sides form a 3-4-5 triangle, so the adjacent side is 4 and cos \u03b8 = 4/5.'),
 ('The angle of depression from a tower top to a car equals the angle of elevation from the car to the tower because...', ['they are alternate angles between parallel horizontal lines', 'they are vertically opposite angles', 'both are right angles', 'they are complementary'], 0,
  'The two horizontal lines are parallel, so the depression and elevation angles are equal alternate angles.'),
], cards=[
 ('State the sine rule and when to use it.',
  'a/sin A = b/sin B = c/sin C. Use it in a non-right-angled triangle when you know either two angles and one side, or two sides and an angle opposite one of them.'),
 ('Explain angle of elevation and angle of depression.',
  'Both are measured from the horizontal: elevation tilts UP to an object above eye level; depression tilts DOWN to an object below. They are always equal for the same pair of points (alternate angles).'),
])

fill('Mathematics', 'Coordinate Geometry', quiz=[
 ('Find the gradient of the line through (1, 2) and (3, 8).', ['3', '1/3', '6', '2'], 0,
  'Gradient = (8 - 2)/(3 - 1) = 6/2 = 3.'),
 ('What is the gradient of y = 4x - 7?', ['4', '-7', '-4', '7'], 0,
  'In y = mx + c the coefficient of x is the gradient, so m = 4.'),
 ('Where does the line y = 3x + 5 cross the y-axis?', ['5', '3', '-5', '(0, 3)'], 0,
  'The constant c in y = mx + c is the y-intercept: the line crosses at (0, 5).'),
 ('A line parallel to y = 2x + 1 must have gradient...', ['2', '-2', '1/2', '-1/2'], 0,
  'Parallel lines share the same gradient: m = 2.'),
 ('For perpendicular lines, the product of their gradients is...', ['-1', '1', '0', 'undefined'], 0,
  'If one gradient is m, the perpendicular gradient is -1/m, so m x (-1/m) = -1.'),
 ('Find the midpoint of (2, 3) and (6, 7).', ['(4, 5)', '(8, 10)', '(3, 4)', '(4, 4)'], 0,
  'Midpoint = average of each coordinate: ((2+6)/2, (3+7)/2) = (4, 5).'),
 ('Find the distance between (0, 0) and (3, 4).', ['5', '7', '12', '25'], 0,
  'Pythagoras: \u221a(3\u00b2 + 4\u00b2) = \u221a25 = 5 - the classic 3-4-5 triangle.'),
 ('Find the equation of the line with gradient 3 passing through (1, 2).', ['y = 3x - 1', 'y = 3x + 1', 'y = 3x - 2', 'y = x + 3'], 0,
  'y - 2 = 3(x - 1), so y = 3x - 3 + 2 = 3x - 1.'),
 ('The gradient of a horizontal line is...', ['0', '1', 'undefined', '-1'], 0,
  'No rise at all, so gradient 0. (A vertical line has undefined gradient.)'),
 ('y - y\u2081 = m(x - x\u2081) is known as...', ['the point-gradient form', 'the intercept form', 'the two-point form only', 'the normal form'], 0,
  'Given one point (x\u2081, y\u2081) and gradient m, plug straight into y - y\u2081 = m(x - x\u2081).'),
], cards=[
 ('State the gradient formula and the forms of a straight line.',
  'Gradient m = (y\u2082 - y\u2081)/(x\u2082 - x\u2081). Forms: y = mx + c (gradient-intercept), y - y\u2081 = m(x - x\u2081) (point-gradient), and ax + by + c = 0 (general form).'),
 ('Give the midpoint and distance formulas.',
  'Midpoint of (x\u2081, y\u2081) and (x\u2082, y\u2082) is ((x\u2081+x\u2082)/2, (y\u2081+y\u2082)/2). Distance is \u221a((x\u2082-x\u2081)\u00b2 + (y\u2082-y\u2081)\u00b2) - Pythagoras in coordinates.'),
 ('What are the conditions for parallel and perpendicular lines?',
  'Parallel lines have equal gradients (m\u2081 = m\u2082). Perpendicular lines have gradients whose product is -1 (m\u2081 x m\u2082 = -1) - one is the negative reciprocal of the other.'),
])

fill('Mathematics', 'Variation: Direct, Inverse, Joint & Partial', quiz=[
 ('If y varies directly as x, the equation connecting them is...', ['y = kx', 'y = k/x', 'y = kx\u00b2', 'y = k + x'], 0,
  'Direct variation means y grows in proportion to x: y = kx, where k is the constant.'),
 ('y varies directly as x. If y = 12 when x = 4, find y when x = 7.', ['21', '28', '18', '24'], 0,
  'k = 12/4 = 3, so y = 3x and y = 3 x 7 = 21.'),
 ('If y varies inversely as x, the equation is...', ['y = k/x', 'y = kx', 'y = kx\u00b2', 'y = x/k'], 0,
  'Inverse variation: as one doubles the other halves - y = k/x, or equivalently xy = k.'),
 ('y varies inversely as x. If y = 10 when x = 2, find y when x = 5.', ['4', '25', '8', '50'], 0,
  'k = xy = 20, so y = 20/5 = 4.'),
 ('If z varies jointly as x and y, the equation is...', ['z = kxy', 'z = kx/y', 'z = k(x + y)', 'z = k/x y'], 0,
  'Joint variation means z is proportional to the product: z = kxy.'),
 ('z varies jointly as x and y. If z = 12 when x = 2 and y = 3, find z when x = 4 and y = 5.', ['40', '20', '24', '30'], 0,
  'k = 12/(2x3) = 2, so z = 2xy = 2 x 4 x 5 = 40.'),
 ('Partial variation has the general form...', ['y = a + bx', 'y = kx', 'y = k/x', 'y = kxy'], 0,
  'y is partly constant (a) and partly proportional to x (bx) - the graph is a straight line not through the origin.'),
 ('y is partly constant and partly varies directly as x. If y = 7 when x = 2 and y = 11 when x = 4, find y when x = 6.', ['15', '13', '17', '14'], 0,
  'Two equations: a + 2b = 7 and a + 4b = 11, so b = 2 and a = 3. Then y = 3 + 2(6) = 15.'),
 ('The constant k in a variation equation is called the...', ['constant of proportionality', 'gradient only', 'intercept', 'variable'], 0,
  'k is the constant of proportionality - find it first from the given values, then reuse it.'),
 ('The graph of direct variation is...', ['a straight line through the origin', 'a curve', 'a horizontal line', 'a straight line with intercept'], 0,
  'y = kx has no constant term, so it passes through (0, 0) with gradient k.'),
], cards=[
 ('State the four types of variation with their equations.',
  'Direct: y = kx. Inverse: y = k/x. Joint: z = kxy (or with more variables). Partial: y = a + bx - part constant, part proportional.'),
 ('How do you solve any variation problem?',
  'Step 1: write the equation with k (e.g. y = kx). Step 2: substitute the given pair of values and solve for k. Step 3: rewrite the full equation and substitute the new value to find the answer.'),
 ('What is partial variation?',
  'A quantity that is partly a fixed constant and partly proportional to a variable: y = a + bx. Its graph is a straight line crossing the y-axis at a, not through the origin.'),
])

# ================= SS3 =================
fill('Mathematics', 'Calculus: Differentiation & Integration', quiz=[
 ('Differentiate y = x\u2075.', ['5x\u2074', 'x\u2074', '5x\u2076', '4x\u2075'], 0,
  'Power rule: multiply by the power, then reduce the power by 1 - 5x\u2074.'),
 ('Find the gradient of y = x\u00b2 at the point where x = 3.', ['6', '9', '3', '12'], 0,
  'dy/dx = 2x, and at x = 3 the gradient is 2 x 3 = 6.'),
 ('At a turning point of a curve, dy/dx equals...', ['0', '1', 'the maximum value', 'infinity'], 0,
  'The tangent is horizontal at a turning point, so the gradient - dy/dx - is zero.'),
 ('Find the x-coordinate of the maximum point of y = -x\u00b2 + 4x.', ['2', '4', '-2', '0'], 0,
  'dy/dx = -2x + 4 = 0 gives x = 2. The negative x\u00b2 confirms it is a maximum.'),
 ('Integrate: \u222b2x dx = ...', ['x\u00b2 + C', '2x\u00b2 + C', 'x + C', '2 + C'], 0,
  'Raise the power by 1 and divide by the new power: 2x\u00b2/2 = x\u00b2, plus the constant C.'),
 ('Integrate: \u222b(3x\u00b2 + 1) dx = ...', ['x\u00b3 + x + C', '3x\u00b3 + x + C', '6x + C', 'x\u00b3 + 1 + C'], 0,
  'Integrate term by term: 3x\u00b3/3 + x = x\u00b3 + x, plus C.'),
 ('The derivative of a function measures its...', ['rate of change (gradient)', 'area', 'maximum value', 'roots'], 0,
  'dy/dx tells you how fast y changes as x changes - the gradient of the curve at any point.'),
 ('Differentiate y = 7.', ['0', '7', '1', '7x'], 0,
  'A constant never changes, so its rate of change - the derivative - is 0.'),
 ('Integrate: \u222bx\u2074 dx = ...', ['x\u2075/5 + C', '5x\u2075 + C', '4x\u00b3 + C', 'x\u2075 + C'], 0,
  'Add 1 to the power and divide by it: x\u2075/5, plus the constant of integration C.'),
 ('Find dy/dx for y = 6x.', ['6', 'x', '3x\u00b2', '6x'], 0,
  'Power rule on 6x\u00b9: 6 x 1 x x\u2070 = 6. A straight line has constant gradient 6.'),
], cards=[
 ('State the power rule for differentiation.',
  'If y = ax\u207f, then dy/dx = anx\u207f\u207b\u00b9: multiply by the power and subtract 1 from it. Differentiate polynomials term by term, and constants become 0.'),
 ('How do you find maximum and minimum points?',
  'Set dy/dx = 0 and solve for x. Then check the nature: if the second derivative is negative it is a maximum; if positive, a minimum.'),
 ('What does integration do?',
  'Integration reverses differentiation - it recovers y from dy/dx. For ax\u207f, integrate to ax\u207f\u207a\u00b9/(n+1) and always add the constant C, since many curves share the same gradient.'),
])

fill('Mathematics', 'Probability & Statistics', quiz=[
 ('A fair die is thrown once. What is the probability of obtaining a 5?', ['1/6', '1/5', '5/6', '1/36'], 0,
  'One favourable outcome out of six equally likely faces: P = 1/6.'),
 ('A coin is tossed once. What is the probability of NOT getting a head?', ['1/2', '1', '0', '1/4'], 0,
  'P(not head) = 1 - P(head) = 1 - 1/2 = 1/2. Probabilities of an event and its complement always add to 1.'),
 ('Two fair dice are thrown. What is the probability that the sum is 7?', ['1/6', '1/12', '7/36', '1/36'], 0,
  'Six of the 36 equally likely pairs sum to 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1): 6/36 = 1/6.'),
 ('Probability values always lie between...', ['0 and 1', '-1 and 1', '0 and 100 only', '1 and 10'], 0,
  '0 means impossible, 1 means certain; every probability lies in that range. Percentages are just these scaled by 100.'),
 ('Find the mean of 2, 4, 6, 8, 10.', ['6', '5', '7', '30'], 0,
  'Sum = 30, count = 5, so mean = 30/5 = 6.'),
 ('Find the median of 3, 7, 2, 9, 4.', ['4', '5', '7', '3'], 0,
  'Order first: 2, 3, 4, 7, 9. The middle value is 4. Never take the median of unordered data.'),
 ('Find the mode of 2, 3, 3, 5, 7.', ['3', '4', '5', '2'], 0,
  'The mode is the value appearing most often - 3 appears twice.'),
 ('Find the range of 4, 9, 2, 7.', ['7', '9', '2', '22'], 0,
  'Range = highest - lowest = 9 - 2 = 7. It measures the spread of the data.'),
 ('For mutually exclusive events, P(A or B) equals...', ['P(A) + P(B)', 'P(A) x P(B)', 'P(A) - P(B)', '1 - P(A)P(B)'], 0,
  'Events that cannot happen together simply add: P(A or B) = P(A) + P(B).'),
 ('The probability of a certain event is...', ['1', '0', '1/2', 'undefined'], 0,
  'Certainty is 1 and impossibility is 0 - the two ends of the probability scale.'),
], cards=[
 ('State the addition and multiplication rules of probability.',
  'Mutually exclusive events (either/or): P(A or B) = P(A) + P(B). Independent events (both, one after the other): P(A and B) = P(A) x P(B).'),
 ('Define mean, median, mode and range.',
  'Mean: sum of values divided by how many there are. Median: the middle value when ordered. Mode: the most frequent value. Range: highest minus lowest - a quick measure of spread.'),
])

fill('Mathematics', 'Mensuration & Solid Geometry', quiz=[
 ('Find the area of a circle of radius 7 cm. (Take \u03c0 = 22/7)', ['154 cm\u00b2', '44 cm\u00b2', '49 cm\u00b2', '22 cm\u00b2'], 0,
  'A = \u03c0r\u00b2 = (22/7) x 49 = 154 cm\u00b2.'),
 ('Find the circumference of a circle of radius 7 cm. (\u03c0 = 22/7)', ['44 cm', '154 cm', '22 cm', '88 cm'], 0,
  'C = 2\u03c0r = 2 x (22/7) x 7 = 44 cm.'),
 ('Find the volume of a cylinder of radius 7 cm and height 10 cm. (\u03c0 = 22/7)', ['1540 cm\u00b3', '154 cm\u00b3', '440 cm\u00b3', '770 cm\u00b3'], 0,
  'V = \u03c0r\u00b2h = 154 x 10 = 1540 cm\u00b3 - the base area stacked up 10 times.'),
 ('Find the volume of a cuboid 4 cm by 3 cm by 2 cm.', ['24 cm\u00b3', '14 cm\u00b3', '12 cm\u00b3', '20 cm\u00b3'], 0,
  'V = length x breadth x height = 4 x 3 x 2 = 24 cm\u00b3.'),
 ('Find the total surface area of a cube of side 3 cm.', ['54 cm\u00b2', '27 cm\u00b2', '36 cm\u00b2', '18 cm\u00b2'], 0,
  'Six identical faces: 6 x 3\u00b2 = 6 x 9 = 54 cm\u00b2.'),
 ('The volume of a sphere is given by...', ['(4/3)\u03c0r\u00b3', '(2/3)\u03c0r\u00b3', '4\u03c0r\u00b2', '\u03c0r\u00b2h'], 0,
  'V = (4/3)\u03c0r\u00b3. (4\u03c0r\u00b2 is the SURFACE area of a sphere - do not mix them up.)'),
 ('The total surface area of a closed cylinder is...', ['2\u03c0r\u00b2 + 2\u03c0rh', '\u03c0r\u00b2h', '2\u03c0rh only', '\u03c0r\u00b2 + \u03c0rh'], 0,
  'Two circular ends (2\u03c0r\u00b2) plus the curved wall (2\u03c0rh) - like a label wrapped round a tin plus its two lids.'),
 ('The volume of a pyramid is...', ['one-third x base area x height', 'base area x height', 'half x base area x height', 'two-thirds x base area x height'], 0,
  'V = \u2153 Ah - a pyramid fills exactly one-third of the prism standing on the same base.'),
 ('A cone and a cylinder have the same base radius and height. The volume of the cone is...', ['one-third of the cylinder', 'equal to the cylinder', 'half the cylinder', 'twice the cylinder'], 0,
  'Cone = \u2153\u03c0r\u00b2h while cylinder = \u03c0r\u00b2h, so the cone holds exactly one-third as much.'),
 ('Find the area of a sector of angle 90\u00b0 in a circle of radius 7 cm. (\u03c0 = 22/7)', ['38.5 cm\u00b2', '154 cm\u00b2', '77 cm\u00b2', '19.25 cm\u00b2'], 0,
  'A 90\u00b0 sector is a quarter of the circle: 154/4 = 38.5 cm\u00b2.'),
], cards=[
 ('Give the volume formulas for a cylinder, cone and sphere.',
  'Cylinder: V = \u03c0r\u00b2h. Cone: V = \u2153\u03c0r\u00b2h (one-third of the matching cylinder). Sphere: V = (4/3)\u03c0r\u00b3, with surface area 4\u03c0r\u00b2.'),
 ('Give the surface area formulas for a cylinder and a cube.',
  'Closed cylinder: 2\u03c0r\u00b2 + 2\u03c0rh (two ends plus the curved wall). Cube of side a: 6a\u00b2 - six identical square faces.'),
])

fill('Mathematics', 'Matrices & Determinants', quiz=[
 ('Find the determinant of the matrix with rows (3, 2) and (1, 4).', ['10', '14', '11', '5'], 0,
  'ad - bc = (3)(4) - (2)(1) = 12 - 2 = 10.'),
 ('How many elements does a 2 x 2 matrix have?', ['4', '2', '8', '6'], 0,
  'Rows x columns = 2 x 2 = 4 elements.'),
 ('To add two matrices, you...', ['add the corresponding elements', 'multiply the corresponding elements', 'multiply the diagonals', 'add the determinants'], 0,
  'Addition is element by element - and both matrices must have the same order.'),
 ('Multiply the matrix with rows (1, 2) and (3, 4) by the scalar 2.', ['rows (2, 4) and (6, 8)', 'rows (2, 2) and (6, 6)', 'rows (3, 4) and (5, 6)', 'rows (2, 8) and (3, 4)'], 0,
  'Scalar multiplication multiplies EVERY element by the number: 2 x each of 1, 2, 3, 4.'),
 ('The identity matrix of order 2 is...', ['rows (1, 0) and (0, 1)', 'rows (1, 1) and (1, 1)', 'rows (0, 1) and (1, 0)', 'rows (0, 0) and (0, 0)'], 0,
  '1s down the leading diagonal and 0s elsewhere - multiplying by it changes nothing.'),
 ('The inverse of the matrix (a, b; c, d) is...', ['1/det x (d, -b; -c, a)', '1/det x (a, -b; -c, d)', '(d, b; c, a)', '1/det x (-a, b; c, -d)'], 0,
  'Swap the leading diagonal, change the signs of the other pair, and divide by the determinant.'),
 ('A matrix whose determinant is 0 is called...', ['singular, and has no inverse', 'identity', 'rectangular', 'symmetric'], 0,
  'det = 0 makes 1/det impossible, so a singular matrix has no inverse.'),
 ('Multiply the matrix with rows (2, 1) and (3, 4) by the column (1; 2).', ['column (4; 11)', 'column (3; 6)', 'column (4; 6)', 'column (2; 8)'], 0,
  'Row times column: (2x1 + 1x2; 3x1 + 4x2) = (4; 11).'),
 ('A 2 x 2 matrix multiplied by a 2 x 1 column gives a matrix of order...', ['2 x 1', '2 x 2', '1 x 2', '4 x 4'], 0,
  'The inner numbers (2 and 2) match, so the result takes the outer numbers: 2 x 1.'),
 ('Find the inverse of the matrix with rows (2, 0) and (0, 2).', ['rows (\u00bd, 0) and (0, \u00bd)', 'rows (2, 0) and (0, 2)', 'rows (-2, 0) and (0, -2)', 'rows (0, 2) and (2, 0)'], 0,
  'det = 4; swap and negate: (2, 0; 0, 2)/4 = (\u00bd, 0; 0, \u00bd). Check: the product gives the identity.'),
], cards=[
 ('How do you find the determinant of a 2 x 2 matrix?',
  'For rows (a, b) and (c, d), the determinant is ad - bc: multiply the leading diagonal, then subtract the product of the other diagonal.'),
 ('Give the formula for the inverse of a 2 x 2 matrix.',
  'Swap a and d, change the signs of b and c, then divide by the determinant: A\u207b\u00b9 = (1/(ad - bc)) x (d, -b; -c, a). It exists only when the determinant is not zero.'),
 ('What is a singular matrix?',
  'A matrix whose determinant is 0. Since the inverse formula divides by the determinant, a singular matrix has no inverse - its equations do not have a unique solution.'),
])

open(CUR, 'w').write(s)
print('maths done; chars:', len(s))
