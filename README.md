# UnDerecho - Sitio Web

Sitio web corporativo de **Un Derecho**, firma de abogados que ofrece asesoría jurídica online. Incluye información sobre servicios, equipo, noticias y artículos legales, formulario de contacto y administración de contenidos.

---

## Instalación y levantada del proyecto

### Requisitos

- [Node.js](https://nodejs.org/) 18+ (o [Bun](https://bun.sh/) como alternativa)
- Cuentas en [Supabase](https://supabase.com), [EmailJS](https://emailjs.com) y [YouTube Data API](https://developers.google.com/youtube/v3) para las funcionalidades completas

### 1. Instalar dependencias

```bash
bun install
```

O con npm:

```bash
npm install
```

### 2. Configurar variables de entorno

Copia el archivo de ejemplo y completa los valores:

```bash
cp .env.example .env
```

Edita `.env` con tus credenciales de Supabase, EmailJS y YouTube (ver `.env.example`).

### 3. Levantar en desarrollo

```bash
bun dev
```

O:

```bash
npm run dev
```

El sitio se abre en **http://localhost:4321**

### 4. Build para producción

```bash
bun build
```

Genera la versión estática en `./dist/`.

### 5. Preview local de la build

```bash
bun preview
```

---

## Arquitectura (resumen)

- **Astro** – Framework estático, bueno para SEO y rendimiento  
- **Tailwind CSS** – Estilos con utilidades  
- **Supabase** – Backend: noticias, artículos, autenticación del panel admin y almacenamiento  
- **EmailJS** – Envío de correos desde el formulario de contacto  
- **YouTube Data API** – Carga de videos en la sección Insights  

El contenido editorial (noticias y artículos) se gestiona desde el panel de administración (`/admin`) conectado a Supabase, no mediante archivos markdown.

---

## Rutas principales

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio |
| `/nosotros` | Sobre la firma |
| `/servicios` | Áreas de práctica |
| `/equipo` | Integrantes del equipo |
| `/contacto` | Formulario de contacto |
| `/insights` | Noticias, artículos y videos |
| `/noticias` | Listado de noticias |
| `/articulos` | Listado de artículos |
| `/admin` | Panel de administración (requiere autenticación) |
| `/terminos-y-condiciones` | Términos y condiciones |
| `/politica-tratamiento-datos` | Política de tratamiento de datos |
| `/seguridad-informacion` | Seguridad de la información |

---

## Configuración del sitio

Edita `src/config/site.ts` para cambiar:

- Nombre del sitio  
- URL base  
- Número de WhatsApp  
- Enlace de YouTube  

---

## Recursos

- [Astro](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase](https://supabase.com/docs)
