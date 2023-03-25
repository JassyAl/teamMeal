import React from "react";
import SearchBar from './SearchBar';
import DefaultRecipes from "./DefaultRecipes";
import {fetchFromAPI} from "../../API/fetchFromAPI";
import { useState, useEffect } from 'react';




function Recipes() {

    const [selectedCategory, setSelectedCategory] = useState('chicken');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setRecipes(data.hits))
    }, [selectedCategory]);


  return (
    <div>
      <SearchBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <DefaultRecipes recipes={recipes} />
    </div>
  );
}

export default Recipes;
