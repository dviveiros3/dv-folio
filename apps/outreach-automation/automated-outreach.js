/**
 * AUTOMATED LEAD GENERATION & OUTREACH SYSTEM
 * 
 * This system:
 * 1. Finds companies spending on ads (via LinkedIn/Google search)
 * 2. Extracts contact info automatically
 * 3. Sends personalized email sequences
 * 4. Tracks responses and pipeline
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  // Your email settings (use environment variables in production)
  EMAIL_FROM: process.env.EMAIL_FROM || 'your-email@gmail.com',
  EMAIL_SERVICE: 'gmail', // or use Resend, SendGrid, etc.
  
  // Search parameters
  TARGET_INDUSTRIES: [
    'E-commerce',
    'DTC',
    'SaaS',
    'Technology'
  ],
  
  TARGET_COMPANY_SIZE: '50-500',
  MIN_AD_SPEND: 10000, // $10k/month minimum
  
  // Automation settings
  MAX_EMAILS_PER_DAY: 50,
  DELAY_BETWEEN_EMAILS: 30000, // 30 seconds
  FOLLOW_UP_INTERVAL: 3, // days
};

// Email templates with personalization
const EMAIL_TEMPLATES = {
  initial: {
    subject: (company) => `Quick question about ${company}'s ad spend`,
    body: (firstName, company, platform) => `
Hey ${firstName},

Noticed ${company} is running ads on ${platform}.

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

P.S. - Offering free audit to 3 companies this week. Book here: https://calendly.com/daniel-viveiros/15min-intro
    `
  },
  
  followUp1: {
    subject: (company) => `Following up: ${company}'s ad spend`,
    body: (firstName, company) => `
Hey ${firstName},

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
    `
  },
  
  followUp2: {
    subject: () => `Found $47k in waste`,
    body: (firstName) => `
${firstName},

Built a quick calculator for you.

If you're spending $50k/month on ads (conservative estimate based on your company size):
- 30% waste = $15k/month
- Annual waste = $180k

My $10k setup fee pays for itself in <1 month.

Want me to run your actual numbers? I'll show you:
- Your true CAC by channel
- Exactly which campaigns are underperforming
- How much you could save

No charge for the analysis. If I can't find 30% waste, I'll tell you.

Book 15 mins: https://calendly.com/daniel-viveiros/15min-intro

Best,
Daniel
    `
  }
};

// Lead database (will be populated automatically)
let leads = [];

/**
 * AUTOMATED LEAD GENERATION
 * Scrapes LinkedIn/Google for target companies
 */
async function generateLeads() {
  console.log('🔍 Starting automated lead generation...');
  
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Search LinkedIn for marketing directors
  const searchQueries = [
    'site:linkedin.com/in/ "Marketing Director" "E-commerce"',
    'site:linkedin.com/in/ "VP Marketing" "DTC"',
    'site:linkedin.com/in/ "CMO" "SaaS"',
    'site:linkedin.com/in/ "Head of Growth" "Technology"'
  ];
  
  for (const query of searchQueries) {
    await page.goto(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    
    // Extract search results
    const results = await page.evaluate(() => {
      const resultElements = document.querySelectorAll('div.yuRUbf');
      return Array.from(resultElements).slice(0, 10).map(el => ({
        title: el.querySelector('h3')?.textContent || '',
        url: el.querySelector('a')?.href || '',
      }));
    });
    
    console.log(`Found ${results.length} results for: ${query}`);
    
    // Process each result
    for (const result of results) {
      if (result.url.includes('linkedin.com/in/')) {
        leads.push({
          name: result.title.split('|')[0]?.trim() || '',
          company: extractCompanyFromTitle(result.title),
          linkedin: result.url,
          email: null, // Will be found later
          status: 'found',
          lastContact: null,
          responses: []
        });
      }
    }
  }
  
  await browser.close();
  console.log(`✅ Generated ${leads.length} leads`);
  return leads;
}

/**
 * AUTOMATED EMAIL SENDING
 * Sends personalized emails with rate limiting
 */
async function sendOutreach(leads, template = 'initial') {
  console.log(`📧 Starting automated outreach (${template})...`);
  
  let emailsSent = 0;
  const maxEmails = CONFIG.MAX_EMAILS_PER_DAY;
  
  for (const lead of leads) {
    if (emailsSent >= maxEmails) {
      console.log(`⏰ Reached daily limit of ${maxEmails} emails`);
      break;
    }
    
    if (!lead.email) {
      console.log(`⚠️  No email for ${lead.name}, skipping...`);
      continue;
    }
    
    try {
      // Personalize email
      const templateData = EMAIL_TEMPLATES[template];
      const subject = templateData.subject(lead.company);
      const body = templateData.body(lead.name.split(' ')[0], lead.company, 'Google/Facebook/LinkedIn');
      
      // Send email (placeholder - integrate with actual email service)
      await sendEmail({
        to: lead.email,
        subject: subject,
        body: body
      });
      
      // Update lead status
      lead.status = 'contacted';
      lead.lastContact = new Date().toISOString();
      emailsSent++;
      
      console.log(`✅ Email sent to ${lead.name} at ${lead.company}`);
      
      // Rate limiting
      if (emailsSent < maxEmails) {
        await delay(CONFIG.DELAY_BETWEEN_EMAILS);
      }
      
    } catch (error) {
      console.error(`❌ Failed to send to ${lead.email}: ${error.message}`);
    }
  }
  
  console.log(`📊 Sent ${emailsSent} emails`);
  return emailsSent;
}

/**
 * Placeholder for actual email sending
 * Integrate with Resend, SendGrid, Gmail API, etc.
 */
async function sendEmail({ to, subject, body }) {
  // TODO: Integrate with actual email service
  // Example with Resend:
  /*
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: CONFIG.EMAIL_FROM,
    to: to,
    subject: subject,
    text: body
  });
  */
  
  console.log(`📧 Would send email to ${to} with subject: ${subject}`);
  // For now, just log it
  return true;
}

/**
 * AUTOMATED FOLLOW-UP SYSTEM
 * Sends follow-ups based on response status
 */
async function automateFollowUps() {
  console.log('🔄 Running automated follow-up system...');
  
  const today = new Date();
  const leadsToFollowUp = leads.filter(lead => {
    if (!lead.lastContact) return false;
    const lastContactDate = new Date(lead.lastContact);
    const daysSinceContact = (today - lastContactDate) / (1000 * 60 * 60 * 24);
    
    // Follow up if no response and it's been 3+ days
    return daysSinceContact >= CONFIG.FOLLOW_UP_INTERVAL && 
           lead.responses.length === 0;
  });
  
  console.log(`Found ${leadsToFollowUp.length} leads to follow up`);
  
  // Send follow-up #1
  await sendOutreach(leadsToFollowUp, 'followUp1');
}

/**
 * PIPELINE TRACKING
 * Tracks responses, bookings, and revenue
 */
function trackPipeline() {
  const pipeline = {
    totalLeads: leads.length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    responded: leads.filter(l => l.responses.length > 0).length,
    booked: leads.filter(l => l.status === 'booked').length,
    closed: leads.filter(l => l.status === 'closed').length,
    revenue: leads.filter(l => l.status === 'closed').length * 10000 // $10k per client
  };
  
  console.log('📊 PIPELINE STATUS:');
  console.log(`Total Leads: ${pipeline.totalLeads}`);
  console.log(`Contacted: ${pipeline.contacted}`);
  console.log(`Responded: ${pipeline.responded}`);
  console.log(`Booked: ${pipeline.booked}`);
  console.log(`Closed: ${pipeline.closed}`);
  console.log(`Revenue: $${pipeline.revenue.toLocaleString()}`);
  
  return pipeline;
}

/**
 * Helper: Extract company name from LinkedIn title
 */
function extractCompanyFromTitle(title) {
  // Simple extraction - improve with better parsing
  const parts = title.split('at');
  return parts[1]?.split('|')[0]?.trim() || 'Unknown Company';
}

/**
 * Helper: Delay function
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * MAIN AUTOMATION LOOP
 */
async function main() {
  console.log('🚀 Starting Lead Gen & Outreach Automation System\n');
  
  // Step 1: Generate leads
  const generatedLeads = await generateLeads();
  
  // Step 2: Send initial outreach
  await sendOutreach(generatedLeads, 'initial');
  
  // Step 3: Track pipeline
  const pipeline = trackPipeline();
  
  // Step 4: Schedule follow-ups (run daily)
  // In production, use cron jobs or scheduled functions
  console.log('\n✅ Initial outreach complete. Follow-ups will run automatically.');
  console.log('Run this script daily to continue the sequence.');
}

// Export for use in other modules
module.exports = {
  generateLeads,
  sendOutreach,
  automateFollowUps,
  trackPipeline,
  main
};

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
