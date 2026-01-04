import { Cell, GameState } from "./types";

export const generatePuzzle = (size: number): GameState => {
  const grid: Cell[][] = [];
  const solutionGrid: boolean[][] = [];
  let solutionOnCount = 0;

  // 1. Initialize grid with random values (1-9) and generate a random solution
  for (let r = 0; r < size; r++) {
    const row: Cell[] = [];
    const solutionRow: boolean[] = [];
    for (let c = 0; c < size; c++) {
      const value = Math.floor(Math.random() * 9) + 1;
      const isSolutionOn = Math.random() > 0.5; // 50% chance of being ON in solution

      if (isSolutionOn) {
        solutionOnCount++;
      }

      row.push({
        id: `${r}-${c}`,
        value,
        isOn: false, // Initially all off
      });
      solutionRow.push(isSolutionOn);
    }
    grid.push(row);
    solutionGrid.push(solutionRow);
  }

  // 2. Calculate target sums based on the solution
  const rowTargets = new Array(size).fill(0);
  const colTargets = new Array(size).fill(0);

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (solutionGrid[r][c]) {
        const val = grid[r][c].value;
        rowTargets[r] += val;
        colTargets[c] += val;
      }
    }
  }

  // 3. Initial current sums (all 0 since board starts clear)
  const rowCurrent = new Array(size).fill(0);
  const colCurrent = new Array(size).fill(0);

  return {
    grid,
    rowTargets,
    colTargets,
    rowCurrent,
    colCurrent,
    isWon: false,
    moves: 0,
    solutionOnCount,
  };
};

export const toggleCell = (
  state: GameState,
  row: number,
  col: number,
): GameState => {
  if (state.isWon) return state;

  const newGrid = state.grid.map((r, rIdx) => {
    if (rIdx !== row) return r;
    return r.map((c, cIdx) => {
      if (cIdx !== col) return c;
      return { ...c, isOn: !c.isOn };
    });
  });

  const cellValue = state.grid[row][col].value;
  const isNowOn = newGrid[row][col].isOn;
  const valChange = isNowOn ? cellValue : -cellValue;

  const newRowCurrent = [...state.rowCurrent];
  newRowCurrent[row] += valChange;

  const newColCurrent = [...state.colCurrent];
  newColCurrent[col] += valChange;

  // Check win condition
  const isWon =
    newRowCurrent.every((val, idx) => val === state.rowTargets[idx]) &&
    newColCurrent.every((val, idx) => val === state.colTargets[idx]);

  return {
    ...state,
    grid: newGrid,
    rowCurrent: newRowCurrent,
    colCurrent: newColCurrent,
    moves: state.moves + 1,
    isWon,
  };
};
