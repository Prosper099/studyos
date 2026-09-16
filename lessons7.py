#!/usr/bin/env python3
"""lessons7: deepen Sequences & Series, Meaning/Nature/Scope of Government, Atomic Structure & Radioactivity."""
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

SEQ = """
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
"""

GOVTMEANING = """
            <h3>1. Two senses of "government"</h3>
            <p>In the <b>narrow sense</b>, government is the machinery — the people and institutions (executive, legislature, judiciary, civil service) that make and enforce binding rules in a state. In the <b>broad sense</b>, it is the whole <b>process</b> of governing: how power is won, used, checked and lost, and how values (who gets what, when and how) are authoritatively allocated.</p>
            <ul>
              <li>Government is also the art and science of keeping order and providing collective services.</li>
              <li>It is a <b>political association</b>: a community organised for collective decision-making within a territory.</li>
            </ul>

            <h3>2. Key concepts: power, authority, legitimacy, sovereignty</h3>
            <ul>
              <li><b>Power:</b> the ability to make others comply, even against their will.</li>
              <li><b>Authority:</b> power accepted as <b>rightful</b> — people obey the police officer, not just because he can force, but because the office is recognised.</li>
              <li><b>Legitimacy:</b> the popular belief that a government has the right to rule; it turns power into authority. Sources: elections, tradition, law, performance.</li>
              <li><b>Sovereignty:</b> the state's supreme power within its borders, owing no obedience outside (internally supreme, externally independent).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> A robber with a gun has power but not authority. Explain.<br>
            Compliance comes from fear alone; no recognised right to command exists, so the power is illegitimate — the essence of the power/authority distinction.</div>

            <h3>3. Why government exists</h3>
            <ul>
              <li><b>Order & security:</b> without a referee, life is "nasty, brutish and short" (Hobbes' state of nature).</li>
              <li><b>Public goods:</b> roads, defence, streetlights — things the market under-provides.</li>
              <li><b>Rights & justice:</b> protecting life and property, settling disputes by courts, not fists.</li>
              <li><b>Welfare:</b> health, education, safety nets.</li>
              <li><b>Social contract:</b> Locke and Rousseau — people consent to be governed so their rights are protected; a government that breaks the contract loses legitimacy.</li>
            </ul>

            <h3>4. The scope of government as a subject</h3>
            <ul>
              <li><b>Political theory:</b> ideas of justice, rights, democracy, ideologies (liberalism, socialism, fascism).</li>
              <li><b>Institutions:</b> constitutions, legislatures, executives, judiciaries, local government, civil service.</li>
              <li><b>Political behaviour:</b> parties, elections, pressure groups, public opinion, political culture.</li>
              <li><b>Political economy:</b> how governments tax, spend and manage resources.</li>
              <li><b>Administration:</b> how policies become services on the ground.</li>
              <li><b>International relations:</b> diplomacy, war, organisations (UN, AU, ECOWAS).</li>
            </ul>

            <h3>5. Government and its neighbours</h3>
            <p>Government borrows eyes from other disciplines: <b>history</b> supplies the record of institutions, <b>economics</b> explains budgets and policy trade-offs, <b>sociology</b> explains groups and class, <b>philosophy</b> asks what makes rule right, and <b>law</b> provides the rules government enforces. That borrowing is why it is called a <b>social science</b> — it studies human behaviour with evidence, yet its laws are tendencies, not certainties.</p>

            <h3>6. The Nigerian angle</h3>
            <ul>
              <li>Nigeria practices a <b>federal presidential</b> system under a written constitution that is supreme — every arm and level derives power from it.</li>
              <li>Legitimacy questions (electoral credibility, performance) are live Nigerian debates — examiners love "discuss legitimacy".</li>
            </ul>

            <h3>7. Common mistakes that cost marks</h3>
            <ul>
              <li>Using power and authority interchangeably.</li>
              <li>Confusing sovereignty (state's supremacy) with legitimacy (rightfulness in people's eyes).</li>
              <li>Limiting government to "the president and ministers" — the broad sense includes process and behaviour.</li>
              <li>Saying legitimacy comes only from elections; tradition, law and performance also confer it.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> any definition essay earns structure from four hooks: <b>machinery, process, concepts (power/authority/legitimacy/sovereignty), purposes</b>. One paragraph each.</div>
"""

ATOMIC = """
            <h3>1. The atom's architecture</h3>
            <p>An atom has a tiny, dense <b>nucleus</b> (protons: positive; neutrons: neutral) orbited by <b>electrons</b> (negative). The <b>atomic number Z</b> counts protons (it defines the element); the <b>mass number A</b> counts protons + neutrons. In a neutral atom, electrons = protons.</p>
            <div class="formula">Nuclide notation: ^A_Z X • neutrons = A − Z</div>
            <div class="worked"><b>Worked example:</b> For ^23_11 Na: protons = 11, electrons = 11, neutrons = 23 − 11 = <b>12</b>.</div>
            <p><b>Isotopes</b> are atoms of the same element (same Z) with different neutron numbers (different A) — e.g. ^35 Cl and ^37 Cl; ^12 C and ^14 C. Isotopes share chemistry but differ in mass, and some are radioactive.</p>

            <h3>2. Radioactivity — unstable nuclei letting go</h3>
            <p>Nuclei with unbalanced proton/neutron numbers decay spontaneously, emitting three kinds of radiation:</p>
            <ul>
              <li><b>Alpha (α):</b> a helium nucleus (^4_2 He) — charge +2, heavy, stopped by paper, deflected toward the negative plate, most ionising.</li>
              <li><b>Beta (β):</b> a fast electron — charge −1, light, stopped by thin aluminium, deflected strongly (opposite way to α), moderately ionising. It forms when a <b>neutron turns into a proton</b>, so Z increases by 1.</li>
              <li><b>Gamma (γ):</b> electromagnetic radiation — no charge, no mass, reduced only by thick lead/concrete, not deflected, weakly ionising. A and Z stay unchanged.</li>
            </ul>

            <h3>3. Decay equations, balanced like accounts</h3>
            <p>Top numbers (A) and bottom numbers (Z) must balance on both sides.</p>
            <div class="worked"><b>Alpha decay:</b> ^238_92 U → ^234_90 Th + ^4_2 He. (A: 238 = 234 + 4; Z: 92 = 90 + 2.)</div>
            <div class="worked"><b>Beta decay:</b> ^14_6 C → ^14_7 N + ^0_-1 e. (A unchanged; Z rises 6 → 7.)</div>
            <div class="tip"><b>Exam tip:</b> if the question shows A unchanged and Z + 1, the emitted particle is beta; if A − 4 and Z − 2, it is alpha; if nothing changes, gamma.</div>

            <h3>4. Half-life — the clock of decay</h3>
            <p>The <b>half-life</b> is the time for half of a sample's atoms (or half its activity) to decay. After n half-lives, the fraction remaining is (1/2)^n.</p>
            <div class="worked"><b>Worked example:</b> A sample's activity falls from 800 counts/s to 100 counts/s in 15 days. Find the half-life.<br>
            800 → 400 → 200 → 100: three halvings in 15 days → half-life = <b>5 days</b>.</div>
            <div class="worked"><b>Worked example:</b> Half-life 8 h; start with 64 g. After 24 h (3 half-lives): 64 → 32 → 16 → <b>8 g</b> remain.</div>

            <h3>5. Detection and measurement</h3>
            <ul>
              <li><b>Geiger-Müller tube:</b> radiation ionises the gas → clicks/counts.</li>
              <li><b>Cloud chamber:</b> visible tracks (thick short α, thin wispy β).</li>
              <li><b>Film badges:</b> personal dosimeters for workers.</li>
            </ul>

            <h3>6. Nuclear energy: fission and fusion</h3>
            <ul>
              <li><b>Fission:</b> a heavy nucleus (U-235) splits after absorbing a neutron, releasing energy and more neutrons → <b>chain reaction</b>; controlled in reactors, uncontrolled in bombs.</li>
              <li><b>Fusion:</b> light nuclei (hydrogen) join under extreme heat — the Sun's engine; vastly energetic, hard to control on Earth.</li>
              <li><b>Where the energy comes from:</b> the products weigh slightly less; the lost mass becomes energy via <b>E = mc^2</b>.</li>
            </ul>

            <h3>7. Uses and dangers</h3>
            <ul>
              <li><b>Uses:</b> power stations; medicine (radiotherapy for cancer, tracers like iodine-131); carbon-14 <b>dating</b> of ancient wood and bones; industrial thickness gauges; sterilisation.</li>
              <li><b>Dangers:</b> ionising radiation damages cells (cancer, burns, genetic harm); waste stays dangerous for millennia — hence shielding, distance, and time limits.</li>
            </ul>

            <h3>8. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying beta decay leaves Z unchanged — Z <b>increases by 1</b>.</li>
              <li>Thinking gamma changes the element — it only sheds energy.</li>
              <li>Halving the wrong thing: half-life halves the <b>remaining</b> amount each time, not the original.</li>
              <li>Calling isotopes atoms with different protons — it is the <b>neutrons</b> that differ.</li>
              <li>Confusing fission (split) with fusion (join).</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> memorise the radiation table by one word each — α: <b>paper</b>; β: <b>aluminium</b>; γ: <b>lead</b>. Penetration questions answer themselves.</div>
"""

deepen('Sequences & Series (A.P. and G.P.)', 3607, SEQ)
deepen('Meaning, Nature & Scope of Government', 3620, GOVTMEANING)
deepen('Atomic Structure, Radioactivity & Nuclear Energy', 3765, ATOMIC)

open(P, 'w', encoding='utf-8').write(s)
print('lessons7 applied OK')
