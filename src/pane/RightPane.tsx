import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import LangMenu from "../locale/LangMenu";
import Feedback from "../feedback/Feedback";

const styles = (theme: Theme) => createStyles({
    root: {
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        position: 'fixed',
        right: 0,
        top: theme.spacing(8),
        bottom: theme.spacing(8),
        zIndex: theme.zIndex.appBar + 1,
        color: "#fff",
        display: 'flex',
    },
    lang: {
        flexGrow: 1
    },
});

interface IProps extends WithStyles<typeof styles> {
}

const RightPane = ({ classes }: IProps) => {
    return (
        <div className={classes.root}>
            <LangMenu className={classes.lang} />
            <Feedback />
        </div>
    )
};

export default withStyles(styles)(RightPane)