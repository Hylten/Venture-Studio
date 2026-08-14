---
name: mr-writer-pipeline
description: Humanize articles and perform Swedish quality checks.
---

# Mr Writer Pipeline

A high-quality content production pipeline that integrates the Article Writer GPT for humanization and GPT Chat Svenska for final linguistic quality control.

## Workflow

1. **Generation**
   - Create the initial article/post using the preferred model (e.g., `deepseek-v4-pro` or `big-pickle`).
   - Focus on structure, facts, and core arguments.

2. **Humanization & SEO (Article Writer GPT)**
   - Send the draft to the **Article Writer GPT** via the browser bridge.
   - Bridge command:
     ```bash
     /Users/jonasthevathason/.hermes/hermes-agent/venv/bin/python3 /Users/jonasthevathason/chatgpt_gpt_bridge.py "https://chatgpt.com/g/g-xMTYfDbb4-article-writer-gpt" "Humanize and SEO optimize this article: [TEXT]"
     ```
   - This ensures the text feels natural, avoids AI-isms, and is optimized for search engines.

3. **Final Swedish Quality Check (GPT Chat Svenska)**
   - **MANDATORY FINAL STEP.**
   - Send the humanized text to **GPT Chat Svenska** via the browser bridge.
   - Bridge command:
     ```bash
     /Users/jonasthevathason/.hermes/hermes-agent/venv/bin/python3 /Users/jonasthevathason/chatgpt_gpt_bridge.py "https://chatgpt.com/g/g-sxq7w7XDi-gpt-chat-svenska" "Granska denna svenska text för grammatik, stil och naturligt flyt. Korrigera eventuella fel: [TEXT]"
     ```
   - This guarantees that the final output is linguistically perfect for the Swedish market.

## Execution Logic

| Order | Step | Tool/Model | Purpose |
|-------|------|-------------|---------|
| 1 | Draft | LLM (Free/Low) | Core content |
| 2 | Humanize | Article Writer GPT | SEO & Voice |
| 3 | Final Check| GPT Chat Svenska | Swedish Quality Assurance |

## Privacy Rules

- **No Project Metadata:** Never mention "Hermes", "Roials", or internal project names when sending text to the GPTs.
- **Generic Context:** Frame requests as "Review this article for a professional blog" rather than mentioning internal systems.
- **No Secrets:** Ensure no API keys or private data are included in the drafts.

## Verification

- Verify the final text has been processed by both a humanizer and a Swedish linguistic expert.
- Ensure the a-b-c order (Draft $\rightarrow$ Humanizer $\rightarrow$ Swedish Check) is strictly followed.
