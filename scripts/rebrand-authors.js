import fs from 'fs';
import path from 'path';

const METADATA_FILE = './src/data/intelligence/metadata.ts';
let metadataTs = fs.readFileSync(METADATA_FILE, 'utf8');

// 1. Identify all blocks and count them
const blocks = metadataTs.split('  {');
let skepticalCount = 0;
blocks.forEach(block => {
  if (block.includes('"author": "Skeptical Investor (Leaked)"')) {
    skepticalCount++;
  }
});

console.log(`Initial Skeptical Investor count: ${skepticalCount}`);

// 2. Target ~86% change
let changedCount = 0;
const targetChange = Math.floor(skepticalCount * 0.86);

const updatedBlocks = blocks.map(block => {
  if (changedCount < targetChange && block.includes('"author": "Skeptical Investor (Leaked)"')) {
    changedCount++;
    return block.replace('"author": "Skeptical Investor (Leaked)"', '"author": "Jonas Hyltén"');
  }
  return block;
});

metadataTs = updatedBlocks.join('  {');

fs.writeFileSync(METADATA_FILE, metadataTs);
console.log(`Changed ${changedCount} authors to Jonas Hyltén (approx 86% of the total).`);
