import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRejectOpen } from "../../../contexts/OpenConfirmProvider";
import useFetch from "../../../hooks/useFetch";
import useFetchPut from "../../../hooks/useFetchPut";

export default function RejectMessage() {
  const [open, setOpen] = useRejectOpen();
  const {success, isPending, error} = useFetchPut()
  const handleClose = () => {
    setOpen('');
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Loan Rejected"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You successfuly rejected this loan
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
