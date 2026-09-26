import React, { useState } from 'react';
import { Book } from '../types';
import { ReplicaBookCover } from './ReplicaBookCover';
import { Bookmark, Share2, BookOpen, ShoppingBag } from 'lucide-react';

interface BookCardProps {
  book: Book;
  isNew?: boolean;
  onSelect: (book: Book) => void;
  onPreview: (book: Book) => void;
  onDirectBuy: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  isNew = true,
  onSelect,
  onPreview,
  onDirectBuy,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div
      onClick={() => onSelect(book)}
      className="group bg-white rounded-xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-card-hover hover:border-gray-200 flex flex-col justify-between cursor-pointer"
    >
      {/* Top Header Row of Card: New Badge + Action Icons */}
      <div className="flex items-center justify-between mb-3 h-6">
        {isNew ? (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#EBF8F2] text-[#1B7A52]">
            New
          </span>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-1.5 text-gray-400">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
            }}
            className={`p-1 rounded hover:text-black transition-colors ${
              isBookmarked ? 'text-black fill-current' : ''
            }`}
            aria-label="Save book"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-black' : ''}`} />
          </button>
          
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPreview(book);
            }}
            className="p-1 rounded hover:text-black transition-colors"
            title="Preview reading"
            aria-label="Preview reading"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center Cover */}
      <div className="flex items-center justify-center my-2 py-2">
        <div className="transition-transform duration-300 group-hover:scale-105">
          <ReplicaBookCover
            id={book.id}
            title={book.title}
            author={book.shortDescription || book.subtitle}
            size="md"
            showShadow
          />
        </div>
      </div>

      {/* Quick Action Overlay on Hover */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
        <div className="min-w-0 pr-2">
          <h4 className="font-semibold text-gray-950 text-xs sm:text-sm truncate group-hover:text-emerald-700 transition-colors">
            {book.title}
          </h4>
          <p className="text-[11px] text-gray-400 truncate mt-0.5 font-medium">
            {book.category} · US${book.price}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDirectBuy(book);
          }}
          className="flex-shrink-0 bg-black hover:bg-gray-800 text-white rounded-full px-3 py-1 text-[11px] font-medium transition-colors"
        >
          Read
        </button>
      </div>

    </div>
  );
};
