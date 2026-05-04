# Front-End Tech Assessment: Card Component Unification

## Quick Start

```bash
npm install
npm run dev          # Dev server on localhost:5173
npm test            # Run tests
npm run lint        # Check code
npm run format      # Format code
```

## Project Overview

This assessment contains a React application with multiple card components that share similar patterns but have different implementations. Your task is to recognize the duplication and refactor towards a shared, reusable component architecture.

## Mock Data & API

Mock data is located in `src/mock/`:

- `users.ts` — 4 mock users (admins and regular users)
- `products.ts` — 5 mock products with pricing and stock
- `posts.ts` — 5 mock blog posts
- `api.ts` — Global fetch interceptor that returns mock data with 500ms delay

The mock API logs all requests to the browser console with human-readable messages for debugging (e.g., "Edited User 'Jane Doe'").

## Folder Structure

```
src/
├── components/
│   ├── UserCard/
│   ├── ProductCard/
│   ├── MixedGrid/
│   └── ...
├── shared/
│   ├── Button/
│   ├── Grid/
│   └── types/           (Entity type definitions)
└── App.tsx             (Main assessment page)
```

## Where to Start

1. Open `http://localhost:5173` to see the assessment
2. Read the **User Story** section for the business requirements
3. Check the **Mixed Cards Grid** to see the current card implementations
4. Start implementing the PostCard component
5. Refactor components as you identify duplication patterns
