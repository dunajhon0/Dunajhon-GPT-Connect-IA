'use client';

import { useState } from 'react';
import { ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function GptInputBox() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isValid, setIsValid] = useState(false);

    const validateUrl = (value: string) => {
        setUrl(value);

        if (!value.trim()) {
            setError(null);
            setIsValid(false);
            return;
        }

        try {
            const parsedUrl = new URL(value);
            if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
                setError('Por favor introduce una URL con http:// o https://');
                setIsValid(false);
                return;
            }

            if (!parsedUrl.hostname.includes('chatgpt.com') && !parsedUrl.hostname.includes('chat.openai.com')) {
                setError('Aviso: el enlace no parece ser de ChatGPT oficial, pero puedes intentar abrirlo.');
                setIsValid(true);
                return;
            }

            setError(null);
            setIsValid(true);
        } catch {
            setError('Formato de URL no válido');
            setIsValid(false);
        }
    };

    const handleOpen = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid && url) {
            // Trigger analytics event custom event defined in PRD
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('gpt_open_click', { detail: { url } }));
            }
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            setError('Por favor, introduce una URL válida antes de abrir.');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-800/50">
            <form onSubmit={handleOpen} className="flex flex-col gap-4">
                <label htmlFor="gpt-url" className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    Pega aquí el enlace de tu GPT
                </label>

                <div className="relative">
                    <input
                        id="gpt-url"
                        type="url"
                        value={url}
                        onChange={(e) => validateUrl(e.target.value)}
                        placeholder="https://chatgpt.com/g/g-..."
                        className={`w-full px-5 py-4 rounded-xl border-2 transition-all outline-none bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 ${error ? 'border-red-400 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500'
                            }`}
                    />
                    {isValid && !error && (
                        <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                    )}
                </div>

                {error && (
                    <div className="flex items-center gap-2 text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                        <AlertCircle size={16} />
                        <span>{error}</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={!url.trim()}
                    className={`mt-2 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-lg transition-all ${url.trim()
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        }`}
                >
                    <span>Abrir GPT</span>
                    <ExternalLink size={20} />
                </button>
            </form>
        </div>
    );
}
