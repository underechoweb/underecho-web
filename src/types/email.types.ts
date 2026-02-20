/**
 * Tipos para el servicio de EmailJS
 */

export interface EmailTemplateParams extends Record<string, unknown> {
  nombre   : string;
  telefono : string;
  email    : string;
  mensaje? : string;
}

export interface EmailServiceConfig {
  serviceId  : string;
  templateId : string;
  publicKey  : string;
}
