import React from 'react';
import { Grid, Typography } from '@mui/material';
import ContactList from '../../components/ContactList';

export const Home = () => {
    return (
        <React.Fragment>
            <Grid
                container
                sdirection="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <ContactList>
                    <Typography variant="h4">Lista Telefonica</Typography>
                </ContactList>
            </Grid>
        </React.Fragment>
    );
};
