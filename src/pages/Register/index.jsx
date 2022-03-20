import React from 'react';
import { Grid, Typography } from '@mui/material';
import ContactForm from '../../components/ContactForm';

export const Register = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
            >
                <Typography variant="h4">Adicionar Contato</Typography>
            </Grid>
        </React.Fragment>
    );
};
