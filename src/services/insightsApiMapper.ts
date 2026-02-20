import type { NewsRow, ArticleRow } from '@/types';

export interface CardItemProps {
  title       : string;
  href        : string;
  date        : Date;
  author      : string;
  tag?        : string;
  imageAlt?   : string;
  image?      : string;
  description?: string;
}

function stripHtml(html: string): string {
  return (html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 140);
}

/** Mapea una fila de news a props de Card */
export function mapNewsRowToCard(row: NewsRow): CardItemProps {
  return {
    title      : row.title,
    description: stripHtml(row.content) || row.title,
    image      : row.image,
    imageAlt   : row.title,
    href       : `/noticias/ver?pk=${row.pk}`,
    date       : new Date(row.created_at),
    author     : row.author || 'Equipo UnDerecho',
    tag        : 'Noticias',
  };
}

/** Mapea una fila de article a props de Card */
export function mapArticleRowToCard(row: ArticleRow): CardItemProps {
  return {
    title      : row.title,
    description: stripHtml(row.content) || row.title,
    image      : row.image,
    imageAlt   : row.title,
    href       : `/articulos/ver?pk=${row.pk}`,
    date       : new Date(row.created_at),
    author     : row.author || 'Equipo UnDerecho',
    tag        : 'Artículos',
  };
}
