// WINGMAN use cases – graph explorer, use-case stepper, video facades.
const I = {
  requirement: 'M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z M9 12l2 2 4-4',
  document: 'M5 19l2.5-8h14L19 19H5z M5 19V6a1 1 0 0 1 1-1h4l2 2h6a1 1 0 0 1 1 1v3',
  asset: 'M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z M5 13h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z M8 7.5h.01 M8 16.5h.01',
  supplier: 'M4 20h16 M6 20V8l6-4 6 4v12 M10 20v-4h4v4 M9 10h.01 M15 10h.01 M9 13h.01 M15 13h.01',
  person: 'M12 11.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5z M4.5 20.5c0-3.9 3.3-6 7.5-6s7.5 2.1 7.5 6',
  role: 'M4 7h16v12H4z M9 7V5h6v2 M9 13.2a1.8 1.8 0 1 0 0-.01 M6.5 17c.6-1.3 1.4-1.8 2.5-1.8s1.9.5 2.5 1.8 M14 12h3.5 M14 15h3.5',
  risk: 'M12 4L3 20h18L12 4z M12 10v4 M12 17h.01',
  threat: 'M12 5a7 7 0 1 0 7 7 M12 9a3 3 0 1 0 3 3 M12 12l7-7',
  vulnerability: 'M6 11h12v9H6z M8.5 11V7.5a3.5 3.5 0 0 1 6.6-1.6 M12 14.5v2.5',
  signal: 'M12 21V9 M7 4v5h10V4 M3 4v3 M21 4v3 M12 4v5',
  incident: 'M12 3.2c.6 2.6 2.2 4 3.6 5.6 1.2 1.4 2 3 2 4.9a5.6 5.6 0 0 1-11.2 0c0-1.7.7-3.2 1.8-4.3.2 1.3.8 2.2 1.7 2.6-.3-3.2.5-6.3 2.1-8.8z',
  control: 'M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z M9 12l2 2 4-4',
  plan: 'M5.5 6h13A1.5 1.5 0 0 1 20 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6z M4 10.5h16 M8.5 3.5v4.5 M15.5 3.5v4.5',
  task: 'M10 6h10 M10 12h10 M10 18h10 M4 6l1 1 2-2 M4 12l1 1 2-2 M4 18l1 1 2-2',
  audit: 'M8 5H6.5A1.5 1.5 0 0 0 5 6.5v13A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 17.5 5H16 M8 3.5h8v3H8z M9 14l2 2 4-4',
  finding: 'M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z M20 20l-4.8-4.8 M7.5 10.5h6',
  conclusion: 'M12 3l2.4 1.8 3 .1.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3 .1L12 21l-2.4-1.8-3-.1-.9-2.9L3.3 14.4l.9-2.9-.9-2.9 2.4-1.8.9-2.9 3-.1z M9 12l2 2 4-4',
  evidence: 'M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21H11 M14 3l5 5h-5V3 M17 13.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M17 15.5v2l1.2 1.2'
};
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

// ---------- video facades: load the YouTube player only on click ----------
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-play]');
  if (!a) return;
  e.preventDefault();
  const box = a.closest('[data-yt]');
  const f = document.createElement('iframe');
  f.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(box.dataset.yt)}?autoplay=1&rel=0`;
  f.title = a.getAttribute('aria-label') || 'Video';
  f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  f.allowFullscreen = true;
  box.replaceChildren(f);
});

// ---------- relationships table filter ----------
const relf = $('relf');
if (relf) relf.addEventListener('change', () => {
  const v = relf.value;
  document.querySelectorAll('#reltable tbody tr').forEach((tr) => { tr.hidden = !!v && tr.dataset.a !== v && tr.dataset.b !== v; });
});

// ---------- graph ----------
const dataEl = $('wm-data');
if (dataEl) {
  const D = JSON.parse(dataEl.textContent);
  const T = D.t;
  const byId = Object.fromEntries(D.nodes.map((n) => [n.id, n]));
  const layerX = Object.fromEntries(D.layers.map((l) => [l.id, l.x]));
  D.nodes.forEach((n) => { n.x = layerX[n.layer]; });
  const R = D.edges.map((r, i) => ({ ...r, i }));
  const findEdge = (x, y) => R.find((r) => (r.a === x && r.b === y) || (r.a === y && r.b === x));
  const edgeKey = (k) => { const [x, y] = k.split('-'); return findEdge(x, y); };

  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs = {}, parent) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); if (parent) parent.appendChild(el); return el; };
  function geom(r) {
    const A = byId[r.a], B = byId[r.b];
    if (r.a === r.b) { const x = A.x, y = A.y; return { d: `M${x - 14},${y - 21} C${x - 40},${y - 82} ${x + 40},${y - 82} ${x + 14},${y - 21}`, mx: x, my: y - 70 }; }
    const dx = B.x - A.x, dy = B.y - A.y;
    let cx = (A.x + B.x) / 2, cy = (A.y + B.y) / 2;
    if (Math.abs(dx) < 1) cx += Math.abs(dy) > 140 ? 70 : 0; else { cy -= dx * 0.08; cx += dy * 0.06; }
    return { d: `M${A.x},${A.y} Q${cx},${cy} ${B.x},${B.y}`, mx: 0.25 * A.x + 0.5 * cx + 0.25 * B.x, my: 0.25 * A.y + 0.5 * cy + 0.25 * B.y };
  }
  function makeGraph(svg, onPick) {
    const gB = mk('g', {}, svg), gE = mk('g', {}, svg), gN = mk('g', {}, svg), gL = mk('g', {}, svg);
    D.layers.forEach((l, i) => {
      if (i % 2 === 0) mk('rect', { x: l.x - 92, y: 0, width: 184, height: 650, class: 'gband' }, gB);
      mk('text', { x: l.x, y: 40, class: 'colhead', 'text-anchor': 'middle' }, gB).textContent = l.name;
    });
    const E = R.map((r) => { const g = geom(r); r.mx = g.mx; r.my = g.my; return mk('path', { d: g.d, class: 'edge' }, gE); });
    const NE = {};
    D.nodes.forEach((n) => {
      const g = mk('g', { class: 'node', transform: `translate(${n.x},${n.y})`, tabindex: '0', role: 'button', 'aria-label': n.name }, gN);
      mk('circle', { r: 25 }, g); mk('path', { d: I[n.id] || '', class: 'glyph', transform: 'translate(-12,-12)' }, g);
      mk('text', { y: 50 }, g).textContent = n.name;
      g.addEventListener('click', () => onPick(n.id));
      g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(n.id); } });
      NE[n.id] = g;
    });
    return function draw(o) {
      gL.textContent = '';
      R.forEach((r) => {
        const p = E[r.i], hot = o.hot.has(r.i), gap = o.gap === r.i;
        p.setAttribute('class', 'edge' + (hot ? ' hot' + (o.flow ? ' flow' : '') : '') + (gap ? ' gapline' : '') + (!hot && !gap ? ' dim' : ''));
        if (!hot && !gap) return;
        gE.appendChild(p);
        const word = gap ? `${o.gapLabel}: ${r.v}` : r.v, w = word.length * 8.6 + 18, t = mk('g', { class: 'elabel' + (gap ? ' g' : '') }, gL);
        mk('rect', { x: r.mx - w / 2, y: r.my - 13, width: w, height: 26, rx: 7 }, t);
        mk('text', { x: r.mx, y: r.my }, t).textContent = word;
        const k = o.hot.get(r.i);
        if (k) { const s = mk('g', { class: 'stepnum' }, gL); mk('circle', { cx: r.mx - w / 2 - 12, cy: r.my, r: 10 }, s); mk('text', { x: r.mx - w / 2 - 12, y: r.my }, s).textContent = k; }
      });
      D.nodes.forEach((n) => {
        const lit = o.lit.has(n.id), half = o.half && o.half.has(n.id);
        NE[n.id].setAttribute('class', 'node' + (o.sel === n.id ? ' sel' : '') + (o.gapNodes && o.gapNodes.has(n.id) ? ' gapn' : '') + (lit ? '' : half ? ' half' : ' dim'));
        NE[n.id].setAttribute('aria-pressed', o.sel === n.id ? 'true' : 'false');
      });
    };
  }
  const icon = (id) => `<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${I[id] || ''}"/></svg></span>`;
  const layerName = (k) => (D.layers.find((l) => l.id === k) || {}).name || k;

  if (D.mode === 'explorer') {
    let mode = 'entity', sel = 'control', qi = 0, gi = 0;
    let lens = store.get('wm-lens') === 'cyber' ? 'cyber' : 'grc';
    const draw = makeGraph($('graph'), (id) => pick(id));
    const lensTable = document.querySelector('table.lenses');
    function panelEntity() {
      const n = byId[sel];
      const rel = R.filter((r) => r.a === sel || r.b === sel).map((r) => {
        const other = r.a === sel ? r.b : r.a, verb = r.a === sel ? r.v : r.p;
        return `<button type="button" class="link" data-go="${other}"><span class="v">${esc(verb)}</span><span class="n">${esc(byId[other].name)}</span></button>`;
      }).join('');
      const used = D.usecases.filter((u) => u.nodes.includes(sel)).map((u) => `<a class="chip" href="${esc(u.url)}">${esc(u.title)}</a>`).join(' ');
      const tag = n.tag ? `<span class="badge${n.id === 'evidence' ? ' warn' : ''}">${esc(n.tag)}</span>` : '';
      return `<div class="head">${icon(n.id)}<div><p class="eyebrow">${esc(layerName(n.layer))}</p><h3>${esc(n.name)}${tag}</h3></div></div>
        <p class="def">${esc(n.def)}</p>
        <div class="why"><span class="lens">${esc(lens === 'grc' ? T.why_grc : T.why_cyber)}</span><p>${esc(lens === 'grc' ? n.grc : n.cyber)}</p></div>
        <div class="blk"><h4>${esc(T.what_records)}</h4><ul>${(n.rec || []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
        <div class="blk"><h4>${esc(T.linked_to)}</h4><div class="links">${rel}</div></div>
        ${used ? `<div class="blk"><h4>${esc(T.used_in)}</h4><div class="chips">${used}</div></div>` : ''}
        <p class="example"><b>${esc(T.example)}:</b> ${esc(n.ex)}</p>`;
    }
    function panelQuestions() {
      const q = D.questions[qi];
      const steps = q.path.map(([x, y]) => { const r = findEdge(x, y); return r ? `<li><b>${esc(byId[r.a].name)}</b> ${esc(r.v)} <b>${esc(byId[r.b].name)}</b></li>` : ''; }).join('');
      return `<div><p class="eyebrow">${esc(T.mode_question)}</p><h3>${esc(T.follow_links)}</h3></div>
        <div class="list">${D.questions.map((x, i) => `<button type="button" class="item" data-q="${i}" aria-pressed="${i === qi}">${esc(x.q)}</button>`).join('')}</div>
        <div class="blk"><h4>${esc(T.the_path)}</h4><ol class="steps">${steps}</ol></div><p class="def">${esc(q.a)}</p>`;
    }
    function panelGaps() {
      return `<div><p class="eyebrow">${esc(T.mode_gap)}</p><h3>${esc(T.gap_title)}</h3></div>
        <div class="list">${D.gaps.map((x, i) => `<button type="button" class="item gapi" data-g="${i}" aria-pressed="${i === gi}"><b>${esc(x.t)}</b><small>${esc(x.m)}</small></button>`).join('')}</div>
        <p class="example">${esc(T.gap_note)}</p>`;
    }
    function render() {
      const o = { lit: new Set(), hot: new Map(), gap: null, gapNodes: null, sel: null, flow: false, gapLabel: T.missing };
      if (mode === 'entity') { o.sel = sel; o.lit.add(sel); R.forEach((r) => { if (r.a === sel || r.b === sel) { o.hot.set(r.i, 0); o.lit.add(r.a); o.lit.add(r.b); } }); }
      else if (mode === 'question') { o.flow = true; D.questions[qi].path.forEach(([x, y], k) => { const r = findEdge(x, y); if (r) { o.hot.set(r.i, k + 1); o.lit.add(r.a); o.lit.add(r.b); } }); }
      else { const g = D.gaps[gi], r = findEdge(g.a, g.b); o.gap = r ? r.i : null; o.gapNodes = new Set([g.a, g.b]); o.lit = new Set([g.a, g.b]); o.gapLabel = g.conflict ? T.conflict : T.missing; }
      draw(o);
      $('panel').innerHTML = mode === 'entity' ? panelEntity() : mode === 'question' ? panelQuestions() : panelGaps();
      document.querySelectorAll('#chips .chip').forEach((c) => c.setAttribute('aria-pressed', mode === 'entity' && c.dataset.go === sel ? 'true' : 'false'));
      $('chips').hidden = mode !== 'entity';
      ['entity', 'question', 'gap'].forEach((k) => $('m-' + k).setAttribute('aria-pressed', k === mode ? 'true' : 'false'));
      $('l-grc').setAttribute('aria-pressed', lens === 'grc'); $('l-cyber').setAttribute('aria-pressed', lens === 'cyber');
      if (lensTable) lensTable.className = 'lenses ' + lens;
    }
    function pick(id) { sel = id; mode = 'entity'; render(); }
    $('m-entity').onclick = () => { mode = 'entity'; render(); };
    $('m-question').onclick = () => { mode = 'question'; render(); };
    $('m-gap').onclick = () => { mode = 'gap'; render(); };
    $('l-grc').onclick = () => { lens = 'grc'; store.set('wm-lens', lens); render(); };
    $('l-cyber').onclick = () => { lens = 'cyber'; store.set('wm-lens', lens); render(); };
    document.addEventListener('click', (e) => {
      const go = e.target.closest('[data-go]'); if (go) { pick(go.dataset.go); return; }
      const q = e.target.closest('[data-q]'); if (q) { qi = +q.dataset.q; render(); return; }
      const g = e.target.closest('[data-g]'); if (g) { gi = +g.dataset.g; render(); }
    });
    const fromHash = () => {
      const h = location.hash.slice(1);
      if (h.startsWith('e-') && byId[h.slice(2)]) { sel = h.slice(2); mode = 'entity'; render(); $('model')?.scrollIntoView(); }
      else if (h === 'questions') { mode = 'question'; render(); }
      else if (h === 'gaps') { mode = 'gap'; render(); }
    };
    render(); fromHash();
    window.addEventListener('hashchange', fromHash);
  }

  if (D.mode === 'usecase') {
    const stages = D.stages || [];
    const items = [...document.querySelectorAll('#stages .stage')];
    let si = 0;
    const all = new Set(); stages.forEach((s) => s.nodes.forEach((id) => all.add(id)));
    const draw = makeGraph($('graph'), (id) => { location.href = `${D.home}#e-${id}`; });
    const stepper = $('stepper'), nav = $('stagenav');
    document.documentElement.classList.add('js');
    stepper.hidden = false; nav.hidden = false;
    stepper.innerHTML = stages.map((s, i) => `<button type="button" class="stepbtn" data-si="${i}" title="${esc(s.title)}">${i + 1}</button>`).join('');
    function render(push) {
      const s = stages[si];
      const o = { lit: new Set(s.nodes), half: all, hot: new Map(), gap: null, gapNodes: null, sel: null, flow: true, gapLabel: T.conflict };
      (s.links || []).forEach((k, n) => { const r = edgeKey(k); if (!r) return; if (s.conflict) { o.gap = r.i; o.gapNodes = new Set([r.a, r.b]); } else o.hot.set(r.i, n + 1); });
      draw(o);
      items.forEach((li, i) => li.classList.toggle('on', i === si));
      stepper.querySelectorAll('.stepbtn').forEach((b, i) => b.setAttribute('aria-pressed', i === si ? 'true' : 'false'));
      nav.children[0].disabled = si === 0; nav.children[1].disabled = si === stages.length - 1;
      if (push) history.replaceState(null, '', `#stage-${si + 1}`);
    }
    document.addEventListener('click', (e) => {
      const b = e.target.closest('[data-si]'); if (b) { si = +b.dataset.si; render(true); return; }
      const n = e.target.closest('[data-step]'); if (n && !n.disabled) { si = Math.max(0, Math.min(stages.length - 1, si + +n.dataset.step)); render(true); }
    });
    document.addEventListener('keydown', (e) => {
      if (e.target.closest('input, select, textarea')) return;
      if (e.key === 'ArrowRight' && si < stages.length - 1) { si++; render(true); }
      if (e.key === 'ArrowLeft' && si > 0) { si--; render(true); }
    });
    const m = location.hash.match(/^#stage-(\d+)$/); if (m) si = Math.min(stages.length - 1, Math.max(0, +m[1] - 1));
    render(false);
  }
}
