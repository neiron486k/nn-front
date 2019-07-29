import React from 'react'
import { createStyles, Theme } from "@material-ui/core";
import { withStyles, WithStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './routes';
import TagManager from 'react-gtm-module'

const styles = (theme: Theme) => createStyles({
    '@global': {
        body: {
            overflow: 'hidden'
        }
    }
});

interface Props extends WithStyles<typeof styles> {
}

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID,
};

TagManager.initialize(tagManagerArgs);

const App = ({ classes }: Props) => {
    return (
        <div>
            <Router>
                {routes.map((route, index) =>
                    <Route path={route.path} component={route.component} exact={route.exact} key={index} />
                )}
            </Router>
        </div>
    )
};

export default withStyles(styles)(App)