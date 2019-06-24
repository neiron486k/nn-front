import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/App";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './app/theme';
import { Provider } from "react-redux"
import store from "./app/store";
import { getLocale, setLocale } from "./locale/localeOperation";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

// get locale
let lang = getLocale();
(store.dispatch as ThunkDispatch<{}, {}, AnyAction>)(setLocale(lang) );

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
