async function updateBalance( current_balance, loan_id, connection){

const sql = `UPDATE loans SET current_balance = ? WHERE loan_id = ?`

connection.query(sql, [current_balance, loan_id])



}

module.exports = {updateBalance};