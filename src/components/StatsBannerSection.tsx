import React from 'react';
import { ReplicaBookCover } from './ReplicaBookCover';
import { TopographicWave } from './TopographicWave';
import { RulerScrubber } from './RulerScrubber';
import { Book } from '../types';

interface StatsBannerSectionProps {
  onExplore: () => void;
  onSelectBook: (book: Book) => void;
  allBooks: Book[];
}

export const StatsBannerSection: React.FC<StatsBannerSectionProps> = ({
  onExplore,
  onSelectBook,
  allBooks,
}) => {
  // Libros en el abanico curvado
  const arcBooks = [
    { id: 'talking-to-strangers', title: 'Hablar con Extraños', author: 'Malcolm Gladwell', rotation: -16, translateY: 15 },
    { id: 'thinking-fast-and-slow', title: 'Pensar Rápido, Pensar Despacio', author: 'Daniel Kahneman', rotation: -8, translateY: 5 },
    { id: 'psychology-of-money', title: 'La Psicología del Dinero', author: 'Morgan Housel', rotation: 0, translateY: 0 },
    { id: 'think-again', title: 'Piénsalo Otra Vez', author: 'Adam Grant', rotation: 8, translateY: 5 },
    { id: 'company-of-one', title: 'Empresa de Uno', author: 'Paul Jarvis', rotation: 16, translateY: 15 },
  ];

  return (
    <section className="py-20 bg-white text-center overflow-hidden border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloque de cabecera */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight">
            <span>Eleva tu Biblioteca. </span> <br />
            <strong className="font-extrabold text-black">Expande tu Mente</strong>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Deja atrás el scroll infinito y comienza a descubrir. Explora nuestra colección de obras esenciales y lecturas profundas diseñadas para el lector intencional.
          </p>

          <div className="mt-6">
            <button
              onClick={onExplore}
              className="bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-sm"
            >
              Explorar Colección
            </button>
          </div>
        </div>

        {/* Fila de 4 métricas */}
        <div className="mt-14 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              500+
            </span>
            <span className="block text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">
              Ediciones Curadas
            </span>
          </div>

          <div>
            <span className="block text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              12K+
            </span>
            <span className="block text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">
              Lectores Intencionales
            </span>
          </div>

          <div>
            <span className="block text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              4.9/5
            </span>
            <span className="block text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">
              Calificación de Impacto
            </span>
          </div>

          <div>
            <span className="block text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              1M+
            </span>
            <span className="block text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">
              Páginas Leídas
            </span>
          </div>
        </div>

        {/* Abanico curvado de libros sobre onda topográfica */}
        <div className="relative mt-16 max-w-5xl mx-auto pt-6">
          
          {/* Fondo de onda topográfica de semitonos */}
          <div className="absolute inset-x-0 bottom-4 z-0">
            <TopographicWave height={200} opacity={0.6} />
          </div>

          {/* Arco de libros */}
          <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-4 md:gap-6 py-6 overflow-x-auto no-scrollbar">
            {arcBooks.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const found = allBooks.find((b) => b.id === item.id || b.slug === item.id);
                  if (found) onSelectBook(found);
                }}
                style={{
                  transform: `rotate(${item.rotation}deg) translateY(${item.translateY}px)`,
                }}
                className="transition-transform duration-300 hover:scale-105 hover:z-30 cursor-pointer flex-shrink-0"
              >
                <ReplicaBookCover
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  size="hero"
                  showShadow
                />
              </div>
            ))}
          </div>

          {/* Divisor de regla inferior con estrella */}
          <div className="mt-8 flex justify-center">
            <RulerScrubber variant="star" tickCount={41} />
          </div>

        </div>

      </div>
    </section>
  );
};
