import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ReadingProgress from "@/components/ReadingProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

// Viewport — explicit for safe-area (iOS notch) + no zoom lock (WCAG 1.4.4)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,      // no bloquear zoom (accesibilidad)
  viewportFit: "cover", // safe-area-inset-* en iOS
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dunajhon.com"),
  title: {
    default: "DUNAJHON GPT CONNECT IA — Directorio de GPTs y Guías de IA",
    template: "%s | DUNAJHON GPT CONNECT IA",
  },
  description:
    "Descubre, aprende y conecta con los mejores GPTs de ChatGPT. Directorio curado, guías de productividad con IA, casos de uso prácticos y herramientas interactivas — en español.",
  keywords: [
    "GPT", "ChatGPT", "inteligencia artificial", "productividad IA",
    "directorio GPTs", "DUNAJHON", "GPT Connect", "automatización",
    "prompts", "herramientas IA",
  ],
  openGraph: {
    type: "website",
    url: "https://dunajhon.com",
    siteName: "DUNAJHON GPT CONNECT IA",
    title: "DUNAJHON GPT CONNECT IA — Conecta tu trabajo con la IA",
    description:
      "Directorio de GPTs curado, guías de productividad, calculadora de ahorro de tiempo y mucho más. Todo en español, sin registro.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DUNAJHON GPT CONNECT IA",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "DUNAJHON GPT CONNECT IA — Conecta tu trabajo con la IA",
    description:
      "Directorio de GPTs curado, guías de productividad y herramientas IA interactivas en español.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://dunajhon.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org: Organization + WebSite
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dunajhon.com/#organization",
      name: "DUNAJHON GPT CONNECT IA",
      url: "https://dunajhon.com",
      logo: {
        "@type": "ImageObject",
        url: "https://dunajhon.com/logo.png",
      },
      description:
        "Directorio de GPTs curado y plataforma educativa sobre Inteligencia Artificial en español.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://dunajhon.com/#website",
      url: "https://dunajhon.com",
      name: "DUNAJHON GPT CONNECT IA",
      publisher: { "@id": "https://dunajhon.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://dunajhon.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "es",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* ── Anti-FOUC: aplica dark/light ANTES de pintar (síncrono, bloqueante) ──
            Sin esto, en móvil se ve un flash blanco antes de que React hidrate.
            Debe ser el PRIMER script del <head>. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
        {/* Google AdSense verification — DO NOT REMOVE */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3779816940145698"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        {/* Top reading progress bar */}
        <ReadingProgress />
        <Navbar />
        <main className="flex-grow pt-20 pb-12">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}