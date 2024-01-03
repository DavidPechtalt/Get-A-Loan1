import React, { useMemo } from "react";
import { useTable } from "react-table";
import "../styles/requestsTable.css";
export default function RequestsTable({ dataArr }) {
  const data = useMemo(() => dataArr, [dataArr]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "LoanID",
        accessor: "loanId",
      },
      {
        Header: "Number Of Payments",
        accessor: "numOfPayments",
      },
      {
        Header: "Requested At",
        accessor: "givenAt",
      },
      {
        Header: "Fixed Rate",
        accessor: "fixedRate",
      },
      {
        Header: "Is Prime +",
        accessor: "prime",
      },
      {
        Header: "Plus Rate",
        accessor: "plusRate",
      },
      {
        Header: "Current Rate",
        accessor: "currentRate",
      },
      {
        Header: "Current Balance",
        accessor: "currentBalance",
      },
      {
        Header: "Payments Payed Already",
        accessor: "paidNum",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  //change
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              onClick={() => console.log(row.original.loanId)}
            >
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
