export interface PreviewChapter {
  chapterNumber: number;
  chapterTitle: string;
  epigraph?: {
    quote: string;
    source: string;
  };
  paragraphs: string[];
}

export interface Book {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  writerId: string;
  category: string;
  description: string;
  shortDescription: string;
  premise?: string;
  coverArt: {
    bgColor: string;
    textColor: string;
    accentColor: string;
    styleVariant: 'minimal-grid' | 'geometric-circle' | 'atmospheric-gradient' | 'typography-bold' | 'arch-architectural';
    graphicElement?: string;
  };
  editorialImages: {
    url: string;
    caption: string;
  }[];
  previewContent: {
    excerptHeader: string;
    chapters: PreviewChapter[];
    sampleEndNote: string;
    cliffhangerTitle?: string;
    cliffhangerCopy?: string;
    remainingPages?: number;
    remainingMinutes?: number;
  };
  price: number;
  currency: string;
  priceDisplay?: string;
  formats: ('PDF' | 'EPUB')[];
  pageCount: number;
  readingTime: string; // e.g. "47 min"
  featured: boolean;
  releaseDate: string;
  keywords: string[];
  thesisStatement: string;
  nextRecommendedId?: string;
}

export interface Writer {
  id: string;
  displayName: string;
  gender?: 'femenina' | 'masculino';
  voiceTone?: string;
  territory?: string;
  archetype?: string;
  archetypeCode?: string;
  phrase?: string;
  specialty?: string;
  shortBio: string;
  editorialPortrait: {
    silhouetteBg: string;
    symbol: string;
    textureStyle: string;
  };
  genres: string[];
  themes: string[];
  voiceDescription: string;
  writingPrinciples: {
    rhythm: string;
    vocabulary: string;
    forbiddenPatterns: string[];
  };
  books: string[]; // Book IDs
}

export type ReaderTheme = 'paper' | 'sepia' | 'dark';
export type ReaderFontSize = 'sm' | 'base' | 'lg' | 'xl';

export interface CheckoutState {
  isOpen: boolean;
  book: Book | null;
  step: 'summary' | 'processing' | 'success';
  paymentMethod: 'apple-pay' | 'card';
  userEmail: string;
}
