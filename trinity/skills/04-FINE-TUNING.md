# Skill: Fine-Tuning Models

## When to Fine-Tune
- Base model doesn't understand your domain
- Need consistent formatting/structure
- Want to reduce prompt length (hard-code knowledge)
- Have proprietary data that improves performance

## When NOT to Fine-Tune
- Problem can be solved with prompting
- Budget is limited ($0.002 vs $3+ per 1K tokens)
- Data is insufficient (< 100 examples)

## Process
1. Prepare dataset (examples with input + expected out)
2. Format for chosen platform (JSONL for OpenAI)
3. Upload to platform
4. Start training job
5. Evaluate with held-out test set
6. Deploy and iterate

## OpenAI Fine-Tuning (GPT-4)
```bash
openai api fine_tunes.create -t data.jsonl -m gpt-4
```

## Data Format
```json
{"messages": [
    {"role": "system", "content": "You are a cold email expert."},
    {"role": "user", "content": "Write a cold email to Sarah at TechCorp about AI automation."},
    {"role": "assistant", "content": "Subject: Quick question about AI automation at TechCorp..."}
]}
```

## Evaluation
- Compare fine-tuned vs. base model on test set
- Measure accuracy, relevance, format adherence
- A/B test with real users
