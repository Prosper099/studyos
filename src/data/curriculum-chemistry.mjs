export default {

    color: 'emerald', icon: '⚗️', blurb: 'Atomic structure, bonding, organic chemistry and the mole concept.',
    topics: {
      SS1: [
        {
          title: 'Atomic Structure & the Periodic Table',
          tags: ['Isotopes', 'Electronic configuration', 'Groups & periods'],
          summary: 'Sub-atomic particles, isotopes and how position in the table predicts properties.',
          content: `
            <h3>Sub-atomic particles</h3>
            <table><tr><th>Particle</th><th>Relative mass</th><th>Charge</th></tr>
            <tr><td>Proton</td><td>1</td><td>+1</td></tr><tr><td>Neutron</td><td>1</td><td>0</td></tr><tr><td>Electron</td><td>1/1840</td><td>-1</td></tr></table>
            <div class="formula">Atomic number Z = number of protons = number of electrons (neutral atom)<br>Mass number A = protons + neutrons → neutrons = A - Z</div>
            <h3>Isotopes</h3>
            <p>Atoms of the same element with the same number of protons but different numbers of neutrons, e.g. ^35Cl and ^37Cl. Isotopes have identical <b>chemical</b> properties but different physical masses.</p>
            <h3>The periodic table</h3>
            <ul><li><b>Group</b> (vertical) = number of valence electrons → similar chemical behaviour.</li>
            <li><b>Period</b> (horizontal) = number of occupied shells.</li>
            <li>Going across a period: atomic radius decreases, ionisation energy increases.</li>
            <li>Going down a group: atomic radius increases, reactivity of metals increases.</li></ul>
            <div class="worked"><b>Worked example:</b> ^2311Na → 11 protons, 11 electrons, 12 neutrons; configuration 2, 8, 1 → Group 1, Period 3.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> An atom is written ^3919K. State its protons, electrons and neutrons, and write its electronic configuration.<br>
            Protons = 19, electrons = 19, neutrons = 39 - 19 = <b>20</b>. Configuration = <b>2, 8, 8, 1</b> → Group 1, Period 4.</div>
            <div class="worked"><b>Q2.</b> Chlorine has isotopes ^35Cl (75%) and ^37Cl (25%). Calculate its relative atomic mass.<br>
            (35 × 75 + 37 × 25)/100 = (2625 + 925)/100 = <b>35.5</b>.</div>
            <div class="worked"><b>Q3.</b> An element has the configuration 2, 8, 7. Predict its group, its valency and the ion it forms.<br>
            Seven valence electrons → <b>Group 7 (halogens)</b>; it gains one electron, so its valency is 1 and it forms a <b>1- ion</b>.</div>
            <div class="diagram">
              <div class="diagram-title">Atomic structure: shells, protons, neutrons and electrons</div>
              <svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sodium atom with 11 protons and 12 neutrons in the nucleus and electrons in shells 2, 8, 1">
                <rect x="6" y="6" width="368" height="208" rx="14" fill="#f5f3ff"/>
                <circle cx="150" cy="108" r="34" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2.5"/>
                <g font-size="8" fill="#ffffff" font-weight="bold" text-anchor="middle">
                  <circle cx="138" cy="98" r="7" fill="#dc2626"/><text x="138" y="101">p</text>
                  <circle cx="154" cy="94" r="7" fill="#64748b"/><text x="154" y="97">n</text>
                  <circle cx="162" cy="110" r="7" fill="#dc2626"/><text x="162" y="113">p</text>
                  <circle cx="146" cy="114" r="7" fill="#64748b"/><text x="146" y="117">n</text>
                  <circle cx="132" cy="112" r="7" fill="#dc2626"/><text x="132" y="115">p</text>
                  <circle cx="156" cy="124" r="7" fill="#dc2626"/><text x="156" y="127">p</text>
                </g>
                <text x="150" y="160" text-anchor="middle" font-size="10" fill="#5b21b6">nucleus</text>
                <circle cx="150" cy="108" r="56" fill="none" stroke="#8b5cf6" stroke-width="1.4" stroke-dasharray="4 3"/>
                <circle cx="150" cy="108" r="80" fill="none" stroke="#8b5cf6" stroke-width="1.4" stroke-dasharray="4 3"/>
                <circle cx="150" cy="108" r="100" fill="none" stroke="#8b5cf6" stroke-width="1.4" stroke-dasharray="4 3"/>
                <g fill="#0ea5e9">
                  <circle cx="206" cy="108" r="5"/><circle cx="94" cy="108" r="5"/>
                  <circle cx="150" cy="28" r="5"/><circle cx="222" cy="72" r="5"/><circle cx="222" cy="144" r="5"/>
                  <circle cx="150" cy="188" r="5"/><circle cx="78" cy="72" r="5"/><circle cx="78" cy="144" r="5"/>
                  <circle cx="250" cy="108" r="6"/>
                </g>
                <text x="212" y="60" font-size="10" fill="#0369a1">1st shell: 2 electrons</text>
                <text x="238" y="176" font-size="10" fill="#0369a1">2nd shell: 8 electrons</text>
                <text x="256" y="122" font-size="10" fill="#0369a1">3rd shell: 1</text>
                <text x="190" y="204" text-anchor="middle" font-size="10" fill="#4c1d95">sodium: atomic number 11, mass number 23 → 11 protons, 12 neutrons, 11 electrons (2, 8, 1)</text>
              </svg>
              <div class="diagram-note"><b>Atomic number</b> = protons. <b>Mass number</b> = protons + neutrons. Neutrons = mass number - atomic number. The outer-shell electrons decide how the element reacts.</div>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Confusing <b>atomic number</b> (protons) with <b>mass number</b> (protons + neutrons).</li>
              <li>Saying isotopes have different <b>chemical</b> properties — they differ only physically, because chemistry depends on electron arrangement.</li>
              <li>Assuming the number of neutrons equals the number of protons. That is only true for some light elements.</li>
              <li>Counting groups by the total number of electrons instead of the <b>valence</b> electrons.</li>
            </ul>
            <h3>Deep dive: isotopes and relative atomic mass</h3>
            <p>Isotopes are atoms of the same element (same proton number) with different neutron numbers. Chlorine exists as ^35Cl and ^37Cl in the ratio 3 : 1, which is why its relative atomic mass is 35.5 and not a whole number — the periodic table lists <b>weighted averages</b>, not single atoms:</p>
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

          `,
          cards: [
            { q: 'Name the three subatomic particles with their charges and locations.', a: 'Proton (+1, in the nucleus), neutron (no charge, in the nucleus) and electron (-1, moving in shells around the nucleus).' },
            { q: 'What is the difference between atomic number and mass number?', a: 'Atomic number (Z) is the number of protons; mass number (A) is protons + neutrons. E.g. sodium-23 has Z = 11 and A = 23.' },
            { q: 'Define isotopes and give one example.', a: 'Isotopes are atoms of the same element with the same atomic number but different mass numbers — e.g. chlorine-35 and chlorine-37, or carbon-12 and carbon-14.' },
            { q: 'Write the electronic configuration of sodium (Na, Z = 11).', a: '2, 8, 1 — two electrons in the first shell, eight in the second and one valence electron in the third, which is why sodium forms Na+ ions.' },
            { q: 'What is the difference between a period and a group in the periodic table?', a: 'A period is a horizontal row (elements have the same number of shells); a group is a vertical column (elements have the same number of valence electrons and similar chemistry).' },
            { q: 'Where are metals, non-metals and metalloids found in the periodic table?', a: 'Metals occupy the left and centre, non-metals the right-hand side, and metalloids (e.g. silicon) form a staircase boundary between them.' },
            { q: 'State three properties of the Group I alkali metals.', a: 'They are soft (cut with a knife), have low densities (lithium floats on water) and react increasingly vigorously with water down the group, giving an alkaline solution and hydrogen.' },
            { q: 'Why are the noble gases (Group 0) unreactive?', a: 'Their outermost electron shells are completely full, so they neither gain, lose nor share electrons under ordinary conditions.' },
            { q: 'What determines the chemical properties of an element?', a: 'The number of valence (outermost shell) electrons — elements in the same group have the same valence electrons, so they behave similarly.' },
            { q: 'What did Rutherford\'s gold-foil experiment prove?', a: 'That the atom has a tiny, dense, positively charged nucleus (most alpha particles passed straight through, but a few were deflected back).' },
            { q: 'How many electrons can the first, second and third shells hold?', a: 'First shell: 2; second shell: 8; third shell: 8 (for the first twenty elements) — filled from the innermost shell outwards.' },
            { q: 'An atom has 17 protons and 18 neutrons. Give its atomic number, mass number and the ion it forms.', a: 'Atomic number 17, mass number 35 (chlorine-35). It gains one electron to complete its outer shell, forming the chloride ion Cl-.' },
            { q: 'Define isotopes.', a: 'Atoms of the same element with the same number of protons but different numbers of neutrons.' },
            { q: 'Describe the three sub-atomic particles.', a: 'Protons: charge +1, mass 1, in the nucleus. Neutrons: charge 0, mass 1, in the nucleus. Electrons: charge -1, negligible mass, in shells around the nucleus.' },
            { q: 'What is the difference between a group and a period?', a: 'A group is a vertical column - elements share the same number of valence electrons and so behave similarly. A period is a horizontal row - elements share the same number of electron shells.' }
          ],
          quiz: [
            { q: 'The charges of a proton, electron and neutron are...', options: ['+1, -1, 0', '+1, 0, -1', '0, -1, +1', '-1, +1, 0'], correct: 0,
              exp: 'Protons are positive, electrons negative, neutrons neutral - the balance of protons and electrons makes atoms neutral.' },
            { q: 'The atomic number of an element is its number of...', options: ['protons', 'neutrons', 'electrons plus neutrons', 'nucleons'], correct: 0,
              exp: 'Atomic number = proton number - it fixes the identity of the element.' },
            { q: 'The mass number of an atom equals...', options: ['protons + neutrons', 'protons + electrons', 'neutrons + electrons', 'protons only'], correct: 0,
              exp: 'Mass number counts the nucleons in the nucleus; electron mass is negligible.' },
            { q: 'The electron configuration of sodium (atomic number 11) is...', options: ['2, 8, 1', '2, 8, 2', '2, 9', '8, 2, 1'], correct: 0,
              exp: 'Shells fill 2, then 8: sodium is 2,8,1 - that single outer electron makes it a reactive group I metal.' },
            { q: 'Elements in the same GROUP of the periodic table have...', options: ['the same number of valence electrons', 'the same number of shells', 'the same mass number', 'the same number of neutrons'], correct: 0,
              exp: 'Shared valence electrons give a group its similar chemistry - all group I metals have one outer electron.' },
            { q: 'Chlorine-35 and chlorine-37 are isotopes because they have...', options: ['17 protons each but different neutron numbers', 'different proton numbers', 'the same neutron numbers', 'no neutrons'], correct: 0,
              exp: 'Both have 17 protons (same element) but 18 and 20 neutrons - different mass numbers.' },
            { q: 'Noble gases are unreactive because...', options: ['their outer electron shells are full', 'they are gases', 'they have no electrons', 'they are metals'], correct: 0,
              exp: 'A complete outer shell is the stable arrangement other atoms chase - noble gases already have it.' },
            { q: 'In the periodic table, metals are found...', options: ['on the left and centre', 'on the right only', 'at the bottom only', 'scattered randomly'], correct: 0,
              exp: 'Metals occupy the left and middle; non-metals sit on the right, with noble gases in group 0/VIII.' },
            { q: 'A neutral atom always has...', options: ['equal numbers of protons and electrons', 'more electrons than protons', 'more protons than electrons', 'no neutrons'], correct: 0,
              exp: 'Equal positive and negative charges cancel - that is what neutral means.' },
            { q: 'An element with electron configuration 2, 8, 7 belongs to group...', options: ['VII (the halogens)', 'I', 'II', '0'], correct: 0,
              exp: 'Seven valence electrons place it in group VII - the halogen family, one electron short of a full shell.' }
          ],
        },
        {
          title: 'Chemical Bonding',
          tags: ['Ionic', 'Covalent', 'Coordinate'],
          summary: 'How atoms join, and how bond type predicts physical properties.',
          content: `
            <h3>Electrovalent (ionic) bonding</h3>
            <p>Complete transfer of electrons from a metal to a non-metal, producing oppositely charged ions held by electrostatic attraction (NaCl). Ionic compounds have high melting points, are usually soluble in water, and conduct electricity when molten or in solution.</p>
            <h3>Covalent bonding</h3>
            <p>Sharing of electron pairs between non-metals (H2O, CH4). Covalent compounds usually have low melting points and do not conduct electricity.</p>
            <h3>Coordinate (dative) bonding</h3>
            <p>Both shared electrons come from one atom, e.g. the formation of NH4⁺ from NH3 and H⁺, or H3O⁺.</p>
            <div class="tip"><b>Exam tip:</b> "Conducts electricity when molten but not when solid" is the classic description of an <b>ionic</b> compound — ions are free to move only when the lattice has broken down.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Describe the bonding in magnesium chloride.<br>
            Magnesium (2, 8, 2) loses two electrons to form Mg^2⁺; each chlorine (2, 8, 7) gains one to form Cl⁻. The oppositely charged ions attract electrostatically, giving <b>MgCl2</b>.</div>
            <div class="worked"><b>Q2.</b> A solid is hard, has a high melting point, does not conduct when solid but conducts when molten. What type of bonding does it have?<br>
            <b>Electrovalent (ionic)</b>. The ions are locked in a lattice when solid but free to move when molten.</div>
            <div class="worked"><b>Q3.</b> Explain why water has a much lower boiling point than sodium chloride.<br>
            Water is covalent with weak intermolecular forces, so little energy is needed to separate the molecules. Sodium chloride has strong electrostatic forces throughout a giant lattice, so much more energy is required.</div>
            <div class="diagram">
              <div class="diagram-title">Ionic and covalent bonding side by side</div>
              <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sodium chloride ionic bond by electron transfer and chlorine molecule covalent bond by electron sharing">
                <rect x="6" y="6" width="368" height="188" rx="14" fill="#eef2ff"/>
                <text x="100" y="28" text-anchor="middle" font-size="11" fill="#3730a3">IONIC — transfer</text>
                <circle cx="66" cy="86" r="26" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
                <text x="66" y="82" text-anchor="middle" font-size="12" fill="#7f1d1d">Na</text>
                <circle cx="84" cy="68" r="4" fill="#f59e0b"/>
                <text x="66" y="124" text-anchor="middle" font-size="9" fill="#7f1d1d">loses 1 e⁻</text>
                <path d="M96 74 Q120 58 140 74" stroke="#f59e0b" stroke-width="2" fill="none" stroke-dasharray="4 3"/>
                <path d="M134 68 L142 74 L134 80" fill="#f59e0b"/>
                <circle cx="164" cy="86" r="26" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
                <text x="164" y="82" text-anchor="middle" font-size="12" fill="#14532d">Cl</text>
                <text x="164" y="124" text-anchor="middle" font-size="9" fill="#14532d">gains 1 e⁻</text>
                <text x="66" y="152" text-anchor="middle" font-size="11" fill="#7f1d1d">Na⁺</text>
                <text x="164" y="152" text-anchor="middle" font-size="11" fill="#14532d">Cl⁻</text>
                <text x="115" y="176" text-anchor="middle" font-size="10" fill="#3730a3">opposite charges attract → NaCl</text>
                <line x1="212" y1="40" x2="212" y2="170" stroke="#c7d2fe" stroke-width="2"/>
                <text x="296" y="28" text-anchor="middle" font-size="11" fill="#3730a3">COVALENT — sharing</text>
                <circle cx="258" cy="86" r="26" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
                <text x="252" y="90" text-anchor="middle" font-size="12" fill="#0c4a6e">Cl</text>
                <circle cx="330" cy="86" r="26" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
                <text x="336" y="90" text-anchor="middle" font-size="12" fill="#0c4a6e">Cl</text>
                <g fill="#f59e0b"><circle cx="286" cy="80" r="4.5"/><circle cx="302" cy="92" r="4.5"/></g>
                <text x="294" y="66" text-anchor="middle" font-size="9" fill="#92400e">shared pair</text>
                <text x="294" y="130" text-anchor="middle" font-size="11" fill="#0c4a6e">Cl2</text>
                <text x="294" y="176" text-anchor="middle" font-size="10" fill="#3730a3">non-metals share electrons</text>
              </svg>
              <div class="diagram-note"><b>Metal + non-metal → ionic</b> (transfer, giant lattice, conducts when molten or dissolved). <b>Non-metal + non-metal → covalent</b> (sharing, simple molecules, low melting points).</div>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying ionic compounds conduct when <b>solid</b>. The ions cannot move in a rigid lattice.</li>
              <li>Confusing <b>intermolecular</b> forces (weak, between molecules) with the covalent bonds <b>inside</b> a molecule (strong). Boiling water breaks the former, not the latter.</li>
              <li>Calling a coordinate bond a different kind of bond — once formed it is identical to any other covalent bond.</li>
              <li>Forgetting that metals conduct because of <b>delocalised electrons</b>, not because they are ionic.</li>
            </ul>
            <h3>Deep dive: four bond types, four property sets</h3>
            <p><b>Electrovalent (ionic)</b>: complete electron <b>transfer</b> from metal to non-metal — Na(2.8.1) gives its outer electron to Cl(2.8.7), forming Na⁺ and Cl⁻ held by strong electrostatic attraction in a giant lattice. High melting points, conduct only when molten or dissolved (ions must be free to move), usually water-soluble.</p>
            <p><b>Covalent</b>: electron <b>sharing</b> between non-metals — two chlorine atoms share one pair each (single bond), oxygen shares two pairs (double bond), nitrogen three (triple). Simple molecules (H2O, CO2) melt easily and never conduct; <b>giant covalent</b> networks (diamond, graphite, silica) are exceptionally hard and high-melting.</p>
            <p><b>Dative (co-ordinate) covalent</b>: a shared pair donated by one atom alone — as in the ammonium ion, NH4⁺, where N donates its lone pair to H⁺. <b>Metallic</b>: positive kernels in a sea of delocalised electrons — hence malleability and conductivity.</p>
            <h3>The graphite exception worth full marks</h3>
            <p>Graphite is covalent yet conducts electricity: each carbon bonds to only three neighbours in sheets, and the fourth electron roams free between the layers. The weak forces between sheets also let them slide — that is why pencils write and graphite lubricates. Diamond, with all four electrons locked in bonds, conducts nothing and is the hardest natural substance.</p>
            <h3>Worked example, step by step</h3>
            <p><b>Describe the bonding in magnesium chloride, MgCl2.</b></p>
            <ol>
              <li>Mg(2.8.2) loses its 2 outer electrons → Mg^2⁺ (stable 2.8).</li>
              <li>Each Cl(2.8.7) accepts one electron → two Cl⁻ (stable 2.8.8).</li>
              <li>Formula MgCl2: charges balance (+2 with 2 × -1); the lattice is electrovalent, so solid MgCl2 does not conduct but molten MgCl2 does — this exact fact is exploited in the electrolytic extraction of magnesium.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li>"Covalent compounds don't conduct" — true for simple molecules, false for graphite.</li>
              <li>Ionic solids don't conduct because the ions are locked in place; the moment they melt or dissolve, they do.</li>
              <li>Hydrogen bonding (H2O, NH3, alkanols) is an <b>intermolecular</b> force, not a bond inside the molecule — it explains water's surprisingly high boiling point.</li>
            </ul>

          `,
          cards: [
            { q: 'What is an electrovalent (ionic) bond? Give an example.', a: 'A bond formed by the complete transfer of electrons from a metal to a non-metal, producing oppositely charged ions that attract — e.g. sodium chloride, where Na loses one electron to Cl.' },
            { q: 'What is a covalent bond? Give an example.', a: 'A bond formed by the sharing of electron pairs between non-metal atoms — e.g. in a water molecule, oxygen shares electrons with two hydrogen atoms.' },
            { q: 'State three physical properties of ionic compounds.', a: 'High melting and boiling points; they conduct electricity when molten or in solution (mobile ions); most are soluble in water and form crystalline solids.' },
            { q: 'Why do covalent compounds generally have low melting points?', a: 'The covalent bonds hold the atoms together inside each molecule, but only weak intermolecular forces hold the molecules to each other, so little energy separates them.' },
            { q: 'Why does sodium chloride conduct electricity in solution but not as a solid?', a: 'In solution (or molten) the ions are free to move and carry charge; in the solid the ions are locked in a rigid crystal lattice and cannot move.' },
            { q: 'What is a coordinate (dative covalent) bond?', a: 'A covalent bond in which both shared electrons come from one atom alone — e.g. the fourth N-H bond in the ammonium ion NH4+.' },
            { q: 'Explain metallic bonding and the properties it explains.', a: 'Metal atoms release their valence electrons into a shared \'sea\' of mobile electrons that glues the positive ions together — this explains electrical conductivity, malleability and ductility.' },
            { q: 'What is a hydrogen bond?', a: 'A weak attraction between a hydrogen atom bonded to N, O or F in one molecule and a lone pair on N, O or F in another — it gives water its unusually high boiling point.' },
            { q: 'How does electronegativity difference predict bond type?', a: 'A large difference (metal + non-metal) gives an ionic bond; a small or zero difference (non-metal + non-metal) gives a covalent bond.' },
            { q: 'Draw-style question: how many shared pairs are in O2, N2 and Cl2?', a: 'O2 shares two pairs (a double bond), N2 shares three pairs (a triple bond), and Cl2 shares one pair (a single bond).' },
            { q: 'Why is diamond hard while graphite is soft, though both are carbon?', a: 'In diamond each carbon is covalently bonded to four others in a rigid 3-D giant lattice; in graphite the carbons form flat layers that slide over one another.' },
            { q: 'What type of bonding and structure does silicon(IV) oxide (sand) have?', a: 'A giant covalent (macromolecular) structure — each silicon is covalently bonded to four oxygens, giving a very hard substance with a high melting point.' },
            { q: 'Compare ionic and covalent bonding.', a: 'Ionic: electrons TRANSFERRED from metal to non-metal, forming oppositely charged ions (NaCl); high melting points, conduct when molten/dissolved. Covalent: electrons SHARED between non-metals (H2O, Cl2); usually low melting points, poor conductors.' },
            { q: 'What is a coordinate (dative) covalent bond?', a: 'A covalent bond in which one atom supplies BOTH shared electrons - its lone pair is donated to an acceptor. Example: NH3 + H⁺ → NH4⁺.' },
            { q: 'Why do ionic compounds conduct when molten or dissolved but not when solid?', a: 'Conduction requires free-moving charged particles. In a solid the ions are locked in a rigid lattice; melting or dissolving releases them to carry current.' }
          ],
          quiz: [
            { q: 'An electrovalent (ionic) bond forms by...', options: ['the transfer of electrons from a metal to a non-metal', 'the sharing of electrons', 'one atom donating a lone pair', 'the pooling of all electrons'], correct: 0,
              exp: 'The metal loses electrons to become a cation; the non-metal gains them to become an anion - opposite charges attract.' },
            { q: 'A covalent bond forms by...', options: ['the sharing of electron pairs between non-metals', 'electron transfer', 'attraction of free electrons', 'nuclear fusion'], correct: 0,
              exp: 'Each atom contributes electrons to a shared pair, so both approach full outer shells.' },
            { q: 'In a coordinate (dative) bond, the shared pair of electrons comes from...', options: ['one atom only', 'both atoms equally', 'the solvent', 'free electrons'], correct: 0,
              exp: 'One partner donates both electrons - the arrow in diagrams points from donor to acceptor, as in NH4⁺.' },
            { q: 'Sodium chloride is held together by...', options: ['ionic (electrovalent) bonds', 'covalent bonds', 'dative bonds', 'metallic bonds only'], correct: 0,
              exp: 'Na transfers an electron to Cl, forming Na⁺ and Cl⁻ ions locked in a giant lattice.' },
            { q: 'Ionic compounds conduct electricity when...', options: ['molten or dissolved in water', 'solid only', 'never', 'frozen'], correct: 0,
              exp: 'Conduction needs mobile ions - in a solid the ions are locked in place, but melting or dissolving frees them.' },
            { q: 'Covalent compounds generally have...', options: ['low melting and boiling points', 'very high melting points', 'ionic lattices', 'metallic lustre'], correct: 0,
              exp: 'Only weak forces hold the separate molecules together, so little energy is needed to separate them.' },
            { q: 'Which species contains a coordinate (dative) bond?', options: ['NH4⁺ (ammonium ion)', 'NaCl', 'Cl2', 'MgO'], correct: 0,
              exp: 'NH3 donates its lone pair to H⁺, forming the fourth N-H bond - a classic dative bond.' },
            { q: 'Most ionic compounds are...', options: ['soluble in water', 'insoluble in water', 'gases at room temperature', 'poor conductors when dissolved'], correct: 0,
              exp: 'Water pulls the ions out of the lattice; the resulting solution conducts electricity.' },
            { q: 'Atoms form bonds in order to...', options: ['attain a stable noble-gas electron arrangement', 'increase their mass', 'become radioactive', 'lose all electrons'], correct: 0,
              exp: 'Full outer shells are the stable arrangement - bonding is how atoms get there, by transfer or sharing.' },
            { q: 'Diamond and graphite are examples of...', options: ['giant covalent structures', 'ionic lattices', 'simple molecules', 'metallic crystals'], correct: 0,
              exp: 'Millions of carbon atoms share electrons in a giant network - which is why both melt only at extreme temperatures.' }
          ],
        },
        {
          title: 'Separation Techniques & States of Matter',
          tags: ['Filtration', 'Distillation', 'Chromatography', 'Kinetic theory'],
          summary: 'Which method separates which mixture, and the kinetic explanation of the three states.',
          content: `

            <h3>1. The three states and the kinetic theory</h3>
            <p>Matter exists as <b>solid</b> (particles tightly packed, vibrating in fixed positions — definite shape and volume), <b>liquid</b> (particles close but sliding — definite volume, no fixed shape) and <b>gas</b> (particles far apart, moving fast — no fixed shape or volume). The <b>kinetic theory</b> says all particles move, and heat makes them move faster.</p>
            <ul>
              <li><b>Melting/boiling points</b> are fixed for pure substances — a sharp melting point is a test of purity.</li>
              <li><b>Evaporation vs boiling:</b> evaporation happens at any temperature from the surface; boiling happens at one temperature throughout the liquid.</li>
              <li><b>Sublimation:</b> solid → gas directly (ammonium chloride, iodine, dry ice).</li>
              <li><b>Diffusion:</b> particles spreading from high to low concentration (smell across a room); <b>Brownian motion</b> is the jerky movement of tiny visible particles hit by invisible ones.</li>
            </ul>

            <h3>2. Mixtures vs compounds — why we separate</h3>
            <p>In a <b>compound</b> elements are chemically joined in fixed ratios and need chemical methods to split. In a <b>mixture</b> substances are merely together — each keeps its properties — so <b>physical</b> methods separate them. All the techniques below exploit a difference in one physical property.</p>

            <h3>3. The techniques, by the property they exploit</h3>
            <ul>
              <li><b>Particle size — filtration:</b> an insoluble solid from a liquid (sand from water). The solid left on paper is the <b>residue</b>; the liquid through is the <b>filtrate</b>.</li>
              <li><b>Solubility — evaporation & crystallisation:</b> a soluble solid from solution. <b>Evaporation to dryness</b> for salts like NaCl; <b>crystallisation</b> when the solid has water of crystallisation or decomposes on strong heat (e.g. copper(II) tetraoxosulphate(VI) crystals).</li>
              <li><b>Boiling point (liquid from solution) — simple distillation:</b> boil, condense the vapour in the <b>condenser</b>, collect pure solvent (distilled water from tap water).</li>
              <li><b>Boiling points (liquid from liquid) — fractional distillation:</b> a <b>fractionating column</b> (glass beads) gives repeated evaporation-condensation so close-boiling liquids separate — ethanol from water, crude oil into fractions, air into oxygen and nitrogen.</li>
              <li><b>Sublimation:</b> heat a mix of ammonium chloride and sand — the NH4Cl sublimes, leaves sand, and reforms as crystals on the cool surface.</li>
              <li><b>Differential movement — chromatography:</b> a drop of mixture on paper; solvent climbs; components travel different distances. Used for dyes, inks, drugs in urine, forensics.</li>
              <li><b>Density/immiscibility — separating funnel:</b> two immiscible liquids (oil and water); the denser sinks and is run off. <b>Decantation</b> is the rough version.</li>
              <li><b>Magnetism:</b> iron filings from sand. <b>Winnowing/hand-picking:</b> farm-level separations.</li>
            </ul>

            <h3>4. Chromatography numbers (Rf values)</h3>
            <div class="formula">Rf = distance moved by spot ÷ distance moved by solvent front</div>
            <div class="worked"><b>Worked example:</b> A dye spot moves 6 cm while the solvent front moves 10 cm. Rf = 6/10 = <b>0.6</b>. Rf is always between 0 and 1, and matching an unknown's Rf with a standard's identifies it.</div>

            <h3>5. Choosing a method — exam drill</h3>
            <ul>
              <li>Sand + water → filtration. Salt + water (want salt) → evaporation; (want pure water) → simple distillation.</li>
              <li>Ethanol + water → fractional distillation. Oil + water → separating funnel.</li>
              <li>NH4Cl + NaCl → sublimation. Coloured inks → chromatography.</li>
              <li>Iron + sulphur powder → magnetism (also proves it is a mixture: iron still magnetic).</li>
            </ul>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Saying evaporation to dryness gives good crystals — it drives off water of crystallisation and can decompose the salt.</li>
              <li>Using simple distillation for two liquids — without a fractionating column they co-distil.</li>
              <li>Defining Rf as solvent over spot — it is <b>spot over solvent</b>.</li>
              <li>Calling diffusion the same as Brownian motion — diffusion is net spreading; Brownian motion is the visible jiggling.</li>
              <li>Forgetting the thermometer bulb sits at the still-head in distillation, reading the vapour that is condensing.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> name the differing property first (size, solubility, boiling point, magnetism, movement on paper) — the technique then chooses itself.</div>
          `,
          cards: [
            { q: 'Which method separates an insoluble solid from a liquid?', a: 'Filtration — the residue stays on the filter paper while the filtrate passes through, e.g. separating sand from water.' },
            { q: 'When would you use fractional distillation instead of simple distillation?', a: 'To separate miscible liquids with close boiling points, such as ethanol and water or the fractions of crude oil; simple distillation suits a solid dissolved in a liquid or widely different boiling points.' },
            { q: 'Which separation method relies on a solid changing directly to vapour?', a: 'Sublimation — iodine, ammonium chloride and camphor sublime on gentle heating, leaving non-subliming impurities behind.' },
            { q: 'How does paper chromatography separate a mixture of dyes?', a: 'A solvent rises up the paper carrying the dyes; different dyes travel at different speeds (different solubilities and attractions to the paper), so they separate into spots.' },
            { q: 'Name the best method to separate: (a) oil and water, (b) iron filings and sulphur, (c) salt from sea water.', a: '(a) Separating funnel (immiscible liquids); (b) a magnet (iron is magnetic); (c) evaporation or crystallisation.' },
            { q: 'Describe the arrangement and motion of particles in solids, liquids and gases.', a: 'Solid: particles close together in a fixed pattern, only vibrating. Liquid: particles close but free to slide past each other. Gas: particles far apart, moving rapidly in all directions.' },
            { q: 'What is diffusion? Give one everyday example.', a: 'Diffusion is the movement of particles from a region of higher concentration to lower concentration until evenly spread — e.g. the smell of perfume spreading across a room.' },
            { q: 'What does Brownian motion tell us about matter?', a: 'The random zigzag motion of smoke or pollen particles (bumped by invisible moving molecules) is evidence that matter is made of tiny particles in constant motion.' },
            { q: 'Name the changes of state: solid to liquid, liquid to gas, gas to liquid, solid to gas.', a: 'Melting (fusion), boiling/evaporation, condensation, and sublimation respectively.' },
            { q: 'How can you test whether a substance is pure using physical properties?', a: 'A pure substance melts and boils at sharp, fixed temperatures; impurities lower the melting point and raise the boiling point over a range.' },
            { q: 'Why does evaporation cool a liquid?', a: 'The fastest (most energetic) molecules escape from the surface, so the average kinetic energy — and therefore the temperature — of the remaining liquid falls.' },
            { q: 'How would you obtain pure copper(II) sulphate crystals from its solution?', a: 'By crystallisation: gently evaporate the solution to saturation, cool it so crystals form, then filter and dry the crystals between filter papers.' },
            { q: 'Match the separation technique to the mixture.', a: 'Insoluble solid + liquid: filtration. Soluble solid + liquid: evaporation/crystallisation. Miscible liquids: fractional distillation. Immiscible liquids: separating funnel. Dyes: chromatography. Subliming solid: sublimation. Magnetic solid: magnet.' },
            { q: 'How does simple distillation differ from fractional distillation?', a: 'Simple distillation separates ONE liquid from a solution (or liquids with very different boiling points). Fractional distillation, with its fractionating column, separates miscible liquids with CLOSE boiling points, like the fractions of crude oil.' },
            { q: 'State the kinetic theory of matter.', a: 'All matter is made of particles in constant motion. In solids they vibrate in fixed positions; in liquids they slide past one another; in gases they move rapidly and freely. Heating increases their motion - melting and boiling occur when they break free.' }
          ],
          quiz: [
            { q: 'The best method to separate sand from water is...', options: ['filtration', 'distillation', 'chromatography', 'evaporation of the sand'], correct: 0,
              exp: 'The insoluble sand stays on the filter paper while the water passes through as filtrate.' },
            { q: 'To obtain solid salt from salt solution, use...', options: ['evaporation (or crystallisation)', 'filtration', 'magnetism', 'decantation'], correct: 0,
              exp: 'The water evaporates away, leaving the dissolved salt behind as crystals.' },
            { q: 'Two miscible liquids with close boiling points are separated by...', options: ['fractional distillation', 'simple filtration', 'separating funnel', 'magnetism'], correct: 0,
              exp: 'The fractionating column gives repeated evaporation-condensation cycles, sharpening the separation.' },
            { q: 'Crude oil is separated into fractions by...', options: ['fractional distillation', 'filtration', 'chromatography', 'sublimation'], correct: 0,
              exp: 'The huge column separates hydrocarbons by boiling point - gases at the top, bitumen at the bottom.' },
            { q: 'Chromatography is used to separate...', options: ['dyes and pigments', 'sand and stones', 'iron filings and sulphur', 'salt and water'], correct: 0,
              exp: 'Components travel at different speeds on the paper, revealing each colour or substance separately.' },
            { q: 'Sublimation is the change of state from...', options: ['solid directly to gas', 'gas to liquid', 'liquid to solid', 'solid to liquid then gas'], correct: 0,
              exp: 'Iodine, camphor and ammonium chloride sublime - they skip the liquid stage when heated.' },
            { q: 'According to kinetic theory, particles in a solid...', options: ['vibrate about fixed positions', 'move freely and rapidly', 'do not move at all', 'flow like a liquid'], correct: 0,
              exp: 'Strong forces hold solid particles in place; they only vibrate - which is why solids keep their shape.' },
            { q: 'Diffusion occurs fastest in...', options: ['gases', 'liquids', 'solids', 'it is equal everywhere'], correct: 0,
              exp: 'Gas particles are far apart and move fastest, so they spread and mix most quickly.' },
            { q: 'Simple distillation is used to...', options: ['obtain a pure liquid from a solution', 'separate two solids', 'separate immiscible liquids', 'sort particles by size'], correct: 0,
              exp: 'The liquid boils off, condenses in the condenser and is collected - the solute stays behind.' },
            { q: 'A separating funnel separates...', options: ['two immiscible liquids such as oil and water', 'two miscible liquids', 'a solid from a liquid', 'gases from air'], correct: 0,
              exp: 'The denser liquid settles below and is run out through the tap - no heating needed.' }
          ],
        }
      ],
      SS2: [
        {
          title: 'Acids, Bases & Salts (with pH)',
          tags: ['Neutralisation', 'Indicators', 'pH scale'],
          summary: 'Definitions, the pH scale, indicators and the four methods of preparing salts.',
          content: `
            <h3>Definitions</h3>
            <ul><li><b>Acid</b> — a substance that ionises in water to give H⁺ (or H3O⁺) as the only positive ion.</li>
            <li><b>Base</b> — a substance that accepts a proton / gives OH⁻ in solution; a soluble base is an <b>alkali</b>.</li>
            <li><b>Salt</b> — the product when the H⁺ of an acid is replaced by a metal or ammonium ion.</li></ul>
            <div class="formula">Acid + Base → Salt + Water  (neutralisation)<br>Acid + Metal → Salt + Hydrogen<br>Acid + Carbonate → Salt + Water + CO2</div>
            <h3>The pH scale</h3>
            <table><tr><th>pH</th><th>Nature</th><th>Example</th></tr>
            <tr><td>0–6</td><td>Acidic</td><td>HCl, lemon juice</td></tr>
            <tr><td>7</td><td>Neutral</td><td>Pure water</td></tr>
            <tr><td>8–14</td><td>Basic/alkaline</td><td>NaOH, soap</td></tr></table>
            <p><b>Indicators:</b> litmus (red in acid, blue in base), methyl orange (red → yellow), phenolphthalein (colourless → pink).</p>
            <div class="worked"><b>Worked example:</b> HCl + NaOH → NaCl + H2O. To prepare the pure dry salt you <b>titrate</b> the acid against the alkali, then evaporate and crystallise.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Name the salt formed when dilute trioxonitrate(V) acid reacts with sodium hydroxide.<br>
            HNO3 + NaOH → <b>sodium trioxonitrate(V)</b> (NaNO3) + water.</div>
            <div class="worked"><b>Q2.</b> Describe how to prepare a pure dry sample of copper(II) tetraoxosulphate(VI) crystals from copper(II) oxide.<br>
            Warm dilute tetraoxosulphate(VI) acid and add copper(II) oxide until no more dissolves (excess). <b>Filter</b> to remove the excess solid, then evaporate the filtrate to the point of crystallisation and allow it to cool. Blot the crystals dry.</div>
            <div class="worked"><b>Q3.</b> What is observed when dilute hydrochloric acid is added to sodium trioxocarbonate(IV)?<br>
            <b>Effervescence</b> — carbon(IV) oxide is produced, and it turns lime water milky.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Confusing <b>strong</b> (fully ionised) with <b>concentrated</b> (a lot of solute per unit volume). A dilute solution of HCl is still a strong acid.</li>
              <li>Saying every base is an alkali — only <b>soluble</b> bases are alkalis.</li>
              <li>Using evaporation for a salt whose metal is above hydrogen in the reactivity series; a reaction this vigorous is unsafe.</li>
              <li>Forgetting to state that a <b>titration</b> is needed when both the acid and the base are soluble.</li>
            </ul>
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
            <p>Method of preparation follows solubility: a <b>soluble</b> salt from acid + alkali by <b>titration</b> (or acid + excess insoluble base, then filter and crystallise); an <b>insoluble</b> salt by <b>precipitation</b> — mixing two soluble salts, e.g. AgNO3 + NaCl → AgCl↓ + NaNO3.</p>
            <h3>Worked example, step by step</h3>
            <p><b>25.0 cm^3 of NaOH solution is neutralised by 20.0 cm^3 of 0.10 mol/dm^3 HCl. Find the concentration of the NaOH.</b></p>
            <ol>
              <li>Moles of acid = 0.10 × 20/1000 = 0.002 mol.</li>
              <li>Reaction is 1:1 (HCl + NaOH → NaCl + H2O), so moles of base = 0.002 mol.</li>
              <li>Concentration = 0.002 ÷ (25/1000) = <b>0.08 mol/dm^3</b>.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li>An acid must release H⁺ <b>in aqueous solution</b> — dry HCl gas in methylbenzene shows no acidic properties.</li>
              <li>Not every base is an alkali: alkalis are the <b>soluble</b> bases only (NaOH, KOH, NH3 solution).</li>
              <li>Metal oxides are basic; non-metal oxides (CO2, SO2) are acidic — that is why rain over a city turns slightly acidic.</li>
            </ul>
            <h3>See it around you</h3>
            <p>Stomach acid (HCl) eased by antacid tablets (weak bases), farm soil corrected with agricultural lime (CaO), and the sour taste of unripe mango — acid–base chemistry is daily life in Nigeria.</p>

          `,
          cards: [
            { q: 'Define an acid in terms of ions.', a: 'An acid is a substance that ionises in water to produce hydrogen ions (H+, present as H3O+) as the only positive ion — e.g. HCl, H2SO4, HNO3.' },
            { q: 'What is the difference between a base and an alkali?', a: 'A base neutralises an acid to give salt and water only; an alkali is a base that is soluble in water and releases OH- ions, e.g. NaOH.' },
            { q: 'What does the pH scale measure, and what do values 2, 7 and 12 indicate?', a: 'pH measures how acidic or alkaline a solution is from 0 to 14: pH 2 is strongly acidic, pH 7 is neutral, and pH 12 is strongly alkaline.' },
            { q: 'Give the colour changes of litmus, methyl orange and phenolphthalein in acid and in alkali.', a: 'Litmus: red in acid, blue in alkali. Methyl orange: red in acid, yellow in alkali. Phenolphthalein: colourless in acid, pink in alkali.' },
            { q: 'Write the general equation for neutralisation.', a: 'Acid + base -> salt + water; e.g. HCl + NaOH -> NaCl + H2O.' },
            { q: 'What gas is produced when an acid reacts with (a) a reactive metal, (b) a carbonate?', a: '(a) Hydrogen — it gives a \'pop\' with a lighted splint. (b) Carbon dioxide — it turns limewater milky.' },
            { q: 'What is the basicity of an acid? Give examples.', a: 'Basicity is the number of replaceable hydrogen ions per molecule: HCl is monobasic (1), H2SO4 is dibasic (2), H3PO4 is tribasic (3).' },
            { q: 'Distinguish between a strong acid and a weak acid.', a: 'A strong acid ionises completely in water (HCl, H2SO4); a weak acid ionises only slightly (ethanoic acid, carbonic acid), so it reacts more slowly and conducts poorly.' },
            { q: 'Name four classes of salts with one example each.', a: 'Normal salt (NaCl), acid salt (NaHSO4 — replaceable H remains), basic salt (basic copper carbonate), double salt (alum), and hydrated salts containing water of crystallisation (CuSO4.5H2O).' },
            { q: 'How would you prepare a soluble salt by titration?', a: 'Pipette the alkali (with indicator) into a conical flask, run in acid from the burette until the indicator just changes, note the volume, then repeat without indicator and evaporate/crystallise the neutral solution.' },
            { q: 'Explain deliquescent, efflorescent and hygroscopic substances.', a: 'Deliquescent solids absorb so much water from air that they dissolve (CaCl2); efflorescent hydrated salts lose water of crystallisation to dry air (washing soda); hygroscopic substances absorb moisture without dissolving (conc. H2SO4 — a drying agent).' },
            { q: 'State two industrial or everyday uses of sulphuric acid and hydrochloric acid.', a: 'Sulphuric acid: car batteries, fertiliser manufacture, making detergents. Hydrochloric acid: pickling (cleaning) steel, laboratory reagent, and it is the acid in gastric juice.' },
            { q: 'What colour does phenolphthalein turn in a base?', a: 'Pink (it is colourless in acid and neutral solution).' },
            { q: 'Give the definitions of an acid and a base (Arrhenius).', a: 'An acid is a substance that ionises in water to give hydrogen ions (H⁺) as the only positive ion. A base accepts hydrogen ions or, in Arrhenius terms, yields hydroxide ions (OH⁻) in water; a soluble base is an alkali.' },
            { q: 'Explain how the pH scale works.', a: 'A 0-14 scale measuring acidity: 0-6 acidic (lower = stronger), 7 neutral, 8-14 basic (higher = stronger). Indicators show it by colour - universal indicator gives a colour for every value.' }
          ],
          quiz: [
            { q: 'An acid turns blue litmus paper...', options: ['red', 'blue', 'green', 'colourless'], correct: 0,
              exp: 'Acids turn blue litmus red; bases turn red litmus blue - the classic first test.' },
            { q: 'A solution with pH 7 is...', options: ['neutral', 'strongly acidic', 'weakly basic', 'strongly basic'], correct: 0,
              exp: 'The pH scale runs 0-14: below 7 acidic, exactly 7 neutral (pure water), above 7 basic.' },
            { q: 'An acid reacts with a base to form...', options: ['a salt and water only', 'hydrogen gas', 'carbon dioxide always', 'an oxide only'], correct: 0,
              exp: 'Neutralisation: acid + base → salt + water. This is the defining acid-base reaction.' },
            { q: 'The pH of dilute hydrochloric acid is approximately...', options: ['1', '7', '10', '14'], correct: 0,
              exp: 'A strong acid sits near the bottom of the pH scale - pH 1 or 2 when concentrated-ish.' },
            { q: 'An alkali is best defined as...', options: ['a soluble base', 'any acid', 'an insoluble salt', 'a neutral oxide'], correct: 0,
              exp: 'All alkalis are bases, but only the soluble ones (like NaOH) are called alkalis.' },
            { q: 'A strongly basic solution has a pH of about...', options: ['13', '7', '5', '1'], correct: 0,
              exp: 'Strong bases sit near the top of the scale - pH 13 or 14.' },
            { q: 'Universal indicator turns ___ in a strong acid.', options: ['red', 'blue', 'green', 'purple'], correct: 0,
              exp: 'Red-orange for strong acids, green for neutral, blue-purple for strong bases - a colour for every pH.' },
            { q: 'Salts are commonly prepared by...', options: ['neutralising an acid with a base or suitable metal compound', 'burning metals in air only', 'freezing acids', 'distilling water'], correct: 0,
              exp: 'Titration, excess-metal or precipitation methods all build a salt from an acid.' },
            { q: 'Which of these is a normal salt?', options: ['sodium chloride, NaCl', 'sodium hydrogen sulphate, NaHSO4', 'basic copper carbonate', 'dilute hydrochloric acid'], correct: 0,
              exp: 'A normal salt has ALL the replaceable hydrogen of the acid replaced - NaCl qualifies; NaHSO4 still holds one H.' },
            { q: 'An acid reacts with a reactive metal to give...', options: ['a salt and hydrogen gas', 'a salt and water only', 'carbon dioxide', 'oxygen'], correct: 0,
              exp: 'Acid + metal → salt + hydrogen - the hydrogen gives a pop with a lighted splint.' }
          ],
        },
        {
          title: 'Hydrocarbons & Organic Chemistry Basics',
          tags: ['Alkanes', 'Alkenes', 'Functional groups'],
          summary: 'Saturated vs unsaturated hydrocarbons and the idea of a homologous series.',
          content: `
            <h3>A homologous series</h3>
            <p>A family of compounds with the same general formula, differing by CH2, with similar chemical properties and a gradual change in physical properties.</p>
            <table><tr><th>Series</th><th>General formula</th><th>First member</th></tr>
            <tr><td>Alkanes (saturated)</td><td>C_nH2_n₊2</td><td>CH4 methane</td></tr>
            <tr><td>Alkenes (C=C)</td><td>C_nH2_n</td><td>C2H4 ethene</td></tr>
            <tr><td>Alkynes (C≡C)</td><td>C_nH2_n₋2</td><td>C2H2 ethyne</td></tr>
            <tr><td>Alkanols</td><td>C_nH2_n₊1OH</td><td>CH3OH methanol</td></tr>
            <tr><td>Alkanoic acids</td><td>C_nH2_n₊1COOH</td><td>HCOOH methanoic acid</td></tr></table>
            <h3>Test for unsaturation</h3>
            <p>Bromine water is decolourised by an alkene (addition across the double bond) but not by an alkane. Baeyer's reagent (cold dilute KMnO4) also decolourises.</p>
            <div class="worked"><b>Worked example:</b> Combustion of ethene: C2H4 + 3O2 → 2CO2 + 2H2O.</div>
            <div class="tip"><b>Exam tip:</b> Cracking (breaking long chains into short ones) is used to obtain petrol fractions; it needs heat and a catalyst such as alumina.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Write the molecular formula of the fifth member of the alkane series.<br>
            C_nH2_n₊2 with n = 5 → <b>C5H12</b> (pentane).</div>
            <div class="worked"><b>Q2.</b> How would you distinguish chemically between ethane and ethene?<br>
            Bubble each through <b>bromine water</b>. Ethene decolourises it; ethane does not. Alternatively, ethene decolourises acidified potassium tetraoxomanganate(VII).</div>
            <div class="worked"><b>Q3.</b> Draw and name the two isomers of C4H10.<br>
            <b>Butane</b> (a straight chain) and <b>2-methylpropane</b> (a branched chain). They have the same molecular formula but different structural formulae.</div>
            <div class="worked"><b>Q4.</b> Write the equation for the complete combustion of propane.<br>
            <b>C3H8 + 5O2 → 3CO2 + 4H2O</b>.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Confusing <b>saturated</b> (only C–C single bonds, alkanes) with <b>unsaturated</b> (C=C or C≡C present).</li>
              <li>Saying isomers have different molecular formulae — they have the <b>same</b> molecular formula and different structural formulae.</li>
              <li>Writing incomplete combustion products (carbon(II) oxide or soot) when the question says <b>excess</b> air.</li>
              <li>Forgetting that cracking needs both <b>heat and a catalyst</b>.</li>
            </ul>
            <h3>Deep dive: families of hydrocarbons</h3>
            <p><b>Alkanes</b> (C_nH2_n₊2) are saturated — single bonds only: methane, ethane, propane, butane, pentane. <b>Alkenes</b> (C_nH2_n) contain one C=C double bond: ethene, propene. The double bond is the alkene's business card: it undergoes <b>addition</b> reactions and instantly <b>decolourises bromine water</b> (orange → colourless) — the standard lab test that separates alkenes from alkanes, which only manage slow <b>substitution</b> in sunlight.</p>
            <p><b>Isomerism</b>: butane (C4H10) exists as straight-chain n-butane and branched 2-methylpropane — same formula, different arrangement, different properties. Branching matters in petrol: branched isomers burn more smoothly (higher octane).</p>
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
            <p><b>Write the balanced equation for the complete combustion of propane (C3H8).</b></p>
            <ol>
              <li>Complete combustion of any hydrocarbon gives CO2 + H2O.</li>
              <li>C3H8 + 5O2 → 3CO2 + 4H2O (check: C 3=3, H 8=8, O 10=10).</li>
              <li>Limited air gives incomplete combustion: 2C3H8 + 7O2 → 6CO + 8H2O — carbon(II) oxide, the silent killer in poorly ventilated generators.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li>-<b>ane</b> = saturated, -<b>ene</b> = one double bond; do not let the similar names fool you.</li>
              <li>Bromine water tests alkenes, not acidity — the decolourisation is an <b>addition</b> reaction.</li>
              <li>First four alkanes are gases; pentane to about C17 are liquids; longer chains are waxy solids.</li>
            </ul>
            <h3>See it around you</h3>
            <p>Cooking gas is butane/propane, kerosene stoves burn C10–C16 alkanes, candle wax is C20₊, and the fumes around a filling station are light fractions evaporating — one homologous series, from your kitchen to the highway.</p>

          `,
          cards: [
            { q: 'What is a hydrocarbon?', a: 'An organic compound containing only carbon and hydrogen — e.g. methane, ethane, ethene and benzene.' },
            { q: 'Give the general formula of alkanes and name the first three members.', a: 'CnH2n+2 — methane (CH4), ethane (C2H6), propane (C3H8). Alkanes are saturated: they contain only single bonds.' },
            { q: 'How do you distinguish an alkane from an alkene chemically?', a: 'Add bromine water: an alkene (with a C=C double bond) decolorises it immediately by addition; an alkane does not (except slowly in sunlight). Acidified KMnO4 is also decolorised by alkenes.' },
            { q: 'What is a homologous series? State two of its features.', a: 'A family of compounds with the same general formula, differing by CH2, with the same functional group and gradually changing physical properties — e.g. the alkanes or alkanols.' },
            { q: 'Why is crude oil separated by fractional distillation, and name four fractions.', a: 'Its components have different boiling points. Fractions from top to bottom of the column include refinery gas, petrol (gasoline), kerosene, diesel (gas oil), lubricating oil and bitumen.' },
            { q: 'What is cracking, and why is it important?', a: 'Cracking breaks long-chain hydrocarbons into shorter, more useful ones (often alkanes + alkenes) by heat and a catalyst — it boosts petrol supply and produces ethene for plastics.' },
            { q: 'Write the products of complete and incomplete combustion of a hydrocarbon.', a: 'Complete: hydrocarbon + O2 -> CO2 + H2O (+ heat). Incomplete (limited air): carbon monoxide (poisonous) and/or soot (carbon) plus water.' },
            { q: 'What is isomerism? Give an example.', a: 'Isomers have the same molecular formula but different structural formulae — butane (a straight chain) and 2-methylpropane (branched) are both C4H10.' },
            { q: 'What type of reaction do alkanes and alkenes typically undergo?', a: 'Alkanes: substitution — e.g. methane + chlorine in UV light gives chloromethane + HCl. Alkenes: addition across the double bond — e.g. ethene + bromine gives 1,2-dibromoethane.' },
            { q: 'Name the functional groups of alkanols and alkanoic acids with one example each.', a: 'Alkanols have the -OH group (ethanol, C2H5OH); alkanoic acids have the -COOH group (ethanoic acid, CH3COOH).' },
            { q: 'State two uses each of bitumen and ethene.', a: 'Bitumen: surfacing roads and roofing felt. Ethene: making polythene plastics and artificially ripening fruit.' },
            { q: 'Why is carbon monoxide from incomplete combustion dangerous?', a: 'It is a colourless, odourless gas that binds to haemoglobin far more strongly than oxygen, so the blood cannot carry oxygen — it causes suffocation and death.' },
            { q: 'General formula of alkenes and the test for them?', a: 'C_nH2_n; they decolourise bromine water (addition across the C=C bond).' },
            { q: 'What is a homologous series? Give its features.', a: 'A family of compounds with the same general formula, differing by CH2 per step, showing gradual change in physical properties and similar chemical behaviour. Example: alkanes C_nH2_n₊2 - methane, ethane, propane...' },
            { q: 'How do saturated and unsaturated hydrocarbons differ, and how is unsaturation tested?', a: 'Saturated (alkanes) have only single C-C bonds; unsaturated (alkenes/alkynes) contain double or triple bonds. Test: shake with orange bromine water - unsaturated compounds decolourise it as bromine adds across the multiple bond.' }
          ],
          quiz: [
            { q: 'Hydrocarbons that contain only single bonds are called...', options: ['saturated (alkanes)', 'unsaturated', 'aromatics only', 'isotopes'], correct: 0,
              exp: 'Every carbon is "full" of hydrogen - no more can add, so alkanes are saturated.' },
            { q: 'The general formula of the alkanes is...', options: ['C_nH2_n₊2', 'C_nH2_n', 'C_nH2_n₋2', 'C_nH_n'], correct: 0,
              exp: 'Methane CH4, ethane C2H6, propane C3H8 - all fit C_nH2_n₊2.' },
            { q: 'The first member of the alkene family is...', options: ['ethene', 'methene', 'propene', 'butene'], correct: 0,
              exp: 'A double bond needs two carbons, so the series starts at C2H4 - ethene.' },
            { q: 'Alkenes are detected by their ability to...', options: ['decolourise bromine water', 'turn litmus red', 'conduct electricity', 'explode in air only'], correct: 0,
              exp: 'The double bond adds bromine across it, so orange bromine water turns colourless - the test for unsaturation.' },
            { q: 'Consecutive members of a homologous series differ by...', options: ['CH2', 'H2O', 'O2', 'a carbon atom only'], correct: 0,
              exp: 'Each step adds one carbon and two hydrogens - a CH2 unit - with properties changing gradually.' },
            { q: 'Complete combustion of a hydrocarbon produces...', options: ['carbon dioxide and water', 'carbon monoxide and hydrogen', 'carbon only', 'oxygen and water'], correct: 0,
              exp: 'With plenty of air: hydrocarbon + O2 → CO2 + H2O. Limited air gives poisonous carbon monoxide instead.' },
            { q: 'Cracking is the process of...', options: ['breaking large hydrocarbon molecules into smaller, more useful ones', 'joining small molecules', 'freezing crude oil', 'filtering petrol'], correct: 0,
              exp: 'Heat and a catalyst split long chains into shorter fuels and alkenes - more valuable products.' },
            { q: 'The suffixes -ane, -ene and -yne indicate...', options: ['single, double and triple bonds respectively', 'chain length only', 'the number of oxygens', 'the state of matter'], correct: 0,
              exp: '-ane = alkane (single bonds), -ene = alkene (double), -yne = alkyne (triple).' },
            { q: 'The simplest hydrocarbon is...', options: ['methane', 'ethane', 'ethene', 'benzene'], correct: 0,
              exp: 'One carbon, four hydrogens - CH4, the main component of natural gas.' },
            { q: 'Isomers are compounds with...', options: ['the same molecular formula but different structural formulas', 'different molecular formulas', 'identical structures', 'no carbon atoms'], correct: 0,
              exp: 'Butane and 2-methylpropane are both C4H10 - same atoms, different arrangements, different properties.' }
          ],
        },
        {
          title: 'Air, the Atmosphere & the Gas Laws',
          tags: ['Composition of air', 'Boyle’s law', 'Charles’ law', 'Pollution'],
          summary: 'What air is made of, how gases behave, and the chemistry of pollution.',
          content: `
            <h3>1. Composition of clean dry air</h3>
            <table>
              <tr><th>Gas</th><th>% by volume</th></tr>
              <tr><td>Nitrogen</td><td>78</td></tr>
              <tr><td>Oxygen</td><td>21</td></tr>
              <tr><td>Argon and other noble gases</td><td>0.9</td></tr>
              <tr><td>Carbon(IV) oxide</td><td>0.03–0.04</td></tr>
            </table>
            <p>Air also contains variable amounts of <b>water vapour</b> and traces of dust. It is a <b>mixture</b>, not a compound, because its components can be separated physically (fractional distillation of liquid air) and keep their own properties.</p>
            <h3>2. Determining the percentage of oxygen in air</h3>
            <p>A known volume of air is passed over heated copper turnings. The copper combines with the oxygen to form black copper(II) oxide, and the volume falls by about one fifth — proving that oxygen is roughly <b>21%</b> of air.</p>
            <h3>3. The gas laws</h3>
            <div class="formula">Boyle's law: P1V1 = P2V2  (constant temperature)<br>
            Charles' law: V1/T1 = V2/T2  (constant pressure, T in kelvin)<br>
            General gas equation: P1V1/T1 = P2V2/T2</div>
            <div class="worked"><b>Worked example 1 (Boyle):</b> A gas occupies 400 cm^3 at 750 mmHg. What volume at 600 mmHg?<br>
            V2 = 750 × 400 / 600 = <b>500 cm^3</b>. Lower pressure, larger volume.</div>
            <div class="worked"><b>Worked example 2 (Charles):</b> A gas occupies 300 cm^3 at 27 °C. What volume at 127 °C?<br>
            T1 = 300 K, T2 = 400 K, so V2 = 300 × 400/300 = <b>400 cm^3</b>.</div>
            <div class="warn"><b>Always convert °C to kelvin</b> by adding 273. This single slip accounts for a large share of lost marks.</div>
            <h3>4. Air pollution</h3>
            <ul>
              <li><b>Carbon(II) oxide (CO)</b> — from incomplete combustion; poisonous because it binds to haemoglobin.</li>
              <li><b>Sulphur(IV) oxide and nitrogen oxides</b> — dissolve in rainwater to give <b>acid rain</b>, which damages buildings, crops and aquatic life.</li>
              <li><b>Carbon(IV) oxide and methane</b> — greenhouse gases that trap heat and drive global warming.</li>
              <li><b>Chlorofluorocarbons (CFCs)</b> — destroy the ozone layer, allowing more ultraviolet radiation to reach the surface.</li>
            </ul>
            <h3>5. Uses of the components</h3>
            <p>Nitrogen: making ammonia (Haber process) and filling bulbs. Oxygen: steel making, welding and medical breathing. Noble gases: lighting and inert atmospheres. Carbon(IV) oxide: fizzy drinks, fire extinguishers and photosynthesis.</p>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> A gas occupies 250 cm^3 at 20 °C. What is its volume at 60 °C at constant pressure?<br>
            T1 = 293 K, T2 = 333 K. V2 = 250 × 333/293 = <b>284 cm^3</b>.</div>
            <div class="worked"><b>Q2.</b> A gas at 700 mmHg and 300 cm^3 is compressed to 1050 mmHg at constant temperature. Find the new volume.<br>
            V2 = 700 × 300/1050 = <b>200 cm^3</b>.</div>
            <div class="worked"><b>Q3.</b> Describe one laboratory test that shows air contains oxygen.<br>
            Pass a known volume of air over heated copper turnings. The copper turns black as copper(II) oxide forms and the volume falls by about one fifth, showing that oxygen is roughly 21% of air.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Using degrees Celsius in the gas laws. <b>Always convert to kelvin</b> by adding 273.</li>
              <li>Calling air a compound. It is a <b>mixture</b> — its components can be separated physically.</li>
              <li>Confusing <b>global warming</b> (greenhouse gases trapping heat) with <b>ozone depletion</b> (CFCs destroying ozone).</li>
              <li>Forgetting that water vapour is a variable component of air.</li>
            </ul>
            <h3>Deep dive: what air really is</h3>
            <p>Dry air is about <b>78% nitrogen, 21% oxygen, 0.9% argon</b> and <b>0.04% carbon(IV) oxide</b>, plus variable water vapour, dust and pollutants. Oxygen supports combustion and respiration; nitrogen dilutes it (pure oxygen would make fires explosive) and is fixed into fertiliser; CO2 drives photosynthesis and the greenhouse effect. The classic lab proof of oxygen's fraction: burn phosphorus in a bell jar over water — the water rises by about one-fifth as the oxygen is used up.</p>
            <h3>The gas laws (for a fixed mass of gas)</h3>
            <div class="formula">Boyle: P1V1 = P2V2 (constant T) &nbsp;&nbsp;·&nbsp;&nbsp; Charles: V1/T1 = V2/T2 (constant P) &nbsp;&nbsp;·&nbsp;&nbsp; Combined: P1V1/T1 = P2V2/T2</div>
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
            <p><b>A gas occupies 400 cm^3 at 27 °C and 760 mmHg. Find its volume at 47 °C and 720 mmHg.</b></p>
            <ol>
              <li>Convert: T1 = 300 K, T2 = 320 K.</li>
              <li>Combined law: V2 = P1V1T2 ÷ (T1P2) = (760 × 400 × 320) ÷ (300 × 720).</li>
              <li>V2 = 97,280,000 ÷ 216,000 ~= <b>450.4 cm^3</b> — hotter and lower pressure both swell the gas.</li>
            </ol>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Plugging °C into Charles's law — always convert to kelvin first.</li>
              <li>Confusing which quantities are held fixed: Boyle fixes temperature, Charles fixes pressure.</li>
              <li>Quoting CO2 as 4% of air — it is about 0.04%, a hundred times smaller.</li>
            </ul>
            <h3>See it around you</h3>
            <p>Harmattan haze is dust suspended in dry air; Lagos traffic adds CO and particulates; a pressure cooker raises boiling point by raising pressure — the gas laws run every kitchen and every engine.</p>

          `,
          cards: [
            { q: 'State the composition of clean dry air by volume.', a: 'About 78% nitrogen, 21% oxygen, 0.9% noble gases (mainly argon), about 0.03-0.04% carbon dioxide, plus variable water vapour and dust.' },
            { q: 'Describe the classic experiment that shows air is about one-fifth oxygen.', a: 'Burn phosphorus (or a candle) in a jar inverted over water: the flame uses up the oxygen and water rises to replace it, filling roughly one-fifth of the jar.' },
            { q: 'Give the standard tests for oxygen, carbon dioxide and hydrogen.', a: 'Oxygen relights a glowing splint; carbon dioxide turns limewater milky; hydrogen \'squeaky pops\' with a lighted splint.' },
            { q: 'State Boyle\'s law with its formula.', a: 'At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure: P1V1 = P2V2.' },
            { q: 'State Charles\' law with its formula.', a: 'At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute (kelvin) temperature: V1/T1 = V2/T2.' },
            { q: 'What is meant by s.t.p., and what is the molar volume of a gas there?', a: 'Standard temperature and pressure: 273 K (0 degC) and 760 mmHg (1 atm). One mole of any gas occupies 22.4 dm3 at s.t.p.' },
            { q: 'Solve: a gas occupies 400 cm3 at 700 mmHg. What volume at 760 mmHg (constant temperature)?', a: 'P1V1 = P2V2, so V2 = 700 x 400 / 760 = about 368.4 cm3 — higher pressure gives a smaller volume.' },
            { q: 'Which gases cause acid rain, and what damage does it do?', a: 'Sulphur(IV) oxide (SO2) and nitrogen oxides dissolve in rainwater to form acids that corrode metal roofs and statues, damage crops and make lakes acidic, killing fish.' },
            { q: 'State two conditions needed for rusting and three ways to prevent it.', a: 'Rusting needs both air (oxygen) and water. Prevention: painting or greasing, galvanising (zinc coating), electroplating, and sacrificial protection.' },
            { q: 'Why is nitrogen useful despite being unreactive?', a: 'It fills electric bulbs (prevents filament oxidation), stores food (chips packets), provides liquid nitrogen for freezing, and it is the raw material for ammonia and nitrogenous fertilisers.' },
            { q: 'Name two noble gases and a use of each.', a: 'Neon: glowing advertising signs. Argon: filling electric bulbs. Helium: balloons and airships (it is lighter than air and non-flammable).' },
            { q: 'Which greenhouse gases trap heat, and what is the consequence?', a: 'Carbon dioxide and methane absorb re-radiated heat; rising levels from burning fuels intensify global warming, causing climate change and rising sea levels.' },
            { q: 'State the composition of clean dry air.', a: 'About 78% nitrogen, 21% oxygen, 0.9% argon, 0.03-0.04% carbon dioxide, plus traces of neon, helium, methane, hydrogen and water vapour that varies with humidity.' },
            { q: 'State Boyle’s law and Charles’ law.', a: 'Boyle: at constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure (PV = k). Charles: at constant pressure, volume is directly proportional to absolute temperature in kelvin (V/T = k).' },
            { q: 'Name common air pollutants and their sources.', a: 'Carbon monoxide (incomplete combustion in engines), sulphur dioxide (burning sulphur-containing fuels - causes acid rain), oxides of nitrogen (engines and lightning - smog), and particulates/dust from industry and vehicles.' }
          ],
          quiz: [
            { q: 'Clean dry air is about ___ nitrogen.', options: ['78%', '21%', '1%', '50%'], correct: 0,
              exp: 'Roughly 78% nitrogen, 21% oxygen, and about 1% argon, carbon dioxide and other gases.' },
            { q: 'The oxygen content of clean air is approximately...', options: ['21%', '78%', '0.03%', '50%'], correct: 0,
              exp: 'About 21% - enough to support combustion and respiration without making fires too fierce.' },
            { q: 'In the classic experiment to find the percentage of oxygen in air, the water level rises by about...', options: ['one-fifth (20%)', 'one-half', 'three-quarters', 'it does not rise'], correct: 0,
              exp: 'The burning substance uses up the oxygen (about a fifth of the air), so water rises to fill the space.' },
            { q: 'The noble (rare) gas most abundant in air is...', options: ['argon', 'helium', 'neon', 'xenon'], correct: 0,
              exp: 'Argon makes up nearly 1% of air - far more than all the other noble gases combined.' },
            { q: 'Boyle’s law states that at constant temperature, the volume of a fixed mass of gas is...', options: ['inversely proportional to its pressure', 'directly proportional to its pressure', 'independent of pressure', 'proportional to temperature only'], correct: 0,
              exp: 'PV = constant: squeeze a gas (raise P) and its volume falls proportionally.' },
            { q: 'Charles’ law states that at constant pressure, the volume of a fixed mass of gas is...', options: ['directly proportional to its absolute temperature', 'inversely proportional to temperature', 'constant', 'proportional to pressure'], correct: 0,
              exp: 'V/T = constant with T in kelvin: heat a gas and it expands steadily.' },
            { q: 'The poisonous gas in car exhaust that combines with haemoglobin is...', options: ['carbon monoxide', 'carbon dioxide', 'nitrogen', 'ozone'], correct: 0,
              exp: 'CO binds to haemoglobin far more strongly than oxygen, starving the body - a silent killer.' },
            { q: 'Oxygen is essential for...', options: ['combustion and respiration', 'photosynthesis as a raw material', 'fire extinguishers', 'making fertilisers directly'], correct: 0,
              exp: 'Fires and living cells both need oxygen; plants release it rather than consume it in photosynthesis.' },
            { q: 'Nitrogen is used in food packaging because it is...', options: ['unreactive (inert)', 'poisonous to bacteria', 'cheaper than air', 'coloured'], correct: 0,
              exp: 'Nitrogen’s inertness keeps crisps and milk powder from oxidising and going stale or rancid.' },
            { q: 'Carbon dioxide is used in fire extinguishers because it...', options: ['is denser than air and does not support combustion', 'burns readily', 'cools by exploding', 'is lighter than air'], correct: 0,
              exp: 'CO2 blankets the fire, cutting off oxygen - being heavier than air, it stays where it is needed.' }
          ],
        }
      ],
      SS3: [
        {
          title: 'Redox Reactions & Electrolysis',
          tags: ['Oxidation number', 'OIL RIG', 'Electroplating'],
          summary: 'Oxidation numbers, balancing redox equations and the laws of electrolysis.',
          content: `
            <h3>Oxidation and reduction</h3>
            <ul>
              <li><b>Oxidation</b> = loss of electrons = increase in oxidation number = gain of oxygen / loss of hydrogen.</li>
              <li><b>Reduction</b> = gain of electrons = decrease in oxidation number = loss of oxygen / gain of hydrogen.</li>
              <li>Mnemonic: <b>OIL RIG</b> — Oxidation Is Loss, Reduction Is Gain (of electrons).</li>
            </ul>
            <h3>Oxidation number rules</h3>
            <ul><li>Free element = 0 (O2, Na).</li><li>Oxygen = -2 (except peroxides, -1).</li>
            <li>Hydrogen = +1 (except metal hydrides, -1).</li>
            <li>Group 1 = +1, Group 2 = +2, F = -1.</li>
            <li>The sum in a neutral compound = 0; in an ion = the ion charge.</li></ul>
            <div class="worked"><b>Worked example:</b> In KMnO4: K = +1, O = -2 × 4 = -8, so Mn = <b>+7</b>. In MnSO4, Mn = +2 — so MnO4⁻ → Mn^2⁺ is a reduction (a fall of 5 in oxidation number).</div>
            <h3>Electrolysis</h3>
            <p>An electrolyte conducts electricity and is decomposed by it. <b>Cations</b> go to the <b>cathode</b> (reduction); <b>anions</b> go to the <b>anode</b> (oxidation).</p>
            <div class="formula">Faraday's first law: m = ZIt  (mass deposited ∝ quantity of electricity)</div>
            <p>Uses: electroplating, purification of copper, extraction of aluminium (Hall–Héroult), electrotyping.</p>
            <div class="tip"><b>Exam tip:</b> In the electrolysis of dilute H2SO4 with inert electrodes, the products are <b>hydrogen at the cathode</b> and <b>oxygen at the anode</b> — water is preferentially discharged.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Find the oxidation number of the underlined element: (a) <u>S</u> in SO4^2⁻, (b) <u>Cr</u> in K2Cr2O7, (c) <u>N</u> in NH4⁺.<br>
            (a) S + 4(-2) = -2, so S = <b>+6</b>.<br>
            (b) 2(+1) + 2Cr + 7(-2) = 0, so 2Cr = 12 and Cr = <b>+6</b>.<br>
            (c) N + 4(+1) = +1, so N = <b>-3</b>.</div>
            <div class="worked"><b>Q2.</b> In 2Fe2O3 + 3C → 4Fe + 3CO2, what is oxidised and what is reduced?<br>
            Fe goes +3 → 0, so iron is <b>reduced</b> (Fe2O3 is the oxidising agent).<br>
            C goes 0 → +4, so carbon is <b>oxidised</b> (C is the reducing agent).</div>
            <div class="worked"><b>Q3.</b> A current of 2 A passes through copper(II) tetraoxosulphate(VI) solution for 30 minutes. Given 1 F = 96500 C and Cu = 64, find the mass of copper deposited.<br>
            Q = It = 2 × 1800 = 3600 C, so moles of electrons = 3600/96500 = 0.0373 mol.<br>
            Cu^2⁺ + 2e⁻ → Cu, so moles of Cu = 0.01865 and mass = 0.01865 × 64 = <b>1.19 g</b>.</div>
            <div class="diagram">
              <div class="diagram-title">Electrolysis of copper(II) sulphate solution</div>
              <svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electrolysis cell with a battery, anode and cathode dipping into copper sulphate solution">
                <rect x="6" y="6" width="368" height="208" rx="14" fill="#ecfeff"/>
                <path d="M96 96 L96 46 L284 46 L284 96" stroke="#334155" stroke-width="3" fill="none"/>
                <rect x="170" y="28" width="40" height="36" rx="4" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
                <text x="190" y="50" text-anchor="middle" font-size="9" fill="#78350f">battery</text>
                <text x="90" y="24" font-size="12" fill="#b91c1c" font-weight="bold">+</text>
                <text x="288" y="24" font-size="12" fill="#0369a1" font-weight="bold">-</text>
                <rect x="70" y="90" width="240" height="106" rx="10" fill="#cffafe" stroke="#0891b2" stroke-width="2.5"/>
                <rect x="86" y="60" width="20" height="120" fill="#475569"/>
                <rect x="274" y="60" width="20" height="120" fill="#475569"/>
                <text x="96" y="204" text-anchor="middle" font-size="10" fill="#0f172a">anode (+)</text>
                <text x="284" y="204" text-anchor="middle" font-size="10" fill="#0f172a">cathode (-)</text>
                <text x="190" y="112" text-anchor="middle" font-size="10" fill="#155e75">CuSO4 (aq)</text>
                <g fill="#b45309">
                  <circle cx="140" cy="130" r="4"/><circle cx="176" cy="152" r="4"/><circle cx="212" cy="126" r="4"/><circle cx="246" cy="158" r="4"/>
                </g>
                <path d="M150 130 L262 148" stroke="#b45309" stroke-width="1.6" stroke-dasharray="4 3" fill="none"/>
                <path d="M256 142 L264 148 L256 154" fill="#b45309"/>
                <text x="190" y="176" text-anchor="middle" font-size="10" fill="#7c2d12">Cu^2⁺ ions move to the cathode</text>
                <g fill="#dc2626"><circle cx="274" cy="100" r="3.4"/><circle cx="276" cy="122" r="3.4"/><circle cx="274" cy="146" r="3.4"/></g>
                <text x="190" y="82" text-anchor="middle" font-size="10" fill="#0f172a">electrons flow through the wire from anode to cathode</text>
              </svg>
              <div class="diagram-note"><b>OIL RIG</b> — Oxidation Is Loss, Reduction Is Gain of electrons. At the cathode Cu^2⁺ + 2e⁻ → Cu (reduction, copper is deposited). At the anode oxidation occurs.</div>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying the oxidising agent is oxidised. The <b>oxidising agent is itself reduced</b>, and vice versa.</li>
              <li>Forgetting that oxygen is -2 <b>except</b> in peroxides such as H2O2, where it is -1.</li>
              <li>Using minutes instead of seconds in Q = It.</li>
              <li>Ignoring how many electrons are transferred: Cu^2⁺ takes 2 but Ag⁺ takes only 1.</li>
            </ul>
            <div class="tip"><b>Memory aid:</b> <b>RED CAT</b> — Reduction at the Cathode; <b>AN OX</b> — Anode for Oxidation.</div>
            <h3>Deep dive: tracking electrons with oxidation numbers</h3>
            <p>Redox = <b>reduction</b> (gain of electrons, oxidation number falls) and <b>oxidation</b> (loss of electrons, number rises) — they always happen together. Quick rules: free elements = 0; oxygen is usually -2; hydrogen +1 (except in metal hydrides, -1); simple ions equal their charge. In Fe2O3 + 3CO → 2Fe + 3CO2, iron falls +3 → 0 (reduced; Fe2O3 is the oxidising agent) while carbon rises +2 → +4 (oxidised; CO is the reducing agent).</p>
            <h3>Electrolysis: who discharges first?</h3>
            <p>In the electrolyte, <b>cations migrate to the cathode</b> (negative electrode) and <b>anions to the anode</b>. Preferential discharge depends on (1) position in the electrochemical series — the <b>less reactive</b> ion discharges first, (2) concentration — concentrated Cl⁻ beats dilute OH⁻ at the anode, and (3) electrode nature — inert (carbon/platinum) vs active (copper anode dissolves instead of discharging).</p>
            <ul>
              <li><b>Molten NaCl</b>: Na⁺ + e⁻ → Na at the cathode; 2Cl⁻ → Cl2 + 2e⁻ at the anode.</li>
              <li><b>Dilute H2SO4 (acidified water)</b>: 2H⁺ + 2e⁻ → H2 (cathode); 4OH⁻ → O2 + 2H2O + 4e⁻ (anode) — hydrogen and oxygen in a 2 : 1 volume ratio.</li>
              <li><b>Concentrated NaCl (brine)</b>: H2 at the cathode, Cl2 at the anode; NaOH remains in solution — the industrial chlor-alkali process.</li>
              <li><b>CuSO4 with copper electrodes</b>: the anode dissolves (Cu → Cu^2⁺ + 2e⁻) exactly as copper plates the cathode — the basis of <b>electrorefining and electroplating</b>.</li>
            </ul>
            <h3>Worked example, step by step</h3>
            <p><b>A current of 2 A passes through a solution for 10 minutes. Find the quantity of electricity.</b> Q = I t = 2 × (10 × 60) = <b>1200 C</b>. Since 1 mole of electrons carries 96,500 C (1 faraday), that is 1200/96500 ~= 0.0124 mol of electrons — enough to deposit 0.0062 mol of Cu from Cu^2⁺ (2 electrons per ion).</p>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Oxidation is electron loss (OIL) even when no oxygen appears anywhere.</li>
              <li>Cations go to the <b>cathode</b> — both start with C, and the cathode is negative in electrolysis.</li>
              <li>Convert minutes to seconds before Q = It.</li>
            </ul>
            <h3>See it around you</h3>
            <p>Aluminium from molten alumina, electroplated bolts and hubcaps, phone and inverter batteries, and sacrificial magnesium blocks protecting pipelines — redox is Nigeria's quiet industrial engine.</p>

          `,
          cards: [
            { q: 'Define oxidation and reduction in terms of (a) oxygen, (b) electrons, (c) oxidation number.', a: 'Oxidation: gain of oxygen, loss of electrons, or increase in oxidation number. Reduction: loss of oxygen, gain of electrons, or decrease in oxidation number.' },
            { q: 'What is the difference between an oxidising agent and a reducing agent?', a: 'An oxidising agent oxidises another substance and is itself reduced (gains electrons); a reducing agent reduces another substance and is itself oxidised (loses electrons).' },
            { q: 'Work out the oxidation number of sulphur in H2SO4.', a: 'Hydrogen is +1 (total +2), oxygen is -2 (total -8); the compound is neutral, so S = +6.' },
            { q: 'What is electrolysis?', a: 'The decomposition of an electrolyte (molten or in solution) by the passage of a direct electric current, discharging ions at the electrodes.' },
            { q: 'Name the electrodes and say which ions go to which.', a: 'Cathode: the negative electrode — cations (positive ions) migrate there and gain electrons. Anode: the positive electrode — anions migrate there and lose electrons.' },
            { q: 'State three factors that determine which ion is discharged.', a: 'The position of the ion in the electrochemical (discharge) series, the concentration of the electrolyte, and the nature of the electrode.' },
            { q: 'What are the products of electrolysing dilute tetraoxosulphate(VI) acid with platinum electrodes?', a: 'Hydrogen at the cathode and oxygen at the anode, in a 2:1 volume ratio — effectively the electrolysis of water.' },
            { q: 'Describe the electrolysis of molten sodium chloride.', a: 'Na+ ions are discharged at the cathode to give molten sodium metal; Cl- ions are discharged at the anode to give chlorine gas.' },
            { q: 'Give two industrial applications of electrolysis.', a: 'Electroplating (coating objects with a thin layer of a less reactive metal such as silver or chromium to resist corrosion and look attractive) and the electrolytic purification of copper; also extraction of reactive metals like aluminium.' },
            { q: 'State Faraday\'s first law of electrolysis with its formula.', a: 'The mass of substance discharged at an electrode is directly proportional to the quantity of electricity passed: m = ZIt, where Z is the electrochemical equivalent.' },
            { q: 'How does a galvanic (voltaic) cell differ from an electrolytic cell?', a: 'A galvanic cell converts chemical energy into electrical energy spontaneously (e.g. a simple cell of zinc and copper in acid); an electrolytic cell uses electrical energy to drive a non-spontaneous chemical change.' },
            { q: 'What does OIL RIG stand for?', a: 'Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons).' },
            { q: 'Oxidation number of Mn in KMnO4?', a: '+7, because K is +1 and the four oxygens total -8.' },
            { q: 'Where are cations discharged?', a: 'At the cathode, by reduction (gain of electrons). Anions go to the anode.' },
            { q: 'What happens during the electrolysis of molten sodium chloride?', a: 'Na⁺ ions migrate to the cathode and gain electrons: Na⁺ + e⁻ → Na (reduction). Cl⁻ ions migrate to the anode and lose electrons: 2Cl⁻ → Cl2 + 2e⁻ (oxidation). Products: sodium metal and chlorine gas.' }
          ],
          quiz: [
            { q: 'Oxidation is defined as...', options: ['loss of electrons (increase in oxidation number)', 'gain of electrons', 'loss of protons', 'gain of neutrons'], correct: 0,
              exp: 'OIL RIG: Oxidation Is Loss, Reduction Is Gain - of electrons.' },
            { q: 'Reduction is...', options: ['gain of electrons (decrease in oxidation number)', 'loss of electrons', 'gain of oxygen always', 'loss of neutrons'], correct: 0,
              exp: 'The reduced species gains electrons and its oxidation number falls.' },
            { q: 'An oxidising agent...', options: ['is itself reduced', 'is itself oxidised', 'donates electrons', 'never changes'], correct: 0,
              exp: 'It takes electrons from another substance - and in accepting them, it is reduced.' },
            { q: 'The oxidation number of oxygen in most compounds is...', options: ['-2', '+2', '-1', '0'], correct: 0,
              exp: 'Oxygen is -2 in almost all compounds (exceptions: peroxides -1, and OF2 where it is +2).' },
            { q: 'During electrolysis, oxidation takes place at the...', options: ['anode', 'cathode', 'salt bridge', 'voltmeter'], correct: 0,
              exp: 'AN OX and RED CAT: oxidation at the anode (positive), reduction at the cathode (negative).' },
            { q: 'Cations migrate to the...', options: ['cathode', 'anode', 'salt bridge', 'filter funnel'], correct: 0,
              exp: 'Positive ions are attracted to the negative electrode - the cathode - where they gain electrons.' },
            { q: 'Electrolysis of molten sodium chloride produces...', options: ['sodium at the cathode and chlorine at the anode', 'sodium at the anode', 'hydrogen and oxygen', 'sodium hydroxide only'], correct: 0,
              exp: 'Na⁺ ions are reduced to sodium metal at the cathode; Cl⁻ ions are oxidised to chlorine gas at the anode.' },
            { q: 'Electroplating is used to...', options: ['coat an object with a thin layer of another metal', 'melt metals together', 'make alloys by heating', 'separate crude oil'], correct: 0,
              exp: 'The object is made the cathode in a bath of the plating metal’s ions - protection plus appearance.' },
            { q: 'An electrolyte is...', options: ['a substance that conducts electricity when molten or in solution', 'any metal', 'an insulator', 'a covalent gas'], correct: 0,
              exp: 'It supplies the mobile ions that carry current during electrolysis.' },
            { q: 'The oxidation number of hydrogen in most compounds is...', options: ['+1', '-1', '0', '+2'], correct: 0,
              exp: 'Hydrogen is +1 except in metal hydrides (e.g. NaH) where it is -1.' }
          ],
        },
        {
          title: 'Rates of Reaction & Chemical Equilibrium',
          tags: ['Le Chatelier', 'Collision theory', 'Catalysts'],
          summary: 'Factors affecting rate, and how equilibrium shifts under stress.',
          content: `

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
          `,
          cards: [
            { q: 'Define rate of reaction and name two ways of measuring it.', a: 'Rate of reaction is the change in concentration of a reactant or product per unit time. It can be measured by the volume of gas evolved per second, loss in mass, or the time for a precipitate (turbidity) to appear.' },
            { q: 'State four factors that affect the rate of a reaction.', a: 'Concentration (pressure for gases), temperature, surface area of solid reactants, and catalysts; light also drives photochemical reactions such as photography and photosynthesis.' },
            { q: 'Explain, using collision theory, why higher temperature speeds up reactions.', a: 'Particles gain kinetic energy, move faster and collide more often, and a larger fraction of collisions has energy equal to or above the activation energy — so more effective collisions occur per second.' },
            { q: 'What is a catalyst?', a: 'A substance that increases the rate of a reaction without being consumed — it provides an alternative pathway with a lower activation energy, e.g. manganese(IV) oxide for hydrogen peroxide decomposition.' },
            { q: 'What is meant by dynamic equilibrium?', a: 'In a reversible reaction in a closed system, the state where the forward and backward reactions proceed at equal rates, so the concentrations of reactants and products stay constant (but the reactions have not stopped).' },
            { q: 'State Le Chatelier\'s principle.', a: 'If a system at equilibrium is disturbed (change of concentration, temperature or pressure), the equilibrium shifts in the direction that tends to counteract the change.' },
            { q: 'For the exothermic reaction N2 + 3H2 <-> 2NH3, what is the effect of raising the temperature?', a: 'The equilibrium shifts backwards (the endothermic direction) to absorb the extra heat, so the yield of ammonia falls — industry compromises at about 450 degC for a reasonable rate.' },
            { q: 'Why does high pressure favour ammonia formation in the Haber process?', a: 'There are 4 moles of gas on the left and only 2 on the right, so raising the pressure shifts the equilibrium to the side with fewer gas molecules — more ammonia.' },
            { q: 'Outline the conditions of the Haber process.', a: 'Nitrogen (from air) + hydrogen (from natural gas) at about 450 degC, 200 atmospheres, with an iron catalyst; the ammonia is liquefied out so the reaction keeps shifting forward.' },
            { q: 'What is activation energy?', a: 'The minimum energy that colliding particles must possess for a reaction to occur — the energy barrier between reactants and products.' },
            { q: 'Name a catalyst used in each of: the Contact process and the decomposition of H2O2.', a: 'Vanadium(V) oxide (V2O5) in the Contact process (making sulphuric acid); manganese(IV) oxide for hydrogen peroxide.' },
            { q: 'Why does powdered calcium carbonate react faster with acid than lumps?', a: 'The powder has a much greater surface area exposed to the acid, so more particles collide with acid per second — the reaction rate increases.' },
            { q: 'State Le Chatelier’s principle.', a: 'If a system at equilibrium is disturbed, the equilibrium shifts to counteract the change.' },
            { q: 'What factors affect the rate of reaction, according to collision theory?', a: 'Temperature (faster, more energetic collisions), concentration (more particles to collide), surface area (more exposed particles), and catalysts (lower activation energy). Each one increases the frequency of SUCCESSFUL collisions.' },
            { q: 'How does Le Chatelier’s principle predict the effect of pressure?', a: 'Raising the pressure shifts a gaseous equilibrium towards the side with FEWER gas molecules, reducing the pressure again. Lowering pressure favours the side with more molecules.' }
          ],
          quiz: [
            { q: 'According to collision theory, a reaction occurs when particles...', options: ['collide with sufficient energy (activation energy)', 'merely touch', 'are heated to boiling', 'are in the dark'], correct: 0,
              exp: 'Not every collision reacts - only those with energy at or above the activation energy succeed.' },
            { q: 'Increasing the temperature of a reaction usually...', options: ['increases the rate', 'decreases the rate', 'stops the reaction', 'has no effect'], correct: 0,
              exp: 'Particles move faster and collide more often with more energy - far more collisions clear the activation barrier.' },
            { q: 'Increasing the concentration of a reactant...', options: ['increases the rate of reaction', 'decreases the rate', 'changes only the colour', 'lowers the temperature'], correct: 0,
              exp: 'More particles per unit volume means more frequent successful collisions.' },
            { q: 'A catalyst speeds up a reaction by...', options: ['lowering the activation energy without being consumed', 'raising the temperature', 'being used up', 'removing reactants'], correct: 0,
              exp: 'It provides an easier route with a lower energy barrier and emerges chemically unchanged.' },
            { q: 'Using smaller particles (powder instead of lumps) increases the rate because...', options: ['the surface area is larger', 'the mass increases', 'the temperature rises', 'the particles are heavier'], correct: 0,
              exp: 'More surface is exposed, so more collisions per second are possible.' },
            { q: 'At chemical equilibrium, the rate of the forward reaction...', options: ['equals the rate of the reverse reaction', 'is zero', 'is much greater', 'fluctuates wildly'], correct: 0,
              exp: 'Both reactions continue, but at equal speeds, so concentrations stay constant.' },
            { q: 'Le Chatelier’s principle says a system at equilibrium responds to a change by...', options: ['shifting to counteract the change', 'ignoring it', 'shutting down', 'always shifting forward'], correct: 0,
              exp: 'Add heat, and it favours the endothermic direction; add a reactant, and it makes more product.' },
            { q: 'Increasing the pressure of a gaseous equilibrium favours...', options: ['the side with fewer gas molecules', 'the side with more molecules', 'neither side ever', 'the exothermic side only'], correct: 0,
              exp: 'The system reduces the pressure by shifting towards fewer gas particles.' },
            { q: 'Adding a catalyst to an equilibrium mixture...', options: ['does not shift the position of equilibrium', 'shifts it to the right', 'shifts it to the left', 'stops both reactions'], correct: 0,
              exp: 'It speeds up both directions equally - equilibrium is reached sooner, but in the same place.' },
            { q: 'Enzymes are...', options: ['biological catalysts', 'hormones', 'vitamins', 'acids only'], correct: 0,
              exp: 'Protein catalysts in living things - they make body chemistry fast enough for life at mild temperatures.' }
          ],
        },
        {
          title: 'The Mole Concept & Stoichiometry',
          tags: ['Avogadro', 'Molar mass', 'Gas volumes'],
          summary: 'The bridge between mass, particles and volume in chemical calculations.',
          content: `
            <div class="formula">Moles = mass / molar mass<br>
            Particles = moles × 6.02 × 10^23<br>
            Volume of a gas at s.t.p. = moles × 22.4 dm^3<br>
            Concentration (mol/dm^3) = moles / volume(dm^3)</div>
            <div class="worked"><b>Worked example:</b> How many moles are in 10 g of CaCO3? (Ca = 40, C = 12, O = 16)<br>
            Molar mass = 40 + 12 + 48 = 100 g/mol → moles = 10/100 = <b>0.1 mol</b>.</div>
            <div class="worked"><b>Titration example:</b> 25.0 cm^3 of 0.1 M NaOH is neutralised by 20.0 cm^3 of HCl.<br>
            Moles of NaOH = 0.1 × 0.025 = 0.0025 mol → same moles of HCl (1:1) → [HCl] = 0.0025/0.020 = <b>0.125 mol/dm^3</b>.</div>
            <div class="tip"><b>Exam tip:</b> Convert every volume to dm^3 (÷1000) before using molarity. Most lost marks in WAEC quantitative questions come from a cm^3/dm^3 slip.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> What volume does 8 g of oxygen gas occupy at s.t.p.? (O = 16, molar volume = 22.4 dm^3)<br>
            O2 has a molar mass of 32 g/mol, so 8 g = 0.25 mol and V = 0.25 × 22.4 = <b>5.6 dm^3</b>.</div>
            <div class="worked"><b>Q2.</b> Calculate the mass of calcium carbonate needed to produce 4.4 g of carbon(IV) oxide.<br>
            CaCO3 → CaO + CO2. Moles of CO2 = 4.4/44 = 0.1 mol, so 0.1 mol of CaCO3 is needed = 0.1 × 100 = <b>10 g</b>.</div>
            <div class="worked"><b>Q3.</b> How many atoms are in 0.2 mol of sodium?<br>
            0.2 × 6.02 × 10^23 = <b>1.204 × 10^23 atoms</b>.</div>
            <div class="worked"><b>Q4.</b> 25.0 cm^3 of 0.2 M sodium trioxocarbonate(IV) is neutralised by 20.0 cm^3 of hydrochloric acid. Find the acid concentration.<br>
            Na2CO3 + 2HCl → 2NaCl + H2O + CO2. Moles of Na2CO3 = 0.2 × 0.025 = 0.005 mol, so moles of HCl = 0.010 mol.<br>
            [HCl] = 0.010/0.020 = <b>0.5 mol/dm^3</b>.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Forgetting that oxygen and hydrogen exist as <b>diatomic</b> molecules, so their molar masses are 32 and 2, not 16 and 1.</li>
              <li>Using cm^3 where dm^3 is required in a molarity calculation.</li>
              <li>Ignoring the mole <b>ratio</b> from the balanced equation.</li>
              <li>Confusing relative molecular mass (no units) with molar mass (g/mol).</li>
            </ul>
            <h3>Deep dive: why chemists count by weighing</h3>
            <p>Atoms are far too small to count one by one, so chemistry uses a counting unit the way a trader uses a dozen — the <b>mole</b>. One mole of anything contains <b>6.02 × 10^23</b> particles (Avogadro's constant). One mole of carbon-12 has a mass of exactly 12 g, which gives us the master link: <b>the molar mass (M) of any substance, in g/mol, is numerically equal to its relative formula mass</b>. Water (H2O) has M = 18 g/mol, so 18 g of water = 1 mole = 6.02 × 10^23 molecules.</p>
            <div class="formula">n = m ÷ M &nbsp;&nbsp;(moles = mass in g ÷ molar mass)</div>
            <p>For <b>gases</b> there is a second bridge: at s.t.p. (0 °C, 760 mmHg) <b>one mole of ANY gas occupies 22.4 dm^3</b> (22,400 cm^3); at room temperature use 24 dm^3. For <b>solutions</b>, concentration in mol/dm^3 × volume in dm^3 = moles.</p>
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
              <text x="215" y="60" font-size="9" fill="#64748b">× 6.02×10^23</text>
              <text x="90" y="122" font-size="9" fill="#64748b">÷ 22.4 (s.t.p.)</text>
              <text x="208" y="122" font-size="9" fill="#64748b">÷ conc.</text>
              <defs><marker id="ar1" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0, 7 3.5, 0 7" fill="#4f46e5"/></marker></defs>
            </svg></div>
            <h3>Worked examples, step by step</h3>
            <p><b>(1) Find the mass of 0.25 mol of sodium trioxocarbonate(IV), Na2CO3.</b> M = (2×23) + 12 + (3×16) = 106 g/mol. Mass = n × M = 0.25 × 106 = <b>26.5 g</b>.</p>
            <p><b>(2) What volume does 8 g of oxygen gas occupy at s.t.p.?</b> Careful — oxygen is O2, M = 32. n = 8/32 = 0.25 mol. V = 0.25 × 22.4 = <b>5.6 dm^3</b>.</p>
            <p><b>(3) A compound has empirical formula CH2O and molar mass 180 g/mol. Find its molecular formula.</b> Empirical mass = 12 + 2 + 16 = 30. Factor = 180 ÷ 30 = 6. Molecular formula = C6H12O6 — glucose.</p>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Forgetting diatomic gases: O2, H2, N2, Cl2 — their molar masses are 32, 2, 28 and 71, not 16, 1, 14, 35.5.</li>
              <li>Mixing cm^3 with dm^3: 1 dm^3 = 1000 cm^3; convert before using 22.4 dm^3.</li>
              <li>Using the atomic mass of one atom instead of the formula mass of the whole compound.</li>
            </ul>
            <h3>See it around you</h3>
            <p>A 50 kg bag of cement, a sachet of water, a loaf of sugar — shops sell mass, but reactions happen particle-to-particle. The mole is the exchange rate between the mass you can weigh in the lab and the particles that actually react.</p>

          `,
          cards: [
            { q: 'Define the mole and state Avogadro\'s constant.', a: 'The mole is the amount of substance containing 6.02 x 10^23 particles (atoms, molecules or ions); that number is Avogadro\'s constant.' },
            { q: 'What is molar mass? Calculate the molar mass of H2SO4 (H=1, S=32, O=16).', a: 'Molar mass is the mass of one mole of a substance in grams. H2SO4 = 2(1) + 32 + 4(16) = 98 g/mol.' },
            { q: 'Write the three key mole formulas.', a: 'n = mass / molar mass; n = concentration x volume (mol/dm3 x dm3); and for gases at s.t.p., n = volume / 22.4 dm3.' },
            { q: 'How many moles are in 5.85 g of NaCl (Na=23, Cl=35.5)?', a: 'Molar mass = 23 + 35.5 = 58.5 g/mol, so n = 5.85 / 58.5 = 0.1 mole — containing 0.1 x 6.02 x 10^23 = 6.02 x 10^22 formula units.' },
            { q: 'What volume does 0.25 mole of oxygen occupy at s.t.p.?', a: 'V = n x 22.4 dm3 = 0.25 x 22.4 = 5.6 dm3 (5600 cm3).' },
            { q: 'Using CaCO3 -> CaO + CO2, find the mass of CO2 from 25 g of CaCO3 (Ca=40, C=12, O=16).', a: 'Molar masses: CaCO3 = 100, CO2 = 44. From 100 g CaCO3 you get 44 g CO2, so 25 g gives 25/100 x 44 = 11 g of carbon dioxide.' },
            { q: 'Distinguish between empirical and molecular formula.', a: 'The empirical formula is the simplest whole-number ratio of atoms (CH2O for glucose); the molecular formula is the actual number (C6H12O6) — molecular = (empirical)n.' },
            { q: 'State Avogadro\'s law.', a: 'Equal volumes of all gases, at the same temperature and pressure, contain the same number of molecules.' },
            { q: 'What is molar concentration, and what does the dilution formula say?', a: 'Molar concentration is moles of solute per dm3 of solution (mol/dm3). On dilution, moles stay constant: C1V1 = C2V2.' },
            { q: 'Calculate the percentage by mass of nitrogen in urea, CO(NH2)2 (C=12, O=16, N=14, H=1).', a: 'Molar mass = 12 + 16 + 2(14) + 4(1) = 60. Nitrogen contributes 28, so % N = 28/60 x 100 = 46.7%.' },
            { q: 'What is a limiting reactant?', a: 'The reactant that is completely used up first — it fixes the maximum amount of product formed, while the other reactant remains in excess.' },
            { q: 'State Gay-Lussac\'s law of combining volumes with an example.', a: 'Gases react in simple whole-number ratios by volume (same T and P): in 2H2 + O2 -> 2H2O, 2 volumes of hydrogen react with 1 volume of oxygen to give 2 volumes of steam.' },
            { q: 'Molar volume of a gas at s.t.p.?', a: '22.4 dm^3 (litres) per mole — one mole of ANY gas occupies 22.4 dm^3 at standard temperature and pressure, so volume = moles × 22.4.' },
            { q: 'Define the mole and Avogadro’s constant.', a: 'The mole is the amount of substance containing 6.02 x 10^23 (Avogadro’s constant) particles - atoms, molecules or ions. One mole of any substance has a mass in grams equal to its relative formula mass.' },
            { q: 'How do you use mole ratios from balanced equations?', a: 'Balance the equation first; its coefficients give the reacting ratio. Convert masses to moles (n = m/M), apply the ratio to find moles of the wanted substance, then convert back to mass or volume.' }
          ],
          quiz: [
            { q: 'One mole of any substance contains...', options: ['6.02 x 10^23 particles', '6.02 x 10^22 particles', '22.4 particles', '1000 particles'], correct: 0,
              exp: 'Avogadro’s constant: 6.02 x 10^23 atoms, molecules or ions per mole.' },
            { q: 'The molar mass of water, H2O, is...', options: ['18 g/mol', '16 g/mol', '20 g/mol', '34 g/mol'], correct: 0,
              exp: '(2 x 1) + 16 = 18 g/mol.' },
            { q: 'The number of moles is calculated as...', options: ['mass / molar mass', 'mass x molar mass', 'molar mass / mass', 'mass + molar mass'], correct: 0,
              exp: 'n = m/M - for example 36 g of water is 36/18 = 2 moles.' },
            { q: 'What is the mass of 2 moles of carbon dioxide? (C = 12, O = 16)', options: ['88 g', '44 g', '22 g', '176 g'], correct: 0,
              exp: 'Molar mass of CO2 = 12 + 32 = 44 g/mol, so 2 moles = 88 g.' },
            { q: 'One mole of any gas at s.t.p. occupies...', options: ['22.4 dm^3', '11.2 dm^3', '24.0 dm^3', '1 dm^3'], correct: 0,
              exp: 'The molar volume at standard temperature and pressure is 22.4 dm^3 (litres).' },
            { q: 'Avogadro’s constant is...', options: ['6.02 x 10^23', '6.63 x 10⁻^34', '3.0 x 10^8', '9.1 x 10⁻^31'], correct: 0,
              exp: 'The number of particles in one mole - the bridge between counting atoms and weighing grams.' },
            { q: 'In stoichiometry, the mole ratio of reactants comes from...', options: ['the coefficients of the balanced equation', 'the atomic masses', 'the periodic table groups', 'the density'], correct: 0,
              exp: 'Coefficients give the reacting ratio: in N2 + 3H2 → 2NH3, one mole of nitrogen reacts with three of hydrogen.' },
            { q: 'What is the number of moles in 4 g of hydrogen gas, H2? (H = 1)', options: ['2', '4', '0.5', '1'], correct: 0,
              exp: 'Molar mass of H2 = 2 g/mol, so 4 g / 2 = 2 moles. Note hydrogen gas is H2, not H.' },
            { q: 'From N2 + 3H2 → 2NH3, how many moles of ammonia does 1 mole of nitrogen give?', options: ['2', '1', '3', '4'], correct: 0,
              exp: 'The coefficients read 1 : 3 : 2 - one mole of nitrogen yields two moles of ammonia.' },
            { q: 'Concentration in mol/dm^3 is calculated as...', options: ['moles / volume in dm^3', 'volume / moles', 'mass / volume always', 'moles x volume'], correct: 0,
              exp: 'c = n/V, with V in dm^3 (1 dm^3 = 1000 cm^3).' }
          ],
        },
        {
          title: 'Metals, Their Extraction & Their Compounds',
          tags: ['Reactivity series', 'Blast furnace', 'Aluminium', 'Alloys'],
          summary: 'How the position of a metal in the reactivity series decides how it is extracted and used.',
          content: `
            <h3>1. The reactivity series</h3>
            <div class="formula">K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Pb &gt; (H) &gt; Cu &gt; Hg &gt; Ag &gt; Au</div>
            <p>Going down the series, metals become less reactive, lose electrons less readily, and their compounds become easier to reduce.</p>
            <h3>2. Extraction follows reactivity</h3>
            <table>
              <tr><th>Metal</th><th>Method</th><th>Reason</th></tr>
              <tr><td>K, Na, Ca, Mg, Al</td><td>Electrolysis of the molten compound</td><td>Too reactive for chemical reduction</td></tr>
              <tr><td>Zn, Fe, Pb</td><td>Reduction with coke/carbon monoxide</td><td>Moderately reactive</td></tr>
              <tr><td>Cu, Hg, Ag</td><td>Roasting the ore in air</td><td>Weakly reactive</td></tr>
              <tr><td>Au, Pt</td><td>Found native</td><td>Unreactive</td></tr>
            </table>
            <h3>3. Extraction of iron (blast furnace)</h3>
            <p>The charge is <b>haematite (Fe2O3), coke and limestone</b>. Hot air blasted in at the bottom burns the coke:</p>
            <div class="formula">C + O2 → CO2  (exothermic, provides the heat)<br>
            CO2 + C → 2CO  (the reducing agent)<br>
            Fe2O3 + 3CO → 2Fe + 3CO2<br>
            CaCO3 → CaO + CO2 ;  CaO + SiO2 → CaSiO3 (slag)</div>
            <p>Molten iron collects at the bottom; the lighter <b>slag</b> floats on it and protects the iron from re-oxidation. The product is <b>pig iron</b>, about 96% iron with carbon impurities, which is refined into steel.</p>
            <h3>4. Extraction of aluminium (Hall–Héroult)</h3>
            <p>Bauxite is purified to alumina (Al2O3), dissolved in molten <b>cryolite</b> to lower the melting point from about 2050 °C to about 900 °C, and electrolysed using carbon electrodes. Aluminium forms at the cathode; oxygen at the anode gradually burns the carbon away, so the anodes are replaced regularly.</p>
            <h3>5. Alloys</h3>
            <table>
              <tr><th>Alloy</th><th>Composition</th><th>Use</th></tr>
              <tr><td>Steel</td><td>Iron + carbon</td><td>Construction</td></tr>
              <tr><td>Stainless steel</td><td>Iron + chromium + nickel</td><td>Cutlery</td></tr>
              <tr><td>Brass</td><td>Copper + zinc</td><td>Fittings</td></tr>
              <tr><td>Bronze</td><td>Copper + tin</td><td>Statues, bearings</td></tr>
              <tr><td>Duralumin</td><td>Aluminium + copper + magnesium</td><td>Aircraft</td></tr>
            </table>
            <h3>6. Rusting and its prevention</h3>
            <p>Iron rusts only when <b>both air and water</b> are present. Prevention: painting, greasing, galvanising (coating with zinc), electroplating, or using stainless steel. Galvanising works even if scratched, because zinc is <b>more reactive</b> than iron and corrodes in its place — this is called sacrificial protection.</p>
            <div class="tip"><b>Exam tip:</b> a metal can displace any metal <b>below</b> it from a solution of its salt. Zinc displaces copper from copper(II) tetraoxosulphate(VI), but copper cannot displace zinc.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Predict whether zinc will displace copper from copper(II) tetraoxosulphate(VI) solution, and write the equation.<br>
            Zinc is above copper in the reactivity series, so it will: <b>Zn + CuSO4 → ZnSO4 + Cu</b>. The blue solution fades and brown copper is deposited.</div>
            <div class="worked"><b>Q2.</b> Why is cryolite used in the extraction of aluminium?<br>
            It dissolves alumina and lowers the melting point from about 2050 °C to about 900 °C, which saves a great deal of energy.</div>
            <div class="worked"><b>Q3.</b> A galvanised iron roof does not rust even when scratched. Explain why.<br>
            Zinc is <b>more reactive</b> than iron, so it loses electrons in preference to the iron and corrodes in its place — sacrificial protection.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying iron rusts in dry air or in water alone — it needs <b>both</b> oxygen and water.</li>
              <li>Confusing the roles in the blast furnace: coke provides the heat and the reducing agent; <b>limestone</b> removes the sandy impurity as slag.</li>
              <li>Assuming all metals are extracted by reduction with carbon — the reactive ones need <b>electrolysis</b>.</li>
              <li>Thinking an alloy is a compound. It is a <b>mixture</b>.</li>
            </ul>
            <h3>Deep dive: extraction matches reactivity</h3>
            <p>The reactivity series (K Na Ca Mg Al Zn Fe Pb H Cu Hg Ag Au) dictates the extraction method: <b>K–Al</b> are too eager to give up electrons chemically, so they are extracted by <b>electrolysis</b> of their molten compounds (aluminium from alumina dissolved in molten cryolite; sodium from molten NaCl). <b>Zn–Pb</b> are reduced by heating their oxides with carbon or carbon(II) oxide. <b>Cu and below</b> need only roasting or simple heating. Iron is the classic: the <b>blast furnace</b> charges haematite (Fe2O3), coke and limestone — coke burns to give CO, which reduces the ore (Fe2O3 + 3CO → 2Fe + 3CO2), while limestone removes sandy impurity as slag (CaSiO3).</p>
            <h3>Alloys and corrosion</h3>
            <ul>
              <li><b>Steel</b> (Fe + C) for construction; <b>stainless steel</b> (Fe + Cr + Ni) resists rust; <b>brass</b> (Cu + Zn); <b>bronze</b> (Cu + Sn); <b>duralumin</b> (Al + Cu + Mg) for aircraft.</li>
              <li>Rusting needs <b>both air and water</b> — prove it with the three-test-tube experiment (dry air only / water only / both: only "both" rusts).</li>
              <li>Prevention: paint, grease, plastic coating, <b>galvanising</b> (zinc coat — sacrificial, because Zn is more reactive than Fe), tin plating (barrier only), and sacrificial magnesium blocks on ship hulls and underground pipes.</li>
            </ul>
            <h3>Worked example, step by step</h3>
            <p><b>What mass of iron is obtained from 16 g of haematite, Fe2O3? (Fe = 56, O = 16)</b></p>
            <ol>
              <li>M(Fe2O3) = 112 + 48 = 160 g/mol → n = 16/160 = 0.1 mol.</li>
              <li>Fe2O3 → 2Fe, so moles of Fe = 0.2 mol.</li>
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

          `,
          cards: [
            { q: 'State four physical properties typical of metals.', a: 'They are lustrous (shiny), malleable (beaten into sheets), ductile (drawn into wires) and good conductors of heat and electricity, with generally high melting points.' },
            { q: 'Arrange these metals in order of decreasing reactivity: copper, potassium, zinc, gold, calcium.', a: 'Potassium > calcium > zinc > copper > gold — reactivity falls down the electrochemical series.' },
            { q: 'What does a metal\'s position in the reactivity series decide?', a: 'Its method of extraction and how it reacts: very reactive metals (K to Al) are extracted by electrolysis; moderately reactive ones (Zn to Pb) by reduction of their oxides with carbon or carbon(II) oxide; the least reactive (Cu and below) by simple heating/roasting.' },
            { q: 'Describe how iron is extracted in the blast furnace.', a: 'Iron ore (haematite, Fe2O3), coke and limestone are fed in at the top; coke burns to give heat and CO, which reduces the ore: Fe2O3 + 3CO -> 2Fe + 3CO2; limestone removes impurities as slag, and molten iron collects at the bottom.' },
            { q: 'What is an alloy? Give two examples with their uses.', a: 'An alloy is a mixture of a metal with other metals or non-metals: brass (copper + zinc) for fittings, bronze (copper + tin) for medals, steel (iron + carbon) for construction, duralumin (aluminium-based) for aircraft.' },
            { q: 'What is an amphoteric oxide? Give two examples.', a: 'An oxide that reacts with both acids and bases to form salt and water — aluminium oxide (Al2O3) and zinc oxide (ZnO).' },
            { q: 'Why is sodium stored under paraffin oil?', a: 'Sodium is so reactive that it tarnishes in air and reacts violently with moisture, giving NaOH and hydrogen; kerosene/paraffin keeps air and water away.' },
            { q: 'Why is aluminium widely used for aircraft bodies and cooking pots?', a: 'It has a low density (light), resists corrosion because of its protective oxide film, and duralumin (an aluminium alloy) is strong; it also conducts heat well for pots.' },
            { q: 'How does galvanising protect iron from rusting?', a: 'The zinc coating keeps air and water off the iron, and even if scratched, zinc (being more reactive) corrodes preferentially — sacrificial protection.' },
            { q: 'Explain why most metal oxides are basic while non-metal oxides are acidic.', a: 'Metal oxides react with acids to form salt and water (some dissolve to give alkalis, e.g. Na2O); non-metal oxides such as CO2 and SO2 dissolve in water to give acids (carbonic and trioxosulphate(IV) acids).' },
            { q: 'State three uses of copper and the property behind each.', a: 'Electrical wiring (excellent conductor and ductile), cooking pots (good heat conductor), and plumbing/roofing (resists corrosion); it is also alloyed as brass and bronze.' },
            { q: 'Why is tin used to line food cans, and what is the risk if the coating is scratched?', a: 'Tin resists corrosion and is non-poisonous, so it protects the steel and the food; but tin is less reactive than iron, so a scratch lets the exposed iron rust faster — unlike galvanising, where zinc sacrifices itself.' },
            { q: 'How does the method of extracting a metal depend on its reactivity?', a: 'Metals above carbon (K, Na, Ca, Mg, Al): electrolysis of the molten compound. Metals below carbon (Zn, Fe, Sn, Pb): reduction of the oxide with coke. Unreactive metals (Cu, Ag, Au): found native or extracted by simple heating.' },
            { q: 'Name the raw materials of the blast furnace and the role of each.', a: 'Iron ore (haematite - the source of iron), coke (fuel for heat and the reducing agent, producing CO), and limestone (reacts with sandy impurities to form slag, which floats and is removed).' },
            { q: 'What is rusting, and how is it prevented?', a: 'Rusting is the corrosion of iron into hydrated iron(III) oxide, needing both oxygen and water. Prevention: barrier methods (painting, greasing, plastic coating), galvanising (zinc coating), sacrificial protection, and alloying to make stainless steel.' }
          ],
          quiz: [
            { q: 'Which of these metals is the most reactive?', options: ['potassium', 'zinc', 'copper', 'silver'], correct: 0,
              exp: 'The reactivity series runs K, Na, Ca, Mg, Al, Zn, Fe, ... Cu, Ag, Au - potassium tops this list.' },
            { q: 'Highly reactive metals such as sodium and aluminium are extracted by...', options: ['electrolysis of their molten compounds', 'reduction with carbon', 'simple heating', 'dissolving in water'], correct: 0,
              exp: 'They hold their compounds too tightly for carbon to reduce - only electrolysis has the pulling power.' },
            { q: 'Metals below carbon in the reactivity series, like iron, are extracted by...', options: ['reduction with coke (carbon)', 'electrolysis', 'filtration', 'distillation'], correct: 0,
              exp: 'Carbon is more reactive than iron, so it strips the oxygen away in the blast furnace.' },
            { q: 'Iron is extracted industrially in the...', options: ['blast furnace', 'electrolytic cell', 'fractionating column', 'kiln only'], correct: 0,
              exp: 'The blast furnace reduces iron oxide with coke at around 1500°C, yielding pig iron.' },
            { q: 'The raw materials charged into a blast furnace are...', options: ['iron ore, coke and limestone', 'iron, coal and sand', 'bauxite and cryolite', 'salt, water and air'], correct: 0,
              exp: 'Ore (haematite) supplies the iron, coke the heat and reducing power, limestone the slag-former.' },
            { q: 'Aluminium is extracted from bauxite by electrolysis in the...', options: ['Hall-Héroult process', 'blast furnace', 'Contact process', 'Haber process'], correct: 0,
              exp: 'Aluminium is too reactive for carbon reduction, so molten alumina is electrolysed.' },
            { q: 'Cryolite is added during aluminium extraction to...', options: ['lower the melting point of the mixture', 'increase the melting point', 'act as the anode', 'colour the metal'], correct: 0,
              exp: 'Pure alumina melts above 2000°C; dissolved in cryolite it electrolyses around 900°C - a huge energy saving.' },
            { q: 'Brass is an alloy of...', options: ['copper and zinc', 'copper and tin', 'iron and carbon', 'lead and tin'], correct: 0,
              exp: 'Copper + zinc = brass. (Copper + tin = bronze - a favourite exam pair.)' },
            { q: 'Rusting of iron requires...', options: ['both oxygen and water', 'oxygen only', 'water only', 'carbon dioxide'], correct: 0,
              exp: 'Iron rusts only when air AND moisture are present - exclude either and rusting stops.' },
            { q: 'Galvanising protects iron by coating it with...', options: ['zinc', 'tin', 'copper', 'paint always'], correct: 0,
              exp: 'The zinc corrodes preferentially, sacrificing itself even if the coating is scratched.' }
          ],
        }
      ],
    },
    mock: [
      { q: 'In the reaction Zn + Cu^2⁺ → Zn^2⁺ + Cu, zinc is:',
        options: ['Reduced', 'Oxidised', 'A catalyst', 'Unchanged'], correct: 1,
        exp: 'Zinc loses two electrons (oxidation number 0 → +2), so it is oxidised. Cu^2⁺ gains those electrons and is reduced.' },
      { q: 'The oxidation number of sulphur in H2SO4 is:', options: ['+2', '+4', '+6', '-2'], correct: 2,
        exp: 'H2 = +2, O4 = -8; the compound is neutral so S = +6.' },
      { q: 'During electrolysis, reduction occurs at the:', options: ['Anode', 'Cathode', 'Salt bridge', 'Electrolyte'], correct: 1,
        exp: 'Cations migrate to the cathode and gain electrons — reduction. Oxidation happens at the anode.' },
      { q: 'How many moles are in 10 g of CaCO3? (Ca=40, C=12, O=16)', options: ['0.1', '1.0', '0.01', '10'], correct: 0,
        exp: 'Molar mass = 40 + 12 + (3×16) = 100 g/mol. Moles = 10/100 = 0.1 mol.' },
      { q: 'Which gas is produced at the cathode during the electrolysis of dilute tetraoxosulphate(VI) acid?',
        options: ['Oxygen', 'Hydrogen', 'Sulphur dioxide', 'Chlorine'], correct: 1,
        exp: 'H⁺ ions are discharged at the cathode to give hydrogen gas; oxygen is produced at the anode.' },
      { q: 'Increasing pressure on N2 + 3H2 ⇌ 2NH3 will:', options: ['Decrease the yield of NH3', 'Increase the yield of NH3', 'Have no effect', 'Stop the reaction'], correct: 1,
        exp: 'Higher pressure favours the side with fewer gas molecules — 2 mol of NH3 against 4 mol of reactants.' },
      { q: 'Which reagent distinguishes an alkene from an alkane?', options: ['Litmus paper', 'Bromine water', 'Sodium hydroxide', 'Water'], correct: 1,
        exp: 'Bromine water is decolourised by alkenes because of addition across the C=C double bond; alkanes do not react.' },
      { q: 'A catalyst increases the rate of reaction by:', options: ['Raising the temperature', 'Lowering the activation energy', 'Increasing the concentration', 'Changing the yield'], correct: 1,
        exp: 'It provides an alternative pathway with lower activation energy. It does not alter the equilibrium yield.' }
    ],
    resources: [
      { cat: 'Video lesson', title: 'WAEC Chemistry — redox reactions & oxidation numbers', url: 'https://www.youtube.com/results?search_query=redox+reactions+waec+chemistry+nigeria', note: 'Balancing redox equations step by step.' },
      { cat: 'Structured course', title: 'Khan Academy — Chemistry', url: 'https://www.khanacademy.org/science/chemistry', note: 'Stoichiometry, equilibrium and electrochemistry units.' },
      { cat: 'Past questions', title: 'Myschool — Chemistry past questions', url: 'https://myschool.ng/classroom', note: 'WASSCE and UTME objective + theory practice.' },
      { cat: 'Reference', title: 'Wikipedia — Redox', url: 'https://en.wikipedia.org/wiki/Redox', note: 'Oxidation states, half-equations and examples.' },
      { cat: 'Simulation', title: 'PhET — Molarity & balancing equations', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=chemistry', note: 'Visualise moles, concentration and reaction rates.' }
    ]
  
};
