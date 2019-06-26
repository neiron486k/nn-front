import React from 'react'
import { createStyles, Theme } from "@material-ui/core";
import { withStyles, WithStyles } from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../header/Header";
import Feedback from "../feedback/Feedback";
import Landing from "../pages/landing/Landing";
import RightPane from "../pane/RightPane";

const styles = (theme: Theme) => createStyles({
    '@global': {
        body: {
            overflow: 'hidden'
        }
    }
});

interface Props extends WithStyles<typeof styles> {
}

const App = ({ classes }: Props) => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <Landing />
            <RightPane />
            <Feedback />
        </div>
    )
};

export default withStyles(styles)(App)