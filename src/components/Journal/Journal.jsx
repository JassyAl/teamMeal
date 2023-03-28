import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Popover, TextField, Grid, Paper } from "@material-ui/core";

function Journal() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [selectedEntry, setSelectedEntry] = useState("");
  // Dummy data for journal entries
  const entries = [
    { id: 1, date: "2023-03-27", content: "Today was a good day." },
    { id: 2, date: "2023-03-26", content: "I had a lot of work to do today." },
    { id: 3, date: "2023-03-25", content: "I went for a walk in the park." },
    { id: 4, date: "2023-03-24", content: "Today was okay." },
  ];

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleEntrySelect = (entry) => {
    setSelectedEntry(entry);
  };
  const handleClick = (event) => {
    setPopoverOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setPopoverOpen(false);
    setAnchorEl(null);
  };

  const paperStyle = {
    padding: "30px",
    background: "rgb(192, 230, 192)",
              style: {
              width: 600,
              height: 200,
              }
  };

  const inputStyle = {
    backgroundColor: "lightgray",
    color: "white",
  };

  return (
    <div>
      <h1>My Daily Journal</h1>
      <div className="addEntry">
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          style={{ borderRadius: 30 }}
        >
          Add New Entry
        </Button>
      </div>
      &nbsp;
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Paper elevation={3} style={paperStyle}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Journal Title"
                  variant="outlined"
                  fullWidth
                  required
                  value={title}
                  onChange={handleTitleChange}
                  style={inputStyle}
                />
              </Grid>
              &nbsp;
              <Grid item xs={12}>
                <TextField
                  label="Express Yourself"
                  variant="outlined"
                  fullWidth
                  multiline
                  required
                  value={body}
                  onChange={handleBodyChange}
                  style={inputStyle}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="text"
                  color="primary"
                  component="a"
                  style={{ borderRadius: 20 }}
                  component="a"
                  href="Journal"
                  startdecorator={<Journal />}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ borderRadius: 30 }}
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Popover>
      <div>
        <Stack
          spacing={3}
          onChange={(event, value) => handleEntrySelect(value)}
        >
          {entries.map((entry) => (
            <Button
              key={entry.id}
              value={entry}
              variant="outlined"
              style={{ borderRadius: 20 }}
            >
              {entry.date}
            </Button>
          ))}
        </Stack>
      </div>
    </div>
  );
}

export default Journal;
