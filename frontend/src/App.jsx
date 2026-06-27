import './App.css'
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"
import StoryLoader from "./components/StoryLoader"
import StoryGenerator from "./components/StoryGenerator.jsx";
import Navbar from "./components/Navbar.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"

function Brand() {
  const navigate = useNavigate()
  return (
    <div className="brand" onClick={() => navigate("/")}>
      <span className="brand-seal">A</span>
      <h1>Adventure&nbsp;AI</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Brand />
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path={"/story/:id"} element={<StoryLoader />} />
            <Route path={"/"} element={<StoryGenerator />}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/register"} element={<Register />}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
