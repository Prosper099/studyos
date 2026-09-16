export default {

    color: 'indigo', icon: '🧮', blurb: 'Number & numeration, algebra, geometry, statistics — the JAMB heavy-hitters.',
    topics: {
      SS1: [
        {
          title: 'Number Bases & Modular Arithmetic',
          tags: ['Number bases', 'Modulo', 'Remainders'],
          summary: 'Converting between bases and working with remainders — a guaranteed JAMB UTME question.',
          content: `
            <h3>1. Number bases</h3>
            <p>Every number is written in a base. In base 10 each position is a power of 10; in base 2 (binary) each position is a power of 2. To convert from base <b>n</b> to base 10, multiply each digit by its positional power and add.</p>
            <div class="formula">d_k d_{k-1} … d_1 d_0 (base n) = d_k·n^k + … + d_1·n + d_0</div>
            <div class="worked"><b>Worked example:</b> Convert 1101<sub>2</sub> to base 10.<br>
            1×2^3 + 1×2^2 + 0×2^1 + 1×2^0 = 8 + 4 + 0 + 1 = <b>13</b>.</div>
            <p>To convert <b>from base 10 to another base</b>, divide repeatedly by that base and read the remainders <b>bottom to top</b>.</p>
            <div class="worked"><b>Worked example:</b> 45 to base 2 → 45÷2 = 22 r1, 22÷2 = 11 r0, 11÷2 = 5 r1, 5÷2 = 2 r1, 2÷2 = 1 r0, 1÷2 = 0 r1 → <b>101101(base 2)</b>.</div>
            <h3>2. Modular arithmetic</h3>
            <p>A "mod m" system keeps only the remainder after division by m — exactly how a clock works. We write a ≡ b (mod m) when a and b leave the same remainder on division by m.</p>
            <div class="formula">a mod m = remainder of a ÷ m  •  e.g. 29 mod 7 = 1</div>
            <ul>
              <li><b>Clock time:</b> 4 hours after 10 o'clock = 14 mod 12 = 2 o'clock.</li>
              <li><b>Days of the week:</b> work mod 7 — 100 days after Monday = 100 mod 7 = 2 → Wednesday.</li>
              <li><b>Cryptography:</b> RSA encryption and checksums (IBAN, ISBN) rely on modular arithmetic.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> For "what is 3^20 mod 5", look for a cycle: 3^1=3, 3^2=4, 3^3=2, 3^4=1 (mod 5). The cycle length is 4, and 20 is divisible by 4, so the answer is <b>1</b>.</div>
            <h3>3. Worked practice</h3>
            <div class="worked"><b>Q1.</b> Convert 214<sub>5</sub> to base 10.<br>
            2×5^2 + 1×5^1 + 4×5^0 = 50 + 5 + 4 = <b>59</b>.</div>
            <div class="worked"><b>Q2.</b> Convert 156<sub>10</sub> to base 8.<br>
            156÷8 = 19 r4; 19÷8 = 2 r3; 2÷8 = 0 r2. Reading the remainders bottom-to-top gives <b>234(base 8)</b>.<br>
            <i>Check:</i> 2×64 + 3×8 + 4 = 128 + 24 + 4 = 156 ✓</div>
            <div class="worked"><b>Q3.</b> If today is Tuesday, what day is it 45 days from now?<br>
            45 mod 7 = 3, so count three days forward: <b>Friday</b>.</div>
            <div class="worked"><b>Q4.</b> Solve 3x ≡ 4 (mod 7).<br>
            Test x = 0 to 6: 3 × 6 = 18 and 18 mod 7 = 4, so <b>x ≡ 6 (mod 7)</b>. Every solution is 6, 13, 20, …</div>
            <h3>4. Common mistakes that cost marks</h3>
            <ul>
              <li>Reading the remainders <b>top-to-bottom</b> instead of bottom-to-top when converting out of base 10.</li>
              <li>Using a digit the base does not allow — there is no digit "5" in base 5, and no "8" in base 8.</li>
              <li>Forgetting that a mod m answer is <b>always between 0 and m-1</b>. If you get 7 for mod 7, something is wrong.</li>
              <li>In base-2 addition, writing "2" as a digit. 1 + 1 = 10(base 2), never 2(base 2).</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> memorise the powers of two — 1, 2, 4, 8, 16, 32, 64, 128, 256. Half of all base-2 questions then become simple addition.</div>
            <h3>Deep dive: converting and calculating in any base</h3>
            <p><b>Denary → base n:</b> divide repeatedly by n, collecting remainders, then read them <b>bottom-up</b>. <b>Base n → denary:</b> expand in powers of n. Example: 11001(base 2) = 16 + 8 + 0 + 0 + 1 = <b>25(base 10)</b>; and 25(base 10) in base 2: 25 = 12 r1, 12 = 6 r0, 6 = 3 r0, 3 = 1 r1, 1 = 0 r1 → reading remainders bottom-up: <b>11001(base 2)</b>.</p>
            <p><b>Arithmetic in base n</b> works exactly like denary arithmetic except you carry whenever a column reaches <b>n</b> (not 10). Adding 1101(base 2) + 1011(base 2): units 1+1 = 10(base 2) (write 0, carry 1), next 0+1+1 = 10(base 2) (write 0, carry 1), next 1+0+1 = 10(base 2) (write 0, carry 1), last 1+1+1 = 11(base 2) → answer <b>11000(base 2)</b> = 24(base 10). Check: 13 + 11 = 24 ✓ — always sanity-check in denary.</p>
            <h3>Modular arithmetic — clock mathematics</h3>
            <p>a ≡ b (mod n) means a and b leave the same remainder on division by n: 17 ≡ 5 (mod 12), like a clock hand returning to 5 after 17 hours. To reduce: divide and keep the remainder. <b>43 mod 7</b>: 43 = 6×7 + 1 → <b>1</b>. Weekdays are mod 7, clocks are mod 12, and computer checksums (ISBN, bank codes) are modular arithmetic protecting your data.</p>
            <h3>Examiner's traps</h3>
            <ul>
              <li>A digit must be <b>smaller than the base</b> — there is no "2" in base 2, no "8" in base 8.</li>
              <li>Reading remainders <b>top-down</b> instead of bottom-up flips the answer completely.</li>
              <li>In mod n, answers run 0 to n-1; "7 mod 7" is 0, not 7.</li>
            </ul>

          `,
          cards: [
            { q: 'What place values are used in base 2 and base 5?', a: 'Powers of 2: 1, 2, 4, 8, 16, ...; powers of 5: 1, 5, 25, 125, ... — in any base b the place values grow by multiplying by b at each step.' },
            { q: 'Convert 25(base 10) to base 2.', a: 'Divide by 2 repeatedly, keeping remainders: 25 = 11001(base 2). Check: 16 + 8 + 1 = 25.' },
            { q: 'Work out 1101(base 2) + 1011(base 2).', a: 'Add column by column, carrying whenever a column totals 2: 1101 + 1011 = 11000(base 2) (= 24 in base 10).' },
            { q: 'Convert 345(base 6) to base 10.', a: '3x36 + 4x6 + 5x1 = 108 + 24 + 5 = 137.' },
            { q: 'What does 100(base 7) mean in base 10?', a: '1x7^2 = 49 — the place values in base 7 are powers of 7 (1, 7, 49, 343, ...).' },
            { q: 'Evaluate 9 mod 7 and 15 mod 4.', a: '9 mod 7 = 2 (9 = 1x7 + 2); 15 mod 4 = 3 — modular arithmetic keeps only the remainder.' },
            { q: 'If today is Wednesday, what day will it be in 50 days?', a: '50 mod 7 = 1, so one day on from Wednesday — Thursday. The days of the week work in mod 7.' },
            { q: 'Name three real-life uses of modular arithmetic.', a: 'Clock arithmetic (12-hour and 24-hour time), days of the week and calendars, check digits on ID cards/ISBNs, and computer cryptography.' },
            { q: 'Convert 0.11(base 2) to a fraction in base 10.', a: '0.11(base 2) = 1/2 + 1/4 = 3/4 — after the point the place values are 1/2, 1/4, 1/8, ...' },
            { q: 'Multiply 11(base 2) by 101(base 2).', a: '11 x 101 = 1111(base 2) (= 3 x 5 = 15 in base 10 — a good check on your binary working).' },
            { q: 'Why can the digit 7 never appear in a base-7 number?', a: 'Digits in base b run from 0 to b - 1; base 7 uses only 0-6, so any \'7\' would carry over into the next place value (7(base 10) = 10(base 7)).' },
            { q: 'Convert 1101(base 2) to base 10.', a: '1×8 + 1×4 + 0×2 + 1×1 = 13.' },
            { q: 'Give two real-life uses of modular arithmetic.', a: 'Clock time (mod 12/24), days of the week (mod 7), plus cryptography and checksums.' },
            { q: 'Why is base 2 (binary) so important?', a: 'Computers and digital devices switch on and off - two states - so every number, letter and picture is stored as strings of 0s and 1s. Binary is the language of machines.' },
            { q: 'What does a = b (mod n) mean?', a: 'It means a and b leave the same remainder when divided by n. For example 17 = 5 (mod 12) because both leave remainder 5 when divided by 12.' }
          ],
          quiz: [
            { q: 'Convert 1101(base 2) to base 10.', options: ['11', '13', '15', '12'], correct: 1,
              exp: '1x8 + 1x4 + 0x2 + 1x1 = 8 + 4 + 0 + 1 = 13.' },
            { q: 'Convert 25 in base 10 to base 2.', options: ['11001(base 2)', '10110(base 2)', '11010(base 2)', '10011(base 2)'], correct: 0,
              exp: '25 = 16 + 8 + 1 = 1x16 + 1x8 + 0x4 + 0x2 + 1x1 = 11001 in base 2.' },
            { q: 'Express 45 in base 10 in base 5.', options: ['140(base 5)', '130(base 5)', '401(base 5)', '90(base 5)'], correct: 0,
              exp: '45 = 1x25 + 4x5 + 0x1, so the base-5 form is 140.' },
            { q: 'Calculate 38 mod 7.', options: ['3', '4', '5', '6'], correct: 0,
              exp: '38 = 5 x 7 + 3, so the remainder - 38 mod 7 - is 3.' },
            { q: 'Add 1011(base 2) + 1101(base 2).', options: ['11000(base 2)', '10100(base 2)', '11100(base 2)', '10000(base 2)'], correct: 0,
              exp: '11 + 13 = 24 in base 10, and 24 = 11000 in base 2. Carrying works exactly as in base 10.' },
            { q: 'If 32 in base x equals 17 in base 10, find x.', options: ['5', '6', '4', '3'], correct: 0,
              exp: '3x + 2 = 17, so 3x = 15 and x = 5. Check: 32 in base 5 = 3x5 + 2 = 17.' },
            { q: 'What remainder does 2^10 leave when divided by 3?', options: ['1', '0', '2', '3'], correct: 0,
              exp: '2^10 = 1024, and 1024 = 341 x 3 + 1, so the remainder is 1.' },
            { q: 'Which digits are used in base 8 (octal)?', options: ['0 to 7', '0 to 8', '1 to 8', '0 to 9'], correct: 0,
              exp: 'A base-n system uses digits from 0 to n-1, so base 8 uses 0,1,2,3,4,5,6,7.' },
            { q: 'Convert 0.11(base 2) to a fraction in base 10.', options: ['3/4', '1/2', '1/4', '2/3'], correct: 0,
              exp: '0.11(base 2) = 1/2 + 1/4 = 3/4. After the point the place values are halves, quarters, eighths...' },
            { q: 'The time is 9 o’clock. What time will it be 100 hours later, using a 12-hour clock?', options: ['1 o’clock', '3 o’clock', '5 o’clock', '11 o’clock'], correct: 0,
              exp: '100 mod 12 = 4, so the hand advances 4 hours: 9 + 4 = 13, which is 1 o’clock.' }
          ],
        },
        {
          title: 'Indices, Logarithms & Surds',
          tags: ['Laws of indices', 'Log tables', 'Rationalising'],
          summary: 'The three laws of indices generate most algebraic simplification questions.',
          content: `
            <h3>Laws of indices</h3>
            <ul>
              <li>aᵐ × aⁿ = a<sup>m+n</sup></li>
              <li>aᵐ ÷ aⁿ = a<sup>m-n</sup></li>
              <li>(aᵐ)ⁿ = a<sup>mn</sup></li>
              <li>a^0 = 1,  a<sup>-n</sup> = 1/aⁿ,  a<sup>1/n</sup> = ⁿ√a</li>
            </ul>
            <h3>Logarithms</h3>
            <p>If aˣ = N then log<sub>a</sub>N = x. Logs turn multiplication into addition and division into subtraction.</p>
            <div class="formula">log(ab) = log a + log b • log(a/b) = log a - log b • log aⁿ = n·log a</div>
            <div class="worked"><b>Worked example:</b> Solve 2ˣ = 32.<br>Take log base 2: x = log232 = log22^5 = <b>5</b>.</div>
            <h3>Surds</h3>
            <p>Simplify by finding square factors: √50 = √(25×2) = 5√2. Rationalise a denominator by multiplying by its conjugate.</p>
            <div class="formula">a/(√b) → multiply by √b/√b  •  a/(√b - √c) → multiply by (√b + √c)/(√b + √c)</div>
            <div class="tip"><b>Exam tip:</b> Change of base is a favourite: log<sub>a</sub>b = log b ÷ log a. Any log question can be reduced to base 10 this way.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Simplify (8^1ᐟ^3 × 27^1ᐟ^3) ÷ 4⁻^1ᐟ^2.<br>
            8^1ᐟ^3 = 2, 27^1ᐟ^3 = 3 and 4⁻^1ᐟ^2 = 1/2, so (2 × 3) ÷ 1/2 = 6 × 2 = <b>12</b>.</div>
            <div class="worked"><b>Q2.</b> Evaluate log1025 + 2log102 + log104, given log102 = 0.3010.<br>
            log25 = log(100/4) = 2 - 2(0.3010) = 1.3980; 2log2 = 0.6020; log4 = 0.6020.<br>
            Total = 1.3980 + 0.6020 + 0.6020 = <b>2.6020</b>.</div>
            <div class="worked"><b>Q3.</b> Solve 3^(2x-1) = 27.<br>
            27 = 3^3, so 2x - 1 = 3 and x = <b>2</b>.</div>
            <div class="worked"><b>Q4.</b> Rationalise 5/(3 - √5).<br>
            Multiply top and bottom by (3 + √5): 5(3 + √5)/(9 - 5) = <b>(15 + 5√5)/4</b>.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Writing log(a + b) = log a + log b. <b>There is no law for addition</b> — only for products, quotients and powers.</li>
              <li>Confusing a^(m+n) with aᵐ + aⁿ. Note 2^3⁺^2 = 2^5 = 32, not 8 + 4.</li>
              <li>Leaving a surd unsimplified — √72 should be written 6√2.</li>
              <li>Forgetting that log 1 = 0 and log 10 = 1. These are free marks.</li>
            </ul>
            <div class="warn"><b>Domain check:</b> log x only exists for x &gt; 0. If a log equation gives a negative or zero value, reject that root — examiners award a mark for stating the rejection.</div>
            <h3>Deep dive: the five index laws</h3>
            <div class="formula">aᵐ × aⁿ = aᵐ⁺ⁿ &nbsp;·&nbsp; aᵐ ÷ aⁿ = aᵐ⁻ⁿ &nbsp;·&nbsp; (aᵐ)ⁿ = aᵐⁿ &nbsp;·&nbsp; a^0 = 1 &nbsp;·&nbsp; a⁻ⁿ = 1/aⁿ</div>
            <p>Fractional indices mean roots: a^(1/n) = ⁿ√a and a^(m/n) = (ⁿ√a)ᵐ — so 27^(2/3) = (^3√27)^2 = 3^2 = <b>9</b>. Logarithms ask the opposite question of indices: log_a x = n means aⁿ = x. The three laws mirror the index laws: <b>log(xy) = log x + log y</b>, <b>log(x/y) = log x - log y</b>, <b>log(xⁿ) = n log x</b>.</p>
            <h3>Worked examples</h3>
            <ol>
              <li><b>Evaluate log10 8 given log10 2 = 0.3010.</b> log 8 = log 2^3 = 3 × 0.3010 = <b>0.9030</b>.</li>
              <li><b>Solve 2ˣ = 32.</b> 32 = 2^5, so x = <b>5</b>. For 3^(x+1) = 81: 3^(x+1) = 3^4 → x + 1 = 4 → x = 3.</li>
              <li><b>Simplify √50 + √18.</b> √50 = 5√2, √18 = 3√2, sum = <b>8√2</b>.</li>
              <li><b>Rationalise 1/(√3 - √2).</b> Multiply by (√3 + √2)/(√3 + √2): (√3 + √2)/(3 - 2) = <b>√3 + √2</b>.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li><b>log(a + b) != log a + log b</b> — the product law applies to multiplication only. This single error sinks more WAEC questions than any other.</li>
              <li>a^0 = 1 for any non-zero a; x⁻^2 is 1/x^2, not -x^2.</li>
              <li>√(a + b) != √a + √b — check with a = 9, b = 16: √25 = 5 but 3 + 4 = 7.</li>
            </ul>

          `,
          cards: [
            { q: 'State the three basic laws of indices.', a: 'a^m x a^n = a^(m+n); a^m / a^n = a^(m-n); (a^m)^n = a^(mn) — same base throughout.' },
            { q: 'What do zero and negative indices mean?', a: 'a^0 = 1 for any non-zero a, and a^-n = 1/a^n — e.g. 2^-3 = 1/8.' },
            { q: 'Express 27^(2/3) without indices.', a: '27^(2/3) = (cube root of 27)^2 = 3^2 = 9 — the denominator is the root, the numerator the power.' },
            { q: 'Solve 2^x = 32.', a: '32 = 2^5, so x = 5 — express both sides with the same base and equate the indices.' },
            { q: 'What does log_a x = n mean?', a: 'It means a^n = x — a logarithm is simply an index in disguise. E.g. log_2 8 = 3 because 2^3 = 8.' },
            { q: 'State the three laws of logarithms.', a: 'log(mn) = log m + log n; log(m/n) = log m - log n; log m^n = n log m.' },
            { q: 'Evaluate log_10 1000, log 1 and log_5 5.', a: 'log_10 1000 = 3; log 1 = 0 (a^0 = 1); log_5 5 = 1 — these three values are worth memorising.' },
            { q: 'Simplify sqrt 50 + sqrt 8.', a: 'sqrt 50 = 5 sqrt 2 and sqrt 8 = 2 sqrt 2, so the sum is 7 sqrt 2 — break each surd into a square factor times a remainder.' },
            { q: 'Rationalise the denominator of 6/sqrt 3.', a: 'Multiply top and bottom by sqrt 3: 6 sqrt 3 / 3 = 2 sqrt 3 — a denominator must never contain a surd.' },
            { q: 'Expand (5 + sqrt 2)(5 - sqrt 2).', a: 'Difference of two squares: 25 - 2 = 23 — the surd terms cancel, which is why conjugate pairs are so useful.' },
            { q: 'Solve log_2 (x + 3) = 4.', a: 'x + 3 = 2^4 = 16, so x = 13 — convert the logarithm back to index form first.' },
            { q: 'Simplify (8 x 10^5) / (2 x 10^2) in standard form.', a: '8/2 = 4 and 10^5/10^2 = 10^3, giving 4 x 10^3 — divide the numbers and subtract the indices.' },
            { q: 'Simplify (2^3)^2 ÷ 2^4.', a: '(2^3)^2 = 2^6; 2^6 ÷ 2^4 = 2^2 = 4.' },
            { q: 'State three laws of indices.', a: 'aᵐ x aⁿ = aᵐ⁺ⁿ (add when multiplying); aᵐ / aⁿ = aᵐ⁻ⁿ (subtract when dividing); (aᵐ)ⁿ = aᵐⁿ (multiply the powers). Also aⁿⁿ = aⁿⁿᵗ and a^0 = 1.' },
            { q: 'What is a surd, and how do you simplify one?', a: 'A surd is a root that cannot be written exactly without the root sign, such as √2. Simplify by taking out square factors: √50 = √(25x2) = 5√2.' }
          ],
          quiz: [
            { q: 'Simplify x^5 x x^3.', options: ['x^8', 'x^15', 'x^2', '2x^8'], correct: 0,
              exp: 'When multiplying powers with the same base, add the indices: 5 + 3 = 8.' },
            { q: 'Evaluate 8^(2/3).', options: ['4', '16', '64', '2'], correct: 0,
              exp: 'The denominator 3 means cube root, the numerator 2 means square: cube root of 8 is 2, and 2^2 = 4.' },
            { q: 'Evaluate log10 1000.', options: ['3', '30', '100', '10'], correct: 0,
              exp: '10^3 = 1000, so the log of 1000 to base 10 is 3.' },
            { q: 'If log2 x = 5, find x.', options: ['32', '25', '10', '7'], correct: 0,
              exp: 'log2 x = 5 means x = 2^5 = 32.' },
            { q: 'log a + log b equals...', options: ['log(ab)', 'log(a + b)', 'log a x log b', 'log(a - b)'], correct: 0,
              exp: 'The addition law of logarithms: adding logs multiplies their arguments, log a + log b = log(ab).' },
            { q: 'Simplify √50.', options: ['5√2', '25√2', '2√5', '10√5'], correct: 0,
              exp: '√50 = √(25 x 2) = √25 x √2 = 5√2.' },
            { q: 'Rationalise the denominator of 6/√3.', options: ['2√3', '3√2', '6√3', '2√6'], correct: 0,
              exp: 'Multiply top and bottom by √3: 6√3 / 3 = 2√3.' },
            { q: 'For any non-zero x, x^0 equals...', options: ['1', '0', 'x', 'undefined'], correct: 0,
              exp: 'The zero-index law: any non-zero number raised to the power 0 equals 1.' },
            { q: 'Given log10 2 = 0.3010, find log10 8.', options: ['0.9030', '2.4080', '0.3030', '1.2040'], correct: 0,
              exp: '8 = 2^3, so log 8 = 3 log 2 = 3 x 0.3010 = 0.9030.' },
            { q: 'Expand (√5 + √2)(√5 - √2).', options: ['3', '7', '√3', '10'], correct: 0,
              exp: 'Difference of two squares: (√5)^2 - (√2)^2 = 5 - 2 = 3.' }
          ],
        },
        {
          title: 'Algebraic Expressions & Simple Equations',
          tags: ['Factorisation', 'Simultaneous equations', 'Substitution'],
          summary: 'Factorising quadratics and solving simultaneous equations by elimination or substitution.',
          content: `
            <h3>Factorising a quadratic</h3>
            <p>For x^2 + bx + c, find two numbers whose <b>product is c</b> and <b>sum is b</b>.</p>
            <div class="worked"><b>Worked example:</b> x^2 + 7x + 12 → numbers 3 and 4 (3×4=12, 3+4=7) → <b>(x+3)(x+4)</b>.</div>
            <h3>Simultaneous equations</h3>
            <p><b>Elimination:</b> make the coefficients of one variable equal, then add or subtract.<br>
            <b>Substitution:</b> make one variable the subject and substitute into the other equation.</p>
            <div class="worked"><b>Worked example:</b> 2x + y = 11 and x - y = 1.<br>Add: 3x = 12 → x = 4. Substitute: 4 - y = 1 → y = <b>3</b>.</div>
            <div class="tip"><b>Exam tip:</b> Always substitute your answers back into <i>both</i> original equations — it takes 10 seconds and catches sign errors.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Factorise completely: 6x^2 + 11x - 10.<br>
            We need two numbers whose product is 6 × (-10) = -60 and whose sum is +11: they are +15 and -4.<br>
            6x^2 + 15x - 4x - 10 = 3x(2x + 5) - 2(2x + 5) = <b>(3x - 2)(2x + 5)</b>.</div>
            <div class="worked"><b>Q2.</b> Simplify (2a + 3b)^2 - (2a - 3b)^2.<br>
            Using a^2 - b^2 = (a + b)(a - b) with a = (2a + 3b) and b = (2a - 3b):<br>
            = (4a)(6b) = <b>24ab</b>.</div>
            <div class="worked"><b>Q3.</b> Solve 3(2x - 1) = 4(x + 3).<br>
            6x - 3 = 4x + 12 → 2x = 15 → x = <b>7.5</b>. Check: 3(15 - 1) = 42 and 4(10.5) = 42 ✓</div>
            <div class="worked"><b>Q4.</b> Make t the subject of v = u + at.<br>
            v - u = at, so <b>t = (v - u)/a</b>.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Writing (a + b)^2 = a^2 + b^2. The correct expansion is <b>a^2 + 2ab + b^2</b> — the middle term is the one most often lost.</li>
              <li>Changing the sign on only one side when a term crosses the equals sign.</li>
              <li>Stopping a factorisation too early — always check whether the brackets can be factorised again.</li>
              <li>Forgetting to multiply <b>every</b> term inside a bracket: 3(2x - 1) is 6x - 3, not 6x - 1.</li>
            </ul>
            <h3>Deep dive: expansion and the four factorisations</h3>
            <p>Expansion is the distributive law: a(b + c) = ab + ac, and (x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6 — every term in the first bracket multiplies every term in the second. Factorisation reverses it, in four patterns you must recognise on sight:</p>
            <ol>
              <li><b>Common factor</b>: 6x^2 + 9x = 3x(2x + 3).</li>
              <li><b>Difference of two squares</b>: x^2 - 25 = (x + 5)(x - 5).</li>
              <li><b>Simple trinomial</b>: x^2 + 7x + 12 = (x + 3)(x + 4) — find two numbers that <b>multiply to 12</b> and <b>add to 7</b>.</li>
              <li><b>Grouping</b>: ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y).</li>
            </ol>
            <h3>Worked example, step by step</h3>
            <p><b>Solve (2x - 1)/3 + (x + 2)/4 = 1.</b></p>
            <ol>
              <li>Clear denominators with the LCM 12: 4(2x - 1) + 3(x + 2) = 12.</li>
              <li>Expand: 8x - 4 + 3x + 6 = 12 → 11x + 2 = 12.</li>
              <li>11x = 10 → x = 10/11. <b>Check</b> by substituting back — always.</li>
            </ol>
            <p><b>Word problem:</b> 3 bags of rice and 2 bags of beans cost ₦46,000; 2 bags of rice and 3 bags of beans cost ₦44,000. Let r and b be the prices: 3r + 2b = 46000 and 2r + 3b = 44000. Eliminating r (×2 and ×3): 5b = 40000 → b = ₦8,000, r = ₦10,000. Every simultaneous-equation story follows this template: define letters, translate sentences, eliminate.</p>
            <h3>Examiner's traps</h3>
            <ul>
              <li>-(a - b) = -a + b — the minus sign hits <b>every</b> term inside.</li>
              <li>(x + 3)^2 = x^2 + 6x + 9, NOT x^2 + 9 — the middle term is the classic casualty.</li>
              <li>Dividing both sides by something containing x can destroy a solution; factorise instead.</li>
            </ul>

          `,
          cards: [
            { q: 'Expand 3(2x - 5).', a: 'Multiply each term inside the bracket: 6x - 15.' },
            { q: 'Expand (x + 3)(x + 4).', a: 'FOIL: x^2 + 4x + 3x + 12 = x^2 + 7x + 12 — every term in the first bracket multiplies every term in the second.' },
            { q: 'Factorise x^2 + 5x + 6.', a: '(x + 2)(x + 3) — find two numbers that multiply to give 6 and add to give 5.' },
            { q: 'Factorise completely: 2x^2 - 18.', a: 'First take out the common factor 2: 2(x^2 - 9); then difference of two squares: 2(x + 3)(x - 3).' },
            { q: 'Solve 3x - 7 = 8.', a: '3x = 15, so x = 5 — add 7 to both sides, then divide by 3.' },
            { q: 'Solve 5x + 3 = 2x + 18.', a: '3x = 15 (subtract 2x and 3), so x = 5 — collect x terms on one side and numbers on the other.' },
            { q: 'Solve the simultaneous equations x + y = 10 and x - y = 4.', a: 'Adding: 2x = 14, x = 7; then y = 3 — elimination works best when a variable\'s coefficients match.' },
            { q: 'Make t the subject of v = u + at.', a: 'v - u = at, so t = (v - u)/a — isolate the required letter step by step, doing the same to both sides.' },
            { q: 'The sum of two consecutive integers is 41. Find them.', a: 'Let them be n and n + 1: 2n + 1 = 41, n = 20 — the numbers are 20 and 21.' },
            { q: 'Simplify (6a^2b)/(3ab) x 2b.', a: '(6/3) a^(2-1) b^(1-1) x 2b = 2a x 2b = 4ab — simplify numbers and subtract indices of like letters.' },
            { q: 'What is the difference between an expression, an equation and an identity?', a: 'An expression has no equals sign (3x + 2); an equation is true for particular values (2x + 1 = 7); an identity is true for all values, written with == (2(x + 1) == 2x + 2).' },
            { q: 'If a = 3 and b = -2, evaluate a^2 - 2ab + b^2.', a: '9 - 2(3)(-2) + 4 = 9 + 12 + 4 = 25 — substitute carefully, keeping brackets around negative numbers.' },
            { q: 'How do you factorise a quadratic of the form x^2 + bx + c?', a: 'Find two numbers whose product is c and whose sum is b, then write (x + first)(x + second). Example: x^2 + 7x + 12 = (x + 3)(x + 4).' },
            { q: 'What is the difference of two squares?', a: 'a^2 - b^2 = (a - b)(a + b). Any expression that is one square minus another splits this way: x^2 - 9 = (x - 3)(x + 3).' },
            { q: 'Describe two methods for solving simultaneous equations.', a: 'Substitution: make one letter the subject and substitute it into the other equation. Elimination: match coefficients of one letter, then add or subtract the equations to remove it.' }
          ],
          quiz: [
            { q: 'Factorise x^2 + 7x + 12.', options: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x - 3)(x - 4)'], correct: 0,
              exp: 'Find two numbers that multiply to 12 and add to 7: those are 3 and 4.' },
            { q: 'Factorise 2x^2 - 8 completely.', options: ['2(x + 2)(x - 2)', '(2x + 4)(x - 2)', '2(x - 4)^2', '(2x - 2)(x + 4)'], correct: 0,
              exp: 'Take out the common factor 2 first: 2(x^2 - 4), then difference of two squares: 2(x + 2)(x - 2).' },
            { q: 'Solve simultaneously: x + y = 10 and x - y = 4.', options: ['x = 7, y = 3', 'x = 3, y = 7', 'x = 6, y = 4', 'x = 8, y = 2'], correct: 0,
              exp: 'Adding the equations cancels y: 2x = 14, x = 7; then y = 10 - 7 = 3.' },
            { q: 'Factorise ax + ay + bx + by.', options: ['(a + b)(x + y)', '(a + x)(b + y)', 'ab + xy', '(a + y)(b + x)'], correct: 0,
              exp: 'Group in pairs: a(x + y) + b(x + y), then take out the common bracket: (a + b)(x + y).' },
            { q: 'Solve simultaneously: 3x - 2y = 7 and x + y = 4.', options: ['x = 3, y = 1', 'x = 1, y = 3', 'x = 2, y = 2', 'x = 4, y = 0'], correct: 0,
              exp: 'From the second equation y = 4 - x. Substitute: 3x - 2(4 - x) = 7 gives 5x = 15, so x = 3 and y = 1.' },
            { q: 'Factorise x^2 - 9.', options: ['(x - 3)(x + 3)', '(x - 9)(x + 1)', '(x - 3)^2', 'x(x - 9)'], correct: 0,
              exp: 'This is a difference of two squares: x^2 - 3^2 = (x - 3)(x + 3).' },
            { q: 'If (x + 2)(x - 5) = 0, what are the values of x?', options: ['-2 and 5', '2 and -5', '2 and 5', '-2 and -5'], correct: 0,
              exp: 'A product is zero only when one factor is zero: x + 2 = 0 or x - 5 = 0, so x = -2 or x = 5.' },
            { q: 'Expand (2x + 3)(x - 4).', options: ['2x^2 - 5x - 12', '2x^2 + 5x - 12', '2x^2 - 5x + 12', '2x^2 - 11x - 12'], correct: 0,
              exp: 'Multiply every term: 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12.' },
            { q: 'Solve x^2 - 5x + 6 = 0.', options: ['2 and 3', '-2 and -3', '1 and 6', '-1 and 6'], correct: 0,
              exp: '(x - 2)(x - 3) = 0, so x = 2 or x = 3. Check: both numbers multiply to 6 and add to 5.' },
            { q: 'In the elimination method, what is the aim?', options: ['Make the coefficients of one variable equal, then add or subtract to remove it', 'Multiply both equations together', 'Divide one equation by the other', 'Square both equations'], correct: 0,
              exp: 'Elimination removes one letter by adding or subtracting the equations, leaving a one-variable equation to solve.' }
          ],
        },
        {
          title: 'Sets, Venn Diagrams & Logic',
          tags: ['Union', 'Intersection', 'Complement'],
          summary: 'n(A∪B) = n(A) + n(B) - n(A∩B) solves most word problems on sets.',
          content: `
            <h3>Key notation</h3>
            <ul>
              <li><b>A ∪ B</b> — union: everything in A or B (or both).</li>
              <li><b>A ∩ B</b> — intersection: only what is in both.</li>
              <li><b>A′</b> — complement: everything in the universal set ξ not in A.</li>
              <li><b>n(A)</b> — the number of elements in A.</li>
            </ul>
            <div class="formula">n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</div>
            <div class="worked"><b>Worked example:</b> In a class of 40, 25 offer Maths, 20 offer Physics and 10 offer both. How many offer neither?<br>
            n(M∪P) = 25 + 20 - 10 = 35 → neither = 40 - 35 = <b>5</b>.</div>
            <div class="tip"><b>Exam tip:</b> With three sets, start from the innermost overlap and work outwards — fill the Venn diagram before doing any subtraction.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> In a school of 120 pupils, 70 play football, 60 play basketball and 25 play both. How many play neither?<br>
            n(F ∪ B) = 70 + 60 - 25 = 105, so neither = 120 - 105 = <b>15</b>.</div>
            <div class="worked"><b>Q2.</b> Given ξ = {1…20}, A = multiples of 3, B = even numbers. Find n(A ∩ B).<br>
            A = {3, 6, 9, 12, 15, 18}, B = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20}.<br>
            A ∩ B = {6, 12, 18}, so n(A ∩ B) = <b>3</b>.</div>
            <div class="worked"><b>Q3 (three sets).</b> Of 100 students, 45 take Maths, 40 take Physics, 35 take Chemistry, 20 take Maths and Physics, 15 take Physics and Chemistry, 12 take Maths and Chemistry, and 8 take all three. How many take none?<br>
            Start at the centre: all three = 8. Maths &amp; Physics only = 20 - 8 = 12; Physics &amp; Chemistry only = 15 - 8 = 7; Maths &amp; Chemistry only = 12 - 8 = 4.<br>
            Maths only = 45 - 12 - 4 - 8 = 21; Physics only = 40 - 12 - 7 - 8 = 13; Chemistry only = 35 - 7 - 4 - 8 = 16.<br>
            Total in at least one = 21 + 13 + 16 + 12 + 7 + 4 + 8 = 81, so <b>19 take none</b>.</div>
            <div class="diagram">
              <div class="diagram-title">Two overlapping sets: 40 students, Mathematics and English</div>
              <svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram with 22 in Maths only, 8 in both, 6 in English only and 4 outside">
                <rect x="6" y="6" width="368" height="168" rx="14" fill="#fffbeb"/>
                <rect x="24" y="22" width="332" height="140" rx="8" fill="none" stroke="#78350f" stroke-width="2"/>
                <text x="34" y="38" font-size="10" fill="#78350f">ξ  (all 40 students)</text>
                <circle cx="150" cy="94" r="52" fill="#fbcfe8" fill-opacity="0.65" stroke="#be185d" stroke-width="2.5"/>
                <circle cx="234" cy="94" r="52" fill="#bae6fd" fill-opacity="0.65" stroke="#0369a1" stroke-width="2.5"/>
                <text x="128" y="98" text-anchor="middle" font-size="16" fill="#9d174d" font-weight="bold">22</text>
                <text x="192" y="98" text-anchor="middle" font-size="16" fill="#4c1d95" font-weight="bold">8</text>
                <text x="256" y="98" text-anchor="middle" font-size="16" fill="#075985" font-weight="bold">6</text>
                <text x="330" y="146" text-anchor="middle" font-size="12" fill="#78350f" font-weight="bold">4</text>
                <text x="128" y="66" text-anchor="middle" font-size="11" fill="#9d174d">Mathematics only</text>
                <text x="256" y="66" text-anchor="middle" font-size="11" fill="#075985">English only</text>
                <text x="192" y="66" text-anchor="middle" font-size="11" fill="#4c1d95">both</text>
                <text x="190" y="176" text-anchor="middle" font-size="10" fill="#78350f">n(M ∪ E) = 22 + 8 + 6 = 36, so 40 - 36 = 4 study neither</text>
              </svg>
              <div class="diagram-note">Always fill the <b>intersection first</b>, then work outwards. n(A ∪ B) = n(A) + n(B) - n(A ∩ B).</div>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Adding n(A) + n(B) without subtracting the overlap, which double-counts it.</li>
              <li>In three-set problems, treating "Maths and Physics" as if it excluded those who also take Chemistry. Subtract the triple overlap first.</li>
              <li>Confusing A′ (everything in ξ outside A) with the empty set ∅.</li>
              <li>Forgetting that n(A ∪ B) can never exceed n(ξ).</li>
            </ul>
            <h3>Deep dive: the counting formula and how to use it</h3>
            <div class="formula">n(A ∪ B) = n(A) + n(B) - n(A ∩ B) &nbsp;&nbsp;·&nbsp;&nbsp; n(A′) = n(U) - n(A)</div>
            <p>The intersection is subtracted because it was counted twice. For three sets: n(A∪B∪C) = n(A)+n(B)+n(C) - n(A∩B) - n(A∩C) - n(B∩C) + n(A∩B∩C). In every WAEC Venn problem, <b>fill the innermost region first</b> and work outwards — the diagram then does the arithmetic for you.</p>
            <h3>Worked example, step by step</h3>
            <p><b>In a class of 40, 25 offer Mathematics, 20 offer English, and 8 offer both. How many offer neither?</b></p>
            <ol>
              <li>n(M ∪ E) = 25 + 20 - 8 = 37.</li>
              <li>Neither = 40 - 37 = <b>3</b>.</li>
              <li>Diagram check: Maths only = 25 - 8 = 17; English only = 20 - 8 = 12; both = 8; neither = 3. Total = 17 + 12 + 8 + 3 = 40 ✓.</li>
            </ol>
            <h3>Logic in one breath</h3>
            <p>A <b>statement</b> is either true or false. <b>p ∧ q</b> (AND) is true only when both are; <b>p ∨ q</b> (OR — in maths, <b>inclusive</b>: "or both") is false only when both are false; <b>~p</b> (NOT) flips the truth value; <b>p → q</b> (if p then q) is false only when p is true and q is false.</p>
            <h3>Examiner's traps</h3>
            <ul>
              <li>"25 offer Maths" <b>includes</b> those who also offer English — don't treat it as "Maths only".</li>
              <li>Mathematical OR is inclusive; everyday "either...or" often isn't.</li>
              <li>The empty set ∅ has no elements but is a subset of every set — n(∅) = 0.</li>
            </ul>

          `,
          cards: [
            { q: 'What do n(A), ξ, A\' and the empty set mean?', a: 'n(A) is the number of elements in A; ξ (xi) is the universal set containing all elements under discussion; A\' is the complement — everything in ξ not in A; the empty set { } contains no elements.' },
            { q: 'Define union and intersection of two sets.', a: 'A ∪ B is everything in A or B or both (join them); A ∩ B is only what the two sets share (where the Venn circles overlap).' },
            { q: 'State the two-set Venn diagram formula.', a: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B) — the overlap is counted twice by n(A) + n(B), so subtract it once.' },
            { q: '30 students play football, 25 play tennis and 8 play both. How many play at least one game?', a: 'n(F ∪ T) = 30 + 25 - 8 = 47 students.' },
            { q: 'In a class of 50, 32 offer Biology, 28 offer Chemistry and everyone offers at least one. How many offer both?', a: 'n(B ∩ C) = 32 + 28 - 50 = 10 — when n(A ∪ B) is the whole class, the overlap is the excess over the total.' },
            { q: 'Write the three-set inclusion-exclusion formula.', a: 'n(A∪B∪C) = n(A) + n(B) + n(C) - n(A∩B) - n(A∩C) - n(B∩C) + n(A∩B∩C).' },
            { q: 'What are disjoint (mutually exclusive) sets?', a: 'Sets with no element in common — their Venn circles do not overlap and n(A ∩ B) = 0, so n(A ∪ B) = n(A) + n(B).' },
            { q: 'How many subsets does a set with 4 elements have?', a: '2^4 = 16, including the empty set and the set itself — a set with n elements has 2^n subsets.' },
            { q: 'If ξ = {integers from 1 to 20}, A = {even numbers}, what are n(A) and n(A\')?', a: 'n(A) = 10 (2, 4, ..., 20) and n(A\') = 10 — the complement holds the odds; n(A) + n(A\') = n(ξ) always.' },
            { q: 'How do you shade (A ∩ B)\' on a Venn diagram?', a: 'First find A ∩ B (the overlap) and shade everything EXCEPT it — the complement of an intersection is \'not both\'.' },
            { q: 'Give an example of a subset relationship.', a: 'If A = {2, 4} and B = {2, 4, 6, 8}, then A is a subset of B (A ⊂ B) — every element of A is also in B.' },
            { q: 'What is the logical negation of \'All students passed\'?', a: '\'Some students did not pass\' — to disprove an \'all\' statement you need just one counter-example.' },
            { q: 'State the inclusion–exclusion formula.', a: 'n(A∪B) = n(A) + n(B) - n(A∩B).' },
            { q: 'Define union, intersection and complement.', a: 'Union A ∪ B: everything in A or B or both. Intersection A ∩ B: only what is in both. Complement A′: everything in the universal set ξ that is NOT in A.' },
            { q: 'Why do you subtract n(A ∩ B) in the counting formula?', a: 'When you add n(A) + n(B), pupils in the overlap are counted twice - once in each set - so n(A ∪ B) = n(A) + n(B) - n(A ∩ B) removes the double count.' }
          ],
          quiz: [
            { q: 'The formula for n(A ∪ B) is...', options: ['n(A) + n(B) - n(A ∩ B)', 'n(A) + n(B) + n(A ∩ B)', 'n(A) x n(B)', 'n(A) - n(B)'], correct: 0,
              exp: 'Adding n(A) and n(B) counts the overlap twice, so the inclusion-exclusion formula subtracts n(A ∩ B) once.' },
            { q: 'If n(A) = 12, n(B) = 9 and n(A ∩ B) = 4, find n(A ∪ B).', options: ['17', '21', '25', '8'], correct: 0,
              exp: 'n(A ∪ B) = 12 + 9 - 4 = 17.' },
            { q: 'In a class of 40, 25 play football, 20 play basketball and every pupil plays at least one game. How many play both?', options: ['5', '15', '10', '45'], correct: 0,
              exp: 'n(F ∩ B) = 25 + 20 - 40 = 5.' },
            { q: 'A ∩ B represents...', options: ['elements in both A and B', 'elements in A or B or both', 'elements in A only', 'elements in neither A nor B'], correct: 0,
              exp: 'The intersection A ∩ B is the overlap - everything common to both sets.' },
            { q: 'A\' (the complement of A) contains...', options: ['everything in the universal set that is not in A', 'everything in A', 'only the empty set', 'A and its overlap'], correct: 0,
              exp: 'A\' collects every element of ξ that falls outside A, so n(A) + n(A\') = n(ξ).' },
            { q: 'In a Venn diagram, the overlapping region of two circles represents...', options: ['the intersection', 'the union', 'the complement', 'the universal set'], correct: 0,
              exp: 'Where the circles overlap sits everything that belongs to both sets: A ∩ B.' },
            { q: 'Of 30 pupils, 18 like yam, 15 like garri and 8 like both. How many like neither?', options: ['5', '7', '13', '3'], correct: 0,
              exp: 'n(Y ∪ G) = 18 + 15 - 8 = 25, so 30 - 25 = 5 pupils like neither.' },
            { q: 'The symbol ξ stands for...', options: ['the universal set', 'the empty set', 'a subset', 'the complement'], correct: 0,
              exp: 'ξ is the universal set - everything under discussion, from which all other sets are drawn.' },
            { q: 'If n(ξ) = 50 and n(A) = 20, then n(A′) is...', options: ['30', '70', '20', '1000'], correct: 0,
              exp: 'The complement fills up the universal set: n(A\') = 50 - 20 = 30.' },
            { q: 'A ⊂ B means...', options: ['every element of A is also in B', 'A and B are equal', 'A has more elements than B', 'A and B share no elements'], correct: 0,
              exp: 'A ⊂ B says A is a subset of B: everything in A is inside B, though B may hold more.' }
          ],
        }
      ],
      SS2: [
        {
          title: 'Quadratic Equations',
          tags: ['Quadratic formula', 'Discriminant', 'Completing the square'],
          summary: 'The quadratic formula, the discriminant, and the sum/product of roots.',
          content: `

            <h3>1. What a quadratic is</h3>
            <p>A quadratic equation has the form <b>ax^2 + bx + c = 0</b> with a ≠ 0 — the highest power of x is 2, so there are (at most) <b>two roots</b>. Four solution methods: factorisation, completing the square, the formula, and graphs. Exams also test the <b>sum/product of roots</b> and the <b>discriminant</b>.</p>

            <h3>2. Factorisation</h3>
            <p>Find two numbers that <b>multiply to ac and add to b</b>, split the middle term, then factor by grouping; set each bracket to zero.</p>
            <div class="worked"><b>Worked example:</b> x^2 − 5x + 6 = 0. Numbers: −2 and −3 (multiply to 6, add to −5). (x − 2)(x − 3) = 0 → x = 2 or x = <b>3</b>.</div>
            <div class="worked"><b>Worked example:</b> 2x^2 + 5x − 3 = 0. ac = −6; numbers 6 and −1. 2x^2 + 6x − x − 3 = 2x(x + 3) − 1(x + 3) = (2x − 1)(x + 3) = 0 → x = 1/2 or x = <b>−3</b>.</div>

            <h3>3. Completing the square</h3>
            <p>Rewrite as (x + b/2a)^2 minus a constant, then take square roots.</p>
            <div class="worked"><b>Worked example:</b> x^2 + 6x − 7 = 0 → (x + 3)^2 − 9 − 7 = 0 → (x + 3)^2 = 16 → x + 3 = ±4 → x = 1 or x = <b>−7</b>.</div>

            <h3>4. The formula — the universal hammer</h3>
            <div class="formula">x = (−b ± √(b^2 − 4ac)) ÷ 2a</div>
            <div class="worked"><b>Worked example:</b> 3x^2 − 4x − 2 = 0 → x = (4 ± √(16 + 24))/6 = (4 ± √40)/6 ≈ (4 ± 6.32)/6 → x ≈ <b>1.72 or −0.39</b> (2 d.p.).</div>

            <h3>5. Sum and product of roots</h3>
            <div class="formula">α + β = −b/a • αβ = c/a</div>
            <ul>
              <li><b>Form an equation from roots:</b> x^2 − (sum)x + (product) = 0.</li>
              <li><b>Evaluate expressions</b> like 1/α + 1/β = (α + β)/(αβ) without solving.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Roots 2 and −5: sum −3, product −10 → equation x^2 + 3x − 10 = 0.</div>
            <div class="worked"><b>Worked example:</b> For 2x^2 − 7x + 3 = 0, find 1/α + 1/β. Sum = 7/2, product = 3/2 → (7/2)/(3/2) = <b>7/3</b>.</div>

            <h3>6. The discriminant — nature of roots</h3>
            <div class="formula">D = b^2 − 4ac • D &gt; 0: two distinct real roots • D = 0: equal roots • D &lt; 0: no real roots</div>
            <div class="worked"><b>Worked example:</b> Find k so that x^2 + kx + 9 = 0 has equal roots. D = k^2 − 36 = 0 → k = <b>±6</b>.</div>

            <h3>7. Word problems that hide quadratics</h3>
            <div class="worked"><b>Worked example:</b> A number exceeds its square root's square by… (too tame) — try this: "The product of two consecutive positive integers is 56." n(n + 1) = 56 → n^2 + n − 56 = 0 → (n + 8)(n − 7) = 0 → n = 7 (reject −8). The numbers: <b>7 and 8</b>. Always reject roots the story forbids.</div>

            <h3>8. Common mistakes that cost marks</h3>
            <ul>
              <li>Dropping the ± when taking square roots — losing one root costs half the marks.</li>
              <li>Sign slips in −b and in the sum/product formulas.</li>
              <li>Using D &gt; 0 for "equal roots" — equal means D = 0.</li>
              <li>Accepting negative or fractional answers that the word problem forbids.</li>
              <li>Dividing by x to "simplify" x^2 = 3x — you kill the root x = 0. Factor instead.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> try factorisation for 60 seconds; if the numbers do not jump out, switch to the formula without guilt. Marks care about answers, not methods.</div>
          
            <h3>Deep dive: graphical solution</h3>
            <p>Plot y = ax^2 + bx + c with a small table of values; the <b>roots are where the curve crosses y = 0</b> (the x-axis). A curve that touches once has equal roots; one that never touches has no real roots — the picture of the discriminant.</p>
            <div class="worked"><b>Worked example:</b> Solve x^2 − 4x − 5 = 0 graphically. Table: x = −2..6 gives y = 7, 0, −5, −8, −9, −8, −5, 0, 7. The curve crosses at x = −1 and x = 5 → roots <b>−1 and 5</b>.</div>
            <p>Graphs also solve <b>mixed equations</b>: to solve x^2 = 2x + 3, draw y = x^2 and y = 2x + 3 and read the intersections.</p>

            <h3>Deep dive: identities built from sum and product</h3>
            <ul>
              <li>α^2 + β^2 = (α + β)^2 − 2αβ.</li>
              <li>(α − β)^2 = (α + β)^2 − 4αβ.</li>
              <li>1/α + 1/β = (α + β)/(αβ) and α/β + β/α = ((α + β)^2 − 2αβ)/(αβ).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> If α, β are roots of x^2 − 5x + 4 = 0, find α^2 + β^2. Sum = 5, product = 4 → 25 − 8 = <b>17</b> — without solving the equation at all.</div>

            <h3>Deep dive: one linear + one quadratic (substitution)</h3>
            <div class="worked"><b>Worked example:</b> y = x + 1 and x^2 + y^2 = 13. Substitute: x^2 + (x+1)^2 = 13 → 2x^2 + 2x − 12 = 0 → x^2 + x − 6 = 0 → (x + 3)(x − 2) = 0 → x = 2, y = 3 or x = −3, y = −2. Points: <b>(2, 3) and (−3, −2)</b>.</div>

            <h3>Deep dive: word problems that bite</h3>
            <div class="worked"><b>Worked example (ages):</b> In 3 years, Kofi's age squared will equal 9 times his age then. Let age then be x: x^2 = 9x → x(x − 9) = 0 → x = 9 (not 0) → now he is <b>6</b>.</div>
            <div class="tip"><b>Exam tip:</b> after solving any word quadratic, run the "story check": does the root make sense (positive, whole, in range)? Writing one line of check rescues silly-mark losses.</div>
`,
          cards: [
            { q: 'Write the general form of a quadratic equation.', a: 'ax^2 + bx + c = 0 with a not equal to zero — its graph is a parabola and it has at most two roots.' },
            { q: 'Solve x^2 + 5x + 6 = 0 by factorisation.', a: '(x + 2)(x + 3) = 0, so x = -2 or x = -3 — each bracket is set to zero.' },
            { q: 'State the quadratic formula.', a: 'x = (-b +/- sqrt(b^2 - 4ac)) / (2a) — use it when factorisation is hard, and substitute a, b, c with their signs.' },
            { q: 'Solve x^2 - 5x + 6 = 0 by completing the square.', a: '(x - 5/2)^2 - 25/4 + 6 = 0, so (x - 2.5)^2 = 0.25, x - 2.5 = +/-0.5, giving x = 3 or x = 2.' },
            { q: 'What does the discriminant b^2 - 4ac tell you?', a: 'If positive: two distinct real roots; if zero: two equal roots (the curve touches the x-axis); if negative: no real roots (the curve misses the x-axis).' },
            { q: 'Find the sum and product of the roots of 2x^2 - 7x + 3 = 0.', a: 'Sum = -b/a = 7/2; product = c/a = 3/2 — true for any quadratic ax^2 + bx + c = 0.' },
            { q: 'Form the quadratic equation whose roots are 3 and -5.', a: 'Sum = -2, product = -15, so x^2 - (sum)x + product = 0 gives x^2 + 2x - 15 = 0.' },
            { q: 'For what values of k does x^2 + kx + 9 = 0 have equal roots?', a: 'b^2 - 4ac = 0: k^2 = 36, so k = +6 or -6.' },
            { q: 'The length of a rectangle is 3 m more than its width and its area is 40 m2. Find the width.', a: 'w(w + 3) = 40 gives w^2 + 3w - 40 = 0, so (w + 8)(w - 5) = 0; w = 5 m (rejecting the negative root).' },
            { q: 'Solve simultaneously y = x + 1 and y = x^2 - 5.', a: 'Substitute: x + 1 = x^2 - 5, so x^2 - x - 6 = 0, (x - 3)(x + 2) = 0; the points are (3, 4) and (-2, -1).' },
            { q: 'A ball is thrown upwards and its height is h = 20t - 5t^2 metres. When is it 15 m high?', a: '15 = 20t - 5t^2 gives t^2 - 4t + 3 = 0, so t = 1 s (on the way up) and t = 3 s (on the way down).' },
            { q: 'Where does the parabola y = x^2 - 4x + 3 cut the x-axis and the y-axis?', a: 'x-axis: x^2 - 4x + 3 = 0 gives x = 1 and x = 3; y-axis: set x = 0, giving y = 3 (the constant c).' },
            { q: 'State the discriminant and what Δ &lt; 0 means.', a: 'Δ = b^2 - 4ac. Δ &lt; 0 means the equation has no real roots.' },
            { q: 'Name the three ways to solve a quadratic equation.', a: 'Factorisation, completing the square, and the quadratic formula x = (-b ± √(b^2 - 4ac)) / 2a. Use factorising when it is quick; the formula always works.' },
            { q: 'State the sum and product of roots relationships.', a: 'For ax^2 + bx + c = 0 with roots α and β: α + β = -b/a and αβ = c/a. Handy for building an equation from its roots: x^2 - (sum)x + (product) = 0.' }
          ],
          quiz: [
            { q: 'Solve x^2 - 5x + 6 = 0.', options: ['2 and 3', '-2 and -3', '1 and 6', '-1 and -6'], correct: 0,
              exp: '(x - 2)(x - 3) = 0, so x = 2 or 3.' },
            { q: 'Find the discriminant of 2x^2 + 3x - 5 = 0.', options: ['49', '31', '-31', '19'], correct: 0,
              exp: 'Δ = b^2 - 4ac = 9 - 4(2)(-5) = 9 + 40 = 49.' },
            { q: 'If the discriminant of a quadratic is negative, the equation has...', options: ['no real roots', 'two equal roots', 'two distinct real roots', 'one root only'], correct: 0,
              exp: 'Δ ‹ 0 means the square root in the formula is impossible, so there are no real roots - the graph never touches the x-axis.' },
            { q: 'The sum of the roots of x^2 - 5x + 6 = 0 is...', options: ['5', '6', '-5', '1'], correct: 0,
              exp: 'Sum of roots = -b/a = 5/1 = 5. (Check: 2 + 3 = 5.)' },
            { q: 'The product of the roots of x^2 - 5x + 6 = 0 is...', options: ['6', '5', '-6', '30'], correct: 0,
              exp: 'Product of roots = c/a = 6/1 = 6. (Check: 2 x 3 = 6.)' },
            { q: 'Solve x^2 + 4x + 1 = 0 by the formula.', options: ['-2 ± √3', '2 ± √3', '-4 ± √3', '-2 ± √5'], correct: 0,
              exp: 'x = (-4 ± √(16-4))/2 = (-4 ± √12)/2 = -2 ± √3.' },
            { q: 'Factorise x^2 + 7x + 10.', options: ['(x + 2)(x + 5)', '(x + 1)(x + 10)', '(x - 2)(x - 5)', '(x + 2)(x - 5)'], correct: 0,
              exp: 'Two numbers multiplying to 10 and adding to 7: that is 2 and 5.' },
            { q: 'The sum of the roots of a quadratic is 3 and the product is 2. The equation is...', options: ['x^2 - 3x + 2 = 0', 'x^2 + 3x + 2 = 0', 'x^2 - 3x - 2 = 0', 'x^2 - 2x + 3 = 0'], correct: 0,
              exp: 'The equation is x^2 - (sum)x + (product) = 0, giving x^2 - 3x + 2 = 0.' },
            { q: 'Write x^2 + 6x in completed-square form.', options: ['(x + 3)^2 - 9', '(x + 3)^2 + 9', '(x - 3)^2 - 9', '(x + 6)^2 - 36'], correct: 0,
              exp: 'Halve 6 to get 3: (x + 3)^2 = x^2 + 6x + 9, so subtract 9 to restore x^2 + 6x.' },
            { q: 'A quadratic equation can have at most how many real roots?', options: ['2', '1', '3', '4'], correct: 0,
              exp: 'The highest power is 2, so there are at most two real roots - two equal roots when Δ = 0.' }
          ],
        },
        {
          title: 'Sequences & Series (A.P. and G.P.)',
          tags: ['Arithmetic progression', 'Geometric progression', 'Sum to n terms'],
          summary: 'nth term and sum formulas for arithmetic and geometric progressions.',
          content: `

            <h3>1. Sequence vs series, and the notation</h3>
            <p>A <b>sequence</b> is an ordered list of numbers following a rule (2, 5, 8, 11, …); a <b>series</b> is the sum of the terms of a sequence (2 + 5 + 8 + …). We write the nth term as <b>U_n</b> (or T_n). Exams live on two families: the <b>arithmetic progression (A.P.)</b> — add a constant — and the <b>geometric progression (G.P.)</b> — multiply by a constant.</p>

            <h3>2. The A.P. toolkit</h3>
            <div class="formula">U_n = a + (n − 1)d   •   S_n = n/2 [2a + (n − 1)d] = n/2 (a + l)</div>
            <p>where a = first term, d = common difference, l = last term.</p>
            <div class="worked"><b>Worked example:</b> Find the 20th term of 5, 9, 13, …<br>
            a = 5, d = 4 → U_20 = 5 + 19(4) = 5 + 76 = <b>81</b>.</div>
            <div class="worked"><b>Worked example (classic):</b> The 3rd term of an A.P. is 10 and the 7th is 22. Find a and d.<br>
            a + 2d = 10; a + 6d = 22. Subtract: 4d = 12 → d = 3, a = 10 − 6 = <b>4</b>. (Two given terms = two equations. Always.)</div>
            <div class="worked"><b>Worked example:</b> Which term of 3, 8, 13, … is 98?<br>
            3 + (n−1)5 = 98 → (n−1)5 = 95 → n − 1 = 19 → <b>n = 20</b>.</div>
            <div class="worked"><b>Worked example (sum):</b> Sum of the first 30 terms of 2 + 5 + 8 + …<br>
            a = 2, d = 3 → S_30 = 30/2 [4 + 29×3] = 15 × 91 = <b>1365</b>.</div>

            <h3>3. A.P. properties that shortcut work</h3>
            <ul>
              <li>Any middle term equals the <b>average of its neighbours</b>: 2b = a + c for consecutive terms a, b, c.</li>
              <li>Sum of terms equidistant from the ends is constant — that is why S_n = n/2 (first + last).</li>
              <li>Adding a constant to every term keeps d; multiplying every term multiplies d.</li>
            </ul>

            <h3>4. The G.P. toolkit</h3>
            <div class="formula">U_n = a·r^(n−1)   •   S_n = a(r^n − 1)/(r − 1)  (r ≠ 1)   •   S∞ = a/(1 − r), only when |r| &lt; 1</div>
            <div class="worked"><b>Worked example:</b> Find the 8th term of 3, 6, 12, …<br>
            a = 3, r = 2 → U_8 = 3 × 2^7 = 3 × 128 = <b>384</b>.</div>
            <div class="worked"><b>Worked example:</b> The 2nd term is 6 and the 5th is 162. Find a and r.<br>
            ar = 6; ar^4 = 162. Divide: r^3 = 27 → r = 3, a = 2.</div>
            <div class="worked"><b>Worked example (sum to infinity):</b> 8 + 4 + 2 + … → S∞ = 8/(1 − 1/2) = <b>16</b>.</div>
            <div class="worked"><b>Worked example (recurring decimals):</b> Express 0.777… as a fraction.<br>
            0.7 + 0.07 + 0.007 + … is a G.P. with a = 7/10, r = 1/10 → S∞ = (7/10)/(9/10) = <b>7/9</b>. WAEC adores this.</div>

            <h3>5. Real-life A.P. and G.P.</h3>
            <ul>
              <li><b>A.P.:</b> salary with a fixed annual increment; seats per row in a hall; ladder rungs.</li>
              <li><b>G.P.:</b> compound interest, population growth, radioactive half-life chains, chain letters.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A worker earns ₦50,000 in year one with a ₦5,000 yearly rise. Total in 6 years?<br>
            S_6 = 6/2 [2×50,000 + 5×5,000] = 3 × 125,000 = <b>₦375,000</b>.</div>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Using n instead of (n − 1) in U_n — the 20th term has 19 steps of d.</li>
              <li>Applying S∞ when r ≥ 1 — it only exists for |r| &lt; 1.</li>
              <li>Dividing G.P. equations the wrong way up when eliminating a.</li>
              <li>Confusing "sum of the first n terms" with "the nth term".</li>
              <li>Forgetting that d can be negative and r can be a fraction.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> two known terms → write both equations, <b>subtract</b> for A.P., <b>divide</b> for G.P.. That pair of moves solves 90% of progression questions.</div>
          `,
          cards: [
            { q: 'What is an arithmetic progression? Give an example.', a: 'A sequence with a constant common difference d between consecutive terms — e.g. 3, 7, 11, 15, ... where d = 4.' },
            { q: 'Write the nth term of an A.P.', a: 'U_n = a + (n - 1)d, where a is the first term — the (n - 1) appears because the first term itself adds no d.' },
            { q: 'Find the 10th term of 5, 9, 13, 17, ...', a: 'a = 5, d = 4: U_10 = 5 + 9 x 4 = 41.' },
            { q: 'Write the sum of the first n terms of an A.P.', a: 'S_n = (n/2)[2a + (n - 1)d] or S_n = (n/2)(first term + last term).' },
            { q: 'Find the sum of the first 20 natural numbers.', a: 'S = (20/2)(1 + 20) = 10 x 21 = 210 — the classic n(n + 1)/2 result.' },
            { q: 'What is a geometric progression? Give an example.', a: 'A sequence where each term is multiplied by a constant common ratio r — e.g. 2, 6, 18, 54, ... where r = 3.' },
            { q: 'Write the nth term of a G.P.', a: 'U_n = a r^(n-1) — e.g. the 6th term of 3, 6, 12, ... is 3 x 2^5 = 96.' },
            { q: 'Write the sum of n terms and the sum to infinity of a G.P.', a: 'S_n = a(1 - r^n)/(1 - r) for r between -1 and 1 in practice; the sum to infinity S = a/(1 - r) exists only when |r| < 1.' },
            { q: 'Find the sum to infinity of 8 + 4 + 2 + 1 + ...', a: 'a = 8, r = 1/2: S = 8 / (1 - 1/2) = 16 — the terms get closer and closer to filling 16 without reaching it.' },
            { q: 'A man saves ₦500 in January and increases his saving by ₦100 each month. How much does he save in December, and in total for the year?', a: 'December is the 12th term: 500 + 11(100) = ₦1,600. Total S_12 = (12/2)(500 + 1600) = 6 x 2100 = ₦12,600.' },
            { q: 'The 3rd term of an A.P. is 14 and the 7th term is 34. Find a and d.', a: 'a + 6d = 34 and a + 2d = 14; subtracting: 4d = 20, d = 5, then a = 4.' },
            { q: 'Insert two arithmetic means between 6 and 18.', a: '6, _, _, 18 is an A.P. with 3 gaps: d = (18 - 6)/3 = 4, giving 6, 10, 14, 18.' },
            { q: 'Formula for the nth term and sum of an A.P.?', a: 'T_n = a + (n-1)d; S_n = n/2[2a + (n-1)d].' },
            { q: 'Give the nth term and sum formulas for a G.P.', a: 'nth term: U_n = arⁿ⁻^1. Sum of n terms: S_n = a(rⁿ - 1)/(r - 1) for r ‾ 1. Sum to infinity (|r| ‹ 1): S∞ = a/(1 - r).' },
            { q: 'When does a series have a sum to infinity?', a: 'Only a G.P. whose common ratio satisfies |r| ‹ 1, because the terms die away and the running total settles at S∞ = a/(1 - r). An A.P. has no sum to infinity.' }
          ],
          quiz: [
            { q: 'Find the 10th term of the A.P. 3, 7, 11, ...', options: ['39', '43', '40', '36'], correct: 0,
              exp: 'a = 3, d = 4. U10 = a + 9d = 3 + 36 = 39.' },
            { q: 'Find the sum of the first 10 terms of an A.P. with a = 2 and d = 3.', options: ['155', '150', '145', '160'], correct: 0,
              exp: 'S10 = (10/2)(2x2 + 9x3) = 5(4 + 27) = 5 x 31 = 155.' },
            { q: 'What is the common ratio of the G.P. 2, 6, 18, ...?', options: ['3', '4', '2', '12'], correct: 0,
              exp: 'r = 6/2 = 18/6 = 3. In a G.P. each term is multiplied by the same ratio.' },
            { q: 'Find the 5th term of a G.P. with first term 3 and common ratio 2.', options: ['48', '96', '24', '32'], correct: 0,
              exp: 'U5 = ar^4 = 3 x 2^4 = 3 x 16 = 48.' },
            { q: 'Find the sum to infinity of the G.P. 8, 4, 2, ...', options: ['16', '12', '4', '24'], correct: 0,
              exp: 'a = 8, r = 1/2. S∞ = a/(1 - r) = 8/1/2 = 16.' },
            { q: 'In an A.P., the 3rd term is 10 and the 7th term is 22. Find the common difference.', options: ['3', '4', '2', '6'], correct: 0,
              exp: 'Four steps separate the terms: 4d = 22 - 10 = 12, so d = 3.' },
            { q: 'Which formula uses the LAST term of an A.P.?', options: ['S_n = (n/2)(a + l)', 'S_n = (n/2)(2a + (n-1)d)', 'S∞ = a/(1 - r)', 'U_n = arⁿ⁻^1'], correct: 0,
              exp: 'When the last term l is known, S_n = (n/2)(a + l) is the quickest form - it is how Gauss summed 1 to 100.' },
            { q: 'The sum of the first n terms of a G.P. (r greater than 1) is...', options: ['a(rⁿ - 1)/(r - 1)', 'a(1 - rⁿ)/(1 - r) only when r › 1', '(n/2)(a + l)', 'a + nd'], correct: 0,
              exp: 'For r › 1 the sum grows: S_n = a(rⁿ - 1)/(r - 1). The mirror form a(1 - rⁿ)/(1 - r) suits r ‹ 1.' },
            { q: 'Which of these sequences is a G.P.?', options: ['2, 4, 8, 16', '2, 4, 6, 8', '1, 4, 9, 16', '10, 8, 6, 4'], correct: 0,
              exp: '2, 4, 8, 16 has a constant ratio of 2. The others add or square - not a constant ratio.' },
            { q: 'A G.P. has a sum to infinity only when...', options: ['|r| is less than 1', 'r is greater than 1', 'r equals 1', 'a is negative'], correct: 0,
              exp: 'Only when |r| ‹ 1 do the terms shrink towards zero and the sum settle at a/(1 - r).' }
          ],
        },
        {
          title: 'Trigonometry & Angle of Elevation',
          tags: ['SOH CAH TOA', 'Sine rule', 'Bearings'],
          summary: 'Right-angled trig ratios, the sine and cosine rules, and bearing problems.',
          content: `
            <h3>SOH CAH TOA (right-angled triangles)</h3>
            <div class="formula">sin θ = Opp/Hyp   cos θ = Adj/Hyp   tan θ = Opp/Adj</div>
            <h3>Sine &amp; cosine rules (any triangle)</h3>
            <div class="formula">a/sin A = b/sin B = c/sin C<br>a^2 = b^2 + c^2 - 2bc·cos A</div>
            <h3>Angle of elevation &amp; depression</h3>
            <p>Draw a right-angled triangle from the word problem: the horizontal is the adjacent side, the height is the opposite side, so you will usually use <b>tan</b>.</p>
            <div class="worked"><b>Worked example:</b> The angle of elevation of the top of a tower from a point 50 m away is 30°. Height = 50 × tan30° = 50 × 0.5774 ~= <b>28.9 m</b>.</div>
            <div class="tip"><b>Exam tip:</b> Bearings are measured clockwise from North and written with three figures (e.g. 065°). Always sketch North first.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> A ladder 13 m long leans against a wall with its foot 5 m from the wall. Find the angle it makes with the ground.<br>
            cos θ = 5/13 = 0.3846, so θ ~= <b>67.4°</b>.</div>
            <div class="worked"><b>Q2.</b> In triangle ABC, a = 8 cm, b = 6 cm and angle C = 40°. Find c.<br>
            c^2 = 64 + 36 - 2(8)(6)(0.766) = 100 - 73.5 = 26.5, so c ~= <b>5.15 cm</b>.</div>
            <div class="worked"><b>Q3.</b> From the top of a 40 m cliff the angle of depression of a boat is 25°. How far is the boat from the base of the cliff?<br>
            The angle at the boat is also 25°, so tan 25° = 40/d and d = 40/0.4663 ~= <b>85.8 m</b>.</div>
            <div class="diagram">
              <div class="diagram-title">SOH CAH TOA on a right-angled triangle</div>
              <svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle labelling opposite, adjacent and hypotenuse relative to angle theta">
                <rect x="6" y="6" width="368" height="178" rx="14" fill="#fdf4ff"/>
                <path d="M70 150 L310 150 L310 52 Z" fill="#f5d0fe" stroke="#a21caf" stroke-width="3"/>
                <rect x="292" y="132" width="18" height="18" fill="none" stroke="#a21caf" stroke-width="2"/>
                <path d="M70 150 A44 44 0 0 0 104 132" fill="none" stroke="#a21caf" stroke-width="2.5"/>
                <text x="112" y="146" font-size="14" fill="#86198f" font-weight="bold">θ</text>
                <text x="186" y="168" text-anchor="middle" font-size="11" fill="#86198f">adjacent (next to θ)</text>
                <text x="330" y="104" font-size="11" fill="#86198f" transform="rotate(-90 330 104)">opposite (across from θ)</text>
                <text x="150" y="88" font-size="11" fill="#86198f" transform="rotate(-22 150 88)">hypotenuse (longest side)</text>
                <text x="190" y="30" text-anchor="middle" font-size="12" fill="#701a75" font-weight="bold">sin θ = O/H   cos θ = A/H   tan θ = O/A</text>
              </svg>
              <div class="diagram-note"><b>Angle of elevation</b> is measured <i>up</i> from the horizontal; <b>angle of depression</b> is measured <i>down</i> from the horizontal. They are equal as alternate angles.</div>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Measuring the angle of incidence or elevation from the <b>horizontal</b> incorrectly — always draw the horizontal line first.</li>
              <li>Using the sine rule when no angle–opposite side <b>pair</b> is known; that case needs the cosine rule.</li>
              <li>Leaving the calculator in radians when the question expects degrees.</li>
              <li>Writing bearings with two figures (65° instead of 065°).</li>
            </ul>
            <h3>Deep dive: SOH CAH TOA and the special angles</h3>
            <div class="formula">sin θ = Opp/Hyp &nbsp;·&nbsp; cos θ = Adj/Hyp &nbsp;·&nbsp; tan θ = Opp/Adj</div>
            <table class="mb-3 w-full border-collapse text-left text-xs">
              <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">θ</th><th class="border border-slate-200 p-1.5">sin</th><th class="border border-slate-200 p-1.5">cos</th><th class="border border-slate-200 p-1.5">tan</th></tr></thead>
              <tbody>
                <tr><td class="border border-slate-200 p-1.5">30°</td><td class="border border-slate-200 p-1.5">0.5000</td><td class="border border-slate-200 p-1.5">0.8660</td><td class="border border-slate-200 p-1.5">0.5774</td></tr>
                <tr><td class="border border-slate-200 p-1.5">45°</td><td class="border border-slate-200 p-1.5">0.7071</td><td class="border border-slate-200 p-1.5">0.7071</td><td class="border border-slate-200 p-1.5">1.0000</td></tr>
                <tr><td class="border border-slate-200 p-1.5">60°</td><td class="border border-slate-200 p-1.5">0.8660</td><td class="border border-slate-200 p-1.5">0.5000</td><td class="border border-slate-200 p-1.5">1.7321</td></tr>
              </tbody>
            </table>
            <p><b>Angle of elevation</b>: measured <b>up from the horizontal</b> to the line of sight; <b>depression</b> is the mirror image, measured down — and the two are equal as alternate angles. Every elevation problem is a right-angled triangle: draw it, label the given side and angle, pick the ratio that uses them.</p>
            <h3>Worked example, step by step</h3>
            <p><b>From a point 50 m from a tower's foot, the angle of elevation of the top is 30°. Find the height.</b></p>
            <ol>
              <li>tan 30° = h/50 (opposite over adjacent).</li>
              <li>h = 50 × 0.5774 ~= <b>28.9 m</b>.</li>
              <li>If asked for the distance to the top as well: cos 30° = 50/d → d = 50/0.866 ~= 57.7 m.</li>
            </ol>
            <h3>Bearings in one line</h3>
            <p>Three-figure bearings are measured <b>clockwise from North</b>: East is 090°, South 180°, West 270°. "N30°E" converts to 030°. Draw north first, always.</p>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Calculator in the wrong mode — set <b>DEG</b>, not RAD, for WAEC trigonometry.</li>
              <li>Measuring elevation from the ground line at the wrong corner — it is always from the horizontal at the observer's eye.</li>
              <li>Confusing sin with cos: opposite goes with sin, adjacent with cos ("SOH CAH").</li>
            </ul>

          `,
          cards: [
            { q: 'State the SOH CAH TOA ratios for a right-angled triangle.', a: 'sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent — label the sides relative to the angle you are using.' },
            { q: 'Give the exact values of sin 30, cos 60 and tan 45.', a: 'sin 30 = 1/2, cos 60 = 1/2, tan 45 = 1 — the 30-60-90 and 45-45-90 triangles are the source of these standard values.' },
            { q: 'State Pythagoras\' theorem.', a: 'In a right-angled triangle, the square on the hypotenuse equals the sum of the squares on the other two sides: c^2 = a^2 + b^2 — e.g. 3-4-5.' },
            { q: 'What is the angle of elevation, and how does it differ from the angle of depression?', a: 'Elevation: looking UP from the horizontal to an object; depression: looking DOWN from the horizontal. Both are measured from the horizontal line, and for two observers they are equal (alternate angles).' },
            { q: 'A tower is seen at an angle of elevation of 30 deg from a point 60 m away. Find its height.', a: 'h = 60 tan 30 = 60/ sqrt 3 = about 34.6 m — opposite = adjacent x tan.' },
            { q: 'State the fundamental identity linking sine and cosine.', a: 'sin^2 θ + cos^2 θ = 1 — it follows directly from Pythagoras\' theorem on the unit circle; also tan θ = sin θ / cos θ.' },
            { q: 'In a right-angled triangle, sin θ = 3/5. Find cos θ and tan θ.', a: 'The sides form a 3-4-5 triangle: opposite = 3, hypotenuse = 5, so adjacent = 4; cos θ = 4/5 and tan θ = 3/4.' },
            { q: 'State the cosine rule.', a: 'a^2 = b^2 + c^2 - 2bc cos A — use it when you know two sides and the included angle, or all three sides (rearranged to find an angle).' },
            { q: 'A ladder 10 m long rests against a wall at 60 deg to the ground. How high up the wall does it reach?', a: 'h = 10 sin 60 = 10 x (sqrt 3 / 2) = about 8.66 m.' },
            { q: 'What is a bearing, and how is it written?', a: 'A direction measured in degrees clockwise from North, written with three figures — due East is 090 deg, South 180 deg, and N30 degE is the same as 030 deg.' },
            { q: 'Sketch features: what is the period and range of y = sin x?', a: 'It repeats every 360 deg (period 360 deg) and oscillates between -1 and +1, passing through zero at 0, 180 and 360 deg.' },
            { q: 'From the top of a 20 m building the angle of depression of a car is 45 deg. How far is the car from the base?', a: 'The angle of elevation from the car is also 45 deg, so distance = 20 / tan 45 = 20 m — depression and elevation angles are equal (alternate angles).' },
            { q: 'What does SOH CAH TOA stand for?', a: 'sin = Opp/Hyp, cos = Adj/Hyp, tan = Opp/Adj.' },
            { q: 'State the sine rule and when to use it.', a: 'a/sin A = b/sin B = c/sin C. Use it in a non-right-angled triangle when you know either two angles and one side, or two sides and an angle opposite one of them.' },
            { q: 'Explain angle of elevation and angle of depression.', a: 'Both are measured from the horizontal: elevation tilts UP to an object above eye level; depression tilts DOWN to an object below. They are always equal for the same pair of points (alternate angles).' }
          ],
          quiz: [
            { q: 'sin 30° equals...', options: ['1/2', '√3/2', '1', '√3'], correct: 0,
              exp: 'From the standard ratios: sin 30° = 1/2. Worth memorising with sin 45° = √2/2 and sin 60° = √3/2.' },
            { q: 'tan 45° equals...', options: ['1', '0', '√3', '1/2'], correct: 0,
              exp: 'At 45° opposite and adjacent are equal, so tan 45° = 1.' },
            { q: 'cos 60° equals...', options: ['1/2', '√3/2', '1', '√2/2'], correct: 0,
              exp: 'cos 60° = 1/2 - the cosine ratios run backwards to the sine ratios of 30° and 60°.' },
            { q: 'A 10 m ladder leans at 60° to horizontal ground. How high up the wall does it reach? (sin 60° = 0.866)', options: ['8.7 m', '5.0 m', '5.8 m', '10 m'], correct: 0,
              exp: 'Height = 10 sin 60° = 10 x 0.866 = 8.66 m, about 8.7 m.' },
            { q: 'The sine rule is used when...', options: ['the triangle is not right-angled', 'the triangle is right-angled only', 'the triangle is equilateral only', 'angles are unknown but sides equal'], correct: 0,
              exp: 'SOH CAH TOA needs a right angle; for any other triangle you use the sine or cosine rule.' },
            { q: 'The cosine rule states a^2 = ...', options: ['b^2 + c^2 - 2bc cos A', 'b^2 + c^2 + 2bc cos A', 'b^2 - c^2 - 2bc cos A', '2bc cos A - b^2 - c^2'], correct: 0,
              exp: 'a^2 = b^2 + c^2 - 2bc cos A - like Pythagoras with a correction term for the angle A.' },
            { q: 'An angle of elevation is measured...', options: ['upwards from the horizontal', 'downwards from the horizontal', 'from the vertical', 'clockwise from north'], correct: 0,
              exp: 'Stand at the observer: look straight ahead (horizontal), then tilt up to the object. That tilt is the angle of elevation.' },
            { q: 'In a right-angled triangle, the side opposite the right angle is the...', options: ['hypotenuse', 'adjacent', 'opposite', 'perpendicular'], correct: 0,
              exp: 'The hypotenuse is always the longest side, directly opposite the right angle.' },
            { q: 'If sin θ = 3/5, what is cos θ?', options: ['4/5', '3/4', '5/4', '5/3'], correct: 0,
              exp: 'The sides form a 3-4-5 triangle, so the adjacent side is 4 and cos θ = 4/5.' },
            { q: 'The angle of depression from a tower top to a car equals the angle of elevation from the car to the tower because...', options: ['they are alternate angles between parallel horizontal lines', 'they are vertically opposite angles', 'both are right angles', 'they are complementary'], correct: 0,
              exp: 'The two horizontal lines are parallel, so the depression and elevation angles are equal alternate angles.' }
          ],
        },
        {
          title: 'Coordinate Geometry',
          tags: ['Gradient', 'Midpoint', 'Equation of a line'],
          summary: 'Gradient, distance, midpoint and the equation of a straight line.',
          content: `

            <h3>1. The Cartesian plane</h3>
            <p>Every point in the plane has an ordered pair (x, y): x measured along the horizontal axis, y along the vertical. The four <b>quadrants</b> run anticlockwise from top-right (+,+) through (−,+) and (−,−) to (+,−). Nearly every WAEC coordinate question uses four tools: midpoint, distance, gradient and the line equation.</p>

            <h3>2. Midpoint</h3>
            <div class="formula">Midpoint of A(x1, y1) and B(x2, y2) = ((x1 + x2)/2, (y1 + y2)/2)</div>
            <div class="worked"><b>Worked example:</b> Midpoint of P(2, 5) and Q(6, −1): ((2+6)/2, (5+(−1))/2) = <b>(4, 2)</b>.</div>

            <h3>3. Distance between two points</h3>
            <p>The distance formula is Pythagoras in disguise: the horizontal gap and vertical gap are the two shorter sides.</p>
            <div class="formula">AB = √((x2 − x1)^2 + (y2 − y1)^2)</div>
            <div class="worked"><b>Worked example:</b> Distance between (1, 2) and (4, 6): gaps 3 and 4 → √(9 + 16) = √25 = <b>5</b>. Spot the 3-4-5 triangle and skip the arithmetic.</div>

            <h3>4. Gradient; parallel and perpendicular lines</h3>
            <div class="formula">m = (y2 − y1) ÷ (x2 − x1) • in y = mx + c, m is the gradient, c the y-intercept</div>
            <ul>
              <li><b>Parallel lines:</b> equal gradients.</li>
              <li><b>Perpendicular lines:</b> m1 × m2 = −1.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Gradient of the line through (2, 3) and (5, 12): (12−3)/(5−2) = 9/3 = <b>3</b>.</div>
            <div class="worked"><b>Worked example:</b> A line perpendicular to y = 2x + 1 has gradient <b>−1/2</b> (because 2 × −1/2 = −1).</div>

            <h3>5. Equation of a straight line</h3>
            <ul>
              <li><b>From gradient and a point:</b> y − y1 = m(x − x1).</li>
              <li><b>From two points:</b> find m first, then use one point.</li>
              <li><b>Intercepts:</b> x-intercept from y = 0; y-intercept from x = 0. Intercept form: x/a + y/b = 1.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Line through (0, 4) with gradient −2: y = −2x + 4. x-intercept: 0 = −2x + 4 → x = 2 → <b>(2, 0)</b>.</div>
            <div class="worked"><b>Worked example:</b> Line through (1, 1) and (3, 7): m = 3; y − 1 = 3(x − 1) → <b>y = 3x − 2</b>.</div>

            <h3>6. Examiner's favourites</h3>
            <ul>
              <li>"Find k so that (1, 2), (3, 4), (k, 8) are collinear" — equal gradients between pairs: (4−2)/(3−1) = 1; (8−4)/(k−3) = 1 → k − 3 = 4 → <b>k = 7</b>.</li>
              <li>"Show the triangle is right-angled" — two gradients multiply to −1.</li>
              <li>"Line parallel to 2y = 6x − 5 through (0, 1)" — m = 3 → y = 3x + 1.</li>
            </ul>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Subtracting coordinates in different orders for x and y — keep (second − first) for both.</li>
              <li>Reading the gradient of 2y = 6x − 5 as 6 — divide through first: m = 3.</li>
              <li>Using m1 × m2 = 1 for perpendicular instead of −1.</li>
              <li>Swapping x and y in the ordered pair.</li>
              <li>Forgetting a horizontal line has gradient 0 and a vertical line has <b>no</b> gradient.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> rewrite every given line into y = mx + c on the first line of your answer. Half of coordinate errors die right there.</div>
          
            <h3>Deep dive: area of a triangle from coordinates</h3>
            <div class="formula">Area = (1/2) | x1(y2 − y3) + x2(y3 − y1) + x3(y1 − y2) |  (take the absolute value)</div>
            <div class="worked"><b>Worked example:</b> A(1, 1), B(4, 1), C(1, 5): Area = (1/2)|1(1−5) + 4(5−1) + 1(1−1)| = (1/2)|−4 + 16 + 0| = <b>6 square units</b>. (Check: right triangle, legs 3 and 4 → (1/2)(3)(4) = 6 ✓.)</div>
            <p>If the area comes out <b>zero</b>, the three points are <b>collinear</b> — that is the examiner's favourite disguise of a collinearity question.</p>

            <h3>Deep dive: dividing a segment in a ratio</h3>
            <p>A point P dividing AB in the ratio m : n (from A) has coordinates ((n·x1 + m·x2)/(m + n), (n·y1 + m·y2)/(m + n)). The midpoint is just m : n = 1 : 1.</p>
            <div class="worked"><b>Worked example:</b> P divides A(2, 3) and B(8, 9) in ratio 2 : 1. P = ((1×2 + 2×8)/3, (1×3 + 2×9)/3) = (18/3, 21/3) = <b>(6, 7)</b>.</div>

            <h3>Deep dive: combining the tools (exam medley)</h3>
            <div class="worked"><b>Q1.</b> Line L1: 3y = 6x − 9 and L2 through (0, 2) perpendicular to L1. m1 = 2 → m2 = −1/2 → L2: <b>y = −x/2 + 2</b>.</div>
            <div class="worked"><b>Q2.</b> Show (0, 0), (4, 0), (0, 3) form a right triangle: gradients of the two legs are 0 (horizontal) and undefined (vertical) → perpendicular; or use area formula → 6 = (1/2)(4)(3) ✓.</div>
            <div class="worked"><b>Q3.</b> Find the point on the x-axis equidistant from (2, 3) and (5, 1): let P(k, 0); (k−2)^2 + 9 = (k−5)^2 + 1 → −4k + 13 = −10k + 26 → 6k = 13 → k = <b>13/6</b>.</div>
            <div class="tip"><b>Exam tip:</b> "equidistant" always means set the two distance-squares equal and let the squares cancel into a linear equation — never take square roots.</div>
`,
          cards: [
            { q: 'How are coordinates written, and what is the origin?', a: 'As an ordered pair (x, y) — x across, y up — measured from the origin (0, 0) where the axes cross; the four quadrants are numbered anticlockwise from top-right.' },
            { q: 'Find the midpoint of (2, 3) and (8, 7).', a: 'Midpoint = ((x1 + x2)/2, (y1 + y2)/2) = (5, 5) — the average of each coordinate.' },
            { q: 'Find the distance between (1, 2) and (4, 6).', a: 'sqrt((4 - 1)^2 + (6 - 2)^2) = sqrt(9 + 16) = 5 — Pythagoras on the coordinate grid.' },
            { q: 'Write the gradient formula and find the gradient through (1, 3) and (5, 11).', a: 'm = (y2 - y1)/(x2 - x1) = (11 - 3)/(5 - 1) = 2 — \'rise over run\'.' },
            { q: 'Write the gradient-intercept form of a straight line and identify m and c in y = 3x - 4.', a: 'y = mx + c, where m is the gradient (3) and c the y-intercept (-4) — the point where the line crosses the y-axis.' },
            { q: 'What are the gradient conditions for parallel and perpendicular lines?', a: 'Parallel lines have equal gradients (m1 = m2); perpendicular lines have m1 x m2 = -1 (e.g. 2 and -1/2).' },
            { q: 'Find the equation of the line through (1, 2) with gradient 3.', a: 'y - 2 = 3(x - 1), so y = 3x - 1 — use y - y1 = m(x - x1) and simplify.' },
            { q: 'Find the gradient of 2y + 4x = 10.', a: 'Rearrange: y = -2x + 5, so m = -2 — always make y the subject first.' },
            { q: 'What are the x- and y-intercepts of 3x + 2y = 12?', a: 'x-intercept: set y = 0, x = 4 (point (4, 0)); y-intercept: set x = 0, y = 6 (point (0, 6)).' },
            { q: 'Find the equation of the line through (2, 1) and (6, 9).', a: 'Gradient = 8/4 = 2; y - 1 = 2(x - 2) gives y = 2x - 3.' },
            { q: 'When are three points collinear?', a: 'When they lie on one straight line — the gradient between each pair is equal, e.g. (0, 1), (1, 3), (2, 5) all give gradient 2.' },
            { q: 'How do you shade the region y > 2x + 1 on a graph?', a: 'Draw y = 2x + 1 as a DASHED line (points on it are not included; use solid for >=), then test (0, 0): 0 > 1 is false, so shade the side NOT containing the origin.' },
            { q: 'State the gradient formula and the forms of a straight line.', a: 'Gradient m = (y2 - y1)/(x2 - x1). Forms: y = mx + c (gradient-intercept), y - y1 = m(x - x1) (point-gradient), and ax + by + c = 0 (general form).' },
            { q: 'Give the midpoint and distance formulas.', a: 'Midpoint of (x1, y1) and (x2, y2) is ((x1+x2)/2, (y1+y2)/2). Distance is √((x2-x1)^2 + (y2-y1)^2) - Pythagoras in coordinates.' },
            { q: 'What are the conditions for parallel and perpendicular lines?', a: 'Parallel lines have equal gradients (m1 = m2). Perpendicular lines have gradients whose product is -1 (m1 x m2 = -1) - one is the negative reciprocal of the other.' }
          ],
          quiz: [
            { q: 'Find the gradient of the line through (1, 2) and (3, 8).', options: ['3', '1/3', '6', '2'], correct: 0,
              exp: 'Gradient = (8 - 2)/(3 - 1) = 6/2 = 3.' },
            { q: 'What is the gradient of y = 4x - 7?', options: ['4', '-7', '-4', '7'], correct: 0,
              exp: 'In y = mx + c the coefficient of x is the gradient, so m = 4.' },
            { q: 'Where does the line y = 3x + 5 cross the y-axis?', options: ['5', '3', '-5', '(0, 3)'], correct: 0,
              exp: 'The constant c in y = mx + c is the y-intercept: the line crosses at (0, 5).' },
            { q: 'A line parallel to y = 2x + 1 must have gradient...', options: ['2', '-2', '1/2', '-1/2'], correct: 0,
              exp: 'Parallel lines share the same gradient: m = 2.' },
            { q: 'For perpendicular lines, the product of their gradients is...', options: ['-1', '1', '0', 'undefined'], correct: 0,
              exp: 'If one gradient is m, the perpendicular gradient is -1/m, so m x (-1/m) = -1.' },
            { q: 'Find the midpoint of (2, 3) and (6, 7).', options: ['(4, 5)', '(8, 10)', '(3, 4)', '(4, 4)'], correct: 0,
              exp: 'Midpoint = average of each coordinate: ((2+6)/2, (3+7)/2) = (4, 5).' },
            { q: 'Find the distance between (0, 0) and (3, 4).', options: ['5', '7', '12', '25'], correct: 0,
              exp: 'Pythagoras: √(3^2 + 4^2) = √25 = 5 - the classic 3-4-5 triangle.' },
            { q: 'Find the equation of the line with gradient 3 passing through (1, 2).', options: ['y = 3x - 1', 'y = 3x + 1', 'y = 3x - 2', 'y = x + 3'], correct: 0,
              exp: 'y - 2 = 3(x - 1), so y = 3x - 3 + 2 = 3x - 1.' },
            { q: 'The gradient of a horizontal line is...', options: ['0', '1', 'undefined', '-1'], correct: 0,
              exp: 'No rise at all, so gradient 0. (A vertical line has undefined gradient.)' },
            { q: 'y - y1 = m(x - x1) is known as...', options: ['the point-gradient form', 'the intercept form', 'the two-point form only', 'the normal form'], correct: 0,
              exp: 'Given one point (x1, y1) and gradient m, plug straight into y - y1 = m(x - x1).' }
          ],
        },
        {
          title: 'Variation: Direct, Inverse, Joint & Partial',
          tags: ['Constant k', 'Joint variation', 'Partial variation'],
          summary: 'Translating "varies as" statements into equations and finding the constant.',
          content: `

            <h3>1. What variation means</h3>
            <p>When two quantities change together under a fixed rule, we say one <b>varies</b> as the other. The symbol ∝ reads "is proportional to". Every variation question has the same hidden job: <b>find the constant k</b> from the data given, then reuse k to answer the rest.</p>
            <div class="formula">y ∝ x → y = kx • y ∝ 1/x → y = k/x • y ∝ xz → y = kxz • y ∝ x + c (partial) → y = kx + c</div>
            <p>The constant k is called the <b>constant of proportionality</b>. You find it by substituting one complete pair of values (an x and its y) into the equation and solving.</p>
            <div class="worked"><b>Worked example:</b> y varies directly as x and y = 12 when x = 3. Find k and the equation.<br>
            y = kx → 12 = k(3) → k = 4, so <b>y = 4x</b>. Now y is known for any x: when x = 7, y = 28.</div>

            <h3>2. Direct variation</h3>
            <p>y varies <b>directly</b> as x when y = kx. The ratio y/x is always the same number k. Graphically this is a <b>straight line through the origin</b> with gradient k — if a line does not pass through (0, 0), the variation is partial, not direct.</p>
            <ul>
              <li><b>Money:</b> cost of eggs varies directly as the number of crates bought.</li>
              <li><b>Physics:</b> at constant resistance, voltage varies directly as current (Ohm's law).</li>
              <li><b>Maps & scale:</b> map distance varies directly as real distance.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> If y = 30 when x = 5, find y when x = 9.<br>
            k = y/x = 30/5 = 6, so y = 6x → y = 6(9) = <b>54</b>.</div>
            <div class="tip"><b>Exam tip:</b> "y varies directly as x" and "y is directly proportional to x" are the same statement. WAEC loves testing whether you know the graph must pass through the origin.</div>

            <h3>3. Inverse (indirect) variation</h3>
            <p>y varies <b>inversely</b> as x when y = k/x, i.e. the product xy = k stays constant. When one quantity doubles, the other halves. The graph is a <b>curve (hyperbola)</b> that never touches either axis.</p>
            <div class="worked"><b>Worked example:</b> y varies inversely as x and y = 8 when x = 3. Find y when x = 6.<br>
            k = xy = 24, so y = 24/x → y = 24/6 = <b>4</b>. (x doubled, so y halved — a good sanity check.)</div>
            <div class="worked"><b>Worked example (JAMB style):</b> If y = k/x and y = 5 when x = 2, find x when y = 25.<br>
            k = 10 → 25 = 10/x → x = 10/25 = <b>0.4</b>.</div>
            <ul>
              <li><b>Speed & time:</b> for a fixed distance, time varies inversely as speed.</li>
              <li><b>Workers & days:</b> for a fixed job, time varies inversely as the number of workers.</li>
              <li><b>Boyle's law:</b> at constant temperature, gas pressure varies inversely as volume.</li>
            </ul>

            <h3>4. Joint variation</h3>
            <p>y varies <b>jointly</b> as x and z when y = kxz — y depends on two quantities at once. Powers can join in too: "y varies directly as x and inversely as the square of z" means y = kx/z^2.</p>
            <div class="worked"><b>Worked example:</b> y varies jointly as x and z. y = 24 when x = 2 and z = 3. Find y when x = 5, z = 4.<br>
            24 = k(2)(3) → k = 4. Then y = 4(5)(4) = <b>80</b>.</div>
            <div class="worked"><b>Worked example with powers:</b> y ∝ x/z^2; y = 9 when x = 12, z = 2. Find y when x = 8, z = 4.<br>
            9 = k(12)/4 → k = 3. Then y = 3(8)/16 = <b>1.5</b>.</div>
            <div class="tip"><b>Translation drill:</b> "the square of", "the cube of", "the square root of" become x^2, x^3, √x inside the k-equation. Translate the sentence first, substitute second.</div>

            <h3>5. Partial variation</h3>
            <p>y varies <b>partially</b> as x when there is a fixed standing charge: y = kx + c. The graph is a straight line that <b>does not</b> pass through the origin — c is the y-intercept. You need <b>two pairs of data</b> to find the two unknowns k and c (simultaneous equations).</p>
            <div class="worked"><b>Worked example:</b> A taxi fare F = kd + c where d is distance in km. A 4 km trip costs ₦700 and a 9 km trip costs ₦1200. Find the fare for 15 km.<br>
            700 = 4k + c and 1200 = 9k + c. Subtracting: 500 = 5k → k = 100, c = 700 - 400 = 300.<br>
            F = 100(15) + 300 = <b>₦1,800</b>. (c = ₦300 is the flag-fall price before moving.)</div>
            <ul>
              <li>Salary = basic + commission per sale.</li>
              <li>Electricity bill = standing charge + cost per unit.</li>
              <li>Phone plan = monthly fee + charge per minute.</li>
            </ul>

            <h3>6. Percentage and ratio reasoning</h3>
            <p>Because direct variation is linear, percentage changes transfer directly: if x increases by 20%, y increases by 20%. For inverse variation, if x becomes <b>n</b> times bigger, y becomes <b>1/n</b> of its value. For y ∝ x^2, doubling x multiplies y by 4; for y ∝ x^3, by 8.</p>
            <div class="worked"><b>Worked example:</b> y ∝ x^2 and y = 18 when x = 3. Find y when x = 6.<br>
            x doubled, so y becomes 4 × 18 = <b>72</b>. (Check: k = 18/9 = 2, y = 2(36) = 72 ✓.)</div>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Writing y = kx for an <b>inverse</b> statement — always convert the sentence to an equation before substituting.</li>
              <li>Using one data pair for <b>partial</b> variation — two unknowns (k and c) need two pairs.</li>
              <li>Forgetting powers: "inversely as the <b>square</b> of x" is y = k/x^2, not k/x.</li>
              <li>Assuming a straight-line graph means direct variation — only lines <b>through the origin</b> do.</li>
              <li>Mixing up which value is x and which is y when substituting to find k.</li>
            </ul>

            <h3>Deep dive: examiner's favourites</h3>
            <p><b>Favourite 1 — table completion:</b> given y ∝ 1/x with one complete column, complete the table. Find k once (k = xy) and reuse it for every blank.</p>
            <p><b>Favourite 2 — connecting three variables:</b> "y varies directly as x; x varies inversely as z. How does y vary with z?" Substitute: y = kx and x = m/z, so y = km/z — y varies <b>inversely</b> as z. Chain the equations instead of guessing.</p>
            <p><b>Favourite 3 — real data:</b> NECO gives a fare/charge story and asks for the constants and a prediction — that is partial variation with simultaneous equations, exactly like the taxi example above.</p>
            <div class="tip"><b>Speed trick:</b> for direct variation between two states, skip k entirely: y2 = y1 × (x2/x1). For inverse: y2 = y1 × (x1/x2). Ratio methods save a full minute per question.</div>
          `,
          cards: [
            { q: 'What is direct variation? Write its equation.', a: 'y varies directly as x when y = kx (k is the constant of variation) — doubling x doubles y; the graph is a straight line through the origin.' },
            { q: 'If y varies directly as x and y = 12 when x = 4, find y when x = 7.', a: 'k = 12/4 = 3, so y = 3x and y = 21 when x = 7.' },
            { q: 'What is inverse variation? Give a real example.', a: 'y = k/x — y falls as x rises; e.g. for a fixed journey, time taken varies inversely as speed.' },
            { q: 'If y varies inversely as x and y = 6 when x = 5, find y when x = 15.', a: 'k = 6 x 5 = 30, so y = 30/15 = 2 — tripling x divides y by 3.' },
            { q: 'What is joint variation? Write an example equation.', a: 'One quantity depends on two or more others at once, e.g. y varies jointly as x and z: y = kxz (or y = kx/z for mixed variation).' },
            { q: 'Write the equation for partial variation.', a: 'y = a + bx — part of y is constant (a) and part varies with x; e.g. a taxi fare = fixed charge + rate per km.' },
            { q: 'If y varies as the square of x and y = 36 when x = 3, find y when x = 5.', a: 'k = 36/9 = 4, so y = 4x^2 and y = 4 x 25 = 100.' },
            { q: 'The cost of a school trip varies partly as a fixed cost and partly with the number of students. It costs ₦4,400 for 20 students and ₦5,600 for 35. Find the formula.', a: 'Let C = a + bn: 4400 = a + 20b and 5600 = a + 35b; subtracting gives 15b = 1200, b = 80, a = 2800, so C = 2800 + 80n.' },
            { q: 'If y varies directly as x and inversely as z, write the equation and find y when x = 6, z = 3, given y = 8 when x = 2, z = 4.', a: 'y = kx/z; k = 8 x 4/2 = 16, so y = 16 x 6/3 = 32.' },
            { q: 'A car travels a fixed distance. If the speed doubles, what happens to the time?', a: 'It halves — time varies inversely as speed (t = distance/speed), so doubling speed multiplies time by 1/2.' },
            { q: 'What shape is the graph of inverse variation?', a: 'A curve (a rectangular hyperbola) in the first quadrant that gets closer to both axes without touching them — not a straight line.' },
            { q: 'The mass of a wire varies directly as its length. A 15 m wire has mass 6 kg. Find the mass of 25 m.', a: 'k = 6/15 = 0.4 kg/m, so mass = 0.4 x 25 = 10 kg.' },
            { q: 'State the four types of variation with their equations.', a: 'Direct: y = kx. Inverse: y = k/x. Joint: z = kxy (or with more variables). Partial: y = a + bx - part constant, part proportional.' },
            { q: 'How do you solve any variation problem?', a: 'Step 1: write the equation with k (e.g. y = kx). Step 2: substitute the given pair of values and solve for k. Step 3: rewrite the full equation and substitute the new value to find the answer.' },
            { q: 'What is partial variation?', a: 'A quantity that is partly a fixed constant and partly proportional to a variable: y = a + bx. Its graph is a straight line crossing the y-axis at a, not through the origin.' }
          ],
          quiz: [
            { q: 'If y varies directly as x, the equation connecting them is...', options: ['y = kx', 'y = k/x', 'y = kx^2', 'y = k + x'], correct: 0,
              exp: 'Direct variation means y grows in proportion to x: y = kx, where k is the constant.' },
            { q: 'y varies directly as x. If y = 12 when x = 4, find y when x = 7.', options: ['21', '28', '18', '24'], correct: 0,
              exp: 'k = 12/4 = 3, so y = 3x and y = 3 x 7 = 21.' },
            { q: 'If y varies inversely as x, the equation is...', options: ['y = k/x', 'y = kx', 'y = kx^2', 'y = x/k'], correct: 0,
              exp: 'Inverse variation: as one doubles the other halves - y = k/x, or equivalently xy = k.' },
            { q: 'y varies inversely as x. If y = 10 when x = 2, find y when x = 5.', options: ['4', '25', '8', '50'], correct: 0,
              exp: 'k = xy = 20, so y = 20/5 = 4.' },
            { q: 'If z varies jointly as x and y, the equation is...', options: ['z = kxy', 'z = kx/y', 'z = k(x + y)', 'z = k/x y'], correct: 0,
              exp: 'Joint variation means z is proportional to the product: z = kxy.' },
            { q: 'z varies jointly as x and y. If z = 12 when x = 2 and y = 3, find z when x = 4 and y = 5.', options: ['40', '20', '24', '30'], correct: 0,
              exp: 'k = 12/(2x3) = 2, so z = 2xy = 2 x 4 x 5 = 40.' },
            { q: 'Partial variation has the general form...', options: ['y = a + bx', 'y = kx', 'y = k/x', 'y = kxy'], correct: 0,
              exp: 'y is partly constant (a) and partly proportional to x (bx) - the graph is a straight line not through the origin.' },
            { q: 'y is partly constant and partly varies directly as x. If y = 7 when x = 2 and y = 11 when x = 4, find y when x = 6.', options: ['15', '13', '17', '14'], correct: 0,
              exp: 'Two equations: a + 2b = 7 and a + 4b = 11, so b = 2 and a = 3. Then y = 3 + 2(6) = 15.' },
            { q: 'The constant k in a variation equation is called the...', options: ['constant of proportionality', 'gradient only', 'intercept', 'variable'], correct: 0,
              exp: 'k is the constant of proportionality - find it first from the given values, then reuse it.' },
            { q: 'The graph of direct variation is...', options: ['a straight line through the origin', 'a curve', 'a horizontal line', 'a straight line with intercept'], correct: 0,
              exp: 'y = kx has no constant term, so it passes through (0, 0) with gradient k.' }
          ],
        }
      ],
      SS3: [
        {
          title: 'Calculus: Differentiation & Integration',
          tags: ['Power rule', 'Maxima & minima', 'Area under a curve'],
          summary: 'Differentiation gives gradients and turning points; integration gives areas.',
          content: `
            <h3>Differentiation (the power rule)</h3>
            <div class="formula">d/dx (a·xⁿ) = a·n·xⁿ⁻^1   •   d/dx(constant) = 0   •   d/dx(x) = 1</div>
            <div class="worked"><b>Worked example:</b> y = 3x^3 - 4x^2 + 7x - 2 → dy/dx = <b>9x^2 - 8x + 7</b>.</div>
            <h3>Turning points (maxima &amp; minima)</h3>
            <p>Set dy/dx = 0 and solve for x. Then check the second derivative: d^2y/dx^2 &gt; 0 → minimum; d^2y/dx^2 &lt; 0 → maximum.</p>
            <div class="worked"><b>Worked example:</b> y = x^2 - 6x + 5 → dy/dx = 2x - 6 = 0 → x = 3. d^2y/dx^2 = 2 &gt; 0 → minimum at (3, -4).</div>
            <h3>Integration</h3>
            <div class="formula">∫ a·xⁿ dx = a·xⁿ⁺^1/(n+1) + C  (n != -1)<br>
            Area between x = a and x = b = ∫ₐᵇ y dx</div>
            <div class="worked"><b>Worked example:</b> ∫0^2 3x^2 dx = [x^3]0^2 = 8 - 0 = <b>8 square units</b>.</div>
            <div class="tip"><b>Exam tip:</b> "The rate of change of …" always means differentiate. "The area enclosed by …" always means integrate.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Find the gradient of y = x^3 - 4x + 1 at x = 2.<br>
            dy/dx = 3x^2 - 4, so at x = 2 the gradient is 12 - 4 = <b>8</b>.</div>
            <div class="worked"><b>Q2.</b> The volume of a cube is increasing at 6 cm^3/s. How fast is the side increasing when the side is 2 cm?<br>
            V = x^3, so dV/dt = 3x^2 dx/dt → 6 = 3(4) dx/dt → dx/dt = <b>0.5 cm/s</b>.</div>
            <div class="worked"><b>Q3.</b> Find the area bounded by y = 2x, the x-axis, x = 1 and x = 3.<br>
            ∫1^3 2x dx = [x^2]1^3 = 9 - 1 = <b>8 square units</b>.</div>
            <div class="worked"><b>Q4.</b> A rectangular field is fenced with 40 m of wire. What dimensions give the greatest area?<br>
            Let the sides be x and (20 - x). A = x(20 - x) = 20x - x^2. dA/dx = 20 - 2x = 0 → x = 10.<br>
            So the field is a <b>10 m square</b>, with area 100 m^2.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Forgetting the constant of integration <b>+ C</b> in an indefinite integral — it is a mark.</li>
              <li>Differentiating a constant as x instead of 0.</li>
              <li>Using the second-derivative test backwards: d^2y/dx^2 &gt; 0 is a <b>minimum</b>.</li>
              <li>Integrating 1/x as x^0/0. The correct result is ln x.</li>
            </ul>
            <h3>Worked example: partial variation, the full method</h3>
            <p><b>y is partly constant and partly varies directly as x. When x = 2, y = 11; when x = 5, y = 20. Find y when x = 8.</b></p>
            <ol>
              <li>"Partly constant, partly direct" means <b>y = a + bx</b>.</li>
              <li>Two simultaneous equations: 11 = a + 2b and 20 = a + 5b.</li>
              <li>Subtract: 9 = 3b → b = 3; substitute: a = 11 - 6 = 5.</li>
              <li>So y = 5 + 3x; when x = 8: y = 5 + 24 = <b>29</b>.</li>
            </ol>
            <p>The same skeleton solves every variation story: <b>translate the words into y = k(...)</b>, use the given data to pin down the constant(s), then evaluate. Direct: y = kx; inverse: y = k/x; joint: y = kxz; partial: y = a + bx.</p>

            <h3>Deep dive: the two engine rules</h3>
            <div class="formula">d/dx (xⁿ) = nxⁿ⁻^1 &nbsp;&nbsp;·&nbsp;&nbsp; ∫ xⁿ dx = xⁿ⁺^1/(n+1) + c (n != -1)</div>
            <p>Differentiation gives the <b>gradient</b> of a curve at any point; integration reverses it and gives <b>area</b>. Both work term by term; a constant differentiates to 0 and integrates to cx.</p>
            <h3>Worked examples, step by step</h3>
            <ol>
              <li><b>Differentiate y = 3x^3 - 2x^2 + 5x - 7:</b> dy/dx = <b>9x^2 - 4x + 5</b>. At x = 1 the gradient is 9 - 4 + 5 = 10.</li>
              <li><b>Max/min of y = x^2 - 4x + 3:</b> dy/dx = 2x - 4 = 0 → x = 2; y = 4 - 8 + 3 = <b>-1</b>. Second derivative = 2 &gt; 0, so (2, -1) is a <b>minimum</b>.</li>
              <li><b>∫ (6x^2 - 4x) dx</b> = 2x^3 - 2x^2 + c.</li>
              <li><b>Definite: ∫0^2 2x dx</b> = [x^2]0^2 = 4 - 0 = <b>4</b> — the area under the line y = 2x from 0 to 2.</li>
            </ol>
            <h3>Applications WAEC loves</h3>
            <p>Maximum area of a fenced enclosure, minimum cost of a box, velocity from a distance–time relation (v = ds/dt) and acceleration (a = dv/dt): s = t^2 + 3t → v = 2t + 3 → a = 2. Set dy/dx = 0 for stationary points; the sign of d^2y/dx^2 classifies them (+ minimum, - maximum).</p>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Omitting the <b>+ c</b> on indefinite integrals — it is a mark, every time.</li>
              <li>Confusing minimum with maximum: check the second derivative or sketch.</li>
              <li>Definite integrals: substitute the <b>upper limit first</b>, then subtract the lower — order matters when signs mix.</li>
            </ul>

          `,
          cards: [
            { q: 'What does dy/dx represent geometrically?', a: 'The gradient of the curve (slope of the tangent) at any point — and physically, a rate of change, such as velocity when y is distance and x is time.' },
            { q: 'Differentiate y = 4x^3 - 5x^2 + 2x - 7.', a: 'dy/dx = 12x^2 - 10x + 2 — multiply each term\'s coefficient by its power, then reduce the power by 1; constants vanish.' },
            { q: 'State the rule for differentiating x^n and give two special cases.', a: 'd/dx (x^n) = n x^(n-1); special cases: d/dx (constant) = 0 and d/dx (x) = 1.' },
            { q: 'Find the gradient of y = x^2 + 3x at the point where x = 2.', a: 'dy/dx = 2x + 3, so at x = 2 the gradient is 7.' },
            { q: 'How do you find stationary points, and how do you classify them?', a: 'Set dy/dx = 0 and solve for x. The second derivative decides: d2y/dx2 > 0 means a minimum, < 0 a maximum.' },
            { q: 'Find the turning point of y = x^2 - 6x + 5 and say whether it is a maximum or minimum.', a: 'dy/dx = 2x - 6 = 0 gives x = 3, y = -4; d2y/dx2 = 2 > 0, so (3, -4) is a minimum point.' },
            { q: 'State the rule for integrating x^n.', a: 'Integral x^n dx = x^(n+1)/(n+1) + c for n not equal to -1 — integration is the reverse of differentiation; always add the constant c.' },
            { q: 'Evaluate the integral of (6x^2 + 4x - 3) dx.', a: '2x^3 + 2x^2 - 3x + c.' },
            { q: 'Evaluate the definite integral of 2x dx between x = 1 and x = 3.', a: '[x^2] from 1 to 3 = 9 - 1 = 8 — no constant is needed for a definite integral, and it equals the area under y = 2x between those limits.' },
            { q: 'A particle moves so that s = t^3 - 3t (metres). Find its velocity and acceleration at t = 2 s.', a: 'v = ds/dt = 3t^2 - 3, so v = 9 m/s at t = 2; a = dv/dt = 6t, so a = 12 m/s2.' },
            { q: 'A farmer has 40 m of fencing for a rectangular pen against a straight wall (no fencing needed on the wall). Show the maximum area is 200 m2.', a: 'Let the width be x: length = 40 - 2x, A = x(40 - 2x) = 40x - 2x^2; dA/dx = 40 - 4x = 0 gives x = 10, A = 10 x 20 = 200 m2 (a maximum since d2A/dx2 = -4 < 0).' },
            { q: 'Differentiate y = 4x^3 + 2x.', a: "dy/dx = 12x^2 + 2 using the power rule d/dx(xⁿ) = n·xⁿ⁻^1." },
            { q: 'State the power rule for differentiation.', a: 'If y = axⁿ, then dy/dx = anxⁿ⁻^1: multiply by the power and subtract 1 from it. Differentiate polynomials term by term, and constants become 0.' },
            { q: 'How do you find maximum and minimum points?', a: 'Set dy/dx = 0 and solve for x. Then check the nature: if the second derivative is negative it is a maximum; if positive, a minimum.' },
            { q: 'What does integration do?', a: 'Integration reverses differentiation - it recovers y from dy/dx. For axⁿ, integrate to axⁿ⁺^1/(n+1) and always add the constant C, since many curves share the same gradient.' }
          ],
          quiz: [
            { q: 'Differentiate y = x^5.', options: ['5x^4', 'x^4', '5x^6', '4x^5'], correct: 0,
              exp: 'Power rule: multiply by the power, then reduce the power by 1 - 5x^4.' },
            { q: 'Find the gradient of y = x^2 at the point where x = 3.', options: ['6', '9', '3', '12'], correct: 0,
              exp: 'dy/dx = 2x, and at x = 3 the gradient is 2 x 3 = 6.' },
            { q: 'At a turning point of a curve, dy/dx equals...', options: ['0', '1', 'the maximum value', 'infinity'], correct: 0,
              exp: 'The tangent is horizontal at a turning point, so the gradient - dy/dx - is zero.' },
            { q: 'Find the x-coordinate of the maximum point of y = -x^2 + 4x.', options: ['2', '4', '-2', '0'], correct: 0,
              exp: 'dy/dx = -2x + 4 = 0 gives x = 2. The negative x^2 confirms it is a maximum.' },
            { q: 'Integrate: ∫2x dx = ...', options: ['x^2 + C', '2x^2 + C', 'x + C', '2 + C'], correct: 0,
              exp: 'Raise the power by 1 and divide by the new power: 2x^2/2 = x^2, plus the constant C.' },
            { q: 'Integrate: ∫(3x^2 + 1) dx = ...', options: ['x^3 + x + C', '3x^3 + x + C', '6x + C', 'x^3 + 1 + C'], correct: 0,
              exp: 'Integrate term by term: 3x^3/3 + x = x^3 + x, plus C.' },
            { q: 'The derivative of a function measures its...', options: ['rate of change (gradient)', 'area', 'maximum value', 'roots'], correct: 0,
              exp: 'dy/dx tells you how fast y changes as x changes - the gradient of the curve at any point.' },
            { q: 'Differentiate y = 7.', options: ['0', '7', '1', '7x'], correct: 0,
              exp: 'A constant never changes, so its rate of change - the derivative - is 0.' },
            { q: 'Integrate: ∫x^4 dx = ...', options: ['x^5/5 + C', '5x^5 + C', '4x^3 + C', 'x^5 + C'], correct: 0,
              exp: 'Add 1 to the power and divide by it: x^5/5, plus the constant of integration C.' },
            { q: 'Find dy/dx for y = 6x.', options: ['6', 'x', '3x^2', '6x'], correct: 0,
              exp: 'Power rule on 6x^1: 6 x 1 x x^0 = 6. A straight line has constant gradient 6.' }
          ],
        },
        {
          title: 'Probability & Statistics',
          tags: ['Mutually exclusive', 'Independent events', 'Mean & SD'],
          summary: 'Addition and multiplication rules, plus mean, median and standard deviation.',
          content: `

            <h3>1. Summarising data: mean, median, mode</h3>
            <ul>
              <li><b>Mean:</b> total ÷ number of values.</li>
              <li><b>Median:</b> the middle value when sorted (average of the two middles if even count).</li>
              <li><b>Mode:</b> the most frequent value.</li>
              <li><b>Range:</b> largest − smallest.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Data: 3, 7, 7, 9, 4. Sorted: 3, 4, 7, 7, 9. Mean = 30/5 = 6; median = 7; mode = 7; range = 6.</div>
            <div class="worked"><b>Worked example (frequency table):</b> Scores 1, 2, 3 with frequencies 2, 5, 3. Mean = (1×2 + 2×5 + 3×3)/(2+5+3) = (2 + 10 + 9)/10 = <b>2.1</b>. Median = average of 5th and 6th values = (2+3)/2 = 2.5.</div>

            <h3>2. Pie charts — the angle arithmetic</h3>
            <div class="formula">Sector angle = (frequency ÷ total) × 360</div>
            <div class="worked"><b>Worked example:</b> A family spends ₦12,000 of a ₦48,000 budget on food. Food angle = 12,000/48,000 × 360 = <b>90 degrees</b>.</div>

            <h3>3. Probability basics</h3>
            <p>Probability measures how likely an event is, on a scale from <b>0 (impossible) to 1 (certain)</b>. For equally likely outcomes:</p>
            <div class="formula">P(event) = number of favourable outcomes ÷ total outcomes</div>
            <div class="worked"><b>Worked example:</b> A fair die: P(even) = 3/6 = <b>1/2</b>; P(greater than 4) = 2/6 = 1/3.</div>
            <div class="worked"><b>Worked example:</b> A bag has 3 red and 5 blue balls. P(red) = <b>3/8</b>.</div>

            <h3>4. The three rules that carry every exam</h3>
            <ul>
              <li><b>Complement:</b> P(not A) = 1 − P(A). "At least one" questions love this.</li>
              <li><b>Addition (mutually exclusive):</b> P(A or B) = P(A) + P(B) when both cannot happen together.</li>
              <li><b>Multiplication (independent):</b> P(A and B) = P(A) × P(B) when one result does not affect the other.</li>
            </ul>
            <div class="worked"><b>Worked example (complement):</b> P(rain) = 0.35 → P(no rain) = <b>0.65</b>.</div>
            <div class="worked"><b>Worked example (addition):</b> Die: P(2 or 5) = 1/6 + 1/6 = <b>1/3</b>.</div>
            <div class="worked"><b>Worked example (multiplication):</b> Two fair coins: P(two heads) = 1/2 × 1/2 = <b>1/4</b>. Sample space {HH, HT, TH, TT} confirms it.</div>
            <div class="worked"><b>Worked example (without replacement — dependent!):</b> From 3 red + 5 blue, two reds in a row without replacement: 3/8 × 2/7 = <b>6/56 = 3/28</b>. The second draw's odds change — multiplication still works, but with updated numbers.</div>

            <h3>5. Examiner's favourites</h3>
            <ul>
              <li>"Probability that the sum of two dice is 7" — list the 6 favourable pairs out of 36 → 1/6.</li>
              <li>"At least one head in two throws" — 1 − P(no heads) = 1 − 1/4 = 3/4.</li>
              <li>Pie-chart angles both ways (angle → frequency and frequency → angle).</li>
            </ul>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Writing a probability above 1 or below 0 — instant mark loss.</li>
              <li>Adding probabilities of events that can happen together (double counting).</li>
              <li>Using 1/2 × 1/2 for draws <b>without replacement</b> — the second fraction must shrink.</li>
              <li>Forgetting to sort data before finding the median.</li>
              <li>Using the wrong total in a frequency table (sum of frequencies, not of values).</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> see "at least" → complement. See "or" between exclusive events → add. See "and/together/successive independent" → multiply. Three keywords, three rules.</div>
          
            <h3>Deep dive: grouped data and cumulative frequency</h3>
            <ul>
              <li><b>Mean of grouped data:</b> use class <b>midpoints</b> x: mean = Σ(f·x)/Σf.</li>
              <li><b>Cumulative frequency:</b> running totals; the median is the value at the (n/2)th position, read from the table or the ogive (cumulative frequency curve).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Marks 10, 20, 30 with frequencies 2, 3, 5. Midpoints are the marks themselves: mean = (20 + 60 + 150)/10 = <b>23</b>. Cumulative: 2, 5, 10; n/2 = 5 → the 5th value lies in the 20 class → median = <b>20</b>.</div>

            <h3>Deep dive: two dice — the 36-cell grid</h3>
            <p>Half of all probability questions are two dice in costume. Memorise the grid facts: 36 equally likely outcomes; sum 7 appears <b>6</b> ways (1/6); sum 6 and 8 appear 5 ways each; doubles appear 6 ways (1/6).</p>
            <div class="worked"><b>Worked example:</b> P(sum ≥ 10) = (3 + 2 + 1)/36 = 6/36 = <b>1/6</b> (sums 10, 11, 12 give 3, 2, 1 ways).</div>
            <div class="worked"><b>Worked example (tree thinking):</b> A box has 2 red, 3 blue. Draw one, replace it, draw again. P(same colour) = P(RR) + P(BB) = (2/5)(2/5) + (3/5)(3/5) = 4/25 + 9/25 = <b>13/25</b>. With replacement = independent; add the mutually exclusive "same" paths.</div>

            <h3>Deep dive: reading charts back to numbers</h3>
            <div class="worked"><b>Worked example:</b> A pie chart of 90 students shows Mathematics at 120 degrees. How many chose Maths? 120/360 × 90 = <b>30</b>. The reverse direction is tested just as often as the forward one.</div>
            <div class="tip"><b>Exam tip:</b> when a question says "two are chosen", immediately write whether it is <b>with</b> or <b>without replacement</b> — that single word decides the second fraction.</div>
`,
          cards: [
            { q: 'Define probability and state its range.', a: 'P(event) = number of favourable outcomes / total number of equally likely outcomes; it always lies between 0 (impossible) and 1 (certain).' },
            { q: 'State the complement rule.', a: 'P(not A) = 1 - P(A) — e.g. if P(rain) = 0.35, then P(no rain) = 0.65.' },
            { q: 'A fair die is thrown. Find P(even number) and P(prime number).', a: 'Even: 2, 4, 6 so P = 3/6 = 1/2. Prime: 2, 3, 5 so P = 3/6 = 1/2 (note 2 is both even and prime — 1 is not prime).' },
            { q: 'State the addition law for mutually exclusive events.', a: 'If A and B cannot both happen, P(A or B) = P(A) + P(B) — e.g. rolling a 2 or a 5: 1/6 + 1/6 = 1/3.' },
            { q: 'State the multiplication law for independent events.', a: 'If A and B do not affect each other, P(A and B) = P(A) x P(B) — e.g. two heads on two coins: 1/2 x 1/2 = 1/4.' },
            { q: 'A bag has 4 red and 6 blue balls. Two are drawn without replacement. Find P(both red).', a: '4/10 x 3/9 = 12/90 = 2/15 — after the first red ball the bag holds 3 reds and 9 balls in total.' },
            { q: 'Find the mean, median and mode of 3, 7, 3, 9, 8.', a: 'Mean = 30/5 = 6; ordered 3, 3, 7, 8, 9 so median = 7; mode = 3 (occurs most).' },
            { q: 'How do you find the mean from a frequency table?', a: 'Mean = Σ(fx)/Σf — multiply each value by its frequency, add, and divide by the total frequency.' },
            { q: 'In a pie chart, a class of 15 out of 60 students is represented. What is its sector angle?', a: '15/60 x 360 = 90 deg — angles are (frequency/total) x 360.' },
            { q: 'What is the difference between experimental and theoretical probability?', a: 'Theoretical is calculated from reasoning (P(head) = 1/2); experimental is found by actually performing trials (heads/total tosses) — it approaches the theoretical value as trials increase.' },
            { q: 'State the range of a data set and find it for 4, 9, 2, 11, 7.', a: 'Range = highest - lowest = 11 - 2 = 9 — a quick measure of spread.' },
            { q: 'When is a tree diagram the best tool?', a: 'For multi-stage experiments (two coins, two draws) — multiply along the branches for \'and\', add between branch ends for \'or\'.' },
            { q: 'P(A and B) for independent events?', a: 'P(A and B) = P(A) × P(B) — when two events are independent (one does not affect the other), multiply their probabilities: e.g. two heads in a row = 1/2 × 1/2 = 1/4.' },
            { q: 'State the addition and multiplication rules of probability.', a: 'Mutually exclusive events (either/or): P(A or B) = P(A) + P(B). Independent events (both, one after the other): P(A and B) = P(A) x P(B).' },
            { q: 'Define mean, median, mode and range.', a: 'Mean: sum of values divided by how many there are. Median: the middle value when ordered. Mode: the most frequent value. Range: highest minus lowest - a quick measure of spread.' }
          ],
          quiz: [
            { q: 'A fair die is thrown once. What is the probability of obtaining a 5?', options: ['1/6', '1/5', '5/6', '1/36'], correct: 0,
              exp: 'One favourable outcome out of six equally likely faces: P = 1/6.' },
            { q: 'A coin is tossed once. What is the probability of NOT getting a head?', options: ['1/2', '1', '0', '1/4'], correct: 0,
              exp: 'P(not head) = 1 - P(head) = 1 - 1/2 = 1/2. Probabilities of an event and its complement always add to 1.' },
            { q: 'Two fair dice are thrown. What is the probability that the sum is 7?', options: ['1/6', '1/12', '7/36', '1/36'], correct: 0,
              exp: 'Six of the 36 equally likely pairs sum to 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1): 6/36 = 1/6.' },
            { q: 'Probability values always lie between...', options: ['0 and 1', '-1 and 1', '0 and 100 only', '1 and 10'], correct: 0,
              exp: '0 means impossible, 1 means certain; every probability lies in that range. Percentages are just these scaled by 100.' },
            { q: 'Find the mean of 2, 4, 6, 8, 10.', options: ['6', '5', '7', '30'], correct: 0,
              exp: 'Sum = 30, count = 5, so mean = 30/5 = 6.' },
            { q: 'Find the median of 3, 7, 2, 9, 4.', options: ['4', '5', '7', '3'], correct: 0,
              exp: 'Order first: 2, 3, 4, 7, 9. The middle value is 4. Never take the median of unordered data.' },
            { q: 'Find the mode of 2, 3, 3, 5, 7.', options: ['3', '4', '5', '2'], correct: 0,
              exp: 'The mode is the value appearing most often - 3 appears twice.' },
            { q: 'Find the range of 4, 9, 2, 7.', options: ['7', '9', '2', '22'], correct: 0,
              exp: 'Range = highest - lowest = 9 - 2 = 7. It measures the spread of the data.' },
            { q: 'For mutually exclusive events, P(A or B) equals...', options: ['P(A) + P(B)', 'P(A) x P(B)', 'P(A) - P(B)', '1 - P(A)P(B)'], correct: 0,
              exp: 'Events that cannot happen together simply add: P(A or B) = P(A) + P(B).' },
            { q: 'The probability of a certain event is...', options: ['1', '0', '1/2', 'undefined'], correct: 0,
              exp: 'Certainty is 1 and impossibility is 0 - the two ends of the probability scale.' }
          ],
        },
        {
          title: 'Mensuration & Solid Geometry',
          tags: ['Cone', 'Cylinder', 'Frustum', 'Sphere'],
          summary: 'Volumes and surface areas of the standard solids plus the frustum shortcut.',
          content: `

            <h3>1. Plane figures — the core areas</h3>
            <ul>
              <li><b>Rectangle:</b> A = l × b; perimeter = 2(l + b).</li>
              <li><b>Triangle:</b> A = (1/2) × base × height.</li>
              <li><b>Parallelogram:</b> A = base × perpendicular height (not the slant side!).</li>
              <li><b>Trapezium:</b> A = (1/2)(a + b)h, a and b the parallel sides.</li>
              <li><b>Circle:</b> A = πr^2; circumference = 2πr = πd.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Trapezium with parallel sides 8 cm and 12 cm, height 5 cm: A = (1/2)(20)(5) = <b>50 cm^2</b>.</div>

            <h3>2. Circle sectors and arcs</h3>
            <div class="formula">Arc length = (θ/360) × 2πr • Sector area = (θ/360) × πr^2</div>
            <div class="worked"><b>Worked example:</b> A sector of 90 degrees in a circle of radius 7 cm (π = 22/7): arc = (90/360) × 2 × 22/7 × 7 = <b>11 cm</b>; area = (90/360) × 22/7 × 49 = <b>38.5 cm^2</b>.</div>

            <h3>3. Solids: volumes first</h3>
            <ul>
              <li><b>Cube (edge e):</b> V = e^3; surface = 6e^2.</li>
              <li><b>Cuboid:</b> V = l × b × h; surface = 2(lb + bh + lh).</li>
              <li><b>Cylinder (radius r, height h):</b> V = πr^2h; curved surface = 2πrh; total = 2πrh + 2πr^2.</li>
              <li><b>Cone (radius r, height h, slant l):</b> V = (1/3)πr^2h; curved surface = πrl.</li>
              <li><b>Sphere:</b> V = (4/3)πr^3; surface = 4πr^2.</li>
              <li><b>Prism:</b> V = cross-section area × length.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Cylinder r = 7 cm, h = 10 cm (π = 22/7): V = 22/7 × 49 × 10 = <b>1540 cm^3</b>.</div>
            <div class="worked"><b>Worked example:</b> Cone r = 3 cm, h = 4 cm: slant l = √(9 + 16) = 5 cm; V = (1/3) × π × 9 × 4 = 12π ≈ <b>37.7 cm^3</b>; curved surface = π × 3 × 5 = 15π ≈ 47.1 cm^2.</div>

            <h3>4. Examiner's favourites</h3>
            <ul>
              <li><b>Melting/recasting:</b> volume is conserved — melt a sphere into a cylinder: set volumes equal, solve for the unknown height.</li>
              <li><b>Water in a tank:</b> rise in level = volume added ÷ base area.</li>
              <li><b>Shaded regions:</b> subtract the smaller area from the bigger (circle inside a square, sector minus triangle).</li>
              <li><b>Cone from a sector:</b> a sector of radius l rolled into a cone has slant l and base radius r where arc length = 2πr.</li>
            </ul>
            <div class="worked"><b>Worked example (recast):</b> A sphere of radius 3 cm is melted into a cylinder of radius 3 cm. Height? (4/3)π(27) = π(9)h → 36 = 9h → h = <b>4 cm</b>.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Using diameter where the formula wants radius (or vice versa).</li>
              <li>Using slant height for a cone's <b>volume</b> — volume needs the perpendicular height; curved surface needs the slant.</li>
              <li>Parallelogram area with the slant side instead of the perpendicular height.</li>
              <li>Forgetting the (1/3) in cone and pyramid volumes.</li>
              <li>Ignoring the stated value of π (22/7 vs 3.14) and losing the "exact" mark.</li>
              <li>Mixing units — cm with m — before multiplying.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> before computing, write r = … and h = … on the answer line. Most mensuration marks die in the first ten seconds of misread data, not in the arithmetic.</div>
          
            <h3>Deep dive: pyramids and the (1/3) family</h3>
            <p>Every "pointy" solid carries the one-third: cone = (1/3)πr^2h and pyramid = (1/3) × base area × height — each exactly one third of the prism or cylinder that encloses it.</p>
            <div class="worked"><b>Worked example:</b> Square-based pyramid, base 6 cm, height 10 cm: V = (1/3)(36)(10) = <b>120 cm^3</b>.</div>

            <h3>Deep dive: the three classic scenarios, fully worked</h3>
            <div class="worked"><b>Water rise:</b> A tank 20 cm by 15 cm holds water; a stone raises the level by 4 cm. Stone volume = 20 × 15 × 4 = <b>1200 cm^3</b> — displaced water equals the object.</div>
            <div class="worked"><b>Shaded region:</b> A circle of radius 7 cm inside a square of side 14 cm. Shaded = 196 − (22/7 × 49) = 196 − 154 = <b>42 cm^2</b>.</div>
            <div class="worked"><b>Sector becomes cone:</b> A 180-degree sector of radius 10 cm is rolled into a cone. Arc = (180/360)(2π × 10) = 10π = base circumference = 2πr → r = 5 cm. Slant = 10 → height = √(100 − 25) = √75 ≈ 8.66 cm. Volume = (1/3)π(25)(8.66) ≈ <b>226.7 cm^3</b>.</div>

            <h3>Deep dive: unit discipline</h3>
            <ul>
              <li>1 m^3 = 1,000,000 cm^3; 1 litre = 1000 cm^3 — tank capacity questions live here.</li>
              <li>Convert <b>before</b> multiplying, never after.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A tank 2 m by 1 m by 0.5 m holds 2 × 1 × 0.5 = 1 m^3 = <b>1000 litres</b>.</div>
            <div class="tip"><b>Exam tip:</b> if the answer line feels wrong (a cup holding 4000 litres), your units slipped — the smell test catches it before the examiner does.</div>
`,
          cards: [
            { q: 'Give the area formulas for a rectangle, triangle, trapezium and circle.', a: 'Rectangle lw; triangle (1/2)bh; trapezium (1/2)(a + b)h; circle πr^2 (circumference 2πr).' },
            { q: 'Find the area and perimeter of a sector of radius 7 cm, angle 90 deg (π = 22/7).', a: 'Area = 90/360 x (22/7) x 49 = 38.5 cm2; arc = 90/360 x 2 x (22/7) x 7 = 11 cm, so perimeter = 11 + 7 + 7 = 25 cm.' },
            { q: 'Give the volume and total surface area of a cylinder.', a: 'V = πr^2 h; curved surface = 2πrh; total surface (closed) = 2πr(r + h).' },
            { q: 'A cylinder has radius 7 cm and height 10 cm. Find its volume (π = 22/7).', a: 'V = (22/7) x 49 x 10 = 1540 cm3.' },
            { q: 'Give the volume and curved surface area of a cone.', a: 'V = (1/3)πr^2 h; curved surface = πrl, where the slant height l satisfies l^2 = r^2 + h^2 (Pythagoras).' },
            { q: 'A cone has radius 3 cm and height 4 cm. Find its slant height and curved surface area (π = 3.14).', a: 'l = sqrt(9 + 16) = 5 cm; curved surface = 3.14 x 3 x 5 = 47.1 cm2.' },
            { q: 'Give the volume and surface area of a sphere.', a: 'V = (4/3)πr^3; surface area = 4πr^2 — a hemisphere halves each and adds a circular base where needed.' },
            { q: 'Give the volume of a pyramid and a prism.', a: 'Pyramid: (1/3) x base area x vertical height; prism: area of the uniform cross-section x length.' },
            { q: 'State Euler\'s formula for polyhedra.', a: 'F + V - E = 2 (faces + vertices - edges): a cube gives 6 + 8 - 12 = 2.' },
            { q: 'Convert: (a) 3500 cm3 to litres, (b) 2.5 m3 to cm3.', a: '(a) 3.5 litres (1000 cm3 = 1 litre); (b) 2,500,000 cm3 (1 m3 = 10^6 cm3 — the length conversion 100 cm cubes).' },
            { q: 'What is a net of a solid?', a: 'A 2-D pattern that folds up to make the 3-D solid — a cube\'s net is six squares joined edge to edge; nets are the easiest way to compute total surface area.' },
            { q: 'A water tank is a cuboid 2 m by 1.5 m by 1 m. How many litres does it hold when full?', a: 'Volume = 2 x 1.5 x 1 = 3 m3 = 3,000 litres (1 m3 = 1000 litres).' },
            { q: 'Volume of a cone?', a: 'V = 1/3πr^2h — one third of the cylinder with the same base and height. Total surface area = πr^2 + πrl, where l is the slant height.' },
            { q: 'Give the volume formulas for a cylinder, cone and sphere.', a: 'Cylinder: V = πr^2h. Cone: V = 1/3πr^2h (one-third of the matching cylinder). Sphere: V = (4/3)πr^3, with surface area 4πr^2.' },
            { q: 'Give the surface area formulas for a cylinder and a cube.', a: 'Closed cylinder: 2πr^2 + 2πrh (two ends plus the curved wall). Cube of side a: 6a^2 - six identical square faces.' }
          ],
          quiz: [
            { q: 'Find the area of a circle of radius 7 cm. (Take π = 22/7)', options: ['154 cm^2', '44 cm^2', '49 cm^2', '22 cm^2'], correct: 0,
              exp: 'A = πr^2 = (22/7) x 49 = 154 cm^2.' },
            { q: 'Find the circumference of a circle of radius 7 cm. (π = 22/7)', options: ['44 cm', '154 cm', '22 cm', '88 cm'], correct: 0,
              exp: 'C = 2πr = 2 x (22/7) x 7 = 44 cm.' },
            { q: 'Find the volume of a cylinder of radius 7 cm and height 10 cm. (π = 22/7)', options: ['1540 cm^3', '154 cm^3', '440 cm^3', '770 cm^3'], correct: 0,
              exp: 'V = πr^2h = 154 x 10 = 1540 cm^3 - the base area stacked up 10 times.' },
            { q: 'Find the volume of a cuboid 4 cm by 3 cm by 2 cm.', options: ['24 cm^3', '14 cm^3', '12 cm^3', '20 cm^3'], correct: 0,
              exp: 'V = length x breadth x height = 4 x 3 x 2 = 24 cm^3.' },
            { q: 'Find the total surface area of a cube of side 3 cm.', options: ['54 cm^2', '27 cm^2', '36 cm^2', '18 cm^2'], correct: 0,
              exp: 'Six identical faces: 6 x 3^2 = 6 x 9 = 54 cm^2.' },
            { q: 'The volume of a sphere is given by...', options: ['(4/3)πr^3', '(2/3)πr^3', '4πr^2', 'πr^2h'], correct: 0,
              exp: 'V = (4/3)πr^3. (4πr^2 is the SURFACE area of a sphere - do not mix them up.)' },
            { q: 'The total surface area of a closed cylinder is...', options: ['2πr^2 + 2πrh', 'πr^2h', '2πrh only', 'πr^2 + πrh'], correct: 0,
              exp: 'Two circular ends (2πr^2) plus the curved wall (2πrh) - like a label wrapped round a tin plus its two lids.' },
            { q: 'The volume of a pyramid is...', options: ['one-third x base area x height', 'base area x height', 'half x base area x height', 'two-thirds x base area x height'], correct: 0,
              exp: 'V = 1/3 Ah - a pyramid fills exactly one-third of the prism standing on the same base.' },
            { q: 'A cone and a cylinder have the same base radius and height. The volume of the cone is...', options: ['one-third of the cylinder', 'equal to the cylinder', 'half the cylinder', 'twice the cylinder'], correct: 0,
              exp: 'Cone = 1/3πr^2h while cylinder = πr^2h, so the cone holds exactly one-third as much.' },
            { q: 'Find the area of a sector of angle 90° in a circle of radius 7 cm. (π = 22/7)', options: ['38.5 cm^2', '154 cm^2', '77 cm^2', '19.25 cm^2'], correct: 0,
              exp: 'A 90° sector is a quarter of the circle: 154/4 = 38.5 cm^2.' }
          ],
        },
        {
          title: 'Matrices & Determinants',
          tags: ['2×2 determinant', 'Inverse matrix', 'Matrix equations'],
          summary: 'Determinants, inverses and solving simultaneous equations with matrices.',
          content: `

            <h3>1. What a matrix is</h3>
            <p>A <b>matrix</b> is a rectangular array of numbers in rows and columns. Its <b>order</b> is rows × columns — a 2 × 3 matrix has 2 rows and 3 columns. Types you must name: <b>row</b> matrix, <b>column</b> matrix, <b>square</b> matrix, <b>zero</b> matrix, <b>identity</b> matrix I (1s on the diagonal, 0s elsewhere), and <b>equal</b> matrices (same order, same entries).</p>

            <h3>2. Addition, subtraction and scalar multiplication</h3>
            <p>Add or subtract only matrices of the <b>same order</b>, entry by entry. Scalar multiplication multiplies every entry by the number.</p>
            <div class="worked"><b>Worked example:</b> [1 2; 3 4] + [5 0; −1 2] = <b>[6 2; 2 6]</b>. And 3 × [1 2; 0 1] = <b>[3 6; 0 3]</b>.</div>

            <h3>3. Matrix multiplication — row times column</h3>
            <p>AB exists only when the <b>columns of A = rows of B</b>. Each entry of AB = (row of A) dotted with (column of B). Multiplication is <b>not commutative</b>: AB ≠ BA in general.</p>
            <div class="worked"><b>Worked example:</b> A = [1 2; 3 4], B = [2 0; 1 1].<br>
            AB: row1·col1 = 1×2 + 2×1 = 4; row1·col2 = 1×0 + 2×1 = 2; row2·col1 = 3×2 + 4×1 = 10; row2·col2 = 3×0 + 4×1 = 4 → AB = <b>[4 2; 10 4]</b>.<br>
            BA = [2 4; 4 6] — different! Non-commutativity shown.</div>

            <h3>4. Determinant of a 2 × 2</h3>
            <div class="formula">If M = [a b; c d], then det(M) = ad − bc</div>
            <div class="worked"><b>Worked example:</b> det [3 1; 2 4] = 3×4 − 1×2 = <b>10</b>. If det = 0 the matrix is <b>singular</b> (no inverse) — the simultaneous equations it represents have no unique solution.</div>

            <h3>5. The inverse of a 2 × 2</h3>
            <div class="formula">M⁻^1 = 1/(ad − bc) × [d −b; −c a]  (swap a and d, change signs of b and c)</div>
            <div class="worked"><b>Worked example:</b> Inverse of [3 1; 2 4]: det = 10 → (1/10)[4 −1; −2 3] = <b>[0.4 −0.1; −0.2 0.3]</b>. Check: M × M⁻^1 = I.</div>

            <h3>6. Solving simultaneous equations with matrices</h3>
            <p>Write ax + by = e and cx + dy = f as [a b; c d][x; y] = [e; f], i.e. MX = K. Then X = M⁻^1K.</p>
            <div class="worked"><b>Worked example:</b> 3x + y = 7 and 2x + 4y = 18.<br>
            M = [3 1; 2 4], det = 10, M⁻^1 = (1/10)[4 −1; −2 3].<br>
            [x; y] = (1/10)[4×7 − 1×18; −2×7 + 3×18] = (1/10)[10; 40] = <b>[1; 4]</b> → x = 1, y = 4. Check in eqn 1: 3 + 4 = 7 ✓.</div>

            <h3>7. The transpose</h3>
            <p>The <b>transpose</b> M^T turns rows into columns: [1 2; 3 4]ᵀ = [1 3; 2 4]. Useful facts: (AB)^T = B^T A (order flips!) and a matrix equal to its transpose is <b>symmetric</b>.</p>

            <h3>8. Common mistakes that cost marks</h3>
            <ul>
              <li>Adding matrices of different orders, or multiplying when inner dimensions mismatch.</li>
              <li>Assuming AB = BA.</li>
              <li>Determinant as ad + bc instead of ad − bc.</li>
              <li>In the inverse, forgetting to swap a and d <b>and</b> flip signs of b and c — and forgetting the 1/det factor.</li>
              <li>Multiplying M⁻^1K in the wrong order (it must be M⁻^1 × K, not K × M⁻^1).</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> for any inverse, do it in one chant: "swap the diagonal, negate the off-diagonal, divide by det." Say it every time; the inverse is free marks.</div>
          
            <h3>Deep dive: Cramer's rule — determinants doing the solving</h3>
            <p>For ax + by = e and cx + dy = f: x = det[e b; f d] ÷ det M and y = det[a e; c f] ÷ det M — replace the column you are solving for with the answers column.</p>
            <div class="worked"><b>Worked example:</b> 3x + y = 7; 2x + 4y = 18. det M = 10. x = det[7 1; 18 4]/10 = (28 − 18)/10 = <b>1</b>; y = det[3 7; 2 18]/10 = (54 − 14)/10 = <b>4</b> — matching the inverse method.</div>

            <h3>Deep dive: determinant and matrix facts that score</h3>
            <ul>
              <li>det(AB) = det A × det B.</li>
              <li>det(kM) for 2 × 2 = k^2 det M (the scalar hits both rows).</li>
              <li>M × M⁻^1 = M⁻^1 × M = I, and (M⁻^1)⁻^1 = M.</li>
              <li>A singular matrix (det = 0) has <b>no inverse</b> — say so and stop, that is the answer.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> det A = 3, det B = 5 → det(AB) = <b>15</b>; det(2A) = 4 × 3 = <b>12</b>.</div>

            <h3>Deep dive: word problems as matrix equations</h3>
            <div class="worked"><b>Worked example:</b> Two books and one pen cost ₦2,500; one book and three pens cost ₦3,000. 2b + p = 2500; b + 3p = 3000. M = [2 1; 1 3], det = 5. b = det[2500 1; 3000 3]/5 = (7500 − 3000)/5 = <b>900</b>; p = det[2 2500; 1 3000]/5 = (6000 − 2500)/5 = <b>700</b>. Book ₦900, pen ₦700.</div>
            <div class="tip"><b>Exam tip:</b> translate the story straight into the two equations, then choose Cramer or inverse — both are two minutes; the marks are in the setup.</div>
`,
          cards: [
            { q: 'What is the order of a matrix, and what is the order of a 2 x 3 matrix?', a: 'Order = rows x columns; a 2 x 3 matrix has 2 rows and 3 columns (6 elements).' },
            { q: 'When can two matrices be added, and how?', a: 'Only when they have the same order — add corresponding elements.' },
            { q: 'What is the condition for multiplying matrix A by matrix B?', a: 'The number of columns of A must equal the number of rows of B; an (m x n) times (n x p) gives an (m x p) matrix.' },
            { q: 'Multiply [1 2; 3 4] by [2 0; 1 3].', a: 'Row-by-column: [1(2)+2(1), 1(0)+2(3); 3(2)+4(1), 3(0)+4(3)] = [4 6; 10 12].' },
            { q: 'Is matrix multiplication commutative?', a: 'In general AB is NOT equal to BA — order matters (and sometimes one product does not even exist).' },
            { q: 'Evaluate the determinant of [3 5; 2 4].', a: 'ad - bc = 3(4) - 5(2) = 2.' },
            { q: 'When are two matrices equal?', a: 'When they have the same order and every corresponding element is equal — this turns a matrix equation into a set of simple simultaneous equations.' },
            { q: 'Write the identity matrix of order 2 and state its property.', a: 'I = [1 0; 0 1]; any matrix times I is unchanged, just like multiplying by 1.' },
            { q: 'Find the inverse of [2 1; 5 3].', a: 'Determinant = 6 - 5 = 1, so A^-1 = [3 -1; -5 2] — swap the leading diagonal, negate the other diagonal, divide by the determinant.' },
            { q: 'Solve x + y = 7 and 2x - y = 5 using matrices.', a: 'A = [1 1; 2 -1], det = -3; the solution (x, y) = A^-1 b gives x = 4, y = 3.' },
            { q: 'What is the transpose of a matrix?', a: 'Rows become columns: the transpose of [1 2 3; 4 5 6] is [1 4; 2 5; 3 6].' },
            { q: 'Solve for x and y: [x + y; x - y] = [9; 3].', a: 'Adding the rows: 2x = 12, x = 6; then y = 3 — equal matrices have equal corresponding elements.' },
            { q: 'How do you find the determinant of a 2 x 2 matrix?', a: 'For rows (a, b) and (c, d), the determinant is ad - bc: multiply the leading diagonal, then subtract the product of the other diagonal.' },
            { q: 'Give the formula for the inverse of a 2 x 2 matrix.', a: 'Swap a and d, change the signs of b and c, then divide by the determinant: A⁻^1 = (1/(ad - bc)) x (d, -b; -c, a). It exists only when the determinant is not zero.' },
            { q: 'What is a singular matrix?', a: 'A matrix whose determinant is 0. Since the inverse formula divides by the determinant, a singular matrix has no inverse - its equations do not have a unique solution.' }
          ],
          quiz: [
            { q: 'Find the determinant of the matrix with rows (3, 2) and (1, 4).', options: ['10', '14', '11', '5'], correct: 0,
              exp: 'ad - bc = (3)(4) - (2)(1) = 12 - 2 = 10.' },
            { q: 'How many elements does a 2 x 2 matrix have?', options: ['4', '2', '8', '6'], correct: 0,
              exp: 'Rows x columns = 2 x 2 = 4 elements.' },
            { q: 'To add two matrices, you...', options: ['add the corresponding elements', 'multiply the corresponding elements', 'multiply the diagonals', 'add the determinants'], correct: 0,
              exp: 'Addition is element by element - and both matrices must have the same order.' },
            { q: 'Multiply the matrix with rows (1, 2) and (3, 4) by the scalar 2.', options: ['rows (2, 4) and (6, 8)', 'rows (2, 2) and (6, 6)', 'rows (3, 4) and (5, 6)', 'rows (2, 8) and (3, 4)'], correct: 0,
              exp: 'Scalar multiplication multiplies EVERY element by the number: 2 x each of 1, 2, 3, 4.' },
            { q: 'The identity matrix of order 2 is...', options: ['rows (1, 0) and (0, 1)', 'rows (1, 1) and (1, 1)', 'rows (0, 1) and (1, 0)', 'rows (0, 0) and (0, 0)'], correct: 0,
              exp: '1s down the leading diagonal and 0s elsewhere - multiplying by it changes nothing.' },
            { q: 'The inverse of the matrix (a, b; c, d) is...', options: ['1/det x (d, -b; -c, a)', '1/det x (a, -b; -c, d)', '(d, b; c, a)', '1/det x (-a, b; c, -d)'], correct: 0,
              exp: 'Swap the leading diagonal, change the signs of the other pair, and divide by the determinant.' },
            { q: 'A matrix whose determinant is 0 is called...', options: ['singular, and has no inverse', 'identity', 'rectangular', 'symmetric'], correct: 0,
              exp: 'det = 0 makes 1/det impossible, so a singular matrix has no inverse.' },
            { q: 'Multiply the matrix with rows (2, 1) and (3, 4) by the column (1; 2).', options: ['column (4; 11)', 'column (3; 6)', 'column (4; 6)', 'column (2; 8)'], correct: 0,
              exp: 'Row times column: (2x1 + 1x2; 3x1 + 4x2) = (4; 11).' },
            { q: 'A 2 x 2 matrix multiplied by a 2 x 1 column gives a matrix of order...', options: ['2 x 1', '2 x 2', '1 x 2', '4 x 4'], correct: 0,
              exp: 'The inner numbers (2 and 2) match, so the result takes the outer numbers: 2 x 1.' },
            { q: 'Find the inverse of the matrix with rows (2, 0) and (0, 2).', options: ['rows (1/2, 0) and (0, 1/2)', 'rows (2, 0) and (0, 2)', 'rows (-2, 0) and (0, -2)', 'rows (0, 2) and (2, 0)'], correct: 0,
              exp: 'det = 4; swap and negate: (2, 0; 0, 2)/4 = (1/2, 0; 0, 1/2). Check: the product gives the identity.' }
          ],
        }
      ],
      JSS1: [
        {
          title: 'Whole Numbers, Place Value & Estimation',
          tags: ['Place value', 'Rounding', 'LCM & HCF'],
          summary: 'Reading, writing and rounding large numbers, estimating answers, and the LCM/HCF tools every JSS paper loves.',
          content: `
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
            <div class="formula">Watch out — TRAP: 'four hundred and five thousand' is 405,000 — NOT 400,050 or 4,050. The word 'thousand' tells you which group the 'four hundred and five' belongs to.</div>

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
            <div class="formula">Watch out — TRAP: rounding is done in ONE step using only the digit immediately to the right. Do NOT round 4,672 → 4,700 → 5,000 and claim 4,672 ≈ 5,000 to the nearest 100. Each request is its own operation.</div>

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

`,
          cards: [
            { q: 'In 4,738, what is the place value of 7, and what is its value?', a: '7 is in the hundreds place, so its value is 700 — place values run units, tens, hundreds, thousands from the right.' },
            { q: 'Write 2,405,032 in words.', a: 'Two million, four hundred and five thousand and thirty-two.' },
            { q: 'Round 4,738 to the nearest (a) ten, (b) hundred, (c) thousand.', a: '(a) 4,740; (b) 4,700; (c) 5,000 — look at the digit just after the required place: 5 or more rounds up.' },
            { q: 'Estimate 48 x 21 by rounding each number to 1 significant figure.', a: '50 x 20 = 1,000 (the exact answer is 1,008) — estimation checks whether a calculator answer is sensible.' },
            { q: 'Convert XXVII and XLIX from Roman numerals.', a: 'XXVII = 10 + 10 + 5 + 2 = 27; XLIX = (50 - 10) + (10 - 1) = 49 — a smaller letter before a larger one subtracts.' },
            { q: 'List the first five multiples of 7 and the factors of 24.', a: 'Multiples: 7, 14, 21, 28, 35. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.' },
            { q: 'Find the HCF and LCM of 12 and 18.', a: 'HCF = 6 (largest number dividing both); LCM = 36 (smallest number both divide into); check: HCF x LCM = 12 x 18.' },
            { q: 'What are prime numbers? Express 60 as a product of primes.', a: 'A prime has exactly two factors, 1 and itself. 60 = 2 x 2 x 3 x 5 = 2^2 x 3 x 5.' },
            { q: 'State the order of operations (BODMAS) and evaluate 3 + 4 x 2^2.', a: 'Brackets, Orders (powers), Division, Multiplication, Addition, Subtraction: 3 + 4 x 4 = 3 + 16 = 19 — powers and multiplication come before addition.' },
            { q: 'State the tests for divisibility by 2, 3, 5 and 9.', a: 'By 2: last digit even; by 3: digit-sum divisible by 3; by 5: ends in 0 or 5; by 9: digit-sum divisible by 9 — e.g. 4,518: digit-sum 18, so divisible by 3 and 9.' },
            { q: 'How do you read 4,732,015 in words?', a: 'Group in threes from the right, then read each group with its name: "four million, seven hundred and thirty-two thousand, and fifteen".' },
            { q: 'State the rule for rounding to a given place.', a: 'Look at the digit just to the right: 5 or more rounds up, 4 or less leaves the digit unchanged — and round once, straight from the original number.' },
            { q: 'How would you estimate 48 × 21, and why bother?', a: 'Round each factor first (50 × 20 = 1,000). The estimate tells you instantly whether a long multiplication or calculator answer is sensible.' },
            { q: 'Difference between LCM and HCF?', a: 'LCM is the smallest number both divide into (never smaller than the bigger number); HCF is the largest number that divides both (never bigger than the smaller). For 12 and 18: LCM 36, HCF 6.' },
            { q: 'What is standard form?', a: 'Writing a number as A × 10ⁿ with 1 <= A &lt; 10. Example: 3,600,000 = 3.6 × 10^6.' }
          ],
          quiz: [
            { q: 'Write 3,004,056 in words.', options: ['Three million, four thousand and fifty-six', 'Three million, four hundred and fifty-six', 'Thirty million, four thousand and fifty-six', 'Three billion, forty thousand, five hundred and six'], correct: 0, exp: 'The zeros are placeholders: 3,004,056 = 3 millions, 0 hundred-thousands, 0 ten-thousands, 4 thousands, 0 hundreds, 5 tens, 6 units.' },
            { q: 'Round 6,996 to the nearest hundred.', options: ['7,000', '6,900', '6,000', '7,100'], correct: 0, exp: 'The tens digit is 9 (5 or more), so the hundreds round up: 6,996 -> 7,000.' },
            { q: 'Find the HCF and LCM of 18 and 24.', options: ['HCF 6, LCM 72', 'HCF 12, LCM 36', 'HCF 6, LCM 36', 'HCF 3, LCM 72'], correct: 0, exp: '18 = 2 x 3^2 and 24 = 2^3 x 3, so HCF = 2 x 3 = 6 and LCM = 2^3 x 3^2 = 72. Check: 6 x 72 = 432 = 18 x 24.' },
            { q: 'Evaluate 2^3 + 3^2.', options: ['17', '13', '36', '12'], correct: 0, exp: '2^3 = 8 and 3^2 = 9, so 8 + 9 = 17 — evaluate powers (Orders in BODMAS) before adding.' },
            { q: 'Which statement about prime numbers is correct?', options: ['2 is the smallest and the only even prime', '1 is the smallest prime', '9 is prime because 3 x 3 = 9', 'Every odd number is prime'], correct: 0, exp: 'A prime has exactly two factors. 1 has only one factor, so it is not prime; 2 is the smallest and only even prime; 9 = 3 x 3 has three factors.' },
            { q: 'What is the value of the digit 7 in 4,732,015?', options: ['700,000', '70,000', '7,000', '7,000,000'], correct: 0,
              exp: 'The 7 sits in the hundred-thousands column, so its value is 7 × 100,000 = 700,000.' },
            { q: 'Write 45,308 in words.', options: ['Forty-five thousand, three hundred and eight', 'Forty-five thousand and thirty-eight', 'Four million, five hundred and thirty-eight', 'Forty-five hundred and eight'], correct: 0,
              exp: 'Group in threes: 45 (thousand) and 308 → "forty-five thousand, three hundred and eight".' },
            { q: 'Round 6,749 to the nearest hundred.', options: ['6,700', '6,750', '6,800', '6,740'], correct: 0,
              exp: 'Look at the tens digit (4). It is less than 5, so the hundreds stay: 6,700.' },
            { q: 'The best estimate of 48 × 21 is:', options: ['1,000', '800', '1,200', '960'], correct: 0,
              exp: '48 ~= 50 and 21 ~= 20, so 50 × 20 = 1,000.' },
            { q: 'What is the successor of the greatest 5-digit number?', options: ['100,000', '99,999', '10,000', '99,998'], correct: 0,
              exp: 'The greatest 5-digit number is 99,999; the next whole number is 100,000.' },
            { q: '3,600,000 in standard form is:', options: ['3.6 × 10^6', '3.6 × 10^5', '36 × 10^5', '3.6 × 10^7'], correct: 0,
              exp: 'Move the point 6 places: 3.6 × 10^6. The front number must lie between 1 and 10.' },
            { q: 'The LCM of 12 and 18 is:', options: ['36', '6', '72', '18'], correct: 0,
              exp: '12 = 2^2 × 3 and 18 = 2 × 3^2; LCM = 2^2 × 3^2 = 36.' },
            { q: 'The HCF of 24 and 36 is:', options: ['12', '6', '8', '72'], correct: 0,
              exp: 'Common factors of 24 and 36 go up to 12 (24 = 12 × 2, 36 = 12 × 3).' },
            { q: 'A trader sells 198 baskets at ₦1,012 each. The best estimate of her takings is:', options: ['₦200,000', '₦100,000', '₦20,000', '₦2,000,000'], correct: 0,
              exp: '198 ~= 200 and ₦1,012 ~= ₦1,000 → 200 × 1,000 = ₦200,000.' },
            { q: 'Which number is read "four hundred and seven"?', options: ['407', '470', '4,007', '704'], correct: 0,
              exp: '407 has 4 hundreds, no tens and 7 ones — the zero must be spoken as an empty tens column.' }
          ]
        },
        {
          title: 'Fractions & Decimals',
          tags: ['Equivalent fractions', 'Operations', 'Conversions'],
          summary: 'Adding, subtracting, multiplying and comparing fractions and decimals, and switching between fractions, decimals and percentages.',
          content: `
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
            <div class="formula">Watch out — TRAP: NEVER add the denominators. 1/2 + 1/2 is 1, not 2/4. The denominator names the size of the pieces; you only count pieces (numerators) once the pieces are the same size.</div>

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

`,
          cards: [
            { q: 'Name the three types of fractions with an example of each.', a: 'Proper: top smaller than bottom (3/5); improper: top larger (7/4); mixed number: a whole plus a fraction (1 3/4).' },
            { q: 'Write three fractions equivalent to 2/3.', a: '4/6, 6/9, 8/12 — multiply top and bottom by the same number; divide both by a common factor to simplify.' },
            { q: 'Reduce 48/60 to its lowest terms.', a: 'Divide both by the HCF 12: 48/60 = 4/5.' },
            { q: 'Work out 2/3 + 1/4.', a: 'LCM of 3 and 4 is 12: 8/12 + 3/12 = 11/12 — never add the denominators; make them equal first.' },
            { q: 'Work out 3/5 x 2/7 and 3/4 / 2/5.', a: 'Multiply tops and bottoms: 6/35. Division: invert the second and multiply: 3/4 x 5/2 = 15/8.' },
            { q: 'Convert 3/8 to a decimal and 0.45 to a fraction.', a: '3 / 8 = 0.375; 0.45 = 45/100 = 9/20 — decimals come from division by 10, 100, 1000.' },
            { q: 'Convert 0.625 to a percentage and 35% to a fraction.', a: '0.625 x 100 = 62.5%; 35% = 35/100 = 7/20.' },
            { q: 'Find 2/5 of ₦2,500.', a: '2500 / 5 = 500, x 2 = ₦1,000 — divide by the bottom, multiply by the top (\'of\' means multiply).' },
            { q: 'Arrange in ascending order: 3/4, 5/8, 2/3.', a: 'Convert to 24ths: 18/24, 15/24, 16/24, so the order is 5/8, 2/3, 3/4.' },
            { q: 'A rope 5 1/2 m long is cut into pieces 1/4 m long. How many pieces?', a: '5 1/2 / (1/4) = 11/2 x 4 = 22 pieces.' },
            { q: 'How do you add fractions with different denominators?', a: 'Find the LCM of the denominators, rewrite each fraction over it, then add the tops only: 3/4 + 1/6 = 9/12 + 2/12 = 11/12.' },
            { q: 'What does "of" mean in fraction language?', a: 'Multiply: 2/5 of ₦2,500 means (₦2,500 ÷ 5) × 2 = ₦1,000.' },
            { q: 'Quick method for multiplying decimals?', a: 'Multiply as whole numbers, then count the total decimal places in the factors: 1.25 × 0.4 → 125 × 4 = 500 with 3 places → 0.5.' },
            { q: 'Convert 7/8 to a decimal and percentage.', a: '7 ÷ 8 = 0.875, which is 87.5%. Remember 1/8 = 0.125 and count up in eighths.' },
            { q: 'How do you compare 1/2, 0.4 and 3/5 quickly?', a: 'Put all in the same form — as decimals: 0.5, 0.4, 0.6 — then order them: 0.4 &lt; 1/2 &lt; 3/5.' }
          ],
          quiz: [
            { q: 'Convert 2 3/5 to an improper fraction.', options: ['13/5', '10/5', '6/5', '23/5'], correct: 0, exp: 'Multiply the whole number by the denominator and add the top: (2 x 5 + 3)/5 = 13/5.' },
            { q: 'Work out 1/2 + 1/3 + 1/6.', options: ['1', '5/6', '3/6', '1 1/6'], correct: 0, exp: 'With denominator 6: 3/6 + 2/6 + 1/6 = 6/6 = 1.' },
            { q: 'Express 0.04 as a fraction in its lowest terms.', options: ['1/25', '4/10', '1/40', '2/25'], correct: 0, exp: '0.04 = 4/100 = 1/25 after dividing top and bottom by 4.' },
            { q: 'Calculate 2/3 x 3/4 x 8.', options: ['4', '6', '3', '16/9'], correct: 0, exp: '2/3 x 3/4 = 6/12 = 1/2, and 1/2 x 8 = 4 — cancelling early makes it faster.' },
            { q: 'Which is greater: 7/9 or 5/6?', options: ['5/6', '7/9', 'They are equal', 'Cannot be compared'], correct: 0, exp: 'In eighteenths: 7/9 = 14/18 and 5/6 = 15/18, so 5/6 is greater — compare fractions with a common denominator.' },
            { q: '3/4 + 1/6 = ?', options: ['11/12', '4/10', '5/12', '2/3'], correct: 0,
              exp: 'LCM of 4 and 6 is 12: 9/12 + 2/12 = 11/12. Never add tops and bottoms.' },
            { q: '0.75 as a fraction in lowest terms is:', options: ['3/4', '75/10', '7/5', '15/20'], correct: 0,
              exp: '0.75 = 75/100; divide top and bottom by 25 to get 3/4.' },
            { q: '2/5 of ₦2,500 = ?', options: ['₦1,000', '₦500', '₦1,250', '₦2,000'], correct: 0,
              exp: '"of" means multiply: (2,500 ÷ 5) × 2 = 500 × 2 = ₦1,000.' },
            { q: 'In ascending order: 1/2, 0.4, 3/5 is:', options: ['0.4, 1/2, 3/5', '1/2, 0.4, 3/5', '3/5, 1/2, 0.4', '0.4, 3/5, 1/2'], correct: 0,
              exp: 'As decimals: 0.4, 0.5, 0.6 — so 0.4 &lt; 1/2 &lt; 3/5.' },
            { q: '1.25 × 0.4 = ?', options: ['0.5', '5.0', '0.05', '50'], correct: 0,
              exp: '125 × 4 = 500; three decimal places in total → 0.500 = 0.5.' },
            { q: '3/4 ÷ 2 = ?', options: ['3/8', '3/2', '8/3', '6/4'], correct: 0,
              exp: 'Dividing by 2 is multiplying by 1/2: 3/4 × 1/2 = 3/8.' },
            { q: '7/8 as a decimal is:', options: ['0.875', '0.78', '0.75', '0.87'], correct: 0,
              exp: '7 ÷ 8 = 0.875. Know the eighths: 1/8 = 0.125.' },
            { q: '15% as a fraction in lowest terms is:', options: ['3/20', '15/10', '1/15', '3/10'], correct: 0,
              exp: '15% = 15/100 = 3/20 after dividing by 5.' },
            { q: 'Which is the greatest: 2/3, 3/5, 5/8, 7/10?', options: ['7/10', '2/3', '3/5', '5/8'], correct: 0,
              exp: 'As decimals: 0.667, 0.6, 0.625, 0.7 — so 7/10 is greatest (2/3 is a close second).' },
            { q: 'A pupil sleeps 9 hours a day. The fraction of the day is:', options: ['3/8', '9/12', '1/3', '3/4'], correct: 0,
              exp: '9/24 of the day; divide top and bottom by 3 to get 3/8 (37.5%).' }
          ]
        },
        {
          title: 'Introduction to Algebra: Letters & Simple Equations',
          tags: ['Variables', 'Like terms', 'Simple equations'],
          summary: 'Why letters stand for numbers, how to collect like terms, and solving one-step equations — the gateway into algebra.',
          content: `
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
            <div class="formula">Watch out — TRAP: negative values need brackets when substituting. If x = -2 then x^2 = (-2)^2 = +4, NOT -4. Squaring a negative gives a positive.</div>

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
            <div class="formula">Watch out — TRAP: '5 less than x' is x - 5, NOT 5 - x. 'Less than' reverses the order.</div>

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

            
            <h3>11. Algebra everywhere — Nigerian daily life</h3>
            <p>Algebra is not a classroom game; it is the grammar of everyday reasoning. Anywhere a rule repeats with changing numbers, algebra is the shortest way to say it.</p>
            <ul>
              <li><b>Keke fare:</b> flag fall ₦100 plus ₦50 per stop. After n stops the fare is 100 + 50n. Six stops: 100 + 300 = ₦400.</li>
              <li><b>Data bundle:</b> a plan gives 1.5 GB per day; in d days you get 1.5d GB. For 12 GB you need d = 8 days.</li>
              <li><b>Trading:</b> a trader buys a bag of rice at x naira and sells it at x + 2,500. Her profit per bag is exactly 2,500 — whatever x is.</li>
              <li><b>Savings:</b> saving ₦w weekly, after 12 weeks you have 12w; to reach ₦24,000 you need w = ₦2,000.</li>
            </ul>
            <div class="worked"><b>Worked example (age puzzle):</b> 'Papa is three times as old as Ada. In 10 years he will be twice as old as her. How old is Ada now?' Let Ada = x, Papa = 3x. In 10 years: 3x + 10 = 2(x + 10) → 3x + 10 = 2x + 20 → x = 10. Ada is 10, Papa 30. Check: in 10 years, 40 = 2 x 20. Correct!</div>

            <h3>12. Try these (with answers)</h3>
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

`,
          cards: [
            { q: 'Why do we use letters in algebra?', a: 'Letters stand for numbers we do not know yet (variables) or any number in a rule — they let us write general formulas and solve for unknowns.' },
            { q: 'What does 3x mean, and why is x3 not used?', a: '3x means 3 multiplied by x — the multiplication sign is left out in algebra to avoid confusion with the letter x; the number always comes first.' },
            { q: 'Evaluate 4a + 3b when a = 5 and b = 2.', a: '4(5) + 3(2) = 20 + 6 = 26 — substitute carefully and keep the implied multiplications.' },
            { q: 'Simplify 7x + 5y - 3x + 2y.', a: 'Collect like terms: (7x - 3x) + (5y + 2y) = 4x + 7y — only terms with the same letter and power combine.' },
            { q: 'Translate into algebra: \'five more than twice a number n\'.', a: '2n + 5 — \'twice\' means multiply by 2, \'more than\' means add.' },
            { q: 'Solve x + 9 = 15.', a: 'Subtract 9 from both sides: x = 6 — whatever you do to one side you must do to the other.' },
            { q: 'Solve 5y = 35.', a: 'Divide both sides by 5: y = 7.' },
            { q: 'Remove the brackets and simplify: 4(2x - 3) + 3x.', a: '8x - 12 + 3x = 11x - 12.' },
            { q: 'Ada is x years old. Write her age in 6 years and her age 4 years ago.', a: 'In 6 years: x + 6; 4 years ago: x - 4 — word clues like \'in\' add and \'ago\' subtract.' },
            { q: 'Write a formula for the perimeter P of a rectangle of length l and width w, then find P when l = 8 and w = 5.', a: 'P = 2(l + w) = 2(8 + 5) = 26 — formulas are substitution practice in disguise.' },
            { q: 'What is a variable?', a: 'A letter standing for an unknown or changeable number, so "some number plus 7 gives 12" can be written x + 7 = 12 and solved.' },
            { q: 'Rule for collecting like terms?', a: 'Only terms with the same letter part combine, and only their numbers add or subtract: 3a + 4a - 2a = 5a, while 2a + 3b stays as it is.' },
            { q: 'Translate "5 more than twice n".', a: '2n + 5. Twice n is 2n, then add 5. Note 2(n + 5) would mean "twice the sum of n and 5" — different!' },
            { q: 'How do you solve a one-step equation?', a: 'Undo the operation on both sides equally: y + 7 = 12 → y = 5; 3m = 21 → m = 7; x - 4 = 9 → x = 13.' },
            { q: 'Perimeter of a rectangle with length (x+3) and width x?', a: 'P = 2(l + w) = 2(2x + 3) = 4x + 6. Algebra lets the answer stay general for any x.' }
          ],
          quiz: [
            { q: 'Simplify 5x + 2y - 3x + 4y.', options: ['2x + 6y', '8x + 6y', '2x - 2y', '14xy'], correct: 0, exp: 'Collect like terms: (5x - 3x) + (2y + 4y) = 2x + 6y — unlike letters cannot be added together.' },
            { q: 'If 4m - 5 = 11, find m.', options: ['4', '1.5', '6', '16'], correct: 0, exp: '4m = 11 + 5 = 16, so m = 16/4 = 4. Check: 4(4) - 5 = 11.' },
            { q: 'Write in algebra: \'Three times a number n, decreased by 7\'.', options: ['3n - 7', '3(n - 7)', '7 - 3n', 'n/3 - 7'], correct: 0, exp: '\'Three times n\' is 3n and \'decreased by 7\' subtracts 7, giving 3n - 7; the bracket form 3(n - 7) would triple the whole.' },
            { q: 'Evaluate x^2 + 2x when x = 3.', options: ['15', '9', '30', '12'], correct: 0, exp: '3^2 + 2(3) = 9 + 6 = 15 — square first, then multiply, then add (BODMAS).' },
            { q: 'Expand and simplify: 2(a + 4) + 3(a - 1).', options: ['5a + 5', '5a + 11', '6a + 5', '5a - 5'], correct: 0, exp: '2a + 8 + 3a - 3 = 5a + 5.' },
            { q: 'Simplify 3a + 4a - 2a.', options: ['5a', '9a', '5a^2', 'a'], correct: 0,
              exp: '(3 + 4 - 2)a = 5a. The letter part never changes when collecting like terms.' },
            { q: 'If x = 4, then 2x + 3 = ?', options: ['11', '10', '14', '9'], correct: 0,
              exp: '2 × 4 = 8, then 8 + 3 = 11.' },
            { q: 'Solve y + 7 = 12.', options: ['5', '19', '7', '-5'], correct: 0,
              exp: 'Subtract 7 from both sides: y = 12 - 7 = 5.' },
            { q: '"5 more than twice a number n" is written:', options: ['2n + 5', '2(n + 5)', 'n^2 + 5', '5n + 2'], correct: 0,
              exp: 'Twice n is 2n; five more adds 5 → 2n + 5.' },
            { q: 'Solve 3m = 21.', options: ['7', '18', '24', '63'], correct: 0,
              exp: 'Divide both sides by 3: m = 21 ÷ 3 = 7.' },
            { q: '5x - x = ?', options: ['4x', '5', '5x^2', 'x'], correct: 0,
              exp: 'x is 1x, so 5x - 1x = 4x.' },
            { q: 'Tunde is a years old. In 6 years he will be:', options: ['a + 6', '6a', 'a - 6', 'a ÷ 6'], correct: 0,
              exp: 'Six years older means adding 6: a + 6.' },
            { q: 'Solve x - 4 = 9.', options: ['13', '5', '-13', '36'], correct: 0,
              exp: 'Add 4 to both sides: x = 9 + 4 = 13.' },
            { q: 'Simplify 2a + 3b - a + 5b.', options: ['a + 8b', '9ab', '3a + 8b', 'a + 2b'], correct: 0,
              exp: 'a-terms: 2a - a = a; b-terms: 3b + 5b = 8b → a + 8b.' },
            { q: 'A rectangle has length (x + 3) and width x. Its perimeter is:', options: ['4x + 6', '2x + 3', 'x^2 + 3x', '4x + 3'], correct: 0,
              exp: 'P = 2(length + width) = 2(x + 3 + x) = 4x + 6.' }
          ]
        },
        {
          title: 'Angles & Plane Figures',
          tags: ['Types of angles', 'Angle facts', 'Perimeter & area'],
          summary: 'Naming and measuring angles, the angle facts for triangles and straight lines, and perimeter and area of basic figures.',
          content: `
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
            <div class="formula">Watch out — TRAP: perimeter and area use DIFFERENT units — cm (or m) versus cm2 (or m2). Writing 'area = 24 cm' loses a mark even when 24 is right.</div>

            <h3>12. Line symmetry</h3>
            <p>A figure has <b>line symmetry</b> if a line (mirror line) can fold it onto itself exactly. A square has 4 lines of symmetry; a rectangle 2; an isosceles triangle 1; an equilateral triangle 3; a circle — infinitely many.</p>

            
            <h3>13. Clock angles — time as geometry</h3>
            <p>A clock face is a circle of 360 deg divided into 12 hour-marks, so each hour gap is 30 deg. The minute hand sweeps 6 deg every minute (360 ÷ 60); the hour hand creeps 0.5 deg every minute (30 ÷ 60).</p>
            <ul>
              <li>At 3:00 the hands are 3 hour-gaps apart: 3 x 30 = 90 deg (a right angle). At 6:00 they form a straight angle (180 deg).</li>
              <li>At 2:00 the angle is 60 deg (acute); at 4:00 it is 120 deg (obtuse).</li>
              <li>At 3:30 the minute hand points at 6 (180 deg from 12) while the hour hand has moved half an hour-gap past 3: 3 x 30 + 15 = 105 deg. The angle between them is 180 - 105 = 75 deg — NOT 90 deg!</li>
            </ul>
            <div class="formula">TIP: 'half past' never gives the 'obvious' angle because the hour hand keeps moving. Compute both hands from 12 o'clock and subtract.</div>

            <h3>14. Try these (with answers)</h3>
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

`,
          cards: [
            { q: 'Name the types of angles: less than 90, exactly 90, between 90 and 180, exactly 180, and between 180 and 360.', a: 'Acute, right angle, obtuse, straight angle, and reflex respectively.' },
            { q: 'What do angles on a straight line and angles at a point add up to?', a: 'Angles on a straight line sum to 180 deg; angles at a point sum to 360 deg.' },
            { q: 'What can you say about vertically opposite angles?', a: 'They are equal — when two lines cross, the angles opposite each other at the vertex match.' },
            { q: 'What is the sum of angles in a triangle, and name the three triangle types by sides.', a: '180 deg. Equilateral (all sides equal, angles 60 each), isosceles (two equal sides and equal base angles), scalene (no equal sides).' },
            { q: 'Find the missing angle of a triangle with angles 65 deg and 45 deg.', a: '180 - (65 + 45) = 70 deg.' },
            { q: 'State the interior and exterior angle facts for polygons.', a: 'Interior angles sum to (n - 2) x 180 deg; exterior angles always sum to 360 deg — each exterior angle of a regular n-gon is 360/n.' },
            { q: 'Each exterior angle of a regular polygon is 40 deg. How many sides has it?', a: '360/40 = 9 sides (a nonagon) — and each interior angle is 180 - 40 = 140 deg.' },
            { q: 'When a transversal cuts parallel lines, name the three angle pairs.', a: 'Alternate angles (Z-shape, equal), corresponding angles (F-shape, equal), and co-interior/interior angles on the same side (C-shape, sum to 180 deg).' },
            { q: 'Give the properties that distinguish a square from a rhombus.', a: 'Both have four equal sides, but a square has four right angles (and equal diagonals); a rhombus does not necessarily have right angles — every square is a rhombus, not vice versa.' },
            { q: 'Find the area of a triangle with base 12 cm and height 7 cm, and the perimeter of a square of side 5 cm.', a: 'Area = (1/2) x 12 x 7 = 42 cm2; perimeter = 4 x 5 = 20 cm.' },
            { q: 'Name the angle families by size.', a: 'Acute &lt; 90°, right = 90°, obtuse between 90° and 180°, reflex &gt; 180°; a straight line is 180° and a full turn 360°.' },
            { q: 'State the four angle facts used most in exams.', a: 'Straight line = 180°; angles at a point = 360°; vertically opposite angles equal; triangle angles = 180° (quadrilateral = 360°).' },
            { q: 'Complement vs supplement?', a: 'Complementary pairs total 90° (complement of 35° is 55°); supplementary pairs total 180° (supplement of 105° is 75°).' },
            { q: 'Perimeter and area of square and rectangle?', a: 'Square: P = 4s, A = s^2. Rectangle: P = 2(l + w), A = l × w. Triangle area = 1/2 × base × height, using the vertical height, not a slant side.' },
            { q: 'Each angle of an equilateral triangle?', a: '180° ÷ 3 = 60°, because all three angles are equal.' }
          ],
          quiz: [
            { q: 'Find each interior angle of a regular hexagon.', options: ['120 deg', '108 deg', '135 deg', '90 deg'], correct: 0, exp: 'Sum of interior angles = (6 - 2) x 180 = 720 deg; each angle = 720/6 = 120 deg.' },
            { q: 'Two angles lie on a straight line. One is 115 deg. Find the other.', options: ['65 deg', '75 deg', '55 deg', '245 deg'], correct: 0, exp: 'Angles on a straight line sum to 180 deg: 180 - 115 = 65 deg.' },
            { q: 'The angles of a triangle are x, 2x and 60 deg. Find x.', options: ['40 deg', '60 deg', '30 deg', '45 deg'], correct: 0, exp: 'x + 2x + 60 = 180, so 3x = 120 and x = 40 deg (the angles are 40, 80 and 60).' },
            { q: 'A quadrilateral with exactly one pair of parallel sides is a...', options: ['trapezium', 'parallelogram', 'rhombus', 'rectangle'], correct: 0, exp: 'A trapezium has exactly one pair of parallel sides; parallelograms (including rhombus and rectangle) have two pairs.' },
            { q: 'Two straight lines cross and one of the vertically opposite angles is 72 deg. What is its vertically opposite angle?', options: ['72 deg', '108 deg', '18 deg', '144 deg'], correct: 0, exp: 'Vertically opposite angles are always equal, so it is also 72 deg (the angles beside it are 108 deg).' },
            { q: 'Angles on a straight line add up to:', options: ['180°', '90°', '360°', '270°'], correct: 0,
              exp: 'A straight line is half a turn: 180°.' },
            { q: 'The sum of the angles of a triangle is:', options: ['180°', '90°', '360°', '45°'], correct: 0,
              exp: 'Every triangle, whatever its shape, has angles summing to 180°.' },
            { q: 'The complement of 35° is:', options: ['55°', '145°', '65°', '35°'], correct: 0,
              exp: 'Complementary pairs make 90°: 90 - 35 = 55°.' },
            { q: 'The supplement of 105° is:', options: ['75°', '85°', '15°', '255°'], correct: 0,
              exp: 'Supplementary pairs make 180°: 180 - 105 = 75°.' },
            { q: 'The angles of a quadrilateral add up to:', options: ['360°', '180°', '90°', '540°'], correct: 0,
              exp: 'A quadrilateral splits into two triangles: 2 × 180° = 360°.' },
            { q: 'An angle between 90° and 180° is called:', options: ['obtuse', 'acute', 'reflex', 'right'], correct: 0,
              exp: 'Acute &lt; 90°, right = 90°, obtuse is between 90° and 180°, reflex &gt; 180°.' },
            { q: 'Vertically opposite angles are always:', options: ['equal', 'supplementary', 'complementary', '90°'], correct: 0,
              exp: 'When two straight lines cross, the opposite pair are equal.' },
            { q: 'Each angle of an equilateral triangle is:', options: ['60°', '90°', '45°', '180°'], correct: 0,
              exp: '180° shared equally by three angles: 180 ÷ 3 = 60°.' },
            { q: 'The perimeter of a square of side 7 cm is:', options: ['28 cm', '49 cm', '14 cm', '21 cm'], correct: 0,
              exp: 'P = 4s = 4 × 7 = 28 cm. (49 cm^2 would be the area.)' },
            { q: 'The area of a rectangle 8 cm by 5 cm is:', options: ['40 cm^2', '26 cm^2', '13 cm^2', '80 cm^2'], correct: 0,
              exp: 'A = length × width = 8 × 5 = 40 cm^2.' }
          ]
        },
        {
          title: 'Ratio, Proportion & Percentages',
          tags: ['Sharing ratios', 'Direct proportion', 'Percentage change'],
          summary: 'How to share quantities in a given ratio and move fluently between fractions, decimals and percentages.',
          content: `
            <h3>1. What a ratio means</h3>
            <p>A <b>ratio</b> compares two or more quantities of the SAME kind by showing how many times one contains the other. It is written with a colon: if a class has 12 boys and 18 girls, the ratio of boys to girls is 12 : 18, which simplifies (dividing by 6) to <b>2 : 3</b> — 'for every 2 boys there are 3 girls'.</p>
            <ul>
              <li>Order matters: boys : girls = 2 : 3, but girls : boys = 3 : 2. Always compare in the order the question asks.</li>
              <li>A ratio has NO units once simplified — it is just a comparison of sizes.</li>
              <li>Simplifying a ratio works exactly like simplifying a fraction: divide every part by the HCF. 20 : 35 : 15 → ÷5 → 4 : 7 : 3.</li>
              <li>Ratios containing decimals or fractions are cleaned by multiplying every part by the same number: 1/2 : 1/3 → x6 → 3 : 2; 0.5 : 2 → x2 → 1 : 4.</li>
            </ul>
            <div class="formula">Watch out — TRAP: a ratio compares PART to PART. The fraction compares PART to WHOLE. In a 2 : 3 boys-to-girls class, boys are 2/5 (not 2/3) of the whole class. Mixing these up is the classic ratio mistake.</div>

            <h3>2. Same units first!</h3>
            <p>Before writing a ratio, convert all quantities to the SAME unit.</p>
            <ul>
              <li>40 minutes to 2 hours → 40 min : 120 min → 1 : 3.</li>
              <li>50 kobo to ₦2 → 50k : 200k → 1 : 4.</li>
              <li>250 g to 1 kg → 250 : 1000 → 1 : 4.</li>
            </ul>

            <h3>3. Sharing a quantity in a given ratio</h3>
            <p>To share a quantity in a ratio: (1) ADD the ratio parts to find the total number of equal shares; (2) divide the quantity by that total to find ONE share; (3) multiply each ratio part by the share.</p>
            <div class="worked"><b>Worked example:</b> share ₦20,000 between Ada and Bola in the ratio 2 : 3.<br>Total shares = 2 + 3 = 5. One share = 20,000 ÷ 5 = ₦4,000.<br>Ada = 2 x 4,000 = ₦8,000. Bola = 3 x 4,000 = ₦12,000.<br><b>Check:</b> 8,000 + 12,000 = 20,000 and 8,000 : 12,000 = 2 : 3.</div>
            <svg viewBox="0 0 460 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bar model of 20,000 naira divided into five equal blocks of 4,000 each: two indigo blocks labelled Ada 8,000 and three green blocks labelled Bola 12,000, showing the ratio 2 to 3">
              <g stroke="#334155" stroke-width="1.5">
                <rect x="20" y="30" width="80" height="40" fill="#6366f1"/>
                <rect x="100" y="30" width="80" height="40" fill="#6366f1"/>
                <rect x="180" y="30" width="80" height="40" fill="#10b981"/>
                <rect x="260" y="30" width="80" height="40" fill="#10b981"/>
                <rect x="340" y="30" width="80" height="40" fill="#10b981"/>
              </g>
              <g font-size="11" fill="#ffffff" text-anchor="middle" font-weight="700">
                <text x="60" y="54">4k</text><text x="140" y="54">4k</text><text x="220" y="54">4k</text><text x="300" y="54">4k</text><text x="380" y="54">4k</text>
              </g>
              <text x="100" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#3730a3">Ada: 2 shares = 8,000</text>
              <text x="300" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#047857">Bola: 3 shares = 12,000</text>
              <text x="230" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Total 20,000 in the ratio 2 : 3 (five equal shares of 4,000)</text>
            </svg>
            <div class="worked"><b>Worked example (three-way share):</b> ₦54,000 is shared among three children in the ratio 1 : 2 : 3.<br>Shares = 6; one share = 9,000. The children get ₦9,000, ₦18,000 and ₦27,000.</div>
            <div class="worked"><b>Worked example (finding the total):</b> in a ratio share of 3 : 5, the smaller part is ₦12,000. One share (3 parts' worth is 12,000? no — the smaller PART is 3 shares) → 3 shares = 12,000, so 1 share = 4,000; total = 8 shares = ₦32,000.</div>

            <h3>4. Ratios in real life</h3>
            <ul>
              <li><b>Maps and scale:</b> a scale of 1 : 50,000 means 1 cm on the map stands for 50,000 cm (500 m) on the ground. 4 cm on the map = 2 km in real life.</li>
              <li><b>Recipes and mixes:</b> mortar mix of cement : sand = 1 : 3; a drink concentrate mixed 1 : 4 with water.</li>
              <li><b>Screens:</b> a 16 : 9 screen ratio describes shape, not size.</li>
              <li><b>Sport:</b> a team's wins : losses = 7 : 2 summarises a season at a glance.</li>
            </ul>

            <h3>5. Proportion and direct proportion</h3>
            <p>A <b>proportion</b> says two ratios are EQUAL: 2 : 3 = 4 : 6 (or 2/3 = 4/6). Two quantities are in <b>direct proportion</b> when multiplying one by a number multiplies the other by the SAME number — doubling the pens doubles the cost.</p>
            <div class="worked"><b>Worked example:</b> 5 books cost ₦3,500. What do 8 books cost?<br>Unitary step: 1 book = 3,500 ÷ 5 = ₦700. Then 8 books = 8 x 700 = ₦5,600.</div>
            <div class="worked"><b>Worked example (ratio box):</b> a car uses 9 litres of fuel for 108 km. How far on 15 litres? 1 litre → 108 ÷ 9 = 12 km; 15 litres → 15 x 12 = 180 km.</div>

            <h3>6. Inverse proportion</h3>
            <p>Two quantities are in <b>inverse proportion</b> when multiplying one DIVIDES the other by the same number: more workers → fewer days; faster speed → less time.</p>
            <div class="worked"><b>Worked example:</b> 6 labourers weed a farm in 8 days. How long will 4 labourers take (same rate)?<br>Total work = 6 x 8 = 48 'labourer-days'. With 4 labourers: 48 ÷ 4 = 12 days. Fewer workers, MORE days — the product stays 48.</div>
            <div class="formula">EXAM CODE: direct proportion → divide then multiply (unitary method). Inverse proportion → MULTIPLY the two given values first (the constant product), then divide. Identify the type BEFORE calculating: 'more means more' = direct; 'more means less' = inverse.</div>

            <h3>7. Percentage — 'out of one hundred'</h3>
            <p><b>Per cent</b> means 'out of 100'; the sign is %. So 45% = 45/100 = 0.45. Percentages are simply fractions (and decimals) wearing a uniform that makes comparisons easy.</p>
            <ul>
              <li><b>Fraction to %:</b> multiply by 100: 3/5 = 3/5 x 100% = 60%. 1/8 = 12.5%.</li>
              <li><b>Decimal to %:</b> multiply by 100: 0.72 = 72%; 0.05 = 5%.</li>
              <li><b>% to fraction:</b> 35% = 35/100 = 7/20. <b>% to decimal:</b> 8% = 0.08; 125% = 1.25.</li>
              <li>Memorise: 10% = 1/10, 25% = 1/4, 50% = 1/2, 75% = 3/4, 20% = 1/5, 12 1/2% = 1/8.</li>
              <li><b>One quantity as a % of another:</b> write as a fraction then x100: 15 as a % of 60 = 15/60 x 100% = 25%.</li>
            </ul>

            <h3>8. Percentage of a quantity</h3>
            <div class="worked"><b>Worked examples:</b><br>30% of ₦5,000 = 30/100 x 5,000 = ₦1,500 (quick way: 10% = 500, so 30% = 3 x 500).<br>45% of 240 pupils = 0.45 x 240 = 108 pupils.<br>7 1/2% of 80 kg = 7.5/100 x 80 = 6 kg.</div>
            <div class="worked"><b>Exam-style:</b> in a class of 40, 60% are girls. Number of boys = 40% of 40 = 16.</div>

            <h3>9. Percentage increase and decrease</h3>
            <ul>
              <li><b>Increase:</b> new = original + (percent of original). A ₦800 fare increased by 25% rises by 200 to ₦1,000. Shortcut: multiply by 1.25.</li>
              <li><b>Decrease:</b> a ₦2,400 shirt discounted by 15% falls by 360 to ₦2,040. Shortcut: multiply by 0.85.</li>
              <li><b>Percentage change</b> = (change ÷ original) x 100%: from 80 to 100 is a rise of 20 → 20/80 x 100% = 25% increase.</li>
            </ul>
            <div class="worked"><b>TRAP worked example:</b> a price rises 50% then falls 50%. Start at ₦100 → rise to ₦150 → fall by 50% OF 150 (= 75) → ₦75. You did NOT return to ₦100! Successive percentages act on the CURRENT value, not the original.</div>

            <h3>10. Profit and loss percentage</h3>
            <ul>
              <li><b>Cost price (CP)</b> — what the trader paid. <b>Selling price (SP)</b> — what the customer paid.</li>
              <li><b>Profit</b> = SP - CP (when SP &gt; CP). <b>Loss</b> = CP - SP (when SP &lt; CP).</li>
              <li><b>Profit %</b> = (profit ÷ CP) x 100%. <b>Loss %</b> = (loss ÷ CP) x 100%. Percentages of profit and loss are ALWAYS on the COST price.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a trader buys a phone for ₦40,000 and sells it for ₦46,000. Profit = ₦6,000. Profit % = 6,000/40,000 x 100% = 15%.<br>Another trader buys a bag for ₦25,000 and sells at a 10% loss: loss = 2,500, SP = ₦22,500.</div>

            <h3>11. Simple interest — percentage in the bank</h3>
            <p><b>Simple interest</b> I = (P x R x T) ÷ 100, where P = principal (money saved or borrowed), R = rate per year (%), T = time in years.</p>
            <div class="worked"><b>Worked example:</b> ₦50,000 is saved at 6% per year simple interest for 3 years. I = (50,000 x 6 x 3) ÷ 100 = ₦9,000. Total amount = P + I = ₦59,000.</div>
            <div class="formula">TIP: if T is given in months, change to years first (18 months = 1.5 years). Forgetting this is the standard interest mistake.</div>

            
            <h3>12. Percentage challenges from the Nigerian market</h3>
            <div class="worked"><b>Worked example (NEPA bill):</b> a household's electricity bill was ₦18,000 last month and ₦21,600 this month. Change = 3,600. Percentage increase = 3,600 ÷ 18,000 x 100% = 20%.</div>
            <div class="worked"><b>Worked example (exam scores):</b> Chidi scored 42 out of 60 in Maths and 28 out of 40 in English. As percentages: 42/60 = 70%; 28/40 = 70%. Same percentage — the raw scores only become comparable after converting to 'out of 100'. That is exactly what percentages are for.</div>
            <div class="worked"><b>Worked example (population growth):</b> a school's enrolment rose from 250 to 300 pupils. Increase = 50; percentage increase = 50 ÷ 250 x 100% = 20%. If next year it falls by 20%, the new number is 300 - 60 = 240 — NOT back to 250 (the successive-percentage trap again).</div>
            <ul>
              <li><b>VAT and levies:</b> adding 7.5% VAT to a ₦4,000 purchase adds 7.5/100 x 4,000 = ₦300 → total ₦4,300.</li>
              <li><b>Scholarship discounts:</b> a 25% fee discount on ₦60,000 saves ₦15,000; the parent pays ₦45,000.</li>
            </ul>

            <h3>13. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Simplify 24 : 36. <i>Ans: 2 : 3.</i></li>
              <li><b>Q2.</b> Express 45 minutes to 2 hours as a ratio. <i>Ans: 45 : 120 = 3 : 8.</i></li>
              <li><b>Q3.</b> Share 60 books between two classes in the ratio 2 : 3. <i>Ans: 24 and 36.</i></li>
              <li><b>Q4.</b> ₦45,000 is shared in the ratio 1 : 2 : 6. The largest share is? <i>Ans: one share = 5,000; largest = ₦30,000.</i></li>
              <li><b>Q5.</b> If 6 pens cost ₦540, what do 10 pens cost? <i>Ans: 1 pen ₦90 → ₦900.</i></li>
              <li><b>Q6.</b> 8 machines finish a job in 9 hours. How long will 6 machines take? <i>Ans: 8 x 9 = 72; 72 ÷ 6 = 12 hours.</i></li>
              <li><b>Q7.</b> Change 7/8 to a percentage. <i>Ans: 87.5%.</i></li>
              <li><b>Q8.</b> What is 35% of ₦8,000? <i>Ans: ₦2,800.</i></li>
              <li><b>Q9.</b> Express 18 as a percentage of 72. <i>Ans: 25%.</i></li>
              <li><b>Q10.</b> A ₦1,200 dress is sold at 10% discount. Sale price? <i>Ans: 1,200 - 120 = ₦1,080.</i></li>
              <li><b>Q11.</b> A bag bought for ₦16,000 is sold for ₦20,000. Profit %? <i>Ans: 4,000/16,000 x 100% = 25%.</i></li>
              <li><b>Q12.</b> Find the simple interest on ₦24,000 at 5% per year for 2 1/2 years. <i>Ans: (24,000 x 5 x 2.5) ÷ 100 = ₦3,000.</i></li>
            </ul>
            <div class="formula">SUMMARY: A ratio compares like quantities part-to-part and simplifies like a fraction; sharing in a ratio means dividing into equal shares. Proportion links equal ratios — direct proportion grows together (unitary method), inverse proportion trades one quantity against the other. Percentages express anything 'out of 100' and convert freely with fractions and decimals; they measure change, discount, profit, loss and interest — the arithmetic of the market, the bank and the exam hall alike.</div>

`,
          cards: [
            { q: 'Share ₦4,500 between Ada and Bola in the ratio 2 : 3.', a: 'Total parts = 5; one part = ₦900; Ada = 2 x 900 = ₦1,800, Bola = 3 x 900 = ₦2,700.' },
            { q: 'Write two ratios equivalent to 4 : 6 and reduce it to its simplest form.', a: '8 : 12 and 2 : 3 are equivalent; simplest form is 2 : 3 (divide by the HCF 2) — order matters in a ratio.' },
            { q: 'If 5 notebooks cost ₦750, how much do 8 cost?', a: 'Unitary method: one costs ₦150, so 8 cost ₦1,200.' },
            { q: 'Express 3/5 and 0.24 as percentages.', a: '3/5 = 60%; 0.24 = 24% — multiply fractions/decimals by 100 to get per cent (\'per hundred\').' },
            { q: 'Find 15% of ₦6,000.', a: '15/100 x 6000 = ₦900.' },
            { q: 'In a class of 40, 30 passed. What percentage passed?', a: '30/40 x 100 = 75% — \'what percentage of\' means divide then multiply by 100.' },
            { q: 'A price rises from ₦800 to ₦1,000. Find the percentage increase.', a: 'Increase = ₦200; % increase = 200/800 x 100 = 25% — always divide by the ORIGINAL value.' },
            { q: 'A trader buys a bag for ₦5,000 and sells it for ₦6,000. Find the profit and the profit percentage.', a: 'Profit = ₦1,000; profit % = 1000/5000 x 100 = 20% (profit is always measured on cost price).' },
            { q: 'A shirt marked ₦2,400 is sold at 25% discount. Find the selling price.', a: 'Discount = 25% of 2400 = ₦600; selling price = ₦1,800.' },
            { q: 'An article costing ₦1,600 attracts 7.5% VAT. Find the total price.', a: 'VAT = 7.5/100 x 1600 = ₦120; total = ₦1,720.' },
            { q: 'A map scale is 1 : 50,000. Two towns are 4 cm apart on the map. Find the real distance.', a: 'Real = 4 x 50,000 = 200,000 cm = 2 km (100,000 cm = 1 km).' },
            { q: 'How do you share ₦1,500 in the ratio 2:3?', a: 'Add the parts (2 + 3 = 5), find one part (₦1,500 ÷ 5 = ₦300), then multiply: ₦600 and ₦900.' },
            { q: 'Fast way to find 45% of 240?', a: '10% is 24; so 40% = 96 and 5% = 12; total 108. Building from 10% and 5% beats long multiplication.' },
            { q: 'Turn 0.35, 24/30 and a 25% increase into their partners.', a: '0.35 = 35%; 24/30 = 80%; increasing ₦800 by 25% adds ₦200 to give ₦1,000.' },
            { q: 'Why is the ratio of 20 minutes to 1 hour equal to 1:3?', a: 'Ratios need the same units: 1 hour = 60 minutes, so 20:60, which divides down to 1:3.' }
          ],
          quiz: [
            { q: 'Share 72 in the ratio 4 : 5.', options: ['32 and 40', '36 and 36', '28 and 44', '40 and 32'], correct: 0, exp: 'Total parts = 9, one part = 8: 4 x 8 = 32 and 5 x 8 = 40 — the larger share matches the larger ratio number.' },
            { q: 'If 6 pens cost ₦900, what is the cost of 10 pens?', options: ['₦1,500', '₦1,200', '₦1,600', '₦5,400'], correct: 0, exp: 'One pen = 900/6 = ₦150, so 10 pens = ₦1,500 (unitary method).' },
            { q: 'Express 45 minutes as a percentage of 3 hours.', options: ['25%', '15%', '45%', '75%'], correct: 0, exp: '3 hours = 180 minutes, so 45/180 x 100 = 25% — always convert to the same unit first.' },
            { q: 'A price falls from ₦2,000 to ₦1,700. Find the percentage decrease.', options: ['15%', '30%', '17%', '85%'], correct: 0, exp: 'Decrease = ₦300; 300/2000 x 100 = 15% — divide by the ORIGINAL price.' },
            { q: 'Convert 5/8 to a percentage.', options: ['62.5%', '58%', '52.5%', '80%'], correct: 0, exp: '5/8 = 0.625 = 62.5% — divide top by bottom, then multiply by 100.' },
            { q: 'Share ₦1,500 between Ada and Bola in the ratio 2:3. Ada gets:', options: ['₦600', '₦900', '₦750', '₦500'], correct: 0,
              exp: '2 + 3 = 5 parts; one part = 1,500 ÷ 5 = 300; Ada gets 2 × 300 = ₦600.' },
            { q: '45% of 240 = ?', options: ['108', '96', '120', '45'], correct: 0,
              exp: '10% is 24, so 40% is 96 and 5% is 12 → 96 + 12 = 108.' },
            { q: 'Express the ratio 30:45 in its lowest terms.', options: ['2:3', '3:2', '5:6', '6:9'], correct: 0,
              exp: 'Divide both by the HCF 15: 30 ÷ 15 = 2 and 45 ÷ 15 = 3.' },
            { q: 'If 5 exercise books cost ₦750, then 8 cost:', options: ['₦1,200', '₦1,000', '₦1,500', '₦960'], correct: 0,
              exp: 'One book = 750 ÷ 5 = ₦150; eight books = 150 × 8 = ₦1,200.' },
            { q: '0.35 as a percentage is:', options: ['35%', '3.5%', '0.35%', '350%'], correct: 0,
              exp: 'Multiply by 100: 0.35 × 100 = 35%.' },
            { q: 'A pupil scores 24 out of 30. The percentage is:', options: ['80%', '24%', '75%', '90%'], correct: 0,
              exp: '24/30 = 4/5 = 0.8 = 80%.' },
            { q: 'Increase ₦800 by 25%.', options: ['₦1,000', '₦900', '₦200', '₦1,200'], correct: 0,
              exp: '25% of 800 is 200; 800 + 200 = ₦1,000.' },
            { q: 'The ratio of 20 minutes to 1 hour is:', options: ['1:3', '20:1', '3:1', '1:2'], correct: 0,
              exp: 'Same units first: 1 hour = 60 minutes, so 20:60 = 1:3.' },
            { q: '12 is what percentage of 48?', options: ['25%', '12%', '48%', '50%'], correct: 0,
              exp: 'Divide the part by the whole, then ×100: 12 ÷ 48 = 0.25, and 0.25 × 100 = 25%.' },
            { q: 'Divide 72 in the ratio 5:3. The bigger share is:', options: ['45', '27', '40', '36'], correct: 0,
              exp: '5 + 3 = 8 parts; one part = 9; bigger share = 5 × 9 = 45.' }
          ],
        }
      ],
      JSS2: [
        {
          title: 'Simple Equations & Directed Numbers',
          tags: ['Balancing equations', 'Negative numbers', 'BODMAS'],
          summary: 'Solving one- and two-step equations and working confidently with negative numbers.',
          content: `
            <h3>1. Directed numbers — numbers with a direction</h3>
            <p><b>Directed numbers</b> are positive and negative numbers together. They describe opposite directions: profit (+) and loss (-), above (+) and below (-) zero, deposit (+) and withdrawal (-), North (+) and South (-). The <b>sign</b> tells the direction; the size (magnitude) tells how much.</p>
            <ul>
              <li>+5 and -5 have the SAME size but OPPOSITE directions; they are 10 apart on the number line.</li>
              <li>On the number line, numbers INCREASE to the right: -1 &gt; -2 &gt; -3, however strange that feels at first.</li>
              <li>The distance of a number from zero (ignoring sign) is its <b>absolute value</b>: |-7| = 7.</li>
            </ul>

            <h3>2. Adding and subtracting directed numbers</h3>
            <ul>
              <li><b>Same signs:</b> add the sizes, keep the sign: (+3) + (+5) = +8; (-3) + (-5) = -8.</li>
              <li><b>Different signs:</b> subtract the smaller size from the bigger; take the sign of the bigger: (+9) + (-4) = +5; (-9) + (+4) = -5.</li>
              <li><b>Subtracting</b> = adding the opposite: (+7) - (+3) = +4; (+7) - (-3) = (+7) + (+3) = +10; (-7) - (-3) = (-7) + (+3) = -4.</li>
            </ul>
            <svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A number line from minus eight to plus eight showing the calculation minus three plus five: a jump of five steps to the right starting at minus three and landing at plus two">
              <path d="M20 70 L440 70" stroke="#334155" stroke-width="2.5"/>
              <path d="M432 64 L440 70 L432 76" fill="#334155"/>
              <path d="M28 64 L20 70 L28 76" fill="#334155"/>
              <g stroke="#334155" stroke-width="2">
                <path d="M45 65 L45 75"/><path d="M70 65 L70 75"/><path d="M95 65 L95 75"/><path d="M120 65 L120 75"/><path d="M145 65 L145 75"/><path d="M170 65 L170 75"/><path d="M195 65 L195 75"/><path d="M220 65 L220 75"/><path d="M245 65 L245 75"/><path d="M270 65 L270 75"/><path d="M295 65 L295 75"/><path d="M320 65 L320 75"/><path d="M345 65 L345 75"/><path d="M370 65 L370 75"/><path d="M395 65 L395 75"/><path d="M420 65 L420 75"/>
              </g>
              <g font-size="10" fill="#334155" text-anchor="middle" font-weight="700">
                <text x="70" y="94">-6</text><text x="120" y="94">-4</text><text x="170" y="94">-2</text><text x="220" y="94">0</text><text x="270" y="94">2</text><text x="320" y="94">4</text><text x="370" y="94">6</text><text x="420" y="94">8</text>
              </g>
              <circle cx="145" cy="70" r="6" fill="#d97706"/>
              <text x="145" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">start at -3</text>
              <path d="M145 46 C190 18 250 18 292 44" stroke="#059669" stroke-width="2.5" fill="none"/>
              <path d="M286 36 L295 46 L282 48" fill="#059669"/>
              <text x="220" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">+5 (five steps right)</text>
              <circle cx="295" cy="70" r="6" fill="#059669"/>
              <text x="295" y="116" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">land on +2</text>
            </svg>
            <div class="worked"><b>Money model:</b> think of positives as naira you HAVE and negatives as naira you OWE. You owe ₦3,000 (-3,000) and earn ₦5,000: pay the debt first, and ₦2,000 remains → (-3,000) + (+5,000) = +2,000. The number line and the purse always agree.</div>

            <h3>3. Multiplying and dividing directed numbers</h3>
            <ul>
              <li><b>Same signs → positive:</b> (+4) x (+3) = +12; (-4) x (-3) = +12; (-12) ÷ (-3) = +4.</li>
              <li><b>Different signs → negative:</b> (-4) x (+3) = -12; (+4) x (-3) = -12; (-12) ÷ (+3) = -4.</li>
              <li>Memory hook: 'friends of friends are friends; enemies of enemies are friends; friends of enemies are enemies'.</li>
            </ul>
            <div class="formula">Watch out — TRAP: (-3)^2 = +9 but -3^2 = -9! The square in -3^2 applies only to the 3 (order of operations), while (-3)^2 squares the whole negative number. Exams adore this trap.</div>

            <h3>4. Order of operations with directed numbers (BODMAS)</h3>
            <p><b>B</b>rackets → <b>O</b>f (powers/roots) → <b>D</b>ivision/<b>M</b>ultiplication → <b>A</b>ddition/<b>S</b>ubtraction, left to right. Signs make discipline essential.</p>
            <div class="worked"><b>Worked example:</b> -2 + 3 x (-4) - (-6).<br>Multiply first: 3 x (-4) = -12. Then: -2 + (-12) - (-6) = -2 - 12 + 6 = -8.</div>
            <div class="worked"><b>Worked example:</b> (-2 + 3) x (-4) - (-6) = (+1) x (-4) + 6 = -4 + 6 = +2. Brackets change everything — compare with the previous answer (-8).</div>

            <h3>5. Simple equations — the balance method, revisited</h3>
            <ul>
              <li>x + 8 = 3 → x = 3 - 8 = -5 (directed numbers make the answer possible!).</li>
              <li>x - 5 = -9 → x = -9 + 5 = -4.</li>
              <li>-3x = 21 → x = -7. And -x = 6 → x = -6.</li>
              <li>x/(-4) = 3 → x = -12.</li>
            </ul>

            <h3>6. Variables on both sides</h3>
            <p>Collect the x-terms on ONE side and the numbers on the other. Move a term across the = by doing the opposite operation to both sides.</p>
            <div class="worked"><b>Worked example:</b> 5x - 3 = 2x + 9.<br>Subtract 2x: 3x - 3 = 9. Add 3: 3x = 12. Divide: x = 4. Check: 5(4) - 3 = 17 = 2(4) + 9.</div>
            <div class="worked"><b>Worked example with negatives:</b> 7 - 2x = 3x - 8.<br>Add 2x: 7 = 5x - 8. Add 8: 15 = 5x. x = 3. Check: 7 - 6 = 1 and 9 - 8 = 1.</div>

            <h3>7. Equations with brackets</h3>
            <div class="worked"><b>Worked example:</b> 3(x - 4) = 2(x + 1).<br>Open: 3x - 12 = 2x + 2. Subtract 2x: x - 12 = 2. Add 12: x = 14.</div>
            <div class="formula">TIP: open ALL brackets first, then collect like terms. Trying to move bracketed chunks across the = sign is the classic error.</div>

            <h3>8. Equations with fractions</h3>
            <p>Multiply EVERY term by the LCM of the denominators to clear the fractions.</p>
            <div class="worked"><b>Worked example:</b> x/3 + 2 = x/2 - 1. LCM of 3 and 2 is 6. Multiply all: 2x + 12 = 3x - 6. Then 12 + 6 = 3x - 2x → x = 18. Check: 18/3 + 2 = 8 and 18/2 - 1 = 8.</div>
            <div class="worked"><b>Worked example:</b> (2x + 1)/5 = 3. Multiply by 5: 2x + 1 = 15 → 2x = 14 → x = 7.</div>

            <h3>9. Word problems into equations</h3>
            <div class="worked"><b>Worked example (number puzzle):</b> 'I think of a number, multiply it by 4, subtract 7, and get 21.' 4x - 7 = 21 → 4x = 28 → x = 7.</div>
            <div class="worked"><b>Worked example (ages):</b> In 5 years, Kemi will be three times as old as she was 3 years ago. Let now = x: x + 5 = 3(x - 3) → x + 5 = 3x - 9 → 14 = 2x → x = 7. Kemi is 7 (check: 12 = 3 x 4).</div>
            <div class="worked"><b>Worked example (temperature):</b> A freezer falls 3 degC every hour from 8 degC. After how many hours is it -16 degC? 8 - 3h = -16 → -3h = -24 → h = 8 hours.</div>

            <h3>10. A first look at inequalities</h3>
            <p>An <b>inequality</b> uses &lt;, &gt;, &lt;= or &gt;= instead of =. Solve it exactly like an equation — with ONE golden rule: <b>multiplying or dividing by a NEGATIVE number flips the sign</b>.</p>
            <ul>
              <li>x + 3 &gt; 7 → x &gt; 4 (every number above 4 works — infinitely many solutions).</li>
              <li>-2x &lt; 10 → divide by -2 and FLIP: x &gt; -5.</li>
              <li>Solutions are drawn on a number line with an open circle and an arrow: x &gt; 4 shades everything right of 4.</li>
            </ul>
            <div class="formula">EXAM LINE: the flip rule is asked every single session somewhere in the country. If you divide or multiply by a negative and did not flip, the mark is gone.</div>

            <h3>11. Changing the subject of a formula</h3>
            <p>Treat the letter you want as 'x' and push everything else across using inverse operations.</p>
            <div class="worked"><b>Worked examples:</b><br>v = u + at, make t the subject: v - u = at → t = (v - u)/a.<br>P = 2(l + b), make l the subject: P/2 = l + b → l = P/2 - b.<br>A = 1/2 bh, make h the subject: 2A = bh → h = 2A/b.</div>

            
            <h3>13. Directed numbers in daily life</h3>
            <ul>
              <li><b>Temperature:</b> Kano at 38 degC and a freezer at -18 degC: the difference is 38 - (-18) = 56 degC.</li>
              <li><b>Bank accounts:</b> a balance of -₦2,500 is an overdraft (you owe the bank). Depositing ₦10,000 gives -2,500 + 10,000 = +₦7,500.</li>
              <li><b>Altitude:</b> Chappal Waddi (Nigeria's highest peak) is about +2,419 m above sea level; a diver 15 m below is at -15 m.</li>
              <li><b>Goal difference:</b> a team scoring 20 and conceding 31 sits at 20 - 31 = -11 in the league table.</li>
              <li><b>Lifts and basements:</b> going from basement -2 to floor +7 is 7 - (-2) = 9 floors of travel.</li>
            </ul>
            <div class="worked"><b>Worked example (league table):</b> Station Rovers win 3 matches (3 goals each, concede 1), draw 1 (1-1) and lose 2 (0-3). Goals for = 9 + 1 + 0 = 10; against = 3 + 1 + 6 = 10... careful: wins 3 x (3-1): for 9, against 3; draw for 1 against 1; losses for 0 against 6. GF = 10, GA = 10 → goal difference = 0. One more 2-0 win makes it +2.</div>

            
            <h3>15. Sanity checks — estimating with signs</h3>
            <p>Directed-number work is where sign slips hide, so build the habit of a two-second sanity check: estimate the SIZE first, then fix the SIGN from the rules.</p>
            <ul>
              <li>(-48) x 22 ≈ -50 x 20 = -1,000 → expect 'about minus one thousand'; if your exact answer says +1,056 or -106, a slip happened.</li>
              <li>(-305) + 288 ≈ -300 + 300 = 0 → expect a small negative (-17), never ±600.</li>
              <li>A bank balance that starts negative and receives a SMALLER deposit must STILL be negative — the sign tells the story before the arithmetic finishes.</li>
            </ul>
            <div class="formula">TIP: after solving ANY equation or signed calculation, substitute or re-estimate. Ten seconds of checking routinely rescues two or three marks per exam.</div>

            <h3>16. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> (-7) + (+11) = ? <i>Ans: +4.</i></li>
              <li><b>Q2.</b> (-6) - (-14) = ? <i>Ans: +8.</i></li>
              <li><b>Q3.</b> (-5) x (-8) = ? <i>Ans: +40.</i></li>
              <li><b>Q4.</b> (-36) ÷ (+9) = ? <i>Ans: -4.</i></li>
              <li><b>Q5.</b> Evaluate -4 + 2 x (-5) - (-3). <i>Ans: -4 - 10 + 3 = -11.</i></li>
              <li><b>Q6.</b> Solve 4x + 7 = -13. <i>Ans: 4x = -20, x = -5.</i></li>
              <li><b>Q7.</b> Solve 6x - 5 = 2x + 11. <i>Ans: 4x = 16, x = 4.</i></li>
              <li><b>Q8.</b> Solve 2(x + 3) = 3(x - 2). <i>Ans: 2x + 6 = 3x - 6 → x = 12.</i></li>
              <li><b>Q9.</b> Solve x/4 - 3 = x/6. <i>Ans: x 12: 3x - 36 = 2x → x = 36.</i></li>
              <li><b>Q10.</b> Solve -3x &gt;= 12. <i>Ans: x &lt;= -4 (sign flips).</i></li>
              <li><b>Q11.</b> Make u the subject of v^2 = u^2 + 2as (u positive). <i>Ans: u = √(v^2 - 2as) — or at JSS level: make a the subject: a = (v^2 - u^2)/(2s).</i></li>
              <li><b>Q12.</b> I think of a number, add 9, then divide by 4 to get -2. Find it. <i>Ans: (x + 9)/4 = -2 → x + 9 = -8 → x = -17.</i></li>
            </ul>
            <div class="formula">SUMMARY: Directed numbers carry signs that record direction; same-sign pairs add, mixed-sign pairs subtract toward the bigger, and products/quotients are positive for like signs, negative otherwise — with BODMAS keeping order. The balance method solves simple equations, equations with variables on both sides, brackets and fractions, and translates word problems into symbols. Inequalities behave like equations except that multiplying or dividing by a negative flips the sign, and formulas can be rearranged by treating the desired letter as the unknown.</div>

`,
          cards: [
            { q: 'Evaluate (-2) x (-3) x (-4).', a: '(-2)(-3) = +6, then 6 x (-4) = -24 — with an odd number of negative factors the product is negative.' },
            { q: 'Evaluate (a) -3 + 7, (b) -4 - 5, (c) -6 + 10.', a: '(a) 4; (b) -9 (move further left); (c) 4 — for unlike signs, subtract the smaller magnitude and keep the sign of the larger.' },
            { q: 'Evaluate (a) 5 - (-2), (b) (-3) x (-4), (c) 12 / (-3).', a: '(a) 7 — subtracting a negative adds; (b) 12 — like signs give a positive; (c) -4 — unlike signs give a negative.' },
            { q: 'State the rule of signs for multiplication and division.', a: 'Same signs -> positive result (+ x + = +, - x - = +); different signs -> negative result (+ x - = -, - x + = -).' },
            { q: 'The temperature at 6 a.m. was -4 degC and rose 9 degrees by noon. Find the noon temperature.', a: '-4 + 9 = 5 degC — moving right on the number line.' },
            { q: 'Solve 2x + 3 = 11.', a: '2x = 8, so x = 4 — undo the addition first, then the multiplication (reverse BODMAS).' },
            { q: 'Solve 3(x - 2) = 12.', a: 'x - 2 = 4, so x = 6 — divide both sides by 3 first, then add 2 (or expand: 3x - 6 = 12).' },
            { q: 'Solve 5x - 3 = 2x + 9.', a: '3x = 12, so x = 4 — subtract 2x from both sides, then add 3.' },
            { q: 'Solve x/2 + 4 = 9.', a: 'x/2 = 5, so x = 10 — subtract 4, then multiply by 2.' },
            { q: 'Check whether x = 3 satisfies 4x + 1 = 13.', a: '4(3) + 1 = 13 — the two sides are equal, so x = 3 is correct; always substitute your answer back to check.' },
            { q: 'What are directed numbers?', a: 'Numbers that carry a sign - positive (+) or negative (-). On a number line, values increase to the right and decrease to the left, so -3 is smaller than -1 and much smaller than 2.' },
            { q: 'What does BODMAS stand for, and why does it matter?', a: 'Brackets, Orders (powers and roots), Division and Multiplication, then Addition and Subtraction, working left to right. It fixes the order of operations so everybody gets the same answer.' },
            { q: 'State the sign rules for multiplication and division.', a: 'Same signs give a positive result (+ x + = +, - x - = +); different signs give a negative result (+ x - = -, - x + = -). Division follows exactly the same rules.' },
            { q: 'What does it mean to "balance" an equation?', a: 'Whatever you do to one side you must do to the other. Balancing keeps the two sides equal while you isolate the unknown letter.' },
            { q: 'How do you solve a two-step equation such as 2x - 5 = 11?', a: 'Undo the operations in reverse order: first add 5 to both sides (2x = 16), then divide both sides by 2 (x = 8). Undo addition/subtraction before multiplication/division.' }
          ],
          quiz: [
            { q: 'Evaluate (-8) + 3 + (-5).', options: ['-10', '-6', '10', '0'], correct: 0, exp: 'Add the negatives first: -8 + (-5) = -13, then -13 + 3 = -10.' },
            { q: 'Solve 7 - x = 10.', options: ['x = -3', 'x = 3', 'x = 17', 'x = -17'], correct: 0, exp: 'Subtract 7 from both sides: -x = 3, so x = -3. Check: 7 - (-3) = 7 + 3 = 10.' },
            { q: 'Evaluate (-6) x 7 and (-6) x (-7).', options: ['-42 and 42', '42 and 42', '-42 and -42', '42 and -42'], correct: 0, exp: 'Unlike signs give a negative product (-42); like signs give a positive product (+42).' },
            { q: 'Solve 2(x + 4) = 3x - 1.', options: ['x = 9', 'x = 7', 'x = -9', 'x = 3'], correct: 0, exp: 'Expand: 2x + 8 = 3x - 1; subtract 2x from both sides: 8 = x - 1; so x = 9. Check: 2(13) = 26 = 27 - 1.' },
            { q: 'A submarine at 45 m below sea level rises 18 m. What is its new depth?', options: ['-27 m', '-63 m', '27 m', '-18 m'], correct: 0, exp: 'Below sea level is negative: -45 + 18 = -27 m — it is still 27 m below the surface.' },
            { q: 'Evaluate: -7 + 12', options: ['5', '-5', '19', '-19'], correct: 0,
              exp: 'Different signs, so subtract the smaller from the larger and keep the sign of the larger: 12 - 7 = 5, positive.' },
            { q: 'Evaluate: -6 - (-4)', options: ['-10', '-2', '2', '10'], correct: 1,
              exp: 'Subtracting a negative is the same as adding: -6 - (-4) = -6 + 4 = -2.' },
            { q: 'Evaluate: -3 x (-5)', options: ['-15', '15', '-8', '8'], correct: 1,
              exp: 'A negative multiplied by a negative gives a positive, so the answer is 15.' },
            { q: 'Evaluate: -20 / 4', options: ['-5', '5', '-16', '16'], correct: 0,
              exp: 'A negative divided by a positive gives a negative: -20 / 4 = -5.' },
            { q: 'Using BODMAS, evaluate 3 + 4 x 2.', options: ['14', '11', '10', '24'], correct: 1,
              exp: 'Multiplication comes before addition: 4 x 2 = 8, then 3 + 8 = 11.' },
            { q: 'Evaluate 12 - (3 + 5) / 2.', options: ['8', '10', '4', '2.5'], correct: 0,
              exp: 'Brackets first: 3 + 5 = 8. Then division: 8 / 2 = 4. Finally 12 - 4 = 8.' },
            { q: 'Solve: x + 9 = 15', options: ['6', '24', '-6', '9'], correct: 0,
              exp: 'Subtract 9 from both sides to keep the equation balanced: x = 15 - 9 = 6.' },
            { q: 'Solve: 3y = 21', options: ['7', '18', '63', '3'], correct: 0,
              exp: 'Divide both sides by 3: y = 21 / 3 = 7.' },
            { q: 'Solve: 2x - 5 = 11', options: ['8', '3', '13', '-8'], correct: 0,
              exp: 'Undo the subtraction first: 2x = 16. Then undo the multiplication: x = 8.' },
            { q: 'Solve: x/4 = 3', options: ['12', '7', '0.75', '4'], correct: 0,
              exp: 'Multiply both sides by 4: x = 3 x 4 = 12.' }
          ],
        }
      ],
      JSS3: [
        {
          title: 'Business Mathematics: Profit, Loss, Discount & Interest',
          tags: ['Profit & loss', 'Simple interest', 'Compound interest', 'Discount'],
          summary: 'The money mathematics that appears in every JSS3 and BECE paper.',
          content: `
            <h3>1. The language of the market</h3>
            <ul>
              <li><b>Cost price (CP)</b> — all the money a trader spends to bring goods to the shop (price + transport + storage).</li>
              <li><b>Selling price (SP)</b> — the price the customer actually pays.</li>
              <li><b>Marked price</b> — the label price before any discount.</li>
              <li><b>Profit</b> = SP - CP when SP &gt; CP. <b>Loss</b> = CP - SP when SP &lt; CP.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a trader buys a carton of noodles for ₦8,500, pays ₦500 transport, and sells it for ₦10,200. CP = 8,500 + 500 = ₦9,000. Profit = 10,200 - 9,000 = ₦1,200.</div>

            <h3>2. Profit and loss percentage</h3>
            <ul>
              <li><b>Profit %</b> = (profit ÷ CP) x 100%. <b>Loss %</b> = (loss ÷ CP) x 100%. ALWAYS on cost price.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> CP ₦4,000, SP ₦4,800 → profit ₦800 → profit % = 800/4,000 x 100% = 20%.<br>CP ₦5,000 sold at 15% loss → loss = 750 → SP = ₦4,250.</div>
            <div class="worked"><b>Reverse example:</b> a phone is sold for ₦63,000 at 5% profit. CP = SP ÷ 1.05 = ₦60,000. (Because SP = 105% of CP.)</div>

            <h3>3. Discounts — the art of the market</h3>
            <p>A <b>discount</b> is a reduction from the marked price, usually a percentage. Sale price = marked price - discount. Successive discounts apply ONE AFTER THE OTHER on the NEW price.</p>
            <div class="worked"><b>Worked example:</b> a shirt marked ₦8,000 gets 10% discount: discount = ₦800, sale price = ₦7,200.</div>
            <div class="worked"><b>Worked example (successive):</b> the same shirt gets '10% then 5%' in a promo: after 10% → ₦7,200; then 5% of 7,200 = ₦360 → final ₦6,840. NOT 15% off ₦8,000 (which would be ₦6,800) — percentages chain on the current price.</div>
            <div class="formula">Watch out — TRAP: '10% + 5% discount' in real life usually means SUCCESSIVE discounts, not 15% at once. Read carefully and compute step by step.</div>

            <h3>4. Commission, rate and taxes in one line</h3>
            <ul>
              <li><b>Commission</b> — payment as a percentage of sales: an agent selling land worth ₦2,000,000 at 3% commission earns ₦60,000.</li>
              <li><b>VAT</b> — value added tax of 7.5% added to many bills in Nigeria: a ₦20,000 service carries ₦1,500 VAT → total ₦21,500.</li>
            </ul>

            <h3>5. Simple interest</h3>
            <p><b>I = (P x R x T) ÷ 100</b> with P = principal, R = rate % per year, T = time in YEARS. Amount A = P + I.</p>
            <div class="worked"><b>Worked example:</b> ₦120,000 at 8% per year for 3 years: I = (120,000 x 8 x 3)/100 = ₦28,800; amount = ₦148,800.</div>
            <div class="worked"><b>Worked example (months):</b> ₦45,000 at 6% for 18 months: T = 1.5 years → I = (45,000 x 6 x 1.5)/100 = ₦4,050.</div>
            <div class="worked"><b>Reverse example:</b> an investment earned ₦9,000 interest in 2 years at 5%. Find P: 9,000 = (P x 5 x 2)/100 → 9,000 = P/10 → P = ₦90,000.</div>

            <h3>6. Compound interest — a first look</h3>
            <p><b>Compound interest</b> adds each year's interest to the principal, so interest itself earns interest. Amount after n years: <b>A = P(1 + R/100)^n</b>.</p>
            <div class="worked"><b>Worked example:</b> ₦10,000 at 10% compounded for 2 years.<br>Year 1: 10,000 + 1,000 = 11,000. Year 2: 11,000 + 1,100 = 12,100.<br>Formula check: 10,000 x (1.1)^2 = 10,000 x 1.21 = ₦12,100. Compound pays ₦2,100 where simple would pay ₦2,000.</div>

            <h3>7. Hire purchase and instalments</h3>
            <p><b>Hire purchase (HP)</b> = deposit + monthly instalments; it usually costs MORE than the cash price.</p>
            <div class="worked"><b>Worked example:</b> a bicycle's cash price is ₦60,000. HP: deposit ₦15,000 + 10 monthly instalments of ₦5,500 = 15,000 + 55,000 = ₦70,000. The HP buyer pays ₦10,000 extra for the privilege of paying slowly.</div>

            <h3>8. Shares and dividends (a glimpse)</h3>
            <ul>
              <li>Companies split ownership into <b>shares</b>; a <b>dividend</b> is the profit shared per share.</li>
              <li>2,000 shares paying ₦1.50 dividend each return ₦3,000 a year.</li>
            </ul>

            <h3>9. Rates and utility bills</h3>
            <div class="worked"><b>Worked example (electricity):</b> a home uses 120 units (kWh) in a month at ₦60 per unit, plus a fixed charge of ₦850 and 7.5% VAT on the energy cost. Energy = 120 x 60 = ₦7,200; VAT = ₦540; bill = 7,200 + 540 + 850 = ₦8,590. This is exactly how NEPA/disco bills are built.</div>

            
            <h3>10. Simple vs compound — watching money grow</h3>
            <p>The gap between simple and compound interest is invisible in year one and unmistakable by year three, because compound interest pays interest on interest.</p>
            <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart comparing 10,000 naira at 10 percent per year: simple interest grows to 11,000, 12,000 and 13,000 over three years while compound interest grows to 11,000, 12,100 and 13,310, pulling ahead each year">
              <path d="M40 140 L430 140" stroke="#334155" stroke-width="2"/>
              <g font-size="10" fill="#334155" text-anchor="middle" font-weight="700">
                <text x="105" y="158">Year 1</text><text x="235" y="158">Year 2</text><text x="365" y="158">Year 3</text>
              </g>
              <rect x="70" y="40" width="30" height="100" fill="#94a3b8"/>
              <rect x="104" y="40" width="30" height="100" fill="#6366f1"/>
              <rect x="200" y="30" width="30" height="110" fill="#94a3b8"/>
              <rect x="234" y="29" width="30" height="111" fill="#6366f1"/>
              <rect x="330" y="20" width="30" height="120" fill="#94a3b8"/>
              <rect x="364" y="17" width="30" height="123" fill="#6366f1"/>
              <g font-size="9" fill="#334155" text-anchor="middle" font-weight="700">
                <text x="85" y="34">11,000</text><text x="119" y="34">11,000</text>
                <text x="215" y="24">12,000</text><text x="249" y="23">12,100</text>
                <text x="345" y="14">13,000</text><text x="379" y="11">13,310</text>
              </g>
              <rect x="150" y="166" width="10" height="8" fill="#94a3b8"/>
              <text x="166" y="173" font-size="9" fill="#475569" text-anchor="start">simple</text>
              <rect x="210" y="166" width="10" height="8" fill="#6366f1"/>
              <text x="226" y="173" font-size="9" fill="#475569" text-anchor="start">compound</text>
            </svg>
            <div class="worked"><b>Read the chart:</b> at 10% on ₦10,000, simple and compound match in year 1 (₦11,000). Year 2: simple ₦12,000 vs compound ₦12,100. Year 3: ₦13,000 vs ₦13,310. The extra ₦310 is interest-on-interest — and over 10 or 20 years that gap becomes enormous. That is why savings and investments compound, and why debts (loans) are dangerous when they compound.</div>

            <h3>11. Nigerian money habits — esusu, mobile fees and smart choices</h3>
            <ul>
              <li><b>Esusu / alajo</b> — a group savings circle: 12 members drop ₦5,000 weekly and one member collects the pot each week. The 'return' is not interest but discipline and rotation — a cultural financial instrument.</li>
              <li><b>Mobile transfer fees and charges</b> — a ₦50 charge on every transfer is a percentage that SHRINKS as amounts grow: on ₦1,000 it is 5%; on ₦50,000 it is 0.1%. Bundling payments saves real money — percentages in reverse.</li>
              <li><b>'Buy now, pay later' vs saving first:</b> an HP phone costing ₦450,000 in instalments against a ₦380,000 cash price charges ₦70,000 for impatience (about 18% extra). Saving ₦32,000 monthly for a year and buying cash keeps that money in your pocket.</li>
              <li><b>Discount hunting:</b> a 20% end-of-season discount on a ₦25,000 school bag saves ₦5,000 — the same as earning 20% profit on ₦25,000 of trading.</li>
            </ul>
            <div class="worked"><b>Worked example (market day, full chain):</b> Mama Nkechi buys 60 wrappers at ₦700 each (₦42,000) and spends ₦3,000 on transport. She sells 50 at ₦1,000 and the last 10 at a 20% discount off ₦1,000.<br>CP = 45,000. Revenue = 50,000 + 10 x 800 = 58,000.<br>Profit = 13,000 → profit % = 13,000/45,000 x 100% = 28.9% (about 29%). A full business-maths story in one market day.</div>

            
            <h3>13. Rapid-fire worked problems — the BECE mix</h3>
            <div class="worked"><b>W1.</b> A dealer buys at ₦18,000 and wants 15% profit. Marked SP = 18,000 x 1.15 = ₦20,700.</div>
            <div class="worked"><b>W2.</b> After a 10% discount a radio costs ₦13,500. Marked price = 13,500 ÷ 0.90 = ₦15,000.</div>
            <div class="worked"><b>W3.</b> Simple interest on ₦x for 4 years at 5% equals ₦4,000. 4,000 = (x x 5 x 4)/100 = x/5 → x = ₦20,000.</div>
            <div class="worked"><b>W4.</b> A shopkeeper's profit of 30% on cost means SP = 1.3 x CP; if SP is ₦9,100 then CP = 9,100 ÷ 1.3 = ₦7,000.</div>
            <ul>
              <li>Pattern to memorise: 'sold at p% profit' → SP = CP x (1 + p/100); 'p% loss' → SP = CP x (1 - p/100); 'p% discount' → sale = marked x (1 - p/100). The multiplier (1 ± p/100) solves nine-tenth of business maths in one step.</li>
            </ul>

            
            <h3>15. The one-page formula bank</h3>
            <ul>
              <li>Profit = SP - CP; Loss = CP - SP.</li>
              <li>Profit % = profit/CP x 100%; Loss % = loss/CP x 100%.</li>
              <li>SP at p% profit = CP x (1 + p/100); at p% loss = CP x (1 - p/100).</li>
              <li>Discount = marked price x p/100; Sale price = marked price x (1 - p/100).</li>
              <li>Simple interest I = PRT/100; Amount A = P + I.</li>
              <li>Compound amount A = P(1 + R/100)^n.</li>
              <li>Hire purchase = deposit + (instalment x number of instalments).</li>
              <li>Commission = sales x rate/100; VAT added = price x 7.5/100.</li>
            </ul>
            <div class="formula">EXAM CODE: copy this bank onto rough paper the moment the exam starts — every business-maths question on the paper is one of these eight lines wearing a story.</div>

            <h3>16. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> CP ₦7,500, SP ₦9,000. Profit %? <i>Ans: 1,500/7,500 x 100% = 20%.</i></li>
              <li><b>Q2.</b> Goods bought for ₦12,000 sold at 8% loss. SP? <i>Ans: 12,000 - 960 = ₦11,040.</i></li>
              <li><b>Q3.</b> An item marked ₦5,600 gets 12 1/2% discount. Sale price? <i>Ans: discount ₦700 → ₦4,900.</i></li>
              <li><b>Q4.</b> A salesman earns 4% on ₦850,000 of sales. Commission? <i>Ans: ₦34,000.</i></li>
              <li><b>Q5.</b> Simple interest on ₦75,000 at 4% for 2 1/2 years. <i>Ans: (75,000 x 4 x 2.5)/100 = ₦7,500.</i></li>
              <li><b>Q6.</b> At what rate will ₦50,000 earn ₦6,000 in 3 years (simple)? <i>Ans: 6,000 = (50,000 x R x 3)/100 → R = 4%.</i></li>
              <li><b>Q7.</b> Amount of ₦20,000 at 5% compound for 2 years. <i>Ans: 20,000 x 1.05^2 = ₦22,050.</i></li>
              <li><b>Q8.</b> HP: deposit ₦8,000 + 12 instalments of ₦2,500; cash price ₦35,000. Extra paid on HP? <i>Ans: 8,000 + 30,000 = 38,000; extra = ₦3,000.</i></li>
              <li><b>Q9.</b> A trader makes 25% profit by selling at ₦250 per item. CP per item? <i>Ans: 250 ÷ 1.25 = ₦200.</i></li>
              <li><b>Q10.</b> 90 units of electricity at ₦55/unit, fixed charge ₦700, no VAT. Bill? <i>Ans: 4,950 + 700 = ₦5,650.</i></li>
            </ul>
            <div class="formula">SUMMARY: Business mathematics turns the market into arithmetic: cost, selling and marked prices define profit, loss and discount; profit and loss percentages are always measured on cost. Commission, VAT and rates apply percentages to sales and bills, simple interest follows I = PRT/100 while compound interest lets interest earn interest, and hire purchase shows the hidden price of paying slowly — the complete survival kit for BECE business maths and for the market itself.</div>

`,
          cards: [
            { q: 'Write the formulas for profit and loss.', a: 'Profit = selling price - cost price (when SP > CP); loss = cost price - selling price (when CP > SP).' },
            { q: 'A trader buys a chair for ₦8,000 and sells it for ₦10,000. Find the profit percentage.', a: 'Profit = ₦2,000; profit % = 2000/8000 x 100 = 25% — profit and loss percentages are always on the COST price.' },
            { q: 'An article costing ₦5,000 is sold at a 10% loss. Find the selling price.', a: 'Loss = ₦500, so SP = 5000 - 500 = ₦4,500 (or SP = 90% of CP).' },
            { q: 'A shirt marked ₦3,000 has a 20% discount. Find the amount paid.', a: 'Discount = ₦600; price paid = ₦2,400 — discount is a percentage of the MARKED price.' },
            { q: 'State the simple interest formula and find the interest on ₦20,000 for 3 years at 5% per annum.', a: 'I = PRT/100 = (20000 x 5 x 3)/100 = ₦3,000 — P principal, R rate %, T time in years.' },
            { q: 'Find the total amount (principal + interest) on ₦15,000 for 2 years at 10% simple interest.', a: 'I = ₦3,000, so A = ₦18,000.' },
            { q: '₦10,000 is invested at 10% per annum compound interest for 2 years. Find the amount.', a: 'A = P(1 + r)^2 = 10000 x 1.1 x 1.1 = ₦12,100 — compound interest earns interest on previous interest, so it beats simple interest (₦12,000).' },
            { q: 'A television can be bought for ₦90,000 cash or on hire purchase: ₦30,000 deposit plus 12 monthly instalments of ₦6,000. How much more does hire purchase cost?', a: 'HP total = 30,000 + 72,000 = ₦102,000, which is ₦12,000 more than cash — hire purchase is convenient but more expensive.' },
            { q: 'A salesgirl earns 5% commission on ₦120,000 of sales. How much does she earn?', a: '5/100 x 120,000 = ₦6,000 — commission is a percentage reward on sales value.' },
            { q: 'A bill for ₦25,000 is settled within the discount period at 4% cash discount. Find the amount paid.', a: 'Discount = ₦1,000; amount paid = ₦24,000 — prompt payment earns the discount off the bill total.' },
            { q: 'How is percentage profit calculated?', a: 'Profit / cost price x 100. The base is always the cost price, never the selling price - and percentage loss works exactly the same way.' },
            { q: 'How do you quickly find a sale price after a discount?', a: 'Multiply the marked price by (100 - discount%)/100. A 15% discount, for example, means paying 85% of the marked price.' },
            { q: 'State the simple interest formula and what each letter means.', a: 'I = Prt/100, where P = principal (the money borrowed or saved), r = rate of interest per year, t = time in years. Total amount = P + I.' },
            { q: 'What is the difference between simple and compound interest?', a: 'Simple interest is charged on the original principal only, every year. Compound interest is charged on the principal plus all interest added so far, so it grows faster - "interest on interest".' },
            { q: 'What is commission?', a: 'A percentage of the value of sales paid to the person who made the sale. For example, 5% commission on N40,000 of sales is N2,000.' }
          ],
          quiz: [
            { q: 'A phone bought for ₦12,000 is sold at 15% profit. Find the selling price.', options: ['₦13,800', '₦13,500', '₦14,000', '₦12,150'], correct: 0, exp: 'Profit = 15% of 12,000 = ₦1,800; selling price = 12,000 + 1,800 = ₦13,800.' },
            { q: 'In how many years will ₦8,000 earn ₦1,200 simple interest at 5% per annum?', options: ['3 years', '2 years', '4 years', '5 years'], correct: 0, exp: 'T = 100I/(PR) = (100 x 1200)/(8000 x 5) = 120,000/40,000 = 3 years.' },
            { q: 'A discount of ₦675 is given on a ₦4,500 bag. Find the discount percentage.', options: ['15%', '12%', '20%', '25%'], correct: 0, exp: '675/4500 x 100 = 15% — discount is measured on the marked price.' },
            { q: 'Find the amount on ₦20,000 invested at 10% per annum compound interest for 2 years.', options: ['₦24,200', '₦24,000', '₦22,000', '₦44,000'], correct: 0, exp: 'A = 20,000 x 1.1 x 1.1 = ₦24,200 — the ₦200 above simple interest (₦24,000) is interest earned on the first year of interest.' },
            { q: 'A trader bought goods for ₦9,000 and sold them for ₦7,650. Find the loss percentage.', options: ['15%', '13.5%', '85%', '20%'], correct: 0, exp: 'Loss = ₦1,350; loss% = 1350/9000 x 100 = 15% — loss percentage is on the cost price.' },
            { q: 'A trader buys a bag of rice for N800 and sells it for N1,000. What is her percentage profit?', options: ['20%', '25%', '80%', '125%'], correct: 1,
              exp: 'Profit = N200. Percentage profit is always on the cost price: 200/800 x 100 = 25%.' },
            { q: 'A phone case costs N500 to make. At 10% profit, what is the selling price?', options: ['N450', 'N505', 'N550', 'N600'], correct: 2,
              exp: '10% of N500 = N50, so selling price = 500 + 50 = N550.' },
            { q: 'A pair of shoes bought for N600 is sold for N450. What is the percentage loss?', options: ['15%', '20%', '25%', '33%'], correct: 2,
              exp: 'Loss = N150, and percentage loss is on the cost price: 150/600 x 100 = 25%.' },
            { q: 'A shirt marked N2,000 is sold at 15% discount. How much does the buyer pay?', options: ['N300', 'N1,700', 'N1,850', 'N1,300'], correct: 1,
              exp: 'Discount = 15% of 2,000 = N300. Amount paid = 2,000 - 300 = N1,700.' },
            { q: 'A salesgirl earns 5% commission on N40,000 worth of sales. How much is her commission?', options: ['N2,000', 'N5,000', 'N8,000', 'N400'], correct: 0,
              exp: 'Commission = 5/100 x 40,000 = N2,000.' },
            { q: 'Find the simple interest on N5,000 at 4% per annum for 3 years.', options: ['N600', 'N200', 'N1,200', 'N400'], correct: 0,
              exp: 'I = Prt/100 = (5,000 x 4 x 3)/100 = N600.' },
            { q: 'In the formula I = Prt/100, what does t stand for?', options: ['the total amount', 'time in years', 'the principal', 'the rate per annum'], correct: 1,
              exp: 'P is the principal, r the rate per year, and t the time in years - all three must use matching units.' },
            { q: 'What total amount is due after investing N2,000 at 5% per annum simple interest for 2 years?', options: ['N2,100', 'N2,200', 'N2,050', 'N4,000'], correct: 1,
              exp: 'Interest = (2,000 x 5 x 2)/100 = N200. Amount = principal + interest = N2,200.' },
            { q: 'Why is compound interest greater than simple interest over the same period?', options: ['It always uses a higher rate', 'Interest is added to the principal, so future interest earns interest', 'It is calculated monthly', 'It ignores the principal'], correct: 1,
              exp: 'In compound interest each period\'s interest joins the principal, so the next period earns interest on interest - the amount grows faster.' },
            { q: 'Find the compound interest on N1,000 at 10% per annum for 2 years.', options: ['N100', 'N200', 'N210', 'N221'], correct: 2,
              exp: 'Year 1: 1,000 becomes 1,100. Year 2: 10% of 1,100 = 110, giving 1,210. C.I. = 1,210 - 1,000 = N210 (simple interest would be N200).' }
          ],
        }
      ],
    },
    mock: [
      { q: 'Calculate 23 mod 5.', options: ['1', '2', '3', '4'], correct: 2,
        exp: '23 ÷ 5 = 4 remainder 3, so 23 mod 5 = 3. Modulo always returns the remainder.' },
      { q: 'Convert 45(base 10) to base 2.', options: ['101101(base 2)', '110101(base 2)', '100111(base 2)', '111001(base 2)'], correct: 0,
        exp: '32 + 8 + 4 + 1 = 45, giving bits 1,0,1,1,0,1 → 101101(base 2).' },
      { q: 'The roots of 2x^2 - 5x - 3 = 0 are:', options: ['3 and -1/2', '-3 and 1/2', '3 and 1/2', '-3 and -1/2'], correct: 0,
        exp: 'Using the formula: x = (5 ± √(25+24))/4 = (5 ± 7)/4 → x = 3 or x = -1/2. Check the product: 3 × (-1/2) = -3/2 = c/a ✓' },
      { q: 'If log2x = 5, then x =', options: ['10', '25', '32', '64'], correct: 2,
        exp: 'log2x = 5 means x = 2^5 = 32.' },
      { q: 'The sum of the first 20 positive multiples of 3 is:', options: ['600', '630', '660', '300'], correct: 1,
        exp: 'A.P. with a = 3, d = 3, n = 20: S20 = 20/2 × [2(3) + 19(3)] = 10 × 63 = 630.' },
      { q: 'Differentiate y = 3x^3 - 4x + 7.', options: ['9x^2 - 4', '9x^2 - 4x', '3x^2 - 4', '9x^3 - 4'], correct: 0,
        exp: 'Power rule: 3×3x^2 = 9x^2, -4x → -4, constant 7 → 0. So dy/dx = 9x^2 - 4.' },
      { q: 'The determinant of [[2, 3], [1, 4]] is:', options: ['5', '11', '-5', '2'], correct: 0,
        exp: 'ad - bc = (2×4) - (3×1) = 8 - 3 = 5. A non-zero determinant means the matrix is invertible.' },
      { q: 'A fair die is thrown once. P(even or prime) =', options: ['2/3', '5/6', '1/2', '1/3'], correct: 1,
        exp: 'Even = {2,4,6}, prime = {2,3,5}, overlap = {2}. So 3/6 + 3/6 - 1/6 = 5/6.' }
    ],
    resources: [
      { cat: 'Video lesson', title: 'JAMB Mathematics — full topic-by-topic revision', url: 'https://www.youtube.com/results?search_query=jamb+mathematics+tutorial+nigeria', note: 'Number bases, indices, calculus and statistics walkthroughs.' },
      { cat: 'Structured course', title: 'Khan Academy — Mathematics', url: 'https://www.khanacademy.org/math', note: 'Free mastery practice with instant marking, from algebra to calculus.' },
      { cat: 'Past questions', title: 'Myschool — JAMB/WAEC Maths past questions', url: 'https://myschool.ng/classroom', note: 'Year-by-year UTME and WASSCE questions with answers.' },
      { cat: 'Reference', title: 'Wikipedia — Modular arithmetic', url: 'https://en.wikipedia.org/wiki/Modular_arithmetic', note: 'Deeper background on congruences and clock arithmetic.' },
      { cat: 'Formula sheet', title: 'Differentiation & integration rules', url: 'https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new', note: 'Revise the power, product and chain rules.' }
    ]
  
};
