import React, { useContext, useState } from "react";
import {
  TextField,
  FormControl,
  Button,
  CssBaseline,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UserName from "./UserNameCon";
import CircularIndeterminate from "./components/CircularIndeterminate.js.js";
import UserId from "./components/UserId.js";

const Login = () => {
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
            <h2 style={{ display: "block", textAlign: "center" }}>Login</h2>
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
          <small>
            Need an account? <Link to="/">Register here</Link>
          </small>
        </Container>
      </React.Fragment>
    </>
  );
};

export default Login;
