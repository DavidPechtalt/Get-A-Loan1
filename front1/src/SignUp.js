import { useState } from "react";
import { TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    password: "",
    id: "",
    lastName: "",
    bankAccount: "",
    files: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    password: "",
    id: "",
    bankAccount: "",
    files: "",
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
          onChange={(e) => setInputValue("userName", e.target.value)}
          required
          variant="outlined"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.userName}
          error={errors.userName}
        />
        <TextField
          label="Phone"
          onChange={(e) => setInputValue("phone", e.target.value)}
          required
          variant="outlined"
          type="phone"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.phone}
          error={errors.phone}
        />
        <TextField
          label="Password"
          onChange={(e) => setInputValue("password", e.target.value)}
          required
          variant="outlined"
          type="password"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.password}
          error={errors.password}
        />
        <TextField
          label="ID"
          onChange={(e) => setInputValue("id", e.target.value)}
          required
          variant="outlined"
          type="id"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.id}
          error={errors.id}
        />
        <TextField
          label="Bank Account"
          onChange={(e) => setInputValue("bankAccount", e.target.value)}
          required
          variant="outlined"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.bankAccount}
          error={errors.bankAccount}
        />
        <TextField
          label="Files"
          onChange={(e) => setInputValue("files", e.target.value)}
          required
          variant="outlined"
          type="file"
          sx={{ mb: 3 }}
          fullWidth
          value={fieldValues.files}
          error={errors.files}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Sign Up
        </Button>
      </form>
      <small>
        Need an account? <Link to="/">Register here</Link>
      </small>
    </>
  );
}
