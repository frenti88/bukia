import React from 'react';
import { ReplicaBookCover } from './ReplicaBookCover';
import { TopographicWave } from './TopographicWave';
import { RulerScrubber } from './RulerScrubber';
import { Book } from '../types';

interface StatsBannerSectionProps {
  onExplore: () => void;
  onSelectBook: (book: Book) => void;
  allBooks: Book[];
}

export const StatsBannerSection: React.FC<StatsBannerSectionProps> = ({
  onExplore,
  onSelectBook,
  allBooks,
}) => {
  // Books in the radial arc array
  const arcBooks = [
    { id: 'talking-to-strangers', title: 'Talking to Strangers', author: 'Malcolm Gladwell', rotation: -16, translateY: 15 },
    { id: 'thinking-fast-and-slow', title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', rotation: -8, translateY: 5 },
    { id: 'psychology-of-money', title: 'The Psychology of Money', author: 'Morgan Housel', rotation: 0, translateY: 0 },
    { id: 'think-again', title: 'Think Again', author: 'Adam Grant', rotation: 8, translateY: 5 },
    { id: 'company-of-one', title: 'Company of One', author: 'Paul Jarvis', rotation: 16, translateY: 15 },
  ];

  return (
    <section className="py-20 bg-white text-center overflow-hidden border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight">
            <span>Elevate Your Library. </span> <br />
            <strong className="font-extrabold text-black">Expand Your Mind</strong>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Stop scrolling and start discovering. Explore our collection of essential summaries and deep-dives designed for the intentional reader.
          </p>

          <div className="mt-6">
            <button
              onClick={onExplore}
              className="bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-sm"
            >
              Explore Collection
            </button>
          </div>
        </div>

        {/* 4 Stats Metrics Row */}
        <div className="mt-14 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              500+
            </span>
            <span className="block text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">
              Curated Editions
            </span>
          </div>

          <div>
            <span className="block text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              12K+
            </span>
            <span className="block text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">
              Intentional Readers
            </span>
          </div>

          <div>
            <span className="block text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              4.9/5
            </span>
            <span className="block text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">
              Impact Rating
            </span>
          </div>

          <div>
            <span className="block text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              1M+
            </span>
            <span className="block text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">
              Pages Read
            </span>
          </div>
        </div>

        {/* Fanned Arc Array of Books over Halftone Wave */}
        <div className="relative mt-16 max-w-5xl mx-auto pt-6">
          
          {/* Halftone Topographic Wave background */}
          <div className="absolute inset-x-0 bottom-4 z-0">
            <TopographicWave height={200} opacity={0.6} />
          </div>

          {/* Curved fanned book arc */}
          <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-4 md:gap-6 py-6 overflow-x-auto no-scrollbar">
            {arcBooks.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  const found = allBooks.find((b) => b.id === item.id || b.slug === item.id);
                  if (found) onSelectBook(found);
                }}
                style={{
                  transform: `rotate(${item.rotation}deg) translateY(${item.translateY}px)`,
                }}
                className="transition-transform duration-300 hover:scale-105 hover:z-30 cursor-pointer flex-shrink-0"
              >
                <ReplicaBookCover
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  size="hero"
                  showShadow
                />
              </div>
            ))}
          </div>

          {/* Bottom Ruler Divider */}
          <div className="mt-8 flex justify-center">
            <RulerScrubber variant="star" tickCount={41} />
          </div>

        </div>

      </div>
    </section>
  );
};
