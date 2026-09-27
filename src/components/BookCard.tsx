import React from 'react';
import { Book } from '../types';
import { ReplicaBookCover } from './ReplicaBookCover';
import { ArrowRight } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
  onPreview?: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  onSelect,
}) => {
  return (
    <article
      onClick={() => onSelect(book)}
      className="group bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 transition-all duration-300 hover:border-stone-400 hover:shadow-card-hover flex flex-col justify-between cursor-pointer text-left"
    >
      {/* 1. Portada del libro (Protagonista) */}
      <div className="flex items-center justify-center py-3 mb-2">
        <div className="transition-transform duration-300 group-hover:scale-[1.03]">
          <ReplicaBookCover
            id={book.id}
            title={book.title}
            author={book.subtitle}
            size="md"
            showShadow
          />
        </div>
      </div>

      {/* 2. Texto Editorial: Título y Premisa */}
      <div className="flex-1 flex flex-col justify-between mt-2">
        <div>
          <h3 className="font-heading font-bold text-base sm:text-lg text-stone-950 tracking-tight leading-snug line-clamp-2 group-hover:text-amber-900 transition-colors uppercase">
            {book.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed font-sans">
            {book.premise || book.shortDescription || book.subtitle}
          </p>
        </div>

        {/* 3. Metadato limpio y Acción: "47 min · $4.900" y "Descubrir →" */}
        <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between text-xs">
          <span className="font-mono text-xs text-stone-500 font-medium">
            {book.readingTime} · $4.900
          </span>

          <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-stone-900 group-hover:text-black group-hover:translate-x-1 transition-all">
            <span>Descubrir</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

    </article>
  );
};
