/**
 * Configuración de Supabase.
 * URL base y anon key para REST API y Auth.
 */

const SUPABASE_BASE = 'https://hiltfbpytinzeyqfdgbg.supabase.co';
const SUPABASE_ANON_KEY_FALLBACK = 'sb_publishable_xhFbfhwbbQDleq8M0PIENQ_0EVNe2ep';

const SUPABASE_URL = (() => {
  const env = typeof import.meta.env !== 'undefined' && import.meta.env.PUBLIC_SUPABASE_URL;
  const base = typeof env === 'string' && env.trim() ? env.trim().replace(/\/$/, '') : SUPABASE_BASE;
  return base.startsWith('http') ? base : SUPABASE_BASE;
})();

const SUPABASE_ANON_KEY = (() => {
  const env = typeof import.meta.env !== 'undefined' && import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
  const fromEnv = typeof env === 'string' && env.trim() ? env.trim() : '';
  return fromEnv || SUPABASE_ANON_KEY_FALLBACK;
})();

export const SUPABASE_URL_BASE = SUPABASE_URL;

export const SUPABASE_REST_URL = `${SUPABASE_URL}/rest/v1`;

export const SUPABASE_AUTH_URL = `${SUPABASE_URL}/auth/v1/token`;

export const SUPABASE_ANON_KEY_VALUE = SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
