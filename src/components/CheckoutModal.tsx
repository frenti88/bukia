import React, { useState } from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';
import { BOOKS_LIST } from '../data/books';
import { ReplicaBookCover } from './ReplicaBookCover';
import { X, Check, Download, BookOpen, Loader2 } from 'lucide-react';

interface CheckoutModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  onStartReading: (book: Book) => void;
  onSelectRecommended?: (book: Book) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  book,
  isOpen,
  onClose,
  onStartReading,
  onSelectRecommended,
}) => {
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'nequi'>('card');
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen || !book) return null;

  const writer = WRITERS[book.writerId];
  const formattedPrice = '$4.900 COP';

  // Libro recomendado del mismo autor para el loop post-lectura
  const recommendedBook = BOOKS_LIST.find((b) => b.writerId === book.writerId && b.id !== book.id)
    || BOOKS_LIST.find((b) => b.id !== book.id)
    || BOOKS_LIST[0];

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 900);
  };

  const handleDownload = (format: 'PDF' | 'EPUB') => {
    const content = `========================================================
BUKIA — HISTORIAS QUE NINGÚN HUMANO ESCRIBIÓ
Edición digital en formato ${format}
========================================================

TÍTULO: ${book.title}
VOZ EDITORIAL: ${writer?.displayName || 'BUKIA'}
DURACIÓN: ${book.readingTime} · ${book.pageCount} páginas
PRECIO: ${formattedPrice}

PREMISA:
«${book.premise || book.subtitle}»

SINOPSIS:
${book.description}

========================================================
TEXTO ÍNTEGRO:
${book.previewContent.chapters[0].paragraphs.join('\n\n')}

========================================================
Edición digital sin DRM para uso personal.
© 2026 BUKIA.
========================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${book.slug}-bukia-${format.toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(`Descarga de ${format} completada`);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex justify-center items-center p-4 transition-all"
      role="dialog"
      aria-modal="true"
      aria-label="Completar lectura"
    >
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-stone-900">
        
        {/* Cabecera superior sobria */}
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-[#FAF8F5]">
          <span className="font-mono text-xs uppercase tracking-wider text-stone-700 font-semibold">
            {step === 'success' ? 'Lectura desbloqueada' : 'Continuar la historia'}
          </span>

          <button
            onClick={resetAndClose}
            className="text-stone-400 hover:text-black p-1 rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* PASO 1: FORMULARIO ULTRA-SIMPLE                           */}
        {/* ======================================================== */}
        {step === 'form' && (
          <form onSubmit={handleSimulatePayment} className="p-6 sm:p-7">
            
            {/* Resumen del libro */}
            <div className="flex items-center gap-4 p-3.5 bg-[#FAF8F5] rounded-xl border border-stone-200/80 mb-6">
              <div className="w-12 flex-shrink-0">
                <ReplicaBookCover
                  id={book.id}
                  title={book.title}
                  author={writer?.displayName || book.subtitle}
                  size="xs"
                  showShadow={false}
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading font-bold text-sm text-stone-950 uppercase truncate">
                  {book.title}
                </h3>
                <span className="font-serif italic text-xs text-stone-600 block">
                  Una historia de {writer?.displayName || 'BUKIA'}
                </span>
                <span className="font-mono text-xs text-amber-900 font-semibold mt-0.5 block">
                  {formattedPrice} · Incluye PDF y EPUB
                </span>
              </div>
            </div>

            {/* Correo para recibir el archivo */}
            <div className="mb-5">
              <label htmlFor="checkout-email" className="block text-xs font-mono uppercase text-stone-600 mb-1.5 font-semibold">
                ¿A qué correo enviamos tu copia?
              </label>
              <input
                id="checkout-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-black focus:ring-1 focus:ring-black text-sm outline-none transition-colors"
              />
            </div>

            {/* Método de pago */}
            <div className="mb-6">
              <span className="block text-xs font-mono uppercase text-stone-600 mb-2 font-semibold">
                Método de pago
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 px-3 rounded-xl border text-xs font-sans font-medium flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-black bg-stone-950 text-white font-semibold'
                      : 'border-stone-200 hover:border-stone-400 bg-white text-stone-700'
                  }`}
                >
                  Tarjeta débito/crédito
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('nequi')}
                  className={`py-2 px-3 rounded-xl border text-xs font-sans font-medium flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'nequi'
                      ? 'border-black bg-stone-950 text-white font-semibold'
                      : 'border-stone-200 hover:border-stone-400 bg-white text-stone-700'
                  }`}
                >
                  Nequi / PSE
                </button>
              </div>
            </div>

            {/* Botón dominante de confirmación */}
            <button
              type="submit"
              className="w-full py-3.5 bg-black hover:bg-stone-800 text-white rounded-full font-sans text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Continuar la historia · {formattedPrice}</span>
            </button>

            <p className="mt-3 text-center text-xs font-mono text-stone-400">
              Pago seguro y protegido · Acceso inmediato
            </p>

          </form>
        )}

        {/* ======================================================== */}
        {/* PASO 2: PROCESANDO                                       */}
        {/* ======================================================== */}
        {step === 'processing' && (
          <div className="p-12 text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-stone-900 mb-4" />
            <h4 className="font-heading text-base font-bold text-stone-950 uppercase tracking-tight">
              Preparando tu edición...
            </h4>
            <p className="text-xs text-stone-500 font-sans mt-1">
              Generando tus archivos en PDF y EPUB
            </p>
          </div>
        )}

        {/* ======================================================== */}
        {/* PASO 3: ÉXITO + LOOP DE RECOMPRA                         */}
        {/* ======================================================== */}
        {step === 'success' && (
          <div className="p-6 sm:p-7 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>

            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950">
              Tu historia está lista
            </h3>
            <p className="text-xs text-stone-600 mt-1 font-sans">
              Enviamos un enlace a <strong>{email}</strong>
            </p>

            {/* Acción 1: Leer directamente en el lector */}
            <div className="mt-5">
              <button
                onClick={() => {
                  resetAndClose();
                  onStartReading(book);
                }}
                className="w-full py-3.5 bg-black hover:bg-stone-800 text-white rounded-full font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Leer ahora en BUKIA</span>
              </button>
            </div>

            {/* Acción 2: Descargas */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <button
                onClick={() => handleDownload('PDF')}
                className="flex-1 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-full font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </button>
              <button
                onClick={() => handleDownload('EPUB')}
                className="flex-1 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-full font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>EPUB</span>
              </button>
            </div>

            {downloadSuccess && (
              <p className="mt-2 text-xs font-mono text-emerald-600">
                {downloadSuccess}
              </p>
            )}

            {/* Loop de Recompra: 'Si te gustó [Autor], hay otra historia suya' */}
            {recommendedBook && (
              <div className="mt-7 pt-5 border-t border-stone-200/80 text-left">
                <span className="font-mono text-xs uppercase tracking-wider text-amber-900 font-semibold block mb-2">
                  Si te gustó {writer?.displayName || 'este autor'}, hay otra historia suya:
                </span>
                
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/80 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h5 className="font-heading font-bold text-xs uppercase truncate text-stone-950">
                      {recommendedBook.title}
                    </h5>
                    <p className="text-xs font-serif italic text-stone-600 truncate mt-0.5">
                      {recommendedBook.readingTime}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      resetAndClose();
                      if (onSelectRecommended) {
                        onSelectRecommended(recommendedBook);
                      }
                    }}
                    className="flex-shrink-0 px-3 py-1.5 bg-white border border-stone-300 hover:border-black rounded-full font-sans text-xs font-semibold text-stone-900 transition-colors"
                  >
                    Leer gratis
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
