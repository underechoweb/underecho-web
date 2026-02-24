/**
 * Actualiza meta tags dinámicamente tras cargar contenido (artículos/noticias).
 */

import { SITE_CONFIG } from '@/config/site';

const DESCRIPTION_MAX_LENGTH = 155;

function stripHtml(html: string): string {
  return (html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function toAbsoluteImageUrl(image: string | undefined): string {
  if (!image || !image.trim()) return new URL(SITE_CONFIG.ogImage, SITE_CONFIG.url).href;
  if (image.startsWith('http://') || image.startsWith('https://')) return image;
  return new URL(image, SITE_CONFIG.url).href;
}

export interface PageMetaInput {
  title: string;
  content: string;
  image?: string;
  section: 'articulos' | 'noticias';
  author?: string;
  datePublished?: string;
}

const ARTICLE_SCRIPT_ID = 'structured-data-article';

function injectArticleJsonLd(params: {
  headline: string;
  description: string;
  imageUrl: string;
  author: string;
  datePublished: string;
  url: string;
}): void {
  document.getElementById(ARTICLE_SCRIPT_ID)?.remove();

  const publisherLogo = new URL(SITE_CONFIG.ogImage, SITE_CONFIG.url).href;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    image: params.imageUrl,
    datePublished: params.datePublished,
    author: {
      '@type': 'Organization',
      name: params.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
  };

  const script = document.createElement('script');
  script.id = ARTICLE_SCRIPT_ID;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function updatePageMeta({ title, content, image, section, author, datePublished }: PageMetaInput): void {
  const sectionLabel = section === 'articulos' ? 'Artículos' : 'Noticias';
  const fullTitle = `${title} - ${sectionLabel} - ${SITE_CONFIG.name}`;

  const stripped = stripHtml(content);
  const description =
    stripped.length > DESCRIPTION_MAX_LENGTH
      ? stripped.slice(0, DESCRIPTION_MAX_LENGTH).trim() + '…'
      : stripped || title;

  const imageUrl = toAbsoluteImageUrl(image);

  document.title = fullTitle;

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', fullTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute('content', imageUrl);

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', fullTitle);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', description);

  const twImage = document.querySelector('meta[name="twitter:image"]');
  if (twImage) twImage.setAttribute('content', imageUrl);

  injectArticleJsonLd({
    headline: title,
    description,
    imageUrl,
    author: author || 'Equipo UnDerecho',
    datePublished: datePublished || new Date().toISOString().slice(0, 10),
    url: typeof window !== 'undefined' ? window.location.href : '',
  });
}
