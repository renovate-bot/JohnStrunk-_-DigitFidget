import type { Difficulty } from "../game/types";
import type { HighScoreEntry, HighScores } from "./types";

const STORAGE_KEY = "digit-fidget-high-scores";
const MAX_SCORES = 10;

const getStoredScores = (): HighScores => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return {
      easy: [],
      medium: [],
      hard: [],
      extreme: [],
    };
  }
  try {
    return JSON.parse(stored);
  } catch {
    return {
      easy: [],
      medium: [],
      hard: [],
      extreme: [],
    };
  }
};

export const getHighScores = (difficulty: Difficulty): HighScoreEntry[] => {
  const scores = getStoredScores();
  return scores[difficulty] || [];
};

export const saveScore = (difficulty: Difficulty, score: number): boolean => {
  const allScores = getStoredScores();
  const difficultyScores = allScores[difficulty] || [];

  const newEntry: HighScoreEntry = {
    id: crypto.randomUUID(),
    score,
    date: new Date().toISOString(),
  };

  // Add new score
  difficultyScores.push(newEntry);

  // Sort ascending (lower is better)
  difficultyScores.sort((a, b) => a.score - b.score);

  // Keep top N
  const topScores = difficultyScores.slice(0, MAX_SCORES);

  // Check if our new score made the cut
  const isHighScore = topScores.some((s) => s.id === newEntry.id);

  allScores[difficulty] = topScores;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allScores));

  return isHighScore;
};
