# deep_maths1a.py — Deep-lesson batch 5a: Mathematics JSS1 (2 of 5 topics). RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT_A = '''
            <h3>1. The number families you must know</h3>
            <p>Mathematics begins with counting, but not all numbers belong to the same family. In JSS1 you must be able to name the families and sort any number into the right one.</p>
            <ul>
              <li><b>Counting (natural) numbers</b> — 1, 2, 3, 4, ... the numbers you use for counting objects.</li>
              <li><b>Whole numbers</b> — the counting numbers PLUS zero: 0, 1, 2, 3, ...</li>
              <li><b>Integers</b> — whole numbers PLUS their negatives: ..., -3, -2, -1, 0, 1, 2, 3, ...</li>
              <li><b>Even numbers</b> — divisible by 2 exactly (2, 4, 6, 8, ...); <b>odd numbers</b> — not divisible by 2 (1, 3, 5, 7, ...). Zero is even.</li>
            </ul>
            <div class="worked"><b>Think about it:</b> a temperature of 5 degC above zero and a temperature of 5 degC below zero are both '5 degrees', but they are opposite integers: +5 and -5. Integers exist because life keeps giving us opposite pairs — profit and loss, above and below sea level, deposit and withdrawal.</div>

            <h3>2. Place value — the power of position</h3>
            <p>Our number system is a <b>base-10 (denary)</b> system: the VALUE of a digit depends on its POSITION. Each position is worth ten times the position to its right.</p>
            <p>Take <b>3,254,618</b>. Reading the digits from the left: 3 millions, 2 hundred-thousands, 5 ten-thousands, 4 thousands, 6 hundreds, 1 ten, 8 ones (units).</p>
            <ul>
              <li><b>Face value</b> of a digit is the digit itself (the 5 in 3,254,618 has face value 5).</li>
              <li><b>Place value</b> is what the digit is worth in that position (the 5 is in the ten-thousands place, so its place value is 50,000).</li>
              <li>Group digits in THREES from the right with commas: 3,254,618 — never from the left.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> in 7,040,206 — the 7 is worth 7,000,000; the 4 is worth 40,000; the 2 is worth 200; the 6 is worth 6. Notice the zeros: they hold places empty so every other digit sits in the right seat.</div>
            <div class="formula">EXAM LINE: 'What is the value of the digit 4 in ...?' means PLACE VALUE, not face value. If the question says 'difference between the place value and face value of 4', for 4 in the thousands place: 4,000 - 4 = 3,996.</div>

            <h3>3. Writing numbers in words and in figures</h3>
            <ul>
              <li><b>Figures to words:</b> 45,082 → 'forty-five thousand and eighty-two'. Read each group (thousands group, units group) and join with 'thousand', 'million'.</li>
              <li><b>Words to figures:</b> 'two million, three hundred and six thousand, five hundred and forty' → 2,306,540. Write the millions group, then the thousands group, then the units group — insert zeros where a group is thin.</li>
              <li>Nigerian context: 'one hundred and fifty million naira' → ₦150,000,000; Lagos State's population is above 15,000,000 people.</li>
            </ul>
            <div class="formula">TRAP: 'four hundred and five thousand' is 405,000 — NOT 400,050 or 4,050. The word 'thousand' tells you which group the 'four hundred and five' belongs to.</div>

            <h3>4. Expanded form and index (exponential) form</h3>
            <p><b>Expanded form</b> opens a number into the sum of its place values: 64,307 = 60,000 + 4,000 + 300 + 0 + 7. <b>Index form</b> writes each part using powers of ten: 64,307 = (6 x 10^4) + (4 x 10^3) + (3 x 10^2) + (0 x 10^1) + (7 x 10^0). Remember that 10^0 = 1.</p>
            <div class="worked"><b>Worked example:</b> write 508,014 in index form.<br>(5 x 10^5) + (0 x 10^4) + (8 x 10^3) + (0 x 10^2) + (1 x 10^1) + (4 x 10^0).</div>

            <h3>5. Comparing and ordering whole numbers</h3>
            <ul>
              <li>First compare the NUMBER OF DIGITS: 99,999 &lt; 100,000 — any 6-figure number beats any 5-figure number.</li>
              <li>Same number of digits? Compare from the LEFT (the biggest place) until the digits differ: 45,210 &gt; 45,199 because at the hundreds place 2 &gt; 1.</li>
              <li>Use the symbols &gt; (greater than), &lt; (less than), = (equal to). The 'mouth' of the symbol opens towards the bigger number.</li>
              <li><b>Ascending order</b> = smallest first; <b>descending order</b> = biggest first. Read the question carefully — mixing the two up loses free marks.</li>
            </ul>

            <h3>6. Rounding off</h3>
            <p>To round to a given place, look at the digit ONE PLACE TO THE RIGHT. If it is 5 or more, round UP; if it is 4 or less, round DOWN (the digit stays). All digits to the right of the rounding place become zeros.</p>
            <ul>
              <li>Round 4,672 to the nearest 10: look at the units (2) → 4,670.</li>
              <li>Round 4,672 to the nearest 100: look at the tens (7) → 4,700.</li>
              <li>Round 4,672 to the nearest 1,000: look at the hundreds (6) → 5,000.</li>
              <li>Round 35 to the nearest 10 → 40 (5 always rounds up).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> round 2,947,518 to the nearest million. The digit after the millions place is 9 (hundred-thousands), which is 5 or more, so round up: 3,000,000.</div>
            <div class="formula">TRAP: rounding is done in ONE step using only the digit immediately to the right. Do NOT round 4,672 → 4,700 → 5,000 and claim 4,672 ≈ 5,000 to the nearest 100. Each request is its own operation.</div>

            <h3>7. Estimation — fast, sensible answers</h3>
            <p><b>Estimation</b> means rounding numbers first so the calculation becomes easy, giving an answer close enough for real life. You estimate when you check a market bill, guess a crowd size, or sanity-check an exam answer.</p>
            <ul>
              <li><b>Sum:</b> 4,821 + 2,975 ≈ 5,000 + 3,000 = 8,000.</li>
              <li><b>Difference:</b> 9,054 - 3,889 ≈ 9,000 - 4,000 = 5,000.</li>
              <li><b>Product:</b> 48 x 21 ≈ 50 x 20 = 1,000.</li>
            </ul>
            <div class="worked"><b>Market example:</b> Mama buys rice ₦4,850, beans ₦2,980 and oil ₦1,970. Estimating: 5,000 + 3,000 + 2,000 = ₦10,000. If the trader's bill says ₦15,000, she knows instantly to re-check — estimation is a defence against mistakes (and against being cheated).</div>

            <h3>8. Factors, multiples, primes and composites</h3>
            <ul>
              <li>A <b>factor</b> divides a number exactly: factors of 12 are 1, 2, 3, 4, 6, 12.</li>
              <li>A <b>multiple</b> is what you get by counting on in a number's times table: multiples of 5 are 5, 10, 15, 20, ...</li>
              <li>A <b>prime number</b> has exactly TWO factors (1 and itself): 2, 3, 5, 7, 11, 13, 17, 19, 23, ... Note: 2 is the ONLY even prime; 1 is NOT prime.</li>
              <li>A <b>composite number</b> has more than two factors: 4, 6, 8, 9, 10, 12, ...</li>
              <li><b>Prime factors</b> are factors that are prime: 60 = 2 x 2 x 3 x 5.</li>
            </ul>

            <h3>9. LCM and HCF</h3>
            <ul>
              <li><b>LCM (Lowest Common Multiple)</b> — the smallest number two or more numbers divide into exactly. LCM of 4 and 6: multiples of 4 = 4, 8, 12, ...; of 6 = 6, 12, ... → LCM = 12.</li>
              <li><b>HCF (Highest Common Factor)</b> — the biggest number that divides two or more numbers exactly. HCF of 12 and 18: common factors 1, 2, 3, 6 → HCF = 6.</li>
              <li><b>Prime-factorisation method:</b> 24 = 2^3 x 3; 36 = 2^2 x 3^2. HCF = product of the LOWEST powers shared = 2^2 x 3 = 12. LCM = product of the HIGHEST powers = 2^3 x 3^2 = 72.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> two buses leave a park every 8 minutes and every 12 minutes. They leave together at 7:00 am. When next? LCM of 8 and 12 = 24, so they leave together again 24 minutes later — 7:24 am.</div>

            <h3>10. Integers on the number line</h3>
            <p>Draw a line with 0 in the middle. Positive integers march to the RIGHT (1, 2, 3, ...), negative integers to the LEFT (-1, -2, -3, ...). The further right a number is, the BIGGER it is. That is why -2 &gt; -7, even though 7 looks 'bigger' — on the number line -2 sits to the right of -7.</p>
            <svg viewBox="0 0 460 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A number line from minus five to plus five showing negative integers to the left of zero and positive integers to the right, with an arrow jumping from zero three steps right to plus three and an arrow jumping from zero four steps left to minus four">
              <path d="M20 60 L440 60" stroke="#334155" stroke-width="2.5"/>
              <path d="M432 54 L440 60 L432 66" fill="#334155"/>
              <path d="M28 54 L20 60 L28 66" fill="#334155"/>
              <g font-size="11" fill="#334155" text-anchor="middle" font-weight="700">
                <text x="40" y="82">-5</text><text x="80" y="82">-4</text><text x="120" y="82">-3</text><text x="160" y="82">-2</text><text x="200" y="82">-1</text><text x="240" y="82">0</text><text x="280" y="82">1</text><text x="320" y="82">2</text><text x="360" y="82">3</text><text x="400" y="82">4</text>
              </g>
              <g stroke="#334155" stroke-width="2"><path d="M40 55 L40 65"/><path d="M80 55 L80 65"/><path d="M120 55 L120 65"/><path d="M160 55 L160 65"/><path d="M200 55 L200 65"/><path d="M240 55 L240 65"/><path d="M280 55 L280 65"/><path d="M320 55 L320 65"/><path d="M360 55 L360 65"/><path d="M400 55 L400 65"/></g>
              <path d="M240 40 C280 12 320 12 358 38" stroke="#059669" stroke-width="2.5" fill="none"/>
              <path d="M352 30 L360 40 L348 42" fill="#059669"/>
              <text x="300" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">+3 (three steps right)</text>
              <path d="M240 100 C200 116 120 116 84 98" stroke="#d97706" stroke-width="2.5" fill="none"/>
              <path d="M92 92 L80 96 L90 104" fill="#d97706"/>
              <text x="160" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">-4 (four steps left)</text>
            </svg>

            <h3>11. Adding and subtracting integers</h3>
            <ul>
              <li><b>Same signs:</b> add the sizes and KEEP the sign: (+3) + (+5) = +8; (-3) + (-5) = -8.</li>
              <li><b>Different signs:</b> subtract the smaller size from the bigger and TAKE THE SIGN OF THE BIGGER: (+7) + (-2) = +5; (-7) + (+2) = -5.</li>
              <li><b>Subtracting</b> means adding the opposite: (+5) - (+8) = (+5) + (-8) = -3; (-4) - (-6) = (-4) + (+6) = +2.</li>
            </ul>
            <div class="worked"><b>Worked example (money sense):</b> your account has ₦500. You spend ₦800 (the bank allows an overdraft). Balance = 500 - 800 = -₦300: you OWE the bank ₦300. Then you deposit ₦1,000: -300 + 1,000 = +₦700. Integers are exactly how banks think.</div>

            <h3>12. A first look at base 2 (binary)</h3>
            <p>Our everyday system is base 10 (ten digits, 0-9). Computers use <b>base 2</b>: only the digits 0 and 1, because a switch is either OFF (0) or ON (1). Each position in base 2 is worth double the one to its right: 1, 2, 4, 8, 16, ...</p>
            <ul>
              <li>1101 (base 2) = (1 x 8) + (1 x 4) + (0 x 2) + (1 x 1) = 8 + 4 + 0 + 1 = 13 (base 10).</li>
              <li>To change base 10 to base 2, keep HALVING and writing the remainders: 13 ÷ 2 = 6 r1; 6 ÷ 2 = 3 r0; 3 ÷ 2 = 1 r1; 1 ÷ 2 = 0 r1. Read remainders UPWARDS: 1101.</li>
            </ul>
            <div class="formula">EXAM CODE: base-2 questions in JSS1 only use small numbers (up to 31). Memorise the place values 1, 2, 4, 8, 16 and both directions of conversion — they are guaranteed marks.</div>

            <h3>13. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Give the place value of 6 in 2,605,418. <i>Ans: 600,000 (six hundred thousands).</i></li>
              <li><b>Q2.</b> Write 708,045 in words. <i>Ans: seven hundred and eight thousand and forty-five.</i></li>
              <li><b>Q3.</b> Write 52,306 in index form. <i>Ans: (5 x 10^4) + (2 x 10^3) + (3 x 10^2) + (0 x 10^1) + (6 x 10^0).</i></li>
              <li><b>Q4.</b> Arrange in ascending order: 45,201; 45,199; 44,999. <i>Ans: 44,999; 45,199; 45,201.</i></li>
              <li><b>Q5.</b> Round 7,456 to the nearest 100. <i>Ans: 7,500.</i></li>
              <li><b>Q6.</b> Estimate 51 x 29. <i>Ans: 50 x 30 = 1,500.</i></li>
              <li><b>Q7.</b> List the prime numbers between 20 and 40. <i>Ans: 23, 29, 31, 37.</i></li>
              <li><b>Q8.</b> Find the LCM and HCF of 12 and 18. <i>Ans: LCM 36; HCF 6.</i></li>
              <li><b>Q9.</b> Which is greater: -3 or -8? <i>Ans: -3 (it lies to the right of -8 on the number line).</i></li>
              <li><b>Q10.</b> Work out (-6) + (+10) and (-4) - (-9). <i>Ans: +4 and +5.</i></li>
              <li><b>Q11.</b> Convert 10110 (base 2) to base 10. <i>Ans: 16 + 4 + 2 = 22.</i></li>
              <li><b>Q12.</b> Convert 25 to base 2. <i>Ans: 11001 (16 + 8 + 1).</i></li>
            </ul>
            <div class="formula">SUMMARY: Whole numbers live in a base-10 place-value system, so every digit's position fixes its value; we can write numbers in words, figures, expanded and index forms, compare and round them, and estimate sums and products for everyday checks. Factors, multiples, primes, LCM and HCF describe how numbers are built, while integers extend the number line below zero with simple sign rules — and base 2 shows that computers count using only 0 and 1.</div>

'''

CONTENT_B = '''
            <h3>1. What a fraction means</h3>
            <p>A <b>fraction</b> is an equal share of a whole. In 3/4, the bottom number (the <b>denominator</b>) says how many EQUAL parts the whole is cut into, and the top number (the <b>numerator</b>) says how many of those parts we take. 3/4 of a garri cake means: cut it into 4 equal pieces and carry 3.</p>
            <ul>
              <li><b>Proper fraction</b> — numerator smaller than denominator: 2/3, 5/8.</li>
              <li><b>Improper fraction</b> — numerator equal to or bigger than denominator: 7/4, 12/12.</li>
              <li><b>Mixed number</b> — a whole number plus a proper fraction: 1 3/4.</li>
              <li>Changing mixed to improper: 2 3/5 = (2 x 5 + 3)/5 = 11/5. Changing improper to mixed: 11/5 = 2 1/5 (11 ÷ 5 = 2 remainder 1).</li>
            </ul>
            <svg viewBox="0 0 460 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four circles cut into equal parts: one whole shaded 4 quarters showing 4/4 equals 1, a circle with 3 of 4 quarters shaded showing 3/4, a circle with 5 of 8 eighths shaded showing 5/8, and a circle with 7 of 4-parts impossible demonstrating an improper fraction as one whole plus 3/4">
              <circle cx="60" cy="55" r="38" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
              <path d="M60 17 A38 38 0 0 1 98 55 L60 55 Z" fill="#6366f1"/>
              <path d="M98 55 A38 38 0 0 1 60 93 L60 55 Z" fill="#6366f1"/>
              <path d="M60 93 A38 38 0 0 1 22 55 L60 55 Z" fill="#6366f1"/>
              <path d="M22 55 A38 38 0 0 1 60 17 L60 55 Z" fill="#6366f1"/>
              <path d="M60 17 L60 93 M22 55 L98 55" stroke="#ffffff" stroke-width="2"/>
              <text x="60" y="115" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">4/4 = 1 whole</text>
              <circle cx="175" cy="55" r="38" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
              <path d="M175 17 A38 38 0 0 1 213 55 L175 55 Z" fill="#6366f1"/>
              <path d="M213 55 A38 38 0 0 1 175 93 L175 55 Z" fill="#6366f1"/>
              <path d="M175 93 A38 38 0 0 1 137 55 L175 55 Z" fill="#6366f1"/>
              <path d="M175 17 L175 93 M137 55 L213 55" stroke="#ffffff" stroke-width="2"/>
              <text x="175" y="115" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">3/4 shaded</text>
              <circle cx="290" cy="55" r="38" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
              <path d="M290 17 A38 38 0 0 1 328 55 L290 55 Z" fill="#6366f1"/>
              <path d="M328 55 A38 38 0 0 1 290 93 L290 55 Z" fill="#6366f1"/>
              <path d="M290 93 A38 38 0 0 1 252 55 L290 55 Z" fill="#6366f1"/>
              <path d="M290 17 L290 93 M252 55 L328 55 M263 28 L317 82 M317 28 L263 82" stroke="#ffffff" stroke-width="2"/>
              <path d="M317 28 A38 38 0 0 1 328 55 L290 55 Z" fill="#6366f1"/>
              <path d="M263 28 A38 38 0 0 1 290 17 L290 55 Z" fill="#6366f1"/>
              <text x="290" y="115" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">5/8 shaded</text>
              <circle cx="400" cy="55" r="38" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
              <path d="M400 17 A38 38 0 0 1 438 55 L400 55 Z" fill="#6366f1"/>
              <path d="M438 55 A38 38 0 0 1 400 93 L400 55 Z" fill="#6366f1"/>
              <path d="M400 93 A38 38 0 0 1 362 55 L400 55 Z" fill="#6366f1"/>
              <path d="M362 55 A38 38 0 0 1 400 17 L400 55 Z" fill="#c7d2fe"/>
              <path d="M400 17 L400 93 M362 55 L438 55" stroke="#ffffff" stroke-width="2"/>
              <text x="400" y="115" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">7/4 = 1 3/4</text>
            </svg>

            <h3>2. Equivalent fractions and lowest terms</h3>
            <p>Multiply (or divide) the top and bottom of a fraction by the SAME number and its value does not change: 1/2 = 2/4 = 4/8 = 50/100. These are <b>equivalent fractions</b> — the same amount wearing different clothes.</p>
            <ul>
              <li><b>Reducing to lowest terms:</b> divide top and bottom by their HCF. 18/24: HCF is 6, so 18/24 = 3/4.</li>
              <li>A fraction is in lowest terms when top and bottom have no common factor except 1.</li>
            </ul>
            <div class="formula">EXAM LINE: unless a question says otherwise, answers must be in LOWEST TERMS. An unreduced correct fraction can lose the mark.</div>

            <h3>3. Comparing and ordering fractions</h3>
            <p>To compare fractions with DIFFERENT denominators, rewrite them over the LCM of the denominators, then compare the numerators.</p>
            <div class="worked"><b>Worked example:</b> arrange 2/3, 3/4, 5/6 in ascending order. LCM of 3, 4, 6 = 12. 2/3 = 8/12; 3/4 = 9/12; 5/6 = 10/12. So 2/3 &lt; 3/4 &lt; 5/6.</div>

            <h3>4. Adding and subtracting fractions</h3>
            <ul>
              <li><b>Same denominator:</b> add or subtract the numerators only: 2/7 + 3/7 = 5/7.</li>
              <li><b>Different denominators:</b> change to equivalent fractions over the LCM first: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.</li>
              <li><b>Mixed numbers:</b> add the wholes and the fractions separately: 1 1/4 + 2 1/2 = 3 + (1/4 + 2/4) = 3 3/4.</li>
              <li><b>Subtraction with borrowing:</b> 3 1/4 - 1 3/4: borrow 1 (that is 4/4) → 2 5/4 - 1 3/4 = 1 2/4 = 1 1/2.</li>
            </ul>
            <div class="formula">TRAP: NEVER add the denominators. 1/2 + 1/2 is 1, not 2/4. The denominator names the size of the pieces; you only count pieces (numerators) once the pieces are the same size.</div>

            <h3>5. Multiplying and dividing fractions</h3>
            <ul>
              <li><b>Multiplication:</b> multiply straight across, top x top and bottom x bottom: 2/3 x 3/5 = 6/15 = 2/5. Better: CANCEL across before multiplying: 2/3 x 3/5 = 2/5 (the 3s cancel).</li>
              <li>Multiplying by a whole number: 4 x 2/7 = 8/7 = 1 1/7.</li>
              <li><b>Division:</b> KEEP - CHANGE - FLIP: keep the first fraction, change ÷ to x, flip (invert) the second: 2/3 ÷ 4/5 = 2/3 x 5/4 = 10/12 = 5/6.</li>
              <li>Dividing by a whole number: 3/4 ÷ 6 = 3/4 x 1/6 = 3/24 = 1/8.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> 2 1/2 ÷ 1 1/4. Change to improper: 5/2 ÷ 5/4 = 5/2 x 4/5 = 20/10 = 2. Mixed numbers must ALWAYS become improper fractions before multiplying or dividing.</div>

            <h3>6. Fractions of quantities</h3>
            <p>'Fraction OF a quantity' means multiply: 3/5 of ₦2,000 = (₦2,000 ÷ 5) x 3 = ₦400 x 3 = ₦1,200. Divide by the denominator first (it usually gives a friendly number), then multiply by the numerator.</p>
            <ul>
              <li>3/4 of 48 kg = (48 ÷ 4) x 3 = 12 x 3 = 36 kg.</li>
              <li>2/3 of 1 hour = (60 ÷ 3) x 2 = 40 minutes.</li>
              <li><b>What fraction of ...?</b> — put the part over the whole and reduce: 15 minutes is 15/60 = 1/4 of an hour.</li>
            </ul>
            <div class="worked"><b>Market example:</b> a trader sells 3/8 of her 240 oranges in the morning and 1/4 of them in the afternoon. Morning: 240 ÷ 8 x 3 = 90. Afternoon: 240 ÷ 4 = 60. Sold = 150; left = 90 oranges.</div>

            <h3>7. Decimals — place value after the point</h3>
            <p>A <b>decimal</b> is a fraction written in base-10 form using a decimal point. The first place right of the point is <b>tenths</b>, then <b>hundredths</b>, then <b>thousandths</b>: in 27.365 the 3 is 3 tenths (0.3), the 6 is 6 hundredths (0.06), the 5 is 5 thousandths (0.005).</p>
            <ul>
              <li>Read 0.75 as 'zero point seven five' (digit by digit after the point) or as 'seventy-five hundredths'.</li>
              <li>Compare decimals by padding with zeros to equal length: 0.5 vs 0.48 → 0.50 vs 0.48 → 0.5 is bigger. (Yes — 0.5 &gt; 0.48 even though 48 'looks bigger'.)</li>
            </ul>

            <h3>8. Changing fractions to decimals and back</h3>
            <ul>
              <li><b>Fraction to decimal:</b> the line means divide: 3/4 = 3 ÷ 4 = 0.75; 1/8 = 1 ÷ 8 = 0.125.</li>
              <li>Denominators of 10, 100, 1000 convert instantly: 7/10 = 0.7; 43/100 = 0.43; 9/1000 = 0.009.</li>
              <li><b>Decimal to fraction:</b> 0.6 = 6/10 = 3/5; 0.25 = 25/100 = 1/4; 0.125 = 125/1000 = 1/8.</li>
              <li>Memorise the classics: 1/2 = 0.5, 1/4 = 0.25, 3/4 = 0.75, 1/5 = 0.2, 1/8 = 0.125.</li>
            </ul>

            <h3>9. Operations with decimals</h3>
            <ul>
              <li><b>Addition/subtraction:</b> line up the DECIMAL POINTS (pad with zeros): 4.5 + 0.78 = 4.50 + 0.78 = 5.28.</li>
              <li><b>Multiplication:</b> multiply as whole numbers, then count TOTAL decimal places: 1.2 x 0.3 → 12 x 3 = 36, two places → 0.36.</li>
              <li>Multiplying by 10, 100, 1000 moves the point RIGHT (0.7 x 100 = 70); dividing moves it LEFT (70 ÷ 100 = 0.7).</li>
              <li><b>Division:</b> make the divisor a whole number by multiplying both numbers by the same power of 10: 4.5 ÷ 0.3 = 45 ÷ 3 = 15.</li>
            </ul>
            <div class="worked"><b>Worked example (naira and kobo):</b> ₦1 = 100 kobo, so ₦2.50 + 75k = ₦2.50 + ₦0.75 = ₦3.25. Money is decimals in disguise — every kobo amount is hundredths of a naira.</div>

            <h3>10. Fractions and decimals in daily life</h3>
            <ul>
              <li><b>Sharing:</b> splitting a 1.5-litre bottle of drink equally among 3 children gives 0.5 litre each.</li>
              <li><b>Recipes:</b> half a cup of milk, 3/4 teaspoon of salt — cooking runs on fractions.</li>
              <li><b>Measurements:</b> a tailor measures 2 1/2 yards of fabric; a carpenter reads 0.75 m on a tape.</li>
              <li><b>Scores and discounts:</b> 'half price' means multiply by 1/2; scoring 18/20 in a test is the fraction 9/10.</li>
            </ul>
            <div class="formula">TIP: when a word problem mixes fractions and decimals, convert EVERYTHING to one form before calculating. Most students find fractions friendlier for 'of' problems and decimals friendlier for money.</div>

            <h3>11. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Change 2 3/4 to an improper fraction. <i>Ans: 11/4.</i></li>
              <li><b>Q2.</b> Reduce 24/36 to lowest terms. <i>Ans: 2/3.</i></li>
              <li><b>Q3.</b> Which is bigger: 5/8 or 2/3? <i>Ans: 2/3 (15/24 vs 16/24).</i></li>
              <li><b>Q4.</b> 2 1/2 + 1 2/3 = ? <i>Ans: 4 1/6 (2/6 + 4/6 = 5/6 over the wholes... carefully: 1/2 + 2/3 = 3/6 + 4/6 = 7/6 = 1 1/6, plus 3 wholes = 4 1/6).</i></li>
              <li><b>Q5.</b> 3/5 x 2 1/2 = ? <i>Ans: 3/5 x 5/2 = 15/10 = 1 1/2.</i></li>
              <li><b>Q6.</b> 2 1/4 ÷ 3/4 = ? <i>Ans: 9/4 x 4/3 = 3.</i></li>
              <li><b>Q7.</b> Find 3/5 of ₦1,500. <i>Ans: (1,500 ÷ 5) x 3 = ₦900.</i></li>
              <li><b>Q8.</b> Write 0.375 as a fraction in lowest terms. <i>Ans: 375/1000 = 3/8.</i></li>
              <li><b>Q9.</b> 6.04 - 2.7 = ? <i>Ans: 3.34.</i></li>
              <li><b>Q10.</b> 0.8 x 0.5 = ? <i>Ans: 0.40 = 0.4.</i></li>
              <li><b>Q11.</b> Which is greater: 0.6 or 0.575? <i>Ans: 0.6 (= 0.600).</i></li>
              <li><b>Q12.</b> A bag of rice weighing 5 1/4 kg is shared equally into 7 containers. Mass per container? <i>Ans: 21/4 ÷ 7 = 21/28 = 3/4 kg.</i></li>
            </ul>
            <div class="formula">SUMMARY: A fraction names equal shares of a whole; equivalent fractions, reduction and common denominators let us compare, add and subtract them, while multiplication goes straight across and division uses keep-change-flip. 'Of' means multiply. Decimals are base-10 fractions: line up the points to add and subtract, count decimal places when multiplying, and convert freely between the two forms — money, measurements and recipes are all fractions and decimals in daily dress.</div>

'''

LESSONS = [
    ('Whole Numbers, Place Value & Estimation', CONTENT_A),
    ('Fractions & Decimals', CONTENT_B),
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
