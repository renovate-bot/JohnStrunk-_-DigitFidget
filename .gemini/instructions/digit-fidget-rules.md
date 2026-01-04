# Rules for Digit Fidget

Digit Fidget is a single-player puzzle game where the objective is to toggle
digits on a grid to achieve a specific target configuration. The grid is a
square of size N x N, where each cell contains a digit from 1 to 9. Each row
and column have a target sum that must be achieved by toggling the digits. A
cell that is "off" contributes 0 to the sum, while a cell that is "on"
contributes its digit value.

## Game generation

- The game difficulties are defined by the size of the grid (N), with larger
  grids being more challenging.
- Each cell in the grid is initialized with a digit from 1 to 9.
- To create a solvable puzzle, a random configuration of "on" and "off" cells
  is generated, and the corresponding target sums for each row and column are
  calculated based on this configuration. This configured state is hidden from
  the player.
- All cells start in the "off" state when the game begins.
- This generation process ensures that there is at least one solution to the
  puzzle.

## Winning conditions

The player wins the game by toggling the cells such that the sum of the "on"
digits in each row and each column matches the predefined target sums. Any
configuration that meets these conditions is considered a valid solution.

## Additional notes

- The cell values and their states are visible to the player at all times.
- The player is shown the "delta" between the current sums and the target sums
  for each row and column to help guide their decisions. For example, if a row
  has a target sum of 15 and the current sum of "on" digits is 10, the delta
  would be -5, because the player needs to increase the sum by 5 to reach the
  target.

## Scoring

- The player's score is the number of excess toggles taken to reach the
  solution. The lower the number of excess toggles, the better the score.
  Excess toggles are calculated as the total number of toggles made minus the
  number of "on" cells in the solved configuration that the player finds.
