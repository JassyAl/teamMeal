import React from 'react'
import './recipes.css';
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Stack, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';


let theme = createTheme();
theme = responsiveFontSizes(theme);

const RecipePage = ({ recipes }) => {
    const { label } = useParams();

    const recipe = recipes.find(recipe => { return (recipe.recipe.label) == label });

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Typography variant="h1">{recipe.recipe.label}</Typography>
                <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={15}>

                    <Box>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                    </Box>

                    <Box>
                        <Typography variant="h6" paragraph="true" >Source: {recipe.recipe.source} <br />
                            Calories: {parseInt(recipe.recipe.calories)} <br />
                            {recipe.recipe.dietLabels}
                        </Typography>

                        <Button href={recipe.recipe.url} target="_blank" rel="noreferrer" variant="contained" color="secondary" >Complete Recipe Here</Button>
                    </Box>

                </Stack>

                <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ m: 4 }}>
                    <Box sx={{ bgcolor: '#404040', p: 5 }}>
                        <Typography variant="h5" color='white'>Ingredients: </Typography>
                        {<List sx={{ width: '100%' }}>
                            {recipe.recipe.ingredientLines.map((value) => (
                                <ListItem
                                    key={value}
                                    disableGutters
                                >
                                    <ListItemText primary={`${value}`} />
                                </ListItem>
                            ))}
                        </List>}
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box sx={{ bgcolor: '#404040', p: 5 }}>
                        <Typography variant="h5" color='white'>Nutrients: </Typography>
                        {<List sx={{ width: '100%' }}>
                            {recipe.recipe.digest.map((value) => (
                                <ListItem
                                    key={value}
                                    disableGutters
                                >
                                    <ListItemText primary={`${value.label} ${parseInt(value.total)}${value.unit}`} />
                                </ListItem>
                            ))}
                        </List>}
                    </Box>
                </Stack>
            </Container >
        </ThemeProvider>
    )
}

export default RecipePage

