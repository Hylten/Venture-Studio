import fs from 'fs';
import path from 'path';

const CONTENT_FILE = './src/data/intelligence/content.ts';
let contentTs = fs.readFileSync(CONTENT_FILE, 'utf8');

// 1. Ensure all headers have a space after the hashes
contentTs = contentTs.replace(/(^|\n)(#+)([^\s#])/g, '$1$2 $3');

// 2. Ensure all headers are preceded by a double newline to satisfy the current split("\n\n") logic
// Find headers and make sure there's \n\n before them
contentTs = contentTs.replace(/([^\n])\n(#+ )/g, '$1\n\n$2');

fs.writeFileSync(CONTENT_FILE, contentTs);

// 3. Update Intelligence.tsx to be more resilient
const UI_FILE = './src/Intelligence.tsx';
let uiTs = fs.readFileSync(UI_FILE, 'utf8');

// Update the rendering logic to handle headers more robustly
// We will change the split to handle both single and double newlines better, 
// or just fix the startsWith to be more lenient.

const oldLogic = `{article.content.split("\\n\\n").map((para, i) => {
            if (para.startsWith("### ")) {
              return <h4 key={i} className="text-xl font-black uppercase tracking-tight mt-12 mb-4 text-[#C4A265]">{para.slice(4)}</h4>;
            }
            if (para.startsWith("## ")) {
              return <h3 key={i} className="text-2xl font-black uppercase tracking-tight mt-16 mb-6">{para.slice(3)}</h3>;
            }
            if (para.startsWith("# ")) {
              return <h2 key={i} className="text-3xl font-black uppercase tracking-tight mt-16 mb-8">{para.slice(2)}</h2>;
            }`;

const newLogic = `{article.content.split("\\n").map((line, i) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith("### ")) {
              return <h4 key={i} className="text-xl font-black uppercase tracking-tight mt-12 mb-4 text-[#C4A265]">{trimmedLine.replace(/^###\\s+/, "")}</h4>;
            }
            if (trimmedLine.startsWith("## ")) {
              return <h3 key={i} className="text-2xl font-black uppercase tracking-tight mt-16 mb-6">{trimmedLine.replace(/^##\\s+/, "")}</h3>;
            }
            if (trimmedLine.startsWith("# ")) {
              return <h2 key={i} className="text-3xl font-black uppercase tracking-tight mt-16 mb-8">{trimmedLine.replace(/^#\\s+/, "")}</h2>;
            }`;

// Also need to handle paragraphs if we split by \n. 
// A better way is to keep \n\n split but fix the startsWith to handle stray whitespace.

uiTs = uiTs.replace(/para\.startsWith\("### "\)/g, 'para.trim().startsWith("### ")');
uiTs = uiTs.replace(/para\.startsWith\("## "\)/g, 'para.trim().startsWith("## ")');
uiTs = uiTs.replace(/para\.startsWith\("# "\)/g, 'para.trim().startsWith("# ")');

// And remove the slice and use a regex replacement to be safer
uiTs = uiTs.replace(/para\.slice\(4\)/g, 'para.trim().replace(/^###\\s+/, "")');
uiTs = uiTs.replace(/para\.slice\(3\)/g, 'para.trim().replace(/^##\\s+/, "")');
uiTs = uiTs.replace(/para\.slice\(2\)/g, 'para.trim().replace(/^#\\s+/, "")');

fs.writeFileSync(UI_FILE, uiTs);

console.log("Fixed header formatting in content.ts and made Intelligence.tsx rendering more resilient.");
