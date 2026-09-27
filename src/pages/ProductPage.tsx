import React, { useEffect, useState } from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';
import { ReplicaBookCover } from '../components/ReplicaBookCover';
import { 
  ArrowLeft, 
  BookOpen, 
  Check, 
  Share2, 
  ArrowRight
} from 'lucide-react';

interface ProductPageProps {
  book: Book;
  allBooks: Book[];
  onBackToHome: () => void;
  onOpenPreview: (book: Book) => void;
  onBuyBook: (book: Book) => void;
  onSelectBook: (book: Book) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  book,
  allBooks,
  onBackToHome,
  onOpenPreview,
  onBuyBook,
  onSelectBook,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const writer = WRITERS[book.writerId];
  
  // Encontrar la recomendación principal (prioridad: mismo autor)
  const sameAuthorBook = allBooks.find((b) => b.writerId === book.writerId && b.id !== book.id);
  const recommendedBook = sameAuthorBook || (book.nextRecommendedId && allBooks.find((b) => b.id === book.nextRecommendedId)) || allBooks.find((b) => b.id !== book.id) || allBooks[0];

  // Scroll al inicio al montar o cambiar de libro
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [book.id]);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const formattedPrice = '$4.900';

  return (
    <div className="min-h-screen bg-white text-ink pb-24 font-sans">
      
      {/* 1. Barra superior sobria */}
      <nav className="border-b border-stone-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          <button
            onClick={onBackToHome}
            className="hover:text-black transition-colors flex items-center gap-1.5 text-xs sm:text-sm font-sans font-medium text-stone-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a las historias</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-full text-xs font-sans text-stone-700 transition-colors"
            title="Copiar enlace"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Enlace copiado</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">Compartir</span>
              </>
            )}
          </button>

        </div>
      </nav>

      {/* 2. Primer Viewport Editorial Directo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Portada en Gran Formato (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[320px] sm:max-w-[360px] flex justify-center py-6 bg-[#FAF8F5] rounded-2xl border border-stone-200/80 p-6">
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <ReplicaBookCover
                  id={book.id}
                  title={book.title}
                  author={writer?.displayName || book.subtitle}
                  size="hero"
                  showShadow
                  className="w-60 sm:w-68 h-[360px] sm:h-[408px]"
                />
              </div>
            </div>

            {/* Formatos limpios sin ruidos de DRM */}
            <div className="mt-4 text-center">
              <p className="font-mono text-xs text-stone-500">
                Incluye PDF y EPUB · Lectura directa en BUKIA
              </p>
            </div>
          </div>

          {/* Columna Derecha: Título, Premisa, Autor, Tiempo y Acciones (7 cols) */}
          <div className="lg:col-span-7 flex flex-col pt-2">
            
            {/* Título de la obra */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-[1.12] uppercase">
              {book.title}
            </h1>

            {/* Premisa de la historia */}
            <p className="mt-6 font-serif italic text-lg sm:text-xl text-stone-800 leading-relaxed">
              «{book.premise || book.subtitle}»
            </p>

            {/* Ficha de autoría y tiempo */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-stone-700">
              <span className="font-sans font-medium text-stone-900">
                Una historia de {writer?.displayName || 'BUKIA'}.
              </span>
              <span className="text-stone-300">·</span>
              <span className="font-mono text-xs text-stone-500">
                {book.readingTime} · {book.pageCount} páginas
              </span>
            </div>

            {/* CTAs Editoriales: La prueba precede a la transacción */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              {/* CTA Dominante: Leer muestra gratis */}
              <button
                onClick={() => onOpenPreview(book)}
                className="py-3.5 px-8 bg-black hover:bg-stone-800 text-white rounded-full font-sans text-sm font-semibold flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-md"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Leer muestra gratis</span>
              </button>

              {/* CTA Secundario: Comprar · $4.900 */}
              <button
                onClick={() => onBuyBook(book)}
                className="py-3.5 px-6 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 hover:border-black rounded-full font-sans text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <span>Comprar · {formattedPrice}</span>
              </button>

            </div>

            <p className="mt-4 text-xs font-mono text-stone-500">
              Empieza ahora sin registro · Lectura completa disponible por {formattedPrice} COP
            </p>

            {/* Sinopsis narrativa (sin Tesis Central prematura) */}
            <div className="mt-12 pt-8 border-t border-stone-200/80">
              <h2 className="font-heading text-lg font-bold text-stone-950 uppercase tracking-tight mb-3">
                De qué trata esta historia
              </h2>
              <div className="text-sm sm:text-base text-stone-600 leading-relaxed space-y-4 font-sans">
                <p>{book.description}</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Recompra / Post-Lectura: Loop hacia la siguiente historia */}
      {recommendedBook && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-16 border-t border-stone-200/80">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-stone-950 tracking-tight">
                {sameAuthorBook 
                  ? `Si te gustó ${writer?.displayName || 'este estilo'}, hay otra historia suya.`
                  : 'Siguiente lectura sugerida'}
              </h3>
            </div>

            {/* Tarjeta única y limpia de recomendación */}
            <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              
              <div
                onClick={() => onSelectBook(recommendedBook)}
                className="cursor-pointer transform hover:scale-105 transition-transform duration-300 flex-shrink-0"
              >
                <ReplicaBookCover
                  id={recommendedBook.id}
                  title={recommendedBook.title}
                  author={WRITERS[recommendedBook.writerId]?.displayName || recommendedBook.subtitle}
                  size="md"
                  showShadow
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h4
                  onClick={() => onSelectBook(recommendedBook)}
                  className="font-heading text-lg sm:text-xl font-bold text-stone-950 uppercase cursor-pointer hover:text-amber-900 transition-colors"
                >
                  {recommendedBook.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-serif italic">
                  «{recommendedBook.premise || recommendedBook.subtitle}»
                </p>

                <div className="mt-5 flex items-center gap-3 justify-center sm:justify-start">
                  <button
                    onClick={() => onOpenPreview(recommendedBook)}
                    className="px-6 py-2.5 bg-black hover:bg-stone-800 text-white rounded-full text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Leer gratis</span>
                  </button>

                  <button
                    onClick={() => onSelectBook(recommendedBook)}
                    className="px-4 py-2.5 bg-white border border-stone-300 hover:border-black rounded-full text-xs font-medium text-stone-800 transition-colors"
                  >
                    Ver historia
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* 4. Barra fija inferior para mobile */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-3.5 border-t border-stone-200 shadow-xl flex items-center justify-between gap-3 z-40">
        <div className="min-w-0">
          <span className="text-xs font-bold text-stone-900 truncate block font-serif">
            {book.title}
          </span>
          <span className="font-mono text-xs text-stone-500 font-medium block">
            {formattedPrice} · {book.readingTime}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => onOpenPreview(book)}
            className="px-4 py-2 bg-black text-white rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Leer gratis</span>
          </button>
          <button
            onClick={() => onBuyBook(book)}
            className="px-3.5 py-2 bg-white border border-stone-300 text-stone-800 rounded-full text-xs font-medium"
          >
            Comprar · {formattedPrice}
          </button>
        </div>
      </div>

    </div>
  );
};
