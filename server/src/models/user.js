const { pool } = require("./pool");

exports.logIn = async (id) => {
  const sql = `SELECT * FROM clients WHERE client_id = ?`;
  try {
    const ans = await pool.query(sql, [ id]);
    return ans;
  } catch (error) {
    throw new Error(error);
  }
};

exports.register = async (firstName, lastName, password, id) => {
  const sql = `INSERT INTO clients (first_name, last_name, client_id, password, joined_at) VALUES (?, ?, ?, ?, ?)`;
  try {
    const ans = await pool.query(sql, [firstName, lastName, id, password,new Date().toISOString().slice(0,10)]);
    return ans;
  } catch (error) {
    throw new Error(error);
  }
};
