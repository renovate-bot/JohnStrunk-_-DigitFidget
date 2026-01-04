import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { MainMenu } from "./features/menu/MainMenu";
import { AboutPage } from "./features/about/AboutPage";
import { HighScoresPage } from "./features/highscores/HighScoresPage";
import { GamePage } from "./features/game/GamePage";

function App() {
  return (
    <BrowserRouter basename="/DigitFidget">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/high-scores" element={<HighScoresPage />} />
        <Route path="/game/:difficulty" element={<GamePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
