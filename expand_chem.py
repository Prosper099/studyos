"""Deep-expand SS Chemistry lessons (batch 2): textbook dives, worked examples, traps, diagrams."""
import textwrap

CUR = '/home/user/index.html'
s = open(CUR).read()

def deep(title, extra):
    global s
    t = s.index("title: '%s'," % title)
    c = s.index('content: `', t)
    close = s.index('\n          `,', c)
    block = textwrap.indent(textwrap.dedent(extra).strip('\n'), '            ')
    s = s[:close] + '\n' + block + '\n' + s[close:]

deep('The Mole Concept & Stoichiometry', """

    <h3>Deep dive: why chemists count by weighing</h3>
    <p>Atoms are far too small to count one by one, so chemistry uses a counting unit the way a trader uses a dozen — the <b>mole</b>. One mole of anything contains <b>6.02 × 10²³</b> particles (Avogadro's constant). One mole of carbon-12 has a mass of exactly 12 g, which gives us the master link: <b>the molar mass (M) of any substance, in g/mol, is numerically equal to its relative formula mass</b>. Water (H₂O) has M = 18 g/mol, so 18 g of water = 1 mole = 6.02 × 10²³ molecules.</p>
    <div class="formula">n = m ÷ M &nbsp;&nbsp;(moles = mass in g ÷ molar mass)</div>
    <p>For <b>gases</b> there is a second bridge: at s.t.p. (0 °C, 760 mmHg) <b>one mole of ANY gas occupies 22.4 dm³</b> (22,400 cm³); at room temperature use 24 dm³. For <b>solutions</b>, concentration in mol/dm³ × volume in dm³ = moles.</p>
    <div class="diagram"><svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="160" cy="85" r="42" fill="#c7d2fe"/>
      <text x="160" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#3730a3">MOLES</text>
      <text x="160" y="96" text-anchor="middle" font-size="10" fill="#4338ca">the hub of chemistry</text>
      <text x="30" y="40" font-size="11" fill="#0f172a">mass (g)</text>
      <line x1="80" y1="45" x2="130" y2="70" stroke="#4f46e5" stroke-width="2" marker-end="url(#ar1)"/>
      <text x="250" y="40" font-size="11" fill="#0f172a">particles</text>
      <line x1="240" y1="45" x2="192" y2="70" stroke="#4f46e5" stroke-width="2" marker-end="url(#ar1)"/>
      <text x="24" y="135" font-size="11" fill="#0f172a">gas volume</text>
      <line x1="80" y1="130" x2="130" y2="105" stroke="#4f46e5" stroke-width="2" marker-end="url(#ar1)"/>
      <text x="240" y="135" font-size="11" fill="#0f172a">solution conc.</text>
      <line x1="245" y1="130" x2="195" y2="105" stroke="#4f46e5" stroke-width="2" marker-end="url(#ar1)"/>
      <text x="90" y="60" font-size="9" fill="#64748b">÷ M</text>
      <text x="215" y="60" font-size="9" fill="#64748b">× 6.02×10²³</text>
      <text x="90" y="122" font-size="9" fill="#64748b">÷ 22.4 (s.t.p.)</text>
      <text x="208" y="122" font-size="9" fill="#64748b">÷ conc.</text>
      <defs><marker id="ar1" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0, 7 3.5, 0 7" fill="#4f46e5"/></marker></defs>
    </svg></div>
    <h3>Worked examples, step by step</h3>
    <p><b>(1) Find the mass of 0.25 mol of sodium trioxocarbonate(IV), Na₂CO₃.</b> M = (2×23) + 12 + (3×16) = 106 g/mol. Mass = n × M = 0.25 × 106 = <b>26.5 g</b>.</p>
    <p><b>(2) What volume does 8 g of oxygen gas occupy at s.t.p.?</b> Careful — oxygen is O₂, M = 32. n = 8/32 = 0.25 mol. V = 0.25 × 22.4 = <b>5.6 dm³</b>.</p>
    <p><b>(3) A compound has empirical formula CH₂O and molar mass 180 g/mol. Find its molecular formula.</b> Empirical mass = 12 + 2 + 16 = 30. Factor = 180 ÷ 30 = 6. Molecular formula = C₆H₁₂O₆ — glucose.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Forgetting diatomic gases: O₂, H₂, N₂, Cl₂ — their molar masses are 32, 2, 28 and 71, not 16, 1, 14, 35.5.</li>
      <li>Mixing cm³ with dm³: 1 dm³ = 1000 cm³; convert before using 22.4 dm³.</li>
      <li>Using the atomic mass of one atom instead of the formula mass of the whole compound.</li>
    </ul>
    <h3>See it around you</h3>
    <p>A 50 kg bag of cement, a sachet of water, a loaf of sugar — shops sell mass, but reactions happen particle-to-particle. The mole is the exchange rate between the mass you can weigh in the lab and the particles that actually react.</p>
""")

deep('Acids, Bases & Salts (with pH)', """

    <h3>Deep dive: the pH scale and indicators</h3>
    <p>The <b>pH scale runs 0 to 14</b>: below 7 acidic, 7 neutral, above 7 basic (alkaline). Each step is ten times stronger — pH 3 is ten times more acidic than pH 4. Indicators are dyes that change colour with pH: <b>litmus</b> (red in acid, blue in base), <b>methyl orange</b> (red in acid, yellow in base — the favourite for strong acid/strong base titrations), and <b>phenolphthalein</b> (colourless in acid, pink in base).</p>
    <div class="diagram"><svg viewBox="0 0 320 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10"  y="15" width="40" height="26" fill="#dc2626"/><text x="30"  y="55" text-anchor="middle" font-size="10" fill="#0f172a">0–2</text>
      <rect x="50"  y="15" width="40" height="26" fill="#f97316"/><text x="70"  y="55" text-anchor="middle" font-size="10" fill="#0f172a">3–4</text>
      <rect x="90"  y="15" width="40" height="26" fill="#facc15"/><text x="110" y="55" text-anchor="middle" font-size="10" fill="#0f172a">5–6</text>
      <rect x="130" y="15" width="40" height="26" fill="#22c55e"/><text x="150" y="55" text-anchor="middle" font-size="10" fill="#0f172a">7</text>
      <rect x="170" y="15" width="40" height="26" fill="#38bdf8"/><text x="190" y="55" text-anchor="middle" font-size="10" fill="#0f172a">8–9</text>
      <rect x="210" y="15" width="40" height="26" fill="#3b82f6"/><text x="230" y="55" text-anchor="middle" font-size="10" fill="#0f172a">10–11</text>
      <rect x="250" y="15" width="40" height="26" fill="#7e22ce"/><text x="270" y="55" text-anchor="middle" font-size="10" fill="#0f172a">12–14</text>
      <text x="70"  y="10" font-size="9" fill="#64748b">strong acid</text>
      <text x="143" y="10" font-size="9" fill="#64748b">neutral</text>
      <text x="245" y="10" font-size="9" fill="#64748b">strong base</text>
    </svg></div>
    <h3>Salts: solubility rules you must memorise</h3>
    <ul>
      <li><b>All</b> sodium, potassium and ammonium salts, and <b>all</b> nitrates, are soluble.</li>
      <li>Chlorides are soluble <b>except</b> silver and lead(II) chlorides (white precipitates).</li>
      <li>Sulphates(VI) are soluble <b>except</b> barium, lead(II) and calcium sulphate(VI).</li>
      <li>Carbonates are <b>insoluble</b> except those of sodium, potassium and ammonium.</li>
    </ul>
    <p>Method of preparation follows solubility: a <b>soluble</b> salt from acid + alkali by <b>titration</b> (or acid + excess insoluble base, then filter and crystallise); an <b>insoluble</b> salt by <b>precipitation</b> — mixing two soluble salts, e.g. AgNO₃ + NaCl → AgCl↓ + NaNO₃.</p>
    <h3>Worked example, step by step</h3>
    <p><b>25.0 cm³ of NaOH solution is neutralised by 20.0 cm³ of 0.10 mol/dm³ HCl. Find the concentration of the NaOH.</b></p>
    <ol>
      <li>Moles of acid = 0.10 × 20/1000 = 0.002 mol.</li>
      <li>Reaction is 1:1 (HCl + NaOH → NaCl + H₂O), so moles of base = 0.002 mol.</li>
      <li>Concentration = 0.002 ÷ (25/1000) = <b>0.08 mol/dm³</b>.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>An acid must release H⁺ <b>in aqueous solution</b> — dry HCl gas in methylbenzene shows no acidic properties.</li>
      <li>Not every base is an alkali: alkalis are the <b>soluble</b> bases only (NaOH, KOH, NH₃ solution).</li>
      <li>Metal oxides are basic; non-metal oxides (CO₂, SO₂) are acidic — that is why rain over a city turns slightly acidic.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Stomach acid (HCl) eased by antacid tablets (weak bases), farm soil corrected with agricultural lime (CaO), and the sour taste of unripe mango — acid–base chemistry is daily life in Nigeria.</p>
""")

deep('Hydrocarbons & Organic Chemistry Basics', """

    <h3>Deep dive: families of hydrocarbons</h3>
    <p><b>Alkanes</b> (CₙH₂ₙ₊₂) are saturated — single bonds only: methane, ethane, propane, butane, pentane. <b>Alkenes</b> (CₙH₂ₙ) contain one C=C double bond: ethene, propene. The double bond is the alkene's business card: it undergoes <b>addition</b> reactions and instantly <b>decolourises bromine water</b> (orange → colourless) — the standard lab test that separates alkenes from alkanes, which only manage slow <b>substitution</b> in sunlight.</p>
    <p><b>Isomerism</b>: butane (C₄H₁₀) exists as straight-chain n-butane and branched 2-methylpropane — same formula, different arrangement, different properties. Branching matters in petrol: branched isomers burn more smoothly (higher octane).</p>
    <h3>Fractional distillation of crude oil</h3>
    <p>Crude oil is separated in a fractionating column by boiling point — lightest fractions rise highest. From the top: <b>refinery gas</b> (cooking gas), <b>petrol</b>, <b>kerosene</b>, <b>diesel (gas oil)</b>, <b>lubricating oil</b>, and <b>bitumen</b> at the bottom (road surfacing). Nigeria's refineries at Port Harcourt, Warri and Kaduna are built to do exactly this; <b>cracking</b> then breaks long, unwanted chains into shorter, more valuable ones.</p>
    <div class="diagram"><svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="120" y="10" width="60" height="150" fill="#e2e8f0" stroke="#94a3b8"/>
      <text x="150" y="26" text-anchor="middle" font-size="9" fill="#334155">refinery gas</text>
      <text x="150" y="48" text-anchor="middle" font-size="9" fill="#334155">petrol</text>
      <text x="150" y="70" text-anchor="middle" font-size="9" fill="#334155">kerosene</text>
      <text x="150" y="92" text-anchor="middle" font-size="9" fill="#334155">diesel</text>
      <text x="150" y="114" text-anchor="middle" font-size="9" fill="#334155">lube oil</text>
      <text x="150" y="136" text-anchor="middle" font-size="9" fill="#334155">bitumen</text>
      <line x1="115" y1="34" x2="185" y2="34" stroke="#94a3b8"/><line x1="115" y1="56" x2="185" y2="56" stroke="#94a3b8"/>
      <line x1="115" y1="78" x2="185" y2="78" stroke="#94a3b8"/><line x1="115" y1="100" x2="185" y2="100" stroke="#94a3b8"/>
      <line x1="115" y1="122" x2="185" y2="122" stroke="#94a3b8"/><line x1="115" y1="144" x2="185" y2="144" stroke="#94a3b8"/>
      <rect x="30" y="140" width="70" height="20" fill="#f59e0b"/><text x="65" y="154" text-anchor="middle" font-size="9" fill="#7c2d12">furnace + crude</text>
      <line x1="100" y1="150" x2="120" y2="150" stroke="#f59e0b" stroke-width="3"/>
      <text x="200" y="30" font-size="9" fill="#64748b">cooler, lighter ↑</text>
      <text x="200" y="150" font-size="9" fill="#64748b">hotter, heavier ↓</text>
    </svg></div>
    <h3>Worked example, step by step</h3>
    <p><b>Write the balanced equation for the complete combustion of propane (C₃H₈).</b></p>
    <ol>
      <li>Complete combustion of any hydrocarbon gives CO₂ + H₂O.</li>
      <li>C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (check: C 3=3, H 8=8, O 10=10).</li>
      <li>Limited air gives incomplete combustion: 2C₃H₈ + 7O₂ → 6CO + 8H₂O — carbon(II) oxide, the silent killer in poorly ventilated generators.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>-<b>ane</b> = saturated, -<b>ene</b> = one double bond; do not let the similar names fool you.</li>
      <li>Bromine water tests alkenes, not acidity — the decolourisation is an <b>addition</b> reaction.</li>
      <li>First four alkanes are gases; pentane to about C₁₇ are liquids; longer chains are waxy solids.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Cooking gas is butane/propane, kerosene stoves burn C₁₀–C₁₆ alkanes, candle wax is C₂₀₊, and the fumes around a filling station are light fractions evaporating — one homologous series, from your kitchen to the highway.</p>
""")

deep('Air, the Atmosphere & the Gas Laws', """

    <h3>Deep dive: what air really is</h3>
    <p>Dry air is about <b>78% nitrogen, 21% oxygen, 0.9% argon</b> and <b>0.04% carbon(IV) oxide</b>, plus variable water vapour, dust and pollutants. Oxygen supports combustion and respiration; nitrogen dilutes it (pure oxygen would make fires explosive) and is fixed into fertiliser; CO₂ drives photosynthesis and the greenhouse effect. The classic lab proof of oxygen's fraction: burn phosphorus in a bell jar over water — the water rises by about one-fifth as the oxygen is used up.</p>
    <h3>The gas laws (for a fixed mass of gas)</h3>
    <div class="formula">Boyle: P₁V₁ = P₂V₂ (constant T) &nbsp;&nbsp;·&nbsp;&nbsp; Charles: V₁/T₁ = V₂/T₂ (constant P) &nbsp;&nbsp;·&nbsp;&nbsp; Combined: P₁V₁/T₁ = P₂V₂/T₂</div>
    <p><b>Temperature must always be in kelvin</b>: K = °C + 273. Boyle's law is the syringe: press the nozzle shut and squeeze — volume halves, pressure doubles. Charles's law is the football left in the harmattan sun — same air, bigger pressure and volume as it heats.</p>
    <div class="diagram"><svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="20" y="30" width="80" height="90" fill="#e2e8f0" stroke="#94a3b8"/>
      <rect x="20" y="30" width="80" height="20" fill="#94a3b8"/>
      <circle cx="45" cy="85" r="4" fill="#4f46e5"/><circle cx="70" cy="95" r="4" fill="#4f46e5"/><circle cx="55" cy="70" r="4" fill="#4f46e5"/><circle cx="82" cy="78" r="4" fill="#4f46e5"/>
      <text x="60" y="135" text-anchor="middle" font-size="10" fill="#334155">large V, low P</text>
      <text x="150" y="85" font-size="16" fill="#4f46e5">→</text>
      <rect x="200" y="30" width="80" height="90" fill="#e2e8f0" stroke="#94a3b8"/>
      <rect x="200" y="70" width="80" height="15" fill="#94a3b8"/>
      <line x1="240" y1="55" x2="240" y2="70" stroke="#ef4444" stroke-width="3"/>
      <text x="252" y="58" font-size="10" fill="#ef4444">piston pushed</text>
      <circle cx="220" cy="95" r="4" fill="#4f46e5"/><circle cx="245" cy="105" r="4" fill="#4f46e5"/><circle cx="260" cy="92" r="4" fill="#4f46e5"/><circle cx="232" cy="112" r="4" fill="#4f46e5"/>
      <text x="240" y="135" text-anchor="middle" font-size="10" fill="#334155">small V, high P</text>
    </svg></div>
    <h3>Worked example, step by step</h3>
    <p><b>A gas occupies 400 cm³ at 27 °C and 760 mmHg. Find its volume at 47 °C and 720 mmHg.</b></p>
    <ol>
      <li>Convert: T₁ = 300 K, T₂ = 320 K.</li>
      <li>Combined law: V₂ = P₁V₁T₂ ÷ (T₁P₂) = (760 × 400 × 320) ÷ (300 × 720).</li>
      <li>V₂ = 97,280,000 ÷ 216,000 ≈ <b>450.4 cm³</b> — hotter and lower pressure both swell the gas.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Plugging °C into Charles's law — always convert to kelvin first.</li>
      <li>Confusing which quantities are held fixed: Boyle fixes temperature, Charles fixes pressure.</li>
      <li>Quoting CO₂ as 4% of air — it is about 0.04%, a hundred times smaller.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Harmattan haze is dust suspended in dry air; Lagos traffic adds CO and particulates; a pressure cooker raises boiling point by raising pressure — the gas laws run every kitchen and every engine.</p>
""")

deep('Atomic Structure & the Periodic Table', """

    <h3>Deep dive: isotopes and relative atomic mass</h3>
    <p>Isotopes are atoms of the same element (same proton number) with different neutron numbers. Chlorine exists as ³⁵Cl and ³⁷Cl in the ratio 3 : 1, which is why its relative atomic mass is 35.5 and not a whole number — the periodic table lists <b>weighted averages</b>, not single atoms:</p>
    <div class="formula">Aᵣ = (35 × 75 + 37 × 25) ÷ 100 = 35.5</div>
    <p>Electron arrangement dictates the table's shape: the <b>period number = number of occupied shells</b>; for the first 20 elements, the <b>group number = number of outer (valence) electrons</b>. Sodium 2.8.1 sits in Group 1; chlorine 2.8.7 sits in Group 7 — one electron apart, which is exactly why they react so violently to form NaCl.</p>
    <h3>Trends across a period and down a group</h3>
    <ul>
      <li><b>Across a period</b> (left → right): atomic radius <b>decreases</b> (more protons pull the same shell tighter), ionisation energy and electronegativity <b>increase</b>, metallic character fades into non-metallic.</li>
      <li><b>Down a group</b>: radius <b>increases</b> (extra shells), reactivity <b>rises</b> for metals (outer electron easier to lose) but <b>falls</b> for non-metals (harder to attract an electron).</li>
    </ul>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Mass number (protons + neutrons, per atom) vs relative atomic mass (weighted average, usually decimal).</li>
      <li>Group = valence electrons works for main groups only — not for transition metals.</li>
      <li>Iso<b>topes</b> share protons; iso<b>bars</b> share mass number — the words look alike, the meanings don't.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Carbon-14 (a radioactive isotope) dates ancient Nok terracotta; iodine-131 treats thyroid disease; the "average" atomic masses on your periodic table are isotope statistics doing quiet work.</p>
""")

deep('Chemical Bonding', """

    <h3>Deep dive: four bond types, four property sets</h3>
    <p><b>Electrovalent (ionic)</b>: complete electron <b>transfer</b> from metal to non-metal — Na(2.8.1) gives its outer electron to Cl(2.8.7), forming Na⁺ and Cl⁻ held by strong electrostatic attraction in a giant lattice. High melting points, conduct only when molten or dissolved (ions must be free to move), usually water-soluble.</p>
    <p><b>Covalent</b>: electron <b>sharing</b> between non-metals — two chlorine atoms share one pair each (single bond), oxygen shares two pairs (double bond), nitrogen three (triple). Simple molecules (H₂O, CO₂) melt easily and never conduct; <b>giant covalent</b> networks (diamond, graphite, silica) are exceptionally hard and high-melting.</p>
    <p><b>Dative (co-ordinate) covalent</b>: a shared pair donated by one atom alone — as in the ammonium ion, NH₄⁺, where N donates its lone pair to H⁺. <b>Metallic</b>: positive kernels in a sea of delocalised electrons — hence malleability and conductivity.</p>
    <h3>The graphite exception worth full marks</h3>
    <p>Graphite is covalent yet conducts electricity: each carbon bonds to only three neighbours in sheets, and the fourth electron roams free between the layers. The weak forces between sheets also let them slide — that is why pencils write and graphite lubricates. Diamond, with all four electrons locked in bonds, conducts nothing and is the hardest natural substance.</p>
    <h3>Worked example, step by step</h3>
    <p><b>Describe the bonding in magnesium chloride, MgCl₂.</b></p>
    <ol>
      <li>Mg(2.8.2) loses its 2 outer electrons → Mg²⁺ (stable 2.8).</li>
      <li>Each Cl(2.8.7) accepts one electron → two Cl⁻ (stable 2.8.8).</li>
      <li>Formula MgCl₂: charges balance (+2 with 2 × −1); the lattice is electrovalent, so solid MgCl₂ does not conduct but molten MgCl₂ does — this exact fact is exploited in the electrolytic extraction of magnesium.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>"Covalent compounds don't conduct" — true for simple molecules, false for graphite.</li>
      <li>Ionic solids don't conduct because the ions are locked in place; the moment they melt or dissolve, they do.</li>
      <li>Hydrogen bonding (H₂O, NH₃, alkanols) is an <b>intermolecular</b> force, not a bond inside the molecule — it explains water's surprisingly high boiling point.</li>
    </ul>
""")

deep('Redox Reactions & Electrolysis', """

    <h3>Deep dive: tracking electrons with oxidation numbers</h3>
    <p>Redox = <b>reduction</b> (gain of electrons, oxidation number falls) and <b>oxidation</b> (loss of electrons, number rises) — they always happen together. Quick rules: free elements = 0; oxygen is usually −2; hydrogen +1 (except in metal hydrides, −1); simple ions equal their charge. In Fe₂O₃ + 3CO → 2Fe + 3CO₂, iron falls +3 → 0 (reduced; Fe₂O₃ is the oxidising agent) while carbon rises +2 → +4 (oxidised; CO is the reducing agent).</p>
    <h3>Electrolysis: who discharges first?</h3>
    <p>In the electrolyte, <b>cations migrate to the cathode</b> (negative electrode) and <b>anions to the anode</b>. Preferential discharge depends on (1) position in the electrochemical series — the <b>less reactive</b> ion discharges first, (2) concentration — concentrated Cl⁻ beats dilute OH⁻ at the anode, and (3) electrode nature — inert (carbon/platinum) vs active (copper anode dissolves instead of discharging).</p>
    <ul>
      <li><b>Molten NaCl</b>: Na⁺ + e⁻ → Na at the cathode; 2Cl⁻ → Cl₂ + 2e⁻ at the anode.</li>
      <li><b>Dilute H₂SO₄ (acidified water)</b>: 2H⁺ + 2e⁻ → H₂ (cathode); 4OH⁻ → O₂ + 2H₂O + 4e⁻ (anode) — hydrogen and oxygen in a 2 : 1 volume ratio.</li>
      <li><b>Concentrated NaCl (brine)</b>: H₂ at the cathode, Cl₂ at the anode; NaOH remains in solution — the industrial chlor-alkali process.</li>
      <li><b>CuSO₄ with copper electrodes</b>: the anode dissolves (Cu → Cu²⁺ + 2e⁻) exactly as copper plates the cathode — the basis of <b>electrorefining and electroplating</b>.</li>
    </ul>
    <h3>Worked example, step by step</h3>
    <p><b>A current of 2 A passes through a solution for 10 minutes. Find the quantity of electricity.</b> Q = I t = 2 × (10 × 60) = <b>1200 C</b>. Since 1 mole of electrons carries 96,500 C (1 faraday), that is 1200/96500 ≈ 0.0124 mol of electrons — enough to deposit 0.0062 mol of Cu from Cu²⁺ (2 electrons per ion).</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Oxidation is electron loss (OIL) even when no oxygen appears anywhere.</li>
      <li>Cations go to the <b>cathode</b> — both start with C, and the cathode is negative in electrolysis.</li>
      <li>Convert minutes to seconds before Q = It.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Aluminium from molten alumina, electroplated bolts and hubcaps, phone and inverter batteries, and sacrificial magnesium blocks protecting pipelines — redox is Nigeria's quiet industrial engine.</p>
""")

deep('Metals, Their Extraction & Their Compounds', """

    <h3>Deep dive: extraction matches reactivity</h3>
    <p>The reactivity series (K Na Ca Mg Al Zn Fe Pb H Cu Hg Ag Au) dictates the extraction method: <b>K–Al</b> are too eager to give up electrons chemically, so they are extracted by <b>electrolysis</b> of their molten compounds (aluminium from alumina dissolved in molten cryolite; sodium from molten NaCl). <b>Zn–Pb</b> are reduced by heating their oxides with carbon or carbon(II) oxide. <b>Cu and below</b> need only roasting or simple heating. Iron is the classic: the <b>blast furnace</b> charges haematite (Fe₂O₃), coke and limestone — coke burns to give CO, which reduces the ore (Fe₂O₃ + 3CO → 2Fe + 3CO₂), while limestone removes sandy impurity as slag (CaSiO₃).</p>
    <h3>Alloys and corrosion</h3>
    <ul>
      <li><b>Steel</b> (Fe + C) for construction; <b>stainless steel</b> (Fe + Cr + Ni) resists rust; <b>brass</b> (Cu + Zn); <b>bronze</b> (Cu + Sn); <b>duralumin</b> (Al + Cu + Mg) for aircraft.</li>
      <li>Rusting needs <b>both air and water</b> — prove it with the three-test-tube experiment (dry air only / water only / both: only "both" rusts).</li>
      <li>Prevention: paint, grease, plastic coating, <b>galvanising</b> (zinc coat — sacrificial, because Zn is more reactive than Fe), tin plating (barrier only), and sacrificial magnesium blocks on ship hulls and underground pipes.</li>
    </ul>
    <h3>Worked example, step by step</h3>
    <p><b>What mass of iron is obtained from 16 g of haematite, Fe₂O₃? (Fe = 56, O = 16)</b></p>
    <ol>
      <li>M(Fe₂O₃) = 112 + 48 = 160 g/mol → n = 16/160 = 0.1 mol.</li>
      <li>Fe₂O₃ → 2Fe, so moles of Fe = 0.2 mol.</li>
      <li>Mass = 0.2 × 56 = <b>11.2 g</b>.</li>
    </ol>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Aluminium looks unreactive because its thin oxide layer self-seals — under the layer it is highly reactive.</li>
      <li>Galvanising is <b>zinc</b>, not tin; tinning protects only while the coat is unbroken.</li>
      <li>Sodium and potassium are stored under kerosene, never in air or water.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Corrugated roofing sheets rust every rainy season unless galvanised, cast-iron pots (the local "okpoko") outlive aluminium ones, and Ajaokuta's steel complex was designed around the blast-furnace chemistry above.</p>
""")

open(CUR, 'w', encoding='utf-8').write(s)
print('Chemistry batch 2 written: 8 topics deep-expanded')
