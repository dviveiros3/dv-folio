# Skill: LLM Output Evaluation

## Metrics
1. **Accuracy**: Correctness of factual claims
2. **Relevance**: How well it answers the question
3. **Fluency**: Natural, coherent language
4. **Safety**: No harmful or biased content
5. **Consistency**: Same input, similar output

## Evaluation Methods
- **Human review**: Expert judges on rubric
- **LLM-as-judge**: Compare to golden answer
- **Automated metrics**: BLEU, ROUGE, BERTScore
- **A/B testing**: Real user preference

## Rubric Example (Cold Email)
| Criterion | Weight | Score |
|-----------|--------|-------|
| Personalized | 30% | 1-5 |
| Clear CTA | 25% | 1-5 |
| Professional tone | 20% | 1-5 |
| Under 150 words | 15% | Yes/No |
| Opens with hook | 10% | 1-5 |

## Automated Testing
```python
def test_email_generation():
    email = generate_email(prospect)
    assert len(email) < 150
    assert "{{var}}" not in email  # No unfilled vars
    assert email.endswith("?")  # Ends with question
```

## Continuous Evaluation
- Run test suite on every code change
- Track metrics over time
- Alert on regression
- Compare to baseline and competitors
