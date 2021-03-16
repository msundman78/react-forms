import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function CreateActivity() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Activity
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Activity</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="gym" label="Gym Name" fullWidth />
          <TextField margin="dense" id="name" label="Activity Name" fullWidth />
          <TextField margin="dense" id="name" label="Description" multiline rows={4} fullWidth />
          <TextField margin="dense" id="date" label="Datum" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}