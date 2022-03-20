import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import ContactForm from '../../components/ContactForm';

function ContactList() {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        if (!contact.text || /^\s*$/.test(contact.text)) {
            return;
        }

        const newContacts = [contact, ...contacts];

        setContacts(newContacts);
        console.log(...contacts);
    };

    return (
        <div>
            <ContactForm onSubmit={addContact}></ContactForm>
        </div>
    );
}

export default ContactList;
