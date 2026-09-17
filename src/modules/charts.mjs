import { escapeHtml, localISO } from './utils.mjs';

export function chartSvgCore(h, interactive) {
  const pts = (h || []).slice(-20);
  if (pts.length === 0) return '<p class="rounded-xl bg-slate-50 px-3 py-4 text-center text-xs font-semibold text-slate-400">Take a couple of quizzes and your score graph starts growing here. 📈</p>';
  const W2 = 640, H2 = 230, padL = 40, padR = 22, padT = 40, padB = 34;
  const plotW = W2 - padL - padR, plotH = H2 - padT - padB;
  const xs = i => pts.length === 1 ? padL + plotW / 2 : padL + i * plotW / (pts.length - 1);
  const ys = p => padT + (1 - Math.max(0, Math.min(100, p)) / 100) * plotH;
  const P = pts.map((q, i) => [xs(i), ys(q.p)]);
  const grid = [100, 75, 50, 25, 0].map(v => `<line x1="${padL}" y1="${ys(v).toFixed(1)}" x2="${W2 - padR}" y2="${ys(v).toFixed(1)}" stroke="${v === 0 ? '#d7dfe9' : '#e8edf4'}" stroke-width="1"/><text x="${padL - 8}" y="${(ys(v) + 3.5).toFixed(1)}" font-size="9.5" font-weight="700" fill="#a3b0c2" text-anchor="end">${v}</text>`).join('');
  const line = 'M ' + P.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L ');
  const last = pts[pts.length - 1], first = pts[0];
  const trend = last.p - first.p;
  const up = trend >= 0;
  const single = pts.length === 1;
  const pillW = 148, pillX = W2 - padR - pillW;
  const trendPill = `<rect x="${pillX}" y="9" width="${pillW}" height="21" rx="10.5" fill="${up ? '#ecfdf5' : '#fff1f2'}"/><text x="${pillX + pillW / 2}" y="23.5" font-size="10.5" font-weight="800" fill="${up ? '#059669' : '#e11d48'}" text-anchor="middle">${up ? '▲' : '▼'} ${Math.abs(trend)} pts · ${pts.length} quiz${pts.length === 1 ? '' : 'zes'}</text>`;
  const dates = single ? `<text x="${(W2 / 2).toFixed(1)}" y="${H2 - 10}" font-size="10" font-weight="700" fill="#a3b0c2" text-anchor="middle">${escapeHtml(first.d.slice(5))} · ${escapeHtml(first.s)} — first data point. One more quiz draws your trend line.</text>`
    : `<text x="${padL}" y="${H2 - 10}" font-size="10" font-weight="700" fill="#a3b0c2">${escapeHtml(first.d.slice(5))}</text><text x="${W2 - padR}" y="${H2 - 10}" font-size="10" font-weight="700" fill="#a3b0c2" text-anchor="end">${escapeHtml(last.d.slice(5))}</text>`;
  const dots = P.map((p, i) => {
    const lastPt = i === P.length - 1;
    const halo = `<circle class="cph" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="9" fill="#7c3aed" opacity="0.18"/>`;
    const dot = lastPt
      ? `<circle class="cpd" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="5" fill="#7c3aed" stroke="#ffffff" stroke-width="2.4"/>`
      : `<circle class="cpd" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.4" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>`;
    const hit = interactive ? `<circle class="chart-dot" data-d="${escapeHtml(pts[i].d)}" data-p="${pts[i].p}" data-s="${escapeHtml(pts[i].s)}" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="11" fill="transparent" style="cursor:pointer"/>` : '';
    return `<g class="cpg${interactive && single ? ' cp-on cp-fix' : ''}">${halo}${dot}${hit}</g>`;
  }).join('');
  return `<svg viewBox="0 0 ${W2} ${H2}" class="w-full" role="img" aria-label="Quiz score trend">
    ${grid}
    <path d="${line}" fill="none" stroke="#7c3aed" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
    ${dots}
    ${trendPill}
    ${dates}
  </svg>`;
}
export function progressChartSvg(h) {
  const svg = chartSvgCore(h, true);
  if (svg.charAt(0) !== '<' || svg.slice(0, 4) !== '<svg') return svg; // empty-state paragraph
  return `<div class="chart-wrap relative">${svg}<div class="chart-tip pointer-events-none absolute z-10 hidden min-w-[130px] -translate-x-1/2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-left shadow-pop">
    <div class="chart-tip-date text-[10px] font-black uppercase tracking-wide text-slate-400"></div>
    <div class="mt-0.5 flex items-center gap-1.5 text-[11px] font-bold text-slate-800"><span class="h-2 w-2 shrink-0 rounded-full bg-violet-600"></span><span class="chart-tip-body"></span></div>
  </div></div>`;
}
export function showChartTip(dot) {
  const wrap = dot.closest('.chart-wrap');
  if (!wrap) return;
  const tip = wrap.querySelector('.chart-tip');
  if (!tip) return;
  tip.querySelector('.chart-tip-date').textContent = dot.getAttribute('data-d');
  tip.querySelector('.chart-tip-body').textContent = dot.getAttribute('data-p') + '% · ' + dot.getAttribute('data-s');
  tip.classList.remove('hidden');
  const wr = wrap.getBoundingClientRect();
  const dr = dot.getBoundingClientRect();
  const x = dr.left - wr.left + dr.width / 2;
  const y = dr.top - wr.top;
  tip.style.left = Math.max(70, Math.min(wr.width - 70, x)) + 'px';
  tip.style.top = Math.max(44, y - 12) + 'px';
  const grp = dot.parentNode && dot.parentNode.classList && dot.parentNode.classList.contains('cpg') ? dot.parentNode : null;
  if (grp) grp.classList.add('cp-on');
}
export function hideChartTip() {
  document.querySelectorAll('.chart-tip').forEach(t => t.classList.add('hidden'));
  document.querySelectorAll('.cpg.cp-on').forEach(g => { if (!g.classList.contains('cp-fix')) g.classList.remove('cp-on'); });
}
const HM_DOWS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const HM_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const HM_DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/** Calendar activity heatmap: 7 rows (Mon→Sun) × 12 week columns, GitHub-style
 *  clarity without GitHub's look. Reads the existing per-day activity counts
 *  (state.quizStats.days) — nothing about how activity is tracked changes. */
export function activityHeatSvg(days) {
  const weeks = 12;
  const cell = 12, gap = 4, pitch = cell + gap;
  const labelW = 26, topH = 14;
  const today = new Date();
  const mondayThisWeek = new Date(today);
  mondayThisWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  const start = new Date(mondayThisWeek);
  start.setDate(mondayThisWeek.getDate() - (weeks - 1) * 7);
  const iso = x => localISO(x);
  const todayIso = iso(today);
  const fmt = x => `${HM_DOWS[(x.getDay() + 6) % 7]}, ${HM_MONTHS[x.getMonth()]} ${x.getDate()}`;
  const level = n => (n <= 0 ? '#f1f5f9' : n === 1 ? '#dcfce7' : n <= 3 ? '#bbf7d0' : n <= 6 ? '#4ade80' : '#15803d');
  let cells = '';
  let monthLabels = '';
  let prevMonth = -1;
  let activeDays = 0, run = 0, bestRun = 0;
  const dowTotals = [0, 0, 0, 0, 0, 0, 0];
  for (let w = 0; w < weeks; w++) {
    const monday = new Date(start); monday.setDate(start.getDate() + w * 7);
    if (w === 0 || monday.getMonth() !== prevMonth) {
      monthLabels += `<text x="${labelW + w * pitch + 1}" y="9.5" font-size="8.5" font-weight="700" fill="#94a3b8">${HM_MONTHS[monday.getMonth()]}</text>`;
      prevMonth = monday.getMonth();
    }
    for (let r = 0; r < 7; r++) {
      const dt = new Date(start); dt.setDate(start.getDate() + w * 7 + r);
      const x = labelW + w * pitch, y = topH + r * pitch;
      if (iso(dt) > todayIso) {
        cells += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="3" fill="#f8fafc" stroke="#eef2f7" stroke-width="1"/>`;
        continue;
      }
      const n = (days || {})[iso(dt)] || 0;
      if (n > 0) { activeDays += 1; dowTotals[(dt.getDay() + 6) % 7] += n; }
      run = n > 0 ? run + 1 : 0;
      if (run > bestRun) bestRun = run;
      cells += `<rect class="hm-cell" x="${x}" y="${y}" width="${cell}" height="${cell}" rx="3" fill="${level(n)}"><title>${fmt(dt)} — ${n === 0 ? 'no activity' : `${n} activit${n === 1 ? 'y' : 'ies'}`}</title></rect>`;
    }
  }
  const best = Math.max(...dowTotals);
  const mostActive = best > 0 ? HM_DAY_NAMES[dowTotals.indexOf(best)] : '—';
  const W = labelW + weeks * pitch - gap, H = topH + 7 * pitch - gap;
  const rowLabel = (r, name) => `<text x="${labelW - 7}" y="${topH + r * pitch + 8.8}" font-size="8" font-weight="700" fill="#a3b0c2" text-anchor="end">${name}</text>`;
  const swatch = bg => `<span class="inline-block h-2.5 w-2.5 rounded-[3px]" style="background:${bg}"></span>`;
  return `
    <style>.hm-cell{transition:filter .12s ease}.hm-cell:hover{filter:brightness(.88);stroke:#475569;stroke-width:1.25;stroke-opacity:1}</style>
    <svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:330px" role="img" aria-label="Study activity over the last 12 weeks">
      ${monthLabels}
      ${rowLabel(0, 'Mon')}${rowLabel(2, 'Wed')}${rowLabel(4, 'Fri')}
      ${cells}
    </svg>
    <div class="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
      <div class="flex flex-wrap gap-1.5">
        <span class="rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">🗓 <b class="font-black text-slate-900">${activeDays}</b> active day${activeDays === 1 ? '' : 's'}</span>
        <span class="rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">⚡ Best run: <b class="font-black text-slate-900">${bestRun}</b> day${bestRun === 1 ? '' : 's'}</span>
        <span class="rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">⭐ Most active: <b class="font-black text-slate-900">${mostActive}</b></span>
      </div>
      <div class="flex items-center gap-1 text-[10px] font-semibold text-slate-400">Less ${swatch('#f1f5f9')}${swatch('#dcfce7')}${swatch('#bbf7d0')}${swatch('#4ade80')}${swatch('#15803d')} More</div>
    </div>`;
}
