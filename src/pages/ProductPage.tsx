import React, { useEffect, useState } from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';
import { ReplicaBookCover } from '../components/ReplicaBookCover';
import { 
  ArrowLeft, 
  BookOpen, 
  ShoppingBag, 
  Check, 
  Share2, 
  Bookmark, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  Sparkles,
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
  const [isBookmarked, setIsBookmarked] = useState(false);

  const writer = WRITERS[book.writerId];
  
  // Encontrar la recomendación principal para el loop de recompra
  const recommendedBook = (book.nextRecommendedId && allBooks.find((b) => b.id === book.nextRecommendedId))
    || allBooks.find((b) => b.id !== book.id && b.writerId === book.writerId)
    || allBooks.find((b) => b.id !== book.id)
    || allBooks[0];

  const otherAuthorBooks = allBooks.filter((b) => b.writerId === book.writerId && b.id !== book.id);

  // Scroll al inicio al cambiar de libro
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [book.id]);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const formattedPrice = book.priceDisplay || `$${book.price.toLocaleString('es-CO')} COP`;

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24 font-sans">
      
      {/* 1. Barra superior de navegación y migas de pan */}
      <div className="border-b border-gray-100 bg-[#FAFAFA]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-500 overflow-x-auto no-scrollbar whitespace-nowrap">
            <button
              onClick={onBackToHome}
              className="hover:text-black transition-colors flex items-center gap-1 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a las historias</span>
            </button>
            <ChevronRight className="w-3 h-3 text-[#282828] flex-shrink-0" />
            <span className="text-gray-400 font-mono text-[11px]">
              {book.category}
            </span>
            <ChevronRight className="w-3 h-3 text-[#282828] flex-shrink-0" />
            <span className="font-semibold text-gray-950 truncate max-w-[220px]">
              {book.title}
            </span>
          </div>

          {/* Acciones de compartir y favoritos */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 hover:border-black rounded-full text-xs font-medium text-gray-700 transition-colors shadow-xs"
              title="Copiar enlace"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">¡Enlace copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-gray-500" />
                  <span className="hidden sm:inline">Compartir</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-1.5 bg-white border border-gray-200 hover:border-black rounded-full text-xs transition-colors shadow-xs ${
                isBookmarked ? 'text-black fill-current border-black' : 'text-gray-500'
              }`}
              title="Guardar en favoritos"
              aria-label="Guardar"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-black' : ''}`} />
            </button>
          </div>

        </div>
      </div>

      {/* 2. Hero de Producto (2 Columnas) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Portada en Gran Formato (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="w-full max-w-[320px] sm:max-w-[360px] flex justify-center py-6 bg-gradient-to-b from-stone-50 to-stone-100/50 rounded-2xl border border-stone-200/60 p-6 shadow-xs">
              <div className="transform hover:scale-105 transition-transform duration-500">
                <ReplicaBookCover
                  id={book.id}
                  title={book.title}
                  author={writer?.displayName || book.subtitle}
                  size="hero"
                  showShadow
                  className="w-64 sm:w-72 h-[380px] sm:h-[426px]"
                />
              </div>
            </div>

            {/* Píldora de formatos y lectura sin DRM */}
            <div className="mt-6 w-full max-w-[360px] space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono bg-[#FAFAFA] border border-gray-200 px-4 py-2.5 rounded-xl text-gray-600">
                <span className="font-semibold text-gray-900">Formatos incluidos:</span>
                <div className="flex items-center gap-2">
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200 font-bold text-gray-950">PDF</span>
                  <span>+</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200 font-bold text-gray-950">EPUB</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Edición digital abierta sin DRM · Compatible con Kindle y iPad</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Título, Premisa Cinematográfica y Acciones (7 columnas) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Categoría y etiqueta de Autor Artificial */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 uppercase tracking-wider font-mono">
                {book.category}
              </span>
              <span className="text-[#282828]">·</span>
              <span className="text-xs font-mono text-amber-900 font-semibold bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                Una historia de {writer?.displayName || 'BUKIA'}
              </span>
            </div>

            {/* Título de la obra */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.12] uppercase font-heading">
              {book.title}
            </h1>

            {/* Premisa cinematográfica de 20-40 palabras (establece personaje, situación, anomalía y pregunta implícita) */}
            <div className="mt-4 p-4 rounded-xl bg-stone-50 border-l-4 border-black">
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed">
                «{book.premise || book.subtitle}»
              </p>
            </div>

            {/* Ficha de autor */}
            <div className="mt-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center font-serif text-sm font-bold text-gray-900 shadow-xs">
                {writer?.editorialPortrait.symbol || (writer?.displayName || 'B').charAt(0)}
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-950 uppercase tracking-tight">
                  Una historia de {writer?.displayName || 'BUKIA'}
                </span>
                <span className="block text-[11px] font-mono text-gray-500">
                  {writer?.voiceTone ? `Voz ${writer.voiceTone}` : (writer?.phrase || 'Voz creada para explorar lo no dicho')}
                </span>
              </div>
            </div>

            {/* CAJA DE ACCIÓN: VENDER MEDIANTE CURIOSIDAD, NO PRESIÓN */}
            <div className="mt-8 p-6 bg-[#FAFAFA] rounded-2xl border border-gray-200">
              
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">
                    Precio por historia
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-gray-950 font-mono">
                      {formattedPrice}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-stone-200/80 text-stone-800 text-[11px] font-mono font-medium">
                    Acceso Digital Vitalicio
                  </span>
                </div>
              </div>

              {/* ACCIONES: CTA PRINCIPAL DOMINANTE = "Leer gratis" */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                
                {/* CTA DOMINANTE: LEER GRATIS */}
                <button
                  onClick={() => onOpenPreview(book)}
                  className="flex-1 py-3.5 px-6 bg-black hover:bg-stone-800 text-white rounded-full font-medium text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Leer gratis</span>
                </button>

                {/* CTA SECUNDARIO: COMPRAR */}
                <button
                  onClick={() => onBuyBook(book)}
                  className="py-3.5 px-6 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-gray-500" />
                  <span>Comprar · {formattedPrice}</span>
                </button>

              </div>

              <p className="mt-3.5 text-[11px] font-mono text-gray-400 text-center sm:text-left">
                Lectura inmediata de muestra sin registro ni tarjeta · Si te gusta, continúa la historia por {formattedPrice}
              </p>

            </div>

            {/* Tira de especificaciones de lectura */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-xs">
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Tiempo Estimado
                </span>
                <div className="flex items-center gap-1.5 mt-0.5 justify-center sm:justify-start">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-sm font-bold text-gray-900 font-mono">
                    {book.readingTime}
                  </span>
                </div>
              </div>

              <div className="text-center sm:text-left sm:border-l sm:border-gray-100 sm:pl-4">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Extensión
                </span>
                <div className="flex items-center gap-1.5 mt-0.5 justify-center sm:justify-start">
                  <FileText className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-sm font-bold text-gray-900 font-mono">
                    {book.pageCount} páginas
                  </span>
                </div>
              </div>

              <div className="text-center sm:text-left sm:border-l sm:border-gray-100 sm:pl-4">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Formatos
                </span>
                <span className="text-sm font-bold text-gray-900 mt-0.5 block font-mono">
                  PDF + EPUB
                </span>
              </div>

              <div className="text-center sm:text-left sm:border-l sm:border-gray-100 sm:pl-4">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Idioma
                </span>
                <span className="text-sm font-bold text-gray-900 mt-0.5 block">
                  Español
                </span>
              </div>
            </div>

            {/* Tesis / Cita de tensión */}
            <div className="mt-8 p-5 bg-[#FAFAFA] border-l-4 border-amber-800/80 rounded-r-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-semibold block mb-1">
                Tesis Central
              </span>
              <p className="font-serif italic text-base sm:text-lg text-gray-900 leading-snug">
                «{book.thesisStatement}»
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Inmersión Editorial: De qué trata la historia */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-2">
              Sinopsis Curada
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight font-heading">
              El dilema de esta historia
            </h2>
            <div className="mt-4 text-base text-gray-600 leading-relaxed space-y-4 font-sans">
              <p>{book.description}</p>
              <p>
                Diseñado para leerse de principio a fin en una sola sesión de aproximadamente {book.readingTime}. Una narrativa condensada donde cada frase impulsa el desenlace.
              </p>
            </div>
          </div>

          {/* Banner de inicio de lectura inmediata */}
          <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <span className="font-mono text-[10px] text-amber-900 uppercase tracking-wider font-semibold block mb-1">
                Lectura libre sin registro
              </span>
              <h4 className="font-bold text-base sm:text-lg text-gray-900">
                ¿Prefieres empezar a leer ahora mismo?
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Lee las primeras páginas en nuestro lector web sin descargas ni formularios.
              </p>
            </div>

            <button
              onClick={() => onOpenPreview(book)}
              className="flex-shrink-0 bg-black hover:bg-stone-800 text-white rounded-full px-6 py-3 text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Empezar a leer gratis</span>
            </button>
          </div>

        </div>
      </div>

      {/* 4. PERFIL DEL AUTOR ARTIFICIAL */}
      {writer && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-100">
          <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-[#FAFAFA] rounded-2xl border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center font-serif text-2xl text-gray-900 shadow-xs flex-shrink-0">
                  {writer.editorialPortrait.symbol || '✦'}
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-900 font-semibold block">
                    {writer?.gender === 'femenina' ? 'Autora Oficial' : 'Autor Oficial'} · Las voces de BUKIA
                  </span>
                  <h3 className="font-bold text-xl text-gray-950 uppercase tracking-tight">
                    {writer.displayName}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-lg">
                    {writer.shortBio}
                  </p>
                  {writer.territory && (
                    <p className="text-xs font-mono text-gray-600 mt-1.5">
                      <strong className="text-gray-900">Territorio:</strong> {writer.territory}
                    </p>
                  )}
                  <p className="text-xs font-serif italic text-amber-900/90 mt-1.5">
                    «{writer.phrase}»
                  </p>
                </div>
              </div>

              {otherAuthorBooks.length > 0 && (
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => onSelectBook(otherAuthorBooks[0])}
                    className="w-full sm:w-auto px-4 py-2.5 bg-white border border-gray-300 hover:border-black rounded-full text-xs font-semibold text-gray-900 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Leer otra historia de {writer.displayName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* 5. POSTCOMPRA & RECOMENDACIÓN DIRECTA: UN SOLO LIBRO RECOMENDADO (LOOP) */}
      {recommendedBook && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-1">
                Tu Próxima Historia
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Si te gustó esta historia, prueba ahora
              </h3>
            </div>

            {/* Tarjeta única destacada de recomendación para alimentar el loop */}
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              
              {/* Portada del libro recomendado */}
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

              {/* Datos y CTA de la recomendación */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-900 font-semibold">
                    {recommendedBook.category}
                  </span>
                  <span className="text-[#282828]">·</span>
                  <span className="text-[11px] font-mono text-gray-600">
                    Una historia de {WRITERS[recommendedBook.writerId]?.displayName || 'BUKIA'} · {recommendedBook.readingTime}
                  </span>
                </div>

                <h4
                  onClick={() => onSelectBook(recommendedBook)}
                  className="font-heading text-xl sm:text-2xl font-bold text-gray-950 uppercase cursor-pointer hover:text-amber-800 transition-colors"
                >
                  {recommendedBook.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-serif italic">
                  «{recommendedBook.premise || recommendedBook.subtitle}»
                </p>

                <div className="mt-5 flex items-center gap-3 justify-center sm:justify-start">
                  <button
                    onClick={() => onOpenPreview(recommendedBook)}
                    className="px-5 py-2.5 bg-black hover:bg-stone-800 text-white rounded-full text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Leer gratis</span>
                  </button>

                  <button
                    onClick={() => onSelectBook(recommendedBook)}
                    className="px-4 py-2.5 bg-white border border-gray-300 hover:border-black rounded-full text-xs font-semibold text-gray-800 transition-colors"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 6. Barra fija inferior para dispositivos móviles */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-3.5 border-t border-gray-200 shadow-2xl flex items-center justify-between gap-3 z-40">
        <div className="min-w-0">
          <span className="text-xs font-bold text-gray-900 truncate block font-serif">
            {book.title}
          </span>
          <span className="text-[11px] font-mono text-gray-500 font-semibold block">
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
            className="px-3.5 py-2 bg-white border border-gray-300 text-gray-800 rounded-full text-xs font-semibold"
          >
            Comprar
          </button>
        </div>
      </div>

    </div>
  );
};
