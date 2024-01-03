import { Container, Box, CircularProgress } from "@mui/material";
import OpenProvider from "../../../contexts/OpenConfirmProvider";
import SelectedProvider from "../../../contexts/SelectedProvider";
import ConfirmMessage from "./ConfirmMessage";
import RejectMessage from "./Dialog";
import useFetch from "../../../hooks/useFetch";
import RequestsTable from "./RequestsTable";
export default function RequestsList() {
  const { data, isPending, error } = useFetch("admin/requests");

  return (
    <Container>
      <OpenProvider>
        <SelectedProvider>
          {isPending && <CircularProgress></CircularProgress>}
          {error && <h1>Error</h1>} {data && <RequestsTable dataArr={data} />}
          <ConfirmMessage />
          <RejectMessage />
        </SelectedProvider>
      </OpenProvider>
    </Container>
  );
}
