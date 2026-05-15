# AUTOMATION SCRIPTS - Scale Your Outreach

## 1. Google Apps Script - Auto-Email Follow-up

```javascript
// Google Sheets Script - Auto-send emails from your prospect list
// Go to: Extensions > Apps Script

function sendFollowUpEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Prospects");
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    var email = data[i][2]; // Column C
    var company = data[i][0]; // Column A
    var emailSent = data[i][6]; // Column G - "Email 1 Sent"
    var followUp1Sent = data[i][7]; // Column H - "Follow-up 1 Sent"
    
    // If email exists and Email 1 sent but no follow-up
    if (email && emailSent && !followUp1Sent) {
      sendFollowUpEmail(email, company);
      sheet.getRange(i + 1, 8).setValue(true); // Mark follow-up sent
    }
  }
}

function sendFollowUpEmail(email, company) {
  var subject = "Following up: How [Similar Company] reduced CAC by 47%";
  var body = `Hey,

Following up with a quick case study.

Worked with a company spending $80k/month on ads. They had:
- No idea which campaigns were actually profitable
- Making decisions on last-click only
- Wasting ~$30k/month on underperforming campaigns

In 30 days, we:
1. Fixed broken conversion tracking
2. Implemented multi-touch attribution
3. Reallocated budget to high-performers
4. Set up automated daily reporting

Result: 47% CAC reduction, 73% increase in qualified leads.

Your turn: I can do a free audit of your ad accounts and show you exactly where you're wasting money.

15 minutes. Zero obligation. Just data.

Interested?

Best,
Daniel`;

  MailApp.sendEmail(email, subject, body);
}
```

## 2. Zapier Automation - Auto-Add Leads to Sheet

**Trigger:** New Google Form submission (or Typeform)
**Action:** Add row to Google Sheets prospect list

**OR use Make.com (free tier):**
1. Trigger: LinkedIn new connection
2. Action: Add to Google Sheets
3. Action: Send personalized connection message

## 3. Gmail Templates - Save These NOW

**Setup:** Gmail Settings > Advanced > Templates > Enable

**Template 1: Initial Outreach**
```
Subject: Wasting 30% of your ad spend?

Hey {{FirstName}},

Noticed {{Company}} is running ads on {{Platform}}.

Quick question: Do you know your TRUE CAC by channel? Not last-click, but actual multi-touch attribution?

Most companies I talk to spending $50k+/month are shocked when I show them:
- 30-40% of their ad spend is wasted on underperforming campaigns
- They can't attribute revenue to specific campaigns
- They're making 6-figure decisions on incomplete data

I built a system that fixes this. Recently helped a client reduce CAC by 47% in 30 days.

Offer: I'll reduce your CAC by 30% in 30 days, or I work free until we hit it.

Worth a 15-min call to show you what I found in your accounts?

Best,
Daniel

P.S. - I'm offering a free audit to 3 companies this week. If you're curious, book here: https://calendly.com/daniel-viveiros/15min-intro
```

**Template 2: Follow-up #1**
```
Subject: How [Similar Company] reduced CAC by 47%

{{FirstName}},

Following up with a quick case study.

Worked with a company spending $80k/month on ads. They had:
- No idea which campaigns were actually profitable
- Making decisions on last-click only
- Wasting ~$30k/month on underperforming campaigns

In 30 days, we:
1. Fixed broken conversion tracking
2. Implemented multi-touch attribution
3. Reallocated budget to high-performers
4. Set up automated daily reporting

Result: 47% CAC reduction, 73% increase in qualified leads.

Your turn: I can do a free audit of your ad accounts and show you exactly where you're wasting money.

15 minutes. Zero obligation. Just data.

Interested?

Best,
Daniel
```

## 4. Calendly Automation Setup

**Settings:**
- Buffer time: 5 min before, 10 min after
- Daily limit: 3 calls/day
- Notice time: 2 hours minimum

**Add custom questions:**
1. What's your current monthly ad spend?
   - [ ] <$10k
   - [ ] $10k-$50k
   - [ ] $50k-$100k
   - [ ] $100k+

2. Do you currently track CAC by channel?
   - [ ] Yes, multi-touch
   - [ ] Yes, last-click only
   - [ ] No, but we should
   - [ ] No, and we don't care

3. What's your biggest attribution challenge?
   - [Short text]

**Auto-reminder 1 hour before:**
"Hey {{name}}, excited to chat about reducing your CAC by 30%. I'll be reviewing your current ad setup during our call, so have your ad account access ready if possible. See you soon!"

## 5. Contract Template (DocuSign or PandaDoc)

```
SERVICE AGREEMENT

Client: {{ClientName}}
Provider: Daniel Viveiros

SERVICE: CAC Reduction Program

DELIVERABLES:
- Week 1-2: Audit & Setup
  * Full audit of Google, Facebook, LinkedIn ad accounts
  * Conversion tracking implementation
  * UTM framework deployment
  * Looker Studio dashboard build

- Week 3-4: Attribution & Reporting
  * Multi-touch attribution model setup
  * Lead scoring integration
  * Automated daily/weekly reports
  * Team training

- Ongoing: Optimization
  * Weekly review calls
  * Campaign recommendations
  * Budget reallocation guidance

GUARANTEE: 30% CAC reduction in 30 days or provider works free until achieved.

INVESTMENT:
- Setup: $10,000 (one-time)
- Retainer: $5,000/month (months 2-3 minimum)
- Performance Bonus: 20% of documented ad spend savings

PAYMENT TERMS:
- Setup fee due on signing
- Retainer due monthly in advance
- Performance bonus calculated monthly

CANCELLATION: Either party may cancel with 30 days written notice after initial 3-month term.

SIGNATURES:
____________________  Date: __________
Daniel Viveiros

____________________  Date: __________
{{ClientName}}
```

## 6. Proposal Template (Google Docs)

```
PROPOSAL: CAC Reduction Program for {{CompanyName}}

CURRENT STATE (from discovery call):
- Monthly Ad Spend: ${{spend}}
- Current CAC: ${{cac}}
- Current ROAS: {{roas}}x
- Attribution Method: {{method}}

PROBLEM:
You're spending $X/month but don't know your true CAC by channel. This means:
- You're making 6-figure decisions on incomplete data
- 30-40% of your ad spend is wasted
- You can't scale profitably

SOLUTION:
I'll implement multi-touch attribution and reduce your CAC by 30% in 30 days.

DELIVERABLES:
[List from above]

TIMELINE:
Week 1-2: Audit & Setup
Week 3-4: Attribution & Reporting
Month 2-3: Optimization & Scale

INVESTMENT:
Setup: $10,000
Monthly: $5,000

ROI PROJECTION:
Current monthly waste (30%): $15,000
Annual waste: $180,000
My fee: $20,000 (3 months)
Net savings year 1: $160,000
ROI: 8x

GUARANTEE:
30% CAC reduction in 30 days or I work free.

NEXT STEP:
Sign attached agreement and we start Monday.

Questions?
```

## 7. Follow-up Sequence Automation

**Day 1:** Email #1 sent
**Day 3:** Email #2 auto-sent (case study)
**Day 6:** Email #3 auto-sent (ROI calculator)
**Day 10:** Email #4 auto-sent (video audit offer)
**Day 15:** Email #5 auto-sent (last chance)
**Day 22:** Call directly
**Day 30:** "Still interested?" email

**Setup in Gmail:**
Settings > General > Canned Responses > Enable
Then use Boomerang or MailTrack for scheduling

## 8. Loom Video Audit Script

**Template for 3-min video audits:**

```
[0:00-0:15] Intro
"Hey {{Name}}, I'm Daniel. I spent 15 minutes reviewing {{Company}}'s ad accounts and found some interesting stuff. Let me show you..."

[0:15-1:00] Finding #1
"I noticed your conversion tracking is broken. See this campaign? It shows 0 conversions, but I can tell you're running traffic. You're probably missing 40% of your actual conversions."

[1:00-1:45] Finding #2
"Your top campaign by spend has a ROAS of 1.2x. That's below breakeven. You're literally paying to lose money. Meanwhile, this campaign at 5x ROAS is underfunded."

[1:45-2:30] Finding #3
"No multi-touch attribution. You're making budget decisions on last-click only. LinkedIn is driving 3x more value than this shows, but you can't see it."

[2:30-3:00] Close
"I can fix all of this in 30 days. I'll reduce your CAC by 30% or work free. Book a call: calendly link. Thanks for watching."
```

**Send via email:**
Subject: "Made a 3-min video for you"
Body: "Recorded this for you. Watch here: [Loom link]. If this resonates, let's chat for 15 mins. If not, no hard feelings."

---

**USE THESE TOOLS TO SCALE:**
- Gmail Templates: Instant send
- Zapier: Auto-add leads
- Calendly: Auto-schedule calls
- DocuSign: Auto-contract
- Loom: Async video audits
- Google Sheets: Track everything

**AUTOMATE THE PROCESS, NOT THE RELATIONSHIP.**
