"use client";

import { motion } from "framer-motion";

export default function Method() {
  
  const steps = [
    {
      id: "01",
      title: "Entrenamiento Inteligente",
      description: "No es entrenar más, es entrenar mejor. Rutinas adaptadas a tu biomecánica y objetivos reales.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-darofit-primary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5l11 11" /><path d="M21 21l-1-1" /><path d="M3 3l1 1" /><path d="M18 22l4-4" /><path d="M2 6l4-4" /><path d="M3 10l7.972-7.972a6 6 0 0 1 8.486 8.486L11.5 18.5Z" /></svg>
      )
    },
    {
      id: "02",
      title: "Nutrición Flexible",
      description: "Olvídate de las dietas de hambre. Aprende a comer lo que te gusta y a nutrir tu cuerpo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-darofit-primary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" /><path d="M10 2c1 .5 2 2 2 5" /></svg>
      )
    },
    {
      id: "03",
      title: "Constancia y Hábitos",
      description: "La motivación te inicia, el hábito te mantiene. Construimos un estilo de vida sostenible.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-darofit-primary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></svg>
      )
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-[#18191b] relative overflow-hidden">
      
      {/* Luz ambiental sutil */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-darofit-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            No es suerte, es <span className="text-darofit-primary">estrategia</span>.
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            La recomposición corporal no ocurre por casualidad. Mi sistema se basa en tres pilares fundamentales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              // EFECTO DE LEVITACIÓN AL HACER HOVER
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group rounded-3xl bg-[#232426] p-8 transition-all duration-300"
            >
              {/* --- EFECTOS PREMIUM DE FONDO --- */}
              
              {/* 1. Resplandor trasero suave (Glow) */}
              <div className="absolute inset-0 bg-darofit-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* 2. Borde nítido que aparece */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-darofit-primary/50 transition-colors duration-300 z-20 pointer-events-none" />

              {/* --- CONTENIDO --- */}
              <div className="relative z-10">
                
                {/* Número grande de fondo */}
                <span className="absolute -right-4 -top-4 text-9xl font-bold text-gray-800/20 group-hover:text-darofit-primary/10 transition-colors pointer-events-none select-none">
                  {step.id}
                </span>
                
                {/* Contenedor del Icono (Se ilumina por dentro al hacer hover) */}
                <div className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center 
                              bg-[#18191b] border border-gray-700 shadow-lg
                              group-hover:bg-darofit-primary/10 group-hover:border-darofit-primary/50 group-hover:shadow-darofit-primary/20
                              transition-all duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-darofit-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}