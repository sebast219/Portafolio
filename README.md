# Portafolio

Portafolio personal construido con **React** + **Vite** + **Tailwind CSS**.

Incluye:

- Secciones tipo landing: Hero, Sobre mí, Proyectos, Habilidades y Contacto.
- Estilo moderno con “glass effect”, gradientes, sombras y micro-interacciones.
- Animaciones (scroll/entrada/hover) con **Tailwind** y **Framer Motion**.
- Parallax básico con hooks (scroll-driven).
- Proyectos con **Featured project** + modal “case study” animado.

## Documentación

- `README.md` (este archivo): visión general y guía rápida.
- `docs/DEVELOPMENT_GUIDE.md`: guía **desde cero** para entender y desarrollar esta web al 100%.

## Requisitos

- Node.js 18+
- npm (incluido con Node)

## Instalación

```bash
npm install
```

## Scripts

```bash
# Dev server (Vite)
npm run dev

# Build producción
npm run build

# Preview de la build
npm run preview
```

## Stack / dependencias

- **React 18**
- **Vite** (bundler/dev server)
- **Tailwind CSS** (estilos)
- **Framer Motion** (animaciones)
- **OGL** (está instalado; útil para WebGL/efectos si lo necesitas)

## Estructura del proyecto

```txt
.
├─ public/
│  └─ img/
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Footer.jsx
│  │  └─ Icons.jsx
│  ├─ hooks/
│  │  ├─ useInView.js
│  │  └─ useParallax.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

### Entradas principales

- `src/main.jsx`: monta React en `#root` e importa `index.css`.
- `src/App.jsx`: ordena las secciones en el `<main>`.

### Componentes

- `Header.jsx`: navegación fija + menú móvil.
- `Hero.jsx`: presentación, parallax de fondo, “roles” rotando y CTAs.
- `Projects.jsx`: filtros por tecnología, cards animadas, featured y modal.
- `Skills.jsx`: filtros por categoría y barras de nivel con animación.
- `Contact.jsx`: CTA de contacto.
- `Footer.jsx`: enlaces finales.
- `Icons.jsx`: íconos SVG locales (sin librerías externas).

### Hooks

- `useInView.js`: IntersectionObserver para activar animaciones al entrar en viewport.
- `useParallax.js`: calcula offset en base al scroll.

## Estilos y Tailwind

- `src/index.css`:
  - Directivas `@tailwind`.
  - Utilities personalizadas (`.glass-effect`, `.parallax-element`, etc.).
  - `prefers-reduced-motion` para respetar accesibilidad.
- `tailwind.config.js`:
  - Paleta, sombras, timings y keyframes custom.

## Animaciones

Hay dos fuentes principales:

1) **Tailwind (CSS)**

- Keyframes y clases (ej. `animate-fade-in-up`, `ease-smooth`, `shadow-glow`).

2) **Framer Motion (React)**

- Transiciones de entrada y micro-interacciones.
- `AnimatePresence` para animar elementos que entran/salen (ej. filtros).
- `layout` / `layoutId` para reflow suave y animaciones tipo “shared layout” (cards → modal).

## Personalización rápida

### Textos y enlaces

- `Hero.jsx`:
  - Cambia el nombre, roles (`roles`) y enlaces (GitHub/LinkedIn).
- `Contact.jsx`:
  - Cambia `mailto:tu@email.com` y el enlace de LinkedIn.
- `Footer.jsx`:
  - Cambia enlaces reales de LinkedIn/GitHub/email.

### Proyectos

- `Projects.jsx`:
  - Edita `proyectosReales` (título, descripción, `tecnologias`, links e imagen).
  - Usa `destacado: true` en un proyecto para que aparezca como **Featured**.

### Habilidades

- `Skills.jsx`:
  - Edita `habilidadesData` (nombre, nivel, categoría).
  - Ajusta `categorias` si agregas nuevas.

## Despliegue

### Netlify / Vercel

- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages (si lo usas)

Vite suele requerir configurar `base` en `vite.config.js` si vas a servir bajo un subpath.

## Troubleshooting

- **Tailwind no aplica estilos**
  - Revisa que `src/index.css` tenga `@tailwind base/components/utilities`.
  - Revisa `tailwind.config.js` (propiedad `content` debe incluir `./src/**/*.{js,jsx,ts,tsx}`).

- **El modal no cierra**
  - Debería cerrar con `Esc` o click fuera. Si cambiaste el overlay, revisa el handler.

- **Animaciones “demasiado fuertes”**
  - Puedes suavizar duraciones/eases en `Hero/Projects/Skills`.
  - Para accesibilidad, `prefers-reduced-motion` ya reduce animaciones en CSS.

## Guía completa

Lee `docs/DEVELOPMENT_GUIDE.md` para la explicación desde cero (paso a paso).
