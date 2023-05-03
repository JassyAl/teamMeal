var pool = require('./Database');

const getRecipes = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT id, image_name, steps, ingredients FROM custom_recipes', (error, results) => {
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
    const { steps, ingredients } = body;
    
    pool.query('INSERT INTO custom_recipes (image_name, steps, ingredients) VALUES ($1, $2, $3)', [location, steps, ingredients], (error, results) => {
      if (error) {
        reject(error);
      }
      //resolve(`A new entry has been added: ${JSON.stringify(results.rows[0])}`);
    })
  })
}

const deleteRecipe = (recipeId) => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(recipeId);

    pool.query('DELETE FROM custom_recipes WHERE id = $1', [id], (error, results) => {
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