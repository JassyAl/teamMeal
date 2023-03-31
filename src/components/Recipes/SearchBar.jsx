import React from 'react'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import './recipes.css';
import { Typography } from '@mui/material';


const SearchBar = ({ selectedCategory, setSelectedCategory }) => {

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

            <input
                className="search-bar"
                placeholder="Find Recipes..."
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)} />

            <IconButton type="submit" sx={{ p: '10px', color: '#595959' }}>
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar