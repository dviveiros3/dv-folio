# Workflow: Weekly Executive Reporting Engine

## Objective
To create a repeatable, low-friction process for generating a high-fidelity weekly business intelligence packet for the leadership team.

## The Process

### 1. Input Collection (Friday Morning)
- **Automated Data Pull:** Extract key KPIs from CRM (HubSpot/Salesforce), Analytics (PostHog/Mixpanel), and Finance (Quickbooks/Stripe).
- **Team Asynchronous Update:** Team leads submit 3 bullets via Slack/Notion: "Biggest Win," "Biggest Blocker," "Focus for Next Week."
- **Founder Reflection:** 5-minute voice memo or jotting down "What's keeping me up at night?"

### 2. AI Synthesis (Friday Afternoon)
- **Step A:** Use the **Skill: Weekly Operator Report** prompt.
- **Input:** Provide the KPI data, team bullets, and founder reflection.
- **Output:** Draft #1 of the Weekly Report.

### 3. Review & Refine (Friday EOD)
- **Executive Review:** Founder or Chief of Staff spends 10 minutes reviewing Draft #1.
- **Fact Check:** Ensure numbers match the dashboards and nuances of team updates are captured.
- **Tone Polish:** Adjust the narrative to match the specific "voice" of the company.

### 4. Distribution (Monday Morning)
- **Publish:** Post the finalized report to the #leadership Slack channel or the Notion "Weekly Reports" database.
- **Link to Decisions:** If a blocker identified in the report requires a major change, trigger the **Decision Memo Engine**.

## QA Checks
- **Data Integrity:** Do the deltas in the KPI pulse match the raw data?
- **Actionability:** Does every "Blocker" have an owner or a next step?
- **Brevity:** Can the report be consumed in under 5 minutes?
