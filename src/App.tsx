

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignGuide from "./pages/DesignGuide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design" element={<DesignGuide />} />
        <Route path="/DigitFidget/design" element={<DesignGuide />} />
        <Route path="/DigitFidget/design/" element={<DesignGuide />} />
        <Route
          path="/"
          element={
            <main className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">
                Hello World
              </h1>
            </main>
          }
        />
        <Route
          path="/DigitFidget"
          element={
            <main className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">
                Hello World
              </h1>
            </main>
          }
        />
        <Route
          path="/DigitFidget/"
          element={
            <main className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
              <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">
                Hello World
              </h1>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
