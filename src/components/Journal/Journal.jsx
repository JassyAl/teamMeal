import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddJournal from "./AddJournal";
import JournalTable from "./JournalTable";
import { Stack } from "@mui/material";

function Journal() {
  // Dummy data for journal entries
  const entries = [
    { id: 1, date: "2023-03-24", content: "Today was a good day." },
    { id: 2, date: "2023-03-23", content: "I had a lot of work to do today." },
    { id: 3, date: "2023-03-22", content: "I went for a walk in the park." },

  ];

  return (
    <div>
      <h1>My Daily Journal</h1>

      
       <div className="addEntry">
         <Button
          variant="contained"
          color="secondary"
          component="a"
          style={{ borderRadius: 30 }}
          href="AddJournal"
          startdecorator={<AddJournal/>}
        >
          Add New Entry
        </Button>
      </div>
      &nbsp;
      <div>
      <Stack spacing={3}>
        <Button variant="outlined" style={{ borderRadius: 30 }}>2023-03-24</Button>
        <Button variant="outlined" style={{ borderRadius: 30 }}>2023-03-25</Button>
        <Button variant="outlined" style={{ borderRadius: 30 }}>2023-03-26</Button>
        <Button variant="outlined" style={{ borderRadius: 30 }}>2023-03-27</Button>
      </Stack>
      </div>
       {/* <Stack spacing={2}>
     <Button variant="text" onClick={() => handleClick(entry)}
                  {entry.date}>2023-03-24</Button>
                <Button variant="text" onClick={() => handleClick(entry)}
                  {entry.date}>2023-03-24</Button>
                          <Button variant="text" onClick={() => handleClick(entry)}
                  {entry.date}>2023-03-24</Button> */}
      {/* <JournalTable>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td>
              <Link to={`/JournalEntry/${entry.id}`}>{entry.date}</Link>
            </td>
            <td>{entry.content}</td>
          </tr>
        ))}
      </JournalTable> */}
    </div>
  );
}

export default Journal;

