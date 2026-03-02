'use client';

import { useState, useEffect } from 'react';
import { X, ChevronRight, BookOpen, Zap, Target, Shield, BrainCircuit } from 'lucide-react';

const lessons = [
    {
        num: 1,
        icon: <BrainCircuit size={22} />,
        title: 'Fundamentos de IA',
        subtitle: 'Qué es, cómo funciona y por qué importa ahora mismo.',
        color: 'from-blue-500 to-cyan-400',
        shadowColor: 'shadow-blue-500/25',
        borderColor: 'border-blue-500/30',
        content: {
            intro: 'La Inteligencia Artificial (IA) es la capacidad de las máquinas de realizar tareas que normalmente requieren inteligencia humana: razonar, aprender, crear.',
            points: [
                { label: '¿Qué es exactamente?', text: 'Algoritmos que aprenden patrones a partir de datos masivos y generan respuestas, imágenes, código o texto de forma autónoma.' },
                { label: 'Cómo funciona ChatGPT', text: 'Es un modelo de lenguaje grande (LLM) entrenado en billones de palabras. Predice la siguiente palabra más probable y en esa predicción encadena respuestas coherentes.' },
                { label: 'Por qué importa ahora', text: 'GPT-4 superó el examen MIR. GitHub Copilot acelera la codificación hasta un 55%. La productividad no es una promesa, es un dato medible.' },
                { label: 'Lo que NO es IA', text: 'No piensa, no siente, no entiende. Genera texto plausible. Sigue siendo el humano quien decide, verifica y actúa.' },
            ],
            tip: '💡 Comienza con 15 minutos al día: pregúntale a ChatGPT que te explique cualquier tema de tu trabajo como si tuvieras 12 años.',
        },
    },
    {
        num: 2,
        icon: <Target size={22} />,
        title: 'Cómo escribir prompts efectivos',
        subtitle: 'Técnicas de estructura: rol, contexto, tarea, formato y restricciones.',
        color: 'from-violet-500 to-purple-400',
        shadowColor: 'shadow-violet-500/25',
        borderColor: 'border-violet-500/30',
        content: {
            intro: 'Un prompt es la instrucción que le das a la IA. La diferencia entre un resultado mediocre y uno brillante está casi siempre en el prompt, no en el modelo.',
            points: [
                { label: 'La estructura RCTFR', text: 'Rol (actúa como) + Contexto (situación) + Tarea (qué hacer) + Formato (cómo entregar) + Restricciones (qué evitar). Cuanto más completo, más preciso el resultado.' },
                { label: 'Ejemplo real: malo vs. bueno', text: 'Malo: "Escríbeme un email". Bueno: "Actúa como CMO de una SaaS B2B. Redacta un email de 150 palabras para recuperar un cliente que canceló hace 30 días. Tono empático, sin descuentos. Incluye CTA clara."' },
                { label: 'Iteración inteligente', text: 'Si el resultado no es ideal, no reescribas el prompt desde cero. Añade: "Ahora hazlo más corto / más formal / enfocado en el beneficio X". La IA mantiene el contexto de la conversación.' },
                { label: 'Prompt chaining', text: 'Para tareas complejas, divide en pasos: Paso 1: "Define el esquema". Paso 2: "Desarrolla la sección A". Paso 3: "Revisa el tono". Cada prompt construye sobre el anterior.' },
            ],
            tip: '💡 Guarda tus mejores prompts en un documento. En 30 días tendrás un arsenal que ningún competidor tiene.',
        },
    },
    {
        num: 3,
        icon: <Zap size={22} />,
        title: 'GPTs especializados: cómo elegir',
        subtitle: 'Criterios de selección, cómo evaluarlos y cuándo crear el tuyo propio.',
        color: 'from-amber-500 to-orange-400',
        shadowColor: 'shadow-amber-500/25',
        borderColor: 'border-amber-500/30',
        content: {
            intro: 'Los GPTs personalizados son como contratar a un especialista que ya conoce tu flujo de trabajo, tu terminología y tus objetivos específicos.',
            points: [
                { label: 'Cuándo usar un GPT especializado', text: 'Cuando la tarea requiere un contexto específico (legal, médico, técnico) que un prompt genérico no maneja bien. También cuando la misma tarea se repite y quieres un flujo consistente.' },
                { label: 'Criterios de evaluación', text: '1) ¿El output es preciso en tu dominio? 2) ¿La interfaz de conversación es clara? 3) ¿Tiene instrucciones del sistema o solo usa prompts genéricos? 4) ¿El creador lo actualiza regularmente?' },
                { label: 'Cómo crear el tuyo (básico)', text: 'En ChatGPT Plus → Explorar → Crear un GPT. Define: Nombre + Descripción + Instrucciones del sistema (su "personalidad" y restricciones) + Conocimiento (documentos PDF que "sabe"). Sin código.' },
                { label: 'Cuándo NO usar un GPT', text: 'Cuando la tarea es puntual y genérica. Un buen prompt en ChatGPT estándar es más ágil que buscar, probar y cambiar entre GPTs constantemente.' },
            ],
            tip: '💡 Empieza usando GPTs del directorio. Cuando encuentres uno que uses 3+ veces por semana, esa es la señal de que merece crear tu versión personalizada.',
        },
    },
    {
        num: 4,
        icon: <BookOpen size={22} />,
        title: 'Automatización básica con IA',
        subtitle: 'Conecta IA con herramientas como Notion, Gmail, Excel o Make.',
        color: 'from-emerald-500 to-teal-400',
        shadowColor: 'shadow-emerald-500/25',
        borderColor: 'border-emerald-500/30',
        content: {
            intro: 'La automatización es donde la IA pasa de ser una herramienta útil a ser un multiplicador de capacidades. Combinarla con tus apps existentes elimina el trabajo mecánico.',
            points: [
                { label: 'El stack básico gratuito', text: 'ChatGPT + Zapier (plan free) o Make (free tier) + Google Sheets/Gmail. Con estos tres puedes automatizar correos, recibir resúmenes o clasificar datos sin una línea de código.' },
                { label: 'Flujo real: email → resumen → Notion', text: 'Zapier detecta emails de newsletters → Claude/ChatGPT extrae los 3 puntos clave → lo guarda en una base de Notion con tags automáticos. Tiempo setup: 45 minutos. Tiempo ahorrado: 1h/día.' },
                { label: 'Siguiente nivel: integración con API', text: 'La API de OpenAI te da acceso programático. Precio: ~$0.002 por cada 1.000 tokens (palabras). Para uso moderado personal: menos de 5€/mes. Para equipos: escalable.' },
                { label: 'Precauciones de privacidad', text: 'Nunca automatices el paso de datos personales (DNI, emails de clientes, datos médicos) a modelos externos sin consentimiento explícito y base legal según RGPD.' },
            ],
            tip: '💡 Tu primer flujo de automatización: configura un resumen semanal de tus emails más importantes. Hazlo en Zapier con ChatGPT. Es tu prueba de concepto más rápida.',
        },
    },
    {
        num: 5,
        icon: <Shield size={22} />,
        title: 'IA con criterio: ética y límites',
        subtitle: 'Verificación, sesgos, privacidad y uso responsable.',
        color: 'from-rose-500 to-pink-400',
        shadowColor: 'shadow-rose-500/25',
        borderColor: 'border-rose-500/30',
        content: {
            intro: 'Dominar la IA no es solo saber extraer el máximo rendimiento. Es también saber cuándo no confiar en ella y cómo protegerte y proteger a otros.',
            points: [
                { label: 'Alucinaciones: el mayor riesgo', text: 'Los LLMs fabrican información con total confianza. Fechas, citas, estadísticas, nombres propios y datos legales/médicos SIEMPRE deben verificarse con fuentes primarias. Nunca copies-pegas sin revisar.' },
                { label: 'Sesgos de entrenamiento', text: 'Los modelos reflejan sesgos de sus datos. En decisiones de RRHH, evaluación de crédito, o salud: usa la IA como herramienta de apoyo, nunca como juez final. Los humanos deciden.' },
                { label: 'Privacidad y RGPD', text: 'No introduzcas datos personales de clientes, empleados o pacientes en herramientas de IA públicas sin base legal. Para uso empresarial, evalúa APIs con acuerdos de procesamiento de datos (DPA).' },
                { label: 'Uso académico y propiedad intelectual', text: 'En trabajos académicos, señala el uso de IA. Para contenido generado (imágenes, textos), los derechos son complejos y cambian por jurisdicción. No asumas que el output es "tuyo" automáticamente.' },
            ],
            tip: '💡 La regla de oro: si el error en esta tarea tiene consecuencias graves para personas reales, la IA nunca puede ser el punto de decisión final. El humano cierra el loop.',
        },
    },
];

export default function MiniCursoInteractivo() {
    const [open, setOpen] = useState<number | null>(null);
    const activeLesson = open !== null ? lessons[open] : null;

    /* ── Bloquear scroll del body cuando el drawer está abierto ── */
    useEffect(() => {
        if (activeLesson) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [activeLesson]);

    /* ── Cerrar con ESC ── */
    useEffect(() => {
        if (!activeLesson) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(null);
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [activeLesson]);

    return (
        <div className="relative">
            {/* ── Lista de lecciones ── */}
            <div className="space-y-3">
                {lessons.map((lesson, i) => (
                    <button
                        key={i}
                        onClick={() => setOpen(i)}
                        className={`
              w-full flex items-center gap-3 p-4 rounded-2xl border text-left
              transition-colors duration-150 cursor-pointer group
              bg-white dark:bg-slate-900/60
              active:scale-[0.99]
              ${open === i
                                ? `border-transparent shadow-lg ${lesson.shadowColor} ring-2 ring-offset-0`
                                : 'border-[var(--border)] hover:border-transparent hover:shadow-md'
                            }
            `}
                        aria-expanded={open === i}
                        aria-label={`Abrir lección ${lesson.num}: ${lesson.title}`}
                    >
                        {/* Badge numérico */}
                        <div className={`
              shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${lesson.color}
              flex items-center justify-center text-white font-extrabold text-base shadow-md
            `}>
                            {lesson.num}
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm leading-snug">{lesson.title}</p>
                            <p className="text-xs text-[var(--muted)] mt-0.5 line-clamp-2 leading-snug">{lesson.subtitle}</p>
                        </div>

                        <ChevronRight
                            size={15}
                            className={`shrink-0 text-[var(--muted)] transition-transform duration-150 ${open === i ? 'rotate-90' : ''}`}
                        />
                    </button>
                ))}
            </div>

            {/* ── Modal/Drawer — bottom-sheet en móvil XS (<640px), side-drawer en sm+ ── */}
            {activeLesson && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        onClick={() => setOpen(null)}
                        aria-hidden="true"
                    />

                    {/*
                        Estrategia responsive:
                        • xs (< sm): bottom-sheet ocupando casi toda la pantalla (portrait y landscape)
                          inset-x-0 bottom-0 rounded-t-3xl max-h-[90dvh] — se ajusta al 90% del viewport height dinámico
                        • sm+: side-drawer derecho, max-w-lg
                    */}
                    <div
                        className={`
              fixed z-50 flex flex-col
              bg-white dark:bg-slate-950
              border-[var(--border)]
              shadow-2xl

              /* Mobile: bottom-sheet */
              inset-x-0 bottom-0 rounded-t-3xl
              max-h-[90dvh] max-h-[90vh]
              border-t

              /* SM+: side-drawer */
              sm:inset-y-0 sm:right-0 sm:bottom-auto sm:left-auto
              sm:w-full sm:max-w-lg
              sm:rounded-t-none sm:rounded-l-2xl sm:border-t-0 sm:border-l

              animate-slide-in-right
            `}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="lesson-drawer-title"
                    >
                        {/* Drag handle — solo visible en móvil como indicador de bottom-sheet */}
                        <div className="flex justify-center pt-3 pb-1 sm:hidden" aria-hidden="true">
                            <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                        </div>

                        {/* Header con gradiente */}
                        <div className={`px-5 py-4 bg-gradient-to-r ${activeLesson.color} relative overflow-hidden shrink-0`}>
                            <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
                            <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />

                            <div className="relative flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <p className="text-white/80 text-xs font-semibold mb-1">Lección {activeLesson.num} de 5</p>
                                    <h2
                                        id="lesson-drawer-title"
                                        className="text-white text-lg font-extrabold leading-tight"
                                    >
                                        {activeLesson.title}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setOpen(null)}
                                    className="shrink-0 p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 active:bg-white/40 transition-colors mt-0.5"
                                    aria-label="Cerrar lección"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Contenido scrolleable */}
                        <div className="flex-1 overflow-y-auto overscroll-contain p-5 space-y-4">
                            <p className="text-[var(--foreground)] leading-relaxed font-medium text-sm sm:text-base">
                                {activeLesson.content.intro}
                            </p>

                            <div className="space-y-3">
                                {activeLesson.content.points.map((point, j) => (
                                    <div key={j} className={`p-4 rounded-xl border ${activeLesson.borderColor} bg-slate-50 dark:bg-slate-900/50`}>
                                        <p className="font-bold text-sm mb-1.5">{point.label}</p>
                                        <p className="text-[var(--muted)] text-sm leading-relaxed">{point.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tip */}
                            <div className={`p-4 rounded-xl bg-gradient-to-r ${activeLesson.color}`}>
                                <p className="text-sm font-semibold text-white leading-relaxed">{activeLesson.content.tip}</p>
                            </div>
                        </div>

                        {/* Footer navegación */}
                        <div className="shrink-0 px-5 py-4 border-t border-[var(--border)] flex items-center justify-between gap-3 bg-inherit">
                            <button
                                onClick={() => setOpen(Math.max(0, open! - 1))}
                                disabled={open === 0}
                                className="flex-1 sm:flex-none text-center py-2.5 px-4 rounded-xl border border-[var(--border)] text-sm font-semibold
                                           bg-[var(--surface)] text-[var(--foreground)]
                                           disabled:opacity-30 disabled:cursor-not-allowed
                                           hover:border-[rgba(99,102,241,0.4)] transition-colors"
                            >
                                ← Anterior
                            </button>
                            <span className="text-xs text-[var(--muted)] shrink-0">{open! + 1} / {lessons.length}</span>
                            <button
                                onClick={() => open! < lessons.length - 1 ? setOpen(open! + 1) : setOpen(null)}
                                className="flex-1 sm:flex-none text-center py-2.5 px-4 rounded-xl text-sm font-bold text-white
                                           bg-gradient-to-r from-indigo-500 to-cyan-500
                                           hover:brightness-110 active:brightness-95 transition-all"
                            >
                                {open! < lessons.length - 1 ? 'Siguiente →' : 'Finalizar ✓'}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
