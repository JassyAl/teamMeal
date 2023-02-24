import React from "react";
import "./Landing.css";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import SignIn from "./signIn";

function Landing() {
  return (
    <div className="Landing">
      <h1 className="Title">Daily Meal Companion</h1>
      <img className="logo" src="/images/tempLogo.png" alt="Logo"/>
      <h2 className="slogan">The only meal app you need</h2>
      <div className="SignIn">
        <Link to="./signIn">
        <Button variant="contained" color="primary">Sign In</Button></Link>
      </div>
      <br />
      <Button variant="text" className="SignUp">Don't have an account? Sign up here.</Button>
      <br />
      <p className="Terms">By Continuing you agree to the Terms and Conditions.</p>
    </div>
  );
}

export default Landing;
