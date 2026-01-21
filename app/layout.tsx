import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO CONFIGURATION ---
export const metadata: Metadata = {
  // CORRECCIÓN AQUÍ: Definimos la base para que sepa dónde buscar las imágenes
  metadataBase: new URL('https://pulsotek.site'), 

  title: {
    template: '%s | Darofit',
    default: 'Darofit | Entrenador Personal Online & Recomposición Corporal', 
  },
  
  description: "Logra cambios reales y sostenibles con Darofit. Planes de entrenamiento y nutrición 100% personalizados por el Prof. Dario Oller.",
  
  keywords: [
    "Entrenador Personal Online",
    "Recomposición Corporal",
    "Profesor Educación Física",
    "Plan de Entrenamiento",
    "Nutrición Deportiva",
    "Dario Oller",
    "Fitness Coach Argentina",
    "Bajar de peso",
    "Ganar masa muscular"
  ],

  authors: [{ name: "Dario Oller" }],
  creator: "PulsoTek",

  openGraph: {
    title: 'Darofit - Resultados Reales para Personas Reales',
    description: '¿Buscas un cambio físico real? Únete al team Darofit y entrena con inteligencia y ciencia.',
    url: '/', // Ahora que pusimos metadataBase, esto se autocompleta
    siteName: 'Darofit',
    images: [
      {
        url: '/dario-about.jpg', 
        width: 800,
        height: 800,
        alt: 'Dario Oller - Entrenador Personal',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },

  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}