/**
 * Autenticación con Supabase.
 * Solo para editores que crean noticias/artículos. El resto del sitio es público (sin login).
 * Login (password) → JWT; el token se usa en POST/PATCH/DELETE.
 * Lectura (GET) usa solo la anon key.
 */

import { SUPABASE_AUTH_URL, SUPABASE_ANON_KEY_VALUE } from '@/config/supabase';
import type { LoginParams, TokenResponse, AuthError } from '@/types/auth.types';

const STORAGE_KEY_TOKEN = 'supabase_access_token';
const STORAGE_KEY_USER = 'supabase_user_email';

function getStoredToken(): string | null {
  if (typeof sessionStorage === 'undefined') return null;
  return sessionStorage.getItem(STORAGE_KEY_TOKEN);
}

function setStoredToken(token: string): void {
  if (typeof sessionStorage === 'undefined') return;
  sessionStorage.setItem(STORAGE_KEY_TOKEN, token);
}

function clearStoredToken(): void {
  if (typeof sessionStorage === 'undefined') return;
  sessionStorage.removeItem(STORAGE_KEY_TOKEN);
}

function getStoredUserEmail(): string | null {
  if (typeof sessionStorage === 'undefined') return null;
  return sessionStorage.getItem(STORAGE_KEY_USER);
}

function setStoredUserEmail(email: string): void {
  if (typeof sessionStorage === 'undefined') return;
  sessionStorage.setItem(STORAGE_KEY_USER, email);
}

function clearStoredUser(): void {
  if (typeof sessionStorage === 'undefined') return;
  sessionStorage.removeItem(STORAGE_KEY_USER);
}

/**
 * Login: obtiene el JWT para usar en recursos protegidos (POST, PATCH, DELETE).
 * POST /auth/v1/token?grant_type=password
 * Guarda access_token y email del usuario para mostrar en el panel de admin.
 */
export async function login(params: LoginParams): Promise<TokenResponse> {
  const url = `${SUPABASE_AUTH_URL}?grant_type=password`;
  const apikey = SUPABASE_ANON_KEY_VALUE && String(SUPABASE_ANON_KEY_VALUE).trim();
  if (!apikey) {
    throw new Error('Configuración: falta la clave de API de Supabase (PUBLIC_SUPABASE_ANON_KEY).');
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      apikey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: params.email.trim(),
      password: params.password,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    const err: AuthError = {
      error: data.error ?? 'auth_error',
      error_description: data.error_description ?? data.msg ?? res.statusText,
    };
    throw new Error(err.error_description || err.error);
  }

  const token = data.access_token;
  if (token) setStoredToken(token);

  const email = data.user?.email ?? params.email.trim();
  if (email) setStoredUserEmail(email);

  return {
    access_token: data.access_token,
    token_type: data.token_type ?? 'bearer',
    expires_in: data.expires_in ?? 0,
    expires_at: data.expires_at,
    refresh_token: data.refresh_token,
    user: data.user,
  };
}

/**
 * Devuelve el access_token actual (JWT) si existe.
 * Cabecera: Authorization: Bearer <token>
 */
export function getAccessToken(): string | null {
  return getStoredToken();
}

/**
 * Email del usuario logueado (para mostrar en el panel).
 */
export function getCurrentUserEmail(): string | null {
  return getStoredUserEmail();
}

/**
 * Cierra sesión (borra token y datos de usuario).
 */
export function logout(): void {
  clearStoredToken();
  clearStoredUser();
}

/**
 * Indica si hay un token guardado (editor logueado).
 */
export function isAuthenticated(): boolean {
  return Boolean(getStoredToken());
}

export const supabaseAuth = {
  login,
  getAccessToken,
  getCurrentUserEmail,
  logout,
  isAuthenticated,
};
