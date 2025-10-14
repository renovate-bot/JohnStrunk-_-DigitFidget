# Game rules for Digit Fidget

This document outlines the game rules for Digit Fidget.

## Game board

- The game board consists of a square grid of cells, with each cell containing
  a single digit (0-9).
- The size of the grid determines the difficulty of the game.
- Each row and column has an associated hidden target sum.
- The initial state is for all cells to be off.
- The value of each cell (digit) and its on/off state are always visible to
  the player.
- Instead of showing the target sum, the game displays a "delta" for each row
  and column (to the right of each row and below each column). The delta is
  the amount needed to reach the target sum: a negative delta (e.g., -4) means
  the sum is too low and more value needs to be turned on; a positive delta
  means the sum is too high and some cells need to be turned off.

## Objective

- The objective of the game is to toggle the cells in the grid (on or off) so
  that the sum of the digits in each row and column matches the hidden target
  sum for that row or column (i.e., all deltas are zero).
- A cell that is "on" contributes its digit value to the sum, while a cell
  that is "off" contributes 0.

## Scoring

Games are tracked based on *time* and *moves* (these are not combined into a
single score):

- **Time**: The time taken to complete the game is recorded. Faster completion
  times are better.
- **Moves**: The number of moves (cell toggles) made to complete the game is
  also recorded. Fewer moves are better. The number of moves is calculated as
  the total number of cell toggles minus the number of "on" cells in the
  solved grid, meaning a perfect solution would have a move count of 0.

## Game board generation

Game boards are generated according to the following algorithm:

1. Construct a grid of the desired size, filling each cell with a random digit
   (0-9).
2. Construct a solution by randomly toggling cells in the grid.
3. Calculate the target sums for each row and column based on the solution.
4. Turn off all cells in the grid to create the initial game state.

Using this algorithm, a generated game board is guaranteed to have at least
one solution (the one constructed in step 2). However, it is possible that
multiple solutions exist for a given board. Any valid solution that satisfies
all row and column deltas (i.e., all deltas are zero) is accepted as a win.

## Additional rules and notes

- There are no hints or undo/redo features.
- Players may toggle any cell at any time; there are no restrictions on
  toggling the same cell multiple times.
