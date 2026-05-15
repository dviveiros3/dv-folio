# Automated Backup System

## Data Types
- **Source code**: GitHub, mirrored to secondary repo
- **Databases**: Daily encrypted backups, 30-day retention
- **Customer data**: Real-time replication, point-in-time recovery
- **Marketing assets**: Cloud storage with versioning
- **Documentation**: Git-based, versioned history
- **Financial records**: Daily export to secure storage

## Backup Schedule
| Data | Frequency | Retention | Location |
|------|-----------|-----------|----------|
| Code | Real-time | Indefinite | GitHub + GitLab |
| Database | Daily | 30 days | AWS S3 + Wasabi |
| Customer data | Hourly | 7 days | Multi-region AWS |
| Assets | Weekly | 90 days | Cloudflare R2 |
| Financials | Daily | 7 years | Encrypted local + cloud |

## Disaster Recovery
- **RTO (Recovery Time Objective)**: 4 hours
- **RPO (Recovery Point Objective)**: 1 hour
- Quarterly drills to validate
- Documented runbooks for each scenario
