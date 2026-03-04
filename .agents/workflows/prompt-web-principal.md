---
description: prompt general
---

PROMPT 1 — HOSTS: https://dunajhon.com/ y https://www.dunajhon.com/

Actúa como un asistente técnico senior (auditor + implementador) especializado en despliegues web/SEO técnico y Google AdSense. Tu misión es dejar listos estos hosts para aprobación/monetización, sin duplicados y con pruebas verificables.

DATOS LITERALES DE ADSENSE (NO CAMBIAR):
META (Etiqueta meta): <meta name="google-adsense-account" content="ca-pub-3779816940145698">

ADS.TXT (Fragmento de ads.txt):
google.com, pub-3779816940145698, DIRECT, f08c47fec0942fa0

SCRIPT (Fragmento de código de AdSense) — 

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3779816940145698"
     crossorigin="anonymous"></script>

OBJETIVO (TODO debe quedar verificado):

1. Determina si www redirige (301/308) a no-www o al revés.

   * Si HAY redirección consistente: define el CANÓNICO y aplica todo al canónico (y verifica que www redirige bien).
   * Si NO hay redirección: trata ambos como sitios independientes y aplica todo a ambos.
2. /ads.txt:

   * GET https://HOST/ads.txt => 200 OK y contiene EXACTAMENTE la línea ADS.TXT.
3. /robots.txt:

   * GET https://HOST/robots.txt => 200 OK
   * NO bloquea "/" ni "/ads.txt"
   * Incluye "Sitemap: https://HOST/sitemap.xml" (o detecta la ruta real y actualiza robots).
4. /sitemap.xml (o ruta real):

   * GET https://HOST/sitemap.xml => 200 OK, XML válido, URLs canónicas del propio HOST.
5. <head> global:
   - En el HTML servido de la home, dentro de <head>, debe existir el SCRIPT EXACTO anterior (sin duplicados).
   - Si se usa método meta, debe existir la META (sin duplicados).
6. Accesibilidad:

   * Home 200 OK (o 301->200) sin bucles; sin maintenance/auth/bloqueos.

REGLAS:

* Verifica antes de actuar (repo + URLs).
* Si existe pero mal: corrige. Si falta: crea/implementa en el lugar exacto.
* No dupliques script ni meta.
* Aporta evidencias: URL + status + “busqué este string”.

ENTREGABLE:

* Informe final separado por host (CANÓNICO y WWW si aplica): stack detectado, cambios exactos (archivo→ubicación→texto), y checklist ✅/⚠️.
