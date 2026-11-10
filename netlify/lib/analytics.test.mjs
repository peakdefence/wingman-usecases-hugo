import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aggregate, applyHit, counts, emptyDay, isBot, parseHit, readDays, recordHit, renderStats, tokenMatches, visitorHash } from './analytics.mjs';

class MemStore {
  constructor() { this.m = new Map(); this.n = 0; }
  async getWithMetadata(k, { type } = {}) { await Promise.resolve(); const e = this.m.get(k); return e ? { data: type === 'json' ? JSON.parse(e.v) : e.v, etag: e.etag, metadata: {} } : null; }
  async get(k, { type } = {}) { const e = this.m.get(k); if (!e) return null; return type === 'json' ? JSON.parse(e.v) : e.v; }
  async set(k, v, o = {}) { await Promise.resolve(); const e = this.m.get(k); if (o.onlyIfNew && e) return { modified: false }; if (o.onlyIfMatch && (!e || e.etag !== o.onlyIfMatch)) return { modified: false }; const etag = `e${++this.n}`; this.m.set(k, { v: String(v), etag }); return { modified: true, etag }; }
  async list({ prefix } = {}) { return { blobs: [...this.m.keys()].filter((k) => !prefix || k.startsWith(prefix)).map((k) => ({ key: k, etag: this.m.get(k).etag })) }; }
  async delete(k) { this.m.delete(k); }
}
const at = (s) => new Date(s);
const UA = 'Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/130 Safari/537.36';

test('parseHit accepts valid beacons and rejects junk', () => {
  assert.deepEqual(parseHit('{"p":"/knowledge-base/incident-handling/","e":"view","r":"Google.com"}'), { p: '/knowledge-base/incident-handling/', e: 'view', s: '', r: 'google.com' });
  assert.deepEqual(parseHit({ p: '/a/?x=1#y', e: 'section', s: 'how-to-use' }), { p: '/a/', e: 'section', s: 'how-to-use', r: '' });
  assert.equal(parseHit({ p: 'https://evil', e: 'view' }), null);
  assert.equal(parseHit({ p: '/a/', e: 'purchase' }), null);
  assert.equal(parseHit({ p: '/a/', e: 'copy' }), null);
  assert.equal(parseHit({ p: '/a/', e: 'copy', s: '<script>' }), null);
  assert.equal(parseHit('not json'), null);
  assert.equal(parseHit({ p: '/' + 'a'.repeat(300), e: 'view' }), null);
});

test('bots and empty agents are ignored', () => {
  assert.equal(isBot(''), true);
  assert.equal(isBot('Mozilla/5.0 (compatible; Googlebot/2.1)'), true);
  assert.equal(isBot('curl/8.0'), true);
  assert.equal(isBot(UA), false);
});

test('visitor hash is stable per day and changes with the salt', () => {
  const a = visitorHash({ salt: 's1', ip: '1.2.3.4', ua: UA });
  assert.equal(a, visitorHash({ salt: 's1', ip: '1.2.3.4', ua: UA }));
  assert.notEqual(a, visitorHash({ salt: 's2', ip: '1.2.3.4', ua: UA }));
  assert.equal(a.length, 16);
});

test('counts collapses visitor sets without touching the original', () => {
  const d = emptyDay();
  applyHit(d, { p: '/x/', e: 'view', s: '', r: 'a.com' }, 'h1', 'LV');
  applyHit(d, { p: '/x/', e: 'view', s: '', r: '' }, 'h1', 'LV');
  applyHit(d, { p: '/x/', e: 'section', s: 'intro' }, 'h1');
  applyHit(d, { p: '/x/', e: 'section', s: 'intro' }, 'h2');
  applyHit(d, { p: '/x/', e: 'copy', s: 'p1' }, 'h2');
  const c = counts(d);
  assert.equal(c.final, true);
  assert.equal(c.uniques, 1);
  assert.deepEqual(c.pages['/x/'], { views: 2, uniques: 1, sections: { intro: { views: 2, uniques: 2 } }, copies: { p1: 1 }, refs: { 'a.com': 1 } });
  assert.deepEqual(c.countries, { LV: 2 });
  assert.equal(d.final, false);
  assert.ok(d.pages['/x/'].u);
});

test('recordHit counts views and daily uniques per visitor', async () => {
  const store = new MemStore();
  const base = { hit: { p: '/kb/', e: 'view', s: '', r: '' }, ua: UA, now: at('2026-11-10T10:00:00Z') };
  assert.equal(await recordHit(store, { ...base, ip: '10.0.0.1' }), true);
  assert.equal(await recordHit(store, { ...base, ip: '10.0.0.1' }), true);
  assert.equal(await recordHit(store, { ...base, ip: '10.0.0.2', country: 'EE' }), true);
  const day = counts(await store.get('days/2026-11-10', { type: 'json' }));
  assert.equal(day.pages['/kb/'].views, 3);
  assert.equal(day.pages['/kb/'].uniques, 2);
  assert.equal(day.uniques, 2);
  assert.deepEqual(day.countries, { EE: 1 });
  assert.ok(await store.get('salts/2026-11-10'));
});

test('concurrent hits are not lost', async () => {
  const store = new MemStore();
  const now = at('2026-11-10T10:00:00Z');
  const jobs = Array.from({ length: 60 }, (_, i) => recordHit(store, { hit: { p: '/kb/', e: i % 3 ? 'view' : 'section', s: i % 3 ? '' : 'intro', r: '' }, ip: `10.0.0.${i % 7}`, ua: UA, now }));
  const results = await Promise.all(jobs);
  assert.ok(results.every(Boolean));
  const day = counts(await store.get('days/2026-11-10', { type: 'json' }));
  assert.equal(day.pages['/kb/'].views, 40);
  assert.equal(day.pages['/kb/'].sections.intro.views, 20);
  assert.equal(day.pages['/kb/'].uniques, 7);
});

test('a new day finalises old days and drops their salts', async () => {
  const store = new MemStore();
  const hit = { p: '/kb/', e: 'view', s: '', r: '' };
  await recordHit(store, { hit, ip: '10.0.0.1', ua: UA, now: at('2026-11-08T10:00:00Z') });
  await recordHit(store, { hit, ip: '10.0.0.1', ua: UA, now: at('2026-11-09T10:00:00Z') });
  await recordHit(store, { hit, ip: '10.0.0.1', ua: UA, now: at('2026-11-10T10:00:00Z') });
  const d8 = await store.get('days/2026-11-08', { type: 'json' });
  const d9 = await store.get('days/2026-11-09', { type: 'json' });
  assert.equal(d8.final, true);
  assert.equal(d8.u, undefined);
  assert.equal(d8.pages['/kb/'].uniques, 1);
  assert.equal(d9.final, false, 'yesterday stays open for late hits');
  assert.equal(await store.get('salts/2026-11-08'), null);
  assert.ok(await store.get('salts/2026-11-09'));
  assert.ok(await store.get('salts/2026-11-10'));
});

test('readDays and aggregate build the stats tables', async () => {
  const store = new MemStore();
  const v = (p, r = '') => ({ p, e: 'view', s: '', r });
  await recordHit(store, { hit: v('/kb/', 'linkedin.com'), ip: '1', ua: UA, country: 'LV', now: at('2026-11-09T10:00:00Z') });
  await recordHit(store, { hit: v('/kb/'), ip: '1', ua: UA, country: 'LV', now: at('2026-11-10T10:00:00Z') });
  await recordHit(store, { hit: v('/other/'), ip: '2', ua: UA, country: 'DE', now: at('2026-11-10T11:00:00Z') });
  await recordHit(store, { hit: { p: '/kb/', e: 'section', s: 'prompt-1', r: '' }, ip: '1', ua: UA, now: at('2026-11-10T10:01:00Z') });
  await recordHit(store, { hit: { p: '/kb/', e: 'copy', s: 'prompt-1', r: '' }, ip: '1', ua: UA, now: at('2026-11-10T10:02:00Z') });
  const docs = await readDays(store, { days: 7, now: at('2026-11-10T12:00:00Z') });
  assert.deepEqual(docs.map((d) => d.day), ['2026-11-10', '2026-11-09']);
  const agg = aggregate(docs);
  assert.deepEqual(agg.totals, { views: 3, uniques: 3, copies: 1 });
  assert.deepEqual(agg.days.map((d) => [d.day, d.views, d.uniques]), [['2026-11-10', 2, 2], ['2026-11-09', 1, 1]]);
  assert.deepEqual(agg.pages.map((p) => [p.path, p.views, p.uniques, p.copies, p.days]), [['/kb/', 2, 2, 1, 2], ['/other/', 1, 1, 0, 1]]);
  assert.deepEqual(agg.sections, [{ path: '/kb/', id: 'prompt-1', views: 1, uniques: 1, copies: 1 }]);
  assert.deepEqual(agg.referrers, [{ host: 'linkedin.com', views: 1 }]);
  assert.deepEqual(agg.countries, [{ code: 'LV', views: 2 }, { code: 'DE', views: 1 }]);
  const filtered = aggregate(docs, { page: '/other/' });
  assert.deepEqual(filtered.sections, []);
  assert.equal(filtered.pages.length, 2, 'page filter only narrows the section table');
  const html = renderStats(agg, { days: 7, page: '', token: 't', site: 'https://x.test' });
  assert.match(html, /Per section/);
  assert.match(html, /linkedin\.com/);
  assert.match(html, /href="\?token=t&amp;days=7&amp;page=%2Fkb%2F"/);
});

test('token comparison', () => {
  assert.equal(tokenMatches('abc', 'abc'), true);
  assert.equal(tokenMatches('abd', 'abc'), false);
  assert.equal(tokenMatches('', 'abc'), false);
  assert.equal(tokenMatches('abc', ''), false);
});
