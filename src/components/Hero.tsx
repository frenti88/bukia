import React, { useState } from 'react';
import { Book } from '../types';
import { HeroBookCover } from './HeroBookCover';
import { TopographicWave } from './TopographicWave';

interface HeroProps {
  onSelectBook: (book: Book) => void;
  onOpenPreview: (book: Book) => void;
  onExploreCatalog: () => void;
  allBooks: Book[];
}

interface HeroBookConfig {
  id: string;
  title: string;
  author: string;
  zIndex: number;
  rotationClass: string;
  translateYClass: string;
  widthClass: string;
  overlapClass: string;
  shadowClass: string;
  isCenter?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectBook,
  onExploreCatalog,
  allBooks,
}) => {
  // Configuración editorial precisa para el Abanico Editorial de 5 libros
  const heroBooks: HeroBookConfig[] = [
    {
      id: 'las-personas-que-dejamos-atras',
      title: 'Las Personas que Dejamos Atrás',
      author: 'Nara',
      zIndex: 10,
      rotationClass: '-rotate-6 sm:-rotate-7',
      translateYClass: 'translate-y-6 sm:translate-y-8 md:translate-y-10 lg:translate-y-12',
      widthClass: 'w-[92px] sm:w-[122px] md:w-[152px] lg:w-[182px]',
      overlapClass: '-mr-5 sm:-mr-7 md:-mr-9 lg:-mr-11',
      shadowClass: 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.18),0_4px_8px_-2px_rgba(0,0,0,0.08)]',
    },
    {
      id: 'todo-lo-que-nunca-ocurrio',
      title: 'Todo lo que Nunca Ocurrió',
      author: 'Aren',
      zIndex: 20,
      rotationClass: '-rotate-3 sm:-rotate-[3.5deg]',
      translateYClass: 'translate-y-3 sm:translate-y-4 md:translate-y-5 lg:translate-y-6',
      widthClass: 'w-[115px] sm:w-[152px] md:w-[188px] lg:w-[220px]',
      overlapClass: '-mr-5 sm:-mr-7 md:-mr-9 lg:-mr-11',
      shadowClass: 'shadow-[0_16px_30px_-6px_rgba(0,0,0,0.22),0_6px_12px_-3px_rgba(0,0,0,0.1)]',
    },
    {
      id: 'la-ultima-persona-despierta',
      title: 'La Última Persona Despierta',
      author: 'Elio',
      zIndex: 30,
      rotationClass: 'rotate-0',
      translateYClass: 'translate-y-0',
      widthClass: 'w-[142px] sm:w-[188px] md:w-[230px] lg:w-[268px]',
      overlapClass: '',
      shadowClass: 'shadow-[0_24px_48px_-10px_rgba(0,0,0,0.34),0_10px_20px_-4px_rgba(0,0,0,0.16)]',
      isCenter: true,
    },
    {
      id: 'si-manana-no-existiera',
      title: 'Si Mañana No Existiera',
      author: 'Nilo',
      zIndex: 20,
      rotationClass: 'rotate-3 sm:rotate-[3.5deg]',
      translateYClass: 'translate-y-3 sm:translate-y-4 md:translate-y-5 lg:translate-y-6',
      widthClass: 'w-[115px] sm:w-[152px] md:w-[188px] lg:w-[220px]',
      overlapClass: '-ml-5 sm:-ml-7 md:-ml-9 lg:-ml-11',
      shadowClass: 'shadow-[0_16px_30px_-6px_rgba(0,0,0,0.22),0_6px_12px_-3px_rgba(0,0,0,0.1)]',
    },
    {
      id: 'siete-minutos-sin-mentir',
      title: 'Siete Minutos Sin Mentir',
      author: 'Vera',
      zIndex: 10,
      rotationClass: 'rotate-6 sm:rotate-7',
      translateYClass: 'translate-y-6 sm:translate-y-8 md:translate-y-10 lg:translate-y-12',
      widthClass: 'w-[92px] sm:w-[122px] md:w-[152px] lg:w-[182px]',
      overlapClass: '-ml-5 sm:-ml-7 md:-ml-9 lg:-ml-11',
      shadowClass: 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.18),0_4px_8px_-2px_rgba(0,0,0,0.08)]',
    },
  ];

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleBookClick = (bookData: { id: string; title: string; author: string }) => {
    const found = allBooks.find((b) => b.id === bookData.id || b.slug === bookData.id);
    if (found) {
      onSelectBook(found);
    } else {
      onExploreCatalog();
    }
  };

  return (
    <section id="hero" className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden bg-white text-center w-full">
      
      {/* 1. TEXTURA TOPOGRÁFICA DE FONDO: 100% SCREEN WIDTH (EDGE-TO-EDGE) */}
      <div className="absolute inset-x-0 bottom-0 w-full pointer-events-none select-none z-0">
        <TopographicWave height={340} opacity={0.65} />
      </div>

      {/* 2. CONTENEDOR DEL TITULAR PRINCIPAL Y CTAs */}
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

      {/* 3. EXHIBICIÓN EDITORIAL DE PORTADAS: PROPUESTA A · ABANICO EDITORIAL */}
      <div className="relative mt-12 sm:mt-16 w-full z-10 flex flex-col items-center">
        
        {/* Contenedor central del abanico con padding suficiente para que respire */}
        <div className="w-full flex items-end justify-center pt-4 pb-8 sm:pb-12 px-2 select-none overflow-x-clip sm:overflow-visible">
          {heroBooks.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            // Al hacer hover en un libro, se eleva temporalmente a z-40 para apreciarse por completo
            const effectiveZIndex = isHovered ? 40 : item.zIndex;

            return (
              <div
                key={item.id}
                onClick={() => handleBookClick(item)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                tabIndex={0}
                role="button"
                aria-label={`Ver libro ${item.title} por ${item.author}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleBookClick(item);
                  }
                }}
                className={`group relative flex-shrink-0 cursor-pointer outline-none transition-all duration-300 transform-gpu ${item.widthClass} ${item.overlapClass}`}
                style={{ zIndex: effectiveZIndex }}
              >
                {/* Envoltorio con rotación y traslación vertical del abanico */}
                <div
                  className={`flex flex-col items-center transition-all duration-300 ${item.rotationClass} ${item.translateYClass} group-hover:-translate-y-2 group-hover:scale-[1.02]`}
                >
                  {/* Portada Editorial Completa y Minimalista */}
                  <div className={`w-full rounded-[3px] transition-shadow duration-300 ${item.shadowClass} group-hover:shadow-[0_28px_56px_-10px_rgba(0,0,0,0.38)]`}>
                    <HeroBookCover
                      id={item.id}
                      title={item.title}
                      author={item.author}
                      isCenter={item.isCenter}
                    />
                  </div>

                  {/* Sombra de apoyo en el suelo / pedestal (por debajo del libro, nunca tapando la portada) */}
                  <div className="w-4/5 h-2.5 sm:h-3 bg-black/15 blur-md rounded-full mt-3 sm:mt-4 transition-opacity duration-300 group-hover:opacity-60 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
