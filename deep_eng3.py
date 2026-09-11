# deep_eng3.py — English JSS3 deep lesson: Summary Writing & précis. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. Summary vs précis vs paraphrase — know your task</h3>
            <p>A <b>summary</b> retells the main points of a passage briefly,. <b>précis</b> does the same job but under a strict word limit and usually in a single flowing paragraph.
 <b>paraphrase</b> is goes the opposite direction — it restates the same ideas in different words at about the same length.
BECE and Post-UTME summary questions usually demand a"Summarize in your own words in no more than N words."
The marking scheme takes points away for both <b>copy</b>
and <b>overlength</b>.
So this lesson is about precision, not beauty.</p>
            <ul>
              <li>Summary/Précis: compress the main points and
use your own words, obey the word limit.</li>
              <li>Paraphrase: same length, new words —(vocabulary-swap questions).</li>
              <li>Both are graded on <b>content</b> first, then on <b>grammar and spelling</b> —— a perfect summary with terrible sentences still bleeds.</li>
            </ul>

            <h3>2. The bones-and-feathers model of a text</h3>
            <p>Every passage has <b>bones</b> (main points: who did what, and the result)
and <b>feathers</b> (illustrations, repetition, description, quoted speech, decorative numbers).
Summary = keep the bones, remove the feathers, then re-cover with your own sentences.
What to remove: examples and lists, repetition of the same idea, long description of clothes and colors,
direct speech ("..." ), decorative adverbs, and figures that exist merely for color.</p>
            <ul>
              <li><b>Keep:</b> subject + main action + result; cause-and-effect links
(because, so, therefore); the final outcome.</li>
              <li><b>Remove:</b> illustrative examples, dialogue, repetition,
description, and numbers that do not change the main point.</li>
              <li><b>Change:</b> vocabulary and sentence structure; merge two sentences that carry one idea.</li>
            </ul>
            <svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compression funnel: a long passage goes in at the top, feathers are removed in the middle, and a short summary comes out at the bottom">
              <rect x="120" y="6" width="220" height="30" rx="8" fill="#4f46e5"/>
              <text x="230" y="25" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Full passage (many words)</text>
              <path d="M230 36 L230 50" stroke="#334155" stroke-width="2" marker-end="url(#arrS)"/>
              <defs><marker id="arrS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#334155" stroke-width="1.5"/></marker></defs>
              <rect x="150" y="52" width="160" height="30" rx="8" fill="#f59e0b"/>
              <text x="230" y="71" text-anchor="middle" font-size="10" font-weight="800" fill="#78350f">Strip the feathers</text>
              <path d="M230 82 L230 96" stroke="#334155" stroke-width="2" marker-end="url(#arrS)"/>
              <rect x="180" y="98" width="100" height="30" rx="8" fill="#10b981"/>
              <text x="230" y="117" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">Précis</text>
              <text x="230" y="142" text-anchor="middle" font-size="9" fill="#475569">Same story, fewer words, your own words.</text>
            </svg>

            <h3>3. Five-step exam method</h3>
            <ul>
              <li><b>Step 1 — Read twice:</b> first for the gist, second time with a pencil,
marking the main point of each paragraph in the margin (one short line per paragraph).</li>
              <li><b>Step 2 — Draft the bones:</b> write your margin notes as a list;
this draft is for you, not for the examiner.</li>
              <li><b>Step 3 — Join into prose:</b> connect the bones with linking words
(then, however, because, therefore, finally) into smooth sentences; aa summary must read as prose, not as a shopping list.</li>
              <li><b>Step 4 — Translate to your own words:</b> replace passage vocabulary
where possible; keep proper nouns, technical names, and figures that are themselves the point.</li>
              <li><b>Step 5 — Count and trim:</b> count honestly (every word including "a" and "the");
if over the limit, remove decorative phrases first, never the main points.</li>
            </ul>

            <h3>4. The linking-word toolbox</h3>
            <table>
              <tr><th>Purpose</th><th>Linking words</th></tr>
              <tr><td>Add</td><td>and, also, moreover, in addition</td></tr>
              <tr><td>Contrast</td><td>but, however, yet, on the other hand</td></tr>
              <tr><td>Result</td><td>so, therefore, as a result, consequently</td></tr>
              <tr><td>Reason</td><td>because, since, as</td></tr>
              <tr><td>Sequence</td><td>first, then, next, finally, later</td></tr>
            </table>
            <div class="worked"><b>Applied worked example:</b>
Margin notes: "Farmers switched crops. Rain failed. Harvest was good.Hunger ended."
Prose version: "Because the rain had failed, the farmers switched crops;
the successful harvest ended hunger." — three bones, one sentence,
two linking words.This is compression.</div>

            <h3>5. Direct speech to indirect speech in a summary</h3>
            <p>A passage often contains people's words in quotation marks.
Your summary must fold them into indirect speech:
"He said, 'I will pay tomorrow'" becomes "He promised to pay the next day."
Pronouns shift (I → he/she, my → his/her), tenses shift one step back,
and time/place words move (now → then, today → that day, tomorrow → the next day, here → there).</p>
            <ul>
              <li>"I <b>am</b> tired" → she said she <b>was</b> tired.</li>
              <li>"I <b>have finished</b> my work" → he said he <b>had finished</b> his work.</li>
              <li>"Come here <b>now</b>" → she told him to go there <b>then</b>.</li>
            </ul>

            <h3>6. How words are counted (and how exams trick you)</h3>
            <ul>
              <li>Every word counts, including "a" and "the" —
"the boy ran" = 3 words.</li>
              <li>Hyphenated compounds count as one: "part-time" = 1;
"mother-in-law" = 1.</li>
              <li>Contractions count as one: "don't", "can't" = 1 each — a friendly gift from English.</li>
              <li>Numbers written as figures count as one: "2024" = 1;
"two thousand" = 2.</li>
              <li>"Not more than 60 words" means 60 is allowed;
"about 60" means 55–65 is safe.</li>
            </ul>

            <h3>7. The penalty list — where marks quietly die</h3>
            <ul>
              <li><b>Copying:</b> lifting whole sentences; even correct copying loses
the "own words" points.</li>
              <li><b>Overlength:</b> 80 words against a 60 limit can lose a full third of the marks.</li>
              <li><b>List form:</b> writing "1. Farmers… 2. Harvest…" — a summary is prose.</li>
              <li><b>First person:</b> "I think the writer…" — summarize the passage,
not your opinion; no "I" unless the question asks for it.</li>
              <li><b>New facts:</b> adding your own knowledge that is not in the passage —
inference yes, invention no.</li>
              <li><b>Spelling and grammar:</b> deducted at the end even when content is perfect.</li>
            </ul>

            <h3>8. Full model compression, from long to limit</h3>
            <div class="worked"><b>Original (88 words):</b> "Last term, the principal called a meeting of the whole school.
He praised the students who had worked hard during the term, and he also thanked the teachers
who had guided those students with great patience and kindness.After that, he announced that
the school would organize a cultural day next month, and he promised that every class
would perform an item at the event, which all the students received with loud joy and celebration."</div>
            <div class="worked"><b>Précis (45 words):</b> "At last term's meeting, the principal praised the hard-working students,
thanked the patient teachers, and announced a cultural day next month,
at which every class would perform; the announcement delighted all the students."
(Count: At-1 the-2 last-3 term's-4 meeting-5 the-6 principal-7 praised-8 the-9 hard-working-10 students-11 thanked-12 the-13 patient-14 teachers-15 and-16 announced-17 a-18 cultural-19 day-20 next-21 month-22 at-23 which-24 every-25 class-26 would-27 perform-28 the-29 announcement-30 delighted-31 all-32 the-33 students-34 = about 34–45 depending on hyphenation — safely within a 50-word limit.)</div>

            <h3>9. Try these (with answers)</h3>
            <p><b>Practice passage:</b> "When Ada first entered the boarding school, she cried every night
because she missed her mother.However, the matron, a strict-looking woman with a kind face,
soon became her refuge
The woman taught her to sew, taught her to weave, and taught her to budget her small allowance.Before the session ended, Ada had saved enough money to buy her mother a gift,
and she returned home proud and happy."</p>
            <ul>
              <li><b>Q1.</b> List the three bones of the passage. <i>Ans: Ada missed home at first;
the matron taught her skills (sewing, weaving, budgeting);
she returned proud with a gift for her mother.</i></li>
              <li><b>Q2.</b> Which feathers should be removed? <i>Ans: "strict-looking woman with a kind face",
"taught her to sew, taught her to weave…" (repetition → "taught her skills"),
"proud and happy" (one is enough).</i></li>
              <li><b>Q3.</b> Write a summary of no more than 40 words. <i>Ans (model): "Although Ada missed her mother when she first entered the boarding school,
the kind matron taught her skills and budgeting;
Ada eventually saved enough to buy her mother a gift and returned home proud." (about 38 words).</i></li>
              <li><b>Q4.</b> Why is "the matron, a strict-looking woman with a kind face" removed?
<i>Ans: description is feathers; the bone is simply "the matron".</i></li>
              <li><b>Q5.</b> Which linking words does the model summary use?
<i>Ans: Although (contrast), and (addition), eventually (sequence).</i></li>
              <li><b>Q6.</b> True or false: a summary may add facts that are not in the passage.
<i>Ans: false — inference is allowed, invention is not.</i></li>
              <li><b>Q7.</b> How many words is "She didn't buy the part-time uniform"?
<i>Ans: 6 (She, didn't, buy, the, part-time, uniform).</i></li>
              <li><b>Q8.</b> Paraphrase, not summarize: "she cried every night".
<i>Ans: e.g. "she wept each night" / "she went to sleep in tears every night".</i></li>
            </ul>
            <div class="formula">SUMMARY: A summary or précis keeps the bones of a passage — who did what and the result — and removes the feathers: examples, repetition, description, quoted speech, and decorative numbers; the method is to read twice while marking one main point per paragraph, draft the bones, join them with linking words (then, however, because, finally), convert to your own words while keeping proper nouns and key figures, then honestly count and trim; fold direct speech into indirect speech with the usual pronoun and tense shifts; count hyphenated words and contractions as one; and avoid the penalty list — copying, overlength, list form, first person, invented facts, careless grammar — because a précis is graded first on faithful compression, then on the quality of your English.</div>

'''

title = 'Summary Writing & précis'
assert '`' not in CONTENT and '${' not in CONTENT
pat = re.compile(r"\n(\s*)title: '" + re.escape(title) + "',")
hits = list(pat.finditer(s))
assert len(hits) == 1, (title, len(hits))
k = hits[0].end()
ci = s.index('content: `', k) + 10
ce = s.index('`', ci)
s = s[:ci] + CONTENT + s[ce:]
print(title, '->', len(CONTENT), 'chars | svg:', '<svg' in CONTENT)

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
