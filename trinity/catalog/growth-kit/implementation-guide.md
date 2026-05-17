# Trinity Growth Kit: Implementation Guide

This guide will help you operationalize the Trinity Growth Kit. We recommend starting manually to "find the rhythm" before fully automating with tools like Make or Zapier.

## Phase 1: Manual Setup (Week 1)
The goal is to validate the AI instructions with your specific business data.

1.  **Model Selection:** Use high-reasoning, state-of-the-art Large Language Models (LLMs). These models follow the complex logic required for the Trinity Skills significantly better than smaller, "fast" models.
    - **Selection Criteria:**
        - **Strong Instruction Following:** The model should consistently respect negative constraints and complex formatting instructions.
        - **Large Context Window:** Ability to ingest multiple source documents (ICP data, brand voice, etc.) without losing context.
        - **Reasoning Capabilities:** Superior performance on logic and synthesis benchmarks.
2.  **Initial Baselining:**
    - Open `skills/icp-definition.md`. Copy the content into a new chat.
    - Provide your raw business data. Review the output.
    - Repeat for `skills/positioning-strategy.md` and `skills/offer-generation.md`.
    - **Crucial:** Save these three outputs. They are the "Context Foundation" for everything else.
3.  **Test the Engine:** Take one "Founder Insight" (e.g., a Slack rant) and run it through `skills/content-ideation.md` using your Context Foundation.

## Phase 2: Semi-Automated (Weeks 2-3)
Use specialized tools to reduce the "copy-paste" friction.

### For the Content Engine:
- **Transcription:** Use **Otter.ai** or **Descript** to get clean transcripts of founder voice notes.
- **Workflow:** Set up a **Notion Database** with columns for "Raw Insight," "AI Draft," and "Status" (Draft/Review/Scheduled).
- **Automation:** Use **Make.com** to:
    1. Watch a Google Drive folder for new audio files.
    2. Send the transcript to the OpenAI/Anthropic API with the `content-ideation` prompt.
    3. Create a new record in Notion with the generated drafts.

### For the Outbound Engine:
- **Lead Sourcing:** Use **Apollo.io** or **LinkedIn Sales Navigator**.
- **Personalization:**
    1. Export your lead list to a Google Sheet.
    2. Use the **Claude for Sheets** extension or **Make.com** to run the `outbound-drafting` skill for each row.
    3. Review the "Draft" column in your sheet.
- **Sending:** Push the approved drafts to **Instantly.ai** via their API or Zapier.

## Phase 3: Scaling & QA (Continuous)
- **The Human-in-the-Loop:** Never skip the "Review" step. AI is a leverage tool, but the founder's "taste" is the moat.
- **Feedback Loops:** If a post performs well, copy it into your "Asset Library" and tell the AI: "This is a Gold Standard post. Analyze why it worked and use that logic for future drafts."

## Troubleshooting
- **AI is too "robotic":** Ensure you have provided enough "Founder Voice" samples in the inputs.
- **Hallucinations:** Check your `Lead Scoring` logic. If the AI is making things up, it usually means the input data (the lead enrichment) is too thin.
