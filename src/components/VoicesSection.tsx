import React from 'react';
import { Writer, Book } from '../types';
import { WRITERS_LIST } from '../data/writers';
import { BOOKS } from '../data/books';
import { ArrowUpRight, Feather, Sparkles } from 'lucide-react';

interface VoicesSectionProps {
  onSelectBook: (book: Book) => void;
}

export const VoicesSection: React.FC<VoicesSectionProps> = ({ onSelectBook }) => {
  return (
    <section id="voces" className="py-20 md:py-28 border-b border-ink/10 bg-paper-warm/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-editorial-terracotta uppercase tracking-widest-editorial">
              Firmas Editoriales
            </span>
            <span className="font-mono text-xs text-ink-muted">· Sistema Creativo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink font-light tracking-tight leading-tight">
            Cinco voces. Cinco arquetipos de pensamiento.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-muted font-sans font-light leading-relaxed">
            Las publicaciones de BUKIA nacen de identidades editoriales concebidas con estilos, ritmos y vocabularios estrictamente diferenciados. Cada voz atiende una necesidad distinta de claridad, emoción o perspectiva.
          </p>
        </div>

        {/* Voices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WRITERS_LIST.map((writer) => {
            const firstBookId = writer.books[0];
            const book = BOOKS[firstBookId];

            return (
              <div
                key={writer.id}
                className="bg-paper p-8 rounded-[2px] border border-ink/10 shadow-paper-sheet flex flex-col justify-between hover:border-ink/30 transition-all duration-300 group"
              >
                <div>
                  {/* Top archetype badge & symbol */}
                  <div className="flex items-center justify-between pb-6 border-b border-ink/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-paper-warm border border-ink/10 flex items-center justify-center font-serif text-lg text-ink font-medium">
                        {writer.editorialPortrait.symbol}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest-editorial text-ink-muted block">
                          Arquetipo {writer.archetypeCode}
                        </span>
                        <span className="font-mono text-xs text-editorial-terracotta font-medium block">
                          {writer.archetype}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-ink-faint">
                      № 0{writer.archetypeCode.charCodeAt(0) - 64}
                    </span>
                  </div>

                  {/* Writer Name & Bio */}
                  <div className="mt-6">
                    <h3 className="font-serif text-2xl text-ink font-normal group-hover:text-editorial-terracotta transition-colors">
                      {writer.displayName}
                    </h3>
                    <p className="mt-3 text-sm text-ink-muted font-sans leading-relaxed">
                      {writer.shortBio}
                    </p>
                  </div>

                  {/* Themes as understated tags */}
                  <div className="mt-6 pt-4 border-t border-ink/5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint block mb-2">
                      Territorios temáticos
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {writer.themes.slice(0, 3).map((theme) => (
                        <span
                          key={theme}
                          className="px-2 py-0.5 bg-paper-warm text-ink-muted rounded-full text-[11px] font-mono"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Published Book Trigger */}
                {book && (
                  <div className="mt-8 pt-4 border-t border-ink/10">
                    <button
                      onClick={() => onSelectBook(book)}
                      className="w-full flex items-center justify-between p-2.5 rounded bg-paper-warm hover:bg-ink hover:text-paper transition-colors text-left group/btn"
                    >
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted group-hover/btn:text-paper-subtle block">
                          Obra Publicada
                        </span>
                        <span className="font-serif text-sm font-medium text-ink group-hover/btn:text-paper line-clamp-1">
                          {book.title}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover/btn:text-paper flex-shrink-0 ml-2" />
                    </button>
                  </div>
                )}

              </div>
            );
          })}

          {/* 6th Card: The Editorial Colophon Card */}
          <div className="bg-ink text-paper p-8 rounded-[2px] border border-ink flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-paper/10 flex items-center justify-center font-serif text-lg text-paper mb-6">
                ✦
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest-editorial text-paper/60 block mb-2">
                Criterio de Edición
              </span>
              <h3 className="font-serif text-2xl font-light text-paper leading-snug">
                El rigor de la brevedad deliberada.
              </h3>
              <p className="mt-4 text-sm text-paper/80 font-sans leading-relaxed font-light">
                Cada manuscrito atraviesa un proceso de depuración implacable. Suprimimos la digresión, el relleno y las fórmulas vacías hasta que sólo perdura aquello que transforma la mirada del lector.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-paper/15 font-mono text-xs text-paper/60 flex items-center justify-between">
              <span>Edición 2026</span>
              <span>Madrid · Ciudad de México</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
