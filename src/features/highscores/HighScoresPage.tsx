import { useState } from "react";
import { Link } from "react-router-dom";
import { Difficulty } from "../game/types";
import { getHighScores } from "./scoreStorage";

export const HighScoresPage = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const scores = getHighScores(difficulty);

  const difficulties: Difficulty[] = ["easy", "medium", "hard", "extreme"];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">High Scores</h1>

      {/* Difficulty Tabs */}
      <div className="flex gap-2 mb-8 bg-gray-200 p-1 rounded-lg">
        {difficulties.map((diff) => (
          <button
            key={diff}
            onClick={() => setDifficulty(diff)}
            className={`px-4 py-2 rounded-md capitalize transition-colors ${
              difficulty === diff
                ? "bg-white text-blue-600 font-bold shadow-sm"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-300"
            }`}
          >
            {diff}
          </button>
        ))}
      </div>

      {/* Scores Table */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-bold text-gray-500 uppercase">
                Rank
              </th>
              <th className="py-3 px-4 text-right text-xs font-bold text-gray-500 uppercase">
                Excess Toggles
              </th>
              <th className="py-3 px-4 text-right text-xs font-bold text-gray-500 uppercase">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {scores.length > 0 ? (
              scores.map((score, index) => (
                <tr key={score.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800 font-medium">
                    #{index + 1}
                  </td>
                  <td className="py-3 px-4 text-right text-gray-800 font-bold">
                    {score.score}
                  </td>
                  <td className="py-3 px-4 text-right text-gray-500 text-sm">
                    {new Date(score.date).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="py-8 text-center text-gray-400 italic"
                >
                  No scores yet for this difficulty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
      >
        Back to Menu
      </Link>
    </div>
  );
};
