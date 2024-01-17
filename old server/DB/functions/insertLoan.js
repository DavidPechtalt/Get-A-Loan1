const {pool} = require('../createDB/pool')

const insertLoan = async ( values) => {
  const sql = `INSERT INTO loans
    (
    status,
    amount,
    numOfPayments,
    givenAt,
    fixedRate,
    prime,
    plusRate,
    currentRate,
    currentBalance,
    userId,
    paidNum
    ) 
    VALUES(
       
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ? )`;
       
   
  return await pool.query(sql, values);
};
module.exports = { insertLoan };
