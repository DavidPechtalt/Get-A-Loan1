async function update(table, column, value, where, connection){

    const sql = `UPDATE ?
        SET ? = ?
        WHERE ?`
    const res = await connection.query(sql, [table, column, value, where])
    return res;
}