import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            About Digit Fidget
          </h1>
          <Link
            to="/"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 transition-colors"
          >
            Back
          </Link>
        </div>

        <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
          <p>
            Digit Fidget is a single-player puzzle game where the objective is
            to toggle digits on a grid to achieve a specific target
            configuration. The grid is a square of size N x N, where each cell
            contains a digit from 1 to 9. Each row and column have a target sum
            that must be achieved by toggling the digits. A cell that is "off"
            contributes 0 to the sum, while a cell that is "on" contributes its
            digit value.
          </p>

          <h2 className="text-xl font-semibold mt-4">Game generation</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The game difficulties are defined by the size of the grid (N),
              with larger grids being more challenging.
            </li>
            <li>
              Each cell in the grid is initialized with a digit from 1 to 9.
            </li>
            <li>
              To create a solvable puzzle, a random configuration of "on" and
              "off" cells is generated, and the corresponding target sums for
              each row and column are calculated based on this configuration.
              This configured state is hidden from the player.
            </li>
            <li>All cells start in the "off" state when the game begins.</li>
            <li>
              This generation process ensures that there is at least one
              solution to the puzzle.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Winning conditions</h2>
          <p>
            The player wins the game by toggling the cells such that the sum of
            the "on" digits in each row and each column matches the predefined
            target sums. Any configuration that meets these conditions is
            considered a valid solution.
          </p>

          <h2 className="text-xl font-semibold mt-4">Additional notes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The cell values and their states are visible to the player at all
              times.
            </li>
            <li>
              The player is shown the "delta" between the current sums and the
              target sums for each row and column to help guide their decisions.
              For example, if a row has a target sum of 15 and the current sum
              of "on" digits is 10, the delta would be -5, because the player
              needs to increase the sum by 5 to reach the target.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Scoring</h2>
          <p>
            The player's score is the number of excess toggles taken to reach
            the solution. The lower the number of excess toggles, the better the
            score. Excess toggles are calculated as the total number of toggles
            made minus the number of "on" cells in the solved configuration that
            the player finds.
          </p>
        </div>
      </div>
    </div>
  );
};
