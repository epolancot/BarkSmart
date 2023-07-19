import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import LandingNavBar from './components/NavBars/LandingNavBar'
import UserNavBar from './components/NavBars/UserNavBar'
import TrainerNavBar from './components/NavBars/TrainerNavBar'
import Footer from './components/Footers/Footer'
import About from './pages/Open/About'
import SearchApi from './pages/Shared/SearchApi'
import ApiDogDetails from './pages/Shared/ApiDogDetails'
import DogDetails from './pages/Shared/DogDetails'
import Messages from './pages/Shared/Messages'
import MessageDetails from './pages/Shared/MessageDetails'
import Profile from './pages/Shared/Profile'
import LoginUser from './pages/Users/LoginUser'
import RegisterUser from './pages/Users/RegisterUser'
import HomeUser from './pages/Users/HomeUser'
import SearchTrainer from './pages/Users/SearchTrainers'
import TrainerDetails from './pages/Users/TrainerDetails'
import LoginTrainer from './pages/Trainers/LoginTrainer'
import RegisterTrainer from './pages/Trainers/RegisterTrainer'
import HomeTrainer from './pages/Trainers/HomeTrainer'
import Requests from './pages/Trainers/Requests'
import RequestDetails from './pages/Trainers/RequestDetails'


function App() {
  const [user, setUser] = useState(null)
  const [searchNav, setSearchNav] = useState(["landing"])
  const [currentUserAvatar, setCurrentUserAvatar] = useState(null)

  const navigate = useNavigate()


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
    navigate("/")
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
              <Route path="/" element={<SearchApi user={user} searchNav={searchNav} setSearchNav={setSearchNav}/>} />
              <Route path="/about" element={<About />}/>
              <Route path="/search-api" element={<SearchApi user={user} searchNav={searchNav}/>}  />
              <Route path="/search-api/dog/:name" element={<ApiDogDetails user={user} />}  />
              <Route path="/user/login" element={<LoginUser setUser={setUser}/>} />
              <Route path="/user/register" element={<RegisterUser setUser={setUser}/>} />
              <Route path="/user/home/:id" element={<HomeUser user={user}/>} />
              <Route path="/user/search/trainer" element={<SearchTrainer user={user}/>} />
              <Route path="/trainer/login" element={<LoginTrainer setUser={setUser}/>} />
              <Route path="/trainer/register" element={<RegisterTrainer setUser={setUser}/>} />
              <Route path="/trainer/home" element={<HomeTrainer user={user}/>} />
              <Route path="/trainer/clients" element={<HomeTrainer user={user}/>} />
              <Route path="/trainer/requests" element={<Requests user={user}/>} />
              <Route path="/trainer/request/id/:id" element={<RequestDetails user={user}/>} />
              <Route path="/trainer/id/:id" element={<TrainerDetails setUser={setUser} user={user}/>} />
              <Route path="/dog/id/:id" element={<DogDetails setUser={setUser} user={user}/>} />
              <Route path="/messages" element={<Messages setUser={setUser} user={user}/>} />
              <Route path="/messages/id/:id" element={<MessageDetails setUser={setUser} user={user}/>} />
              <Route path="/profile/view/:id" element={<Profile user={user} setUser={setUser}/>} />
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
