import React from 'react';
import { WRITERS_LIST } from '../data/writers';
import { Book } from '../types';
import { ArrowRight } from 'lucide-react';

interface AuthorsSectionProps {
  allBooks: Book[];
  onSelectBook: (book: Book) => void;
}

export const AuthorsSection: React.FC<AuthorsSectionProps> = ({
  allBooks,
  onSelectBook,
}) => {
  // Frases y sensibilidades literarias directas sin tecnicismos
  const authorEditorialCopies: Record<string, string> = {
    nara: 'Escribe sobre las personas que seguimos queriendo cuando ya no están.',
    vera: 'Escribe sobre lo que somos capaces de hacer cuando nadie nos mira.',
    elio: 'Observa lo cotidiano hasta encontrar algo extraño escondido dentro.',
    nilo: 'Escribe sobre las sombras que habitan en los márgenes de lo comprensible.',
    aren: 'Escribe sobre la fragilidad del tiempo y las preguntas que desafían la realidad.',
  };

  return (
    <section id="voces" className="py-20 sm:py-28 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-tight">
            Las voces de BUKIA
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
            Cinco sensibilidades literarias distintas. Cada una explora un territorio humano particular.
          </p>
        </div>

        {/* Cuadrícula de 5 voces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10">
          {WRITERS_LIST.map((writer) => {
            const writerBooks = allBooks.filter((b) => b.writerId === writer.id);
            const copy = authorEditorialCopies[writer.id] || writer.phrase;

            return (
              <div
                key={writer.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 hover:border-stone-400 transition-all text-left"
              >
                <div>
                  {/* Nombre del Autor en mayúsculas sobrias */}
                  <h3 className="font-heading text-xl font-extrabold text-stone-950 uppercase tracking-tight">
                    {writer.displayName}
                  </h3>

                  {/* Frase / Sensibilidad literaria */}
                  <p className="mt-4 text-sm text-stone-700 font-serif italic leading-relaxed">
                    {copy}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-200/60">
                  <span className="font-mono text-xs text-stone-500 block mb-3">
                    {writerBooks.length} historias
                  </span>

                  {/* Botón de lectura */}
                  <button
                    onClick={() => {
                      if (writerBooks[0]) onSelectBook(writerBooks[0]);
                    }}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-stone-950 hover:text-amber-900 group transition-colors"
                  >
                    <span>Leer a {writer.displayName}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
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
