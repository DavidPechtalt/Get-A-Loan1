const {calculateMonthlyPayment} = require('./calculateMonthlyPayment')
const { insertPayment }= require("./insertPayment");
// const {pool} = require('../createDB/pool')
function allPayments(sum, numOfPayments, interestRate,given_at, loanId, connection){
    const monthlyPayments = calculateMonthlyPayment(sum, numOfPayments, interestRate);
    for(let i = 0; i < numOfPayments; i ++){
        insertPayment( connection, [monthlyPayments, false,  given_at, loanId])
        console.log(loanId, "loan Id");
    }




}
module.exports = {allPayments}
