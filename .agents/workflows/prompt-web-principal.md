---
description: prompt general
---

Eres una IA **generadora de código**. Debes **rediseñar y ampliar** la web de la marca **DUNAJHON GPT CONNECT IA** para que sea mucho más **moderna, premium, intuitiva** y con **retención >30 minutos**, **SIN ROMPER** lo ya implementado (según PRD/SRS).

## 0) RESTRICCIÓN CRÍTICA (OBLIGATORIA)

* **NO rompas**: funcionalidades existentes, rutas, componentes clave, estructura de archivos, lógica del input **“Pega aquí el enlace de tu GPT”** + botón **“Abrir GPT”**, navegación **(Directorio / Guías / Casos de Uso)**, modo oscuro (toggle funcional), FAQ, CTA, footer legal.
* **NO elimines ni invalides**: `ads.txt`, `robots.txt`, `sitemap.xml`. Si propones cambios, deben ser **opcionales** y **compatibles** (sin romper indexación ni AdSense).
* Mantén **placeholders AdSense existentes**: `TOP_BANNER` y `BOTTOM_BANNER` (no los borres; mejóralos y documenta cómo cambiar a unidades reales sin romper nada).
* No inventes backend. Todo debe poder funcionar **estático** (front-end only). Cualquier “guardar” debe ser UI no persistente (o localStorage opcional si ya existe).

## 1) OBJETIVO Y RESULTADO ESPERADO

Rediseño visual total + ampliación fuerte de contenido y UX:

* Estética: **high-end**, limpia, espaciado generoso, tipografía moderna, micro-interacciones sutiles (hover/focus/scroll-reveal suave).
* Marca protagonista: “**DUNAJHON GPT CONNECT IA**” grande y visible (header + hero + secciones).
* Contenido ampliado y elementos interactivos para mantener al usuario **>30 min**:

  * **Tabla de contenidos sticky** + **barra de progreso de lectura**
  * **Scrollspy** (sin romper navegación)
  * Secciones expandibles (accordions), tabs, stepper, checklist interactiva, mini-quiz/diagnóstico, “copiar prompt”, “ver ejemplo”, “reto de 7 días”, “guardar en favoritos” (UI no persistente), mini-curso sin backend, calculadora simple de ahorro de tiempo.
* Secciones por categorías con estética diferenciada y armónica:

  * **Productividad**, **Entretenimiento**, **Actualidad**
  * Cada una con **gradiente/color propio** coherente con el sistema general (no chillón), **badges**, **cards/cajetines**, y **botón/enlace** que navegue a otra página con URL placeholder configurable (ej: `https://example.com/productividad`).
* Educación: nuevo apartado “**¿Qué es la Inteligencia Artificial?**” + subapartados claros + ejemplos prácticos.
* Productividad: “**Cómo la IA mejora la productividad**” con guías accionables, mini-casos, plantillas, componentes interactivos.
* Legal + confianza: textos base claros (sin asesoría legal) para privacidad/cookies/aviso legal, con **banner de cookies + panel ‘Configurar cookies’**; mantener enlaces en footer.
* SEO técnico, accesibilidad y rendimiento (Core Web Vitals): semántica, headings correctos, schema.org, OG, lazy-load, minimizar JS, ARIA, focus states, contraste, responsive mobile-first.

## 2) SI NO CONOCES MI STACK (OBLIGATORIO)

Si no puedes inferir el stack, entrega una solución **agnóstica** en **HTML/CSS/JS** (vanilla) **y** una variante **React/Next** (siempre que puedas) **sin pedirme más datos**.

* Si asumes algo, decláralo como **“Supuesto”** y mantén compatibilidad.
* Si existe un framework ya, NO migres ni reestructures radicalmente: entrega **patches por archivo** o componentes integrables respetando estructura y rutas.

## 3) ENTREGABLES (DEBES DEVOLVER ESTO EN ESTE ORDEN)

1. **Lista de cambios (alto nivel)**: qué mejoras haces y por qué (UX/SEO/perf/AdSense/legal).
2. **Nueva arquitectura de secciones (orden de scroll)** + **wireframe textual** (estructura por bloques, qué se ve primero y por qué).
3. **Design tokens** (variables): colores (light/dark), tipografías, tamaños, espaciado, radios, sombras, bordes, gradientes por categoría, z-index, motion.
4. **Componentes UI** (definidos y reutilizables): botones, cards, badges, tabs, accordions, stepper, modal/drawer, tooltip, toast, progress bar, sticky toc, scrollspy, skeletons, banner cookies, panel cookies, ad slots.
5. **Copy completo en español** para todas las nuevas secciones + mejoras del copy existente (tono profesional, claro, orientado a beneficios, sin promesas engañosas).
6. **Código/plantillas listas para integrar** (o patches por archivo) manteniendo lo existente.

   * Conserva rutas, componentes clave, lógica del input “Abrir GPT”.
   * Incluye CSS/SVG/fondos abstractos (sin copyright restrictivo).
7. **Checklist QA**: SEO, accesibilidad, rendimiento, AdSense, cookies, responsive, validación.

## 4) REQUISITOS DE DISEÑO Y BRANDING (OBLIGATORIOS)

* **Header**: logo + nombre grande “DUNAJHON GPT CONNECT IA” + tagline: **“Conecta tu trabajo con la IA”**.
* Navegación: **Directorio / Guías / Casos de Uso** con estado activo, foco visible, y **scrollspy** (si aplica). Mega menú opcional **solo si no rompe nada**.
* **Hero**:

  * Fondo premium (gradiente sutil + formas abstractas CSS/SVG).
  * Claim claro y específico + 2 CTAs: **Explorar Directorio** / **Ver Guías**.
  * Mantener y mejorar el bloque existente: input “Pega aquí el enlace de tu GPT” + botón “Abrir GPT” (misma lógica).
  * Añadir microcopy de confianza (ej: “Sin registro. Abre tu GPT en un clic.”).
* **Secciones categoría** (Productividad / Entretenimiento / Actualidad):

  * Cada una con color/gradiente propio (armónico).
  * Badges, cards, CTA botón “Ver contenido” con URL configurable placeholder:

    * `https://example.com/productividad`
    * `https://example.com/entretenimiento`
    * `https://example.com/actualidad`
  * Cards con: título, resumen, “qué aporta”, nivel (Principiante/Intermedio/Avanzado), tiempo estimado, etiqueta.
* **Sección Creadores**:

  * No inventes nombres propios. Usa: **“Equipo DUNAJHON”**.
  * Incluye misión, valores, por qué existe el proyecto, criterio de calidad/validación, compromiso con uso responsable.
* **Centro de Aprendizaje IA**:

  * Definición clara, tipos (ML, DL, generativa), ejemplos prácticos.
  * Riesgos/ética en tono neutro (sesgos, privacidad, alucinaciones, seguridad) + buenas prácticas.
* **Productividad con IA**:

  * Frameworks y flujos: “Define → Pide → Evalúa → Itera → Automatiza”.
  * Plantillas de prompts (copiables), mini-casos, checklist por rol, mini-curso, reto 7 días.
  * Calculadora simple de ahorro de tiempo (inputs: tareas/semana, minutos ahorrados, €/hora opcional) + resultado.
  * Quiz/diagnóstico: “¿Qué nivel de adopción IA tienes?” con recomendación final.
* **FAQ**: mantener y ampliar orientada a confianza/SEO; convertir en acordeón accesible.
* **Footer**: mantener enlaces legales; añadir copy base de confianza y transparencia publicitaria.

## 5) MONETIZACIÓN AdSense (OBLIGATORIO, SIN INCENTIVOS)

* Mantén `TOP_BANNER` y `BOTTOM_BANNER` (placeholders).
* Integra los espacios de anuncio de forma:

  * Responsive, sin tapar navegación, sin “engaños” ni incentivos (“haz clic” prohibido).
  * Con reservación de espacio para evitar CLS (min-height, placeholders skeleton).
* Incluye instrucciones claras: cómo sustituir placeholder por unidad real (ej: componente/slot con `data-ad-client` y `data-ad-slot` configurables), **sin romper nada**.
* Respeta políticas: no colocar anuncios en zonas engañosas, no excesivos en above-the-fold, no interferir interacción principal.

## 6) LEGAL, COOKIES Y CONFIANZA (OBLIGATORIO)

* Implementa banner cookies + panel **“Configurar cookies”** (modal o drawer):

  * Categorías: Necesarias (siempre activas), Analítica, Publicidad, Personalización (opcionales).
  * Botones: “Aceptar todo”, “Rechazar”, “Guardar configuración”.
  * Copy base en español, neutral, sin asesoría legal.
* Mantén enlaces en footer: Política de privacidad, Cookies, Aviso legal.
* Añade bloque “Transparencia” (breve): uso de cookies/anuncios.

## 7) SEO TÉCNICO + ACCESIBILIDAD + RENDIMIENTO (OBLIGATORIO)

* HTML semántico: `header/nav/main/section/article/footer`, headings correctos (H1 único, jerarquía).
* Meta/OG: title/description dinámicos por página si aplica, OpenGraph, Twitter Cards.
* Schema.org:

  * `Organization` + `WebSite` (con SearchAction si hay búsqueda/directorio)
  * `FAQPage` en sección FAQ.
* Rendimiento (Core Web Vitals):

  * Lazy-loading imágenes/iframes, fuentes optimizadas, CSS crítico razonable, minimizar JS.
  * Evitar CLS (reserva de tamaño), animaciones transform/opacity.
* Accesibilidad:

  * Contraste AA, foco visible, navegación teclado completa.
  * ARIA en tabs/accordion/modal, labels en inputs.
  * Preferencias de movimiento (`prefers-reduced-motion`).
* Mobile-first responsive impecable.

## 8) CONTENIDOS OBLIGATORIOS (DEBES CREAR COPY COMPLETO EN ESPAÑOL)

Incluye al menos estas secciones con copy completo:

* Hero (claim, subclaim, microcopy, CTAs)
* “Cómo funciona” (3–5 pasos)
* Categorías (Productividad/Entretenimiento/Actualidad) con 6–9 cards por categoría (títulos + descripciones + CTA)
* “¿Qué es la IA?” (definición, cómo aprende, ejemplos cotidianos, mitos, glosario corto)
* “IA y productividad” (guías accionables por rol: estudiante, freelance, marketing, ventas, soporte, RRHH, programador)
* Mini-casos (antes/después) + métricas prudentes (sin promesas absolutas)
* Plantillas de prompts (al menos 12) con botón “Copiar prompt” y “Ver ejemplo”
* Mini-curso (5 lecciones) + Reto 7 días (7 pasos) + Checklist descargable (texto)
* Quiz diagnóstico (10 preguntas) + resultado y recomendaciones
* Calculadora ahorro de tiempo
* Sección Creadores (Equipo DUNAJHON)
* FAQ ampliada (12–18 preguntas)
* CTA final (explorar directorio / ver guías / pegar enlace GPT)
* Legal/cookies (copy base)

## 9) RECURSOS VISUALES (SIN COPYRIGHT RESTRICTIVO)

* No uses imágenes con licencias restrictivas.
* Preferible: fondos abstractos en **CSS/SVG** (gradientes, noise sutil, blobs, líneas) generados en el código.
* Iconografía: usa set libre (SVG inline) o equivalente sin dependencias pesadas.

## 10) EXPECTATIVAS DE CÓDIGO (OBLIGATORIO)

* Entrega código listo para copiar/pegar o patches por archivo.
* No cambies nombres/rutas existentes si no es imprescindible.
* Mantén el comportamiento del input “Abrir GPT” intacto.
* Donde pongas URLs, usa placeholders configurables (ej: constantes/config).
* Incluye comentarios breves y útiles (no relleno).

---

### AHORA EJECUTA LA TAREA

Genera la salida con los **7 entregables** en el **orden exacto** indicado (1→7), aplicando todos los requisitos anteriores, manteniendo compatibilidad con lo ya existente y sin pedir más información.
