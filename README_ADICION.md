# Célula Animal — 3D + RA (cámara como fondo)

Incluye:
- `index.html` — landing con accesos y recomendaciones de UX.
- `viewer.html` — visor 3D simple.
- `viewer_hotspots.html` — visor 3D con etiquetas interactivas.
- `arjs-demo/animal_glb.html` — RA con AR.js y cámara como fondo.
- `assets/models/Celula_animal.glb` — modelo (si deseas, reemplázalo).
- `assets/data/hotspots.json` — posiciones/nombres/descripciones de partes.

## Sugerencias de diseño (página principal)
- **Jerarquía visual:** hero claro con título, subtítulo y 3 CTA (3D simple, 3D con etiquetas, RA).
- **Consistencia:** paleta sobria, botones con alto contraste, tipografía legible.
- **Accesibilidad:** textos ≥14px, foco visible, aria-labels si agregas iconos.
- **Rendimiento:** imágenes webp, CSS mínimo, script diferido; GLB con compresión Draco.

## AR estable y cámara como fondo
- HTTPS y permisos de cámara (GitHub Pages lo cumple).
- Marcador HIRO A4, bien iluminado y sin reflejos.
- Dispositivos iOS: usar Safari para acceso a cámara.
