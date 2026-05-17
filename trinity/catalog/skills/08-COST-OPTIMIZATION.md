# Skill: LLM Cost Optimization

## Strategies
1. **Right-size model** — Use cheapest model that meets quality bar
2. **Reduce context** — Send only necessary context, not full history
3. **Cache** — Cache identical requests (especially good for repeated queries)
4. **Batch** — Process multiple requests together where possible
5. **Prompt compression** — Shorter, clearer prompts cost less
6. **Output limit** — Set max_tokens to realistic values
7. **Streaming** — Use streaming to show partial results
8. **Local models** — Run small models on your own hardware

## Tracking
- Log every API call with cost
- Monitor cost per user and per task
- Set spending alerts and hard limits
- Compare actual vs. projected

## Benchmarks Per Task Type
| Task | Model | Avg Cost | Notes |
|------|-------|----------|-------|
| Classification | gpt-3.5-turbo | $0.002 | Simple, short response |
| Summarization | gpt-3.5-turbo | $0.005 | Short input, short output |
| Generation (short) | gpt-3.5-turbo | $0.01 | 150 words |
| Generation (long) | gpt-4 | $0.05-0.10 | Complex, detailed output |
| Reasoning | gpt-4 | $0.03 | Step-by-step, mathematical |
| Code generation | gpt-4 | $0.05 | Test cases, comments |
| Multimodal | gpt-4-vision | $0.01-0.03 | Image analysis |

## Cost per 1K users/month
| Scenario | Est. Monthly Cost |
|----------|-------------------|
| Light (100 interactions) | $50-100 |
| Medium (1K interactions) | $500-1,000 |
| Heavy (10K interactions) | $5,000-10,000 |

## Calculation Example
100 users × 50 requests/day × 30 days = 150K requests
If $0.01/request = $1,500/month
