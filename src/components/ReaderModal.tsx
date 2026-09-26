import React, { useState, useEffect } from 'react';
import { Book, ReaderTheme, ReaderFontSize } from '../types';
import { WRITERS } from '../data/writers';
import { X, ShoppingBag, Sun, Moon, BookMarked, Type, ArrowLeft } from 'lucide-react';

interface ReaderModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  onBuy: (book: Book) => void;
}

export const ReaderModal: React.FC<ReaderModalProps> = ({
  book,
  isOpen,
  onClose,
  onBuy,
}) => {
  const [theme, setTheme] = useState<ReaderTheme>('paper');
  const [fontSize, setFontSize] = useState<ReaderFontSize>('base');
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = Math.min(100, Math.round((scrollTop / (scrollHeight - clientHeight)) * 100));
    setReadingProgress(progress || 0);
  };

  if (!isOpen || !book) return null;

  const writer = WRITERS[book.writerId];
  const chapter = book.previewContent.chapters[0];

  // Theme style classes
  const themeClasses = {
    paper: 'bg-[#FAF8F5] text-[#171615] border-[#E6E1D6]',
    sepia: 'bg-[#F4EEDD] text-[#2C241B] border-[#DDD3BC]',
    dark: 'bg-[#181816] text-[#E5E0D6] border-[#302F2B]',
  };

  const contentBgClasses = {
    paper: 'bg-[#FAF8F5]',
    sepia: 'bg-[#F4EEDD]',
    dark: 'bg-[#181816]',
  };

  const fontSizeClasses = {
    sm: 'text-base leading-relaxed',
    base: 'text-lg sm:text-xl leading-[1.8]',
    lg: 'text-xl sm:text-2xl leading-[1.85]',
    xl: 'text-2xl sm:text-3xl leading-[1.9]',
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-ink/80 backdrop-blur-md flex justify-center items-center p-0 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-book-title"
    >
      <div className={`relative w-full h-full md:max-w-4xl md:h-[92vh] md:rounded-[4px] shadow-2xl flex flex-col overflow-hidden transition-colors duration-300 ${themeClasses[theme]}`}>
        
        {/* Top Reading Header & Controls Bar */}
        <header className={`px-4 sm:px-8 py-3.5 border-b flex items-center justify-between z-30 select-none ${themeClasses[theme]}`}>
          
          {/* Left: Back / Close button */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-mono opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
            aria-label="Cerrar lector de muestra"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Volver a la tienda</span>
          </button>

          {/* Center: Book metadata */}
          <div className="text-center px-2">
            <span id="reader-book-title" className="font-serif text-sm sm:text-base font-medium line-clamp-1">
              {book.title}
            </span>
            <span className="font-mono text-[10px] opacity-60 block">
              Muestra de cortesía · {writer?.displayName}
            </span>
          </div>

          {/* Right: Customization Controls (Theme & Typography) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Font Size Selector */}
            <div className="flex items-center border rounded px-1.5 py-0.5 border-current/20 text-xs font-mono">
              <button
                onClick={() => setFontSize(fontSize === 'xl' ? 'lg' : fontSize === 'lg' ? 'base' : 'sm')}
                className="px-1.5 py-0.5 opacity-70 hover:opacity-100 disabled:opacity-30"
                disabled={fontSize === 'sm'}
                aria-label="Reducir tamaño de letra"
              >
                A-
              </button>
              <span className="px-1 opacity-40">|</span>
              <button
                onClick={() => setFontSize(fontSize === 'sm' ? 'base' : fontSize === 'base' ? 'lg' : 'xl')}
                className="px-1.5 py-0.5 opacity-70 hover:opacity-100 disabled:opacity-30"
                disabled={fontSize === 'xl'}
                aria-label="Aumentar tamaño de letra"
              >
                A+
              </button>
            </div>

            {/* Theme Toggle (Paper / Sepia / Dark) */}
            <div className="flex items-center border rounded p-0.5 border-current/20">
              <button
                onClick={() => setTheme('paper')}
                className={`w-6 h-6 rounded-full border text-[10px] flex items-center justify-center font-mono ${theme === 'paper' ? 'border-current font-bold' : 'border-transparent opacity-60'}`}
                title="Modo Papel"
                aria-label="Fondo Papel"
              >
                P
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={`w-6 h-6 rounded-full border text-[10px] flex items-center justify-center font-mono ${theme === 'sepia' ? 'border-current font-bold' : 'border-transparent opacity-60'}`}
                title="Modo Sepia"
                aria-label="Fondo Sepia"
              >
                S
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`w-6 h-6 rounded-full border text-[10px] flex items-center justify-center font-mono ${theme === 'dark' ? 'border-current font-bold' : 'border-transparent opacity-60'}`}
                title="Modo Noche"
                aria-label="Fondo Noche"
              >
                N
              </button>
            </div>

            {/* Close Icon button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Cerrar lector"
            >
              <X className="w-5 h-5" />
            </button>

          </div>

        </header>

        {/* Progress bar line */}
        <div className="w-full h-1 bg-current/10 relative overflow-hidden">
          <div
            className="h-full bg-editorial-terracotta transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Reader Scrollable Content */}
        <div
          onScroll={handleScroll}
          className={`flex-1 overflow-y-auto px-6 sm:px-16 md:px-24 py-12 md:py-16 selection:bg-current/15 ${contentBgClasses[theme]}`}
        >
          <div className="max-w-2xl mx-auto">
            
            {/* Chapter Header */}
            <div className="text-center mb-12 pb-8 border-b border-current/15">
              <span className="font-mono text-xs uppercase tracking-widest-editorial opacity-60 block mb-2">
                Capítulo {chapter.chapterNumber}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight">
                {chapter.chapterTitle}
              </h2>

              {chapter.epigraph && (
                <div className="mt-6 max-w-md mx-auto">
                  <p className="font-serif italic text-sm opacity-80">
                    «{chapter.epigraph.quote}»
                  </p>
                  <span className="font-mono text-[10px] uppercase opacity-50 block mt-1">
                    — {chapter.epigraph.source}
                  </span>
                </div>
              )}
            </div>

            {/* Paragraphs with Drop Cap on first */}
            <div className={`font-serif space-y-6 text-justify sm:text-left ${fontSizeClasses[fontSize]}`}>
              {chapter.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* End of Preview Discreet Card */}
            <div className="mt-16 pt-10 border-t-2 border-current/20 text-center">
              <span className="font-mono text-xs uppercase tracking-widest-editorial opacity-60 block mb-2">
                Fin del extracto libre
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light mb-3">
                ¿Desea continuar con la lectura completa?
              </h3>
              <p className="font-sans text-sm opacity-70 max-w-md mx-auto mb-6">
                Obtenga la obra íntegra ({book.pageCount} páginas) en formatos PDF y EPUB listos para su descarga inmediata por US$1.
              </p>

              <button
                onClick={() => {
                  onClose();
                  onBuy(book);
                }}
                className="px-8 py-3.5 bg-ink text-paper dark:bg-paper dark:text-ink font-sans text-sm font-medium rounded-[2px] inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Continuar leyendo por US${book.price}</span>
              </button>

              <span className="block mt-4 font-mono text-[11px] opacity-50">
                Pago demo seguro · Descarga instantánea sin fricción
              </span>
            </div>

          </div>
        </div>

        {/* Reader Bottom Folio */}
        <footer className={`px-6 py-2.5 border-t border-current/10 flex items-center justify-between text-[11px] font-mono opacity-60 select-none ${themeClasses[theme]}`}>
          <span>BOOKIA Digital Reader</span>
          <span>Progreso: {readingProgress}%</span>
        </footer>

      </div>
    </div>
  );
};
