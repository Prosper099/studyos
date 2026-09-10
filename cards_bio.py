"""Flashcard campaign batch 1: every Biology topic 3 -> 15 cards (JAMB/WAEC focus)."""
PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()

def esc(t):
    return t.replace("\\", "\\\\").replace("'", "\\'")

CARDS = {
 'The Cell: Structure & Function': [
  ("State the cell theory in one sentence.", "All living things are made of cells, and the cell is the basic structural and functional unit of life."),
  ("What is the function of the cell membrane?", "It is selectively permeable: it controls which substances enter and leave the cell and holds the cell contents together."),
  ("Name one structure found in a plant cell but NOT in an animal cell.", "The cellulose cell wall (also acceptable: chloroplast or large permanent vacuole). The cell wall gives the plant cell its firm, fixed shape."),
  ("What is the function of the nucleus?", "It controls all the activities of the cell and carries the hereditary material (chromosomes/DNA) passed on during cell division."),
  ("Why is the mitochondrion called the powerhouse of the cell?", "It is the site of aerobic respiration, where glucose is oxidised to release energy stored as ATP."),
  ("What is the function of the chloroplast?", "It contains chlorophyll and is the site of photosynthesis — it traps light energy to manufacture food. It is found only in green plants."),
  ("What is the function of ribosomes?", "They are the sites of protein synthesis, where amino acids are joined into proteins."),
  ("How does the vacuole of a plant cell differ from that of an animal cell?", "The plant vacuole is large, permanent and filled with cell sap (it keeps the cell turgid); the animal vacuole is small, temporary or absent."),
  ("Give two examples of specialized cells and their specializations.", "Red blood cell — biconcave, no nucleus, carries oxygen; root hair cell — long hair-like extension for absorbing water; nerve cell — long axon for carrying impulses."),
  ("How does a bacterium differ from a plant or animal cell in its nucleus?", "A bacterium is a prokaryote: it has no membrane-bound nucleus — its DNA floats free in the cytoplasm."),
  ("How does Amoeba, a single cell, survive on its own?", "One cell carries out every life process — feeding, respiration, excretion, movement and reproduction — so Amoeba is a complete independent organism."),
  ("Define osmosis.", "Osmosis is the movement of water molecules from a region of higher water concentration (dilute solution) to a region of lower water concentration (concentrated solution) through a semi-permeable membrane.")
 ],
 'Nutrition: Digestion in Humans': [
  ("Define digestion.", "Digestion is the breakdown of large, insoluble food molecules into small, soluble ones that can be absorbed into the blood."),
  ("Where does the digestion of each food class begin?", "Carbohydrates begin in the mouth (salivary amylase/ptyalin); proteins begin in the stomach (pepsin); fats begin in the duodenum (lipase)."),
  ("What are the two functions of hydrochloric acid in the stomach?", "It kills bacteria in swallowed food and provides the acidic medium (pH about 2) in which pepsin works best."),
  ("What is bile, where is it made, and what does it do?", "Bile is made by the liver and stored in the gall bladder. It is NOT an enzyme: it emulsifies fats (breaks them into tiny droplets so lipase works faster) and neutralises stomach acid."),
  ("What is the end product of fat digestion, and which enzyme produces it?", "Lipase (from the pancreas) digests fats/oils into fatty acids and glycerol."),
  ("State three features of the villi that make them efficient for absorption.", "They are numerous (huge surface area), have very thin walls (one-cell thick, short diffusion distance) and contain a rich network of blood capillaries plus a lacteal that absorbs digested fats."),
  ("What are the main functions of the large intestine (colon)?", "Absorbing water and mineral salts from undigested residue, and forming and storing faeces before egestion."),
  ("What is peristalsis?", "The wave-like rhythmic contraction and relaxation of the gut muscles that pushes food along the alimentary canal."),
  ("Name three properties of enzymes.", "They are proteins; they speed up reactions without being used up; they are specific (each acts on one substrate); they work best at an optimum temperature and pH and are denatured by high heat."),
  ("Why does trypsin work in the duodenum but not in the stomach?", "Trypsin needs an alkaline medium, which the duodenum provides (bile and pancreatic juice are alkaline); the stomach is strongly acidic and would denature it."),
  ("What happens to excess amino acids in the body?", "They are deaminated in the liver: the nitrogen part is converted to urea and excreted by the kidneys, while the remainder can be oxidised for energy or stored."),
  ("Why is roughage (fibre) important in the diet even though it is not digested?", "It adds bulk and absorbs water, so the gut muscles can push waste along easily — lack of roughage causes constipation.")
 ],
 'Soil, Conservation & Our Environment': [
  ("Which soil type is best for farming, and why?", "Loam — it holds a balanced mixture of sand, clay and humus, so it retains water and nutrients well yet drains and aerates properly."),
  ("List the four components of fertile soil.", "Mineral (rock) particles, humus (decayed organic matter), soil water and soil air — plus the living organisms within them."),
  ("Name four methods of soil conservation.", "Cover cropping, crop rotation, mulching, contour ploughing, terracing, shelter belts, controlled grazing, and avoiding bush burning (any four)."),
  ("State three effects of soil erosion.", "Loss of the fertile topsoil, reduced crop yields, formation of gullies, silting of rivers/dams, and desert encroachment."),
  ("Why is humus important to soil?", "It supplies mineral nutrients, improves water retention, binds soil particles together against erosion, and feeds soil organisms."),
  ("Why is the earthworm called the farmer's friend?", "Its burrows aerate the soil and improve drainage, and it mixes dead organic matter (humus) through the soil as it feeds."),
  ("What is the role of Rhizobium bacteria in soil fertility?", "They live in the root nodules of legumes (beans, groundnut) and fix atmospheric nitrogen into nitrogen compounds the plant can use, enriching the soil."),
  ("Compare sandy and clay soils on water retention and drainage.", "Sandy soil has large particles: it drains fast and holds little water. Clay soil has tiny particles: it holds water well but drains poorly and can waterlog."),
  ("Give two advantages of manure over inorganic fertilizer.", "Manure adds humus and improves soil structure and water-holding capacity; it is cheap and does not damage soil structure with long-term use the way heavy fertilizer use can."),
  ("What is leaching?", "Leaching is the washing down of soluble nutrients from the topsoil to deeper layers by heavy rain, where roots cannot reach them — leaving the topsoil poor."),
  ("State two environmental effects of bush burning.", "It destroys humus and soil organisms, exposes bare topsoil to erosion, kills seedlings and young animals, and releases smoke and carbon dioxide into the air."),
  ("Why should grazing be controlled on farmland and grassland?", "Overgrazing strips vegetation cover, exposing the soil to wind and water erosion and reducing regeneration of pasture — a major cause of desertification.")
 ],
 'Reproduction & Development': [
  ("Distinguish between sexual and asexual reproduction.", "Sexual reproduction involves two parents and the fusion of gametes, so offspring vary; asexual reproduction involves one parent and no gametes, so offspring are genetically identical to the parent."),
  ("Give two examples of asexual reproduction.", "Binary fission in Amoeba and budding in yeast or Hydra (also: vegetative propagation in cassava, fragmentation in Spirogyra)."),
  ("What is fertilization, and where does it occur in humans?", "Fertilization is the fusion of the male and female gametes to form a zygote. In humans it occurs in the fallopian tube (oviduct)."),
  ("State three functions of the placenta.", "It allows exchange of food and oxygen from mother to foetus and wastes (urea, carbon dioxide) from foetus to mother, produces pregnancy hormones, and acts as a partial barrier to some harmful substances."),
  ("What is the function of the amniotic fluid?", "It cushions the foetus against mechanical shock, allows free movement, and keeps an even temperature around it."),
  ("What is menstruation?", "The monthly shedding of the lining of the uterus (with blood) through the vagina when the released egg is not fertilized."),
  ("What are the two functions of the ovary?", "It produces the female gametes (ova/eggs) and secretes the female sex hormones (oestrogen and progesterone)."),
  ("What are the functions of the uterus?", "It receives and houses the developing foetus, its lining thickens for implantation, and its muscular wall expels the baby at birth."),
  ("Why does the sperm have a long tail?", "The tail (flagellum) whips to propel the sperm through the female reproductive tract to reach and fertilize the egg."),
  ("What changes occur at puberty in boys and girls, and what causes them?", "Sex hormones (testosterone in boys, oestrogen in girls) cause growth of reproductive organs, pubic hair, deepening of voice (boys), breast development and onset of menstruation (girls)."),
  ("Distinguish between pollination and fertilization in flowering plants.", "Pollination is the transfer of pollen grains from anther to stigma; fertilization is the fusion of a male nucleus (from the pollen) with the egg cell in the ovule to form a zygote."),
  ("What is the gestation period, and roughly how long is it in humans?", "Gestation is the period of development of the foetus inside the uterus from fertilization to birth — about 9 months (about 40 weeks) in humans.")
 ],
 'The Nervous System & Coordination': [
  ("What is a neuron, and what are the functions of its dendrites and axon?", "A neuron is the basic unit of the nervous system. Dendrites carry impulses TOWARDS the cell body; the axon carries impulses AWAY from it to the next cell."),
  ("What makes up the central nervous system, and the peripheral nervous system?", "The CNS is the brain and spinal cord; the PNS is all the nerves (cranial and spinal) connecting the CNS to the rest of the body."),
  ("Trace the path of a reflex arc.", "Receptor -> sensory neuron -> relay/interneuron in the spinal cord -> motor neuron -> effector (muscle or gland) — fast, automatic and protective."),
  ("Give one example of a reflex action and explain its value.", "Withdrawing the hand from a hot object: the response happens before the brain registers pain, so tissue damage is minimised."),
  ("Match each brain region to its function: cerebrum, cerebellum, medulla oblongata.", "Cerebrum — intelligence, memory, voluntary actions and senses; cerebellum — balance and muscular coordination; medulla oblongata — involuntary actions like heartbeat and breathing."),
  ("How do nervous and hormonal coordination differ?", "Nervous: electrical impulses, very fast, short-lived, target specific. Hormonal: chemicals in blood, slower, longer-lasting, wider targets."),
  ("Why is the pituitary gland called the master gland?", "Its hormones control or stimulate many other endocrine glands (thyroid, adrenal, gonads) as well as growth."),
  ("Which hormone regulates blood sugar, where is it produced, and what disease results from its deficiency?", "Insulin, produced by the pancreas (islets of Langerhans). Deficiency or poor response causes diabetes mellitus (high blood sugar)."),
  ("State three effects of adrenaline on the body.", "It increases heart rate and breathing rate, raises blood sugar by converting glycogen to glucose, and directs blood to the muscles — the 'fight or flight' response."),
  ("What is the function of thyroxine, and what deficiency disease results from lack of iodine?", "Thyroxine controls the body's metabolic rate and growth; iodine deficiency reduces its production and causes goitre (swelling of the neck)."),
  ("What is a synapse?", "The tiny junction between two neurons where the impulse crosses chemically (by a neurotransmitter) rather than electrically."),
  ("Why are drugs like alcohol and hard drugs dangerous to the nervous system?", "They alter or damage neuron function — slowing reactions, impairing judgement and memory, and long-term use can destroy brain and nerve tissue and cause addiction.")
 ],
 'Adaptation & Survival in Habitats': [
  ("Define adaptation.", "Adaptation is any feature of structure or behaviour that makes an organism well suited (fitted) to survive in its environment."),
  ("Name the major habitat types with one example each.", "Aquatic — freshwater (pond, river) and marine (sea); terrestrial — forest, savanna/grassland, desert, and arid/shrub land."),
  ("How is the water lily adapted to life on water?", "Broad flat leaves spread on the surface for maximum light, stomata on the UPPER surface for gas exchange, air spaces in the tissues for buoyancy, and flexible stems that bend with water movement."),
  ("State three adaptations of the camel to desert life.", "Fat stored in the hump (food reserve), long eyelashes and closable nostrils against sand, broad leathery feet that do not sink, thick skin and concentrated urine to conserve water."),
  ("What are xerophytes? Give two of their features.", "Xerophytes are plants adapted to dry habitats, e.g. cactus. Features: thick waxy cuticle, sunken or few stomata, leaves reduced to spines, and succulent water-storing stems."),
  ("What is an epiphyte? Give an example.", "An epiphyte grows on another plant (often a tall tree) purely for support and to reach sunlight in dense forest — e.g. orchids and some ferns. It does not take food from the host, so it is not a parasite."),
  ("Distinguish between camouflage and mimicry.", "Camouflage is colouring or shape that hides an organism in its background (stick insect); mimicry is a harmless species copying the appearance of a harmful one to escape predators (hoverfly imitating a wasp)."),
  ("Match these animals to their breathing structures: fish, insect, earthworm, mammal.", "Fish — gills; insect — tracheal system through spiracles; earthworm — moist body surface (diffusion); mammal — lungs."),
  ("Why do fish have a streamlined body and a nictitating membrane?", "The streamlined shape reduces water resistance for fast swimming; the transparent nictitating membrane protects the eye in water while still allowing sight."),
  ("Give two examples of commensalism.", "The remora (sucker fish) rides on sharks for transport and leftovers; egrets follow grazing cattle and eat insects flushed from the grass — the host is neither harmed nor helped."),
  ("Why is migration a survival strategy?", "It moves animals seasonally to where food, water and breeding conditions are available — e.g. birds flying to warmer regions in the harmattan/dry season."),
  ("State three effects of habitat destruction on organisms.", "Loss of shelter and breeding sites, loss of food sources, population decline and possible extinction, and forced contact between wildlife and humans (crop raiding, disease).")
 ],
 'Genetics & Heredity': [
  ("Define genetics and heredity.", "Genetics is the study of how characters are transmitted from parents to offspring; heredity (inheritance) is the actual transmission of those characters."),
  ("What is a gene, and where is it found?", "A gene is the basic unit of inheritance that determines a particular character; genes are located on chromosomes in the nucleus and are made of DNA."),
  ("Distinguish between genotype and phenotype.", "Genotype is the genetic make-up (e.g. Tt); phenotype is the outward appearance produced by it (e.g. tall)."),
  ("What is a dominant allele?", "An allele that expresses itself in the phenotype whenever it is present, masking the recessive allele in a heterozygote — e.g. T (tall) dominates t (short)."),
  ("Cross a homozygous tall (TT) with a short (tt) pea plant. What are the F1 and F2 results?", "F1: all Tt — all tall. If F1 self-crosses (Tt x Tt), F2 gives TT, 2Tt, tt — 3 tall : 1 short (phenotypic ratio 3:1)."),
  ("How is the sex of a human baby determined?", "The mother always gives an X chromosome; the father's sperm carries either X or Y. XX = female, XY = male — so the father's sperm determines the sex, with a 50:50 chance."),
  ("Why are sex-linked disorders like colour blindness more common in males?", "The genes are on the X chromosome. Males have only one X, so a single faulty allele shows the disorder; females need it on both X chromosomes."),
  ("Distinguish between continuous and discontinuous variation, with examples.", "Continuous variation shows a range with intermediates (height, skin colour, weight); discontinuous variation has distinct classes with no intermediates (blood groups, tongue rolling, sex)."),
  ("Who is the universal blood donor, and who is the universal recipient?", "Group O is the universal donor (no A or B antigens on its cells); group AB is the universal recipient (no antibodies against A or B)."),
  ("What is the genotype of a sickle cell carrier, and why can carriers be at an advantage?", "AS (heterozygous) — they produce some normal haemoglobin, so they are healthy, and the sickle trait gives some resistance to malaria."),
  ("State two practical applications of genetics.", "Selective breeding of crops and livestock for better yield, genetic counselling for couples (e.g. against SS risk), blood grouping for transfusion, and paternity/forensic tests using DNA."),
  ("How do identical twins differ from fraternal twins?", "Identical (monozygotic) twins come from one zygote that splits — same sex, same genes. Fraternal (dizygotic) twins come from two separate eggs fertilized by two sperms — like ordinary siblings.")
 ],
 'Ecology: Ecosystems & Energy Flow': [
  ("Define ecology and ecosystem.", "Ecology is the study of the relationship between organisms and their environment. An ecosystem is a community of living organisms interacting with the non-living parts of their environment."),
  ("Distinguish between biotic and abiotic factors, with examples.", "Biotic factors are the living components (plants, animals, decomposers, competition, predators); abiotic factors are non-living (temperature, light, rainfall, soil, pH)."),
  ("What are producers, consumers and decomposers?", "Producers (green plants) make their own food by photosynthesis; consumers (animals) feed on others; decomposers (bacteria, fungi) break down dead remains and recycle nutrients."),
  ("What does the arrow in a food chain represent?", "The direction of energy flow — from the organism being eaten to the organism that eats it, e.g. grass -> goat -> human."),
  ("Why are food chains usually short (4-5 links)?", "Only about 10% of energy passes to each next level (the rest is lost as heat, movement, and in waste), so too little energy remains to support many levels."),
  ("Name the three types of ecological pyramids.", "Pyramid of numbers, pyramid of biomass, and pyramid of energy (the energy pyramid is always upright)."),
  ("Outline the stages of the nitrogen cycle.", "Nitrogen fixation (Rhizobium bacteria and lightning convert N2 to usable compounds) -> nitrification (conversion to nitrates plants absorb) -> uptake by plants -> return via death/waste -> putrefaction and denitrification back to the air."),
  ("How do photosynthesis and combustion each affect atmospheric carbon dioxide?", "Photosynthesis removes CO2 from the air (building it into food); respiration and the burning of fuels and forests release CO2 back into the air."),
  ("State four factors that affect the size of a population.", "Birth rate (natality), death rate (mortality), immigration and emigration — plus food, space, disease and predation."),
  ("What is ecological succession?", "The gradual, orderly change in the community of an area over time — pioneer species (e.g. lichens, grasses) colonise first and are replaced in stages until a stable climax community (e.g. forest) develops."),
  ("Why do farmers and ecologists value decomposers?", "They break down dead plants and animals, releasing mineral nutrients back into the soil so producers can reuse them — nature's recycling system."),
  ("State two reasons for conserving wildlife (game reserves, national parks).", "To prevent extinction and preserve genetic variety, to maintain balanced ecosystems, for tourism revenue, and for scientific research and education.")
 ],
 'Photosynthesis & Respiration': [
  ("Write the word equation for photosynthesis.", "Carbon dioxide + water --(light energy, chlorophyll)--> glucose + oxygen. (Balanced: 6CO2 + 6H2O -> C6H12O6 + 6O2.)"),
  ("What is the role of chlorophyll in photosynthesis?", "It absorbs (traps) light energy and converts it into chemical energy used to split water and build glucose — it is housed in the chloroplasts."),
  ("Name the two stages of photosynthesis and where each occurs.", "The light-dependent stage (splits water, releases oxygen; in the grana) and the light-independent/dark stage (fixes CO2 into glucose; in the stroma)."),
  ("Name three limiting factors of photosynthesis.", "Light intensity, carbon dioxide concentration, and temperature (each can slow the rate when in short supply)."),
  ("Outline the starch test on a leaf.", "Destarch the plant in darkness, then expose a leaf to light; boil it (kills cells), decolourise in hot alcohol (removes chlorophyll), rinse, and add iodine — a blue-black colour shows starch, proving photosynthesis occurred."),
  ("Write the word equation for aerobic respiration.", "Glucose + oxygen -> carbon dioxide + water + energy (as ATP). Balanced: C6H12O6 + 6O2 -> 6CO2 + 6H2O + energy."),
  ("Where in the cell does aerobic respiration mainly occur?", "In the mitochondria — hence their name, the powerhouse of the cell."),
  ("What happens during anaerobic respiration in human muscles, and what is oxygen debt?", "During hard exercise glucose breaks down without enough oxygen to lactic acid, causing fatigue and cramps. The extra oxygen needed afterwards to oxidise the lactic acid is the oxygen debt."),
  ("State the products of fermentation in yeast and one economic use.", "Ethanol and carbon dioxide. Uses: brewing alcoholic drinks (beer, palm wine) and making bread rise."),
  ("Give three differences between photosynthesis and respiration.", "Photosynthesis: in chloroplasts, only in light, uses CO2 and water, stores energy, releases O2. Respiration: in mitochondria (and cytoplasm), day and night, uses O2 and glucose, releases energy, releases CO2."),
  ("State four uses of the glucose made in photosynthesis.", "Oxidised in respiration for energy; stored as starch (or oils in seeds); converted to cellulose for cell walls; changed to sucrose for transport in the phloem; used with nitrates to make proteins."),
  ("Through which structures do leaves exchange gases?", "Through the stomata (pores, mainly on the lower surface) — CO2 enters and O2 leaves by diffusion, controlled by the guard cells.")
 ],
 'Variation, Selection & Evolution': [
  ("Define variation.", "Variation is the differences in characteristics between individuals of the same species — no two individuals (except identical twins) are exactly alike."),
  ("Classify these as continuous or discontinuous variation: height, blood group, skin colour, ability to roll the tongue.", "Continuous: height, skin colour (a full range of intermediates). Discontinuous: blood group, tongue rolling (distinct classes, no intermediates)."),
  ("State two causes of variation.", "Genetic causes — differences in genes inherited from parents (including mutation); and environmental causes — climate, diet, accidents and training acting on the organism."),
  ("Summarize Darwin's theory of natural selection.", "Organisms produce more offspring than can survive; individuals vary, and those with variations best suited to the environment survive and reproduce, passing on those advantages — 'survival of the fittest'."),
  ("State three lines of evidence for evolution.", "Fossil records showing gradual change in past life; comparative anatomy (homologous structures); and comparative embryology and vestigial organs."),
  ("Distinguish between homologous and analogous structures with examples.", "Homologous: same basic structure, different functions — forelimbs of human, bat and whale (common ancestry). Analogous: different structure, same function — wings of insects and birds (independent adaptation)."),
  ("What are vestigial organs? Give two examples in humans.", "Vestigial organs are remnants of structures that were functional in ancestors but are now reduced and useless — e.g. the appendix, wisdom teeth, the tail bone (coccyx), and body hair."),
  ("What is mutation, and why is it important in evolution?", "Mutation is a sudden change in the genes or chromosomes. It creates new variations on which natural selection can act — e.g. the sickle cell gene."),
  ("Give two examples of artificial selection by humans.", "Breeding dairy cattle for high milk yield, maize or cassava varieties for bigger yields and disease resistance, and dogs bred for specific traits."),
  ("Explain industrial melanism in the peppered moth.", "In soot-darkened industrial areas the dark (melanic) moths were camouflaged on blackened trees and escaped bird predation, so they survived and bred more — the environment selected the dark variety."),
  ("Define evolution.", "Evolution is the gradual change in the characteristics of living organisms from simple to more complex forms over many generations, through variation and natural selection."),
  ("Why is variation important to a species?", "It gives some individuals advantages when the environment changes, so the species can adapt and survive rather than die out — it is the raw material for natural selection and for crop and livestock improvement.")
 ]
}

inserted = 0
for title, pairs in CARDS.items():
    assert len(pairs) == 12, title
    anchor = "\n          title: '" + title + "',"
    assert s.count(anchor) == 1, 'title anchor not unique: ' + title
    i = s.index(anchor)
    j = s.index('cards: [', i)
    k = s.index('\n', j) + 1
    block = ''.join("            { q: '%s', a: '%s' },\n" % (esc(q), esc(a)) for q, a in pairs)
    s = s[:k] + block + s[k:]
    inserted += len(pairs)

open(PATH, 'w', encoding='utf-8').write(s)
print('inserted', inserted, 'new Biology flashcards')
