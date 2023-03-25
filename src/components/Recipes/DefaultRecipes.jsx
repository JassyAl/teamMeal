import React from 'react'
import { Stack, Box } from '@mui/material';
import RecipeCard from "./RecipeCard";
//import API and style boxes to hold recipe card

const DefaultRecipes = ({ recipes }) => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
            {recipes.map((item, idx) => (
                <Box key={idx}>
                    {item.recipe && <RecipeCard recipe={item} />}
                </Box>
            ))}
        </Stack>

    )
}

export default DefaultRecipes