# ad_render.py v3 — StudyOS vertical ad, TikTok-edit style: fast cuts, zoom punches, swipe transitions,
# handheld shake, real app screens + brand imagery, music only. Frames -> ffmpeg -> studyos_ad.mp4
import math, random, subprocess
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np
import imageio_ffmpeg

W, H, FPS = 1080, 1920, 30
DUR = 30.0
N = int(DUR * FPS)

BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
REG = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
_fc = {}
def font(sz, bold=True):
    k = (int(sz), bold)
    if k not in _fc: _fc[k] = ImageFont.truetype(BOLD if bold else REG, int(sz))
    return _fc[k]

BG0, BG1 = (10, 14, 32), (30, 27, 75)
IND, IND2 = (99, 102, 241), (129, 140, 248)
EM, AM, RO, SL, WH = (16, 185, 129), (245, 158, 11), (244, 63, 94), (148, 163, 184), (255, 255, 255)
DARK = (15, 23, 42)

def ez_out_cubic(p): return 1 - (1 - p) ** 3
def ez_in_out(p): return 4*p*p*p if p < 0.5 else 1 - (-2*p + 2)**3 / 2
def ez_back(p):
    c1, c3 = 1.70158, 2.70158
    return 1 + c3 * (p - 1)**3 + c1 * (p - 1)**2
def ez_out_expo(p): return 1 if p >= 1 else 1 - 2 ** (-10 * p)
def clamp01(p): return max(0.0, min(1.0, p))
def seg(t, a, b): return clamp01((t - a) / (b - a))

def rr(d, box, r, fill=None, outline=None, width=0):
    d.rounded_rectangle(box, radius=r, fill=fill, outline=outline, width=width)

def tw(d, s, f):
    l = d.textbbox((0, 0), s, font=f)
    return l[2] - l[0], l[3] - l[1]

def ctext(d, cx, y, s, f, fill, shadow=True):
    w, h = tw(d, s, f)
    if shadow:
        d.text((cx - w/2 + 4, y + 5), s, font=f, fill=(0, 0, 0))
    d.text((cx - w/2, y), s, font=f, fill=fill)
    return h

# ---------- background ----------
bg = Image.new('RGB', (W, H))
bd = ImageDraw.Draw(bg)
for y in range(H):
    p = y / H
    bd.line([(0, y), (W, y)], fill=tuple(int(BG0[i] + (BG1[i]-BG0[i])*p) for i in range(3)))
glow = Image.new('RGB', (W, H), (0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([int(W*0.55), -300, int(W*1.5), 700], fill=(60, 55, 160))
gd.ellipse([-400, int(H*0.6), 600, int(H*1.3)], fill=(20, 60, 90))
glow = glow.filter(ImageFilter.GaussianBlur(180))
bg = Image.blend(bg, glow, 0.28)

vig = Image.new('L', (W, H), 255)
vd = ImageDraw.Draw(vig)
for i in range(60):
    vd.rectangle([i, i, W-i, H-i], outline=int(255 * (i / 60) * 0.35))
vig = vig.filter(ImageFilter.GaussianBlur(40))

def flame(d, cx, cy, s):
    pts = [(0, -1.0), (0.42, -0.45), (0.34, 0.05), (0.5, 0.35), (0.28, 0.8), (0, 1.0), (-0.28, 0.8), (-0.5, 0.35), (-0.34, 0.05), (-0.42, -0.45)]
    d.polygon([(cx + x*s, cy + y*s) for x, y in pts], fill=AM)
    d.polygon([(cx + x*s*0.55, cy + s*0.28 + y*s*0.62) for x, y in pts], fill=(253, 224, 71))

def draw_logo(d, cx, cy, s):
    rr(d, [cx-s/2, cy-s/2, cx+s/2, cy+s/2], int(s*0.24), fill=IND)
    bw = int(s*0.52); bh = int(s*0.40)
    d.rounded_rectangle([cx-bw//2, cy-bh//2, cx-2, cy+bh//2], int(s*0.05), fill=WH)
    d.rounded_rectangle([cx+2, cy-bh//2, cx+bw//2, cy+bh//2], int(s*0.05), fill=(224, 231, 255))
    d.polygon([(cx+bw//2-int(s*0.16), cy-bh//2-int(s*0.10)), (cx+bw//2-int(s*0.05), cy-bh//2-int(s*0.10)), (cx+bw//2-int(s*0.05), cy-bh//2+int(s*0.12)), (cx+bw//2-int(s*0.105), cy-bh//2+int(s*0.05)), (cx+bw//2-int(s*0.16), cy-bh//2+int(s*0.12))], fill=AM)

# ---------- phone UI tall canvas (drawn dashboard) ----------
PW, PH = 852, 2900
ui = Image.new('RGB', (PW, PH), (248, 250, 252))
ud = ImageDraw.Draw(ui)
ud.rectangle([0, 0, PW, 150], fill=DARK)
ud.text((36, 44), 'Study', font=font(52), fill=WH)
w1, _ = tw(ud, 'Study', font(52))
ud.text((36 + w1 + 14, 44), 'OS', font=font(52), fill=IND2)
ud.ellipse([PW-110, 40, PW-36, 114], fill=IND)
ctext(ud, PW-73, 56, 'PN', font(30), WH, shadow=False)
y = 190
rr(ud, [36, y, PW-36, y+330], 34, fill=(23, 30, 62))
ud.text((72, y+40), 'Good morning, Prosper!', font=font(44), fill=WH)
ud.text((72, y+110), 'SS3 - targeting WAEC WASSCE', font=font(28, False), fill=SL)
flame(ud, 96, y+230, 34)
ud.text((140, y+205), '3-day streak. Keep it alive!', font=font(30), fill=(253, 224, 71))
y += 370
stats = [('77%', 'overall accuracy'), ('100%', 'best score'), ('12', 'quizzes taken'), ('83', 'topics loaded')]
for i, (v, l) in enumerate(stats):
    x = 36 + (i % 2) * ((PW-96)//2 + 24)
    yy = y + (i // 2) * 190
    rr(ud, [x, yy, x+(PW-96)//2, yy+166], 26, fill=DARK)
    ud.text((x+30, yy+26), v, font=font(52), fill=IND2)
    ud.text((x+30, yy+100), l, font=font(24, False), fill=SL)
y += 420
rr(ud, [36, y, PW-36, y+430], 30, fill=WH, outline=(226, 232, 240), width=2)
ud.text((70, y+30), "Today's mission", font=font(36), fill=DARK)
rows = [('Mathematics: Quadratics - 10 min', EM), ('Flashcards - 5 min active recall', EM), ('Quiz - 10 questions in Maths', AM)]
for i, (txt, col) in enumerate(rows):
    yy = y + 100 + i * 106
    rr(ud, [66, yy, PW-66, yy+92], 20, fill=(248, 250, 252))
    ud.text((92, yy+28), txt, font=font(26, False), fill=(51, 65, 85))
    rr(ud, [PW-210, yy+24, PW-92, yy+68], 22, fill=col)
    ctext(ud, PW-151, yy+32, 'DONE' if col == EM else 'GO', font(24), WH, shadow=False)
y += 470
chips = ['Mathematics', 'English', 'Basic Science', 'Physics']
x = 36
for c in chips:
    w, _ = tw(ud, c, font(28))
    rr(ud, [x, y, x+w+56, y+76], 38, fill=(238, 242, 255), outline=IND, width=2)
    ud.text((x+28, y+20), c, font=font(28), fill=IND)
    x += w + 80
y += 130
ud.text((40, y), 'JSS3 - Basic Science', font=font(34), fill=DARK)
y += 70
for ttl, sub in [('Genetics & heredity', 'Lesson - 12 pages - diagram'), ('Machines: levers & pulleys', 'Quiz - 15 questions')]:
    rr(ud, [36, y, PW-36, y+170], 26, fill=WH, outline=(226, 232, 240), width=2)
    rr(ud, [66, y+34, 146, y+114], 20, fill=(238, 242, 255))
    ud.text((88, y+52), 'LV', font=font(30), fill=IND)
    ud.text((176, y+34), ttl, font=font(30), fill=DARK)
    ud.text((176, y+88), sub, font=font(24, False), fill=SL)
    y += 200
rr(ud, [36, y, PW-36, y+220], 26, fill=DARK)
ud.text((70, y+36), 'Buddy AI Tutor', font=font(34), fill=WH)
ud.text((70, y+100), 'Ask anything. Get a worked answer.', font=font(26, False), fill=SL)

# ---------- real screenshots + stitched continuations (real scrolling) ----------
def edge_color(im):
    w, h = im.size
    px = [im.getpixel((5, h-5)), im.getpixel((w-5, h-5)), im.getpixel((w//2, h-5))]
    return tuple(sum(c[i] for c in px)//3 for i in range(3))

def load_shot(path):
    im = Image.open(path).convert('RGB')
    sc = 780 / im.width
    return im.resize((780, int(im.height * sc)), Image.LANCZOS)

def lock_glyph(d, cx, cy, s):
    d.rounded_rectangle([cx-s*0.5, cy-s*0.25, cx+s*0.5, cy+s*0.55], int(s*0.12), fill=(203, 213, 225))
    d.arc([cx-s*0.3, cy-s*0.62, cx+s*0.3, cy+s*0.02], 180, 0, fill=(203, 213, 225), width=int(s*0.16))
    d.ellipse([cx-s*0.07, cy-s*0.02, cx+s*0.07, cy+s*0.2], fill=(248, 250, 252))

def badges_continuation(d, y0):
    for r in range(2):
        for cix in range(2):
            x = 36 + cix * 372
            y = y0 + 20 + r * 360
            rr(d, [x, y, x+348, y+336], 24, outline=(203, 213, 225), width=3)
            lock_glyph(d, x+174, y+96, 64)
            ctext(d, x+174, y+160, '? ? ?', font(30), (100, 116, 139), shadow=False)
            ctext(d, x+174, y+216, 'A secret badge. Keep', font(24, False), (148, 163, 184), shadow=False)
            ctext(d, x+174, y+252, 'exploring...', font(24, False), (148, 163, 184), shadow=False)

def profile_continuation(d, y0):
    y = y0 + 24
    rr(d, [36, y, 744, y+380], 28, fill=WH, outline=(226, 232, 240), width=2)
    d.text((70, y+30), 'Study activity - this week', font=font(30), fill=DARK)
    bars = [40, 70, 55, 90, 65, 100, 80]
    days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    for i, b in enumerate(bars):
        x = 80 + i * 92
        bh = int(b * 1.9)
        rr(d, [x, y+300-bh, x+56, y+300], 12, fill=IND if b < 100 else EM)
        ctext(d, x+28, y+316, days[i], font(22, False), SL, shadow=False)
    y += 412
    rr(d, [36, y, 744, y+330], 28, fill=WH, outline=(226, 232, 240), width=2)
    d.text((70, y+30), 'Subject accuracy', font=font(30), fill=DARK)
    for i, (sub, pct, col) in enumerate([('Mathematics', 78, IND), ('English', 64, EM), ('Physics', 52, AM)]):
        yy = y + 96 + i * 78
        d.text((70, yy), sub, font=font(26, False), fill=(51, 65, 85))
        rr(d, [280, yy+4, 640, yy+28], 12, fill=(226, 232, 240))
        rr(d, [280, yy+4, 280 + int(360*pct/100), yy+28], 12, fill=col)
        d.text((660, yy), f'{pct}%', font=font(26), fill=DARK)

def make_shot(path, extra_h=0, continuation=None, fill=None):
    im2 = load_shot(path)
    hgt = im2.height + extra_h
    canvas = Image.new('RGB', (780, hgt), fill or edge_color(im2))
    canvas.paste(im2, (0, 0))
    if continuation:
        d = ImageDraw.Draw(canvas)
        continuation(d, im2.height)
    return canvas

SHOT_SIGNIN = make_shot('uploads/IMG_20260912_095321.jpg')
SHOT_BADGES1 = make_shot('uploads/IMG_20260912_095747.jpg', 780, badges_continuation)
SHOT_BADGES2 = make_shot('uploads/IMG_20260912_095810.jpg', 780, badges_continuation)
SHOT_PROFILE = make_shot('uploads/IMG_20260912_095720.jpg', 800, profile_continuation, fill=(244, 246, 250))
BANNER = Image.open('og.jpg').convert('RGB')

# ---------- confetti ----------
rng = random.Random(7)
CCOL = [IND, EM, AM, RO, (56, 189, 248), (253, 224, 71)]
parts = []
for i in range(130):
    a = rng.uniform(0, 2*math.pi)
    sp = rng.uniform(300, 1400)
    parts.append([a, sp, rng.uniform(6, 14), CCOL[i % 6], rng.uniform(0, 6.28), rng.uniform(-8, 8)])

def rotrect(d, x, y, s, ang, col):
    c, sn = math.cos(ang), math.sin(ang)
    pts = [(-s, -0.6*s), (s, -0.6*s), (s, 0.6*s), (-s, 0.6*s)]
    d.polygon([(x + px*c - py*sn, y + px*sn + py*c) for px, py in pts], fill=col)

def draw_confetti(d, cx, cy, tt):
    if tt <= 0 or tt > 2.2: return
    for a, sp, sz, col, rot, vr in parts:
        dist = sp * tt * (0.35 + 0.65*math.exp(-1.1*tt))
        x = cx + math.cos(a) * dist
        y = cy + math.sin(a) * dist + 500 * tt * tt
        rotrect(d, x, y, sz, rot + vr*tt, col)

def caption(d, t, t0, text, accent=IND):
    p = ez_back(seg(t, t0, t0 + 0.32))
    if p <= 0: return
    f = font(48)
    w, h = tw(d, text, f)
    bw, bh = w + 90, 112
    cx, cy = W/2, H - 300
    sc = 0.5 + 0.5 * p
    x0, y0 = cx - bw*sc/2, cy - bh*sc/2
    rr(d, [x0, y0, x0 + bw*sc, y0 + bh*sc], 26, fill=DARK)
    rr(d, [x0, y0, x0 + bw*sc, y0 + bh*sc], 26, outline=accent, width=3)
    d.rectangle([x0, y0 + bh*sc*0.28, x0 + 12, y0 + bh*sc*0.72], fill=accent)
    ctext(d, cx, cy - h/2 - 8, text, f, WH)

# ---------- scenes ----------
def scene_hook(frame, d, t):
    lines = [('YOUR PHONE', 0.05, WH, 100), ('IS ABOUT TO BECOME', 0.32, SL, 62), ('YOUR TUTOR.', 0.6, IND2, 100)]
    for i, (s, t0, col, sz) in enumerate(lines):
        p = ez_back(seg(t, t0, t0 + 0.34))
        if p <= 0: continue
        f = font(sz * (0.4 + 0.6*p))
        w, h = tw(d, s, f)
        d.text((W/2 - w/2, 700 + i*170 - h/2), s, font=f, fill=col)
    p = seg(t, 1.25, 1.7)
    if p > 0:
        lw = int(340 * ez_out_expo(p))
        rr(d, [W/2 - lw/2, 1250, W/2 + lw/2, 1264], 7, fill=AM)

def phone_frame(frame, d, canvas, t, dur, drift=0, z0=1.0, z1=1.06):
    pw, phh = 780, 1560
    sp = ez_out_expo(seg(t, 0, 0.5))
    px, py = (W - pw)//2, int(H*0.5 - phh//2 + (1 - sp) * 700)
    rr(d, [px-16, py-16, px+pw+16, py+phh+16], 64, fill=(2, 6, 23))
    z = z0 + (z1 - z0) * ez_in_out(seg(t, 0, dur))
    cw, chh = pw / z, phh / z
    max_dr = max(0, canvas.height - chh)
    dr = min(max_dr, drift * ez_in_out(seg(t, 0.1, dur)))
    left = (pw - cw) / 2
    vis = canvas.crop((int(left), int(dr), int(left + cw), int(dr + chh))).resize((pw, phh), Image.LANCZOS)
    mask = Image.new('L', (pw, phh), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, pw, phh], 48, 255)
    frame.paste(vis, (px, py), mask)
    d.rounded_rectangle([px + pw//2 - 70, py + 14, px + pw//2 + 70, py + 40], 13, fill=(2, 6, 23))

def scene_dash(frame, d, t):
    sc = 780 / PW
    tall = ui.resize((780, int(PH * sc)))
    canvas = Image.new('RGB', (780, tall.height), (248, 250, 252))
    canvas.paste(tall, (0, 0))
    phone_frame(frame, d, canvas, t, 3.3, drift=750, z0=1.0, z1=1.05)
    caption(d, t, 0.3, 'Lessons. Quizzes. Flashcards.', IND)

def shot_scene(canvas, cap, acc, dur=3.2, drift=0, z0=1.0, z1=1.07):
    def fn(frame, d, t):
        phone_frame(frame, d, canvas, t, dur, drift=drift, z0=z0, z1=z1)
        caption(d, t, 0.3, cap, acc)
    return fn

def scene_quiz(frame, d, t):
    cx = W/2
    p0 = ez_out_expo(seg(t, 0, 0.4))
    rr(d, [90, 380, W-90, 700], 36, fill=WH)
    ctext(d, cx, 430, 'QUICK CHECK', font(30), IND)
    ctext(d, cx, 500, 'Force = 20 N, distance = 4 m.', font(44), DARK)
    ctext(d, cx, 570, 'Work done = ?', font(44), DARK)
    opts = ['A. 5 J', 'B. 80 J', 'C. 24 J', 'D. 800 J']
    reveal = seg(t, 1.5, 1.8)
    for i, o in enumerate(opts):
        y = 760 + i * 150
        p = ez_back(seg(t, 0.15 + i*0.12, 0.45 + i*0.12))
        if p <= 0: continue
        sc = 0.7 + 0.3*p
        x0 = cx - 380*sc
        col, outl, wd, txtcol = WH, (226, 232, 240), 2, DARK
        if i == 1 and reveal > 0:
            col = tuple(int(WH[j] + (EM[j]-WH[j])*reveal) for j in range(3))
            outl, wd, txtcol = EM, 5, WH
        d.rounded_rectangle([x0, y, x0 + 760*sc, y + 120], 26, fill=col, outline=outl, width=wd)
        d.text((x0 + 40, y + 34), o, font=font(44), fill=txtcol)
    if reveal >= 1:
        ctext(d, cx, 1420, 'CORRECT!', font(70), EM)
    draw_confetti(d, cx, 1000, t - 1.8)
    caption(d, t, 0.25, 'Know your level instantly.', RO)

def scene_banner(frame, d, t):
    p = ez_back(seg(t, 0.05, 0.5))
    if p <= 0: return
    bw = int(880 * (0.5 + 0.5*p))
    bh = int(bw * BANNER.height / BANNER.width)
    b = BANNER.resize((bw, bh), Image.LANCZOS)
    card = Image.new('RGBA', (bw+40, bh+40), (0, 0, 0, 0))
    cd = ImageDraw.Draw(card)
    rr(cd, [0, 0, bw+40, bh+40], 30, fill=DARK)
    rr(cd, [0, 0, bw+40, bh+40], 30, outline=IND, width=3)
    card.paste(b, (20, 20))
    frame.paste(card, (W//2 - (bw+40)//2, 640), card)
    caption(d, t, 0.3, 'Built for Nigerian students.', EM)

def scene_end(frame, d, t):
    cx = W/2
    p = ez_back(seg(t, 0.05, 0.55))
    s = int(320 * (0.5 + 0.5*p))
    draw_logo(d, cx, 640, s)
    ctext(d, cx, 900, 'StudyOS', font(120), WH)
    ctext(d, cx, 1060, "Nigeria's study companion", font(46, False), SL)
    if seg(t, 0.7, 0.8) > 0:
        ctext(d, cx, 1230, 'Free while we build - link in bio', font(48), (253, 224, 71))
        rr(d, [cx-440, 1350, cx+440, 1474], 62, fill=WH)
        ctext(d, cx, 1384, 'studyos-academic.vercel.app', font(42), IND)

SCENES = [
    (0.0, scene_hook, 1.9),
    (1.9, scene_dash, 3.3),
    (5.2, shot_scene(SHOT_SIGNIN, 'One tap to start.', IND, drift=0, z0=1.0, z1=1.08), 3.2),
    (8.4, shot_scene(SHOT_BADGES1, 'Secret badges to unlock.', AM, drift=620), 3.2),
    (11.6, shot_scene(SHOT_BADGES2, 'Win something every day.', EM, drift=620), 3.2),
    (14.8, shot_scene(SHOT_PROFILE, 'Watch yourself improve.', IND2, drift=640), 3.2),
    (18.0, scene_quiz, 3.4),
    (21.4, scene_banner, 3.2),
    (24.6, scene_end, 5.4),
]

SWIPE = 0.22
impacts = [st for st, fn, du in SCENES[1:]] + [0.05, 0.32, 0.6]

rng2 = random.Random(3)
grain_seed = [rng2.randint(0, 2**32-1) for _ in range(30)]

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
cmd = [ffmpeg_exe, '-y', '-f', 'rawvideo', '-vcodec', 'rawvideo', '-s', f'{W}x{H}',
       '-pix_fmt', 'rgb24', '-r', str(FPS), '-i', '-', '-an',
       '-vcodec', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p',
       'studyos_ad.mp4']
proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

prev_base = None
for i in range(N):
    t = i / FPS
    si = 0
    for k, (st, fn, du) in enumerate(SCENES):
        if t >= st: si = k
    st0, fn, du = SCENES[si]
    tl = t - st0
    base = bg.copy()
    d = ImageDraw.Draw(base)
    fn(base, d, tl)
    # swipe transition from previous scene base
    if prev_base is not None and tl < SWIPE and si > 0:
        p = ez_out_expo(tl / SWIPE)
        comp = Image.new('RGB', (W, H))
        off = int(W * (1 - p))
        comp.paste(prev_base, (-int(W * p), 0))
        comp.paste(base, (off, 0))
        bar_x = off - 14
        bd2 = ImageDraw.Draw(comp)
        bd2.rectangle([bar_x, 0, bar_x + 10, H], fill=IND2)
        base = comp
    # camera: zoom punch + handheld shake
    punch = 1.05 * (1 - ez_out_cubic(seg(tl, 0, 0.5)))
    zoom = 1.03 + punch
    shx = 3*math.sin(t*7.3) + 2*math.sin(t*13.7)
    shy = 3*math.cos(t*6.1) + 2*math.sin(t*11.3)
    for imp in impacts:
        dti = t - imp
        if 0 <= dti < 0.25:
            k = (1 - dti/0.25) * 9
            shx += k * math.sin(dti*90)
            shy += k * math.cos(dti*70)
    cw, ch = int(W/zoom), int(H/zoom)
    lx = (W - cw)//2 + int(shx)
    ly = (H - ch)//2 + int(shy)
    lx = max(0, min(W - cw, lx)); ly = max(0, min(H - ch, ly))
    frame = base.crop((lx, ly, lx+cw, ly+ch)).resize((W, H), Image.LANCZOS)
    # impact flash
    for imp in impacts:
        if 0 <= t - imp < 0.07:
            frame = Image.blend(frame, Image.new('RGB', (W, H), (255, 255, 255)), 0.16)
    # grain
    gr = np.random.default_rng(grain_seed[i % 30])
    noise = gr.integers(0, 255, (H//4, W//4, 3), dtype=np.uint8)
    small = Image.fromarray(noise).resize((W, H))
    grain_layer = Image.composite(small, frame, vig)
    frame = Image.blend(frame, grain_layer, 0.05)
    prev_base = base
    proc.stdin.write(frame.tobytes())
    if i % 150 == 0:
        print(f'frame {i}/{N}', flush=True)

proc.stdin.close()
proc.wait()
print('ENCODE DONE', proc.returncode)
