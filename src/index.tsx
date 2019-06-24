import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/App";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './app/theme';
import { Provider } from "react-redux"
import store from "./app/store";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
