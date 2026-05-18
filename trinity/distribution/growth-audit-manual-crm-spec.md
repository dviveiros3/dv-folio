# Growth Audit: Manual CRM Specification

## Mission
To provide a simple, manual-first operating system for tracking Growth Audit launch conversations and account qualification. This specification defines the structure for a Google Sheet or Airtable used by Daniel to manage the "Offer Intelligence Loop" before any automation or SaaS product exists.

## Core Operational Logic
- **No Automation:** All data is entered manually by the operator (Daniel) to ensure high-signal contact with the market.
- **Signal Over Volume:** We prioritize the depth of buyer language and objection capture over the number of leads.
- **Loop Integration:** This CRM directly feeds the [Beta Decision Dashboard](./growth-audit-beta-decision-dashboard.md) and [Weekly Offer Review](./weekly-offer-review.md).

---

## 1. CRM Structure: The Two Tabs

### Tab 1: Target Accounts (Qualification & Outreach)
*Purpose: To identify and qualify high-conviction accounts before outreach.*

| Column | Field Definition | Allowed Values / Range |
| :--- | :--- | :--- |
| **Account/Name** | Identifier for the founder or company. | Text |
| **Profile Link** | Link to LinkedIn/X profile for context. | URL |
| **Segment** | Buyer segment from [Target Rubric](./growth-audit-target-account-rubric.md). | Tech Founder, SME, Operator, Anti-AI |
| **Expertise (0-2)** | Depth of domain authority. | 0 (Generic) - 2 (Deep) |
| **Proof (0-2)** | Availability of inspectable artifacts. | 0 (None) - 2 (Verifiable) |
| **Bottleneck (0-2)** | Evidence of distribution drag. | 0 (None) - 2 (Random Acts) |
| **Alignment (0-2)** | Values taste/judgment over magic. | 0 (Magic Button) - 2 (Taste) |
| **Cadence (0-2)** | Existing publishing activity level. | 0 (Inactive) - 2 (Consistent/Heavy) |
| **Total Fit Score** | Calculated sum of the 5 dimensions above. | 0 - 10 |
| **Current Stage** | Lifecycle stage of the account. | See Section 2 |
| **Last Contact** | Date of the most recent interaction. | YYYY-MM-DD |
| **Next Action** | The immediate next manual task. | Text |

### Tab 2: Conversation Tracker (Signal & Offer Intelligence)
*Purpose: To capture exact market language and objections from interactions.*

| Column | Field Definition | Allowed Values / Range |
| :--- | :--- | :--- |
| **Date** | Date of the interaction. | YYYY-MM-DD |
| **Source** | Origin of the conversation. | Post #, Warm Outbound, Referral, DM |
| **Account** | Link to the record in Tab 1. | Reference |
| **Signal Score** | Quality of the interaction intent. | 1 (Vanity) - 5 (High Intent) |
| **Exact Language** | Verbatim phrasing used by the buyer. | Text (Quotes) |
| **Objection** | Primary blocker identified. | See [Objection Bank](./growth-audit-objection-bank.md) |
| **Value Signal** | Which part of the audit resonated? | POV, Proof, Loops, Roadmap |
| **Price Hypothesis** | Pricing tier tested. | Wedge, Operator, Architect |
| **Price Reaction** | Exact language regarding cost. | Text (Quotes) |
| **Price Friction** | Intensity of price resistance. | 1 (Low) - 5 (Hard Pass) |
| **Anchor/Alternative** | What they compared the Audit to. | Text (e.g., Consultant, Course, DIY) |
| **Decision** | The outcome of the conversation. | Yes, Maybe, No, Nurture |
| **Confidence** | Reliability of this specific signal. | Verified, Observed, Anecdotal, Hypothesis |

---

## 2. Lifecycle Stages

Accounts move through these stages linearly. Do not skip stages.

1.  **Target:** Identified but not yet researched.
2.  **Researching:** Deep qualification using the [Target Rubric](./growth-audit-target-account-rubric.md).
3.  **Outreach Sent:** Initial message or public reply sent.
4.  **In Conversation:** Two-way dialogue active (DMs or public replies).
5.  **Discovery Call:** 15-minute diagnostic call booked or completed.
6.  **Won (Beta):** Payment received for the Growth Audit.
7.  **No-Fit Nurture:** Disqualified for now; sent to [Readiness Guide](../catalog/growth-kit/growth-audit-no-fit-nurture.md).
8.  **Disqualified:** Hard no-fit (e.g., "Magic Button" seeker).

---

## 3. Privacy & Redaction Rules
*For any data moved from the CRM to public "Build-in-Public" posts or Lab Notes.*

- **Anonymization:** Replace real names with "Founder A" or "A Technical SaaS Founder."
- **Data Scrubbing:** Remove specific revenue numbers, employee counts, or niche-identifying details.
- **Link Safety:** Never share URLs to the private CRM or screenshots that haven't been redacted.
- **Internal Only:** The "Price Reaction" and "Exact Language" fields are for internal lab use only.

---

## 4. Weekly Rollup Calculations
*Manual formulas for the Friday [Beta Decision Dashboard](./growth-audit-beta-decision-dashboard.md) review.*

1.  **Total Conversations:** Count of all entries in Tab 2 for the week.
2.  **Qualified Conversations:** Count of Tab 2 entries where **Signal Score >= 4**.
3.  **Avg Price Friction:** Average of the **Price Friction (1-5)** column for the week.
4.  **Conversion Rate (Beta):** (Won Beta / Total Discovery Calls) * 100.
5.  **Dominant Objection:** The [Objection Bank] label appearing most frequently in Tab 2.

---

## 5. Dashboard Feed Instructions
*How to move data from the CRM to the [Offer-Change Log](./growth-audit-offer-change-log.md).*

- **If Price Friction > 4** (3+ times): Trigger the "Reduce Price" or "Change ICP" action in the [Pricing Matrix](./growth-audit-pricing-test-matrix.md).
- **If "Exact Language" repeats:** Copy the verbatim phrases into the [Offer-Change Log](./growth-audit-offer-change-log.md) to update headlines/copy.
- **If Signal Score is low (< 2)** across a segment: Update the [Target Rubric](./growth-audit-target-account-rubric.md) to disqualify that segment.

---
**References:**
- [Growth Audit: Target Account Rubric](./growth-audit-target-account-rubric.md)
- [Growth Audit: Beta Conversation Tracker](./growth-audit-beta-conversation-tracker.md)
- [Growth Audit: Post-Launch Triage Guide](./growth-audit-post-launch-triage-guide.md)
- [Growth Audit: Pricing Test Matrix](./growth-audit-pricing-test-matrix.md)
