export type Difficulty = 'easy' | 'medium' | 'hard' | 'extreme';

export interface Cell {
  id: string; // unique identifier (e.g., "row-col")
  value: number; // 1-9
  isOn: boolean;
}

export interface GameConfig {
  size: number;
}

export interface GameState {
  grid: Cell[][];
  rowTargets: number[];
  colTargets: number[];
  rowCurrent: number[];
  colCurrent: number[];
  isWon: boolean;
  moves: number;
  solutionOnCount: number; // Used for scoring
}

export const DIFFICULTY_CONFIG: Record<Difficulty, GameConfig> = {
  easy: { size: 3 },
  medium: { size: 4 },
  hard: { size: 5 },
  extreme: { size: 6 },
};
