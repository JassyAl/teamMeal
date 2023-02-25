import React from "react";
import "./Landing.css";
import Button from "@mui/material/Button";
import SignIn from "../SignOn/SignIn";
import SignUp from "../SignOn/SignUp";
import Recipes from "../Recipes/FindRecipes";

const Landing = () => {
  return (
    <div className="Landing">
      <h1 className="Title">Daily Meal Companion</h1>
      <img className="logo" src="/images/tempLogo.png" alt="Logo" />
      <h2 className="slogan">The only meal app you need</h2>
      <div className="SignIn">
        <Button
          variant="contained"
          color="primary"
          component="a"
          href="SignIn"
          startDecorator={<SignIn />}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="FindRecipes"
          startDecorator={<Recipes />}
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
        startDecorator={<SignUp />}
      >
        Don't have an account? Sign up here.
      </Button>
      <br />
      <p className="Terms">
        By Continuing you agree to the Terms and Conditions.
      </p>
    </div>
  );
};

export default Landing;
