import React from "react";
import SearchBar from './SearchBar';
import DefaultRecipes from "./DefaultRecipes";


function Recipes({ recipes, selectedCategory, setSelectedCategory, allergen, setAllergen }) {
  return (
    <div>
      <SearchBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} allergen={allergen} setAllergen={setAllergen} />
      <DefaultRecipes recipes={recipes} />
    </div>
  );
}

export default Recipes;
