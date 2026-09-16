# cut15.py — 15s silent TikTok cut of the StudyOS ad, funk-paced cuts. RUN ONCE PER TWEAK.
import re

src = open('ad_render.py', encoding='utf-8').read()

src = src.replace('DUR = 30.0', 'DUR = 15.0')
src = src.replace('SWIPE = 0.22', 'SWIPE = 0.16')
src = src.replace("'studyos_ad.mp4'", "'studyos_ad_15s.mp4'")

new_scenes = """SCENES = [
    (0.0, scene_hook, 1.6),
    (1.6, scene_dash, 1.6),
    (3.2, shot_scene(SHOT_SIGNIN, 'One tap to start.', IND, drift=0, z0=1.0, z1=1.08), 1.4),
    (4.6, shot_scene(SHOT_BADGES1, 'Secret badges to unlock.', AM, drift=620), 1.5),
    (6.1, shot_scene(SHOT_BADGES2, 'Win something every day.', EM, drift=620), 1.5),
    (7.6, shot_scene(SHOT_PROFILE, 'Watch yourself improve.', IND2, drift=640), 1.6),
    (9.2, scene_quiz, 2.4),
    (11.6, scene_banner, 1.4),
    (13.0, scene_end, 2.0),
]"""
src, n = re.subn(r'SCENES = \[.*?\n\]', new_scenes, src, count=1, flags=re.S)
assert n == 1

exec(src)
