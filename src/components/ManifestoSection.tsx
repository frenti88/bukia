import React from 'react';

interface ManifestoSectionProps {
  onNavigateToCatalog?: () => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = () => {
  return (
    <section id="experimento" className="py-24 sm:py-36 bg-white border-t border-stone-200/80 text-center relative overflow-hidden scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Identificador editorial sobrio */}
        <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-4">
          El experimento
        </span>

        {/* Declaración central */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-[1.25]">
          Creamos a los autores.<br />
          Ellos escriben.<br />
          <span className="font-serif italic font-normal text-stone-700 block mt-2">
            Nosotros leemos, descartamos y editamos.
          </span>
        </h2>

        {/* Principio editorial */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-stone-600 font-sans leading-relaxed max-w-xl mx-auto">
          Solo publicamos las historias que merecen convertirse en libros.
        </p>

      </div>
    </section>
  );
};
