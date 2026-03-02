import GptInputBox from '@/components/GptInputBox';
import AdSenseSlot from '@/components/AdSenseSlot';
import CategoryTabs from '@/components/CategoryTabs';
import IaLearningTabs from '@/components/IaLearningTabs';
import PromptTemplates from '@/components/PromptTemplates';
import TimeCalculator from '@/components/TimeCalculator';
import IaQuiz from '@/components/IaQuiz';
import MiniCursoInteractivo from '@/components/MiniCursoInteractivo';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Rocket, ChevronRight,
  Zap, Compass, BookOpen, ShieldCheck, Star,
  MessageSquare, FileText, BarChart3, Repeat2, BrainCircuit,
  CheckCircle2, Target, Trophy, Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'DUNAJHON GPT CONNECT IA — Directorio de GPTs y Guías de IA',
  description:
    'Descubre y conecta con los mejores GPTs. Directorio curado, guías de IA en español, calculadora de productividad, quiz de diagnóstico y mucho más — sin registro.',
};

// ── Schema.org FAQPage (inline for SEO) ──
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué es DUNAJHON GPT CONNECT IA?', acceptedAnswer: { '@type': 'Answer', text: 'Es un directorio curado donde recopilamos y clasificamos los mejores GPTs de ChatGPT, junto con guías de productividad con IA, herramientas interactivas y contenido educativo — todo en español y sin registro.' } },
    { '@type': 'Question', name: '¿Necesito una cuenta de pago (ChatGPT Plus) para usar los GPTs?', acceptedAnswer: { '@type': 'Answer', text: 'Depende del GPT. Muchos son accesibles con la cuenta gratuita de OpenAI, pero algunos avanzados (con imágenes, DALL-E, etc.) requieren ChatGPT Plus.' } },
    { '@type': 'Question', name: '¿Es seguro pegar mi enlace de GPT en esta web?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. El enlace que introduces se abre directamente en la web oficial de ChatGPT (chatgpt.com). Nunca almacenamos tus URLs ni datos personales.' } },
  ],
};

// ── FAQ data ──
const faqs = [
  { q: '¿Qué es DUNAJHON GPT CONNECT IA?', a: 'Es un directorio curado donde recopilamos y clasificamos los mejores GPTs de ChatGPT, junto con guías de productividad con IA, herramientas interactivas y contenido educativo — todo en español y sin registro.' },
  { q: '¿Necesito una cuenta de pago (ChatGPT Plus)?', a: 'Depende del GPT. Muchos son accesibles con la cuenta gratuita de OpenAI, pero algunos avanzados (con imágenes, DALL-E, etc.) requieren ChatGPT Plus o superior.' },
  { q: '¿Es seguro pegar mi enlace de GPT aquí?', a: 'Sí. El enlace que introduces se abre directamente en chatgpt.com. Nunca almacenamos tus URLs ni datos personales.' },
  { q: '¿Cómo puedo añadir mi GPT al directorio?', a: 'Próximamente habilitaremos un formulario de envío. Por ahora nos centramos en curación interna para garantizar máxima calidad y utilidad.' },
  { q: '¿Los GPTs listados son gratuitos?', a: 'La gran mayoría son accesibles con cuenta gratuita de OpenAI. Cuando un GPT requiere Plus lo indicamos claramente en su ficha.' },
  { q: '¿Con qué frecuencia actualizáis el directorio?', a: 'Revisamos y actualizamos el directorio semanalmente: eliminamos GPTs desactualizados y añadimos nuevas incorporaciones validadas.' },
  { q: '¿Qué es un "prompt" y por qué importa?', a: 'Un prompt es la instrucción que le das a la IA. Un buen prompt marca la diferencia entre una respuesta genérica y una respuesta realmente útil. En nuestra sección de productividad encontrarás 12+ plantillas listas para usar.' },
  { q: '¿Puedo confiar en todo lo que dice la IA?', a: 'No ciegamente. Los modelos de IA pueden "alucinar" datos con aparente confianza. Siempre verifica información crítica (médica, legal, financiera) con fuentes primarias y profesionales cualificados.' },
  { q: '¿Cómo funciona el sistema de publicidad?', a: 'Esta web se financia con Google AdSense. Los anuncios se gestionan automáticamente y nunca interferimos en la navegación principal. Puedes configurar tus preferencias de cookies en cualquier momento.' },
  { q: '¿Mis datos son privados?', a: 'Sí. No recopilamos datos personales sin consentimiento. Utilizamos cookies de analítica y publicidad según las preferencias que tú mismo configures en el banner de cookies.' },
  { q: '¿DUNAJHON tiene relación oficial con OpenAI?', a: 'No. Somos un directorio independiente. OpenAI, ChatGPT y GPT son marcas de OpenAI, LLC. Simplemente facilitamos el acceso a sus herramientas públicas.' },
  { q: '¿Hay una app móvil?', a: 'De momento no. La web está diseñada mobile-first y funciona perfectamente en cualquier navegador móvil sin necesidad de instalar nada.' },
  { q: '¿Qué diferencia hay entre GPT-4 y GPT-5.2?', a: 'GPT-5.2 representa un salto generacional respecto a GPT-4: razonamiento más profundo y con menos errores lógicos, mejor comprensión de instrucciones complejas en múltiples pasos, mayor capacidad multimodal (texto, imágenes, código integrado) y respuestas más coherentes en conversaciones largas. GPT-4 sigue siendo una opción sólida y accesible para la mayoría de tareas cotidianas, pero GPT-5.2 destaca especialmente en análisis avanzado, generación de código y proyectos que requieren precisión elevada.' },
  { q: '¿Puedo usar estos GPTs para mi empresa?', a: 'Sí, siempre respetando los términos de uso de OpenAI. Para usos empresariales intensivos, recomendamos explorar la API de OpenAI o ChatGPT Enterprise.' },
  { q: '¿La IA puede escribir código?', a: 'Sí, y muy bien. ChatGPT y GPTs especializados como Code Mentor Pro pueden generar, depurar y explicar código en decenas de lenguajes. La revisión humana sigue siendo esencial.' },
];

// ── Mini-course data is managed internally by MiniCursoInteractivo component ──

const reto7Dias = [
  { day: 'Día 1', task: 'Instala ChatGPT y chatea 15 min sobre tu trabajo actual. Observa qué hace bien y qué falla.' },
  { day: 'Día 2', task: 'Usa un GPT del directorio de Productividad para reescribir un email real de tu bandeja de entrada.' },
  { day: 'Día 3', task: 'Pide a la IA que cree un plan semanal basado en tus 3 proyectos actuales con bloques de tiempo.' },
  { day: 'Día 4', task: 'Resume con IA un documento o artículo largo que tengas pendiente de leer.' },
  { day: 'Día 5', task: 'Crea una plantilla de prompt personalizada para una tarea que repites cada semana.' },
  { day: 'Día 6', task: 'Prueba un GPT de entretenimiento o actualidad para ver la diversidad de usos.' },
  { day: 'Día 7', task: 'Mide: ¿cuánto tiempo ahorraste? Anota qué mejorarías. Compártelo con alguien de tu entorno.' },
];

// ── Accordion (server-compatible, interactive via details/summary) ──
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="accordion-item group" name="faq">
      <summary className="accordion-trigger list-none cursor-pointer select-none" aria-expanded="false">
        <span>{q}</span>
        <svg className="accordion-icon shrink-0 text-[var(--muted)]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="accordion-body pb-4 text-[var(--muted)] leading-relaxed text-sm">
        {a}
      </div>
    </details>
  );
}

export default function Home() {
  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div id="main-content" className="flex flex-col gap-16 sm:gap-24 lg:gap-28">

        {/* ═══════════════════════════════════════════════
            1. HERO  — dark tech / SaaS premium  (prompt §B + §C)
            Base: #040812 gradient → #060d1e
            Grid: SVG hairline 40px, white 3% opacity
            Glows: 3 radials (cyan, indigo, green/brand)
            Noise: SVG feTurbulence layer
            Watermark: logo centered, parameters below
            ═══════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden px-4 pt-24 pb-28 md:pt-32 md:pb-36 hero-mobile-landscape"
          style={{
            /* ── Base gradient (always dark for brand coherence) ── */
            background: 'linear-gradient(160deg, #040812 0%, #060d1e 60%, #04100f 100%)',
          }}
        >
          {/* ── Layer 1: Dot / grid pattern ── */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.035 }}
          >
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0 L0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          {/* ── Layer 2: Noise texture ── */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.025, mixBlendMode: 'overlay' }}
          >
            <filter id="hero-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#hero-noise)" />
          </svg>

          {/* ── Layer 3: Glow radials ── */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <defs>
              {/* Cyan glow — left center */}
              <radialGradient id="hero-g-cyan" cx="15%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </radialGradient>
              {/* Indigo glow — right top */}
              <radialGradient id="hero-g-indigo" cx="85%" cy="25%" r="45%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </radialGradient>
              {/* Green brand glow — bottom center */}
              <radialGradient id="hero-g-green" cx="50%" cy="90%" r="40%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="15%" cy="50%" rx="55%" ry="60%" fill="url(#hero-g-cyan)" />
            <ellipse cx="85%" cy="25%" rx="50%" ry="55%" fill="url(#hero-g-indigo)" />
            <ellipse cx="50%" cy="90%" rx="45%" ry="40%" fill="url(#hero-g-green)" />
          </svg>

          {/*
            ── Layer 4: LOGO WATERMARK ──
            Parameters (prompt §C):
              position: absolute, centered (top 50%, left 50%, transform translate(-50%,-50%))
              scale: 100vw max 960px
              opacity: 0.09  (subtle, non-competing)
              filter: blur(3px) saturate(1.2) contrast(1.1)
              mix-blend-mode: luminosity  (safe on dark bg, no color fringe)
              z-index: 0  (text at z-10)
              Anti-competition: gradient mask (fade top/bottom edges)
          */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 0 }}
          >
            {/* Mask: fade top & bottom so watermark doesn't bleed into text edges */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, #040812 0%, transparent 22%, transparent 78%, #060d1e 100%)',
                zIndex: 1,
              }}
            />
            <Image
              src="/logo-principal.png"
              alt=""
              width={1280}
              height={492}
              className="w-[90vw] max-w-[960px] object-contain"
              style={{
                opacity: 0.09,
                filter: 'blur(3px) saturate(1.2) contrast(1.05)',
                mixBlendMode: 'luminosity',
                zIndex: 0,
              }}
            />
          </div>

          {/* ── Hero Content (z-10 above all layers) ── */}
          <div className="relative container mx-auto max-w-4xl text-center space-y-7" style={{ zIndex: 10 }}>

            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-300 font-semibold text-xs tracking-wide">
              <Rocket size={13} aria-hidden="true" className="text-cyan-400" />
              Explora nuestros GPTs · Acceso directo · Sin registro
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Conecta tu trabajo
              <br className="hidden sm:block" />
              {' '}con{' '}
              <span
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #7c3aed 50%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                la Inteligencia Artificial
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Directorio curado de GPTs, guías accionables y herramientas interactivas para dominar la IA — en español, sin barreras ni registro.
            </p>

            {/* GPT Input Box */}
            <div className="mt-8 max-w-xl mx-auto">
              <GptInputBox />
              <p className="text-xs text-slate-500 mt-3">
                Sin registro. Abre tu GPT en un clic. Solo enlazamos a la web oficial de ChatGPT.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link
                href="#directorio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white
                  w-full sm:w-auto
                  bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-[0_0_24px_rgba(6,182,212,0.35)]
                  hover:shadow-[0_0_36px_rgba(6,182,212,0.55)] hover:brightness-110
                  transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Compass size={17} aria-hidden="true" /> Explorar Directorio
              </Link>
              <Link
                href="#guias"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200
                  w-full sm:w-auto
                  border border-white/15 bg-white/5
                  hover:bg-white/10 hover:border-white/25
                  transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <BookOpen size={17} aria-hidden="true" /> Ver Guías
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-5 pt-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400" /> GPTs verificados
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400" /> Siempre actualizado
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400" /> Acceso 100% gratuito
              </span>
            </div>
          </div>
        </section>


        {/* ── TOP BANNER ── */}
        <div className="container mx-auto px-4 max-w-4xl -mt-16">
          <AdSenseSlot slot="TOP_BANNER" />
        </div>

        {/* ═══════════════════════════════════════════════
            2. CÓMO FUNCIONA
            ═══════════════════════════════════════════════ */}
        <section id="como-funciona" className="container mx-auto px-4 max-w-6xl" aria-labelledby="como-funciona-heading">
          <div className="text-center mb-14">
            <span className="section-label">Empieza en minutos</span>
            <h2 id="como-funciona-heading" className="text-3xl md:text-5xl font-extrabold mb-4">Cómo funciona</h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Encontrar y usar los mejores GPTs nunca fue tan sencillo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { icon: <Compass size={28} className="text-blue-500" />, step: '01', title: 'Explora el directorio', desc: 'Navega por Productividad, Entretenimiento y Actualidad. Filtra por rol, nivel y tiempo estimado.' },
              { icon: <Star size={28} className="text-yellow-500" />, step: '02', title: 'Elige tu GPT', desc: 'Lee la descripción, beneficios y nivel requerido. Todos están verificados y actualizados semanalmente.' },
              { icon: <MessageSquare size={28} className="text-purple-500" />, step: '03', title: 'Pega el enlace', desc: 'Copia el enlace del GPT y pégalo en el cuadro de la parte superior. Haz clic en "Abrir GPT".' },
              { icon: <Zap size={28} className="text-green-500" />, step: '04', title: 'Empieza a producir', desc: 'ChatGPT se abre directamente en tu cuenta. Sin intermediarios, sin datos almacenados.' },
            ].map((item, i) => (
              <div key={i} className="card p-6 flex flex-col items-center text-center gap-4 relative">
                <div className="absolute -top-3 left-4 text-xs font-extrabold text-[var(--muted)] opacity-30 text-4xl leading-none select-none">{item.step}</div>
                <div className="p-3 rounded-2xl bg-[var(--background)] shadow-sm">{item.icon}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            3. DIRECTORIO / CATEGORÍAS
            ═══════════════════════════════════════════════ */}
        <section id="directorio" className="container mx-auto px-4 max-w-6xl" aria-labelledby="directorio-heading">
          <div className="text-center mb-14">
            <span className="section-label">Directorio curado</span>
            <h2 id="directorio-heading" className="text-3xl md:text-5xl font-extrabold mb-4">Explora por categoría</h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Todos los GPTs organizados por área de uso. Cada card incluye nivel, tiempo estimado y beneficio clave.
            </p>
          </div>
          <div id="categorias">
            <CategoryTabs />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            4. QUÉ ES LA IA — CENTRO DE APRENDIZAJE
            ═══════════════════════════════════════════════ */}
        <section id="que-es-ia" className="bg-slate-50 dark:bg-slate-900/50 border-y border-[var(--border)] py-24 section-below-fold" aria-labelledby="ia-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <span className="section-label">Centro de Aprendizaje</span>
              <h2 id="ia-heading" className="text-3xl md:text-5xl font-extrabold mb-4">¿Qué es la Inteligencia Artificial?</h2>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                Entiende cómo funciona, qué tipos existen, dónde la usas ya y qué mitos debes desechar.
              </p>
            </div>
            <IaLearningTabs />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            5. IA Y PRODUCTIVIDAD — GUÍAS
            ═══════════════════════════════════════════════ */}
        <section id="guias" className="container mx-auto px-4 max-w-6xl" aria-labelledby="prod-heading">
          <div id="productividad">
            <div className="text-center mb-14">
              <span className="section-label">IA y Productividad</span>
              <h2 id="prod-heading" className="text-3xl md:text-5xl font-extrabold mb-4">Trabaja más en menos tiempo</h2>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                Frameworks, casos reales, plantillas y ejercicios para que la IA multiplique tu rendimiento.
              </p>
            </div>

            {/* Framework */}
            <div className="card p-8 md:p-10 mb-12 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/10 border-blue-100 dark:border-blue-800/40">
              <h3 className="text-2xl font-extrabold mb-2">El framework DPEAIA</h3>
              <p className="text-[var(--muted)] mb-8">El flujo de trabajo probado para obtener el máximo de cualquier herramienta de IA.</p>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                {[
                  { step: 'Define', icon: <Target size={20} />, desc: 'Clarifica el objetivo exacto antes de pedir nada.' },
                  { step: 'Pide', icon: <MessageSquare size={20} />, desc: 'Usa un prompt estructurado: rol + contexto + tarea + formato.' },
                  { step: 'Evalúa', icon: <BarChart3 size={20} />, desc: 'Revisa el output críticamente. ¿Es preciso? ¿Es útil?' },
                  { step: 'Itera', icon: <Repeat2 size={20} />, desc: 'Refina el prompt hasta obtener el resultado deseado.' },
                  { step: 'Automatiza', icon: <Zap size={20} />, desc: 'Convierte el flujo que funciona en un proceso repetible.' },
                ].map((f, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center text-center gap-2 relative">
                    {i < 4 && (
                      <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                        <ChevronRight size={16} className="text-[var(--muted)]" />
                      </div>
                    )}
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                      {f.icon}
                    </div>
                    <p className="font-bold text-sm">{f.step}</p>
                    <p className="text-xs text-[var(--muted)] leading-relaxed max-w-full sm:max-w-[120px]">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Casos antes/después */}
            <div className="mb-12">
              <h3 className="text-2xl font-extrabold mb-2">Mini-casos: antes vs. después con IA</h3>
              <p className="text-[var(--muted)] text-sm mb-6">Resultados reales sin promesas absolutas. Los ahorros dependen del tipo de tarea y experiencia con IA.</p>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { role: 'Freelance de Marketing', before: '4 horas redactando una propuesta comercial desde cero.', after: 'Primera versión en 15 min con IA, revisión en 20 min. Ratio de cierre improved.', metric: '~75% menos tiempo en drafts' },
                  { role: 'Soporte al cliente', before: 'Responder 30 tickets/día con copy-paste manual y errores de tono.', after: 'Plantillas de respuesta generadas con IA, revisadas y adaptadas. Tono consistente.', metric: '~50% más tickets/día' },
                  { role: 'Estudiante universitario', before: '3 horas resumiendo un paper de 40 páginas para un examen.', after: 'Resumen estructurado en 5 min con la IA + flashcards listas para estudiar en 15 min.', metric: '~85% menos tiempo en síntesis' },
                ].map((c, i) => (
                  <div key={i} className="card p-5 space-y-3">
                    <span className="badge badge-blue">{c.role}</span>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-semibold text-red-500 text-xs mb-0.5">❌ Antes</p>
                        <p className="text-[var(--muted)] leading-relaxed">{c.before}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-green-600 text-xs mb-0.5">✅ Después</p>
                        <p className="text-[var(--muted)] leading-relaxed">{c.after}</p>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-blue-600 dark:text-blue-400 pt-1 border-t border-[var(--border)]">📊 {c.metric}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt Templates */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold mb-1">Plantillas de prompts — Copia y usa</h3>
                  <p className="text-[var(--muted)] text-sm">12 prompts listos para copiar, organizados por rol profesional. Personaliza los campos en [MAYÚSCULAS].</p>
                </div>
              </div>
              <PromptTemplates />
            </div>

            {/* Mini-curso + Reto 7 días */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Mini-curso interactivo */}
              <div className="card p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit size={22} className="text-indigo-500 shrink-0" />
                  <h3 className="text-lg sm:text-xl font-extrabold leading-tight">Mini-curso IA (5 lecciones)</h3>
                </div>
                <p className="text-xs text-[var(--muted)] mb-4">Toca cualquier lección para abrirla.</p>
                <MiniCursoInteractivo />
              </div>

              {/* Reto 7 días */}
              <div className="card p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy size={22} className="text-yellow-500 shrink-0" />
                  <h3 className="text-lg sm:text-xl font-extrabold leading-tight">Reto 7 días con IA</h3>
                </div>
                <div className="space-y-3">
                  {reto7Dias.map((item, i) => (
                    <div key={i} className="flex flex-col xs:flex-row gap-2 xs:gap-3 xs:items-start p-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)]">
                      <span className="inline-flex items-center self-start shrink-0 text-xs font-extrabold px-2.5 py-1 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800 whitespace-nowrap">
                        {item.day}
                      </span>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{item.task}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* Checklist por rol */}
            <div className="card p-8 mb-12">
              <h3 className="text-xl font-extrabold mb-2">Checklist de adopción IA por rol</h3>
              <p className="text-[var(--muted)] text-sm mb-6">Las 5 acciones más impactantes que debería hacer cada perfil profesional esta semana con IA.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { role: 'Estudiante', tasks: ['Resumir PDFs de examen', 'Crear flashcards', 'Corregir redacciones', 'Pedir explicaciones en 3 niveles', 'Simular exámenes orales'] },
                  { role: 'Freelance', tasks: ['Redactar propuestas comerciales', 'Responder emails profesionales', 'Crear contenido para RRSS', 'Hacer briefings de proyectos', 'Generar presupuestos'] },
                  { role: 'Marketing', tasks: ['Copy de anuncios A/B', 'Análisis de competencia', 'SEO de artículos', 'Storytelling de marca', 'Calendario editorial'] },
                  { role: 'Programador', tasks: ['Depuración de bugs', 'Code review asistido', 'Documentación automática', 'Unit tests', 'Refactoring de código legacy'] },
                  { role: 'RRHH', tasks: ['Redactar descripciones de puesto', 'Preguntas de entrevista por competencias', 'Onboarding materials', 'Feedback constructivo', 'Políticas de empresa'] },
                  { role: 'Ventas', tasks: ['Email de seguimiento post-reunión', 'Análisis de objeciones', 'Pitch personalizado por sector', 'Scripts de llamada en frío', 'Propuesta de valor por perfil'] },
                ].map((r, i) => (
                  <div key={i} className="space-y-2">
                    <p className="font-bold text-sm flex items-center gap-1.5"><span className="badge badge-blue">{r.role}</span></p>
                    <ul className="space-y-1.5">
                      {r.tasks.map((t, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                          <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            6. CASOS DE USO (legacy section preserved)
            ═══════════════════════════════════════════════ */}
        <section id="casos-uso" className="container mx-auto px-4 max-w-6xl" aria-labelledby="casosuso-heading">
          <div className="text-center mb-14">
            <span className="section-label">Casos de uso</span>
            <h2 id="casosuso-heading" className="text-3xl md:text-5xl font-extrabold mb-4">Útil para todos los perfiles</h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">La IA ya no es exclusiva de los ingenieros. Hay un GPT perfecto para cada problema.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <FileText size={24} className="text-blue-500" />, profile: 'Freelancers', desc: 'Redacta correos, propuestas y gestiona tu marketing personal como si tuvieras todo un equipo creativo.' },
              { icon: <BarChart3 size={24} className="text-green-500" />, profile: 'PyMEs', desc: 'Optimiza soporte, RRHH y análisis financiero con asistentes IA entrenados en tus procesos de negocio.' },
              { icon: <BookOpen size={24} className="text-purple-500" />, profile: 'Estudiantes', desc: 'Resume PDFs, crea tarjetas de estudio, prepara exámenes y recibe tutoría paso a paso en cualquier asignatura.' },
              { icon: <BrainCircuit size={24} className="text-orange-500" />, profile: 'Desarrolladores', desc: 'GPTs especializados para código, depuración de errores, arquitectura de software y generación de tests.' },
            ].map((item, i) => (
              <div key={i} className="card p-6 flex flex-col gap-4">
                <div className="p-3 rounded-xl bg-[var(--background)] w-fit">{item.icon}</div>
                <h3 className="font-extrabold text-lg">{item.profile}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            7. CALCULADORA DE AHORRO DE TIEMPO
            ═══════════════════════════════════════════════ */}
        <section className="bg-slate-50 dark:bg-slate-900/50 border-y border-[var(--border)] py-24 section-below-fold" aria-labelledby="calc-heading">
          <div id="calculadora" className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="section-label">Herramienta interactiva</span>
              <h2 id="calc-heading" className="text-3xl md:text-5xl font-extrabold mb-4">Calculadora de ahorro con IA</h2>
              <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
                Descubre cuánto tiempo (y dinero) podrías recuperar cada semana adoptando IA en tus tareas habituales.
              </p>
            </div>
            <TimeCalculator />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            8. QUIZ / DIAGNÓSTICO
            ═══════════════════════════════════════════════ */}
        <section id="quiz" className="container mx-auto px-4 max-w-5xl" aria-labelledby="quiz-heading">
          <div className="text-center mb-12">
            <span className="section-label">Diagnóstico personalizado</span>
            <h2 id="quiz-heading" className="text-3xl md:text-5xl font-extrabold mb-4">¿Qué nivel de adopción IA tienes?</h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              10 preguntas rápidas para conocer tu nivel actual y recibir recomendaciones personalizadas.
            </p>
          </div>
          <IaQuiz />
        </section>

        {/* ═══════════════════════════════════════════════
            9. EQUIPO DUNAJHON
            ═══════════════════════════════════════════════ */}
        <section id="equipo" className="bg-slate-50 dark:bg-slate-900/50 border-y border-[var(--border)] py-24" aria-labelledby="equipo-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              {/* Badge — bigger than section-label */}
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '9999px',
                  border: '1.5px solid rgba(99,102,241,0.35)',
                  background: 'rgba(99,102,241,0.07)',
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                }}
              >
                Quiénes somos
              </span>
              <div className="flex flex-col items-center gap-4 mb-2">
                {/* Brain icon — circular */}
                <div style={{
                  width: '148px',
                  height: '148px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2.5px solid rgba(6,182,212,0.45)',
                  boxShadow: '0 0 28px rgba(6,182,212,0.30), 0 0 8px rgba(34,197,94,0.20)',
                  flexShrink: 0,
                }}>
                  <Image
                    src="/brain-icon.png"
                    alt="DUNAJHON GPT CONNECT IA — ícono corporativo"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 id="equipo-heading" className="text-4xl md:text-6xl font-extrabold break-words hyphens-auto">
                  <span className="gradient-text">DUNAJHON</span>{' '}
                  <span>GPT CONNECT IA</span>
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-7 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={20} className="text-blue-600" />
                  <h3 className="font-extrabold text-lg">Nuestra misión</h3>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">
                  Hacer que la Inteligencia Artificial sea accesible, comprensible y útil para todos los hispanohablantes. Sin tecnicismos innecesarios, sin barreras de entrada.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  Creemos que la IA no es una amenaza ni una varita mágica: es una herramienta que, bien usada, puede multiplicar las capacidades de cualquier persona.
                </p>
              </div>
              <div className="card p-7 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={20} className="text-green-600" />
                  <h3 className="font-extrabold text-lg">Criterios de calidad</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    'Todo GPT listado es probado manualmente antes de publicarse.',
                    'Actualizamos el directorio semanalmente. Los GPTs desactualizados se retiran.',
                    'No aceptamos GPTs que prometan resultados milagrosos o engañosos.',
                    'El contenido educativo es revisado para evitar desinformación sobre IA.',
                    'Nos comprometemos con el uso responsable y ético de la IA.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-7 space-y-3 md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={20} className="text-yellow-500" />
                  <h3 className="font-extrabold text-lg">Nuestros valores</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { v: 'Transparencia', d: 'Somos claros sobre cómo nos financiamos (publicidad), qué hacemos con tus datos (nada sin consentimiento) y cómo seleccionamos los GPTs.' },
                    { v: 'Accesibilidad', d: 'Acceso gratuito a todo el contenido. Sin muros de pago, sin suscripciones obligatorias para lo esencial.' },
                    { v: 'Responsabilidad', d: 'Promovemos el uso crítico y responsable de la IA: verificar fuentes, proteger la privacidad y entender las limitaciones de los modelos.' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="font-bold text-sm mb-1">{item.v}</p>
                      <p className="text-xs text-[var(--muted)] leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            10. FAQ
            ═══════════════════════════════════════════════ */}
        <section id="faq" className="container mx-auto px-4 max-w-4xl" aria-labelledby="faq-heading">
          <div className="text-center mb-12">
            <span className="section-label">Dudas frecuentes</span>
            <h2 id="faq-heading" className="text-3xl md:text-5xl font-extrabold mb-4">Preguntas Frecuentes</h2>
            <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">Todo lo que necesitas saber antes de empezar.</p>
          </div>
          <div className="card p-6 md:p-8">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* ── BOTTOM BANNER ── */}
        <div className="container mx-auto px-4 max-w-4xl">
          <AdSenseSlot slot="BOTTOM_BANNER" />
        </div>

        {/* ═══════════════════════════════════════════════
            11. CTA FINAL
            ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-24" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 -z-10" />
          {/* Decorative blobs */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 max-w-4xl text-center text-white relative">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-6">
              Empieza hoy — es gratis
            </span>
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              ¿Listo para transformar<br className="hidden md:block" /> tu flujo de trabajo?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Únete a profesionales que ya están recuperando horas cada semana con IA. Sin registro, sin tarjeta, sin compromisos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#directorio" className="px-8 py-4 bg-white text-blue-700 font-extrabold rounded-xl hover:bg-blue-50 transition-colors shadow-xl shadow-black/10 text-base">
                <Compass size={18} className="inline mr-2" />Explorar el Directorio
              </Link>
              <Link href="#guias" className="px-8 py-4 bg-white/10 border border-white/25 text-white font-bold rounded-xl hover:bg-white/20 transition-colors text-base">
                <BookOpen size={18} className="inline mr-2" />Ver Guías
              </Link>
            </div>
            <p className="mt-8 text-blue-200 text-sm">
              O pega el enlace de tu GPT directamente arriba y ábrelo en un clic.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
