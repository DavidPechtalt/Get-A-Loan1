import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


const columns = [
  { id: "actionType", label: "action type", minWidth: 170 },

  {
    id: "plusMinus",
    label: "Plus / Minus",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "sum",
    label: "Sum",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toFixed(2),
  },
];

function createData(actionType, plusMinus, sum, date) {
  return { actionType, plusMinus, sum, date };
}

const rows = [createData("Money Payment", "Plus", 1324, "01/02/2000")];

export default function CashFlow() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container size="sm">
        <h1> Cash Flow !</h1>
      {" "}
      <Paper sx={{ width: "100%", overflow: "hidden" , marginTop: "16vh"}}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
