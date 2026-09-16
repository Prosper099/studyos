/* Rebuild .verify fixtures from the built single-file dist/index.html. */
import fs from 'node:fs';
const s = fs.readFileSync('/home/user/dist/index.html', 'utf8');
fs.mkdirSync('/home/user/.verify/real', { recursive: true });
fs.mkdirSync('/home/user/.verify/placeholder', { recursive: true });
fs.writeFileSync('/home/user/.verify/real/index.html', s);
let ph = s;
for (const [a, b] of [
  ['studyos-c6042.firebaseapp.com', 'YOUR_PROJECT_ID.firebaseapp.com'],
  ['studyos-c6042.firebasestorage.app', 'YOUR_PROJECT_ID.appspot.com'],
  ['studyos-c6042', 'YOUR_PROJECT_ID']]) ph = ph.replace(new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), b);
ph = ph.replace(/appId: ['"][^'"]*['"]/, "appId: '1:000000000000:web:0000000000000000000000'");
ph = ph.replace('829614734062', '000000000000').replace('G-XP925JQC2G', 'G-XXXXXXXXXX');
ph = ph.replace(/apiKey: ['"]AIza[^'"]*['"]/, "apiKey: 'YOUR_API_KEY'");
fs.writeFileSync('/home/user/.verify/placeholder/index.html', ph);
console.log('fixtures rebuilt from dist');
