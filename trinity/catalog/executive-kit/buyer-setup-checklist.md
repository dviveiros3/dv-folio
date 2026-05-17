# Buyer Setup Checklist: Trinity Executive Kit

This checklist ensures that the Trinity Executive Kit is implemented with high-fidelity inputs and clear operational accountability.

## 1. Metrics Feeds (The "Truth" Layer)
- [ ] **Primary Dashboard Access:** Identify the source of truth for North Star KPIs (e.g., Stripe for revenue, HubSpot for pipeline, PostHog for product).
- [ ] **Snapshot Cadence:** Define who is responsible for providing the raw metric export or screenshot every Friday morning.
- [ ] **KPI Definitions:** Ensure all team leads agree on the definition of "Active User," "MQL," and "Churn" to avoid AI hallucination based on conflicting data.

## 2. Team-Update Cadence (The "Pulse" Layer)
- [ ] **Slack/Notion Collection:** Set up a dedicated channel or page for "Friday 5-Minute Updates."
- [ ] **Lead Accountability:** Assign specific team leads (Product, Sales, Engineering, CS) to provide 3 bullets: Win of the Week, Critical Blocker, Focus for Next Week.
- [ ] **Deadline Enforcement:** Set an automated reminder for Thursday EOD and Friday 10:00 AM.

## 3. Data Ownership & Access
- [ ] **LLM Workspace:** Create a dedicated, private workspace (e.g., OpenAI Enterprise, Claude Team, or a secure internal API instance).
- [ ] **Input Sanitization:** Define what data **cannot** be uploaded (e.g., PII, unhashed customer lists, specific salary data).
- [ ] **Context Window Management:** Store the "Strategic Context" (Company Mission, Q4 Goals, Org Chart) in the LLM's Project/GPT Knowledge base.

## 4. Reviewers & Approvers
- [ ] **The "Driver":** Usually the Chief of Staff or a senior operator who runs the reporting engine.
- [ ] **The "Final Eye":** The CEO or founder who does the 10-minute polish before distribution.
- [ ] **Sensitive Reviewers:** Identify who must review reports containing HR sentiment or sensitive financial projections.

## 5. Distribution Rules
- [ ] **Audience Tiers:** Define what goes to the "Leadership Team" vs. "All Hands" vs. "Board of Directors."
- [ ] **Platform:** Determine where the final report lives (Notion, Slack, Email, or a slide deck).
- [ ] **Archive:** Ensure all reports and decision memos are saved in a searchable, permanent repository.
