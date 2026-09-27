---
name: BUKIA
description: Editorial digital experimental de historias breves por voces artificiales
colors:
  primary: "#18181B"
  primary-hover: "#27272A"
  neutral-bg: "#FAF8F5"
  surface: "#FFFFFF"
  surface-subtle: "#F5F3EF"
  ink: "#282828"
  ink-muted: "#52525B"
  ink-faint: "#A1A1AA"
  accent-amber: "#92400E"
  accent-amber-light: "#F59E0B"
  border: "#E4E4E7"
  border-subtle: "#F4F4F5"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Google Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
  serif:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
---

# Design System

## Overview
BUKIA es una editorial digital experimental contemporánea. Su identidad visual fusiona la calidez de la imprenta y el papel clásico con la sobriedad, la precisión y la ligereza del diseño editorial moderno. La atmósfera general no evoca una empresa de software ni una startup de inteligencia artificial; evoca un sello literario independiente, un objeto cultural cuidado y una librería selecta.

## Colors
- **Papel de Fondo Principal (`neutral-bg`)**: `#FAF8F5` — Tono orgánico de papel de libro que reduce la fatiga y aporta calidez física.
- **Superficie de Tarjetas (`surface`)**: `#FFFFFF` — Blanco nítido para superficies de lectura, modales y tarjetas editoriales.
- **Superficie Sutil (`surface-subtle`)**: `#F5F3EF` — Fondo neutro para pausas editoriales y destacados suaves.
- **Tinta Principal (`ink`)**: `#282828` — Contraste de alta legibilidad WCAG AA sobre fondos claros, evitando el negro puro digital (#000000).
- **Tinta Secundaria (`ink-muted`)**: `#52525B` — Cuerpos de texto explicativos, premisas secundarias y metadatos.
- **Tinta Tenue (`ink-faint`)**: `#A1A1AA` — Separadores de lectura, líneas sutiles y timestamps discretos.
- **Acento Editorial Ámbar (`accent-amber`)**: `#92400E` / `#B45309` — Toques bibliotecarios discretos (numeración editorial `BUKIA/01`, sellos discretos).
- **Bordes y Divisores (`border`)**: `#E4E4E7` / `#F4F4F5` — Delimitaciones arquitectónicas sutiles.

## Typography
- **Titulares (`display`, `headline`, `h1`-`h6`)**: `Montserrat`. En cortes 700 y 800 para el H1 y nombres de obras, con tracking ceñido (`tracking-tight`) y proporciones balanceadas.
- **Cuerpo de texto e interfaz (`body`)**: `Google Sans`. Tipografía humanista neutra, con interlineado holgado (`leading-relaxed` / 1.6) para una lectura sin fatiga.
- **Metadatos y sistema numérico (`label`)**: `JetBrains Mono`. Para metadatos de imprenta: duraciones (`47 min`), páginas, precio (`$4.900 COP`) y signaturas editoriales (`BUKIA/01`).
- **Narrativa literaria y citas (`serif`)**: `Newsreader`. Serif contemporánea con ritmo literario, usada en el cuerpo del lector (`ReaderModal`), fragmentos de historias y citas de autor.

## Layout & Rhythm
- **Escala de Contenedores**:
  - Contenedor estándar: `max-w-7xl` con relleno lateral responsivo (`px-4 sm:px-6 lg:px-8`).
  - Contenedor de lectura / texto largo: `max-w-2xl` o `max-w-3xl` para mantener el "measure" óptimo (60 a 75 caracteres por línea).
  - Pausa de revelación y perfiles: `max-w-4xl` centrado con amplio espacio negativo vertical (`py-20 sm:py-28`).
- **Ritmo Vertical**: Respiro deliberado entre secciones. El espacio negativo no es un vacío por rellenar, es una pausa editorial que invita a la reflexión.
- **Grid de Catálogo**: Composición editorial asimétrica o balanceada de 2 a 3 columnas en desktop que da protagonismo estelar a las portadas y sus premisas, no un grid abarrotado de ecommerce.

## Elevation & Depth
- **Filosofía**: Minimalismo táctil plano con tridimensionalidad concentrada en los libros.
- **Portadas Tridimensionales**:
  - Relación de aspecto: `aspect-[1/1.48]`.
  - Perspectiva sutil: `perspective-1000` con rotación suave en hover (`rotate-y-3` o elevación leve `-translate-y-1.5`).
  - Sombra física: Sombra multicapa (`shadow-book-realistic` / `shadow-book-hero`) con lomo y relieve editorial.
  - Signatura editorial discreta: `BUKIA/01`, `BUKIA/02` en la base o borde de la portada.
- **Tarjetas e Interfaces**:
  - Bordes finos (`border border-stone-200/80` o `border-gray-200/60`).
  - Sombras difusas ultraligeras (`shadow-xs` / `shadow-sm`), sin tarjetas flotantes pesadas.

## Shapes & Radii
- **Botones y CTAs**: Píldora completa (`rounded-full`) que invita al tap suave.
- **Contenedores y Paneles**: Radio suave moderado (`rounded-2xl` o `rounded-xl`).
- **Portadas**: Esquinas de lomo rectas y esquinas de corte con micro-radio (`rounded-r-md`), imitando la encuadernación rústica cosida.
- **Separadores**: Líneas de pelo (`h-px bg-stone-200`) y la diagonal identitaria `/` de BUKIA con moderación tipográfica.

## Components & UX Patterns
- **Header**: Sobrio, compacto y ligero. Marca `BUKIA`, navegación primaria simple (*Historias*, *Voces*, *El experimento*). Sin botones comerciales agresivos ni claims permanentes junto al logo.
- **Hero**: Titular puro y directo: *"Historias que ningún humano escribió."*. Apoyo sereno: *"Historias breves para terminar hoy. Empieza cualquiera gratis."*. CTA primario: *"Elegir una historia"*. Sin tecnicismos ni mención prematura a IA.
- **Card de Libro**: Minimalista y destilada. Portada con su signatura editorial, Título, Premisa intrigante en 2 líneas, Metadato conciso (`47 min · $4.900 COP`) y CTA textual o flecha (`Descubrir →`). Sin aglomeración de badges, categorías ni tags redundantes.
- **Pausa de Revelación**: Bloque editorial con espacio generoso: *"Hay algo que todavía no te contamos. Ninguno de estos autores existe. Cinco voces. Cinco maneras de imaginar."*.
- **Voces Editoriales**: Fichas literarias sobrias para Nara, Vera, Elio, Nilo y Aren. Sin jerga técnica, sin parámetros de LLM ni métricas de computación.
- **Lector (Reader)**: Atmósfera de inmersión total. Fondo apergaminado o blanco suave, tipografía Serif impecable, barra de progreso sutil y controles discretos (`Aa` y cerrar). Corte de muestra deliberado al 10-15% con tensión dramática y llamada natural a continuar (`"Esto apenas comienza."`).
- **Checkout Modal**: Directo y transparente. Proceso en 1 paso para continuar la lectura sin fricciones, precio fijado en **$4.900 COP**, indicando inclusión de formatos PDF + EPUB.

## Motion & Micro-interactions
- **Duraciones**: 150ms a 250ms con curvas suaves `ease-out`.
- **Efectos permitidos**:
  - Elevación suave de portadas en hover (`-translate-y-1.5`).
  - Transición de opacidad suave en revelaciones y diálogos (`fade-in`).
  - Subrayado sutil en enlaces editoriales activos.
- **Efectos prohibidos**: Rebotes elásticos, partículas flotantes, paralaje vertiginoso, confeti o destellos cibernéticos.

## Do's and Don'ts
- **DO**: Dar el protagonismo absoluto a la historia y su premisa antes que al mecanismo tecnológico.
- **DO**: Emplear `$4.900 COP` de manera consistente en todo el sitio.
- **DO**: Mantener una jerarquía tipográfica limpia y contrastada (#282828 sobre #FAF8F5 / #FFFFFF).
- **DO**: Probar gratis antes de comprar: el funnel siempre pasa por la muestra de lectura.
- **DON'T**: Utilizar tarjetas anidadas, badges saturados o rectángulos redondeados en exceso.
- **DON'T**: Tratar a los autores artificiales como bots o agentes con parámetros de prompt.
- **DON'T**: Usar modo oscuro en producción; la identidad es imprenta clara.
- **DON'T**: Forzar al usuario a leer textos explicativos largos antes de mostrarle las portadas de los libros.
