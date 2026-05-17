# Workflow: Outbound Prospecting Engine

## Objective
To identify high-intent prospects and deliver hyper-personalized outreach at scale without manual research.

## Specification

### 1. Trigger
- **Event-based:** New "Funding Round" or "Hiring Signal" detected in Apollo/LinkedIn/Crunchbase.
- **Batch-based:** Every Monday morning, pull a list of 100 new prospects matching the ICP.

### 2. Inputs
- **Lead List:** CSV or API feed from Apollo/Sales Navigator (Name, Company, Website, LinkedIn URL).
- **Contextual Data:** Recent company news or prospect's latest LinkedIn post (scraped).
- **Core Assets:** ICP Definition, Positioning Strategy, and `Skill: Outbound Drafting`.

### 3. Steps
1.  **Lead Enrichment:** Fetch the latest company news and prospect LinkedIn activity.
2.  **Scoring:** Use `Skill: Lead Scoring` to filter for "High Priority" leads (>70 score).
3.  **Drafting:** For each "High Priority" lead, use `Skill: Outbound Drafting` to create a 3-step sequence.
4.  **Review Loop:** Push drafted emails to "Drafts" in Instantly.ai or Smartlead.
5.  **Human QA:** SDR/Founder reviews the first 20 drafts to ensure the "Context" is landing correctly.
6.  **Deployment:** Activate the sequence.

### 4. Outputs
- A prioritized list of prospects.
- Personalized 3-step email/DM sequences for each high-intent prospect.
- A "Feedback Loop" report showing which triggers led to the highest response rates.

### 5. QA Checks
- [ ] Is the "Context" specific to *this* prospect?
- [ ] Is the "Offer" clearly stated and relevant to their current triggers?
- [ ] Are there any AI "hallucinations" (e.g., mentioning a company event that didn't happen)?
- [ ] Does the email follow the "Helpful Peer" tone?

### 6. Maintenance Cadence
- **Weekly:** Review bounce rates and response rates.
- **Bi-Weekly:** Refine `Skill: Outbound Drafting` based on common objections.
- **Monthly:** Audit lead sources (Apollo vs Sales Nav) for data accuracy.
