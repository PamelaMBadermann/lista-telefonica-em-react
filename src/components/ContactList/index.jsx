import React, { useState } from 'react';
import Contact from '../../components/Contact';
import ContactForm from '../../components/ContactForm';

import { useDispatch, useSelector } from 'react-redux';

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

    const updateContact = (contactId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setContacts((prev) =>
            prev.map((item) => (item.id === contactId ? newValue : item))
        );
    };

    const removeContact = (id) => {
        const removeArr = [...contacts].filter((contact) => contact.id !== id);

        setContacts(removeArr);
    };

    const completeContact = (id) => {
        let updatedContacts = contacts.map((contact) => {
            if (contact.id === id) {
                contact.isComplete = !contact.isComplete;
            }
            return contact;
        });

        setContacts(updatedContacts);
    };

    return (
        <div>
            <ContactForm onSubmit={addContact}></ContactForm>
            <Contact
                contacts={contacts}
                completeContact={completeContact}
                removeContact={removeContact}
                updateContact={updateContact}
            />
        </div>
    );
}

export default ContactList;
