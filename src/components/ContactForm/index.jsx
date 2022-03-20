import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../store/modules/contacts/actions';
import { FormStyle } from './style';

function ContactForm(props) {
    const contacts = useSelector((state) => state.contact);
    const dispatch = useDispatch();

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput('');
    };

    return (
        <FormStyle onSubmit={handleSubmit}>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
            >
                <TextField
                    id="outlined-basic"
                    label="Adicione um contato"
                    variant="outlined"
                    placeholder="Edite seu contato"
                    type="text"
                    name="text"
                    value={input}
                    onChange={handleChange}
                    ref={inputRef}
                />
                <Button
                    variant="contained"
                    onClick={() => {
                        const toAddContact = { ...contacts[0] };
                        toAddContact.text = input;

                        dispatch(addContact(toAddContact));
                    }}
                >
                    Adicione um contato
                </Button>
            </Grid>
        </FormStyle>
    );
}

export default ContactForm;
