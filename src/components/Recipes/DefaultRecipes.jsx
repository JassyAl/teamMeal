import React from 'react'
import { Stack, Box } from '@mui/material';
import RecipeCard from "./RecipeCard";


const DefaultRecipes = ({ recipes }) => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
            {recipes.map((item, id) => (
                <Box key={id}>
                    {item.id && <RecipeCard recipe={item} />}
                </Box>
            ))}
        </Stack>

    )
}

export default DefaultRecipes