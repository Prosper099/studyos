#!/usr/bin/env python3
"""lessons1: deepen the two shallowest lessons to full textbook depth."""
P = '/home/user/index.html'
s = open(P, encoding='utf-8').read()

def deepen(title, old_len, new_content):
    global s
    t = "title: '%s'," % title
    i = s.index(t)
    a = s.index('content: `', i) + len('content: `')
    b = s.index('`,', a)
    assert (b - a) == old_len, (title, b - a, old_len)
    s = s[:a] + '\n' + new_content.rstrip('\n') + '\n          ' + s[b:]

VARIATION = """
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
"""

RATES = """
            <h3>1. What rate of reaction means</h3>
            <p>The <b>rate of a reaction</b> is how fast a reactant is used up or a product is formed per unit time. Because concentration is measured in mol/dm^3 and time in seconds, rate is expressed in mol per dm^3 per second.</p>
            <div class="formula">rate = change in concentration ÷ time taken (mol/dm^3/s) • or rate = 1/time for clock reactions</div>
            <div class="worked"><b>Worked example:</b> A reactant's concentration falls from 0.8 mol/dm^3 to 0.2 mol/dm^3 in 30 s. Find the average rate.<br>
            Change = 0.6 mol/dm^3; rate = 0.6 ÷ 30 = <b>0.02 mol/dm^3/s</b>.</div>
            <p>For "clock" reactions (e.g. time until a precipitate hides a cross), rate is compared as <b>1/t</b>: a reaction finishing in 10 s is twice as fast as one finishing in 20 s because 1/10 = 2 × 1/20.</p>

            <h3>2. Collision theory</h3>
            <p>Particles must <b>collide</b> to react, but not every collision works. A collision succeeds only if the particles hit with energy at least equal to the <b>activation energy (Ea)</b> and with the correct orientation. Such a hit is an <b>effective collision</b>. Anything that increases the number of effective collisions per second increases the rate.</p>
            <ul>
              <li><b>Concentration/pressure:</b> more particles per volume → more frequent collisions.</li>
              <li><b>Temperature:</b> particles move faster and more of them exceed Ea — roughly, rate <b>doubles for every 10 °C</b> rise.</li>
              <li><b>Surface area:</b> powdering a solid exposes more particles at the surface for collisions.</li>
              <li><b>Catalyst:</b> provides an alternative path with a <b>lower Ea</b>; it is not consumed.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> a catalyst does <b>not</b> raise the temperature or get used up; it lowers activation energy. WAEC sets trap options saying "a catalyst increases the energy of particles" — false.</div>

            <h3>3. Reading rate curves</h3>
            <p>Plot volume of gas (or mass lost) against time: the curve is <b>steepest at the start</b> (reactants most concentrated), gradually flattens, and goes <b>horizontal when the reaction ends</b>. The slope of the tangent at any point is the instantaneous rate at that time.</p>
            <div class="worked"><b>Worked example:</b> A graph of gas volume against time becomes flat at 60 cm^3 after 90 s. State what the flat portion means.<br>
            The reaction is <b>complete</b> — no more gas is produced because a reactant is used up; the final volume is 60 cm^3.</div>

            <h3>4. Reversible reactions and dynamic equilibrium</h3>
            <p>Some reactions proceed in both directions: A + B ⇌ C + D. The forward arrow makes products; the backward arrow reforms reactants. In a <b>closed system</b>, the two rates eventually become equal and concentrations stop changing — this is <b>dynamic equilibrium</b>: reactions continue in both directions at equal speed, so nothing appears to change.</p>
            <ul>
              <li>At equilibrium, concentrations are <b>constant, not equal</b>.</li>
              <li>Equilibrium can only be reached in a <b>closed</b> container (nothing enters or escapes).</li>
              <li>Adding a catalyst speeds up both directions equally — equilibrium is reached <b>sooner</b> but the position does not shift.</li>
            </ul>

            <h3>5. Le Chatelier's principle</h3>
            <p>When a system at equilibrium is disturbed, it shifts to <b>oppose the disturbance</b>. Three disturbances matter in exams:</p>
            <ul>
              <li><b>Concentration:</b> add more reactant → system shifts forward (towards products) to remove it.</li>
              <li><b>Pressure (gases only):</b> increase pressure → system shifts to the side with <b>fewer gas molecules</b>.</li>
              <li><b>Temperature:</b> increase temperature → system shifts in the <b>endothermic</b> direction to absorb the heat.</li>
            </ul>
            <div class="worked"><b>Worked example (JAMB style):</b> N2(g) + 3H2(g) ⇌ 2NH3(g), forward reaction exothermic. How do you maximise ammonia yield?<br>
            High pressure (4 gas molecules → 2, so forward side has fewer), <b>low</b> temperature (forward is exothermic, so cooling favours it), and remove NH3 as it forms. In industry a compromise temperature (~450 °C) plus an iron catalyst is used so the rate stays practical.</div>
            <div class="tip"><b>Exam tip:</b> temperature is the only factor that changes the <b>value of the equilibrium constant Kc</b>; concentration and pressure shifts change amounts but not Kc.</div>

            <h3>6. The equilibrium constant Kc</h3>
            <p>For aA + bB ⇌ cC + dD, the equilibrium constant is the product concentrations over the reactant concentrations, each raised to its balancing coefficient.</p>
            <div class="formula">Kc = [C]^c [D]^d ÷ [A]^a [B]^b  (concentrations at equilibrium, mol/dm^3)</div>
            <p>A <b>large Kc</b> means products dominate at equilibrium (reaction "goes nearly to completion"); a <b>tiny Kc</b> means reactants dominate. Kc depends on temperature only.</p>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying the reaction "stops" at equilibrium — it is <b>dynamic</b>; both directions continue.</li>
              <li>Claiming a catalyst shifts equilibrium or increases yield — it only speeds up arrival.</li>
              <li>Applying pressure arguments when there is no gas, or when both sides have equal gas molecules (then pressure causes <b>no shift</b>).</li>
              <li>Confusing rate with yield: high temperature speeds a reaction up but can lower the equilibrium yield of an exothermic product.</li>
              <li>Reading the flat part of a rate curve as "fastest reaction" — flat means <b>finished</b>; steepest means fastest.</li>
            </ul>

            <h3>Deep dive: examiner's favourites</h3>
            <p><b>Favourite 1 — the thiosulphate clock:</b> Na2S2O3 + HCl turns cloudy as sulphur forms; the time to hide a marked cross measures rate. Increasing thiosulphate concentration or temperature <b>shortens</b> the time (rate = 1/t rises). Expect a table of times and a question on why.</p>
            <p><b>Favourite 2 — marble chips and acid:</b> compare lumps vs powder of the same mass — powder reacts faster (surface area) but gives the <b>same final gas volume</b> because the amount of marble is unchanged. Graphs show a steeper early curve levelling at the same height.</p>
            <p><b>Favourite 3 — Haber/Contact process reasoning:</b> state conditions with Le Chatelier plus the rate compromise, and name the catalyst (iron for Haber; vanadium(V) oxide for Contact).</p>
            <div class="tip"><b>Speed trick:</b> for any equilibrium shift question, ask three quick checks — gas molecules per side? exo or endo direction? is a catalyst mentioned? — then apply "oppose the change". Ninety seconds, every time.</div>
"""

deepen('Variation: Direct, Inverse, Joint & Partial', 1828, VARIATION)
deepen('Rates of Reaction & Chemical Equilibrium', 2154, RATES)

open(P, 'w', encoding='utf-8').write(s)
print('lessons1 applied OK')
