import { intelligenceMetadata, type ArticleMetadata } from '../src/data/intelligence/metadata';
import { intelligenceContent } from '../src/data/intelligence/content';
import Groq from 'groq-sdk';
import * as fs from 'fs';
import * as path from 'path';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '' });
const MODEL = 'llama-3.3-70b-versatile';

const outDir = path.join(process.cwd(), 'src/data/intelligence');
const metadataOut = path.join(outDir, 'metadata_en.ts');
const contentOut = path.join(outDir, 'content_en.ts');

const translatedMetadata: ArticleMetadata[] = [];
const translatedContent: Record<string, string> = {};

// Sleep to avoid rate limits
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function translateText(text: string, isContent: boolean): Promise<string> {
  if (!text || text.trim() === '') return text;
  
  const systemPrompt = isContent 
    ? "You are an expert financial and SaaS translator. Translate the following Swedish article content into perfect, professional English. Maintain all Markdown formatting exactly (e.g. ###, ##, -, lists). Do not add any conversational filler. Only return the translated text."
    : "Translate the following Swedish text into perfect, professional English. Do not add any conversational filler. Only return the translated text.";

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `TEXT TO TRANSLATE:\n${text}` }
      ],
      model: MODEL,
      temperature: 0.1,
    });
    
    return chatCompletion.choices[0]?.message?.content?.trim() || text;
  } catch (error) {
    console.error("Translation error:", error);
    // Fallback to original on error
    return text;
  }
}

async function run() {
  console.log(`🚀 Starting translation of ${intelligenceMetadata.length} articles to English using Groq Llama 3.3...`);
  
  for (let i = 0; i < intelligenceMetadata.length; i++) {
    const meta = intelligenceMetadata[i];
    const content = intelligenceContent[meta.slug] || "";
    
    console.log(`[${i+1}/${intelligenceMetadata.length}] Translating: ${meta.slug}...`);
    
    try {
      const translatedTitle = await translateText(meta.title, false);
      const translatedDesc = await translateText(meta.description, false);
      const translatedBody = await translateText(content, true);
      
      translatedMetadata.push({
        ...meta,
        title: translatedTitle,
        description: translatedDesc
      });
      
      translatedContent[meta.slug] = translatedBody;
      
      // Save partial progress in case it crashes
      saveFiles();
      
      // Groq is fast but let's sleep a bit to avoid hitting rate limits
      await sleep(1000);
      
    } catch (e) {
      console.error(`Error on ${meta.slug}:`, e);
      // Save original as fallback
      translatedMetadata.push(meta);
      translatedContent[meta.slug] = content;
    }
  }
  
  console.log("✅ Translation complete!");
}

function saveFiles() {
  const metaFile = `export interface ArticleMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  description: string;
}

export const intelligenceMetadataEn: ArticleMetadata[] = ${JSON.stringify(translatedMetadata, null, 2)};
`;

  const contentFile = `export const intelligenceContentEn: Record<string, string> = ${JSON.stringify(translatedContent, null, 2)};
`;

  fs.writeFileSync(metadataOut, metaFile, 'utf8');
  fs.writeFileSync(contentOut, contentFile, 'utf8');
}

run();
