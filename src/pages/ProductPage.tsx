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
  Sparkles, 
  ShieldCheck, 
  Smartphone,
  ChevronRight
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
  const relatedBooks = allBooks.filter((b) => b.id !== book.id).slice(0, 4);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [book.id]);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24 font-sans">
      
      {/* 1. Breadcrumbs & Top Bar */}
      <div className="border-b border-gray-100 bg-[#FAFAFA]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Breadcrumb links */}
          <div className="flex items-center gap-2 text-xs text-gray-500 overflow-x-auto no-scrollbar whitespace-nowrap">
            <button
              onClick={onBackToHome}
              className="hover:text-black transition-colors flex items-center gap-1 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a la biblioteca</span>
            </button>
            <ChevronRight className="w-3 h-3 text-gray-300 flex-shrink-0" />
            <span className="hover:text-black cursor-pointer" onClick={onBackToHome}>
              {book.category}
            </span>
            <ChevronRight className="w-3 h-3 text-gray-300 flex-shrink-0" />
            <span className="font-semibold text-gray-900 truncate max-w-[200px]">
              {book.title}
            </span>
          </div>

          {/* Share & Bookmark Actions */}
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
              title="Guardar en lista de lectura"
              aria-label="Guardar"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-black' : ''}`} />
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Product Hero (2 columns) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Big Book Cover Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="w-full max-w-[320px] sm:max-w-[360px] flex justify-center py-4 bg-gradient-to-b from-gray-50/50 to-gray-100/30 rounded-2xl border border-gray-100 p-6 shadow-xs">
              <div className="transform hover:scale-105 transition-transform duration-500">
                <ReplicaBookCover
                  id={book.id}
                  title={book.title}
                  author={book.subtitle}
                  size="hero"
                  showShadow
                  className="w-64 sm:w-72 h-[380px] sm:h-[426px]"
                />
              </div>
            </div>

            {/* Formats and Digital Features Pill */}
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

          {/* Right Column: Title, Author, Pricing & Purchase CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Category and Archetype tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#EBF8F2] text-[#1B7A52] uppercase tracking-wider">
                {book.category}
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-xs font-mono text-gray-500">
                Lectura Concentrada
              </span>
            </div>

            {/* Book Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.12]">
              {book.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-3 font-serif italic text-lg sm:text-xl text-gray-600 leading-relaxed">
              {book.subtitle}
            </p>

            {/* Author info */}
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-xs text-gray-800">
                {(writer?.displayName || book.subtitle).charAt(0)}
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-900">
                  {writer?.displayName || book.subtitle}
                </span>
                <span className="block text-[11px] font-mono text-gray-400">
                  {writer?.archetype || 'Firma de Lectura Intencional'}
                </span>
              </div>
            </div>

            {/* Pricing Box & Purchase CTAs */}
            <div className="mt-8 p-6 bg-[#FAFAFA] rounded-2xl border border-gray-200/80">
              
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">
                    Precio de lanzamiento
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-black text-gray-950">
                      US${book.price}.00
                    </span>
                    <span className="text-xs font-mono text-gray-400">USD</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                    Acceso Digital Vitalicio
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  onClick={() => onBuyBook(book)}
                  className="flex-1 py-3.5 px-6 bg-black hover:bg-gray-800 text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Comprar ahora por US${book.price}.00</span>
                </button>

                <button
                  onClick={() => onOpenPreview(book)}
                  className="py-3.5 px-6 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Leer muestra gratuita</span>
                </button>
              </div>

              <p className="mt-3 text-[11px] font-mono text-gray-400 text-center sm:text-left">
                Pago demo seguro de 1 clic · Descarga inmediata de PDF y EPUB sin registro
              </p>

            </div>

            {/* Reading Specifications Strip */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-xs">
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Extensión
                </span>
                <span className="text-sm font-bold text-gray-900 mt-0.5 block">
                  {book.pageCount} páginas
                </span>
              </div>

              <div className="text-center sm:text-left sm:border-l sm:border-gray-100 sm:pl-4">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Lectura Aprox.
                </span>
                <span className="text-sm font-bold text-gray-900 mt-0.5 block">
                  {book.readingTime}
                </span>
              </div>

              <div className="text-center sm:text-left sm:border-l sm:border-gray-100 sm:pl-4">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Formatos
                </span>
                <span className="text-sm font-bold text-gray-900 mt-0.5 block">
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

            {/* Central Thesis Quote Callout */}
            <div className="mt-8 p-5 bg-[#FAFAFA] border-l-4 border-black rounded-r-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold block mb-1">
                Tesis Central de la Obra
              </span>
              <p className="font-serif italic text-base sm:text-lg text-gray-900 leading-snug">
                «{book.thesisStatement}»
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Deep Dive: Synopsis & Key Takeaways */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Synopsis */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-800 font-semibold block mb-2">
              Resumen Editorial
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              De qué trata esta publicación
            </h2>
            <div className="mt-4 text-base text-gray-600 leading-relaxed space-y-4">
              <p>{book.description}</p>
              <p>
                Diseñado para profesionales y lectores rigurosos que valoran la claridad sobre el volumen. Cada capítulo va directo al núcleo del problema sin anécdotas accesorias ni rodeos innecesarios.
              </p>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="p-6 sm:p-8 bg-[#FAFAFA] rounded-2xl border border-gray-200">
            <h3 className="font-bold text-lg text-gray-950 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Lo que aprenderás en menos de media hora</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <span>Modelos mentales para evaluar escenarios complejos con serenidad y lucidez.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <span>Identificación de sesgos cognitivos automáticos que distorsionan nuestras elecciones.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <span>Estrategias de bajo rozamiento para aplicar conocimiento inmediato en proyectos reales.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <span>Un marco estructurado y portable para compartir con tu equipo o círculo cercano.</span>
              </div>
            </div>
          </div>

          {/* Editorial Sample Excerpt Preview Banner */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block mb-1">
                Lectura libre sin registro
              </span>
              <h4 className="font-bold text-lg text-gray-900">
                ¿Prefieres comprobar la prosa antes de comprar?
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Lee el primer capítulo completo en nuestro lector web sin descargas ni formularios.
              </p>
            </div>

            <button
              onClick={() => onOpenPreview(book)}
              className="flex-shrink-0 bg-black hover:bg-gray-800 text-white rounded-full px-5 py-2.5 text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Abrir primer capítulo</span>
            </button>
          </div>

        </div>
      </div>

      {/* 4. Atmosphere Photography Section (if available) */}
      {book.editorialImages && book.editorialImages[0] && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-3">
              Atmósfera y Contexto Editorial
            </span>
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-gray-100 shadow-sm">
              <img
                src={book.editorialImages[0].url}
                alt={book.editorialImages[0].caption}
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-xs font-mono text-gray-400 text-right">
              {book.editorialImages[0].caption}
            </p>
          </div>
        </div>
      )}

      {/* 5. Author / Voice Card */}
      {writer && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-100">
          <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-[#FAFAFA] rounded-2xl border border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-xl text-gray-900 shadow-xs">
                  {writer.displayName.charAt(0)}
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-semibold block">
                    Firma Editorial · Arquetipo {writer.archetypeCode}
                  </span>
                  <h3 className="font-bold text-xl text-gray-950">
                    {writer.displayName} ({writer.archetype})
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 max-w-lg leading-relaxed">
                    {writer.shortBio}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 text-right font-mono text-xs text-gray-400">
                <span>Género: {writer.genres[0]}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Related Recommended Books */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-1">
              Colección Complementaria
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              Quienes leyeron esto también exploraron
            </h3>
          </div>

          <button
            onClick={onBackToHome}
            className="text-xs font-semibold text-black hover:underline font-mono"
          >
            Ver todos los libros →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {relatedBooks.map((relBook) => (
            <div
              key={relBook.id}
              onClick={() => onSelectBook(relBook)}
              className="group bg-white rounded-xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-card-hover hover:border-gray-200 flex flex-col justify-between cursor-pointer"
            >
              <div className="flex items-center justify-center py-2">
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <ReplicaBookCover
                    id={relBook.id}
                    title={relBook.title}
                    author={relBook.subtitle}
                    size="md"
                    showShadow
                  />
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <div className="min-w-0 pr-2">
                  <h4 className="font-semibold text-gray-950 text-xs sm:text-sm truncate group-hover:text-emerald-700 transition-colors">
                    {relBook.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 truncate mt-0.5">
                    US${relBook.price}.00
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-black bg-gray-100 px-2 py-0.5 rounded-full">
                  Ver
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Sticky Bottom Mobile Action Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-3.5 border-t border-gray-200 shadow-2xl flex items-center justify-between gap-3 z-40">
        <div className="min-w-0">
          <span className="text-xs font-bold text-gray-900 truncate block">
            {book.title}
          </span>
          <span className="text-[11px] font-mono text-emerald-700 font-semibold block">
            US${book.price}.00 · PDF + EPUB
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => onOpenPreview(book)}
            className="px-3.5 py-2 bg-white border border-gray-300 text-gray-800 rounded-full text-xs font-semibold"
          >
            Muestra
          </button>
          <button
            onClick={() => onBuyBook(book)}
            className="px-4 py-2 bg-black text-white rounded-full text-xs font-semibold shadow-sm"
          >
            Comprar · US${book.price}
          </button>
        </div>
      </div>

    </div>
  );
};
