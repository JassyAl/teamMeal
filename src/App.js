import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Messages from "./components/Dashboard/Messages";
import AccountInfo from "./components/Dashboard/AccountInfo";
import TAC from "./components/SignOn/TAC";
import Calendar from "./components/Calendar/Calendar";
import SavedRecipes from "./components/Recipes/SavedRecipes";
import CustomRecipes from "./components/Recipes/CustomRecipes";
import HealthGuides from "./components/Dashboard/Health";
import GroceryList from "./components/Recipes/GroceryList";
import ProfilePage from "./components/Dashboard/Profile";
import { fetchFromAPI } from "./API/fetchFromAPI";
import { useState, useEffect } from "react";
import DailyHealth from "./components/Dashboard/DailyHealth";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("pasta");
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState("");
  const [allergen, setAllergen] = useState([]);


  useEffect(() => {
    fetchFromAPI(`recipes/complexSearch?query=${selectedCategory}`,
      {
        //method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        params: {
          number: '2',
          addRecipeNutrition: 'true',
          intolerances: allergen.join()
          //addRecipeInformation: 'true'
        },
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      }
    ).then((data) =>
      setRecipes(data.results)
    );
  }, [selectedCategory, allergen]);


  const location = useLocation();
  // render the navbar on all routes except the landing page
  const showNavBar = location.pathname !== "/" && location.pathname !== "/DailyHealth";
  return (
    <div className="App">
      {showNavBar && <NavBar image={image} setImage={setImage} />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>

        <Route path="FindRecipes">
          <Route
            index
            element={
              <FindRecipes
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                recipes={recipes}
                allergen={allergen}
                setAllergen={setAllergen}
              />
            }
          ></Route>
          <Route
            path=":id"
            element={<RecipePage recipes={recipes} />}
          ></Route>
        </Route>
        <Route path="/CustomRecipes" element={<CustomRecipes />}></Route>
        <Route path="/SavedRecipes" element={<SavedRecipes />}></Route>
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/Journal" element={<Journal />}></Route>
        <Route path="/DailyProgress" element={<DailyProgress />}></Route>
        <Route path="/Profile" element={<ProfilePage image={image} setImage={setImage} />}></Route>
        <Route path="/Calendar" element={<Calendar />}></Route>
        <Route path="/Messages" element={<Messages />}></Route>
        <Route path="/Account" element={<AccountInfo />}></Route>
        <Route path="/Health" element={<HealthGuides />}></Route>
        <Route path="/Terms" element={<TAC />}></Route>
        <Route path="/GroceryList" element={<GroceryList />}></Route>
        <Route path="/DailyHealth" element={<DailyHealth />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
