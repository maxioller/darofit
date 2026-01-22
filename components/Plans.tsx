"use client";

import Link from 'next/link';
import { useRef, useState, MouseEvent } from 'react';

export default function Plans() {
  return (
    <section id="planes" className="py-24 bg-[#18191b] relative overflow-hidden">
      
      {/* Luz ambiental derecha */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Elegí tu nivel de <span className="text-darofit-primary">compromiso</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Planes adaptados a tu experiencia y necesidad de acompañamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* --- PLAN BASIC --- */}
          <div className="bg-[#232426] rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all relative group overflow-hidden flex flex-col">
            
            <SpotlightOverlay color="rgba(255,255,255,0.05)" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Plan Basic</h3>
                {/* Descripción superior */}
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Ideal si tenés experiencia y solo querés darle un orden inteligente a tu entrenamiento.
                </p>
              </div>
              
              {/* PRECIO ACTUALIZADO */}
              <div className="text-3xl font-bold text-white mb-8">
                $25.000,00 <span className="text-sm font-normal text-gray-500">/mes</span>
              </div>
              
              {/* LISTA DE PUNTOS */}
              <ul className="space-y-4 mb-8 flex-1">
                <ListItem text="Plan de entrenamiento personalizado" />
                <ListItem text="Archivos informativos" />
                <ListItem text="Guía de alimentos ricos en proteína y bajos en caloría" />
                <ListItem text="Recetario para aumentar masa muscular" />
                <ListItem text="Recetario para perder tejido adiposo" />
              </ul>

              {/* Frase de cierre (Callout) */}
              <div className="mb-6 p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-300 italic text-center">
                "Perfecto para empezar a ordenar tu proceso y avanzar con una estrategia sólida."
              </div>

              <Link href="https://wa.me/" target="_blank" className="block w-full text-center py-4 rounded-xl border border-gray-600 text-white font-bold hover:bg-white hover:text-black transition-colors text-sm tracking-wider uppercase">
                QUIERO EL PLAN BASIC
              </Link>
            </div>
          </div>

          {/* --- PLAN PREMIUM --- */}
          <div className="bg-[#232426] rounded-3xl p-8 border-2 border-darofit-primary relative group overflow-visible transform md:-translate-y-4 shadow-2xl shadow-darofit-primary/10 flex flex-col">
            
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-darofit-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase z-30 shadow-lg">
              Más Completo
            </div>

            <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
                 <SpotlightOverlay color="rgba(200, 44, 85, 0.08)" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Plan Premium</h3>
                {/* Descripción superior (Frase potente) */}
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Este plan es un trabajo en equipo. <strong className="text-white">Vos entrenás. Yo me encargo del resto.</strong>
                </p>
              </div>
              
              {/* PRECIO ACTUALIZADO */}
              <div className="text-3xl font-bold text-white mb-8">
                $ 40.000,00 <span className="text-sm font-normal text-gray-500">/mes</span>
              </div>
              
              {/* LISTA DE PUNTOS */}
              <ul className="space-y-4 mb-8 flex-1">
                <ListItem text="Plan de entrenamiento personalizado" highlight />
                <ListItem text="Videollamadas para control y evacuar dudas" highlight />
                <ListItem text="Contacto diario vía WhatsApp" highlight />
                <ListItem text="Análisis necesario de técnica de ejercicios" highlight />
                <ListItem text="Guía de alimentos ricos en proteína y bajos en caloría" />
                <ListItem text="Recetario para aumentar masa muscular" />
                <ListItem text="Recetario para perder grasa corporal" />
              </ul>

              <Link href="https://wa.me/" target="_blank" className="block w-full text-center py-4 rounded-xl bg-darofit-primary text-white font-bold hover:bg-[#a02344] transition-colors shadow-lg shadow-darofit-primary/20 text-sm tracking-wider uppercase">
                QUIERO EL PLAN PREMIUM
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Componente auxiliar para los items de la lista
function ListItem({ text, highlight = false }: { text: string, highlight?: boolean }) {
  return (
    <li className={`flex items-start ${highlight ? 'text-white font-medium' : 'text-gray-400'}`}>
      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 ${highlight ? 'bg-darofit-primary' : 'bg-gray-600'}`}></span>
      <span className="text-sm">{text}</span>
    </li>
  );
}

function SpotlightOverlay({ color }: { color: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="absolute inset-0 z-0 transition-opacity duration-300"
      style={{ opacity }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`,
        }}
      />
    </div>
  );
}