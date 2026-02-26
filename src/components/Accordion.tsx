'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
    title: string;
    content: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                        <span>{item.title}</span>
                        <ChevronDown
                            className={`text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                            size={20}
                        />
                    </button>

                    <div
                        className={`px-6 text-slate-600 dark:text-slate-400 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
}
