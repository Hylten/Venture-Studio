import type { Language } from '../../i18n/LanguageContext';

export interface Article {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  description: string;
  content: string;
}

// Decap CMS-källa: content/intelligence/*.md (sv) + content/intelligence_en/*.md (en)
const glob = (import.meta as any).glob;
const svFiles = glob('../../../content/intelligence/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const enFiles = glob('../../../content/intelligence_en/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function parse(raw: string): Article {
  const lines = raw.split('\n');
  const fm: Record<string, string> = {};
  let bodyStart = 0;
  if (lines[0]?.trim() === '---') {
    let i = 1;
    for (; i < lines.length; i++) {
      if (lines[i].trim() === '---') break;
      const m = lines[i].match(/^([a-z_]+):\s*(.*)$/);
      if (m) fm[m[1]] = m[2];
    }
    bodyStart = i + 1;
  }
  const str = (k: string) => String(fm[k] || '').replace(/^"|"$/g, '');
  return {
    slug: str('slug'),
    title: str('title'),
    date: str('date'),
    author: str('author'),
    category: str('categories').replace(/^\[|\]$/g, '').replace(/"/g, ''),
    description: str('description'),
    content: lines.slice(bodyStart).join('\n').trim(),
  };
}

const svArticles = Object.values(svFiles).map(parse).filter(a => a.content.length > 100);
const enArticles = Object.values(enFiles).map(parse).filter(a => a.content.length > 100);

export function getIntelligenceArticles(lang: Language): Article[] {
  return lang === 'en' ? enArticles : svArticles;
}

export const intelligenceArticles = getIntelligenceArticles('en');

export const publishedCount = intelligenceArticles.length;
