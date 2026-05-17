# Skill: Data Pipeline Architecture

## Components
1. **Ingestion**: Collect raw data from sources
2. **Processing**: Clean, transform, enrich
3. **Storage**: Staging, warehouse, lake
4. **Serving**: APIs, dashboards, ML models
5. **Orchestration**: Schedule and manage workflow

## Example Pipeline (Customer Data)
```
Raw Data (CRM, web, support)
→ Ingestion (SQS/Kafka)
→ Processing (Lambda/Spark)
→ Warehouse (Snowflake/BQ)
→ Transformation (dbt)
→ API (GraphQL/REST)
→ Dashboard (Metabase/Superset)
```

## Orchestration Tools
- Airflow
- Prefect
- Dagster
- Temporal
- AWS Step Functions

## Best Practices
- Idempotency: Same input = same output
- Observability: Log errors, track lineage
- Versioning: Pin dependency versions
- Testing: Test at every stage
- Failure handling: Retry, DLQs, alerts

## Scalability
- Partition data by date/customer
- Use serverless where possible
- Cache intermediate results
- Parallelize independent tasks
- Compress data for storage
