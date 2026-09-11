# deep_bsci4.py — Deep-lesson batch 4: JSS3 Basic Science (2 lessons).
# Rewrites the lesson 'content' fields at textbook depth. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT_1 = '''
            <h3>1. Why reproduction matters</h3>
            <p><b>Reproduction</b> is the biological process by which living things produce new individuals (<b>offspring</b>) of the same kind. It is one of the characteristics that separate living things from non-living things, and it is the reason life has continued on Earth for billions of years. Without reproduction, every species would disappear — become <b>extinct</b> — as soon as its present members died.</p>
            <ul>
              <li><b>Continuity of life</b> — parents die, but their kind lives on through their offspring.</li>
              <li><b>Replacement</b> — new individuals replace those lost to death, disease and predation.</li>
              <li><b>Variation</b> — offspring differ slightly from their parents and from one another, and this variation helps species survive changing conditions.</li>
            </ul>
            <div class="worked"><b>Think about it:</b> a single cassava plant can produce tubers that grow into dozens of new plants — but every one of those new plants is still cassava. Reproduction always produces offspring 'after their own kind': goats beget goats, maize begets maize, humans beget humans.</div>

            <h3>2. The two types of reproduction</h3>
            <p>There are two main types of reproduction: <b>asexual</b> and <b>sexual</b>.</p>
            <ul>
              <li><b>Asexual reproduction</b> — only ONE parent is involved. No sex cells join, and the offspring are genetically identical to the parent (clones). Examples: bacteria splitting in two (binary fission), yeast producing buds, cassava grown from stem cuttings, sweet potato from vines, yam from tubers, onion from bulbs, and new plants sprouting from runners.</li>
              <li><b>Sexual reproduction</b> — TWO parents (usually male and female) are involved. A male sex cell fuses with a female sex cell, so offspring inherit characteristics from BOTH parents and show variation. Examples: humans, goats, chickens, fish, maize — almost all animals and flowering plants.</li>
            </ul>
            <ul>
              <li><b>Number of parents:</b> asexual — one; sexual — two.</li>
              <li><b>Sex cells (gametes):</b> asexual — none needed; sexual — sperm and egg must fuse.</li>
              <li><b>Variation in offspring:</b> asexual — none, all identical; sexual — offspring vary.</li>
              <li><b>Speed:</b> asexual — fast and produces many offspring quickly; sexual — slower.</li>
            </ul>
            <div class="formula">EXAM LINE: farmers deliberately use asexual methods (cuttings, grafting, budding) because they are fast and the new plants keep exactly the good qualities of the parent — but because there is NO variation, one new disease can wipe out the entire farm.</div>

            <h3>3. Gametes — the special sex cells</h3>
            <p>The cells used in sexual reproduction are called <b>gametes</b> (sex cells). The male gamete is the <b>sperm</b>; the female gamete is the <b>egg</b> (ovum). Each gamete carries half the information needed to build a new person; only when they join is the instruction set complete.</p>
            <ul>
              <li><b>Sperm cell</b> — tiny and built for swimming: a <b>head</b> carrying the control nucleus, a <b>middle piece</b> packed with energy-releasing parts, and a long <b>tail</b> that whips to push it forward.</li>
              <li><b>Egg cell (ovum)</b> — one of the largest cells in the body: round, non-moving, and filled with a yolk-like food store that feeds the developing baby in its first days.</li>
              <li>A boy begins producing sperm at puberty and continues all his life; a girl is born with all her eggs already in her ovaries, and they mature one by one from puberty.</li>
            </ul>

            <h3>4. The male reproductive system</h3>
            <ul>
              <li><b>Testes (singular: testis)</b> — the pair of organs that produce <b>sperm</b> and the male hormone <b>testosterone</b>. They hang outside the body in the <b>scrotum</b> because sperm develop best at a temperature slightly below normal body temperature.</li>
              <li><b>Sperm duct (vas deferens)</b> — the tube that carries sperm away from the testes.</li>
              <li><b>Glands (seminal vesicle, prostate)</b> — add sugary fluids that feed the sperm and help them swim; sperm plus these fluids form <b>semen</b>.</li>
              <li><b>Urethra</b> — the tube running through the penis that carries semen (and, at other times, urine) out of the body.</li>
              <li><b>Penis</b> — the organ that delivers semen into the female reproductive system during mating.</li>
            </ul>
            <div class="worked"><b>Exam favourite:</b> 'Why are the testes located outside the body?' — because sperm production needs a temperature slightly lower than the body's internal temperature.</div>

            <h3>5. The female reproductive system</h3>
            <ul>
              <li><b>Ovaries</b> — the pair of organs that store and release <b>eggs</b> and produce the female hormones <b>oestrogen</b> and <b>progesterone</b>. Usually one egg ripens and is released each month — this is <b>ovulation</b>.</li>
              <li><b>Fallopian tube (oviduct)</b> — the tube that carries the released egg towards the uterus. <b>Fertilisation normally happens here.</b></li>
              <li><b>Uterus (womb)</b> — the strong, stretchy muscular bag where the baby grows during pregnancy.</li>
              <li><b>Cervix</b> — the ring of muscle at the lower end of the uterus that keeps the baby in place until birth.</li>
              <li><b>Vagina</b> — the muscular passage leading from the cervix to the outside; it receives semen and is the birth canal.</li>
            </ul>

            <h3>6. Fertilisation — how a new life begins</h3>
            <p><b>Fertilisation</b> is the fusion (joining) of the nucleus of a sperm cell with the nucleus of an egg cell. It normally takes place in the <b>fallopian tube</b>. The single cell formed by this fusion is called a <b>zygote</b> — the very first cell of a new human being.</p>
            <ul>
              <li>The zygote divides again and again as it travels down to the uterus, becoming a ball of cells called an <b>embryo</b>.</li>
              <li>The embryo <b>implants</b> (embeds itself) in the thick, blood-rich lining of the uterus, where it will be fed and protected.</li>
              <li>After about eight weeks, when the main body parts have formed, the developing baby is called a <b>foetus</b>.</li>
              <li>Birth normally occurs about <b>nine months (roughly 40 weeks)</b> after fertilisation — this period is called the <b>gestation period</b>.</li>
            </ul>
            <svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From fertilisation to birth: a sperm cell joins an egg cell to form a zygote, which becomes an embryo that implants in the uterus, then a foetus, and finally a baby after about nine months">
              <circle cx="40" cy="60" r="16" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
              <text x="40" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#9d174d">Egg</text>
              <circle cx="86" cy="60" r="7" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
              <path d="M93 60 Q104 52 112 62" stroke="#2563eb" stroke-width="2" fill="none"/>
              <text x="92" y="94" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">Sperm</text>
              <path d="M118 60 L150 60" stroke="#64748b" stroke-width="3"/>
              <path d="M145 55 L152 60 L145 65" fill="#64748b"/>
              <circle cx="180" cy="60" r="18" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
              <text x="180" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#3730a3">Zygote</text>
              <path d="M202 60 L234 60" stroke="#64748b" stroke-width="3"/>
              <path d="M229 55 L236 60 L229 65" fill="#64748b"/>
              <rect x="240" y="42" width="76" height="36" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
              <text x="278" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#065f46">Embryo</text>
              <path d="M320 60 L352 60" stroke="#64748b" stroke-width="3"/>
              <path d="M347 55 L354 60 L347 65" fill="#64748b"/>
              <rect x="358" y="42" width="76" height="36" rx="10" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
              <text x="396" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#9a3412">Foetus</text>
              <text x="180" y="108" text-anchor="middle" font-size="10" fill="#475569">fertilisation</text>
              <text x="278" y="108" text-anchor="middle" font-size="10" fill="#475569">implants in uterus</text>
              <text x="396" y="108" text-anchor="middle" font-size="10" fill="#475569">grows ~9 months</text>
              <text x="230" y="134" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Fertilisation to birth: egg + sperm, zygote, embryo, foetus, baby</text>
            </svg>
            <div class="formula">EXAM LINE: fertilisation takes place in the FALLOPIAN TUBE, but the baby DEVELOPS in the UTERUS. Mixing these two up is the single most common mistake in this topic.</div>

            <h3>7. Pregnancy and the placenta</h3>
            <p>The <b>placenta</b> is a special disc of tissue that develops between the mother and the baby inside the uterus. The baby is joined to it by the <b>umbilical cord</b>.</p>
            <ul>
              <li>The placenta passes <b>food and oxygen</b> from the mother's blood to the baby, and carries away the baby's <b>waste products</b> (such as carbon dioxide).</li>
              <li>The mother's blood and the baby's blood never actually mix — substances pass across the placenta wall.</li>
              <li>The <b>amniotic fluid</b> surrounds the baby like a shock absorber, cushioning it against knocks.</li>
              <li><b>Antenatal care</b> — regular hospital check-ups, good food, iron and folate tablets, and tetanus vaccination — protects both mother and baby. Harmful substances (alcohol, tobacco, some drugs) cross the placenta and can damage the developing baby, which is why pregnant women must never take medicine without a doctor's advice.</li>
            </ul>
            <div class="worked"><b>Twins:</b> <b>identical twins</b> come from ONE fertilised egg that splits in two — they are the same sex and look alike. <b>Fratern (non-identical) twins</b> come from TWO separate eggs fertilised by two separate sperms — they can be different sexes and look like ordinary brothers and sisters.</div>

            <h3>8. Growth and development</h3>
            <ul>
              <li><b>Growth</b> is a permanent increase in size, mass and height. It can be measured — with a tape, a weighing scale, a stadiometer — so growth is <b>quantitative</b>.</li>
              <li><b>Development</b> is the increase in complexity and ability: a baby who could only cry learns to smile, crawl, walk and talk. Development is <b>qualitative</b>.</li>
              <li>Stages of human growth: <b>infancy</b> (0-2 years, fastest growth), <b>childhood</b>, <b>adolescence</b> (the teenage years, when puberty happens), <b>adulthood</b>, and <b>old age</b>.</li>
            </ul>
            <ul>
              <li><b>Food</b> — proteins build body tissues; vitamins and minerals protect and regulate; a poorly fed child grows slowly and may suffer stunting.</li>
              <li><b>Heredity (genes)</b> — children inherit their parents' height potential and body build.</li>
              <li><b>Hormones</b> — the growth hormone from the pituitary gland drives growth; sex hormones drive the changes of puberty.</li>
              <li><b>Health</b> — repeated infections and worm infestations slow growth; <b>rest, sleep and exercise</b> complete the picture.</li>
            </ul>

            <h3>9. Puberty — the body changes into an adult</h3>
            <p><b>Puberty</b> is the stage during adolescence when the body changes from that of a child into that of an adult and becomes capable of reproduction. The changes are triggered by <b>hormones</b> — testosterone in boys, oestrogen and progesterone in girls.</p>
            <ul>
              <li><b>In boys:</b> voice deepens (the voice 'breaks'), hair grows on the face, chest and pubic region, shoulders broaden, muscles grow, the testes and penis enlarge, and 'wet dreams' may occur.</li>
              <li><b>In girls:</b> breasts develop, hips widen, hair grows in the pubic region and under the arms, and <b>menstruation begins</b> (the first period is called <b>menarche</b>) — the sign that the body can now support a pregnancy.</li>
              <li><b>In both:</b> a rapid growth spurt, oily skin and pimples (acne), more sweating and body odour, mood swings and new emotional feelings.</li>
            </ul>
            <div class="formula">TIP: puberty is completely normal and healthy — nobody 'catches' it and nobody skips it. Everybody passes through it at their own time: some start at 9, others at 14, and both are normal. Good hygiene — bathing twice daily, clean clothes, deodorant if needed — handles the sweat and odour.</div>

            <h3>10. Menstruation and menstrual hygiene</h3>
            <p><b>Menstruation</b> is the monthly flow of blood and tissue from the uterus through the vagina. Each month the uterus lining thickens to receive a fertilised egg; when no egg is fertilised, the lining breaks down and flows out. The cycle repeats about every <b>28 days</b> (anything from 21 to 35 days can be normal).</p>
            <ul>
              <li>Menstruation is a sign of good health and normal development — it is NOT a disease, a curse or a punishment, and it does not mean a girl is dirty.</li>
              <li><b>Menstrual hygiene:</b> change the sanitary pad (or clean cloth) regularly — at least every 4-6 hours; bathe daily; wash and dry reusable cloths in the sun; wrap and dispose of used materials properly; wash hands before and after.</li>
              <li>Light cramps are common; rest, warm drinks and gentle movement help. Very heavy or very painful periods should be reported to a parent or nurse.</li>
            </ul>

            <h3>11. STIs and HIV/AIDS</h3>
            <p><b>Sexually transmitted infections (STIs)</b> are infections passed mainly through sexual contact. Examples include <b>gonorrhoea</b>, <b>syphilis</b> and <b>HIV</b>. <b>HIV</b> (Human Immunodeficiency Virus) attacks the body's immune system — the soldiers that fight disease. When the immune system is badly damaged, the stage is called <b>AIDS</b> (Acquired Immune Deficiency Syndrome), and the person falls ill from infections a healthy body would easily defeat.</p>
            <ul>
              <li><b>HOW HIV IS spread:</b> unprotected sex with an infected person; sharing needles, blades or barbing clippers with infected blood on them; infected blood transfusion; from an infected mother to her baby during pregnancy, birth or breastfeeding.</li>
              <li><b>HOW HIV is NOT spread:</b> hugging, shaking hands, sharing food or utensils, mosquito bites, sweat or tears, using the same toilet or swimming pool, or sitting next to an infected person.</li>
              <li><b>Prevention:</b> abstinence (the surest way for young people), being faithful to one uninfected partner, correct condom use, sterilised needles and blades, screened blood for transfusion, and drugs for infected pregnant mothers to protect their babies.</li>
              <li>There is no cure yet, but <b>antiretroviral (ARV) drugs</b> keep infected people healthy for decades — and people living with HIV deserve kindness and support, not stigma.</li>
            </ul>
            <div class="formula">TRAP: exam questions love 'Which of the following does NOT transmit HIV?' — mosquito bites, sharing food and hugging NEVER transmit HIV. Learn the 'how it is NOT spread' list as firmly as the 'how it IS spread' list.</div>

            <h3>12. Drug abuse — what it means, and which drugs</h3>
            <p>A <b>drug</b> is any substance that changes the way the body or mind works. Medicines taken correctly, on a doctor's or pharmacist's advice, treat illness. <b>Drug abuse</b> is taking drugs without prescription or medical need, taking another person's prescription, taking more than the correct dose, or taking drugs to get 'high'. Repeated abuse leads to <b>addiction</b> (dependence) — the body begins to NEED the drug, and stopping it causes painful <b>withdrawal</b> symptoms.</p>
            <ul>
              <li><b>Alcohol</b> — beer, spirits and local brews; a depressant that damages the liver and brain.</li>
              <li><b>Tobacco</b> — cigarettes, shisha; contains nicotine (addictive) and tar (causes cancer).</li>
              <li><b>Cannabis</b> (Indian hemp, 'weed', 'igbo') — damages memory and motivation, and can trigger mental illness in young users.</li>
              <li><b>Tramadol and codeine cough syrup</b> — painkillers that are useful medicines in hospital hands but dangerously addictive when abused; codeine syrup is banned for sale without prescription in Nigeria.</li>
              <li><b>Inhalants</b> — sniffing glue, petrol, correction fluid or aerosols; these damage the brain within minutes.</li>
              <li><b>Stimulants and 'hard drugs'</b> — cocaine, heroin, methamphetamine ('mkpuru mmiri'); illegal, extremely addictive, and destructive to body and mind.</li>
            </ul>

            <h3>13. The effects of drug abuse</h3>
            <ul>
              <li><b>On health:</b> liver damage (alcohol), lung cancer and heart disease (tobacco), brain and memory damage, kidney failure, infections from shared needles (including HIV), infertility, mental illness, and death from overdose.</li>
              <li><b>On the adolescent brain:</b> the teenage brain is still developing, so drugs taken now cause MORE damage than the same drugs taken by an adult — and addiction sets in faster.</li>
              <li><b>On behaviour:</b> violence, stealing to buy drugs, accidents, unsafe sexual behaviour, dropping out of school.</li>
              <li><b>On the family:</b> fights, broken trust, money drained from school fees and food, shame and heartbreak.</li>
              <li><b>On society:</b> crime, road accidents caused by drunk driving, a less productive workforce, and the huge cost of hospitals, rehabilitation centres and law enforcement. The <b>NDLEA</b> is the Nigerian agency that fights drug trafficking and abuse.</li>
            </ul>

            <h3>14. Saying NO — and knowing where to get help</h3>
            <p>Most young people who start drugs do so because of <b>peer pressure</b> — the push from friends to 'prove' yourself. Other causes are curiosity, stress at home or school, copying celebrities, broken homes, and simple ignorance of the danger. Knowing WHY drugs win converts makes it easier to refuse.</p>
            <ul>
              <li><b>Know the facts</b> — a person who knows what drugs really do is far harder to trick.</li>
              <li><b>Choose friends wisely</b> — walk with people who respect your decisions; 'show me your friends and I will show you your future'.</li>
              <li><b>Practise saying no</b> — 'No, thanks', 'I'm not into that', or simply walking away. A real friend accepts 'no'; anyone who forces you is not a friend.</li>
              <li><b>Find healthy highs</b> — sport, music, art, reading and faith give real joy without destroying the body.</li>
              <li><b>Tell a trusted adult</b> — a parent, teacher, counsellor or religious leader. Anyone already caught in addiction should seek a hospital or rehabilitation centre — recovery is possible, and asking for help is courage, not weakness.</li>
            </ul>
            <div class="worked"><b>Role-play it:</b> a friend offers you a pill at a party: 'Just try it — one pill won't hurt, don't be a small boy.' Strong reply: 'No thanks. I've seen what that does to people. If you want to stay here, fine — I'm leaving.' Then LEAVE. Rehearsing a reply in your head makes it far easier to say out loud.</div>

            <h3>15. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define reproduction. <i>Ans: the biological process by which living things produce new individuals (offspring) of the same kind.</i></li>
              <li><b>Q2.</b> Give two differences between sexual and asexual reproduction. <i>Ans: asexual needs one parent and gives identical offspring; sexual needs two parents, involves gametes fusing, and gives varied offspring.</i></li>
              <li><b>Q3.</b> Name the organ that produces sperm and the hormone it makes. <i>Ans: the testes; testosterone.</i></li>
              <li><b>Q4.</b> Where does fertilisation normally take place in humans, and what is formed? <i>Ans: in the fallopian tube; a zygote.</i></li>
              <li><b>Q5.</b> State two functions of the placenta. <i>Ans: passes food and oxygen to the baby; removes the baby's waste (also: produces hormones, acts as a barrier against some harmful substances).</i></li>
              <li><b>Q6.</b> Give one difference each between growth and development. <i>Ans: growth is a measurable increase in size; development is an increase in complexity and ability.</i></li>
              <li><b>Q7.</b> Name three changes that occur in girls at puberty. <i>Ans: breasts develop, hips widen, menstruation begins (also: pubic hair, growth spurt).</i></li>
              <li><b>Q8.</b> State two ways HIV IS transmitted and two ways it is NOT. <i>Ans: IS — unprotected sex, sharing infected needles/blades (also: infected blood transfusion, mother to child). NOT — hugging, mosquito bites (also: sharing food, same toilet).</i></li>
              <li><b>Q9.</b> Define drug abuse. <i>Ans: taking drugs without medical need or prescription, or taking more than the correct dose, including taking drugs to get high.</i></li>
              <li><b>Q10.</b> State three effects of drug abuse on health. <i>Ans: liver damage, lung cancer, brain damage (also: kidney failure, mental illness, overdose death).</i></li>
              <li><b>Q11.</b> Name the Nigerian agency that fights drug abuse. <i>Ans: the NDLEA (National Drug Law Enforcement Agency).</i></li>
              <li><b>Q12.</b> Give three ways of resisting peer pressure towards drugs. <i>Ans: know the facts, choose friends wisely, practise saying no and walking away (also: healthy hobbies, telling a trusted adult).</i></li>
            </ul>
            <div class="formula">SUMMARY: Reproduction keeps species alive — asexually (one parent, identical offspring) or sexually (two parents, varied offspring). In humans, sperm and egg fuse in the fallopian tube to form a zygote, which develops in the uterus over about nine months. Puberty prepares the body for adult life, and hygiene plus correct information keep it safe. STIs and HIV demand prevention and compassion — never stigma. Drugs used wrongly destroy health, family and future: knowing the facts and saying no early is the strongest medicine of all.</div>

'''

CONTENT_2 = '''
            <h3>1. What is light? Sources of light</h3>
            <p><b>Light</b> is a form of energy that travels in waves and makes vision possible — we see objects because light from them enters our eyes. Light from the Sun reaches Earth in about 8 minutes, travelling at about <b>300,000 kilometres per second</b>, the fastest speed in the universe.</p>
            <ul>
              <li><b>Luminous objects</b> give out their own light: the Sun, stars, a burning candle, a lamp bulb, fireflies, a hot piece of iron.</li>
              <li><b>Non-luminous objects</b> do not give out light; we see them only because they REFLECT light into our eyes: the Moon, a book, a table, your friend's face. (The Moon 'shines' with borrowed sunlight.)</li>
              <li>Sources can be <b>natural</b> (Sun, stars, lightning, fireflies) or <b>artificial</b> (candles, bulbs, torches, phone screens).</li>
            </ul>
            <div class="worked"><b>Think about it:</b> in a pitch-dark room you cannot see even a white sheet of paper — proof that we never 'send out' sight; we only receive light that bounces off objects into our eyes.</div>

            <h3>2. Light travels in straight lines — shadows and eclipses</h3>
            <p>Light travels in <b>straight lines</b> (rectilinear propagation). This single fact explains shadows, pinhole cameras and eclipses.</p>
            <ul>
              <li><b>Shadows</b> form when an opaque object blocks light: the dark region behind it is the shadow. Shadows are longest in the early morning and late evening (low Sun) and shortest at midday (high Sun).</li>
              <li>A <b>solar eclipse</b> occurs when the MOON moves between the Sun and the Earth and its shadow falls on part of the Earth — the Sun appears covered.</li>
              <li>A <b>lunar eclipse</b> occurs when the EARTH moves between the Sun and the Moon and the Moon passes into the Earth's shadow.</li>
              <li>A <b>pinhole camera</b> works on the same principle: light from the top of an object passes through the pinhole to the bottom of the screen, so the image formed is <b>real and upside-down (inverted)</b>.</li>
            </ul>
            <div class="formula">EXAM LINE: solar eclipse — MOON in the middle (Moon blocks Sun); lunar eclipse — EARTH in the middle (Earth's shadow on Moon). 'Which body is in the middle?' answers every eclipse question.</div>

            <h3>3. Reflection of light</h3>
            <p><b>Reflection</b> is the bouncing back of light when it hits a surface. A smooth, polished surface (a mirror, still water, shiny metal) gives <b>regular reflection</b> — a clear image. A rough surface (paper, a wall) gives <b>diffuse reflection</b> — light scatters in all directions, which is why a wall lights a room but shows no image.</p>
            <ul>
              <li><b>First law:</b> the incident ray, the reflected ray and the normal (the perpendicular line at the point of hitting) all lie in the same plane.</li>
              <li><b>Second law:</b> the <b>angle of incidence (i)</b> equals the <b>angle of reflection (r)</b>. Angles are ALWAYS measured from the NORMAL — never from the mirror surface.</li>
            </ul>
            <svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reflection of light: an incident ray strikes a mirror surface and reflects away, with the angle of incidence equal to the angle of reflection, both measured from the normal drawn perpendicular to the mirror">
              <rect x="30" y="150" width="400" height="12" fill="#94a3b8"/>
              <text x="230" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Mirror surface</text>
              <path d="M230 150 L230 40" stroke="#334155" stroke-width="1.5" stroke-dasharray="6 5"/>
              <text x="243" y="50" font-size="12" font-weight="700" fill="#334155">Normal</text>
              <path d="M110 60 L230 150" stroke="#d97706" stroke-width="2.5"/>
              <path d="M230 150 L350 60" stroke="#059669" stroke-width="2.5"/>
              <text x="95" y="95" font-size="12" font-weight="700" fill="#b45309">Incident ray</text>
              <text x="308" y="95" font-size="12" font-weight="700" fill="#047857">Reflected ray</text>
              <text x="205" y="122" font-size="13" font-weight="700" fill="#334155">i</text>
              <text x="248" y="122" font-size="13" font-weight="700" fill="#334155">r</text>
              <text x="230" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Angle i = Angle r (measured from the normal)</text>
            </svg>
            <div class="worked"><b>Worked example:</b> a ray strikes a mirror making 30 deg with the mirror SURFACE. The angle of incidence is measured from the NORMAL, so i = 90 - 30 = 60 deg, and the angle of reflection r = 60 deg too. The trap answer (30 deg) is what careless students write.</div>

            <h3>4. Mirrors and their uses</h3>
            <p>An image formed by a <b>plane (flat) mirror</b> has five properties to memorise: it is <b>virtual</b> (cannot be caught on a screen), <b>upright</b> (same way up), the <b>same size</b> as the object, the <b>same distance behind</b> the mirror as the object is in front, and <b>laterally inverted</b> (left and right swapped — that is why AMBULANCE is written mirrored on the front of ambulances, so drivers see it correctly in their rear-view mirrors).</p>
            <ul>
              <li><b>Plane mirrors</b> — dressing mirrors, rear-view mirrors, periscopes (seeing over walls or out of submarines) and kaleidoscopes.</li>
              <li><b>Convex (curved-out) mirrors</b> — give a wide field of view: side mirrors on cars ('objects in mirror are closer than they appear') and security mirrors in shops.</li>
              <li><b>Concave (curved-in) mirrors</b> — magnify when close: dentists' mirrors, shaving/make-up mirrors; they also CONCENTRATE light and heat — torch reflectors, car headlamps and solar cookers.</li>
            </ul>

            <h3>5. Refraction of light</h3>
            <p><b>Refraction</b> is the bending of light as it passes from one medium into another of different density (for example, air to water or air to glass). Light bends because its <b>speed changes</b>: it slows down in denser media.</p>
            <ul>
              <li>A stick dipped in water looks <b>bent</b> at the water surface.</li>
              <li>A swimming pool looks <b>shallower</b> than it really is — light from the bottom bends away as it leaves the water, so the bottom appears higher. NEVER dive into water you have not measured.</li>
              <li>A coin in an empty bowl 'rises into view' when water is poured in — the bent rays reach your eye over the rim.</li>
              <li>Stars <b>twinkle</b> because starlight keeps refracting through moving layers of air.</li>
              <li><b>Mirages</b> on hot tar roads — the 'pool of water' ahead is actually refracted sky, caused by hot air layers near the ground.</li>
            </ul>

            <h3>6. Lenses and optical instruments</h3>
            <ul>
              <li>A <b>convex (converging) lens</b> is thicker in the middle. It bends light rays together to a <b>focal point</b> and can magnify — a magnifying glass, and the lens of the human eye, camera, microscope and telescope.</li>
              <li>A <b>concave (diverging) lens</b> is thinner in the middle and spreads rays out — used in spectacles for short-sighted people.</li>
              <li><b>Long-sightedness</b> (seeing distant objects clearly, near ones blurred) is corrected with CONVEX lenses; <b>short-sightedness</b> (near clear, distant blurred) with CONCAVE lenses.</li>
              <li>The <b>eye</b> itself is a camera: the lens focuses light onto the <b>retina</b>, where an inverted image forms and the optic nerve sends signals to the brain.</li>
            </ul>
            <div class="formula">EXAM LINE: conVex = conVerging (thick middle, magnifies, fixes long-sight). ConCave = diverging (thin middle, spreads rays, fixes short-sight).</div>

            <h3>7. Colours and dispersion</h3>
            <p><b>Dispersion</b> is the splitting of white light into its component colours. A glass <b>prism</b> bends each colour by a slightly different amount, spreading white sunlight into the seven-colour <b>spectrum</b>: <b>Red, Orange, Yellow, Green, Blue, Indigo, Violet</b> — remember <b>ROY G BIV</b>. A <b>rainbow</b> is nature's prism: raindrops split sunlight the same way.</p>
            <ul>
              <li>White light is a MIXTURE of all the colours of the spectrum.</li>
              <li>A red shirt looks red because it <b>reflects red</b> and absorbs all other colours. A black object absorbs all colours; a white object reflects all colours (which is why white clothes are cooler in the sun).</li>
              <li>Under green light, a red shirt looks black — there is no red light for it to reflect.</li>
            </ul>

            <h3>8. Light energy in everyday life</h3>
            <ul>
              <li><b>Vision</b> — light makes sight possible.</li>
              <li><b>Photosynthesis</b> — plants capture light energy to manufacture food; every food chain starts with light.</li>
              <li><b>Drying and heating</b> — sun-drying clothes, fish and grain; solar water heaters.</li>
              <li><b>Solar panels</b> turn light straight into electricity — increasingly common on Nigerian homes, schools and street lights, and vital where the grid is unreliable.</li>
              <li><b>Solar cookers</b> use concave reflectors to concentrate sunlight for cooking without gas or firewood.</li>
              <li><b>Fibre optics</b> carry phone and internet signals as pulses of light; medical endoscopes use them to look inside the body.</li>
            </ul>

            <h3>9. Sound is vibration</h3>
            <p><b>Sound</b> is produced by <b>vibrating bodies</b>. Touch a sounding drum and you feel the skin tremble; pluck a guitar string and watch it blur; speak with fingers on your throat and feel your vocal cords vibrate. Stop the vibration and the sound dies instantly.</p>
            <ul>
              <li>Sound travels as a <b>wave</b> through a <b>material medium</b> — solids, liquids and gases — as particles bump into their neighbours.</li>
              <li>Sound travels <b>fastest in solids</b> (particles are closest), slower in liquids, and slowest in gases.</li>
              <li>Sound <b>cannot travel through a vacuum</b>: in the classic bell-jar experiment, a ringing bell inside a jar becomes silent as the air is pumped out. That is why astronauts on the Moon must use radios — there is no air between them to carry sound.</li>
            </ul>

            <h3>10. Speed of sound and echoes</h3>
            <ul>
              <li>The speed of sound in air is about <b>330-340 m/s</b> — far slower than light (300,000 km/s). That is why you SEE lightning before you HEAR thunder, even though both start together. Count the seconds between flash and bang: every 3 seconds is roughly 1 kilometre away.</li>
              <li>An <b>echo</b> is the reflection of sound off a hard surface back to the listener. To hear a clear echo, the reflecting surface must be at least about 17 m away.</li>
              <li><b>Uses of echoes:</b> <b>bats</b> navigate and hunt by ultrasound echoes; <b>sonar/echo-sounding</b> measures sea depth and finds fish and shipwrecks; <b>ultrasound scans</b> produce images of a baby in the womb; doctors use stethoscopes and ultrasound to examine the body.</li>
              <li>Large halls are lined with soft, porous materials (curtains, carpets, acoustic panels) to ABSORB unwanted echoes and keep speech clear — the science is called <b>acoustics</b>.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> a boy claps and hears the echo from a cliff 2.0 seconds later. The sound travelled to the cliff AND back, so total distance = 340 m/s x 2 s = 680 m, and the cliff is HALF that = 340 m away. Echo problems ALWAYS divide the total distance by two.</div>

            <h3>11. Loudness, pitch and quality</h3>
            <ul>
              <li><b>Loudness</b> depends on <b>amplitude</b> — the size of the vibration. Bigger amplitude = louder sound. Loudness is measured in <b>decibels (dB)</b>: a whisper is about 30 dB, normal talk about 60 dB, and sounds above about 90 dB can damage hearing over time.</li>
              <li><b>Pitch</b> depends on <b>frequency</b> — how many vibrations per second, measured in <b>hertz (Hz)</b>. High frequency = high pitch (whistle, flute, a child's voice); low frequency = low pitch (drum, a deep voice).</li>
              <li><b>Quality (timbre)</b> is what lets you tell a guitar from a flute playing the same note — their wave shapes differ.</li>
              <li><b>Noise pollution</b> — unwanted, harmful sound from generators, machines, loudspeakers and traffic — causes hearing loss, stress, high blood pressure and poor concentration. Controls: lower volumes, ear protection, machine maintenance, planting trees and setting generator houses away from rooms.</li>
            </ul>

            <h3>12. The human ear and ear care</h3>
            <ul>
              <li><b>Outer ear</b> — the <b>pinna</b> collects sound and funnels it through the <b>ear canal</b> to the <b>eardrum</b>.</li>
              <li><b>Middle ear</b> — the eardrum vibrates and passes the vibrations through three tiny bones (the <b>ossicles</b>: hammer, anvil and stirrup — the smallest bones in the body) which amplify them.</li>
              <li><b>Inner ear</b> — the <b>cochlea</b> (a snail-shaped, fluid-filled tube) converts vibrations into nerve signals that the <b>auditory nerve</b> carries to the brain, where they are understood as sound. The inner ear also controls <b>balance</b>.</li>
              <li><b>Ear care:</b> never poke sharp objects (pins, matches, keys) into the ear — they can burst the eardrum; clean only the outer ear with a soft cloth; keep water out; treat throat and ear infections early; turn down personal music volumes.</li>
            </ul>

            <h3>13. Static electricity</h3>
            <p><b>Static electricity</b> is a build-up of electric charge on the surface of an object, usually produced by <b>friction</b>. Rubbing a plastic comb or biro on dry hair transfers tiny particles of charge called <b>electrons</b>.</p>
            <ul>
              <li>There are two kinds of charge: <b>positive (+)</b> and <b>negative (-)</b>. <b>Like charges repel; unlike charges attract.</b></li>
              <li>A rubbed comb attracts small pieces of paper; a rubbed balloon sticks to a wall; your hair stands on end when you pull off a nylon jersey — all static attraction.</li>
              <li><b>Lightning</b> is a giant static spark: rubbing between cloud layers and air builds enormous charge until it discharges to the ground. <b>Lightning conductors</b> (metal rods on tall buildings) carry the discharge safely to earth.</li>
              <li>Petrol tankers drag a metal chain to earth: friction with the road builds charge on the tank, and a static spark near petrol vapour could cause an explosion.</li>
            </ul>

            <h3>14. Current electricity — cells, circuits, conductors and insulators</h3>
            <p><b>Current electricity</b> is the steady flow of electric charge through a wire. A <b>cell</b> converts chemical energy into electrical energy and pushes the current; two or more cells joined together form a <b>battery</b>. A complete path for current is called a <b>circuit</b>; a <b>switch</b> opens (breaks) or closes (completes) the circuit.</p>
            <ul>
              <li><b>Conductors</b> let current flow easily — all metals (copper, aluminium, iron), carbon and impure water. Copper is the standard for wiring.</li>
              <li><b>Insulators</b> do NOT allow current to flow — plastic, rubber, dry wood, glass, dry air. Wires are wrapped in plastic or rubber so we can touch them safely; electricians use rubber gloves and tools with plastic handles.</li>
              <li>Everyday energy changes: a bulb turns electrical energy into light (and heat); a fan or blender into movement; a heater or pressing iron into heat; a radio into sound.</li>
            </ul>
            <svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A simple series circuit: one cell, one switch and one bulb joined in a single loop of wire, so the same current flows through every part of the circuit">
              <path d="M60 40 L200 40" stroke="#334155" stroke-width="2.5"/>
              <path d="M260 40 L400 40" stroke="#334155" stroke-width="2.5"/>
              <path d="M400 40 L400 80" stroke="#334155" stroke-width="2.5"/>
              <path d="M400 115 L400 160" stroke="#334155" stroke-width="2.5"/>
              <path d="M400 160 L255 160" stroke="#334155" stroke-width="2.5"/>
              <path d="M205 160 L60 160" stroke="#334155" stroke-width="2.5"/>
              <path d="M60 160 L60 40" stroke="#334155" stroke-width="2.5"/>
              <circle cx="230" cy="40" r="15" fill="#fef9c3" stroke="#d97706" stroke-width="2.5"/>
              <path d="M221 31 L239 49 M239 31 L221 49" stroke="#d97706" stroke-width="2"/>
              <text x="230" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Bulb</text>
              <circle cx="400" cy="80" r="4" fill="#334155"/>
              <circle cx="400" cy="115" r="4" fill="#334155"/>
              <path d="M400 80 L378 108" stroke="#334155" stroke-width="2.5"/>
              <text x="430" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Switch</text>
              <path d="M220 138 L220 182" stroke="#334155" stroke-width="3"/>
              <path d="M238 148 L238 172" stroke="#334155" stroke-width="3"/>
              <text x="229" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Cell</text>
              <text x="221" y="196" text-anchor="middle" font-size="11" fill="#64748b">long line = +, short line = -</text>
            </svg>

            <h3>15. Series and parallel circuits</h3>
            <ul>
              <li><b>Series circuit</b> — components are joined end to end in ONE path. The same current flows through every part; if one bulb blows or is removed, the circuit breaks and ALL the others go off (old-style Christmas-tree lights). Adding more bulbs makes each one dimmer.</li>
              <li><b>Parallel circuit</b> — components are joined on separate branches. Each branch gets the full push of the cell, so bulbs shine at normal brightness; if one bulb blows, the OTHERS STAY ON — this is how homes are wired, so switching off one lamp never kills the others.</li>
              <li><b>Cells in series</b> add their push (two 1.5 V cells give 3 V); the symbol for a battery is two or more cell symbols joined long-line to short-line.</li>
            </ul>
            <div class="formula">EXAM LINE: 'If one bulb goes off and the rest stay lit, the circuit is PARALLEL; if everything dies, it is SERIES.' Homes, schools and street lights are wired in parallel.</div>

            <h3>16. Electrical safety</h3>
            <ul>
              <li>Never touch switches or sockets with <b>wet hands</b> — water conducts electricity into the body.</li>
              <li>Never insert fingers, pins or blades into sockets; use socket covers where small children play.</li>
              <li>Report <b>frayed, naked wires</b> and replace them — tape over them only as a temporary fix. Sparks from damaged wires cause fires.</li>
              <li>Do not overload a single socket with many appliances ('I better pass my neighbour' clusters are a fire risk); do not run wires under carpets.</li>
              <li><b>Fuses and circuit breakers</b> cut the current if it becomes dangerously large; <b>earthing</b> gives stray current a safe path into the ground.</li>
              <li>Keep appliances away from water; switch off and unplug before cleaning; never fly kites near power lines; never touch a fallen power cable — report it to the electricity company at once.</li>
              <li>If someone is being electrocuted, do NOT grab them — switch off the supply first, or push them clear with a dry wooden pole, then call for help.</li>
            </ul>

            <h3>17. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> What is a luminous object? Give two examples. <i>Ans: an object that gives out its own light — the Sun, a burning candle (also: bulb, firefly).</i></li>
              <li><b>Q2.</b> State the two laws of reflection. <i>Ans: (1) the incident ray, reflected ray and normal lie in the same plane; (2) the angle of incidence equals the angle of reflection.</i></li>
              <li><b>Q3.</b> A ray hits a mirror at 40 deg to the normal. What is the angle of reflection? <i>Ans: 40 deg — i = r, both measured from the normal.</i></li>
              <li><b>Q4.</b> Give three properties of an image in a plane mirror. <i>Ans: virtual, upright, same size (also: same distance behind the mirror, laterally inverted).</i></li>
              <li><b>Q5.</b> Why does a swimming pool look shallower than it really is? <i>Ans: light from the bottom refracts (bends) as it leaves the water, making the bottom appear higher than it is.</i></li>
              <li><b>Q6.</b> Name the seven colours of the spectrum in order. <i>Ans: red, orange, yellow, green, blue, indigo, violet (ROY G BIV).</i></li>
              <li><b>Q7.</b> Why can two astronauts on the Moon not hear each other speak directly? <i>Ans: sound needs a material medium and the Moon has no air — a vacuum cannot carry sound.</i></li>
              <li><b>Q8.</b> What is an echo? Give two uses. <i>Ans: the reflection of sound off a hard surface; uses: bats navigating, sonar/echo-sounding for depth and fish, ultrasound scans.</i></li>
              <li><b>Q9.</b> Distinguish between loudness and pitch. <i>Ans: loudness depends on amplitude (bigger vibration = louder); pitch depends on frequency (more vibrations per second = higher pitch).</i></li>
              <li><b>Q10.</b> Why does a rubbed plastic comb attract small pieces of paper? <i>Ans: friction charges the comb with static electricity, and the charged comb attracts the light, uncharged paper bits.</i></li>
              <li><b>Q11.</b> Name three conductors and three insulators. <i>Ans: conductors — copper, aluminium, iron (also: carbon, impure water); insulators — plastic, rubber, dry wood (also: glass, dry air).</i></li>
              <li><b>Q12.</b> Give one difference between series and parallel circuits. <i>Ans: in series there is one path and one blown bulb kills all; in parallel there are separate branches and the other bulbs stay lit.</i></li>
            </ul>
            <div class="formula">SUMMARY: Light travels in straight lines at about 300,000 km/s; it reflects (angle i = angle r) and refracts (bends between media), which explains mirrors, lenses, rainbows and mirages. Sound is produced by vibration, needs a medium, travels at about 340 m/s in air, and echoes reveal its reflecting nature. Static charge builds by friction; current electricity flows through conductors in circuits wired in series or parallel — and safe use of electricity protects life and property.</div>

'''

LESSONS = [
    ('Reproduction, Growth & Drug Abuse', CONTENT_1),
    ('Light, Sound & Basic Electricity', CONTENT_2),
]

for title, content in LESSONS:
    assert '`' not in content, 'backtick found in ' + title
    assert '${' not in content, 'dollar-brace found in ' + title
    pat = re.compile(r"\n(\s*)title: '" + re.escape(title) + r"',")
    hits = list(pat.finditer(s))
    assert len(hits) == 1, (title, len(hits))
    k = hits[0].end()
    ci = s.index('content: `', k) + 10
    ce = s.index('`', ci)
    s = s[:ci] + content + s[ce:]
    print(title, '->', len(content), 'chars | svg:', '<svg' in content)

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
