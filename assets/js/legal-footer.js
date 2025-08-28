<script>
// Inyecta meta "canary" en <head> + footer legal fijo en <body>
// ⚠️ Cambia CANARY_DATE y CANARY_HASH en cada release
(function(){
  var CANARY_DATE = '2025-08-27';
  var CANARY_HASH = 'build-v3_FAPA-PROTOTYPE-K9999'; // usa algo único por versión (p.ej. git short sha)

  // Meta canary (head)
  try {
    var meta = document.querySelector('meta[name="canary"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'canary';
      meta.content = 'Proyecto AR Biología — build:' + CANARY_DATE + ' — hash:' + CANARY_HASH;
      document.head.appendChild(meta);
    }
  } catch(e){ /* nada */ }

  // Footer legal (body)
  function addFooter(){
    if (document.getElementById('legalFooter')) return;
    var f = document.createElement('div');
    f.id = 'legalFooter';
    f.textContent = '© 2025 Pancho Pinto — Prohibida la copia y distribucion de contenido';
    f.style.cssText = [
      'position:fixed','left:10px','bottom:10px','z-index:99999',
      'padding:4px 8px','border:1px solid rgba(255,255,255,.25)',
      'background:rgba(0,0,0,.35)','color:#cfe6ff',
      'font:600 11px system-ui','border-radius:8px','backdrop-filter:blur(2px)'
    ].join(';');
    document.body.appendChild(f);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addFooter);
  } else {
    addFooter();
  }
})();
</script>
