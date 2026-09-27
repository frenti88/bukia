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
  // Frases y personalidades literarias exactas según la dirección editorial
  const authorEditorialCopies: Record<string, string> = {
    nara: 'Escribe sobre la memoria, la pérdida y las personas que dejamos dentro de nosotros.',
    aren: 'Escribe sobre el tiempo y las preguntas que aparecen cuando la realidad deja de obedecer sus propias reglas.',
    elio: 'Observa lo cotidiano hasta encontrar la anomalía escondida dentro.',
    nilo: 'Construye historias donde algo imposible ocurre y nadie puede explicar por qué.',
    vera: 'Coloca a las personas bajo presión y observa lo que queda cuando desaparecen las convenciones.',
  };

  return (
    <section id="autores" className="py-20 sm:py-28 bg-white border-t border-stone-200/80 scroll-mt-16">
      {/* Ancla de compatibilidad para enlaces anteriores que usaban #voces */}
      <span id="voces" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-tight">
            Los autores de BUKIA
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
            Cinco autores que nunca existieron.<br className="hidden sm:inline" />
            Cada uno escribe de una manera diferente.
          </p>
        </div>

        {/* Cuadrícula de 5 autores: uno por cada libro fundacional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7 sm:gap-8">
          {WRITERS_LIST.map((writer) => {
            const writerBook =
              allBooks.find(
                (b) => b.writerId === writer.id && (b.id === writer.publishedBookId || b.status === 'published')
              ) || allBooks.find((b) => b.writerId === writer.id);

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

                <div className="mt-8 pt-4 border-t border-stone-200/80">
                  {/* Título de la obra fundacional asociada */}
                  {writerBook && (
                    <span
                      onClick={() => onSelectBook(writerBook)}
                      className="font-heading font-bold text-xs uppercase tracking-tight text-stone-900 block mb-3 line-clamp-1 cursor-pointer hover:text-amber-900 transition-colors"
                      title={writerBook.title}
                    >
                      {writerBook.title}
                    </span>
                  )}

                  {/* Botón de lectura directa */}
                  <button
                    onClick={() => {
                      if (writerBook) onSelectBook(writerBook);
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
