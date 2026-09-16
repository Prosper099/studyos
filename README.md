# StudyOS 📚

An intelligent, single-file study companion built for Nigerian secondary-school students —
covering **JAMB UTME, WAEC WASSCE, NECO, Post-UTME** (senior) and **BECE** (junior).

Live: **https://studyos-academic.vercel.app**

Everything — markup, curriculum data, lessons, quizzes, flashcards, the exam engine and the
AI study buddy — lives in **one file: `index.html`**. No build step, no bundler, no server
required. Open it in a browser and it runs.

## By the numbers

| | |
|---|---|
| Topics with full textbook-length lessons | **126** |
| Topic-quiz questions (each with an explanation) | **1,382** |
| Flashcards with long explanatory answers | **1,813** |
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
| Financial Accounting | — | SS1 (SS2/SS3 in progress) |

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
- **Parent report** — a shareable WhatsApp progress summary for parents/guardians.
- **Premium engine** — a complete freemium + Paystack checkout system is built in but
  **dormant** (`monetizationOn = false`): everything is unlocked while StudyOS grows.

## Architecture — why one file?

This is a deliberate choice, not an accident:

- **Zero-friction deployment** — any static host serves it as-is (currently Vercel,
  redeploying on every push to `main`). No build pipeline to break.
- **Zero dependencies** — one HTML file, Tailwind via CDN, Firebase via ES module imports.
  Nothing to `npm install`, nothing to audit.
- **Portability** — a student on a shared computer can run the whole app from a single
  downloaded file.

The file is organised with banner-comment sections so you can jump straight to what you
need (search for `====`):

```
index.html
├── <head>                 Tailwind CDN, fonts, meta/OG tags
├── BOOT / LOADING SPLASH
├── AUTH SCREEN            Google Sign-In, Demo Mode banner
├── SETUP MODAL            Firebase connect guide (fork users only — see below)
├── ONBOARDING MODAL       name → class → department → target exam
├── UPGRADE / PRO SHEET    premium UI (dormant behind monetizationOn)
├── STREAK / BADGE OVERLAY
├── MAIN APP SHELL         sidebar, dashboard, topics, lesson reader,
│                          quizzes, flashcards, CBT, buddy, profile,
│                          exam command centre
└── <script type="module">
    ├── firebaseConfig     public web config (see Firebase section)
    ├── CURRICULUM         13 subjects → levels → topics
    │                      { title, tags, summary, content, cards[], quiz[] }
    ├── PASTQ              real past questions (5 senior subjects)
    ├── state + storage    localStorage + Firestore sync, Demo Mode fallback
    ├── engines            streaks, quizzes, CBT, buddy, analytics,
    │                      exam prediction, premium/paystack (dormant)
    └── __STUDYOS_TEST__   test seams used by the verify suites
```

If this ever grows past the point where a single file is comfortable, the section banners
map cleanly onto a `src/` split (`data/`, `services/`, `components/`, `styles/`) — but
until then the single file *is* the product strategy.

## The Firebase setup panel (fork users only)

The in-app **"Connect StudyOS to your Firebase project"** modal is developer
documentation for people running their own copy. It only opens when the `firebaseConfig`
still contains placeholder values — on the live site (real config) it can never appear.

## Running it

```bash
# Option 1: just open the file
open index.html            # macOS
xdg-open index.html        # Linux

# Option 2: serve it locally
node serve.mjs             # → http://localhost:8080
```

## Firebase

The app ships pre-wired to a live Firebase project (`studyos-c6042`). The web config in
`index.html` is **public by design** — Firebase web API keys are not secrets; the data is
protected by Firestore security rules (signed-in users may only read/write their own
`users/{uid}` document).

To point the app at your own project, replace the seven values in the `firebaseConfig`
object near the top of the module script, enable **Google** as a sign-in provider in
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
node verify-static.mjs                  # markup/handler integrity        (76 checks)
node verify.mjs                         # runtime harness, placeholder config (134)
STUDYOS_REAL_CONFIG=1 node verify.mjs   # runtime harness, real config   (208)
node verify-degraded.mjs                # offline / no-Firestore behaviour (11)
node preview-smoke.mjs                  # deployment smoke test          (33)
```

The suites include full curriculum contracts: every topic must carry a quiz with valid
answers and explanations, and flashcards with real answers; the "Quiz being written"
fallback is tested by temporarily blanking a topic quiz at runtime.

## Content tooling

The Python scripts in this repo are the one-shot build scripts that generated and patch
the curriculum data inside `index.html` (`content_*.py`, `deep_*.py`, `lessons*.py`,
`arts1.py`, `comm1.py`, `topics-gov-*.py`, …). All 126 topics are fully authored; the
scripts are kept for provenance — each contains safe, assert-guarded splice helpers for
the curriculum format (exact title matching, 4 options per question, correct-index and
explanation checks) that can be reused to patch or extend any topic.

## Deploying

Push to `main` and Vercel redeploys automatically. Any static host works — GitHub Pages,
Netlify, or Firebase Hosting:

```bash
firebase init hosting    # public dir: the folder containing index.html
firebase deploy
```

---

Built by **Prosper Ndubuizu**.
