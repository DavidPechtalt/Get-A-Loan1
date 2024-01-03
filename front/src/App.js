import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LogIn from "./LogIn";
import User from "./User";
import Admin from "./Admin";
import NewLoan from "./NewLoan";
import NewLoanForm from "./components/pages/user/NewLoanForm";
import { useState } from "react";
import UserNameCon from "./UserNameCon";
// import UserTable from "./UserTable";
import UserName from "./UserNameCon";
import CashFlow from "./CashFlow";
import LoansList from "./LoansList";
import { Error } from "@mui/icons-material";
import NewLoanUser from "./NewLoanUser";
import UserId from "./components/UserId";
import LoansPage from "./components/pages/admin/LoansPage";
import LoanFullDetails from "./components/pages/admin/LoanFullDetails";
// import UserData from "./components/pages/user/UserLoans";
// import UserLoans from "./components/pages/user/UserLoans";

function App() {
  const [userName, setUserName] = useState(false);
  const [userId, setUserId] = useState();

  return (
    <UserNameCon.Provider value={[userName, setUserName]}>
      <UserId.Provider value={[userId, setUserId]}>
        <Router>
          <ButtonAppBar />

          <Routes>
            <Route path="log_in" element={<LogIn />} />

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
              
              <Route path="loans_list" element={<LoansPage />}/>
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
