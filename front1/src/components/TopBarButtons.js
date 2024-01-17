import { useContext } from "react";
import UserName from "../UserNameCon";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function TopBarButtons() {
 
  // if (userName === "admin") {
  //   return (
  //     <>
  //       {" "}
  //       <Button color="inherit" onClick={() => navigate("admin/new_loan")}>
  //         New Loan
  //       </Button>
  //       <Button color="inherit" onClick={() => navigate("admin/cash_flow")}>
  //         Cash Flow
  //       </Button>
  //       <Button color="inherit" onClick={()=> navigate('/admin/loans_list')}>Loans List</Button>
  //       <Button color="inherit" onClick={()=> alert('hello')}>
  //         Log Out
  //       </Button>
  //     </>
  //   );
  // } else if (userName != null) {
    return (
      <>
        <Button
          color="inherit"
          onClick={() => {
alert('jj')          }}
        >
          log-out
        </Button>
        <Button color="inherit">userName</Button>
        <Button color="inherit" onClick={()=>alert('Fuck')}>new_loan</Button>
      </>
    );
  }
// }
