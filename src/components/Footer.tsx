'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[var(--background)] border-t border-[var(--border)] pt-14 pb-8 mt-16"
            style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/*
                  Grid responsive:
                  - xs: 1 columna (todo apilado)
                  - sm: 2 columnas (brand + secciones / brand + legal)
                  - md: 4 columnas (layout completo desktop)
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10">

                    {/* Brand — ocupa 2 cols en md */}
                    <div className="sm:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                overflow: 'hidden', flexShrink: 0,
                                border: '2px solid rgba(6,182,212,0.40)',
                                boxShadow: '0 0 14px rgba(6,182,212,0.25)',
                            }}>
                                <Image
                                    src="/brain-icon.png"
                                    alt="DUNAJHON GPT CONNECT IA"
                                    width={512} height={512}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="leading-tight">
                                <p className="font-extrabold text-sm tracking-tight">DUNAJHON GPT CONNECT IA</p>
                                <p className="text-xs text-[var(--muted)]">Conecta tu trabajo con la IA</p>
                            </div>
                        </Link>
                        <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
                            Directorio curado de GPTs, guías de productividad con IA y herramientas interactivas — todo en español, sin registro ni barreras.
                        </p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                            Proyecto respaldado por publicidad (AdSense)
                        </div>
                    </div>

                    {/* Secciones */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 uppercase tracking-wider text-[var(--muted)]">Secciones</h3>
                        <ul className="space-y-2.5 text-sm">
                            {[
                                { href: '/#directorio', label: 'Directorio de GPTs' },
                                { href: '/#categorias', label: 'Categorías' },
                                { href: '/#que-es-ia', label: '¿Qué es la IA?' },
                                { href: '/#productividad', label: 'IA y Productividad' },
                                { href: '/#faq', label: 'Preguntas Frecuentes' },
                                { href: '/contacto', label: 'Contacto' },
                            ].map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-[var(--muted)] hover:text-blue-600 transition-colors min-h-[44px] inline-flex items-center"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 uppercase tracking-wider text-[var(--muted)]">Legal</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/privacidad" className="text-[var(--muted)] hover:text-blue-600 transition-colors min-h-[44px] inline-flex items-center">Política de Privacidad</Link></li>
                            <li><Link href="/cookies" className="text-[var(--muted)] hover:text-blue-600 transition-colors min-h-[44px] inline-flex items-center">Política de Cookies</Link></li>
                            <li><Link href="/aviso-legal" className="text-[var(--muted)] hover:text-blue-600 transition-colors min-h-[44px] inline-flex items-center">Aviso Legal</Link></li>
                            <li>
                                <button
                                    className="text-[var(--muted)] hover:text-blue-600 transition-colors text-left min-h-[44px] inline-flex items-center"
                                    onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                                >
                                    Configurar Cookies
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Transparencia */}
                <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-900/15 border border-blue-100 dark:border-blue-900/40">
                    <h4 className="font-bold text-sm mb-2 text-blue-700 dark:text-blue-300">Transparencia publicitaria</h4>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                        Esta web se financia mediante publicidad gestionada por <strong>Google AdSense</strong>. Los anuncios son seleccionados automáticamente y pueden utilizar cookies de terceros. Nunca colocamos anuncios en zonas engañosas ni incentivamos clics. Puedes gestionar tus preferencias de cookies en cualquier momento.
                    </p>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[var(--border)] pt-5 flex flex-col gap-2 text-xs text-[var(--muted)] text-center md:flex-row md:justify-between md:text-left">
                    <p>© {new Date().getFullYear()} DUNAJHON GPT CONNECT IA. Todos los derechos reservados.</p>
                    <p>Acceso gratuito financiado con publicidad. No somos responsables de los servicios de terceros enlazados.</p>
                </div>
            </div>
        </footer>
    );
}
