import React from 'react';
import { Book, Writer } from '../types';
import { BookCoverArt } from './BookCoverArt';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  featuredBook: Book;
  writer: Writer;
  onSelectBook: (book: Book) => void;
  onOpenPreview: (book: Book) => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredBook,
  writer,
  onSelectBook,
  onOpenPreview,
  onExploreCatalog,
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-ink/10">
      
      {/* Background ambient editorial grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #171615 1px, transparent 1px), linear-gradient(to bottom, #171615 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Kicker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[1px] bg-editorial-terracotta" />
          <span className="font-mono text-xs uppercase tracking-widest-editorial text-ink-muted">
            Editorial Digital de Lectura Concentrada
          </span>
        </div>

        {/* Main Grid: Split composition (Typography + Featured Book Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Thesis & Headline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ink leading-[1.08] tracking-tight">
              Libros breves. <br />
              <span className="italic font-normal text-editorial-terracotta">
                Pensamiento
              </span> sin relleno.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-ink-muted font-sans font-light leading-relaxed max-w-2xl">
              Publicamos obras originales concebidas desde la primera línea para ser leídas en menos de media hora (~50 páginas). Ideas concentradas, edición rigurosa y dirección artística de coleccionista.
            </p>

            {/* Editorial Features Strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-ink/10 py-5 max-w-xl">
              <div>
                <span className="block font-mono text-xs text-ink-muted uppercase tracking-wider">Extensión</span>
                <span className="font-serif text-lg font-medium text-ink mt-0.5 block">Máx. 50 págs</span>
              </div>
              <div className="border-l border-ink/10 pl-4">
                <span className="block font-mono text-xs text-ink-muted uppercase tracking-wider">Formatos</span>
                <span className="font-serif text-lg font-medium text-ink mt-0.5 block">PDF + EPUB</span>
              </div>
              <div className="border-l border-ink/10 pl-4">
                <span className="block font-mono text-xs text-ink-muted uppercase tracking-wider">Adquisición</span>
                <span className="font-serif text-lg font-medium text-ink mt-0.5 block">US$1 / obra</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 bg-ink text-paper rounded-[2px] font-sans font-medium text-sm tracking-wide flex items-center gap-3 hover:bg-ink-light transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                <span>Explorar Colección Inicial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenPreview(featuredBook)}
                className="px-6 py-3.5 bg-paper-pure border border-ink/20 text-ink rounded-[2px] font-sans font-medium text-sm tracking-wide flex items-center gap-2 hover:bg-paper-warm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                <BookOpen className="w-4 h-4 text-editorial-terracotta" />
                <span>Leer extracto libre</span>
              </button>
            </div>

            <p className="mt-4 text-xs font-mono text-ink-faint">
              Sin registros previos. Acceso instantáneo en cualquier dispositivo.
            </p>

          </div>

          {/* Right Column: Hero Featured Book Composition (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            
            <div className="relative group">
              
              {/* Highlight badge floating subtly */}
              <div className="absolute -top-4 -left-4 z-30 bg-paper-pure px-3 py-1 border border-ink/15 shadow-sm rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-editorial-terracotta animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink font-medium">
                  Obra Destacada
                </span>
              </div>

              {/* Book 3D Container */}
              <div 
                onClick={() => onSelectBook(featuredBook)}
                className="cursor-pointer book-3d-wrap transition-transform duration-500 hover:scale-[1.02]"
              >
                <BookCoverArt
                  book={featuredBook}
                  size="hero"
                  className="book-3d-card"
                  isInteractive
                />
              </div>

              {/* Quick Info underneath */}
              <div className="mt-5 text-center lg:text-left bg-paper-pure p-4 rounded border border-ink/10 shadow-sm max-w-sm">
                <div className="flex items-center justify-between font-mono text-xs text-ink-muted">
                  <span className="uppercase tracking-wider">{featuredBook.category}</span>
                  <span className="font-semibold text-ink">US${featuredBook.price}</span>
                </div>
                <h2 className="font-serif text-lg font-medium text-ink mt-1">
                  {featuredBook.title}
                </h2>
                <p className="text-xs text-ink-muted font-sans mt-1 line-clamp-2">
                  "{featuredBook.thesisStatement}"
                </p>
                <div className="mt-3 pt-2 border-t border-ink/10 flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenPreview(featuredBook);
                    }}
                    className="text-editorial-terracotta hover:underline font-medium flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Abrir muestra
                  </button>
                  <button
                    onClick={() => onSelectBook(featuredBook)}
                    className="text-ink hover:text-editorial-terracotta flex items-center gap-1"
                  >
                    Ver detalles →
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
