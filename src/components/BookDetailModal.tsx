import React, { useEffect } from 'react';
import { Book, Writer } from '../types';
import { WRITERS } from '../data/writers';
import { BOOKS_LIST } from '../data/books';
import { BookCoverArt } from './BookCoverArt';
import { X, BookOpen, ShoppingBag, Clock, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  onOpenPreview: (book: Book) => void;
  onBuy: (book: Book) => void;
  onSelectRelated: (book: Book) => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  onClose,
  onOpenPreview,
  onBuy,
  onSelectRelated,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (book) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [book, onClose]);

  if (!book) return null;

  const writer = WRITERS[book.writerId];
  const relatedBooks = BOOKS_LIST.filter((b) => b.id !== book.id).slice(0, 3);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-ink/70 backdrop-blur-sm flex justify-center items-start p-0 sm:p-4 md:p-6 transition-all"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-detail-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-paper w-full max-w-4xl min-h-screen sm:min-h-0 sm:rounded-[2px] shadow-2xl overflow-hidden my-0 sm:my-8 border border-ink/10 flex flex-col">
        
        {/* Top Floating Close Button */}
        <div className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md px-6 py-4 border-b border-ink/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
            <span className="font-semibold text-ink uppercase tracking-wider">{book.category}</span>
            <span>·</span>
            <span>№ 0{writer?.archetypeCode.charCodeAt(0) - 64 || 1}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-ink hover:text-editorial-terracotta rounded-full hover:bg-paper-warm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            aria-label="Cerrar detalle del libro"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 md:p-12 pb-28 sm:pb-12 space-y-12">
          
          {/* Main Hero Grid of the Book Detail */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Left Cover (5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="book-3d-wrap max-w-[280px] w-full">
                <BookCoverArt
                  book={book}
                  size="lg"
                  className="w-full book-3d-card"
                  isInteractive
                />
              </div>

              {/* Formats specification pill */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-ink-muted bg-paper-warm py-2 px-4 rounded border border-ink/5 w-full">
                <span>Formatos incluidos:</span>
                <span className="font-semibold text-ink">PDF</span>
                <span>+</span>
                <span className="font-semibold text-ink">EPUB</span>
              </div>
            </div>

            {/* Right Information & CTAs (7 cols) */}
            <div className="md:col-span-7 flex flex-col">
              
              {/* Writer voice badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-editorial-terracotta font-medium tracking-wide">
                  {writer?.displayName}
                </span>
                <span className="text-ink-muted text-xs font-mono">({writer?.archetype})</span>
              </div>

              {/* Title & Subtitle */}
              <h1 id="book-detail-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink leading-[1.1] tracking-tight">
                {book.title}
              </h1>

              <p className="mt-3 font-serif italic text-lg text-ink-muted leading-relaxed">
                {book.subtitle}
              </p>

              {/* Metrics strip */}
              <div className="mt-6 grid grid-cols-3 gap-3 py-4 border-y border-ink/10 text-center font-mono">
                <div>
                  <span className="block text-[10px] text-ink-muted uppercase">Páginas</span>
                  <span className="text-sm font-semibold text-ink mt-0.5 block">{book.pageCount} págs</span>
                </div>
                <div className="border-l border-ink/10">
                  <span className="block text-[10px] text-ink-muted uppercase">Lectura</span>
                  <span className="text-sm font-semibold text-ink mt-0.5 block">{book.readingTime}</span>
                </div>
                <div className="border-l border-ink/10">
                  <span className="block text-[10px] text-ink-muted uppercase">Precio</span>
                  <span className="text-sm font-semibold text-ink mt-0.5 block">US${book.price}.00</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-4 text-ink-muted font-sans text-sm sm:text-base leading-relaxed">
                <p>{book.description}</p>
              </div>

              {/* Thesis Quote */}
              <div className="mt-6 p-4 bg-paper-warm border-l-2 border-ink rounded-r">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted mb-1">
                  Tesis Central
                </span>
                <p className="font-serif italic text-sm text-ink leading-snug">
                  "{book.thesisStatement}"
                </p>
              </div>

              {/* Dual Action Buttons (Desktop) */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onBuy(book)}
                  className="flex-1 py-3.5 px-6 bg-ink text-paper rounded-[2px] font-sans font-medium text-sm flex items-center justify-center gap-2 hover:bg-ink-light transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Comprar edición completa · US${book.price}</span>
                </button>

                <button
                  onClick={() => onOpenPreview(book)}
                  className="py-3.5 px-6 bg-paper-pure border border-ink/20 text-ink rounded-[2px] font-sans font-medium text-sm flex items-center justify-center gap-2 hover:bg-paper-warm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  <BookOpen className="w-4 h-4 text-editorial-terracotta" />
                  <span>Leer muestra</span>
                </button>
              </div>

            </div>

          </div>

          {/* Section: Atmosphere & Editorial Context */}
          {book.editorialImages && book.editorialImages[0] && (
            <div className="pt-8 border-t border-ink/10">
              <span className="font-mono text-xs uppercase tracking-widest-editorial text-ink-muted block mb-4">
                Atmósfera y Entorno Editorial
              </span>
              <div className="relative rounded overflow-hidden aspect-[21/9] bg-paper-warm">
                <img
                  src={book.editorialImages[0].url}
                  alt={book.editorialImages[0].caption}
                  className="w-full h-full object-cover grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs font-mono text-ink-muted text-right">
                {book.editorialImages[0].caption}
              </p>
            </div>
          )}

          {/* Section: The Voice Behind the Book */}
          {writer && (
            <div className="p-6 bg-paper-warm rounded border border-ink/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-terracotta block">
                    Firma Editorial
                  </span>
                  <h4 className="font-serif text-xl text-ink font-medium">
                    {writer.displayName} · {writer.archetype}
                  </h4>
                  <p className="mt-2 text-xs text-ink-muted max-w-xl font-sans leading-relaxed">
                    {writer.voiceDescription}
                  </p>
                </div>
                <div className="text-right font-mono text-xs text-ink-faint flex-shrink-0">
                  <span>Cadencia: {writer.writingPrinciples.rhythm.slice(0, 32)}...</span>
                </div>
              </div>
            </div>
          )}

          {/* Section: Related Books */}
          <div className="pt-8 border-t border-ink/10">
            <h4 className="font-serif text-2xl text-ink font-light mb-6">
              Otras lecturas concentradas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedBooks.map((relBook) => (
                <div
                  key={relBook.id}
                  onClick={() => onSelectRelated(relBook)}
                  className="p-4 bg-paper-pure border border-ink/10 rounded cursor-pointer hover:border-ink/30 transition-all flex items-center gap-4 group"
                >
                  <BookCoverArt book={relBook} size="sm" showShadow={false} />
                  <div>
                    <span className="font-mono text-[10px] text-ink-muted uppercase block">
                      {relBook.category}
                    </span>
                    <h5 className="font-serif text-sm font-medium text-ink group-hover:text-editorial-terracotta transition-colors line-clamp-1">
                      {relBook.title}
                    </h5>
                    <span className="font-mono text-xs text-ink mt-1 block">
                      US${relBook.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Sticky Bottom Bar */}
        <div className="sm:hidden fixed bottom-0 inset-x-0 bg-paper/95 backdrop-blur-md p-4 border-t border-ink/10 shadow-lg flex items-center gap-3 z-50">
          <button
            onClick={() => onOpenPreview(book)}
            className="flex-1 py-3 bg-paper-pure border border-ink/20 text-ink rounded text-xs font-mono font-medium flex items-center justify-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-editorial-terracotta" />
            <span>Muestra</span>
          </button>
          <button
            onClick={() => onBuy(book)}
            className="flex-[2] py-3 bg-ink text-paper rounded text-xs font-mono font-medium flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Comprar · US${book.price}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
