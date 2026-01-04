import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { GamePage } from "./GamePage";
import * as gameLogic from "./gameLogic";
import type { GameState } from "./types";

// Mock the generatePuzzle to return a predictable state
const mockGeneratePuzzle = vi.spyOn(gameLogic, "generatePuzzle");

describe("GamePage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the game board for valid difficulty", async () => {
    // Mock a consistent 2x2 grid
    mockGeneratePuzzle.mockReturnValue({
      grid: [
        [
          { id: "0-0", value: 5, isOn: false },
          { id: "0-1", value: 1, isOn: false },
        ],
        [
          { id: "1-0", value: 3, isOn: false },
          { id: "1-1", value: 2, isOn: false },
        ],
      ],
      rowTargets: [6, 5],
      colTargets: [8, 3],
      rowCurrent: [0, 0],
      colCurrent: [0, 0],
      isWon: false,
      moves: 0,
      solutionOnCount: 4,
    } as unknown as GameState);

    render(
      <MemoryRouter initialEntries={["/game/medium"]}>
        <Routes>
          <Route path="/game/:difficulty" element={<GamePage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Medium Puzzle")).toBeInTheDocument();

    const movesContainer = screen.getByText(/Moves:/).closest("div");
    expect(movesContainer).toHaveTextContent("Moves: 0");

    // Check for buttons
    expect(
      screen.getByRole("button", { name: /Toggle value 5/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Toggle value 3/i }),
    ).toBeInTheDocument();

    // Check for targets (text content)
    // We expect multiple '5's (one in grid, one in target)
    const fives = screen.getAllByText("5");
    expect(fives.length).toBeGreaterThanOrEqual(1);

    // Target 6 should be present
    expect(screen.getByText("6")).toBeInTheDocument();
  });

  it("redirects to home for invalid difficulty", () => {
    render(
      <MemoryRouter initialEntries={["/game/invalid"]}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/game/:difficulty" element={<GamePage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("handles cell clicks", async () => {
    // Setup a simple 1x1 game
    const initialState = {
      grid: [[{ id: "0-0", value: 5, isOn: false }]],
      rowTargets: [5],
      colTargets: [5],
      rowCurrent: [0],
      colCurrent: [0],
      isWon: false,
      moves: 0,
      solutionOnCount: 1,
    };

    mockGeneratePuzzle.mockReturnValue(initialState as unknown as GameState);

    render(
      <MemoryRouter initialEntries={["/game/easy"]}>
        <Routes>
          <Route path="/game/:difficulty" element={<GamePage />} />
        </Routes>
      </MemoryRouter>,
    );

    const cellButton = screen.getByRole("button", { name: /Toggle value 5/i });
    fireEvent.click(cellButton);

    await waitFor(() => {
      const movesContainer = screen.getByText(/Moves:/).closest("div");
      expect(movesContainer).toHaveTextContent("Moves: 1");
    });

    expect(screen.getByText("Solved!")).toBeInTheDocument();
  });

  it("shows win modal when game is won", () => {
    // Setup a state that is already won
    const wonState = {
      grid: [[{ id: "0-0", value: 5, isOn: true }]],
      rowTargets: [5],
      colTargets: [5],
      rowCurrent: [5],
      colCurrent: [5],
      isWon: true,
      moves: 1,
      solutionOnCount: 1,
    };

    mockGeneratePuzzle.mockReturnValue(wonState as unknown as GameState);

    render(
      <MemoryRouter initialEntries={["/game/easy"]}>
        <Routes>
          <Route path="/game/:difficulty" element={<GamePage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Solved!")).toBeInTheDocument();
    expect(screen.getByText("Play Again")).toBeInTheDocument();
  });
});
