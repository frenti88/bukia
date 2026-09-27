import React, { useState } from 'react';
import { Book } from '../types';
import { ReplicaBookCover } from './ReplicaBookCover';
import { TopographicWave } from './TopographicWave';

interface HeroProps {
  onSelectBook: (book: Book) => void;
  onOpenPreview: (book: Book) => void;
  onExploreCatalog: () => void;
  allBooks: Book[];
}

export const Hero: React.FC<HeroProps> = ({
  onSelectBook,
  onExploreCatalog,
  allBooks,
}) => {
  // 5 libros representativos de la colección de 10
  const heroBooks = [
    { id: 'las-personas-que-dejamos-atras', title: 'Las Personas que Dejamos Atrás', author: 'Nara' },
    { id: 'todo-lo-que-nunca-ocurrio', title: 'Todo lo que Nunca Ocurrió', author: 'Aren' },
    { id: 'la-ultima-persona-despierta', title: 'La Última Persona Despierta', author: 'Elio' },
    { id: 'si-manana-no-existiera', title: 'Si Mañana No Existiera', author: 'Nilo' },
    { id: 'siete-minutos-sin-mentir', title: 'Siete Minutos Sin Mentir', author: 'Vera' },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Central: La Última Persona Despierta

  const handleBookClick = (bookData: { id: string; title: string; author: string }, idx: number) => {
    setActiveIndex(idx);
    const found = allBooks.find((b) => b.id === bookData.id || b.slug === bookData.id);
    if (found) {
      onSelectBook(found);
    } else {
      onExploreCatalog();
    }
  };

  return (
    <section id="hero" className="relative pt-16 sm:pt-24 pb-16 overflow-hidden bg-white text-center">
      
      {/* Contenedor del titular principal */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Titular exacto e inmutable */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-950 tracking-tight leading-[1.12]">
          Historias que ningún humano escribió.
        </h1>

        {/* Supporting copy exacto */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-stone-600 max-w-xl mx-auto font-sans leading-relaxed">
          Historias breves para terminar hoy.<br className="hidden sm:inline" />
          Empieza cualquiera gratis.
        </p>

        {/* Acciones principales con jerarquía editorial clara */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreCatalog}
            className="w-full sm:w-auto bg-black hover:bg-stone-800 text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            Elegir una historia
          </button>
          
          <a
            href="#experimento"
            className="text-stone-500 hover:text-stone-900 text-xs sm:text-sm font-sans font-medium transition-colors py-2 px-3"
          >
            ¿Qué es BUKIA?
          </a>
        </div>
      </div>

      {/* Exhibición editorial de portadas en abanico con pedestal sutil */}
      <div className="relative mt-12 sm:mt-16 w-full max-w-6xl mx-auto">
        
        {/* Onda topográfica discreta de fondo */}
        <div className="absolute inset-x-0 -top-12 sm:-top-16 z-0 pointer-events-none opacity-60">
          <TopographicWave height={240} opacity={0.6} />
        </div>

        {/* Galería de libros centrada */}
        <div className="relative z-10 flex items-end justify-center gap-3 sm:gap-6 md:gap-7 px-4 pt-6 pb-6 overflow-x-auto no-scrollbar">
          {heroBooks.map((item, idx) => {
            const isCenter = idx === activeIndex;
            const distance = Math.abs(idx - activeIndex);

            let scaleClass = 'scale-90 opacity-80';
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
                onClick={() => handleBookClick(item, idx)}
                className={`transition-all duration-300 transform cursor-pointer flex-shrink-0 ${scaleClass} ${zIndexClass}`}
              >
                <div className="relative group flex flex-col items-center">
                  <ReplicaBookCover
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    size={isCenter ? 'hero' : 'md'}
                    showShadow
                    className="group-hover:-translate-y-2 transition-transform duration-300"
                  />
                  {/* Máscara de desvanecimiento inferior suave */}
                  <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none opacity-50" />
                  {/* Sombra de apoyo en pedestal */}
                  <div className="w-4/5 h-2 bg-black/10 blur-sm rounded-full mt-2 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
