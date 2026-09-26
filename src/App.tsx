import React, { useState, useEffect } from 'react';
import { Book } from './types';
import { BOOKS_LIST } from './data/books';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { ManifestoSection } from './components/ManifestoSection';
import { AuthorsSection } from './components/AuthorsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProductPage } from './pages/ProductPage';
import { ReaderModal } from './components/ReaderModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';

export const App: React.FC = () => {
  // Colección deliberada y curada: exactamente 10 historias de autores artificiales
  const allAvailableBooks: Book[] = BOOKS_LIST;

  // Helper para resolver el libro desde la URL pathname (/libro/:slug) o hash (#/libro/:slug)
  const parseBookFromLocation = (): Book | null => {
    try {
      const path = window.location.pathname;
      const hash = window.location.hash;

      let identifier = '';
      if (path.startsWith('/libro/')) {
        identifier = decodeURIComponent(path.replace('/libro/', '').split('/')[0].trim());
      } else if (path.startsWith('/book/')) {
        identifier = decodeURIComponent(path.replace('/book/', '').split('/')[0].trim());
      } else if (hash.startsWith('#/libro/')) {
        identifier = decodeURIComponent(hash.replace('#/libro/', '').split('/')[0].trim());
      } else if (hash.startsWith('#libro/')) {
        identifier = decodeURIComponent(hash.replace('#libro/', '').split('/')[0].trim());
      }

      if (!identifier) return null;
      return allAvailableBooks.find((b) => b.slug === identifier || b.id === identifier) || null;
    } catch {
      return null;
    }
  };

  // Estado de la Página de Producto dedicada
  const [currentProductBook, setCurrentProductBook] = useState<Book | null>(() => parseBookFromLocation());

  // Estados de modales
  const [previewBook, setPreviewBook] = useState<Book | null>(null);
  const [checkoutBook, setCheckoutBook] = useState<Book | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sincronización de navegación con el historial del navegador (botones Atrás y Adelante)
  useEffect(() => {
    const handlePopState = () => {
      const matchedBook = parseBookFromLocation();
      setCurrentProductBook(matchedBook);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sincronización del título del documento con la vista activa
  useEffect(() => {
    if (currentProductBook) {
      document.title = `${currentProductBook.title} — BUKIA`;
    } else {
      document.title = 'BUKIA — Editorial Experimental · Historias por Autores Artificiales';
    }
  }, [currentProductBook]);

  // Navegar a la página de producto de un libro
  const handleSelectBook = (book: Book) => {
    setCurrentProductBook(book);
    const targetUrl = `/libro/${book.slug || book.id}`;
    window.history.pushState({ bookId: book.id }, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navegar de vuelta al catálogo principal
  const handleBackToHome = () => {
    setCurrentProductBook(null);
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navegar suavemente a secciones específicas
  const handleNavigateToSection = (sectionId: string) => {
    if (currentProductBook) {
      setCurrentProductBook(null);
      window.history.pushState({}, '', '/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenPreview = (book: Book) => {
    setPreviewBook(book);
  };

  const handleDirectBuy = (book: Book) => {
    setPreviewBook(null);
    setCheckoutBook(book);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col antialiased selection:bg-black selection:text-white">
      
      {/* 1. Header Global Editorial */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* 2. Cuerpo Principal: Página de Producto Dedicada O Experiencia de Descubrimiento Home */}
      <main className="flex-1">
        {currentProductBook ? (
          <ProductPage
            book={currentProductBook}
            allBooks={allAvailableBooks}
            onBackToHome={handleBackToHome}
            onOpenPreview={handleOpenPreview}
            onBuyBook={handleDirectBuy}
            onSelectBook={handleSelectBook}
          />
        ) : (
          <>
            {/* HERO: "Historias que ningún humano escribió." */}
            <Hero
              onSelectBook={handleSelectBook}
              onOpenPreview={handleOpenPreview}
              onExploreCatalog={() => handleNavigateToSection('catalog')}
              allBooks={allAvailableBooks}
            />

            {/* CATÁLOGO: "Diez historias. Elige una." con Microinterrupción Editorial */}
            <CatalogSection
              books={allAvailableBooks}
              onSelectBook={handleSelectBook}
              onPreviewBook={handleOpenPreview}
              onNavigateToSection={handleNavigateToSection}
            />

            {/* MANIFIESTO BREVE: "Autores que nunca nacieron. Historias que sí puedes leer." */}
            <ManifestoSection
              onNavigateToAuthors={() => handleNavigateToSection('autores')}
            />

            {/* AUTORES ARTIFICIALES: Afinidad con cada voz autoral */}
            <AuthorsSection
              allBooks={allAvailableBooks}
              onSelectBook={handleSelectBook}
              onExploreCatalog={() => handleNavigateToSection('catalog')}
            />

            {/* CTA BANNER: "Tu próxima historia te espera." */}
            <CtaBanner
              onExploreCatalog={() => handleNavigateToSection('catalog')}
            />
          </>
        )}
      </main>

      {/* 3. Footer Minimalista */}
      <Footer onNavigateToSection={handleNavigateToSection} />

      {/* 4. Modales Globales (Funcionan desde Home y desde la Página de Producto) */}
      <ReaderModal
        book={previewBook}
        isOpen={Boolean(previewBook)}
        onClose={() => setPreviewBook(null)}
        onBuy={handleDirectBuy}
      />

      <CheckoutModal
        book={checkoutBook}
        isOpen={Boolean(checkoutBook)}
        onClose={() => setCheckoutBook(null)}
        onStartReading={(book) => {
          setCheckoutBook(null);
          setPreviewBook(book);
        }}
        onSelectRecommended={(recBook) => {
          setCheckoutBook(null);
          handleSelectBook(recBook);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectBook={(book) => {
          setIsSearchOpen(false);
          handleSelectBook(book);
        }}
        books={allAvailableBooks}
      />

    </div>
  );
};

export default App;
