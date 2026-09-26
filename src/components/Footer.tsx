import React from 'react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Izquierda: Copyright */}
          <div>
            <p>© 2026 BOOKIA Inc. Plataforma de Lectura Intencional. Todos los derechos reservados.</p>
          </div>

          {/* Centro: Enlaces legales */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigateToSection('hero')}
              className="hover:text-black transition-colors"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => onNavigateToSection('hero')}
              className="hover:text-black transition-colors"
            >
              Términos de Servicio
            </button>
          </div>

          {/* Derecha: Enlaces de navegación */}
          <div className="flex items-center gap-6 font-medium text-gray-700">
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
          </div>

        </div>
      </div>
    </footer>
  );
};
