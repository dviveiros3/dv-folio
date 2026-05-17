# Skill: LLM Security

## Core Risks
- Prompt injection: Malicious input overriding system prompt
- Data leakage: Training data or PII in outputs
- Jailbreaking: Bypassing safety filters
- Indirect prompts: Hidden instructions in user data
- Training data extraction: Recovering data from model

## Mitigation Strategies
1. **Input Sanitization**
   - Validate and sanitize all user inputs
   - Use allow-lists for commands and data
   - Escape special characters

2. **Output Validation**
   - Check for leakage of PII or secrets
   - Scan for harmful content
   - Limit output length

3. **Access Control**
   - Limit model capabilities per user
   - Implement rate limiting
   - Log all model interactions
   - Alert on suspicious patterns

4. **Prompt Engineering**
   - Separate user content from instructions
   - Use delimiters to mark user input
   - Include system instructions that override attempts
   - Consider prompt injection tests

## Testing
- Attempt prompt injection in test suite
- Test with known jailbreak attempts
- Review logs for anomalies
- Penetration test your LLM integration

## Guardrails
- Content filtering (profanity, PII, toxicity)
- Output formatting validation
- Rate limiting and abuse detection
- Human review for sensitive use cases