'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[var(--background)] border-t border-[var(--glass-border)] py-12 mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <Image src="/logo.png" alt="Logo" width={32} height={32} className="w-8 h-8 object-contain rounded-md" />
                            <span className="font-bold text-lg">DUNAJHON GPT CONNECT IA</span>
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-4">
                            El directorio de GPTs definitivo para optimizar tu trabajo, con acceso directo y validado para tu seguridad.
                        </p>
                        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800">
                            Proyecto respaldado comercialmente (Publicidad)
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Secciones</h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/#directorio" className="hover:text-blue-500 transition-colors">Directorio de GPTs</Link></li>
                            <li><Link href="/#guias" className="hover:text-blue-500 transition-colors">Guías y Artículos</Link></li>
                            <li><Link href="/#faq" className="hover:text-blue-500 transition-colors">Preguntas Frecuentes</Link></li>
                            <li><Link href="/contacto" className="hover:text-blue-500 transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/privacidad" className="hover:text-blue-500 transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="/cookies" className="hover:text-blue-500 transition-colors">Política de Cookies</Link></li>
                            <li><Link href="/aviso-legal" className="hover:text-blue-500 transition-colors">Aviso Legal</Link></li>
                            <li><button className="hover:text-blue-500 transition-colors text-left" onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}>Configurar Cookies</button></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} DUNAJHON GPT CONNECT IA. Todos los derechos reservados.</p>
                    <p className="mt-4 md:mt-0">Esta web se financia mediante publicidad para mantener su acceso gratuito.</p>
                </div>
            </div>
        </footer>
    );
}
