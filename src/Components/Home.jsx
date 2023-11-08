import React, { useState, useEffect } from 'react';
import contactsData from '.././contacts_file.json';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ContactDetails from './ContactDetails';
import Sidebar from './Sidebar';
import gravatar from 'gravatar';
import '.././App.css';


const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    
    const getGravatarUrl = (email) => {
        const options = {
            size: 40,
            default: 'identicon',
        };
        return gravatar.url(email, options);
    };
    useEffect(() => {
        setContacts(contactsData);
    }, []);

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredContacts = contacts.filter((contact) => {
        const displayName = contact['Display Name'] || '';
        const homePhone = contact['Home Phone'] || '';
        const email = contact['E-mail Address'] || '';
        const query = searchQuery.toLowerCase();
        return displayName.toLowerCase().includes(query) || homePhone.toLowerCase().includes(query) || email.toLowerCase().includes(query);
    });

    return (
        <div className="home-container">
            <div className="sidebar">
                <Sidebar
                    searchQuery={searchQuery}
                    handleSearchChange={handleSearchChange}
                    filteredContacts={filteredContacts}
                    handleContactClick={handleContactClick}
                    selectedContact={selectedContact}
                />
            </div>
            <div className="contact-details">
                <Typography variant="h2" className="contacts-heading" component="div">
                    Contact Details
                </Typography>
                <Divider style={{ backgroundColor: 'gray', height: '2px', marginBottom: '10px' }} />
                {selectedContact ? (
                    <ContactDetails selectedContact={selectedContact} avatarUrl={getGravatarUrl(selectedContact['E-mail Address'])} />
                ) : (
                    <Typography variant="h5">Select a contact to view details.</Typography>
                )}
            </div>
        </div>
    );
};

export default Home;
