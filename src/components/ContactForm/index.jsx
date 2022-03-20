import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <Box>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        placeholder="Adicione um contato"
                        value={input}
                        onChange={handleChange}
                    />
                    <Button variant="contained">Adicione um contato</Button>
                </Grid>
            </form>
        </Box>
    );
}

export default ContactForm;
