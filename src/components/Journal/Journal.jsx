import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddJournal from "./AddJournal";
import JournalTable from "./JournalTable";

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

      //button to add new entries
       <div className="addEntry">
         <Button
          variant="contained"
          color="primary"
          component="a"
          href="AddJournal"
          startdecorator={<AddJournal/>}
        >
          Add New Entry
        </Button>
      </div>

      // table for journal entries
      <JournalTable>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td>
              <Link to={`/journal/${entry.id}`}>{entry.date}</Link>
            </td>
            <td>{entry.content}</td>
          </tr>
        ))}
      </JournalTable>
    </div>
  );
}

export default Journal;

