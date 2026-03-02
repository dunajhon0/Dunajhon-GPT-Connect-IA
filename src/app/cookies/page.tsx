'use client';

export default function Cookies() {
    return (
        <div className="container mx-auto px-4 max-w-3xl py-12 prose dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>

            <p>
                [Aviso: Este es un texto de ejemplo/mockup. Debes adaptarlo a tu situación específica y consultar con un profesional].
            </p>

            <h2>¿Qué son las cookies?</h2>
            <p>
                Las cookies son archivos que se descargan en tu dispositivo (ordenador, smartphone, tablet) cuando accedes a ciertas páginas web. Permiten a una web almacenar y recuperar información sobre los hábitos de navegación del usuario.
            </p>

            <h2>¿Qué tipos de cookies usa esta web?</h2>
            <ul>
                <li>
                    <strong>Cookies Técnicas (Esenciales):</strong> Son aquellas necesarias para la navegación y el buen funcionamiento de la página web (por ejemplo, guardar tu estado de consentimiento mismo).
                </li>
                <li>
                    <strong>Cookies de Análisis:</strong> Recopilan información estadística sobre el comportamiento del usuario en el sitio para mejorarlo.
                </li>
                <li>
                    <strong>Cookies Publicitarias (Terceros):</strong> (P. ej. de Google AdSense). Permiten la gestión eficaz de espacios publicitarios, almacenando información sobre el comportamiento en base a la observación continuada.
                </li>
            </ul>

            <h2>Configuración y Consentimiento</h2>
            <p>
                Puedes retirar o modificar tu consentimiento siempre que lo desees pulsando el botón a continuación, lo que volverá a abrir la ventana global de configuración.
            </p>

            <div className="mt-8 p-6 glass rounded-2xl flex flex-col items-center">
                <p className="mb-4 font-medium text-center">Modifica tus opciones de privacidad</p>
                <button
                    onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-colors"
                >
                    Configurar Cookies Guardadas
                </button>
            </div>
        </div>
    );
}
