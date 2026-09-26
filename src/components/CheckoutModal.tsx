import React, { useState } from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';
import { BOOKS_LIST } from '../data/books';
import { ReplicaBookCover } from './ReplicaBookCover';
import { X, Check, Download, BookOpen, ArrowRight, Loader2, CreditCard, Apple, Sparkles } from 'lucide-react';

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
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'nequi' | 'apple-pay'>('card');
  const [step, setStep] = useState<'summary' | 'processing' | 'success'>('summary');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen || !book) return null;

  const writer = WRITERS[book.writerId];
  const formattedPrice = book.priceDisplay || `$${book.price.toLocaleString('es-CO')} COP`;

  // Libro recomendado directo para el loop post-compra
  const recommendedBook = (book.nextRecommendedId && BOOKS_LIST.find((b) => b.id === book.nextRecommendedId))
    || BOOKS_LIST.find((b) => b.id !== book.id && b.writerId === book.writerId)
    || BOOKS_LIST.find((b) => b.id !== book.id)
    || BOOKS_LIST[0];

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 1100);
  };

  const handleDownload = (format: 'PDF' | 'EPUB') => {
    const content = `========================================================
BUKIA — EDITORIAL EXPERIMENTAL
Edición digital oficial en formato ${format}
========================================================

TÍTULO: ${book.title}
SUBTÍTULO: ${book.subtitle}
PREMISA: "${book.premise || book.subtitle}"
AUTOR ARTIFICIAL: ${writer?.displayName || 'Autor Artificial'}
CATEGORÍA: ${book.category}
EXTENSIÓN: ${book.pageCount} páginas · ${book.readingTime}
PRECIO: ${formattedPrice}

TESIS CENTRAL:
«${book.thesisStatement}»

--------------------------------------------------------
SINOPSIS:
${book.description}

--------------------------------------------------------
TEXTO ÍNTEGRO:
${book.previewContent.chapters[0].paragraphs.join('\n\n')}

========================================================
Este archivo digital es abierto y libre de DRM.
© 2026 BUKIA Editorial Experimental.
========================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${book.slug}-edicion-${format.toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(`Descarga de ${format} iniciada correctamente.`);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  const resetAndClose = () => {
    setStep('summary');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex justify-center items-center p-4 transition-all"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Cabecera superior */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-stone-50/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-mono text-xs uppercase tracking-wider text-gray-900 font-semibold">
              {step === 'success' ? 'Tu libro está listo' : `Checkout · ${formattedPrice}`}
            </span>
          </div>

          <button
            onClick={resetAndClose}
            className="text-gray-400 hover:text-black p-1 rounded-full transition-colors"
            aria-label="Cerrar ventana de pago"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* PASO 1: RESUMEN Y PAGO SIN FRICCIÓN                      */}
        {/* ======================================================== */}
        {step === 'summary' && (
          <div className="p-6">
            
            {/* Detalle del libro seleccionado */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAFAFA] border border-gray-200/80 mb-6">
              <div className="flex-shrink-0">
                <ReplicaBookCover
                  id={book.id}
                  title={book.title}
                  author={book.subtitle}
                  size="xs"
                  showShadow={false}
                />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-semibold block">
                  {book.category} · {book.readingTime}
                </span>
                <h4 className="font-serif font-bold text-base text-gray-950 truncate uppercase tracking-tight">
                  {book.title}
                </h4>
                <p className="text-xs text-gray-500 font-serif italic line-clamp-1 mt-0.5">
                  «{book.premise || book.subtitle}»
                </p>
                <div className="mt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">Total a pagar:</span>
                  <span className="font-bold text-gray-950 text-sm">{formattedPrice}</span>
                </div>
              </div>
            </div>

            {/* Formulario de pago simplificado */}
            <form onSubmit={handleSimulatePayment} className="space-y-4">
              
              {/* Selector de método de pago */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">
                  Método de Pago
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-black bg-stone-50 text-black font-semibold ring-1 ring-black'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Tarjeta</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('nequi')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'nequi'
                        ? 'border-black bg-stone-50 text-black font-semibold ring-1 ring-black'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-fuchsia-600" />
                    <span>Nequi / PSE</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple-pay')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'apple-pay'
                        ? 'border-black bg-stone-50 text-black font-semibold ring-1 ring-black'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <Apple className="w-3.5 h-3.5" />
                    <span>Apple Pay</span>
                  </button>
                </div>
              </div>

              {/* Correo para recibir los archivos */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
                  Tu correo electrónico (para envío de archivos)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-black font-mono"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-black hover:bg-stone-800 text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Pagar {formattedPrice} y continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] font-mono text-gray-400 text-center">
                Pago de demostración sin cargo real · Acceso instantáneo a la historia
              </p>

            </form>

          </div>
        )}

        {/* ======================================================== */}
        {/* PASO 2: PROCESANDO                                       */}
        {/* ======================================================== */}
        {step === 'processing' && (
          <div className="p-12 text-center flex flex-col items-center justify-center">
            <Loader2 className="w-8 h-8 text-black animate-spin mb-4" />
            <h4 className="font-serif text-lg font-bold text-gray-900 uppercase">
              Preparando tu edición digital...
            </h4>
            <p className="text-xs text-gray-500 font-mono mt-1">
              Desbloqueando acceso para {email || 'tu lector'}
            </p>
          </div>
        )}

        {/* ======================================================== */}
        {/* PASO 3: ÉXITO + POSTCOMPRA & LOOP DE RECOMENDACIÓN       */}
        {/* ======================================================== */}
        {step === 'success' && (
          <div className="p-6 space-y-6">
            
            {/* Mensaje de éxito */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-extrabold text-gray-950 uppercase tracking-tight">
                Tu libro está listo.
              </h3>
              <p className="mt-1 text-xs text-gray-600 font-serif italic">
                «{book.title}» ya está disponible para continuar la lectura o descargar en tus dispositivos.
              </p>
            </div>

            {/* CTA DOMINANTE: CONTINUAR LEYENDO */}
            <div>
              <button
                onClick={() => {
                  onClose();
                  onStartReading(book);
                }}
                className="w-full py-3.5 bg-black hover:bg-stone-800 text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Continuar leyendo la historia</span>
              </button>
            </div>

            {/* Descargas opcionales */}
            <div className="pt-2 border-t border-gray-100">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-2 text-center">
                Descargar copia sin DRM
              </span>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => handleDownload('PDF')}
                  className="px-4 py-1.5 bg-stone-100 hover:bg-stone-200 text-gray-800 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar PDF</span>
                </button>
                <button
                  onClick={() => handleDownload('EPUB')}
                  className="px-4 py-1.5 bg-stone-100 hover:bg-stone-200 text-gray-800 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar EPUB</span>
                </button>
              </div>

              {downloadSuccess && (
                <p className="text-[11px] font-mono text-emerald-700 text-center mt-2">
                  {downloadSuccess}
                </p>
              )}
            </div>

            {/* ======================================================== */}
            {/* POSTCOMPRA: LOOP CON UNA SOLA RECOMENDACIÓN DIRECTA     */}
            {/* ======================================================== */}
            {recommendedBook && (
              <div className="pt-4 border-t border-stone-200 bg-stone-50 -mx-6 -mb-6 p-6 rounded-b-2xl">
                <div className="text-center mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-900 font-semibold block">
                    ¿TE GUSTÓ ESTA HISTORIA?
                  </span>
                  <h4 className="text-sm font-bold text-gray-950 font-serif">
                    Entonces probablemente quieras leer esta:
                  </h4>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-stone-200">
                  <div className="flex-shrink-0">
                    <ReplicaBookCover
                      id={recommendedBook.id}
                      title={recommendedBook.title}
                      author={recommendedBook.subtitle}
                      size="xs"
                      showShadow={false}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif font-bold text-xs sm:text-sm text-gray-950 uppercase truncate">
                      {recommendedBook.title}
                    </h5>
                    <p className="text-[11px] text-gray-500 font-serif italic line-clamp-2 mt-0.5">
                      «{recommendedBook.premise || recommendedBook.subtitle}»
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gray-400">
                        {recommendedBook.readingTime}
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          if (onSelectRecommended) {
                            onSelectRecommended(recommendedBook);
                          } else {
                            onStartReading(recommendedBook);
                          }
                        }}
                        className="px-3 py-1 bg-black hover:bg-stone-800 text-white rounded-full text-[11px] font-semibold flex items-center gap-1 shadow-xs"
                      >
                        <BookOpen className="w-3 h-3 text-amber-400" />
                        <span>Leer gratis</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
