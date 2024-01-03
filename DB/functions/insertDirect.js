const insertDirect =async (connection, values)=>{
    const sql = `INSERT INTO direct_debits 
    (
      loan_id,
      day_of_excution,
      bank_code,
      branch_code,
      num_of_payments,
      authorized,
      account_number)
    VALUES (
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?
  
      )`

     return await connection.query(sql, values);
}
module.exports = {insertDirect}