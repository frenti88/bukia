import React, { useState } from 'react';
import { WRITERS_LIST } from '../data/writers';
import { Book } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

interface AuthorsSectionProps {
  allBooks: Book[];
  onSelectBook: (book: Book) => void;
  onExploreCatalog: () => void;
}

export const AuthorsSection: React.FC<AuthorsSectionProps> = ({
  allBooks,
  onSelectBook,
  onExploreCatalog,
}) => {
  const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);

  const handleAuthorClick = (writerId: string) => {
    setSelectedAuthorId(writerId === selectedAuthorId ? null : writerId);
  };

  return (
    <section id="autores" className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-2">
            Firma Editorial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Cinco autores. Ninguno existe.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
            Cada firma fue creada con una voz particular, obsesiones temáticas y una sintaxis inconfundible. Elige un autor y explora sus historias.
          </p>
        </div>

        {/* Cuadrícula de 5 autores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {WRITERS_LIST.map((writer) => {
            const writerBooks = allBooks.filter((b) => b.writerId === writer.id);
            const isSelected = selectedAuthorId === writer.id;

            return (
              <div
                key={writer.id}
                className={`bg-[#FAFAFA] rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between ${
                  isSelected ? 'border-black ring-1 ring-black bg-stone-50' : 'border-gray-200/80 hover:border-gray-300 hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Símbolo / Retrato editorial abstracto */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg font-serif text-gray-900 shadow-xs">
                      {writer.editorialPortrait.symbol || '✦'}
                    </div>

                    <span className="font-mono text-[11px] text-gray-400 font-medium">
                      {writerBooks.length} {writerBooks.length === 1 ? 'libro' : 'libros'}
                    </span>
                  </div>

                  {/* Nombre */}
                  <h3 className="font-serif text-lg font-bold text-gray-950 uppercase tracking-tight">
                    {writer.displayName}
                  </h3>

                  {/* Frase de identidad */}
                  <p className="mt-2 text-xs font-serif italic text-gray-700 leading-relaxed">
                    «{writer.phrase || writer.voiceDescription}»
                  </p>

                  {/* Especialidad narrativa */}
                  <div className="mt-4 pt-3 border-t border-gray-200/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                      Especialidad
                    </span>
                    <p className="text-xs font-sans text-gray-600 line-clamp-2">
                      {writer.specialty || writer.genres.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Libros del autor o CTA */}
                <div className="mt-6 pt-3 border-t border-gray-200/60">
                  <div className="space-y-1.5 mb-3">
                    {writerBooks.map((book) => (
                      <button
                        key={book.id}
                        onClick={() => onSelectBook(book)}
                        className="w-full text-left p-1.5 rounded hover:bg-white transition-colors flex items-center justify-between group/link text-xs"
                      >
                        <span className="font-medium text-gray-800 truncate pr-2 group-hover/link:text-black">
                          {book.title}
                        </span>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover/link:text-black flex-shrink-0" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (writerBooks[0]) onSelectBook(writerBooks[0]);
                      else onExploreCatalog();
                    }}
                    className="w-full py-2 bg-white hover:bg-black hover:text-white border border-gray-300 rounded-full text-xs font-semibold text-gray-900 transition-all flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Conocer a {writer.displayName.split(' ')[0]}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
