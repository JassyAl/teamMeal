import { IconButton, Button } from "@mui/material";
import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveIcon from '@mui/icons-material/Remove';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function GroceryList() {
  const [groceries, setGroceries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listTitle, setListTitle] = useState("My Grocery List");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setGroceries([
        ...groceries,
        { name: inputValue.trim(), isChecked: false },
      ]);
      setInputValue("");
    }
  };

  const handleCheckboxChange = (index) => {
    const newGroceries = [...groceries];
    newGroceries[index].isChecked = !newGroceries[index].isChecked;
    setGroceries(newGroceries);
  };

  const handleDeleteItem = (index) => {
    const newGroceries = [...groceries];
    newGroceries.splice(index, 1);
    setGroceries(newGroceries);
  };

  const handleDeleteAll = () => {
    setGroceries([]);
  };

  const handleTitleChange = (event) => {
    setListTitle(event.target.value);
  };

  const handlePrintList = () => {
    const printWindow = window.open("", "Print Window");
    printWindow.document.write(`
      <html>
        <head>
          <title>${listTitle}</title>
          <style>
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
          li {
            margin-bottom: 20px;
          }
        </style>
        </head>
        <body>
        <h1>${listTitle}</h1>
        <form>
          <ul>
            ${groceries
              .map(
                (grocery, index) => `
              <li>
                <input type="checkbox" ${grocery.isChecked ? "checked" : ""} />
                &nbsp; ${grocery.name}
              </li>
            `
              )
              .join("")}
          </ul>
        </form>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // try sharing functions
  const handleShareByEmail = async () => {
    const emailBody = "Here's my grocery list:\n\n";
    const items = groceries.map((grocery) => grocery.name).join("\n");
  
    if (navigator.share) {
      try {
        await navigator.share({
          title: listTitle,
          text: emailBody + items,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      const emailUrl = `mailto:?subject=${encodeURIComponent(listTitle)}&body=${encodeURIComponent(emailBody + items)}`;
      window.location.href = emailUrl;
    }
  };
  
  const formStyle = {
    paddingLeft: 10,
    fontSize: 20,
    backgroundColor: "#333333",
    color: "white",
  };

  return (
    <div>
      <h1>My Grocery List</h1>
      <div style={{ paddingBottom: 30 }}>
        <label
          htmlFor="list-title"
          style={{ margin: 50, fontSize: 20, fontWeight: "bold" }}
        >
          List Title:{" "}
        </label>
        <input
          style={formStyle}
          type="text"
          id="list-title"
          value={listTitle}
          onChange={handleTitleChange}
        />
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          style={formStyle}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ marginLeft: 20, borderRadius: 30 }}
        >
          Add Item
        </Button>
      </form>      
      <div>
      <IconButton
        variant="contained"
        aria-label="Print List"
        style={{ color: "lightgreen", marginLeft: 40}}
        onClick={handlePrintList}
        title="Print List"
      >
        <PrintOutlinedIcon/>
      </IconButton>
      <IconButton
            variant="contained"
            aria-label="Share List by Email"
            style={{ color: "blue", marginRight: 10}}
            onClick={handleShareByEmail}
            title="Share List by Email"
          >
            <EmailOutlinedIcon/>
          </IconButton></div>
      <h3
        style={{
          textAlign: "left",
          marginLeft: 50,
          marginTop: 10,
          fontSize: 30,
        }}
      >
        {listTitle}
      </h3>

      <ul style={{ fontSize: 25, paddingLeft: 50 }}>
        {groceries.map((grocery, index) => (
          <li key={index} style={{ marginBottom: 20 }}>
            <input
              type="checkbox"
              style={{ marginRight: 20 }}
              checked={grocery.isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
            {grocery.name}
            <IconButton
              variant="text"
              style={{
                color: "orange",
                fontSize: 10,
                paddingLeft: 30,
              }}
              title="Remove Item"
              aria-label="remove item"
              onClick={() => handleDeleteItem(index)}
            >
              <RemoveIcon/>
            </IconButton>
          </li>
        ))}
      </ul>
      {groceries.length > 0 && (
        <IconButton
          variant="contained"
          aria-label="Delete List"
          style={{ color: "red", marginLeft: 40, marginBottom: 50 }}
          onClick={handleDeleteAll}
          title="Delete List"
        >
          <DeleteForeverIcon/>
        </IconButton>
      )}
    </div>
  );
}

export default GroceryList;
