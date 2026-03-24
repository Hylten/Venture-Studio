#!/usr/bin/env node
/**
 * Clean copywriting patterns from Venture Studio article content.
 */

import { readFileSync, writeFileSync } from 'fs';

function cleanContent(content) {
    let c = content;

    c = c.replace(/##\s*[PAB]:\s*(Problem|Agitate|Solution)\s*\n/gi, '\n');
    c = c.replace(/##\s*[FAB]:\s*(Features|Advantages|Benefits)\s*\n/gi, '\n');
    c = c.replace(/##\s*(Attention|Interest|Desire|Action)\s*\n/gi, '\n');
    c = c.replace(/##\s*(Clear|Concise|Compelling|Credible)\s*\n/gi, '\n');
    c = c.replace(/##\s*So what\??\s*\n/gi, '\n');
    c = c.replace(/^(Problem|Agitation|Solution|Bridge|Proof|Promise|Proposal):\s*/gm, '');
    c = c.replace(/\b(AIDA|PAS|BAB|4C|4C'?s?)\s*[-–:]?\s*/gi, '');
    c = c.replace(/\b(AIDA|PAS|BAB)\s*metoden\b/gi, '');
    c = c.replace(/\nSo what\??:?\s*/g, '\n');
    c = c.replace(/So what\??:?\s*/g, '');
    c = c.replace(/\nSlutsats:\s*.*/g, '');
    c = c.replace(/###\s*\d+\.\s*(Clear|Concise|Compelling|Credible|Attention|Interest|Desire|Action|Problem|Agitation|Solution):\s*/gi, '### ');
    c = c.replace(/\n{3,}/g, '\n\n');
    c = c.replace(/\n##\s*\n/g, '\n');
    c = c.replace(/\n###\s*\n/g, '\n');
    c = c.replace(/\n\s+/g, '\n');
    c = c.replace(/\s+\n/g, '\n');
    c = c.trim();

    if (c && !c.match(/##\s*Sammanfattning\s*$/m)) {
        c += '\n\n## Sammanfattning';
    }

    return c;
}

function parseContentTs(content) {
    const articles = [];
    
    // Find the export line and get content after it
    const exportIndex = content.indexOf('export const intelligenceContent: Record<string, string> = {');
    if (exportIndex === -1) return articles;
    
    // Remove the export and closing
    let rest = content.slice(exportIndex + 56).trim();
    if (rest.startsWith('{')) rest = rest.slice(1).trim();
    if (rest.endsWith('};')) rest = rest.slice(0, -2).trim();
    
    // Split by article keys using regex
    // Pattern: "key": "content",
    const articleRegex = /"([^"]+)":\s*"([^"]*(?:\\"[^"]*)*)",\s*/g;
    
    let match;
    let lastEnd = 0;
    
    while ((match = articleRegex.exec(rest)) !== null) {
        const key = match[1];
        const rawContent = match[2];
        // Unescape content
        const content = rawContent.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        
        if (content) {
            articles.push({ key, content });
        }
        lastEnd = match.index + match[0].length;
    }
    
    return articles;
}

function rebuildFile(articles) {
    const lines = ['export const intelligenceContent: Record<string, string> = {', ''];
    
    for (const { key, content } of articles) {
        const escaped = content.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        lines.push(`  "${key}": "${escaped}",`);
        lines.push('');
    }
    
    lines.push('};');
    return lines.join('\n');
}

function main() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.log('Usage: node clean_articles.mjs <content.ts>');
        process.exit(1);
    }
    
    const filePath = args[0];
    let content;
    
    try {
        content = readFileSync(filePath, 'utf8');
    } catch (e) {
        console.log('File not found:', filePath);
        process.exit(1);
    }
    
    // Backup
    const backupPath = filePath + '.backup5';
    writeFileSync(backupPath, content);
    console.log('Created backup:', backupPath);
    
    // Parse
    const articles = parseContentTs(content);
    console.log('Found', articles.length, 'articles');
    
    // Clean
    let cleaned = 0;
    for (let i = 0; i < articles.length; i++) {
        const { key, content } = articles[i];
        const cleanedContent = cleanContent(content);
        articles[i] = { key, content: cleanedContent };
        
        const wordCount = cleanedContent.split(/\s+/).length;
        if (wordCount < 1500) {
            console.log('WARNING:', key, 'has only', wordCount, 'words');
        }
        
        if (cleanedContent !== content) cleaned++;
    }
    
    console.log('Cleaned', cleaned, 'articles');
    
    // Rebuild
    const newContent = rebuildFile(articles);
    writeFileSync(filePath, newContent);
    console.log('Done!');
}

main();
