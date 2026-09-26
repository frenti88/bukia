import React, { useState } from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';
import { BookCoverArt } from './BookCoverArt';
import { X, Check, ShieldCheck, Download, BookOpen, ArrowRight, Loader2, Sparkles, CreditCard, Apple } from 'lucide-react';

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
    // Generate an authentic editorial text file blob so the user actually gets a real downloaded file
    const content = `========================================================
BOOKIA — EDITORIAL DIGITAL DE LECTURA CONCENTRADA
Edición oficial en formato ${format}
========================================================

TÍTULO: ${book.title}
SUBTÍTULO: ${book.subtitle}
FIRMA EDITORIAL: ${writer?.displayName} (${writer?.archetype})
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
      className="fixed inset-0 z-50 overflow-y-auto bg-ink/75 backdrop-blur-sm flex justify-center items-center p-4 transition-all"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="relative bg-paper w-full max-w-lg rounded-[2px] shadow-2xl border border-ink/15 overflow-hidden">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-ink/10 flex items-center justify-between bg-paper-warm/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-editorial-terracotta" />
            <span className="font-mono text-xs uppercase tracking-widest-editorial text-ink font-medium">
              {step === 'success' ? 'Adquisición Completada' : 'Checkout Demo · US$1'}
            </span>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 text-ink-muted hover:text-ink rounded-full transition-colors"
            aria-label="Cerrar ventana de pago"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* STEP 1: SUMMARY & QUICK PAYMENT */}
        {step === 'summary' && (
          <form onSubmit={handleSimulatePayment} className="p-6 sm:p-8 space-y-6">
            
            {/* Book Info Card */}
            <div className="p-4 bg-paper-pure rounded border border-ink/10 flex items-center gap-4">
              <BookCoverArt book={book} size="sm" showShadow={false} />
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[10px] text-ink-muted uppercase block">
                  {book.category}
                </span>
                <h4 className="font-serif text-base font-medium text-ink truncate">
                  {book.title}
                </h4>
                <p className="font-mono text-xs text-ink-muted mt-0.5">
                  {writer?.displayName} · {book.readingTime}
                </p>
                <div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-editorial-terracotta font-medium">
                  <span>PDF + EPUB incluidos</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono text-sm font-semibold text-ink">
                  US${book.price}.00
                </span>
              </div>
            </div>

            {/* Email input for receipt */}
            <div>
              <label htmlFor="user-email" className="block font-mono text-xs text-ink-muted uppercase tracking-wider mb-2">
                Correo electrónico para envío de archivos
              </label>
              <input
                id="user-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="su-correo@ejemplo.com"
                className="w-full px-4 py-2.5 bg-paper-pure border border-ink/20 rounded-[2px] font-sans text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink"
              />
              <span className="block mt-1.5 text-[11px] font-mono text-ink-faint">
                Sin contraseñas ni formularios engorrosos de dirección.
              </span>
            </div>

            {/* Payment Method Representation */}
            <div>
              <span className="block font-mono text-xs text-ink-muted uppercase tracking-wider mb-2">
                Método de pago (Simulación Demo)
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple-pay')}
                  className={`p-3 rounded-[2px] border text-left flex items-center gap-2.5 transition-all ${
                    paymentMethod === 'apple-pay'
                      ? 'border-ink bg-paper-warm font-medium'
                      : 'border-ink/15 hover:border-ink/30 bg-paper-pure'
                  }`}
                >
                  <Apple className="w-4 h-4 text-ink" />
                  <span className="text-xs font-mono">Apple Pay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-[2px] border text-left flex items-center gap-2.5 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-ink bg-paper-warm font-medium'
                      : 'border-ink/15 hover:border-ink/30 bg-paper-pure'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-ink" />
                  <span className="text-xs font-mono">Tarjeta Demo</span>
                </button>
              </div>
            </div>

            {/* Price breakdown */}
            <div className="pt-4 border-t border-ink/10 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-ink-muted">
                <span>Subtotal (Edición Digital)</span>
                <span>US$1.00</span>
              </div>
              <div className="flex justify-between text-ink-muted">
                <span>Impuestos / Envío digital</span>
                <span>US$0.00</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-ink pt-2 border-t border-ink/5">
                <span>Total a autorizar</span>
                <span>US$1.00</span>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="p-3 bg-paper-warm rounded border border-ink/10 text-[11px] font-mono text-ink-muted leading-relaxed">
              <strong>Modo de demostración de UX:</strong> No se realizará ningún cargo a su cuenta bancaria. Este flujo valida la velocidad y baja fricción de compra de BOOKIA.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-ink text-paper rounded-[2px] font-sans font-medium text-sm flex items-center justify-center gap-2 hover:bg-ink-light transition-all shadow-sm"
            >
              <span>Autorizar Demo · US$1.00</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        )}

        {/* STEP 2: PROCESSING SIMULATION */}
        {step === 'processing' && (
          <div className="p-12 text-center flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-8 h-8 text-editorial-terracotta animate-spin" />
            <h4 className="font-serif text-xl text-ink font-light">
              Preparando su edición digital...
            </h4>
            <p className="font-mono text-xs text-ink-muted">
              Generando firmas criptográficas para PDF y EPUB
            </p>
          </div>
        )}

        {/* STEP 3: SUCCESS CONFIRMATION */}
        {step === 'success' && (
          <div className="p-6 sm:p-8 space-y-6 animate-fadeIn">
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-ink font-normal">
                ¡Gracias por su lectura!
              </h3>
              <p className="mt-1 text-xs font-mono text-ink-muted">
                Orden #BK-{(Math.random() * 9000 + 1000).toFixed(0)} · Confirmación enviada a {email || 'su correo'}
              </p>
            </div>

            {/* Notification alert if download triggered */}
            {downloadSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono rounded flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>{downloadSuccess}</span>
              </div>
            )}

            {/* Direct simulated downloads */}
            <div className="space-y-3">
              <span className="block font-mono text-xs uppercase tracking-wider text-ink-muted">
                Descargas disponibles ahora mismo
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => handleDownload('PDF')}
                  className="p-3.5 bg-paper-pure border border-ink/15 rounded hover:border-ink transition-all flex items-center justify-between text-left group"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-ink block">
                      Descargar PDF
                    </span>
                    <span className="font-mono text-[10px] text-ink-muted block mt-0.5">
                      Edición Maquetada · 48 págs
                    </span>
                  </div>
                  <Download className="w-4 h-4 text-ink-muted group-hover:text-ink transition-colors" />
                </button>

                <button
                  onClick={() => handleDownload('EPUB')}
                  className="p-3.5 bg-paper-pure border border-ink/15 rounded hover:border-ink transition-all flex items-center justify-between text-left group"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-ink block">
                      Descargar EPUB
                    </span>
                    <span className="font-mono text-[10px] text-ink-muted block mt-0.5">
                      Texto Líquido para e-Readers
                    </span>
                  </div>
                  <Download className="w-4 h-4 text-ink-muted group-hover:text-ink transition-colors" />
                </button>
              </div>
            </div>

            {/* Read now in web reader button */}
            <div className="pt-4 border-t border-ink/10">
              <button
                onClick={() => {
                  resetAndClose();
                  onStartReading(book);
                }}
                className="w-full py-3.5 px-6 bg-ink text-paper rounded-[2px] font-sans font-medium text-sm flex items-center justify-center gap-2 hover:bg-ink-light transition-all shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-editorial-terracotta" />
                <span>Comenzar a leer en el lector web</span>
              </button>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full text-center text-xs font-mono text-ink-muted hover:text-ink underline block pt-2"
            >
              Volver al catálogo principal
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
