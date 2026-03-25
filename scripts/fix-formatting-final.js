import fs from 'fs';
import path from 'path';

const CONTENT_FILE = './src/data/intelligence/content.ts';
let contentTs = fs.readFileSync(CONTENT_FILE, 'utf8');

// 1. Remove TECHNICAL MANDATE blocks
// They look like: 
/*
---

TECHNICAL MANDATE

Qualification gates strictly observed for comprehensive structural execution.
Access is restricted to approved mandates.
Minimum target size: 500K SEK+.

Book a confidential briefing.
*/
const mandateRegex = /\n---\s*?\n\nTECHNICAL MANDATE[\s\S]*?\nBook a confidential briefing\./g;
contentTs = contentTs.replace(mandateRegex, '');

// Also generic "TECHNICAL MANDATE" cleanup 
contentTs = contentTs.replace(/\nTECHNICAL MANDATE[\s\S]*?\n\n/g, '\n\n');

// 2. Fix Header formatting: ensure space after # at start of line
// #Title -> # Title
// ##Title -> ## Title
contentTs = contentTs.replace(/\n(#+)([^\s#])/g, '\n$1 $2');

// 3. Fix start-of-file headers too (if they exist without \n)
if (contentTs.startsWith('#') && contentTs[1] !== ' ' && contentTs[1] !== '#') {
  contentTs = '# ' + contentTs.slice(1);
}

fs.writeFileSync(CONTENT_FILE, contentTs);
console.log("Cleaned Technical Mandate blocks and fixed header formatting in content.ts.");
