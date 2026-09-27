import React, { useState } from 'react';
import { Book } from '../types';
import { ArrowRight } from 'lucide-react';

interface FeelingsSectionProps {
  allBooks: Book[];
  onSelectBook: (book: Book) => void;
}

interface FeelingItem {
  id: string;
  feeling: string;
  premise: string;
  bookTitle: string;
  author: string;
  time: string;
}

const FEELINGS_LIST: FeelingItem[] = [
  {
    id: 'la-ultima-persona-despierta',
    feeling: 'Inquietud',
    premise: 'Una ciudad duerme. Tú sabes que algo está mal.',
    bookTitle: 'La Última Persona Despierta',
    author: 'Elio',
    time: '47 min',
  },
  {
    id: 'el-hombre-que-recordaba-el-futuro',
    feeling: 'Algo que me haga pensar',
    premise: '¿Qué harías si supieras exactamente cuándo termina tu futuro?',
    bookTitle: 'El Hombre que Recordaba el Futuro',
    author: 'Aren',
    time: '49 min',
  },
  {
    id: 'antes-de-que-olvides-mi-nombre',
    feeling: 'Algo más íntimo',
    premise: 'Recibir tu propio obituario cambia la manera de mirar tu vida.',
    bookTitle: 'Antes de que Olvides mi Nombre',
    author: 'Nara',
    time: '46 min',
  },
  {
    id: 'si-manana-no-existiera',
    feeling: 'Perderme en un misterio',
    premise: 'El tiempo continúa. El amanecer no.',
    bookTitle: 'Si Mañana No Existiera',
    author: 'Nilo',
    time: '52 min',
  },
  {
    id: 'siete-minutos-sin-mentir',
    feeling: 'Tensión',
    premise: 'Siete minutos de verdad pueden destruir años de diplomacia.',
    bookTitle: 'Siete Minutos Sin Mentir',
    author: 'Vera',
    time: '35 min',
  },
];

export const FeelingsSection: React.FC<FeelingsSectionProps> = ({
  allBooks,
  onSelectBook,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleSelectFeeling = (item: FeelingItem) => {
    const matched = allBooks.find((b) => b.id === item.id || b.slug === item.id);
    if (matched) {
      onSelectBook(matched);
    }
  };

  return (
    <section id="emociones" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-stone-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Gran Pregunta Editorial (Desktop 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-3">
              Segunda ruta de lectura
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-[1.12]">
              ¿Qué quieres sentir?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 font-serif italic leading-relaxed">
              Hay una historia para eso.
            </p>
            <p className="mt-4 text-xs sm:text-sm text-stone-500 font-sans leading-relaxed max-w-sm hidden sm:block">
              Si no buscas por autor o portada, elige por estado de ánimo. Cinco historias breves para empezar hoy gratis.
            </p>
          </div>

          {/* Columna Derecha: Lista Táctil de Opciones Emocionales (Desktop 7 cols) */}
          <div className="lg:col-span-7 flex flex-col border-t border-stone-200/80">
            {FEELINGS_LIST.map((item, index) => {
              const isHovered = hoveredId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectFeeling(item)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectFeeling(item);
                    }
                  }}
                  className="group py-5 sm:py-6 border-b border-stone-200/80 cursor-pointer outline-none transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-4">
                    
                    {/* Título de la intención / emoción */}
                    <div className="flex items-baseline gap-3 sm:gap-4">
                      <span className="font-mono text-xs text-stone-400 font-medium">
                        0{index + 1}
                      </span>
                      <h3 className="font-heading text-lg sm:text-2xl font-bold text-stone-900 group-hover:text-black group-hover:translate-x-1 transition-all">
                        {item.feeling}
                      </h3>
                    </div>

                    {/* Flecha indicadora */}
                    <div className="flex items-center gap-1.5 text-stone-400 group-hover:text-stone-950 transition-colors flex-shrink-0">
                      <span className="text-xs font-sans font-semibold hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity">
                        Empezar
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>

                  </div>

                  {/* Premisa intrigante */}
                  <p className="mt-2 pl-7 sm:pl-8 text-xs sm:text-sm text-stone-600 font-serif italic leading-relaxed">
                    «{item.premise}»
                  </p>

                  {/* Metadato discreto del libro asociado */}
                  <div className="mt-2.5 pl-7 sm:pl-8 flex items-center gap-2 text-xs font-mono text-stone-500">
                    <span className="font-semibold text-stone-900 uppercase">
                      {item.bookTitle}
                    </span>
                    <span>·</span>
                    <span>{item.author}</span>
                    <span>·</span>
                    <span className="text-amber-900 font-medium">{item.time}</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
