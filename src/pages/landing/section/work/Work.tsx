import { createStyles, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100%',
        background: '#9fceaf',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

interface IProps extends WithStyles<typeof styles> {
}

const Work = ({classes}: IProps) => {
    return (
        <div className={classes.root}>
            Works is under construction
        </div>
    )
};

export default withStyles(styles)(Work)