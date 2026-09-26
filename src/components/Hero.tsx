import React, { useState } from 'react';
import { Book } from '../types';
import { ReplicaBookCover } from './ReplicaBookCover';
import { TopographicWave } from './TopographicWave';
import { RulerScrubber } from './RulerScrubber';

interface HeroProps {
  onSelectBook: (book: Book) => void;
  onOpenPreview: (book: Book) => void;
  onExploreCatalog: () => void;
  allBooks: Book[];
}

export const Hero: React.FC<HeroProps> = ({
  onSelectBook,
  onOpenPreview,
  onExploreCatalog,
  allBooks,
}) => {
  // Lista de 5 libros de la colección para el carrusel de exhibición (uno por cada voz oficial)
  const heroBooks = [
    { id: 'las-personas-que-dejamos-atras', title: 'Las Personas que Dejamos Atrás', author: 'Nara' },
    { id: 'todo-lo-que-nunca-ocurrio', title: 'Todo lo que Nunca Ocurrió', author: 'Aren' },
    { id: 'la-ultima-persona-despierta', title: 'La Última Persona Despierta', author: 'Elio' },
    { id: 'si-manana-no-existiera', title: 'Si Mañana No Existiera', author: 'Nilo' },
    { id: 'siete-minutos-sin-mentir', title: 'Siete Minutos Sin Mentir', author: 'Vera' },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Libro central (La Última Persona Despierta)

  const handleBookClick = (bookData: { id: string; title: string; author: string }) => {
    const found = allBooks.find((b) => b.id === bookData.id || b.slug === bookData.id);
    if (found) {
      onSelectBook(found);
    } else {
      onExploreCatalog();
    }
  };

  return (
    <section id="hero" className="relative pt-12 sm:pt-16 pb-12 overflow-hidden bg-white dark:bg-[#0C0D0E] text-center transition-colors duration-200">
      
      {/* Contenedor del titular principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-stone-100 dark:bg-white/10 text-stone-800 dark:text-stone-200 text-[11px] font-mono tracking-widest uppercase border border-stone-200 dark:border-white/10">
          <span>BUKIA · EDITORIAL EXPERIMENTAL</span>
        </div>

        {/* Titular: "Historias que ningún humano escribió." */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white tracking-tight leading-[1.15] sm:leading-[1.12]">
          <span>Historias que </span>
          <strong className="font-extrabold text-black dark:text-white">ningún humano escribió.</strong>
        </h1>

        {/* Supporting copy */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-stone-300 max-w-xl mx-auto leading-relaxed">
          Libros breves creados por autores artificiales y seleccionados para humanos curiosos.
        </p>

        {/* Botones de acción: "Explorar los libros" y "¿Qué es Bukia?" */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={onExploreCatalog}
            className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-stone-200 text-white dark:text-black text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-sm"
          >
            Explorar los libros
          </button>
          <a
            href="#experimento"
            className="bg-white dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/15 text-black dark:text-white border border-gray-300 dark:border-white/20 text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all inline-flex items-center"
          >
            ¿Qué es Bukia?
          </a>
        </div>

      </div>

      {/* Onda topográfica detrás de los libros */}
      <div className="relative mt-8 sm:mt-12 w-full max-w-6xl mx-auto">
        
        {/* Paisaje de onda topográfica de semitonos */}
        <div className="absolute inset-x-0 -top-16 sm:-top-20 z-0">
          <TopographicWave height={260} opacity={0.75} />
        </div>

        {/* Carrusel de libros en abanico */}
        <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-4 md:gap-6 px-4 pt-6 pb-2 overflow-x-auto no-scrollbar">
          {heroBooks.map((item, idx) => {
            const isCenter = idx === activeIndex;
            const distance = Math.abs(idx - activeIndex);

            let scaleClass = 'scale-90 opacity-75';
            let zIndexClass = 'z-10';
            if (distance === 0) {
              scaleClass = 'scale-105 sm:scale-110 opacity-100';
              zIndexClass = 'z-30';
            } else if (distance === 1) {
              scaleClass = 'scale-95 sm:scale-100 opacity-90';
              zIndexClass = 'z-20';
            }

            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveIndex(idx);
                  handleBookClick(item);
                }}
                className={`transition-all duration-300 transform cursor-pointer flex-shrink-0 ${scaleClass} ${zIndexClass}`}
              >
                <div className="relative group">
                  <ReplicaBookCover
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    size={isCenter ? 'hero' : 'md'}
                    showShadow
                    className="group-hover:-translate-y-2 transition-transform duration-300"
                  />
                  {/* Máscara de desvanecimiento inferior */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white dark:from-[#0C0D0E] via-white/40 dark:via-[#0C0D0E]/40 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dial de regla inferior con puntero */}
        <div className="mt-4 flex justify-center">
          <RulerScrubber
            variant="arrow"
            tickCount={45}
            onSelectIndex={(tickIdx) => {
              const mapped = Math.min(4, Math.floor((tickIdx / 45) * 5));
              setActiveIndex(mapped);
            }}
          />
        </div>

      </div>

    </section>
  );
};
