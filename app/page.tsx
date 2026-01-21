"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Importamos todos los componentes
import Method from "../components/Method";
import Results from "../components/Results";
import Plans from "../components/Plans";
import About from "../components/About";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn"; 
import Marquee from "../components/Marquee"; 

export default function Home() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#18191b] selection:bg-darofit-primary selection:text-white overflow-x-hidden">
      
      {/* --------------------------------------------------------- */}
      {/* 1. SECCIÓN HERO (PORTADA)                                 */}
      {/* --------------------------------------------------------- */}
      <section className="snap-center relative min-h-screen flex items-end pb-0 md:items-center overflow-hidden font-sans pt-20 md:pt-0">
        
        {/* FONDO */}
        <div className="absolute inset-0 z-0 bg-[#18191b] overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/gym-bg.jpg"
                alt="Gym background texture"
                fill
                className="object-cover filter brightness-[0.4] contrast-90 opacity-70"
                priority
              />
              <div className="absolute inset-0 bg-[#18191b]/80 mix-blend-multiply z-0" />
            </div>

            <div className="relative z-10 absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <motion.div 
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="relative z-10 absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-darofit-primary/20 rounded-full blur-[120px]"
            />
        </div>

        {/* CONTENIDO HERO */}
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center lg:items-center h-full min-h-screen lg:min-h-0">
          
          {/* --- COLUMNA 1: TEXTO --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left pt-24 lg:pt-0 order-1 relative z-20 pb-10 lg:pb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-darofit-primary/10 border border-darofit-primary/20 text-darofit-primary font-bold tracking-wider uppercase text-xs mb-6 backdrop-blur-sm">
                Online Fitness Coach
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Resultados reales <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-darofit-primary to-pink-500 animate-gradient bg-[length:200%_auto]">
                para personas reales.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              "La acción logra el progreso, no esperes a sentirte listo. 
              Mañana será mejor."
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center"
            >
              <a 
                href="#planes"
                onClick={(e) => handleScroll(e, "planes")}
                className="px-8 py-4 bg-darofit-primary text-white font-bold rounded-full text-lg shadow-xl shadow-darofit-primary/20 hover:bg-[#a02344] transition-all transform hover:scale-105 cursor-pointer"
              >
                EMPEZAR CAMBIO
              </a>
              
              <a 
                href="#metodo"
                onClick={(e) => handleScroll(e, "metodo")}
                className="px-8 py-4 bg-white/5 border border-white/10 text-gray-300 font-medium rounded-full text-lg hover:bg-white/10 hover:border-white/30 hover:text-white transition-all backdrop-blur-sm cursor-pointer"
              >
                Conocer método
              </a>
            </motion.div>
          </motion.div>

          {/* --- COLUMNA 2: IMAGEN (OCULTA EN MÓVIL) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[55vh] lg:h-[95vh] w-full hidden lg:flex items-end justify-center lg:justify-end order-2"
          >
            <div className="relative w-full h-full max-w-xl lg:max-w-3xl [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]">
               <Image 
                src="/hero-bg.png" 
                alt="Darofit Entrenador" 
                fill 
                className="object-contain object-bottom drop-shadow-2xl z-10"
                priority 
              />
            </div>
          </motion.div>
        </div>

        {/* --- GRADIENTES --- */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#18191b] via-[#18191b]/30 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#18191b] to-transparent z-20 pointer-events-none" />

      </section>

      {/* 2. CINTA MARQUEE (OCULTA EN MÓVIL) */}
      <div className="snap-center py-12 bg-[#18191b] relative z-30 hidden lg:block">
         <Marquee />
      </div>

      {/* 3. RESTO DE SECCIONES (ORDEN CAMBIADO) */}
      
      {/* AHORA PRIMERO: RESULTADOS */}
      <div className="snap-center bg-[#18191b]">
        <FadeIn delay={0.2}>
          <Results />
        </FadeIn>
      </div>

      {/* AHORA SEGUNDO: MÉTODO */}
      <div className="snap-center bg-[#18191b]">
        <FadeIn>
          <Method />
        </FadeIn>
      </div>

      <div className="snap-center bg-[#18191b]">
        <FadeIn>
          <Plans />
        </FadeIn>
      </div>

      <div className="snap-center bg-[#18191b]">
        <FadeIn>
          <About />
        </FadeIn>
      </div>
      
      <div className="snap-center bg-[#18191b]">
        <Footer />
      </div>

    </main>
  );
}