/**
 * EMAIL SERVICE INTEGRATION
 * Connect to Resend/SendGrid for actual email sending
 */

// Install: npm install resend
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send personalized email sequence
 */
async function sendEmailSequence({ to, firstName, company, platform = 'Google/Facebook/LinkedIn' }) {
  try {
    // Email 1: Initial outreach
    const email1 = {
      from: 'Daniel <daniel@yourdomain.com>',
      to: to,
      subject: `Quick question about ${company}'s ad spend`,
      html: `
        <p>Hey ${firstName},</p>
        
        <p>Noticed ${company} is running ads on ${platform}.</p>
        
        <p>Quick question: Do you know your TRUE CAC by channel? Not last-click, but actual multi-touch attribution?</p>
        
        <p>Most companies I talk to spending $50k+/month are shocked when I show them:</p>
        <ul>
          <li>30-40% of their ad spend is wasted on underperforming campaigns</li>
          <li>They can't attribute revenue to specific campaigns</li>
          <li>They're making 6-figure decisions on incomplete data</li>
        </ul>
        
        <p>I built a system that fixes this. Recently helped a client reduce CAC by 47% in 30 days.</p>
        
        <p><strong>Offer:</strong> I'll reduce your CAC by 30% in 30 days, or I work free until we hit it.</p>
        
        <p>Worth a 15-min call to show you what I found in your accounts?</p>
        
        <p>Best,<br>Daniel</p>
        
        <p>P.S. - Offering free audit to 3 companies this week. <a href="https://calendly.com/daniel-viveiros/15min-intro">Book here</a></p>
      `
    };
    
    const result = await resend.emails.send(email1);
    console.log(`✅ Email sent to ${to}: ${result.id}`);
    return result;
    
  } catch (error) {
    console.error(`❌ Failed to send to ${to}:`, error.message);
    throw error;
  }
}

module.exports = { sendEmailSequence };
