import { BrowserRouter, Route, Routes } from 'react-router'
import About from './About'
import './App.css'
import MainMenu from './MainMenu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DigitFidget">
          <Route index element={<MainMenu />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}
export default App
