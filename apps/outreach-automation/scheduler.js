/**
 * AUTOMATION SCHEDULER
 * Runs lead generation and outreach daily
 * Use node-cron or serverless scheduled functions
 */

const cron = require('node-cron');
const { main } = require('./automated-outreach');

// Schedule: Run every day at 9 AM
cron.schedule('0 9 * * *', async () => {
  console.log('🕘 Running daily outreach automation...');
  await main();
});

// Schedule: Run follow-ups every day at 2 PM
cron.schedule('0 14 * * *', async () => {
  console.log('🕑 Running daily follow-up sequence...');
  const { automateFollowUps } = require('./automated-outreach');
  await automateFollowUps();
});

console.log('✅ Scheduler started. Waiting for next run...');
console.log('📅 Daily lead gen: 9:00 AM');
console.log('📅 Daily follow-ups: 2:00 PM');
