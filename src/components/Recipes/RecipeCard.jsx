import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';


export default function RecipeCard({ recipe }) {
    return (
        <Card sx={{ maxWidth: 345, my: 5, bgcolor: '#404040' }}>
            <Link to={`/FindRecipes/${recipe.recipe.label}`} style={{ textDecoration: 'none' }}>
                <Typography color='white'>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#9500ae' }} aria-label="recipe">
                                <RestaurantIcon />
                            </Avatar>
                        }
                        title={recipe.recipe.label}
                    />
                </Typography>
                <CardMedia
                    component="img"
                    height="250"
                    image={recipe.recipe.image}
                    alt={recipe.recipe.label}
                />
            </Link>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon color='secondary' fontSize='large' />
                </IconButton>
            </CardActions>
        </Card>
    );
}

