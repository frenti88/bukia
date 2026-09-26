import React from 'react';
import { ArrowUp, BookOpen, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenSearch: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToSection,
  onOpenSearch,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-paper pt-16 pb-12 border-t border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-paper/15">
          
          {/* Brand Colophon (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[2px] bg-paper text-ink flex items-center justify-center font-serif text-lg font-bold">
                B
              </div>
              <span className="font-serif text-2xl tracking-widest text-paper">
                BOOKIA
              </span>
            </div>

            <p className="font-serif italic text-base text-paper/80 max-w-sm font-light leading-relaxed">
              «Ideas que respetan el tiempo del lector. Historias que no necesitan cientos de páginas para conmover.»
            </p>

            <p className="font-sans text-xs text-paper/60 max-w-md leading-relaxed">
              Editorial digital dedicada a publicaciones breves originales (~50 páginas) en formatos abiertos PDF y EPUB. Dirección artística curada y redacción rigurosa.
            </p>

            <div className="pt-2 font-mono text-[11px] text-paper/50">
              <span>Edición inicial de 5 obras</span> · <span>US$1.00 por publicación</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-paper/40 uppercase tracking-widest-editorial block mb-4">
              Exploración
            </span>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigateToSection('catalogo')}
                  className="text-paper/80 hover:text-paper transition-colors"
                >
                  Catálogo Completo (5 Obras)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('voces')}
                  className="text-paper/80 hover:text-paper transition-colors"
                >
                  Las 5 Voces Editoriales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('manifiesto')}
                  className="text-paper/80 hover:text-paper transition-colors"
                >
                  El Manifiesto de Brevedad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('transparencia')}
                  className="text-paper/80 hover:text-paper transition-colors"
                >
                  Transparencia Editorial
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSearch}
                  className="text-editorial-terracotta hover:underline font-medium"
                >
                  Búsqueda Instantánea (⌘K)
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial Integrity & Standards (4 cols) */}
          <div className="md:col-span-4 space-y-3 font-sans text-xs text-paper/70">
            <span className="font-mono text-paper/40 uppercase tracking-widest-editorial block mb-4">
              Criterio de Publicación
            </span>
            <p className="leading-relaxed">
              Todas las obras de no ficción se construyen sobre datos contrastables y principios observables, sin recurrir a investigaciones espurias ni retórica de autoayuda.
            </p>
            <div className="p-3 bg-paper/5 rounded border border-paper/10 font-mono text-[11px] text-paper/80 mt-4 space-y-1">
              <div className="flex justify-between">
                <span>Accesibilidad</span>
                <span className="text-emerald-400">WCAG AA Compliant</span>
              </div>
              <div className="flex justify-between">
                <span>Formatos</span>
                <span>PDF + EPUB Universal</span>
              </div>
              <div className="flex justify-between">
                <span>Gestión de derechos</span>
                <span>Sin DRM restrictivo</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-paper/50">
          <div>
            © 2026 BOOKIA Editorial. Todos los derechos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-paper transition-colors"
            aria-label="Volver al inicio de la página"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
