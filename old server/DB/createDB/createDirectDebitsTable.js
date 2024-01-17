const {pool} = require("./pool");

const createDirectDebitsTable = async () => {
  const sql =
    `CREATE TABLE direct_debits
     ( direct_debit_id INT AUTO_INCREMENT PRIMARY KEY ,
        loan_id INT NOT NULL,
        day_of_excution INT NOT NULL,
        bank_code INT NOT NULL,  
        branch_code INT NOT NULL,
        num_of_payments INT NOT NULL,

        authorized BOOLEAN NOT NULL) `;
    const res = await pool.query(sql)
    console.log(res);

};
module.exports = {createDirectDebitsTable}