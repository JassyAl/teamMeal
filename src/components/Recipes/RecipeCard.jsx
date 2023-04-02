import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeCard({ recipe }) {
    console.log(recipe);


    return (
        <Card sx={{ maxWidth: 345, my: 5, bgcolor: '#404040' }}>
            <Link to={`/FindRecipes/${recipe.recipe.label}`} style={{ textDecoration: 'none' }}>
                <Typography color='white'>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#9500ae' }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={recipe.recipe.label}
                    />
                </Typography>
                <CardMedia
                    component="img"
                    height="194"
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

