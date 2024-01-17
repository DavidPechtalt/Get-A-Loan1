import {
  Navigate,
  Outlet,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserName from "./UserNameCon";

export default function Admin() {
  const navigate = useNavigate();

  const [loan, setLoan] = useState({});

  return (
    <>
      {console.log(window.location.pathname)}
   
      <Outlet context={[loan, setLoan]} />
    </>
  );
}
