import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Passengers from './pages/Passengers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="passengers" element={<Passengers />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
