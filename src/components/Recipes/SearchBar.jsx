import React from 'react'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import './recipes.css';
import { Link } from 'react-router-dom';


const SearchBar = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <Paper component="form"
            //onSubmit=
            sx={{
                bgcolor: '#1a1a1a',
                pl: 2,
                py: 3,
                boxShadow: 'none'
            }}>

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