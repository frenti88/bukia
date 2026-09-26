import React, { useState } from 'react';
import { Book } from './types';
import { BOOKS, BOOKS_LIST } from './data/books';
import { WRITERS } from './data/writers';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { VoicesSection } from './components/VoicesSection';
import { ManifestoSection } from './components/ManifestoSection';
import { BookDetailModal } from './components/BookDetailModal';
import { ReaderModal } from './components/ReaderModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Modal states
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [previewBook, setPreviewBook] = useState<Book | null>(null);
  const [checkoutBook, setCheckoutBook] = useState<Book | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Featured book is "La Trampa de la Certeza"
  const featuredBook = BOOKS['la-trampa-de-la-certeza'];
  const featuredWriter = WRITERS[featuredBook.writerId];

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectBuy = (book: Book) => {
    setSelectedBook(null);
    setPreviewBook(null);
    setCheckoutBook(book);
  };

  const handleOpenPreview = (book: Book) => {
    setSelectedBook(null);
    setPreviewBook(book);
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-sans selection:bg-ink selection:text-paper">
      
      {/* Editorial Navigation Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          featuredBook={featuredBook}
          writer={featuredWriter}
          onSelectBook={(book) => setSelectedBook(book)}
          onOpenPreview={handleOpenPreview}
          onExploreCatalog={() => handleNavigateToSection('catalogo')}
        />

        {/* Discovery Catalog Section */}
        <CatalogSection
          books={BOOKS_LIST}
          onSelectBook={(book) => setSelectedBook(book)}
          onPreviewBook={handleOpenPreview}
          onBuyBook={handleDirectBuy}
        />

        {/* Voices Section */}
        <VoicesSection
          onSelectBook={(book) => setSelectedBook(book)}
        />

        {/* Manifesto & Transparency Section */}
        <ManifestoSection />
      </main>

      {/* Colophon & Footer */}
      <Footer
        onNavigateToSection={handleNavigateToSection}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Modals & Overlays */}
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
