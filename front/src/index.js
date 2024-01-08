import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import UserData from "./components/pages/user/UserLoans";
import SearchForm from "./components/pages/admin/SearchForm";
import { Container } from "@mui/material";
import Loan from "./components/pages/admin/Loan";
import LoansList from "./components/pages/admin/LoansList";
import LoansPage from "./components/pages/admin/LoansPage";
import NewLoanForm from "./components/pages/user/NewLoanForm";
import RequestsList from "./components/pages/request-list/RequestsList";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <App/>
);