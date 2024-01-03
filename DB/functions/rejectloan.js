const {pool} = require('../createDB/pool');


async function rejectloan(loanId){
    try {
        const sql =         `UPDATE loans SET (status = 'rejected' ) WHERE (loanId = ?)`
const query = await pool.query(sql, [loanId]);
return query
    } catch (error) {
        console.error(error);
        return error;
    }

}