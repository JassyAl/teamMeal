import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
  },
  input: {
    display: "none",
    color: "#333333",
  },
}));

function ProfilePage() {
  const classes = useStyles();
  const [username, setUsername] = useState("Healthy Jack");
  const [email, setEmail] = useState("healthyjack@gmail.com");
  const [image, setImage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.root}>
      <Avatar alt={username} src={image} className={classes.avatar} />
      <Typography variant="h3">{username}</Typography>
      <Typography variant="subtitle2">{email}</Typography>
      <input
        accept="image/*"
        className={classes.input}
        id="avatar-upload"
        type="file"
        onChange={handleImageChange}
      />
      <label htmlFor="avatar-upload">
        <Button
          variant="contained"
          component="span"
          style={{
            borderRadius: 30,
            backgroundColor: "palegreen",
            margin: 30,
            padding: 10,
          }}
        >
          Edit Photo
        </Button>
      </label>

      <h3 style={{ margin: 0 }}>Edit Information</h3>
      <TextField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        margin="normal"
        variant="outlined"
        color="white"
        style={{ backgroundColor: "lightgray" }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        margin="normal"
        variant="outlined"
        style={{ backgroundColor: "lightgray" }}
      />
      <Button style={{ color: "gray" }}>Log out</Button>
    </div>
  );
}

export default ProfilePage;
