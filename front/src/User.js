import { Navigate, Outlet, useNavigate } from "react-router-dom";

// import UserTable from "./UserTable";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import UserName from "./UserNameCon";

export default function User() {
  const navigate = useNavigate();

  const [userName, setUserName] = useContext(UserName);
  useEffect(() => {
    if (!userName) {
      navigate("/log_in", { replace: true });
    }
  }, userName);
  return (
    <>
    
      <Container>
        <Box>
          <Paper elevation={3} sx={{ height: "12vh", marginY: "3vh" }}>
            {" "}
            <Typography>
              <h1
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Hello {userName}{" "}
              </h1>{" "}
            </Typography>
          </Paper>
        </Box>
        
        <Outlet />
      </Container>
    </>
  );
}
