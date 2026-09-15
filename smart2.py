# smart2.py — progress graphs + activity heatmap + recent results in Profile. RUN ONCE.
path = 'index.html'
s = open(path, encoding='utf-8').read()

def rep(old, new, n=1):
    global s
    assert s.count(old) == n, ('COUNT', old[:70], s.count(old))
    s = s.replace(old, new)

# 1: pushHistory + chart builders before recordTask
rep("""function recordTask(kind, result) {""",
"""const MODE_LABELS = { cbt: 'Practice exam', topic: 'Topic quiz', mock: 'Mock', past: 'Past drill' };
function pushHistory(result, subject, mode) {
  const qs = state.quizStats;
  qs.history = Array.isArray(qs.history) ? qs.history : [];
  qs.history.push({ d: todayISO(), p: result.percent, s: subject, m: mode || 'quiz', c: result.correct, t: result.total });
  if (qs.history.length > 60) qs.history = qs.history.slice(-60);
  qs.days = qs.days || {};
  const d0 = todayISO();
  qs.days[d0] = (qs.days[d0] || 0) + 1;
  const keys = Object.keys(qs.days);
  if (keys.length > 200) { keys.sort(); for (const k of keys.slice(0, keys.length - 200)) delete qs.days[k]; }
}
function progressChartSvg(h) {
  const pts = (h || []).slice(-20);
  if (pts.length < 2) return '<p class="rounded-xl bg-slate-50 px-3 py-4 text-center text-xs font-semibold text-slate-400">Take a couple of quizzes and your score graph starts growing here. 📈</p>';
  const W2 = 560, H2 = 180, pad = 26;
  const xs = i => pad + i * (W2 - 2 * pad) / (pts.length - 1);
  const ys = p => H2 - pad - (p / 100) * (H2 - 2 * pad);
  const line = pts.map((q, i) => xs(i).toFixed(1) + ',' + ys(q.p).toFixed(1)).join(' ');
  const area = pad.toFixed(1) + ',' + (H2 - pad) + ' ' + line + ' ' + (W2 - pad).toFixed(1) + ',' + (H2 - pad);
  const dots = pts.map((q, i) => '<circle cx="' + xs(i).toFixed(1) + '" cy="' + ys(q.p).toFixed(1) + '" r="3.4" fill="' + (q.p >= 70 ? '#059669' : q.p >= 40 ? '#d97706' : '#e11d48') + '"/>').join('');
  const last = pts[pts.length - 1], first = pts[0];
  const trend = last.p - first.p;
  return `<svg viewBox="0 0 ${W2} ${H2}" class="w-full" role="img" aria-label="Quiz score trend">
    <line x1="${pad}" y1="${ys(100)}" x2="${W2 - pad}" y2="${ys(100)}" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="${pad}" y1="${ys(50)}" x2="${W2 - pad}" y2="${ys(50)}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4 4"/>
    <line x1="${pad}" y1="${ys(0)}" x2="${W2 - pad}" y2="${ys(0)}" stroke="#cbd5e1" stroke-width="1.4"/>
    <text x="4" y="${ys(100) + 4}" font-size="10" fill="#94a3b8" font-weight="700">100</text>
    <text x="8" y="${ys(50) + 4}" font-size="10" fill="#94a3b8" font-weight="700">50</text>
    <polygon points="${area}" fill="#6366f1" opacity="0.08"/>
    <polyline points="${line}" fill="none" stroke="#6366f1" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    ${dots}
    <text x="${pad}" y="${H2 - 6}" font-size="10" fill="#94a3b8" font-weight="700">${first.d.slice(5)}</text>
    <text x="${W2 - pad}" y="${H2 - 6}" font-size="10" fill="#94a3b8" font-weight="700" text-anchor="end">${last.d.slice(5)}</text>
    <text x="${W2 - pad}" y="14" font-size="11" fill="${trend >= 0 ? '#059669' : '#e11d48'}" font-weight="800" text-anchor="end">${trend >= 0 ? '▲' : '▼'} ${Math.abs(trend)} pts over ${pts.length} quizzes</text>
  </svg>`;
}
function activityHeatSvg(days) {
  const weeks = 12, cell = 13, gap = 4;
  const d0 = new Date();
  const start = new Date(d0); start.setDate(d0.getDate() - (weeks * 7 - 1));
  const iso = x => x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
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
function recordTask(kind, result) {""")

# 2: record history on both grading paths
rep("""    }
  } else {
    state.quizStats = mergeQuizStats(state.quizStats, subject, result);
  }""",
"""    }
    pushHistory(result, subject, 'cbt');
  } else {
    state.quizStats = mergeQuizStats(state.quizStats, subject, result);
    pushHistory(result, subject, state.quiz.mode || 'quiz');
  }""")

# 3: activity days for lessons/cards/focus too
rep("""  const d = todayISO();
  if (!state.daily || state.daily.date !== d) state.daily = { date: d, lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '' };""",
"""  const d = todayISO();
  { const qs = state.quizStats; qs.days = qs.days || {}; qs.days[d] = (qs.days[d] || 0) + 1; }
  if (!state.daily || state.daily.date !== d) state.daily = { date: d, lessons: 0, cards: 0, quizzes: 0, focus: 0, readTopic: '' };""")

# 4: progress section in Profile before Badges
rep("""        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-3 text-sm font-bold text-slate-900">🏅 Badges & streaks</h3>""",
"""        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-1 text-sm font-bold text-slate-900">📈 Your progress</h3>
          <p class="mb-3 text-[11px] text-slate-400">Every quiz draws a dot on this line — watch it climb.</p>
          ${progressChartSvg(s.history)}
          <h4 class="mb-2 mt-4 text-[11px] font-black uppercase tracking-wide text-slate-400">Activity — last 12 weeks</h4>
          ${activityHeatSvg(s.days)}
          ${(s.history || []).length ? `
          <h4 class="mb-2 mt-4 text-[11px] font-black uppercase tracking-wide text-slate-400">Recent results</h4>
          <div class="space-y-1.5">${(s.history || []).slice(-6).reverse().map(q => `
            <div class="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-600">
              <span class="truncate">${q.d} · ${escapeHtml(q.s)} · ${MODE_LABELS[q.m] || 'Quiz'}</span>
              <span class="shrink-0 rounded-full px-2 py-0.5 font-black ${q.p >= 70 ? 'bg-emerald-100 text-emerald-700' : q.p >= 40 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}">${q.p}%</span>
            </div>`).join('')}</div>` : ''}
        </section>

        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 class="mb-3 text-sm font-bold text-slate-900">🏅 Badges & streaks</h3>""")

# 5: export for tests
rep("  markGot, markLater,\n  getState", "  markGot, markLater, pushHistory,\n  getState")

open(path, 'w', encoding='utf-8').write(s)
print('smart2 applied')
