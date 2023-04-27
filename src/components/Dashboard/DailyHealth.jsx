import React, { useState, useEffect } from "react";
import { recommendedSites } from "../Journal/DailyProgress";
import { Card, TextField, Button } from "@material-ui/core";
import { AutoStoriesTwoTone } from "@mui/icons-material";

function DailyHealth() {
  const [currentSite, setCurrentSite] = useState(null);
  const [expiryTime, setExpiryTime] = useState(null);
  const [newItem, setNewItem] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setGroceryList([...groceryList, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddItem();
    }
  };

  // Get the current time in the user's timezone
  const now = new Date();
  // Calculate the time until the next 12am Central Time
  const targetTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0
  );
  // Set to 12am Central Time
  targetTime.setUTCHours(5); 
  if (targetTime < now) {
    // If already past 12am, set to the next day
    targetTime.setDate(targetTime.getDate() + 1); 
  }
  //   const timeUntilTarget = targetTime - now;
  const timeUntilTarget = targetTime.getTime() - now.getTime();

  useEffect(() => {
    const currentTime = new Date();
    // convert UTC to Central Time
    const currentHour = currentTime.getUTCHours() - 5; 
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentDayOfWeek = currentTime.getUTCDay(); 
    // calculate the index of the current site
    const currentSiteIndex = currentHour + currentDayOfWeek * 24; 
    // get the current site object from the recommendedSites array
    const currentSite = recommendedSites[currentSiteIndex]; 
    setCurrentSite(currentSite);

    const expiryTime = new Date(currentTime);
    // Set to midnight Central Time
    expiryTime.setUTCHours(5, 0, 0, 0); 
    // Set to the next day
    expiryTime.setDate(expiryTime.getDate() + 1); 

    setExpiryTime(expiryTime);

    const randomSite = 
    // select a random site from the recommendedSites array
      recommendedSites[Math.floor(Math.random() * recommendedSites.length)];
    setCurrentSite(randomSite);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= expiryTime) {
        // convert UTC to Central Time
        const currentHour = currentTime.getUTCHours() - 5; 
        // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const currentDayOfWeek = currentTime.getUTCDay(); 
        // calculate the index of the current site
        const currentSiteIndex = currentHour + currentDayOfWeek * 24; 
        // get the current site object from the recommendedSites array
        const currentSite = recommendedSites[currentSiteIndex]; 
        setCurrentSite(currentSite);

        const newExpiryTime = new Date(currentTime);
        // set the new expiry time to midnight UTC (6pm Central Time)
        newExpiryTime.setUTCHours(24 - 19, 0, 0, 0); 
        setExpiryTime(newExpiryTime);
      }
    }, timeUntilTarget);
    return () => clearInterval(timer);
  }, [expiryTime]);

  return (
    <div>
      <h1 style={{ paddingTop: 30 }}>Today's Health</h1>
      <Button
        style={{ fontSize: 25, color: "orange" }}
        fullWidth
        color="primary"
        href="/signup"
      >
        Sign Up to get Full Access!
      </Button>
      <Card
        style={{
          backgroundColor: "rgb(172, 212, 172)",
          padding: "30px",
          textAlign: "left",
          border: "10px solid green",
          boxSizing: "border-box",
        }}
      >
        <ul
          style={{
            fontSize: 30,
            listStyle: "none",
            padding: 0,
            marginLeft: 40,
          }}
        >
          <AutoStoriesTwoTone fontSize="large" style={{ color: "purple" }} />
          {currentSite ? (
            <li key={currentSite.name} style={{ marginBottom: 20 }}>
              <a
                href={currentSite.url}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  color: "royalblue",
                }}
              >
                Read Today's Guide From {currentSite.name}
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div
          style={{
            listStyle: "none",
            padding: 0,
            marginLeft: 40,
          }}
        >
          {expiryTime ? `Expires at ${expiryTime.toLocaleString()}` : ""}
        </div>
      </Card>
      <br />
      <Card
        style={{
          backgroundColor: "#333333",
          padding: "30px",
          textAlign: "left",
          border: "10px solid royalblue",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "left",
            marginLeft: 0,
          }}
        >
          Create Grocery List
        </h2>
        <ul>
          {groceryList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <TextField
          label="Add Item"
          style={{ backgroundColor: "lightgray" }}
          variant="outlined"
          margin="normal"
          onKeyDown={handleKeyPress}
          value={newItem}
          onChange={handleNewItemChange}
        />
        <br />
        <Button
          style={{ borderRadius: 30, backgroundColor: "green" }}
          variant="contained"
          color="primary"
          onClick={handleAddItem}
        >
          Add Item
        </Button>
      </Card>
    </div>
  );
}

export default DailyHealth;
