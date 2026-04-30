# Bonus Challenges

After you've completed the main refactoring (creating the Card component and unifying all three cards), here are some styling polish tasks to enhance the user experience.

## Challenge 1: Consistent Button Styling

**Problem:** The cancel button has a different visual style compared to the save button. They don't feel like a cohesive pair.

**What to fix:**

- Update Button.css so both primary and secondary variants feel visually balanced and intentional
- Consider: color, border, hover states, and visual hierarchy
- The secondary button might need more visual weight or better contrast

**Location:** Look at `src/shared/Button/Button.css`

**Hint:** Should the secondary button have different colors, borders, or hover effects to feel more intentional?

## Challenge 2: Equal Height Grid Items

**Problem:** When cards in a grid have different content heights, the grid items don't align evenly. Cards with less content are shorter, while cards with more content stretch taller.

**What to fix:**

- Make all grid items the same height within a row
- Ensure cards fill their grid cell consistently
- Consider if content should stretch or if cards should have a minimum height

**Location:** Look at `src/shared/Grid/Grid.css` and how the grid container applies sizing

**Hint:** CSS Grid's `auto-rows` property or applying `height: 100%` to cards might help.

---

## How to Approach These

These are **polish tasks**—they won't break functionality, but they'll make the UI feel more professional:

1. Start with Challenge 1 (button styling) — it's the quickest win
2. Move to Challenge 2 (grid heights) — slightly more complex CSS

Feel free to experiment with CSS without changing component APIs. The goal is to make the shared components work beautifully across all entity types.
