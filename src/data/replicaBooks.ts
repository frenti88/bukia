import { Book } from '../types';

export const REPLICA_BOOKS: Book[] = [
  {
    id: 'psychology-of-money',
    slug: 'psychology-of-money',
    title: 'La Psicología del Dinero',
    subtitle: 'Lecciones atemporales sobre riqueza, codicia y felicidad.',
    writerId: 'morgan-housel',
    category: 'Finanzas & Mentalidad',
    thesisStatement: 'Tener éxito con el dinero tiene poco que ver con cuán inteligente eres y mucho con cómo te comportas.',
    description: 'Tener éxito financiero no se trata necesariamente de lo que sabes, sino de cómo te comportas. Y el comportamiento es difícil de enseñar, incluso a personas realmente brillantes. Morgan Housel comparte relatos reveladores que exploran las extrañas formas en que las personas piensan sobre el dinero.',
    shortDescription: 'Lecciones atemporales sobre riqueza, codicia y felicidad.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#111827',
      accentColor: '#059669',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
        caption: 'La psicología de la toma de decisiones bajo incertidumbre.'
      }
    ],
    previewContent: {
      excerptHeader: 'Capítulo 1 — Nadie está loco',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Nadie está loco',
          epigraph: {
            quote: 'Tus experiencias personales con el dinero representan tal vez el 0.00000001% de lo que ha sucedido en el mundo, pero representan cerca del 80% de cómo crees que funciona.',
            source: 'Morgan Housel'
          },
          paragraphs: [
            'Personas de diferentes generaciones, criadas por padres distintos que ganaron ingresos diferentes y tuvieron valores dispares en rincones del mundo opuestos, aprenden lecciones radicalmente distintas.',
            'Cada uno tiene su propia experiencia personal sobre cómo funciona la realidad económica. Y lo que has vivido en carne propia siempre resulta mucho más convincente que lo que aprendiste de segunda mano.',
            'Cuando alguien toma una decisión financiera que a ti te parece irracional, rara vez es porque esté loco. Es porque ha vivido circunstancias que tú no conoces y opera con un modelo mental forjado en una época distinta.'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra de cortesía. Descarga la edición completa en PDF y EPUB por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 48,
    readingTime: '26 min',
    featured: true,
    releaseDate: '2026-06-12',
    keywords: ['dinero', 'riqueza', 'hábitos', 'psicología']
  },

  {
    id: 'thinking-fast-and-slow',
    slug: 'thinking-fast-and-slow',
    title: 'Pensar Rápido, Pensar Despacio',
    subtitle: 'Los dos sistemas que dirigen nuestra manera de pensar y decidir.',
    writerId: 'daniel-kahneman',
    category: 'Psicología & Decisiones',
    thesisStatement: 'Depositamos demasiada confianza en lo que creemos saber y tenemos una incapacidad manifiesta para reconocer nuestra propia ignorancia.',
    description: 'Daniel Kahneman, eminente psicólogo y premio Nobel de Economía, nos introduce en un fascinante recorrido por la mente y desvela los dos sistemas que modelan cómo pensamos: el Sistema 1, rápido, intuitivo y emocional; y el Sistema 2, lento, deliberativo y lógico.',
    shortDescription: 'Los dos sistemas que dirigen nuestra manera de pensar y elegir.',
    coverArt: {
      bgColor: '#FAF7F2',
      textColor: '#1F2937',
      accentColor: '#D97706',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Capítulo 1 — Dos Sistemas',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Dos Sistemas',
          epigraph: {
            quote: 'Un modo seguro de hacer que la gente crea en falsedades es la repetición constante, porque la familiaridad no se distingue con facilidad de la verdad.',
            source: 'Daniel Kahneman'
          },
          paragraphs: [
            'El Sistema 1 opera de manera automática y rápida, con poco o ningún esfuerzo y sin sensación de control voluntario.',
            'El Sistema 2 focaliza la atención en operaciones mentales trabajosas que lo demandan, incluyendo cálculos complejos. Las operaciones del Sistema 2 suelen asociarse con la experiencia subjetiva de actuar, elegir y concentrarse.',
            'Cuando pensamos en nosotros mismos, nos identificamos con el Sistema 2: el yo consciente y racional que tiene creencias, toma decisiones y decide qué pensar y qué hacer.'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra. Obra completa disponible por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 50,
    readingTime: '28 min',
    featured: false,
    releaseDate: '2026-06-15',
    keywords: ['heurística', 'sesgos', 'racionalidad', 'conducta']
  },

  {
    id: 'think-again',
    slug: 'think-again',
    title: 'Piénsalo Otra Vez',
    subtitle: 'El poder de saber lo que no sabemos.',
    writerId: 'adam-grant',
    category: 'Aprendizaje & Mentalidad',
    thesisStatement: 'La inteligencia suele considerarse la capacidad de pensar y aprender. En un mundo turbulento, existe otro conjunto de habilidades cognitivas más cruciales: la capacidad de repensar y desaprender.',
    description: 'El psicólogo organizacional Adam Grant explora cómo podemos abrazar el placer de equivocarnos, aportar matices a conversaciones polarizadas y crear comunidades y carreras basadas en el aprendizaje continuo.',
    shortDescription: 'Cómo la flexibilidad mental conduce a la excelencia real.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#0F172A',
      accentColor: '#2563EB',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Capítulo 1 — Predicador, Fiscal y Político',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Predicador, Fiscal y Político',
          epigraph: {
            quote: 'Si el conocimiento es poder, saber lo que no sabemos es sabiduría.',
            source: 'Adam Grant'
          },
          paragraphs: [
            'No solo dudamos en revisar nuestras respuestas; a menudo nos resistimos activamente a la mera idea de replantearnos lo que creemos. Al pensar y hablar, solemos adoptar tres personalidades profesionales: la del predicador, la del fiscal o la del político.',
            'Entramos en modo predicador cuando nuestras convicciones están amenazadas: damos sermones para salvaguardar y ensalzar nuestros ideales.',
            'Cambiamos al modo fiscal cuando descubrimos grietas en los argumentos ajenos: desplegamos pruebas para refutar al otro y ganar el litigio. Y adoptamos el modo político cuando anhelamos convencer al público: hacemos campaña para ganarnos el favor de la audiencia.'
          ]
        }
      ],
      sampleEndNote: 'Descarga la edición completa en PDF y EPUB por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 46,
    readingTime: '25 min',
    featured: false,
    releaseDate: '2026-06-18',
    keywords: ['pensamiento crítico', 'humildad', 'flexibilidad']
  },

  {
    id: 'talking-to-strangers',
    slug: 'talking-to-strangers',
    title: 'Hablar con Extraños',
    subtitle: 'Lo que deberíamos saber sobre la gente que no conocemos.',
    writerId: 'malcolm-gladwell',
    category: 'Comunicación & Sociedad',
    thesisStatement: 'Porque no sabemos cómo hablar con extraños, provocamos conflictos y malentendidos de consecuencias profundas en nuestras vidas y sociedades.',
    description: 'Malcolm Gladwell examina con maestría por qué nuestros encuentros con personas desconocidas suelen salir mal. A través de casos históricos, demuestra que las estrategias automáticas que empleamos para interpretar al prójimo son profundamente defectuosas.',
    shortDescription: 'Por qué juzgar mal al desconocido fragmenta la convivencia.',
    coverArt: {
      bgColor: '#FAF8F5',
      textColor: '#111827',
      accentColor: '#10B981',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Capítulo 1 — El principio de veracidad por defecto',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El principio de veracidad por defecto',
          epigraph: {
            quote: 'Crees a alguien no porque no tengas dudas sobre él; le crees porque no tienes suficientes dudas.',
            source: 'Malcolm Gladwell'
          },
          paragraphs: [
            'El principio cardinal al interactuar con extraños es lo que el psicólogo Tim Levine denomina la "veracidad por defecto". Nuestra hipótesis operativa es que la gente con la que tratamos es honesta.',
            'No nos comportamos como científicos recopilando pacientemente evidencias antes de alcanzar una conclusión. Hacemos lo opuesto: empezamos creyendo y solo dejamos de creer cuando las dudas se tornan insostenibles.',
            'Esta disposición por defecto no es una tara evolutiva; constituye una ventaja social indispensable sin la cual ninguna sociedad compleja podría funcionar.'
          ]
        }
      ],
      sampleEndNote: 'Edición completa disponible para lectura inmediata por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 47,
    readingTime: '26 min',
    featured: false,
    releaseDate: '2026-06-20',
    keywords: ['comunicación', 'confianza', 'sociedad', 'juicio']
  },

  {
    id: 'mindset',
    slug: 'mindset',
    title: 'Mindset: La Actitud del Éxito',
    subtitle: 'La nueva psicología del éxito personal y profesional.',
    writerId: 'carol-dweck',
    category: 'Crecimiento & Psicología',
    thesisStatement: 'La perspectiva que adoptas sobre ti mismo influye profundamente en la manera en que conduces tu vida.',
    description: 'Carol S. Dweck, investigadora de Stanford, descubrió una idea revolucionaria: el poder de nuestra mentalidad. Las personas con mentalidad fija tienen muchas menos probabilidades de prosperar que aquellas que cultivan una mentalidad de crecimiento.',
    shortDescription: 'Cómo la mentalidad de crecimiento libera el potencial humano.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#1E3A8A',
      accentColor: '#3B82F6',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Capítulo 1 — Las Mentalidades',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Las Mentalidades',
          epigraph: {
            quote: '¿Por qué perder el tiempo demostrando una y otra vez lo bueno que eres, cuando podrías estar mejorando?',
            source: 'Carol S. Dweck'
          },
          paragraphs: [
            'Durante treinta años, mi investigación ha revelado que la opinión que forjas sobre ti mismo determina si alcanzarás lo que valoras.',
            'Creer que tus cualidades están talladas en piedra —la mentalidad fija— genera la urgencia constante de justificarte. Si solo posees cierta dosis de inteligencia o talento, te verás obligado a demostrarla a cada instante.',
            'Existe otra mentalidad donde tus virtudes no son las cartas inalterables que te tocaron en suerte, sino el punto de partida para tu evolución.'
          ]
        }
      ],
      sampleEndNote: 'Lectura completa en PDF y EPUB por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 44,
    readingTime: '23 min',
    featured: false,
    releaseDate: '2026-06-22',
    keywords: ['mentalidad', 'aprendizaje', 'resiliencia']
  },

  {
    id: 'designing-your-life',
    slug: 'designing-your-life',
    title: 'Diseña tu Vida',
    subtitle: 'Cómo construir una vida plena, consciente y alegre.',
    writerId: 'burnett-evans',
    category: 'Estrategia de Vida',
    thesisStatement: 'Los diseñadores imaginan cosas que aún no existen y las construyen para cambiar el entorno. Puedes hacer exactamente lo mismo con tu vida.',
    description: 'Los diseñadores resuelven problemas aplicando el pensamiento de diseño (design thinking). Bill Burnett y Dave Evans te enseñan cómo aplicar este mismo enfoque para construir una trayectoria vocacional y una vida con propósito y balance.',
    shortDescription: 'Aplicar el design thinking a tu vocación y vida diaria.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#111827',
      accentColor: '#EC4899',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Capítulo 1 — Empieza donde estás',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Empieza donde estás',
          epigraph: {
            quote: 'No puedes saber hacia dónde vas hasta que reconozcas con honestidad en dónde te encuentras.',
            source: 'Bill Burnett & Dave Evans'
          },
          paragraphs: [
            'El diseño no resuelve problemas intentando pensar una vida nueva desde el sofá; el diseño progresa construyendo tu camino hacia adelante.',
            'Antes de trazar una ruta, necesitas evaluar cuatro indicadores vitales: Salud, Trabajo, Juego y Amor.',
            'Cuando realizas un balance honesto de estas áreas sin juzgarte, los verdaderos espacios de oportunidad emergen de forma natural.'
          ]
        }
      ],
      sampleEndNote: 'Marco integral de diseño de vida por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 45,
    readingTime: '24 min',
    featured: false,
    releaseDate: '2026-06-24',
    keywords: ['diseño de vida', 'propósito', 'carrera', 'hábitos']
  },

  {
    id: 'company-of-one',
    slug: 'company-of-one',
    title: 'Empresa de Uno',
    subtitle: 'Por qué mantenerse pequeño es la gran ventaja del futuro.',
    writerId: 'paul-jarvis',
    category: 'Negocios & Autonomía',
    thesisStatement: '¿Y si la verdadera clave de una carrera enriquecedora no fuera escalar una corporación masiva, sino deliberadamente permanecer pequeño?',
    description: 'Empresa de Uno propone una estrategia radical que cuestiona el crecimiento ciego. Al mantenerse pequeño, un profesional gana libertad, autonomía para elegir proyectos significativos y una resiliencia sin las cargas burocráticas del crecimiento forzado.',
    shortDescription: 'Cuestionar la escala corporativa interminable en favor de la libertad.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#111827',
      accentColor: '#1F2937',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Capítulo 1 — ¿Qué es una Empresa de Uno?',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: '¿Qué es una Empresa de Uno?',
          epigraph: {
            quote: 'Crecer no siempre es la mejor métrica del éxito.',
            source: 'Paul Jarvis'
          },
          paragraphs: [
            'Una empresa de uno es simplemente un negocio que cuestiona el crecimiento por defecto.',
            'Se resiste a la expansión automática porque crecer a menudo introduce más reuniones, más costes fijos, mayor complejidad y menos disfrute del oficio que elegiste en primer lugar.',
            'El verdadero éxito consiste en definir qué es "suficiente" para ti, en lugar de perseguir cifras arbitrarias dictadas por otros.'
          ]
        }
      ],
      sampleEndNote: 'Entrega digital inmediata en PDF y EPUB por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 42,
    readingTime: '22 min',
    featured: false,
    releaseDate: '2026-06-25',
    keywords: ['autonomía', 'emprendimiento', 'simplicidad', 'negocios']
  },

  {
    id: 'anything-you-want',
    slug: 'anything-you-want',
    title: 'Todo lo que Quieras',
    subtitle: '40 lecciones para un nuevo modelo de emprendedor.',
    writerId: 'derek-sivers',
    category: 'Emprendimiento',
    thesisStatement: 'Los negocios no tratan sobre el dinero. Tratan sobre convertir ideas en realidad para otros y para ti mismo.',
    description: 'Derek Sivers condensa enérgicas reflexiones de su experiencia fundando CD Baby. Un manifiesto sobre la sencillez radical, el deleite sincero del cliente y el arte de gestionar una iniciativa bajo tus propias reglas morales y personales.',
    shortDescription: '40 lecciones heterodoxas para crear valor sin estrés.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#DC2626',
      accentColor: '#F59E0B',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Capítulo 1 — Hazlo para ti mismo',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Hazlo para ti mismo',
          epigraph: {
            quote: 'Si no estás diciendo "¡CLARO QUE SÍ!", di que no.',
            source: 'Derek Sivers'
          },
          paragraphs: [
            'No necesitas un plan de negocio de cincuenta páginas, capital de riesgo ni diez empleados para comenzar. Solo necesitas resolver un problema real que tú mismo tengas.',
            'Cuando creé CD Baby, era solo una iniciativa pequeña para vender la música de mis amigos por internet cuando nadie más lo hacía.',
            'Nunca olvides la razón originaria por la que haces lo que haces. ¿Lo haces para impresionar o para ser útil y disfrutar el proceso?'
          ]
        }
      ],
      sampleEndNote: 'Lee la obra completa por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 40,
    readingTime: '20 min',
    featured: false,
    releaseDate: '2026-06-26',
    keywords: ['creatividad', 'minimalismo', 'libertad', 'negocios']
  },

  {
    id: 'creative-confidence',
    slug: 'creative-confidence',
    title: 'Confianza Creativa',
    subtitle: 'Liberar el potencial innovador que todos llevamos dentro.',
    writerId: 'kelley-brothers',
    category: 'Creatividad & Innovación',
    thesisStatement: 'La creatividad no es patrimonio exclusivo de unos pocos elegidos; es un músculo que cualquiera puede ejercitar.',
    description: 'David Kelley, fundador de IDEO, y su hermano Tom Kelley demuestran cómo la confianza creativa revoluciona la capacidad de resolución de problemas en organizaciones y vidas personales.',
    shortDescription: 'Cómo despertar la innovación en la vida cotidiana.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#064E3B',
      accentColor: '#10B981',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Capítulo 1 — Cambiar el interruptor',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Cambiar el interruptor',
          epigraph: {
            quote: 'La confianza en tu capacidad creativa es el núcleo de toda innovación.',
            source: 'David & Tom Kelley'
          },
          paragraphs: [
            'Demasiadas personas crecen creyendo que nacieron sin un "gen creativo". Esa creencia no solo es falsa; resulta profundamente limitante.',
            'Cuando pierdes el miedo al juicio externo, comienzas a ver los fallos no como sentencias personales, sino como iteraciones necesarias hacia una gran idea.'
          ]
        }
      ],
      sampleEndNote: 'Reserva la edición íntegra por US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 46,
    readingTime: '25 min',
    featured: false,
    releaseDate: '2026-07-01',
    keywords: ['creatividad', 'innovación', 'ideo', 'confianza']
  }
];

export const ALL_REPLICA_BOOKS = REPLICA_BOOKS;
