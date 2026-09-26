import React from 'react';
import { Feather, Clock, ShieldCheck, Compass } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifiesto" className="py-20 md:py-32 border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Essay Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Section Header & Big Statement (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <span className="font-mono text-xs text-editorial-terracotta uppercase tracking-widest-editorial block mb-3">
                Manifiesto Editorial
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink font-light leading-[1.12] tracking-tight">
                No vendemos libros pequeños. <br />
                <span className="italic font-normal">Vendemos lectura concentrada.</span>
              </h2>

              <p className="mt-6 text-ink-muted text-base font-sans leading-relaxed">
                Durante décadas, la industria editorial tradicional ha impuesto un canon de longitud basado en el coste del papel y el lomo de imprenta: si un texto no superaba las 250 páginas, no se consideraba un libro comercial.
              </p>

              <div className="mt-8 p-6 bg-paper-warm border-l-2 border-editorial-terracotta rounded-r">
                <p className="font-serif italic text-base text-ink leading-snug">
                  "El tiempo de un lector es el recurso más escaso y sagrado de nuestro siglo. Obligar a alguien a leer cien páginas de relleno para transmitir una sola idea fecunda es una falta de cortesía intelectual."
                </p>
                <span className="font-mono text-[11px] text-ink-muted uppercase tracking-wider block mt-3">
                  — Cuadernos de Edición BOOKIA
                </span>
              </div>
            </div>
          </div>

          {/* Right: Three Pillars & Transparency Disclosure (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            
            {/* Pillar 1 */}
            <div className="border-b border-ink/10 pb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold text-ink">01</span>
                <h3 className="font-serif text-2xl text-ink font-normal">
                  La densidad del pensamiento
                </h3>
              </div>
              <p className="text-ink-muted text-base font-sans leading-relaxed">
                Nuestras publicaciones no son resúmenes ni síntesis apresuradas. Son obras completas concebidas desde la primera frase para explorar una hipótesis singular con rigor, ejemplos precisos y una narrativa envolvente. Se leen en una sola sesión de tren, en un café de media tarde o antes de dormir.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="border-b border-ink/10 pb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold text-ink">02</span>
                <h3 className="font-serif text-2xl text-ink font-normal">
                  El precio como eliminador de fricción
                </h3>
              </div>
              <p className="text-ink-muted text-base font-sans leading-relaxed">
                Fijamos un precio uniforme de US$1 no porque nuestras obras carezcan de valor, sino porque deseamos que el acto de adquirir una buena lectura sea tan fluido como encender una lámpara. La compra no requiere deliberación previa: usted descubre una portada, lee la primera página y continúa sin barreras.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="border-b border-ink/10 pb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold text-ink">03</span>
                <h3 className="font-serif text-2xl text-ink font-normal">
                  El libro digital como objeto de diseño
                </h3>
              </div>
              <p className="text-ink-muted text-base font-sans leading-relaxed">
                Rechazamos la estética descuidada de los repositorios de documentos digitales. Cada libro de BOOKIA posee una portada con dirección de arte independiente, una tipografía de lectura compuesta con proporción áurea y archivos optimizados para cualquier lector de tinta electrónica, tableta o teléfono.
              </p>
            </div>

            {/* Transparency Note (Acerca de Bookia) */}
            <div id="transparencia" className="bg-paper-pure p-8 rounded border border-ink/15 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Compass className="w-4 h-4 text-editorial-terracotta" />
                <span className="font-mono text-xs uppercase tracking-widest-editorial text-ink font-medium">
                  Transparencia Editorial
                </span>
              </div>
              <h4 className="font-serif text-xl text-ink font-medium">
                Nuevas herramientas, misma exigencia de calidad.
              </h4>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed font-sans">
                BOOKIA nace de una estrecha colaboración entre dirección editorial humana y sistemas generativos avanzados organizados bajo cinco arquetipos literarios. No inventamos biografías documentales falsas ni acreditaciones académicas ficticias: nuestras firmas son identidades creativas digitales disciplinadas bajo estrictos cánones de no-ficción verificable, estilo y profundidad narrativa.
              </p>
              <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-mono text-ink-muted">
                <span>Formatos universales abiertos</span>
                <span>Sin DRM invasivo · PDF + EPUB</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
