"""JSS quiz upgrade A: Mathematics (7 topics) + Basic Science (9 topics), 10 -> 15 Qs."""
import re
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()
def esc(t): return t.replace("\\", "\\\\").replace("'", "\\'")

def Q(q, o, c, e):
    return "{ q: '%s', options: ['%s', '%s', '%s', '%s'], correct: %d, exp: '%s' }," % (
        esc(q), esc(o[0]), esc(o[1]), esc(o[2]), esc(o[3]), c, esc(e))

QUIZ = {
 'Whole Numbers, Place Value & Estimation': [
  ("Write 3,004,056 in words.", ['Three million, four thousand and fifty-six', 'Three million, four hundred and fifty-six', 'Thirty million, four thousand and fifty-six', 'Three billion, forty thousand, five hundred and six'], 0, 'The zeros are placeholders: 3,004,056 = 3 millions, 0 hundred-thousands, 0 ten-thousands, 4 thousands, 0 hundreds, 5 tens, 6 units.'),
  ("Round 6,996 to the nearest hundred.", ['7,000', '6,900', '6,000', '7,100'], 0, 'The tens digit is 9 (5 or more), so the hundreds round up: 6,996 -> 7,000.'),
  ("Find the HCF and LCM of 18 and 24.", ['HCF 6, LCM 72', 'HCF 12, LCM 36', 'HCF 6, LCM 36', 'HCF 3, LCM 72'], 0, '18 = 2 x 3^2 and 24 = 2^3 x 3, so HCF = 2 x 3 = 6 and LCM = 2^3 x 3^2 = 72. Check: 6 x 72 = 432 = 18 x 24.'),
  ("Evaluate 2^3 + 3^2.", ['17', '13', '36', '12'], 0, '2^3 = 8 and 3^2 = 9, so 8 + 9 = 17 — evaluate powers (Orders in BODMAS) before adding.'),
  ("Which statement about prime numbers is correct?", ['2 is the smallest and the only even prime', '1 is the smallest prime', '9 is prime because 3 x 3 = 9', 'Every odd number is prime'], 0, 'A prime has exactly two factors. 1 has only one factor, so it is not prime; 2 is the smallest and only even prime; 9 = 3 x 3 has three factors.'),
 ],
 'Fractions & Decimals': [
  ("Convert 2 3/5 to an improper fraction.", ['13/5', '10/5', '6/5', '23/5'], 0, 'Multiply the whole number by the denominator and add the top: (2 x 5 + 3)/5 = 13/5.'),
  ("Work out 1/2 + 1/3 + 1/6.", ['1', '5/6', '3/6', '1 1/6'], 0, 'With denominator 6: 3/6 + 2/6 + 1/6 = 6/6 = 1.'),
  ("Express 0.04 as a fraction in its lowest terms.", ['1/25', '4/10', '1/40', '2/25'], 0, '0.04 = 4/100 = 1/25 after dividing top and bottom by 4.'),
  ("Calculate 2/3 x 3/4 x 8.", ['4', '6', '3', '16/9'], 0, '2/3 x 3/4 = 6/12 = 1/2, and 1/2 x 8 = 4 — cancelling early makes it faster.'),
  ("Which is greater: 7/9 or 5/6?", ['5/6', '7/9', 'They are equal', 'Cannot be compared'], 0, 'In eighteenths: 7/9 = 14/18 and 5/6 = 15/18, so 5/6 is greater — compare fractions with a common denominator.'),
 ],
 'Introduction to Algebra: Letters & Simple Equations': [
  ("Simplify 5x + 2y - 3x + 4y.", ['2x + 6y', '8x + 6y', '2x - 2y', '14xy'], 0, 'Collect like terms: (5x - 3x) + (2y + 4y) = 2x + 6y — unlike letters cannot be added together.'),
  ("If 4m - 5 = 11, find m.", ['4', '1.5', '6', '16'], 0, '4m = 11 + 5 = 16, so m = 16/4 = 4. Check: 4(4) - 5 = 11.'),
  ("Write in algebra: 'Three times a number n, decreased by 7'.", ['3n - 7', '3(n - 7)', '7 - 3n', 'n/3 - 7'], 0, "'Three times n' is 3n and 'decreased by 7' subtracts 7, giving 3n - 7; the bracket form 3(n - 7) would triple the whole."),
  ("Evaluate x^2 + 2x when x = 3.", ['15', '9', '30', '12'], 0, '3^2 + 2(3) = 9 + 6 = 15 — square first, then multiply, then add (BODMAS).'),
  ("Expand and simplify: 2(a + 4) + 3(a - 1).", ['5a + 5', '5a + 11', '6a + 5', '5a - 5'], 0, '2a + 8 + 3a - 3 = 5a + 5.'),
 ],
 'Angles & Plane Figures': [
  ("Find each interior angle of a regular hexagon.", ['120 deg', '108 deg', '135 deg', '90 deg'], 0, 'Sum of interior angles = (6 - 2) x 180 = 720 deg; each angle = 720/6 = 120 deg.'),
  ("Two angles lie on a straight line. One is 115 deg. Find the other.", ['65 deg', '75 deg', '55 deg', '245 deg'], 0, 'Angles on a straight line sum to 180 deg: 180 - 115 = 65 deg.'),
  ("The angles of a triangle are x, 2x and 60 deg. Find x.", ['40 deg', '60 deg', '30 deg', '45 deg'], 0, 'x + 2x + 60 = 180, so 3x = 120 and x = 40 deg (the angles are 40, 80 and 60).'),
  ("A quadrilateral with exactly one pair of parallel sides is a...", ['trapezium', 'parallelogram', 'rhombus', 'rectangle'], 0, 'A trapezium has exactly one pair of parallel sides; parallelograms (including rhombus and rectangle) have two pairs.'),
  ("Two straight lines cross and one of the vertically opposite angles is 72 deg. What is its vertically opposite angle?", ['72 deg', '108 deg', '18 deg', '144 deg'], 0, 'Vertically opposite angles are always equal, so it is also 72 deg (the angles beside it are 108 deg).'),
 ],
 'Ratio, Proportion & Percentages': [
  ("Share 72 in the ratio 4 : 5.", ['32 and 40', '36 and 36', '28 and 44', '40 and 32'], 0, 'Total parts = 9, one part = 8: 4 x 8 = 32 and 5 x 8 = 40 — the larger share matches the larger ratio number.'),
  ("If 6 pens cost ₦900, what is the cost of 10 pens?", ['₦1,500', '₦1,200', '₦1,600', '₦5,400'], 0, 'One pen = 900/6 = ₦150, so 10 pens = ₦1,500 (unitary method).'),
  ("Express 45 minutes as a percentage of 3 hours.", ['25%', '15%', '45%', '75%'], 0, '3 hours = 180 minutes, so 45/180 x 100 = 25% — always convert to the same unit first.'),
  ("A price falls from ₦2,000 to ₦1,700. Find the percentage decrease.", ['15%', '30%', '17%', '85%'], 0, 'Decrease = ₦300; 300/2000 x 100 = 15% — divide by the ORIGINAL price.'),
  ("Convert 5/8 to a percentage.", ['62.5%', '58%', '52.5%', '80%'], 0, '5/8 = 0.625 = 62.5% — divide top by bottom, then multiply by 100.'),
 ],
 'Simple Equations & Directed Numbers': [
  ("Evaluate (-8) + 3 + (-5).", ['-10', '-6', '10', '0'], 0, 'Add the negatives first: -8 + (-5) = -13, then -13 + 3 = -10.'),
  ("Solve 7 - x = 10.", ['x = -3', 'x = 3', 'x = 17', 'x = -17'], 0, 'Subtract 7 from both sides: -x = 3, so x = -3. Check: 7 - (-3) = 7 + 3 = 10.'),
  ("Evaluate (-6) x 7 and (-6) x (-7).", ['-42 and 42', '42 and 42', '-42 and -42', '42 and -42'], 0, 'Unlike signs give a negative product (-42); like signs give a positive product (+42).'),
  ("Solve 2(x + 4) = 3x - 1.", ['x = 9', 'x = 7', 'x = -9', 'x = 3'], 0, 'Expand: 2x + 8 = 3x - 1; subtract 2x from both sides: 8 = x - 1; so x = 9. Check: 2(13) = 26 = 27 - 1.'),
  ("A submarine at 45 m below sea level rises 18 m. What is its new depth?", ['-27 m', '-63 m', '27 m', '-18 m'], 0, 'Below sea level is negative: -45 + 18 = -27 m — it is still 27 m below the surface.'),
 ],
 'Business Mathematics: Profit, Loss, Discount & Interest': [
  ("A phone bought for ₦12,000 is sold at 15% profit. Find the selling price.", ['₦13,800', '₦13,500', '₦14,000', '₦12,150'], 0, 'Profit = 15% of 12,000 = ₦1,800; selling price = 12,000 + 1,800 = ₦13,800.'),
  ("In how many years will ₦8,000 earn ₦1,200 simple interest at 5% per annum?", ['3 years', '2 years', '4 years', '5 years'], 0, 'T = 100I/(PR) = (100 x 1200)/(8000 x 5) = 120,000/40,000 = 3 years.'),
  ("A discount of ₦675 is given on a ₦4,500 bag. Find the discount percentage.", ['15%', '12%', '20%', '25%'], 0, '675/4500 x 100 = 15% — discount is measured on the marked price.'),
  ("Find the amount on ₦20,000 invested at 10% per annum compound interest for 2 years.", ['₦24,200', '₦24,000', '₦22,000', '₦44,000'], 0, 'A = 20,000 x 1.1 x 1.1 = ₦24,200 — the ₦200 above simple interest (₦24,000) is interest earned on the first year of interest.'),
  ("A trader bought goods for ₦9,000 and sold them for ₦7,650. Find the loss percentage.", ['15%', '13.5%', '85%', '20%'], 0, 'Loss = ₦1,350; loss% = 1350/9000 x 100 = 15% — loss percentage is on the cost price.'),
 ],
 'Living Things & Health': [
  ("A motor car moves and uses oxygen, yet it is not alive. Which reason best explains this?", ['It cannot grow or reproduce', 'It cannot move fast', 'It has no colour', 'It makes noise'], 0, 'Living things show ALL the life processes — growth, reproduction, nutrition, excretion and sensitivity — which a car never does.'),
  ("Kwashiorkor in children is caused by a lack of...", ['protein', 'carbohydrate', 'fat', 'water'], 0, 'Kwashiorkor is the protein-deficiency disease (swollen belly, poor growth); marasmus comes from severe lack of all food.'),
  ("What is the basic structural and functional unit of all living things?", ['The cell', 'The tissue', 'The organ', 'The blood'], 0, 'Every living thing is made of cells — Amoeba is a single cell doing everything, while humans have trillions of specialised cells.'),
  ("Malaria is transmitted by... and can be prevented by...", ['the female Anopheles mosquito; sleeping under treated nets', 'dirty water; boiling drinking water', 'the air; wearing face masks', 'rats; storing food well'], 0, 'The female Anopheles mosquito carries the parasite; treated nets, clearing stagnant water and window screens prevent bites.'),
  ("Which food class is needed mainly for growth and repair of body tissues?", ['Proteins', 'Carbohydrates', 'Fats', 'Roughage'], 0, 'Proteins (beans, fish, eggs, meat) build and repair tissues; carbohydrates mainly supply energy.'),
 ],
 'Energy: Forms & Sources': [
  ("The energy stored in food, petrol and a dry cell is...", ['chemical energy', 'kinetic energy', 'heat energy', 'solar energy'], 0, 'Foods, fuels and batteries store chemical energy, released when they burn, are digested, or react in a circuit.'),
  ("What is the main energy conversion in a solar panel?", ['Light to electrical', 'Electrical to light', 'Heat to kinetic', 'Chemical to electrical'], 0, 'A solar (photovoltaic) panel converts sunlight directly into electrical energy.'),
  ("Water held behind a dam has... energy, which becomes... as it falls.", ['potential; kinetic', 'kinetic; potential', 'chemical; light', 'sound; heat'], 0, 'Stored height gives gravitational potential energy; falling water turns it into kinetic energy that spins the turbines.'),
  ("Which of these energy sources is renewable?", ['Sunlight', 'Coal', 'Petroleum', 'Natural gas'], 0, 'Sunlight never runs out; coal, petroleum and natural gas are fossil fuels that took millions of years to form.'),
  ("State the law of conservation of energy.", ['Energy can only change form — never created or destroyed', 'Energy keeps increasing forever', 'Energy can be created from nothing', 'All energy ends up as light'], 0, 'The total energy stays constant — it only transforms, e.g. chemical -> electrical -> light in a torch (with some heat lost).'),
 ],
 'Introduction to Science: Measurement & Laboratory Safety': [
  ("What is the SI unit of temperature?", ['Kelvin', 'Degrees Celsius', 'Joule', 'Calorie'], 0, 'The kelvin (K) is the SI base unit; degrees Celsius is the everyday scale (0 degC = 273 K).'),
  ("Which instrument is best for measuring the internal diameter of a test tube?", ['Vernier caliper', 'Metre rule', 'Measuring tape', 'Spring balance'], 0, 'A vernier caliper measures internal diameters accurately to 0.01 cm; a rule cannot reach inside precisely.'),
  ("Convert 2.5 kg to grams and 3 hours to seconds.", ['2,500 g and 10,800 s', '250 g and 1,080 s', '2,500 g and 180 s', '25,000 g and 10,800 s'], 0, '1 kg = 1000 g, so 2.5 kg = 2,500 g; 1 hour = 3600 s, so 3 hours = 10,800 s.'),
  ("A chemical splashes onto your hand during an experiment. What should you do first?", ['Wash with plenty of running water and report to the teacher', 'Wipe it with your sleeve', 'Apply cream immediately', 'Wait and see if it hurts'], 0, 'Flush the chemical off at once with lots of clean running water, then report — fast washing limits the damage.'),
  ("Why must chemicals never be tasted in the laboratory?", ['Many are poisonous or corrosive', 'It spoils the chemical', 'It is considered rude', 'Chemicals have no taste'], 0, 'Even small amounts can burn the mouth or poison the body — substances are identified with safe tests, never by tasting.'),
 ],
 'Matter, Its Properties & Changes': [
  ("Which state of matter is easily compressed, and why?", ['Gas — its particles are far apart', 'Solid — it is hard', 'Liquid — it flows', 'None can be compressed'], 0, 'Gas particles have wide spaces between them so they can be pushed closer; solid and liquid particles are already touching.'),
  ("Camphor (eka) changes directly from solid to vapour on heating. This change is called...", ['sublimation', 'evaporation', 'melting', 'condensation'], 0, 'Sublimation is solid -> gas without becoming liquid first; iodine and ammonium chloride also sublime.'),
  ("Which is a chemical change: candle wax melting, or the candle wick burning?", ['The wick burning', 'The wax melting', 'Both of them', 'Neither of them'], 0, 'Burning makes new substances (ash, smoke, gases) and cannot be reversed; melting wax is only a change of state.'),
  ("Which property makes copper suitable for electrical wires?", ['It is ductile and conducts electricity well', 'It is very heavy', 'It is magnetic', 'It dissolves in water'], 0, 'Ductility lets copper be drawn into thin wires, and its excellent conductivity carries current with little loss.'),
  ("Name the best methods to separate (a) sand from water and (b) salt from salt solution.", ['(a) Filtration, (b) Evaporation', '(a) Evaporation, (b) Filtration', '(a) Decantation, (b) Magnet', '(a) Sieving, (b) Filtration'], 0, 'Filtration traps the insoluble sand; evaporating the water leaves the dissolved salt behind.'),
 ],
 'Acids, Bases & Salts in Everyday Life': [
  ("Blue litmus paper is dipped into orange juice. What colour does it turn?", ['Red', 'Blue', 'Green', 'Yellow'], 0, 'Orange juice contains citric acid, and acids turn blue litmus red.'),
  ("What is the pH of a neutral solution such as pure water?", ['7', '0', '14', '1'], 0, 'The pH scale runs 0-14: below 7 acidic, exactly 7 neutral, above 7 alkaline.'),
  ("Milk of magnesia relieves stomach pain because it...", ['neutralises excess stomach acid', 'adds more acid to the stomach', 'kills all stomach bacteria', 'cools the stomach down'], 0, 'It is a mild base that neutralises excess hydrochloric acid, forming a harmless salt and water.'),
  ("Which two gases in polluted air cause acid rain?", ['Sulphur dioxide and nitrogen oxides', 'Oxygen and hydrogen', 'Carbon dioxide and helium', 'Chlorine and ammonia'], 0, 'SO2 and nitrogen oxides from factories and vehicles dissolve in rainwater to form weak acids that fall as acid rain.'),
  ("Which household substance is alkaline: soap solution or vinegar?", ['Soap solution', 'Vinegar', 'Both are alkaline', 'Neither is alkaline'], 0, 'Soap solution is basic (slippery feel, turns red litmus blue); vinegar contains ethanoic acid.'),
 ],
 'Energy: Forms, Transformation & Simple Machines': [
  ("A crowbar used to lift a stone is which class of lever?", ['First class', 'Second class', 'Third class', 'Not a lever'], 0, 'The pivot lies between the effort and the load — the signature of a first-class lever, like scissors and a see-saw.'),
  ("A bottle opener is which class of lever?", ['Second class', 'First class', 'Third class', 'A pulley'], 0, 'The load (the bottle cap) sits between the pivot and the effort — a second-class lever, like a wheelbarrow.'),
  ("A microphone converts sound energy mainly into...", ['electrical energy', 'light energy', 'kinetic energy', 'chemical energy'], 0, 'Sound vibrations become changing electrical signals that can be amplified and recorded.'),
  ("Why are ball bearings fitted inside machines?", ['To reduce friction between moving parts', 'To add weight', 'To make machines louder', 'To store energy'], 0, 'Ball bearings replace sliding friction with rolling friction, so parts turn smoothly with less wear and heat.'),
  ("A machine uses 200 J of energy and delivers 150 J of useful work. Find its efficiency.", ['75%', '25%', '150%', '66%'], 0, 'Efficiency = useful output/input x 100 = 150/200 x 100 = 75% — the rest is wasted, mostly as heat from friction.'),
 ],
 'Human Body Systems': [
  ("Which blood vessels carry blood away from the heart?", ['Arteries', 'Veins', 'Capillaries', 'Nerves'], 0, 'Arteries carry blood away from the heart (usually oxygen-rich); veins bring it back; capillaries are the tiny exchange vessels.'),
  ("Where is digested food absorbed into the blood?", ['The small intestine', 'The stomach', 'The large intestine', 'The oesophagus'], 0, 'The small intestine, lined with finger-like villi, absorbs the digested food into the bloodstream.'),
  ("Which organ filters the blood to form urine?", ['The kidney', 'The liver', 'The heart', 'The lung'], 0, 'The kidneys filter wastes (especially urea) and excess water from the blood to form urine.'),
  ("Which teeth are used mainly for grinding food?", ['Molars and premolars', 'Incisors', 'Canines', 'Wisdom teeth only'], 0, 'Molars and premolars have broad surfaces for grinding; incisors cut and canines tear.'),
  ("Which part of the brain controls balance and muscular coordination?", ['The cerebellum', 'The cerebrum', 'The medulla oblongata', 'The spinal cord'], 0, 'The cerebellum coordinates movement and balance — alcohol affects it first, which is why drunk people stagger.'),
 ],
 'Reproduction, Growth & Drug Abuse': [
  ("Where does fertilisation normally take place in humans?", ['In the fallopian tube (oviduct)', 'In the uterus', 'In the ovary', 'In the vagina'], 0, 'The sperm meets and fertilises the egg in the fallopian tube; the zygote then implants in the uterus.'),
  ("Name the male and female gametes.", ['Sperm and egg (ovum)', 'Testis and ovary', 'Uterus and womb', 'Sperm and uterus'], 0, 'Gametes are the sex cells: the sperm from the testes and the egg (ovum) from the ovary.'),
  ("State two changes that occur in girls during puberty.", ['Breast development and the start of menstruation', 'Voice deepening and beard growth', 'Growth of the Adam apple', 'Broadening of the shoulders only'], 0, 'Girls develop breasts, begin menstruating and hips widen; voice deepening and beards are male changes.'),
  ("Give one health effect and one social effect of drug abuse.", ['Liver or brain damage; crime and family breakdown', 'Better memory; more friends', 'Stronger body; popularity', 'None at all'], 0, 'Drug abuse damages organs and the mind (addiction, mental illness) and destroys relationships, schooling and careers.'),
  ("HIV can be transmitted by... but NOT by...", ['unprotected sex and infected blood; hugging or sharing plates', 'hugging; unprotected sex', 'mosquito bites; transfusion', 'sharing plates; infected needles'], 0, 'HIV spreads through unprotected sex, infected blood/needles and mother-to-child — never through hugging, sharing food or mosquito bites.'),
 ],
 'Light, Sound & Basic Electricity': [
  ("Why can we see objects that do not give out their own light?", ['They reflect light into our eyes', 'They produce light at night', 'Our eyes send out rays', 'They are always white'], 0, 'Non-luminous objects are seen because they reflect light from a source (the Sun, a lamp) into our eyes.'),
  ("An echo is caused by the... of sound.", ['reflection', 'refraction', 'absorption', 'diffraction'], 0, 'An echo is sound reflected off a hard surface back to the listener — soft surfaces absorb sound instead.'),
  ("What kind of image does a plane mirror form?", ['Virtual, upright, same size, laterally inverted', 'Real and upside down', 'Always magnified', 'Always smaller'], 0, 'A plane mirror gives a virtual image that is upright, the same size, and laterally inverted (left and right swapped).'),
  ("Which material will complete an electric circuit: copper wire or rubber band?", ['Copper wire', 'Rubber band', 'Both', 'Neither'], 0, 'Copper is a conductor (free electrons carry the current); rubber is an insulator and blocks the flow.'),
  ("What device protects a circuit by melting when the current becomes too high?", ['A fuse', 'A switch', 'A battery', 'A bulb'], 0, 'The fuse wire heats and melts on excess current, breaking the circuit before cables overheat — a circuit breaker does the same job by tripping.'),
 ],
}

ins = 0
for title, qs in QUIZ.items():
    assert len(qs) == 5, title
    m = re.findall(r"\n(\s*)title: '" + re.escape(title) + r"',", s)
    assert len(m) == 1, ('anchor', title, len(m))
    ind = m[0]
    pos = s.index("\n" + ind + "title: '" + title + "',")
    j = s.index('quiz: [', pos)
    k = s.index('\n', j) + 1
    body = ''.join(ind + '  ' + Q(*q) + '\n' for q in qs)
    s = s[:k] + body + s[k:]
    ins += len(qs)

open(PATH, 'w', encoding='utf-8').write(s)
print('JSS quiz A: inserted', ins, 'questions (Maths + Basic Science)')
