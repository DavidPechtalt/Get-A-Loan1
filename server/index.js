const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors");


const session = require("express-session");

const userRoutes = require("./src/routes/userRoutes").router;
// const loanRoutes = require('./src/routes/loanRoutes');
// const paymentRoutes = require('./src/routes/paymentRoutes');
app.use(
  cors({
    origin: [ "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(express.json());
app.use("/users", userRoutes);
// app.use('/loans', loanRoutes);
// app.use('/payments', paymentRoutes);

// ...

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find your request in the server`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});
app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
  });
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
