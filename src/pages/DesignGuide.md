# Digit Fidget UI Design Guide

Welcome to the Digit Fidget UI Design Guide! This guide provides a reference
for building beautiful, retro-themed UI elements for the Digit Fidget puzzle
game, using React, TailwindCSS, and shadcn/ui components.

## Theme Overview

- **Visual Style:** Retro, inspired by 80s/90s digital games and calculators
- **Primary Fonts:** [Press Start
  2P](https://fonts.google.com/specimen/Press+Start+2P) (pixel/arcade),
  [VT323](https://fonts.google.com/specimen/VT323) (monospace, digital)
- **Color Palette:**
  - Background: #181825 (deep navy)
  - Accent: #FFD700 (retro gold/yellow)
  - Grid: #00FFD0 (aqua/cyan)
  - Cell On: #22223B (dark purple)
  - Cell Off: #2D3142 (slate gray)
  - Text: #F8F8F2 (off-white)
  - Error/Negative: #FF3860 (retro red)
  - Success/Zero Delta: #00FF00 (lime green)

## UI Elements

### 1. Game Board Grid

- **Grid Layout:** Square, responsive, with visible cell borders
- **Cell:**
  - Shows digit (0-9) in retro font
  - On/off state indicated by background color and border
  - Clickable/tappable to toggle state
  - Subtle animation on toggle (e.g., scale or glow)

### 2. Row/Column Deltas

- **Delta Display:**
  - Shown to the right of each row and below each column
  - Negative: red, Positive: gold, Zero: green
  - Retro 7-segment or pixel font
  - Animated color change when delta updates

### 3. Controls

- **Buttons:**
  - Retro-styled (rounded rectangles, bold borders, pixel font)
  - Primary (Start, Reset): gold background, navy text
  - Secondary: outlined, transparent background
- **Timer & Move Counter:**
  - Digital clock style, monospace font
  - Prominent placement above or below grid

### 4. Feedback

- **Win State:**
  - Flashing border or confetti animation
  - "You Win!" in large retro font
- **Error Feedback:**
  - Shake animation or red highlight if a move causes a delta to increase

### 5. Layout & Responsiveness

- **Mobile-first:**
  - Grid and controls stack vertically on small screens
  - Touch-friendly hit areas
- **Dark mode:**
  - All colors chosen for high contrast and retro feel

## Example Component Usage

- Use shadcn/ui `Button`, `Card`, and `Tooltip` components, customized with
  Tailwind classes and retro fonts/colors.
- Example:

```tsx
<Button className="font-['Press_Start_2P'] bg-yellow-400 text-[#181825] border-2 border-yellow-400 rounded px-4 py-2 shadow-md hover:bg-yellow-300">
  Start Game
</Button>
```

## Resources

- [shadcn/ui documentation](https://ui.shadcn.com/)
- [TailwindCSS documentation](https://tailwindcss.com/)
- [Google Fonts: Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
- [Google Fonts: VT323](https://fonts.google.com/specimen/VT323)

---

This guide should be used as a reference for all UI development in Digit
Fidget. Stick to the retro theme, use the provided fonts and colors, and
prioritize clarity, accessibility, and fun!
