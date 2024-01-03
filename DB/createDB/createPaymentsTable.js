const {pool} = require("./pool");

const createPaymentsTable = async () => {
  const sql =
    `CREATE TABLE payments_table (
        payment_id INT PRIMARY KEY AUTO_INCREMENT,
        date DATE NOT NULL, 
        account_num INT NOT NULL,
        sum INT NOT NULL
    ) 
    `
    const res = await pool.query(sql)
    console.log(res);

};
module.exports = {createPaymentsTable}