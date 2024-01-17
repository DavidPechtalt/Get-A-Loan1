const insertPayment = async (connection, values) => {
    const sql = `INSERT INTO payments
      (
      
      sum,
     submmitted,
      date,
      loan_id
     
      ) 
      VALUES(
         
          ?,
          ?,
          ?,
          ?
           )`;
           try {
             const res = await  connection.query(sql, values);
          console.log(res , "payment set");
           } catch (error) {
            console.log(error);
           }
        
   
  };
  module.exports = { insertPayment };
  