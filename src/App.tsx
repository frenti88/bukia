import React, { useState } from 'react';
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
import { BookDetailModal } from './components/BookDetailModal';
import { ReaderModal } from './components/ReaderModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';

export const App: React.FC = () => {
  // Combine replica books from screenshot with Bookia original editions
  const allAvailableBooks: Book[] = [...ALL_REPLICA_BOOKS, ...BOOKS_LIST];

  // Active modal states
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [previewBook, setPreviewBook] = useState<Book | null>(null);
  const [checkoutBook, setCheckoutBook] = useState<Book | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPreview = (book: Book) => {
    setSelectedBook(null);
    setPreviewBook(book);
  };

  const handleDirectBuy = (book: Book) => {
    setSelectedBook(null);
    setPreviewBook(null);
    setCheckoutBook(book);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col antialiased selection:bg-black selection:text-white">
      
      {/* 1. Exact Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToSection={handleNavigateToSection}
        onJoinClick={() => handleNavigateToSection('catalog')}
      />

      {/* Main Page Layout matching the reference images */}
      <main className="flex-1">
        
        {/* 2. Hero Section: "Dive into the world of intentional reading!" */}
        <Hero
          onSelectBook={(book) => setSelectedBook(book)}
          onOpenPreview={handleOpenPreview}
          onExploreCatalog={() => handleNavigateToSection('catalog')}
          allBooks={allAvailableBooks}
        />

        {/* 3. Catalog Section: "You Reading Intentionally" (4x2 Grid) */}
        <CatalogSection
          books={allAvailableBooks}
          onSelectBook={(book) => setSelectedBook(book)}
          onPreviewBook={handleOpenPreview}
          onBuyBook={handleDirectBuy}
        />

        {/* 4. Feature Section: "COMING SOON" + "Harness Your Creative Confidence" */}
        <CountdownSection
          onPreorder={() => {
            const creativeBook = allAvailableBooks.find((b) => b.id === 'creative-confidence');
            if (creativeBook) handleDirectBuy(creativeBook);
          }}
        />

        {/* 5. Articles Slider: "Maximize Your Reading Results" */}
        <ArticlesSection
          onReadArticle={(article) => {
            const related = allAvailableBooks.find((b) => b.id === article.bookId);
            if (related) handleOpenPreview(related);
          }}
        />

        {/* 6. Stats & Fanned Arc: "Elevate Your Library. Expand Your Mind" */}
        <StatsBannerSection
          onExplore={() => handleNavigateToSection('catalog')}
          onSelectBook={(book) => setSelectedBook(book)}
          allBooks={allAvailableBooks}
        />

        {/* 7. Call-to-Action Dark Card: "Ready to Read With Purpose?" */}
        <CtaBanner />

      </main>

      {/* 8. Minimalist Footer */}
      <Footer onNavigateToSection={handleNavigateToSection} />

      {/* Full Functional Modals */}
      <BookDetailModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onOpenPreview={handleOpenPreview}
        onBuy={handleDirectBuy}
        onSelectRelated={(book) => setSelectedBook(book)}
      />

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
        onSelectBook={(book) => setSelectedBook(book)}
      />

    </div>
  );
};

export default App;
