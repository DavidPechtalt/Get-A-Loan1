import { AppBar, Box, MenuItem, Select, InputLabel } from "@mui/material";
import React, {  useState } from "react";
import Loan from "./Loan";

export default function LoansList({ loansArr }) {
 

  const [orderBy, setOrderBy] = useState("date");
  return (
    <Box sx={{ border: "solid 0.7px" }}>
      <AppBar
        sx={{
          height: "82px",
          width: "100%",
          position: "relative",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "center",
          padding: "12px",
        }}
        color="info"
      >
        <Select
          sx={{ width: "27%", backgroundColor: "lightgray" }}
          value={orderBy}
          defaultValue={orderBy}
          label="orderBy"
          onChange={(e) => setOrderBy(e.target.value)}
        >
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"amount"}>Amount</MenuItem>
        </Select>
      </AppBar>
      <Box
        sx={{
          // width: "100%",
          height: "fit-content",
          maxHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignContent: "space-between",
          columnGap: "14px",

          paddingX: "8px",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        {loansArr.map((loan) => {
          return (
            <><Loan
              
              loanData = {loan}
             
            /></>
            
          );
        })}
      </Box>
    </Box>
  );
}
