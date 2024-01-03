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
  const [userName, setUserName] = useContext(UserName);
  useEffect(() => {
    if (userName != "admin") {
      navigate("/log_in", { replace: true });
    }
  }, userName);

  return (
    <>
      {console.log(window.location.pathname)}
      {window.location.pathname == "/admin" && <Navigate to={"loans_list"} />}
      <Outlet context={[loan, setLoan]} />
    </>
  );
}
