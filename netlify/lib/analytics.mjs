// Cookieless visit counter shared by the two Netlify functions.
// Storage: one JSON document per UTC day in the "hits" blob store, plus one random salt per day.
// A visitor is a hash of (daily salt, secret, IP, user agent); it is kept only inside the day's
// document and replaced by a count once the day is finalised, so it cannot be traced back later.
import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';

export const EVENTS = new Set(['view', 'section', 'copy']);
const PATH_RE = /^\/[A-Za-z0-9\-._~!$&'()*+,;=:@%/]{0,199}$/;
const ID_RE = /^[A-Za-z0-9\-_.:]{1,80}$/;
const HOST_RE = /^[a-z0-9.-]{1,100}$/;
const BOT_RE = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|fetch|curl|wget|python|java\/|go-http|okhttp|monitor|uptime|scan|facebookexternalhit|whatsapp|telegram|embedly|dataprovider|ahrefs|semrush/i;

export const dayOf = (date = new Date()) => date.toISOString().slice(0, 10);
const addDays = (day, n) => dayOf(new Date(Date.parse(`${day}T00:00:00Z`) + n * 86400000));

/** Validate a beacon body. Returns {p, e, s, r} or null. Unknown fields are dropped. */
export function parseHit(raw) {
  let o;
  try { o = typeof raw === 'string' ? JSON.parse(raw) : raw; } catch { return null; }
  if (!o || typeof o !== 'object') return null;
  const p = typeof o.p === 'string' ? o.p.split('?')[0].split('#')[0] : '';
  const e = o.e;
  if (!PATH_RE.test(p) || !EVENTS.has(e)) return null;
  const s = e === 'view' ? '' : String(o.s ?? '');
  if (e !== 'view' && !ID_RE.test(s)) return null;
  const r = e === 'view' && typeof o.r === 'string' ? o.r.toLowerCase() : '';
  return { p, e, s, r: HOST_RE.test(r) ? r : '' };
}

export const isBot = (ua) => !ua || ua.length < 10 || BOT_RE.test(ua);

export function visitorHash({ salt, pepper = '', ip = '', ua = '' }) {
  return createHash('sha256').update(`${salt}|${pepper}|${ip}|${ua}`).digest('hex').slice(0, 16);
}

export const emptyDay = () => ({ v: 1, final: false, u: {}, pages: {}, countries: {} });

/** Mutates the day document with one hit. */
export function applyHit(day, hit, hash, country = '') {
  const page = (day.pages[hit.p] ||= { views: 0, u: {}, sections: {}, copies: {}, refs: {} });
  if (hit.e === 'view') {
    page.views += 1;
    page.u[hash] = 1;
    day.u[hash] = 1;
    if (hit.r) page.refs[hit.r] = (page.refs[hit.r] || 0) + 1;
    if (country) day.countries[country] = (day.countries[country] || 0) + 1;
  } else if (hit.e === 'section') {
    const s = (page.sections[hit.s] ||= { views: 0, u: {} });
    s.views += 1;
    s.u[hash] = 1;
  } else if (hit.e === 'copy') {
    page.copies[hit.s] = (page.copies[hit.s] || 0) + 1;
  }
  return day;
}

const size = (o) => (o ? Object.keys(o).length : 0);

/** Returns a copy of the day with visitor sets replaced by counts. Safe on finalised days. */
export function counts(day) {
  if (!day) return null;
  if (day.final) return structuredClone(day);
  const out = { v: 1, final: true, uniques: size(day.u), pages: {}, countries: { ...day.countries } };
  for (const [path, p] of Object.entries(day.pages)) {
    const sections = {};
    for (const [id, s] of Object.entries(p.sections || {})) sections[id] = { views: s.views, uniques: size(s.u) };
    out.pages[path] = { views: p.views, uniques: size(p.u), sections, copies: { ...p.copies }, refs: { ...p.refs } };
  }
  return out;
}

async function getDailySalt(store, day) {
  const key = `salts/${day}`;
  const existing = await store.get(key, { type: 'text' });
  if (existing) return existing;
  const salt = randomBytes(32).toString('hex');
  const res = await store.set(key, salt, { onlyIfNew: true });
  return res.modified ? salt : store.get(key, { type: 'text' });
}

/** Finalise days before yesterday and delete their salts. Called on the first hit of a new day. */
export async function housekeeping(store, today) {
  const keep = addDays(today, -1);
  const { blobs = [] } = await store.list({ prefix: 'days/' });
  for (const { key } of blobs) {
    const day = key.slice(5);
    if (day >= keep) continue;
    const cur = await store.getWithMetadata(key, { type: 'json' });
    if (!cur || cur.data.final) continue;
    await store.set(key, JSON.stringify(counts(cur.data)), { onlyIfMatch: cur.etag });
  }
  const salts = await store.list({ prefix: 'salts/' });
  for (const { key } of salts.blobs || []) if (key.slice(6) < keep) await store.delete(key);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Record one hit with optimistic concurrency. Returns true when stored. */
export async function recordHit(store, { hit, ip, ua, country = '', pepper = '', now = new Date(), attempts = 8 }) {
  const day = dayOf(now);
  const salt = await getDailySalt(store, day);
  const hash = visitorHash({ salt, pepper, ip, ua });
  const key = `days/${day}`;
  for (let i = 0; i < attempts; i++) {
    const cur = await store.getWithMetadata(key, { type: 'json' });
    if (!cur) {
      const res = await store.set(key, JSON.stringify(applyHit(emptyDay(), hit, hash, country)), { onlyIfNew: true });
      if (res.modified) { await housekeeping(store, day).catch(() => {}); return true; }
    } else {
      const res = await store.set(key, JSON.stringify(applyHit(cur.data, hit, hash, country)), { onlyIfMatch: cur.etag });
      if (res.modified) return true;
    }
    await sleep(15 + Math.random() * 60 * (i + 1));
  }
  return false;
}

/** Read the last n days (newest first) as count documents. */
export async function readDays(store, { days = 30, now = new Date() } = {}) {
  const today = dayOf(now);
  const keys = Array.from({ length: days }, (_, i) => addDays(today, -i));
  const docs = await Promise.all(keys.map((d) => store.get(`days/${d}`, { type: 'json' }).catch(() => null)));
  return keys.map((day, i) => ({ day, data: counts(docs[i]) })).filter((x) => x.data);
}

const sum = (rows, f) => rows.reduce((a, r) => a + f(r), 0);
const sortDesc = (arr, k) => arr.sort((a, b) => b[k] - a[k]);

/** Aggregate day documents into the tables the stats page shows. Uniques are daily uniques summed over the period. */
export function aggregate(dayDocs, { page = '' } = {}) {
  const days = [];
  const pages = {};
  const sections = {};
  const referrers = {};
  const countries = {};
  for (const { day, data } of dayDocs) {
    let copies = 0;
    let views = 0;
    for (const [path, p] of Object.entries(data.pages)) {
      views += p.views;
      const pc = sum(Object.values(p.copies), (n) => n);
      copies += pc;
      const row = (pages[path] ||= { path, views: 0, uniques: 0, copies: 0, days: 0 });
      row.views += p.views; row.uniques += p.uniques; row.copies += pc; row.days += 1;
      for (const [h, n] of Object.entries(p.refs)) referrers[h] = (referrers[h] || 0) + n;
      if (page && path !== page) continue;
      for (const [id, s] of Object.entries(p.sections)) {
        const r = (sections[`${path}#${id}`] ||= { path, id, views: 0, uniques: 0, copies: 0 });
        r.views += s.views; r.uniques += s.uniques;
      }
      for (const [id, n] of Object.entries(p.copies)) {
        const r = (sections[`${path}#${id}`] ||= { path, id, views: 0, uniques: 0, copies: 0 });
        r.copies += n;
      }
    }
    for (const [c, n] of Object.entries(data.countries)) countries[c] = (countries[c] || 0) + n;
    days.push({ day, views, uniques: data.uniques, copies });
  }
  return {
    days,
    totals: { views: sum(days, (d) => d.views), uniques: sum(days, (d) => d.uniques), copies: sum(days, (d) => d.copies) },
    pages: sortDesc(Object.values(pages), 'views'),
    sections: sortDesc(Object.values(sections), 'views'),
    referrers: sortDesc(Object.entries(referrers).map(([host, n]) => ({ host, views: n })), 'views'),
    countries: sortDesc(Object.entries(countries).map(([code, n]) => ({ code, views: n })), 'views'),
  };
}

export function tokenMatches(given, expected) {
  if (!given || !expected) return false;
  const a = createHash('sha256').update(String(given)).digest();
  const b = createHash('sha256').update(String(expected)).digest();
  return timingSafeEqual(a, b);
}

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function renderStats(agg, { days, page, token, site = '' }) {
  const q = (o) => '?' + new URLSearchParams({ token, days: String(days), ...(o.page !== undefined ? { page: o.page } : page ? { page } : {}), ...(o.days ? { days: String(o.days) } : {}) }).toString();
  const table = (head, rows, cells) => `<table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.length ? rows.map((r) => `<tr>${cells(r).map((c) => `<td>${c}</td>`).join('')}</tr>`).join('') : `<tr><td colspan="${head.length}" class="empty">No data yet</td></tr>`}</tbody></table>`;
  const n = (x) => `<span class="n">${x}</span>`;
  const pageLink = (path) => `<a href="${esc(site + path)}" target="_blank" rel="noopener">${esc(path)}</a> <a class="filter" href="${esc(q({ page: path }))}">sections</a>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Visit counter</title>
<style>
body{font:15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;color:#3F3D56;background:#FBFBFD;margin:0;padding:24px}main{max-width:1100px;margin:0 auto;display:grid;gap:28px}
h1{font-size:1.6rem;margin:0}h2{font-size:1.1rem;margin:0 0 8px}p{margin:0}.muted{color:#75738B;font-size:.9rem}
.range a{margin-right:10px}.range a[aria-current]{font-weight:700;text-decoration:none}
.tiles{display:flex;gap:12px;flex-wrap:wrap}.tile{background:#fff;border:1px solid #DCDAE6;border-radius:12px;padding:12px 16px;min-width:140px}.tile b{display:block;font-size:1.5rem}
table{border-collapse:collapse;width:100%;background:#fff;border:1px solid #DCDAE6;border-radius:12px;overflow:hidden}th,td{text-align:left;padding:8px 12px;border-bottom:1px solid #DCDAE6;vertical-align:top}th{font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;color:#75738B;background:#F6F5FA}
td .n{font-variant-numeric:tabular-nums}.empty{color:#75738B}.filter{font-size:.85rem;margin-left:8px}a{color:#0B6374}
@media(prefers-color-scheme:dark){body{background:#2A283B;color:#F3F2F8}table,.tile{background:#3F3D56;border-color:#59577A}th{background:#33314A;color:#A6A4BC}td,th{border-color:#59577A}a{color:#6FC2D2}.muted,.empty{color:#A6A4BC}}
</style></head><body><main>
<div><h1>Visit counter</h1><p class="muted">Cookieless. Uniques are per UTC day and summed over the period, so a visitor who returns on another day counts again. Bots with known signatures are excluded.</p></div>
<p class="range">Period: ${[7, 30, 90].map((d) => `<a href="${esc(q({ days: d }))}"${d === days ? ' aria-current="true"' : ''}>${d} days</a>`).join('')}${page ? ` · Sections filtered to <code>${esc(page)}</code> <a class="filter" href="${esc(q({ page: '' }))}">show all pages</a>` : ''} · <a class="filter" href="${esc(q({}))}&format=json">JSON</a></p>
<div class="tiles"><div class="tile">Views<b>${agg.totals.views}</b></div><div class="tile">Daily uniques<b>${agg.totals.uniques}</b></div><div class="tile">Prompts copied<b>${agg.totals.copies}</b></div></div>
<section><h2>Per day</h2>${table(['Day', 'Views', 'Uniques', 'Copies'], agg.days, (d) => [esc(d.day), n(d.views), n(d.uniques), n(d.copies)])}</section>
<section><h2>Per page</h2>${table(['Page', 'Views', 'Uniques', 'Copies', 'Days with visits'], agg.pages, (p) => [pageLink(p.path), n(p.views), n(p.uniques), n(p.copies), n(p.days)])}</section>
<section><h2>Per section${page ? '' : ' (all pages)'}</h2><p class="muted">A section counts when it scrolls into view; a prompt block also counts copies.</p>${table(['Page', 'Section', 'Seen', 'Uniques', 'Copies'], agg.sections, (s) => [esc(s.path), `<code>${esc(s.id)}</code>`, n(s.views), n(s.uniques), n(s.copies)])}</section>
<section><h2>Referrers</h2>${table(['Site', 'Views'], agg.referrers, (r) => [esc(r.host), n(r.views)])}</section>
<section><h2>Countries</h2>${table(['Country', 'Views'], agg.countries, (c) => [esc(c.code), n(c.views)])}</section>
</main></body></html>`;
}
