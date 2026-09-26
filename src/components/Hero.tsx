import React, { useState } from 'react';
import { Book } from '../types';
import { ReplicaBookCover } from './ReplicaBookCover';
import { TopographicWave } from './TopographicWave';
import { RulerScrubber } from './RulerScrubber';

interface HeroProps {
  onSelectBook: (book: Book) => void;
  onOpenPreview: (book: Book) => void;
  onExploreCatalog: () => void;
  allBooks: Book[];
}

export const Hero: React.FC<HeroProps> = ({
  onSelectBook,
  onOpenPreview,
  onExploreCatalog,
  allBooks,
}) => {
  // Display sequence of books for the hero fan-out carousel
  const heroBooks = [
    { id: 'start-with-why', title: 'Start With Why', author: 'Simon Sinek' },
    { id: 'blink', title: 'Blink', author: 'Malcolm Gladwell' },
    { id: 'psychology-of-money', title: 'The Psychology of Money', author: 'Morgan Housel' },
    { id: 'atomic-habits', title: 'Atomic Habits', author: 'James Clear' },
    { id: 'grit', title: 'Grit', author: 'Angela Duckworth' },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Center book (Psychology of Money)

  const handleBookClick = (bookData: { id: string; title: string; author: string }) => {
    const found = allBooks.find((b) => b.id === bookData.id || b.slug === bookData.id);
    if (found) {
      onSelectBook(found);
    } else {
      onExploreCatalog();
    }
  };

  return (
    <section id="hero" className="relative pt-12 sm:pt-16 pb-12 overflow-hidden bg-white text-center">
      
      {/* Container for Headline & Subtitle */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-gray-900 tracking-tight leading-[1.15] sm:leading-[1.12]">
          <span>Dive into </span>
          <span className="inline-flex items-center align-middle mx-1 px-1.5 py-0.5 bg-amber-100/80 border border-amber-300 rounded text-amber-900 text-xs sm:text-sm font-mono transform -rotate-3 shadow-xs">
            📖 FILOSOFI TERAS
          </span>
          <span> the world</span> <br />
          <span>of </span>
          <strong className="font-extrabold text-black">intentional reading!</strong>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Curated digital editions designed to be absorbed in under 30 minutes. Deep ideas, sharp insights, and maximum value for your time.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={onExploreCatalog}
            className="bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-sm"
          >
            Join Now
          </button>
          <button
            onClick={onExploreCatalog}
            className="bg-white hover:bg-gray-50 text-black border border-gray-300 text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all"
          >
            Sign Up
          </button>
        </div>

      </div>

      {/* Topographic Wave Behind Books */}
      <div className="relative mt-8 sm:mt-12 w-full max-w-6xl mx-auto">
        
        {/* Halftone Topographic Wave Landscape */}
        <div className="absolute inset-x-0 -top-16 sm:-top-20 z-0">
          <TopographicWave height={260} opacity={0.75} />
        </div>

        {/* Books Carousel / Row */}
        <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-4 md:gap-6 px-4 pt-6 pb-2 overflow-x-auto no-scrollbar">
          {heroBooks.map((item, idx) => {
            const isCenter = idx === activeIndex;
            const distance = Math.abs(idx - activeIndex);

            // Scale & elevate center book
            let scaleClass = 'scale-90 opacity-75';
            let zIndexClass = 'z-10';
            if (distance === 0) {
              scaleClass = 'scale-105 sm:scale-110 opacity-100';
              zIndexClass = 'z-30';
            } else if (distance === 1) {
              scaleClass = 'scale-95 sm:scale-100 opacity-90';
              zIndexClass = 'z-20';
            }

            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveIndex(idx);
                  handleBookClick(item);
                }}
                className={`transition-all duration-300 transform cursor-pointer flex-shrink-0 ${scaleClass} ${zIndexClass}`}
              >
                <div className="relative group">
                  <ReplicaBookCover
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    size={isCenter ? 'hero' : 'md'}
                    showShadow
                    className="group-hover:-translate-y-2 transition-transform duration-300"
                  />
                  {/* Subtle bottom fade mask */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Ruler Tick Scrubber underneath */}
        <div className="mt-4 flex justify-center">
          <RulerScrubber
            variant="arrow"
            tickCount={45}
            onSelectIndex={(tickIdx) => {
              // Map 45 ticks to 5 books
              const mapped = Math.min(4, Math.floor((tickIdx / 45) * 5));
              setActiveIndex(mapped);
            }}
          />
        </div>

      </div>

    </section>
  );
};
