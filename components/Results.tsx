"use client"; 

import Image from "next/image";
import { motion } from "framer-motion";

export default function Results() {
  // CSS del Shimmer (Efecto de borde giratorio)
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
      /* Borde brillante color rosa/rojo (#e11d48) */
      background: conic-gradient(from var(--angle), transparent 20%, #e11d48, transparent 50%);
      animation: shimmer-spin 3s linear infinite;
    }
  `;

  return (
    <section id="resultados" className="py-24 bg-[#18191b] relative overflow-hidden">
      
      {/* Inyectamos los estilos */}
      <style>{shimmerCss}</style>

      {/* Luz ambiental sutil detrás del título */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-darofit-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO: TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-darofit-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Casos de Éxito
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Resultados reales, <br />
              <span className="text-gray-500">personas reales.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                <strong className="text-white">Brenda</strong> llegó a mí con 100kg y una relación complicada con su cuerpo. Estaba frustrada por intentar dietas extremas que nunca funcionaban a largo plazo.
              </p>
              <p>
                Durante <strong className="text-white">1 año de trabajo</strong>, no solo logramos una recomposición corporal completa, sino algo más importante: una relación sana con la comida.
              </p>
              
              <blockquote className="border-l-4 border-darofit-primary pl-6 py-2 italic text-gray-500 my-8">
                "No fue suerte. No fue genética. Fue un plan claro, avanzar permitiendo ser humanos."
              </blockquote>
            </div>
          </motion.div>

          {/* LADO DERECHO: TARJETA DEL CASO */}
          <div className="relative">
            {/* Luz suave detrás de la tarjeta */}
            <div className="absolute inset-0 bg-darofit-primary/10 blur-[80px] rounded-full -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }} 
              className="bg-[#232426] p-8 rounded-3xl border border-gray-800 shadow-2xl relative z-10 group"
            >
              
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-white font-bold text-xl group-hover:text-darofit-primary transition-colors">Brenda</h3>
                  <p className="text-gray-500 text-sm font-medium">Plan Premium • 12 Meses</p>
                </div>
                <div className="bg-[#18191b] border border-gray-700 px-3 py-1 rounded-lg text-darofit-primary text-xs font-bold uppercase tracking-wider">
                  Recomposición
                </div>
              </div>

              {/* GRID DE FOTOS */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* 1. FOTO ANTES (Sin efecto, más apagada) */}
                <div className="space-y-3">
                  <div className="aspect-[3/4] bg-[#18191b] rounded-xl flex items-center justify-center relative overflow-hidden border border-gray-800">
                    
                    <Image 
                      src="/brenda-antes.jpg" 
                      alt="Antes" 
                      fill 
                      // Usamos grayscale para que se vea "pasado" y resalte el color de la nueva
                      className="object-cover opacity-80 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" 
                    />
                    
                  </div>
                  <p className="text-center text-gray-600 text-xs font-bold uppercase tracking-widest">Antes</p>
                </div>

                {/* 2. FOTO DESPUÉS (CON EFECTO SHIMMER) */}
                <div className="space-y-3">
                   {/* Contenedor con borde giratorio */}
                   <div className="relative aspect-[3/4] rounded-xl overflow-hidden p-[2px]">
                      {/* El Borde Brillante */}
                      <div className="absolute inset-0 shimmer-card-bg opacity-100" />
                      
                      {/* La Foto */}
                      <div className="relative h-full w-full bg-[#18191b] rounded-[10px] overflow-hidden">
                         <Image 
                            src="/brenda-despues.jpg" 
                            alt="Después" 
                            fill 
                            className="object-cover" 
                         />
                      </div>
                   </div>
                   
                   <p className="text-center text-darofit-primary text-xs font-bold uppercase tracking-widest shadow-darofit-primary/20 drop-shadow-md">
                     Después
                   </p>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}