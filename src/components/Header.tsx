import React, { useState, useEffect } from 'react';
import { Search, Menu, X, BookOpen, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  activeSection?: string;
  onNavigateToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-ink/10 py-3 shadow-sm'
          : 'bg-paper/80 backdrop-blur-sm border-b border-ink/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Editorial Imprint */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            aria-label="Bookia Inicio"
          >
            <div className="w-8 h-8 rounded-[2px] bg-ink text-paper flex items-center justify-center font-serif text-lg font-bold transition-transform group-hover:scale-105">
              B
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-widest text-ink block leading-none">
                BOOKIA
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest-editorial text-ink-muted block mt-0.5">
                Lectura Concentrada
              </span>
            </div>
          </button>

          {/* Desktop Editorial Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-sans" aria-label="Navegación principal">
            <button
              onClick={() => handleNavClick('catalogo')}
              className="text-ink-muted hover:text-ink font-medium tracking-wide transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
            >
              Catálogo
            </button>
            <button
              onClick={() => handleNavClick('voces')}
              className="text-ink-muted hover:text-ink font-medium tracking-wide transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
            >
              Voces Editoriales
            </button>
            <button
              onClick={() => handleNavClick('manifiesto')}
              className="text-ink-muted hover:text-ink font-medium tracking-wide transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
            >
              El Manifiesto
            </button>
            <button
              onClick={() => handleNavClick('transparencia')}
              className="text-ink-muted hover:text-ink font-medium tracking-wide transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
            >
              Acerca de
            </button>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink/15 text-ink-muted hover:text-ink hover:border-ink/40 text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              aria-label="Buscar libros y voces"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Buscar</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] bg-paper-subtle rounded border border-ink/10 text-ink-muted">
                ⌘K
              </kbd>
            </button>

            {/* Price Policy Badge (Subtle, dignified, never cheap) */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-paper-warm rounded-full border border-ink/10 text-[11px] font-mono text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-terracotta" />
              <span>US$1 · PDF + EPUB</span>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink hover:text-ink-muted rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-paper border-b border-ink/10 shadow-xl px-6 py-8 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-6 text-lg font-serif">
            <button
              onClick={() => handleNavClick('catalogo')}
              className="flex items-center justify-between text-left text-ink py-2 border-b border-ink/10"
            >
              <span>Explorar Catálogo</span>
              <span className="font-mono text-xs text-ink-muted">5 Obras</span>
            </button>
            <button
              onClick={() => handleNavClick('voces')}
              className="flex items-center justify-between text-left text-ink py-2 border-b border-ink/10"
            >
              <span>Las 5 Voces Editoriales</span>
              <span className="font-mono text-xs text-ink-muted">Arquetipos</span>
            </button>
            <button
              onClick={() => handleNavClick('manifiesto')}
              className="flex items-center justify-between text-left text-ink py-2 border-b border-ink/10"
            >
              <span>Manifiesto BOOKIA</span>
              <span className="font-mono text-xs text-ink-muted">Lectura Breve</span>
            </button>
            <button
              onClick={() => handleNavClick('transparencia')}
              className="flex items-center justify-between text-left text-ink py-2 border-b border-ink/10"
            >
              <span>Acerca del Proyecto</span>
              <span className="font-mono text-xs text-ink-muted">Editorial</span>
            </button>

            <div className="pt-4 flex flex-col gap-3 font-sans">
              <div className="flex items-center justify-between p-3 rounded bg-paper-warm border border-ink/10">
                <span className="font-mono text-xs text-ink-muted">Ediciones completas</span>
                <span className="font-mono text-xs font-semibold text-ink">US$1 / obra</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full py-3 bg-ink text-paper rounded text-sm font-medium flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                Buscar por autor, tema o título
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
