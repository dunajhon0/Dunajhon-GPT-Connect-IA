'use client';

import { useEffect, useState } from 'react';

interface AdSenseSlotProps {
    client?: string;
    slot?: string;
    className?: string;
}

export default function AdSenseSlot({
    client = 'ca-pub-XXXXXXXXXXXX', // Placeholder 
    slot = 'XXXXXXX', // Placeholder
    className = ''
}: AdSenseSlotProps) {
    const [canLoad, setCanLoad] = useState(false);

    useEffect(() => {
        // Check initial consent
        const checkConsent = () => {
            const consent = localStorage.getItem('cookie-consent');
            if (consent === 'accepted') {
                setCanLoad(true);
            } else {
                setCanLoad(false);
            }
        };

        checkConsent();

        // Listen for consent changes
        window.addEventListener('cookieConsentAccepted', checkConsent);
        return () => window.removeEventListener('cookieConsentAccepted', checkConsent);
    }, []);

    if (!canLoad) {
        return (
            <div className={`w-full bg-slate-100 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 rounded flex flex-col items-center justify-center p-4 text-center ${className}`}>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Publicidad</span>
                <p className="text-sm text-slate-500">
                    Los anuncios están desactivados porque no has aceptado las cookies de publicidad.
                    <br />
                    <button
                        onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                        className="text-blue-500 hover:underline mt-1"
                    >
                        Configurar Cookies
                    </button>
                </p>
            </div>
        );
    }

    // En producción real, aquí iría el script tag de Ins
    return (
        <div className={`w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/20 border border-slate-100 dark:border-slate-800 py-4 ${className}`}>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Publicidad</span>
            <div className="w-full flex items-center justify-center min-h-[90px] text-slate-400 border border-dashed border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                [ AdSense Placeholder: {client} / {slot} ]
            </div>
            {/* 
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client={client}
             data-ad-slot={slot}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      */}
        </div>
    );
}
