import type {
  MockInsight,
  MockNoticia,
  MockArticulo,
  CreateInsightInput,
  UpdateInsightInput,
  CreateNewsInput,
  CreateArticleInput,
} from '@/types';

function generateId(): string {
  return `mock-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const store: MockInsight[] = [];

function getAll(): MockInsight[] {
  return [...store].sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

function getById(id: string): MockInsight | undefined {
  return store.find((item) => item.id === id);
}

function getNoticias(): MockNoticia[] {
  return getAll().filter((item): item is MockNoticia => item.kind === 'noticia');
}

function getArticulos(): MockArticulo[] {
  return getAll().filter((item): item is MockArticulo => item.kind === 'articulo');
}

function create(input: CreateInsightInput): MockInsight {
  const id = generateId();
  const now = input.publishDate || new Date();
  const item: MockInsight = {
    id,
    kind: input.kind,
    title: input.title,
    description: input.description,
    bodyHtml: input.bodyHtml,
    publishDate: now,
    author: input.author,
    image: input.image,
    imageAlt: input.imageAlt,
    tags: input.tags ?? [],
    featured: input.featured ?? false,
  };
  store.push(item);
  return item;
}

function update(input: UpdateInsightInput): MockInsight | undefined {
  const index = store.findIndex((item) => item.id === input.id);
  if (index === -1) return undefined;
  const current = store[index];
  const updated: MockInsight = {
    ...current,
    ...input,
    id: current.id,
    kind: current.kind,
  };
  store[index] = updated;
  return updated;
}

function remove(id: string): boolean {
  const index = store.findIndex((item) => item.id === id);
  if (index === -1) return false;
  store.splice(index, 1);
  return true;
}

/**
 * Construye el payload para enviar a la tabla `news` de Supabase.
 */
function buildNewsPayload(title: string, content: string, image?: string, author?: string): CreateNewsInput {
  const payload: CreateNewsInput = { title: title.trim(), content: content || '' };
  if (image?.trim()) payload.image = image.trim();
  if (author?.trim()) payload.author = author.trim();
  return payload;
}

/**
 * Construye el payload para enviar a la tabla `article` de Supabase.
 */
function buildArticlePayload(title: string, content: string, image?: string, author?: string): CreateArticleInput {
  const payload: CreateArticleInput = { title: title.trim(), content: content || '' };
  if (image?.trim()) payload.image = image.trim();
  if (author?.trim()) payload.author = author.trim();
  return payload;
}

export const insightsService = {
  getAll,
  getById,
  getNoticias,
  getArticulos,
  create,
  update,
  delete: remove,
  buildNewsPayload,
  buildArticlePayload,
};
