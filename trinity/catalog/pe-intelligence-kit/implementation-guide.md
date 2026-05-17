# PE Intelligence Kit: Implementation Guide

## Required Inputs
To get the most out of this kit, you should have the following materials (redacted as per privacy guidelines):
1. **CIM (Confidential Information Memorandum):** For the 'Company Analysis' and 'Risk Mapping' skills.
2. **Financial Summaries (Excel or PDF):** For 'KPI Extraction'.
3. **Management Presentations:** To identify the 'Narrative vs. Data' gaps for 'Question Generation'.
4. **Portfolio Survey Data:** For the 'Portfolio AI Opportunity Scan'.

## Redaction & Confidentiality Protocol
**Crucial:** Investment data often contains Material Non-Public Information (MNPI). Do not upload sensitive data to public AI interfaces.

1. **PII Removal:** Manually or programmatically remove names, addresses, and phone numbers of employees or customers.
2. **Precision Reduction (Financials):** Round exact dollar amounts (e.g., $12,456,782 → $12.5M) to prevent the reconstruction of sensitive tables or the identification of specific transactions.
3. **Proprietary Technology:** Describe sensitive trade secrets or "secret sauce" in generic terms (e.g., 'A proprietary optimization algorithm' vs. 'The exact logic for X').
4. **Counterparty Anonymization:** Use placeholders for specific customers, suppliers, or partners (e.g., 'Customer A', 'Major Cloud Provider') unless using a fully private enterprise environment.
5. **Data Room Integrity:** When working with Virtual Data Rooms (VDRs), ensure your AI environment is approved by the firm's compliance officer for handling proprietary diligence materials.

## Recommended Technology Stack (Enterprise Only)
- **AI Model:** Claude 3.5 Sonnet (for reasoning) or GPT-4o (for data extraction).
- **Environment:** Use Enterprise versions with data privacy guarantees (e.g., ChatGPT Enterprise, Poe for Business, or AWS Bedrock).
- **Document Processing:** Use a tool that supports large context windows (100k+ tokens) to process entire data rooms at once.

## The Review Process (Human-in-the-Loop)
AI-generated diligence materials should **never** be sent to an Investment Committee or external clients without rigorous human review.

1. **Verification (Primary Source):** Cross-check all extracted KPIs and financial figures against the original source documents (audited financials, tax returns).
2. **Contextualization:** AI cannot 'know' the reputation of a management team, the nuances of a specific regional market, or the political landscape of a deal. These must be added by the analyst.
3. **Tone Check:** Ensure the AI hasn't been overly optimistic or pessimistic. Maintain a neutral, professional 'Diligence Tone' as defined by your firm’s standards.
4. **Compliance Approval:** Ensure final outputs adhere to internal compliance and legal guidelines. Note that Trinity provides intelligence tools, not investment, legal, or compliance advice.
