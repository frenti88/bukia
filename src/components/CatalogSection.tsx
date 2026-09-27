import React from 'react';
import { Book } from '../types';
import { BookCard } from './BookCard';

interface CatalogSectionProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  id?: string;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  books,
  onSelectBook,
  title,
  subtitle,
  eyebrow,
  id = 'catalog',
}) => {
  return (
    <section id={id} className="py-16 sm:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial (cuando se especifica título) */}
        {title && (
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            {eyebrow && (
              <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block mb-3">
                {eyebrow}
              </span>
            )}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-base sm:text-lg text-stone-600 font-serif italic">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Grilla editorial espaciosa y limpia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7 items-stretch">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onSelect={onSelectBook}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
