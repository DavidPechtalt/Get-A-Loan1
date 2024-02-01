const user = require("../models/user");

const bcrypt = require("bcrypt");
const { findFileIdByAccountNumber } = require("../services/bank");
const saltRounds = 10;

exports.logIn = async (req, res, next) => {
  try {
    const { firstName, lastName, password } = req.body;

    const ans = await user.logIn(firstName, lastName);
    if (!ans[0][0]) {
      res.send("You are not in the data");
    }
    const checkPassword = await new Promise((resolve, reject) => {
      console.log(password);
      bcrypt.compare(password, ans[0][0].password, function (err, result) {
        if (err) reject(err);
        resolve(result);
      });
    });
    console.log(checkPassword);
    if (!checkPassword) {
      return res.send("You are not in the data");
    }

    req.session.user = ans[0];
    console.log(req.session.user);
    res.send(ans[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, password, phone, bankAccount } = req.body;
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
    const isBankAccount = await findFileIdByAccountNumber(bankAccount);
    if(!isBankAccount){
res.send("Non credible bank account");
    }
      
   
      const ans = await user.register(
        firstName,
        lastName,
        hashedPassword,
        phone,
        bankAccount
      );
        console.log(ans[0]);
      res.send(ans[0]);
        
  } catch (error) {
    next(error);
  }
};

exports.checkSession = (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    console.log(req.session);
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
};
