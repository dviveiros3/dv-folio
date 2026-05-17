# Trinity Site Information Architecture

## Objective
To design a distinct brand surface for **Trinity** that establishes it as a premier **Applied AI Lab** while serving as a high-conversion **Product Storefront** for AI kits and workflows.

---

## 1. Core Identity & Brand Positioning
- **The Lab**: A place of high-velocity R&D and public experiments.
- **The Forge**: A marketplace for production-ready AI "kits" and workflows.
- **The Authority**: Positioning Daniel as an AI application leader, bridging the gap between raw research and business implementation.
- **Aesthetic**: Brutalist-meets-Scientific. Clean, high-contrast, data-rich but accessible. Not "SaaS blue," but "Lab White" or "Stealth Black."

---

## 2. Integration Routes
| Route | Pros | Cons |
|-------|------|------|
| **`/trinity` (Sub-directory)** | SEO synergy with personal brand; easiest to implement in current Next.js repo. | Might feel like just another page rather than a distinct brand. |
| **`trinity.domain.com` (Subdomain)** | Clear brand separation; preserves SEO link juice; separate deployment possible. | Requires DNS config; slight friction in user journey from main site. |
| **`trinity.ai` / `trinity.lab` (Separate)** | Maximum brand impact; "Venture" feel; total design freedom. | Zero SEO carryover; higher maintenance; disjointed from personal portfolio. |

*Recommendation: Start with `/trinity` for initial speed and SEO, then migrate to a subdomain as the product line matures.*

---

## 3. Site Map & Content Hierarchy

### A. Homepage Sections
1.  **Hero: The Lab Entrance**
    *   *Visual*: Low-latency telemetry feed or interactive AI visualization.
    *   *Copy*: "Trinity: The Applied AI Lab. We build the future of workflows."
    *   *CTA*: [Enter the Lab] (Exhibits) | [Browse the Forge] (Store)

2.  **The Lab (Current Exhibits)**
    *   Horizontal scroll of 3-4 active R&D projects.
    *   "Raw" status: *In-Training, Alpha, Stable.*
    *   Purpose: Establish technical credibility.

3.  **The Forge (Product Showcase)**
    *   Grid of 3 featured AI Kits (e.g., "The Autonomous Content Engine").
    *   Focus on *Time-to-Value* and *Outcome*.
    *   Purpose: Direct monetization.

4.  **Case Studies: Proof of Concept**
    *   "From Lab to Market."
    *   Mini-cards showing ROI/Impact for specific clients.

5.  **Implementation Services**
    *   "Need a Custom Forge?"
    *   CTA for high-ticket consulting/implementation.

6.  **Credibility / Signal**
    *   Investor logos, media mentions, "Powered by" (e.g., Anthropic, OpenAI, LangChain).

---

### B. Product Catalog (The Forge)
*   **Filter Categories**: Content, Data, Operations, Engineering.
*   **Product Cards**:
    *   *Visual*: Abstract technical blueprint of the workflow.
    *   *Stats*: Setup time, API dependencies, estimated ROI.
    *   *Price*: Fixed-fee kits or "Build Request."

---

### C. Lab Exhibit Page (The R&D)
*   **Format**: Blog-meets-Whitepaper.
*   **Components**:
    *   Hypothesis.
    *   Experimental Setup (Stack used).
    *   Live Demo or Video Walkthrough.
    *   "What we learned" section.
    *   *CTA*: "Get notified when this reaches the Forge."

---

### D. Case Study Format
1.  **The Challenge**: The "Before" state (inefficiency).
2.  **The Trinity Solution**: Which Kit/Workflow was deployed?
3.  **The Result**: Hard metrics (e.g., 70% reduction in churn).
4.  **The Workflow**: Link to the Forge kit used.

---

## 4. Implementation CTA Flow
1.  **Surface Level**: "Buy Kit" (Direct checkout).
2.  **Mid Level**: "Customize Kit" (Form with specific requirements).
3.  **High Level**: "Request Lab Implementation" (Full consulting inquiry).
4.  **Outcome**: All leads funnel into a unified CRM/Inbox, categorized by intent.

---

## 5. Technical Requirements for Implementation
*   **CMS**: Needed for Lab Exhibits and Case Studies (Sanity or Payload).
*   **Ecommerce**: Stripe integration for Kit sales.
*   **Visuals**: Framer Motion for "Lab" feel animations.
*   **Telemetry**: Real-time stats components (already partially present in current repo).
