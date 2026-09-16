/* One-shot migration: split the monolithic index.html into src/ modules (Vite entry stays index.html). */
import fs from 'node:fs';
import path from 'node:path';

const root = '/home/user';
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const mkdir = p => fs.mkdirSync(p, { recursive: true });
mkdir(path.join(root, 'src/data'));
mkdir(path.join(root, 'src/modules'));

/* ---------- 1. CSS ---------- */
const styleM = html.match(/<style>([\s\S]*?)<\/style>/);
if (!styleM) throw new Error('no <style> block');
fs.writeFileSync(path.join(root, 'src/styles.css'), styleM[1].trimStart());

/* ---------- 2. module script ---------- */
const scriptM = html.match(/<script type="module">([\s\S]*?)<\/script>/);
if (!scriptM) throw new Error('no module script');
let code = scriptM[1];

/* ---------- 3. extract CURRICULUM ---------- */
const curStart = code.indexOf('const CURRICULUM = {');
if (curStart < 0) throw new Error('CURRICULUM not found');
const curEnd = code.indexOf('\n};', curStart);
const curBlock = code.slice(curStart, curEnd + 3);
const inner = curBlock.slice(curBlock.indexOf('{') + 1, curBlock.lastIndexOf('}'));

const subjRe = /^  '([^']+)': \{$/gm;
const bounds = [];
let m;
while ((m = subjRe.exec(inner))) bounds.push({ name: m[1], at: m.index });
if (bounds.length < 10) throw new Error('too few subjects: ' + bounds.length);
const subjects = bounds.map((b, i) => {
  const start = b.at;
  const end = i + 1 < bounds.length ? bounds[i + 1].at : inner.length;
  const text = inner.slice(start, end).trimEnd();
  return { name: b.name, text };
});
// sanity: reassembly equals inner verbatim (modulo whitespace)
const reassembled = subjects.map(s => s.text).join('\n');
if (reassembled.replace(/\s+/g, '') !== inner.replace(/\s+/g, '')) throw new Error('curriculum reassembly mismatch');
const forFile = t => { let x = t.trimEnd(); if (x.endsWith(',')) x = x.slice(0, -1).trimEnd(); return x; };

const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const varName = n => n.replace(/[^A-Za-z0-9]+/g, ' ').trim().split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join('');

let idx = '';
for (const s of subjects) {
  const file = `curriculum-${slug(s.name)}.mjs`;
  const body = forFile(s.text);
  fs.writeFileSync(path.join(root, 'src/data', file), `export default {\n${body.slice(body.indexOf('{') + 1)}\n};\n`);
  idx += `import ${varName(s.name)} from './${file}';\n`;
}
idx += '\nexport const CURRICULUM = {\n' + subjects.map(s => `  '${s.name.replace(/'/g, "\\'")}': ${varName(s.name)}`).join(',\n') + '\n};\n';
fs.writeFileSync(path.join(root, 'src/data/curriculum.mjs'), idx);
code = code.replace(curBlock, `/* CURRICULUM moved to src/data/curriculum.mjs */`);

/* ---------- 4. extract PASTQ ---------- */
const pqStart = code.indexOf('const PASTQ = {');
if (pqStart < 0) throw new Error('PASTQ not found');
const pqEnd = code.indexOf('\n};', pqStart);
const pqBlock = code.slice(pqStart, pqEnd + 3);
fs.writeFileSync(path.join(root, 'src/data/pastq.mjs'), `export ${pqBlock}\n`);
code = code.replace(pqBlock, `/* PASTQ moved to src/data/pastq.mjs */`);

/* ---------- 5. extract utils (escapeHtml, localISO) ---------- */
function cutFn(src, sig) {
  const i = src.indexOf(sig);
  if (i < 0) throw new Error('fn not found: ' + sig);
  const j = src.indexOf('\n}\n', i);
  const block = src.slice(i, j + 3);
  return { block, rest: src.slice(0, i) + src.slice(j + 3) };
}
let utils = '';
{
  const a = cutFn(code, 'function escapeHtml(s) {');
  utils += a.block; code = a.rest;
  const b = cutFn(code, 'function localISO(dt) {');
  utils += b.block; code = b.rest;
}
fs.writeFileSync(path.join(root, 'src/modules/utils.mjs'), utils.replace('function escapeHtml(', 'export function escapeHtml(').replace('function localISO(', 'export function localISO('));

/* ---------- 6. extract charts ---------- */
const chStart = code.indexOf('function chartSvgCore(h, interactive) {');
if (chStart < 0) throw new Error('charts not found');
const heatStart = code.indexOf('function activityHeatSvg(days) {', chStart);
const heatEnd = code.indexOf('\n}\n', heatStart);
const chBlock = code.slice(chStart, heatEnd + 3);
fs.writeFileSync(path.join(root, 'src/modules/charts.mjs'),
  `import { escapeHtml, localISO } from './utils.mjs';\n\n` +
  chBlock.replace('function chartSvgCore(', 'export function chartSvgCore(').replace('function progressChartSvg(', 'export function progressChartSvg(').replace('function showChartTip(', 'export function showChartTip(').replace('function hideChartTip(', 'export function hideChartTip(').replace('function activityHeatSvg(', 'export function activityHeatSvg('));
code = code.replace(chBlock, `/* charts moved to src/modules/charts.mjs */`);

/* ---------- 7. imports into main ---------- */
const anchor = code.indexOf("firebase-firestore.js';");
if (anchor < 0) throw new Error('firestore import anchor missing');
const nl = code.indexOf('\n', anchor);
const imports = `\nimport { CURRICULUM } from './data/curriculum.mjs';\nimport { PASTQ } from './data/pastq.mjs';\nimport { escapeHtml, localISO } from './modules/utils.mjs';\nimport { chartSvgCore, progressChartSvg, showChartTip, hideChartTip, activityHeatSvg } from './modules/charts.mjs';\nimport './styles.css';\n`;
code = code.slice(0, nl + 1) + imports + code.slice(nl + 1);
fs.writeFileSync(path.join(root, 'src/main.mjs'), code);

/* ---------- 8. rewrite index.html ---------- */
let out = html
  .replace(/<style>[\s\S]*?<\/style>/, '<!-- styles live in src/styles.css (imported by src/main.mjs, inlined at build) -->')
  .replace(/<script type="module">[\s\S]*?<\/script>/, '<script type="module" src="/src/main.mjs"></script>');
fs.writeFileSync(path.join(root, 'index.html'), out);

console.log('migration complete:', subjects.length, 'subject data modules');
