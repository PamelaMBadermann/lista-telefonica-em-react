import React from 'react';
import { Grid, Typography } from '@mui/material';

export const Register = () => {
    return (
        <React.Fragment>
            <Grid
                container
                sdirection="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <Typography variant="h4">Adicionar Contato</Typography>
            </Grid>
        </React.Fragment>
    );
};
