#!/usr/bin/env python3
"""Insert Literature in English SS2 + SS3 (3 topics each) into index.html CURRICULUM. RUN ONCE."""
import sys

P = 'index.html'
s = open(P, encoding='utf-8').read()

assert "title: 'Prose Fiction: Elements & Analysis'" not in s, 'already applied — do not re-run'

T1 = """      SS2: [
        {
          title: 'Prose Fiction: Elements & Analysis',
          tags: ['Prose', 'Plot', 'Characterisation', 'Theme'],
          summary: 'The building blocks of novels and short stories — plot, character, setting, theme and point of view — and how examiners expect you to analyse them.',
          content: `
            <h3>1. What prose fiction is</h3>
            <p><b>Prose fiction</b> is imagined narrative written in ordinary language (not verse): novels, novellas and short stories. Unlike drama it is <b>read privately</b>, and unlike poetry it runs in sentences and paragraphs. WAEC tests prose through set texts and unseen passages, asking how the writer's choices create meaning.</p>

            <h3>2. Plot: the architecture of events</h3>
            <ul>
              <li><b>Exposition:</b> the opening that introduces characters, setting and situation.</li>
              <li><b>Rising action:</b> complications build tension toward the peak.</li>
              <li><b>Climax:</b> the turning point of greatest tension.</li>
              <li><b>Falling action and resolution (denouement):</b> events unwind and questions settle.</li>
            </ul>
            <p>Also know: <b>chronological vs non-linear</b> order (flashback/flash-forward), <b>subplot</b>, and <b>suspense vs surprise</b>. In Things Fall Apart, Okonkwo's killing of Ikemefuna is a climax that turns his fortunes downward.</p>

            <h3>3. Character and characterisation</h3>
            <ul>
              <li><b>Round vs flat:</b> round characters are complex and change (Okonkwo); flat characters stay fixed (most servants and messengers).</li>
              <li><b>Dynamic vs static:</b> dynamic characters develop; static ones do not.</li>
              <li><b>Protagonist vs antagonist;</b> an <b>anti-hero</b> is a flawed central figure.</li>
              <li><b>Methods of characterisation:</b> direct description, speech and dialect, action, comments by other characters, and inner thoughts.</li>
            </ul>
            <p>A strong trait-flaw pairing drives tragedy: Okonkwo's strength is his will; his flaw is his fear of appearing weak — the same force that builds him destroys him.</p>

            <h3>4. Setting, theme and point of view</h3>
            <ul>
              <li><b>Setting:</b> time, place and social environment; setting can act almost as a character (Umuofia's customs press on every decision).</li>
              <li><b>Theme:</b> the central ideas — tradition vs change, masculinity, fate, colonial collision. Distinguish <b>theme</b> (an idea) from <b>subject</b> (what happens).</li>
              <li><b>Point of view:</b> first person (I), third-person limited (inside one mind) or omniscient (all minds). POV controls what the reader knows and trusts.</li>
              <li><b>Narrative tone:</b> the narrator's attitude — sympathetic, ironic, detached.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "How does Achebe present Okonkwo's downfall?" Plan in three moves: (1) characterisation — his fear of weakness, shown in the Ikemefuna episode; (2) plot — the accidental killing forces exile, the climax of his undoing; (3) setting/theme — returning to a changed Umuofia, his rigid tradition meets colonial change and breaks. One paragraph per move, each with an incident as evidence.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Retelling the story instead of analysing it — examiners want "how and why", not "what happens next".</li>
              <li>Confusing theme with plot summary.</li>
              <li>Naming a device without quoting or referencing an incident as evidence.</li>
              <li>Calling every main character the protagonist without checking whose struggle drives the plot.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> PEEL every paragraph — Point, Evidence (incident or quotation), Explanation (the effect), Link back to the question. Four sentences, full marks potential.</div>
          `,
          cards: [
            { q: 'What is prose fiction?', a: 'Imagined narrative written in ordinary sentence language — novels, novellas and short stories, read privately rather than performed.' },
            { q: 'Name the five parts of plot structure.', a: 'Exposition, rising action, climax, falling action and resolution (denouement), the classic dramatic arc applied to fiction.' },
            { q: 'What is the climax of a story?', a: 'The turning point of greatest tension, after which the direction of events changes decisively.' },
            { q: 'Difference between flashback and flash-forward?', a: 'A flashback shows earlier events; a flash-forward jumps ahead — both break chronological order for effect.' },
            { q: 'Round versus flat character?', a: 'A round character is complex and capable of change; a flat character is simple and stays fixed throughout.' },
            { q: 'Dynamic versus static character?', a: 'A dynamic character develops over the story; a static character ends as they began.' },
            { q: 'What is an anti-hero?', a: 'A central character who lacks conventional heroic qualities — flawed, sometimes ruthless, yet the focus of sympathy.' },
            { q: 'Name four methods of characterisation.', a: 'Direct description, the character\\'s speech, their actions, comments by other characters, and revealed inner thoughts.' },
            { q: 'Okonkwo\\'s tragic flaw?', a: 'His fear of appearing weak, which drives violence like the killing of Ikemefuna and finally his own destruction.' },
            { q: 'Difference between theme and subject?', a: 'The subject is what happens; the theme is the central idea it explores, such as tradition versus change.' },
            { q: 'Three points of view in fiction?', a: 'First person (I), third-person limited (one mind) and third-person omniscient (all minds known).' },
            { q: 'How can setting act as a character?', a: 'When place and customs actively shape decisions, as Umuofia\\'s traditions press on every choice Okonkwo makes.' },
            { q: 'What is narrative tone?', a: 'The narrator\\'s attitude toward characters and events — sympathetic, ironic, detached or critical.' },
            { q: 'What does PEEL stand for?', a: 'Point, Evidence, Explanation, Link — the four-sentence paragraph structure examiners reward in prose essays.' },
            { q: 'Biggest prose essay mistake?', a: 'Retelling the plot instead of analysing how the writer\\'s choices create meaning and support the theme.' },
          ],
          quiz: [
            { q: 'The turning point of greatest tension in a plot is the…', options: ['exposition', 'climax', 'denouement', 'subplot'], correct: 1, exp: 'The climax turns the direction of events; what follows is falling action toward resolution.' },
            { q: 'A complex character who changes is described as…', options: ['flat and static', 'round and dynamic', 'flat and dynamic', 'round and static'], correct: 1, exp: 'Round = complex; dynamic = changing. Okonkwo is round though he tragically fails to adapt.' },
            { q: 'Showing events from earlier in the timeline is a…', options: ['flash-forward', 'flashback', 'subplot', 'climax'], correct: 1, exp: 'A flashback interrupts chronological order to reveal the past.' },
            { q: 'Which is NOT a method of characterisation?', options: ['direct description', 'a character\\'s speech', 'the book\\'s price', 'comments by others'], correct: 2, exp: 'Writers reveal character through description, speech, action and other voices — never through the book\\'s price.' },
            { q: 'The central idea a work explores is its…', options: ['subject', 'theme', 'setting', 'plot'], correct: 1, exp: 'Theme is the idea (tradition vs change); subject is merely what happens.' },
            { q: 'A narrator who knows every character\\'s mind is…', options: ['first person', 'third limited', 'omniscient', 'unreliable'], correct: 2, exp: 'Third-person omniscient narrators see into all minds; limited narrators stay inside one.' },
            { q: 'In Things Fall Apart, Okonkwo\\'s downfall is driven mainly by…', options: ['laziness', 'fear of appearing weak', 'love of change', 'lack of ambition'], correct: 1, exp: 'His terror of weakness drives the killing of Ikemefuna and his rigid refusal to adapt.' },
            { q: 'A central character lacking heroic qualities is an…', options: ['antagonist', 'anti-hero', 'foil', 'narrator'], correct: 1, exp: 'An anti-hero leads the story without conventional hero virtues.' },
            { q: 'PEEL paragraphs require Point, Evidence, Explanation and…', options: ['plot', 'link', 'ending', 'length'], correct: 1, exp: 'Link the paragraph back to the question to keep the essay focused.' },
            { q: 'Prose essays lose marks chiefly through…', options: ['short quotations', 'plot retelling instead of analysis', 'using themes', 'naming characters'], correct: 1, exp: 'Examiners want analysis of how meaning is made, not a summary of events.' },
          ]
        },
        {
          title: 'Poetry: Form, Sound & Imagery',
          tags: ['Poetry', 'Rhyme', 'Imagery', 'Tone'],
          summary: 'How poems are built — form, rhythm, rhyme and sound patterns — and how imagery and tone create the feelings examiners ask about.',
          content: `
            <h3>1. Kinds of poetry</h3>
            <ul>
              <li><b>Narrative:</b> tells a story — ballads and epics.</li>
              <li><b>Lyric:</b> short, musical, personal emotion — sonnets, odes, elegies.</li>
              <li><b>Dramatic:</b> a character speaks — dramatic monologue.</li>
            </ul>
            <p>Key fixed forms: the <b>sonnet</b> (14 lines; Shakespearean abab cdcd efef gg, Petrarchan octave + sestet), the <b>ode</b> (praise), the <b>elegy</b> (mourning), the <b>ballad</b> (story in quatrains), and <b>free verse</b> (no fixed pattern).</p>

            <h3>2. Structure: stanza, line, rhythm</h3>
            <ul>
              <li><b>Stanza</b> = the poem's paragraph: couplet (2), tercet (3), quatrain (4).</li>
              <li><b>Rhythm/metre:</b> the beat pattern, built from <b>feet</b> like the iamb (da-DUM). Scan a line by marking stressed syllables.</li>
              <li><b>Enjambment:</b> a line runs on without pause; <b>end-stopped:</b> a line finishes with punctuation. Enjambment speeds reading; end-stops slow it.</li>
              <li><b>Caesura:</b> a strong pause inside a line.</li>
            </ul>

            <h3>3. Sound patterns</h3>
            <ul>
              <li><b>Rhyme scheme:</b> label end-sounds a b a b…; know end rhyme vs internal rhyme.</li>
              <li><b>Alliteration:</b> repeated initial consonants ("wild wind").</li>
              <li><b>Assonance:</b> repeated vowel sounds; <b>consonance:</b> repeated consonants anywhere.</li>
              <li><b>Onomatopoeia:</b> words that sound like their meaning ("buzz", "crash").</li>
              <li><b>Repetition and refrain:</b> build music and emphasis.</li>
            </ul>

            <h3>4. Imagery, figurative language and tone</h3>
            <p><b>Imagery</b> paints sense experience: visual, auditory, tactile, gustatory, olfactory, plus <b>kinesthetic</b> (movement). Figurative carriers: <b>simile</b> (like/as), <b>metaphor</b> (direct identification), <b>personification</b> (human traits to non-human), <b>hyperbole</b> (deliberate excess), <b>symbol</b> (an object carrying larger meaning).</p>
            <p><b>Tone</b> is the poet's attitude (mocking, tender, bitter); <b>mood</b> is the feeling the reader catches. In Soyinka's "Telephone Conversation", the ironic tone exposes the absurdity of colour prejudice.</p>
            <div class="worked"><b>Worked example:</b> Analyse "The sun smiled on the market". Device: personification (the sun cannot smile). Effect: warmth and welcome; the market feels alive and friendly. Tone: affectionate. In one exam sentence: "Personification of the sun creates a warm, welcoming mood, revealing the speaker's affection for market life."</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling all rhyme "rhyme scheme" without labelling the pattern (abab, aabb).</li>
              <li>Naming a device but not stating its effect — the effect earns the mark.</li>
              <li>Confusing tone (poet's attitude) with mood (reader's feeling).</li>
              <li>Confusing assonance (vowels) with alliteration (initial consonants).</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> for any poetry question, hunt in this order: FORM (stanza, rhyme) → SOUND (alliteration, onomatopoeia) → IMAGE (simile, metaphor, personification) → TONE. One labelled example of each fills an essay fast.</div>
          `,
          cards: [
            { q: 'Three main kinds of poetry?', a: 'Narrative (tells a story), lyric (personal emotion, musical) and dramatic (a character speaks).' },
            { q: 'How many lines has a sonnet?', a: 'Fourteen lines — Shakespearean ends with a couplet; Petrarchan splits into octave and sestet.' },
            { q: 'Rhyme scheme of a Shakespearean sonnet?', a: 'abab cdcd efef gg — three quatrains then a closing couplet.' },
            { q: 'What is a quatrain?', a: 'A four-line stanza; a couplet has two lines, a tercet three.' },
            { q: 'Define enjambment.', a: 'A line that runs on into the next without terminal punctuation, speeding the reading.' },
            { q: 'What is a caesura?', a: 'A strong pause within a line of verse, often marked by punctuation.' },
            { q: 'Repeated initial consonant sounds are…', a: 'Alliteration, as in "wild wind" — sound patterning that binds words together.' },
            { q: 'Repeated vowel sounds are…', a: 'Assonance; consonance repeats consonant sounds anywhere in the words.' },
            { q: 'Words that sound like their meaning?', a: 'Onomatopoeia — buzz, crash, hiss — appealing directly to the ear.' },
            { q: 'Simile versus metaphor?', a: 'A simile compares using like or as; a metaphor identifies one thing directly as another.' },
            { q: 'Giving human qualities to non-human things is…', a: 'Personification, e.g. the sun smiling, which makes scenes feel alive.' },
            { q: 'Deliberate exaggeration is…', a: 'Hyperbole, used for emphasis or comic effect rather than literal truth.' },
            { q: 'Tone versus mood?', a: 'Tone is the poet\\'s attitude; mood is the feeling the poem creates in the reader.' },
            { q: 'What does an elegy do?', a: 'Mourns the dead; an ode celebrates and praises its subject.' },
            { q: 'Which poem exposes colour prejudice with irony?', a: 'Soyinka\\'s "Telephone Conversation", where the ironic tone mocks the absurdity of racism.' },
          ],
          quiz: [
            { q: 'A sonnet contains…', options: ['10 lines', '12 lines', '14 lines', '16 lines'], correct: 2, exp: 'Fourteen lines, in Shakespearean or Petrarchan arrangement.' },
            { q: 'The pattern abab cdcd efef gg belongs to…', options: ['the ode', 'the Shakespearean sonnet', 'free verse', 'the ballad'], correct: 1, exp: 'Three quatrains and a closing couplet — the Shakespearean sonnet.' },
            { q: 'A four-line stanza is a…', options: ['couplet', 'tercet', 'quatrain', 'caesura'], correct: 2, exp: 'Quatrain = four lines; couplet two; tercet three.' },
            { q: 'A line running on without pause uses…', options: ['caesura', 'enjambment', 'alliteration', 'refrain'], correct: 1, exp: 'Enjambment carries the sense past the line break, quickening pace.' },
            { q: '"Wild wind whispering" chiefly uses…', options: ['assonance', 'onomatopoeia', 'alliteration', 'hyperbole'], correct: 2, exp: 'Repeated initial w-sounds = alliteration.' },
            { q: 'Repeated vowel sounds inside words are…', options: ['assonance', 'consonance', 'end rhyme', 'meter'], correct: 0, exp: 'Assonance echoes vowel sounds; consonance echoes consonants.' },
            { q: 'The sun smiled on the market. This is…', options: ['simile', 'personification', 'hyperbole', 'symbol'], correct: 1, exp: 'Smiling is human — personification of the sun creates warmth.' },
            { q: 'The poet\\'s attitude is called…', options: ['mood', 'tone', 'theme', 'meter'], correct: 1, exp: 'Tone = the poet\\'s attitude; mood = the reader\\'s feeling.' },
            { q: 'A poem mourning the dead is an…', options: ['ode', 'elegy', 'epic', 'idyll'], correct: 1, exp: 'Elegies mourn; odes praise.' },
            { q: 'First step when analysing any poem?', options: ['the poet\\'s biography', 'its form and sound patterns', 'the publication date', 'the rhyme dictionary'], correct: 1, exp: 'Work FORM → SOUND → IMAGE → TONE; biography rarely earns marks in unseen questions.' },
          ]
        },
        {
          title: 'Drama: Structure, Stagecraft & Performance',
          tags: ['Drama', 'Tragedy', 'Comedy', 'Stagecraft'],
          summary: 'How plays are made to be performed — acts and scenes, dialogue, soliloquy and aside — plus tragedy, comedy and the tools of the stage.',
          content: `
            <h3>1. Drama is different</h3>
            <p>Drama is literature <b>written to be performed</b>. There is usually no narrator: the story reaches us through <b>dialogue</b> and <b>action</b>, so everything the audience knows comes from what characters say, do, and what the stage shows. The written text is a <b>blueprint</b> for performance.</p>

            <h3>2. Structure</h3>
            <ul>
              <li><b>Acts and scenes:</b> the major divisions; scenes shift with place or time.</li>
              <li><b>Exposition → rising action → climax → falling action → catastrophe/resolution.</b> In tragedy the resolution is the <b>catastrophe</b>.</li>
              <li><b>Prologue and epilogue</b> frame the action; a <b>chorus</b> may comment on it.</li>
              <li><b>Subplot:</b> a secondary story that mirrors or contrasts the main plot.</li>
            </ul>

            <h3>3. Speech techniques</h3>
            <ul>
              <li><b>Dialogue:</b> ordinary exchange between characters.</li>
              <li><b>Monologue:</b> a long speech to others on stage.</li>
              <li><b>Soliloquy:</b> a character alone, thinking aloud — the audience hears inner truth (Hamlet's "To be or not to be").</li>
              <li><b>Aside:</b> a remark to the audience that other characters supposedly do not hear.</li>
              <li><b>Dramatic irony:</b> the audience knows what a character does not — tension gold.</li>
            </ul>

            <h3>4. Tragedy and comedy</h3>
            <ul>
              <li><b>Tragedy:</b> a great but flawed figure (<b>tragic hero</b>) falls through a <b>tragic flaw (hamartia)</b>; the audience feels <b>pity and fear</b>, cleansed by <b>catharsis</b>. Okonkwo is a classic tragic hero.</li>
              <li><b>Comedy:</b> ends in joy, often marriage or reunion; types include romantic comedy, satire and farce.</li>
              <li><b>Tragicomedy:</b> blends both; <b>melodrama</b> exaggerates good vs evil.</li>
            </ul>

            <h3>5. Stagecraft</h3>
            <p><b>Stage directions</b> (italic instructions) govern movement, tone and timing. <b>Setting, costume, lighting, sound/music, masks, props</b> all carry meaning — in Soyinka's The Lion and the Jewel, costume and drumming stage the clash of tradition and modernity without a word. <b>Entrances and exits</b> can be symbolic; silence can be louder than dialogue.</p>
            <div class="worked"><b>Worked example:</b> "Show how a play uses dramatic irony." Take Oedipus cursing the murderer of Laius — the audience knows Oedipus IS the murderer. Every curse tightens the noose on himself. Effect: pity and dread. Structure your answer: name the device → the scene → who knows what → the emotional effect.</div>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Confusing soliloquy (alone, inner truth) with aside (quick remark, others present).</li>
              <li>Calling hamartia "a sin" — it is a flaw or error of judgment, not wickedness.</li>
              <li>Ignoring stage directions — they are examinable text, not decoration.</li>
              <li>Summarising acts instead of showing how performance choices create meaning.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> in drama essays, always mention PERFORMANCE — "on stage, the lighting/exit/silence would…" — it proves you understand drama is meant to be seen, and lifts you above summary writers.</div>
          `,
          cards: [
            { q: 'How is drama different from prose?', a: 'Drama is written to be performed: story arrives through dialogue and action, with no narrator.' },
            { q: 'Major divisions of a play?', a: 'Acts, subdivided into scenes that shift with place or time.' },
            { q: 'What is a soliloquy?', a: 'A character alone on stage thinking aloud, revealing inner truth directly to the audience.' },
            { q: 'What is an aside?', a: 'A brief remark meant for the audience that other characters supposedly do not hear.' },
            { q: 'Soliloquy versus monologue?', a: 'A soliloquy is solitary inner speech; a monologue is a long speech delivered to other characters.' },
            { q: 'Define dramatic irony.', a: 'When the audience knows what a character does not, creating tension or humour.' },
            { q: 'What is hamartia?', a: 'The tragic flaw or error of judgment that brings about the tragic hero\\'s downfall.' },
            { q: 'What is catharsis?', a: 'The purging of pity and fear the audience experiences at the end of a tragedy.' },
            { q: 'Give an example of a tragic hero.', a: 'Okonkwo in Things Fall Apart — great but flawed, destroyed by his fear of weakness.' },
            { q: 'How does comedy typically end?', a: 'In joy — often marriage, reunion or reconciliation; tragedy ends in catastrophe.' },
            { q: 'What are stage directions?', a: 'Italic instructions for movement, tone, lighting and timing — examinable parts of the text.' },
            { q: 'Name four elements of stagecraft.', a: 'Setting, costume, lighting and sound or music, plus props and masks.' },
            { q: 'What is a chorus in drama?', a: 'A voice or group that comments on the action, guiding audience interpretation.' },
            { q: 'What is tragicomedy?', a: 'A play blending tragic and comic elements; melodrama exaggerates the struggle of good against evil.' },
            { q: 'Golden rule for drama essays?', a: 'Mention performance — how lighting, exits, silence or costume would work on stage, not just words.' },
          ],
          quiz: [
            { q: 'A character alone revealing inner thoughts performs a…', options: ['monologue', 'soliloquy', 'dialogue', 'chorus'], correct: 1, exp: 'Soliloquy = alone and thinking aloud; monologues are delivered to others.' },
            { q: 'A quick remark unheard by other characters is an…', options: ['aside', 'epilogue', 'aria', 'act'], correct: 0, exp: 'The aside speaks past the other characters to the audience.' },
            { q: 'The audience knowing what a character does not is…', options: ['verbal irony', 'dramatic irony', 'farce', 'catharsis'], correct: 1, exp: 'Dramatic irony mines the gap between audience knowledge and character ignorance.' },
            { q: 'Hamartia is…', options: ['a type of chorus', 'the tragic flaw', 'the final scene', 'a stage prop'], correct: 1, exp: 'The flaw or error of judgment that drives the tragic fall.' },
            { q: 'Catharsis refers to…', options: ['the hero\\'s death', 'purging of pity and fear', 'comic relief', 'the prologue'], correct: 1, exp: 'Aristotle\\'s term for the emotional cleansing tragedy produces.' },
            { q: 'Comedy classically ends in…', options: ['exile', 'marriage or reunion', 'death', 'war'], correct: 1, exp: 'Joyful resolution — marriage, reunion, reconciliation — closes comedy.' },
            { q: 'Italic instructions for movement and lighting are…', options: ['asides', 'stage directions', 'soliloquies', 'subplots'], correct: 1, exp: 'Stage directions are part of the dramatic text and fair game for exam questions.' },
            { q: 'Oedipus cursing the murderer he himself is illustrates…', options: ['comic relief', 'dramatic irony', 'enjambment', 'farce'], correct: 1, exp: 'Every curse tightens on himself while the audience watches, knowing the truth.' },
            { q: 'A secondary story mirroring the main plot is a…', options: ['prologue', 'subplot', 'caesura', 'refrain'], correct: 1, exp: 'Subplots echo or contrast the main action, deepening theme.' },
            { q: 'Drama essays rise above summary by discussing…', options: ['the author\\'s birth', 'performance choices on stage', 'the book cover', 'page numbers'], correct: 1, exp: 'Lighting, exits, silence, costume — drama is written to be seen.' },
          ]
        }
      ],
      SS3: [
        {
          title: 'African Literature: Oral Tradition & the Written Word',
          tags: ['Oral tradition', 'Achebe', 'Soyinka', 'Negritude'],
          summary: 'From griots and folktales to Achebe, Soyinka and the Negritude movement — the roots, giants and themes of African literature.',
          content: `
            <h3>1. Oral literature: the first library</h3>
            <p>Long before writing, African societies stored knowledge in <b>oral literature</b>: folktales (the tortoise and the hare-style trickster tales), <b>proverbs</b> ("proverbs are the palm-oil with which words are eaten"), myths, legends, praise poetry, riddles and songs, carried by griots, storytellers and elders. Oral forms teach morals, history and identity — and modern African writers constantly borrow their rhythms and devices.</p>

            <h3>2. Why Things Fall Apart changed everything</h3>
            <p>Chinua Achebe wrote <b>Things Fall Apart (1958)</b> partly to answer European novels that painted Africans as savages. Its power:</p>
            <ul>
              <li>Umuofia is shown <b>from inside</b> — with courts, religion, humour and flaws, not exotic backdrop.</li>
              <li>Proverbs, folktales and rituals are woven into the English prose, bending the language to carry African life.</li>
              <li>Okonkwo's tragedy doubles as the tragedy of a society colliding with colonialism.</li>
            </ul>

            <h3>3. The giants and the movements</h3>
            <ul>
              <li><b>Wole Soyinka</b> — playwright and poet, first African Nobel laureate in Literature (1986); The Lion and the Jewel stages tradition vs modernity with satire.</li>
              <li><b>Negritude</b> — Senghor, Césaire and Damas celebrated African identity and heritage against colonial denigration.</li>
              <li><b>Ngugi wa Thiong'o</b> — argued for writing in African languages; Weep Not, Child and A Grain of Wheat examine colonialism and land.</li>
              <li><b>Flora Nwapa, Buchi Emecheta, Mariama Ba</b> — women's voices on marriage, patriarchy and resilience.</li>
            </ul>

            <h3>4. Recurring themes</h3>
            <ul>
              <li><b>Tradition vs change/modernity</b> — the central axis of the African novel.</li>
              <li><b>Colonialism and its aftermath</b> — displacement, identity, the new elite.</li>
              <li><b>Individual vs community</b> — the person against custom (Okonkwo, Sidi).</li>
              <li><b>Gender and power</b> — women's endurance and voice.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> "How does oral tradition shape Things Fall Apart?" Three answers in one: (1) proverbs carry wisdom and status ("a man who pays respect to the great paves the way for his own greatness"); (2) folktales (Mosquito, Tortoise) mirror the plot's morals; (3) rituals and egwugwu justice show a working legal-religious system. Each proves African society was full, not empty, before the missionaries came.</div>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Calling oral literature "unwritten history" only — it is literature with form and artistry.</li>
              <li>Attributing Negritude to Soyinka — its architects were Senghor, Césaire and Damas.</li>
              <li>Reducing Things Fall Apart to "colonialism bad" — it also judges Umuofia's own cruelties (twins, outcasts).</li>
              <li>Confusing Ngugi's language campaign with Negritude's identity celebration.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> anchor every African-lit essay in the tradition-vs-change axis, then prove it with ONE named text, ONE incident and ONE device (proverb, satire, symbolism). Specific beats sweeping.</div>
          `,
          cards: [
            { q: 'Name four forms of oral literature.', a: 'Folktales, proverbs, myths and legends, praise poetry, riddles and songs, carried by griots and elders.' },
            { q: 'Complete: Proverbs are the palm-oil…', a: '"…with which words are eaten" — Achebe\\'s image for how proverbs make speech digestible and wise.' },
            { q: 'Why did Achebe write Things Fall Apart?', a: 'Partly to answer European novels that depicted Africans as savages, showing Umuofia as a full society from inside.' },
            { q: 'When was Things Fall Apart published?', a: 'In 1958, opening African fiction to worldwide recognition.' },
            { q: 'First African Nobel laureate in Literature?', a: 'Wole Soyinka in 1986, the Nigerian playwright and poet.' },
            { q: 'What is Negritude?', a: 'A movement led by Senghor, Césaire and Damas celebrating African identity and heritage against colonial denigration.' },
            { q: 'Ngugi wa Thiong\\'o is famous for arguing…', a: 'That African writers should write in African languages rather than European ones.' },
            { q: 'Name two African women writers.', a: 'Flora Nwapa and Buchi Emecheta of Nigeria, or Mariama Ba of Senegal, voices on marriage and resilience.' },
            { q: 'The central thematic axis of African literature?', a: 'Tradition versus change — the pull between custom and modernity in every major text.' },
            { q: 'What play stages tradition vs modernity with satire?', a: 'Soyinka\\'s The Lion and the Jewel, pitting the bale Baroka against the modern teacher Lakunle.' },
            { q: 'What is a trickster tale?', a: 'A folktale built on a cunning small figure — like the tortoise — who wins by wit, teaching moral lessons.' },
            { q: 'What role do proverbs play in Things Fall Apart?', a: 'They carry wisdom and mark status, weaving Igbo oral art into the English prose.' },
            { q: 'Two themes beyond tradition vs change?', a: 'Colonialism and its aftermath, the individual against community, and gender and power.' },
            { q: 'Who wrote Weep Not, Child?', a: 'Ngugi wa Thiong\\'o, examining colonialism, land and hope through a Kenyan family.' },
            { q: 'Fair criticism of Umuofia inside the novel?', a: 'Achebe also exposes its cruelties — the casting away of twins and the treatment of outcasts — not a romantic myth.' },
          ],
          quiz: [
            { q: 'Things Fall Apart was published in…', options: ['1948', '1958', '1968', '1978'], correct: 1, exp: '1958 — the novel that changed the direction of African fiction.' },
            { q: 'The first African Nobel laureate in Literature was…', options: ['Achebe', 'Ngugi', 'Soyinka', 'Senghor'], correct: 2, exp: 'Wole Soyinka won the Nobel Prize in 1986.' },
            { q: 'Negritude was led by…', options: ['Soyinka and Achebe', 'Senghor, Césaire and Damas', 'Ngugi and Nwapa', 'Emecheta and Ba'], correct: 1, exp: 'The Francophone trio celebrated black identity and heritage.' },
            { q: 'Ngugi wa Thiong\\'o champions…', options: ['writing in African languages', 'writing only drama', 'colonial education', 'free verse only'], correct: 0, exp: 'His famous campaign: decolonise the mind by writing in African languages.' },
            { q: 'Proverbs in Things Fall Apart mainly…', options: ['slow the story', 'carry wisdom and weave oral art into prose', 'confuse readers', 'replace dialogue'], correct: 1, exp: 'They embed Igbo oral tradition inside the English novel.' },
            { q: 'The Lion and the Jewel contrasts Baroka with…', options: ['Okonkwo', 'Lakunle', 'Obierika', 'Nwoye'], correct: 1, exp: 'The traditional bale versus the modern, westernised schoolteacher.' },
            { q: 'A cunning tortoise winning by wit exemplifies…', options: ['an epic', 'a trickster tale', 'an ode', 'a chorus'], correct: 1, exp: 'Trickster tales teach morals through the clever small figure.' },
            { q: 'Weep Not, Child was written by…', options: ['Achebe', 'Ngugi wa Thiong\\'o', 'Nwapa', 'Soyinka'], correct: 1, exp: 'Ngugi\\'s novel of colonial Kenya, land and shattered hope.' },
            { q: 'The central axis of African literary themes is…', options: ['sea voyages', 'tradition vs change', 'space travel', 'court intrigue'], correct: 1, exp: 'Custom against modernity drives nearly every major African text.' },
            { q: 'A balanced essay on Things Fall Apart notes that…', options: ['Umuofia was perfect', 'the novel also critiques Umuofia\\'s own cruelties', 'colonialism helped Umuofia', 'Okonkwo wins'], correct: 1, exp: 'Achebe shows both colonial damage and internal flaws like the casting away of twins.' },
          ]
        },
        {
          title: 'Literary Appreciation & Criticism',
          tags: ['Criticism', 'Context questions', 'Essay technique'],
          summary: 'The examiner\\'s toolkit: how to answer context questions, build literary essays, and use critical terms with confidence.',
          content: `
            <h3>1. What literary appreciation means</h3>
            <p><b>Literary appreciation</b> is understanding and enjoying a text's artistry — seeing not just WHAT a passage says but HOW it says it and WHY it works. <b>Literary criticism</b> goes further: informed judgment and interpretation, using evidence and reasoned argument.</p>

            <h3>2. Answering context questions (WAEC style)</h3>
            <p>A passage is quoted; you identify the text, speaker, situation, then explain significance. The winning routine:</p>
            <ul>
              <li><b>1. Identify:</b> text, author, speaker, addressee, occasion — precisely.</li>
              <li><b>2. Situation:</b> where this moment sits in the plot.</li>
              <li><b>3. Significance:</b> what the line reveals — character, theme, turning point.</li>
              <li><b>4. Devices (if asked):</b> name the device AND its effect.</li>
            </ul>

            <h3>3. The literary essay</h3>
            <p>Plan before writing: read the question twice, underline the demand (character? theme? technique?), choose 3 arguments, one per paragraph. Each paragraph: <b>PEEL</b>. Introduction = one sentence of context + your thesis. Conclusion = restate the thesis in new words + a closing insight. Quotations: short, woven into your sentence, always serving the argument.</p>

            <h3>4. Critical terms to wield</h3>
            <ul>
              <li><b>Genre, plot, subplot, climax, denouement.</b></li>
              <li><b>Characterisation, foil</b> (a contrasting character who highlights another's traits), <b>tragic flaw, catharsis.</b></li>
              <li><b>Imagery, symbol, irony</b> (verbal, situational, dramatic), <b>satire, parody.</b></li>
              <li><b>Point of view, tone, mood, diction</b> (word choice), <b>syntax</b> (sentence shapes).</li>
              <li><b>Setting, atmosphere, foreshadowing, flashback, suspense.</b></li>
            </ul>

            <h3>5. Simple critical lenses</h3>
            <ul>
              <li><b>Moral lens:</b> what values does the text test or teach?</li>
              <li><b>Social lens:</b> what does it say about society, class, gender, power?</li>
              <li><b>Formalist lens:</b> how do form, structure and language create meaning?</li>
            </ul>
            <p>You do not need heavy theory — naming a lens and applying it consistently impresses examiners.</p>
            <div class="worked"><b>Worked example:</b> Question: "Discuss the role of fear in Okonkwo's life." Thesis: fear builds and destroys him. P1: fear of his father's laziness drives his success (evidence: yam farming, titles). P2: fear of weakness drives violence (Ikemefuna). P3: fear of the new order leaves him stranded (the suicide). Link each paragraph to the word "role" — that is what "discuss" demands.</div>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Answering a question you WISH was asked — underline the actual demand first.</li>
              <li>Quotation dumping: long quotes with no explanation earn nothing.</li>
              <li>Vague praise ("Achebe is a great writer") instead of analysis.</li>
              <li>Ignoring the author/text name in context questions — instant mark loss.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> memorise one crisp quotation per set character and per set theme. Ten quotations, correctly placed, can carry any essay or context question in the exam.</div>
          `,
          cards: [
            { q: 'What is literary appreciation?', a: 'Understanding and enjoying how a text works — its artistry, not just its story.' },
            { q: 'What is literary criticism?', a: 'Informed judgment and interpretation of a text, argued with evidence and reason.' },
            { q: 'First step in a context question?', a: 'Identify the text, author, speaker, addressee and occasion precisely.' },
            { q: 'Second step in a context question?', a: 'Locate the situation — where the moment sits in the plot — then explain its significance.' },
            { q: 'What does PEEL stand for?', a: 'Point, Evidence, Explanation, Link — the paragraph structure for literary essays.' },
            { q: 'What is a foil?', a: 'A character who contrasts with another to highlight that character\\'s traits.' },
            { q: 'Three kinds of irony?', a: 'Verbal (saying the opposite), situational (opposite outcomes) and dramatic (audience knows more).' },
            { q: 'What is diction?', a: 'The writer\\'s choice of words — formal, colloquial, figurative — a key stylistic fingerprint.' },
            { q: 'What is syntax as a critical term?', a: 'The arrangement of words and sentence shapes, which controls pace and emphasis.' },
            { q: 'Define foreshadowing.', a: 'Hints dropped early that prepare the reader for later events.' },
            { q: 'Name three critical lenses.', a: 'Moral (values), social (society, class, gender) and formalist (form, structure, language).' },
            { q: 'How should quotations be used?', a: 'Short, woven into your sentence, always explained — never dumped without analysis.' },
            { q: 'What does "discuss" demand in an essay?', a: 'A reasoned examination from several angles, linked back to the exact wording of the question.' },
            { q: 'Biggest context-question blunder?', a: 'Omitting the text or author name — automatic mark loss before content is read.' },
            { q: 'One memorisation trick for exams?', a: 'Learn one crisp quotation per major character and theme; placed well, they carry any essay.' },
          ],
          quiz: [
            { q: 'In a context question, first you must…', options: ['praise the author', 'identify text, speaker and occasion', 'summarise the whole book', 'list devices'], correct: 1, exp: 'Precise identification anchors every later mark.' },
            { q: 'A contrasting character who highlights another\\'s traits is a…', options: ['foil', 'chorus', 'narrator', 'anti-hero'], correct: 0, exp: 'Obierika\\'s gentleness throws Okonkwo\\'s harshness into relief.' },
            { q: 'The audience knowing what a character does not is… irony.', options: ['verbal', 'situational', 'dramatic', 'cosmic'], correct: 2, exp: 'Dramatic irony exploits the knowledge gap between audience and character.' },
            { q: 'Diction refers to…', options: ['rhyme', 'word choice', 'plot order', 'stage light'], correct: 1, exp: 'Diction = the writer\\'s selection of words.' },
            { q: 'Early hints preparing later events are…', options: ['flashbacks', 'foreshadowing', 'asides', 'caesurae'], correct: 1, exp: 'Foreshadowing plants the seeds the plot later harvests.' },
            { q: 'PEEL means Point, Evidence, Explanation and…', options: ['Plot', 'Link', 'Ending', 'Lexis'], correct: 1, exp: 'Link the paragraph to the question to keep the argument tight.' },
            { q: 'Quotations in essays should be…', options: ['long and many', 'short, woven in and explained', 'avoided entirely', 'in every sentence'], correct: 1, exp: 'Evidence earns marks only when analysed.' },
            { q: 'The formalist lens examines…', options: ['morals', 'class struggle', 'form, structure and language', 'author biography'], correct: 2, exp: 'Formalism stays inside the text\\'s artistry.' },
            { q: '"Discuss the role of fear…" requires you to…', options: ['describe fear generally', 'examine its role from several angles', 'retell the plot', 'praise Achebe'], correct: 1, exp: 'Answer the verb: examine the ROLE, paragraph by paragraph.' },
            { q: 'Losing marks fastest in context questions comes from…', options: ['short answers', 'omitting text/author identification', 'clear handwriting', 'using themes'], correct: 1, exp: 'Identification is the gateway mark — never skip it.' },
          ]
        },
        {
          title: 'Unseen Prose & Poetry: Exam Technique',
          tags: ['Unseen', 'JAMB', 'WAEC', 'Technique'],
          summary: 'A drill for passages you have never met: fast reading, structured annotation, and answer frameworks for unseen prose and poetry.',
          content: `
            <h3>1. Why unseen passages scare people — and why they shouldn't</h3>
            <p>Unseen passages test <b>skill, not memory</b>: nobody can pre-read them, so preparation is about METHOD. Master the routine and unseen questions become the most predictable part of the paper.</p>

            <h3>2. The first-five-minutes drill</h3>
            <ul>
              <li><b>Read the questions first</b> — they tell you what to hunt for.</li>
              <li><b>Read the passage twice:</b> first for gist, second with a pencil — underline striking words, circle repeated images, mark shifts in tone.</li>
              <li><b>Summarise in one sentence</b> in the margin: who, what, where, feeling.</li>
              <li>Note the <b>type</b>: narrative? descriptive? argumentative? lyric? This shapes every answer.</li>
            </ul>

            <h3>3. Unseen prose: the standard questions</h3>
            <ul>
              <li><b>"What is the passage about?"</b> → one-sentence gist + two supporting details.</li>
              <li><b>"Describe the narrator/character."</b> → trait + evidence from words/actions + effect on reader.</li>
              <li><b>"Explain the meaning of the phrase…"</b> → literal sense + contextual sense, in your own words.</li>
              <li><b>"Identify the mood/tone."</b> → label it + point to the words that create it.</li>
              <li><b>Grammatical naming</b> ("what is the word class of…?") — revise nouns, verbs, adjectives, adverbs, prepositions, conjunctions.</li>
            </ul>

            <h3>4. Unseen poetry: the FORM → SOUND → IMAGE → TONE hunt</h3>
            <ul>
              <li><b>Form:</b> stanzas, line lengths, rhyme scheme, free verse or patterned?</li>
              <li><b>Sound:</b> alliteration, assonance, onomatopoeia, rhythm, repetition.</li>
              <li><b>Image:</b> simile, metaphor, personification, symbol — and the feeling each carries.</li>
              <li><b>Tone:</b> bitter, joyful, nostalgic, mocking — evidenced by diction.</li>
            </ul>
            <p>Then the big question: <b>theme</b>. What human experience is under the images — loss, love, home, ambition, death?</p>

            <h3>5. Answer frameworks that never fail</h3>
            <ul>
              <li><b>Device question:</b> "The poet uses [device] in '[short quote]' to [effect], which [deeper meaning]."</li>
              <li><b>Character question:</b> "[Name] is [trait]; this is shown when [evidence], revealing [insight]."</li>
              <li><b>Title question:</b> connect the title to theme + one image + the ending.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Line: "The river swallowed the moon." Hunt: image (metaphor — rivers cannot swallow); sound (soft 'w' and 'm' slow the line); tone (mysterious, hushed); theme (nature's power over human light). Answer in one sentence using the framework: "The metaphor of the river swallowing the moon suggests nature quietly overpowering human certainty, deepened by the hushed m-sounds."</div>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Paraphrasing instead of answering — restating the line is not explaining it.</li>
              <li>Answering without quoting — unseen marks live in the evidence.</li>
              <li>Ignoring the questions' command words (identify vs explain vs discuss).</li>
              <li>Panicking on an unfamiliar word — infer from context; examiners expect it.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> practise the drill weekly on ANY text — a news story, a hymn, a novel page. Five minutes: gist, annotate, framework answers. By exam day the routine is reflex.</div>
          `,
          cards: [
            { q: 'What do unseen passages test?', a: 'Reading skill and method, not memory — nobody can pre-read an unseen text.' },
            { q: 'First step of the five-minute drill?', a: 'Read the questions first so you know what to hunt for in the passage.' },
            { q: 'How many readings should a passage get?', a: 'Two — first for gist, second with annotation: underline striking words, circle images, mark tone shifts.' },
            { q: 'How do you answer "what is the passage about"?', a: 'One-sentence gist plus two supporting details from the text.' },
            { q: 'Formula for a character question?', a: 'Name the trait, give evidence from words or actions, then state what it reveals.' },
            { q: 'How to explain a phrase\\'s meaning?', a: 'Give the literal sense, then the contextual sense, in your own words.' },
            { q: 'The four-step poetry hunt?', a: 'FORM, then SOUND, then IMAGE, then TONE — one labelled example of each.' },
            { q: 'What is the "big question" in poetry?', a: 'The theme — the human experience under the images, such as loss, love or death.' },
            { q: 'Device-answer framework?', a: 'The writer uses [device] in [short quote] to create [effect], suggesting [deeper meaning].' },
            { q: 'How to answer a title question?', a: 'Connect the title to the theme, one central image, and the ending of the piece.' },
            { q: 'Identify versus explain versus discuss?', a: 'Identify = name it; explain = say how and why; discuss = examine from several angles.' },
            { q: 'What if a word is unfamiliar?', a: 'Infer its sense from the surrounding context — examiners plant such words deliberately.' },
            { q: 'The river swallowed the moon. The device used is…', a: 'A metaphor, suggesting nature overpowering human certainty, deepened by hushed m-sounds.' },
            { q: 'Where do unseen marks live?', a: 'In the evidence — answers without short quotations score poorly however fluent.' },
            { q: 'Best weekly practice for unseen?', a: 'Run the drill on any text: gist, annotate, framework answers — five minutes builds reflexes.' },
          ],
          quiz: [
            { q: 'Unseen passages chiefly test…', options: ['memorised texts', 'reading skill and method', 'author biographies', 'spelling lists'], correct: 1, exp: 'They reward the routine: gist, annotation, framework answers.' },
            { q: 'Before reading the passage you should…', options: ['read the questions', 'write the conclusion', 'skip it', 'check the clock only'], correct: 0, exp: 'Questions tell you what to hunt for.' },
            { q: 'The second reading of a passage should be…', options: ['faster', 'annotated with pencil', 'skipped', 'aloud'], correct: 1, exp: 'Underline striking words, circle images, mark tone shifts.' },
            { q: '"Explain the meaning of…" requires…', options: ['the literal sense only', 'literal plus contextual sense in your own words', 'a quotation only', 'the dictionary'], correct: 1, exp: 'Both layers, in your own words, earn the mark.' },
            { q: 'The poetry hunt order is…', options: ['tone, theme, form, sound', 'form, sound, image, tone', 'image, form, tone, sound', 'sound, tone, form, image'], correct: 1, exp: 'FORM → SOUND → IMAGE → TONE is the reliable sweep.' },
            { q: 'The theme of a poem is…', options: ['its title', 'the human experience under the images', 'its rhyme scheme', 'the poet\\'s age'], correct: 1, exp: 'Loss, love, home, ambition, death — the experience beneath the words.' },
            { q: 'Identify versus explain: explain means…', options: ['name it', 'say how and why', 'quote it', 'translate it'], correct: 1, exp: 'Command words set the depth of the answer.' },
            { q: 'An unfamiliar word should be…', options: ['left blank', 'inferred from context', 'copied twice', 'ignored'], correct: 1, exp: 'Context clues are exactly what examiners test.' },
            { q: 'Unseen answers score poorly without…', options: ['long intros', 'short quoted evidence', 'big handwriting', 'poet names'], correct: 1, exp: 'Evidence anchors every claim in the text.' },
            { q: 'Weekly unseen practice should use…', options: ['only past WAEC papers', 'any text at all', 'poetry only', 'prose only'], correct: 1, exp: 'The drill transfers: news stories, hymns, novel pages all build the reflex.' },
          ]
        }
      ]"""

i = s.index("  'Literature in English': {")
j = s.index('    resources: [', i)
k = s.rindex('      ]', i, j)
tail = s[k+7:]
if tail.startswith(','):
    tail = tail[1:]
s = s[:k] + '      ],\n' + T1.strip('\n') + '\n' + tail

open(P, 'w', encoding='utf-8').write(s)
print('lit ss2+ss3 inserted')
