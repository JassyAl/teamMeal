import React, { useState } from "react";
import { Button, Grid, Popover, TextField, Paper } from "@mui/material";
import { Stack } from "@mui/material";

const paperStyle = {
  padding: "30px",
  background: "rgb(192, 230, 192)",
  style: {
    width: 600,
    height: 200,
  },
};

const inputStyle = {
  backgroundColor: "lightgray",
  color: "white",
};

const entries = [
  {
    id: 1,
    date: "2023-03-27",
    title: "Good",
    content: "Today was a good day.",
  },
  {
    id: 2,
    date: "2023-03-26",
    title: "Struggling",
    content: "I had a lot of work to do today.",
  },
  {
    id: 3,
    date: "2023-03-25",
    title: "Nice walk",
    content: "I went for a walk in the park.",
  },
  { id: 4, date: "2023-03-24", title: "Blah", content: "Today was okay." },
];

function Journal() {
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    content: "",
  });
  const [newEntryAnchorEl, setNewEntryAnchorEl] = useState(null);
  const [entryAnchorEl, setEntryAnchorEl] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleNewEntryChange = (event) => {
    const { name, value } = event.target;
    setNewEntry((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNewEntrySubmit = (event) => {
    event.preventDefault();
    const newId = entries[entries.length - 1].id + 1;
    const newEntryWithId = { ...newEntry, id: newId };
    entries.push(newEntryWithId);
    setNewEntry({
      date: new Date().toISOString().substr(0, 10),
      title: "",
      content: "",
    });
    setNewEntryAnchorEl(null);
  };

  const handleEntryClick = (event, entry) => {
    setEntryAnchorEl(event.currentTarget);
    setSelectedEntry(entry);
  };

  const handleEntryClose = () => {
    setEntryAnchorEl(null);
    setSelectedEntry(null);
  };

  return (
    <div className="journals">
      <h1>My Daily Journal</h1>
      <Button
        variant="contained"
        color="secondary"
        style={{ borderRadius: 30 }}
        onClick={(event) => setNewEntryAnchorEl(event.currentTarget)}
      >
        Add New Entry
      </Button>
      <Popover
        open={Boolean(newEntryAnchorEl)}
        anchorEl={newEntryAnchorEl}
        onClose={() => setNewEntryAnchorEl(null)}
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
          <form onSubmit={handleNewEntrySubmit}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <TextField
                  name="title"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  required
                  style={inputStyle}
                  value={newEntry.title}
                  onChange={handleNewEntryChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="date"
                  label="Date"
                  variant="outlined"
                  fullWidth
                  style={inputStyle}
                  value={newEntry.date}
                  onChange={handleNewEntryChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="content"
                  label="Express Yourself"
                  variant="outlined"
                  fullWidth
                  multiline
                  required
                  style={inputStyle}
                  value={newEntry.content}
                  onChange={handleNewEntryChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ borderRadius: 30 }}
                  type="submit"
                >
                  Add Entry
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Popover>

      <div>
        <br />
        <h3>Previous Entries</h3>
      </div>
      <br />
      <Stack spacing={3}>
        {entries.map((entry) => (
          <div key={entry.id}>
            <Button
              onClick={(event) => handleEntryClick(event, entry)}
              variant="outlined"
              fullWidth
              style={{ borderRadius: 50 }}
            >
              {"Date: "} {entry.date}
              <br />
              {"Title: "}
              {entry.title}
            </Button>
            <Popover
              open={selectedEntry && selectedEntry.id === entry.id}
              anchorEl={entryAnchorEl}
              onClose={handleEntryClose}
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
                <div>{entry.content}</div>
              </Paper>
            </Popover>
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default Journal;
