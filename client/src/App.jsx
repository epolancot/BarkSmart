import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBars/LandingNavBar'
import Landing from './pages/Landing'


function App() {

  return (
    <>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
