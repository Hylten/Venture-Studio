import fs from 'fs';
import path from 'path';

const INTELLIGENCE_DIR = './src/data/intelligence';
const CONTENT_FILE = path.join(INTELLIGENCE_DIR, 'content.ts');
const METADATA_FILE = path.join(INTELLIGENCE_DIR, 'metadata.ts');

// Helper to count words
function countWords(str) {
    if (!str) return 0;
    return str.trim().split(/\s+/).length;
}

// 1. Read files
let contentTs = fs.readFileSync(CONTENT_FILE, 'utf8');
let metadataTs = fs.readFileSync(METADATA_FILE, 'utf8');

// 2. Parse Content (simplified approach: regex to find objects)
// Expects: "slug": `content`,
const contentEntries = {};
const entryRegex = /  "(.*?)": `([\s\S]*?)`,/g;
let match;
while ((match = entryRegex.exec(contentTs)) !== null) {
    const slug = match[1];
    const content = match[2];
    contentEntries[slug] = content;
}

// 3. Parse Metadata array
// Expects: export const intelligenceMetadata: ArticleMetadata[] = [...];
const metadataMatch = metadataTs.match(/export const intelligenceMetadata: ArticleMetadata\[\] = (\[[\s\S]*?\]);/);
let metadataArray = [];
if (metadataMatch) {
    try {
        // Evaluate the array string to get the JS object
        metadataArray = eval(metadataMatch[1]);
    } catch (e) {
        console.error("Failed to parse metadata array", e);
    }
}

console.log(`Starting cleanup. Total metadata entries: ${metadataArray.length}, Total content entries: ${Object.keys(contentEntries).length}`);

// 4. Prune
const validSlugs = new Set();
const prunedContent = {};

for (const [slug, content] of Object.entries(contentEntries)) {
    const wordCount = countWords(content);
    if (wordCount >= 1500) {
        prunedContent[slug] = content;
        validSlugs.add(slug);
        console.log(`✅ Keeping ${slug}: ${wordCount} words.`);
    } else {
        console.log(`❌ Removing ${slug}: only ${wordCount} words.`);
    }
}

// 5. Filter Metadata to only include slugs with valid content
const prunedMetadata = metadataArray.filter(item => validSlugs.has(item.slug));

console.log(`Cleanup finished. Remaining articles: ${prunedMetadata.length}`);

// 6. Write back to content.ts
let newContentTs = `export const intelligenceContent: Record<string, string> = {\n`;
for (const [slug, content] of Object.entries(prunedContent)) {
    // Escape backticks and ${} to stay safe in template literal
    const escapedContent = content
        .replace(/`/g, '\\`')
        .replace(/\${/g, '\\${');
    newContentTs += `  "${slug}": \`${escapedContent}\`,\n`;
}
newContentTs += "};\n";
fs.writeFileSync(CONTENT_FILE, newContentTs);

// 7. Write back to metadata.ts
let newMetadataTs = `export interface ArticleMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
}

export const intelligenceMetadata: ArticleMetadata[] = ${JSON.stringify(prunedMetadata, null, 2)};
`;
fs.writeFileSync(METADATA_FILE, newMetadataTs);

console.log("Files updated. Ready to run build.");
