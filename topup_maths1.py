# topup_maths1.py — extend Algebra & Angles lessons past the 12k floor. RUN ONCE.
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
    print(title, '->', len(c), 'chars')

EXTRA_C = '''
            <h3>11. Algebra everywhere — Nigerian daily life</h3>
            <p>Algebra is not a classroom game; it is the grammar of everyday reasoning. Anywhere a rule repeats with changing numbers, algebra is the shortest way to say it.</p>
            <ul>
              <li><b>Keke fare:</b> flag fall ₦100 plus ₦50 per stop. After n stops the fare is 100 + 50n. Six stops: 100 + 300 = ₦400.</li>
              <li><b>Data bundle:</b> a plan gives 1.5 GB per day; in d days you get 1.5d GB. For 12 GB you need d = 8 days.</li>
              <li><b>Trading:</b> a trader buys a bag of rice at x naira and sells it at x + 2,500. Her profit per bag is exactly 2,500 — whatever x is.</li>
              <li><b>Savings:</b> saving ₦w weekly, after 12 weeks you have 12w; to reach ₦24,000 you need w = ₦2,000.</li>
            </ul>
            <div class="worked"><b>Worked example (age puzzle):</b> 'Papa is three times as old as Ada. In 10 years he will be twice as old as her. How old is Ada now?' Let Ada = x, Papa = 3x. In 10 years: 3x + 10 = 2(x + 10) → 3x + 10 = 2x + 20 → x = 10. Ada is 10, Papa 30. Check: in 10 years, 40 = 2 x 20. Correct!</div>

'''

EXTRA_D = '''
            <h3>13. Clock angles — time as geometry</h3>
            <p>A clock face is a circle of 360 deg divided into 12 hour-marks, so each hour gap is 30 deg. The minute hand sweeps 6 deg every minute (360 ÷ 60); the hour hand creeps 0.5 deg every minute (30 ÷ 60).</p>
            <ul>
              <li>At 3:00 the hands are 3 hour-gaps apart: 3 x 30 = 90 deg (a right angle). At 6:00 they form a straight angle (180 deg).</li>
              <li>At 2:00 the angle is 60 deg (acute); at 4:00 it is 120 deg (obtuse).</li>
              <li>At 3:30 the minute hand points at 6 (180 deg from 12) while the hour hand has moved half an hour-gap past 3: 3 x 30 + 15 = 105 deg. The angle between them is 180 - 105 = 75 deg — NOT 90 deg!</li>
            </ul>
            <div class="formula">TIP: 'half past' never gives the 'obvious' angle because the hour hand keeps moving. Compute both hands from 12 o'clock and subtract.</div>

'''

def t_c(c):
    old = '<h3>11. Try these (with answers)</h3>'
    assert c.count(old) == 1
    return c.replace(old, EXTRA_C + '            <h3>12. Try these (with answers)</h3>')

def t_d(c):
    old = '<h3>13. Try these (with answers)</h3>'
    assert c.count(old) == 1
    return c.replace(old, EXTRA_D + '            <h3>14. Try these (with answers)</h3>')

splice('Introduction to Algebra: Letters & Simple Equations', t_c)
splice('Angles & Plane Figures', t_d)

open(path, 'w', encoding='utf-8').write(s)
print('written OK')
