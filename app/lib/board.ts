export class Board {
    private states: boolean[][];
    private values: number[][];
    private colTargets: number[];
    private rowTargets: number[];

    constructor(public size: number, valueGenerator: IterableIterator<number> | undefined = undefined, stateGenerator: IterableIterator<boolean> | undefined = undefined) {
        if (size < 2) {
            throw new Error("Board size must be greater than 1");
        }
        if (size !== Math.floor(size)) {
            throw new Error("Board size must be an integer");
        }
        // Create the generators if they were not provided
        if (valueGenerator === undefined) {
            valueGenerator = RandomGenerator(size * size);
        }
        if (stateGenerator === undefined) {
            stateGenerator = BooleanGenerator(size * size);
        }

        // Use the generators to create the board
        this.values = new Array(size).fill(null).map(() => new Array(size).fill(0).map(() => valueGenerator!.next().value));
        this.states = new Array(size).fill(null).map(() => new Array(size).fill(false).map(() => stateGenerator!.next().value));

        // Calculate the target values for the rows and columns
        this.colTargets = new Array(size).fill(0);
        this.rowTargets = new Array(size).fill(0);
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                if (this.states[x][y]) {
                    this.colTargets[x] += this.values[x][y];
                    this.rowTargets[y] += this.values[x][y];
                }
            }
        }

        // Clear the board state
        this.states = new Array(size).fill(null).map(() => new Array(size).fill(false));
    }

    // Return the difference between the target value and the sum of the enabled values in the given column
    colDelta(x: number) {
        let colSum = 0;
        for (let y = 0; y < this.size; y++) {
            if (this.states[x][y]) {
                colSum += this.values[x][y];
            }
        }
        return colSum - this.colTargets[x];
    }

    // Return the difference between the target value and the sum of the enabled values in the given row
    rowDelta(y: number) {
        let rowSum = 0;
        for (let x = 0; x < this.size; x++) {
            if (this.states[x][y]) {
                rowSum += this.values[x][y];
            }
        }
        return rowSum - this.rowTargets[y];
    }

    // Return true if the board is solved (all rows and columns are equal to their targets)
    isSolved() {
        for (let x = 0; x < this.size; x++) {
            if (this.colDelta(x) !== 0) {
                return false;
            }
        }
        for (let y = 0; y < this.size; y++) {
            if (this.rowDelta(y) !== 0) {
                return false;
            }
        }
        return true;
    }

    // Return the value of the cell at the given coordinates
    value(x: number, y: number) {
        return this.values[x][y];
    }

    // Return the state of the cell at the given coordinates
    state(x: number, y: number) {
        return this.states[x][y];
    }

    // Toggle the state of the cell at the given coordinates
    toggle(x: number, y: number) {
        this.states[x][y] = !this.states[x][y];
    }
}

// Return a generator that yields a stream of random numbers from 1 to 10
export function RandomGenerator(length: number): IterableIterator<number> {
    return function* () {
        for (let i = 0; i < length; i++) {
            yield Math.floor(Math.random() * 10 + 1);
        }
    }()
}

// Return a generator that yields a stream of random booleans
export function BooleanGenerator(length: number): IterableIterator<boolean> {
    return function* () {
        for (let i = 0; i < length; i++) {
            yield Math.random() > 0.5;
        }
    }()
}
