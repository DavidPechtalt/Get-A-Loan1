import { useState } from "react";
import { TextField, Button, Link, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    lastName: "",
    id: "",
    password: "",
    phone: "",
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    id: false,
    password: false,
    phone: false,
    email: false,
    address: false
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
  function handleSubmit(e) {
    e.preventDefault();
    for (let error in errors) {
      errors[error] = false;
    }
    for (let key in fieldValues) {
      if (fieldValues[key] === "") {
        setErrorKey(key);
      }
    }
    alert("Signed Up!!");
    navigate("/log_in");
  }
  return (
    <>
    <Container maxWidth="sm" style={{ paddingTop: "22vh" }}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2 style={{ display: "block", textAlign: "center" }}>Sign Up Form</h2>
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
          label="User Name"
          onChange={(e) => setInputValue("id", e.target.value)}
          required
          variant="outlined"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.id}
          error={errors.id}
        />
        <TextField
          label="Phone"
          onChange={(e) => setInputValue("password", e.target.value)}
          required
          variant="outlined"
          type="password"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.phone}
          error={errors.phone}
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
          label="ID"
          onChange={(e) => setInputValue("email", e.target.value)}
          required
          variant="outlined"
          type="id"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.email}
          error={errors.email}
        />
        <TextField
          label="Bank Account"
          onChange={(e) => setInputValue("address", e.target.value)}
          required
          variant="outlined"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.address}
          error={errors.address}
        />
       
        <Button variant="outlined" color="secondary" type="submit">
          Sign Up
        </Button>
      </form>
      <small>
        Need an account? <Link to="/log_in">Register here</Link>
      </small>
      </Container>
    </>
  );
}
