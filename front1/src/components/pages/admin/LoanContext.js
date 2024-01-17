import { createContext, useContext,useRef, useEffect, useState } from "react";

const LoanContext = createContext();
const UpdateLoanContext = createContext();
export function useLoanContext() {
  return useContext(LoanContext);
}
export function useLoanUpdate() {
  return useContext(UpdateLoanContext);
}
export function LoanContextProvider({ children }) {
 const loan = useRef({});
 function setLoan(value){
    console.log(value);
    loan.current = value
    console.log(loan.current);
 }
 

  return (
    <LoanContext.Provider value={loan.current}>
      <UpdateLoanContext.Provider value={setLoan}>
        {children}
      </UpdateLoanContext.Provider>
    </LoanContext.Provider>
  );
}
