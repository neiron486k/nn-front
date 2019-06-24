import React from 'react';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        background: 'none'
    }
});

interface Props extends WithStyles<typeof styles> {
}

const Header = ({ classes }: Props) => {
    return (
        <AppBar position={"fixed"} elevation={0} className={classes.root}>
            <Toolbar>
                <Typography variant="h6">
                    Neironet
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default withStyles(styles)(Header)