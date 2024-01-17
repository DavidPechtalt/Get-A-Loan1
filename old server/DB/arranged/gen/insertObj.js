const { insertInto } = require("./insertInto");


async function insertObj(obj, tableName, connection) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const length = keys.length;
 
  const sql = ` INSERT INTO ${tableName} ( `
  for (let i = 0; i < length; i++) {
   sql += keys[i];
  }
  sql += ` ) VALUES ( `;
  for (let i = 0; i < length; i++) {
    sql += `? `
   }
   sql += ` )`
   console.log(sql);
   const res = await connection.query(sql, values);

  return res;
}

module.exports = {insertObj}
