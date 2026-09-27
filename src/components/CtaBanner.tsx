import React from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 sm:py-32 bg-white text-center border-t border-stone-200/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Pregunta de Cierre Editorial */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-tight">
          ¿Cuál será la primera?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-stone-600 font-serif italic">
          Empieza a leer en menos de diez segundos. Muestra gratis en tu navegador.
        </p>

        {/* CTA Directo */}
        <div className="mt-8">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 bg-black hover:bg-stone-800 text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            <span>Elegir una historia</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
