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
  }
};

export const WRITERS_LIST = Object.values(WRITERS);
