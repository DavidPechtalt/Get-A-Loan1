const user = require("../models/user");

const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.logIn = async (req, res, next) => {
  try {
    const { password, id } = req.body;
    const ans = await user.logIn(id);
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
    return  res.send("You are not in the data");
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
    const { firstName, lastName, password, id } = req.body;
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });

    const ans = await user.register(firstName, lastName, hashedPassword, id);

    res.send(ans);
  } catch (error) {
    next(error);
  }
};


exports.checkSession = (req, res)=>{
  console.log(req.session);
  if(req.session.user){
    console.log(req.session);
    res.send({loggedIn: true, user: req.session.user})
  }
  else{
    res.send({loggedIn: false})
  }
}
