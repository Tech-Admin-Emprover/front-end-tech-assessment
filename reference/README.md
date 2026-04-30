# Reference Components

These are example implementations of reusable shared components that demonstrate the pattern you should follow when refactoring the assessment.

## Components

### Card

A headless, flexible container component for displaying information with sections (header, body, footer, actions).

**Files:**

- `Card/Card.tsx` — Component definition
- `Card/Card.css` — Baseline styling
- `Card/Card.test.tsx.example` — Example tests (hints for your implementation)

### Button

A reusable button component with variants (primary, secondary) for consistent interactions across cards.

**Files:**

- `Button/Button.tsx` — Component definition
- `Button/Button.css` — Baseline styling

### Grid

A responsive grid layout component for displaying collections of cards.

**Files:**

- `Grid/Grid.tsx` — Grid and GridItem components
- `Grid/Grid.css` — Responsive grid styling

## How to Use These References

1. **Study the patterns** — Notice how each component is:
    - Headless/composition-focused (no hardcoded entity logic)
    - Accepts flexible content via props or children
    - Provides baseline styling that can be customized
    - Decoupled from specific use cases

2. **Apply to your refactoring** — When building your Card component, think about:
    - How to accept flexible content for header, body, footer, actions
    - How to support custom styling via props/classes
    - How to make it work with any entity type (User, Product, Post)

3. **Validation** — Use the commented-out tests in `Card/Card.test.tsx.example` as guidance for what your implementation should support.

## Key Pattern: Headless Components

These components separate **structure** from **content**:

- The component handles layout and baseline styling
- The consumer (UserCard, ProductCard, etc.) provides the content

This is why they're reusable across different entity types.
