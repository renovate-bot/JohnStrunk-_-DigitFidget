import { Difficulty } from "../game/types";

export interface HighScoreEntry {
  id: string;
  score: number;
  date: string; // ISO string
}

export type HighScores = Record<Difficulty, HighScoreEntry[]>;
