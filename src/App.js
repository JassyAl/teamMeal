import "./App.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import SignIn from "./components/SignOn/SignIn";
import SignUp from "./components/SignOn/SignUp";
import Recipes from "./components/Recipes/FindRecipes";
import NavBar from "./components/Navigation/NavBar";
import HomePage from "./components/Dashboard/HomePage";
import Journal from "./components/Journal/Journal";
import DailyProgress from "./components/Journal/DailyProgress";
import NoPage from "./components/NoPage";
import Profile from "./components/Dashboard/Profile";
import Messages from "./components/Dashboard/Messages";
import AccountInfo from "./components/Dashboard/AccountInfo";
import TAC from "./components/SignOn/TAC";
import JournalEntry from "./components/Journal/JournalEntry";

function App() {
  const location = useLocation();
    // render the navbar on all routes except the landing page
    const showNavBar = location.pathname !== "/";
  return (
    <div className="App">  
    {showNavBar && <NavBar/>}
      <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      <Route path="/FindRecipes" element={<Recipes/>}></Route>
      <Route path="/HomePage" element={<HomePage/>}></Route>
      <Route path="/Journal" element={<Journal/>}></Route>
      <Route path="/JournalEntry" element={<JournalEntry/>}></Route>
      <Route path="/DailyProgress" element={<DailyProgress/>}></Route>
      <Route path="/Profile" element={<Profile/>}></Route>
      <Route path="/Messages" element={<Messages/>}></Route>
      <Route path="/Account" element={<AccountInfo/>}></Route>
      <Route path="/Terms" element={<TAC/>}></Route>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
