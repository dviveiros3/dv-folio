# Version Control Strategy

## Repository Structure
```
trinity/
├── catalog/                 # Product Catalog (Skills, Workflows, Kits, Apps)
│   ├── skills/
│   ├── workflows/
│   ├── apps/
│   └── kits/
├── playbooks/               # Playbook content repos
├── marketing/               # Marketing materials
├── shared/                  # Shared components and utilities
├── docs/                    # Central documentation
└── .github/                 # CI/CD workflows
```

## Branch Strategy
- `main` — Production-ready, always deployable
- `develop` — Integration branch, feature aggregation
- `feature/TICKET-description` — New features
- `bugfix/TICKET-description` — Bug fixes
- `hotfix/TICKET-description` — Production hotfixes
- `release/vX.Y.Z` — Release preparation

## Versioning (SemVer)
- `MAJOR` — Breaking changes, new product category
- `MINOR` — New features, new products within category
- `PATCH` — Bug fixes, minor improvements

## Commit Convention
```
feat: add new feature
fix: resolve specific issue
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add or update tests
chore: maintenance tasks
```

## Release Process
1. Create `release/vX.Y.Z` from `develop`
2. Run full test suite
3. Update version numbers and CHANGELOG
4. Deploy to staging
5. Run smoke tests
6. Merge to `main` and tag
7. Deploy to production
8. Monitor for 24 hours

## Monorepo vs Multi-Repo
- Use monorepo for shared components and tooling
- Use separate repos for independently deployable apps
- Use submodules or packages for shared libraries
