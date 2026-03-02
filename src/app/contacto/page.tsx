export const metadata = { title: 'Contacto | DUNAJHON GPT' };

export default function Contacto() {
    return (
        <div className="container mx-auto px-4 max-w-3xl py-12 prose dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8">Contacto</h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                ¿Tienes problemas con un enlace, sugerencias para el directorio o consultas profesionales?
                Estamos aquí para ayudarte.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mt-0 mb-4">Escríbenos directamente</h2>
                <p className="mb-6">
                    Por el momento, la forma más rápida de contactarnos es a través de correo electrónico. Intentamos responder en menos de 48 horas laborables.
                </p>
                <a
                    href="mailto:hola@ejemplo.com"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg no-underline transition-colors"
                >
                    hola@tu-dominio.com
                </a>
            </div>
        </div>
    );
}
