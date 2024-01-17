const { pool } = require("./pool");

const createLonasTable = async () => {
  const sql = `CREATE TABLE loans (
    loan_id INT AUTO_INCREMENT PRIMARY KEY ,
    sum INT,
    interestPercent   VARCHAR(225) , 
      
    user_id INT NOT NULL, 
    index_type VARCHAR(225)
      )  `;
  // const sql = 'ALTER TABLE loans ADD COLUMN  ';
  const res = await pool.query(sql);
  console.log(res);
};
module.exports = { createLonasTable };
