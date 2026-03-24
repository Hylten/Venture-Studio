#!/usr/bin/env python3
"""
Clean copywriting patterns from Venture Studio article content.
"""

import re
import sys
from pathlib import Path


def clean_content(content):
    """Clean copywriting patterns from article content."""
    # Note: content is already unescaped (\\n -> actual newline) from extract_articles
    c = content

    # Remove entire framework introduction lines at start - VERY AGGRESSIVE
    # Match any line starting with metoden/modellen followed by content in parentheses
    c = re.sub(r"^[\u2010-\u2015–-]*metoden[^\n]*\n+", "", c, flags=re.IGNORECASE)
    c = re.sub(r"^[\u2010-\u2015–-]*modellen[^\n]*\n+", "", c, flags=re.IGNORECASE)
    c = re.sub(r"^'s[^\n]*\n+", "", c, flags=re.IGNORECASE)

    # Remove framework headers like ## P: Problem, ## A: Agitate, ## S: Solution
    c = re.sub(
        r"##\s*[PAS]:\s*(Problem|Agitate|Solution)\s*\n?", "\n", c, flags=re.IGNORECASE
    )
    c = re.sub(r"##\s*[PAS]:\s*Problem\b", "\n", c, flags=re.IGNORECASE)
    c = re.sub(r"##\s*[PAS]:\s*Agitate\b", "\n", c, flags=re.IGNORECASE)
    c = re.sub(r"##\s*[PAS]:\s*Solution\b", "\n", c, flags=re.IGNORECASE)

    # Remove ## F: Features, ## A: Advantages, ## B: Benefits
    c = re.sub(
        r"##\s*[FAB]:\s*(Features|Advantages|Benefits)\b", "\n", c, flags=re.IGNORECASE
    )

    # Remove ## Attention, ## Interest, ## Desire, ## Action
    c = re.sub(
        r"##\s*(Attention|Interest|Desire|Action)\b", "\n", c, flags=re.IGNORECASE
    )

    # Remove ## Clear, ## Concise, ## Compelling, ## Credible
    c = re.sub(
        r"##\s*(Clear|Concise|Compelling|Credible)\b", "\n", c, flags=re.IGNORECASE
    )

    # Remove ## So what
    c = re.sub(r"##\s*So what\b", "\n", c, flags=re.IGNORECASE)

    # Remove standalone labels at start of line (including at start of content)
    # This handles: Problem: | Agitation: | Solution: | Before: | After: | Bridge:
    c = re.sub(
        r"(^|\n)(Problem|Agitation|Solution|Bridge|Proof|Promise|Proposal|Attention|Interest|Desire|Action|Clear|Concise|Compelling|Credible|Före|Efter|Bron):\s*",
        r"\1",
        c,
        flags=re.MULTILINE | re.IGNORECASE,
    )

    # Also remove if at absolute start of content (after quote was removed during extraction)
    c = re.sub(
        r"^(Problem|Agitation|Solution|Bridge|Proof|Promise|Proposal|Attention|Interest|Desire|Action|Clear|Concise|Compelling|Credible|Före|Efter|Bron):\s*",
        "",
        c,
        flags=re.IGNORECASE,
    )

    # Remove any leading whitespace/newlines followed by framework labels
    c = re.sub(
        r"^[\s\n]*(Problem|Agitation|Solution|Bridge|Proof|Promise|Proposal|Attention|Interest|Desire|Action|Clear|Concise|Compelling|Credible|Före|Efter|Bron):\s*",
        "",
        c,
        flags=re.IGNORECASE,
    )

    # Remove bullet-point framework labels: • Attention:, • Clear:, etc.
    c = re.sub(
        r"•\s*(Attention|Interest|Desire|Action|Clear|Concise|Compelling|Credible|Problem|Agitation|Solution):\s*",
        "• ",
        c,
        flags=re.IGNORECASE,
    )

    # Remove inline framework references like "AIDA-perspektiv:", "4C's-perspektivet:", "PAS:"
    c = re.sub(
        r"\b(AIDA|PAS|BAB|4C|4C'?s?)[\s-]*(perspektiv|perspektivet|metoden|modellen)?[\s:]*",
        "",
        c,
        flags=re.IGNORECASE,
    )

    # Remove "So what?" phrases (case insensitive)
    c = re.sub(r"\nSo what\??:?\s*", "\n", c)
    c = re.sub(r"\nSå vad\??:?\s*", "\n", c)
    c = re.sub(r"So what\??:?\s*", "", c)
    c = re.sub(r"Så vad\??:?\s*", "", c)

    # Remove "Slutsats:" at end
    c = re.sub(r"\nSlutsats:\s*.*", "", c, flags=re.DOTALL)

    # Remove framework labels at numbered section end
    c = re.sub(
        r"###\s*\d+\.\s*(Clear|Concise|Compelling|Credible|Attention|Interest|Desire|Action|Problem|Agitation|Solution):\s*",
        "### ",
        c,
        flags=re.IGNORECASE,
    )

    # Clean up multiple newlines
    c = re.sub(r"\n{3,}", "\n\n", c)

    # Clean up empty section headers
    c = re.sub(r"\n##\s*\n", "\n", c)
    c = re.sub(r"\n###\s*\n", "\n", c)

    # Clean up whitespace
    c = re.sub(r"\n\s+", "\n", c)
    c = re.sub(r"\s+\n", "\n", c)

    # Clean up bullet points that now have leading whitespace or are empty
    c = re.sub(r"\n•\s+", "\n• ", c)

    c = c.strip()

    # Add ## Sammanfattning if not present
    if c and not re.search(r"##\s*Sammanfattning\s*$", c, re.MULTILINE):
        c += "\n\n## Sammanfattning"

    return c


def extract_articles(text):
    """Extract articles from TypeScript file content."""
    articles = []

    # Find where content starts after " = {"
    content_start = text.find(" = {")
    if content_start == -1:
        return articles

    rest = text[content_start + 4 :]  # skip past " = {"

    # State machine to parse articles
    i = 0
    while i < len(rest):
        # Skip whitespace
        while i < len(rest) and rest[i] in " \t\n\r":
            i += 1
        if i >= len(rest):
            break

        # Check for end
        if rest[i : i + 2] == "};":
            break

        # Must start with quote for key
        if rest[i] != '"':
            i += 1
            continue

        # Parse key: "key": "
        i += 1  # skip opening "
        key_start = i
        while i < len(rest) and rest[i] != '"':
            i += 1
        key = rest[key_start:i]

        # Skip '": "'
        i += 3  # skip '": '

        # Now we're in content - find the end ", which is NOT escaped
        content_start = i
        content_chars = []

        while i < len(rest):
            char = rest[i]
            if char == "\\" and i + 1 < len(rest):
                # Escaped character - keep it as-is for now
                content_chars.append(rest[i : i + 2])
                i += 2
            elif char == '"':
                if i + 1 < len(rest) and rest[i + 1] == ",":
                    # End of this article
                    content = "".join(content_chars)
                    # Unescape \\n to actual newlines for cleaning
                    content = content.replace("\\n", "\n").replace("\\t", "\t")
                    articles.append((key, content))
                    i += 2  # skip ",
                    break
                else:
                    content_chars.append('"')
                    i += 1
            else:
                content_chars.append(char)
                i += 1
        else:
            break

    return articles


def rebuild_file(articles):
    """Rebuild the TypeScript file."""
    lines = ["export const intelligenceContent: Record<string, string> = {", ""]

    for key, content in articles:
        # Escape content for TypeScript string
        # First convert actual newlines back to \\n for TS
        content = content.replace("\n", "\\n").replace("\t", "\\t")
        escaped = content.replace("\\", "\\\\").replace('"', '\\"')
        lines.append(f'  "{key}": "{escaped}",')
        lines.append("")

    lines.append("};")
    return "\n".join(lines)


def main():
    if len(sys.argv) < 2:
        print("Usage: python clean_articles.py <content.ts>")
        sys.exit(1)

    file_path = Path(sys.argv[1])
    if not file_path.exists():
        print(f"File not found: {file_path}")
        sys.exit(1)

    content = file_path.read_text()

    # Backup
    backup_path = file_path.with_suffix(".ts.backup7")
    backup_path.write_text(content)
    print(f"Created backup: {backup_path}")

    # Extract articles
    articles = extract_articles(content)
    print(f"Found {len(articles)} articles")

    # Clean each article
    cleaned_count = 0
    for i, (key, article_content) in enumerate(articles):
        cleaned = clean_content(article_content)
        articles[i] = (key, cleaned)

        word_count = len(cleaned.split())
        if word_count < 1500:
            print(f"WARNING: {key} has only {word_count} words")

        if cleaned != article_content:
            cleaned_count += 1

    print(f"Cleaned {cleaned_count} articles")

    # Rebuild file
    new_content = rebuild_file(articles)
    file_path.write_text(new_content)
    print("Done!")


if __name__ == "__main__":
    main()
