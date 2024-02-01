const { pool } = require("./pool");

exports.logIn = async (firstName, lastName) => {
  const sql = `SELECT * FROM clients WHERE firstName = ? AND lastName = ? `;
  try {
    const ans = await pool.query(sql, [firstName,lastName]);
    return ans;
  } catch (error) {
    throw new Error(error);
  }
};

exports.register = async (firstName, lastName, password, phone, bankAccount) => {
  const sql = `INSERT INTO clients (firstName, lastName,  password, bankAccount, phone) VALUES (?, ?, ?, ?, ?)`;
  try {
    const ans = await pool.query(sql, [firstName, lastName, password,  bankAccount, phone]);
    return ans;
  } catch (error) {
    throw new Error(error);
  }
};
