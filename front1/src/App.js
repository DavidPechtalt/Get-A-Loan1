import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import LogIn from "./LogIn";
import User from "./User";
import Admin from "./Admin";
import NewLoan from "./NewLoan";
import NewLoanForm from "./components/pages/user/NewLoanForm";
import { useState, useEffect } from "react";
import instance from "./api/api";


import UserName from "./UserNameCon";
import CashFlow from "./CashFlow";
import { Error } from "@mui/icons-material";
import LoansPage from "./LoansPage";
import LoanFullDetails from "./components/pages/admin/LoanFullDetails";
import ConditionalRoute from "./components/ConditionalRouting";
import SignUp from "./SignUp";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = window.location.pathname
 
  useEffect(() => {
    async function checkSession() {
      try {
        const ans = await instance.get("users/login");
        console.log(ans);
        if (ans.data.loggedIn == true) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log(error);
        alert("error");
      }
    }
    checkSession();
  }, []);

  return (
    <Router>
      <ConditionalRoute condition={isLoggedIn } redirectTo={"/admin"}>
        <Routes>
          <Route path="log_in" element={<LogIn isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="sign_up" element={<SignUp />} />
        </Routes>
      </ConditionalRoute>
        
      <ConditionalRoute  condition={!isLoggedIn } redirectTo={"/log_in"}>
        <ButtonAppBar />

        <Routes>
          <Route
            path="users/:user_name"
            element={
              UserName != false ? (
                <User />
              ) : (
                <Navigate to="/log_in" replace={true} />
              )
            }
          >
            {/* <Route index element={<UserLoans />} /> */}
            <Route path="new_loan" element={<NewLoanForm />} />
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="loans_list" element={<LoansPage />} />
            <Route path="loan/:loan_id" element={<LoanFullDetails />} />
            <Route path="new_loan" element={<NewLoan />} />
            <Route path="cash_flow" element={<CashFlow />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ConditionalRoute>
    </Router>
  );
}

export default App;
