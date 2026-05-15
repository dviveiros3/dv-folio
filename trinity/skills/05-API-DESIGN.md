# Skill: API-First Product Design

## Principles
1. **Consistency**: Uniform patterns for all endpoints
2. **Simplicity**: Easy to understand and use
3. **Versioning**: Never break existing integrations
4. **Documentation**: Always up-to-date and complete
5. **Security**: Auth, rate limiting, validation

## RESTful Design
- GET /api/v1/users — List users
- GET /api/v1/users/{id} — Get user
- POST /api/v1/users — Create user
- PUT /api/v1/users/{id} — Update user
- DELETE /api/v1/users/{id} — Delete user

## Response Format
```json
{
    "success": true,
    "data": { ... },
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 100
    }
}
```

## Error Handling
```json
{
    "success": false,
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "Email is required",
        "field": "email"
    }
}
```

## Authentication
- API Keys for server-to-server
- OAuth 2.0 for user-facing apps
- JWT for stateless auth
- Rate limiting per key

## Versioning
- URL: /api/v1/...
- Header: X-API-Version: 2024-01
- Never remove fields, only deprecate
- Maintain old version for 6-12 months
