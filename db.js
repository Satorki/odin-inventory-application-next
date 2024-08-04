const Pool = require("pg").Pool;

const pool = new Pool({
  user: "satorki",
  password: "9856",
  host: "localhost",
  port: 5432,
  database: "carshop",
});

module.exports = pool;
