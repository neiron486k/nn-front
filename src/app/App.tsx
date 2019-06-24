import React from 'react'
import { Theme } from "@material-ui/core";
import { withStyles, WithStyles } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Intro from "../section/intro/Intro";
import Header from "../header/Header";

const styles = (theme: Theme) => ({
    root: {
        height: '100vh',
        overflow: 'hidden'
    },
});

interface Props extends WithStyles<typeof styles> {
}

const sections = [
    <Intro />
];

const App = ({ classes }: Props) => {
    return (
        <div>
            <CssBaseline />
            <div className={classes.root}>
                <Header />
                {sections[0]}
            </div>
        </div>
    )
};

export default withStyles(styles)(App)