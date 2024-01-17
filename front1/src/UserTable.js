import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.loanId}
        </TableCell>
     
        <TableCell align="right">{row.paymentBalance}</TableCell>
        <TableCell align="right">{row.nextPaymentSum}</TableCell>
        <TableCell align="right">{row.nextPaymentDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Additional Loan Details;
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Given At</TableCell>
                    <TableCell>Original Amount</TableCell>
                    <TableCell align="right">
                      Current Interest Percentage
                    </TableCell>
                    <TableCell align="right">type Of Interest</TableCell>
                    <TableCell align="right">Index Type</TableCell>
                    <TableCell>Last Payment Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.additionalDetails.map((additionalDetails) => (
                    <TableRow key={row.loanId}>
                      <TableCell align="left">
                        {additionalDetails.givenAt}
                      </TableCell>
                      <TableCell align="left" scope="row">
                        {additionalDetails.originalAmount}
                      </TableCell>
                      <TableCell align="right">
                        {additionalDetails.currentInterestPercent}
                      </TableCell>
                      <TableCell align="right">
                        {additionalDetails.typeOfinterest}
                      </TableCell>
                      <TableCell align="right">
                        {additionalDetails.indexType}
                      </TableCell>
                      <TableCell>{additionalDetails.lastPaymentDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function UserTable({rows}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Loan ID</TableCell>
            <TableCell align="right">Payment Balance</TableCell>
            <TableCell align="right">Next Payment Sum</TableCell>
            <TableCell align="right">Next Payment Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
