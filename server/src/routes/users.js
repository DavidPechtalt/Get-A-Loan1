const express = require('express');
// const { getUserID } = require('../../DB/functions/getUserID');
const router = express.Router();
const {newLoan} = require('../../../DB/functions/newLoan');
const { calculateMonthlyPayment } = require('../../../DB/functions/calculateMonthlyPayment');
const { insertLoan } = require('../../../DB/functions/insertLoan');

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
router.get('/calculate_payments', async(req, res)=>{
    const rate = req.query.rate;
    const numOfPayments = req.query.num;
    const amount = req.query.amount;
    const monthlyPayment = calculateMonthlyPayment(amount, numOfPayments, rate);
    console.log('Monthly payment is: ', monthlyPayment);
    res.send({monthlyPayment: monthlyPayment})

})
router.post('/loans/new_loan',async (req, res)=>{
      const details =Object.values(req.body);
      console.log(req.body, details);
      try {
        const resp = await insertLoan(details);
        res.send(resp)
      } catch (error) {
        console.error(error);
        res.status(500)
      }
      



 })

module.exports = router;