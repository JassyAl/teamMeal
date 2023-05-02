import axios from 'axios';

const BASE_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';


// const options = {
//     //method: 'GET',
//     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//     params: {
//         number: '10',
//         addRecipeNutrition: 'true',
//         intolerances: 'gluten'
//         //addRecipeInformation: 'true'
//     },
//     headers: {
//         'content-type': 'application/octet-stream',
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     }
// };

export const fetchFromAPI = async (url, options) => {  // template string backtick
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    //console.log(data);
    return data;
}




