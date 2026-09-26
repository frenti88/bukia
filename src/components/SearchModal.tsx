import React, { useState, useEffect, useRef } from 'react';
import { Book } from '../types';
import { BOOKS_LIST } from '../data/books';
import { WRITERS } from '../data/writers';
import { ReplicaBookCover } from './ReplicaBookCover';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBook: (book: Book) => void;
  books?: Book[];
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectBook,
  books,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const allSearchableBooks: Book[] = books || BOOKS_LIST;

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
    ? allSearchableBooks
    : allSearchableBooks.filter((book) => {
        const writer = WRITERS[book.writerId];
        return (
          book.title.toLowerCase().includes(normalizedQuery) ||
          book.subtitle.toLowerCase().includes(normalizedQuery) ||
          book.category.toLowerCase().includes(normalizedQuery) ||
          book.thesisStatement.toLowerCase().includes(normalizedQuery) ||
          (writer?.displayName && writer.displayName.toLowerCase().includes(normalizedQuery)) ||
          (writer?.archetype && writer.archetype.toLowerCase().includes(normalizedQuery)) ||
          book.keywords.some((k) => k.toLowerCase().includes(normalizedQuery))
        );
      });

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Barra de entrada de búsqueda */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por título, autor o tema (ej. 'dinero', 'psicología', 'decisiones')..."
            className="flex-1 bg-transparent font-sans text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-black"
              aria-label="Borrar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-gray-100 rounded border border-gray-200 text-gray-500">
            ESC para salir
          </kbd>
        </div>

        {/* Lista de resultados */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1">
          <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-gray-400 uppercase">
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
                  className="p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors flex items-center gap-4 group border border-transparent hover:border-gray-200"
                >
                  <ReplicaBookCover id={book.id} title={book.title} author={book.subtitle} size="xs" showShadow={false} />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-emerald-700 uppercase font-semibold">
                        {book.category}
                      </span>
                      <span className="text-gray-300 text-xs">·</span>
                      <span className="font-mono text-[10px] text-gray-500">
                        {writer?.displayName || book.subtitle}
                      </span>
                    </div>

                    <h4 className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-emerald-700 transition-colors truncate">
                      {book.title}
                    </h4>

                    <p className="font-sans text-xs text-gray-400 line-clamp-1 mt-0.5">
                      {book.subtitle}
                    </p>
                  </div>

                  <div className="text-right font-mono flex items-center gap-3">
                    <span className="text-xs font-semibold text-black">
                      US${book.price}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <p className="font-serif text-lg text-gray-900">
                No encontramos publicaciones para «{query}»
              </p>
              <p className="text-xs font-mono text-gray-400 mt-1">
                Intente buscar por categoría ("Finanzas", "Psicología") o autor.
              </p>
            </div>
          )}
        </div>

        {/* Pie de búsqueda */}
        <div className="p-3 border-t border-gray-100 bg-gray-50/70 flex items-center justify-between text-[11px] font-mono text-gray-500">
          <span>Catálogo de lectura intencional indexado en tiempo real</span>
          <span>{allSearchableBooks.length} obras disponibles</span>
        </div>

      </div>
    </div>
  );
};
