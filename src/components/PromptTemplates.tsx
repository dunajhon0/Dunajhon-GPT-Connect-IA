'use client';

import { useState } from 'react';
import { Copy, Check, Eye } from 'lucide-react';

const prompts = [
    {
        role: 'Freelance / Marketing',
        tag: 'badge-blue',
        title: 'Propuesta comercial irresistible',
        template: 'Actúa como un copywriter experto en ventas B2B. Redacta una propuesta comercial para [SERVICIO] dirigida a [TIPO DE CLIENTE]. Incluye: problema que resuelvo, solución, beneficios clave, prueba social (inventada de ejemplo) y llamada a la acción clara. Tono: profesional pero cercano.',
    },
    {
        role: 'Estudiante',
        tag: 'badge-green',
        title: 'Explicación simplificada de concepto',
        template: 'Explícame [CONCEPTO] como si tuviera 15 años. Usa analogías del mundo real, evita tecnicismos y dame 3 ejemplos prácticos. Al final, hazme 3 preguntas para comprobar que lo he entendido.',
    },
    {
        role: 'Programador',
        tag: 'badge-purple',
        title: 'Code review y mejoras',
        template: 'Revisa este código [LENGUAJE]: [CÓDIGO]. Identifica: 1) bugs o errores potenciales, 2) problemas de rendimiento, 3) malas prácticas, 4) sugerencias de refactor. Explica cada punto con ejemplos concretos del código proporcionado.',
    },
    {
        role: 'RRHH',
        tag: 'badge-orange',
        title: 'Oferta de empleo atractiva',
        template: 'Redacta una oferta de empleo para el puesto de [CARGO] en una empresa de [SECTOR]. La empresa tiene [CULTURA]. Incluye responsabilidades, requisitos (duros y blandos), qué ofrecemos y un párrafo inspirador sobre el impacto del rol. Tono inclusivo y motivador.',
    },
    {
        role: 'Ventas',
        tag: 'badge-blue',
        title: 'Email de seguimiento post-reunión',
        template: 'Escribe un email de seguimiento tras una reunión de ventas con [NOMBRE_CONTACTO] de [EMPRESA]. Resume los puntos clave acordados, próximos pasos y reitera el valor diferencial de [MI_PROPUESTA]. Máximo 150 palabras. Tono: cálido y profesional.',
    },
    {
        role: 'Soporte / Atención al cliente',
        tag: 'badge-green',
        title: 'Respuesta empática a queja',
        template: 'Actúa como agente de soporte experto. El cliente ha dicho: "[QUEJA_DEL_CLIENTE]". Redacta una respuesta que: 1) reconozca el problema sin defensas, 2) se disculpe genuinamente, 3) explique qué haremos para resolverlo, 4) ofrezca compensación si es apropiado. Tono: empático y solución-orientado.',
    },
    {
        role: 'Emprendedor',
        tag: 'badge-orange',
        title: 'Análisis DAFO rápido',
        template: 'Realiza un análisis DAFO de [MI_IDEA_DE_NEGOCIO]. Para cada cuadrante proporciona 4 puntos específicos y accionables. Al final, dame las 3 estrategias más importantes que emergen del análisis cruzado.',
    },
    {
        role: 'Docente',
        tag: 'badge-purple',
        title: 'Plan de clase interactivo',
        template: 'Diseña una clase de 45 minutos sobre [TEMA] para alumnos de [EDAD/NIVEL]. Estructura: hook inicial (5 min), contenido principal con actividades (25 min), trabajo en grupo (10 min), cierre y evaluación (5 min). Incluye recursos necesarios y cómo adaptar para diferentes estilos de aprendizaje.',
    },
    {
        role: 'Finanzas personales',
        tag: 'badge-green',
        title: 'Plan de ahorro mensual',
        template: 'Soy [EDAD] años, gano [INGRESOS]€/mes netos y mis gastos fijos son [GASTOS]€/mes. Quiero ahorrar para [OBJETIVO] en [PLAZO]. Crea un plan de ahorro paso a paso con: presupuesto simplificado, hábitos de gasto a eliminar, método de ahorro recomendado y cómo automatizarlo.',
    },
    {
        role: 'Content creator',
        tag: 'badge-purple',
        title: 'Calendario editorial 30 días',
        template: 'Crea un calendario editorial de 30 días para [RED_SOCIAL] sobre el tema [NICHO]. Para cada semana proporciona: 3 posts de valor educativo, 2 post de engagement (pregunta/debate), 1 post de conversión. Incluye el hook de cada post y el formato recomendado.',
    },
    {
        role: 'Manager / Liderazgo',
        tag: 'badge-orange',
        title: 'Feedback constructivo difícil',
        template: 'Necesito dar feedback constructivo a [PERFIL_EMPLEADO] sobre [PROBLEMA_CONCRETO]. Redacta el guión de la conversación usando el método SBI (Situación-Comportamiento-Impacto). Incluye cómo abrir, comunicar el problema, escuchar, acordar mejoras y cerrar de forma positiva.',
    },
    {
        role: 'Investigador',
        tag: 'badge-blue',
        title: 'Resumen de investigación',
        template: 'Resume este texto académico/técnico en: 1) Resumen ejecutivo (2-3 frases), 2) Metodología usada, 3) Hallazgos principales (5 bullets), 4) Limitaciones reconocidas, 5) Implicaciones prácticas. Adapta la complejidad del lenguaje para una audiencia no especialista.',
    },
];

export default function PromptTemplates() {
    const [copied, setCopied] = useState<number | null>(null);
    const [expanded, setExpanded] = useState<number | null>(null);

    const copy = async (text: string, i: number) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(i);
            setTimeout(() => setCopied(null), 2000);
        } catch {
            // Fallback para contextos no seguros (HTTP)
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            setCopied(i);
            setTimeout(() => setCopied(null), 2000);
        }
    };

    return (
        /*
          Grid responsive:
          - xs (<640px): 1 columna — portrait, todo el ancho
          - sm–xl: 2 columnas
          - xl+: 3 columnas
          
          Las prompt-card ya tienen width:100% por defecto.
          Los botones de acción usan min-height 44px (target táctil mínimo).
        */
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {prompts.map((p, i) => (
                <div key={i} className="prompt-card flex flex-col gap-3">
                    <div className="flex items-start gap-2">
                        <span className={`badge ${p.tag} shrink-0`}>{p.role}</span>
                    </div>
                    <h4 className="font-bold text-sm leading-snug">{p.title}</h4>

                    {/* Preview del template — expandible */}
                    <div className={`overflow-hidden transition-all duration-300 ${expanded === i ? 'max-h-96' : 'max-h-16'}`}>
                        <p className="text-[var(--muted)] text-xs leading-relaxed font-mono bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
                            {p.template}
                        </p>
                    </div>

                    {/* Botones de acción — mínimo 44px alto (táctil WCAG) */}
                    <div className="flex items-center gap-2 mt-auto pt-2">
                        <button
                            onClick={() => setExpanded(expanded === i ? null : i)}
                            className="copy-btn flex-1 justify-center min-h-[44px]"
                            aria-label={expanded === i ? 'Ocultar prompt' : 'Ver prompt completo'}
                        >
                            <Eye size={14} />
                            {expanded === i ? 'Ocultar' : 'Ver ejemplo'}
                        </button>
                        <button
                            onClick={() => copy(p.template, i)}
                            className={`copy-btn flex-1 justify-center min-h-[44px] ${copied === i ? 'copied' : ''}`}
                            aria-label="Copiar prompt al portapapeles"
                        >
                            {copied === i ? <Check size={14} /> : <Copy size={14} />}
                            {copied === i ? '¡Copiado!' : 'Copiar'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
