import React, { useState } from 'react';
import ContactForm from '../ContactForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Contact({ contacts, completeContact }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    return contacts.map((contact, index) => (
        <div
            className={
                contact.isComplete ? 'contact-row complete' : 'contact-row'
            }
            key={index}
        >
            <div key={contact.id} onClick={() => completeContact(contact.id)}>
                {contact.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>
    ));
}

export default Contact;
