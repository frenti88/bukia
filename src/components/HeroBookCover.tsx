import React from 'react';

export interface HeroBookCoverProps {
  id: string;
  title: string;
  author: string;
  isCenter?: boolean;
  className?: string;
}

interface CoverConfig {
  number: string;
  time: string;
  authorName: string;
  authorRole: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  borderColor: string;
  renderTitle: () => React.ReactNode;
}

const HERO_COVERS_CONFIG: Record<string, CoverConfig> = {
  // 01 · ELIO — LA ÚLTIMA PERSONA DESPIERTA (PROTAGONISTA CENTRAL)
  'la-ultima-persona-despierta': {
    number: '01',
    time: '47 MIN',
    authorName: 'ELIO',
    authorRole: 'AUTOR ARTIFICIAL',
    bgColor: '#0B1324',
    textColor: '#FAF8F5',
    accentColor: '#E5A93C',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    renderTitle: () => (
      <div className="flex flex-col items-center text-center">
        <span className="font-serif italic text-xs sm:text-sm md:text-base text-slate-400 mb-0.5 sm:mb-1">
          La
        </span>
        <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight text-white uppercase leading-snug">
          Última Persona
        </h3>
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#E5A93C] uppercase mt-0.5 leading-none">
          Despierta
        </h3>
        <div className="flex items-center gap-2 my-2 sm:my-2.5">
          <div className="w-4 sm:w-6 h-[1px] bg-[#E5A93C]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C] shadow-sm shadow-[#E5A93C]" />
          <div className="w-4 sm:w-6 h-[1px] bg-[#E5A93C]/40" />
        </div>
        <span className="font-mono text-[6.5px] sm:text-[7.5px] md:text-[8px] tracking-[0.22em] text-[#E5A93C]/95 uppercase font-medium">
          03:17 H · DESCANSO OBLIGATORIO
        </span>
      </div>
    ),
  },

  // 02 · AREN — EL HOMBRE QUE RECORDABA EL FUTURO
  'el-hombre-que-recordaba-el-futuro': {
    number: '02',
    time: '49 MIN',
    authorName: 'AREN',
    authorRole: 'AUTOR ARTIFICIAL',
    bgColor: '#FAF6ED',
    textColor: '#1A1816',
    accentColor: '#9C4123',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    renderTitle: () => (
      <div className="flex flex-col items-center text-center">
        <span className="font-serif text-[10px] sm:text-xs md:text-sm tracking-wider text-[#9C4123] uppercase mb-0.5 sm:mb-1">
          El Hombre que
        </span>
        <span className="font-serif italic text-base sm:text-lg md:text-xl text-[#1A1816] font-normal leading-tight">
          recordaba el
        </span>
        <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#1A1816] uppercase mt-0.5">
          Futuro
        </span>
        <div className="w-8 sm:w-10 h-[1px] bg-[#9C4123]/35 my-2 sm:my-2.5" />
        <span className="font-mono text-[6px] sm:text-[7px] md:text-[7.5px] tracking-[0.2em] text-[#9C4123] uppercase">
          HORIZONTE · 72 HORAS
        </span>
      </div>
    ),
  },

  // 03 · NARA — ANTES DE QUE OLVIDES MI NOMBRE
  'antes-de-que-olvides-mi-nombre': {
    number: '03',
    time: '46 MIN',
    authorName: 'NARA',
    authorRole: 'AUTORA ARTIFICIAL',
    bgColor: '#E6E1D8',
    textColor: '#1E1B18',
    accentColor: '#7A7064',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    renderTitle: () => (
      <div className="flex flex-col items-center text-center">
        <span className="font-serif text-[10px] sm:text-xs md:text-sm tracking-wider text-[#7A7064] uppercase mb-0.5 sm:mb-1">
          Antes de que
        </span>
        <span className="font-serif italic text-base sm:text-lg md:text-xl text-[#1E1B18] font-normal leading-tight">
          olvides mi
        </span>
        <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#1E1B18] uppercase mt-0.5">
          Nombre
        </span>
        <div className="w-8 sm:w-10 h-[1px] bg-[#7A7064]/35 my-2 sm:my-2.5" />
        <span className="font-mono text-[6px] sm:text-[7px] md:text-[7.5px] tracking-[0.2em] text-[#7A7064] uppercase">
          OBITUARIO · 28 DÍAS
        </span>
      </div>
    ),
  },

  // 04 · NILO — SI MAÑANA NO EXISTIERA
  'si-manana-no-existiera': {
    number: '04',
    time: '52 MIN',
    authorName: 'NILO',
    authorRole: 'AUTOR ARTIFICIAL',
    bgColor: '#161B24',
    textColor: '#F8FAFC',
    accentColor: '#94A3B8',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    renderTitle: () => (
      <div className="flex flex-col items-center text-center">
        <span className="font-serif text-[10px] sm:text-xs md:text-sm tracking-wider text-[#94A3B8] uppercase mb-0.5 sm:mb-1">
          Si Mañana
        </span>
        <span className="font-serif italic text-base sm:text-lg md:text-xl text-[#CBD5E1] font-normal leading-tight">
          no
        </span>
        <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white uppercase mt-0.5">
          Existiera
        </span>
        <div className="w-8 sm:w-10 h-[1px] bg-[#94A3B8]/30 my-2 sm:my-2.5" />
        <span className="font-mono text-[6px] sm:text-[7px] md:text-[7.5px] tracking-[0.2em] text-[#94A3B8] uppercase">
          24:00 H · MEDIANOCHE PERMANENTE
        </span>
      </div>
    ),
  },

  // 05 · VERA — SIETE MINUTOS SIN MENTIR
  'siete-minutos-sin-mentir': {
    number: '05',
    time: '35 MIN',
    authorName: 'VERA',
    authorRole: 'AUTORA ARTIFICIAL',
    bgColor: '#FAF6EE',
    textColor: '#18181B',
    accentColor: '#881337',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    renderTitle: () => (
      <div className="flex flex-col items-center text-center">
        <span className="font-serif text-[10px] sm:text-xs md:text-sm tracking-wider text-[#18181B] font-semibold uppercase mb-0.5 sm:mb-1">
          Siete Minutos
        </span>
        <span className="font-serif italic text-sm sm:text-base md:text-lg text-[#881337] font-normal leading-none my-0.5">
          sin
        </span>
        <span className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#881337] uppercase leading-none">
          Mentir
        </span>
        <div className="w-8 sm:w-10 h-[1px] bg-[#881337]/30 my-2 sm:my-2.5" />
        <span className="font-mono text-[6px] sm:text-[7px] md:text-[7.5px] tracking-[0.2em] text-[#78716C] uppercase">
          420 SEGUNDOS DE VERDAD
        </span>
      </div>
    ),
  },

  // Fallbacks para otros libros de la base de datos
  'las-personas-que-dejamos-atras': {
    number: '00',
    time: '38 MIN',
    authorName: 'NARA',
    authorRole: 'AUTORA ARTIFICIAL',
    bgColor: '#E6E1D8',
    textColor: '#1E1B18',
    accentColor: '#7A7064',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    renderTitle: () => (
      <div className="flex flex-col items-center text-center">
        <span className="font-serif text-[10px] sm:text-xs md:text-sm tracking-wider text-[#7A7064] uppercase mb-0.5 sm:mb-1">
          Las Personas
        </span>
        <span className="font-serif italic text-base sm:text-lg md:text-xl text-[#1E1B18] font-normal leading-tight">
          que dejamos
        </span>
        <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#1E1B18] uppercase mt-0.5">
          Atrás
        </span>
      </div>
    ),
  },
  'todo-lo-que-nunca-ocurrio': {
    number: '00',
    time: '42 MIN',
    authorName: 'AREN',
    authorRole: 'AUTOR ARTIFICIAL',
    bgColor: '#FAF6ED',
    textColor: '#1A1816',
    accentColor: '#9C4123',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    renderTitle: () => (
      <div className="flex flex-col items-center text-center">
        <span className="font-serif text-[10px] sm:text-xs md:text-sm tracking-wider text-[#7A7064] uppercase mb-0.5 sm:mb-1">
          Todo lo que
        </span>
        <span className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#9C4123] font-normal leading-none my-0.5 sm:my-1">
          Nunca
        </span>
        <span className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#1A1816] uppercase">
          Ocurrió
        </span>
      </div>
    ),
  },
};

export const HeroBookCover: React.FC<HeroBookCoverProps> = ({
  id,
  title,
  author,
  isCenter = false,
  className = '',
}) => {
  const config = HERO_COVERS_CONFIG[id] || {
    number: '00',
    time: '45 MIN',
    authorName: author.toUpperCase(),
    authorRole: 'AUTOR ARTIFICIAL',
    bgColor: '#FAF8F5',
    textColor: '#1A1816',
    accentColor: '#78716C',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    renderTitle: () => (
      <div className="flex flex-col items-center text-center">
        <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#1A1816] uppercase">
          {title}
        </span>
      </div>
    ),
  };

  const isDark = config.bgColor === '#0B1324' || config.bgColor === '#161B24';

  return (
    <div
      className={`relative w-full h-full aspect-[1/1.48] rounded-[3px] select-none flex flex-col justify-between overflow-hidden transition-all duration-300 ${className}`}
      style={{
        backgroundColor: config.bgColor,
        color: config.textColor,
        border: `1px solid ${config.borderColor}`,
      }}
      role="img"
      aria-label={`${title} por ${author}`}
    >
      {/* 1. Lomo editorial: relieve y sombra lateral izquierda de libro real */}
      <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none z-20" />
      <div className="absolute left-[3px] top-0 bottom-0 w-[0.5px] bg-black/15 pointer-events-none z-20" />

      {/* 2. Pliegue y filo derecho de páginas */}
      <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-black/10 pointer-events-none z-20" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 pointer-events-none z-20" />

      {/* 3. Cabecera editorial superior */}
      <div className="relative z-10 pt-3.5 sm:pt-4 md:pt-5 px-3.5 sm:px-4 md:px-5">
        <div
          className="flex items-center justify-between pb-1.5 sm:pb-2 border-b"
          style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <span
            className="font-mono text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.22em] uppercase font-semibold"
            style={{ color: isDark ? '#E5A93C' : config.textColor }}
          >
            BUKIA/{config.number}
          </span>
          <span
            className="font-mono text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.18em] uppercase opacity-75"
            style={{ color: isDark ? '#FAF8F5' : config.textColor }}
          >
            {config.time}
          </span>
        </div>
      </div>

      {/* 4. Cuerpo central de la portada: Título con tipografía refinada */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-2.5 sm:px-3 md:px-4 py-1">
        {config.renderTitle()}
      </div>

      {/* 5. Pie editorial inferior: Autor y micro-etiqueta */}
      <div className="relative z-10 pb-3.5 sm:pt-4 md:pb-5 px-3.5 sm:px-4 md:px-5">
        <div
          className="flex flex-col items-center pt-2 border-t text-center"
          style={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <span
            className="font-sans font-extrabold text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.28em] uppercase"
            style={{ color: isDark ? '#FFFFFF' : config.textColor }}
          >
            {config.authorName}
          </span>
          <span
            className="font-mono text-[6px] sm:text-[6.5px] md:text-[7.5px] tracking-[0.2em] uppercase mt-0.5 opacity-70"
            style={{ color: isDark ? '#94A3B8' : config.accentColor }}
          >
            {isCenter ? 'AUTOR ARTIFICIAL · EDICIÓN CENTRAL' : config.authorRole}
          </span>
        </div>
      </div>
    </div>
  );
};
