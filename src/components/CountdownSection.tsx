import React, { useState, useEffect } from 'react';
import { ReplicaBookCover } from './ReplicaBookCover';

interface CountdownSectionProps {
  onPreorder: () => void;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ onPreorder }) => {
  // Cuenta regresiva activa
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
      
      {/* Marca de agua gigante PRÓXIMAMENTE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <span className="text-[100px] sm:text-[160px] md:text-[220px] font-black tracking-tighter text-black uppercase leading-none">
          PRÓXIMAMENTE
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Contenedor del libro con caja flotante de cuenta regresiva */}
        <div className="relative inline-block my-4">
          <ReplicaBookCover
            id="creative-confidence"
            title="Confianza Creativa"
            author="Tom & David Kelley"
            size="lg"
            showShadow
            className="transform hover:scale-105 transition-transform duration-500"
          />

          {/* Caja flotante de cristal con temporizador */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212]/95 backdrop-blur-md text-white px-4 sm:px-6 py-3 rounded-2xl shadow-glass-pill border border-white/10 flex items-center gap-3 sm:gap-5 z-20">
            
            {/* Días */}
            <div className="flex flex-col items-center min-w-[36px] sm:min-w-[42px]">
              <span className="font-bold text-lg sm:text-2xl leading-none tracking-tight">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-1">
                DÍAS
              </span>
            </div>

            <div className="w-[1px] h-7 bg-white/15" />

            {/* Horas */}
            <div className="flex flex-col items-center min-w-[36px] sm:min-w-[42px]">
              <span className="font-bold text-lg sm:text-2xl leading-none tracking-tight">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-1">
                HORAS
              </span>
            </div>

            <div className="w-[1px] h-7 bg-white/15" />

            {/* Minutos */}
            <div className="flex flex-col items-center min-w-[36px] sm:min-w-[42px]">
              <span className="font-bold text-lg sm:text-2xl leading-none tracking-tight">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-1">
                MINUTOS
              </span>
            </div>

            <div className="w-[1px] h-7 bg-white/15" />

            {/* Segundos */}
            <div className="flex flex-col items-center min-w-[36px] sm:min-w-[42px]">
              <span className="font-bold text-lg sm:text-2xl leading-none tracking-tight text-emerald-400">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-1">
                SEGUNDOS
              </span>
            </div>

          </div>
        </div>

        {/* Textos bajo el libro */}
        <div className="mt-8 max-w-lg">
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight leading-tight">
            <span>Desarrolla tu </span> <br />
            <strong className="font-extrabold text-black">Confianza Creativa</strong>
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
            Aprende a leer con intención y transforma el conocimiento en acción. El lanzamiento de este programa exclusivo llega muy pronto.
          </p>

          <div className="mt-5">
            <button
              onClick={onPreorder}
              className="bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-sm"
            >
              Reservar ahora
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
