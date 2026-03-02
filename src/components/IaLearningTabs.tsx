'use client';

import { useState } from 'react';
import { Brain, Cpu, Lightbulb, AlertTriangle, BookOpen } from 'lucide-react';

const tabs = [
    {
        id: 'definicion',
        label: 'Definición',
        icon: <Brain size={16} />,
        content: (
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-bold mb-3">¿Qué es la Inteligencia Artificial?</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                        La <strong>Inteligencia Artificial (IA)</strong> es la rama de la informática que desarrolla sistemas capaces de realizar tareas que, hasta ahora, requerían inteligencia humana: comprender lenguaje, reconocer imágenes, tomar decisiones o resolver problemas complejos.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { label: '¿Cómo aprende?', text: 'A través de datos. Cuantos más ejemplos ve, mejor aprende a predecir, clasificar o generar respuestas.' },
                        { label: '¿Es magia?', text: 'No. Es estadística avanzada y matemáticas. Los modelos aprenden patrones en datos masivos.' },
                        { label: '¿Es consciente?', text: 'No. La IA actual (IA estrecha) es muy buena en tareas específicas, pero no tiene conciencia ni emociones.' },
                        { label: '¿Sustituirá a los humanos?', text: 'Complementa capacidades humanas. Automatiza lo repetitivo y libera tiempo para lo creativo y estratégico.' },
                    ].map((item, i) => (
                        <div key={i} className="card p-4">
                            <p className="font-bold text-sm mb-1">{item.label}</p>
                            <p className="text-[var(--muted)] text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 'tipos',
        label: 'Tipos de IA',
        icon: <Cpu size={16} />,
        content: (
            <div className="space-y-5">
                <h3 className="text-xl font-bold">Principales tipos de IA</h3>
                {[
                    {
                        type: 'Machine Learning (ML)',
                        color: 'badge-blue',
                        desc: 'Algoritmos que aprenden de datos sin ser programados explícitamente. Se mejoran solos con la experiencia.',
                        examples: ['Filtros de spam', 'Recomendaciones de Netflix', 'Predicción del tiempo'],
                    },
                    {
                        type: 'Deep Learning (DL)',
                        color: 'badge-purple',
                        desc: 'Redes neuronales artificiales con múltiples capas que imitan (muy vagamente) el cerebro humano. Excelente para imágenes, audio y texto.',
                        examples: ['Reconocimiento facial', 'Transcripción de voz', 'Traducción automática'],
                    },
                    {
                        type: 'IA Generativa',
                        color: 'badge-orange',
                        desc: 'Modelos capaces de crear contenido nuevo: texto, imágenes, música, código. ChatGPT es un ejemplo.',
                        examples: ['ChatGPT / GPT-4', 'DALL-E / Midjourney', 'GitHub Copilot'],
                    },
                ].map((item, i) => (
                    <div key={i} className="card p-5">
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`badge ${item.color}`}>{item.type}</span>
                        </div>
                        <p className="text-[var(--muted)] text-sm leading-relaxed mb-3">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {item.examples.map((ex, j) => (
                                <span key={j} className="text-xs px-2 py-1 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--muted)]">{ex}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: 'ejemplos',
        label: 'Ejemplos',
        icon: <Lightbulb size={16} />,
        content: (
            <div className="space-y-5">
                <h3 className="text-xl font-bold">La IA en tu vida cotidiana</h3>
                <p className="text-[var(--muted)] text-sm">Ya usas IA sin saberlo. Aquí algunos ejemplos concretos:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { emoji: '📱', title: 'Keyboard predictivo', desc: 'Tu móvil predice la próxima palabra mientras escribes usando ML.' },
                        { emoji: '🎵', title: 'Playlists automáticas', desc: 'Spotify y YouTube aprenden tus gustos y te recomiendan música nueva.' },
                        { emoji: '🛡️', title: 'Detección de fraude', desc: 'Tu banco analiza miles de transacciones/segundo para detectar usos sospechosos.' },
                        { emoji: '🧭', title: 'GPS inteligente', desc: 'Google Maps predice el tráfico y calcula la ruta más rápida en tiempo real.' },
                        { emoji: '📸', title: 'Face ID', desc: 'Tu teléfono te reconoce en milisegundos usando redes neuronales convolucionales.' },
                        { emoji: '✉️', title: 'Filtro de spam', desc: 'Gmail filtra miles de correos basura sin que tengas que hacer nada.' },
                    ].map((ex, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 card">
                            <span className="text-2xl shrink-0">{ex.emoji}</span>
                            <div>
                                <p className="font-bold text-sm">{ex.title}</p>
                                <p className="text-[var(--muted)] text-sm leading-relaxed">{ex.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 'mitos',
        label: 'Mitos',
        icon: <AlertTriangle size={16} />,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold">Mitos más comunes sobre la IA</h3>
                {[
                    { myth: '"La IA siempre tiene razón"', reality: 'Falso. Los modelos "alucinan": inventan datos con aparente confianza. Siempre verifica información crítica con fuentes primarias.' },
                    { myth: '"La IA es objetiva"', reality: 'Falso. Los modelos aprenden de datos creados por humanos y heredan sus sesgos. Hay sesgos de género, raza y cultura presentes en muchos sistemas.' },
                    { myth: '"La IA va a quitarme el trabajo"', reality: 'Simplificación. La IA automatiza tareas, no trabajos completos. Los perfiles que adoptan IA son más productivos y empleables.' },
                    { myth: '"La IA entiende todo"', reality: 'Falso. Los modelos generan texto estadísticamente plausible, pero no "entienden" en el sentido humano. No tienen intenciones ni conciencia.' },
                    { myth: '"La IA es solo para técnicos"', reality: 'Falso. ChatGPT, Midjourney y cientos de herramientas están diseñadas para no-técnicos. El conocimiento es la mejor inversión.' },
                ].map((item, i) => (
                    <div key={i} className="card p-4">
                        <p className="font-bold text-sm text-red-600 dark:text-red-400 mb-1">❌ {item.myth}</p>
                        <p className="text-[var(--muted)] text-sm leading-relaxed">✅ {item.reality}</p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: 'glosario',
        label: 'Glosario',
        icon: <BookOpen size={16} />,
        content: (
            <div className="space-y-4">
                <h3 className="text-xl font-bold">Glosario rápido de IA</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        { term: 'LLM', def: 'Large Language Model. Modelo de IA entrenado en texto masivo. Ej: GPT-4.' },
                        { term: 'Prompt', def: 'La instrucción que le das a la IA. El arte de redactarlos bien se llama "prompt engineering".' },
                        { term: 'Token', def: 'Fragmento de texto que procesa el modelo (~0.75 palabras). Los límites de contexto se miden en tokens.' },
                        { term: 'Alucinación', def: 'Cuando la IA inventa datos con confianza. Siempre verifica información crítica.' },
                        { term: 'GPT', def: 'Generative Pre-trained Transformer. Arquitectura de modelo que usa ChatGPT y muchos otros.' },
                        { term: 'Fine-tuning', def: 'Entrenamiento adicional de un modelo base para especializarlo en una tarea concreta.' },
                        { term: 'Embedding', def: 'Representación matemática de texto que captura su significado semántico.' },
                        { term: 'RAG', def: 'Retrieval-Augmented Generation. Permite a la IA buscar en documentos propios antes de responder.' },
                    ].map((item, i) => (
                        <div key={i} className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                            <p className="font-mono font-bold text-sm text-blue-600 dark:text-blue-400 mb-1">{item.term}</p>
                            <p className="text-[var(--muted)] text-xs leading-relaxed">{item.def}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

export default function IaLearningTabs() {
    const [active, setActive] = useState(0);

    return (
        <div>
            {/*
              Tab list responsive:
              - En xs/sm: scroll horizontal suave con scrollbar oculto (ya existe en .tab-list)
              - Los botones usan solo el icono en xs (<360px aprox) mostrando label en sm+  
              - flex-wrap NO porque nos interesa el scroll horizontal para tabs (más natural)
              - min-width en cada tab-btn para que sean tocables en móvil
            */}
            <div
                className="tab-list mb-6"
                role="tablist"
                aria-label="Centro de aprendizaje IA"
            >
                {tabs.map((tab, i) => (
                    <button
                        key={tab.id}
                        role="tab"
                        aria-selected={active === i}
                        aria-controls={`ia-panel-${tab.id}`}
                        id={`ia-tab-${tab.id}`}
                        onClick={() => setActive(i)}
                        className={`tab-btn ${active === i ? 'active' : ''} flex items-center gap-1.5 min-w-[44px]`}
                    >
                        {/* Icono siempre visible */}
                        <span aria-hidden="true">{tab.icon}</span>
                        {/* Label — visible en todos los tamaños, el scroll del tab-list lo gestiona */}
                        <span className="whitespace-nowrap">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Panel */}
            <div
                id={`ia-panel-${tabs[active].id}`}
                role="tabpanel"
                aria-labelledby={`ia-tab-${tabs[active].id}`}
                className="animate-in fade-in duration-300"
            >
                {tabs[active].content}
            </div>
        </div>
    );
}
