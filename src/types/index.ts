// Componentes
export type { HeroProps } from './hero.types';
export type { CTAProps } from './cta.types';
export type { SectionWrapProps } from './section-wrap.types';
export type { CardProps } from './card.types';
export type { SocialVideo } from './social-carousel.types';

// Layouts
export type { BaseLayoutProps, PlainLayoutProps, EditorialLayoutProps } from './layout.types';

// Datos
export type { MiembroEquipo } from './equipo.types';
export type { AreaPractica } from './servicios.types';

// Servicios
export type { EmailTemplateParams, EmailServiceConfig } from './email.types';
export type { ValidationResult, FormFieldErrors } from './validation.types';

// Insights (mock y editor)
export type {
  InsightKind,
  InsightBase,
  MockNoticia,
  MockArticulo,
  MockInsight,
  CreateInsightInput,
  UpdateInsightInput,
} from './insight.types';

// Autenticación (Supabase Auth)
export type {
  LoginParams,
  AuthUser,
  TokenResponse,
  AuthError,
} from './auth.types';

// YouTube Data API
export type { YouTubePlaylistItem, YouTubePlaylistResponse } from './youtube.types';

// Base de datos (Supabase: news, article, team)
export type {
  Timestamptz,
  NewsRow,
  CreateNewsInput,
  ArticleRow,
  CreateArticleInput,
  TeamRow,
  CreateTeamInput,
} from './database.types';
