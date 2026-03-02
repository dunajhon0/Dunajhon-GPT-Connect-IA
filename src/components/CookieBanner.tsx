'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie } from 'lucide-react';

interface CookiePrefs {
    analytics: boolean;
    advertising: boolean;
    personalization: boolean;
}

const defaultPrefs: CookiePrefs = { analytics: true, advertising: true, personalization: false };

export default function CookieBanner() {
    const [show, setShow] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);

    useEffect(() => {
        // requestAnimationFrame evita setState síncrono en body de effect (react-hooks/set-state-in-effect)
        const raf = requestAnimationFrame(() => {
            if (!localStorage.getItem('cookie-consent')) setShow(true);
        });
        const handleOpen = () => { setShow(true); setShowPanel(true); };
        window.addEventListener('openCookieSettings', handleOpen);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('openCookieSettings', handleOpen);
        };
    }, []);

    const save = (consent: 'accepted' | 'rejected' | 'custom', p?: CookiePrefs) => {
        localStorage.setItem('cookie-consent', consent);
        if (p) localStorage.setItem('cookie-prefs', JSON.stringify(p));
        setShow(false);
        setShowPanel(false);
        window.dispatchEvent(new Event('cookieConsentAccepted'));
    };

    const toggle = (key: keyof CookiePrefs) =>
        setPrefs(p => ({ ...p, [key]: !p[key] }));

    if (!show) return null;

    return (
        /*
          Banner fijo bottom-0 con padding que respeta safe-area iOS.
          En xs: banner compacto vertical. En sm+: layout horizontal con botones en fila.
        */
        <div
            className="fixed bottom-0 left-0 w-full z-[100] px-3 py-3 sm:px-6 sm:py-5"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
            <div className="max-w-4xl mx-auto">

                {/* ── Panel de configuración (aparece encima del banner) ── */}
                {showPanel && (
                    <div
                        className="mb-3 bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl p-5"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Configuración de cookies"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-base font-bold flex items-center gap-2">
                                <Cookie size={18} className="text-blue-600 shrink-0" /> Configurar Cookies
                            </h2>
                            <button
                                onClick={() => setShowPanel(false)}
                                aria-label="Cerrar panel de cookies"
                                className="p-2 rounded-lg hover:bg-[var(--background)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-2.5 mb-5">
                            <CookieRow
                                title="Necesarias"
                                desc="Imprescindibles para el funcionamiento básico. Siempre activas."
                                active={true}
                                disabled
                                onToggle={() => { }}
                            />
                            <CookieRow
                                title="Analítica"
                                desc="Analizan el uso del sitio de forma anónima para mejorarlo."
                                active={prefs.analytics}
                                onToggle={() => toggle('analytics')}
                            />
                            <CookieRow
                                title="Publicidad"
                                desc="Muestran anuncios relevantes (AdSense). Financian el servicio gratuito."
                                active={prefs.advertising}
                                onToggle={() => toggle('advertising')}
                            />
                            <CookieRow
                                title="Personalización"
                                desc="Recuerdan tus preferencias para una experiencia personalizada."
                                active={prefs.personalization}
                                onToggle={() => toggle('personalization')}
                            />
                        </div>

                        {/* Botones del panel — 1 col en xs, 3 cols en sm */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <button
                                onClick={() => save('rejected')}
                                className="px-4 py-3 rounded-xl border border-[var(--border)] font-semibold text-sm hover:border-blue-400 transition-colors min-h-[44px]"
                            >
                                Rechazar todas
                            </button>
                            <button
                                onClick={() => save('custom', prefs)}
                                className="px-4 py-3 rounded-xl border border-blue-500 text-blue-600 font-semibold text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors min-h-[44px]"
                            >
                                Guardar configuración
                            </button>
                            <button
                                onClick={() => save('accepted', { analytics: true, advertising: true, personalization: true })}
                                className="px-4 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors min-h-[44px]"
                            >
                                Aceptar todo
                            </button>
                        </div>
                    </div>
                )}

                {/* ── Banner principal ── */}
                <div className="glass rounded-2xl shadow-2xl border border-[var(--glass-border)] p-4 sm:p-5">
                    {/*
                      Layout:
                      - xs: texto arriba, botones abajo en fila (3 botones compactos)
                      - md+: texto izquierda, botones derecha en fila
                    */}
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                        <div className="flex-1 min-w-0">
                            <p className="font-bold mb-1 flex items-center gap-2 text-sm">
                                <Cookie size={16} className="text-blue-600 shrink-0" />
                                Tu privacidad importa
                            </p>
                            <p className="text-xs text-[var(--muted)] leading-relaxed">
                                Usamos cookies para analítica y publicidad (AdSense).{' '}
                                <button
                                    onClick={() => setShowPanel(!showPanel)}
                                    className="underline text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Configurar preferencias
                                </button>
                                {' '}·{' '}
                                <Link href="/cookies" className="underline hover:text-blue-500">Más info</Link>
                            </p>
                        </div>

                        {/* Botones — en xs: fila completa con flex; en md: shrink-0 */}
                        <div className="flex items-center gap-2 shrink-0">
                            <button
                                onClick={() => save('rejected')}
                                className="flex-1 md:flex-none px-3 py-2.5 text-xs font-semibold border border-[var(--border)] rounded-xl hover:border-blue-400 transition-colors min-h-[44px] whitespace-nowrap"
                            >
                                Rechazar
                            </button>
                            <button
                                onClick={() => setShowPanel(!showPanel)}
                                className="flex-1 md:flex-none px-3 py-2.5 text-xs font-semibold border border-blue-500 text-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors min-h-[44px] whitespace-nowrap"
                            >
                                Configurar
                            </button>
                            <button
                                onClick={() => save('accepted', { analytics: true, advertising: true, personalization: true })}
                                className="flex-1 md:flex-none px-3 py-2.5 text-xs font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors min-h-[44px] whitespace-nowrap"
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CookieRow({
    title, desc, active, disabled, onToggle,
}: {
    title: string; desc: string; active: boolean; disabled?: boolean; onToggle: () => void;
}) {
    return (
        <div className="flex items-start gap-3 p-3 rounded-xl border border-[var(--border)]">
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">
                    {title}
                    {disabled && <span className="ml-2 text-xs text-[var(--muted)] font-normal">(siempre activas)</span>}
                </p>
                <p className="text-xs text-[var(--muted)] mt-0.5 leading-relaxed">{desc}</p>
            </div>
            <button
                role="switch"
                aria-checked={active}
                aria-label={`${active ? 'Desactivar' : 'Activar'} cookies ${title}`}
                disabled={disabled}
                onClick={onToggle}
                className={`toggle-track shrink-0 ${active ? 'on' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} mt-0.5`}
            >
                <span className="toggle-thumb" />
            </button>
        </div>
    );
}
