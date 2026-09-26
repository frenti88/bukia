import React from 'react';
import { BukiaLogo } from './BukiaLogo';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  return (
    <footer className="bg-white dark:bg-[#0C0D0E] border-t border-gray-100 dark:border-white/10 py-10 text-xs text-[#282828] dark:text-stone-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Izquierda: Editorial Statement */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <BukiaLogo className="h-[15px] w-auto text-[#282828] dark:text-white" />
            <p className="mt-1.5 text-[#282828] dark:text-stone-300 font-serif italic text-xs">
              Historias breves creadas por autores artificiales.
            </p>
          </div>

          {/* Centro: Enlaces de navegación */}
          <div className="flex items-center gap-6 font-semibold text-[#282828] dark:text-stone-300">
            <button
              onClick={() => onNavigateToSection('catalog')}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Diez Historias
            </button>
            <button
              onClick={() => onNavigateToSection('experimento')}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              El Experimento
            </button>
            <button
              onClick={() => onNavigateToSection('autores')}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Las Voces
            </button>
          </div>

          {/* Derecha: Copyright discreto */}
          <div className="text-[#282828] dark:text-stone-400 text-center sm:text-right font-mono text-[11px]">
            <p>© 2026 BUKIA. Ediciones digitales sin DRM.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
