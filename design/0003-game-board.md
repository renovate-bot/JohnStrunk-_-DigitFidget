# Game Board and Core Logic

Implement the core game logic and the interactive game board for Digit Fidget.

## Description

This feature covers the implementation of the main gameplay mechanics. This
includes generating a solvable puzzle based on the selected difficulty,
rendering the N x N grid of digits, handling user interactions (toggling
digits), calculating and displaying target sums and deltas, and detecting the
winning condition.

## Requirements

1. **Game State Management:**
    - Manage the state of the grid: cell values (1-9) and toggle status
      (on/off).
    - Store target sums for each row and column.
    - Track the current sum of "on" digits for each row and column.
    - Track the "delta" (difference between current and target sums).
    - Track the number of moves/toggles.

2. **Difficulty Levels:**
    - Support different grid sizes based on difficulty:
        - Easy: 3x3
        - Medium: 4x4
        - Hard: 5x5
        - Extreme: 6x6

3. **Puzzle Generation:**
    - Upon starting a game, generate a grid with random digits (1-9).
    - Create a hidden solution by randomly selecting a set of "on" cells.
    - Calculate the target row and column sums based on this hidden solution.
    - Reset the board so all cells are initially "off".
    - Ensure the puzzle is solvable (guaranteed by the generation method).

4. **Game Board UI:**
    - Render the N x N grid of cells.
    - Each cell displays its digit value.
    - Visually distinguish "on" vs "off" cells (e.g., color, opacity, border).
    - Display target sums for each row (to the right of the grid) and column
      (below the grid).
    - Display the current "delta" for each row and column.
        - Negative delta means more "on" cells are needed.
        - Positive delta means fewer "on" cells are needed.
        - Zero delta indicates the row/column is satisfied (highlight this
          state).

5. **Interaction:**
    - Clicking a cell toggles its state (on <-> off).
    - Toggling updates the current sums and deltas immediately.

6. **Winning Condition:**
    - Detect when all row and column deltas are zero.
    - Display a "You Win!" message or overlay when solved.
    - Show the final score (Excess Toggles = Total Toggles - Min Toggles).
    - Provide a "Play Again" button and a "Back to Menu" button.

## Development tasks

- [ ] Define types/interfaces for GameState, Cell, Difficulty.
- [ ] Create `src/features/game/gameLogic.ts` (or similar) for generation and
      solver logic.
- [ ] Implement `generatePuzzle(size: number)` function.
- [ ] Create `src/features/game/GameBoard.tsx` component.
- [ ] Create `src/features/game/Cell.tsx` component.
- [ ] Integrate `GameBoard` into the existing `GamePage.tsx`.
- [ ] Implement the state management (using `useState` or `useReducer` or a
      store).
- [ ] Implement the winning condition check and "Game Over" modal/message.

## Test plan

- **Generation Test:** Verify `generatePuzzle` returns a grid of correct size
  with target sums that match a valid configuration.
- **Rendering Test:** Verify grid renders with correct number of cells for each
  difficulty.
- **Interaction Test:** Clicking a cell toggles its state and updates the
  displayed delta.
- **Winning Logic Test:** Manually set the state to the winning configuration
  and verify the "Win" message appears.
- **Reset/New Game Test:** Verify "Play Again" resets the board with a new
  puzzle.
