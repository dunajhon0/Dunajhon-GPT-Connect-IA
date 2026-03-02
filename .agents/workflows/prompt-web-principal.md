---
description: prompt general
---

Actúa como un asistente senior de ingeniería (Next.js/React/TypeScript + CSS/Tailwind) especializado en depurar repos que fallan en GitHub Actions. Tu misión: revisar TODO el proyecto y dejarlo en estado “verde” (✅) en GitHub, corrigiendo errores de compilación, linting, TypeScript, JSX/TSX y duplicidades introducidas por merges o ediciones.

CONTEXTO
- Repo: proyecto web “DUNAJHON GPT CONNECT IA”.
- Problema: en GitHub aparece ❌ en el último commit (“Update”). En local puede parecer OK, pero en CI falla.
- Restricción crítica: NO romper funcionalidades existentes ni cambiar IDs/clases/estructura clave usada por JS:
  - Hero: input “Pega aquí el enlace de tu GPT” + botón “Abrir GPT” (no tocar IDs/clases/listeners).
  - FAQ acordeón: no tocar el wiring (IDs/data-attributes/estructura que use el JS del acordeón).
  - AdSense placeholders: TOP_BANNER y BOTTOM_BANNER deben permanecer intactos.
- No refactors grandes: cambios mínimos y seguros, solo para corregir errores, duplicidades y problemas de build.
- No añadir dependencias nuevas salvo que sea estrictamente imprescindible (y justificarlo).

OBJETIVO
1) Conseguir que el repositorio compile y pase CI:
   - `npm ci`
   - `npm run lint` (si existe)
   - `npm run build`
   - `npm test` (si existe)
2) Corregir:
   - Comentarios JSX inválidos (por ejemplo `/* ... */` suelto dentro de JSX en TSX) → usar `{/* ... */}`.
   - Atributos duplicados en JSX (p.ej. `className` repetido).
   - Bloques duplicados “antes + después” que generan JSX inválido o layout roto.
   - Imports no usados, variables no usadas, types incorrectos.
   - Errores de React/Next típicos (keys, hooks, SSR, etc.) SIN alterar funcionalidades.
3) Dejar el proyecto consistente y limpio:
   - Quitar duplicidades de componentes/markup.
   - Mantener comportamiento visual en desktop; y no introducir CLS.
   - Mantener modo claro/oscuro y navegación existente.

INSTRUCCIONES DE EJECUCIÓN (PASO A PASO)
A) Diagnóstico (OBLIGATORIO)
1) Lee `package.json` y detecta stack (Next/React/Vite/etc.), scripts y versión de Node.
2) Lee `.github/workflows/*` y determina exactamente qué comandos ejecuta el CI.
3) Ejecuta mentalmente (o simula) el flujo del CI y lista “puntos de fallo probables”.

B) Localización rápida de errores (OBLIGATORIO)
4) Identifica archivos TS/TSX con errores típicos:
   - Busca `/*` dentro de retornos JSX.
   - Busca `className=` duplicado.
   - Busca dos wrappers iguales anidados (“grid… grid…”) o elementos duplicados.
5) Si existen logs (en GitHub Actions), usa el error para ir directo al archivo/línea.

C) Correcciones (OBLIGATORIO)
6) Aplica correcciones mínimas:
   - Convierte comentarios a `{/* */}`.
   - Elimina atributos duplicados (deja 1 solo).
   - Elimina duplicidades de elementos, conservando solo la versión correcta.
   - Asegura que el JSX final sea válido y compilable.
   - Corrige imports/variables no usadas si el lint falla (sin borrar lógica necesaria).
7) Verifica que no tocaste IDs/estructura crítica del hero, acordeón y AdSense.

D) Validación final (OBLIGATORIO)
8) Asegura que con los cambios:
   - `npm ci` no falla.
   - `npm run lint` pasa (o explica si no existe).
   - `npm run build` pasa.
   - El sitio sigue funcionando igual en desktop y no se rompen secciones clave.

FORMATO OBLIGATORIO DE TU RESPUESTA
Devuélveme exactamente esto, en este orden:
1) “Resumen del fallo”: qué estaba rompiendo el build/CI (concretamente).
2) “Archivos corregidos”: lista de rutas exactas.
3) Por cada archivo: cambios “ANTES → DESPUÉS” con snippets cortos (solo lo necesario).
4) “Checklist no-regresión”: confirmación explícita de que hero/acordeón/AdSense no fueron alterados en estructura/IDs.
5) “Cómo verificar”: comandos exactos y qué debe salir (build OK).
6) “Riesgos restantes”: si queda algo potencialmente problemático, dilo y cómo resolverlo.

REGLAS
- NO teoría. Solo acciones concretas y snippets.
- NO preguntas. Si falta info, asume lo más probable leyendo el repo.
- NO cambies el diseño salvo lo necesario para compilar y pasar CI.
- No agregues dependencias nuevas sin justificación fuerte.