import React, { useState } from 'react';
import Contact from '../../components/Contact';
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
            <h1>Adicione um contato!</h1>
            <ContactForm onSubmit={addContact}></ContactForm>
            <Contact contacts={contacts} completeContact={completeContact} />
        </div>
    );
}

export default ContactList;
