# Skill: Prompt Engineering Mastery

## Foundation
1. Always provide clear context
2. Use specific, unambiguous instructions
3. Give examples (few-shot prompting)
4. Structure output with delimiters
5. Specify tone, format, and length

## Techniques
- **Chain of Thought**: Break problem into steps
- **Tree of Thoughts**: Explore multiple reasoning paths
- **Revision Prompting**: Ask model to critique and improve
- **Role Assignment**: "You are an expert..."
- **Constraint Setting**: "In under 500 words..."

## Anti-patterns
- Vague: "Write something good"
- Over-ambitious: "Write a novel"
- No examples when they would help
- Expecting perfect formatting without instruction

## Testing
- Run prompt 3 times with same inputs
- Check for consistency and quality
- Test edge cases and inputs
- Measure output quality with clear criteria

## Library of Prompts
### Email Generation
Write a cold email to {name} at {company} about {topic}.
Rules:
- Keep under 150 words
- Mention 1 specific detail from their profile
- Include a clear but soft ask
- End with a question

### Content Summarization
Summarize the following text in 3 bullet points focusing on key takeaways.
Text: {content}

### Code Review
Review the following {language} code for bugs, security issues, and optimization opportunities.
Code: {code}
Output format:
- Issues found (with line numbers)
- Severity (critical/high/medium/low)
- Suggested fix

### Data Extraction
Extract the following information from the text and format as JSON.
Fields needed: {fields}
Text: {text}
