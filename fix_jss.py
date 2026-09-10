"""Fix JSS curriculum structure:
1. remove the 4 empty duplicate `JSS2: [],` keys (JS overwrites them anyway — dead code)
2. move 'Human Body Systems' (a science topic) from Basic Technology JSS2 -> Basic Science JSS2
3. replace Basic Technology JSS3 duplicate of 'Light, Sound & Basic Electricity'
   (byte-identical to the Basic Science topic) with a real Basic Tech topic.
"""
import re

PATH = '/home/user/index.html'
s = open(PATH, encoding='utf-8').read()

def subject_block(name):
    i = s.index("  '%s': {" % name)
    m = re.search(r"\n  '(?!%s)[^']+': \{\n    color:" % name, s[i + 20:])
    return i, i + 20 + m.start()

def topic_span(subj, title):
    """(start, end) of the full `{ ... }` topic object incl. object braces."""
    a0, b0 = subject_block(subj)
    blk = s[a0:b0]
    t = blk.index("title: '%s'," % title)
    start = blk.rfind('\n        {', 0, t)
    nxt_topic = blk.find('\n        {', t + 10)
    nxt_close = min([x for x in (nxt_topic if nxt_topic != -1 else len(blk),
                                 blk.find('\n      ]', t + 10)) if x != -1])
    end = blk.rfind('\n        }', t, nxt_close) + len('\n        }')
    return a0 + start, a0 + end

# ---------- 1. kill empty duplicate JSS2 keys ----------
EMPTY = '\n      JSS2: [\n        {\n        }\n      ],'
n_empty = s.count(EMPTY)
assert n_empty == 4, n_empty
s = s.replace(EMPTY, '')
print('removed 4 empty duplicate JSS2 keys')

# ---------- 2. move Human Body Systems: Basic Tech JSS2 -> Basic Science JSS2 ----------
a, b = topic_span('Basic Technology', 'Human Body Systems')
obj = s[a:b]
# cut it plus the comma separator that follows (it is the last item in its array)
tail = s[b:b + 1]
s = s[:a] + (s[b + 1:] if tail == ',' else s[b:])   # remove object (+ comma if present)
# insert at end of Basic Science JSS2 array
i0, i1 = subject_block('Basic Science')
blk = s[i0:i1]
j = blk.index('JSS2: [')
arr_end = blk.index('\n      ]', j)
last_obj = blk.rfind('\n        }', j, arr_end) + len('\n        }')
insert_at = i0 + last_obj
s = s[:insert_at] + ',\n' + obj.replace('\n        ', '\n        ') + s[insert_at:]
print('moved Human Body Systems -> Basic Science JSS2')

# ---------- 3. replace Basic Tech JSS3 duplicate ----------
NEW_TOPIC = """
        {
          title: 'Machines, Mechanisms & Maintenance',
          tags: ['Simple machines', 'Mechanical advantage', 'Maintenance'],
          summary: 'How levers, pulleys, gears and belts make work easier, how mechanisms turn one motion into another, and why maintaining machines saves money and lives.',
          content: `
            <h3>1. What a machine does</h3>
            <p>A machine never reduces the total <b>work</b> — it makes work <i>easier</i> by trading effort for distance, or by changing the direction of a force. Three numbers describe every machine:</p>
            <div class="formula">Mechanical Advantage (MA) = Load ÷ Effort &nbsp;·&nbsp; Velocity Ratio (VR) = distance moved by effort ÷ distance moved by load &nbsp;·&nbsp; Efficiency = (MA ÷ VR) × 100%</div>
            <p>Friction is why efficiency is always below 100% — oiling and maintaining a machine raises its MA toward its VR.</p>
            <h3>2. The simple machines around you</h3>
            <ul>
              <li><b>Lever</b> — a bar turning on a fulcrum. Class 1: fulcrum in the middle (scissors, crowbar); Class 2: load in the middle (wheelbarrow, bottle opener); Class 3: effort in the middle (broom, your forearm).</li>
              <li><b>Pulley</b> — changes direction; a block-and-tackle multiplies force (VR = number of rope sections supporting the load).</li>
              <li><b>Inclined plane</b> — a ramp: long slope, small effort.</li>
              <li><b>Wheel and axle</b> — steering wheel, door knob, screwdriver.</li>
              <li><b>Gears</b> — toothed wheels that transfer rotation; a small gear driving a big one trades speed for turning force (bicycle low gear uphill).</li>
              <li><b>Belt and chain drives</b> — the fan belt in a generator, the chain on an okada: they carry motion between shafts some distance apart.</li>
            </ul>
            <h3>3. Mechanisms: changing the kind of motion</h3>
            <p>A <b>mechanism</b> converts one type of motion into another. The <b>crank and slider</b> turns the up-down motion of an engine piston into the rotation of the crankshaft (or the reverse, in a water pump). <b>Cams</b> turn rotation into a repeated push (engine valves). <b>Linkages</b> such as the bicycle brake or a windscreen wiper copy and redirect a movement.</p>
            <h3>4. Maintenance: the cheapest repair is prevention</h3>
            <ul>
              <li><b>Preventive maintenance</b> — planned care: cleaning, oiling, tightening, replacing worn parts <i>before</i> failure. Servicing a generator every month is preventive maintenance.</li>
              <li><b>Corrective (breakdown) maintenance</b> — repairing after failure; always costs more time and money.</li>
              <li>Good habits: keep machines clean and dry (rust is a killer in the rainy season), oil moving parts, store tools properly, follow the maker's instructions.</li>
            </ul>
            <h3>Worked example</h3>
            <p><b>A pulley system lifts a load of 600 N with an effort of 200 N. Its velocity ratio is 4. Find MA and efficiency.</b> MA = 600/200 = <b>3</b>. Efficiency = (MA/VR) × 100 = (3/4) × 100 = <b>75%</b>. The missing 25% is friction in the pulley bearings — which is exactly what oiling attacks.</p>
            <h3>5. Safety with machines</h3>
            <p>Guards cover moving belts and gears; loose clothing, hair and jewellery stay away from rotating parts; machines are switched off before cleaning or adjustment. Most workshop injuries happen when someone bypasses a safety guard to "work faster".</p>
            <h3>Exam watch</h3>
            <ul>
              <li>MA and VR are <b>ratios</b> — they have no units; efficiency is a percentage.</li>
              <li>Identify the lever class by what sits in the <b>middle</b>: fulcrum (1), load (2), effort (3).</li>
              <li>Efficiency can never reach 100% in a real machine — friction is unavoidable.</li>
            </ul>
          `,
          cards: [
            { q: 'State the formulae for MA, VR and efficiency.', a: 'MA = Load ÷ Effort; VR = distance moved by effort ÷ distance moved by load; Efficiency = (MA ÷ VR) × 100%. Friction keeps efficiency below 100%.' },
            { q: 'How do you identify the class of a lever?', a: 'Look at what is in the middle: fulcrum in the middle = class 1 (scissors); load in the middle = class 2 (wheelbarrow); effort in the middle = class 3 (broom, forearm).' },
            { q: 'Preventive vs corrective maintenance — which is cheaper and why?', a: 'Preventive maintenance (cleaning, oiling, planned part replacement before failure) is cheaper because corrective maintenance waits for breakdown, which causes more damage, downtime and cost.' }
          ],
          quiz: [
            { q: 'Mechanical advantage is defined as', options: ['effort ÷ load', 'load ÷ effort', 'load × effort', 'VR × efficiency'], correct: 1, exp: 'MA = Load ÷ Effort — how many times the machine multiplies your force.' },
            { q: 'A machine has MA = 4 and VR = 5. Its efficiency is', options: ['20%', '80%', '125%', '9%'], correct: 1, exp: 'Efficiency = MA/VR × 100 = 4/5 × 100 = 80%.' },
            { q: 'Which simple machine is a bottle opener?', options: ['class 1 lever', 'class 2 lever', 'class 3 lever', 'pulley'], correct: 1, exp: 'The load (cap) is between the fulcrum (edge on the cap rim) and the effort (your hand) — load in the middle = class 2.' },
            { q: 'The velocity ratio of a single fixed pulley is', options: ['0', '1', '2', 'depends on the load'], correct: 1, exp: 'Effort moves the same distance as the load, so VR = 1; it only changes the direction of the force.' },
            { q: 'A crank and slider mechanism converts', options: ['rotation into reciprocating motion', 'rotation into electrical energy', 'linear motion into rotation only', 'heat into motion'], correct: 0, exp: 'It turns rotation into back-and-forth (reciprocating) motion — or the reverse, as in an engine where pistons turn the crankshaft.' },
            { q: 'Servicing a generator monthly is an example of', options: ['corrective maintenance', 'preventive maintenance', 'breakdown maintenance', 'design improvement'], correct: 1, exp: 'Planned care before failure = preventive maintenance.' },
            { q: 'Efficiency of a real machine is always', options: ['100%', 'above 100%', 'below 100%', 'equal to its VR'], correct: 2, exp: 'Friction wastes some effort as heat, so MA < VR and efficiency < 100%.' },
            { q: 'On a bicycle, a belt or chain connects the pedal sprocket to the rear wheel sprocket in order to', options: ['increase friction', 'transmit motion between separated shafts', 'reduce the velocity ratio to zero', 'store energy'], correct: 1, exp: 'Belt and chain drives carry rotation between shafts that are some distance apart.' },
            { q: 'Which is a class 3 lever?', options: ['wheelbarrow', 'scissors', 'broom while sweeping', 'crowbar'], correct: 2, exp: 'While sweeping, your top hand (effort) is between the fulcrum (other hand) and the load (brush end).' },
            { q: 'Why are moving belts and gears fitted with guards?', options: ['to look neat', 'to reduce noise', 'to prevent contact injuries', 'to increase VR'], correct: 2, exp: 'Guards stop clothing, hair and hands from being caught in moving parts — the most common workshop injury cause.' }
          ]
        }"""

a, b = topic_span('Basic Technology', 'Light, Sound & Basic Electricity')
old_obj = s[a:b]
assert 'title:' in old_obj and 'quiz:' in old_obj
s = s[:a] + NEW_TOPIC.replace('\n        {', '\n        {', 1) + s[b:]
print('replaced Basic Tech JSS3 duplicate with Machines, Mechanisms & Maintenance')

open(PATH, 'w', encoding='utf-8').write(s)
print('structure fixed')
