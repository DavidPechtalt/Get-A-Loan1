 function insertInto(table,column, value, connection){
        const sql = `INSERT INTO ${table} (${column}) VALUES(?)`
      const res =   connection.query(sql, [ value]);
      return res;
}

module.exports = {insertInto};