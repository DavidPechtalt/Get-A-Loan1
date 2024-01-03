import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useRejectOpen } from '../../../contexts/OpenConfirmProvider';

export default function RejectMessage() {
  const [open, setOpen] = useRejectOpen()

 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure You Want To Reject The Loan?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Notice that this action is dangarous to you
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Reject</Button>
          <Button onClick={handleClose} autoFocus>
            Do Not Reject
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
