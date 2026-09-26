import React, { useState, useEffect } from 'react';
import { ReplicaBookCover } from './ReplicaBookCover';
import { Book } from '../types';

interface CountdownSectionProps {
  onPreorder: () => void;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ onPreorder }) => {
  // Live ticking countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 20,
    minutes: 16,
    seconds: 38,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section id="countdown" className="relative py-20 bg-white overflow-hidden text-center border-t border-gray-100">
      
      {/* Giant Faint "COMING SOON" Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <span className="text-[120px] sm:text-[180px] md:text-[240px] font-black tracking-tighter text-black uppercase leading-none">
          COMING SOON
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Book Container with floating countdown timer */}
        <div className="relative inline-block my-4">
          <ReplicaBookCover
            id="creative-confidence"
            title="Creative Confidence"
            author="Tom & David Kelley"
            size="lg"
            showShadow
            className="transform hover:scale-105 transition-transform duration-500"
          />

          {/* Floating Dark Glass Countdown Timer Box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212]/95 backdrop-blur-md text-white px-4 sm:px-6 py-3 rounded-2xl shadow-glass-pill border border-white/10 flex items-center gap-3 sm:gap-5 z-20">
            
            {/* Days */}
            <div className="flex flex-col items-center min-w-[36px] sm:min-w-[42px]">
              <span className="font-bold text-lg sm:text-2xl leading-none tracking-tight">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-1">
                DAYS
              </span>
            </div>

            <div className="w-[1px] h-7 bg-white/15" />

            {/* Hours */}
            <div className="flex flex-col items-center min-w-[36px] sm:min-w-[42px]">
              <span className="font-bold text-lg sm:text-2xl leading-none tracking-tight">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-1">
                HOURS
              </span>
            </div>

            <div className="w-[1px] h-7 bg-white/15" />

            {/* Minutes */}
            <div className="flex flex-col items-center min-w-[36px] sm:min-w-[42px]">
              <span className="font-bold text-lg sm:text-2xl leading-none tracking-tight">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-1">
                MINUTES
              </span>
            </div>

            <div className="w-[1px] h-7 bg-white/15" />

            {/* Seconds */}
            <div className="flex flex-col items-center min-w-[36px] sm:min-w-[42px]">
              <span className="font-bold text-lg sm:text-2xl leading-none tracking-tight text-emerald-400">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-1">
                SECONDS
              </span>
            </div>

          </div>
        </div>

        {/* Text Details below book */}
        <div className="mt-8 max-w-lg">
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight leading-tight">
            <span>Harness Your </span> <br />
            <strong className="font-extrabold text-black">Creative Confidence</strong>
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
            Learn how to read intentionally, transform knowledge into action. An exclusive program launch is coming soon.
          </p>

          <div className="mt-5">
            <button
              onClick={onPreorder}
              className="bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-sm"
            >
              Pre-order Now
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
