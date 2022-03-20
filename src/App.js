import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { mainTheme } from './config/theme/main';
import { Router } from './routes';
import { store } from './store';
import { GlobalStyle } from './style/global';

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={mainTheme}>
                <GlobalStyle />
                <Provider store={store}>
                    <Router></Router>
                </Provider>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
