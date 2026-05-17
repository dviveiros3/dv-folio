# PE Intelligence Kit: Implementation Guide

## Required Inputs
To get the most out of this kit, you should have the following materials (redacted as per privacy guidelines):
1. **CIM (Confidential Information Memorandum):** For the 'Company Analysis' and 'Risk Mapping' skills.
2. **Financial Summaries (Excel or PDF):** For 'KPI Extraction'.
3. **Management Presentations:** To identify the 'Narrative vs. Data' gaps for 'Question Generation'.
4. **Portfolio Survey Data:** For the 'Portfolio AI Opportunity Scan'.

## Redaction & Privacy Protocol
**Crucial:** Do not upload sensitive data to public AI interfaces.
1. **PII Removal:** Manually or programmatically remove names, addresses, and phone numbers of employees or customers.
2. **Precision Reduction:** Round exact dollar amounts (e.g., $12,456,782 → $12.5M) to prevent the reconstruction of sensitive tables.
3. **Proprietary Technology:** Describe sensitive trade secrets in generic terms (e.g., 'A proprietary algorithm' vs. 'The exact code for X').

## Recommended Technology Stack
- **AI Model:** Claude 3.5 Sonnet (for reasoning) or GPT-4o (for data extraction).
- **Environment:** Use Enterprise versions with data privacy guarantees (e.g., ChatGPT Enterprise, Poe for Business, or AWS Bedrock).
- **Document Processing:** Use a tool that supports large context windows (100k+ tokens) to process entire data rooms at once.

## The Review Process
AI-generated diligence materials should **never** be sent to an Investment Committee without human review.
1. **Verification:** Cross-check all extracted KPIs against the source documents.
2. **Contextualization:** AI cannot 'know' the reputation of a management team or the nuances of a specific regional market. These must be added by the analyst.
3. **Tone Check:** Ensure the AI hasn't been overly optimistic or pessimistic. Maintain a neutral, professional 'Diligence Tone'.
