import React, { useState } from 'react';
import { Book } from '../types';
import { CATEGORIES } from '../data/books';
import { BookCard } from './BookCard';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface CatalogSectionProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  onPreviewBook: (book: Book) => void;
  onBuyBook: (book: Book) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  books,
  onSelectBook,
  onPreviewBook,
  onBuyBook,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredBooks = selectedCategory === 'Todos'
    ? books
    : books.filter((b) => b.category === selectedCategory);

  return (
    <section id="catalogo" className="py-16 md:py-24 border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-ink/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-editorial-terracotta uppercase tracking-widest-editorial">
                Colección Inicial
              </span>
              <span className="font-mono text-xs text-ink-muted">· {books.length} Obras</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-light tracking-tight">
              Descubrimiento Editorial
            </h2>
            <p className="mt-2 text-sm text-ink-muted font-sans max-w-xl">
              Cinco líneas de pensamiento, cinco arquetipos literarios. Cada publicación incluye ediciones completas en PDF y EPUB por US$1.
            </p>
          </div>

          {/* Quick Format & Price Note */}
          <div className="flex items-center gap-3 font-mono text-xs text-ink-muted bg-paper-pure px-4 py-2 rounded border border-ink/10">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Entrega digital inmediata</span>
          </div>
        </div>

        {/* Category Filter Pills / Bar */}
        <div className="py-6 overflow-x-auto scrollbar-none flex items-center gap-2 border-b border-ink/5 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink ${
                  isActive
                    ? 'bg-ink text-paper font-medium shadow-sm'
                    : 'bg-paper-warm/80 text-ink-muted hover:text-ink hover:bg-paper-warm border border-ink/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Book Grid */}
        <div className="mt-10">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6">
              {filteredBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onSelect={onSelectBook}
                  onPreview={onPreviewBook}
                  onDirectBuy={onBuyBook}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-paper-warm/50 rounded border border-ink/10">
              <p className="font-serif text-xl text-ink">No hay publicaciones en esta categoría actualmente.</p>
              <button
                onClick={() => setSelectedCategory('Todos')}
                className="mt-4 px-4 py-2 bg-ink text-paper text-xs font-mono rounded"
              >
                Ver todas las publicaciones
              </button>
            </div>
          )}
        </div>

        {/* Curated Reading Promise Note */}
        <div className="mt-16 p-6 sm:p-8 bg-paper-warm border border-ink/10 rounded-[2px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest-editorial text-editorial-terracotta block mb-1">
              Garantía de Lectura Concentrada
            </span>
            <h4 className="font-serif text-xl text-ink font-medium">
              Ningún libro de BOOKIA supera las 50 páginas.
            </h4>
            <p className="mt-1 text-sm text-ink-muted">
              Si una idea puede explicarse con brillantez en 40 páginas, no la estiramos a 250 con anécdotas accesorias. Su tiempo como lector es lo primero que respetamos.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-ink-muted">
            <span className="px-3 py-1.5 bg-paper rounded border border-ink/10">
              PDF Editorial
            </span>
            <span className="px-3 py-1.5 bg-paper rounded border border-ink/10">
              EPUB Líquido
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
