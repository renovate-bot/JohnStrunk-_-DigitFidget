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
          <div className="flex items-center justify-center px-0 sm:px-4 min-w-[36px] sm:min-w-[80px]">
            <div className="flex flex-col items-center">
              <span className="text-[9px] sm:text-xs text-gray-600 uppercase font-black leading-none mb-0.5">
                Tgt
              </span>
              <span className="text-base sm:text-xl font-black text-gray-900 leading-none">
                {state.rowTargets[rowIndex]}
              </span>

              <div className="flex items-center gap-0.5 mt-0.5 sm:mt-1">
                <span className="text-[9px] text-gray-600 font-bold">Δ</span>
                <span
                  className={`text-xs sm:text-base font-mono font-black ${
                    state.rowCurrent[rowIndex] - state.rowTargets[rowIndex] ===
                    0
                      ? "text-green-800"
                      : "text-red-700"
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
          className="flex flex-col items-center pt-0.5 sm:pt-2"
        >
          <span className="text-[9px] sm:text-xs text-gray-600 uppercase font-black leading-none mb-0.5">
            Tgt
          </span>
          <span className="text-sm sm:text-xl font-black text-gray-900 leading-none">
            {state.colTargets[colIndex]}
          </span>

          <div className="flex items-center gap-0.5 mt-0.5 sm:mt-1">
            <span className="text-[9px] text-gray-600 font-bold">Δ</span>
            <span
              className={`text-xs sm:text-base font-mono font-black ${
                state.colCurrent[colIndex] - state.colTargets[colIndex] === 0
                  ? "text-green-800"
                  : "text-red-700"
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
      <div className="flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};
