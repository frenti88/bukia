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
  // Lista de libros para el carrusel de exhibición
  const heroBooks = [
    { id: 'start-with-why', title: 'Empieza con el Porqué', author: 'Simon Sinek' },
    { id: 'blink', title: 'Inteligencia Intuitiva', author: 'Malcolm Gladwell' },
    { id: 'psychology-of-money', title: 'La Psicología del Dinero', author: 'Morgan Housel' },
    { id: 'atomic-habits', title: 'Hábitos Atómicos', author: 'James Clear' },
    { id: 'grit', title: 'Grit: El Poder de la Pasión', author: 'Angela Duckworth' },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Libro central (Psicología del Dinero)

  const handleBookClick = (bookData: { id: string; title: string; author: string }) => {
    const found = allBooks.find((b) => b.id === bookData.id || b.slug === bookData.id);
    if (found) {
      onSelectBook(found);
    } else {
      onExploreCatalog();
    }
  };

  return (
    <section id="hero" className="relative pt-12 sm:pt-16 pb-12 overflow-hidden bg-white text-center">
      
      {/* Contenedor del titular principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Titular en dos pesos tipográficos */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-[1.15] sm:leading-[1.12]">
          <span>Sumérgete en </span>
          <span className="inline-flex items-center align-middle mx-1 px-1.5 py-0.5 bg-amber-100/80 border border-amber-300 rounded text-amber-900 text-xs sm:text-sm font-mono transform -rotate-3 shadow-xs">
            📖 FILOSOFÍA PRÁCTICA
          </span>
          <span> el mundo</span> <br />
          <span>de la </span>
          <strong className="font-extrabold text-black">lectura intencional!</strong>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Ediciones digitales curadas diseñadas para asimilarse en menos de 30 minutos. Ideas profundas, síntesis rigurosa y máximo valor para tu tiempo.
        </p>

        {/* Botones de acción */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={onExploreCatalog}
            className="bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-sm"
          >
            Comenzar ahora
          </button>
          <button
            onClick={onExploreCatalog}
            className="bg-white hover:bg-gray-50 text-black border border-gray-300 text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all"
          >
            Registrarse
          </button>
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
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
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
