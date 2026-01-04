import { useState } from "react";
import { Link } from "react-router-dom";
import type { Difficulty } from "../game/types";
import { getHighScores } from "./scoreStorage";

export const HighScoresPage = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const scores = getHighScores(difficulty);

  const difficulties: Difficulty[] = ["easy", "medium", "hard", "extreme"];

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 p-4 sm:p-8 pb-24">
      <h1 className="text-4xl font-black text-gray-900 mb-8">High Scores</h1>

      {/* Difficulty Tabs */}
      <nav className="flex flex-wrap justify-center gap-2 mb-8 bg-gray-200 p-1.5 rounded-xl w-full max-w-md" aria-label="Difficulty Selection">
        {difficulties.map((diff) => (
          <button
            key={diff}
            onClick={() => setDifficulty(diff)}
            className={`flex-1 min-w-[80px] px-3 py-2 rounded-lg capitalize transition-all font-black text-sm ${
              difficulty === diff
                ? "bg-white text-primary-800 shadow-md"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-300"
            }`}
            aria-pressed={difficulty === diff}
          >
            {diff}
          </button>
        ))}
      </nav>

      {/* Scores View */}
      <section className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
        {/* Table for desktop/tablet */}
        <div className="hidden sm:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-100">
              <tr>
                <th className="py-4 px-6 text-left text-xs font-black text-gray-500 uppercase tracking-widest">
                  Rank
                </th>
                <th className="py-4 px-6 text-right text-xs font-black text-gray-500 uppercase tracking-widest">
                  Excess Toggles
                </th>
                <th className="py-4 px-6 text-right text-xs font-black text-gray-500 uppercase tracking-widest">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {scores.length > 0 ? (
                scores.map((score, index) => (
                  <tr key={score.id} className="hover:bg-primary-50/30 transition-colors">
                    <td className="py-4 px-6 text-gray-900 font-black">
                      #{index + 1}
                    </td>
                    <td className="py-4 px-6 text-right text-gray-900 font-black text-lg">
                      {score.score}
                    </td>
                    <td className="py-4 px-6 text-right text-gray-600 font-medium text-sm">
                      {new Date(score.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="py-12 text-center text-gray-400 italic font-medium"
                  >
                    No scores yet for this difficulty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* List for mobile */}
        <div className="sm:hidden divide-y divide-gray-100">
          {scores.length > 0 ? (
            scores.map((score, index) => (
              <div key={score.id} className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-black text-primary-800/20">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest">
                      Excess Toggles
                    </p>
                    <p className="text-2xl font-black text-gray-900">
                      {score.score}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Date
                  </p>
                  <p className="text-sm font-bold text-gray-600">
                    {new Date(score.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-gray-400 italic font-medium">
              No scores yet for this difficulty.
            </div>
          )}
        </div>
      </section>

      {/* Thumb-friendly back button */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 flex justify-center z-40">
        <Link
          to="/"
          className="w-full max-w-xs px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white font-black rounded-xl text-center transition-all active:scale-95 shadow-lg text-lg"
        >
          Back to Menu
        </Link>
      </nav>
    </main>
  );
};
