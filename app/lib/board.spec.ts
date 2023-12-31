import assert from "assert";
import { Board, BooleanGenerator, RandomGenerator } from "./board";

function generatorFromArray<T>(array: T[]): IterableIterator<T> {
    return function* () {
        for (const value of array) {
            yield value;
        }
    }();
}

describe("Board", () => {
    it("should be created with the given size", () => {
        const board = new Board(5);
        assert.strictEqual(board.size, 5);
    });
    it("is an error to create a board with a size less than 2", () => {
        assert.throws(() => new Board(1));
    });
    it("is an error to create a Board with a non-integer size", () => {
        assert.throws(() => new Board(1.5));
    });

    describe("with specific values", () => {
        const size = 3;
        // Note, the board is filled in column-major order
        const valArray = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ];
        const stateArray = [
            true, false, true,
            false, true, false,
            true, false, true
        ];
        let board: Board;
        beforeEach(() => {
            board = new Board(size, generatorFromArray(valArray), generatorFromArray(stateArray));
        });
        it("should return the correct value for each cell", () => {
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    // col-major order
                    assert.strictEqual(board.value(x, y), valArray[x * board.size + y]);
                }
            }
        });
        it("should be initialized with all cells disabled", () => {
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    assert.strictEqual(board.state(x, y), false);
                }
            }
        });
        it("should initialize the targets correctly", () => {
            assert.strictEqual(board.colDelta(0), -4);
            assert.strictEqual(board.colDelta(1), -5);
            assert.strictEqual(board.colDelta(2), -16);
            assert.strictEqual(board.rowDelta(0), -8);
            assert.strictEqual(board.rowDelta(1), -5);
            assert.strictEqual(board.rowDelta(2), -12);
        });
        it("should not be solved", () => {
            assert.strictEqual(board.isSolved(), false);
        });
        it("should be solved after toggling the correct cells", () => {
            board.toggle(0, 0);
            board.toggle(0, 2);
            board.toggle(1, 1);
            board.toggle(2, 0);
            board.toggle(2, 2);
            assert.strictEqual(board.isSolved(), true);
            assert.strictEqual(board.colDelta(0), 0);
            assert.strictEqual(board.rowDelta(1), 0);
        });
    });

    describe("Board generators", () => {
        it("should generate the given number of values", () => {
            const generator = RandomGenerator(5);
            const values = Array.from(generator);
            assert.strictEqual(values.length, 5);
        });
        it("should generate values between 1 and 10", () => {
            const generator = RandomGenerator(500);
            const values = Array.from(generator);
            values.forEach((value) => {
                assert(value >= 1 && value <= 10);
            });
        });
        it("should generate the given number of booleans", () => {
            const generator = BooleanGenerator(7);
            const values = Array.from(generator);
            assert.strictEqual(values.length, 7);
        });
    });
});
