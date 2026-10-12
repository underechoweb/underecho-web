/**
 * Configuración global del sitio
 * Centraliza información SEO y metadatos
 */
const WHATSAPP_NUMBER = '573180699745';

export const SITE_CONFIG = {
  name: 'Fierro Fermat',
  title: 'Fierro Fermat - Asesoría Jurídica Online | Trámites y Defensa',
  description: 'Asesoría jurídica online. Te ayudamos con trámites, procesos legales y administrativos. Protección al consumidor, derechos de petición y más.',
  url: 'https://underecho.com.co',
  lang: 'es',
  locale: 'es_CO',
  author: 'Fierro Fermat',
  ogImage: '/og-image.jpg',
  logo: '/logo-512.png',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  whatsappUrlConsulta: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría agendar una consulta.')}`,
  youtubeUrl: 'https://www.youtube.com/@FierroFermat',
} as const;

export type SiteConfig = typeof SITE_CONFIG;
