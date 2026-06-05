import { intelligenceMetadata, type ArticleMetadata } from './metadata';
import { intelligenceMetadataEn } from './metadata_en';
import { intelligenceContent } from './content';
import { intelligenceContentEn } from './content_en';
import type { Language } from '../../i18n/LanguageContext';

export interface Article extends ArticleMetadata {
  content: string;
}

export function getIntelligenceArticles(lang: Language): Article[] {
  const meta = lang === "en" ? intelligenceMetadataEn : intelligenceMetadata;
  const content = lang === "en" ? intelligenceContentEn : intelligenceContent;
  return meta
    .map(a => ({
      ...a,
      content: content[a.slug] || ""
    }))
    .filter(a => a.content.length > 100);
}

export const intelligenceArticles = getIntelligenceArticles("en");

export const publishedCount = intelligenceArticles.length;
