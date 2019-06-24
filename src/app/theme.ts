import { red } from '@material-ui/core/colors';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Play',
            'Montserrat',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(',')
    }
});

export default theme;