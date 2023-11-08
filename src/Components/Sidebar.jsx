import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import gravatar from 'gravatar';

const Sidebar = ({ searchQuery, handleSearchChange, filteredContacts, handleContactClick, selectedContact }) => {
    
    const getGravatarUrl = (email) => {
        const options = {
            size: 40, 
            default: 'identicon',
        };
        return gravatar.url(email, options);
    };

    return (
        <>
            <Typography variant="h3" className="contacts-heading">
                Contacts
            </Typography>
            <Divider style={{ backgroundColor: 'gray', height: '2px', marginBottom: '10px' }} />
            <TextField
                variant="outlined"
                label="Search contacts"
                value={searchQuery}
                onChange={handleSearchChange}
                className="dark-text-field"
                InputProps={{ style: { color: 'white' } }}
            />
            <ul style={{ maxHeight: '100%', overflowY: 'auto', scrollbarWidth: 'thin' }} id="style-2">
                {filteredContacts.map((contact, index) => (
                    <li
                        key={index}
                        onClick={() => handleContactClick(contact)}
                        className={selectedContact === contact ? 'active' : ''}
                    >
                        <div className="contact-info">
                            <div className="contact-name">{contact['Display Name']}</div>
                            <div className="contact-avatar">
                                <img
                                    src={getGravatarUrl(contact['E-mail Address'])}
                                    alt={`${contact['Display Name']}'s Avatar`}
                                    className="avatar"
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Sidebar;
