import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditContactDialog from './EditContactDialog';
import '.././App.css';

const ContactDetails = ({ selectedContact, avatarUrl }) => {
  const fullName = `${selectedContact['First Name']} ${selectedContact['Last Name']}`;
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(selectedContact);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setEditedContact(selectedContact);
  }, [selectedContact]);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSave = (updatedContact) => {
    setEditedContact(updatedContact);
    toggleEditing();
    toggleDialog();
  };

  return (
    <Card variant="outlined" sx={{ textAlign: 'left', background: 'grey' }} className="card">
      <CardContent>
        {selectedContact ? (
          <div>
            <div className="header">
              <Typography variant="h3">{editedContact['Display Name']}</Typography>
              <img
                src={avatarUrl}
                alt={`${editedContact['Display Name']}'s Avatar`}
                className="avatar-contact-detail"
              />
            </div>
            <div className="edit-container">
              <Button variant="outlined" color="inherit" onClick={toggleDialog} className="edit-button">
                Edit
              </Button>
            </div>
            <div className="detail">
              <Typography variant="h5">Full Name: {fullName}</Typography>
            </div>
            <div className="detail">
              <Typography variant="h5">E-mail Address: {editedContact['E-mail Address']}</Typography>
            </div>
            <div className="detail">
              <Typography variant="h5">Home Phone: {editedContact['Home Phone']}</Typography>
            </div>
            <div className="detail">
              <Typography variant="h5">Notes: {editedContact['Notes']}</Typography>
            </div>
            <div className="detail">
              <Typography variant="h5">E-mail 2 Address: {editedContact['E-mail 2 Address']}</Typography>
            </div>
          </div>
        ) : (
          <Typography variant="h5">Select a contact to view details.</Typography>
        )}
      </CardContent>

      <EditContactDialog
        open={isDialogOpen}
        handleClose={toggleDialog}
        contact={editedContact}
        handleSave={handleSave}
      />
    </Card>
  );
};

export default ContactDetails;
