# topup_maths2.py — extend JSS2/JSS3 Maths lessons past the 12k floor + SVG for JSS3. RUN ONCE.
import re

path = 'index.html'
s = open(path, encoding='utf-8').read()

def splice(title, transform):
    global s
    pat = re.compile(r"\n(\s*)title: '" + re.escape(title) + r"',")
    hits = list(pat.finditer(s))
    assert len(hits) == 1, (title, len(hits))
    k = hits[0].end()
    ci = s.index('content: `', k) + 10
    ce = s.index('`', ci)
    c = transform(s[ci:ce])
    s = s[:ci] + c + s[ce:]
    print(title, '->', len(c), 'chars | svg:', '<svg' in c)

EXTRA_J2 = '''
            <h3>13. Directed numbers in daily life</h3>
            <ul>
              <li><b>Temperature:</b> Kano at 38 degC and a freezer at -18 degC: the difference is 38 - (-18) = 56 degC.</li>
              <li><b>Bank accounts:</b> a balance of -₦2,500 is an overdraft (you owe the bank). Depositing ₦10,000 gives -2,500 + 10,000 = +₦7,500.</li>
              <li><b>Altitude:</b> Chappal Waddi (Nigeria's highest peak) is about +2,419 m above sea level; a diver 15 m below is at -15 m.</li>
              <li><b>Goal difference:</b> a team scoring 20 and conceding 31 sits at 20 - 31 = -11 in the league table.</li>
              <li><b>Lifts and basements:</b> going from basement -2 to floor +7 is 7 - (-2) = 9 floors of travel.</li>
            </ul>
            <div class="worked"><b>Worked example (league table):</b> Station Rovers win 3 matches (3 goals each, concede 1), draw 1 (1-1) and lose 2 (0-3). Goals for = 9 + 1 + 0 = 10; against = 3 + 1 + 6 = 10... careful: wins 3 x (3-1): for 9, against 3; draw for 1 against 1; losses for 0 against 6. GF = 10, GA = 10 → goal difference = 0. One more 2-0 win makes it +2.</div>

'''

EXTRA_J3 = '''
            <h3>10. Simple vs compound — watching money grow</h3>
            <p>The gap between simple and compound interest is invisible in year one and unmistakable by year three, because compound interest pays interest on interest.</p>
            <svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart comparing 10,000 naira at 10 percent per year: simple interest grows to 11,000, 12,000 and 13,000 over three years while compound interest grows to 11,000, 12,100 and 13,310, pulling ahead each year">
              <path d="M40 140 L430 140" stroke="#334155" stroke-width="2"/>
              <g font-size="10" fill="#334155" text-anchor="middle" font-weight="700">
                <text x="105" y="158">Year 1</text><text x="235" y="158">Year 2</text><text x="365" y="158">Year 3</text>
              </g>
              <rect x="70" y="40" width="30" height="100" fill="#94a3b8"/>
              <rect x="104" y="40" width="30" height="100" fill="#6366f1"/>
              <rect x="200" y="30" width="30" height="110" fill="#94a3b8"/>
              <rect x="234" y="29" width="30" height="111" fill="#6366f1"/>
              <rect x="330" y="20" width="30" height="120" fill="#94a3b8"/>
              <rect x="364" y="17" width="30" height="123" fill="#6366f1"/>
              <g font-size="9" fill="#334155" text-anchor="middle" font-weight="700">
                <text x="85" y="34">11,000</text><text x="119" y="34">11,000</text>
                <text x="215" y="24">12,000</text><text x="249" y="23">12,100</text>
                <text x="345" y="14">13,000</text><text x="379" y="11">13,310</text>
              </g>
              <rect x="150" y="166" width="10" height="8" fill="#94a3b8"/>
              <text x="166" y="173" font-size="9" fill="#475569" text-anchor="start">simple</text>
              <rect x="210" y="166" width="10" height="8" fill="#6366f1"/>
              <text x="226" y="173" font-size="9" fill="#475569" text-anchor="start">compound</text>
            </svg>
            <div class="worked"><b>Read the chart:</b> at 10% on ₦10,000, simple and compound match in year 1 (₦11,000). Year 2: simple ₦12,000 vs compound ₦12,100. Year 3: ₦13,000 vs ₦13,310. The extra ₦310 is interest-on-interest — and over 10 or 20 years that gap becomes enormous. That is why savings and investments compound, and why debts (loans) are dangerous when they compound.</div>

            <h3>11. Nigerian money habits — esusu, mobile fees and smart choices</h3>
            <ul>
              <li><b>Esusu / alajo</b> — a group savings circle: 12 members drop ₦5,000 weekly and one member collects the pot each week. The 'return' is not interest but discipline and rotation — a cultural financial instrument.</li>
              <li><b>Mobile transfer fees and charges</b> — a ₦50 charge on every transfer is a percentage that SHRINKS as amounts grow: on ₦1,000 it is 5%; on ₦50,000 it is 0.1%. Bundling payments saves real money — percentages in reverse.</li>
              <li><b>'Buy now, pay later' vs saving first:</b> an HP phone costing ₦450,000 in instalments against a ₦380,000 cash price charges ₦70,000 for impatience (about 18% extra). Saving ₦32,000 monthly for a year and buying cash keeps that money in your pocket.</li>
              <li><b>Discount hunting:</b> a 20% end-of-season discount on a ₦25,000 school bag saves ₦5,000 — the same as earning 20% profit on ₦25,000 of trading.</li>
            </ul>
            <div class="worked"><b>Worked example (market day, full chain):</b> Mama Nkechi buys 60 wrappers at ₦700 each (₦42,000) and spends ₦3,000 on transport. She sells 50 at ₦1,000 and the last 10 at a 20% discount off ₦1,000.<br>CP = 45,000. Revenue = 50,000 + 10 x 800 = 58,000.<br>Profit = 13,000 → profit % = 13,000/45,000 x 100% = 28.9% (about 29%). A full business-maths story in one market day.</div>

'''

def t_j2(c):
    old = '<h3>12. Try these (with answers)</h3>'
    assert c.count(old) == 1
    return c.replace(old, EXTRA_J2 + '            <h3>14. Try these (with answers)</h3>')

def t_j3(c):
    old = '<h3>10. Try these (with answers)</h3>'
    assert c.count(old) == 1
    return c.replace(old, EXTRA_J3 + '            <h3>12. Try these (with answers)</h3>')

splice('Simple Equations & Directed Numbers', t_j2)
splice('Business Mathematics: Profit, Loss, Discount & Interest', t_j3)

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
