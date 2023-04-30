import React from "react";
import { Button } from "@mui/material";

function SavedRecipes() {
  return (
    <div>
      <h1>Saved Recipes</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          href="CustomRecipes"
          style={{ backgroundColor: "royalblue", borderRadius: 30, width: 250, fontSize: 15 }}
        >
          Add New Recipe
        </Button>
      </div>
    </div>
  );
}

export default SavedRecipes;