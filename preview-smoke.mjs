/* Smoke test for the shareable preview exam page. */
import fs from 'node:fs';
import assert from 'node:assert/strict';

const s = fs.readFileSync('/home/user/preview.html', 'utf8');
const js = s.match(/<script>([\s\S]*?)<\/script>/)[1];

const store = {};
global.document = { getElementById: id => (store[id] ||= { innerHTML: '', textContent: '', className: '' }) };
global.window = { scrollTo: () => {} };
global.location = { href: 'https://studyos.test/preview.html' };
global.navigator = {};
global.confirm = () => true;
global.alert = () => {};
global.setInterval = () => 1;
global.clearInterval = () => {};

const EXPORTS = '\nexport { QS, paper, startExam, pick, go, next, prev, confirmFinish, finish, landing, shareResult, answers };\nexport function isDone() { return done; }\n';
const mod = await import('data:text/javascript;base64,' + Buffer.from(js + EXPORTS).toString('base64'));

let passed = 0;
const ok = (name, cond, detail = '') => { if (!cond) throw new Error('FAIL ' + name + ' ' + detail); passed++; };

ok('64 questions embedded', mod.QS.length === 64, 'got ' + mod.QS.length);
ok('every question is a clean 4-option MCQ with an explanation',
  mod.QS.every(q => q.q && Array.isArray(q.o) && q.o.length === 4 && Number.isInteger(q.c) && q.c >= 0 && q.c < 4 && q.e));
ok('no HTML-unsafe question text', !mod.QS.some(q => /<\/?script/i.test(q.q + q.e + q.o.join(''))));

mod.landing();
ok('landing page offers the free check', store.app.innerHTML.includes('Start the check'));

mod.startExam();
ok('paper is 10 questions', mod.paper.length === 10, 'got ' + mod.paper.length);
ok('exam hall header renders', store.app.innerHTML.includes('STUDYOS EXAM') && store.app.innerHTML.includes('Question 1 / 10'));

// 6 correct, 1 wrong, 3 blank => 60%
for (let i = 0; i < 6; i++) { mod.pick(mod.paper[i].c); mod.next(); }
mod.pick((mod.paper[6].c + 1) % 4);
mod.go(2); mod.go(6);
ok('navigator jump works', store.app.innerHTML.includes('Question 7 / 10'));
mod.confirmFinish();

const html = store.app.innerHTML;
const pct = html.match(/class="big"[^>]*>(\d+)%/);
ok('score computed correctly', pct && pct[1] === '60', 'got ' + (pct && pct[1]));
for (const needle of ['correct', 'wrong', 'blank', 'Subject breakdown', 'StudyOS analysis', 'Worked explanations', 'lockveil', 'Unlock in StudyOS']) {
  ok('results show: ' + needle, html.includes(needle));
}
ok('explanations are behind the lock', html.includes('class="locked"'));
ok('done flag set after submit', mod.isDone());

// perfect-score path
mod.startExam();
for (let i = 0; i < 10; i++) { mod.pick(mod.paper[i].c); mod.next(); }
mod.confirmFinish();
ok('perfect paper scores 100%', store.app.innerHTML.includes('>100%'));
ok('perfect paper celebrates instead of showing an empty review', store.app.innerHTML.includes('Perfect paper'));
ok('explanations locked even on a perfect paper', store.app.innerHTML.includes('lockveil'));

console.log(`PREVIEW SMOKE OK — ${passed} assertions passed`);
