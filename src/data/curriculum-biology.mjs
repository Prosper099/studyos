export default {

    color: 'lime', icon: '🧬', blurb: 'Cells, genetics, ecology and human physiology for WAEC theory questions.',
    topics: {
      SS1: [
        {
          title: 'The Cell: Structure & Function',
          tags: ['Organelles', 'Plant vs animal cell', 'Diffusion'],
          summary: 'What each organelle does and the differences between plant and animal cells.',
          content: `
            <h3>Key organelles</h3>
            <table><tr><th>Organelle</th><th>Function</th></tr>
            <tr><td>Nucleus</td><td>Controls cell activities; contains DNA</td></tr>
            <tr><td>Mitochondrion</td><td>Site of aerobic respiration — the "powerhouse"</td></tr>
            <tr><td>Ribosome</td><td>Protein synthesis</td></tr>
            <tr><td>Chloroplast</td><td>Photosynthesis (plant cells only)</td></tr>
            <tr><td>Vacuole</td><td>Storage; maintains turgor in plants</td></tr>
            <tr><td>Cell membrane</td><td>Selectively permeable boundary</td></tr></table>
            <h3>Plant vs animal cells</h3>
            <p>Plant cells have a <b>cellulose cell wall</b>, <b>chloroplasts</b> and a <b>large permanent vacuole</b>; animal cells have none of these but do contain <b>centrioles</b>.</p>
            <h3>Transport across the membrane</h3>
            <ul><li><b>Diffusion</b> — movement from high to low concentration, down a gradient, no energy.</li>
            <li><b>Osmosis</b> — diffusion of water through a selectively permeable membrane.</li>
            <li><b>Active transport</b> — against the concentration gradient, requires energy (ATP).</li></ul>
            <div class="worked"><b>Worked example:</b> A red blood cell placed in pure water swells and bursts (haemolysis) because water enters by osmosis — the cell has no wall to resist the pressure.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> A red blood cell is placed in distilled water. Describe and explain what happens.<br>
            Water enters by <b>osmosis</b> because the cell contents are more concentrated than the surrounding water. The cell swells and bursts (<b>haemolysis</b>) because it has no cell wall to resist the pressure.</div>
            <div class="worked"><b>Q2.</b> Which two structures are found in a plant cell but not in an animal cell?<br>
            The <b>cellulose cell wall</b> and <b>chloroplasts</b> (a large permanent vacuole is also typical of plant cells).</div>
            <div class="worked"><b>Q3.</b> Explain why root hair cells have many mitochondria.<br>
            They absorb mineral salts by <b>active transport</b>, which requires energy released by respiration in the mitochondria.</div>
            <div class="diagram">
              <div class="diagram-title">A typical animal cell</div>
              <svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animal cell showing nucleus, mitochondrion, ribosomes, endoplasmic reticulum, vacuole and cell membrane">
                <rect x="6" y="6" width="368" height="218" rx="14" fill="#f0fdf4"/>
                <ellipse cx="190" cy="115" rx="168" ry="92" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
                <text x="34" y="46" font-size="10" fill="#14532d">cell membrane</text>
                <circle cx="190" cy="105" r="40" fill="#a7f3d0" stroke="#047857" stroke-width="2.5"/>
                <circle cx="190" cy="105" r="14" fill="#059669"/>
                <text x="190" y="109" text-anchor="middle" font-size="9" fill="#ffffff">nucleolus</text>
                <text x="190" y="160" text-anchor="middle" font-size="10" fill="#065f46">nucleus</text>
                <ellipse cx="88" cy="88" rx="26" ry="13" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
                <path d="M70 88 Q88 78 106 88 M70 88 Q88 98 106 88" stroke="#78350f" stroke-width="1.4" fill="none"/>
                <text x="88" y="70" text-anchor="middle" font-size="9" fill="#78350f">mitochondrion</text>
                <ellipse cx="300" cy="80" rx="26" ry="13" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
                <path d="M282 80 Q300 70 318 80 M282 80 Q300 90 318 80" stroke="#78350f" stroke-width="1.4" fill="none"/>
                <path d="M60 140 q22 -12 44 0 q22 12 44 0" stroke="#7c3aed" stroke-width="3" fill="none"/>
                <text x="94" y="168" text-anchor="middle" font-size="9" fill="#5b21b6">endoplasmic reticulum</text>
                <g fill="#7c3aed">
                  <circle cx="66" cy="136" r="3"/><circle cx="88" cy="130" r="3"/><circle cx="110" cy="134" r="3"/><circle cx="132" cy="140" r="3"/>
                </g>
                <text x="150" y="128" font-size="9" fill="#5b21b6">ribosomes</text>
                <circle cx="300" cy="148" r="22" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                <text x="300" y="182" text-anchor="middle" font-size="9" fill="#075985">vacuole</text>
                <g fill="#f472b6">
                  <circle cx="234" cy="150" r="6"/><circle cx="252" cy="162" r="5"/>
                </g>
                <text x="244" y="180" text-anchor="middle" font-size="9" fill="#9d174d">lysosome</text>
                <g fill="#16a34a">
                  <circle cx="120" cy="60" r="2.6"/><circle cx="250" cy="52" r="2.6"/><circle cx="330" cy="120" r="2.6"/>
                </g>
                <text x="190" y="212" text-anchor="middle" font-size="10" fill="#166534">The nucleus controls the cell; mitochondria release energy; ribosomes build proteins.</text>
              </svg>
              <div class="diagram-note">Plant cells have everything shown here <b>plus</b> a cellulose cell wall, chloroplasts and one large permanent vacuole.</div>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying osmosis moves <b>solute</b>. Osmosis moves <b>water</b>; diffusion moves any substance.</li>
              <li>Confusing the cell wall (non-living, for support) with the cell membrane (living and selectively permeable).</li>
              <li>Saying active transport does not need energy — it moves substances <b>against</b> the gradient and needs ATP.</li>
            </ul>
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

          `,
          cards: [
            { q: 'State the cell theory in one sentence.', a: 'All living things are made of cells, and the cell is the basic structural and functional unit of life.' },
            { q: 'What is the function of the cell membrane?', a: 'It is selectively permeable: it controls which substances enter and leave the cell and holds the cell contents together.' },
            { q: 'Name one structure found in a plant cell but NOT in an animal cell.', a: 'The cellulose cell wall (also acceptable: chloroplast or large permanent vacuole). The cell wall gives the plant cell its firm, fixed shape.' },
            { q: 'What is the function of the nucleus?', a: 'It controls all the activities of the cell and carries the hereditary material (chromosomes/DNA) passed on during cell division.' },
            { q: 'Why is the mitochondrion called the powerhouse of the cell?', a: 'It is the site of aerobic respiration, where glucose is oxidised to release energy stored as ATP.' },
            { q: 'What is the function of the chloroplast?', a: 'It contains chlorophyll and is the site of photosynthesis — it traps light energy to manufacture food. It is found only in green plants.' },
            { q: 'What is the function of ribosomes?', a: 'They are the sites of protein synthesis, where amino acids are joined into proteins.' },
            { q: 'How does the vacuole of a plant cell differ from that of an animal cell?', a: 'The plant vacuole is large, permanent and filled with cell sap (it keeps the cell turgid); the animal vacuole is small, temporary or absent.' },
            { q: 'Give two examples of specialized cells and their specializations.', a: 'Red blood cell — biconcave, no nucleus, carries oxygen; root hair cell — long hair-like extension for absorbing water; nerve cell — long axon for carrying impulses.' },
            { q: 'How does a bacterium differ from a plant or animal cell in its nucleus?', a: 'A bacterium is a prokaryote: it has no membrane-bound nucleus — its DNA floats free in the cytoplasm.' },
            { q: 'How does Amoeba, a single cell, survive on its own?', a: 'One cell carries out every life process — feeding, respiration, excretion, movement and reproduction — so Amoeba is a complete independent organism.' },
            { q: 'What is plasmolysis?', a: 'Plasmolysis is the shrinking of a plant cell\'s living contents when it is placed in a strongly concentrated solution: water leaves the cell by osmosis, so the cell membrane pulls away from the cell wall and the cell becomes flaccid.' },
            { q: 'Which organelle is the site of aerobic respiration?', a: 'The mitochondrion — the "powerhouse" of the cell.' },
            { q: 'Define osmosis.', a: 'The diffusion of water from a region of higher water potential to lower water potential through a selectively permeable membrane.' },
            { q: 'State three differences between plant and animal cells.', a: 'Plant cells have a cellulose cell wall (animals: none), chloroplasts for photosynthesis (animals: none), and a large permanent vacuole (animals: small temporary ones). Plant cells also tend to be regular in shape; animal cells are irregular.' }
          ],
          quiz: [
            { q: 'The structure that controls the activities of the cell is the...', options: ['nucleus', 'vacuole', 'cell wall', 'cytoplasm'], correct: 0,
              exp: 'The nucleus holds the DNA and directs growth, reproduction and protein production.' },
            { q: 'Proteins are assembled at the...', options: ['ribosomes', 'vacuole', 'cell wall', 'chloroplasts'], correct: 0,
              exp: 'Ribosomes - free in the cytoplasm or on the rough endoplasmic reticulum - are the protein factories.' },
            { q: 'Which structures are found in plant cells but NOT in animal cells?', options: ['cell wall and chloroplasts', 'nucleus and mitochondria', 'cell membrane and cytoplasm', 'ribosomes and vacuoles'], correct: 0,
              exp: 'Plant cells add a cellulose cell wall, chloroplasts and a large permanent vacuole - animal cells have none of these.' },
            { q: 'Diffusion is the movement of particles from...', options: ['a region of higher concentration to lower concentration', 'lower to higher concentration', 'the cell only', 'against the gradient using energy'], correct: 0,
              exp: 'Particles spread down their concentration gradient until evenly distributed - no energy needed.' },
            { q: 'The cell membrane is described as...', options: ['selectively (semi-) permeable', 'fully permeable', 'impermeable', 'rigid'], correct: 0,
              exp: 'It lets some substances through while holding others back - the gatekeeper of the cell.' },
            { q: 'Osmosis specifically involves the movement of...', options: ['water molecules through a semi-permeable membrane', 'sugar molecules', 'any solute', 'oxygen only'], correct: 0,
              exp: 'Osmosis is the diffusion of WATER from a dilute to a more concentrated solution across a semi-permeable membrane.' },
            { q: 'A plant cell placed in a concentrated salt solution will...', options: ['lose water by osmosis and become plasmolysed', 'burst', 'gain water', 'divide'], correct: 0,
              exp: 'Water leaves the vacuole, the cytoplasm shrinks away from the wall - plasmolysis.' },
            { q: 'Chloroplasts are the site of...', options: ['photosynthesis', 'respiration', 'protein synthesis', 'cell division'], correct: 0,
              exp: 'Their chlorophyll traps light energy to make glucose - photosynthesis happens here.' },
            { q: 'The large central vacuole in a plant cell mainly...', options: ['stores cell sap and keeps the cell turgid', 'makes proteins', 'digests only', 'carries DNA'], correct: 0,
              exp: 'Full of cell sap, it presses the cytoplasm against the wall, keeping the plant firm.' },
            { q: 'Most of the chemical reactions of the cell take place in the...', options: ['cytoplasm', 'cell wall', 'nucleus only', 'vacuole'], correct: 0,
              exp: 'The jelly-like cytoplasm houses the organelles and is where much of the cell’s metabolism runs.' }
          ],
        },
        {
          title: 'Nutrition: Digestion in Humans',
          tags: ['Enzymes', 'Alimentary canal', 'Absorption'],
          summary: 'Where each food class is digested and which enzyme does it.',
          content: `
            <h3>Digestion along the alimentary canal</h3>
            <table><tr><th>Site</th><th>Enzyme</th><th>Substrate → Product</th></tr>
            <tr><td>Mouth</td><td>Salivary amylase (ptyalin)</td><td>Starch → maltose</td></tr>
            <tr><td>Stomach</td><td>Pepsin (in acid)</td><td>Protein → polypeptides</td></tr>
            <tr><td>Duodenum</td><td>Pancreatic amylase, trypsin, lipase</td><td>Starch, protein and fats</td></tr>
            <tr><td>Ileum</td><td>Maltase, sucrase, lactase, peptidase</td><td>Final breakdown to glucose, amino acids</td></tr></table>
            <h3>Absorption</h3>
            <p>The <b>ileum</b> is adapted for absorption: it is long, has finger-like <b>villi</b>, each villus has microvilli, a rich blood supply and a thin wall — all of which increase surface area and maintain a diffusion gradient.</p>
            <h3>Bile</h3>
            <p>Produced by the liver and stored in the gall bladder, bile <b>emulsifies</b> fats (breaking large droplets into small ones) and provides an alkaline medium. Bile contains <b>no enzyme</b>.</p>
            <div class="tip"><b>Exam tip:</b> Enzymes are specific: they work at an optimum pH and temperature, are denatured by high heat, and are not used up in the reaction.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Where does most absorption of digested food take place, and why is that organ so effective?<br>
            In the <b>ileum</b>. It is long, lined with <b>villi</b> and microvilli for a huge surface area, thin-walled, and richly supplied with blood vessels that carry the products away and maintain a diffusion gradient.</div>
            <div class="worked"><b>Q2.</b> State the enzyme, the substrate and the product for digestion in the stomach.<br>
            <b>Pepsin</b> acts on <b>protein</b> in an acidic medium to give <b>polypeptides</b>.</div>
            <div class="worked"><b>Q3.</b> Why does bile not count as an enzyme?<br>
            It only <b>emulsifies</b> fats into tiny droplets and neutralises acid; it does not chemically break any bond.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying digestion begins in the stomach. Starch digestion starts in the <b>mouth</b> with salivary amylase.</li>
              <li>Confusing <b>digestion</b> (breaking food into soluble molecules) with <b>egestion</b> (removing undigested waste).</li>
              <li>Saying enzymes are used up in the reaction — they are catalysts and remain unchanged.</li>
            </ul>
            <h3>Deep dive: the journey of a plate of rice</h3>
            <p>Digestion is <b>mechanical</b> (chewing, churning) plus <b>chemical</b> (enzymes) until food molecules are small enough to cross the gut wall. The route: <b>mouth → oesophagus → stomach → duodenum → ileum → colon → rectum → anus</b>. Peristalsis — rhythmic waves of muscle contraction — pushes food along the whole canal.</p>
            <table class="mb-3 w-full border-collapse text-left text-xs">
              <thead><tr class="bg-slate-100"><th class="border border-slate-200 p-1.5">Site</th><th class="border border-slate-200 p-1.5">Enzyme / juice</th><th class="border border-slate-200 p-1.5">Action</th></tr></thead>
              <tbody>
                <tr><td class="border border-slate-200 p-1.5">Mouth</td><td class="border border-slate-200 p-1.5">Salivary amylase (ptyalin), pH ~= 6.8</td><td class="border border-slate-200 p-1.5">Starch → maltose</td></tr>
                <tr><td class="border border-slate-200 p-1.5">Stomach</td><td class="border border-slate-200 p-1.5">Pepsin + HCl, pH ~= 2 (rennin in infants)</td><td class="border border-slate-200 p-1.5">Proteins → polypeptides; rennin curdles milk</td></tr>
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

          `,
          cards: [
            { q: 'Define digestion.', a: 'Digestion is the breakdown of large, insoluble food molecules into small, soluble ones that can be absorbed into the blood.' },
            { q: 'Where does the digestion of each food class begin?', a: 'Carbohydrates begin in the mouth (salivary amylase/ptyalin); proteins begin in the stomach (pepsin); fats begin in the duodenum (lipase).' },
            { q: 'What are the two functions of hydrochloric acid in the stomach?', a: 'It kills bacteria in swallowed food and provides the acidic medium (pH about 2) in which pepsin works best.' },
            { q: 'What is bile, where is it made, and what does it do?', a: 'Bile is made by the liver and stored in the gall bladder. It is NOT an enzyme: it emulsifies fats (breaks them into tiny droplets so lipase works faster) and neutralises stomach acid.' },
            { q: 'What is the end product of fat digestion, and which enzyme produces it?', a: 'Lipase (from the pancreas) digests fats/oils into fatty acids and glycerol.' },
            { q: 'State three features of the villi that make them efficient for absorption.', a: 'They are numerous (huge surface area), have very thin walls (one-cell thick, short diffusion distance) and contain a rich network of blood capillaries plus a lacteal that absorbs digested fats.' },
            { q: 'What are the main functions of the large intestine (colon)?', a: 'Absorbing water and mineral salts from undigested residue, and forming and storing faeces before egestion.' },
            { q: 'What is peristalsis?', a: 'The wave-like rhythmic contraction and relaxation of the gut muscles that pushes food along the alimentary canal.' },
            { q: 'Name three properties of enzymes.', a: 'They are proteins; they speed up reactions without being used up; they are specific (each acts on one substrate); they work best at an optimum temperature and pH and are denatured by high heat.' },
            { q: 'Why does trypsin work in the duodenum but not in the stomach?', a: 'Trypsin needs an alkaline medium, which the duodenum provides (bile and pancreatic juice are alkaline); the stomach is strongly acidic and would denature it.' },
            { q: 'What happens to excess amino acids in the body?', a: 'They are deaminated in the liver: the nitrogen part is converted to urea and excreted by the kidneys, while the remainder can be oxidised for energy or stored.' },
            { q: 'Why is roughage (fibre) important in the diet even though it is not digested?', a: 'It adds bulk and absorbs water, so the gut muscles can push waste along easily — lack of roughage causes constipation.' },
            { q: 'Which organ absorbs digested food?', a: 'The ileum (small intestine) — long, with villi and microvilli for a large surface area.' },
            { q: 'List the enzymes of human digestion with their substrates and products.', a: 'Amylase: starch → maltose (mouth, small intestine). Proteases (pepsin, trypsin): proteins → polypeptides → amino acids (stomach, small intestine). Lipase: fats → fatty acids + glycerol (small intestine). Maltase: maltose → glucose.' },
            { q: 'How is the small intestine adapted for absorption?', a: 'It is long (more time and space), lined with millions of villi and microvilli (huge surface area), each villus has a rich capillary network and a lacteal (fast transport), and its wall is thin (short diffusion distance).' }
          ],
          quiz: [
            { q: 'Digestion of starch begins in the mouth with the enzyme...', options: ['salivary amylase (ptyalin)', 'pepsin', 'lipase', 'trypsin'], correct: 0,
              exp: 'Amylase in saliva starts breaking starch into maltose as you chew.' },
            { q: 'The enzyme pepsin in the stomach digests...', options: ['proteins', 'fats', 'starch', 'vitamins'], correct: 0,
              exp: 'Pepsin works in the stomach’s acid, breaking proteins into shorter chains (polypeptides).' },
            { q: 'Bile is produced by the...', options: ['liver', 'stomach', 'pancreas', 'gall bladder'], correct: 0,
              exp: 'The liver makes bile; the gall bladder merely stores and releases it.' },
            { q: 'Bile helps fat digestion by...', options: ['emulsifying fats into tiny droplets', 'chemically digesting fats itself', 'digesting proteins', 'absorbing water'], correct: 0,
              exp: 'Emulsification massively increases the surface area for lipase to attack - a physical, not chemical, breakdown.' },
            { q: 'The finger-like villi of the small intestine exist to...', options: ['increase the surface area for absorption', 'grind food', 'store bile', 'secrete acid'], correct: 0,
              exp: 'Millions of villi, each with capillaries and a lacteal, make absorption fast and efficient.' },
            { q: 'Most digestion and absorption occur in the...', options: ['small intestine', 'stomach', 'large intestine', 'mouth'], correct: 0,
              exp: 'Enzymes from the pancreas and intestinal wall finish digestion there, and the villi absorb the products.' },
            { q: 'Hydrochloric acid in the stomach...', options: ['kills bacteria and provides the right pH for pepsin', 'digests fats', 'neutralises bile', 'absorbs water'], correct: 0,
              exp: 'The acid sterilises the food and creates the acidic conditions pepsin needs to work.' },
            { q: 'The wave-like muscular movement that pushes food along the gut is...', options: ['peristalsis', 'diffusion', 'osmosis', 'mastication'], correct: 0,
              exp: 'Layers of muscle contract in waves, squeezing the bolus onward from oesophagus to anus.' },
            { q: 'Fats are digested by the enzyme...', options: ['lipase', 'amylase', 'pepsin', 'maltase'], correct: 0,
              exp: 'Lipase (from the pancreas) splits fats into fatty acids and glycerol.' },
            { q: 'Undigested food is stored in the ___ before egestion.', options: ['rectum', 'caecum', 'duodenum', 'ileum'], correct: 0,
              exp: 'Faeces collect in the rectum and leave through the anus - this is egestion, not excretion.' }
          ],
        },
        {
          title: 'Soil, Conservation & Our Environment',
          tags: ['Soil types', 'Erosion', 'Conservation', 'Pollution'],
          summary: 'Soil composition, why it degrades, and how it can be protected.',
          content: `
            <h3>1. What soil is made of</h3>
            <p>Soil is a mixture of mineral particles, organic matter (humus), water, air and living organisms. A good loam contains roughly 40% sand, 40% silt, 15% clay and 5% humus.</p>
            <table>
              <tr><th>Type</th><th>Properties</th></tr>
              <tr><td>Sandy</td><td>Large particles, drains quickly, poor at holding nutrients</td></tr>
              <tr><td>Clayey</td><td>Tiny particles, holds water, poorly aerated, sticky when wet</td></tr>
              <tr><td>Loamy</td><td>A balanced mix — best for farming</td></tr>
            </table>
            <h3>2. Soil profile</h3>
            <p>From the surface downwards: the <b>topsoil (A horizon)</b>, rich in humus; the <b>subsoil (B)</b>; the <b>parent rock (C)</b>; and finally <b>bedrock</b>.</p>
            <h3>3. Soil erosion and how to stop it</h3>
            <ul>
              <li><b>Cover cropping</b> — plants shield the soil from raindrop impact.</li>
              <li><b>Contour ploughing and terracing</b> — slow the run-off of water down a slope.</li>
              <li><b>Crop rotation</b> — different crops take different nutrients, so the soil is not exhausted.</li>
              <li><b>Afforestation and shelter belts</b> — tree roots bind the soil and reduce wind speed.</li>
              <li><b>Mulching and controlled grazing</b> — protect the surface layer.</li>
            </ul>
            <h3>4. Nutrient cycles in brief</h3>
            <p>Decomposers (bacteria and fungi) break down dead matter and return minerals to the soil, which plants absorb again. Removing all crop residue breaks this cycle, which is why continuous cropping without manure makes soil infertile.</p>
            <h3>5. Pollution and conservation</h3>
            <ul>
              <li><b>Water pollution</b> — oil spills, industrial effluent and fertiliser run-off, which causes algal blooms and kills fish.</li>
              <li><b>Soil pollution</b> — plastics, pesticides and heavy metals.</li>
              <li><b>Conservation</b> means the careful use of resources so they last: game reserves, forest reserves, recycling, and using renewable energy.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Why does overgrazing lead to desertification?<br>
            Animals remove the vegetation that holds the soil, so wind and rain carry the topsoil away. Once the humus layer is gone, plants cannot re-establish and the land becomes desert.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Confusing <b>weathering</b> (the breaking down of rock) with <b>erosion</b> (the removal of the broken material).</li>
              <li>Saying sandy soil is the best for farming — <b>loam</b> is, because it balances drainage and nutrient retention.</li>
              <li>Confusing <b>conservation</b> (wise use of resources) with <b>preservation</b> (leaving them untouched).</li>
              <li>Forgetting that humus, not sand, is what makes soil fertile.</li>
            </ul>
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

          `,
          cards: [
            { q: 'Which soil type is best for farming, and why?', a: 'Loam — it holds a balanced mixture of sand, clay and humus, so it retains water and nutrients well yet drains and aerates properly.' },
            { q: 'List the four components of fertile soil.', a: 'Mineral (rock) particles, humus (decayed organic matter), soil water and soil air — plus the living organisms within them.' },
            { q: 'Name four methods of soil conservation.', a: 'Cover cropping, crop rotation, mulching, contour ploughing, terracing, shelter belts, controlled grazing, and avoiding bush burning (any four).' },
            { q: 'State three effects of soil erosion.', a: 'Loss of the fertile topsoil, reduced crop yields, formation of gullies, silting of rivers/dams, and desert encroachment.' },
            { q: 'Why is humus important to soil?', a: 'It supplies mineral nutrients, improves water retention, binds soil particles together against erosion, and feeds soil organisms.' },
            { q: 'Why is the earthworm called the farmer\'s friend?', a: 'Its burrows aerate the soil and improve drainage, and it mixes dead organic matter (humus) through the soil as it feeds.' },
            { q: 'What is the role of Rhizobium bacteria in soil fertility?', a: 'They live in the root nodules of legumes (beans, groundnut) and fix atmospheric nitrogen into nitrogen compounds the plant can use, enriching the soil.' },
            { q: 'Compare sandy and clay soils on water retention and drainage.', a: 'Sandy soil has large particles: it drains fast and holds little water. Clay soil has tiny particles: it holds water well but drains poorly and can waterlog.' },
            { q: 'Give two advantages of manure over inorganic fertilizer.', a: 'Manure adds humus and improves soil structure and water-holding capacity; it is cheap and does not damage soil structure with long-term use the way heavy fertilizer use can.' },
            { q: 'What is leaching?', a: 'Leaching is the washing down of soluble nutrients from the topsoil to deeper layers by heavy rain, where roots cannot reach them — leaving the topsoil poor.' },
            { q: 'State two environmental effects of bush burning.', a: 'It destroys humus and soil organisms, exposes bare topsoil to erosion, kills seedlings and young animals, and releases smoke and carbon dioxide into the air.' },
            { q: 'Why should grazing be controlled on farmland and grassland?', a: 'Overgrazing strips vegetation cover, exposing the soil to wind and water erosion and reducing regeneration of pasture — a major cause of desertification.' },
            { q: 'Compare sandy, clay and loam soils.', a: 'Sandy: large particles, drains fast, poor in nutrients. Clay: tiny particles, holds water, easily waterlogged but fertile. Loam: a balanced mixture with humus - good drainage, good retention, ideal for crops.' },
            { q: 'What causes soil erosion, and how can it be controlled?', a: 'Causes: wind, running water, overgrazing, deforestation and bush burning that leave soil bare. Controls: cover cropping, terracing and contour ploughing, afforestation, controlled grazing, and windbreaks.' },
            { q: 'Outline the water cycle.', a: 'The Sun evaporates water from oceans and land → water vapour rises and condenses into clouds → precipitation falls as rain → water runs off into rivers and seas or soaks into the ground → the cycle repeats.' }
          ],
          quiz: [
            { q: 'The best soil type for farming is...', options: ['loam', 'sand', 'clay', 'silt alone'], correct: 0,
              exp: 'Loam balances drainage, water retention, air and nutrients - the farmer’s favourite.' },
            { q: 'The layer of the soil profile richest in humus is the...', options: ['topsoil', 'subsoil', 'parent rock', 'bedrock'], correct: 0,
              exp: 'Topsoil (layer A) holds decomposed organic matter and most of the soil life.' },
            { q: 'Sandy soil is characterised by...', options: ['large particles, fast drainage and low nutrients', 'tiny particles and waterlogging', 'no air spaces', 'rich humus always'], correct: 0,
              exp: 'Big particles leave big gaps, so water and dissolved nutrients drain away quickly.' },
            { q: 'Clay soil is characterised by...', options: ['very small particles that hold water and become waterlogged', 'fast drainage', 'large air spaces', 'poor water retention'], correct: 0,
              exp: 'Tiny, tightly packed particles trap water - fertile when managed, but easily waterlogged and hard to work.' },
            { q: 'Soil erosion is the...', options: ['removal of topsoil by wind or water', 'addition of fertiliser', 'formation of humus', 'ploughing of land'], correct: 0,
              exp: 'Wind and running water strip away the fertile topsoil - a slow disaster for farmland.' },
            { q: 'Which practice helps to PREVENT soil erosion?', options: ['planting cover crops and terracing slopes', 'overgrazing', 'burning vegetation', 'deforestation'], correct: 0,
              exp: 'Cover crops, terraces, contour ploughing and afforestation all shield soil from wind and water.' },
            { q: 'Humus is...', options: ['decomposed organic matter in the soil', 'a type of rock', 'pure clay', 'a fertiliser chemical'], correct: 0,
              exp: 'Rotted plant and animal remains - humus enriches soil, holds moisture and feeds soil organisms.' },
            { q: 'In the nitrogen cycle, nitrogen-fixing bacteria convert atmospheric nitrogen into...', options: ['nitrates usable by plants', 'oxygen', 'carbon dioxide', 'pure nitrogen gas'], correct: 0,
              exp: 'Plants cannot use N2 gas; bacteria in root nodules and soil turn it into soluble nitrates.' },
            { q: 'The water cycle is driven mainly by...', options: ['evaporation powered by the Sun', 'the Moon’s pull only', 'wind alone', 'plant roots'], correct: 0,
              exp: 'Sun heat evaporates water, which condenses into clouds and returns as precipitation - a continuous cycle.' },
            { q: 'Leaching is the process in which...', options: ['soluble nutrients are washed down beyond the reach of roots', 'soil is blown away', 'humus is formed', 'rocks break into sand'], correct: 0,
              exp: 'Heavy rain dissolves nutrients and carries them deep - another reason sandy soils stay poor.' }
          ],
        }
      ],
      SS2: [
        {
          title: 'Reproduction & Development',
          tags: ['Gametes', 'Menstrual cycle', 'Placenta'],
          summary: 'Sexual reproduction in humans and the role of the placenta.',
          content: `
            <h3>Human gametes</h3>
            <ul><li><b>Sperm</b> — produced in the testes; has a tail for swimming and many mitochondria for energy.</li>
            <li><b>Ovum</b> — produced in the ovary; large and non-motile, with food reserves.</li>
            <li><b>Fertilisation</b> normally occurs in the <b>oviduct (fallopian tube)</b>; the zygote implants in the <b>uterus</b>.</li></ul>
            <h3>The placenta</h3>
            <p>A disc of tissue linking mother and embryo. It allows the exchange of dissolved food, oxygen, water and waste by diffusion, and produces hormones. The mother's and the baby's blood <b>do not mix</b>.</p>
            <h3>The umbilical cord</h3>
            <p>Connects the foetus to the placenta, carrying the umbilical artery (deoxygenated blood away from the foetus) and umbilical vein (oxygenated blood to the foetus).</p>
            <h3>Plants</h3>
            <p>Pollination is the transfer of pollen from anther to stigma; <b>fertilisation</b> is the fusion of the male nucleus with the ovule. Double fertilisation in flowering plants produces the zygote and the endosperm.</p>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Where does fertilisation normally occur in humans, and where does the embryo implant?<br>
            Fertilisation occurs in the <b>oviduct (fallopian tube)</b>; the embryo implants in the wall of the <b>uterus</b>.</div>
            <div class="worked"><b>Q2.</b> Give three functions of the placenta.<br>
            It exchanges dissolved food, oxygen and waste between mother and foetus; it produces hormones that maintain pregnancy; and it acts as a barrier to some harmful substances — though not to alcohol or all drugs.</div>
            <div class="worked"><b>Q3.</b> Distinguish pollination from fertilisation in flowering plants.<br>
            <b>Pollination</b> is the transfer of pollen from anther to stigma. <b>Fertilisation</b> is the fusion of a male nucleus with the ovule, which follows pollination.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying the mother's and baby's blood mix in the placenta — they do not; exchange is by diffusion.</li>
              <li>Confusing the <b>umbilical cord</b> (the connecting tube) with the <b>placenta</b> (the exchange organ).</li>
              <li>Saying the umbilical artery carries oxygenated blood — it carries <b>deoxygenated</b> blood away from the foetus.</li>
            </ul>
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
            <p><b>A woman's cycle is 28 days and her period began on day 1. When is she most likely to ovulate, and why does this matter for family planning?</b> Ovulation ~= day 14 (14 days before the next period). The few days around it are the fertile window — the basis of the rhythm method, which is less reliable than modern contraceptives because cycle length varies.</p>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Fertilisation: fallopian tube. Implantation: uterus. Mixing these up is the classic lost mark.</li>
              <li>Placenta = exchange surface; blood does NOT flow directly from mother to foetus.</li>
              <li>Identical twins share one zygote (same sex, same genes); fraternal twins are two separate ova.</li>
            </ul>

          `,
          cards: [
            { q: 'Distinguish between sexual and asexual reproduction.', a: 'Sexual reproduction involves two parents and the fusion of gametes, so offspring vary; asexual reproduction involves one parent and no gametes, so offspring are genetically identical to the parent.' },
            { q: 'Give two examples of asexual reproduction.', a: 'Binary fission in Amoeba and budding in yeast or Hydra (also: vegetative propagation in cassava, fragmentation in Spirogyra).' },
            { q: 'What is fertilization, and where does it occur in humans?', a: 'Fertilization is the fusion of the male and female gametes to form a zygote. In humans it occurs in the fallopian tube (oviduct).' },
            { q: 'State three functions of the placenta.', a: 'It allows exchange of food and oxygen from mother to foetus and wastes (urea, carbon dioxide) from foetus to mother, produces pregnancy hormones, and acts as a partial barrier to some harmful substances.' },
            { q: 'What is the function of the amniotic fluid?', a: 'It cushions the foetus against mechanical shock, allows free movement, and keeps an even temperature around it.' },
            { q: 'What is menstruation?', a: 'The monthly shedding of the lining of the uterus (with blood) through the vagina when the released egg is not fertilized.' },
            { q: 'What are the two functions of the ovary?', a: 'It produces the female gametes (ova/eggs) and secretes the female sex hormones (oestrogen and progesterone).' },
            { q: 'What are the functions of the uterus?', a: 'It receives and houses the developing foetus, its lining thickens for implantation, and its muscular wall expels the baby at birth.' },
            { q: 'Why does the sperm have a long tail?', a: 'The tail (flagellum) whips to propel the sperm through the female reproductive tract to reach and fertilize the egg.' },
            { q: 'What changes occur at puberty in boys and girls, and what causes them?', a: 'Sex hormones (testosterone in boys, oestrogen in girls) cause growth of reproductive organs, pubic hair, deepening of voice (boys), breast development and onset of menstruation (girls).' },
            { q: 'Distinguish between pollination and fertilization in flowering plants.', a: 'Pollination is the transfer of pollen grains from anther to stigma; fertilization is the fusion of a male nucleus (from the pollen) with the egg cell in the ovule to form a zygote.' },
            { q: 'What is the gestation period, and roughly how long is it in humans?', a: 'Gestation is the period of development of the foetus inside the uterus from fertilization to birth — about 9 months (about 40 weeks) in humans.' },
            { q: 'What are the functions of the placenta and the umbilical cord?', a: 'The placenta exchanges materials between mother and foetus - nutrients and oxygen in, carbon dioxide and wastes out - and secretes hormones. The umbilical cord carries the blood vessels linking the foetus to the placenta.' },
            { q: 'Describe pollination and fertilisation in flowering plants.', a: 'Pollination: pollen grains transfer from anther to stigma (by wind or insects). Fertilisation: a pollen tube grows down the style, delivering the male nucleus to the ovule, where it fuses with the egg nucleus to form a zygote.' },
            { q: 'Trace the stages from fertilised egg to birth in humans.', a: 'Fertilisation in the oviduct forms a zygote → it divides as it travels to the uterus → implants in the uterus wall as an embryo → develops into a foetus, nourished via the placenta → birth after about 40 weeks.' }
          ],
          quiz: [
            { q: 'The male and female gametes in humans are the...', options: ['sperm and egg (ovum)', 'testis and ovary', 'pollen and seed', 'zygote and embryo'], correct: 0,
              exp: 'Gametes are the sex CELLS - sperm from the testes, egg from the ovary.' },
            { q: 'Fertilisation in humans normally occurs in the...', options: ['oviduct (fallopian tube)', 'uterus', 'ovary', 'vagina'], correct: 0,
              exp: 'The sperm meets the egg in the oviduct; the zygote then travels down to implant in the uterus.' },
            { q: 'The placenta functions to...', options: ['exchange nutrients, gases and wastes between mother and foetus', 'cushion the foetus from shocks', 'connect the foetus to the placenta', 'produce the egg'], correct: 0,
              exp: 'Food and oxygen cross in, wastes cross out - the mother’s and foetus’s blood never mix directly.' },
            { q: 'The umbilical cord...', options: ['connects the foetus to the placenta', 'anchors the placenta to the uterus only', 'is where fertilisation happens', 'stores the egg'], correct: 0,
              exp: 'It carries the blood vessels that run between foetus and placenta.' },
            { q: 'The amniotic fluid mainly...', options: ['cushions the foetus against mechanical shock', 'feeds the foetus directly', 'connects to the placenta', 'makes blood cells'], correct: 0,
              exp: 'The fluid-filled sac absorbs knocks and allows the foetus to move freely.' },
            { q: 'Human pregnancy (gestation) lasts approximately...', options: ['nine months (about 40 weeks)', 'three months', 'six months', 'twelve months'], correct: 0,
              exp: 'Roughly 40 weeks from the last menstrual period to birth.' },
            { q: 'The male reproductive part of a flower is the...', options: ['stamen (anther and filament)', 'carpel', 'petal', 'sepal'], correct: 0,
              exp: 'The anther produces pollen grains - the male gametes of the plant.' },
            { q: 'Pollination is the transfer of pollen grains from the...', options: ['anther to the stigma', 'stigma to the anther', 'ovule to the ovary', 'petal to the sepal'], correct: 0,
              exp: 'Pollen lands on the sticky stigma - by wind, insects or other agents - starting fertilisation.' },
            { q: 'In plants, fertilisation is the fusion of...', options: ['a pollen nucleus with the egg nucleus in the ovule', 'pollen with the stigma', 'two anthers', 'seed and fruit'], correct: 0,
              exp: 'The pollen tube delivers the male nucleus to the ovule, where it fuses with the egg.' },
            { q: 'After fertilisation, the ovule develops into the ___ and the ovary into the ___.', options: ['seed; fruit', 'fruit; seed', 'flower; leaf', 'stem; root'], correct: 0,
              exp: 'The fertilised ovule becomes the seed; the surrounding ovary swells into the fruit.' }
          ],
        },
        {
          title: 'The Nervous System & Coordination',
          tags: ['Neuron', 'Reflex arc', 'Brain regions'],
          summary: 'Neurone structure, the reflex arc and what each part of the brain controls.',
          content: `
            <h3>The neurone</h3>
            <ul><li><b>Dendron/dendrites</b> carry impulses towards the cell body.</li>
            <li><b>Axon</b> carries impulses away from the cell body.</li>
            <li><b>Myelin sheath</b> insulates the axon and speeds up conduction.</li>
            <li><b>Synapse</b> — the gap between two neurones, crossed by chemical transmitters.</li></ul>
            <h3>The reflex arc</h3>
            <div class="formula">Receptor → sensory neurone → relay neurone (spinal cord) → motor neurone → effector</div>
            <p>A reflex is <b>rapid, automatic and involuntary</b> — it does not wait for the brain, which is why you withdraw your hand before you feel pain.</p>
            <h3>The brain</h3>
            <table><tr><th>Part</th><th>Function</th></tr>
            <tr><td>Cerebrum</td><td>Intelligence, memory, voluntary action</td></tr>
            <tr><td>Cerebellum</td><td>Balance and muscle coordination</td></tr>
            <tr><td>Medulla oblongata</td><td>Heartbeat, breathing, reflexes such as swallowing</td></tr></table>
            <div class="warn"><b>Watch out:</b> A person with a damaged cerebellum walks unsteadily; damage to the medulla can be fatal because it controls breathing.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Give the correct sequence of a reflex arc.<br>
            <b>Receptor → sensory neurone → relay neurone (in the spinal cord) → motor neurone → effector.</b></div>
            <div class="worked"><b>Q2.</b> A patient walks unsteadily and cannot coordinate movement. Which part of the brain is damaged?<br>
            The <b>cerebellum</b>.</div>
            <div class="worked"><b>Q3.</b> Why is a reflex described as involuntary, and what is the advantage?<br>
            It does not involve conscious thought, so the response is immediate — you withdraw your hand from a hot object before the pain is even felt.</div>
            <div class="diagram">
              <div class="diagram-title">The reflex arc: a fast, involuntary response</div>
              <svg viewBox="0 0 380 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reflex arc from receptor through sensory neuron, relay neuron, motor neuron to effector">
                <rect x="6" y="6" width="368" height="178" rx="14" fill="#f8fafc"/>
                <g>
                  <circle cx="48" cy="120" r="18" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>
                  <text x="48" y="124" text-anchor="middle" font-size="9" fill="#7f1d1d">hot</text>
                  <text x="48" y="158" text-anchor="middle" font-size="9" fill="#7f1d1d">receptor</text>
                </g>
                <path d="M66 120 Q110 120 128 92" stroke="#b91c1c" stroke-width="2.5" fill="none"/>
                <path d="M122 100 L130 90 L120 88" fill="#b91c1c"/>
                <text x="96" y="140" font-size="9" fill="#7f1d1d">sensory neuron</text>
                <ellipse cx="190" cy="70" rx="46" ry="30" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2.5"/>
                <text x="190" y="66" text-anchor="middle" font-size="9" fill="#581c87">spinal cord</text>
                <circle cx="190" cy="82" r="7" fill="#a855f7"/>
                <text x="212" y="86" font-size="9" fill="#581c87">relay</text>
                <path d="M234 80 Q272 84 292 108" stroke="#0369a1" stroke-width="2.5" fill="none"/>
                <path d="M286 100 L294 110 L282 112" fill="#0369a1"/>
                <text x="266" y="76" font-size="9" fill="#075985">motor neuron</text>
                <rect x="298" y="110" width="52" height="34" rx="6" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
                <text x="324" y="130" text-anchor="middle" font-size="9" fill="#14532d">muscle</text>
                <text x="324" y="158" text-anchor="middle" font-size="9" fill="#14532d">effector</text>
                <text x="190" y="30" text-anchor="middle" font-size="10" fill="#0f172a">receptor → sensory neuron → relay neuron → motor neuron → effector</text>
                <text x="190" y="176" text-anchor="middle" font-size="10" fill="#334155">The impulse bypasses the brain, which is why you pull your hand away before you feel pain.</text>
              </svg>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying a reflex is controlled by the cerebrum. It is coordinated in the <b>spinal cord</b>.</li>
              <li>Confusing the axon (carries impulses <b>away</b> from the cell body) with the dendrite (carries them <b>towards</b> it).</li>
              <li>Confusing the medulla (heartbeat and breathing) with the cerebrum (thought and memory).</li>
            </ul>
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

          `,
          cards: [
            { q: 'What is a neuron, and what are the functions of its dendrites and axon?', a: 'A neuron is the basic unit of the nervous system. Dendrites carry impulses TOWARDS the cell body; the axon carries impulses AWAY from it to the next cell.' },
            { q: 'What makes up the central nervous system, and the peripheral nervous system?', a: 'The CNS is the brain and spinal cord; the PNS is all the nerves (cranial and spinal) connecting the CNS to the rest of the body.' },
            { q: 'Trace the path of a reflex arc.', a: 'Receptor -> sensory neuron -> relay/interneuron in the spinal cord -> motor neuron -> effector (muscle or gland) — fast, automatic and protective.' },
            { q: 'Give one example of a reflex action and explain its value.', a: 'Withdrawing the hand from a hot object: the response happens before the brain registers pain, so tissue damage is minimised.' },
            { q: 'Match each brain region to its function: cerebrum, cerebellum, medulla oblongata.', a: 'Cerebrum — intelligence, memory, voluntary actions and senses; cerebellum — balance and muscular coordination; medulla oblongata — involuntary actions like heartbeat and breathing.' },
            { q: 'How do nervous and hormonal coordination differ?', a: 'Nervous: electrical impulses, very fast, short-lived, target specific. Hormonal: chemicals in blood, slower, longer-lasting, wider targets.' },
            { q: 'Why is the pituitary gland called the master gland?', a: 'Its hormones control or stimulate many other endocrine glands (thyroid, adrenal, gonads) as well as growth.' },
            { q: 'Which hormone regulates blood sugar, where is it produced, and what disease results from its deficiency?', a: 'Insulin, produced by the pancreas (islets of Langerhans). Deficiency or poor response causes diabetes mellitus (high blood sugar).' },
            { q: 'State three effects of adrenaline on the body.', a: 'It increases heart rate and breathing rate, raises blood sugar by converting glycogen to glucose, and directs blood to the muscles — the \'fight or flight\' response.' },
            { q: 'What is the function of thyroxine, and what deficiency disease results from lack of iodine?', a: 'Thyroxine controls the body\'s metabolic rate and growth; iodine deficiency reduces its production and causes goitre (swelling of the neck).' },
            { q: 'What is a synapse?', a: 'The tiny junction between two neurons where the impulse crosses chemically (by a neurotransmitter) rather than electrically.' },
            { q: 'Why are drugs like alcohol and hard drugs dangerous to the nervous system?', a: 'They alter or damage neuron function — slowing reactions, impairing judgement and memory, and long-term use can destroy brain and nerve tissue and cause addiction.' },
            { q: 'Give the correct order of a reflex arc.', a: 'Receptor → sensory neurone → relay neurone → motor neurone → effector.' },
            { q: 'What are the functions of the cerebrum, cerebellum and medulla oblongata?', a: 'Cerebrum: thinking, memory, voluntary actions and the senses - the largest part. Cerebellum: balance, posture and coordination of movement. Medulla oblongata: controls involuntary life-support activities - heartbeat, breathing, blood pressure.' },
            { q: 'Distinguish sensory, relay and motor neurones.', a: 'Sensory neurones carry impulses from receptors to the CNS. Relay (connector) neurones link sensory to motor neurones inside the CNS. Motor neurones carry impulses from the CNS to effectors - muscles and glands.' }
          ],
          quiz: [
            { q: 'The structural and functional unit of the nervous system is the...', options: ['neurone (nerve cell)', 'nephron', 'alveolus', 'villus'], correct: 0,
              exp: 'Neurones carry nerve impulses - the nervous system is built from billions of them.' },
            { q: 'The main parts of a neurone are...', options: ['dendrites, cell body and axon', 'nucleus, vacuole and wall', 'atrium, ventricle and valve', 'root, stem and leaf'], correct: 0,
              exp: 'Dendrites receive impulses, the cell body processes them, and the axon carries them onward.' },
            { q: 'A reflex action is best described as...', options: ['automatic, rapid and involuntary', 'slow and deliberate', 'controlled by thought', 'learned through practice'], correct: 0,
              exp: 'Reflexes bypass conscious thought for speed - vital for protection.' },
            { q: 'Which brain part controls balance and coordination of movement?', options: ['cerebellum', 'cerebrum', 'medulla oblongata', 'hypothalamus only'], correct: 0,
              exp: 'The cerebellum fine-tunes movement and balance - which is why alcohol (affecting it) makes people stagger.' },
            { q: 'The central nervous system consists of the...', options: ['brain and spinal cord', 'brain and nerves only', 'spinal cord and eyes', 'all the body’s nerves'], correct: 0,
              exp: 'The CNS is the command centre; the peripheral nerves link it to the rest of the body.' },
            { q: 'Sensory neurones carry impulses...', options: ['from receptors to the central nervous system', 'from the CNS to effectors', 'between the heart and lungs', 'only within the brain'], correct: 0,
              exp: 'Sense first: receptors → sensory neurone → CNS. The motor route runs the other way.' },
            { q: 'Motor neurones carry impulses...', options: ['from the CNS to effectors (muscles and glands)', 'from receptors to the CNS', 'only to the eyes', 'from muscle to muscle'], correct: 0,
              exp: 'The CNS decides, motor neurones deliver the order to the muscle or gland.' },
            { q: 'The tiny gap between two neurones is called a...', options: ['synapse', 'node', 'ax hillock only', 'dendrite'], correct: 0,
              exp: 'Impulses cross the synapse chemically, via transmitter substances.' },
            { q: 'Pulling your hand from a hot object before feeling pain is an example of...', options: ['a reflex action', 'a conditioned response', 'voluntary movement', 'a hormonal response'], correct: 0,
              exp: 'The spinal cord routes the response directly - the brain is informed afterwards.' },
            { q: 'Effectors in the nervous system are...', options: ['muscles and glands', 'receptors only', 'neurones only', 'sense organs'], correct: 0,
              exp: 'Effectors DO something - muscles contract, glands secrete - carrying out the body’s responses.' }
          ],
        },
        {
          title: 'Adaptation & Survival in Habitats',
          tags: ['Structural adaptation', 'Behavioural adaptation', 'Competition'],
          summary: 'How organisms are fitted to their habitats, and the forces that shape them.',
          content: `
            <h3>1. Habitat and niche</h3>
            <p>A <b>habitat</b> is where an organism lives; a <b>niche</b> is the role it plays there. Two species cannot occupy exactly the same niche for long — one will out-compete the other.</p>
            <h3>2. Types of adaptation</h3>
            <ul>
              <li><b>Structural (morphological)</b> — features of the body: the streamlined shape of a fish, the thick fur of a polar bear.</li>
              <li><b>Physiological</b> — internal processes: the camel's ability to tolerate dehydration, hibernation.</li>
              <li><b>Behavioural</b> — actions: migration, courtship displays, the earthworm burrowing away from light.</li>
            </ul>
            <h3>3. Worked examples by habitat</h3>
            <table>
              <tr><th>Organism</th><th>Adaptation</th><th>Advantage</th></tr>
              <tr><td>Water lily</td><td>Broad flat leaves, air spaces in the stem</td><td>Floats and obtains oxygen</td></tr>
              <tr><td>Cactus</td><td>Leaves reduced to spines, waxy cuticle, swollen stem</td><td>Reduces water loss and stores water</td></tr>
              <tr><td>Fish</td><td>Streamlined body, gills, swim bladder</td><td>Moves easily, extracts oxygen, controls depth</td></tr>
              <tr><td>Camel</td><td>Fat in the hump, long lashes, broad feet</td><td>Energy store, keeps out sand, does not sink</td></tr>
              <tr><td>Termite</td><td>Lives in a colony with castes</td><td>Division of labour improves survival</td></tr>
            </table>
            <h3>4. Competition and predation</h3>
            <p><b>Intraspecific competition</b> occurs between members of the same species (for mates, food, territory); <b>interspecific competition</b> occurs between different species. Predation, parasitism and symbiosis are all relationships that shape populations.</p>
            <h3>5. Protection and warning</h3>
            <ul>
              <li><b>Camouflage (cryptic colouring)</b> — the chameleon and the stick insect blend into their surroundings.</li>
              <li><b>Warning (aposematic) colouration</b> — bright colours advertise that an animal is poisonous.</li>
              <li><b>Mimicry</b> — a harmless species copies the appearance of a harmful one.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Explain why desert plants often have their stomata sunken and few in number.<br>
            Sunken stomata trap a layer of still, moist air, which reduces the diffusion gradient for water loss. Fewer stomata means less surface through which transpiration can occur — both reduce water loss in a dry habitat.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Confusing <b>adaptation</b> (an inherited feature that improves survival) with <b>acclimatisation</b> (a short-term adjustment by one individual).</li>
              <li>Confusing <b>camouflage</b> (blending in) with <b>mimicry</b> (copying another species).</li>
              <li>Saying an organism adapts because it wants to. Variations arise randomly and the environment selects among them.</li>
            </ul>
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

          `,
          cards: [
            { q: 'Define adaptation.', a: 'Adaptation is any feature of structure or behaviour that makes an organism well suited (fitted) to survive in its environment.' },
            { q: 'Name the major habitat types with one example each.', a: 'Aquatic — freshwater (pond, river) and marine (sea); terrestrial — forest, savanna/grassland, desert, and arid/shrub land.' },
            { q: 'How is the water lily adapted to life on water?', a: 'Broad flat leaves spread on the surface for maximum light, stomata on the UPPER surface for gas exchange, air spaces in the tissues for buoyancy, and flexible stems that bend with water movement.' },
            { q: 'State three adaptations of the camel to desert life.', a: 'Fat stored in the hump (food reserve), long eyelashes and closable nostrils against sand, broad leathery feet that do not sink, thick skin and concentrated urine to conserve water.' },
            { q: 'What are xerophytes? Give two of their features.', a: 'Xerophytes are plants adapted to dry habitats, e.g. cactus. Features: thick waxy cuticle, sunken or few stomata, leaves reduced to spines, and succulent water-storing stems.' },
            { q: 'What is an epiphyte? Give an example.', a: 'An epiphyte grows on another plant (often a tall tree) purely for support and to reach sunlight in dense forest — e.g. orchids and some ferns. It does not take food from the host, so it is not a parasite.' },
            { q: 'Distinguish between camouflage and mimicry.', a: 'Camouflage is colouring or shape that hides an organism in its background (stick insect); mimicry is a harmless species copying the appearance of a harmful one to escape predators (hoverfly imitating a wasp).' },
            { q: 'Match these animals to their breathing structures: fish, insect, earthworm, mammal.', a: 'Fish — gills; insect — tracheal system through spiracles; earthworm — moist body surface (diffusion); mammal — lungs.' },
            { q: 'Why do fish have a streamlined body and a nictitating membrane?', a: 'The streamlined shape reduces water resistance for fast swimming; the transparent nictitating membrane protects the eye in water while still allowing sight.' },
            { q: 'Give two examples of commensalism.', a: 'The remora (sucker fish) rides on sharks for transport and leftovers; egrets follow grazing cattle and eat insects flushed from the grass — the host is neither harmed nor helped.' },
            { q: 'Why is migration a survival strategy?', a: 'It moves animals seasonally to where food, water and breeding conditions are available — e.g. birds flying to warmer regions in the harmattan/dry season.' },
            { q: 'State three effects of habitat destruction on organisms.', a: 'Loss of shelter and breeding sites, loss of food sources, population decline and possible extinction, and forced contact between wildlife and humans (crop raiding, disease).' },
            { q: 'Distinguish habitat from niche.', a: 'A habitat is the physical place where an organism lives (a pond, a rainforest). A niche is the organism’s role there - what it eats, when it is active, how it interacts. No two species share exactly the same niche.' },
            { q: 'Name the three types of adaptation, with an example of each.', a: 'Structural: body features - webbed feet of a duck, spines of a cactus. Physiological: internal processes - venom production, concentrated urine in desert animals. Behavioural: actions - migration, hibernation, nocturnal feeding.' },
            { q: 'How do camouflage and warning colouration differ?', a: 'Camouflage hides an organism by matching its background (stick insect, green grasshopper). Warning colouration does the opposite - bright colours (poison dart frogs, wasps) advertise toxicity so predators avoid them.' }
          ],
          quiz: [
            { q: 'An organism’s habitat is where it lives; its niche is...', options: ['its role or occupation in that habitat', 'its address', 'its food only', 'its enemies'], correct: 0,
              exp: 'Habitat = address; niche = profession - how the organism makes its living there.' },
            { q: 'A cactus with spines instead of broad leaves shows...', options: ['structural (morphological) adaptation', 'physiological adaptation', 'behavioural adaptation', 'no adaptation'], correct: 0,
              exp: 'Spines are a body feature - structural adaptation - reducing water loss and deterring grazers.' },
            { q: 'Venom production and hibernation chemistry are examples of...', options: ['physiological adaptation', 'structural adaptation', 'behavioural adaptation', 'accidental change'], correct: 0,
              exp: 'Physiological adaptations are internal body processes - how the organism’s chemistry copes.' },
            { q: 'Migration of birds in the dry season is an example of...', options: ['behavioural adaptation', 'structural adaptation', 'physiological adaptation', 'variation'], correct: 0,
              exp: 'Something the organism DOES - behaviour - to survive the season.' },
            { q: 'Fish are adapted to water by having...', options: ['gills and a streamlined body', 'lungs and fur', 'hooves and horns', 'wings and feathers'], correct: 0,
              exp: 'Gills extract dissolved oxygen; the streamlined shape cuts drag while swimming.' },
            { q: 'Desert plants commonly show...', options: ['deep roots and reduced leaves', 'broad thin leaves', 'shallow spreading roots only', 'large flat leaves'], correct: 0,
              exp: 'Deep roots chase water; small or spiny leaves reduce transpiration - every drop is precious.' },
            { q: 'Camouflage helps an organism by...', options: ['blending it into the background so predators overlook it', 'making it conspicuous', 'scaring predators with noise', 'poisoning them'], correct: 0,
              exp: 'A stick insect looks like a twig; a green grasshopper disappears into grass.' },
            { q: 'Bright warning colours in poisonous animals are called...', options: ['warning (aposematic) colouration', 'camouflage', 'mimicry of prey', 'disguise'], correct: 0,
              exp: 'Bold colours advertise danger - predators learn to leave them alone.' },
            { q: 'Competition between organisms occurs because...', options: ['resources such as food, space and mates are limited', 'organisms dislike each other', 'resources are unlimited', 'predators are absent'], correct: 0,
              exp: 'Limited resources force organisms of the same or different species to compete - a driver of natural selection.' },
            { q: 'A relationship in which one organism kills and eats another is...', options: ['predation', 'mutualism', 'commensalism', 'parasitism'], correct: 0,
              exp: 'Predators kill their prey; parasites instead feed on a living host without usually killing it.' }
          ],
        }
      ],
      SS3: [
        {
          title: 'Genetics & Heredity',
          tags: ['Monohybrid cross', 'Punnett square', 'Blood groups'],
          summary: 'Mendel’s laws, Punnett squares and how to work out ratios.',
          content: `
            <h3>Key terms</h3>
            <ul><li><b>Gene</b> — the unit of inheritance on a chromosome.</li>
            <li><b>Allele</b> — alternative forms of a gene (T and t).</li>
            <li><b>Genotype</b> — the genetic make-up (Tt); <b>phenotype</b> — the observable feature (tall).</li>
            <li><b>Dominant</b> masks the <b>recessive</b> in a heterozygote.</li></ul>
            <h3>Mendel's first law</h3>
            <p>Paired factors (alleles) segregate during gamete formation so that each gamete carries only one of the pair.</p>
            <div class="worked"><b>Worked example (monohybrid cross):</b> Tt × Tt<br>
            Gametes: T, t × T, t<br>
            Offspring: TT, Tt, Tt, tt → genotype ratio <b>1 : 2 : 1</b>, phenotype ratio <b>3 tall : 1 short</b>.</div>
            <h3>Sex determination</h3>
            <p>The father determines the sex: an X-bearing sperm gives a girl (XX) and a Y-bearing sperm gives a boy (XY), so the chance is 1 in 2.</p>
            <h3>Blood groups</h3>
            <p>The ABO system has three alleles: Iᴬ and Iᴮ are <b>co-dominant</b> and both are dominant over i (group O). A parent with Iᴬi × Iᴮi can produce children of <b>all four</b> blood groups.</p>
            <div class="tip"><b>Exam tip:</b> Always write the parents' genotypes first, then list the gametes, then the Punnett square. Method marks are given for each stage in WAEC theory.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> A tall plant (Tt) is crossed with a short plant (tt). Give the ratios.<br>
            Offspring Tt, Tt, tt, tt → <b>1 Tt : 1 tt</b>, so <b>50% tall, 50% short</b>. This is the classic test cross.</div>
            <div class="worked"><b>Q2.</b> A man of blood group A (Iᴬi) marries a woman of group B (Iᴮi). What blood groups can their children have?<br>
            IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B) and ii (O) — <b>all four are possible</b>, each with probability 1/4.</div>
            <div class="worked"><b>Q3.</b> Colour blindness is sex-linked recessive (Xᶜ). A carrier woman (XᴺXᶜ) marries a normal man (XᴺY). What is the chance of a colour-blind son?<br>
            Sons take Y from the father and either Xᴺ or Xᶜ from the mother, so <b>half the sons</b> are colour blind (1/4 of all children).</div>
            <div class="worked"><b>Q4.</b> Two heterozygous parents have four children. Must exactly three be dominant?<br>
            No. The 3:1 ratio is a <b>probability</b>, not a guarantee — small families vary widely.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Writing the gametes wrongly: Tt produces <b>T and t</b>, not "Tt".</li>
              <li>Confusing the genotype ratio (1:2:1) with the phenotype ratio (3:1).</li>
              <li>Saying the mother determines the sex — it is the <b>father's</b> sperm that carries X or Y.</li>
              <li>Forgetting that in co-dominance (group AB) <b>both</b> alleles show; neither is masked.</li>
            </ul>
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
              <li>Dominant != more common in the population (albinism is recessive but appears; polydactyly is dominant but rare).</li>
              <li>A carrier (Tt, or XᴴXʰ) shows no symptoms but can pass the allele on.</li>
              <li>In Nigeria, <b>sickle-cell</b> screening (AA, AS, SS) before marriage prevents AS × AS unions, where 1 in 4 children risks SS — the single most examinable genetics application.</li>
            </ul>

          `,
          cards: [
            { q: 'Define genetics and heredity.', a: 'Genetics is the study of how characters are transmitted from parents to offspring; heredity (inheritance) is the actual transmission of those characters.' },
            { q: 'What is a gene, and where is it found?', a: 'A gene is the basic unit of inheritance that determines a particular character; genes are located on chromosomes in the nucleus and are made of DNA.' },
            { q: 'Distinguish between genotype and phenotype.', a: 'Genotype is the genetic make-up (e.g. Tt); phenotype is the outward appearance produced by it (e.g. tall).' },
            { q: 'What is a dominant allele?', a: 'An allele that expresses itself in the phenotype whenever it is present, masking the recessive allele in a heterozygote — e.g. T (tall) dominates t (short).' },
            { q: 'Cross a homozygous tall (TT) with a short (tt) pea plant. What are the F1 and F2 results?', a: 'F1: all Tt — all tall. If F1 self-crosses (Tt x Tt), F2 gives TT, 2Tt, tt — 3 tall : 1 short (phenotypic ratio 3:1).' },
            { q: 'How is the sex of a human baby determined?', a: 'The mother always gives an X chromosome; the father\'s sperm carries either X or Y. XX = female, XY = male — so the father\'s sperm determines the sex, with a 50:50 chance.' },
            { q: 'Why are sex-linked disorders like colour blindness more common in males?', a: 'The genes are on the X chromosome. Males have only one X, so a single faulty allele shows the disorder; females need it on both X chromosomes.' },
            { q: 'Distinguish between continuous and discontinuous variation, with examples.', a: 'Continuous variation shows a range with intermediates (height, skin colour, weight); discontinuous variation has distinct classes with no intermediates (blood groups, tongue rolling, sex).' },
            { q: 'Who is the universal blood donor, and who is the universal recipient?', a: 'Group O is the universal donor (no A or B antigens on its cells); group AB is the universal recipient (no antibodies against A or B).' },
            { q: 'What is the genotype of a sickle cell carrier, and why can carriers be at an advantage?', a: 'AS (heterozygous) — they produce some normal haemoglobin, so they are healthy, and the sickle trait gives some resistance to malaria.' },
            { q: 'State two practical applications of genetics.', a: 'Selective breeding of crops and livestock for better yield, genetic counselling for couples (e.g. against SS risk), blood grouping for transfusion, and paternity/forensic tests using DNA.' },
            { q: 'How do identical twins differ from fraternal twins?', a: 'Identical (monozygotic) twins come from one zygote that splits — same sex, same genes. Fraternal (dizygotic) twins come from two separate eggs fertilized by two sperms — like ordinary siblings.' },
            { q: 'Phenotype ratio of a Tt × Tt cross?', a: '3 dominant : 1 recessive (genotype ratio 1 : 2 : 1).' },
            { q: 'Define gene, allele, genotype, phenotype, dominant and recessive.', a: 'Gene: unit of inheritance on a chromosome. Allele: an alternative form of a gene (T or t). Genotype: the allele combination (Tt). Phenotype: the observable result (tall). Dominant: expressed whenever present. Recessive: expressed only when both alleles are recessive (tt).' },
            { q: 'How is sex determined in humans?', a: 'Females are XX and produce X eggs only. Males are XY and produce X and Y sperm in equal numbers. An X-bearing sperm gives a girl (XX); a Y-bearing sperm gives a boy (XY) - so the father’s sperm decides, with a 1:1 chance.' }
          ],
          quiz: [
            { q: 'A gene is best defined as...', options: ['a unit of inheritance located on a chromosome', 'a type of cell', 'a protein only', 'a chromosome'], correct: 0,
              exp: 'Genes are stretches of DNA on chromosomes that carry the instructions for characteristics.' },
            { q: 'Genotype refers to ___ while phenotype refers to ___.', options: ['the genetic makeup; the observable appearance', 'the appearance; the genes', 'both genetic makeup', 'the environment; the genes'], correct: 0,
              exp: 'TT, Tt, tt are genotypes; tall or short are phenotypes.' },
            { q: 'A dominant allele is conventionally represented by...', options: ['a capital letter', 'a small letter', 'a number', 'a Greek letter'], correct: 0,
              exp: 'T for dominant tall, t for recessive short - capitals dominate.' },
            { q: 'Mendel’s first law states that...', options: ['alleles segregate (separate) during gamete formation', 'alleles always blend', 'gametes carry both alleles', 'dominant alleles disappear'], correct: 0,
              exp: 'Each gamete receives only one allele of each pair - the law of segregation.' },
            { q: 'A cross between two heterozygous tall plants (Tt x Tt) gives a phenotypic ratio of...', options: ['3 tall : 1 short', '1 : 1', 'all tall', '2 : 2'], correct: 0,
              exp: 'TT, Tt, Tt, tt - three show the dominant phenotype, one the recessive: 3:1.' },
            { q: 'In humans, the sex of a child is determined by...', options: ['the sperm that fertilises the egg', 'the egg only', 'the mother’s diet', 'the season'], correct: 0,
              exp: 'Eggs always carry X; sperm carry X or Y. An X sperm gives a girl (XX), a Y sperm a boy (XY).' },
            { q: 'In the ABO blood group system, the alleles Iᴬ and Iᴮ are...', options: ['codominant', 'both recessive', 'both dominant over everything', 'linked to sex'], correct: 0,
              exp: 'Neither masks the other - AB blood shows both antigens. Iᴠ is recessive to both.' },
            { q: 'A person with blood group O has the genotype...', options: ['IᴠIᴠ', 'IᴬIᴠ', 'IᴮIᴠ', 'IᴬIᴮ'], correct: 0,
              exp: 'O appears only when both alleles are the recessive Iᴠ.' },
            { q: 'An organism with two identical alleles for a trait is...', options: ['homozygous', 'heterozygous', 'hybrid always', 'mutated'], correct: 0,
              exp: 'Homozygous: TT or tt. Heterozygous (Tt) carries two different alleles.' },
            { q: 'The probability that a human child is a girl is...', options: ['1/2', '1/4', '1/3', '3/4'], correct: 0,
              exp: 'X sperm and Y sperm are produced in equal numbers, so the chance is 50:50 - each pregnancy independently.' }
          ],
        },
        {
          title: 'Ecology: Ecosystems & Energy Flow',
          tags: ['Food chains', 'Trophic levels', 'Cycles'],
          summary: 'Feeding relationships, the 10% energy rule and nutrient cycles.',
          content: `
            <h3>Key terms</h3>
            <ul><li><b>Habitat</b> — where an organism lives; <b>niche</b> — its role there.</li>
            <li><b>Population</b> — all members of one species in an area.</li>
            <li><b>Community</b> — all populations together; <b>ecosystem</b> — community + non-living environment.</li></ul>
            <h3>Food chains and energy</h3>
            <div class="formula">Producers → primary consumers → secondary consumers → tertiary consumers</div>
            <p>Only about <b>10%</b> of the energy at one trophic level passes to the next; the rest is lost as heat, in waste, and in respiration. This is why food chains rarely exceed four or five links and why top predators are few in number.</p>
            <h3>Cycles</h3>
            <ul><li><b>Carbon cycle</b> — photosynthesis removes CO2; respiration, combustion and decomposition return it.</li>
            <li><b>Nitrogen cycle</b> — nitrogen-fixing bacteria (Rhizobium in root nodules) convert N2 into usable nitrates; nitrifying, denitrifying and putrefying bacteria complete the cycle.</li>
            <li><b>Water cycle</b> — evaporation, transpiration, condensation, precipitation.</li></ul>
            <div class="tip"><b>Exam tip:</b> In an ecological pyramid of numbers, producers are at the base and are usually the most numerous; a pyramid of <b>biomass</b> is never inverted in a terrestrial ecosystem.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Construct a food chain starting from grass, using a grasshopper, a lizard and a hawk.<br>
            <b>Grass → grasshopper → lizard → hawk.</b> The arrow shows the direction of <b>energy flow</b>, not "is eaten by".</div>
            <div class="worked"><b>Q2.</b> If producers contain 10,000 kJ of energy, roughly how much reaches the third trophic level?<br>
            About 10% passes at each step: 10,000 → 1,000 → <b>100 kJ</b>.</div>
            <div class="worked"><b>Q3.</b> Explain the role of nitrogen-fixing bacteria.<br>
            Bacteria such as <b>Rhizobium</b> in legume root nodules convert atmospheric nitrogen into nitrates that plants can absorb — plants cannot use nitrogen gas directly.</div>
            <div class="diagram">
              <div class="diagram-title">A food chain and the 10% energy rule</div>
              <svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy pyramid with grass at 10000 kJ, grasshopper 1000, lizard 100 and hawk 10">
                <rect x="6" y="6" width="368" height="168" rx="14" fill="#f0fdf4"/>
                <rect x="70" y="128" width="240" height="30" fill="#86efac" stroke="#15803d" stroke-width="2"/>
                <text x="190" y="148" text-anchor="middle" font-size="10" fill="#14532d">GRASS  (producer)  10 000 kJ</text>
                <rect x="100" y="94" width="180" height="30" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
                <text x="190" y="114" text-anchor="middle" font-size="10" fill="#166534">GRASSHOPPER  1 000 kJ</text>
                <rect x="130" y="60" width="120" height="30" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
                <text x="190" y="80" text-anchor="middle" font-size="10" fill="#166534">LIZARD  100 kJ</text>
                <rect x="160" y="26" width="60" height="30" fill="#ecfccb" stroke="#65a30d" stroke-width="2"/>
                <text x="190" y="46" text-anchor="middle" font-size="10" fill="#3f6212">HAWK 10 kJ</text>
                <path d="M322 128 L338 108" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
                <text x="336" y="100" font-size="9" fill="#991b1b">lost as</text>
                <text x="336" y="112" font-size="9" fill="#991b1b">heat</text>
                <text x="52" y="112" font-size="9" fill="#166534" transform="rotate(-90 52 112)">only ~10% passes on</text>
                <text x="190" y="170" text-anchor="middle" font-size="10" fill="#14532d">This is why food chains rarely have more than four or five links.</text>
              </svg>
              <div class="diagram-note">The arrow in a food chain points in the direction of <b>energy flow</b>, from the organism being eaten to the eater.</div>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Drawing food-chain arrows to show "eats" instead of <b>energy flow</b> from food to feeder.</li>
              <li>Confusing a <b>habitat</b> (where it lives) with a <b>niche</b> (its role).</li>
              <li>Saying plants take in nitrogen gas directly from the air.</li>
            </ul>
            <h3>Deep dive: levels of organisation and the 10% rule</h3>
            <p>Ecology stacks up: <b>organism → population → community → ecosystem → biosphere</b>. A <b>habitat</b> is an organism's address; its <b>niche</b> is its profession — what it eats, when it is active, where it nests. Two species cannot share a niche indefinitely (competitive exclusion).</p>
            <p>Energy enters as sunlight, is fixed by <b>producers</b>, and passes along food chains — but only about <b>10% transfers to each next trophic level</b>; the rest is lost as heat, movement and undigested waste. That single fact explains why food chains rarely exceed four or five levels, why herbivores outnumber lions, and why pyramids of energy are never inverted.</p>
            <h3>Worked example</h3>
            <p><b>Producers in a savanna plot fix 10,000 J. How much reaches a tertiary consumer?</b> Primary consumer ~= 1,000 J → secondary ~= 100 J → tertiary ~= <b>10 J</b>. One thousandth of the original energy — this is why meat is "expensive" in energy terms.</p>
            <h3>Human impact and conservation in Nigeria</h3>
            <ul>
              <li><b>Niger Delta oil spills</b> coat mangroves and kill fish — ecosystem recovery takes decades.</li>
              <li><b>Deforestation</b> (fuelwood, farming) removes habitat, worsens erosion and raises atmospheric CO2.</li>
              <li><b>Conservation</b>: national parks such as <b>Yankari</b> (Bauchi) and <b>Cross River</b> protect wildlife; afforestation, controlled burning and anti-poaching laws sustain it.</li>
            </ul>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Energy <b>flows</b> one way and is lost as heat; nutrients <b>cycle</b> forever.</li>
              <li>A pyramid of <b>numbers</b> CAN invert (one big tree → thousands of insects); a pyramid of <b>energy</b> never does.</li>
              <li>Decomposers (bacteria, fungi) belong at every level — they recycle what all others leave behind.</li>
            </ul>

          `,
          cards: [
            { q: 'Define ecology and ecosystem.', a: 'Ecology is the study of the relationship between organisms and their environment. An ecosystem is a community of living organisms interacting with the non-living parts of their environment.' },
            { q: 'Distinguish between biotic and abiotic factors, with examples.', a: 'Biotic factors are the living components (plants, animals, decomposers, competition, predators); abiotic factors are non-living (temperature, light, rainfall, soil, pH).' },
            { q: 'What are producers, consumers and decomposers?', a: 'Producers (green plants) make their own food by photosynthesis; consumers (animals) feed on others; decomposers (bacteria, fungi) break down dead remains and recycle nutrients.' },
            { q: 'What does the arrow in a food chain represent?', a: 'The direction of energy flow — from the organism being eaten to the organism that eats it, e.g. grass -> goat -> human.' },
            { q: 'Why are food chains usually short (4-5 links)?', a: 'Only about 10% of energy passes to each next level (the rest is lost as heat, movement, and in waste), so too little energy remains to support many levels.' },
            { q: 'Name the three types of ecological pyramids.', a: 'Pyramid of numbers, pyramid of biomass, and pyramid of energy (the energy pyramid is always upright).' },
            { q: 'Outline the stages of the nitrogen cycle.', a: 'Nitrogen fixation (Rhizobium bacteria and lightning convert N2 to usable compounds) -> nitrification (conversion to nitrates plants absorb) -> uptake by plants -> return via death/waste -> putrefaction and denitrification back to the air.' },
            { q: 'How do photosynthesis and combustion each affect atmospheric carbon dioxide?', a: 'Photosynthesis removes CO2 from the air (building it into food); respiration and the burning of fuels and forests release CO2 back into the air.' },
            { q: 'State four factors that affect the size of a population.', a: 'Birth rate (natality), death rate (mortality), immigration and emigration — plus food, space, disease and predation.' },
            { q: 'What is ecological succession?', a: 'The gradual, orderly change in the community of an area over time — pioneer species (e.g. lichens, grasses) colonise first and are replaced in stages until a stable climax community (e.g. forest) develops.' },
            { q: 'Why do farmers and ecologists value decomposers?', a: 'They break down dead plants and animals, releasing mineral nutrients back into the soil so producers can reuse them — nature\'s recycling system.' },
            { q: 'State two reasons for conserving wildlife (game reserves, national parks).', a: 'To prevent extinction and preserve genetic variety, to maintain balanced ecosystems, for tourism revenue, and for scientific research and education.' },
            { q: 'Roughly what percentage of energy passes to the next trophic level?', a: 'About 10% — the rest is lost as heat, waste and in respiration.' },
            { q: 'Define ecosystem, community and population.', a: 'Population: all individuals of ONE species in an area. Community: all the populations (all species) living together there. Ecosystem: the community PLUS the non-living environment, interacting as a whole system.' },
            { q: 'How does energy flow through an ecosystem?', a: 'Sun → producers (photosynthesis) → primary consumers → secondary and tertiary consumers, with decomposers recycling the dead at every stage. Only about 10% of energy transfers between levels - the rest is lost as heat - so food chains are short and pyramids of energy always narrow upwards.' }
          ],
          quiz: [
            { q: 'An ecosystem consists of...', options: ['a community of organisms together with their non-living environment', 'only the living organisms', 'only the physical factors', 'one species and its young'], correct: 0,
              exp: 'Biotic community plus abiotic environment (soil, water, light, climate), interacting as a system.' },
            { q: 'The producers in an ecosystem are...', options: ['green plants and other photosynthetic organisms', 'herbivores', 'fungi', 'carnivores'], correct: 0,
              exp: 'Producers trap the Sun’s energy and make food - everything else feeds from them.' },
            { q: 'A primary consumer is...', options: ['a herbivore that eats producers', 'a carnivore', 'a decomposer', 'a producer'], correct: 0,
              exp: 'First step up the food chain: plant-eaters like grasshoppers and rabbits.' },
            { q: 'Every food chain begins with...', options: ['a producer', 'a herbivore', 'a carnivore', 'a decomposer'], correct: 0,
              exp: 'Energy enters the chain only through producers capturing sunlight.' },
            { q: 'As energy moves along a food chain, it...', options: ['decreases at each level', 'increases', 'stays constant', 'reverses direction'], correct: 0,
              exp: 'Much is lost as heat and in waste at every transfer - typically only about 10% passes on.' },
            { q: 'The organisms that break down dead remains are...', options: ['decomposers such as bacteria and fungi', 'producers', 'primary consumers', 'predators'], correct: 0,
              exp: 'Decomposers recycle nutrients back into the soil - nature’s clean-up crew.' },
            { q: 'In the carbon cycle, green plants remove carbon dioxide from the air by...', options: ['photosynthesis', 'respiration', 'transpiration', 'evaporation'], correct: 0,
              exp: 'Photosynthesis locks carbon into glucose; respiration and combustion return it as CO2.' },
            { q: 'The water cycle is powered mainly by...', options: ['evaporation driven by solar energy', 'plant roots', 'the Moon', 'soil bacteria'], correct: 0,
              exp: 'The Sun evaporates water, which condenses into clouds and returns as rain.' },
            { q: 'A population is defined as...', options: ['all the individuals of one species in an area at a time', 'all organisms in an area', 'two species interacting', 'one organism and its offspring'], correct: 0,
              exp: 'One species, one place, one time - e.g. all the tilapia in a pond.' },
            { q: 'The living (biotic) components of an ecosystem include...', options: ['plants, animals and microorganisms', 'soil and water', 'sunlight and temperature', 'rainfall and wind'], correct: 0,
              exp: 'Biotic = living; soil, water, light and climate are the abiotic (non-living) factors.' }
          ],
        },
        {
          title: 'Photosynthesis & Respiration',
          tags: ['Light & dark stages', 'Aerobic vs anaerobic', 'ATP'],
          summary: 'The two opposite processes that drive energy flow in living things.',
          content: `
            <h3>Photosynthesis</h3>
            <div class="formula">6CO2 + 6H2O --light/chlorophyll--&gt; C6H12O6 + 6O2</div>
            <ul><li><b>Light stage</b> (in the grana): water is split (photolysis), releasing oxygen and producing ATP and NADPH.</li>
            <li><b>Dark stage</b> (in the stroma): CO2 is fixed into glucose using the ATP and NADPH.</li></ul>
            <p><b>Limiting factors:</b> light intensity, carbon dioxide concentration and temperature.</p>
            <h3>Respiration</h3>
            <div class="formula">C6H12O6 + 6O2 → 6CO2 + 6H2O + energy (ATP)</div>
            <table><tr><th></th><th>Aerobic</th><th>Anaerobic</th></tr>
            <tr><td>Oxygen</td><td>Required</td><td>Absent</td></tr>
            <tr><td>Products (animals)</td><td>CO2 + water</td><td>Lactic acid</td></tr>
            <tr><td>Products (yeast)</td><td>CO2 + water</td><td>Ethanol + CO2</td></tr>
            <tr><td>Energy</td><td>Large (38 ATP)</td><td>Small (2 ATP)</td></tr></table>
            <div class="tip"><b>Exam tip:</b> "Oxygen debt" after hard exercise is the extra oxygen needed to convert accumulated lactic acid — that is why breathing stays fast after you stop running.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Name the two stages of photosynthesis and say where each occurs.<br>
            The <b>light stage</b> in the grana (water is split, releasing oxygen and forming ATP and NADPH) and the <b>dark stage</b> in the stroma (carbon(IV) oxide is fixed into glucose).</div>
            <div class="worked"><b>Q2.</b> State three limiting factors of photosynthesis.<br>
            <b>Light intensity</b>, <b>carbon(IV) oxide concentration</b> and <b>temperature</b>.</div>
            <div class="worked"><b>Q3.</b> Why does a sprinter's muscle ache after a 400 m race?<br>
            Oxygen supply cannot meet demand, so the muscles respire anaerobically and <b>lactic acid</b> accumulates. The extra oxygen taken in afterwards repays the <b>oxygen debt</b>.</div>
            <div class="diagram">
              <div class="diagram-title">Photosynthesis: what goes in and what comes out</div>
              <svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Leaf taking in carbon dioxide and water with sunlight and releasing oxygen and glucose">
                <rect x="6" y="6" width="368" height="198" rx="14" fill="#fefce8"/>
                <path d="M190 60 Q260 70 268 118 Q272 166 190 172 Q108 166 112 118 Q120 70 190 60 Z" fill="#86efac" stroke="#15803d" stroke-width="2.5"/>
                <path d="M190 66 L190 168 M190 90 L150 78 M190 90 L232 78 M190 116 L142 108 M190 116 L240 108 M190 142 L150 152 M190 142 L232 152" stroke="#166534" stroke-width="1.6" fill="none"/>
                <circle cx="58" cy="40" r="20" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
                <g stroke="#ca8a04" stroke-width="2.4">
                  <line x1="58" y1="10" x2="58" y2="2"/><line x1="58" y1="70" x2="58" y2="78"/>
                  <line x1="28" y1="40" x2="20" y2="40"/><line x1="88" y1="40" x2="96" y2="40"/>
                  <line x1="37" y1="19" x2="31" y2="13"/><line x1="79" y1="61" x2="85" y2="67"/>
                  <line x1="79" y1="19" x2="85" y2="13"/><line x1="37" y1="61" x2="31" y2="67"/>
                </g>
                <text x="58" y="94" text-anchor="middle" font-size="10" fill="#854d0e">light energy</text>
                <path d="M96 56 Q140 70 158 88" stroke="#ca8a04" stroke-width="2" fill="none" stroke-dasharray="5 4"/>
                <path d="M40 130 L104 122" stroke="#0284c7" stroke-width="2.5" fill="none"/>
                <path d="M98 116 L106 122 L98 128" fill="#0284c7"/>
                <text x="30" y="150" font-size="10" fill="#075985">CO2 in</text>
                <path d="M40 176 L104 168" stroke="#16a34a" stroke-width="2.5" fill="none"/>
                <path d="M98 162 L106 168 L98 174" fill="#16a34a"/>
                <text x="24" y="196" font-size="10" fill="#166534">H2O in (from roots)</text>
                <path d="M276 118 L340 110" stroke="#0891b2" stroke-width="2.5" fill="none"/>
                <path d="M334 104 L342 110 L334 116" fill="#0891b2"/>
                <text x="286" y="100" font-size="10" fill="#155e75">O2 out</text>
                <path d="M276 156 L340 162" stroke="#a16207" stroke-width="2.5" fill="none"/>
                <path d="M334 156 L342 162 L334 168" fill="#a16207"/>
                <text x="278" y="180" font-size="10" fill="#854d0e">glucose (food)</text>
                <text x="190" y="34" text-anchor="middle" font-size="11" fill="#3f6212">6CO2 + 6H2O  --light/chlorophyll--&gt;  C6H12O6 + 6O2</text>
              </svg>
              <div class="diagram-note">Respiration runs the other way: glucose + oxygen → carbon dioxide + water + energy, and it happens in <b>every</b> living cell, day and night.</div>
            </div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying the dark stage happens only at night — it happens whenever the products of the light stage are available.</li>
              <li>Confusing the products of anaerobic respiration in animals (lactic acid) with those in yeast (ethanol and CO2).</li>
              <li>Saying respiration happens only in animals. Every living cell respires, day and night.</li>
            </ul>
            <h3>Deep dive: the two great equations</h3>
            <div class="formula">Photosynthesis: 6CO2 + 6H2O → (light, chlorophyll) → C6H12O6 + 6O2<br/>Aerobic respiration: C6H12O6 + 6O2 → 6CO2 + 6H2O + energy (ATP)</div>
            <p>They look like mirror images but run independently: <b>photosynthesis</b> happens only in green parts, only in light, and stores energy in glucose; <b>respiration</b> happens in <b>every living cell, day and night</b>, releasing that energy as ATP. A leaf in daylight does both at once; at the <b>compensation point</b> the two rates balance exactly.</p>
            <p><b>Anaerobic respiration</b> takes over without oxygen: in muscles → glucose → <b>lactic acid</b> + small energy (the burn after sprinting); in yeast → glucose → <b>ethanol + CO2</b> (brewing and bread rising).</p>
            <h3>Leaf adaptations for photosynthesis</h3>
            <ul>
              <li><b>Broad and thin</b> — large surface, short diffusion path.</li>
              <li><b>Palisade mesophyll</b> packed with chloroplasts near the upper surface where light is strongest.</li>
              <li><b>Stomata</b> (mostly underneath) for CO2 in, O2 out; guard cells open them in light.</li>
              <li><b>Veins</b> deliver water and carry away glucose.</li>
            </ul>
            <p><b>Limiting factors</b>: raise light, CO2 or warmth and the rate rises — until something else becomes the bottleneck. Greenhouses exploit this (extra CO2 and controlled heat); the classic lab proof is <b>counting oxygen bubbles from pondweed</b> at different lamp distances.</p>
            <h3>Examiner's traps</h3>
            <ul>
              <li>Plants respire <b>all the time</b> — "plants photosynthesise, animals respire" is wrong.</li>
              <li>Muscles make <b>lactic acid</b>; yeast makes <b>ethanol</b> — never swap them.</li>
              <li>Oxygen produced in photosynthesis comes from the splitting of <b>water</b>.</li>
            </ul>

          `,
          cards: [
            { q: 'Write the word equation for photosynthesis.', a: 'Carbon dioxide + water --(light energy, chlorophyll)--> glucose + oxygen. (Balanced: 6CO2 + 6H2O -> C6H12O6 + 6O2.)' },
            { q: 'What is the role of chlorophyll in photosynthesis?', a: 'It absorbs (traps) light energy and converts it into chemical energy used to split water and build glucose — it is housed in the chloroplasts.' },
            { q: 'Name the two stages of photosynthesis and where each occurs.', a: 'The light-dependent stage (splits water, releases oxygen; in the grana) and the light-independent/dark stage (fixes CO2 into glucose; in the stroma).' },
            { q: 'Name three limiting factors of photosynthesis.', a: 'Light intensity, carbon dioxide concentration, and temperature (each can slow the rate when in short supply).' },
            { q: 'Outline the starch test on a leaf.', a: 'Destarch the plant in darkness, then expose a leaf to light; boil it (kills cells), decolourise in hot alcohol (removes chlorophyll), rinse, and add iodine — a blue-black colour shows starch, proving photosynthesis occurred.' },
            { q: 'Write the word equation for aerobic respiration.', a: 'Glucose + oxygen -> carbon dioxide + water + energy (as ATP). Balanced: C6H12O6 + 6O2 -> 6CO2 + 6H2O + energy.' },
            { q: 'Where in the cell does aerobic respiration mainly occur?', a: 'In the mitochondria — hence their name, the powerhouse of the cell.' },
            { q: 'What happens during anaerobic respiration in human muscles, and what is oxygen debt?', a: 'During hard exercise glucose breaks down without enough oxygen to lactic acid, causing fatigue and cramps. The extra oxygen needed afterwards to oxidise the lactic acid is the oxygen debt.' },
            { q: 'State the products of fermentation in yeast and one economic use.', a: 'Ethanol and carbon dioxide. Uses: brewing alcoholic drinks (beer, palm wine) and making bread rise.' },
            { q: 'Give three differences between photosynthesis and respiration.', a: 'Photosynthesis: in chloroplasts, only in light, uses CO2 and water, stores energy, releases O2. Respiration: in mitochondria (and cytoplasm), day and night, uses O2 and glucose, releases energy, releases CO2.' },
            { q: 'State four uses of the glucose made in photosynthesis.', a: 'Oxidised in respiration for energy; stored as starch (or oils in seeds); converted to cellulose for cell walls; changed to sucrose for transport in the phloem; used with nitrates to make proteins.' },
            { q: 'Through which structures do leaves exchange gases?', a: 'Through the stomata (pores, mainly on the lower surface) — CO2 enters and O2 leaves by diffusion, controlled by the guard cells.' },
            { q: 'Word equation for photosynthesis.', a: 'Carbon dioxide + water → (light, chlorophyll) → glucose + oxygen.' },
            { q: 'Products of anaerobic respiration in yeast?', a: 'Ethanol and carbon dioxide (plus a small amount of ATP).' },
            { q: 'Compare aerobic and anaerobic respiration.', a: 'Aerobic: uses oxygen, occurs in mitochondria, glucose fully broken down to CO2 + water, releasing much energy (38 ATP). Anaerobic: no oxygen, glucose partly broken down - lactic acid in animals, ethanol + CO2 in yeast - releasing far less energy.' }
          ],
          quiz: [
            { q: 'Photosynthesis takes place in the...', options: ['chloroplasts', 'mitochondria', 'nucleus', 'ribosomes'], correct: 0,
              exp: 'Chloroplasts hold the chlorophyll that traps light - the solar panels of the cell.' },
            { q: 'The pigment that traps light energy for photosynthesis is...', options: ['chlorophyll', 'haemoglobin', 'melanin', 'cytochrome'], correct: 0,
              exp: 'Chlorophyll absorbs mainly red and blue light, reflecting green - which is why leaves look green.' },
            { q: 'The raw materials of photosynthesis are...', options: ['carbon dioxide and water', 'oxygen and glucose', 'glucose and water', 'oxygen and carbon dioxide'], correct: 0,
              exp: 'CO2 from the air and water from the soil; light provides the energy.' },
            { q: 'The products of photosynthesis are...', options: ['glucose and oxygen', 'carbon dioxide and water', 'starch and nitrogen', 'protein and water'], correct: 0,
              exp: 'Glucose (often stored as starch) and oxygen released through the stomata.' },
            { q: 'The test for starch in a leaf uses iodine, which turns...', options: ['blue-black', 'brick red', 'clear', 'green'], correct: 0,
              exp: 'Iodine solution goes from brown to blue-black where starch is present - the classic leaf test.' },
            { q: 'The word equation for aerobic respiration is...', options: ['glucose + oxygen → carbon dioxide + water + energy', 'carbon dioxide + water → glucose + oxygen', 'glucose → lactic acid only', 'oxygen + water → glucose'], correct: 0,
              exp: 'Respiration is photosynthesis’s mirror image - it releases the energy stored in glucose as ATP.' },
            { q: 'Aerobic respiration occurs mainly in the...', options: ['mitochondria', 'chloroplasts', 'vacuole', 'cell wall'], correct: 0,
              exp: 'The mitochondrion is the powerhouse - the site of aerobic ATP production.' },
            { q: 'Anaerobic respiration in human muscles during hard exercise produces...', options: ['lactic acid', 'ethanol and CO2', 'oxygen', 'glucose'], correct: 0,
              exp: 'Without enough oxygen, glucose breaks down only partly - lactic acid builds up and causes cramps.' },
            { q: 'Compared with aerobic respiration, anaerobic respiration releases...', options: ['much less energy per glucose', 'more energy', 'the same energy', 'no energy at all'], correct: 0,
              exp: 'The glucose is only partially broken down, so most of its energy remains trapped in the lactic acid or ethanol.' },
            { q: 'Carbon dioxide is detected by limewater, which turns...', options: ['milky (chalky)', 'blue', 'red', 'clear'], correct: 0,
              exp: 'CO2 makes limewater cloudy - the standard test used in respiration experiments.' }
          ],
        },
        {
          title: 'Variation, Selection & Evolution',
          tags: ['Continuous variation', 'Natural selection', 'Evidence of evolution'],
          summary: 'Where differences between organisms come from and how they drive evolution.',
          content: `
            <h3>1. Variation</h3>
            <p>Variation is the difference between individuals of the same species.</p>
            <table>
              <tr><th></th><th>Continuous</th><th>Discontinuous</th></tr>
              <tr><td>Range</td><td>A smooth range with no distinct classes</td><td>Distinct categories</td></tr>
              <tr><td>Examples</td><td>Height, weight, skin colour</td><td>Blood group, tongue rolling, sex</td></tr>
              <tr><td>Graph</td><td>Histogram or curve</td><td>Bar chart</td></tr>
              <tr><td>Influence</td><td>Genes and environment</td><td>Genes alone</td></tr>
            </table>
            <h3>2. Sources of variation</h3>
            <ul>
              <li><b>Genetic:</b> mutation, independent assortment during meiosis, and crossing over.</li>
              <li><b>Environmental:</b> nutrition, climate, disease, accidents.</li>
            </ul>
            <h3>3. Darwin's theory of natural selection</h3>
            <ol>
              <li>Organisms produce <b>more offspring</b> than the environment can support.</li>
              <li>Individuals <b>vary</b>, and some variations are inherited.</li>
              <li>There is a <b>struggle for existence</b> — competition for food, space and mates.</li>
              <li>Those with <b>advantageous variations</b> survive and reproduce — "survival of the fittest".</li>
              <li>Over many generations the advantageous features become common, and the population changes.</li>
            </ol>
            <h3>4. Evidence for evolution</h3>
            <ul>
              <li><b>Fossils</b> — preserved remains showing simpler organisms in older rocks.</li>
              <li><b>Comparative anatomy</b> — homologous structures such as the human arm, bat wing and whale flipper share the same bone plan but serve different functions.</li>
              <li><b>Vestigial organs</b> — structures with no current function, such as the human appendix.</li>
              <li><b>Embryology</b> — vertebrate embryos look remarkably similar in early stages.</li>
              <li><b>Biochemistry</b> — all living things share DNA and the same genetic code.</li>
            </ul>
            <h3>5. Classic worked examples</h3>
            <div class="worked"><b>Industrial melanism:</b> before industrialisation, pale peppered moths were camouflaged on lichen-covered bark. Soot killed the lichen and blackened the trees, so the dark form survived better and became common. When pollution was reduced, the pale form increased again — natural selection observed within a century.</div>
            <div class="worked"><b>Antibiotic resistance:</b> a few bacteria in a population carry a mutation that resists an antibiotic. The drug kills the rest, the resistant ones multiply, and the population becomes resistant. This is why a full course of antibiotics must be finished.</div>
            <div class="tip"><b>Exam tip:</b> always state that <b>individuals do not evolve</b> — populations do, over generations. Mutations are random; selection is not.</div>
            <h3>Worked practice</h3>
            <div class="worked"><b>Q1.</b> Classify each as continuous or discontinuous variation: height, blood group, mass, ability to roll the tongue.<br>
            Continuous: <b>height, mass</b>. Discontinuous: <b>blood group, tongue rolling</b>.</div>
            <div class="worked"><b>Q2.</b> Give two structures that provide evidence for evolution and explain how.<br>
            <b>Homologous structures</b> such as the human arm, bat wing and whale flipper share the same bone plan but serve different functions, indicating a common ancestor. <b>Fossils</b> in older rock layers are simpler, showing gradual change over time.</div>
            <div class="worked"><b>Q3.</b> Explain how antibiotic resistance develops in bacteria.<br>
            A few bacteria carry a random mutation that resists the drug. The antibiotic kills the rest, the resistant ones survive and multiply, and the population becomes resistant — which is why a full course must be finished.</div>
            <h3>Common mistakes</h3>
            <ul>
              <li>Saying an individual evolves. <b>Populations</b> evolve, over generations.</li>
              <li>Saying mutations happen because they are needed. Mutations are <b>random</b>; selection is not.</li>
              <li>Confusing continuous variation (a range, drawn as a histogram) with discontinuous variation (categories, drawn as a bar chart).</li>
            </ul>
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
              <li>Homologous != analogous; the words are one letter apart, the concepts are opposites.</li>
              <li>Antibiotic and insecticide <b>resistance</b> is evolution happening now, in Nigerian hospitals and farms — resistant strains were already there; the drug selected them.</li>
            </ul>

          `,
          cards: [
            { q: 'Define variation.', a: 'Variation is the differences in characteristics between individuals of the same species — no two individuals (except identical twins) are exactly alike.' },
            { q: 'Classify these as continuous or discontinuous variation: height, blood group, skin colour, ability to roll the tongue.', a: 'Continuous: height, skin colour (a full range of intermediates). Discontinuous: blood group, tongue rolling (distinct classes, no intermediates).' },
            { q: 'State two causes of variation.', a: 'Genetic causes — differences in genes inherited from parents (including mutation); and environmental causes — climate, diet, accidents and training acting on the organism.' },
            { q: 'Summarize Darwin\'s theory of natural selection.', a: 'Organisms produce more offspring than can survive; individuals vary, and those with variations best suited to the environment survive and reproduce, passing on those advantages — \'survival of the fittest\'.' },
            { q: 'State three lines of evidence for evolution.', a: 'Fossil records showing gradual change in past life; comparative anatomy (homologous structures); and comparative embryology and vestigial organs.' },
            { q: 'Distinguish between homologous and analogous structures with examples.', a: 'Homologous: same basic structure, different functions — forelimbs of human, bat and whale (common ancestry). Analogous: different structure, same function — wings of insects and birds (independent adaptation).' },
            { q: 'What are vestigial organs? Give two examples in humans.', a: 'Vestigial organs are remnants of structures that were functional in ancestors but are now reduced and useless — e.g. the appendix, wisdom teeth, the tail bone (coccyx), and body hair.' },
            { q: 'What is mutation, and why is it important in evolution?', a: 'Mutation is a sudden change in the genes or chromosomes. It creates new variations on which natural selection can act — e.g. the sickle cell gene.' },
            { q: 'Give two examples of artificial selection by humans.', a: 'Breeding dairy cattle for high milk yield, maize or cassava varieties for bigger yields and disease resistance, and dogs bred for specific traits.' },
            { q: 'Explain industrial melanism in the peppered moth.', a: 'In soot-darkened industrial areas the dark (melanic) moths were camouflaged on blackened trees and escaped bird predation, so they survived and bred more — the environment selected the dark variety.' },
            { q: 'Define evolution.', a: 'Evolution is the gradual change in the characteristics of living organisms from simple to more complex forms over many generations, through variation and natural selection.' },
            { q: 'Why is variation important to a species?', a: 'It gives some individuals advantages when the environment changes, so the species can adapt and survive rather than die out — it is the raw material for natural selection and for crop and livestock improvement.' },
            { q: 'Distinguish continuous from discontinuous variation.', a: 'Continuous: a smooth range of values with no distinct categories - height, weight, skin colour (controlled by many genes). Discontinuous: distinct categories with nothing in between - blood groups, sex, tongue rolling (usually single genes).' },
            { q: 'Outline Darwin’s theory of natural selection.', a: 'Organisms overproduce offspring → variation exists among them → resources are limited, so there is a struggle for survival → the best-adapted survive and reproduce → their advantageous genes become more common over generations - the population evolves.' },
            { q: 'Give three lines of evidence for evolution.', a: 'Fossils: simpler organisms in older rocks, showing change over time. Homologous structures: the same bone plan in arms, wings and flippers - common ancestry. Embryology: vertebrate embryos share early features (gill slits, tails) before diverging.' }
          ],
          quiz: [
            { q: 'Variation is best defined as...', options: ['the differences between individuals of the same species', 'differences between species only', 'changes within one lifetime', 'mutations in the lab'], correct: 0,
              exp: 'No two people (except identical twins) are alike - variation is the raw material of evolution.' },
            { q: 'Which is an example of continuous variation?', options: ['height', 'blood group', 'tongue rolling', 'sex'], correct: 0,
              exp: 'Height ranges smoothly across a scale; blood group and tongue rolling fall into distinct categories (discontinuous).' },
            { q: 'The two main sources of variation are...', options: ['mutation and sexual reproduction (meiosis and fertilisation)', 'growth and ageing', 'diet and exercise only', 'climate and season'], correct: 0,
              exp: 'Mutations create new alleles; meiosis shuffles them, and fertilisation combines two sets.' },
            { q: 'Darwin’s theory of natural selection is often summarised as...', options: ['survival of the fittest', 'use and disuse', 'inheritance of acquired characters', 'spontaneous generation'], correct: 0,
              exp: 'The best-adapted individuals survive and breed, passing on their advantageous genes.' },
            { q: 'In natural selection, overproduction of offspring leads to...', options: ['competition, in which the best-adapted survive', 'equality for all offspring', 'instant evolution', 'no change'], correct: 0,
              exp: 'More are born than the environment can support, so only the fittest reach breeding age.' },
            { q: 'Which is evidence for evolution?', options: ['fossils, homologous structures and embryology', 'weather patterns', 'tidal movements', 'seasonal migration only'], correct: 0,
              exp: 'Fossils show changing life over time; shared bone plans and embryonic similarities point to common ancestry.' },
            { q: 'The peppered moth is a classic example of...', options: ['industrial melanism - natural selection in action', 'artificial selection', 'migration', 'mutation pressure'], correct: 0,
              exp: 'Soot-blackened trees favoured dark moths; clean-air laws later swung the advantage back to the light form.' },
            { q: 'Antibiotic resistance in bacteria demonstrates...', options: ['natural selection happening before our eyes', 'acquired characteristics', 'use and disuse', 'random luck only'], correct: 0,
              exp: 'Resistant mutants survive the drug and multiply - selection favouring the resistant strain.' },
            { q: 'A mutation is a change in...', options: ['the genes (DNA) of an organism', 'the environment', 'the habitat', 'the food supply'], correct: 0,
              exp: 'Mutations alter DNA; most are harmless or harmful, but occasionally one gives an advantage that selection can spread.' },
            { q: 'Homologous structures such as the human arm and bat wing suggest...', options: ['common ancestry', 'identical function', 'recent mutation', 'no relationship'], correct: 0,
              exp: 'The same basic bone plan adapted to different jobs points to descent from a shared ancestor.' }
          ],
        }
      ]
    },
    mock: [
      { q: 'Which cell organelle is found in plant cells but NOT in animal cells?',
        options: ['Mitochondrion', 'Chloroplast', 'Ribosome', 'Nucleus'], correct: 1,
        exp: 'Chloroplasts carry out photosynthesis and are only present in green plant cells. Animal cells have mitochondria, ribosomes and a nucleus.' },
      { q: 'In a cross between two heterozygous tall plants (Tt × Tt), the expected phenotype ratio is:',
        options: ['1:1', '3:1', '1:2:1', '9:3:3:1'], correct: 1,
        exp: 'TT, Tt, Tt, tt gives 3 tall : 1 short. (1:2:1 is the genotype ratio; 9:3:3:1 is a dihybrid ratio.)' },
      { q: 'Approximately what percentage of energy is transferred from one trophic level to the next?',
        options: ['1%', '10%', '50%', '90%'], correct: 1,
        exp: 'Only about 10% passes on; roughly 90% is lost as heat, waste and in respiration.' },
      { q: 'Which enzyme begins the digestion of starch in the mouth?',
        options: ['Pepsin', 'Lipase', 'Salivary amylase', 'Trypsin'], correct: 2,
        exp: 'Salivary amylase (ptyalin) breaks starch into maltose. Pepsin digests protein, lipase digests fats.' },
      { q: 'The part of the brain that controls balance and muscle coordination is the:',
        options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Hypothalamus'], correct: 1,
        exp: 'The cerebellum coordinates movement and balance; the medulla controls heartbeat and breathing.' },
      { q: 'The products of anaerobic respiration in yeast are:',
        options: ['Lactic acid', 'Ethanol and carbon dioxide', 'Water and carbon dioxide', 'Glucose'], correct: 1,
        exp: 'Yeast ferments glucose to ethanol and CO2 (the basis of brewing). Animals produce lactic acid instead.' },
      { q: 'Bile is important in digestion because it:',
        options: ['Digests protein', 'Emulsifies fats', 'Digests starch', 'Contains proteases'], correct: 1,
        exp: 'Bile emulsifies fats, increasing surface area for lipase. It contains no enzyme and is alkaline.' },
      { q: 'The sex of a human baby is determined by:',
        options: ['The mother', 'The father', 'Both equally', 'The environment'], correct: 1,
        exp: 'The mother always contributes an X chromosome; the father contributes either X (girl) or Y (boy).' }
    ],
    resources: [
      { cat: 'Video lesson', title: 'WAEC Biology — genetics & heredity revision', url: 'https://www.youtube.com/results?search_query=waec+biology+genetics+nigeria', note: 'Punnett squares, blood groups and sex determination.' },
      { cat: 'Structured course', title: 'Khan Academy — Biology', url: 'https://www.khanacademy.org/science/biology', note: 'Cells, genetics, ecology and human physiology.' },
      { cat: 'Past questions', title: 'Myschool — Biology past questions', url: 'https://myschool.ng/classroom', note: 'Objective and theory questions from past WASSCE/UTME papers.' },
      { cat: 'Reference', title: 'Wikipedia — Ecology', url: 'https://en.wikipedia.org/wiki/Ecology', note: 'Ecosystems, energy flow and nutrient cycles.' },
      { cat: 'Diagrams', title: 'PhET & free biology simulations', url: 'https://phet.colorado.edu/en/simulations/filter?subjects=biology', note: 'Natural selection and gene expression simulations.' }
    ]
  
};
