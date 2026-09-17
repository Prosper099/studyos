/* ==================================================================
   SS1 QUESTION EXPANSION
   Guarantees every SS1 student a pool of 50+ questions per subject
   from day one of senior school: these questions are appended to the
   existing SS1 topic quizzes (merged in curriculum.mjs). Authored to
   NERDC SS1 depth, plain-math notation, each with a worked reason.
   ================================================================== */
export const SS1_EXPANSION = {
  'Mathematics': {
    'Number Bases & Modular Arithmetic': [
      { q: 'Convert 1101 two to base ten.', options: ['13', '11', '15', '12'], correct: 0, exp: '1101 two = 8 + 4 + 0 + 1 = 13 in base ten.' },
      { q: 'Convert 25 ten to base two.', options: ['11001', '10101', '11010', '10011'], correct: 0, exp: '25 = 16 + 8 + 1, so the bits for 16, 8 and 1 are on: 11001 two.' },
      { q: 'In modulo 7, what is 5 + 4?', options: ['2', '9', '5', '4'], correct: 0, exp: '5 + 4 = 9, and 9 divided by 7 leaves remainder 2, so 5 + 4 = 2 (mod 7).' }
    ],
    'Indices, Logarithms & Surds': [
      { q: 'Evaluate 2^3 x 2^4.', options: ['128', '64', '256', '32'], correct: 0, exp: 'When multiplying powers with the same base, add the indices: 2^(3+4) = 2^7 = 128.' },
      { q: 'If log10 x = 2, find x.', options: ['100', '20', '2', '1000'], correct: 0, exp: 'log10 x = 2 means x = 10^2 = 100.' },
      { q: 'Simplify sqrt(50).', options: ['5sqrt(2)', '25sqrt(2)', '2sqrt(5)', '10sqrt(5)'], correct: 0, exp: 'sqrt(50) = sqrt(25 x 2) = sqrt(25) x sqrt(2) = 5sqrt(2).' }
    ],
    'Algebraic Expressions & Simple Equations': [
      { q: 'Solve for x: 3x - 7 = 14.', options: ['7', '3', '21', '-7'], correct: 0, exp: '3x = 14 + 7 = 21, so x = 21/3 = 7.' },
      { q: 'Expand (x + 5)(x - 2).', options: ['x^2 + 3x - 10', 'x^2 - 3x - 10', 'x^2 + 3x + 10', 'x^2 - 7x - 10'], correct: 0, exp: 'FOIL: x^2 - 2x + 5x - 10 = x^2 + 3x - 10.' }
    ],
    'Sets, Venn Diagrams & Logic': [
      { q: 'If A = {1, 2, 3, 4} and B = {3, 4, 5}, find A ∩ B.', options: ['{3, 4}', '{1, 2, 5}', '{1, 2, 3, 4, 5}', '{5}'], correct: 0, exp: 'The intersection holds the elements both sets share: 3 and 4.' },
      { q: 'How many subsets does a set with 3 elements have?', options: ['8', '6', '3', '9'], correct: 0, exp: 'A set with n elements has 2^n subsets; 2^3 = 8.' }
    ]
  },
  'English Language': {
    'Tenses & Subject–Verb Concord': [
      { q: 'Complete the sentence: Neither of the boys ___ present.', options: ['was', 'were', 'have been', 'are'], correct: 0, exp: 'Neither is singular, so it takes the singular verb was.' },
      { q: 'The team ___ playing well this season.', options: ['is', 'are', 'were', 'have been'], correct: 0, exp: 'A collective noun acting as one unit takes a singular verb: the team is.' },
      { q: 'Which sentence is in the past perfect tense?', options: ['She had eaten before we came.', 'She has eaten already.', 'She ate before we came.', 'She was eating before we came.'], correct: 0, exp: 'Past perfect is had + past participle: had eaten.' },
      { q: 'Bread and butter ___ my favourite breakfast.', options: ['is', 'are', 'were', 'have been'], correct: 0, exp: 'Bread and butter is treated as one idea, so the verb is singular.' },
      { q: 'Everyone ___ finished the assignment.', options: ['has', 'have', 'are', 'were'], correct: 0, exp: 'Everyone is singular and takes has.' },
      { q: 'By June, I ___ graduated.', options: ['will have', 'will', 'would', 'had'], correct: 0, exp: 'An action completed before a future time uses the future perfect: will have graduated.' },
      { q: 'The chairman, together with his aides, ___ arriving today.', options: ['is', 'are', 'were', 'have been'], correct: 0, exp: 'Phrases with together with do not change the subject; the chairman is singular.' }
    ],
    'Idioms & Figurative Language': [
      { q: 'My uncle visits us once in a blue moon. This means he visits...', options: ['very rarely', 'every month', 'at night', 'when it rains'], correct: 0, exp: 'Once in a blue moon means something happens very rarely.' },
      { q: 'To bite off more than you can chew means to...', options: ['take on more than you can handle', 'eat greedily', 'speak rudely', 'waste food'], correct: 0, exp: 'The idiom warns against taking on more work or responsibility than you can manage.' },
      { q: 'The exam was a piece of cake means the exam was...', options: ['very easy', 'about food', 'very hard', 'sweet'], correct: 0, exp: 'A piece of cake describes something very easy to do.' },
      { q: 'Let the cat out of the bag means to...', options: ['reveal a secret', 'free an animal', 'cause a fight', 'run away'], correct: 0, exp: 'To let the cat out of the bag is to reveal a secret, often by accident.' },
      { q: 'Break the ice means to...', options: ['start a conversation and ease tension', 'destroy something frozen', 'end a friendship', 'cool a drink'], correct: 0, exp: 'Breaking the ice means doing or saying something to relieve tension when people meet.' },
      { q: 'He is as busy as a bee. This expression is a...', options: ['simile', 'metaphor', 'personification', 'hyperbole'], correct: 0, exp: 'A comparison using as...as is a simile.' },
      { q: 'Ada is the lion of her class. This expression is a...', options: ['metaphor', 'simile', 'onomatopoeia', 'euphemism'], correct: 0, exp: 'Calling someone a lion directly, without like or as, is a metaphor.' }
    ],
    'Punctuation & Capitalisation': [
      { q: 'Which sentence uses the apostrophe correctly?', options: ['The boys\' bags are new.', 'The boys bags are new.', 'The boy\'s bags are new for all the boys.', 'The boys\'s bags are new.'], correct: 0, exp: 'For a plural owner ending in s, the apostrophe goes after the s: boys\'.' },
      { q: 'Which sentence is punctuated correctly?', options: ['However, he refused to go.', 'However he, refused to go.', 'However he refused, to go.', 'However he refused to, go.'], correct: 0, exp: 'A comma follows a connector like However at the start of a sentence.' },
      { q: 'Which sentence is written correctly?', options: ['We resume on Monday in September.', 'We resume on monday in september.', 'We Resume On Monday In September.', 'we resume on Monday in September.'], correct: 0, exp: 'Days and months are proper nouns and take capital letters; ordinary words mid-sentence do not.' },
      { q: 'Which sentence needs an exclamation mark at the end?', options: ['What a goal', 'Where is the ball', 'He kicked it', 'The match ended'], correct: 0, exp: 'Strong feeling - joy, shock, praise - is marked with an exclamation mark: What a goal!' },
      { q: 'Which mark introduces a list?', options: ['a colon', 'a question mark', 'an apostrophe', 'quotation marks'], correct: 0, exp: 'A colon is placed before a list or an explanation: She bought three things: rice, beans and oil.' },
      { q: 'Choose the correctly punctuated direct speech.', options: ['He said, "I am tired."', 'He said "I am tired."', 'He, said "I am tired".', 'He said, I am tired."'], correct: 0, exp: 'Direct speech takes a comma after the reporting verb and the exact words inside quotation marks.' }
    ]
  },
  'Physics': {
    'Measurement, Units & Vectors': [
      { q: 'Which instrument is used to measure short time intervals accurately in the laboratory?', options: ['stopwatch', 'metre rule', 'thermometer', 'spring balance'], correct: 0, exp: 'A stopwatch reads to 0.01 s, far finer than a wall clock, so experiments time with it.' },
      { q: 'Which instrument best measures the internal diameter of a test tube?', options: ['vernier calipers', 'metre rule', 'measuring tape', 'spring balance'], correct: 0, exp: 'Vernier calipers have jaws made for internal and external diameters, reading to 0.01 cm.' },
      { q: 'Which of these is a scalar quantity?', options: ['distance', 'velocity', 'force', 'displacement'], correct: 0, exp: 'A scalar has magnitude only. Distance has no direction; velocity, force and displacement are vectors.' }
    ],
    'Motion & Newton’s Laws': [
      { q: 'The rate of change of displacement is...', options: ['velocity', 'speed', 'acceleration', 'distance'], correct: 0, exp: 'Displacement per unit time, with direction, is velocity.' },
      { q: 'The area under a velocity-time graph gives...', options: ['distance travelled', 'acceleration', 'speed', 'force'], correct: 0, exp: 'Velocity multiplied by time is distance, so the area under the graph is the distance covered.' },
      { q: 'Newton\'s first law of motion is also called the law of...', options: ['inertia', 'gravitation', 'action and reaction', 'conservation'], correct: 0, exp: 'A body keeps its state of rest or uniform motion unless a force acts - that resistance to change is inertia.' }
    ],
    'Work, Energy & Power': [
      { q: 'The SI unit of work is the...', options: ['joule', 'newton', 'watt', 'pascal'], correct: 0, exp: 'Work = force x distance, measured in newton-metres, called joules.' },
      { q: 'A stone held above the ground has energy because of its...', options: ['position', 'speed', 'heat', 'colour'], correct: 0, exp: 'Energy stored because of height or position is potential energy.' }
    ],
    'Equilibrium of Forces & Moments': [
      { q: 'The principle of moments states that for a body in equilibrium...', options: ['clockwise moments equal anticlockwise moments', 'all forces are zero only', 'the body must be moving', 'moments must be negative'], correct: 0, exp: 'At equilibrium the total clockwise moment about a point equals the total anticlockwise moment.' },
      { q: 'The turning effect of a force about a point is called...', options: ['a moment', 'friction', 'pressure', 'impulse'], correct: 0, exp: 'Moment = force x perpendicular distance from the pivot; it is the turning effect.' }
    ]
  },
  'Chemistry': {
    'Atomic Structure & the Periodic Table': [
      { q: 'The number of protons in an atom equals its...', options: ['atomic number', 'mass number', 'valency', 'group number'], correct: 0, exp: 'The atomic number counts the protons; the mass number counts protons + neutrons.' },
      { q: 'Isotopes are atoms of the same element with...', options: ['same protons, different neutrons', 'same neutrons, different protons', 'same mass, different protons', 'different protons and electrons'], correct: 0, exp: 'Isotopes keep the same atomic number but differ in neutron number, hence different mass numbers.' },
      { q: 'What is the maximum number of electrons in the L shell?', options: ['8', '2', '18', '32'], correct: 0, exp: 'Shell capacities follow 2n^2: K=2, L=8, M=18.' },
      { q: 'Which particle carries a positive charge in the atom?', options: ['proton', 'electron', 'neutron', 'ion shell'], correct: 0, exp: 'Protons are positive, electrons negative and neutrons neutral.' },
      { q: 'An atom has 11 protons. What is its atomic number?', options: ['11', '22', '12', '10'], correct: 0, exp: 'Atomic number = number of protons = 11 (that element is sodium).' },
      { q: 'The noble gases are found in which group of the periodic table?', options: ['group 8 (18)', 'group 1', 'group 2', 'group 7 (17)'], correct: 0, exp: 'The noble (inert) gases sit in the last group - group 8, also numbered 18.' },
      { q: 'Elements in the same period have the same number of...', options: ['electron shells', 'protons', 'neutrons', 'valency electrons only'], correct: 0, exp: 'A period is a row; every element in it fills the same number of shells.' }
    ],
    'Chemical Bonding': [
      { q: 'A bond formed by the complete transfer of electrons is...', options: ['ionic (electrovalent)', 'covalent', 'metallic only', 'dative only'], correct: 0, exp: 'Metals transfer electrons to non-metals, forming oppositely charged ions held in an ionic bond.' },
      { q: 'A bond formed by sharing electrons is...', options: ['covalent', 'ionic', 'electrovalent', 'electrostatic'], correct: 0, exp: 'Non-metals share electron pairs to complete their outer shells - a covalent bond.' },
      { q: 'The bond between the atoms in a chlorine molecule, Cl2, is...', options: ['covalent', 'ionic', 'metallic', 'hydrogen'], correct: 0, exp: 'Two identical non-metal atoms share one pair of electrons: a single covalent bond.' },
      { q: 'A substance that conducts electricity when dissolved in water is called...', options: ['an electrolyte', 'an atom', 'a molecule', 'an insulator'], correct: 0, exp: 'Electrolytes (usually ionic) split into free ions in solution and carry current.' },
      { q: 'Sodium chloride is held together by which type of bond?', options: ['ionic', 'covalent', 'dative', 'metallic'], correct: 0, exp: 'Sodium transfers an electron to chlorine, forming Na+ and Cl- held by electrostatic attraction.' },
      { q: 'Metals conduct electricity because they have...', options: ['mobile electrons', 'fixed ions', 'no electrons', 'only protons'], correct: 0, exp: 'In metals the outer electrons move freely through the lattice and carry charge.' },
      { q: 'What is the valency of oxygen?', options: ['2', '1', '3', '4'], correct: 0, exp: 'Oxygen needs two more electrons to complete its outer shell, so it combines with a valency of 2.' }
    ],
    'Separation Techniques & States of Matter': [
      { q: 'Which method separates sand from water?', options: ['filtration', 'evaporation', 'distillation', 'chromatography'], correct: 0, exp: 'Sand is insoluble; filtration traps the solid while water passes through as filtrate.' },
      { q: 'How would you obtain salt from a salt solution?', options: ['evaporation', 'filtration', 'decantation', 'magnetism'], correct: 0, exp: 'Heating drives off the water, leaving solid salt behind.' },
      { q: 'A solid changing directly to a gas on heating is called...', options: ['sublimation', 'condensation', 'melting', 'freezing'], correct: 0, exp: 'Substances like iodine and camphor sublime - they skip the liquid state.' },
      { q: 'Which technique separates the different dyes in a spot of ink?', options: ['chromatography', 'filtration', 'sieving', 'decantation'], correct: 0, exp: 'A solvent carries the dye components up the paper at different rates, splitting the colours.' },
      { q: 'Which state of matter has a fixed shape and fixed volume?', options: ['solid', 'liquid', 'gas', 'vapour'], correct: 0, exp: 'In solids the particles vibrate in fixed positions, so shape and volume stay constant.' },
      { q: 'The change of a gas into a liquid is called...', options: ['condensation', 'evaporation', 'sublimation', 'diffusion'], correct: 0, exp: 'Cooling a gas removes energy so particles come together as a liquid - condensation.' }
    ]
  },
  'Biology': {
    'The Cell: Structure & Function': [
      { q: 'The basic unit of life is the...', options: ['cell', 'tissue', 'organ', 'atom'], correct: 0, exp: 'Every living thing is built from cells; the cell is the smallest unit that shows all life processes.' },
      { q: 'Which structure controls what enters and leaves the cell?', options: ['cell membrane', 'cell wall', 'nucleus', 'cytoplasm'], correct: 0, exp: 'The cell membrane is selectively permeable - it allows some substances in and keeps others out.' },
      { q: 'Which organelle releases energy through respiration?', options: ['mitochondrion', 'ribosome', 'vacuole', 'chloroplast'], correct: 0, exp: 'Mitochondria break down food with oxygen and release energy - they are the powerhouse of the cell.' },
      { q: 'Which structure is found in plant cells but not animal cells?', options: ['cell wall', 'cell membrane', 'nucleus', 'mitochondrion'], correct: 0, exp: 'Plant cells have a rigid cellulose cell wall outside the membrane; animal cells do not.' },
      { q: 'The nucleus of a cell mainly...', options: ['contains genetic material and controls cell activities', 'stores water only', 'makes protein alone', 'digests food'], correct: 0, exp: 'The nucleus carries the chromosomes (DNA) and directs growth, repair and reproduction.' },
      { q: 'A large permanent vacuole is typical of...', options: ['plant cells', 'animal cells', 'bacteria only', 'viruses'], correct: 0, exp: 'Mature plant cells hold a large central vacuole full of cell sap; animal cells have tiny temporary ones.' },
      { q: 'Which of these is a single-celled organism?', options: ['Amoeba', 'Hydra', 'Earthworm', 'Grass'], correct: 0, exp: 'An amoeba carries out every life process inside one cell.' }
    ],
    'Nutrition: Digestion in Humans': [
      { q: 'The acid produced in the human stomach is...', options: ['hydrochloric acid', 'sulphuric acid', 'citric acid', 'acetic acid'], correct: 0, exp: 'Hydrochloric acid kills swallowed germs and activates pepsin for protein digestion.' },
      { q: 'Which enzyme digests protein in the stomach?', options: ['pepsin', 'amylase', 'lipase', 'maltase'], correct: 0, exp: 'Pepsin works in the acidic stomach to break proteins into polypeptides.' },
      { q: 'Where is bile stored before it is used?', options: ['gall bladder', 'pancreas', 'kidney', 'appendix'], correct: 0, exp: 'The liver makes bile; the gall bladder stores and concentrates it until fats arrive.' },
      { q: 'Digested food is absorbed mainly in the...', options: ['small intestine', 'stomach', 'large intestine', 'mouth'], correct: 0, exp: 'The small intestine is long, lined with villi, and is where absorption into the blood happens.' },
      { q: 'Finger-like projections called villi are found in the...', options: ['small intestine', 'stomach', 'oesophagus', 'large intestine'], correct: 0, exp: 'Villi greatly increase the surface area for absorbing digested food.' },
      { q: 'Which teeth are shaped for tearing food?', options: ['canines', 'incisors', 'premolars', 'molars'], correct: 0, exp: 'Canines are pointed for tearing; incisors cut and molars grind.' },
      { q: 'The wavelike muscular movement that pushes food along the gut is...', options: ['peristalsis', 'digestion', 'absorption', 'egestion'], correct: 0, exp: 'Peristalsis is the alternate contraction and relaxation of gut muscles that moves food onward.' }
    ],
    'Soil, Conservation & Our Environment': [
      { q: 'Which soil type holds the most water?', options: ['clay', 'sand', 'loam', 'gravel'], correct: 0, exp: 'Clay has the finest particles and tiny pore spaces, so it retains the most water.' },
      { q: 'The best soil for farming is...', options: ['loam', 'pure clay', 'pure sand', 'gravel'], correct: 0, exp: 'Loam mixes sand, clay and humus - it holds water and nutrients yet drains and allows air.' },
      { q: 'Humus in soil is formed from...', options: ['decayed plant and animal remains', 'weathered rocks only', 'pure water', 'sand grains'], correct: 0, exp: 'Humus is the dark organic part of soil from decomposition; it supplies nutrients.' },
      { q: 'Which practice helps prevent soil erosion?', options: ['planting cover crops', 'burning bushes yearly', 'overgrazing', 'felling trees'], correct: 0, exp: 'Cover crops shield the soil from rain and wind and their roots hold it together.' },
      { q: 'The washing away of topsoil by running water is called...', options: ['soil erosion', 'soil profile', 'leaching only', 'manuring'], correct: 0, exp: 'Water erosion removes the fertile topsoil; it is worst on bare, sloping land.' },
      { q: 'Which organisms enrich the soil with nitrogen?', options: ['nitrogen-fixing bacteria in root nodules', 'viruses', 'parasitic fungi', 'tapeworms'], correct: 0, exp: 'Bacteria such as Rhizobium in legume root nodules convert air nitrogen into plant-usable compounds.' }
    ]
  },
  'Government': {
    'Meaning, Nature & Scope of Government': [
      { q: 'Government is best described as...', options: ['the institution that makes and enforces the laws of a state', 'any group of wealthy citizens', 'the market system of a country', 'a religious organisation'], correct: 0, exp: 'Government is the machinery through which the state makes, enforces and interprets laws.' },
      { q: 'A state is described as sovereign when it...', options: ['has supreme power over its territory', 'has many political parties', 'trades with other countries', 'has a large population'], correct: 0, exp: 'Sovereignty means final legal authority at home and freedom from outside control.' },
      { q: 'Which statement is correct?', options: ['Governments change but the state endures', 'The state changes but government endures', 'State and government mean exactly the same', 'Only governments have territory'], correct: 0, exp: 'A state is permanent; governments come and go through elections or coups.' },
      { q: 'The power to make laws belongs to the...', options: ['legislature', 'executive', 'judiciary', 'press'], correct: 0, exp: 'The legislature (parliament or national assembly) enacts the laws.' },
      { q: 'The fundamental law of a country is its...', options: ['constitution', 'budget', 'treaty', 'anthem'], correct: 0, exp: 'A constitution sets out the organs, powers and limits of government - every other law bows to it.' },
      { q: 'Which of these is NOT an attribute of a state?', options: ['political parties', 'territory', 'population', 'sovereignty'], correct: 0, exp: 'Territory, population, government and sovereignty define a state; parties belong to politics, not the definition.' },
      { q: 'Nigeria operates which system of government?', options: ['unitary', 'confederal', 'feudal', 'imperial'], correct: 0, exp: 'Nigeria is a federal republic within a strong centre - constitutionally described as a federal (unitary-in-spirit) system; among the options, unitary best fits a single supreme order, while confederal and feudal do not apply.' }
    ],
    'The Arms of Government & Separation of Powers': [
      { q: 'The doctrine of separation of powers is associated with...', options: ['Baron de Montesquieu', 'Karl Marx', 'Adam Smith', 'John Locke only'], correct: 0, exp: 'Montesquieu, in The Spirit of the Laws, argued for splitting power among three arms.' },
      { q: 'The three arms of government are the...', options: ['legislature, executive and judiciary', 'army, police and customs', 'federal, state and local', 'press, church and state'], correct: 0, exp: 'Law-makers, law-implementers and law-interpreters make up the three arms.' },
      { q: 'Which arm interprets the law?', options: ['judiciary', 'legislature', 'executive', 'civil service'], correct: 0, exp: 'Courts interpret laws and settle disputes - the judges head the judiciary.' },
      { q: 'The legislature of the Federal Republic of Nigeria is the...', options: ['National Assembly', 'Supreme Court', 'Federal Executive Council', 'Police Force'], correct: 0, exp: 'The National Assembly (Senate and House of Representatives) makes federal laws.' },
      { q: 'Who heads the executive arm in Nigeria?', options: ['the President', 'the Chief Justice', 'the Senate President', 'the Inspector-General of Police'], correct: 0, exp: 'The President is head of state, head of government and commander-in-chief.' },
      { q: 'Checks and balances means each arm...', options: ['can limit the powers of the others', 'obeys only the army', 'appoints all judges alone', 'controls the market'], correct: 0, exp: 'Each arm restrains the others - for example the courts can void an unlawful act of the executive.' },
      { q: 'The executive arm is responsible for...', options: ['implementing laws and running day-to-day administration', 'making the constitution only', 'interpreting statutes', 'auditing only'], correct: 0, exp: 'The executive executes policy: ministries, agencies and the civil service deliver services.' }
    ],
    'Early Nigerian Civilisations: Nok, Ife, Benin & Kanem-Borno': [
      { q: 'The Nok culture is famous for its...', options: ['terracotta figures', 'glass towers', 'pyramids', 'ships'], correct: 0, exp: 'Nok artisans produced lifelike terracotta (baked clay) heads and figures from around 500 BC.' },
      { q: 'The Nok culture was located in what is now...', options: ['northern Nigeria (Kaduna area)', 'the Niger Delta', 'south-east Nigeria', 'the Sokoto plain only'], correct: 0, exp: 'Nok finds cluster around Kaduna and the Jos Plateau in northern Nigeria.' },
      { q: 'Ife is world-famous for its...', options: ['bronze and terracotta heads', 'rock churches', 'iron ships', 'desert forts'], correct: 0, exp: 'Ife naturalistic bronze and terracotta heads rank among the finest art ever made in Africa.' },
      { q: 'The ancient kingdom of Benin is celebrated for...', options: ['bronze casting', 'ice sculpture', 'paper making', 'glass blowing'], correct: 0, exp: 'Benin bronzes (actually brass) decorated the Oba\'s palace and are museum treasures today.' },
      { q: 'The Kanem-Borno Empire was centred around...', options: ['Lake Chad', 'Lake Victoria', 'the Bight of Benin', 'the Sokoto River'], correct: 0, exp: 'Kanem-Borno grew wealthy controlling trade routes around Lake Chad.' },
      { q: 'The traditional ruler of Benin is titled the...', options: ['Oba', 'Sarki', 'Obi', 'Eze'], correct: 0, exp: 'The Oba of Benin heads one of the oldest monarchies in Nigeria; Sarki is Hausa, Obi and Eze are Igbo titles.' }
    ]
  },
  'Literature in English': {
    'The Three Genres: Prose, Poetry & Drama': [
      { q: 'The three genres of literature are...', options: ['prose, poetry and drama', 'fiction, history and news', 'novels, essays and letters', 'comedy, tragedy and epic'], correct: 0, exp: 'Everything written as literature falls into prose, poetry or drama.' },
      { q: 'A long narrative poem about the deeds of a hero is an...', options: ['epic', 'ode', 'elegy', 'epigram'], correct: 0, exp: 'Epics such as the Iliad celebrate heroic deeds on a grand scale.' },
      { q: 'A long prose narrative with chapters is a...', options: ['novel', 'short story', 'ballad', 'play'], correct: 0, exp: 'Novels are extended prose fiction; short stories are brief single-effect narratives.' },
      { q: 'A drama is divided into...', options: ['acts and scenes', 'chapters and verses', 'paragraphs', 'cantos'], correct: 0, exp: 'Plays are structured in acts, each divided into scenes, for staging.' },
      { q: 'A play that ends in sorrow or disaster is a...', options: ['tragedy', 'comedy', 'farce', 'melodrama'], correct: 0, exp: 'Tragedy traces the downfall of the main character, often through a fatal flaw.' },
      { q: 'A play that is humorous and ends happily is a...', options: ['comedy', 'tragedy', 'elegy', 'epic'], correct: 0, exp: 'Comedy amuses and typically ends in celebration, often a wedding or reunion.' },
      { q: 'A poem of fourteen lines is called a...', options: ['sonnet', 'ballad', 'limerick', 'dirge'], correct: 0, exp: 'The sonnet has 14 lines - Shakespearean (abab cdcd efef gg) or Petrarchan.' },
      { q: 'The speaker in a poem is known as the...', options: ['persona', 'author only', 'narrator of prose', 'antagonist'], correct: 0, exp: 'The persona is the voice that speaks the poem; it is not necessarily the poet.' },
      { q: 'The writer\'s attitude towards the subject of a work is the...', options: ['tone', 'plot', 'setting', 'cast'], correct: 0, exp: 'Tone - serious, mocking, joyful - colours how the subject is presented.' },
      { q: 'The central idea or message of a literary work is its...', options: ['theme', 'title', 'dialogue', 'costume'], correct: 0, exp: 'Theme is the underlying idea, such as betrayal or the struggle for freedom.' },
      { q: 'The sequence of events in a story is the...', options: ['plot', 'theme', 'mood', 'diction'], correct: 0, exp: 'Plot is the organised chain of events: exposition, rising action, climax, resolution.' },
      { q: 'A poem that tells a story is a...', options: ['narrative poem', 'lyric poem', 'dramatic monologue', 'haiku'], correct: 0, exp: 'Narrative poems, like ballads and epics, relate events; lyrics express feeling.' },
      { q: 'The main character in a story is the...', options: ['protagonist', 'antagonist', 'chorus', 'extra'], correct: 0, exp: 'The protagonist drives the action; the antagonist opposes them.' },
      { q: 'A character who opposes the main character is the...', options: ['antagonist', 'protagonist', 'narrator', 'persona'], correct: 0, exp: 'The antagonist creates the conflict the protagonist must face.' },
      { q: 'A short poem of mourning for the dead is an...', options: ['elegy', 'ode', 'epic', 'farce'], correct: 0, exp: 'An elegy laments a death; an ode celebrates its subject.' }
    ],
    'Literary & Figurative Devices': [
      { q: 'The repetition of the same initial consonant sound is...', options: ['alliteration', 'assonance', 'rhyme', 'rhythm'], correct: 0, exp: 'Peter Piper picked... - repeated opening consonants make alliteration.' },
      { q: 'The repetition of vowel sounds within lines is...', options: ['assonance', 'alliteration', 'pun', 'irony'], correct: 0, exp: 'Assonance repeats vowel sounds, as in the long e in deep sea.' },
      { q: 'He is as brave as a lion is an example of...', options: ['simile', 'metaphor', 'irony', 'symbol'], correct: 0, exp: 'A comparison using as or like is a simile.' },
      { q: 'A direct comparison without like or as is a...', options: ['metaphor', 'simile', 'hyperbole', 'euphemism'], correct: 0, exp: 'The classroom was a zoo - one thing is said to be another: metaphor.' },
      { q: 'Giving human qualities to non-human things is...', options: ['personification', 'simile', 'pun', 'allusion'], correct: 0, exp: 'The wind whispered - whispering is human, so the wind is personified.' },
      { q: 'A deliberate exaggeration for effect is...', options: ['hyperbole', 'euphemism', 'litotes', 'metaphor'], correct: 0, exp: 'I have told you a million times - no one means it literally; that is hyperbole.' },
      { q: 'To err is human; to forgive, divine illustrates...', options: ['antithesis', 'hyperbole', 'onomatopoeia', 'pun'], correct: 0, exp: 'Antithesis sets opposite ideas side by side for contrast.' },
      { q: 'Words that imitate sounds, like buzz and crash, show...', options: ['onomatopoeia', 'alliteration', 'irony', 'metaphor'], correct: 0, exp: 'Onomatopoeic words sound like what they name.' },
      { q: 'A mild expression used in place of a harsh one is a...', options: ['euphemism', 'hyperbole', 'pun', 'paradox'], correct: 0, exp: 'Passed on instead of died - softening language is euphemism.' },
      { q: 'When the actual meaning is the opposite of the words spoken, we have...', options: ['irony', 'simile', 'assonance', 'symbolism'], correct: 0, exp: 'Saying what lovely weather during a storm is verbal irony.' },
      { q: 'Similarity of ending sounds in lines of verse is...', options: ['rhyme', 'rhythm', 'metre only', 'diction'], correct: 0, exp: 'Cat and hat rhyme; rhyme schemes like aabb structure many poems.' },
      { q: 'The regular pattern of stressed and unstressed syllables is...', options: ['rhythm', 'rhyme', 'tone', 'theme'], correct: 0, exp: 'Rhythm (closely tied to metre) gives verse its beat.' },
      { q: 'A play on words with double meaning is a...', options: ['pun', 'epigram', 'elegy', 'ode'], correct: 0, exp: 'A pun exploits two senses of a word for humour or emphasis.' },
      { q: 'Repeating the same word at the start of successive lines is...', options: ['anaphora', 'antithesis', 'assonance', 'hyperbole'], correct: 0, exp: 'We shall fight... we shall fight... - opening repetition is anaphora.' },
      { q: 'Using a part to represent the whole, e.g. hands for workers, is...', options: ['synecdoche', 'simile', 'irony', 'allusion'], correct: 0, exp: 'Synecdoche substitutes a part for the whole (or the reverse).' }
    ]
  },
  'History': {
    'History as a Discipline & Sources of History': [
      { q: 'History is the systematic study of...', options: ['past human events', 'future predictions', 'rocks and minerals', 'plant life only'], correct: 0, exp: 'History examines what people did in the past and why, using evidence.' },
      { q: 'Which of these is a source of history?', options: ['oral tradition', 'weather forecasts', 'horoscopes', 'advertisements for future events'], correct: 0, exp: 'Historians draw on oral tradition, written records and archaeology.' },
      { q: 'Oral tradition means information...', options: ['passed by word of mouth across generations', 'printed in books', 'carved on stones', 'broadcast by radio only'], correct: 0, exp: 'Stories, praise songs and proverbs handed down orally preserve history where writing was rare.' },
      { q: 'The study of material remains of the past is...', options: ['archaeology', 'anthropology only', 'geology', 'economics'], correct: 0, exp: 'Archaeologists excavate tools, pottery and buildings to reconstruct past life.' },
      { q: 'One advantage of oral sources is that they...', options: ['preserve traditions where no written records exist', 'never change over time', 'are always dated precisely', 'need no verification'], correct: 0, exp: 'In societies without writing, oral tradition is often the only record available.' },
      { q: 'A weakness of oral sources is that...', options: ['memory can change with time', 'they never exist in Nigeria', 'they are written down', 'they cost too much'], correct: 0, exp: 'Human memory fades and embellishes, so historians cross-check oral accounts.' },
      { q: 'Which of these is a written source of history?', options: ['newspapers', 'drum messages', 'folk songs', 'market dances'], correct: 0, exp: 'Newspapers, diaries, gazettes and letters are written records.' },
      { q: 'An eyewitness account of an event is a...', options: ['primary source', 'secondary source', 'tertiary source', 'myth'], correct: 0, exp: 'Primary sources come straight from the time of the event.' },
      { q: 'A textbook written later about an event is a...', options: ['secondary source', 'primary source', 'legend', 'artefact'], correct: 0, exp: 'Secondary sources interpret primary evidence after the event.' },
      { q: 'Arranging historical events in the order they happened is called...', options: ['chronology', 'archaeology', 'ethnography', 'cartography'], correct: 0, exp: 'Chronology is the timeline ordering of events.' },
      { q: 'A person who studies and writes history is a...', options: ['historian', 'geographer', 'biologist', 'economist'], correct: 0, exp: 'Historians analyse evidence and write history.' },
      { q: 'Studying history is useful because it...', options: ['helps us understand the present', 'predicts lottery results', 'replaces mathematics', 'teaches only dates'], correct: 0, exp: 'Knowing how societies changed explains why the present is the way it is.' },
      { q: 'Careful digging to recover past remains is called...', options: ['excavation', 'irrigation', 'migration', 'coronation'], correct: 0, exp: 'Excavation uncovers artefacts layer by layer for dating and study.' },
      { q: 'Where are artefacts usually preserved for study?', options: ['museums', 'banks', 'hospitals', 'stadiums'], correct: 0, exp: 'Museums collect, conserve and display objects of historical importance.' }
    ],
    'Pre-Colonial Nigerian Societies: Igbo, Yoruba & Hausa-Fulani Administration': [
      { q: 'Pre-colonial Igbo political organisation is best described as...', options: ['decentralised (village-based)', 'a single empire', 'a military dictatorship', 'a theocracy'], correct: 0, exp: 'Most Igbo communities governed themselves village by village - acephalous or republican systems.' },
      { q: 'The highest decision-making body in an Igbo village was the...', options: ['village assembly of adult males with the council of elders', 'the Oba\'s court', 'the emir\'s council', 'the age grade alone'], correct: 0, exp: 'Open assemblies and elder councils debated until consensus was reached.' },
      { q: 'In Igboland, age grades mainly...', options: ['performed communal duties and kept order', 'collected taxes for the emir', 'chose the sultan', 'wrote the laws down'], correct: 0, exp: 'Age grades cleared paths, built markets, policed and sanctioned wrongdoers.' },
      { q: 'The Yoruba system of government was a...', options: ['constitutional monarchy with checks on the king', 'pure democracy', 'military junta', 'communist state'], correct: 0, exp: 'The Oba ruled with chiefs, and customs allowed the people to check his power.' },
      { q: 'In the Oyo Empire, the Alaafin was checked by the...', options: ['Oyo Mesi', 'Age grades', 'Ndi Ichie', 'Emirate council'], correct: 0, exp: 'The Oyo Mesi (kingmakers) could present an empty calabash, requiring the Alaafin to abdicate.' },
      { q: 'The Alaafin was the traditional ruler of...', options: ['Oyo', 'Ife', 'Benin', 'Kano'], correct: 0, exp: 'Oyo Empire was headed by the Alaafin; Ife by the Ooni, Benin by the Oba.' },
      { q: 'The Hausa-Fulani emirates practised a ______ system.', options: ['centralised', 'decentralised', 'stateless', 'confederal'], correct: 0, exp: 'Power flowed from the emir downward through district heads - a centralised hierarchy.' },
      { q: 'In the emirates, the emir was advised by...', options: ['councils of state officials', 'the general assembly of all farmers', 'the Oyo Mesi', 'the village elders of Igboland'], correct: 0, exp: 'Officials such as the galadima and dogari handled administration, defence and policing.' },
      { q: 'Which legal system operated in the Hausa-Fulani emirates?', options: ['Sharia (Islamic law)', 'Roman law', 'English common law', 'Canon law'], correct: 0, exp: 'Islamic law and its courts governed the emirates long before colonial rule.' },
      { q: 'The traditional ruler of Sokoto is titled the...', options: ['Sultan', 'Oba', 'Obi', 'Ooni'], correct: 0, exp: 'The Sultan of Sokoto heads the caliphate tradition of the Hausa-Fulani.' },
      { q: 'The Ooni is the traditional ruler of...', options: ['Ife', 'Oyo', 'Benin', 'Kano'], correct: 0, exp: 'Ife, the spiritual home of the Yoruba, is headed by the Ooni.' },
      { q: 'In pre-colonial Igbo society, serious cases were settled by...', options: ['the council of elders and masquerade cults', 'the emir', 'the sultan', 'the Alaafin'], correct: 0, exp: 'Elders arbitrated disputes; masquerades such as the Egwugwu analogues enforced judgments.' },
      { q: 'Which title belongs to a traditional Igbo ruler?', options: ['Obi', 'Oba', 'Sarki', 'Alaafin'], correct: 0, exp: 'Obi (and Eze) are Igbo titles; Oba is Yoruba/Benin, Sarki Hausa, Alaafin Oyo.' },
      { q: 'A feature shared by all three pre-colonial systems was...', options: ['customary law and checks on power', 'written constitutions', 'elected presidents', 'political parties'], correct: 0, exp: 'Custom, tradition and institutional checks limited rulers, even without written constitutions.' }
    ]
  },
  'Economics': {
    'What Economics Is: Scarcity, Choice & Opportunity Cost': [
      { q: 'Economics is the study of how people use scarce resources that have...', options: ['alternative uses to satisfy wants', 'only one use', 'no value', 'unlimited supply'], correct: 0, exp: 'Robbins defined economics as choices among scarce resources with competing uses.' },
      { q: 'Scarcity means resources are...', options: ['limited relative to human wants', 'unlimited', 'free always', 'only found in cities'], correct: 0, exp: 'Wants are endless while resources are finite - that tension is scarcity.' },
      { q: 'Opportunity cost is...', options: ['the alternative forgone', 'money paid at the market', 'the total cost of production', 'the price of imported goods'], correct: 0, exp: 'Choosing one option means giving up the next best alternative - that sacrifice is opportunity cost.' },
      { q: 'A list of wants arranged in order of importance is a...', options: ['scale of preference', 'budget deficit', 'demand curve', 'price list'], correct: 0, exp: 'Rational consumers satisfy the most pressing wants first.' },
      { q: 'The basic economic questions are what, how and ______ to produce.', options: ['for whom', 'where only', 'when only', 'why not'], correct: 0, exp: 'Every society must decide what to produce, how, and for whom.' },
      { q: 'Which of these is NOT a factor of production?', options: ['money in a piggy bank', 'land', 'labour', 'capital'], correct: 0, exp: 'Idle money produces nothing; the factors are land, labour, capital and the entrepreneur.' },
      { q: 'The reward for labour is...', options: ['wages', 'rent', 'interest', 'profit'], correct: 0, exp: 'Workers earn wages or salaries.' },
      { q: 'The reward for capital is...', options: ['interest', 'rent', 'wages', 'royalty only'], correct: 0, exp: 'Owners of capital earn interest on the funds they supply.' },
      { q: 'The reward for land is...', options: ['rent', 'interest', 'profit', 'commission'], correct: 0, exp: 'Land and natural resources earn rent.' },
      { q: 'The reward for the entrepreneur is...', options: ['profit', 'wages', 'rent', 'allowance'], correct: 0, exp: 'The entrepreneur who organises the other factors and bears risk earns profit.' },
      { q: 'Human wants are described as...', options: ['unlimited', 'limited', 'non-existent', 'always satisfied'], correct: 0, exp: 'Satisfying one want births another - wants are insatiable.' },
      { q: 'Choice arises because of...', options: ['scarcity', 'abundance', 'inflation', 'taxation'], correct: 0, exp: 'If everything were abundant, no choice would be needed.' },
      { q: 'Which of these is a free good?', options: ['sunlight', 'petrol', 'bottled water', 'electricity'], correct: 0, exp: 'Free goods are abundant in supply and command no price, like sunlight and air.' },
      { q: 'A good that commands a price because it is scarce is an...', options: ['economic good', 'inferior good only', 'imported good', 'intangible service'], correct: 0, exp: 'Economic goods have scarcity value; free goods do not.' },
      { q: 'In economics, capital as a factor of production means...', options: ['man-made resources used to produce other goods', 'cash only', 'land under cultivation', 'human effort'], correct: 0, exp: 'Capital is produced means of production: machines, tools and buildings.' }
    ],
    'Economic Systems: Capitalism, Socialism & the Mixed Economy': [
      { q: 'Capitalism is characterised by...', options: ['private ownership of the means of production', 'state ownership of everything', 'absence of markets', 'communal farming only'], correct: 0, exp: 'In capitalism individuals and firms own resources and pursue profit.' },
      { q: 'Under socialism, the major means of production are owned by...', options: ['the state on behalf of the people', 'foreign investors only', 'religious bodies', 'traditional rulers'], correct: 0, exp: 'Socialism vests ownership and control in the state or the community.' },
      { q: 'Nigeria operates which type of economy?', options: ['mixed economy', 'pure capitalism', 'pure socialism', 'feudal economy'], correct: 0, exp: 'Both private enterprise and government participate in the Nigerian economy.' },
      { q: 'In a market economy, resources are allocated mainly by the...', options: ['price mechanism', 'government decree', 'traditional council', 'lottery'], correct: 0, exp: 'Prices signalled by demand and supply guide what is produced and consumed.' },
      { q: 'Government control of the economy is highest under...', options: ['a command (socialist) economy', 'capitalism', 'a mixed economy', 'a free market'], correct: 0, exp: 'Central planners decide production in a command economy.' },
      { q: 'Consumer sovereignty - the consumer decides what is produced - is a feature of...', options: ['capitalism', 'command economies', 'feudalism', 'the communal system'], correct: 0, exp: 'Producers in free markets chase consumer demand, so consumers reign.' },
      { q: 'In a mixed economy...', options: ['both private and public sectors produce goods and services', 'only foreigners own firms', 'the state owns nothing', 'prices are always fixed'], correct: 0, exp: 'Mixed economies blend market freedom with state provision and regulation.' },
      { q: 'The economist associated with the free market and the invisible hand is...', options: ['Adam Smith', 'Karl Marx', 'John Maynard Keynes only', 'Frederick Taylor'], correct: 0, exp: 'Adam Smith argued self-interest guided by competition benefits society.' },
      { q: 'Karl Marx is associated with...', options: ['socialism and communism', 'the invisible hand', 'scientific management', 'mercantilism'], correct: 0, exp: 'Marx championed collective ownership and the classless society.' },
      { q: 'Central planning is a feature of...', options: ['a command economy', 'a free market', 'laissez-faire', 'pure capitalism'], correct: 0, exp: 'A planning ministry sets targets and allocates resources in command systems.' },
      { q: 'One advantage of capitalism is...', options: ['competition that drives efficiency and innovation', 'equal incomes for all', 'absence of unemployment always', 'no need for prices'], correct: 0, exp: 'Competition rewards efficient firms and spurs new products.' },
      { q: 'One disadvantage of capitalism is...', options: ['inequality of income and wealth', 'too much consumer choice', 'high innovation', 'freedom of enterprise'], correct: 0, exp: 'Without intervention, wealth concentrates and the poor can be left behind.' },
      { q: 'One advantage of socialism is...', options: ['reduced inequality and provision of basic services', 'guaranteed efficiency always', 'consumer sovereignty', 'absence of government'], correct: 0, exp: 'State provision aims at equity: health, education and utilities for all.' },
      { q: 'One disadvantage of socialism is...', options: ['bureaucracy, delays and shortages', 'too much competition', 'excessive profit', 'too many choices'], correct: 0, exp: 'Central control can be slow, wasteful and blind to consumer needs.' },
      { q: 'A mixed economy tries to combine...', options: ['the advantages of both capitalism and socialism', 'only taxes and fines', 'imports and exports alone', 'farming and fishing only'], correct: 0, exp: 'It keeps market efficiency while the state corrects market failures and protects the weak.' }
    ]
  },
  'Commerce': {
    'Commerce: Meaning, Scope & Production': [
      { q: 'Commerce is best defined as...', options: ['trade plus the aids to trade', 'farming only', 'manufacturing only', 'the study of prices'], correct: 0, exp: 'Commerce covers buying and selling and all services (banking, transport, insurance...) that support them.' },
      { q: 'Trade is divided into...', options: ['home trade and foreign trade', 'primary and secondary', 'retail and banking', 'public and private only'], correct: 0, exp: 'Trade within a country is home trade; across borders is foreign trade.' },
      { q: 'Which of these is an aid to trade?', options: ['banking', 'farming', 'mining', 'fishing'], correct: 0, exp: 'Aids to trade - banking, insurance, transport, warehousing, advertising - make trade possible.' },
      { q: 'Production is divided into primary, secondary and ______ industries.', options: ['tertiary', 'quaternary only', 'capital', 'export'], correct: 0, exp: 'Primary extracts, secondary manufactures, tertiary renders services.' },
      { q: 'Which of these is primary production?', options: ['mining', 'textile weaving', 'banking', 'car assembly'], correct: 0, exp: 'Primary production extracts raw materials from land and water.' },
      { q: 'Secondary industry involves...', options: ['manufacturing and construction', 'fishing', 'teaching', 'insurance'], correct: 0, exp: 'Secondary industry transforms raw materials into finished goods.' },
      { q: 'Which of these is a tertiary (service) activity?', options: ['teaching', 'quarrying', 'brewing', 'weaving'], correct: 0, exp: 'Services like teaching, banking and transport form the tertiary sector.' },
      { q: 'Retail trade is the sale of goods...', options: ['to the final consumer in small quantities', 'in bulk to retailers', 'to foreigners only', 'to manufacturers only'], correct: 0, exp: 'Retailers buy in bulk and sell in small units to consumers.' },
      { q: 'Wholesale trade involves selling...', options: ['in bulk to retailers', 'directly to consumers', 'only on credit', 'only imported goods'], correct: 0, exp: 'Wholesalers bridge producers and retailers by handling large quantities.' },
      { q: 'Buying goods from other countries is called...', options: ['import trade', 'export trade', 'entrepot trade', 'home trade'], correct: 0, exp: 'Imports come in; exports go out.' },
      { q: 'Selling locally produced goods abroad is called...', options: ['export trade', 'import trade', 'retail trade', 'counter trade'], correct: 0, exp: 'Exports earn foreign exchange for the country.' },
      { q: 'A country that imports goods and re-exports them practises...', options: ['entrepot trade', 'visible trade only', 'barter', 'dumping'], correct: 0, exp: 'Entrepot (re-export) trade profits from handling goods between countries.' },
      { q: 'Commerce bridges the gap between producers and consumers in terms of...', options: ['place, time and possession', 'weight and colour', 'spelling and grammar', 'height and age'], correct: 0, exp: 'Transport solves place, storage solves time, and trade transfers possession.' },
      { q: 'Banking aids commerce mainly by...', options: ['providing finance and safekeeping of money', 'growing crops', 'insuring ships', 'building roads'], correct: 0, exp: 'Banks provide loans, transfers and secure storage for traders.' },
      { q: 'Insurance aids commerce by...', options: ['covering risks of loss', 'setting prices', 'collecting taxes', 'employing farmers'], correct: 0, exp: 'Insurance spreads risk so traders can operate with confidence.' }
    ],
    'Units of Business Organisation': [
      { q: 'A business owned and run by one person is a...', options: ['sole proprietorship', 'partnership', 'cooperative', 'public corporation'], correct: 0, exp: 'The sole trader owns the capital, takes the profit and bears every risk.' },
      { q: 'A major disadvantage of sole proprietorship is...', options: ['unlimited liability', 'slow decision making', 'too much capital', 'sharing of profits'], correct: 0, exp: 'The owner\'s personal property can be seized to pay business debts.' },
      { q: 'A partnership is a business owned by...', options: ['two to twenty persons', 'one person only', 'over one hundred people', 'the government alone'], correct: 0, exp: 'Ordinary partnerships run from 2 to 20 members (banking has special limits).' },
      { q: 'The written agreement guiding a partnership is the...', options: ['partnership deed', 'prospectus', 'memorandum only', 'balance sheet'], correct: 0, exp: 'The deed states capital shares, profit sharing, duties and admission of partners.' },
      { q: 'A partner who contributes capital but takes no part in management is a...', options: ['sleeping (dormant) partner', 'general partner', 'managing director', 'promoter'], correct: 0, exp: 'Sleeping partners share profit and risk quietly, unseen by the public.' },
      { q: 'Limited liability means shareholders lose at most...', options: ['the amount they invested in shares', 'all personal property', 'nothing ever', 'their salaries'], correct: 0, exp: 'Personal assets are protected; only the share investment is at risk.' },
      { q: 'A business owned by shareholders is a...', options: ['limited liability company', 'sole proprietorship', 'cooperative only', 'quasi-government agency'], correct: 0, exp: 'Companies raise capital by issuing shares to owners called shareholders.' },
      { q: 'A company whose shares are sold to the general public is a...', options: ['public limited company', 'private limited company', 'statutory corporation', 'partnership'], correct: 0, exp: 'Public companies invite the public to subscribe; private companies cannot.' },
      { q: 'A business established by an act of parliament for essential services is a...', options: ['public (statutory) corporation', 'cooperative society', 'sole trader', 'holding company'], correct: 0, exp: 'Examples include power and railway corporations set up by law.' },
      { q: 'A cooperative society is formed mainly to...', options: ['serve the common interest of members', 'maximise outside profit', 'export crops only', 'compete with banks'], correct: 0, exp: 'Members pool resources - thrift, credit, marketing - for mutual benefit.' },
      { q: 'The highest decision-making body of a limited liability company is the...', options: ['board of directors (for shareholders, the general meeting)', 'sole owner', 'ministry of trade', 'trade union'], correct: 0, exp: 'Shareholders appoint the board of directors to run the company.' },
      { q: 'A document inviting the public to buy shares of a company is a...', options: ['prospectus', 'balance sheet', 'receipt', 'invoice'], correct: 0, exp: 'The prospectus discloses the company\'s plans and finances before a public offer.' },
      { q: 'The certificate of incorporation...', options: ['gives a company legal existence', 'records daily sales', 'lists employees', 'pays dividends'], correct: 0, exp: 'Issued by the Corporate Affairs Commission, it births the company as a legal person.' },
      { q: 'One advantage of sole proprietorship is...', options: ['quick decision making', 'unlimited capital', 'shared risk', 'perpetual succession'], correct: 0, exp: 'The owner decides instantly without consulting partners or boards.' },
      { q: 'The largest source of capital for a public limited company is...', options: ['sale of shares to the public', 'owner\'s pocket', 'family loans', 'sale of old furniture'], correct: 0, exp: 'Public share issues can raise enormous sums beyond any individual\'s means.' }
    ]
  },
  'Financial Accounting': {
    'Introduction to Accounting & the Accounting Equation': [
      { q: 'Accounting is the process of recording, classifying and summarising...', options: ['financial transactions', 'weather records', 'school timetables', 'football scores'], correct: 0, exp: 'Accounting turns money transactions into reports owners can use.' },
      { q: 'The recording aspect of accounting is known as...', options: ['bookkeeping', 'auditing', 'budgeting', 'costing'], correct: 0, exp: 'Bookkeeping keeps the records; accounting interprets and reports from them.' },
      { q: 'The father of the double entry system is...', options: ['Luca Pacioli', 'Adam Smith', 'Karl Marx', 'John Keynes'], correct: 0, exp: 'The Italian friar Luca Pacioli published the double entry method in 1494.' },
      { q: 'The double entry principle states that every transaction has...', options: ['a debit and a corresponding credit', 'two debits', 'two credits', 'no entries'], correct: 0, exp: 'Debit what comes in, credit what goes out - the books must always balance.' },
      { q: 'The accounting equation is...', options: ['Assets = Capital + Liabilities', 'Assets = Capital - Liabilities', 'Capital = Assets + Liabilities', 'Liabilities = Assets + Capital'], correct: 0, exp: 'Everything the business owns is financed either by the owner (capital) or outsiders (liabilities).' },
      { q: 'Capital is...', options: ['the owner\'s investment in the business', 'money owed to suppliers', 'cash in the till only', 'the rent paid'], correct: 0, exp: 'Capital (proprietor\'s fund) is what the business owes back to its owner.' },
      { q: 'A liability is...', options: ['a debt the business owes to outsiders', 'an asset owned', 'profit earned', 'the owner\'s salary'], correct: 0, exp: 'Loans and creditors are claims of outsiders against the business.' },
      { q: 'Assets are...', options: ['resources owned by the business', 'debts owed by the business', 'expenses paid', 'drawings made'], correct: 0, exp: 'Cash, stock, equipment and buildings are assets - economic resources owned.' },
      { q: 'Which of these groups uses accounting information?', options: ['banks before granting loans', 'only the owner', 'only tax officers', 'no one outside'], correct: 0, exp: 'Owners, banks, investors, government and employees all rely on the accounts.' },
      { q: 'Which is a branch of accounting?', options: ['cost accounting', 'book selling', 'tax evasion', 'price fixing'], correct: 0, exp: 'Financial, cost and management accounting are recognised branches.' },
      { q: 'Drawings are...', options: ['cash or goods taken by the owner for personal use', 'sketches of the shop', 'goods sold on credit', 'loans from the bank'], correct: 0, exp: 'When the owner takes value out for personal use, it is drawings, not expense.' },
      { q: 'Drawings by the owner will...', options: ['reduce capital', 'increase capital', 'increase liabilities', 'affect nothing'], correct: 0, exp: 'Capital + profit - drawings = closing capital; drawings shrink the owner\'s fund.' },
      { q: 'Debtors are people who...', options: ['owe the business money', 'the business owes', 'own the business', 'audit the books'], correct: 0, exp: 'Customers who bought on credit become debtors (receivables).' },
      { q: 'Creditors are people to whom...', options: ['the business owes money', 'the business sold goods for cash', 'the bank lent nothing', 'taxes are refunded'], correct: 0, exp: 'Suppliers unpaid for credit purchases are creditors (payables).' },
      { q: 'The main purpose of accounting is to...', options: ['show the financial position and profit of a business', 'record staff birthdays', 'design advertisements', 'set exam questions'], correct: 0, exp: 'Final accounts reveal profit or loss and the financial position at a date.' }
    ],
    'Source Documents & Books of Original Entry': [
      { q: 'A document that serves as evidence of a transaction is a...', options: ['source document', 'trial balance', 'ledger folio', 'profit statement'], correct: 0, exp: 'Invoices, receipts and vouchers are the original evidence entries rely on.' },
      { q: 'An invoice shows...', options: ['details of goods sold on credit', 'cash paid for rent', 'wages due', 'the capital of the owner'], correct: 0, exp: 'The seller issues an invoice listing goods, prices and terms for a credit sale.' },
      { q: 'A receipt acknowledges...', options: ['money received', 'goods ordered', 'wages owed', 'a loan application'], correct: 0, exp: 'Whoever receives cash issues a receipt as proof of payment.' },
      { q: 'Cash sales are recorded in the...', options: ['cash book', 'purchases journal', 'sales journal', 'returns journal'], correct: 0, exp: 'All cash and cheque movements are entered in the cash book.' },
      { q: 'Goods bought on credit are recorded in the...', options: ['purchases journal', 'cash book', 'sales journal', 'petty cash book'], correct: 0, exp: 'The purchases day book lists all credit purchases from invoices received.' },
      { q: 'Goods sold on credit are recorded in the...', options: ['sales journal', 'cash book', 'purchases journal', 'returns outwards journal'], correct: 0, exp: 'The sales day book summarises credit sales from invoices issued.' },
      { q: 'Goods returned by customers are recorded in the...', options: ['returns inwards journal', 'returns outwards journal', 'purchases journal', 'cash book'], correct: 0, exp: 'Returns inwards (sales returns) track goods customers send back.' },
      { q: 'A debit note is issued when...', options: ['the business returns goods to a supplier', 'a customer pays cash', 'wages are paid', 'shares are issued'], correct: 0, exp: 'Returns outwards begin with a debit note telling the supplier their account is debited.' },
      { q: 'A credit note is issued when...', options: ['a customer returns goods', 'cash is stolen', 'a loan is taken', 'rent is paid'], correct: 0, exp: 'For returns inwards the seller issues a credit note reducing what the customer owes.' },
      { q: 'A cheque is a...', options: ['written order to a bank to pay a stated sum', 'receipt for cash', 'list of assets', 'form of currency'], correct: 0, exp: 'A cheque instructs the drawer\'s bank to pay the named payee.' },
      { q: 'How many parties are named on a cheque?', options: ['three: drawer, drawee and payee', 'two', 'four', 'five'], correct: 0, exp: 'The drawer writes it, the drawee (bank) pays it, and the payee receives it.' },
      { q: 'The ledger is the book of...', options: ['final entry', 'original entry', 'first draft', 'source documents'], correct: 0, exp: 'Journals are original entry; the ledger is where accounts are finally posted.' },
      { q: 'The journal is a book of...', options: ['original entry', 'final entry', 'trial balance', 'audit'], correct: 0, exp: 'Transactions are first journalised before posting to ledger accounts.' },
      { q: 'The petty cash book records...', options: ['small day-to-day payments', 'purchase of land', 'bank loans', 'salary of the CEO'], correct: 0, exp: 'Trifling expenses - postage, tea, transport - pass through petty cash.' },
      { q: 'The imprest system is used to control...', options: ['petty cash', 'sales tax', 'stock prices', 'wage disputes'], correct: 0, exp: 'The cashier spends from a fixed float and is reimbursed exactly what was spent.' }
    ]
  }
};
