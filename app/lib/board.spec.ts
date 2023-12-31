import assert from "assert";
import { Board } from "./board";

describe("Board", () => {
    it("should be created with the given size", () => {
        const board = new Board(5);
        assert.strictEqual(board.size, 5);
    });
});
