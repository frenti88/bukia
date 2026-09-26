import React, { useState } from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';
import { ReplicaBookCover } from './ReplicaBookCover';
import { Bookmark, ArrowRight } from 'lucide-react';

interface BookCardProps {
  book: Book;
  numberTag?: string;
  onSelect: (book: Book) => void;
  onPreview: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  numberTag,
  onSelect,
  onPreview,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div
      onClick={() => onSelect(book)}
      className="group bg-white dark:bg-[#151619] rounded-xl border border-gray-100 dark:border-white/10 p-4 transition-all duration-300 hover:shadow-card-hover hover:border-gray-300 dark:hover:border-white/25 flex flex-col justify-between cursor-pointer text-left"
    >
      {/* Fila superior: Número / Tiempo de lectura + Marcador */}
      <div className="flex items-center justify-between mb-2.5 h-6">
        <div className="flex items-center gap-2">
          {numberTag && (
            <span className="font-mono text-[10px] font-bold text-gray-400 dark:text-stone-400">
              {numberTag}
            </span>
          )}
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-stone-100 dark:bg-white/10 text-stone-700 dark:text-stone-300 font-mono">
            {book.readingTime}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsBookmarked(!isBookmarked);
          }}
          className={`p-1 rounded hover:text-black dark:hover:text-white transition-colors ${
            isBookmarked ? 'text-black dark:text-white fill-current' : 'text-[#282828] dark:text-stone-400 hover:text-black dark:hover:text-white'
          }`}
          aria-label="Guardar libro en favoritos"
          title="Guardar"
        >
          <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-black dark:fill-white' : ''}`} />
        </button>
      </div>

      {/* Portada central del libro */}
      <div className="flex items-center justify-center my-2 py-2">
        <div className="transition-transform duration-300 group-hover:scale-105">
          <ReplicaBookCover
            id={book.id}
            title={book.title}
            author={WRITERS[book.writerId]?.displayName || book.subtitle}
            size="md"
            showShadow
          />
        </div>
      </div>

      {/* Información editorial: Título + Premisa de 1-2 líneas */}
      <div className="mt-3 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-mono text-[#282828]/70 dark:text-amber-400/90 block mb-1 uppercase tracking-wider">
            Una historia de {WRITERS[book.writerId]?.displayName || 'BUKIA'}
          </span>
          <h3 className="font-heading font-bold text-sm sm:text-base text-gray-950 dark:text-white uppercase tracking-tight line-clamp-1 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
            {book.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500 dark:text-stone-300 line-clamp-2 leading-relaxed font-sans">
            {book.premise || book.subtitle}
          </p>
        </div>

        {/* Fila inferior: Precio e Interacción 'Descubrir' */}
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs">
          <div>
            <span className="font-bold text-gray-950 dark:text-white font-mono">
              {book.priceDisplay || `$${book.price.toLocaleString('es-CO')}`}
            </span>
            <span className="text-[10px] font-mono text-gray-400 dark:text-stone-400 ml-1">
              COP
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-900 dark:text-stone-200 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 transition-all">
            <span>Descubrir</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

    </div>
  );
};
