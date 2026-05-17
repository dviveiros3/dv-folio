# Workflow: LeadHarvest
## Automated Lead Generation Pipeline

### Description
Fully automated system that finds, enriches, and scores leads from LinkedIn and company websites, then adds them to your CRM.

### Tools Used
- LinkedIn Sales Navigator API
- Hunter.io / Apollo.io
- Clay.com / Clearbit for enrichment
- Make.com / n8n for orchestration
- HubSpot / Pipedrive / Salesforce
- Google Sheets as intermediate DB
- GPT-4 for email/phone generation

### Trigger
Manual (click button) or scheduled (daily at 9 AM)

### Steps
1. Search LinkedIn by criteria (title, company size, industry, location)
2. Extract profile URLs
3. Enrich with contact info (email, phone, social)
4. Scrape company website for context
5. Generate personalized icebreaker via AI
6. Score lead (0-100) based on fit
7. Add to Google Sheet (staging)
8. If score > 70, create HubSpot contact + assign to SDR
9. Send Slack alert to SDR with research summary
10. Log activity in CRM

### Error Handling
- Invalid profile → skip, log error
- API rate limit → retry with backoff (1, 5, 15, 60 min)
- Missing email → flag for manual research
- Duplicate → skip, update enrichment

### Cost Per Lead
- LinkedIn: ~$0.02 per search
- Hunter.io: ~$0.01 per email
- AI enrichment: ~$0.05 per contact
- Total: ~$0.10 per enriched lead

### Expected Results
- 500 leads/day automated
- 40% enriched with email
- 15% flagged as high-value (score > 70)
- SDR saves 4 hours per day

### Deliverables
1. Make.com scenario JSON export
2. Google Sheet template with scoring formula
3. n8n workflow file
4. Documentation and video walkthrough
5. Pricing: $149 (one-time) or $49/mo (done-for-you service)
