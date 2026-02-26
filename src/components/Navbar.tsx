'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { name: 'Directorio', href: '/#directorio' },
    { name: 'Guías', href: '/#guias' },
    { name: 'Casos de Uso', href: '/#casos-uso' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Logo de DUNAJHON GPT CONNECT IA" width={40} height={40} className="w-10 h-10 object-contain rounded-lg" />
                    <span className="font-bold text-xl tracking-tight hidden sm:block">DUNAJHON GPT</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-blue-500 transition-colors">
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 shadow-lg border-t border-[var(--glass-border)] transition-all">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-blue-500 transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
