import React, { useState } from 'react';
import { Book } from '../types';
import { BookCard } from './BookCard';

interface CatalogSectionProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  onPreviewBook: (book: Book) => void;
  onBuyBook: (book: Book) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  books,
  onSelectBook,
  onPreviewBook,
  onBuyBook,
}) => {
  const [showAll, setShowAll] = useState(false);

  // Initial 8 books matching the 4x2 grid in the user's reference image
  const initialBookIds = [
    'psychology-of-money',
    'thinking-fast-and-slow',
    'think-again',
    'talking-to-strangers',
    'mindset',
    'designing-your-life',
    'company-of-one',
    'anything-you-want',
  ];

  // Map initial books, and fallback to remaining books
  const gridBooks = showAll
    ? books
    : books.slice(0, 8);

  return (
    <section id="catalog" className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title & Subtitle + Right CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
              <span>You Reading </span>
              <strong className="font-extrabold text-black">Intentionally</strong>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-lg">
              Explore essential frameworks and master ideas in high-retention digital formats.
            </p>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="self-start sm:self-auto bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-full transition-all shadow-sm"
          >
            Join Now
          </button>
        </div>

        {/* 4x2 Books Grid (matching the reference image) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {gridBooks.map((book, idx) => (
            <BookCard
              key={book.id}
              book={book}
              isNew={idx !== 1} // Book 2 (Thinking Fast and Slow) doesn't have the New badge in the screenshot!
              onSelect={onSelectBook}
              onPreview={onPreviewBook}
              onDirectBuy={onBuyBook}
            />
          ))}
        </div>

        {/* Center See More Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-xs font-semibold px-6 py-2.5 rounded-full transition-all shadow-xs"
          >
            {showAll ? 'Show Less' : 'See More'}
          </button>
        </div>

      </div>
    </section>
  );
};
