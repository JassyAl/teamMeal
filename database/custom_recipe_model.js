var pool = require('./Database');

const getRecipes = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT recipe_id AS id FROM saved_recipes', (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(results.rows);
    })
  }) 
}

const createRecipe = (body, location) => {
  return new Promise(function(resolve, reject) {
    const { id } = body;
    
    pool.query('INSERT INTO saved_recipes (recipe_id) VALUES ($1)', [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`A new entry has been added: ${JSON.stringify(results.rows[0])}`);
    })
  })
}

const deleteRecipe = (recipeId) => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(recipeId);

    pool.query('DELETE FROM saved_recipes WHERE recipe_id = $1', [id], (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(`recipe deleted with ID: ${id}`);
    })
  })
}

module.exports = {
  getRecipes,
  createRecipe,
  deleteRecipe,
};