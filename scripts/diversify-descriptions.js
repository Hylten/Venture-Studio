import fs from 'fs';
import path from 'path';

const METADATA_FILE = './src/data/intelligence/metadata.ts';
let metadataTs = fs.readFileSync(METADATA_FILE, 'utf8');

const institutionalSuffixes = [
  "En operativ genomlysning av arkitektonisk suveränitet och skalningsmatematik.",
  "Institutionell analys rörande teknisk resilience och kapitalallokering i AGI-eran.",
  "Strategiskt memo för serie-grundare om att härda B2B-tillgångar för global exit.",
  "Djuplodande granskning av GTM-infrastruktur och dess påverkan på burn-rate och multiples.",
  "Ett tekniskt ramverk för att navigera olinjära marknadsrörelser och vertikal dominans.",
  "Kritisk utvärdering av operativ hävstång och systemisk risk i moderna SaaS-stackar.",
  "Milstolpsanalys för sent-stadie bolag som söker suveränitet i ett fragmenterat landskap.",
  "En manual för Stewardship och Asset Hardening i nästa generations mjukvaruekonomi."
];

// Regex to find the generic description pattern
// It looks like: "description": "Title. Institutionell analys för VC och serie-grundare."
// We'll capture the title and replace the whole description.

let count = 0;
const metadataRegex = /"title": "(.*?)",\s+"date": ".*?",\s+"author": ".*?",\s+"description": ".*Institutionell analys för VC och serie-grundare\."/g;

// Instead of global replace which is hard with index based arrays, let's parse the array if possible or use a more surgical replace.
// Since it's a TS file, we can treat it as text.

// Let's do a more robust string replacement by splitting the file into blocks.
const blocks = metadataTs.split('  {');
const updatedBlocks = blocks.map((block, index) => {
  if (block.includes("Institutionell analys för VC och serie-grundare")) {
    const titleMatch = block.match(/"title": "(.*?)"/);
    if (titleMatch) {
      const title = titleMatch[1];
      const suffix = institutionalSuffixes[count % institutionalSuffixes.length];
      count++;
      return block.replace(/"description": ".*?"/, `"description": "${title}. ${suffix}"`);
    }
  }
  return block;
});

metadataTs = updatedBlocks.join('  {');

fs.writeFileSync(METADATA_FILE, metadataTs);
console.log(`Diversified ${count} article descriptions with unique institutional suffixes.`);
