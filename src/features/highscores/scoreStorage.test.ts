import { getHighScores, saveScore } from "./scoreStorage";

describe("scoreStorage", () => {
  beforeEach(() => {
    localStorage.clear();
    // Mock crypto.randomUUID
    Object.defineProperty(global, "crypto", {
      value: {
        randomUUID: () => Math.random().toString(),
      },
      writable: true,
    });
  });

  it("returns empty array for no scores", () => {
    expect(getHighScores("easy")).toEqual([]);
  });

  it("saves a score", () => {
    const isHigh = saveScore("easy", 10);
    expect(isHigh).toBe(true);

    const scores = getHighScores("easy");
    expect(scores).toHaveLength(1);
    expect(scores[0].score).toBe(10);
  });

  it("sorts scores ascending", () => {
    saveScore("easy", 20);
    saveScore("easy", 10);
    saveScore("easy", 30);

    const scores = getHighScores("easy");
    expect(scores).toHaveLength(3);
    expect(scores[0].score).toBe(10);
    expect(scores[1].score).toBe(20);
    expect(scores[2].score).toBe(30);
  });

  it("limits to top 10 scores", () => {
    for (let i = 0; i < 15; i++) {
      saveScore("medium", i);
    }

    const scores = getHighScores("medium");
    expect(scores).toHaveLength(10);
    // Should have kept 0-9
    expect(scores[0].score).toBe(0);
    expect(scores[9].score).toBe(9);
  });

  it("returns false if score did not make the cut", () => {
    // Fill with better scores
    for (let i = 0; i < 10; i++) {
      saveScore("hard", 5);
    }

    // Try to add a worse score
    const isHigh = saveScore("hard", 10);
    expect(isHigh).toBe(false);
  });
});
