const { pool } = require("../createDB/pool");
const { allPayments } = require("./allPayments");
const { calculateMonthlyPayment } = require("./calculateMonthlyPayment");
const { insertDirect } = require("./insertDirect");
const { insertLoan } = require("./insertLoan");
const newLoan = async (details) => {
  const connection = await pool.getConnection();
  connection.beginTransaction();
  try {
    let detailsArr = [
      details.bank_account,
      details.sum,
      details.num_of_payments,
      details.given_at,
      details.fixed_rate,
      details.prime,
      details.plus_rate,
      details.current_rate,
      details.current_balance,
      details.user_id,
      details.paid_num,
    ];
    let loan_id = await connection.query(`SELECT MAX(loan_id)  FROM loans`);
    loan_id = Object.values(loan_id[0][0])[0];
    
    console.log(detailsArr);
   const loan = await insertLoan(connection, detailsArr);
   console.log("tried to set loan ", loan);
     allPayments(
      details.sum,
      details.num_of_payments,
      details.current_rate,
      details.given_at,
      loan_id,
      connection
    )
      console.log(loan_id, "loan_id", details.plus_rate);
    connection.commit();
    connection.release();
    console.log("success! returning true");
    return true
    

      
  
  } catch (error) {
    console.log(`error in newLoan ${error}`);
    connection.rollback();
      connection.release();
    return error;
  } 
};

module.exports = { newLoan };
