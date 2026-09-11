# deep_eng1c.py — English JSS1 deep lesson 3/4: Comprehension & Summary Basics. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. What a comprehension passage really is</h3>
            <p>A comprehension passage is a short text followed by questions that test three skills at once: <b>reading</b> (did you actually take in what was written?), <b>understanding</b> (can you explain it, not just repeat it?) and <b>expression</b> (can you write your answer in correct sentences?). The passage is never "too hard" — every answer is either inside the text or one small step of thought away from it. Your job is to find it, prove it and write it neatly.</p>
            <ul>
              <li>Most questions can be answered <b>in your own words</b> — this earns more marks than copying the passage word for word.</li>
              <li>Some questions lift a phrase on purpose ("the writer says the market was 'a sea of noise' — what does this mean?") — here you must <b>explain</b> the borrowed words.</li>
              <li>Always answer in <b>complete sentences</b>; a one-word answer loses the expression mark even when it is right.</li>
            </ul>

            <h3>2. The three-pass method (read smart, not long)</h3>
            <svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Flowchart of the three-pass comprehension method: first read the questions, then skim the passage for the gist, then hunt for answers line by line\">\n              <rect x=\"12\" y=\"45\" width=\"130\" height=\"60\" rx=\"10\" fill=\"#4f46e5\"/>\n              <text x=\"77\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\">PASS 1 (2 min)</text>\n              <text x=\"77\" y=\"86\" text-anchor=\"middle\" font-size=\"9\" fill=\"#e0e7ff\">Read the QUESTIONS first</text>\n              <path d=\"M142 75 L166 75\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrC)\"/>\n              <defs><marker id=\"arrC\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0 L6 3 L0 6\" fill=\"none\" stroke=\"#334155\" stroke-width=\"1.5\"/></marker></defs>\n              <rect x=\"166\" y=\"45\" width=\"130\" height=\"60\" rx=\"10\" fill=\"#10b981\"/>\n              <text x=\"231\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\">PASS 2 (3 min)</text>\n              <text x=\"231\" y=\"86\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d1fae5\">Skim the passage for gist</text>\n              <path d=\"M296 75 L320 75\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrC)\"/>\n              <rect x=\"320\" y=\"45\" width=\"130\" height=\"60\" rx=\"10\" fill=\"#f59e0b\"/>\n              <text x=\"385\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#78350f\">PASS 3</text>\n              <text x=\"385\" y=\"86\" text-anchor=\"middle\" font-size=\"9\" fill=\"#78350f\">Hunt answers line by line</text>\n              <text x=\"231\" y=\"132\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"700\" fill=\"#475569\">Questions first = you read with a purpose, not on autopilot.</text>\n            </svg>
            <ul>
              <li><b>Pass 1:</b> read the questions before the passage. Underline keywords (names, numbers, "why", "how"). Now your brain hunts while it reads.</li>
              <li><b>Pass 2:</b> read the passage once, fast, for the story: who, where, what happened, how it ended. Do not stop at hard words — the meaning usually arrives later in the sentence.</li>
              <li><b>Pass 3:</b> go question by question; locate the line that carries the answer; underline it lightly; then write your answer in your own words.</li>
            </ul>

            <h3>3. In your own words: the mark multiplier</h3>
            <p>"In your own words" means say the same idea with different grammar and vocabulary. Technique: read the sentence, look away, and explain it as if telling a friend. Then check you kept the <b>key facts</b> (names, numbers, causes).</p>
            <div class=\"worked\"><b>Worked example:</b> Passage: "The hunters trekked for three days through the forest before they finally sighted the rogue elephant near the river." Question: In your own words, say how the hunters found the elephant.<br>
            Model answer: "The hunters walked through the forest for three days and at last saw the elephant close to a river." (trekked → walked; sighted → saw; near → close to. Same facts, new clothes.)</div>
            <div class=\"formula\">TRAP: copying the whole sentence gets zero "own words" credit even when correct. Change at least the verb and the structure; keep proper nouns and figures exactly as they are.</div>

            <h3>4. Guessing word meanings from context</h3>
            <p>Exams always ask "What does the word X mean as used in the passage?" Use the clues around it:</p>
            <ul>
              <li><b>Explanation clue:</b> "The man was <i>frugal</i>, spending money only on what he truly needed." → frugal = careful with money.</li>
              <li><b>Contrast clue (but, unlike, however):</b> "Ada was <i>timid</i>, but her sister faced the crowd boldly." → timid = shy, not bold.</li>
              <li><b>Example clue:</b> "They ate <i>delicacies</i> such as pounded yam, fried plantain and peppered snails." → delicacies = special tasty foods.</li>
              <li><b>Same-word family clue:</b> if "inherit" appears, "inheritance" elsewhere can confirm the meaning of receiving from someone.</li>
            </ul>

            <h3>5. Main idea vs detail; the title test</h3>
            <p>The <b>main idea</b> is the one point every paragraph serves; <b>details</b> are the examples and numbers that hold it up. A fast test: pretend you must give the passage a title — a title names the main idea. "Kunle's New Bicycle" is a detail-level title if the passage is really about "How Kunle Learnt Responsibility". Questions like "Which of these best summarises the passage?" are title questions in disguise.</p>

            <h3>6. Inference: reading between the lines</h3>
            <p>Some answers are not written; they are <b>implied</b>. You combine what the text says with what anybody knows.</p>
            <div class=\"worked\"><b>Worked example:</b> "Bola opened her umbrella before stepping out." What can you infer? → It was raining (or about to rain). The passage never says "rain", yet the umbrella gives it away. Inference = text clue + common sense, nothing more. Never infer beyond the evidence.</div>

            <h3>7. Summary writing: keep the bones, drop the feathers</h3>
            <p>A summary is the passage squeezed to its <b>main points</b>, in your own words, in connected sentences. Keep: the who, the main events, the outcome. Drop: examples, repetitions, descriptions, direct speech, numbers that only decorate.</p>
            <ul>
              <li>Step 1: read and number the main idea of each paragraph in the margin (one short line each).</li>
              <li>Step 2: join those lines with linkers (then, however, because, finally) into smooth sentences.</li>
              <li>Step 3: check the length the question asks (e.g. "not more than 60 words") and count honestly.</li>
            </ul>
            <div class=\"worked\"><b>Worked example (compression):</b> Original (42 words): "The teacher, who had been very angry with the class because of the noise they made the previous day, walked into the classroom, looked at everyone silently for a long moment, and then, to everybody's surprise, smiled." Summary (16 words): "The teacher, angry about the previous day's noise, surprised the class by smiling." Same story, one third of the words.</div>

            <h3>8. Classic comprehension traps</h3>
            <ul>
              <li>Answering the question you <b>expected</b>, not the one printed. Re-read the question after writing the answer.</li>
              <li>Using "he/she/it/they" in your answer without naming who — the examiner's paper has no passage in front of it; write "the teacher", not "he".</li>
              <li>Giving TWO answers to a one-answer question ("it was raining and also windy") — if one is wrong, the mark dies.</li>
              <li>Spending 15 minutes on question (a) and rushing (f). Budget: roughly one minute per mark.</li>
            </ul>

            <h3>9. Try these (with answers)</h3>
            <p><b>Mini passage:</b> "When the rains failed for the second year, the farmers of Udene village stopped planting maize and began to grow millet, which needs far less water. At first the children laughed at the strange grain, but after the first harvest every compound cooked millet porridge with pride, and no family went hungry that dry season."</p>
            <ul>
              <li><b>Q1.</b> Why did the farmers change from maize to millet? <i>Ans: because the rains had failed two years in a row and millet needs much less water.</i></li>
              <li><b>Q2.</b> What does "the rains failed" mean? <i>Ans: little or no rain fell (drought).</i></li>
              <li><b>Q3.</b> In your own words, say how the children first felt about millet. <i>Ans: they thought it was funny/strange and mocked it.</i></li>
              <li><b>Q4.</b> What can you infer about the harvest? <i>Ans: it was good/successful, since every family ate and none went hungry.</i></li>
              <li><b>Q5.</b> Give a suitable title. <i>Ans: e.g. "How Udene Village Beat the Drought" or "From Maize to Millet".</i></li>
              <li><b>Q6.</b> Summarise the passage in not more than 25 words. <i>Ans: e.g. "After two dry years, Udene farmers switched from maize to millet; the successful harvest ended hunger and won everyone over." (23 words)</i></li>
              <li><b>Q7.</b> Which word in the passage means "household/family home"? <i>Ans: compound.</i></li>
              <li><b>Q8.</b> True or false: the children liked millet immediately. <i>Ans: false — they laughed at it at first.</i></li>
            </ul>
            <div class=\"formula\">SUMMARY: comprehension rewards method, not luck — read the questions first, skim for gist, then hunt line by line; answer in complete sentences and in your own words while keeping names and numbers exact; use explanation, contrast and example clues to crack difficult vocabulary; separate the main idea (the title test) from supporting details; infer only one step beyond the evidence; and summarise by keeping each paragraph's single main point, joining the points with linkers, and counting words honestly.</div>

'''

title = 'Comprehension & Summary Basics'
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
