import { Container, Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import ConfirmMessage from "./ConfirmMessage";
import OpenProvider, { useConfirmOpen } from "../contexts/OpenConfirmProvider";
import RejectMessage from "./RejectMessage";
import SelectedProvider from "../contexts/SelectedProvider";
import useFetch from "../hooks/useFetch";
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
