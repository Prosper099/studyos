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
  const dots = interactive ? P.map((p, i) => `<g class="cpg${single ? ' cp-on cp-fix' : ''}"><circle class="cph" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="9" fill="#7c3aed" opacity="0.18"/><circle class="cpd" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4.5" fill="#7c3aed" stroke="#ffffff" stroke-width="2"/><circle class="chart-dot" data-d="${escapeHtml(pts[i].d)}" data-p="${pts[i].p}" data-s="${escapeHtml(pts[i].s)}" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="11" fill="transparent" style="cursor:pointer"/></g>`).join('') : '';
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
export function activityHeatSvg(days) {
  const weeks = 12, cell = 13, gap = 4;
  const d0 = new Date();
  const start = new Date(d0); start.setDate(d0.getDate() - (weeks * 7 - 1));
  const iso = x => localISO(x);
  let rects = '';
  for (let i = 0; i < weeks * 7; i++) {
    const dt = new Date(start); dt.setDate(start.getDate() + i);
    const n = (days || {})[iso(dt)] || 0;
    const col = n === 0 ? '#f1f5f9' : n === 1 ? '#bbf7d0' : n === 2 ? '#4ade80' : '#16a34a';
    const x = Math.floor(i / 7) * (cell + gap), y = (i % 7) * (cell + gap);
    rects += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="3" fill="${col}"><title>${iso(dt)} — ${n} activit${n === 1 ? 'y' : 'ies'}</title></rect>`;
  }
  const W3 = weeks * (cell + gap), H3 = 7 * (cell + gap);
  return `<svg viewBox="0 0 ${W3} ${H3}" class="w-full" role="img" aria-label="Study activity heatmap">${rects}</svg>
    <div class="mt-1 flex items-center justify-end gap-1 text-[10px] font-semibold text-slate-400">less
      <span class="inline-block h-2.5 w-2.5 rounded" style="background:#f1f5f9"></span>
      <span class="inline-block h-2.5 w-2.5 rounded" style="background:#bbf7d0"></span>
      <span class="inline-block h-2.5 w-2.5 rounded" style="background:#4ade80"></span>
      <span class="inline-block h-2.5 w-2.5 rounded" style="background:#16a34a"></span> more</div>`;
}
