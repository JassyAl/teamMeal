import React from 'react'
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import RecipeList from './RecipeList';
import { Stack } from '@mui/material';
import { Link } from '@mui/material';


const RecipePage = ({ recipes }) => {
    const { label } = useParams();

    const recipe = recipes.find(recipe => { return (recipe.recipe.label) == label });

    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
            <Typography color='white' >
                <h1>{recipe.recipe.label}</h1>
                <h2>Source: {recipe.recipe.source}</h2>
                <h3>Calories: {parseInt(recipe.recipe.calories)}</h3>
                <h3>Total Time: {recipe.recipe.totalTime}</h3>
                <Link href={recipe.recipe.url} underline="hover" target="_blank" rel="noreferrer">Find Recipe Here</Link>
                <RecipeList />
            </Typography>
        </Stack>
    )
}

export default RecipePage