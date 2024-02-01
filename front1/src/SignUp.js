import { useState } from "react";
import { TextField, Button, Link, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import instance from "./api/api";
export default function SignUp() {
  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    bankAccount: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    password: false,
    phone: false,
    bankAccount: false,
  });
  const navigate = useNavigate();
  function setErrorKey(key) {
    const currentValues = errors;
    currentValues[key] = true;
    setErrors(currentValues);
  }
  function setInputValue(key, value) {
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
      }
    }
    try {
      const ans = await instance.post("users/register", {
        firstName: fieldValues.firstName,
        lastName: fieldValues.lastName,
        phone: fieldValues.phone,
        password: fieldValues.password,
        bankAccount: fieldValues.bankAccount,
      });
      if(ans.data === "Non credible bank account"){
        alert("nonCredible Bank AccountF!!!!!")
        return;
      }
      navigate('/log_in')
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }
  return (
    <>
      <Container maxWidth="sm" style={{ paddingTop: "22vh" }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2 style={{ display: "block", textAlign: "center" }}>
            Sign Up Form
          </h2>
          <TextField
            label="First Name"
            onChange={(e) => setInputValue("firstName", e.target.value)}
            required
            variant="outlined"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={fieldValues.firstName}
            error={errors.firstName}
          />
          <TextField
            label="Last Name"
            onChange={(e) => setInputValue("lastName", e.target.value)}
            required
            variant="outlined"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={fieldValues.lastName}
            error={errors.lastName}
          />

          <TextField
            label="Phone"
            onChange={(e) => setInputValue("password", e.target.value)}
            required
            variant="outlined"
            type="string"
            sx={{ mb: 3 }}
            fullWidth
            value={fieldValues.password}
            error={errors.password}
          />
          <TextField
            label="Password"
            onChange={(e) => setInputValue("phone", e.target.value)}
            required
            variant="outlined"
            type="password"
            sx={{ mb: 3 }}
            fullWidth
            value={fieldValues.phone}
            error={errors.phone}
          />

          <TextField
            label="bank account"
            onChange={(e) => setInputValue("bankAccount", e.target.value)}
            required
            variant="outlined"
            type="string"
            sx={{ mb: 3 }}
            fullWidth
            value={fieldValues.bankAccount}
            error={errors.bankAccount}
          />

          <Button variant="outlined" color="secondary" type="submit">
            Sign Up
          </Button>
        </form>
        <small>
          Have an account ? <Link to="/log_in">Sign In here</Link>
        </small>
      </Container>
    </>
  );
}
