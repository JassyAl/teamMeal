require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: true,
});

/* test connectivity  and test queries to verify they are correct
 
const query1 = "Select  NOW()";
const query2 = "Select * FROM users";
pool.connect();

pool.query(query2, (err, res) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Connected  to PostDB", res.rows);
  }
  pool.end();
});
*/
module.exports = pool;