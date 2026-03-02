'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

/* ─── Nav items (labels exactos — NO cambiar per prompt) ─── */
const navItems = [
    { name: 'Directorio', href: '/#directorio' },
    { name: 'Guías', href: '/#guias' },
    { name: 'Casos de Uso', href: '/#casos-uso' },
    { name: 'Quiz', href: '/#quiz' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const hamburgerRef = useRef<HTMLButtonElement>(null);

    /* ── Scroll → glass effect ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── ScrollSpy ── */
    const updateActive = useCallback(() => {
        const ids = ['directorio', 'guias', 'casos-uso', 'categorias', 'que-es-ia', 'productividad', 'quiz', 'equipo', 'faq'];
        let current = '';
        for (const id of ids) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 120) current = id;
        }
        setActiveSection(current);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', updateActive, { passive: true });
        // Usar requestAnimationFrame en lugar de llamada síncrona directa
        // para cumplir react-hooks/set-state-in-effect (no setState en body de effect)
        const raf = requestAnimationFrame(updateActive);
        return () => {
            window.removeEventListener('scroll', updateActive);
            cancelAnimationFrame(raf);
        };
    }, [updateActive]);

    /* ── Cerrar drawer con ESC ── */
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                hamburgerRef.current?.focus(); // devolver foco al botón hamburger
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    /* ── Bloquear scroll del body cuando el drawer está abierto (móvil) ── */
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const isActive = (href: string) => activeSection === href.replace('/#', '');

    return (
        <>
            {/* ── Skip-to-content (WCAG AA) ── */}
            <a href="#main-content" className="skip-to-content">
                Saltar al contenido principal
            </a>

            {/*
        ─── NAVBAR ───
        Design tokens used (defined in globals.css):
          height: var(--nav-height-desktop) = 68px  |  mobile = 60px
          logo max-h: var(--nav-logo-max-h-desktop) = 52px
          bg: var(--nav-bg) = rgba(3,6,16,0.96) — always dark so logo glow works
          borders & shadows use CSS vars

        Prop §A compliance:
          • Logo icon: 46px/38px (desktop/mobile) circle, no clip
          • Wordmark: clamp() fluid sizing, never cropped
          • Gap logo↔menu governed by justify-between + gap-8
          • Mobile: hamburger drawer, logo stays full wordmark (not abbreviated)
          • Focus rings: .nav-link:focus-visible (WCAG AA)
      */}
            <header
                id="navbar"
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: 'var(--nav-bg, rgba(3,6,16,0.96))',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderBottom: scrolled
                        ? '1px solid var(--nav-border-scrolled, rgba(6,182,212,0.20))'
                        : '1px solid var(--nav-border-idle, rgba(6,182,212,0.08))',
                    boxShadow: scrolled ? 'var(--nav-shadow-scrolled, 0 4px 40px rgba(0,0,0,0.55))' : 'none',
                }}
            >
                {/*
          Container:
            height: 68px desktop / 60px mobile (var(--nav-height-*))
            px: 1rem (sm) → 1.5rem (md) → 2rem (lg)
            Layout: [Brand] justify-between [Nav + Toggle]
        */}
                <div
                    className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between"
                    style={{ height: 'clamp(60px, 8vw, 68px)' }}
                >

                    {/* ─── BRAND BLOCK ───
              Logo icon (circle 46px) + Wordmark (DUNAJHON / GPT CONNECT IA)
              Uses CSS classes .logo-icon-wrap / .logo-wordmark / .logo-sub
              defined in globals.css — responsive via @media inside CSS
          */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 select-none flex-shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                        aria-label="DUNAJHON GPT CONNECT IA — Inicio"
                    >
                        {/*
              Logo icon wrap: CSS class .logo-icon-wrap
                border-radius: 50% (circle)
                border: 1.5px solid rgba(6,182,212,0.35)
                box-shadow: cyan glow + green glow
                Responsive: 46px desktop → 36px mobile (via @media in CSS)
            */}
                        <div className="logo-icon-wrap">
                            <Image
                                src="/brain-icon.png"
                                alt=""
                                aria-hidden="true"
                                width={512}
                                height={512}
                                priority
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Wordmark — CSS classes defined in globals.css */}
                        <div className="flex flex-col leading-none">
                            <span className="logo-wordmark">DUNAJHON</span>
                            <span className="logo-sub">GPT CONNECT IA</span>
                        </div>
                    </Link>

                    {/* ─── DESKTOP NAV ───
              Links use .nav-link CSS class (defined in globals.css):
                hover: color #e2e8f0 + bg rgba(255,255,255,0.05)
                [aria-current="page"]: color #22d3ee + bg rgba(6,182,212,0.08) + hairline underline
                :focus-visible: outline 2px solid #06b6d4 (WCAG AA)
              Divider: hairline vertical 1px rgba(255,255,255,0.12)
          */}
                    <nav
                        className="hidden md:flex items-center gap-1 flex-shrink-0"
                        aria-label="Navegación principal"
                    >
                        {navItems.map(item => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="nav-link"
                                aria-current={isActive(item.href) ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Hairline vertical divider */}
                        <span
                            aria-hidden="true"
                            className="mx-2 self-stretch my-2"
                            style={{ width: '1px', background: 'rgba(255,255,255,0.12)' }}
                        />
                        <ThemeToggle />
                    </nav>

                    {/* ─── MOBILE CONTROLS ─── */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            ref={hamburgerRef}
                            onClick={() => setIsOpen(v => !v)}
                            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav"
                            className="p-2 rounded-xl text-slate-300 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                            style={{ background: 'rgba(255,255,255,0.05)' }}
                        >
                            {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
                        </button>
                    </div>
                </div>

                {/* ─── MOBILE DRAWER ───
            Logo is not abbreviated on mobile — full wordmark stays (prompt §A restriction)
            Links use same .nav-link class adapted for full-width display
        */}
                {isOpen && (
                    <>
                        {/* Overlay: click fuera para cerrar */}
                        <div
                            aria-hidden="true"
                            className="fixed inset-0 z-[-1]"
                            style={{ top: 'clamp(60px, 8vw, 68px)' }}
                            onClick={() => setIsOpen(false)}
                        />
                        <div
                            id="mobile-nav"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Menú de navegación"
                            style={{
                                background: 'rgba(3,6,16,0.98)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                borderTop: '1px solid rgba(6,182,212,0.12)',
                            }}
                        >
                            <div className="container mx-auto max-w-7xl px-4 py-3 flex flex-col gap-0.5">
                                {navItems.map(item => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="nav-link w-full"
                                        aria-current={isActive(item.href) ? 'page' : undefined}
                                        style={{ width: '100%', justifyContent: 'flex-start' }}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
}
