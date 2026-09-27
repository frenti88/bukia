import React from 'react';

interface ManifestoSectionProps {
  onNavigateToCatalog?: () => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = () => {
  return (
    <section id="experimento" className="py-24 sm:py-36 bg-[#FAF8F5] border-t border-stone-200/80 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Identificador editorial sobrio */}
        <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-4">
          El experimento
        </span>

        {/* Declaración central */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-[1.2]">
          Construimos las voces.<br />
          Ellas escriben.<br />
          <span className="font-serif italic font-normal text-stone-700">
            Nosotros leemos, descartamos y editamos.
          </span>
        </h2>

        {/* Principio editorial */}
        <p className="mt-8 text-base sm:text-xl text-stone-600 font-sans leading-relaxed max-w-xl mx-auto">
          Solo publicamos lo que merece convertirse en libro.
        </p>

      </div>
    </section>
  );
};
