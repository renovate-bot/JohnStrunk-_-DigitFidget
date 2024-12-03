export class Cell {
    private value: number;
    private enabled: boolean;
    /**
     * A cell in the figdet game board.
     *
     * @param value - The value of the cell. Must be between 1 and 9, inclusive.
     * If not provided, a random value will be chosen.
     */
    constructor(value = 0) {
        if (value < 0) {
            throw new Error('Cell value must be non-negative');
        }
        if (value > 9) {
            throw new Error('Cell value must be less than 10');
        }
        if (value === 0) {
            value = Math.floor(Math.random() * 9) + 1;
        }
        this.value = value;
        this.enabled = false;
    }

    /**
     * Toggles the `enabled` state of the Cell.
     *
     * @returns The new state of `enabled` after toggling.
     */
    toggle(): boolean {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    /**
     * Returns the current state of the Cell.
     *
     * @returns The state of the Cell.
     */
    isEnabled(): boolean {
        return this.enabled;
    }

    /**
     * Returns the current value of the Cell.
     *
     * @returns The value of the Cell.
     */
    currentValue(): number {
        return this.enabled ? this.value : 0;
    }

    /**
     * Returns the internal value of the Cell.
     *
     * @returns The value of the Cell.
     */
    internalValue(): number {
        return this.value;
    }
}

export class Board {
    private readonly ROW = 0;
    private readonly COLUMN = 1;

    private cells: Cell[][];
    private readonly size: number;
    private totals: number[][];
    /**
     * A figdet game board.
     *
     * @param size - The size of the board. Must be greater than 0.
     */
    constructor(size: number) {
        if (size <= 0) {
            throw new Error('Board size must be greater than 0');
        }
        this.size = size;
        this.cells = [];
        this.totals = [];
        this.totals = new Array(2).fill(-1).map(() => new Array<number>(size).fill(0));
        for (let row = 0; row < size; row++) {
            this.cells.push([]);
            for (let col = 0; col < size; col++) {
                this.cells[row].push(new Cell());
                if (Math.random() < 0.5) {
                    this.totals[this.ROW][row] += this.cells[row][col].internalValue();
                    this.totals[this.COLUMN][col] += this.cells[row][col].internalValue();
                }
            }
        }
    }

    /**
     * Returns the size of the board.
     *
     * @returns The size of the board.
     */
    getSize(): number {
        return this.size;
    }

    /**
     * Gets the current difference between the sum of the currently enabled
     * cells and the target sum for the given row.
     *
     * @param row - The row to check.
     * @returns The difference between the current sum and the target sum.
     */
    rowDelta(row: number): number {
        let sum = 0;
        for (let col = 0; col < this.size; col++) {
            sum += this.cells[row][col].currentValue();
        }
        return sum - this.totals[this.ROW][row];
    }

    /**
     * Gets the current difference between the sum of the currently enabled
     * cells and the target sum for the given column.
     *
     * @param col - The column to check.
     * @returns The difference between the current sum and the target sum.
     */
    colDelta(col: number): number {
        let sum = 0;
        for (let row = 0; row < this.size; row++) {
            sum += this.cells[row][col].currentValue();
        }
        return sum - this.totals[this.COLUMN][col];
    }

    /**
     * Returns whether the board is solved. (All rows and columns have the
     * correct sum.)
     *
     * @returns Whether the board is solved.
     */
    solved(): boolean {
        for (let i = 0; i < this.size; i++) {
            if (this.rowDelta(i) !== 0 || this.colDelta(i) !== 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * Toggles the Cell at the given position.
     *
     * @param row - The row of the Cell.
     * @param col - The column of the Cell.
     * @returns The new state of the Cell.
     */
    toggle(row: number, col: number): boolean {
        return this.cells[row][col].toggle();
    }

    set(row: number, col: number, state: boolean): boolean {
        if (this.cells[row][col].isEnabled() !== state) {
            return this.toggle(row, col);
        }
        return state;
    }

    /**
     * Returns the value of the Cell at the given position.
     *
     * @param row - The row of the Cell.
     * @param col - The column of the Cell.
     * @returns The value of the Cell.
     */
    value(row: number, col: number): number {
        return this.cells[row][col].internalValue();
    }

    /**
     * Returns whether the Cell at the given position is enabled.
     *
     * @param row - The row of the Cell.
     * @param col - The column of the Cell.
     * @returns The value of the Cell.
     */
    isEnabled(row: number, col: number): boolean {
        return this.cells[row][col].isEnabled();
    }
}
