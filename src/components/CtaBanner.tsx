import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface CtaBannerProps {
  onExploreCatalog?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onExploreCatalog }) => {
  const handleClick = () => {
    if (onExploreCatalog) {
      onExploreCatalog();
    } else {
      const el = document.getElementById('catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tarjeta oscura con curvas topográficas existentes */}
        <div className="relative bg-[#111317] text-white rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Curvas topográficas de fondo */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg viewBox="0 0 1000 400" className="w-full h-full object-cover">
              <path d="M0,200 Q250,50 500,200 T1000,200" stroke="#FFFFFF" strokeWidth="1" fill="none" />
              <path d="M0,250 Q250,100 500,250 T1000,250" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 4" fill="none" />
              <path d="M0,300 Q250,150 500,300 T1000,300" stroke="#FFFFFF" strokeWidth="1" fill="none" />
              <path d="M0,350 Q250,200 500,350 T1000,350" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 4" fill="none" />
            </svg>
          </div>

          {/* Textos izquierda: Concisos y directos */}
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400 font-semibold block mb-2">
              LECTURA SIN FRICCIÓN
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Tu próxima historia te espera.
            </h3>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed font-serif italic">
              Empieza a leer en menos de diez segundos. Sin registros, sin tarjeta, sin fricción.
            </p>
          </div>

          {/* Botón dominante derecha */}
          <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end">
            <button
              onClick={handleClick}
              className="bg-white hover:bg-stone-100 text-black text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-lg"
            >
              <BookOpen className="w-4 h-4" />
              <span>Elegir una historia</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
