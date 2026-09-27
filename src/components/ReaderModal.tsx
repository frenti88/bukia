import React, { useState, useEffect } from 'react';
import { Book, ReaderTheme, ReaderFontSize } from '../types';
import { WRITERS } from '../data/writers';
import { X, ArrowLeft, Sun, Moon, Type, ArrowRight, ShieldCheck } from 'lucide-react';

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

  // Cálculo discreto de páginas de muestra
  const samplePage = Math.min(5, Math.max(1, Math.ceil((readingProgress / 100) * 5)));

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

  const remainingPages = book.previewContent.remainingPages || Math.max(25, book.pageCount - 8);
  const remainingMinutes = book.previewContent.remainingMinutes || Math.max(20, parseInt(book.readingTime) - 8);
  const formattedPrice = book.priceDisplay || `$${book.price.toLocaleString('es-CO')} COP`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex justify-center items-center p-0 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-book-title"
    >
      <div className={`relative w-full h-full md:max-w-4xl md:h-[94vh] md:rounded-xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-300 ${themeClasses[theme]}`}>
        
        {/* Barra superior de lectura limpia */}
        <header className={`px-4 sm:px-8 py-3.5 border-b flex items-center justify-between z-30 select-none ${themeClasses[theme]}`}>
          
          {/* Izquierda: Volver al libro */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-medium hover:opacity-75 transition-opacity"
            aria-label="Volver al libro"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Volver al libro</span>
          </button>

          {/* Centro: Título e indicador discreto de muestra */}
          <div className="text-center min-w-0 px-2">
            <h1 id="reader-book-title" className="font-heading font-bold text-xs sm:text-sm truncate uppercase tracking-tight">
              {book.title}
            </h1>
            <span className="text-[10px] font-mono opacity-70 tracking-wider block">
              Una historia de {writer?.displayName || 'BUKIA'} · Muestra ({samplePage}/5)
            </span>
          </div>

          {/* Derecha: Ajustes de tipografía, temas y cerrar */}
          <div className="flex items-center gap-2">
            
            {/* Selector de tamaño de letra */}
            <div className="flex items-center gap-0.5 bg-black/5 rounded-full p-0.5">
              <button
                onClick={() => setFontSize('sm')}
                className={`w-6 h-6 rounded-full text-xs font-serif ${fontSize === 'sm' ? 'bg-black text-white font-bold' : 'opacity-60'}`}
                title="Texto pequeño"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`w-6 h-6 rounded-full text-xs font-serif ${fontSize === 'base' ? 'bg-black text-white font-bold' : 'opacity-60'}`}
                title="Texto mediano"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`w-6 h-6 rounded-full text-xs font-serif ${fontSize === 'lg' ? 'bg-black text-white font-bold' : 'opacity-60'}`}
                title="Texto grande"
              >
                A+
              </button>
            </div>

            {/* Selector de tema (papel / sepia / noche) */}
            <div className="flex items-center gap-1 border-l border-current/10 pl-2">
              <button
                onClick={() => setTheme('paper')}
                className={`w-5 h-5 rounded-full bg-[#FAF8F5] border border-gray-300 ${theme === 'paper' ? 'ring-2 ring-current' : 'opacity-60'}`}
                title="Tema Papel"
                aria-label="Papel"
              />
              <button
                onClick={() => setTheme('sepia')}
                className={`w-5 h-5 rounded-full bg-[#F4EEDD] border border-[#DDD3BC] ${theme === 'sepia' ? 'ring-2 ring-current' : 'opacity-60'}`}
                title="Tema Sepia"
                aria-label="Sepia"
              />
              <button
                onClick={() => setTheme('dark')}
                className={`w-5 h-5 rounded-full bg-[#181816] border border-zinc-700 ${theme === 'dark' ? 'ring-2 ring-current' : 'opacity-60'}`}
                title="Tema Noche"
                aria-label="Noche"
              />
            </div>

            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/5 opacity-70 hover:opacity-100 transition-opacity ml-1"
              aria-label="Cerrar lector"
            >
              <X className="w-5 h-5" />
            </button>

          </div>

        </header>

        {/* Línea sutil de progreso */}
        <div className="w-full h-0.5 bg-current/10 relative overflow-hidden">
          <div
            className="h-full bg-amber-700 transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Contenido scrolleable de lectura */}
        <div
          onScroll={handleScroll}
          className={`flex-1 overflow-y-auto px-6 sm:px-16 md:px-24 py-12 md:py-16 selection:bg-current/15 ${contentBgClasses[theme]}`}
        >
          <div className="max-w-2xl mx-auto">
            
            {/* Cabecera del capítulo */}
            <div className="text-center mb-12 pb-8 border-b border-current/15">
              <span className="font-mono text-[11px] uppercase tracking-widest opacity-60 block mb-2">
                Capítulo {chapter.chapterNumber}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight uppercase">
                {chapter.chapterTitle}
              </h2>

              {chapter.epigraph && (
                <div className="mt-6 max-w-md mx-auto">
                  <p className="font-serif italic text-sm opacity-80 leading-relaxed">
                    «{chapter.epigraph.quote}»
                  </p>
                  <span className="font-mono text-[10px] uppercase opacity-50 block mt-1">
                    — {chapter.epigraph.source}
                  </span>
                </div>
              )}
            </div>

            {/* Párrafos de la muestra con Drop Cap */}
            <div className={`font-serif space-y-6 text-justify sm:text-left ${fontSizeClasses[fontSize]}`}>
              {chapter.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* ======================================================== */}
            {/* MOMENTO DE CONVERSIÓN EDITORIAL (CLIFFHANGER)            */}
            {/* ======================================================== */}
            <div className="mt-16 pt-12 border-t-2 border-current/20 text-center">
              
              <span className="font-mono text-xs uppercase tracking-widest text-amber-800 font-semibold block mb-2">
                PUNTO DE CORTE EDITORIAL
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3 uppercase tracking-tight">
                {book.previewContent.cliffhangerTitle || 'Esto apenas comienza.'}
              </h3>

              <p className="font-serif italic text-base sm:text-lg opacity-80 max-w-md mx-auto mb-4">
                {book.previewContent.cliffhangerCopy || 'Continúa la historia completa.'}
              </p>

              {/* Información de extensión restante */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-current/5 border border-current/10 font-mono text-xs opacity-75 mb-8">
                <span>{remainingPages} páginas restantes</span>
                <span>·</span>
                <span>aproximadamente {remainingMinutes} minutos</span>
              </div>

              {/* CTA Dominante: Continuar leyendo · $4.900 */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <button
                  onClick={() => {
                    onClose();
                    onBuy(book);
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-black text-white font-sans text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md"
                >
                  <span>Continuar leyendo · {formattedPrice}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Acción secundaria: Volver al libro */}
                <button
                  onClick={onClose}
                  className="text-xs font-mono opacity-60 hover:opacity-100 transition-opacity underline underline-offset-4"
                >
                  Volver al libro
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-mono opacity-50">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Formatos PDF y EPUB incluidos · Lectura inmediata</span>
              </div>

            </div>

          </div>
        </div>

        {/* Folio inferior del lector */}
        <footer className={`px-6 py-2.5 border-t border-current/10 flex items-center justify-between text-[11px] font-mono opacity-60 select-none ${themeClasses[theme]}`}>
          <span>BUKIA · {book.title}</span>
          <span>Muestra: {readingProgress}% leído</span>
        </footer>

      </div>
    </div>
  );
};
