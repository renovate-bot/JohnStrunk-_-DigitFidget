import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { DIFFICULTY_CONFIG } from "./types";
import type { Difficulty, GameState } from "./types";
import { generatePuzzle, toggleCell } from "./gameLogic";
import { GameBoard } from "./GameBoard";
import { saveScore } from "../highscores/scoreStorage";

export const GamePage = () => {
  const { difficulty } = useParams<{ difficulty: string }>();
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isHighScore, setIsHighScore] = useState(false);

  // Validate difficulty
  const config = DIFFICULTY_CONFIG[difficulty as Difficulty];

  useEffect(() => {
    if (config) {
      // eslint-disable-next-line
      setGameState(generatePuzzle(config.size));
      setIsHighScore(false);
    }
  }, [difficulty, config]);

  if (!config) {
    return <Navigate to="/" replace />;
  }

  if (!gameState) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  const handleToggle = (row: number, col: number) => {
    if (!gameState) return;
    const newState = toggleCell(gameState, row, col);
    setGameState(newState);

    if (newState.isWon && !gameState.isWon && difficulty) {
      const score = newState.moves - newState.solutionOnCount;
      const isNewHigh = saveScore(difficulty as Difficulty, Math.max(0, score));
      setIsHighScore(isNewHigh);
    }
  };

  const handleRestart = () => {
    setGameState(generatePuzzle(config.size));
  };

  const calculateScore = () => {
    return gameState.moves - gameState.solutionOnCount;
  };

  const difficultyTitle = difficulty
    ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
    : "";

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {difficultyTitle} Puzzle
        </h1>
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded shadow text-gray-700">
            Moves: <span className="font-bold">{gameState.moves}</span>
          </div>
          <Link
            to="/"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 transition-colors"
          >
            Exit
          </Link>
        </div>
      </div>

      <GameBoard state={gameState} onToggle={handleToggle} />

      {gameState.isWon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-sm w-full text-center animate-in fade-in zoom-in duration-300">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">Solved!</h2>
            <p className="text-gray-600 mb-6">You matched all the targets.</p>

            <div className="bg-gray-100 p-4 rounded-lg mb-6 relative">
              {isHighScore && (
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-md animate-bounce">
                  NEW RECORD!
                </div>
              )}
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Excess Toggles
              </p>
              <p className="text-5xl font-bold text-gray-800">
                {Math.max(0, calculateScore())}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleRestart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Play Again
              </button>
              <Link
                to="/"
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Back to Menu
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
