import {
  Card,
  Typography,
  Box,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { useConfirmOpen, useRejectOpen } from "../contexts/OpenConfirmProvider";
import { useSelected } from "../contexts/SelectedProvider";

export default function RequestCard({ loanData }) {
  const [openConfirm, setOpenConfirm] = useConfirmOpen();
  const [openReject, setOpenReject] = useRejectOpen();
  const [selected, setSelected] = useSelected();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
      <Card variant="elevation">
        <CardContent>
          <Box
            sx={{
              display: "flex",
              //   alignContent: "space-between",
              //   justifyContent: 'space-around',
            }}
          >
            <Typography variant="h5" sx={{ width: "50%" }}>
              Client Name:{" "}
            </Typography>
            {
              <Typography
                sx={{ display: "inline", width: "50%", textAlign: "center" }}
                variant="h5"
                color="text.secondary"
              >
                {loanData.clientName}
              </Typography>
            }
          </Box>

          <Box
            sx={{
              display: "flex",
              //   alignContent: "space-between",
              //   justifyContent: 'space-around',
            }}
          >
            <Typography variant="h5" sx={{ width: "50%" }}>
              Amount:{" "}
            </Typography>
            {
              <Typography
                sx={{ display: "inline", width: "50%", textAlign: "center" }}
                variant="h5"
                color="text.secondary"
              >
                {loanData.amount}
              </Typography>
            }
          </Box>

          <Box
            sx={{
              display: "flex",
              //   alignContent: "space-between",
              //   justifyContent: 'space-around',
            }}
          >
            <Typography variant="h5" sx={{ width: "50%" }}>
              Payments{" "}
            </Typography>
            {
              <Typography
                sx={{ display: "inline", width: "50%", textAlign: "center" }}
                variant="h5"
                color="text.secondary"
              >
                {loanData.payments}
              </Typography>
            }
          </Box>
          <Box
            sx={{
              display: "flex",
              //   alignContent: "space-between",
              //   justifyContent: 'space-around',
            }}
          >
            <Typography variant="h5" sx={{ width: "50%" }}>
              Interest:{" "}
            </Typography>
            {
              <Typography
                sx={{ display: "inline", width: "50%", textAlign: "center" }}
                variant="h5"
                color="text.secondary"
              >
                {loanData.interest}
              </Typography>
            }
          </Box>
          <Box
            sx={{
              display: "flex",
              //   alignContent: "space-between",
              //   justifyContent: 'space-around',
            }}
          >
            <Typography variant="h5" sx={{ width: "50%" }}>
              Date:{" "}
            </Typography>
            {
              <Typography
                sx={{ display: "inline", width: "50%", textAlign: "center" }}
                variant="h5"
                color="text.secondary"
              >
                {loanData.clientName}
              </Typography>
            }
          </Box>

          <CardActions
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                setSelected(loanData.loanId);
                setOpenReject(true);
              }}
            >
              Reject
            </Button>
            <Button
              color="success"
              variant="outlined"
              onClick={() => {
                setSelected(loanData.loanId);
                setOpenConfirm(true);
              }}
            >
              Confirm
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}
