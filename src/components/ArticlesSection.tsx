import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReplicaBookCover } from './ReplicaBookCover';

interface ArticleItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorRole: string;
  bookId: string;
}

interface ArticlesSectionProps {
  onReadArticle: (article: ArticleItem) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onReadArticle }) => {
  const articles: ArticleItem[] = [
    {
      id: 'routine-daily-reader',
      date: '23 de Junio, 2026',
      title: 'La Rutina del Lector Diario',
      excerpt: 'Por qué 20 minutos de lectura intencional al día superan a 100 libros hojeados con prisa. Cómo asimilar una página a la vez y construir un hábito duradero.',
      authorName: 'Eddie Harold',
      authorRole: 'Investigador Editorial',
      bookId: 'thinking-fast-and-slow'
    },
    {
      id: 'decoding-complexity',
      date: '27 de Junio, 2026',
      title: 'Descifrando la Complejidad en la Estrategia',
      excerpt: '¿Por qué algunas ideas perduran mientras otras se desvanecen? Analizamos los principios de resistencia estratégica y los modelos mentales que evitan el olvido.',
      authorName: 'Marco S. Levin',
      authorRole: 'Arquitecto de Sistemas',
      bookId: 'start-with-why'
    },
    {
      id: 'psychology-of-wealth',
      date: '4 de Julio, 2026',
      title: 'El Hábito de la Claridad Financiera',
      excerpt: 'Un examen de los puntos ciegos emocionales que gobiernan nuestras decisiones y cómo los patrones de conducta serenos superan a la especulación impulsiva.',
      authorName: 'Morgan Housel',
      authorRole: 'Analista Senior',
      bookId: 'psychology-of-money'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : articles.length - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev < articles.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="articles" className="py-16 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera: Título + Flechas de navegación */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight">
              <span>Maximiza tus </span>
              <strong className="font-extrabold text-black">Resultados de Lectura</strong>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-lg">
              Perspectivas seleccionadas de autores e intelectuales destacados. Resúmenes de libros y modelos mentales aplicables.
            </p>
          </div>

          {/* Flechas de navegación */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors shadow-xs"
              aria-label="Artículo anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center text-white transition-colors shadow-xs"
              aria-label="Artículo siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tarjetas horizontales divididas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.slice(0, 2).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-card-hover transition-all flex flex-col sm:flex-row gap-5 items-center"
            >
              {/* Columna izquierda: Portada del libro */}
              <div className="relative flex-shrink-0 w-28 sm:w-32 flex items-center justify-center">
                <ReplicaBookCover
                  id={article.bookId}
                  title={article.title}
                  author={article.authorName}
                  size="sm"
                  showShadow
                />
              </div>

              {/* Columna derecha: Detalles del artículo */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                <div>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block mb-1">
                    {article.date}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-gray-950 leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-[10px] font-bold flex items-center justify-center">
                      {article.authorName.charAt(0)}
                    </div>
                    <span className="text-xs font-semibold text-gray-800">
                      {article.authorName}
                    </span>
                  </div>

                  <button
                    onClick={() => onReadArticle(article)}
                    className="border border-gray-200 hover:border-black rounded-full px-3.5 py-1 text-xs font-medium text-gray-900 transition-colors"
                  >
                    Leer ahora
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
