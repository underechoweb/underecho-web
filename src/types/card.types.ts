/**
 * Tipos para el componente Card
 */

export interface CardProps {
  title      : string;
  description?: string;
  image?     : string;
  imageAlt?  : string;
  href?      : string;
  date?      : Date;
  author?    : string;
  tag?       : string;
  variant?   : 'default' | 'article' | 'service';
}
