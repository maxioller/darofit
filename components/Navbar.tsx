"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Dumbbell, Trophy, ScrollText, User, Menu, X } from 'lucide-react';

// --- CONFIGURACIÓN ---
interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
}

const brandGradient = "radial-gradient(circle, rgba(225, 29, 72, 0.2) 0%, rgba(225, 29, 72, 0.1) 50%, rgba(225, 29, 72, 0) 100%)";

const menuItems: MenuItem[] = [
  { icon: <Dumbbell className="h-5 w-5" />, label: "El Método", href: "#metodo", gradient: brandGradient },
  { icon: <Trophy className="h-5 w-5" />, label: "Resultados", href: "#resultados", gradient: brandGradient },
  { icon: <ScrollText className="h-5 w-5" />, label: "Planes", href: "#planes", gradient: brandGradient },
  { icon: <User className="h-5 w-5" />, label: "Sobre Mí", href: "#sobre-mi", gradient: brandGradient },
];

// --- VARIANTES DE ANIMACIÓN ---
const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav 
          className={`flex items-center justify-between px-6 py-2 rounded-2xl transition-all duration-500 ${
            scrolled 
              ? "bg-[#d9d4d1]/90 backdrop-blur-xl border border-gray-300/50 shadow-lg shadow-black/10" 
              : "bg-transparent border border-transparent"
          }`}
        >
          
          {/* --- LOGO CON FILTRO AUTOMÁTICO --- */}
          <Link href="/" className="relative z-20 group flex items-center">
             <Image 
                src="/logo.png" 
                alt="Darofit Logo" 
                width={120} 
                height={40} 
                // AQUÍ ESTÁ LA MAGIA:
                // Si NO hay scroll (!scrolled), aplicamos "brightness-0 invert" que lo vuelve blanco puro.
                // Si hay scroll, quitamos la clase y se ve original (oscuro).
                className={`object-contain h-10 w-auto transition-all duration-500 ${
                    !scrolled ? "brightness-0 invert opacity-90" : "opacity-100"
                }`}
                priority
             />
          </Link>

          {/* --- MENÚ DESKTOP --- */}
          <ul className="hidden md:flex items-center gap-2 relative z-10">
            {menuItems.map((item) => (
              <motion.li key={item.label} className="relative group">
                <motion.div
                  className="block rounded-xl overflow-visible relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Glow */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                    variants={glowVariants}
                    style={{ background: item.gradient, opacity: 0 }}
                  />

                  {/* Cara Frontal (Texto cambia de color) */}
                  <motion.a
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors duration-500 rounded-xl ${
                        scrolled ? "text-gray-700 group-hover:text-black" : "text-gray-300 group-hover:text-white"
                    }`}
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                  >
                    <span className="group-hover:text-darofit-primary transition-colors duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.a>

                  {/* Cara Trasera */}
                  <motion.a
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors duration-500 rounded-xl ${
                        scrolled ? "text-gray-900" : "text-white"
                    }`}
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center top", transform: "rotateX(90deg)" }}
                  >
                    <span className="text-darofit-primary">
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}
          </ul>

          {/* CTA + MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <Link 
              href="#planes"
              className="hidden sm:block px-5 py-2.5 rounded-xl bg-darofit-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-[#a02344] transition-all shadow-lg shadow-darofit-primary/20"
            >
              Empezar
            </Link>

            {/* Botón Hamburguesa (Cambia de color) */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-500 ${
                scrolled ? "text-gray-800 hover:bg-black/10" : "text-white hover:bg-white/10"
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </nav>
      </div>

      {/* --- MENÚ MÓVIL --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#18191b] border-b border-gray-800 p-4 md:hidden shadow-2xl z-40"
          >
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all"
                  >
                    <span className="text-darofit-primary">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                 <Link 
                  href="#planes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center p-3 rounded-xl bg-darofit-primary text-white font-bold uppercase tracking-wider"
                >
                  Empezar Cambio
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}