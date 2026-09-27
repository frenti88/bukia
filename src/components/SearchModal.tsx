import React, { useState, useEffect, useRef } from 'react';
import { Book } from '../types';
import { PUBLISHED_BOOKS } from '../data/books';
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

  const allSearchableBooks: Book[] = books || PUBLISHED_BOOKS;

  const quickThemes = ['inquietud', 'futuro', 'memoria', 'misterio', 'tensión'];

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
          (book.premise ? book.premise.toLowerCase().includes(normalizedQuery) : false) ||
          (writer?.displayName && writer.displayName.toLowerCase().includes(normalizedQuery)) ||
          (writer?.territory && writer.territory.toLowerCase().includes(normalizedQuery)) ||
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
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Barra de entrada de búsqueda */}
        <div className="p-4 border-b border-stone-100 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-stone-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="¿Qué quieres leer hoy?"
            className="flex-1 bg-transparent font-sans text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-black"
              aria-label="Borrar"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-mono bg-stone-100 rounded text-stone-500">
            ESC
          </kbd>
        </div>

        {/* Sugerencias conceptuales */}
        {normalizedQuery === '' && (
          <div className="px-5 py-3 bg-[#FAF8F5] border-b border-stone-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-mono text-stone-400 whitespace-nowrap">Explorar:</span>
            {quickThemes.map((theme) => (
              <button
                key={theme}
                onClick={() => setQuery(theme)}
                className="px-2.5 py-1 rounded-full bg-white border border-stone-200 hover:border-stone-400 text-xs font-sans text-stone-700 whitespace-nowrap transition-colors"
              >
                {theme}
              </button>
            ))}
          </div>
        )}

        {/* Lista de resultados */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1">
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
                  className="p-3 rounded-xl hover:bg-stone-50 cursor-pointer transition-colors flex items-center gap-4 group border border-transparent hover:border-stone-200"
                >
                  <div className="w-10 flex-shrink-0">
                    <ReplicaBookCover id={book.id} title={book.title} author={writer?.displayName || book.subtitle} size="xs" showShadow={false} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm text-stone-950 uppercase group-hover:text-amber-900 transition-colors truncate">
                      {book.title}
                    </h4>

                    <p className="font-serif italic text-xs text-stone-600 line-clamp-1 mt-0.5">
                      «{book.premise || book.subtitle}»
                    </p>
                  </div>

                  <div className="text-right font-mono flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs font-semibold text-stone-900">
                      $4.900
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <p className="font-serif italic text-base text-stone-800">
                No encontramos historias para «{query}»
              </p>
              <p className="text-xs font-mono text-stone-500 mt-1">
                Prueba buscando por autor: Nara, Vera, Elio, Nilo o Aren.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
