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
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-900 font-bold">
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
    <main className="flex flex-col items-center min-h-screen bg-gray-50 p-1 sm:p-4 pb-24">
      <header className="w-full max-w-md flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-2 sm:gap-4 px-2">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900">
          {difficultyTitle} Puzzle
        </h1>
        <div className="bg-white px-6 py-2 rounded-full shadow-md text-gray-900 font-black border-2 border-primary-100">
          Moves: {gameState.moves}
        </div>
      </header>

      <section className="w-full overflow-x-auto flex justify-center py-4">
        <GameBoard state={gameState} onToggle={handleToggle} />
      </section>

      {/* Mobile-friendly bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 flex justify-center gap-4 z-40">
        <button
          onClick={handleRestart}
          aria-label="Restart Puzzle"
          className="flex-1 max-w-[160px] px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg"
        >
          Restart
        </button>
        <Link
          to="/"
          className="flex-1 max-w-[160px] px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl text-center transition-all active:scale-95 shadow-lg border-2 border-gray-200"
        >
          Exit
        </Link>
      </nav>

      {gameState.isWon && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <section className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full text-center animate-in fade-in zoom-in duration-300 border-4 border-primary-200" role="alertdialog" aria-labelledby="won-title">
            <h2 id="won-title" className="text-4xl font-black text-primary-900 mb-2">
              Solved!
            </h2>
            <p className="text-gray-700 font-medium mb-6">
              You matched all the targets.
            </p>

            <div className="bg-primary-50 p-6 rounded-2xl mb-8 relative border-2 border-primary-100">
              {isHighScore && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-950 text-xs font-black px-3 py-1 rounded-full shadow-md animate-bounce border-2 border-yellow-500 whitespace-nowrap">
                  NEW RECORD!
                </div>
              )}
              <p className="text-xs text-primary-800 uppercase font-black tracking-widest mb-1">
                Excess Toggles
              </p>
              <p className="text-6xl font-black text-gray-900">
                {Math.max(0, calculateScore())}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleRestart}
                className="w-full bg-primary-800 hover:bg-primary-900 text-white font-black py-4 px-6 rounded-xl transition-all shadow-lg active:scale-95 text-lg"
              >
                Play Again
              </button>
              <Link
                to="/"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-black py-4 px-6 rounded-xl transition-all active:scale-95 text-lg"
              >
                Back to Menu
              </Link>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};
