"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  // CSS del efecto Shimmer (Borde giratorio)
  const shimmerCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
    .shimmer-card-bg {
      /* Usamos el rosa de tu marca (#e11d48) */
      background: conic-gradient(from var(--angle), transparent 20%, #e11d48, transparent 50%);
      animation: shimmer-spin 3s linear infinite;
    }
  `;

  return (
    <section id="sobre-mi" className="py-24 bg-[#18191b] relative overflow-hidden">
      
      {/* Inyectamos estilos */}
      <style>{shimmerCss}</style>

      {/* Luz ambiental sutil */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-darofit-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO: FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Contenedor del efecto Shimmer */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden p-[2px] group shadow-2xl shadow-black/50">
              
              {/* CAPA 1: Borde Giratorio */}
              <div className="absolute inset-0 shimmer-card-bg opacity-100" />
              
              {/* CAPA 2: La Imagen */}
              <div className="relative h-full w-full bg-[#232426] rounded-[22px] overflow-hidden">
                  <Image 
                    src="/dario-about.jpeg" 
                    alt="Dario Oller - Entrenador" 
                    fill 
                    // CAMBIO AQUÍ: Agregamos 'object-top' para que se alinee arriba y no corte la cabeza
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
              </div>
            </div>

            {/* Decoración extra detrás (Marco sutil) */}
            <div className="absolute -inset-4 border-2 border-darofit-primary/5 rounded-[2.5rem] -z-10 transform translate-x-4 translate-y-4" />
          </motion.div>

          {/* LADO DERECHO: BIO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-darofit-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Tu Entrenador
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Oller Dario
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Soy <strong className="text-white">Profesor de Educación Física</strong> y especialista en recomposición corporal. 
                Pero más allá de los títulos, me especializo en la parte pedagógica del aprendizaje.
              </p>
              <p>
                Llevo más de <strong className="text-white">5 años</strong> ayudando a personas que se sentían frustradas por no lograr cambios reales y sostenibles.
              </p>
              <p>
                Mi formación me permite entender el cuerpo desde la base: cómo se mueve, cómo se adapta y cómo progresa sin poner en riesgo tu salud.
              </p>
            </div>

            <div className="mt-8 bg-[#232426] p-6 rounded-2xl border-l-4 border-darofit-primary shadow-lg">
              <p className="italic text-gray-300 font-medium">
                "No trabajo con promesas vacías ni soluciones rápidas. Trabajo con método, constancia y planificación real."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 border-t border-gray-800 pt-8">
              <div>
                <span className="block text-3xl font-bold text-white">5+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Años Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">100+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Alumnos</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">100%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Compromiso</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}