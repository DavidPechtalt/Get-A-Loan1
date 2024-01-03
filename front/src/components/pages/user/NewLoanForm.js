import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Box,
  Container,
  MenuItem,
  Divider,
  InputLabel,
  Select,
  TextField,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import axios from "axios";
import UserId from "../../UserId";

export default function NewLoanForm() {
  const [amount, setAmount] = useState();
  const [numOfPayments, setNumOfPayments] = useState();
  const [interestType, setInterestType] = useState("fixed");
  const [fixedRate, setFixedRate] = useState();
  const [plusRate, setPlusRate] = useState();
  const [prime, setPrime] = useState();
  const [open, setOpen] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState();
  const [error, setError] = useState(false);
  const [currentRate, setCurrentRate] = useState();
  const [userId, setUserId] = useContext(UserId)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(getCurrentRate, []);

  async function getCurrentRate() {
    try {
      const res = await axios.get(
        "https://markets.newyorkfed.org/api/rates/all/latest.json"
      );
      console.log(res.data.refRates[1].percentRate);
      setPrime(res.data.refRates[1].percentRate);
    } catch (err) {
      console.error(err);
    }
  }
  async function submmit() {
    setError(false);
    if (
      !amount ||
      !numOfPayments ||
      (interestType == "fixed" && !fixedRate) ||
      (interestType == "prime" && !plusRate)
    ) {
      setError(true);
      return;
    }

    if (interestType === "prime") {
      setCurrentRate(prime + plusRate);
    } else {
      setCurrentRate((fixedRate));
    }
    try {
      let calculatedPayments = await axios.get(
        `http://localhost:4000/users/calculate_payments?rate=${currentRate}&num=${numOfPayments}&amount=${amount}`
      );
      calculatedPayments = calculatedPayments.data.monthlyPayment;
      console.log(calculatedPayments);
      setMonthlyPayment(calculatedPayments);
    } catch (error) {
      console.log(error);
    }

    setOpen(true);
  }
  async function setNewLoan() {
    const details = {
      status: "pending",
      sum: amount,
      numOfPayments: numOfPayments,
      givenAt: null,
      fixedRate: fixedRate,
      prime: interestType === "prime",
      plusRate: plusRate||null,
      currentRate: currentRate,
      currentBalance: 0,
      userId: UserId,
      paidNum: 0,
    };
    try {
         const res = await axios.post("http://localhost:4000/users/loans/new_loan", details);
        console.log(res);
         alert('We have got your request. we would confirm that. ')

    } catch (error) {
      alert('Error!!!!')
    }
  }
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "8%",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Loan Details</h1>
      <Divider />
      {error && (
        <Alert severity="error">
          One of the details you provided isn't correct!
        </Alert>
      )}
      <TextField
        type="number"
        value={amount}
        variant="outlined"
        label="Amount"
        sx={{ width: "50%", marginX: "auto", marginTop: "10%" }}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <TextField
        type="number"
        value={numOfPayments}
        variant="outlined"
        label="Num Of Payments"
        sx={{ width: "50%", marginX: "auto", marginTop: "7%" }}
        onChange={(e) => {
          setNumOfPayments(e.target.value);
        }}
      ></TextField>
      <h2 style={{ textAlign: "center", marginTop: " 8%" }}>interest Type</h2>
      <Divider></Divider>
      <InputLabel
        id="demo-simple-select-label"
        sx={{ marginX: "auto", marginTop: "5%" }}
      >
        Interest Type
      </InputLabel>
      <Select
        value={interestType}
        sx={{ width: "55%", marginX: "auto" }}
        onChange={(e) => {
          setInterestType(e.target.value);
        }}
      >
        <MenuItem value={"fixed"}>fixed</MenuItem>
        <MenuItem value={"prime"}>prime</MenuItem>
      </Select>
      {interestType === "fixed" ? (
        <TextField
          type="number"
          value={fixedRate}
          variant="outlined"
          label="interest rate "
          sx={{ width: "50%", marginX: "auto", marginTop: "7%" }}
          onChange={(e) => {
            setFixedRate(e.target.value);
          }}
        ></TextField>
      ) : (
        <>
          {" "}
          <h2 style={{ marginInline: "auto", marginTop: "6%" }}>
            The Prime Rate Today is: {prime}{" "}
          </h2>
          <TextField
            type="number"
            value={plusRate}
            variant="outlined"
            label="Plus Rate"
            sx={{ width: "50%", marginX: "auto", marginTop: "7%" }}
            onChange={(e) => {
              setPlusRate(e.target.value);
            }}
            onMouseLeave={() => {
              getCurrentRate();
            }}
          ></TextField>
        </>
      )}{" "}
      <Button
        sx={{ marginTop: "6%", width: "20%", marginX: "auto" }}
        onClick={() => {
          submmit();
        }}
      >
        Submmit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure You Wanna Take The Loan?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {monthlyPayment
              ? ` The Monthly Payment Is Gonna Be ${monthlyPayment} `
              : "Please enter another plan. we can not accept your terms"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>NO, I DON'T WANT</Button>
          <Button onClick={setNewLoan} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
