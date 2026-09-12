# deep_phy2a.py — Physics SS2 deep: Heat Energy & Thermal Expansion. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

CONTENT = '''
            <h3>1. Heat and temperature: not the same thing</h3>
            <p><b>Heat</b> is energy in transit — it flows from a hot body to a cold one and is measured in <b>joules</b>. <b>Temperature</b> is how hot or cold a body is — a measure of the average kick of its molecules — measured in degrees Celsius or kelvin. A cup of boiling water and a swimming pool of warm water: the pool holds more heat, the cup has the higher temperature. That sentence alone answers a shocking number of exam questions.</p>
            <ul>
              <li>Thermometers use a thermometric property that changes with temperature: mercury or alcohol expanding, resistance changing, a thermocouple voltage.</li>
              <li>Scales: water freezes at 0 °C / 273 K and boils at 100 °C / 373 K. <b>K = °C + 273.</b></li>
              <li>Body temperature ≈ 37 °C = 310 K; room temperature ≈ 27 °C = 300 K — examiners adore 27 °C and 300 K.</li>
            </ul>
            <div class="formula">TRAP: heat is ENERGY (joules); temperature is a READING (°C or K). &apos;The heat of the water is 60 °C&apos; is wrong English in physics — the temperature is 60 °C.</div>

            <h3>2. Thermal expansion: things grow when heated</h3>
            <ul>
              <li><b>Solids:</b> the ball-and-ring experiment — a heated ball stops passing through its ring until it cools. Railway lines get expansion gaps; bridges sit on rollers; overhead cables are hung slack so winter contraction cannot snap them.</li>
              <li><b>Bimetallic strip:</b> brass expands more than iron, so a bonded strip bends when heated — the heart of thermostats and fire alarms.</li>
              <li><b>Liquids:</b> expand more than solids — which is exactly how thermometer bulbs work. Heat a full flask and it first dips (glass expands first) then rises (liquid catches up) — a classic trick question.</li>
              <li><b>Gases:</b> expand most of all — a balloon on a warmed flask inflates; a soft ball firms up in hot sun.</li>
              <li><b>Water&apos;s anomaly:</b> between 0 °C and 4 °C water CONTRACTS on heating; at 4 °C it is densest. That is why lakes freeze top-down and fish survive below the ice.</li>
            </ul>
            <div class="diagram"><svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ball and ring experiment: cold ball passes through the ring, heated ball is too big and rests on top of the ring">\n              <rect x="8" y="8" width="444" height="174" rx="10" fill="#fff1f2" stroke="#9f1239" stroke-width="2"/>\n              <circle cx="110" cy="80" r="34" fill="#94a3b8" stroke="#334155" stroke-width="2"/>\n              <line x1="110" y1="114" x2="110" y2="160" stroke="#334155" stroke-width="4"/>\n              <ellipse cx="200" cy="90" rx="14" ry="40" fill="none" stroke="#9f1239" stroke-width="5"/>\n              <path d="M150 80 h20 m-6 -6 l6 6 -6 6" stroke="#16a34a" stroke-width="3" fill="none"/>\n              <text x="70" y="30" font-size="10" font-weight="800" fill="#9f1239">COLD: passes through</text>\n              <circle cx="330" cy="52" r="44" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>\n              <line x1="330" y1="96" x2="330" y2="160" stroke="#92400e" stroke-width="4"/>\n              <ellipse cx="330" cy="118" rx="14" ry="40" fill="none" stroke="#9f1239" stroke-width="5"/>\n              <text x="270" y="170" font-size="10" font-weight="800" fill="#9f1239">HEATED: too big — it rests on the ring</text>\n              <g font-size="9.5" fill="#881337" font-weight="700">\n                <text x="24" y="176">Heat makes particles vibrate wider — the solid takes more room.</text>\n              </g>\n            </svg></div>

            <h3>3. Heat transfer: conduction, convection, radiation</h3>
            <table>
              <tr><th>Mode</th><th>How</th><th>Everyday proof</th></tr>
              <tr><td>Conduction</td><td>vibrating particles hand energy along; needs matter</td><td>metal spoon in soup gets hot; metals conduct best, air worst</td></tr>
              <tr><td>Convection</td><td>heated fluid rises, cold sinks — currents</td><td>boiling pot swirls; sea breeze by day, land breeze by night</td></tr>
              <tr><td>Radiation</td><td>infrared waves; needs NO medium; crosses a vacuum</td><td>sun&apos;s heat reaches Earth; dull black surfaces absorb, shiny ones reflect</td></tr>
            </table>
            <ul>
              <li><b>Insulators exploit trapped air or vacuum:</b> wool, foam, the vacuum flask&apos;s silvered double wall (vacuum kills conduction and convection; silvering kills radiation).</li>
              <li><b>Conductors exploited:</b> cooking pots (copper/aluminium bottoms), heat sinks on electronics.</li>
              <li>White clothes in the sun, black radiators in the room — surface colour and texture decide radiation behaviour.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> why does a metal bench feel colder than a wooden one at the same temperature? Both are equally warm — but metal conducts heat out of your skin fast while wood does not. Feeling cold is feeling your own heat leaving.</div>

            <h3>4. Heat quantities: c and L</h3>
            <ul>
              <li><b>Specific heat capacity c:</b> energy to raise 1 kg by 1 K (J/kg·K). Water&apos;s is huge (4200) — which is why coasts stay mild and engines are water-cooled.</li>
              <li><b>Q = m c Δθ.</b> Heat 2 kg of water from 30 °C to 80 °C: Q = 2 × 4200 × 50 = 420,000 J.</li>
              <li><b>Specific latent heat L:</b> energy to change 1 kg&apos;s state at constant temperature. <b>Q = m L.</b> Melting ice L ≈ 336,000 J/kg; boiling water L ≈ 2,260,000 J/kg — boiling away a kettle takes far more energy than heating it up.</li>
              <li><b>Evaporation vs boiling:</b> evaporation happens at any temperature, from the surface, slowly; boiling happens at one temperature, throughout, with bubbles. Evaporation cools — sweating, water in clay pots, dogs panting.</li>
            </ul>
            <div class="formula">TRAP: during melting or boiling the temperature STAYS FLAT while energy pours in — the energy goes into breaking bonds (latent), not raising temperature. A flat section on a heating graph is a change of state.</div>

            <h3>5. Gas behaviour preview: pressure, volume, temperature</h3>
            <ul>
              <li>Heat a sealed gas and its pressure rises (molecules kick harder); let it expand and it cools. The gas laws (Boyle, Charles, pressure) tie P, V and T together — full treatment lives with the chemists&apos; gas laws, but know the shapes: at constant temperature, doubling pressure halves volume.</li>
              <li>Aerosol cans carry &apos;do not burn&apos; warnings because heat drives the pressure up until metal surrenders.</li>
            </ul>

            <h3>6. Try these (with answers)</h3>
            <ul>
              <li><b>Q1.</b> Distinguish heat from temperature. <i>Ans: heat is energy in joules; temperature is the hotness reading in °C or K.</i></li>
              <li><b>Q2.</b> Convert 37 °C to kelvin. <i>Ans: 310 K.</i></li>
              <li><b>Q3.</b> Why do railway lines have gaps? <i>Ans: room for thermal expansion in hot weather.</i></li>
              <li><b>Q4.</b> Device that uses a bimetallic strip? <i>Ans: thermostat (or fire alarm).</i></li>
              <li><b>Q5.</b> At what temperature is water densest? <i>Ans: 4 °C.</i></li>
              <li><b>Q6.</b> Which state expands most on heating? <i>Ans: gases.</i></li>
              <li><b>Q7.</b> How does the Sun&apos;s heat reach us? <i>Ans: radiation — conduction and convection need a medium.</i></li>
              <li><b>Q8.</b> Why does a vacuum flask keep tea hot? <i>Ans: vacuum stops conduction/convection; silvered walls stop radiation.</i></li>
              <li><b>Q9.</b> Q to heat 0.5 kg of water by 10 K (c = 4200)? <i>Ans: 21,000 J.</i></li>
              <li><b>Q10.</b> Energy to melt 2 kg of ice (L = 336,000)? <i>Ans: 672,000 J.</i></li>
              <li><b>Q11.</b> Two differences between evaporation and boiling. <i>Ans: surface vs throughout; any temperature vs fixed; slow vs rapid.</i></li>
              <li><b>Q12.</b> Why does sweating cool you? <i>Ans: the fastest molecules escape as vapour, taking latent heat from the skin.</i></li>
              <li><b>Q13.</b> Why does a metal bench feel colder than wood at the same temperature? <i>Ans: metal conducts heat away from your skin faster.</i></li>
            </ul>
            <div class="formula">SUMMARY: heat is energy in transit (joules) while temperature is the reading (K = °C + 273); heating expands solids, liquids and gases most in that order, explaining rail gaps, slack cables, thermostats and the ball-and-ring trick, with water anomalously densest at 4 °C; heat travels by conduction through matter, convection through fluid currents and radiation across vacuum; heat quantities obey Q = mcΔθ for temperature change and Q = mL for state change, where temperature stands still; and evaporation&apos; surface escape is nature&apos;s refrigerator — the physics of sweat, clay pots and panting dogs.</div>

'''

title = 'Heat Energy & Thermal Expansion'
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
