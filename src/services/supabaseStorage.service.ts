/**
 * Servicio para Subir y Obtener imágenes en Supabase Storage.
 * Bucket: underechoweb (tratado como un "bucket S3" dentro de Supabase).
 *
 * Upload: POST /storage/v1/object/underechoweb/{path}
 * Get URL: {SUPABASE_URL}/storage/v1/object/public/underechoweb/{path}
 */

import { SUPABASE_URL_BASE, SUPABASE_ANON_KEY_VALUE } from '@/config/supabase';
import { getAccessToken } from './supabaseAuth.service';

const BUCKET = 'underechoweb';
const STORAGE_BASE = `${SUPABASE_URL_BASE}/storage/v1`;

export interface UploadResponse {
  Key: string;
  Id: string;
}

/**
 * Construye la URL pública para obtener una imagen a partir del Key devuelto por el upload.
 * Key: "underechoweb/imagenejemplo.png" o "imagenejemplo.png"
 */
export function getPublicImageUrl(keyOrPath: string): string {
  if (!keyOrPath?.trim()) return '';
  const path = keyOrPath.startsWith(`${BUCKET}/`) ? keyOrPath : `${BUCKET}/${keyOrPath.replace(/^\//, '')}`;
  return `${STORAGE_BASE}/object/public/${path}`;
}

/**
 * Sube un archivo al bucket underechoweb.
 * @param file - Archivo a subir (File o Blob)
 * @param filename - Nombre del archivo en el storage. Si no se provee, usa el nombre del File o genera uno único.
 * @returns El Key devuelto por Supabase (ej: "underechoweb/imagenejemplo.png")
 */
export async function uploadImage(file: File | Blob, filename?: string): Promise<string> {
  const token = getAccessToken();
  if (!token) {
    throw new Error('Debe iniciar sesión para subir imágenes.');
  }

  const baseName = filename || (file instanceof File ? file.name : 'image.png');
  const ext = baseName.includes('.') ? baseName.slice(baseName.lastIndexOf('.')) : '.png';
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}${ext}`.replace(/[^a-zA-Z0-9._-]/g, '_');
  const path = `${BUCKET}/${safeName}`;

  const url = `${STORAGE_BASE}/object/${path}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      apikey: SUPABASE_ANON_KEY_VALUE,
      'Content-Type': file instanceof File ? file.type : 'image/png',
      'x-upsert': 'true',
    },
    body: file,
  });

  if (!res.ok) {
    const text = await res.text();
    let msg = res.statusText;
    try {
      const json = JSON.parse(text);
      msg = json.message ?? json.error ?? msg;
    } catch {
      if (text) msg = text;
    }
    throw new Error(`Error al subir la imagen: ${msg}`);
  }

  const data = (await res.json()) as UploadResponse;
  return data.Key || path;
}

export const supabaseStorage = {
  uploadImage,
  getPublicImageUrl,
  BUCKET,
};
