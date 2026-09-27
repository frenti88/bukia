import React, { useState, useEffect } from 'react';
import { Book, ReaderTheme, ReaderFontSize } from '../types';
import { X, Type, ArrowRight, ShieldCheck } from 'lucide-react';

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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isSettingsOpen) {
          setIsSettingsOpen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isSettingsOpen, onClose]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const progress = Math.min(100, Math.round((scrollTop / (scrollHeight - clientHeight)) * 100));
    setReadingProgress(progress || 0);
  };

  if (!isOpen || !book) return null;

  const chapter = book.previewContent.chapters[0];
  const remainingPages = book.previewContent.remainingPages || Math.max(25, book.pageCount - 6);
  const remainingMinutes = book.previewContent.remainingMinutes || Math.max(20, parseInt(book.readingTime) - 7);
  const formattedPrice = '$4.900';

  // Estilos de temas
  const themeClasses: Record<ReaderTheme, string> = {
    paper: 'bg-[#FAF8F5] text-[#282828] border-stone-200',
    sepia: 'bg-[#F4EEDD] text-[#2C241B] border-[#DDD3BC]',
    dark: 'bg-[#181816] text-[#E5E0D6] border-[#302F2B]',
  };

  const fontSizeClasses: Record<ReaderFontSize, string> = {
    sm: 'text-base leading-relaxed',
    base: 'text-lg sm:text-xl leading-[1.8]',
    lg: 'text-xl sm:text-2xl leading-[1.85]',
    xl: 'text-2xl sm:text-3xl leading-[1.9]',
  };

  const lastParagraph = chapter.paragraphs[chapter.paragraphs.length - 1];

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-center items-center p-0 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Lectura de ${book.title}`}
    >
      <div className={`relative w-full h-full md:max-w-3xl md:h-[94vh] md:rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-colors duration-200 ${themeClasses[theme]}`}>
        
        {/* ======================================================== */}
        {/* BARRA SUPERIOR ZEN: BUKIA · progreso sutil · Aa · cerrar */}
        {/* ======================================================== */}
        <header className={`h-14 px-4 sm:px-6 border-b flex items-center justify-between z-30 select-none ${themeClasses[theme]}`}>
          
          {/* 1. BUKIA */}
          <span className="font-heading font-extrabold text-sm tracking-wider uppercase">
            BUKIA
          </span>

          {/* 2. Progreso sutil */}
          <div className="flex items-center gap-2 font-mono text-xs opacity-60">
            <span>Muestra</span>
            <span>·</span>
            <span>{readingProgress}%</span>
          </div>

          {/* 3. Aa & Cerrar */}
          <div className="flex items-center gap-2 relative">
            
            {/* Botón Aa que despliega configuraciones */}
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`p-2 rounded-full hover:bg-black/5 transition-colors font-serif font-bold text-sm ${
                isSettingsOpen ? 'bg-black/10' : ''
              }`}
              title="Ajustes de lectura (Aa)"
              aria-expanded={isSettingsOpen}
            >
              <span className="font-serif">Aa</span>
            </button>

            {/* Menú desplegable oculto dentro de Aa */}
            {isSettingsOpen && (
              <div className="absolute right-8 top-12 w-64 bg-white text-stone-900 rounded-2xl shadow-xl border border-stone-200 p-4 z-50 text-xs">
                {/* Tamaño de fuente */}
                <div className="mb-4">
                  <span className="font-mono text-xs uppercase text-stone-500 block mb-2 font-semibold">
                    Tamaño de letra
                  </span>
                  <div className="grid grid-cols-4 gap-1 bg-stone-100 p-1 rounded-xl">
                    {(['sm', 'base', 'lg', 'xl'] as ReaderFontSize[]).map((size) => (
                      <button
                        key={size}
                        onClick={() => setFontSize(size)}
                        className={`py-1 rounded-lg font-serif text-center transition-all ${
                          fontSize === size ? 'bg-white font-bold shadow-xs text-black' : 'text-stone-600'
                        }`}
                      >
                        {size === 'sm' ? 'A-' : size === 'base' ? 'A' : size === 'lg' ? 'A+' : 'A++'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tema de fondo */}
                <div>
                  <span className="font-mono text-xs uppercase text-stone-500 block mb-2 font-semibold">
                    Papel
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setTheme('paper')}
                      className={`py-1.5 px-2 rounded-xl text-xs font-sans flex items-center justify-center gap-1.5 border transition-all ${
                        theme === 'paper' ? 'border-black font-semibold bg-[#FAF8F5]' : 'border-stone-200 bg-[#FAF8F5]'
                      }`}
                    >
                      Papel
                    </button>
                    <button
                      onClick={() => setTheme('sepia')}
                      className={`py-1.5 px-2 rounded-xl text-xs font-sans flex items-center justify-center gap-1.5 border transition-all ${
                        theme === 'sepia' ? 'border-black font-semibold bg-[#F4EEDD]' : 'border-stone-200 bg-[#F4EEDD]'
                      }`}
                    >
                      Sepia
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={`py-1.5 px-2 rounded-xl text-xs font-sans flex items-center justify-center gap-1.5 border transition-all ${
                        theme === 'dark' ? 'border-white font-semibold bg-[#181816] text-white' : 'border-stone-700 bg-[#181816] text-stone-300'
                      }`}
                    >
                      Noche
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Cerrar */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/5 transition-colors opacity-70 hover:opacity-100"
              aria-label="Cerrar lector"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </header>

        {/* ======================================================== */}
        {/* ÁREA DE LECTURA INMERSIVA                                */}
        {/* ======================================================== */}
        <div
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-5 sm:px-12 md:px-16 py-8 sm:py-12 select-text"
        >
          <div className="max-w-xl mx-auto">
            
            {/* Cabecera del capítulo */}
            <div className="text-center mb-10 pb-6 border-b border-current/10">
              <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                Muestra Editorial
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                {book.title}
              </h2>
              {chapter.chapterTitle && (
                <p className="mt-2 font-serif italic text-sm opacity-75">
                  {chapter.chapterTitle}
                </p>
              )}
            </div>

            {/* Párrafos de la historia */}
            <div className={`font-serif space-y-6 text-left ${fontSizeClasses[fontSize]}`}>
              {chapter.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:leading-none' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* ======================================================== */}
            {/* PANTALLA DE CONVERSIÓN TRAS LA MUESTRA                   */}
            {/* ======================================================== */}
            <div className="mt-16 pt-12 border-t border-current/20 text-center">
              
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-4 uppercase tracking-tight">
                Esto apenas comienza.
              </h3>

              {/* Última línea o microfragmento de tensión dramática */}
              <p className="font-serif italic text-base sm:text-lg opacity-85 max-w-md mx-auto mb-6">
                «{lastParagraph}»
              </p>

              {/* Páginas y tiempo restante */}
              <div className="inline-flex items-center gap-2 font-mono text-xs opacity-75 mb-8">
                <span>{remainingPages} páginas restantes</span>
                <span>·</span>
                <span>{remainingMinutes} min</span>
              </div>

              {/* Botón dominante: Continuar leyendo · $4.900 */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <button
                  onClick={() => {
                    onClose();
                    onBuy(book);
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-black text-white font-sans text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-md"
                >
                  <span>Continuar leyendo · {formattedPrice}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onClose}
                  className="text-xs font-sans opacity-60 hover:opacity-100 transition-opacity"
                >
                  Volver al libro
                </button>
              </div>

              <p className="mt-6 font-mono text-xs opacity-50">
                Incluye descarga directa en PDF y EPUB
              </p>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
