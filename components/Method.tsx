"use client";

import { motion } from "framer-motion";

export default function Method() {
  
  const steps = [
    {
      id: "01",
      title: "Movilidad y Salud",
      description: "La primer parte de movilidad, dándole salud a nuestro sistema locomotor para preparar el cuerpo.",
      // Icono: Persona estirando / Actividad (Representando movilidad)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-darofit-primary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Bloque de Fuerza",
      description: "La parte central y más importante. Un bloque de fuerza donde hacemos hincapié en mejorar, fortalecer y desarrollar la musculatura del cuerpo.",
      // Icono: Pesa (Representando Fuerza)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-darofit-primary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 6.5l11 11" /><path d="M21 21l-1-1" /><path d="M3 3l1 1" /><path d="M18 22l4-4" /><path d="M2 6l4-4" /><path d="M3 10l7.972-7.972a6 6 0 0 1 8.486 8.486L11.5 18.5Z" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Cardio + Fuerza",
      description: "El tercer bloque combina cardio y fuerza, ayudándonos a perder tejido adiposo más rápido que cualquier otro método.",
      // Icono: Fuego (Representando quema de grasa / intensidad)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-darofit-primary transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
           <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.011-.2-6 1.6 2.5 5.5 5.5 5.5 10a5.5 5.5 0 1 1-11 0c0-2.316 2.15-4.5 4.204-6.496.066.97.22 1.884.22 1.884z" />
        </svg>
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
            Recomposición Corporal <span className="text-darofit-primary">Consciente</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto space-y-4"
          >
             <p className="text-xl text-white font-medium">
               El <strong className="text-darofit-primary">Método R2C</strong> es un entrenamiento inteligente.
             </p>
             <p className="text-gray-400 text-lg">
               No es magia, es la ubicación de cada bloque en el momento justo para maximizar resultados.
             </p>
          </motion.div>
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
              className="relative group rounded-3xl bg-[#232426] p-8 transition-all duration-300 flex flex-col h-full"
            >
              {/* --- EFECTOS PREMIUM DE FONDO --- */}
              
              {/* 1. Resplandor trasero suave (Glow) */}
              <div className="absolute inset-0 bg-darofit-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* 2. Borde nítido que aparece */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-darofit-primary/50 transition-colors duration-300 z-20 pointer-events-none" />

              {/* --- CONTENIDO --- */}
              <div className="relative z-10 flex-1 flex flex-col">
                
                {/* Número grande de fondo */}
                <span className="absolute -right-4 -top-4 text-9xl font-bold text-gray-800/20 group-hover:text-darofit-primary/10 transition-colors pointer-events-none select-none">
                  {step.id}
                </span>
                
                {/* Contenedor del Icono */}
                <div className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center 
                              bg-[#18191b] border border-gray-700 shadow-lg
                              group-hover:bg-darofit-primary/10 group-hover:border-darofit-primary/50 group-hover:shadow-darofit-primary/20
                              transition-all duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-darofit-primary transition-colors duration-300">
                  {step.title}
                </h3>
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