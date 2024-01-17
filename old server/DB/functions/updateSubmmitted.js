async function updateSubmmitted(payment_id, connect){
        const sql =     "UPDATE payments SET submmitted = true WHERE payment_id = ?"

        connect.query(sql,[ payment_id])

}

module.exports = {updateSubmmitted};