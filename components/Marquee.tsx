"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  // Palabras que queremos repetir
  const text = "ENTRENAMIENTO INTELIGENTE • NUTRICIÓN REAL • RESULTADOS SOSTENIBLES • SALUD MENTAL • ";
  
  return (
    <div className="relative flex overflow-hidden bg-darofit-primary py-4 transform -skew-y-2 border-y-4 border-black z-20">
      {/* Fondo oscuro traslúcido para textura (opcional) */}
      <div className="absolute inset-0 bg-black/10 pattern-grid-lg opacity-20" />

      {/* Contenedor animado */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }} // Se mueve hacia la izquierda
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 // Velocidad (más bajo = más rápido)
        }}
      >
        {/* Repetimos el texto muchas veces para cubrir pantallas grandes */}
        <span className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mx-4">{text}</span>
        <span className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mx-4">{text}</span>
        <span className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mx-4">{text}</span>
        <span className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mx-4">{text}</span>
      </motion.div>
    </div>
  );
}