import React from 'react';
import { Grid, Typography } from '@mui/material';

export const Home = () => {
    return (
        <React.Fragment>
            <Grid
                container
                sdirection="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <Typography variant="h4">Lista Telefonica</Typography>
            </Grid>
        </React.Fragment>
    );
};
