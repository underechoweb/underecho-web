/**
 * Cliente REST para Supabase.
 * GET: solo anon key (lectura).
 * POST / PATCH / DELETE: anon key + Authorization Bearer JWT (tras login).
 */

import { SUPABASE_REST_URL, SUPABASE_ANON_KEY_VALUE } from '@/config/supabase';
import { getAccessToken } from './supabaseAuth.service';
import type {
  NewsRow,
  CreateNewsInput,
  ArticleRow,
  CreateArticleInput,
} from '@/types';

const DEFAULT_HEADERS: Record<string, string> = {
  apikey: SUPABASE_ANON_KEY_VALUE,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

function getHeaders(useAuth: boolean, preferReturn = false): Record<string, string> {
  const headers = { ...DEFAULT_HEADERS };
  if (useAuth) {
    const token = getAccessToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }
  if (preferReturn) headers['Prefer'] = 'return=representation';
  return headers;
}

async function restFetch<T>(
  path: string,
  options: { method?: string; body?: unknown; useAuth?: boolean; preferReturn?: boolean } = {}
): Promise<T> {
  const { method = 'GET', body, useAuth = false, preferReturn = false } = options;
  const url = `${SUPABASE_REST_URL}${path}`;
  const res = await fetch(url, {
    method,
    headers: getHeaders(useAuth, preferReturn),
    ...(body !== undefined && { body: JSON.stringify(body) }),
  });

  if (!res.ok) {
    const text = await res.text();
    let msg = res.statusText;
    try {
      const json = JSON.parse(text);
      msg = json.message ?? json.error_description ?? json.error ?? msg;
    } catch {
      if (text) msg = text;
    }
    throw new Error(`Supabase API ${res.status}: ${msg}`);
  }

  if (res.status === 204 || res.headers.get('content-length') === '0') {
    return undefined as T;
  }

  return res.json() as Promise<T>;
}

// --- News ---

export async function getNewsList(): Promise<NewsRow[]> {
  const data = await restFetch<NewsRow[]>('/news', { method: 'GET' });
  return Array.isArray(data) ? data : [];
}

export async function getNewsByTitleFilter(titleFilter: string): Promise<NewsRow[]> {
  const trimmed = (titleFilter || '').trim();
  if (!trimmed) return getNewsList();
  const pattern = `%${trimmed}%`;
  const data = await restFetch<NewsRow[]>(`/news?title=ilike.${encodeURIComponent(pattern)}`);
  return Array.isArray(data) ? data : [];
}

export async function getNewsByPk(pk: number): Promise<NewsRow | null> {
  const data = await restFetch<NewsRow[]>(`/news?pk=eq.${pk}&limit=1`);
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

export async function createNews(payload: CreateNewsInput): Promise<NewsRow> {
  const data = await restFetch<NewsRow[]>('/news', {
    method: 'POST',
    body: payload,
    useAuth: true,
    preferReturn: true,
  });
  const row = Array.isArray(data) ? data[0] : data;
  if (!row) throw new Error('Supabase no devolvió la fila creada');
  return row as NewsRow;
}

export async function updateNews(pk: number, payload: Partial<CreateNewsInput>): Promise<NewsRow> {
  const data = await restFetch<NewsRow[]>(`/news?pk=eq.${pk}`, {
    method: 'PATCH',
    body: payload,
    useAuth: true,
    preferReturn: true,
  });
  const row = Array.isArray(data) ? data[0] : data;
  if (!row) throw new Error('Supabase no devolvió la fila actualizada');
  return row as NewsRow;
}

export async function deleteNews(pk: number): Promise<void> {
  await restFetch<void>(`/news?pk=eq.${pk}`, {
    method: 'DELETE',
    useAuth: true,
  });
}

// --- Article ---

export async function getArticleList(): Promise<ArticleRow[]> {
  const data = await restFetch<ArticleRow[]>('/article', { method: 'GET' });
  return Array.isArray(data) ? data : [];
}

export async function getArticleByTitleFilter(titleFilter: string): Promise<ArticleRow[]> {
  const trimmed = (titleFilter || '').trim();
  if (!trimmed) return getArticleList();
  const pattern = `%${trimmed}%`;
  const data = await restFetch<ArticleRow[]>(`/article?title=ilike.${encodeURIComponent(pattern)}`);
  return Array.isArray(data) ? data : [];
}

export async function getArticleByPk(pk: number): Promise<ArticleRow | null> {
  const data = await restFetch<ArticleRow[]>(`/article?pk=eq.${pk}&limit=1`);
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

export async function createArticle(payload: CreateArticleInput): Promise<ArticleRow> {
  const data = await restFetch<ArticleRow[]>('/article', {
    method: 'POST',
    body: payload,
    useAuth: true,
    preferReturn: true,
  });
  const row = Array.isArray(data) ? data[0] : data;
  if (!row) throw new Error('Supabase no devolvió la fila creada');
  return row as ArticleRow;
}

export async function updateArticle(pk: number, payload: Partial<CreateArticleInput>): Promise<ArticleRow> {
  const data = await restFetch<ArticleRow[]>(`/article?pk=eq.${pk}`, {
    method: 'PATCH',
    body: payload,
    useAuth: true,
    preferReturn: true,
  });
  const row = Array.isArray(data) ? data[0] : data;
  if (!row) throw new Error('Supabase no devolvió la fila actualizada');
  return row as ArticleRow;
}

export async function deleteArticle(pk: number): Promise<void> {
  await restFetch<void>(`/article?pk=eq.${pk}`, {
    method: 'DELETE',
    useAuth: true,
  });
}

export const supabaseApi = {
  getNewsList,
  getNewsByTitleFilter,
  getNewsByPk,
  createNews,
  updateNews,
  deleteNews,
  getArticleList,
  getArticleByTitleFilter,
  getArticleByPk,
  createArticle,
  updateArticle,
  deleteArticle,
};
