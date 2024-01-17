const sql = require("mysql2/promise");

const pool = sql.createPool({
  host: "localhost",
  user: "root",
  password: "0548434158",
  database: "get_a_loan",
});


module.exports = {pool}
