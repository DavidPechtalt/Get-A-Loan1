import { Container } from "@mui/material";
import SearchFields from "./components/SearchFields";
import LoansTable from "./components/LoansTable";
import { useState } from "react";
export default function LoansList() {
    const [loansList, setLoansList] = useState([]);
  return ( 
    <>
      <Container fluid sx={{ alignContent: "center", marginTop: "10vh" }}>
        
        <SearchFields setLoansList={setLoansList}/>
      </Container>
      <LoansTable rows={loansList} />
    </>
  );
}
