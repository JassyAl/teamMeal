import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#1A1A1A",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  title: {
    color: "lightgreen",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 30,
      backgroundColor: "#333333",
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15.5px 14px",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "& .MuiOutlinedInput-notchedOutline": {},
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "lightgreen",
    color: "black",
    borderRadius: 30,
    "&:hover": {
      backgroundColor: "green",
    },
  },
  login: {
    color: "white",
    textAlign: "center",
  },
}));

export default function Signup() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: signup logic
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Box p={5}>
        <Typography variant="h3" className={classes.title}>
          A Better You Starts Here.<br></br>
          Let's Get Started!
          </Typography>
        <Typography variant="h4" className={classes.title}>
          Create an Account
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            className={classes.textField}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your Email Address"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className={classes.textField}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your Password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className={classes.textField}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Confirm your Password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2" className={classes.login}>
            Already have an account?{" "}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href="/SignIn"
              //rounded corners
              style={{ borderRadius: 30 }}
            >
              Log In
            </Button>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
