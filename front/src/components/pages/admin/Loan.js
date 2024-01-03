import React, { createContext, useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useLoanContext, useLoanUpdate } from "./LoanContext";

export default function Loan({ loanData}) {
 const navigate = useNavigate()
 const [loan, setLoan] = useOutletContext()
 
  // Define the event handler function
 function handleClick(){
  setLoan(loanData)
  navigate(`/admin/loan/:${loanData.loanId}`)
 }

  // Register and unregister the event listener in useEffect
  useEffect(() => {
    // Get the DOM element of the component
    const element = document.getElementById("loan");
    // Add the event listener to the element
    element.addEventListener("click", handleClick);
    // Return a cleanup function to remove the event listener
    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []); // Pass an empty dependency array to run only once

  return (
    <Box
      id="loan" // Add an id attribute to the component
      sx={{
        border: "solid 0.5px gray",
        borderRadius: "3px",
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "18px",
        cursor: 'pointer'
       
      }}
    >
      <Box
        sx={{
          width: "30%",
          backgroundColor: "lightgray",
          borderRadius: " 3px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccountCircleIcon sx={{ fontSize: "40px" }} color="info" />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" color="navy">
            {loanData.userId}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "30%",
          backgroundColor: "lightgray",
          borderRadius: " 3px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MonetizationOnIcon
          sx={{ fontSize: "40px" }}
          color="info"
          fontSize="large"
        />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography variant="h4" color="navy">
            {loanData.amount}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "30%",
          backgroundColor: "lightgray",
          borderRadius: " 3px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CalendarMonthIcon
          sx={{ fontSize: "40px" }}
          color="info"
          fontSize="large"
        />
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" color="navy">
            {loanData.date}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
