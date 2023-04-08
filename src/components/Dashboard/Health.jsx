import React from "react";
import { recommendedSites } from "../Journal/DailyProgress";
import { Card } from "@material-ui/core";

function HealthGuides() {
  return (
    <div>
      <h1>Health Guides</h1>
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
          {recommendedSites.map((site) => (
            <li key={site.name} style={{ marginBottom: 20 }}>
              <a href={site.url} style={{ textDecoration: "none" }}>
                {site.name}
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default HealthGuides;
