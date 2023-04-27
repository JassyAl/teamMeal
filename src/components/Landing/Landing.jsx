import React from "react";
import "./Landing.css";
import Button from "@mui/material/Button";

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
          style={{ borderRadius: 30 }}
          component="a"
          href="SignIn"
        >
          Sign In
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="secondary"
          style={{ borderRadius: 30 }}
          component="a"
          href="DailyHealth"
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
      >
        Don't have an account? Sign up here.
      </Button>
      <br />
      <p className="Terms">
        By Continuing you agree to the <Button variant="text" className="Terms"
        component="a"
        href="Terms">Terms and Conditions</Button>.
      </p>
    </div>
  );
};

export default Landing;
