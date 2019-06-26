import React from 'react';
import { createStyles, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100%',
        background: '#ceaaaa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

interface IProps extends WithStyles<typeof styles> {
}

const Contact = ({classes}: IProps) => {
    return (
        <div className={classes.root}>
            Contacts is under construction
        </div>
    )
};

export default withStyles(styles)(Contact)