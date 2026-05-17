# Implementation Guide: Trinity Executive Kit

## Overview
This guide provides the tactical steps to implement the Trinity Executive Kit within your organization. The goal is to move from "manual reporting" to an "AI-enhanced intelligence engine" with minimal friction.

## 1. Required Inputs
To get the most out of the AI Skills, you need to provide high-fidelity inputs. We recommend setting up the following "Input Channels":

- **The Metrics Feed:** A weekly export or screenshot of your primary dashboard (HubSpot, Stripe, etc.).
- **The Sentiment Feed:** A 5-minute Friday morning Slack thread where team leads post their "Top 3."
- **The Strategic Feed:** A "Brain Dump" document (Notion or a simple notes app) where the founder records observations and concerns throughout the week.

## 2. Setting up the Skills
1.  **Select your LLM:** We recommend **Claude 3.5 Sonnet** or **GPT-4o** for their reasoning capabilities and adherence to structured output.
2.  **Create "Custom Instructions" or "System Prompts":** Copy the content from the `skills/` directory into your LLM's system instructions or save them as "Saved Prompts."
3.  **Create a Workspace:** If using ChatGPT, create a "GPT" specifically for "Acme Executive Reporting." If using Claude, create a dedicated "Project."

## 3. The Weekly Cadence
A successful executive reporting engine relies on a consistent rhythm:

- **Thursday EOD:** Remind team leads to submit their weekly bullets.
- **Friday 10:00 AM:** Collect metrics and team updates.
- **Friday 1:00 PM:** Run the **Weekly Executive Reporting Engine** workflow.
- **Friday 4:00 PM:** Executive review and final polish.
- **Monday 9:00 AM:** Distribute the report to the leadership team.

## 4. Automation (Optional)
While this kit can be used manually, you can increase leverage through automation:

- **Input Collection:** Use **Make.com** or **Zapier** to automatically pull Friday morning Slack updates into a Notion database.
- **Reporting:** Use the **OpenAI/Anthropic API** to automatically generate Draft #1 of the report as soon as the final team update is submitted.
- **Distribution:** Automate the posting of the final report to a specific Slack channel.

## 5. The Review Process (Human-in-the-Loop)
**Crucial:** Never ship AI-generated reports without a human review. The review should focus on:
1.  **Accuracy:** Does the data match the source?
2.  **Sensitivity:** Are there internal politics or HR issues that the AI missed or mischaracterized?
3.  **Nuance:** Does the "Focus for Next Week" align with the founder's most recent (unrecorded) strategic shifts?

## 6. Getting Started
Start small. Don't try to implement all 5 skills and 2 workflows at once.
1.  **Week 1:** Start with the **Weekly Operator Report** using manual inputs.
2.  **Week 2:** Introduce the **Decision Memo** framework for at least one critical choice.
3.  **Month 1:** Refine the inputs and explore basic automation.
