import React from "react";
import SearchBar from './SearchBar';
import DefaultRecipes from "./DefaultRecipes";





function Recipes({ recipes, selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <SearchBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <DefaultRecipes recipes={recipes} />
    </div>
  );
}

export default Recipes;
