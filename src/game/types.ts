// Core types and interfaces for Digit Fidget game mechanics

export type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface Cell {
    value: Digit;
    on: boolean;
}

export type Board = Cell[][];

export type Solution = boolean[][];

export interface Deltas {
    row: number[];
    col: number[];
}

export interface GameState {
    board: Board;
    deltas: Deltas;
    targetSums: { row: number[]; col: number[] };
    moves: number;
    time: number; // seconds
    solution: Solution; // for testability only, not exposed to player
}

export interface BoardGenerationOptions {
    size: number;
    seed?: number;
}
