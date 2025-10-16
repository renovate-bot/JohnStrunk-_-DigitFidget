import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignGuide from "./pages/DesignGuide";
import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design" element={<DesignGuide />} />
        <Route path="/DigitFidget/design" element={<DesignGuide />} />
        <Route path="/DigitFidget/design/" element={<DesignGuide />} />
        <Route path="/" element={<MainMenu />} />
        <Route path="/DigitFidget" element={<MainMenu />} />
        <Route path="/DigitFidget/" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
