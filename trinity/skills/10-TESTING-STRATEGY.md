# Skill: Testing AI Products

## Types of Tests

### 1. Unit Tests
- Test individual functions
- Mock external APIs
- Fast, deterministic
- Run on every push

### 2. Integration Tests
- Test component interactions
- Test API endpoints
- Test database operations
- Use test database, not production

### 3. E2E Tests
- Test full user flows
- Browser automation (Playwright, Cypress)
- Real user scenarios
- Slower, run on merge

### 4. LLM-Specific Tests
- **Output quality**: Compare to golden answers
- **Prompt injection**: Try to break prompts
- **Hallucination**: Verify factual claims
- **Consistency**: Same input, similar output
- **Edge cases**: Unusual inputs, formatting
- **Cost**: Track spend per endpoint

## Test Data
- Curated dataset of real-world inputs
- Edge cases and corner cases
- Adversarial examples
- Synthetic but realistic data

## Automation
- Pre-commit hooks: Lint, format, unit tests
- CI/CD: Integration and E2E tests
- Nightly: Full regression
- Weekly: Performance and load tests

## Coverage
- Aim for > 80% code coverage
- Focus on critical paths
- Include negative test cases
- Test with realistic data volumes
