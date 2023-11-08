import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '.././App.css';

const EditContactDialog = ({ open, handleClose, contact, handleSave }) => {
  const [editedContact, setEditedContact] = useState(contact);

  useEffect(() => {
    setEditedContact(contact);
  }, [contact]);

  const handleFieldChange = (e, field) => {
    setEditedContact({ ...editedContact, [field]: e.target.value });
  };

  const handleSaveChanges = () => {
    handleSave(editedContact);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle className="dialog-title">Edit Contact</DialogTitle>
      <DialogContent className="dialog-content">
        <form style={{ margin: '8px 0', width: '500px' }}>
          <TextField
            fullWidth
            label="Display Name"
            variant="outlined"
            value={editedContact['Display Name']}
            onChange={(e) => handleFieldChange(e, 'Display Name')}
            className="dark-text-field"
            InputProps={{ style: { color: 'white' } }}
            style={{ margin: '8px 0' }}
          />
          <TextField
            fullWidth
            label="E-mail Address"
            variant="outlined"
            value={editedContact['E-mail Address']}
            onChange={(e) => handleFieldChange(e, 'E-mail Address')}
            className="dark-text-field"
            style={{ margin: '8px 0' }}
            InputProps={{ style: { color: 'white' } }}
          />
          <TextField
            fullWidth
            label="Home Phone"
            variant="outlined"
            value={editedContact['Home Phone']}
            onChange={(e) => handleFieldChange(e, 'Home Phone')}
            className="dark-text-field"
            style={{ margin: '8px 0' }}
            InputProps={{ style: { color: 'white' } }}
          />
          <TextField
            fullWidth
            label="Notes"
            variant="outlined"
            value={editedContact['Notes']}
            onChange={(e) => handleFieldChange(e, 'Notes')}
            className="dark-text-field"
            style={{ margin: '8px 0' }}
            InputProps={{ style: { color: 'white' } }}
          />
        </form>
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button onClick={handleClose} color="error" sx={{ border: '1px solid red' }}>
          Cancel
        </Button>
        <Button onClick={handleSaveChanges} color="primary" sx={{ border: '1px solid blue' }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditContactDialog;
