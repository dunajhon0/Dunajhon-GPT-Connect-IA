'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Check if consent has been given
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShow(true);
        }

        const handleOpenSettings = () => setShow(true);
        window.addEventListener('openCookieSettings', handleOpenSettings);
        return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShow(false);
        // Here we can trigger any analytics or AdSense loading
        window.dispatchEvent(new Event('cookieConsentAccepted'));
    };

    const handleReject = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl z-[100] p-4 sm:p-6 animate-in slide-in-from-bottom-full duration-500">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 pr-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-bold">Tu privacidad es importante</h2>
                        <button onClick={() => setShow(false)} className="md:hidden text-slate-500 hover:text-slate-800">
                            <X size={20} />
                        </button>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Utilizamos cookies propias y de terceros para fines analíticos y publicitarios, como personalizar los anuncios
                        mostrados. Entender tu navegación nos ayuda a mejorar nuestro servicio.
                        Puedes aceptar todas las cookies, configurar tus preferencias o rechazarlas.
                    </p>
                    <div className="text-xs text-slate-500 dark:text-slate-500 space-x-4">
                        <Link href="/cookies" className="underline hover:text-blue-500">Política de Cookies</Link>
                        <Link href="/privacidad" className="underline hover:text-blue-500">Política de Privacidad</Link>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                    <button
                        onClick={handleReject}
                        className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto text-sm"
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-colors w-full sm:w-auto text-sm"
                    >
                        Aceptar Todas
                    </button>
                </div>
            </div>
        </div>
    );
}
