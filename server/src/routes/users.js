const express = require('express');
// const { getUserID } = require('../../DB/functions/getUserID');
const router = express.Router();
const {newLoan} = require('../../../DB/functions/newLoan')

router.get('/user_id/:name',async (req, res)=>{
   const resp = await getUserID(req.params.name) 
   res.send(resp)
})
router.get('/loans', async(req, res)=>{
    const userLoans =  [
        {
          loanId: "1654",
          paymentBalance: 7364,
          nextPaymentSum: 70,
          nextPaymentDate: "19/2/22",
          additionalDetails: [
            {
              givenAt: "19/33/44",
              originalAmount: 990,
              currentInterestPercent: 2.3,
              typeOfinterest: "arbitraty",
              indexType: "none",
              lastPaymentDate: "11/2/33",
            },
          ],
        },
      ];
    if(Math.random() < 0.5){
        res.send(userLoans).status(200)
    }else{
        res.status(500).send()
    }
})
router.post('/loans/new_loan',async (req, res)=>{
    const details = req.body;
    console.log(details);
   newLoan(details).then((con)=>{
    if(con){
        console.log(con);
        res.status(200).send('done')
    }
    else res.status(500).send('faild')
   }).catch((er)=>{ res.send(JSON.stringify(er))})
 })

module.exports = router;