import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Card, 
    Paper,
    Button } from "@mui/material";
import JournalEntry from "./JournalEntry";

const JournalTable = () => {
  // example data for the journal entries
  const [journalEntries, setJournalEntries] = useState([
    { id: 1, date: "2023-03-24", content: "Today was a good day." },
    { id: 2, date: "2023-03-23", content: "I had a lot of work to do today." },
    { id: 3, date: "2023-03-22", content: "I went for a walk in the park." },
  ]);

const navigate = useNavigate();

const handleClick = (entry) => {
  console.log(`Clicked on journal entry with date: ${entry.date}`);
  navigate(`./JournalEntry/${entry.id}`);

};


  return (

    // <Stack spacing={2}>
    //     <Button variant="text" onClick={() => handleClick(entry)}
    //               {entry.date}>2023-03-24</Button>
    //             <Button variant="text" onClick={() => handleClick(entry)}
    //               {entry.date}>2023-03-24</Button>
    //                       <Button variant="text" onClick={() => handleClick(entry)}
    //               {entry.date}>2023-03-24</Button>

    // </Stack>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="journal table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {journalEntries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>
                <Button variant="text" onClick={() => handleClick(entry)}>
                  {entry.date}
                </Button>
              </TableCell>
              <TableCell>{entry.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JournalTable;
