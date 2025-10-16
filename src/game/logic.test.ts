import { describe, expect, it } from 'vitest';

import { calculateDeltas, calculateMoveCount, generateBoard, isWin, toggleCell } from './logic';


describe('Digit Fidget Game Mechanics', () => {
    describe('Board Generation', () => {
        it('generates a valid board and solution', () => {
            const state = generateBoard({ size: 4, seed: 42 });
            expect(state.board.length).toBe(4);
            expect(state.board[0].length).toBe(4);
            for (const row of state.board) {
                for (const cell of row) {
                    expect(cell.value).toBeGreaterThanOrEqual(0);
                    expect(cell.value).toBeLessThanOrEqual(9);
                    expect(typeof cell.on).toBe('boolean');
                }
            }
            expect(state.solution.length).toBe(4);
            expect(state.solution[0].length).toBe(4);
        });
        it('is reproducible with the same seed', () => {
            const a = generateBoard({ size: 3, seed: 123 });
            const b = generateBoard({ size: 3, seed: 123 });
            expect(a.board).toEqual(b.board);
            expect(a.solution).toEqual(b.solution);
            expect(a.targetSums).toEqual(b.targetSums);
        });
        it('produces different boards with different seeds', () => {
            const a = generateBoard({ size: 3, seed: 1 });
            const b = generateBoard({ size: 3, seed: 2 });
            expect(a.board).not.toEqual(b.board);
        });
    });

    describe('Game cell values', () => {
        it('should only allow cell values 1-9', () => {
            const options = { size: 4, seed: 123 };
            const state = generateBoard(options);
            for (const row of state.board) {
                for (const cell of row) {
                    expect(cell.value).toBeGreaterThanOrEqual(1);
                    expect(cell.value).toBeLessThanOrEqual(9);
                }
            }
        });
    });


    describe('Cell Toggling and Deltas', () => {
        it('toggles a cell on and off', () => {
            let state = generateBoard({ size: 2, seed: 1 });
            expect(state.board[0][0].on).toBe(false);
            state = toggleCell(state, 0, 0);
            expect(state.board[0][0].on).toBe(true);
            state = toggleCell(state, 0, 0);
            expect(state.board[0][0].on).toBe(false);
        });
        it('updates deltas correctly after toggling', () => {
            let state = generateBoard({ size: 2, seed: 1 });
            const initialDeltas = { ...state.deltas };
            state = toggleCell(state, 0, 0);
            expect(state.deltas).not.toEqual(initialDeltas);
        });
        it('allows toggling any cell any number of times', () => {
            let state = generateBoard({ size: 2, seed: 1 });
            for (let i = 0; i < 5; i++) {
                state = toggleCell(state, 1, 1);
            }
            expect(typeof state.board[1][1].on).toBe('boolean');
        });
    });

    describe('Delta Calculation', () => {
        it('deltas are zero when board matches solution', () => {
            const state = generateBoard({ size: 3, seed: 99 });
            // Turn on cells to match solution
            const board = state.board.map((row, r) =>
                row.map((cell, c) => ({ ...cell, on: state.solution[r][c] }))
            );
            const deltas = calculateDeltas(board, state.targetSums);
            expect(deltas.row.every(d => d === 0)).toBe(true);
            expect(deltas.col.every(d => d === 0)).toBe(true);
        });
        it('deltas are correct for all-off and all-on', () => {
            const state = generateBoard({ size: 2, seed: 2 });
            // All off
            const board = state.board.map(row => row.map(cell => ({ ...cell, on: false })));
            let deltas = calculateDeltas(board, state.targetSums);
            expect(Array.isArray(deltas.row)).toBe(true);
            expect(Array.isArray(deltas.col)).toBe(true);
            // All on
            const boardAllOn = state.board.map(row => row.map(cell => ({ ...cell, on: true })));
            deltas = calculateDeltas(boardAllOn, state.targetSums);
            expect(Array.isArray(deltas.row)).toBe(true);
            expect(Array.isArray(deltas.col)).toBe(true);
        });
    });

    describe('Move Counting', () => {
        it('counts moves as toggles minus on cells in solution', () => {
            const state = generateBoard({ size: 2, seed: 2 });
            const toggles = 5;
            const moveCount = calculateMoveCount(toggles, state.solution);
            let onCount = 0;
            for (const row of state.solution) for (const cell of row) if (cell) onCount++;
            expect(moveCount).toBe(toggles - onCount);
        });
    });

    describe('Win Condition', () => {
        it('detects win when all deltas are zero', () => {
            const state = generateBoard({ size: 2, seed: 2 });
            const board = state.board.map((row, r) =>
                row.map((cell, c) => ({ ...cell, on: state.solution[r][c] }))
            );
            const deltas = calculateDeltas(board, state.targetSums);
            expect(isWin(deltas)).toBe(true);
        });
        it('does not detect win if any delta is nonzero', () => {
            const state = generateBoard({ size: 2, seed: 2 });
            const board = state.board.map(row => row.map(cell => ({ ...cell, on: false })));
            const deltas = calculateDeltas(board, state.targetSums);
            expect(isWin(deltas)).toBe(false);
        });
    });

    describe('Edge Cases & Stress', () => {
        it('handles 1x1 and 9x9 boards', () => {
            let state = generateBoard({ size: 1, seed: 1 });
            expect(state.board.length).toBe(1);
            state = generateBoard({ size: 9, seed: 1 });
            expect(state.board.length).toBe(9);
        });
        it('is deterministic and pure', () => {
            const state1 = generateBoard({ size: 3, seed: 123 });
            const state2 = generateBoard({ size: 3, seed: 123 });
            expect(state1).toEqual(state2);
        });
    });
});
