import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import { FormStyle } from './style';

function ContactForm(props) {
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
            {props.edit ? (
                <div>
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
                    <button>Adicione um contato</button>
                </div>
            ) : (
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Atualize seu contato"
                        variant="outlined"
                        placeholder="Edite seu contato"
                        type="text"
                        name="text"
                        value={input}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button>Atualize seu contato</button>
                </div>
            )}
        </FormStyle>
    );
}

export default ContactForm;
