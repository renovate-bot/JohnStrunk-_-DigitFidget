# Mobile Optimization

Enhance the user interface to be fully responsive and touch-friendly, ensuring a
high-quality experience on mobile devices.

## Description

- **Trigger:** When a user accesses the application from a mobile device or a
  screen with a small viewport.
- **Ability:** The game's layout, font sizes, and interactive elements (like the
  digit grid and menu buttons) will automatically adjust to fit smaller screens,
  maintaining usability and aesthetic appeal in portrait orientation.
- **Value:** Since the game is intended for mobile play, this ensures the core
  gameplay loop is accessible, intuitive, and visually polished for the primary
  target audience, preventing frustration from small tap targets or layout
  overflows.

## Requirements

1. The application must use a responsive design that adapts to screen widths as
   narrow as 320px.
2. All interactive elements (buttons, grid cells) must have a minimum touch
   target size of 44x44 CSS pixels.
3. Font sizes must be legible on mobile devices (minimum 16px for body text,
   appropriate scaling for headers).
4. The game grid must scale proportionally to fit the available viewport width
   while remaining fully interactive.
5. The layout must prioritize portrait orientation, ensuring all critical
   information (target sums, current sums, deltas) is visible without horizontal
   scrolling.
6. Navigation elements (e.g., "Back to Menu" buttons) must be positioned for
   easy thumb access on mobile devices.
7. All text must meet WCAG 2.0 AAA contrast ratios (at least 7:1 for normal text
   and 4.5:1 for large text).

## Development tasks

- [x] Review and update global CSS and Tailwind config for mobile-first
  defaults.
- [x] Audit and adjust color palette to ensure WCAG 2.0 AAA contrast compliance.
- [x] Implement responsive layout for `MainMenu.tsx` using flexbox/grid.
- [x] Adjust `GameBoard.tsx` to use dynamic sizing for the digit grid based on
  viewport width.
- [x] Update `Cell.tsx` to ensure touch targets are appropriately sized and
  provide visual feedback on tap.
- [x] Refactor `HighScoresPage.tsx` to use a mobile-friendly table or list view.
- [x] Refactor `AboutPage.tsx` for improved readability on narrow screens.
- [x] Verify responsiveness using browser developer tools across various device
  presets.

## Test plan

- **Viewport Integrity (R1, R5):** Use Playwright to load all pages in a mobile
  viewport (e.g., iPhone SE) and verify that no horizontal scrollbars are
  present and the `document.documentElement.clientWidth` matches the
  viewport width.
- **Touch Target Verification (R2):** Playwright test to iterate through all
  interactive elements (buttons, cells) in a mobile viewport and assert that
  their bounding box dimensions are at least 44x44 pixels.
- **Grid Scaling (R4):** Playwright test to verify the game board is fully
  visible and fits within the screen width on a 320px and 375px wide viewport.
- **Contrast Compliance (R7):** Use an accessibility audit tool (like Axe-core
  via Playwright) to verify that all text elements meet WCAG 2.0 AAA contrast
  standards.
- **Visual Accessibility (R3, R5):** Manual verification using browser emulation
  to ensure text is readable, deltas are clearly visible, and the layout is
  balanced in portrait mode.
