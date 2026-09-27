import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RevealSectionProps {
  onNavigateToAuthors?: () => void;
  onNavigateToVoices?: () => void;
}

export const RevealSection: React.FC<RevealSectionProps> = ({
  onNavigateToAuthors,
  onNavigateToVoices,
}) => {
  const handleClick = onNavigateToAuthors || onNavigateToVoices || (() => {});

  return (
    <section className="py-24 sm:py-36 bg-[#FAF8F5] border-y border-stone-200/80 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Pausa Editorial: Revelación Narrativa */}
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-amber-900 font-semibold mb-4">
          Hay algo que todavía no te contamos.
        </p>

        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-stone-950 tracking-tight leading-[1.15]">
          Ninguno de estos autores existe.
        </h2>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-serif italic text-stone-700 leading-relaxed">
          Cinco autores.<br />
          Cinco formas distintas de escribir.
        </p>

        <div className="mt-10">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 font-sans text-sm sm:text-base font-semibold text-stone-950 hover:text-amber-900 border-b-2 border-stone-950 hover:border-amber-900 pb-1 transition-all"
          >
            <span>Conocer a los autores</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
