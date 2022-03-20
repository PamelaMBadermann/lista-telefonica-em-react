import React, { useState } from 'react';
import ContactForm from '../ContactForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Contact({ contacts, completeContact, updateContact, removeContact }) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = (value) => {
        updateContact(edit.id, value);

        setEdit({
            id: null,
            value: '',
        });
    };

    if (edit.id) {
        return <ContactForm edit={edit} onSubmit={submitUpdate} />;
    }

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
                <RiCloseCircleLine
                    onClick={() => removeContact(contact.id)}
                    className="delete-icon"
                />
                <TiEdit
                    onClick={() =>
                        setEdit({ id: contact.id, value: contact.text })
                    }
                    className="edit-icon"
                />
            </div>
        </div>
    ));
}

export default Contact;
