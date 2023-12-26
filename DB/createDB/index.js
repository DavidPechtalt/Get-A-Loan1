const {createLonasTable} = require('./createLoansTable');
const {createDirectDebitsTable} = require('./createDirectDebitsTable')
const {pool} = require('./pool');
// const sql = `DROP TABLE direct_debits`
    // pool.query('DROP TABLE direct_debits')
const {getUserID} = require('../functions/getUserID')
getUserID('ee')
// pool.query(sql);ge
// pool.query(`ALTER TABLE direct_debits ADD account_number INT NOT NULL`)
// pool.query('SELECT MAX(loan_id) FROM LOANS').then((R)=>console.log(R));
// createDirectDebitsTable()
// createLonasTable()