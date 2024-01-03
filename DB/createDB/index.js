const { createLonasTable } = require("./createLoansTable");
const { createDirectDebitsTable } = require("./createDirectDebitsTable");
const { pool } = require("./pool");
// const sql = `DROP TABLE direct_debits`
// pool.query('DROP TABLE direct_debits')
const { getUserID } = require("../functions/getUserID");
const { stringAssembly } = require("../functions/stringAssembly");
const { getAll } = require("../functions/getAll");
getUserID("ee");
async function getAllLoans() {
  const queriesArr = [
    "amount = ",
    "currentRate = ",
    "fixedRate = ",
    "plusRate = ",
    "givenAt = ",
    "givenAt > ",
    "givenAt < ",
    "userName = ",
  ];
  const searchObj = {
    amount: 5682,
    currentRate: undefined,
    fixedRate: undefined,
    plusRate: undefined,
    givenAt: undefined,
    from: undefined,
    to: undefined,
    userName: undefined,
  };
  const string = stringAssembly(queriesArr, searchObj);
  const resp = await getAll("loans", string);
  console.log("resp", resp);
}
getAllLoans()

