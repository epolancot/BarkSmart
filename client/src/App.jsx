import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBars/LandingNavBar'
import LandingFooter from './components/Footers/LandingFooter'
import Landing from './pages/Landing'


function App() {

  return (
    <>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <div className="flex-wrapper">
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          </main>
          <footer>
            <LandingFooter />
          </footer>
        </div>
        </div>
    </>
  )
}

export default App
