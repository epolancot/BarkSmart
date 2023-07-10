import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import LandingNavBar from './components/NavBars/LandingNavBar'
import UserNavBar from './components/NavBars/UserNavBar'
import LandingFooter from './components/Footers/LandingFooter'
import Landing from './pages/Landing'
import SearchApi from './pages/SearchApi'
import LoginUser from './pages/LoginUser'
import RegisterUser from './pages/RegisterUser'
import HomeUser from './pages/HomeUser'


function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  let navBar
  if (user) {
    navBar = <UserNavBar handleLogOut={handleLogOut}/>
  } else {
    navBar = <LandingNavBar />
  }


  return (
    <>
      <div className="App">
        <header>
          {navBar}
        </header>
        <div className="flex-wrapper">
          <main>
            <Routes>
              <Route path="/" element={<Landing user={user}/>} />
              <Route path="/login" element={<LoginUser setUser={setUser}/>} />
              <Route path="/user/register" element={<RegisterUser setUser={setUser}/>} />
              <Route path="/search-api" element={<SearchApi />} user={user} />
              <Route path="/home" element={<HomeUser user={user}/>} />
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
