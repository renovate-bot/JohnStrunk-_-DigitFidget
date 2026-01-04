import { generatePuzzle, toggleCell } from "./gameLogic";

describe("gameLogic", () => {
  describe("generatePuzzle", () => {
    it("creates a grid of the specified size", () => {
      const size = 3;
      const state = generatePuzzle(size);
      expect(state.grid.length).toBe(size);
      expect(state.grid[0].length).toBe(size);
    });

    it("initializes cells with values 1-9 and isOn=false", () => {
      const state = generatePuzzle(3);
      state.grid.flat().forEach((cell) => {
        expect(cell.value).toBeGreaterThanOrEqual(1);
        expect(cell.value).toBeLessThanOrEqual(9);
        expect(cell.isOn).toBe(false);
      });
    });

    it("initializes current sums to 0", () => {
      const state = generatePuzzle(3);
      expect(state.rowCurrent).toEqual([0, 0, 0]);
      expect(state.colCurrent).toEqual([0, 0, 0]);
    });
  });

  describe("toggleCell", () => {
    it("toggles the cell state", () => {
      let state = generatePuzzle(3);
      const row = 0;
      const col = 0;

      // Toggle ON
      state = toggleCell(state, row, col);
      expect(state.grid[row][col].isOn).toBe(true);

      // Toggle OFF
      state = toggleCell(state, row, col);
      expect(state.grid[row][col].isOn).toBe(false);
    });

    it("updates row and column current sums correctly", () => {
      let state = generatePuzzle(3);
      const row = 0;
      const col = 0;
      const val = state.grid[row][col].value;

      state = toggleCell(state, row, col);
      expect(state.rowCurrent[row]).toBe(val);
      expect(state.colCurrent[col]).toBe(val);

      state = toggleCell(state, row, col);
      expect(state.rowCurrent[row]).toBe(0);
      expect(state.colCurrent[col]).toBe(0);
    });

    it("increments move count", () => {
      let state = generatePuzzle(3);
      expect(state.moves).toBe(0);

      state = toggleCell(state, 0, 0);
      expect(state.moves).toBe(1);
    });
  });
});
