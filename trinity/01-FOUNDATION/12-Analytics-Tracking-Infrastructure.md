# Analytics and Tracking Infrastructure

## Stack
- **Product Analytics**: Mixpanel or Amplitude
- **Web Analytics**: Google Analytics 4 + Plausible
- **Error Tracking**: Sentry
- **Performance**: New Relic or Datadog
- **Conversion**: Hotjar or FullStory
- **Email**: Mailchimp or ConvertKit analytics
- **Revenue**: Stripe analytics + custom dashboard
- **A/B Testing**: Optimizely or VWO
- **SEO**: Ahrefs or SEMrush
- **Social**: Buffer or Hootsuite analytics

## Event Tracking
Define events for each product:
- `funnel_start` — User lands on site
- `email_signup` — Email captured
- `trial_started` — Free trial begins
- `onboarding_step_n` — Completed onboarding step
- `feature_used` — Core feature activated
- `pricing_page_view` — Viewed pricing
- `plan_selected` — Chose a plan
- `checkout_initiated` — Started payment
- `payment_completed` — Successful purchase
- `upgrade_triggered` — Moved to higher tier
- `churn_signal` — Cancellation or downgrade
- `referral_initiated` — Started referral
- `support_ticket` — Created support request
- `nps_submitted` — Gave NPS score

## Dashboards
- **Executive**: Revenue, growth rate, churn, NPS
- **Product**: Feature usage, activation rate, retention
- **Marketing**: CAC, LTV, conversion by channel
- **Engineering**: Uptime, errors, performance, costs
- **Support**: Tickets, resolution time, satisfaction

## Weekly Metrics Review
Every Monday, review:
1. Revenue (vs last week, last month, target)
2. New customers (vs last week, by channel)
3. Churn rate (vs last week, by cohort)
4. Feature activation rate
5. Support ticket volume and sentiment
6. Top 3 opportunities based on data
7. Top 3 risks based on data
