# Workflow: Target-Company Analysis

## Overview
A structured, multi-step process to move from raw data room access to a finalized draft of an Investment Committee (IC) memo.

## The Process

### Phase 1: Ingestion & Redaction
- **Input:** Raw documents (CIM, Management Presentation, Board Decks).
- **Action:** Use a script or manual process to redact PII (Personally Identifiable Information) and highly sensitive trade secrets.
- **Output:** 'Clean' text files for LLM processing.

### Phase 2: Structural Extraction (Parallel Processing)
- **Step A:** Run `Skill: Company Analysis` to build the narrative foundation.
- **Step B:** Run `Skill: KPI Extraction` to build the financial data table.
- **Output:** Two draft sections of the memo.

### Phase 3: Risk & Question Synthesis
- **Step C:** Feed Phase 2 outputs into `Skill: Risk/Opportunity Mapping`.
- **Step D:** Run `Skill: Diligence Question Generation` based on identified risks.
- **Output:** A prioritized list of diligence workstreams and management questions.

### Phase 4: Human-in-the-Loop Review
- **Action:** An Associate/VP reviews the AI-generated outputs for hallucinations or missing context.
- **Action:** Manual layer of industry-specific 'tribal knowledge' added.

### Phase 5: Final IC Memo Assembly
- **Action:** Combine sections into a standardized firm template.
- **Output:** Final draft memo for internal review.

## Efficiency Gain
Hypothesis: **60-70% time reduction** for the initial 'Drafting' and 'Synthesis' phases of diligence, to be verified through user testing.
