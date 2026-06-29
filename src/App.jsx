import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import camera from './img/camera.png'  
import './App.css'
import  Pokedex  from './Pokedex.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div className="container">
      <div className="cabeceraInicio">
        <img className="camera" src={camera} alt="camera" />
        <h1>Pokèdex API REACT</h1>
      </div>

      <nav className="menu">
        <ul>
          <li><Link to="/pokedex">Pokédex (consumo API)</Link></li>
          <li><a href="https://github.com/SergioCalvoAguilarDev/pokedex-react" target="_blank" rel="noopener noreferrer">Repositorio GitHub</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default App
