import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

function AccountInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleDelete = () => {
    // Handle account deletion here
    setDeleteDialogOpen(false);
  };

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  return (
    <div>
      <div>
        <h1>Account Information</h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}> 
          <form onSubmit={handleSubmit} style={{backgroundColor: "lightsteelblue", padding: 100 }}>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <TextField
                  required
                  id="name"
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  required
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    borderRadius: 30,
                    backgroundColor: "purple",
                    color: "white",
                  }}
                >
                  Save Changes
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="text"
                  color="secondary"
                  onClick={handleDeleteDialogOpen}
                >
                  Delete Account
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete your account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want delete your account? <br/>
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AccountInfo;
