const {pool} = require('../createDB/pool')

const searchLoansTable = (parameters)=>{
    console.log(parameters);
    let baseQuery = `SELECT * FROM loans WHERE `;
    const byUserId = `user_id = ? `;
    const byLoanSum =  ` sum = ? `;
    const biggerThen = ` sum > ? `;
    const smallerThen = ` sum < ? `;  
    const arr = [byUserId, byLoanSum, biggerThen, smallerThen];
    const paramsArr = []
    let filledNum = 0 ;
    for(let i in parameters){
        console.log(parameters[i]);
        if(parameters[i] == '')break;
        filledNum++;
        paramsArr.push(parameters[i])
        if(filledNum> 0 && filledNum <5){
            baseQuery += " AND "
        }
        baseQuery = baseQuery + arr[i]
    }
 

    pool.query(baseQuery, paramsArr).then(res => console.log(res))
}
module.exports = {searchLoansTable}