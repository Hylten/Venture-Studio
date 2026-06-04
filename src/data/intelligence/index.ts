import { intelligenceMetadata, type ArticleMetadata } from './metadata';
import { intelligenceContent } from './content';
import { intelligenceMetadataEn } from './metadata_en';
import { intelligenceContentEn } from './content_en';

export interface Article extends ArticleMetadata {
  content: string;
}

// Svenska (Standard)
export const intelligenceArticles: Article[] = intelligenceMetadata
  .map(meta => ({
    ...meta,
    content: intelligenceContent[meta.slug] || ""
  }))
  .filter(article => article.content.length > 100);

// English (Fallback to Swedish if not translated yet)
export const intelligenceArticlesEn: Article[] = intelligenceMetadata
  .map(meta => {
    const enMeta = intelligenceMetadataEn.find(m => m.slug === meta.slug);
    return {
      ...(enMeta || meta),
      content: intelligenceContentEn[meta.slug] || intelligenceContent[meta.slug] || ""
    };
  })
  .filter(article => article.content.length > 100);

export const publishedCount = intelligenceArticles.length;
