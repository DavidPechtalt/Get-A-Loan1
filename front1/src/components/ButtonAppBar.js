import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import UserNameCon from "../UserNameCon"
import { useNavigate } from "react-router-dom";
import TopBarButtons from "./TopBarButtons";
export default function ButtonAppBar() {
  
  const navigate = useNavigate();
  return (
  
    <Box sx={{ flexGrow: 1 }}>
 
      <AppBar position="static" width='100%'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Get A Loan
          </Typography>
         
         <TopBarButtons/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
