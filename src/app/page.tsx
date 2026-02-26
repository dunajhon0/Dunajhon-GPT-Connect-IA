import GptInputBox from '@/components/GptInputBox';
import Accordion from '@/components/Accordion';
import AdSenseSlot from '@/components/AdSenseSlot';
import { Bot, Zap, ShieldCheck, Rocket, LayoutGrid, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const faqItems = [
    {
      title: "¿Qué es DUNAJHON GPT CONNECT IA?",
      content: "Es un directorio especializado donde recopilamos y clasificamos los mejores GPTs disponibles en la plataforma de OpenAI. Nuestro objetivo es ahorrarte tiempo buscando y proporcionarte herramientas validadas para optimizar tu trabajo diario."
    },
    {
      title: "¿Es seguro usar estos enlaces?",
      content: "Sí. Todos los enlaces proporcionados te redirigen siempre a la web oficial de ChatGPT (chatgpt.com), asegurando que usas tu cuenta oficial de OpenAI y mantienes la privacidad de tus datos bajo sus políticas."
    },
    {
      title: "¿Necesito una cuenta de pago (ChatGPT Plus)?",
      content: "Depende del GPT. Aunque actualmente OpenAI permite a los usuarios gratuitos acceder a muchos GPTs personalizados, algunos más complejos o las capacidades de generación de imágenes avanzada podrían requerir una suscripción Plus, Team o Enterprise."
    },
    {
      title: "¿Cómo añado mi GPT al directorio?",
      content: "Próximamente habilitaremos un formulario para que los creadores puedan enviar sus GPTs para revisión. Por ahora, nos centramos en una curación interna para garantizar la máxima calidad."
    }
  ];

  const features = [
    { icon: <Zap className="text-yellow-500" size={32} />, title: "Productividad", desc: "Automatiza tareas repetitivas y ahorra horas de trabajo cada semana." },
    { icon: <ShieldCheck className="text-green-500" size={32} />, title: "Calidad Validada", desc: "Solo listamos GPTs probados y útiles, sin ruido ni herramientas ineficaces." },
    { icon: <Bot className="text-blue-500" size={32} />, title: "Roles Personalizados", desc: "Descubre IA entrenada específicamente para redacción, programación, diseño o análisis." }
  ];

  const ucases = [
    { title: "Para Freelancers", desc: "Redacta correos, propuestas comerciales y gestiona tu marketing como si tuvieras un equipo." },
    { title: "Para PyMEs", desc: "Optimiza procesos internos de soporte, RRHH y análisis financiero con asistentes expertos." },
    { title: "Para Estudiantes", desc: "Resume PDFs larguísimos, crea tarjetas de estudio o recibe tutoría paso a paso." },
    { title: "Para Desarrolladores", desc: "Encuentra GPTs que escriben código, depuran errores o te explican arquitecturas de software." },
  ];

  return (
    <div className="flex flex-col gap-24">
      {/* HERO SECTION */}
      <section className="relative px-4 pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto max-w-5xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-blue-700 dark:text-blue-300 font-medium text-sm mb-6">
            <Rocket size={16} /> Descubre el poder de los GPTs
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            El directorio definitivo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">optimizar tu trabajo</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Encuentra, valida y lanza los mejores modelos personalizados de ChatGPT en segundos.
            Menos tiempo buscando, más tiempo produciendo.
          </p>

          <div className="mt-12 pt-4">
            <GptInputBox />
          </div>
        </div>
      </section>

      {/* ADSENSE SLOT 1 (In-content top) */}
      <div className="container mx-auto px-4 max-w-4xl">
        <AdSenseSlot slot="TOP_BANNER" />
      </div>

      {/* ¿QUÉ ES Y BENEFICIOS? */}
      <section id="que-es" className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Qué es DUNAJHON GPT CONNECT IA?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Somos el puente entre las capacidades ilimitadas de la Inteligencia Artificial y tus necesidades diarias.
            Curamos, organizamos y explicamos los GPTs más potentes para que tú solo tengas que usarlos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-2xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-full mb-6 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASOS DE USO */}
      <section id="casos-uso" className="bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">Útil para todos los perfiles</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                La Inteligencia Artificial ya no es exclusiva de los ingenieros. Existe un GPT perfecto para cada problema y sector profesional.
              </p>
              <ul className="space-y-4 pt-4">
                {ucases.map((u, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">{u.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{u.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full bg-slate-200 dark:bg-slate-800 rounded-3xl h-[400px] flex items-center justify-center relative overflow-hidden glass shadow-2xl">
              {/* Illustration Placeholder */}
              <div className="text-center p-8 z-10">
                <LayoutGrid size={64} className="mx-auto text-blue-500 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Conecta tu mundo</h3>
              </div>
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORIO / ECOSISTEMA (CATÁLOGO CARDS) */}
      <section id="directorio" className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestro Ecosistema Destacado</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explora las categorías más populares de nuestro catálogo en constante expansión.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, cat: "Programación", name: "Code Mentor Pro", desc: "Arquitectura y depuración de código en Python, JS y Rust." },
            { id: 2, cat: "Marketing", name: "SEO Content Master", desc: "Redacción de artículos orientados a posicionar en Google." },
            { id: 3, cat: "Diseño", name: "UI/UX Feedback", desc: "Sube tu captura y recibe críticas constructivas de diseño." },
            { id: 4, cat: "Productividad", name: "Email Optimizer", desc: "Responde hilos kilométricos en un tono polite y conciso." },
            { id: 5, cat: "Educación", name: "Language Tutor", desc: "Practica tu inglés, francés o alemán con feedback oral simulado." },
            { id: 6, cat: "Análisis", name: "Data Insight", desc: "Interpreta archivos CSV y saca conclusiones de negocio rápidas." },
          ].map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:shadow-xl hover:border-blue-500/30 transition-all flex flex-col h-full">
              <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400 mb-3 block">{item.cat}</span>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 flex-grow mb-6">{item.desc}</p>
              <button className="w-full py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium transition-colors mt-auto text-sm">
                Ver detalles
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ADSENSE SLOT 2 (In-content bottom) */}
      <div className="container mx-auto px-4 max-w-4xl">
        <AdSenseSlot slot="BOTTOM_BANNER" />
      </div>

      {/* ROADMAP & CONFIANZA */}
      <section className="container mx-auto px-4 max-w-4xl text-center">
        <div className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-blue-100 dark:border-blue-900/50">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-blue-50 dark:to-blue-900/20 -z-10" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestro Roadmap</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Estamos construyendo el repositorio de GPTs hispano más grande. En las próximas semanas lanzaremos perfiles de usuario, guardado de favoritos y un formulario para que envíes tus propias creaciones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm font-medium text-sm text-slate-700 dark:text-slate-300">✓ Validación Manual</span>
            <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm font-medium text-sm text-slate-700 dark:text-slate-300">✓ Actualizaciones Semanales</span>
            <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm font-medium text-sm text-slate-700 dark:text-slate-300">✓ 100% Gratuito</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 max-w-5xl mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <Accordion items={faqItems} />
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-600 text-white py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para transformar tu flujo de trabajo?</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Únete a miles de profesionales que ya están ahorrando horas cada día gracias a la Inteligencia Artificial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#directorio" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-lg shadow-white/10 text-lg">
              Explorar el Directorio
            </Link>
            <Link href="/contacto" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors border border-blue-500 text-lg">
              Contactar al equipo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
