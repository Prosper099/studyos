# deep_eng1a.py — English JSS1 deep lesson 1/4: Sentence Structure & Composition. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. The two halves of every sentence</h3>
            <p>Every complete sentence in English has two parts: the <b>subject</b> (who or what the sentence is about) and the <b>predicate</b> (what is said about the subject — it always contains the verb). If either half is missing, you do not have a sentence; you have a fragment, and examiners deduct marks for fragments.</p>
            <div class=\"worked\"><b>Worked example:</b> "The pupils cleaned the classroom."<br>
            Subject = <b>The pupils</b>; predicate = <b>cleaned the classroom</b> (verb = cleaned).<br>
            "My younger brother" = fragment (no verb). "Is sleeping on the mat" = fragment (no subject). Joined: "My younger brother is sleeping on the mat." = complete sentence.</div>
            <ul>
              <li>The subject can be one word (<b>Birds</b> fly) or a whole phrase (<b>The tall boy in the blue shirt</b> walks home).</li>
              <li>The predicate always carries a <b>verb</b>; without a verb there is no action or state, so nothing is being said.</li>
              <li>Commands hide their subject: "Close the door." really means "(You) close the door." — the subject <i>you</i> is understood.</li>
            </ul>

            <h3>2. Complete sentence or fragment? The two-question test</h3>
            <p>Before you call a group of words a sentence, ask: (1) <b>Who or what is it about?</b> (2) <b>What is happening or being said?</b> Both questions must have answers inside the words themselves.</p>
            <table>
              <tr><th>Fragment ✗</th><th>What is missing</th><th>Fixed ✓</th></tr>
              <tr><td>Running fast.</td><td>No subject</td><td>He is running fast.</td></tr>
              <tr><td>Under the tree.</td><td>No subject or verb</td><td>We sat under the tree.</td></tr>
              <tr><td>The big red ball.</td><td>No verb</td><td>The big red ball bounced away.</td></tr>
              <tr><td>Because it rained.</td><td>It is a half-idea (dependent clause)</td><td>We stayed inside because it rained.</td></tr>
            </table>
            <div class=\"formula\">TRAP: a group of words beginning with <i>because, although, when, if, after</i> can never stand alone as a sentence. It must lean on a main clause: "When the bell rang" ✗ → "When the bell rang, the students rushed out" ✓.</div>

            <h3>3. Four kinds of sentences (by purpose)</h3>
            <ul>
              <li><b>Statement (declarative)</b> — gives information; ends with a full stop: "Lagos is a busy city."</li>
              <li><b>Question (interrogative)</b> — asks something; ends with a question mark: "Where is your book?"</li>
              <li><b>Command (imperative)</b> — tells someone to do something; ends with a full stop (or !): "Stand up."</li>
              <li><b>Exclamation (exclamatory)</b> — shows strong feeling; ends with !: "What a beautiful morning!"</li>
            </ul>
            <p>Exams love to ask you to <b>rewrite</b> a sentence as another type: "You are late." (statement) → "Are you late?" (question) → "Don't be late!" (command/exclamation). Notice how the verb moves or changes each time.</p>

            <h3>4. Simple, compound and complex sentences</h3>
            <ul>
              <li><b>Simple</b> — one subject + one predicate: "Adaeze reads every night."</li>
              <li><b>Compound</b> — two complete sentences joined by a comma + conjunction (and, but, or, so, yet): "Adaeze reads every night, <b>and</b> she tops her class."</li>
              <li><b>Complex</b> — a main clause plus a dependent clause beginning with because, when, although, if, after, before: "Although the light went off, Adaeze finished her essay by candlelight."</li>
            </ul>
            <div class=\"worked\"><b>Worked example (joining):</b> "It was raining." + "We played football." Joined with <i>but</i>: "It was raining, but we played football." Joined with <i>although</i>: "Although it was raining, we played football." Same two ideas, two different structures — and both are exam-correct.</div>

            <h3>5. Capital letters: the six rules that earn free marks</h3>
            <ul>
              <li>First word of every sentence: "<b>T</b>he bell has rung."</li>
              <li>The pronoun <b>I</b>, wherever it appears: "Musa and <b>I</b> went home."</li>
              <li>Names of people, places, schools, days, months: <b>A</b>mina, <b>K</b>ano, <b>M</b>onday, <b>J</b>anuary. (Seasons like <i>rainy season</i> are NOT capitalised.)</li>
              <li>Titles used with names: <b>M</b>rs Okon, <b>D</b>octor Bello — but not alone: "my teacher".</li>
              <li>Names of languages, nationalities and religions: <b>E</b>nglish, <b>Y</b>oruba, <b>N</b>igerian, <b>I</b>slam, <b>C</b>hristianity.</li>
              <li>First word of a direct quotation and of every line of most poems: She said, "<b>C</b>ome here."</li>
            </ul>

            <h3>6. Punctuation that carries meaning</h3>
            <ul>
              <li><b>Full stop (.)</b> ends statements and commands. <b>Question mark (?)</b> ends questions. <b>Exclamation mark (!)</b> ends strong feeling — use it once, not !!!</li>
              <li><b>Comma (,)</b> marks a small pause: after openers ("After the match, we ate rice."), between items in a list ("pens, pencils and rulers") and before and/but/so when they join two complete sentences.</li>
              <li><b>Apostrophe (')</b> shows ownership (Tunde's bag) or missing letters (don't = do not; can't = cannot).</li>
              <li><b>Quotation marks (" ")</b> wrap the exact words someone said: The teacher said, "Open your books."</li>
            </ul>
            <div class=\"formula\">TRAP: the comma before <i>and</i> only appears when <i>and</i> joins TWO COMPLETE sentences. "I bought bread and milk" needs no comma; "I bought bread, and my brother bought milk" needs one.</div>

            <h3>7. From sentences to composition: the paragraph recipe</h3>
            <p>A good paragraph is one idea wearing three coats: a <b>topic sentence</b> (states the idea), <b>supporting sentences</b> (explain, give examples, tell a small story) and a <b>closing sentence</b> (wraps the idea up). In JSS1 compositions (your school, your best friend, how I spent my last holiday), write 6–10 sentences per paragraph and let each paragraph own ONE idea.</p>
            <div class=\"worked\"><b>Model paragraph:</b> "My favourite subject is Basic Science. <i>(topic)</i> I love it because we do experiments with real things like magnets, plants and springs. Last week we tested which materials conduct electricity, and my group's bulb lit up first. <i>(support)</i> Basic Science makes me feel like a real inventor, so I always sit at the front in that class. <i>(closing)</i>"</div>
            <svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diagram of a paragraph: one topic sentence at the top, three supporting sentences in the middle, one closing sentence at the bottom, connected by arrows\">\n              <rect x=\"130\" y=\"8\" width=\"200\" height=\"30\" rx=\"8\" fill=\"#4f46e5\"/>\n              <text x=\"230\" y=\"27\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\">1. Topic sentence (the idea)</text>\n              <path d=\"M230 38 L230 52\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrE)\"/>\n              <defs><marker id=\"arrE\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0 L6 3 L0 6\" fill=\"none\" stroke=\"#334155\" stroke-width=\"1.5\"/></marker></defs>\n              <rect x=\"60\" y=\"56\" width=\"100\" height=\"26\" rx=\"7\" fill=\"#10b981\"/><text x=\"110\" y=\"73\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\">support 1</text>\n              <rect x=\"180\" y=\"56\" width=\"100\" height=\"26\" rx=\"7\" fill=\"#10b981\"/><text x=\"230\" y=\"73\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\">support 2</text>\n              <rect x=\"300\" y=\"56\" width=\"100\" height=\"26\" rx=\"7\" fill=\"#10b981\"/><text x=\"350\" y=\"73\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\">support 3</text>\n              <path d=\"M230 82 L230 98\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrE)\"/>\n              <rect x=\"130\" y=\"102\" width=\"200\" height=\"30\" rx=\"8\" fill=\"#f59e0b\"/>\n              <text x=\"230\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#78350f\">Closing sentence (wrap it up)</text>\n            </svg>

            <h3>8. Exam traps to dodge</h3>
            <ul>
              <li>Run-on sentences: "We ate rice we slept." → put a full stop, comma + conjunction, or semicolon between complete thoughts.</li>
              <li>Double subjects: "My brother <b>he</b> is tall." — choose one subject only.</li>
              <li>Missing capitals for days, months and names — the number one way students lose "free" marks.</li>
              <li>Using <i>!</i> everywhere in a formal letter. Formal writing stays calm: full stops only.</li>
            </ul>

            <h3>9. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Underline the predicate: "The hungry dog chased the cat." <i>Ans: chased the cat.</i></li>
              <li><b>Q2.</b> Fix the fragment: "After the match." <i>Ans: After the match, we drank zobo. (add a main clause)</i></li>
              <li><b>Q3.</b> Join with <i>so</i>: "The road was flooded. We used the bridge." <i>Ans: The road was flooded, so we used the bridge.</i></li>
              <li><b>Q4.</b> Which type is "What a noisy market!"? <i>Ans: exclamatory.</i></li>
              <li><b>Q5.</b> Add capitals correctly: "on monday, mrs ade and i visited ilorin." <i>Ans: On Monday, Mrs Ade and I visited Ilorin.</i></li>
              <li><b>Q6.</b> Punctuate: "she asked where is my pen" <i>Ans: She asked, "Where is my pen?"</i></li>
              <li><b>Q7.</b> Simple or compound? "Kunle sings and Kunle dances." <i>Ans: compound (two complete clauses joined by and).</i></li>
              <li><b>Q8.</b> Write a topic sentence about "My school compound". <i>Ans: any clear one-idea sentence, e.g. "My school compound is wide and always clean."</i></li>
            </ul>
            <div class=\"formula\">SUMMARY: a complete sentence marries a subject to a predicate; fragments fail the two-question test; sentences state, ask, command or exclaim, and each type wears its own end punctuation; simple, compound and complex structures let you vary your writing; capital letters and commas are free marks with fixed rules; and every paragraph is one idea built from a topic sentence, supporting sentences and a close — master these and composition stops being a gamble.</div>

'''

title = 'Sentence Structure & Composition'
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
