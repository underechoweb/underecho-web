/**
 * Tipos para autenticación (Supabase Auth).
 */

export interface LoginParams {
  email     : string;
  password  : string;
}

export interface AuthUser {
  id        : string;
  email?    : string;
  role?     : string;
}

export interface TokenResponse {
  access_token   : string;
  token_type     : string;
  expires_in     : number;
  expires_at?    : number;
  refresh_token? : string;
  user?          : AuthUser & Record<string, unknown>;
}

export interface AuthError {
  error               : string;
  error_description?  : string;
}
