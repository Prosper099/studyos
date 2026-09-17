#!/usr/bin/env node
/* OWNER TOOL — not part of the app bundle.
 * Generates a StudyOS Bundle activation key for a paying student.
 * It extracts the SAME functions the shipped app uses to verify keys,
 * so a key made here always matches what the app expects.
 *
 * Usage:
 *   node scripts/make-key.mjs student@gmail.com            # key for the current month
 *   node scripts/make-key.mjs student@gmail.com --offset 1 # key for next month
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const email = process.argv[2];
const offsetArg = process.argv.indexOf('--offset');
const offset = offsetArg === -1 ? 0 : Number(process.argv[offsetArg + 1] || 0);

if (!email || !email.includes('@')) {
  console.error('Usage: node scripts/make-key.mjs <student-email> [--offset <months>]');
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const s = readFileSync(join(here, '..', 'src', 'main.mjs'), 'utf8');

const grab = (start, end) => {
  const i = s.indexOf(start);
  if (i === -1) throw new Error('could not find in src/main.mjs: ' + start);
  const j = s.indexOf(end, i);
  return s.slice(i, j + end.length);
};

const code = [
  grab('const ACTIVATION_SECRET', ';'),
  grab('function _actHash(str) {', 'return h >>> 0; }'),
  grab('function monthBucket(offset) {', "padStart(2, '0'); }"),
  grab('function activationKeyFor(email, plan, bucket) {', "return (plan === 'pack' ? 'P' : 'S') + code;\n}").replace(/\n}$/, '}')
].join('\n');

const api = new Function(code + '; return { activationKeyFor, monthBucket };')();
const key = api.activationKeyFor(email, 'pack', api.monthBucket(offset));
console.log(`Email:  ${email.toLowerCase().trim()}`);
console.log(`Month:  ${api.monthBucket(offset)} (also accepted the following month as grace)`);
console.log(`KEY:    ${key}`);
console.log('Send it to the student on WhatsApp; they redeem it under Activate → Enter key.');
