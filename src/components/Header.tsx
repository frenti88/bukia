import React from 'react';
import { Search } from 'lucide-react';
import { BukiaLogo } from './BukiaLogo';

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onJoinClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onNavigateToSection,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo + Enlaces de navegación */}
          <div className="flex items-center gap-8">
            {/* Logotipo BUKIA + Subtítulo editorial */}
            <button
              onClick={() => onNavigateToSection('hero')}
              className="flex items-center gap-2.5 group text-left focus:outline-none"
              aria-label="BUKIA Editorial Experimental"
            >
              <BukiaLogo className="h-[18px] sm:h-[21px] w-auto transition-transform group-hover:scale-[1.02] text-[#282828]" />
              <div className="hidden sm:flex flex-col border-l border-stone-300 pl-2">
                <span className="text-[8px] font-mono text-[#282828] font-medium tracking-wider uppercase leading-none">
                  EDITORIAL
                </span>
                <span className="text-[7px] font-mono text-[#282828] font-medium tracking-wider uppercase mt-0.5 leading-none">
                  EXPERIMENTAL
                </span>
              </div>
            </button>

            {/* Enlaces de navegación alineados al journey */}
            <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-[#282828]">
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
                Las Voces
              </button>
            </nav>
          </div>

          {/* Barra de búsqueda central en forma de píldora */}
          <div className="flex-1 max-w-xs hidden sm:block">
            <button
              onClick={onOpenSearch}
              className="w-full bg-[#F3F4F6] hover:bg-[#EAEAEA] text-[#282828] rounded-full py-1.5 px-4 flex items-center gap-2 text-xs font-medium transition-colors text-left"
            >
              <Search className="w-3.5 h-3.5 text-[#282828]" />
              <span className="text-[#282828]">Buscar por historia o autor...</span>
            </button>
          </div>

          {/* Acciones derecha */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="sm:hidden p-2 text-[#282828] hover:text-black"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateToSection('catalog')}
              className="bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-full transition-all shadow-sm"
            >
              Explorar los libros
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
