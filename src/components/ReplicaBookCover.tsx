import React from 'react';

export interface ReplicaCoverProps {
  id: string;
  title: string;
  author: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showShadow?: boolean;
}

export const ReplicaBookCover: React.FC<ReplicaCoverProps> = ({
  id,
  title,
  author,
  size = 'md',
  className = '',
  showShadow = true,
}) => {
  // Proporción editorial 1:1.48
  const sizeMap = {
    xs: 'w-20 h-[118px]',
    sm: 'w-28 h-[166px]',
    md: 'w-44 sm:w-48 h-[260px] sm:h-[284px]',
    lg: 'w-56 sm:w-64 h-[332px] sm:h-[378px]',
    hero: 'w-52 sm:w-60 md:w-64 h-[310px] sm:h-[355px] md:h-[380px]',
  };

  const shadowClass = showShadow ? 'shadow-book-realistic' : '';

  return (
    <div
      className={`relative select-none aspect-book overflow-hidden rounded-[3px] bg-white border border-gray-200/80 transition-all duration-300 ${sizeMap[size]} ${shadowClass} ${className}`}
      role="img"
      aria-label={`${title} por ${author}`}
    >
      {/* Lomo y pliegue sutil en el borde izquierdo */}
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/15 via-white/10 to-transparent pointer-events-none z-20" />
      <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-black/10 pointer-events-none z-20" />

      {/* Sombra de borde derecho */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-black/5 pointer-events-none z-20" />

      {/* DISEÑOS DE PORTADAS */}
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-4 text-center z-10 overflow-hidden font-sans">
        
        {/* 1. LA PSICOLOGÍA DEL DINERO */}
        {(id === 'psychology-of-money' || id === 'the-psychology-of-money') && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-gray-400">
              BESTSELLER INTERNACIONAL
            </span>
            <div className="my-auto flex flex-col items-center">
              <span className="font-serif italic text-xs sm:text-sm text-gray-600 block">La</span>
              <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight tracking-tight text-gray-950">
                Psicología
              </h4>
              <span className="font-serif italic text-xs text-gray-600 block my-0.5">del</span>
              <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight tracking-tight text-emerald-800">
                Dinero
              </h4>

              {/* Dibujo de árbol/cerebro */}
              <div className="my-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-300 flex items-center justify-center p-1 bg-stone-50">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 stroke-current fill-none">
                  <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="3 2" />
                  <path d="M50,90 Q50,60 40,45 Q30,30 45,20 Q50,15 55,20 Q70,30 60,45 Q50,60 50,90" strokeWidth="1.5" />
                  <circle cx="38" cy="35" r="5" fill="#111827" />
                  <circle cx="62" cy="35" r="5" fill="#111827" />
                  <circle cx="50" cy="24" r="4" fill="#059669" />
                  <circle cx="32" cy="48" r="3" fill="#111827" />
                  <circle cx="68" cy="48" r="3" fill="#111827" />
                </svg>
              </div>

              <span className="text-[6.5px] text-gray-400 font-sans uppercase tracking-wider block">
                LECCIONES ATEMPORALES SOBRE RIQUEZA Y FELICIDAD
              </span>
            </div>
            <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-gray-900 border-t border-gray-200 pt-1 w-full">
              MORGAN HOUSEL
            </span>
          </div>
        )}

        {/* 2. PENSAR RÁPIDO, PENSAR DESPACIO */}
        {id === 'thinking-fast-and-slow' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#FAF7F2] text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono tracking-wider uppercase text-gray-400">
              BESTSELLER INTERNACIONAL
            </span>
            <div className="my-auto flex flex-col items-center w-full px-1">
              <h4 className="font-serif text-sm sm:text-base font-bold tracking-widest text-gray-900 leading-tight">
                PENSAR RÁPIDO,
              </h4>
              <span className="font-mono text-[9px] text-gray-500 tracking-widest block my-0.5">
                PENSAR DESPACIO
              </span>

              {/* Lápiz central */}
              <div className="my-4 w-28 sm:w-32 flex items-center justify-center">
                <div className="flex items-center w-full">
                  <div className="w-2 h-2 bg-pink-300 rounded-l-[1px]" />
                  <div className="w-1.5 h-2 bg-gray-400" />
                  <div className="flex-1 h-2 bg-amber-400 border-y border-amber-500" />
                  <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[8px] border-l-[#D9A354]" />
                  <div className="w-0 h-0 border-y-[2px] border-y-transparent border-l-[4px] border-l-black -ml-[2px]" />
                </div>
              </div>

              <h5 className="font-serif text-xs sm:text-sm font-semibold tracking-wider text-gray-900">
                DANIEL KAHNEMAN
              </h5>
            </div>
            <span className="text-[6px] sm:text-[7px] font-mono text-gray-500 uppercase tracking-widest border-t border-gray-200/80 pt-1 w-full">
              PREMIO NOBEL DE ECONOMÍA
            </span>
          </div>
        )}

        {/* 3. PIÉNSALO OTRA VEZ */}
        {id === 'think-again' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-950 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono tracking-wider uppercase text-blue-600 font-medium">
              #1 BESTSELLER INTERNACIONAL
            </span>
            <div className="my-auto flex flex-col items-center">
              <h4 className="font-sans font-black text-lg sm:text-xl tracking-tighter leading-none text-gray-950">
                PIÉNSALO
              </h4>
              <h4 className="font-sans font-black text-lg sm:text-xl tracking-tighter leading-none text-gray-950 mt-0.5">
                OTRA VEZ
              </h4>

              {/* Llama azul */}
              <div className="my-2.5 w-14 h-16 flex items-center justify-center">
                <div className="w-10 h-14 bg-gradient-to-t from-blue-600 via-sky-400 to-transparent rounded-full blur-[1px] opacity-80 relative flex items-center justify-center">
                  <div className="w-4 h-8 bg-white rounded-full opacity-60" />
                </div>
              </div>

              <h5 className="font-sans font-extrabold text-sm sm:text-base tracking-widest text-gray-900">
                ADAM GRANT
              </h5>
            </div>
            <span className="text-[7px] text-gray-400 font-sans uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              El Poder de Saber lo que No Sabemos
            </span>
          </div>
        )}

        {/* 4. HABLAR CON EXTRAÑOS */}
        {id === 'talking-to-strangers' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#FAF8F5] text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono tracking-wider uppercase text-gray-400">
              #1 BESTSELLER GLOBAL
            </span>
            <div className="my-auto flex flex-col items-center">
              <h4 className="font-serif text-sm sm:text-base font-bold text-gray-900 leading-snug">
                Hablar con <br /> Extraños
              </h4>

              {/* Anillos concéntricos de colores */}
              <div className="my-3 w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center relative bg-white">
                <div className="w-10 h-10 rounded-full border-4 border-sky-500 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-amber-400" />
                </div>
              </div>

              <h5 className="font-serif text-xs sm:text-sm font-semibold text-gray-900">
                Malcolm Gladwell
              </h5>
            </div>
            <span className="text-[6.5px] font-mono text-gray-500 uppercase tracking-widest border-t border-gray-200 pt-1 w-full">
              AUTOR DE INTELIGENCIA INTUITIVA
            </span>
          </div>
        )}

        {/* 5. MINDSET */}
        {id === 'mindset' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-blue-600 uppercase tracking-wider">
              MÁS DE 2 MILLONES DE EJEMPLARES
            </span>
            <div className="my-auto flex flex-col items-center">
              <h4 className="font-sans font-bold text-xl sm:text-2xl lowercase tracking-tight text-blue-900">
                mindset
              </h4>

              {/* Flechas bidireccionales */}
              <div className="my-3 flex items-center gap-2">
                <div className="w-8 h-1 bg-blue-600 rounded-full" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-8 h-1 bg-sky-400 rounded-full" />
              </div>

              <span className="text-[7px] font-sans text-gray-500 uppercase tracking-wider block">
                LA NUEVA PSICOLOGÍA DEL ÉXITO
              </span>
            </div>
            <span className="font-sans font-bold text-[9px] text-gray-800 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              CAROL S. DWECK, Ph.D.
            </span>
          </div>
        )}

        {/* 6. DISEÑA TU VIDA */}
        {id === 'designing-your-life' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-gray-400 uppercase tracking-wider">
              BESTSELLER DEL NEW YORK TIMES
            </span>
            <div className="my-auto flex flex-col items-center">
              <h4 className="font-sans font-black text-sm sm:text-base leading-tight text-gray-950">
                Diseña <br /> Tu Vida
              </h4>

              {/* Bloques de diseño */}
              <div className="my-3 grid grid-cols-2 gap-1 w-12 h-12">
                <div className="bg-sky-400 rounded-sm" />
                <div className="bg-pink-500 rounded-sm" />
                <div className="bg-amber-400 rounded-sm" />
                <div className="bg-emerald-500 rounded-sm" />
              </div>

              <span className="text-[7px] font-sans text-gray-500 uppercase tracking-wider block">
                Cómo Construir una Vida Plena y Alegre
              </span>
            </div>
            <span className="font-sans font-bold text-[8.5px] text-gray-800 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              BILL BURNETT & DAVE EVANS
            </span>
          </div>
        )}

        {/* 7. EMPRESA DE UNO */}
        {id === 'company-of-one' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-gray-400 uppercase tracking-wider">
              UN ENFOQUE REVOLUCIONARIO
            </span>
            <div className="my-auto flex flex-col items-center">
              <h4 className="font-serif font-bold text-base sm:text-lg text-gray-950 leading-tight">
                Empresa <br /> de Uno
              </h4>

              {/* Pájaro minimalista */}
              <div className="my-3 w-16 h-12 flex items-center justify-center relative">
                <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white text-[8px]">
                  ●
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 absolute left-2 top-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 absolute right-2 bottom-2" />
              </div>

              <span className="text-[7px] font-sans text-gray-500 uppercase tracking-wider block">
                Por Qué Mantenerse Pequeño es el Futuro
              </span>
            </div>
            <span className="font-sans font-bold text-[9px] text-gray-900 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              PAUL JARVIS
            </span>
          </div>
        )}

        {/* 8. TODO LO QUE QUIERAS */}
        {id === 'anything-you-want' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-gray-400 uppercase tracking-wider">
              40 LECCIONES PARA EMPRENDEDORES
            </span>
            <div className="my-auto flex flex-col items-center">
              <div className="space-y-0.5 leading-none">
                <span className="font-sans font-black text-lg sm:text-xl text-rose-600 block">TODO</span>
                <span className="font-sans font-black text-lg sm:text-xl text-amber-500 block">LO QUE</span>
                <span className="font-sans font-black text-lg sm:text-xl text-sky-600 block">TÚ</span>
                <span className="font-sans font-black text-lg sm:text-xl text-emerald-600 block">QUIERAS</span>
              </div>
            </div>
            <span className="font-sans font-extrabold text-[9px] text-gray-900 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              DEREK SIVERS
            </span>
          </div>
        )}

        {/* 9. CONFIANZA CREATIVA */}
        {id === 'creative-confidence' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-2">
            <span className="text-[7px] sm:text-[8px] font-mono text-emerald-700 uppercase tracking-widest font-semibold">
              NUEVO LANZAMIENTO
            </span>
            <div className="my-auto flex flex-col items-center w-full px-2">
              {/* Acuarela turquesa */}
              <div className="w-full h-20 sm:h-24 my-2 relative flex items-center justify-center">
                <svg viewBox="0 0 200 120" className="w-full h-full text-emerald-400 fill-current opacity-85">
                  <path d="M20,60 Q50,10 100,50 T180,40 Q190,80 140,90 T40,80 Z" />
                  <path d="M40,40 Q80,20 120,60 T160,80" stroke="#059669" strokeWidth="4" fill="none" opacity="0.4" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="font-serif italic font-bold text-sm sm:text-base text-gray-950 tracking-tight drop-shadow-sm">
                    Confianza Creativa
                  </h4>
                </div>
              </div>
              <span className="text-[7px] font-sans text-gray-500 uppercase tracking-wider block">
                Liberar el Potencial que Llevamos Dentro
              </span>
            </div>
            <span className="font-sans font-bold text-[9px] text-gray-900 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              TOM & DAVID KELLEY
            </span>
          </div>
        )}

        {/* 10. HÁBITOS ATÓMICOS */}
        {id === 'atomic-habits' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-gray-400 uppercase tracking-wider">
              UN MÉTODO SENCILLO Y COMPROBADO
            </span>
            <div className="my-auto flex flex-col items-center">
              <h4 className="font-sans font-black text-xl sm:text-2xl text-gray-950 tracking-tight leading-none">
                hábitos
              </h4>
              <h4 className="font-sans font-black text-xl sm:text-2xl text-gray-950 tracking-tight leading-none mt-1">
                atómicos
              </h4>
              <div className="my-3 flex items-center gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-amber-400" />
                ))}
              </div>
            </div>
            <span className="font-sans font-bold text-[9px] text-gray-900 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              JAMES CLEAR
            </span>
          </div>
        )}

        {/* 11. EMPIEZA CON EL PORQUÉ */}
        {id === 'start-with-why' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-gray-400 uppercase tracking-wider">
              MILLONES DE LECTORES
            </span>
            <div className="my-auto flex flex-col items-center">
              <div className="bg-rose-600 text-white font-black text-sm sm:text-base px-2 py-1 leading-none tracking-tight">
                EMPIEZA CON
              </div>
              <div className="text-rose-600 font-black text-2xl sm:text-3xl leading-none tracking-tighter mt-1">
                EL PORQUÉ
              </div>
            </div>
            <span className="font-sans font-bold text-[9px] text-gray-900 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              SIMON SINEK
            </span>
          </div>
        )}

        {/* 12. BLINK */}
        {id === 'blink' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-gray-400 uppercase tracking-wider">
              BESTSELLER INTERNACIONAL
            </span>
            <div className="my-auto flex flex-col items-center">
              <h5 className="font-serif text-xs text-gray-700">Malcolm Gladwell</h5>
              <h4 className="font-sans font-black text-xl sm:text-2xl text-sky-500 tracking-tight mt-1 flex items-center gap-0.5">
                Inteligencia Intuitiva <span className="text-sky-400 text-lg">*</span>
              </h4>
            </div>
            <span className="font-sans text-[7px] text-gray-400 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              El Poder de Pensar sin Pensar
            </span>
          </div>
        )}

        {/* 13. GRIT */}
        {id === 'grit' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-gray-900 py-1">
            <span className="text-[7px] sm:text-[8px] font-mono text-gray-400 uppercase tracking-wider">
              BESTSELLER GLOBAL
            </span>
            <div className="my-auto flex flex-col items-center">
              <h4 className="font-sans font-black text-2xl sm:text-3xl text-rose-700 tracking-widest">
                GRIT
              </h4>
              <span className="text-[7px] font-sans text-gray-500 uppercase tracking-wider mt-1">
                El Poder de la Pasión y la Perseverancia
              </span>
            </div>
            <span className="font-sans font-bold text-[9px] text-gray-900 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              ANGELA DUCKWORTH
            </span>
          </div>
        )}

        {/* 14. EDICIONES ORIGINALES BOOKIA */}
        {![
          'psychology-of-money', 'the-psychology-of-money', 'thinking-fast-and-slow',
          'think-again', 'talking-to-strangers', 'mindset', 'designing-your-life',
          'company-of-one', 'anything-you-want', 'creative-confidence', 'atomic-habits',
          'start-with-why', 'blink', 'grit'
        ].includes(id) && (
          <div className="h-full flex flex-col justify-between items-center text-center py-2 bg-[#FAF8F5]">
            <span className="text-[7px] font-mono tracking-widest uppercase text-gray-400">
              BOOKIA ORIGINAL · US$1
            </span>
            <div className="my-auto flex flex-col items-center px-2">
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mb-2 bg-white">
                <span className="font-serif text-lg font-bold text-gray-900">✦</span>
              </div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-gray-900 leading-snug line-clamp-2">
                {title}
              </h4>
              <span className="text-[8px] font-mono text-emerald-800 mt-1 block">
                {author}
              </span>
            </div>
            <span className="text-[7px] font-mono text-gray-400 uppercase tracking-wider border-t border-gray-200 pt-1 w-full">
              LECTURA CONCENTRADA
            </span>
          </div>
        )}

      </div>
    </div>
  );
};
