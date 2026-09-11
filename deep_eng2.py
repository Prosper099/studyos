# deep_eng2.py — English JSS2 deep lesson: Verb Tenses Made Simple. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. What a tense actually is: time + aspect</h3>
            <p>A verb tense tells you TWO things: <b>when</b> the action happens (past, present, future) and <b>how</b> it happens (simple = plain fact; continuous = in progress; perfect = finished with a link to now). Three times × three aspects give the nine tenses exams test. Master the pattern and you stop memorising and start <i>seeing</i>.</p>
            <svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Timeline of tenses: past on the left, present in the middle, future on the right, with simple, continuous and perfect examples placed on the line\">\n              <path d=\"M20 75 L440 75\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n              <path d=\"M432 69 L440 75 L432 81\" fill=\"#334155\"/>\n              <circle cx=\"90\" cy=\"75\" r=\"6\" fill=\"#f59e0b\"/><text x=\"90\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#b45309\">PAST</text><text x=\"90\" y=\"100\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">She wrote</text><text x=\"90\" y=\"112\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">was writing / had written</text>\n              <circle cx=\"230\" cy=\"75\" r=\"6\" fill=\"#10b981\"/><text x=\"230\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#047857\">PRESENT</text><text x=\"230\" y=\"100\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">She writes</text><text x=\"230\" y=\"112\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">is writing / has written</text>\n              <circle cx=\"370\" cy=\"75\" r=\"6\" fill=\"#4f46e5\"/><text x=\"370\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#4338ca\">FUTURE</text><text x=\"370\" y=\"100\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">She will write</text><text x=\"370\" y=\"112\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">will be writing / will have written</text>\n            </svg>
            <ul>
              <li><b>Simple</b> = the bare fact or habit: "She <b>writes</b> every night."</li>
              <li><b>Continuous</b> = be + -ing, action in progress: "She <b>is writing</b> now."</li>
              <li><b>Perfect</b> = have + past participle, action finished but connected: "She <b>has written</b> three essays (so far)."</li>
            </ul>

            <h3>2. Simple present: habits, facts and the -s rule</h3>
            <ul>
              <li>Use for habits and general truths: "The sun <b>rises</b> in the east." "Musa <b>plays</b> football every Saturday."</li>
              <li>Third person singular (he/she/it) adds -s: walk → walks; but verbs ending in -ch, -sh, -ss, -x, -o add -es: watch → watches, go → goes; consonant + y → -ies: study → studies.</li>
              <li>Questions and negatives borrow <b>do/does</b>: "Does she cook?" "She <b>does not (doesn't)</b> cook." When does appears, the main verb loses its -s: "Does she cook<b>s</b>?" ✗.</li>
              <li>Signal words: every day/week, always, usually, often, sometimes, rarely, never.</li>
            </ul>

            <h3>3. Present continuous: what is happening NOW</h3>
            <ul>
              <li>am/is/are + verb-ing: "I <b>am reading</b>." "They <b>are arguing</b> about football."</li>
              <li>-ing spelling: run → run<b>ning</b> (double the consonant after a short vowel), make → mak<b>ing</b> (drop silent e), sit → sitting, lie → lying, die → dying.</li>
              <li>State verbs normally refuse continuous: know, like, love, believe, belong, want → "I <b>know</b> him", never "I am knowing him" (the classic exam trap).</li>
              <li>Signal words: now, at the moment, look!, listen!, these days.</li>
            </ul>

            <h3>4. Simple past and the irregular army</h3>
            <ul>
              <li>Regular verbs add -ed: play → played, watch → watched. Pronunciation: /t/ after voiceless (walked), /d/ after voiced (played), /ɪd/ after t/d (wanted).</li>
              <li>Irregulars must be memorised — the BECE favourites: go–went–gone, eat–ate–eaten, write–wrote–written, see–saw–seen, take–took–taken, come–came–come, buy–bought–bought, teach–taught–taught, catch–caught–caught, think–thought–thought, give–gave–given, break–broke–broken, speak–spoke–spoken, begin–began–begun, drink–drank–drunk.</li>
              <li>Negatives/questions use <b>did</b> + base form: "She <b>did not go</b>", never "did not went".</li>
              <li>Signal words: yesterday, last week, ago, in 2020, when I was young.</li>
            </ul>
            <div class=\"formula\">TRAP: after <i>did/didn't</i> the verb ALWAYS returns to base form: "Did you eat?" not "Did you ate?" This single error appears in almost every weak script in WAEC history.</div>

            <h3>5. Past continuous: the background music of a story</h3>
            <ul>
              <li>was/were + -ing: "I <b>was sleeping</b> when the light went off." It paints the longer background action.</li>
              <li><b>When</b> usually introduces the short interrupting action (simple past); <b>while</b> introduces the long one: "While I <b>was reading</b>, the phone rang." / "I was reading when the phone <b>rang</b>."</li>
              <li>Two long actions together: "While Mama was cooking, Papa was reading the news." (was/were on both sides).</li>
            </ul>

            <h3>6. Present perfect: the bridge from past to now</h3>
            <ul>
              <li>have/has + past participle: "She <b>has finished</b> her homework (so she is free now)."</li>
              <li>Use with: <b>just</b> (a moment ago), <b>already</b>, <b>yet</b> (questions/negatives), <b>ever/never</b>, <b>since</b> + point in time (since 2020, since Monday), <b>for</b> + length of time (for two years).</li>
              <li>THE trap: present perfect NEVER takes a finished-time word: "I have seen him <b>yesterday</b>" ✗ → "I <b>saw</b> him yesterday." If yesterday/last/ago appears, use simple past.</li>
              <li>"He has gone to school" (he is there now) vs "He has been to school" (he went and returned) — exams ask the difference.</li>
            </ul>

            <h3>7. Past perfect: the earlier of two pasts</h3>
            <ul>
              <li>had + past participle: "When I arrived, the bus <b>had left</b>." Two past events; the FIRST one gets had.</li>
              <li>Classic frame: "By the time + simple past, … had + pp": "By the time the teacher came, the boys <b>had disappeared</b>."</li>
              <li>If only ONE past event is mentioned, simple past is enough — do not sprinkle <i>had</i> everywhere like seasoning.</li>
            </ul>

            <h3>8. Future forms: will, going to and arrangements</h3>
            <ul>
              <li><b>will</b> for decisions, promises, predictions: "I <b>will help</b> you." "It <b>will rain</b> tonight."</li>
              <li><b>going to</b> for plans and visible evidence: "She <b>is going to study</b> medicine." "Look at those clouds — it <b>is going to</b> rain."</li>
              <li>Present continuous for fixed arrangements: "We <b>are travelling</b> to Abuja on Friday (tickets bought)."</li>
              <li>Future perfect for "finished by then": "By 6 p.m. I <b>will have finished</b> the assignment." Signal: by then, by tomorrow, by the time.</li>
            </ul>

            <h3>9. Signal-word cheat table</h3>
            <table>
              <tr><th>Signal words</th><th>Usual tense</th></tr>
              <tr><td>every day, always, often</td><td>simple present</td></tr>
              <tr><td>now, look!, at the moment</td><td>present continuous</td></tr>
              <tr><td>yesterday, ago, last week</td><td>simple past</td></tr>
              <tr><td>while, when (interrupted action)</td><td>past continuous + simple past</td></tr>
              <tr><td>since, for, just, already, yet, ever</td><td>present perfect</td></tr>
              <tr><td>by the time, before (two pasts)</td><td>past perfect for the earlier</td></tr>
              <tr><td>tomorrow, next week, soon</td><td>will / going to</td></tr>
              <tr><td>by tomorrow, by 6 p.m.</td><td>future perfect</td></tr>
            </table>

            <h3>10. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> "She ___ (write) a letter now." <i>Ans: is writing.</i></li>
              <li><b>Q2.</b> "They ___ (go) to Enugu last holiday." <i>Ans: went.</i></li>
              <li><b>Q3.</b> "I ___ (know) him since 2019." <i>Ans: have known (not have been knowing).</i></li>
              <li><b>Q4.</b> "While she ___ (cook), the pot fell." <i>Ans: was cooking.</i></li>
              <li><b>Q5.</b> "By the time we reached the station, the train ___ (leave)." <i>Ans: had left.</i></li>
              <li><b>Q6.</b> "Look at the sky! It ___ (go) to rain." <i>Ans: is going to.</i></li>
              <li><b>Q7.</b> Correct the error: "Did you ate the rice?" <i>Ans: Did you eat the rice?</i></li>
              <li><b>Q8.</b> Correct: "I have seen him yesterday." <i>Ans: I saw him yesterday.</i></li>
              <li><b>Q9.</b> "She ___ (teach) us since JSS1." <i>Ans: has taught.</i></li>
              <li><b>Q10.</b> "By next year, he ___ (finish) JSS3." <i>Ans: will have finished.</i></li>
              <li><b>Q11.</b> Negative of "Musa plays chess": <i>Ans: Musa does not play chess.</i></li>
              <li><b>Q12.</b> "The boys ___ (argue) when the principal entered." <i>Ans: were arguing.</i></li>
            </ul>
            <div class=\"formula\">SUMMARY: tense is time (past/present/future) × aspect (simple/continuous/perfect); simple present for habits with the -s rule and do/does support, present continuous for now with state verbs refusing -ing, simple past with its irregular army and did + base form, past continuous as story background with when/while, present perfect as the past-to-now bridge with since/for/just/yet and its no-yesterday law, past perfect for the earlier of two pasts, and will / going to / future perfect for tomorrow's promises, plans and deadlines — read the signal word first and the tense chooses itself.</div>

'''

title = 'Verb Tenses Made Simple'
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
