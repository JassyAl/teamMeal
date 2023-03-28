import axios from 'axios';

//uses hits and /search
const BASE_URL = 'https://edamam-recipe-search.p.rapidapi.com';


const options = {
    //method: 'GET',
    url: BASE_URL,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
};




export const fetchFromAPI = async (url) => {  // template string backtick
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}


// const BASE_URL = 'https://api.edamam.com/api/recipes';
// const KEY = process.env.EDAMAM_KEY;
// const ID = process.env.EDAMAM_ID;
//
// export const fetchFromAPI = async (url) => {  // template string backtick
//     const { data } = await axios.get(`${BASE_URL}/${url}&api_id=${ID}&app_key=${KEY}`);
//
//     return data;
// }