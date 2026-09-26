import React from 'react';
import { ArrowDown } from 'lucide-react';
import { TopographicWave } from './TopographicWave';

interface ManifestoSectionProps {
  onNavigateToAuthors: () => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ onNavigateToAuthors }) => {
  return (
    <section id="experimento" className="relative py-20 sm:py-28 bg-[#FAF8F5] border-t border-stone-200/80 overflow-hidden text-center">
      
      {/* Onda topográfica discreta de fondo */}
      <div className="absolute inset-x-0 bottom-0 opacity-40 pointer-events-none">
        <TopographicWave height={180} opacity={0.4} />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Eyebrow */}
        <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-bold block mb-3">
          EL EXPERIMENTO
        </span>

        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-tight">
          Autores que nunca nacieron. <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-stone-700">
            Historias que sí puedes leer.
          </span>
        </h2>

        {/* Los 2 párrafos concisos */}
        <div className="mt-6 text-base sm:text-lg text-stone-700 font-sans leading-relaxed space-y-4 max-w-2xl mx-auto">
          <p>
            Cada autor de Bukia tiene una voz, obsesiones y una manera propia de contar.
          </p>
          <p className="text-stone-600">
            Usamos inteligencia artificial para construir esas voces. Después leemos, seleccionamos, editamos y publicamos únicamente las historias que merecen convertirse en libros.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button
            onClick={onNavigateToAuthors}
            className="inline-flex items-center gap-2 px-7 py-3 bg-black hover:bg-stone-800 text-white rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <span>Conocer a los autores</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
};
