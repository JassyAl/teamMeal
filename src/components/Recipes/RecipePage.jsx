import React from 'react'
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from '@mui/material';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import './recipes.css';



const RecipePage = ({ recipes }) => {
    const { label } = useParams();

    const recipe = recipes.find(recipe => { return (recipe.recipe.label) == label });

    return (
        <Container maxWidth="lx">
            <Typography color='white' >
                <h1>{recipe.recipe.label}</h1>
                <Box sx={{ p: 4 }}>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="stretch" spacing={4}
                    >
                        <Grid item xs={2} md={4}>
                            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                        </Grid>
                        <Grid item xs={2} md={5}>
                            <h2>Source: {recipe.recipe.source}</h2>
                            <h3>Calories: {parseInt(recipe.recipe.calories)}</h3>
                            <h4>{recipe.recipe.dietLabels}</h4>
                            <Button href={recipe.recipe.url} target="_blank" rel="noreferrer" variant="contained" color="secondary" >Complete Recipe Here</Button>
                        </Grid>


                    </Grid>
                </Box>

                <Box sx={{ p: 4 }}>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="stretch" spacing={4}
                    >
                        <Grid item xs={3} md={5} sx={{ bgcolor: '#404040' }}>
                            <h3>Ingredients: </h3>
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
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={2} md={4} sx={{ bgcolor: '#404040' }}>
                            <h3>Nutrients: </h3>
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
                        </Grid>
                    </Grid>
                </Box>
            </Typography>
        </Container>
    )
}

export default RecipePage



// {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//   {[1, 2, 3].map((value) => (
//     <ListItem
//       key={value}
//       disableGutters
//       secondaryAction={
//         <IconButton aria-label="comment">
//           <CommentIcon />
//         </IconButton>
//       }
//     >
//       <ListItemText primary={`Line item ${value}`} />
//     </ListItem>
//   ))}
// </List> */}


// {
//     <List sx={{ width: '100%' }}>
//     {recipe.recipe.ingredientLines.map((value) => (
//         <ListItem
//             key={value}
//             disableGutters
//         >
//             <ListItemText primary={`Item ${value}`} />
//         </ListItem>
//     ))}
// </List>
// }