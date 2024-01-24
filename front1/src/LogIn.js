import React, { useEffect, useState } from "react";
import {
  TextField,
 
  Button,
  CssBaseline,
  Container,
} from "@mui/material";
import instance from "./api/api.js";
// import { Link } from "react-router-dom";
// import UserName from "./UserNameCon";
import CircularIndeterminate from "./components/CircularIndeterminate.js.js";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import UserId from "./components/UserId.js";

const Login = ({ setIsLoggedIn}) => {
  const [firstName, setFirstName] = useState("");
  const [FirstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [idError, setIdError] = useState(false);
  const navigate = useNavigate()
  const [passwordError, setPasswordError] = useState(false);
  // const [userName, setUserName] = useContext(UserName);
  const [proccessing, setProccessing] = useState(false);
  const [userError, setUserError] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
Axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProccessing(true);
    setUserError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setPasswordError(false);

    if (firstName == "") {
      setFirstNameError(true);
    }

    if (lastName == "") {
      setLastNameError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }
    try {
      const ans = await instance.post("users/login", {
        firstName: firstName,
        lastName: lastName,
        password: password,
        id: id,
      });
      if (ans.data === "You are not in the data") {
        alert("you are not in our list");
        return;
      }
      console.log(ans);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      alert("error");
    }

    useEffect(() => {
      async function checkSession(){
        try {
          instance.get('login')
        } catch (error) {
          
        }
      }
    }, [])
    
  };
 
 
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" style={{ paddingTop: "22vh" }}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2 style={{ display: "block", textAlign: "center" }}>Login</h2>
            <TextField
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={firstName}
              error={FirstNameError}
            />
            <TextField
              label="LastName"
              onChange={(e) => setLastName(e.target.value)}
              required
              variant="outlined"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={lastName}
              error={lastNameError}
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
                Login
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
          <small>Need an account?</small>
          <button onClick={()=> navigate('/sign_up')}>Sign Up😊</button>
        </Container>
      </React.Fragment>
    </>
  );
};

export default Login;
