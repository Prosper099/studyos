# StudyOS 📚

An intelligent, single-file study companion built for Nigerian secondary-school students —
covering **JAMB UTME, WAEC WASSCE, NECO, Post-UTME** (senior) and **BECE** (junior).

Everything — markup, styling hooks, curriculum data, lessons, quizzes, flashcards and the
AI study buddy — lives in **one file: `index.html`**. No build step, no bundler, no server
required. Open it in a browser and it runs.

## Features

- **Real Nigerian curriculum** — JSS1–JSS3: Mathematics, English Language, Basic Science,
  Basic Technology. SS1–SS3: Physics, Chemistry, Biology (plus Maths & English).
- **Full lessons per topic** — long-form explanations, worked examples, common-mistake
  warnings, and inline SVG diagrams.
- **Per-topic quizzes** — every JSS1–JSS3 topic ships with its own 10-question quiz based
  strictly on what the lesson taught, with explanations for every answer.
  (SS topic quizzes degrade gracefully with “Quiz being written” until authored.)
- **Mixed exam practice** — exam-style mock banks per subject for SS students.
- **Flashcards with self-grading** — “✅ Got it!” / “🔁 Get it next time”, pass/fail
  animations, confetti on success, and an automatic retry pile for missed cards.
- **Study Buddy** — an on-device tutor with a built-in knowledge engine that can also
  research live on the internet (Wikipedia + DuckDuckGo APIs) when it doesn’t know
  something. Optional Gemini API key for deeper answers.
- **Google Sign-In + cloud sync** — streaks, preferences and quiz stats sync to Firestore
  under `users/{uid}`. Works fully offline in Demo Mode (localStorage fallback).
- **Exams tailored per class** — JSS students only ever see General/BECE; SS students see
  JAMB UTME, WAEC WASSCE, NECO, Post-UTME and General.

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

Three automated suites verify the build (Node 18+, no dependencies):

```bash
node verify-static.mjs                  # markup/handler integrity (59 checks)
node verify.mjs                         # full runtime harness, placeholder config (107)
STUDYOS_REAL_CONFIG=1 node verify.mjs   # full runtime harness, real config (142)
node verify-degraded.mjs                # offline / no-Firestore behaviour (11)
```

## Content tooling

The Python scripts in this repo are the one-shot build scripts that generated and patch
the curriculum data inside `index.html` (`restructure*.py`, `migrate.py`,
`content_jss1_*.py`, `content_jss23.py`). They are kept for provenance and as the template
for authoring the remaining SS topic quizzes — each script contains safe, assert-guarded
splice helpers for the curriculum format.

## Deploying

Any static host works — GitHub Pages, Netlify, Vercel, or Firebase Hosting:

```bash
firebase init hosting    # public dir: the folder containing index.html
firebase deploy
```
