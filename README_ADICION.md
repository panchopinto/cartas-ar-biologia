# Archivos añadidos — Célula Animal (GLB)

Este paquete incluye:
- `index.html` — página de inicio con enlaces a visor 3D y escena AR.
- `viewer.html` — visor 3D con A-Frame.
- `arjs-demo/animal_glb.html` — escena AR con AR.js + marcador HIRO.
- `assets/models/Celula_animal.glb` — modelo GLB de célula animal (colócalo aquí si deseas reemplazarlo).
  
## Uso en GitHub Pages
1. Copia estas carpetas/archivos al repo `cartas-ar-biologia` respetando las rutas.
2. Haz commit y push a `main`.
3. Abre:
   - Landing: `https://<usuario>.github.io/cartas-ar-biologia/`
   - Visor 3D: `https://<usuario>.github.io/cartas-ar-biologia/viewer.html`
   - RA (HIRO): `https://<usuario>.github.io/cartas-ar-biologia/arjs-demo/animal_glb.html`

## Notas
- La RA requiere HTTPS y permisos de cámara (GitHub Pages cumple).
- Para imprimir un marcador HIRO, busca “hiro marker AR.js” y usa una plantilla A4 en negro con buen contraste.
- Si el modelo se ve muy grande/pequeño, ajusta el atributo `scale` en los HTML.
