# Skill: KPI Extraction

## Objective
Identify and extract key performance indicators (KPIs) from unstructured or semi-structured data sources like management presentations, board decks, or financial summaries.

## Prompt Specification
"You are a financial analyst specializing in [Industry, e.g., B2B SaaS]. Review the following document and extract the following KPIs for the last 3 fiscal periods.

### Required Metrics:
1. **Revenue Metrics:** ARR, GAAP Revenue, Growth Rate (YoY/QoQ).
2. **Efficiency Metrics:** Magic Number, Rule of 40, Burn Multiple.
3. **Customer Metrics:** CAC, LTV, Churn (Logo & Net Revenue), NDR/GRR.
4. **Profitability:** Gross Margin, EBITDA Margin.

### Formatting:
- Present the data in a markdown table.
- If a metric is not explicitly stated, attempt to calculate it from available data or mark as 'Not Found'.
- Cite the page number or section where the data was found.

### Quality Check:
- Flag any inconsistencies (e.g., ARR that doesn't align with stated growth rates).
- Highlight metrics that are significantly above or below industry benchmarks for a [Stage, e.g., Series B] company."

## Usage Note
Ensure all PII (Personally Identifiable Information) is redacted from the input documents before processing.
