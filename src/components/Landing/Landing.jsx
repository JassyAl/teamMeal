import React from "react";
import "./Landing.css";
import Button from "@mui/material/Button";
import SignIn from "../SignOn/SignIn";
import SignUp from "../SignOn/SignUp";
import Recipes from "../Recipes/FindRecipes";
import TAC from "../SignOn/TAC";

const Landing = () => {
  return (
    <div className="Landing">
            <img className="photo" src="/images/tpar_image.png" alt="Logo" />
      <h1 className="Title">Daily Meal Companion</h1>
      <h2 className="slogan">The only meal app you need</h2>

      <div className="SignIn">
        <Button
          variant="contained"
          color="primary"
          component="a"
          href="SignIn"
          startdecorator={<SignIn />}
        >
          Sign In
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="FindRecipes"
          startdecorator={<Recipes />}
        >
          Continue without signing in
        </Button>
      </div>
      <br />
      <Button
        variant="text"
        className="SignUp"
        component="a"
        href="SignUp"
        startdecorator={<SignUp />}
      >
        Don't have an account? Sign up here.
      </Button>
      <br />
      <p className="Terms">
        By Continuing you agree to the <Button variant="text" className="Terms"
        component="a"
        href="Terms"
        startdecorator={<TAC/>}>Terms and Conditions</Button>.
      </p>
    </div>
  );
};

export default Landing;
