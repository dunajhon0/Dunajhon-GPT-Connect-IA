'use client';

import { useState } from 'react';
import { ChevronRight, RotateCcw, Award } from 'lucide-react';

const questions = [
    {
        q: '¿Con qué frecuencia usas herramientas de IA en tu trabajo?',
        options: [
            { text: 'Nunca o casi nunca', score: 0 },
            { text: 'Alguna vez, experimentando', score: 1 },
            { text: 'Regularmente (varias veces por semana)', score: 2 },
            { text: 'A diario como parte de mi flujo de trabajo', score: 3 },
        ],
    },
    {
        q: '¿Has automatizado alguna tarea repetitiva con IA?',
        options: [
            { text: 'No sé cómo hacerlo', score: 0 },
            { text: 'He intentado pero sin resultados claros', score: 1 },
            { text: 'Sí, algunas tareas básicas', score: 2 },
            { text: 'Sí, tengo flujos de trabajo automatizados', score: 3 },
        ],
    },
    {
        q: '¿Conoces la diferencia entre ChatGPT, un GPT personalizado y una API?',
        options: [
            { text: 'No tengo claro qué son', score: 0 },
            { text: 'Sé usar ChatGPT básicamente', score: 1 },
            { text: 'Conozco ChatGPT y he usado algún GPT', score: 2 },
            { text: 'Trabajo con APIs y/o creo mis propios GPTs', score: 3 },
        ],
    },
    {
        q: '¿Sabes escribir prompts efectivos para obtener buenos resultados?',
        options: [
            { text: 'Escribo lo primero que se me ocurre', score: 0 },
            { text: 'He leído algo sobre ello', score: 1 },
            { text: 'Uso técnicas básicas (rol, contexto, formato)', score: 2 },
            { text: 'Domino prompt engineering avanzado', score: 3 },
        ],
    },
    {
        q: '¿Has medido el tiempo u horas que te ahorra la IA?',
        options: [
            { text: 'No, no lo uso suficiente', score: 0 },
            { text: 'No lo he medido, pero noto algo', score: 1 },
            { text: 'Sí, informalmente', score: 2 },
            { text: 'Sí, tengo datos y lo optimizo continuamente', score: 3 },
        ],
    },
    {
        q: '¿Cómo abordarías un nuevo proyecto con IA?',
        options: [
            { text: 'No sé por dónde empezar', score: 0 },
            { text: 'Busco tutoriales en YouTube/Google', score: 1 },
            { text: 'Tengo un proceso básico: define, pide, evalúa', score: 2 },
            { text: 'Tengo metodología propia y la escalo', score: 3 },
        ],
    },
    {
        q: '¿Compartes conocimientos de IA con tu equipo o entorno?',
        options: [
            { text: 'No, yo tampoco sé mucho', score: 0 },
            { text: 'Ocasionalmente, cuando me preguntan', score: 1 },
            { text: 'Sí, recomiendo herramientas regularmente', score: 2 },
            { text: 'Soy referente de IA en mi entorno/empresa', score: 3 },
        ],
    },
    {
        q: '¿Tienes en cuenta los riesgos de la IA (alucinaciones, privacidad, sesgos)?',
        options: [
            { text: 'No, confío en todo lo que dice la IA', score: 0 },
            { text: 'He oído hablar de ello pero no lo aplico', score: 1 },
            { text: 'Verifico información crítica y tengo cuidado', score: 2 },
            { text: 'Aplico buenas prácticas y las enseño a otros', score: 3 },
        ],
    },
    {
        q: '¿Cuántas herramientas de IA diferentes usas regularmente?',
        options: [
            { text: 'Ninguna todavía', score: 0 },
            { text: '1 (solo ChatGPT u otra básica)', score: 1 },
            { text: '2–5 herramientas especializadas', score: 2 },
            { text: 'Más de 5, con stack definido', score: 3 },
        ],
    },
    {
        q: '¿Tienes un plan para mejorar tu adopción de IA en los próximos meses?',
        options: [
            { text: 'No, no lo he pensado', score: 0 },
            { text: 'Me gustaría pero no sé cómo', score: 1 },
            { text: 'Tengo algunos objetivos informales', score: 2 },
            { text: 'Sí, con hitos, recursos y métricas claras', score: 3 },
        ],
    },
];

const results = [
    {
        min: 0, max: 9,
        level: 'Explorador',
        emoji: '🌱',
        color: 'text-green-600',
        border: 'border-green-500',
        desc: 'Estás dando tus primeros pasos con la IA. Es el mejor momento para empezar: las herramientas están más accesibles que nunca.',
        recs: [
            'Empieza con ChatGPT gratuito estas semanas',
            'Practica con nuestras plantillas de prompts para principiantes',
            'Sigue el Reto de 7 días de esta página',
            'Reserva 15 min/día para experimentar con una herramienta nueva',
        ],
    },
    {
        min: 10, max: 19,
        level: 'Practicante',
        emoji: '⚡',
        color: 'text-blue-600',
        border: 'border-blue-500',
        desc: 'Ya tienes experiencia básica. Ahora es el momento de sistematizar y conseguir resultados más consistentes.',
        recs: [
            'Define tu flujo de trabajo "Define → Pide → Evalúa → Itera"',
            'Prueba 2–3 GPTs especializados de nuestro directorio',
            'Aprende técnicas básicas de prompt engineering',
            'Mide el tiempo que te ahorras esta semana con IA',
        ],
    },
    {
        min: 20, max: 24,
        level: 'Integrador',
        emoji: '🚀',
        color: 'text-purple-600',
        border: 'border-purple-500',
        desc: 'Tienes una adopción sólida. Tu reto es escalar: automatizar más, integrar APIs y convertirte en referente.',
        recs: [
            'Explora automatizaciones con Make/Zapier + IA',
            'Crea tus propios GPTs personalizados para tu equipo',
            'Forma a compañeros/clientes en tu metodología',
            'Mide el ROI de tus flujos con IA regularmente',
        ],
    },
    {
        min: 25, max: 30,
        level: 'Líder IA',
        emoji: '🏆',
        color: 'text-orange-500',
        border: 'border-orange-500',
        desc: '¡Excelente nivel! Eres un adoptador avanzado. Tu próximo paso es crear valor para otros y explorar la frontera tecnológica.',
        recs: [
            'Considera crear contenido sobre IA (newsletter, comunidad)',
            'Experimenta con modelos locales y APIs avanzadas',
            'Diseña una estrategia de IA para tu organización',
            'Comparte tu metodología: los expertos enseñan para aprender más',
        ],
    },
];

export default function IaQuiz() {
    const [answers, setAnswers] = useState<number[]>(Array(10).fill(-1));
    const [current, setCurrent] = useState(0);
    const [done, setDone] = useState(false);

    // Properly calculate score
    const score = answers.reduce((sum, answerIdx, qIdx) => {
        if (answerIdx >= 0) return sum + questions[qIdx].options[answerIdx].score;
        return sum;
    }, 0);

    const result = results.find(r => score >= r.min && score <= r.max) ?? results[0];

    const select = (optIdx: number) => {
        const next = [...answers];
        next[current] = optIdx;
        setAnswers(next);
        if (current < questions.length - 1) {
            setTimeout(() => setCurrent(current + 1), 400);
        }
    };

    const finish = () => {
        if (answers.every(a => a >= 0)) setDone(true);
    };

    const reset = () => {
        setAnswers(Array(10).fill(-1));
        setCurrent(0);
        setDone(false);
    };

    const progress = ((answers.filter(a => a >= 0).length) / questions.length) * 100;

    if (done) {
        return (
            <div className={`card p-5 sm:p-8 border-2 ${result.border} text-center max-w-2xl mx-auto`}>
                <div className="text-5xl mb-3">{result.emoji}</div>
                <span className="badge badge-blue mb-3">Tu nivel de adopción IA</span>
                <h3 className={`text-2xl sm:text-3xl font-extrabold mb-3 ${result.color}`}>{result.level}</h3>
                <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed mb-5">{result.desc}</p>
                <div className="text-left mb-5">
                    <p className="font-bold text-sm mb-3">📋 Recomendaciones para ti:</p>
                    <ul className="space-y-2">
                        {result.recs.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                                <span className="text-blue-600 font-bold mt-0.5 shrink-0">→</span>
                                <span>{r}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-[var(--muted)] mb-5">
                    <Award size={16} className={result.color} />
                    <span>Puntuación: <strong className={result.color}>{score}/30</strong></span>
                </div>
                {/* w-auto: override de la regla global btn-secondary=w-full en xs */}
                <button onClick={reset} className="btn-secondary gap-2 !w-auto inline-flex">
                    <RotateCcw size={16} /> Repetir diagnóstico
                </button>
            </div>
        );
    }

    const q = questions[current];
    const answered = answers.filter(a => a >= 0).length;

    return (
        <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-6">
                <div className="flex justify-between text-sm text-[var(--muted)] mb-2">
                    <span>Pregunta {current + 1} de {questions.length}</span>
                    <span>{answered}/{questions.length} respondidas</span>
                </div>
                <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Question */}
            <div className="card p-6 mb-4">
                <p className="font-bold text-lg leading-snug mb-6">{q.q}</p>
                <div className="space-y-3">
                    {q.options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => select(i)}
                            className={`quiz-option ${answers[current] === i ? 'selected' : ''}`}
                        >
                            {opt.text}
                        </button>
                    ))}
                </div>
            </div>

            {/* Nav — !w-auto + inline-flex sobrescriben la regla global btn-*=w-full en xs */}
            <div className="flex justify-between items-center gap-3">
                <button
                    onClick={() => current > 0 && setCurrent(current - 1)}
                    disabled={current === 0}
                    className="btn-secondary text-sm py-2.5 px-4 disabled:opacity-40 !w-auto inline-flex min-h-[44px]"
                >
                    Anterior
                </button>
                {current < questions.length - 1 ? (
                    <button
                        onClick={() => answers[current] >= 0 && setCurrent(current + 1)}
                        disabled={answers[current] < 0}
                        className="btn-primary text-sm py-2.5 px-5 disabled:opacity-40 !w-auto inline-flex min-h-[44px]"
                    >
                        Siguiente <ChevronRight size={16} />
                    </button>
                ) : (
                    <button
                        onClick={finish}
                        disabled={!answers.every(a => a >= 0)}
                        className="btn-primary text-sm py-2.5 px-5 disabled:opacity-40 !w-auto inline-flex min-h-[44px]"
                    >
                        Ver resultado <Award size={16} />
                    </button>
                )}
            </div>
        </div>
    );
}
