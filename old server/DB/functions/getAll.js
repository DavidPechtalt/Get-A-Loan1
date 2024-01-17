const { pool } = require("../createDB/pool")

const getAll = async (tableName, query)=>{
    const sql =     `SELECT * FROM ${tableName} WHERE ${query} `
    const res = await pool.query(sql,[tableName, query])
    console.log(res);
    return res[0]
}
// const res =  getAll("loans", "user_id > 0").then((res) =>{console.log(res);});

module.exports = {getAll};
