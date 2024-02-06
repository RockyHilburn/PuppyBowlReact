import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import Home from "./components/Home";
import './App.css'

function App() {

  return (
    <div>
      <div id="navbar">
        <NavBar />
      </div>
      <div id="mainarea">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/AllPlayers" element={<AllPlayers />}/>
          <Route path="/NewPlayerForm" element={<NewPlayerForm />}/>
          <Route path="/SinglePlayer" element={<SinglePlayer />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App