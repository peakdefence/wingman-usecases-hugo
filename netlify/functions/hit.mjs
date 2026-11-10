// POST /api/hit: receives one beacon from the page script and counts it. Always answers 204.
import { getStore } from '@netlify/blobs';
import { isBot, parseHit, recordHit } from '../lib/analytics.mjs';

export const handle = async (req, context, store) => {
  if (req.method !== 'POST') return new Response(null, { status: 405, headers: { allow: 'POST' } });
  const headers = { 'cache-control': 'no-store' };
  const ua = req.headers.get('user-agent') || '';
  if (isBot(ua)) return new Response(null, { status: 204, headers });
  let hit = null;
  try { hit = parseHit(await req.text()); } catch { hit = null; }
  if (!hit) return new Response(null, { status: 204, headers });
  const ip = context?.ip || req.headers.get('x-nf-client-connection-ip') || '';
  const country = context?.geo?.country?.code || '';
  try {
    const ok = await recordHit(store, { hit, ip, ua, country, pepper: process.env.HIT_SECRET || '' });
    if (!ok) console.warn('hit not stored after retries', hit.p, hit.e);
  } catch (err) {
    console.error('hit failed', err);
  }
  return new Response(null, { status: 204, headers });
};

export default (req, context) => handle(req, context, getStore({ name: 'hits', consistency: 'strong' }));

export const config = { path: '/api/hit' };
