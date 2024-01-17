import React, { useContext, useState } from "react";
import SearchForm from "./components/pages/admin/SearchForm";
import LoansList from "./components/pages/admin/LoansList";
import axios from "axios";
import { Outlet } from "react-router-dom";
import  { LoanContextProvider } from "./components/pages/admin/LoanContext";

export default function LoansPage() {
  const [loansArr, setLoansArr] = useState();
  const [loading, setLoading] = useState(false);
  const [loan, setLoan] = useState({})
  function setData(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      setLoansArr(arr);
    }
  }

  async function submitFunction(obj) {
    setLoading(true);
    const { data } = await axios.post("http://localhost:4000/admin/loans", obj);
    setData(data);
    setLoading(false);
  }
  return (
    <div>
     
        {" "}
        <SearchForm loading={loading} submitFunction={submitFunction} />
        {loansArr && <LoansList loansArr={loansArr} />}
        <Outlet context={[loan, setLoan]}/>
     
    </div>
  );
}
