"use client";

import Link from 'next/link';
import { useRef, useState, MouseEvent } from 'react';

export default function Plans() {
  return (
    // CAMBIO: Fondo #18191b
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
          {/* CAMBIO: bg-[#232426] */}
          <div className="bg-[#232426] rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all relative group overflow-hidden flex flex-col">
            
            <SpotlightOverlay color="rgba(255,255,255,0.05)" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Plan Basic</h3>
                <p className="text-gray-400 mt-2 text-sm h-10">
                  Ideal si ya tienes experiencia y solo necesitas orden y estrategia.
                </p>
              </div>
              <div className="text-3xl font-bold text-white mb-8">
                Consultar <span className="text-sm font-normal text-gray-500">/mes</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span>
                  Plan de entrenamiento personalizado
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span>
                  Guía de alimentos
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span>
                  Recetarios
                </li>
              </ul>

              <Link href="https://wa.me/" target="_blank" className="block w-full text-center py-4 rounded-xl border border-gray-600 text-white font-bold hover:bg-white hover:text-black transition-colors text-sm tracking-wider uppercase">
                QUIERO EL PLAN BASIC
              </Link>
            </div>
          </div>

          {/* --- PLAN PREMIUM --- */}
          {/* CAMBIO: bg-[#232426] y borde de marca */}
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
                <p className="text-gray-400 mt-2 text-sm h-10">
                  Acompañamiento real 1 a 1. Vos entrenás, yo me encargo del resto.
                </p>
              </div>
              <div className="text-3xl font-bold text-white mb-8">
                Consultar <span className="text-sm font-normal text-gray-500">/mes</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-white font-medium">
                  <CheckIcon />
                  <span className="ml-3">Todo lo del Plan Basic</span>
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon />
                  <span className="ml-3">Seguimiento 1 a 1 por WhatsApp</span>
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon />
                  <span className="ml-3">Videollamadas de control</span>
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon />
                  <span className="ml-3">Análisis técnico de ejercicios</span>
                </li>
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

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-darofit-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}