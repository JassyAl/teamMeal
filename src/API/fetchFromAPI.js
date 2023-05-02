import axios from 'axios';

const BASE_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes';


const options = {
    //method: 'GET',
    url: BASE_URL,
    params: {
        number: '2',
        addRecipeNutrition: 'true'
        //addRecipeInformation: 'true'
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'c0f12444f6msh83117ab0f39c3aap1209a9jsn0bafd8130fc3',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {  // template string backtick
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}




//************ */

//uses hits and /search
// const BASE_URL = 'https://edamam-recipe-search.p.rapidapi.com';


// const options = {
//     //method: 'GET',
//     url: BASE_URL,
//     headers: {
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//         'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
//     }
// };

// export const fetchFromAPI = async (url) => {  // template string backtick
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//     console.log(data);
//     return data;
// }



