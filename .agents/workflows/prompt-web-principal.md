---
description: prompt general
---

Actúa como un Prompt Engineer senior (enfocado a generación de webs) y redacta UN ÚNICO “PROMPT FINAL” listo para copiar/pegar en una IA que genera código (IA B). Tu objetivo es que IA B produzca una web completa, moderna, elegante y sencilla, orientada a monetización y cumpliendo buenas prácticas.

REGLAS PARA TU SALIDA (IA A):
1) Tu respuesta debe incluir SOLO:
   - (A) “PROMPT FINAL” (listo para copiar y pegar)
   - (B) “CHECKLIST DE ACEPTACIÓN” (lista breve para verificar que se cumple todo)
   - (C) “SUPOSICIONES” (máx. 8 bullets, si hiciste alguna)
2) No hagas preguntas. Si falta algo, asume decisiones razonables y sigue.
3) Escribe todo en español, tono profesional/serio y persuasivo (sin exagerar).
4) Evita prometer “cumplimiento legal garantizado”. En su lugar: “alineado con buenas prácticas, revisar con asesoría/AdSense policies”.
5) El “PROMPT FINAL” debe pedir a IA B que entregue código completo con estructura de archivos y contenido listo para desplegar.

CONTEXTO DEL PROYECTO (lo que debe lograr IA B):
- Sitio: “DUNAJHON GPT CONNECT IA”
- Propósito: escaparate de nuestros productos y páginas web vinculadas a GPTs públicos (mostrar ventajas).
- Icono: ya existe un PNG adjunto en el proyecto (p.ej., /assets/icon.png). Debe usarse como favicon y en cabecera.
- Diseño: moderno + elegante + simple. Responsive, accesible y rápido.
- UX: una sola página principal con SCROLL y secciones (tipo landing larga) + páginas legales separadas.
- Contenido: suficiente para ~20 minutos de lectura/uso por usuario. Objetivo aproximado 3.000–4.500 palabras de contenido útil (no relleno), con estructura clara, ejemplos, FAQ y CTAs.
- Secciones obligatorias (en el orden que IA B considere óptimo):
  1) Hero con propuesta de valor clara, CTA principal y CTA secundario.
  2) “Qué es DUNAJHON GPT CONNECT IA” y por qué existe.
  3) Beneficios de usar IA para optimizar trabajo (productividad, calidad, automatización, decisión).
  4) Casos de uso por perfiles (freelance, pyme, equipos, creadores) con ejemplos concretos.
  5) Nuestro “ecosistema” de páginas vinculadas a GPTs públicos: explicar ventajas.
  6) Catálogo/escaparate de productos/servicios (cards) con botones modernos.
  7) Sección “Páginas / Proyectos” con MENÚ preparado para ir añadiendo nuevas webs fácilmente.
     - Debe ser fácil añadir enlaces nuevos sin tocar mucho código:
       * O bien desde un archivo JSON (p.ej., data/sites.json),
       * o bien desde un array en un único archivo JS.
  8) “Roadmap / Futuro” (cómo evolucionará) + confianza (mantenimiento, actualizaciones).
  9) FAQ (acordeón).
  10) CTA final fuerte + formulario simple (sin backend) o mailto.
  11) Footer completo con enlaces legales y contacto.

MONETIZACIÓN / ADSENSE / COOKIES (IA B debe implementarlo):
- Incluir un sistema de banners/espacios publicitarios preparado para Google AdSense:
  - Insertar el snippet de AdSense como PLACEHOLDER con client/slot ficticios (ca-pub-XXXXXXXX…).
  - Ubicaciones recomendadas: 1 banner in-content y 1 en sidebar/entre secciones (pero manteniendo una estética limpia).
  - Responsive.
- Cumplir buenas prácticas de monetización:
  - SEO on-page sólido (title/description, headings correctos, Open Graph, Twitter cards, sitemap, robots).
  - Rendimiento (lazy load, preconnect, minimizar JS).
- Consentimiento de cookies (GDPR/ePrivacy):
  - Banner de cookies real (Aceptar / Rechazar / Configurar).
  - Guardar preferencias (localStorage/cookie).
  - Bloquear scripts no esenciales (incl. AdSense/ads) hasta consentimiento cuando aplique.
  - Incluir página de Política de Cookies + Política de Privacidad + Términos/Condiciones + Aviso Legal.
  - Texto de cookies y privacidad en español, tono profesional.
  - Nota: indicar que el dueño del sitio debe revisar y adaptar textos legales a su situación y a las políticas de Google.

ESTILO / ASSETS / COPYRIGHT:
- Fondos y estilos modernos sin vulnerar copyright:
  - Preferir fondos generados por CSS (gradientes, patrones SVG propios) y tipografías libres (Google Fonts).
  - Si usas imágenes: solo de fuentes con licencia comercial clara (Unsplash/Pexels) y añade atribución si corresponde.
  - No uses recursos con copyright dudoso.
- Animaciones sutiles (scroll reveal) con IntersectionObserver, sin librerías pesadas.
- Botones modernos, cards, sombras suaves, glassmorphism ligero si encaja.
- Modo oscuro opcional (toggle) si aporta valor y no complica.

TECNOLOGÍA Y ENTREGA (lo que IA B debe devolver):
- Preferencia: HTML + CSS + JS “vanilla” (o Tailwind vía CDN si lo justificas por simplicidad), sin frameworks complejos.
- Debe ser compatible con despliegue estático (GitHub Pages / Cloudflare Pages).
- IA B debe entregar:
  1) Árbol de archivos sugerido (ej.: /index.html, /assets/, /css/, /js/, /legal/…).
  2) Código completo de cada archivo en bloques separados.
  3) Instrucciones de despliegue rápidas (GitHub Pages/Cloudflare Pages) y cómo añadir nuevas páginas al menú.
  4) Un checklist técnico final (SEO, accesibilidad, cookies, ads placeholders, performance).

COPIA LITERALMENTE ESTO EN TU “PROMPT FINAL” PARA IA B:
- “No hagas preguntas; asume y ejecuta.”
- “Devuelve código listo para producción (estático) y fácil de mantener.”
- “Incluye contenidos largos y útiles, evitando relleno.”
- “Incluye placeholders claros donde el usuario debe poner su ID de AdSense y revisar textos legales.”

AHORA: redacta el PROMPT FINAL (para IA B) cumpliendo todo lo anterior, y añade la CHECKLIST DE ACEPTACIÓN y SUPOSICIONES.