import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignGuide from "./pages/DesignGuide";
import GameScreen from "./pages/GameScreen";
import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <BrowserRouter basename="/DigitFidget">
      <Routes>
        <Route path="/design" element={<DesignGuide />} />
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
