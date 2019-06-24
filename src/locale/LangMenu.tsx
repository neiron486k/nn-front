import React from 'react';
import { createStyles, Theme, WithStyles } from '@material-ui/core/styles'
import withStyles from "@material-ui/core/styles/withStyles";
import { Button } from "@material-ui/core";
import classnames from 'classnames'

const styles = (theme: Theme) => createStyles({
    root: {
        color: "#fff"
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string
}

const LangMenu = ({ classes, className }: Props) => {
    return (
        <div className={classnames(classes.root, className)}>
            <Button color={"inherit"} component={"span"}>English</Button>
            <Button color={"inherit"} component={"span"}>Русский</Button>
        </div>
    )
};

export default withStyles(styles)(LangMenu)

