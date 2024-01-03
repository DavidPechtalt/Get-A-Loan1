const { pool } = require("./pool");
const createClientsTable = async () => {
  const sql =
    " CREATE TABLE clients (   first_name VARCHAR(225), last_name VARCHAR(225) NOT NULL,  client_id INT AUTO_INCREMENT PRIMARY KEY, joined_at DATE NOT NULL)";
  const res = await pool.query(sql);
  console.log(res);
};
module.exports = { createClientsTable };
