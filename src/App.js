import React from 'react';
import { ThemeProvider } from '@mui/material';

import { mainTheme } from './config/theme/main';
import { Router } from './routes';

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={mainTheme}>
                <Router></Router>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
