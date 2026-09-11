# deep_eng1b.py — English JSS1 deep lesson 2/4: Oral English. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. Letters are not sounds</h3>
            <p>English has 26 letters but about 44 sounds. The letter <b>a</b> sounds different in "cat", "car", "cake" and "call" — four sounds from one letter! Oral English exams test whether you can hear and produce the <b>sounds</b>, not the spellings. The five vowel <i>letters</i> are a, e, i, o, u; the other 21 letters are consonant <i>letters</i>. But vowel <i>sounds</i> are about 20 when you count diphthongs.</p>
            <ul>
              <li><b>Vowel sounds</b> are made with an open mouth — air flows freely: /i:/ as in "see", /æ/ as in "cat", /ɔ:/ as in "door".</li>
              <li><b>Consonant sounds</b> are made by blocking or narrowing the air somewhere: lips (/p/, /b/), teeth and tongue (/t/, /d/), throat (/k/, /g/).</li>
              <li>A <b>diphthong</b> is two vowel sounds gliding together: /eɪ/ in "cake", /ɔɪ/ in "boy", /aʊ/ in "mouth".</li>
            </ul>

            <h3>2. The vowel sound map (with Nigerian-friendly examples)</h3>
            <table>
              <tr><th>Sound</th><th>Example words</th><th>Do NOT say</th></tr>
              <tr><td>/i:/ (long e)</td><td>see, seat, he</td><td>"sit" for "seat"</td></tr>
              <tr><td>/ɪ/ (short i)</td><td>sit, chip, him</td><td>stretching it to "seat"</td></tr>
              <tr><td>/e/</td><td>bed, egg, ten</td><td>"bad" for "bed"</td></tr>
              <tr><td>/æ/</td><td>cat, bag, mat</td><td>"cut" for "cat"</td></tr>
              <tr><td>/ɑ:/</td><td>car, fast, ask</td><td>"aks" or a short a</td></tr>
              <tr><td>/ɔ:/</td><td>door, saw, ball</td><td>"dor" with a flat o</td></tr>
              <tr><td>/ʊ/</td><td>book, put, good</td><td>"boo-k" with long oo</td></tr>
              <tr><td>/u:/</td><td>food, shoe, blue</td><td>shortening to "good"</td></tr>
              <tr><td>/ʌ/</td><td>cup, blood, sun</td><td>"cop" for "cup"</td></tr>
              <tr><td>/ɜ:/</td><td>bird, nurse, work</td><td>"bared" for "bird"</td></tr>
            </table>
            <div class=\"formula\">TRAP: minimal pairs are exam favourites — seat/sit, pool/pull, cap/cup, cot/caught. If two words differ only in one vowel sound, that pair can appear in a "choose the word with a different vowel sound" question.</div>

            <h3>3. Consonant confusions to cure</h3>
            <ul>
              <li><b>Voiced vs voiceless pairs:</b> put your fingers on your throat. /b/ buzzes, /p/ does not; /d/ buzzes, /t/ does not; /g/ vs /k/, /v/ vs /f/, /z/ vs /s/. "Vest" and "best" must not sound the same.</li>
              <li><b>sh /s/ and ch /tʃ/:</b> "ship" is not "sip"; "church" is not "tus". The lips push forward for sh and ch.</li>
              <li><b>Final consonants matter:</b> "ten" vs "tend", "cap" vs "cup" — swallowing the last sound loses marks and changes meaning.</li>
              <li><b>No added vowels:</b> "ask" is /ɑ:sk/ (two sounds after the a), not "as-ke"; "desk" is not "des-ke". English does not pay rent for extra vowels.</li>
            </ul>

            <h3>4. Word stress: the music of English</h3>
            <p>Every word of more than one syllable has one syllable that is <b>stressed</b> — said louder, longer and higher: TA-ble, be-GIN, com-PU-ter. Stress can even change a word's class: <b>RE</b>cord (noun, the thing) vs re<b>CORD</b> (verb, the action); <b>PRE</b>sent (gift) vs pre<b>SENT</b> (to show).</p>
            <ul>
              <li>Two-syllable <b>nouns and adjectives</b> usually stress the FIRST syllable: TA-ble, HAP-py, CLI-mate, DOC-tor.</li>
              <li>Two-syllable <b>verbs</b> often stress the SECOND: be-GIN, de-CIDE, ex-PLAIN, for-GET.</li>
              <li>Words ending in -tion, -sion, -ic stress the syllable BEFORE the ending: in-for-MA-tion, de-CI-sion, sci-EN-ti-fic.</li>
              <li>Words ending in -ity and -ography stress two syllables before: u-NI-ver-si-ty, ge-OG-ra-phy.</li>
            </ul>
            <svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Stress diagram: bars showing syllable height for the words teacher, begin and information, with the stressed syllable as the tallest bar\">\n              <text x=\"20\" y=\"20\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">TEA-cher</text>\n              <rect x=\"20\" y=\"30\" width=\"26\" height=\"70\" rx=\"5\" fill=\"#4f46e5\"/><rect x=\"52\" y=\"62\" width=\"26\" height=\"38\" rx=\"5\" fill=\"#c7d2fe\"/>\n              <text x=\"20\" y=\"118\" font-size=\"9\" font-weight=\"700\" fill=\"#475569\">stress 1st</text>\n              <text x=\"150\" y=\"20\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">be-GIN</text>\n              <rect x=\"150\" y=\"62\" width=\"26\" height=\"38\" rx=\"5\" fill=\"#c7d2fe\"/><rect x=\"182\" y=\"30\" width=\"26\" height=\"70\" rx=\"5\" fill=\"#4f46e5\"/>\n              <text x=\"150\" y=\"118\" font-size=\"9\" font-weight=\"700\" fill=\"#475569\">stress 2nd (verb)</text>\n              <text x=\"290\" y=\"20\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">in-for-MA-tion</text>\n              <rect x=\"290\" y=\"66\" width=\"24\" height=\"34\" rx=\"5\" fill=\"#c7d2fe\"/><rect x=\"320\" y=\"66\" width=\"24\" height=\"34\" rx=\"5\" fill=\"#c7d2fe\"/><rect x=\"350\" y=\"30\" width=\"24\" height=\"70\" rx=\"5\" fill=\"#4f46e5\"/><rect x=\"380\" y=\"70\" width=\"24\" height=\"30\" rx=\"5\" fill=\"#c7d2fe\"/>\n              <text x=\"290\" y=\"118\" font-size=\"9\" font-weight=\"700\" fill=\"#475569\">-tion: stress before it</text>\n            </svg>

            <h3>5. Sentence stress and intonation</h3>
            <ul>
              <li>In a sentence we stress the <b>content words</b> (nouns, main verbs, adjectives, adverbs) and glide over the small words (is, the, of, to): "The BOYS are PLAYing BALL in the YARD."</li>
              <li><b>Falling tune</b> (voice goes down at the end): statements ("I live in JOS.") and WH-questions ("WHERE is your bag?").</li>
              <li><b>Rising tune</b> (voice goes up): yes/no questions ("Are you COMing?") — this is the number one oral English test item.</li>
              <li><b>Question tags</b> flip: "You are a student, aren't you?" (falling = expecting yes as a fact; rising = a real question).</li>
            </ul>
            <div class=\"worked\"><b>Worked example (exam style):</b> "Choose the correct stress pattern of COMfortable." Syllables: com-for-ta-ble (4). Stress falls on the FIRST: /KOM-f-t-bl/. Clap the word as you say it; the loudest clap is the stress.</div>

            <h3>6. Classic Nigerian oral English traps</h3>
            <ul>
              <li>"ask" = /ɑ:sk/, never "aks"; "breakfast" = /BREK-fəst/, not "break-fast" with a long a.</li>
              <li>"cover" vs "cover"? Watch pairs like "cloTH" (fabric) vs "CLOthes" (what you wear) — different words, different sounds.</li>
              <li>"world" is one syllable (/wɜ:ld/) — do not say "wor-ld". "Girl", "whirl" behave the same.</li>
              <li>"probably" = PRO-ba-bly (3 claps), not "pro-ba-bi-li-ty" (5).</li>
              <li>Stress shift changes meaning: "a CONtest" (the event) vs "to conTEST" (to challenge); "a SUspect" vs "to susPECT".</li>
            </ul>

            <h3>7. Rhymes and same-sound hunting</h3>
            <p>Exams ask: "Which word rhymes with <i>through</i>?" (blue, not though). Rhyme means the <b>final vowel + consonant sound</b> matches, whatever the spelling: "through" /u:/ rhymes with "blue" /u:/; "great" rhymes with "late", not with "great-ly anything". Train your ear with sound families: /i:/ (see, sea, he, key), /eɪ/ (day, weigh, they, eight), /ɔ:/ (saw, door, floor, more).</p>

            <h3>8. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Which word has a different vowel sound: seat, sheep, ship, bead? <i>Ans: ship (/ɪ/ against /i:/).</i></li>
              <li><b>Q2.</b> Stress pattern of "begin"? <i>Ans: be-GIN.</i></li>
              <li><b>Q3.</b> "Information" is stressed on which syllable? <i>Ans: the third (in-for-MA-tion).</i></li>
              <li><b>Q4.</b> Which tune for "Can you swim?" <i>Ans: rising (yes/no question).</i></li>
              <li><b>Q5.</b> Which word rhymes with "boy"? <i>Ans: joy (same /ɔɪ/ diphthong).</i></li>
              <li><b>Q6.</b> Choose: "The PREsent" or "the preSENT" for a gift? <i>Ans: PREsent (noun = first-syllable stress).</i></li>
              <li><b>Q7.</b> How many syllables in "comfortable"? <i>Ans: four (com-for-ta-ble).</i></li>
              <li><b>Q8.</b> Which pair is voiced/voiceless: b/p or m/n? <i>Ans: b/p.</i></li>
              <li><b>Q9.</b> Say correctly: "world". <i>Ans: one syllable, /wɜ:ld/.</i></li>
              <li><b>Q10.</b> Which word does not share a vowel sound: cup, blood, sun, boot? <i>Ans: boot (/u:/ against /ʌ/).</i></li>
            </ul>
            <div class=\"formula\">SUMMARY: letters are not sounds — English squeezes about 44 sounds out of 26 letters; vowel sounds (including gliding diphthongs) and voiced/voiceless consonant pairs are the raw material of oral exams; word stress follows friendly rules (nouns first, verbs second, -tion before the ending) and can switch a word's meaning; sentences stress their content words and fall for statements and WH-questions but rise for yes/no questions; and curing classic traps like "aks", "wor-ld" and five-clap "probably" is free marks in every BECE and JAMB oral paper.</div>

'''

title = 'Oral English: Vowels, Consonants & Stress'
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
