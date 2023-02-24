import "./App.css";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Landing from "./components/landing";
import { Route, Link } from "react-router-dom";
import Recipes from "./components/findRecipes";


function App() {
  return (
    
    <div className="App">
      <Landing/>
      {/* <Route exact path="/" component = {Landing}></Route>
      <Route exact path="/signIn" component = {SignIn}></Route>
      <Route exact path="/signUp" component = {SignUp}></Route>
      <Route exact path="/findRecipes" component = {Recipes}></Route> */}
    </div>
  );
}

export default App;
