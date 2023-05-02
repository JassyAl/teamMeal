import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useState } from "react";


export default function RecipeCard({ recipe }) {
    const [selected, setSelected] = useState(true);
    const [icon, setIcon] = useState(<FavoriteBorderIcon color='secondary' fontSize='large' />);
    const [fav, setFav] = useState("");


    const handleSelected = () => {
        if (selected) {
            //search if in fav already
            //const add = fav.find(recipe.id);
            //if (add) return;
            //if not in fav, add
            setIcon(<FavoriteIcon color='secondary' fontSize='large' />);
            setFav(fav + `${recipe.id}, `);
            localStorage.setItem('favoriteList', fav);
            console.log(localStorage.setItem('favoriteList', fav));
        } else if (!selected) {
            //remove from fav
            setIcon(<FavoriteBorderIcon color='secondary' fontSize='large' />);
            //const toRemove = recipe.id;

        }
    };


    return (
        <Card sx={{ maxWidth: 345, my: 5, bgcolor: '#404040' }}>
            <Link to={`/FindRecipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
                <Typography color='white'>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#9500ae' }} aria-label="recipe">
                                <RestaurantIcon />
                            </Avatar>
                        }
                        title={recipe.title}
                    />
                </Typography>
                <CardMedia
                    component="img"
                    height="250"
                    image={recipe.image}
                    alt={recipe.title}
                />
            </Link>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"
                    //selected={selected}
                    onClick={() => {
                        setSelected(!selected);
                        handleSelected();
                    }}>
                    {icon}
                </IconButton>
            </CardActions>
        </Card>
    );
}

