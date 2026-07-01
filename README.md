# CS Software — Sitio web

Sitio de una sola página hecho con React + Vite para presentar los servicios de
desarrollo freelance (Android, escritorio y web).

## Estructura

```
src/
  siteConfig.js        <- Acá están el número de WhatsApp, el email y el nombre de marca.
  components/
    Header.jsx          Navegación fija arriba
    Hero.jsx             Portada con el panel de "compilación" animado
    Services.jsx         Las 3 fichas de servicio (Android / Escritorio / Web)
    Process.jsx          Los 4 pasos de cómo trabajás
    About.jsx             Sobre vos
    Portfolio.jsx        Placeholder "en construcción" para cuando sumes proyectos
    Contact.jsx           WhatsApp y email
    Footer.jsx
  index.css              Todos los estilos y variables de color/tipografía
```

## Cómo editar el contenido

- **Datos de contacto**: editá `src/siteConfig.js`.
- **Textos de cada sección**: editá directamente el `.jsx` de la sección (todo el texto
  está en español plano, sin lógica compleja).
- **Colores y tipografía**: están definidos como variables CSS al principio de
  `src/index.css` (bloque `:root`). Cambiando esas variables cambia todo el sitio.
- **Portfolio**: cuando tengas proyectos para mostrar, reemplazá el contenido de
  `src/components/Portfolio.jsx` por tarjetas con cada caso (puedo ayudarte a armar
  ese componente cuando quieras).

## Correr el sitio en tu computadora

Necesitás [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
npm install
npm run dev
```

Esto abre el sitio en `http://localhost:5173` con recarga automática al guardar cambios.

## Deploy en Vercel

**Opción 1 — Desde la web de Vercel (más simple):**
1. Subí esta carpeta a un repositorio de GitHub.
2. Entrá a [vercel.com](https://vercel.com), "Add New Project" e importá el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite: no hay que tocar nada,
   solo confirmar "Deploy".

**Opción 2 — Desde la terminal:**
```bash
npm install -g vercel
vercel
```
Seguí las preguntas en pantalla (framework: Vite, se detecta solo) y listo.

Cada vez que quieras actualizar el sitio ya en producción, hacés `vercel --prod`
(o simplemente hacés push a la rama principal de GitHub si lo conectaste ahí).
