const express = require("express");
const { newLoan } = require("../../../DB/functions/newLoan");
const { stringAssembly } = require("../../../DB/functions/stringAssembly");
const { getAll } = require("../../../DB/functions/getAll");
const { pool } = require("../../../DB/createDB/pool");
const {getAllPending} = require('../../../DB/functions/getAllPendingRequests')
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

router.post("/loans", async (req, res) => {
  console.log("got in");
  const queriesArr = [
    "amount = ",
    "currentRate = ",
    "fixedRate = ",
    "plusRate = ",
    "givenAt = ",
    "givenAt > ",
    "givenAt < ",
    "userName = ",
  ];
const searchObj = req.body
  const string = stringAssembly(queriesArr, searchObj);
  const resp = await getAll("loans", string);
  console.log("resp", resp);
  res.send(resp);
});
router.get("/requests", async (req, res, next) => {
  console.log('got request!');
    try {
    const pending = await  getAllPending()
    const response = pending[0]
    res.send(response)
    } catch (error) {
      console.error(error);
      next()
    }
});
module.exports = router;
