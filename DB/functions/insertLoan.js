const insertLoan = async (connection, values) => {
  const sql = `INSERT INTO loans
    (
    bank_acc,
    sum,
    num_of_payments,
    given_at,
    fixed_rate,
    prime,
    plus_rate,
    current_rate,
    current_balance,
    user_id,
    paid_num
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
       
   
  return await connection.query(sql, values);
};
module.exports = { insertLoan };
