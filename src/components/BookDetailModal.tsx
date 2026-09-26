import React, { useEffect } from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';
import { BOOKS_LIST } from '../data/books';
import { ALL_REPLICA_BOOKS } from '../data/replicaBooks';
import { ReplicaBookCover } from './ReplicaBookCover';
import { X, BookOpen, ShoppingBag, ArrowRight } from 'lucide-react';

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
  const allBooksList = [...ALL_REPLICA_BOOKS, ...BOOKS_LIST];
  const relatedBooks = allBooksList.filter((b) => b.id !== book.id).slice(0, 3);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center items-start p-0 sm:p-4 md:p-6 transition-all"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-detail-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white w-full max-w-4xl min-h-screen sm:min-h-0 sm:rounded-2xl shadow-2xl overflow-hidden my-0 sm:my-8 border border-gray-100 flex flex-col">
        
        {/* Cabecera superior fija */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="font-semibold text-emerald-800 uppercase tracking-wider">{book.category}</span>
            <span>·</span>
            <span>Edición Digital de Lectura Intencional</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Cerrar detalle del libro"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo del modal */}
        <div className="p-6 sm:p-10 md:p-12 pb-28 sm:pb-12 space-y-10">
          
          {/* Fila principal: Portada e Información */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Portada izquierda (5 columnas) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="max-w-[240px] sm:max-w-[280px] w-full flex justify-center">
                <ReplicaBookCover
                  id={book.id}
                  title={book.title}
                  author={book.subtitle}
                  size="hero"
                  showShadow
                />
              </div>

              {/* Indicador de formatos incluidos */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-gray-500 bg-gray-50 py-2.5 px-4 rounded-full border border-gray-200/80 w-full">
                <span>Formatos incluidos:</span>
                <span className="font-semibold text-gray-900">PDF</span>
                <span>+</span>
                <span className="font-semibold text-gray-900">EPUB</span>
              </div>
            </div>

            {/* Información y botones derecha (7 columnas) */}
            <div className="md:col-span-7 flex flex-col">
              
              {/* Autor / Firma */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-emerald-700 font-semibold tracking-wide">
                  {writer?.displayName || book.subtitle}
                </span>
                {writer?.archetype && (
                  <span className="text-gray-400 text-xs font-mono">({writer.archetype})</span>
                )}
              </div>

              {/* Título y subtítulo */}
              <h1 id="book-detail-title" className="text-3xl sm:text-4xl font-extrabold text-gray-950 leading-[1.15] tracking-tight">
                {book.title}
              </h1>

              <p className="mt-3 font-serif italic text-base sm:text-lg text-gray-600 leading-relaxed">
                {book.subtitle}
              </p>

              {/* Tira de métricas */}
              <div className="mt-6 grid grid-cols-3 gap-3 py-4 border-y border-gray-100 text-center font-mono">
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Páginas</span>
                  <span className="text-sm font-semibold text-gray-900 mt-0.5 block">{book.pageCount} págs</span>
                </div>
                <div className="border-l border-gray-100">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Lectura</span>
                  <span className="text-sm font-semibold text-gray-900 mt-0.5 block">{book.readingTime}</span>
                </div>
                <div className="border-l border-gray-100">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Precio</span>
                  <span className="text-sm font-semibold text-gray-900 mt-0.5 block">US${book.price}.00</span>
                </div>
              </div>

              {/* Descripción */}
              <div className="mt-6 space-y-4 text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                <p>{book.description}</p>
              </div>

              {/* Cita de tesis central */}
              <div className="mt-6 p-4 bg-gray-50 border-l-2 border-black rounded-r-lg">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                  Tesis Central
                </span>
                <p className="font-serif italic text-sm text-gray-900 leading-snug">
                  "{book.thesisStatement}"
                </p>
              </div>

              {/* Botones de acción */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onBuy(book)}
                  className="flex-1 py-3 px-6 bg-black text-white rounded-full font-sans font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Adquirir edición completa · US${book.price}</span>
                </button>

                <button
                  onClick={() => onOpenPreview(book)}
                  className="py-3 px-6 bg-white border border-gray-300 text-gray-900 rounded-full font-sans font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                >
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Leer muestra gratis</span>
                </button>
              </div>

            </div>

          </div>

          {/* Sección: Otras lecturas intencionales recomendadas */}
          <div className="pt-8 border-t border-gray-100">
            <h4 className="font-bold text-xl text-gray-950 mb-6">
              Otras lecturas recomendadas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedBooks.map((relBook) => (
                <div
                  key={relBook.id}
                  onClick={() => onSelectRelated(relBook)}
                  className="p-4 bg-white border border-gray-100 rounded-xl cursor-pointer hover:border-gray-300 transition-all flex items-center gap-4 group shadow-xs"
                >
                  <ReplicaBookCover id={relBook.id} title={relBook.title} author={relBook.subtitle} size="xs" showShadow={false} />
                  <div>
                    <span className="font-mono text-[10px] text-emerald-700 uppercase font-semibold block">
                      {relBook.category}
                    </span>
                    <h5 className="font-semibold text-sm text-gray-950 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {relBook.title}
                    </h5>
                    <span className="font-mono text-xs text-gray-500 mt-1 block">
                      US${relBook.price}.00
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Barra móvil inferior fija de compra */}
        <div className="sm:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-4 border-t border-gray-200 shadow-lg flex items-center gap-3 z-50">
          <button
            onClick={() => onOpenPreview(book)}
            className="flex-1 py-3 bg-white border border-gray-300 text-gray-900 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Muestra</span>
          </button>
          <button
            onClick={() => onBuy(book)}
            className="flex-[2] py-3 bg-black text-white rounded-full text-xs font-semibold flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Comprar · US${book.price}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
