import { expect, test } from 'vitest';
import { Board, Cell } from './GameBoard';

test('Cells start disabled', () => {
    const mycell = new Cell();
    expect(mycell.isEnabled()).toBe(false);
})

test('Toggling a Cell enables it', () => {
    const mycell = new Cell();
    mycell.toggle();
    expect(mycell.isEnabled()).toBe(true);
})

test('If a Cell is enabled, its value is returned', () => {
    const mycell = new Cell();
    mycell.toggle();
    expect(mycell.currentValue()).toBe(mycell.internalValue());
})

test('If a Cell is disabled, 0 is returned', () => {
    const mycell = new Cell();
    expect(mycell.currentValue()).toBe(0);
})

test('A Cell can be created with a specific value', () => {
    const mycell = new Cell(5);
    expect(mycell.internalValue()).toBe(5);
})

test('A Cell cannot be created with a negative value', () => {
    expect(() => new Cell(-1)).toThrow();
})

test('A Cell cannot be created with a value greater than 9', () => {
    expect(() => new Cell(10)).toThrow();
})

test('Board initializes with correct size', () => {
    const board = new Board(3);
    expect(board.getSize()).toBe(3);
});

test('Board throws error if initialized with size <= 0', () => {
    expect(() => new Board(0)).toThrow('Board size must be greater than 0');
    expect(() => new Board(-1)).toThrow('Board size must be greater than 0');
});

test('Board rowDelta returns correct difference', () => {
    const size = 4;
    const board = new Board(size);
    const row = 0;
    let maxDelta = 0;
    for (let col = 0; col < size; col++) {
        maxDelta += board.value(row, col);
    }
    // Initial delta needs to be between 0 and the value of all cells in the row
    const initialDelta = board.rowDelta(row);
    expect(initialDelta).toBeGreaterThanOrEqual(-maxDelta);
    expect(initialDelta).toBeLessThanOrEqual(0);
    // Enabling a cell should increase the value of the delta (more positive)
    board.toggle(row, 1);
    expect(board.rowDelta(row)).toBe(initialDelta + board.value(row, 1));
});

test('Board colDelta returns correct difference', () => {
    const size = 5;
    const board = new Board(size);
    const col = 2;
    let maxDelta = 0;
    for (let row = 0; row < size; row++) {
        maxDelta += board.value(row, col);
    }
    // Initial delta needs to be between 0 and the value of all cells in the column
    const initialDelta = board.colDelta(col);
    expect(initialDelta).toBeGreaterThanOrEqual(-maxDelta);
    expect(initialDelta).toBeLessThanOrEqual(0);
    // Enabling a cell should increase the value of the delta (more positive)
    board.toggle(1, col);
    expect(board.colDelta(col)).toBe(initialDelta + board.value(1, col));
});

test('Board solved returns false for unsolved board', () => {
    const board = new Board(9);
    expect(board.solved()).toBe(false);
});

test('Board solved returns true for solved board', () => {
    const board = new Board(2);
    for (let index = 0; index < 16; index++) {
        const c00 = (index & 0b0001) === 1;
        const c01 = (index & 0b0010) === 1;
        const c10 = (index & 0b0100) === 1;
        const c11 = (index & 0b1000) === 1;
        board.set(0, 0, c00);
        board.set(0, 1, c01);
        board.set(1, 0, c10);
        board.set(1, 1, c11);
        if (board.colDelta(0) === 0 && board.colDelta(1) === 0 && board.rowDelta(0) === 0 && board.rowDelta(1) === 0) {
            expect(board.solved()).toBe(true);
        } else {
            expect(board.solved()).toBe(false);
        }
    }
});

test('Board toggle changes cell state', () => {
    const board = new Board(3);
    const row = 0;
    const col = 0;
    const initialState = board.isEnabled(row, col);
    board.toggle(row, col);
    expect(board.isEnabled(row, col)).toBe(!initialState);
    board.toggle(row, col);
    expect(board.isEnabled(row, col)).toBe(initialState);
});
