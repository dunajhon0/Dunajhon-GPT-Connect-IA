'use client';

import { useEffect, useState } from 'react';

/**
 * ReadingProgress — fixed top bar showing page scroll progress (0–100%).
 * Uses transform for GPU compositing to avoid CLS.
 */
export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
            setProgress(pct);
        };

        window.addEventListener('scroll', update, { passive: true });
        update();
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <div
            aria-hidden="true"
            className="reading-progress"
            style={{ width: `${progress}%` }}
        />
    );
}
