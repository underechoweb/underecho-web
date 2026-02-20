/**
 * Tipos para los layouts
 */

export interface BaseLayoutProps {
  title?        : string;
  description?  : string;
  ogImage?      : string;
  canonical?    : string;
}

export interface PlainLayoutProps {
  title?        : string;
  description?  : string;
  fullWidth?    : boolean;
}

export interface EditorialLayoutProps {
  title?        : string;
  description?  : string;
  publishDate?  : Date;
  author?       : string;
  image?        : string;
}
