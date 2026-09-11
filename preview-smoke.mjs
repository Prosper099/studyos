/* Smoke test for the shareable preview exam page. */
import fs from 'node:fs';
import assert from 'node:assert/strict';

const s = fs.readFileSync('/home/user/preview.html', 'utf8');
const js = s.match(/<script>([\s\S]*?)<\/script>/)[1];

const store = {};
let confettiLayers = 0;
global.document = {
  getElementById: id => (store[id] ||= { innerHTML: '', textContent: '', className: '' }),
  createElement: tag => ({ style: { setProperty(k, v) { this[k] = v; } }, className: '', children: [], appendChild(c) { this.children.push(c); }, remove() {} }),
  body: { appendChild(el) { if (el.className === 'pconfetti') { confettiLayers++; global.lastBurst = el; } } }
};
global.window = { scrollTo: () => {} };
global.location = { href: 'https://studyos.test/preview.html' };
global.navigator = {};
global.confirm = () => true;
global.alert = () => {};
global.setInterval = () => 1;
global.clearInterval = () => {};

const EXPORTS = '\nexport { QS, paper, startExam, pick, go, next, prev, confirmFinish, finish, landing, shareWhatsApp };\nexport function isDone() { return done; }\nexport function stats() { return lastStats; }\n';
const mod = await import('data:text/javascript;base64,' + Buffer.from(js + EXPORTS).toString('base64'));

let passed = 0;
const ok = (name, cond, detail = '') => { if (!cond) throw new Error('FAIL ' + name + ' ' + detail); passed++; };

ok('42 easy questions embedded', mod.QS.length === 42, 'got ' + mod.QS.length);
ok('every question is a clean 4-option MCQ with an explanation',
  mod.QS.every(q => q.q && Array.isArray(q.o) && q.o.length === 4 && Number.isInteger(q.c) && q.c >= 0 && q.c < 4 && q.e));
ok('no HTML-unsafe question text', !mod.QS.some(q => /<\/?script/i.test(q.q + q.e + q.o.join(''))));

mod.landing();
ok('landing offers the easy check', store.app.innerHTML.includes('Start the check') && store.app.innerHTML.includes('easy question'));

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
for (const needle of ['Subject breakdown', 'StudyOS analysis', 'lockveil', 'Share my score on WhatsApp', 'Open StudyOS', 'Unlock everything in StudyOS']) {
  ok('results show: ' + needle, html.includes(needle));
}
ok('explanations are behind the lock', html.includes('class="locked"'));
ok('stats captured for the share template', !!mod.stats() && mod.stats().pct === 60 && mod.stats().correct === 6);

// WhatsApp share builds a wa.me deep link with the beautiful template
const before = global.location.href;
mod.shareWhatsApp();
const wa = global.location.href;
ok('share opens WhatsApp', wa.startsWith('https://wa.me/?text='), wa.slice(0, 40));
const decoded = decodeURIComponent(wa.slice('https://wa.me/?text='.length));
for (const needle of ['*StudyOS Readiness Check*', '*60%*', '✅ 6 correct', '❌ 1 wrong', '➖ 3 blank', 'Strongest:', 'To improve:', 'preview.html']) {
  ok('wa template includes: ' + needle, decoded.includes(needle));
}
ok('wa template has emoji + line breaks', decoded.includes('\n') && decoded.includes('🎉'));
global.location.href = before;

// perfect-score path
mod.startExam();
for (let i = 0; i < 10; i++) { mod.pick(mod.paper[i].c); mod.next(); }
mod.confirmFinish();
ok('perfect paper scores 100%', store.app.innerHTML.includes('>100%'));
ok('perfect paper celebrates', store.app.innerHTML.includes('Perfect paper'));
ok('80%+ score explodes confetti on screen', confettiLayers >= 1, 'layers=' + confettiLayers);
{
  const bits = (global.lastBurst || {}).children || [];
  ok('burst fires from the centre like fireworks', bits.length === 110 && bits.every(b => b.style['--dx'] && b.style['--dy']), 'bits=' + bits.length);
  const angles = bits.slice(0, 20).map(b => Math.atan2(parseFloat(b.style['--dy']), parseFloat(b.style['--dx'])));
  ok('pieces fly in all directions (not just down)', new Set(angles.map(a => Math.round(a / (Math.PI / 4)))).size >= 4, 'dirs=' + new Set(angles.map(a => Math.round(a / (Math.PI / 4)))).size);
}
 ok('perfect paper analysis says flawless', store.app.innerHTML.includes('flawless across every subject') && !store.app.innerHTML.split('flawless')[1].includes('Needs attention:'));

console.log(`PREVIEW SMOKE OK — ${passed} assertions passed`);
