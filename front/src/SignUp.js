// import { useState } from "react";
// import { TextField, Button, Link } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// export default function SignUp() {
//   const [fieldValues, setFieldValues] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     phone: "",
//     password: "",
//     id: "",
//     lastName: "",
//     bankAccount: "",
//     files: "",
//   });
//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     phone: "",
//     password: "",
//     id: "",
//     bankAccount: "",
//     files: "",
//   });
//   const navigate = useNavigate();
//   function setErrorKey(key) {
//     const currentValues = errors;
//     currentValues[key] = true;
//     setErrors(currentValues);
//   }
//   function setInputValue(key, value) {
//     console.log(key, value);
//     const currentValues = { ...fieldValues };
//     currentValues[key] = value;
//     setFieldValues(currentValues);
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     for (let error in errors) {
//       errors[error] = false;
//     }
//     for (let key in fieldValues) {
//       if (fieldValues[key] === "") {
//         setErrorKey(key);
//       }
//     }
//     alert("Signed Up!!");
//     navigate("/log_in");
//   }
//   return (
//     <>
//       <form autoComplete="off" onSubmit={handleSubmit}>
//         <h2 style={{ display: "block", textAlign: "center" }}>Sign Up Form</h2>
//         <TextField
//           label="First Name"
//           onChange={(e) => setInputValue("firstName", e.target.value)}
//           required
//           variant="outlined"
//           type="text"
//           sx={{ mb: 3 }}
//           fullWidth
//           value={fieldValues.firstName}
//           error={errors.firstName}
//         />
//         <TextField
//           label="Last Name"
//           onChange={(e) => setInputValue("lastName", e.target.value)}
//           required
//           variant="outlined"
//           type="text"
//           sx={{ mb: 3 }}
//           fullWidth
//           value={fieldValues.lastName}
//           error={errors.lastName}
//         />
//         <TextField
//           label="User Name"
//           onChange={(e) => setInputValue("userName", e.target.value)}
//           required
//           variant="outlined"
//           type="text"
//           sx={{ mb: 3 }}
//           fullWidth
//           value={fieldValues.userName}
//           error={errors.userName}
//         />
//         <TextField
//           label="Phone"
//           onChange={(e) => setInputValue("phone", e.target.value)}
//           required
//           variant="outlined"
//           type="phone"
//           sx={{ mb: 3 }}
//           fullWidth
//           value={fieldValues.phone}
//           error={errors.phone}
//         />
//         <TextField
//           label="Password"
//           onChange={(e) => setInputValue("password", e.target.value)}
//           required
//           variant="outlined"
//           type="password"
//           sx={{ mb: 3 }}
//           fullWidth
//           value={fieldValues.password}
//           error={errors.password}
//         />
//         <TextField
//           label="ID"
//           onChange={(e) => setInputValue("id", e.target.value)}
//           required
//           variant="outlined"
//           type="id"
//           sx={{ mb: 3 }}
//           fullWidth
//           value={fieldValues.id}
//           error={errors.id}
//         />
//         <TextField
//           label="Bank Account"
//           onChange={(e) => setInputValue("bankAccount", e.target.value)}
//           required
//           variant="outlined"
//           type="text"
//           sx={{ mb: 3 }}
//           fullWidth
//           value={fieldValues.bankAccount}
//           error={errors.bankAccount}
//         />
//         <TextField
//           label="Files"
//           onChange={(e) => setInputValue("files", e.target.value)}
//           required
//           variant="outlined"
//           type="file"
//           sx={{ mb: 3 }}
//           fullWidth
//           value={fieldValues.files}
//           error={errors.files}
//         />
//         <Button variant="outlined" color="secondary" type="submit">
//           Sign Up
//         </Button>
//       </form>
//       <small>
//         Need an account? <Link to="/">Register here</Link>
//       </small>
//     </>
//   );
// }
import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  CssBaseline,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UserName from "./UserNameCon";
import CircularIndeterminate from "./components/CircularIndeterminate.js.js";
import UserId from "./components/UserId.js";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useContext(UserId);
  const [idError, setIdError] = useState(false)
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userName, setUserName] = useContext(UserName);
  const [proccessing, setProccessing] = useState(false);
  const [userError, setUserError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setProccessing(true);
    setUserError(false);
    setNameError(false);
    setPasswordError(false);

    if (name == "") {
      setNameError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (name && password) {
      console.log(name, password);
    }
    setTimeout(() => {
      setProccessing(false);
      if(name === 'd'&& password === '0'&& id === '0'){
        setUserName("admin")
        navigate('/admin')
        return
      }
      setUserName(name);
      navigate(`/users/${name}`);
    }, 500);
  };

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" style={{ paddingTop: "22vh" }}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2 style={{ display: "block", textAlign: "center" }}>Sign Up</h2>
            <TextField
              label="User Name"
              onChange={(e) => setName(e.target.value)}
              required
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={name}
              error={nameError}
            />
            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              type="password"
              value={password}
              error={passwordError}
              fullWidth
              sx={{ mb: 3 }}
            />
             <TextField
              label="id"
              onChange={(e) => setId(e.target.value)}
              required
              variant="outlined"
              type="password"
              value={id}
              error={idError}
              fullWidth
              sx={{ mb: 3 }}
            />
            {!proccessing ? (
              <Button variant="outlined" color="secondary" type="submit">
                Sign Up
              </Button>
            ) : (
              <CircularIndeterminate />
            )}
            {userError && (
              <h3 style={{ color: "red" }}>
                One of the Details you provided is uncorrect
              </h3>
            )}
          </form>
          <small>
            have an account? <Link to="/log_in">log in</Link>
          </small>
        </Container>
      </React.Fragment>
    </>
  );
};

export default SignUp;
