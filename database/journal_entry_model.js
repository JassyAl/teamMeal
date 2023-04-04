var pool = require('./Database');

const getEntries = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT journal_id AS id, journal_date AS date, title, journal_entry AS content FROM journals ORDER BY journal_date DESC, id DESC', (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(results.rows);
    })
  }) 
}

const createEntry = (body) => {
  return new Promise(function(resolve, reject) {
    const { date, title, entry } = body;
    
    // not sure what to do with the last 3 columns for now
    pool.query('INSERT INTO journals (journal_date, title, journal_entry, account_id, category_id, cell_num) VALUES ($1, $2, $3, 1234, 5678, 9012)', [date, title, entry], (error, results) => {
      if (error) {
        reject(error);
      }
      //resolve(`A new entry has been added: ${JSON.stringify(results.rows[0])}`);
    })
  })
}

/*const deleteEntry = (journalId) => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(journalId);

    pool.query('DELETE FROM journals WHERE journal_id = $1', [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`journal deleted with ID: ${id}`);
    })
  })
}*/

module.exports = {
  getEntries,
  createEntry,
  //deleteEntry,
};