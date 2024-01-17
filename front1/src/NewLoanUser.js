import * as React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import UserName from "./UserNameCon";
// import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Button, InputLabel, Select, MenuItem } from "@mui/material";
export default function NewLoanUser() {
    const [userName, setUserName] = useContext(UserName);
    const [userId, setUserId] = useState()
  const keys = {
    accountNumber: "",
    branchCode: "",
    bankCode: "",
    dayOfPayment: "",
    numOfPayments: "",
    interestPercent: "",
    interestType: "",
    sum: "",
    
    
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
  async function handleSubmit(e) {
    e.preventDefault();
    for (let error in errors) {
      errors[error] = false;
    }
    for (let key in fieldValues) {
      if (fieldValues[key] === "") {
        setErrorKey(key);
        console.log(errors[key]);
        return;
      }
      
    }

    const response = await axios.get(`http://localhost:4000/users/user_id/${userName}`)
    console.log("Response ", response.data.client_id);
    setUserId( response.data.client_id)
    console.log('val', userId);
  
    axios
      .post("http://localhost:4000/users/loans/new_loan", fieldValues)
      .then(()=> alert('sucess'))
      .catch((error) => console.log(error));

    console.log(fieldValues);
    setFieldValues({ ...keys });
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
            label="Sum "
            variant="filled"
            size="small"
            value={fieldValues.sum}
            error={errors.sum}
            onChange={(e) => setInputValue("sum", e.target.value)}
          />

          <Select
            id="demo-simple-select"
            label={"Interst Type"}
            value={fieldValues.interestType}
            error={errors.interestType}
            onChange={(e) => setInputValue("interestType", e.target.value)}
          >
            <MenuItem value={"Fixed"}>fixed</MenuItem>
            <MenuItem value={"Non-Fixed"}>nonFixed</MenuItem>
          </Select>
          <TextField
            id="filled-basic"
            label="Interest Percent"
            variant="filled"
            size="small"
            value={fieldValues.interestPercent}
            error={errors.interestPercent}
            onChange={(e) => setInputValue("interestPercent", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Num Of Payments"
            variant="filled"
            size="small"
            value={fieldValues.numOfPayments}
            error={errors.numOfPayments}
            onChange={(e) => setInputValue("numOfPayments", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Day In Month Of Payment"
            variant="filled"
            size="small"
            value={fieldValues.dayOfPayment}
            error={errors.dayOfPayment}
            onChange={(e) => setInputValue("dayOfPayment", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Bank Code"
            variant="filled"
            size="small"
            value={fieldValues.bankCode}
            error={errors.bankCode}
            onChange={(e) => setInputValue("bankCode", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Branch Code"
            variant="filled"
            size="small"
            value={fieldValues.branchCode}
            error={errors.branchCode}
            onChange={(e) => setInputValue("branchCode", e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Account Number"
            variant="filled"
            size="small"
            value={fieldValues.accountNumber}
            error={errors.accountNumber}
            onChange={(e) => setInputValue("accountNumber", e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Container>
  );
}
