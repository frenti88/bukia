import React from 'react';

interface RulerScrubberProps {
  className?: string;
  variant?: 'arrow' | 'star';
  tickCount?: number;
  activeIndex?: number;
  onSelectIndex?: (index: number) => void;
}

export const RulerScrubber: React.FC<RulerScrubberProps> = ({
  className = '',
  variant = 'arrow',
  tickCount = 41,
  activeIndex,
  onSelectIndex,
}) => {
  const centerIdx = Math.floor(tickCount / 2);

  return (
    <div className={`relative flex flex-col items-center justify-center select-none py-3 ${className}`}>
      
      {/* Downward triangle indicator if variant is 'arrow' */}
      {variant === 'arrow' && (
        <div className="text-black mb-1.5 transition-transform duration-200">
          <svg width="10" height="7" viewBox="0 0 10 7" fill="currentColor">
            <polygon points="5,7 0,0 10,0" />
          </svg>
        </div>
      )}

      {/* Row of vertical tick marks */}
      <div className="flex items-center justify-center gap-[4px] sm:gap-[6px] h-6 px-4 max-w-full overflow-hidden">
        {Array.from({ length: tickCount }).map((_, i) => {
          const isCenter = i === centerIdx;
          const isMajor = i % 5 === 0;
          const isCurrentActive = activeIndex !== undefined ? i === activeIndex : isCenter;

          if (isCenter && variant === 'star') {
            return (
              <div key={i} className="text-black px-1.5 flex items-center justify-center text-xs">
                ✦
              </div>
            );
          }

          let heightClass = 'h-2 w-[1px] bg-gray-300';
          if (isMajor) heightClass = 'h-3.5 w-[1.5px] bg-gray-400';
          if (isCenter && variant === 'arrow') heightClass = 'h-5 w-[2px] bg-black';

          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelectIndex && onSelectIndex(i)}
              className={`transition-all rounded-full hover:bg-black hover:h-5 focus:outline-none ${heightClass} ${
                isCurrentActive ? 'bg-black' : ''
              }`}
              aria-label={`Ruler tick ${i}`}
            />
          );
        })}
      </div>

    </div>
  );
};
