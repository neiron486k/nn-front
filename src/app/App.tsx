import React from 'react'
import { createStyles, Theme } from "@material-ui/core";
import { withStyles, WithStyles } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Intro from "../section/intro/Intro";
import Header from "../header/Header";
import Feedback from "../feedback/Feedback";

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
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
                <Feedback />
            </div>
        </div>
    )
};

export default withStyles(styles)(App)