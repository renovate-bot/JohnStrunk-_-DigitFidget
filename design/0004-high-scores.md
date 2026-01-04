# High Scores

Implement the High Scores functionality for Digit Fidget.

## Description

This feature enables the tracking and display of the player's best scores for
each difficulty level. Scores are based on the "Excess Toggles" metric, where
a lower score is better. For the initial implementation, high scores will be
persisted using the browser's `localStorage`.

## Requirements

1. **Score Storage:**
   - Persist high scores using `localStorage` so they survive page reloads.
   - Store a list of top scores for each difficulty level (Easy, Medium, Hard,
     Extreme).
   - Limit the storage to the top 10 scores per difficulty.
   - Each score entry should record:
     - Score (Excess Toggles)
     - Date/Time achieved
     - (Optional) Player Name (default to "Anonymous" if no input)

2. **Score Tracking:**
   - Upon winning a game, calculate the score (Excess Toggles).
   - Check if the new score qualifies for the top 10 list for that difficulty.
   - If it qualifies, add it to the list and save.
   - Sort the list in ascending order of scores (lower is better).

3. **High Scores Page:**
   - Display the "High Scores" page (already routed to `/high-scores`).
   - Provide a way to switch between difficulty levels (tabs or dropdown).
   - Display the top 10 scores for the selected difficulty in a table or list.
   - Show columns for Rank, Score, and Date.
   - Include a "Back to Menu" button.

4. **Game Over Integration:**
   - Update the "Game Over" / "You Win!" modal to display if a new high score
     was achieved.
   - (Optional) Allow entering a name if a high score is achieved.

## Development tasks

- [ ] Create `src/features/highscores/scoreStorage.ts` to handle `localStorage`
      operations.
- [ ] Define types for `HighScoreEntry`.
- [ ] Implement `saveScore(difficulty, score)` and
      `getScores(difficulty)` functions.
- [ ] Update `HighScoresPage.tsx` to display the scores.
  - Add difficulty selector.
  - Render score list.
- [ ] Update `GamePage.tsx` to save the score upon winning.
  - Check for high score.
  - Display "New High Score!" message.

## Test plan

- **Storage Test:** Verify that scores can be saved to and retrieved from
  `localStorage`.
- **Limit Test:** Verify that only the top 10 scores are kept.
- **Sorting Test:** Verify that scores are sorted ascending (lower is better).
- **Display Test:** Verify the High Scores page renders the list correctly for
  each difficulty.
- **Integration Test:** Win a game and verify the score appears in the High
  Scores list.
