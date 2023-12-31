export class Board {
    states: boolean[][];
    values: number[][];
    colTargets: number[];
    rowTargets: number[];
    constructor( public size: number ) {
        this.states = new Array(size).fill(null).map(() => new Array(size).fill(0).map(() => Math.random() > 0.5));
        this.values = new Array(size).fill(null).map(() => new Array(size).fill(0).map(() => Math.floor(Math.random() * 10 + 1)));
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
    toggle(x: number, y: number) {
        this.states[x][y] = !this.states[x][y];
    }
    colDelta(x: number) {
        let colSum = 0;
        for (let y = 0; y < this.size; y++) {
            if (this.states[x][y]) {
                colSum += this.values[x][y];
            }
        }
        return this.colTargets[x] - colSum;
    }
    rowDelta(y: number) {
        let rowSum = 0;
        for (let x = 0; x < this.size; x++) {
            if (this.states[x][y]) {
                rowSum += this.values[x][y];
            }
        }
        return this.rowTargets[y] - rowSum;
    }
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
    value(x: number, y: number) {
        return this.values[x][y];
    }
    state(x: number, y: number) {
        return this.states[x][y];
    }
}
