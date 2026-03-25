import fs from 'fs';
import path from 'path';

const INTELLIGENCE_DIR = './src/data/intelligence';
const CONTENT_FILE = path.join(INTELLIGENCE_DIR, 'content.ts');
const METADATA_FILE = path.join(INTELLIGENCE_DIR, 'metadata.ts');
const INTELLIGENCE_UI_FILE = './src/Intelligence.tsx';

// 1. Slugs to DELETE (Ghost/System articles)
const slugsToDelete = [
    'vertical-problems-worth-solving-131-prob',
    'saas-series-f-kapitalallokering-series-f',
    'roi-p-proprietary-deal-sourcing-varfr-eg',
    'buy-side-ma-fees-den-dolda-ekonomin-bako'
];

// Read files
let contentTs = fs.readFileSync(CONTENT_FILE, 'utf8');
let metadataTs = fs.readFileSync(METADATA_FILE, 'utf8');
let intelligenceUi = fs.readFileSync(INTELLIGENCE_UI_FILE, 'utf8');

// 2. Remove from content.ts (keys in object)
slugsToDelete.forEach(slug => {
    const regex = new RegExp(`\\s\\s"${slug}": \`[\\s\\S]*?\`,\n`, 'g');
    contentTs = contentTs.replace(regex, '');
});

// 3. Global Header Fix in content.ts
// Fix Case: #Header or ##Header or ###Header at start of line
contentTs = contentTs.replace(/(^|\n)(#+)([^\s#])/g, '$1$2 $3');

// 4. Remove from metadata.ts (objects in array)
slugsToDelete.forEach(slug => {
    // Look for the object containing this slug
    const regex = new RegExp(`\\s\\s\\{\\s+"slug": "${slug}"[\\s\\S]*?\\},?`, 'g');
    metadataTs = metadataTs.replace(regex, '');
});
// Clean up trailing commas if any
metadataTs = metadataTs.replace(/,\s+\]/g, '\n  ]');

// 5. Fix UI Visibility Limit (change 50 to 300)
intelligenceUi = intelligenceUi.replace(/\.slice\(0, 50\)/g, '.slice(0, 300)');

// 6. Write back
fs.writeFileSync(CONTENT_FILE, contentTs);
fs.writeFileSync(METADATA_FILE, metadataTs);
fs.writeFileSync(INTELLIGENCE_UI_FILE, intelligenceUi);

console.log("Deleted ghost articles, fixed header formatting, and increased UI visibility limit to 300.");
