'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

// ── Lazy initializers: se ejecutan SOLO en el cliente (window/document existen).
// En SSR devuelven false (valor neutro). No se necesita ningún effect.
// Esto cumple react-hooks/set-state-in-effect porque no hay setState en ningún effect.

export default function ThemeToggle() {
    // Leer tema desde el DOM (lo que el script inline de layout.tsx ya aplicó)
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof document === 'undefined') return false;
        return document.documentElement.classList.contains('dark');
    });

    // mounted: true si estamos en el cliente (document existe)
    const [mounted] = useState<boolean>(() => typeof document !== 'undefined');

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        if (newDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Placeholder SSR para evitar layout shift en la hidratación
    if (!mounted) return <div className="w-9 h-9 rounded-full" aria-hidden="true" />;

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
        >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
    );
}
