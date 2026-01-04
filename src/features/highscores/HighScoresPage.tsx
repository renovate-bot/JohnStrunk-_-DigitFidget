import { Link } from "react-router-dom";

export const HighScoresPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">High Scores</h1>
      <p className="text-gray-600 mb-8">Coming Soon!</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
      >
        Back to Menu
      </Link>
    </div>
  );
};
