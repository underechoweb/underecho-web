/**
 * Servicio de validación de formularios
 * Maneja todas las validaciones de campos del formulario de contacto
 */

import type { ValidationResult, FormFieldErrors } from '@/types';

export type { ValidationResult, FormFieldErrors };

/**
 * Limpia espacios al inicio y final de un string
 */
export function trimValue(value: string): string {
  return value.trim();
}

/**
 * Valida el campo nombre
 */
export function validateNombre(value: string, showError = true): ValidationResult {
  const trimmed = trimValue(value);
  
  if (value !== trimmed) {
    return {
      isValid: false,
      error: showError ? 'El nombre no debe tener espacios al inicio o al final.' : undefined
    };
  }

  if (trimmed.length === 0) {
    return {
      isValid: false,
      error: showError ? 'El nombre es obligatorio.' : undefined
    };
  }

  if (trimmed.length < 2) {
    return {
      isValid: false,
      error: showError ? 'El nombre debe tener al menos 2 caracteres.' : undefined
    };
  }

  if (trimmed.length > 50) {
    return {
      isValid: false,
      error: showError ? 'El nombre no puede tener más de 50 caracteres.' : undefined
    };
  }

  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  if (!nombreRegex.test(trimmed)) {
    return {
      isValid: false,
      error: showError ? 'El nombre no puede contener números ni caracteres especiales.' : undefined
    };
  }

  return { isValid: true };
}

/**
 * Valida el campo teléfono
 */
export function validateTelefono(value: string, showError = true): ValidationResult {
  const cleaned = value.replace(/\D/g, '');
  
  if (cleaned.length !== 10) {
    if (cleaned.length === 0) {
      return {
        isValid: false,
        error: showError ? 'El teléfono es obligatorio.' : undefined
      };
    } else if (cleaned.length < 10) {
      return {
        isValid: false,
        error: showError ? 'El teléfono debe tener exactamente 10 dígitos.' : undefined
      };
    } else {
      return {
        isValid: false,
        error: showError ? 'El teléfono no puede tener más de 10 dígitos.' : undefined
      };
    }
  }

  return { isValid: true };
}

/**
 * Limpia el teléfono dejando solo números
 */
export function cleanTelefono(value: string): string {
  return value.replace(/\D/g, '');
}

/**
 * Valida el campo email
 */
export function validateEmail(value: string, showError = true): ValidationResult {
  const trimmed = trimValue(value);
  
  if (value !== trimmed) {
    return {
      isValid: false,
      error: showError ? 'El email no debe tener espacios al inicio o al final.' : undefined
    };
  }

  if (trimmed.length === 0) {
    return {
      isValid: false,
      error: showError ? 'El email es obligatorio.' : undefined
    };
  }

  if (trimmed.length < 5) {
    return {
      isValid: false,
      error: showError ? 'El email debe tener al menos 5 caracteres.' : undefined
    };
  }

  if (trimmed.length > 100) {
    return {
      isValid: false,
      error: showError ? 'El email no puede tener más de 100 caracteres.' : undefined
    };
  }

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(trimmed)) {
    return {
      isValid: false,
      error: showError ? 'Por favor ingresa un email válido (ejemplo: nombre@dominio.com).' : undefined
    };
  }

  return { isValid: true };
}

/**
 * Valida el campo mensaje (opcional)
 */
export function validateMensaje(value: string, showError = true): ValidationResult {
  const trimmed = trimValue(value);
  
  if (trimmed.length > 0 && trimmed.length > 1000) {
    return {
      isValid: false,
      error: showError ? 'El mensaje no puede tener más de 1000 caracteres.' : undefined
    };
  }

  return { isValid: true };
}

/**
 * Valida todos los campos del formulario
 */
export function validateForm(formData: {
  nombre: string;
  telefono: string;
  email: string;
  mensaje?: string;
}): { isValid: boolean; errors: FormFieldErrors } {
  const errors: FormFieldErrors = {};
  
  const nombreResult = validateNombre(formData.nombre, true);
  if (!nombreResult.isValid && nombreResult.error) {
    errors.nombre = nombreResult.error;
  }
  
  const telefonoResult = validateTelefono(formData.telefono, true);
  if (!telefonoResult.isValid && telefonoResult.error) {
    errors.telefono = telefonoResult.error;
  }
  
  const emailResult = validateEmail(formData.email, true);
  if (!emailResult.isValid && emailResult.error) {
    errors.email = emailResult.error;
  }
  
  if (formData.mensaje !== undefined) {
    const mensajeResult = validateMensaje(formData.mensaje, true);
    if (!mensajeResult.isValid && mensajeResult.error) {
      errors.mensaje = mensajeResult.error;
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
