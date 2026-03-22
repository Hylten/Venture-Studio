import { intelligenceMetadata, type ArticleMetadata } from './metadata';
import { intelligenceContent } from './content';

export interface Article extends ArticleMetadata {
  content: string;
}

export const intelligenceArticles: Article[] = intelligenceMetadata.map(meta => ({
  ...meta,
  content: intelligenceContent[meta.slug] || "Analys under bearbetning. Azure GPT 5.1 genererar för närvarande fördjupat innehåll för denna artikel för att säkerställa 100% institutionell kvalitet."
}));
