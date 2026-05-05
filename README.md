# GenoVision

Sitio web de GenoVision: análisis genómico para evaluar predisposición hereditaria a cáncer y apoyar decisiones preventivas personalizadas. Atención clínica en Mérida, Yucatán, México.

## Framework

- **Next.js 14** (App Router) con TypeScript
- **React 18**
- **Tailwind CSS 3**
- Generación estática (todas las rutas se prerenderizan)

## Requisitos

- Node.js 18.18+ (recomendado 20.x)
- npm 9+

## Comandos

Instalar dependencias:

```bash
npm install
```

Servidor de desarrollo (http://localhost:3000):

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

Servir el build de producción localmente:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

## Estructura

```
app/                    Rutas (App Router) y layout raíz
components/             Componentes UI reutilizables
lib/                    Datos del sitio, productos, subpaneles, genes
public/                 Activos estáticos (logo, etc.)
tailwind.config.ts      Configuración de Tailwind
next.config.mjs         Configuración de Next.js
```

## Despliegue en Vercel

El proyecto está listo para Vercel sin configuración adicional. Vercel detecta Next.js automáticamente.

### Opción 1 — Importar repositorio desde GitHub

1. Sube el repo a GitHub (ver sección de abajo).
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta el framework como **Next.js**. No cambies los ajustes por defecto:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Pulsa **Deploy**.
5. Tras el primer deploy, configura el dominio personalizado (`genovision.mx`) en Project Settings → Domains.

### Opción 2 — Vercel CLI

```bash
npm i -g vercel
vercel              # primera vez: enlaza el proyecto
vercel --prod       # despliega a producción
```

### Variables de entorno

Actualmente el sitio no requiere variables de entorno. Si en el futuro se añaden, créalas en Vercel → Project Settings → Environment Variables y nunca las subas al repositorio (`.env*` ya está en `.gitignore`).

## SEO

- Idioma: español (México) — `<html lang="es-MX">`
- `metadataBase` configurado en `app/layout.tsx`
- Open Graph y Twitter cards configurados
- Todas las rutas son estáticas y se sirven prerenderizadas

## WhatsApp

Todos los CTAs de WhatsApp usan `lib/site.ts` (`whatsappLink()`). Para cambiar el número, edita `SITE.whatsappNumber` en `lib/site.ts`.
