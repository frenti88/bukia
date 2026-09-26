import { Book } from '../types';

export const BOOKS: Record<string, Book> = {
  'la-trampa-de-la-certeza': {
    id: 'la-trampa-de-la-certeza',
    slug: 'la-trampa-de-la-certeza',
    title: 'La Trampa de la Certeza',
    subtitle: 'Por qué la necesidad urgente de tener razón empobrece nuestras decisiones.',
    writerId: 'julian-vane',
    category: 'Psicología & Comportamiento',
    thesisStatement: 'La mente humana prefiere una explicación defectuosa antes que tolerar cuarenta y ocho horas de incertidumbre.',
    description: 'Un ensayo sobrio y deslumbrante sobre la economía psicológica del juicio. Julián Vane desmantela la adicción contemporánea a fijar posturas inmediatas frente a cualquier estímulo, revelando cómo los individuos más lúcidos cultivan el arte de la duda aplazada.',
    shortDescription: 'Por qué la necesidad urgente de tener razón nos impide comprender el mundo real.',
    coverArt: {
      bgColor: '#F4ECE1',
      textColor: '#171615',
      accentColor: '#A3482C',
      styleVariant: 'minimal-grid',
      graphicElement: 'arch'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1507842229451-7f01be7fe023?q=80&w=1200&auto=format&fit=crop',
        caption: 'La arquitectura del silencio: espacios donde el pensamiento no compite con la reacción inmediata.'
      }
    ],
    previewContent: {
      excerptHeader: 'Capítulo 1 — El placer biológico de cerrar la conversación',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El placer biológico de cerrar la conversación',
          epigraph: {
            quote: 'No buscamos la verdad; buscamos el descanso de no tener que seguir buscando.',
            source: 'Cuadernos de observación, 1928'
          },
          paragraphs: [
            'Observe lo que ocurre en su pecho cuando alguien formula una pregunta incómoda en la sobremesa. Antes de que intervenga la razón, el organismo produce una microcontracción imperceptible: un apremio fisiológico por clausurar el interrogante.',
            'Tener razón no es un acto intelectual; es, en su origen primario, un ansiolítico. El cerebro gasta aproximadamente el veinte por ciento de la glucosa corporal mientras evalúa escenarios abiertos. En cuanto adopta una convicción —incluso si es endeble o apresurada—, el consumo energético desciende y una tenue ola de dopamina sella el asunto.',
            'Vivimos, por lo tanto, no en la era del desacuerdo, sino en la era de la prisa biológica por dejar de pensar. Lo que llamamos "opinión formada" es con frecuencia el simple agotamiento de haber sostenido una duda durante más de tres minutos.',
            'El observador disciplinado no busca refutar al interlocutor para ganar un debate fugaz; su primer ejercicio consiste en tolerar la incomodidad física de no saber qué responder antes de que se enfríe el café.'
          ]
        }
      ],
      sampleEndNote: 'Ha finalizado el primer capítulo de muestra. La obra completa (48 páginas · Formatos PDF y EPUB) está disponible para su descarga y lectura continua.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 48,
    readingTime: '26 min',
    featured: true,
    releaseDate: '2026-09-15',
    keywords: ['decisiones', 'sesgos', 'pensamiento crítico', 'psicología', 'calma mental']
  },

  'sistemas-silenciosos': {
    id: 'sistemas-silenciosos',
    slug: 'sistemas-silenciosos',
    title: 'Sistemas Silenciosos',
    subtitle: 'Cómo las mejores ideas y organizaciones operan sin ruido ni heroísmos.',
    writerId: 'marco-levin',
    category: 'Negocios & Estrategia',
    thesisStatement: 'El trabajo de más alto impacto es aquel que previene incendios invisibles, no el que los apaga con aspavientos.',
    description: 'Marco S. Levin ofrece una disección implacable de la cultura del trabajo ruidoso. Frente al fetichismo de las reuniones eternas, los paneles saturados de métricas vanidosas y la urgencia fingida, este volumen propone una arquitectura de operaciones basada en la sobriedad, la autonomía por defecto y el mínimo rozamiento.',
    shortDescription: 'La anatomía de las organizaciones que producen valor extraordinario sin fatiga ni aspavientos.',
    coverArt: {
      bgColor: '#1E232A',
      textColor: '#FAF8F5',
      accentColor: '#B87B28',
      styleVariant: 'geometric-circle',
      graphicElement: 'axis'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
        caption: 'Estructuras de carga: la solidez que sostiene una gran obra casi nunca se hace notar.'
      }
    ],
    previewContent: {
      excerptHeader: 'Capítulo 1 — El culto a la fricción visible',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El culto a la fricción visible',
          epigraph: {
            quote: 'Un buen timonel apenas mueve las manos. Son los aprendices quienes sacuden la nave.',
            source: 'Tratado de navegación fluvial'
          },
          paragraphs: [
            'Casi todas las culturas corporativas padecen una distorsión perceptiva básica: premian el sudor visible por encima de la eficacia serena. Si un empleado rescata un proyecto al borde del desastre trabajando durante la madrugada, se le condecora en público. Si otro diseñó un procedimiento tan limpio que el problema jamás llegó a manifestarse, su labor resulta prácticamente invisible.',
            'Este desajuste ha consagrado el heroísmo como método operativo. Se confunde el movimiento con el avance, y la saturación del calendario con la importancia estratégica.',
            'Un sistema silencioso no busca impresionar a nadie. Se diseña para funcionar con el mínimo de piezas móviles, reconociendo que cada punto de contacto humano innecesario es una invitación directa al error y al cansancio mental.',
            'La verdadera sofisticación en el trabajo no añade herramientas; elimina intermediarios hasta que sólo queda lo indispensable.'
          ]
        }
      ],
      sampleEndNote: 'Ha finalizado el primer capítulo de muestra. Descargue la edición íntegra con todos los modelos de decisión por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 44,
    readingTime: '24 min',
    featured: false,
    releaseDate: '2026-09-18',
    keywords: ['estrategia', 'diseño de sistemas', 'simplicidad', 'trabajo profundo', 'foco']
  },

  'las-habitaciones-del-domingo': {
    id: 'las-habitaciones-del-domingo',
    slug: 'las-habitaciones-del-domingo',
    title: 'Las Habitaciones del Domingo',
    subtitle: 'Tres encuentros en una ciudad que cambia de luz.',
    writerId: 'elena-rivas',
    category: 'Ficción Contemporánea',
    thesisStatement: 'Casi todos los giros decisivos de una vida ocurren en silencio, mientras alguien dobla una sábana o mira por la ventana.',
    description: 'Tres relatos entrelazados durante una tarde de otoño en Madrid. Elena Rivas captura con precisión quirúrgica el peso de lo no dicho entre viejos afectos, la nostalgia de las casas recién desalojadas y la belleza áspera de las despedidas que no necesitan dramatismo para doler.',
    shortDescription: 'Tres encuentros íntimos donde lo cotidiano cobra una intensidad luminosa e imborrable.',
    coverArt: {
      bgColor: '#EDE3DC',
      textColor: '#2E1F1A',
      accentColor: '#9E3C4E',
      styleVariant: 'arch-architectural',
      graphicElement: 'window'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
        caption: 'La luz diagonal de las cinco de la tarde sobre los suelos de tarima antigua.'
      }
    ],
    previewContent: {
      excerptHeader: 'Capítulo 1 — El balcón hacia la calle Olid',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El balcón hacia la calle Olid',
          epigraph: {
            quote: 'Hay casas que tardan años en comprender que nos hemos marchado.',
            source: 'E. R.'
          },
          paragraphs: [
            'A las cuatro y media de la tarde, la sombra del edificio de enfrente alcanzaba exactamente el borde del zócalo de madera. Martín conocía ese movimiento con la familiaridad de quien ha pasado cinco inviernos mirando el mismo ángulo de luz sin encender la estufa.',
            'Clara no había terminado de desembalar la caja de las tazas de cerámica. Estaban sobre la encimera, envueltas en hojas de periódico viejo donde se leían titulares de hacía dos años sobre huelgas de trenes y pronósticos de sequía.',
            '—Si dejamos esta puerta entreabierta —dijo ella, pasando los dedos por el marco astillado—, se forma una corriente que huele a pan recién horneado de la tahona de la esquina.',
            'Martín no contestó de inmediato. No porque no estuviera de acuerdo, sino porque sabía que admitir la belleza de ese olor implicaba empezar a encariñarse con una vivienda que ambos tendrían que abandonar antes de la primavera.'
          ]
        }
      ],
      sampleEndNote: 'Ha finalizado la primera escena de muestra. Adquiera la novela breve completa en PDF y EPUB por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 52,
    readingTime: '30 min',
    featured: false,
    releaseDate: '2026-09-20',
    keywords: ['narrativa', 'literatura', 'relaciones', 'ciudad', 'intimidad']
  },

  'la-atencion-secuestrada': {
    id: 'la-atencion-secuestrada',
    slug: 'la-atencion-secuestrada',
    title: 'La Atención Secuestrada',
    subtitle: 'Crónica de nuestra fuga voluntaria hacia las pantallas ajenas.',
    writerId: 'tomas-beretta',
    category: 'Cultura & Sociedad',
    thesisStatement: 'No nos robaron el tiempo libre; lo entregamos con alivio para no tener que estar a solas con nosotros mismos.',
    description: 'Tomás Beretta recorre vagones de metro, salas de espera y cafés de barrio para cartografiar el síntoma definitivo de nuestro siglo: el pavor colectivo a ocho segundos de vacío. Un ensayo ágil, mordaz y profundamente humano que escapa del sermón apocalíptico para indagar en la ternura y fragilidad de nuestros rituales conectados.',
    shortDescription: 'Una crónica lúcida y mordaz sobre por qué hemos olvidado cómo se mira por la ventana.',
    coverArt: {
      bgColor: '#14211D',
      textColor: '#F5F7F4',
      accentColor: '#3F826D',
      styleVariant: 'typography-bold',
      graphicElement: 'scan'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
        caption: 'La luz fría de los cristales iluminando rostros en la penumbra del trayecto diario.'
      }
    ],
    previewContent: {
      excerptHeader: 'Capítulo 1 — El espejo del ascensor',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El espejo del ascensor',
          epigraph: {
            quote: 'La verdadera prueba de serenidad es subir cuatro plantas con un desconocido sin fingir una urgencia ficticia.',
            source: 'Notas al margen de la ciudad'
          },
          paragraphs: [
            'Observe el ritual: dos adultos entran a la cabina metálica en la planta baja. Las puertas se deslizan con un zumbido neumático. Quedan por delante veintidós segundos de ascenso compartido.',
            'Ninguno de los dos tiene un asunto pendiente de vida o muerte. Sin embargo, en el segundo cuatro, una mano desciende mecánicamente hacia el bolsillo del abrigo. La pantalla se ilumina. Se desbloquea con el reconocimiento facial. El pulgar desliza dos veces un titular sobre el clima y una notificación sobre un descuento de calzado deportivo.',
            'El acto no responde a la curiosidad, sino a una forma moderna de fobia social: la imposibilidad de sostener la propia mirada en el espejo de la cabina mientras otro ser humano respira a medio metro de distancia.',
            'Nos hemos convencido de que las pantallas son adictivas por su diseño óptico. La verdad más amarga es que funcionan como un escudo protector contra la incomodidad de existir en tiempo presente.'
          ]
        }
      ],
      sampleEndNote: 'Fin del extracto de cortesía. Continúe con la lectura de la crónica completa (46 páginas) por solo US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 46,
    readingTime: '25 min',
    featured: false,
    releaseDate: '2026-09-22',
    keywords: ['tecnología', 'cultura digital', 'ensayo', 'sociedad', 'atención']
  },

  'la-geometria-del-asombro': {
    id: 'la-geometria-del-asombro',
    slug: 'la-geometria-del-asombro',
    title: 'La Geometría del Asombro',
    subtitle: 'Lo que las formas microscópicas revelan sobre el orden cósmico.',
    writerId: 'nora-dahl',
    category: 'Ciencia & Futuro',
    thesisStatement: 'La naturaleza no decora; cada curva, espiral y filamento es la solución matemática más elegante a un problema de supervivencia energética.',
    description: 'Nora K. Dahl guía al lector por las matemáticas invisibles que esculpen los copos de nieve, las alas de las mariposas y las colonias bacterianas. Con una prosa que aúna rigor empírico y lirismo contemplativo, este libro demuestra que la ciencia no desencanta el mundo, sino que lo dota de una arquitectura conmovedora.',
    shortDescription: 'Un viaje poético y riguroso a las matemáticas vivas que organizan el mundo natural.',
    coverArt: {
      bgColor: '#171B26',
      textColor: '#FAF9F6',
      accentColor: '#537895',
      styleVariant: 'atmospheric-gradient',
      graphicElement: 'fractal'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop',
        caption: 'Morfologías microscópicas: el cálculo diferencial ejecutado por la materia sin esfuerzo.'
      }
    ],
    previewContent: {
      excerptHeader: 'Capítulo 1 — El ala de la libélula y la economía del vacío',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El ala de la libélula y la economía del vacío',
          epigraph: {
            quote: 'Donde el ojo común ve ornamento, el cálculo descubre necesidad pura.',
            source: 'D’Arcy Thompson, Sobre el crecimiento y la forma'
          },
          paragraphs: [
            'Bajo una lente de cincuenta aumentos, el ala de una libélula común revela un mosaico de aproximadamente tres mil celdas poligonales de quitina transparente. No hay dos idénticas en tamaño, y sin embargo el conjunto obedece con precisión inflexible al diagrama de Voronoi: la partición que minimiza el material sin sacrificar la rigidez torsional.',
            'Durante trescientos millones de años de evolución atmosférica, la selección natural no inventó una forma "artística". Resolvió un dilema de ingeniería: cómo sostener cuatro gramos de peso contra ráfagas de viento utilizando una membrana con un grosor inferior al de un glóbulo rojo humano.',
            'Cuando contemplamos este patrón, solemos llamarlo belleza. Pero la belleza aquí no es un añadido estético; es el resultado inevitable de un sistema que ha eliminado toda materia redundante.',
            'Aprender a mirar la naturaleza con ojos científicos no desvanece el asombro: lo ancla en la realidad indestructible de las leyes físicas.'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra editorial. Adquiera el libro completo con ilustraciones explicativas en PDF y EPUB por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 42,
    readingTime: '22 min',
    featured: false,
    releaseDate: '2026-09-24',
    keywords: ['ciencia', 'biología', 'física', 'geometría', 'naturaleza']
  }
};

export const BOOKS_LIST = Object.values(BOOKS);
export const CATEGORIES = [
  'Todos',
  'Psicología & Comportamiento',
  'Negocios & Estrategia',
  'Ficción Contemporánea',
  'Cultura & Sociedad',
  'Ciencia & Futuro'
];
