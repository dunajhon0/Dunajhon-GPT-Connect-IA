export const metadata = { title: 'Política de Privacidad | DUNAJHON GPT' };

export default function Privacidad() {
    return (
        <div className="container mx-auto px-4 max-w-3xl py-12 prose dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

            <p>
                [Aviso: Este es un texto de ejemplo/mockup. Debes adaptarlo a tu situación específica y consultar con un profesional o revisar las políticas de AdSense].
            </p>

            <h2>1. Información que recopilamos</h2>
            <p>
                En DUNAJHON GPT CONNECT IA no recopilamos información personal directamente a menos que nos contactes por voluntad propia. Sin embargo, podríamos recopilar datos anónimos de navegación para análisis de tráfico (por ejemplo, a través de cookies de terceros).
            </p>

            <h2>2. Uso de la información</h2>
            <p>
                Cualquier dato recopilado de forma anónima se utiliza exclusivamente para:
            </p>
            <ul>
                <li>Mejorar el rendimiento técnico de la web.</li>
                <li>Personalizar los anuncios que mostramos a través de la red de Google AdSense (si has consentido).</li>
                <li>Entender de forma agregada las categorías que generan más interés.</li>
            </ul>

            <h2>3. Compartir información con terceros</h2>
            <p>
                No vendemos, alquilamos ni cedemos identificadores personales (como tu IP si llegase a identificarte) de forma directa a terceros. No obstante, al utilizar Google AdSense para financiarnos, determinados datos de uso pueden enviarse a Google.
            </p>

            <h2>4. Tus Derechos</h2>
            <p>
                De acuerdo con el Reglamento General de Protección de Datos (RGPD) aplicable en la Unión Europea, tienes derecho a acceder, rectificar, limitar y solicitar la eliminación de los datos que consideres que tenemos tuyos. Puedes ejercer estos derechos contactando por los canales oficiales.
            </p>
        </div>
    );
}
