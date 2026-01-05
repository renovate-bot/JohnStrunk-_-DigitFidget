import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8 pb-24">
      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            About Digit Fidget
          </h1>
          <nav className="hidden sm:block">
            <Link
              to="/"
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-900 font-black transition-all active:scale-95"
            >
              Back
            </Link>
          </nav>
        </header>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          <section>
            <p className="text-lg font-medium">
              Digit Fidget is a single-player puzzle game where the objective is
              to toggle digits on a grid to achieve a specific target
              configuration.
            </p>
            <p className="mt-4">
              The grid is a square of size N x N, where each cell contains a
              digit from 1 to 9. Each row and column have a target sum that must
              be achieved by toggling the digits. A cell that is "off"
              contributes 0 to the sum, while a cell that is "on" contributes
              its digit value.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-primary-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary-600 rounded-full"></span>
              Game Generation
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary-800 font-black">1.</span>
                <span>
                  The game difficulties are defined by the size of the grid,
                  with larger grids being more challenging.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-800 font-black">2.</span>
                <span>
                  Each cell in the grid is initialized with a digit from 1 to 9.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-800 font-black">3.</span>
                <span>
                  To ensure solvability, a target configuration is
                  pre-calculated and hidden from the player.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-800 font-black">4.</span>
                <span>
                  This process guarantees that there is at least one valid
                  solution to every puzzle.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-primary-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary-600 rounded-full"></span>
              Winning Conditions
            </h2>
            <p>
              Match the sum of "on" digits in each row and column to their
              respective targets. The "delta" display helps you track how far
              you are from the goal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-primary-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary-600 rounded-full"></span>
              Scoring
            </h2>
            <p>
              Your score is based on **excess toggles**. This is the total
              number of moves minus the number of "on" cells in the solution.
              Lower scores are better!
            </p>
          </section>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 flex justify-center z-40">
        <Link
          to="/"
          className="w-full max-w-xs px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-black rounded-xl text-center transition-all active:scale-95 shadow-lg text-lg border-2 border-gray-200"
        >
          Back to Menu
        </Link>
      </nav>
    </main>
  );
};
