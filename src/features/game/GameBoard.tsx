import React from "react";
import { GameState } from "./types";
import { Cell } from "./Cell";

interface GameBoardProps {
  state: GameState;
  onToggle: (row: number, col: number) => void;
}

export const GameBoard = ({ state, onToggle }: GameBoardProps) => {
  const size = state.grid.length;

  return (
    <div
      className="grid gap-2 p-4 bg-gray-200 rounded-xl shadow-lg"
      style={{
        gridTemplateColumns: `repeat(${size}, min-content) auto`,
        gridTemplateRows: `repeat(${size}, min-content) auto`,
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
          <div className="flex items-center px-4 min-w-[100px]">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase font-bold">
                Target
              </span>
              <span className="text-xl font-bold text-gray-800">
                {state.rowTargets[rowIndex]}
              </span>

              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-gray-500">Δ</span>
                <span
                  className={`font-mono font-bold ${
                    state.rowCurrent[rowIndex] - state.rowTargets[rowIndex] ===
                    0
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {state.rowCurrent[rowIndex] - state.rowTargets[rowIndex] > 0
                    ? "+"
                    : ""}
                  {state.rowCurrent[rowIndex] - state.rowTargets[rowIndex]}
                </span>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* Column Stats */}
      {Array.from({ length: size }).map((_, colIndex) => (
        <div
          key={`col-stat-${colIndex}`}
          className="flex flex-col items-center pt-2"
        >
          <span className="text-xs text-gray-500 uppercase font-bold">
            Target
          </span>
          <span className="text-xl font-bold text-gray-800">
            {state.colTargets[colIndex]}
          </span>

          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs text-gray-500">Δ</span>
            <span
              className={`font-mono font-bold ${
                state.colCurrent[colIndex] - state.colTargets[colIndex] === 0
                  ? "text-green-600"
                  : "text-red-500"
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
      <div></div>
    </div>
  );
};
