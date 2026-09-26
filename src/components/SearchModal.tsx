import React, { useState, useEffect, useRef } from 'react';
import { Book } from '../types';
import { BOOKS_LIST } from '../data/books';
import { WRITERS } from '../data/writers';
import { BookCoverArt } from './BookCoverArt';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBook: (book: Book) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectBook,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const results = normalizedQuery === ''
    ? BOOKS_LIST
    : BOOKS_LIST.filter((book) => {
        const writer = WRITERS[book.writerId];
        return (
          book.title.toLowerCase().includes(normalizedQuery) ||
          book.subtitle.toLowerCase().includes(normalizedQuery) ||
          book.category.toLowerCase().includes(normalizedQuery) ||
          book.thesisStatement.toLowerCase().includes(normalizedQuery) ||
          writer?.displayName.toLowerCase().includes(normalizedQuery) ||
          writer?.archetype.toLowerCase().includes(normalizedQuery) ||
          book.keywords.some((k) => k.toLowerCase().includes(normalizedQuery))
        );
      });

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-paper w-full max-w-2xl rounded-[2px] shadow-2xl border border-ink/15 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-ink/10 flex items-center gap-3 bg-paper-pure">
          <Search className="w-5 h-5 text-ink-muted" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por título, autor, arquetipo o tema (ej. 'psicología', 'certeza')..."
            className="flex-1 bg-transparent font-sans text-sm sm:text-base text-ink placeholder:text-ink-faint focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-ink-muted hover:text-ink"
              aria-label="Borrar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-paper-subtle rounded border border-ink/10 text-ink-muted">
            ESC para salir
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1">
          <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-ink-muted uppercase">
            <span>
              {normalizedQuery ? `Resultados (${results.length})` : 'Publicaciones destacadas'}
            </span>
            <span>Ediciones de US$1</span>
          </div>

          {results.length > 0 ? (
            results.map((book) => {
              const writer = WRITERS[book.writerId];
              return (
                <div
                  key={book.id}
                  onClick={() => {
                    onClose();
                    onSelectBook(book);
                  }}
                  className="p-3 rounded hover:bg-paper-warm cursor-pointer transition-colors flex items-center gap-4 group border border-transparent hover:border-ink/10"
                >
                  <BookCoverArt book={book} size="sm" showShadow={false} />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-editorial-terracotta uppercase">
                        {book.category}
                      </span>
                      <span className="text-ink-faint text-xs">·</span>
                      <span className="font-mono text-[10px] text-ink-muted">
                        {writer?.displayName}
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-normal text-ink group-hover:text-editorial-terracotta transition-colors truncate">
                      {book.title}
                    </h4>

                    <p className="font-sans text-xs text-ink-muted line-clamp-1 mt-0.5">
                      {book.subtitle}
                    </p>
                  </div>

                  <div className="text-right font-mono flex items-center gap-3">
                    <span className="text-xs font-semibold text-ink">
                      US${book.price}
                    </span>
                    <ArrowRight className="w-4 h-4 text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <p className="font-serif text-lg text-ink">
                No encontramos publicaciones para «{query}»
              </p>
              <p className="text-xs font-mono text-ink-muted mt-1">
                Intente buscar por categoría ("Ficción", "Ciencia") o por tema.
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-ink/10 bg-paper-warm/60 flex items-center justify-between text-[11px] font-mono text-ink-muted">
          <span>BOOKIA Catálogo indexado en tiempo real</span>
          <span>5 obras iniciales</span>
        </div>

      </div>
    </div>
  );
};
