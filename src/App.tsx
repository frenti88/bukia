import React, { useState, useEffect } from 'react';
import { Book } from './types';
import { PUBLISHED_BOOKS } from './data/books';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { RevealSection } from './components/RevealSection';
import { AuthorsSection } from './components/AuthorsSection';
import { FeelingsSection } from './components/FeelingsSection';
import { ManifestoSection } from './components/ManifestoSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProductPage } from './pages/ProductPage';
import { ReaderModal } from './components/ReaderModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';

export const App: React.FC = () => {
  // Colección fundacional de lanzamiento: exactamente 5 libros (uno por cada autor)
  const publishedBooks: Book[] = PUBLISHED_BOOKS;

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
      // Solo permitir resolver libros publicados en el lanzamiento
      return publishedBooks.find((b) => b.slug === identifier || b.id === identifier) || null;
    } catch {
      return null;
    }
  };

  // Estado de la Página de Producto dedicada
  const [currentProductBook, setCurrentProductBook] = useState<Book | null>(() => parseBookFromLocation());

  // Limpiar cualquier estado residual de dark mode en navegador (Light Mode permanente en producción)
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    try {
      localStorage.removeItem('bukia_theme');
    } catch {}
  }, []);

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
      document.title = 'BUKIA — Historias que ningún humano escribió';
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
    const targetId = sectionId === 'voces' ? 'autores' : sectionId;

    if (currentProductBook) {
      setCurrentProductBook(null);
      window.history.pushState({}, '', '/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(targetId);
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
    <div className="min-h-screen bg-white text-ink font-sans flex flex-col antialiased selection:bg-black selection:text-white">
      
      {/* 1. Header Global Editorial */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* 2. Cuerpo Principal: Página de Producto Dedicada O Narrativa Definitiva de Home */}
      <main className="flex-1">
        {currentProductBook ? (
          <ProductPage
            book={currentProductBook}
            allBooks={publishedBooks}
            onBackToHome={handleBackToHome}
            onOpenPreview={handleOpenPreview}
            onBuyBook={handleDirectBuy}
            onSelectBook={handleSelectBook}
          />
        ) : (
          <>
            {/* HERO: "Historias que ningún humano escribió." / Abanico 5 portadas */}
            <Hero
              onSelectBook={handleSelectBook}
              onOpenPreview={handleOpenPreview}
              onExploreCatalog={() => handleNavigateToSection('catalog')}
              allBooks={publishedBooks}
            />

            {/* CATÁLOGO: PRIMERA COLECCIÓN (Cinco historias. Elige una.) */}
            <CatalogSection
              id="catalog"
              books={publishedBooks}
              eyebrow="PRIMERA COLECCIÓN"
              title="Cinco historias. Elige una."
              subtitle="Empieza cualquiera gratis."
              onSelectBook={handleSelectBook}
            />

            {/* REVELACIÓN: "Hay algo que todavía no te contamos. Ninguno de estos autores existe." */}
            <RevealSection
              onNavigateToAuthors={() => handleNavigateToSection('autores')}
            />

            {/* LOS AUTORES DE BUKIA: Nara, Aren, Elio, Nilo, Vera (uno por libro) */}
            <AuthorsSection
              allBooks={publishedBooks}
              onSelectBook={handleSelectBook}
            />

            {/* ¿QUÉ QUIERES SENTIR?: Segunda ruta de descubrimiento por intención emocional */}
            <FeelingsSection
              allBooks={publishedBooks}
              onSelectBook={handleSelectBook}
            />

            {/* EXPERIMENTO: "Creamos a los autores. Ellos escriben..." */}
            <ManifestoSection
              onNavigateToCatalog={() => handleNavigateToSection('catalog')}
            />

            {/* CIERRE: "¿Cuál será la primera?" */}
            <CtaBanner
              onExploreCatalog={() => handleNavigateToSection('catalog')}
            />
          </>
        )}
      </main>

      {/* 3. Footer Minimalista */}
      <Footer onNavigateToSection={handleNavigateToSection} />

      {/* 4. Modales Globales */}
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
        allBooks={publishedBooks}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectBook={(book) => {
          setIsSearchOpen(false);
          handleSelectBook(book);
        }}
        books={publishedBooks}
      />

    </div>
  );
};

export default App;
