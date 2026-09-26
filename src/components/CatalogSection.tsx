import React from 'react';
import { Book } from '../types';
import { BookCard } from './BookCard';
import { Sparkles, ArrowDown } from 'lucide-react';

interface CatalogSectionProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  onPreviewBook: (book: Book) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  books,
  onSelectBook,
  onPreviewBook,
  onNavigateToSection,
}) => {
  // Garantizar exactamente la colección de 10 libros
  const firstBatch = books.slice(0, 5);
  const secondBatch = books.slice(5, 10);

  const handleScrollToExperiment = () => {
    if (onNavigateToSection) {
      onNavigateToSection('experimento');
    } else {
      const el = document.getElementById('experimento');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="catalog" className="py-16 sm:py-20 bg-white dark:bg-[#0C0D0E] border-t border-gray-100 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera del Catálogo */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-stone-400 font-semibold block mb-2">
            Colección Curada
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-tight">
            Diez historias. Elige una.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 dark:text-stone-300 font-serif italic">
            Puedes empezar cualquiera gratis.
          </p>
        </div>

        {/* Primera Parte: 5 Libros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {firstBatch.map((book, idx) => (
            <BookCard
              key={book.id}
              book={book}
              numberTag={`0${idx + 1}`}
              onSelect={onSelectBook}
              onPreview={onPreviewBook}
            />
          ))}
        </div>

        {/* 3. Microinterrupción Editorial (después de los primeros libros) */}
        <div className="my-14 sm:my-20">
          <div className="relative rounded-2xl bg-[#111215] text-white p-8 sm:p-12 text-center overflow-hidden border border-white/10 shadow-xl">
            
            {/* Efecto de textura sutil de semitono */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-mono tracking-widest uppercase mb-4">
                <Sparkles className="w-3 h-3" />
                <span>NOTICIA EDITORIAL</span>
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
                Hay algo diferente en estos autores.
              </h3>

              <p className="mt-3 text-lg sm:text-xl font-serif italic text-stone-300">
                Ninguno existe.
              </p>

              <div className="mt-6">
                <button
                  onClick={handleScrollToExperiment}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black hover:bg-stone-200 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <span>Conocer el experimento</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Segunda Parte: Continuación del Catálogo (5 Libros restantes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {secondBatch.map((book, idx) => (
            <BookCard
              key={book.id}
              book={book}
              numberTag={idx + 6 < 10 ? `0${idx + 6}` : `${idx + 6}`}
              onSelect={onSelectBook}
              onPreview={onPreviewBook}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
