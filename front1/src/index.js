import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// import UserData from "./components/pages/user/UserLoans";
// import SearchForm from "./components/pages/admin/SearchForm";
// import { Container } from "@mui/material";
// import Loan from "./components/pages/admin/Loan";
// import LoansList from "./components/pages/admin/LoansList";
// import LoansPage from "./components/pages/admin/LoansPage";
// import NewLoanForm from "./components/pages/user/NewLoanForm";
import Login from "./LogIn";

// const arr = [
//   { name: "david", date: "19/10/90", amount: 6000, loanId: "674836" },
//   { name: "david", date: "19/10/90", amount: 6000, loanId: "674837" },
//   { name: "david", date: "19/10/90", amount: 6000, loanId: "674838" },
// ];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
   
    <App/>
  </div>
);
