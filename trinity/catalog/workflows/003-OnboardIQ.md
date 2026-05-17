# Workflow: OnboardIQ
## Customer Onboarding Automation

### Description
Guides new customers through product setup with automated checklists, milestone tracking, and proactive intervention when stuck.

### Tools Used
- Make.com / Zapier
- Notion / Airtable (checklist)
- Intercom / Crisp (in-app chat + guides)
- Stripe (billing events)
- Slack (alerts)
- HubSpot CRM
- Loom (video guides)

### Trigger
New customer payment confirmed (Stripe webhook)

### Steps
1. Payment confirmed → welcome email + account setup
2. Day 0: Send Loom video link for "5-minute setup"
3. Day 1: Check if activation complete (API call to app)
4. If not activated → send tips email + offer call
5. Day 3: Check completion of key features
6. If stuck → in-app guide + Slack alert to Success
7. Day 7: Usage review + personalized recommendations
8. Day 14: Feature deep-dive based on industry
9. Day 21: Check expansion opportunity (usage increasing?)
10. Day 30: NPS survey + review request

### Milestone Definitions
| Milestone | Timeframe | Success Metric |
|-----------|-----------|----------------|
| Account created | Hour 0 | Login successful |
| First value | Day 3 | Core action completed |
| Regular use | Week 2 | 3+ sessions |
| Power user | Month 1 | Advanced features used |
| Advocate | Month 2 | Referral or review |

### Intervention Triggers
- No login after 3 days → checkup email
- No core action after 7 days → SUCCESS call
- Error rate > 5% → ENG alert
- Cancellation request → retention offer

### Deliverables
1. Onboarding sequence template (Make/Zapier)
2. Milestone tracking system
3. Intervention playbook
4. Success metrics dashboard
5. Pricing: $199 (package) or $299/mo (managed)
