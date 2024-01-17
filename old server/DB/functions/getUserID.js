const { pool } = require("../createDB/pool");

const getUserID = async (clientName) => {
  const sql = `SELECT client_id FROM clients WHERE first_name = ?`;
  console.log(clientName);
  const result = await pool.query(sql, [clientName]);
  
    console.log(result[0][0], 'fd');
    return result[0][0];
 
};
module.exports = { getUserID };
