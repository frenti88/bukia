import { Book } from '../types';

export const REPLICA_BOOKS: Book[] = [
  {
    id: 'psychology-of-money',
    slug: 'psychology-of-money',
    title: 'The Psychology of Money',
    subtitle: 'Timeless lessons on wealth, greed, and happiness.',
    writerId: 'morgan-housel',
    category: 'Finance & Mindset',
    thesisStatement: 'Doing well with money has a little to do with how smart you are and a lot to do with how you behave.',
    description: 'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. Morgan Housel shares 19 short stories exploring the strange ways people think about money.',
    shortDescription: 'Timeless lessons on wealth, greed, and happiness.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#111827',
      accentColor: '#059669',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [
      {
        url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
        caption: 'The psychology of decision making under risk.'
      }
    ],
    previewContent: {
      excerptHeader: 'Chapter 1 — No One’s Crazy',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'No One’s Crazy',
          epigraph: {
            quote: 'Your personal experiences with money make up maybe 0.00000001% of what’s happened in the world, but maybe 80% of how you think the world works.',
            source: 'Morgan Housel'
          },
          paragraphs: [
            'People from different generations, raised by different parents who earned different incomes and held different values in different parts of the world, learn vastly different lessons.',
            'Everyone has their own unique experience with how the world works. And what you’ve experienced is more compelling than what you’ve learned second-hand. So all of us go through life with an anchor to the financial era we grew up in.',
            'When someone makes a financial decision that seems irrational to you, it’s rarely because they are crazy. It’s because they have experienced things you haven’t, and are operating with a mental model constructed during a different time.'
          ]
        }
      ],
      sampleEndNote: 'End of sample. Get the full condensed digital edition in PDF and EPUB for US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 48,
    readingTime: '26 min',
    featured: true,
    releaseDate: '2026-06-12',
    keywords: ['money', 'wealth', 'habits', 'psychology']
  },

  {
    id: 'thinking-fast-and-slow',
    slug: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    subtitle: 'The two systems that drive the way we think and decide.',
    writerId: 'daniel-kahneman',
    category: 'Psychology & Decisions',
    thesisStatement: 'We place too much confidence in what we believe we know, and our apparent inability to acknowledge our ignorance.',
    description: 'In the international bestseller, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think: System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.',
    shortDescription: 'The two systems that drive the way we think and make choices.',
    coverArt: {
      bgColor: '#FAF7F2',
      textColor: '#1F2937',
      accentColor: '#D97706',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Chapter 1 — Two Systems',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Two Systems',
          epigraph: {
            quote: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.',
            source: 'Daniel Kahneman'
          },
          paragraphs: [
            'System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control.',
            'System 2 allocates attention to the effortful mental operations that demand it, including complex computations. The operations of System 2 are often associated with the subjective experience of agency, choice, and concentration.',
            'When we think of ourselves, we identify with System 2, the conscious, reasoning self that has beliefs, makes choices, and decides what to think about and what to do.'
          ]
        }
      ],
      sampleEndNote: 'End of sample. Complete reading available for US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 50,
    readingTime: '28 min',
    featured: false,
    releaseDate: '2026-06-15',
    keywords: ['heuristics', 'biases', 'rationality', 'behavior']
  },

  {
    id: 'think-again',
    slug: 'think-again',
    title: 'Think Again',
    subtitle: 'The power of knowing what you don’t know.',
    writerId: 'adam-grant',
    category: 'Learning & Mindset',
    thesisStatement: 'Intelligence is traditionally viewed as the ability to think and learn. In a turbulent world, there’s another set of cognitive skills that might matter more: the ability to rethink and unlearn.',
    description: 'Organizational psychologist Adam Grant explores how we can embrace the joy of being wrong, bring nuance to charged conversations, and build schools, workplaces, and communities of lifelong learners.',
    shortDescription: 'How embracing mental flexibility leads to excellence.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#0F172A',
      accentColor: '#2563EB',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Chapter 1 — A Preacher, a Prosecutor, and a Politician',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'A Preacher, a Prosecutor, and a Politician',
          epigraph: {
            quote: 'If knowledge is power, knowing what we don’t know is wisdom.',
            source: 'Adam Grant'
          },
          paragraphs: [
            'We don’t just hesitate to rethink our answers; we actively resist the very idea of rethinking. As we think and talk, we often slip into the mindsets of three different professions: preachers, prosecutors, and politicians.',
            'In each of these modes, we take on a particular identity and use a distinct set of tools. We go into preacher mode when our sacred beliefs are in jeopardy: we deliver sermons to protect and promote our ideals.',
            'We enter prosecutor mode when we recognize flaws in other people’s reasoning: we marshal arguments to prove them wrong and win our case. And we shift into politician mode when we’re seeking to win over an audience: we campaign and lobby for the approval of our constituents.'
          ]
        }
      ],
      sampleEndNote: 'Download the full book in PDF and EPUB for US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 46,
    readingTime: '25 min',
    featured: false,
    releaseDate: '2026-06-18',
    keywords: ['rethinking', 'flexibility', 'curiosity', 'humility']
  },

  {
    id: 'talking-to-strangers',
    slug: 'talking-to-strangers',
    title: 'Talking to Strangers',
    subtitle: 'What we should know about the people we don’t know.',
    writerId: 'malcolm-gladwell',
    category: 'Communication & Society',
    thesisStatement: 'Because we do not know how to talk to strangers, we are inviting conflict and misunderstanding in ways that have a profound effect on our lives and our world.',
    description: 'Malcolm Gladwell offers a powerful examination of our interactions with strangers and why they often go wrong. Through historical and cultural cases, Gladwell shows how the strategies we use to translate unfamiliar encounters are fundamentally flawed.',
    shortDescription: 'Why misjudging strangers creates societal fissures.',
    coverArt: {
      bgColor: '#FAF8F5',
      textColor: '#111827',
      accentColor: '#10B981',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Chapter 1 — The Default to Truth',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'The Default to Truth',
          epigraph: {
            quote: 'You believe someone not because you have no doubts about them. You believe someone because you don’t have enough doubts.',
            source: 'Malcolm Gladwell'
          },
          paragraphs: [
            'The first operating principle in talking to strangers is what psychologist Tim Levine calls the Default to Truth. Our operating assumption is that the people we are dealing with are honest.',
            'We do not behave like scientists, slowly gathering evidence for truthfulness before reaching a conclusion. We do the opposite: we start by believing, and stop believing only when our doubts become insurmountable.',
            'This default is not an evolutionary flaw; it is an extraordinary social advantage. Without it, organized human societies could not function.'
          ]
        }
      ],
      sampleEndNote: 'Complete edition available for instant reading for US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 47,
    readingTime: '26 min',
    featured: false,
    releaseDate: '2026-06-20',
    keywords: ['communication', 'human nature', 'society', 'judgment']
  },

  {
    id: 'mindset',
    slug: 'mindset',
    title: 'Mindset',
    subtitle: 'The new psychology of success.',
    writerId: 'carol-dweck',
    category: 'Growth & Psychology',
    thesisStatement: 'The view you adopt for yourself profoundly affects the way you lead your life.',
    description: 'World-renowned Stanford psychologist Carol S. Dweck, in decades of research on achievement and success, discovered a truly groundbreaking idea: the power of our mindset. People with a fixed mindset are far less likely to flourish than those with a growth mindset.',
    shortDescription: 'How the growth mindset unlocks human potential.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#1E3A8A',
      accentColor: '#3B82F6',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Chapter 1 — The Mindsets',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'The Mindsets',
          epigraph: {
            quote: 'Why waste time proving over and over how great you are, when you could be getting better?',
            source: 'Carol S. Dweck'
          },
          paragraphs: [
            'For thirty years, my research has shown that the view you adopt for yourself profoundly affects the way you lead your life. It can determine whether you become the person you want to be and whether you accomplish the things you value.',
            'Believing that your qualities are carved in stone—the fixed mindset—creates an urgency to prove yourself over and over. If you have only a certain amount of intelligence, a certain personality, and a certain moral character—well, then you’d better prove that you have a healthy dose of them.',
            'There’s another mindset in which these traits are not simply a hand you’re dealt and have to live with. In this mindset, the hand you’re dealt is just the starting point for development.'
          ]
        }
      ],
      sampleEndNote: 'Full digital book in PDF and EPUB for US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 44,
    readingTime: '23 min',
    featured: false,
    releaseDate: '2026-06-22',
    keywords: ['mindset', 'growth', 'resilience', 'learning']
  },

  {
    id: 'designing-your-life',
    slug: 'designing-your-life',
    title: 'Designing Your Life',
    subtitle: 'How to build a well-lived, joyful life.',
    writerId: 'burnett-evans',
    category: 'Life Strategy',
    thesisStatement: 'Designers imagine things that don’t yet exist, and then they build them, and then the world changes. You can do the same for your life.',
    description: 'Designers create worlds and solve problems using design thinking. Look around your office or home—at the tablet or smartphone you may be holding or the chair you are sitting in. Everything in our lives was designed by someone. And every design starts with a problem that a designer or team of designers seeks to solve.',
    shortDescription: 'Applying design thinking to your career and daily life.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#111827',
      accentColor: '#EC4899',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Chapter 1 — Start Where You Are',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Start Where You Are',
          epigraph: {
            quote: 'You can’t know where you’re going until you know where you are.',
            source: 'Bill Burnett & Dave Evans'
          },
          paragraphs: [
            'Design doesn’t solve problems by trying to think your way into a new life; design solves problems by building your way forward.',
            'Before you can design your path, you have to know where you are right now. We look at four gauges: Health, Work, Play, and Love.',
            'When you take an honest inventory of these areas without judgment, the real problem spaces reveal themselves naturally.'
          ]
        }
      ],
      sampleEndNote: 'Complete life design framework for US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 45,
    readingTime: '24 min',
    featured: false,
    releaseDate: '2026-06-24',
    keywords: ['design thinking', 'career', 'purpose', 'habits']
  },

  {
    id: 'company-of-one',
    slug: 'company-of-one',
    title: 'Company of One',
    subtitle: 'Why staying small is the next big thing for business.',
    writerId: 'paul-jarvis',
    category: 'Business & Autonomy',
    thesisStatement: 'What if the real key to a richer and more fulfilling career was not to create and scale a massive company, but to stay small?',
    description: 'Company of One is an all-new business strategy that focuses on staying small and questioning growth. By staying small, one can have more freedom, pursue meaningful projects, and build a resilient livelihood without the burden of constant scale.',
    shortDescription: 'Questioning endless corporate scale in favor of autonomy.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#111827',
      accentColor: '#1F2937',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Chapter 1 — What Is a Company of One?',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'What Is a Company of One?',
          epigraph: {
            quote: 'Growth is not always the best metric of success.',
            source: 'Paul Jarvis'
          },
          paragraphs: [
            'A company of one is simply a business that questions growth.',
            'It resists mindless expansion because growth often introduces more meetings, more overhead, more complexity, and less actual enjoyment of the craft you set out to do in the first place.',
            'Success becomes about defining "enough" rather than chasing an arbitrary number defined by others.'
          ]
        }
      ],
      sampleEndNote: 'Instant digital delivery in PDF and EPUB for US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 42,
    readingTime: '22 min',
    featured: false,
    releaseDate: '2026-06-25',
    keywords: ['entrepreneurship', 'autonomy', 'simplicity', 'business']
  },

  {
    id: 'anything-you-want',
    slug: 'anything-you-want',
    title: 'Anything You Want',
    subtitle: '40 lessons for a new kind of entrepreneur.',
    writerId: 'derek-sivers',
    category: 'Entrepreneurship',
    thesisStatement: 'Business is not about money. It’s about making dreams come true for others and for yourself.',
    description: 'Derek Sivers shares concise, punchy philosophies from building and selling CD Baby. A manifesto on radical simplicity, customer delight, and running a business strictly on your own terms.',
    shortDescription: '40 unconventional lessons for creating value without stress.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#DC2626',
      accentColor: '#F59E0B',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Chapter 1 — Just Make It For Yourself',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Just Make It For Yourself',
          epigraph: {
            quote: 'If you’re not saying "HELL YEAH!", say no.',
            source: 'Derek Sivers'
          },
          paragraphs: [
            'You don’t need a business plan, venture capital, or ten employees to start. You just need to solve a real problem you personally have.',
            'When I started CD Baby, it was just a hobby to sell my own friends’ CDs on the web in 1997 when nobody else would do it.',
            'Never forget why you’re really doing what you’re doing. Are you doing it to impress people, or are you doing it because it brings joy and helps someone?'
          ]
        }
      ],
      sampleEndNote: 'Read the complete work for US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 40,
    readingTime: '20 min',
    featured: false,
    releaseDate: '2026-06-26',
    keywords: ['startups', 'creativity', 'minimalism', 'freedom']
  },

  {
    id: 'creative-confidence',
    slug: 'creative-confidence',
    title: 'Creative Confidence',
    subtitle: 'Unleashing the creative potential within us all.',
    writerId: 'kelley-brothers',
    category: 'Creativity & Innovation',
    thesisStatement: 'Creativity is not the domain of only a chosen few; it is a muscle that can be cultivated and strengthened by anyone.',
    description: 'IDEO founder David Kelley and his brother Tom Kelley draw on their work with the world’s top innovators to demonstrate how creative thinking transforms organizations and careers.',
    shortDescription: 'Unlocking innovative problem-solving in everyday life.',
    coverArt: {
      bgColor: '#FFFFFF',
      textColor: '#064E3B',
      accentColor: '#10B981',
      styleVariant: 'minimal-grid'
    },
    editorialImages: [],
    previewContent: {
      excerptHeader: 'Chapter 1 — Flip the Switch',
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: 'Flip the Switch',
          epigraph: {
            quote: 'Belief in your creative capacity lies at the heart of innovation.',
            source: 'David & Tom Kelley'
          },
          paragraphs: [
            'Too many people believe they were born without a "creative gene." That belief is not only wrong; it is deeply limiting.',
            'When you overcome the fear of judgment, you start to view failures not as personal verdicts, but as essential iterations toward an extraordinary outcome.'
          ]
        }
      ],
      sampleEndNote: 'Pre-order now or get the sample edition for US$1.'
    },
    price: 1.00,
    currency: 'USD',
    formats: ['PDF', 'EPUB'],
    pageCount: 46,
    readingTime: '25 min',
    featured: false,
    releaseDate: '2026-07-01',
    keywords: ['creativity', 'innovation', 'ideo', 'confidence']
  }
];

export const ALL_REPLICA_BOOKS = REPLICA_BOOKS;
