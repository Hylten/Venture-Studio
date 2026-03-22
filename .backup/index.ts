import { intelligenceMetadata, type ArticleMetadata } from './metadata';
import { intelligenceContent } from './content';

export interface Article extends ArticleMetadata {
  content: string;
}

export const intelligenceArticles: Article[] = intelligenceMetadata
  .map(meta => ({
    ...meta,
    content: intelligenceContent[meta.slug] || ""
  }))
  .filter(article => article.content.length > 100);

export const publishedCount = intelligenceArticles.length;
