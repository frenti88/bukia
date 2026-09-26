import React from 'react';

interface TopographicWaveProps {
  className?: string;
  height?: number;
  opacity?: number;
}

export const TopographicWave: React.FC<TopographicWaveProps> = ({
  className = '',
  height = 280,
  opacity = 0.85,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}
      style={{ height, opacity }}
    >
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Halftone dot pattern */}
          <pattern
            id="halftoneDots"
            x="0"
            y="0"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="6" cy="6" r="1.8" fill="#111827" fillOpacity="0.45" />
          </pattern>

          <pattern
            id="halftoneDotsDense"
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="4" cy="4" r="1.6" fill="#111827" fillOpacity="0.65" />
          </pattern>

          {/* Gradients to fade smoothly to white at the bottom */}
          <linearGradient id="waveFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="contourGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#111827" stopOpacity="0.3" />
            <stop offset="35%" stopColor="#111827" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#111827" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#111827" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="contourGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#111827" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#111827" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#111827" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Back wave terrain with dense dots */}
        <path
          d="M0,192 C180,120 320,80 520,130 C720,180 890,90 1080,110 C1250,130 1350,70 1440,96 L1440,320 L0,320 Z"
          fill="url(#halftoneDotsDense)"
        />

        {/* Front wave mountain terrain with halftone pattern */}
        <path
          d="M0,224 C140,160 310,140 480,180 C650,220 820,130 1020,150 C1220,170 1360,110 1440,130 L1440,320 L0,320 Z"
          fill="url(#halftoneDots)"
        />

        {/* Fine topographic lines */}
        <path
          d="M0,192 C180,120 320,80 520,130 C720,180 890,90 1080,110 C1250,130 1350,70 1440,96"
          stroke="url(#contourGrad1)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0,208 C160,140 315,110 500,155 C685,200 855,110 1050,130 C1235,150 1355,90 1440,113"
          stroke="url(#contourGrad2)"
          strokeWidth="1"
          strokeDasharray="2 4"
          fill="none"
        />
        <path
          d="M0,224 C140,160 310,140 480,180 C650,220 820,130 1020,150 C1220,170 1360,110 1440,130"
          stroke="url(#contourGrad1)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M0,240 C120,180 290,160 460,200 C630,240 800,150 1000,170 C1200,190 1340,130 1440,150"
          stroke="url(#contourGrad2)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* Bottom fade out to merge seamlessly with the page */}
        <rect x="0" y="160" width="1440" height="160" fill="url(#waveFade)" />
      </svg>
    </div>
  );
};
