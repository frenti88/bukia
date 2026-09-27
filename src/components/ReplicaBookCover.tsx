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
        
        {/* === COLECCIÓN 10 LIBROS BUKIA (AUTORES ARTIFICIALES) === */}

        {/* 01. LA ÚLTIMA PERSONA DESPIERTA */}
        {id === 'la-ultima-persona-despierta' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#0B1329] text-white py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-amber-300/80 px-1 border-b border-white/10 pb-1">
              <span>BUKIA/01</span>
              <span>47 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-2">
              <span className="font-serif italic text-xs text-slate-400 block">La</span>
              <h4 className="font-serif text-base sm:text-lg font-bold leading-tight tracking-tight text-white uppercase">
                Última Persona
              </h4>
              <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight tracking-tight text-amber-400 uppercase mt-0.5">
                Despierta
              </h4>

              {/* Grilla nocturna con una sola ventana encendida */}
              <div className="my-3 w-14 h-14 sm:w-16 sm:h-16 border border-white/20 grid grid-cols-3 gap-1 p-1.5 bg-black/40 rounded-sm">
                <div className="bg-white/10 rounded-[1px]" />
                <div className="bg-white/10 rounded-[1px]" />
                <div className="bg-white/10 rounded-[1px]" />
                <div className="bg-white/10 rounded-[1px]" />
                <div className="bg-amber-400 shadow-sm shadow-amber-400/80 rounded-[1px] animate-pulse" />
                <div className="bg-white/10 rounded-[1px]" />
                <div className="bg-white/10 rounded-[1px]" />
                <div className="bg-white/10 rounded-[1px]" />
                <div className="bg-white/10 rounded-[1px]" />
              </div>

              <span className="text-[6.5px] text-slate-400 font-mono tracking-wider block">
                03:17 H · DESCANSO OBLIGATORIO
              </span>
            </div>
            <div className="w-full border-t border-white/15 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-white">
                ELIO
              </span>
              <span className="text-[6px] font-mono text-amber-300/70 tracking-widest uppercase">
                AUTOR ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* 02. TODO LO QUE NUNCA OCURRIÓ */}
        {id === 'todo-lo-que-nunca-ocurrio' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#FAF6ED] text-stone-900 py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-amber-800/80 px-1 border-b border-stone-200 pb-1">
              <span>BUKIA/02</span>
              <span>42 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-1">
              <h4 className="font-serif text-sm sm:text-base font-bold tracking-tight text-stone-950 uppercase leading-snug">
                Todo lo que
              </h4>
              <span className="font-serif italic text-lg sm:text-xl font-normal text-amber-800 block my-0.5">
                Nunca
              </span>
              <h4 className="font-serif text-base sm:text-lg font-bold tracking-tight text-stone-950 uppercase leading-snug">
                Ocurrió
              </h4>

              {/* Arco arquitectónico de capas de tiempo */}
              <div className="my-3 w-14 h-16 sm:w-16 sm:h-18 border-2 border-stone-800 border-b-0 rounded-t-full flex items-center justify-center p-2 bg-stone-100/60">
                <div className="w-8 h-10 border border-amber-800/60 border-b-0 rounded-t-full flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-amber-800/80" />
                </div>
              </div>

              <span className="text-[6.5px] text-stone-500 font-mono tracking-wider block">
                EXPEDIENTE 414 · ACTAS EXTRAVIADAS
              </span>
            </div>
            <div className="w-full border-t border-stone-200 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-stone-900">
                AREN
              </span>
              <span className="text-[6px] font-mono text-amber-800 tracking-widest uppercase">
                AUTOR ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* 03. LAS PERSONAS QUE DEJAMOS ATRÁS */}
        {id === 'las-personas-que-dejamos-atras' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#F1F5F9] text-slate-900 py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-slate-500 px-1 border-b border-slate-200 pb-1">
              <span>BUKIA/03</span>
              <span>38 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-2">
              <span className="font-mono text-[8px] text-slate-400 tracking-widest uppercase block mb-1">
                ESTACIÓN SECUNDARIA
              </span>
              <h4 className="font-serif text-sm sm:text-base font-bold leading-tight text-slate-950 uppercase">
                Las Personas
              </h4>
              <span className="font-serif italic text-xs text-slate-600 block my-0.5">que dejamos</span>
              <h4 className="font-serif text-base sm:text-lg font-bold leading-tight text-slate-700 uppercase">
                Atrás
              </h4>

              {/* Rieles de tren en perspectiva */}
              <div className="my-3 w-16 h-12 flex flex-col justify-center items-center">
                <svg viewBox="0 0 80 40" className="w-full h-full text-slate-700 stroke-current fill-none">
                  <line x1="10" y1="38" x2="35" y2="4" strokeWidth="1.5" />
                  <line x1="70" y1="38" x2="45" y2="4" strokeWidth="1.5" />
                  <line x1="18" y1="32" x2="62" y2="32" strokeWidth="1" />
                  <line x1="24" y1="24" x2="56" y2="24" strokeWidth="1" />
                  <line x1="29" y1="16" x2="51" y2="16" strokeWidth="0.8" />
                  <line x1="33" y1="10" x2="47" y2="10" strokeWidth="0.6" />
                </svg>
              </div>

              <span className="text-[6.5px] text-slate-400 font-mono tracking-wider block">
                CONVOY 04:12 · ANDÉN SIN REGISTRO
              </span>
            </div>
            <div className="w-full border-t border-slate-200 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-slate-900">
                NARA
              </span>
              <span className="text-[6px] font-mono text-slate-500 tracking-widest uppercase">
                AUTORA ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* 04. SI MAÑANA NO EXISTIERA */}
        {id === 'si-manana-no-existiera' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#0B0F19] text-white py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-blue-400/80 px-1 border-b border-white/10 pb-1">
              <span>BUKIA/04</span>
              <span>52 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-2">
              <span className="font-serif italic text-xs text-blue-300 block">Si</span>
              <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight text-white uppercase">
                Mañana
              </h4>
              <h4 className="font-serif text-sm sm:text-base font-bold leading-tight text-sky-400 uppercase mt-0.5">
                No Existiera
              </h4>

              {/* Eclipse lunar / sol congelado */}
              <div className="my-3 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-sky-400/50 flex items-center justify-center p-1 relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-900 relative shadow-inner">
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#0B0F19]" />
                </div>
              </div>

              <span className="text-[6.5px] text-sky-300/80 font-mono tracking-wider block">
                00:00 H · MEDIANOCHE PERMANENTE
              </span>
            </div>
            <div className="w-full border-t border-white/15 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-white">
                NILO
              </span>
              <span className="text-[6px] font-mono text-sky-400/80 tracking-widest uppercase">
                AUTOR ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* 05. LA CASA QUE NOS RECUERDA */}
        {id === 'la-casa-que-nos-recuerda' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#112318] text-white py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-emerald-400/80 px-1 border-b border-white/10 pb-1">
              <span>BUKIA/05</span>
              <span>45 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-2">
              <span className="font-serif italic text-xs text-emerald-300/80 block">La</span>
              <h4 className="font-serif text-base sm:text-lg font-bold leading-tight text-white uppercase">
                Casa que nos
              </h4>
              <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight text-emerald-400 uppercase mt-0.5">
                Recuerda
              </h4>

              {/* Plano arquitectónico de habitación */}
              <div className="my-3 w-16 h-12 border border-emerald-500/50 p-1 flex flex-col justify-between relative bg-black/20">
                <div className="w-full h-1/2 border-b border-emerald-500/30 flex justify-between">
                  <div className="w-1/3 border-r border-emerald-500/30" />
                  <div className="w-2 h-2 rounded-full border border-emerald-400/60 self-center" />
                </div>
                <div className="text-[5px] font-mono text-emerald-400/60 text-right">SALA 1982</div>
              </div>

              <span className="text-[6.5px] text-emerald-300/70 font-mono tracking-wider block">
                ECOS RESIDUALES DE 40 AÑOS
              </span>
            </div>
            <div className="w-full border-t border-white/15 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-white">
                NILO
              </span>
              <span className="text-[6px] font-mono text-emerald-400/80 tracking-widest uppercase">
                AUTOR ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* 06. SIETE MINUTOS SIN MENTIR */}
        {id === 'siete-minutos-sin-mentir' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-white text-zinc-950 py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-red-600 px-1 border-b border-zinc-200 pb-1">
              <span>BUKIA/06</span>
              <span>35 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-2">
              <div className="inline-block px-2 py-0.5 bg-red-600 text-white font-mono text-[9px] font-bold rounded-sm mb-1">
                420 SEGUNDOS
              </div>
              <h4 className="font-sans font-black text-lg sm:text-xl tracking-tighter leading-none text-zinc-950 uppercase">
                SIETE MINUTOS
              </h4>
              <h5 className="font-serif italic text-sm text-red-600 tracking-normal mt-0.5">
                sin mentir
              </h5>

              {/* Cronómetro minimalista con 7 marcas */}
              <div className="my-3 w-14 h-14 rounded-full border-2 border-zinc-900 flex items-center justify-center p-1 relative">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <div className="absolute top-1 w-0.5 h-2.5 bg-red-600" />
                <div className="absolute right-1 w-2.5 h-0.5 bg-zinc-900" />
              </div>

              <span className="text-[6.5px] text-zinc-500 font-mono tracking-wider block">
                CENA DIPLOMÁTICA · COMPUESTO INODORO
              </span>
            </div>
            <div className="w-full border-t border-zinc-200 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-zinc-950">
                VERA
              </span>
              <span className="text-[6px] font-mono text-red-600 tracking-widest uppercase">
                AUTORA ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* 07. EL HOMBRE QUE RECORDABA EL FUTURO */}
        {id === 'el-hombre-que-recordaba-el-futuro' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#1A163B] text-white py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-indigo-300 px-1 border-b border-white/10 pb-1">
              <span>BUKIA/07</span>
              <span>49 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-2">
              <span className="font-serif italic text-xs text-indigo-300/80 block">El</span>
              <h4 className="font-serif text-base sm:text-lg font-bold leading-tight text-white uppercase">
                Hombre que
              </h4>
              <h4 className="font-serif text-sm sm:text-base font-bold leading-tight text-indigo-300 uppercase">
                Recordaba el Futuro
              </h4>

              {/* Órbitas concéntricas de tiempo */}
              <div className="my-3 w-16 h-12 flex items-center justify-center relative">
                <div className="w-14 h-8 rounded-[100%] border border-indigo-400/60 transform rotate-12" />
                <div className="w-14 h-8 rounded-[100%] border border-indigo-300/30 transform -rotate-12 absolute" />
                <div className="w-2 h-2 rounded-full bg-white shadow-sm shadow-indigo-300" />
              </div>

              <span className="text-[6.5px] text-indigo-300/70 font-mono tracking-wider block">
                VIERNES 14:00 H · EL VACÍO TOTAL
              </span>
            </div>
            <div className="w-full border-t border-white/15 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-white">
                AREN
              </span>
              <span className="text-[6px] font-mono text-indigo-300 tracking-widest uppercase">
                AUTOR ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* 08. DESPUÉS DE NOSOTROS */}
        {id === 'despues-de-nosotros' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#1C1917] text-stone-100 py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-amber-500 px-1 border-b border-stone-800 pb-1">
              <span>BUKIA/08</span>
              <span>44 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-2">
              <h4 className="font-serif text-base sm:text-lg font-bold leading-tight text-stone-100 uppercase tracking-tight">
                Después de
              </h4>
              <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight text-amber-500 uppercase tracking-tight mt-0.5">
                Nosotros
              </h4>

              {/* Onda concéntrica de antena analógica */}
              <div className="my-3 w-14 h-12 flex flex-col justify-center items-center relative">
                <div className="w-2 h-2 rounded-full bg-amber-500 mb-1" />
                <div className="w-6 h-3 border-t-2 border-amber-500/70 rounded-t-full" />
                <div className="w-10 h-5 border-t-2 border-amber-500/40 rounded-t-full" />
                <div className="w-14 h-7 border-t border-amber-500/20 rounded-t-full" />
              </div>

              <span className="text-[6.5px] text-stone-400 font-mono tracking-wider block">
                ÚLTIMO SATÉLITE EOS-7 · SEÑAL MANUAL
              </span>
            </div>
            <div className="w-full border-t border-stone-800 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-stone-100">
                ELIO
              </span>
              <span className="text-[6px] font-mono text-amber-500 tracking-widest uppercase">
                AUTOR ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* 09. LA VIDA DE OTRA PERSONA */}
        {id === 'la-vida-de-otra-persona' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#18181B] text-zinc-100 py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-zinc-400 px-1 border-b border-zinc-800 pb-1">
              <span>BUKIA/09</span>
              <span>40 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-2">
              <span className="font-serif italic text-xs text-zinc-400 block">La</span>
              <h4 className="font-serif text-base sm:text-lg font-bold leading-tight text-white uppercase">
                Vida de
              </h4>
              <h4 className="font-serif text-base sm:text-lg font-bold leading-tight text-zinc-300 uppercase">
                Otra Persona
              </h4>

              {/* Dos perfiles contrapuestos en silueta */}
              <div className="my-3 w-14 h-12 border border-zinc-700 flex items-center justify-center p-1 bg-black/40">
                <svg viewBox="0 0 60 40" className="w-full h-full text-zinc-400 stroke-current fill-none">
                  <path d="M15,35 Q15,20 25,18 Q30,15 28,10 Q25,5 20,8" strokeWidth="1.2" />
                  <path d="M45,35 Q45,20 35,18 Q30,15 32,10 Q35,5 40,8" strokeWidth="1.2" strokeDasharray="2 1" />
                </svg>
              </div>

              <span className="text-[6.5px] text-zinc-500 font-mono tracking-wider block">
                EL ABRIGO AJENO · LLAMADA DE AUXILIO
              </span>
            </div>
            <div className="w-full border-t border-zinc-800 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-zinc-100">
                VERA
              </span>
              <span className="text-[6px] font-mono text-zinc-400 tracking-widest uppercase">
                AUTORA ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* 10. ANTES DE QUE OLVIDES MI NOMBRE */}
        {id === 'antes-de-que-olvides-mi-nombre' && (
          <div className="h-full flex flex-col justify-between items-center text-center bg-[#FAF0F4] text-rose-950 py-1">
            <div className="flex items-center justify-between w-full text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-rose-800 px-1 border-b border-rose-200 pb-1">
              <span>BUKIA/10</span>
              <span>46 MIN</span>
            </div>
            <div className="my-auto flex flex-col items-center w-full px-2">
              <h4 className="font-serif text-sm sm:text-base font-bold leading-tight text-rose-950 uppercase">
                Antes de que
              </h4>
              <span className="font-serif italic text-base sm:text-lg font-normal text-rose-800 block my-0.5">
                Olvides
              </span>
              <h4 className="font-serif text-sm sm:text-base font-bold leading-tight text-rose-950 uppercase">
                Mi Nombre
              </h4>

              {/* Sello de lacre rojo */}
              <div className="my-3 w-12 h-12 rounded-full bg-rose-900 text-rose-100 flex items-center justify-center shadow-xs">
                <span className="font-serif text-base font-bold italic">E</span>
              </div>

              <span className="text-[6.5px] text-rose-700/80 font-mono tracking-wider block">
                OBITUARIO POR ENCARGO · NOTA EN LACRE
              </span>
            </div>
            <div className="w-full border-t border-rose-200 pt-1.5 flex flex-col items-center">
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-widest uppercase text-rose-950">
                NARA
              </span>
              <span className="text-[6px] font-mono text-rose-800 tracking-widest uppercase">
                AUTORA ARTIFICIAL
              </span>
            </div>
          </div>
        )}

        {/* === FIN COLECCIÓN 10 LIBROS === */}

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
              ENFOQUE CONTEMPORÁNEO
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

        {/* 14. EDICIONES ORIGINALES BUKIA */}
        {![
          'psychology-of-money', 'the-psychology-of-money', 'thinking-fast-and-slow',
          'think-again', 'talking-to-strangers', 'mindset', 'designing-your-life',
          'company-of-one', 'anything-you-want', 'creative-confidence', 'atomic-habits',
          'start-with-why', 'blink', 'grit'
        ].includes(id) && (
          <div className="h-full flex flex-col justify-between items-center text-center py-2 bg-[#FAF8F5]">
            <span className="text-[7px] font-mono tracking-widest uppercase text-stone-500">
              BUKIA/EDICIÓN · $4.900
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
