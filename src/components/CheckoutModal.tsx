import React, { useState } from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';
import { ReplicaBookCover } from './ReplicaBookCover';
import { X, Check, Download, BookOpen, ArrowRight, Loader2, CreditCard, Apple } from 'lucide-react';

interface CheckoutModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  onStartReading: (book: Book) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  book,
  isOpen,
  onClose,
  onStartReading,
}) => {
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'apple-pay' | 'card'>('apple-pay');
  const [step, setStep] = useState<'summary' | 'processing' | 'success'>('summary');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen || !book) return null;

  const writer = WRITERS[book.writerId];

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 1200);
  };

  const handleDownload = (format: 'PDF' | 'EPUB') => {
    const content = `========================================================
BOOKIA — EDITORIAL DIGITAL DE LECTURA INTENCIONAL
Edición oficial en formato ${format}
========================================================

TÍTULO: ${book.title}
SUBTÍTULO: ${book.subtitle}
FIRMA / AUTOR: ${writer?.displayName || book.subtitle}
CATEGORÍA: ${book.category}
EXTENSIÓN: ${book.pageCount} páginas · ${book.readingTime} de lectura
PRECIO: US$${book.price}.00 USD

TESIS CENTRAL:
"${book.thesisStatement}"

--------------------------------------------------------
SINOPSIS:
${book.description}

--------------------------------------------------------
${book.previewContent.excerptHeader.toUpperCase()}

${book.previewContent.chapters[0].paragraphs.join('\n\n')}

========================================================
Este archivo certifica su adquisición digital en BOOKIA.
© 2026 BOOKIA. Todos los derechos reservados.
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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 transition-all"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Cabecera superior */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-mono text-xs uppercase tracking-wider text-gray-900 font-semibold">
              {step === 'success' ? 'Adquisición Completada' : 'Checkout Demo · US$1.00'}
            </span>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 text-gray-400 hover:text-black rounded-full transition-colors"
            aria-label="Cerrar ventana de pago"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* PASO 1: RESUMEN Y PAGO RÁPIDO */}
        {step === 'summary' && (
          <form onSubmit={handleSimulatePayment} className="p-6 sm:p-8 space-y-6">
            
            {/* Tarjeta de información del libro */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/80 flex items-center gap-4">
              <ReplicaBookCover id={book.id} title={book.title} author={book.subtitle} size="xs" showShadow={false} />
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[10px] text-emerald-700 uppercase font-semibold block">
                  {book.category}
                </span>
                <h4 className="font-semibold text-sm sm:text-base text-gray-950 truncate">
                  {book.title}
                </h4>
                <p className="font-mono text-xs text-gray-500 mt-0.5 truncate">
                  {writer?.displayName || book.subtitle} · {book.readingTime}
                </p>
                <div className="mt-1 flex items-center gap-2 text-[10px] font-mono text-emerald-800 font-medium">
                  <span>PDF + EPUB incluidos</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono text-sm font-bold text-gray-950">
                  US${book.price}.00
                </span>
              </div>
            </div>

            {/* Correo electrónico */}
            <div>
              <label htmlFor="user-email" className="block font-mono text-xs text-gray-700 uppercase tracking-wider mb-2 font-medium">
                Correo electrónico para envío de archivos
              </label>
              <input
                id="user-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="su-correo@ejemplo.com"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl font-sans text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
              <span className="block mt-1.5 text-[11px] font-mono text-gray-400">
                Sin contraseñas ni formularios engorrosos de dirección física.
              </span>
            </div>

            {/* Representación de método de pago */}
            <div>
              <span className="block font-mono text-xs text-gray-700 uppercase tracking-wider mb-2 font-medium">
                Método de pago (Simulación Demo)
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple-pay')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                    paymentMethod === 'apple-pay'
                      ? 'border-black bg-gray-50 font-semibold'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <Apple className="w-4 h-4 text-black" />
                  <span className="text-xs font-mono">Apple Pay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-black bg-gray-50 font-semibold'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-black" />
                  <span className="text-xs font-mono">Tarjeta Demo</span>
                </button>
              </div>
            </div>

            {/* Desglose de precios */}
            <div className="pt-4 border-t border-gray-100 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal (Edición Digital)</span>
                <span>US$1.00</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Impuestos / Envío digital</span>
                <span>US$0.00</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Total a autorizar</span>
                <span>US$1.00</span>
              </div>
            </div>

            {/* Aviso de demo */}
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/80 text-[11px] font-mono text-gray-500 leading-relaxed">
              <strong>Modo de demostración de UX:</strong> No se realizará ningún cargo a su cuenta bancaria. Este flujo valida la velocidad y baja fricción de compra.
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-black text-white rounded-full font-sans font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-sm"
            >
              <span>Autorizar Demo · US$1.00</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        )}

        {/* PASO 2: SIMULACIÓN DE PROCESAMIENTO */}
        {step === 'processing' && (
          <div className="p-12 text-center flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
            <h4 className="font-bold text-xl text-gray-950">
              Preparando su edición digital...
            </h4>
            <p className="font-mono text-xs text-gray-500">
              Generando accesos instantáneos para PDF y EPUB
            </p>
          </div>
        )}

        {/* PASO 3: CONFIRMACIÓN DE ÉXITO */}
        {step === 'success' && (
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-2xl text-gray-950">
                ¡Gracias por su lectura!
              </h3>
              <p className="mt-1 text-xs font-mono text-gray-500">
                Orden #BK-{(Math.random() * 9000 + 1000).toFixed(0)} · Confirmación enviada a {email || 'su correo'}
              </p>
            </div>

            {/* Alerta de notificación si se inicia descarga */}
            {downloadSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono rounded-xl flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>{downloadSuccess}</span>
              </div>
            )}

            {/* Descargas simuladas directas */}
            <div className="space-y-3">
              <span className="block font-mono text-xs uppercase tracking-wider text-gray-500 font-medium">
                Descargas disponibles ahora mismo
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => handleDownload('PDF')}
                  className="p-3.5 bg-white border border-gray-200 rounded-xl hover:border-black transition-all flex items-center justify-between text-left group"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-gray-950 block">
                      Descargar PDF
                    </span>
                    <span className="font-mono text-[10px] text-gray-500 block mt-0.5">
                      Edición Maquetada
                    </span>
                  </div>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </button>

                <button
                  onClick={() => handleDownload('EPUB')}
                  className="p-3.5 bg-white border border-gray-200 rounded-xl hover:border-black transition-all flex items-center justify-between text-left group"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-gray-950 block">
                      Descargar EPUB
                    </span>
                    <span className="font-mono text-[10px] text-gray-500 block mt-0.5">
                      Texto Líquido e-Readers
                    </span>
                  </div>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </button>
              </div>
            </div>

            {/* Botón para leer directamente en la web */}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  resetAndClose();
                  onStartReading(book);
                }}
                className="w-full py-3.5 px-6 bg-black text-white rounded-full font-sans font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Comenzar a leer en el lector web</span>
              </button>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full text-center text-xs font-mono text-gray-500 hover:text-black underline block pt-2"
            >
              Volver a la biblioteca
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
