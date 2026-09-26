import React from 'react';
import { Book } from '../types';
import { WRITERS } from '../data/writers';

interface BookCoverArtProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showShadow?: boolean;
  className?: string;
  isInteractive?: boolean;
}

export const BookCoverArt: React.FC<BookCoverArtProps> = ({
  book,
  size = 'md',
  showShadow = true,
  className = '',
  isInteractive = false,
}) => {
  const writer = WRITERS[book.writerId];

  // Sizing definitions ensuring 1:1.48 editorial proportions
  const sizeClasses = {
    sm: 'w-24 h-[142px]',
    md: 'w-48 sm:w-56 h-[284px] sm:h-[332px]',
    lg: 'w-64 sm:w-72 h-[378px] sm:h-[426px]',
    hero: 'w-72 sm:w-80 md:w-96 h-[426px] sm:h-[474px] md:h-[568px]',
  };

  const shadowClass = showShadow
    ? 'shadow-book-elevated hover:shadow-book-hover transition-all duration-500'
    : '';

  return (
    <div
      className={`relative select-none aspect-book overflow-hidden rounded-[2px] transition-transform duration-300 ${sizeClasses[size]} ${shadowClass} ${className} ${
        isInteractive ? 'hover:-translate-y-1' : ''
      }`}
      style={{
        backgroundColor: book.coverArt.bgColor,
        color: book.coverArt.textColor,
      }}
      role="img"
      aria-label={`Portada del libro: ${book.title} por ${writer?.displayName || 'Bukia'}`}
    >
      {/* Paper texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '4px 4px'
        }}
      />

      {/* Book spine simulation (left fold and depth) */}
      <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-r from-black/25 via-white/10 to-transparent pointer-events-none z-20" />
      <div className="absolute left-[3px] sm:left-[4px] top-0 bottom-0 w-[1px] bg-black/15 pointer-events-none z-20" />

      {/* Book right edge subtle highlight */}
      <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-black/10 pointer-events-none z-20" />

      {/* Bespoke Cover Compositions based on slug */}
      <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 z-10">
        
        {/* Top Header: Imprint & Folio */}
        <div className="flex items-center justify-between text-[9px] sm:text-[10px] tracking-widest-editorial uppercase opacity-85 font-mono">
          <span className="font-semibold tracking-widest">BUKIA</span>
          <span className="opacity-75">{book.pageCount}P · US$1</span>
        </div>

        {/* Center Graphic & Identity based on book slug */}
        <div className="flex-1 flex flex-col items-center justify-center my-2 relative">
          
          {/* BOOK 1: LA TRAMPA DE LA CERTEZA */}
          {book.slug === 'la-trampa-de-la-certeza' && (
            <div className="relative w-full flex flex-col items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 text-editorial-terracotta stroke-current fill-none">
                {/* Clean architectural arch with tension circle */}
                <path d="M 30,140 L 30,70 A 50,50 0 0,1 130,70 L 130,140" strokeWidth="1.5" />
                <circle cx="80" cy="70" r="28" strokeWidth="1.2" strokeDasharray="3 3" />
                <circle cx="80" cy="70" r="12" fill="#A3482C" className="opacity-90" />
                <line x1="20" y1="140" x2="140" y2="140" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="80" y1="10" x2="80" y2="40" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
              </svg>
            </div>
          )}

          {/* BOOK 2: SISTEMAS SILENCIOSOS */}
          {book.slug === 'sistemas-silenciosos' && (
            <div className="relative w-full flex flex-col items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 text-[#B87B28] stroke-current fill-none">
                {/* Precision concentric rings and silent balance axis */}
                <circle cx="80" cy="80" r="58" strokeWidth="0.8" strokeOpacity="0.4" />
                <circle cx="80" cy="80" r="42" strokeWidth="1.2" />
                <circle cx="80" cy="80" r="24" strokeWidth="0.8" strokeDasharray="2 4" />
                <line x1="80" y1="15" x2="80" y2="145" strokeWidth="0.75" strokeOpacity="0.5" />
                <line x1="15" y1="80" x2="145" y2="80" strokeWidth="0.75" strokeOpacity="0.5" />
                <rect x="74" y="74" width="12" height="12" fill="#B87B28" />
              </svg>
            </div>
          )}

          {/* BOOK 3: LAS HABITACIONES DEL DOMINGO */}
          {book.slug === 'las-habitaciones-del-domingo' && (
            <div className="relative w-full flex flex-col items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 text-[#9E3C4E] stroke-current fill-none">
                {/* Architectural aperture with soft interior light cast */}
                <rect x="36" y="24" width="88" height="112" strokeWidth="1.2" />
                <line x1="80" y1="24" x2="80" y2="136" strokeWidth="0.8" strokeOpacity="0.6" />
                <line x1="36" y1="80" x2="124" y2="80" strokeWidth="0.8" strokeOpacity="0.6" />
                {/* Diagonal sun angle on the floor */}
                <polygon points="36,136 124,136 148,155 12,155" fill="#9E3C4E" fillOpacity="0.15" stroke="none" />
                <circle cx="60" cy="54" r="5" fill="#9E3C4E" />
              </svg>
            </div>
          )}

          {/* BOOK 4: LA ATENCIÓN SECUESTRADA */}
          {book.slug === 'la-atencion-secuestrada' && (
            <div className="relative w-full flex flex-col items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 text-[#3F826D] stroke-current fill-none">
                {/* Modernist beam of light cutting through urban dark */}
                <rect x="52" y="20" width="56" height="120" rx="4" strokeWidth="1.2" strokeOpacity="0.8" />
                <line x1="52" y1="40" x2="108" y2="40" strokeWidth="0.7" strokeOpacity="0.4" />
                <rect x="62" y="60" width="36" height="40" fill="#3F826D" fillOpacity="0.25" stroke="#3F826D" strokeWidth="1" />
                <line x1="30" y1="80" x2="130" y2="80" strokeWidth="0.6" strokeDasharray="3 3" strokeOpacity="0.5" />
              </svg>
            </div>
          )}

          {/* BOOK 5: LA GEOMETRÍA DEL ASOMBRO */}
          {book.slug === 'la-geometria-del-asombro' && (
            <div className="relative w-full flex flex-col items-center justify-center">
              <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 text-[#7AA5C8] stroke-current fill-none">
                {/* Voronoi / mathematical cellular structure */}
                <polygon points="80,24 122,46 122,94 80,116 38,94 38,46" strokeWidth="1.2" />
                <polygon points="80,48 102,60 102,84 80,96 58,84 58,60" strokeWidth="0.8" strokeDasharray="2 3" />
                <line x1="80" y1="24" x2="80" y2="48" strokeWidth="0.75" />
                <line x1="122" y1="46" x2="102" y2="60" strokeWidth="0.75" />
                <line x1="122" y1="94" x2="102" y2="84" strokeWidth="0.75" />
                <line x1="80" y1="116" x2="80" y2="96" strokeWidth="0.75" />
                <line x1="38" y1="94" x2="58" y2="84" strokeWidth="0.75" />
                <line x1="38" y1="46" x2="58" y2="60" strokeWidth="0.75" />
                <circle cx="80" cy="72" r="3" fill="#7AA5C8" />
              </svg>
            </div>
          )}

        </div>

        {/* Bottom Typography Block */}
        <div className="pt-2 border-t border-current/15 flex flex-col">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase opacity-70 mb-1 line-clamp-1">
            {writer?.displayName}
          </span>
          <h3 className="font-serif text-base sm:text-lg md:text-xl font-medium leading-[1.15] tracking-tight line-clamp-2">
            {book.title}
          </h3>
          <p className="hidden sm:block text-[10px] font-serif italic opacity-75 mt-1 line-clamp-1">
            {book.subtitle}
          </p>
        </div>

      </div>
    </div>
  );
};
