import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormStyle } from './style';

function ContactForm(props) {
    const [input, setInput] = useState('');

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
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                placeholder="Adicione um contato"
                type="text"
                value={input}
                onChange={handleChange}
            />
            <Button variant="contained">Adicione um contato</Button>
        </FormStyle>
    );
}

export default ContactForm;
