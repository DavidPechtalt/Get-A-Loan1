import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useConfirmOpen, useOnClickOpen } from '../../../contexts/OpenConfirmProvider';

export default function OnClickMessage() {
  const [open, setOpen] = useOnClickOpen()
    
  const handleClickOpen = () => {
    setOpen(true);
  };

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
          {"Do You Want To accept the request? "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please Choose if accept or reject.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Accept</Button>
          <Button onClick={handleClose} autoFocus>
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
