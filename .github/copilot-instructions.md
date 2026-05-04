## Purpose

This is a tech assessment for junior front-end developers. The core challenge: you have multiple similar but differently-styled card components, and you must **create a new card type while unifying all styling** — discovering that a shared, headless Card component is the best solution (not told upfront).

An AI agent should understand:

- The **assessment goal** is to teach pattern recognition and component abstraction through practical necessity
- The **starting point** is multiple "before" components: `UserCard` and `ProductCard` with different implementations and styling
- The **success criterion** is a reusable Card component library approach: shared structure with customizable styling, tests validating reusability across entity types
- This codebase uses **React** (latest version) as the framework

## Current repository snapshot

This assessment repo contains:

- **`src/components/UserCard.tsx`** — User card with dark theme, edit name flow
- **`src/components/ProductCard.tsx`** — Product card with light theme, edit stock flow
- **`src/components/UserCard.test.tsx`** — Example tests for User card
- **`src/components/ProductCard.test.tsx`** — Example tests for Product card
- **`README.md`** — Detailed challenge description with multi-card scenario and success criteria
- **Full React + TypeScript + Vite scaffold** — Ready to develop and test
- **Vitest + React Testing Library** — Pre-configured for writing component and hook tests
- **ESLint + Prettier** — Code quality and formatting rules configured

## First actions for the agent (required)

1. **Check for manifests:** Look for `package.json`, `yarn.lock`, `pnpm-lock.yaml`, `README.md`, and `vite.config.ts` (React project files).
2. **Extract key info from `package.json`:**
    - React version and dependencies (hooks, context API usage)
    - Build/dev commands (`npm run dev`, `npm run build`, `npm run test`)
    - Linting/formatting config (ESLint, Prettier)
3. **Understand the assessment structure:**
    - The "before" components: `src/components/UserCard.tsx` (dark theme) and `ProductCard.tsx` (light theme)
    - Example tests: `UserCard.test.tsx` and `ProductCard.test.tsx` — shows test patterns for multiple card types
    - Challenge docs: `README.md` — describes the multi-card unification task
    - Display page: `src/App.tsx` — shows the full user story, challenge description, and the three cards side-by-side to highlight inconsistency
4. **Ready to go:** Dependencies are configured; developer should run `npm install` then `npm test` to verify setup.## How to decide what to run or edit

- Prefer reading top-level files and directories first (`src/`).
- If `package.json` exists, use `npm run <script>` or the `scripts` entries rather than guessing commands. Look for `build`, `test`, `start`, `dev`.
- If a `Makefile` or `README.md` exists, follow the documented commands there.

## Assessment-specific guidance: DRY & Headless Component Refactoring

When helping a developer refactor the monolithic components:

### Key architectural patterns to recognize:

1. **Multi-component inconsistency** — Multiple cards (User, Product) that are similar in purpose but use different CSS classes, markup patterns, and styling approaches.
2. **The "third card" trigger** — When asked to create PostCard, the developer should notice: "If I copy ProductCard or UserCard, I'm duplicating code. There must be a better way."
3. **Target refactoring structure:**
    - **Shared Card component** — Generic, headless UI that renders sections (header, body, footer) based on props
    - **Baseline styling** — Common CSS with BEM naming or CSS modules, customizable via props/classes
    - **Entity-specific integrations** — UserCard, ProductCard, PostCard each compose the shared Card with their own data

### Specific hints for AI agents:

- Look for duplicate markup patterns and CSS class naming; these are candidates for abstraction into a shared component.
- When suggesting refactors, prioritize extracting the **structure** (sections, layout) before extracting data logic.
- Encourage discovering the pattern themselves: "What would the third card look like if you copied one of these? Is that DRY?"
- Prefer composable, prop-driven APIs over configuration objects; allow passing content as React nodes/children.
- Style consistency: baseline Card component should apply core styles; entity-specific cards extend/override as needed.

## Reporting to humans

- If the agent modifies or creates high-impact files (build config, CI, lockfiles), summarize the change in 3 bullets and ask for human approval before pushing.
- When the repo is empty, always ask whether to scaffold or wait for user to populate files.

## Project-specific conventions (heuristics when files appear)

- **React & TypeScript patterns:** Use functional components with hooks, prefer TypeScript interfaces for prop typing. Follow the component-folder structure (e.g., `src/components/Button/Button.tsx`, `src/components/Button/Button.stories.tsx`).
- **Code formatting:** If `.prettierrc` or `.eslintrc.js` exists, adhere to those rules. ESLint rules should catch entity-specific hardcoding and encourage prop-driven design.
- **Tests:** Run `npm test` if configured. Prioritize unit tests for custom hooks and component prop variations (not entity-specific scenarios).
- **Branches/commits:** Keep changes small and atomic; include a concise commit message. Example: "refactor: extract UserProfile logic into useUserData hook".

## Example actionable templates (use when appropriate)

- If `package.json` present and has `scripts.test`: run `npm ci` (if lockfile exists) then `npm test` and report failures.
- If `vite.config.ts` exists: use `npm run dev` for local development; `npm run build` for production bundles.
- When reviewing the monolithic component, identify hardcoded entity references (e.g., `useUser()`, `fetchUserData()`) and suggest extracting to custom hooks with generic names (e.g., `useEntity(entityType)`).
- When suggesting a headless refactor, provide example usage showing how the same logic+presentation works with different entity contexts.

## What NOT to do

- Don't assume a framework (React, Next, Vue) until you see files like `next.config.js`, `nuxt.config.js`, `vite.config.*`, or framework-specific dependencies in `package.json`.
- Don't add or change CI config without explicit instruction from the user.
- Don't refactor the component into smaller UI pieces without first extracting entity-specific logic into custom hooks. The goal is horizontal (logic/presentation) separation, not vertical (UI only) slicing.
- Don't suggest using configuration objects or large option props as the solution; prefer prop-driven composition and custom hooks for reusability.

## When you finish initial discovery

- Post a short summary: files found, detected language(s), inferred build/test commands, and a recommended next step (fix a failing test, scaffold missing files, implement requested feature).

---

If you want, I can now re-scan the workspace for manifests and create a small starter scaffold (React+TypeScript or plain HTML) — tell me which you prefer.
