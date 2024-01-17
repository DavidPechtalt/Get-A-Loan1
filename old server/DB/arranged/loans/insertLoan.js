const { pool } = require("../gen/pool");

const { insertObj } = "../gen/insertObj";
async function insertLoan(obj, connection) {
  const res = await insertObj(obj, "loans", connection);

  return res;
}

module.exports = { insertLoan };
