"""Flashcards batch 2: Chemistry to 15 cards per topic."""
import re
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()
def esc(t): return t.replace("\\", "\\\\").replace("'", "\\'")

# (number needed to reach 15, cards)
CARDS = {
 'Atomic Structure & the Periodic Table': (12, [
  ("Name the three subatomic particles with their charges and locations.", "Proton (+1, in the nucleus), neutron (no charge, in the nucleus) and electron (-1, moving in shells around the nucleus)."),
  ("What is the difference between atomic number and mass number?", "Atomic number (Z) is the number of protons; mass number (A) is protons + neutrons. E.g. sodium-23 has Z = 11 and A = 23."),
  ("Define isotopes and give one example.", "Isotopes are atoms of the same element with the same atomic number but different mass numbers — e.g. chlorine-35 and chlorine-37, or carbon-12 and carbon-14."),
  ("Write the electronic configuration of sodium (Na, Z = 11).", "2, 8, 1 — two electrons in the first shell, eight in the second and one valence electron in the third, which is why sodium forms Na+ ions."),
  ("What is the difference between a period and a group in the periodic table?", "A period is a horizontal row (elements have the same number of shells); a group is a vertical column (elements have the same number of valence electrons and similar chemistry)."),
  ("Where are metals, non-metals and metalloids found in the periodic table?", "Metals occupy the left and centre, non-metals the right-hand side, and metalloids (e.g. silicon) form a staircase boundary between them."),
  ("State three properties of the Group I alkali metals.", "They are soft (cut with a knife), have low densities (lithium floats on water) and react increasingly vigorously with water down the group, giving an alkaline solution and hydrogen."),
  ("Why are the noble gases (Group 0) unreactive?", "Their outermost electron shells are completely full, so they neither gain, lose nor share electrons under ordinary conditions."),
  ("What determines the chemical properties of an element?", "The number of valence (outermost shell) electrons — elements in the same group have the same valence electrons, so they behave similarly."),
  ("What did Rutherford's gold-foil experiment prove?", "That the atom has a tiny, dense, positively charged nucleus (most alpha particles passed straight through, but a few were deflected back)."),
  ("How many electrons can the first, second and third shells hold?", "First shell: 2; second shell: 8; third shell: 8 (for the first twenty elements) — filled from the innermost shell outwards."),
  ("An atom has 17 protons and 18 neutrons. Give its atomic number, mass number and the ion it forms.", "Atomic number 17, mass number 35 (chlorine-35). It gains one electron to complete its outer shell, forming the chloride ion Cl-.")
 ]),
 'Chemical Bonding': (12, [
  ("What is an electrovalent (ionic) bond? Give an example.", "A bond formed by the complete transfer of electrons from a metal to a non-metal, producing oppositely charged ions that attract — e.g. sodium chloride, where Na loses one electron to Cl."),
  ("What is a covalent bond? Give an example.", "A bond formed by the sharing of electron pairs between non-metal atoms — e.g. in a water molecule, oxygen shares electrons with two hydrogen atoms."),
  ("State three physical properties of ionic compounds.", "High melting and boiling points; they conduct electricity when molten or in solution (mobile ions); most are soluble in water and form crystalline solids."),
  ("Why do covalent compounds generally have low melting points?", "The covalent bonds hold the atoms together inside each molecule, but only weak intermolecular forces hold the molecules to each other, so little energy separates them."),
  ("Why does sodium chloride conduct electricity in solution but not as a solid?", "In solution (or molten) the ions are free to move and carry charge; in the solid the ions are locked in a rigid crystal lattice and cannot move."),
  ("What is a coordinate (dative covalent) bond?", "A covalent bond in which both shared electrons come from one atom alone — e.g. the fourth N-H bond in the ammonium ion NH4+."),
  ("Explain metallic bonding and the properties it explains.", "Metal atoms release their valence electrons into a shared 'sea' of mobile electrons that glues the positive ions together — this explains electrical conductivity, malleability and ductility."),
  ("What is a hydrogen bond?", "A weak attraction between a hydrogen atom bonded to N, O or F in one molecule and a lone pair on N, O or F in another — it gives water its unusually high boiling point."),
  ("How does electronegativity difference predict bond type?", "A large difference (metal + non-metal) gives an ionic bond; a small or zero difference (non-metal + non-metal) gives a covalent bond."),
  ("Draw-style question: how many shared pairs are in O2, N2 and Cl2?", "O2 shares two pairs (a double bond), N2 shares three pairs (a triple bond), and Cl2 shares one pair (a single bond)."),
  ("Why is diamond hard while graphite is soft, though both are carbon?", "In diamond each carbon is covalently bonded to four others in a rigid 3-D giant lattice; in graphite the carbons form flat layers that slide over one another."),
  ("What type of bonding and structure does silicon(IV) oxide (sand) have?", "A giant covalent (macromolecular) structure — each silicon is covalently bonded to four oxygens, giving a very hard substance with a high melting point.")
 ]),
 'Separation Techniques & States of Matter': (12, [
  ("Which method separates an insoluble solid from a liquid?", "Filtration — the residue stays on the filter paper while the filtrate passes through, e.g. separating sand from water."),
  ("When would you use fractional distillation instead of simple distillation?", "To separate miscible liquids with close boiling points, such as ethanol and water or the fractions of crude oil; simple distillation suits a solid dissolved in a liquid or widely different boiling points."),
  ("Which separation method relies on a solid changing directly to vapour?", "Sublimation — iodine, ammonium chloride and camphor sublime on gentle heating, leaving non-subliming impurities behind."),
  ("How does paper chromatography separate a mixture of dyes?", "A solvent rises up the paper carrying the dyes; different dyes travel at different speeds (different solubilities and attractions to the paper), so they separate into spots."),
  ("Name the best method to separate: (a) oil and water, (b) iron filings and sulphur, (c) salt from sea water.", "(a) Separating funnel (immiscible liquids); (b) a magnet (iron is magnetic); (c) evaporation or crystallisation."),
  ("Describe the arrangement and motion of particles in solids, liquids and gases.", "Solid: particles close together in a fixed pattern, only vibrating. Liquid: particles close but free to slide past each other. Gas: particles far apart, moving rapidly in all directions."),
  ("What is diffusion? Give one everyday example.", "Diffusion is the movement of particles from a region of higher concentration to lower concentration until evenly spread — e.g. the smell of perfume spreading across a room."),
  ("What does Brownian motion tell us about matter?", "The random zigzag motion of smoke or pollen particles (bumped by invisible moving molecules) is evidence that matter is made of tiny particles in constant motion."),
  ("Name the changes of state: solid to liquid, liquid to gas, gas to liquid, solid to gas.", "Melting (fusion), boiling/evaporation, condensation, and sublimation respectively."),
  ("How can you test whether a substance is pure using physical properties?", "A pure substance melts and boils at sharp, fixed temperatures; impurities lower the melting point and raise the boiling point over a range."),
  ("Why does evaporation cool a liquid?", "The fastest (most energetic) molecules escape from the surface, so the average kinetic energy — and therefore the temperature — of the remaining liquid falls."),
  ("How would you obtain pure copper(II) sulphate crystals from its solution?", "By crystallisation: gently evaporate the solution to saturation, cool it so crystals form, then filter and dry the crystals between filter papers.")
 ]),
 'Acids, Bases & Salts (with pH)': (12, [
  ("Define an acid in terms of ions.", "An acid is a substance that ionises in water to produce hydrogen ions (H+, present as H3O+) as the only positive ion — e.g. HCl, H2SO4, HNO3."),
  ("What is the difference between a base and an alkali?", "A base neutralises an acid to give salt and water only; an alkali is a base that is soluble in water and releases OH- ions, e.g. NaOH."),
  ("What does the pH scale measure, and what do values 2, 7 and 12 indicate?", "pH measures how acidic or alkaline a solution is from 0 to 14: pH 2 is strongly acidic, pH 7 is neutral, and pH 12 is strongly alkaline."),
  ("Give the colour changes of litmus, methyl orange and phenolphthalein in acid and in alkali.", "Litmus: red in acid, blue in alkali. Methyl orange: red in acid, yellow in alkali. Phenolphthalein: colourless in acid, pink in alkali."),
  ("Write the general equation for neutralisation.", "Acid + base -> salt + water; e.g. HCl + NaOH -> NaCl + H2O."),
  ("What gas is produced when an acid reacts with (a) a reactive metal, (b) a carbonate?", "(a) Hydrogen — it gives a 'pop' with a lighted splint. (b) Carbon dioxide — it turns limewater milky."),
  ("What is the basicity of an acid? Give examples.", "Basicity is the number of replaceable hydrogen ions per molecule: HCl is monobasic (1), H2SO4 is dibasic (2), H3PO4 is tribasic (3)."),
  ("Distinguish between a strong acid and a weak acid.", "A strong acid ionises completely in water (HCl, H2SO4); a weak acid ionises only slightly (ethanoic acid, carbonic acid), so it reacts more slowly and conducts poorly."),
  ("Name four classes of salts with one example each.", "Normal salt (NaCl), acid salt (NaHSO4 — replaceable H remains), basic salt (basic copper carbonate), double salt (alum), and hydrated salts containing water of crystallisation (CuSO4.5H2O)."),
  ("How would you prepare a soluble salt by titration?", "Pipette the alkali (with indicator) into a conical flask, run in acid from the burette until the indicator just changes, note the volume, then repeat without indicator and evaporate/crystallise the neutral solution."),
  ("Explain deliquescent, efflorescent and hygroscopic substances.", "Deliquescent solids absorb so much water from air that they dissolve (CaCl2); efflorescent hydrated salts lose water of crystallisation to dry air (washing soda); hygroscopic substances absorb moisture without dissolving (conc. H2SO4 — a drying agent)."),
  ("State two industrial or everyday uses of sulphuric acid and hydrochloric acid.", "Sulphuric acid: car batteries, fertiliser manufacture, making detergents. Hydrochloric acid: pickling (cleaning) steel, laboratory reagent, and it is the acid in gastric juice.")
 ]),
 'Hydrocarbons & Organic Chemistry Basics': (12, [
  ("What is a hydrocarbon?", "An organic compound containing only carbon and hydrogen — e.g. methane, ethane, ethene and benzene."),
  ("Give the general formula of alkanes and name the first three members.", "CnH2n+2 — methane (CH4), ethane (C2H6), propane (C3H8). Alkanes are saturated: they contain only single bonds."),
  ("How do you distinguish an alkane from an alkene chemically?", "Add bromine water: an alkene (with a C=C double bond) decolorises it immediately by addition; an alkane does not (except slowly in sunlight). Acidified KMnO4 is also decolorised by alkenes."),
  ("What is a homologous series? State two of its features.", "A family of compounds with the same general formula, differing by CH2, with the same functional group and gradually changing physical properties — e.g. the alkanes or alkanols."),
  ("Why is crude oil separated by fractional distillation, and name four fractions.", "Its components have different boiling points. Fractions from top to bottom of the column include refinery gas, petrol (gasoline), kerosene, diesel (gas oil), lubricating oil and bitumen."),
  ("What is cracking, and why is it important?", "Cracking breaks long-chain hydrocarbons into shorter, more useful ones (often alkanes + alkenes) by heat and a catalyst — it boosts petrol supply and produces ethene for plastics."),
  ("Write the products of complete and incomplete combustion of a hydrocarbon.", "Complete: hydrocarbon + O2 -> CO2 + H2O (+ heat). Incomplete (limited air): carbon monoxide (poisonous) and/or soot (carbon) plus water."),
  ("What is isomerism? Give an example.", "Isomers have the same molecular formula but different structural formulae — butane (a straight chain) and 2-methylpropane (branched) are both C4H10."),
  ("What type of reaction do alkanes and alkenes typically undergo?", "Alkanes: substitution — e.g. methane + chlorine in UV light gives chloromethane + HCl. Alkenes: addition across the double bond — e.g. ethene + bromine gives 1,2-dibromoethane."),
  ("Name the functional groups of alkanols and alkanoic acids with one example each.", "Alkanols have the -OH group (ethanol, C2H5OH); alkanoic acids have the -COOH group (ethanoic acid, CH3COOH)."),
  ("State two uses each of bitumen and ethene.", "Bitumen: surfacing roads and roofing felt. Ethene: making polythene plastics and artificially ripening fruit."),
  ("Why is carbon monoxide from incomplete combustion dangerous?", "It is a colourless, odourless gas that binds to haemoglobin far more strongly than oxygen, so the blood cannot carry oxygen — it causes suffocation and death.")
 ]),
 'Air, the Atmosphere & the Gas Laws': (12, [
  ("State the composition of clean dry air by volume.", "About 78% nitrogen, 21% oxygen, 0.9% noble gases (mainly argon), about 0.03-0.04% carbon dioxide, plus variable water vapour and dust."),
  ("Describe the classic experiment that shows air is about one-fifth oxygen.", "Burn phosphorus (or a candle) in a jar inverted over water: the flame uses up the oxygen and water rises to replace it, filling roughly one-fifth of the jar."),
  ("Give the standard tests for oxygen, carbon dioxide and hydrogen.", "Oxygen relights a glowing splint; carbon dioxide turns limewater milky; hydrogen 'squeaky pops' with a lighted splint."),
  ("State Boyle's law with its formula.", "At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure: P1V1 = P2V2."),
  ("State Charles' law with its formula.", "At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute (kelvin) temperature: V1/T1 = V2/T2."),
  ("What is meant by s.t.p., and what is the molar volume of a gas there?", "Standard temperature and pressure: 273 K (0 degC) and 760 mmHg (1 atm). One mole of any gas occupies 22.4 dm3 at s.t.p."),
  ("Solve: a gas occupies 400 cm3 at 700 mmHg. What volume at 760 mmHg (constant temperature)?", "P1V1 = P2V2, so V2 = 700 x 400 / 760 = about 368.4 cm3 — higher pressure gives a smaller volume."),
  ("Which gases cause acid rain, and what damage does it do?", "Sulphur(IV) oxide (SO2) and nitrogen oxides dissolve in rainwater to form acids that corrode metal roofs and statues, damage crops and make lakes acidic, killing fish."),
  ("State two conditions needed for rusting and three ways to prevent it.", "Rusting needs both air (oxygen) and water. Prevention: painting or greasing, galvanising (zinc coating), electroplating, and sacrificial protection."),
  ("Why is nitrogen useful despite being unreactive?", "It fills electric bulbs (prevents filament oxidation), stores food (chips packets), provides liquid nitrogen for freezing, and it is the raw material for ammonia and nitrogenous fertilisers."),
  ("Name two noble gases and a use of each.", "Neon: glowing advertising signs. Argon: filling electric bulbs. Helium: balloons and airships (it is lighter than air and non-flammable)."),
  ("Which greenhouse gases trap heat, and what is the consequence?", "Carbon dioxide and methane absorb re-radiated heat; rising levels from burning fuels intensify global warming, causing climate change and rising sea levels.")
 ]),
 'Redox Reactions & Electrolysis': (11, [
  ("Define oxidation and reduction in terms of (a) oxygen, (b) electrons, (c) oxidation number.", "Oxidation: gain of oxygen, loss of electrons, or increase in oxidation number. Reduction: loss of oxygen, gain of electrons, or decrease in oxidation number."),
  ("What is the difference between an oxidising agent and a reducing agent?", "An oxidising agent oxidises another substance and is itself reduced (gains electrons); a reducing agent reduces another substance and is itself oxidised (loses electrons)."),
  ("Work out the oxidation number of sulphur in H2SO4.", "Hydrogen is +1 (total +2), oxygen is -2 (total -8); the compound is neutral, so S = +6."),
  ("What is electrolysis?", "The decomposition of an electrolyte (molten or in solution) by the passage of a direct electric current, discharging ions at the electrodes."),
  ("Name the electrodes and say which ions go to which.", "Cathode: the negative electrode — cations (positive ions) migrate there and gain electrons. Anode: the positive electrode — anions migrate there and lose electrons."),
  ("State three factors that determine which ion is discharged.", "The position of the ion in the electrochemical (discharge) series, the concentration of the electrolyte, and the nature of the electrode."),
  ("What are the products of electrolysing dilute tetraoxosulphate(VI) acid with platinum electrodes?", "Hydrogen at the cathode and oxygen at the anode, in a 2:1 volume ratio — effectively the electrolysis of water."),
  ("Describe the electrolysis of molten sodium chloride.", "Na+ ions are discharged at the cathode to give molten sodium metal; Cl- ions are discharged at the anode to give chlorine gas."),
  ("Give two industrial applications of electrolysis.", "Electroplating (coating objects with a thin layer of a less reactive metal such as silver or chromium to resist corrosion and look attractive) and the electrolytic purification of copper; also extraction of reactive metals like aluminium."),
  ("State Faraday's first law of electrolysis with its formula.", "The mass of substance discharged at an electrode is directly proportional to the quantity of electricity passed: m = ZIt, where Z is the electrochemical equivalent."),
  ("How does a galvanic (voltaic) cell differ from an electrolytic cell?", "A galvanic cell converts chemical energy into electrical energy spontaneously (e.g. a simple cell of zinc and copper in acid); an electrolytic cell uses electrical energy to drive a non-spontaneous chemical change.")
 ]),
 'Rates of Reaction & Chemical Equilibrium': (12, [
  ("Define rate of reaction and name two ways of measuring it.", "Rate of reaction is the change in concentration of a reactant or product per unit time. It can be measured by the volume of gas evolved per second, loss in mass, or the time for a precipitate (turbidity) to appear."),
  ("State four factors that affect the rate of a reaction.", "Concentration (pressure for gases), temperature, surface area of solid reactants, and catalysts; light also drives photochemical reactions such as photography and photosynthesis."),
  ("Explain, using collision theory, why higher temperature speeds up reactions.", "Particles gain kinetic energy, move faster and collide more often, and a larger fraction of collisions has energy equal to or above the activation energy — so more effective collisions occur per second."),
  ("What is a catalyst?", "A substance that increases the rate of a reaction without being consumed — it provides an alternative pathway with a lower activation energy, e.g. manganese(IV) oxide for hydrogen peroxide decomposition."),
  ("What is meant by dynamic equilibrium?", "In a reversible reaction in a closed system, the state where the forward and backward reactions proceed at equal rates, so the concentrations of reactants and products stay constant (but the reactions have not stopped)."),
  ("State Le Chatelier's principle.", "If a system at equilibrium is disturbed (change of concentration, temperature or pressure), the equilibrium shifts in the direction that tends to counteract the change."),
  ("For the exothermic reaction N2 + 3H2 <-> 2NH3, what is the effect of raising the temperature?", "The equilibrium shifts backwards (the endothermic direction) to absorb the extra heat, so the yield of ammonia falls — industry compromises at about 450 degC for a reasonable rate."),
  ("Why does high pressure favour ammonia formation in the Haber process?", "There are 4 moles of gas on the left and only 2 on the right, so raising the pressure shifts the equilibrium to the side with fewer gas molecules — more ammonia."),
  ("Outline the conditions of the Haber process.", "Nitrogen (from air) + hydrogen (from natural gas) at about 450 degC, 200 atmospheres, with an iron catalyst; the ammonia is liquefied out so the reaction keeps shifting forward."),
  ("What is activation energy?", "The minimum energy that colliding particles must possess for a reaction to occur — the energy barrier between reactants and products."),
  ("Name a catalyst used in each of: the Contact process and the decomposition of H2O2.", "Vanadium(V) oxide (V2O5) in the Contact process (making sulphuric acid); manganese(IV) oxide for hydrogen peroxide."),
  ("Why does powdered calcium carbonate react faster with acid than lumps?", "The powder has a much greater surface area exposed to the acid, so more particles collide with acid per second — the reaction rate increases.")
 ]),
 'The Mole Concept & Stoichiometry': (12, [
  ("Define the mole and state Avogadro's constant.", "The mole is the amount of substance containing 6.02 x 10^23 particles (atoms, molecules or ions); that number is Avogadro's constant."),
  ("What is molar mass? Calculate the molar mass of H2SO4 (H=1, S=32, O=16).", "Molar mass is the mass of one mole of a substance in grams. H2SO4 = 2(1) + 32 + 4(16) = 98 g/mol."),
  ("Write the three key mole formulas.", "n = mass / molar mass; n = concentration x volume (mol/dm3 x dm3); and for gases at s.t.p., n = volume / 22.4 dm3."),
  ("How many moles are in 5.85 g of NaCl (Na=23, Cl=35.5)?", "Molar mass = 23 + 35.5 = 58.5 g/mol, so n = 5.85 / 58.5 = 0.1 mole — containing 0.1 x 6.02 x 10^23 = 6.02 x 10^22 formula units."),
  ("What volume does 0.25 mole of oxygen occupy at s.t.p.?", "V = n x 22.4 dm3 = 0.25 x 22.4 = 5.6 dm3 (5600 cm3)."),
  ("Using CaCO3 -> CaO + CO2, find the mass of CO2 from 25 g of CaCO3 (Ca=40, C=12, O=16).", "Molar masses: CaCO3 = 100, CO2 = 44. From 100 g CaCO3 you get 44 g CO2, so 25 g gives 25/100 x 44 = 11 g of carbon dioxide."),
  ("Distinguish between empirical and molecular formula.", "The empirical formula is the simplest whole-number ratio of atoms (CH2O for glucose); the molecular formula is the actual number (C6H12O6) — molecular = (empirical)n."),
  ("State Avogadro's law.", "Equal volumes of all gases, at the same temperature and pressure, contain the same number of molecules."),
  ("What is molar concentration, and what does the dilution formula say?", "Molar concentration is moles of solute per dm3 of solution (mol/dm3). On dilution, moles stay constant: C1V1 = C2V2."),
  ("Calculate the percentage by mass of nitrogen in urea, CO(NH2)2 (C=12, O=16, N=14, H=1).", "Molar mass = 12 + 16 + 2(14) + 4(1) = 60. Nitrogen contributes 28, so % N = 28/60 x 100 = 46.7%."),
  ("What is a limiting reactant?", "The reactant that is completely used up first — it fixes the maximum amount of product formed, while the other reactant remains in excess."),
  ("State Gay-Lussac's law of combining volumes with an example.", "Gases react in simple whole-number ratios by volume (same T and P): in 2H2 + O2 -> 2H2O, 2 volumes of hydrogen react with 1 volume of oxygen to give 2 volumes of steam.")
 ]),
 'Metals, Their Extraction & Their Compounds': (12, [
  ("State four physical properties typical of metals.", "They are lustrous (shiny), malleable (beaten into sheets), ductile (drawn into wires) and good conductors of heat and electricity, with generally high melting points."),
  ("Arrange these metals in order of decreasing reactivity: copper, potassium, zinc, gold, calcium.", "Potassium > calcium > zinc > copper > gold — reactivity falls down the electrochemical series."),
  ("What does a metal's position in the reactivity series decide?", "Its method of extraction and how it reacts: very reactive metals (K to Al) are extracted by electrolysis; moderately reactive ones (Zn to Pb) by reduction of their oxides with carbon or carbon(II) oxide; the least reactive (Cu and below) by simple heating/roasting."),
  ("Describe how iron is extracted in the blast furnace.", "Iron ore (haematite, Fe2O3), coke and limestone are fed in at the top; coke burns to give heat and CO, which reduces the ore: Fe2O3 + 3CO -> 2Fe + 3CO2; limestone removes impurities as slag, and molten iron collects at the bottom."),
  ("What is an alloy? Give two examples with their uses.", "An alloy is a mixture of a metal with other metals or non-metals: brass (copper + zinc) for fittings, bronze (copper + tin) for medals, steel (iron + carbon) for construction, duralumin (aluminium-based) for aircraft."),
  ("What is an amphoteric oxide? Give two examples.", "An oxide that reacts with both acids and bases to form salt and water — aluminium oxide (Al2O3) and zinc oxide (ZnO)."),
  ("Why is sodium stored under paraffin oil?", "Sodium is so reactive that it tarnishes in air and reacts violently with moisture, giving NaOH and hydrogen; kerosene/paraffin keeps air and water away."),
  ("Why is aluminium widely used for aircraft bodies and cooking pots?", "It has a low density (light), resists corrosion because of its protective oxide film, and duralumin (an aluminium alloy) is strong; it also conducts heat well for pots."),
  ("How does galvanising protect iron from rusting?", "The zinc coating keeps air and water off the iron, and even if scratched, zinc (being more reactive) corrodes preferentially — sacrificial protection."),
  ("Explain why most metal oxides are basic while non-metal oxides are acidic.", "Metal oxides react with acids to form salt and water (some dissolve to give alkalis, e.g. Na2O); non-metal oxides such as CO2 and SO2 dissolve in water to give acids (carbonic and trioxosulphate(IV) acids)."),
  ("State three uses of copper and the property behind each.", "Electrical wiring (excellent conductor and ductile), cooking pots (good heat conductor), and plumbing/roofing (resists corrosion); it is also alloyed as brass and bronze."),
  ("Why is tin used to line food cans, and what is the risk if the coating is scratched?", "Tin resists corrosion and is non-poisonous, so it protects the steel and the food; but tin is less reactive than iron, so a scratch lets the exposed iron rust faster — unlike galvanising, where zinc sacrifices itself.")
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
print('Chemistry: inserted', ins, 'cards')
