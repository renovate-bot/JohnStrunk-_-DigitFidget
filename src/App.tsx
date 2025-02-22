import About from '@/components/About'
import Game from '@/components/Game'
import MainMenu from '@/components/MainMenu'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DigitFidget">
          <Route index element={<MainMenu />} />
          <Route path="about" element={<About />} />
          <Route path="game/:size" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}
export default App
