import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import User from "./User";
import Admin from "./Admin";
import NewLoan from "./NewLoan";
import NewLoanForm from "./components/pages/user/NewLoanForm";
import { useState } from "react";
import UserNameCon from "./UserNameCon";
import UserName from "./UserNameCon";
import CashFlow from "./CashFlow";
import { Error } from "@mui/icons-material";
import UserId from "./components/UserId";
import LoansPage from "./components/pages/admin/LoansPage";
import LoanFullDetails from "./components/pages/admin/LoanFullDetails";

function App() {
  const [userName, setUserName] = useState(false);
  const [userId, setUserId] = useState();

  return (
    <UserNameCon.Provider value={[userName, setUserName]}>
      <UserId.Provider value={[userId, setUserId]}>
        <Router>
          <ButtonAppBar />

          <Routes>
            <Route path="/" element={<Navigate to="log_in" replace={true} />} />
            <Route path="log_in" element={<LogIn />} />
            <Route path="sign_up" element={<SignUp />} />
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
             
              <Route path="new_loan" element={<NewLoanForm />} />
              <Route path="all_loans" element={<h1>all_loans</h1>} />
            </Route>
            <Route path="admin" element={<Admin />}>
              <Route path="loans_list" element={<LoansPage />} />
              <Route path="loan/:loan_id" element={<LoanFullDetails />} />
              <Route path="new_loan" element={<NewLoan />} />
              <Route path="cash_flow" element={<CashFlow />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </UserId.Provider>
    </UserNameCon.Provider>
  );
}

export default App;
