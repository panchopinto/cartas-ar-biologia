# Archivos añadidos — Célula Animal (GLB) con Etiquetas

Incluye:
- `index.html` — landing con enlaces a los visores.
- `viewer.html` — visor 3D simple.
- `viewer_hotspots.html` — visor 3D con etiquetas interactivas (hotspots).
- `arjs-demo/animal_glb.html` — AR con AR.js + marcador HIRO.
- `assets/models/Celula_animal.glb` — modelo (puedes reemplazarlo).
- `assets/data/hotspots.json` — posiciones/nombres/descripciones de partes.

## Uso
1. Copia estas rutas en tu repo `cartas-ar-biologia` tal cual.
2. Commit + push a `main`.
3. Abre:
   - Landing: `https://<usuario>.github.io/cartas-ar-biologia/`
   - 3D simple: `https://<usuario>.github.io/cartas-ar-biologia/viewer.html`
   - 3D con etiquetas: `https://<usuario>.github.io/cartas-ar-biologia/viewer_hotspots.html`
   - RA (HIRO): `https://<usuario>.github.io/cartas-ar-biologia/arjs-demo/animal_glb.html`

## Editar etiquetas
- Ajusta posiciones en `assets/data/hotspots.json` (campo `offset` es relativo al grupo del modelo).
- Si cambias `scale`/`rotation` del grupo en el HTML, puede que debas reajustar los `offset`.


Creado por: Francisco Pinto Aravena