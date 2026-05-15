# Shared Component Library

## Purpose
Central repository for reusable components, utilities, and templates used across all Trinity products.

## Structure
```
shared/
├── components/
│   ├── ui/                    # React/Vue components
│   ├── prompts/               # Reusable prompt templates
│   ├── integrations/          # API client wrappers
│   └── animations/            # Motion and transitions
├── utilities/
│   ├── api/                   # API helper functions
│   ├── auth/                  # Authentication utilities
│   ├── validation/            # Input validation
│   ├── formatting/            # Data formatting
│   └── testing/               # Test helpers
├── templates/
│   ├── landing-pages/         # Landing page templates
│   ├── email-templates/       # Email templates
│   ├── report-templates/      # Report and PDF templates
│   └── presentation/         # Slide deck templates
├── styles/
│   ├── themes/                # CSS/SCSS theme files
│   ├── animations/            # CSS animations
│   └── icons/                 # Icon sets
└── data/
    ├── constants/             # Static constants
    ├── types/                 # TypeScript type definitions
    └── configs/               # Configuration schemas
```

## Usage in Products
```
import { Button, Card, Input } from '@trinity/ui';
import { formatCurrency, validateEmail } from '@trinity/utilities';
import { standardPrompts } from '@trinity/prompts';
```

## Component Standards
- Each component must have: Storybook story, unit test, documentation
- Components should be framework-agnostic when possible
- All components must meet WCAG 2.1 AA accessibility
- Dark mode and mobile responsive by default
