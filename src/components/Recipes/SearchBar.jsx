import React from 'react'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import './recipes.css';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Allergies from "./Allergies";


const SearchBar = ({ selectedCategory, setSelectedCategory, allergen, setAllergen }) => {

    const onhandleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Paper component="form"
            onSubmit={onhandleSubmit}
            sx={{
                bgcolor: '#1a1a1a',
                pl: 2,
                py: 3,
                boxShadow: 'none'
            }}>
            <Typography>
                <h1>Find Recipes</h1>
            </Typography>

            <Stack direction="row" justifyContent="center">
                <input
                    type="text"
                    className="search-bar"
                    placeholder={selectedCategory}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                />
                <IconButton
                    type="submit"
                    sx={{ p: '10px', color: '#595959' }}
                >
                    <Search />
                </IconButton>
                <Allergies allergen={allergen} setAllergen={setAllergen} />

            </Stack>

        </Paper>
    )
}

export default SearchBar