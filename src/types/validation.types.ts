/**
 * Tipos para el servicio de validación
 */

export interface ValidationResult {
  isValid : boolean;
  error?  : string;
}

export interface FormFieldErrors {
  nombre?    : string;
  telefono?  : string;
  email?     : string;
  mensaje?   : string;
}
