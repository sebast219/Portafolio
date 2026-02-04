---
description: Guía completa de desarrollo desde cero
---

# Guía de desarrollo (desde cero)

Este documento explica **cómo está construido** el portafolio y **cómo desarrollarlo/extendenderlo** con seguridad.

Si solo necesitas una vista rápida (scripts, estructura y personalización), revisa `README.md`.

## 1) Qué es este proyecto

Es una web tipo landing/portfolio con secciones y navegación por anclas:

- `#inicio` (Hero)
- `#sobre-mi` (About)
- `#proyectos` (Projects)
- `#habilidades` (Skills)
- `#contacto` (Contact)

La app está construida como **SPA** (Single Page Application) con React y Vite.

## 2) Stack y por qué se eligió

- **React 18**: componentes, estado local, composición.
- **Vite**: dev server muy rápido y build optimizado.
- **Tailwind CSS**: estilos por utilidades, consistencia y velocidad.
- **Framer Motion**: animaciones declarativas (entrada/salida, layout animations).
- **OGL**: librería WebGL (instalada). No es obligatoria para el funcionamiento actual, pero sirve si quieres fondos animados premium.

## 3) Requisitos y entorno

- Node.js 18+
- npm

Recomendado:

- VS Code / WebStorm
- Extensiones (opcional): Tailwind IntelliSense, ESLint (si lo agregas), Prettier (si lo agregas)

## 4) Cómo correr el proyecto

```bash
npm install
npm run dev
```

Build y preview:

```bash
npm run build
npm run preview
```

## 5) Cómo recrear este proyecto desde cero (paso a paso)

### 5.1 Crear proyecto con Vite + React

```bash
npm create vite@latest portafolio -- --template react
cd portafolio
npm install
```

### 5.2 Instalar Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configurar `tailwind.config.js` para incluir:

- `./index.html`
- `./src/**/*.{js,ts,jsx,tsx}`

Crear/editar `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Importar `index.css` en `src/main.jsx`.

### 5.3 Añadir Framer Motion

```bash
npm install framer-motion
```

### 5.4 Estructura inicial recomendada

- `src/components/` para secciones
- `src/hooks/` para hooks reutilizables

## 6) Arquitectura y flujo de la app

### 6.1 Punto de entrada

- `src/main.jsx` monta React en `#root` e importa `index.css`.

### 6.2 Componente raíz

- `src/App.jsx` compone:
  - `Header`
  - `Hero`
  - `About`
  - `Projects`
  - `Skills`
  - `Contact`
  - `Footer`

No hay router, porque el sitio navega por anclas (`#...`).

## 7) Estilos: cómo pensar el diseño

### 7.1 Tailwind en este proyecto

El estilo se basa en:

- Fondo oscuro (`bg-black`) + texto gris/blanco
- “Glass effect” usando `backdrop-blur` + bordes translúcidos
- Gradientes en títulos y CTAs
- Sombras suaves (y `shadow-glow` en hover)

### 7.2 Utilities propias

En `src/index.css` hay utilities:

- `.glass-effect`
- `.parallax-container`
- `.parallax-element`

Además hay un bloque `prefers-reduced-motion` para reducir animaciones cuando el usuario lo pide.

### 7.3 Tema y tokens

En `tailwind.config.js` se extienden:

- `colors` (paleta)
- `boxShadow` (glows)
- `animation` / `keyframes` (fade/float/shimmer)
- `transitionTimingFunction` (`ease-smooth`)

Idea clave: **mantén consistencia**. Si agregas un nuevo componente, intenta reutilizar:

- el mismo tipo de borde (`border-white/20`)
- `glass-effect`
- `ease-smooth`

## 8) Animaciones: estrategia (moderna y mantenible)

Hay 2 capas:

### 8.1 Animaciones CSS (Tailwind)

Útiles para:

- animaciones simples y repetitivas
- pequeños efectos (fade-in, shimmer)

### 8.2 Framer Motion

Útil para:

- entrada/salida (cuando elementos aparecen/desaparecen)
- transiciones al filtrar listas
- micro-interacciones en hover/tap
- animaciones “shared layout” (`layoutId`) para transiciones premium

Regla práctica:

- Si el elemento **entra/sale del DOM**, usa `AnimatePresence`.
- Si el layout se reacomoda, usa `layout`.
- Si quieres una transición card → modal, usa `layoutId`.

## 9) Hooks reutilizables

### 9.1 `useInView`

Archivo: `src/hooks/useInView.js`

Qué hace:

- Crea un `IntersectionObserver`.
- Devuelve `[ref, isInView]`.
- Cuando el elemento entra al viewport, `isInView` pasa a `true` (y se queda true).

Uso típico:

- Títulos y bloques que se animan al hacer scroll.

Si quieres repetir animación al salir/entrar, habría que modificar el hook para que también ponga `false` cuando `entry.isIntersecting` sea false.

### 9.2 `useParallax`

Archivo: `src/hooks/useParallax.js`

Qué hace:

- Escucha scroll y calcula `offset = pageYOffset * speed`.

Uso típico:

- fondos suaves o elementos decorativos.

Recomendación si notas jank:

- throttle con `requestAnimationFrame`.

## 10) Componentes: explicación por archivo

### 10.1 `Header.jsx`

- Header fixed.
- Cambia su estilo según scroll (detecta final del Hero).
- Menú móvil con animación por `max-height`.

Si agregas una sección nueva:

- añade un item a `navItems` con `href: '#id-seccion'`.

### 10.2 `Hero.jsx`

- Roles rotan cada X segundos.
- Parallax: fondos radiales + partículas.
- `Framer Motion` para entrada y para animar el cambio del rol (`AnimatePresence`).

Importante:

- Las partículas se generan con `useMemo` para que no cambien en cada render.

### 10.3 `About.jsx`

- Texto + animación con `useInView` (CSS transitions)

### 10.4 `Projects.jsx`

Features:

- Lista `proyectosReales` con:
  - `id`, `titulo`, `descripcion`, `tecnologias`, `enlace`, `imagen`, `destacado`
- Filtro por tecnología.
- Animación de cards con `AnimatePresence`.
- **Featured project**:
  - se obtiene buscando el primer `destacado: true`.
  - solo aparece si coincide con el filtro o si el filtro es `todos`.
- **Modal case study**:
  - `selectedProject` guarda el proyecto abierto.
  - al abrir, bloquea el scroll (`document.body.style.overflow = 'hidden'`).
  - se cierra con `Esc`, click fuera y botón.
  - usa `layoutId` para animación card → modal.

Extender el modal:

- agregar `demoUrl`, `repoUrl`, `highlights`, `screenshots`, `features` al objeto de proyecto.

### 10.5 `Skills.jsx`

- Filtra por categoría.
- Barra de nivel con animación (width progresivo cuando `mounted` es true).
- Animación de cards con `Framer Motion` + `layout`.

### 10.6 `Contact.jsx`

- CTA simple.
- Personaliza `mailto:` y LinkedIn.

### 10.7 `Footer.jsx`

- Links finales.

### 10.8 `Icons.jsx`

- SVGs locales.
- Ventaja: no dependes de librerías externas.

## 11) Cómo agregar una sección nueva (ejemplo real)

1) Crea `src/components/NuevaSeccion.jsx`.
2) En `App.jsx`, importa y agrega el componente en el orden deseado.
3) En `Header.jsx`, agrega un item en `navItems`.
4) Asegúrate de poner un `id` en el `<section>`.
5) Usa `useInView` para animar entrada si lo quieres.

## 12) Cómo mantener el proyecto “pro” (buenas prácticas)

- Mantén el contenido (data) cerca del componente si es simple.
- Si crece, mueve data a `src/data/`.
- Para imágenes:
  - ideal: guardar imágenes propias en `public/img/`.
  - evitar hotlinking a URLs externas en producción.
- Accesibilidad:
  - botones reales para acciones, `aria-label` en icon buttons.
  - `focus-visible` en elementos interactivos.
- Performance:
  - `loading="lazy"` en imágenes.
  - evitar `Math.random()` en render (usar `useMemo`).

## 13) Deploy

### Netlify / Vercel

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

- puedes necesitar `base` en `vite.config.js` (subpath).

## 14) Troubleshooting extendido

- **Error con Tailwind**
  - revisa `tailwind.config.js > content`.
  - revisa que `index.css` esté importado en `main.jsx`.

- **Animaciones raras en reduced motion**
  - revisa el bloque `@media (prefers-reduced-motion: reduce)` en `src/index.css`.

- **Modal no se ve bien en mobile**
  - ajusta alturas (`h-64 sm:h-72`) y paddings.

## 15) Roadmap de mejoras (opcional)

- Añadir `demoUrl` real + botón extra.
- Añadir buscador y sort en Projects.
- Añadir galería en modal.
- Añadir tema claro/oscuro real (ahora se usa una estética dark).
