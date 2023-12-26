const express = require("express");
const { newLoan } = require("../../../DB/functions/newLoan");
const { stringAssembly } = require("../../../DB/functions/stringAssembly");
const { getAll } = require("../../../DB/functions/getAll");
const { pool } = require("../../../DB/createDB/pool");
const router = express.Router();
router.use(express.json());
router.post("/loans/new_loan", (req, res) => {
  // console.log('Got the request!!!!!!');
  const details = req.body;
  console.log("got your request to new loan");

  newLoan(details)
    .then((con) => {
      console.log(con);
      res.status(200).send("done");
    })
    .catch((err) => {
      res.status(500).send("error");
    });
});

router.post('/loans', async(req, res) =>{
  console.log("got in");
  const queriesArr = req.body.queriesArr;
  const searchObj = req.body.searchObj;
  console.log(req.body);
  const string =  stringAssembly(queriesArr, searchObj)
  const resp = await getAll('loans', string)
  console.log("resp", resp);
  res.send(resp)
})
router.get("/account", (req, res) => {
  //getCashFlow();
});
module.exports = router;
