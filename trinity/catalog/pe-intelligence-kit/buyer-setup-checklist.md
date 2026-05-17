# PE Intelligence Kit: Buyer Setup Checklist

This checklist ensures your environment and data are properly prepared before deploying the PE Intelligence Kit workflows. Follow these steps to maintain confidentiality and maximize the quality of AI-generated insights.

## 1. Environment Verification
- [ ] **Enterprise-Grade AI Access:** Ensure you are using an enterprise instance (e.g., ChatGPT Enterprise, Claude for Business, Azure OpenAI) where data is not used for training.
- [ ] **Compliance Approval:** Verify with your firm's IT or Compliance officer that the selected AI environment is approved for handling proprietary deal data.
- [ ] **Secure Storage:** Confirm that raw, un-sanitized documents are stored only in firm-approved secure locations (e.g., encrypted cloud storage, approved VDRs).

## 2. Data Sanitization (Input Preparation)
- [ ] **PII Scrubbing:** Remove names, personal emails, and phone numbers from all CIMs, management presentations, and data room exports.
- [ ] **Financial Rounding:** Round specific financial figures to the nearest significant unit (e.g., millions or hundred-thousands) to prevent reconstruction of exact tables.
- [ ] **Counterparty Anonymization:** Replace specific customer, supplier, or partner names with generic identifiers (e.g., 'Key Customer A', 'Logistics Partner B').
- [ ] **Trade Secret Redaction:** Replace highly specific technical descriptions or proprietary processes with high-level functional descriptions.

## 3. Workflow Configuration
- [ ] **Model Selection:** Configure workflows to use high-reasoning models (e.g., Claude 3.5 Sonnet, GPT-4o) for complex diligence tasks.
- [ ] **Context Window Check:** Ensure the chosen tool can handle the token volume of your combined input documents (aim for 100k+ token support).
- [ ] **Human-in-the-Loop (HITL) Points:** Identify where in the process an analyst will review intermediate outputs before proceeding to the next step.

## 4. Quality Control & Review
- [ ] **Primary Source Verification:** Assign an analyst to verify all AI-extracted KPIs against the original source documents.
- [ ] **Tone & Judgment Review:** Review all generated memos for professional tone and ensure AI 'hypotheses' are clearly labeled and scrutinized.
- [ ] **Final Compliance Pass:** Ensure all final artifacts adhere to internal guidelines for investment committee materials.

---
**Disclaimer:** This checklist is a framework for operational readiness and does not constitute legal or compliance advice.
