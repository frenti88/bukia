import React from 'react';
import { Search } from 'lucide-react';
import { BukiaLogo } from './BukiaLogo';

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onNavigateToSection,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        
        {/* Identidad de Marca: BUKIA */}
        <div className="flex items-center gap-8 sm:gap-10">
          <button
            onClick={() => onNavigateToSection('hero')}
            className="flex items-center text-left focus:outline-none group"
            aria-label="BUKIA — Inicio"
          >
            <BukiaLogo className="h-5 sm:h-6 w-auto text-ink transition-transform group-hover:scale-[1.01]" />
          </button>

          {/* Navegación Editorial Primaria */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-sans font-medium text-stone-700">
            <button
              onClick={() => onNavigateToSection('catalog')}
              className="hover:text-black transition-colors"
            >
              Historias
            </button>
            <button
              onClick={() => onNavigateToSection('autores')}
              className="hover:text-black transition-colors"
            >
              Autores
            </button>
            <button
              onClick={() => onNavigateToSection('experimento')}
              className="hover:text-black transition-colors"
            >
              El experimento
            </button>
          </nav>
        </div>

        {/* Búsqueda Discreta (Sin CTA comercial ruidoso) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 py-1.5 px-3 rounded-full text-xs font-sans text-stone-500 hover:text-black hover:bg-stone-100 transition-colors"
            aria-label="Buscar historias o autores"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Buscar</span>
          </button>
        </div>

      </div>
    </header>
  );
};
