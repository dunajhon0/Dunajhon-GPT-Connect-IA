'use client';

import { useEffect, useRef } from 'react';

interface AdSenseSlotProps {
    /**
     * Slot identifier. Use 'TOP_BANNER' or 'BOTTOM_BANNER' for placeholders.
     * When you have real AdSense units, replace with actual slot IDs.
     *
     * To activate real AdSense units:
     * 1. Replace the `slot` prop value with your numeric Data-ad-slot ID (e.g. "1234567890")
     * 2. Set `adClient` to your publisher ID (e.g. "ca-pub-XXXXXXXXXXXXXXXXX")
     * 3. Set `isPlaceholder` to false
     * 4. Uncomment the <ins> block below and remove the placeholder div
     */
    slot: string;
    /** AdSense publisher ID — set when activating real ads */
    adClient?: string;
    /** Format: "auto" | "horizontal" | "rectangle" etc. */
    format?: string;
    /** Set to false to activate real AdSense unit */
    isPlaceholder?: boolean;
}

export default function AdSenseSlot({
    slot,
    adClient = 'ca-pub-3779816940145698',
    format = 'auto',
    isPlaceholder = true,
}: AdSenseSlotProps) {
    const adRef = useRef<HTMLModElement | null>(null);

    useEffect(() => {
        if (isPlaceholder) return;
        try {
            const adsByGoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle;
            if (Array.isArray(adsByGoogle)) {
                adsByGoogle.push({});
            }
        } catch {
            // AdSense not loaded yet
        }
    }, [isPlaceholder]);

    /* ── Placeholder (development / no real unit yet) ── */
    if (isPlaceholder) {
        return (
            <div
                className="ad-skeleton flex items-center justify-center min-h-[90px] w-full text-xs text-[var(--muted)] select-none py-4"
                aria-hidden="true"
                title={`Ad slot: ${slot}`}
            >
                <span className="opacity-40">Publicidad · {slot}</span>
            </div>
        );
    }

    /* ── Real AdSense unit (uncomment when ready) ── */
    return (
        <div className="min-h-[90px] w-full overflow-hidden">
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={adClient}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}
