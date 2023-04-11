import { Button } from '@mui/material';
import React, { useState } from 'react';

function GroceryList() {
  const [groceries, setGroceries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [listTitle, setListTitle] = useState('My Grocery List');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setGroceries([...groceries, { name: inputValue.trim(), isChecked: false }]);
      setInputValue('');
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

  const formStyle = {
    paddingLeft: 10, 
    fontSize: 20, 
    backgroundColor: "#333333", 
    color: "white"
  };

  return (
    <div>
      <h1>My Grocery List</h1>
      <div style={{paddingBottom: 30}}>
        <label htmlFor="list-title" style={{margin: 50, fontSize: 20}}>List Title: </label>
        <input style={ formStyle } type="text" id="list-title" value={listTitle} onChange={handleTitleChange} />
      </div>
      <form onSubmit={handleFormSubmit}>
        <input style={ formStyle }type="text" value={inputValue} onChange={handleInputChange} />
        <Button variant="contained"
          color="secondary" type="submit" style={{marginLeft: 20,borderRadius: 30}}>Add Item</Button>
      </form>
      <h3 style={{textAlign: "left", marginLeft: 50, marginTop: 30, fontSize: 25}}>{listTitle}</h3>
      <ul style={{fontSize: 30, paddingLeft: 50}}>
        {groceries.map((grocery, index) => (
          <li key={index} style={{marginBottom: 20}}>
            <input
              type="checkbox"
              style={{marginRight: 20}}
              checked={grocery.isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
            {grocery.name}
            <Button variant="text" style={{ color: "red", borderRadius: 0, fontSize: 10, padding: 10 }} onClick={() => handleDeleteItem(index)}>x</Button>
          </li>
        ))}
      </ul>
      {groceries.length > 0 && (
        <Button variant="contained" style={{backgroundColor: "red", marginLeft: 50, marginBottom: 50}} onClick={handleDeleteAll}>Delete List</Button>
      )}
    </div>
  );
}

export default GroceryList;



