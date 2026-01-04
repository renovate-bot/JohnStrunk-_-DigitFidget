import { Link } from "react-router-dom";

export const MainMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-12">Digit Fidget</h1>

      <div className="flex flex-col gap-4 w-full max-w-xs mb-8">
        <Link
          to="/game/easy"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
        >
          Easy
        </Link>
        <Link
          to="/game/medium"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
        >
          Medium
        </Link>
        <Link
          to="/game/hard"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
        >
          Hard
        </Link>
        <Link
          to="/game/extreme"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
        >
          Extreme
        </Link>
      </div>

      <div className="flex gap-4">
        <Link
          to="/about"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          About
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          to="/high-scores"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          High Scores
        </Link>
      </div>
    </div>
  );
};
