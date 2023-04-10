var pool = require('./Database');

const getMessages = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT id, content, date, sender FROM messages ORDER BY date ASC', (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(results.rows);
    })
  }) 
}

const createMessage = (body) => {
  return new Promise(function(resolve, reject) {
    const { content, sender } = body;
    
    pool.query('INSERT INTO messages (content, date, sender) VALUES ($1, NOW(), $2)', [content, sender], (error, results) => {
      if (error) {
        reject(error);
        console.log(error);
      }
      resolve(`A new message has been added: ${JSON.stringify(results.rows[0])}`);
    })
  })
}

module.exports = {
  getMessages,
  createMessage
};