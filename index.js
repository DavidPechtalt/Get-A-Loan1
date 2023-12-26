const sql = require("mysql2/promise");

const pool = sql.createPool({
  host: "localhost",
  user: "root",
  password: "0548434158",
  database: "get_a_loan",
});
const { insertLoan } = require("./DB/functions/insertLoan");
const { insertPayment } = require("./DB/functions/insertPayment");
const { updateBalance } = require("./DB/functions/updateBalance");
const { updateSubmmitted } = require("./DB/functions/updateSubmmitted");
const { allPayments } = require("./DB/functions/allPayments");
const { newLoan } = require("./DB/functions/newLoan");
const { log } = require("console");

// newLoan({
//   bank_account: 384,
//   sum: 85,
//   num_of_payments: 87,
//   given_at: new Date("2022-03-25"),
//   fixed_rate: 45,
//   prime: false,
//   plus_rate: null,
//   current_rate: 0.5,
//   current_balance: 5869,
//   user_id: 39,
//   paid_num: 0,
// }).then(() => {
//   return;

pool.query(
  `INSERT INTO payments ( sum,
  submmitted,
   date,
   loan_id)
    VALUES(

      ?,
      ?,
      ?,
      ?
    )
   `,
  [5000, true, new Date("1990-03-03"), 48]
).then((RES)=> console.log(RES)).catch((ER) => console.error(ER));
// });

