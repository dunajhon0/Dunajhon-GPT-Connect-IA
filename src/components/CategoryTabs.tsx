'use client';

import { useState } from 'react';
import { Zap, Gamepad2, Newspaper, ArrowRight, Clock } from 'lucide-react';

// ── Category placeholder URLs — replace with real URLs when ready ──
const CATEGORY_URLS = {
    productividad: 'https://example.com/productividad',
    entretenimiento: 'https://example.com/entretenimiento',
    actualidad: 'https://example.com/actualidad',
};

const categories = [
    {
        id: 'productividad',
        label: 'Productividad',
        icon: <Zap size={18} />,
        gradient: 'from-blue-600 to-sky-500',
        bgClass: 'cat-prod',
        borderClass: 'border-cat-prod',
        badgeClass: 'badge-blue',
        gradientText: 'gradient-text',
        tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
        url: CATEGORY_URLS.productividad,
        tagline: 'Automatiza, delega y escala tu trabajo con IA.',
        cards: [
            { title: 'Redactor de Emails Pro', desc: 'Responde correos difíciles con el tono exacto y sin perder tiempo.', benefit: 'Ahorra hasta 45 min/día en bandeja de entrada.', level: 'Principiante', time: '2 min', tag: 'Email' },
            { title: 'Resumen Ejecutivo Instant', desc: 'Pega cualquier documento y obtén un resumen ejecutivo listo para presentar a dirección.', benefit: 'Transforma 40 páginas en 5 puntos clave.', level: 'Principiante', time: '1 min', tag: 'Documentos' },
            { title: 'Planificador Semanal IA', desc: 'Organiza tus objetivos semanales con bloques de tiempo y prioridades automatizadas.', benefit: 'Planificación estructurada en menos de 3 minutos.', level: 'Intermedio', time: '3 min', tag: 'Organización' },
            { title: 'Generador de Tareas Delegables', desc: 'Convierte tu lista de tareas en instrucciones claras para delegar a tu equipo o a la IA.', benefit: 'Reduce la ambigüedad y acelera la ejecución.', level: 'Intermedio', time: '5 min', tag: 'Gestión' },
            { title: 'Analista de Reuniones', desc: 'Convierte las notas de una reunión en actas estructuradas con compromisos y próximos pasos.', benefit: 'Nunca pierdas un acuerdo importante de nuevo.', level: 'Principiante', time: '2 min', tag: 'Reuniones' },
            { title: 'Optimizador de Procesos', desc: 'Describe un proceso manual y obtén un flujo optimizado con sugerencias de automatización.', benefit: 'Identifica cuellos de botella en minutos.', level: 'Avanzado', time: '10 min', tag: 'Automatización' },
        ],
    },
    {
        id: 'entretenimiento',
        label: 'Entretenimiento',
        icon: <Gamepad2 size={18} />,
        gradient: 'from-violet-600 to-pink-500',
        bgClass: 'cat-ent',
        borderClass: 'border-cat-ent',
        badgeClass: 'badge-purple',
        gradientText: 'gradient-text-purple',
        tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
        url: CATEGORY_URLS.entretenimiento,
        tagline: 'Crea, imagina y diviértete con el poder de la IA.',
        cards: [
            { title: 'Creador de Historias', desc: 'Co-escribe novelas, cuentos o guiones con un asistente que conoce todos los géneros literarios.', benefit: 'Supera el bloqueo del escritor en segundos.', level: 'Principiante', time: '5 min', tag: 'Escritura' },
            { title: 'Generador de Mundos RPG', desc: 'Crea universos completos: lore, razas, mapas y misiones para tus partidas de rol.', benefit: 'Horas de trabajo creativo en minutos.', level: 'Avanzado', time: '15 min', tag: 'Juegos' },
            { title: 'Analista de Películas', desc: 'Discute análisis profundos, teorías y significados ocultos de cualquier película o serie.', benefit: 'Enriquece tu experiencia cinéfila.', level: 'Principiante', time: '5 min', tag: 'Cine' },
            { title: 'Compositor de Letras', desc: 'Escribe canciones en cualquier género musical: pop, rap, flamenco, rock alternativo.', benefit: 'De idea a canción en menos de 10 minutos.', level: 'Principiante', time: '8 min', tag: 'Música' },
            { title: 'Generador de Humor/Memes', desc: 'Crea chistes, memes textuales y contenido humorístico adaptado a tu audiencia.', benefit: 'Contenido creativo listo para redes sociales.', level: 'Principiante', time: '2 min', tag: 'Redes sociales' },
            { title: 'Guía de Videojuegos IA', desc: 'Recibe estrategias, walkthroughs y consejos detallados para cualquier videojuego.', benefit: 'Supera cualquier nivel sin spoilers innecesarios.', level: 'Principiante', time: '3 min', tag: 'Gaming' },
        ],
    },
    {
        id: 'actualidad',
        label: 'Actualidad',
        icon: <Newspaper size={18} />,
        gradient: 'from-orange-500 to-yellow-400',
        bgClass: 'cat-news',
        borderClass: 'border-cat-news',
        badgeClass: 'badge-orange',
        gradientText: 'gradient-text-orange',
        tagColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
        url: CATEGORY_URLS.actualidad,
        tagline: 'Comprende el mundo, analiza noticias y forma tu criterio.',
        cards: [
            { title: 'Analizador de Noticias', desc: 'Analiza artículos de noticias identificando sesgos, fuentes y contexto histórico.', benefit: 'Información más completa y menos manipulada.', level: 'Intermedio', time: '5 min', tag: 'Análisis' },
            { title: 'Explicador de Economía', desc: 'Traduce indicadores económicos complejos (IPC, PIB, tipos de interés) a lenguaje claro.', benefit: 'Entiende la economía sin ser economista.', level: 'Principiante', time: '3 min', tag: 'Economía' },
            { title: 'Monitor de Tendencias', desc: 'Identifica tendencias emergentes en tecnología, cultura y negocios con análisis predictivo.', benefit: 'Anticípate a los cambios del mercado.', level: 'Avanzado', time: '10 min', tag: 'Tendencias' },
            { title: 'Debatidor Crítico', desc: 'Explora múltiples perspectivas de temas polémicos para construir una visión más completa.', benefit: 'Enriquece tu pensamiento crítico.', level: 'Intermedio', time: '8 min', tag: 'Análisis' },
            { title: 'Resumen de Prensa', desc: 'Obtén un resumen equilibrado de las noticias más relevantes del día en 5 puntos clave.', benefit: 'Informado en 2 minutos cada mañana.', level: 'Principiante', time: '2 min', tag: 'Noticias' },
            { title: 'Experto en Geopolítica', desc: 'Comprende conflictos internacionales, relaciones diplomáticas y sus implicaciones globales.', benefit: 'Contexto geopolítico sin simplificaciones.', level: 'Avanzado', time: '10 min', tag: 'Geopolítica' },
        ],
    },
];

const levelColors: Record<string, string> = {
    Principiante: 'badge-green',
    Intermedio: 'badge-blue',
    Avanzado: 'badge-purple',
};

export default function CategoryTabs() {
    const [active, setActive] = useState(0);
    const cat = categories[active];

    return (
        <div>
            {/* Tab bar */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-1" role="tablist">
                {categories.map((c, i) => (
                    <button
                        key={c.id}
                        role="tab"
                        aria-selected={active === i}
                        aria-controls={`panel-${c.id}`}
                        id={`tab-${c.id}`}
                        onClick={() => setActive(i)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap border ${active === i
                            ? `bg-gradient-to-r ${c.gradient} text-white border-transparent shadow-lg`
                            : 'border-[var(--border)] text-[var(--muted)] hover:border-blue-400 hover:text-[var(--foreground)]'
                            }`}
                    >
                        {c.icon}
                        {c.label}
                    </button>
                ))}
            </div>

            {/* Panel */}
            <div
                id={`panel-${cat.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${cat.id}`}
                className={`${cat.bgClass} border ${cat.borderClass} rounded-3xl p-6 md:p-8`}
            >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <p className={`text-2xl font-extrabold ${cat.gradientText} mb-1`}>{cat.label}</p>
                        <p className="text-[var(--muted)] text-sm">{cat.tagline}</p>
                    </div>
                    <a
                        href={cat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2.5 px-5 shrink-0"
                    >
                        Ver contenido <ArrowRight size={16} />
                    </a>
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.cards.map((card, i) => (
                        <div key={i} className="card p-5 flex flex-col gap-3">
                            <div className="flex items-start justify-between gap-2">
                                <span className={`badge ${cat.badgeClass}`}>{card.tag}</span>
                                <span className={`badge ${levelColors[card.level] || 'badge-slate'}`}>{card.level}</span>
                            </div>
                            <h3 className="font-bold text-base leading-tight">{card.title}</h3>
                            <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">{card.desc}</p>
                            <div className="pt-2 border-t border-[var(--border)] space-y-1">
                                <p className="text-xs font-semibold text-green-600 dark:text-green-400">✓ {card.benefit}</p>
                                <div className="flex items-center gap-1 text-xs text-[var(--muted)]">
                                    <Clock size={12} />
                                    <span>{card.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
