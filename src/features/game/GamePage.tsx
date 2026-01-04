import { Link, useParams } from "react-router-dom";

export const GamePage = () => {
  const { difficulty } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Game: {difficulty}
      </h1>
      <p className="text-gray-600 mb-8">Game board will be here.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
      >
        Quit Game
      </Link>
    </div>
  );
};
