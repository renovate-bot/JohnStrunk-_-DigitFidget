import type { Board, BoardGenerationOptions, Deltas, Digit, GameState, Solution } from './types';

// Deterministic PRNG for reproducible tests
function mulberry32(seed: number) {
    return function () {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

export function generateBoard(options: BoardGenerationOptions): GameState {
    const { size, seed = Date.now() } = options;
    const rand = mulberry32(seed);

    // Step 1: Fill board with random digits 1-9
    const board: Board = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => ({ value: Math.floor(rand() * 9) + 1 as Digit, on: false }))
    );

    // Step 2: Random solution (on/off for each cell)
    const solution: Solution = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => rand() > 0.5)
    );

    // Step 3: Calculate target sums
    const targetSums = { row: Array<number>(size).fill(0), col: Array<number>(size).fill(0) };
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (solution[r][c]) {
                targetSums.row[r] = (targetSums.row[r] ?? 0) + board[r][c].value;
                targetSums.col[c] = (targetSums.col[c] ?? 0) + board[r][c].value;
            }
        }
    }

    // Step 4: All cells off for initial state
    // Step 5: Calculate initial deltas
    const deltas = calculateDeltas(board, targetSums);

    return {
        board,
        deltas,
        targetSums,
        moves: 0,
        time: 0,
        solution,
    };
}

export function calculateDeltas(board: Board, targetSums: { row: number[]; col: number[] }): Deltas {
    const size = board.length;
    const row: number[] = Array.from({ length: size }, () => 0);
    const col: number[] = Array.from({ length: size }, () => 0);
    for (let r = 0; r < size; r++) {
        let rowSum = 0;
        for (let c = 0; c < size; c++) {
            if (board[r][c].on) rowSum += board[r][c].value;
        }
        row[r] = rowSum - targetSums.row[r];
    }
    for (let c = 0; c < size; c++) {
        let colSum = 0;
        for (let r = 0; r < size; r++) {
            if (board[r][c].on) colSum += board[r][c].value;
        }
        col[c] = colSum - targetSums.col[c];
    }
    return { row, col };
}

export function toggleCell(state: GameState, row: number, col: number): GameState {
    const board = state.board.map((r, ri) =>
        r.map((cell, ci) =>
            ri === row && ci === col ? { ...cell, on: !cell.on } : cell
        )
    );
    const moves = state.moves + 1;
    const deltas = calculateDeltas(board, state.targetSums);
    return { ...state, board, deltas, moves };
}

export function isWin(deltas: Deltas): boolean {
    return deltas.row.every(d => d === 0) && deltas.col.every(d => d === 0);
}

// For testability: count moves as total toggles minus number of on cells in solved grid
export function calculateMoveCount(toggles: number, solution: Solution): number {
    let onCount = 0;
    for (const row of solution) {
        for (const cell of row) {
            if (cell) onCount++;
        }
    }
    return toggles - onCount;
}
