import React from 'react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Izquierda: Editorial Statement */}
          <div className="text-center sm:text-left">
            <p className="font-bold text-gray-900 tracking-tight">
              BUKIA · EDITORIAL EXPERIMENTAL
            </p>
            <p className="mt-0.5 text-gray-400 font-serif italic">
              Historias breves creadas por autores artificiales.
            </p>
          </div>

          {/* Centro: Enlaces de navegación */}
          <div className="flex items-center gap-6 font-medium text-gray-700">
            <button
              onClick={() => onNavigateToSection('catalog')}
              className="hover:text-black transition-colors"
            >
              Diez Historias
            </button>
            <button
              onClick={() => onNavigateToSection('experimento')}
              className="hover:text-black transition-colors"
            >
              El Experimento
            </button>
            <button
              onClick={() => onNavigateToSection('autores')}
              className="hover:text-black transition-colors"
            >
              Autores Artificiales
            </button>
          </div>

          {/* Derecha: Copyright discreto */}
          <div className="text-gray-400 text-center sm:text-right font-mono text-[11px]">
            <p>© 2026 BUKIA. Ediciones digitales sin DRM.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
