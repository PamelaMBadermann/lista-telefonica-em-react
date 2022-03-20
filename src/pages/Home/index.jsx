import React from 'react';
import { Grid, Typography } from '@mui/material';
import ContactList from '../../components/ContactList';

import { useSelector } from 'react-redux';

export const Home = () => {
    const contatos = useSelector((state) => state.contact);

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
            >
                <Typography variant="h4">Lista Telefonica</Typography>
                <Typography variant="p">
                    Você possui {contatos.length} contatos.
                </Typography>
                <ContactList />
            </Grid>
        </React.Fragment>
    );
};
