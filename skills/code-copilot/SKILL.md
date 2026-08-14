---
name: code-copilot
description: Use cheap models and Code Copilot GPT to save tokens.
---

# Code Copilot Workflow

This skill implements a high-efficiency coding loop: cheap generation $\rightarrow$ expert review $\rightarrow$ local verification.

## Workflow

1. **Initial Draft (Effort: Minimal)**
   - Use a low-cost/free model (e.g., `deepseek-v4-flash-free`) to generate the initial implementation or draft.
   - This minimizes token cost for the bulk of the coding work.

2. **Expert Review (ChatGPT Go)**
   - Send the draft to the **Code Copilot GPT** via the browser bridge.
   - Bridge command:
     ```bash
     /Users/jonasthevathason/.hermes/hermes-agent/venv/bin/python3 /Users/jonasthevathason/chatgpt_gpt_bridge.py "https://chatgpt.com/g/g-2DQzU5UZl-code-copilot" "Review this code for bugs and optimization: [CODE]"
     ```
   - The bridge uses the user's active ChatGPT Go session (CDP port 18800).

3. **Implementation & Verification**
   - Apply the suggested fixes from Code Copilot.
   - Run tests locally to verify correctness.

## Token Saving Strategy

| Phase | Model | Cost | Role |
|-------|-------|------|------|
| Draft | DeepSeek Flash | Free/Low | Bulk generation |
| Review | GPT-4o (Web) | Subscription | Expert audit & logic check |
| Verify | Local Python | Free | Functional correctness |

## Pitfalls & Privacy

- **Privacy:** Never send "Hermes" or internal project metadata to the GPT. Send only the code and specific technical requirements.
- **Context:** For large files, use the `@FILE:` mechanism in the bridge script to avoid command-line length limits.
- **Session:** Ensure the browser is logged in to ChatGPT Go.
