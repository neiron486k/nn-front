import React from 'react'
import { createStyles, Theme, WithStyles } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
    }
});

interface IProps extends WithStyles<typeof styles>{
    id: string
    children: any
}

const Section = ({id, classes, children}: IProps) => {
    return (
        <div id={id} className={classes.root}>
            {children}
        </div>
    )
};

export default withStyles(styles)(Section)