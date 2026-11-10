// GET /api/stats?token=…&days=30&page=/path/&format=json: the private stats page.
import { getStore } from '@netlify/blobs';
import { aggregate, readDays, renderStats, tokenMatches } from '../lib/analytics.mjs';

export const handle = async (req, store) => {
  const url = new URL(req.url);
  const expected = process.env.STATS_TOKEN || '';
  const headers = { 'cache-control': 'no-store', 'x-robots-tag': 'noindex' };
  if (!expected) return new Response('Set the STATS_TOKEN environment variable on the site to enable this page.', { status: 503, headers });
  const token = url.searchParams.get('token') || (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  if (!tokenMatches(token, expected)) return new Response('Not found', { status: 404, headers });
  const days = Math.min(365, Math.max(1, parseInt(url.searchParams.get('days') || '30', 10) || 30));
  const page = url.searchParams.get('page') || '';
  const agg = aggregate(await readDays(store, { days }), { page });
  if (url.searchParams.get('format') === 'json') {
    return new Response(JSON.stringify({ days, page, ...agg }, null, 2), { status: 200, headers: { ...headers, 'content-type': 'application/json' } });
  }
  const site = process.env.URL || '';
  return new Response(renderStats(agg, { days, page, token, site }), { status: 200, headers: { ...headers, 'content-type': 'text/html; charset=utf-8' } });
};

export default (req) => handle(req, getStore({ name: 'hits', consistency: 'strong' }));

export const config = { path: '/api/stats' };
