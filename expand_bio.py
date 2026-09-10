"""Deep-expand SS Biology lessons (batch 3): textbook dives, worked examples, traps, diagrams."""
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

deep('Nutrition: Digestion in Humans', """

    <h3>Deep dive: the journey of a plate of rice</h3>
    <p>Digestion is <b>mechanical</b> (chewing, churning) plus <b>chemical</b> (enzymes) until food molecules are small enough to cross the gut wall. The route: <b>mouth → oesophagus → stomach → duodenum → ileum → colon → rectum → anus</b>. Peristalsis — rhythmic waves of muscle contraction — pushes food along the whole canal.</p>
    <table class="mb-3 w-full border-collapse text-left text-xs">
      <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">Site</th><th class="border border-slate-200 p-1.5">Enzyme / juice</th><th class="border border-slate-200 p-1.5">Action</th></tr></thead>
      <tbody>
        <tr><td class="border border-slate-200 p-1.5">Mouth</td><td class="border border-slate-200 p-1.5">Salivary amylase (ptyalin), pH ≈ 6.8</td><td class="border border-slate-200 p-1.5">Starch → maltose</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Stomach</td><td class="border border-slate-200 p-1.5">Pepsin + HCl, pH ≈ 2 (rennin in infants)</td><td class="border border-slate-200 p-1.5">Proteins → polypeptides; rennin curdles milk</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Duodenum</td><td class="border border-slate-200 p-1.5">Pancreatic amylase, trypsin, lipase + bile from the liver</td><td class="border border-slate-200 p-1.5">Starch → maltose; polypeptides → peptides; fats emulsified then → fatty acids + glycerol</td></tr>
        <tr><td class="border border-slate-200 p-1.5">Ileum</td><td class="border border-slate-200 p-1.5">Erepsin, maltase, sucrase, lactase</td><td class="border border-slate-200 p-1.5">Peptides → amino acids; maltose → glucose</td></tr>
      </tbody>
    </table>
    <p><b>Bile contains NO enzyme</b> — it emulsifies fats into tiny droplets (larger surface for lipase) and neutralises stomach acid. Absorption happens mainly in the <b>ileum</b>, whose finger-like <b>villi</b> give enormous surface area: glucose and amino acids enter blood capillaries → hepatic portal vein → liver; fatty acids and glycerol enter the <b>lacteal</b> (lymph). The colon reabsorbs water — which is why dehydration follows prolonged diarrhoea.</p>
    <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="14" y="20" font-size="10" fill="#0f172a">mouth</text>
      <line x1="45" y1="16" x2="70" y2="16" stroke="#4f46e5" stroke-width="2"/>
      <text x="74" y="20" font-size="10" fill="#0f172a">oesophagus</text>
      <line x1="130" y1="16" x2="155" y2="16" stroke="#4f46e5" stroke-width="2"/>
      <text x="159" y="20" font-size="10" fill="#0f172a">stomach</text>
      <line x1="205" y1="16" x2="230" y2="16" stroke="#4f46e5" stroke-width="2"/>
      <text x="234" y="20" font-size="10" fill="#0f172a">duodenum</text>
      <path d="M20 40 q60 0 120 0 q40 0 40 14 q0 14 -40 14 q-40 0 -100 0 q-30 0 -30 14 q0 14 30 14 q80 0 150 0" fill="none" stroke="#818cf8" stroke-width="3"/>
      <text x="150" y="112" text-anchor="middle" font-size="10" fill="#4338ca">long coiled ileum — villi absorb here</text>
      <rect x="240" y="90" width="50" height="26" fill="#e2e8f0" stroke="#94a3b8"/>
      <text x="265" y="107" text-anchor="middle" font-size="9" fill="#334155">colon</text>
      <text x="150" y="138" text-anchor="middle" font-size="10" fill="#64748b">mouth → oesophagus → stomach → duodenum → ileum → colon → rectum → anus</text>
    </svg></div>
    <h3>Worked example</h3>
    <p><b>Which enzyme acts where, and why does bread taste sweet after prolonged chewing?</b> Salivary amylase in the mouth slowly converts the starch in bread to maltose, a sweet sugar — the taste appears as chewing continues.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Bile is NOT an enzyme; it emulsifies. Saying "bile digests fat" costs marks.</li>
      <li>Pepsin works only in the stomach's acidic pH — it denatures in the alkaline duodenum.</li>
      <li>Digestion ends in the ileum, not the stomach; the stomach only starts protein digestion.</li>
    </ul>
    <h3>See it around you</h3>
    <p>Protein deficiency shows as kwashiorkor (swollen belly) and marasmus (wasting) in malnourished children; dentists trace tooth decay to sugar + bacteria + time. A balanced plate — swallow with soup, beans, vegetables, fruit — supplies every class of nutrient.</p>
""")

deep('Reproduction & Development', """

    <h3>Deep dive: from gamete to baby</h3>
    <p>Sexual reproduction fuses a <b>sperm</b> (tiny, motile, produced in the testes) with an <b>ovum</b> (large, non-motile, released from the ovary) at <b>fertilisation</b>. Fertilisation normally occurs in the <b>fallopian tube (oviduct)</b> — not the uterus. The resulting zygote divides as it travels and <b>implants</b> in the lining of the <b>uterus</b>.</p>
    <p><b>The menstrual cycle (~28 days)</b>: FSH ripens a follicle; oestrogen rebuilds the uterine lining; LH surge triggers <b>ovulation around day 14</b>; progesterone maintains the lining; if no fertilisation, the lining sheds as menstruation (days 1–5).</p>
    <p><b>In pregnancy</b> the <b>placenta</b> exchanges food, oxygen and waste between mother and foetus — their blood never actually mixes — while the <b>amniotic fluid</b> cushions the foetus and the <b>umbilical cord</b> carries the blood vessels between them. The baby is full-term at about 40 weeks.</p>
    <h3>Puberty and adolescent health</h3>
    <ul>
      <li><b>Boys</b>: voice deepens, facial hair, shoulders broaden, sperm production begins.</li>
      <li><b>Girls</b>: breasts develop, hips widen, menstruation begins (menarche).</li>
      <li><b>STIs</b> — gonorrhoea, syphilis, HIV/AIDS — spread mainly through sexual contact; abstinence, fidelity and condoms prevent them. Antenatal care and exclusive breastfeeding for six months are standard public-health advice in Nigeria.</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>A woman's cycle is 28 days and her period began on day 1. When is she most likely to ovulate, and why does this matter for family planning?</b> Ovulation ≈ day 14 (14 days before the next period). The few days around it are the fertile window — the basis of the rhythm method, which is less reliable than modern contraceptives because cycle length varies.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Fertilisation: fallopian tube. Implantation: uterus. Mixing these up is the classic lost mark.</li>
      <li>Placenta = exchange surface; blood does NOT flow directly from mother to foetus.</li>
      <li>Identical twins share one zygote (same sex, same genes); fraternal twins are two separate ova.</li>
    </ul>
""")

deep('Genetics & Heredity', """

    <h3>Deep dive: the language of inheritance</h3>
    <p>A <b>gene</b> is a unit of inheritance on a chromosome; alternative forms are <b>alleles</b>. <b>Genotype</b> = the letters you carry (TT, Tt, tt); <b>phenotype</b> = what shows (tall or short). A <b>dominant</b> allele masks a <b>recessive</b> one, so Tt looks tall. <b>Homozygous</b> = same alleles (TT, tt); <b>heterozygous</b> = different (Tt) — the "carrier" state.</p>
    <h3>Mendel's monohybrid cross, drawn out</h3>
    <div class="diagram"><svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="120" y="18" font-size="11" fill="#0f172a">Tt (tall) × Tt (tall)</text>
      <text x="70" y="45" font-size="11" font-weight="bold" fill="#4f46e5">T</text>
      <text x="150" y="45" font-size="11" font-weight="bold" fill="#4f46e5">t</text>
      <text x="20" y="80" font-size="11" font-weight="bold" fill="#4f46e5">T</text>
      <text x="20" y="125" font-size="11" font-weight="bold" fill="#4f46e5">t</text>
      <rect x="40" y="55" width="80" height="40" fill="#dcfce7" stroke="#94a3b8"/>
      <rect x="120" y="55" width="80" height="40" fill="#dcfce7" stroke="#94a3b8"/>
      <rect x="40" y="95" width="80" height="40" fill="#dcfce7" stroke="#94a3b8"/>
      <rect x="120" y="95" width="80" height="40" fill="#fee2e2" stroke="#94a3b8"/>
      <text x="80" y="80" text-anchor="middle" font-size="11" fill="#0f172a">TT tall</text>
      <text x="160" y="80" text-anchor="middle" font-size="11" fill="#0f172a">Tt tall</text>
      <text x="80" y="120" text-anchor="middle" font-size="11" fill="#0f172a">Tt tall</text>
      <text x="160" y="120" text-anchor="middle" font-size="11" fill="#0f172a">tt short</text>
      <text x="250" y="80" font-size="10" fill="#334155">phenotype</text>
      <text x="250" y="95" font-size="10" fill="#334155">3 tall : 1 short</text>
      <text x="250" y="118" font-size="10" fill="#334155">genotype</text>
      <text x="250" y="133" font-size="10" fill="#334155">1 : 2 : 1</text>
    </svg></div>
    <p>The 3 : 1 <b>phenotypic</b> ratio and 1 : 2 : 1 <b>genotypic</b> ratio are probabilities across many offspring — a family of four children is not guaranteed three tall and one short. A <b>test cross</b> (mating with homozygous recessive tt) reveals whether a tall plant is TT or Tt.</p>
    <h3>Sex determination and sex linkage</h3>
    <p>Females are <b>XX</b>, males <b>XY</b> — the father's sperm decides the sex (50 : 50). Sex-linked genes ride on the X chromosome: <b>colour blindness</b> and <b>haemophilia</b> appear mostly in males (XY — one defective X is enough), while females with one defective X are healthy <b>carriers</b>.</p>
    <h3>Worked example: the ABO blood groups</h3>
    <p><b>Father Iᴬi × Mother Iᴬi (both group A carriers). Possible children?</b> Punnett gives IᴬIᴬ (A), Iᴬi (A), Iᴬi (A), ii (O) — 3 : 1 chance of A : O. If instead Iᴬi × Iᴮi: children may be A, B, AB or O. This is why full blood-group testing matters before transfusion.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Dominant ≠ more common in the population (albinism is recessive but appears; polydactyly is dominant but rare).</li>
      <li>A carrier (Tt, or XᴴXʰ) shows no symptoms but can pass the allele on.</li>
      <li>In Nigeria, <b>sickle-cell</b> screening (AA, AS, SS) before marriage prevents AS × AS unions, where 1 in 4 children risks SS — the single most examinable genetics application.</li>
    </ul>
""")

deep('Soil, Conservation & Our Environment', """

    <h3>Deep dive: what soil is made of</h3>
    <p>Ideal loam is roughly <b>45% mineral particles, 25% water, 25% air and 5% humus</b>. Particle size decides behaviour: <b>sand</b> (large, drains fast, poor at nutrients), <b>clay</b> (tiny, waterlogged, sticky, nutrient-rich), <b>silt</b> in between, <b>loam</b> the balanced farmer's choice. Dig down and you see the <b>soil profile</b>: horizon A (dark, humus-rich topsoil), horizon B (leached minerals accumulate), horizon C (weathering rock), then bedrock.</p>
    <div class="diagram"><svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="20" y="10" width="200" height="24" fill="#57534e"/>
      <rect x="20" y="34" width="200" height="30" fill="#78716c"/>
      <rect x="20" y="64" width="200" height="30" fill="#a8a29e"/>
      <rect x="20" y="94" width="200" height="30" fill="#d6d3d1"/>
      <text x="230" y="26" font-size="10" fill="#334155">A — topsoil (humus)</text>
      <text x="230" y="52" font-size="10" fill="#334155">B — subsoil</text>
      <text x="230" y="82" font-size="10" fill="#334155">C — weathered rock</text>
      <text x="230" y="112" font-size="10" fill="#334155">bedrock</text>
      <line x1="30" y1="6" x2="30" y2="30" stroke="#22c55e" stroke-width="2"/>
      <line x1="60" y1="4" x2="60" y2="28" stroke="#22c55e" stroke-width="2"/>
      <line x1="90" y1="8" x2="90" y2="30" stroke="#22c55e" stroke-width="2"/>
      <text x="120" y="8" font-size="9" fill="#16a34a">crops root into A and B</text>
    </svg></div>
    <h3>Plant nutrients and soil care</h3>
    <ul>
      <li><b>Nitrogen (N)</b> — leafy growth (urea, manure); <b>Phosphorus (P)</b> — roots and fruit; <b>Potassium (K)</b> — disease resistance and ripening.</li>
      <li><b>Manure</b> adds humus and improves texture but is weaker; <b>fertiliser</b> is concentrated and fast but adds no humus — best practice combines both.</li>
      <li><b>Crop rotation and legumes</b> (beans, groundnut) restore nitrogen; <b>cover crops</b> shield bare soil.</li>
    </ul>
    <h3>Erosion: types and control</h3>
    <p>Water erosion runs <b>splash → sheet → rill → gully</b>; wind erosion strips the Sahel. Controls: <b>contour ploughing</b>, <b>terracing</b> on slopes, <b>cover cropping</b>, <b>crop rotation</b>, <b>windbreaks</b>, <b>afforestation</b> and controlled grazing. The famous gully sites around Nnewi and Agulu–Nanka in Anambra show what happens when vegetation is stripped and heavy rain follows the slope.</p>
    <h3>Worked example</h3>
    <p><b>Why does a clay soil hold more water but support plant roots worse than loam?</b> Its tiny particles leave only tiny capillary pores — water clings by capillarity and drains slowly, so the soil stays waterlogged and air (which roots need for respiration) cannot enter. Loam's mixture of particle sizes balances water retention with drainage and aeration.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Clay is the best at <b>retaining</b> water; sand is the best at <b>draining</b> it — opposite skills.</li>
      <li>Humus is decomposed organic matter, not living organisms — though earthworms and bacteria make it.</li>
      <li>Desertification (north) and gully erosion (south-east) are the two Nigerian case studies examiners love.</li>
    </ul>
""")

deep('Adaptation & Survival in Habitats', """

    <h3>Deep dive: three kinds of adaptation</h3>
    <ul>
      <li><b>Structural</b> — body features: webbed feet, spines, streamlining.</li>
      <li><b>Behavioural</b> — actions: migration, nocturnal activity, courtship displays, aestivation.</li>
      <li><b>Physiological</b> — internal chemistry: camel tolerating high body temperature, desert rat concentrating urine.</li>
    </ul>
    <h3>Habitat-by-habitat adaptations</h3>
    <ul>
      <li><b>Aquatic</b>: fish are streamlined with gills, fins and a swim bladder for buoyancy; water lily has stomata on the <b>upper</b> leaf surface and air spaces for flotation.</li>
      <li><b>Desert</b>: cactus stores water in the stem, leaves reduced to spines (less transpiration), sunken stomata, long deep roots; the camel's hump stores fat (metabolic water), nostrils close against sand, and it survives 25% body-water loss.</li>
      <li><b>Rain forest</b>: trees have buttress roots and drip-tip leaves to shed heavy rain; lianas climb for light; animals are often arboreal with grasping limbs.</li>
      <li><b>Savanna</b>: grasses survive fire and grazing by growing from the base; acacias have thorns; large herbivores migrate with the rains.</li>
    </ul>
    <h3>Examiner's traps</h3>
    <ul>
      <li><b>Camouflage</b> = blending in; <b>mimicry</b> = resembling a different (often dangerous) species — don't mix them up.</li>
      <li>Aestivation = dry-season dormancy; hibernation = cold-season dormancy.</li>
      <li>Freshwater fish gain water by osmosis (dilute urine, no drinking); marine fish lose it (concentrated urine, drink seawater) — opposite osmoregulation.</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>Explain how a mudskipper survives in Nigerian mangrove swamps.</b> It breathes through moist skin and gill chambers lined with blood vessels (a structural adaptation to air), uses strong pectoral fins to "walk" on mud (behavioural/structural), and retreats into wet burrows at low tide (behavioural) — three adaptation types in one animal.</p>
    <h3>See it around you</h3>
    <p>Mosquitoes bite at dusk (behavioural, and why nets work at night), goats in the north browse drought-resistant shrubs, and the lungfish aestivates in mud cocoons until the rains return — adaptation is the reason life persists through the harmattan and the dry season.</p>
""")

deep('The Nervous System & Coordination', """

    <h3>Deep dive: the neuron, the unit of the system</h3>
    <p>The nervous system = <b>central</b> (brain + spinal cord) + <b>peripheral</b> (nerves). A neuron carries impulses one way: <b>dendrites → cell body → axon → axon terminals → next neuron</b>. The fatty <b>myelin sheath</b> insulates the axon and speeds conduction; gaps in it (nodes of Ranvier) let the impulse jump. Three functional types: <b>sensory</b> (receptor → CNS), <b>relay</b> (inside CNS), <b>motor</b> (CNS → effector).</p>
    <div class="diagram"><svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="60" y1="60" x2="40" y2="35" stroke="#4f46e5" stroke-width="2"/>
      <line x1="60" y1="60" x2="38" y2="60" stroke="#4f46e5" stroke-width="2"/>
      <line x1="60" y1="60" x2="40" y2="85" stroke="#4f46e5" stroke-width="2"/>
      <circle cx="75" cy="60" r="16" fill="#c7d2fe" stroke="#4f46e5"/>
      <text x="75" y="64" text-anchor="middle" font-size="8" fill="#3730a3">cell body</text>
      <line x1="91" y1="60" x2="250" y2="60" stroke="#4f46e5" stroke-width="3"/>
      <rect x="110" y="52" width="24" height="16" fill="#fbbf24" opacity="0.8"/>
      <rect x="150" y="52" width="24" height="16" fill="#fbbf24" opacity="0.8"/>
      <rect x="190" y="52" width="24" height="16" fill="#fbbf24" opacity="0.8"/>
      <line x1="250" y1="60" x2="270" y2="40" stroke="#4f46e5" stroke-width="2"/>
      <line x1="250" y1="60" x2="272" y2="60" stroke="#4f46e5" stroke-width="2"/>
      <line x1="250" y1="60" x2="270" y2="80" stroke="#4f46e5" stroke-width="2"/>
      <text x="30" y="105" font-size="9" fill="#64748b">dendrites</text>
      <text x="115" y="42" font-size="9" fill="#b45309">myelin sheath</text>
      <text x="185" y="95" font-size="9" fill="#64748b">axon</text>
      <text x="248" y="105" font-size="9" fill="#64748b">terminals</text>
      <text x="160" y="15" font-size="10" fill="#4338ca">impulse direction →</text>
    </svg></div>
    <h3>The reflex arc — five parts, no thinking</h3>
    <p><b>Receptor → sensory neuron → relay neuron (spinal cord) → motor neuron → effector.</b> Touch a hot pot and the hand withdraws before the brain registers pain — the shortcut through the spinal cord is what saves tissue. Reflexes are <b>rapid, automatic and involuntary</b>: knee jerk, blinking, pupil constriction.</p>
    <h3>Divisions of the brain</h3>
    <ul>
      <li><b>Cerebrum</b> — thinking, memory, voluntary action, the senses.</li>
      <li><b>Cerebellum</b> — balance and muscle coordination (why you don't fall off a bicycle).</li>
      <li><b>Medulla oblongata</b> — involuntary life support: heartbeat, breathing, blood pressure.</li>
    </ul>
    <p>The <b>autonomic</b> system runs the body's autopilot in two opposing gears: <b>sympathetic</b> (fight-or-flight: pupil dilates, heart races, digestion slows) and <b>parasympathetic</b> (rest-and-digest).</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>A reflex bypasses conscious thought — the brain is informed afterwards.</li>
      <li>Heartbeat lives in the medulla, not the cerebrum; balance lives in the cerebellum.</li>
      <li>Myelin <b>speeds</b> conduction; damage to it (as in some diseases) slows every signal.</li>
    </ul>
""")

deep('Ecology: Ecosystems & Energy Flow', """

    <h3>Deep dive: levels of organisation and the 10% rule</h3>
    <p>Ecology stacks up: <b>organism → population → community → ecosystem → biosphere</b>. A <b>habitat</b> is an organism's address; its <b>niche</b> is its profession — what it eats, when it is active, where it nests. Two species cannot share a niche indefinitely (competitive exclusion).</p>
    <p>Energy enters as sunlight, is fixed by <b>producers</b>, and passes along food chains — but only about <b>10% transfers to each next trophic level</b>; the rest is lost as heat, movement and undigested waste. That single fact explains why food chains rarely exceed four or five levels, why herbivores outnumber lions, and why pyramids of energy are never inverted.</p>
    <h3>Worked example</h3>
    <p><b>Producers in a savanna plot fix 10,000 J. How much reaches a tertiary consumer?</b> Primary consumer ≈ 1,000 J → secondary ≈ 100 J → tertiary ≈ <b>10 J</b>. One thousandth of the original energy — this is why meat is "expensive" in energy terms.</p>
    <h3>Human impact and conservation in Nigeria</h3>
    <ul>
      <li><b>Niger Delta oil spills</b> coat mangroves and kill fish — ecosystem recovery takes decades.</li>
      <li><b>Deforestation</b> (fuelwood, farming) removes habitat, worsens erosion and raises atmospheric CO₂.</li>
      <li><b>Conservation</b>: national parks such as <b>Yankari</b> (Bauchi) and <b>Cross River</b> protect wildlife; afforestation, controlled burning and anti-poaching laws sustain it.</li>
    </ul>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Energy <b>flows</b> one way and is lost as heat; nutrients <b>cycle</b> forever.</li>
      <li>A pyramid of <b>numbers</b> CAN invert (one big tree → thousands of insects); a pyramid of <b>energy</b> never does.</li>
      <li>Decomposers (bacteria, fungi) belong at every level — they recycle what all others leave behind.</li>
    </ul>
""")

deep('Photosynthesis & Respiration', """

    <h3>Deep dive: the two great equations</h3>
    <div class="formula">Photosynthesis: 6CO₂ + 6H₂O → (light, chlorophyll) → C₆H₁₂O₆ + 6O₂<br/>Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)</div>
    <p>They look like mirror images but run independently: <b>photosynthesis</b> happens only in green parts, only in light, and stores energy in glucose; <b>respiration</b> happens in <b>every living cell, day and night</b>, releasing that energy as ATP. A leaf in daylight does both at once; at the <b>compensation point</b> the two rates balance exactly.</p>
    <p><b>Anaerobic respiration</b> takes over without oxygen: in muscles → glucose → <b>lactic acid</b> + small energy (the burn after sprinting); in yeast → glucose → <b>ethanol + CO₂</b> (brewing and bread rising).</p>
    <h3>Leaf adaptations for photosynthesis</h3>
    <ul>
      <li><b>Broad and thin</b> — large surface, short diffusion path.</li>
      <li><b>Palisade mesophyll</b> packed with chloroplasts near the upper surface where light is strongest.</li>
      <li><b>Stomata</b> (mostly underneath) for CO₂ in, O₂ out; guard cells open them in light.</li>
      <li><b>Veins</b> deliver water and carry away glucose.</li>
    </ul>
    <p><b>Limiting factors</b>: raise light, CO₂ or warmth and the rate rises — until something else becomes the bottleneck. Greenhouses exploit this (extra CO₂ and controlled heat); the classic lab proof is <b>counting oxygen bubbles from pondweed</b> at different lamp distances.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Plants respire <b>all the time</b> — "plants photosynthesise, animals respire" is wrong.</li>
      <li>Muscles make <b>lactic acid</b>; yeast makes <b>ethanol</b> — never swap them.</li>
      <li>Oxygen produced in photosynthesis comes from the splitting of <b>water</b>.</li>
    </ul>
""")

deep('Variation, Selection & Evolution', """

    <h3>Deep dive: variation is the raw material</h3>
    <p><b>Variation</b> = differences within a species. <b>Continuous</b> variation shows a range with every value between (height, skin colour) — usually many genes plus environment; <b>discontinuous</b> variation falls into distinct classes (blood group, tongue rolling) — usually single genes. Sources: mutation, recombination in sexual reproduction, and environmental effects.</p>
    <h3>Darwin's natural selection, step by step</h3>
    <ol>
      <li>Organisms produce <b>more offspring</b> than can survive.</li>
      <li>Offspring <b>vary</b>; some variations suit the environment better.</li>
      <li>A <b>struggle for existence</b> (food, space, mates, predators) follows.</li>
      <li>The best-adapted survive and reproduce — <b>survival of the fittest</b>.</li>
      <li>Advantageous traits <b>accumulate</b> over generations; the population changes — evolution.</li>
    </ol>
    <p>The <b>peppered moth</b> is the textbook case: pale moths dominated until soot blackened Manchester's trees, then the dark form became common because birds spotted the pale ones — selection reversed when clean-air laws returned.</p>
    <h3>Evidence for evolution</h3>
    <ul>
      <li><b>Fossils</b> — a dated record of change (e.g. horse ancestors).</li>
      <li><b>Homologous structures</b> — same basic plan, different jobs (human arm, bat wing, whale flipper): common ancestry.</li>
      <li><b>Analogous structures</b> — same job, different plans (bird wing vs insect wing): convergent evolution, NOT ancestry.</li>
      <li><b>Vestigial organs</b> — leftovers like the human appendix and tail bone.</li>
    </ul>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Lamarck said traits are gained by <b>use and disuse</b> and inherited (giraffe stretching its neck); Darwin showed <b>selection on existing variation</b> — examiners ask you to contrast them.</li>
      <li>Homologous ≠ analogous; the words are one letter apart, the concepts are opposites.</li>
      <li>Antibiotic and insecticide <b>resistance</b> is evolution happening now, in Nigerian hospitals and farms — resistant strains were already there; the drug selected them.</li>
    </ul>
""")

deep('The Cell: Structure & Function', """

    <h3>Deep dive: plant vs animal cells, organelle by organelle</h3>
    <p>Both cell types share a <b>cell membrane</b> (selectively permeable gatekeeper), <b>cytoplasm</b>, <b>nucleus</b> (control centre, carries DNA), <b>mitochondria</b> (aerobic respiration — the powerhouse), <b>ribosomes</b> (protein synthesis), <b>endoplasmic reticulum</b> (transport network) and <b>Golgi bodies</b> (packaging). Plant cells add three things animals lack: a rigid <b>cellulose cell wall</b>, a large permanent <b>vacuole</b> (cell sap; keeps the cell turgid), and <b>chloroplasts</b> (photosynthesis). Animal cells have small, temporary vacuoles and no wall.</p>
    <h3>Levels of organisation</h3>
    <p><b>Cell → tissue → organ → system → organism</b>: muscle cell → muscle tissue → heart → circulatory system → human. The same ladder runs in plants: cell → tissue → leaf → shoot system → mango tree.</p>
    <h3>Cell specialisation — form follows function</h3>
    <ul>
      <li><b>Red blood cell</b> — biconcave (more surface), no nucleus (more haemoglobin) for oxygen carriage.</li>
      <li><b>Nerve cell</b> — long axon to carry impulses across the body.</li>
      <li><b>Root hair cell</b> — long projection for maximum water absorption.</li>
      <li><b>Sperm</b> — tail for swimming, many mitochondria for energy.</li>
    </ul>
    <h3>Worked example</h3>
    <p><b>A cell seen under the microscope has a cell wall, a large vacuole and green chloroplasts. Identify it and justify.</b> A plant cell — specifically from a green tissue (leaf or young stem), since chloroplasts are present; the wall and large vacuole rule out an animal cell.</p>
    <h3>Examiner's traps</h3>
    <ul>
      <li>Cell walls are NOT exclusive to plants — fungi and bacteria have them too (but of different materials; fungi use chitin).</li>
      <li>Mitochondria are in plant cells as well — plants respire too.</li>
      <li>In the classic cheek-cell practical, methylene blue stains the <b>nucleus</b>; the iodine test on onion cells shows starch only if the tissue stores it.</li>
    </ul>
""")

open(CUR, 'w', encoding='utf-8').write(s)
print('Biology batch 3 written: 10 topics deep-expanded')
