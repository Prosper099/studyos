# deep_btech1a.py — Basic Tech JSS1 deep lesson 1/4: Technology in Everyday Life. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. What is technology?</h3>
            <p><b>Technology</b> is the application of knowledge, tools and skills to solve human problems and make work easier. <b>Basic Technology</b> is the foundation subject that introduces you to how things are made, how tools and machines work, how materials behave, and how to work safely and neatly with your hands. Everything around you — your chair, your phone, the road, the light bulb — is technology.</p>
            <ul>
              <li>Technology is NOT only computers and phones: a broom, a calabash, a bicycle and a bridge are all technology.</li>
              <li>Technology answers the question: "How can we do this <b>easier, faster, better or safer</b>?"</li>
              <li>Science discovers <i>why</i> things happen; technology uses that knowledge to <i>make</i> useful things. Science says water boils at 100°C; technology builds the kettle.</li>
            </ul>
            <div class=\"worked\"><b>Worked example:</b> Carrying water on your head from a stream = old technology. Boring a borehole with a hand pump = improved technology. Piping treated water into the house = advanced technology. Same problem (we need water), three levels of technology — each one reduces human effort.</div>

            <h3>2. Simple vs advanced technology around you</h3>
            <table>
              <tr><th>Task</th><th>Simple technology</th><th>Advanced technology</th></tr>
              <tr><td>Grinding pepper</td><td>grinding stone</td><td>blender</td></tr>
              <tr><td>Sweeping</td><td>broom (broom made from palm fronds)</td><td>vacuum cleaner</td></tr>
              <tr><td>Clearing a farm</td><td>cutlass and hoe</td><td>tractor</td></tr>
              <tr><td>Sending a message</td><td>drum beats, town crier</td><td>mobile phone, internet</td></tr>
              <tr><td>Lighting the house</td><td>candle, lantern, torch</td><td>electric bulb, solar light</td></tr>
              <tr><td>Preserving food</td><td>drying/smoking</td><td>refrigerator</td></tr>
            </table>
            <p>Simple technology is not "bad" technology — it is cheap, easy to repair and often needs no electricity. Exams accept both, but you must be able to <b>compare</b> them: speed, effort, cost, energy source and skill required.</p>

            <h3>3. A short history: the four ages of technology</h3>
            <ul>
              <li><b>Stone Age:</b> tools of stone, wood and bone; hunting and gathering; fire discovered.</li>
              <li><b>Metal Age:</b> smelting gave bronze and iron — hoes, cutlasses, spears; farming expanded.</li>
              <li><b>Machine Age (Industrial Revolution):</b> steam engines, factories, railways; machines replaced muscle.</li>
              <li><b>Information Age:</b> computers, phones and the internet; machines now handle <i>information</i>, not just force.</li>
            </ul>
            <div class=\"formula\">MEMORY HOOK: Stone → Metal → Machine → Information. "Some Men Make Iron" doesn't fit? Use the story: first we shaped <b>stones</b>, then we smelted <b>metals</b>, then we built <b>machines</b>, now we share <b>information</b>.</div>

            <h3>4. Benefits of technology in daily life</h3>
            <ul>
              <li><b>Home:</b> cooking (gas cooker), preservation (fridge), cleaning (iron, blender), comfort (fan).</li>
              <li><b>School:</b> printing, computers, projectors, the bell or PA system, even the desk you sit on.</li>
              <li><b>Health:</b> vaccines, X-ray machines, microscopes, ambulances — people live longer.</li>
              <li><b>Transport:</b> bicycles, buses, trains, aeroplanes — distance shrank.</li>
              <li><b>Communication:</b> from town crier to smartphone — information now travels instantly.</li>
              <li><b>Work and wealth:</b> machines multiply human effort; one tractor farms what a hundred hoes would.</li>
            </ul>

            <h3>5. The other side: negative effects of technology</h3>
            <ul>
              <li><b>Pollution:</b> factory smoke, vehicle exhaust, plastic and electronic waste.</li>
              <li><b>Unemployment:</b> machines replace some workers (a combine harvester replaces many farmhands).</li>
              <li><b>Health issues:</b> too much screen time, noise pollution, poor posture.</li>
              <li><b>Loss of skills and culture:</b> people forget hand crafts; some traditions fade.</li>
              <li><b>Crime and danger:</b> weapons become deadlier; fraud travels by phone too.</li>
            </ul>
            <p>Exam answers on "effects of technology" score best when you give <b>both sides with an example each</b> — never write only the good or only the bad.</p>

            <h3>6. Technology as a system: input → process → output</h3>
            <p>Every technological system takes <b>inputs</b> (materials, energy, people, information), applies a <b>process</b> (the work done) and produces an <b>output</b> (product or service), sometimes with <b>feedback</b> to improve.</p>
            <svg viewBox=\"0 0 460 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Input process output diagram: flour and heat enter as inputs, baking is the process, bread is the output, with a feedback arrow from output back to process\">\n              <rect x=\"20\" y=\"50\" width=\"110\" height=\"50\" rx=\"10\" fill=\"#4f46e5\"/><text x=\"75\" y=\"72\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\">INPUT</text><text x=\"75\" y=\"88\" text-anchor=\"middle\" font-size=\"9\" fill=\"#e0e7ff\">flour, heat, hands</text>\n              <path d=\"M130 75 L170 75\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrT)\"/>\n              <defs><marker id=\"arrT\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0 0 L6 3 L0 6\" fill=\"none\" stroke=\"#334155\" stroke-width=\"1.5\"/></marker></defs>\n              <rect x=\"172\" y=\"50\" width=\"110\" height=\"50\" rx=\"10\" fill=\"#f59e0b\"/><text x=\"227\" y=\"72\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#78350f\">PROCESS</text><text x=\"227\" y=\"88\" text-anchor=\"middle\" font-size=\"9\" fill=\"#78350f\">mixing + baking</text>\n              <path d=\"M282 75 L322 75\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrT)\"/>\n              <rect x=\"324\" y=\"50\" width=\"110\" height=\"50\" rx=\"10\" fill=\"#10b981\"/><text x=\"379\" y=\"72\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"800\" fill=\"#fff\">OUTPUT</text><text x=\"379\" y=\"88\" text-anchor=\"middle\" font-size=\"9\" fill=\"#d1fae5\">bread</text>\n              <path d=\"M379 100 C379 128 227 128 227 102\" stroke=\"#64748b\" stroke-width=\"1.8\" fill=\"none\" stroke-dasharray=\"4 3\" marker-end=\"url(#arrT)\"/>\n              <text x=\"300\" y=\"134\" text-anchor=\"middle\" font-size=\"9\" fill=\"#475569\">feedback: too pale? bake longer next time</text>\n            </svg>
            <div class=\"worked\"><b>More examples:</b> Tailoring: input = cloth, thread, skill; process = measuring, cutting, sewing; output = shirt. Phone call: input = your voice + electricity; process = network transmission; output = sound at the other end. Any exam question "describe a technological system" = list these three boxes for any activity you choose.</div>

            <h3>7. Careers born by technology</h3>
            <ul>
              <li><b>Craft and trade:</b> carpenter, welder, tailor, mechanic, bricklayer, electrician.</li>
              <li><b>Professional:</b> engineer (civil, mechanical, electrical), architect, technologist, draughtsman.</li>
              <li><b>Modern:</b> computer programmer, web designer, phone repairer, solar installer.</li>
            </ul>
            <p>Basic Technology is the seed of all these careers — it teaches the language of tools, materials, drawing and safety that every one of them speaks.</p>

            <h3>8. Technology and the Nigerian home — quick inventory</h3>
            <ul>
              <li>Energy converters: gas cooker (chemical → heat), iron (electrical → heat), fan (electrical → motion), bulb (electrical → light).</li>
              <li>Communication: radio, television, mobile phone.</li>
              <li>Work-savers: blender, grinder, washing board → washing machine, borehole pump.</li>
              <li>Exam favourite: "state the energy change in a pressing iron" — electrical energy to heat energy. Memorise the common conversions.</li>
            </ul>

            <h3>9. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Define technology. <i>Ans: the application of knowledge, tools and skills to solve human problems and make work easier.</i></li>
              <li><b>Q2.</b> Give one simple and one advanced technology for grinding. <i>Ans: grinding stone; blender.</i></li>
              <li><b>Q3.</b> Name the four ages of technology in order. <i>Ans: stone, metal, machine, information.</i></li>
              <li><b>Q4.</b> State two benefits of technology in health. <i>Ans: any two — vaccines, X-ray, microscope, ambulance.</i></li>
              <li><b>Q5.</b> State two negative effects of technology. <i>Ans: any two — pollution, unemployment, e-waste, screen-time health issues.</i></li>
              <li><b>Q6.</b> In the bread system, what is the process? <i>Ans: mixing and baking (the work done on the inputs).</i></li>
              <li><b>Q7.</b> What energy change occurs in an electric fan? <i>Ans: electrical energy → kinetic (motion) energy.</i></li>
              <li><b>Q8.</b> Name two careers in technology. <i>Ans: any two — electrician, engineer, architect, carpenter, programmer.</i></li>
              <li><b>Q9.</b> Why is simple technology still useful in Nigeria? <i>Ans: cheap, easy to repair, often needs no electricity/fuel.</i></li>
              <li><b>Q10.</b> Which age introduced the steam engine and factories? <i>Ans: the machine age (Industrial Revolution).</i></li>
            </ul>
            <div class=\"formula\">SUMMARY: technology is applied knowledge aimed at making work easier — from grinding stones to smartphones; it developed through the stone, metal, machine and information ages; its benefits touch home, school, health, transport and communication while its costs include pollution, unemployment and lost skills; every technological system can be described as input → process → output with feedback; energy-conversion examples (iron: electrical to heat; fan: electrical to motion) are exam gold; and the subject seeds careers from carpentry to engineering — understand these and "technology in everyday life" becomes free marks.</div>

'''

title = 'Technology in Everyday Life'
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
