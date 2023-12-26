const express = require("express");
const cors = require("cors");
// const { searchLoansTable } = require("../../DB/functions/searchTable");

const app = express();
const PORT = process.env.Port || "4000";
app.use(express.json());
app.use(cors());


const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/users');

app.use('/admin', adminRouter);
app.use('/users', usersRouter);
app.get("/loans/all", async (req, res) => {
  console.log(searchLoansTable(req.query));
});
app.listen(4000, console.log("app listenning on Port " + PORT));
