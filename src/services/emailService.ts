import emailjs from '@emailjs/browser';
import type { EmailTemplateParams, EmailServiceConfig } from '@/types';

/**
 * Inicializa EmailJS con la clave pública
 */
export function initEmailJS(publicKey: string): void {
  emailjs.init(publicKey);
}

/**
 * Envía un email usando EmailJS
 */
export async function sendEmail(
  config: EmailServiceConfig,
  templateParams: EmailTemplateParams
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await emailjs.send(
      config.serviceId,
      config.templateId,
      templateParams
    );
    
    if (response.status === 200) {
      return {
        success: true,
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
      };
    } else {
      throw new Error('Error al enviar el mensaje');
    }
  } catch (error) {
    console.error('Error EmailJS:', error);
    return {
      success: false,
      error: 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente o contáctanos directamente por teléfono o email.'
    };
  }
}

/**
 * Obtiene la configuración de EmailJS desde las variables de entorno
 */
export function getEmailJSConfig(): EmailServiceConfig {
  return {
    serviceId: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID || 'service_mismbj4',
    templateId: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID || 'template_leorpzc',
    publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY || 'Qy1jaBcmpfVCHsBBy'
  };
}
