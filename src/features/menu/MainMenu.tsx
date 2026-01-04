import { Link } from "react-router-dom";

export const MainMenu = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-primary-900 mb-12 text-center">
        Digit Fidget
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-xs mb-12">
        <Link
          to="/game/easy"
          className="bg-green-800 hover:bg-green-900 text-white font-bold py-4 px-6 rounded-xl text-center shadow-md transition-all active:scale-95 text-lg"
        >
          Easy
        </Link>
        <Link
          to="/game/medium"
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-xl text-center shadow-md transition-all active:scale-95 text-lg"
        >
          Medium
        </Link>
        <Link
          to="/game/hard"
          className="bg-orange-800 hover:bg-orange-900 text-white font-bold py-4 px-6 rounded-xl text-center shadow-md transition-all active:scale-95 text-lg"
        >
          Hard
        </Link>
        <Link
          to="/game/extreme"
          className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 px-6 rounded-xl text-center shadow-md transition-all active:scale-95 text-lg"
        >
          Extreme
        </Link>
      </div>

      <nav className="flex gap-2">
        <Link
          to="/about"
          className="text-primary-800 hover:text-primary-950 font-bold underline decoration-2 underline-offset-4 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          About
        </Link>
        <span className="text-gray-400 flex items-center" aria-hidden="true">
          |
        </span>
        <Link
          to="/high-scores"
          className="text-primary-800 hover:text-primary-950 font-bold underline decoration-2 underline-offset-4 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          High Scores
        </Link>
      </nav>
    </main>
  );
};
