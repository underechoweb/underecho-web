/**
 * Configuración global del sitio
 * Centraliza información SEO y metadatos
 */
const WHATSAPP_NUMBER = '573180699745';

export const SITE_CONFIG = {
  name: 'UnDerecho',
  title: 'UnDerecho - Asesoría Jurídica Online | Trámites y Defensa',
  description: 'Asesoría jurídica online. Te ayudamos con trámites, procesos legales y administrativos. Protección al consumidor, derechos de petición y más.',
  url: 'https://underecho.com.co',
  lang: 'es',
  locale: 'es_CO',
  author: 'UnDerecho',
  ogImage: '/og-image.webp',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  whatsappUrlConsulta: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría agendar una consulta.')}`,
  youtubeUrl: 'https://www.youtube.com/channel/UCJGlqpO8bcYxS2ZX07bZaCg',
} as const;

export type SiteConfig = typeof SITE_CONFIG;
