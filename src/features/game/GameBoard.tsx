import React from "react";
import type { GameState } from "./types";
import { Cell } from "./Cell";

interface GameBoardProps {
  state: GameState;
  onToggle: (row: number, col: number) => void;
}

export const GameBoard = ({ state, onToggle }: GameBoardProps) => {
  const size = state.grid.length;

  return (
    <div
      data-testid="game-board"
      className="grid gap-px sm:gap-2 p-0.5 sm:p-4 bg-gray-200 rounded-xl shadow-lg w-fit mx-auto"
      style={{
        gridTemplateColumns: `repeat(${size}, min-content) min-content`,
      }}
    >
      {/* Grid Cells and Row Stats */}
      {state.grid.map((row, rowIndex) => (
        <React.Fragment key={`row-${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <Cell
              key={cell.id}
              cell={cell}
              onClick={() => onToggle(rowIndex, colIndex)}
              disabled={state.isWon}
            />
          ))}

          {/* Row Stats */}
          <div className="flex items-center justify-center px-px sm:px-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/60 rounded-full">
              <span
                className={`text-lg sm:text-xl font-black ${
                  state.rowCurrent[rowIndex] - state.rowTargets[rowIndex] === 0
                    ? "text-green-700"
                    : state.rowCurrent[rowIndex] - state.rowTargets[rowIndex] > 0
                      ? "text-red-700"
                      : "text-blue-700"
                }`}
              >
                {state.rowCurrent[rowIndex] - state.rowTargets[rowIndex] > 0
                  ? "+"
                  : ""}
                {state.rowCurrent[rowIndex] - state.rowTargets[rowIndex]}
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* Column Stats */}
      {Array.from({ length: size }).map((_, colIndex) => (
        <div
          key={`col-stat-${colIndex}`}
          className="flex flex-col items-center justify-center pt-1 sm:pt-2"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/60 rounded-full">
            <span
              className={`text-lg sm:text-xl font-black ${
                state.colCurrent[colIndex] - state.colTargets[colIndex] === 0
                  ? "text-green-700"
                  : state.colCurrent[colIndex] - state.colTargets[colIndex] > 0
                    ? "text-red-700"
                    : "text-blue-700"
              }`}
            >
              {state.colCurrent[colIndex] - state.colTargets[colIndex] > 0
                ? "+"
                : ""}
              {state.colCurrent[colIndex] - state.colTargets[colIndex]}
            </span>
          </div>
        </div>
      ))}

      {/* Bottom Right Empty Corner */}
      <div className="flex items-center justify-center" aria-hidden="true">
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};
