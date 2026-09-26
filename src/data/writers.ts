import { Writer } from '../types';

export const WRITERS: Record<string, Writer> = {
  'julian-vane': {
    id: 'julian-vane',
    displayName: 'Julián Vane',
    archetype: 'El Observador Práctico',
    archetypeCode: 'A',
    shortBio: 'Firma editorial centrada en la psicología de las decisiones cotidianas, la tensión entre certeza y realidad, y los hábitos no examinados.',
    editorialPortrait: {
      silhouetteBg: 'from-amber-900/10 to-stone-200',
      symbol: '◎',
      textureStyle: 'grain-fine'
    },
    genres: ['Ensayo Breve', 'Psicología Cotidiana', 'Comportamiento Humano'],
    themes: ['La trampa de la certeza', 'Economía de la atención personal', 'Duda fértil', 'Percepción'],
    voiceDescription: 'Prosa limpia y reflexiva que examina por qué hacemos lo que hacemos cuando creemos estar decidiendo libremente.',
    writingPrinciples: {
      rhythm: 'Párrafos pausados, preguntas incisivas, cadencia que invita a detener la mirada.',
      vocabulary: 'Preciso, libre de tecnicismos academicistas y absolutamente alejado del vocabulario de autoayuda o coaching motivacional.',
      forbiddenPatterns: [
        'En el mundo acelerado de hoy...',
        'Sé tu mejor versión',
        'Los 5 secretos para...',
        'Es importante destacar que...',
        'Desde tiempos inmemoriales...'
      ]
    },
    books: ['la-trampa-de-la-certeza']
  },

  'marco-levin': {
    id: 'marco-levin',
    displayName: 'Marco S. Levin',
    archetype: 'El Estratega',
    archetypeCode: 'B',
    shortBio: 'Voz dedicada a la arquitectura de decisiones, el diseño de sistemas silenciosos y el trabajo intelectual sin sobreestimulación.',
    editorialPortrait: {
      silhouetteBg: 'from-slate-900/10 to-stone-300',
      symbol: '◬',
      textureStyle: 'grid-subtle'
    },
    genres: ['Estrategia', 'Modelos Mentales', 'Filosofía del Trabajo'],
    themes: ['Sistemas de bajo rozamiento', 'La ilusión de la actividad', 'Apalancamiento', 'Estructuras sobrias'],
    voiceDescription: 'Afilado y despojado de adornos corporativos. Analiza problemas complejos con la frialdad de un relojero y la lucidez de un estratega.',
    writingPrinciples: {
      rhythm: 'Directo, con conclusiones deductivas elegantes y analogías mecánicas tangibles.',
      vocabulary: 'Concreto, austero, riguroso. Ningún anglicismo innecesario ni jerga de consultoría.',
      forbiddenPatterns: [
        'Sinergia exponencial',
        'Mindset de crecimiento ilimitado',
        'Disrupción revolucionaria',
        'En este libro exploraremos...',
        'En conclusión...'
      ]
    },
    books: ['sistemas-silenciosos']
  },

  'elena-rivas': {
    id: 'elena-rivas',
    displayName: 'Elena Rivas',
    archetype: 'La Voz Íntima',
    archetypeCode: 'C',
    shortBio: 'Identidad literaria volcada a la ficción contemporánea de escala humana, las fricciones domésticas y los silencios que transforman vínculos.',
    editorialPortrait: {
      silhouetteBg: 'from-rose-900/10 to-stone-200',
      symbol: '◇',
      textureStyle: 'paper-pressed'
    },
    genres: ['Ficción Contemporánea', 'Narrativa Breve', 'Relaciones'],
    themes: ['La memoria de los espacios', 'Encuentros accidentales', 'El paso sutil de las estaciones', 'Conversaciones pendientes'],
    voiceDescription: 'Sensibilidad atmosférica deslumbrante. Capaz de sostener la tensión emocional en un gesto diminuto o una luz que se apaga.',
    writingPrinciples: {
      rhythm: 'Melódico, detallista, con silencios entre líneas y gran oído para los matices del lenguaje hablado.',
      vocabulary: 'Evocador pero despojado de barroquismo; exactitud en la descripción física y emocional.',
      forbiddenPatterns: [
        'Un torbellino de emociones',
        'El destino tenía otros planes',
        'Una sonrisa que iluminaba la habitación',
        'De repente todo cambió',
        'Como si el tiempo se hubiera detenido'
      ]
    },
    books: ['las-habitaciones-del-domingo']
  },

  'tomas-beretta': {
    id: 'tomas-beretta',
    displayName: 'Tomás Beretta',
    archetype: 'El Cronista Contemporáneo',
    archetypeCode: 'D',
    shortBio: 'Cronista de la cultura urbana y la vida en red. Examina con ironía sutil las micro-ansiedades producidas por la hiperconectividad.',
    editorialPortrait: {
      silhouetteBg: 'from-emerald-900/10 to-stone-200',
      symbol: '◈',
      textureStyle: 'offset-dot'
    },
    genres: ['Crónica Cultural', 'Sociedad Digital', 'Costumbres Modernas'],
    themes: ['La desaparición del aburrimiento', 'La validación algorítmica', 'Nostalgia sintética', 'Espacios públicos'],
    voiceDescription: 'Mirada punzante y compasiva. Escribe desde la calle y la cafetería, no desde una torre académica ni un púlpito moral.',
    writingPrinciples: {
      rhythm: 'Ágil, con cambios de registro repentinos, ironía elegante y escenas urbanas vívidas.',
      vocabulary: 'Contemporáneo, perspicaz, con metáforas visuales de la vida cotidiana moderna.',
      forbiddenPatterns: [
        'Las redes sociales nos están destruyendo',
        'Los jóvenes de hoy en día...',
        'Es menester reflexionar sobre...',
        'Vivimos en una sociedad donde...',
        'Paradigmático'
      ]
    },
    books: ['la-atencion-secuestrada']
  },

  'nora-dahl': {
    id: 'nora-dahl',
    displayName: 'Nora K. Dahl',
    archetype: 'El Explorador',
    archetypeCode: 'E',
    shortBio: 'Exploradora de las fronteras científicas y las leyes sutiles de la materia. Traduce la complejidad natural en prosa luminosa.',
    editorialPortrait: {
      silhouetteBg: 'from-blue-900/10 to-stone-200',
      symbol: '✦',
      textureStyle: 'cosmic-mesh'
    },
    genres: ['Ciencia & Naturaleza', 'Divulgación Elegante', 'Fronteras del Conocimiento'],
    themes: ['Morfogénesis y geometría viva', 'Escalas del tiempo profundo', 'El orden oculto del caos', 'Luz y materia'],
    voiceDescription: 'Voz asombrada y rigurosa que devuelve al lector la capacidad de maravillarse ante las leyes matemáticas del universo cotidiano.',
    writingPrinciples: {
      rhythm: 'Flujo lírico sostenido por datos comprobados; progresión desde lo microscópico hacia lo inmenso.',
      vocabulary: 'Científicamente fidedigno, cristalino, plástico y sugerente.',
      forbiddenPatterns: [
        'Los científicos están desconcertados',
        'La máquina perfecta de la naturaleza',
        'El universo conspiró para...',
        'La última frontera de la ciencia',
        'Revolución cuántica para el alma'
      ]
    },
    books: ['la-geometria-del-asombro']
  },

  'morgan-housel': {
    id: 'morgan-housel',
    displayName: 'Morgan Housel',
    archetype: 'El Observador Práctico',
    archetypeCode: 'A',
    shortBio: 'Socio de Collaborative Fund y excolumnista de The Wall Street Journal. Especialista en la intersección entre psicología del comportamiento y finanzas personales.',
    editorialPortrait: {
      silhouetteBg: 'from-emerald-900/10 to-stone-200',
      symbol: '◎',
      textureStyle: 'grain-fine'
    },
    genres: ['Finanzas Conductuales', 'Psicología', 'Mentalidad'],
    themes: ['Psicología del dinero', 'Comportamiento frente a la incertidumbre', 'Riqueza y felicidad'],
    voiceDescription: 'Prosa límpida y reflexiva orientada a la sensatez cotidiana.',
    writingPrinciples: {
      rhythm: 'Directo y reflexivo.',
      vocabulary: 'Cotidiano y riguroso.',
      forbiddenPatterns: ['Hágase rico rápidamente']
    },
    books: ['psychology-of-money']
  },

  'daniel-kahneman': {
    id: 'daniel-kahneman',
    displayName: 'Daniel Kahneman',
    archetype: 'El Estratega',
    archetypeCode: 'B',
    shortBio: 'Premio Nobel de Economía y profesor emérito de psicología en Princeton. Pionero en el estudio de las heurísticas, la toma de decisiones y los sesgos cognitivos.',
    editorialPortrait: {
      silhouetteBg: 'from-amber-900/10 to-stone-200',
      symbol: '◬',
      textureStyle: 'grid-subtle'
    },
    genres: ['Psicología Cognitiva', 'Economía Conductual', 'Toma de Decisiones'],
    themes: ['Sistema 1 y Sistema 2', 'Heurística y sesgos', 'Teoría de las perspectivas'],
    voiceDescription: 'Rigor científico y lucidez analítica sin concesiones.',
    writingPrinciples: {
      rhythm: 'Estructurado y concluyente.',
      vocabulary: 'Científico y accesible.',
      forbiddenPatterns: ['Intuición infalible']
    },
    books: ['thinking-fast-and-slow']
  },

  'adam-grant': {
    id: 'adam-grant',
    displayName: 'Adam Grant',
    archetype: 'El Observador Práctico',
    archetypeCode: 'A',
    shortBio: 'Psicólogo organizacional y profesor titular en Wharton. Autor superventas sobre dinámicas de trabajo, generosidad y flexibilidad mental.',
    editorialPortrait: {
      silhouetteBg: 'from-blue-900/10 to-stone-200',
      symbol: '◎',
      textureStyle: 'grain-fine'
    },
    genres: ['Psicología Organizacional', 'Aprendizaje', 'Innovación'],
    themes: ['Repensar y desaprender', 'Cultura de aprendizaje', 'Humildad intelectual'],
    voiceDescription: 'Entusiasta, bien documentado y orientado a la acción práctica.',
    writingPrinciples: {
      rhythm: 'Dinámico y convincente.',
      vocabulary: 'Claro y empático.',
      forbiddenPatterns: ['Dogmas inmutables']
    },
    books: ['think-again']
  },

  'malcolm-gladwell': {
    id: 'malcolm-gladwell',
    displayName: 'Malcolm Gladwell',
    archetype: 'El Cronista Contemporáneo',
    archetypeCode: 'D',
    shortBio: 'Periodista de The New Yorker y ensayista. Reconocido por sus investigaciones sobre sociología, psicología social y fenómenos culturales imprevistos.',
    editorialPortrait: {
      silhouetteBg: 'from-purple-900/10 to-stone-200',
      symbol: '◈',
      textureStyle: 'offset-dot'
    },
    genres: ['Sociología Cultural', 'Psicología Social', 'Crónica'],
    themes: ['Comunicación con extraños', 'Percepción y prejuicios', 'Dinámicas sociales'],
    voiceDescription: 'Narrativa envolvente con conexiones interdisciplinarias deslumbrantes.',
    writingPrinciples: {
      rhythm: 'Cadencia cinematográfica y preguntas provocadoras.',
      vocabulary: 'Literario y accesible.',
      forbiddenPatterns: ['Lugares comunes']
    },
    books: ['talking-to-strangers']
  },

  'carol-dweck': {
    id: 'carol-dweck',
    displayName: 'Carol S. Dweck',
    archetype: 'El Observador Práctico',
    archetypeCode: 'A',
    shortBio: 'Catedrática de Psicología en la Universidad de Stanford. Investigadora seminal en la teoría de la mentalidad de crecimiento frente a la mentalidad fija.',
    editorialPortrait: {
      silhouetteBg: 'from-emerald-900/10 to-stone-200',
      symbol: '◎',
      textureStyle: 'grain-fine'
    },
    genres: ['Desarrollo Personal', 'Psicología Educativa', 'Potencial Humano'],
    themes: ['Mentalidad de crecimiento', 'Resiliencia ante el fracaso', 'Evolución de talentos'],
    voiceDescription: 'Cálida, motivada por la evidencia empírica y transformadora.',
    writingPrinciples: {
      rhythm: 'Didáctico y formativo.',
      vocabulary: 'Esperanzador y riguroso.',
      forbiddenPatterns: ['Talento innato estático']
    },
    books: ['mindset']
  },

  'bill-burnett': {
    id: 'bill-burnett',
    displayName: 'Bill Burnett & Dave Evans',
    archetype: 'El Estratega',
    archetypeCode: 'B',
    shortBio: 'Directores del Life Design Lab de la Universidad de Stanford. Aplicadores del pensamiento de diseño al desarrollo vital y profesional.',
    editorialPortrait: {
      silhouetteBg: 'from-stone-900/10 to-stone-300',
      symbol: '◬',
      textureStyle: 'grid-subtle'
    },
    genres: ['Design Thinking', 'Carrera Profesional', 'Estrategia de Vida'],
    themes: ['Prototipado de carrera', 'Diseño de futuros', 'Acción reflexiva'],
    voiceDescription: 'Prototipado ágil y mentalidad experimental para la vida moderna.',
    writingPrinciples: {
      rhythm: 'Metódico e interactivo.',
      vocabulary: 'Diseño centrado en el ser humano.',
      forbiddenPatterns: ['Un único plan perfecto']
    },
    books: ['designing-your-life']
  },

  'paul-jarvis': {
    id: 'paul-jarvis',
    displayName: 'Paul Jarvis',
    archetype: 'El Observador Práctico',
    archetypeCode: 'A',
    shortBio: 'Diseñador, escritor y emprendedor independiente. Defensor pionero de los negocios de una sola persona orientados a la autonomía y la suficiencia.',
    editorialPortrait: {
      silhouetteBg: 'from-stone-900/10 to-stone-200',
      symbol: '◎',
      textureStyle: 'grain-fine'
    },
    genres: ['Emprendimiento', 'Minimalismo de Negocio', 'Filosofía Laboral'],
    themes: ['Empresa de uno', 'Límites saludables al crecimiento', 'Sostenibilidad personal'],
    voiceDescription: 'Calma, sobriedad y cuestionamiento radical del crecimiento por el crecimiento.',
    writingPrinciples: {
      rhythm: 'Tranquilo y desmitificador.',
      vocabulary: 'Austero y honesto.',
      forbiddenPatterns: ['Escalar a toda costa']
    },
    books: ['company-of-one']
  },

  'derek-sivers': {
    id: 'derek-sivers',
    displayName: 'Derek Sivers',
    archetype: 'El Observador Práctico',
    archetypeCode: 'A',
    shortBio: 'Músico, programador y fundador de CD Baby. Pensador pragmático y minimalista sobre el arte de emprender en tus propios términos.',
    editorialPortrait: {
      silhouetteBg: 'from-blue-900/10 to-stone-200',
      symbol: '◎',
      textureStyle: 'grain-fine'
    },
    genres: ['Filosofía Práctica', 'Emprendimiento Independiente', 'Creatividad'],
    themes: ['Filosofía de vida', 'Decisiones contraintuitivas', 'Simplicidad'],
    voiceDescription: 'Aforístico, ultraconciso y profundamente liberador.',
    writingPrinciples: {
      rhythm: 'Párrafos cortantes y sabiduría destilada.',
      vocabulary: 'Directo al grano.',
      forbiddenPatterns: ['Planes de negocios de 50 páginas']
    },
    books: ['anything-you-want']
  },

  'tom-kelley': {
    id: 'tom-kelley',
    displayName: 'Tom Kelley & David Kelley',
    archetype: 'El Explorador',
    archetypeCode: 'E',
    shortBio: 'Socios fundadores de IDEO y creadores de la Stanford d.school. Pioneros mundiales de la metodología de innovación centrada en las personas.',
    editorialPortrait: {
      silhouetteBg: 'from-orange-900/10 to-stone-200',
      symbol: '✦',
      textureStyle: 'cosmic-mesh'
    },
    genres: ['Innovación', 'Creatividad', 'Design Thinking'],
    themes: ['Confianza creativa', 'Superar el miedo al juicio', 'Experimentación rápida'],
    voiceDescription: 'Inspirador, empático y fundamentado en casos reales de innovación.',
    writingPrinciples: {
      rhythm: 'Vibrante y colaborativo.',
      vocabulary: 'Creativo y cercano.',
      forbiddenPatterns: ['Yo no soy una persona creativa']
    },
    books: ['creative-confidence']
  }
};

export const WRITERS_LIST = Object.values(WRITERS);
