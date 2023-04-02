import "./App.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import SignIn from "./components/SignOn/SignIn";
import SignUp from "./components/SignOn/SignUp";
import FindRecipes from "./components/Recipes/FindRecipes";
import RecipePage from "./components/Recipes/RecipePage";
import NavBar from "./components/Navigation/NavBar";
import HomePage from "./components/Dashboard/HomePage";
import Journal from "./components/Journal/Journal";
import DailyProgress from "./components/Journal/DailyProgress";
import NoPage from "./components/NoPage";
import Profile from "./components/Dashboard/Profile";
import Messages from "./components/Dashboard/Messages";
import AccountInfo from "./components/Dashboard/AccountInfo";
import TAC from "./components/SignOn/TAC";
import Calendar from "./components/Calendar/Calendar";
import SavedRecipes from "./components/Recipes/SavedRecipes";

import { fetchFromAPI } from "./API/fetchFromAPI";
import { useState, useEffect } from 'react';

function App() {

  const [selectedCategory, setSelectedCategory] = useState('chicken');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setRecipes(data.hits))
  }, [selectedCategory]);

  const location = useLocation();
  // render the navbar on all routes except the landing page
  const showNavBar = location.pathname !== "/";
  return (
    <div className="App">
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>

        <Route path="FindRecipes">
          <Route index element={<FindRecipes selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} recipes={recipes} />}></Route>
          <Route path=":label" element={<RecipePage recipes={recipes} />}></Route>
        </Route>
        <Route path="/SavedRecipes" element={<SavedRecipes/>}></Route>
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/Journal" element={<Journal />}></Route>
        <Route path="/DailyProgress" element={<DailyProgress />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Calendar" element={<Calendar/>}></Route>
        <Route path="/Messages" element={<Messages />}></Route>
        <Route path="/Account" element={<AccountInfo />}></Route>
        <Route path="/Terms" element={<TAC />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>

    </div>
  );
}

export default App;
