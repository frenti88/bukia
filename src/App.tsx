import React, { useState, useEffect } from 'react';
import { Book } from './types';
import { ALL_REPLICA_BOOKS } from './data/replicaBooks';
import { BOOKS_LIST } from './data/books';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { CountdownSection } from './components/CountdownSection';
import { ArticlesSection } from './components/ArticlesSection';
import { StatsBannerSection } from './components/StatsBannerSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProductPage } from './pages/ProductPage';
import { ReaderModal } from './components/ReaderModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';

export const App: React.FC = () => {
  // Combine replica books from screenshot with Bookia original editions
  const allAvailableBooks: Book[] = [...ALL_REPLICA_BOOKS, ...BOOKS_LIST];

  // Helper to parse book from URL pathname (/libro/:slug) or hash (#/libro/:slug)
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

  // Dedicated Product Page State
  const [currentProductBook, setCurrentProductBook] = useState<Book | null>(() => parseBookFromLocation());

  // Interactive modals
  const [previewBook, setPreviewBook] = useState<Book | null>(null);
  const [checkoutBook, setCheckoutBook] = useState<Book | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync browser history with URL on back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const matchedBook = parseBookFromLocation();
      setCurrentProductBook(matchedBook);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic document title based on current view
  useEffect(() => {
    if (currentProductBook) {
      document.title = `${currentProductBook.title} — BOOKIA`;
    } else {
      document.title = 'BOOKIA — Lectura Concentrada · Editorial Digital';
    }
  }, [currentProductBook]);

  // Navigate to dedicated product detail page
  const handleSelectBook = (book: Book) => {
    setCurrentProductBook(book);
    const targetUrl = `/libro/${book.slug || book.id}`;
    window.history.pushState({ bookId: book.id }, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate back to the home catalog
  const handleBackToHome = () => {
    setCurrentProductBook(null);
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle section scrolling and home navigation
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
      
      {/* 1. Global Header with intentional reading styling */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToSection={handleNavigateToSection}
        onJoinClick={() => handleNavigateToSection('catalog')}
      />

      {/* 2. Main Page: Standalone Product Page OR Complete Home Experience */}
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
            {/* Hero Section: "Dive into the world of intentional reading!" */}
            <Hero
              onSelectBook={handleSelectBook}
              onOpenPreview={handleOpenPreview}
              onExploreCatalog={() => handleNavigateToSection('catalog')}
              allBooks={allAvailableBooks}
            />

            {/* Catalog Section: "You Reading Intentionally" (4x2 Grid) */}
            <CatalogSection
              books={allAvailableBooks}
              onSelectBook={handleSelectBook}
              onPreviewBook={handleOpenPreview}
              onBuyBook={handleDirectBuy}
            />

            {/* Feature Section: "COMING SOON" + "Harness Your Creative Confidence" */}
            <CountdownSection
              onPreorder={() => {
                const creativeBook = allAvailableBooks.find((b) => b.id === 'creative-confidence');
                if (creativeBook) handleSelectBook(creativeBook);
              }}
            />

            {/* Articles Slider: "Maximize Your Reading Results" */}
            <ArticlesSection
              onReadArticle={(article) => {
                const related = allAvailableBooks.find((b) => b.id === article.bookId);
                if (related) handleSelectBook(related);
              }}
            />

            {/* Stats & Fanned Arc: "Elevate Your Library. Expand Your Mind" */}
            <StatsBannerSection
              onExplore={() => handleNavigateToSection('catalog')}
              onSelectBook={handleSelectBook}
              allBooks={allAvailableBooks}
            />

            {/* Call-to-Action Dark Card: "Ready to Read With Purpose?" */}
            <CtaBanner />
          </>
        )}
      </main>

      {/* 3. Minimalist Footer */}
      <Footer onNavigateToSection={handleNavigateToSection} />

      {/* 4. Global Modals (Work seamlessly from both Home & Product Page) */}
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
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectBook={(book) => {
          setIsSearchOpen(false);
          handleSelectBook(book);
        }}
      />

    </div>
  );
};

export default App;
