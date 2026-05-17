# Trinity Product Catalog

Welcome to the Trinity Product Catalog. This is not a dump of prompts; it is a library of **operational capabilities**.

## Catalog Hierarchy

### 1. Skills (Atomic)
Modular, reusable AI capabilities.
- **Form**: Prompt libraries, Agent definitions, Tool specs.
- **Value**: High-speed utility for specific tasks.
- **Example**: Cold Email Architect, SQL Query Optimizer.

### 2. Workflows (Automated)
Connected sequences that automate a business process.
- **Form**: n8n/Make blueprints, Python scripts, API chains.
- **Value**: Reliable, hands-off execution of recurring tasks.
- **Example**: LeadHarvest (LinkedIn to CRM), NurtureFlow.

### 3. Kits (Bundled)
Complete operational packages designed for a specific buyer and outcome.
- **Form**: Bundles of skills, workflows, and implementation playbooks.
- **Value**: Transformation of a business function.
- **Example**: Trinity Growth Kit.

### 4. Implementations (Premium)
Bespoke services to integrate Trinity assets into a unique enterprise environment.
- **Form**: 2-week sprints, Fractional AI Leadership, Custom builds.
- **Value**: De-risked innovation and zero-friction adoption.

---

## Flagship Kits

### 1. Trinity Growth Kit
**Buyer**: Founders and Heads of Growth at Series A-C startups.
**Promise**: A self-replenishing sales pipeline and content machine that runs on 2 hours of human input per week.
**Included Assets**:
- `LeadHarvest` Workflow (Automated prospecting)
- `ContentForge` Skill (Multi-channel content repurposing)
- `SalesScripter` App (Personalized outreach at scale)
- GTM Engine Template
**Example Outputs**: 50+ high-quality leads per week, 30 days of social content generated from one interview.
**Expected ROI**: 10x reduction in CAC; 5-10 additional qualified meetings per month.
**Implementation Upsell**: "Growth Engine Setup" — We configure the entire stack and train your SDRs in 14 days.

### 2. Trinity Executive Kit
**Buyer**: C-Suite Executives and Partners at high-growth firms.
**Promise**: A digital "Chief of Staff" that filters noise, prepares briefings, and manages your professional brand.
**Included Assets**:
- `MeetScribe` Skill (Strategic meeting intelligence)
- `EmailSage` App (Inbox zero + draft generation)
- `BrandGuard` Skill (Reputation monitoring)
- Executive Second Brain (Obsidian/Notion template)
**Example Outputs**: 5-minute briefings for every meeting, automated LinkedIn presence that sounds exactly like you.
**Expected ROI**: 15+ hours of deep work recovered per week; 100% responsiveness on critical communications.
**Implementation Upsell**: "The Executive Shadowing" — 1 week of intensive setup to tune all AI models to your specific voice and priorities.

### 3. Trinity PE Intelligence Kit
**Buyer**: Private Equity Associates and Partners.
**Promise**: Compressed due diligence cycles and automated portfolio health monitoring.
**Included Assets**:
- `DocuMind` Skill (Massive document set analysis)
- `InsightPulse` Workflow (Competitor & market sentiment tracking)
- `LegalLens` Skill (Risk and clause extraction)
- Board-ready Report Templates
**Example Outputs**: Red-flag report for 500+ page data rooms in 10 minutes; weekly portfolio performance summaries.
**Expected ROI**: 80% reduction in manual DD time; earlier identification of portfolio risks/opportunities.
**Implementation Upsell**: "Intelligence Customization" — Integration with proprietary data sources and custom investment thesis modeling.

---

## Legacy Asset Migration

To maintain a product-first architecture, the following legacy folders are being refactored:

1. **`trinity/skills/`** → Migrated to **`trinity/catalog/skills/`**. These are now treated as "Atomic Products" rather than just reference files.
2. **`trinity/workflows/`** → Migrated to **`trinity/catalog/workflows/`**. Every workflow must now include a "System Requirements" and "Configuration Guide".
3. **`trinity/products/`** → Renamed/Migrated to **`trinity/catalog/apps/`**. These represent the UI-driven components of the Kits.

Existing files in these folders are being audited for "Product Grade" quality:
- Must have clear inputs/outputs.
- Must have a "Value Proposition" in the header.
- Must be version-controlled.
