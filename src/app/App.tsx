import React from 'react'
import { createStyles, Theme } from "@material-ui/core";
import { withStyles, WithStyles } from '@material-ui/styles';
import Header from "../header/Header";
import Feedback from "../feedback/Feedback";
import RightPane from "../pane/RightPane";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './routes';

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
            <Router>
                <Header />
                {routes.map((route, index) =>
                    <Route path={route.path} component={route.component} exact={route.exact} key={index} />
                )}
                <RightPane />
                <Feedback />
            </Router>
        </div>
    )
};

export default withStyles(styles)(App)