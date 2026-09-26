import { Book } from '../types';

export const BOOKS: Record<string, Book> = {
  'la-ultima-persona-despierta': {
    id: 'la-ultima-persona-despierta',
    slug: 'la-ultima-persona-despierta',
    title: 'La Última Persona Despierta',
    subtitle: 'Durante una noche, toda una ciudad recibe la misma orden: dormir.',
    premise: 'A las 3:17 de la mañana, todos los habitantes de la ciudad reciben exactamente el mismo mensaje: duerman durante las próximas 24 horas. Daniel decide no hacerlo.',
    writerId: 'julian-vane',
    category: 'Tensión Psicológica',
    thesisStatement: 'La obediencia colectiva es el sedante más barato que conoce una civilización.',
    description: 'A las 3:17 de la mañana, todas las pantallas, teléfonos y altavoces públicos emiten una notificación breve: una directiva civil de descanso obligatorio durante veinticuatro horas. Sin explicaciones sanitarias ni amenazas explícitas. Daniel, un encuadernador insomne en el centro histórico, apaga el teléfono y decide salir a comprobar qué ocurre cuando una metrópoli de cuatro millones de personas acata la misma orden al unísono.',
    shortDescription: 'Toda una ciudad recibe la misma orden: dormir durante 24 horas. Daniel decide no hacerlo.',
    coverArt: {
      bgColor: '#0F172A',
      textColor: '#FAF8F5',
      accentColor: '#F59E0B',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
        caption: 'Avenidas vacías a las cuatro de la madrugada bajo el alumbrado de mercurio.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa la historia completa y descubre qué ocurrió en la calle doce.',
      remainingPages: 36,
      remainingMinutes: 39,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'La directiva de las 3:17',
          epigraph: {
            quote: 'No hay nada más ruidoso que el silencio concertado de cuatro millones de personas.',
            source: 'Julián Vane'
          },
          paragraphs: [
            'El pitido no sonó como una alarma de catástrofe, sino como el recordatorio amable de una lavadora que termina su ciclo. Un tono triple, amortiguado, emitido simultáneamente por el teléfono sobre la mesa de noche, el televisor en modo reposo y la pantalla del refrigerador inteligente.',
            'Daniel encendió la lámpara de lectura. En la pantalla de su teléfono móvil el mensaje ocupaba exactamente tres líneas en tipografía sin serifa blanca sobre fondo negro:',
            '«Directiva de descanso general. A partir de las 03:30 h y durante las próximas veinticuatro horas, permanezca en su domicilio y duerma. Todos los servicios esenciales operarán en modo silencioso. Gracias por su cooperación.»',
            'No había logotipo gubernamental, ni firma de ministerio, ni enlace para ampliar información. Lo más inquietante no fue el mensaje en sí, sino lo que ocurrió tres minutos después: el murmullo continuo de la avenida central —esa vibración sorda de camiones de basura, taxis y motores lejanos que acompañaba sus noches desde hacía doce años— se extinguió como una vela soplada.',
            'Daniel se acercó al ventanal del cuarto piso. En el edificio de enfrente, ventana por ventana, las luces cálidas se fueron apagando en una secuencia ordenada y serena. Nadie gritó. Nadie bajó a la calle a preguntar. La ciudad entera simplemente se metió en la cama.',
            'Daniel se calzó los zapatos, se puso la chaqueta de lana oscura y abrió la puerta de su apartamento sin hacer ruido. Iba a ser la única persona despierta.'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 44,
    readingTime: '47 min',
    featured: true,
    releaseDate: '2026-08-10',
    keywords: ['insomnio', 'ciudad', 'misterio', 'obediencia', 'noche'],
    nextRecommendedId: 'todo-lo-que-nunca-ocurrio'
  },

  'todo-lo-que-nunca-ocurrio': {
    id: 'todo-lo-que-nunca-ocurrio',
    slug: 'todo-lo-que-nunca-ocurrio',
    title: 'Todo lo que Nunca Ocurrió',
    subtitle: 'Un hombre empieza a recordar una vida que jamás vivió.',
    premise: 'Un archivista encuentra en los sótanos del registro civil los certificados de matrimonio y defunción de una vida que está seguro de no haber vivido jamás.',
    writerId: 'vera-montes',
    category: 'Memoria & Ficción',
    thesisStatement: 'A veces la memoria no es un registro de lo vivido, sino un refugio inventado contra lo insoportable.',
    description: 'Sebastián lleva veinte años catalogando expedientes civiles en el sótano del archivo municipal. Durante un inventario de rutina en la sección de actas no reclamadas de 1994, tropieza con una carpeta a su nombre: su número de identidad, su tipografía dactilar y un acta matrimonial con una mujer de la que jamás ha oído hablar, acompañada de una dirección en una ciudad donde nunca ha puesto un pie.',
    shortDescription: 'Un archivista encuentra los certificados oficiales de una vida que nunca vivió.',
    coverArt: {
      bgColor: '#FAF6ED',
      textColor: '#1C1917',
      accentColor: '#B45309',
      styleVariant: 'arch-architectural'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop',
        caption: 'Cajas de archivo y documentos acumulados bajo luz de tungsteno.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa leyendo para descubrir qué revela la caja 414.',
      remainingPages: 32,
      remainingMinutes: 34,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El acta 414',
          epigraph: {
            quote: 'El pasado es el único territorio donde todo puede haber sucedido sin dejar rastro.',
            source: 'Vera Montes'
          },
          paragraphs: [
            'El polvo de los archivos viejos tiene un olor mineral y dulce, similar a la harina guardada demasiado tiempo en un cajón de pino. Sebastián reconocía ese olor a ciegas desde 2004.',
            'La caja número 414 pertenecía a los extravíos de la década del noventa: documentos duplicados por error de imprenta, partidas de nacimiento con nombres permutados o partidas de defunción emitidas para personas que se presentaron vivas semanas más tarde a exigir su anulación.',
            'Entre dos folios satinados apareció la cédula plastificada. La fotografía en blanco y negro mostraba su propio rostro: la misma cicatriz milimétrica en el arco de la ceja derecha, la misma ligera inclinación de los hombros. Pero la fecha de expedición era 1988, un año en el que Sebastián tenía apenas doce años y residía a mil kilómetros de allí.',
            'Y lo peor no era el papel oficial. Lo verdaderamente aterrador fue que, al sostener el cartón con los dedos, una ráfaga de recuerdos nítidos le atravesó el pecho: el tacto de una baranda verde de madera mojada, el olor a eucalipto tras la lluvia y una voz femenina llamándolo por un apodo que nadie en su vida real había utilizado jamás.'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 40,
    readingTime: '42 min',
    featured: true,
    releaseDate: '2026-08-15',
    keywords: ['archivo', 'memoria', 'identidad', 'pasado', 'recuerdos'],
    nextRecommendedId: 'las-personas-que-dejamos-atras'
  },

  'las-personas-que-dejamos-atras': {
    id: 'las-personas-que-dejamos-atras',
    slug: 'las-personas-que-dejamos-atras',
    title: 'Las Personas que Dejamos Atrás',
    subtitle: 'En una estación sin nombre, los trenes traen de vuelta a quienes intentaste olvidar.',
    premise: 'En una pequeña estación de tren olvidada por los mapas, los pasajeros que descienden son idénticos a las personas de las que huiste en tu juventud.',
    writerId: 'vera-montes',
    category: 'Ficción Íntima',
    thesisStatement: 'No se huye de un lugar para llegar a otro, sino para no tener que mirar hacia atrás.',
    description: 'Martín vive en una población costera donde el ferrocarril dejó de operar formalmente en los años ochenta. Sin embargo, cada primer jueves de mes, un convoy sin rotular frena en el andén secundario durante exactamente cuatro minutos. Quienes bajan no son turistas: son réplicas exactas de aquellos amigos, amores y parientes a los que Martín dejó de llamar sin ofrecer una explicación.',
    shortDescription: 'En una estación abandonada, cada tren trae a alguien a quien traicionaste.',
    coverArt: {
      bgColor: '#F1F5F9',
      textColor: '#0F172A',
      accentColor: '#475569',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop',
        caption: 'Andenes vacíos entre la niebla costera de primera hora.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa leyendo para saber quién desciende del tren.',
      remainingPages: 28,
      remainingMinutes: 30,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El andén de las cuatro',
          epigraph: {
            quote: 'El olvido no es una facultad de la mente, es una cobardía del cuerpo.',
            source: 'Vera Montes'
          },
          paragraphs: [
            'Los habitantes del pueblo fingían no escuchar el silbato de vapor que rasgaba la bruma a las 04:12. Era un pacto tácito: bajar las persianas, no encender linternas y dejar que el convoy de cuatro vagones vacíos se detuviera sin testigos.',
            'Martín quebró el pacto la noche en que cumplió cuarenta y dos años. Llevaba una taza de café en la mano y se sentó en el banco de hierro forjado carcomido por el salitre.',
            'El tren llegó deslizándose sobre rieles oxidados con un chirrido agudo. Las puertas de latón se deslizaron. Bajó una sola persona: una mujer joven envuelta en un abrigo color mostaza con botones de nácar desparejados.',
            'Martín soltó la taza contra la grava. Aquel abrigo lo había comprado él mismo en una tienda de segunda mano en 2008. Y la mujer que lo llevaba puesta había muerto en un accidente de motocicleta diez días después de que él decidiera marcharse sin despedirse.'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 36,
    readingTime: '38 min',
    featured: false,
    releaseDate: '2026-08-18',
    keywords: ['estación', 'culpa', 'tren', 'despedidas', 'fantasmas'],
    nextRecommendedId: 'la-casa-que-nos-recuerda'
  },

  'si-manana-no-existiera': {
    id: 'si-manana-no-existiera',
    slug: 'si-manana-no-existiera',
    title: 'Si Mañana No Existiera',
    subtitle: 'El reloj municipal se detiene a la medianoche y la luz del alba nunca llega.',
    premise: 'A las doce en punto de la noche, el reloj de la torre municipal se detiene y la luz del amanecer nunca llega. El mundo debe aprender a negociar a oscuras.',
    writerId: 'mateo-henao',
    category: 'Filosofía Especulativa',
    thesisStatement: 'La civilización no descansa sobre leyes escritas, sino sobre la certeza biológica del amanecer.',
    description: 'Eran las 06:45 cuando los despertadores sonaron en millones de hogares. Pero al descorrer las cortinas, el cielo conservaba la misma densidad oscura y helada de las tres de la madrugada. A las diez de la mañana la oscuridad continuaba intacta. Un físico aficionado descubre que el tiempo atómico sigue avanzando, pero la rotación de la luz sobre el hemisferio se ha congelado.',
    shortDescription: 'Las horas pasan pero el amanecer nunca llega. La oscuridad se vuelve permanente.',
    coverArt: {
      bgColor: '#111827',
      textColor: '#F9FAFB',
      accentColor: '#3B82F6',
      styleVariant: 'geometric-circle'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
        caption: 'La bóveda celeste suspendida en una medianoche sin fin.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa leyendo para descubrir la razón de la penumbra permanente.',
      remainingPages: 38,
      remainingMinutes: 42,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'La hora que no amaneció',
          epigraph: {
            quote: 'Creíamos que la noche era una pausa; era simplemente una tregua concedida por el sol.',
            source: 'Mateo Henao'
          },
          paragraphs: [
            'A las seis de la mañana, el panadero de la plaza encendió los hornos convencido de que la niebla demoraba el alba. A las ocho, el tráfico de camiones encendió las luces altas. A las doce del mediodía, las campanas de la basílica tocaron a muerto por primera vez en cincuenta años.',
            'No había nubes de tormenta ni ceniza volcánica en suspensión. El cielo estaba completamente despejado: las mismas constelaciones de la medianoche continuaban clavadas en el cenit, inmóviles como alfileres sobre terciopelo negro.',
            'Clara encendió el receptor de radio de onda corta en el desván. Entre chasquidos estáticos y zumbidos intercontinentales, captó una emisión clandestina emitida desde un faro en Terranova: «El sol sigue allí afuera. No se ha apagado. Pero algo ha cerrado el horizonte terrestre desde adentro.»'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 48,
    readingTime: '52 min',
    featured: true,
    releaseDate: '2026-08-22',
    keywords: ['noche', 'tiempo', 'colapso', 'astronomía', 'oscuridad'],
    nextRecommendedId: 'el-hombre-que-recordaba-el-futuro'
  },

  'la-casa-que-nos-recuerda': {
    id: 'la-casa-que-nos-recuerda',
    slug: 'la-casa-que-nos-recuerda',
    title: 'La Casa que Nos Recuerda',
    subtitle: 'Heredó una mansión donde las paredes reproducen las conversaciones de hace cuarenta años.',
    premise: 'Tras la muerte de su abuela, Sofía hereda una mansión donde cada habitación reproduce en susurro las conversaciones que ocurrieron allí cuarenta años atrás.',
    writerId: 'elena-rivas',
    category: 'Misterio Atmosférico',
    thesisStatement: 'Las paredes no guardan silencio; solo esperan a que nos quedemos solos para devolvernos lo que dijimos.',
    description: 'Cuando Sofía entra en la casona de campo de su familia tras treinta años de ausencia, nota que los pasillos no tienen eco convencional. Al apoyar la oreja en el empapelado descolorido del salón principal, percibe un zumbido idéntico al de una cena familiar de 1982: copas de cristal chocando, risas de parientes ya fallecidos y una discusión entre sus padres que cambiaría el rumbo de su infancia.',
    shortDescription: 'Una casa donde el papel tapiz devuelve las palabras pronunciadas décadas atrás.',
    coverArt: {
      bgColor: '#14281D',
      textColor: '#FAF8F5',
      accentColor: '#10B981',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
        caption: 'Muros de madera y papel tapiz victoriano en penumbra.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa leyendo para entrar en la habitación clausurada.',
      remainingPages: 33,
      remainingMinutes: 36,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El empapelado del comedor',
          epigraph: {
            quote: 'Las casas viejas nunca están deshabitadas; solo están llenas de tiempo condensado.',
            source: 'Elena Rivas'
          },
          paragraphs: [
            'El cerrajero tardó cuarenta minutos en abrir la cerradura de bronce de la puerta principal. Cuando por fin cedió con un chasquido pesado, el aire que salió de la casa no era húmedo ni mohoso: olía a tabaco de pipa holandés, cáscara de naranja amarga y alfombra recién cepillada.',
            'Sofía dejó las maletas en el vestíbulo. Se quitó los guantes y caminó hacia el comedor de invierno. El silencio era total, pero cuando se acercó a la alacena empotrada, un rumor levísimo le acarició la nuca.',
            'Era un susurro articulado. Reconoció la risa de su tía Beatriz —fallecida en 1991— contando un chiste tonto sobre un canario. Luego, la voz de su madre, muy joven, respondiendo con un tono grave que Sofía nunca le había escuchado en vida: «Si el inspector vuelve mañana, diremos que la niña nunca estuvo aquí.»'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 42,
    readingTime: '45 min',
    featured: false,
    releaseDate: '2026-08-25',
    keywords: ['casa', 'herencia', 'voces', 'secreto', 'infancia'],
    nextRecommendedId: 'antes-de-que-olvides-mi-nombre'
  },

  'siete-minutos-sin-mentir': {
    id: 'siete-minutos-sin-mentir',
    slug: 'siete-minutos-sin-mentir',
    title: 'Siete Minutos Sin Mentir',
    subtitle: 'Durante una cena de Estado, una copa rota obliga a todos a decir la verdad durante 420 segundos.',
    premise: 'Durante una cena diplomática de alto nivel, una copa rota esparce un compuesto invisible que impide que cualquiera de los comensales mienta durante siete minutos.',
    writerId: 'julian-vane',
    category: 'Tensión Psicológica',
    thesisStatement: 'La cortesía es el único pegamento que mantiene la paz entre quienes tienen el poder de destruirse.',
    description: 'En el salón de banquetes del palacio consular se reúnen ocho diplomáticos y tres ministros para firmar un tratado que evitará una guerra económica. Cuando una camarera tropieza y quiebra una copa de licor aromático sobre la alfombra persa, un reactivo neuroquímico inodoro entra en los pulmones de todos los presentes. Durante exactamente 420 segundos, el lóbulo frontal pierde la capacidad biológica del engaño.',
    shortDescription: 'Un compuesto inodoro obliga a diez líderes a decir la verdad durante 420 segundos.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#09090B',
      accentColor: '#EF4444',
      styleVariant: 'typography-bold'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop',
        caption: 'La mesa diplomática con cristalería bajo candelabros apagados.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa leyendo para ver cómo colapsa la farsa diplomática.',
      remainingPages: 26,
      remainingMinutes: 27,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El brindis interrumpido',
          epigraph: {
            quote: 'Si todos los seres humanos dijeran la verdad durante diez minutos seguidos, el mundo ardería.',
            source: 'Julián Vane'
          },
          paragraphs: [
            'El embajador alzó su copa de cristal de Bohemia con una sonrisa adiestrada en tres décadas de embajadas y recepciones protocolares. Iba a pronunciar el elogio de rigor al primer ministro del país vecino.',
            'La copa cayó de la bandeja de plata de una ayudante de protocolo. Un chasquido limpio. Un líquido vaporoso y transparente se expandió sobre la alfombra de seda azul como una tenue neblina cálida.',
            'El embajador carraspeó para disculpar el incidente y abrir su discurso. Abrió la boca para decir: «Celebramos los lazos fraternales que unen a nuestras naciones». Pero de sus labios brotó con voz atronadora y clara: «No nos queda ni una sola reserva de grano en los almacenes del norte y si no firman esta capitulación nos moriremos de hambre antes de noviembre.»'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 34,
    readingTime: '35 min',
    featured: false,
    releaseDate: '2026-08-28',
    keywords: ['diplomacia', 'mentira', 'poder', 'cena', 'tensión'],
    nextRecommendedId: 'la-ultima-persona-despierta'
  },

  'el-hombre-que-recordaba-el-futuro': {
    id: 'el-hombre-que-recordaba-el-futuro',
    slug: 'el-hombre-que-recordaba-el-futuro',
    title: 'El Hombre que Recordaba el Futuro',
    subtitle: 'Recuerda el próximo jueves como tú recuerdas ayer. Su pesadilla es el presente.',
    premise: 'Samuel recuerda lo que cenará el próximo jueves y el funeral de su mejor amigo con la misma claridad con que recuerda su infancia. Su único problema es el presente.',
    writerId: 'mateo-henao',
    category: 'Filosofía Especulativa',
    thesisStatement: 'Saber lo que ocurrirá no te da poder; te arrebata la única libertad humana: la sorpresa.',
    description: 'Samuel no predice el porvenir mediante cartas ni visiones místicas: simplemente lo recuerda con el mismo mecanismo neurológico que nosotros usamos para rememorar las vacaciones del año pasado. Conoce el titular de los diarios de dentro de dos semanas y las frases de despedida de personas que todavía no ha conocido. Hasta que un martes por la mañana descubre que sus recuerdos futuros se interrumpen de golpe el viernes a las tres de la tarde.',
    shortDescription: 'Samuel recuerda el futuro como un hecho consumado. Hasta que sus recuerdos cesan.',
    coverArt: {
      bgColor: '#1E1B4B',
      textColor: '#EEF2FF',
      accentColor: '#6366F1',
      styleVariant: 'atmospheric-gradient'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
        caption: 'Perspectiva geométrica que se fuga hacia un horizonte suspendido.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa leyendo para descubrir qué ocurre el viernes a las tres.',
      remainingPages: 36,
      remainingMinutes: 39,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'La memoria hacia adelante',
          epigraph: {
            quote: 'El dolor no está en saber que alguien morirá; está en tener que fingir alegría cuando todavía te sonríe.',
            source: 'Mateo Henao'
          },
          paragraphs: [
            'Para Samuel el café con leche del desayuno de hoy sabía a despedida porque recordaba vívidamente la discusión conyugal del próximo sábado por la tarde en el aparcamiento del supermercado.',
            'Nunca pudo enamorarse con ingenuidad: en el primer beso ya recordaba el desgaste de las sábanas diez años después y la caja de cartón donde se repartirían los libros tras el divorcio.',
            'Pero aquella mañana de martes, mientras miraba el reloj despertador digital, intentó recordar qué corbata se pondría el próximo domingo para almorzar con su madre. Cerró los ojos buscando el archivo de su memoria futura. No había nada. Intentó con el sábado: silencio absoluto. Con el viernes a las 15:01: un vacío negro y espeso como brea.',
            'Su memoria del futuro terminaba en setenta y dos horas exactas.'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 46,
    readingTime: '49 min',
    featured: true,
    releaseDate: '2026-09-01',
    keywords: ['tiempo', 'futuro', 'destino', 'memoria', 'reloj'],
    nextRecommendedId: 'si-manana-no-existiera'
  },

  'despues-de-nosotros': {
    id: 'despues-de-nosotros',
    slug: 'despues-de-nosotros',
    title: 'Después de Nosotros',
    subtitle: 'En el silencio del último satélite caído, un transmisor manual recibe una voz familiar.',
    premise: 'Dos científicos son los únicos testigos del colapso de la última red de satélites. En el silencio absoluto del desierto, un transmisor manual comienza a recibir una voz humana.',
    writerId: 'clara-soler',
    category: 'Intriga & Distopía',
    thesisStatement: 'El fin del mundo no empieza con fuego, sino con la interrupción gradual de las respuestas.',
    description: 'En una estación de monitoreo geomagnético en el desierto de Atacama, Irene y Tomás registran la caída silenciosa del último satélite de comunicaciones que unía los continentes. El planeta queda mudo de un instante a otro. Mientras empaquetan las raciones para emprender el viaje de regreso a pie hacia la costa, un viejo transmisor de emergencia analógico de onda corta enciende su luz roja y emite un susurro con sus nombres completos.',
    shortDescription: 'Cae la última red satelital y un transmisor analógico pronuncia sus nombres.',
    coverArt: {
      bgColor: '#292524',
      textColor: '#FAF8F5',
      accentColor: '#D97706',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
        caption: 'La llanura desértica bajo un cielo sin luces artificiales.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa leyendo para saber quién habla al otro lado del transmisor.',
      remainingPages: 32,
      remainingMinutes: 35,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El último pulso en la antena',
          epigraph: {
            quote: 'No temíamos la soledad; temíamos descubrir que la soledad era lo único que quedaba.',
            source: 'Clara Soler'
          },
          paragraphs: [
            'El cielo del desierto a cuatro mil metros sobre el nivel del mar es de un azul tan denso que parece un domo de vidrio templado. A las 14:22, la pantalla de telemetría orbital trazó la última curva del satélite Eos-7 antes de desintegrarse en la atmósfera sobre el Pacífico sur.',
            'Se acabaron los correos, los mapas de navegación, las llamadas de socorro y las alertas meteorológicas globales. El mundo acababa de encogerse de golpe a lo que alcanzaran a ver con sus prismáticos.',
            'Tomás apagó los paneles solares y cerró la caja metálica de herramientas. En ese momento, desde la repisa de madera sobre el banco de pruebas, el transmisor de emergencia a baterías —un aparato soviético de 1974 que jamás había recibido una señal en doce años— emitió un pitido seco.',
            'Luego, una voz de mujer, nítida, sin estática ni reverberación, dijo: «Irene, Tomás. Sabemos que están cargando las mochilas. Por favor no salgan a la pista antes del anochecer.»'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 41,
    readingTime: '44 min',
    featured: false,
    releaseDate: '2026-09-05',
    keywords: ['desierto', 'satélites', 'aislamiento', 'radio', 'supervivencia'],
    nextRecommendedId: 'la-vida-de-otra-persona'
  },

  'la-vida-de-otra-persona': {
    id: 'la-vida-de-otra-persona',
    slug: 'la-vida-de-otra-persona',
    title: 'La Vida de Otra Persona',
    subtitle: 'Tomó la maleta y el abrigo equivocados en el tren. Al abrir el teléfono, le rogaban que no volviera.',
    premise: 'Una mañana, Lucas recibe por error la maleta, el abrigo y el teléfono de un desconocido. Cuando atiende la primera llamada, se da cuenta de que la voz le suplica que no regrese a casa.',
    writerId: 'clara-soler',
    category: 'Intriga & Ficción',
    thesisStatement: 'Nadie es completamente irreemplazable hasta que alguien más se pone su abrigo y nadie nota la diferencia.',
    description: 'En el vestuario de una estación de tren, el conserje le entrega a Lucas por confusión un sobretodo de paño azul marino idéntico al suyo. En el bolsillo interior hay una billetera con tarjetas a nombre de Roberto Ramos, una llave dorada de hotel y un teléfono que no deja de vibrar. Al descolgar, una mujer le dice entre lágrimas: «Roberto, encontraron el informe en la bodega. No vuelvas a casa o no saldrás vivo.»',
    shortDescription: 'Toma el abrigo de un desconocido y una llamada le suplica que no regrese a casa.',
    coverArt: {
      bgColor: '#18181B',
      textColor: '#F4F4F5',
      accentColor: '#A1A1AA',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
        caption: 'Un abrigo en el respaldo de una silla de café frente a la lluvia.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa leyendo para ver cómo Lucas se adentra en la vida ajena.',
      remainingPages: 30,
      remainingMinutes: 31,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El abrigo azul marino',
          epigraph: {
            quote: 'Basta ponerse la ropa de otro hombre para heredar todos sus enemigos.',
            source: 'Clara Soler'
          },
          paragraphs: [
            'El corte de las solapas era impecable: paño de lana pura, forro de raso gris grafito y un aroma tenue a jabón de cedro. Lucas no sospechó nada hasta que metió las manos en los bolsillos para buscar las llaves de su automóvil.',
            'No había llaves de coche. En su lugar palpó un fajo de billetes nuevos sujetos con una banda elástica negra y un teléfono celular de teclas físicas, sin pantalla táctil.',
            'El aparato vibró en la palma de su mano con un zumbido ronco. Lucas presionó el botón verde sin pensar. La voz al otro lado era la de una mujer temblorosa que apenas podía contener el llanto: «Roberto, quemaron el taller de tu hermano hace media hora. Tienen tu pasaporte. Si estás en la estación central, sube al primer tren que vaya hacia el sur y apaga este teléfono.»'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 38,
    readingTime: '40 min',
    featured: false,
    releaseDate: '2026-09-10',
    keywords: ['abrigo', 'identidad', 'huida', 'hotel', 'teléfono'],
    nextRecommendedId: 'despues-de-nosotros'
  },

  'antes-de-que-olvides-mi-nombre': {
    id: 'antes-de-que-olvides-mi-nombre',
    slug: 'antes-de-que-olvides-mi-nombre',
    title: 'Antes de que Olvides mi Nombre',
    subtitle: 'Le encargan escribir su propio obituario para un cliente misterioso.',
    premise: 'Una biógrafa especializada en reconstruir vidas anónimas recibe el encargo de escribir su propio obituario por parte de un cliente que nunca ha visto.',
    writerId: 'elena-rivas',
    category: 'Misterio Atmosférico',
    thesisStatement: 'Morimos dos veces: cuando se detiene el corazón y cuando la última persona que nos conoció pronuncia nuestro nombre por error.',
    description: 'Camila se gana la vida redactando homenajes póstumos y biografías privadas para familias adineradas que desean preservar la memoria de sus antepasados. Un día recibe un sobre lacrado con un anticipo generoso y una ficha detallada que describe con precisión quirúrgica su propia fecha de nacimiento, sus viajes, sus miedos secretos y un borrador con su propio obituario fechado el mes próximo.',
    shortDescription: 'Una biógrafa recibe el encargo oficial de redactar su propio obituario.',
    coverArt: {
      bgColor: '#FDF2F8',
      textColor: '#831843',
      accentColor: '#BE185D',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
        caption: 'Cuaderno abierto y pluma estilográfica sobre mesa de roble.'
      }
    ],
    previewContent: {
      excerptHeader: 'Muestra gratuita · 1 de 5 páginas',
      cliffhangerTitle: 'Esto apenas comienza.',
      cliffhangerCopy: 'Continúa leyendo para descubrir la identidad del cliente secreto.',
      remainingPages: 34,
      remainingMinutes: 37,
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'El sobre lacrado en rojo',
          epigraph: {
            quote: 'Escribir sobre los muertos es fácil; lo aterrador es escribir sobre quien todavía está aprendiendo a morir.',
            source: 'Elena Rivas'
          },
          paragraphs: [
            'El cartero le hizo firmar una planilla electrónica especial para envíos confidenciales de notaría. El sobre era grueso, de papel verjurado con fibras de algodón visibles y un sello de lacre bermellón sin monograma.',
            'Dentro no había una carta de presentación formal, sino un fajo de notas mecanografiadas con cinta de máquina de escribir desgastada. La primera hoja llevaba por título: «Obituario conmemorativo de Camila V. Salcedo (1984–2026)».',
            'Camila leyó de pie junto a la ventana. El texto enumeraba sus estudios en Salamanca, el gato que enterró en el jardín trasero a los nueve años, y una frase exacta que ella le había dicho en privado a su primer novio en una noche de lluvia en 2005. En el margen inferior derecho había una nota manuscrita en tinta azul: «Tienes veintiocho días para corregir los errores antes de la impresión definitiva.»'
          ]
        }
      ],
      sampleEndNote: 'Fin de la muestra gratuita. Continúa la historia completa en PDF y EPUB.'
    },
    price: 4900,
    currency: 'COP',
    priceDisplay: '$4.900',
    formats: ['PDF', 'EPUB'],
    pageCount: 43,
    readingTime: '46 min',
    featured: false,
    releaseDate: '2026-09-14',
    keywords: ['obituario', 'biografía', 'memoria', 'carta', 'secreto'],
    nextRecommendedId: 'la-casa-que-nos-recuerda'
  }
};

export const BOOKS_LIST = Object.values(BOOKS);
