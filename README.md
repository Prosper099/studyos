# StudyOS 📚

An intelligent study companion built for Nigerian secondary-school students —
covering **JAMB UTME, WAEC WASSCE, NECO, Post-UTME** (senior) and **BECE** (junior).

Live: **https://studyos-academic.vercel.app**

The source is a modular Vite project (`src/`), and the build ships the whole product as
**one ready-to-run file: `dist/index.html`** — markup, curriculum, engines, styles, all
inlined. Download that one file and it runs in any browser, no server required.

## By the numbers

| | |
|---|---|
| Topics with full textbook-length lessons | **132** |
| Topic-quiz questions (each with an explanation) | **1,442** |
| Flashcards with long explanatory answers | **1,903** |
| Real WAEC/JAMB-style past questions | **55** |
| Subjects | **13** |
| Automated checks across 5 suites | **462** |

## Curriculum coverage

| Subject | JSS1–3 | SS1–3 |
|---|---|---|
| Mathematics | ✅ | ✅ |
| English Language | ✅ | ✅ |
| Basic Science | ✅ | — |
| Basic Technology | ✅ | — |
| Physics | — | ✅ |
| Chemistry | — | ✅ |
| Biology | — | ✅ |
| Government | — | ✅ |
| Economics | — | ✅ |
| History | — | ✅ |
| Literature in English | — | ✅ |
| Commerce | — | ✅ |
| Financial Accounting | — | ✅ |

JSS students only ever see BECE-appropriate content; SS students see JAMB/WAEC/NECO/Post-UTME.

## Features

- **Full lessons per topic** — long-form explanations, worked examples, common-mistake
  warnings, and inline SVG diagrams.
- **Per-topic quizzes** — every topic ships its own quiz drawn strictly from its lesson,
  with options shuffled per attempt and an explanation for every answer.
- **Exam Command Centre** — pick your exam and date: countdown, predicted score against
  target, grade bands, and a study plan that follows your weakest subjects.
- **CBT practice exams** — question-count and timer chips, focus mode, answer heatmap,
  attempt history, mixed mock banks plus real past questions.
- **Flashcards with self-grading** — "✅ Got it!" / "🔁 Get it next time", pass/fail
  animations, confetti, and an automatic retry pile for missed cards.
- **Duolingo-style streaks** — flame celebrations, ❄️ streak freezes earned from tasks,
  and a badge shelf (task badges plus 7/30/365-day streak badges).
- **Study Buddy** — an on-device tutor with a built-in knowledge engine that can research
  live (Wikipedia + DuckDuckGo) when it doesn't know something. Optional Gemini API key.
- **Google Sign-In + cloud sync** — streaks, preferences and quiz stats sync to Firestore
  under `users/{uid}`. Works fully offline in Demo Mode (localStorage fallback).
- **Parent report** — onboarding captures the guardian's WhatsApp number; the phone shows only a
  blurred teaser, and one button sends the detailed report image + write-up straight to the
  guardian's chat (never a chosen contact), so reports can't be rerouted or doctored.
- **Premium engine** — a complete freemium + Paystack checkout system is built in but
  **dormant** (`monetizationOn = false`): everything is unlocked while StudyOS grows.

## Architecture — modular source, single-file build

The product strategy is still *one file you can hand to a student*, but the engineering
is now a proper modular project (migrated 2026-09-16):

```
index.html                  Vite entry: markup + head (Tailwind CDN, meta/OG)
vite.config.mjs             single-file build, unminified (harness-readable)
src/
├── main.mjs                app shell: auth, onboarding, engines, CBT, buddy,
│                           streaks, premium (dormant), __STUDYOS_TEST__ seams
├── styles.css              all custom CSS (keyframes, flashcard flip, drawer…)
├── data/
│   ├── curriculum.mjs      assembles the 13 subjects
│   ├── curriculum-*.mjs    one module per subject: levels → topics
│   │                       { title, tags, summary, content, cards[], quiz[] }
│   └── pastq.mjs           real past questions (5 senior subjects)
└── modules/
    ├── charts.mjs          score-trend SVG + hover tooltips + activity heatmap
    └── utils.mjs           escapeHtml, localISO
```

Why the build still outputs ONE file:

- **Portability** — a student on a shared computer can run the whole app from a single
  downloaded `dist/index.html`.
- **Zero-friction deployment** — Vercel runs `npm run build` on every push to `main` and
  serves `dist/`; any static host works the same way.
- **Readable output** — the bundle is deliberately unminified so the verification
  harnesses can read the shipped code, not a copy of it.

Firebase stays a browser ES-module import from `gstatic.com` (externalised by the
bundler), so the built file keeps zero npm runtime dependencies.

## The Firebase setup panel (fork users only)

The in-app **"Connect StudyOS to your Firebase project"** modal is developer
documentation for people running their own copy. It only opens when the `firebaseConfig`
still contains placeholder values — on the live site (real config) it can never appear.

## Running it

```bash
npm install
npm run build              # → dist/index.html (the single-file product)
open dist/index.html       # runs as-is in any browser

npm run dev                # Vite dev server with hot reload
```

`serve.mjs` still serves the repo root if you need a quick static server for
`preview.html` (the shareable /check page).

## Firebase

The app ships pre-wired to a live Firebase project (`studyos-c6042`). The web config in
`index.html` is **public by design** — Firebase web API keys are not secrets; the data is
protected by Firestore security rules (signed-in users may only read/write their own
`users/{uid}` document).

To point the app at your own project, replace the seven values in the `firebaseConfig`
object near the top of `src/main.mjs`, enable **Google** as a sign-in provider in
Firebase Authentication, and apply rules equivalent to:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

Without valid config the app still runs in Demo Mode with a banner.

## Tests

Five automated suites verify the build (Node 18+, no dependencies):

```bash
npm run build                                    # suites verify the BUILT single file
node scripts/make-fixtures.mjs                   # dist → .verify fixtures
STUDYOS_HTML=$PWD/dist/index.html node verify-static.mjs   # markup/handler integrity
node verify.mjs                                  # runtime harness, placeholder config
STUDYOS_REAL_CONFIG=1 node verify.mjs            # runtime harness, real config
node verify-degraded.mjs                         # offline / no-Firestore behaviour
node preview-smoke.mjs                           # deployment smoke test (/check page)
```

The suites include full curriculum contracts: every topic must carry a quiz with valid
answers and explanations, and flashcards with real answers; the "Quiz being written"
fallback is tested by temporarily blanking a topic quiz at runtime.

## Content tooling

The Python scripts in this repo are the one-shot generators that authored the curriculum
(`content_*.py`, `deep_*.py`, `lessons*.py`, `arts1.py`, `comm1.py`, `topics-*.py`, …).
All 132 topics are fully authored and now live in `src/data/curriculum-*.mjs`; new or
revised topics should be edited there directly (same shape: `{ title, tags, summary,
content, cards[], quiz[] }` — 4 options per question, correct index, explanation on every
quiz item). The scripts are kept for provenance and for their assert-guarded format
helpers.

## Deploying

Push to `main` and Vercel redeploys automatically. Any static host works — GitHub Pages,
Netlify, or Firebase Hosting:

```bash
firebase init hosting    # public dir: dist (after npm run build)
firebase deploy
```

---

Built by **Prosper Ndubuizu**.
