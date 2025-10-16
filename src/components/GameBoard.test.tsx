import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { Board, Deltas } from "../game/types";
import GameBoard from "./GameBoard";

afterEach(() => {
    cleanup();
});

describe("GameBoard", () => {
    const board: Board = [
        [{ value: 7, on: true }, { value: 2, on: false }, { value: 7, on: true }],
        [{ value: 2, on: false }, { value: 7, on: true }, { value: 2, on: false }],
        [{ value: 7, on: true }, { value: 7, on: true }, { value: 2, on: false }],
    ];
    const deltas: Deltas = {
        row: [-3, 0, 2],
        col: [-2, 0, 4],
    };
    const size = 3;

    it("renders correct number of cells and deltas", () => {
        render(<GameBoard board={board} deltas={deltas} size={size} />);
        expect(screen.getAllByTestId(/cell-/).length).toBe(9);
        expect(screen.getAllByTestId(/row-delta-/).length).toBe(3);
        expect(screen.getAllByTestId(/col-delta-/).length).toBe(3);
    });

    it("renders cell values and styles", () => {
        render(<GameBoard board={board} deltas={deltas} size={size} />);
        const cell = screen.getAllByTestId("cell-0-0")[0];
        expect(cell).toHaveTextContent("7");
        expect(cell).toHaveClass("bg-ega-yellow");
        const offCell = screen.getAllByTestId("cell-0-1")[0];
        expect(offCell).toHaveTextContent("2");
        expect(offCell).toHaveClass("bg-ega-dark-gray");
    });

    it("calls onCellToggle when cell is clicked", () => {
        const onCellToggle = vi.fn();
        render(<GameBoard board={board} deltas={deltas} size={size} onCellToggle={onCellToggle} />);
        const cell = screen.getAllByTestId("cell-0-0")[0];
        fireEvent.click(cell);
        expect(onCellToggle).toHaveBeenCalledWith(0, 0);
    });

    it("supports different board sizes", () => {
        const smallBoard: Board = [[{ value: 1, on: false }]];
        const smallDeltas: Deltas = { row: [0], col: [0] };
        render(<GameBoard board={smallBoard} deltas={smallDeltas} size={1} />);
        expect(screen.getAllByTestId(/cell-/).length).toBe(1);
        expect(screen.getAllByTestId("cell-0-0")[0]).toHaveTextContent("1");
        expect(screen.getAllByTestId(/row-delta-/).length).toBe(1);
        expect(screen.getAllByTestId(/col-delta-/).length).toBe(1);
    });
});
