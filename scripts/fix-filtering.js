import fs from 'fs';
import path from 'path';

const INTELLIGENCE_DIR = './src/data/intelligence';
const CONTENT_FILE = path.join(INTELLIGENCE_DIR, 'content.ts');
const METADATA_FILE = path.join(INTELLIGENCE_DIR, 'metadata.ts');
const INTELLIGENCE_UI_FILE = './src/Intelligence.tsx';

// 1. Update Interfaces and React Component Filter Logic
let intelligenceUi = fs.readFileSync(INTELLIGENCE_UI_FILE, 'utf8');

// Add category to Article interface
intelligenceUi = intelligenceUi.replace('  content: string;', '  content: string;\n  category: string;');

// Update filtering logic in IntelligenceArchive
const oldFilter = `  const filteredArticles = selectedCategory === "alla" 
    ? articles.slice(0, 300)
    : articles.slice(0, 300);`;

const newFilter = `  const filteredArticles = selectedCategory === "alla" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);`;

intelligenceUi = intelligenceUi.replace(oldFilter, newFilter);

fs.writeFileSync(INTELLIGENCE_UI_FILE, intelligenceUi);

// 2. Update metadata.ts structure and categorize existing articles
let metadataTs = fs.readFileSync(METADATA_FILE, 'utf8');

// Add category to ArticleMetadata interface
metadataTs = metadataTs.replace('  author: string;', '  author: string;\n  category: string;');

// Use keywords to categorize
const categoryKeywords = {
  "saas-monetization": ["monetisering", "pricing", "marginal", "subscription", "price", "revenue", "seat-model", "intäkt", "marginaler", "prissättning"],
  "ai-enterprise": ["ai", "enterprise", "agi", "modell", "black-box", "llm", "pipeline", "automation", "agent", "data", "vektor", "rag"],
  "capital-markets": ["värdering", "ebitda", "capital", "marknad", "dealflow", "kapital", "liquidity", "multipla", "multiple", "exit", "m&a", "forvärv", "ma-"],
  "fundraising-ipo": ["fundraising", "ipo", "series-", "kapitalresning", "round", "invest", "funding", "secondaries", "equity"],
  "gtm": ["gtm", "sales", "outbound", "inbound", "leed", "lead", "kund", "market", "expansion", "sälj", "growth", "plg"],
  "venture-studio": ["studio", "venture", "stewardship", "entrepreneur", "portfölj"]
};

const blocks = metadataTs.split('  {');
const updatedBlocks = blocks.map(block => {
  if (!block.includes('"slug"')) return block;
  
  const lowerBlock = block.toLowerCase();
  let category = "gtm"; // Default fallback
  
  for (const [cat, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(k => lowerBlock.includes(k))) {
      category = cat;
      break;
    }
  }
  
  // Insert category field
  return block.replace('"description":', `"category": "${category}",\n    "description":`);
});

metadataTs = updatedBlocks.join('  {');
fs.writeFileSync(METADATA_FILE, metadataTs);

console.log("Enabled category filtering in Intelligence UI and categorized 180+ articles in metadata.ts.");
