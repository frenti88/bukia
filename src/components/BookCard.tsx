import React from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';
import { BookCoverArt } from './BookCoverArt';
import { BookOpen, ShoppingBag, ArrowUpRight } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
  onPreview: (book: Book) => void;
  onDirectBuy: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  onSelect,
  onPreview,
  onDirectBuy,
}) => {
  const writer = WRITERS[book.writerId];

  return (
    <article
      className="group relative flex flex-col cursor-pointer transition-all duration-300"
      onClick={() => onSelect(book)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(book);
        }
      }}
      aria-label={`Ver detalles de ${book.title}, por ${writer?.displayName || 'Bookia'}`}
    >
      {/* Cover container with 3D feel and hover reveal */}
      <div className="relative book-3d-wrap aspect-book w-full overflow-hidden rounded-[2px] bg-paper-warm border border-ink/5">
        <BookCoverArt
          book={book}
          size="md"
          className="w-full h-full book-3d-card"
          isInteractive
        />

        {/* Subtle quick-action hover bar (desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between z-30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPreview(book);
            }}
            className="px-2.5 py-1.5 bg-paper text-ink rounded-[2px] text-xs font-mono font-medium flex items-center gap-1.5 hover:bg-paper-warm transition-colors shadow-sm"
            aria-label={`Leer muestra de ${book.title}`}
          >
            <BookOpen className="w-3 h-3 text-editorial-terracotta" />
            <span>Muestra</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDirectBuy(book);
            }}
            className="px-2.5 py-1.5 bg-editorial-terracotta text-paper rounded-[2px] text-xs font-mono font-medium flex items-center gap-1.5 hover:bg-editorial-terracotta/90 transition-colors shadow-sm"
            aria-label={`Comprar ${book.title} por US$1`}
          >
            <ShoppingBag className="w-3 h-3" />
            <span>US${book.price}</span>
          </button>
        </div>
      </div>

      {/* Editorial Typographic Metadata Underneath */}
      <div className="mt-3.5 flex flex-col flex-1">
        
        {/* Category & Price line */}
        <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-ink-muted uppercase">
          <span className="line-clamp-1">{book.category}</span>
          <span className="font-semibold text-ink font-mono ml-2">US${book.price}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-normal text-ink leading-snug mt-1 group-hover:text-editorial-terracotta transition-colors line-clamp-1">
          {book.title}
        </h3>

        {/* Writer Voice */}
        <p className="font-mono text-xs text-ink-muted tracking-wide mt-0.5">
          {writer?.displayName} · <span className="opacity-75">{book.readingTime}</span>
        </p>

      </div>
    </article>
  );
};
