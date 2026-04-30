# Front-End Tech Assessment: Card Component Unification

## The Challenge

You have two card components (`UserCard` and `ProductCard`) that do similar things but are implemented completely differently. Your task: **create a `PostCard`, notice the duplication problem, and solve it with a shared headless Card component.**

The goal is to discover that extracting shared structure (header, body, footer) while keeping content flexible is the right approach—not just copy-pasting a third time.

## Quick Start

```bash
npm install
npm run dev          # Dev server on localhost
npm test            # Run tests
npm run lint        # Check code
npm run format      # Format code
```

## Your Tasks

1. **Create a `PostCard` component** (any styling)
2. **Recognize the duplication problem** — UserCard, ProductCard, and PostCard will have too much similar code
3. **Extract a shared `Card` component** — A headless, reusable component that handles structure (header, body, footer, actions)
4. **Refactor all three** — Make UserCard, ProductCard, and PostCard compose the shared Card
5. **Add tests** — Prove the Card component works across different entity types

## File Structure

```
src/components/
├── UserCard/
│   ├── UserCard.tsx
│   └── UserCard.test.tsx
├── ProductCard/
│   ├── ProductCard.tsx
│   └── ProductCard.test.tsx
├── shared/
│   └── Card/
│       ├── Card.tsx       (← Create this)
│       └── Card.test.tsx  (← Create this)
├── UserGrid.tsx
└── ProductGrid.tsx
```

## Mock Data

**Users** (4 total):

- ID 1: Alice Johnson (admin) — can edit
- ID 2: Bob Smith (user) — cannot edit
- ID 3: Carol Williams (user) — cannot edit
- ID 4: Diana Martinez (admin) — can edit

**Products** (5 total):

- ID 1: Wireless Headphones ($79.99, 15 in stock)
- ID 2: Mechanical Keyboard ($149.99, 8 in stock)
- ID 3: USB-C Cable ($12.99, sold out)
- ID 4: 4K Monitor ($399.99, 3 in stock)
- ID 5: Desk Lamp ($34.99, 22 in stock)

Mock API with 500ms delay. Admin users can edit data; regular users cannot.

## Current State

Open `App.tsx` to see the existing UserCard and ProductCard side-by-side. Notice the styling differences, class naming patterns, and markup—this is your hint to recognize the duplication problem.

Run `npm run dev` to see the app with all users and products displayed in grids.

## Bonus Challenges

After you've completed the main refactoring tasks, check out **[BONUS_CHALLENGES.md](./BONUS_CHALLENGES.md)** for styling polish opportunities:

- Fix button styling consistency
- Ensure equal height grid items
