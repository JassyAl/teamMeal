import React, { useState } from "react";
import { useParams } from "react-router-dom";

function JournalEntry() {
  const { id } = useParams();

//   const [journalEntries, setJournalEntries] = useState([...]);
const [journalEntries, setJournalEntries] = useState([
    { id: 1, date: "2023-03-24", content: "Today was a good day." },
    { id: 2, date: "2023-03-23", content: "I had a lot of work to do today." },
    { id: 3, date: "2023-03-22", content: "I went for a walk in the park." },
  ]);
  

  const entry = journalEntries.find((entry) => entry.id === parseInt(id));


  // TODO: Fetch the journal entry with the given ID from the database

  return (
    <div>
      <h2>Journal Entry #{entry.id}</h2>
      <p>Date: {entry.date}</p>
      <p>Title: {entry.title}</p>
      <p>Content: {entry.content}</p>
    </div>
  );
  
}

export default JournalEntry;
