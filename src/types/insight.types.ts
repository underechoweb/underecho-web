/**
 * Tipos para Insights (Noticias/Artículos).
 */

export type InsightKind = 'noticia' | 'articulo';

export interface InsightBase {
  id           : string;
  kind         : InsightKind;
  title        : string;
  description  : string;
  bodyHtml     : string;
  publishDate  : Date;
  author       : string;
  tags         : string[];
  featured     : boolean;
  image?       : string;
  imageAlt?    : string;
}

export interface MockNoticia extends InsightBase {
  kind         : 'noticia';
}

export interface MockArticulo extends InsightBase {
  kind         : 'articulo';
}

export type MockInsight = MockNoticia | MockArticulo;

export interface CreateInsightInput {
  kind         : InsightKind;
  title        : string;
  description  : string;
  bodyHtml     : string;
  author       : string;
  tags?        : string[];
  image?       : string;
  imageAlt?    : string;
  featured?    : boolean;
  publishDate? : Date;
}

export interface UpdateInsightInput extends Partial<Omit<CreateInsightInput, 'kind'>> {
  id           : string;
}
