import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import LandingNavBar from './components/NavBars/LandingNavBar'
import UserNavBar from './components/NavBars/UserNavBar'
import TrainerNavBar from './components/NavBars/TrainerNavBar'
import Footer from './components/Footers/Footer'
import Landing from './pages/Open/Landing'
import SearchApi from './pages/Shared/SearchApi'
import LoginUser from './pages/Users/LoginUser'
import RegisterUser from './pages/Users/RegisterUser'
import HomeUser from './pages/Users/HomeUser'
import SearchTrainer from './pages/Users/SearchTrainers'
import LoginTrainer from './pages/Trainers/LoginTrainer'
import RegisterTrainer from './pages/Trainers/RegisterTrainer'
import HomeTrainer from './pages/Trainers/HomeTrainer'
import TrainerDetails from './pages/Users/TrainerDetails'


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
    if (user.accountType === "trainer") {
      navBar = <TrainerNavBar handleLogOut={handleLogOut} user={user}/>
    } else {
      navBar = <UserNavBar handleLogOut={handleLogOut} user={user}/>
    }
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
              <Route path="/search-api" element={<SearchApi />} user={user} />
              <Route path="/trainer/home" element={<HomeTrainer user={user}/>} />
              <Route path="/user/login" element={<LoginUser setUser={setUser}/>} />
              <Route path="/user/register" element={<RegisterUser setUser={setUser}/>} />
              <Route path="/user/home/:id" element={<HomeUser user={user}/>} />
              <Route path="/user/search/trainer" element={<SearchTrainer user={user}/>} />
              <Route path="/trainer/login" element={<LoginTrainer setUser={setUser}/>} />
              <Route path="/trainer/register" element={<RegisterTrainer setUser={setUser}/>} />
              <Route path="/trainer/id/:id" element={<TrainerDetails setUser={setUser}/>} />
            </Routes>
          </main>
          <footer>
            <Footer user={user}/>
          </footer>
        </div>
        </div>
    </>
  )
}

export default App
