# Main Menu

Implement the main menu for Digit Fidget, allowing users to select game
difficulties, view instructions, and access high scores.

## Description

The Main Menu serves as the landing page for the application. It presents the
game title "Digit Fidget" and provides navigation options for starting a game at
various difficulty levels (Easy, Medium, Hard, Extreme). It also includes access
to an "About" page that details the game rules and a button to view "High
Scores".

The "About" page should be a dedicated view that displays the game instructions
and provides a way to navigate back to the main menu. The "High Scores" button
will navigate to a placeholder view for now.

## Requirements

1. **Route:** The main menu must be displayed at the root path (`/`).
2. **Title:** The application title "Digit Fidget" must be prominent and
    visible on the main menu.
3. **Difficulty Selection:**
    - There must be four distinct buttons labeled "Easy", "Medium", "Hard",
        and "Extreme".
    - Clicking a difficulty button should navigate to a game route (e.g.,
        `/game/easy`, `/game/medium`, etc.) or a placeholder for now.
4. **About Section:**
    - There must be an "About" button on the main menu.
    - Clicking the "About" button must navigate to the `/about` route.
    - The `/about` page must display the full game rules text (derived from the
        project instructions).
    - The `/about` page must include a "Back" button that returns the user to
        the main menu (`/`).
5. **High Scores:**
    - There must be a "High Scores" button on the main menu.
    - Clicking the button must navigate to the `/high-scores` route (which can
        be empty or a placeholder).
6. **Styling:** The menu should be visually distinct, using the existing
    Tailwind CSS setup.

## Development tasks

- [ ] Add `react-router-dom` dependency to the project.
- [ ] Configure the application router in `src/App.tsx` (or `src/main.tsx`) to
      handle routing.
- [ ] Create a `Layout` component (optional but recommended) or basic page
      structure.
- [ ] Create `src/features/menu/MainMenu.tsx` component.
- [ ] Implement the visual design for the Main Menu with Title and Buttons.
- [ ] Create `src/features/about/AboutPage.tsx` component.
- [ ] Populate `AboutPage` with the content from `digit-fidget-rules.md`.
- [ ] Implement navigation between Main Menu, About Page, and the High Scores
      placeholder.
- [ ] Add the "High Scores" button to the menu.

## Test plan

- **Navigation Test:** Verify that the application loads at `/` with the Main
  Menu.
- **Title Test:** Verify that the text "Digit Fidget" is visible on the main
  screen.
- **Difficulty Buttons Test:** Verify that buttons for "Easy", "Medium", "Hard",
  and "Extreme" are present and clickable.
- **About Page Navigation:** Click the "About" button and verify the URL changes
  to `/about` and the About Page content is visible.
- **About Content Test:** Verify that key phrases from the rules (e.g., "toggle
  digits on a grid") are present on the About Page.
- **Back Button Test:** On the About Page, click "Back" and verify the user is
  returned to the Main Menu.
- **High Scores Test:** Click the "High Scores" button and verify the URL
  changes to `/high-scores`.
