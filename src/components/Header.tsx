import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onJoinClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onNavigateToSection,
  onJoinClick,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo + Enlaces de navegación */}
          <div className="flex items-center gap-8">
            {/* Ícono de logotipo */}
            <button
              onClick={() => onNavigateToSection('hero')}
              className="flex items-center gap-2 group text-left focus:outline-none"
              aria-label="BOOKIA Inicio"
            >
              <div className="w-7 h-7 flex items-center justify-center text-black">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 4v16" />
                  <path d="M4 18c4-2 8-2 8 0" />
                  <path d="M20 18c-4-2-8-2-8 0" />
                  <path d="M8 8c2-2 4-2 4 0" />
                  <path d="M16 8c-2-2-4-2-4 0" />
                </svg>
              </div>
            </button>

            {/* Enlaces de navegación en español */}
            <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-gray-700">
              <button
                onClick={() => onNavigateToSection('hero')}
                className="hover:text-black transition-colors"
              >
                Acerca de
              </button>
              <button
                onClick={() => onNavigateToSection('catalog')}
                className="hover:text-black transition-colors"
              >
                Biblioteca
              </button>
              <button
                onClick={() => onNavigateToSection('countdown')}
                className="hover:text-black transition-colors"
              >
                Comunidad
              </button>
              <button
                onClick={() => onNavigateToSection('articles')}
                className="hover:text-black transition-colors"
              >
                Soporte
              </button>
            </nav>
          </div>

          {/* Barra de búsqueda central en forma de píldora */}
          <div className="flex-1 max-w-sm hidden sm:block">
            <button
              onClick={onOpenSearch}
              className="w-full bg-[#F3F4F6] hover:bg-[#EAEAEA] text-gray-500 rounded-full py-1.5 px-4 flex items-center gap-2 text-xs font-normal transition-colors text-left"
            >
              <Search className="w-3.5 h-3.5 text-gray-400" />
              <span>Buscar libros o autores...</span>
            </button>
          </div>

          {/* Acciones derecha */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="sm:hidden p-2 text-gray-600 hover:text-black"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => onJoinClick ? onJoinClick() : onNavigateToSection('catalog')}
              className="text-xs sm:text-sm font-medium text-gray-700 hover:text-black px-2 py-1 transition-colors"
            >
              Registrarse
            </button>

            <button
              onClick={() => onJoinClick ? onJoinClick() : onNavigateToSection('catalog')}
              className="bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-full transition-all shadow-sm"
            >
              Comenzar ahora
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
