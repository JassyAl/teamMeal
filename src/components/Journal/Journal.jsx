import React, { useState, useEffect } from "react";
import { Button, Grid, Modal, TextField, Paper } from "@mui/material";
import { Stack } from "@mui/material";
import "./Journal.css";

const paperStyle = {
  padding: "40px 40px 20px 30px",
  background: "rgb(192, 230, 192)",
  maxWidth: "80vw",
  maxHeight: "80vh",
};

const inputStyle = {
  backgroundColor: "lightgray",
  color: "white",
  maxWidth: "80vw",
  maxHeight: "80vh",
};

function Journal() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    getEntries();
  }, []);

  function getEntries() {
    fetch("http://localhost:3001/journals")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setEntries(JSON.parse(data));
      });
  }

  const [newEntry, setNewEntry] = useState({
    date: new Date().toLocaleString("en-US", { timeZone: "America/Chicago" }),
    title: "",
    content: "",
  });
  const [newEntryAnchorEl, setNewEntryAnchorEl] = useState(null);
  const [entryAnchorEl, setEntryAnchorEl] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNewEntryChange = (event) => {
    const { name, value } = event.target;
    setNewEntry((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNewEntrySubmit = (event) => {
    event.preventDefault();

    const newId = entries[entries.length - 1].id + 1;
    const newEntryWithId = { ...newEntry, id: newId };
    setNewEntry({
      date: new Date().toISOString().substr(0, 10),
      title: "",
      content: "",
    });
    setNewEntryAnchorEl(null);

    fetch("http://localhost:3001/journals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: newEntryWithId.date,
        title: newEntryWithId.title,
        entry: newEntryWithId.content,
      }),
    });

    getEntries();
  };

  const handleEntryClick = (event, entry) => {
    setEntryAnchorEl(event.currentTarget);
    setSelectedEntry(entry);
  };

  const handleEntryClose = () => {
    setEntryAnchorEl(null);
    setSelectedEntry(null);
  };

  const filteredEntries = entries.filter((entry) =>
    entry.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="journals">
      <h1>My Daily Journal</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          style={{ borderRadius: 30, width: 250, fontSize: 15 }}
          onClick={(event) => setNewEntryAnchorEl(event.currentTarget)}
        >
          Add New Entry
        </Button>
      </div>
      <Modal
        className="modal"
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
          <form
            onSubmit={handleNewEntrySubmit}
            style={{ padding: 10, paddingRight: 0 }}
          >
            <Grid
              style={{
                padding: "30px 10px 20px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              container
              spacing={3}
            >
              <Grid item xs={4} sm={6}>
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
                  label="Date/Time"
                  variant="outlined"
                  fullWidth
                  style={inputStyle}
                  value={newEntry.date}
                  onChange={handleNewEntryChange}
                />
              </Grid>
              <Grid item xs={8} sm={10}>
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
      </Modal>

      <div className="search">
        <br />

        <Grid item xs={4}>
          <TextField
            label="Search Entries by Title"
            variant="outlined"
            style={inputStyle}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </Grid>
      </div>
      <br />
      <Stack className="stack" spacing={3}>
        {filteredEntries.map((entry) => (
          <div key={entry.id}>
            <Button
              onClick={(event) => handleEntryClick(event, entry)}
              variant="contained"
              fullWidth
              style={{ backgroundColor: "#333333", borderRadius: 50 }}
            >
              {"Date: "} {entry.date.substring(0, 10)}
              <br />
              {"Title: "}
              {entry.title}
            </Button>
            <Modal
              className="modal"
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
              style={{
                paddingBottom: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper elevation={3} style={paperStyle}>
                <div style={{ paddingBottom: 60, padding: 30 }}>{entry.content}</div>
              </Paper>
            </Modal>
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default Journal;
