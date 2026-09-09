"""Author 10-question quizzes + flashcards for SS Chemistry (10) and SS Biology (10)."""
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

# ================== CHEMISTRY SS1 ==================
fill('Chemistry', 'Atomic Structure & the Periodic Table', quiz=[
 ('The charges of a proton, electron and neutron are...', ['+1, -1, 0', '+1, 0, -1', '0, -1, +1', '-1, +1, 0'], 0,
  'Protons are positive, electrons negative, neutrons neutral - the balance of protons and electrons makes atoms neutral.'),
 ('The atomic number of an element is its number of...', ['protons', 'neutrons', 'electrons plus neutrons', 'nucleons'], 0,
  'Atomic number = proton number - it fixes the identity of the element.'),
 ('The mass number of an atom equals...', ['protons + neutrons', 'protons + electrons', 'neutrons + electrons', 'protons only'], 0,
  'Mass number counts the nucleons in the nucleus; electron mass is negligible.'),
 ('The electron configuration of sodium (atomic number 11) is...', ['2, 8, 1', '2, 8, 2', '2, 9', '8, 2, 1'], 0,
  'Shells fill 2, then 8: sodium is 2,8,1 - that single outer electron makes it a reactive group I metal.'),
 ('Elements in the same GROUP of the periodic table have...', ['the same number of valence electrons', 'the same number of shells', 'the same mass number', 'the same number of neutrons'], 0,
  'Shared valence electrons give a group its similar chemistry - all group I metals have one outer electron.'),
 ('Chlorine-35 and chlorine-37 are isotopes because they have...', ['17 protons each but different neutron numbers', 'different proton numbers', 'the same neutron numbers', 'no neutrons'], 0,
  'Both have 17 protons (same element) but 18 and 20 neutrons - different mass numbers.'),
 ('Noble gases are unreactive because...', ['their outer electron shells are full', 'they are gases', 'they have no electrons', 'they are metals'], 0,
  'A complete outer shell is the stable arrangement other atoms chase - noble gases already have it.'),
 ('In the periodic table, metals are found...', ['on the left and centre', 'on the right only', 'at the bottom only', 'scattered randomly'], 0,
  'Metals occupy the left and middle; non-metals sit on the right, with noble gases in group 0/VIII.'),
 ('A neutral atom always has...', ['equal numbers of protons and electrons', 'more electrons than protons', 'more protons than electrons', 'no neutrons'], 0,
  'Equal positive and negative charges cancel - that is what neutral means.'),
 ('An element with electron configuration 2, 8, 7 belongs to group...', ['VII (the halogens)', 'I', 'II', '0'], 0,
  'Seven valence electrons place it in group VII - the halogen family, one electron short of a full shell.'),
], cards=[
 ('Describe the three sub-atomic particles.',
  'Protons: charge +1, mass 1, in the nucleus. Neutrons: charge 0, mass 1, in the nucleus. Electrons: charge -1, negligible mass, in shells around the nucleus.'),
 ('What is the difference between a group and a period?',
  'A group is a vertical column - elements share the same number of valence electrons and so behave similarly. A period is a horizontal row - elements share the same number of electron shells.'),
])

fill('Chemistry', 'Chemical Bonding', quiz=[
 ('An electrovalent (ionic) bond forms by...', ['the transfer of electrons from a metal to a non-metal', 'the sharing of electrons', 'one atom donating a lone pair', 'the pooling of all electrons'], 0,
  'The metal loses electrons to become a cation; the non-metal gains them to become an anion - opposite charges attract.'),
 ('A covalent bond forms by...', ['the sharing of electron pairs between non-metals', 'electron transfer', 'attraction of free electrons', 'nuclear fusion'], 0,
  'Each atom contributes electrons to a shared pair, so both approach full outer shells.'),
 ('In a coordinate (dative) bond, the shared pair of electrons comes from...', ['one atom only', 'both atoms equally', 'the solvent', 'free electrons'], 0,
  'One partner donates both electrons - the arrow in diagrams points from donor to acceptor, as in NH\u2084\u207a.'),
 ('Sodium chloride is held together by...', ['ionic (electrovalent) bonds', 'covalent bonds', 'dative bonds', 'metallic bonds only'], 0,
  'Na transfers an electron to Cl, forming Na\u207a and Cl\u207b ions locked in a giant lattice.'),
 ('Ionic compounds conduct electricity when...', ['molten or dissolved in water', 'solid only', 'never', 'frozen'], 0,
  'Conduction needs mobile ions - in a solid the ions are locked in place, but melting or dissolving frees them.'),
 ('Covalent compounds generally have...', ['low melting and boiling points', 'very high melting points', 'ionic lattices', 'metallic lustre'], 0,
  'Only weak forces hold the separate molecules together, so little energy is needed to separate them.'),
 ('Which species contains a coordinate (dative) bond?', ['NH\u2084\u207a (ammonium ion)', 'NaCl', 'Cl\u2082', 'MgO'], 0,
  'NH\u2083 donates its lone pair to H\u207a, forming the fourth N-H bond - a classic dative bond.'),
 ('Most ionic compounds are...', ['soluble in water', 'insoluble in water', 'gases at room temperature', 'poor conductors when dissolved'], 0,
  'Water pulls the ions out of the lattice; the resulting solution conducts electricity.'),
 ('Atoms form bonds in order to...', ['attain a stable noble-gas electron arrangement', 'increase their mass', 'become radioactive', 'lose all electrons'], 0,
  'Full outer shells are the stable arrangement - bonding is how atoms get there, by transfer or sharing.'),
 ('Diamond and graphite are examples of...', ['giant covalent structures', 'ionic lattices', 'simple molecules', 'metallic crystals'], 0,
  'Millions of carbon atoms share electrons in a giant network - which is why both melt only at extreme temperatures.'),
], cards=[
 ('Compare ionic and covalent bonding.',
  'Ionic: electrons TRANSFERRED from metal to non-metal, forming oppositely charged ions (NaCl); high melting points, conduct when molten/dissolved. Covalent: electrons SHARED between non-metals (H\u2082O, Cl\u2082); usually low melting points, poor conductors.'),
 ('What is a coordinate (dative) covalent bond?',
  'A covalent bond in which one atom supplies BOTH shared electrons - its lone pair is donated to an acceptor. Example: NH\u2083 + H\u207a \u2192 NH\u2084\u207a.'),
 ('Why do ionic compounds conduct when molten or dissolved but not when solid?',
  'Conduction requires free-moving charged particles. In a solid the ions are locked in a rigid lattice; melting or dissolving releases them to carry current.'),
])

fill('Chemistry', 'Separation Techniques & States of Matter', quiz=[
 ('The best method to separate sand from water is...', ['filtration', 'distillation', 'chromatography', 'evaporation of the sand'], 0,
  'The insoluble sand stays on the filter paper while the water passes through as filtrate.'),
 ('To obtain solid salt from salt solution, use...', ['evaporation (or crystallisation)', 'filtration', 'magnetism', 'decantation'], 0,
  'The water evaporates away, leaving the dissolved salt behind as crystals.'),
 ('Two miscible liquids with close boiling points are separated by...', ['fractional distillation', 'simple filtration', 'separating funnel', 'magnetism'], 0,
  'The fractionating column gives repeated evaporation-condensation cycles, sharpening the separation.'),
 ('Crude oil is separated into fractions by...', ['fractional distillation', 'filtration', 'chromatography', 'sublimation'], 0,
  'The huge column separates hydrocarbons by boiling point - gases at the top, bitumen at the bottom.'),
 ('Chromatography is used to separate...', ['dyes and pigments', 'sand and stones', 'iron filings and sulphur', 'salt and water'], 0,
  'Components travel at different speeds on the paper, revealing each colour or substance separately.'),
 ('Sublimation is the change of state from...', ['solid directly to gas', 'gas to liquid', 'liquid to solid', 'solid to liquid then gas'], 0,
  'Iodine, camphor and ammonium chloride sublime - they skip the liquid stage when heated.'),
 ('According to kinetic theory, particles in a solid...', ['vibrate about fixed positions', 'move freely and rapidly', 'do not move at all', 'flow like a liquid'], 0,
  'Strong forces hold solid particles in place; they only vibrate - which is why solids keep their shape.'),
 ('Diffusion occurs fastest in...', ['gases', 'liquids', 'solids', 'it is equal everywhere'], 0,
  'Gas particles are far apart and move fastest, so they spread and mix most quickly.'),
 ('Simple distillation is used to...', ['obtain a pure liquid from a solution', 'separate two solids', 'separate immiscible liquids', 'sort particles by size'], 0,
  'The liquid boils off, condenses in the condenser and is collected - the solute stays behind.'),
 ('A separating funnel separates...', ['two immiscible liquids such as oil and water', 'two miscible liquids', 'a solid from a liquid', 'gases from air'], 0,
  'The denser liquid settles below and is run out through the tap - no heating needed.'),
], cards=[
 ('Match the separation technique to the mixture.',
  'Insoluble solid + liquid: filtration. Soluble solid + liquid: evaporation/crystallisation. Miscible liquids: fractional distillation. Immiscible liquids: separating funnel. Dyes: chromatography. Subliming solid: sublimation. Magnetic solid: magnet.'),
 ('How does simple distillation differ from fractional distillation?',
  'Simple distillation separates ONE liquid from a solution (or liquids with very different boiling points). Fractional distillation, with its fractionating column, separates miscible liquids with CLOSE boiling points, like the fractions of crude oil.'),
 ('State the kinetic theory of matter.',
  'All matter is made of particles in constant motion. In solids they vibrate in fixed positions; in liquids they slide past one another; in gases they move rapidly and freely. Heating increases their motion - melting and boiling occur when they break free.'),
])

# ================== CHEMISTRY SS2 ==================
fill('Chemistry', 'Acids, Bases & Salts (with pH)', quiz=[
 ('An acid turns blue litmus paper...', ['red', 'blue', 'green', 'colourless'], 0,
  'Acids turn blue litmus red; bases turn red litmus blue - the classic first test.'),
 ('A solution with pH 7 is...', ['neutral', 'strongly acidic', 'weakly basic', 'strongly basic'], 0,
  'The pH scale runs 0-14: below 7 acidic, exactly 7 neutral (pure water), above 7 basic.'),
 ('An acid reacts with a base to form...', ['a salt and water only', 'hydrogen gas', 'carbon dioxide always', 'an oxide only'], 0,
  'Neutralisation: acid + base \u2192 salt + water. This is the defining acid-base reaction.'),
 ('The pH of dilute hydrochloric acid is approximately...', ['1', '7', '10', '14'], 0,
  'A strong acid sits near the bottom of the pH scale - pH 1 or 2 when concentrated-ish.'),
 ('An alkali is best defined as...', ['a soluble base', 'any acid', 'an insoluble salt', 'a neutral oxide'], 0,
  'All alkalis are bases, but only the soluble ones (like NaOH) are called alkalis.'),
 ('A strongly basic solution has a pH of about...', ['13', '7', '5', '1'], 0,
  'Strong bases sit near the top of the scale - pH 13 or 14.'),
 ('Universal indicator turns ___ in a strong acid.', ['red', 'blue', 'green', 'purple'], 0,
  'Red-orange for strong acids, green for neutral, blue-purple for strong bases - a colour for every pH.'),
 ('Salts are commonly prepared by...', ['neutralising an acid with a base or suitable metal compound', 'burning metals in air only', 'freezing acids', 'distilling water'], 0,
  'Titration, excess-metal or precipitation methods all build a salt from an acid.'),
 ('Which of these is a normal salt?', ['sodium chloride, NaCl', 'sodium hydrogen sulphate, NaHSO\u2084', 'basic copper carbonate', 'dilute hydrochloric acid'], 0,
  'A normal salt has ALL the replaceable hydrogen of the acid replaced - NaCl qualifies; NaHSO\u2084 still holds one H.'),
 ('An acid reacts with a reactive metal to give...', ['a salt and hydrogen gas', 'a salt and water only', 'carbon dioxide', 'oxygen'], 0,
  'Acid + metal \u2192 salt + hydrogen - the hydrogen gives a pop with a lighted splint.'),
], cards=[
 ('Give the definitions of an acid and a base (Arrhenius).',
  'An acid is a substance that ionises in water to give hydrogen ions (H\u207a) as the only positive ion. A base accepts hydrogen ions or, in Arrhenius terms, yields hydroxide ions (OH\u207b) in water; a soluble base is an alkali.'),
 ('Explain how the pH scale works.',
  'A 0-14 scale measuring acidity: 0-6 acidic (lower = stronger), 7 neutral, 8-14 basic (higher = stronger). Indicators show it by colour - universal indicator gives a colour for every value.'),
])

fill('Chemistry', 'Hydrocarbons & Organic Chemistry Basics', quiz=[
 ('Hydrocarbons that contain only single bonds are called...', ['saturated (alkanes)', 'unsaturated', 'aromatics only', 'isotopes'], 0,
  'Every carbon is "full" of hydrogen - no more can add, so alkanes are saturated.'),
 ('The general formula of the alkanes is...', ['C\u2099H\u2082\u2099\u208a\u2082', 'C\u2099H\u2082\u2099', 'C\u2099H\u2082\u2099\u208b\u2082', 'C\u2099H\u2099'], 0,
  'Methane CH\u2084, ethane C\u2082H\u2086, propane C\u2083H\u2088 - all fit C\u2099H\u2082\u2099\u208a\u2082.'),
 ('The first member of the alkene family is...', ['ethene', 'methene', 'propene', 'butene'], 0,
  'A double bond needs two carbons, so the series starts at C\u2082H\u2084 - ethene.'),
 ('Alkenes are detected by their ability to...', ['decolourise bromine water', 'turn litmus red', 'conduct electricity', 'explode in air only'], 0,
  'The double bond adds bromine across it, so orange bromine water turns colourless - the test for unsaturation.'),
 ('Consecutive members of a homologous series differ by...', ['CH\u2082', 'H\u2082O', 'O\u2082', 'a carbon atom only'], 0,
  'Each step adds one carbon and two hydrogens - a CH\u2082 unit - with properties changing gradually.'),
 ('Complete combustion of a hydrocarbon produces...', ['carbon dioxide and water', 'carbon monoxide and hydrogen', 'carbon only', 'oxygen and water'], 0,
  'With plenty of air: hydrocarbon + O\u2082 \u2192 CO\u2082 + H\u2082O. Limited air gives poisonous carbon monoxide instead.'),
 ('Cracking is the process of...', ['breaking large hydrocarbon molecules into smaller, more useful ones', 'joining small molecules', 'freezing crude oil', 'filtering petrol'], 0,
  'Heat and a catalyst split long chains into shorter fuels and alkenes - more valuable products.'),
 ('The suffixes -ane, -ene and -yne indicate...', ['single, double and triple bonds respectively', 'chain length only', 'the number of oxygens', 'the state of matter'], 0,
  '-ane = alkane (single bonds), -ene = alkene (double), -yne = alkyne (triple).'),
 ('The simplest hydrocarbon is...', ['methane', 'ethane', 'ethene', 'benzene'], 0,
  'One carbon, four hydrogens - CH\u2084, the main component of natural gas.'),
 ('Isomers are compounds with...', ['the same molecular formula but different structural formulas', 'different molecular formulas', 'identical structures', 'no carbon atoms'], 0,
  'Butane and 2-methylpropane are both C\u2084H\u2081\u2080 - same atoms, different arrangements, different properties.'),
], cards=[
 ('What is a homologous series? Give its features.',
  'A family of compounds with the same general formula, differing by CH\u2082 per step, showing gradual change in physical properties and similar chemical behaviour. Example: alkanes C\u2099H\u2082\u2099\u208a\u2082 - methane, ethane, propane...'),
 ('How do saturated and unsaturated hydrocarbons differ, and how is unsaturation tested?',
  'Saturated (alkanes) have only single C-C bonds; unsaturated (alkenes/alkynes) contain double or triple bonds. Test: shake with orange bromine water - unsaturated compounds decolourise it as bromine adds across the multiple bond.'),
])

fill('Chemistry', 'Air, the Atmosphere & the Gas Laws', quiz=[
 ('Clean dry air is about ___ nitrogen.', ['78%', '21%', '1%', '50%'], 0,
  'Roughly 78% nitrogen, 21% oxygen, and about 1% argon, carbon dioxide and other gases.'),
 ('The oxygen content of clean air is approximately...', ['21%', '78%', '0.03%', '50%'], 0,
  'About 21% - enough to support combustion and respiration without making fires too fierce.'),
 ('In the classic experiment to find the percentage of oxygen in air, the water level rises by about...', ['one-fifth (20%)', 'one-half', 'three-quarters', 'it does not rise'], 0,
  'The burning substance uses up the oxygen (about a fifth of the air), so water rises to fill the space.'),
 ('The noble (rare) gas most abundant in air is...', ['argon', 'helium', 'neon', 'xenon'], 0,
  'Argon makes up nearly 1% of air - far more than all the other noble gases combined.'),
 ('Boyle\u2019s law states that at constant temperature, the volume of a fixed mass of gas is...', ['inversely proportional to its pressure', 'directly proportional to its pressure', 'independent of pressure', 'proportional to temperature only'], 0,
  'PV = constant: squeeze a gas (raise P) and its volume falls proportionally.'),
 ('Charles\u2019 law states that at constant pressure, the volume of a fixed mass of gas is...', ['directly proportional to its absolute temperature', 'inversely proportional to temperature', 'constant', 'proportional to pressure'], 0,
  'V/T = constant with T in kelvin: heat a gas and it expands steadily.'),
 ('The poisonous gas in car exhaust that combines with haemoglobin is...', ['carbon monoxide', 'carbon dioxide', 'nitrogen', 'ozone'], 0,
  'CO binds to haemoglobin far more strongly than oxygen, starving the body - a silent killer.'),
 ('Oxygen is essential for...', ['combustion and respiration', 'photosynthesis as a raw material', 'fire extinguishers', 'making fertilisers directly'], 0,
  'Fires and living cells both need oxygen; plants release it rather than consume it in photosynthesis.'),
 ('Nitrogen is used in food packaging because it is...', ['unreactive (inert)', 'poisonous to bacteria', 'cheaper than air', 'coloured'], 0,
  'Nitrogen\u2019s inertness keeps crisps and milk powder from oxidising and going stale or rancid.'),
 ('Carbon dioxide is used in fire extinguishers because it...', ['is denser than air and does not support combustion', 'burns readily', 'cools by exploding', 'is lighter than air'], 0,
  'CO\u2082 blankets the fire, cutting off oxygen - being heavier than air, it stays where it is needed.'),
], cards=[
 ('State the composition of clean dry air.',
  'About 78% nitrogen, 21% oxygen, 0.9% argon, 0.03-0.04% carbon dioxide, plus traces of neon, helium, methane, hydrogen and water vapour that varies with humidity.'),
 ('State Boyle\u2019s law and Charles\u2019 law.',
  'Boyle: at constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure (PV = k). Charles: at constant pressure, volume is directly proportional to absolute temperature in kelvin (V/T = k).'),
 ('Name common air pollutants and their sources.',
  'Carbon monoxide (incomplete combustion in engines), sulphur dioxide (burning sulphur-containing fuels - causes acid rain), oxides of nitrogen (engines and lightning - smog), and particulates/dust from industry and vehicles.'),
])

# ================== CHEMISTRY SS3 ==================
fill('Chemistry', 'Redox Reactions & Electrolysis', quiz=[
 ('Oxidation is defined as...', ['loss of electrons (increase in oxidation number)', 'gain of electrons', 'loss of protons', 'gain of neutrons'], 0,
  'OIL RIG: Oxidation Is Loss, Reduction Is Gain - of electrons.'),
 ('Reduction is...', ['gain of electrons (decrease in oxidation number)', 'loss of electrons', 'gain of oxygen always', 'loss of neutrons'], 0,
  'The reduced species gains electrons and its oxidation number falls.'),
 ('An oxidising agent...', ['is itself reduced', 'is itself oxidised', 'donates electrons', 'never changes'], 0,
  'It takes electrons from another substance - and in accepting them, it is reduced.'),
 ('The oxidation number of oxygen in most compounds is...', ['-2', '+2', '-1', '0'], 0,
  'Oxygen is -2 in almost all compounds (exceptions: peroxides -1, and OF\u2082 where it is +2).'),
 ('During electrolysis, oxidation takes place at the...', ['anode', 'cathode', 'salt bridge', 'voltmeter'], 0,
  'AN OX and RED CAT: oxidation at the anode (positive), reduction at the cathode (negative).'),
 ('Cations migrate to the...', ['cathode', 'anode', 'salt bridge', 'filter funnel'], 0,
  'Positive ions are attracted to the negative electrode - the cathode - where they gain electrons.'),
 ('Electrolysis of molten sodium chloride produces...', ['sodium at the cathode and chlorine at the anode', 'sodium at the anode', 'hydrogen and oxygen', 'sodium hydroxide only'], 0,
  'Na\u207a ions are reduced to sodium metal at the cathode; Cl\u207b ions are oxidised to chlorine gas at the anode.'),
 ('Electroplating is used to...', ['coat an object with a thin layer of another metal', 'melt metals together', 'make alloys by heating', 'separate crude oil'], 0,
  'The object is made the cathode in a bath of the plating metal\u2019s ions - protection plus appearance.'),
 ('An electrolyte is...', ['a substance that conducts electricity when molten or in solution', 'any metal', 'an insulator', 'a covalent gas'], 0,
  'It supplies the mobile ions that carry current during electrolysis.'),
 ('The oxidation number of hydrogen in most compounds is...', ['+1', '-1', '0', '+2'], 0,
  'Hydrogen is +1 except in metal hydrides (e.g. NaH) where it is -1.'),
], cards=[
 ('What happens during the electrolysis of molten sodium chloride?',
  'Na\u207a ions migrate to the cathode and gain electrons: Na\u207a + e\u207b \u2192 Na (reduction). Cl\u207b ions migrate to the anode and lose electrons: 2Cl\u207b \u2192 Cl\u2082 + 2e\u207b (oxidation). Products: sodium metal and chlorine gas.'),
])

fill('Chemistry', 'Rates of Reaction & Chemical Equilibrium', quiz=[
 ('According to collision theory, a reaction occurs when particles...', ['collide with sufficient energy (activation energy)', 'merely touch', 'are heated to boiling', 'are in the dark'], 0,
  'Not every collision reacts - only those with energy at or above the activation energy succeed.'),
 ('Increasing the temperature of a reaction usually...', ['increases the rate', 'decreases the rate', 'stops the reaction', 'has no effect'], 0,
  'Particles move faster and collide more often with more energy - far more collisions clear the activation barrier.'),
 ('Increasing the concentration of a reactant...', ['increases the rate of reaction', 'decreases the rate', 'changes only the colour', 'lowers the temperature'], 0,
  'More particles per unit volume means more frequent successful collisions.'),
 ('A catalyst speeds up a reaction by...', ['lowering the activation energy without being consumed', 'raising the temperature', 'being used up', 'removing reactants'], 0,
  'It provides an easier route with a lower energy barrier and emerges chemically unchanged.'),
 ('Using smaller particles (powder instead of lumps) increases the rate because...', ['the surface area is larger', 'the mass increases', 'the temperature rises', 'the particles are heavier'], 0,
  'More surface is exposed, so more collisions per second are possible.'),
 ('At chemical equilibrium, the rate of the forward reaction...', ['equals the rate of the reverse reaction', 'is zero', 'is much greater', 'fluctuates wildly'], 0,
  'Both reactions continue, but at equal speeds, so concentrations stay constant.'),
 ('Le Chatelier\u2019s principle says a system at equilibrium responds to a change by...', ['shifting to counteract the change', 'ignoring it', 'shutting down', 'always shifting forward'], 0,
  'Add heat, and it favours the endothermic direction; add a reactant, and it makes more product.'),
 ('Increasing the pressure of a gaseous equilibrium favours...', ['the side with fewer gas molecules', 'the side with more molecules', 'neither side ever', 'the exothermic side only'], 0,
  'The system reduces the pressure by shifting towards fewer gas particles.'),
 ('Adding a catalyst to an equilibrium mixture...', ['does not shift the position of equilibrium', 'shifts it to the right', 'shifts it to the left', 'stops both reactions'], 0,
  'It speeds up both directions equally - equilibrium is reached sooner, but in the same place.'),
 ('Enzymes are...', ['biological catalysts', 'hormones', 'vitamins', 'acids only'], 0,
  'Protein catalysts in living things - they make body chemistry fast enough for life at mild temperatures.'),
], cards=[
 ('What factors affect the rate of reaction, according to collision theory?',
  'Temperature (faster, more energetic collisions), concentration (more particles to collide), surface area (more exposed particles), and catalysts (lower activation energy). Each one increases the frequency of SUCCESSFUL collisions.'),
 ('How does Le Chatelier\u2019s principle predict the effect of pressure?',
  'Raising the pressure shifts a gaseous equilibrium towards the side with FEWER gas molecules, reducing the pressure again. Lowering pressure favours the side with more molecules.'),
])

fill('Chemistry', 'The Mole Concept & Stoichiometry', quiz=[
 ('One mole of any substance contains...', ['6.02 x 10\u00b2\u00b3 particles', '6.02 x 10\u00b2\u00b2 particles', '22.4 particles', '1000 particles'], 0,
  'Avogadro\u2019s constant: 6.02 x 10\u00b2\u00b3 atoms, molecules or ions per mole.'),
 ('The molar mass of water, H\u2082O, is...', ['18 g/mol', '16 g/mol', '20 g/mol', '34 g/mol'], 0,
  '(2 x 1) + 16 = 18 g/mol.'),
 ('The number of moles is calculated as...', ['mass / molar mass', 'mass x molar mass', 'molar mass / mass', 'mass + molar mass'], 0,
  'n = m/M - for example 36 g of water is 36/18 = 2 moles.'),
 ('What is the mass of 2 moles of carbon dioxide? (C = 12, O = 16)', ['88 g', '44 g', '22 g', '176 g'], 0,
  'Molar mass of CO\u2082 = 12 + 32 = 44 g/mol, so 2 moles = 88 g.'),
 ('One mole of any gas at s.t.p. occupies...', ['22.4 dm\u00b3', '11.2 dm\u00b3', '24.0 dm\u00b3', '1 dm\u00b3'], 0,
  'The molar volume at standard temperature and pressure is 22.4 dm\u00b3 (litres).'),
 ('Avogadro\u2019s constant is...', ['6.02 x 10\u00b2\u00b3', '6.63 x 10\u207b\u00b3\u2074', '3.0 x 10\u2078', '9.1 x 10\u207b\u00b3\u00b9'], 0,
  'The number of particles in one mole - the bridge between counting atoms and weighing grams.'),
 ('In stoichiometry, the mole ratio of reactants comes from...', ['the coefficients of the balanced equation', 'the atomic masses', 'the periodic table groups', 'the density'], 0,
  'Coefficients give the reacting ratio: in N\u2082 + 3H\u2082 \u2192 2NH\u2083, one mole of nitrogen reacts with three of hydrogen.'),
 ('What is the number of moles in 4 g of hydrogen gas, H\u2082? (H = 1)', ['2', '4', '0.5', '1'], 0,
  'Molar mass of H\u2082 = 2 g/mol, so 4 g / 2 = 2 moles. Note hydrogen gas is H\u2082, not H.'),
 ('From N\u2082 + 3H\u2082 \u2192 2NH\u2083, how many moles of ammonia does 1 mole of nitrogen give?', ['2', '1', '3', '4'], 0,
  'The coefficients read 1 : 3 : 2 - one mole of nitrogen yields two moles of ammonia.'),
 ('Concentration in mol/dm\u00b3 is calculated as...', ['moles / volume in dm\u00b3', 'volume / moles', 'mass / volume always', 'moles x volume'], 0,
  'c = n/V, with V in dm\u00b3 (1 dm\u00b3 = 1000 cm\u00b3).'),
], cards=[
 ('Define the mole and Avogadro\u2019s constant.',
  'The mole is the amount of substance containing 6.02 x 10\u00b2\u00b3 (Avogadro\u2019s constant) particles - atoms, molecules or ions. One mole of any substance has a mass in grams equal to its relative formula mass.'),
 ('How do you use mole ratios from balanced equations?',
  'Balance the equation first; its coefficients give the reacting ratio. Convert masses to moles (n = m/M), apply the ratio to find moles of the wanted substance, then convert back to mass or volume.'),
])

fill('Chemistry', 'Metals, Their Extraction & Their Compounds', quiz=[
 ('Which of these metals is the most reactive?', ['potassium', 'zinc', 'copper', 'silver'], 0,
  'The reactivity series runs K, Na, Ca, Mg, Al, Zn, Fe, ... Cu, Ag, Au - potassium tops this list.'),
 ('Highly reactive metals such as sodium and aluminium are extracted by...', ['electrolysis of their molten compounds', 'reduction with carbon', 'simple heating', 'dissolving in water'], 0,
  'They hold their compounds too tightly for carbon to reduce - only electrolysis has the pulling power.'),
 ('Metals below carbon in the reactivity series, like iron, are extracted by...', ['reduction with coke (carbon)', 'electrolysis', 'filtration', 'distillation'], 0,
  'Carbon is more reactive than iron, so it strips the oxygen away in the blast furnace.'),
 ('Iron is extracted industrially in the...', ['blast furnace', 'electrolytic cell', 'fractionating column', 'kiln only'], 0,
  'The blast furnace reduces iron oxide with coke at around 1500\u00b0C, yielding pig iron.'),
 ('The raw materials charged into a blast furnace are...', ['iron ore, coke and limestone', 'iron, coal and sand', 'bauxite and cryolite', 'salt, water and air'], 0,
  'Ore (haematite) supplies the iron, coke the heat and reducing power, limestone the slag-former.'),
 ('Aluminium is extracted from bauxite by electrolysis in the...', ['Hall-H\u00e9roult process', 'blast furnace', 'Contact process', 'Haber process'], 0,
  'Aluminium is too reactive for carbon reduction, so molten alumina is electrolysed.'),
 ('Cryolite is added during aluminium extraction to...', ['lower the melting point of the mixture', 'increase the melting point', 'act as the anode', 'colour the metal'], 0,
  'Pure alumina melts above 2000\u00b0C; dissolved in cryolite it electrolyses around 900\u00b0C - a huge energy saving.'),
 ('Brass is an alloy of...', ['copper and zinc', 'copper and tin', 'iron and carbon', 'lead and tin'], 0,
  'Copper + zinc = brass. (Copper + tin = bronze - a favourite exam pair.)'),
 ('Rusting of iron requires...', ['both oxygen and water', 'oxygen only', 'water only', 'carbon dioxide'], 0,
  'Iron rusts only when air AND moisture are present - exclude either and rusting stops.'),
 ('Galvanising protects iron by coating it with...', ['zinc', 'tin', 'copper', 'paint always'], 0,
  'The zinc corrodes preferentially, sacrificing itself even if the coating is scratched.'),
], cards=[
 ('How does the method of extracting a metal depend on its reactivity?',
  'Metals above carbon (K, Na, Ca, Mg, Al): electrolysis of the molten compound. Metals below carbon (Zn, Fe, Sn, Pb): reduction of the oxide with coke. Unreactive metals (Cu, Ag, Au): found native or extracted by simple heating.'),
 ('Name the raw materials of the blast furnace and the role of each.',
  'Iron ore (haematite - the source of iron), coke (fuel for heat and the reducing agent, producing CO), and limestone (reacts with sandy impurities to form slag, which floats and is removed).'),
 ('What is rusting, and how is it prevented?',
  'Rusting is the corrosion of iron into hydrated iron(III) oxide, needing both oxygen and water. Prevention: barrier methods (painting, greasing, plastic coating), galvanising (zinc coating), sacrificial protection, and alloying to make stainless steel.'),
])

# ================== BIOLOGY SS1 ==================
fill('Biology', 'The Cell: Structure & Function', quiz=[
 ('The structure that controls the activities of the cell is the...', ['nucleus', 'vacuole', 'cell wall', 'cytoplasm'], 0,
  'The nucleus holds the DNA and directs growth, reproduction and protein production.'),
 ('Proteins are assembled at the...', ['ribosomes', 'vacuole', 'cell wall', 'chloroplasts'], 0,
  'Ribosomes - free in the cytoplasm or on the rough endoplasmic reticulum - are the protein factories.'),
 ('Which structures are found in plant cells but NOT in animal cells?', ['cell wall and chloroplasts', 'nucleus and mitochondria', 'cell membrane and cytoplasm', 'ribosomes and vacuoles'], 0,
  'Plant cells add a cellulose cell wall, chloroplasts and a large permanent vacuole - animal cells have none of these.'),
 ('Diffusion is the movement of particles from...', ['a region of higher concentration to lower concentration', 'lower to higher concentration', 'the cell only', 'against the gradient using energy'], 0,
  'Particles spread down their concentration gradient until evenly distributed - no energy needed.'),
 ('The cell membrane is described as...', ['selectively (semi-) permeable', 'fully permeable', 'impermeable', 'rigid'], 0,
  'It lets some substances through while holding others back - the gatekeeper of the cell.'),
 ('Osmosis specifically involves the movement of...', ['water molecules through a semi-permeable membrane', 'sugar molecules', 'any solute', 'oxygen only'], 0,
  'Osmosis is the diffusion of WATER from a dilute to a more concentrated solution across a semi-permeable membrane.'),
 ('A plant cell placed in a concentrated salt solution will...', ['lose water by osmosis and become plasmolysed', 'burst', 'gain water', 'divide'], 0,
  'Water leaves the vacuole, the cytoplasm shrinks away from the wall - plasmolysis.'),
 ('Chloroplasts are the site of...', ['photosynthesis', 'respiration', 'protein synthesis', 'cell division'], 0,
  'Their chlorophyll traps light energy to make glucose - photosynthesis happens here.'),
 ('The large central vacuole in a plant cell mainly...', ['stores cell sap and keeps the cell turgid', 'makes proteins', 'digests only', 'carries DNA'], 0,
  'Full of cell sap, it presses the cytoplasm against the wall, keeping the plant firm.'),
 ('Most of the chemical reactions of the cell take place in the...', ['cytoplasm', 'cell wall', 'nucleus only', 'vacuole'], 0,
  'The jelly-like cytoplasm houses the organelles and is where much of the cell\u2019s metabolism runs.'),
], cards=[
 ('State three differences between plant and animal cells.',
  'Plant cells have a cellulose cell wall (animals: none), chloroplasts for photosynthesis (animals: none), and a large permanent vacuole (animals: small temporary ones). Plant cells also tend to be regular in shape; animal cells are irregular.'),
])

fill('Biology', 'Nutrition: Digestion in Humans', quiz=[
 ('Digestion of starch begins in the mouth with the enzyme...', ['salivary amylase (ptyalin)', 'pepsin', 'lipase', 'trypsin'], 0,
  'Amylase in saliva starts breaking starch into maltose as you chew.'),
 ('The enzyme pepsin in the stomach digests...', ['proteins', 'fats', 'starch', 'vitamins'], 0,
  'Pepsin works in the stomach\u2019s acid, breaking proteins into shorter chains (polypeptides).'),
 ('Bile is produced by the...', ['liver', 'stomach', 'pancreas', 'gall bladder'], 0,
  'The liver makes bile; the gall bladder merely stores and releases it.'),
 ('Bile helps fat digestion by...', ['emulsifying fats into tiny droplets', 'chemically digesting fats itself', 'digesting proteins', 'absorbing water'], 0,
  'Emulsification massively increases the surface area for lipase to attack - a physical, not chemical, breakdown.'),
 ('The finger-like villi of the small intestine exist to...', ['increase the surface area for absorption', 'grind food', 'store bile', 'secrete acid'], 0,
  'Millions of villi, each with capillaries and a lacteal, make absorption fast and efficient.'),
 ('Most digestion and absorption occur in the...', ['small intestine', 'stomach', 'large intestine', 'mouth'], 0,
  'Enzymes from the pancreas and intestinal wall finish digestion there, and the villi absorb the products.'),
 ('Hydrochloric acid in the stomach...', ['kills bacteria and provides the right pH for pepsin', 'digests fats', 'neutralises bile', 'absorbs water'], 0,
  'The acid sterilises the food and creates the acidic conditions pepsin needs to work.'),
 ('The wave-like muscular movement that pushes food along the gut is...', ['peristalsis', 'diffusion', 'osmosis', 'mastication'], 0,
  'Layers of muscle contract in waves, squeezing the bolus onward from oesophagus to anus.'),
 ('Fats are digested by the enzyme...', ['lipase', 'amylase', 'pepsin', 'maltase'], 0,
  'Lipase (from the pancreas) splits fats into fatty acids and glycerol.'),
 ('Undigested food is stored in the ___ before egestion.', ['rectum', 'caecum', 'duodenum', 'ileum'], 0,
  'Faeces collect in the rectum and leave through the anus - this is egestion, not excretion.'),
], cards=[
 ('List the enzymes of human digestion with their substrates and products.',
  'Amylase: starch \u2192 maltose (mouth, small intestine). Proteases (pepsin, trypsin): proteins \u2192 polypeptides \u2192 amino acids (stomach, small intestine). Lipase: fats \u2192 fatty acids + glycerol (small intestine). Maltase: maltose \u2192 glucose.'),
 ('How is the small intestine adapted for absorption?',
  'It is long (more time and space), lined with millions of villi and microvilli (huge surface area), each villus has a rich capillary network and a lacteal (fast transport), and its wall is thin (short diffusion distance).'),
])

fill('Biology', 'Soil, Conservation & Our Environment', quiz=[
 ('The best soil type for farming is...', ['loam', 'sand', 'clay', 'silt alone'], 0,
  'Loam balances drainage, water retention, air and nutrients - the farmer\u2019s favourite.'),
 ('The layer of the soil profile richest in humus is the...', ['topsoil', 'subsoil', 'parent rock', 'bedrock'], 0,
  'Topsoil (layer A) holds decomposed organic matter and most of the soil life.'),
 ('Sandy soil is characterised by...', ['large particles, fast drainage and low nutrients', 'tiny particles and waterlogging', 'no air spaces', 'rich humus always'], 0,
  'Big particles leave big gaps, so water and dissolved nutrients drain away quickly.'),
 ('Clay soil is characterised by...', ['very small particles that hold water and become waterlogged', 'fast drainage', 'large air spaces', 'poor water retention'], 0,
  'Tiny, tightly packed particles trap water - fertile when managed, but easily waterlogged and hard to work.'),
 ('Soil erosion is the...', ['removal of topsoil by wind or water', 'addition of fertiliser', 'formation of humus', 'ploughing of land'], 0,
  'Wind and running water strip away the fertile topsoil - a slow disaster for farmland.'),
 ('Which practice helps to PREVENT soil erosion?', ['planting cover crops and terracing slopes', 'overgrazing', 'burning vegetation', 'deforestation'], 0,
  'Cover crops, terraces, contour ploughing and afforestation all shield soil from wind and water.'),
 ('Humus is...', ['decomposed organic matter in the soil', 'a type of rock', 'pure clay', 'a fertiliser chemical'], 0,
  'Rotted plant and animal remains - humus enriches soil, holds moisture and feeds soil organisms.'),
 ('In the nitrogen cycle, nitrogen-fixing bacteria convert atmospheric nitrogen into...', ['nitrates usable by plants', 'oxygen', 'carbon dioxide', 'pure nitrogen gas'], 0,
  'Plants cannot use N\u2082 gas; bacteria in root nodules and soil turn it into soluble nitrates.'),
 ('The water cycle is driven mainly by...', ['evaporation powered by the Sun', 'the Moon\u2019s pull only', 'wind alone', 'plant roots'], 0,
  'Sun heat evaporates water, which condenses into clouds and returns as precipitation - a continuous cycle.'),
 ('Leaching is the process in which...', ['soluble nutrients are washed down beyond the reach of roots', 'soil is blown away', 'humus is formed', 'rocks break into sand'], 0,
  'Heavy rain dissolves nutrients and carries them deep - another reason sandy soils stay poor.'),
], cards=[
 ('Compare sandy, clay and loam soils.',
  'Sandy: large particles, drains fast, poor in nutrients. Clay: tiny particles, holds water, easily waterlogged but fertile. Loam: a balanced mixture with humus - good drainage, good retention, ideal for crops.'),
 ('What causes soil erosion, and how can it be controlled?',
  'Causes: wind, running water, overgrazing, deforestation and bush burning that leave soil bare. Controls: cover cropping, terracing and contour ploughing, afforestation, controlled grazing, and windbreaks.'),
 ('Outline the water cycle.',
  'The Sun evaporates water from oceans and land \u2192 water vapour rises and condenses into clouds \u2192 precipitation falls as rain \u2192 water runs off into rivers and seas or soaks into the ground \u2192 the cycle repeats.'),
])

# ================== BIOLOGY SS2 ==================
fill('Biology', 'Reproduction & Development', quiz=[
 ('The male and female gametes in humans are the...', ['sperm and egg (ovum)', 'testis and ovary', 'pollen and seed', 'zygote and embryo'], 0,
  'Gametes are the sex CELLS - sperm from the testes, egg from the ovary.'),
 ('Fertilisation in humans normally occurs in the...', ['oviduct (fallopian tube)', 'uterus', 'ovary', 'vagina'], 0,
  'The sperm meets the egg in the oviduct; the zygote then travels down to implant in the uterus.'),
 ('The placenta functions to...', ['exchange nutrients, gases and wastes between mother and foetus', 'cushion the foetus from shocks', 'connect the foetus to the placenta', 'produce the egg'], 0,
  'Food and oxygen cross in, wastes cross out - the mother\u2019s and foetus\u2019s blood never mix directly.'),
 ('The umbilical cord...', ['connects the foetus to the placenta', 'anchors the placenta to the uterus only', 'is where fertilisation happens', 'stores the egg'], 0,
  'It carries the blood vessels that run between foetus and placenta.'),
 ('The amniotic fluid mainly...', ['cushions the foetus against mechanical shock', 'feeds the foetus directly', 'connects to the placenta', 'makes blood cells'], 0,
  'The fluid-filled sac absorbs knocks and allows the foetus to move freely.'),
 ('Human pregnancy (gestation) lasts approximately...', ['nine months (about 40 weeks)', 'three months', 'six months', 'twelve months'], 0,
  'Roughly 40 weeks from the last menstrual period to birth.'),
 ('The male reproductive part of a flower is the...', ['stamen (anther and filament)', 'carpel', 'petal', 'sepal'], 0,
  'The anther produces pollen grains - the male gametes of the plant.'),
 ('Pollination is the transfer of pollen grains from the...', ['anther to the stigma', 'stigma to the anther', 'ovule to the ovary', 'petal to the sepal'], 0,
  'Pollen lands on the sticky stigma - by wind, insects or other agents - starting fertilisation.'),
 ('In plants, fertilisation is the fusion of...', ['a pollen nucleus with the egg nucleus in the ovule', 'pollen with the stigma', 'two anthers', 'seed and fruit'], 0,
  'The pollen tube delivers the male nucleus to the ovule, where it fuses with the egg.'),
 ('After fertilisation, the ovule develops into the ___ and the ovary into the ___.', ['seed; fruit', 'fruit; seed', 'flower; leaf', 'stem; root'], 0,
  'The fertilised ovule becomes the seed; the surrounding ovary swells into the fruit.'),
], cards=[
 ('What are the functions of the placenta and the umbilical cord?',
  'The placenta exchanges materials between mother and foetus - nutrients and oxygen in, carbon dioxide and wastes out - and secretes hormones. The umbilical cord carries the blood vessels linking the foetus to the placenta.'),
 ('Describe pollination and fertilisation in flowering plants.',
  'Pollination: pollen grains transfer from anther to stigma (by wind or insects). Fertilisation: a pollen tube grows down the style, delivering the male nucleus to the ovule, where it fuses with the egg nucleus to form a zygote.'),
 ('Trace the stages from fertilised egg to birth in humans.',
  'Fertilisation in the oviduct forms a zygote \u2192 it divides as it travels to the uterus \u2192 implants in the uterus wall as an embryo \u2192 develops into a foetus, nourished via the placenta \u2192 birth after about 40 weeks.'),
])

fill('Biology', 'The Nervous System & Coordination', quiz=[
 ('The structural and functional unit of the nervous system is the...', ['neurone (nerve cell)', 'nephron', 'alveolus', 'villus'], 0,
  'Neurones carry nerve impulses - the nervous system is built from billions of them.'),
 ('The main parts of a neurone are...', ['dendrites, cell body and axon', 'nucleus, vacuole and wall', 'atrium, ventricle and valve', 'root, stem and leaf'], 0,
  'Dendrites receive impulses, the cell body processes them, and the axon carries them onward.'),
 ('A reflex action is best described as...', ['automatic, rapid and involuntary', 'slow and deliberate', 'controlled by thought', 'learned through practice'], 0,
  'Reflexes bypass conscious thought for speed - vital for protection.'),
 ('Which brain part controls balance and coordination of movement?', ['cerebellum', 'cerebrum', 'medulla oblongata', 'hypothalamus only'], 0,
  'The cerebellum fine-tunes movement and balance - which is why alcohol (affecting it) makes people stagger.'),
 ('The central nervous system consists of the...', ['brain and spinal cord', 'brain and nerves only', 'spinal cord and eyes', 'all the body\u2019s nerves'], 0,
  'The CNS is the command centre; the peripheral nerves link it to the rest of the body.'),
 ('Sensory neurones carry impulses...', ['from receptors to the central nervous system', 'from the CNS to effectors', 'between the heart and lungs', 'only within the brain'], 0,
  'Sense first: receptors \u2192 sensory neurone \u2192 CNS. The motor route runs the other way.'),
 ('Motor neurones carry impulses...', ['from the CNS to effectors (muscles and glands)', 'from receptors to the CNS', 'only to the eyes', 'from muscle to muscle'], 0,
  'The CNS decides, motor neurones deliver the order to the muscle or gland.'),
 ('The tiny gap between two neurones is called a...', ['synapse', 'node', 'ax hillock only', 'dendrite'], 0,
  'Impulses cross the synapse chemically, via transmitter substances.'),
 ('Pulling your hand from a hot object before feeling pain is an example of...', ['a reflex action', 'a conditioned response', 'voluntary movement', 'a hormonal response'], 0,
  'The spinal cord routes the response directly - the brain is informed afterwards.'),
 ('Effectors in the nervous system are...', ['muscles and glands', 'receptors only', 'neurones only', 'sense organs'], 0,
  'Effectors DO something - muscles contract, glands secrete - carrying out the body\u2019s responses.'),
], cards=[
 ('What are the functions of the cerebrum, cerebellum and medulla oblongata?',
  'Cerebrum: thinking, memory, voluntary actions and the senses - the largest part. Cerebellum: balance, posture and coordination of movement. Medulla oblongata: controls involuntary life-support activities - heartbeat, breathing, blood pressure.'),
 ('Distinguish sensory, relay and motor neurones.',
  'Sensory neurones carry impulses from receptors to the CNS. Relay (connector) neurones link sensory to motor neurones inside the CNS. Motor neurones carry impulses from the CNS to effectors - muscles and glands.'),
])

fill('Biology', 'Adaptation & Survival in Habitats', quiz=[
 ('An organism\u2019s habitat is where it lives; its niche is...', ['its role or occupation in that habitat', 'its address', 'its food only', 'its enemies'], 0,
  'Habitat = address; niche = profession - how the organism makes its living there.'),
 ('A cactus with spines instead of broad leaves shows...', ['structural (morphological) adaptation', 'physiological adaptation', 'behavioural adaptation', 'no adaptation'], 0,
  'Spines are a body feature - structural adaptation - reducing water loss and deterring grazers.'),
 ('Venom production and hibernation chemistry are examples of...', ['physiological adaptation', 'structural adaptation', 'behavioural adaptation', 'accidental change'], 0,
  'Physiological adaptations are internal body processes - how the organism\u2019s chemistry copes.'),
 ('Migration of birds in the dry season is an example of...', ['behavioural adaptation', 'structural adaptation', 'physiological adaptation', 'variation'], 0,
  'Something the organism DOES - behaviour - to survive the season.'),
 ('Fish are adapted to water by having...', ['gills and a streamlined body', 'lungs and fur', 'hooves and horns', 'wings and feathers'], 0,
  'Gills extract dissolved oxygen; the streamlined shape cuts drag while swimming.'),
 ('Desert plants commonly show...', ['deep roots and reduced leaves', 'broad thin leaves', 'shallow spreading roots only', 'large flat leaves'], 0,
  'Deep roots chase water; small or spiny leaves reduce transpiration - every drop is precious.'),
 ('Camouflage helps an organism by...', ['blending it into the background so predators overlook it', 'making it conspicuous', 'scaring predators with noise', 'poisoning them'], 0,
  'A stick insect looks like a twig; a green grasshopper disappears into grass.'),
 ('Bright warning colours in poisonous animals are called...', ['warning (aposematic) colouration', 'camouflage', 'mimicry of prey', 'disguise'], 0,
  'Bold colours advertise danger - predators learn to leave them alone.'),
 ('Competition between organisms occurs because...', ['resources such as food, space and mates are limited', 'organisms dislike each other', 'resources are unlimited', 'predators are absent'], 0,
  'Limited resources force organisms of the same or different species to compete - a driver of natural selection.'),
 ('A relationship in which one organism kills and eats another is...', ['predation', 'mutualism', 'commensalism', 'parasitism'], 0,
  'Predators kill their prey; parasites instead feed on a living host without usually killing it.'),
], cards=[
 ('Distinguish habitat from niche.',
  'A habitat is the physical place where an organism lives (a pond, a rainforest). A niche is the organism\u2019s role there - what it eats, when it is active, how it interacts. No two species share exactly the same niche.'),
 ('Name the three types of adaptation, with an example of each.',
  'Structural: body features - webbed feet of a duck, spines of a cactus. Physiological: internal processes - venom production, concentrated urine in desert animals. Behavioural: actions - migration, hibernation, nocturnal feeding.'),
 ('How do camouflage and warning colouration differ?',
  'Camouflage hides an organism by matching its background (stick insect, green grasshopper). Warning colouration does the opposite - bright colours (poison dart frogs, wasps) advertise toxicity so predators avoid them.'),
])

# ================== BIOLOGY SS3 ==================
fill('Biology', 'Genetics & Heredity', quiz=[
 ('A gene is best defined as...', ['a unit of inheritance located on a chromosome', 'a type of cell', 'a protein only', 'a chromosome'], 0,
  'Genes are stretches of DNA on chromosomes that carry the instructions for characteristics.'),
 ('Genotype refers to ___ while phenotype refers to ___.', ['the genetic makeup; the observable appearance', 'the appearance; the genes', 'both genetic makeup', 'the environment; the genes'], 0,
  'TT, Tt, tt are genotypes; tall or short are phenotypes.'),
 ('A dominant allele is conventionally represented by...', ['a capital letter', 'a small letter', 'a number', 'a Greek letter'], 0,
  'T for dominant tall, t for recessive short - capitals dominate.'),
 ('Mendel\u2019s first law states that...', ['alleles segregate (separate) during gamete formation', 'alleles always blend', 'gametes carry both alleles', 'dominant alleles disappear'], 0,
  'Each gamete receives only one allele of each pair - the law of segregation.'),
 ('A cross between two heterozygous tall plants (Tt x Tt) gives a phenotypic ratio of...', ['3 tall : 1 short', '1 : 1', 'all tall', '2 : 2'], 0,
  'TT, Tt, Tt, tt - three show the dominant phenotype, one the recessive: 3:1.'),
 ('In humans, the sex of a child is determined by...', ['the sperm that fertilises the egg', 'the egg only', 'the mother\u2019s diet', 'the season'], 0,
  'Eggs always carry X; sperm carry X or Y. An X sperm gives a girl (XX), a Y sperm a boy (XY).'),
 ('In the ABO blood group system, the alleles I\u1d2c and I\u1d2e are...', ['codominant', 'both recessive', 'both dominant over everything', 'linked to sex'], 0,
  'Neither masks the other - AB blood shows both antigens. I\u1d20 is recessive to both.'),
 ('A person with blood group O has the genotype...', ['I\u1d20I\u1d20', 'I\u1d2cI\u1d20', 'I\u1d2eI\u1d20', 'I\u1d2cI\u1d2e'], 0,
  'O appears only when both alleles are the recessive I\u1d20.'),
 ('An organism with two identical alleles for a trait is...', ['homozygous', 'heterozygous', 'hybrid always', 'mutated'], 0,
  'Homozygous: TT or tt. Heterozygous (Tt) carries two different alleles.'),
 ('The probability that a human child is a girl is...', ['1/2', '1/4', '1/3', '3/4'], 0,
  'X sperm and Y sperm are produced in equal numbers, so the chance is 50:50 - each pregnancy independently.'),
], cards=[
 ('Define gene, allele, genotype, phenotype, dominant and recessive.',
  'Gene: unit of inheritance on a chromosome. Allele: an alternative form of a gene (T or t). Genotype: the allele combination (Tt). Phenotype: the observable result (tall). Dominant: expressed whenever present. Recessive: expressed only when both alleles are recessive (tt).'),
 ('How is sex determined in humans?',
  'Females are XX and produce X eggs only. Males are XY and produce X and Y sperm in equal numbers. An X-bearing sperm gives a girl (XX); a Y-bearing sperm gives a boy (XY) - so the father\u2019s sperm decides, with a 1:1 chance.'),
])

fill('Biology', 'Ecology: Ecosystems & Energy Flow', quiz=[
 ('An ecosystem consists of...', ['a community of organisms together with their non-living environment', 'only the living organisms', 'only the physical factors', 'one species and its young'], 0,
  'Biotic community plus abiotic environment (soil, water, light, climate), interacting as a system.'),
 ('The producers in an ecosystem are...', ['green plants and other photosynthetic organisms', 'herbivores', 'fungi', 'carnivores'], 0,
  'Producers trap the Sun\u2019s energy and make food - everything else feeds from them.'),
 ('A primary consumer is...', ['a herbivore that eats producers', 'a carnivore', 'a decomposer', 'a producer'], 0,
  'First step up the food chain: plant-eaters like grasshoppers and rabbits.'),
 ('Every food chain begins with...', ['a producer', 'a herbivore', 'a carnivore', 'a decomposer'], 0,
  'Energy enters the chain only through producers capturing sunlight.'),
 ('As energy moves along a food chain, it...', ['decreases at each level', 'increases', 'stays constant', 'reverses direction'], 0,
  'Much is lost as heat and in waste at every transfer - typically only about 10% passes on.'),
 ('The organisms that break down dead remains are...', ['decomposers such as bacteria and fungi', 'producers', 'primary consumers', 'predators'], 0,
  'Decomposers recycle nutrients back into the soil - nature\u2019s clean-up crew.'),
 ('In the carbon cycle, green plants remove carbon dioxide from the air by...', ['photosynthesis', 'respiration', 'transpiration', 'evaporation'], 0,
  'Photosynthesis locks carbon into glucose; respiration and combustion return it as CO\u2082.'),
 ('The water cycle is powered mainly by...', ['evaporation driven by solar energy', 'plant roots', 'the Moon', 'soil bacteria'], 0,
  'The Sun evaporates water, which condenses into clouds and returns as rain.'),
 ('A population is defined as...', ['all the individuals of one species in an area at a time', 'all organisms in an area', 'two species interacting', 'one organism and its offspring'], 0,
  'One species, one place, one time - e.g. all the tilapia in a pond.'),
 ('The living (biotic) components of an ecosystem include...', ['plants, animals and microorganisms', 'soil and water', 'sunlight and temperature', 'rainfall and wind'], 0,
  'Biotic = living; soil, water, light and climate are the abiotic (non-living) factors.'),
], cards=[
 ('Define ecosystem, community and population.',
  'Population: all individuals of ONE species in an area. Community: all the populations (all species) living together there. Ecosystem: the community PLUS the non-living environment, interacting as a whole system.'),
 ('How does energy flow through an ecosystem?',
  'Sun \u2192 producers (photosynthesis) \u2192 primary consumers \u2192 secondary and tertiary consumers, with decomposers recycling the dead at every stage. Only about 10% of energy transfers between levels - the rest is lost as heat - so food chains are short and pyramids of energy always narrow upwards.'),
])

fill('Biology', 'Photosynthesis & Respiration', quiz=[
 ('Photosynthesis takes place in the...', ['chloroplasts', 'mitochondria', 'nucleus', 'ribosomes'], 0,
  'Chloroplasts hold the chlorophyll that traps light - the solar panels of the cell.'),
 ('The pigment that traps light energy for photosynthesis is...', ['chlorophyll', 'haemoglobin', 'melanin', 'cytochrome'], 0,
  'Chlorophyll absorbs mainly red and blue light, reflecting green - which is why leaves look green.'),
 ('The raw materials of photosynthesis are...', ['carbon dioxide and water', 'oxygen and glucose', 'glucose and water', 'oxygen and carbon dioxide'], 0,
  'CO\u2082 from the air and water from the soil; light provides the energy.'),
 ('The products of photosynthesis are...', ['glucose and oxygen', 'carbon dioxide and water', 'starch and nitrogen', 'protein and water'], 0,
  'Glucose (often stored as starch) and oxygen released through the stomata.'),
 ('The test for starch in a leaf uses iodine, which turns...', ['blue-black', 'brick red', 'clear', 'green'], 0,
  'Iodine solution goes from brown to blue-black where starch is present - the classic leaf test.'),
 ('The word equation for aerobic respiration is...', ['glucose + oxygen \u2192 carbon dioxide + water + energy', 'carbon dioxide + water \u2192 glucose + oxygen', 'glucose \u2192 lactic acid only', 'oxygen + water \u2192 glucose'], 0,
  'Respiration is photosynthesis\u2019s mirror image - it releases the energy stored in glucose as ATP.'),
 ('Aerobic respiration occurs mainly in the...', ['mitochondria', 'chloroplasts', 'vacuole', 'cell wall'], 0,
  'The mitochondrion is the powerhouse - the site of aerobic ATP production.'),
 ('Anaerobic respiration in human muscles during hard exercise produces...', ['lactic acid', 'ethanol and CO\u2082', 'oxygen', 'glucose'], 0,
  'Without enough oxygen, glucose breaks down only partly - lactic acid builds up and causes cramps.'),
 ('Compared with aerobic respiration, anaerobic respiration releases...', ['much less energy per glucose', 'more energy', 'the same energy', 'no energy at all'], 0,
  'The glucose is only partially broken down, so most of its energy remains trapped in the lactic acid or ethanol.'),
 ('Carbon dioxide is detected by limewater, which turns...', ['milky (chalky)', 'blue', 'red', 'clear'], 0,
  'CO\u2082 makes limewater cloudy - the standard test used in respiration experiments.'),
], cards=[
 ('Compare aerobic and anaerobic respiration.',
  'Aerobic: uses oxygen, occurs in mitochondria, glucose fully broken down to CO\u2082 + water, releasing much energy (38 ATP). Anaerobic: no oxygen, glucose partly broken down - lactic acid in animals, ethanol + CO\u2082 in yeast - releasing far less energy.'),
])

fill('Biology', 'Variation, Selection & Evolution', quiz=[
 ('Variation is best defined as...', ['the differences between individuals of the same species', 'differences between species only', 'changes within one lifetime', 'mutations in the lab'], 0,
  'No two people (except identical twins) are alike - variation is the raw material of evolution.'),
 ('Which is an example of continuous variation?', ['height', 'blood group', 'tongue rolling', 'sex'], 0,
  'Height ranges smoothly across a scale; blood group and tongue rolling fall into distinct categories (discontinuous).'),
 ('The two main sources of variation are...', ['mutation and sexual reproduction (meiosis and fertilisation)', 'growth and ageing', 'diet and exercise only', 'climate and season'], 0,
  'Mutations create new alleles; meiosis shuffles them, and fertilisation combines two sets.'),
 ('Darwin\u2019s theory of natural selection is often summarised as...', ['survival of the fittest', 'use and disuse', 'inheritance of acquired characters', 'spontaneous generation'], 0,
  'The best-adapted individuals survive and breed, passing on their advantageous genes.'),
 ('In natural selection, overproduction of offspring leads to...', ['competition, in which the best-adapted survive', 'equality for all offspring', 'instant evolution', 'no change'], 0,
  'More are born than the environment can support, so only the fittest reach breeding age.'),
 ('Which is evidence for evolution?', ['fossils, homologous structures and embryology', 'weather patterns', 'tidal movements', 'seasonal migration only'], 0,
  'Fossils show changing life over time; shared bone plans and embryonic similarities point to common ancestry.'),
 ('The peppered moth is a classic example of...', ['industrial melanism - natural selection in action', 'artificial selection', 'migration', 'mutation pressure'], 0,
  'Soot-blackened trees favoured dark moths; clean-air laws later swung the advantage back to the light form.'),
 ('Antibiotic resistance in bacteria demonstrates...', ['natural selection happening before our eyes', 'acquired characteristics', 'use and disuse', 'random luck only'], 0,
  'Resistant mutants survive the drug and multiply - selection favouring the resistant strain.'),
 ('A mutation is a change in...', ['the genes (DNA) of an organism', 'the environment', 'the habitat', 'the food supply'], 0,
  'Mutations alter DNA; most are harmless or harmful, but occasionally one gives an advantage that selection can spread.'),
 ('Homologous structures such as the human arm and bat wing suggest...', ['common ancestry', 'identical function', 'recent mutation', 'no relationship'], 0,
  'The same basic bone plan adapted to different jobs points to descent from a shared ancestor.'),
], cards=[
 ('Distinguish continuous from discontinuous variation.',
  'Continuous: a smooth range of values with no distinct categories - height, weight, skin colour (controlled by many genes). Discontinuous: distinct categories with nothing in between - blood groups, sex, tongue rolling (usually single genes).'),
 ('Outline Darwin\u2019s theory of natural selection.',
  'Organisms overproduce offspring \u2192 variation exists among them \u2192 resources are limited, so there is a struggle for survival \u2192 the best-adapted survive and reproduce \u2192 their advantageous genes become more common over generations - the population evolves.'),
 ('Give three lines of evidence for evolution.',
  'Fossils: simpler organisms in older rocks, showing change over time. Homologous structures: the same bone plan in arms, wings and flippers - common ancestry. Embryology: vertebrate embryos share early features (gill slits, tails) before diverging.'),
])

open(CUR, 'w').write(s)
print('chem+bio done; chars:', len(s))
