import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import RecipeCard from "./RecipeCard";

function SavedRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

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

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
        {favoriteRecipes.map((item, id) => (
          <RecipeCard key={id} recipe={item} />
        ))}
      </Stack>
    </div>
  );
}

export default SavedRecipes;
