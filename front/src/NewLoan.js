import * as React from "react";
import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Button, InputLabel, Select, MenuItem } from "@mui/material";
export default function NewLoan() {
  const keys = {
    bank_account: "",
    sum: "",
    num_of_payments: "",
    
    given_at: "",
    fixed_rate: "",
    prime: "",
    plus_rate: "",
    current_rate: "",
    current_balance: "",
    user_id: "",
    paid_num: "",
  };
  const [fieldValues, setFieldValues] = useState({ ...keys });
  const [errors, setErrors] = useState({ ...keys });
  // const navigate = useNavigate();
  function setErrorKey(key) {
    const currentValues = { ...errors };
    currentValues[key] = true;
    setErrors(currentValues);
  }
  function setInputValue(key, value) {
    const nowErrors = { ...errors };
    nowErrors[key] = false;
    setErrors(nowErrors);
    console.log(key, value);
    const currentValues = { ...fieldValues };
    currentValues[key] = value;
    setFieldValues(currentValues);
  }
  function handleSubmit(e) {
    e.preventDefault();
    for (let error in errors) {
      errors[error] = false;
    }

    for (let key in fieldValues) {
      if (fieldValues[key] === "") {
        setErrorKey(key);
        console.log(key);
        return;
      }
    }
    if(fieldValues.given_at.length !== 10){
      setErrorKey('given_at')
      console.log("uncorrect date");
      return
    }
    // setInputValue('given_at', new Date(fieldValues.given_at,))
    console.log('handle submit sends post in ln 59');
    axios
      .post("http://localhost:4000/admin/loans/new_loan", fieldValues)
      .then(() => alert("sucess"))
      .catch((error) => console.log(error));

    console.log(fieldValues);
    // setFieldValues({ ...keys });
  }
  return (
    <Container fluid size="sm">
      <form
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
        width={"100%"}
        height={"100%"}
      >
        <div>
          <h1>Submit A New Loan</h1>
        </div>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "fit-content",
            marginTop: "18vh",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Bank Account"
            variant="filled"
            size="small"
            value={fieldValues.bank_account}
            error={errors.bank_account}
            onChange={(e) => setInputValue("bank_account", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Sum "
            variant="filled"
            size="small"
            value={fieldValues.sum}
            error={errors.sum}
            onChange={(e) => setInputValue("sum", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="num of payments "
            variant="filled"
            size="small"
            value={fieldValues.num_of_payments}
            error={errors.num_of_payments}
            onChange={(e) => setInputValue("num_of_payments", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Given At"
            variant="filled"
            size="small"
            value={fieldValues.given_at}
            error={errors.given_at}
            onChange={(e) => setInputValue("given_at", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="fixed_rate "
            variant="filled"
            size="small"
            value={fieldValues.fixed_rate}
            error={errors.fixed_rate}
            onChange={(e) => setInputValue("fixed_rate", e.target.value)}
          />

          <Select
            id="demo-simple-select"
            label={"Num of payments"}
            value={fieldValues.prime}
            error={errors.prime}
            onChange={(e) => setInputValue("prime", e.target.value)}
          >
            <MenuItem value={true}>Prime</MenuItem>
            <MenuItem value={false}>nonPrime</MenuItem>
          </Select>
          <TextField
            id="filled-basic"
            label="plus rate"
            variant="filled"
            size="small"
            value={fieldValues.plus_rate}
            error={errors.plus_rate}
            onChange={(e) => setInputValue("plus_rate", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="current rate"
            variant="filled"
            size="small"
            value={fieldValues.current_rate}
            error={errors.current_rate}
            onChange={(e) => setInputValue("current_rate", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Current Balance"
            variant="filled"
            size="small"
            value={fieldValues.current_balance}
            error={errors.current_balance}
            onChange={(e) => setInputValue("current_balance", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="user id"
            variant="filled"
            size="small"
            value={fieldValues.user_id}
            error={errors.user_id}
            onChange={(e) => setInputValue("user_id", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="paid_num"
            variant="filled"
            size="small"
            value={fieldValues.paid_num}
            error={errors.paid_num}
            onChange={(e) => setInputValue("paid_num", e.target.value)}
          />

          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Container>
  );
}
