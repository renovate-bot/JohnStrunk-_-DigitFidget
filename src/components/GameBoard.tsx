import React from "react";
import type { Board, Deltas } from "../game/types";

export interface GameBoardProps {
    board: Board;
    deltas: Deltas;
    size: number;
    onCellToggle?: (row: number, col: number) => void;
    className?: string;
}

export function GameBoard({ board, deltas, size, onCellToggle, className = "" }: GameBoardProps) {
    // Dynamic grid style for columns and rows
    const gridStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${String(size + 1)}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${String(size + 1)}, minmax(0, 1fr))`,
        gap: 0,
    };
    return (
        <div className={`inline-block ${className}`.trim()}>
            <div style={gridStyle}>
                {/* Board cells and row deltas */}
                {board.map((rowArr, rowIdx) => (
                    <React.Fragment key={`row-${String(rowIdx)}`}>
                        {rowArr.map((cell, colIdx) => (
                            <div
                                key={`cell-${String(rowIdx)}-${String(colIdx)}`}
                                data-testid={`cell-${String(rowIdx)}-${String(colIdx)}`}
                                className={
                                    `w-6 h-6 flex items-center justify-center font-body text-xs sm:w-8 sm:h-8 sm:text-base m-px ` +
                                    (cell.on
                                        ? "border-t-4 border-t-ega-light-gray border-l-4 border-l-ega-light-gray border-b-4 border-b-ega-cyan border-r-4 border-r-ega-cyan bg-ega-yellow text-ega-black hover:bg-ega-light-gray"
                                        : "border-t-4 border-t-ega-cyan border-l-4 border-l-ega-cyan border-b-4 border-b-ega-light-gray border-r-4 border-r-ega-light-gray bg-ega-dark-gray text-ega-yellow hover:bg-ega-blue"
                                    )
                                }
                                onClick={() => onCellToggle?.(rowIdx, colIdx)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Toggle cell ${String(rowIdx + 1)},${String(colIdx + 1)}`}
                            >
                                {cell.value}
                            </div>
                        ))}
                        {/* Row delta */}
                        <div
                            key={`row-delta-${String(rowIdx)}`}
                            data-testid={`row-delta-${String(rowIdx)}`}
                            className={
                                `w-6 h-6 flex items-center justify-center font-display text-xs sm:w-8 sm:h-8 sm:text-base ` +
                                (deltas.row[rowIdx] < 0
                                    ? "text-ega-light-red bg-ega-black"
                                    : deltas.row[rowIdx] > 0
                                        ? "text-ega-yellow bg-ega-black"
                                        : "text-ega-light-green bg-ega-black"
                                )
                            }
                        >
                            {deltas.row[rowIdx] > 0 ? "+" : ""}{deltas.row[rowIdx]}
                        </div>
                    </React.Fragment>
                ))}
                {/* Column deltas */}
                {deltas.col.map((delta, colIdx) => (
                    <div
                        key={`col-delta-${String(colIdx)}-${String(delta)}`}
                        data-testid={`col-delta-${String(colIdx)}`}
                        className={
                            `w-6 h-6 flex items-center justify-center font-display text-xs sm:w-8 sm:h-8 sm:text-base ` +
                            (delta < 0
                                ? "text-ega-light-red bg-ega-black"
                                : delta > 0
                                    ? "text-ega-yellow bg-ega-black"
                                    : "text-ega-light-green bg-ega-black"
                            )
                        }
                    >
                        {delta > 0 ? "+" : ""}{delta}
                    </div>
                ))}
                {/* Empty corner for alignment */}
                <div className="w-6 h-6 sm:w-8 sm:h-8"></div>
            </div>
        </div>
    );
}

export default GameBoard;
