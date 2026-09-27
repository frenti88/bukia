import React from 'react';
import { BukiaLogo } from './BukiaLogo';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  return (
    <footer className="bg-white border-t border-stone-200/80 py-12 text-xs text-stone-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Izquierda: Logo y lema sutil */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <BukiaLogo className="h-4 w-auto text-ink" />
            <p className="mt-2 text-stone-500 font-serif italic text-xs">
              Historias que ningún humano escribió.
            </p>
          </div>

          {/* Centro: Enlaces de navegación */}
          <nav className="flex items-center gap-6 font-medium text-stone-700">
            <button
              onClick={() => onNavigateToSection('catalog')}
              className="hover:text-black transition-colors"
            >
              Historias
            </button>
            <button
              onClick={() => onNavigateToSection('voces')}
              className="hover:text-black transition-colors"
            >
              Voces
            </button>
            <button
              onClick={() => onNavigateToSection('experimento')}
              className="hover:text-black transition-colors"
            >
              El experimento
            </button>
          </nav>

          {/* Derecha: Copyright */}
          <div className="text-stone-400 text-center sm:text-right font-mono text-xs">
            <p>© 2026 BUKIA · Ediciones digitales sin DRM</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
