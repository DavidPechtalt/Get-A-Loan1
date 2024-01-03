const {pool} = require('../createDB/pool');

async function getAllPending(){
    const query = `SELECT * FROM loans WHERE( status ='pending')`
    console.log('ensured');

    try {
      const values = await  pool.query(query)
      console.log(values);
      return values;
    } catch (error) {
        console.error(error);
        return error;
    }
}
module.exports = {getAllPending}
